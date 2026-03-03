---
description: Meshtastic basado en Wio-SX1262 con módulo XIAO esp32s3
title: Comenzar con Meshtastic
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_xiao_esp32s3_for_meshtastic
sku: 102010611,113110064
sidebar_position: 2
last_update:
  date: 09/30/2024
  author: Evelyn Chen
---

Meshtastic es una red de malla descentralizada, fuera de la red y de código abierto construida para ejecutarse en dispositivos asequibles y de bajo consumo. Seeed Studio proporciona una gama completa de dispositivos Meshtastic listos para usar para aficionados y usuarios industriales. El Kit XIAO ESP32S3 & Wio-SX1262 es una solución flexible para desarrolladores y makers de meshtastic.

## Flashear Firmware

:::note
Por favor, flashea el firmware en tu dispositivo si compraste el Kit XIAO ESP32S3 & Wio-SX1262 antes del **24 de octubre de 2024** siguiendo este tutorial paso a paso.
:::

**Paso 1**: Primero, abre un navegador y visita https://flasher.meshtastic.org/# requiere navegador Chrome o Edge.

**Paso 2**: Luego, usa un cable USB adecuado para conectar el dispositivo a la PC. Es posible que necesites apagar, luego **mantener presionado el botón BOOT** mientras conectas el cable USB.

**Paso 3**: Sigue las siguientes instrucciones proporcionadas para realizar las operaciones de flasheo posteriores. Selecciona el Dispositivo como "**Seeed XIAO S3**", Firmware como **el más reciente**, y luego haz clic en "**Flash**". No olvides marcar "**Full Erase and Install**" si quieres sobrescribir el firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Descripción del Software

Meshtastic proporciona múltiples softwares de plataforma para que los usuarios elijan, incluyendo aplicación Android, aplicación Apple, cliente web. También proporciona Python CLI, Linux Native y métodos de integración para que los desarrolladores los usen.

Para información específica, por favor consulta [el sitio web oficial de Meshtastic](https://meshtastic.org/docs/software/).

- [Aplicación Android](https://meshtastic.org/docs/category/android-app/): La aplicación Android está disponible en el repositorio F-Droid y Google Play Store. Esto te permite conectarte a tu dispositivo Meshtastic desde tu teléfono Android vía Bluetooth, Wi-Fi (si está en la misma red) o USB On-The-Go (OTG).
- [Aplicación Apple](https://meshtastic.org/docs/category/apple-apps/): Está disponible en app store. Por defecto, la aplicación Meshtastic para iOS soporta el uso de Apple Maps nativo sin conexión.
- [Cliente Web](https://meshtastic.org/docs/software/web-client/): Meshtastic Web es un cliente Meshtastic que se ejecuta directamente en tu navegador.
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): El paquete pip de python instala un ejecutable de línea de comandos "meshtastic", que muestra paquetes enviados a través de la red como JSON y te permite ver información de depuración serial de los dispositivos meshtastic.
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): El software del dispositivo también puede ejecutarse en una máquina Linux nativa gracias al framework Portduino.
- [Integraciones Meshtastic](https://meshtastic.org/docs/software/integrations/): El ecosistema Meshtastic es altamente extensible y permite una fácil integración con una serie de productos y proyectos de software existentes.

## Conexión del Dispositivo

Antes de usar Meshtastic, el dispositivo necesita ser conectado primero. Hay dos métodos de conexión. El primero es usar una placa de expansión, y la información correspondiente se mostrará en la pantalla. Luego, la configuración puede llevarse a cabo en la plataforma correspondiente según la información reflejada. El segundo es conectar el XIAO y el módulo Wio-SX1262, y usar una herramienta de puerto serie para obtener el ID del nodo y la contraseña.

### Método 1: Conectado a la placa de expansión

Después de flashear el firmware y descargar la aplicación Meshtastic, la placa de expansión sería una buena herramienta
 para la conexión y aplicaciones adicionales como agregar sensores y módulos grove fácilmente.

**Paso 1**: Asegúrate de que el dispositivo a conectar (como "device") esté encendido y en un estado detectable. Y abre la aplicación Meshtastic en tu teléfono móvil.

**Paso 2**: En la aplicación Meshtastic, hay un icono "+" en la parte inferior derecha. Haz clic en él para que la aplicación comience a escanear dispositivos conectables cercanos. Luego selecciona el ID del dispositivo correspondiente que se muestra en la pantalla OLED.

**Paso 3**: Una vez seleccionado correctamente, ingresa el código que se muestra en la pantalla OLED. Presiona el botón para cambiar la pantalla.

**Funciones del Botón:**

- Presiona una vez para cambiar la pantalla.
- Presiona dos veces para transmitir.
- Presiona tres veces para cambiar el modo GPS.

**Paso 4**: Configura la región Lora, luego el dispositivo se reiniciará.

**Paso 5**: Termina el reinicio, el estado del dispositivo puede verificarse en la aplicación Meshtastic y la pantalla OLED.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Método 2: Herramienta de puerto serie

Selecciona una herramienta de depuración de puerto serie que te guste. Tomaré Comtool en mac como ejemplo a continuación. Selecciona la conexión **serial**, elige **el puerto correspondiente**, configura la velocidad de baudios como **115200**, y activa **RTS y DTR**. Abre la conexión y puedes ver los datos de conexión.
Busca "**nodenum**" para encontrar el ID del nodo correspondiente. Su **contraseña predeterminada es 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
Los últimos cuatro dígitos de nodenum son el ID del número del dispositivo descubierto por la aplicación meshtastic. Por ejemplo, "nodenum 0x9e20d02c" es "Meshtastic_d02c" en meshtastic.
:::

## Comunicarse con Wio Tracker T1000-E

**Paso 1**. Conecta Wio Tracker T1000-E siguiendo [wiki](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#get-started-1).

**Paso 2**. Asegúrate de que la siguiente configuración sea la misma que tu configuración en XIAO ESP32S3 para Meshatastic.

1. Activación y configuración del dispositivo

- Asegúrate de que ambos dispositivos estén encendidos y en condición de trabajo normal.
- La función de comunicación inalámbrica del dispositivo (como Bluetooth, LoRa, etc.) debe estar habilitada. Verifica las configuraciones relevantes para asegurar que no esté accidentalmente apagada o restringida.

2. Distancia y fuerza de la señal

- La distancia entre los dos dispositivos no puede ser demasiado lejana. Después de las pruebas iniciales, la distancia de comunicación del XIAO ESP32S3 para Meshtastic con antena IPEX de 2 dbm es de más de 2.5 km. Generalmente hablando, en un ambiente más abierto, puede ser de más de 20 km.

3. Configuraciones de Red

- Asegúrate de que los dispositivos estén en el mismo modo de red o configuración de canal. Fácilmente configura la misma 'región lora' y 'Preajuste de módem' usando la APP Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**Paso 3**. Comunicarse con Wio Tracker T1000-E

Una vez conectado, puedes comenzar a enviar y recibir mensajes a través de la red Meshtastic. Los mensajes pueden ser basados en texto o pueden soportar características adicionales dependiendo de las capacidades de los dispositivos y la aplicación. También puedes monitorear la actividad de la red y ver qué dispositivos están actualmente conectados y activos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Conexión de Sensores

En la aplicación meshtastic, el Wio-SX1262 con el kit XIAO esp32s3 es capaz de soportar una amplia gama de sensores. Cuando se usa en conjunto con la placa de expansión XIAO, puede soportar numerosos sensores grove, por favor consulta [aquí](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Además, cuando se combina con el módulo complementario GNSS, forma el módulo más pequeño dentro de meshtastic que tiene funcionalidad GPS.

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**Paso 1**: Conecta el sensor Grove DHT20 de la Placa de Expansión XIAO

**Paso 2**: Habilita `Detection Sensor` en la APP Meshtastic

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### Sensor GNSS

<div class="table-center">
  <table align="center">
    <tr>
      <th>Módulo GNSS L76K para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuración Inicial

:::note
Para más detalles, consulte [Meshtastic](https://meshtastic.org/docs).
:::

### Configuración de Radio

Hay varias secciones de configuración en el firmware de Meshtastic, estas están separadas para que puedan enviarse como pequeños mensajes de administración a través de la malla.

| Nombre | Descripción |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Las opciones de configuración de Bluetooth son: Habilitado, Modo de Emparejamiento y PIN Fijo. |
| [Canales](https://meshtastic.org/docs/configuration/radio/channels/) | Las opciones de configuración de canales son: Índice, Rol y Configuraciones. |
| [Dispositivo](https://meshtastic.org/docs/configuration/radio/device/) | Las opciones de configuración del dispositivo son: Rol del Dispositivo, Salida Serie, Registro de Depuración y Restablecimiento de Fábrica. |
| [Pantalla](https://meshtastic.org/docs/configuration/radio/display/) | Las opciones de configuración de pantalla son: Duración de Pantalla Encendida, Intervalo de Carrusel Automático, Siempre Apuntar al Norte y Formato GPS. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | Las opciones de configuración de LoRa son: Región, Preajuste de Módem, Saltos Máximos, Potencia de Transmisión, Ancho de Banda, Factor de Dispersión, Tasa de Codificación, Desplazamiento de Frecuencia, Transmisión Deshabilitada e Ignorar Array Entrante. |
| [Red](https://meshtastic.org/docs/configuration/radio/network/) | Las opciones de configuración de red son: WiFi Habilitado, SSID WiFi, PSK WiFi, Modo WiFi y Servidor NTP. |
| [Posición](https://meshtastic.org/docs/configuration/radio/position/) | Las opciones de configuración de posición son: GPS Habilitado, Intervalo de Actualización GPS, Tiempo de Intento GPS, Posición Fija, Transmisión Inteligente, Intervalo de Transmisión y Banderas de Paquete de Posición. |
| [Energía](https://meshtastic.org/docs/configuration/radio/power/) | Las opciones de configuración de energía son: Corriente de Carga, Ahorro de Energía, Apagado después de perder energía, Anulación del Multiplicador ADC, Intervalo de Espera Bluetooth, Intervalo de Sueño Ligero e Intervalo Mínimo de Despertar. |
| [Usuario](https://meshtastic.org/docs/configuration/radio/user/) | Las opciones de configuración de usuario son: Nombre Largo, Nombre Corto y Tiene Licencia. |

### Configuración de Módulos

Los módulos están incluidos en el firmware y permiten a los usuarios extender la funcionalidad de su malla o dispositivo.

| Nombre | Descripción |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Ajustar el brillo de los LEDs RGB I2C NCP5623. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Habilitar soporte para comunicaciones de voz Codec2 en ciertos dispositivos. |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | Establecer una cantidad de mensajes predefinidos para enviar directamente desde el dispositivo con el uso de un dispositivo de entrada como un codificador rotatorio. |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configurar un pin GPIO para ser monitoreado por estado alto/bajo especificado y enviar alertas de texto. |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | Los mensajes entrantes pueden alertarte usando circuitos que conectes al dispositivo (LEDs, Zumbadores, etc). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Reenviar paquetes a un servidor MQTT. Esto permite a los usuarios en la malla local comunicarse con usuarios en otra malla a través de internet. |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Enviar información sobre vecinos de 0 saltos a la malla. |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | Contar el número de dispositivos BLE y Wifi que pasan por un nodo. |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | Enviar mensajes con ubicación GPS en un intervalo para probar la distancia que pueden comunicar tus dispositivos. Requiere (al menos) un dispositivo configurado como emisor y uno como receptor. El/los receptor(es) registrarán todos los mensajes entrantes en un CSV. |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Establecer y leer un estado GPIO remotamente a través de la malla. |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | Enviar mensajes a través de la malla enviando cadenas por un puerto serie. |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Almacena mensajes en un dispositivo para entrega después de que clientes desconectados se reúnan a la malla. |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | Conectar sensores al dispositivo y transmitir lecturas en un intervalo regular a la malla. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Rastrear qué nodos se usan para saltar un mensaje a cierto destino. |

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
