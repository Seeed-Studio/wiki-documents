---
description: Wifi Shield (Fi250) V1.1
title: Wifi Shield (Fi250) V1.1
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wifi_Shield_Fi250_V1.1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Wifi Shield (Fi250) V1.1
category: Shield
bzurl: https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html
oldwikiname:  Wifi Shield (Fi250) V1.1
prodimagename:  Fi250_board1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_Fi250_V1_1
sku:    103030027
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board1.jpg)

Wifi Shield (Fi250) V1.1 es una solución económica de internet con Arduino. El módulo Wi-Fi soporta el modo IEEE 802.11b/g/n, con velocidad máxima de hasta 65Mbit/s. Wifi Shield (Fi250) V1.1 combina antena integrada; es fácil construir tu proyecto en una caja pequeña. El módulo reserva un conector UFL, puedes usar una antena externa para mejorar el rango de señal. Hay un botón en la placa, solo presiona una vez para cambiar el wifi shield al modo AP. El módulo tiene un software de interfaz de computadora, puedes controlar y actualizar el módulo vía convertidor USB-UART.
El wifi shield contiene un socket para tarjeta Micro SD, es como una grabadora cuando el wifi shield funciona como servidor TCP, UDP.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html)

## Especificaciones

---
<table cellpadding="1" cellspacing="1" width="555">
  <tbody>
    <tr>
      <td>Módulo</td>
      <td>WIZnet FI250</td>
    </tr>
    <tr>
      <td>Voltaje de Operación</td>
      <td>5V o 3.3V (Selección automática)</td>
    </tr>
    <tr>
      <td>Corriente</td>
      <td>300mA (máximo)</td>
    </tr>
    <tr>
      <td>Banda única</td>
      <td>2.4GHz IEEE 802.11b/g/n</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>Antena PCB integrada (conector UFL reservado)</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>1MB Flash Memory, 128KB SRAM, 1MB Serial Flash</td>
    </tr>
    <tr>
      <td>Interfaz</td>
      <td>UART(predeterminado)/SPI(actualizar firmware)</td>
    </tr>
    <tr>
      <td>Dimensiones</td>
      <td>69.0x53.5x23.5 mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Uso

---
En la demostración usamos un Arduino Leonardo, te sugerimos que uses un puerto serie por hardware, el software no es lo suficientemente rápido para comunicarse con el módulo Wifi.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board.jpg)

### Cliente TCP

Instala la librería Wifi Shield (Fi250), descarga el código de demostración Wizfi250_Client.

```cpp
/*
//This demo use Arduino Leonardo or Seeeduino Lite. The jumper connect D0-WIFI_TX, D1_WIFI_RX; Let the boot pin not connect
*/
#include <Arduino.h>
#include "WizFi250.h"

#define SSID      "STEST" //Set your SSID
#define KEY       "87654321" //Set your phrase
#define AUTH       "WPA2" // Set the encrypt type


#define  HOST_IP       "192.168.168.185" //Set the TCP Server IP
#define  REMOTE_PORT    9090 //Set the port
#define LOCAL_PORT      1234  //Set the port

#define spi_CS  8

WizFi250 wizfi250(&Serial1);
boolean returnValue=false;
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    Serial.println("--------- WIZFI250 TEST --------");
    // wait for initilization of Wizfi250
    delay(1000);
    Serial.println("Join " SSID );
    wizfi250.reset();
    delay(1000);
    wizfi250.sendCommand("AT+WLEAVE\r");
    delay(1000);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
        Serial.println("Please Restart");
    } else {

        Serial.println("Successfully join " SSID);
        wizfi250.sendCommand("AT+WSTAT\r");
        delay(5);
        char c;
        while(wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
        delay(2000);
        returnValue=wizfi250.connect(HOST_IP,REMOTE_PORT,LOCAL_PORT);
        if(returnValue)
        Serial.println("Now you can send data to Server or receive data from Server!");
    }
}
void loop() {
    if(wizfi250.available()) {
        Serial.print((char)wizfi250.read());
    }
    if(Serial.available()) {
        wizfi250.print((char)Serial.read());
    }
}
```

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client.bmp)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client_arduino.png)

### Conexión Http

Instala la biblioteca Wifi Shield (Fi250), descarga el código de demostración Wizfi250_http.

```cpp
/*
//This demo use Arduino Leonardo or Seeeduino Lite. The jumper connect D0-WIFI_TX, D1_WIFI_RX; Let the boot pin not connect
*/
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WizFi250.h"

#define SSID      "STEST"   //Set your SSID
#define KEY       "87654321" //Set your phrase
#define AUTH       "WPA2" //Set the encrypt type

#define TSN_HOST_IP        "74.125.128.103" //google.com server
//#define TSN_HOST_IP        "115.239.210.26" //baidu.com server
//#define TSN_HOST_IP      "192.168.1.254"      // broadcast
#define TSN_REMOTE_PORT    80
#define LOCAL_PORT     9000

#define spi_CS  8

//SoftwareSerial sprintSerial(4,5);   // The software serial port is not stable.
WizFi250 wizfi250(&Serial1);
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    digitalWrite(spi_CS,HIGH);
    Serial.println("--------- WIZFI250 TEST --------");
    // wait for initilization of Wizfi250
    delay(1000);
    Serial.println("Join " SSID );
    delay(10);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
    } else {
        Serial.println("Successfully join  "  SSID);

        wizfi250.clear();

        wizfi250.connect(TSN_HOST_IP,TSN_REMOTE_PORT,LOCAL_PORT);
        delay(10);
        wizfi250.send("GET / HTTP/1.1\r\n\r\n");
    }
    char c;
    for(int i=0;i<320;i++){
        if (wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
    }
}
void loop() {
    while (wizfi250.available()) {
        Serial.write(wizfi250.read());
    }
    while (Serial.available()) {
        wizfi250.write(Serial.read());
    }
}
```

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_HTTP.jpg)

### Reiniciar el módulo

- Si necesitas reiniciar el módulo a los valores predeterminados de fábrica, presiona el botón de función tres veces a velocidad rápida. Los LED MODE y WIFI parpadean, espera a que el módulo se reinicie.

- Si el módulo se reinicia a los valores predeterminados, la velocidad de baudios cambia a 115200. Ten en cuenta esto.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_reset.png)

### Configurar modo AP con una pulsación

- Es fácil entrar al modo AP. Presiona el botón Function, espera a que el LED WIFI cambie a rojo. Puedes escanear la señal wifi, WizFi250_AP_*******

- Presiona el botón de reinicio del wifi shield Fi250 para salir del modo AP.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI2350_AP.png)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI250APshow.png)

### Actualizar firmware

Los pasos para actualizar el F/W se muestran a continuación: <big>Conecta tu wifi shield(Fi250) vía UART directamente, puedes usar un UartSBee u otras herramientas UART</big>

Antes de actualizar tu F/W, puedes configurar el módulo en modo Program (cortocircuitar el pin jumper BOOT)  <big>[wizfi250firmware](http://wizwiki.net/wiki/doku.php?id=products:wizfi250:wizfi250firmware:start)</big>

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_update_firmware副本.png)

1ra acción

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware1.png)

2da acción

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware2.png)

3ra acción

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware3.png)

- Cuando actualices exitosamente, mueve el jumper y reinicia el módulo.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Wifi_Shield_(Fi250)_V1.1_sch_pcb.zip](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip)

- [Wizfi250_programmer_s_guide.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_programmer_s_guide.pdf)

- [Wizfi250_quick_start_guide.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_quick_start_guide.pdf)

- [Wizfi250_datasheet.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_datasheet.pdf)

- [Librería Wizfi250](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250.zip)

- [PDF_Wifi_Shield_(Fi250)_V1.1](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wifi_Shield-Fi250-V1.1.pdf)

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
