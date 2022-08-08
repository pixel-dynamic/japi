<template>
  <div>
    <b-navbar id="navbar-academic" variant="faded" type="light" class="w-100">
      <b-container class="w-100">
        <b-navbar-brand to="/uin/" class="d-flex align-items-center mx-auto">
          <img
            width="220"
            src="../../../assets/img/logo-uin.png"
            class="d-inline-block align-top"
            alt="Universidad Insurgentes"
          />
        </b-navbar-brand>
      </b-container>
    </b-navbar>
    <section class="h100 d-flex align-items-center bg-intro-uin py-3 py-sm-5">
      <b-container>
        <b-row class="justify-content-center">
          <b-col sm="6" class="text-white text-center">
            <h1 class="h3">¡Gracias por registrarte!</h1>
            <p>
              En breve nos pondremos en contacto contigo para brindarte más
              información.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'uin',
  head() {
    return {
      title: 'Universidad Insurgentes',
      'Timing-Allow-Origin': '*',
      meta: [
        {
          name: 'description',
          content:
            '¡Que nada te detenga! Estudia a tu ritmo | Horarios Flexibles | Becas para toda tu carrera. UIN | Educación Respaldada por la SEP y por más de 25 años de experiencia académica. 25 Planteles. UIN Más Cerca de Ti. Tipos: Turno sabatino, Turnos sábado y domingo.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Universidad Insurgentes',
        },
        { hid: 'og:image', name: 'og:image', content: '/uin.jpeg' },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            '¡Que nada te detenga! Estudia a tu ritmo | Horarios Flexibles | Becas para toda tu carrera. UIN | Educación Respaldada por la SEP y por más de 25 años de experiencia académica. 25 Planteles. UIN Más Cerca de Ti. Tipos: Turno sabatino, Turnos sábado y domingo.',
        },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Academic' },
      ],
    }
  },
  created() {
    this.$fb.track('CompleteRegistration')
  },
}
</script>
