---
description: Meshtastic basado en XIAO ESP32S3 & Wio-SX1262 Kit
title: XIAO ESP32-S3&Wio SX1262 Kit
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2025-09-03'
updatedAt: '2025-12-11'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/
---


[Meshtastic®](https://meshtastic.org/) es una red de malla descentralizada, fuera de la red y de código abierto construida para funcionar en dispositivos asequibles y de bajo consumo. Seeed Studio proporciona una gama completa de dispositivos Meshtastic listos para usar para aficionados y usuarios industriales. XIAO ESP32S3 & Wio-SX1262 Kit es una solución flexible para desarrolladores y makers de meshtastic.
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
    </a>
</div>
## Flashear Firmware

:::note
Por favor, flashea el firmware en tu dispositivo si compraste el XIAO ESP32S3 & Wio-SX1262 Kit antes del **24 de octubre de 2024** siguiendo este tutorial paso a paso. Por favor `no uses NRF-OTA` para actualizar el firmware, puede causar que el dispositivo quede completamente inoperativo.
:::

**Paso 1**: Primero, abre un navegador y visita https://flasher.meshtastic.org/# requiere navegador Chrome o Edge.

**Paso 2**: Luego, usa un cable USB adecuado para conectar el dispositivo a la PC. Puede que necesites apagar, luego **mantener presionado el botón BOOT** mientras conectas el cable USB.

**Paso 3**: Sigue las siguientes instrucciones proporcionadas para realizar las operaciones de flasheo posteriores. Selecciona el Dispositivo como "**Seeed XIAO S3**", Firmware como **el más reciente**, y luego haz clic en "**Flash**". No olvides marcar "**Full Erase and Install**" si quieres sobrescribir el firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Descripción General del Software

Meshtastic proporciona múltiples softwares de plataforma para que los usuarios elijan, incluyendo app de Android, app de Apple, cliente web. También proporciona Python CLI, Linux Native y métodos de integración para que los desarrolladores los usen.

Para información específica, por favor consulta [el sitio web oficial de Meshtastic](https://meshtastic.org/docs/software/).

- [Android App](https://meshtastic.org/docs/category/android-app/): La aplicación de Android está disponible en el repositorio F-Droid y Google Play Store. Esto te permite conectarte a tu dispositivo Meshtastic desde tu teléfono Android vía Bluetooth, Wi-Fi (si está en la misma red) o USB On-The-Go (OTG).
- [Apple App](https://meshtastic.org/docs/category/apple-apps/): Está disponible en la app store. Por defecto, la app Meshtastic para iOS soporta el uso de Apple Maps nativo sin conexión.
- [Web Client](https://meshtastic.org/docs/software/web-client/): Meshtastic Web es un cliente Meshtastic que se ejecuta directamente en tu navegador.
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): El paquete pip de python instala un ejecutable de línea de comandos "meshtastic", que muestra paquetes enviados a través de la red como JSON y te permite ver información de depuración serial de los dispositivos meshtastic.
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): El software del dispositivo también puede ejecutarse en una máquina Linux nativa gracias al framework Portduino.
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/): El ecosistema Meshtastic es altamente extensible y permite una fácil integración con una serie de productos y proyectos de software existentes.

## Conexión del Dispositivo

Antes de usar Meshtastic, el dispositivo necesita ser conectado primero. Hay dos métodos de conexión. El primero es usar una placa de expansión, y la información correspondiente se mostrará en la pantalla. Luego, la configuración se puede llevar a cabo en la plataforma correspondiente según la información reflejada. El segundo es conectar el XIAO y el módulo Wio-SX1262, y usar una herramienta de puerto serie para obtener el ID del nodo y la contraseña.

### Conectado a batería

El XIAO ESP32S3 tiene un chip de gestión de energía integrado que permite que el XIAO ESP32S3 sea alimentado independientemente usando una batería o cargar la batería a través del puerto USB del XIAO ESP32S3.

Si quieres conectar la batería para XIAO, te recomendamos que compres una batería de `litio de 3.7V` recargable calificada con `circuito de protección`. Al soldar la batería, por favor ten cuidado de distinguir entre los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe estar en el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación es el lado alejado del puerto USB.



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### Conectado a placa de expansión

Después de flashear el firmware y descargar la app Meshtastic, la placa de expansión sería una buena herramienta para conexión y aplicaciones adicionales como agregar sensores y módulos Grove fácilmente.

**Paso 1**: Asegúrate de que el dispositivo a conectar (como "device") esté encendido y en un estado detectable. Y abre la app Meshtastic en tu teléfono móvil.

**Paso 2**: En la app Meshtastic, hay un ícono "+" en la parte inferior derecha. Haz clic en él para que la app comience a escanear dispositivos conectables cercanos. Luego selecciona el ID del dispositivo correspondiente que se muestra en la pantalla OLED.

**Paso 3**: Una vez seleccionado correctamente, ingresa el código que se muestra en la pantalla OLED. Presiona el botón para cambiar la pantalla.

**Funciones del Botón:**

- Presiona una vez para cambiar la pantalla.
- Presiona dos veces para transmitir.
- Presiona tres veces para cambiar el modo GPS.

**Paso 4**: Configura la región Lora, luego el dispositivo se reiniciará.

**Paso 5**: Termina el reinicio, el estado del dispositivo se puede verificar en la app Meshtastic y la pantalla OLED.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Herramienta de puerto serie

Selecciona una herramienta de depuración de puerto serie que te guste. Tomaré Comtool en mac como ejemplo a continuación. Selecciona la conexión **serial**, elige **el puerto correspondiente**, configura la velocidad de baudios como **115200**, y activa **RTS y DTR**. Abre la conexión y puedes ver los datos de conexión.
Busca "**nodenum**" para encontrar el ID del nodo correspondiente. Su **contraseña predeterminada es 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
Los últimos cuatro dígitos de nodenum son el ID del número del dispositivo descubierto por la app meshtastic. Por ejemplo, "nodenum 0x9e20d02c" es "Meshtastic_d02c" en meshtastic.
:::


### Conectado a SX-1262

El SX-1262 se puede conectar al Xiao ESP32-S3 a través de la interfaz B2B. El SX-1262 usa SPI para comunicarse con Xiao ESP32-S3.
:::warning
El SX-1262 compatible solo se puede comprar dentro del kit.
:::
## Comunicarse con Wio Tracker T1000-E

**Paso 1**. Conecta Wio Tracker T1000-E siguiendo [wiki](https://wiki.seeedstudio.com/es/sensecap_t1000_e/#get-started-1).

**Paso 2**. Asegúrate de que la siguiente configuración sea la misma que tu configuración en XIAO ESP32S3 para Meshatastic.

1. Activación y configuración del dispositivo

- Asegúrate de que ambos dispositivos estén encendidos y en condición de trabajo normal.
- La función de comunicación inalámbrica del dispositivo (como Bluetooth, LoRa, etc.) debe estar habilitada. Verifica las configuraciones relevantes para asegurar que no esté accidentalmente apagada o restringida.

2. Distancia y fuerza de señal

- La distancia entre los dos dispositivos no puede ser demasiado lejana. Después de las pruebas iniciales, la distancia de comunicación del XIAO ESP32S3 para Meshtastic con antena IPEX de 2 dbm es de más de 2.5 km. Generalmente hablando, en un ambiente más abierto, puede ser de más de 20 km.

3. Configuraciones de Red

- Asegúrate de que los dispositivos estén en el mismo modo de red o configuración de canal. Fácilmente configura la misma 'región lora' y 'Modem preset' usando la APP Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**Paso 3**. Comunicarse con Wio Tracker T1000-E

Una vez conectado, puedes comenzar a enviar y recibir mensajes a través de la red Meshtastic. Los mensajes pueden ser basados en texto o pueden soportar características adicionales dependiendo de las capacidades de los dispositivos y la app. También puedes monitorear la actividad de la red y ver qué dispositivos están actualmente conectados y activos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Conexión de Sensores

En la aplicación meshtastic, el Wio-SX1262 con kit XIAO esp32s3 es capaz de soportar una amplia gama de sensores. Cuando se usa en conjunto con la placa de expansión XIAO, puede soportar numerosos sensores Grove, por favor verifica [aquí](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Adicionalmente, cuando se combina con el módulo complementario GNSS, forma el módulo más pequeño dentro de meshtastic que tiene funcionalidad GPS.

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**Paso 1**: Conecta el sensor Grove DHT20 a la placa de expansión XIAO

**Paso 2**: Habilita `Detection Sensor` en la aplicación Meshtastic

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuración Inicial

:::note
Para más detalles, consulta [Meshtastic](https://meshtastic.org/docs).
:::

### Configuración de Radio

Hay varias secciones de configuración en el firmware de Meshtastic, estas están separadas para que puedan enviarse como pequeños mensajes de administración a través de la malla.

| Nombre | Descripción |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Las opciones de configuración de Bluetooth son: Habilitado, Modo de Emparejamiento y PIN Fijo. |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | Las opciones de configuración de canales son: Índice, Rol y Configuraciones. |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | Las opciones de configuración del dispositivo son: Rol del Dispositivo, Salida Serie, Registro de Depuración y Restablecimiento de Fábrica. |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | Las opciones de configuración de pantalla son: Duración de Pantalla Encendida, Intervalo de Carrusel Automático, Siempre Apuntar al Norte y Formato GPS. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | Las opciones de configuración LoRa son: Región, Preajuste de Módem, Saltos Máximos, Potencia de Transmisión, Ancho de Banda, Factor de Dispersión, Tasa de Codificación, Desplazamiento de Frecuencia, Transmisión Deshabilitada e Ignorar Array Entrante. |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | Las opciones de configuración de red son: WiFi Habilitado, SSID WiFi, PSK WiFi, Modo WiFi y Servidor NTP. |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | Las opciones de configuración de posición son: GPS Habilitado, Intervalo de Actualización GPS, Tiempo de Intento GPS, Posición Fija, Transmisión Inteligente, Intervalo de Transmisión y Banderas de Paquete de Posición. |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | Las opciones de configuración de energía son: Corriente de Carga, Ahorro de Energía, Apagado después de perder energía, Anulación del Multiplicador ADC, Intervalo de Espera Bluetooth, Intervalo de Sueño Ligero e Intervalo Mínimo de Despertar. |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | Las opciones de configuración de usuario son: Nombre Largo, Nombre Corto y Tiene Licencia. |

### Configuración de Módulos

Los módulos están incluidos en el firmware y permiten a los usuarios extender la funcionalidad de su malla o dispositivo.

| Nombre | Descripción |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Ajustar el brillo de los LEDs RGB I2C NCP5623. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Habilitar soporte para comunicaciones de voz Codec2 en ciertos dispositivos. |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | Establecer una serie de mensajes predefinidos para enviar directamente desde el dispositivo con el uso de un dispositivo de entrada como un codificador rotatorio. |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configurar un pin GPIO para ser monitoreado por estado alto/bajo especificado y enviar alertas de texto. |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | Los mensajes entrantes pueden alertarte usando circuitos que conectes al dispositivo (LEDs, Zumbadores, etc). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Reenviar paquetes a un servidor MQTT. Esto permite a los usuarios en la malla local comunicarse con usuarios en otra malla a través de internet. |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Enviar información sobre vecinos de 0 saltos a la malla. |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | Contar el número de dispositivos BLE y WiFi que pasan por un nodo. |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | Enviar mensajes con ubicación GPS a intervalos para probar la distancia a la que tus dispositivos pueden comunicarse. Requiere (al menos) un dispositivo configurado como emisor y uno como receptor. El/los receptor(es) registrarán todos los mensajes entrantes en un CSV. |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Establecer y leer el estado de un GPIO remotamente a través de la malla. |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | Enviar mensajes a través de la malla enviando cadenas por un puerto serie. |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Almacena mensajes en un dispositivo para entrega después de que los clientes desconectados se reúnan con la malla. |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | Conectar sensores al dispositivo y transmitir lecturas a intervalos regulares a la malla. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Rastrear qué nodos se usan para saltar un mensaje a cierto destino. |
## Recursos
- **[PDF]**[Diagrama Esquemático del SX1262 compatible con Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Hoja de Datos del Módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Archivo 3D Wio-SX1262 para XlAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Esquemático de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [Biblioteca Kicad del Kit XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Modelo 3D de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Bibliotecas Eagle de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Dimensiones de Seeed Studio XIAO ESP32S3 en DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Huella Eagle de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Firmware de fábrica de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Hoja de pines de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Huella de Seeed Studio XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Archivo 3D de carcasa](https://www.thingiverse.com/thing:6888371)
## Recursos del Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Gran Potencia, Placa Pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
