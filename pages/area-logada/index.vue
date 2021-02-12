<template>
  <div>
    <h3>Área Logada do usuário</h3>
    <h3>Bem vindo {{ nomeCliente }}</h3>
  </div>
</template>


<style scoped></style>

<script>
import Vue from 'vue'
export default Vue.extend({
  beforeMount() {
    let tokenStorage = JSON.parse(sessionStorage.getItem('cdv'))
    if (
      tokenStorage == null ||
      tokenStorage.token == null ||
      tokenStorage.token == undefined
    )
      this.$router.push((name = '/'))
  },

  data() {
    return {
      nomeCliente: '',
      logado: false,
    }
  },
  mounted() {
    this.obterDadosToken()
  },
  methods: {
    async obterDadosToken() {
      let token = JSON.parse(sessionStorage.getItem('cdv'))
      this.nomeCliente = token.nome
    },
  },
})
</script>