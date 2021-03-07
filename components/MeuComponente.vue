<template>
  <div>
    <h1>Meu componente</h1>

    <hr>

    <NuxtLink class="btn btn-primary" to="/testes">Ir para Teste</NuxtLink>

    <hr>

    <a @click="toast('Toast normal')" href="javascript:void(0)" class="btn btn-primary">
      Toast normal
    </a>

    <a @click="toastInfo('Toast Info')" href="javascript:void(0)" class="btn btn-primary">
      Toast Info
    </a>

    <a @click="toastSuccess('Toast Sucesso')" href="javascript:void(0)" class="btn btn-success">
      Toast Sucesso
    </a>

    <a @click="toastError('Toast Erro')" href="javascript:void(0)" class="btn btn-danger">
      Toast Erro
    </a>

    <hr>

    <date-picker
      input-class="form-control"
      placeholder="MM/DD/YYYY"
      format="MM/dd/yyyy"
      v-model="date_today" />

    <p>
      valor do datepicker: {{ date_today }}
    </p>

    <p>
      valor do moment... : {{ $moment(date_today).format('DD/MM/YYYY') }}
    </p>
    <hr>

    <a @click="sweetAlert('Teste Sweet Alert')" href="javascript:void(0)" class="btn btn-primary">
      Sweet Alert
    </a>

    <hr>

    <vue-slider ref="slider" v-model="slider_value"></vue-slider>
    <p>
      Valor do slider: {{ slider_value }}
    </p>

    <hr>
    <a @click="vueNotification('Vue Notification')" href="javascript:void(0)" class="btn btn-primary">
      Vue Notification
    </a>

    <hr>
    <multiselect v-model="value" :options="options"></multiselect>

    <hr>
    <span>v-money</span>
    <money
      class="form-control"
      v-model="valor"
      v-bind="money"
      name="valor"
      id="valor"
      placeholder="Valor"
    />
    <br>
    <span>v-money valor: {{ valor }}</span>

    <hr>
    <span>v-mask data ....</span>
    <input class="form-control" type="text" v-mask="'##/##/####'" v-model="maskdata">
    <br>
    <span>v-mask celular</span>
    <input class="form-control" type="text" v-mask="'(##) ######-####'" v-model="maskcelular">

    <hr>
    <p>Highcharts</p>
    <highcharts :options="chartOptions"></highcharts>

    <hr>
    <p>Checa CPF é válido</p>
    <input type="text" class="form-control" v-model="cpf_number">
    <a @click="checkCpfIsValid" href="javascript:void(0)" class="btn btn-primary">Validar</a>
    <p :class="cpf_is_valid ? 'text-success' : 'text-danger'">{{ cpf_is_valid ? 'VÁLIDO' : 'INVÁLIDO'}}</p>

  </div>
</template>

<script>
import {cpf} from "cpf-cnpj-validator";

export default {

  data() {
    return {
      variavel: 'texto',
      date_today: new Date(),
      value: null,
      options: ['list', 'of', 'options'],
      slider_value: 0,
      maskdata: '',
      maskcelular: '',
      cpf_number: '',
      cpf_is_valid: false,
      valor: '',
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      },
      chartOptions: {
        series: [{
          data: [1,2,3] // sample data
        }]
      }
    }
  },
  methods: {
    meuMetodo(texto) {
      alert(texto)
    },
    toast(texto) {
      this.$toasted.show(texto)
    },
    toastInfo(texto) {
      this.$toasted.info(texto)
    },
    toastSuccess(texto) {
      this.$toasted.success(texto)
    },
    toastError(texto) {
      this.$toasted.error(texto)
    },
    sweetAlert(texto) {
      this.$swal(texto);
    },
    vueNotification(text) {
      this.$notify(text);
    },
    checkCpfIsValid() {
      this.cpf_is_valid = cpf.isValid(this.cpf_number)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style>
 h1 {
   color: blue;
 }
</style>

