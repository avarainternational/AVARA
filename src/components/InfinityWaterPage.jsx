import React, { useState, useEffect } from 'react';
import { ArrowRight, Droplets, Smartphone, ShieldCheck, Sparkles, Heart, Users, BookOpen, Bell, ArrowLeft, CheckCircle2, MessageCircle, Activity, Award } from 'lucide-react';
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
    <div className="infinity-theme" style={{ minHeight: '100vh', background: '#070F1B', color: '#F0F9FF', fontFamily: 'var(--font-sans)' }}>
      {/* ─── HEADER ─── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(7, 15, 27, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
          padding: '0.85rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img
              src={infinityLogo}
              alt="Infinity Water Logo"
              style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(14, 165, 233, 0.4)' }}
            />
            <span style={{ fontWeight: '800', fontSize: '1.2rem', letterSpacing: '0.08em', color: '#FFFFFF' }}>
              INFINITY <span style={{ color: '#38BDF8' }}>WATER</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="infinity-nav">
            <a href="#mission" style={linkStyle}>Our Mission</a>
            <a href="#care-features" style={linkStyle}>Care Features</a>
            <a href="#health-news" style={linkStyle}>Health News</a>
            <a href="#mobile-app" style={linkStyle}>Mobile App</a>
          </nav>

          {/* Back to AVARA Button */}
          <button
            onClick={onNavigateToAvara}
            style={{
              background: 'rgba(14, 165, 233, 0.12)',
              border: '1px solid rgba(14, 165, 233, 0.4)',
              color: '#38BDF8',
              padding: '0.5rem 1.1rem',
              borderRadius: '980px',
              fontSize: '0.82rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(14, 165, 233, 0.25)';
              e.currentTarget.style.borderColor = '#38BDF8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(14, 165, 233, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)';
            }}
          >
            <ArrowLeft size={14} /> Return to AVARA
          </button>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section
        style={{
          paddingTop: '8.5rem',
          paddingBottom: '5rem',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.18) 0%, rgba(7, 15, 27, 1) 70%)',
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            {/* Eyebrow Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                padding: '0.4rem 0.95rem',
                borderRadius: '100px',
                color: '#38BDF8',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                marginBottom: '1.2rem',
              }}
            >
              <Heart size={14} color="#38BDF8" /> MORE THAN HYDRATION — WE CARE FOR YOU
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                fontWeight: '800',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.2rem',
                color: '#FFFFFF',
              }}
            >
              Nurturing Health. <br />
              <span style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 50%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Caring for Those You Love.
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '2.2rem', maxWidth: '560px' }}>
              Infinity Water is a free wellness application designed to help you stay properly hydrated, discover daily verified health news, and send caring hydration reminders to family and friends. Because genuine health is shared.
            </p>

            {/* Action CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#mobile-app" className="btn-aqua-primary">
                <Smartphone size={16} /> Get the Free App
              </a>
              <a href="#care-features" className="btn-aqua-outline">
                Explore Care Features <ArrowRight size={16} />
              </a>
            </div>

            {/* Spec Badges */}
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', color: '#CBD5E1', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Droplets size={16} color="#38BDF8" /> Smart Hydration Reminders
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Users size={16} color="#38BDF8" /> Family Care Nudges
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={16} color="#38BDF8" /> Daily Health News
              </div>
            </div>
          </div>

          {/* Hero Rotating Image Showcase (1.5s interval with smooth animation) */}
          <div style={{ textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                height: '520px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Radial ambient glow behind images */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '380px',
                  height: '380px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(14, 165, 233, 0.38) 0%, rgba(2, 132, 199, 0.08) 55%, transparent 75%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                }}
              />

              {/* 3 Layered Images cycling every 1.5 seconds */}
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
                      maxHeight: '480px',
                      maxWidth: '90%',
                      objectFit: 'contain',
                      transform: isActive
                        ? 'translate(-50%, -50%) scale(1) translateY(0px)'
                        : 'translate(-50%, -50%) scale(0.92) translateY(16px)',
                      opacity: isActive ? 1 : 0,
                      filter: isActive
                        ? 'drop-shadow(0 20px 45px rgba(14, 165, 233, 0.45)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))'
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
                    background: activeImageIndex === idx ? 'linear-gradient(90deg, #38BDF8, #0EA5E9)' : 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    boxShadow: activeImageIndex === idx ? '0 0 10px rgba(56, 189, 248, 0.6)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY / MISSION SECTION ─── */}
      <section
        id="mission"
        style={{
          padding: '5.5rem 0',
          background: '#0B192C',
          borderTop: '1px solid rgba(14, 165, 233, 0.15)',
          borderBottom: '1px solid rgba(14, 165, 233, 0.15)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
              OUR CARE PHILOSOPHY
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.2rem', lineHeight: 1.15 }}>
              We Don’t Just Deliver Water. <br />
              <span style={{ color: '#38BDF8' }}>We Care for Your Well-Being.</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7 }}>
              At AVARA, we believe true corporate responsibility means actively uplifting the physical and emotional health of our community. Infinity Water is built not as a commercial store, but as a genuine wellness platform that puts human health and family relationships first.
            </p>
          </div>

          {/* 3 Core Value Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                borderRadius: '20px',
                padding: '2.2rem 1.8rem',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(14, 165, 233, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                }}
              >
                <Heart size={24} color="#38BDF8" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                Health Over Transactions
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: 1.65 }}>
                Our application is 100% free with no aggressive sales or paywalls. Our sole mission is to guide you toward optimal daily hydration and vibrant vitality.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                borderRadius: '20px',
                padding: '2.2rem 1.8rem',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(14, 165, 233, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                }}
              >
                <Users size={24} color="#38BDF8" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                Connecting & Caring for Loved Ones
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: 1.65 }}>
                Reminding an aging parent or busy partner to drink water is a simple act of love. Our Family Care Circle makes checking in on your family's hydration effortless.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                borderRadius: '20px',
                padding: '2.2rem 1.8rem',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(14, 165, 233, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                }}
              >
                <BookOpen size={24} color="#38BDF8" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                Daily Health Education
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: 1.65 }}>
                Knowledge empowers wellness. Receive daily verified insights on cellular hydration, nutrition, metabolic health, and stress management curated by health experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARE FEATURES DETAILED SECTION ─── */}
      <section id="care-features" style={{ padding: '6rem 0', background: '#070F1B' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4.5rem auto' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
              POWERFUL WELLNESS FEATURES
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.2rem' }}>
              Thoughtfully Designed for Daily Well-Being
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Every feature in Infinity Water is crafted to make healthy living enjoyable, supportive, and deeply connected with those you care about.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.8rem' }}>
            {/* Feature 1: Mindful Reminders */}
            <div style={featureCardStyle}>
              <div style={featureIconBoxStyle}>
                <Bell size={22} color="#38BDF8" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                Smart & Mindful Reminders
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Adaptive prompts that calculate your optimal hydration schedule based on activity levels, ambient temperature, and personal routines without interrupting your focus.
              </p>
            </div>

            {/* Feature 2: Family Care Circle */}
            <div style={featureCardStyle}>
              <div style={featureIconBoxStyle}>
                <Heart size={22} color="#38BDF8" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                Family & Relations Care
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Create a private care circle with parents, children, or friends. Check in on each other’s hydration progress and send 1-tap caring cheer nudges throughout the day.
              </p>
            </div>

            {/* Feature 3: Health News & Insights */}
            <div style={featureCardStyle}>
              <div style={featureIconBoxStyle}>
                <Activity size={22} color="#38BDF8" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                Daily Health Briefs
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Verified bite-sized articles covering sleep quality, brain health, electrolyte balance, and preventive wellness from leading health research publications.
              </p>
            </div>

            {/* Feature 4: Wellness Streaks & Rewards */}
            <div style={featureCardStyle}>
              <div style={featureIconBoxStyle}>
                <Award size={22} color="#38BDF8" />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                Mindful Habit Streaks
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
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
          padding: '5.5rem 0',
          background: 'linear-gradient(180deg, #070F1B 0%, #0B192C 100%)',
          borderTop: '1px solid rgba(14, 165, 233, 0.15)',
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                VERIFIED HEALTH & MEDICAL UPDATES
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.2rem', lineHeight: 1.2 }}>
                Stay Informed. <br />
                <span style={{ color: '#38BDF8' }}>Stay Empowered.</span>
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Infinity Water features a dedicated newsfeed curated by certified wellness researchers. Receive science-backed tips on hydration, energy maintenance, and everyday nutrition.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                      <span style={{ color: '#38BDF8', fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase' }}>{news.tag}</span>
                      <span style={{ color: '#64748B', fontSize: '0.7rem' }}>{news.time}</span>
                    </div>
                    <div style={{ color: '#F0F9FF', fontSize: '0.92rem', fontWeight: '600', lineHeight: 1.4 }}>{news.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Family Care Circle Showcase Graphic */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(2, 132, 199, 0.04) 100%)',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  background: '#070F1B',
                  borderRadius: '20px',
                  border: '1px solid rgba(14, 165, 233, 0.4)',
                  padding: '1.8rem 1.4rem',
                  maxWidth: '340px',
                  margin: '0 auto',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F0F9FF', fontWeight: '700', fontSize: '0.88rem' }}>
                    <Heart size={16} color="#EC4899" /> Family Care Circle
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#38BDF8', background: 'rgba(14, 165, 233, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '980px', fontWeight: '600' }}>
                    3 Members
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.2rem' }}>
                  {/* Family member 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0F172A', padding: '0.75rem 0.9rem', borderRadius: '12px' }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ color: '#FFFFFF', fontSize: '0.84rem', fontWeight: '600' }}>Mom (Sarah)</div>
                      <div style={{ color: '#38BDF8', fontSize: '0.72rem' }}>1,900 / 2,000 ml (95%)</div>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: '700' }}>Goal Met 🎉</span>
                  </div>

                  {/* Family member 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0F172A', padding: '0.75rem 0.9rem', borderRadius: '12px' }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ color: '#FFFFFF', fontSize: '0.84rem', fontWeight: '600' }}>Dad (Robert)</div>
                      <div style={{ color: '#94A3B8', fontSize: '0.72rem' }}>1,100 / 2,200 ml (50%)</div>
                    </div>
                    <button
                      style={{
                        background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                        border: 'none',
                        color: '#FFFFFF',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        padding: '0.35rem 0.65rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                      }}
                    >
                      Send Nudge ❤️
                    </button>
                  </div>

                  {/* Family member 3 */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#0F172A', padding: '0.75rem 0.9rem', borderRadius: '12px' }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ color: '#FFFFFF', fontSize: '0.84rem', fontWeight: '600' }}>You</div>
                      <div style={{ color: '#38BDF8', fontSize: '0.72rem' }}>1,850 / 2,400 ml (77%)</div>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#38BDF8', fontWeight: '600' }}>Active</span>
                  </div>
                </div>

                <div style={{ fontSize: '0.72rem', color: '#64748B', lineHeight: 1.4 }}>
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
          padding: '6rem 0',
          background: '#0B192C',
          borderTop: '1px solid rgba(14, 165, 233, 0.2)',
          borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              FREE DOWNLOAD • IOS & ANDROID
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.2rem', lineHeight: 1.15 }}>
              Start Your Journey to <br />
              <span style={{ color: '#38BDF8' }}>Better Hydration & Genuine Care</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.08rem', lineHeight: 1.65, marginBottom: '2.5rem', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
              Download the Infinity Water wellness companion today on Apple App Store or Google Play Store. Free forever, no subscription required.
            </p>

            {/* Store Badges */}
            <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              {/* Apple App Store Button */}
              <a
                href="#app-store"
                onClick={(e) => e.preventDefault()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  background: '#000000',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '14px',
                  padding: '0.75rem 1.6rem',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#38BDF8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'; }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.64-.78 1.08-1.86.96-2.94-.93.04-2.07.62-2.73 1.39-.59.68-1.11 1.78-.97 2.84 1.05.08 2.11-.51 2.74-1.29z" />
                </svg>
                <div style={{ textTransform: 'none', textAlign: 'left' }}>
                  <div style={{ fontSize: '0.66rem', color: '#A1A1AA', letterSpacing: '0.02em', lineHeight: 1 }}>Download on the</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', fontFamily: 'sans-serif', lineHeight: 1.2 }}>App Store</div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#google-play"
                onClick={(e) => e.preventDefault()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  background: '#000000',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '14px',
                  padding: '0.75rem 1.6rem',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#38BDF8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'; }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M3.6 2.3L13.8 12.5L3.6 22.7C3.2 22.2 3 21.4 3 20.4V3.6C3 2.6 3.2 1.8 3.6 2.3Z" />
                  <path fill="#FBBC04" d="M17.4 8.9L14.7 11.6L13.8 12.5L14.7 13.4L17.4 16.1L20.6 14.3C21.7 13.7 21.7 12.3 20.6 11.7L17.4 8.9Z" />
                  <path fill="#4285F4" d="M3.6 2.3L13.8 12.5L17.4 8.9L5.4 2.1C4.8 1.7 4.1 1.8 3.6 2.3Z" />
                  <path fill="#34A853" d="M3.6 22.7C4.1 23.2 4.8 23.3 5.4 22.9L17.4 16.1L13.8 12.5L3.6 22.7Z" />
                </svg>
                <div style={{ textTransform: 'none', textAlign: 'left' }}>
                  <div style={{ fontSize: '0.66rem', color: '#A1A1AA', letterSpacing: '0.02em', lineHeight: 1, textTransform: 'uppercase' }}>GET IT ON</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', fontFamily: 'sans-serif', lineHeight: 1.2 }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: '1px solid rgba(14, 165, 233, 0.2)', background: '#050B14', padding: '2.5rem 0', color: '#64748B', fontSize: '0.82rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src={infinityLogo} alt="Logo" style={{ width: '22px', height: '22px', borderRadius: '50%' }} />
            <span>© {new Date().getFullYear()} Infinity Water Technologies. A Digital Health Initiative by AVARA International Co., Ltd.</span>
          </div>

          <button
            onClick={onNavigateToAvara}
            style={{
              background: 'none',
              border: 'none',
              color: '#38BDF8',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <img src={avaraLogo} alt="AVARA" style={{ height: '18px', width: 'auto' }} />
            Switch to AVARA International →
          </button>
        </div>
      </footer>

      {/* Helper styles */}
      <style>{`
        .btn-aqua-primary {
          background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
          color: #FFFFFF;
          font-weight: 700;
          padding: 0.85rem 1.8rem;
          border-radius: 980px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-aqua-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(14, 165, 233, 0.5);
        }
        .btn-aqua-outline {
          background: transparent;
          color: #F0F9FF;
          font-weight: 600;
          padding: 0.85rem 1.8rem;
          border-radius: 980px;
          border: 1px solid rgba(14, 165, 233, 0.4);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }
        .btn-aqua-outline:hover {
          background: rgba(14, 165, 233, 0.15);
          border-color: #38BDF8;
        }
        @media (max-width: 768px) {
          .infinity-nav {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

const linkStyle = {
  color: '#E0F2FE',
  textDecoration: 'none',
  fontSize: '0.88rem',
  fontWeight: '500',
  transition: 'color 0.2s ease',
};

const featureCardStyle = {
  background: 'rgba(255, 255, 255, 0.025)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '18px',
  padding: '1.8rem 1.5rem',
  transition: 'transform 0.25s ease, border-color 0.25s ease',
};

const featureIconBoxStyle = {
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  background: 'rgba(14, 165, 233, 0.12)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.2rem',
};
