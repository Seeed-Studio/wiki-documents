---
description: Introdução ao SenseCAP Indicator para Meshtastic
title: Introdução ao Indicator para Meshtastic
keywords:
  - Meshtastic
  - Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /sensecap_indicator_meshtastic
sku: 114993532
last_update:
  date: 11/26/2026
  author: Advent Jiang
createdAt: '2024-10-29'
updatedAt: '2026-11-26'
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator é um dispositivo com tela sensível ao toque de 4 polegadas projetado para [Meshtastic®](https://meshtastic.org/), alimentado por dois MCUs, o ESP32 e o RP2040, e oferece suporte a Wi-Fi, BLE e LoRa®. É uma poderosa plataforma de desenvolvimento de IoT de código aberto.

## Introdução

### Recursos

- **Compatível com Meshtastic:** Pré-gravado com firmware Meshtastic, ele está pronto para funcionar assim que for ligado. Você também pode atualizar o firmware usando o Meshtastic Flasher.<br/>
- **MCUs duplos e GPIOs abundantes:** Equipado com poderosos MCUs duplos ESP32S3 e RP2040 e mais de 400 GPIOs compatíveis com Grove para opções de expansão flexíveis.<br/>
- **Hub LoRa® local para conectividade IoT:** Integrado com o chip LoRa® Semtech SX1262, o dispositivo pode ser convertido em um gateway LoRaWAN® de canal único por meio de um tutorial. Alternativamente, conecte dispositivos LoRa® a plataformas IoT populares como Matter via Wi-Fi.<br/>
- **Plataforma totalmente open source:** Aproveite o amplo ecossistema open source de ESP32 e Raspberry Pi para infinitas possibilidades de aplicação.<br/>
- **Adequado para múltiplos cenários de aplicação:** Pode ser usado como um nó de mesa Meshtastic ou um nó veicular, bem como um gateway LoRaWAN® de canal único.

### Especificações

|Tela|3,95 polegadas, tela sensível ao toque RGB capacitiva|
| :- | :- |
|**Resolução da tela**|480 x 480 pixels|
|**Fonte de alimentação**|5V-DC, 1A|
|**Bateria**|N/A|
|**Processador**|<p>**ESP32-S3:** Xtensa® dual-core 32 bits até 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ até 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**Armazenamento externo**|Suporta cartão Micro SD de até 32GB (não incluído)|
|**Wi-Fi**|802.11b/g/n, 2,4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|Suporta 862-930MHz|
|**Buzzer(Ainda não desenvolvido)**|MLT-8530, frequência de ressonância: 2700Hz|
|**Certificação**|CE/FCC|

### Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## Introdução
:::danger note
Quando o dispositivo estiver nos estados abaixo, não reinicie ou desligue manualmente. Caso contrário, o dispositivo pode ficar inutilizável.
1. Não tiver concluído o processo de transmissão de mensagem
2. Estiver sendo configurado
:::

### Gravar o firmware do aplicativo

:::caution note
Antes de gravar o firmware, certifique-se de que o Indicator que você comprou é a versão para Meshtastic. Não grave o firmware Meshtastic em um Indicator que não seja compatível com Meshtastic. Isso pode causar danos ao hardware. Por favor, `don't use NRF-OTA` para atualizar o firmware, pois isso pode fazer com que o dispositivo fique completamente inutilizável.
:::

**Instruções em vídeo**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Acesse o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecione o dispositivo de destino como `Seeed SenseCAP Indicator` e escolha o firmware mais recente, depois clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

Pressione e segure o botão enquanto conecta o cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

Ative a opção `Full Erase and Install` e clique em `Erase Flash and Install`.

Serão exibidas 2 portas, selecione a `USB serial port` e clique em `Connect`.

:::caution note
Selecione a opção `USB Serial`, não o INDICATOR RP2040.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### Gravar firmware de GPS (opcional)

O SenseCAP Indicator não possui GPS integrado; para obter a localização por GPS, é necessário um [Módulo Grove GPS](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html).<br/>
Conecte o módulo GPS à porta Grove e, em seguida, grave o firmware de GPS.

- **[Download do firmware de GPS](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

Pressione e segure este botão interno usando uma agulha, depois conecte o dispositivo ao seu PC com o cabo USB tipo C fornecido e solte o botão assim que estiver conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

Baixe o arquivo `UF2` e copie-o para a unidade `RPI-RP2`. O firmware deve ser gravado após o arquivo ser copiado e o dispositivo reiniciar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

Baixe o App `Meshtastic`:

- [App IOS](https://meshtastic.org/docs/category/apple-apps/)
- [App Android](https://meshtastic.org/docs/category/android-app/)

### Conectar via App

- Ligue o dispositivo; a página do dispositivo exibirá o endereço MAC do dispositivo atual.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Selecione o dispositivo de destino no painel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Digite o código e clique em `Pair` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- Digite o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar os parâmetros

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser ajustada de acordo com sua localização regional.

<Tabs>
<TabItem value="ios" label="App IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiões**

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Ciclo de trabalho (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

Consulte [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para uma lista mais abrangente.

:::info
**EU_868** deve obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto com base em uma janela móvel de 1 hora. Seu dispositivo deixará de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando quaisquer [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para atender às suas necessidades.

### Teclado

:::tip note
O uso do teclado na versão 2.5.xx (o firmware de fábrica é v2.5.11.) e nas versões posteriores à 2.6.xx é diferente. Verifique o seguinte de acordo com a versão de firmware atual.
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

O RP2040 ainda não foi desenvolvido, portanto as funções de `buzzer`/`SD card`/`map` ainda não estão disponíveis. Estamos trabalhando com o Meshtastic para otimizá-lo.

#### Seleção de função (Role)

:::caution
NÃO selecione a função `Repeater`, pois isso fará com que o dispositivo reinicie repetidamente.
:::

#### Módulo GPS

Se você não conectou o módulo GPS, desative a função GPS no App `Meshtastic`, caso contrário o dispositivo continuará tentando encontrar o módulo GPS, o que fará com que o dispositivo demore muito para inicializar a tela.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>

#### Por que minha posição aparece deslocada em outros nós?

Esse é o comportamento esperado, não é uma falha de GPS ou de hardware. Cada canal tem uma configuração de **Position precision**, que por padrão é **13 bits**. Isso arredonda cada posição que você transmite para uma grade de aproximadamente ±2,9 km (um padrão de privacidade para canais compartilhados), enquanto o seu próprio dispositivo mostra a correção em precisão total via Bluetooth — assim, a sua própria posição parece precisa, mas outros nós veem um deslocamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS/meshtastic-faq-precise-location-off.png" alt="Localização precisa desativada, controle deslizante em ±2,9 km" width={600} height="auto" /></p>

Para enviar com precisão total, ative isso em **todos** os dispositivos:

1. Abra **Channels** no aplicativo Meshtastic e toque no seu canal.
2. Ative **Precise location** (define a precisão para 32 = total).
3. Repita em cada dispositivo — a configuração entra em vigor no remetente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS/meshtastic-faq-precise-location-on.jpg" alt="Localização precisa ativada (precisão total)" width={600} height="auto" /></p>

Alternativa via CLI: `meshtastic --ch-set module_settings.position_precision 32 --ch-index 0`

**Observação (firmware 2.8+):** canais públicos (sem chave, chave padrão ou chave de um byte) são limitados a 15 bits (~729 m). Use um **canal privado com uma chave aleatória** para obter precisão total.

## Suporte Técnico e Discussão de Produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>