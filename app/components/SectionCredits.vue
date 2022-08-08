<template>
  <section
    class="h100 bg-home text-white d-flex align-items-center py-5 text-center"
  >
    <b-container fluid>
      <!-- <SlickCarousel /> -->
      <b-row class="my-5">
        <b-col>
          <h1 class="h3 mb-0">Las compañías de nuestra red</h1>
          <p>
            Da clic en cualquiera de nuestros socios para encontrar más
            información sobre sus préstamos
          </p>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col sm="10" md="9">
          <b-row class="justify-content-center">
            <b-col
              v-for="(credit, index) in credits"
              :key="`credit-${index}`"
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit(credit.name)"
            >
              <CardVue :hide-header="true">
                <div
                  style="min-height: 120px"
                  class="d-flex align-items-center"
                >
                  <img :src="credit.img" alt="kuepa" />
                </div>
              </CardVue>
            </b-col>
            <!-- <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('CNCI')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/cnci.jpg" alt="cnci" />
                </div>
              </CardVue>
            </b-col>
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('milenio')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/tecmilenio.jpg" alt="tecmilenio" />
                </div>
              </CardVue>
            </b-col>
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('ULA')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/ula.jpg" alt="ula" />
                </div>
              </CardVue>
            </b-col>
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('UNITEC')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/unitec.jpg" alt="unitec" />
                </div>
              </CardVue>
            </b-col>
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('IEU')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/ieu.jpg" alt="ieu" />
                </div>
              </CardVue>
            </b-col>
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('UTEL')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/utel.jpg" alt="utel" />
                </div>
              </CardVue>
            </b-col>
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('UVM')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/uvm.jpg" alt="uvm" />
                </div>
              </CardVue>
            </b-col>
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('ISU UNIVERSIDAD')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/isu.jpg" alt="uvm" />
                </div>
              </CardVue>
            </b-col>
            <b-col
              cols="6"
              sm="4"
              md="3"
              class="cursor"
              @click="sendCredit('CULTURA')"
            >
              <CardVue :hide-header="true">
                <div>
                  <img src="/universitys/utc.jpg" alt="CULTURA" />
                </div>
              </CardVue>
            </b-col> -->
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
      credits: [
        {
          name: 'Creditron',
          img: '/logos/creditron.svg',
        },
        {
          name: 'Lendon',
          img: '/logos/lendon.png',
        },
        {
          name: 'Titan',
          img: '/logos/logo-titan.png',
        },
        {
          name: 'Kueski',
          img: '/logos/kueski2.png',
        },
      ],
    }
  },
  methods: {
    sendCredit(credit) {
      this.$router.push('/detail?credit=' + credit)
    },
  },
}
</script>
