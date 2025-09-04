---
title: Grove - Sensor de Distancia de Tiempo de Vuelo VL53L0X
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/
slug: /es/Grove-Time_of_Flight_Distance_Sensor-VL53L0X
last_update:
  date: 03/01/2023
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/main.JPG)

Grove - Sensor de Distancia de Tiempo de Vuelo-VL53L0X es un sensor de distancia de alta velocidad, alta precisión y largo alcance basado en VL53L0X.

El VL53L0X es un módulo de medición láser de Tiempo de Vuelo (ToF) de nueva generación alojado en el paquete más pequeño del mercado actual, proporcionando medición precisa de distancia sin importar las reflectancias del objetivo, a diferencia de las tecnologías convencionales. Puede medir distancias absolutas hasta 2m, estableciendo un nuevo punto de referencia en los niveles de rendimiento de medición de distancia, abriendo la puerta a varias aplicaciones nuevas.

El VL53L0X integra una matriz SPAD de vanguardia (Diodos de Avalancha de Fotón Único) e incorpora la tecnología patentada FlightSenseTM de segunda generación de ST.

El emisor VCSEL de 940 nm del VL53L0X (Láser de Emisión Superficial de Cavidad Vertical), es totalmente invisible al ojo humano, junto con filtros infrarrojos físicos internos, permite distancias de medición más largas, mayor inmunidad a la luz ambiental, y mejor robustez a la diafonía óptica del vidrio de cubierta.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- **Módulo miniatura completamente integrado**
  
  - VCSEL láser de 940 nm
  - Controlador VCSEL
  - Sensor de medición de distancia con microcontrolador embebido avanzado

- **Medición de distancia rápida y precisa**
  - Mide distancia absoluta hasta 2 m
  - La distancia reportada es independiente de la reflectancia del objetivo
  - Compensación avanzada embebida de diafonía óptica para simplificar la selección del vidrio de cubierta

- **Seguro para los ojos**
  - Dispositivo láser Clase 1 compatible con el último estándar IEC 60825-1:2014 - 3ª edición

- **Fácil integración**
  - Componente único refluible
  - Sin ópticas adicionales
  - Fuente de alimentación única
  - Interfaz I2C para control del dispositivo y transferencia de datos
  - Xshutdown (reset) e interrupción GPIO
  - Dirección I2C programable

## Especificaciones

Característica|Detalle
---|---
Voltaje de operación|3.3V/5V
Temperatura de operación|-20℃ - 70℃
Distancia de medición recomendada|30mm-1000mm
Resolución|1mm
Emisor infrarrojo|940 nm
Velocidad del bus|Hasta 400 kHz (modo FAST) bus serie
Dirección IIC|0x29

## Aplicaciones

- Detección de usuario para computadoras personales/laptops/tablets e IoT (ahorro de energía)
- Robótica (detección de obstáculos)
- Electrodomésticos (detección de manos en grifos automáticos, dispensadores de jabón, etc.)
- Reconocimiento de gestos 1D.
- Enfoque automático asistido por láser. Mejora y acelera el rendimiento del sistema de enfoque automático de la cámara, especialmente en escenas difíciles (niveles de luz baja, bajo contraste) o modo de video en movimiento rápido.

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - Sensor de Distancia de Tiempo de Vuelo |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar 
:::

- **Paso 1.** Conecta Grove - Time of Flight Distance Sensor al puerto **IIC** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/connect.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Temperature and Humidity Sensor Pro al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Time of Flight Distance Sensor |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| SDA            | Blanco                   |
| SCL            | Amarillo                  |

#### Software

- **Paso 1.** Descarga la [Librería VL53L0X](https://github.com/Seeed-Studio/Grove-Ranging-sensor-VL53L0X) desde Github.

- **Paso 2.** Extrae el archivo `Grove-Ranging-sensor-VL53L0X-master.zip` en la `carpeta de librerías de Arduino`.

:::note
  Por ejemplo, descargo esta librería en `D:\Software\WorkWork\arduino-1.8.5\libraries`, así que solo necesito extraer el archivo zip aquí. En resumen, por favor asegúrate de que la carpeta `Grove-Ranging-sensor-VL53L0X-master` esté en tu carpeta de librerías de Arduino, como se muestra en la imagen a continuación.
:::

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/folder.png)

- **Paso 3.** Abre la carpeta `Grove-Ranging-sensor-VL53L0X-master\examples` que acabas de extraer, verás cinco subcarpetas:

![](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/img/examples.png)

Elige un ejemplo diferente según tus propias necesidades. Luego haz doble clic en el archivo `xxx.ino` para abrir el IDE de Arduino.

:::note
  Usamos `high_accuracy_ranging.ino` en esta demostración.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás el resultado.

El resultado debería ser como:

```
time of mesurement: 205
Measured distance:115 mm
time of mesurement: 205
Measured distance:117 mm
time of mesurement: 205
Measured distance:120 mm
time of mesurement: 205
Measured distance:125 mm
time of mesurement: 204
Measured distance:130 mm
time of mesurement: 205
Measured distance:138 mm
time of mesurement: 205
Measured distance:143 mm
time of mesurement: 205
Measured distance:144 mm
time of mesurement: 205
Measured distance:152 mm

```

## Visor Esquemático en Línea

<div>
  className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip" style={'{'}{'{'}borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'{'}'}{'}'}&gt;
</div>

## Recursos

- **[ZIP]** [Grove-Time of Flight Distance Sensor VL53L0X Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip)
- **[PDF]** [Manual de Usuario VL53L0X](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/software-flow.pdf)
- **[PDF]** [Hoja de Datos VL53L0X](https://files.seeedstudio.com/wiki/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/res/vl53l0x-datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
