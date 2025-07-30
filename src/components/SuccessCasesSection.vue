<template>
  <section id="experience" class="py-20 px-4 sm:px-8 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary-blue bg-clip-text text-transparent">
          Experiência Profissional
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Minha jornada profissional em desenvolvimento mobile
        </p>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue to-primary-cyan"></div>

        <div class="space-y-12">
          <div 
            v-for="(experience, index) in experiences" 
            :key="experience.id"
            class="relative"
          >
            <!-- Timeline dot -->
            <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-primary-blue rounded-full border-4 border-primary-dark"></div>

            <!-- Content -->
            <div class="ml-12 md:ml-0 md:w-1/2" :class="index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'">
              <div class="bg-gradient-to-br from-primary-blue/10 to-primary-cyan/10 rounded-lg p-6 border border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-300">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-bold text-white">{{ experience.title }}</h3>
                  <span class="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm font-medium">
                    {{ experience.duration }}
                  </span>
                </div>
                
                <h4 class="text-lg font-semibold text-primary-blue mb-2">{{ experience.company }}</h4>
                
                <p class="text-gray-300 mb-4 leading-relaxed">{{ experience.description }}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in experience.technologies" 
                    :key="tech"
                    class="bg-primary-blue/20 text-primary-blue px-2 py-1 rounded-full text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>

                <div class="space-y-2">
                  <div 
                    v-for="achievement in experience.achievements" 
                    :key="achievement"
                    class="flex items-start space-x-2"
                  >
                    <div class="w-1.5 h-1.5 bg-primary-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span class="text-gray-300 text-sm">{{ achievement }}</span>
                  </div>
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
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          id: 1,
          title: 'Senior Mobile Developer',
          company: 'TechCorp Solutions',
          duration: '2022 - Presente',
          description: 'Liderando o desenvolvimento de aplicações mobile para clientes enterprise, focando em performance e escalabilidade.',
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
          achievements: [
            'Desenvolveu 5 aplicações mobile com mais de 100k downloads',
            'Reduziu o tempo de build em 40% implementando CI/CD',
            'Mentorou 3 desenvolvedores juniores',
            'Implementou arquitetura que reduziu crashes em 80%'
          ]
        },
        {
          id: 2,
          title: 'Mobile Developer',
          company: 'StartupXYZ',
          duration: '2020 - 2022',
          description: 'Desenvolveu aplicações mobile inovadoras para startups, trabalhando com tecnologias modernas e metodologias ágeis.',
          technologies: ['React Native', 'TypeScript', 'Redux', 'Node.js', 'AWS'],
          achievements: [
            'Criou app de e-commerce com 50k+ usuários ativos',
            'Implementou sistema de pagamentos com Stripe',
            'Otimizou performance reduzindo tempo de carregamento em 60%',
            'Integrou APIs de terceiros e serviços de push notification'
          ]
        },
        {
          id: 3,
          title: 'Junior Mobile Developer',
          company: 'MobileFirst Agency',
          duration: '2019 - 2020',
          description: 'Iniciou carreira em desenvolvimento mobile, aprendendo boas práticas e trabalhando em projetos diversos.',
          technologies: ['React Native', 'JavaScript', 'Firebase', 'Git'],
          achievements: [
            'Desenvolveu 3 aplicações mobile do zero',
            'Aprendeu desenvolvimento nativo iOS e Android',
            'Participou de code reviews e pair programming',
            'Contribuiu para documentação técnica da equipe'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
