---
description: Grove - Acelerômetro Analógico de 3 Eixos
title: Grove - Acelerômetro Analógico de 3 Eixos
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Analog_Accelerometer
sku: 101020051
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Analog_Accelerometer/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_Analog_Accelerometer_photo.JPG" alt="pir" width={600} height="auto" /></p>

O ADXL335 é um acelerômetro completo de 3 eixos, pequeno, fino e de baixa potência, com saídas de tensão de sinal condicionadas. O produto mede aceleração com uma faixa de escala completa mínima de ±3 g.
O módulo foi projetado como uma placa de breakout porque o sinal do ADXL335 é analógico (requer mais portas). Mas o contorno da placa é um módulo Grove que você pode fixar convenientemente como outros módulos Grove. O sensor combina fontes de alimentação de 3,3 e 5 V, podendo ser usado em dispositivos Arduino padrão e no Seeeduino Stalker. O código de programa a seguir inclui um filtro de primeira ordem que pode tornar a saída mais suave se o sensor for usado em robô ou carrinho de brinquedo.

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html)

Recursos
--------

- Ampla faixa de alimentação de CC 3V a 5V
- Contorno Grove
- Detecção de 3 eixos
- Pacote pequeno e de baixo perfil: 4×4×1,45 mm LFCSP
- Baixo consumo de energia 350 µA a 3V (típico)
- Alta sensibilidade
- Resistência a choque de 10.000 g
- Ajuste de largura de banda com um único capacitor por eixo
- Compatível com RoHS/WEEE sem chumbo

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Ideias de Aplicação
-----------------

- Sensor de movimento
- Detector de choque
- Sensor de vibração
- Carrinho de brinquedo
- Robô

Plataformas Suportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Antes de usar
------------

Sugerimos que você leia este conhecimento antes de usar o sensor de gás, isso o ajudará a aprender mais sobre Arduino e nossos produtos, e também permitirá que você use hardware de código aberto com mais facilidade.

- Primeiros Passos com Arduino
- O que é o sistema Grove
- Por que eu preciso de um Base Shield?

Depois de ler isso, você saberá como usar o Base Shield com produtos Grove para funcionar bem com o Arduino. Vamos começar!

Primeiros Passos
-----

O contorno do sensor é uma placa de breakout, você pode soldar fios na placa ou usar jumpers para conectar o sensor.

- O VCC conecta à fonte de alimentação (DC5V ou DC3,3V), GND ao terra, X à porta analógica A0 do Arduino, Y à A1, Z à A2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_analog_accelerometer_V1.0_hardware.jpg" alt="pir" width={600} height="auto" /></p>

- Baixe a [3-Axis Analog Accelerometer Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip) e descompacte-a na pasta libraries da IDE Arduino pelo caminho: ..\\arduino-1.0.1\\libraries.
- Regule o sensor

O sensor é um dispositivo analógico, você deve regulá-lo antes de integrá-lo ao seu sistema.

**Passo 1:** Abra o Demo: Calibration e faça o upload para o Arduino.

**Passo 2:** Abra o monitor serial e certifique-se de que o sensor esteja conectado. Siga as instruções dos eixos impressas na placa do sensor. Primeiro, certifique-se de que a direção do eixo Z esteja para cima, digite qualquer caractere quando estiver pronto. Mude a posição do sensor, repita a operação acima para obter as direções em que o eixo X e o eixo Y estejam para cima.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

**Passo 3:** Você pode obter os valores como mostrado acima. Por favor, modifique as definições de macro com esses resultados em ADXL335.h

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg" alt="pir" width={600} height="auto" /></p>

Agora a calibração foi concluída.

- Baixe o código de demonstração: Measuring Acceleration, depois abra o monitor serial, gire o sensor em qualquer ângulo e você poderá ver o valor de ângulo digital enviado do acelerômetro para o monitor.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg" alt="pir" width={600} height="auto" /></p>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Grove - 3-Axis Analog Accelerometer Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip)

- [3-Axis Analog Accelerometer Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip)

- [Repositório GitHub para 3-Axis Analog Accelerometer](https://github.com/Seeed-Studio/Grove_3Axis_Analog_Accelerometer)

- [ADXL335 datasheet.pdf](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/ADXL335_datasheet.pdf)

## Projeto

**Grove - Introdução ao Acelerômetro Digital de 3 Eixos** Como usar um acelerômetro digital de 3 eixos.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Analog_Accelerometer -->

**Solar Panel Dual Management System (SP DMS)** Este protótipo de IoT executa duas funções: 1) Prevenção de roubo e 2) Indicação de manutenção do painel solar usando LinkIt ONE e sensores.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/skyline/solar-panel-dual-management-system-sp-dms-3a87ca/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
