import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function SpinningEarth3D({ className = '', style = {} }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let renderer, scene, camera, controls, modelGroup;

    try {
      // Scene
      scene = new THREE.Scene();

      // Camera
      const width = container.clientWidth || 600;
      const height = container.clientHeight || 600;
      camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.set(0, 0.2, 5.0);

      // Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      container.appendChild(renderer.domElement);

      // Controls (auto-rotate only, no user interaction since it's a background element)
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.75;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xfffaed, 3.2);
      mainLight.position.set(6, 5, 7);
      scene.add(mainLight);

      const blueFillLight = new THREE.DirectionalLight(0x38bdf8, 2.4);
      blueFillLight.position.set(-6, -2, -4);
      scene.add(blueFillLight);

      const goldRimLight = new THREE.DirectionalLight(0xd4af37, 2.8);
      goldRimLight.position.set(-2, 7, -5);
      scene.add(goldRimLight);

      // Model Group
      modelGroup = new THREE.Group();
      scene.add(modelGroup);

      // Load GLTF Model
      const loader = new GLTFLoader();
      loader.load(
        '/3d/airports_around_the_world.glb',
        (gltf) => {
          const model = gltf.scene;

          // Compute bounding box to center & scale precisely
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          // Center geometry
          model.position.x -= center.x;
          model.position.y -= center.y;
          model.position.z -= center.z;

          // Scale to fit viewport with ideal balance
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const targetScale = 3.35 / maxDim; // More compact globe
            modelGroup.scale.set(targetScale, targetScale, targetScale);
          }

          // Enhance material properties
          model.traverse((child) => {
            if (child.isMesh && child.material) {
              child.material.roughness = Math.min(child.material.roughness, 0.6);
              child.material.metalness = Math.max(child.material.metalness, 0.18);
              if (child.material.map) {
                child.material.map.anisotropy = 8;
              }
            }
          });

          // Elegant planetary tilt
          modelGroup.rotation.x = 0.26;
          modelGroup.rotation.z = -0.12;

          modelGroup.add(model);
          setLoading(false);
        },
        undefined,
        (error) => {
          console.warn('3D Globe load failed:', error);
          setLoadError(true);
          setLoading(false);
        }
      );

      // Resize Handler
      const handleResize = () => {
        if (!container) return;
        const newWidth = container.clientWidth || 500;
        const newHeight = container.clientHeight || 500;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      const resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(container);

      // Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        resizeObserver.disconnect();

        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }

        // Dispose Three.js objects
        scene.traverse((object) => {
          if (object.isMesh) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach((mat) => mat.dispose());
              } else {
                object.material.dispose();
              }
            }
          }
        });
        renderer.dispose();
      };
    } catch (err) {
      console.error('Error initializing Three.js earth:', err);
      setLoadError(true);
      setLoading(false);
    }
  }, []);

  return (
    <div
      className={`spinning-earth-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      {/* Loading indicator */}
      {loading && !loadError && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.8rem',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.82rem',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              border: '2px solid rgba(212, 175, 55, 0.2)',
              borderTopColor: '#D4AF37',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <span>Initializing Global Network...</span>
        </div>
      )}

      {/* Three.js Canvas — transparent background, globe renders as its natural sphere */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
