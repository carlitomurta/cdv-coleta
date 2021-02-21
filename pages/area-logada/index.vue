<template>
  <div>
    <section v-if="passo == 1" class="mb-2 bg-green-200">
      <div class="container mx-auto mt-8">
        <h1 class="mb-2">
          Bem vindo(a),<strong> {{ nomeCliente }}.</strong>
        </h1>
        <h1 class="mb-6 text-2xl font-head text-grey-400 lg:text-4xl">
          Informações da coleta na sua vizinhança
        </h1>
        <h3 class="mb-6 text-base text-grey-400">
          <h1>Coletamos esses materiais:</h1>
          <p>
            <strong>Papel:</strong> jornal, revista, caderno, livro, papelão,
            caixa de sapato, caixa de sabão em pó, caixa de leite ou suco, rolo
            de papel (higiênico, papel alumínio ou de plástico filme), saco de
            pão, papel propaganda de supermercado, caixa de remédio, caixa de
            congelados, caixa de pizza (sem estar suja de gordura) boleto de
            cobrança, propaganda política, panfletos em geral.
          </p>
          <p>
            <strong>Plástico:</strong> garrafa de refri, de óleo, de suco, de
            vinagre, de água, galão de água, garrafa de água sanitária,
            embalagem de shampoo, garrafas de álcool em gel e produtos de
            limpeza, plástico de embalagens de papel higiênico, de pão de forma,
            de batatinha frita congelada. Sacolinhas de supermercado, embalagens
            de manteiga, margarina, maionese, creamcheese, achocolatados,
            sorvetes. Cadeira de plástico quebrada ou mesa, potes quebrados,
            canudinhos, brinquedos quebrados, desodorante rollon. Vaso de planta
            de plástico, tampinhas de garrafa em geral, tampinhas de cremes e
            tampinha de pomadas.
          </p>
          <p>
            <strong>Metal:</strong> latinhas de cerveja ou refri, lata de
            conserva em geral, lata de leite em pó ou achocolatado, panela
            velha, marmitex de alumínio (limpo), desodorante spray e qualquer
            embalagem aerossol, sprays em geral, lata de tinta vazia.
          </p>
          <p>
            <strong>Vidro:</strong> garrafas em geral, vidros de perfume, vidros
            de conserva em geral.
          </p>

          <h1 class="mt-4">Evitar:</h1>
          <h3 class="mb-6 text-base text-grey-400">
            <p>
              <strong>Papel:</strong> papéis engordurados, caixas de ovo ou
              papel fotográfico.
            </p>
            <p>
              <strong>Plástico:</strong> caixas de ovo de plástico ou isopor e
              hortifruti q vem em embalagens de plástico, isopor de alimento,
              acrílico, embalagens metalizadas de biscoito ou chips, embalagens
              de alguns iogurtes (como leite fermentados), garrafa pet rosa ou
              vermelha.
            </p>
            <p>
              <strong>Vidro:</strong> espelhos quebrados ou vidro temperado
              quebrado.
            </p>
            <br />
            <p>
              Ninguém é obrigado a saber tudo que é reciclável e o que não é ,
              vamos aprendendo... Na dúvida, coloca no reciclável e vamos
              aprendendo juntos nos grupos de vizinhança.Qualquer dúvida, tamo
              aí!
            </p>
          </h3>
        </h3>
        <div>
          <button
            class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
            type="button"
            role="button"
            @click.prevent="mudarPasso"
          >
            OK! Prosseguir
          </button>
        </div>
      </div>
    </section>
    <section v-if="passo == 2" class="bg-brand-green">
      <div class="container mx-auto mt-8">
        <div>
          <h1
            class="mb-6 text-center text-2xl font-head text-white lg:text-4xl"
          >
            Formulário de Adesão
          </h1>
          <h3 class="mb-6 text-base text-white">
            <h1>
              Para a adesão de sua casa ou de seu apartamento, preencha este
              formulário. O preço atual é de R$ (dinâmico) reais.
            </h1>
            <p>
              Caso a adesão seja do seu prédio ou do seu condomínio, preencha
              esse formulário. A depender do número de pessoas, conseguimos um
              desconto de 30% por residência.
            </p>
            <p>
              Para tirar dúvidas, você pode entrar em contato pelos seguintes
              números de whatsap.
            </p>
          </h3>
          <div class="p-8 bg-white rounded-lg shadow">
            <form>
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
              <div
                v-if="contact.DesejoDaColeta != 2"
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="contact.cpf"
                  type="text"
                  name="cpf"
                  maxlength="15"
                  autocomplete="off"
                  placeholder="CPF"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="cpf"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >CPF</label
                >
              </div>
              <div
                v-if="contact.DesejoDaColeta == 2"
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="contact.cnpj"
                  type="text"
                  name="cnpj"
                  maxlength="15"
                  autocomplete="off"
                  placeholder="CNPJ"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="cnpj"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >CNPJ</label
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
                  v-model="contact.endereco"
                  type="text"
                  name="endereco"
                  maxlength="15"
                  autocomplete="off"
                  placeholder="Endereco"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="endereco"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Endereço</label
                >
              </div>
              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="contact.numeroEndereco"
                  type="text"
                  name="numeroEndereco"
                  maxlength="15"
                  autocomplete="off"
                  placeholder="Numero"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="numeroEndereco"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Número</label
                >
              </div>
              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="contact.complemento"
                  type="text"
                  name="complemento"
                  maxlength="15"
                  autocomplete="off"
                  placeholder="Complemento"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="complemento"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Complemento</label
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
                <strong
                  >Gostaria de participar do grupo de WhatsApp que será criado
                  para organizar a coleta?</strong
                >
                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.participarDoWhatsapp"
                    type="radio"
                    name="participarDoWhatsapp"
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
                    v-model="contact.participarDoWhatsapp"
                    type="radio"
                    name="participarDoWhatsapp"
                    autocomplete="off"
                    value="0"
                    required
                  />
                  Não
                </div>
              </section>
              <section>
                <strong
                  >Já realiza a separação dos resíduos recicláveis em sua
                  casa?</strong
                >

                <div
                  class="relative mb-4 outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="contact.jaSeparaReciclavel"
                    type="radio"
                    name="jaSeparaReciclavel"
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
                    v-model="contact.jaSeparaReciclavel"
                    type="radio"
                    name="jaSeparaReciclavel"
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
                    v-model="contact.jaSeparaReciclavel"
                    type="radio"
                    name="jaSeparaReciclavel"
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
            <button
              class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
              type="button"
              role="button"
              @click.prevent="mudarPasso"
            >
              Salvar e Continuar
            </button>
          </div>
        </div>
      </div>
    </section>
    <section v-if="passo == 3" class="bg-green-100">
      <div class="container mx-auto mt-8">
        <div>
          <h1
            class="mb-6 text-center text-2xl font-head text-grey-400 lg:text-4xl"
          >
            Formas de Pagamento
          </h1>
          <div class="mb-6 text-base text-grey-400">
            <h1>Periodicidade do pagamento:</h1>
            <select
              class="absolute p-2 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
              name=""
            >
              <option value="0"></option>
              <option value="1">
                Mensal (taxa de R$ 2,00 para emissão de boleto)
              </option>
              <option value="2">
                Bimestral (taxa de R$ 2,00 para emissão de boleto)
              </option>
              <option value="3">
                Trimestral (sem cobrança de taxa para emissão)
              </option>
            </select>
          </div>
          <div class="mb-6 mt-4 text-base text-grey-400">
            <h1>Dia do vencimento:</h1>
            <select
              class="absolute p-2 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
              name=""
            >
              <option value="0"></option>
              <option value="1">5</option>
              <option value="2">10</option>
              <option value="3">20</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button @click.prevent="mudarPasso">Mudar</button>
      </div>
    </section>
  </div>
</template>


<style scoped>
</style>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      nomeCliente: '',
      passo: 1,
      contact: {
        endereco: '',
        numeroEndereco: '',
        complemento: '',
        cnpj: '',
        cpf: '',
        celular: '',
        bairro: '',
        participarDoWhatsapp: '',
        jaSeparaReciclavel: '',
        DesejoDaColeta: '',
        ParticipaDoProgramaLixoZero: '',
        ComoFicouSabendoDaColetaDeVizinhanca: '',
        ComoFicouSabendoOutro: '',
      },
    }
  },
  mounted() {
    this.obterDadosToken()
  },
  methods: {
    async obterDadosToken() {
      let token = JSON.parse(sessionStorage.getItem('cdv'))
      if (token == null || token.token == null || token.token == undefined)
        this.$router.push((name = '/'))
      else {
        this.nomeCliente = token.nome
      }
    },
    async mudarPasso() {
      this.passo = this.passo + 1
    },
  },
})
</script>