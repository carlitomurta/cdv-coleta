<template>
  <div>
    <section>
      <div class="container py-8 mx-auto lg:py-12">
        <VueSlickCarousel :arrows="true" :dots="true">
          <div>
            <img
              src="~/static/1.jpg"
              class="object-cover w-full mx-auto h-96"
              alt="1"
            />
          </div>
          <div>
            <img
              src="~/static/2.jpg"
              class="object-cover w-full mx-auto h-96"
              alt="1"
            />
          </div>
          <div>
            <img
              src="~/static/3.jpg"
              class="object-cover w-full mx-auto h-96"
              alt="1"
            />
          </div>
        </VueSlickCarousel>
        <!-- <div class="items-center justify-between block py-16 lg:py-40 lg:flex">
          <div class="w-auto mx-auto mb-4 lg:w-2/3">
            <h1 class="mb-4 text-2xl text-center lg:text-4xl text-brand-green">
              <span class="font-bold">Better</span>
              teams.
              <span class="font-bold">Better</span>
              software<br />
              Exceptional
              <span class="font-bold">growth</span>.
            </h1>
            <h3 class="mb-6 text-base text-center lg:text-lg text-brand-green">
              We are here to help you create and operate great software and have
              fun along the way.
            </h3>
            <nuxt-link
              :to="{ path: '/', hash: 'contact' }"
              class="block w-32 h-10 min-h-0 px-4 py-2 mx-auto font-bold text-center capitalize bg-transparent border rounded shadow-md border-brand-leaf text-brand-leaf hover:border-brand-green hover:text-brand-green"
              type="button"
              role="button"
            >
              See more
            </nuxt-link>
          </div>
        </div> -->
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
              We are a distributed team with developers in the United States and
              Brazil. We specialize in architecture, networking, consulting and
              providing development resources for cloud software. We are happy
              to work with developers, hiring managers, product owners and
              founders.
            </h3>
            <nuxt-link
              :to="{ path: '/', hash: 'contact' }"
              class="h-10 min-h-0 px-4 py-2 font-bold text-center text-white capitalize bg-transparent border border-white rounded shadow-md base-button hover:border-grey-400 hover:text-grey-400"
              type="button"
              role="button"
            >
              See more
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-green-200">
      <div class="container mx-auto">
        <div class="py-16 lg:py-20">
          <h1
            class="mb-12 text-2xl text-center font-head text-grey-400 lg:text-4xl"
          >
            O Que Fazemos
          </h1>
          <div class="justify-center lg:flex">
            <div class="p-8 mb-8 bg-white shadow lg:mr-8 rounded-xl lg:mb-0">
              <img
                class="h-20 mx-auto lg:h-24"
                src="~/static/Consulting.png"
                alt="Consulting Icon"
              />
              <h4 class="mt-6 text-base font-bold text-center text-grey-400">
                Software Consulting
              </h4>
              <p
                class="mt-4 text-sm text-center text-grey-300 dark:text-grey-200"
              >
                We help you to improve your software or your solution
              </p>
              <ul
                class="table mx-auto mt-6 list-disc list-inside text-brand-red"
              >
                <li>
                  <span class="font-bold text-grey-400">Proof of Concept</span>
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >Continuous Delivery</span
                  >
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >Software Architecture</span
                  >
                </li>
                <li>
                  <span class="font-bold text-grey-400">Cloud Strategy</span>
                </li>
              </ul>
            </div>
            <div class="p-8 bg-white shadow rounded-xl lg:mb-0">
              <img
                class="h-20 mx-auto lg:h-24"
                src="~/static/Staff.png"
                alt="Staff Icon"
              />
              <h4 class="mt-6 text-base font-bold text-center text-grey-400">
                Staff Augmentation
              </h4>
              <p class="mt-4 text-sm text-center text-grey-300">
                We meet and hire the best team for your next project
              </p>
              <ul
                class="table mx-auto mt-6 list-disc list-inside text-brand-red"
              >
                <li>
                  <span class="font-bold text-grey-400">UI & UX Design</span>
                </li>
                <li>
                  <span class="font-bold text-grey-400">Production & QA</span>
                </li>
                <li>
                  <span class="font-bold text-grey-400"
                    >IT & Security Compliance</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- <button
            class="block h-12 min-h-0 px-6 mx-auto font-bold text-center capitalize bg-yellow-400 rounded shadow-md base-button text-grey-400 hover:bg-yellow-500"
            type="button"
            role="button"
          >
            {{ $t('letsTalk') }}
          </button> -->
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
              Cadastro de Intenção
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
                  v-model="contact.name"
                  type="text"
                  name="name"
                  autocomplete="off"
                  required
                  placeholder="Nome"
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="name"
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
                    v-model="contact.coletaOnde"
                    type="radio"
                    name="coletaOnde"
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
                    v-model="contact.coletaOnde"
                    type="radio"
                    name="coletaOnde"
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
                    v-model="contact.coletaOnde"
                    type="radio"
                    name="coletaOnde"
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
                    v-model="contact.jaParticipaDaColeta"
                    type="radio"
                    name="jaParticipaDaColeta"
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
                    v-model="contact.jaParticipaDaColeta"
                    type="radio"
                    name="jaParticipaDaColeta"
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
                    v-model="contact.jaParticipaDaColeta"
                    type="radio"
                    name="jaParticipaDaColeta"
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
                    v-model="contact.comoFicouSabendo"
                    type="radio"
                    name="comoFicouSabendo"
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
                    v-model="contact.comoFicouSabendo"
                    type="radio"
                    name="comoFicouSabendo"
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
                    v-model="contact.comoFicouSabendo"
                    type="radio"
                    name="comoFicouSabendo"
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
                    v-model="contact.comoFicouSabendo"
                    type="radio"
                    name="comoFicouSabendo"
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
                    v-model="contact.comoFicouSabendo"
                    type="radio"
                    name="comoFicouSabendo"
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
                    v-model="contact.comoFicouSabendo"
                    type="radio"
                    name="comoFicouSabendo"
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
                    v-model="contact.comoFicouSabendo"
                    type="radio"
                    name="comoFicouSabendo"
                    autocomplete="off"
                    value="6"
                    required
                  />
                  Outro:
                </div>
                <div
                  v-if="contact.comoFicouSabendo == 6"
                  class="relative mb-4 border-2 rounded-lg border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.outro"
                    type="text"
                    name="outro"
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
              <p class="text-sm text-center text-green-500">Sucesso!</p>
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
</style>

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
        name: '',
        email: '',
        celular: '',
        coletaOnde: '',
        jaParticipaDaColeta: '',
        comoFicouSabendo: '',
        outro: '',
      },
      sent: false,
      error: '',
    }
  },
  methods: {
    async sendPostRequest() {
      if (
        !this.contact.name ||
        !this.contact.email ||
        !this.contact.celular ||
        !this.contact.coletaOnde ||
        !this.contact.jaParticipaDaColeta ||
        !this.contact.comoFicouSabendo
      )
        this.error = 'Atenção, você deve informar todos os campos. ;)'
      else {
        this.error = ''
        try {
          await this.$axios.post('contact', this.contact)
          this.sent = true
          this.contact = {
            name: '',
            email: '',
            celular: '',
            coletaOnde: '',
            jaParticipaDaColeta: '',
            comoFicouSabendo: '',
            outro: '',
          }
        } catch (err) {
          this.error = err
        }
      }
    },
  },
})
</script>
