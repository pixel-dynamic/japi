<template>
  <section class="d-flex align-items-center h100 bg-gradient">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="6" class="text-white text-center">
          <label class="text-white">Paso 2 de 4</label>
          <b-card class="text-left text-body border results-card">
            <b-row>
              <b-col>
                <h1 class="title text-primary text-center mb-5">
                  ¿Cuánto dinero debes?
                </h1>
              </b-col>
            </b-row>
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
                  @click.prevent.stop="saveMoneyLess"
                  >Siguiente</b-button
                >
              </b-col>
            </b-row>
          </b-card>
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
      price: '0',
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
    getMoneyLess() {
      return this.$store.state.debt.moneyLess
    },
  },
  created() {
    this.price = this.getMoneyLess ? this.getMoneyLess : '0'
  },
  methods: {
    saveMoneyLess() {
      let sub = ''
      const re = /[,]/g
      let repla = ''
      let number = 0

      sub = this.price.substring(1)
      repla = sub.replace(re, '')
      number = parseInt(repla)

      if (number !== 0) {
        this.$store.commit('setMoneyLess', number)
        this.$router.push('/deudas/delay')
      } else {
        alert('coloca una cantidad valida')
      }
    },
  },
}
</script>
