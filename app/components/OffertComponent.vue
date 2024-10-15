<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-md-3">
            <img :src="'/logos/'+result.image_path" :alt="result.company_name + ' Logo'" class="img-fluid mb-3 mb-md-0">
          </div>
          <div class="col-md-2">
            <h6 class="text-muted mb-1">{{ result.amount_title }}:</h6>
            <p class="mb-0">Hasta <span class="text-success fw-bold">${{ formatAmount(result.max_amount) }}</span></p>
          </div>
          <div class="col-md-3">
            <h6 class="text-muted mb-1">{{ result.delivery_title }}:</h6>
            <p class="mb-0 font-weight-bold">{{ result.response_time }}</p>
            <p class="mb-0">{{ result.delivery_time }}</p>
          </div>
          <div class="col-md-2">
            <h6 class="text-muted mb-1">{{ result.payment_term_title }}:</h6>
            <p class="mb-0">{{ result.payment_term || '-' }}</p>
          </div>
          <div class="col-md-2">
            <h6 class="text-muted mb-1">{{ result.benefits_title }}:</h6>
            <p class="mb-0">{{ result.benefits }}</p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-3">
            <button class="btn btn-success w-100" @click="solicitarPrestamo">Solicitar</button>
          </div>
        </div>
      </div>
    </div>
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
.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.text-success {
  color: #28a745 !important;
}
</style>
