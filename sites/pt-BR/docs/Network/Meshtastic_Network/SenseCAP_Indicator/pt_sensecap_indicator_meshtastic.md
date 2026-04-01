---
description: Comece a usar o SenseCAP Indicator para Meshtastic
title: Primeiros Passos com o Indicator para Meshtastic
keywords:
  - Meshtastic
  - Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /sensecap_indicator_meshtastic
sku: 114993532
last_update:
  date: 12/3/2024
  author: Michelle Huang
createdAt: '2024-10-29'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/sensecap_indicator_meshtastic/
---


<div className="table-center">
  <video width="730" height="500" controls autoPlay muted>
    <source
      src="https://media-cdn.seeedstudio.com/media/catalog/product/1/-/1-114993532_sensecap_indicator_for_meshtastic_lora__2.mp4"
      type="video/mp4"
    />
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-for-Meshtastic-p-6304.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator é um dispositivo com tela sensível ao toque de 4 polegadas projetado para o [Meshtastic®](https://meshtastic.org/), alimentado por dois MCUs, o ESP32 e o RP2040, e com suporte a Wi‑Fi, BLE e LoRa®. É uma poderosa plataforma de desenvolvimento de IoT de código aberto.

## Introdução

### Características

- **Suporta Meshtastic:** Pré-gravado com o firmware Meshtastic, ele está pronto para funcionar assim que for ligado. Você também pode atualizar o firmware usando o Meshtastic Flasher.<br/>
- **MCUs duplos e GPIOs ricos:** Equipado com poderosos MCUs duplos ESP32S3 e RP2040 e mais de 400 GPIOs compatíveis com Grove para opções de expansão flexíveis.<br/>
- **Hub LoRa® local para conectividade IoT:** Integrado com o chip LoRa® Semtech SX1262, o dispositivo pode ser convertido em um gateway LoRaWAN® de canal único por meio de um tutorial. Como alternativa, conecte dispositivos LoRa® a plataformas IoT populares como Matter via Wi‑Fi.<br/>
- **Plataforma totalmente open source:** Aproveite o amplo ecossistema open source de ESP32 e Raspberry Pi para infinitas possibilidades de aplicação.<br/>
- **Adequado para múltiplos cenários de aplicação:** Pode ser usado como um nó de mesa Meshtastic ou um nó veicular, bem como um gateway LoRaWAN® de canal único.

### Especificação

|Screen|Tela sensível ao toque RGB capacitiva de 3,95 polegadas|
| :- | :- |
|**Screen Resolution**|480 x 480 pixels|
|**Power Supply**|5V-DC, 1A|
|**Battery**|N/A|
|**Processor**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit até 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ até 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**External Storage**|Suporta cartão Micro SD de até 32GB (não incluído)|
|**Wi-Fi**|802.11b/g/n, 2,4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|Suporta 862-930MHz|
|**Buzzer(Not developed yet)**|MLT-8530, Frequência de Ressonância: 2700Hz|
|**Certification**|CE/FCC|

### Visão Geral de Hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## Primeiros Passos
:::danger note
Quando o dispositivo estiver nos estados abaixo, não o reinicie nem desligue manualmente. Caso contrário, o dispositivo pode deixar de funcionar.
1. Não tiver concluído o processo de transmissão de mensagem
2. Estiver sendo configurado
:::

### Gravar o Firmware do Aplicativo

:::caution note
Antes de gravar o firmware, certifique-se de que o indicator que você comprou é a versão para Meshtastic. Não grave o firmware Meshtastic em um indicator que não seja compatível com Meshtastic. Isso pode causar danos ao hardware. Por favor, `don't use NRF-OTA` para atualizar o firmware, pois isso pode fazer com que o dispositivo deixe de funcionar completamente.
:::

**Instrução em Vídeo**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecione o dispositivo de destino como `Seeed SenseCAP Indicator` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

Mantenha o botão pressionado enquanto conecta o cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

Ative a opção `Full Erase and Install` e clique em `Erase Flash and Install`.

Serão exibidas 2 portas, selecione a `USB serial port` e clique em `Connect`.

:::caution note
Selecione a opção `USB Serial`, e não a INDICATOR RP2040.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### Gravar o Firmware de GPS (opcional)

O SenseCAP Indicator não possui GPS integrado; para obter a localização por GPS, é necessário um [Grove GPS Module](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html).<br/>
Conecte o Módulo GPS à porta Grove e então grave o firmware de GPS.

- **[Download do Firmware de GPS](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

Pressione este botão interno por um longo tempo usando uma agulha e, em seguida, conecte o dispositivo ao seu PC com o cabo USB tipo‑C fornecido; solte o botão assim que estiver conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

Baixe o arquivo `UF2` e copie-o para a unidade `RPI-RP2`. O firmware deverá ser gravado após o download do arquivo e a reinicialização do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

Baixe o App `Meshtastic`:

- [App para iOS](https://meshtastic.org/docs/category/apple-apps/)
- [App para Android](https://meshtastic.org/docs/category/android-app/)

### Conectar via App

- Ligue o dispositivo; a página do dispositivo exibirá o endereço MAC do dispositivo atual.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App para iOS">

- Selecione o dispositivo de destino no painel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Digite o código e clique em `Pair` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App para Android">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Digite o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar os Parâmetros

Para começar a se comunicar sobre a malha, você precisa definir a sua região. Essa configuração controla qual faixa de frequência o seu dispositivo usa e deve ser ajustada de acordo com a sua localização regional.

<Tabs>
<TabItem value="ios" label="App para iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App para Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de Regiões**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve cumprir um limite de duty cycle horário de 10%, calculado a cada minuto em uma base contínua de 1 hora. Seu dispositivo deixará de transmitir quando você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

### Teclado

:::tip note
O uso do teclado da versão 2.5.xx (o firmware de fábrica é v2.5.11.) e das versões superiores à 2.6.xx é diferente. Verifique o seguinte de acordo com a versão atual do seu firmware.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-ve.png" alt="pir" width={400} height="auto" /></p>

#### Para versão 2.5.xx

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### Para versão 2.6 +

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### FAQ

#### Parte RP2040

RP2040 ainda não foi desenvolvido, portanto as funções de `buzzer`/`SD card`/`map` ainda não estão disponíveis. Estamos trabalhando com o Meshtastic para otimizá-las.

#### Seleção de Função

:::caution
NÃO selecione a função `Repeater`, pois isso fará com que o dispositivo reinicie repetidamente.
:::

#### Módulo GPS

Se você não conectou o módulo GPS, desative a função GPS no App `Meshtastic`, caso contrário o dispositivo continuará tentando encontrar o módulo GPS, o que fará com que o dispositivo leve muito tempo para inicializar a tela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>
