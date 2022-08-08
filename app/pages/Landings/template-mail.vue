<template>
  <section class="h100 d-flex align-items-center">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="12" md="7" class="text-center">
          <h1 class="h4 text-primary">Prestamagico</h1>
          <p>En un momento te llevaremos a tu mejor opción...</p>
          <b-skeleton animation="fade"></b-skeleton>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  mounted() {
    this.redirect()
  },
  methods: {
    redirect() {
      setTimeout(() => {
        switch (this.$route.query.campaign) {
          case 'lendon':
            window.location.href =
              'https://www.lendon.mx/?utm_source=pixeldynamic&utm_medium=affiliateCPS&utm_campaign=2021'
            break
          case 'creditron':
            window.location.href =
              'https://affise.creditron.org/click?pid=1202&offer_id=338'
            break
          case 'canton':
            window.location.href =
              'https://afiliacion.net/?a=1988640&c=14108&s1=AI_AgenciaIvan_MX-BD'
            break
          case 'titan':
            window.location.href =
              'https://creditotitan.mx/prestamos-urgentes?clickid=627598777a0431000137f564&utm_source=affiliate&utm_medium=affi99&utm_campaign=66'
            break
          case 'olx':
            window.location.href =
              'https://afiliacion.net/?a=1988640&c=13456&s1=AI_AgenciaIvan_MX-BD'
            break
          default:
            console.log('no path')
            break
        }
      }, 100)
    },
  },
}
</script>
