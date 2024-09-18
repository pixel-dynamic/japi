<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-form-group v-if="!born">
      <label>Telefono:</label>
      <b-form-input
        v-model="form.phone"
        class="input-masked"
        type="tel"
        placeholder="celular a 10 dígitos"
        required
        maxlength="10"
        @keypress="isNumber($event)"
      ></b-form-input>
    </b-form-group>
    <b-form-group v-if="!born">
      <label>Correo electrónico:</label>
      <b-form-input
        v-model="form.email"
        class="input-masked"
        type="email"
        placeholder="ejemplo@mail.com"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group v-if="born">
      <label>Fecha de nacimiento:</label>
      <b-form-input
        v-model="form.date"
        v-mask="'##/##/####'"
        class="input-masked"
        type="tel"
        placeholder="dd/mm/aaaa"
        required
      ></b-form-input>
    </b-form-group>
    <b-row v-if="born">
      <b-col sm="12">
        <b-form-group>
          <label>Estado donde vives:</label>
          <b-form-select
            v-model="form.state"
            class="input-masked"
            :options="options"
            required
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <b-form-group v-if="!born" class="relative">
      <input
        id="cbx"
        v-model="form.terms"
        class="inp-cbx"
        type="checkbox"
        name="cbx"
      />
      <label class="cbx" for="cbx">
        <span>
          <svg width="9px" height="9px" viewbox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline></svg></span><div class="d-inline pl-3">Acepto
          <nuxt-link style="color: #e0a800" target="_blank" to="/privacidad">
            el aviso de privacidad,
          </nuxt-link>
          <nuxt-link style="color: #1b68f8" target="_blank" to="/terminos">
            términos y condiciones
          </nuxt-link>
          <div class="d-inline" style="color: black">y la suscripción y recepción de promociones de japi</div>
      </div>
      </label>
    </b-form-group>
    <b-row class="justify-content-center mt-5 mb-3">
      <b-col cols="auto">
        <b-button type="submit" class="px-4" variant="warning" :disabled="!(form.email && form.phone && form.terms)"
          >Continuar</b-button
        >
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
import { states } from '../utils/utils'
export default {
  props: {
    born: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: false,
      form: {
        phone: '',
        email: '',
        date: '',
        state: null,
        terms: false,
        privacy: true,
        check: true,
      },
      options: states,
    }
  },
  methods: {
    sendElementToList() {
      console.log(process.env.baseUrl+'/api/element');
      this.$axios
        .post(process.env.baseUrl+'/api/element', {
          email: this.form.email,
          phone: this.form.phone,
          date: this.form.date,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    onSubmit() {
      if (!this.born && this.form.phone.length < 10) {
        console.log("No pasa validacion")
        this.$swal(
          'Aviso',
          'Por favor coloca un teléfono válido a 10 dígitos',
          'warning'
        )
        return;
      }

      if (this.$route.path === '/prestamos/path/step-one') {
        this.sendElementToList();
      }
      this.$emit('update', this.form);
    },
    isNumber(evt) {
      evt = evt || window.event
      const charCode = evt.which ? evt.which : evt.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault()
      } else {
        return true
      }
    },
  },
  mounted() {
    const my_state =  this.$store.state.newLoan
    this.form.phone = my_state.user.phone
    this.form.email = my_state.user.email
    this.form.privacy = my_state.user.privacy
    this.form.terms = my_state.user.terms
  }
}
</script>
<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(44, 80, 200);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(44, 80, 200);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(44, 80, 200);
}
label {
  font-size: 12px;
}
</style>
