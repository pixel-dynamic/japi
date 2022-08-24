<template>
  <section class="footer pt-5">
    <b-container>
      <b-row>
        <b-col>
          <b-nav small align="center">
            <b-nav-item to="/privacidad">Aviso de privacidad</b-nav-item>
            <b-nav-item to="/terminos">Términos y condiciones</b-nav-item>
            <b-nav-item
              ><b-icon class="mr-2" icon="facebook"></b-icon>
              Facebook</b-nav-item
            >
          </b-nav>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="small text-center mt-4">
            <span class="font-weight-bold">2022 © japiapp.com.mx</span> - Todos
            los derechos reservados. Al usar este sitio, aceptas nuestra
            política de privacidad, así como nuestros términos y condiciones.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style scoped>
.footer {
  background: rgb(44, 80, 200);
  color: #fff;
}
a {
  color: #fff !important;
}
</style>
