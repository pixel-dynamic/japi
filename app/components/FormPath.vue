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
      <label class="cbx" for="cbx"
        ><span>
          <svg width="12px" height="9px" viewbox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline></svg></span
        ><span
          >Acepto los
          <nuxt-link style="color: #e0a800" target="_blank" to="/terminos"
            >términos y condiciones</nuxt-link
          ></span
        ></label
      >
    </b-form-group>
    <b-form-group v-if="!born" class="relative">
      <input
        id="cbx2"
        v-model="form.privacy"
        class="inp-cbx"
        type="checkbox"
        name="cbx2"
        required
      />
      <label class="cbx" for="cbx2"
        ><span>
          <svg width="12px" height="9px" viewbox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline></svg></span
        ><span
          >Acepto el
          <nuxt-link style="color: #e0a800" target="_blank" to="/privacidad"
            >aviso de privacidad</nuxt-link
          ></span
        ></label
      >
    </b-form-group>
    <b-form-group v-if="!born" class="relative">
      <input
        id="cbx3"
        v-model="form.check"
        class="inp-cbx"
        type="checkbox"
        name="cbx3"
      />
      <label class="cbx" for="cbx3"
        ><span>
          <svg width="12px" height="9px" viewbox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline></svg></span
        ><span
          >Acepto recibir ofertas por correo electrónico. (opcional)</span
        ></label
      >
    </b-form-group>
    <b-row class="justify-content-center mt-5 mb-3">
      <b-col cols="auto">
        <b-button type="submit" class="px-4" variant="warning"
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
        privacy: false,
        check: false,
      },
      options: states,
    }
  },
  methods: {
    onSubmit() {
      if (!this.born) {
        if (this.form.phone.length < 10) {
          this.$swal(
            'Aviso',
            'Por favor coloca un teléfono válido a 10 dígitos',
            'warning'
          )
        } else {
          this.$emit('update', this.form)
        }
      } else {
        this.$emit('update', this.form)
      }
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
</style>
