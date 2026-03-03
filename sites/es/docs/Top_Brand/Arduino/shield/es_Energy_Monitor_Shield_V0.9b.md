---
description: Energy Monitor Shield V0.9b
title: Energy Monitor Shield V0.9b
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Energy_Monitor_Shield_V0.9b
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Energy Monitor Shield V0.9b
category: Discontinued
bzurl:
oldwikiname: Energy_Monitor_Shield_V0.9b
prodimagename:
bzprodimageurl: https://www.research.net/r/Energy_Monitor_Shield_V0-9b
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/EMS_intro.jpg)

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/EMS_h.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Energy Monitor Shield es una tarjeta de expansión compatible con Arduino diseñada para construir sistemas de monitoreo de energía con pantalla LCD y una interfaz para conectar el transceptor inalámbrico nRF24L01+.

Modelo: [830070001](https://www.seeedstudio.com/)

## Características

* Conecta hasta tres sensores AC (30-100A).

* Soporte para pantalla LCD Nokia LCD5110

* Apaga la retroiluminación LCD con un jumper

* Dos botones para controlar (operan un pin analógico)

* Interfaz para conectar el transceptor a 2.4G nRF24L01+

* Conector compatible con GROVE: I2C

* Totalmente compatible con Ethernet Shield (Wiznet 5100 + SD)

## Diseño y esquemas

![](https://files.seeedstudio.com/wiki/Energy_Monitor_Shield_V0.9b/img/Em-top.jpg)

* El lado izquierdo del EM Shield tiene tres conectores para sensores de corriente, a la derecha - conector para pantalla LCD.

* El jumper JP1 se usa para habilitar/deshabilitar la retroiluminación real de la pantalla LCD.

* En la esquina superior derecha - conector I2C.

* A la derecha están los dos botones (etiquetados S1 y S2).

* En el centro de la placa (justo a la derecha de la pantalla LCD) - conector para nRF24L01+.

**Esquema del dispositivo**

## Funcionalidad básica

En la versión básica (sin usar Ethernet Shield) se puede organizar el monitoreo del consumo de energía en tres circuitos diferentes usando sensores de corriente. La información sobre el nivel actual de consumo puede mostrarse en la pantalla LCD. La gestión del dispositivo puede organizarse usando dos botones en el Shield. Los datos obtenidos pueden transmitirse por el transceptor nRF24L01+.

## Capacidades de expansión

Adicionalmente, el EM Shield puede conectar cualquier dispositivo usando el conector compatible con i2c Grove (sensores, pantallas, etc.).
El EM Shield fue diseñado para ser totalmente compatible con el Ethernet Shield (Wiznet 5100 + SD) - así que puedes usar estos dos Shields juntos para crear un dispositivo de monitoreo de electricidad aún más avanzado (registro en tarjeta SD y presentación de datos en una página web).

## Interfaces

* A0, A1, A2 - involucrados para conectar sensores AC

* A4 (SDA), A5 (SCL) - mostrados en el conector "I2C" (los otros dos pines del conector - VCC y GND para alimentación del sensor)

* Interfaz para conectar el módulo RF nRF24L01+:

  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D8 - RF_CE

    * D7 - RF_CSN

    * D2 - RF_IRQ

* Interfaz para conectar LCD5110:

  * D11 - MOSI
  * D13 - SCK

    * D5 - LCD_D/C

    * D6 - LCD_RST

    * D3 - LCD_CS

* A3 - Botones

## Bibliotecas

### Bibliotecas necesarias

Para usar Energy Monitor Shield se requieren las siguientes bibliotecas:

* Trabajar con el transceptor nRF24L01+ - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

* Usar la pantalla LCD 51110 (compatible con SPI) - [LCD5110_Graph_SPI](https://github.com/stepanovalex/LCD5110_Graph_SPI/archive/master.zip)

* Trabajar con sensores de corriente - [EmonLib](https://github.com/openenergymonitor/EmonLib/archive/master.zip)

* Debes usar la biblioteca de - [www.mysensors.org](https://github.com/mysensors/Arduino/tree/master)

* MySensors Arduino Library [(v1.5)](http://www.mysensors.org/download/sensor_api_15)

Requiere las bibliotecas que se usan al trabajar con RF24 y pantalla LCD: SPI

### Características del uso de bibliotecas

La biblioteca ha usado ejemplos de ellas solo para entender cómo funcionan.

La inicialización del módulo RF es la siguiente:

```
... //RF24 radio(CE,CSN); RF24 radio(7,8); ...
```

Inicializar la pantalla LCD es como sigue:

```
... //LCD5110 myGLCD(DC,RST,CS); LCD5110 myGLCD(5,6,3); ...
```

## Demostración simple

```cpp

#include <SPI.h>
#include <LCD5110_Graph_SPI.h>
#include "EmonLib.h"   

#define WINDOW 15
#define DELTA 1500

EnergyMonitor emon1;

double sIrms;
float Pcur;
float Pmax;
float Pmin=100;

LCD5110 myGLCD(5,6,3);

extern unsigned char SmallFont[];

unsigned long measureTime;
boolean flag=false;
double delta=0;

#define DELTAMEASURE 30000

void setup(void)
{
  myGLCD.InitLCD(70);
  myGLCD.setFont(SmallFont);

  myGLCD.update();

  emon1.current(0, 111.1);             // Current: input pin, calibration.
  double Irms[WINDOW];
  // Calibrate (find offset)
  double cIrms = 0;
  flag = false;

  while (!flag) {
    myGLCD.print("calibrating", 0, 0);
    myGLCD.update();
    Irms[0] = emon1.calcIrms(1480); // the first value in the measurement obviously "crooked"
      //Serial.println("calculate delta");
      for (int i=0; i<WINDOW; i++) {
        Irms[i] = emon1.calcIrms(1480);
        cIrms = cIrms + Irms[i];
        delay(100);
      }
      delta = cIrms/WINDOW;
      flag = true;
  }

//myGLCD.print(" ready", 0, 0);
    //myGLCD.update();    

}

void loop(void)
{
  // write the current value
  sIrms = emon1.calcIrms(1480) - delta;  // Calculate Irms only
  sIrms = abs(sIrms);
  Pcur = sIrms*0.220;

    // the received data is printed
    char tbuf[6];
    dtostrf(Pcur,5,5,tbuf);
    myGLCD.print(tbuf, 0, 0);
    dtostrf(analogRead(A3),4,0,tbuf);
    myGLCD.print(tbuf, 30, 15);

    myGLCD.update();

    delay(250);

}
```

## Demostración simple con tecnología inalámbrica

```cpp
/*
 This example code is in the public domain.
 */

#include <SPI.h>
#include <MySensor.h>  // Include MySensors.org Library V1.5
#include "EmonLib.h" // Include Emon Library
#include <LCD5110_Graph_SPI.h> // Include NOKIA5110 Library

#define CHILD_ID_POWER 0

EnergyMonitor emon;

LCD5110 myGLCD(5,6,3);
extern unsigned char SmallFont[];

MyTransportNRF24 transport(7, 8); //for EMv1
MySensor gw(transport);

unsigned long lastSend;
unsigned long SEND_FREQUENCY = 20000; // Minimum time between send (in milliseconds). We don't wnat to spam the gateway.

float Irms;
float lastIrms = -99;

char tbuf[8];
char sbuf[12];

MyMessage IrmsMsg(CHILD_ID_POWER, V_KWH);

void setup()  
{
  myGLCD.InitLCD();
  myGLCD.setFont(SmallFont);
  myGLCD.update();

  // The third argument enables repeater mode.
  gw.begin(NULL, AUTO, true),
  gw.sendSketchInfo("Energy Monitor v1", "1.0");

//  emon.current(0, 111.1);             // Current: input pin, calibration.
   emon.current(0, 66.5);

  // Register all sensors to gw (they will be created as child devices)

  gw.present(CHILD_ID_POWER, S_POWER);
}

void loop()      
{      
  gw.process();
  unsigned long now = millis();

  double Irms = emon.calcIrms(1480);  // Calculate Irms only
  float realIrms  = emon.Irms*220;        //extract Real Power into variable

 if (realIrms != lastIrms) {
      gw.send(IrmsMsg.set(realIrms, 1)); //send to gateway

  lastIrms=realIrms;
  }

   dtostrf(realIrms,5,2,tbuf);
    sprintf(sbuf, "  %s kWt", tbuf);
    myGLCD.print(sbuf, 20, 0);   
    myGLCD.print("Powr:", 0, 0);  

    dtostrf(Irms,5,2,tbuf);
    sprintf(sbuf, "  %s Amp", tbuf);
    myGLCD.print(sbuf, 20, 10);   
    myGLCD.print("Irms:", 0, 10);  

    myGLCD.update();

      Serial.print("Power: ");
      Serial.println(realIrms);

  gw.sleep(SEND_FREQUENCY);
  }
```

## Rastreador de Versiones

<table cellPadding={5} cellSpacing={0}>
  <tbody>
    <tr>
      <td width={150}>Revisión</td>
      <td width={450}>Descripción</td>
      <td width={80}>Lanzamiento</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>1.0</td>
      <td>Versión pública</td>
      <td>01.04.2014</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>0.9b</td>
      <td>Versión pública (No producida)</td>
      <td>20.10.2013</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>0.9</td>
      <td>Prototipo</td>
      <td>10.09.2013</td>
    </tr>
  </tbody>
</table>

## Preguntas y Respuestas

* Blog [Energy Monitor Shield - Monitoreo inalámbrico de energía](//devicter.blogspot.ru/2014/03/energy-monitor-shield.html#more) RU

* Haz una pregunta por correo electrónico support@devicter.ru

## Cómo comprar  

Este producto se puede comprar:

* China (envío mundial)

  * [Tienda Seeed](https://www.seeedstudio.com/depot/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html)

* Rusia

  * [Tienda Devicter](http://devicter.ru/goods/EM-Shield)

## Licencias  

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están

licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
