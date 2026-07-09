---
description: Grove AI HAT para Computação de Borda
title: Grove AI HAT para Computação de Borda
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_AI_HAT_for_Edge_Computing
sku: 102991187
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Grove_AI_HAT_for_Edge_Computing/
---

![](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove%20AI%20HAT%20for-Edge-Computing-wiki-front.jpg)

O Grove AI HAT para Computação de Borda (doravante chamado de 'Grove AI HAT') é construído em torno do MÓDULO de IA Sipeed MAix M1 com processador Kendryte K210. É um hat de IA para Raspberry Pi de baixo custo, mas poderoso, que auxilia o Raspberry Pi a executar IA na borda; ele também pode funcionar de forma independente para aplicações de computação de borda.

O MAix M1 é um poderoso módulo de IA RISC-V de 600 MHz que possui CPU dual-core de 64 bits, KPU de 230 GMULps 16-bit (Processador de Rede Neural), FPU (Unidade de Ponto Flutuante) com suporte a DP&SP, e APU (Processador de Áudio) com suporte a 8 microfones.

Além do poderoso processador Kendryte K210, a placa Grove AI HAT para Computação de Borda fornece uma grande quantidade de periféricos: I2C/UART/SPI/I2S/PWM/GPIO. O hat também oferece interface para LCD e câmera, que suportam o LCD Sipeed 2.4inch QVGA e câmera DVP, o que será útil e conveniente para o seu projeto de visão com IA. Assim como o <a href="https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-1-p-2873.html" target="_blank">Sipeed MAix BiT Kit for RISC-V AI+IoT</a>
, lançaremos em breve o kit com câmera e LCD. Para aplicações de reconhecimento de voz por IA, adicionamos um microfone de alta qualidade. E para aplicações de robótica ou movimento, há um sensor acelerômetro de 3 eixos onboard, que é mais preciso e fácil de usar em comparação com sensores externos.

Lançamos vários produtos de IA SIPPED, acreditamos que é hora de torná-lo Grove, e trazer todos os nossos centenas de sensores Grove e atuadores Grove para suas aplicações de IA. Então aqui está o Grove AI HAT para Computação de Borda. Adicionamos 6 conectores Grove a este hat, incluindo 1xDigital IO, 2xAnalog IO, 1xI2C, 1xUART e 1xPWM. Além disso, com base em <a href="https://github.com/kendryte/kendryte-standalone-sdk" target="_blank">kendryte-standalone-sdk</a>
, oferecemos suporte a Linux, Windows, Mac OS X e outros ambientes de desenvolvimento.

Esperamos que esta placa possa ajudá-lo com sua computação de borda, visão com IA, reconhecimento de voz e outros projetos de IA, apenas aproveite.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/5BF3ExL1HOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Processador: módulo Sipeed MAIX-I sem WiFi (1º Módulo de IA RISC-V 64, K210 interno)
- 1x USB 2.0 Device, Tipo C (Alimentação e Programação)
- 6x Interfaces Grove: inclui 1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC
- 1x LED de Alimentação, 1x LED de Boot
- 1x Botão de Reset, 1x Botão de Boot
- 1x Interface para LCD
- 1x Interface para Câmera
- 1x Microfone Digital
- 1x Sensor Acelerômetro
- 1x Header de Pinos JTAG & ISP UART
- 2x Header de 20 Pinos com I2C, UART, SPI, I2S, PWM, GPIO

## Especificação

|Parâmetro|Valor|
|---|---|
|CPU|K210 RISC-V Dual Core 64bit, 400Mh (Máx. 600Mhz) |
|FPU|FPU pipeline de alto desempenho compatível com IEEE754-2008|
|KPU(Neural Network Processor )|• Suporta o modelo de ponto fixo que o framework de treinamento mainstream treina de acordo com regras de restrição específicas<br />• Suporte para kernels de convolução 1x1 e 3x3<br />• Suporte para qualquer forma de função de ativação<br />• O tamanho máximo de parâmetros de rede neural suportado para trabalho em tempo real é de 5MiB a 5.9MiB|
|Suporte de Depuração|Interface UART e JTAG de alta velocidade para depuração|
|Tensão de Alimentação|5V<br />não pode exceder 5,5V|
|Tensão de IO|3,3V|
|Temperatura Ambiente de Operação| -20 – 70℃|
|ADC|ADC de 16 bits onboard|
|Acelerômetro de 3 Eixos|ADXL345 ±2 g/±4 g/±8 g/±16 g|
|Microfone|Sensibilidade: -26 dB; SNR: 61 dB|
|GPIO|2x Header de 20 Pinos compatível com Raspberry Pi|
|Interface Grove|1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC|
|Interface USB|USB 2.0 Device, Tipo C (Alimentação e Programação)|
|Interface para LCD|Conector FPC 8bit MCU LCD 24P 0,5mm|
|Interface para Câmera DVP|Conector FPC 24P 0,5mm|
|Botão|1x Botão de Reset, 1x Botão de Boot (pode ser usado como Botão de Usuário)|
|LED|1x LED de Alimentação, 1x LED de Boot (pode ser usado como LED de Usuário)|

:::caution

- Todos os níveis de interface de IO digital e analógico são 3,3V. Não insira mais de 3,3V, caso contrário a CPU poderá ser danificada.  
- A tensão de alimentação de entrada é 5V e não pode exceder 5,5V.
:::

## Aplicações

- IA para Computação de Borda
- Prédio Inteligente
- Equipamento médico
- Automação & Controle de Processo
- Robô

## Visão Geral de Hardware

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/pinout1.jpg" alt="Grove AI HAT for Edge Computing hardware overview" title="hardware overview" />
  <figcaption><b>Figura 1</b>. <i>Visão geral de hardware do Grove AI HAT para Computação de Borda</i></figcaption>
</figure>
</div>

## Plataformas Suportadas

|                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

#### Demo Digital

**Materiais necessários**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - LED](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) x1
- Cabo USB Tipo C x1

##### Conexão de Hardware

- 1. Conecte o Grove - LED à porta Grove **J2** (pino D13) do Grove AI HAT
- 2. Conecte o Grove AI HAT ao computador via porta USB Tipo C.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect.png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figura 8</b>. <i>Conexão de hardware</i></figcaption>
</figure>
</div>

#### Demo Analógico

**Materiais necessários**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - Round Force Sensor (FSR402)](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR40-p-3110.html) x1
- Cabo USB Tipo C x1

##### Conexão de Hardware

- 1 Conecte o Grove - Round Force Sensor (FSR402) à porta Grove **J11** (pino A0) do Grove AI HAT
- 2 Conecte o Grove AI HAT ao computador via porta USB Tipo C.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect2(1).png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figura 9</b>. <i>Conexão de hardware</i></figcaption>
</figure>
</div>

#### Demo de Detecção de Rosto

**Materiais necessários**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [OV2640 Camera](https://www.seeedstudio.com/OV2640-Fisheye-Camera-p-4048.html) x1
- [2.4 inch TFT LCD](https://www.seeedstudio.com/2-4-TFT-LCD-p-4049.html) x1
- Cabo USB Tipo C x1

##### Conexão de Hardware

- a. Conecte a câmera OV2640 ao conector FPC de 24 pinos para câmera do Grove AI Hat
- b. Conecte o LCD TFT de 2,4 polegadas ao conector FPC de 24 pinos para LCD do Grove AI Hat
- c. Conecte o Grove AI HAT ao computador via porta USB Tipo C.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-connect.jpg" alt="Grove AI HAT face detect demo-1" title="" />
  <figcaption><b>Figura 12</b>. <i>Conexão de hardware do demo de detecção de rosto</i></figcaption>
</figure>
</div>

## Recursos

- **[PDF]** [Arquivo esquemático do Grove AI HAT for Edge Computing](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Grove%20AI%20HAT%20for%20Edge%20Computing_v1.0_SCH_190426.pdf)
- **[PDF]** [Datasheet do Accelerometers_Sensor_datasheet](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Accelerometers_Sensor_datasheet.pdf)
- **[PDF]** [Datasheet do ADS1115](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/ADS1115.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
