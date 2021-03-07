<template>
  <div>
    <h1>Meu componente</h1>

    <a @click="meuMetodo('texto passado')" href="javascript:void(0)" class="btn btn-warning">{{ variavel }}</a>

    <NuxtLink class="btn btn-primary" to="/testes">Ir para Teste</NuxtLink>

    <a @click="toast('dispara toast')" href="javascript:void(0)" class="btn btn-primary">
      Toast
    </a>

    <a @click="toastSuccess('dispara toast')" href="javascript:void(0)" class="btn btn-success">
      Toast
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
    toastSuccess(texto) {
      this.$toasted.success(texto)
    }
  }
}
</script>

<style>
 h1 {
   color: blue;
 }
</style>
