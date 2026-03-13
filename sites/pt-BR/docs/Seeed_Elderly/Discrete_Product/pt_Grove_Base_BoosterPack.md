---
description: GGrove Base BoosterPack
title: Grove Base BoosterPack
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_BoosterPack
sku: 103020019
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Base_BoosterPack/
---
![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/110020004%205.jpg)

Os BoosterPacks são módulos plug-in que podem ser empilhados sobre os diversos kits LaunchPad para adicionar funcionalidades adicionais, como sensores, displays, módulos sem fio e mais. O Grove Base BoosterPack é uma adição bem-vinda ao ecossistema LaunchPad/BoosterPack, permitindo que qualquer LaunchPad faça interface com a crescente oferta de módulos Grove da Seeed Studio. O Grove Base BoosterPack oferece uma forma conveniente e fácil para prototipagem rápida usando mais de uma centena de módulos Grove com conectores padronizados, incluindo sensores, atuadores, displays, luzes, motores e muito mais.

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/Grove_Web_idea.jpg)

**O que é Grove？**

Grove é um conjunto de ferramentas modular e pronto para uso que adota uma abordagem de blocos de montagem para construir eletrônica. O sistema Grove consiste em um shield/base e uma grande seleção de módulos que possuem conectores padronizados. O shield/base permite a conexão fácil de qualquer microcontrolador para fazer interface com os diversos módulos Grove. Cada módulo Grove atende a uma função única e o conjunto geral de módulos expande uma ampla gama de funcionalidades – de um simples botão de pressão a um sensor de batimentos cardíacos complexo. Cada um vem com documentação clara e código de demonstração para ajudar você a começar rapidamente.

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/IMG_GROVE.JPG)

**O que é LaunchPad？**

O LaunchPad é um conjunto de kits de avaliação da Texas Instruments. Para introduzir novas funcionalidades aos kits de avaliação LaunchPad, apresentamos o BoosterPack, que atua como uma placa plug-in que se encaixa sobre as placas-base LaunchPad. Ele oferece uma forma conveniente e fácil para você usar mais de uma centena de módulos Grove com conectores padronizados, incluindo sensores, atuadores, displays, luzes, motores e assim por diante.

## Recursos

---
- A Seeedstudio apresenta o recém-lançado Grove Base BoosterPack, permitindo que o Texas Instruments LaunchPad seja conectado de perto com nossa família Grove, possibilitando ainda mais protótipos rápidos e combinações com uma variedade de sensores, atuadores, displays, luzes, motores etc.

- O Grove Base BoosterPack possui treze interfaces padrão Grove de 4 pinos, incluindo cinco analógicas, cinco digitais e três portas seriais, atuando como um módulo de expansão plug-n-play no LaunchPad baseado no MSP430 LaunchPad. Ele também fornece vários tutoriais sobre como se conectar com o TI MSP430, existindo 11 tipos diferentes de projetos como protótipos de referência, que oferecem uma maneira conveniente de orientar a sua criatividade.

- Há um LED VERMELHO no Grove BoosterPack. Ele indicará o fornecimento de energia.

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/BoosterpackpinMapping.jpg)

## Usando o Grove Base BoosterPack

---

### Usando um LaunchPad de 40 pinos

isto é, MSP-EXP430F5529LP, EK-TM4C123GXL, etc.

O BoosterPack foi projetado de forma a aproveitar os pinos no "conjunto interno de 20 pinos" [21-40]. Os pinos são conectados como mostrado abaixo na tabela:

Usando a tabela abaixo, os desenvolvedores devem ser capazes de ler um valor analógico de um módulo Grove (isto é, potenciômetro/botão giratório) que esteja conectado ao conector Grove 'J6' usando a chamada de API analogRead(24) com o Energia.

<table>
<tr>
<th>Connector Type</th>
<th>Grove connector Label</th>
<th>GND</th>
<th>VCC</th>
<th>SIG1 (connection to the BoosterPack pin)</th>
<th>SIG0 (connection to the BoosterPack pin)</th>
</tr>
<tr>
<td>Analog</td>
<td>J5</td>
<td>GND</td>
<td>3.3V</td>
<td>23 (analog capable pin)</td>
<td>22 (analog capable pin)</td>
</tr>
<tr>
<td>Analog</td>
<td>J6</td>
<td>GND</td>
<td>3.3V</td>
<td>25 (analog capable pin)</td>
<td>24 (analog capable pin)</td>
</tr>
<tr>
<td>Analog</td>
<td>J7</td>
<td>GND</td>
<td>3.3V</td>
<td>26 (analog capable pin)</td>
<td>25 (analog capable pin)</td>
</tr>
<tr>
<td>Analog</td>
<td>J8</td>
<td>GND</td>
<td>3.3V</td>
<td>27 (analog capable pin)</td>
<td>26 (analog capable pin)</td>
</tr>
<tr>
<td>Analog</td>
<td>J9</td>
<td>GND</td>
<td>3.3V</td>
<td>28 (analog capable pin)</td>
<td>27 (analog capable pin)</td>
</tr>
<tr>
<td>I2C</td>
<td>J10</td>
<td>GND</td>
<td>3.3V</td>
<td>10 (I2C SDA)</td>
<td>9 (I2C SCL)</td>
</tr>
<tr>
<td>UART</td>
<td>J11</td>
<td>GND</td>
<td>3.3V</td>
<td>4 (UART to MCU)</td>
<td>3 (UART from MCU)</td>
</tr>
<tr>
<td>SPI</td>
<td>J12</td>
<td>GND</td>
<td>3.3V</td>
<td>14 (SPI MISO)</td>
<td>7 (SPI CLK)</td>
</tr>
<tr>
<td>Digital</td>
<td>J13</td>
<td>GND</td>
<td>3.3V</td>
<td>39 (Digital/PWM pin)</td>
<td>40 (Digital/PWM pin)</td>
</tr>
<tr>
<td>Digital</td>
<td>J14</td>
<td>GND</td>
<td>3.3V</td>
<td>38 (Digital/PWM pin)</td>
<td>39 (Digital/PWM pin)</td>
</tr>
<tr>
<td>Digital</td>
<td>J15</td>
<td>GND</td>
<td>3.3V</td>
<td>37 (Digital/PWM pin)</td>
<td>38 (Digital/PWM pin)</td>
</tr>
<tr>
<td>Digital</td>
<td>J16</td>
<td>GND</td>
<td>3.3V</td>
<td>36 (Digital/PWM pin)</td>
<td>37 (Digital/PWM pin)</td>
</tr>
<tr>
<td>Digital</td>
<td>J17</td>
<td>GND</td>
<td>3.3V</td>
<td>35 (Digital/PWM pin)</td>
<td>36 (Digital/PWM pin)</td>
</tr>
</table>

### Usando um LaunchPad de 20 pinos

Se você estiver usando um LaunchPad de 20 pinos, pode usar jumpers ou fios jumper para fazer as conexões apropriadas entre um conector Grove e o conector do BoosterPack.

Usando o diagrama de pinagem específico do seu LaunchPad, você pode conectar física/eletricamente o módulo Grove ao pino apropriado. Diagramas de pinagem para cada LaunchPad estão disponíveis aqui:
[https://energia.nu/pin-maps/](https://energia.nu/pin-maps/)

Com a ajuda desses diagramas de pinos, você sabe qual pino possui a função de que precisa. Se quiser usar o conector Grove J5 para um módulo Grove analógico (isto é, botão de potenciômetro), você pode usar os mapas de pinos do Energia para identificar um pino com capacidade analógica no conector do BoosterPack. Usando um jumper de fio, você pode conectar o pino número 22 ao pino com capacidade analógica que estiver disponível. Por exemplo, se você estiver usando um LaunchPad MSP-EXP430G2, pode usar um jumper ou um cabo para conectar o pino 22 ao pino 2.

## Produtos Compatíveis

---

### Lista Grove

<!-- *   [1. Buzzer](/pt-br/Grove-Buzzer#With_TI_LaunchPad)

*   [2. Relay](/pt-br/Grove-Relay#With_TI_LaunchPad)

*   [3. 4-Digital Display ](/pt-br/Grove-4-Digit_Display#With_TI_LaunchPad)

*   [4. Rotary Angle Sensor ](/pt-br/Grove-Rotary_Angle_Sensor#With_TI_LaunchPad)

*   [5. Light Sensor](/pt-br/Grove-Light_Sensor#With_TI_LaunchPad)

*   [6. Sound Sensor ](/pt-br/Grove-Sound_Sensor#With_TI_LaunchPad)

*   [7. PIR Motion Sensor ](/pt-br/Grove-PIR_Motion_Sensor#With_TI_LaunchPad)

*   [8. Moisture Sensor](/pt-br/Grove-Moisture_Sensor#With_TI_LaunchPad)

*   [9. Ultrasonic Ranger Sensor](/pt-br/Grove-Ultrasonic_Ranger#With_TI_LaunchPad)

*   [10. Temperature Humidity Sensor ](/pt-br/Grove-TemperatureAndHumidity_Sensor) -->

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove_Base_BoosterPack_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Arquivos de hardware Eagle](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove_Base_BoosterPack_v1.0.zip)

- [Grove Starter Kit For LaunchPad User's Manual](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove%20Starter%20Kit%20Manual.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
