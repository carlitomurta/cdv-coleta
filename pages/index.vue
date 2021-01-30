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
          <!-- <div class="justify-center lg:flex">
            <div class="p-8 mb-8 bg-white shadow lg:mr-8 rounded-xl lg:mb-0">
              <img
                class="h-20 mx-auto lg:h-24"
                src="~/static/Consulting.png"
                alt="Consulting Icon"
              />
              <h4 class="mt-6 text-base font-bold text-center text-grey-400">
                Plano I
              </h4>
              <p
                class="mt-4 text-sm text-center text-grey-300 dark:text-grey-200"
              >
                Ideal para menos de 40 residências
              </p>
              <ul
                class="table mx-auto mt-6 list-disc list-inside text-brand-red"
              >
                <li>
                  <span class="font-bold text-grey-400">R$ 20,00/mês</span>
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >Horário de recolhimento</span
                  >
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >Formas de pagamento</span
                  >
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >Dicas de armazenagem</span
                  >
                </li>
              </ul>
              <div>
                <nuxt-link
                  :to="{ path: '/login' }"
                  class="block h-6 min-h-0 px-10 mx-auto mt-4 text-center text-white capitalize rounded shadow-md bg-brand-green"
                >
                  Contratar
                </nuxt-link>
              </div>
            </div>
            <div class="p-8 bg-white shadow rounded-xl lg:mb-0">
              <img
                class="h-20 mx-auto lg:h-24"
                src="~/static/Staff.png"
                alt="Staff Icon"
              />
              <h4 class="mt-6 text-base font-bold text-center text-grey-400">
                Plano II
              </h4>
              <p class="mt-4 text-sm text-center text-grey-300">
                Ideal para 40 residências ou mais
              </p>
              <ul
                class="table mx-auto mt-6 list-disc list-inside text-brand-red"
              >
                <li>
                  <span class="font-bold text-grey-400">R$ 15,00/mês</span>
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >Horário de recolhimento</span
                  >
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >Formas de pagamento</span
                  >
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >Dicas de armazenagem</span
                  >
                </li>
              </ul>
              <div>
                <nuxt-link
                  :to="{ path: '/login' }"
                  class="block h-6 min-h-0 px-10 mx-auto mt-4 text-center text-white capitalize rounded shadow-md bg-brand-green"
                >
                  Contratar
                </nuxt-link>
              </div>
            </div>
          </div> -->
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

    <section id="contact" class="bg-green-100">
      <div class="container mx-auto">
        <div
          class="grid items-center grid-cols-1 gap-8 py-16 lg:grid-cols-1 lg:py-20"
        >
          <div>
            <h1 class="mb-8 text-2xl font-bold text-grey-400 lg:text-4xl">
              Medidas de Segurança
            </h1>
            <h3 class="mb-6 text-base text-grey-400">
              A Coopesol Leste e a Rede Lixo Zero Santa Tereza propõe a
              realização de uma coleta que seja segura e sustentável, a partir
              de uma nova forma de organização das rotas🚚. Para isso, estamos
              construindo uma alternativa com os moradores dos bairros da
              Regional Leste 🙋🏽‍♀️🙋🏽‍♂️🤝🏽.
              <p>
                Quem tiver interesse pela coleta seletiva, pedimos que preencha
                esse breve formulário ✍🏽. Nossa proposta inicial é formar rotas
                quinzenais com grupos de pessoas que moram próximas umas as
                outras.
              </p>
            </h3>
          </div>
          <div class="p-8 bg-white rounded-lg shadow">
            <form>
              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="contact.nome"
                  type="text"
                  name="nome"
                  autocomplete="off"
                  required
                  placeholder="Nome"
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="nome"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white -z-1 origin-0"
                  >Nome Completo</label
                >
              </div>
              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="contact.email"
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
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="contact.celular"
                  type="text"
                  name="celular"
                  maxlength="15"
                  autocomplete="off"
                  placeholder="Celular"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="celular"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Celular</label
                >
              </div>
              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="contact.bairro"
                  type="text"
                  name="bairro"
                  maxlength="15"
                  autocomplete="off"
                  placeholder="Bairro"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="bairro"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Bairro</label
                >
              </div>
              <section>
                <strong>Para onde você deseja a coleta?</strong>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.DesejoDaColeta"
                    type="radio"
                    name="DesejoDaColeta"
                    autocomplete="off"
                    value="0"
                    required
                  />
                  Para sua casa
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.DesejoDaColeta"
                    type="radio"
                    name="DesejoDaColeta"
                    autocomplete="off"
                    value="1"
                    required
                  />
                  Para seu apartamento
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.DesejoDaColeta"
                    type="radio"
                    name="DesejoDaColeta"
                    autocomplete="off"
                    value="2"
                    required
                  />
                  Para seu prédio (marque essa opção caso existam pelo menos
                  quatro aptos interessados em seu prédio)
                </div>
              </section>
              <section>
                <strong
                  >Você participa do Programa Lixo Zero Residencial da Rede Lixo
                  Zero Santa Tereza?</strong
                >

                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ParticipaDoProgramaLixoZero"
                    type="radio"
                    name="ParticipaDoProgramaLixoZero"
                    autocomplete="off"
                    value="1"
                    required
                  />
                  Sim
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ParticipaDoProgramaLixoZero"
                    type="radio"
                    name="ParticipaDoProgramaLixoZero"
                    autocomplete="off"
                    value="0"
                    required
                  />
                  Não
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ParticipaDoProgramaLixoZero"
                    type="radio"
                    name="ParticipaDoProgramaLixoZero"
                    autocomplete="off"
                    value="2"
                    required
                  />
                  Não sei dizer
                </div>
              </section>
              <section>
                <strong>Como ficou sabendo da Coleta de Vizinhança?</strong>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ComoFicouSabendoDaColetaDeVizinhanca"
                    type="radio"
                    name="ComoFicouSabendoDaColetaDeVizinhanca"
                    autocomplete="off"
                    value="0"
                    required
                  />
                  Amigos(as)
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ComoFicouSabendoDaColetaDeVizinhanca"
                    type="radio"
                    name="ComoFicouSabendoDaColetaDeVizinhanca"
                    autocomplete="off"
                    value="1"
                    required
                  />
                  Vizinho(as)
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ComoFicouSabendoDaColetaDeVizinhanca"
                    type="radio"
                    name="ComoFicouSabendoDaColetaDeVizinhanca"
                    autocomplete="off"
                    value="2"
                    required
                  />
                  Facebook
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ComoFicouSabendoDaColetaDeVizinhanca"
                    type="radio"
                    name="ComoFicouSabendoDaColetaDeVizinhanca"
                    autocomplete="off"
                    value="3"
                    required
                  />
                  Instagram
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ComoFicouSabendoDaColetaDeVizinhanca"
                    type="radio"
                    name="ComoFicouSabendoDaColetaDeVizinhanca"
                    autocomplete="off"
                    value="4"
                    required
                  />
                  Portal Santa Tereza Tem
                </div>
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ComoFicouSabendoDaColetaDeVizinhanca"
                    type="radio"
                    name="ComoFicouSabendoDaColetaDeVizinhanca"
                    autocomplete="off"
                    value="5"
                    required
                  />
                  Youtube
                </div>

                <div
                  class="relative mb-4 border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ComoFicouSabendoDaColetaDeVizinhanca"
                    type="radio"
                    name="ComoFicouSabendoDaColetaDeVizinhanca"
                    autocomplete="off"
                    value="6"
                    required
                  />
                  Outro:
                </div>
                <div
                  v-if="contact.ComoFicouSabendoDaColetaDeVizinhanca == 6"
                  class="relative mb-4 border-2 rounded-lg border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.ComoFicouSabendoOutro"
                    type="text"
                    name="ComoFicouSabendoOutro"
                    autocomplete="off"
                    required
                    class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                  />
                </div>
              </section>
              <button
                class="block h-12 min-h-0 px-6 mx-auto mt-8 font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                type="submit"
                role="button"
                @click.prevent="sendPostRequest"
              >
                Cadastrar
              </button>
            </form>
            <div v-if="sent" class="p-4 mt-4 bg-green-100 rounded-lg">
              <p class="text-sm text-center text-green-500">
                Sucesso! Recebemos seu cadastro, em breve faremos contato.
              </p>
            </div>
            <div v-if="error" class="p-4 mt-4 bg-red-100 rounded-lg">
              <p class="text-sm text-center text-red-500">
                {{ error }}
              </p>
            </div>
          </div>
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
  data() {
    return {
      contact: {
        nome: '',
        email: '',
        celular: '',
        bairro: '',
        DesejoDaColeta: '',
        ParticipaDoProgramaLixoZero: '',
        ComoFicouSabendoDaColetaDeVizinhanca: '',
        ComoFicouSabendoOutro: '',
      },
      sent: false,
      error: '',
    }
  },
  methods: {
    async sendPostRequest() {
      if (
        !this.contact.nome ||
        !this.contact.email ||
        !this.contact.celular ||
        !this.contact.bairro ||
        !this.contact.DesejoDaColeta ||
        !this.contact.ParticipaDoProgramaLixoZero ||
        !this.contact.ComoFicouSabendoDaColetaDeVizinhanca
      )
        this.error = 'Atenção, você deve informar todos os campos. ;)'
      else {
        this.error = ''
        console.log(this.contact)
        try {
          await this.$axios.post(
            'http://localhost:53495/coleta-seletiva/v1/clientes/intencao',
            this.contact
          )
          this.sent = true
          this.contact = {
            nome: '',
            email: '',
            celular: '',
            bairro: '',
            DesejoDaColeta: '',
            ParticipaDoProgramaLixoZero: '',
            ComoFicouSabendoDaColetaDeVizinhanca: '',
            ComoFicouSabendoOutro: '',
          }
        } catch (err) {
          this.error = err
        }
      }
    },
    async toLogin() {
      this.$router.push({ name: 'login' })
    },
  },
})
</script>
