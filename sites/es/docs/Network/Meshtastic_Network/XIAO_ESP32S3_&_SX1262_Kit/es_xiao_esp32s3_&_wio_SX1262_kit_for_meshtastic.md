---
description: Meshtastic basado en XIAO ESP32S3 y kit Wio-SX1262
title: Comienza con el kit XIAO ESP32-S3 y Wio-SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
sidebar_position: 1
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2024-10-09'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/
---


[Meshtastic®](https://meshtastic.org/) es una red mallada descentralizada, fuera de la red y de código abierto, creada para funcionar en dispositivos de bajo consumo y bajo costo. Seeed Studio ofrece una amplia gama de dispositivos Meshtastic listos para usar para aficionados y usuarios industriales. El kit XIAO ESP32S3 y Wio-SX1262 es una solución flexible para desarrolladores y creadores de Meshtastic.
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>
## Flashear firmware

:::note
Por favor, flashea el firmware en tu dispositivo si compraste el kit XIAO ESP32S3 y Wio-SX1262 antes del **24 de octubre de 2024** siguiendo este tutorial paso a paso. Por favor, `don't use NRF-OTA` para actualizar el firmware, ya que puede hacer que el dispositivo quede completamente inservible.
:::

**Paso 1**: Primero, abre un navegador y visita https://flasher.meshtastic.org/# requiere navegador Chrome o Edge.

**Paso 2**: Luego, utiliza un cable USB adecuado para conectar el dispositivo al PC. Es posible que necesites apagarlo y luego **mantener pulsado el botón BOOT** mientras conectas el cable USB.

**Paso 3**: Sigue las siguientes instrucciones proporcionadas para realizar las operaciones de flasheo posteriores. Selecciona el dispositivo como "**Seeed XIAO S3**", el firmware como **el más reciente**, y luego haz clic en "**Flash**". No olvides marcar "**Full Erase and Install**" si quieres sobrescribir el firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Descripción general del software

Meshtastic proporciona software para múltiples plataformas para que los usuarios elijan, incluyendo aplicación para Android, aplicación para Apple y cliente web. También proporciona Python CLI, Linux Native y métodos de integración para que los desarrolladores los utilicen.

Para información específica, consulta [el sitio web oficial de Meshtastic](https://meshtastic.org/docs/software/).

- [Android App](https://meshtastic.org/docs/category/android-app/): La aplicación de Android está disponible en el repositorio F-Droid y en Google Play Store. Esto te permite conectar tu dispositivo Meshtastic desde tu teléfono Android mediante Bluetooth, Wi‑Fi (si está en la misma red) o USB On-The-Go (OTG).
- [Apple App](https://meshtastic.org/docs/category/apple-apps/): Está disponible en la App Store. De forma predeterminada, la aplicación Meshtastic para iOS admite el uso de Apple Maps sin conexión de forma nativa.
- [Web Client](https://meshtastic.org/docs/software/web-client/): Meshtastic Web es un cliente Meshtastic que se ejecuta directamente en tu navegador.
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): El paquete python pip instala un ejecutable de línea de comandos "meshtastic", que muestra los paquetes enviados a través de la red como JSON y te permite ver la información de depuración serie de los dispositivos Meshtastic.
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): El software del dispositivo también puede ejecutarse en una máquina Linux nativa gracias al framework Portduino.
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/): El ecosistema Meshtastic es altamente extensible y permite una fácil integración con varios productos y proyectos de software existentes.

## Conexión del dispositivo

Antes de usar Meshtastic, primero es necesario conectar el dispositivo. Hay dos métodos de conexión. El primero es utilizar una placa de expansión, y la información correspondiente se mostrará en la pantalla. Luego, la configuración se puede realizar en la plataforma correspondiente según la información reflejada. El segundo es conectar el XIAO y el módulo Wio-SX1262, y utilizar una herramienta de puerto serie para obtener el ID de nodo y la contraseña.

### Conectado a la batería

El XIAO ESP32S3 tiene un chip de gestión de energía integrado que permite que el XIAO ESP32S3 se alimente de forma independiente utilizando una batería o que cargue la batería a través del puerto USB del XIAO ESP32S3.

Si deseas conectar la batería para XIAO, te recomendamos comprar una batería recargable `3.7V lithium` calificada con `protection circuit`. Al soldar la batería, ten cuidado de distinguir entre los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe ser el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación es el lado más alejado del puerto USB.



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### Conectado a la placa de expansión

Después de flashear el firmware y descargar la aplicación Meshtastic, la placa de expansión será una buena herramienta para la conexión y aplicaciones adicionales, como añadir fácilmente sensores y módulos Grove.

**Paso 1**: Asegúrate de que el dispositivo que se va a conectar (como "device") esté encendido y en un estado detectable. Y abre la aplicación Meshtastic en tu teléfono móvil.

**Paso 2**: En la aplicación Meshtastic, hay un icono "+" en la parte inferior derecha. Haz clic en él para que la aplicación comience a escanear los dispositivos cercanos conectables. Luego selecciona el ID de dispositivo correspondiente que se muestra en la pantalla OLED.

**Paso 3**: Una vez seleccionado correctamente, introduce el código que se muestra en la pantalla OLED. Pulsa el botón para cambiar la pantalla.

**Funciones del botón:**

- Pulsa una vez para cambiar de pantalla.
- Pulsa dos veces para transmitir.
- Pulsa tres veces para cambiar el modo GPS.

**Paso 4**: Configura la región LoRa, luego el dispositivo se reiniciará.

**Paso 5**: Una vez finalizado el reinicio, el estado del dispositivo se puede comprobar en la aplicación Meshtastic y en la pantalla OLED.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Herramienta de puerto serie

Selecciona una herramienta de depuración de puerto serie que te guste. A continuación tomaré Comtool en Mac como ejemplo. Selecciona la conexión **serial**, elige **el puerto correspondiente**, configura la velocidad en baudios a **115200** y activa **RTS y DTR**. Abre la conexión y podrás ver los datos de conexión.
Busca "**nodenum**" para encontrar el ID de nodo correspondiente. Su **contraseña predeterminada es 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
Los últimos cuatro dígitos de nodenum son el ID de número de dispositivo descubierto por la aplicación Meshtastic. Por ejemplo, "nodenum 0x9e20d02c" es "Meshtastic_d02c" en Meshtastic.
:::


### Conectado a SX-1262

El SX-1262 se puede conectar al Xiao ESP32-S3 a través de la interfaz B2B. El SX-1262 utiliza SPI para comunicarse con el Xiao ESP32-S3.

El siguiente diagrama muestra el mapeo de pines B2B entre XIAO ESP32S3 y Wio-SX1262.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="B2B pin mapping between XIAO ESP32S3 and Wio-SX1262"/>
</div>
:::warning
El SX-1262 compatible solo se puede comprar dentro del kit.
:::
## Comunicarse con Wio Tracker T1000-E

**Paso 1**. Conecta Wio Tracker T1000-E siguiendo la [wiki](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#get-started-1).

**Paso 2**. Asegúrate de que la siguiente configuración sea la misma que tu configuración en XIAO ESP32S3 para Meshatastic.

1. Activación y configuración del dispositivo

- Asegúrate de que ambos dispositivos estén encendidos y en condiciones normales de funcionamiento.
- La función de comunicación inalámbrica del dispositivo (como Bluetooth, LoRa, etc.) debe estar habilitada. Comprueba la configuración correspondiente para asegurarte de que no se haya desactivado o restringido accidentalmente.

2. Distancia y fuerza de la señal

- La distancia entre los dos dispositivos no puede ser demasiado grande. Después de las pruebas iniciales, la distancia de comunicación de XIAO ESP32S3 para Meshtastic con antena IPEX de 2 dBm es de más de 2,5 km. En general, en un entorno más abierto, puede ser de más de 20 km.

3. Configuración de red

- Asegúrate de que los dispositivos estén en el mismo modo de red o configuración de canal. Configura fácilmente la misma 'lora region' y 'Modem preset' usando la aplicación Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**Paso 3**. Comunícate con Wio Tracker T1000-E

Una vez conectados, puedes comenzar a enviar y recibir mensajes a través de la red Meshtastic. Los mensajes pueden ser de texto o pueden admitir funciones adicionales según las capacidades de los dispositivos y de la aplicación. También puedes supervisar la actividad de la red y ver qué dispositivos están actualmente conectados y activos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Conexión de sensores

En la aplicación Meshtastic, el kit Wio-SX1262 con XIAO ESP32S3 es capaz de admitir una amplia gama de sensores. Cuando se utiliza junto con la placa de expansión XIAO, puede admitir numerosos sensores Grove, por favor consulta [aquí](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Además, cuando se combina con el módulo complementario GNSS, forma el módulo más pequeño dentro de Meshtastic que tiene funcionalidad GPS.

### Sensor de temperatura y humedad

<div class="table-center">
  <table align="center">
    <tr>
      <th>Sensor de temperatura y humedad DHT20</th>
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

**Paso 1**: Conecta el sensor Grove DHT20 de la XIAO Expansion Board

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuración inicial

:::note
Para más detalles, consulta [Meshtastic](https://meshtastic.org/docs).
:::

### Configuración de radio

Hay varias secciones de configuración en el firmware de Meshtastic, estas se dividen para que puedan enviarse como pequeños mensajes de administración a través de la malla.

| Nombre | Descripción |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Las opciones de configuración de Bluetooth son: Enabled, Pairing Mode y Fixed PIN. |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | Las opciones de configuración de canales son: Index, Role y Settings. |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | Las opciones de configuración del dispositivo son: Device Role, Serial Output, Debug Log y Factory Reset. |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | Las opciones de configuración de la pantalla son: Screen On Duration, Auto Carousel Interval, Always Point North y GPS Format. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | Las opciones de configuración de LoRa son: Region, Modem Preset, Max Hops, Transmit Power, Bandwidth, Spread Factor, Coding Rate, Frequency Offset, Transmit Disabled e Ignore Incoming Array. |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | Las opciones de configuración de red son: WiFi Enabled, WiFi SSID, WiFi PSK, WiFi Mode y NTP Server. |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | Las opciones de configuración de posición son: GPS Enabled, GPS Update Interval, GPS Attempt Time, Fixed Position, Smart Broadcast, Broadcast Interval y Position Packet Flags. |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | Las opciones de configuración de energía son: Charge Current, Power Saving, Shutdown after losing power, ADC Multiplier Override Wait Bluetooth Interval, Light Sleep Interval y Minimum Wake Interval. |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | Las opciones de configuración de usuario son: Long Name, Short Name e Is Licensed. |

### Configuración de módulos

Los módulos están incluidos en el firmware y permiten a los usuarios ampliar la funcionalidad de su malla o dispositivo.

| Nombre | Descripción |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Ajusta el brillo de los LED RGB I2C NCP5623. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Habilita el soporte para comunicaciones de voz Codec2 en ciertos dispositivos. |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | Establece una serie de mensajes predefinidos para enviarlos directamente desde el dispositivo con el uso de un dispositivo de entrada como un codificador rotatorio. |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configura un pin GPIO para que sea monitorizado para un estado alto/bajo especificado y envíe alertas de texto. |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | Los mensajes entrantes pueden alertarte usando circuitos que conectes al dispositivo (LED, zumbadores, etc.). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Reenvía paquetes a un servidor MQTT. Esto permite que los usuarios de la malla local se comuniquen con usuarios de otra malla a través de Internet. |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Envía información sobre vecinos de 0 saltos a la malla. |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | Cuenta el número de dispositivos BLE y WiFi que pasan por un nodo. |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | Envía mensajes con ubicación GPS a intervalos para probar la distancia a la que tus dispositivos pueden comunicarse. Requiere (al menos) un dispositivo configurado como emisor y uno como receptor. El/los receptor(es) registrarán todos los mensajes entrantes en un CSV. |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Establece y lee el estado de un GPIO de forma remota a través de la malla. |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | Envía mensajes a través de la malla enviando cadenas por un puerto serie. |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Almacena mensajes en un dispositivo para su entrega después de que los clientes desconectados se reincorporen a la malla. |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | Conecta sensores al dispositivo y transmite lecturas a intervalos regulares a la malla. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Rastrea qué nodos se utilizan para hacer saltar un mensaje hasta un determinado destino. |
## Recursos
- **[PDF]**[Diagrama esquemático del SX1262 compatible con Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Hoja de datos del módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Archivo 3D de Wio-SX1262 para XlAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Esquemático de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [Biblioteca Kicad del kit XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Modelo 3D de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Bibliotecas Eagle de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Dimensiones en DXF de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Huella Eagle de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Firmware de fábrica de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Hoja de pinout de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Huella de Seeed Studio XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Archivo 3D de carcasa](https://www.thingiverse.com/thing:6888371)
## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
