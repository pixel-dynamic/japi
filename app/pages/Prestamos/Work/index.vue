<template>
  <section class="d-flex align-items-center h100 bg-gradient pt-5">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="10" class="text-white text-center">
          <label class="text-white mt-5">Paso 3 de 4</label>
          <h1 class="title mb-5">
            ¿Cuánto tiempo tienes en tu trabajo actual?
          </h1>
          <b-row>
            <b-col>
              <div class="button-wrap">
                <input
                  id="Notengo"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="No tengo trabajo"
                />
                <label class="button-label" for="Notengo">
                  <h1>No tengo trabajo</h1>
                </label>
                <input
                  id="3"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="3 meses"
                />
                <label class="button-label" for="3">
                  <h1>3 meses</h1>
                </label>
                <input
                  id="6"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="6 meses"
                />
                <label class="button-label" for="6">
                  <h1>6 meses</h1>
                </label>
                <input
                  id="9"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="9 meses"
                />
                <label class="button-label" for="9">
                  <h1>9 meses</h1>
                </label>
                <input
                  id="year"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="1 año"
                />
                <label class="button-label" for="year">
                  <h1>1 año</h1>
                </label>
                <input
                  id="2"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="2 años"
                />
                <label class="button-label" for="2">
                  <h1>2 años</h1>
                </label>
                <input
                  id="more"
                  v-model="selected"
                  class="hidden radio-label"
                  type="radio"
                  name="accept-offers"
                  value="Más de 2 años"
                />
                <label class="button-label" for="more">
                  <h1>+ de 2 años</h1>
                </label>
              </div>
            </b-col>
          </b-row>
          <b-row class="justify-content-center">
            <b-col cols="auto" class="my-5">
              <b-button class="px-4" variant="warning" @click="saveWork"
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
    getJob() {
      return this.$store.state.loans.job
    },
  },
  created() {
    this.selected = this.getJob ? this.getJob : null
  },
  methods: {
    saveWork() {
      if (this.selected !== null) {
        this.$store.commit('setJob', this.selected)
        this.$router.push('/prestamos/income')
      } else {
        alert('por favor slecciona una opcion')
      }
    },
  },
}
</script>
