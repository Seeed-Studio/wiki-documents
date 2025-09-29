---
description: Comenzar con Wio Tracker 1110 
title: Comenzar con Wio Tracker 1110 
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_Wio-Trakcer_1110
sidebar_position: 2
last_update:
  date: 11/3/2023
  author: Jessie
---

En este tutorial, guiaremos a los usuarios para configurar rápidamente la placa de desarrollo Wio Tracker 1110 a través del firmware de fábrica, conectarla a la nube SenseCAP y verificar los datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/image.png" alt="pir" width={800} height="auto" /></p>

### Vincular la placa de desarrollo

Descarga la aplicación SenseCAP Mate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

:::tip Nota
Por favor selecciona la versión **Global** al registrarte.
:::


Haz clic en `+` -> `Add Device`.

Luego escanea el código QR en la etiqueta de la placa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png" alt="pir" width={500} height="auto" /></p>

Nombra tu dispositivo y selecciona el `Device Group`(opcional), luego haz clic en `Bind to account`.<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png" alt="pir" width={300} height="auto" /></p>

### Configurar la frecuencia y conectar al gateway

Regresa a la página `Device`, entonces verás que la placa de desarrollo ha sido vinculada.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png" alt="pir" width={300} height="auto" /></p>


Haz clic en `Configuration Now`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/1.jpeg" alt="pir" width={300} height="auto" /></p>

Haz clic en `Ready, go to the next step`, que es entrar a la búsqueda de dispositivos. 

:::info Nota
El dispositivo necesita estar encendido primero.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/2.jpeg" alt="pir" width={300} height="auto" /></p>

Busca el dispositivo mediante `Scan`, y cuando encuentres un elemento en la lista con el mismo `código S/N` que tu propio dispositivo, haz clic para entrar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/3.jpeg" alt="pir" width={300} height="auto" /></p>

Ve a la página `Setting`, elige la plataforma ya sea como `SenseCAP for the Things Network` o `SenseCAP for Helium`.

:::info Nota
También puedes elegir otras, pero en ese caso, no podrás usar la plataforma SenseCAP.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

<div style={{textAlign: 'center'}}>
<h2>Plataforma</h2>
<table>
  <tbody>
    <tr>
      <td><h4>Plataforma</h4></td>
      <td><h4>Descripción</h4></td>
    </tr>
    <tr>
      <td>SenseCAP for The Things Network</td>
      <td>Plataforma predeterminada.
Debe usarse con SenseCAP Gateway. SenseCAP construye un servidor TTN propietario que permite que los sensores se usen listos para usar cuando se emparejan con un gateway SenseCAP.<br />
      <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>SenseCAP Outdoor Gateway</span></a><br />
      <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>SenseCAP Indoor Gateway</span></a></td>
    </tr>
    <tr>
      <td>SenseCAP for Helium</td>
      <td>Cuando hay cobertura de la red Helium, los datos pueden subirse vía Helium. Los dispositivos funcionan en una consola privada de Helium de SenseCAP. Los usuarios no necesitan crear dispositivos en la consola de Helium, listos para usar con la aplicación SenseCAP Mate y Portal.<br />
      <a href="https://explorer.helium.com/" target="_blank"><span>Cobertura Helium</span></a></td>
    </tr>
    <tr>
      <td>Helium</td>
      <td>Conectar dispositivo a tu consola pública de Helium</td>
    </tr>
    <tr>
      <td>The Things Network</td>
      <td>Conectar dispositivo a tu servidor TTN(TTS)</td>
    </tr>
    <tr>
      <td>Other Platform</td>
      <td>Otro Servidor de Red LoRaWAN</td>
    </tr>
  </tbody>
</table>
</div>

Elige el `Plan de Frecuencia`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/5.jpeg" alt="pir" width={300} height="auto" /></p>

Ingresa el `Intervalo de Subida de Posición (en minutos)` y el `Intervalo de Subida de Sensor (en minutos)`.

| Parámetros | Descripción |
| - | - |
| Intervalo de Subida de Posición (minutos) | Subida programada de información de ubicación.<br/>Por defecto 5 minutos.<br/>Cuanto mayor sea la frecuencia, mayor será el consumo de energía. |
| Intervalo de Subida de Sensor (minutos) | Subida programada de datos del sensor.<br/>Por defecto 5 minutos.<br/>Cuanto mayor sea la frecuencia, mayor será el consumo de energía. |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/6.jpeg" alt="pir" width={300} height="auto" /></p>

Una vez que toda la información en Configuración se alinee con tus requisitos, puedes hacer clic en `Enviar` para transmitirla al **Tracker Wio 1110**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/7.jpeg" alt="pir" width={300} height="auto" /></p>

Ve a la página `Medir`, haz clic en `Medir`, entonces obtendrás los valores del sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/8.jpeg" alt="pir" width={500} height="auto" /></p>


### Verificar los datos

Enciende la placa de desarrollo, y por favor asegúrate de tener cobertura de red cerca, cuando la placa de desarrollo se conecte exitosamente a la red, mostrará `en línea` en la página `Dispositivo`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/9.jpeg" alt="pir" width={300} height="auto" /></p>

Si tu área sufre de señal deficiente, simplemente instala una puerta de enlace LoRaWAN - es tan simple como configurar un router Wi-Fi. La belleza de LoRa radica en su flexibilidad y facilidad de expansión de red. Esta solución confiable también es rentable. Por ejemplo, el [SenseCAP M2 Indoor LoRaWAN Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), ¡puede extender tu cobertura hasta 10km!

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png" alt="pir" width={600} height="auto" /></p>


:::tip
Por favor coloca tu placa de desarrollo junto a la ventana o en un lugar sin obstrucciones, para que haya una mejor señal GPS, y entonces la placa pueda obtener exitosamente los datos de ubicación.
:::

Puedes verificar la ubicación y los datos del sensor en la APP SenseCAP Mate o en el Portal SenseCAP.

**APP SenseCAP Mate**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png" alt="pir" width={500} height="auto" /></p>

**Portal SenseCAP**

Si has creado una cuenta a través de la APP, puedes iniciar sesión directamente.
Navega a la página de tu dispositivo, haz clic en `Datos` para verificar.

:::info
[Guía de Usuario del Portal SenseCAP](https://sensecap-docs.seeed.cc/quickstart.html)
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png" alt="pir" width={800} height="auto" /></p>

### Cómo subir datos inmediatamente 

1、Cuando la placa de desarrollo es agitada, causando vibraciones, activa **el sensor acelerómetro de tres ejes** para recopilar y subir datos inmediatamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake.GIF" alt="pir" width={800} height="auto" /></p>

Puedes ver la información en el monitor serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-shake.png" alt="pir" width={800} height="auto" /></p>

La interfaz de la app SenseCAP Mate mostrará paquetes de datos cuando el dispositivo sea agitado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/shake-app.JPG" alt="pir" width={300} height="auto" /></p>

2、Presiona el `BOTÓN` una vez, y el dispositivo inmediatamente recopilará y subirá datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/button.GIF" alt="pir" width={800} height="auto" /></p>

Puedes ver la información en el monitor serie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/image-button.png" alt="pir" width={800} height="auto" /></p>

La interfaz de la app SenseCAP Mate mostrará señales SOS y paquetes de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/sos-app.JPG" alt="pir" width={300} height="auto" /></p>


### Agregar Sensor Grove (opcional)


Además de los sensores integrados, las posibilidades son infinitas con la placa de desarrollo Wio tracker 1110. En el firmware de fábrica, los siguientes sensores Grove también están permitidos para acceder a esta placa y ser reconocidos automáticamente.


<table align="center">
  <caption> <h2>Módulos Grove</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Consigue Uno Ahora</h4></td>
    <td><h4>Sensor</h4></td>
    <td><h4>Consigue Uno Ahora</h4></td>
    </tr>
    <tr>
    <td>Sensor de Sonido-Basado en amplificador LM358</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png" alt="" width={200} height="auto"/></a>
</div></td>
    <td>Sensor Barómetro de Alta Precisión-DPS310</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Sensor de Calidad del Aire(SGP41)</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg" alt="" width={200} height="auto"/></a>
</div></td>
    <td>Sensor de Luz Solar-SI1151</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
<tr>
    <td>Sensor de Distancia Ultrasónico</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html" target="_blank" rel="noopener"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>

  </tbody></table>

Conecta el sensor Grove al puerto Grove correspondiente en la placa de desarrollo Wio Tracker.

También puedes usar un [Grove-I2C Hub](https://www.seeedstudio.com/Grove-I2C-Hub.html) para conectar múltiples sensores I2C a la placa.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

## Flashear Firmware 

* [Firmware Más Reciente](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

Haz doble clic en el botón `Reset`, debería aparecer un controlador `WM1110_BOOT` en tu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arrastra el archivo `.uf2` al controlador. La descarga se ejecutará automáticamente, luego el controlador se desconectará.


## API de SenseCAP 

La API de SenseCAP es para que los usuarios gestionen dispositivos IoT y datos. Incluye 3 tipos de métodos de API: protocolo HTTP, protocolo MQTT, y protocolo Websocket.
* Con la API HTTP, los usuarios pueden gestionar dispositivos LoRa, para obtener datos en bruto o datos históricos.
* Con la API MQTT, los usuarios pueden suscribirse a los datos de medición en tiempo real del sensor a través del protocolo MQTT.
* Con la API Websocket, los usuarios pueden obtener datos de medición en tiempo real de sensores a través del protocolo Websocket.

Por favor consulta la [Guía del Usuario de la API](https://sensecap-docs.seeed.cc/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>
