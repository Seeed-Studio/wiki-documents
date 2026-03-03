---
title: Módulo Transceptor Serie WiFi
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/WiFi_Serial_Transceiver_Module/
slug: /es/WiFi_Serial_Transceiver_Module
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/WiFi%20Serial%20Transceiver%20Module.jpg)

En este tutorial, usaremos un seeeduino para controlar el módulo WiFi ESP8266 para solicitar una página estática desde internet. Este es un uso básico de socket TCP, para otros usos, por favor consulte la guía de comandos AT del módulo.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)

**Lista de materiales:**

- [Seeeduino V3](https://www.seeedstudio.com/Seeeduino-V30-Atmega-328P-p-669.html) / Arduino Uno
- [Módulo WiFi Serie ESP8266](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)
- [UartSBee v4](https://www.seeedstudio.com/UartSBee-V4-p-688.html) / otro convertidor USB a TTL

!!!Note
    Usamos un puerto serie por software para imprimir información de depuración ya que solo hay un puerto serie por hardware en la placa seeeduino. Pero la limitación del puerto serie por software es que no puede comunicarse a una velocidad de baudios mayor que 19200. Así que parte de la salida del módulo ESP se perderá porque la velocidad de baudios 57600 del módulo ESP es mayor que la del puerto serie por software. Si tienes una placa con más de un puerto serie por hardware (ej. Arduino Mega 2560), el caso será más fácil.

## Paso a Paso
---
- **Paso 1**: conecta el módulo como se muestra en la siguiente imagen

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Wifi_connection.jpg)

- **Paso 2**: Programa la placa seeeduino.

   - Abre Arduino IDE y crea un nuevo sketch;
   - Pega el siguiente código en el editor de sketch (necesitas modificar las macros SSID y PASS según tu situación);

```c
#include <SoftwareSerial.h>
   #define SSID "xxxxxxxx"
   #define PASS "xxxxxxxx"
   #define DST_IP "220.181.111.85" //baidu.com
   SoftwareSerial dbgSerial(10, 11); // RX, TX
   void setup()
   {
     // Open serial communications and wait for port to open:
     Serial.begin(57600);
     Serial.setTimeout(5000);
     dbgSerial.begin(9600); //can't be faster than 19200 for softserial
     dbgSerial.println("ESP8266 Demo");
     //test if the module is ready
     Serial.println("AT+RST");
     delay(1000);
     if(Serial.find("ready"))
     {
       dbgSerial.println("Module is ready");
     }
     else
     {
       dbgSerial.println("Module have no response.");
       while(1);
     }
     delay(1000);
     //connect to the wifi
     boolean connected=false;
     for(int i=0;i<5;i++)
     {
       if(connectWiFi())
       {
         connected = true;
         break;
       }
     }
     if (!connected){while(1);}
     delay(5000);
     //print the ip addr
     /*Serial.println("AT+CIFSR");
     dbgSerial.println("ip address:");
     while (Serial.available())
     dbgSerial.write(Serial.read());*/
     //set the single connection mode
     Serial.println("AT+CIPMUX=0");
   }
   void loop()
   {
     String cmd = "AT+CIPSTART=\"TCP\",\"";
     cmd += DST_IP;
     cmd += "\",80";
     Serial.println(cmd);
     dbgSerial.println(cmd);
     if(Serial.find("Error")) return;
     cmd = "GET / HTTP/1.0\r\n\r\n";
     Serial.print("AT+CIPSEND=");
     Serial.println(cmd.length());
     if(Serial.find(">"))
     {
       dbgSerial.print(">");
       }else
       {
         Serial.println("AT+CIPCLOSE");
         dbgSerial.println("connect timeout");
         delay(1000);
         return;
       }
       Serial.print(cmd);
       delay(2000);
       //Serial.find("+IPD");
       while (Serial.available())
       {
         char c = Serial.read();
         dbgSerial.write(c);
         if(c=='\r') dbgSerial.print('\n');
       }
       dbgSerial.println("====");
       delay(1000);
     }
     boolean connectWiFi()
     {
       Serial.println("AT+CWMODE=1");
       String cmd="AT+CWJAP=\"";
       cmd+=SSID;
       cmd+="\",\"";
       cmd+=PASS;
       cmd+="\"";
       dbgSerial.println(cmd);
       Serial.println(cmd);
       delay(2000);
       if(Serial.find("OK"))
       {
         dbgSerial.println("OK, Connected to WiFi.");
         return true;
         }else
         {
           dbgSerial.println("Can not connect to the WiFi.");
           return false;
         }
       }
```

- **Paso 3**: Abre el Monitor Serie y presiona el botón de reset de la placa seeeduino, verás la salida.

¡Por último, Feliz Hacking! :)

## Proyectos Relacionados
---
[Recipe Community](https://www.seeedstudio.com/recipe/) es un lugar increíble donde los makers comparten sus trabajos asombrosos aquí. Nuestros makers han hecho muchos proyectos increíbles con esp8266, ¡échale un vistazo!

**WiFi Scanner - Conoce la Señal WiFi a tu alrededor**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-WiFi_Scanner-Know_the_WiFi_Signal_around_you.jpg)

Construye tu propio escáner Wifi con unos pocos pasos simples, todo lo que necesitas hacer es preparar:

- Una Placa de Desarrollo NodeMcu
- Un OLED I2C.
- Algunos cables
- Y lo más importante, ¡UN CORAZÓN ARDIENTE EN ESP8266!

[Entonces, ¿por qué no hacer uno para ti mismo?](https://community.seeedstudio.com/project_detail.html?id=220)


**Proyecto IoT Primario con NodeMcu &gt;ESP8266&lt;**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-Primary_IoT_Make_with_NodeMcu--ESP8266--.jpg)

Un Monitor de Temperatura y Humedad en línea hecho con:

- Una Placa de Desarrollo NodeMcu
- Grove - Sensor de Temp y Humedad
- Algunos cables


Otro truco fácil, [¿por qué no hacer uno para ti mismo?](https://community.seeedstudio.com/project_detail.html?id=232)

¿No, no es suficiente? Más [Proyectos Increíbles con ESP8266](https://community.seeedstudio.com/discover.html?t=wio).

Incluso más Proyectos Increíbles En [Recipe](https://community.seeedstudio.com/projects.html#recipe)

## Soporte Técnico y Discusión del Producto
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>