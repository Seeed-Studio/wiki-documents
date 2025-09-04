---
title: Grove - Emisor Infrarrojo
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Infrared_Emitter/
slug: /es/Grove-Infrared_Emitter
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/main.jpg)

El Emisor Infrarrojo se utiliza para transmitir señales infrarrojas a través de un LED infrarrojo, mientras que hay un **receptor infrarrojo** para obtener las señales en el otro lado. Un LED infrarrojo es como cualquier otro LED, con su color centrado alrededor de 940nm. No solo podemos usar el emisor para transmitir datos o comandos, sino también para emular controles remotos para controlar tus electrodomésticos usando un Arduino. El Emisor Infrarrojo puede transmitir señales de manera confiable hasta 10 metros. Más allá de 10 metros, el receptor puede no recibir las señales. A menudo usamos los dos Groves -el [Receptor Infrarrojo](https://wiki.seeedstudio.com/es/Grove-Infrared_Receiver) y el Grove - Emisor Infrarrojo para trabajar juntos.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Versión

Versión del Producto | Cambios | Fecha de Lanzamiento
--|--|--
Grove - Emisor Infrarrojo v1.0 | Inicial | Nov. 01 2015
Grove - Emisor Infrarrojo v1.1 | Cambiar la ubicación del tubo transmisor infrarrojo  | Jul. 24 2016
Grove - Emisor Infrarrojo v1.2 | Cambiar el valor de C1 para hacer la alimentación más estable  | Dec. 14 2016

## Aplicación

- Unidades de control remoto infrarrojo con altos requerimientos de potencia
- Sistemas de transmisión de aire libre
- Fuente infrarroja para contadores ópticos y lectores de tarjetas

## Especificación

| Parámetro               | Valor/Rango   |
|-------------------------|---------------|
| Voltaje de operación    | 3.3/5V        |
| Longitud de onda pico   | 940nm         |
| Ángulo de media intensidad | ϕ = ± 17°     |
| Intensidad Radiante     | 72 mW/sr      |
| Distancia               | 10 metro(MÁX) |
| Temperatura de Operación | -40℃ a +80℃  |
| Tamaño                  | 20mmX20mm     |

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

El Grove - Emisor Infrarrojo puede enviar datos mientras que el Grove - Receptor Infrarrojo los recibirá.

### Jugar Con Arduino

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove - Emisor Infrarrojo | Grove - Receptor Infrarrojo
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)|

- **Paso 2.** Conecta el Grove - Emisor Infrarrojo al puerto **D3** de un Grove-Base Shield.

- **Paso 3.** Conecta el Grove - Receptor Infrarrojo al puerto **D2** del otro Grove-Base Shield.

- **Paso 4.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 5.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Emisor Infrarrojo |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D3            | Amarillo                  |
| Seeeduino       | Grove - Receptor Infrarrojo |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D2            | Amarillo                  |


#### Software

- **Paso 1.** Descarga el [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) desde Github.

- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

Copia el siguiente **Código de Ejemplo de Envío** al IDE de Arduino:

**Código de Ejemplo de Envío:**

```cpp
/* send.ino Example sketch for IRLib2
 *  Illustrates how to send a code.
 */
#include <IRLibSendBase.h>    // First include the send base
//Now include only the protocols you wish to actually use.
//The lowest numbered protocol should be first but remainder 
//can be any order.
#include <IRLib_P01_NEC.h>    
#include <IRLib_P02_Sony.h>   
#include <IRLibCombo.h>     // After all protocols, include this
// All of the above automatically creates a universal sending
// class called "IRsend" containing only the protocols you want.
// Now declare an instance of that sender.

IRsend mySender;

#define IR_SEND_PWM_PIN D3

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  Serial.println(F("Every time you press a key is a serial monitor we will send."));
}

void loop() {
  if (Serial.read() != -1) {
    //send a code every time a character is received from the 
    // serial port. You could modify this sketch to send when you
    // push a button connected to an digital input pin.
    //Substitute values and protocols in the following statement
    // for device you have available.
    mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits
    //mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f
    Serial.println(F("Sent signal."));
  }
}

```

Copia el siguiente **Código de Ejemplo de Recepción** al IDE de Arduino:

**Código de Ejemplo de Recepción:**

```cpp
/* rawR&cv.ino Example sketch for IRLib2
 *  Illustrate how to capture raw timing values for an unknow protocol.
 *  You will capture a signal using this sketch. It will output data the 
 *  serial monitor that you can cut and paste into the "rawSend.ino"
 *  sketch.
 */
// Recommend only use IRLibRecvPCI or IRLibRecvLoop for best results
#include <IRLibRecvPCI.h> 

IRrecvPCI myReceiver(2);//pin number for the receiver

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  myReceiver.enableIRIn(); // Start the receiver
  Serial.println(F("Ready to receive IR signals"));
}

void loop() {
  //Continue looping until you get a complete signal received
  if (myReceiver.getResults()) { 
    Serial.println(F("Do a cut-and-paste of the following lines into the "));
    Serial.println(F("designated location in rawSend.ino"));
    Serial.print(F("\n#define RAW_DATA_LEN "));
    Serial.println(recvGlobal.recvLength,DEC);
    Serial.print(F("uint16_t rawData[RAW_DATA_LEN]={\n\t"));
    for(bufIndex_t i=1;i<recvGlobal.recvLength;i++) {
      Serial.print(recvGlobal.recvBuffer[i],DEC);
      Serial.print(F(", "));
      if( (i % 8)==0) Serial.print(F("\n\t"));
    }
    Serial.println(F("1000};"));//Add arbitrary trailing space
    myReceiver.enableIRIn();      //Restart receiver
  }
}
```

- **Paso 7.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo.

Para el **Ejemplo de Envío**, el Serie debería verse así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png" /></div>

Para el **Ejemplo de Recepción**, el Monitor Serie debería verse así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png" /></div>

> Para un uso más avanzado de la librería, por favor consulta [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR).

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]**  [Archivos eagle del Grove-Infrared Emitter](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip)
- **[Lib]**  [Librería de Envío y Receptor IR](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev)
- **[Pdf]**  [Hoja de Datos TSAL6200](http://www.vishay.com/docs/81010/tsal6200.pdf)

## Proyectos

**Comunicación IR LaunchPad a LaunchPad**: ¡Envía texto de un LaunchPad a otro usando el emisor y receptor IR Grove!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
