---
description: GGrove Base BoosterPack
title: Grove Base BoosterPack
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Base_BoosterPack
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/110020004%205.jpg)

Los BoosterPacks son módulos plug-in que pueden apilarse encima de los diversos kits LaunchPad para añadir funcionalidad adicional, como sensores, pantallas, módulos inalámbricos y más. El Grove Base BoosterPack es una adición bienvenida al ecosistema LaunchPad/BoosterPack, permitiendo que cualquier LaunchPad se conecte con la creciente oferta de módulos Grove de Seeed Studio. El Grove Base BoosterPack ofrece una manera conveniente y fácil para que los prototipadores rápidos usen más de cien módulos Grove con conectores estandarizados, incluyendo sensores, actuadores, pantallas, luces, motores y más.

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/Grove_Web_idea.jpg)

**¿Qué es Grove？**

Grove es un conjunto de herramientas modular y listo para usar que adopta un enfoque de bloques de construcción para ensamblar electrónicos. El sistema Grove consiste en un shield base y una gran selección de módulos que cuentan con conectores estandarizados. El shield base permite la conexión fácil de cualquier microcontrolador para interfaz con los diversos módulos Grove. Cada módulo Grove aborda una función única y la colección general de módulos expande un amplio rango de funcionalidad - desde un simple botón pulsador hasta un sensor complejo de ritmo cardíaco. Cada uno viene con documentación clara y código de demostración para ayudarte a comenzar rápidamente.

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/IMG_GROVE.JPG)

**¿Qué es LaunchPad？**

El LaunchPad es un conjunto de Kits de Evaluación de Texas Instruments. Para introducir nueva funcionalidad a los kits de evaluación LaunchPad, presentamos el BoosterPack que actúa como una placa plug-in que se ajusta encima de las placas base LaunchPad. Ofrece una manera conveniente y fácil para que uses más de cien módulos Grove con conectores estandarizados, incluyendo sensores, actuadores, pantallas, luces, motores y así sucesivamente.

## Características

---
- Seeedstudio presenta el recién lanzado Grove Base BoosterPack permitiendo que el Launchpad de Texas Instruments se conecte estrechamente con nuestra Familia Groves, habilitando además prototipado rápido y combinaciones con un rango de Sensores, actuadores, pantallas, luces, motores y etc.

- El Grove Base BoosterPack tiene trece interfaces estándar Groves de 4 pines, incluyendo cinco analógicas, cinco digitales y tres puertos serie, actuando como un módulo de expansión plug-n-play en Launchpad basado en MSP430 launchpad. También proporciona varios tutoriales sobre cómo conectar con TI MSP430, hay 11 tipos diferentes de proyectos para prototipo de referencia, lo cual ofrece una manera conveniente de guiar tu creatividad.

- Hay un LED ROJO en el Grove BoosterPack. Indicará la alimentación eléctrica.

![](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/img/BoosterpackpinMapping.jpg)

## Usando el Grove Base BoosterPack

---

### Usando un LaunchPad de 40 pines

i.e. MSP-EXP430F5529LP, EK-TM4C123GXL, etc

El BoosterPack fue diseñado de una manera para aprovechar los pines en los "20 pines internos" [21-40]. Los pines están conectados como se muestra abajo en la tabla:

Usando la tabla de abajo, los desarrolladores deberían ser capaces de leer un valor analógico de un módulo Grove (i.e. potenciómetro/perilla giratoria) que está conectado al conector Grove 'J6' usando la llamada API analogRead(24) con Energia.

<table>
<tr>
<th>Tipo de Conector</th>
<th>Etiqueta del conector Grove</th>
<th>GND</th>
<th>VCC</th>
<th>SIG1 (conexión al pin del BoosterPack)</th>
<th>SIG0 (conexión al pin del BoosterPack)</th>
</tr>
<tr>
<td>Analógico</td>
<td>J5</td>
<td>GND</td>
<td>3.3V</td>
<td>23 (pin capaz de analógico)</td>
<td>22 (pin capaz de analógico)</td>
</tr>
<tr>
<td>Analógico</td>
<td>J6</td>
<td>GND</td>
<td>3.3V</td>
<td>25 (pin capaz de analógico)</td>
<td>24 (pin capaz de analógico)</td>
</tr>
<tr>
<td>Analógico</td>
<td>J7</td>
<td>GND</td>
<td>3.3V</td>
<td>26 (pin capaz de analógico)</td>
<td>25 (pin capaz de analógico)</td>
</tr>
<tr>
<td>Analógico</td>
<td>J8</td>
<td>GND</td>
<td>3.3V</td>
<td>27 (pin capaz de analógico)</td>
<td>26 (pin capaz de analógico)</td>
</tr>
<tr>
<td>Analógico</td>
<td>J9</td>
<td>GND</td>
<td>3.3V</td>
<td>28 (pin capaz de analógico)</td>
<td>27 (pin capaz de analógico)</td>
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
<td>4 (UART al MCU)</td>
<td>3 (UART desde MCU)</td>
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
<td>39 (pin Digital/PWM)</td>
<td>40 (pin Digital/PWM)</td>
</tr>
<tr>
<td>Digital</td>
<td>J14</td>
<td>GND</td>
<td>3.3V</td>
<td>38 (pin Digital/PWM)</td>
<td>39 (pin Digital/PWM)</td>
</tr>
<tr>
<td>Digital</td>
<td>J15</td>
<td>GND</td>
<td>3.3V</td>
<td>37 (pin Digital/PWM)</td>
<td>38 (pin Digital/PWM)</td>
</tr>
<tr>
<td>Digital</td>
<td>J16</td>
<td>GND</td>
<td>3.3V</td>
<td>36 (pin Digital/PWM)</td>
<td>37 (pin Digital/PWM)</td>
</tr>
<tr>
<td>Digital</td>
<td>J17</td>
<td>GND</td>
<td>3.3V</td>
<td>35 (pin Digital/PWM)</td>
<td>36 (pin Digital/PWM)</td>
</tr>
</table>

### Usando un LaunchPad de 20 pines

Si estás usando un LaunchPad de 20 pines, puedes usar puentes o cables puente para hacer las conexiones apropiadas entre un conector Grove &amp; el conector BoosterPack.

Usando el diagrama de pines específico de tu LaunchPad, puedes conectar físicamente/eléctricamente el módulo Grove al pin apropiado. Los diagramas de pines para cada LaunchPad están disponibles aquí:
[https://energia.nu/pin-maps/](https://energia.nu/pin-maps/)

Con la ayuda de estos diagramas de pines, sabes qué pin tiene la función que necesitas. Si quieres usar el conector Grove J5 para un módulo Grove analógico (es decir, perilla de potenciómetro), puedes usar los mapas de pines de Energia para identificar un pin con capacidad analógica del conector BoosterPack. Usando un puente o cable, puedes conectar el pin número 22 con el pin con capacidad analógica que esté disponible. Por ejemplo, si estás usando un LaunchPad MSP-EXP430G2, puedes usar un puente o un cable para conectar el pin 22 con el pin 2.

## Productos Compatibles

---

### Lista Grove

<!-- *   [1. Buzzer](/es/Grove-Buzzer#With_TI_LaunchPad)

*   [2. Relay](/es/Grove-Relay#With_TI_LaunchPad)

*   [3. 4-Digital Display ](/es/Grove-4-Digit_Display#With_TI_LaunchPad)

*   [4. Rotary Angle Sensor ](/es/Grove-Rotary_Angle_Sensor#With_TI_LaunchPad)

*   [5. Light Sensor](/es/Grove-Light_Sensor#With_TI_LaunchPad)

*   [6. Sound Sensor ](/es/Grove-Sound_Sensor#With_TI_LaunchPad)

*   [7. PIR Motion Sensor ](/es/Grove-PIR_Motion_Sensor#With_TI_LaunchPad)

*   [8. Moisture Sensor](/es/Grove-Moisture_Sensor#With_TI_LaunchPad)

*   [9. Ultrasonic Ranger Sensor](/es/Grove-Ultrasonic_Ranger#With_TI_LaunchPad)

*   [10. Temperature Humidity Sensor ](/es/Grove-TemperatureAndHumidity_Sensor) -->

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove_Base_BoosterPack_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Archivos eagle de hardware](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove_Base_BoosterPack_v1.0.zip)

- [Manual del Usuario del Kit de Inicio Grove Para LaunchPad](https://files.seeedstudio.com/wiki/Grove_Base_BoosterPack/res/Grove%20Starter%20Kit%20Manual.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
