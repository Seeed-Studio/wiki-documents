---
description: Xadow - Sensores Básicos
title: Xadow - Sensores Básicos
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Basic_Sensors
sku: 101040006
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Basic_Sensors/
---

---
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.JPG)

Xadow Basic Sensors integra três sensores diferentes em uma única placa:
- Acelerômetro de 3 eixos para detecção de movimento, monitoramento de atividade e rastreamento de velocidade
- Sensor de Luz Digital com diodo duplo que pode medir separadamente infravermelho, espectro completo ou luz visível ao olho humano
- Sensor de Temperatura para monitoramento de temperatura.

[![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)

## Recursos
---
- Placa de sensor três em um
- Plugue e use se conectada ao RePhone Kit Create
- Código aberto e design modular
- Fina e pequena
- Conectores Xadow de 11 PINs embutidos para conexão totalmente flexível com outros módulos Xadow
- Empilhável, encadeável e costurável com outros módulos Xadow.

## Especificações
---
**Visão geral**

|Item|Valor|
|---|---|
|Microcontroller	|STM32F030F4
|Core|	ARM® 32-bit Cortex® -M0 CPU
|Power Supply|	3.3 ~ 6 V (via breakout pins)
|Flash	|16 KB
|SRAM|	4 KB
|Clock Speed|	48 MHz
|Operating Temperature Range	|-30°C a 70°C
|Interfaces|	Interface com Xadow GSM+BLE através de I2C (endereço de 7 bits 0x03)
|Dimension	|25,37mm × 20,30mm / 1” × 0,8”

**Acelerômetro de 3 eixos (ADXL345)**

|Item|value|
|---|---|
|Test g Range|	±2g (padrão), ±4g, ±8g, ou ±16g
|Resolution|	Aumenta com a faixa de g, até resolução de 13 bits em ±16g

**Sensor de Luz Digital (TSL2561) -- Aproxima a Resposta do Olho Humano**

|Item|Valor|
|---|---|
|Dynamic Range (Lux)|	0,1 a 40.000 Lux
|Dual Photodiodes	|Infravermelho e espectro completo

**Sensor de Temperatura (LM75ADP)**

|Item|Valor|
|---|---|
|Temperature Range|	-55°C a 125 °C
|Accuracy	|± 2°C para faixa de temperatura de -25°C a 100°C / ± 3°C para faixa de temperatura de -55°C a 25°C e de 100 °C a 125°C|

## Visão Geral de Hardware
---
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.png)

## Use-o com o RePhone Kit Create
---
**Obter os Dados do Sensor**

Sem qualquer programação, você pode conectá-lo ao Core Module (Xadow GSM+BLE) do seu ‘RePhone Kit Create' para ler todos os dados dos sensores.
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Sensor_Value.png)

**Configurar 'If This Then That**

Você também pode definir os dados do sensor como condição para acionar uma série de atuadores como áudio, matriz de LED e fita de LED, ou acionar ações como fazer uma chamada e enviar uma mensagem.
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Set_Sensor_Condition.png)

## Comunidade RePhone
---
[![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Temos procurado um lugar melhor onde nossos apoiadores (Usuários RePhone) possam se reunir, de forma calorosa e confortável, conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E então aqui está, a [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone).

Agora junte-se a nós na [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.

**Perguntas Frequentes**

Algumas perguntas frequentes na [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone) são coletadas e respondidas no tópico "Frequently Asked Questions of RePhone (FAQ)", que será mantido atualizado sempre que surgir uma nova FAQ.


## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
Continuaremos atualizando o código-fonte em nossa página no github:
- [Código-fonte para Xadow Basic Sensors](https://github.com/WayenWeng/Xadow_Basic_Sensors/)

O diagrama esquemático do Xadow Basic Sensors é fornecido no link a seguir:
- [Arquivos de Esquemático do Xadow Duino](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip)

Confira mais informações sobre o datasheet de cada sensor:
- [ADXL345 - 3_Axis Acceserometer](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/ADXL345-3_Axis_Acceserometer.pdf)
- [LM75A NXP - Temperature Sensor](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/LM75A_NXP-Temperature_Sensor_.pdf)
- [TSL2561 - Light Sensor](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/TSL2561-Light_Sensor_.pdf)

E o MCU STM32F030F4:
- [STM32F030F4](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/STM32F030F4.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
