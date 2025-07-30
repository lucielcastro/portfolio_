<script setup>
import {
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/vue/24/solid'

const props = defineProps({
  solution: {
    type: Object,
    required: true
  }
})

const icons = {
  brain: CpuChipIcon,
  cloud: CloudIcon,
  shield: ShieldCheckIcon,
  lightning: BoltIcon
}
</script>

<template>
  <div class="bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 rounded-2xl border border-slate-700/50 hover:border-primary-blue/50 transition-all duration-500 group backdrop-blur-sm hover:shadow-lg hover:shadow-primary-blue/10">
    <div class="w-14 h-14 bg-gradient-to-r from-primary-blue/80 to-primary-cyan/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-blue/25 transition-all duration-300">
      <component :is="solution.icon" class="w-8 h-8 text-white" />
    </div>
    <h3 class="text-xl font-bold mb-4 text-white group-hover:text-primary-blue transition-colors duration-300">{{ solution.title }}</h3>
    <p class="text-gray-300 mb-6 leading-relaxed">{{ solution.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span 
        v-for="feature in solution.features" 
        :key="feature"
        class="bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm"
      >
        {{ feature }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionCard',
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
}
</script>
