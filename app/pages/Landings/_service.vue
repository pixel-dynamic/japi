<template>
  <section class="h100 d-flex align-items-center">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="12" md="7" class="text-center">
          <h1 class="h2">Prestamagico</h1>
          <p>En un momento te llevaremos a tu mejor opción...</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      links: {
        lendon:
          'https://www.lendon.mx/?utm_source=pixeldynamic&utm_medium=affiliateCPS&utm_campaign=2021',
        kueski:
          'https://kueski.com/prestamos-personales?utm_source=rdbcxx&utm_medium=p_sms&utm_campaign=comparador&utm_term=ppg&utm_content=nh',
        titan: 'https://track.affi99.com/click?pid=66&offer_id=49',
        creditron: 'https://affise.creditron.org/click?pid=1202&offer_id=338',
        kueski2:
          'https://kueski.com/prestamos-personales?utm_source=rdbcxx&utm_medium=p_sms&utm_campaign=omega&utm_term=ppg&utm_content=nh',
      },
    }
  },
  mounted() {
    this.redirect()
  },
  methods: {
    redirect() {
      setTimeout(() => {
        window.location.href = this.links[this.$route.params.service]
      }, 100)
    },
  },
}
</script>
