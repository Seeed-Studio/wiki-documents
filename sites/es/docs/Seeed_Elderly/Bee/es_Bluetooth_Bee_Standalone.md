---
description: Bluetooth Bee
title: Bluetooth Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bluetooth_Bee_Standalone
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/P3302883_02.jpg)

Ahorra ese Arduino extra que tienes por ahí para otro proyecto, este dispositivo dos-en-uno tiene el Arduino integrado. Bluetooth Bee con Arduino es una versión mejorada del Bluetooth Bee. Le agregamos un ATMEGA168 integrado para convertirlo en un Arduino completo mientras mantenemos la misma huella y conjunto de instrucciones que el Bluetooth Bee. Además, aún te permite apilarlo en XBee Carrier, XBee® Shield, y UartSBee para expansión o reprogramación.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)

## Características

---

* Huella pequeña
* Configuraciones y métodos de emparejamiento idénticos al Bluetooth Bee
* Puerto serie por software adoptado entre el módulo Bluetooth y ATMEGA168
* Permanece compatible con XBee Carrier, XBee® Shield, y UartsBee para expansión

### Características de Hardware

* Sensibilidad típica de -80dBm.
* Hasta +4dBm de potencia de transmisión RF.
* Modulación Bluetooth V2.0+EDR 3Mbps completamente calificada.
* Alimentación de 3.3v
* Antena PCB integrada.
* Desconectar y monitorear el Bluetooth vía Software.
* Conectores compatibles con xBee.

### Características de Software

* Usar el programa SoftSerial para comunicación.
* Velocidad de baudios por defecto: **38400**, Bits de datos:8, Bit de parada:1, Paridad:Sin paridad, Control de datos: tiene.
* Velocidades de baudios soportadas: 9600,19200,38400,57600,115200,230400,460800.
* Usar CTS y RTS para controlar el flujo de datos.
* Desconectar el Bluetooth vía un flanco ascendente en PC2
* Puerto de instrucción de estado PB2: bajo-desconectado, alto-conectado;
* PIO10 está conectado al led rojo, PIO11 está conectado al led azul. Cuando maestro y esclavo están emparejados, los leds rojo y azul parpadean 1 vez / 2s en intervalo, mientras que desconectado solo el led azul parpadea 2 veces/ s.
* Auto-conectar el último dispositivo al encender por defecto.
* Permitir conexión de dispositivo emparejado por defecto.
* PINCODE por defecto:"0000".
* Auto-reconectar en 30 min cuando se desconecta como resultado de estar fuera del rango de conexión.

## Ideas de Aplicación

---

* Módulo compatible con Arduino con comunicación Bluetooth.
<!-- *   Puerto Serie Bluetooth para PC cuando se conecta con [UartSBee](/es/UartSBee_V4) y se carga el programa SoftSerial al **ATMEGA168**. -->

:::caution
    *Se necesita alimentación de 3.3 V.
    *   Mientras se usa con UartSBee, configurar el voltaje de operación a 3.3V
    *   El comando para cambiar la velocidad de baudios es persistente incluso después del reinicio. Por lo tanto, recordar la velocidad de baudios para el próximo uso.
:::

## Definición de pines y especificaciones

---
Vista inferior:
 ![](https://files.seeedstudio.com/Grove-Red_LED/wiki/Bluetooth_Bee_Standalone/img/Bluetooth-standalone_pin.jpg)

* PD4 - PD7 = pines digitales 4 - 7 del IDE de Arduino  (5,6 PWM)

* PB0 , PB1 = pines digitales 8 , 9 del IDE de Arduino  (9   PWM)

* PC0 - PC3 = pines analógicos 0 - 3 del IDE de Arduino  (Nota: PC2 Desconecta el Bluetooth vía un flanco ascendente)

## Uso

---
<!-- Ejemplo : Usar Bluetooth Bee-Standalone para controlar un [Grove-Red_LED](/es/Grove-Red_LED) con XBee carrier. -->

* Paso 1

Conectar Grove-Red_LED y el módulo Bluetooth Bee-Standalone al XBee carrier así.

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone3.jpg)

* Paso 2

Escribir un programa con Arduino-IDE para leer información del puerto Softserial Bluetooth e identificar para apagar o encender el LED.

```
/*
BluetoothBee Demo Code - Flowcontrol Based Implementation
2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.

Author: Visweswara R      Modify:Joinj

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

*/


/* Upload this sketch to Seeeduino and press reset*/

#include <NewSoftSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    pinMode(5,OUTPUT);
    setupBlueToothConnection();
}

void loop()
{
    unsigned char control;
    unsigned char temp;
    while(temp!='4')  {
        temp=blueToothSerial.read();
    }
    Serial.println("You are connected");
    blueToothSerial.print("You are connected");      //You can write you BT communication logic here
    while(1)  {
        temp=blueToothSerial.read();
        switch(temp)  {
            case 'O':{while(temp!='N')  {temp=blueToothSerial.read();}  digitalWrite(5,HIGH);break;}
            case 'S':{while(temp!='H')  {temp=blueToothSerial.read();}  digitalWrite(5,LOW);break;}
            default:break;
        }
    }
}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeedBluetooth-st\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n +STPIN=0000\r\n");
    delay(2000); // This delay is required.
    sendBlueToothCommand("\r\n+INQ=1\r\n");
    delay(2000); // This delay is required.
}

//Checks if the response "OK" is received
void CheckOK()
{
    char a,b;
    while(1)
    {
        if(blueToothSerial.available())
        {
            a = blueToothSerial.read();

            if('O' == a)
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

    while( (a = blueToothSerial.read()) != -1)
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

* Paso 3

Conecta el portador XBee a la computadora con cable USB y sube el programa al **ATMEGA168** en el Bluetooth Bee-Standalone.

* Paso 4

Retira el cable USB del portador XBee y conecta la batería de 3.7 voltios al portador XBee de esta manera.

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone2.jpg)

* Paso 5

<!-- Use another Bluetooth Bee connect to the Bluetooth Bee-Standalone.How to connect? You can refer to [Bluetooth Bee](/es/Bluetooth_Bee).When you are connected,you can control the LED by another Bluetooth Bee.The LED will work when you send "ON" to Bluetooth Bee-Standalone and it will be off when you send "SH"(short for SHUT). -->

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone1.jpg)

## Ideas adicionales

---

* [Cómo probar tu Bluetooth Bee - Standalone](http://dejwoot.blogspot.hk/2012/07/howto-test-your-bluetooth-bee-standalone.html)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Archivos Eagle de BlueTooth bee-Standalone](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip).

* [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

* [Información](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687) sobre cómo configurar conexiones entre Bluetooth Bees está disponible en el Foro de Seeedstudio.

* [Información](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637) sobre PC conectando Bluetooth Bee en el Foro de Seeedstudio

* [File:Bluetooth Bee Standalone v1.0.pdf](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee_Standalone_v1.0.pdf "File:Bluetooth Bee Standalone v1.0.pdf")

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
