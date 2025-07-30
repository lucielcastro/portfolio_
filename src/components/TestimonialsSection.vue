<template>
  <section id="testimonials" class="py-20 px-4 sm:px-8 md:px-12 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark opacity-90"></div>
    <div class="testimonials-particles"></div>
    <div class="testimonials-energy-lines"></div>
    <div class="testimonials-luxury-grid"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div class="testimonials-badge mb-8">
          <span class="badge-emoji">💬</span>
          <span class="badge-text">Recomendações</span>
        </div>
        <h2 class="testimonials-title mb-8">
          <span class="title-main">O Que Dizem Sobre Mim</span>
        </h2>
        <p class="testimonials-description">
          Feedback de clientes e colegas sobre meu trabalho e profissionalismo
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <div class="avatar-content">👨‍💼</div>
              <div class="avatar-particles"></div>
            </div>
            <div class="testimonial-info">
              <h4 class="testimonial-name">João Silva</h4>
              <p class="testimonial-position">CTO - TechCorp</p>
            </div>
          </div>
          <div class="testimonial-content">
            <p class="testimonial-quote">
              "Luciel é um desenvolvedor excepcional. Sua capacidade de resolver problemas complexos e entregar soluções de alta qualidade é impressionante. Recomendo fortemente!"
            </p>
            <div class="testimonial-rating">
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
            </div>
            <div class="testimonial-result">
              <span class="result-text">Projeto entregue 2 semanas antes do prazo</span>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <div class="avatar-content">👩‍💻</div>
              <div class="avatar-particles"></div>
            </div>
            <div class="testimonial-info">
              <h4 class="testimonial-name">Maria Santos</h4>
              <p class="testimonial-position">Product Manager - StartupXYZ</p>
            </div>
          </div>
          <div class="testimonial-content">
            <p class="testimonial-quote">
              "Trabalhar com Luciel foi uma experiência incrível. Ele não apenas entregou o projeto no prazo, mas também sugeriu melhorias que superaram nossas expectativas."
            </p>
            <div class="testimonial-rating">
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
            </div>
            <div class="testimonial-result">
              <span class="result-text">App com 4.8/5 estrelas na App Store</span>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="testimonial-avatar">
              <div class="avatar-content">👨‍🔬</div>
              <div class="avatar-particles"></div>
            </div>
            <div class="testimonial-info">
              <h4 class="testimonial-name">Carlos Oliveira</h4>
              <p class="testimonial-position">Tech Lead - MobileFirst</p>
            </div>
          </div>
          <div class="testimonial-content">
            <p class="testimonial-quote">
              "Luciel tem uma habilidade única de transformar ideias em código limpo e eficiente. Sua atenção aos detalhes e conhecimento técnico são excepcionais."
            </p>
            <div class="testimonial-rating">
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
              <span class="star">⭐</span>
            </div>
            <div class="testimonial-result">
              <span class="result-text">Redução de 60% nos bugs reportados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection'
}
</script>

<style scoped>
/* Background Effects */
/* .testimonials-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  animation: testimonialsParticleFloat 20s ease-in-out infinite;
}

.testimonials-energy-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%),
    linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%);
  animation: testimonialsEnergyFlow 15s linear infinite;
}

.testimonials-luxury-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: testimonialsGridPulse 10s ease-in-out infinite;
} */

@keyframes testimonialsParticleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes testimonialsEnergyFlow {
  0% { transform: translateX(-100%) translateY(-100%); }
  100% { transform: translateX(100%) translateY(100%); }
}

@keyframes testimonialsGridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Badge */
.testimonials-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  animation: testimonialsBadgeGlow 3s ease-in-out infinite;
}

.badge-emoji {
  font-size: 20px;
  animation: testimonialsBadgeBounce 2s ease-in-out infinite;
}

.badge-text {
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

@keyframes testimonialsBadgeGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2); }
}

@keyframes testimonialsBadgeBounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Title */
.testimonials-title {
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
  animation: testimonialsTitleGradient 4s ease-in-out infinite;
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
  animation: testimonialsTitleGlow 4s ease-in-out infinite;
}

@keyframes testimonialsTitleGradient {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(10deg); }
}

@keyframes testimonialsTitleGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* Description */
.testimonials-description {
  font-size: 1.25rem;
  color: #94A3B8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Testimonial Cards */
.testimonial-card {
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

.testimonial-card::before {
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

.testimonial-card:hover::before {
  opacity: 1;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
}

/* Testimonial Header */
.testimonial-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.testimonial-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.testimonial-avatar:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.avatar-content {
  font-size: 24px;
  color: white;
  z-index: 2;
  position: relative;
}

.avatar-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: testimonialAvatarPulse 2s ease-in-out infinite;
}

@keyframes testimonialAvatarPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.testimonial-info {
  flex: 1;
}

.testimonial-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 4px;
}

.testimonial-position {
  font-size: 0.9rem;
  color: #3B82F6;
  font-weight: 500;
}

/* Testimonial Content */
.testimonial-content {
  space-y: 16px;
}

.testimonial-quote {
  color: #94A3B8;
  line-height: 1.6;
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;
}

.testimonial-quote::before {
  content: '"';
  font-size: 3rem;
  color: #3B82F6;
  position: absolute;
  top: -10px;
  left: -10px;
  opacity: 0.3;
}

/* Rating */
.testimonial-rating {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
}

.star {
  font-size: 16px;
  animation: starTwinkle 2s ease-in-out infinite;
}

.star:nth-child(1) { animation-delay: 0s; }
.star:nth-child(2) { animation-delay: 0.2s; }
.star:nth-child(3) { animation-delay: 0.4s; }
.star:nth-child(4) { animation-delay: 0.6s; }
.star:nth-child(5) { animation-delay: 0.8s; }

@keyframes starTwinkle {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
}

/* Result */
.testimonial-result {
  padding: 12px 16px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.testimonial-card:hover .testimonial-result {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.result-text {
  font-size: 0.9rem;
  color: #3B82F6;
  font-weight: 600;
  text-align: center;
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .testimonials-title {
    font-size: 2.5rem;
  }
  
  .testimonial-card {
    padding: 24px;
  }
  
  .testimonial-avatar {
    width: 50px;
    height: 50px;
  }
  
  .avatar-content {
    font-size: 20px;
  }
  
  .testimonial-quote::before {
    font-size: 2rem;
    top: -5px;
    left: -5px;
  }
}
</style>