<template>
  <div class="chatbot-container">
    <!-- Chat Button -->
    <button 
      @click="toggleChat" 
      class="chat-button"
      :class="{ 'chat-open': isOpen }"
    >
      <div class="button-content">
        <svg class="chat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        <div class="button-particles"></div>
        <div class="button-glow"></div>
      </div>
    </button>

    <!-- Chat Window -->
    <div 
      v-if="isOpen" 
      class="chat-window"
    >
      <!-- Header -->
      <div class="chat-header">
        <div class="header-content">
          <div class="header-avatar">
            <div class="avatar-content">🤖</div>
            <div class="avatar-particles"></div>
          </div>
          <div class="header-info">
            <h3 class="header-title">Luciel Castro</h3>
            <p class="header-subtitle">Desenvolvedor Mobile</p>
          </div>
          <button @click="toggleChat" class="close-button">
            <svg class="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div class="chat-messages" ref="messagesContainer">
        <div 
          v-for="(message, index) in messages" 
          :key="index"
          class="message"
          :class="message.type"
        >
          <div class="message-content">
            <div class="message-avatar">
              <div class="avatar-content">{{ message.type === 'user' ? '👤' : '🤖' }}</div>
            </div>
            <div class="message-bubble">
              <p class="message-text">{{ message.text }}</p>
              <span class="message-time">{{ message.time }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="chat-input">
        <div class="input-container">
          <input 
            v-model="newMessage" 
            @keyup.enter="sendMessage"
            type="text" 
            placeholder="Digite sua mensagem..."
            class="message-input"
          />
          <button @click="sendMessage" class="send-button">
            <svg class="send-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            <div class="send-particles"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBot',
  data() {
    return {
      isOpen: false,
      newMessage: '',
      messages: [
        {
          text: 'Olá! Sou Luciel Castro, desenvolvedor mobile. Como posso ajudar você hoje?',
          type: 'bot',
          time: 'Agora'
        }
      ]
    }
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        // Add user message
        this.messages.push({
          text: this.newMessage,
          type: 'user',
          time: 'Agora'
        })
        
        const userMessage = this.newMessage
        this.newMessage = ''
        
        // Simulate bot response
        setTimeout(() => {
          this.messages.push({
            text: this.getBotResponse(userMessage),
            type: 'bot',
            time: 'Agora'
          })
          this.scrollToBottom()
        }, 1000)
        
        this.scrollToBottom()
      }
    },
    getBotResponse(message) {
      const responses = [
        'Interessante! Posso ajudar você com desenvolvimento mobile.',
        'Ótima pergunta! Vamos conversar sobre isso.',
        'Entendo sua dúvida. Deixe-me explicar melhor.',
        'Que legal! Tenho experiência nessa área.',
        'Perfeito! Posso mostrar alguns exemplos dos meus projetos.'
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    },
    scrollToBottom() {
      this.$nextTick(() => {
        if (this.$refs.messagesContainer) {
          this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight
        }
      })
    }
  }
}
</script>

<style scoped>
/* Chatbot Container */
.chatbot-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}

/* Chat Button */
.chat-button {
  position: relative;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.chat-button:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.4);
}

.chat-button.chat-open {
  transform: scale(0.9);
}

.button-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-icon {
  width: 24px;
  height: 24px;
  color: white;
  z-index: 2;
  position: relative;
}

.button-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: buttonPulse 2s ease-in-out infinite;
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: buttonGlow 3s ease-in-out infinite;
}

@keyframes buttonPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

@keyframes buttonGlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Chat Window */
.chat-window {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: chatSlideIn 0.3s ease-out;
}

@keyframes chatSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Chat Header */
.chat-header {
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-avatar {
  position: relative;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-content {
  font-size: 20px;
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
  animation: avatarPulse 2s ease-in-out infinite;
}

@keyframes avatarPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.header-info {
  flex: 1;
}

.header-title {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2px;
}

.header-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
}

.close-button {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.close-icon {
  width: 16px;
  height: 16px;
}

/* Chat Messages */
.chat-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  space-y: 16px;
}

.message {
  margin-bottom: 16px;
}

.message-content {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.message.user .message-content {
  flex-direction: row-reverse;
}

.message-avatar {
  width: 32px;
  height: 32px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.message.user .message-avatar {
  background: rgba(6, 182, 212, 0.1);
}

.message-bubble {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 12px 16px;
  max-width: 80%;
  position: relative;
}

.message.user .message-bubble {
  background: rgba(6, 182, 212, 0.1);
  border-color: rgba(6, 182, 212, 0.2);
}

.message-text {
  color: #E2E8F0;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 4px;
}

.message-time {
  font-size: 0.7rem;
  color: #64748B;
  display: block;
}

/* Chat Input */
.chat-input {
  padding: 20px;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
}

.input-container {
  display: flex;
  gap: 12px;
  align-items: center;
}

.message-input {
  flex: 1;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  color: #E2E8F0;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;
}

.message-input::placeholder {
  color: #64748B;
}

.message-input:focus {
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.send-button {
  position: relative;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.send-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
}

.send-icon {
  width: 18px;
  height: 18px;
  z-index: 2;
  position: relative;
}

.send-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: sendParticle 3s ease-in-out infinite;
}

@keyframes sendParticle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(180deg); }
}

/* Scrollbar Styling */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: rgba(59, 130, 246, 0.1);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3B82F6, #06B6D4);
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #60A5FA, #22D3EE);
}

/* Responsive */
@media (max-width: 768px) {
  .chat-window {
    width: calc(100vw - 48px);
    right: -12px;
  }
  
  .chat-button {
    width: 50px;
    height: 50px;
  }
  
  .chat-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
