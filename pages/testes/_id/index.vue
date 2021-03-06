<template>
  <div>
    <h3>
      Teste de ID {{ $route.params.id}}
    </h3>

    <NuxtLink class="btn btn-primary" to="/">Voltar para home</NuxtLink>
    <NuxtLink class="btn btn-primary" to="/testes">Ir para Testes</NuxtLink>
  </div>
</template>
