---
description: Brushless_Motor_Shield_TB6605FTG
title: Shield de Motor sin Escobillas TB6605FTG
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Brushless_Motor_Shield_TB6605FTG
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/105030027-preview-wiki.jpg" alt="pir" width={600} height="auto" /></p>

El Shield de Motor sin Escobillas (TB6605FTG) es un controlador de motor sin escobillas para sistemas compatibles con Arduino. Soporta entrada DC de 9V ~ 24V y puede generar continuamente una gran corriente para impulsar el motor sin escobillas. Con el potenciómetro integrado, puedes ajustar la velocidad del motor fácilmente. Este shield ofrece una variedad de modos para elegir, puedes usar los cuatro interruptores integrados para cambiar funciones.

Con la interfaz Grove I2C integrada, puedes trabajar con otros módulos grove con este shield fácilmente, por ejemplo, puedes usar un [Grove - LCD RGB Backlight](Grove - LCD RGB Backlight) para mostrar la velocidad del Motor.

También lanzamos el [Kit de Motor BLDC TB6605 para Arduino](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html), que está basado en este shield y contiene un LCD y un motor sin escobillas de alta calidad para mostrar la velocidad del Motor.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Amplio rango de voltaje de entrada: 9V ~ 24V
- Interfaz I2C
- Control de velocidad ajustable por hardware (Potenciómetro integrado)
- Múltiples modos disponibles: CW/CCW, Freno/Normal, Onda senoidal/Onda cuadrada

## Especificaciones

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parámetro</h3></td>
    <td><h3>Valor</h3></td>
  </tr>
  <tr>
    <td><h4>Voltaje de alimentación</h4></td>
    <td><h4>3.3V / 5V</h4></td>
  </tr>
  <tr>
    <td><h4>Entrada de alimentación DC</h4></td>
    <td><h4>9V ~ 24V</h4></td>
  </tr>  
  <tr>
    <td><h4>Corriente máxima de salida</h4></td>
    <td><h4>0.02A</h4></td>
  </tr>
    <tr>
    <td><h4>Modo de conducción</h4></td>
    <td><h4>Onda senoidal/Onda cuadrada</h4></td>
  </tr>
    <tr>
    <td><h4>Interfaz del motor</h4></td>
    <td><h4>Terminal de tornillo</h4></td>
  </tr>
    <tr>
    <td><h4>Interfaz Grove externa</h4></td>
    <td><h4>I2C</h4></td>
  </tr>
  </tbody></table>

## Descripción General del Hardware

### Diagrama de Pines

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" /></a></p>

### Definición de terminales de tornillo

<table align="center">
  <tbody>
  <tr>
    <td><h3>Shield de Motor Sin Escobillas</h3></td>
    <td><h3>Motor Sin Escobillas</h3></td>
    <td><h3>color del cable</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>Positivo de alimentación lógica</h4></td>
    <td><h4>Rojo</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>Tierra de alimentación lógica</h4></td>
    <td><h4>Negro</h4></td>
  </tr>  
  <tr>
    <td><h4>HU+</h4></td>
    <td><h4>Sensor Hall Fase U</h4></td>
    <td><h4>Naranja</h4></td>
  </tr>
  <tr>
    <td><h4>HV+</h4></td>
    <td><h4>Sensor Hall Fase V</h4></td>
    <td><h4>Verde Oscuro</h4></td>
  </tr>
  <tr>
    <td><h4>HW+</h4></td>
    <td><h4>Sensor Hall Fase W</h4></td>
    <td><h4>Azul Oscuro</h4></td>
  </tr>
  <tr>
    <td><h4>U</h4></td>
    <td><h4>Bobina Fase U</h4></td>
    <td><h4>Amarillo</h4></td>
  </tr>
  <tr>
    <td><h4>V</h4></td>
    <td><h4>Bobina Fase V</h4></td>
    <td><h4>Verde Claro</h4></td>
  </tr>
  <tr>
    <td><h4>W</h4></td>
    <td><h4>Bobina Fase W</h4></td>
    <td><h4>Azul Claro</h4></td>
  </tr>
  </tbody></table>

<div align="center"><b>Tabla 1.</b><i>Mapa de Cableado</i></div>

:::tip
El color del cableado puede ser diferente si no estás usando el motor sin escobillas 42BLF01, por favor conecta según la situación específica
:::

## Primeros Pasos

### Materiales requeridos

- [Brushless Motor Shield (TB6605FTG) x1](https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html)
- [Grove - LCD RGB Backlight x1](Grove - LCD RGB Backlight)
- [Arduino o Seeedunio x1](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- Motor sin escobillas x1

O puedes simplemente usar nuestro [TB6605FTG Brushless Motor Kit for Arduino](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html), este kit contiene Brushless Motor Shield, motor sin escobillas 42BLF01, y un Grove - LCD RGB Backlight.

### Conexión de hardware

- **Paso 1.** Conecta el Motor sin escobillas al terminal de tornillo del Brushless Motor Shield, por favor consulta la **Tabla 1.**

- **Paso 2.** Conecta el Grove - LCD RGB Backlight al puerto Grove I2C en el Brushless Motor Shield.

- **Paso 3.** Conecta el Brushless Motor Shield a tu Arduino o Seeeduino.

- **Paso 4.** Alimenta el shield con el conector DC y alimenta el Arduino a través del cable USB.

  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" /></a></p>

### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.**  
Descarga la librería [BLDC Motor Shield (TB6605) lib](https://github.com/Seeed-Studio/BLDC_Motor_Shield_TB6605) desde Github.
Descarga la librería [Grove-LCD RGB Backlight Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo a través de la ruta: **File --> Examples -->BLDC Motor Shield (TB6605)--> TB6605_demo**.

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" /></a></p>

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [How to upload code](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
Si todo va bien, puedes ver el motor DC funcionar y el LCD mostrará la velocidad. Ahora puedes rotar el potenciómetro para controlar la velocidad del motor.  
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos Eagle del Shield de Motor BLDC (TB6605)](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip)

- **[PDF]** [Motor sin Escobillas 42BLF01-Especificación](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/42BLF01-Specification.pdf)

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
