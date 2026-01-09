---
description: Grove - Sensor de Vibración(SW-420)
title: Grove - Sensor de Vibración(SW-420)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Vibration_Sensor_SW-420
sku: 101020586
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/main.jpg" alt="pir" width={600} height="auto" /></p>

El Grove - Sensor de Vibración (SW-420) es un sensor de vibración no direccional de alta sensibilidad. Cuando el módulo está estable, el circuito se enciende y la salida es alta. Cuando ocurre movimiento o vibración, el circuito se desconectará brevemente y la salida será baja. Al mismo tiempo, también puedes ajustar la sensibilidad según tus propias necesidades.

En resumen, este es un módulo perfecto para sensor de vibración o inclinación.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html)

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Sensor de Vibración (SW-420) | Inicial                                                                                               | Sep 2018      |

## Características

- No direccional
- Alta sensibilidad
- Responde a vibración, inclinación
- Resistente al agua
- Resistencia a la compresión

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de operación|3.3V / 5V|
|Interfaz|Digital|
|Tamaño|L: 40mm W: 20mm H: 10mm|
|Peso|4.3g|
|Tamaño del paquete|L: 140mm W: 85mm H: 10mm|
|Peso bruto|10g|

## Aplicaciones

- Alarma antirrobo para automóvil, bicicleta, motocicleta
- Control de juegos
- Detección de vibraciones

## Descripción del Hardware

### Mapa de Pines

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>

### Esquemático

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/Schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/Schematic.jpg" alt="pir" width={600} height="auto" /></p>

Primero, comencemos con el **SW1** que está en la esquina inferior izquierda. En realidad, el **SW1** es el módulo de vibración **SW-420**. Cuando el módulo está en estado estable, el módulo está encendido. El **Pin2** de **U1A** está conectado al **GND** a través de **SW1**.

El **VR1** es el potenciómetro, el **Pin2** del potenciómetro está conectado al **Pin3** del **U1A**

El **U1A** es un [comparador](https://en.wikipedia.org/wiki/Comparator). Para los comparadores, el comportamiento de salida sigue esta lógica:

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0'}}>
<strong>V<sub>out</sub> = Alto cuando V<sub>+</sub> > V<sub>-</sub></strong><br/>
<strong>V<sub>out</sub> = Bajo cuando V<sub>+</sub> < V<sub>-</sub></strong>
</div>

**V+** se conecta al **Pin3**, **V-** se conecta al **Pin2**, **V<sub>out</sub>** se conecta al **Pin1**.

Para el **V+** puedes ajustarlo rotando el potenciómetro, por ejemplo, podemos hacerlo VCC/2.

Para el **V-**, depende del **SW1(SW-420)**:

- Si este módulo está en estado estable, el **SW1** está encendido, el Pin2 de **U1A** está conectado al **GND** a través de **SW1**. Será:

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '15px 0'}}>
<strong>V<sub>-</sub> = 0V</strong><br/>
<strong>V<sub>+</sub> = VCC/2</strong><br/>
<strong>Por lo tanto: V<sub>out</sub> = Alto</strong>
</div>

- Si el módulo vibra o se inclina, el **SW1** se apagará, el voltaje de **V-** será elevado por el **VCC** a través de R1. Una vez que el **V-** sea mayor que VCC/2, entonces:

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '15px 0'}}>
<strong>V<sub>-</sub> > VCC/2</strong><br/>
<strong>V<sub>+</sub> = VCC/2</strong><br/>
<strong>Por lo tanto: V<sub>out</sub> = Bajo</strong>
</div>

Ahora puedes configurar el **V+** para ajustar la sensibilidad, solo recuerda: mientras menor sea el voltaje de **V+**, mayor será la sensibilidad😆

## Plataformas Soportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Sensor de Vibración|Grove - Buzzer|
|--------------|-------------|-----------------|----|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Sensor de Vibración (SW-420) al puerto **D2** del Base Shield.

- **Paso 2.** Conecta el Grove - Buzzer al puerto **D3** del Base Shield.

- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/connect.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/connect.JPG" alt="pir" width={600} height="auto" /></p>

:::note
        Si no tenemos el Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove - Sensor de Vibración         |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| NC           | Blanco                    |
| D2           | Amarillo                   |
| Seeeduino     |  Grove - Buzzer         |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| NC           | Blanco                    |
| D3           | Amarillo                   |

#### Software

:::note
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Abre tu Arduino IDE, inicia un nuevo sketch.

- **Paso 2.** Copia todo el código a continuación, o simplemente puedes hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en el nuevo sketch.

```cpp
// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;     // the number of the pushbutton pin
const int buzzer =  3;      // the number of the buzzer pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(buzzer, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(buzzer, LOW);
  } else {
    // turn LED off:
    digitalWrite(buzzer, HIGH);
  }
}
```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::success
    Si todo va bien, cada vez que te muevas, agites o inclines el Grove - Vibration Sensor, el Grove - buzzer sonará.
:::

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Vibration Sensor al puerto D2, y conecta un Grove - Buzzer al puerto D3 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/cc_Vibration_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/cc_Vibration_Sensor.png" alt="pir" width={600} height="auto" /></p>

Sube el programa a tu Arduino/Seeeduino.

:::success
    Cuando el código termine de subirse, el buzzer sonará cuando el sensor de vibración detecte vibración.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos eagle del Grove - Vibration Sensor (SW-420)](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip)
- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove_Vibration_Sensor_CDC_File.zip)

## Proyecto

Este es el Video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
