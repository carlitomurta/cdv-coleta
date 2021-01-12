<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="items-center justify-between block py-16 lg:py-40 lg:flex">
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
              v-scroll-to="{ el: '#contact' }"
              :to="{ path: '/', hash: 'contact' }"
              class="block w-32 h-10 min-h-0 px-4 py-2 mx-auto font-bold text-center capitalize bg-transparent border rounded shadow-md border-brand-leaf text-brand-leaf hover:border-brand-green hover:text-brand-green"
              type="button"
              role="button"
            >
              See more
            </nuxt-link>
          </div>
        </div>
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
              About Us
            </h1>
            <h3 class="mb-6 text-base text-white lg:text-xl">
              We are a distributed team with developers in the United States and
              Brazil. We specialize in architecture, networking, consulting and
              providing development resources for cloud software. We are happy
              to work with developers, hiring managers, product owners and
              founders.
            </h3>
            <nuxt-link
              v-scroll-to="{ el: '#contact' }"
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
            What we do
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
          class="grid items-center grid-cols-1 gap-8 py-16 lg:grid-cols-2 lg:py-20"
        >
          <div>
            <h1 class="mb-8 text-2xl font-bold text-grey-400 lg:text-4xl">
              Ready for a talk?
            </h1>
            <h3 class="mb-6 text-base text-grey-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel enim
              metus orci urna, venenatis auctor venenatis. Quam faucibus cras
              enim, tincidunt eu nunc proin. Ac lectus magna cras at in sit.
              Ullamcorper id mauris nibh ultrices dignissim feugiat volutpat
              diam tortor.
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
                  >Nome</label
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
                <textarea
                  v-model="contact.message"
                  name="message"
                  rows="5"
                  autocomplete="off"
                  placeholder="Digite uma mensagem"
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                ></textarea>
                <label
                  for="message"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Digite uma mensagem</label
                >
              </div>
              <button
                class="block h-12 min-h-0 px-6 mx-auto mt-8 font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                type="submit"
                role="button"
                @click.prevent="sendPostRequest"
              >
                Enviar
              </button>
            </form>
            <div v-if="sent" class="p-4 mt-4 bg-green-100 rounded-lg">
              <p class="text-sm text-center text-green-500">Sucesso!</p>
            </div>
            <div v-if="error" class="p-4 bg-red-100 rounded-lg">
              <p class="text-sm text-center text-red-500">{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: '',
      },
      sent: false,
      error: '',
    }
  },
  methods: {
    async sendPostRequest() {
      try {
        if (this.contact.name && this.contact.email) {
          await this.$axios.post('contact', this.contact)
          this.sent = true
          this.contact = {
            name: '',
            email: '',
            message: '',
          }
        }
      } catch (err) {
        this.error = `${err.status} There was an error saving your contact`
      }
    },
  },
})
</script>
