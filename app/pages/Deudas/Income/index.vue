<template>
  <section class="d-flex align-items-center h100 bg-gradient">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="6" class="text-white text-center">
          <label class="text-white">Paso 5 de 6</label>
          <h1 class="title mb-5">¿De cuánto son tus ingresos mensuales?</h1>
          <b-row>
            <b-col>
              <b-form-input
                v-model.lazy="price"
                v-money="money"
                class="input-masked"
                type="tel"
                placeholder="$0.00"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="justify-content-center mt-5">
            <b-col cols="auto">
              <b-button
                class="px-4"
                variant="warning"
                @click.prevent.stop="saveProfit"
                >Siguiente</b-button
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      price: 0,
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$',
        suffix: '',
        precision: 0,
        masked: false /* doesn't work with directive */,
      },
    }
  },
  computed: {
    getProfit() {
      return this.$store.state.debt.profit
    },
  },
  created() {
    this.price = this.getProfit ? this.getProfit : '0'
  },
  methods: {
    saveProfit() {
      if (this.price !== '$0') {
        this.$store.commit('setProfit', this.price)
        this.$router.push('/deudas/personal')
      } else {
        alert('coloca una cantidad valida')
      }
    },
  },
}
</script>
