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
        // {
        //   img: {
        //     src: '/logos/kueski2.png',
        //     alt: 'Kueski',
        //   },
        //   action: 'kueski',
        //   amounts: [
        //     'Hasta <span class="font-weight-bold text-success">$2,000</span>',
        //     // 'Primer crédito: <span class="font-weight-bold">$2,000</span>',
        //   ],
        //   deliveryTerms: [
        //     '<span class="font-weight-bold">Menos de 2 horas</span>',
        //   ],
        //   paymentDeadlines: ['Hasta 30 días'],
        //   benefits: ['Sin buró de crédito', 'Sin comisiones'],
        // },
        {
         
        {
          class: 'd-flex align-items-center',
          img: {
            src: '/logos/storilogo.png',
            alt: 'Dineria',
            class: 'w-75 my-3',
          },
          action: 'stori',
          amounts: [
            'Tarjeta de Crédito <span class="font-weight-bold text-success">100% autorizada</span>',
          ],
          deliveryTerms: [
            '<span class="font-weight-bold">Credito hasta $10,000</span>',
          ],
          paymentDeadlines: ['Sin Anualidad de por vida'],
          benefits: ['Entrega a Domicilio gratuita'],
        },
         class: 'd-flex align-items-center',
          img: {
            src: '/logos/prestamourgente.png',
            alt: 'Prestamo Urgente',
            class: 'w-75 my-3',
          },
          action: 'urgente',
          amounts: [
            'Obtén hasta <span class="font-weight-bold text-success">$10,000</span>',
          ],
          deliveryTerms: [
            '<span class="font-weight-bold">Recíbelo en menos de 2 horas</span>',
          ],
          paymentDeadlines: ['Págalo en 2 años o más'],
          benefits: ['Obtenlo hoy mismo con tu CURP  y CLABE'],
        },
        {
          class: 'd-flex align-items-center',
          img: {
            src: '/logos/logo-creedy.png',
            alt: 'Creedy',
            class: 'w-75 my-3',
          },
          action: 'creedy',
          amounts: [
            'hasta <span class="font-weight-bold text-success">$30,000</span>',
          ],
          deliveryTerms: [
            '<span class="font-weight-bold">Menos de 2 horas</span>',
          ],
          paymentDeadlines: ['12 meses'],
          benefits: ['Tu primer prestamo sin intereses'],
        },
        // {
        //   class: 'd-flex align-items-center',
        //   img: {
        //     src: '/logos/coppel.png',
        //     alt: 'Coppel',
        //     class: 'w-75 my-3',
        //   },
        //   action: 'coppel',
        //   amounts: ['Hasta <span class="font-weight-bold">$12,000</span>'],
        //   deliveryTerms: ['Tu crédito en minutos'],
        //   paymentDeadlines: ['Obtener tu crédito solo te toma 3 pasos'],
        //   benefits: [
        //     'Sin comprobante de ingresos ni historial de crédito',
        //     '¡Comienza a estrenar!',
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
