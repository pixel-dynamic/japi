<template>
  <div>
    <section style="height: 80vh" v-if="$fetchState.pending">
      <div class="text-center">
        <h3 class="mb-4">Recibiendo ofertas...</h3>
        <b-icon icon="filter-circle" font-scale="3" animation="throb"></b-icon>
        <p class="font-weight-bold mt-3">Espera un momento...</p>
      </div>
    </section>
    <section v-else class="d-flex align-items-center h100 py-5 py-md-5">
      <b-container>
        <b-row class="justify-content-center">
          <b-col sm="10" md="12">
            <h1 class="title mt-md-0 mb-4 blue-text">
              {{ message }}
            </h1>
            <!-- <p>
              ¡Tienes los requisitos para solicitar cualquiera de estas ofertas!
            </p> -->
            <p class="mb-5">
              Te recomendamos aplicar en todas estas opciones para incrementar
              tus posibilidades de aprobación
            </p>
          </b-col>
        </b-row>
        <b-row
          class="text-body d-flex align-items-stretch justify-content-center"
        >
          <b-col
            v-for="(result, index) in results"
            :key="`result-${index}`"
            sm="12"
            md="12"
            class="mb-4"
          >
            <OffertComponent :result="result"></OffertComponent>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      show: true,
      showLoan: false,
      results: [],
    }
  },
  computed: {
    message() {
      const quantity = this.results.length
      const message =
        quantity > 1
          ? `Hemos encontrado ${quantity} ofertas personalizada para ti.`
          : `Hemos encontrado ${quantity} oferta personalizada para ti.`
      return message
    },
  },
  async fetch() {
    const { data } = await this.$axios.get('https://admin.japiapp.com.mx/api/loands')
    this.results = data
  }
}
</script>
