<template>
  <section id="experience" class="py-20 px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    <div class="experience-particles"></div>
    <div class="experience-energy-lines"></div>
    <div class="experience-luxury-grid"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="experience-badge mb-8">
          <span class="badge-emoji">💼</span>
          <span class="badge-text">Experiência</span>
        </div>
        <h2 class="experience-title mb-8">
          <span class="title-main">Minha Jornada Profissional</span>
        </h2>
        <p class="experience-description">
          Trajetória de crescimento e conquistas no desenvolvimento mobile
        </p>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="timeline-line"></div>
        
        <div class="space-y-16">
          <!-- Experiência 1 -->
          <div class="experience-item">
            <div class="experience-dot"></div>
            <div class="experience-card">
              <div class="experience-header">
                <div class="experience-duration">2022 - Presente</div>
                <h3 class="experience-company">TechCorp Mobile</h3>
                <h4 class="experience-position">Senior Mobile Developer</h4>
              </div>
              <p class="experience-description">
                Liderando o desenvolvimento de aplicações mobile para clientes enterprise, 
                implementando arquiteturas escaláveis e mentorando desenvolvedores júnior.
              </p>
              <div class="experience-tech">
                <span class="tech-tag">React Native</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">Firebase</span>
                <span class="tech-tag">Redux</span>
              </div>
              <div class="experience-achievements">
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Reduziu 40% do tempo de desenvolvimento com novas práticas</span>
                </div>
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Implementou CI/CD pipeline para mobile apps</span>
                </div>
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Mentorou 5 desenvolvedores júnior</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Experiência 2 -->
          <div class="experience-item">
            <div class="experience-dot"></div>
            <div class="experience-card">
              <div class="experience-header">
                <div class="experience-duration">2020 - 2022</div>
                <h3 class="experience-company">StartupXYZ</h3>
                <h4 class="experience-position">Mobile Developer</h4>
              </div>
              <p class="experience-description">
                Desenvolveu aplicações mobile inovadoras para startups, 
                trabalhando com tecnologias modernas e metodologias ágeis.
              </p>
              <div class="experience-tech">
                <span class="tech-tag">Flutter</span>
                <span class="tech-tag">Dart</span>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">MongoDB</span>
              </div>
              <div class="experience-achievements">
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Lançou 3 apps com mais de 100k downloads</span>
                </div>
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Implementou testes automatizados</span>
                </div>
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Reduziu crashes em 60%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Experiência 3 -->
          <div class="experience-item">
            <div class="experience-dot"></div>
            <div class="experience-card">
              <div class="experience-header">
                <div class="experience-duration">2019 - 2020</div>
                <h3 class="experience-company">MobileFirst Agency</h3>
                <h4 class="experience-position">Junior Mobile Developer</h4>
              </div>
              <p class="experience-description">
                Iniciou carreira desenvolvendo apps para clientes diversos, 
                aprendendo boas práticas e fundamentos do desenvolvimento mobile.
              </p>
              <div class="experience-tech">
                <span class="tech-tag">Kotlin</span>
                <span class="tech-tag">Kotlin</span>
                <span class="tech-tag">REST APIs</span>
                <span class="tech-tag">Git</span>
              </div>
              <div class="experience-achievements">
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Desenvolveu 8 aplicações para clientes</span>
                </div>
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Aprendeu desenvolvimento nativo iOS/Android</span>
                </div>
                <div class="achievement-item">
                  <div class="achievement-dot"></div>
                  <span>Participou de 3 hackathons</span>
                </div>
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
  name: 'ExperienceSection'
}
</script>

<style scoped>
/* Background Effects */
.experience-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  animation: experienceParticleFloat 20s ease-in-out infinite;
}

.experience-energy-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
    linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%);
  animation: experienceEnergyFlow 15s linear infinite;
}

.experience-luxury-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: experienceGridPulse 10s ease-in-out infinite;
}

@keyframes experienceParticleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes experienceEnergyFlow {
  0% { transform: translateX(-100%) translateY(-100%); }
  100% { transform: translateX(100%) translateY(100%); }
}

@keyframes experienceGridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Badge */
.experience-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  animation: experienceBadgeGlow 3s ease-in-out infinite;
}

.badge-emoji {
  font-size: 20px;
  animation: experienceBadgeBounce 2s ease-in-out infinite;
}

.badge-text {
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

@keyframes experienceBadgeGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
}

@keyframes experienceBadgeBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Title */
.experience-title {
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
  animation: experienceTitleGradient 4s ease-in-out infinite;
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
  animation: experienceTitleGlow 4s ease-in-out infinite;
}

@keyframes experienceTitleGradient {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(10deg); }
}

@keyframes experienceTitleGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* Description */
.experience-description {
  font-size: 1.25rem;
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Timeline */
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #3B82F6, #06B6D4);
  transform: translateX(-50%);
  animation: timelineGlow 3s ease-in-out infinite;
}

@keyframes timelineGlow {
  0%, 100% { box-shadow: 0 0 8px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 16px rgba(59, 130, 246, 0.5); }
}

/* Experience Items */
.experience-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 32px;
}

.experience-item:nth-child(odd) {
  flex-direction: row-reverse;
}

.experience-dot {
  position: relative;
  width: 20px;
  height: 20px;
  background: #3B82F6;
  border-radius: 50%;
  box-shadow: 0 0 16px rgba(59, 130, 246, 0.5);
  animation: experienceDotPulse 2s ease-in-out infinite;
  z-index: 2;
}

@keyframes experienceDotPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Experience Cards */
.experience-card {
  flex: 1;
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

.experience-card::before {
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

.experience-card:hover::before {
  opacity: 1;
}

.experience-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

/* Experience Header */
.experience-header {
  margin-bottom: 20px;
}

.experience-duration {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  color: #3B82F6;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.experience-company {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.experience-position {
  font-size: 1.1rem;
  color: #3B82F6;
  font-weight: 600;
  margin-bottom: 16px;
}

.experience-description {
  color: #94A3B8;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 20px;
}

/* Tech Tags */
.experience-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  padding: 6px 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  color: #3B82F6;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

/* Achievements */
.experience-achievements {
  space-y: 12px;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.achievement-dot {
  width: 8px;
  height: 8px;
  background: #3B82F6;
  border-radius: 50%;
  flex-shrink: 0;
  animation: achievementDotPulse 2s ease-in-out infinite;
}

@keyframes achievementDotPulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; }
}

.achievement-item span {
  color: #E2E8F0;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .experience-title {
    font-size: 2.5rem;
  }
  
  .timeline-line {
    left: 20px;
  }
  
  .experience-item {
    flex-direction: column !important;
    gap: 16px;
    align-items: flex-start;
    padding-left: 40px;
  }
  
  .experience-card {
    padding: 24px;
  }
  
  .experience-company {
    font-size: 1.25rem;
  }
  
  .experience-tech {
    gap: 6px;
  }
  
  .tech-tag {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
</style> 