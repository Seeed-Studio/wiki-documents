---
description: SenseCAP e Node-RED para InfluxDB
title: SenseCAP e Node-RED para InfluxDB
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100_SenseCAP_to_influxdb
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1100_SenseCAP_to_influxdb/
---

# Conectando SenseCAP ao InfluxDB via Node-RED

**SenseCAP K1100 - The Sensor Prototype Kit** representa a Seeed Studio concentrando a essência da comunicação LoRa® em tecnologia e produtos de inteligência de borda, para a implantação e o domínio mais fáceis de aplicações LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

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

## Sobre o InfluxDB

**InfluxDB** é um banco de dados de séries temporais de código aberto, com foco em leitura de alto desempenho, gravação de alto desempenho, armazenamento eficiente e análise em tempo real de grandes quantidades de dados de séries temporais. Além de protocolos nativos como HTTP e UDP, também é compatível com protocolos de comunicação de componentes como CollectD, Graphite, OpenTSDB e Prometheus. Amplamente utilizado em monitoramento DevOps, monitoramento de IoT, análise em tempo real e outros cenários.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/1.png" /></div>

O conteúdo deste capítulo continuará a usar o Node-RED apresentado anteriormente e facilitará o gerenciamento do kit K1100 no InfluxDB por meio do uso do Node-RED.

Se você ainda não instalou ou não sabe o que é Node-RED, consulte [Tutoriais de Node-RED & SenseCAP](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/).

## Criar nó MQTT

**Passo 1.** Iniciar o Node-RED

Inicie o Node-RED digitando o comando `node-red` no terminal e abra um navegador e insira o endereço [http://localhost:1880](http://localhost:1880) na barra de endereços para acessar o editor do Node-RED.

**Passo 2.** Criar nó MQTT

Usamos o nó **Network -> mqtt in** e configuramos o mqtt no formato da SenseCAP API conforme solicitado no [tutorial anterior](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc
- Porta: 1883
- Protocolo: MQTT V3.1.1
- Client ID: O formato é `org-<Organization ID>-<Random ID>`
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
      <td align="center">ID do valor medido. Este ID pode ser encontrado na seção Measurement IDs da <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentação do SenseCAP</a></td>
    </tr>
  </tbody></table>

**Passo 3.** Validar nós MQTT

Uma vez configurado, clique no botão **Deploy** no canto superior direito para verificar se a configuração foi bem-sucedida. Se estiver tudo preenchido corretamente, a palavra **Connected** será exibida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar InfluxDB

**Passo 1.** Registrar-se ou fazer login no InfluxDB

Se você já se registrou no InfluxDB, faça login no [site do InfluxDB](https://www.influxdata.com/).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/2.png" /></div>

Se você não usa ou não se registrou no InfluxDB, conclua seu registro e login [aqui](https://cloud2.influxdata.com/signup).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/3.png" /></div>

:::tip
Ao se registrar, pode aparecer uma página pedindo para você escolher o provedor, você pode escolher de acordo com sua preferência ou simplesmente escolher um.
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/4.png" /></div>

**Passo 2.** Obter API Token

Conforme mostrado abaixo, clique em **Bucket**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/5.png" /></div>

Em seguida, clique em CREATE BUCKET.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/6.png" /></div>

Digite o nome na nova janela pop-up e selecione o período de retenção de dados gratuito - 30 dias.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/7.png" /></div>

Depois, conforme mostrado abaixo, clique em **API Tokens**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100_influxdb/8.png" /></div>

Então escolhemos criar um **Custom API Token**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/9.png" /></div>

Dê permissões de **read** e **write** aos Buckets que acabamos de criar e clique no botão Create abaixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/10.png" /></div>

Depois de criado, você pode salvá-lo copiando o API Token para a área de transferência. Salve-o em um local seguro por enquanto, pois iremos usá-lo em um passo posterior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/11.png" /></div>

:::note
Se você fechar a janela aqui, não poderá obter este API Token novamente.
:::

## Configurar Node-RED

**Passo 1.** Baixar Paletts do InfluxDB

Clique na barra de menu superior direita e selecione Settings.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Pesquise e instale **node-red-contrib-influxdb** em **Paletts -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

Adicione **influx.batch** da barra de armazenamento à esquerda, clique duas vezes nele para entrar na página de configuração e clique no botão de edição para editar o nó **influx.batch**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**Passo 2.** Editar o nó **influx.batch**:

- **Version**: 2.0.
- **URL**: Obtida em **Settings** -> **Orgnization Profile**.
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_influxdb/14.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/15.png" /></div>

- **TOKEN**: Que você gera na seção **Obtain API Token**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/16.png" /></div>

Quando terminar, clique no botão **Add** no canto superior direito para voltar à página de propriedades do influx batch, neste ponto preencha sua Orgnization (o padrão é o endereço de e-mail que você usou para se registrar no InfluxDB) e o nome do Bucket.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**Passo 3.** Configurar o nó function

O reporte de dados para o InfluxDB precisa seguir um formato de dados específico, portanto é necessário adicionar um nó function para processar o formato de dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arraste o nó function da barra de funções à esquerda, clique duas vezes nele para entrar na página de edição e copie o código para On Message.

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

Depois conectamos todos os nós e clicamos no botão **Deploy** e, se tudo estiver configurado corretamente, você poderá ver o nó mqtt in mostrando connected.

Se você quiser ver as informações de log dos dados, pode adicionar um nó debug após o nó function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/17.png" /></div>

Quando o Wio Terminal começar a ligar e funcionar e começar a enviar dados para o servidor SenseCAP PaaS, então poderemos verificar os dados no log de debug do Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## Configurar dashboards visuais do InfluxDB

Para obter uma visualização mais visual dos dados do sensor, podemos desenhar alguns gráficos de linha.

Volte para o InflucDB Cloud e clique em **CREATE DASHBOARD** para **ADD CELL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/19.png" /></div>

Se o SenseCAP tiver começado a enviar mensagens de dados para o InfluxDB, então você poderá ver o rótulo do sensor nesta página. Para o conteúdo dos dados que você deseja exibir, basta marcar a caixa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/23.png" /></div>

## Solução de Problemas

> P1: Por que não consigo encontrar a Palette no Node-RED?

R: Se você não conseguir encontrar a Palette nas configurações, verifique se há uma mensagem de erro em seu terminal quando iniciar o Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

O cenário mais comum é que sua versão do npm é muito antiga para iniciar o editor de Palette.

Se sua situação for como a descrita acima, execute o **Powershell como administrador** e digite o seguinte comando para atualizar o npm.

```sh
npm install -g npm
```

Então basta reiniciar o Node-RED.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
