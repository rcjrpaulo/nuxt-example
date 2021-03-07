<template>
  <div>
    <h1>Meu componente</h1>

    <a @click="meuMetodo('texto passado')" href="javascript:void(0)" class="btn btn-warning">{{ variavel }}</a>

    <NuxtLink class="btn btn-primary" to="/testes">Ir para Teste</NuxtLink>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      variavel: 'texto',
      date_today: null
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
    }
  }
}
</script>

<style>
 h1 {
   color: blue;
 }
</style>
