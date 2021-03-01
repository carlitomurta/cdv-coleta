<template>
  <div>
    <section v-if="passo == 1" class="mb-2 bg-green-200">
      <div class="container mx-auto mt-8 p-3">
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
      <div class="container mx-auto mt-8 p-3">
        <div>
          <h1
            class="mb-6 text-center text-2xl font-head text-white lg:text-4xl"
          >
            Formulário de Adesão
          </h1>
          <h3 class="mb-6 text-base text-white">
            <h1>
              Para a adesão de sua casa ou de seu apartamento, preencha este
              formulário. O preço atual é de
              <strong> R$ {{ precoAdesao.toLocaleString() }} reais.</strong>
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
                    value="1"
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
                    value="2"
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
                    value="3"
                    required
                  />
                  Para seu prédio (marque essa opção caso existam pelo menos
                  quatro aptos interessados em seu prédio)
                </div>
              </section>
              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <the-mask
                  :mask="['###.###.###-##', '##.###.###/####-##']"
                  v-model="contact.cpfCnpj"
                  type="text"
                  name="cpfCnpj"
                  maxlength="18"
                  autocomplete="off"
                  placeholder="CPF/CNPJ"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="cpfCnpj"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >CPF/CNPJ</label
                >
              </div>
              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <the-mask
                  :mask="['(##) #####-####']"
                  v-model="contact.celular"
                  masked="true"
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
                  maxlength="200"
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
                  maxlength="100"
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
                  maxlength="50"
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
                    value="2"
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
                    value="3"
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
                    value="2"
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
                    value="2"
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
                    value="3"
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
                    value="1"
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
                    value="2"
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
                    value="3"
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
                    value="4"
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
                    value="5"
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
                    value="6"
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
                    value="7"
                    required
                  />
                  Outro:
                </div>
                <div
                  v-if="contact.ComoFicouSabendoDaColetaDeVizinhanca == 7"
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
            <!-- <div v-if="sent" class="p-4 mt-4 bg-green-100 rounded-lg">
              <p class="text-sm text-center text-green-500">
                Sucesso! Recebemos seu cadastro, em breve faremos contato.
              </p>
            </div> -->
            <div v-if="error" class="p-4 mt-4 bg-red-100 rounded-lg">
              <p class="text-sm text-center text-red-500">
                {{ error }}
              </p>
            </div>
            <button
              class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
              type="button"
              role="button"
              @click.prevent="salvarAdesao"
            >
              Salvar e Continuar
            </button>
          </div>
        </div>
      </div>
    </section>
    <section v-if="passo == 3" class="bg-green-100">
      <div class="container mx-auto mt-6 p-3">
        <div class="p-3 bg-white rounded-lg shadow">
          <h1 class="mb-6 text-2xl font-head text-grey-400 lg:text-4xl">
            Como deseja pagar?
          </h1>
          <div class="flex items-stretch mb-2">
            <div class="flex-1 text-center">
              <div>
                <img
                  class="mx-auto"
                  src="~/static/pagamento/boleto.png"
                  alt="boleto"
                />
              </div>
              <input
                v-model="formaPagamento.tipo"
                value="1"
                name="tipo"
                type="radio"
                required
              />
              Boleto Bancário
            </div>
            <div class="flex-1 text-center">
              <div>
                <img
                  class="mx-auto"
                  src="~/static/pagamento/cartao.png"
                  alt="cartao"
                />
              </div>
              <input
                v-model="formaPagamento.tipo"
                value="2"
                name="tipo"
                type="radio"
                required
              />
              Cartão de Crédito
            </div>
          </div>

          <div v-if="formaPagamento.tipo == 1">
            <hr />
            <div class="flex items-stretch">
              <div class="flex-1 mb-6 mt-6 p-3">
                <h1><strong>Periodicidade do pagamento:</strong></h1>
                <div
                  class="relative mb-4 border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="periodicidadePagamento.periodo"
                    type="radio"
                    name="periodo"
                    autocomplete="off"
                    value="1"
                    required
                  />
                  Mensal (taxa de R$ 2,00 para emissão de boleto)
                </div>
                <div
                  class="relative mb-4 border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="periodicidadePagamento.periodo"
                    type="radio"
                    name="periodo"
                    autocomplete="off"
                    value="2"
                    required
                  />
                  Trimestral (taxa de R$ 2,00 para emissão de boleto)
                </div>
                <div
                  class="relative mb-4 border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="periodicidadePagamento.periodo"
                    type="radio"
                    name="periodo"
                    autocomplete="off"
                    value="3"
                    required
                  />
                  Semestral (sem cobrança de taxa para emissão)
                </div>
              </div>
              <div class="flex-1 mb-6 mt-6 p-3">
                <h1>
                  <strong>Escolha o dia para o vencimento do boleto:</strong>
                </h1>
                <div
                  class="relative mb-4 border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="vencimentoBoleto.dia"
                    type="radio"
                    name="dia"
                    autocomplete="off"
                    value="1"
                    required
                  />
                  Dia 5
                </div>
                <div
                  class="relative mb-4 border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="vencimentoBoleto.dia"
                    type="radio"
                    name="dia"
                    autocomplete="off"
                    value="2"
                    required
                  />
                  Dia 10
                </div>
                <div
                  class="relative mb-4 border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="vencimentoBoleto.dia"
                    type="radio"
                    name="dia"
                    autocomplete="off"
                    value="3"
                    required
                  />
                  Dia 20
                </div>
              </div>
            </div>
          </div>

          <div>
            <modal
              name="modal-pagamento"
              :height="340"
              :maxWidth="400"
              :adaptive="true"
            >
              <div class="p-8 bg-white rounded-lg shadow">
                <h2 class="text-center">Confirmação dos Dados de Pagamento</h2>
                <hr />
                <div class="mt-2 p-2">
                  <label>Forma de Pagamento:</label>
                  <strong>{{
                    formaPagamento.tipo == 1
                      ? 'Boleto Bancário'
                      : 'Cartão de Crédito'
                  }}</strong>
                </div>
                <div class="mt-2 p-2">
                  <label>Periodicidade de Pagamento:</label>
                  <strong>{{
                    periodicidadePagamento.periodo == 1
                      ? 'Mensal'
                      : periodicidadePagamento.periodo == 2
                      ? 'Trimestral'
                      : 'Semestral'
                  }}</strong>
                </div>
                <div class="mt-2 p-2">
                  <label>Vencimento do Boleto:</label>
                  <strong>{{
                    vencimentoBoleto.dia == 1
                      ? 'Dia 05'
                      : vencimentoBoleto.dia == 2
                      ? 'Dia 10'
                      : 'Dia 20'
                  }}</strong>
                </div>
                <div class="mt-2 p-2 mb-4">
                  <label>Valor da Cobrança:</label>
                  <strong class="font-bold text-green-500"
                    >R$ {{ valorCobranca.toLocaleString() }}</strong
                  >
                </div>
                <div>
                  <button
                    class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                    type="button"
                    role="button"
                    @click="enviarCobranca"
                  >
                    Confirmar
                  </button>
                </div>
                <div v-if="loading" class="p-4 mt-4 bg-green-100 rounded-lg">
                  <p class="text-sm text-center text-green-500">
                    Sucesso! Recebemos seu cadastro, em breve faremos contato.
                  </p>
                </div>
                <div v-if="error" class="p-2 mt-1 bg-red-100 rounded-lg">
                  <p
                    v-for="err in error"
                    :key="err.descricao"
                    class="text-sm text-center text-red-500"
                  >
                    {{ err.descricao }}
                  </p>
                </div>
              </div>
            </modal>
          </div>

          <div v-if="periodicidadePagamento.periodo && vencimentoBoleto.dia">
            <button
              class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
              type="button"
              role="button"
              @click="showModal"
            >
              Concluir
            </button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <!-- Loading -->
      <div class="vld-parent">
        <loading
          :active.sync="loading"
          :can-cancel="false"
          :is-full-page="true"
        >
        </loading>
      </div>
    </section>
  </div>
</template>


<style scoped>
img {
  max-width: 20%;
}

hr {
  color: rgb(165, 164, 164);
}
</style>

<script>
import Vue from 'vue'
import VueTheMask from 'vue-the-mask'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.use(VueTheMask)

export default Vue.extend({
  data() {
    return {
      nomeCliente: '',
      passo: 3,
      valorTotal: 0,
      error: '',
      token: '',
      loading: false,
      precoAdesao: 0,
      valorCobranca: 0,
      contact: {
        email: '',
        endereco: '',
        numeroEndereco: '',
        complemento: '',
        cpfCnpj: '',
        celular: '',
        bairro: '',
        participarDoWhatsapp: 0,
        jaSeparaReciclavel: 0,
        DesejoDaColeta: 0,
        ParticipaDoProgramaLixoZero: 0,
        ComoFicouSabendoDaColetaDeVizinhanca: 0,
        ComoFicouSabendoOutro: '',
      },
      formaPagamento: {
        tipo: '',
      },
      periodicidadePagamento: {
        periodo: '',
      },
      vencimentoBoleto: {
        dia: '',
      },
      pagamentoBoleto: {
        email: '',
        periodicidadePagamento: 0,
        diaVencimento: 0,
        valor: 0,
      },
    }
  },
  components: {
    Loading,
  },
  mounted() {
    this.obterDadosToken()
  },
  methods: {
    async salvarAdesao() {
      if (
        !this.contact.endereco ||
        !this.contact.numeroEndereco ||
        !this.contact.celular ||
        !this.contact.bairro ||
        !this.contact.participarDoWhatsapp ||
        !this.contact.jaSeparaReciclavel ||
        !this.contact.DesejoDaColeta ||
        !this.contact.ParticipaDoProgramaLixoZero ||
        !this.contact.ComoFicouSabendoDaColetaDeVizinhanca
      ) {
        this.error =
          'Atenção, você deve informar todos os campos do Formulário de Adesão!'
      } else {
        this.error = ''
        let config = this.obterHeader()
        this.contact.email = this.token.email
        this.loading = true

        await this.$axios
          .post('clientes/adesao', this.contact, config)
          .then((res) => {
            this.loading = false
            this.mudarPasso()
          })
          .catch((err) => {
            this.loading = false
          })
      }
    },
    async obterDadosToken() {
      this.token = JSON.parse(sessionStorage.getItem('cdv'))
      if (
        this.token == null ||
        this.token.token == null ||
        this.token.token == undefined
      )
        this.$router.push((name = '/'))
      else {
        this.nomeCliente = this.token.nome
      }
    },
    async obterValorAdesao() {
      this.loading = true
      let config = this.obterHeader()

      await this.$axios
        .get('financeiro/valor-servico', config)
        .then((res) => {
          this.loading = false

          this.precoAdesao = res.data.valor
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async mudarPasso() {
      this.passo = this.passo + 1
      if (this.passo == 2) this.obterValorAdesao()
      window.scrollTo(0, 0)
    },
    async showModal() {
      this.$modal.show('modal-pagamento')
      //retirar obtervaloradesao
      await this.obterValorAdesao()
      this.calcularValorCobranca()
    },
    obterHeader() {
      return {
        headers: {
          Authorization: 'Bearer ' + this.token.token,
        },
      }
    },
    calcularValorCobranca() {
      if (this.periodicidadePagamento.periodo == 2)
        this.valorCobranca = this.precoAdesao * 3
      else if (this.periodicidadePagamento.periodo == 3)
        this.valorCobranca = this.precoAdesao * 6
      else this.valorCobranca = this.precoAdesao
    },
    async enviarCobranca() {
      let config = this.obterHeader()
      if (this.formaPagamento.tipo == 1) {
        this.pagamentoBoleto.email = this.token.email
        this.pagamentoBoleto.periodicidadePagamento = Number(
          this.periodicidadePagamento.periodo
        )
        this.pagamentoBoleto.diaVencimento = Number(this.vencimentoBoleto.dia)
        this.pagamentoBoleto.valor = this.valorCobranca

        this.loading = true
        await this.$axios
          .post('financeiro/pagamento/boleto', this.pagamentoBoleto, config)
          .then((res) => {
            this.loading = false
          })
          .catch((err) => {
            this.loading = false
          })
      } else {
      }
    },
  },
})
</script>