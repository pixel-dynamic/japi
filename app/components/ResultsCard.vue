<template>
  <!-- eslint-disable vue/no-v-html -->
  <b-card class="results-card border mb-1 mb-md-5">
    <b-row class="flex-sm-row">
      <b-col cols="5" md="3" class="mb-4 mb-md-0">
        <img :src="info.img.src" :alt="info.img.alt" class="my-2 mb-3" />
        <div>
          <b-button
            class="button-green"
            size="lg"
            block
            @click="fireFacebook(info.action)"
          >
            Solicitar
          </b-button>
        </div>
      </b-col>
      <b-col cols="7">
        <b-row>
          <b-col
            v-if="info.amounts && info.amounts.length"
            sm="12"
            :md="colSize"
            class="mb-1 mb-md-0"
          >
            <p class="h6 results-title text-black-50 mb-2">Monto:</p>
            <ul class="list-unstyled">
              <li
                v-for="(item, itemIndex) in info.amounts"
                :key="`item-${itemIndex}`"
                v-html="item"
              />
            </ul>
          </b-col>
          <b-col
            v-if="info.deliveryTerms && info.deliveryTerms.length"
            sm="12"
            :md="colSize"
            class="mb-1 mb-md-0"
          >
            <p class="h6 results-title text-black-50 mb-2">Entrega:</p>
            <ul class="list-unstyled">
              <li
                v-for="(item, itemIndex) in info.deliveryTerms"
                :key="`item-${itemIndex}`"
                v-html="item"
              />
            </ul>
          </b-col>
          <b-col
            v-if="info.paymentDeadlines && info.paymentDeadlines.length"
            sm="12"
            :md="colSize"
            class="mb-1 mb-md-0"
          >
            <p class="h6 results-title text-black-50 mb-2">Plazo a pagar:</p>
            <ul class="list-unstyled">
              <li
                v-for="(item, itemIndex) in info.paymentDeadlines"
                :key="`item-${itemIndex}`"
                v-html="item"
              />
            </ul>
          </b-col>
          <b-col
            v-if="info.benefits && info.benefits.length"
            sm="12"
            :md="colSize"
            class="mb-1 mb-md-0"
          >
            <p class="h6 results-title text-black-50 mb-2">Beneficios:</p>
            <ul class="list-unstyled">
              <li
                v-for="(item, itemIndex) in info.benefits"
                :key="`item-${itemIndex}`"
                v-html="item"
              />
            </ul>
          </b-col>
        </b-row>
      </b-col>
      <!-- <b-col md="3" sm="12" class="d-md-none">
        <div>
          <b-button
            class="button-green"
            size="lg"
            block
            @click="fireFacebook(info.action)"
          >
            Solicitar
          </b-button>
        </div>
      </b-col> -->
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({
        class: '',
        img: {
          src: '',
          alt: '',
          class: '',
        },
        action: '',
        amounts: [],
        deliveryTerms: [],
        paymentDeadlines: [],
        benefits: [],
      }),
      required: true,
    },
  },
  computed: {
    colSize() {
      let divider = 0
      const totalColsMd = 12
      if (this.info.amounts && this.info.amounts.length) divider++
      if (this.info.deliveryTerms && this.info.deliveryTerms.length) divider++
      if (this.info.paymentDeadlines && this.info.paymentDeadlines.length) {
        divider++
      }
      if (this.info.benefits && this.info.benefits.length) divider++
      return totalColsMd / divider
    },
  },
  methods: {
    fireFacebook(client) {
      this.$fb.track('Lead')
      switch (client) {
        case 'kueski':
          window.open(
            'https://kueski.com/prestamos-personales?utm_source=rdbcxx&utm_medium=p_sms&utm_campaign=comparador&utm_term=ppg&utm_content=nh',
            '_blank'
          )
          break
        case 'resuelve':
          window.open(
            'https://www.resuelve.info/contactanos/?utm_source=pub55&utm_medium=paid&utm_campaign=pixeldynamicrtdmx_ago20&utm_channel=sms',
            '_blank'
          )
          break
        case 'titan':
          window.open(
            'https://track.affi99.com/click?pid=66&offer_id=49',
            '_blank'
          )
          break
        case 'creditea':
          window.open(
            'https://creditea.mx?utm_source=PixelDynamicSMS&utm_medium=affiliate&utm_campaign=cpl__21&utm_content=mx_es___broad',
            '_blank'
          )
          break
        case 'lendon':
          window.open(
            'https://www.lendon.mx/?utm_source=pixeldynamic&utm_medium=affiliateCPS&utm_campaign=2021',
            '_blank'
          )
          break
        case 'coppel':
          window.open(
            'https://afiliacion.net/?a=1988733&c=15285&s1=SN-SuperNova_MX-BD',
            '_blank'
          )
          break
        case 'banamex':
          window.open(
            'https://afiliacion.net/?a=1988640&c=13590&s1=AI_AgenciaIvan_MX-SMS',
            '_blank'
          )
          break
        case 'creditron':
          window.open(
            'https://affise.creditron.org/click?pid=1202&offer_id=338',
            '_blank'
          )
          break
        case 'tu-canton':
          window.open(
            'https://afiliacion.net/?a=1988640&c=14252&s1=AI_AgenciaIvan_MX-BD',
            '_blank'
          )
          break
        case 'urgente':
          window.open(
            'https://track.affi99.com/click?pid=66&offer_id=250',
            '_blank'
          )
          break
        default:
          this.$router.replace('/oferta')
      }
    },
  },
}
</script>
