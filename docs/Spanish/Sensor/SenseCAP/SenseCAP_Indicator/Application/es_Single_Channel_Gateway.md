---
description: This project demonstrates how to implement a single channel LoRa gateway (LoRaHub) using SenseCAP Indicator.
title: Gateway de un Canal- SenseCAP Indicator
keywords:
- SenseCAP Indicator
- LoRaWAN
- ESP32S3
- Single Channel Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.webp
slug: /es/SenseCAP_Indicator_Single_Channel_Gateway
toc_max_heading_level: 4
sidebar_position: 5
last_update:
  date: 07/22/2025
  author: Guillermo
---

# Single Channel LoRaWAN Gateway - SenseCAP Indicator

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.png" style={{width:800, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Indicator D1Pro</th>
      <th>SenseCAP Indicator D1L</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1Pro-p-5644.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-p-5646.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Este proyecto demuestra cómo implementar un gateway LoRaWAN de canal único (LoRaHub) usando el SenseCAP Indicator, que utiliza ESP32S3 como MCU principal y el radio LoRa SX1262, y construir una aplicación LoRaWAN en The Things Network (TTN). Actualizar el firmware ofrece una solución práctica para quienes desean explorar la tecnología LoRa y establecer conexiones con servidores de red LoRa (LNS).

Para gateways de canal único (llamados One-Channel Hub), que son herramientas de bajo costo que permiten a los usuarios comenzar a explorar el mundo LoRa. Estos gateways pueden recibir paquetes LoRa en un factor de propagación y canal específicos, y facilitar el intercambio de estos paquetes con la red. Debido a su bajo costo, muchos usuarios han comenzado a construir sus propios gateways de canal único para experimentar con LoRa.

Este es el proyecto en GitHub: [SenseCAP Indicator LoRaHub Demonstration](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/examples/indicator_lorahub).

## Flashear el firmware

El firmware está listo para instalarse. Simplemente descarga la última versión desde la [biblioteca de binarios](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo).

:::tip
También ofrecemos una versión combinada del firmware en GitHub. La siguiente instrucción se basa en la versión separada para facilitar la comprensión a principiantes. Si deseas grabar directamente la [versión combinada](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo), configura la dirección de flasheo a 0x0.
:::

Si no usas el entorno completo de ESP-IDF, también es posible flashear los archivos binarios proporcionados utilizando la utilidad **esptool**.

Descarga el firmware:

<div className="get_one_now_container" style={{ textAlign: "center" }}>
  <a
    className="get_one_now_item"
    href="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241106.zip"
  >
    <strong>⏬ Descarga</strong>
  </a>
</div>

## Personalizar y compilar el firmware

Si deseas reiniciar la configuración, la siguiente instrucción te ayudará a compilar el firmware por ti mismo bajo el entorno ESP-IDF.

### Configurar el entorno

Este proyecto está basado en el desarrollo con ESP-IDF de Espressif, revisa esta [guía](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation) para configurar el entorno.

#### Get ESP-IDF

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### Configurar herramientas

```linux
cd esp-idf/
./install.sh
```

### Instalación de One Channel Hub

**Paso 1**: Clona el repositorio localmente y navega al directorio del proyecto.

```linux
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32.git

cd ~/this_project_directory/
```

**Paso 2**: Instalar drivers necesarios

- Obtener los drivers de radio:

```
cd ~/this_project_directory/components/radio_drivers
```

- SX126x driver(sx1261, sx1262, sx1268):
```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- llcc68 driver:
```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- lr11xx driver(lr1121):
```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### Compilar Firmware

**Paso 1**: Entra al directorio lorahub.
```
cd ~/this_project_directory/lorahub
```

Prepara tu terminal Linux/MAC para la compilación con ESP-IDF:

```
. ~/esp/esp-idf/export.sh
```

Configura el objetivo para ESP32S3:

```
idf.py set-target esp32s3
```

Personaliza la compilación si es necesario:

```
idf.py menuconfig
```

Construye el proyecto:

```
idf.py all
```

### Flashear con esp-idf

Identifica el puerto serial asociado al dispositivo para flashear. Para Linux/Mac:

```
ls /dev/cu*
```

Luego flashea usando `idf.py`, reemplazando **port** con el puerto adecuado:

```
idf.py -p port flash
```

Si recibes error de permisos, asegúrate de que tu usuario pertenezca al grupo dialout. Si no, ejecuta. Luego reinicia el sistema y vuelve a intentarlo.

If a **permission error** is returned, check that the current user is part of the dialout group. If not, do the following, reboot the linux machine and try again:

```
sudo usermod -a -G dialout $USERNAME
```
En Windows, por ejemplo, si el dispositivo está en COM14:

```
idf.py -p COM14 flash
```

Para monitorear logs (opcional):

```
idf.py -p port monitor
```

### Flashear con esptool

Si no usas el entorno completo de ESP-IDF, puedes flashear los binarios usando la utilidad `esptool`.

https://docs.espressif.com/projects/esptool/en/latest/esp32/

```cpp
// Merged version
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// Seperated version
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

En Windows, el comando con esptool sería:

```cpp
// Merged version
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// Seperated version
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

Reemplaza `port` y `COM` con el puerto serial correspondiente. Si la conexión falla, revisa la sección de [Resolución de Problemas](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting).

### Flasheo con esptool-JS

Se recomienda usar el [esptool en línea](https://espressif.github.io/esptool-js/) para flashear el firmware.

**Paso 1**: Configura la tasa de baudios (baud rate) a 115200 y conecta al puerto serial correcto.

**Paso 2**: Selecciona el archivo binario (.bin) correspondiente y llena la dirección de flash adecuada.

- Versión combinada:

| **Dirección Flash** | **Archivo**                     |
|---------------------|--------------------------------|
| 0x0                 | Indicator_Lorahub_v1.0.0.bin   |

- Versión separada:

| **Dirección Flash** | **Archivo**            |
|---------------------|-----------------------|
| 0x0                 | bootloader.bin        |
| 0x10000             | indicator_lorahub.bin |
| 0x8000              | partition-table.bin   |

## Configuración del Indicator

**Paso 1:** Ingresa a la página de **Wi-Fi**, configura la red seleccionando el SSID adecuado e ingresa la contraseña.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image.png" style={{width:480, height:'auto'}}/></div>

**Paso 2:** Configura los parámetros en la página de **LoRa Gateway**, establece LNS y puerto en "1700", presiona **configure**, y luego **reboot**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/62.png" style={{width:480, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" style={{width:480, height:'auto'}}/></div>

## Conexión a The Things Network (TTN)

**Paso 1:** Inicia sesión en la plataforma TTN, accede a la consola, y haz clic en `Gateways -> Register gateway`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image2.png" style={{width:600, height:'auto'}}/></div>

**Paso 2:** Ingresa el `Gateway ID` del Indicator en el campo `Gateway EUI`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image3.png" style={{width:600, height:'auto'}}/></div>

**Paso 3:** Completa el nombre personalizado del gateway, selecciona el plan de frecuencia correspondiente (debe coincidir con la configuración en el Indicator) y haz clic en `Register gateway`. Con esto, el gateway de un solo canal queda añadido a TTN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image4.png" style={{width:600, height:'auto'}}/></div>

**Paso 4:** Luego de añadir el gateway, ve a `Applications` para añadir un dispositivo. En este ejemplo se usa el `SenseCAP T1000 Tracker` como nodo. Para pasos detallados consulta: https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/.

En `End devices -> General settings -> Network layer -> Advanced MAC settings` configura:

- `Adaptive data rate (ADR)` en **Static mode**  
- `ADR data rate index` según el `spreading factor` usado en el Indicator (ejemplo: SF9 corresponde a índice 3)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image5.png" style={{width:600, height:'auto'}}/></div>

**Paso 5:** En los datos en vivo (`Live data`) del nodo, verifica los `EVENT DETAILS` para confirmar que el dispositivo reporta datos vía el gateway Indicator.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image6.png" style={{width:600, height:'auto'}}/></div>

## Conexión a ChirpStack

**Paso 1:** Instala ChirpStack siguiendo la guía: [Setup ChirpStack on Ubuntu/Debian](https://www.chirpstack.io/docs/getting-started/debian-ubuntu.html).

**Paso 2:** Luego de instalar ChirpStack, añade una definición de región de canal único (single channel) en el directorio `/etc/chirpstack`.  
En esta guía se crea una definición para banda EU868 usando el canal 868.1 MHz.

<details>
<summary>region_eu868_1ch.toml</summary>

```toml
# This file contains an example EU868 configuration.
[[regions]]

  # ID is an user-defined identifier for this region.
  id="eu868_1ch"

  # Description is a short description for this region.
  description="EU868_1CH"

  # Common-name refers to the common-name of this region as defined by
  # the LoRa Alliance.
  common_name="EU868"


  # Gateway configuration.
  [regions.gateway]

    # Force gateways as private.
    #
    # If enabled, gateways can only be used by devices under the same tenant.
    force_gws_private=false


    # Gateway backend configuration.
    [regions.gateway.backend]

      # The enabled backend type.
      enabled="mqtt"

      # MQTT configuration.
      [regions.gateway.backend.mqtt]

        # Topic prefix.
        #
        # The topic prefix can be used to define the region of the gateway.
        # Note, there is no need to add a trailing '/' to the prefix. The trailing
        # '/' is automatically added to the prefix if it is configured.
        topic_prefix="eu868"

        # MQTT server (e.g. scheme://host:port where scheme is tcp, ssl or ws)
        server="tcp://$MQTT_BROKER_HOST:1883"

        # Connect with the given username (optional)
        username=""

        # Connect with the given password (optional)
        password=""

        # Quality of service level
        #
        # 0: at most once
        # 1: at least once
        # 2: exactly once
        #
        # Note: an increase of this value will decrease the performance.
        # For more information: https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels
        qos=0

        # Clean session
        #
        # Set the "clean session" flag in the connect message when this client
        # connects to an MQTT broker. By setting this flag you are indicating
        # that no messages saved by the broker for this client should be delivered.
        clean_session=false

        # Client ID
        #
        # Set the client id to be used by this client when connecting to the MQTT
        # broker. A client id must be no longer than 23 characters. If left blank,
        # a random id will be generated by ChirpStack.
        client_id=""

        # Keep alive interval.
        #
        # This defines the maximum time that that should pass without communication
        # between the client and server.
        keep_alive_interval="30s"

        # CA certificate file (optional)
        #
        # Use this when setting up a secure connection (when server uses ssl://...)
        # but the certificate used by the server is not trusted by any CA certificate
        # on the server (e.g. when self generated).
        ca_cert=""

        # TLS certificate file (optional)
        tls_cert=""

        # TLS key file (optional)
        tls_key=""

  # Region specific network configuration.
  [regions.network]
    
    # Installation margin (dB) used by the ADR engine.
    #
    # A higher number means that the network-server will keep more margin,
    # resulting in a lower data-rate but decreasing the chance that the
    # device gets disconnected because it is unable to reach one of the
    # surrounded gateways.
    installation_margin=10

    # RX window (Class-A).
    #
    # Set this to:
    # 0: RX1 / RX2
    # 1: RX1 only
    # 2: RX2 only
    rx_window=0

    # RX1 delay (1 - 15 seconds).
    rx1_delay=1

    # RX1 data-rate offset
    rx1_dr_offset=0

    # RX2 data-rate
    rx2_dr=0

    # RX2 frequency (Hz)
    rx2_frequency=869525000

    # Prefer RX2 on RX1 data-rate less than.
    #
    # Prefer RX2 over RX1 based on the RX1 data-rate. When the RX1 data-rate
    # is smaller than the configured value, then the Network Server will
    # first try to schedule the downlink for RX2, failing that (e.g. the gateway
    # has already a payload scheduled at the RX2 timing) it will try RX1.
    rx2_prefer_on_rx1_dr_lt=0

    # Prefer RX2 on link budget.
    #
    # When the link-budget is better for RX2 than for RX1, the Network Server will first
    # try to schedule the downlink in RX2, failing that it will try RX1.
    rx2_prefer_on_link_budget=false

    # Downlink TX Power (dBm)
    #
    # When set to -1, the downlink TX Power from the configured band will
    # be used.
    #
    # Please consult the LoRaWAN Regional Parameters and local regulations
    # for valid and legal options. Note that the configured TX Power must be
    # supported by your gateway(s).
    downlink_tx_power=-1

    # ADR is disabled.
    adr_disabled=true

    # Minimum data-rate.
    min_dr=5

    # Maximum data-rate.
    max_dr=5

    # Add the following after min_dr/max_dr configuration 
    enabled_uplink_channels=[0] 
```

</details>

También puedes personalizar tu región de canal único. Consulta la [Teoría LoRaWAN para el One-Channel Hub](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8) para más detalles.

**Paso 3:** Modifica el archivo `/etc/chirpstack/chirpstack.toml` para habilitar la nueva región definida.

```toml
enabled_regions={
  ...,
  "eu868_1ch",
  ...,
}
```

**Paso 4:** Ingresa a la consola de ChirpStack y añade el gateway de canal único.

Antes de agregar un gateway, verifica que la región de canal único esté correctamente habilitada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-1.png" alt="pir" width={600} height="auto" /></p>

Si la región está habilitada, añade el gateway de canal único en ChirpStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-2.png" alt="pir" width={600} height="auto" /></p>

**Paso 5:** Configura los parámetros en la página LoRa Gateway del Indicator, establece la dirección al servidor ChirpStack, presiona `configure` y luego `reboot`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" alt="pir" width={600} height="auto" /></p>

Tras reiniciar, en la consola de ChirpStack verás el estado en línea.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-3.png" alt="pir" width={600} height="auto" /></p>

**Paso 6:** Podemos optimizar el tiempo de unión (join) del dispositivo final usando la misma tasa de datos que el gateway de canal único.

Basándonos en la configuración del gateway `SF7 BW125`, ajustamos el dispositivo T1000-A a `DR5`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-4.png" alt="pir" width={600} height="auto" /></p>

Luego, crea un perfil de dispositivo para el T1000-A.

Selecciona `EU868` para la región y `EU868_1CH` para la configuración regional.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-5.png" alt="pir" width={600} height="auto" /></p>

Como muestra la imagen, el T1000-A subió correctamente datos a ChirpStack vía el gateway de canal único.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-6.png" alt="pir" width={600} height="auto" /></p>

## Recursos

- [Firmware One Channel Hub para SenseCAP Indicator](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241031.zip)  
- [Repositorio Github](https://github.com/Lora-net/one_channel_hub)  
- [Nota de Aplicación Semtech](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8)  

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
