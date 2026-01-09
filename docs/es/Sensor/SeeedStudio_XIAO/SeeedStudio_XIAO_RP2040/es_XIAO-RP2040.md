---
description: Descripción general
title: Primeros pasos con Seeed Studio XIAO RP2040
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /es/XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Primeros pasos con Seeed Studio XIAO RP2040

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>


El Seeed Studio XIAO RP2040 es tan pequeño como el Seeed Studio XIAO SAMD21 pero es más potente. Por un lado, lleva el potente procesador de doble núcleo RP2040 que puede funcionar con reloj flexible hasta 133 MHz, el cual es un microcontrolador de bajo consumo. En el Seeed Studio XIAO RP2040 también hay 264KB de SRAM y 2MB de memoria Flash integrada que puede proporcionar más programas para guardar y ejecutar. Por otro lado, esta pequeña placa tiene buen rendimiento en procesamiento pero necesita menos energía.  
En resumen, está diseñada en un tamaño diminuto tan pequeño como un pulgar (21x17.8mm) y puede usarse para dispositivos portátiles y proyectos pequeños.

Hay 14 pines GPIO en el Seeed Studio XIAO RP2040, en los cuales hay 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de pad de conexión SWD.

El Seeed Studio XIAO RP2040 es compatible con la placa de expansión Seeed Studio XIAO. 

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## **Características**

- MCU potente: Procesador ARM Cortex M0+ de doble núcleo, reloj flexible funcionando hasta 133 MHz
- Recursos integrados abundantes: 264KB de SRAM y 2MB de memoria Flash integrada
- Compatibilidad flexible: Soporte para Micropython/Arduino/CircuitPython
-  Operación de proyecto fácil: Diseño amigable con protoboard y SMD, sin componentes en la parte posterior
- Tamaño pequeño: Tan pequeño como un pulgar (21x17.8mm) para dispositivos portátiles y proyectos pequeños.
- Múltiples interfaces: 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de pad de conexión SWD.

## **Especificaciones**

|Elemento|Valor|
|---|---|
|CPU|Procesador ARM Cortex M0+ de doble núcleo hasta 133MHz|
|Memoria Flash|2MB|
|SRAM|264KB|
|Pines de E/S digitales|11|
|Pines de E/S analógicos|4|
|Pines PWM|11|
|Interfaz I2C|1|
|Interfaz SPI|1|
|Interfaz UART|1|
|Interfaz de alimentación y descarga| Type-C|
|Alimentación|3.3V/5V DC|
|Dimensiones|21×17.8×3.5mm|

## **Descripción General del Hardware**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
Para pines de E/S generales:
El voltaje de funcionamiento del MCU es de 3.3V. La entrada de voltaje conectada a los pines de E/S generales puede causar daño al chip si es superior a 3.3V.

Para pines de alimentación:
El circuito convertidor DC-DC integrado capaz de cambiar el voltaje de 5V a 3.3V permite alimentar el dispositivo con una fuente de 5V a través del PIN-VIN y PIN-5V.

XIAO RP2040 actualmente solo admite alimentación por batería y no puede conectarse a Type-C mientras una batería esté conectada, ya que puede representar un riesgo de seguridad.

Por favor preste atención al uso, no levante la cubierta del blindaje.
:::    
    
### **Entrar al Modo Bootloader**


A veces el puerto del Seeed Studio XIAO RP2040 puede desaparecer cuando el proceso de programación del usuario falla. Podemos resolver este problema mediante la siguiente operación: 

- Mantenga presionado el botón "B".
- Conecte el Seeed Studio XIAO PR2040 a su computadora.
- La computadora mostrará un controlador de disco.

En este punto, el chip entra en modo Bootloader y el puerto de grabación aparece nuevamente. Debido a que el chip RP2040 tiene dos particiones, una es el Bootloader y la otra es el programa del usuario. El producto grabará un código bootloader en la memoria del sistema cuando salga de fábrica. Podemos cambiar de modo realizando los pasos anteriores.

### **Reinicio**

Si desea reiniciar el Seeed Studio XIAO RP2040, realice los siguientes pasos:

- Conecte el Seeed Studio XIAO RP2040 a su computadora.
- Presione los pines "R" **una vez**.

Tenga en cuenta: El comportamiento de los LEDs programables de un solo color integrados (Son rojo, azul y verde) es inverso al de un Arduino. En el Seeed Studio XIAO RP2040, el pin debe ser puesto a bajo para habilitarse.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos


- **[PDF]** [Hoja de datos del RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Esquemático del Seeed Studio XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[Ebook]** [XIAO: Gran Potencia, Placa Pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Archivo KiCAD del Seeed Studio XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Archivo Eagle del Seeed Studio XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Dimensiones del Seeed Studio XIAO RP2040 en DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Huella Eagle del Seeed Studio XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Hoja de pines del Seeed Studio XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Modelo 3D del Seeed Studio XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)


- 🔗 **[Kicad]** [Huella del Seeed Studio XIAO RP2040](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## Recursos del Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
