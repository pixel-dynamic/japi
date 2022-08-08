<template>
  <section class="d-flex align-items-center h100 bg-gradient">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="6" class="text-white">
          <div class="text-center w-100 mt-5 pt-5">
            <label class="text-white">Paso 4 de 4</label>
          </div>
          <b-card class="text-left text-body border results-card">
            <h1 class="title text-primary text-center mb-5">¡Último paso!</h1>
            <b-row>
              <b-col>
                <FormPersonal @update="sendUser" />
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
    getEntity() {
      return this.$store.state.debt.bank
    },
    getDebt() {
      return this.$store.state.debt.moneyLess
    },
    getDelay() {
      return this.$store.state.debt.timeLess
    },
    getWork() {
      return this.$store.state.debt.work
    },
    getIncome() {
      return this.$store.state.debt.profit
    },
    getUser() {
      return this.$store.state.debt.user
    },
  },
  created() {
    if (Object.keys(this.getUser).length > 0) {
      this.$store.commit('setBank', [])
      this.$store.commit('setMoneyLess', '')
      this.$store.commit('setTimeLess', '')
      this.$store.commit('setWork', '')
      this.$store.commit('setProfit', '')
      this.$store.commit('setUser', {})
      this.$router.push('/')
    }
  },
  methods: {
    sendUser(client) {
      this.$store.commit('setUser', client)

      const params = {
        banks: this.getEntity,
        debt: this.getDebt,
        debt_status: this.getDelay,
        work_status: this.getWork,
        monthly_income: this.getIncome,
        user: client,
      }

      this.$axios
        .post('https://api.prestamagico.com/api/debts/', params)
        .then((response) => {
          console.log(response.data.message)
          // this.$router.push('/deudas/results')
        })
        .catch((error) => {
          alert(error)
        })

      if (this.getDebt > 35000) {
        this.$router.replace('/deudas/results/thanks')
      } else {
        this.$router.replace('/deudas/results')
      }
    },
  },
}
</script>
