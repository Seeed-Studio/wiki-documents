---
description: Guia de Seleção de Sensores de Barômetro Seeed
title: Guia de Seleção de Sensores de Barômetro Seeed
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Barometer-Selection-Guide
sku: 101020193,101020192,101020068,101020032,101020812
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Barometer-Selection-Guide/
---

# Guia de Seleção de Barômetros Seeed

Lançamos vários tipos de sensores de barômetro nos últimos anos. Você pode achar difícil fazer uma escolha entre eles. Entendemos sua dificuldade, então vamos dar uma olhada de perto neles e descobrir qual é o mais adequado para você!

Para ver todos os sensores de barômetro em nosso bazar, clique em [Bazaar Barometer tag](https://www.seeedstudio.com/tag/Barometer.html).

## O que é um Barômetro

Um barômetro é um instrumento meteorológico amplamente utilizado que mede a pressão atmosférica (também conhecida como pressão do ar ou pressão barométrica) — o peso do ar na atmosfera. Ele é um dos sensores básicos incluídos em estações meteorológicas. Os barômetros evoluíram ao longo dos séculos e existem em todos os formatos e tamanhos. Também é usado em mais indústrias além dos setores de clima e meteorologia.

Por exemplo, hoje em dia, a maioria dos telefones celulares possui barômetros digitais integrados, que são o principal tipo de barômetro na área de eletrônicos.

<div align="center">
<img src="https://files.seeedstudio.com/products/101020812/img/baro%20produced.2019-12-11%2011_05_01.gif" />
</div>

### Como Funciona um Barômetro Digital

Um barômetro digital usa uma célula de detecção (isto é, um chip) para medir a temperatura do ar. Esse chip é fundamental e sensível à pressão atmosférica, que influencia sua capacidade de conduzir/transmitir eletricidade.

A variação do volume afeta a intensidade da corrente que flui através dele, e a pressão do ar é calculada medindo-se a intensidade dessa corrente. O tamanho reduzido e a versatilidade da célula de teste permitem que ela seja integrada em uma variedade de dispositivos para diversos fins.

A foto abaixo mostra um sensor de barômetro típico com um chip integrado (DPS310):

<div align="center">
<img width="{400}" src="https://github.com/SeeedDocument/Grove-High-Precision-Barometer-Sensor-DPS310/raw/master/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" />
<figcaption><b>Figura 1</b>. <i>Sensor de Barômetro Típico</i></figcaption>
</div>

## Sensores de Barômetro na Seeed

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" alt="Seeed Barometer Selection Guide" title="Seeed Barometer Selection Guide" /><figcaption><b>Figura 2</b>. <i>Sensores de Barômetro na Seeed</i></figcaption></a>
</figure>
</div>

### Qual é o Melhor para Você

| Especificações               | [Grove - BMP280](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)   | [Grove - BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)  | [Grove - DPS310](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)      | [Grove - HP206F](https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html)    |
|------------------------------|-----------------|-----------------|---------------------|-------------------|
| **Imagem em Miniatura**              |     ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg)            |      ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg)           |                ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg)     |       ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg)            |
| **Faixa de Pressão**               | 300 ~ 1100hPa   | 300 ~ 1100hPa   | 300 ~ 1200hPa       | 700 ~ 1100hPa     |
| **Faixa de Temperatura**            | -40 ～ 85°C     | -40 ～ 85°C     | -40 ～ 85°C         | -40 ～ 85°C       |
| **Precisão de Pressão**           | /               | /               | ± 0.002hPa (±0.02m) | /                 |
| **Exatidão de Pressão (Absoluta)** | ± 1hPa (ou ±8m) | ± 1hPa (ou ±8m) | ± 1hPa (ou ±8m)     | ± 1.5hPa (ou ±8m) |
| **Exatidão de Pressão (Relativa)** | ± 0.12 hPa      | ± 0.12 hPa      | ± 0.06 hPa          | ± 0.06 hPa        |
| **Resolução de Pressão**          | 0.18Pa          | 0.18Pa          | 0.06Pa              | 0.01hPa           |
| **Umidade**                     | /               | 0 ~ 100%        | /                   | /                 |
| **Interface de Comunicação**       | I2C / SPI       | I2C / SPI       | I2C / SPI           | I2C               |

### Visão Rápida

Pela tabela acima, **Faixa de Pressão**, **Exatidão de Pressão (Relativa)** e **Resolução de Pressão** são os aspectos essenciais dos sensores de barômetro. Por esses motivos, você pode escolher aquele que melhor se adapta às suas necessidades. Além disso, também é necessário considerar a interface de comunicação. No nosso caso, a comunicação I2C está disponível para todos os barômetros e SPI também está disponível para a maioria deles.

:::note
A comunicação SPI pode operar mais rápido do que I2C, o que pode ser uma vantagem em algumas situações.
:::

Além disso, o [Grove - Temp&Humi&Barometer Sensor (BME280)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) adicionou recursos para medir temperatura com precisão de ±1% e umidade com ±3% para certas necessidades.

## Ideias de Aplicação

- Navegação Interna (detecção de andar, por exemplo, em shoppings e estacionamentos)
- Saúde e Esportes (ganho de elevação e velocidade vertical precisos)
- Navegação Externa (tempo de inicialização e melhoria de precisão do GPS, dead-reckoning, por exemplo, em túneis)
- Estação Meteorológica ("Microclima" e previsões locais)
- Drones (estabilidade de voo e controle de altura)

## Projetos Úteis

**Seeed LoRa IoTea Solution**: Um sistema automático de coleta de informações aplicado a plantações de chá. Faz parte da coleta inteligente de informações agrícolas.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Sistema de alarme inteligente feito com BBG (IoT)**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**Sistema de Monitoramento para Culturas Inteligentes** Projete e construa um sistema para monitorar o estado de suas culturas usando o Netduino 3 WiFi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>

## Recursos

- Referência

  - [How a Barometer Works and Helps Forecast Weather](https://www.thoughtco.com/how-barometers-measure-air-pressure-3444416)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>