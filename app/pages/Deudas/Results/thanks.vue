<template>
  <b-overlay :show="show" opacity="1">
    <template #overlay>
      <div class="text-center">
        <h3 class="mb-4">Recibiendo ofertas...</h3>
        <b-icon icon="filter-circle" font-scale="3" animation="throb"></b-icon>
        <p class="font-weight-bold mt-3">Espera un momento...</p>
      </div>
    </template>
    <section class="d-flex align-items-center h100 bg-gradient">
      <b-container>
        <b-row class="justify-content-center">
          <b-col sm="10" md="6" class="text-white text-center">
            <h1 class="title mt-5">¡Gracias!</h1>
            <p>
              Pronto nos comunicaremos contigo para recibir una asesoría
              personalizada.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      debts: [],
      data: {},
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
    getUser() {
      return this.$store.state.debt.user
    },
  },
  created() {
    if (this.getEntity.length > 0) {
      this.debts = this.getEntity.map((item) => {
        return {
          borrower_institute: item,
          debt_amount: this.getDebt,
          months_behind: this.getDelay,
        }
      })
    }

    this.data = {
      record: {
        data: {
          system_id: '1',
          user: {
            names: this.getUser.name,
            first_surname: this.getUser.first_name,
            second_surname: this.getUser.last_name,
            email: this.getUser.email,
            phone: this.getUser.phone,
            mobile: this.getUser.phone,
            country: 'mx',
            state: this.getUser.state,
            postal_code: this.getUser.zipcode,
            contact_by: this.getUser.contactEmail ? 'Email' : 'Ninguno',
            contact_by_wa: this.getUser.whatsapp,
            terms_conditions: true,
          },
          debts: this.debts,
          mkt: {
            utm_source: 'pub55_mx',
            utm_campaign: 'pixeldynamicrtdmx',
            utm_medium: 'api',
          },
        },
      },
    }

    this.$axios
      .post('https://opportunitex.resuelve.io', this.data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    setTimeout(() => {
      this.show = false
    }, 2000)

    this.$fb.track('CompleteRegistration')
  },
}
</script>
