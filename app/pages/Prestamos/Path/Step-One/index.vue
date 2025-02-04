<template>
  <div>
    <section class="bg-gradient space-one">
      <b-container>
        <b-row>
          <b-col></b-col>
        </b-row>
      </b-container>
    </section>
    <section class="space-two bg-smoke py-5">
      <b-container class="mb-5 container-step">
        <b-row class="justify-content-center">
          <b-col sm="10" md="6" class="text-white">
            <div class="d-sm-block d-none text-center w-100">
              <label class="text-white">Paso 1 de 4</label>
            </div>
            <div class="bg-purple-header w-100 p-3 text-white mt-3 mt-sm-0">
              <p class="mb-0 small">
                Recuerda que sin importar tus respuestas, encontraremos una
                oferta personalizada para ti. Por favor, responde honestamente.
              </p>
            </div>
            <b-card class="text-left text-body results-card shadow-lg">
              <h1 class="title text-center text-primary">Datos de contacto</h1>
              <b-row>
                <b-col>
                  <FormPath @update="sendUser" />
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    sendUser(client) {
      this.$store.commit('setNewUser', client)
      // this.sendElementToList()
      this.$router.push('/prestamos/path/step-two')
    },
  },
}
</script>
