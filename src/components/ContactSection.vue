<template>
  <section id="contact" class="py-20 px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    <div class="contact-particles"></div>
    <div class="contact-energy-lines"></div>
    <div class="contact-luxury-grid"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="contact-badge mb-8">
          <span class="badge-emoji">💬</span>
          <span class="badge-text">Contato</span>
        </div>
        <h2 class="contact-title mb-8">
          <span class="title-main">Vamos Conversar?</span>
        </h2>
        <p class="contact-description">
          Estou sempre aberto a novas oportunidades e colaborações. 
          <span class="text-primary-blue font-semibold">Entre em contato!</span>
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Informações de Contato -->
        <div class="space-y-8">
          <div class="contact-info-card">
            <h3 class="contact-card-title mb-8">Informações de Contato</h3>
            <div class="space-y-8">
              <div class="contact-item">
                <div class="contact-icon-container">
                  <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div class="icon-particles"></div>
                </div>
                <div class="contact-item-content">
                  <h4 class="contact-item-title">Email</h4>
                  <p class="contact-item-value">luciel.castro@email.com</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon-container">
                  <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div class="icon-particles"></div>
                </div>
                <div class="contact-item-content">
                  <h4 class="contact-item-title">Localização</h4>
                  <p class="contact-item-value">São Paulo, Brasil</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon-container">
                  <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div class="icon-particles"></div>
                </div>
                <div class="contact-item-content">
                  <h4 class="contact-item-title">Disponibilidade</h4>
                  <p class="contact-item-value">Resposta em 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulário de Contato -->
        <div class="contact-form-card">
          <h3 class="contact-card-title mb-8">Envie uma Mensagem</h3>
          <form class="space-y-8">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="form-group">
                <label class="form-label">Nome</label>
                <input 
                  type="text" 
                  class="form-input"
                  placeholder="Seu nome"
                />
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input 
                  type="email" 
                  class="form-input"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Assunto</label>
              <input 
                type="text" 
                class="form-input"
                placeholder="Sobre o que você gostaria de conversar?"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Mensagem</label>
              <textarea 
                rows="5"
                class="form-textarea"
                placeholder="Conte-me sobre seu projeto..."
              ></textarea>
            </div>
            <button 
              type="submit"
              class="contact-submit-button"
            >
              <span class="button-text">Enviar Mensagem</span>
              <div class="button-particles"></div>
              <div class="button-border-glow"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
/* Background Effects */
/* .contact-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  animation: contactParticleFloat 20s ease-in-out infinite;
}

.contact-energy-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
    linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%);
  animation: contactEnergyFlow 15s linear infinite;
} */

.contact-luxury-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: contactGridPulse 10s ease-in-out infinite;
}

@keyframes contactParticleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes contactEnergyFlow {
  0% { transform: translateX(-100%) translateY(-100%); }
  100% { transform: translateX(100%) translateY(100%); }
}

@keyframes contactGridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Badge */
.contact-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  animation: contactBadgeGlow 3s ease-in-out infinite;
}

.badge-emoji {
  font-size: 20px;
  animation: contactBadgeBounce 2s ease-in-out infinite;
}

.badge-text {
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

@keyframes contactBadgeGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
}

@keyframes contactBadgeBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Title */
.contact-title {
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
  animation: contactTitleGradient 4s ease-in-out infinite;
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
  animation: contactTitleGlow 4s ease-in-out infinite;
}

@keyframes contactTitleGradient {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(10deg); }
}

@keyframes contactTitleGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* Description */
.contact-description {
  font-size: 1.25rem;
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Cards */
.contact-info-card,
.contact-form-card {
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

.contact-info-card::before,
.contact-form-card::before {
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

.contact-info-card:hover::before,
.contact-form-card:hover::before {
  opacity: 1;
}

.contact-info-card:hover,
.contact-form-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

.contact-card-title {
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 2rem;
  position: relative;
}

.contact-card-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3B82F6, #06B6D4);
  border-radius: 2px;
}

/* Contact Items */
.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateX(8px);
}

.contact-icon-container {
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
}

.contact-icon-container:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.contact-icon {
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
  animation: contactIconPulse 2s ease-in-out infinite;
}

@keyframes contactIconPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.contact-item-content {
  flex: 1;
}

.contact-item-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.contact-item-value {
  color: #94A3B8;
  font-size: 1rem;
}

/* Form */
.form-group {
  position: relative;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #E2E8F0;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 16px 20px;
  background: rgba(30, 41, 59, 0.5);
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: #FFFFFF;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #64748B;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  background: rgba(30, 41, 59, 0.7);
}

.form-textarea {
  resize: none;
  min-height: 120px;
}

/* Submit Button */
.contact-submit-button {
  position: relative;
  width: 100%;
  padding: 20px 32px;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border: none;
  border-radius: 16px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.contact-submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(59, 130, 246, 0.3);
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
  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
  animation: contactButtonParticle 3s ease-in-out infinite;
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

.contact-submit-button:hover .button-border-glow {
  opacity: 1;
}

@keyframes contactButtonParticle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(180deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .contact-title {
    font-size: 2.5rem;
  }
  
  .contact-info-card,
  .contact-form-card {
    padding: 24px;
  }
  
  .contact-item {
    padding: 16px;
  }
  
  .contact-icon-container {
    width: 50px;
    height: 50px;
  }
  
  .contact-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
