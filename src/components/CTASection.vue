<template>
  <section id="cta" class="py-20 px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    <div class="cta-particles"></div>
    <div class="cta-energy-lines"></div>
    <div class="cta-luxury-grid"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="cta-badge mb-8">
          <span class="badge-emoji">🚀</span>
          <span class="badge-text">Vamos Trabalhar Juntos</span>
        </div>
        <h2 class="cta-title mb-8">
          <span class="title-main">Pronto para o Próximo Projeto?</span>
        </h2>
        <p class="cta-description">
          Vamos transformar suas ideias em aplicações mobile excepcionais
        </p>
      </div>

      <div class="cta-content">
        <div class="cta-card">
          <div class="cta-icon-container">
            <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          
          <div class="cta-text-content">
            <h3 class="cta-subtitle">Disponível para Novos Projetos</h3>
            <p class="cta-text">
              Estou sempre aberto a novas oportunidades e colaborações. 
              Se você tem um projeto em mente, vamos conversar sobre como posso ajudar!
            </p>
            
            <div class="cta-features">
              <div class="feature-item">
                <div class="feature-dot"></div>
                <span>Desenvolvimento Mobile Completo</span>
              </div>
              <div class="feature-item">
                <div class="feature-dot"></div>
                <span>Arquitetura Escalável</span>
              </div>
              <div class="feature-item">
                <div class="feature-dot"></div>
                <span>UI/UX Moderno</span>
              </div>
              <div class="feature-item">
                <div class="feature-dot"></div>
                <span>Performance Otimizada</span>
              </div>
            </div>
          </div>

          <div class="cta-actions">
            <a href="#contact" class="cta-primary-button">
              <span class="button-text">Iniciar Projeto</span>
              <div class="button-particles"></div>
              <div class="button-border-glow"></div>
            </a>
            <a href="#projects" class="cta-secondary-button">
              <span class="button-text">Ver Projetos</span>
              <div class="button-particles"></div>
            </a>
          </div>

          <div class="availability-indicator">
            <div class="indicator-dot"></div>
            <span class="indicator-text">Disponível para freelances e projetos</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection'
}
</script>

<style scoped>
/* Background Effects */
.cta-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  animation: ctaParticleFloat 20s ease-in-out infinite;
}

.cta-energy-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
    linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%);
  animation: ctaEnergyFlow 15s linear infinite;
}

.cta-luxury-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ctaGridPulse 10s ease-in-out infinite;
}

@keyframes ctaParticleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes ctaEnergyFlow {
  0% { transform: translateX(-100%) translateY(-100%); }
  100% { transform: translateX(100%) translateY(100%); }
}

@keyframes ctaGridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Badge */
.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  animation: ctaBadgeGlow 3s ease-in-out infinite;
}

.badge-emoji {
  font-size: 20px;
  animation: ctaBadgeBounce 2s ease-in-out infinite;
}

.badge-text {
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

@keyframes ctaBadgeGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
}

@keyframes ctaBadgeBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Title */
.cta-title {
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
  animation: ctaTitleGradient 4s ease-in-out infinite;
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
  animation: ctaTitleGlow 4s ease-in-out infinite;
}

@keyframes ctaTitleGradient {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(10deg); }
}

@keyframes ctaTitleGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* Description */
.cta-description {
  font-size: 1.25rem;
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* CTA Content */
.cta-content {
  display: flex;
  justify-content: center;
}

.cta-card {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 32px;
  padding: 48px;
  backdrop-filter: blur(20px);
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
}

.cta-card::before {
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

.cta-card:hover::before {
  opacity: 1;
}

.cta-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 48px 96px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

/* CTA Icon */
.cta-icon-container {
  position: relative;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
  margin: 0 auto 32px;
}

.cta-icon-container:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 16px 40px rgba(59, 130, 246, 0.4);
}

.cta-icon {
  width: 36px;
  height: 36px;
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
  animation: ctaIconPulse 2s ease-in-out infinite;
}

@keyframes ctaIconPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

/* CTA Text Content */
.cta-text-content {
  text-align: center;
  margin-bottom: 32px;
}

.cta-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.cta-text {
  color: #94A3B8;
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 24px;
}

/* Features */
.cta-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateX(4px);
}

.feature-dot {
  width: 8px;
  height: 8px;
  background: #3B82F6;
  border-radius: 50%;
  flex-shrink: 0;
  animation: featureDotPulse 2s ease-in-out infinite;
}

@keyframes featureDotPulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; }
}

.feature-item span {
  color: #E2E8F0;
  font-size: 0.9rem;
  font-weight: 500;
}

/* CTA Actions */
.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
}

.cta-primary-button,
.cta-secondary-button {
  position: relative;
  padding: 16px 32px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-primary-button {
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: white;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
}

.cta-primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(59, 130, 246, 0.4);
}

.cta-secondary-button {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: #3B82F6;
}

.cta-secondary-button:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
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
  animation: ctaButtonParticle 3s ease-in-out infinite;
}

.button-border-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #3B82F6, #06B6D4, #3B82F6);
  border-radius: 18px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-primary-button:hover .button-border-glow {
  opacity: 1;
}

@keyframes ctaButtonParticle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(180deg); }
}

/* Availability Indicator */
.availability-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.availability-indicator:hover {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.indicator-dot {
  width: 12px;
  height: 12px;
  background: #3B82F6;
  border-radius: 50%;
  animation: indicatorPulse 2s ease-in-out infinite;
}

@keyframes indicatorPulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
}

.indicator-text {
  font-size: 0.9rem;
  color: #3B82F6;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .cta-title {
    font-size: 2.5rem;
  }
  
  .cta-card {
    padding: 32px;
  }
  
  .cta-icon-container {
    width: 60px;
    height: 60px;
  }
  
  .cta-icon {
    width: 28px;
    height: 28px;
  }
  
  .cta-subtitle {
    font-size: 1.5rem;
  }
  
  .cta-features {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .cta-actions {
    flex-direction: column;
    gap: 12px;
  }
  
  .cta-primary-button,
  .cta-secondary-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
