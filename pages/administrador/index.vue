 <template>
  <div>
    <section class="mb-2 mt-4 bg-green-300">
      <div class="container mx-auto">
        <header class="flex flex-row-reverse h-16 pt-4">
          <div class="flex flex-row-reverse">
            <label
              @click="showModal(4)"
              class="pointer h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white bg-green-200 text-grey-400"
            >
              Grupos Rotas
            </label>
            <label
              @click="alterarPagina(3)"
              class="pointer h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white bg-green-200 text-grey-400"
            >
              Bairros
            </label>
            <label
              @click="alterarPagina(2)"
              class="pointer h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white bg-green-200 text-grey-400"
            >
              Consultas
            </label>
            <label
              id="inicio"
              @click="alterarPagina(1)"
              class="pointer h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white bg-green-200 text-grey-400"
            >
              Início
            </label>
          </div>
        </header>
      </div>
      <div class="container mx-auto p-3">
        <h1 class="mb-4">
          Bem vindo(a),<strong> {{ nome }}.</strong>
        </h1>

        <div class="container">
          <div class="p-3 bg-white rounded-lg shadow">
            <div
              v-if="pagina == 1"
              class="grid ustify-items-start md:justify-items-center mb-2"
            >
              <strong
                >Estatísticas de Pagamentos das últimas 100 Adesões</strong
              >
              <div id="chart-1">
                <apexchart
                  type="polarArea"
                  width="500"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </div>
            </div>

            <div v-if="pagina == 2" class="grid justify-items-start mb-2">
              <strong>Selecione abaixo os filtros para sua pesquisa:</strong>
              <hr />
              <div class="flex items-stretch mt-2">
                <div class="flex-1 text-start">
                  <label>Período de vencimento:</label><br />
                  <VueHotelDatepicker
                    id="date-picker"
                    @confirm="setRange"
                    :placeholder="'Selecione um período'"
                    :format="'DD/MM/YYYY'"
                    :separator="'até'"
                    :infoFormat="'DD/MM/YYYY'"
                    :weekList="[
                      'Dom',
                      'Seg',
                      'Ter',
                      'Qua',
                      'Qui',
                      'Sex',
                      'Sab',
                    ]"
                    :monthList="[
                      'Janeiro-',
                      'Fevereiro-',
                      'Março-',
                      'Abril-',
                      'Maio-',
                      'Junho-',
                      'Julho-',
                      'Agosto-',
                      'Setembro-',
                      'Outubro-',
                      'Novembro-',
                      'Dezembro-',
                    ]"
                    :fromText="'De'"
                    :toText="'Até'"
                    :confirmText="'Confirmar'"
                    :resetText="'Limpar'"
                    :minDate="'01/01/2021'"
                    :class="'relative mb-4 w-82 border-2 strong rounded-lg outline border-grey-200 focus-within:border-black'"
                  ></VueHotelDatepicker>
                </div>
                <div class="flex-1 ml-10 text-start">
                  <label>Tipo de pagamento:</label><br />
                  <select
                    class="relative mb-4 w-36 border-2 p-3 strong rounded-lg outline border-grey-200 focus-within:border-black"
                    v-model="filtro.tipoPagamento"
                  >
                    <option value="0">Ambos</option>
                    <option value="boleto">Boleto</option>
                    <option value="credit_card">Cartão</option>
                  </select>
                </div>
                <div class="flex-1 text-start">
                  <label>Bairro:</label><br />
                  <select
                    class="relative mb-4 w-36 border-2 p-3 strong rounded-lg outline border-grey-200 focus-within:border-black"
                    v-model="filtro.bairro"
                  >
                    <option value="0">Todos</option>
                    <option
                      v-for="bairro in listaBairros"
                      :key="bairro.id"
                      :value="bairro.id"
                    >
                      {{ bairro.nome }}
                    </option>
                  </select>
                </div>
                <div class="flex-1 text-start">
                  <label>Status Pagamento:</label><br />
                  <select
                    class="relative mb-4 w-36 border-2 p-3 strong rounded-lg outline border-grey-200 focus-within:border-black"
                    v-model="filtro.statusPagamento"
                  >
                    <option value="0">Todos</option>
                    <option value="CONFIRMED">Pago</option>
                    <option value="PENDING">Aguardando Pagamento</option>
                    <option value="REFUNDED">Estornado</option>
                    <option value="OVERDUE">Vencida</option>
                  </select>
                </div>
                <div class="flex-1 text-start mt-6">
                  <button
                    class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                    type="button"
                    role="button"
                    @click="filtrarVendas"
                  >
                    Consultar
                  </button>
                </div>
              </div>
              <hr />
              <div class="mt-2">
                <table
                  class="table-fixed border-collapse bg-green-100 border-shadow"
                >
                  <thead>
                    <tr>
                      <th class="w-2/6 border border-green-300">Cliente</th>
                      <th class="w-2/12 border border-green-300">Data</th>
                      <th class="w-2/12 border border-green-300">
                        Tipo Pagamento
                      </th>
                      <th class="w-56 border border-green-300">
                        Status Pagamento
                      </th>
                      <th class="w-48 border border-green-300">
                        Data Pagamento
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="r in relatorioVendas" :key="r">
                      <td class="p-1 border border-green-300">
                        {{ r.cliente }}
                      </td>
                      <td class="p-1 border border-green-300">
                        {{ r.data }}
                      </td>
                      <td class="p-1 border border-green-300">
                        {{
                          r.tipoPagamento == 'BOLETO'
                            ? 'Boleto'
                            : 'Cartão de Crédito'
                        }}
                      </td>
                      <td class="p-1 border border-green-300">
                        {{ r.statusPagamento }}
                      </td>
                      <td class="p-1 border border-green-300">
                        {{
                          r.tipoPagamento == 'CREDIT_CARD'
                            ? r.data
                            : r.dataPagamento
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Bairros -->
            <div v-if="pagina == 3" class="grid mb-2">
              <strong>Controle de Bairros</strong>
              <hr />
              <div class="flex items-stretch mt-2">
                <div class="flex-1 text-start">
                  <div
                    class="mt-4 flex items-start relative mb-4 border-2 w-64 rounded-lg outline border-grey-200 focus-within:border-black"
                  >
                    <input
                      v-model="bairro.nome"
                      type="text"
                      name="nome"
                      autocomplete="off"
                      required
                      placeholder="Bairro"
                      class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                    />
                    <label
                      for="nome"
                      class="absolute top-0 p-4 text-sm duration-300 bg-white -z-1 origin-0"
                      >Bairro</label
                    >
                  </div>
                </div>
                <div class="flex-1 text-start">
                  <label>Grupo Rota:</label><br />
                  <select
                    class="relative mb-4 w-36 border-2 p-3 strong rounded-lg outline border-grey-200 focus-within:border-black"
                    v-model="bairro.grupoRota"
                  >
                    <option value="0">Selecione</option>
                  </select>
                </div>
                <div class="flex-1 text-start">
                  <div class="mt-5">
                    <button
                      class="block h-10 px-5 mx-auto font-bold text-white capitalize rounded shadow-md base-button bg-brand-green"
                      type="button"
                      role="button"
                      @click="cadastrarBairro(bairro.nome)"
                    >
                      Cadastrar
                    </button>
                  </div>
                </div>
              </div>
              <hr />

              <div class="mt-2 overflow-y-scroll flex justify-center">
                <table class="border-collapse bg-green-100 border-shadow">
                  <thead>
                    <tr>
                      <th class="w-40 border border-green-300">Bairro</th>
                      <th class="w-20 border border-green-300">Status</th>
                      <th class="w-40 border border-green-300">Possui Rota</th>
                      <th class="w-40 border border-green-300">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="bairro in listaBairros" :key="bairro.id">
                      <td class="p-1 border border-green-300">
                        {{ bairro.nome }}
                      </td>
                      <td class="p-1 border border-green-300">
                        {{ bairro.ativo ? 'Ativo' : 'Inativo' }}
                      </td>
                      <td class="p-1 border border-green-300">
                        {{ bairro.possuiRota ? 'Sim' : 'Não' }}
                      </td>
                      <td
                        v-if="bairro.ativo"
                        class="p-1 border border-green-300"
                      >
                        <button
                          class="block h-6 px-6 mx-auto text-center text-white capitalize rounded shadow-md base-button bg-yellow-500"
                          type="button"
                          role="button"
                          @click="inativarAtivarBairro(bairro.id)"
                        >
                          Inativar
                        </button>
                      </td>
                      <td
                        v-if="!bairro.ativo"
                        class="p-1 border border-green-300"
                      >
                        <button
                          class="block h-6 px-6 mx-auto text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                          type="button"
                          role="button"
                          @click="inativarAtivarBairro(bairro.id)"
                        >
                          Ativar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section>
      <div>
        <modal
          name="modal-bairros"
          :height="600"
          :maxWidth="650"
          :adaptive="true"
        >
          <div class="p-8">
            <h2 class="text-start font-bold">Controle de Bairros</h2>
            <hr />
            <div class="flex items-stretch mb-2">
              <div class="flex-1 text-center">
                <div
                  class="mt-4 flex items-start relative mb-4 border-2 w-72 rounded-lg outline border-grey-200 focus-within:border-black"
                >
                  <input
                    v-model="bairro.nome"
                    type="text"
                    name="nome"
                    autocomplete="off"
                    required
                    placeholder="Bairro"
                    class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                  />
                  <label
                    for="nome"
                    class="absolute top-0 p-4 text-sm duration-300 bg-white -z-1 origin-0"
                    >Bairro</label
                  >
                </div>
              </div>
              <div class="flex-1 text-center">
                <div class="mt-5">
                  <button
                    class="block h-12 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                    type="button"
                    role="button"
                    @click="cadastrarBairro(bairro.nome)"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
            <hr />

            <div class="mt-2 overflow-y-scroll">
              <table class="border-collapse bg-green-100 border-shadow">
                <thead>
                  <tr>
                    <th class="w-2/6 border border-green-300">Bairro</th>
                    <th class="w-2/12 border border-green-300">Status</th>
                    <th class="w-2/12 border border-green-300">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="bairro in listaBairros" :key="bairro.id">
                    <td class="p-1 border border-green-300">
                      {{ bairro.nome }}
                    </td>
                    <td class="p-1 border border-green-300">
                      {{ bairro.ativo ? 'Ativo' : 'Inativo' }}
                    </td>
                    <td v-if="bairro.ativo" class="p-1 border border-green-300">
                      <button
                        class="block h-6 px-6 mx-auto text-center text-white capitalize rounded shadow-md base-button bg-yellow-500"
                        type="button"
                        role="button"
                        @click="inativarAtivarBairro(bairro.id)"
                      >
                        Inativar
                      </button>
                    </td>
                    <td
                      v-if="!bairro.ativo"
                      class="p-1 border border-green-300"
                    >
                      <button
                        class="block h-6 px-6 mx-auto text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                        type="button"
                        role="button"
                        @click="inativarAtivarBairro(bairro.id)"
                      >
                        Ativar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </modal>
      </div>
    </section> -->

    <section>
      <div>
        <modal name="modal-taxa" :height="300" :maxWidth="350" :adaptive="true">
          <div class="p-8">
            <h2 class="text-start font-bold">Controle da Taxa de Adesão</h2>
            <hr />
            <div class="flex items-stretch mb-2">
              <div class="flex-1 text-center">
                <div
                  class="mt-4 w-32 flex items-start relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
                >
                  <money
                    type="text"
                    name="valor"
                    autocomplete="off"
                    required
                    placeholder="Valor"
                    class="block w-32 p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                    v-model="taxa.valor"
                    v-bind="money"
                  ></money>
                  <label
                    for="valor"
                    class="absolute top-0 p-4 text-sm duration-300 bg-white -z-1 origin-0"
                    >Taxa</label
                  >
                </div>
              </div>
              <div class="flex-1 text-center">
                <div class="mt-5">
                  <button
                    class="block h-12 px-5 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                    type="button"
                    role="button"
                    @click="atualizarTaxa(taxa.valor)"
                  >
                    Atualizar
                  </button>
                </div>
              </div>
            </div>
            <hr />

            <div class="mt-8">
              <label>Valor Atual da Taxa:</label>
              <strong class="text-green-500"
                >R$ {{ taxaAtual.toLocaleString() }}</strong
              >
            </div>
          </div>
        </modal>
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
.pointer {
  cursor: pointer;
}

.scroll-vertical {
  overflow-y: scroll;
}

hr {
  color: rgb(165, 164, 164);
}
</style>

<script>
import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import VueTheMask from 'vue-the-mask'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueApexCharts from 'vue-apexcharts'
import VueHotelDatepicker from '@northwalker/vue-hotel-datepicker'
import { Money } from 'v-money'

Vue.use(VueTheMask, VueApexCharts)

export default Vue.extend({
  data() {
    return {
      loading: false,
      nome: '',
      pagina: 1,
      token: {},
      taxaAtual: 0,
      series: [1, 1, 1, 1, 1],
      chartOptions: {
        chart: {
          type: 'polarArea',
        },
        labels: ['Boletos', 'Cartão', 'Em dia', 'Vencidos', 'A receber'],
        fill: {
          opacity: 0.8,
        },
        stroke: {
          colors: ['#fff'],
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: 'bottom',
        },
        responsive: [
          {
            breakpoint: 480,
            options: {},
          },
        ],
      },
      filtro: {
        dataInicio: '',
        dataFim: '',
        tipoPagamento: '0',
        bairro: 0,
        statusPagamento: '0',
      },
      bairro: {
        nome: '',
        grupoRota: 0,
      },
      listaBairros: [],
      taxa: {
        valor: '',
      },
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false,
      },
      relatorioVendas: [],
    }
  },
  components: {
    apexchart: VueApexCharts,
    Loading,
    VueHotelDatepicker,
    Money,
  },
  async mounted() {
    this.obterDadosToken()
    await this.obterEstatisticas()
  },
  methods: {
    obterDadosToken() {
      this.token = JSON.parse(sessionStorage.getItem('cdv'))
      if (
        this.token == null ||
        this.token.token == null ||
        this.token.token == undefined
      )
        this.$router.push((name = '/'))
      else {
        this.nome = this.token.nome
      }
    },
    async alterarPagina(pagina) {
      this.pagina = pagina
      if (this.pagina == 1) await this.obterEstatisticas()
      else if (this.pagina == 3) await this.obterBairros()
    },
    async obterBairros() {
      this.loading = true

      await this.$axios
        .get('administrador/bairros')
        .then((res) => {
          this.loading = false
          this.listaBairros = res.data.bairros
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async showModal(pagina) {
      if (pagina == 3) {
        await this.obterBairros()
        this.$modal.show('modal-bairros')
      } else if (pagina == 4) {
        this.obterTaxa()
        this.$modal.show('modal-taxa')
      }
    },
    obterHeader() {
      return {
        headers: {
          Authorization: 'Bearer ' + this.token.token,
        },
      }
    },
    async inativarAtivarBairro(id) {
      this.loading = true
      let config = this.obterHeader()

      await this.$axios
        .put('administrador/bairros/' + id + '/inativa-ativa', {}, config)
        .then((res) => {
          this.loading = false
          this.obterBairros()
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async cadastrarBairro(bairro) {
      if (this.bairro.nome) {
        this.loading = true
        let config = this.obterHeader()

        await this.$axios
          .post(
            'administrador/bairros',
            { nome: this.bairro.nome, possuiRota: this.bairro.possuiRota },
            config
          )
          .then((res) => {
            this.loading = false
            this.bairro.nome = ''
            this.obterBairros()
          })
          .catch((err) => {
            this.loading = false
          })
      }
    },
    async obterTaxa() {
      this.loading = true
      let config = this.obterHeader()

      await this.$axios
        .get('financeiro/valor-servico', config)
        .then((res) => {
          this.loading = false
          this.taxaAtual = res.data.valor
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async atualizarTaxa(taxa) {
      this.loading = true
      let config = this.obterHeader()

      await this.$axios
        .put('financeiro/valor-servico', { valor: taxa }, config)
        .then((res) => {
          this.loading = false
          this.taxa.valor = ''
          this.obterTaxa()
        })
        .catch((res) => {
          this.loading = false
        })
    },
    async obterEstatisticas() {
      this.loading = true
      let config = this.obterHeader()

      await this.$axios
        .get('administrador/estatisticas', config)
        .then((res) => {
          this.loading = false

          let newSeries = [
            res.data.totalBoletos,
            res.data.totalCartoes,
            res.data.emDia,
            res.data.vencidos,
            res.data.aReceber,
          ]

          this.series = newSeries
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async filtrarVendas() {
      this.loading = true
      let config = this.obterHeader()

      await this.$axios
        .get(
          `administrador/vendas/${this.filtro.dataInicio}/dataInicio/${this.filtro.dataFim}/dataFim/${this.filtro.bairro}/bairro/${this.filtro.tipoPagamento}/tipoPagamento/${this.filtro.statusPagamento}/statusPagamento`,
          config
        )
        .then((res) => {
          this.loading = false
          this.relatorioVendas = res.data.filtroDeVendas
        })
        .catch((err) => {
          this.loading = false
        })
    },
    setRange(date) {
      let _dateStart = date.start.split('/')
      this.filtro.dataInicio = `${_dateStart[2]}-${_dateStart[1]}-${_dateStart[0]}`

      let _dateEnd = date.end.split('/')
      this.filtro.dataFim = `${_dateEnd[2]}-${_dateEnd[1]}-${_dateEnd[0]}`
    },
  },
})
</script>