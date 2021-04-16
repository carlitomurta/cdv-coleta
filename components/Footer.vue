<template>
  <footer class="bg-brand-green">
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-40">
        <p class="text-sm text-white">
          © 2021 Coleta de Vizinhança. Todos os direitos reservados.
        </p>
        <nuxt-link :to="{ path: '/' }" class="mt-4 border-0">
          <img draggable="false" width="120" src="~/static/2.png" alt="brand" />
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<style></style>

<script>
export default {}
</script>
