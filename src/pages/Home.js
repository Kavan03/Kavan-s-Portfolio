import React from 'react';
import AboutSection from '../components/AboutSection';
import AppreciationSection from '../components/AppreciationSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import MainSection from '../components/MainSection';
import ServiceSection from '../components/ServiceSection';
import ExperienceSection from '../components/ExperienceSection';

export default function Home() {
  return (
    <div>
      <MainSection />
      <AboutSection />
      <ExperienceSection />
      <ServiceSection />
      <AppreciationSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
