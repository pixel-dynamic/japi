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
              >Paso 2 de 4</label
            >
            <div class="bg-purple-header w-100 p-3 text-white mt-5 mt-sm-0">
              <p class="mb-0 small">
                Recuerda que sin importar tus respuestas, encontraremos una
                oferta personalizada para ti. Por favor, responde honestamente.
              </p>
            </div>
            <b-card class="text-left text-body shadow-lg results-card mb-3">
              <b-row class="mb-3">
                <b-col>
                  <h1 class="title mb-3 text-center text-primary">
                    ¿Cuál es tu ingreso mensual?
                  </h1>
                  <div class="d-flex flex-wrap">
                    <input
                      id="1"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="- $7,000"
                      checked="checked"
                    />
                    <label class="button-label" for="1">
                      <h1>
                        Menos <br />
                        de $7,000
                      </h1>
                    </label>
                    <input
                      id="2"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Entre $7,000 y $15,000"
                    />
                    <label class="button-label" for="2">
                      <h1>
                        Entre <br />
                        $7,000 y $15,000
                      </h1>
                    </label>
                    <input
                      id="3"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Entre $15,000 y $25,000"
                    />
                    <label class="button-label" for="3">
                      <h1>Entre <br />$15,000 y $25,000</h1>
                    </label>
                    <input
                      id="4"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Entre $25,000 y $40,000"
                    />
                    <label class="button-label" for="4">
                      <h1>Entre <br />$25,000 y $40,000</h1>
                    </label>
                    <input
                      id="5"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Entre $40,000 y $100,000"
                    />
                    <label class="button-label" for="5">
                      <h1>Entre <br />$40,000 y $100,000</h1>
                    </label>
                    <input
                      id="6"
                      v-model="selected"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-offers"
                      value="Más de $100,000"
                    />
                    <label class="button-label" for="6">
                      <h1>
                        Más de <br />
                        $100,000
                      </h1>
                    </label>
                  </div>
                </b-col>
              </b-row>

              <h1 class="title mb-3 text-center text-primary">
                ¿Puedes comprobar ingresos?
              </h1>
              <b-row>
                <b-col>
                  <div class="d-flex flex-wrap">
                    <input
                      id="10"
                      v-model="income"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-income"
                      value="- $7,000"
                      checked="checked"
                    />
                    <label class="button-label" for="10">
                      <h1>Sí</h1>
                    </label>
                    <input
                      id="20"
                      v-model="income"
                      class="hidden radio-label"
                      type="radio"
                      name="accept-income"
                      value="Entre $7,000 y $15,000"
                    />
                    <label class="button-label" for="20">
                      <h1>No</h1>
                    </label>
                  </div>
                </b-col>
              </b-row>
              <b-row class="justify-content-center">
                <b-col cols="auto" class="mt-5 mb-3">
                  <b-button class="px-4" variant="warning" @click="saveMonth"
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

<style lang="scss">

</style>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      isLoading: false,
      selected: null,
      income: null,
    }
  },
  computed: {
    getMonth() {
      return this.$store.state.newLoan.score
    },
    getIncome() {
      return this.$store.state.newLoan.loan
    },
  },
  created() {
    this.selected = this.getMonth ? this.getMonth : null
    this.income = this.getIncome ? this.getIncome : null
  },
  mounted() {
    this.$swal({
      title: "Información",
      text: "Para completar el proceso de suscripción acabamos de enviarle un mensaje a su dirección de correo electrónico.",
      icon: "info",
      position: "top-end",
      background: "#b8ef98",
      showConfirmButton: false,
      timer: 2000
    });
  },
  methods: {
    saveMonth() {
      if (this.selected !== null && this.income !== null) {
        this.$store.commit('setMonth', this.selected)
        this.$store.commit('setIncome', this.income)
        this.$router.push('/prestamos/path/step-three')
      } else {
        alert('por favor slecciona una opcion')
      }
    },
  },
}
</script>
