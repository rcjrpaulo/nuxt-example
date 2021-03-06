<template>
  <div>
    <a href="#" class="btn btn-primary">query param teste : {{ $route.query.teste}}</a>

    <NuxtLink class="btn btn-primary" to="/">Voltar para home</NuxtLink>
    <NuxtLink class="btn btn-primary" to="/testes/1">Ir para Teste de id 1</NuxtLink>

    <br>
  </div>
</template>

<script>

export default {

}
</script>
