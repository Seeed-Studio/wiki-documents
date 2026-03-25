---
description: Nó sensor Lorawan baseado em Wio-SX1262 com módulo XIAO esp32s3
title: Nó Sensor LoRaWAN
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67_1.webp
slug: /wio_sx1262_xiao_esp32s3_for_lora_sensor_node
sku: 102010611
sidebar_position: 4
last_update:
  date: 10/23/2024
  author: Evelyn Chen
createdAt: '2024-10-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_lora_sensor_node/
---

# Configurando o Kit XIAO ESP32S3 & Wio-SX1262 como Nó Sensor LoRaWAN

## Introdução

Este wiki fornece um guia passo a passo sobre como configurar o Kit XIAO ESP32S3 & Wio-SX1262 para atuar como um nó sensor LoRaWAN, conectando um sensor de temperatura e umidade DHT20, adicionando um gateway LoRaWAN M2 e enviando dados para a plataforma LNS The Things Network. Ele também aborda a configuração de um decodificador de formato.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/67.png" style={{width:900, height:'auto'}}/></div>

## Pré-requisitos

- Kit XIAO ESP32S3 & Wio-SX1262
- Sensor de temperatura e umidade DHT20
- Placa de Expansão XIAO
- Gateway LoRaWAN Interno M2
- Acesso a uma conta The Things Network

<div class="table-center">
  <table align="center">
    <tr>
      <th>Kit XIAO ESP32S3 & Wio-SX1262</th>
      <th>Placa de Expansão XIAO</th>
      <th>Sensor de temperatura & umidade DHT20</th>
      <th>Gateway LoRaWAN Interno M2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuração de Hardware

1. Conecte o módulo Wio-SX1262 ao XIAO ESP32S3.
2. Conecte o sensor DHT20 (conector Grove I2C) e o Kit XIAO ESP32S3 & Wio-SX1262 à Placa de Expansão XIAO.
3. Conecte o kit ao seu PC.
4. Conecte o gateway M2 à alimentação e à porta Ethernet.

## Instruções em Vídeo

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/7NptcHkVcpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Registrar & Configurar no TTN

Acesse https://www.thethingsnetwork.org/get-started e registre-se - como em qualquer outro site. Estas instruções são para o TTS Sandbox.

Vá para [as instruções do TTS Sandbox](https://www.thethingsnetwork.org/get-started) e registre-se.
Depois de confirmar seu endereço de e-mail, você pode fazer login no [console](https://console.cloud.thethings.network/). Se tiver alguma dúvida, você pode perguntar no [fórum The Things Network](https://www.thethingsnetwork.org/forum/). Você faz login exatamente com os mesmos dados.

### Registrar o gateway no TTN

É mais simples registrar seu gateway primeiro. Eu peguei o [SenseCAP M2 LoRaWAN Indoor Gateway(SX1302)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-AS923-p-5473.html) como exemplo.

Para o seu gateway LoRaWAN pessoal, você pode ler os conceitos-chave e a solução de problemas [aqui](https://www.thethingsindustries.com/docs/gateways/).

### Criar um novo aplicativo no TTN

Um aplicativo é como uma caixa para manter alguns dispositivos dentro - normalmente fazendo a mesma coisa - em implantações maiores isso pode ser milhares de dispositivos semelhantes. No começo provavelmente serão apenas alguns, então não há necessidade de se preocupar em como dividir seu uso por enquanto.

Depois de fazer login no console, você pode entrar em Applications para criar seu primeiro aplicativo. O ID deve ser todo em minúsculas ou números, sem espaços, hífens são permitidos e ele precisa ser único em toda a comunidade TTN - então first-app será rejeitado - você poderia usar your-username-first-app, pois isso provavelmente será único. O nome e a descrição são para seu próprio uso e são opcionais.

### Registrar dispositivo final no TTN

**Passo 1**. Vá para o aplicativo que você criou na etapa anterior.

**Passo 2**. Clique para criar um novo dispositivo final

No lado direito, aproximadamente no meio, no resumo do seu aplicativo, há um grande botão azul **+ Register end device**. Clique nele para criar as configurações do seu primeiro dispositivo.

**Passo 3**. Insira os detalhes do dispositivo final

Você está criando seu próprio dispositivo usando uma pilha LoRaWAN de terceiros, então não haverá uma entrada no repositório de dispositivos, portanto escolha '**Enter end device specifics manually**'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/61.png" style={{width:400, height:'auto'}}/></div>

**Passo 4**. Insira os detalhes do dispositivo

Escolha o **Frequency plan** apropriado para sua região. Considere que quase todos os países têm leis relacionadas às frequências que você utiliza, então não seja criativo. Para a Europa, use a opção recomendada. Para outras regiões, use a entrada marcada como 'used by TTN'. Neste caso, selecione **868 MHz**.

Escolha **LoRaWAN 1.1.0** - o último da lista - a especificação mais recente. **RadioLib usa RP001 Regional Parameters 1.1 revision A**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/62.png" style={{width:400, height:'auto'}}/></div>

Neste ponto, será solicitado o seu **JoinEUI**. Como este é um dispositivo DIY e estamos usando RadioLib, você pode usar **todos zeros**, conforme recomendado pelo documento de Recomendações Técnicas TR007 da LoRa Alliance. Depois de inserir todos zeros e clicar em confirmar, será solicitado um **DevEUI**, **AppKey** e **NwkKey**. É preferível que o console os **gere** para que fiquem devidamente formatados.

Seu End device ID pode ser alterado para tornar o dispositivo mais identificável. Algo relacionado ao seu hardware ajuda - como **test-device**. Então você pode clicar no botão azul '**Register device**'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/63.png" style={{width:400, height:'auto'}}/></div>

**Passo 5**. Copiar os detalhes do dispositivo para o arquivo de configuração no Arduino

Em seguida, você precisa copiar os detalhes do dispositivo para o **arquivo de configuração** do RadioLib. Há botões para copiar itens para a área de transferência, assim você não precisa digitá-los manualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/64.png" style={{width:400, height:'auto'}}/></div>

## Configurar o Kit XIAO ESP32S3 & Wio-SX1262 como Nó Sensor LoRaWAN

O código é escrito em Arduino e foi projetado para configurar um módulo Wio-SX1262 juntamente com uma placa XIAO ESP32S3 para atuar como um nó sensor LoRaWAN. Ele conecta um sensor DHT20 para ler dados de temperatura e umidade e envia esses dados via LoRaWAN para o The Things Network.

### Instalar as bibliotecas necessárias para XIAO ESP32S3 e sensor DHT20

- Instalar o Ambiente Arduino para XIAO ESP32S3

Consulte https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/#software-preparation.

- Instalar a biblioteca do sensor `DHT20`
pacote:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/DHT.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download ⬇️</font></span></strong>
    </a>
</div>

- Instalar a biblioteca `RadioLib`
Nota. Instale a **versão 6.6.0**, caso contrário o código não será compilado.

### Configuração

**Passo 1**. Preencher os parâmetros de autenticação do dispositivo LoRaWAN e de acesso à rede

`RADIOLIB_LORAWAN_JOIN_EUI` e `RADIOLIB_LORAWAN_DEV_EUI` são usados para identificação do dispositivo quando ele entra na rede LoRaWAN. Assim como em uma grande comunidade online, esses dois parâmetros são o "cartão de identidade" do dispositivo, permitindo que a rede saiba qual dispositivo está solicitando para entrar.

`RADIOLIB_LORAWAN_APP_KEY` e `RADIOLIB_LORAWAN_NWK_KEY` são usados para autenticação de segurança e controle de acesso à rede. Eles são semelhantes à "senha" para entrar na comunidade da rede, garantindo que apenas dispositivos com as chaves corretas possam se comunicar com segurança com a rede. Além disso, eles podem restringir a operação do dispositivo de acordo com as permissões do aplicativo (distinguido por APP_KEY) e da rede (distinguida por NWK_KEY).

Basta **copiar** o parâmetro do TTN para o arquivo de configuração.

1. Aqui, é definido um macro chamado `RADIOLIB_LORAWAN_JOIN_EUI`. Se esse macro não for definido em outro lugar, ele será definido como um valor hexadecimal de `todos zeros`.

```cpp
#ifndef RADIOLIB_LORAWAN_JOIN_EUI
#define RADIOLIB_LORAWAN_JOIN_EUI  0x0000000000000000
#endif
```

2. Da mesma forma, a macro `RADIOLIB_LORAWAN_DEV_EUI` é definida, representando o `DevEUI` (Identificador Único do Dispositivo), com um valor hexadecimal específico definido aqui, que é usado para identificação do dispositivo quando ele entra na rede LoRaWAN.

```cpp
#ifndef RADIOLIB_LORAWAN_DEV_EUI
#define RADIOLIB_LORAWAN_DEV_EUI   0x****************
#endif
```

1. As macros `RADIOLIB_LORAWAN_APP_KEY` e `RADIOLIB_LORAWAN_NWK_KEY` são definidas, representando respectivamente a AppKey e a NwkKey, usadas para autenticação de segurança e controle de acesso à rede.

```cpp
#ifndef RADIOLIB_LORAWAN_APP_KEY
#define RADIOLIB_LORAWAN_APP_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif

#ifndef RADIOLIB_LORAWAN_NWK_KEY   // Put your Nwk Key here
#define RADIOLIB_LORAWAN_NWK_KEY   0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**, 0x**
#endif
```

4. As seguintes macros são definidas, representando os `parâmetros de uplink LoRaWAN`. Esses parâmetros são usados para configurar o payload de uplink enviado para a rede LoRaWAN.

```cpp
#define LORAWAN_UPLINK_USER_PORT  2
#define LORAWAN_UPLINK_DATA_RATE  3

#define LORAWAN_UPLINK_PERIOD     10000 // ms

#define LORAWAN_UPLINK_DATA_MAX   115 // byte
```

**Passo 2**. Selecione os parâmetros regionais LoRaWAN

Há várias opções regionais disponíveis para comunicação LoRaWAN, incluindo `EU868` (banda europeia de 868 MHz), `US915` (banda de 915 MHz dos Estados Unidos), `AU915` (banda de 915 MHz da Austrália), `AS923` (banda de 923 MHz da Ásia), `IN865` (banda de 865 MHz da Índia), `KR920` (banda de 920 MHz da Coreia do Sul), `CN780` (banda de 780 MHz da China) e `CN500`.

A linha const `LoRaWANBand_t Region = EU868;` define a região para a comunicação LoRaWAN como EU868. Isso significa que o dispositivo será configurado para operar na faixa de frequência europeia de 868 MHz.

Para US915 e AU915 é definida uma variável de sub-banda. Neste caso, ela é definida como 0. O comentário sugere que essa variável de sub-banda é especificamente para as regiões US915 e AU915, embora não esteja sendo usada para a região EU868 neste trecho de código.

```cpp
const LoRaWANBand_t Region = EU868;
const uint8_t subBand = 0; // For US915 and AU915
```

### Ler dados do sensor e enviar payload de uplink LoRa

Leia e envie dados do sensor via comunicação LoRa. A conversão para bytes com precisão decimal permite uma representação mais precisa dos valores de temperatura e umidade no payload de uplink.

```cpp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    uplinkPayloadLen = 0;
    memset(uplinkPayload, sizeof(uplinkPayload), 0);

    // Convert temperature and humidity to bytes with decimal precision
    uint16_t tempDecimal = (temp_hum_val[1] * 100);
    uint16_t humDecimal = (temp_hum_val[0] * 100);
    uplinkPayload[uplinkPayloadLen++] = (tempDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = tempDecimal & 0xFF;
    uplinkPayload[uplinkPayloadLen++] = (humDecimal >> 8);
    uplinkPayload[uplinkPayloadLen++] = humDecimal & 0xFF;

    for (int i = 0; i < uplinkPayloadLen; i++) {
      Serial.print(uplinkPayload[i], HEX);
      Serial.print(" ");
    }
```

## Gravar Firmware

O pacote de firmware completo está aqui:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download ⬇️</font></span></strong>
    </a>
</div>

Faça o download e grave-o no XIAO ESP32S3. Para o primeiro uso do XIAO ESP32S3, consulte [o tutorial de gravação](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/#software-preparation) aqui.

## Configurar o Formatador de Payload

O formatador de payload é usado para converter os dados brutos recebidos do sensor em um formato legível por humanos. Neste caso, o formatador de payload é usado para converter os dados brutos recebidos do sensor DHT20 em um formato JSON.

Tipo de formatador: `Custom Javascript formatter`

```js
function decodeUplink(input) {
  var bytes = input.bytes;
  var temperatureDecimal = (bytes[0] << 8) | bytes[1];
  var humidityDecimal = (bytes[2] << 8) | bytes[3];

  var temperature = temperatureDecimal / 100;
  var humidity = humidityDecimal / 100;

  return {
    data: {
      temperature: temperature,
      humidity: humidity
    }
  };
}
```

## Monitorar dados LoRaWAN

Para a atividade específica de um dispositivo, clique no dispositivo na lista do meio. O menu principal de um dispositivo possui opções como Visão Geral do Dispositivo, Dados em Tempo Real, etc. Clique em **Live Data** ou no link acima da caixa de atividade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/65.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/66.png" style={{width:800, height:'auto'}}/></div>

## Recurso

- [Pacote de Código](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Wio_SX1262_XIAO_ESP32S3_code_package_20241025.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
