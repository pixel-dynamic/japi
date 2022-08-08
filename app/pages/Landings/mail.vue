<template>
  <section class="h100 bg-smoke">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="8" lg="6" class="py-5">
          <h1 class="text-center h3 text-primary mb-4">
            PRESTAMAGICO TE RECOMIENDA
          </h1>
          <Card align="center">
            <h2 class="h5 text-blue">
              La mejor opción, préstamos de hasta $2,000 pesos, fácil y rápido.
            </h2>
            <hr />
            <b-button
              target="_blank"
              href="https://kueski.com/prestamos-personales?utm_source=rdbcxx&utm_medium=p_sms&utm_campaign=alfa&utm_term=ppg&utm_content=nh"
              class="my-4 px-5"
              variant="warning"
              size="lg"
              pill
              >Solicitar</b-button
            >
            <hr />
            <a
              target="_blank"
              href="https://kueski.com/prestamos-personales?utm_source=rdbcxx&utm_medium=p_sms&utm_campaign=alfa&utm_term=ppg&utm_content=nh"
            >
              <img src="/mail/oferta.jpg" alt="kueski" />
            </a>
          </Card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Card from '../../components/Card'

export default {
  components: {
    Card,
  },
  layout: 'landing',
}
</script>
