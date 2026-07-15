---
description: Wio_Tracker_Introduction
title: Introdução ao Wio Tracker 1110
keywords:
  - Tracker
  - Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Tracker_Introduction
sku: 114993186
sidebar_position: 1
last_update:
  date: 11/3/2023
  author: Jessie
createdAt: '2023-09-04'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Wio-Tracker_Introduction/
---


A [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) é baseada no [Wio-WM1110 Wireless Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html) e integra o transceptor LoRa® [LR1110 da Semtech](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) e um front-end de rádio multiuso para geolocalização; é uma plataforma de desenvolvimento de rastreamento baseada em LoRa, fácil de usar.

Com seu tamanho compacto e interfaces ricas, a Wio Tracker 1110 Dev Board vem convenientemente equipada com uma antena onboard para fácil implantação. Ela suporta o ambiente de desenvolvimento Arduino e a pilha de protocolo LoRaWAN, tornando-a ideal para projetos de IoT relacionados a rastreamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>

## Funcionalidades

- **Com tecnologia Nordic nRF52840 e Semtech LR1110**<br/>
- **Múltiplos protocolos**: LoRa®, GNSS(GPS/BeiDou), Bluetooth, Wi-Fi Sniffer<br/>
- **Suporta mais de 300+ sensores Seeed Grove**: tornando-a altamente adaptável a diferentes requisitos de rastreamento e detecção<br/>
- **Sensor de temperatura, sensor de umidade e acelerômetro de 3 eixos onboard**: capturando uma ampla variedade de dados ambientais e de movimento<br/>
- **Plataforma totalmente open source**: aproveite o amplo ecossistema open source do LR1110 e do nRF52840 para infinitas possibilidades de aplicação<br/>
- **Compatibilidade com Arduino IDE**: permitindo facilidade de programação e um ambiente familiar para desenvolvedores.

## Descrição

### Transceptor LoRa® de baixo consumo

Graças ao LR1110 da Semtech, a Wio Tracker 1110 Dev Board fornece comunicação LoRa® de longa distância e baixo consumo de energia. Para saber mais sobre Long Range e seus recursos, como arquitetura de rede e aplicações, você pode consultar uma introdução à tecnologia LoRa® e LoRaWAN®. Ela explica o que é Long Range, como funciona e seus prós e contras.

### Múltiplas tecnologias de posicionamento

A Wio Tracker 1110 Dev Board integra um front-end de rádio multiuso voltado para fins de geolocalização. Ela é equipada com GNSS dedicado ao posicionamento externo, bem como varredura Wi-Fi e Bluetooth para posicionamento interno. É capaz de alternar automaticamente entre atividades externas e internas, substituindo a necessidade de construir rastreadores diferentes para uso interno ou externo, o que fornece cobertura de localização completa ao mesmo tempo que reduz a complexidade e o custo.

### Periféricos ricos

Além do sensor TH onboard e do acelerômetro de 3 eixos, ela inclui uma série de interfaces de periféricos e suporta os protocolos de transmissão ADC/UART e IIC, que podem ser conectados a mais de 400 módulos Grove, permitindo atualizações fáceis para soluções mais inteligentes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

### Desenvolva aplicações de usuário

A Wio Tracker 1110 Dev Board é uma plataforma de desenvolvimento de IoT totalmente open source e poderosa, compatível com o Arduino IDE. Ela vem com um conjunto de aplicações de exemplo e trechos de código para ajudar você a começar de forma suave e rápida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-1.png" alt="pir" width={800} height="auto" /></p>

### Demonstração de início rápido

Fornecemos uma demonstração plug-and-play, na qual os usuários podem simplesmente escanear um código QR, conectar a alimentação e, em 5 minutos, visualizar os dados de localização e sensor no aplicativo SenseCAP Mate.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/grove.png" alt="pir" width={800} height="auto" /></p>

### Visão geral de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

### Especificações

|LoRa® e posicionamento (Semtech LR1110)||
|----|----|
|Protocolo LoRaWAN®|V1.0.3|
|Plano de frequência|863~928MHz|
|Sensibilidade| -125dBm @125K/SF7<br/>-141dBm @125K/SF12|
|Potência de saída|20dBm máx @LoRa®|
|Tecnologia de posicionamento|GNSS(GPS/BeiDou), WiFi Sniffer|
|Alcance|2~10km (depende da antena e do ambiente)|

|Bluetooth (Nordic nRF52840)||
|----|----|
|Bluetooth|Bluetooth 5.3|
|Flash|1MB|
|RAM|256KB|
|Protocolo|Bluetooth LE, Bluetooth mesh, Thread, Zigbee, <br/>802.15.4, ANT e pilhas proprietárias de 2,4 GHz|
|Potência de saída|6dBm máx @Bluetooth|

|Geral||
|----|----|
|Tensão - alimentação|5V (USB 2.0 Type-C)<br/>Conector de bateria - 4,5V|
|RFIO |Conector de antena GNSS x 1<br/>Conector de antena LoRa x 1|
|USB type-C| x 1|
|Interface Grove|ADC x 1<br/>I2C x 1<br/>UART x 1<br/>Digital x 3|
|Botão|Botão configurável pelo USUÁRIO<br/>RESET - Reiniciar|

|Sensores onboard||
|----|----|
|Sensor TH (SHT41)||
|Faixa|Precisão|
|Temperatura|-40~125°C<br/>0,2°C|
|Umidade|0~100%RH<br/>±1,8%RH|
|Acelerômetro de 3 eixos (LIS3DHTR)||
|Faixa|±2g, 4g, 8g, 16g|
|Largura de banda|0,5Hz ~ 625Hz|
|Sensibilidade (LSB/g)|1000 (±2g) ~ 83 (±16g)|
