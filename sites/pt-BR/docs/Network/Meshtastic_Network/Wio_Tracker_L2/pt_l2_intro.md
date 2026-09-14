---
description: Introdução à Série Wio Tracker L2. Inclui recursos, funções, parâmetros e comparação entre modelos da série.
title: Introdução ao Wio Tracker L2
keywords:
  - Meshtastic
  - Wio Tracker L2
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /meshtastic_wio_tracker_l2_intro
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/meshtastic_wio_tracker_l2_intro/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png" alt="pir" width={900} height="auto" /></p>

A Série Wio Tracker L2 é um nó [Meshtastic®](https://meshtastic.org/) altamente extensível, com LoRa (862–930 MHz), ESP32S3 para processamento eficiente e um módulo GPS L76K para rastreamento de localização preciso. Projetado para flexibilidade, ele suporta tela sensível ao toque QSPI, displays E-Ink, cartão TF, bem como painéis solares e alimentação por bateria, tornando-o ideal para uma ampla gama de aplicações de IoT e fora da rede.

## Recursos

- **Tela sensível ao toque de 3,2'' de alta qualidade**: Com um display de 320×240 de alta nitidez e interfaces MUI e Base UI comutáveis, oferece interação fluida diretamente no dispositivo para mensagens, mapas e controle — sem precisar de um celular.

- **Baseado em ESP32S3, pronto para desenvolvimento**: Alimentado pelo ESP32-S3 dual-core com Wi-Fi e Bluetooth LE, o L2 Pro fornece uma plataforma flexível para personalização de interface, desenvolvimento de recursos e aplicações de código aberto.

- **Mapas offline com posicionamento GNSS**: Faça o pré-download de mapas offline para um cartão MicroSD e visualize sua localização GNSS em tempo real diretamente no dispositivo, mesmo sem cobertura celular ou acesso à internet.

- **Bateria de longa duração de 3000mAh**: Suporta uso diário prolongado com menor frequência de recarga; opera em condições de -10°C a 55°C.

- **Fácil de transportar, posicionamento flexível**: Uma antena dobrável melhora a portabilidade, e a interface de montagem de 1/4" permite posicionamento flexível com acessórios compatíveis.

## Especificação

<table>
  <tr>
    <th colspan="1">**Item**</th>
    <th colspan="1">**Parâmetro**</th>
  </tr>
  <tr>
    <td colspan="1">**Processador**</td>
    <td colspan="1">Wio-S3 (ESP32S3 + Módulo SX1262)</td>
  </tr>
    <tr>
    <td colspan="1">**LoRa**</td>
    <td colspan="1">863-928 MHz<br/>Potência máxima de TX: 20dBm@US915,14dBm@EU868</td>
  </tr>
    <tr>
    <td colspan="1">**GNSS**</td>
    <td colspan="1">L76K (GPS, BeiDou, GLONASS, QZSS)</td>
  </tr>
  <tr>
    <td colspan="1">**Memória interna**</td>
    <td colspan="1">16MB Flash / 8MB PSRAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Antena**</td>
    <td colspan="1">LoRa: </td>
  </tr>
   <tr>
    <td colspan="1">Wifi/BLE 5.0: antena FPC</td>
  </tr>
  <tr>
    <td colspan="1">GPS: antena cerâmica</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Interface**</td>
    <td colspan="1">Grove *1: </td>
  </tr>
  <tr>
    <td colspan="1">Slot para cartão MicroSD</td>
  </tr>
  <tr>
    <td colspan="1">Furo roscado de um quarto de polegada</td>
  </tr>
   <tr>
    <td colspan="1">**Interface QSPI**</td>
    <td colspan="1">Compatível com tela IPS e tela E-INK</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Entrada de alimentação**</td>
    <td colspan="1">USB Type-C: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Solar:JST-PH 2P-2.0mm, 5V ~ 13V</td>
  </tr>
  <tr>
    <td colspan="1">Bateria de íons de lítio (2P-1.25mm): 3,7V</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">**Tela sensível ao toque IPS**</td>
    <td colspan="1">Tamanho: 3,2 polegadas</td>
  </tr>
  <tr>
    <td colspan="1">Resolução: 240 × 320 pixels</td>
  </tr>
    <tr>
    <td colspan="1">**LED**</td>
    <td colspan="1">Mesh LED * 1<br/>LED de carregamento * 1</td>
  </tr>
  <tr>
    <td colspan="1">**Botão**</td>
    <td colspan="1">WAKE-UP * 1<br/>User/Boot * 1<br/>RST * 1<br/>Interruptor de energia * 1</td>
  </tr>
    <tr>
    <td colspan="1" rowspan="3">**Áudio**</td>
    <td colspan="1">Codec I2S: ES8311</td>
  </tr>
  <tr>
    <td colspan="1">MIC: pino reservado</td>
  </tr>
    <tr>
    <td colspan="1">Alto-falante: 6Ω 0,8W</td>
  </tr>
    <tr>
    <td colspan="1">**Distância de comunicação**</td>
    <td colspan="1">Até 5,8 km</td>
  </tr>
    <tr>
    <td colspan="1">**Dimensão**</td>
    <td colspan="1"></td>
  </tr>
  <tr>
    <td colspan="1">**Peso do dispositivo**</td>
    <td colspan="1"></td>
  </tr>
    <tr>
    <td colspan="1">**Temperatura de operação**</td>
    <td colspan="1">-10℃ a +55℃</td>
  </tr>
  <tr>
    <td colspan="1">**Certificação**</td>
    <td colspan="1">FCC,CE,RoHS,Telec</td>
  </tr>
</table>

**Bateria**

|Item|Parâmetro|
| :- | :- |
|**Capacidade da bateria**|Bateria recarregável de íons de lítio, 3000mAh|
|**Monitoramento da vida útil da bateria**|Nível de bateria enviado periodicamente em uplink|
|**Protocolo de carregamento**|USB Type-C|
|**Entrada de alimentação do dispositivo**|5V, 1A|
|**Tensão de corte totalmente carregada**|4,2V|
|**Limite de temperatura de carregamento**|0 a +45℃|

## Lista de pinos

<table>
  <tr>
    <th>Componente</th>
    <th>Pino</th>
    <th>Nº do pino</th>
    <th>Protocolo</th>
  </tr>
  <tr>
    <td rowspan="9">Display</td>
    <td>QSPI_CLK</td>
    <td>GPIO42</td>
    <td rowspan="6">QSPI</td>
  </tr>
  <tr>
    <td>QSPI_DAT0</td>
    <td>GPIO41</td>
  </tr>
  <tr>
    <td>QSPI_DAT1</td>
    <td>GPIO40</td>
  </tr>
  <tr>
    <td>QSPI_DAT2</td>
    <td>GPIO39</td>
  </tr>
  <tr>
    <td>QSPI_DAT3</td>
    <td>GPIO38</td>
  </tr>
  <tr>
    <td>QSPI_CS</td>
    <td>GPIO46</td>
  </tr>
  <tr>
    <td>LCD_EN</td>
    <td>EXP_P05</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>QSPLRST</td>
    <td>EXP_P06</td>
  </tr>
  <tr>
    <td>QSPLTE</td>
    <td>NC</td>
    <td>NC</td>
  </tr>
  <tr>
    <td rowspan="5">E-INK</td>
    <td>E_INK_SCK</td>
    <td>GPIO42</td>
    <td rowspan="3">SPI</td>
  </tr>
  <tr>
    <td>E_INK_MOSI</td>
    <td>GPIO41</td>
  </tr>
  <tr>
    <td>E_INK_CS</td>
    <td>GPIO40</td>
  </tr>
  <tr>
    <td>E_INK_DC</td>
    <td>GPIO39</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>E_INK_BUSY</td>
    <td>GPIO38</td>
  </tr>
  <tr>
    <td rowspan="2">IIC</td>
    <td>IIC0_SCL</td>
    <td>GPIO48</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>IIC0_SDA</td>
    <td>GPIO47</td>
  </tr>
  <tr>
    <td rowspan="7">LoRa</td>
    <td>LoRa_CS</td>
    <td>GPIO21</td>
    <td rowspan="4">SPI</td>
  </tr>
  <tr>
    <td>LoRa_SCK</td>
    <td>GPIO4</td>
  </tr>
  <tr>
    <td>LoRa_MISO</td>
    <td>GPIO5</td>
  </tr>
  <tr>
    <td>LoRa_MOSI</td>
    <td>GPIO6</td>
  </tr>
  <tr>
    <td>LoRa_RST</td>
    <td>GPIO7</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>LoRa_BUSY</td>
    <td>GPIO8</td>
  </tr>
  <tr>
    <td>LoRa_DIO1</td>
    <td>GPIO9</td>
  </tr>
  <tr>
    <td rowspan="3">Grove</td>
    <td>GROVE_DAT_1</td>
    <td>GPIO14</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>GROVE_DAT_2</td>
    <td>GPIO13</td>
  </tr>
  <tr>
    <td>GROVE_EN</td>
    <td>EXP_P07</td>
  </tr>
  <tr>
    <td rowspan="4">GNSS</td>
    <td>GNSS_RX</td>
    <td>GPIO18</td>
    <td rowspan="2">UART</td>
  </tr>
  <tr>
    <td>GNSS_TX</td>
    <td>GPIO17</td>
  </tr>
  <tr>
    <td>GNSS_EN</td>
    <td>EXP_P15</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>GNSS_RST</td>
    <td>EXP_P11</td>
  </tr>
  <tr>
    <td rowspan="5">I2S</td>
    <td>CODEC_I2S0_MCLK</td>
    <td>GPIO10</td>
    <td rowspan="5">I2S</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_LRCK</td>
    <td>GPIO12</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_SCLK</td>
    <td>GPIO11</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_DSDIN</td>
    <td>GPIO16</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_SDOUT</td>
    <td>GPIO15</td>
  </tr>
  <tr>
    <td rowspan="4">SD</td>
    <td>SD_CMD</td>
    <td>GPIO03</td>
    <td rowspan="3">SD</td>
  </tr>
  <tr>
    <td>SD_CLK</td>
    <td>GPIO02</td>
  </tr>
  <tr>
    <td>SD_DAT0</td>
    <td>GPIO01</td>
  </tr>
  <tr>
    <td>SD_DET</td>
    <td>EXP_P02</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="2">USB</td>
    <td>USB_N</td>
    <td>GPIO19</td>
    <td rowspan="2">USB</td>
  </tr>
  <tr>
    <td>USB_P</td>
    <td>GPIO20</td>
  </tr>
  <tr>
    <td rowspan="2">LED</td>
    <td>MESH LED</td>
    <td>GPIO43</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>USER_LED</td>
    <td>EXP_P12</td>
  </tr>
  <tr>
    <td>Button</td>
    <td>WAKEUP_BUTTON</td>
    <td>EXP_P00</td>
    <td>GPIO</td>
  </tr>
</table>


## Visão geral do hardware

**Wio Tracker L2 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent9.7(1).png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent29.7(2).png" alt="pir" width={800} height="auto" /></p>

**Diagrama esquemático**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SchematicDiagram9.7(1).png" alt="pir" width={800} height="auto" /></p>
