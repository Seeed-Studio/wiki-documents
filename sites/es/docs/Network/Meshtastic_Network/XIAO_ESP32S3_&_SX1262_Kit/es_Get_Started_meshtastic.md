---
description: Meshtastic basado en el Kit XIAO ESP32S3 & Wio-SX1262
title: Kit XIAO ESP32-S3 & Wio SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2024-10-09'
updatedAt: '2025-12-11'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/
---


[Meshtastic®](https://meshtastic.org/) es una red mesh descentralizada, fuera de la red y de código abierto, diseñada para ejecutarse en dispositivos asequibles y de bajo consumo. Seeed Studio ofrece una amplia gama de dispositivos Meshtastic listos para usar para aficionados y usuarios industriales. El Kit XIAO ESP32S3 & Wio-SX1262 es una solución flexible para desarrolladores y creadores de Meshtastic.
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>
## Flashear el Firmware

:::note
Por favor, flashea el firmware en tu dispositivo si compraste el Kit XIAO ESP32S3 & Wio-SX1262 antes del **24 de octubre de 2024** siguiendo este tutorial paso a paso. Por favor, `no uses NRF-OTA` para actualizar el firmware, ya que podría hacer que el dispositivo quede completamente inutilizable.
:::

**Paso 1**: En primer lugar, abre un navegador y visita https://flasher.meshtastic.org/# requiere navegador Chrome o Edge.

**Paso 2**: Luego, usa un cable USB adecuado para conectar el dispositivo a la PC. Es posible que necesites apagarlo, luego **mantener presionado el botón BOOT** mientras conectas el cable USB.

**Paso 3**: Sigue las siguientes instrucciones proporcionadas para realizar las operaciones de flasheo posteriores. Selecciona el Dispositivo como "**Seeed XIAO S3**", el Firmware como **el más reciente**, y luego haz clic en "**Flash**". No olvides marcar "**Full Erase and Install**" si deseas sobrescribir el firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Descripción General del Software

Meshtastic proporciona múltiples plataformas de software para que los usuarios elijan, incluyendo aplicación para Android, aplicación para Apple y cliente web. También proporciona CLI de Python, Linux Nativo y métodos de integración para que los desarrolladores los utilicen.

Para información específica, consulta [el sitio web oficial de Meshtastic](https://meshtastic.org/docs/software/).

- [Aplicación Android](https://meshtastic.org/docs/category/android-app/): La aplicación para Android está disponible en el repositorio F-Droid y en Google Play Store. Esto te permite conectar tu dispositivo Meshtastic desde tu teléfono Android vía Bluetooth, Wi-Fi (si están en la misma red) o USB On-The-Go (OTG).
- [Aplicación Apple](https://meshtastic.org/docs/category/apple-apps/): Está disponible en la App Store. Por defecto, la aplicación Meshtastic para iOS admite el uso de mapas de Apple nativos sin conexión.
- [Cliente Web](https://meshtastic.org/docs/software/web-client/): Meshtastic Web es un cliente de Meshtastic que se ejecuta directamente en tu navegador.
- [CLI de Python](https://meshtastic.org/docs/software/python/cli/): El paquete pip de Python instala un ejecutable de línea de comandos "meshtastic", que muestra los paquetes enviados a través de la red como JSON y te permite ver información de depuración serial de los dispositivos meshtastic.
- [Linux Nativo](https://meshtastic.org/docs/software/linux-native/): El software del dispositivo también puede ejecutarse en una máquina Linux nativa gracias al framework Portduino.
- [Integraciones de Meshtastic](https://meshtastic.org/docs/software/integrations/): El ecosistema Meshtastic es altamente extensible y permite una fácil integración con varios productos y proyectos de software existentes.

## Conexión del Dispositivo

Antes de usar Meshtastic, primero se necesita conectar el dispositivo. Hay dos métodos de conexión. El primero es usar una placa de expansión, y la información correspondiente se mostrará en la pantalla. Luego, se puede realizar la configuración en la plataforma correspondiente según la información reflejada. El segundo es conectar el XIAO y el módulo Wio-SX1262, y usar una herramienta de puerto serie para obtener el ID del nodo y la contraseña.

### Conectado a la batería

El XIAO ESP32S3 tiene un chip de gestión de energía integrado que permite que el XIAO ESP32S3 se alimente de forma independiente usando una batería o que cargue la batería a través del puerto USB del XIAO ESP32S3.

Si deseas conectar la batería para el XIAO, te recomendamos comprar una batería de `litio 3.7V` recargable y calificada con `circuito de protección`. Al soldar la batería, ten cuidado de distinguir entre los terminales positivo y negativo. El terminal negativo de la fuente de alimentación debe ser el lado más cercano al puerto USB, y el terminal positivo de la fuente de alimentación es el lado alejado del puerto USB.



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### Conectado a la placa de expansión

Después de flashear el firmware y descargar la aplicación Meshtastic, la placa de expansión sería una buena herramienta para la conexión y aplicaciones adicionales, como agregar sensores y módulos Grove fácilmente.

**Paso 1**: Asegúrate de que el dispositivo a conectar (como "device") esté encendido y en un estado detectable. Y abre la aplicación Meshtastic en tu teléfono móvil.

**Paso 2**: En la aplicación Meshtastic, hay un icono "+" en la parte inferior derecha. Haz clic en él para que la aplicación comience a escanear dispositivos conectables cercanos. Luego selecciona el ID de dispositivo correspondiente que se muestra en la pantalla OLED.

**Paso 3**: Una vez seleccionado correctamente, ingresa el código que se muestra en la pantalla OLED. Presiona el botón para cambiar la pantalla.

**Funciones del Botón:**

- Presionar una vez para cambiar la pantalla.
- Presionar dos veces para transmitir.
- Presionar tres veces para cambiar el modo GPS.

**Paso 4**: Configura la región LoRa, luego el dispositivo se reiniciará.

**Paso 5**: Una vez finalizado el reinicio, el estado del dispositivo se puede verificar en la aplicación Meshtastic y en la pantalla OLED.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Herramienta de puerto serie

Selecciona una herramienta de depuración de puerto serie que te guste. A continuación, tomaré Comtool en mac como ejemplo. Selecciona la conexión **serial**, elige **el puerto correspondiente**, configura la velocidad en baudios a **115200**, y activa **RTS y DTR**. Abre la conexión y podrás ver los datos de conexión.
Busca "**nodenum**" para encontrar el ID del nodo correspondiente. Su **contraseña predeterminada es 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
Los últimos cuatro dígitos de nodenum son el número de ID del dispositivo descubierto por la aplicación meshtastic. Por ejemplo, "nodenum 0x9e20d02c" es "Meshtastic_d02c" en meshtastic.
:::


### Conectado a SX-1262

El SX-1262 se puede conectar al Xiao ESP32-S3 a través de la interfaz B2B. El SX-1262 usa SPI para comunicarse con el Xiao ESP32-S3.

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
- La función de comunicación inalámbrica del dispositivo (como Bluetooth, LoRa, etc.) debe estar habilitada. Verifica la configuración relevante para asegurarte de que no esté accidentalmente apagada o restringida.

2. Distancia y fuerza de la señal

- La distancia entre los dos dispositivos no puede ser demasiado grande. Después de las pruebas iniciales, la distancia de comunicación del XIAO ESP32S3 para Meshtastic con antena IPEX de 2 dbm es superior a 2.5 km. En general, en un entorno más abierto, puede superar los 20 km.

3. Configuración de Red

- Asegúrate de que los dispositivos estén en el mismo modo de red o configuración de canal. Configura fácilmente la misma 'región lora' y 'Modem preset' usando la aplicación Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**Paso 3**. Comunicarse con Wio Tracker T1000-E

Una vez conectado, puedes comenzar a enviar y recibir mensajes a través de la red Meshtastic. Los mensajes pueden ser basados en texto o pueden admitir funciones adicionales dependiendo de las capacidades de los dispositivos y la aplicación. También puedes monitorear la actividad de la red y ver qué dispositivos están actualmente conectados y activos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Conexión de Sensores

En la aplicación meshtastic, el kit Wio-SX1262 con XIAO esp32s3 es capaz de admitir una amplia gama de sensores. Cuando se usa junto con la placa de expansión XIAO, puede admitir numerosos sensores Grove, consulta [aquí](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Además, cuando se combina con el módulo adicional GNSS, forma el módulo más pequeño dentro de meshtastic que tiene funcionalidad GPS.

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
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p 4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
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

Existen varias secciones de configuración en el firmware de Meshtastic, estas están separadas para que puedan enviarse como pequeños mensajes de administración a través de la malla.

| Nombre | Descripción |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | Las opciones de configuración de Bluetooth son: Habilitado, Modo de Emparejamiento y PIN Fijo. |
| [Canales](https://meshtastic.org/docs/configuration/radio/channels/) | Las opciones de configuración de Canales son: Índice, Rol y Configuración. |
| [Dispositivo](https://meshtastic.org/docs/configuration/radio/device/) | Las opciones de configuración de Dispositivo son: Rol del Dispositivo, Salida Serial, Registro de Depuración y Restablecimiento de Fábrica. |
| [Pantalla](https://meshtastic.org/docs/configuration/radio/display/) | Las opciones de configuración de Pantalla son: Duración de Encendido de Pantalla, Intervalo de Carrusel Automático, Apuntar Siempre al Norte y Formato GPS. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | Las opciones de configuración de LoRa son: Región, Preajuste del Módem, Máximo de Saltos, Potencia de Transmisión, Ancho de Banda, Factor de Dispersión, Tasa de Codificación, Desplazamiento de Frecuencia, Transmisión Deshabilitada e Ignorar Matriz Entrante. |
| [Red](https://meshtastic.org/docs/configuration/radio/network/) | Las opciones de configuración de Red son: WiFi Habilitado, SSID de WiFi, PSK de WiFi, Modo WiFi y Servidor NTP. |
| [Posición](https://meshtastic.org/docs/configuration/radio/position/) | Las opciones de configuración de Posición son: GPS Habilitado, Intervalo de Actualización de GPS, Tiempo de Intento de GPS, Posición Fija, Difusión Inteligente, Intervalo de Difusión y Banderas de Paquete de Posición. |
| [Energía](https://meshtastic.org/docs/configuration/radio/power/) | Las opciones de configuración de Energía son: Corriente de Carga, Ahorro de Energía, Apagado tras pérdida de energía, Anulación del Multiplicador ADC, Intervalo de Espera Bluetooth, Intervalo de Sueño Ligero e Intervalo Mínimo de Despertar. |
| [Usuario](https://meshtastic.org/docs/configuration/radio/user/) | Las opciones de configuración de Usuario son: Nombre Largo, Nombre Corto y Está Licenciado. |

### Configuración de Módulos

Los módulos están incluidos en el firmware y permiten a los usuarios extender la funcionalidad de su malla o dispositivo.

| Nombre | Descripción |
| ---- | ---- |
| [Iluminación Ambiental](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Ajusta el brillo de los LEDs RGB I2C NCP5623. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Habilita el Soporte para Comunicaciones de Voz Codec2 en ciertos dispositivos. |
| [Mensaje Predefinido](https://meshtastic.org/docs/configuration/module/canned-message/) | Establece una serie de mensajes predefinidos para enviar directamente desde el dispositivo mediante el uso de un dispositivo de entrada como un codificador rotatorio. |
| [Sensor de Detección](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configura un pin GPIO para ser monitoreado por un estado alto/bajo especificado y envía alertas de texto. |
| [Notificación Externa](https://meshtastic.org/docs/configuration/module/external-notification/) | Los mensajes entrantes pueden alertarte utilizando circuitos que conectes al dispositivo (LEDs, Zumbadores, etc.). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Reenvía paquetes a un servidor MQTT. Esto permite a los usuarios en la malla local comunicarse con usuarios en otra malla a través de internet. |
| [Información de Vecinos](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Envía información sobre vecinos de 0 saltos a la malla. |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | Cuenta el número de dispositivos BLE y Wifi que pasan por un nodo. |
| [Prueba de Alcance](https://meshtastic.org/docs/configuration/module/range-test/) | Envía mensajes con ubicación GPS a intervalos para probar la distancia a la que tus dispositivos pueden comunicarse. Requiere (al menos) un dispositivo configurado como emisor y otro como receptor. El/los receptor(es) registrarán todos los mensajes entrantes en un CSV. |
| [Hardware Remoto](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Establece y lee el estado de un GPIO de forma remota a través de la malla. |
| [Módulo Serial](https://meshtastic.org/docs/configuration/module/serial/) | Envía mensajes a través de la malla enviando cadenas a través de un puerto serial. |
| [Almacenar y Reenviar](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Almacena mensajes en un dispositivo para su entrega después de que los clientes desconectados se reincorporen a la malla. |
| [Telemetría](https://meshtastic.org/docs/configuration/module/telemetry/) | Conecta sensores al dispositivo y transmite lecturas a intervalos regulares a la malla. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Rastrea qué nodos se utilizan para saltar un mensaje a un destino determinado. |
## Recursos
- **[PDF]**[Diagrama Esquemático del SX1262 compatible con Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Hoja de Datos del Módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Archivo 3D de Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Esquemático de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [Biblioteca Kicad del Kit XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Modelo 3D de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Bibliotecas Eagle de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Dimensiones de Seeed Studio XIAO ESP32S3 en DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Huella Eagle de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Firmware de fábrica de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Hoja de asignación de pines de Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Huella de Seeed Studio XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Archivo 3D de la carcasa](https://www.thingiverse.com/thing:6888371)
## Recursos del Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Gran Potencia, Placa Pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
