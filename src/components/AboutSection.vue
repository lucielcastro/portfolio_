<template>
  <section id="about" class="py-20 px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    <div class="about-particles"></div>
    <div class="about-energy-lines"></div>
    <div class="about-luxury-grid"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="about-badge mb-8">
          <span class="badge-emoji">👨‍💻</span>
          <span class="badge-text">Sobre Mim</span>
        </div>
        <h2 class="about-title mb-8">
          <span class="title-main">Minha Jornada</span>
        </h2>
        <p class="about-description">
          Desenvolvedor mobile apaixonado por criar experiências excepcionais
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 mb-16">
        <!-- Minha Jornada -->
        <div class="about-card">
          <div class="card-icon-container">
            <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="card-title">Minha Jornada</h3>
          <p class="card-description">
            Comecei minha jornada como desenvolvedor mobile há 5 anos, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Cada projeto é uma oportunidade de crescimento e inovação.
          </p>
        </div>

        <!-- Minha Filosofia -->
        <div class="about-card">
          <div class="card-icon-container">
            <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            <div class="icon-particles"></div>
          </div>
          <h3 class="card-title">Minha Filosofia</h3>
          <p class="card-description">
            Acredito que o desenvolvimento mobile deve ser focado na experiência do usuário. Cada linha de código deve ter um propósito claro e contribuir para uma experiência fluida e intuitiva.
          </p>
        </div>
      </div>

      <!-- O Que Busco -->
      <div class="about-card-large mb-16">
        <div class="card-icon-container-large">
          <svg class="card-icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <div class="icon-particles-large"></div>
        </div>
        <h3 class="card-title-large">O Que Busco</h3>
        <p class="card-description-large">
          Busco oportunidades para trabalhar em projetos desafiadores que me permitam aplicar minha criatividade e habilidades técnicas. Quero contribuir para produtos que realmente fazem a diferença na vida das pessoas.
        </p>
      </div>

      <!-- Estatísticas -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="stat-card">
          <div class="stat-number">50+</div>
          <div class="stat-label">Apps Desenvolvidos</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">5</div>
          <div class="stat-label">Anos de Experiência</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">Satisfação do Cliente</div>
        </div>
      </div>

      <!-- Tecnologias Principais -->
      <div class="about-card-large">
        <h3 class="card-title-large mb-8">Tecnologias Principais</h3>
        <div class="tech-grid">
          <div class="tech-item">
            <div class="tech-icon">📱</div>
            <span class="tech-name">React Native</span>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🦋</div>
            <span class="tech-name">Flutter</span>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🍎</div>
            <span class="tech-name">Kotlin</span>
          </div>
          <div class="tech-item">
            <div class="tech-icon">🔥</div>
            <span class="tech-name">Firebase</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
/* Background Effects */
.about-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  animation: aboutParticleFloat 20s ease-in-out infinite;
}

.about-energy-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
    linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%);
  animation: aboutEnergyFlow 15s linear infinite;
}

.about-luxury-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: aboutGridPulse 10s ease-in-out infinite;
}

@keyframes aboutParticleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes aboutEnergyFlow {
  0% { transform: translateX(-100%) translateY(-100%); }
  100% { transform: translateX(100%) translateY(100%); }
}

@keyframes aboutGridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Badge */
.about-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  animation: aboutBadgeGlow 3s ease-in-out infinite;
}

.badge-emoji {
  font-size: 20px;
  animation: aboutBadgeBounce 2s ease-in-out infinite;
}

.badge-text {
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

@keyframes aboutBadgeGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
}

@keyframes aboutBadgeBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Title */
.about-title {
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
  animation: aboutTitleGradient 4s ease-in-out infinite;
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
  animation: aboutTitleGlow 4s ease-in-out infinite;
}

@keyframes aboutTitleGradient {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(10deg); }
}

@keyframes aboutTitleGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* Description */
.about-description {
  font-size: 1.25rem;
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Cards */
.about-card {
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

.about-card::before {
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

.about-card:hover::before {
  opacity: 1;
}

.about-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

.about-card-large {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.about-card-large::before {
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

.about-card-large:hover::before {
  opacity: 1;
}

.about-card-large:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

/* Card Icons */
.card-icon-container {
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

.card-icon-container:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.card-icon {
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
  animation: aboutIconPulse 2s ease-in-out infinite;
}

@keyframes aboutIconPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.card-icon-container-large {
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
  margin-bottom: 32px;
}

.card-icon-container-large:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 16px 40px rgba(59, 130, 246, 0.4);
}

.card-icon-large {
  width: 36px;
  height: 36px;
  color: white;
  z-index: 2;
  position: relative;
}

.icon-particles-large {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: aboutIconPulseLarge 2s ease-in-out infinite;
}

@keyframes aboutIconPulseLarge {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

/* Card Content */
.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  position: relative;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #3B82F6, #06B6D4);
  border-radius: 1px;
}

.card-description {
  color: #94A3B8;
  line-height: 1.6;
  font-size: 1rem;
}

.card-title-large {
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 24px;
  position: relative;
}

.card-title-large::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3B82F6, #06B6D4);
  border-radius: 2px;
}

.card-description-large {
  color: #94A3B8;
  line-height: 1.6;
  font-size: 1.1rem;
}

/* Stats */
.stat-card {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  padding: 32px;
  text-align: center;
  backdrop-filter: blur(20px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #3B82F6;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1rem;
  color: #94A3B8;
  font-weight: 500;
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateX(4px);
}

.tech-icon {
  font-size: 24px;
  animation: techBounce 2s ease-in-out infinite;
}

.tech-name {
  font-weight: 600;
  color: #E2E8F0;
  font-size: 0.9rem;
}

@keyframes techBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
}

/* Responsive */
@media (max-width: 768px) {
  .about-title {
    font-size: 2.5rem;
  }
  
  .about-card,
  .about-card-large {
    padding: 24px;
  }
  
  .card-icon-container {
    width: 50px;
    height: 50px;
  }
  
  .card-icon {
    width: 24px;
    height: 24px;
  }
  
  .card-icon-container-large {
    width: 60px;
    height: 60px;
  }
  
  .card-icon-large {
    width: 28px;
    height: 28px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 16px;
  }
}
</style> 