<template>
<section class="pt-40 sm:pt-48 pb-32 px-6 sm:px-8 md:px-12 relative flex items-center justify-center min-h-screen">
  <!-- Background de luxo -->
  <div class="absolute inset-0">
    <!-- Gradiente animado de fundo -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    
    <!-- Partículas de luxo -->
    <div class="absolute inset-0">
      <div class="hero-particle particle-1"></div>
      <div class="hero-particle particle-2"></div>
      <div class="hero-particle particle-3"></div>
      <div class="hero-particle particle-4"></div>
    </div>
    
    <!-- Blurs decorativos animados -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-radial-blue-soft blur-3xl opacity-20 animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-radial-cyan-soft blur-3xl opacity-15 animate-pulse"></div>
    <div class="absolute top-3/4 left-1/2 w-64 h-64 bg-radial-blue-soft blur-3xl opacity-10 animate-pulse"></div>
  </div>

  <div class="w-full max-w-6xl mx-auto relative z-10 text-center">
    <!-- Badge de luxo -->
    <div class="mb-8 animate-fadeInUp">
      <div class="luxury-badge">
        <span class="badge-emoji">👋</span>
        <span class="badge-text">Olá, eu sou</span>
      </div>
    </div>

    <!-- Título principal com efeito de luxo -->
    <div class="mb-8 animate-fadeInScale">
      <h1 class="hero-title">
        <span class="title-main">Luciel Castro</span>
        <div class="title-glow"></div>
      </h1>
    </div>

    <!-- Subtítulo com animação -->
    <div class="mb-12 animate-slideInLeft">
      <h2 class="hero-subtitle">
        Desenvolvedor <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan">Mobile</span>
      </h2>
    </div>

    <!-- Descrição com efeito de luxo -->
    <div class="mb-16 animate-slideInRight">
      <p class="hero-description">
        Especialista em desenvolvimento mobile nativo e cross-platform. 
        Criando experiências únicas e performáticas para iOS e Android com 
        <span class="text-primary-blue font-semibold">React Native</span>, 
        <span class="text-primary-blue font-semibold">Flutter</span> e 
        <span class="text-primary-blue font-semibold">Koltin</span>.
      </p>
    </div>

    <!-- Botões de ação de luxo -->
    <div class="flex flex-wrap gap-6 justify-center mb-12 animate-fadeInUp">
      <button class="luxury-primary-button">
        <span class="button-content">Ver Projetos</span>
        <div class="button-glow"></div>
        <div class="button-particles">
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
        </div>
      </button>
      
      <button class="luxury-secondary-button">
        <span class="button-content">Baixar CV</span>
        <div class="button-border-glow"></div>
      </button>
    </div>

    <!-- Tecnologias com efeito de luxo -->
    <div class="tech-showcase animate-fadeInUp">
      <div class="tech-item">
        <div class="tech-icon">📱</div>
        <span class="tech-name">React Native</span>
      </div>
      <div class="tech-item">
        <div class="tech-icon">⚡</div>
        <span class="tech-name">Flutter</span>
      </div>
      <div class="tech-item">
        <div class="tech-icon">🚀</div>
        <span class="tech-name">Kotlin</span>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
/* Partículas do hero */
.hero-particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: linear-gradient(45deg, #3B82F6, #06B6D4);
  border-radius: 50%;
  opacity: 0.8;
  animation: heroFloat 10s ease-in-out infinite;
}

.particle-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.particle-2 {
  top: 60%;
  right: 20%;
  animation-delay: 2.5s;
}

.particle-3 {
  bottom: 30%;
  left: 60%;
  animation-delay: 5s;
}

.particle-4 {
  top: 40%;
  left: 80%;
  animation-delay: 7.5s;
}

@keyframes heroFloat {
  0%, 100% { 
    transform: translateY(0px) scale(1); 
    opacity: 0.8; 
  }
  25% { 
    transform: translateY(-30px) scale(1.8); 
    opacity: 1; 
  }
  50% { 
    transform: translateY(-15px) scale(0.6); 
    opacity: 0.9; 
  }
  75% { 
    transform: translateY(-40px) scale(1.4); 
    opacity: 1; 
  }
}

/* Badge de luxo */
.luxury-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
  animation: badgeGlow 3s ease-in-out infinite;
}

@keyframes badgeGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
  50% { box-shadow: 0 12px 40px rgba(59, 130, 246, 0.4); }
}

.badge-emoji {
  font-size: 1.5rem;
  animation: bounce 2s ease-in-out infinite;
}

.badge-text {
  font-weight: 700;
  letter-spacing: 0.15em;
}

/* Título principal */
.hero-title {
  position: relative;
  display: inline-block;
}

.title-main {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #3B82F6 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGradient 4s ease infinite;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

@keyframes titleGradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.title-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
  filter: blur(20px);
  opacity: 0;
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* Subtítulo */
.hero-subtitle {
  font-size: 2.5rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

/* Descrição */
.hero-description {
  font-size: 1.25rem;
  color: #cbd5e1;
  max-width: 3xl;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 400;
}

/* Botões de luxo */
.luxury-primary-button {
  position: relative;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  color: white;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.4);
}

.luxury-primary-button:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 16px 48px rgba(59, 130, 246, 0.6);
}

.button-content {
  position: relative;
  z-index: 2;
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.luxury-primary-button:hover .button-glow {
  left: 100%;
}

.button-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.button-particles .particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: buttonParticle 2s ease-in-out infinite;
}

.button-particles .particle:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.button-particles .particle:nth-child(2) {
  top: 60%;
  right: 20%;
  animation-delay: 0.5s;
}

.button-particles .particle:nth-child(3) {
  bottom: 20%;
  left: 50%;
  animation-delay: 1s;
}

@keyframes buttonParticle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

.luxury-secondary-button {
  position: relative;
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.125rem;
  border: 2px solid rgba(59, 130, 246, 0.6);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.luxury-secondary-button:hover {
  transform: translateY(-4px) scale(1.05);
  border-color: #3B82F6;
  background: rgba(59, 130, 246, 0.1);
}

.button-border-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #3B82F6, #06B6D4, #3B82F6);
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.luxury-secondary-button:hover .button-border-glow {
  opacity: 1;
}

/* Showcase de tecnologias */
.tech-showcase {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-4px);
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
}

.tech-icon {
  font-size: 2rem;
  animation: techBounce 3s ease-in-out infinite;
}

@keyframes techBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.tech-name {
  font-size: 0.875rem;
  color: #cbd5e1;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Responsividade */
@media (max-width: 768px) {
  .title-main {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .tech-showcase {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .luxury-badge {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
}
</style>