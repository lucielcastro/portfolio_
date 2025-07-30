<template>
  <header class="fixed top-0 w-full z-50 glass-effect border-b border-primary-blue/20 backdrop-blur-xl">
    <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo de luxo -->
      <div class="flex items-center space-x-3 group">
        <div class="relative">
          <div class="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-xl flex items-center justify-center shadow-blue-glow group-hover:scale-110 transition-all duration-500">
            <span class="text-white font-bold text-lg">LC</span>
          </div>
          <!-- Efeito de brilho no logo -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div class="flex flex-col">
          <span class="text-white font-bold text-xl tracking-wide">Luciel Castro</span>
          <span class="text-primary-blue text-xs font-medium tracking-wider">MOBILE DEVELOPER</span>
        </div>
      </div>

      <!-- Navegação desktop -->
      <div class="hidden md:flex items-center space-x-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link group relative"
        >
          <span class="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
            {{ link.label }}
          </span>
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-cyan transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <!-- Botão CTA de luxo -->
      <div class="hidden md:block">
        <button class="luxury-cta-button">
          <span class="button-content">Baixar CV</span>
          <div class="button-glow"></div>
        </button>
      </div>

      <!-- Menu mobile -->
      <button @click="$emit('toggle-mobile-menu')" class="md:hidden luxury-mobile-button">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>

    <!-- Menu mobile expandido -->
    <div v-if="mobileMenuOpen" class="md:hidden glass-effect border-t border-primary-blue/20 backdrop-blur-xl">
      <div class="px-6 py-4 space-y-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click.prevent="handleLinkClick(link.href)"
          class="mobile-nav-link"
        >
          {{ link.label }}
        </a>
        <button class="luxury-cta-button w-full mt-4">
          <span class="button-content">Baixar CV</span>
          <div class="button-glow"></div>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    mobileMenuOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-mobile-menu'],
  data() {
    return {
      navLinks: [
        { label: 'Sobre', href: '#about' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experiência', href: '#experience' },
        { label: 'Contato', href: '#contact' }
      ]
    }
  },
  methods: {
    handleLinkClick(hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      if (this.mobileMenuOpen) {
        this.$emit('toggle-mobile-menu')
      }
    }
  }
}
</script>

<style scoped>
/* Navegação desktop */
.nav-link {
  position: relative;
  padding: 0.5rem 0;
  font-weight: 500;
  letter-spacing: 0.025em;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover::before {
  transform: scaleX(1);
}

/* Botão CTA de luxo */
.luxury-cta-button {
  position: relative;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.luxury-cta-button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.luxury-cta-button:hover .button-glow {
  left: 100%;
}

/* Botão mobile de luxo */
.luxury-mobile-button {
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.luxury-mobile-button:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
  transform: scale(1.1);
}

/* Links mobile */
.mobile-nav-link {
  display: block;
  padding: 0.75rem 0;
  color: #cbd5e1;
  font-weight: 500;
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  color: #3B82F6;
  padding-left: 1rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 8px;
}

/* Efeitos de glassmorphism */
.glass-effect {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Animações de entrada */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

header {
  animation: slideDown 0.6s ease-out;
}

/* Responsividade */
@media (max-width: 768px) {
  .luxury-cta-button {
    padding: 0.875rem 1.25rem;
    font-size: 0.875rem;
  }
}
</style>