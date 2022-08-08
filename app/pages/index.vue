<template>
  <div>
    <section class="d-flex align-items-center h100 bg-index relative">
      <div id="overlay"></div>
      <Background />
      <b-container class="z3">
        <b-row class="justify-content-center">
          <b-col sm="10" md="8" class="text-white text-center">
            <h1 class="title mt-5 mb-3">
              ¿Estás listo para recibir tu oferta - new?
            </h1>
            <p>
              Da clic en el botón y responde el formulario. <br />
              <span class="font-weight-bold"
                >Te mostraremos la mejor oferta para ti.
              </span>
            </p>
            <b-row class="justify-content-center">
              <b-col cols="12" sm="6">
                <CardIndex
                  icon="img/icon.png"
                  title="Préstamos"
                  url="/prestamos/path/step-one"
                />
              </b-col>
              <!-- <b-col cols="12" sm="6">
                <CardIndex
                  icon="img/icon.png"
                  title="Reunificar deudas"
                  url="/deudas/bank"
                />
              </b-col> -->
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- <SectionHome /> -->
    <!-- <SectionSelection />
    <SectionMvp />
    <SectionInfo /> -->
    <SectionCredits />
    <SectionFaq />
    <!-- <SectionTestimonials /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    }
  },
}
</script>

<style></style>
