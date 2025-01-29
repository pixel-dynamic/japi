<template>
  <div class="min-vh-80">
    <b-container fluid>
      <b-row class="py-3 bg-primary">
        <b-col class="text-center">
          <img src="~/assets/img/logoblanco.png" alt="Japi Logo" height="40" />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="py-3">
      <section v-if="$fetchState.pending" class="text-center">
        <h3 class="mb-4 text-blue">Recibiendo ofertas...</h3>
        <b-icon icon="filter-circle" font-scale="3" animation="throb" variant="light"></b-icon>
        <p class="font-weight-bold mt-3 text-white">Espera un momento...</p>
      </section>
      <section v-else>
        <h1 class="text-center mb-4" style="color: #2c50c8">¡Felicidades!</h1>
        <p class="text-center text-black mb-3">
          Tienes los requisitos necesarios para solicitar un préstamo con cualquiera de las siguientes opciones:
        </p>
        <p class="text-center text-success font-weight-bold mb-4 offer-count-message">
          {{ offerCountMessage }}
        </p>
        <div class="offer-slider" ref="offerSlider">
          <div
            v-for="(result, index) in results"
            :key="`result-${index}`"
            class="offer-slide"
          >
            <OffertComponent
              :ref="`offertComponent-${index}`"
              :result="result"
              @image-loaded="handleImageLoad"
            ></OffertComponent>
          </div>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'landingFloat',
  data() {
    return {
      results: [],
      loadedImages: 0,
      resizeObserver: null
    }
  },
  computed: {
    offerCountMessage() {
      const quantity = this.results.length
      if (quantity === 0) {
        return "Lo sentimos, no hay ofertas disponibles en este momento."
      } else if (quantity === 1) {
        return "¡Tenemos una oferta exclusiva para ti!"
      } else if (quantity < 5) {
        return `¡Genial! Hemos encontrado ${quantity} ofertas personalizadas para ti.`
      } else {
        return `¡Increíble! Tienes ${quantity} ofertas esperándote. ¡Elige la mejor!`
      }
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('https://admin.japiapp.com.mx/api/loands')
    this.results = data
  },
  mounted() {
    this.$nextTick(() => {
      this.initSlider()
      this.setupResizeObserver()
      this.equalizeCardHeights()

      // Agregar listener para cambios de ventana
      window.addEventListener('resize', this.debouncedEqualize)

      // Intentar igualar alturas después de un tiempo para asegurar que todo esté cargado
      setTimeout(() => {
        this.equalizeCardHeights()
      }, 1000)
    })
  },
  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
    window.removeEventListener('resize', this.debouncedEqualize)
  },
  methods: {
    setupResizeObserver() {
      if ('ResizeObserver' in window) {
        this.resizeObserver = new ResizeObserver(this.debouncedEqualize)
        const cards = this.$el.querySelectorAll('.loan-offer-card')
        cards.forEach(card => {
          this.resizeObserver.observe(card)
        })
      }
    },
    handleImageLoad() {
      this.loadedImages++
      if (this.loadedImages === this.results.length) {
        this.equalizeCardHeights()
      }
    },
    debouncedEqualize: debounce(function() {
      this.equalizeCardHeights()
    }, 150),
    initSlider() {
      const slider = this.$refs.offerSlider
      if (!slider) return

      let isDown = false
      let startX
      let scrollLeft

      const start = (e) => {
        isDown = true
        slider.classList.add('active')
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
        scrollLeft = slider.scrollLeft
      }

      const end = () => {
        isDown = false
        slider.classList.remove('active')
      }

      const move = (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
        const walk = (x - startX) * 2
        slider.scrollLeft = scrollLeft - walk
      }

      slider.addEventListener('mousedown', start)
      slider.addEventListener('touchstart', start)

      slider.addEventListener('mousemove', move)
      slider.addEventListener('touchmove', move)

      slider.addEventListener('mouseleave', end)
      slider.addEventListener('mouseup', end)
      slider.addEventListener('touchend', end)
    },
    equalizeCardHeights() {
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          const cards = this.$el.querySelectorAll('.loan-offer-card')
          if (!cards.length) return

          // Reset heights
          cards.forEach(card => {
            card.style.height = 'auto'
          })

          // Find the tallest card
          const tallestCard = Array.from(cards).reduce((tallest, card) => {
            return Math.max(tallest, card.offsetHeight)
          }, 0)

          // Set all cards to the height of the tallest card
          if (tallestCard > 0) {
            cards.forEach(card => {
              card.style.height = `${tallestCard}px`
            })
          }
        })
      })
    }
  }
}

// Función debounce para evitar múltiples llamadas
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
</script>

<style scoped>
.bg-primary {
  background: linear-gradient(to bottom, #007bff, #0056b3);
}

.offer-count-message {
  font-size: 1.2em;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@media (min-width: 991px) {
  .offer-slider {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .offer-slide {
    max-width: 33%;
    flex-basis: 33%;
    padding: 0.5rem;
  }
}

@media (max-width: 990px) {
  .offer-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .offer-slider::-webkit-scrollbar {
    display: none;
  }

  .offer-slide {
    flex: 0 0 85%;
    scroll-snap-align: center;
    padding: 0.5rem;
  }
}
</style>

