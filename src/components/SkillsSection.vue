<template>
  <section id="skills" class="py-20 px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    <div class="skills-particles"></div>
    <div class="skills-energy-lines"></div>
    <div class="skills-luxury-grid"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="skills-badge mb-8">
          <span class="badge-emoji">⚡</span>
          <span class="badge-text">Habilidades</span>
        </div>
        <h2 class="skills-title mb-8">
          <span class="title-main">Minhas Skills</span>
        </h2>
        <p class="skills-description">
          Tecnologias e ferramentas que domino para criar aplicações mobile excepcionais
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Desenvolvimento Mobile -->
        <div class="skill-category-card">
          <div class="skill-icon-container">
            <svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="skill-category-title">Desenvolvimento Mobile</h3>
          <div class="skill-items">
            <div class="skill-item">
              <span class="skill-name">React Native</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 95%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Flutter</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Kotlin</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Kotlin</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend & APIs -->
        <div class="skill-category-card">
          <div class="skill-icon-container">
            <svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="skill-category-title">Backend & APIs</h3>
          <div class="skill-items">
            <div class="skill-item">
              <span class="skill-name">Node.js</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 88%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Firebase</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 92%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">REST APIs</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">GraphQL</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Design & UX -->
        <div class="skill-category-card">
          <div class="skill-icon-container">
            <svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="skill-category-title">Design & UX</h3>
          <div class="skill-items">
            <div class="skill-item">
              <span class="skill-name">Figma</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Material Design</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Human Interface</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 88%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Prototyping</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 82%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testing & Quality -->
        <div class="skill-category-card">
          <div class="skill-icon-container">
            <svg class="skill-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="skill-category-title">Testing & Quality</h3>
          <div class="skill-items">
            <div class="skill-item">
              <span class="skill-name">Jest</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 88%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Detox</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Unit Testing</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">E2E Testing</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection'
}
</script>

<style scoped>
/* Background Effects
.skills-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  animation: skillsParticleFloat 20s ease-in-out infinite;
}

.skills-energy-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
    linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%);
  animation: skillsEnergyFlow 15s linear infinite;
} */

.skills-luxury-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: skillsGridPulse 10s ease-in-out infinite;
}

@keyframes skillsParticleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes skillsEnergyFlow {
  0% { transform: translateX(-100%) translateY(-100%); }
  100% { transform: translateX(100%) translateY(100%); }
}

@keyframes skillsGridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Badge */
.skills-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  animation: skillsBadgeGlow 3s ease-in-out infinite;
}

.badge-emoji {
  font-size: 20px;
  animation: skillsBadgeBounce 2s ease-in-out infinite;
}

.badge-text {
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

@keyframes skillsBadgeGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
}

@keyframes skillsBadgeBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Title */
.skills-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
}

.title-main {
  background: linear-gradient(135deg, #FFFFFF 0%, #3B82F6 50%, #06B6D4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: skillsTitleGradient 4s ease-in-out infinite;
  position: relative;
}

.title-main::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: skillsTitleGlow 4s ease-in-out infinite;
}

@keyframes skillsTitleGradient {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(10deg); }
}

@keyframes skillsTitleGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* Description */
.skills-description {
  font-size: 1.25rem;
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Skill Category Cards */
.skill-category-card {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 24px;
  padding: 32px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.skill-category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.skill-category-card:hover::before {
  opacity: 1;
}

.skill-category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

/* Skill Icon */
.skill-icon-container {
  position: relative;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
  margin-bottom: 24px;
}

.skill-icon-container:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.skill-icon {
  width: 28px;
  height: 28px;
  color: white;
  z-index: 2;
  position: relative;
}

.icon-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: skillsIconPulse 2s ease-in-out infinite;
}

@keyframes skillsIconPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

/* Skill Category Title */
.skill-category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 24px;
  position: relative;
}

.skill-category-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #3B82F6, #06B6D4);
  border-radius: 1px;
}

/* Skill Items */
.skill-items {
  space-y: 16px;
}

.skill-item {
  margin-bottom: 20px;
}

.skill-name {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #E2E8F0;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #3B82F6, #06B6D4);
  border-radius: 4px;
  transition: all 0.5s ease;
  position: relative;
  animation: skillProgressGlow 2s ease-in-out infinite;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: skillProgressShine 2s ease-in-out infinite;
}

@keyframes skillProgressGlow {
  0%, 100% { box-shadow: 0 0 8px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 16px rgba(59, 130, 246, 0.5); }
}

@keyframes skillProgressShine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Hover Effects */
.skill-category-card:hover .skill-progress {
  transform: scaleY(1.1);
}

.skill-item:hover .skill-name {
  color: #3B82F6;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-title {
    font-size: 2.5rem;
  }
  
  .skill-category-card {
    padding: 24px;
  }
  
  .skill-icon-container {
    width: 50px;
    height: 50px;
  }
  
  .skill-icon {
    width: 24px;
    height: 24px;
  }
  
  .skill-category-title {
    font-size: 1.25rem;
  }
}
</style> 