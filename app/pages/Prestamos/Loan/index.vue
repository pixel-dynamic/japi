<template>
  <section class="d-flex align-items-center h100 bg-gradient">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="6" class="text-white text-center">
          <label class="text-white">Paso 1 de 5</label>
          <h1 class="title mb-5">¿Cuánto dinero necesitas?</h1>
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
              <b-button class="px-4" variant="warning" @click="saveLoan"
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
    getLoan() {
      return this.$store.state.loans.loan
    },
  },
  created() {
    this.price = this.getLoan ? this.getLoan : '0'
  },
  methods: {
    saveLoan() {
      console.log(this.price)
      if (this.price !== '$0') {
        this.$store.commit('setLoan', this.price)
        this.$router.push('/prestamos/buro')
      } else {
        alert('coloca una cantidad valida')
      }
    },
  },
}
</script>
