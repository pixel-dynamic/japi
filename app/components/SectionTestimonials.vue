<template>
  <section class="bg-home py-5">
    <b-container class="pt-5">
      <b-row>
        <b-col>
          <h3 class="text-center text-white">¿Qué dicen nuestros clientes?</h3>
        </b-col>
      </b-row>
    </b-container>
    <div class="container container--testimonials py-5">
      <div class="testimonial">
        <p class="testimonial__text mb-25">
          Lo mejor de la
          <span class="quote--highlight bold">Universidad Kuepa</span> es que
          todas las clases se quedan grabadas, cuándo no podía llegar a la clase
          podía retomarla cuándo quisiera y desde cualquier dispositivo.
        </p>

        <div class="testimonial__details">
          <div class="testimonial__img">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Timmy Dicki"
            />
          </div>
          <div class="testimonial__info">
            <h4 class="testimonial__name">Héctor Santos</h4>
            <h5 class="testimonial__job">Estudiante</h5>
          </div>
        </div>
      </div>

      <div class="testimonial">
        <p class="testimonial__text mb-25">
          Las clases en línea realmente me ayudaron para poder obtener mi
          carrera ya que yo estudiaba y trabajaba. La Universidad Kuepa me
          ofreció una oportunidad bastante alcanzable en cuanto a costo para
          poder lograr mi licenciatura en derecho.
        </p>

        <div class="testimonial__details">
          <div class="testimonial__img">
            <img
              src="https://images.unsplash.com/photo-1583664426440-daef00e4ad6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Valerie King"
            />
          </div>
          <div class="testimonial__info">
            <h4 class="testimonial__name">Fabiola Fonseca</h4>
            <h5 class="testimonial__job">Estudiante</h5>
          </div>
        </div>
      </div>
      <div class="testimonial">
        <p class="testimonial__text mb-25">
          El tiempo que dura la carrera es súper cómodo. Sobre todo para
          nosotros que estamos trabajando. Kuepa fue una excelente opción que se
          acomodaba a mis necesidades.
        </p>

        <div class="testimonial__details">
          <div class="testimonial__img">
            <img
              src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Terrell O'Keefe"
            />
          </div>
          <div class="testimonial__info">
            <h4 class="testimonial__name">Cristian Hernández</h4>
            <h5 class="testimonial__job">Marketing Professional</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
img {
  max-width: 100%;
  vertical-align: bottom;
}

.testimonial {
  background-color: hsl(219, 30%, 18%);
  border-radius: 5px;
  padding: 40px 25px 25px;
  flex-grow: 1;
  flex-basis: 280px;
  max-width: 360px;
  position: relative;
}
.testimonial__text {
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 21px;
  margin-bottom: 1.5625rem;
  color: aliceblue;
}
.testimonial__job {
  font-weight: normal;
  font-size: 0.5rem;
  line-height: 10px;
  letter-spacing: 0.5px;
  color: aliceblue;
}
.testimonial__name {
  font-weight: bold;
  font-size: 0.625rem;
  line-height: 12px;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  color: aliceblue;
}
.testimonial__img {
  display: inline-block;
  width: 60px;
  margin-right: 10px;
}
.testimonial__img img {
  vertical-align: bottom;
  border-radius: 50%;
}
.testimonial__info {
  display: inline-block;
}

.container--testimonials {
  display: flex;
  flex-wrap: wrap;
  gap: 25px 40px;
  justify-content: center;
  padding: 45px 45px 90px;
}
@media (min-width: 78.125em) {
  .container--testimonials {
    padding: 0;
    max-width: 1160px;
  }
}
</style>
