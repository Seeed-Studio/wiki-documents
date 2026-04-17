---
description: Primeiros passos com o SenseCAP Indicator
title: Primeiros passos com o SenseCAP Indicator
keywords:
  - Primeiros passos SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sku: 114993068,114993071,114993069,114993070
sidebar_position: 1
last_update:
  date: 10/13/2025
  author: Twelve
createdAt: '2023-05-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator/
---

## Visão geral

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
  <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">Adquira o seu agora 🖱️</a>
</div>

SenseCAP Indicator é uma tela sensível ao toque de 4 polegadas, acionada por ESP32-S3 e RP2040 Dual-MCU e que oferece suporte à comunicação Wi-Fi/Bluetooth/LoRa.

O dispositivo vem com duas interfaces Grove, que suportam os protocolos de transmissão ADC e I2C, e duas portas USB Type-C com pinos de expansão GPIO internos, para que o usuário possa facilmente expandir acessórios externos via porta USB.

SenseCAP Indicator é uma poderosa plataforma de desenvolvimento de IoT totalmente open source para desenvolvedores. O serviço integrado de Fusion ODM também está disponível para personalização e rápida expansão em escala.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

:::caution note
Por favor, não grave o firmware Meshtastic em indicadores que não oferecem suporte ao Meshtastic. Isso pode causar danos ao hardware. Se você quiser adquirir o dispositivo para Meshtastic, compre este [Sensecap Indicator for Meshtastic](https://wiki.seeedstudio.com/pt-br/sensecap_indicator_meshtastic).
:::

## Recursos

- **MCUs duplos e GPIOs abundantes**
Equipado com poderosos MCUs duplos ESP32S3 e RP2040 e mais de 400 GPIOs compatíveis com Grove para opções de expansão flexíveis.
- **Monitoramento de qualidade do ar em tempo real**
Sensores tVOC e CO2 integrados, e um sensor externo Grove AHT20 TH para leituras mais precisas de temperatura e umidade.
- **Hub LoRa local para conectividade IoT**
Chip LoRa Semtech SX1262 integrado (opcional) para conectar dispositivos LoRa a plataformas IoT populares, como Matter via Wi-Fi, sem a necessidade de dispositivos adicionais compatíveis.
- **Plataforma totalmente open source**
Aproveite o amplo ecossistema open source de ESP32 e Raspberry Pi para possibilidades infinitas de aplicação.
- **Serviço Fusion ODM disponível**
A Seeed Studio também fornece serviço ODM completo para personalização rápida e ampliação de escala para atender a diversas necessidades. (entre em contato pelo e-mail iot@seeed.cc)

## Visão geral de hardware

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### Diagrama do sistema

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### Função do botão

- **Pressionar rapidamente:** Desligar / Acordar a tela.
- **Pressionar por 3s:** Ligar / Desligar o dispositivo.
- **Pressionar por 10s:** Restauração do firmware de fábrica.

### Grove

Existem duas interfaces Grove para conectar módulos Grove, proporcionando mais possibilidades para os desenvolvedores.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove é um sistema modular de prototipagem com conectores padronizados e um forte ecossistema de hardware open source. Clique [**aqui**](https://www.seeedstudio.com/category/Grove-c-1003.html) para saber mais

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®

O módulo LoRa® Semtech SX1262 embarcado permite que você crie a aplicação LoRa® e conecte seus sensores LoRa locais à nuvem via Wi-Fi. Por exemplo, você pode criar um dispositivo hub LoRa para conectar seus sensores LoRa ao seu ecossistema de casa inteligente para implementar Matter sobre Wi-Fi. Dessa forma, os dispositivos LoRa podem ser conectados ao ecossistema Matter via Wi-Fi, sem a necessidade de comprar um novo dispositivo compatível com Matter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## Especificações

|Tela|3,95 polegadas, tela sensível ao toque capacitiva RGB|
| :- | :- |
|**Resolução da tela**|480 x 480 pixels|
|**Fonte de alimentação**|5V-DC, 1A|
|**Bateria**|Sem bateria, alimentado apenas pela porta USB|
|**Processador**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit até 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ até 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**Armazenamento externo**|Suporta cartão Micro SD de até 32GB (não incluído)|
|**Wi-Fi**|802.11b/g/n, 2,4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>Modem LoRa e FSK</p><p>+21dBm Potência máxima transmitida</p> <p>-136dBm@SF12 BW=125KHz Sensibilidade de RX</p><p>Até 5km de distância de comunicação</p>|
|**Sensores**(Opcional)|<p>**CO2(Sensirion SCD41)**</p><p>Faixa: 0-40000ppm</p><p>Precisão: 400ppm-5000ppm ±(50ppm+5% da leitura)</p><p>**TVOC (SGP40)**</p><p>Faixa: 1-500 pontos de índice de VOC</p>**Grove Sensor de Temperatura e Umidade(AHT20)**<p>Faixa de temperatura: -40 ~ + 85 ℃/± 0,3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## Recursos

- [**PDF**]: [RP2040 Datasheet](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)

## Suporte técnico

**Precisa de ajuda com seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
