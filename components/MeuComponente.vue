<template>
  <div>
    <h1>Meu componente</h1>

    <a @click="meuMetodo('texto passado')" href="javascript:void(0)" class="btn btn-warning">{{ variavel }}</a>

    <NuxtLink class="btn btn-primary" to="/testes">Ir para Teste</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      variavel: 'texto'
    }
  },
  methods: {
    meuMetodo: (texto) => {
      alert(texto)
    }
  }
}
</script>

<style>
 h1 {
   color: blue;
 }
</style>
