<template>
  <div class="hello-world">
    <div class="logo-container">
      <img src="~/assets/img/logoamarillo.png" alt="Japi Logo" />
    </div>
    <div class="lottie-container">
      <div class="lottie-wrapper">
        <div ref="lottieContainer"></div>
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
    <div class="wait-timer-container">
      <div class="wait-message">
        <span>Espera un momento</span>
        <div class="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="timer" v-if="remainingTime <= 9">
        <span>{{ formatTime(remainingTime) }}</span>
      </div>
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
      remainingTime: 0,
      messages: [
        {
          icon: '⏳',
          text: 'No cierres esta ventana.\n¡Estás a un paso de obtener tu <span class="highlight">préstamo</span>!',
          duration: 2500
        },
        {
          icon: '🔗',
          text: 'Te estamos conectando al sitio oficial de <span class="highlight">Fiesta Crédito</span> para completar tu solicitud.',
          duration: 2500
        },
        {
          icon: '🚀',
          text: '¡Aplica ahora para recibir tu <span class="highlight">respuesta cuanto antes</span>!',
          duration: 2500
        },
        {
          icon: '✅',
          text: 'Responde el formulario <span class="highlight">honestamente</span>.',
          duration: 2500
        },
        {
          icon: '⏱️',
          text: 'Solo te tomará <span class="highlight">2 minutos</span>',
          duration: 2500
        },
        {
          icon: '📋',
          text: 'Ten tu <span class="highlight">Curp</span> a la mano.',
          duration: 2500
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
    formatTime(seconds) {
      return `${seconds}s`;
    },
    calculateTotalTime() {
      return this.messages.reduce((total, msg) => total + msg.duration, 0) / 1000;
    },
    startMessageRotation() {
      this.remainingTime = this.calculateTotalTime();
      this.rotateMessage();
      this.startTimer();
    },
    startTimer() {
      setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        }
      }, 1000);
    },
    rotateMessage() {
      this.timer = setTimeout(() => {
        this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
        
        // Si hemos completado un ciclo completo de mensajes
        if (this.currentMessageIndex === 0) {
          const siteUrl = this.$route.query.site ? atob(this.$route.query.site) : null;
          if (siteUrl) {
            window.location.href = siteUrl;
          }
        } else {
          this.rotateMessage();
        }
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
    const decoded = this.$route.query.company ? atob(this.$route.query.company) : 'Empresa';
    console.log(decoded)
    const msg = this.messages.find(m =>
      m.text.includes('Fiesta Crédito')
    );
    if (msg) {
      msg.text = msg.text.replace(/<span class="highlight">Fiesta Crédito<\/span>/, `<span class="highlight">${decoded}</span>`);
    }
    this.startMessageRotation()
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style lang="scss">
.hello-world {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;

    img {
      width: 120px;
      height: auto;
      object-fit: contain;
    }
  }

  .wait-timer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem 0;
    width: 90%;
    max-width: 320px;
  }

  .wait-message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #4f46e5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    flex: 1;

    .loading-dots {
      display: flex;
      gap: 0.2rem;
      
      span {
        width: 4px;
        height: 4px;
        background: #4f46e5;
        border-radius: 50%;
        animation: loadingDots 1.4s infinite ease-in-out;
        
        &:nth-child(1) { animation-delay: 0s; }
        &:nth-child(2) { animation-delay: 0.2s; }
        &:nth-child(3) { animation-delay: 0.4s; }
      }
    }
  }

  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    font-size: 0.9rem;
    color: #4f46e5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .lottie-container {
    margin: 0;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24vh;
    min-height: 24vh;
    max-height: 24vh;
    overflow: hidden;

    .lottie-wrapper {
      border-radius: 50%;
      padding: 0.5rem;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border: 1px solid rgba(0, 0, 0, 0.05);
      width: 50%;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      div {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }

  .message-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0.25rem;
    height: 23vh;
    min-height: 23vh;
    max-height: 23vh;
    width: 100%;
    overflow: hidden;
  }

  .message {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    border-radius: 12px;
    max-width: 320px;
    width: 90%;
    margin: 0 auto;
    border: none;
    height: auto;
    transition: all 0.3s ease;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &-icon {
      font-size: 1.6rem;
      width: 2.5rem;
      height: 2.5rem;
      min-width: 2.5rem;
      min-height: 2.5rem;
      border-radius: 50%;
    }

    &-text {
      font-size: 0.95rem;
      line-height: 1.3;
    }
  }

  .security-badges {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 30vh;
    min-height: 30vh;
    max-height: 30vh;
    padding: 0.5rem 0.25rem;
    overflow: hidden;

    .security-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.6rem;
      border-radius: 8px;
      background: rgba(79, 70, 229, 0.1);
      color: #4f46e5;
      border: 1px solid rgba(79, 70, 229, 0.2);
      width: 90%;
      max-width: 320px;

      .security-icon {
        font-size: 1rem;
      }

      .security-text {
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
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
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes loadingDots {
  0%, 80%, 100% { 
    transform: scale(0.6);
    opacity: 0.6;
  }
  40% { 
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hello-world {
    .message {
      padding: 0.75rem;
      
      &-text {
        font-size: 1rem;
      }
    }

    .security-badges {
      gap: 0.5rem;
      
      .security-badge {
        padding: 0.5rem 0.75rem;
      }
    }
  }
}
</style> 