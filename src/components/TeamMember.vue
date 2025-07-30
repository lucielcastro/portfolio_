<template>
  <div class="text-center group">
    <div class="w-32 h-32 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-blue/30 transition-all duration-300">
      <img :src="member.avatar" :alt="member.name" class="w-28 h-28 rounded-full object-cover" />
    </div>
    <h3 class="text-xl font-bold mb-3 text-white group-hover:text-primary-blue transition-colors duration-300">{{ member.name }}</h3>
    <p class="text-primary-blue font-semibold mb-2">{{ member.role }}</p>
    <p class="text-gray-400 text-sm">{{ member.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>
