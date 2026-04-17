---
title: Sensor - Luz(introdução)
description: Sensor - Luz(introdução)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor_light
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Sensor_light/
---

# Guia de Seleção de Sensor de Luz da Seeed

Aqui na Seeed, lançamos diferentes Sensores de Luz e isso pode causar problemas para alguns de vocês, pois talvez não saibam qual escolher e qual é adequado às suas necessidades. Aqui está a solução! Confira a comparação neste site para mais referência.

Para todos os sensores de luz em nosso bazar, clique em [Bazaar Light tag](https://www.seeedstudio.com/tag/light.html) para conferir.

## O que é um Sensor de Luz

Um sensor de luz é um dispositivo fotoelétrico que converte a energia luminosa (fótons) detectada em energia elétrica (elétrons). Parece simples? Há mais em um sensor de luz do que apenas sua definição. Ele existe em diferentes tipos, é usado em várias aplicações e muito mais!

### Glossário de termos

Antes de começarmos o guia de sensores de luz de hoje, precisamos entender os seguintes termos que são comumente associados à luz. Eu os simplifiquei para facilitar o entendimento:

### Candela

- Originada do termo velas, candela refere-se à intensidade luminosa; quão forte é a luz a olho nu

- Quanto maior a intensidade luminosa, maior a sensibilidade para nossos olhos

### Lúmen

- Mede a quantidade total de luz visível de uma fonte de luz por meio da relação entre a intensidade luminosa e o ângulo que um feixe de luz preenche
- Comumente usado para classificar o brilho de uma lâmpada
- Simplificando: Lúmen = Quantidade total de luz emitida em todas as direções

### Lux

- Usado para medir a iluminância, a área onde o fluxo luminoso é distribuído
- É semelhante ao Lúmen, mas leva em conta a área da superfície
- Simplificando: Lux = quantidade total de luz que incide sobre uma superfície específica

:::note
Se você ainda estiver confuso entre Lúmen e Lux, aqui está uma representação gráfica:
:::

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-88.png"/></div>

*Referência: [Lux vs Lumen](https://www.waveformlighting.com/home-residential/what-is-the-difference-between-lux-and-lumens)*

### Quais são os tipos de sensor de luz

Existem diferentes tipos de sensores de luz disponíveis; principalmente Fotoresistor, Fotodiodos e Fototransistores. Parece técnico? Vou detalhar com as explicações abaixo!

**1. Fotoresistores (LDR)**

<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Photoresistors_-_three_sizes_-_mm_scale.jpg"/></div>

O tipo de sensor de luz mais comum usado em um circuito de sensor de luz são os fotoresistores, também conhecidos como resistor dependente de luz (LDR). Fotoresistores são usados para simplesmente detectar se uma luz está ligada ou desligada e comparar níveis relativos de luz ao longo de um dia.

**Do que são feitos os fotoresistores?**

- Um material semicondutor de alta resistência chamado células de sulfeto de cádmio, altamente sensíveis à luz visível e à luz infravermelha próxima

**Como os fotoresistores funcionam?**

<div align="center"><img src="https://www.edgefx.in/wp-content/uploads/2015/02/Light-Intensity-vs-LDR-Resistance.jpg"/></div>

Como o nome sugere, os fotoresistores funcionam de forma semelhante aos resistores comuns, mas, em vez disso, a mudança de resistência depende da quantidade de luz à qual eles estão expostos.

- Alta intensidade de luz causa uma resistência menor entre a célula de sulfeto de cádmio
- Baixa intensidade de luz resulta em maior resistência entre as células de sulfeto de cádmio

Esse princípio de funcionamento pode ser visto em aplicações como postes de iluminação pública, em que, durante o dia, a maior intensidade de luz resulta em menor resistência e nenhuma luz produzida.

**2. Fotodiodos**

<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fotodio.jpg/220px-Fotodio.jpg"/></div>

Fotodiodos são outro tipo de sensor de luz. Porém, em vez de usar a mudança de resistência como o LDR, eles têm uma resposta mais complexa à luz, convertendo facilmente a luz em fluxo de corrente elétrica.

Também conhecidos como fotodetectores, sensores de luz.

**Do que são feitos os fotodiodos?**

- Fotodiodos são feitos principalmente de materiais como silício e germânio e são compostos por filtros ópticos, lentes embutidas e áreas de superfície

**Como os fotodiodos funcionam?**

Fotodiodos funcionam com base em um princípio de funcionamento chamado efeito fotoelétrico interno. Simplificando, quando um feixe de luz incide, elétrons são liberados, causando lacunas de elétrons, o que resulta em fluxo de corrente elétrica.

- Quanto mais intensa a luz presente, mais forte será a corrente elétrica.

**Aplicações de sensor de luz com fotodiodo**

Como a corrente gerada pelos fotodiodos é diretamente proporcional à intensidade da luz, isso os torna favoráveis para detecção de luz que requer respostas rápidas às mudanças de luz.

Como os fotodiodos são sensíveis à luz infravermelha, eles também são aplicáveis a mais usos.

Aqui estão algumas das aplicações dos fotodiodos:

- Eletrônicos de consumo que vão de toca-discos de CD compactos a detectores de fumaça e até dispositivos de controle remoto
- Aplicações médicas, como equipamentos/instrumentos usados para medição e análise
- Sistemas de energia solar, como painéis solares

**3. Fototransistores**

O último tipo de sensor de luz que exploraremos hoje é o fototransistor. O sensor de luz fototransistor pode ser descrito como um fotodiodo + amplificador. Com a amplificação adicional, a sensibilidade à luz é muito melhor nos fototransistores.

No entanto, ele não se sai melhor na detecção de baixo nível de luz em comparação com os fotodiodos.
Como ambos os tipos de sensores de luz compartilham um princípio de funcionamento semelhante, consulte a explicação anterior!

## Sensores de Luz na Seeed

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png" alt="Seeed Light Sensor Selection Guide" title="Seeed Light Sensor Selection Guide" />
    <figcaption><b>Figura 2</b>. <i>Sensores de Luz na Seeed</i></figcaption>
  </a>
</figure>
</div>

### Qual é o melhor para você

| Produto | [Grove - Light Sensor v1.1](https://www.seeedstudio.com/Grove-Light-Sensor-P-v1-1.html) | [Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) | [Grove - Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html) | [Grove - Sunlight Sensor](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html) | [Grove - I2C UV Sensor (VEML6070)](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-VEML6070.html) | [Grove - Light&Color&Proximity Sensor](https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html) |
|-----------------------|---------------------------|---------------------------|------------------------------|-------------------------|----------------------------------|--------------------------------------|
| Miniatura | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>      | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>  |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg" /></div>                     |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Grove_sunlight_sensor_view.jpg" /></div>                                     | <div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>                                       |<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg" /></div> |
| Interface | Analógica | Analógica | Digital | I2C | I2C | I2C |
| Comprimento de onda de pico | 540nm | 540nm | / | 280-950nm | 320-410 nm | / |
| Temperatura de Operação | -40°C a 85°C | -40°C a 85°C | -40°C a 85°C | -40°C a 85°C | -40°C a 85°C | -30～85°C |
| Lux Máx. [klx] | / | / | 0.1 - 40,000 LUX | / | / | / |
| Sensibilidade UVA | / | / | / | / | 5 μW/cm2/step(typical) | 60|

### Visão rápida

### Opção de baixo custo: [Grove – Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedimg2016-10po8b7qd0xnlnchgogziq9g3d.jpg" /></div>

Começando a lista de sensores de luz disponíveis aqui na Seeed está o Grove – Light Sensor v1.2! Junto com seu baixo preço de \$2.90, vem um fotodiodo altamente sensível e confiável para suas necessidades de detecção de luz!

Facilmente pareável com sua placa Arduino por meio do nosso sistema plug and play Grove, você se poupará do trabalho de conectar jumpers e soldá-la!

**Suas características incluem:**

- Chip Dual OpAmp LM358 na placa
- Módulo analógico
- Porta Grove integrada para fácil interface
- Saída de sinal elétrico conversível
- Depende do ADC na sua placa controladora, por exemplo, pode gerar 0-255 para um ADC de 8 bits)
- Fator de forma pequeno
- Reconhece espectro mais amplo

### Opção com saída de sinal digital: [Grove – Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881092_3.jpg" /></div>

Se você está procurando uma opção com saída de sinal digital juntamente com uma faixa de espectro de luz selecionável, o Grove – Digital Light Sensor é o ideal para você!

Baseado no conversor luz-para-digital I2C TSL2561, que faz a saída do sinal digital, este módulo de sensor de luz apresenta diodos duplos sensíveis à luz, onde você pode alternar entre 3 modos para fazer sua leitura!

Esses três modos são modo infravermelho, espectro completo e modo visível ao ser humano
O modo visível ao ser humano fornece leituras próximas à percepção dos seus olhos

**Suas funcionalidades incluem:**

- Ampla faixa dinâmica: 0,1 – 40.000 LUX
- Ampla faixa de temperatura de operação: -40deg a 85deg
- Saída digital de alta resolução de 16 bits em `400 kHz` I2C Fast-Mode
- Função de interrupção programável com configurações de limite superior e inferior definidas pelo usuário
- Modos de detecção selecionáveis

### Opção de detecção de luz solar: [Grove – Sunlight Sensor](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" /></div>

Embora seja feito para detecção direta de luz solar com UV, este sensor de luz digital também é adequado para uma variedade de outras fontes de luz, incluindo luz visível e infravermelha.

Baseado no sensor SI1145 da SiLabs, é um sensor de baixa potência, baseado em reflectância, de proximidade em infravermelho, índice UV e luz ambiente, com uma interface digital I2C e saída de interrupção de eventos programável.

Como o desempenho é essencial, este sensor de luz oferece uma ampla faixa dinâmica e de detecção de espectro para completar tudo!

**Suas Funcionalidades Incluem:**

- Sensor de luz digital
- Ampla faixa de detecção de espectro
- Configuração programável
- Alimentação de 3,3/5V
- Detecta luz solar diretamente
- Compatível com Grove
- Interface I2C (7 bits)

## Ideias de Aplicação

- Medição de luz
- Detector de luz
- Interruptor controlado por luz
- Dispositivo de casa inteligente
- Detecção de luz ambiente
- Controle de luz de fundo para painel de exibição
- Controle de iluminação de teclado

## Projetos Úteis

**Grove - Introdução em um Sensor de Luz**:

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed" width="350"></iframe>

**The Environment Cube! Know the Land Beneath You using Sigfox**: Um cubo com todos os sensores necessários, adequado para uma ampla gama de aplicações como agricultura, monitoramento, etc.

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed" width="350"></iframe>

**Seeed LoRa IoTea Solution**: Um sistema automático de coleta de informações aplicado a plantações de chá. Faz parte da coleta inteligente de informações agrícolas.

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed" width="350"></iframe>

**Intel Edison IoT Hydroponic Controller**: Um controlador hidropônico habilitado para IoT usando o Intel Edison durante o Boston IoT Hackathon.

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/bltrobotics/intel-edison-iot-hydroponic-controller-d7132d/embed" width="350"></iframe>

**COI - Light Transmission Meter**: O produto final usa o sensor de luz fornecido no Grove Starter Kit Plus para medir a mudança na intensidade da luz.

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/DigitalFabber/coi-light-transmission-meter-8044fd/embed" width="350"></iframe>

**The Environment Cube! Know the Land Beneath You!** Um cubo com todos os sensores necessários, adequado para uma ampla gama de aplicações como agricultura. Conheça a terra sob você!

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed" width="350"></iframe>

## Recursos

### Tutoriais sobre Grove - Light Sensor v1.1

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

- [O que é um sensor de luz? Tipos, usos, guia para Arduino](https://www.seeedstudio.com/blog/2020/01/08/what-is-a-light-sensor-types-uses-arduino-guide/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>