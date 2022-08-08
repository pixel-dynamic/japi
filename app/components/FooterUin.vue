<template>
  <div class="footer">
    <section class="relative bg-blue-uin py-5">
      <b-container class="container-footer relative">
        <b-row class="justify-content-center">
          <b-col sm="3">
            <b-nav small vertical class="text-center">
              <b-nav-item
                target="_blank"
                href="https://cdn2.hubspot.net/hubfs/3334265/Acuerdos%20y%20RVOEs/RVOEs_UIN_26.09.19.pdf"
                >Acuerdos y REVOEs</b-nav-item
              >
              <b-nav-item
                target="_blank"
                href="https://cdn2.hubspot.net/hubfs/3334265/UIN2019/Informe%20sobre%20procedimientos%20previamente%20convenidos%5B3%5D.pdf"
                >Estudios de Egresados por EY</b-nav-item
              >
              <b-nav-item
                target="_blank"
                href="https://www.universidadinsurgentes.edu.mx/aviso-de-privacidad"
                >Aviso de privacidad</b-nav-item
              >
            </b-nav>
          </b-col>
        </b-row>
      </b-container>
      <div class="square-footer"></div>
    </section>
    <section class="bg-black py-3">
      <b-container>
        <p class="small text-white text-center mb-0">
          2017 Corporativo UIN<br />
          * Aplican restricciones. Sujeto a programa, plantel y turno. Cupo
          limitado. Precio con beca. Para mayor información, consulta a tu
          asesor de ventas.<br />
          ** Tarjetas participantes. <br />
          Todos los derechos reservados.<br />
          Al hacer uso de esta página o registrarse aceptas nuestro aviso de
          privacidad y políticas de uso.<br />
        </p>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.footer {
  overflow: hidden;
}

.nav-link {
  color: #fff !important;
}

.container-footer {
  z-index: 2;
}
.square-footer {
  z-index: 1;
  position: absolute;
  top: -50px;
  left: 50px;
  width: 200px;
  height: 200px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#2336b6),
    to(rgba(31, 38, 103, 0.9))
  );
  background: linear-gradient(to right, #2336b6, rgba(31, 38, 103, 0.9));
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition: all 250ms ease-out;
  transition: all 250ms ease-out;
}
</style>
