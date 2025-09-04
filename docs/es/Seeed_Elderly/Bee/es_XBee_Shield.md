---
description: XBee Shield
title: XBee Shield
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XBee_Shield
last_update:
  date: 1/13/2023
  author: shuxu hu
---
 ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbshieldn2.jpg) ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbshield_bottom.jpg)

Un **Xbee shield** permite que una placa **Arduino** o [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) se comunique de forma inalámbrica usando **módulos compatibles con Bee** (como Zigbee o BlueTooth Bee). Está diseñado para ser usado con **módulo Xbee de MaxStream**. Puede ser usado como un **Puerto Serie** / **reemplazo USB.** Se usa para conectar dos **Seeeduinos** usando **Zigbee** / **Bluetooth Bee** o conectar un **Seeeduino** con PC de forma inalámbrica. Dos interruptores de palanca deciden cómo los pines **Rxd** y **Txd** de los módulos Bee se conectan a los pines de **Seeeduino**. Estos dos interruptores proporcionan opciones para conectar las líneas **RxD** y **TxD** de los Módulos Bee al **Puerto Serie Hardware de Seeduino** o **pines digitales** **11** y **12** o pines **RxD** y **Txd** de **FTDI**.

 **Modelo:[WLS114A0P](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)**

El **XBee®_Shield** de Seeed Studio se deriva del [Arduino Xbee shield](https://arduino.cc/en/Main/ArduinoXbeeShield), con las siguientes características:

* Forma más pequeña
* Paquete SMT para la mayoría de los componentes
* Bajo costo

Para usar X-CTU con [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/), por favor sube el siguiente sketch

```c
void setup()
{
  DDRB=0;
  DDRC=0;
  DDRD=0;
}

void loop()
{

}  
```

## Características

1. Placa de 31mm X 41mm.
2. Comunicación con Arduino/Seeeduino
    * A través de los pines 11, 12 Puerto Serie por Software o
    * A través del Puerto Serie por hardware

3. Los módulos Xbee pueden configurarse mediante X-CTU vía USB
4. Acceso a todos los pines

## Ideas de Aplicación

<!-- *   Communicate two Seeeduinos / Arduinos Wirelessly using Bee Modules (**Xbee**,[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/),[RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)) -->
* Comunicar Seeeduino / Arduino a PC de forma inalámbrica usando Módulos Bee.
* Conectar **GPS Bee** a Arduino / Seeeduino

## Precauciones

* Coloque los interruptores de palanca en la posición correcta antes de conectar a los Módulos Bee o Arduinos.

## Esquemático

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbee_Shield_Schematic.jpg)

## Especificación

Ver [características](https://wiki.seeedstudio.com/es/XBee_Shield/#features "XBee_Shield#Features") arriba.

## Dimensiones Mecánicas

XBee® Shield tiene un tamaño de 3.1cm X 4.1cm.

## Uso

Un **módulo Bee** se conecta a Arduino / Seeeduino a través del XBee Shield. En caso de un Seeeduino, coloque el interruptor de voltaje de operación en la posición de 3.3V. Normalmente los módulos Bee se conectan a través del Puerto Serie por Software configurando las posiciones de los interruptores de palanca (**TOG_1** y **TOG_2**) al **lado izquierdo**. Por favor consulte las tablas a continuación para diferentes configuraciones.

### Instalación de Hardware

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Seeeduino_XBeeShield_XBeePro.jpg) ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

#### Contorno del Xbee Shield y Posición del Interruptor de Palanca

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/XBee_Shield_Outline.jpg)

<table>
<caption>Arduino</caption>
<tr>
<th>TOG_1</th>
<th>TOG_2</th>
<th>Xbee Tx Conectado a</th>
<th>Xbee Rx Conectado a</th>
</tr>
<tr>
<td width="200">Izquierda</td>
<td width="200">Izquierda</td>
<td width="300">Pin digital 11</td>
<td width="300">Pin digital 12</td>
</tr>
<tr>
<td>Izquierda</td>
<td>Derecha</td>
<td>FT232 RxD</td>
<td>FT232 TxD</td>
</tr>
<tr>
<td>Derecha</td>
<td>Izquierda</td>
<td>Pin digital 11</td>
<td>Pin digital 12</td>
</tr>
<tr>
<td>Derecha</td>
<td>Derecha</td>
<td>Atmege RxD</td>
<td>Atmege TxD</td>
</tr>
</table><table>
<caption>Arduino Mega</caption>
<tr>
<th>TOG_1</th>
<th>TOG_2</th>
<th>Xbee Tx Conectado a</th>
<th>Xbee Rx Conectado a</th>
</tr>
<tr>
<td width="200">Izquierda</td>
<td width="200">Izquierda</td>
<td width="300">Pin digital 51</td>
<td width="300">Pin digital 50</td>
</tr>
<tr>
<td>Izquierda</td>
<td>Derecha</td>
<td>FT232 RxD</td>
<td>FT232 TxD</td>
</tr>
<tr>
<td>Derecha</td>
<td>Izquierda</td>
<td>Pin digital 51</td>
<td>Pin digital 50</td>
</tr>
<tr>
<td>Derecha</td>
<td>Derecha</td>
<td>Atmege RxD0</td>
<td>Atmege TxD0</td>
</tr>
</table>


### Probando comandos AT en Bees

Cree un nuevo sketch con el siguiente código y descárguelo en su placa Arduino.  

```c
//Serial Relay - Arduino will patch a
//serial link between the computer and the Bee Shield
//at 9600 bps 8-N-1
//Computer is connected to Hardware UART
//Bee Shield is connected to the Software UART

#include <NewSoftSerial.h>
#define RxD 11
#define TxD 12

NewSoftSerial mySerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    mySerial.begin(9600);               // the Bee baud rate  
    Serial.begin(9600);                 // the terminal baud rate  
}

void loop()
{
    if(Serial.available())
    {
       mySerial.print((unsigned char)Serial.read());
     }
    else  if(mySerial.available())
    {
       Serial.print((unsigned char)mySerial.read());
     }  

}
```

 Después de esto, abre tu software de terminal serie favorito, elige el puerto COM para Arduino, configúralo para operar a la velocidad de baudios predeterminada de tu Bee (el predeterminado de XBee es 9600 8-N-1), conéctate y envía los comandos. Intenta enviar "+++" (sin las comillas) para el módulo XBee, a la placa Arduino. El XBee debería responder enviando de vuelta un "OK".

### Enviar AT Versión Actualizada para V 1.0  

El código anterior puede haber funcionado en versiones anteriores pero la biblioteca SoftwareSerial ahora es parte del núcleo. El siguiente código está tomado casi directamente del [manual de SoftwareSerial de Arduino.](https://arduino.cc/en/Reference/SoftwareSerial)

```c
/*
Example from Arduino SoftwareSerial tutorial
 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(11, 12); // RX, TX

void setup()  
{
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() // run over and over
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

Sube este código al Arduino que aloja el Xbee Shield, inicia el Monitor Serie y en ese momento el puerto serie del Arduino estará conectado por radio a cualquier otro radio xbee que esté operando actualmente--cualquier cosa que escribas en el monitor serie será enviada a los otros radios y viceversa.

### Programación  

El siguiente sketch configura [Bluetooth Bee](https://seeeddoc.github.io/Bluetooth_Bee/) como **Dispositivo Esclavo** y espera solicitudes de conexión desde PC u otro dispositivo maestro. Bluetooth Bee está conectado a Seeeduino a través de **XBee®_Shield** como se muestra arriba.

```
/*
BluetoothBee Demo Code - Flowcontrol Based Implementation
2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R

This demo code is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

For more details about the product please check https://www.seeedstudio.com/depot/

Upload this sketch to Seeeduino and press reset*/

#include <NewSoftSerial.h>   //Software Serial Port
#define RxD 11
#define TxD 12
#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
pinMode(RxD, INPUT);
pinMode(TxD, OUTPUT);
setupBlueToothConnection();  
}

void loop()
{
//Typical Bluetoth command - response simulation:  
//Type 'a' from PC Bluetooth Serial Terminal
//See Wiki for instructions  

  if(blueToothSerial.read() == st0">'a')
  {
    blueToothSerial.println(st0">"You are connected"); //You can     write you BT communication logic here
  }  
}

void setupBlueToothConnection()
{
  blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
  delay(1000);
  sendBlueToothCommand(\r\n+STWMOD=0\r\n");
  sendBlueToothCommand(\r\n+STNA=SeeeduinoBluetooth\r\n");
  sendBlueToothCommand(\r\n+STAUTO=0\r\n");
  sendBlueToothCommand(\r\n+STOAUT=1\r\n");
  sendBlueToothCommand(\r\n +STPIN=0000\r\n");
  delay(2000); // This delay is required.
  sendBlueToothCommand(\r\n+INQ=1\r\n");
  delay(2000); // This delay is required.
}  


//Checks if the response "OK" is received
void CheckOK()
{
  char a,b;

  while(1)
  {
    if(blueToothSerial.available()) { a = blueToothSerial.read();   if(st0">'O' == a)
    {

      // Wait for next character K. available() is required in some cases, as K is not immediately available.
      while(blueToothSerial.available())
      {
         b = blueToothSerial.read();
         break;
      }

      if('K' == b)
      {
        break;
      }
    }
  }
}  

  while( (a = blueToothSerial.read()) sy3">!= sy2">-1)
  {
     //Wait until all other response chars are received
  }
}


void sendBlueToothCommand(char command[])
{
   blueToothSerial.print(command);
   CheckOK();
}
```

Consulta **Programación de Bluetooth Bee** para más información.

## FAQ  

Por favor lista tu pregunta aquí (si tienes alguna).

## Soporte  

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o **desear** discutir.

## Seguimiento de Versiones  

<table>
<tbody>
<tr>
<th>Revisión</th>
<th>Descripciones</th>
<th>Fecha de Lanzamiento</th>
</tr>
<tr style={{fontSize: '90%'}}>
<td width={300}>XBee® Shield V1.1</td>
<td width={500}>nueva versión por Seeedstudio</td>
<td width={200}>Jul 06, 2009</td>
</tr>
</tbody>
</table>

## Rastreador de Errores  

El Rastreador de Errores es el lugar donde puedes enviar cualquier error que creas haber encontrado durante el uso. Por favor escribe lo que quieres decir, tus respuestas nos ayudarán a mejorar nuestros productos.

## Idea Adicional  

La Idea Adicional es el lugar para escribir tus ideas de proyecto sobre este producto, u otros usos que hayas encontrado. O puedes escribirlos en la página de Proyectos.

## Cómo comprar  

Haz clic aquí para comprar : [https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)

## Licencias  

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## Ver también  

[Documentación de Bluetooth Bee](/Bluetooth_Bee "Bluetooth_Bee") demostrando el uso del **XBee®_Shield**

## Enlaces Externos  

Enlaces a páginas web externas que proporcionan más ideas de aplicación, documentos/hojas de datos o librerías de software.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XBee-Shield/res/Eagle_XBee_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos  

* **[Arduino]**    [Página de Arduino Xbee Shield](https://arduino.cc/en/Main/ArduinoXbeeShield)

* **[Eagle]**    [eagle para Xbee_Shield_v1.0](https://files.seeedstudio.com/wiki/XBee-Shield/res/Eagle_XBee_Shield_v1.0.zip)

* **[PDF]**[XBee_Shield pdf](https://files.seeedstudio.com/wiki/XBee-Shield/res/XBee_Shield.pdf)

* **[Eagle]**[XBee_Shield sch](https://files.seeedstudio.com/wiki/XBee-Shield/res/XBee_Shield.sch)

* **[Eagle]**    [eagle para Xbee_Shield_v1.1](https://files.seeedstudio.com/wiki/XBee-Shield/res/Elage_xbee_shield_v1.1.zip)
* **[PDF]**[Xbee_shield_v1.1 pdf](https://files.seeedstudio.com/wiki/XBee-Shield/res/Xbee_shield_v1.11.pdf)

* **[EAGLE]**[Xbee_shield_v1.1 sch](https://files.seeedstudio.com/wiki/XBee-Shield/res/Xbee_shield_v1.11.sch)

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
