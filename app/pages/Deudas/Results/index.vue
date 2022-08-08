<template>
  <b-overlay :show="show" opacity="1">
    <template #overlay>
      <div class="text-center">
        <h3 class="mb-4">Recibiendo ofertas...</h3>
        <b-icon icon="filter-circle" font-scale="3" animation="throb"></b-icon>
        <p class="font-weight-bold mt-3">Espera un momento...</p>
      </div>
    </template>
    <section class="d-flex align-items-center h100 bg-gradient">
      <b-container>
        <b-row class="justify-content-center">
          <b-col sm="10" md="6" class="text-white text-center">
            <h1 class="title mt-5">¡Felicidades!</h1>
            <p>
              Nuestro sistema analizó tu información, y cumples con los
              requisitos para solicitar cualquiera de las siguientes ofertas:
            </p>
          </b-col>
        </b-row>
        <b-row v-if="!show" class="text-body justify-content-center">
          <b-col>
            <VueSlickCarousel v-bind="slickOptions">
              <b-card no-body>
                <img src="../../../assets/img/kubo.png" alt="Kubo" />
                <ul class="small">
                  <li>
                    Préstamos hasta
                    <span class="font-weight-bold text-success">$100,000</span>
                  </li>
                  <li class="font-weight-bold">A pagar hasta en 36 meses.</li>
                  <li>Pre-aprobación en 5 minutos.</li>
                  <li>Depósito de préstamo en menos de 24hrs.</li>
                </ul>
                <div class="w-100 px-3 pb-3">
                  <b-button
                    href="https://www.resuelve.info/contactanos/?utm_source=pub55&utm_medium=paid&utm_campaign=pixeldynamicrtdmx_ago20&utm_channel=sms"
                    variant="warning"
                    block
                    pill
                    >Solicitar oferta</b-button
                  >
                </div>
              </b-card>
              <b-card no-body>
                <img src="../../../assets/img/kueskicash.png" alt="Kueski" />
                <ul class="small">
                  <li>
                    Préstamos
                    <span class="font-weight-bold text-success"
                      >rápidos y seguros</span
                    >
                  </li>
                  <li class="font-weight-bold">
                    Sin depósitos ni pagos por adelantado
                  </li>
                  <li>Probabilidad de aprobación alta</li>
                  <li>Préstamos seguros, 100% en línea.</li>
                </ul>
                <div class="w-100 px-3 pb-3">
                  <b-button
                    href="https://www.resuelve.info/contactanos/?utm_source=pub55&utm_medium=paid&utm_campaign=pixeldynamicrtdmx_ago20&utm_channel=sms"
                    variant="warning"
                    block
                    pill
                    >Solicitar oferta</b-button
                  >
                </div>
              </b-card>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      slickOptions: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
  computed: {
    getMoneyLess() {
      return this.$store.state.debt.moneyLess
    },
    getTimeLess() {
      return this.$store.state.debt.timeLess
    },
  },
  created() {
    setTimeout(() => {
      this.show = false
      this.$fb.track('CompleteRegistration')
    }, 3000)
  },
}
</script>
