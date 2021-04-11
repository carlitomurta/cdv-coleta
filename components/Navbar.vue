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
            :to="{ path: '/' }"
            class="h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white hover:bg-grey-100 text-grey-400"
          >
            Home
          </nuxt-link>
          <nuxt-link
            :to="{ path: '/', hash: 'about' }"
            class="h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white hover:bg-grey-100 text-grey-400"
          >
            Sobre
          </nuxt-link>
          <nuxt-link
            :to="{ path: '/', hash: 'como-funciona' }"
            class="h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white hover:bg-grey-100 text-grey-400"
          >
            Como Funciona
          </nuxt-link>
          <nuxt-link
            :to="{ path: '/seguranca' }"
            class="h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white hover:bg-grey-100 text-grey-400"
          >
            Medidas de Segurança
          </nuxt-link>
          <nuxt-link
            :to="{ path: '/login' }"
            class="h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white hover:bg-grey-100 text-grey-400"
          >
            Login
          </nuxt-link>
        </div>
      </header>
    </div>
  </div>
</template>

<style scoped></style>

<script>
export default {}
</script>
