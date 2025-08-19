---
description: The Things Indoor Gateway
title: The Things Indoor Gateway
keywords:
- Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/The-Things-Indoor-Gateway
last_update:
  date: 05/19/2025
  author: Guillermo
---



![TTIG](https://files.seeedstudio.com/products/113990896/wiki/113990894_All-22.png)


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/The-Things-Indoor-Gateway-US-p-4710.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introducción del Producto

[The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/) es un producto de [The Things Network](https://www.thethingsnetwork.org/) que se caracteriza por su alta fiabilidad, alto rendimiento y rentabilidad. Es una puerta de enlace LoRaWAN de 8 canales basada en el chip SX1308, con conectividad WiFi integrada mediante ESP8266. Con múltiples versiones y diferentes tipos de enchufes disponibles, se adapta a una amplia gama de aplicaciones que requieren cobertura dinámica. Como puerta de enlace IoT diseñada por The Things Network, ofrece todas las funciones avanzadas que TTN proporciona a sus usuarios. Por supuesto, esta gateway puede conectarse a la red segura y colaborativa de Internet de las Cosas, construida para ofrecer cobertura en numerosos países del mundo, alcanzando a millones de personas. Una herramienta ampliamente utilizada por la comunidad es [TTN Mapper](https://ttnmapper.org/). Por lo tanto, puedes usar esta gateway para convertirte en uno de los colaboradores de esta red cargándola en [The Network Console](https://console.thethingsnetwork.org/) o disfrutar de la red comunitaria pública creada por otras gateways de TTN.

La gateway The Things Indoor es compatible con LoRaWAN 1.0.3, lo que la hace compatible con otros sensores LoRaWAN. Seeed Studio ofrece una amplia variedad de sensores enfocados en diversas aplicaciones de monitoreo ambiental inalámbrico. Si necesitas sensores para escenarios al aire libre que midan CO2, humedad del suelo o temperatura, por mencionar algunos, los [sensores SenseCAP](https://www.seeedstudio.com/SenseCAP-c-1339.html) son tu mejor opción.

Con el uso de la gateway WiFi LoRaWAN The Things Indoor, la consola de The Things Network y los sensores LoRaWAN SenseCAP, puedes construir fácilmente tu propio sistema IoT en casa, en el jardín, en la oficina, en la cadena de suministro o en fábricas. Siguiendo las [instrucciones de instalación paso a paso](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf) que se proporcionan a continuación, podrás configurar tu gateway LoRaWAN en menos de 5 minutos y comenzar tu aventura en el mundo del IoT.

![spec](https://files.seeedstudio.com/products/113990896/wiki/TTN%20gateway%20specification%20picture_page-0001.jpg)

## Características

* **Instalación sencilla**: conectividad mediante WiFi 802.11 b/g/n a través de ESP8266; configuración rápida en menos de 5 minutos
* **Uso global**: disponible para EU868, US915 y AU915; compatible con LBT (Listen-Before-Talk)
* **Software avanzado**: compatible con el moderno protocolo BasicStation
* **Alta fiabilidad**: certificado por CE/FCC/IC/RCM/WPC/RoHS
* **Conveniente**: diseño compacto y portátil; puede alimentarse mediante diversas opciones: enchufe de pared o USB tipo C con 900 mA. Antena omnidireccional incorporada para uso doméstico
* **Gran capacidad**: gateway LoRaWAN de 8 canales para interiores, basada en el chip SX1308

## Especificaciones
<!-- 
<style type="text/css" xml="space">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:2px 20px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:2px 20px;word-break:normal;}
.tg .tg-2egc{background-color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-gmm0{background-color:#9b9b9b;border-color:#ffffff;color:#ffffff;text-align:left;vertical-align:top}
</style> -->
<table class="tg">
<thead>
<tr><th class="tg-gmm0" colspan="2">LoRa</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-2egc">Chipset</td>
<td class="tg-2egc">Semtech SX1308</td>
</tr>
<tr>
<td class="tg-2egc">Canales</td>
<td class="tg-2egc">8 canales</td>
</tr>
<tr>
<td class="tg-2egc">Sensibilidad de recepción</td>
<td class="tg-2egc">-140/-135 dBm (EU/US)</td>
</tr>
<tr>
<td class="tg-2egc">Potencia de transmisión</td>
<td class="tg-2egc">Upto +27 dBM</td>
</tr>
<tr>
<td class="tg-2egc">Versión de la especificación LoRaWAN®</td>
<td class="tg-2egc">V.1.0.3</td>
</tr>
<tr>
<td class="tg-2egc">Encaminador de paquetes</td>
<td class="tg-2egc">Protocolo Basic Station</td>
</tr>
</tbody>
<thead>
<tr><th class="tg-gmm0" colspan="2">Wi-Fi</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-2egc">SoC</td>
<td class="tg-2egc">ESP9266</td>
</tr>
<tr>
<td class="tg-2egc">Modo</td>
<td class="tg-2egc">802.11 b/g/n, modo cliente</td>
</tr>
<tr>
<td class="tg-2egc">Tx Power</td>
<td class="tg-2egc">+20 dBm</td>
</tr>
<tr>
<td class="tg-2egc">Bandas de frecuencia</td>
<td class="tg-2egc">2.4 GHz</td>
</tr>
<tr>
<td class="tg-2egc">Puertos WAN/LAN</td>
<td class="tg-2egc">-</td>
</tr>
<tr>
<td class="tg-2egc">Puerto USB</td>
<td class="tg-2egc">USB Tipo-C (900 mA)</td>
</tr>
<tr>
<td class="tg-2egc">Seguridad</td>
<td class="tg-2egc">WPA/WPA2</td>
</tr>
<tr>
<td class="tg-2egc">Dimensiones</td>
<td class="tg-2egc">90*80*40 mm</td>
</tr>
<tr>
<td class="tg-2egc">Temperatura de funcionamiento</td>
<td class="tg-2egc">0-40℃</td>
</tr>
<tr>
<td class="tg-2egc">Certificaciones</td>
<td class="tg-2egc">CE/FC/IC/RCM/WPC/RoHS</td>
</tr>
</tbody>
</table>

<!-- <style type="text/css" xml="space">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:2px 20px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:2px 20px;word-break:normal;}
.tg .tg-2egc{background-color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-gmm0{background-color:#9b9b9b;border-color:#ffffff;color:#ffffff;text-align:left;vertical-align:top}
</style> -->

<table class="tg">
<tbody>
<tr>
<td class="tg-2egc">Interfaces</td>
<td class="tg-2egc">Indicadores LED</td>
</tr>
<tr>
<td class="tg-2egc">Tipo de Antenna</td>
<td class="tg-2egc">Integrada</td>
</tr>
<tr>
<td class="tg-2egc">Banda de Frecuencia</td>
<td class="tg-2egc">AU915</td>
</tr>
</tbody>
</table>

## Recursos

* [Guía de inicio para The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf)
* [Ficha técnica de The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/TTIG_datasheet.pdf)
* [Guía de inicio con AWS](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG_AWS.pdf)

## Guía de inicio de The Things Indoor Gateway con SenseCAP

![combo](https://files.seeedstudio.com/products/113990896/wiki/connection%20diagram.png)

NOTA: Si no conoces SenseCAP, aquí tienes una breve introducción:

> Como parte del primer lanzamiento de la serie de productos IIoT (Internet Industrial de las Cosas) de Seeed, SenseCAP se enfoca en aplicaciones de monitoreo ambiental inalámbrico: agricultura inteligente, agricultura de precisión y ciudades inteligentes, por mencionar algunas. Consiste en productos de hardware (sensores, registradores de datos, gateways, etc.), servicios de software (portal SenseCAP, aplicación móvil, panel abierto), y una API para la gestión de dispositivos y datos. SenseCAP es compatible con distintos protocolos de comunicación, como LoRa, 2G, 4G, NB-IoT, entre otros.

Para obtener más información, haz clic en la [Introducción a SenseCAP](https://wiki.seeedstudio.com/Industrial-IoT-SenseCAP-Introduction/)

### Paso 1: Activa tu Gateway TTIG

* Presiona el botón de reinicio (el botón pequeño en la parte trasera del gateway junto al puerto USB-C) durante 5 segundos hasta que el LED parpadee rápidamente en **VERDE &lt;-&gt; ROJO** un par de veces.
* Mantén presionado el botón **SETUP** (en la parte superior del gateway, junto al LED) durante 10 segundos hasta que el LED parpadee rápidamente en **ROJO**.
* El gateway ahora expondrá un punto de acceso WiFi cuyo **SSID** será MINIHUB-xxxxxx, donde xxxxxx son los últimos 6 dígitos del ID del gateway.
* La contraseña para esta red está impresa en el panel trasero del dispositivo, bajo la etiqueta **WiFi PW**.
* Después, accede a 192.168.4.1 desde tu navegador para ingresar a la página de configuración de WiFi.

![192](https://files.seeedstudio.com/products/113990896/wiki/192.168.4.1.png)

* Selecciona la red WiFi e introduce la contraseña si se trata de una red cerrada.
* Selecciona la opción "Guardar y Reiniciar" (Save and Reboot).
* Si tu configuración es correcta:

  * El gateway parpadeará en VERDE durante unos segundos mientras se conecta a la red.
  * Luego parpadeará en VERDE &lt;-&gt; ROJO durante unos segundos mientras se conecta al endpoint CUPS y obtiene la información necesaria para conectarse al endpoint de tráfico LNS.
* Si la configuración fue exitosa, el LED se quedará en VERDE FIJO, lo que indica que el gateway está conectado a la red LoRaWAN y listo para manejar paquetes.

### Paso 2: Registro del Gateway en la Consola de TTN

Ingresa al sitio web de TTN: [https://www.thethingsnetwork.org](https://www.thethingsnetwork.org) y crea tu cuenta. Luego accede a la sección “Console” y haz clic primero en "Gateway".

![2.1](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)
Registra tu gateway:

![2.2](https://files.seeedstudio.com/products/113990896/wiki/s2.2.png)

1. EUI del Gateway: Se muestra en la página "Add Network" (Agregar red) en 192.168.4.1.

![2.3](https://files.seeedstudio.com/products/113990896/wiki/s2.3.png)

2. Plan de Frecuencia: Consulta las etiquetas en el gateway para saber cuál corresponde.
3. Router: Selecciona el router que sea adecuado para tu región o aplicación.
4. Registro: El estado del gateway mostrará "conectado", lo que indica que el registro fue exitoso.

![2.4](https://files.seeedstudio.com/products/113990896/wiki/s2.4.png)

### Paso 3: Añadir sensores SenseCAP a la Consola TTN

#### 1. Obtener Device EUI, Device Code, App Key y App EUI

* El Device EUI y Device Code están en la etiqueta del producto SenseCAP.

![3.1](https://files.seeedstudio.com/products/113990896/wiki/s3.1.png)

* El AppEUI y AppKey del dispositivo sensor SenseCAP han sido cargados en el dispositivo por Seeed. Usa la API HTTP para obtener el App EUI y App Key. Puedes usar el navegador para realizar una solicitud HTTP GET.

![3.2](https://files.seeedstudio.com/products/113990896/wiki/s3.2.png)

En la API, reemplaza el Device EUI y Device Code con los tuyos propios respectivamente. Recibirás la siguiente respuesta en la página web, que indica tu App EUI y App Key:

![3.3](https://files.seeedstudio.com/products/113990896/wiki/s3.3.png)

#### 2. Añadir Aplicación y AppEUI

![3.4](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

1. Entra a la página "add application" (añadir aplicación):

![3.5](https://files.seeedstudio.com/products/113990896/wiki/s3.5.png)

* Application ID: Ingresa un nombre único.
* Description: Escribe una descripción.
* Handler registration: selecciona el mismo handler que el router del gateway.
* Haz clic en Add Application para continuar.

![3.6](https://files.seeedstudio.com/products/113990896/wiki/s3.6.png)

![3.7](https://files.seeedstudio.com/products/113990896/wiki/s3.7.png)

* Application → Application EUIS → Manage EUIs.
* → Add EUI
* Introduce el AppEUI del nodo que obtuviste en el paso anterior (Paso 3.1).
* → Add EUI

![3.8](https://files.seeedstudio.com/products/113990896/wiki/s3.8.png)

2. Añadir Nodo Sensor como Dispositivo en la Consola TTN

* Application → Device → register device

![3.9](https://files.seeedstudio.com/products/113990896/wiki/s3.9.png)

![3.10](https://files.seeedstudio.com/products/113990896/wiki/s3.10.png)

* Device ID: Ingresa un nombre único.
* Device EUI: Ingresa el Device EUI del nodo que obtuviste en el paso anterior (Paso 3.1).
* App Key: Ingresa el App Key del nodo que obtuviste en el paso anterior.
* App EUI: Selecciona el App EUI del nodo.
* Haz clic en Register (Registrar).

### Paso 4: Activa tus Sensores SenseCAP

#### Encendido

El interruptor de encendido está oculto dentro del dispositivo. Abre el dispositivo y enciéndelo antes de instalar los sensores. Aquí tienes las instrucciones paso a paso:

* Afloja la sonda del sensor girando la tapa en sentido contrario a las agujas del reloj. Usa el abridor de tapa blanco para facilitar este proceso. La imagen a continuación muestra el sensor TH como ejemplo y se aplica a todos los demás sensores SenseCAP.

![4.1](https://files.seeedstudio.com/products/113990896/wiki/s4.1.png)

* Después de abrir el dispositivo, gira el interruptor a la posición “ON” (encendido), y el LED en la esquina inferior derecha parpadeará, indicando que el dispositivo está encendido. Espera aproximadamente 10 segundos, luego el LED parpadeará rápidamente durante 2 segundos, indicando que el dispositivo está conectado a la red.

![4.2](https://files.seeedstudio.com/products/113990896/wiki/s4.2.png)

* Una vez conectado a la red, vuelve a conectar la sonda del sensor con el controlador del nodo sensor girándola en sentido horario. Ten en cuenta que las etiquetas en ambas partes deben estar alineadas como se muestra en la imagen a continuación; de lo contrario, las dos partes no quedarán correctamente conectadas y los datos no se cargarán.

* Verifica el estado de conexión del nodo sensor en la consola TTN: cuando el estado se ponga verde, la conexión fue exitosa.

![4.3](https://files.seeedstudio.com/products/113990896/wiki/s4.3.png)

### Paso 5: Verificación de datos

En la página de Datos se cargarán los paquetes de datos. Para el formato de la carga útil (payload), por favor consulta la sección de Decodificación. A continuación se muestran los datos obtenidos con éxito por los sensores SenseCAP LoRaWAN de humedad y temperatura del suelo, y el sensor SenseCAP LoRaWAN de CO2:

![4.4](http://files.seeedstudio.com/products/113990896/wiki/soil%20data%20board.png)

![4.5](http://files.seeedstudio.com/products/113990896/wiki/co2%20data%20board.png)
