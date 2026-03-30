---
description: Kit de Desenvolvimento de Rastreador de Ativos LPWAN para Amazon Sidewalk – Wio Tracker 1110
title: Kit de Desenvolvimento LPWAN para Sidewalk
keywords:
  - Rastreador
  - sidewalk
  - Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /wio_tracker_for_sidewalk
last_update:
  date: 12/4/2023
  author: Jessie
createdAt: '2023-12-04'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/wio_tracker_for_sidewalk/
---

O kit de desenvolvimento de rastreador de ativos LPWAN é baseado no [Wio-WM1110 Wireless Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html), coleta dados de localização por meio de varredura passiva de WiFi ou GNSS e se comunica com as pontes de rede Amazon Sidewalk usando rádios BLE e/ou LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LPWAN-Asset-Tracker-Dev-kit-WM1110-p-5846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

:::tip
Amazon Sidewalk está atualmente disponível apenas nos EUA. Verifique a [Cobertura da Rede Sidewalk](https://coverage.sidewalk.amazon/).

Para outras regiões, você também pode escolher a [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html), que é compatível com a rede LoRaWAN® em todo o mundo.
:::

## Recurso

- **Suporta a Rede Amazon Sidewalk**

- **Oferece múltiplas opções de conectividade**, incluindo: LoRa®, GNSS(GPS/BeiDou), Bluetooth, Wi-Fi Sniffer

- **Suporta mais de 300+ sensores Seeed Grove**: Tornando-o altamente adaptável a diferentes requisitos de rastreamento e detecção.

- **Sensor de temperatura, sensor de umidade e acelerômetro de 3 eixos integrados**: Capturando uma ampla variedade de dados ambientais e de movimento

- **Plataforma totalmente de código aberto**: Aproveite o amplo ecossistema de código aberto do LR1110 e nRF52840 para infinitas possibilidades de aplicação

## Descrição

### Compatível com Amazon Sidewalk

Amazon Sidewalk é uma rede de longo alcance criptografada e gratuita para conexão, que oferece conectividade persistente para bilhões de dispositivos. Ela conecta dispositivos inteligentes anonimamente e cria uma rede comunitária compartilhada altamente confiável que você pode usar para criar soluções conectadas mais econômicas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

### Múltiplas tecnologias de posicionamento

O kit de desenvolvimento de rastreador de ativos LPWAN – WM1110 integra um front-end de rádio multiuso voltado para fins de geolocalização. Ele está equipado com GNSS dedicado ao posicionamento externo, bem como Wi-Fi Sniffer e varredura Bluetooth para posicionamento interno. Ele é capaz de alternar automaticamente entre atividades externas e internas, substituindo a necessidade de construir rastreadores diferentes para uso interno ou externo, o que fornece cobertura de localização completa, reduzindo a complexidade e o custo.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_234601_twY1xjCUq9Z8yoYu_1701143222?w=2032&h=1070&type=image/png" alt="pir" width={800} height="auto" /></p>

### Periféricos ricos

Além do sensor de temperatura e umidade integrado (SHT41) e do acelerômetro de 3 eixos (LIS3DHTR), ele apresenta uma série de interfaces periféricas e suporta os protocolos de transmissão ADC/UART e IIC, que podem ser conectados a mais de 300 módulos Grove, permitindo atualizações fáceis para soluções mais inteligentes.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_639823_3yeu0eTFcW0f2AHj_1701143279?w=1802&h=844&type=image/png" alt="pir" width={800} height="auto" /></p>

### Construa uma aplicação de rastreamento de ativos usando Amazon Sidewalk

Conheça o [Amazon Sidewalk](https://www.amazon.com/Amazon-Sidewalk/b?ie=UTF8&node=21328123011) e o [AWS IoT Core for Amazon Sidewalk](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sidewalk.html) e como conectar o kit de desenvolvimento de rastreador de ativos LPWAN à ampla rede Amazon Sidewalk e integrá-lo ao AWS IoT Core.

Este aplicativo de demonstração foi criado especificamente para o workshop IOT202 Building compliant, secure connected products with AWS IoT na re: Invent 2023, e tem como objetivo ser usado em futuros eventos de workshops da AWS. Desenvolvedores ou entusiastas devem ser capazes de obter um bom entendimento dos serviços AWS IoT, incluindo AWS IoT Core e Amazon Sidewalk, e de como integrá-los ao seu produto conectado por meio do Workshop.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_817803_KG4rJQIohMMzPyR4_1701150525?w=1370&h=798&type=image/png" alt="pir" width={800} height="auto" /></p>

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_19830_N9NXJqFu1LJ_Rku__1700122819?w=1608&h=1060&type=image/png" alt="pir" width={800} height="auto" /></p>

## Aplicação

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_419290_B_TS3XqgFv7LnMbQ_1700474791?w=1752&h=858&type=image/png" alt="pir" width={800} height="auto" /></p>

## Especificações

**LoRa® e Posicionamento (Semtech LR1110)**

|Frequência|863~928MHz|
| :- | :- |
|Sensibilidade|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|Potência de saída|20dBm máx @LoRa®|
|Tecnologia de posicionamento|GNSS(GPS,BeiDou),WiFi|
|Alcance|2~10km (Depende da antena e do ambiente)|

**Bluetooth(Nordic nRF52840)**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|Flash|1MB|
|RAM|256KB|
|Protocolo|Bluetooth LE,Bluetooth mesh,Thread,Zigbee,802.15.4, ANT e pilhas proprietárias de 2.4 GHz|
|Potência de saída|6dBm máx @Bluetooth|

**Sensores integrados**

**Sensor TH (SHT41)**

|  | Faixa | Precisão |
| -------- | -------- | -------- |
|Temperatura  | -40~125°C |0.2°C|
| Umidade | 0~100%RH |1.8%RH|

**Acelerômetro de 3 eixos (LIS3DHTR)**

| Faixa | Largura de banda | Sensibilidade(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)
