<template>
  <footer class="py-16 px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    <div class="footer-particles"></div>
    <div class="footer-energy-lines"></div>
    <div class="footer-luxury-grid"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-4 gap-12">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <div class="logo-container">
              <span class="logo-text">LC</span>
              <div class="logo-glow"></div>
            </div>
          </div>
          <h3 class="brand-name">Luciel Castro</h3>
          <p class="brand-description">
            Desenvolvedor mobile apaixonado por criar experiências excepcionais
          </p>
          <div class="social-links">
            <a href="#" class="social-link">
              <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="footer-title">Links Rápidos</h4>
          <ul class="footer-links">
            <li><a href="#about" class="footer-link">Sobre Mim</a></li>
            <li><a href="#projects" class="footer-link">Projetos</a></li>
            <li><a href="#skills" class="footer-link">Habilidades</a></li>
            <li><a href="#experience" class="footer-link">Experiência</a></li>
            <li><a href="#contact" class="footer-link">Contato</a></li>
          </ul>
        </div>

        <!-- Technologies -->
        <div class="footer-section">
          <h4 class="footer-title">Tecnologias</h4>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">React Native</a></li>
            <li><a href="#" class="footer-link">Flutter</a></li>
            <li><a href="#" class="footer-link">Swift</a></li>
            <li><a href="#" class="footer-link">Kotlin</a></li>
            <li><a href="#" class="footer-link">Firebase</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4 class="footer-title">Contato</h4>
          <div class="contact-info">
            <div class="contact-item">
              <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>luciel.castro@email.com</span>
            </div>
            <div class="contact-item">
              <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>São Paulo, Brasil</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="bottom-content">
          <p class="copyright">
            © 2024 Luciel Castro. Todos os direitos reservados.
          </p>
          <div class="bottom-links">
            <a href="#" class="bottom-link">CV</a>
            <a href="#" class="bottom-link">Blog</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Background Effects */
.footer-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  animation: footerParticleFloat 20s ease-in-out infinite;
}

.footer-energy-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
    linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%);
  animation: footerEnergyFlow 15s linear infinite;
}

.footer-luxury-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: footerGridPulse 10s ease-in-out infinite;
}

@keyframes footerParticleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes footerEnergyFlow {
  0% { transform: translateX(-100%) translateY(-100%); }
  100% { transform: translateX(100%) translateY(100%); }
}

@keyframes footerGridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Brand Section */
.footer-brand {
  space-y: 16px;
}

.brand-logo {
  margin-bottom: 16px;
}

.logo-container {
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

.logo-container:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.logo-text {
  font-size: 24px;
  font-weight: 800;
  color: white;
  z-index: 2;
  position: relative;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: logoGlow 2s ease-in-out infinite;
}

@keyframes logoGlow {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
}

.brand-description {
  color: #94A3B8;
  line-height: 1.6;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  color: #3B82F6;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
}

.social-icon {
  width: 20px;
  height: 20px;
}

/* Footer Sections */
.footer-section {
  space-y: 16px;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3B82F6, #06B6D4);
  border-radius: 1px;
}

.footer-links {
  space-y: 12px;
}

.footer-link {
  color: #94A3B8;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: block;
}

.footer-link:hover {
  color: #3B82F6;
  transform: translateX(4px);
}

/* Contact Info */
.contact-info {
  space-y: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-icon {
  width: 16px;
  height: 16px;
  color: #3B82F6;
  flex-shrink: 0;
}

.contact-item span {
  color: #94A3B8;
  font-size: 0.9rem;
}

/* Footer Bottom */
.footer-bottom {
  margin-top: 48px;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
  margin-bottom: 24px;
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright {
  color: #64748B;
  font-size: 0.9rem;
}

.bottom-links {
  display: flex;
  gap: 24px;
}

.bottom-link {
  color: #94A3B8;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.bottom-link:hover {
  color: #3B82F6;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-brand,
  .footer-section {
    text-align: center;
  }
  
  .logo-container {
    margin: 0 auto 16px;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .bottom-links {
    justify-content: center;
  }
}
</style>
