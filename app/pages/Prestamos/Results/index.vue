<template>
  <b-overlay :show="show" blur="5px">
    <template #overlay>
      <div class="text-center">
        <h3 class="mb-4">Recibiendo ofertas...</h3>
        <b-icon icon="filter-circle" font-scale="3" animation="throb"></b-icon>
        <p class="font-weight-bold mt-3">Espera un momento...</p>
      </div>
    </template>
    <section class="d-flex align-items-center h100 py-5 py-md-5">
      <b-container v-if="!show">
        <b-row class="justify-content-center">
          <b-col sm="10" md="12">
            <h1 class="title mt-md-0 mb-4 blue-text">
              {{ message }}
            </h1>
            <!-- <p>
              ¡Tienes los requisitos para solicitar cualquiera de estas ofertas!
            </p> -->
            <p class="mb-5">
              Te recomendamos aplicar en todas estas opciones para incrementar
              tus posibilidades de aprobación
            </p>
          </b-col>
        </b-row>
        <b-row
          class="text-body d-flex align-items-stretch justify-content-center"
        >
          <b-col
            v-for="(result, index) in results"
            :key="`result-${index}`"
            sm="12"
            md="12"
            class="mb-4"
          >
            <ResultsCard :info="result" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </b-overlay>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      show: true,
      showLoan: false,
      results: [
        {
          img: {
            src: '/logos/kueski2.png',
            alt: 'Kueski',
          },
          action: 'kueski',
          amounts: [
            'Hasta <span class="font-weight-bold">$2,000</span>',
            // 'Primer crédito: <span class="font-weight-bold">$2,000</span>',
          ],
          deliveryTerms: ['Menos de 2 horas'],
          paymentDeadlines: ['Hasta 30 días'],
          benefits: ['Sin buró de crédito', 'Sin comisiones'],
        },
        {
          class: 'd-flex align-items-center',
          img: {
            src: '/logos/logo-titan.png',
            alt: 'Crédito Titan',
            class: 'w-75 my-3',
          },
          action: 'titan',
          amounts: ['Más de <span class="font-weight-bold">$10,000</span>'],
          deliveryTerms: ['10 minutos'],
          paymentDeadlines: ['4 años o más'],
          benefits: ['Sin buró de crédito', 'Sin comisiones'],
        },
        // {
        //   class: 'd-flex align-items-center py-3',
        //   img: {
        //     src: '/logos/creditea.png',
        //     alt: 'Creditea',
        //   },
        //   action: 'creditea',
        //   items: [
        //     'Monto: <span class="font-weight-bold text-success">$5,000 - $70,000</span>',
        //     '<span class="font-weight-bold">Entrega en menos de 24 horas</span>',
        //     'Liquida antes y ahorra intereses',
        //     'Sin comisiones por manejo de cuenta',
        //   ],
        // },
        // {
        //   img: {
        //     src: '/logos/lendon.png',
        //     alt: 'Lendon',
        //   },
        //   action: 'lendon',
        //   amounts: ['Hasta <span class="font-weight-bold">$6,000</span>'],
        //   deliveryTerms: ['Menos de 24 horas'],
        //   paymentDeadlines: ['30 días'],
        //   benefits: ['Aprobación inmediata', 'Sin avales'],
        // },
        // {
        //   img: {
        //     src: '/logos/coppel.png',
        //     alt: 'coppel',
        //     class: 'w-75 rounded my-2',
        //   },
        //   action: 'coppel',
        //   items: [
        //     'Hasta:<span class="font-weight-bold text-success">$30,000</span>',
        //     '<span class="font-weight-bold">Sin anualidad</span>',
        //     'Solicítalo en menos de 5 minutos',
        //     'Requisitos: ser mayor de 18 años',
        //   ],
        // },
        // {
        //   img: {
        //     src: '/logos/creditron.svg',
        //     alt: 'creditron',
        //   },
        //   action: 'creditron',
        //   amounts: [
        //     'De <span class="font-weight-bold">$1,000 a $50,000</span>',
        //   ],
        //   deliveryTerms: ['Menos de 48 horas'],
        //   paymentDeadlines: ['Hasta 24 meses'],
        //   benefits: ['Sin buró de crédito', 'Sin comisiones'],
        // },
        // {
        //   img: {
        //     src: '/logos/citibanamex.png',
        //     alt: 'citibanamex',
        //   },
        //   action: 'banamex',
        //   items: [
        //     '<span class="font-weight-bold text-success">Tarjeta sin anualidad</span>',
        //     'Compra de forma segura',
        //     '<span class="font-weight-bold">Protección de compras en línea</span>',
        //     'Hasta $2,000 de cobertura por incidente en <br/>caso de robo o daño accidental',
        //   ],
        // },
        // {
        //   img: {
        //     src: '/logos/tu-canton.png',
        //     alt: 'tu-canton',
        //   },
        //   action: 'tu-canton',
        //   benefits: [
        //     '¡Estrena hoy un depa o casa!',
        //     'Tenemos el mayor inventario del país',
        //     'Asesoría personalizada y 100% gratuita',
        //     'Visitas guiadas a las propiedades que decidas conocer',
        //     'Tramitamos tu crédito y nos encargamos de todo el papeleo',
        //   ],
        // },
      ],
    }
  },
  computed: {
    message() {
      const quantity = this.results.length
      const message =
        quantity > 1
          ? `Hemos encontrado ${quantity} ofertas personalizada para ti.`
          : `Hemos encontrado ${quantity} oferta personalizada para ti.`
      return message
    },
  },
  created() {
    setTimeout(() => {
      this.show = false
      // disparar evento de facebook lead
    }, 500)
  },
}
</script>
