<template>
  <div>
    <!-- <section class="header-section h70 tinted-image d-flex align-items-center">
      <b-container>
        <b-row class="justify-content-end">
          <b-col sm="6">
            <h1 class="text-white">MVP del mes</h1>
            <p>
              Cada mes elegimos la oferta educativa evaluando la calidad de su
              educación, la usabilidad de sus plataformas de educación y la
              relación costo beneficio.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section> -->
    <section class="py-5 bg-kuepa">
      <b-container>
        <b-row class="justify-content-end">
          <b-col sm="6">
            <b-row>
              <b-col sm="12 text-white">
                <h2>MVP del mes</h2>
                <p>
                  Cada mes elegimos la oferta educativa evaluando la calidad de
                  su educación, la usabilidad de sus plataformas de educación y
                  la relación costo beneficio.
                </p>
              </b-col>
            </b-row>
            <b-row class="justify-content-center">
              <b-col sm="12">
                <transition name="slide-fade">
                  <div>
                    <CardVue :hide-header="true" :align-center="true">
                      <b-row class="d-flex align-items-center mb-4">
                        <b-col sm="6" class="text-center">
                          <img
                            src="https://via.placeholder.com/150"
                            alt="kuepa"
                          />
                        </b-col>
                        <b-col sm="6" class="text-left">
                          <!-- <h2>Universidad Kuepa</h2> -->
                          <p class="small">
                            La relación
                            <span class="bold">costo vs beneficios</span> que
                            ofrece la universidad kuepa, la hace única en su
                            oferta académica y acreedora de ser nuestro MVP del
                            mes.
                          </p>
                        </b-col>
                      </b-row>
                      <b-row class="mb-4 small justify-content-center">
                        <b-col cols="6" sm="4">
                          <img
                            src="https://img.icons8.com/nolan/64/checkmark.png"
                          />
                          <p class="bold">100% en línea</p>
                        </b-col>
                        <b-col cols="6" sm="4">
                          <img
                            src="https://img.icons8.com/nolan/64/checkmark.png"
                          />
                          <p class="bold">Inscripción gratuita</p>
                        </b-col>
                        <b-col cols="10" sm="4">
                          <img
                            src="https://img.icons8.com/nolan/64/checkmark.png"
                          />
                          <p class="bold">
                            Titulación con validez internacional
                          </p>
                        </b-col>
                      </b-row>
                      <b-row class="justify-content-center">
                        <b-col sm="10">
                          <p class="text-left small">
                            Con su modelo de enseñanza, Kuepa permite que sus
                            alumnos puedan trabajar o realizar otras actividades
                            a la par de sus estudios al tener disponible tanto
                            el material como las clases 24 horas los siete días
                            de la semana
                          </p>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <h2 class="mt-3 h3">
                            $1,490 +
                            <b-badge variant="success"
                              >inscripción gratuita</b-badge
                            >
                          </h2>
                        </b-col>
                      </b-row>
                      <hr />
                      <b-row>
                        <b-col>
                          <b-button
                            v-b-modal.kuepa
                            variant="warning"
                            class="px-4 mr-0 mr-sm-2"
                            pill
                            >Solcitar asesoría</b-button
                          >
                          <b-button
                            to="/detail?university=Kuepa"
                            variant="outline-primary"
                            class="px-4 mt-3 mt-sm-0"
                            pill
                            >Más información</b-button
                          >
                        </b-col>
                      </b-row>
                    </CardVue>
                    <b-modal id="kuepa" hide-footer centered>
                      <template #modal-header="{ close }">
                        <div class="w-100">
                          <b-row>
                            <b-col>
                              <p class="bold text-white mb-0">
                                Asesoría para Kuepa
                              </p>
                            </b-col>
                            <b-col cols="auto">
                              <b-button
                                size="sm"
                                variant="outline-light"
                                @click="close()"
                              >
                                cerrar
                              </b-button>
                            </b-col>
                          </b-row>
                        </div>
                      </template>
                      <div class="d-block">
                        <p class="small">
                          ¿Deseas recibir una asesoría academica y más
                          información sobre esta escuela? Dejanos tus datos y en
                          breve un asesor se pondrá en contacto contigo.
                        </p>
                        <FormSchool
                          university="Universidad Kuepa"
                          selector="kuepa"
                          @save="saveForm"
                        />
                      </div>
                    </b-modal>
                  </div>
                </transition>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  created() {
    setTimeout(() => {
      this.show = true
      this.$emit('success', true)
    }, 500)
  },
  methods: {
    saveForm(value) {
      this.params = {
        name: value.name,
        last_name: value.last_name,
        email: value.email,
        telephone: value.phone,
        career_id: value.carrer_id,
      }

      this.$axios
        .$post('' + '/records', this.params)
        .then((response) => {
          this.$swal(
            'Registro existoso',
            'En breve un asesor se pondrá en contacto contigo.',
            'success'
          ).then((result) => {
            if (result.value) {
              this.$bvModal.hide('kuepa')
            }
          })
        })
        .catch((error) => {
          console.log(error.response.data.detail)
          this.$swal('Error en el servico', error.response.data.detail, 'error')
          this.$bvModal.hide('kuepa')
        })
    },
  },
}
</script>
<style scoped>
.col-card {
  margin-top: -100px;
}
.bg-kuepa {
  background: url('/img/bg-kuepa.jpeg') no-repeat center;
  background-size: cover;
}
</style>
