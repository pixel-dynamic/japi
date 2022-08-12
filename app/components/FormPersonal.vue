<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-form-group>
      <label>Nombre</label>
      <b-form-input
        v-model="form.name"
        class="input-masked"
        type="text"
        placeholder="nombre(s)"
        required
      ></b-form-input>
    </b-form-group>
    <b-row>
      <b-col sm="6">
        <b-form-group>
          <label>Apellido paterno</label>
          <b-form-input
            v-model="form.first_name"
            class="input-masked"
            type="text"
            placeholder="apellido paterno"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="6">
        <b-form-group>
          <label>Apellido materno</label>
          <b-form-input
            v-model="form.last_name"
            class="input-masked"
            type="text"
            placeholder="apellido materno"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-form-group>
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
    <b-form-group>
      <label>Correo electrónico:</label>
      <b-form-input
        v-model="form.email"
        class="input-masked"
        type="email"
        placeholder="ejemplo@mail.com"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group v-if="!showInputs">
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
    <b-row v-if="showInputs">
      <b-col sm="6">
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
      <b-col sm="6">
        <b-form-group>
          <label>Código postal</label>
          <b-form-input
            v-model="form.zipcode"
            v-mask="'#####'"
            class="input-masked"
            type="tel"
            maxlength="5"
            required
            @keypress="isNumber($event)"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="12" class="mb-2">
        <label for="cbx5">Deseo que me contacten por: </label></b-col
      >
      <b-col cols="6">
        <b-form-group class="relative">
          <input
            id="cbx5"
            v-model="form.whatsapp"
            class="inp-cbx"
            type="checkbox"
            name="cbx5"
          />
          <label class="cbx" for="cbx5"
            ><span>
              <svg width="12px" height="9px" viewbox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline></svg></span
            ><span>WhatsApp</span></label
          >
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group class="relative">
          <input
            id="cbx6"
            v-model="form.contactEmail"
            class="inp-cbx"
            type="checkbox"
            name="cbx6"
          />
          <label class="cbx" for="cbx6"
            ><span>
              <svg width="12px" height="9px" viewbox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline></svg></span
            ><span>Email</span></label
          >
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <b-form-group class="relative">
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
    <b-form-group class="relative">
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
    <b-form-group class="relative">
      <input
        id="cbx3"
        v-model="form.emailMKT"
        class="inp-cbx"
        type="checkbox"
        name="cbx3"
      />
      <label class="cbx" for="cbx3"
        ><span>
          <svg width="12px" height="9px" viewbox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline></svg></span
        ><span
          >Acepto que me envién correos electrónicos con ofertas
          personalizadas</span
        ></label
      >
    </b-form-group>
    <b-row class="justify-content-center my-5">
      <b-col cols="auto">
        <b-button type="submit" class="px-4" variant="warning"
          >Ver mis ofertas personalizadas</b-button
        >
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
import { states } from '../utils/utils'
export default {
  data() {
    return {
      isLoading: false,
      showInputs: false,
      form: {
        name: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        date: '',
        zipcode: '',
        state: null,
        contactEmail: false,
        whatsapp: false,
        terms: false,
        privacy: false,
        emailMKT: false,
      },
      options: states,
    }
  },
  created() {
    if (this.$route.path === '/deudas/personal') {
      this.showInputs = true
    }
  },
  methods: {
    onSubmit() {
      if (this.form.phone.length < 10) {
        this.$swal(
          'Aviso',
          'Por favor coloca un teléfono válido a 10 dígitos',
          'warning'
        )
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
  color: rgb(174, 128, 184);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(174, 128, 184);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(174, 128, 184);
}
</style>
