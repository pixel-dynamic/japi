<template>
  <div class="loan-offer-card">
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
  methods: {
    formatAmount(amount) {
      return parseFloat(amount).toLocaleString('es-MX', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
    },
    solicitarPrestamo() {
      this.$fb.track('Lead')
      if (this.result.redirect_link) {
        window.open(this.result.redirect_link, '_blank')
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
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.loan-offer-logo {
  max-width: 150px;
  margin-bottom: 20px;
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
  padding: 50px 0;
  border-radius: 10px;
  width: 100%;
}

.logo-box img{
  margin: 0;
}
</style>
