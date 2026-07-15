---
description: SenseCAP & Node-RED para Grafana
title: SenseCAP & Node-RED para Grafana
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100_SenseCAP_to_grafana
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1100_SenseCAP_to_grafana/
---
# Conectando SenseCAP ao Grafana via Node-RED

**SenseCAP K1100 - The Sensor Prototype Kit** representa a Seeed Studio concentrando a essência da comunicação LoRa® em tecnologia e produtos de inteligência de borda, para a implantação e o domínio mais fáceis de aplicações LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustes [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração por Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do aplicativo fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}><strong>Sensor Industrial SenseCAP</strong></font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
          <strong>S2100 <br /> Registrador de Dados</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 <br /> Temp. e Umidade do Ar</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
          <strong>S2102 <br /> Luz</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
          <strong>S2103 <br /> Temp. e Umidade do Ar &amp; CO2</strong>
        </a>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
          <strong>S2104 <br /> Umidade e Temp. do Solo</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 <br /> Umidade e Temp. do Solo &amp; EC</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
          <strong>S2110 <br /> Controlador LoRaWAN®</strong>
        </a>
      </td>
      <td bgcolor="#0e3c49" align="center">
        <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
          <strong>S2120 <br /> Estação Meteorológica 8 em 1</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Grafana

Grafana é uma solução de código aberto para executar análises de dados, trazendo métricas que dão sentido à enorme quantidade de dados e para monitorar nossos aplicativos com a ajuda de painéis personalizáveis interessantes. O Grafana se conecta a todas as fontes de dados possíveis, comumente chamadas de bancos de dados, como Graphite, Prometheus, Influx DB, ElasticSearch, MySQL, PostgreSQL etc. Por ser uma solução de código aberto, o Grafana também nos permite escrever plugins do zero para integração com várias fontes de dados diferentes. A ferramenta nos ajuda a estudar, analisar e monitorar dados ao longo de um período de tempo, chamado tecnicamente de análise de séries temporais.

Ele nos ajuda a rastrear o comportamento do usuário, o comportamento da aplicação, a frequência de erros que aparecem em produção ou em um ambiente de pré-produção, o tipo de erros que aparecem e os cenários contextuais fornecendo dados relativos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/1.png" alt="pir" width={800} height="auto" /></p>

O conteúdo deste capítulo continuará a usar o Node-RED introdzido anteriormente e usará o Grafana para visualizar os dados da sua instância InfluxDB 2.4.

Antes disso, prepare o seguinte.

1. Se você ainda não instalou ou não sabe o que é Node-RED, consulte os [Tutoriais de Node-RED & SenseCAP](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/).

2. Comece implantando o SenseCAP no Node-RED do InfluxDB, cujos detalhes podem ser encontrados na wiki [Connect SenseCAP to InfluxDB via Node-RED](https://wiki.seeedstudio.com/pt-br/K1100_SenseCAP_to_influxdb/).

## Criar nó MQTT

**Passo 1.** Inicie o Node-RED

Inicie o Node-RED digitando o comando `node-red` no terminal e abra um navegador e insira o endereço [http://localhost:1880](http://localhost:1880) na barra de endereços para acessar o editor do Node-RED.

**Passo 2.** Criar nó MQTT

Usamos o nó **Network -> mqtt in** e configuramos o mqtt no formato da SenseCAP API conforme solicitado no [tutorial anterior](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc
- Porta: 1883
- Protocolo: MQTT V3.1.1
- ID do Cliente: O formato é `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Seu ID de organização. Nós o obtivemos em [Get the SenseCAP API](/pt-br/K1100_sensecap_node-red#get-the-sensecap-api).
  - `<Random ID>` usa seus próprios números ou letras minúsculas gerados aleatoriamente.

- Formato do Tópico: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Seu ID de organização. Nós o obtivemos em Get the SenseCAP API.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificação exclusiva de dispositivos sensores. Essas informações podem ser encontradas na etiqueta na parte de trás do Grove - Wio E5, bem como no dispositivo do console SenseCAP.</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">Uma interface física no dispositivo à qual o sensor está conectado. Para o kit K1100, o valor padrão aqui é 1.</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">Campos reservados.</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">ID do valor medido. Esse ID pode ser encontrado na seção Measurement IDs da <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentação SenseCAP</a></td>
    </tr>
  </tbody></table>

**Passo 3.** Validar nós MQTT

Depois de configurado, clique no botão **Deploy** no canto superior direito para verificar se a configuração foi bem-sucedida. Se estiver preenchida corretamente, a palavra **Connected** será exibida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Iniciar InfluxDB OSS

:::tip
 Você pode consultar o [tutorial](https://docs.influxdata.com/influxdb/v2.4/install/?t=Windows#start-influxdb) detalhado fornecido pela InfluxDB para concluir a instalação e implantação do InfluxDB, que é compatível com diferentes sistemas. A seguir será orientada a instalação usando um sistema Windows 11 como exemplo.
:::
**Passo 1.** Baixar o InfluxDB v2.4

Clique [aqui](https://dl.influxdata.com/influxdb/releases/influxdb2-2.4.0-windows-amd64.zip) para baixar o arquivo zip do InfluxDB v2.4.

Extraia o arquivo baixado em `C:\Program Files\InfluxData\` e renomeie os arquivos, se desejar.

**Passo 2.** Iniciar o InfluxDB

No Powershell, navegue até `C:\Program Files\InfluxData\influxdb` e inicie o InfluxDB executando o daemon influxd:

```shell
cd -Path 'C:\Program Files\InfluxData\influxdb'
.\influxd
```

:::tip
 Use Powershell ou WSL para executar os comandos influx e influxd. Os exemplos de linha de comando nesta documentação usam influx e influxd como se estivessem instalados no `PATH` do sistema. Se esses binários não estiverem instalados no seu `PATH`, substitua influx e influxd nos exemplos fornecidos por `.\influx` e `.\influxd`, respectivamente.
:::
Por padrão, o InfluxDB usa a porta TCP `8086` para comunicação cliente-servidor por meio da [InfluxDB HTTP API](https://docs.influxdata.com/influxdb/v2.4/reference/api/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/3.png" /></div>

## Configurar InfluxDB

**Passo 1.** Registrar uma conta InfluxDB

Continue com as etapas acima e registre uma conta na página que é aberta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/11.png" /></div>

Anote o **Organisation Name** que você definiu aqui; iremos usá-lo mais tarde na configuração do Node-RED.

**Passo 2.** Obter URL

Por padrão, o InfluxDB usa a porta TCP `8086` para comunicação cliente-servidor por meio da InfluxDB HTTP API.

```
http://localhost:8086/
```

Para esta seção, a URL do InfluxDB é a seguinte, por favor anote-a, pois iremos usá-la posteriormente na configuração do Node-RED.

**Passo 3.** Obter Token de API

Vá para a página API Tokens, como mostrado abaixo, crie uma nova interface de API para o Node-RED e anote o Token.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/13.png" /></div>

## Configurar Node-RED

**Passo 1.** Baixar Palettes do InfluxDB

Clique na barra de menu superior direita e selecione Settings.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Pesquise e instale **node-red-contrib-influxdb** em **Paletts -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

Adicione **influx.batch** da barra de armazenamento à esquerda, dê um clique duplo nele para entrar na página de configuração e clique no botão de edição para editar o nó **influx.batch**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**Passo 2.** Editar nó **influx.batch**:

- **Version**: 2.0.
- **URL**: http://localhost:8086/
- **TOKEN**: Gerado na seção **Obter Token de API**.

Quando terminar, clique no botão **Add** no canto superior direito para retornar à página de propriedades do influx batch; neste ponto, preencha o nome da sua Organization e o Bucket name.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**Passo 3.** Configurar o nó function

O envio de dados para o InfluxDB precisa seguir um formato de dados específico, portanto é necessário adicionar um nó function para processar o formato dos dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arraste o nó function da barra de funções à esquerda, dê um clique duplo nele para entrar na página de edição e copie o código para On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
var payload = msg.payload;
var topic = msg.topic;
var strs = topic.split("/");
var length = strs.length
if (length >= 2) {
    var measurementId = strs[length - 1]
    var body = {}
    var value = payload.value
    if (measurementId == 4100) {
        body.co2 = value
        measurement = "co2"
    } else if (measurementId == 4103) {
        body.soilmoisture = value
        measurement = "soilmoisture"
    } else if (measurementId == 4150) {
        body.accelX = value
        measurement = "accelX"
    } else if (measurementId == 4151) {
        body.accelY = value
        measurement = "accelY"
    } else if (measurementId == 4152) {
        body.accelZ = value
        measurement = "accelZ"
    } else if (measurementId == 4192) {
        body.soundintensity = value
        measurement = "soundintensity"
    } else if (measurementId == 4193) {
        body.lightIntensity = value
        measurement = "lightIntensity"
    } else if (measurementId == 4195) {
        body.tvoc = value
        measurement = "tvoc"
    } else if (measurementId == 4097) {
        body.airtemperature = value
        measurement = "airtemperature"
    } else if (measurementId == 4098) {
        body.airhumidity = value
        measurement = "airhumidity"
    } else if (measurementId == 4175) {
        body.AIdetection_1 = value
        measurement = "AIdetection_1"
    } else if (measurementId == 4176) {
        body.AIdetection_2 = value
        measurement = "AIdetection_2"
    } else if (measurementId == 4177) {
        body.AIdetection_3 = value
        measurement = "AIdetection_3"
    } else if (measurementId == 4178) {
        body.AIdetection_4 = value
        measurement = "AIdetection_4"
    } else if (measurementId == 4179) {
        body.AIdetection_5 = value
        measurement = "AIdetection_5"
    } else if (measurementId == 4180) {
        body.AIdetection_6 = value
        measurement = "AIdetection_6"
    } else if (measurementId == 4181) {
        body.AIdetection_7 = value
        measurement = "AIdetection_7"
    } else if (measurementId == 4182) {
        body.AIdetection_8 = value
        measurement = "AIdetection_8"
    } else if (measurementId == 4183) {
        body.AIdetection_9 = value
        measurement = "AIdetection_9"
    } else if (measurementId == 4184) {
        body.AIdetection_10 = value
        measurement = "AIdetection_10"
    }
    msg.payload = [{
        measurement: measurement,
        fields: body,
        tags: {
            device: "SenseCAP K1100"
        },
        timestamp: new Date()
    }];
}
return msg;
```

Em seguida, conectamos todos os nós e clicamos no botão **Deploy** e, se tudo estiver configurado corretamente, você poderá ver o nó mqtt in mostrando connected.

Se você quiser ver as informações de registro dos dados, pode adicionar um nó debug após o nó function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/17.png" /></div>

Quando o Wio Terminal começar a ligar e funcionar e começar a enviar dados para o servidor SenseCAP PaaS, poderemos verificar os dados no log de debug do Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## Configurar Grafana

**Passo 1.** Instalar Grafana

O Grafana pode ser instalado em muitos sistemas operacionais diferentes. Para obter uma lista dos requisitos mínimos de hardware e software, bem como instruções sobre a instalação do Grafana, consulte [Install Grafana](https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/).

Tomando o Windows 11 como exemplo, baixe o pacote de instalação no [site do Grafana](https://grafana.com/grafana/download?platform=windows) e clique duas vezes para abri-lo para instalação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/16.png" /></div>

**Passo 2.** Fazer login no Grafana

Abra seu navegador e vá para `http://localhost:3000/`. A porta HTTP padrão na qual o Grafana escuta é `3000`, a menos que você tenha configurado uma porta diferente.

Na página de login, insira `admin` como nome de usuário e senha.

Clique em **Sign in**. Se for bem-sucedido, você verá um aviso para alterar a senha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/17.png" /></div>

**Passo 3.** Adicionar fonte de dados

Na página principal, clicamos no ícone de engrenagem no canto inferior esquerdo e depois clicamos em **Add data source**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/18.png" /></div>

Selecione InfluxDB na lista de fontes de dados disponíveis.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/7.png" /></div>

**Passo 3.** Configurar a fonte de dados InfluxDB

Na página de configuração da fonte de dados, insira um nome para sua fonte de dados InfluxDB.

Em seguida, escolha ou insira o seguinte:

- **Query Language**: Flux
- Em HTTP, faça o seguinte:
  - **URL**: http://localhost:8086/
- Em Auth, faça o seguinte:
  - Feche **Basic auth**.
- Em InfluxDB Details, faça o seguinte:
  - **Organization**: ID da organização. O ID da organização pode ser visualizado na página **About** do InfuxDB.
  - **Token**: Seu token de API do InfluxDB.
  - **Default Bucket**: O bucket padrão a ser usado nas consultas Flux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/14.png" /></div>

Clique em **Save & Test**. O Grafana tenta se conectar à fonte de dados InfluxDB 2.4 e retorna os resultados do teste. Se tudo correr bem, você verá a seguinte mensagem de saída.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/15.png" /></div>

## Consultar e visualizar dados

Com sua conexão InfluxDB configurada, use o Grafana e Flux para consultar e visualizar séries temporais de dados armazenadas na sua instância InfluxDB.

Para mais informações sobre o uso do Grafana, consulte a [documentação do Grafana](https://grafana.com/docs/). Se você está apenas começando a aprender Flux, veja [Introdução ao Flux](https://docs.influxdata.com/flux/v0.x/get-started/).

Também damos as boas-vindas ao envio dos seus painéis de dados para nós e aguardamos ansiosamente o seu trabalho!

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
