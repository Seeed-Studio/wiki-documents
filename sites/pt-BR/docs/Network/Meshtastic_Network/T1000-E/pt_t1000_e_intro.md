---
description: Introdução ao SenseCAP Card Tracker T1000-E para Meshtastic
title: Introdução ao T1000-E Tracker
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /t1000_e_intro
sidebar_position: 1
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-09-05'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/pt-br/t1000_e_intro/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="pir" width={800} height="auto" /></p>

É um rastreador de alto desempenho projetado para [Meshtastic®](https://meshtastic.org/), tão pequeno quanto um cartão de crédito, cabendo facilmente no seu bolso ou podendo ser preso aos seus bens. Ele incorpora o LR1110 da Semtech, o nRF52840 da Nordic e o módulo GPS AG3335 da Mediatek, fornecendo aos usuários do [Meshtastic®](https://meshtastic.org/) uma solução de posicionamento e comunicação de alta precisão e baixo consumo de energia.

:::note
Opções de personalização disponíveis: identidade visual com logotipo, embalagem e gravação de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personalizar agora ➜</font></span></strong></a>
</div>

<br></br>

:::tip Comparação de versões
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/versions-duibi.png" alt="pir" width={600} height="auto" /></p>
:::

### Recursos

- **Suporte a múltiplos protocolos**: Com nRF52840 e LR1110, oferece suporte a Bluetooth 5.0, Thread, Zigbee e LoRa, garantindo compatibilidade com uma ampla variedade de dispositivos e redes.
- **Poderosos recursos de posicionamento**: Integrado com o chip GPS AG3335 da Mediatek, fornece serviços de posicionamento de alta precisão.
- **Interfaces expansíveis**: Projetado com quatro pinos pogo, oferece suporte à interface USB para DFU (Device Firmware Upgrade), registro serial e interface de API, simplificando o gerenciamento e a depuração do dispositivo.
- **Suporte de código aberto**: Compatível com o protocolo de rede mesh de código aberto Meshtastic, adequado para necessidades de comunicação de longo alcance e baixo consumo de energia.

### Especificações

**Geral**

|**Protocolo de rede**|LoRa, Bluetooth v5.1|
| :- | :- |
|**Temperatura**|<p>Faixa: -20 a 60℃;</p><p>Precisão: ± 1℃ (mín ±0.5℃, máx ±1℃)</p><p>Resolução: 0.1℃</p>|
|**Luz**|0 a 100% (0% é escuro, 100% é o mais claro)|
|**LED e buzzer**|1\*LED e 1\* buzzer para indicar o status|
|**Botão**|1\* botão para operar|
|**Antena**|Interna (GNSS/LoRa/Wi-Fi/BLE)|
|**Distância de comunicação**|2 a 5 km (dependendo da antena, instalação e ambiente)|
|**Grau de proteção IP**|IP65|
|**Dimensões**|85 \* 55 \* 6.5 mm|
|**Peso do dispositivo**|32 g|
|**Temperatura de operação**|-20℃ a +60℃|
|**Umidade de operação**|5% - 95% (sem condensação)|
|**Certificação**|CE /FCC|

**Bateria**

|**Capacidade da bateria**|Bateria de íon de lítio recarregável, 700 mAh|
| :- | :- |
|**Monitoramento da vida útil da bateria**|Nível de bateria enviado periodicamente em uplink|
|<p>**Cabo de carregamento**</p><p>**(Adaptador não incluído)**</p>|Cabo de carregamento magnético USB, 1 metro|
|**Tensão de entrada de alimentação**|4.7 a 5.5 V DC|
|**Limite de temperatura de carregamento**|0 a +45℃|

### Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/4-pogo.png" alt="pir" width={800} height="auto" /></p>

### Lista de pinos

||||
|- |- |- |
|Alimentação para o sensor|P0.4|GPIO|
|Temperatura|P0.31|NTC (analógico)|
|Luz|P0.29|LUX(analógico)|
|Acelerômetro de 3 eixos<br/>(Atualmente não utilizado no firmware Meshtastic)|SDA: P0.26<br/>SCL: P0.27|Via IIC|
|Alimentação para o acelerômetro|P1.7|GPIO|
|LED|P0.24  |GPIO|
|Buzzer|P0.25|GPIO|
|Habilitar buzzer|P1.05|GPIO|
|Botão|P0.6|GPIO|
|Alimentação para o sensor|P1.6|GPIO|
|LR1110|P1.08: SPI MISO<br/>P1.09: SPI MOSI<br/>P0.11: SPI Clock<br/>P0.12: SPI NSS<br/>P1.10: LoRa Reset<br/>P1.01: LoRa DIO1<br/>P0.07: LoRa DIO2<br/>LR11X0_DIO3_TCXO_VOLT<br/>AGE 1.6V|SPI|
|GPS|RX: P0.14<br/>TX: P0.13|Serial1 <br/>BAUDRATE:115200|

### Botão

|Ação do botão|Descrição|Buzzer|
|- |- |- |
|Pressionar uma vez|Ligar|Melodia ascendente|
|Pressionar duas vezes|Atualizar informações do nó/localização|-|
|Pressionar três vezes|Ligar/desligar o GPS|-|
|Pressionar e segurar por 5 s|Desligar|Melodia descendente|

### LED

|Ação do dispositivo|Descrição|
|- |- |
|Ligar|Acende e depois pisca rapidamente|
|Modo DFU|Aceso continuamente|
|Em funcionamento|Pisca aleatoriamente|
|Carregando|Pisca a 0,5 Hz, alternando a cada segundo|
