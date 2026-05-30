---
description: Descripción general
title: Introducción a Seeed Studio XIAO RP2040
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/XIAO-RP2040/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introducción a Seeed Studio XIAO RP2040

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

El Seeed Studio XIAO RP2040 es tan pequeño como el Seeed Studio XIAO SAMD21 pero más potente. Por un lado, incorpora el potente procesador de doble núcleo RP2040 que puede funcionar con un reloj flexible de hasta 133 MHz, siendo un microcontrolador de bajo consumo. En el Seeed Studio XIAO RP2040 también hay 264KB de SRAM y 2MB de memoria Flash integrada que permiten guardar y ejecutar más programas. Por otro lado, esta pequeña placa tiene un buen rendimiento de procesamiento pero necesita menos energía.  
En resumen, está diseñado en un tamaño diminuto, tan pequeño como un pulgar (21x17.8mm), y puede utilizarse para dispositivos wearables y proyectos pequeños.

Hay 14 pines GPIO en el Seeed Studio XIAO RP2040, de los cuales hay 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de almohadilla de unión SWD.

Seeed Studio XIAO RP2040 es compatible con la placa de expansión Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## **Características**

- Potente MCU: procesador ARM Cortex M0+ de doble núcleo, reloj flexible de hasta 133 MHz
- Ricos recursos integrados: 264KB de SRAM y 2MB de memoria Flash integrada
- Compatibilidad flexible: compatible con Micropython/Arduino/CircuitPython
- Funcionamiento sencillo de proyectos: diseño compatible con breadboard y SMD, sin componentes en la parte posterior
- Tamaño reducido: tan pequeño como un pulgar (21x17.8mm) para dispositivos wearables y proyectos pequeños.
- Múltiples interfaces: 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de almohadilla de unión SWD.

## **Especificaciones**

| Nombre del producto | Seeed Studio XIAO RP2040 |
|-------------|-------------------------|
| **Chipset** | [Silicon - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040) |
| **Procesador** | Procesador Cortex M0+ de doble núcleo funcionando hasta 133 MHz |
| **RAM** | 264KB SRAM |
| **Flash** | 2MB de Flash integrada |
| **Interfaz** | Pin GPIO x14<br/>Pin digital x11<br/>Pin analógico x4<br/>I2C x1<br/>UART x1<br/>SPI x1<br/>PWM x11 |
| **Integrado en placa** | LED de usuario (3 colores) x1<br/>LED de alimentación x1<br/>LED RGB x1<br/>Botón de reinicio x1<br/>Botón de arranque x1 |
| **Conectividad inalámbrica** | / |
| **Alimentación** | Tensión de entrada (Type-C): 5V<br/>Tensión de entrada (BAT): 5V |
| **Modo de bajo consumo (Típ.)** | / |
| **Compatibilidad de software** | Arduino, PlatformIO, MicroPython, CircuitPython, tinyGo, Rust, Zephyr, [Exhibition for XIAO Series \| Seeed Studio Wiki](https://wiki.seeedstudio.com/es/xiao_topic_page/) |
| **Temperatura de trabajo** | -20°C-70°C |
| **Dimensiones** | 21x17.8mm |
| **Variantes** | [Seeed Studio XIAO RP2040 3PCS Pack \| Save 10% for tiny Mic...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html)<br/>[Seeed Studio XIAO RP2040 Pre-Soldered \| Plug-and-Play mini ...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html) |

## **Descripción general del hardware**

### Parte frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte posterior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Para los pines de E/S generales:
La tensión de trabajo del MCU es de 3.3V. Una tensión de entrada conectada a los pines de E/S generales puede causar daños al chip si es superior a 3.3V.

Para los pines de alimentación:
El circuito convertidor DC-DC integrado capaz de convertir 5V en 3.3V permite alimentar el dispositivo con una fuente de 5V a través de VIN-PIN y 5V-PIN.

XIAO RP2040 actualmente solo admite alimentación por batería y no puede conectarse a Type-C mientras hay una batería conectada, ya que puede suponer un riesgo para la seguridad.

Por favor, presta atención al usarlo, no levantes la cubierta de protección.
:::

## **Mapa de pines**
| Pin XIAO        | Función     | Pin del chip          | Descripción                          |
| :-------------: | :---------: | :---------------: | :---------------------------------- |
| 5V              | VBUS        |                                       | Entrada/Salida de alimentación                   |
| GND             |             |                                       |                                      |
| 3V3             | 3V3_OUT     |                                       | Salida de alimentación                         |
| D0              | Analógico      | GPIO26                                   | GPIO, ADC                            |
| D1              | Analógico      | GPIO27                                   | GPIO, ADC                            |
| D2              | Analógico      | GPIO28                                   | GPIO, ADC                            |
| D3              | Analógico      | GPIO29                                   | GPIO, ADC                            |
| D4              | SDA         | GPIO6                                    | GPIO, datos I2C                       |
| D5              | SCL         | GPIO7                                    | GPIO, reloj I2C                      |
| D6              | TX          | GPIO0                                    | GPIO, transmisión UART                  |
| D7              | RX,CSn      | GPIO1                                    | GPIO, recepción UART, CSn               |
| D8              | SCK         | GPIO2                                    | GPIO, reloj SPI                      |
| D9              | MISO        |GPIO4                                    | GPIO, datos SPI                       |
| D10             | MOSI        | GPIO3                                    | GPIO, datos SPI                       |
| Reset           |             | RUN                                   | RUN                                  |
| Boot            |             | RP2040_BOOT                           | Entrar en modo Boot                   |
| CHARGE_LED      |             | VCC_3V3                               | CHG-LED_Red                          |
| RGB LED         |             | GPIO12                       | LED RGB                              |
| USER_LED_R      |             | GPIO17                           | Pin de LED RGB rojo controlado por el usuario      |
| USER_LED_B      |             | GPIO25                            | Pin de LED RGB azul controlado por el usuario     |
| USER_LED_G      |             | GPIO16                          | Pin de LED RGB verde controlado por el usuario    |

### **Entrar en modo Bootloader**

A veces el puerto del Seeed Studio XIAO RP2040 puede desaparecer cuando falla el proceso de programación del usuario. Podemos resolver este problema mediante la siguiente operación:

- Mantén pulsado el botón "B".
- Conecta el Seeed Studio XIAO PR2040 a tu ordenador.
- En el ordenador aparecerá una unidad de disco.

En este punto, el chip entra en modo Bootloader y el puerto de grabación vuelve a aparecer. Debido a que el chip RP2040 tiene dos particiones, una es el Bootloader y la otra es el programa de usuario. El producto grabará un código de bootloader en la memoria del sistema cuando salga de fábrica. Podemos cambiar de modo realizando los pasos anteriores.

### **Reinicio**

Si quieres reiniciar el Seeed Studio XIAO RP2040, realiza los siguientes pasos:

- Conecta el Seeed Studio XIAO RP2040 a tu ordenador.
- Pulsa los pines "R" **una vez**.

Ten en cuenta: El comportamiento de los LEDs monocromos programables integrados (son rojo, azul y verde) es el inverso al de un Arduino. En el Seeed Studio XIAO RP2040, el pin debe ponerse en nivel bajo para activarlo.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## Visor online del esquema

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

**Diseño de hardware**
- **📄[Hoja de datos]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Esquema]** [XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[Archivos de diseño PCB]** 
  - [ XIAO RP2040 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.3_SCH&PCB_20260304.zip )
  - [XIAO RP2040 Eagle Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[Librerías de diseño PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [XIAO RP2040 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**Diseño mecánico**
- **📄[Dimensiones 2D]** [XIAO RP2040 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[Modelo 3D]** [ XIAO RP2040 3D Model](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

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

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
