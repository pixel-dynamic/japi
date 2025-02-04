<template>
  <div>
    <section class="bg-gradient space-one">
      <b-container>
        <b-row>
          <b-col></b-col>
        </b-row>
      </b-container>
    </section>
    <section class="space-two bg-smoke py-5">
      <b-container class="mb-5 container-step">
        <b-row class="justify-content-center">
          <b-col sm="10" md="6" class="text-white text-center">
            <label class="d-sm-block d-none text-white w-100"
              >Paso 3 de 4</label
            >
            <div class="bg-purple-header w-100 p-3 text-white mt-3 mt-sm-0">
              <p class="mb-0 small">
                Recuerda que sin importar tus respuestas, encontraremos una
                oferta personalizada para ti. Por favor, responde honestamente.
              </p>
            </div>
            <b-card class="text-left text-body shadow-lg results-card mb-3">
              <h1 class="title mb-3 text-center text-primary">
                ¿Cuál es tu status laboral?
              </h1>
              <b-row>
                <b-col>
                  <div class="d-flex flex-wrap justify-content-around">
                    <input
                      id="1"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Desempleado"
                      checked="checked"
                    />
                    <label class="button-label" for="1">
                      <h1>Desempleado</h1>
                    </label>
                    <input
                      id="2"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Empleado"
                    />
                    <label class="button-label" for="2">
                      <h1>Empleado</h1>
                    </label>
                    <input
                      id="3"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Estudiante"
                    />
                    <label class="button-label" for="3">
                      <h1>Estudiante</h1>
                    </label>
                    <input
                      id="4"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Independiente"
                    />
                    <label class="button-label" for="4">
                      <h1>Independiente</h1>
                    </label>
                    <input
                      id="5"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Tengo una empresa"
                    />
                    <label class="button-label" for="5">
                      <h1>Tengo una empresa</h1>
                    </label>
                  </div>
                </b-col>
              </b-row>

              <b-row class="justify-content-center">
                <b-col cols="auto" class="mt-5 mb-3">
                  <b-button class="px-4" variant="warning" @click="saveStatus"
                    >Siguiente</b-button
                  >
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      selected: null,
    }
  },
  computed: {
    getStatus() {
      return this.$store.state.newLoan.work_status
    },
  },
  created() {
    this.selected = this.getStatus ? this.getStatus : null
  },
  methods: {
    saveStatus() {
      if (this.selected !== null) {
        this.$store.commit('setStatus', this.selected)
        this.$router.push('/prestamos/path/step-four')
      } else {
        alert('por favor slecciona una opcion')
      }
    },
  },
}
</script>
