---
description: Meshtastic based on XIAO ESP32S3 & Wio-SX1262 Kit
title: Kit XIAO ESP32-S3 & Wio SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /es/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 06/03/2025
  author: Guillermo
---


Meshtastic es una red mallada descentralizada, fuera de línea y de código abierto, diseñada para funcionar en dispositivos económicos y de bajo consumo. Seeed Studio ofrece una gama completa de dispositivos Meshtastic listos para usar, tanto para aficionados como para aplicaciones industriales. El kit XIAO ESP32S3 & Wio-SX1262 es una solución flexible para desarrolladores y makers que trabajan con Meshtastic.

## Flashear Firmware

:::note
Si compraste el kit XIAO ESP32S3 & Wio-SX1262 **antes del 24 de octubre de 2024**, debes flashear el firmware en tu dispositivo siguiendo este tutorial paso a paso.
:::

**Paso 1**: Abre un navegador compatible (Chrome o Edge) y visita:  
 https://flasher.meshtastic.org/#

**Paso 2**: Conecta el dispositivo a tu PC usando un cable USB adecuado.  
Es posible que debas apagar el dispositivo y luego **mantener presionado el botón BOOT** mientras conectas el cable USB.

**Paso 3**: Sigue las siguientes instrucciones para realizar las operaciones de flasheo posteriores. Selecciona el Dispositivo como "**Seeed XIAO S3**", el Firmware como **el más reciente**, y luego haz clic en "**Flash**". No olvides marcar "**Full Erase and Install**" si deseas sobrescribir el firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Visión General del Software

Meshtastic proporciona múltiples plataformas de software para que los usuarios elijan, incluyendo aplicaciones para Android, Apple y cliente web. También ofrece una CLI en Python, versión nativa para Linux y métodos de integración para desarrolladores.

Para información específica, por favor consulta [el sitio oficial de Meshtastic](https://meshtastic.org/docs/software/).

* [Aplicación Android](https://meshtastic.org/docs/category/android-app/): La aplicación para Android está disponible en el repositorio F-Droid y en Google Play Store. Permite conectar tu dispositivo Meshtastic desde tu teléfono Android vía Bluetooth, Wi-Fi (si está en la misma red) o USB On-The-Go (OTG).
* [Aplicación Apple](https://meshtastic.org/docs/category/apple-apps/): Disponible en la App Store. Por defecto, la app Meshtastic para iOS soporta el uso de Apple Maps sin conexión.
* [Cliente Web](https://meshtastic.org/docs/software/web-client/): Meshtastic Web es un cliente que se ejecuta directamente en el navegador.
* [CLI en Python](https://meshtastic.org/docs/software/python/cli/): El paquete de Python instalado mediante pip incluye un ejecutable de línea de comandos llamado "meshtastic", que muestra los paquetes enviados por la red en formato JSON y permite ver información de depuración serial desde los dispositivos Meshtastic.
* [Linux Nativo](https://meshtastic.org/docs/software/linux-native/): El software del dispositivo también puede ejecutarse en una máquina Linux nativa gracias al framework Portduino.
* [Integraciones Meshtastic](https://meshtastic.org/docs/software/integrations/): El ecosistema Meshtastic es altamente extensible y permite una fácil integración con una variedad de productos y proyectos de software existentes.

## Conexión del Dispositivo

Antes de usar Meshtastic, primero se debe conectar el dispositivo. Existen dos métodos de conexión. El primero es usar una placa de expansión, y la información correspondiente se mostrará en la pantalla. Luego, la configuración se puede realizar en la plataforma correspondiente según la información reflejada. El segundo método es conectar el XIAO con el módulo Wio-SX1262, y usar una herramienta de puerto serie para obtener el ID de nodo y la contraseña.

### Método 1: Conexión a la Placa de Expansión

Después de flashear el firmware y descargar la app de Meshtastic, la placa de expansión es una excelente herramienta
para la conexión y aplicaciones adicionales, como agregar sensores y módulos Grove fácilmente.

**Paso 1**: Asegúrate de que el dispositivo a conectar (como "device") esté encendido y en modo visible. Abre la app de Meshtastic en tu teléfono móvil.

**Paso 2**: En la app de Meshtastic, hay un ícono "+" en la esquina inferior derecha. Haz clic en él para que la app comience a escanear dispositivos cercanos conectables. Luego selecciona el ID del dispositivo que se muestra en la pantalla OLED.

**Paso 3**: Una vez seleccionado correctamente, introduce el código mostrado en la pantalla OLED. Pulsa el botón para cambiar la pantalla.

**Funciones del Botón:**

* Pulsa una vez para cambiar la pantalla.
* Pulsa dos veces para transmitir.
* Pulsa tres veces para cambiar el modo GPS.

**Paso 4**: Configura la región LoRa, luego el dispositivo se reiniciará.

**Paso 5**: Después del reinicio, el estado del dispositivo se puede verificar en la app de Meshtastic y en la pantalla OLED.

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Método 2: Herramienta de puerto serie

Selecciona la herramienta de depuración por puerto serie que prefieras. Tomaré Comtool en mac como ejemplo a continuación. Selecciona la conexión **serial**, elige **el puerto correspondiente**, configura la velocidad en baudios a **115200** y activa **RTS y DTR**. Abre la conexión y podrás ver los datos de conexión. Busca "**nodenum**" para encontrar el ID de nodo correspondiente. Su **contraseña por defecto es 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
Los últimos cuatro dígitos de nodenum son el número de ID del dispositivo detectado por la app Meshtastic. Por ejemplo, "nodenum 0x9e20d02c" corresponde a "Meshtastic_d02c" en Meshtastic.
:::

## Comunicación con Wio Tracker T1000-E

**Paso 1**. Conecta el Wio Tracker T1000-E siguiendo la [wiki](https://wiki.seeedstudio.com/sensecap_t1000_e/#get-started-1).

**Paso 2**. Asegúrate de que la siguiente configuración sea igual a la que tienes en el XIAO ESP32S3 para Meshtastic.

1. Activación y configuración del dispositivo
- Asegúrate de que ambos dispositivos estén encendidos y funcionando correctamente.
- La función de comunicación inalámbrica del dispositivo (como Bluetooth, LoRa, etc.) debe estar habilitada. Revisa los ajustes para confirmar que no esté desactivada o restringida accidentalmente.

2. Distancia y fuerza de señal
- La distancia entre los dos dispositivos no debe ser muy grande. Tras pruebas iniciales, la distancia de comunicación del XIAO ESP32S3 para Meshtastic con antena IPEX de 2 dBm es superior a 2.5 km. En ambientes abiertos, puede superar los 20 km.

3. Configuración de red
- Asegúrate de que los dispositivos estén en el mismo modo de red o configuración de canal. Puedes configurar fácilmente la misma 'región LoRa' y 'Modem preset' usando la app Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>


**Paso 3**. Comunicación con Wio Tracker T1000-E

Una vez conectados, puedes empezar a enviar y recibir mensajes a través de la red Meshtastic. Los mensajes pueden ser de texto o incluir funciones adicionales según las capacidades de los dispositivos y la aplicación. También puedes monitorear la actividad de la red y ver qué dispositivos están conectados y activos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Conexión de Sensores

En la aplicación Meshtastic, el kit Wio-SX1262 con XIAO esp32s3 es capaz de soportar una amplia gama de sensores. Cuando se usa junto con la placa de expansión XIAO, puede soportar numerosos sensores Grove, por favor consulta [aquí](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Además, al combinarse con el módulo adicional GNSS, forma el módulo más pequeño dentro de Meshtastic que cuenta con funcionalidad GPS.

### Sensor de Temperatura y Humedad

<div class="table-center">
  <table align="center">
    <tr>
      <th>Sensor de Temperatura y Humedad DHT20</th>
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


**Paso 1**: Conecta el sensor Grove DHT20 a la Placa de Expansión XIAO.

**Paso 2**: Habilita la opción `Detection Sensor` en la app Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>


### Sensor GNSS

<div class="table-center">
  <table align="center">
    <tr>
      <th>L76K GNSS Module for XIAO</th>
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
Para más detalles, por favor consulta [Meshtastic](https://meshtastic.org/docs).
:::

### Configuración de Radio

El firmware de Meshtastic tiene varias secciones de configuración, que están separadas para poder enviarse como pequeños mensajes administrativos a través de la red mesh.

| Nombre | Descripción |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Las opciones de configuración Bluetooth son: Habilitado, Modo de Emparejamiento y PIN Fijo. |
| [Canales](https://meshtastic.org/docs/configuration/radio/channels/) | Las opciones de configuración de canales son: Índice, Rol y Ajustes. |
| [Dispositivo](https://meshtastic.org/docs/configuration/radio/device/) | Las opciones de configuración del dispositivo son: Rol del dispositivo, Salida Serial, Registro de Depuración y Restablecimiento de Fábrica. |
| [Pantalla](https://meshtastic.org/docs/configuration/radio/display/) | Las opciones de configuración de pantalla son: Duración de pantalla encendida, Intervalo de carrusel automático, Siempre apuntar al norte y Formato GPS. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | Las opciones de configuración LoRa son: Región, Preset de Módem, Máximo de saltos, Potencia de transmisión, Ancho de banda, Factor de expansión, Tasa de codificación, Desplazamiento de frecuencia, Transmisión deshabilitada y Ignorar arreglo entrante. |
| [Red](https://meshtastic.org/docs/configuration/radio/network/) | Las opciones de configuración de red son: WiFi habilitado, SSID WiFi, PSK WiFi, Modo WiFi y Servidor NTP. |
| [Posición](https://meshtastic.org/docs/configuration/radio/position/) | Las opciones de configuración de posición son: GPS habilitado, Intervalo de actualización GPS, Tiempo de intento GPS, Posición fija, Difusión inteligente, Intervalo de difusión y Flags de paquete de posición. |
| [Energía](https://meshtastic.org/docs/configuration/radio/power/) | Las opciones de configuración de energía son: Corriente de carga, Ahorro de energía, Apagado tras pérdida de energía, Multiplicador ADC, Espera de intervalo Bluetooth, Intervalo de suspensión ligera e Intervalo mínimo de activación. |
| [Usuario](https://meshtastic.org/docs/configuration/radio/user/) | Las opciones de configuración de usuario son: Nombre largo, Nombre corto y Licencia activa. |

### Configuración de Módulos

Los módulos están incluidos en el firmware y permiten a los usuarios extender la funcionalidad de su red mesh o dispositivo.

| Nombre | Descripción |
| ---- | ---- |
| [Iluminación Ambiental](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Ajusta el brillo de los LEDs RGB I2C NCP5623. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Habilita soporte para comunicaciones de voz Codec2 en ciertos dispositivos. |
| [Mensaje Predefinido](https://meshtastic.org/docs/configuration/module/canned-message/) | Configura mensajes predefinidos para enviar directamente desde el dispositivo usando un dispositivo de entrada como un encoder rotativo. |
| [Sensor de Detección](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configura un pin GPIO para ser monitoreado con estados alto/bajo específicos y enviar alertas de texto. |
| [Notificación Externa](https://meshtastic.org/docs/configuration/module/external-notification/) | Los mensajes entrantes pueden alertarte usando circuitos conectados al dispositivo (LEDs, zumbadores, etc). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Reenvía paquetes a un servidor MQTT. Permite a usuarios de la red local comunicarse con usuarios en otra red vía internet. |
| [Información de Vecinos](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Envía información de vecinos 0-hop a la red mesh. |
| [Contador de Personas](https://meshtastic.org/docs/configuration/module/paxcounter/) | Cuenta dispositivos BLE y WiFi que pasan cerca de un nodo. |
| [Prueba de Alcance](https://meshtastic.org/docs/configuration/module/range-test/) | Envía mensajes con ubicación GPS a intervalos para probar la distancia de comunicación. Requiere al menos un dispositivo configurado como emisor y otro como receptor. El receptor registrará todos los mensajes en un archivo CSV. |
| [Hardware Remoto](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Configura y lee el estado de un GPIO remotamente a través de la red mesh. |
| [Módulo Serial](https://meshtastic.org/docs/configuration/module/serial/) | Envía mensajes a través de la red mesh enviando cadenas por un puerto serial. |
| [Almacenar y Reenviar](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Almacena mensajes en un dispositivo para entregarlos cuando clientes desconectados vuelvan a unirse a la red. |
| [Telemetría](https://meshtastic.org/docs/configuration/module/telemetry/) | Conecta sensores al dispositivo y transmite lecturas periódicas a la red mesh. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Rastrea qué nodos se usan para enviar un mensaje a un destino determinado. |

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


