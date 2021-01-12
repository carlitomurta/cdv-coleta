<template>
  <div>
    <div class="container mx-auto">
      <header class="flex items-center justify-between h-16 pt-4">
        <!-- BRAND LOGO -->
        <nuxt-link :to="{ path: '/' }" class="mt-4 border-0">
          <img
            draggable="false"
            width="120"
            src="~/static/icon.png"
            alt="brand"
          />
        </nuxt-link>
        <div class="flex items-center">
          <nuxt-link
            v-scroll-to="{ el: '#about' }"
            :to="{ path: '/', hash: 'about' }"
            class="h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white hover:bg-grey-100 hover:underline text-grey-400"
          >
            Sobre
          </nuxt-link>
          <nuxt-link
            v-scroll-to="{ el: '#contact' }"
            :to="{ path: '/', hash: 'contact' }"
            class="h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white hover:bg-grey-100 hover:underline text-grey-400"
          >
            Contato
          </nuxt-link>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
