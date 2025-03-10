---
description: Overview
title: Comenzando con XIAO RP2040 de Seeed Studio
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /es/XIAO-RP2040
last_update:
  date: 02/18/2025
  author: Guillermo
---

# Comenzando con XIAO RP2040 de Seeed Studio

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>


El XIAO RP2040 de Seeed Studio es tan pequeño como el XIAO SAMD21 Seeed Studio, pero es más potente. Por un lado, lleva el potente procesador de doble núcleo RP2040, que puede funcionar con una frecuencia de hasta 133 MHz, siendo un microcontrolador de bajo consumo. En el XIAO RP2040 de Seeed Studio también hay 264 KB de SRAM y 2 MB de memoria Flash integrada, lo que permite guardar y ejecutar más programas. Por otro lado, esta pequeña placa tiene un buen rendimiento en procesamiento pero consume menos energía.  
En resumen, está diseñado en un tamaño muy compacto, tan pequeño como un pulgar (21x17,8 mm), lo que la hace ideal para dispositivos portátiles y proyectos pequeños.

En el XIAO RP2040 de Seeed Studio hay 14 pines GPIO, de los cuales 11 son digitales, 4 son analógicos, 11 son PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI y 1 interfaz de pad de unión SWD.

El XIAO RP2040 de Seeed Studio es compatible con la placa de expansión Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## **Características**

- Potente MCU: Procesador ARM Cortex M0+ de doble núcleo, con reloj flexible que alcanza hasta 133 MHz
- Abundantes recursos integrados: 264 KB de SRAM y 2 MB de memoria Flash integrada
- Compatibilidad flexible: Soporta Micropython/Arduino/CircuitPython
- Fácil operación en proyectos: Diseño amigable para protoboard y SMD, sin componentes en la parte trasera
- Tamaño compacto: Tan pequeño como un pulgar (21x17.8mm), ideal para dispositivos portátiles y proyectos pequeños
- Múltiples interfaces: 11 pines digitales, 4 pines analógicos, 11 pines PWM, 1 interfaz I2C, 1 interfaz UART, 1 interfaz SPI, 1 interfaz de pad de unión SWD

## **Especificaciones**

|Elemento|Valor|
|---|---|
|CPU|Procesador ARM Cortex M0+ de doble núcleo hasta 133 MHz|
|Memoria Flash|2 MB|
|SRAM|264 KB|
|Pines Digitales I/O|11|
|Pines Analógicos I/O|4|
|Pines PWM|11|
|Interfaz I2C|1|
|Interfaz SPI|1|
|Interfaz UART|1|
|Interfaz de alimentación y descarga| Tipo-C|
|Alimentación|3.3V/5V DC|
|Dimensiones|21×17.8×3.5 mm|

## **Visión General del Hardware**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
Para los pines I/O generales:  
El voltaje de trabajo del MCU es de 3.3V. Si se conecta un voltaje de entrada superior a 3.3V a los pines I/O generales, puede dañar el chip.

Para los pines de alimentación:  
El circuito integrado DC-DC convierte la tensión de 5V en 3.3V, lo que permite alimentar el dispositivo con una fuente de 5V a través de los pines VIN-PIN y 5V-PIN.

El XIAO RP2040 actualmente solo admite suministro de energía por batería y no se puede conectar a Type-C mientras una batería esté conectada, ya que podría representar un riesgo de seguridad.

Por favor, preste atención al uso y no retire la cubierta del escudo.
:::    
    
### **Entrar en Modo Bootloader**

A veces, el puerto del Seeed Studio XIAO RP2040 puede desaparecer cuando el proceso de programación del usuario falla. Podemos solucionar este problema realizando la siguiente operación:

- Mantén presionado el botón "B".
- Conecta el Seeed Studio XIAO RP2040 a tu computadora.
- El sistema operativo mostrará una unidad de disco.

En este punto, el chip entra en el modo Bootloader y el puerto de carga aparecerá nuevamente. Debido a que el chip RP2040 tiene dos particiones, una es el Bootloader y la otra es el programa del usuario. El producto graba un código bootloader en la memoria del sistema cuando sale de fábrica. Podemos cambiar de modo siguiendo los pasos anteriores.

### **Reiniciar**

Si deseas reiniciar el Seeed Studio XIAO RP2040, sigue estos pasos:

- Conecta el Seeed Studio XIAO RP2040 a tu computadora.
- Presiona el pin "R" **una vez**.

Nota: El comportamiento de los LEDs programables de un solo color integrados (rojo, azul y verde) está invertido en comparación con el Arduino. En el Seeed Studio XIAO RP2040, el pin debe ser puesto a bajo para habilitarlo.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## Visor esquemático en línea


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos


- **[PDF]** [RP2040 datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagle file](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3D Model](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Certification files](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Certification.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO RP2040 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte Técnico y Discusión sobre Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>