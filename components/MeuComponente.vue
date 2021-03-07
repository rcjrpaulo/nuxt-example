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
      placeholder="MM/DD/YYYY"
      format="MM/dd/yyyy"
      v-model="date_today" />

    <p>
      valor do datepicker: {{ date_today }}
    </p>

    <hr>

    <a @click="sweetAlert('Teste Sweet Alert')" href="javascript:void(0)" class="btn btn-primary">
      Sweet Alert
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variavel: 'texto',
      date_today:new Date()
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
    }
  }
}
</script>

<style>
 h1 {
   color: blue;
 }
</style>
