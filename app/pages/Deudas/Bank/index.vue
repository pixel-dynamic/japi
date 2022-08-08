<template>
  <section class="d-flex align-items-center h100 bg-gradient pt-5">
    <b-container>
      <b-row class="justify-content-center">
        <b-col sm="10" md="10" class="text-white text-center">
          <label class="text-white mt-5">Paso 1 de 4</label>
          <b-card class="text-left text-body border results-card">
            <b-row>
              <b-col cols="12">
                <h1 class="title text-primary text-center mb-5">
                  ¿En donde tienes tu deuda? <br />
                  <span class="small">Elige todas las que apliquen</span>
                </h1>
              </b-col>
              <b-col
                v-for="(item, index) in options"
                :key="item"
                cols="6"
                sm="4"
                md="3"
                class="px-2 px-sm-3"
              >
                <b-form-group class="relative text-left">
                  <input
                    :id="index"
                    v-model="bank"
                    style="display: none"
                    class="inp-cbx"
                    type="checkbox"
                    :name="item"
                    :value="item"
                  />
                  <label class="cbx" :for="index"
                    ><span>
                      <svg width="12px" height="9px" viewbox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline></svg></span
                    ><span>{{ item }}</span></label
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row class="justify-content-center">
              <b-col cols="auto" class="my-5">
                <b-button
                  class="px-4"
                  variant="warning"
                  @click.prevent.stop="saveBank"
                  >Siguiente</b-button
                >
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
      bank: [],
      options: [
        'American Express',
        'Banorte',
        'BBVA',
        'Banamex',
        'Bancoppel',
        'Banco Azteca',
        'HSBC',
        'INBURSA',
        'INVEX',
        'IXE',
        'Santander',
        'Scotiabank',
        'Walmart',
        'C&A',
        'Liverpool',
        'Palacio de Hierro',
        'Sears',
        'Crédito Familiar',
        'Credomatic',
        'Crédito Automotriz',
        'Otras',
      ],
    }
  },
  computed: {
    getBank() {
      return this.$store.state.debt.bank
    },
  },
  created() {
    this.bank = this.getBank ? this.getBank : []
  },
  methods: {
    saveBank() {
      if (this.bank.length > 0) {
        this.$store.commit('setBank', this.bank)
        this.$router.push('/deudas/amount')
      } else {
        alert('selecciona una opcion')
      }
    },
  },
}
</script>
