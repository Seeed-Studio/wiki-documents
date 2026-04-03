---
description: Uso de Arduino en tu placa XIAO RP2350
title: Primeros pasos con Seeed Studio XIAO RP2350(Arduino)
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 2024-10-30T01:39:16.136Z
  author: Spencer
createdAt: '2024-10-30'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/es/xiao_rp2350_arduino/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 con Arduino

La placa Seeed Studio XIAO RP2350 ahora admite programación mediante Arduino, gracias al [arduino-pico core](https://github.com/earlephilhower/arduino-pico). Esta guía te ayudará a configurar y empezar a usar Arduino en tu placa RP2350.

## Características

- **Potente placa MCU:** Equipada con un chip Raspberry Pi RP2350 con doble núcleo Arm Cortex-M33 simétrico a 150MHz con FPU.
- **Funciones de seguridad mejoradas:** El arranque seguro integrado y el gestor de arranque cifrado garantizan la seguridad de la aplicación.
- **Compatibilidad de software:** Compatible con C/C++ y MicroPython, lo que garantiza un desarrollo y prototipado de proyectos sencillo.
- **Ricos recursos integrados:** Integra un LED RGB, 2MB de Flash, 520kB de SRAM y 19 GPIO multifunción (Analógico, Digital, I²C, UART, SPI, PWM).
- **8 nuevos IO ampliados:** En comparación con las anteriores MCU XIAO, la incorporación de 8 pines IO en la parte posterior admite aplicaciones más complejas.
- **Diseño de energía eficiente:** Consumo de energía ultrabajo de solo 50μA en modo de suspensión, lo que permite la alimentación por batería. La medición directa del voltaje de la batería a través de un IO interno mejora el sistema de gestión de batería (BMS).
- **Diseño compacto del tamaño de un pulgar:** Con unas dimensiones de 21 x 17.8mm, adopta el factor de forma clásico XIAO de Seeed Studio, ideal para aplicaciones con limitaciones de espacio.
- **Amigable para producción:** Diseño de dispositivo de montaje superficial (SMD) con todos los componentes en la parte frontal y orificios tipo sello en ambos lados, lo que facilita la producción en masa eficiente.

## Especificación

<table>
  <tr>
    <th>Producto</th>
    <td>XIAO RP2040</td>
    <td>XIAO RP2350</td>
  </tr>
  <tr>
    <th>Procesador</th>
    <td>Raspberry Pi RP2040<br/>Dual Cortex-M0+ @ 133MHz</td>
    <td>Raspberry Pi RP2350<br/>Dual Cortex-M33 @ 150MHz, FPU</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td>264kB SRAM</td>
    <td>520kB SRAM</td>
  </tr>
  <tr>
    <th>Flash</th>
    <td>2MB integrada</td>
    <td>2MB Flash</td>
  </tr>
  <tr>
    <th>LEDs</th>
    <td>1x LED de usuario<br/>1x LED de alimentación<br/>1x LED RGB</td>
    <td>1x LED de usuario<br/>1x LED de alimentación<br/>1x LED RGB</td>
  </tr>
  <tr>
    <th>Interfaz</th>
    <td>11 pines (todos PWM):<br/>4x Analógico<br/>11x Digital<br/>1x I²C<br/>1x UART<br/>1x SPI</td>
    <td>19 pines (todos PWM):<br/>3x Analógico<br/>19x Digital<br/>2x I²C<br/>2x UART<br/>2x SPI</td>
  </tr>
  <tr>
    <th>Botón</th>
    <td>1x botón RESET<br/>1x botón BOOT</td>
    <td>1x botón RESET<br/>1x botón BOOT</td>
  </tr>
  <tr>
    <th>Seguridad</th>
    <td>-</td>
    <td>OTP, Secure Boot, Arm TrustZone</td>
  </tr>
  <tr>
    <th>Compatibilidad de software</th>
    <td>Soporta Micropython / Arduino / CircuitPython</td>
    <td>Soporta Micropython / Arduino / C,C++</td>
  </tr>
  <tr>
    <th>Temperatura de trabajo</th>
    <td>-20°C-70°C</td>
    <td>-20°C-70°C</td>
  </tr>
  <tr>
    <th>Dimensiones</th>
    <td>21x17.8 mm</td>
    <td>21x17.8 mm</td>
  </tr>
</table>

## Descripción general del hardware

<div class="table-center">
<table align="center">
 <tr>
     <th>Distribución de pines frontal de XIAO RP2350</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>Distribución de pines trasera de XIAO RP2350</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>Componentes de XIAO RP2350</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

¿Necesitas más detalles sobre la distribución de pines? Navega a [Recursos y materiales](#recursos--materiales) más abajo.


## **Mapa de pines**
| Pin XIAO                 | Función   | Pin del chip | Funciones alternativas | Descripción                          |
| :---------------------: | :-------: | :----------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS       |              |                    | Entrada/Salida de alimentación       |
| GND                     |            |              |                    |                                      |
| 3V3                     | 3V3_OUT    |              |                    | Salida de alimentación               |
| D0                      | Analógico  | GPIO26       |                    | GPIO, ADC                            |
| D1                      | Analógico  | GPIO27       |                    | GPIO, ADC                            |
| D2                      | Analógico  | GPIO28       |                    | GPIO, ADC                            |
| D3                      | SPIO_CSn   | GPIO5        |                    | GPIO, SPI                            |
| D4                      | SDA1       | GPIO6        |                    | GPIO, datos I2C                      |
| D5                      | SCL1       | GPIO7        |                    | GPIO, reloj I2C                      |
| D6                      | TX0        | GPIO0        |                    | GPIO, transmisión UART               |
| D7                      | RX0        | GPIO1        |                    | GPIO, recepción UART                 |
| D8                      | SPIO_SCK   | GPIO2        |                    | GPIO, reloj SPI                      |
| D9                      | SPIO_MISO  | GPIO4        |                    | GPIO, datos SPI                      |
| D10                     | SPIO_MOSI  | GPIO3        |                    | GPIO, datos SPI                      |
| D11                     | RX1        | GPIO21       |                    | GPIO, recepción UART                 |
| D12                     | TX1        | GPIO20       |                    | GPIO, transmisión UART               |
| D13                     | SCL0       | GPIO17       |                    | GPIO, reloj I2C                      |
| D14                     | SDA0       | GPIO16       |                    | GPIO, datos I2C                      |
| D15                     | SPI1_MOSI  | GPIO11       |                    | GPIO, datos SPI                      |
| D16                     | SPI1_MISO  | GPIO12       |                    | GPIO, datos SPI                      |
| D17                     | SPI1_SCK   | GPIO10       |                    | GPIO, reloj SPI                      |
| D18                     | SPI1_Csn   | GPIO9        | Csn                |                                      |
| ADC_BAT                 |            | GPIO29       |                    | Leer el valor de voltaje de la BAT  |
| Reset                   |            | RUN          |                    | RUN                                  |
| Boot                    |            | RP2040_BOOT  |                    | Entrar en modo Boot                  |
| CHARGE_LED              |            | NCHG         |                    | CHG-LED_Red                          |
| RGB LED                 |            | GPIO22       |                    | LED RGB                              |
| USER_LED                |            | GPIO25       |                    | Luz de usuario_Amarillo              |
## Requisitos previos

Para comenzar, asegúrate de tener:

- Una placa RP2350
- El Arduino IDE
- Un cable USB

## Configuración del software

### 1. Instalar el Arduino IDE

Descarga e instala la última versión del Arduino IDE desde el sitio oficial: [Arduino Software](https://www.arduino.cc/en/software).

### 2. Añadir compatibilidad con la placa RP2350

1. Abre el Arduino IDE y navega a **File** > **Preferences**.
2. En el campo **Additional Boards Manager URLs**, añade esta URL:

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. Haz clic en **OK** para guardar la configuración.
4. Ve a **Tools** > **Board** > **Boards Manager**.
5. En el Boards Manager, busca **pico** y haz clic en **Install**.
6. Después de la instalación, ve a **Tools** > **Board** y selecciona la placa que se muestra a continuación como tu placa.

:::note
Asegúrate de instalar la versión 4.2.0 o posterior para la compatibilidad completa con la placa XIAO RP2350.
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. Cargar un sketch

Antes de cargar un sketch, pon tu XIAO RP2350 en modo BOOT. Utiliza uno de los métodos siguientes:

<Tabs>
<TabItem value="method1" label="Método 1: Antes de conectar al ordenador" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Mantén Boot-> Conecta el cable-> Suelta Boot</em></div></div>

</TabItem>

<TabItem value="method2" label="Método 2: Mientras está conectado al ordenador">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Mantén Boot-> Haz clic en Reset-> Suelta Boot</em></div></div>

</TabItem>
</Tabs>

1. Abre el Arduino IDE y crea un nuevo sketch.
2. Escribe tu código. Por ejemplo, utiliza el código de ejemplo `Blink`.
3. Ve a **Tools** > **Port** y selecciona el puerto donde está conectado tu RP2350.

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>


## Recursos y materiales


**Diseño de hardware**
- **📄[Hoja de datos]** [Raspberry Pi RP2350 Datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf )
- **📄[Esquemático]** [XIAO RP2350 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf )
- **🗃️[Archivos de diseño de PCB]** [XIAO RP2350 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip )
- **🗃️[Bibliotecas de diseño de PCB]** 
  - [Huellas KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [XIAO RP2350 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [Dimensiones de XIAO RP2350 en DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf )
- **🔗[Modelo 3D]** [Modelo 3D de XIAO RP2350](https://grabcad.com/library/seeed-studio-xiao-rp2350-2 )

**Software y herramientas**
- **📄[Firmware de prueba]** [Firmware de prueba de bajo consumo de XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 )

**Otros**
- **📄[Documento]** [Primeros pasos con Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf )  
  - Una guía completa para configurar y programar placas Raspberry Pi Pico, ideal para principiantes que quieran aprender MicroPython o C/C++.
- **📄[Documento]** [Raspberry Pi Pico-series Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf )  
  - El libro que documenta los tutoriales de configuración de MicroPython y las API
- **📄[Documento]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf )  
  - El libro que documenta las API del SDK de Pico en C/C++
 - **📄[arduino-pico GitHub]**(https://github.com/earlephilhower/arduino-pico)
- **📄[Documentación del núcleo Arduino-Pico]**(https://arduino-pico.readthedocs.io/en/latest/install.html)

## Soporte y debate

Gracias por usar productos de Seeed. Ofrecemos múltiples canales para soporte y debate en la comunidad:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
