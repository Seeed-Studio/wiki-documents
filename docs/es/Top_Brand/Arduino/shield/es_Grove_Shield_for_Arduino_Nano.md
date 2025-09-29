---
description: Grove_Shield_for_Arduino_Nano
title: Shield Grove para Arduino Nano

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Shield_for_Arduino_Nano
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-front.png" alt="pir" width={600} height="auto" /></p>
El Shield Grove para Arduino Nano te proporciona una forma sencilla de conectar con Arduino Nano y también con Seeeduino Nano. Este shield te ayuda a deshacerte de la protoboard y los cables de puente al extraer los pines de la placa madre y expandir a 8 conectores Grove. Este shield extrae los pines de la placa madre y se expande a 8 conectores Grove, incluyendo 3 conectores Grove digitales, 3 conectores Grove analógicos, 1 conector Grove I2C, y 1 conector Grove UART.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificaciones

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parámetro</h3></td>
    <td><h3>Valor/Rango</h3></td>
  </tr>
  <tr>
    <td><h4>Temperatura de Operación</h4></td>
    <td><h4>-25℃ a +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>Puertos Analógicos</h4></td>
    <td><h4>3</h4></td>
  </tr>  
  <tr>
    <td><h4>Puertos Digitales</h4></td>
    <td><h4>3</h4></td>
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
    <td><h4>45mm x40mm</h4></td>
  </tr>
  </tbody></table>

Grove Shield V1.0 a V1.1, compatible con la placa de desarrollo Arduino Nano 33 series.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/change.png" alt="pir" width={600} height="auto" /></p>

**Nota de cambio V1.1**: Añadir interruptor VCC 3.3V/5V

Hasta ahora, Grove Shield ha sido actualizado a la versión v1.3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/UUXvr7pmnK.png" alt="pir" width={350} height="auto" /></p>

**Nota de cambio V1.3**: La versión V1.3 del Grove Shield corta los cables que conectan los pines RST y RSE en ambos lados.

## Placas Compatibles

Lista de soporte V1.0:

- [Seeeduino nano](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)
- Arduino nano

Lista de soporte V1.1:

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*

Lista de soporte V1.3:

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*
- Arduino ESP32 Nano

:::caution
Para trabajar con placas de la serie Arduino 33, por favor cambie la alimentación VCC a 3.3V. ¡Si la alimentación VCC se cambia a 5V, la placa de desarrollo puede dañarse!
:::

## Descripción del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-back-rr.jpg" alt="pir" width={600} height="auto" /></p>

- **1-Puertos Analógicos**: incluye 3 puertos analógicos, A0, A2, A6.
- **2-Puertos Digitales**: incluye 3 puertos digitales, D2, D4, D6.
- **3-Puerto UART**: 1 puerto UART.
- **4-Puertos I2C**: 1 puerto I2C.

## Primeros Pasos

### Hardware

- Paso 1. Prepare los siguientes elementos:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino Nano</h3></td>
    <td><h3>Grove Shield para Arduino Nano</h3></td>
    <td><h3>Grove - Buzzer</h3></td>
    <td><h3>Grove - Button</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-front.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-wiki.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank"><span>Obtener UNO Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><span>Obtener UNO Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>Obtener UNO Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>Obtener UNO Ahora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Paso 2. Conecte Grove - Buzzer al puerto D4 del Grove Shield
- Paso 3. Conecte Grove - Button al puerto D2 del Grove Shield
- Paso 4. Conecte el Grove Shield para Arduino Nano al Seeeduino nano
- Paso 5. Conecte el Seeeduino a la PC a través de un cable USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/hardwareconnect.jpg" alt="pir" width={600} height="auto" /></p>

### Software

- Paso 1. Copie el código de abajo al IDE de Arduino y súbalo al Seeeduino.

```cpp
const int button = 2;       // connect a button
const int buzzer = 4;       // connect a buzzer
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

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Grove shield para Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip)
- **[PDF]** [Grove shield para Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.pdf)
- **[SCH]** [Grove shield para Arduino Nano SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.sch)
- **[BRD]** [Grove shield para Arduino Nano BRD](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.brd)

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
