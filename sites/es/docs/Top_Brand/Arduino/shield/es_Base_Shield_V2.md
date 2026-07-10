---
description: Base_Shield_V2
title: Base Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Base_Shield_V2
sku: 103030000
last_update:
  date: 7/7/2026
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/Base_Shield_V2/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" alt="pir" width={600} height="auto" /></p>

Arduino Uno es hasta ahora la placa Arduino más popular, sin embargo, a veces resulta frustrante cuando tu proyecto requiere muchos sensores o LEDs y tus cables de puente están hechos un lío. El propósito de crear la Base Shield es ayudarte a deshacerte de la protoboard y de los cables de puente. Con los abundantes conectores Grove en la placa base, ¡puedes añadir todos los módulos Grove al Arduino Uno de forma práctica! El pinout de la Base Shield V2 es el mismo que el de Arduino Uno R3.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/base-shield-v13-p-1378.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Versión

<table align="center">
  <tbody>
  <tr>
    <td><h3>Versión del producto</h3></td>
    <td><h3>Cambios</h3></td>
    <td><h3>Fecha de lanzamiento</h3></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.2</h4></td>
    <td><h4>Inicial</h4></td>
    <td><h4>Oct 2011</h4></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.3</h4></td>
    <td><h4>Cambiar la distribución y la cantidad de conectores Grove</h4></td>
    <td><h4>Aug 2012</h4></td>
  </tr>  
  <tr>
    <td><h4>Base Shield V2.0</h4></td>
    <td><h4>Cambiar la distribución y la cantidad de conectores Grove, así como un interruptor de alimentación para habilitar tanto 3.3V como 5V.</h4></td>
    <td><h4>Mar 2014</h4></td>
  </tr>
  </tbody></table>

## Especificación

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parámetro</h3></td>
    <td><h3>Valor/Rango</h3></td>
  </tr>
  <tr>
    <td><h4>Tensión de funcionamiento</h4></td>
    <td><h4>3.⅗V</h4></td>
  </tr>
  <tr>
    <td><h4>Temperatura de funcionamiento</h4></td>
    <td><h4>-25℃ a +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>Puertos analógicos</h4></td>
    <td><h4>4</h4></td>
  </tr>  
  <tr>
    <td><h4>Puertos digitales</h4></td>
    <td><h4>7</h4></td>
  </tr>
  <tr>
    <td><h4>Puertos UART</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Puertos I2C</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Tamaño</h4></td>
    <td><h4>69mm x53mm</h4></td>
  </tr>
  </tbody></table>

## Placas compatibles

La Base Shield está probada y es totalmente compatible con las siguientes placas:

- Arduino Uno (todas las revisiones)/Seeeduino (V4 y V4.2)
- Arduino Mega/Seeeduino Mega
- Arduino Zero (M0)/Seeeduino Lorawan
- Arduino Leonardo/Seeeduino Lite
- Arduino 101
- Arduino Due 3.3V
- Intel Edison 5V
- Linkit One

:::caution
Los pines I2C predeterminados de Grove Base Shield son D70/D71, pero el `Wire` I2C predeterminado de Arduino DUE está definido como D20/D21, por lo que cuando se usan ambos juntos, no podrás utilizar correctamente los pines I2C de la placa de expansión si utilizas la definición `Wire`, necesitas usar `Wire1`.
:::

## Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/hardware_overview.jpg" alt="pir" width={600} height="auto" /></p>

- **1-Puertos analógicos**: incluye 4 puertos analógicos, A0, A1, A2 y A3.
- **2-Puertos digitales**: incluye 7 puertos digitales, D2, D3, D4, D5, D6, D7 y D8.
- **3-Puerto UART**: 1 puerto UART.
- **4-Puertos I2C**: 4 puertos I2C.
- **5-Interruptor de alimentación**: cuando uses Arduino UNO con Base Shield v2, por favor pon el interruptor en la posición de 5V; mientras uses Seeeduino Arch con Base Shield v2, por favor pon el interruptor en 3.3V.
- **6-Botón de reinicio**: reinicia la placa Arduino.
- **7-LED PWR**：El LED verde se enciende cuando se alimenta.
- **8-P1, P2**：por favor suelda las almohadillas P1 y P2 si utilizas Base Shield v2 con Seeeduino V3.
- **Dimensiones**: 2.1 * 2.7 pulgadas  

## Primeros pasos

### Hardware

- Paso 1. Prepara los siguientes elementos:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4.2</h3></td>
    <td><h3>Base Shield</h3></td>
    <td><h3>Grove - Buzzer</h3></td>
    <td><h3>Grove - Button</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Consigue uno ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Consigue uno ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>Consigue uno ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>Consigue uno ahora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Paso 2. Conecta Grove - Buzzer al puerto D3 de la Base Shield.
- Paso 3. Conecta Grove - Button al puerto D2 de la Base Shield.
- Paso 4. Inserta la Base Shield en Seeeduino.
- Paso 5. Conecta Seeeduino al PC mediante un cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-3.png" alt="pir" width={600} height="auto" /></p>

### Software

- Paso 1. Copia el siguiente código en Arduino IDE y súbelo a Seeeduino.

```cpp
const int button = 2;       // connect a button
const int buzzer = 3;       // connect a buzzer
void setup()
{
    pinMode(button, INPUT); //set button as an INPUT device
    pinMode(buzzer, OUTPUT);   //set LED as an OUTPUT device
}
void loop()
{
    int btn = digitalRead(button); //read the status of the button
    digitalWrite(buzzer, btn);
    delay(10);
}
```

- Paso 2. Pulsa el botón y oiremos el zumbador.

## Preguntas frecuentes (FAQ)

Haz clic [aquí](http://support.seeedstudio.com/knowledgebase/articles/1826443-base-shield-v2-sku-103030000) para ver todas las preguntas frecuentes de Base Shield V2.

## Visor online del esquema

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Descargar Wiki en PDF](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.pdf)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
