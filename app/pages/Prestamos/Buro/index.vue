<template>
  <section class="d-flex align-items-center h100 bg-gradient pt-5">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="10" class="text-white text-center">
          <label class="text-white mt-5">Paso 2 de 5</label>
          <h1 class="title mb-5">
            ¿Cómo es tu calificación de Buro de Crédito?
          </h1>
          <b-row>
            <b-col>
              <div class="button-wrap">
                <input
                  id="Baja"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="Baja"
                  checked="checked"
                />
                <label class="button-label" for="Baja">
                  <h1>Baja <small>(400 - 550 pts)</small></h1>
                </label>
                <input
                  id="Regular"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="Regular"
                />
                <label class="button-label" for="Regular">
                  <h1>Regular <small>(551 - 650 pts)</small></h1>
                </label>
                <input
                  id="Buena"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="Buena"
                />
                <label class="button-label" for="Buena">
                  <h1>Buena <small>(651 - 700 pts)</small></h1>
                </label>
                <input
                  id="Excelente"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="Excelente"
                />
                <label class="button-label" for="Excelente">
                  <h1>Excelente <small>(701 - 850 pts)</small></h1>
                </label>
                <input
                  id="Nose"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="No sé"
                />
                <label class="button-label" for="Nose">
                  <h1>No sé</h1>
                </label>
              </div>
            </b-col>
          </b-row>
          <b-row class="justify-content-center">
            <b-col cols="auto" class="my-5">
              <b-button class="px-4" variant="warning" @click="saveScore"
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
      selected: null,
    }
  },
  computed: {
    getScore() {
      return this.$store.state.loans.score
    },
  },
  created() {
    this.selected = this.getScore ? this.getScore : null
  },
  methods: {
    saveScore() {
      if (this.selected !== null) {
        this.$store.commit('setScore', this.selected)
        this.$router.push('/prestamos/work')
      } else {
        alert('por favor slecciona una opcion')
      }
    },
  },
}
</script>
