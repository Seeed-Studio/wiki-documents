---
description: Primeiros passos com o sensor Grove Offline Voice Recognition.
title: Grove Offline Voice Recognition sensor
keywords:
  - gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Grove-Offline-Voice-Recognition
sku: 107020149
last_update:
  date: 01/02/2024
  author: Allen
createdAt: '2024-01-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Offline-Voice-Recognition/
---

# Grove Offline Voice Recognition

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/headPic.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Offline-Voice-Recognition-Module-p-5861.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>


## Introdução

O módulo Grove - Offline Voice recognition é adequado para reconhecimento de voz puramente offline e de baixo consumo, baseado no módulo VC-02. Ele possui até 150 comandos pré-programados que podem ser usados para controlar seus aparelhos inteligentes. Possui um tempo de identificação menor que 100 ms, em um formato compacto de 18 mm * 17 mm. O módulo pode se comunicar por meio da interface UART e fornece um código Hex exclusivo para cada comando reconhecido. Tudo que este módulo precisa é de 5 V e ele já estará pronto para reconhecer os comandos!

### Características

- **Suporta 150 comandos de voz** 
- **Baixo consumo de energia**
- **Trilhas de alimentação protegidas contra ESD**
- **Indicadores de LED para comandos**
- **Interface Grove UART**

### Especificações

<table align="center">
  <tbody>
    <tr>
    <td><h4>Parâmetro</h4></td>
    <td><h4>Faixa/Valor</h4></td>
    </tr>
    <tr>
    <td>Tensão de entrada</td>
    <td>5V/3.3V</td>
    </tr>
    <tr>
    <td>BaudRate padrão</td>
    <td>115200</td>
    </tr>
    <tr>
    <td>Saída padrão</td>
    <td>Valores Hex do comando detectado</td>
    </tr>
  </tbody></table>


## Primeiros passos

### demo1: Módulo Grove offline voice recognition com Arduino IDE

#### Configuração de hardware

Você precisa preparar o seguinte:

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - Offline Speech Recognizer](/pt-br/Grove-Offline-Voice-Recognition)
- [Alto-falante](https://www.seeedstudio.com/Mono-Enclosed-Speaker-2W-6-Ohm-p-2832.html)


:::tip

Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode conferir [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

**Passo 1.** Conecte o XIAO RP2040 ao seu computador por meio de um cabo USB Type-C.

**Passo 2.** Conecte o XIAO RP2040 à placa de expansão XIAO.

**Passo 3.** Conecte a placa de expansão XIAO ao Offline Speech Recognizer na porta UART por meio de um cabo Grove.

**Passo 4.** Conecte o Offline Speech Recognizer a um alto-falante.

Aqui está a imagem de conexão para sua referência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/connection.png" style={{width:1000, height:'auto'}}/></div>

#### **Configuração de software**

**Passo 1.** Baixe e instale a versão mais recente da Arduino IDE de acordo com o seu sistema operacional

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à Arduino IDE. Se você quiser usar o **XIAO RP2040** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#configuração-de-software) para concluir a adição.

:::tip
Se você quiser usar outros tipos de XIAO, você pode consultar [aqui](https://wiki.seeedstudio.com/pt-br/xiao_topic_page/).
:::

**Passo 3.** Instale a biblioteca de código Arduino.

Comece obtendo a base de código no [GitHub](https://github.com/Seeed-Projects/SeeedStudio-Grove_offline_voice_recognition_sensor) e fazendo o download para o seu computador local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.png" style={{width:1000, height:'auto'}}/></div>

Como você fez o download da biblioteca zip, abra a sua Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar, e se a instalação da biblioteca estiver correta, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/2.png" style={{width:1000, height:'auto'}}/></div>


#### Demonstração de reconhecimento de voz offline

**Passo 1.** Abra este arquivo na sua Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/3.png" style={{width:1000, height:'auto'}}/></div>

Você verá o código como abaixo.

```cpp
#include "GroveOfflineSensor.h"
#include <SoftwareSerial.h>
#define RX_VC02 D7
#define TX_VC02 D6

SoftwareSerial groveSerial(RX_VC02, TX_VC02); // RX, TX

void setup() {
  Serial.begin(115200);
  // wait for serial port to connect. Needed for native USB port only , This port is for displaying data Grove Sensor sends
  while (!Serial); 
  // Make sure to set the baud rate to match your communication
  groveSerial.begin(115200); 
}

void loop() {
  // detect voice from voice recognition sensor
   uint8_t *voiceData = detectVoiceFromGroveSensor(&groveSerial);

  //transfer the voice to command string
  if(voiceData != NULL){
    String response = getCommandInString(voiceData);
    Serial.println(response);
  }
  delay(1000);
}

```

**Passo 2.** Clique no botão **Upload** para enviar o código para a placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/5.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Diga a palavra de ativação "hello pudding" para o sensor e então você ouvirá um retorno de voz pelo alto-falante e um retorno em texto pelo monitor serial na Arduino IDE. Para mais instruções, você pode encontrá-las em **Resources**, localizado na parte inferior deste artigo.

<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/offlineVoiceRecognition.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### demo2: Grove offline voice recognition com ESPHome e Home Assistant

#### Configuração de hardware

você precisa preparar o seguinte:
- **Um dispositivo com Home Assistant instalado**

O primeiro passo para começar a usar o Home Assistant é instalá-lo em um dispositivo; você pode seguir [aqui](https://www.home-assistant.io/installation/) para um guia passo a passo.

- [XIAO-ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - Offline Speech Recognizer Module](https://www.seeedstudio.com/Grove-Offline-Voice-Recognition-Module-p-5861.html)

:::tip

Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode conferir [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

**Passo 1.** Preparação de hardware

Conecte o XIAO ESP32S3 ao seu computador por meio de um cabo USB Type-C.
Conecte o XIAO ESP32S3 à placa de expansão XIAO.
Conecte a placa de expansão XIAO ao Offline Speech Recognizer na porta UART por meio de um cabo Grove.
Conecte o Offline Speech Recognizer a um alto-falante.
Conecte a antena ao XIAO ESP32S3.

Aqui está a imagem de conexão para sua referência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/29.jpg" style={{width:700, height:'auto'}}/></div>

**Passo 2.** Crie sua casa inteligente
Digite o endereço do dispositivo com Home Assistant na barra de endereços do seu navegador e crie uma conta Home Assistant; você pode seguir [aqui](https://www.home-assistant.io/getting-started/onboarding/) para um guia passo a passo.

**Passo 3.** Instale o ESPHome no Home Assistant
Você pode configurar rapidamente o ESPHome no Home Assistant seguindo [aqui](https://wiki.seeedstudio.com/pt-br/Connect-Grove-to-Home-Assistant-ESPHome/#instalar-esphome-no-home-assistant)


#### Software 

 Adicionar XIAO ESP32S3 ao ESPHome

- Clique em **+ NEW DEVICE**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/6.png" style={{width:1000, height:'auto'}}/></div>

- Clique em **CONTINUE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/7.png" style={{width:500, height:'auto'}}/></div>

- Digite um **Name** para o dispositivo e insira as credenciais de WiFi, como **Network name** e **Password**. Em seguida, clique em **NEXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/8.png" style={{width:500, height:'auto'}}/></div>

- Selecione **ESP32-S3** e clique em NEXT
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/9.png" style={{width:500, height:'auto'}}/></div>

- Clique em **Install** e escolha **Manual download**.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/11.png" style={{width:800, height:'auto'}}/></div>

- Depois de baixar com sucesso, abra o ESPHome Web e escolha **Modern format**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/13.png" style={{width:1000, height:'auto'}}/></div>

- Conecte a porta do seu XIAO ESP32S3 e instale o arquivo bin que você acabou de obter; agora ele fará o download de todos os pacotes de placa necessários e gravará o firmware ESPHome no XIAO ESP32S3. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/16.png" style={{width:500, height:'auto'}}/></div>

- Abra os LOGS, se o flashing for bem-sucedido, você verá a seguinte saída e, agora, volte para a página ESPHome. Se você vir o status da placa como ONLINE, isso significa que a placa foi conectada ao WiFi com sucesso.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/28.png" style={{width:1000, height:'auto'}}/></div>


:::tip
Se você receber o aviso de que "[wifi_esp32:482][arduino_events]: Event: Disconnected …… reason='Auth Expired'", certifique-se de que o dispositivo ESP32 esteja dentro do alcance da rede WiFi, pois um sinal fraco pode causar problemas de conexão. Você pode substituir a sua antena pela [Rod Antenna](https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html).
:::

Agora você pode desconectar o XIAO ESP32C3 do computador e apenas alimentá-lo por um cabo USB. Isso porque, de agora em diante, se quiser gravar firmware no XIAO ESP32C3, você pode simplesmente fazer isso por OTA sem conectar à placa X86 por um cabo USB.

- Clique nos três pontos e clique em Install, selecione Wirelessly e isso enviará as alterações para a placa sem fio
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/25.png" style={{width:700, height:'auto'}}/></div>

- Vá para Settings e selecione Devices & Services. Você verá ESPHome como uma integração descoberta. Clique em CONFIGURE. Se ele pedir a chave de criptografia, volte para a página ESPHome para copiar a API Key e inseri-la.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/24.png" style={{width:600, height:'auto'}}/></div>


#### Reconhecimento de voz offline

**Passo 1.** Dentro do arquivo offline-voice-recognition.yaml que criamos antes, adicione o seguinte **no final do arquivo** e envie por OTA para o XIAO ESP32S3

<details>

<summary>Clique aqui para visualizar o código completo</summary>

```yaml
uart:
  id: uart_bus
  tx_pin: GPIO43
  rx_pin: GPIO44
  baud_rate: 115200

globals:
  - id: hex_code
    type: uint8_t
    restore_value: no
    initial_value: '0'

interval:
  - interval: 1s
    then:
      - lambda: |-
          while (id(uart_bus).available() >= 5) {
            uint8_t receivedData[5];
            for (int i = 0; i < 5; i++) {
              id(uart_bus).read_byte(&receivedData[i]);
            }
            id(hex_code) = receivedData[1];
            ESP_LOGD("main", "Hex code: %02X", id(hex_code));
          }

sensor:
  - platform: template
    name: "Received Hex Code"
    lambda: |-
      return id(hex_code);
    update_interval: 5s
    unit_of_measurement: ""
    accuracy_decimals: 0
    on_value:
      then:
        - lambda: |-
            auto call_acwind = id(acwind).make_call();
            auto call_actemp = id(actemp).make_call();
              switch (id(hex_code)) {
                case 0x03:
                  id(ac).publish_state(true);
                  break;
                case 0x04:
                  id(ac).publish_state(false);
                  break;
                case 0x05:
                  id(acmode).publish_state("automatic mode");
                  break;
                case 0x06:
                  id(acmode).publish_state("cold mode");
                  break;
                case 0x07:
                  id(acmode).publish_state("heat mode");
                  break;
                case 0x08:
                  id(acmode).publish_state("dry mode");
                  break;
                case 0x09:
                  id(acmode).publish_state("fan mode");
                  break;
                case 0x0A:
                  id(acmode).publish_state("sleeping mode");
                  break;
                case 0x0B:
                  id(acwind).publish_state("automatic fan");
                  break;
                case 0x0C:
                  id(acwind).publish_state("low fan");
                  break;
                case 0x0D:
                  id(acwind).publish_state("medium fan");
                  break;
                case 0x0E:
                  id(acwind).publish_state("high fan");
                  break;
                case 0x0F:
                  call_acwind.select_next(false);
                  call_acwind.perform();
                  break;
                case 0x10:
                  call_acwind.select_previous(false);
                  call_acwind.perform();
                  break;
                case 0x11:
                  id(actemp).publish_state("sixteen centigrade");
                  break;
                case 0x12:
                  id(actemp).publish_state("seventeen centigrade");
                  break;
                case 0x13:
                  id(actemp).publish_state("eighteen centigrade");
                  break;
                case 0x14:
                  id(actemp).publish_state("nineteen centigrade");
                  break;
                case 0x15:
                  id(actemp).publish_state("twenty centigrade");
                  break;
                case 0x16:
                  id(actemp).publish_state("twenty one centigrade");
                  break;
                case 0x17:
                  id(actemp).publish_state("twenty two centigrade");
                  break;
                case 0x18:
                  id(actemp).publish_state("twenty three centigrade");
                  break;
                case 0x19:
                  id(actemp).publish_state("twenty four centigrade");
                  break;
                case 0x1A:
                  id(actemp).publish_state("twenty five centigrade");
                  break;
                case 0x1B:
                  id(actemp).publish_state("twenty six centigrade");
                  break;
                case 0x1C:
                  id(actemp).publish_state("twenty seven centigrade");
                  break;
                case 0x1D:
                  id(actemp).publish_state("twenty eight centigrade");
                  break;
                case 0x1E:
                  id(actemp).publish_state("twenty nine centigrade");
                  break;
                case 0x1F:
                  id(actemp).publish_state("thirty centigrade");
                  break;
                case 0x20:
                  call_actemp.select_next(false);
                  call_actemp.perform();
                  break;
                case 0x21:
                  call_actemp.select_previous(false);
                  call_actemp.perform();
                  break;
                case 0x22:
                  id(fan).publish_state(true);
                  break;
                case 0x23:
                  id(fan).publish_state(false);
                  break;
                case 0x24:
                  id(acswept).publish_state("air swing up and down");
                  break;
                case 0x25:
                  id(acswept).publish_state("air swing left and right");
                  break;
                case 0x26:
                  id(acmode).publish_state("automatic mode");
                  id(acwind).publish_state("automatic fan");
                  id(actemp).publish_state("twenty six centigrade");
                  id(fan).publish_state(false);
                  break;
                case 0x27:
                  id(light).publish_state(true);
                  break;
                case 0x28:
                  id(light).publish_state(false);
                  break;
                case 0x29:
                  id(cold_light).publish_state(true);
                  break;
                case 0x2A:
                  id(cold_light).publish_state(false);
                  break;
                case 0x2B:
                  id(warm_light).publish_state(true);
                  break;
                case 0x2C:
                  id(warm_light).publish_state(false);
                  break;
                default:
                  ESP_LOGW("main", "Unknown hex code: %02X", id(hex_code));
                  break;
              }

switch:
  - platform: template
    name: "air conditioner"
    id: ac
    optimistic: True
  - platform: template
    name: "fan"
    id: fan
    optimistic: True
  - platform: template
    name: "light"
    id: light
    optimistic: True
  - platform: template
    name: "cold light"
    id: cold_light
    optimistic: True
  - platform: template
    name: "warm light"
    id: warm_light
    optimistic: True

select:

  - platform: template
    name: Air conditioner mode
    id: acmode
    optimistic: True
    options:
      - "automatic mode"
      - "cold mode"
      - "heat mode"
      - "dry mode"
      - "fan mode"
      - "sleeping mode"
    initial_option: "automatic mode"  

  - platform: template
    name: Fan mode 
    id: acwind
    optimistic: True
    options:
      - "automatic fan"
      - "low fan"
      - "medium fan"
      - "high fan"
    initial_option: "automatic fan"

  - platform: template
    name: Temperature
    id: actemp
    optimistic: True
    options:
      - "sixteen centigrade"
      - "seventeen centigrade"
      - "eighteen centigrade"
      - "nineteen centigrade"
      - "twenty centigrade"
      - "twenty one centigrade"
      - "twenty two centigrade"
      - "twenty three centigrade"
      - "twenty four centigrade"
      - "twenty five centigrade"
      - "twenty six centigrade"
      - "twenty seven centigrade"
      - "twenty eight centigrade"
      - "twenty nine centigrade"
      - "thirty centigrade"
    initial_option: "twenty six centigrade"

  - platform: template
    name: Fan direction
    id: acswept
    optimistic: True
    options: 
      - "air swing up and down"
      - "air swing left and right"
```

</details>

:::note
Quando criamos um novo dispositivo, o arquivo yaml que é gerado automaticamente vai variar por causa de diferentes configurações e tipos de dispositivo, então recomendamos **não alterar o início do arquivo** e apenas adicionar o código no final.
:::

- Você pode aprender mais sobre **Uart Bus** [aqui](https://esphome.io/components/uart)
- Você pode aprender mais sobre **Switch Component** [aqui](https://esphome.io/components/switch/)
- Você pode aprender mais sobre **Select Component** [aqui](https://esphome.io/components/select/)

**Passo 2.** Visualizar no Dashboard

- Agora volte para Devices, escolha o reconhecimento de voz offline
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/23.png" style={{width:1000, height:'auto'}}/></div>


- Clique em **ADD TO DASHBOARD**→**NEXT**→**ADD TO DASHBOARD**, e volte para **OVERVIEW**, agora o seu dashboard do Home Assistant ficará como abaixo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/27.png" style={{width:600, height:'auto'}}/></div>


**Passo 3.** Diga a palavra de ativação "hello pudding" ao sensor e então você ouvirá o retorno de voz e verá o retorno de ação no Home Assistant. Para mais instruções, você pode encontrar em **Resources**, que está localizada na parte inferior deste artigo.
<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


## Recursos

- **[PDF]** [Comandos de Voz Offline](https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/VoiceCommends.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
