<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 text-white relative overflow-hidden">
    <!-- Background de luxo com múltiplas camadas -->
    <div class="fixed inset-0 pointer-events-none">
      <!-- Gradiente de fundo animado -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
      
      <!-- Partículas flutuantes de luxo -->
      <div class="absolute inset-0">
        <div class="luxury-particle particle-1"></div>
        <div class="luxury-particle particle-2"></div>
        <div class="luxury-particle particle-3"></div>
        <div class="luxury-particle particle-4"></div>
        <div class="luxury-particle particle-5"></div>
        <div class="luxury-particle particle-6"></div>
      </div>
      
      <!-- Blurs azuis decorativos com animação -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-radial-blue-soft blur-3xl opacity-20 animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-radial-cyan-soft blur-3xl opacity-15 animate-pulse"></div>
      <div class="absolute top-3/4 left-1/2 w-64 h-64 bg-radial-blue-soft blur-3xl opacity-10 animate-pulse"></div>
      
      <!-- Linhas de energia futurísticas -->
      <div class="energy-lines">
        <div class="energy-line line-1"></div>
        <div class="energy-line line-2"></div>
        <div class="energy-line line-3"></div>
      </div>
      
      <!-- Grid de luxo sutil -->
      <div class="luxury-grid"></div>
    </div>
    
    <div class="relative z-10">
      <Header 
        :mobileMenuOpen="mobileMenuOpen" 
        @toggle-mobile-menu="mobileMenuOpen = !mobileMenuOpen"
      />
      
      <HeroSection v-scroll-fade />
      <div class="section-spacer"></div>
      <AboutSection v-scroll-fade />
      <div class="section-spacer"></div>
      <ProjectsSection v-scroll-fade />
      <div class="section-spacer"></div>
      <SkillsSection v-scroll-fade />
      <div class="section-spacer"></div>
      <ExperienceSection v-scroll-fade />
      <div class="section-spacer"></div>
      <TestimonialsSection v-scroll-fade />
      <div class="section-spacer"></div>
      <CTASection v-scroll-fade />
      <div class="section-spacer-small"></div>
      <ContactSection v-scroll-fade />
      <Footer />
      <ChatBot />
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/SolutionsSection.vue'
import ProjectsSection from './components/WhyChooseUsSection.vue'
import SkillsSection from './components/CommitTree.vue'
import ExperienceSection from './components/SuccessCasesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CTASection from './components/CTASection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import ChatBot from './components/ChatBot.vue'

export default {
  name: 'App',
  components: {
    Header,
    HeroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ExperienceSection,
    TestimonialsSection,
    CTASection,
    ContactSection,
    Footer,
    ChatBot
  },
  data() {
    return {
      mobileMenuOpen: false
    }
  }
}
</script>

<style>
/* Scrollbar de luxo */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: linear-gradient(to bottom, #0F172A, #1E293B);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3B82F6, #06B6D4);
  border-radius: 6px;
  border: 2px solid #0F172A;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #60A5FA, #22D3EE);
}

html {
  scroll-behavior: smooth;
}

/* Partículas de luxo */
.luxury-particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, #3B82F6, #06B6D4);
  border-radius: 50%;
  opacity: 0.6;
  animation: luxuryFloat 8s ease-in-out infinite;
}

.particle-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  top: 30%;
  right: 15%;
  animation-delay: 1.5s;
}

.particle-3 {
  bottom: 20%;
  left: 70%;
  animation-delay: 3s;
}

.particle-4 {
  top: 70%;
  left: 20%;
  animation-delay: 4.5s;
}

.particle-5 {
  top: 50%;
  right: 30%;
  animation-delay: 6s;
}

.particle-6 {
  bottom: 40%;
  left: 40%;
  animation-delay: 7.5s;
}

@keyframes luxuryFloat {
  0%, 100% { 
    transform: translateY(0px) scale(1); 
    opacity: 0.6; 
  }
  25% { 
    transform: translateY(-20px) scale(1.5); 
    opacity: 1; 
  }
  50% { 
    transform: translateY(-10px) scale(0.8); 
    opacity: 0.8; 
  }
  75% { 
    transform: translateY(-30px) scale(1.2); 
    opacity: 0.9; 
  }
}

/* Linhas de energia */
.energy-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.energy-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, #3B82F6, transparent);
  height: 1px;
  opacity: 0.3;
  animation: energyFlow 4s linear infinite;
}

.line-1 {
  top: 20%;
  left: 0;
  width: 100%;
  animation-delay: 0s;
}

.line-2 {
  top: 60%;
  left: 0;
  width: 100%;
  animation-delay: 1.5s;
}

.line-3 {
  top: 80%;
  left: 0;
  width: 100%;
  animation-delay: 3s;
}

@keyframes energyFlow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* Grid de luxo */
.luxury-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  animation: gridPulse 6s ease-in-out infinite;
}

@keyframes gridPulse {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.2; }
}

/* Espaçadores de seção com efeito de luxo */
.section-spacer {
  height: 120px;
  position: relative;
  overflow: hidden;
}

.section-spacer::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #3B82F6, transparent);
  opacity: 0.3;
}

.section-spacer-small {
  height: 80px;
  position: relative;
  overflow: hidden;
}

.section-spacer-small::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #3B82F6, transparent);
  opacity: 0.3;
}

/* Animações de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out;
}

.animate-fadeInScale {
  animation: fadeInScale 0.8s ease-out;
}

.animate-slideInLeft {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slideInRight {
  animation: slideInRight 0.8s ease-out;
}

/* Efeitos de hover globais */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Melhorias de tipografia */
body {
  font-feature-settings: "liga" 1, "kern" 1;
  text-rendering: optimizeLegibility;
}

/* Efeitos de glassmorphism aprimorados */
.glass-effect {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Gradientes de luxo */
.luxury-gradient {
  background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #3B82F6 100%);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Efeitos de brilho */
.glow-effect {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.glow-effect:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
}

/* Responsividade aprimorada */
@media (max-width: 768px) {
  .section-spacer {
    height: 80px;
  }
  
  .section-spacer-small {
    height: 60px;
  }
  
  .luxury-grid {
    background-size: 30px 30px;
  }
}
</style>
