<template>
  <section id="projects" class="py-20 px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    <div class="projects-particles"></div>
    <div class="projects-energy-lines"></div>
    <div class="projects-luxury-grid"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="projects-badge mb-8">
          <span class="badge-emoji">🚀</span>
          <span class="badge-text">Projetos</span>
        </div>
        <h2 class="projects-title mb-8">
          <span class="title-main">Meus Projetos</span>
        </h2>
        <p class="projects-description">
          Uma seleção dos meus melhores trabalhos e projetos mais recentes
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Projeto 1 -->
        <div class="project-card">
          <div class="project-icon-container">
            <svg class="project-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="project-title">App de Delivery</h3>
          <p class="project-description">
            Aplicativo completo de delivery com React Native, incluindo sistema de pagamentos, rastreamento em tempo real e interface intuitiva.
          </p>
          <div class="project-tech">
            <span class="tech-tag">React Native</span>
            <span class="tech-tag">Firebase</span>
            <span class="tech-tag">Stripe</span>
          </div>
          <div class="project-actions">
            <a href="#" class="project-button github-button">
              <span class="button-text">GitHub</span>
              <div class="button-particles"></div>
            </a>
            <a href="#" class="project-button demo-button">
              <span class="button-text">Demo</span>
              <div class="button-particles"></div>
            </a>
          </div>
        </div>

        <!-- Projeto 2 -->
        <div class="project-card">
          <div class="project-icon-container">
            <svg class="project-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="project-title">Dashboard Financeiro</h3>
          <p class="project-description">
            Dashboard completo para gestão financeira com gráficos interativos, relatórios detalhados e integração com APIs bancárias.
          </p>
          <div class="project-tech">
            <span class="tech-tag">Flutter</span>
            <span class="tech-tag">Dart</span>
            <span class="tech-tag">Charts</span>
          </div>
          <div class="project-actions">
            <a href="#" class="project-button github-button">
              <span class="button-text">GitHub</span>
              <div class="button-particles"></div>
            </a>
            <a href="#" class="project-button demo-button">
              <span class="button-text">Demo</span>
              <div class="button-particles"></div>
            </a>
          </div>
        </div>

        <!-- Projeto 3 -->
        <div class="project-card">
          <div class="project-icon-container">
            <svg class="project-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="project-title">App Social</h3>
          <p class="project-description">
            Rede social mobile com funcionalidades de chat, stories, posts e sistema de recomendações baseado em IA.
          </p>
          <div class="project-tech">
            <span class="tech-tag">Swift</span>
            <span class="tech-tag">Core Data</span>
            <span class="tech-tag">Socket.io</span>
          </div>
          <div class="project-actions">
            <a href="#" class="project-button github-button">
              <span class="button-text">GitHub</span>
              <div class="button-particles"></div>
            </a>
            <a href="#" class="project-button demo-button">
              <span class="button-text">Demo</span>
              <div class="button-particles"></div>
            </a>
          </div>
        </div>

        <!-- Projeto 4 -->
        <div class="project-card">
          <div class="project-icon-container">
            <svg class="project-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="project-title">App de Fitness</h3>
          <p class="project-description">
            Aplicativo de treinos personalizados com integração de wearables, tracking de progresso e planos de exercícios.
          </p>
          <div class="project-tech">
            <span class="tech-tag">Kotlin</span>
            <span class="tech-tag">Room DB</span>
            <span class="tech-tag">Health Kit</span>
          </div>
          <div class="project-actions">
            <a href="#" class="project-button github-button">
              <span class="button-text">GitHub</span>
              <div class="button-particles"></div>
            </a>
            <a href="#" class="project-button demo-button">
              <span class="button-text">Demo</span>
              <div class="button-particles"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection'
}
</script>

<style scoped>
/* Background Effects */
.projects-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  animation: projectsParticleFloat 20s ease-in-out infinite;
}

.projects-energy-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
    linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%);
  animation: projectsEnergyFlow 15s linear infinite;
}

.projects-luxury-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: projectsGridPulse 10s ease-in-out infinite;
}

@keyframes projectsParticleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes projectsEnergyFlow {
  0% { transform: translateX(-100%) translateY(-100%); }
  100% { transform: translateX(100%) translateY(100%); }
}

@keyframes projectsGridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Badge */
.projects-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  animation: projectsBadgeGlow 3s ease-in-out infinite;
}

.badge-emoji {
  font-size: 20px;
  animation: projectsBadgeBounce 2s ease-in-out infinite;
}

.badge-text {
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

@keyframes projectsBadgeGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
}

@keyframes projectsBadgeBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Title */
.projects-title {
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
  animation: projectsTitleGradient 4s ease-in-out infinite;
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
  animation: projectsTitleGlow 4s ease-in-out infinite;
}

@keyframes projectsTitleGradient {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(10deg); }
}

@keyframes projectsTitleGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* Description */
.projects-description {
  font-size: 1.25rem;
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Project Cards */
.project-card {
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

.project-card::before {
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

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

/* Project Icon */
.project-icon-container {
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

.project-icon-container:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.project-icon {
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
  animation: projectsIconPulse 2s ease-in-out infinite;
}

@keyframes projectsIconPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

/* Project Content */
.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  position: relative;
}

.project-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #3B82F6, #06B6D4);
  border-radius: 1px;
}

.project-description {
  color: #94A3B8;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 20px;
}

/* Tech Tags */
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
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

/* Project Actions */
.project-actions {
  display: flex;
  gap: 12px;
}

.project-button {
  position: relative;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-button {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: #3B82F6;
}

.github-button:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
}

.demo-button {
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.demo-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
}

.button-text {
  position: relative;
  z-index: 2;
}

.button-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: projectsButtonParticle 3s ease-in-out infinite;
}

@keyframes projectsButtonParticle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(180deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .projects-title {
    font-size: 2.5rem;
  }
  
  .project-card {
    padding: 24px;
  }
  
  .project-icon-container {
    width: 50px;
    height: 50px;
  }
  
  .project-icon {
    width: 24px;
    height: 24px;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .project-button {
    width: 100%;
    justify-content: center;
  }
}
</style> 