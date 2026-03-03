---
description: Primeros pasos con la Serie Seeed Studio XIAO ESP32S3.
title: Primeros pasos con la Serie Seeed Studio XIAO ESP32S3
keywords:
- esp32s3
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_getting_started
sku: 113991114, 113991115, 114010001, 102010634, 102010635, 102010671
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con la Serie Seeed Studio XIAO ESP32S3

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32S3</th>
  <th>Seeed Studio XIAO ESP32S3 Sense</th>
  <th>Seeed Studio XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## Introducción

La Serie Seeed Studio XIAO son diminutas placas de desarrollo que comparten una estructura de hardware similar, donde el tamaño es literalmente del tamaño de un pulgar. El nombre en clave "XIAO" aquí representa la mitad de su característica "Tiny" (minúsculo), y la otra mitad será "Puissant" (poderoso).

Seeed Studio XIAO ESP32S3 Sense integra un sensor de cámara, un micrófono digital y compatibilidad con tarjeta SD. Combinando la potencia de cómputo de ML embebido y la capacidad de fotografía, esta placa de desarrollo puede ser tu gran herramienta para comenzar con IA inteligente de voz y visión.

:::tip
La **cámara OV2640** ha sido descontinuada, y la posterior XIAO ESP32S3 Sense utiliza el modelo de cámara **OV3660**. Sin embargo, el código de ejemplo de la cámara en el Wiki sigue siendo aplicable.
:::

### Especificación
<table>
  <tr>
    <th>Producto</th>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">XIAO ESP32-S3</a></td>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">XIAO ESP32-S3 Sense</a></td>
    <td><a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html">XIAO ESP32-S3 Plus</a></td>
  </tr>
  <tr>
    <th>Procesador</th>
    <td colspan="3">ESP32-S3R8<br/>Procesador Xtensa LX7 de doble núcleo, 32 bits, que funciona hasta 240 MHz</td>
  </tr>
  <tr>
    <th>Inalámbrico</th>
    <td colspan="3">Subsistema Wi-Fi completo de 2.4GHz<br/>Bluetooth Low Energy 5.0 / Bluetooth Mesh</td>
  </tr>
  <tr>
    <th>Sensores integrados</th>
    <td>/</td>
    <td>1x sensor de cámara OV3660<br/>1x micrófono digital</td>
    <td>/</td>
  </tr>
  <tr>
    <th>Memoria</th>
    <td>8MB PSRAM en chip &amp; 8MB Flash</td>
    <td>8MB PSRAM en chip &amp; 8MB Flash<br/>Ranura para tarjeta SD a bordo, compatible con 32GB FAT</td>
    <td>8MB PSRAM en chip &amp; 16MB Flash</td>
  </tr>
  <tr>
    <th>Interfaz</th>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x User LED<br/>1x Charge LED<br/>1x botón de Reset<br/>1x botón de Boot</td>
    <td>1x UART<br/>1x IIC<br/>1x IIS<br/>1x SPI<br/>11x GPIOs (PWM)<br/>9x ADC<br/>1x User LED<br/>1x Charge LED<br/>1x conector B2B (con 2 GPIOs adicionales)<br/>1x botón de Reset<br/>1x botón de Boot</td>
    <td>2x UART<br/>1x IIC<br/>1x IIS<br/>2x SPI<br/>18x GPIOs (PWM)<br/>9x ADC<br/>1x User LED<br/>1x Charge LED<br/>1x conector B2B<br/>1x botón de Reset<br/>1x botón de Boot</td>
  </tr>
  <tr>
    <th>Dimensiones</th>
    <td>21 x 17.8mm</td>
    <td>21 x 17.8 x 15mm (con placa de expansión)</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <th>Alimentación (Típ.)</th>
    <td colspan="3">Voltaje de entrada (Type-C): 5V<br/>Voltaje de entrada (BAT): 3.7V</td>
  </tr>
  <tr>
    <th rowspan="4">Consumo de energía</th>
    <td>Voltaje de funcionamiento del circuito:<br/>- Type-C: 5V@19mA<br/>- BAT: 3.8V@22mA</td>
    <td>Voltaje de funcionamiento del circuito:<br/>`- Type-C: 5V@38.3mA`<br/>`- BAT: 3.8V@43.2mA (with expansion board)`</td>
    <td>Voltaje de funcionamiento del circuito:<br/>- Type-C: 5V@28mA<br/>- BAT: 3.8V@35mA</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Aplicación web de Webcam:<br/>- Type-C:<br/>-- Consumo de energía promedio: 5V/~140mA<br/>-- Consumo de energía máximo (captura de imagen): 5V/~347mA<br/>- Batería:<br/>-- Consumo de energía promedio: 3.8V/~155mA<br/>-- Consumo de energía máximo (captura de imagen): 3.8V/~366mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Grabación de micrófono y escritura en tarjeta SD:<br/>- Type-C:<br/>-- Consumo de energía promedio: 5V/54.58mA<br/>-- Consumo de energía máximo: 5V/86.7mA<br/>- Batería:<br/>-- Consumo de energía promedio: 3.8V/64.5mA<br/>-- Consumo de energía máximo: 3.8V/109.3mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>50mA(Rápida) / 3.8mA(Mantenimiento)</td>
    <td>/</td>
    <td>Corriente de carga:<br/>100mA(Rápida) / 0.9mA(Mantenimiento)</td>
  </tr>
  <tr>
    <th>Modelo de bajo consumo de energía (Típ.)<br/>(Alimentación: 3.8V)</th>
    <td>Modo Modem-sleep: 27mA<br/>Modo Light-sleep: 2mA<br/>Modo Deep Sleep: 14μA</td>
    <td>Modo Modem-sleep: 44mA<br/>Modo Light-sleep: 5mA<br/>Modo Deep Sleep: 3mA</td>
    <td>Modo Modem-sleep: 3.8V/31.6 mA<br/>Modo Light-sleep: 3.8V/2.45 mA<br/>Modo Deep Sleep: 3.8V/33.51 μA</td>
  </tr>
  <tr>
    <th>Consumo de energía con Wi-Fi habilitado (Típ.)</th>
    <td>Modo activo: 100 mA</td>
    <td>Modo activo: 110 mA (con placa de expansión)</td>
    <td>Modo activo: 81 mA</td>
  </tr>
  <tr>
    <th>Consumo de energía con BLE habilitado (Típ.)</th>
    <td>Modo activo: 85 mA</td>
    <td>Modo activo: 102 mA (con placa de expansión)</td>
    <td>Modo activo: 101 mA</td>
  </tr>
  <tr>
    <th>Temperatura de trabajo</th>
    <td colspan="3">-20°C ~ 65°C</td>
  </tr>
</table>

### Características

- **Potente placa MCU**: Incorpora el chip procesador ESP32S3 de 32 bits, doble núcleo, Xtensa que funciona hasta 240 MHz, monta múltiples puertos de desarrollo, compatible con Arduino / MicroPython
- **Funcionalidad avanzada** (para Sense): Sensor de cámara **OV2640 desmontable para resolución de 1600x1200** y **sensor de cámara OV3660 para  2048x1536** compatible con el sensor de cámara OV5640, integrando un micrófono digital adicional
- **Diseño de alimentación elaborado**: Capacidad de gestión de carga de batería de litio, ofrece 4 modelos de consumo de energía que permiten un modo de sueño profundo con un consumo de energía tan bajo como 14μA
- **Gran memoria para más posibilidades**: Ofrece 8MB PSRAM y 8MB FLASH (16MB en la versión **Plus**), con ranura para tarjeta SD que admite memoria externa FAT de 32GB (solo para XIAO ESP32S3)
- **Rendimiento RF sobresaliente**: Soporta comunicación inalámbrica dual Wi-Fi de 2.4GHz y BLE, admite comunicación remota de más de 100m cuando se conecta con antena U.FL
- **Diseño compacto del tamaño de un pulgar**: 21 x 17.8mm, adoptando el factor de forma clásico de XIAO, adecuado para proyectos con espacio limitado como dispositivos portátiles

<table align="center">
 <tr>
     <th>Elemento</th>
     <th style={{width:300, height:'auto'}}>Cámara OV3660</th>
        <th style={{width:300, height:'auto'}}>Cámara OV2640</th>
 </tr>
    <tr>
        <th>Consumo máximo de energía en (640*480)</th>
        <td align="center">Modelo activo: <strong>~ 0.6A</strong></td>
        <td align="center">Modelo activo: <strong>~ 0.65A</strong></td>
    </tr>
    <tr>
        <th>Consumo promedio de energía en (640*480)</th>
        <td align="center">Modelo activo: <strong>~ 0.12A</strong></td>
        <td align="center">Modelo activo: <strong>~ 0.24A</strong></td>
    </tr>
    <tr>
        <th>Consumo mínimo de energía en (640*480)</th>
        <td align="center">Modelo activo: <strong>~ 0.12A</strong></td>
        <td align="center">Modelo activo: <strong>~ 0.15A</strong></td>
    </tr>
</table>

## Descripción general del hardware

Antes de empezar con todo, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características de Seeed Studio XIAO ESP32S3.

<Tabs>
<TabItem  value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
 <tr>
     <th>Diagrama de indicación frontal de XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Diagrama de indicación trasera de XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de pines de XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

**Mapa de pines**
| Pin XIAO                 | Función         | Pin del chip                                           | Funciones alternativas | Descripción                          |
| :---------------------: | :-------------: | :----------------------------------------------------: | :--------------------: | :---------------------------------- |
| 5V                      | VBUS             |                                                        |                    | Entrada/Salida de alimentación       |
| GND                     |                  |                                                        |                    |                                      |
| 3V3                     | 3V3_OUT          |                                                        |                    | Salida de alimentación               |
| D0                      | Analógico          | GPIO1                                                  | TOUCH1             | GPIO, ADC                            |
| D1                      | Analógico          | GPIO2                                                  | TOUCH2             | GPIO, ADC                            |
| D2                      | Analógico          | GPIO3                                                  | TOUCH3             | GPIO, ADC                            |
| D3                      | Analógico          | GPIO4                                                  | TOUCH4             | GPIO, ADC                            |
| D4                      | Analógico,SDA       | GPIO5                                                  | TOUCH5             | GPIO, datos I2C, ADC                 |
| D5                      | Analógico,SCL       | GPIO6                                                  | TOUCH6             | GPIO, reloj I2C, ADC                 |
| D6                      | TX               | GPIO43                                                 |                    | GPIO, transmisión UART               |
| D7                      | RX               | GPIO44                                                 |                    | GPIO, recepción UART                 |
| D8                      | Analógico,SCK       | GPIO7                                                  | TOUCH7             | GPIO, reloj SPI, ADC                 |
| D9                      | Analógico,MISO      | GPIO8                                                  | TOUCH8             | GPIO, datos SPI, ADC                 |
| D10                     | Analógico,MOSI      | GPIO9                                                 | TOUCH9             | GPIO, datos SPI, ADC                 |
| D11                     | Analógico          | GPIO42                                                 | TOUCH12            | GPIO, ADC                            |
| D12                     | Analógico          | GPIO41                                                 | TOUCH13            | GPIO, ADC                            |
| MTDO                    |                  | GPIO40                                                 |                    | JTAG                                 |
| MTDI                    |                  | GPIO41                                                 |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39                                                 |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42                                                 |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_PU                                                |                    |                                    |
| Boot                    |                  | GPIO0                                                  |                    | Entrar en modo Boot                  |
| U.FL-R-SMT1             |                  | LNA_IN                                                 |                    | Antena UFL                           |
| CHARGE_LED              |                  |                                                |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21                                                 |                    | Luz de usuario                       |
| Digital microphone_CLK  |                  | GPIO42                                                 |                    | Pin de reloj PDM para MIC            |
| Digital microphone_DATA |                  | GPIO41                                                 |                    | Pin de datos PDM para MIC            |
| Onboard SD Card__CS     |                  | GPIO3                                                  |                    | Pin de selección de chip de tarjeta SD|
| Onboard SD Card_SCK     |                  | GPIO7                                                  |                    | Pin de reloj de tarjeta SD           |
| Onboard SD Card_MISO    |                  | GPIO8                                                  |                    | Pin de entrada de datos de tarjeta SD|
| Onboard SD Card Slot_MOSI |                | GPIO10                                                 |          |      Pin de salida de datos de tarjeta SD              |

**Cámara**
| Pin del chip  | Descripción                          |
| :-------: | :---------------------------------- |
| GPIO10    | Pin de reloj relacionado con la cámara            |
| GPIO11    | Pin de datos de vídeo de la cámara (Y8)          |
| GPIO12    | Pin de datos de vídeo de la cámara (Y7)          |
| GPIO13    | Pin de reloj de píxeles de la cámara              |
| GPIO14    | Pin de datos de vídeo de la cámara (Y6)          |
| GPIO15    | Pin de datos de vídeo de la cámara (Y2)          |
| GPIO16    | Pin de datos de vídeo de la cámara (Y5)          |
| GPIO17    | Pin de datos de vídeo de la cámara (Y3)          |
| GPIO18    | Pin de datos de vídeo de la cámara (Y4)          |
| GPIO40    | Pin de datos I2C para la cámara             |
| GPIO39    | Pin de reloj I2C para la cámara            |
| GPIO38    | Pin de sincronización vertical de la cámara            |
| GPIO47    | Pin de sincronización horizontal de la cámara          |
| GPIO48    | Pin de datos de vídeo de la cámara (Y9)          |
</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus" default>

<table align="center">
 <tr>
  <th>Diagrama de indicación frontal de XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <th>Diagrama de indicación trasera de XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
 <th>Lista de pines de XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
  " style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>


**Mapa de pines**

| Pin XIAO                 | Función         | Pin del chip  | Funciones alternativas | Descripción                          |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | Entrada/Salida de alimentación                   |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | Salida de alimentación                         |
| D0                      | Analógico          | GPIO1     |                    | GPIO, ADC                            |
| D1                      | Analógico          | GPIO2     |                    | GPIO, ADC                            |
| D2                      | Analógico          | GPIO3     |                    | GPIO, ADC                            |
| D3                      | Analógico          | GPIO4     |                    | GPIO, ADC                            |
| D4                      | Analógico,SDA       | GPIO5     |                    | GPIO, datos I2C, ADC                  |
| D5                      | Analógico,SCL       | GPIO6     |                    | GPIO, reloj I2C, ADC                 |
| D6                      | TX               | GPIO43    |                    | GPIO, transmisión UART                  |
| D7                      | RX               | GPIO44    |                    | GPIO, recepción UART                   |
| D8                      | Analógico,SCK       | GPIO7     |                    | GPIO, reloj SPI, ADC                 |
| D9                      | Analógico,MISO      | GPIO8     |                    | GPIO, datos SPI, ADC                  |
| D10                     | Analógico,MOSI      | GPIO9    |                    | GPIO, datos SPI, ADC                  |
| D11                     |                  | GPIO38    |                    | GPIO, ADC                            |
| D12                     |                  | GPIO39    |                    | GPIO, ADC                            |
| D13                     |                  | GPIO40    |                    |                                      |
| D14                     |                  | GPIO41    |                    |                                      |
| D15                     |                  | GPIO42    |                    |                                      |
| D16                     |                  | GPIO10    |                    |                                      |
| D17                     |                  | GPIO13    |                    |                                      |
| D18                     |                  | GPIO12    |                    |                                      |
| D19                     |                  | GPIO11    |                    |                                      |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_PU   |                    |                                    |
| Boot                    |                  | GPIO0     |                    | Entrar en modo Boot                      |
| ADC_BAT                 |                  | GPIO10    |                    | Leer el valor de voltaje de la batería           |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | Antena UFL                          |
| CHARGE_LED              |                  | VCC_3V3   |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21    |                    | Luz de usuario                           |

</TabItem>

</Tabs>

:::caution
- Aunque el XIAO ESP32-S3 asigna GPIO41 y GPIO42 a los pines A11 y A12, debido a la naturaleza del chip ESP32-S3, los pines A11 y A12 no soportan la funcionalidad ADC. Asegúrate de distinguir y diferenciarlos.

- El conector B2B de XIAO ESP32S3 Plus es compatible con la [placa de extensión Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) pero no con la placa de sensor de cámara enchufable.
:::

### Pines de alimentación

- 5V - Esta es la salida de 5 V desde el puerto USB. También puedes usarla como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, de señal, de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo a la batería y el cátodo al pin de 5 V.
- 3V3 - Esta es la salida regulada del regulador integrado. Puedes extraer 700 mA
- GND - Tierra de alimentación/datos/señal

### Pines de configuración (Strapping Pins)

En cada inicio o reinicio, un chip requiere algunos parámetros de configuración inicial, como en qué modo de arranque cargar el chip, el voltaje de la memoria flash, etc. Estos parámetros se transmiten a través de los pines de configuración. Después del reinicio, los pines de configuración funcionan como pines de E/S normales.

Los parámetros controlados por los pines de configuración dados en el reinicio del chip son los siguientes:

- **Modo de arranque del chip** – GPIO0 y GPIO46
- **Voltaje VDD_SPI** – GPIO45
- **Impresión de mensajes ROM** – GPIO46
- **Fuente de señal JTAG** – GPIO3

GPIO0, GPIO45 y GPIO46 están conectados a las resistencias internas de pull-up/pull-down débiles del chip en el reinicio.
Estas resistencias determinan los valores de bit predeterminados de los pines de configuración. Además, estas resistencias determinan los valores de bit si los pines de configuración están conectados a un circuito externo de alta impedancia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

Para cambiar los valores de bit, los pines de configuración deben conectarse a resistencias externas de pull-down/pull-up. Si el ESP32-S3 se utiliza como dispositivo por un MCU host, los niveles de voltaje de los pines de configuración también pueden ser controlados por el MCU host.

Todos los pines de configuración tienen biestables (latches). En el reinicio del sistema, los biestables muestrean los valores de bit de sus respectivos pines de configuración y los almacenan hasta que el chip se apaga o se desconecta. Los estados de los biestables no pueden cambiarse de ninguna otra manera. Esto hace que los valores de los pines de configuración estén disponibles durante toda la operación del chip, y los pines quedan libres para usarse como pines de E/S normales después del reinicio.

Con respecto a los requisitos de temporización para los pines de configuración, existen parámetros como el tiempo de preparación (setup time) y el tiempo de retención (hold time).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## Primeros pasos

Para permitirte comenzar más rápido con el XIAO ESP32S3, lee la preparación de hardware y software a continuación para preparar el XIAO.

1. **XIAO ESP32S3**

El programa de fábrica preestablecido en la versión normal es el programa de encendido de luz por pin táctil. Cuando enciendas el XIAO, toca algunos de sus pines y el indicador naranja de usuario se encenderá.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

El XIAO ESP32S3 Sense se envía con el programa de ejemplo WebCam preinstalado. Puedes usar este programa proporcionando al XIAO una buena instalación de antena y encendiéndolo. Para más detalles, puedes leer la Wiki sobre este programa.

- [Transmisión de vídeo](https://wiki.seeedstudio.com/es/xiao_esp32s3_camera_usage#project-ii-video-streaming)

:::note
A partir de **junio de 2025**, el firmware de fábrica de XIAO ESP32S3 Sense habilita un AP Wi‑Fi predeterminado con las siguientes credenciales:

- **SSID:** `XIAO_ESP32S3_Sense`
- **Password:** `seeedstudio`
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### Preparación de hardware

#### Soldar los pines

XIAO ESP32S3 se envía sin pines soldados por defecto, necesitas preparar tus propios pines y soldarlos en los pines correspondientes del XIAO para que puedas conectarlo a la placa de expansión o al sensor.

Debido al tamaño miniatura del XIAO ESP32S3, ten cuidado al soldar los pines, no juntes diferentes pines entre sí y no dejes que la soldadura toque el blindaje u otros componentes. De lo contrario, puede provocar que el XIAO haga cortocircuito o no funcione correctamente, y las consecuencias causadas por esto serán asumidas por el usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### Instalación de la antena

En la parte inferior izquierda del frontal del XIAO ESP32S3, hay un conector independiente "WiFi/BT Antenna Connector". Para obtener una mejor señal de WiFi/Bluetooth, necesitas sacar la antena del interior del paquete e instalarla en el conector.

Hay un pequeño truco para la instalación de la antena, si presionas directamente con fuerza, verás que es muy difícil de presionar y te dolerán los dedos. La forma correcta de instalar la antena es colocar primero un lado del conector de la antena en el bloque del conector, luego presionar un poco el otro lado y la antena quedará instalada.

Para retirar la antena es el mismo caso, no uses fuerza bruta para tirar directamente de la antena, levanta haciendo fuerza por un lado y la antena se quitará fácilmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### Instalación de las placas de expansión (para Sense)

Si estás comprando el XIAO ESP32S3 Sense, entonces también deberías incluir una placa de expansión. Esta placa de expansión tiene un sensor de cámara 1600x1200 OV2640/2048x1536 OV3660, ranura para tarjeta SD integrada y micrófono digital.

Al instalar la placa de expansión con XIAO ESP32S3 Sense, puedes utilizar las funciones de la placa de expansión.

Instalar la placa de expansión es muy sencillo, solo necesitas alinear el conector de la placa de expansión con el conector B2B del XIAO ESP32S3, presionarlo con fuerza y escuchar un "clic", la instalación estará completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Ahora tenemos en nuestro catálogo una nueva y potente cámara totalmente compatible con XIAO ESP32S3 Sense, la OV5640, y si la compras, puedes sustituir la cámara para utilizarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

Si necesitas conocer la información detallada de los parámetros de la ov5640, puedes consultar la siguiente tabla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Todos los programas sobre cámaras en el Wiki son compatibles con las cámaras OV5640, OV2640 y OV3660.
:::

#### Instalación del disipador de calor mejorado

Garantiza una refrigeración óptima para tu XIAO ESP32S3 Sense instalando nuestro disipador de calor mejorado. Este nuevo diseño está pensado para solucionar las deficiencias de refrigeración observadas en los modelos anteriores, especialmente durante operaciones intensivas como el uso de la cámara. Los comentarios señalaron que el disipador de calor original no disipaba adecuadamente el calor, lo que llevó al desarrollo de una solución más eficaz.

<details>
<summary>Haz clic para ver la comparación de rendimiento</summary>

Nuestras pruebas han demostrado las ventajas del disipador de calor mejorado frente a la configuración original:

| Muestra de prueba        | Temperatura máxima en la parte trasera |
| --------------------- | -------------------------------------- |
| **Sin disipador de calor** | 63.6°C                             |
| **Con doble disipador de calor** | 53.5°C (🔻10°C)              |

***Detalles de la prueba:***

- **Entorno**: Habitación con aire acondicionado (aproximadamente 27°C)
- **Herramienta de medición de temperatura**: Termopar OMEGA CL3515R
- **Lugar de medición**: Almohadilla térmica trasera del XIAO ESP32S3
- **Firmware de prueba**: WebCamera
- **Fuente de alimentación**: Type-C 5V
- **Duración de funcionamiento**: 1 hora

***Resultado clave:***

- El dispositivo equipado con el disipador de calor mantuvo un funcionamiento estable durante más de una hora, alcanzando su temperatura máxima sin degradación del rendimiento.
- Durante las pruebas con WebCamera en modo SVGA (800x600):
  - El XIAO ESP32S3 funcionó sin problemas.
  - La salida de vídeo fue fluida.
  - Hubo una reducción significativa de la temperatura, lo que garantizó un rendimiento fiable sin caídas de fotogramas ni desconexiones.

</details>

***Reúne los siguientes elementos antes de comenzar la instalación:***

- Disipador de calor seleccionado (simple o doble)
- Un ESP32S3 limpio

Asegúrate de que tu dispositivo esté apagado y desconectado de cualquier fuente de alimentación antes de comenzar.

:::tip notice

***Nota de compra:*** Al comprar tu XIAO ESP32S3 Sense, es importante tener en cuenta que solo los **modelos equipados con cámara** incluyen un disipador de calor. Si tienes una versión del ESP32S3 que no incluye cámara, tendrás que comprar un disipador de calor por separado.

***Consejo de instalación:*** Da prioridad a cubrir la Thermal PAD con el disipador de calor, ya que está directamente encima del chip ESP32S3, la principal fuente de calor. Una alineación adecuada garantiza una disipación óptima del calor, y ten en cuenta mantener los pines BAT lo más desobstruidos posible.
:::

Ahora, comencemos el proceso de instalación:

***Paso 1. Preparar el disipador de calor:***
Comienza retirando la cubierta protectora del disipador de calor para dejar al descubierto el adhesivo térmico. Esto preparará el disipador de calor para una fijación segura al chip ESP32S3.

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***Paso 2. Montar el disipador de calor:***

<Tabs>
  <TabItem value="single" label="Single Heat Sink" default>

Esta opción más pequeña y compacta es suficiente para un uso normal y permite el acceso completo a todos los pines GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="Dual Heat Sinks">

La opción más grande proporciona una refrigeración superior, lo que es ideal para tareas de alto rendimiento pero puede limitar el acceso a algunos pines GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
Si quieres utilizar el pin BAT del XIAO ESP32S3 Plus, en este caso el disipador de calor doble no es adecuado para ello.
:::

  </TabItem>
</Tabs>

***Paso 3:Inspección y prueba finales***

Después de la instalación, asegúrate de que todo esté bien fijado y sin riesgo de cortocircuitos. Verifica que el disipador de calor esté correctamente alineado y firmemente sujeto.

### Preparación de software

La herramienta de programación recomendada para el XIAO ESP32S3 es el Arduino IDE, por lo que como parte de la preparación del software, tendrás que completar la instalación de Arduino.

:::tip
Si es la primera vez que utilizas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE de acuerdo con tu sistema operativo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **Paso 2.** Inicia la aplicación Arduino.

- **Paso 3.** Añade el paquete de placas ESP32 a tu Arduino IDE.

<Tabs>
<TabItem value='For Windows'>

Ve a **File > Preferences**, y rellena **"Additional Boards Manager URLs"** con la URL siguiente:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

Ve a **Tools > Board > Boards Manager...**, escribe la palabra clave **esp32** en el cuadro de búsqueda, selecciona la última versión de **esp32** e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
El paquete integrado para XIAO ESP32S3 requiere la versión **2.0.8** o superior para estar disponible.
:::

- **Paso 4.** Selecciona tu placa y tu puerto.

En la parte superior del Arduino IDE, puedes seleccionar el puerto directamente. Es probable que sea COM3 o superior (**COM1** y **COM2** suelen estar reservados para los puertos serie de hardware).

</TabItem>
<TabItem value='For Mac OS'>

Ve a **Arduino IDE > Preferences**, y rellena **"Additional Boards Manager URLs"** con la URL siguiente:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Ve a **Tools > Board > Boards Manager...**, escribe la palabra clave **esp32** en el cuadro de búsqueda, selecciona la última versión de **esp32** e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
El paquete integrado para XIAO ESP32S3 requiere la versión **2.0.8** o superior para estar disponible.
:::

- **Paso 4.** Selecciona tu placa y puerto.

En la parte superior del Arduino IDE puedes seleccionar directamente el puerto. Probablemente será el que tenga "usbmodem" o "usbserial" en el nombre. Si no estás seguro, desconecta y vuelve a conectar para ver qué puerto desaparece.

</TabItem>
</Tabs>

<!-- :::tip
We have now submitted a merge request to ESP32 and will be able to search and use XIAO ESP32S3 in the Arduino IDE when ESP32 releases the next version of the on-board package update.

Until then, you can manually add the XIAO ESP32S3 on-board package to the Arduino directory to use it.
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Download the Package</font></span></strong></a></div>

After you have downloaded the above zip, please unzip it and you will see two files. One is the **XIAO_ESP32S3 folder**, and the other is **boards.txt**.

- **Under Windows PC**

    The default onboard package storage path for ESP32 in Windows is:

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **Under MacOS PC**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

- **Paso 4.** Close the Arduino IDE and reopen it.-->

<Tabs>
<TabItem value="(Sense)" label="for XIAO ESP32S3 (Sense)" default>

Además, busca **xiao** en la placa de desarrollo de la izquierda. selecciona **XIAO_ESP32S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="for XIAO ESP32S3 Plus" default>

Se lanzará pronto; mantente atento a futuras actualizaciones.

</TabItem>
</Tabs>

Con esta preparación, puedes empezar a escribir programas para XIAO ESP32S3 para compilarlos y subirlos.

### Modo BootLoader

A veces, usar el programa equivocado puede hacer que el XIAO pierda su puerto o no funcione correctamente. Los problemas comunes incluyen:

- El XIAO está conectado al ordenador, pero *no se encuentra ningún número de puerto*.
- El XIAO está conectado y aparece un número de puerto, pero la *carga del programa falla*.

Cuando te encuentres con las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, lo que puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- **Paso 1**. Mantén pulsado el botón `BOOT` en el XIAO ESP32S3 sin soltarlo.
- **Paso 2**. Mantén pulsado el botón `BOOT` y luego conéctalo al ordenador mediante el cable de datos. Suelta el botón `BOOT` después de conectarlo al ordenador.
- **Paso 3**. Sube el programa **File > Examples > 01.Basics > Blink** para comprobar el funcionamiento del XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### Reset

Cuando el programa se ejecuta de forma anormal, puedes pulsar `Reset` una vez durante el encendido para que XIAO vuelva a ejecutar el programa cargado.

Cuando mantienes pulsada la tecla `BOOT` mientras enciendes y luego pulsas la tecla `Reset` una vez, también puedes entrar en el modo BootLoader.

### Ejecuta tu primer programa Blink

Hasta ahora, creo que tienes una buena comprensión de las características y el hardware del XIAO ESP32S3. A continuación, tomemos como ejemplo el programa Blink más sencillo y realicemos el primer parpadeo para tu XIAO ESP32S3.

- **Paso 1.** Inicia la aplicación Arduino.
- **Paso 2.** Ve a **File > Examples > 01.Basics > Blink** y abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa como **XIAO ESP32S3** y selecciona el número de puerto correcto para subir el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el programa se haya subido correctamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO ESP32S3 está parpadeando.

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

Enhorabuena, has aprendido a escribir y subir programas para el XIAO ESP32S3.

:::note
El LED solo se apagará cuando el pin del LED de usuario en el XIAO ESP32S3 se establezca en un nivel alto, y solo se encenderá cuando el pin se establezca en un nivel bajo.
:::

## Uso de la batería

La serie XIAO ESP32S3 tiene un chip de gestión de energía integrado que permite que el XIAO ESP32S3 se alimente de forma independiente utilizando una batería o que cargue la batería a través del puerto USB del XIAO ESP32S3.

Si quieres conectar la batería para XIAO, te recomendamos comprar una batería de litio recargable de 3,7 V cualificada. Al soldar la batería, ten cuidado de distinguir entre los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe ser el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación es el lado más alejado del puerto USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
Dado que todos los pines GPIO del XIAO ESP32S3 tienen asignadas sus propias funciones, no tenemos un GPIO configurado para el pin de la batería. Esto significa que no podemos obtener el voltaje de la batería a nivel de software leyendo el valor analógico de uno de los GPIO. Si es necesario, puedes considerar conectar los terminales positivo y negativo de la batería a dos de los pines para medir el voltaje de la batería.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
Cuando uses alimentación por batería, no habrá voltaje en el pin de 5V.
:::

Al mismo tiempo, diseñamos una luz indicadora roja para la carga de la batería, que mediante la visualización de la luz indicadora informa al usuario del estado actual de la batería durante la carga.

1. Cuando el XIAO ESP32S3 no está conectado a la batería, la luz roja se enciende cuando se conecta el cable Type-C y se apaga después de 30 segundos.
2. La luz roja parpadea cuando la batería está conectada y el cable Type-C está conectado para cargar.
3. Cuando se conecta el Type-C para cargar la batería completamente, la luz roja se apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

Entendemos que algunos usuarios quieren grabar archivos UF2 directamente en XIAO, lo que permitirá el proceso de grabación por lotes de programas. Aquí describiremos este método.

<Tabs>
<TabItem value="method1" label="Method I" default>

:::note
Este método actualmente solo está disponible en sistemas Windows.
:::

**Paso 1**: Descarga y extrae el script

Descarga el archivo zip del script requerido y extráelo en tu máquina local:

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**Paso 2**: Convierte archivos BIN a archivos UF2

Después de compilar y guardar un programa de Arduino, puedes exportar el archivo binario `BIN`. Este archivo se generará en la carpeta de tu proyecto de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

Copia el archivo `BIN` al directorio **xiaos3-bin2uf2** que extrajiste anteriormente. Luego, ejecuta el script **convert_uf2.bat** para generar un archivo UF2, que requerirá el nombre de tu archivo `bin`.

**Paso 3**: Entra en el modo UF2 BootLoader

Conecta el XIAO a tu ordenador y ejecuta el script **boot_uf2.bat**. El XIAO aparecerá en tu ordenador como una unidad USB, lo que indica que ha entrado correctamente en el modo UF2 BootLoader.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**Paso 4**: Copiar el archivo UF2 a XIAO ESP32S3

Accede a la unidad USB del XIAO ESP32S3 y copia en ella el archivo UF2 convertido. Una vez que se complete la copia, la unidad USB del XIAO desaparecerá automáticamente y el programa comenzará a ejecutarse.

:::tip

1. Asegúrate de que tu programa esté compilado y ejecutándose correctamente; de lo contrario, el archivo UF2 puede no ejecutarse como se espera.
2. Se proporciona un archivo UF2 de ejemplo para Blink en la carpeta **xiaos3-bin2uf2**. Cuando se cargue, el LED naranja del XIAO ESP32S3 parpadeará. Puedes usar este archivo UF2 como prueba.

:::

**Paso 5**: Volver a entrar en el modo UF2 BootLoader

Si necesitas volver a entrar en el modo UF2 BootLoader para cargar otro archivo UF2, pulsa rápidamente el botón **Reset** seguido del botón **Boot**. No es necesario ejecutar de nuevo el script boot_uf2.bat.

:::note
¡Pulsa Reset y luego Boot, rápidamente!
:::

</TabItem>

<TabItem value="method2" label="Método II" >

El proyecto se compone de personalizar el bootloader de segunda etapa desde IDF y la aplicación de fábrica UF2 como bootloader de tercera etapa.

**Nota:** dado que IDF está en desarrollo activo y cambia con mucha frecuencia, se incluye como submódulo en lib/esp-idf; ejecuta el script de exportación allí para configurar correctamente tu entorno.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div>

</TabItem>
</Tabs>

## Solución de problemas

### P1: ¿Qué debo hacer si falla la carga del programa/el programa se ejecuta de forma anormal/no se encuentra el puerto del dispositivo?

Si encuentras el problema anterior, se recomienda que primero intentes pulsar el botón de reset en el XIAO ESP32S3 para intentar que el programa vuelva a ejecutarse. Si el problema persiste, vuelve a comprobar tu programa y lee los métodos proporcionados en **[BootLoader Mode](#modo-bootloader)** para restaurar el dispositivo.

### P2: ¿Por qué mi XIAO tiene el problema de no quedar al ras en las esquinas redondeadas? ¿Es esto un problema de calidad?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

En primer lugar, cabe señalar que esto no es un problema de calidad y no afectará al funcionamiento normal de XIAO.

XIAO ESP32S3 es el más complejo de todos los XIAO debido a su alta integración, y el PCB necesita ensamblarse en la producción en fábrica. Debido al alto nivel de integración, la conexión de la placa de empalme solo puede colocarse en las cuatro esquinas redondeadas, lo que dará lugar al problema de esquinas redondeadas desiguales que se ve en la imagen. Intentaremos mejorar el proceso para garantizar que este problema se resuelva en la producción posterior.

### P3: ¿Cómo grabar el firmware de fábrica en XIAO ESP32S3 proporcionado en la sección de recursos?

El script proporcionado en la sección de recursos es compatible con Windows. Después de descargar el archivo zip, encontrarás los siguientes archivos:

<Tabs>
<TabItem value="normal" label="Firmware de fábrica de XIAO ESP32S3" >

```shell
.
├── boot_app0.bin
├── esp32_flasher.py
├── esptool.exe
├── project_config.json
├── xiao_esp32s3_firmware.bin
├── xiao_esp32s3_firmware.bootloader.bin
├── xiao_esp32s3_firmware.partitions.bin
└── xiao_esp32s3_firmware_win.bat
```

</TabItem>
<TabItem value="sense" label="Firmware de fábrica de XIAO ESP32S3 Sense" >

```shell
.
├── CameraWebServer.bin
├── boot_app0.bin
├── bootloader.bin
├── esp32_flasher.py
├── esptool.exe
├── partition-table.bin
├── project_config.json
└── xiao_esp32s3_sense_firmware_win.bat
```

</TabItem>
</Tabs>

Para grabar el firmware, simplemente ejecuta el archivo `.bat` correspondiente. Si el proceso de grabación falla, copia la línea de comandos del mensaje y ejecútala manualmente en la terminal donde se encuentran los archivos.

## Recursos

### Para Seeed Studio XIAO ESP32-S3

**Diseño de hardware**
- **📄[Datasheet]** [Espressif ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[Schematic]** [XIAO ESP32-S3 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH_260115.pdf )
- **🗃️[Archivos de diseño de PCB]** 
  - [XIAO ESP32-S3 KiCad Project](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH&PCB_260115.7z )
- **🗃️[Librerías de diseño de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [XIAO ESP32-S3 Pinout Sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [XIAO ESP32-S3 Dimension en DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf )
- **🗃️[Modelo 3D]** [XIAO ESP32-S3 3D Model](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip )

**Software y herramientas**
- **🗃️[Firmware de fábrica]** [XIAO ESP32-S3 Factory Firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip )

### Para Seeed Studio XIAO ESP32-S3 Sense

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
**Diseño de hardware**
- **📄[Datasheet]** [Espressif ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[Schematic]** [XIAO ESP32-S3 Sense Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/new-XIAO%20ESP32S3%20Sense_v1.3_SCH_260210(1).pdf)
- **🗃️[Archivos de diseño de PCB]** 
  - [XIAO ESP32-S3 Sense KiCad Project](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/new-XIAO%20ESP32S3%20Sense_v1.3_SCH&PCB_260210(1).zip )
- **🗃️[Librerías de diseño de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [XIAO ESP32-S3 Sense Pinout Sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [XIAO ESP32-S3 Sense Dimension en DXF (Top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf )
- **📄[Dimensiones 2D]** [XIAO ESP32-S3 Sense Dimension en DXF (Bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf )
- **🗃️[Modelo 3D]** [XIAO ESP32-S3 Sense 3D Model](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip )
- **📄[Modelo 3D]** [XIAO ESP32-S3 Sense 3D Printing Purple Enclosure (Top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp )
- **📄[Modelo 3D]** [XIAO ESP32-S3 Sense 3D Printing Purple Enclosure (Bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp )

**Software y herramientas**
- **🗃️[Firmware de fábrica]** [XIAO ESP32-S3 Sense Factory Firmware](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip )

### Para Seeed Studio XIAO ESP32-S3 Plus

**Diseño de hardware**
- **📄[Datasheet]** [Espressif ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[Schematic]** [XIAO ESP32-S3 Plus Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_SCH_260115.pdf )
- **🗃️[Archivos de diseño de PCB]** 
  - [XIAO ESP32-S3 Plus KiCad Project](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_KiCad_260115.zip )
  - [XIAO Plus Base （with bottom pad lead out） KiCad Project](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [XIAO Plus Base （without bottom pad lead out） KiCad Project](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[Librerías de diseño de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [XIAO ESP32-S3 Plus Pinout Sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [XIAO ESP32-S3 Plus Dimension en DXF (Top)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf )
- **📄[Dimensiones 2D]** [XIAO ESP32-S3 Plus Dimension en DXF (Bottom)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf )
- **🔗[Modelo 3D]** [XIAO ESP32-S3 Plus 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32s3-plus-1/files )

### Para Seeed Studio XIAO ESP32-S3 Sense Camera

**Diseño de hardware**
- **📄[Datasheet]** [OV3660 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV3660_datasheet.pdf )
- **📄[Datasheet]** [OV5640 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV5640_datasheet.pdf )
- **📄[Datasheet]** [OV2640 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV2640_datasheet.pdf )
## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Gran potencia, placa pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### Otros

- **[STP]** [Diseño de carcasa XIAO ESP32S3 Sense (superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [Diseño de carcasa XIAO ESP32S3 Sense (inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*El resto del material de código abierto se está compilando, ¡así que mantente atento!*

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
