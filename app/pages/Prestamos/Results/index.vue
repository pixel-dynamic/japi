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
        <p class="text-center text-success font-weight-bold mb-4 offer-count-message" style="font-size: 1rem">
          {{ offerCountMessage }}
        </p>
        <div class="offers-container">
          <div class="offer-slider" ref="offerSlider">
            <div
              v-for="(result, index) in results"
              :key="`result-${index}`"
              class="offer-slide"
              :class="{ 'active': currentSlide === index }"
            >
              <OffertComponent
                :ref="`offertComponent-${index}`"
                :result="result"
                @image-loaded="handleImageLoad"
              ></OffertComponent>
            </div>
          </div>
          <div class="slider-controls" v-if="isMobile">
            <div class="slider-dots">
              <button
                v-for="(_, index) in results"
                :key="index"
                class="slider-dot"
                :class="{ 'active': currentSlide === index }"
                @click="scrollToSlide(index)"
                :aria-label="`Ver oferta ${index + 1}`"
              ></button>
            </div>
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
      resizeObserver: null,
      currentSlide: 0,
      isMobile: false,
      touchStartX: 0,
      touchEndX: 0
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
    this.checkMobile()
    this.$nextTick(() => {
      this.initSlider()
      this.setupResizeObserver()
      this.equalizeCardHeights()
      window.addEventListener('resize', this.handleResize)
    })
  },
  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 990
    },
    handleResize() {
      this.checkMobile()
      this.debouncedEqualize()
    },
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
    scrollToSlide(index) {
      const slider = this.$refs.offerSlider
      if (!slider) return

      const slideWidth = slider.offsetWidth
      const scrollPosition = index * slideWidth

      slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })

      this.currentSlide = index
    },
    handleScroll() {
      const slider = this.$refs.offerSlider
      if (!slider) return

      const slideWidth = slider.offsetWidth
      const scrollPosition = slider.scrollLeft
      const newIndex = Math.round(scrollPosition / slideWidth)

      if (this.currentSlide !== newIndex) {
        this.currentSlide = newIndex
      }
    },
    initSlider() {
      const slider = this.$refs.offerSlider
      if (!slider) return

      // Observar el scroll para actualizar los dots
      slider.addEventListener('scroll', this.handleScroll)

      // Eventos táctiles mejorados
      slider.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX
      }, { passive: true })

      slider.addEventListener('touchmove', (e) => {
        if (!this.touchStartX) return

        const currentX = e.touches[0].clientX
        const diff = this.touchStartX - currentX

        // Si el desplazamiento es significativo, prevenir el scroll vertical
        if (Math.abs(diff) > 5) {
          e.preventDefault()
        }
      }, { passive: false })

      slider.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX
        const diff = this.touchStartX - touchEndX

        // Determinar la dirección del swipe
        if (Math.abs(diff) > 50) { // umbral mínimo para considerar un swipe
          const direction = diff > 0 ? 1 : -1
          const nextIndex = Math.max(0, Math.min(this.currentSlide + direction, this.results.length - 1))
          this.scrollToSlide(nextIndex)
        }

        this.touchStartX = null
      }, { passive: true })
    },
    equalizeCardHeights() {
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          const cards = this.$el.querySelectorAll('.loan-offer-card')
          if (!cards.length) return

          cards.forEach(card => {
            card.style.height = 'auto'
          })

          const tallestCard = Array.from(cards).reduce((tallest, card) => {
            return Math.max(tallest, card.offsetHeight)
          }, 0)

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

.offers-container {
  position: relative;
  width: 100%;
}

.slider-controls {
  margin-top: 1rem;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.slider-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ccc;
  border: none;
  padding: 0;
  transition: all 0.3s ease;
}

.slider-dot.active {
  background-color: #2c50c8;
  transform: scale(1.2);
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
    scroll-behavior: smooth;
    gap: 1rem;
    padding: 0.5rem;
  }

  .offer-slider::-webkit-scrollbar {
    display: none;
  }

  .offer-slide {
    flex: 0 0 85%;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    transition: transform 0.3s ease;
    opacity: 0.7;
    transform: scale(0.95);
  }

  .offer-slide.active {
    opacity: 1;
    transform: scale(1);
  }
}
</style>

