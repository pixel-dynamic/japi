<template>
  <div class="loan-offer-card">
    <div class="loader-overlay" v-if="isAdjusting">
      <div class="loader"></div>
    </div>
    <div class="logo-box">
      <img :src="'/logos/'+result.image_path" :alt="result.company_name + ' Logo'" class="loan-offer-logo">
    </div>
    <ul class="loan-offer-features">
      <li>
        <span class="feature-check">✓</span>
        {{ result.amount_title }}: Hasta ${{ formatAmount(result.max_amount) }}
      </li>
      <li>
        <span class="feature-check">✓</span>
        {{ result.delivery_title }}: {{ result.response_time }}
      </li>
      <li>
        <span class="feature-check">✓</span>
        {{ result.delivery_time }}
      </li>
      <li>
        <span class="feature-check">✓</span>
        {{ result.benefits }}
      </li>
    </ul>
    <button class="loan-offer-button" @click="solicitarPrestamo">
      Solicitalo aquí >
    </button>
  </div>
</template>

<script>
export default {
  name: 'LoanOffer',
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isAdjusting: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.adjustCardsHeight();
    });
  },
  methods: {
    adjustCardsHeight() {
      this.isAdjusting = true;
      const cards = document.querySelectorAll('.loan-offer-features');
      let maxHeight = 0;

      // Encontrar la altura máxima
      cards.forEach(card => {
        const height = card.offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      // Aplicar la altura máxima a todas las cards
      cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });

      // Ocultar el loader después de un breve momento
      setTimeout(() => {
        this.isAdjusting = false;
      }, 500);
    },
    formatAmount(amount) {
      return parseFloat(amount).toLocaleString('es-MX', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
    },
    solicitarPrestamo() {
      this.$fb.track('Lead')
      ttq.instance('CUF8B83C77U7V3T8MD8G').track('ClickButton')
      if (this.result.redirect_link) {
        this.$router.push({
          path: "/prestamos/v2/loading",
          query: {
            site: btoa(this.result.redirect_link),
            company: btoa(this.result.company_name)
          }
        })
        // window.open(this.result.redirect_link, '_blank')
      } else {
        console.log('Solicitud de préstamo enviada para', this.result.company_name)
      }
    }
  }
}
</script>

<style scoped>
.loan-offer-card {
  background: linear-gradient(to bottom, #4a90e2, #2c50c8);
  border-radius: 10px;
  padding: 20px 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.loan-offer-logo {
  max-height: 50px;
  padding: 5px;
}

.loan-offer-features {
  list-style-type: none;
  padding: 15px 0;
  margin: 0 0 20px 0;
  width: 100%;
}

.loan-offer-features li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.feature-check {
  margin-right: 10px;
  font-weight: bold;
}

.loan-offer-button {
  background-color: white;
  color: #3f51b5;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.loan-offer-button:hover {
  background-color: #f0f0f0;
}

.logo-box{
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 15px 0;
  border-radius: 10px;
  width: 100%;
}

@media(max-width: 990px) {
  .logo-box{
    padding: 10px 0;
  }
}

.logo-box img{
  margin: 0;
}

.loader-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 10px;
}

.loader {
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
