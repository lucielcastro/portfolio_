<template>
  <section id="projects" class="py-20 px-4 sm:px-8 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary-blue bg-clip-text text-transparent">
          Meus Projetos
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Alguns dos projetos que desenvolvi e dos quais me orgulho
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group bg-gradient-to-br from-primary-blue/10 to-primary-cyan/10 rounded-2xl p-8 border border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-500 hover:scale-105 hover:shadow-card-glow backdrop-blur-sm relative overflow-hidden"
        >
          <!-- Background glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Icon container with glow -->
          <div class="relative mb-6">
            <div class="w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-blue-glow">
              <span class="text-white font-bold text-2xl">{{ project.icon }}</span>
            </div>
            <!-- Floating particles around icon -->
            <div class="absolute -top-2 -right-2 w-3 h-3 bg-primary-blue rounded-full animate-pulse"></div>
            <div class="absolute -bottom-2 -left-2 w-2 h-2 bg-primary-cyan rounded-full animate-pulse"></div>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-4 group-hover:text-primary-blue transition-colors duration-300">{{ project.title }}</h3>
          <p class="text-gray-300 text-sm leading-relaxed mb-6">{{ project.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-xs hover:bg-primary-blue/30 transition-colors cursor-pointer"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex space-x-3">
            <a 
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="bg-primary-blue/20 text-primary-blue px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-blue/30 hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>
            <a 
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              class="bg-gradient-to-r from-primary-blue to-primary-cyan text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 shadow-blue-glow"
            >
              Demo
            </a>
          </div>
          
          <!-- Hover effect overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-blue/0 to-primary-cyan/0 group-hover:from-primary-blue/5 group-hover:to-primary-cyan/5 transition-all duration-500 rounded-2xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'E-commerce Mobile App',
          description: 'Aplicativo completo de e-commerce com React Native, incluindo pagamentos, carrinho de compras e sistema de avaliações.',
          icon: '🛒',
          technologies: ['React Native', 'Redux', 'Stripe', 'Firebase'],
          github: '#',
          demo: '#'
        },
        {
          id: 2,
          title: 'Fitness Tracker',
          description: 'App de monitoramento de atividades físicas com integração de wearables e dashboard personalizado.',
          icon: '🏃‍♂️',
          technologies: ['Flutter', 'Dart', 'HealthKit', 'Google Fit'],
          github: '#',
          demo: '#'
        },
        {
          id: 3,
          title: 'Delivery App',
          description: 'Plataforma de delivery com geolocalização em tempo real, chat integrado e sistema de avaliações.',
          icon: '🚚',
          technologies: ['React Native', 'Socket.io', 'Maps', 'Push Notifications'],
          github: '#',
          demo: '#'
        },
        {
          id: 4,
          title: 'Social Media App',
          description: 'Rede social com stories, posts, mensagens e sistema de followers.',
          icon: '📱',
          technologies: ['Flutter', 'Firebase', 'Cloud Storage', 'Real-time DB'],
          github: '#',
          demo: '#'
        },
        {
          id: 5,
          title: 'Banking App',
          description: 'Aplicativo bancário com autenticação biométrica, transferências e histórico de transações.',
          icon: '🏦',
          technologies: ['Kotlin', 'Kotlin', 'Biometric Auth', 'Encryption'],
          github: '#',
          demo: '#'
        },
        {
          id: 6,
          title: 'Weather App',
          description: 'App de previsão do tempo com widgets personalizáveis e notificações de alertas.',
          icon: '🌤️',
          technologies: ['React Native', 'Weather API', 'Widgets', 'Notifications'],
          github: '#',
          demo: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>