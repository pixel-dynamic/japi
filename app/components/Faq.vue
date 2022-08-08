<template>
  <div class="accrodion-grp faq-accrodion mb-4">
    <div id="accordeon-1" class="accrodion active">
      <div class="accrodion-inner" @click="accordeon('accordeon-1')">
        <div v-b-toggle.accordion-1 class="accrodion-title">
          <h4>¿Cómo funciona prestamagico?</h4>
        </div>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              Prestamagico es un buscador de soluciones financieras. Para
              obtener tu oferta financiera únicamente tienes que responder lo
              más honestamente las preguntas de nuestro formulario y nosotros
              buscaremos entre nuestra red de socios financieros la mejor oferta
              para ti y por supuesto, completamente gratis.
            </p>
          </div>
        </b-collapse>
      </div>
    </div>
    <div id="accordeon-2" class="accrodion">
      <div class="accrodion-inner" @click="accordeon('accordeon-2')">
        <div v-b-toggle.accordion-2 class="accrodion-title">
          <h4>¿El servicio de prestamagico cuesta dinero?</h4>
        </div>
        <b-collapse
          id="accordion-2"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              Prestamagico siempre ha sido, es y será 100% gratuito y nunca te
              pediremos ningún tipo de pago, depósito o comisión.
            </p>
          </div>
        </b-collapse>
      </div>
    </div>
    <div id="accordeon-3" class="accrodion">
      <div class="accrodion-inner" @click="accordeon('accordeon-3')">
        <div v-b-toggle.accordion-3 class="accrodion-title">
          <h4>¿Tienen cobertura nacional?</h4>
        </div>
        <b-collapse
          id="accordion-3"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              ¡Si! No importa de donde nos visites nuestra plataforma encontrará
              una oferta crediticia para ti
            </p>
          </div>
        </b-collapse>
      </div>
    </div>
    <div id="accordeon-4" class="accrodion">
      <div @click="accordeon('accordeon-4')" class="accrodion-inner">
        <div class="accrodion-title" v-b-toggle.accordion-4>
          <h4>¿Prestamagico es Mexicano?</h4>
        </div>
        <b-collapse
          id="accordion-4"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              Si, prestamagico es una empresa 100% mexicana, creada por
              mexicanos y para mexicanos.
            </p>
          </div>
        </b-collapse>
      </div>
    </div>
    <!-- <div id="accordeon-4" class="accrodion">
      <div @click="accordeon('accordeon-4')" class="accrodion-inner">
        <div class="accrodion-title" v-b-toggle.accordion-4>
          <h4>¿Puedo ganar solamente 100 doláres?</h4>
        </div>
        <b-collapse
          id="accordion-4"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              ¡Si, puedes ganar más de $100 dólares al mes! Todos los regalos
              que te manden tus espectadores y fans los puedes convertir en
              Ucoins y canjearlos por dólares cuando hagas tu retiro!
            </p>
          </div>
        </b-collapse>
      </div>
    </div>
    <div id="accordeon-5" class="accrodion">
      <div @click="accordeon('accordeon-5')" class="accrodion-inner">
        <div class="accrodion-title" v-b-toggle.accordion-5>
          <h4>¿Cada cuándo me pagan?</h4>
        </div>
        <b-collapse
          id="accordion-5"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              Puedes solicitar tu pago a través de la aplicación en cualquier
              momento después de que acabe el mes
            </p>
          </div>
        </b-collapse>
      </div>
    </div>
    <div id="accordeon-6" class="accrodion">
      <div @click="accordeon('accordeon-6')" class="accrodion-inner">
        <div class="accrodion-title" v-b-toggle.accordion-6>
          <h4>¿Cómo sé cuantas horas ha durado mi transmisión?</h4>
        </div>
        <b-collapse
          id="accordion-6"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              Cuándo estés transmitiendo, verás en la esquina superior derecha
              un contador con el tiempo de tu transmisión.
            </p>
          </div>
        </b-collapse>
      </div>
    </div>
    <div id="accordeon-7" class="accrodion">
      <div @click="accordeon('accordeon-7')" class="accrodion-inner">
        <div class="accrodion-title" v-b-toggle.accordion-7>
          <h4>¿Cómo sé cuantas horas llevo acumuladas?</h4>
        </div>
        <b-collapse
          id="accordion-7"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              Para saber cuántas horas llevas acumuladas en el mes, entra a tu
              perfil de Uplive y selecciona Mi transmisión. Te mostraran las
              horas que llevas acumuladas al mes, así como un resumen de todos
              los streams que hayas hecho y su duración.
            </p>
          </div>
        </b-collapse>
      </div>
    </div>
    <div id="accordeon-8" class="accrodion">
      <div @click="accordeon('accordeon-8')" class="accrodion-inner">
        <div class="accrodion-title" v-b-toggle.accordion-8>
          <h4>¿Qué son las Ucoins?</h4>
        </div>
        <b-collapse
          id="accordion-8"
          visible
          accordion="my-accordion"
          role="tabpanel"
          class="accrodion-content"
        >
          <div class="inner">
            <p>
              Los pagos de Uplive se realizan en Ucoins. ¡No te preocupes! a
              final de mes, Uplive te depositará el equivalente de $100 dólares
              en Ucoins en tu cuenta siempre y cuando hayas cumplido con tus
              horas de transmisión. Para ver cuántas Ucoins tienes acumuladas,
              solo tienes que ir a la sección de "My live Broadcast" dentro de
              tu perfil y luego elegir "Cashout".
            </p>
          </div>
        </b-collapse>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'Accordeon',
  methods: {
    accordeon(id) {
      const items = [
        'accordeon-1',
        'accordeon-2',
        'accordeon-3',
        'accordeon-4',
        // 'accordeon-5',
        // 'accordeon-6',
        // 'accordeon-7',
        // 'accordeon-8',
      ]
      const index = items.indexOf(id)
      const element = document.getElementById(id)

      if (index > -1) {
        items.splice(index, 1)
      }

      for (let i = 0; i < items.length; i++) {
        const ele = document.getElementById(items[i])
        ele.classList.remove('active')
      }

      element.classList.add('active')
    },
  },
}
</script>
<style scoped>
/*
* 11. accrodion styles
*/
.faq-one {
  padding: 0 0 120px;
  position: relative;
}
.faq-one__bg {
  position: absolute;
  bottom: 4%;
  right: 0;
}
.faq-one .container {
  position: relative;
}
@media (min-width: 992px) {
  .faq-one .container {
    max-width: 920px;
  }
}

.faq-accrodion .accrodion {
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.faq-accrodion .accrodion:before {
  content: '';
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 0px;
  right: 0px;
  border-radius: 7px;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ff4eb5),
    to(#ffa065)
  );
  background-image: linear-gradient(0deg, #ff4eb5 0%, #ffa065 100%);
  -webkit-transition: -webkit-transform 0.4s ease;
  transition: -webkit-transform 0.4s ease;
  transition: transform 0.4s ease;
  transition: transform 0.4s ease, -webkit-transform 0.4s ease;
}
.faq-accrodion .accrodion + .accrodion {
  margin-top: 20px;
}
.faq-accrodion .accrodion.active {
  -webkit-box-shadow: 0px 20px 60px 0px rgba(244, 151, 190, 0.3);
  box-shadow: 0px 20px 60px 0px rgba(244, 151, 190, 0.3);
}
.faq-accrodion .accrodion.active .accrodion-inner {
  margin: 0 2px;
}
.faq-accrodion .accrodion.active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.faq-accrodion .accrodion.active .accrodion-title:before {
  content: '-';
  color: #ff4eb5;
}
.faq-accrodion .accrodion.active .accrodion-title {
  padding-bottom: 0;
}
.faq-accrodion .accrodion.active .accrodion-title h4 {
  color: #ff4eb5;
}
.faq-accrodion .accrodion .accrodion-inner {
  background-color: #fff;
  padding: 32px 0;
  border-style: solid;
  border-width: 1px;
  border-color: #efefef;
  border-radius: 7px;
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.faq-accrodion .accrodion .accrodion-title {
  padding: 0px 40px;
  cursor: pointer;
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
@media (max-width: 375px) {
  .faq-accrodion .accrodion .accrodion-title {
    padding-right: 50px;
  }
}
.faq-accrodion .accrodion .accrodion-title:before {
  content: '+';
  /* font-family: 'FontAwesome'; */
  font-size: 14px;
  color: #2a2833;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 40px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.faq-accrodion .accrodion .accrodion-title h4 {
  margin: 0;
  color: #2a2833;
  font-size: 18px;
  font-weight: 500;
}
@media (max-width: 375px) {
  .faq-accrodion .accrodion .accrodion-title h4 {
    line-height: 1.4em;
  }
}
.faq-accrodion .accrodion .accrodion-content .inner {
  padding: 0 40px;
  padding-top: 25px;
  padding-bottom: 0px;
}
.faq-accrodion .accrodion .accrodion-content p {
  margin: 0;
  color: #303030;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}

.img-accordeon {
  width: 75%;
}

@media (min-width: 768px) {
  .img-accordeon {
    width: 50%;
  }
}

@media (min-width: 992px) {
  .img-accordeon {
    width: 30%;
  }
}
</style>
