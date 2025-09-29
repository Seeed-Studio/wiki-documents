---
description: Seeeduino Stalker v1.0
title: Seeeduino Stalker v1.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Stalker_v1.0
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Seeeduino-stalker-168.jpg)

**Esta no es la versión más reciente de Seeeduino Stalker y ha sido descontinuada.
La versión más reciente se puede encontrar aquí: [Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/)
Consulta <a href="/es/Seeeduino_Stalker#Comparison_between_various_versions_of_Seeeduino_Stalker" ><span><font size={"3"}> Arduino </font></span></a> para comparación entre v1.0, v2.0 y v2.1.**

Enlace a la página del producto para este dispositivo (sigue este enlace para comprar):
**Seeeduino Stalker Atmega 168P v1.0 Modelo: [ARD125B5P](https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-168-p-639.html?cPath=79_80)**

Seeeduino Stalker es un nodo de Red de Sensores Inalámbricos compatible con Arduino rico en características. Su estructura modular y periféricos integrados lo hacen conveniente para registrar datos de sensores con marca de tiempo de forma periódica. El Seeeduino Stalker es un buen candidato para todos tus proyectos de seguimiento, monitoreo y control.

## Características ##

- Compatible con **Arduino**, basado en [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/)
- Microcontrolador integrado: ATmega168P o ATmega328P (ambas variantes disponibles para compra)

- Modo dual de operación: Como un Arduino independiente o como un Shield apilado encima de Arduino. (Las ubicaciones de los pines son compatibles con Arduino Duemilanove)

- Chip de Reloj de Tiempo Real integrado con celda de moneda CR2032 como fuente de energía de respaldo

- Interfaz serial con DTR para reinicio automático durante la programación cuando opera en modo independiente. (Para programación, [UartSBee](https://seeeddoc.github.io/UartSBee/) debe comprarse por separado)

- Socket para tarjeta microSD

- Cabecera de pines I2C (voltaje de operación seleccionable: 5.0V o 3.3V)

- Interruptor y LED definidos por el usuario

- Socket **serie Bee** - 2*10 pines con paso de 2.0mm (que se acoplará con - uno a la vez - cualquiera de los módulos inalámbricos: **XBee**, [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/), **GPSBee** o [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/). Ten en cuenta que [UartSBee](https://seeeddoc.github.io/UartSBee/) es incompatible con este socket - se proporciona un conector de interfaz serial separado (como se mencionó anteriormente) para [UartSBee](https://seeeddoc.github.io/UartSBee/)

## Aplicaciones ##

- Red de Sensores Inalámbricos (usando **XBee** - se compra por separado)

- Registro GPS (usando **GPSBee** - se compra por separado)

- Sistema de Adquisición de Datos capaz de comunicarse con una App ejecutándose en iPhone/Teléfono Android/Teléfono Nokia (usando [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) - se compra por separado)

- Control Remoto RF (usando [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) - se compra por separado)

- Como una plataforma simple de computación física compatible con Arduino independiente ([UartSBee](https://seeeddoc.github.io/UartSBee/) debe comprarse por separado para programación)

## Precauciones ##

- El producto se proporciona tal como está. Por favor observe las precauciones ESD especialmente en clima seco (baja humedad).

- Por favor desactive los puertos serie bluetooth cuando use una máquina de desarrollo basada en Windows para prevenir que el IDE de Arduino se congele.

## Diagrama de Bloques ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-Block.jpg)

## Esquemáticos ##

[Esquemáticos para Seeeduino Stalker v1.0 (PDF)](https://www.seeedstudio.com/depot/datasheet/Seeedstalker_V1.0.pdf)

## Especificaciones ##

### Especificaciones Técnicas Clave ###

|Microprocesador:|ATMega168P o ATmega328P|
|---|---|
|Tamaño PCB:|6.8cm x 5.5cm x 0.16cm|
|Indicadores:|Reset, Alimentación, LED en PB5 (Pin 13 de Arduino)|
|Fuente de alimentación:|5V o 7-12V|
|Conector de alimentación:|JST de 2 pines/ USB|
|Cantidad de E/S:|20|
|Entrada ADC:|2 canales dedicados (resolución de 10 bits)|
|Conectividad:|I2C, UART, SPI|
|RoHS:|Sí|

### Características Eléctricas ###

|Especificaciones|Mín|Nom|Máx|Unidades|
|---|---|---|---|---|
|Voltaje de entrada|5|9|12|Voltios (DC)|
|Consumo de Corriente Global|-|300|1000|mA|
|Voltaje I2C 3.3V|3.2|3.3|3.5|Voltios (DC)|
|Voltaje I2C 5.0V|4.6|4.7|5|Voltios (DC)|
|Velocidad de Baudios UART (durante programación)|-|-|115200|bps|

## Uso ##

### Notas de Aplicación ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-applications.jpg)

### Notas de Conexión ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-hardware.jpg)

- **Socket serie Bee** - 2*10 pines con paso de 2.0mm (que se conectará con - uno a la vez - cualquiera de los **módulos inalámbricos**: **XBee**, [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) , **GPSBee** o [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) .) La comunicación con estos módulos se realiza a través de UART.

- Interfaz serie – Para ahorrar espacio y reducir costos, la conectividad USB&lt;-&gt;Serie no se proporciona por defecto. Puedes usar el UartSBee basado en FT232 u otro adaptador USB a serie para realizar la programación o comunicarte con la PC.

- LED y Interruptor de Usuario – Se han proporcionado un LED y un Interruptor en la placa para usar en tu aplicación según se desee.

- Interruptor maestro – Elimina la alimentación de la placa Seeeduino Stalker. El RTC seguirá funcionando si se ha instalado una batería CR2032.

- Jumper de Interrupción – Monta este jumper si quieres permitir que el módulo insertado en el socket serie Bee interrumpa el microcontrolador en cualquier evento de recepción de datos. Esto es útil en aplicaciones de redes de sensores para despertar el microcontrolador del modo de suspensión.

- Interfaz I2C: El IC cambiador de nivel I2C integrado proporciona traducción de voltaje entre dispositivos de 3.3V y 5V. Esto te permite conectar ICs I2C de 5.0 Voltios a tu microcontrolador cuando está operando a 3.3 Voltios.

## Hojas de Datos de Componentes ##

- [ATmega168](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf) - Microcontrolador AVR de 8 bits presente en la placa Seeeduino Stalker.

- [PCA9306](http://www.nxp.com/documents/data_sheet/PCA9306.pdf) - Traductor de nivel de voltaje bidireccional dual para bus I2C y SMBus.

- [DS1307](http://pdfserv.maxim-ic.com/en/ds/DS1307.pdf) - Chip de Reloj de Tiempo Real I2C.

- [LM1117](http://www.national.com/ds/LM/LM1117.pdf) - Regulador de voltaje lineal de baja caída usado en la sección de alimentación.

## Ejemplos de Código Fuente ##

La programación del Seeeduino Stalker se facilita mediante el uso de Arduino y sus librerías. Algunos fragmentos de código proporcionados a continuación te ayudarán a comenzar la codificación para tu proyecto. Un archivo RAR que contiene todos los siguientes sketches está disponible **aquí**.

Ten en cuenta que todos los sketches de demostración presentados a continuación hacen uso de la librería FileLogger. Por favor consulta [este](https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1240704747/all) hilo en el Foro de Arduino y descarga la librería desde su [página del proyecto](http://code.google.com/p/arduino-filelogger/) en Google Code.

Además, algunos usuarios del Seeeduino Stalker han compartido parte del código desarrollado por ellos en un [hilo](https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1273413449%20) en el Foro de Arduino.

### Demo 1 - Uso de tarjeta SD ###

Usando una librería FileLogger para almacenar todos los datos del GPSBee en la tarjeta SD.

```
#include <SD.h>constint chipSelect =10;
String buffer ="";unsignedchar ptr;
File myFile;
byte val;voidsetup(){Serial.begin(19200);pinMode(chipSelect,OUTPUT);if(!SD.begin(chipSelect)){return;}
  File myFile = SD.open("data.log",FILE_WRITE);
   myFile.close();}voidloop(){if(Serial.available()>0){
    val =Serial.read();
    buffer = String(val);
    myFile = SD.open("data.log",FILE_WRITE);
    myFile.print(buffer);
    myFile.close();}}
```

### Demo 2 – Registro de datos de sensores con marca de tiempo ###

El módulo de Reloj de Tiempo Real integrado puede utilizarse para añadir marcas de tiempo a los datos de sensores leídos periódicamente.

El sketch de Arduino presentado a continuación ilustra cómo tomar lecturas de sensores desde el Pin Analógico 0 y guardarlas en la Tarjeta SD junto con las marcas de tiempo.

```
#include "FileLogger.h"#include "DS1307.h"#include <WProgram.h>#include <Wire.h>#define Timing 0#define Accept 1#define Record 2
 
byte start[7]={'B','e','g','i','n',0x0D,0x0A};
byte buffer[20];int temp;
byte ASCII[10]={'0','1','2','3','4','5','6','7','8','9'};unsignedchar result;unsignedchar state;inttime=0;int oldtime=0;voidsetup(void){
    result = FileLogger::append("data.log", start, 7);//Initial the SD Cardwhile(result) result = FileLogger::append("data.log", start, 7);
    RTC.stop();
    RTC.set(DS1307_MIN,30);//set the minutes
    RTC.set(DS1307_HR,10);//set the hours
    RTC.set(DS1307_DATE,22);//set the date
    RTC.set(DS1307_MTH,12);//set the month
    RTC.set(DS1307_YR,9);//set the year
    RTC.start();}voidloop(void){switch(state){case Timing:time=RTC.get(DS1307_SEC,true);delay(200);if(time!=oldtime){
            oldtime=time;
            temp=RTC.get(DS1307_MTH,false);
            buffer[0]=ASCII[(temp/10)];
            buffer[1]=ASCII[(temp%10)];
            buffer[2]='-';
            temp=RTC.get(DS1307_DATE,false);
            buffer[3]=ASCII[(temp/10)];
            buffer[4]=ASCII[(temp%10)];
            buffer[5]='-';
            temp=RTC.get(DS1307_HR,false);
            buffer[6]=ASCII[(temp/10)];
            buffer[7]=ASCII[(temp%10)];
            buffer[8]='-';
            temp=RTC.get(DS1307_MIN,false);
            buffer[9]=ASCII[(temp/10)];
            buffer[10]=ASCII[(temp%10)];
            buffer[11]='-';//temp=RTC.get(DS1307_SEC,false);
            buffer[12]=ASCII[(time/10)];
            buffer[13]=ASCII[(time%10)];
            buffer[14]=':';
            state=Accept;}break;case Accept:
        temp=analogRead(0);
        buffer[15]=ASCII[(temp/100)];
        buffer[16]=ASCII[((temp%100)/10)];
        buffer[17]=ASCII[(temp%10)];
        buffer[18]=0x0D;
        buffer[19]=0x0A;
        state=Record;break;case Record:
        result = FileLogger::append("data.log", buffer, 20);if(result==0){
            state=Timing;}break;default:
        state=Timing;break;}}
```

### Demo 3 Operando el Seeeduino Stalker como un Shield ###

El Seeeduino Stalker puede montarse como un shield en otra placa compatible con Arduino Duemilanove/UNO.

El siguiente sketch ilustra cómo recibir datos del microcontrolador de abajo vía I2C y guardarlos en la tarjeta SD.

```
#include "FileLogger.h"#include <Wire.h>
 
byte start[7]={'B','e','g','i','n',0x0D,0x0A};unsignedchar buffer[10];unsignedchar result;unsignedchar state;voidsetup(){
    result = FileLogger::append("data.log", start, 7);//Initial the SD Cardwhile(result) result = FileLogger::append("data.log", start, 7);Wire.begin(4);// join i2c bus with address #4Wire.onReceive(receiveEvent);// register event}voidloop(){}void receiveEvent(int howMany){unsignedchar i=0;while(Wire.available()>0){
        buffer[i]=Wire.receive();// receive byte as a character
        i++;}
    result = FileLogger::append("data.log", buffer, i);while(result) result = FileLogger::append("data.log", start, 7);}
```

## Soporte ##

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o **deseas** discutir.

## Historial de Revisiones ##

|Revisión|Descripciones|Fecha de Lanzamiento|
|---|---|---|
|Seeeduino Stalker v1.0 |Lanzamiento público inicial|23 de diciembre, 2009|
|Seeeduino Stalker v2.0 | Nueva versión mejorada con más características|17 de diciembre, 2010|

## Rastreador de Errores ##

El Rastreador de Errores es el lugar donde puedes publicar cualquier error que creas que podrías haber encontrado durante el uso. Por favor escribe lo que tengas que decir, tus respuestas nos ayudarán a mejorar nuestros productos.

## Ideas Adicionales ##

Las Ideas Adicionales es el lugar para escribir tus ideas de proyecto sobre este producto, u otros usos que hayas encontrado. O puedes escribirlas en la página de Proyectos.

## Recursos ##

[Archivos de Diseño Eagle de Stalker](https://www.seeedstudio.com/wiki/images/4/40/Stalker.zip)

## Cómo comprar ##

Seeeduino Stalker v1.0 ya está agotado (Página del producto [aquí](https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-328-p-600.html?cPath=80), en su lugar por favor revisa Seeeduino Stalker v2.0: [Página Wiki](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)  | [Página del Producto](https://www.seeedstudio.com/depot/seeeduino-stalker-v2b-p-727.html?cPath=80)

## Ver También ##

- [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)
- [Comparación entre varias versiones de Seeeduino Stalker](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker)

## Licencias ##

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciadas bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## Soporte Técnico y Discusión del Producto

   <br />
 ¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
