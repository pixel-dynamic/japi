<template>
  <section class="d-flex align-items-center h100 bg-gradient pt-5">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="10" class="text-white text-center">
          <label class="text-white mt-5">Paso 3 de 4</label>
          <b-card class="text-left text-body border results-card">
            <b-row>
              <b-col>
                <h1 class="title text-primary text-center mb-5">
                  ¿Cuánto tiempo tienes de atraso en tu pago?
                </h1>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div class="d-flex flex-wrap">
                  <input
                    id="no-tengo"
                    v-model="selected"
                    class="hidden radio-label"
                    type="radio"
                    name="accept-offers"
                    value="0"
                  />
                  <label class="button-label" for="no-tengo">
                    <h1>No tengo atrasos</h1>
                  </label>
                  <input
                    id="1"
                    v-model="selected"
                    class="hidden radio-label"
                    type="radio"
                    name="accept-offers"
                    value="1"
                  />
                  <label class="button-label" for="1">
                    <h1>1 mes</h1>
                  </label>
                  <input
                    id="2"
                    v-model="selected"
                    class="hidden radio-label"
                    type="radio"
                    name="accept-offers"
                    value="2"
                  />
                  <label class="button-label" for="2">
                    <h1>2 meses</h1>
                  </label>
                  <input
                    id="3"
                    v-model="selected"
                    class="hidden radio-label"
                    type="radio"
                    name="accept-offers"
                    value="3"
                  />
                  <label class="button-label" for="3">
                    <h1>3 meses</h1>
                  </label>
                  <input
                    id="4"
                    v-model="selected"
                    class="hidden radio-label"
                    type="radio"
                    name="accept-offers"
                    value="4"
                  />
                  <label class="button-label" for="4">
                    <h1>4 meses</h1>
                  </label>
                  <input
                    id="5"
                    v-model="selected"
                    class="hidden radio-label"
                    type="radio"
                    name="accept-offers"
                    value="5"
                  />
                  <label class="button-label" for="5">
                    <h1>5 meses</h1>
                  </label>
                  <input
                    id="6"
                    v-model="selected"
                    class="hidden radio-label"
                    type="radio"
                    name="accept-offers"
                    value="6"
                  />
                  <label class="button-label" for="6">
                    <h1>6 meses</h1>
                  </label>
                  <input
                    id="more"
                    v-model="selected"
                    class="hidden radio-label"
                    type="radio"
                    name="accept-offers"
                    value="> 6"
                  />
                  <label class="button-label" for="more">
                    <h1>Más de 6 meses</h1>
                  </label>
                </div>
              </b-col>
            </b-row>
            <b-row class="justify-content-center">
              <b-col cols="auto" class="my-5">
                <b-button
                  class="px-4"
                  variant="warning"
                  @click.prevent.stop="saveTimeLess"
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
      selected: null,
    }
  },
  computed: {
    getTimeLess() {
      return this.$store.state.debt.timeLess
    },
  },
  created() {
    this.selected = this.getTimeLess ? this.getTimeLess : null
  },
  methods: {
    saveTimeLess() {
      if (this.selected !== null) {
        this.$store.commit('setTimeLess', this.selected)
        this.$router.push('/deudas/personal')
      } else {
        alert('por favor slecciona una opcion')
      }
    },
  },
}
</script>
