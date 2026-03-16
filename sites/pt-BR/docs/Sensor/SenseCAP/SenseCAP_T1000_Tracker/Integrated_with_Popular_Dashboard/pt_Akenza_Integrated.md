---
description: Conectar o SenseCAP T1000 Tracker ao Akenza
title: Akenza Integrado (via TTS)
keywords:
  - Tracker
  - Akenza
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_Tracker_Akenza
last_update:
  date: 8/25/2023
  author: Jessie
createdAt: '2023-08-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_Tracker_Akenza/
---

[Akenza](https://akenza.io/) é a plataforma de habilitação de aplicações IoT, permitindo que você desenvolva ótimos produtos e serviços de IoT com valor. Ela conecta, controla e gerencia dispositivos IoT, tudo em um só lugar.

Neste tutorial você aprenderá como integrar o [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) da Seeed com o TTN no Akenza.
​
<div align="right">
Escrito pela Equipe Akenza
</div>

[Source](https://docs.akenza.io/akenza.io/tutorials/add-devices/how-to-integrate-the-seeed-sensecap-t1000-tracker-on-akenza)

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBvnwVdfDW4JXHXEbrjs3%2FT1000%20tracker.png?alt=media&token=dedacd81-e952-4e83-90bf-f004e99adc08" alt="pir" width={400} height="auto" /></p>


:::info
**Aplicações**:
Rastreamento de ativos internos/externos para vários casos de uso: <br/>
Rastreamento internacional de ativos<br/>
Monitoramento de equipamentos<br/>
Rastreamento de equipamentos compartilhados e mais.<br/>
Casos de segurança pessoal (casa de repouso, busca e salvamento) graças ao botão SOS e buzzer embutido.<br/>

**Características do produto**: <br/>
3 tecnologias de posicionamento para ambientes internos e externos: GNSS, Bluetooth e Wi-Fi<br/>
Sensores de temperatura, luz e movimento<br/>
Botão SOS e buzzer<br/>
Dispositivo do tamanho de um cartão com apenas 6,5 mm de espessura
:::


### Primeiros passos

Neste tutorial, você aprenderá como registrar o rastreador T1000 da Seeed no akenza usando o provedor de conectividade The Things Network (TTN). 

:::info
Aqui vamos supor que você não tenha uma conta existente no TTN e conectará o dispositivo usando o [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) do akenza. 

Se você já tiver uma conta no TTN, pode, é claro, sincronizá-la diretamente usando o nosso painel de [integration](https://docs.akenza.io/akenza.io/get-started/your-integration#2.-integrations).
:::

Para registrar um novo dispositivo na plataforma, você precisará criar um `Data Flow`, que define a cadeia de processamento de dados no akenza. 

### Criando um Data Flow

#### Device Connector

Para criar um **Data Flow**, vá para `Data Flow` e selecione `Create Data Flow`. 

Escolha `LoRa` como seu Device Connector. Se você integrou sua conta TTN, verá ela listada aqui. Se você não tiver sua própria conta, pode fazer uso do [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) do akenza.

Selecione The Things Network.
<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBNwN5xlVesDpVxHQ3H4d%2FT1000-DF.png?alt=media&token=540e39fd-bea3-46dd-84a7-6af601e772f7" alt="pir" width={800} height="auto" /></p>

#### Device Type

O **Device Type** especifica o decodificador de payload a ser usado para decodificar os dados do dispositivo.

Use o campo de busca para encontrar o dispositivo **T1000** e selecione o Device Type correspondente. Em seguida, prossiga para Output connectors.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FUuglz0pXA3SEsX59cdxJ%2FT1000-DF-2.png?alt=media&token=16c0dd80-f402-4477-857b-b0de9601b27b" alt="pir" width={800} height="auto" /></p>

#### Output Connector

Escolha um ou vários Output connectors para o seu Data Flow. **Output Connectors** definem onde os dados do dispositivo serão armazenados e/ou processados.

Prossiga escolhendo o **Akenza DB**. 

Com a conexão ao Akenza DB, garantimos que todos os dados que passam por esse data flow sejam salvos no Banco de Dados Akenza e, assim, se tornem acessíveis para você. Salve seu **Data Flow** e dê a ele um nome.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FSOGhuXN5SrmIMjchCCJP%2FT1000-DF-3.png?alt=media&token=7e43e9ab-1a9a-4609-b1c7-36ceeaf71635" alt="pir" width={800} height="auto" /></p>


### Conectar o dispositivo T1000 da Seeed

Para criar um novo dispositivo, selecione `Create Device within the menu of Assets Inventory`. Adicione um nome de dispositivo e, opcionalmente, uma descrição, uma [tag](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-tags-on-akenza) ou [custom fields](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-custom-fields-on-akenza). 

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FI6gtMgKsAlazzNMO2Umz%2FT1000-CD-1.png?alt=media&token=ef5c5b56-1409-4b89-8893-66ca3bdb5822" alt="pir" width={800} height="auto" /></p>

Na próxima etapa, selecione o **Data Flow** que você criou anteriormente.
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FVPZ35a4DKdujIqlP84gR%2FT1000-CD-2.png?alt=media&token=73ced82f-ea7b-436c-a42d-36dc44ec3f12" alt="pir" width={800} height="auto" /></p>

Agora preencha todos os **Connectivity Parameters** do seu rastreador T1000. Eles são fornecidos pelo fabricante do dispositivo.

Conclua o processo clicando em Create Device.

Seu dispositivo T1000 tracker agora será exibido na **Asset Inventory Overview**.

Para verificar os dados recebidos do seu dispositivo, selecione-o na lista e veja o status em **Data Overview**.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2Fllgd7HtP8VBZbAgeNU4M%2FT1000-Asset.png?alt=media&token=2665b736-aed6-4533-b7bb-aaa5542f5d67" alt="pir" width={800} height="auto" /></p>

**Parabéns**, você conectou com sucesso o rastreador Seeed SenseCAP T1000-A ao akenza via rede TTN LoRaWAN!

### Como configurar o tracker via Bluetooth

O SenseCAP Mate App da Seeed permite que você configure os diferentes modos de trabalho e outras configurações do tracker.<br/> 
Para iOS, pesquise por “SenseCAP Mate” na App Store e faça o download.<br/>
Para Android, pesquise por “SenseCAP Mate” na Google Store e faça o download.<br/>
Consulte o [User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) do dispositivo para uma descrição detalhada dos diferentes modos de trabalho e configurações.

### Como configurar o tracker via LoRa Downlink

Como alternativa ao aplicativo móvel, você pode configurar o T1000 tracker diretamente usando pacotes de [downlink](https://docs.akenza.io/akenza.io/get-started/connectors/downlink).<br/>
Para isso, navegue até a página de detalhes do dispositivo do seu tracker e selecione a aba Downlink.<br/>
Basta inserir o payload HEX correto e o número da Port e prosseguir clicando em Send message.<br/>
Consulte o [User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) do dispositivo para uma descrição detalhada dos diferentes modos de trabalho e configurações.
​
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2F5KtoZmSstaZQ7vMLevdo%2FT1000-downlink.png?alt=media&token=e8d29de7-9b7a-4c57-8376-443ceb8c9ee1" alt="pir" width={800} height="auto" /></p>

### 🚀 Indo além com geofense e visualização no mapa

Agora que você está recebendo dados de localização do seu dispositivo, pode aproveitar outros recursos de rastreamento de ativos do akenza, a saber, o bloco de lógica de geofense e o construtor de dashboards.

#### Geofense Logic Block

Crie ações e notificações com base na localização do seu dispositivo graças ao nosso bloco de geofense sem código. 

Basta especificar uma entrada de dados, neste caso o T1000 tracker, adicionar o bloco de geofense, criar sua fense personalizada e, finalmente, definir uma ação resultante acionada quando o dispositivo entra ou sai da fense.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FhlQoCpjhK7JyUYmUTGSg%2FT1000-geofense.png?alt=media&token=835f6423-4474-44d6-8712-cd6c500e6f7f" alt="pir" width={800} height="auto" /></p>

#### Visualização de mapa do Dashboard Builder

Exiba a posição do seu T1000 tracker em tempo real graças ao componente de mapa do construtor de dashboards.

Basta ir até o Dashboard Builder e criar um novo dashboard. Como alternativa, você pode usar o modelo Asset Tracking como ponto de partida. Adicione um componente Map e selecione o T1000 tracker como fonte dos dados. Selecione as leituras de Latitude e Longitude do sensor e adicione pontos de Marker Data adicionais, se necessário (por exemplo, carga da bateria).

Agora você pode acompanhar seus ativos em tempo real no mapa e até exibir o caminho deles clicando em Track ao lado do ícone do dispositivo.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FaCi1AyERgs0q0L1Gidjq%2FT1000-map.png?alt=media&token=5d461816-1e73-48ab-bbd8-3edb8bc139f8" alt="pir" width={800} height="auto" /></p>