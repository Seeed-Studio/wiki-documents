---
description: Primeros pasos con Seeed Studio XIAO SAMD21
title: Primeros pasos con Seeed Studio XIAO SAMD21
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/get_sarted.webp
slug: /Seeeduino-XIAO
sku: 110010004, 102010388, 102010328
last_update:
  date: 6/30/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-07-11'
url: https://wiki.seeedstudio.com/es/Seeeduino-XIAO/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeros pasos con Seeed Studio XIAO SAMD21

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/get_1.jpg" alt="pir" width={400} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Descripción general

El Seeed Studio XIAO SAMD21, que solía llamarse Seeeduino XIAO, es la primera aparición de la [familia Seeed Studio XIAO, una serie de potentes placas de desarrollo del tamaño de un pulgar compatibles con Arduino](https://www.seeedstudio.com/xiao-series-page). Incorpora el potente ATSAMD21G18A-MU, que es un microcontrolador de bajo consumo. Por otro lado, esta pequeña placa tiene un buen rendimiento de procesamiento pero necesita menos energía. Está diseñada en un tamaño diminuto y puede utilizarse para dispositivos wearables y proyectos pequeños.

Seeed Studio XIAO SAMD21 tiene 14 pines, que pueden utilizarse para 11 interfaces digitales, 11 interfaces analógicas, 10 interfaces PWM (d1-d10), 1 pin de salida DAC D0, 1 interfaz de pad SWD, 1 interfaz I2C, 1 interfaz SPI, 1 interfaz UART, indicador de comunicación serie (T/R), luz de parpadeo (L) mediante multiplexación de pines. Los colores de los LED (Power, L, RX, TX) son verde, amarillo, azul y azul. Además, Seeed Studio XIAO SAMD21 tiene una interfaz Type-C que puede suministrar energía y descargar código. Hay dos botones de reinicio, puedes cortocircuitarlos para reiniciar la placa.

Impulsado por el procesador ARM Cortex-M0+ de 32 bits SAMD21G18A de Microchip, XIAO SAMD21 Plus aporta una mayor flexibilidad y capacidad de expansión al diminuto y versátil XIAO SAMD21. Mientras mantiene todas las potentes funciones, incluida la compatibilidad con Arduino, MicroPython y PlatformIO, la variante Plus incorpora castelaciones rediseñadas y una distribución de pads en la parte posterior, ofreciendo 16 GPIO adicionales, gestión integrada de baterías de iones de litio, botones dedicados de Reset y Boot, y un LED RGB WS2812 programable a bordo. Es ideal para proyectos avanzados de IoT, wearables alimentados por batería, aplicaciones embebidas y diseños de SoM listos para producción.

## Documentación

Hay dos documentos sobre el uso de **Seeed Studio XIAO SAMD21** que se centran en diferentes áreas; consulta la siguiente tabla como referencia:

|[**Documentación de Seeed**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/)|[**Documentación de Nanase**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de pines|Interfaz|
|Primeros pasos con Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con tarjeta MicroSD (SPI)|
|Uso de GPIO de Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con GPS (UART)|
|Recursos de Seeed Studio XIAO SAMD21|IOBUS de ciclo único|

<!-- ### CircuitPython on Seeed Studio XIAO SAMD21

- Get started with [**CircuitPython on Seeed Studio XIAO SAMD21 **](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-CircuitPython). -->

## Características

- Potente MCU: procesador Microchip ATSAMD21G18A Arm® Cortex®-M0+ a 48 MHz, con 256 KB de Flash, 32 KB de SRAM y compatibilidad nativa con USB.
- E/S ampliadas: XIAO SAMD21 Plus mantiene la disposición estándar de 14 pines de XIAO y añade 16 GPIO mediante castelaciones SMD traseras de 1,27 mm, con compatibilidad con PWM, DAC, I2C, UART, SPI, I2S y SWD.
- Gestión de energía integrada: admite conexión directa de batería de iones de litio, carga a bordo, protección contra retroceso y señalización del estado de carga.
- Desarrollo flexible: compatible con Arduino IDE, PlatformIO, CircuitPython y TinyGo.
- Compacto y listo para el ecosistema: mantiene el factor de forma XIAO de 21 × 17,8 mm, apto para protoboard, mientras adopta la distribución estandarizada de pads traseros XIAO Plus para placas de expansión y diseños de portadoras personalizadas.

## Especificaciones

<!-- | Product Name | Seeed Studio XIAO SAMD21 |
|-------------|-------------------------|
| **Chipset** | [Microchip SAMD21G18](https://www.microchip.com/en-us/product/atsamd21g18 ) |
| **Processor** | ARM Cortex-M0+ processor running at up to 48 MHz |
| **RAM** | 32KB SRAM |
| **Flash** | 256KB Flash |
| **Interface** | GPIO Pin x14<br/>Digital Pin x11<br/>Analog Pin x11<br/>DAC x1<br/>I2C x1<br/>UART x1<br/>SPI x1 |
| **Onboard** | User LED x1<br/>Power LED x1<br/>Status LEDs for Serial Communication (TX/RX Indicators) x2 |
| **Wireless Connectivity** | / |
| **Power** | Input voltage (Type-C): 5V<br/>Input voltage (BAT): 5V |
| **Max Output** | 5V@500mA<br/>3.3V@200mA |
| **Software Compatibility** | Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr<br/>[Exhibition for XIAO Series - Seeed Studio Wiki](https://wiki.seeedstudio.com/es/xiao_topic_page/ ) |
| **Working Temperature** | -40 to 85°C |
| **Dimensions** | 21×17.8mm |
| **Variants** | [Seeed Studio XIAO SAMD21 (Pre-Soldered) - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html  )<br/>[Seeed Studio XIAO SAMD21 - Arduino Microcontroller - SAMD21 Cortex M0+ (3 PCs） - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-3Pcs-p-4546.html  ) | -->

<table>
  <tbody>
    <tr>
      <th>Product Name</th>
      <td>Seeed Studio XIAO SAMD21</td>
      <td>Seeed Studio XIAO SAMD21 Plus</td>
    </tr>
    <tr>
      <th>Chipset</th>
      <td colspan="2">
        <a href="https://www.microchip.com/en-us/product/atsamd21g18">
          Microchip SAMD21G18
        </a>
      </td>
    </tr>
    <tr>
      <th>Processor</th>
      <td colspan="2">Procesador Arm® Cortex®-M0+ funcionando hasta 48 MHz</td>
    </tr>
    <tr>
      <th>RAM</th>
      <td colspan="2">32 KB SRAM</td>
    </tr>
    <tr>
      <th>Flash</th>
      <td colspan="2">256 KB Flash</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>
        GPIO Pin ×14<br />
        Digital Pin ×11<br />
        Analog Pin ×11<br />
        DAC ×1<br />
        I2C ×1<br />
        UART ×1<br />
        SPI ×1
      </td>
      <td>
        GPIO Pin ×30<br />
        Digital Pin ×27<br />
        Analog Pin ×11<br />
        DAC ×1<br />
        I2C ×2<br />
        UART ×1<br />
        SPI ×1<br />
        I2S ×1
      </td>
    </tr>
    <tr>
      <th>Onboard</th>
      <td>
        User LED ×1<br />
        Power LED ×1<br />
        TX/RX Status LED ×2
      </td>
      <td>
        User LED ×1<br />
        Reset Button ×1<br />
        Boot Button ×1
      </td>
    </tr>
    <tr>
      <th>Battery Management</th>
      <td>Ninguna</td>
      <td>PMIC a bordo</td>
    </tr>
    <tr>
      <th>Power</th>
      <td>
        Tensión de entrada (Type-C): 5 V<br />
        Entrada BAT: No compatible
      </td>
      <td>
        Tensión de entrada (Type-C): 5 V<br />
        Entrada BAT: batería de iones de litio/LiPo de una sola celda de 3,7 V
      </td>
    </tr>
    <tr>
      <th>BAT-to-3V3 Backflow Protection</th>
      <td>No</td>
      <td>Sí</td>
    </tr>
    <tr>
      <th>Working Temperature</th>
      <td colspan="2">-40°C a 85°C</td>
    </tr>
    <tr>
      <th>Dimensions</th>
      <td colspan="2">21 × 17,8 mm</td>
    </tr>
    <tr>
      <th>Software Compatibility</th>
      <td colspan="2">
        Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr y más
      </td>
    </tr>
  </tbody>
</table>

## **Descripción general del hardware**

<Tabs>
<TabItem value="XIAO SAMD21" label="XIAO SAMD21" default>

### Parte frontal de XIAO SAMD21

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera de XIAO SAMD21

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO SAMD21 Plus" label="XIAO SAMD21 Plus">

### Parte frontal de XIAO SAMD21 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera de XIAO SAMD21 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
Para pines de E/S generales:
La tensión de funcionamiento del MCU es de 3,3 V. Una tensión de entrada conectada a los pines de E/S generales puede causar daños al chip si es superior a 3,3 V.

Para pines de alimentación:
El circuito convertidor DC-DC integrado capaz de convertir 5 V en 3,3 V permite alimentar el dispositivo con una fuente de 5 V a través de los pines VIN-PIN y 5V-PIN.

Es fundamental entender que las almohadillas VIN y GND en la parte posterior del XIAO SAMD21 no están diseñadas para conectar directamente una batería, especialmente una batería recargable de litio (LiPo/Li-Ion). La placa carece del circuito esencial de gestión de batería necesario para un funcionamiento seguro. Estas almohadillas son simplemente un punto de entrada de alimentación alternativo que evita el diodo de protección integrado de la placa. Si deseas alimentar tu proyecto con una batería, debes utilizar un módulo externo de gestión de batería dedicado que proporcione carga y protección, y luego conectar la salida regulada de ese módulo al pin de 5 V del XIAO.

Presta atención al uso, no levantes la cubierta de protección.
:::

## Mapa de pines

<!-- | XIAO Pin        | Function      | Chip Pin  |   Description      |
| :-------:      | :-----:        | :----------:         |       :---:     |
|5V              |VBUS             |                                      | Power Input/Output     |
| GND           |                 |                                      |                          |
| 3V3           |   3V3_OUT              |                                |    Power Output           |
|D0             |  Analog         |   PA02                                |     GPIO, ADC            |
| D1            |   Analog        |   PA04                                |        GPIO, ADC         |
| D2            |     Analog      | PA10                                  |    GPIO, ADC             |
| D3            |    Analog       |  PA11                                 |     GPIO, ADC            |
| D4            |  Analog,SDA   	| PA08		                              | GPIO, I2C Data, ADC        |
| D5            |  Analog,SCL     |	PA09	                                |	GPIO, I2C Clock, ADC       |
| D6            | Analog,TX       |  	PB08	                               |	GPIO, UART Transmit, ADC |  
| D7            |Analog,RX	      |  PB09	                                |   	GPIO, UART Receive, ADC |
|D8             | Analog,SPI_SCK  | 	PA07	                              |	GPIO, SPI Clock, ADC   |
|D9             | Analog,SPI_MISO |  	PA05                                |		GPIO, SPI Data, ADC  |
|D10            | Analog,SPI_MOSI |  PA06	                                | 	GPIO, SPI Data         |
|Reset          |                 |  RES	                                |	RESET                  |
|TX_LED         |                 |   PA19	                              |	TX_LED                 |
|RX_LED         |                 | PA18	                                |	RX_LED                 |
|Power_LED     |          |        VBUS	                                |       	CHG-LED_Red      |
|USER_LED       |                 |   PA17	                              |	User Light_Yellow      | -->

| Pin XIAO    | Función            | XIAO SAMD21   | XIAO SAMD21 Plus | Descripción                                                |
| :---------- | :----------------- | :------------ | :---------------- | :--------------------------------------------------------- |
| 5V          | VBUS               | VBUS          | VBUS              | Entrada/salida de alimentación USB de 5 V                  |
| GND         | GND                | GND           | GND               | Tierra                                                     |
| 3V3         | 3V3_OUT            | 3V3_OUT       | 3V3_OUT           | Salida de alimentación de 3,3 V                            |
| D0          | A0 / DAC           | PA02          | PA02              | GPIO, ADC AIN0, salida DAC; sin PWM por hardware           |
| D1          | A1                 | PA04          | PA04              | GPIO, ADC AIN4                                             |
| D2          | A2                 | PA10          | PA10              | GPIO, ADC AIN18                                            |
| D3          | A3                 | PA11          | PA11              | GPIO, ADC AIN19                                            |
| D4          | SDA0               | PA08          | PA08              | GPIO, ADC AIN16, datos I2C                                 |
| D5          | SCL0               | PA09          | PA09              | GPIO, ADC AIN17, reloj I2C                                 |
| D6          | TX                 | PB08          | PB08              | GPIO, ADC AIN2, transmisión UART                           |
| D7          | RX                 | PB09          | PB09              | GPIO, ADC AIN3, recepción UART                             |
| D8          | SCK                | PA07          | PA07              | GPIO, ADC AIN7, reloj SPI                                  |
| D9          | MISO               | PA05          | PA05              | GPIO, ADC AIN5, entrada de datos SPI                       |
| D10         | MOSI               | PA06          | PA06              | GPIO, ADC AIN6, salida de datos SPI                        |
| D11         | TX_LED             | PA19          | -                 | LED TX interno en XIAO SAMD21; no definido en Plus         |
| D12         | GPIO               | PA18 (RX_LED) | PA28              | GPIO de expansión Plus                                     |
| D13         | SCL1               | PA17 (USER_LED) | PA17            | GPIO de expansión Plus y reloj I2C1                        |
| D14         | SDA1               | -             | PA16              | GPIO de expansión Plus y datos I2C1                        |
| D15         | GPIO               | -             | PA15              | GPIO de expansión Plus                                     |
| D16         | GPIO               | -             | PA14              | GPIO de expansión Plus                                     |
| D17         | GPIO               | -             | PA13              | GPIO de expansión Plus                                     |
| D18         | GPIO               | -             | PA12              | GPIO de expansión Plus                                     |
| D19         | I2S_SD             | -             | PA19              | GPIO de expansión Plus y datos I2S                         |
| D20         | I2S_SCK            | -             | PA20              | GPIO de expansión Plus y reloj I2S                         |
| D21         | I2S_WS             | -             | PA21              | GPIO de expansión Plus y selección de palabra I2S          |
| D22         | GPIO               | -             | PB10              | GPIO de expansión Plus                                     |
| D23         | GPIO               | -             | PB11              | GPIO de expansión Plus                                     |
| D24         | GPIO               | -             | PB23              | GPIO de expansión Plus                                     |
| D25         | GPIO               | -             | PA23              | GPIO de expansión Plus                                     |
| D26         | GPIO               | -             | PB2               | GPIO de expansión Plus                                     |
| D27         | GPIO               | -             | PA18              | GPIO de expansión Plus                                     |
| VBAT_EN     | Battery Enable     | -             | PB2               | Control de alimentación de la batería en Plus              |
| AIN11_VBAT  | Voltage Read       | -             | PB3               | Lectura del voltaje de la batería en Plus                  |
| Reset       | RESETN             | RESETN        | RESETN            | Entrada de reinicio activo en bajo, pin 40 del encapsulado |
| TX_LED      | LED                | PA19          | -                 | Indicador TX de la placa original, activo en bajo          |
| RX_LED      | LED                | PA18          | -                 | Indicador RX de la placa original, activo en bajo          |
| USER_LED    | LED                | PA17          | -                 | LED de usuario de la placa original, activo en bajo        |
| POWER_LED   | Power indicator    | 3V3           | -                 | LED verde de alimentación de la placa original; no es un GPIO del MCU |
| RGB_LED     | WS2812B data       | -             | PA27              | Datos del LED RGB direccionable Plus                       |
| USER_BUTTON | Button             | -             | PB22              | Botón de usuario Plus, activo en bajo                      |
| VBAT_EN     | Battery ADC enable | -             | PB02              | Habilita la medición del voltaje de la batería             |
| AIN11_VBAT  | Battery ADC        | -             | PB03 / AIN11      | Voltaje de la batería a través de un divisor 1/2           |
| CHARGE_LED  | Charging indicator | -             | -                 | LED de carga controlado por hardware en Plus; no es un GPIO del MCU |
| SWDIO       | SWD debug          | PA31          | PA31              | Datos de Serial Wire Debug                                 |
| SWCLK       | SWD debug          | PA30          | PA30              | Reloj de Serial Wire Debug                                 |

## Entrar en modo Bootloader

### Para XIAO SAMD21

A veces el puerto de Seeed Studio XIAO SAMD21 puede desaparecer cuando falla el proceso de programación del usuario. Podemos resolver este problema mediante la siguiente operación:

- Conecta el Seeed Studio XIAO SAMD21 a tu ordenador.
- Usa pinzas o cables cortos para puentear los pines RST del diagrama dos veces.
- Los LED naranjas parpadean y se encienden.

En este punto, el chip entra en modo Bootloader y el puerto de grabación vuelve a aparecer. Debido a que el chip samd21 tiene dos particiones, una es el Bootloader y la otra es el programa de usuario. El producto graba un código de bootloader en la memoria del sistema cuando sale de fábrica. Podemos cambiar de modo realizando los pasos anteriores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### Para XIAO SAMD21 Plus

Conecta el XIAO SAMD21 Plus a tu ordenador. Pulsa el botón de Reset dos veces consecutivas para entrar en modo Bootloader.

### Reset

Si quieres reiniciar el Seeed Studio XIAO SAMD21, realiza los siguientes pasos:

- Conecta el Seeed Studio XIAO SAMD21 a tu ordenador.
- Usa pinzas o cables cortos para puentear los pines RST **solo una vez**
- Los LED naranjas parpadean y se encienden.

Ten en cuenta: El comportamiento del LED integrado es el inverso al de un Arduino. En el Seeed Studio XIAO SAMD21, el pin tiene que ponerse en bajo, mientras que en otros microcontroladores tiene que ponerse en alto.  

### Interrupción

Todos los pines en Seeed Studio XIAO SAMD21 soportan interrupciones, pero hay dos pines que no se pueden usar al mismo tiempo: pin 5 y pin 7. Para más detalles sobre las interrupciones, consulta [aquí](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).

## Primeros pasos

### Hardware

**Materiales requeridos**

- Seeed Studio XIAO SAMD21 x1
- Ordenador x1
- Cable USB Type-C x1

:::tip

Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes comprobar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- Paso 1. Prepara un Seeed Studio XIAO SAMD21 y un cable Type-C.

- Paso 2. Conecta el Seeed Studio XIAO SAMD21 a tu ordenador. Entonces el LED de alimentación amarillo debería encenderse.

### Software

:::note

Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino)
:::

- **Paso 1. Necesitas instalar un software de Arduino.**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Inicia la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note

Si el software de Arduino se carga en un idioma diferente, puedes cambiarlo en el cuadro de diálogo de preferencias. Consulta la página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

- **Paso 2. Abre el ejemplo Blink**  

Abre el sketch de ejemplo de parpadeo del LED: **File > Examples >01.Basics > Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3. Añade Seeeduino a tu Arduino IDE**

Haz clic en **File > Preference**, y rellena Additional Boards Manager URLs con la siguiente URL:

```url
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

Haz clic en **Tools-> Board-> Boards Manager...**, escribe la palabra clave "**Seeed Studio XIAO SAMD21**" en el cuadro de búsqueda. Aparecerá **Seeed SAMD Boards**. Instálalo.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

#### XIAO SAMD21 Parpadeo

- **Paso 4. Selecciona tu placa y puerto**

Después de instalar la placa, haz clic en **Tools-> Board**, busca **Seeed Studio XIAO** y selecciónala. Ahora ya has configurado la placa Seeed Studio XIAO SAMD21 para Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Selecciona el dispositivo serie de la placa Arduino en el menú Tools | Serial Port. Probablemente será COM3 o superior (**COM1** y **COM2** suelen estar reservados para los puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 5. Sube el programa**  

Ahora, simplemente haz clic en el botón **Upload** en el entorno. Espera unos segundos y, si la carga se realiza correctamente, aparecerá el mensaje "Done uploading." en la barra de estado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 Unos segundos después de que termine la carga, deberías ver que el LED del pin 13 (L) de la placa empieza a parpadear (en naranja). Si es así, ¡enhorabuena! Has puesto Arduino en funcionamiento. Si tienes problemas, consulta las sugerencias de resolución de problemas.

:::note
El tamaño máximo de la memoria flash es de 8 KB. Para obtener más información, consulta la hoja de datos ATSAMD21G18A-MU en la sección de recursos.
:::

#### XIAO SAMD21 Plus Parpadeo

En la XIAO SAMD21 Plus, el pin L (LED) se ha eliminado. Ha sido reemplazado por el RGB_LED, que se controla mediante el pin PA27.

‑ Cambia la placa de destino a XIAO M0 Plus.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_1.png" alt="pir" width={800} height="auto" /></p>

- Instala la biblioteca Adafruit_NeoPixel y actualízala a la última versión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_2.png" alt="pir" width={800} height="auto" /></p>

‑ Sustituye el código por el fragmento que aparece a continuación. El pin para RGB_LED es PA27, que se ha redefinido como PIN_LED_RGB.

:::caution

Los LED RGB pueden causar fatiga ocular o lesiones si se utilizan con un brillo excesivo; se recomienda una protección ocular adecuada.

:::

```cpp
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();

  pinMode(NEOPIXEL_POWER, OUTPUT);
  digitalWrite(NEOPIXEL_POWER, HIGH);

// Set overall brightness (0~255)
// Recommended eye-friendly range: 10~50
  pixels.setBrightness(50);
}


void loop() {

  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.show();
  delay(500);
}
```

‑ Haz clic en Upload para grabar el programa. Una vez completado, se encenderá el LED RGB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_3.gif" alt="pir" width={600} height="auto" /></p>

:::note
El tamaño máximo de la memoria flash es de 8 KB. Para obtener más información, consulta la hoja de datos ATSAMD21G18A-MU en la sección de recursos.
:::

## Multiplexación de pines

No necesitamos configurar los pines nosotros mismos; después de usar los pines, puedes llamar directamente a una función.

### Entrada y salida digital

- Usa el pin 6 como pin digital:

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

### AnalogRead

- Usa el pin 6 como pin analógico:

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

### Serial

- Usa el pin 6 como pin TX de UART (el pin RX de UART es el pin 7):

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

### I2C

- Usa el pin 5 como pin SCL de IIC (el pin SDA de IIC es el pin 4):

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

### SPI

- Usa el pin 8 como pin SCK de SPI (el pin MISO de SPI es el pin 9, el pin MOSI de SPI es el pin 10):

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

### QTouch

Para saber cómo usar QTouch, proporcionamos un proyecto de ejemplo: [How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

### Entrada y salida analógica

Aunque todavía tiene "salidas analógicas" basadas en PWM, el SAMD21 también incorpora una salida analógica real en forma de un convertidor digital‑analógico (DAC). Este módulo puede producir una tensión analógica entre 0 y 3,3 V. Puede utilizarse para producir audio con un sonido más natural, o como una especie de "potenciómetro digital" para controlar dispositivos analógicos.

El DAC solo está disponible en el pin A0 de Arduino y se controla usando analogWrite(A0, `<value>`). El DAC se puede configurar hasta una resolución de 10 bits (asegúrate de llamar a [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) en tu configuración), lo que significa que los valores entre 0 y 1023 ajustarán la tensión a un valor entre 0 y 3,3 V.

Además del DAC, los canales ADC del SAMD21 también se diferencian del ATmega328: están equipados con una resolución de hasta 12 bits. Esto significa que los valores de entrada analógica pueden ir de 0 a 4095, representando una tensión entre 0 y 3,3 V. Para usar los ADC en modo de 12 bits, asegúrate de llamar a [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) en tu configuración.

**Trazado en serie del DAC**

Aquí tienes un ejemplo que demuestra tanto el DAC como el ADC. Para montar el experimento, conecta A0 a A1: aplicaremos a A0 una tensión analógica y luego la leeremos con A1. Es el circuito más sencillo que hemos puesto nunca en un tutorial:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
El Seeed Studio XIAO SAMD21 utiliza la [**Seeed Studio XIAO SAMD21 expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

Este sketch produce una señal de salida senoidal en A0, con valores que van de 0 a 3,3 V. Luego utiliza A1 para leer esa salida en su ADC y convertirla en una tensión entre 0 y 3,3 V.

Por supuesto, puedes abrir el monitor serie para ver el flujo de valores de tensión. Pero si la onda sinusoidal es difícil de visualizar mediante texto, prueba el nuevo Serial Plotter de Arduino, yendo a Tools > Serial Plotter.  

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

Gracias a [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) por enviar el código, todas las funcionalidades relacionadas fueron desarrolladas y aportadas por él.

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
// Frequency of sine wave is about 1.37 Hz

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  Serial.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

**Resultado**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## Uso de la batería

:::note

Solo el XIAO SAMD21 Plus incorpora un conector de batería BAT en su parte posterior, por favor téngalo en cuenta.

:::

El XIAO SAMD21 Plus es capaz de utilizar una batería de litio de 3,7 V como entrada de alimentación. Puede consultar el siguiente diagrama para el método de cableado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

Tenga cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar. Si la batería tiene carga, nunca la suelde en la placa, ya que esto puede quemar la placa de circuito. Un cortocircuito mientras el circuito está alimentado representa un riesgo significativo; se recomienda utilizar un adaptador.

:::

### Ejemplo de lectura del voltaje de la batería

Según el esquema, el **SGM40567-4.2XG/TR** proporciona carga para baterías de litio de una sola celda con una corriente de carga de aproximadamente **200 mA**. El **Charge_LED** parpadea durante la carga.<br/>

La medición del voltaje de la batería está controlada por el interruptor de carga **TPS22916CNYFPR** a través de **PB2/VBAT_EN**, reduciendo el consumo de energía en espera. El voltaje de la batería se divide por dos y se mide a través del pin ADC **PB3/AIN11_VBAT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read.png" style={{width:800, height:'auto'}}/></div>
<br/>

El voltaje de la batería se mide utilizando un circuito divisor de resistencias. El voltaje leído por el ADC es la mitad del voltaje real de la batería, por lo que el software debe multiplicar la medición del ADC por 2 para obtener el voltaje real de la batería.

En el núcleo de Arduino, PB02 y PB03 están asignados a los números de pin 31 y 32, respectivamente. Defínalos de la siguiente manera:

```cpp
// VBAT_EN on PB02
#define PIN_VBAT_EN  (31u)

// AIN11_VBAT on PB03
#define PIN_VBAT_ADC (32u)
```

<details>

<summary>Ejemplo de lectura de batería</summary>

```c
constexpr float ADC_VREF = 3.3f;
constexpr float ADC_MAX = 4095.0f;
constexpr float DIVIDER_RATIO = 2.0f;  // R5 = R6 = 10 kΩ

float readBatteryVoltage() {
  digitalWrite(PIN_VBAT_EN, HIGH);
  delay(10);

  analogRead(PIN_VBAT_ADC);  // Discard a stale reading

  uint32_t sum = 0;
  constexpr int samples = 16;

  for (int i = 0; i < samples; i++) {
    sum += analogRead(PIN_VBAT_ADC);
    delay(2);
  }

  digitalWrite(PIN_VBAT_EN, LOW);

  float adcRaw = sum / static_cast<float>(samples);
  float adcVoltage = adcRaw * ADC_VREF / ADC_MAX;

  return adcVoltage * DIVIDER_RATIO;
}

void setup() {
  Serial.begin(115200);

  pinMode(PIN_VBAT_EN, OUTPUT);
  digitalWrite(PIN_VBAT_EN, LOW);

  analogReadResolution(12);  // SAMD21 ADC: 0–4095
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery: ");
  Serial.print(batteryVoltage, 3);
  Serial.println(" V");

  delay(1000);
}
```

</details>
<br/>
:::note

Para aplicaciones de bajo consumo, desactive **BAT_EN** después de completar la medición del voltaje de la batería para reducir el consumo de energía en reposo causado por las resistencias del divisor de voltaje.

:::

- El **Charge_LED** parpadea mientras la batería se está cargando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_detection.gif" style={{width:400, height:'auto'}}/></div>
<br/>

- Resultado de la medición del voltaje de la batería: el voltaje medido de una batería de iones de litio puede diferir del valor nominal impreso en la batería. Consulte siempre el valor medido real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## La aplicación de ejemplo

- [Cómo usar Seeed Studio XIAO SAMD21 para iniciar sesión en tu Raspberry PI](https://wiki.seeedstudio.com/es/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [Interfaz de comunicación SPI](https://wiki.seeedstudio.com/es/XIAO-SPI-Communication-Interface)

- [Cómo revivir un XIAO muerto usando Raspberry Pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). Gracias a John_Doe por compartirlo.

## Recursos

### XIAO SAMD21

**Diseño de hardware**
- **📄[Hoja de datos]** [Atmel SAMD21G18 Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Esquemático]** [XIAO SAMD21 Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)
- **🗃️[Archivos de diseño de PCB]** 
  - [Proyecto KiCad de XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO_SAMD21_v2.1_SCH&PCB_20260304.zip)  
  - [Proyecto Eagle de XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[Librerías de diseño de PCB]** 
  - [Huellas de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Hoja de distribución de pines]** [XIAO SAMD21 Pinout Sheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [Dimensiones de XIAO en DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[Modelo 3D]** [Modelo 3D de XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

**Software y herramientas**
- **📄[Firmware de fábrica]** [Firmware de fábrica de XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip )

### XIAO SAMD21 Plus

**Diseño de hardware**
- **📄[Hoja de datos]** [Atmel SAMD21G18 Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Esquemático]** [XIAO SAMD21 Plus Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21Plus_260422.pdf)
- **🗃️[Archivos de diseño de PCB]** 
  - [Proyecto KiCad de XIAO SAMD21 Plus](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21-Plus_V1.0_SCH&PCB_20260422.zip)  
  - [Proyecto Eagle de XIAO SAMD21 Plus](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[Librerías de diseño de PCB]** 
  - [Huellas de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Hoja de distribución de pines]** [XIAO SAMD21 Plus Pinout Sheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-PLUS-pinout_sheet.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [Dimensiones de XIAO en DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[Modelo 3D]** [Modelo 3D de XIAO SAMD21 Plus](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerle diferentes tipos de soporte y garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
