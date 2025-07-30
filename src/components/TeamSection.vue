<template>
  <section class="py-20 px-4 sm:px-8 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <div class="inline-block mb-6">
          <span class="px-4 py-2 bg-primary-blue/10 border border-primary-blue/30 rounded-full text-primary-blue font-medium text-sm tracking-wide">
            EQUIPE
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
          Mentes <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-cyan animate-pulse">Brilhantes</span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Conheça os profissionais que fazem a diferença em cada projeto
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TeamMember 
          v-for="member in teamMembers" 
          :key="member.id" 
          :member="member" 
        />
      </div>
    </div>
  </section>
</template>

<script>
import TeamMember from './TeamMember.vue'

export default {
  name: 'TeamSection',
  components: {
    TeamMember
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Luciel Castro',
          role: 'Mobile Developer',
          description: 'Especialista em React Native e Flutter',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        },
        {
          id: 2,
          name: 'Ana Silva',
          role: 'UI/UX Designer',
          description: 'Criando experiências únicas e intuitivas',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
        },
        {
          id: 3,
          name: 'Carlos Santos',
          role: 'Backend Developer',
          description: 'Arquitetura robusta e escalável',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Background grid pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(25, 220, 130, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(25, 220, 130, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Floating orbs */
.floating-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(25, 220, 130, 0.3), transparent);
  filter: blur(1px);
  animation: float 6s ease-in-out infinite;
}

.orb-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.orb-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 70%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
  50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
}

/* Team grid layout */
.team-hexagon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Team card futurístico */
.team-card {
  position: relative;
  background: rgba(15, 23, 42, 0.3);
  border-radius: 24px;
  padding: 2rem;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(25, 220, 130, 0.1);
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.team-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(25, 220, 130, 0.5);
}

/* Background gradient animado */
.card-bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(25, 220, 130, 0.1) 0%, 
    transparent 50%, 
    rgba(34, 197, 94, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.6s ease;
}

.team-card:hover .card-bg-gradient {
  opacity: 1;
}

/* Holographic border */
.holographic-border {
  position: absolute;
  inset: -1px;
  background: linear-gradient(45deg, 
    rgba(25, 220, 130, 0.3),
    rgba(34, 197, 94, 0.3),
    rgba(16, 185, 129, 0.3),
    rgba(25, 220, 130, 0.3));
  background-size: 400% 400%;
  border-radius: 24px;
  opacity: 0;
  animation: holographicShimmer 3s ease-in-out infinite;
  z-index: -1;
}

.team-card:hover .holographic-border {
  opacity: 1;
}

@keyframes holographicShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Avatar container futurístico */
.avatar-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
}

.avatar-ring {
  position: absolute;
  inset: -8px;
  border: 2px solid rgba(25, 220, 130, 0.3);
  border-radius: 50%;
}

.avatar-ring::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #19dc82;
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #19dc82;
}

.avatar-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(25, 220, 130, 0.3), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.team-card:hover .avatar-glow {
  opacity: 1;
}

.avatar-image {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #19dc82, #22c55e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: transform 0.6s ease;
  overflow: hidden;
}

.avatar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.team-card:hover .avatar-image {
  transform: scale(1.1);
}

/* Scanning effect */
.scan-line {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #19dc82, transparent);
  animation: scan 2s ease-in-out infinite;
}

@keyframes scan {
  0% { top: -100%; }
  50% { top: 50%; }
  100% { top: 100%; }
}

/* Floating particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #19dc82;
  border-radius: 50%;
  animation: particleFloat 4s ease-in-out infinite;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  top: 60%;
  right: 15%;
  animation-delay: 1.5s;
}

.particle-3 {
  bottom: 20%;
  left: 80%;
  animation-delay: 3s;
}

@keyframes particleFloat {
  0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
  50% { transform: translateY(-15px) scale(1.2); opacity: 1; }
}

/* Member info */
.member-info {
  text-align: center;
  position: relative;
  z-index: 2;
}

.member-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.team-card:hover .member-name {
  color: #19dc82;
}

.member-position {
  color: #19dc82;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.member-description {
  color: #94a3b8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.team-card:hover .member-description {
  color: #cbd5e1;
}

/* Skills tags */
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.skill-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(25, 220, 130, 0.1);
  border: 1px solid rgba(25, 220, 130, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #19dc82;
  font-weight: 500;
  transition: all 0.3s ease;
}

.team-card:hover .skill-tag {
  background: rgba(25, 220, 130, 0.2);
  border-color: rgba(25, 220, 130, 0.6);
  transform: scale(1.05);
}

/* Social links */
.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(25, 220, 130, 0.1);
  border: 1px solid rgba(25, 220, 130, 0.3);
  color: #19dc82;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-btn:hover {
  background: rgba(25, 220, 130, 0.2);
  border-color: #19dc82;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(25, 220, 130, 0.3);
}

/* Card glow effect */
.card-glow {
  position: absolute;
  inset: -50px;
  background: radial-gradient(circle, rgba(25, 220, 130, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.6s ease;
  z-index: -1;
}

.team-card:hover .card-glow {
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .team-hexagon-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .team-card {
    padding: 1.5rem;
  }
}
</style>
