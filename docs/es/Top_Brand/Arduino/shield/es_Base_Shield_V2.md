---
description: Base_Shield_V2
title: Base Shield V2

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Base_Shield_V2
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" alt="pir" width={600} height="auto" /></p>

Arduino Uno es la placa Arduino más popular hasta ahora, sin embargo a veces es frustrante cuando tu proyecto requiere muchos sensores o LEDs y tus cables de puente están desordenados. El propósito de crear el Base Shield es ayudarte a deshacerte de la protoboard y los cables de puente. Con los ricos conectores grove en la placa base, ¡puedes agregar todos los módulos grove al Arduino Uno convenientemente! La distribución de pines del Base Shield V2 es la misma que Arduino Uno R3.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/base-shield-v13-p-1378.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Versión

<table align="center">
  <tbody>
  <tr>
    <td><h3>Versión del Producto</h3></td>
    <td><h3>Cambios</h3></td>
    <td><h3>Fecha de Lanzamiento</h3></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.2</h4></td>
    <td><h4>Inicial</h4></td>
    <td><h4>Oct 2011</h4></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.3</h4></td>
    <td><h4>Cambiar el diseño y cantidad de conectores Grove</h4></td>
    <td><h4>Ago 2012</h4></td>
  </tr>  
  <tr>
    <td><h4>Base Shield V2.0</h4></td>
    <td><h4>Cambiar el diseño y cantidad de conectores Grove, así como un interruptor de alimentación para habilitar tanto 3.3V como 5V.</h4></td>
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
    <td><h4>Voltaje de operación</h4></td>
    <td><h4>3.⅗V</h4></td>
  </tr>
  <tr>
    <td><h4>Temperatura de operación</h4></td>
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

## Placas Compatibles

El Base Shield ha sido probado y es totalmente compatible con las siguientes placas:

- Arduino Uno(todas las revisiones)/Seeeduino(V4&V4.2)
- Arduino Mega/Seeeduino Mega
- Arduino Zero(M0)/Seeeduino Lorawan
- Arduino Leonardo/Seeeduino Lite
- Arduino 101
- Arduino Due 3.3V
- Intel Edison 5V
- Linkit One

:::caution
Los pines I2C predeterminados del Grove Base Shield son D70/D71, pero el Wire I2C predeterminado de Arduino DUE está definido como D20/D21, por lo que cuando uses ambos juntos, no podrás usar los pines I2C de la placa de expansión correctamente si usas la definición `Wire`, necesitas usar `Wire1`.
:::

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/hardware_overview.jpg" alt="pir" width={600} height="auto" /></p>

- **1-Puertos Analógicos**: incluye 4 puertos analógicos, A0, A1, A2 y A3.
- **2-Puertos Digitales**: incluye 7 puertos digitales, D2, D3, D4, D5, D6, D7 y D8.
- **3-Puerto UART**: 1 puerto UART.
- **4-Puertos I2C**: 4 puertos I2C.
- **5-Interruptor de Alimentación**: cuando uses Arduino UNO con Base Shield v2, por favor gira el interruptor a la posición 5v; Mientras uses Seeeduino Arch con Base Shield v2, por favor gira el interruptor a 3.3v.
- **6-Botón de Reset**: reinicia la placa arduino.
- **7-LED PWR**：El LED Verde se enciende cuando se alimenta.
- **8-P1, P2**：por favor solda las almohadillas P1 y P2， si usas Base Shield v2 con Seeeduino V3.
- **Dimensión**: 2.1 * 2.7 pulgadas  

## Primeros Pasos

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
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Obtener UNO Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Obtener UNO Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>Obtener UNO Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>Obtener UNO Ahora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Paso 2. Conecta Grove - Buzzer al puerto D3 del Base Shield.
- Paso 3. Conecta Grove - Button al puerto D2 del Base Shield.
- Paso 4. Conecta el Base Shield al Seeeduino.
- Paso 5. Conecta el Seeeduino a la PC a través de un cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-3.png" alt="pir" width={600} height="auto" /></p>

### Software

- Paso 1. Copia el código de abajo al IDE de Arduino y súbelo al Seeeduino.

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

- Paso 2. Presiona el botón y escucharemos el zumbador.

## FAQ

Por favor haz clic [aquí](http://support.seeedstudio.com/knowledgebase/articles/1826443-base-shield-v2-sku-103030000) para ver todas las preguntas frecuentes del Base Shield V2.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Descargar PDF de Wiki](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.pdf)

## Proyecto

**Smart Plant IoT**: Riego automático de la planta y seguimiento de la salud de la planta a través de Helium y Microsoft Azure IoT.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/Nyceane/smart-plant-iot-59cbc3/embed" width={350} />

**Kit de Monitoreo Ambiental Alimentado por Energía Solar**: Un kit de código abierto alimentado por energía solar para monitorear la calidad del aire, nivel de sonido, humedad y temperatura.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed" width={350} />

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
