<template>
  <div>
    <b-container fluid>
      <b-row class="bg-primary">
        <b-col class="text-center">
          <div class="logo-results">
            <img src="~/assets/img/logoblanco.png" alt="Japi Logo" />
          </div>
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
        <h1 class="text-center pb3 pb4-m ma0 ma3-m" style="color: #2c50c8">¡Felicidades!</h1>
        <p class="text-center text-black pb1 pb5-m">
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

<style lang="scss">
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

.logo-results{
  padding: 20px 0;
  img {
    max-width: 150px;
  }
}

@media (max-width: 768px) {
  .logo-results{
    padding: 10px 0;
    img {
      max-width: 100px;
    }
  }

}
</style>
