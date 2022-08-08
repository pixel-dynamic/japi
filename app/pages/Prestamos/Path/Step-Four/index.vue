<template>
  <section class="d-flex align-items-start h100 bg-gradient pt-5">
    <b-container class="pt-3">
      <b-row class="justify-content-center">
        <b-col sm="10" md="6" class="text-white">
          <div class="d-sm-block d-none text-center w-100">
            <label class="text-white">Paso 4 de 4</label>
          </div>
          <b-card class="text-left text-body border results-card">
            <h1 class="title mb-5 text-center text-primary">
              Datos demograficos
            </h1>
            <b-row>
              <b-col>
                <FormPath :born="true" @update="sendUser" />
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
  computed: {
    getUser() {
      return this.$store.state.newLoan
    },
  },
  methods: {
    sendUser(client) {
      console.log('user', client)
      this.$store.commit('setDate', client.date)
      this.$store.commit('setState', client.state)

      // console.log('user', client)
      // const params = {
      //   loan: this.getLoan,
      //   score: this.getScore,
      //   work_status: this.getJob,
      //   income: this.getSalary,
      //   user: client,
      // }

      // this.$router.push('/prestamos/results')

      this.$axios
        .post('https://api.prestamagico.com/api/loans/', this.getUser)
        .then((response) => {
          console.log(response.data.message)
          this.$router.push('/prestamos/results')
        })
        .catch((error) => {
          console.log(error)
          this.$router.push('/prestamos/results')
        })
    },
  },
}
</script>
