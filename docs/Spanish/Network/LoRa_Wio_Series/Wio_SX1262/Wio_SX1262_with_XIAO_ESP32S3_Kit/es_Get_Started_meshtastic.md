---
description: Meshtastic basado en Wio-SX1262 con módulo XIAO esp32s3
title: Introducción para Meshtastic
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /es/wio_sx1262_xiao_esp32s3_for_meshtastic
sidebar_position: 2
last_update:
  date: 05/20/2025
  author: Guillermo
---

Meshtastic es una red en malla, descentralizada, sin conexión a internet y de código abierto, diseñada para funcionar en dispositivos asequibles y de bajo consumo. Seeed Studio ofrece una gama completa de dispositivos Meshtastic listos para usar, tanto para aficionados como para usuarios industriales. El kit XIAO ESP32S3 & Wio-SX1262 es una solución flexible para desarrolladores y makers.

## Flashear el Firmware

:::note
Flashea el firmware si compraste el kit antes del **24 de octubre de 2024**, siguiendo este tutorial paso a paso.
:::

**Paso 1**: Primero, abre un navegador (Edge o Chrome) y visita https://flasher.meshtastic.org/#.

**Paso 2**: Luego, usa un cable USB adecuado para conectar el dispositivo a la PC. Puede que necesites apagar el dispositivo, luego **mantén presionado el botón BOOT** mientras conectas el cable USB.

**Paso 3**: Sigue las instrucciones para realizar el flasheo. Selecciona el dispositivo como "**Seeed XIAO S3**", elige el firmware más reciente "**the lastest**" y haz clic en "**Flash**". Marca "**Full Erase and Install**" si deseas sobrescribir el firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Descripción General del Software

Meshtastic ofrece múltiples plataformas de software para que los usuarios elijan, incluyendo una aplicación para Android, una para Apple y un cliente web. También proporciona una interfaz de línea de comandos en Python, una versión nativa para Linux y métodos de integración para que los desarrolladores puedan utilizar.

Para información específica, por favor ve a [el sitio web oficial de Meshtastic](https://meshtastic.org/docs/software/).

* [Aplicación para Android](https://meshtastic.org/docs/category/android-app/): La aplicación para Android está disponible en el repositorio de F-Droid y en Google Play Store. Esto permite conectarte a tu dispositivo Meshtastic desde tu teléfono Android mediante Bluetooth, Wi-Fi (si están en la misma red) o USB On-The-Go (OTG).
* [Aplicación para Apple](https://meshtastic.org/docs/category/apple-apps/): Está disponible en la App Store. De forma predeterminada, la aplicación Meshtastic para iOS admite el uso de los mapas offline nativos de Apple.
* [Cliente Web](https://meshtastic.org/docs/software/web-client/): Meshtastic Web es un cliente Meshtastic que se ejecuta directamente en tu navegador.
* [CLI de Python](https://meshtastic.org/docs/software/python/cli/): El paquete de Python instalado con pip incluye un ejecutable de línea de comandos llamado "meshtastic", que muestra los paquetes enviados a través de la red en formato JSON y permite ver información de depuración serial desde los dispositivos Meshtastic.
* [Versión Nativa para Linux](https://meshtastic.org/docs/software/linux-native/): El software del dispositivo también puede ejecutarse de forma nativa en una máquina Linux gracias al framework Portduino.
* [Integraciones con Meshtastic](https://meshtastic.org/docs/software/integrations/): El ecosistema Meshtastic es altamente extensible y permite una integración sencilla con diversos productos y proyectos de software existentes.


## Conexión del Dispositivo

Antes de usar Meshtastic, es necesario conectar el dispositivo. Existen dos métodos de conexión. El primero consiste en usar una placa de expansión, y la información correspondiente se mostrará en la pantalla. Luego, la configuración puede realizarse en la plataforma correspondiente según la información reflejada. El segundo método es conectar el XIAO con el módulo Wio-SX1262 y utilizar una herramienta de puerto serial para obtener el ID del nodo y la contraseña.

### Método 1: Conectado a la Placa de Expansión

Después de flashear el firmware y descargar la aplicación Meshtastic, la placa de expansión es una buena herramienta 
para la conexión y aplicaciones adicionales, como añadir sensores y módulos Grove fácilmente.

**Paso 1**: Asegúrate de que el dispositivo que se va a conectar (como "device") esté encendido y en estado detectable. Luego, abre la aplicación Meshtastic en tu teléfono móvil.

**Paso 2**: En la aplicación Meshtastic, hay un ícono de "+" en la esquina inferior derecha. Haz clic en él para que la aplicación comience a escanear dispositivos cercanos disponibles para conexión. Luego, selecciona el ID del dispositivo correspondiente que se muestra en la pantalla OLED.

**Paso 3**: Una vez seleccionado correctamente, introduce el código que se muestra en la pantalla OLED. Presiona el botón para cambiar la visualización.

**Funciones del Botón:**

* Presiona una vez para cambiar la pantalla.  
* Presiona dos veces para transmitir.  
* Presiona tres veces para cambiar el modo GPS.  

**Paso 4**: Configura la región LoRa; después de esto, el dispositivo se reiniciará.

**Paso 5**: Una vez finalizado el reinicio, el estado del dispositivo puede verificarse en la aplicación Meshtastic y en la pantalla OLED.

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Método 2: Herramienta de puerto serial

Selecciona una herramienta de depuración de puerto serial que prefieras. A continuación se muestra un ejemplo utilizando **Comtool en macOS**. Selecciona la conexión **serial**, elige **el puerto correspondiente**, configura la velocidad de baudios a **115200**, y activa **RTS y DTR**. Abre la conexión y podrás ver los datos de conexión. Busca "**nodenum**" para encontrar el ID de nodo correspondiente. Su **contraseña predeterminada es 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
Los últimos cuatro dígitos del nodenum corresponden al ID de número de dispositivo descubierto por la app de Meshtastic. Por ejemplo, "nodenum 0x9e20d02c" aparece como "Meshtastic_d02c" en la app de Meshtastic.
:::

## Comunicación con Wio Tracker T1000-E

**Paso 1**. Conecta el Wio Tracker T1000-E siguiendo la [wiki](https://wiki.seeedstudio.com/sensecap_t1000_e/#get-started-1).

**Paso 2**. Asegúrate de que la siguiente configuración sea igual a la usada en tu XIAO ESP32S3 para Meshtastic.

1. **Activación y configuración del dispositivo**
- Asegúrate de que ambos dispositivos estén encendidos y funcionando correctamente.
- La función de comunicación inalámbrica del dispositivo (como Bluetooth, LoRa, etc.) debe estar habilitada. Verifica los ajustes relevantes para asegurarte de que no esté desactivada o restringida accidentalmente.

2. **Distancia y fuerza de la señal**
- La distancia entre los dos dispositivos no debe ser demasiado grande. En pruebas iniciales, la distancia de comunicación del XIAO ESP32S3 para Meshtastic con una antena IPEX de 2 dBm supera los 2.5 km. En un entorno más abierto, puede superar los 20 km.

3. **Configuración de red**
- Asegúrate de que ambos dispositivos estén en el mismo modo de red o configuración de canal. Puedes configurar fácilmente la misma **región LoRa** y el **Modem preset** usando la app de Meshtastic.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>


**Paso 3**. Comunicación con Wio Tracker T1000-E

Una vez conectado, puedes comenzar a enviar y recibir mensajes a través de la red Meshtastic. Los mensajes pueden ser de texto o pueden soportar funciones adicionales, dependiendo de las capacidades de los dispositivos y de la aplicación. También puedes monitorear la actividad de la red y ver qué dispositivos están actualmente conectados y activos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Conexión de Sensores

En la aplicación Meshtastic, el kit Wio-SX1262 con XIAO ESP32S3 es capaz de soportar una amplia variedad de sensores. Cuando se utiliza junto con la placa de expansión XIAO, puede soportar numerosos sensores Grove; por favor, consulta [aquí](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Además, cuando se combina con el módulo adicional GNSS, forma el módulo más pequeño dentro de Meshtastic que cuenta con funcionalidad GPS.


### Sensor de Húmedad y Temperatura

<div class="table-center">
  <table align="center">
    <tr>
      <th>Sensor de Húmedad y Temperatura DHT20</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>


**Step 1**: Connect the Grove DHT20 sensor of the XIAO Expansion Board

**Step 2**: Enable `Detection Sensor` in Meshtastic APP

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>


### Sensor GNSS

<div class="table-center">
  <table align="center">
    <tr>
      <th>Módulo de Sensor GNSS L76K para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>



## Configuración Inicial

:::note
Para más detalles, por favor, revisa la documentación de [Meshtastic](https://meshtastic.org/docs).
:::

### Configuración de Radio

Hay varias secciones de configuración en el firmware de Meshtastic, estas están divididas para poder enviarse como pequeños mensajes administrativos a través de la malla.

| Nombre | Descripción |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Opciones de configuración Bluetooth: Activado, Modo de emparejamiento y PIN fijo. |
| [Canales](https://meshtastic.org/docs/configuration/radio/channels/) | Opciones de configuración de canales: Índice, Rol y Ajustes. |
| [Dispositivo](https://meshtastic.org/docs/configuration/radio/device/) | Opciones de configuración del dispositivo: Rol del dispositivo, Salida serial, Registro de depuración y Restablecimiento de fábrica. |
| [Pantalla](https://meshtastic.org/docs/configuration/radio/display/) | Opciones de configuración de pantalla: Duración de pantalla activa, Intervalo de carrusel automático, Apuntar siempre al norte y Formato GPS. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | Opciones de configuración LoRa: Región, Preajuste del módem, Máximo número de saltos, Potencia de transmisión, Ancho de banda, Factor de dispersión, Tasa de codificación, Desplazamiento de frecuencia, Transmisión deshabilitada e Ignorar arreglo entrante. |
| [Red](https://meshtastic.org/docs/configuration/radio/network/) | Opciones de configuración de red: WiFi activado, SSID WiFi, PSK WiFi, Modo WiFi y Servidor NTP. |
| [Posición](https://meshtastic.org/docs/configuration/radio/position/) | Opciones de configuración de posición: GPS activado, Intervalo de actualización GPS, Tiempo de intento GPS, Posición fija, Difusión inteligente, Intervalo de difusión y Banderas de paquete de posición. |
| [Energía](https://meshtastic.org/docs/configuration/radio/power/) | Opciones de configuración de energía: Corriente de carga, Ahorro de energía, Apagado tras pérdida de energía, Multiplicador ADC, Intervalo de espera, Intervalo de suspensión ligera e Intervalo mínimo de activación. |
| [Usuario](https://meshtastic.org/docs/configuration/radio/user/) | Opciones de configuración de usuario: Nombre largo, Nombre corto y Está licenciado. |

### Configuración de Módulos

Los módulos están incluidos en el firmware y permiten a los usuarios extender la funcionalidad de su malla o dispositivo.

| Nombre | Descripción |
| ---- | ---- |
| [Iluminación Ambiental](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Ajusta el brillo de los LEDs RGB I2C NCP5623. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Activa el soporte para comunicaciones de voz Codec2 en ciertos dispositivos. |
| [Mensaje Predefinido](https://meshtastic.org/docs/configuration/module/canned-message/) | Configura varios mensajes predefinidos para enviar directamente desde el dispositivo usando un dispositivo de entrada como un codificador rotativo. |
| [Sensor de Detección](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configura un pin GPIO para ser monitoreado por estados alto/bajo especificados y enviar alertas de texto. |
| [Notificación Externa](https://meshtastic.org/docs/configuration/module/external-notification/) | Los mensajes entrantes pueden alertarte usando circuitos que conectes al dispositivo (LEDs, zumbadores, etc.). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Reenvía paquetes a un servidor MQTT. Esto permite a usuarios de la malla local comunicarse con usuarios en otra malla a través de internet. |
| [Información de Vecinos](https://meshtastic.org/docs/configuration/module/neighbor-info/) | Envía información sobre vecinos a 0 saltos a la malla. |
| [Contador de Personas](https://meshtastic.org/docs/configuration/module/paxcounter/) | Cuenta el número de dispositivos BLE y Wifi que pasan cerca de un nodo. |
| [Prueba de Alcance](https://meshtastic.org/docs/configuration/module/range-test/) | Envía mensajes con ubicación GPS a intervalos para probar la distancia de comunicación de tus dispositivos. Requiere al menos un dispositivo configurado como emisor y otro como receptor. El/los receptor(es) registrarán todos los mensajes entrantes en un CSV. |
| [Hardware Remoto](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Configura y lee el estado de un GPIO remotamente a través de la malla. |
| [Módulo Serial](https://meshtastic.org/docs/configuration/module/serial/) | Envía mensajes a través de la malla enviando cadenas por un puerto serial. |
| [Almacenar y Reenviar](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Almacena mensajes en un dispositivo para entregarlos después de que clientes desconectados vuelvan a unirse a la malla. |
| [Telemetría](https://meshtastic.org/docs/configuration/module/telemetry/) | Adjunta sensores al dispositivo y transmite lecturas periódicamente a la malla. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Rastrea qué nodos son usados para hacer un salto de mensaje a un destino determinado. |


## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte con el fin de asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


