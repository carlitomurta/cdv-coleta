<template>
  <div>
    <!-- Pagamento não finalizado -->
    <section v-if="!statusPagamentoCliente">
      <section v-if="passo == 1" class="bg-brand-green">
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
                <strong>
                  R$
                  {{
                    parseFloat(precoAdesao)
                      .toFixed(2)
                      .toString()
                      .replace('.', ',')
                  }}
                  reais.</strong
                >
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
                  <the-mask
                    :mask="['#####-###']"
                    v-model="contact.cep"
                    type="text"
                    name="cep"
                    autocomplete="off"
                    placeholder="Cep"
                    @input="obterEndereco()"
                    required
                    class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                  />
                  <label
                    for="cep"
                    class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                    >Cep</label
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
                    v-model="bairro"
                    type="text"
                    name="bairro"
                    disabled
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
                    >Você participa do Programa Lixo Zero Residencial da Rede
                    Lixo Zero Santa Tereza?</strong
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
      <section v-if="passo == 2" class="bg-green-100">
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
                      value="3"
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
                      value="4"
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
                      value="5"
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

            <div v-if="formaPagamento.tipo == 2">
              <hr />
              <br />
              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <input
                  v-model="cartao.nomeNoCartao"
                  type="text"
                  name="nomeNoCartao"
                  autocomplete="off"
                  placeholder="Nome Impresso no Cartão"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="nomeNoCartao"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Nome Impresso no Cartão</label
                >
              </div>

              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <the-mask
                  :mask="['####-####-####-####']"
                  v-model="cartao.numeroCartao"
                  type="text"
                  name="numeroCartao"
                  autocomplete="off"
                  placeholder="Número do Cartão"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="numeroCartao"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Número do Cartão</label
                >
              </div>

              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <the-mask
                  :mask="['##']"
                  v-model="cartao.mesExpiracao"
                  type="text"
                  name="mesExpiracao"
                  autocomplete="off"
                  placeholder="Ex: 06"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="mesExpiracao"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Mês Expiração</label
                >
              </div>

              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <the-mask
                  :mask="['####']"
                  v-model="cartao.anoExpiracao"
                  type="text"
                  name="anoExpiracao"
                  autocomplete="off"
                  placeholder="Ex: 2021"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="anoExpiracao"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Ano Expiração</label
                >
              </div>

              <div
                class="relative mb-4 border-2 rounded-lg outline border-grey-200 focus-within:border-black"
              >
                <the-mask
                  :mask="['###']"
                  v-model="cartao.codigoSeguranca"
                  type="text"
                  name="codigoSeguranca"
                  autocomplete="off"
                  placeholder="Código Segurança"
                  required
                  class="block w-full p-4 text-sm font-bold bg-transparent rounded-lg appearance-none focus:outline-none"
                />
                <label
                  for="codigoSeguranca"
                  class="absolute top-0 p-4 text-sm duration-300 bg-white text-grey-400 -z-1 origin-0"
                  >Código Segurança</label
                >
              </div>

              <strong>Parcelamento no Cartão:</strong>
              <div>
                <select
                  class="relative mb-4 w-full border-2 p-3 strong rounded-lg outline border-grey-200 focus-within:border-black"
                  name="parcelamento"
                  v-model="parcelamento"
                >
                  <option value="0">Selecione...</option>
                  <option value="1">1 x sem juros</option>
                  <option value="2">2 x sem juros</option>
                  <option value="3">3 x sem juros</option>
                  <option value="4">4 x sem juros</option>
                  <option value="5">5 x sem juros</option>
                  <option value="6">6 x sem juros</option>
                  <option value="7">7 x sem juros</option>
                  <option value="8">8 x sem juros</option>
                  <option value="9">9 x sem juros</option>
                  <option value="10">10 x sem juros</option>
                  <option value="11">11 x sem juros</option>
                  <option value="12">12 x sem juros</option>
                </select>
              </div>
            </div>

            <!-- Modal Boleto -->
            <div>
              <modal
                name="modal-pagamento-boleto"
                :height="400"
                :maxWidth="400"
                :adaptive="true"
              >
                <div class="p-8 bg-white rounded-lg shadow">
                  <h2 class="text-center font-bold">
                    Confirmação dos Dados de Pagamento
                  </h2>
                  <hr />
                  <div class="mt-2 p-2">
                    <label>Forma de Pagamento:</label>
                    <strong> Boleto Bancário </strong>
                  </div>
                  <div class="mt-2 p-2">
                    <label>Periodicidade de Pagamento:</label>
                    <strong>{{
                      periodicidadePagamento.periodo == 3
                        ? 'Mensal'
                        : periodicidadePagamento.periodo == 4
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
                      >R$
                      {{
                        valorCobranca.toFixed(2).toString().replace('.', ',')
                      }}</strong
                    >
                  </div>
                  <div v-if="!sucesso">
                    <button
                      class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                      type="button"
                      role="button"
                      @click="enviarCobranca"
                    >
                      Confirmar Pagamento
                    </button>
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

            <!-- Modal Cartão -->
            <div>
              <modal
                name="modal-pagamento-cartao"
                :height="310"
                :maxWidth="400"
                :adaptive="true"
              >
                <div class="p-8 bg-white rounded-lg shadow">
                  <h2 class="text-center font-bold">
                    Confirmação dos Dados de Pagamento
                  </h2>
                  <hr />
                  <div class="mt-2 p-2">
                    <label>Forma de Pagamento:</label>
                    <strong> Cartão de Crédito </strong>
                  </div>

                  <div class="mt-2 p-2 mb-4">
                    <label>Parcelamento:</label>
                    <strong class="font-bold text-green-500">{{
                      parcelamento +
                      ' x de R$ ' +
                      ((precoAdesao * 12) / parcelamento)
                        .toFixed(2)
                        .toString()
                        .replace('.', ',') +
                      ' sem juros'
                    }}</strong>
                  </div>
                  <div v-if="!sucesso">
                    <button
                      class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                      type="button"
                      role="button"
                      @click="enviarCobranca"
                    >
                      Confirmar Pagamento
                    </button>
                  </div>

                  <div v-if="sucesso">
                    <button
                      class="block h-12 min-h-0 px-10 mx-auto font-bold text-center text-white capitalize rounded shadow-md base-button bg-brand-green"
                      type="button"
                      role="button"
                      @click="fecharModal"
                    >
                      Fechar
                    </button>
                  </div>

                  <div v-if="sucesso" class="p-4 mt-4 bg-green-100 rounded-lg">
                    <p class="text-sm text-center text-green-500">
                      :) Obrigado, seu pagamento foi realizado com sucesso!
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

            <div
              v-if="
                (formaPagamento.tipo == 1 &&
                  periodicidadePagamento.periodo &&
                  vencimentoBoleto.dia) ||
                (formaPagamento.tipo == 2 &&
                  cartao.numeroCartao.length == 16 &&
                  cartao.nomeNoCartao.length > 4 &&
                  cartao.mesExpiracao.length == 2 &&
                  cartao.anoExpiracao.length == 4 &&
                  cartao.codigoSeguranca.length == 3 &&
                  parcelamento != 0)
              "
            >
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
    </section>

    <!-- Pagamento já realizado -->
    <section v-if="statusPagamentoCliente">
      <section class="mb-2 mt-4 bg-green-300">
        <div class="container mx-auto">
          <header class="flex flex-row-reverse h-16 pt-4">
            <div class="flex flex-row-reverse">
              <label
                @click="showModal(3)"
                class="pointer h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white bg-green-200 text-grey-400"
              >
                Calculadora Ambiental
              </label>
              <label
                @click="alterarPagina(2)"
                class="pointer h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white bg-green-200 text-grey-400"
              >
                Calendário de Coletas
              </label>
              <label
                id="inicio"
                @click="alterarPagina(1)"
                class="pointer h-12 px-4 py-3 mr-2 font-bold text-center capitalize rounded-lg dark:text-white bg-green-200 text-grey-400"
              >
                Histórico Contribuições
              </label>
            </div>
          </header>
        </div>

        <div class="container mx-auto mt-4 p-3">
          <h1 class="mb-2">
            Bem vindo(a),<strong> {{ nomeCliente }}.</strong>
          </h1>
        </div>

        <div class="container">
          <div class="p-3 bg-white rounded-lg shadow">
            <div v-if="pagina == 1" class="grid justify-items-center mb-2">
              <strong>Meu Histórico de Contribuições</strong>
              <hr />
              <div class="mt-2">
                <table class="table-fixed border-collapse border-shadow">
                  <thead>
                    <tr>
                      <th class="w-40 border">Data Cobrança</th>
                      <th class="w-40 border">Tipo Pagamento</th>
                      <th class="w-40 border">Periodicidade</th>
                      <th class="w-20 border">Status</th>
                      <th class="w-40 border">Valor R$</th>
                      <th class="w-40 border">Data Pagamento</th>
                      <th class="w-20 border">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="h in meuHistorico" :key="h">
                      <td class="p-1 border">{{ h.dataEmissao }}</td>
                      <td class="p-1 border">{{ h.tipoDePagamento }}</td>
                      <td class="p-1 border">{{ h.cicloDePagamento }}</td>
                      <td class="p-1 border">{{ h.statusPagamento }}</td>
                      <td class="p-1 border">
                        R$
                        {{
                          parseFloat(h.valor)
                            .toFixed(2)
                            .toString()
                            .replace('.', ',')
                        }}
                      </td>
                      <td class="p-1 border">
                        {{
                          h.tipoDePagamento != 'Boleto'
                            ? h.dataEmissao
                            : h.dataPagamento
                        }}
                      </td>
                      <td class="p-1 border">
                        <button
                          v-bind:disabled="
                            h.tipoDePagamento != 'Boleto' ||
                            h.statusPagamento == 'Pago'
                          "
                          class="block h-6 px-3 text-center text-white shadow-md bg-brand-green"
                          type="button"
                          @click="downloadBoleto()"
                        >
                          2ª Via
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      statusPagamentoCliente: false,
      bairro: '',
      passo: 1,
      pagina: 1,
      valorTotal: 0,
      error: '',
      token: '',
      loading: false,
      sucesso: false,
      precoAdesao: 0,
      valorCobranca: Number(0),
      parcelamento: '0',
      contact: {
        email: '',
        endereco: '',
        numeroEndereco: '',
        complemento: '',
        cpfCnpj: '',
        celular: '',
        cep: '',
        bairro: '',
        participarDoWhatsapp: 0,
        jaSeparaReciclavel: 0,
        DesejoDaColeta: 0,
        ParticipaDoProgramaLixoZero: 0,
        ComoFicouSabendoDaColetaDeVizinhanca: 0,
        ComoFicouSabendoOutro: '',
      },
      cartao: {
        nomeNoCartao: '',
        numeroCartao: '',
        mesExpiracao: '',
        anoExpiracao: '',
        codigoSeguranca: '',
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
      meuHistorico: [],
    }
  },
  components: {
    Loading,
  },
  async mounted() {
    await this.obterDadosToken()
    await this.statusPagamento()
  },
  methods: {
    async salvarAdesao() {
      if (
        !this.contact.endereco ||
        !this.contact.numeroEndereco ||
        !this.contact.celular ||
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
        this.bairro = this.token.bairro
      }
    },
    async obterValorAdesao() {
      this.loading = true
      let config = this.obterHeader()

      await this.$axios
        .get(`financeiro/valor-adesao/${this.token.bairro}/bairro`, config)
        .then((res) => {
          this.loading = false

          this.precoAdesao = res.data
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async mudarPasso() {
      this.passo = this.passo + 1
      if (this.passo == 1) await this.obterValorAdesao()

      window.scrollTo(0, 0)
    },
    async showModal() {
      this.sucesso = false
      if (this.formaPagamento.tipo == 1)
        this.$modal.show('modal-pagamento-boleto')
      else if (this.formaPagamento.tipo == 2)
        this.$modal.show('modal-pagamento-cartao')

      this.calcularValorCobranca()
    },
    async fecharModal() {
      this.$modal.hide('modal-pagamento-cartao')
      this.$router.push('/')
    },
    obterHeader() {
      return {
        headers: {
          Authorization: 'Bearer ' + this.token.token,
        },
      }
    },
    calcularValorCobranca() {
      if (this.periodicidadePagamento.periodo == 4)
        this.valorCobranca = this.precoAdesao * 3
      else if (this.periodicidadePagamento.periodo == 5)
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
            this.downloadBoleto()
            this.statusPagamentoCliente = true
            this.obterMeuHistorico()
          })
          .catch((err) => {
            this.loading = false
            this.sucesso = false
          })
      } else {
        let pagamentoCartao = {
          email: this.token.email,
          periodicidadePagamento: Number(6),
          diaVencimento: Number(1),
          valor: 0,
          nomeNoCartao: this.cartao.nomeNoCartao,
          numeroCartao: this.cartao.numeroCartao,
          mesExpiracao: this.cartao.mesExpiracao,
          anoExpiracao: this.cartao.anoExpiracao,
          codigoSeguranca: this.cartao.codigoSeguranca,
          qtdParcelas: Number(this.parcelamento),
          valorParcela: (this.precoAdesao * 12) / this.parcelamento,
        }

        this.loading = true
        await this.$axios
          .post('financeiro/pagamento/cartao', pagamentoCartao, config)
          .then((res) => {
            this.loading = false
            this.sucesso = true
            this.statusPagamentoCliente = true
            this.obterMeuHistorico()
          })
          .catch((err) => {
            this.loading = false
            this.sucesso = false
          })
      }
    },
    async downloadBoleto() {
      let config = this.obterHeader()
      this.loading = true

      await this.$axios
        .get('financeiro/' + this.token.email + '/download-boleto', config)
        .then((res) => {
          this.loading = false
          window.open(res.data, '_blank')
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async statusPagamento() {
      this.loading = true
      let config = this.obterHeader()

      await this.$axios
        .get(`financeiro/cliente/${this.token.email}/email/pagamento`, config)
        .then((res) => {
          this.loading = false
          this.statusPagamentoCliente = res.data

          if (!this.statusPagamentoCliente) {
            this.obterValorAdesao()
          } else if (this.statusPagamentoCliente) {
            this.obterMeuHistorico()
          }
        })
        .catch((err) => {
          this.loading = false
        })
    },
    async obterEndereco() {
      if (this.contact.cep.length == 8) {
        this.loading = true
        await this.$axios
          .get(`https://viacep.com.br/ws/${this.contact.cep}/json/`)
          .then((res) => {
            this.loading = false
            this.contact.endereco = res.data.logradouro
            this.contact.complemento = res.data.complemento
          })
          .catch((err) => {
            this.loading = false
          })
      }
    },
    async obterMeuHistorico() {
      let config = this.obterHeader()
      this.loading = true

      await this.$axios
        .get(
          `financeiro/cliente/${this.token.email}/email/historico-pagamentos`,
          config
        )
        .then((res) => {
          this.loading = false
          this.meuHistorico = res.data.historicoPagamentos
        })
        .catch((err) => {
          this.loading = false
        })
    },
    alterarPagina(pagina) {},
  },
})
</script>