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
        <p class="text-center text-black mb-3 mb-sm-5">
          Tienes los requisitos necesarios para solicitar un préstamo con cualquiera de las siguientes opciones:
        </p>
        <div class="d-flex flex-wrap justify-content-center">
          <div
            v-for="(result, index) in results"
            :key="`result-${index}`"
            class="flex-grow-1 flex-shrink-1 mb-4 p-2 custom--responsive-width"
          >
            <OffertComponent
              :ref="`offertComponent-${index}`"
              :result="result"
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
  },
  mounted() {
  }
}
</script>

<style scoped>
.bg-primary {
  background: linear-gradient(to bottom, #007bff, #0056b3);
}
.custom--responsive-width {
  max-width: 33%;
  flex-basis: 33%;
}
@media (max-width: 990px) {
  .custom--responsive-width {
    max-width: 100%;
    flex-basis: 100%;
  }
}
</style>
