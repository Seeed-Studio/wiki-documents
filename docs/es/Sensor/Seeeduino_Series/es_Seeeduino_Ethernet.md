---
description: Seeeduino Ethernet
title: Seeeduino Ethernet
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Ethernet
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-2.jpg)

Seeeduino Ethernet es una plataforma de desarrollo compacta y multifuncional, que fusiona el registro y procesamiento de datos, control de dispositivos y comunicación Ethernet en uno solo. Está equipado con un chip MEGA328P y un Wiz5100: el primero proporciona un estilo de control de Arduino y el segundo proporciona capacidad de comunicación Ethernet TCP y UDP. Además, con el módulo de tarjeta SD integrado, es conveniente y ordenado para el registro, procesamiento o transferencia remota de datos a través de la red.

En esta versión, redujimos la altura del RJ45 para equilibrarlo con los conectores. Además, con un puerto Grove I2C y un UART poblados, es conveniente conectar los módulos Grove correspondientes a esta placa.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Ethernet-p-1231.html)

## Especificaciones

---

* Voltaje: 6.2-13V

* Corriente: 140-550mA

* Tipo de Tarjeta Soportada: Tarjeta Micro SD(<font color="red">**debe ser SanDisk**</font>), FAT/FAT32 (No se garantiza más de 2G)

* Conexión Soportada: TCP/UDP

* Peso Neto: 23±2g
*
* Conector Ethernet: RJ45 estándar

## Demostración

---
Probaremos las funciones del Seeeduino Ethernet de escribir o leer información de la tarjeta SD y enviar datos A/D a la red.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-1.jpg)

### Paso 1: Instalar el Hardware

Primero, instale el hardware. Tenemos dos alternativas para conectar la alimentación.

**Método 1**: Puede usar un [Juego de Cable PoE Pasivo](https://www.seeedstudio.com/depot/passive-poe-cable-set-p-1175.html?cPath=207) para proporcionar alimentación y conexión Ethernet al mismo tiempo como se muestra en la imagen a continuación.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-3.jpg)

**Método 2**: Use cable de alimentación y cable Ethernet por separado.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-4.jpg)

### Paso 2: Programación

Después de la instalación del hardware, aquí continuamos para probar el código de prueba.
Este programa está escrito para probar las funciones de escribir o leer datos de la tarjeta SD y enviar datos A/D a la red.
Este código de demostración puede usarse como un programa de prueba así como referencia si quiere explorar más funciones de la placa.

<font color="red">AVISO: </font>

1. Todos los archivos ".h" necesarios han sido preinstalados en Arduino IDE(1.0).

2. Instale una tarjeta Micro SD. Asegúrese de que la tarjeta Micro SD no esté llena y el formato sea FAT o FAT32.

```
/*
  SD card read/write

 This example shows how to read and write data to and from an SD card file
 The circuit:
 * SD card attached to SPI bus as follows:
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 4

   Web Server

 A simple web server that shows the value of the analog input pins.
 using an Arduino Wiznet Ethernet shield.

 Circuit:
 * Ethernet shield attached to pins 10, 11, 12, 13
 * Analog inputs attached to pins A0 through A5 (optional)

 created 18 Dec 2009
 by David A. Mellis
 modified 4 Sep 2010
 by Tom Igoe

 */

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>

// Enter a MAC address and IP address for your controller below.
// The IP address will be dependent on your local network:
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192,168,1,177);

// Initialize the Ethernet server library
// with the IP address and port you want to use
// (port 80 is default for HTTP):
EthernetServer server(80);

File myFile;

void setup()
{
    Serial.begin(9600);
    Serial.print("Initializing SD card...");
    // On the Ethernet Shield, CS is pin 4. It's set as an output by default.
    // Note that even if it's not used as the CS pin, the hardware SS pin
    // (10 on most Arduino boards, 53 on the Mega) must be left as an output
    // or the SD library functions will not work.
    pinMode(10, OUTPUT);
    // pinMode(4,OUTPUT);
    if (!SD.begin(4)) {
        Serial.println("initialization failed!");
        return;
    }
    Serial.println("initialization done.");

    // open the file. note that only one file can be open at a time,
    // so you have to close this one before opening another.

    myFile = SD.open("test.txt",FILE_WRITE);
    // if the file opened or created okay, write to it:
    if (myFile) {
        Serial.print("Writing to test.txt...");
        myFile.println("testing 1, 2, 3.");
        // close the file:
        myFile.close();
        Serial.println("done.");
    } else {
        // if the file didn't open, print an error:
        Serial.println("error opening test.txt");
    }

    // re-open the file for reading:
    myFile = SD.open("test.txt");
    if (myFile) {
        Serial.println("test.txt:");

        // read from the file until there's nothing else in it:
        while (myFile.available()) {
            Serial.write(myFile.read());
        }
        // close the file:
        myFile.close();
    } else {
        // if the file didn't open, print an error:
        Serial.println("error opening test.txt");
    }
    // start the Ethernet connection and the server:
    Ethernet.begin(mac, ip);
    server.begin();
}
unsigned char buff[6];
void loop()
{
    EthernetClient client = server.available();
    if (client) {
        // an http request ends with a blank line
        boolean currentLineIsBlank = true;
        while (client.connected()) {
            if (client.available()) {
                char c = client.read();
                // if you've gotten to the end of the line (received a newline
                // character) and the line is blank, the http request has ended,
                // so you can send a reply
                if (c == '\n' && currentLineIsBlank) {
                    // send a standard http response header
                    client.println("HTTP/1.1 200 OK");
                    client.println("Content-Type: text/html");
                    client.println();

                    // output the value of each analog input pin
                    for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
                        client.print("analog input ");
                        client.print(analogChannel);
                        client.print(" is ");
                        client.print(analogRead(analogChannel));
                        client.println("<br />");
                        buff[analogChannel] = analogRead(analogChannel);
                    }
                    break;
                }
                if (c == '\n') {
                    // you're starting a new line
                    currentLineIsBlank = true;
                }
                else if (c != '\r') {
                    // you've gotten a character on the current line
                    currentLineIsBlank = false;
                }
            }
        }
        // give the web browser time to receive the data
        delay(1);
        // close the connection:
        client.stop();
        myFile = SD.open("test.txt", FILE_WRITE);
        if (myFile) {
            Serial.println("test.txt:");
            for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
                myFile.print("analog input ");
                myFile.print(analogChannel);
                myFile.print(" is ");
                myFile.println(analogRead(analogChannel));
            }
            // read from the file until there's nothing else in it:
            myFile.close();
        }
        else {
            // if the file didn't open, print an error:
            Serial.println("error opening test.txt");
        }

        myFile = SD.open("test.txt");
        if (myFile) {
            Serial.println("test.txt:");

            // read from the file until there's nothing else in it:
            while (myFile.available()) {
                Serial.write(myFile.read());
            }
            // close the file:
            myFile.close();
        }
        else {
            // if the file didn't open, print an error:
            Serial.println("error opening test.txt");
        }
    }
}
```

### Paso 3: Descargar el programa

Debido a que no hay un conector USB en la placa. Seeeduino Ethernet requiere un [UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) para descargar el programa.

Conecta el UartSBee al Seeeduino Ethernet como se muestra a continuación:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-11.jpg)

 ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-5.jpg)

:::note
Por favor selecciona Seeeduino V3.0 como placa en el menú de herramientas para descargar el programa.
:::

### Paso 4: Prueba de resultados

<font color="red">AVISO:</font> Asegúrate de que el Seeeduino Ethernet y tu computadora estén en la misma red de área local.
Después de que el programa fue descargado, abre el Monitor Serie. Podrás verificar el estado de la placa.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-9.jpg)

Abre un navegador web e ingresa la dirección web:192.168.1.177, entonces podrás verificar los datos enviados por Seeeduino Ethernet:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Ethernet_shield2.jpg)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Archivos Eagle de Seeeduino Ethernet](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip)

* [Esquemático de Seeeduino Ethernet.pdf](https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeeduino_Ethernet_.pdf)

* Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/). El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

* Por favor reformatea la tarjeta SD a FAT/FTA32. Si aún no funciona, se sugiere descargar el [SD Formatter](https://www.sdcard.org/downloads/formatter_3/) y reformatear la tarjeta SD con este software.

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
