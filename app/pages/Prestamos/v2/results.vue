<template>
  <div class="hello-world">
    <div class="lottie-container">
      <div class="lottie-wrapper">
        <div ref="lottieContainer" style="width: 300px; height: 300px"></div>
      </div>
    </div>
    <div class="message-container">
      <transition name="fade" mode="out-in">
        <div v-if="currentMessage" 
             :key="currentMessage.text" 
             class="message">
          <div class="message-icon">{{ currentMessage.icon }}</div>
          <div class="message-text" v-html="currentMessage.text"></div>
        </div>
      </transition>
    </div>
    <div class="security-badges">
      <div class="security-badge">
        <span class="security-icon">🔒</span>
        <span class="security-text">Tus datos están seguros y protegidos</span>
      </div>
      <div class="security-badge">
        <span class="security-icon">🛡️</span>
        <span class="security-text">Conexión segura SSL</span>
      </div>
    </div>
  </div>
</template>

<script>
import demoAnimation from '~/assets/lottie/demo.json'

export default {
  name: 'HelloWorld',
  layout: 'layoutResults',
  data() {
    return {
      currentMessageIndex: 0,
      messages: [
        {
          icon: '⏳',
          text: 'No cierres esta ventana.\n¡Estás a un paso de obtener tu <span class="highlight">préstamo</span>!',
          duration: 7000
        },
        {
          icon: '🔗',
          text: 'Te estamos conectando al sitio oficial de <span class="highlight">Fiesta Crédito</span> para completar tu solicitud.',
          duration: 4000
        },
        {
          icon: '🚀',
          text: '¡Aplica ahora para recibir tu <span class="highlight">respuesta cuanto antes</span>!',
          duration: 3000
        },
        {
          icon: '✅',
          text: 'Responde el formulario <span class="highlight">honestamente</span>.',
          duration: 3000
        },
        {
          icon: '⏱️',
          text: 'Solo te tomará <span class="highlight">2 minutos</span>',
          duration: 3000
        },
        {
          icon: '📋',
          text: 'Ten tu <span class="highlight">Curp</span> a la mano.',
          duration: 3000
        }
      ],
      timer: null
    }
  },
  computed: {
    currentMessage() {
      return this.messages[this.currentMessageIndex]
    }
  },
  methods: {
    startMessageRotation() {
      this.rotateMessage()
    },
    rotateMessage() {
      this.timer = setTimeout(() => {
        this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length
        this.rotateMessage()
      }, this.currentMessage.duration)
    }
  },
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'
    script.onload = () => {
      lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: demoAnimation
      })
    }
    document.head.appendChild(script)
    this.startMessageRotation()
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style>
.hello-world {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.message-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  min-height: 80px;
  width: 100%;
}

.message {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 15px;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  transition: all 0.3s ease;
}

.message:hover {
  transform: translateY(-2px);
}

.message-icon {
  font-size: 1.8rem;
  width: 2.6rem;
  height: 2.6rem;
  min-width: 2.6rem;
  min-height: 2.6rem;
  text-align: center;
  padding: 0;
  border-radius: 50%;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-text {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: pre-line;
}

.lottie-container {
  margin: 1.0rem 0;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.lottie-wrapper {
  border-radius: 50%;
  padding: 1.5rem;
}

.lottie-wrapper div {
  width: 250px !important;
  height: 250px !important;
}

.security-badges {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.security-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  width: 100%;
}

.security-icon {
  font-size: 1.2rem;
}

.security-text {
  font-size: 0.9rem;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .message {
    padding: 1rem 1.5rem;
  }
  
  .message-text {
    font-size: 1.1rem;
  }

  .security-badges {
    flex-direction: column;
    align-items: center;
  }

  /* Botón/acento amarillo */
.button-accent {
  background: #ffd600;
  color: #1a1f36;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 214, 0, 0.08);
  transition: background 0.2s;
}
.button-accent:hover {
  background: #ffe066;
}

/* Títulos y textos */
.results-content h1, .results-content h2, .results-content h3 {
  color: #1a1f36;
  font-weight: 800;
  margin-bottom: 1.2rem;
  text-align: center;
}
.results-content p {
  color: #482d42;
  font-size: 1.08rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Highlight para palabras importantes */
.highlight {
  color: #1a6cf3;
  background: #e3f0ff;
  border-radius: 4px;
  padding: 0.1rem 0.3rem;
  font-weight: 700;
  display: inline-block;
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 600px) {
  .results-content {
    padding: 1.2rem 0.5rem;
    max-width: 98vw;
  }
}

.message {
  background: rgb(215, 41, 41);
  max-width: 320px;
  min-width: 220px;
  width: 100%;
  margin: 0 auto;
  border: none;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
}
</style> 