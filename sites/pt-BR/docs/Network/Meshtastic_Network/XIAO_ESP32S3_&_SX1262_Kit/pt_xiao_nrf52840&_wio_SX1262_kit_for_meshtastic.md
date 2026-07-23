---
description: Meshtastic baseado no Kit XIAO nRF52840 & Wio-SX1262
title: Introdução ao Kit XIAO nRF52840 & Wio-SX1262
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-kit.webp
slug: /xiao_nrf52840&_wio_SX1262_kit_for_meshtastic
sidebar_position: 2
sku: 102010710
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2025-03-13'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf52840&_wio_SX1262_kit_for_meshtastic/
---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-102010710-nrf52840_wio-sx1262-kit_1.jpg" alt="pir" width={800} height="auto" /></p>

Este kit combina o XIAO nRF52840 e o Wio-SX1262, oferecendo suporte a BLE5.0, Thread, Zigbee e LoRa (862-930MHz), e opera com baixo consumo de energia. Ele pode ser aplicado em vários campos, como [Meshtastic®](https://meshtastic.org/), redes de sensores, monitoramento ambiental, rastreamento de ativos, educação e inovação.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## Visão geral

### Recursos

- **Microcontrolador versátil**: Incorpora o chip Nordic nRF52840 com FPU, operando até 64 MHz, montado com múltiplas portas de desenvolvimento, compatível com Arduino / CircuitPython / Micropython
- **Desempenho LoRa poderoso**: LoRa de longo alcance com Semtech SX1262, suporta bandas de 868/915 MHz.
- **Comunicação de núcleo duplo**: Suporta modos duplos Bluetooth e LoRa, permitindo interconexão entre domínios.
- Com dimensões de apenas **8mm × 22mm × 23mm**, possui um design de antena integrada.

### Especificação

| **Produto** | **Especificações** |  
| :- | :- |  
| [XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) | **MCU:** Nordic nRF52840  <br /> **Núcleo:** ARM® Cortex®-M4 com FPU, até 64 MHz |  
| [Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-for-XIAO-p-6379.html) | **Módulo LoRa:** Semtech SX1262  <br /> **Frequência:** 862&#126;930MHz |  
| **Sem fio** | Bluetooth 5.0 / NFC |  
| **Interface** | **XIAO nRF52840:**  <br /> - 1x UART, 1x I²C, 1x SPI (conecta ao SX1262)  <br /> - 1x NFC, 1x SWD, 11x GPIO (PWM)  <br /> - 6x ADC  <br /> **Wio-SX1262:**  <br />  - 1x SPI (conecta ao XIAO nRF52840) |  
| **Alimentação** | **Tensão de entrada:**  <br /> - Type-C: 5V  <br /> - Bateria (BAT): 4.2V  <br /> **Corrente de carregamento da bateria:** 50mA / 100mA  <br /> **Consumo de energia em standby:** &lt;5µA |  
| **Temperatura de operação** | -40°C &#126; 65°C |  
| **Dimensões** | 21 x 17.8mm |  

### Pinout

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/imageXIAO_nRF52840-2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image_Wio-SX1262_-1.png" alt="pir" width={800} height="auto" /></p>

## Primeiros passos

O Kit XIAO nRF52840 & Wio-SX1262 vem pré-gravado com o firmware Meshtastic, permitindo que você comece rapidamente.

### Gravar firmware

:::caution note
Por favor, `don't use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo pare de funcionar completamente.
:::

**Instruções em vídeo:**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Visite o [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecte o kit ao seu PC, selecione o dispositivo em `Seeed` → `Seeed XIAO nRF52840 Kit`, escolha o firmware mais recente e clique em `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-device.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/filw-flash.png" alt="pir" width={800} height="auto" /></p>

Clique em `Enter DFU Mode`, aparecerá uma porta serial chamada `XIAO-xxx`, clique nela para conectar, e deverá ser exibida uma unidade chamada `XIAO-xxx`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 para a unidade DFU. O firmware deverá ser gravado após o download do arquivo e a reinicialização do dispositivo.

### Verificar o nome do nó

Visite o [Meshtastic Flasher](https://flasher.meshtastic.org/) e abra o `Serial Monitor`, procure por `nodenum` para encontrar o ID de nó correspondente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### Conectar via aplicativo

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="Aplicativo iOS">

- Selecione o dispositivo de destino no painel Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicativo Android">

- Clique em `+` e escolha o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Insira o código (o código padrão é `123456`) e clique em `OK` para conectar o dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar os parâmetros

Para começar a se comunicar pela malha, você deve definir a sua região. Essa configuração controla qual faixa de frequência o seu dispositivo usa e deve ser ajustada de acordo com a sua localização regional.

<Tabs>
<TabItem value="ios" label="Aplicativo iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Aplicativo Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

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

#### Configuração do sensor GNSS

Conecte um [Módulo GNSS L76K](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html) para criar um rastreador.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image_102010710.gif" alt="pir" width={600} height="auto" /></p>


### O SX-1262 compatível
[Click here](https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html) para adquirir o SX1262 vendido separadamente.

## Recursos
### Arquivos de recursos

- **[PDF]** [Xiao Reference Design](https://files.seeedstudio.com/wiki/XIAO/XIAO-Reference-Design.pdf)
- **[PDF]** [Relatório de teste de distância de comunicação BLE do Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_BLE_nRF52840_BLE_Communication_Distance_Test_Report.pdf)
- **[ZIP]** [Seeed Studio XlAO nRF52840 CE |FCC|MIC](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-CE-FCC-MIC.zip)
- **[PDF]** [nRF52840 datasheet](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)
- **[PDF]** [Esquemático do Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)
- **[ZIP]** [Arquivo KiCAD do Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)
- **[ZIP]** [Arquivo Eagle do Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)
- **[DXF]** [Dimensões do Seeed Studio XIAO nRF52840 em DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)
- **[LBR]** [Footprint Eagle do Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)
- **[XLSX]** [Planilha de pinout do Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)
- 🔗 **[Kicad]** [FootPrint do Seeed Studio XIAO nRF52840](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- **[PDF]** [Diagrama esquemático do SX1262 compatível com o Xiao nRF52840](https://files.seeedstudio.com/products/113010003/Wio-SX1262%20for%20XIAO%20V1.0.pdf)
- **[PDF]** [Wio SX-1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf
)

### Recursos de cursos

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

