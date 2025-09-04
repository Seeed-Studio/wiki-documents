---
description: W5500_Ethernet_Shield_v1.0
title: W5500 Ethernet Shield v1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/W5500_Ethernet_Shield_v1.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500.jpg" alt="pir" width={600} height="auto" /></p>

El W5500 Ethernet Shield v1.0 puede proporcionar conectividad a internet a tus proyectos. El W5500 permite a los usuarios tener conectividad a Internet en sus aplicaciones utilizando un solo chip, en el cual están integrados la pila TCP/IP, MAC Ethernet 10/100 y PHY. El shield también tiene dos conectores Grove y un socket para tarjeta microSD para soportar proyectos que requieren almacenar grandes cantidades de datos de sensores Grove. El puerto RJ45 (donde se conecta el cable Ethernet) es lo suficientemente bajo para permitirte apilar más shields encima de este si es necesario.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

--------

- Soporta Protocolos TCP/IP por Hardware: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
- Soporta 8 sockets independientes simultáneamente
- Soporta modo de apagado
- Soporta Wake on LAN sobre UDP
- Soporta Interfaz Periférica Serie de Alta Velocidad (SPI MODO 0, 3)
- Memoria interna de 32Kbytes para Buffers TX/RX
- PHY Ethernet 10BaseT/100BaseTX integrado
- Soporta Auto Negociación (Full y half duplex, 10 y 100\* basado)
- No soporta Fragmentación IP
- Operación a 3.3V con tolerancia a señales I/O de 5V
- Salidas LED (Full/Half duplex, Link, Speed, Active)
- Socket para tarjeta Micro-SD
- Conectores Grove para I2C y UART

## Descripción General del Hardware

-----------------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500_Interface.jpg" alt="pir" width={600} height="auto" /></p>

**Configuración del Hardware**

1. RJ45: Puerto Ethernet;
2. IC W5500: un Controlador Ethernet TCP/IP por hardware;
3. Botón Reset: Reinicia el shield Ethernet;
4. Socket para Tarjeta SD: soporta tarjeta Micro SD en FAT16 o FAT32; almacenamiento máximo es 2GB.
5. Interfaz I2C
6. Interfaz UART

**Uso de pines en Arduino**

1. D4： Selección de chip de tarjeta SD
2. D10： Selección de Chip W5200
3. D11： SPI MOSI
4. D12： SPI MISO
5. D13： SPI SCK

:::note
Tanto el W5500 como la tarjeta SD se comunican con Arduino a través del bus SPI. Los pines 10 y 4 son pines de selección de chip para W5500 y el slot SD. No pueden ser utilizados como I/O general.
:::

Uso
-----

Te mostraremos un ejemplo. Este ejemplo puede subir datos a una página web y almacenar los datos de tu sensor en una tarjeta SD.

### Hardware

**Lista de Partes:**
<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre</h3></td>
    <td><h3>Función</h3></td>
    <td><h3>Cant</h3></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><span>W5500 Ethernet Shield</span></a></h4></td>
    <td><h4>Proporcionar conectividad Ethernet</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html?queryID=dcb7226252c34d7139135b4fd97cafc5&objectID=627&indexName=bazaar_retailer_products" target="_blank"><span>Seeeduino V4.2</span></a></h4></td>
    <td><h4>Controlador</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html" target="_blank"><span>Grove-Temp&Humi Sensor</span></a></h4></td>
    <td><h4>Sensor</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Base Shield V2</span></a></h4></td>
    <td><h4>Shield Base</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Tarjeta Micro SD</h4></td>
    <td><h4>Almacenar datos</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

**Procedimiento:**

1. Monta el W5500 Ethernet Shield v1.0 en tu Arduino, monta el Base Shield V2 en el Ethernet Shield, y conecta el sensor Grove-Temp&Humi al puerto Grove D5 del Base Shield, conecta la tarjeta SD.
2. Conecta el shield Ethernet a la red con un cable Ethernet estándar;
3. Conecta Arduino a la PC vía cable USB;

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20hardware.jpg" alt="pir" width={600} height="auto" /></p>

### Software

- Por favor sigue los procedimientos de [cómo instalar una librería de arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para instalar la librería.
- Haz clic en el botón de abajo para descargar las librerías del W5500 Ethernet Shield.

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/WIZ_Ethernet_Library-IDE1.6.x-master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/download%20W5500%20library.png" /></a></p>

- Instala la librería en tu Arduino IDE cuando se haya descargado.
- Copia el código de abajo en el sketch y luego súbelo:

```cpp
//This sketch uses W5500 Ethernet Shield,Seeeduino V4.2,Grove-Temp&Humi,
//Base Shield V2 Sensor and Micro SD Card to design a temperature and humidity collection station.
//attach the temperature and humidity sensor to base shield D5 grove port.
//It publishes the temperature and humidity data to webpage
//and refresh every 5 seconds, store the data into SD card datalog.txt file.

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>
#include <dht11.h>
dht11 DHT;
#define DHT11_PIN 5
const int chipSelect = 4;

// Please update IP address according to your local network
#if defined(WIZ550io_WITH_MACADDRESS) // Use assigned MAC address of WIZ550io
;
#else
byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
#endif  
IPAddress ip(192,168,0,177);

// Initialize the Ethernet server library
// with the IP address and port you want to use
// (port 80 is default for HTTP):
EthernetServer server(80);

void setup() {
 // Open serial communications and wait for port to open:
  Serial.begin(9600);
   while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }

  // start the Ethernet connection and the server:
#if defined(WIZ550io_WITH_MACADDRESS)
  Ethernet.begin(ip);
#else
  Ethernet.begin(mac, ip);
#endif  
  server.begin();
  Serial.print("server is at ");
  Serial.println(Ethernet.localIP());

  //initializing the SD card
  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  Serial.println("card initialized.");
}


void loop() {
  // listen for incoming clients
  EthernetClient client = server.available();
  if (client) {
    Serial.println("new client");
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so you can send a reply
        if (c == '\n' && currentLineIsBlank) {
          // send a standard http response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // the connection will be closed after completion of the response
   client.println("Refresh: 5");  // refresh the page automatically every 5 sec
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");

          // output the value of input pin on web
          int chk;
          chk = DHT.read(DHT11_PIN);    // READ DATA
          client.print("Humidity: ");
          client.print(DHT.humidity);
          client.println("<br />");
          client.print("Temperature: ");
          client.print(DHT.temperature);   

          //write value of input pin into SD card
          // make a string for assembling the data to log:
          String dataString = "";
          // read the humidity and temperature and append to the string:
          dataString = String(DHT.humidity) + String(DHT.temperature);
          // open the file. note that only one file can be open at a time,
          // so you have to close this one before opening another.
          File dataFile = SD.open("datalog.txt", FILE_WRITE);
          // if the file is available, write to it:
          if (dataFile) {
          dataFile.println(dataString);
          dataFile.close();
          // print to the serial port too:
          Serial.println(dataString);
          }
          // if the file isn't open, pop up an error:
          else {
          Serial.println("error opening datalog.txt");
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
    Serial.println("client disconnected");
  }
}

```

### Resultados

Ahora, mostraremos el resultado.

1. Inserta tu tarjeta SD en la computadora, verás información de temperatura y humedad.
2. Además, podemos ver información desde la web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20on%20web.png" alt="pir" width={600} height="auto" /></p>

¿No es muy fácil? Puedes comenzar tu proyecto.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [W5500 Ethernet Shield en formato Eagle](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip)
- [Esquemático del W5500 Ethernet Shield en formato PDF](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.pdf)
- [PCB del W5500 Ethernet Shield en formato PDF](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500%20Ethernet%20Shield%20v1.0%20PCB.pdf)
- [Librería del W5500 Ethernet Shield](https://github.com/embeddist/WIZ_Ethernet_Library-IDE1.6.x)
- [Hoja de datos del W5500 Ethernet Shield.pdf](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_datasheet_v1.0.2.pdf)
<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0 -->

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
