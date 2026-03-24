---
description: Primeros pasos con Seeed Studio XIAO nRF52840 Serie
title: Primeros pasos con Seeed Studio XIAO nRF52840 Serie
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /XIAO_BLE
sku: 102010448, 102010469, 102010632, 102010631, 102010672, 102010694, 101991463, 101991465
last_update:
  date: 2024-11-28T03:15:24.000Z
  author: Clara
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/XIAO_BLE/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeros pasos con Seeed Studio XIAO nRF52840 Serie

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<div className="w-full overflow-x-auto">
  <table className="min-w-full">
    <tr>
      <th>XIAO nRF52840</th>
      <th>XIAO nRF52840 Sense</th>
      <th>XIAO nRF52840 Plus</th>
      <th>XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

Como el primer producto inalámbrico de la familia Seeed Studio XIAO, **Seeed Studio XIAO nRF52840** está equipado con un potente **Nordic nRF52840 MCU** que integra conectividad **Bluetooth 5.0**. Al mismo tiempo, tiene un **factor de forma pequeño y exquisito** que puede utilizarse para dispositivos wearables y proyectos de Internet de las Cosas. El **diseño montable en superficie por un solo lado** y la **antena Bluetooth** integrada pueden facilitar en gran medida el despliegue rápido de proyectos de IoT.

Además, hay una versión avanzada de esta placa, **Seeed  Studio XIAO nRF52840 Sense**. Está integrada con dos sensores adicionales a bordo. Uno de ellos es un **micrófono digital de Modulación por Densidad de Pulsos (PDM)**. Puede recibir datos de audio en tiempo real, lo que permite utilizarlo para reconocimiento de audio. El otro es una **Unidad de Medición Inercial (IMU) de 6 ejes**, esta IMU puede ser muy útil en proyectos de TinyML como el reconocimiento de gestos. Estos sensores integrados proporcionan una gran comodidad a los usuarios mientras que la placa es ultra pequeña.

Las recién actualizadas **XIAO nRF52840 Plus y XIAO nRF52840 Sense Plus** proporcionan aumentos considerables en funcionalidad y usabilidad. El número de pines multifunción se ha incrementado a **20**, se han añadido recursos **I2S** y **SPI** para soportar proyectos más complejos, se han expuesto los **pines NFC** para una integración más sencilla en aplicaciones de IoT y tarjetas inteligentes, y el **pin BAT** se ha recolocado para una mejor comodidad de soldadura, dando como resultado una experiencia de hardware más fácil de usar.

En comparación con Seeed Studio XIAO RP2040, Seeed Studio XIAO nRF52840 contiene **interfaces más ricas**. Lo primero a destacar es que la **interfaz de Comunicación de Campo Cercano (NFC)** es funcional en la placa. En segundo lugar, hay un pequeño **botón de reinicio** en el lateral de la interfaz Type-C. En el otro lado, hay un **LED 3 en 1 (User LED)** junto con un **Charge LED** para indicar el estado de carga cuando se conecta una batería. Hay **11 E/S digitales** que pueden utilizarse como **pines PWM** y **6 E/S analógicas** que pueden utilizarse como **pines ADC**. Es compatible con las tres interfaces serie más comunes como **UART, I2C y SPI**. Al igual que Seeed Studio XIAO RP2040, tiene una **flash integrada de 2 MB** lo que significa que también se puede programar usando **Arduino, MicroPython, CircuitPython u otros lenguajes de programación**.

Seeed Studio XIAO nRF52840 Sense es compatible con la placa de expansión Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Potentes capacidades inalámbricas: Bluetooth 5.0 con antena integrada
- CPU potente: Nordic nRF52840, procesador ARM® Cortex®-M4 de 32 bits con FPU, 64 MHz
- Ultra bajo consumo: el consumo de energía en espera es inferior a 5μA
- Chip de carga de batería: admite la gestión de carga y descarga de baterías de litio
- Flash integrada de 2 MB
- Micrófono PDM integrado (solo en Seeed Studio XIAO nRF52840 Sense)
- IMU LSM6DS3TR-C de 6 ejes integrada (solo en Seeed Studio XIAO nRF52840 Sense)
- Tamaño ultra pequeño: 21 x 17.8mm, factor de forma clásico de la serie Seeed Studio XIAO para dispositivos wearables
- Interfaces ricas: 1xUART, 1xI2C, 1xSPI, 1xNFC, 1xSWD, 11xGPIO(PWM), 6xADC en XIAO nRF52840 (Sense); y 2xUART, 1xI2C, 2xSPI, 1xI2S, 1xNFC, 1xSWD, 18xGPIO(PWM), 6xADC en XIAO nRF52840 (Sense) Plus
- Componentes en un solo lado, diseño de montaje en superficie

## Comparación de especificaciones

<div class="table-center">
 <table align="center">
  <tr>
      <th>Elemento</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Plus</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
      <th>Procesador</th>
      <td colspan="4" align="center">Nordic nRF52840, procesador ARM® Cortex®-M4 de 32 bits con FPU, 64 MHz</td>
  </tr>
  <tr>
      <th>Conectividad inalámbrica</th>
      <td colspan="4" align="center">Bluetooth Low Energy 5.4/
Bluetooth Mesh/NFC</td>
  </tr>
  <tr>
      <th>Memoria</th>
      <td colspan="4" align="center">256 KB RAM,1MB Flash 2MB onboard Flash</td>
  </tr>
  <tr>
      <th>Sensores integrados</th>
      <td align="center">N/A</td>
      <td align="center">IMU de 6 DOF (LSM6DS3TR-C), micrófono PDM</td>
      <td align="center">N/A</td>
      <td align="center">IMU de 6 DOF (LSM6DS3TR-C), micrófono PDM</td>
  </tr>
  <tr>
      <th>Interfaces</th>
      <td colspan="2" align="center">1xI2C, 1xUART, 1xSPI</td>
      <td colspan="2" align="center">1xI2C, 2xUART, 2xSPI, 1xI2S</td>
  </tr>
  <tr>
      <th>Pines PWM/Analógicos </th>
      <td colspan="2" align="center">11/6</td>
      <td colspan="2" align="center">20/6</td>
  </tr>
  <tr>
      <th>Botones integrados</th>
      <td colspan="4" align="center">Botón de reinicio</td>
  </tr>
  <tr>
      <th>LEDs integrados</th>
      <td colspan="4" align="center">LED 3 en 1/ Charge LED</td>
  </tr>
  <tr>
      <th>Chip de carga de batería</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>Lenguajes de programación</th>
      <td colspan="4" align="center">Arduino/ MicroPython/ CircuitPython</td>
  </tr>
  </table>
</div>

## Descripción general del hardware

<Tabs>
<TabItem  value="52540(Sense)" label="XIAO nRF52840/XIAO nRF52840 Sense" default>

<table align="center">
  <tr>
    <th>Diagrama de indicación frontal de XIAO nRF52840/XIAO nRF52840 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicación trasera de XIAO nRF52840/XIAO nRF52840 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Lista de pines de XIAO nRF52840/XIAO nRF52840 Sense</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
</table>

 **Mapa de pines**
| Pin XIAO                | Función          | Pin del chip                      | Descripción                          |Arduino Name |     
| :---------------------: | :-------------: | :-------:                      | :-------------------------------------- | :-------:   |
| 5V                      | VBUS             |                               | Entrada/Salida de alimentación                       |           |
| GND                     |                  |                               |                                          |           |
| 3V3                     | 3V3_OUT          |                              | Salida de alimentación                             |            |
| D0                      | Analog          | P0.02                        | GPIO, AIN0                                |       0      |
| D1                      | Analog          | P0.03                        | GPIO, AIN1                               |       1       |
| D2                      | Analog          | P0.28                        | GPIO, AIN4                                |        2     |
| D3                      | Analog          | P0.29                        | GPIO, AIN5                               |       3     |
| D4                      | Analog,SDA       | P0.04                         | GPIO, datos I2C, AIN2                      |     4      |
| D5                      | Analog,SCL       | P0.05                         | GPIO, reloj I2C, AIN3                     |     5       |
| D6                      | TX               | P1.11                         | GPIO, transmisión UART                      |     7/6        |
| D7                      | RX               | P1.12                         | GPIO, recepción UART                       |     8/7       |
| D8                      | SPI_SCK          | P1.13                         | GPIO, reloj SPI                          |      9/8    |
| D9                      | SPI_MISO         | P1.14                         | GPIO, datos SPI                           |     10/9     |
| D10                     | SPI_MOSI         | P1.15                         | GPIO, datos SPI                           |       11/10   |
| NFC1                    |                  | P0.09                         | NFC                                      |          |
| NFC2                    |                  | P0.10                         | NFC                                      |          |
| Reset                   |                  | P0.18                         | RESET                                    |          |
| ADC_BAT                 |                  | P0.14                         | Leer el valor de voltaje de BAT               |          |
| 6 DOF IMU_PWR           |                  | P1.08                         | interruptor de alimentación del módulo 6D            |          |
| 6 DOF IMU__INT1         |                  | P0.11                         | pin de señal de interrupción del módulo 6D    |          |
| PDM Microphone_DATA     |                  | P0.16                         | pin de entrada de datos de audio PDM                 |          |
| PDM Microphone_CLK      |                  | P1.00                         | pin de salida de reloj de audio PDM               |          |
| RF Switch Port Select   |                  | P2.05                         | conmutar antena integrada                   |          |
| RF Switch Power         |                  | P2.03                         | Alimentación                                    |          |
| CHARGE_LED              |                  | P0.17                         | CHG-LED_Red                              |          |
| USER_LED_R              |                  | P0.26                         | pin de LED RGB rojo controlado por el usuario          |     11     |
| USER_LED_B              |                  | P0.06                         | pin de LED RGB azul controlado por el usuario         |     13/12     |
| USER_LED_G              |                  | P0.30                         | pin de LED RGB verde controlado por el usuario        |      12/13    |

 </TabItem>
 <TabItem value="52840Plus" label="XIAO nRF52840 Plus/XIAO nRF52840 Sense Plus" default>

 <table align="center">
  <tr>
    <th>Diagrama de indicación frontal de XIAO nRF52840 Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_front.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Diagrama de indicación trasera de XIAO nRF52840 Plus</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_back.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>Lista de pines de XIAO nRF52840 Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_pinout.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>

 </table>

| Pin de XIAO             | Función             | Pin del chip | Funciones alternativas | Descripción                              |Nombre en Arduino |   
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- |:-------:   |
| 5V                      | VBUS                 |           |                    | Entrada/Salida de alimentación           |       |
| GND                     |                      |           |                    |                                          |       |
| 3V3                     | 3V3_OUT              |           |                    | Salida de alimentación                   |       |
| D0                      | Analog              | P0.02     |                    | GPIO, ADC                                |    0      |
| D1                      | Analog              | P0.03     |                    | GPIO, ADC                                |    1      |
| D2                      | Analog              | P0.28     |                    | GPIO, ADC                                |    2      |
| D3                      | Analog              | P0.29     |                    | GPIO, ADC                                |    3      |
| D4                      | Analog,SDA           | P0.04     |                    | GPIO, datos I2C, ADC                     |    4      |
| D5                      | Analog,SCL           | P0.05     |                    | GPIO, reloj I2C, ADC                     |    5      |
| D6                      | TX                   | P1.11     |                    | GPIO, transmisión UART                   | 7/6        |
| D7                      | RX                   | P1.12     |                    | GPIO, recepción UART                     | 8/7       |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO, reloj SPI                          |  9/8    |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO, datos SPI                          | 10/9     |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO, datos SPI                          | 11/10   |
| D11                     | I2S_SD               | P0.15     |                    | GPIO, I2S, ADC                           |      |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO,I2S, ADC                            |      |
| D13                     | I2S_WS               | P1.01     |                    | GPIO, I2S  ADC                           |      |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO, recepción UART, ADC                |      |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO, transmisión UART, ADC              |      |
| D16                     | BAT                  | P0.31     |                    | GPIO                                     |      |
| D17                     | SCK1                 | P1.03     |                    | GPIO, SPI                                |      |
| D18                     | MISO1                | P1.05     |                    | GPIO, SPI                                |      |
| D19                     | MOSI1                | P1.07     |                    | GPIO, SPI                                |      |
| ADC_BAT                 |                      | P0.14     |                    | Leer el valor de voltaje de BAT          |      |
| 6 DOF IMU_PWR           |                      | P1.08     |                    | Interruptor de alimentación del módulo 6D |      |
| 6 DOF IMU__INT1         |                      | P0.11     |                    | Pin de señal de interrupción del módulo 6D |      |
| PDM Microphone_DATA     |                      | P0.16     |                    | Pin de entrada de datos de audio PDM     |      |
| PDM Microphone_CLK      |                      | P1.00     |                    | Pin de salida de reloj de audio PDM      |      |
| Reset                   |                      | P0.18     |                    | RESET                                    |      |
| RF Switch Port Select   |                      | P2.05     |                    | Cambiar antena integrada                 |      |
| RF Switch Power         |                      | P2.03     |                    | Alimentación                             |      |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |      |
| USER_LED_R              |                      | P0.26     |                    | Pin de LED RGB rojo controlado por el usuario | 11     |
| USER_LED_B              |                      | P0.06     |                    | Pin de LED RGB azul controlado por el usuario | 13/12     |
| USER_LED_G              |                      | P0.30     |                    | Pin de LED RGB verde controlado por el usuario |  12/13    |

</TabItem>

</Tabs>





## Dos bibliotecas de Arduino

Seeed Studio XIAO nRF52840 integra muchas funciones en una sola placa diminuta y, a veces, puede que no las ejecute de la mejor manera. Por lo tanto, Seeed ha publicado dos bibliotecas de Arduino para **maximizar la potencia de cada función**. Por lo tanto:

- Se recomienda usar la biblioteca `Seeed nRF52 Boards` si quieres aplicar la **función Bluetooth** y la "**Low Energy Cost Function**".
- Se recomienda usar la biblioteca `Seeed nRF52 mbed-enabled Boards` si quieres usarla en **aplicaciones de Machine Learning embebido** o aplicar la "**IMU & PDM advanced function**".
- Ambas bibliotecas ofrecen muy buen soporte cuando se trata del uso básico, como **LED, Digital, Analog, Serial, I2C, SPI**.

La definición de pines admitida por estas dos bibliotecas puede ser un poco diferente y Seeed seguirá actualizando la wiki hasta que quede claro.

:::tip

1. Si utilizas el paquete integrado de Seeed nRF52 Boards, es posible que la función Serial no se compile. La solución es añadir la línea `#include <Adafruit_TinyUSB.h>` en tu código. Puedes descargar este paquete desde: https://github.com/adafruit/Adafruit_TinyUSB_Arduino

2. Si prefieres un enfoque más sencillo, puedes elegir Seeed nRF52 mbed-enabled Boards desde el principio. Admite la compilación de la función Serial sin necesidad de modificaciones adicionales.

:::

## Primeros pasos

Primero, vamos a conectar la Seeed Studio XIAO nRF52840 (Sense) al ordenador y cargar un código sencillo desde Arduino IDE para comprobar si la placa funciona correctamente.

### Configuración de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) o [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Ordenador
- 1 x Cable USB tipo C

:::tip
Algunos cables USB solo pueden suministrar alimentación y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
Conecta la Seeed Studio XIAO nRF52840 (Sense) a tu ordenador mediante un cable USB tipo C.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### Configuración de software

- **Paso 1.** Descarga e instala la última versión de Arduino IDE según tu sistema operativo

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **Paso 2.** Inicia la aplicación Arduino

- **Paso 3.** Añade el paquete de placa Seeed Studio XIAO nRF52840 (Sense) a tu Arduino IDE

Ve a **File > Preferences** y rellena **"Additional Boards Manager URLs"** con la siguiente URL:
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width="700" height="auto" /></p>

Ve a **Tools > Board > Boards Manager...**, escribe la palabra clave "**seeed nrf52**" en el cuadro de búsqueda, selecciona la última versión de la placa que desees e instálala. Puedes instalar ambas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **Paso 4.** Selecciona tu placa y puerto

**Placa**

Después de instalar el paquete de placa, ve a **Tools > Board** y elige la placa que desees, continúa seleccionando "**Seeed XIAO nRF52840 Sense**". Ahora hemos terminado de configurar la Seeed Studio XIAO nRF52840 (Sense) para Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**Puerto**

Ve a **Tools > Port** y selecciona el nombre del puerto serie de la Seeed Studio XIAO nRF52840 (Sense) conectada. Probablemente será COM3 o superior (**COM1** y **COM2** suelen estar reservados para puertos serie de hardware). El puerto serie de la Seeed Studio XIAO nRF52840 (Sense) conectada suele contener entre paréntesis **Seeed Studio XIAO nRF52840** para **Seeed Studio XIAO nRF52840** o **Seeed Studio XIAO nRF52840 Sense** para **Seeed Studio XIAO nRF52840 Sense**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **Paso 5.** Ve a **File > Examples > 01.Basics > Blink** para abrir el ejemplo **Blink**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **Paso 6.** Haz clic en el botón **Upload** para cargar el código de ejemplo Blink en la placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

Una vez cargado, verás el LED rojo integrado parpadeando con un retardo de 1 segundo entre cada parpadeo. Esto significa que la conexión es correcta y ahora puedes explorar más proyectos con la Seeed Studio XIAO nRF52840 (Sense).

## Jugar con el LED integrado 3 en 1

Seeed Studio XIAO nRF52840 (Sense) tiene un **LED integrado 3 en 1** que es programable por el usuario. Ahora aprenderás cómo controlar los colores RGB uno por uno usando Arduino.

Primero tienes que entender que el comportamiento de este LED no es el habitual cuando se controla mediante código. El **LED se ENCIENDE** cuando damos una **señal LOW** y se **APAGA** cuando damos una **señal HIGH**. Esto se debe a que este LED se controla mediante un ánodo común y solo se iluminará con una señal de nivel bajo.

Un código de ejemplo sería:

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

Aquí, aunque se use **HIGH**, el LED estará **APAGADO**. Necesitas reemplazar **HIGH** por **LOW** para **ENCENDER** el LED.

Consulta las siguientes asignaciones de pines de los LED y úsalas en tus códigos:

- LED rojo = LED_BUILTIN o LED_RED
- LED azul = LED_BLUE
- LED verde = LED_GREEN

## Verificación del consumo de energía

La Seeed Studio XIAO nRF52840 tiene un bajo consumo de energía y aquí proporcionamos un método para verificarlo. Se recomienda encarecidamente usar la biblioteca `Seeed nRF52 Boards` aquí.

- **Paso 1.** Usa el descargador **JLink** para grabar el [firmware del bootloader](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) para Seeed Studio XIAO nRF52840 (Sense).

:::note
Si estás usando el firmware de fábrica de la Seeed Studio XIAO nRF52840 o nunca has hecho cambios en el firmware de la Seeed Studio XIAO nRF52840, puedes omitir este paso.
:::

- **Paso 2.** Usa la biblioteca `Seeed nRF52 Boards` aquí.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3.** Carga la demo deep_sleep aquí y ejecútala con **Arduino**

```cpp
// The MIT License (MIT)
// Copyright (c) 2019 Ha Thach for Adafruit Industries

#include "SdFat.h"
#include "Adafruit_SPIFlash.h"

// Uncomment to run example with custom SPI and SS e.g with FRAM breakout
// #define CUSTOM_CS   A5
// #define CUSTOM_SPI  SPI

#if defined(CUSTOM_CS) && defined(CUSTOM_SPI)
  Adafruit_FlashTransport_SPI flashTransport(CUSTOM_CS, CUSTOM_SPI);

#elif defined(ARDUINO_ARCH_ESP32)
  // ESP32 use same flash device that store code.
  // Therefore there is no need to specify the SPI and SS
  Adafruit_FlashTransport_ESP32 flashTransport;

#else
  // On-board external flash (QSPI or SPI) macros should already
  // defined in your board variant if supported
  // - EXTERNAL_FLASH_USE_QSPI
  // - EXTERNAL_FLASH_USE_CS/EXTERNAL_FLASH_USE_SPI
  #if defined(EXTERNAL_FLASH_USE_QSPI)
    Adafruit_FlashTransport_QSPI flashTransport;

  #elif defined(EXTERNAL_FLASH_USE_SPI)
    Adafruit_FlashTransport_SPI flashTransport(EXTERNAL_FLASH_USE_CS, EXTERNAL_FLASH_USE_SPI);

  #else
    #error No QSPI/SPI flash are defined on your board variant.h !
  #endif
#endif

Adafruit_SPIFlash flash(&flashTransport);


/*  If you want to use a specific flash device, for example for a custom built board, first look for it in Adafruit_SPIFlash\src\flash_devices.h
 *  If it isn't in there you need to create your own definition like the W25Q80DLX_EXAMPLE example below.
 *  These definitions need to be edited to match information on the data sheet of the flash device that you want to use.
 *  If you are not sure what the manufacture ID, memory type and capacity values should be, try running the sketch anyway and look at the serial output
 *  The flash device will report these values to you as a single hexadecimal value (the JDEC ID)
 *  For example, the first device on the list - the W25Q80DLX - will report its JDEC ID as 0xef4014, which is made of these three values:
 *  manufacturer_id = 0xef
 *  memory_type     = 0x40
 *  capacity        = 0x14
 *  With this macro properly defined you can then create an array of device definitions as shown below, this can include any from the list of devices in flash_devices.h, and any you define yourself here
 *  You need to update the variable on line 71 to reflect the number of items in the array
 *  You also need to uncomment line 84 and comment out line 81 so this array will be passed to the flash memory driver. 
 */
//Example of a user defined flash memory device:
//#define W25Q80DLX_EXAMPLE                                                               \
//  {                                                                            \
//    .total_size = (1 << 20), /* 1 MiB */                                       \
//        .start_up_time_us = 5000, .manufacturer_id = 0xef,                     \
//    .memory_type = 0x40, .capacity = 0x14, .max_clock_speed_mhz = 80,         \
//    .quad_enable_bit_mask = 0x02, .has_sector_protection = false,              \
//    .supports_fast_read = true, .supports_qspi = true,                         \
//    .supports_qspi_writes = false, .write_status_register_split = false,       \
//    .single_status_byte = false, .is_fram = false,                             \
//  }

/*
 * Create an array of data structures and fill it with the settings we defined above.
 * We are using two devices, but more can be added if you want.
 */
//static const SPIFlash_Device_t my_flash_devices[] = {
//    W25Q80DLX_EXAMPLE,
//};
/*
 * Specify the number of different devices that are listed in the array we just created. If you add more devices to the array, update this value to match.
 */
//const int flashDevices = 1;


#include <bluefruit.h>

bool deepPowerDown(Adafruit_SPIFlash& flash, Adafruit_FlashTransport& transport) {
  uint32_t id_before = flash.getJEDECID();

  transport.begin();
  transport.runCommand(0xB9);  // SPI deep power-down command
  delay(10);

  uint32_t id_after = flash.getJEDECID();

  return (id_after == 0xFFFFFF || id_after == 0xFFFFFFFF);
}

void setup() {
  flash.begin();
  Bluefruit.begin();

  if (!deepPowerDown(flash, flashTransport)) {
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW);
    while (1) {
      yield();
    }
  }

  flash.end();

  sd_power_system_off();
}

void loop() {
  // nothing to do
}
```

:::tip
Aquí nos gustaría expresar nuestro especial agradecimiento al autor por proporcionar el código → ***daCoder*** ←
:::

**Si quieres conocer información más detallada sobre este ejemplo, haz clic [Here](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801)**

## Corriente de carga de la batería

La corriente de carga de la batería se puede seleccionar como 50 mA o 100 mA, donde puedes configurar **Pin13** en alto o bajo para cambiarla a 50 mA o 100 mA. La corriente de carga baja está en el modo de entrada configurado como HIGH LEVEL y la corriente de carga alta está en el modo de salida configurado como LOW LEVEL.

**Corriente de carga baja**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**Corriente de carga alta**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## Acceder a los pines SWD para depuración y regrabación del bootloader

**Hardware necesario**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**Software necesario**

Es necesario descargar el software [Segger](https://www.segger.com/downloads/jlink/) desde el sitio web.

- **Paso 1.** Usa Jlink para conectar los pines siguientes:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **Paso 2.** Inicia J-Flash y busca nRF52840, creando un nuevo proyecto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **Paso 3.** Haz clic en "Target" y luego selecciona "Connect".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **Paso 4.** Arrastra el archivo bin o [archivo hex](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) al software. Luego presiona F4 y F5 en ese orden. La regrabación habrá finalizado.

## Preguntas frecuentes (FAQ)

### P1: Mi Arduino IDE se queda bloqueado al cargar código en la placa

Primero puedes intentar **resetear** la placa haciendo clic una vez en el "Reset Button". Si eso no funciona, haz clic rápidamente dos veces para entrar en **bootloader mode**. Si eso tampoco funciona, desconecta la placa del PC y vuelve a conectarla.

### P2: Mi placa no aparece como dispositivo serie en Arduino IDE

Primero puedes intentar **resetear** la placa haciendo clic una vez en el "Reset Button". Si eso no funciona, haz clic rápidamente dos veces para entrar en **bootloader mode**.

### P3: ¿Cuáles son las consideraciones al usar XIAO nRF52840 (Sense) para la carga de la batería?

Cuando P0.14 (D14) desactiva la función ADC a un nivel alto de 3.3V, P0.31 estará en el límite de voltaje de entrada de 3.6V. Existe el riesgo de quemar el pin P0.31.

Actualmente, para este problema, recomendamos que los usuarios no desactiven la función ADC de P0.14 (D14) ni configuren P0.14 (D14) a nivel alto durante la carga de la batería.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### P4: ¿Cómo se comporta la luz verde cuando se enciende?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="Esquema RGB nRF52840" width="120" height="auto" /></p>

El pin `P0.17` se utiliza para controlar el comportamiento de la luz indicadora verde, indicando el estado de carga:

- Nivel bajo: cuando la **carga** está en curso.
- Nivel alto: cuando la batería **no se está cargando** o está **completamente cargada**.

Cuando está en nivel bajo, el LED `RED_CHG` se encenderá.

Para más detalles, consulta la hoja de datos del PMIC: [BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf) y la [hoja de datos de XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf).

## Recursos

### Seeed Studio XIAO nRF52840

**Diseño de hardware**
- **📄[Hoja de datos]** [Hoja de datos Nordic nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[Hoja de datos]** [Hoja de datos Flash P25Q16H-UXH-IR](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **📄[Esquemático]** [Esquemático XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_PDF.pdf )
- **🗃️[Archivos de diseño de PCB]** 
  - [Proyecto KiCad XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840V1.1-KiCad-Project-260105.zip )
- **🗃️[Bibliotecas de diseño de PCB]** 
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [Hoja de pines XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [Dimensiones XIAO nRF52840 en DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip )
- **📄[Dimensiones 2D]** [Datos de la almohadilla inferior de XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Bottom-pad-positioning.zip )

### Seeed Studio XIAO nRF52840 Sense

**Diseño de hardware**
- **📄[Hoja de datos]** [Hoja de datos Nordic nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[Hoja de datos]** [Hoja de datos Flash-P25Q16H-UXH-IR](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **📄[Hoja de datos]** [Hoja de datos del IC cargador BQ25101](https://files.seeedstudio.com/wiki/XIAO-BLE/BQ25101.pdf )
- **📄[Hoja de datos]** [Hoja de datos IMU-LSM6DS3TR](https://files.seeedstudio.com/wiki/XIAO-BLE/ST_LSM6DS3TR_Datasheet.pdf )
- **📄[Hoja de datos]** [Hoja de datos Mic-MSM261D3526H1CPM](https://files.seeedstudio.com/wiki/XIAO-BLE/mic-MSM261D3526H1CPM-ENG.pdf )
- **📄[Esquemático]** [Esquemático XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_PDF.pdf )
- **🗃️[Archivos de diseño de PCB]** 
  - [Proyecto KiCad XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840V1.1-KiCad-Project-260105.zip )
- **🗃️[Bibliotecas de diseño de PCB]** 
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [Hoja de pines XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [Dimensiones XIAO nRF52840 Sense en DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip )
- **📄[Dimensiones 2D]** [Datos de la almohadilla inferior de XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Bottom-pad-positioning.zip )
- **📄[Modelo 3D]** [Modelo 3D XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip )

**Otros**
- **📄[Documento]** [Informe de prueba de distancia de comunicación BLE de XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_BLE_nRF52840_BLE_Communication_Distance_Test_Report.pdf )

### Seeed Studio XIAO nRF52840 (Sense) Plus

**Diseño de hardware**
- **📄[Hoja de datos]** [Hoja de datos Nordic nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[Hoja de datos]** [Hoja de datos Flash-P25Q16H-UXH-IR](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **🗃️[Esquemático]** [Esquemático XIAO nRF52840 (Sense) Plus](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.1.zip )
- **🗃️[Archivos de diseño de PCB]** 
  - [Proyecto KiCad XIAO nRF52840 (Sense) Plus](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus.zip )
  - [Proyecto KiCad XIAO Plus Base (con salida de almohadilla inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [Proyecto KiCad XIAO Plus Base (sin salida de almohadilla inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[Bibliotecas de diseño de PCB]** 
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

**Diseño mecánico**
- **🗃️[Dimensiones 2D]** [Dimensiones XIAO nRF52840 Sense en DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip )

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

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
