<template>
  <b-overlay :show="show" blur="5px">
    <template #overlay>
      <div class="text-center">
        <h3 class="mb-4">Recibiendo ofertas...</h3>
        <b-icon icon="filter-circle" font-scale="3" animation="throb"></b-icon>
        <p class="font-weight-bold mt-3">Espera un momento...</p>
      </div>
    </template>
    <section class="d-flex align-items-center h100 bg-results py-5 py-md-5">
      <b-container v-if="!show">
        <b-row class="justify-content-center">
          <b-col sm="10" md="6" class="text-white text-center">
            <h1 class="title mt-md-0">¡Felicidades!</h1>
            <p>
              ¡Tienes los requisitos para solicitar cualquiera de estas ofertas!
            </p>
            <p class="small font-weight-bold border p-3 rounded-pill">
              Te recomendamos aplicar en todas estas opciones para incrementar
              tus posibilidades de aprobación
            </p>
          </b-col>
        </b-row>
        <b-row
          class="text-body d-flex align-items-stretch justify-content-center"
        >
          <b-col sm="5" md="4" class="mb-4">
            <b-card no-body>
              <b-row class="d-flex align-items-center my-3">
                <b-col class="text-center">
                  <img
                    class="w-75 my-2"
                    src="../../assets/img/wadana.png"
                    alt="Wadana"
                  />
                </b-col>
                <b-col cols="5" class="pr-4">
                  <b-button
                    variant="warning"
                    block
                    pill
                    @click="fireFacebook('wadana')"
                    >Solicitar</b-button
                  >
                </b-col>
              </b-row>
              <b-row class="d-flex align-items-center">
                <b-col>
                  <ul class="small pl-5 pr-3">
                    <li class="font-weight-bold">
                      Hasta <span class="text-success">$1.000.000</span>
                    </li>
                    <li class="font-weight-bold">
                      Plazo a pagar: hasta 30 días
                    </li>
                    <li class="font-weight-bold">Entrega: Inmediata</li>
                    <li class="font-weight-bold">Sin pagos por anticipo</li>
                    <li class="font-weight-bold">Sin tarifas ocultas</li>
                    <li class="font-weight-bold">
                      50% de descuento en intereses en tu primer préstamo
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col sm="5" md="4" class="mb-4">
            <b-card no-body>
              <b-row class="d-flex align-items-center">
                <b-col class="text-center">
                  <img
                    class="w-75 mb-4 mt-5"
                    src="../../assets/img/rapi-credit.png"
                    alt="Rapi Credit"
                  />
                </b-col>
                <b-col cols="5" class="pr-4">
                  <b-button
                    variant="warning"
                    block
                    pill
                    @click="fireFacebook('rapi')"
                    >Solicitar</b-button
                  >
                </b-col>
              </b-row>
              <b-row class="d-flex align-items-center">
                <b-col cols="12" class="pr-0">
                  <ul class="small pl-5">
                    <li class="font-weight-bold">
                      Hasta <span class="text-success">$750.000</span>
                    </li>
                    <li class="font-weight-bold">
                      Plazo a pagar: Hasta 150 días
                    </li>
                    <li class="font-weight-bold">Entrega: Menos de 24 horas</li>
                    <li class="font-weight-bold">
                      Solicitud y aprobación en minutos
                    </li>
                    <li class="font-weight-bold">Sin papeles ni traslados</li>
                  </ul>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </b-overlay>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      show: true,
      showLoan: false,
    }
  },
  created() {
    setTimeout(() => {
      this.show = false
    }, 500)
  },
  methods: {
    fireFacebook(client) {
      this.$fb.track('Lead')
      switch (client) {
        case 'wadana':
          window.open(
            'https://track.affi99.com/click?pid=66&offer_id=99',
            '_self'
          )
          break
        case 'rapi':
          window.open(
            'https://track.affi99.com/click?pid=66&offer_id=18',
            '_self'
          )
          break
        default:
          this.$router.replace('/oferta-colombia')
      }
    },
  },
}
</script>
