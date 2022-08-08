<template>
  <section class="d-flex align-items-start h100 bg-gradient pt-5">
    <b-container class="pt-3">
      <b-row class="justify-content-center">
        <b-col sm="10" md="6" class="text-white">
          <div class="d-sm-block d-none text-center w-100">
            <label class="text-white">Paso 1 de 4</label>
          </div>
          <b-card class="text-left text-body border results-card">
            <b-row>
              <b-col>
                <h1 class="title text-primary text-center mb-5">
                  Datos de contacto
                </h1>
                <FormPath @update="sendUser" />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
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

      // console.log('user', client)
      // const params = {
      //   loan: this.getLoan,
      //   score: this.getScore,
      //   work_status: this.getJob,
      //   income: this.getSalary,
      //   user: client,
      // }

      this.$router.push('/prestamos/path/step-two')

      // this.$axios
      //   .post('https://api.prestamagico.com/api/loans/', params)
      //   .then((response) => {
      //     console.log(response.data.message)
      //     this.$router.push('/prestamos/results')
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //     this.$router.push('/prestamos/results')
      //   })
    },
  },
}
</script>
