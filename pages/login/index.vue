<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div
          class="grid items-center grid-cols-1 gap-8 py-16 lg:grid-cols-1 lg:py-20"
        >
          <form>
            <div
              class="relative input-md mb-4 mx-auto border-2 rounded-lg outline border-grey-200 focus-within:border-black"
            >
              <input
                v-model="login.email"
                type="text"
                name="email"
                autocomplete="off"
                placeholder="E-mail"
                required
                class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
              />
              <label
                for="email"
                class="absolute top-0 p-4 text-sm duration-300 bg-white -z-1 origin-0"
                >E-mail</label
              >
            </div>
            <div
              class="relative input-md mb-4 mx-auto border-2 rounded-lg outline border-grey-200 focus-within:border-black"
            >
              <input
                v-model="login.senha"
                type="password"
                name="senha"
                maxlength="8"
                autocomplete="off"
                placeholder="Senha"
                required
                class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
              />
              <label
                for="senha"
                class="absolute top-0 p-4 text-sm duration-300 bg-white -z-1 origin-0"
                >Senha</label
              >
            </div>

            <button
              class="block h-12 min-h-0 px-10 mx-auto mt-8 font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
              type="submit"
              role="button"
              @click.prevent="sendPostRequest"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
    <section>
      <div></div>
    </section>
  </div>
</template>

<style scoped>
.input-md {
  max-width: 300px;
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      login: {
        email: '',
        senha: '',
      },
      sent: false,
      error: '',
    }
  },
})
</script>