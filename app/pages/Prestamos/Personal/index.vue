<template>
  <section class="d-flex align-items-center h100 bg-gradient">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="6" class="text-white">
          <div class="text-center w-100 mt-5 pt-5">
            <label class="text-white">Paso 5 de 5</label>
            <h1 class="title mb-5">¡Último paso!</h1>
          </div>
          <b-row>
            <b-col>
              <FormPersonal @update="sendUser" />
            </b-col>
          </b-row>
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
    getLoan() {
      return this.$store.state.loans.loan
    },
    getScore() {
      return this.$store.state.loans.score
    },
    getJob() {
      return this.$store.state.loans.job
    },
    getSalary() {
      return this.$store.state.loans.salary
    },
    getUserLoan() {
      return this.$store.state.loans.user
    },
  },
  methods: {
    sendUser(client) {
      this.$store.commit('setUser', client)

      // console.log('user', client)
      const params = {
        loan: this.getLoan,
        score: this.getScore,
        work_status: this.getJob,
        income: this.getSalary,
        user: client,
      }

      this.$axios
        .post('https://api.prestamagico.com/api/loans/', params)
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
