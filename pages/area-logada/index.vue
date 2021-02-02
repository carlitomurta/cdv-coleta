<template>
  <div>
    <h3>Área Logada do usuário</h3>
    <h3>Bem vindo {{ token.nome }}</h3>
  </div>
</template>


<style scoped></style>

<script>
import Vue from 'vue'
export default Vue.extend({
  beforeMount() {
    var token = localStorage.getItem('cdv')
    console.log(token)
    if (token == null || token == undefined) this.$router.push((name = '/'))

    obterDadosToken()
  },
  data() {
    return {}
  },
  methods: {
    async obterDadosToken() {
      let token = localStorage.getItem('cdv')
      console.log(token)
    },
  },
})
</script>