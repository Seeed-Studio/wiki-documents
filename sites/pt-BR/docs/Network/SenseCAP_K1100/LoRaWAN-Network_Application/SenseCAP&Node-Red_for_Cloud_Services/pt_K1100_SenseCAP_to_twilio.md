---
description: SenseCAP e Node-RED para Twilio
title: SenseCAP e Node-RED para Twilio
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100_SenseCAP_to_twilio
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1100_SenseCAP_to_twilio/
---

# Conectando SenseCAP ao Twilio via Node-RED

**SenseCAP K1100 - The Sensor Prototype Kit** representa a Seeed Studio concentrando a essência da comunicação LoRa® em tecnologia e produtos de inteligência de borda, para a implantação e domínio mais fáceis de aplicações LoRa® e IoT.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## Atualizável para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas o ajuda com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial bem-sucedido.

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

## Twilio

Twilio é uma plataforma de engajamento de clientes usada por centenas de milhares de empresas e mais de dez milhões de desenvolvedores em todo o mundo para criar experiências únicas e personalizadas para seus clientes.

Twilio é conhecida por democratizar canais como voz, texto, chat, vídeo e e-mail por meio de APIs, tornando fácil para qualquer organização construir interações significativas com os clientes nos canais que eles preferem.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/1.jpg" alt="pir" width={700} height="auto" /></p>

Esta seção usará o kit SenseCAP K1100, bem como o console SenseCAP e o Node-RED, para concluir a tarefa de acionar o envio de uma mensagem do Twilio sob certas condições.

Se você ainda não instalou ou não sabe o que é Node-RED, consulte [Tutoriais de Node-RED & SenseCAP](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/).

## Criar nó MQTT

**Passo 1.** Inicie o Node-RED

Inicie o Node-RED digitando o comando `node-red` no terminal e abra um navegador e insira o endereço [http://localhost:1880](http://localhost:1880) na barra de endereços para acessar o editor do Node-RED.

**Passo 2.** Criar nó MQTT

Usamos o nó **Network -> mqtt in** e configuramos o mqtt no formato da SenseCAP API, conforme solicitado no [tutorial anterior](https://wiki.seeedstudio.com/pt-br/K1100_sensecap_node-red/#mqtt-node).

- Servidor: openstream.api.sensecap.seeed.cc
- Porta: 1883
- Protocolo: MQTT V3.1.1
- Client ID: O formato é `org-<Organization ID>-<Random ID>`
  - `<Orgnization ID>` Seu ID de organização. Nós o obtivemos em [Obter a SenseCAP API](/pt-br/K1100_sensecap_node-red#obter-a-sensecap-api).
  - `<Random ID>` use seus próprios números ou letras minúsculas gerados aleatoriamente.

- Formato do Tópico: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">Seu ID de organização. Nós o obtivemos em Obter a SenseCAP API.</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">Identificação exclusiva dos dispositivos sensores. Essas informações podem ser encontradas na etiqueta na parte de trás do Grove - Wio E5, bem como no dispositivo do console SenseCAP.</td>
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
      <td align="center">ID do valor medido. Este ID pode ser encontrado na seção Measurement IDs da <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">documentação SenseCAP</a></td>
    </tr>
  </tbody></table>

**Passo 3.** Validar nós MQTT

Depois de configurado, clique no botão **Deploy** no canto superior direito para verificar se a configuração foi bem-sucedida. Se estiver tudo preenchido corretamente, a palavra **Connected** será exibida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Configurar Twilio

**Passo 1.** Registrar-se ou fazer login no Twilio

Se você já se registrou no Twilio, faça login no [site do Twilio](https://www.twilio.com/login).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/3.png" /></div>

Se você não usa ou não se registrou no Twilio, conclua seu registro e faça login [aqui](https://www.twilio.com/try-twilio).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/2.png" /></div>

**Passo 2.** Obter as informações necessárias

Podemos tentar usar um serviço gratuito que envia mensagens SMS para o celular que verificamos durante o registro.

Clique em **Get a trial phone number** na tela principal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/4.png" /></div>

O Twilio irá então gerar automaticamente um número de telefone Twilio para você.

Na parte inferior da tela principal, em **Account Info**, você encontrará o que precisamos para criar uma conexão com o Twilio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/5.png" /></div>

Anote o **Account SID**, **Auth Token** e **My Twilio phone number**, que usaremos depois no Node-RED.

## Configurar Node-RED

**Passo 1.** Baixar Paletts do Twilio

Clique na barra de menu superior direita e selecione Settings.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

Pesquise e instale **node-red-node-twilio** em **Paletts -> Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/6.png" /></div>

Adicione **twilio out** da barra de armazenamento à esquerda, clique duas vezes nele para entrar na página de configuração e depois clique no botão de edição para editar o nó **twilio out**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/7.png" /></div>

**Passo 2.** Editar o nó **twilio out**

Preencha os campos correspondentes com as informações que obtivemos na configuração anterior do Twilio. Em seguida, basta clicar no botão Add no canto superior direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/8.png" /></div>

Em seguida, preencha o número de celular que você registrou no Twilio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/9.png" /></div>

:::note
Observe que você precisa adicionar o prefixo "**+ código do país**" ao número de celular que você preencher aqui.
:::
**Passo 3.** Configurar o nó function

O conteúdo do SMS pode ser definido no bloco function, e as condições de disparo podem ser que os dados relatados pela plataforma PaaS acionem certas regras, tudo isso pode ser personalizado no bloco de construção function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

Arraste o nó function da barra de funções à esquerda, clique duas vezes nele para entrar na página de edição e, em seguida, copie o código para On Message.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

Por exemplo, nesta seção, quando um valor de sensor é recebido, o valor do sensor é enviado para o telefone e o código pode ser escrito assim.

```javascript
var payload = msg.payload;
var topic = msg.topic;
var strs = topic.split("/");
var length = strs.length
if (length >= 2) {
    var measurementId = strs[length - 1]
    var value = payload.value
    if (measurementId == 4100) {
        msg.payload = "CO2:" + value
    } else if (measurementId == 4103) {
        msg.payload = "soilmoisture:" + value
    } else if (measurementId == 4150) {
        msg.payload = "accelX:" + value
    } else if (measurementId == 4151) {
        msg.payload = "accelY:" + value
    } else if (measurementId == 4152) {
        msg.payload = "accelZ:" + value
    } else if (measurementId == 4192) {
        msg.payload = "sound:" + value
    } else if (measurementId == 4193) {
        msg.payload = "light:" + value
    } else if (measurementId == 4195) {
        msg.payload = "tvoc:" + value
    } else if (measurementId == 4097) {
        msg.payload = "temperature:" + value
    } else if (measurementId == 4098) {
        msg.payload = "humidity:" + value
    } else if (measurementId == 4175) {
        msg.payload = "AIdetection_1:" + value
    } else if (measurementId == 4176) {
        msg.payload = "AIdetection_2:" + value
    } else if (measurementId == 4177) {
        msg.payload = "AIdetection_3:" + value
    } else if (measurementId == 4178) {
        msg.payload = "AIdetection_4:" + value
    } else if (measurementId == 4179) {
        msg.payload = "AIdetection_5:" + value
    } else if (measurementId == 4180) {
        msg.payload = "AIdetection_6:" + value
    } else if (measurementId == 4181) {
        msg.payload = "AIdetection_7:" + value
    } else if (measurementId == 4182) {
        msg.payload = "AIdetection_8:" + value
    } else if (measurementId == 4183) {
        msg.payload = "AIdetection_9:" + value
    } else if (measurementId == 4184) {
        msg.payload = "AIdetection_10:" + value
    }
}
return msg;
```

:::note
Fique de olho no saldo da sua conta, o código acima enviará um SMS de sensor diferente a cada cinco minutos. Isso pode esgotar rapidamente seu saldo se você usar o código acima diretamente! Recomendamos programar para um sensor específico em vez de enviar cada valor de sensor uma vez.
:::
**Passo 4.** Deploy

Em seguida, conectamos todos os nós e clicamos no botão **Deploy** e, se tudo estiver configurado corretamente, você poderá ver o nó mqtt in mostrando connected.

Se você quiser ver as informações de log dos dados, pode adicionar um nó debug após o nó function.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/10.png" /></div>

Quando o Wio Terminal começar a ligar e funcionar e começar a enviar dados para o servidor SenseCAP PaaS, então poderemos verificar os dados no log de depuração do Node-RED.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/11.png" /></div>

Se tudo correr bem, você também receberá uma mensagem de texto do Twilio com os valores de dados do sensor.

## Solução de problemas

> P1: Por que não consigo encontrar a Palette no Node-RED?

R: Se você não conseguir encontrar a Palette nas configurações, verifique no seu terminal se há uma mensagem de erro ao iniciar o Node-RED.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

O cenário mais comum é que sua versão do npm é muito antiga para iniciar o editor Palette.

Se sua situação for como a descrita acima, execute o **Powershell como administrador** e insira o seguinte comando para atualizar o npm.

```sh
npm install -g npm
```

Depois, basta reiniciar o Node-RED.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
