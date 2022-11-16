<template>
  <section class="h80 bg-smoke">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="8" lg="4" class="py-5">
          <Card align="center">
            <img
              width="140"
              class="my-3"
              src="../../assets/img/logoamarillo.png"
              alt="Japi"
            />
            <hr />
            <h2 class="h5 text-blue">
              Deja de pagar renta y compra una casa propia. ¡Por un México con
              más dueños!
            </h2>
            <hr />
            <b-button
              target="_blank"
              href="https://afiliacion.net/?a=1988733&c=14986&s1=SN-SuperNova_MX-BD"
              class="mt-3 px-5"
              variant="warning"
              size="lg"
              pill
              >Comenzar aquí</b-button
            >
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
