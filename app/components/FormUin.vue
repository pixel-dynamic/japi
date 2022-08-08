<template>
  <b-form id="form-uin" @submit.stop.prevent="onSubmit">
    <b-form-group
      id="name"
      label="Nombre(s)"
      label-for="input-name"
      label-size="sm"
    >
      <b-form-input
        id="input-name"
        v-model="form.firstname"
        type="text"
        required
        size="sm"
        placeholder=""
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="lastname"
      label="Apellidos"
      label-for="input-lastname"
      label-size="sm"
    >
      <b-form-input
        id="input-lastname"
        v-model="form.lastname"
        type="text"
        size="sm"
        required
        placeholder=""
      ></b-form-input>
    </b-form-group>
    <b-row>
      <b-col sm="6">
        <b-form-group
          id="phone"
          label="Número de teléfono"
          label-for="input-phone"
          label-size="sm"
        >
          <b-form-input
            id="input-phone"
            v-model="form.phone"
            type="tel"
            size="sm"
            required
            placeholder="a 10 dígitos"
            maxlength="10"
            @keypress="isNumber($event)"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="6">
        <b-form-group
          id="email"
          label="Email"
          label-for="input-email"
          label-size="sm"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            size="sm"
            required
            placeholder=""
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-form-group id="programas">
      <label class="label-select">Programa de interés</label>
      <b-form-select
        id="input-programas"
        v-model="form.programas"
        :options="programas"
        required
        size="sm"
        @change="changePrograms(form.programas)"
      ></b-form-select>
    </b-form-group>
    <b-form-group v-if="form.programas !== null" id="planteles">
      <label class="label-select">Plantel</label>
      <b-form-select
        id="input-planteles"
        v-model="plantel"
        :options="planteles"
        required
        size="sm"
        @change="changePlanteles(plantel)"
      ></b-form-select>
    </b-form-group>
    <b-row>
      <b-col sm="6">
        <b-form-group id="turno">
          <label class="label-select">Turno de preferencia</label>
          <b-form-select
            id="input-turno"
            v-model="form.turno"
            :options="turno"
            required
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="6">
        <b-form-group id="ciclo">
          <label class="label-select">Mes de inicio</label>
          <b-form-select
            id="input-ciclo"
            v-model="form.ciclo_de_interes_declarado"
            :options="ciclo"
            required
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-form-group class="mt-3">
      <b-form-checkbox
        id="checkbox-2"
        v-model="form.terminos_y_condiciones"
        name="checkbox-2"
        :value="true"
        :unchecked-value="false"
        size="sm"
        required
      >
        Acepto el
        <a
          target="_blank"
          href="https://www.universidadinsurgentes.edu.mx/aviso-de-privacidad"
          >aviso de privacidad</a
        >
      </b-form-checkbox>
    </b-form-group>
    <b-row class="justify-content-center mt-3">
      <b-col sm="6" md="9">
        <b-button variant="primary" block pill type="submit">Enviar</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
import { setPlantel } from '../utils/utils'
export default {
  data() {
    return {
      key_plantel: 'planteles_',
      plantel: null,
      programas: [
        {
          value: null,
          text: 'Por favor selecciona un programa',
          disabled: true,
        },
        { value: 'Administracion', text: 'Administración' },
        {
          value: 'Administracion de Tecnologias de la Informacion',
          text: 'Administración de Tecnologías de la Información',
        },
        { value: 'Arquitectura', text: 'Arquitectura' },
        {
          value: 'Ciencias de la Comunicaci_n',
          text: 'Ciencias de la Comunicación',
        },
        { value: 'Comercio Internacional', text: 'Comercio Internacional' },
        { value: 'Contadur_', text: 'Contaduría' },
        { value: 'Criminal_stica', text: 'Criminalística' },
        { value: 'Derecho', text: 'Derecho' },
        { value: 'Dise_o Gr_fico', text: 'Diseño Gráfico' },
        { value: 'Mercadotecnia', text: 'Mercadotecnia' },
        { value: 'Negocios internacionales', text: 'Negocios internacionales' },
        { value: 'Pedagog_a', text: 'Pedagogía SEP' },
        { value: 'Publicidad y Medios', text: 'Publicidad y Medios' },
        {
          value: 'Relaciones internacionales',
          text: 'Relaciones internacionales',
        },
      ],
      planteles: [],
      turno: [
        { value: null, text: 'Por favor selecciona un turno', disabled: true },
        { value: 'VESPERTINO', text: 'VESPERTINO' },
        { value: 'FINES DE SEMANA', text: 'FINES DE SEMANA' },
        { value: 'MIXTO', text: 'MIXTO' },
        { value: 'NOCTURNO', text: 'NOCTURNO' },
        { value: 'SABATINO', text: 'SABATINO' },
        { value: 'EJECUTIVO', text: 'EJECUTIVO' },
      ],
      ciclo: [
        { value: null, text: 'Por favor selecciona un mes', disabled: true },
        { value: 'Enero', text: 'Enero' },
        { value: 'Febrero', text: 'Febrero' },
        { value: 'Marzo', text: 'Marzo' },
        { value: 'Abril', text: 'Abril' },
        { value: 'Mayo', text: 'Mayo' },
        { value: 'Junio', text: 'Junio' },
        { value: 'Julio', text: 'Julio' },
        { value: 'Agosto', text: 'Agosto' },
        { value: 'Septiembre', text: 'Septiembre' },
        { value: 'Octubre', text: 'Octubre' },
        { value: 'Noviembre', text: 'Noviembre' },
        { value: 'Diciembre', text: 'Diciembre' },
      ],
      form: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        turno: null,
        programas: null,
        ciclo_de_interes_declarado: null,
        terminos_y_condiciones: false,
        origen_uin: 'INTERNET ONLINE',
        canales: 'PAID',
        ciclo_uin: '2022-1',
        medios_uin: 'PIXELDYNAMIC',
      },
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
        this.$emit('update', { user: this.form, key_plantel: this.key_plantel })
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
    changePrograms(value) {
      if (this.key_plantel !== 'planteles_') {
        delete this.form[this.key_plantel]
      }
      const newValue = value.toLowerCase()
      const replaced = newValue.split(' ').join('_')
      this.key_plantel = 'planteles_' + replaced

      this.planteles = []
      this.plantel = null
      this.planteles = setPlantel(value, this.planteles)

      this.form[this.key_plantel] = ''
    },
    changePlanteles(plantel) {
      this.form[this.key_plantel] = plantel
    },
  },
}
</script>
<style scoped>
#form-uin .form-group {
  margin-bottom: 0.5rem !important;
}
.label-select {
  font-size: 0.875rem;
}
label {
  margin-bottom: 0 !important;
}
</style>
