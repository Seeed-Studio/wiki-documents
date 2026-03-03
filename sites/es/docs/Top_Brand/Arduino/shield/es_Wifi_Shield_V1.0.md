---
description:  Wifi Shield V1.0
title:  Wifi Shield V1.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wifi_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield.jpg)

Este Wifi Shield utiliza un módulo wifi RN171 para proporcionar a tu Arduino/Seeeduino la función de Ethernet serie. Solo necesita dos pines para conectar tu dispositivo a redes inalámbricas 802.11b/g con este shield. Cuenta con una antena independiente que puede cubrir un rango más amplio y transmitir señales más fuertes. Con soporte para protocolos de comunicación TCP, UDP y FTP comunes, este Wifi Shield puede satisfacer las necesidades de la mayoría de proyectos de redes inalámbricas, como redes domésticas inteligentes, controles de robots o estaciones meteorológicas personales, etc. Preparamos un conjunto de comandos fácil y conveniente para este shield para que puedas usar código limpio y conciso para ejecutar la función.

# Características #

- Compatible con Arduino, Seeeduino, Arduino Mega y Seeeduino Mega

- Velocidad de datos del host hasta 1 Mbps para UART, 2 Mbps sobre esclavo SPI

- El puerto serie UART del RN171 en el Shield puede conectarse a Arduino mediante jumpers

- El pin SPI del RN171 está simplemente expuesto

- Con dos conectores Grove, facilitando la conexión de módulos Grove I2C y IO digital a Arduino

- Autenticación WiFi segura WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

- Aplicaciones de red integradas: cliente DHCP, cliente DNS, ARP, ping ICMP, FTP, TELNET, HTTP, UDP, TCP

# Especificaciones #

<table cellspacing="0" width="80%">
  <tbody>
    <tr>
      <th scope="col">Elemento</th>
      <th scope="col">Mín</th>
      <th scope="col">Típico</th>
      <th scope="col">Máx</th>
      <th scope="col">Unidad</th>
    </tr>
    <tr>
      <th scope="row">Voltaje</th>
      <td>3.3</td>
      <td>5</td>
      <td>5.5</td>
      <td>VDC</td>
    </tr>
    <tr>
      <th scope="row">Corriente</th>
      <td>25</td>
      <td>60</td>
      <td>400</td>
      <td>mA</td>
    </tr>
    <tr>
      <th scope="row">Potencia de transmisión</th>
      <td colspan="3">0-10</td>
      <td>dBm</td>
    </tr>
    <tr>
      <th scope="row">Frecuencia</th>
      <td colspan="3">2402~2480</td>
      <td>MHz</td>
    </tr>
    <tr>
      <th scope="row">Velocidad de red</th>
      <td colspan="4">1-11 Mbps para 802.11b/6-54Mbps para 802.11g</td>
    </tr>
    <tr>
      <th scope="row">Dimensión</th>
      <td colspan="3">60x56x19</td>
      <td>mm</td>
    </tr>
    <tr>
      <th scope="row">Peso neto</th>
      <td colspan="3">20±2</td>
      <td>g</td>
    </tr>
  </tbody>
</table>

# Función de Interfaz

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield009.jpg)

# Uso #

El ejemplo que proporcionamos aquí es para mostrarte cómo conectar este Wifi Shield al Ethernet y obtener intercambio de datos entre el shield y un servidor virtual iniciado.

### Instalación de Hardware ###

El paquete que recibes debe contener estas partes: un Wifi Shield, una antena y un conector de antena.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield001.jpg)

Ensambla estas partes juntas como en la imagen de abajo.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield002.jpg)

Monta el shield en tu Arduino/Seeeduino

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield003.jpg)

Ok, es hora de escribir algo de código.

### Programación de Software ###

Primero tienes que asegurarte de que Arduino1.0 ya haya sido instalado en tu computadora.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Tb2.jpg)
Descarga la biblioteca wifishield aquí [Biblioteca Wifi Shield](https://github.com/Seeed-Studio/WiFi_Shield) y descomprímela en el archivo de bibliotecas de Arduino a través de esta ruta: <code>..\arduino-1.0\libraries</code>
Abre un nuevo sketch en Arduino-1.0, luego copia el siguiente código a tu sketch.

```cpp
#include "Wifly.h"
#include <SoftwareSerial.h>
WiflyClass Wifly(2,3);
void setup()
{
 Serial.begin(9600);//use the hardware serial to communicate with the PC
 Wifly.init();//Initialize the wifishield
 Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router
 Wifly.join("SSID");
 Wifly.checkAssociated();
 while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
 Wifly.writeToSocket("Connected!");
}
void loop()
{
 if(Wifly.canReadFromSocket())
 {
   Serial.print(Wifly.readFromSocket());
 }
 if(Serial.available())
 {
   Wifly.print((char)Serial.read());
 }
}

```

Necesitas hacer algunas modificaciones en este sketch según tu configuración específica.

1.Selecciona el Pin para conectar el Puerto Serie del Módulo WIFI

```txt
WiflyClass Wifly(2,3);

```

Los parámetros 2 y 3 aquí representan RX y TX respectivamente para el puerto serie por software. Basándose en esto, los pines D2 y D3 deben estar cortocircuitados como se muestra en la imagen a continuación. Puedes cambiar el número de pin como desees, solo asegúrate de hacer los cambios correspondientes en los pines cortocircuitados.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield004.jpg)

2.Completa la información de la red inalámbrica

```
Wifly.setConfig("SSID","PASSWORD");//here to set the ssid and password of the Router
Wifly.join("SSID");
```

Completa el nombre de tu red objetivo en SSID y la contraseña en PASSWORD. Por ejemplo, si quieres conectarte a China-NET y su contraseña es 12345678, entonces esta línea de código debería cambiarse a:

```
Wifly.setConfig("China-NET","12345678");//here to set the ssid and password of the Router
Wifly.join("China-NET");
```

**Nota:**

1.El tipo de seguridad del router solo admite WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

2.El router debe conectarse a Internet

3.Complete la información del servidor remoto

```
while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
```

En la línea superior, "192.168.1.164" es la dirección IP remota del servidor virtual, y "90" es la información del puerto.

Proporcionamos un software Cliente TCP [YFTCPServer.zip](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/YFTCPServer.zip) y software de puerto serie [SCCOM](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Sscom32E.zip) para propósitos de prueba.

Abre el software Cliente TCP y verás:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield005.jpg)

Cambia tus líneas de acuerdo con la información que obtienes de este software.

```
while(!Wifly.connect("192.168.1.164","90"));//connect the remote service
```

Sube el sketch.

Ahora ejecuta primero el software TCP Client, luego el software del puerto serie, haz clic en el botón "OpenCom", espera hasta que aparezca un mensaje `<--Connected!` en la pantalla del software virtual.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield006.jpg)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/img/Wifishield007.jpg)

Ahora puedes comunicarte con el Wifi Shield a través de este software de puerto serie.

Para obtener información más detallada sobre el RN171, puedes descargar la hoja de datos aquí [Hoja de datos RN171](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Recursos #

- **[Eagle]**[Archivo Eagle del Wifi Shield](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/Wifi_Shield_Eagle.zip)
- **[PDF]**[PCB del wifi Shield V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0.pdf)
- **[PDF]**[Esquemático del wifi Shield V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/wifi%20Shield%20V1.0%20SCH.pdf)
- **[Hoja de datos]**[Hoja de datos RN171](https://files.seeedstudio.com/wiki/Wifi_Shield_v1.0/res/WiFly-RN-UM.pdf)
- **[Librería]**[Librería del Wifi Shield](https://github.com/Seeed-Studio/WiFi_Shield)

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
