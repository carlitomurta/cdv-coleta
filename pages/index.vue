<template>
  <div>
    <section>
      <div class="container py-8 mx-auto lg:py-12">
        <VueSlickCarousel
          :arrows="false"
          :dots="true"
          :autoplay="true"
          :speed="500"
        >
          <div>
            <img
              src="~/static/1.jpg"
              class="object-cover img-carousel w-full mx-auto h-96"
              alt="1"
            />
          </div>
          <div>
            <img
              src="~/static/2.jpg"
              class="object-cover img-carousel w-full mx-auto h-96"
              alt="1"
            />
          </div>
          <div>
            <img
              src="~/static/3.jpg"
              class="object-cover img-carousel w-full mx-auto h-96"
              alt="1"
            />
          </div>
        </VueSlickCarousel>
      </div>
    </section>

    <section id="about" class="bg-brand-green">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-8 py-16 lg:grid-cols-2 lg:py-20">
          <div class="flex-1 hidden lg:block">
            <img
              class="w-auto h-auto mx-auto"
              src="~/static/recyclage.svg"
              alt="people_at_boat"
            />
          </div>
          <div class="flex-1">
            <h1 class="mb-8 text-2xl text-white font-head lg:text-4xl">
              Sobre Nós
            </h1>
            <h3 class="mb-6 text-base text-white lg:text-xl">
              A Coleta de Vizinhança é uma proposta para gestão comunitária e
              seletiva dos resíduos, fruto da parceria entre a Coopesol Leste a
              Rede Lixo Zero. Pretendemos oferecer um serviço de coleta
              seletiva: acessível aos moradores da região leste de Belo
              Horizonte economicamente sustentável para as cooperativas de
              catadores seguro, pela redução de quaisquer riscos de contaminação
              no trabalho (Botão indicando o campo das medidas de segurança)
              <p>
                Nossa principal ferramenta é a cooperação entre vizinhos e
                catadores. Quando a vizinhança se junta, o trabalho dos
                catadores melhora. Quando o trabalho dos catadores melhora, o
                bem viver é sustentável em vizinhança.
              </p>
            </h3>
            <nuxt-link
              :to="{ path: '/', hash: 'como-funciona' }"
              class="h-10 min-h-0 px-4 py-2 font-bold text-center text-white capitalize bg-transparent border border-white rounded shadow-md base-button hover:border-grey-400 hover:text-grey-400"
              type="button"
              role="button"
            >
              Quer saber como funciona?
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section id="como-funciona" class="bg-green-200">
      <div class="container mx-auto">
        <div class="py-16 lg:py-20">
          <h1
            class="mb-12 text-2xl text-center font-head text-grey-400 lg:text-4xl"
          >
            Como Funciona?
          </h1>
          <h3 class="mb-6 text-base text-grey-400">
            <p>
              a) a coleta é quinzenal e o dia da semana é definido com entre a
              cooperativas e os vizinhos.
            </p>
            <p>
              b) o material é recolhido na porta da sua casa ou do seu prédio.
            </p>
            <p>
              c) para tirar duvidas, trocar impressões e acompanhar a rota, cada
              vizinhança tem um grupo de whatsap.
            </p>
            <p>
              d) a contribuição mensal por residência é de R$ 20,00. Com ele,
              pagamos os custos de logística e remuneramos os catadores da
              Coopesol Leste.
            </p>
            <p>
              e) na adesão de 40 residências em uma vizinhança, o valor cai para
              R$ 15,00.
            </p>
            <p>
              f) na adesão de vários apartamentos em um mesmo prédio,
              conseguimos um desconto de 30% para as residências.
            </p>
          </h3>
        </div>
        <div
          class="grid items-center grid-cols-1 gap-8 py-10 lg:grid-cols-1 lg:py-20"
        >
          <button
            class="block h-12 min-h-0 px-10 mx-auto mt-0 font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
            type="button"
            role="button"
            @click.prevent="toLogin"
          >
            Quer participar?
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.input-md {
  max-width: 500px;
}

.img-carousel {
  border-radius: 1%;
  box-shadow: 3px 3px 1px #bbbb;
}
</style>


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"
integrity="sha384-4a49655bac2f84b11b52fff1661ed50d7f53726f5b60289497c0a1afd738592a4066d5681a8dc4cc27052550d863229e"
crossorigin="anonymous"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCOzvBSowJpO0XUQx4SPtXDM-BEWUEQHcY',
  authDomain: 'coleta-seletiva-leste.firebaseapp.com',
  projectId: 'coleta-seletiva-leste',
  storageBucket: 'coleta-seletiva-leste.appspot.com',
  messagingSenderId: '704258378401',
  appId: '1:704258378401:web:e41785dd50619b6b557ee0',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
</script>

<script>
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
  components: { VueSlickCarousel },
  beforeMount() {
    sessionStorage.removeItem('cdv')
  },
  methods: {
    async toLogin() {
      this.$router.push({ name: 'login' })
    },
  },
})
</script>
