<template>
  <div class="min-vh-90">
    <b-container fluid>
      <b-row class="py-3 bg-primary">
        <b-col class="text-center">
          <img src="~/assets/img/logoblanco.png" alt="Japi Logo" height="40" />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="py-5">
      <section v-if="$fetchState.pending" class="text-center">
        <h3 class="mb-4 text-blue">Recibiendo ofertas...</h3>
        <b-icon icon="filter-circle" font-scale="3" animation="throb" variant="light"></b-icon>
        <p class="font-weight-bold mt-3 text-white">Espera un momento...</p>
      </section>
      <section v-else>
        <h1 class="text-center mb-4" style="color: #2c50c8">¡Felicidades!</h1>
        <p class="text-center text-black mb-5">
          Tienes los requisitos necesarios para solicitar un préstamo con cualquiera de las siguientes opciones:
        </p>
        <b-row>
          <b-col
            v-for="(result, index) in results"
            :key="`result-${index}`"
            sm="12"
            md="4"
            class="mb-4"
          >
            <OffertComponent :result="result"></OffertComponent>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      results: [],
    }
  },
  computed: {
    message() {
      const quantity = this.results.length
      return quantity > 1
        ? `Hemos encontrado ${quantity} ofertas personalizadas para ti.`
        : `Hemos encontrado ${quantity} oferta personalizada para ti.`
    },
  },
  async fetch() {
    const { data } = await this.$axios.get('https://admin.japiapp.com.mx/api/loands')
    this.results = data
  }
}
</script>

<style scoped>
.bg-primary {
  background: linear-gradient(to bottom, #007bff, #0056b3);
}
</style>
