---
description: Introdução ao Wio-WM1110 Dev Kit
title: Introdução
keywords:
  - Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-WM1110_Dev_Kit/Introduction
sku: 114993082
sidebar_position: 1
last_update:
  date: 6/26/2023
  author: Jessie
createdAt: '2023-06-28'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-WM1110_Dev_Kit/Introduction/
---


# Wio-WM1110 Dev Kit

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993082-wio-wm1110-dev-kit-45font.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1110-Dev-Kit-p-5677.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

O WM1110 Dev Kit é baseado no módulo sem fio Wio-WM1110, integrando o transceptor LoRa® da Semtech e um front-end de rádio multiuso para geolocalização.
O transceptor LoRa® oferece cobertura de rede de baixa potência e alta sensibilidade, enquanto o GNSS (GPS/Beidou) e a varredura por Wi-Fi oferecem cobertura de localização completa.
ao mesmo tempo em que fornece opções de conectividade para uma variedade de periféricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic4.png" alt="pir" width={800} height="auto" /></p>

## Recursos

- **Transceptor RF Half-Duplex LoRa/(G)FSK de Baixa Potência e Alta Sensibilidade**: Faixas de frequência com suporte na faixa de 863- 928MHz

- **Front-End de Rádio Multiuso para Geolocalização**: GNSS (GPS/ BeiDou), Wi-Fi, Bluetooth
- **GPIOs Ricos**: Mais de 400 GPIOs compatíveis com Grove para opções de expansão flexíveis.
- **Plataforma de Código Aberto**: Aproveite o amplo ecossistema de código aberto do LR1110 e do nRF52840 para infinitas possibilidades de aplicação.

### Transceptor LoRa® de Baixa Potência

Graças ao LoRa Edge™ LR1110 da Semtech, o Wio-WM1110 Dev Kit oferece comunicação LoRa® de longa distância e baixa potência. Para saber mais sobre Long Range e seus recursos, como arquitetura de rede e aplicações, você pode conferir a introdução à tecnologia LoRa® e LoRa®WAN®, que explica o que é Long Range, como funciona e seus prós e contras.

### Serviço de Localização

O Wio-WM1110 Dev Kit integra um front-end de rádio multiuso voltado para fins de geolocalização. Ele está equipado com GNSS dedicado para posicionamento externo, bem como varredura de baixo consumo de energia por WI-FI e Bluetooth para posicionamento interno.
É capaz de alternar automaticamente entre atividades externas e internas, eliminando a necessidade de construir rastreadores diferentes para uso interno ou externo, oferecendo cobertura de localização completa enquanto reduz a complexidade e o custo.

**Posicionamento Externo (GNSS)**

O Wio-WM1110 Dev Kit integra varredura GNSS (GPS/ BeiDou) de baixo consumo de energia,
obtendo dados de satélites e enviando-os criptografados para a LoRa® Cloud, reduzindo o consumo de energia e melhorando a segurança.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

**IPS (Wi-Fi+Bluetooth)**
Como complemento ao GNSS externo, o WM1110 Dev Kit também suporta varredura passiva por Wi-Fi de ultra baixo consumo de energia e varredura por Bluetooth adequada para posicionamento interno; ele escaneia o endereço MAC e o RSSI dos beacons Bluetooth/Wi-Fi próximos e envia os dados para serviços em nuvem para obter a localização precisa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

### Periféricos Ricos

Além do sensor de temperatura e umidade integrado e do acelerômetro de 3 eixos, este kit também inclui uma série de interfaces periféricas; suporta os protocolos de transmissão ADC/UART e IIC, que podem ser conectados a mais de 400 módulos Grove, permitindo atualizações fáceis para soluções mais inteligentes. Também é compatível com Arduino, fornecendo aos desenvolvedores possibilidades ilimitadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png" alt="pir" width={800} height="auto" /></p>

### Desenvolva Aplicações de Usuário

O Wio-WM1110 Dev Kit é uma poderosa plataforma de desenvolvimento de IoT totalmente de código aberto para desenvolvedores, e também inclui um conjunto de aplicações de exemplo e trechos de código, bem como um kit de desenvolvimento de software (SDK) para ajudá-lo a começar.

## Diagrama Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic_1.png" alt="pir" width={800} height="auto" /></p>

## Especificações

**LoRa® e Posicionamento (Semtech LR1110)**

|Protocolo LoRa®WAN|V1.0.4|
| :- | :- |
|Frequência|863~928MHz|
|Sensibilidade|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|Potência de Saída|20dBm máx @LoRa®|
|Tecnologia de Posicionamento|GNSS(GPS,BeiDou),WiFi|
|Alcance|2~10km (Depende da antena e do ambiente)|

**Bluetooth (Nordic nRF52840)**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|Flash|1MB|
|RAM|256KB|
|Protocolo|Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANT e pilhas proprietárias de 2,4 GHz|
|Potência de Saída|6dBm máx @Bluetooth|

**Sensores Integrados**

**Sensor de Temperatura e Umidade (SHT41)**

|  | Faixa | Precisão |
| -------- | -------- | -------- |
|Temperatura  | -40~125°C |0.2°C|
| Umidade | 0~100%RH |1.8%RH|

**Acelerômetro de 3 Eixos (LIS3DHTR)**

| Faixa | Largura de Banda | Sensibilidade(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

**Geral**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/spec.png" alt="pir" width={800} height="auto" /></p>

## Suporte Técnico

**Precisa de ajuda com o seu Wio-WM1110 Dev Kit? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
