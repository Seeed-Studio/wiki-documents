---
description: Grove - Receptor Infrarrojo
title: Grove - Receptor Infrarrojo
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Infrared_Receiver
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/Grove-Infrared_Receiver.jpg" /></div>

El Receptor Infrarrojo se utiliza para recibir señales infrarrojas y también para la detección de control remoto. Hay un detector IR en el Receptor Infrarrojo que se utiliza para obtener la luz infrarroja emitida por el Emisor Infrarrojo. El detector IR tiene un demodulador interno que busca IR modulado a 38 KHz. El Receptor Infrarrojo puede recibir señales bien dentro de 10 metros. Si es más de 10 metros, el receptor puede no obtener las señales. A menudo usamos los dos Groves -el Receptor Infrarrojo y el [Grove - Emisor Infrarrojo](https://wiki.seeedstudio.com/es/Grove-Infrared_Emitter) para trabajar juntos.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## Versión

Versión del Producto | Cambios | Fecha de Lanzamiento
--|--|--
Grove - Receptor Infrarrojo v1.0 | Inicial | Nov. 01 2015
Grove - Receptor Infrarrojo v1.1 | Cambio en la Serigrafía  | Jul. 24 2016

## 　Especificaciones

- Voltaje: 3.3-5V
- Distancia:10m

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

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
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)|

- **Paso 2.** Conecta el Grove - Emisor Infrarrojo al puerto **D3** de un Grove-Base Shield.

- **Paso 3.** Conecta el Grove - Receptor Infrarrojo al puerto **D2** del otro Grove-Base Shield.

- **Paso 4.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 5.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg" /></div>

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

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png" /></div>

Para el **Ejemplo de Recepción**, el Monitor Serie debería verse así:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png" /></div>

> Para un uso más avanzado de la librería, por favor consulta [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR).

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/res/Grove-Infrared_Receiver_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]**  [Grove - Archivos eagle del Receptor Infrarrojo](https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/res/Grove-Infrared_Receiver_eagle_files.zip)
- **[Lib]**  [Librería de Envío y Recepción IR](https://github.com/Seeed-Studio/IRSendRev)
- **[Lib]**  [Librería de Recepción IR para LinkIt ONE](https://github.com/Seeed-Studio/IR_Recv_LinkIt_ONE)
- **[Pdf]**  [Hoja de Datos TSOP282](http://www.vishay.com/docs/82491/tsop382.pdf)

## Proyectos

**Comunicación IR LaunchPad a LaunchPad**: ¡Envía texto de un LaunchPad a otro usando el emisor y receptor IR Grove!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
