<template>
  <div>
    <section v-for="(item, index) in minisites" :key="index">
      <b-container v-if="item.name === credit" class="py-5">
        <b-row class="justify-content-center mt-5">
          <b-col class="relative mb-5" sm="8">
            <img
              v-b-modal="'modal-cover'"
              :src="`/credits/covers/${item.name}_cover.png`"
              class="rounded-cover"
              alt="cover"
            />

            <b-modal
              id="modal-cover"
              hide-header
              hide-footer
              centered
              body-class="p-0 text-center"
              size="lg"
            >
              <img
                :src="`/credits/covers/${item.name}_cover.png`"
                alt="cover"
              />
            </b-modal>

            <img
              class="avatar"
              :src="`/credits/profiles/${item.name}_profile.png`"
              :alt="item.name.toLowerCase()"
            />
          </b-col>
          <b-col sm="8" class="pb-3 pt-4 mt-5">
            <h1>
              {{ item.titulo }}
            </h1>
          </b-col>
          <b-col sm="8" class="pb-3 pt-4 mt-2">
            <p>
              {{ item.parrafo_1 }}
            </p>
          </b-col>
          <b-col v-if="item.parrafo_2.length > 0" sm="8">
            <!-- <h5 class="text-orange">Carreras</h5> -->
            <p>
              {{ item.parrafo_2 }}
            </p>
          </b-col>
          <b-col v-if="(credits || []).length" sm="8">
            <ul>
              <li
                v-for="(credito, creditoIndex) in credits"
                :key="creditoIndex + 10"
              >
                {{ credito.carrier.name }}
              </li>
            </ul>
          </b-col>
          <!-- <b-col sm="8" class="py-3">
            <h5 class="text-orange">Tecnología de vanguardia</h5>
            <p v-for="feature in item.feature_1" :key="feature">
              {{ feature }}
            </p>
          </b-col> -->
          <!-- <b-col v-if="item.video_feature.length > 0" sm="8">
            <b-embed
              type="iframe"
              aspect="16by9"
              :src="item.video_feature"
              allowfullscreen
            ></b-embed>
          </b-col> -->
          <b-col v-if="item.beneficios.length > 0" class="py-3" sm="8">
            <h5 class="text-orange">Beneficios:</h5>
            <p
              v-for="(beneficio, beneficioIndex) in item.beneficios"
              :key="`beneficio-${beneficioIndex}`"
            >
              {{ beneficio }}
            </p>
            <!-- <b-row class="mt-4">
              <b-col
                v-for="logo in item.colocacion_lista"
                :key="logo"
                cols="6"
                sm="3"
              >
                <CardVue :hide-header="true">
                  <img
                    :src="'/laboral/' + logo.toLowerCase() + '.png'"
                    :alt="logo"
                  />
                </CardVue>
              </b-col>
            </b-row> -->
          </b-col>
          <b-col v-if="item.requisitos.length > 0" class="py-3" sm="8">
            <h5 class="text-orange">Requisitos:</h5>
            <p
              v-for="(requisito, requisitoIndex) in item.requisitos"
              :key="`requisito-${requisitoIndex}`"
            >
              {{ requisito }}
            </p>
          </b-col>
          <!-- <b-col v-if="item.video.length > 0" sm="8">
            <b-embed
              type="iframe"
              aspect="16by9"
              :src="item.video"
              allowfullscreen
            ></b-embed>
          </b-col> -->
        </b-row>
        <!-- <b-modal
          id="modal"
          hide-footer
          :title="'Solicitar asesoría en ' + item.name"
          centered
          @hidden="cancelModal()"
          @shown="cancelModal()"
        >
          <div class="d-block">
            <FormSchool
              :id="(index + 1).toString()"
              :credit="item.name"
              :selector="item.name"
              :carrer="item.name === 'Kuepa' ? '0015f00000BRZ3MAAX' : ''"
              @save="saveForm"
            />
          </div>
        </b-modal> -->

        <div
          v-if="!showButton"
          class="footer call-to-action text-center shadow"
        >
          <p>¿Te interesa este crédito?</p>
          <b-button
            class="px-5"
            variant="warning"
            pill
            :href="item.link"
            target="_blank"
            >Obtener oferta</b-button
          >
        </div>
      </b-container>
    </section>
    <div class="py-5 text-center">
      <NotFound
        v-if="isEmpty"
        message="Detalles de escuela no encontrada. Intentalo más tarde."
      />
      <!-- <b-button to="/" variant="link" block class="mb-4"
        >Regresar al top</b-button
      > -->
    </div>
  </div>
</template>
<script>
import { minisites } from '@/utils/minisites'
export default {
  layout: 'detail',
  data() {
    return {
      minisites,
      credit: '',
      credits: [],
      showButton: false,
      url: '',
      isEmpty: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.addEventListener('scroll', this.handleScroll)
  },
  created() {
    this.credit = this.$route.query.credit
    // await this.getCarreers()

    setTimeout(() => {
      this.checkCredit(this.credit)
    }, 100)
  },
  methods: {
    async getCarreers() {
      const credits = await this.$axios.$get(
        process.env.NUXT_ENV_BACKEND_ACADEMIC + '/carriers',
        {
          params: this.$route.query,
        }
      )

      this.credits = credits.items
    },
    handleScroll() {
      if (window.scrollY > 300) {
        this.showButton = true
      } else {
        this.showButton = false
      }
    },
    saveForm(data) {
      this.params = {
        name: data.name,
        last_name: data.last_name,
        email: data.email,
        telephone: data.phone,
      }

      switch (data.credit) {
        case 'Kuepa':
          this.params.career_id = data.carrer_id
          break
        case 'Utel':
          this.params.extra = {
            credit: data.credit,
            area_interes: data.area_interes,
            carrer: data.identifier,
          }
          this.url =
            'https://www.utel.edu.mx/#areade_interes_-36c2e494-3f4c-486a-96cc-056a4b906a0d'
          break
        case 'Ieu':
          this.params.extra = {
            credit: data.credit,
            carrer: data.identifier,
            modality: data.modality,
          }
          this.url = 'https://ieu.edu.mx/'
          break
        case 'Unitec':
          this.params.extra = {
            credit: data.credit,
            carrer: data.identifier,
          }
          this.url = 'https://www.unitec.mx/licenciaturas/'
          break
        case 'Uvm':
          this.params.extra = {
            credit: data.credit,
            carrer: data.identifier,
          }
          this.url =
            'https://universidaduvm.secure.force.com/calculadoraUVM?trackid=goosrcarpaonbrn'
          break
        case 'Cnci':
          this.params.extra = {
            credit: data.credit,
            carrer: data.identifier,
          }
          this.url = 'https://www.cncivirtual.com/'
          break
        case 'Isu':
          this.params.extra = {
            credit: data.credit,
            carrer: data.identifier,
          }
          this.url = 'https://isu.edu.mx/licenciaturas-online/'
          break
        case 'Milenio':
          this.params.extra = {
            credit: data.credit,
            carrer: data.identifier,
          }
          this.url = 'https://www.tecmilenio.mx/es/proceso-de-admision'
          break
        case 'Ula':
          this.params.extra = {
            credit: data.credit,
            carrer: data.identifier,
            modality: data.modality,
          }
          break

        default:
          break
      }

      this.$axios
        .$post(process.env.NUXT_ENV_BACKEND_ACADEMIC + '/records', this.params)
        .then((response) => {
          this.$swal(
            'Registro existoso',
            'En breve nos comunicaremos contigo',
            'success'
          ).then((result) => {
            if (result.value) {
              this.$bvModal.hide('modal')
              if (data.credit !== 'Kuepa' || data.credit !== 'Ula') {
                window.location.href = this.url
              }
            }
          })
        })
        .catch((error) => {
          console.log(error)
          this.$swal('Error en el servico', 'Inténtalo más tarde', 'error')
          this.$bvModal.hide('modal')
        })
    },
    cancelModal() {
      this.showButton = !this.showButton
    },
    checkCredit(credit) {
      this.isEmpty = this.minisites.some((minisite) => {
        return !minisite.name.toLowerCase().includes(credit.toLowerCase())
      })
    },
  },
}
</script>
<style scoped>
.rounded-cover {
  border-radius: 10px !important;
}
.call-to-action {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: rgb(47, 8, 54);
  color: #fff;
  z-index: 9999;
}

.quote {
  position: relative;
  letter-spacing: 0.03em;
  margin-bottom: 0.5rem;
  font-size: 12px;
}
.quote:before {
  content: '“';
  position: absolute;
  left: -0.35em;
  font-size: 2.3rem;
  top: -10px;
}
.quote--container {
  margin: 1.5rem auto 0;
  width: 100%;
  border-bottom: 2px dotted #c6d1bf;
  padding-bottom: 0.5rem;
}

.quote--highlight {
  color: #d24335;
}

.quote--author {
  font-size: 0.8rem;
  text-align: right;
  font-weight: 300;
}
.avatar {
  width: 100px;
  height: 100px;
  padding: 2px;
  border-radius: 50%;
  border: 2px solid #fff;
  position: absolute;
  bottom: -60px;
  left: 30px;
  background: #fff;
}

@media (min-width: 768px) {
  .avatar {
    width: 200px;
    height: 200px;
    bottom: -60px;
    left: 30px;
  }
}
</style>
