<template>
  <div>
    <b-navbar id="navbar-academic" variant="faded" type="light" class="w-100">
      <b-container class="w-100">
        <b-navbar-brand href="#" class="d-flex align-items-center mx-auto">
          <img
            width="220"
            src="../../../assets/img/logo-uin.png"
            class="d-inline-block align-top"
            alt="Universidad Insurgentes"
          />
        </b-navbar-brand>
      </b-container>
    </b-navbar>
    <section class="h100 d-flex align-items-center bg-intro-uin py-3 py-sm-5">
      <b-container>
        <b-row class="justify-content-center d-flex align-items-center">
          <b-col sm="6" class="text-white">
            <h1 class="title">¡Programas que se adaptan a tu ritmo!</h1>
            <p class="subtitle">
              Tú decides: estudia por la mañana, tarde, noche o sábados.
            </p>
          </b-col>
          <b-col sm="5">
            <b-overlay :show="show" rounded="sm">
              <Card align="left" variant="uin">
                <p class="font-weight-bold">
                  ¿Te interesa? ¡Déjanos brindarte más información!
                </p>
                <FormUin @update="testHusbpot" />
              </Card>
            </b-overlay>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container class="relative py-5 my-4">
        <b-row class="justify-content-center">
          <b-col class="slick-uin" sm="9" md="9">
            <VueSlickCarousel v-bind="slickOptions">
              <div class="uin">
                <img src="../../../assets/img/slide-one-1.jpeg" alt="image 1" />
                <div class="w-100 p-3 bg-uin text-white">
                  <h5 class="mb-0">¡Programas que se adaptan a tu ritmo!</h5>
                  <p class="mb-0">
                    Tú decides: estudia por la mañana, tarde, noche o sábados.
                  </p>
                </div>
              </div>
              <div class="uin">
                <img src="../../../assets/img/slide-one-3.jpeg" alt="image 1" />
                <div class="w-100 p-3 bg-uin text-white">
                  <h5 class="mb-0">
                    UIN es parte del grupo 2 del Programa de Mejora
                    Institucional de la SEP
                  </h5>
                  <p class="mb-0">Avala su calidad y trayectoria académica</p>
                </div>
              </div>
              <div class="uin">
                <img src="../../../assets/img/slide-one-5.jpeg" alt="image 1" />
                <div class="w-100 p-3 bg-uin text-white">
                  <h5 class="mb-0">
                    UIN es de las pocas universidades en México que cuenta con
                    programas incorporados a la SEP, UNAM e IPN
                  </h5>
                </div>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'uin',
  data() {
    return {
      show: false,
      slickOptions: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
  methods: {
    testHusbpot(data) {
      this.show = true
      setTimeout(() => {
        const body = {
          fields: [
            {
              name: 'firstname',
              value: data.user.firstname,
            },
            {
              name: 'lastname',
              value: data.user.lastname,
            },
            {
              name: 'email',
              value: data.user.email,
            },
            {
              name: 'phone',
              value: data.user.phone,
            },
            {
              name: 'turno',
              value: data.user.turno,
            },
            {
              name: 'programas',
              value: data.user.programas,
            },
            {
              name: data.key_plantel,
              value: data.user[data.key_plantel],
            },
            {
              name: 'ciclo_de_interes_declarado',
              value: data.user.ciclo_de_interes_declarado,
            },
            {
              name: 'terminos_y_condiciones',
              value: true,
            },
            {
              name: 'origen_uin',
              value: 'INTERNET ONLINE',
            },
            {
              name: 'canales',
              value: 'PAID',
            },
            {
              name: 'ciclo_uin',
              value: '2022-1',
            },
            {
              name: 'medios_uin',
              value: 'PIXELDYNAMIC',
            },
          ],
        }

        this.$axios
          .post(
            'https://api.hsforms.com/submissions/v3/integration/submit/3334265/dbab9e54-07e7-474f-bbff-f27792daf95a',
            body
          )
          .then((response) => {
            console.log(response)
            this.$router.replace('/educacion/uin/gracias')
          })
          .catch((error) => {
            console.log(error)
            this.$swal('Error', error, 'warning')
          })
      }, 500)
    },
  },
  head() {
    return {
      title: 'Universidad Insurgentes',
      'Timing-Allow-Origin': '*',
      meta: [
        {
          name: 'description',
          content:
            '¡Que nada te detenga! Estudia a tu ritmo | Horarios Flexibles | Becas para toda tu carrera. UIN | Educación Respaldada por la SEP y por más de 25 años de experiencia académica. 25 Planteles. UIN Más Cerca de Ti. Tipos: Turno sabatino, Turnos sábado y domingo.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Universidad Insurgentes',
        },
        { hid: 'og:image', name: 'og:image', content: '/uin.jpeg' },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            '¡Que nada te detenga! Estudia a tu ritmo | Horarios Flexibles | Becas para toda tu carrera. UIN | Educación Respaldada por la SEP y por más de 25 años de experiencia académica. 25 Planteles. UIN Más Cerca de Ti. Tipos: Turno sabatino, Turnos sábado y domingo.',
        },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Academic' },
      ],
    }
  },
}
</script>
