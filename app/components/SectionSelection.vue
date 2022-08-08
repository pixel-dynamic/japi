<template>
  <section class="section-padding h100 d-flex align-items-center">
    <b-container>
      <b-row class="mt-5">
        <b-col cols="12" sm="12" md="12">
          <b-row class="justify-content-center">
            <b-col cols="12" class="text-center mb-4">
              <h2>¡Ya te hicimos la tarea!</h2>
              <h3 class="h5 montserrat font-weight-normal">
                Chécate nuestra selección de las mejores escuelas por categoría
              </h3>
            </b-col>
            <b-col cols="6" sm="5" md="3">
              <CardVue :hide-header="true" :align-center="true">
                <div>
                  <img src="/icons/icons8-abrir-carpeta-100.svg" alt="icon1" />
                </div>
                <p class="font-weight-bold">Nivel educativo</p>
              </CardVue>
            </b-col>
            <b-col cols="6" sm="5" md="3">
              <CardVue :hide-header="true" :align-center="true">
                <div>
                  <img src="/icons/icons8-acerca-de-100.svg" alt="icon1" />
                </div>
                <p class="font-weight-bold">Mejor Calificadas</p>
              </CardVue>
            </b-col>
            <b-col cols="6" sm="5" md="3">
              <CardVue :hide-header="true" :align-center="true">
                <div>
                  <img
                    src="/icons/icons8-archivo-de-imagen-100.svg"
                    alt="icon1"
                  />
                </div>
                <p class="font-weight-bold">Colegiaturas</p>
              </CardVue>
            </b-col>
            <b-col cols="6" sm="5" md="3">
              <CardVue :hide-header="true" :align-center="true">
                <div>
                  <img src="/icons/icons8-abrir-carpeta-100.svg" alt="icon1" />
                </div>
                <p class="font-weight-bold">Oferta laboral</p>
              </CardVue>
            </b-col>
            <b-col cols="12" class="text-center mt-5">
              <b-link to="/top">
                <button class="button learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Ir al top 10</span>
                </button>
              </b-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
