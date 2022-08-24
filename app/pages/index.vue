<template>
  <div>
    <section class="d-flex align-items-center h100 bg-gradient relative">
      <div id="overlay"></div>
      <Background />
      <b-container class="z3">
        <b-row class="justify-content-center">
          <b-col sm="10" md="8" class="text-white text-center">
            <h1 class="title mt-5 mb-3">
              ¿Estás listo para recibir tu oferta?
            </h1>
            <b-row class="justify-content-center">
              <b-col cols="12" sm="6">
                <div class="card-intro p-3 text-body">
                  <img
                    width="140"
                    class="my-3"
                    src="../assets/img/logoamarillo.png"
                    alt="Japi"
                  />
                  <p class="small">
                    Da clic en el botón y responde el formulario. Te mostraremos
                    la mejor oferta para ti.
                  </p>
                  <p>
                    <b-button
                      to="/prestamos/path/step-one"
                      variant="warning"
                      size="sm"
                      pill
                      class="px-4 py-2"
                      >Quiero mi oferta personalizada</b-button
                    >
                  </p>
                </div>
                <!-- <CardIndex
                  icon="img/icon.png"
                  title="Préstamos"
                  url="/prestamos/path/step-one"
                /> -->
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

<style>
.card-intro {
  background: #fff;
  border-radius: 10px;
  width: 100%;
}
</style>
