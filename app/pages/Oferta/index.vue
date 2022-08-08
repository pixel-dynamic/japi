<template>
  <div>
    <!-- <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand class="mx-auto" href="#">
        <img
          width="240"
          src="../../assets/img/prestamagico.png"
          alt="Prestamagico"
        />
      </b-navbar-brand>
    </b-navbar> -->
    <section class="h60 d-flex align-items-center py-5 relative bg-gradient">
      <!-- <div id="overlay"></div> -->
      <b-container class="z3">
        <b-row class="justify-content-center">
          <b-col sm="6" md="8" class="text-center">
            <b-overlay :show="show" rounded="sm">
              <b-card class="text-left text-body border results-card">
                <h1 class="title text-primary text-center mb-5">
                  ¡Obtén de $1,000 a $18,000 hoy mismo!
                </h1>
                <p class="font-weight-bold mb-0 small">
                  ¡Responde estas preguntas y te encontraremos las ofertas con
                  la más alta probabilidad de aprobación para ti!
                </p>
                <hr class="my-3" />
                <b-form @submit.stop.prevent="onSubmit">
                  <b-row>
                    <b-col sm="6">
                      <b-form-group>
                        <label>Telefono:</label>
                        <b-form-input
                          v-model="form.phone"
                          type="tel"
                          placeholder="celular a 10 dígitos"
                          required
                          maxlength="10"
                          @keypress="isNumber($event)"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="6">
                      <b-form-group>
                        <label>Correo electrónico:</label>
                        <b-form-input
                          v-model="form.email"
                          type="email"
                          placeholder="ejemplo@mail.com"
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="6">
                      <b-form-group>
                        <label for="input2">¿Cuánto dinero necesitas?</label>
                        <div class="d-flex flex-wrap">
                          <input
                            id="Baja"
                            v-model="form.loan"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers"
                            value="$1000"
                            checked="checked"
                          />
                          <label class="button-label" for="Baja">
                            <div class="h5 mb-0">$1000</div>
                          </label>
                          <input
                            id="Regular"
                            v-model="form.loan"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers"
                            value="$2,000"
                          />
                          <label class="button-label" for="Regular">
                            <div class="h5 mb-0">$2,000</div>
                          </label>
                          <input
                            id="Buena"
                            v-model="form.loan"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers"
                            value="$3,000"
                          />
                          <label class="button-label" for="Buena">
                            <div class="h5 mb-0">$3,000</div>
                          </label>
                          <input
                            id="Excelente"
                            v-model="form.loan"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers"
                            value="$6,000"
                          />
                          <label class="button-label" for="Excelente">
                            <div class="h5 mb-0">$6,000</div>
                          </label>
                          <input
                            id="Nose"
                            v-model="form.loan"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers"
                            value="$10,000"
                          />
                          <label class="button-label" for="Nose">
                            <div class="h5 mb-0">$10,000</div>
                          </label>
                          <input
                            id="Nose2"
                            v-model="form.loan"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers"
                            value=" + $10,000"
                          />
                          <label class="button-label" for="Nose2">
                            <div class="h5 mb-0">+$10,000</div>
                          </label>
                        </div>
                      </b-form-group>
                    </b-col>
                    <b-col sm="6">
                      <b-form-group>
                        <label for="input3">¿A qué plazo deseas pagarlo?</label>
                        <div class="d-flex flex-wrap">
                          <input
                            id="plazo1"
                            v-model="form.plazo"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers2"
                            value="1 mes"
                            checked="checked"
                          />
                          <label class="button-label" for="plazo1">
                            <div class="h5 mb-0">1 mes</div>
                          </label>
                          <input
                            id="plazo2"
                            v-model="form.plazo"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers2"
                            value="$3 meses"
                          />
                          <label class="button-label" for="plazo2">
                            <div class="h5 mb-0">3 meses</div>
                          </label>
                          <input
                            id="plazo3"
                            v-model="form.plazo"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers2"
                            value="6 meses"
                          />
                          <label class="button-label" for="plazo3">
                            <div class="h5 mb-0">6 meses</div>
                          </label>
                          <input
                            id="plazo4"
                            v-model="form.plazo"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers2"
                            value="9 meses"
                          />
                          <label class="button-label" for="plazo4">
                            <div class="h5 mb-0">9 meses</div>
                          </label>
                          <input
                            id="plazo5"
                            v-model="form.plazo"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers2"
                            value="1 año"
                          />
                          <label class="button-label" for="plazo5">
                            <div class="h5 mb-0">1 año</div>
                          </label>
                          <input
                            id="plazo6"
                            v-model="form.plazo"
                            class="hidden radio-label"
                            type="radio"
                            name="accept-offers2"
                            value="2 años"
                          />
                          <label class="button-label" for="plazo6">
                            <div class="h5 mb-0">2 años</div>
                          </label>
                        </div>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row class="justify-content-center">
                    <b-col sm="5">
                      <b-form-group>
                        <b-button
                          class="mt-4"
                          variant="warning"
                          size="lg"
                          block
                          pill
                          type="submit"
                          >¡Quiero mi oferta!</b-button
                        >
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card>
            </b-overlay>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-gray py-5">
      <b-container>
        <b-row class="text-center">
          <b-col sm="12">
            <h2 class="h3 text-credigenio">Como funciona</h2>
            <p class="font-weight-bold mb-5">
              ¡Obtener tu préstamo es súper sencillo!
            </p>
          </b-col>
        </b-row>
        <b-row class="row-steps">
          <b-col class="mb-4" sm="6" md="4">
            <b-row class="d-flex align-items-center">
              <b-col class="text-center" cols="4" sm="12">
                <img
                  class="feature-img mb-3"
                  src="../../assets/img/three.png"
                  alt="Paso 1"
                />
              </b-col>
              <b-col class="px-0 px-sm-5" cols="8" sm="12">
                <h4 class="text-credigenio h5 mb-0">Paso 1</h4>
                <p>Da clic en "Solicitar".</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="mb-4" sm="6" md="4">
            <b-row class="d-flex align-items-center">
              <b-col class="text-center" cols="4" sm="12">
                <img
                  class="feature-img mb-3"
                  src="../../assets/img/one.png"
                  alt="Paso 1"
                />
              </b-col>
              <b-col class="px-0 px-sm-5" cols="8" sm="12">
                <h4 class="text-credigenio h5 mb-0">Paso 2</h4>
                <p>
                  Te enviaremos con la mejor oferta con alta probalidad de
                  aprobación.
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="mb-4" sm="6" md="4">
            <b-row class="d-flex align-items-center">
              <b-col class="text-center" cols="4" sm="12">
                <img
                  class="feature-img mb-3"
                  src="../../assets/img/two.png"
                  alt="Paso 1"
                />
              </b-col>
              <b-col class="px-0 px-sm-5" cols="8" sm="12">
                <h4 class="text-credigenio h5 mb-0">Paso 3</h4>
                <p>
                  Responde el formulario, no te tomará más de 2 minutos y
                  <span class="text-credigenio font-weight-bold"
                    >¡obtén tu préstamo!</span
                  ><br />
                  Te recomendamos tener a la mano tu
                  <span class="font-weight-bold">CURP</span>. La puedes
                  encontrar en tu identificación oficial (INE/IFE)
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-pattern h80 py-5">
      <b-container>
        <b-row class="text-center">
          <b-col sm="12">
            <h2 class="h3 text-credigenio">Beneficios</h2>
            <p class="font-weight-bold mb-5">
              ¡Estos son los beneficios de usar credigenio!
            </p>
          </b-col>
        </b-row>
        <b-row class="row-steps">
          <b-col class="mb-4" sm="6" md="4">
            <b-row class="d-flex align-items-center">
              <b-col class="text-center" cols="4" sm="12">
                <img
                  class="feature-img mb-3"
                  src="../../assets/img/one.png"
                  alt="Paso 1"
                />
              </b-col>
              <b-col class="px-0 px-sm-5" cols="8" sm="12">
                <h4 class="text-credigenio h5 mb-0">
                  Aplicación 100% en línea
                </h4>
                <p>
                  Ya no tienes que hacer filas y esperar horas en instituciones
                  bancarias para obtener un préstamo
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="mb-4" sm="6" md="4">
            <b-row class="d-flex align-items-center">
              <b-col class="text-center" cols="4" sm="12">
                <img
                  class="feature-img mb-3"
                  src="../../assets/img/one.png"
                  alt="Paso 1"
                />
              </b-col>
              <b-col class="px-0 px-sm-5" cols="8" sm="12">
                <h4 class="text-credigenio h5 mb-0">
                  Totalmente claros y transparentes
                </h4>
                <p>
                  Te mostramos la mejor oferta para ti de manera clara sin
                  avales ni depósitos.
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col class="mb-4" sm="6" md="4">
            <b-row class="d-flex align-items-center">
              <b-col class="text-center" cols="4" sm="12">
                <img
                  class="feature-img mb-3"
                  src="../../assets/img/one.png"
                  alt="Paso 1"
                />
              </b-col>
              <b-col class="px-0 px-sm-5" cols="8" sm="12">
                <h4 class="text-credigenio h5 mb-0">Hecho a la medida</h4>
                <p>
                  Te vincularemos con el mejor prestamista para ti dándote un
                  rango alto de aprobación del préstamo.
                </p>
              </b-col>
            </b-row>
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
      show: false,
      form: {
        phone: '',
        mail: '',
        loan: null,
        plazo: null,
      },
    }
  },
  head() {
    return {
      title: 'Prestamagico - Oferta',
      'Timing-Allow-Origin': '*',
      meta: [
        {
          name: 'description',
          content: '¡Obtén desde $1,000 a $18,000 de manera inmediata!',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Prestamagico - Oferta',
        },
        { hid: 'og:image', name: 'og:image', content: '/prestamagico.png' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '¡Obtén desde $1,000 a $18,000 de manera inmediata!',
        },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Prestamagico' },
      ],
    }
  },
  methods: {
    onSubmit() {
      if (this.form.phone.length < 10) {
        this.$swal(
          'Aviso',
          'Por favor coloca un teléfono válido a 10 dígitos',
          'warning'
        )
      } else {
        this.show = true
        const params = {
          loan: '$2,000',
          score: 'Bueno',
          work_status: 'Empleado',
          income: '$2,000',
          user: this.form,
        }

        setTimeout(() => {
          this.$axios
            .post('https://api.prestamagico.com/api/loans/', params)
            .then((response) => {
              console.log('response', response)
              this.show = false
              this.$fb.track('CompleteRegistration')
              this.$router.push('/oferta/results')
            })
            .catch((error) => {
              // this.$swal(
              //   'Aviso',
              //   error.response.data.errors.user[0] +
              //     '. Por favor ingresa un valor nuevo.',
              //   'warning'
              // )
              console.log(error)
              this.show = false
              this.$router.push('/oferta/results')
            })
        }, 300)
      }
    },
    isNumber(evt) {
      evt = evt || window.event
      const charCode = evt.which ? evt.which : evt.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault()
      } else {
        return true
      }
    },
  },
}
</script>
<style scoped>
.feature-img {
  max-width: 80%;
}

.row-steps {
  text-align: left;
}

@media (min-width: 992px) {
  .feature-img {
    max-width: 40%;
  }
  .row-steps {
    text-align: center;
  }
}
</style>
