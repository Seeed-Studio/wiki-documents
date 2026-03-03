---
description:  Wifi Shield V1.1
title:  Wifi Shield V1.1
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wifi_Shield_V1.1
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Wifi Shield V1.1‏‎
category: Discontinued
bzurl:
oldwikiname: Wifi_Shield_V1.1‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_Shield_V1-1
sku:
tags:
--- -->

Este Wifi Shield utiliza un módulo wifi RN171 para proporcionar a tu Arduino/Seeeduino la función de Ethernet serie. Solo necesita dos pines para conectar tu dispositivo a redes inalámbricas 802.11b/g con este shield. Cuenta con una antena independiente que puede cubrir un rango más amplio y transmitir señales más fuertes. Con soporte para protocolos de comunicación TCP, UDP y FTP comunes, este Wifi Shield puede satisfacer las necesidades de la mayoría de proyectos de redes inalámbricas, como redes domésticas inteligentes, controles de robots o estaciones meteorológicas personales, etc. Preparamos un conjunto de comandos fácil y conveniente para este shield para que puedas usar código limpio y conciso para ejecutar la función.

## Especificaciones ##

- Voltaje：3.3~5.5 V

- Corriente：25~400mA

- Potencia de transmisión：0-10 dBm

- Frecuencia：2402~2480 MHz

- Canal：0~13

- Velocidad de red：1-11 Mbps para 802.11b/6-54Mbps para 802.11g

- Dimensiones：60X56X19 mm

- Peso neto：24±1 g

- Autenticación WiFi segura：WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

- Aplicaciones de red integradas：cliente DHCP, cliente DNS, ARP, ping ICMP, FTP, TELNET, HTTP, UDP, TCP

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_Interface_Function.jpg)

- **RN-171：**Módulo LAN Inalámbrico WIFLY GSX 802.11 b/g.

- **Área de Configuración del Puerto Serie por Software:** Elige los pines digitales que te gustaría usar como RX y TX del RN171.

- **Botón de reinicio:** Reinicia el Wifi Shield.

- **Ilustración de indicadores de estado:**
- Dos LEDs(D1,D5) parpadearán alternativamente cuando no exista conexión.

- Después de conectarse al router, el Indicador de estado de Asociación al AP(D1) parpadeará.

- Después de conectarse al router y al Servidor TCP, el Indicador de estado del AP(D1) permanecerá siempre encendido.

## Comenzar ##

### Demo: Wifly_Test ###

Descarga la [Librería del Wifi Shield](https://github.com/Seeed-Studio/WiFi_Shield) en github, descomprímela en la carpeta libraries de Arduino.

```cpp

#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX
SoftwareSerial uart(2, 3);
WiFly wifly(&uart);
//WiFly wifly(&Serial1);     // for leonardo, use hardware serial - Serial1

void setup() {
  uart.begin(9600);

  Serial.begin(9600);
  Serial.println("--------- WIFLY TEST --------");

  // wait for initilization of wifly
  delay(3000);

  uart.begin(9600);     // WiFly UART Baud Rate: 9600

  wifly.reset();

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  // get WiFly params
  wifly.sendCommand("get everthing\r");
  char c;
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
  }

  if (wifly.commandMode()) {
    Serial.println("Enter command mode. Send \"exit\"(with \\r) to exit command mode");
  }
}

void loop() {
  while (wifly.available()) {
    Serial.write(wifly.read());
  }

  while (Serial.available()) {
    wifly.write(Serial.read());
  }
}

```

1.Conecta D2(RX) y D3(TX) del puerto serie por software con TX y RX del shield WiFi.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_UART.jpg)

2.Cambia el código para actualizar la información de tu punto de acceso

```

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

```

3.Descarga el sketch a Arduino, abre el Monitor Serie, establece la velocidad de baudios a 9600, configura la tecla enter a Retorno de carro. El WiFi Shield mostrará algunos mensajes y entrará en modo comando. En modo comando, puedes introducir algunos comandos para interactuar:

  **get wlan** - obtener información wlan

  **join** - unirse a una red

 **ping** seeedstudio.com - ¡hacer ping a seeed!

  Para más comandos, consulta el [Manual de Usuario del Módulo WiFi](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf)

  ![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/Wi-Fi_Info.png)

4.Para uso adicional, prueba otros ejemplos de la biblioteca del WiFi shield.

### Demo para Otros ###

## Solución de Problemas ##

Si el Wifi Shield no responde a ningún comando, intenta hacer un restablecimiento de fábrica siguiendo [la guía](https://seeeddoc.github.io/Wifly_171_troubleshooting/)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]** [Archivos Eagle del WiFi Shield](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip)
- **[PDF]**[PCB del wifi Shield V1.1](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1.pdf)
- **[PDF]**[Esquema del wifi Shield V1.1](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1%20SCH.pdf)
- **[Hoja de Datos]**[Hoja de Datos RN-171](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-171.pdf)
- **[Biblioteca]**[Biblioteca del Wifi Shield](https://github.com/Seeed-Studio/WiFi_Shield)
- **[Manual]**[Manual de Usuario del Módulo WiFi](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf)

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
