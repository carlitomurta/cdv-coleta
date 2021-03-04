 <template>
  <div>
    <section class="mb-2 mt-4 bg-green-300">
      <div class="container mx-auto">
        <header class="flex flex-row-reverse h-16 pt-4">
          <div class="flex flex-row-reverse">
            <label
              @click="alterarPagina(4)"
              class="pointer h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white bg-green-200 text-grey-400"
            >
              Taxa Adesão R$
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
              <strong>Estatísticas de Pagamentos</strong>
              <div id="chart-1">
                <apexchart
                  type="polarArea"
                  width="450"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </div>
            </div>

            <div v-if="pagina == 2" class="grid ustify-items-start mb-2">
              <strong>Selecione abaixo os filtros para sua pesquisa:</strong>
              <hr />
              <div class="flex items-stretch mt-2">
                <div class="flex-1 text-start">
                  <label>Período da cobrança:</label><br />
                  <VueHotelDatepicker
                    v-model="filtro.periodo"
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
                    <option value="1">Boleto</option>
                    <option value="2">Cartão</option>
                  </select>
                </div>
                <div class="flex-1 text-start">
                  <label>Bairro:</label><br />
                  <select
                    class="relative mb-4 w-36 border-2 p-3 strong rounded-lg outline border-grey-200 focus-within:border-black"
                    v-model="filtro.bairro"
                  >
                    <option value="0">Selecione...</option>
                    <option value="1">Bairro 1</option>
                    <option value="2">Bairro 2</option>
                  </select>
                </div>
                <div class="flex-1 text-start">
                  <label>Status Pagamento:</label><br />
                  <select
                    class="relative mb-4 w-36 border-2 p-3 strong rounded-lg outline border-grey-200 focus-within:border-black"
                    v-model="filtro.tipoPagamento"
                  >
                    <option value="0">Selecione...</option>
                    <option value="1">Pago</option>
                    <option value="2">Pendente</option>
                  </select>
                </div>
                <div class="flex-1 text-start mt-6">
                  <button
                    class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                    type="button"
                    role="button"
                    @click="alert"
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
                    <tr>
                      <td class="p-1 border border-green-300">
                        Cliente da Silva Souza
                      </td>
                      <td class="p-1 border border-green-300">18/02/2021</td>
                      <td class="p-1 border border-green-300">Boleto</td>
                      <td class="p-1 border border-green-300">Pendente</td>
                      <td class="p-1 border border-green-300"></td>
                    </tr>
                    <tr>
                      <td class="p-1 border border-green-300">
                        Jão José da Silva
                      </td>
                      <td class="p-1 border border-green-300">22/03/2021</td>
                      <td class="p-1 border border-green-300">
                        Cartão de Crédito
                      </td>
                      <td class="p-1 border border-green-300">Pago</td>
                      <td class="p-1 border border-green-300">22/03/2021</td>
                    </tr>
                    <tr>
                      <td class="p-1 border border-green-300">
                        Caetano Veloso
                      </td>
                      <td class="p-1 border border-green-300">10/01/2021</td>
                      <td class="p-1 border border-green-300">Boleto</td>
                      <td class="p-1 border border-green-300">Cancelado</td>
                      <td class="p-1 border border-green-300"></td>
                    </tr>
                    <tr>
                      <td class="p-1 border border-green-300">
                        Fernando Henrique Cardoso
                      </td>
                      <td class="p-1 border border-green-300">02/03/2021</td>
                      <td class="p-1 border border-green-300">
                        Cartão de Crédito
                      </td>
                      <td class="p-1 border border-green-300">Pago</td>
                      <td class="p-1 border border-green-300">02/03/2021</td>
                    </tr>
                    <tr>
                      <td class="p-1 border border-green-300">
                        Maria Cecília de Meireles
                      </td>
                      <td class="p-1 border border-green-300">15/02/2021</td>
                      <td class="p-1 border border-green-300">Boleto</td>
                      <td class="p-1 border border-green-300">Pago</td>
                      <td class="p-1 border border-green-300">17/02/2021</td>
                    </tr>
                    <tr>
                      <td class="p-1 border border-green-300">
                        Monteiro Lobato
                      </td>
                      <td class="p-1 border border-green-300">29/01/2021</td>
                      <td class="p-1 border border-green-300">
                        Cartão de Crédito
                      </td>
                      <td class="p-1 border border-green-300">Estornado</td>
                      <td class="p-1 border border-green-300"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
.pointer {
  cursor: pointer;
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

Vue.use(VueTheMask, VueApexCharts)

export default Vue.extend({
  data() {
    return {
      loading: false,
      nome: '',
      pagina: 2,
      series: [42, 47, 52, 58, 65],
      chartOptions: {
        chart: {
          type: 'polarArea',
        },
        labels: ['Boletos', 'Cartão', 'Em dia', 'Atrasados', 'Cancelados'],
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
        periodo: '',
        tipoPagamento: 0,
        bairro: 0,
        statusPagamento: 0,
      },
    }
  },
  components: {
    apexchart: VueApexCharts,
    Loading,
    VueHotelDatepicker,
  },
  mounted() {
    let token = JSON.parse(sessionStorage.getItem('cdv'))
    this.nome = token.nome
  },
  methods: {
    alterarPagina(pagina) {
      this.pagina = pagina
    },
    alert() {
      alert('OK')
    },
  },
})
</script>