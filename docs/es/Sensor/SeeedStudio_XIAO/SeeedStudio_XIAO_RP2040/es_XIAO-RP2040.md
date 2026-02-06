---
description: Descripción general
title: Introducción al Seeed Studio XIAO RP2040
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /es/XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Introducción al Seeed Studio XIAO RP2040

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

El Seeed Studio XIAO RP2040 es tan pequeño como el Seeed Studio XIAO SAMD21 pero es más potente. Por un lado, lleva el potente procesador de doble núcleo RP2040 que puede funcionar con reloj flexible hasta 133 MHz, que es un microcontrolador de bajo consumo. En el Seeed Studio XIAO RP2040 también hay 264KB de SRAM y 2MB de memoria Flash integrada que puede proporcionar más programas para guardar y ejecutar. Por otro lado, esta pequeña placa tiene buen rendimiento en procesamiento pero necesita menos energía.
En resumen, está diseñado en un tamaño diminuto tan pequeño como un pulgar (21x17.8mm) y puede usarse para dispositivos portátiles y proyectos pequeños.

Hay 14 pines GPIO en el Seeed Studio XIAO RP2040, en los cuales hay 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de pad de conexión SWD.

El Seeed Studio XIAO RP2040 es compatible con la placa de expansión Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## **Características**

- MCU potente: Procesador ARM Cortex M0+ de doble núcleo, reloj flexible funcionando hasta 133 MHz
- Recursos integrados abundantes: 264KB de SRAM y 2MB de memoria Flash integrada
- Compatibilidad flexible: Soporte para Micropython/Arduino/CircuitPython
- Operación de proyecto fácil: Diseño amigable con protoboard y SMD, sin componentes en la parte posterior
- Tamaño pequeño: Tan pequeño como un pulgar (21x17.8mm) para dispositivos portátiles y proyectos pequeños.
- Múltiples interfaces: 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de pad de conexión SWD.

## **Especificaciones**

| Nombre del Producto | Seeed Studio XIAO RP2040 |
|-------------|-------------------------|
| **Chipset** | [Silicon - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040) |
| **Procesador** | Procesador Cortex M0+ dual funcionando hasta 133 MHz |
| **RAM** | 264KB SRAM |
| **Flash** | 2MB Flash Integrado |
| **Interfaz** | Pin GPIO x14<br/>Pin Digital x11<br/>Pin Analógico x4<br/>I2C x1<br/>UART x1<br/>SPI x1<br/>PWM x11 |
| **Integrado** | LED de Usuario (3 Colores) x1<br/>LED de Alimentación x1<br/>LED RGB x1<br/>Botón de Reset x1<br/>Botón de Boot x1 |
| **Conectividad Inalámbrica** | / |
| **Alimentación** | Voltaje de Entrada (Type-C): 5V<br/>Voltaje de Entrada (BAT): 5V |
| **Modo de Bajo Consumo (Típ.)** | / |
| **Compatibilidad de Software** | Arduino, PlatformIO, MicroPython, CircuitPython, tinyGo, Rust, Zephyr, [Exhibition for XIAO Series \| Seeed Studio Wiki](https://wiki.seeedstudio.com/es/xiao_topic_page/) |
| **Temperatura de Funcionamiento** | -20°C-70°C |
| **Dimensiones** | 21x17.8mm |
| **Variantes** | [Seeed Studio XIAO RP2040 3PCS Pack \| Save 10% for tiny Mic...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html)<br/>[Seeed Studio XIAO RP2040 Pre-Soldered \| Plug-and-Play mini ...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html) |

## **Descripción General del Hardware**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
Para pines de E/S generales:
El voltaje de funcionamiento del MCU es 3.3V. La entrada de voltaje conectada a pines de E/S generales puede causar daño al chip si es superior a 3.3V.

Para pines de alimentación:
El circuito convertidor DC-DC integrado capaz de cambiar voltaje de 5V a 3.3V permite alimentar el dispositivo con una fuente de 5V a través del PIN-VIN y PIN-5V.

XIAO RP2040 actualmente solo soporta alimentación por batería y no puede conectarse a Type-C mientras una batería está conectada, ya que puede representar un riesgo de seguridad.

Por favor presta atención al uso, no levantes la cubierta del blindaje.
:::

## **Mapa de Pines**
| Pin XIAO        | Función     | Pin del Chip          | Descripción                          |
| :-------------: | :---------: | :---------------: | :---------------------------------- |
| 5V              | VBUS        |                                       | Entrada/Salida de Alimentación                   |
| GND             |             |                                       |                                      |
| 3V3             | 3V3_OUT     |                                       | Salida de Alimentación                         |
| D0              | Analog      | P26                                   | GPIO, ADC                            |
| D1              | Analog      | P27                                   | GPIO, ADC                            |
| D2              | Analog      | P28                                   | GPIO, ADC                            |
| D3              | Analog      | P29                                   | GPIO, ADC                            |
| D4              | SDA         | P6                                    | GPIO, Datos I2C                       |
| D5              | SCL         | P7                                    | GPIO, Reloj I2C                      |
| D6              | TX          | P0                                    | GPIO, Transmisión UART                  |
| D7              | RX,CSn      | P1                                    | GPIO, Recepción UART,CSn               |
| D8              | SCK         | P2                                    | GPIO, Reloj SPI                      |
| D9              | MISO        | P4                                    | GPIO, Datos SPI                       |
| D10             | MOSI        | P3                                    | GPIO, Datos SPI                       |
| Reset           |             | RUN                                   | RUN                                  |
| Boot            |             | RP2040_BOOT                           | Entrar Modo Boot                      |
| CHARGE_LED      |             | VCC_3V3                               | CHG-LED_Rojo                          |
| RGB LED         |             | NEOPIX                       | LED RGB                              |
| USER_LED_R      |             | IO17_RGB-R                           | Pin LED RGB rojo controlado por usuario      |
| USER_LED_B      |             | IO25_RGB-B                            | Pin LED RGB azul controlado por usuario     |
| USER_LED_G      |             | IO16_RGB-G                           | Pin LED RGB verde controlado por usuario    |

### **Entrar al Modo Bootloader**

A veces el puerto del Seeed Studio XIAO RP2040 puede desaparecer cuando el proceso de programación del usuario falla. Podemos resolver este problema con la siguiente operación:

- Mantén presionado el botón "B".
- Conecta el Seeed Studio XIAO PR2040 a tu computadora.
- La computadora mostrará un controlador de disco.

En este punto, el chip entra en modo Bootloader y el puerto de grabación aparece nuevamente. Debido a que el chip RP2040 tiene dos particiones, una es el Bootloader y la otra es el programa del usuario. El producto grabará un código bootloader en la memoria del sistema cuando salga de fábrica. Podemos cambiar modos realizando los pasos anteriores.

### **Reset**

Si quieres resetear el Seeed Studio XIAO RP2040, realiza los siguientes pasos:

- Conecta el Seeed Studio XIAO RP2040 a tu computadora.
- Presiona los pines "R" **una vez**.

Por favor nota: El comportamiento de los LEDs programables integrados de un solo color (Son rojo, azul y verde) es inverso al de un Arduino. En el Seeed Studio XIAO RP2040, el pin tiene que ser puesto en bajo para habilitarse.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

**Diseño de Hardware**
- **📄[Hoja de Datos]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Esquemático]** [XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[Archivos de Diseño PCB]** 
  - [ XIAO RP2040 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip )
  - [XIAO RP2040 Eagle Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[Librerías de Diseño PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pines]** [XIAO RP2040 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**Diseño Mecánico**
- **📄[Dimensiones 2D]** [XIAO RP2040 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[Modelo 3D]** [ XIAO RP2040 3D Model](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

## Recursos del Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Libro Electrónico]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
