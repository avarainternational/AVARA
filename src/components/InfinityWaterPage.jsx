import React, { useState, useEffect } from 'react';
import { ArrowRight, Droplets, Smartphone, Heart, Users, BookOpen, Bell, ArrowLeft, Activity, Award } from 'lucide-react';
import infinityLogoImport from '../assets/infinity/logo.png';
import infinityBottleImport from '../assets/infinity/bottle.png';
import infinityWaterImport from '../assets/infinity/infinity.png';
import infinityBothImport from '../assets/infinity/both.png';
import avaraLogoImport from '../assets/avara/logo.png';

const infinityLogo = infinityLogoImport || '/infinity/logo.png';
const infinityBottle = infinityBottleImport || '/infinity/bottle.png';
const infinityWater = infinityWaterImport || '/infinity/infinity.png';
const infinityBoth = infinityBothImport || '/infinity/both.png';
const avaraLogo = avaraLogoImport || '/logo/logo.png';

const showcaseImages = [
  { src: infinityBottle, alt: 'Infinity Water Premium Bottle' },
  { src: infinityWater, alt: 'Infinity Water Hydration Wellness' },
  { src: infinityBoth, alt: 'Infinity Water Complete Care Collection' },
];

export default function InfinityWaterPage({ onNavigateToAvara }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="infinity-theme" style={{ minHeight: '100vh', background: '#070B14', color: '#F8FAFC', fontFamily: 'var(--font-sans)', overflowX: 'hidden', width: '100%' }}>
      {/* ─── HEADER ─── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(7, 11, 20, 0.92)',
          backdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.75rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src={infinityLogo}
              alt="Infinity Water Logo"
              style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.4)' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.1rem', letterSpacing: '-0.01em', color: '#FFFFFF', lineHeight: 1.1 }}>
                INFINITY <span style={{ color: '#C5A059' }}>WATER</span>
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', letterSpacing: '0.12em', color: '#C5A059', textTransform: 'uppercase', fontWeight: '600' }}>
                Digital Health Initiative
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }} className="infinity-desktop-nav">
            <a href="#mission" className="apple-nav-tab">Our Mission</a>
            <a href="#care-features" className="apple-nav-tab">Care Features</a>
            <a href="#health-news" className="apple-nav-tab">Health News</a>
            <a href="#mobile-app" className="apple-nav-tab">Mobile App</a>
          </nav>

          {/* Back to AVARA Button: minimum 44px tap target */}
          <button
            onClick={onNavigateToAvara}
            style={{
              background: 'rgba(197, 160, 89, 0.12)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              color: '#C5A059',
              padding: '0.55rem 1rem',
              minHeight: '44px',
              borderRadius: '980px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(197, 160, 89, 0.22)';
              e.currentTarget.style.borderColor = '#D4AF37';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(197, 160, 89, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.35)';
              e.currentTarget.style.color = '#C5A059';
            }}
          >
            <ArrowLeft size={14} /> Return to AVARA
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section
        style={{
          paddingTop: '6.5rem',
          paddingBottom: '4.5rem',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(165deg, #070B14 0%, #0D1527 45%, #131F3B 100%)',
        }}
      >
        {/* Geometric Grid Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="infinity-hero-grid">
            <div>
              {/* Eyebrow / Badges: 11px on mobile, 0.08em tracking to eliminate wrapping */}
              <div
                className="eyebrow-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '100px',
                  marginBottom: '1.2rem',
                }}
              >
                <Heart size={13} color="#C5A059" /> MORE THAN HYDRATION — WE CARE FOR YOU
              </div>

              {/* H1 (Hero Title): fluid clamp 32px-36px mobile, 52px desktop */}
              <h1
                className="heading-hero"
                style={{
                  marginBottom: '1.3rem',
                }}
              >
                Nurturing Health. <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F0D78C 50%, #C5A059 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Caring for Those You Love.
                </span>
              </h1>

              {/* Subtitle: 15px mobile, 16px desktop, line-height 1.6-1.65 */}
              <p
                className="body-prose-dark"
                style={{
                  marginBottom: '2rem',
                }}
              >
                Infinity Water is an intuitive wellness application designed to help you cultivate healthy hydration habits, discover daily verified wellness news, and send caring reminders to family and friends. Because genuine health is shared.
              </p>

              {/* Action CTAs: Full-width stacked on mobile with 48px touch targets, inline on desktop */}
              <div className="cta-button-group" style={{ marginBottom: '2.2rem' }}>
                <a
                  href="#mobile-app"
                  className="btn-gold btn-responsive"
                >
                  <Smartphone size={16} /> Get the Free App
                </a>

                <a
                  href="#care-features"
                  className="btn-outline btn-responsive"
                >
                  Explore Care Features <ArrowRight size={16} />
                </a>
              </div>

              {/* Spec Badges: clean stacking on small mobile */}
              <div className="infinity-spec-badges">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Droplets size={16} color="#C5A059" /> Smart Hydration
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Users size={16} color="#C5A059" /> Family Care Nudges
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <BookOpen size={16} color="#C5A059" /> Daily Health News
                </div>
              </div>
            </div>

            {/* Hero Rotating Image Showcase: responsive height */}
            <div style={{ textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div className="infinity-showcase-container">
                {/* Radial ambient glow behind images */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'min(320px, 80vw)',
                    height: 'min(320px, 80vw)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(197, 160, 89, 0.22) 0%, rgba(13, 21, 39, 0.08) 60%, transparent 75%)',
                    filter: 'blur(35px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Cycling Images */}
                {showcaseImages.map((image, idx) => {
                  const isActive = activeImageIndex === idx;
                  return (
                    <img
                      key={idx}
                      src={image.src}
                      alt={image.alt}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        maxHeight: '92%',
                        maxWidth: '90%',
                        objectFit: 'contain',
                        transform: isActive
                          ? 'translate(-50%, -50%) scale(1) translateY(0px)'
                          : 'translate(-50%, -50%) scale(0.92) translateY(16px)',
                        opacity: isActive ? 1 : 0,
                        filter: isActive
                          ? 'drop-shadow(0 16px 35px rgba(197, 160, 89, 0.35)) drop-shadow(0 4px 12px rgba(0,0,0,0.6))'
                          : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
                        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease',
                        pointerEvents: isActive ? 'auto' : 'none',
                        zIndex: isActive ? 2 : 1,
                      }}
                    />
                  );
                })}
              </div>

              {/* Slide Navigation Indicator Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.8rem',
                  zIndex: 5,
                }}
              >
                {showcaseImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: activeImageIndex === idx ? '28px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: activeImageIndex === idx ? 'linear-gradient(90deg, #D4AF37, #C5A059)' : 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.35s ease',
                      boxShadow: activeImageIndex === idx ? '0 0 10px rgba(197, 160, 89, 0.6)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY / MISSION SECTION ─── */}
      <section
        id="mission"
        style={{
          padding: 'clamp(3.5rem, 6vw, 6rem) 0',
          background: '#0D1527',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
            {/* Eyebrow */}
            <div className="eyebrow-badge" style={{ marginBottom: '0.8rem' }}>
              Our Care Philosophy
            </div>

            {/* Section H2 */}
            <h2
              className="heading-section"
              style={{
                marginBottom: '1.2rem',
              }}
            >
              We Don’t Just Deliver Water. <br />
              <span style={{ color: '#C5A059' }}>We Care for Your Well-Being.</span>
            </h2>

            {/* Body Description */}
            <p className="body-prose-dark" style={{ margin: '0 auto' }}>
              At AVARA, we believe true corporate responsibility means actively uplifting the physical and emotional health of our community. Infinity Water is built not as a commercial store, but as a genuine wellness platform that puts human health and family relationships first.
            </p>
          </div>

          {/* 3 Core Value Pillars: strictly 1 column on mobile */}
          <div className="infinity-cards-grid">
            <div className="responsive-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                }}
              >
                <Heart size={22} color="#C5A059" />
              </div>
              <h3
                className="heading-card"
                style={{
                  color: '#FFFFFF',
                  marginBottom: '0.65rem',
                }}
              >
                Health Over Transactions
              </h3>
              <p className="body-prose-dark">
                Our application is 100% free with no aggressive sales or paywalls. Our sole mission is to guide you toward optimal daily hydration and vibrant vitality.
              </p>
            </div>

            <div className="responsive-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                }}
              >
                <Users size={22} color="#C5A059" />
              </div>
              <h3
                className="heading-card"
                style={{
                  color: '#FFFFFF',
                  marginBottom: '0.65rem',
                }}
              >
                Connecting & Caring for Loved Ones
              </h3>
              <p className="body-prose-dark">
                Reminding an aging parent or busy partner to drink water is a simple act of love. Our Family Care Circle makes checking in on your family's hydration effortless.
              </p>
            </div>

            <div className="responsive-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                }}
              >
                <BookOpen size={22} color="#C5A059" />
              </div>
              <h3
                className="heading-card"
                style={{
                  color: '#FFFFFF',
                  marginBottom: '0.65rem',
                }}
              >
                Daily Health Education
              </h3>
              <p className="body-prose-dark">
                Knowledge empowers wellness. Receive daily verified insights on cellular hydration, nutrition, metabolic health, and stress management curated by health experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARE FEATURES DETAILED SECTION ─── */}
      <section id="care-features" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: '#070B14' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            {/* Eyebrow */}
            <div className="eyebrow-badge" style={{ marginBottom: '0.8rem' }}>
              Powerful Wellness Features
            </div>

            {/* H2 */}
            <h2
              className="heading-section"
              style={{
                marginBottom: '1.1rem',
              }}
            >
              Thoughtfully Designed for Daily Well-Being
            </h2>

            {/* Body */}
            <p className="body-prose-dark" style={{ margin: '0 auto' }}>
              Every feature in Infinity Water is crafted to make healthy living enjoyable, supportive, and deeply connected with those you care about.
            </p>
          </div>

          <div className="infinity-features-grid">
            {/* Feature 1 */}
            <div className="responsive-card" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={featureIconBoxStyle}>
                <Bell size={22} color="#C5A059" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                Smart & Mindful Reminders
              </h4>
              <p className="body-prose-dark" style={{ fontSize: '0.94rem' }}>
                Adaptive prompts that calculate your optimal hydration schedule based on activity levels, ambient temperature, and personal routines without interrupting your focus.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="responsive-card" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={featureIconBoxStyle}>
                <Heart size={22} color="#C5A059" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                Family & Relations Care
              </h4>
              <p className="body-prose-dark" style={{ fontSize: '0.94rem' }}>
                Create a private care circle with parents, children, or friends. Check in on each other’s hydration progress and send 1-tap caring cheer nudges throughout the day.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="responsive-card" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={featureIconBoxStyle}>
                <Activity size={22} color="#C5A059" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                Daily Health Briefs
              </h4>
              <p className="body-prose-dark" style={{ fontSize: '0.94rem' }}>
                Verified bite-sized articles covering sleep quality, brain health, electrolyte balance, and preventive wellness from leading health research publications.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="responsive-card" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={featureIconBoxStyle}>
                <Award size={22} color="#C5A059" />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                Mindful Habit Streaks
              </h4>
              <p className="body-prose-dark" style={{ fontSize: '0.94rem' }}>
                Celebrate steady progress with gentle milestones, personalized health badges, and weekly wellness recaps that keep you inspired every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HEALTH NEWS & WELLNESS FEED PREVIEW ─── */}
      <section
        id="health-news"
        style={{
          padding: 'clamp(3.5rem, 6vw, 6rem) 0',
          background: 'linear-gradient(180deg, #070B14 0%, #0D1527 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <div className="infinity-news-layout">
            <div>
              {/* Eyebrow */}
              <div className="eyebrow-badge" style={{ marginBottom: '0.8rem' }}>
                Verified Health & Medical Updates
              </div>

              {/* H2 */}
              <h2
                className="heading-section"
                style={{
                  marginBottom: '1.1rem',
                }}
              >
                Stay Informed. <br />
                <span style={{ color: '#C5A059' }}>Stay Empowered.</span>
              </h2>

              <p className="body-prose-dark" style={{ marginBottom: '1.8rem' }}>
                Infinity Water features a dedicated newsfeed curated by certified wellness researchers. Receive science-backed tips on hydration, energy maintenance, and everyday nutrition.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  {
                    tag: 'Hydration Science',
                    title: 'How 500ml of Morning Water Boosts Cognitive Function by 14%',
                    time: 'Today • 2 min read',
                  },
                  {
                    tag: 'Family Wellness',
                    title: 'Hydration Guidelines for Aging Parents: Signs of Dehydration to Watch',
                    time: 'Yesterday • 3 min read',
                  },
                  {
                    tag: 'Lifestyle & Energy',
                    title: 'Electrolytes vs. Pure Water: When and How to Balance for Peak Vitality',
                    time: '3 days ago • 2 min read',
                  },
                ].map((news, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      padding: '1rem 1.2rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span style={{ fontFamily: 'var(--font-display)', color: '#C5A059', fontSize: '0.72rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {news.tag}
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', color: '#94A3B8', fontSize: '0.75rem' }}>{news.time}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', color: '#F8FAFC', fontSize: '0.92rem', fontWeight: '600', lineHeight: 1.4 }}>
                      {news.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Family Care Circle Showcase Graphic */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(197, 160, 89, 0.1) 0%, rgba(13, 21, 39, 0.04) 100%)',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                borderRadius: '20px',
                padding: '1.5rem',
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  background: '#070B14',
                  borderRadius: '16px',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  padding: '1.4rem 1.2rem',
                  maxWidth: '340px',
                  margin: '0 auto',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F8FAFC', fontWeight: '600', fontSize: '0.88rem', fontFamily: 'var(--font-display)' }}>
                    <Heart size={16} color="#C5A059" /> Family Care Circle
                  </div>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: '#C5A059', background: 'rgba(197, 160, 89, 0.15)', padding: '0.2rem 0.55rem', borderRadius: '980px', fontWeight: '600', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                    3 Members
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1rem' }}>
                  {/* Family member 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0F172A', padding: '0.7rem 0.85rem', borderRadius: '12px' }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: '600', fontFamily: 'var(--font-display)' }}>Mom (Sarah)</div>
                      <div style={{ color: '#C5A059', fontSize: '0.7rem', fontFamily: 'var(--font-sans)' }}>1,900 / 2,000 ml (95%)</div>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: '700', fontFamily: 'var(--font-sans)' }}>Goal Met 🎉</span>
                  </div>

                  {/* Family member 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0F172A', padding: '0.7rem 0.85rem', borderRadius: '12px' }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: '600', fontFamily: 'var(--font-display)' }}>Dad (Robert)</div>
                      <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontFamily: 'var(--font-sans)' }}>1,100 / 2,200 ml (50%)</div>
                    </div>
                    <button
                      style={{
                        background: '#C5A059',
                        border: 'none',
                        color: '#0B132B',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: '600',
                        padding: '0.35rem 0.7rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        minHeight: '32px',
                      }}
                    >
                      Send Nudge ❤️
                    </button>
                  </div>

                  {/* Family member 3 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0F172A', padding: '0.7rem 0.85rem', borderRadius: '12px' }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: '600', fontFamily: 'var(--font-display)' }}>You</div>
                      <div style={{ color: '#C5A059', fontSize: '0.7rem', fontFamily: 'var(--font-sans)' }}>1,850 / 2,400 ml (77%)</div>
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#C5A059', fontWeight: '600', fontFamily: 'var(--font-sans)' }}>Active</span>
                  </div>
                </div>

                <div style={{ fontSize: '0.72rem', color: '#94A3B8', lineHeight: 1.4, fontFamily: 'var(--font-sans)' }}>
                  "Staying healthy together creates lasting habits."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MOBILE APP DOWNLOAD SECTION ─── */}
      <section
        id="mobile-app"
        style={{
          padding: 'clamp(3.5rem, 6vw, 6rem) 0',
          background: '#0D1527',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            {/* Eyebrow */}
            <div className="eyebrow-badge" style={{ marginBottom: '0.8rem' }}>
              Free Download • iOS & Android
            </div>

            {/* H2 */}
            <h2
              className="heading-section"
              style={{
                marginBottom: '1.1rem',
              }}
            >
              Start Your Journey to <br />
              <span style={{ color: '#C5A059' }}>Better Hydration & Genuine Care</span>
            </h2>

            {/* Body Description */}
            <p
              className="body-prose-dark"
              style={{
                margin: '0 auto 2rem auto',
              }}
            >
              Download the Infinity Water wellness companion today on Apple App Store or Google Play Store. Free forever, no subscriptions or in-app paywalls required.
            </p>

            {/* Store Badges: Stacks on mobile with 48px tap targets, row on desktop */}
            <div className="cta-button-group" style={{ justifyContent: 'center', alignItems: 'stretch' }}>
              {/* Apple App Store Button */}
              <a
                href="#app-store"
                onClick={(e) => e.preventDefault()}
                className="btn-responsive"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.85rem',
                  background: '#0B132B',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  borderRadius: '14px',
                  padding: '0.75rem 1.6rem',
                  minHeight: '48px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#C5A059';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(197, 160, 89, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.35)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.64-.78 1.08-1.86.96-2.94-.93.04-2.07.62-2.73 1.39-.59.68-1.11 1.78-.97 2.84 1.05.08 2.11-.51 2.74-1.29z" />
                </svg>
                <div style={{ textTransform: 'none', textAlign: 'left' }}>
                  <div style={{ fontSize: '0.66rem', color: '#94A3B8', letterSpacing: '0.02em', lineHeight: 1, fontFamily: 'var(--font-sans)' }}>Download on the</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>App Store</div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#google-play"
                onClick={(e) => e.preventDefault()}
                className="btn-responsive"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.85rem',
                  background: '#0B132B',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  borderRadius: '14px',
                  padding: '0.75rem 1.6rem',
                  minHeight: '48px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#C5A059';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(197, 160, 89, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.35)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M3.6 2.3L13.8 12.5L3.6 22.7C3.2 22.2 3 21.4 3 20.4V3.6C3 2.6 3.2 1.8 3.6 2.3Z" />
                  <path fill="#FBBC04" d="M17.4 8.9L14.7 11.6L13.8 12.5L14.7 13.4L17.4 16.1L20.6 14.3C21.7 13.7 21.7 12.3 20.6 11.7L17.4 8.9Z" />
                  <path fill="#4285F4" d="M3.6 2.3L13.8 12.5L17.4 8.9L5.4 2.1C4.8 1.7 4.1 1.8 3.6 2.3Z" />
                  <path fill="#34A853" d="M3.6 22.7C4.1 23.2 4.8 23.3 5.4 22.9L17.4 16.1L13.8 12.5L3.6 22.7Z" />
                </svg>
                <div style={{ textTransform: 'none', textAlign: 'left' }}>
                  <div style={{ fontSize: '0.66rem', color: '#94A3B8', letterSpacing: '0.02em', lineHeight: 1, textTransform: 'uppercase', fontFamily: 'var(--font-sans)' }}>GET IT ON</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', background: '#050B14', padding: '2rem 0', color: '#94A3B8', fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={infinityLogo} alt="Logo" style={{ width: '22px', height: '22px', borderRadius: '50%' }} />
            <span>© {new Date().getFullYear()} Infinity Water Technologies. A Digital Health Venture by AVARA International Co., Ltd.</span>
          </div>

          <button
            onClick={onNavigateToAvara}
            style={{
              background: 'none',
              border: 'none',
              color: '#C5A059',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-sans)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              minHeight: '44px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#C5A059')}
          >
            <img src={avaraLogo} alt="AVARA" style={{ height: '18px', width: 'auto' }} />
            Return to AVARA International →
          </button>
        </div>
      </footer>

      {/* Component Specific Responsive Rules */}
      <style>{`
        .infinity-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .infinity-showcase-container {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: clamp(300px, 70vw, 480px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .infinity-spec-badges {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
          color: #CBD5E1;
          flex-wrap: wrap;
        }
        .infinity-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .infinity-features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .infinity-news-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 640px) {
          .infinity-features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.8rem;
          }
          .infinity-cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }
        }
        @media (min-width: 768px) {
          .infinity-desktop-nav {
            display: flex !important;
          }
        }
        @media (min-width: 900px) {
          .infinity-hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3.5rem;
          }
          .infinity-news-layout {
            grid-template-columns: 1fr 1fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
}

const featureIconBoxStyle = {
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  background: 'rgba(197, 160, 89, 0.12)',
  border: '1px solid rgba(197, 160, 89, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.2rem',
};
