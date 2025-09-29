---
description: Este proyecto demuestra cómo implementar un gateway LoRa de canal único (LoRaHub) usando SenseCAP Indicator.
title: Gateway de Canal Único - SenseCAP Indicator
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
  date: 02/11/2025
  author: Leo Liu
---

# Gateway LoRaWAN de Canal Único - SenseCAP Indicator

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-p-5646.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Este proyecto demuestra cómo implementar un gateway LoRaWAN de canal único (LoRaHub) usando SenseCAP Indicator que utiliza ESP32S3 como MCU host y radio LoRa SX1262 y construir una aplicación LoRaWAN en The Things Network(TTN). Actualizar el firmware ofrece una solución práctica para aquellos interesados en profundizar en la tecnología LoRa y establecer conexiones a LNS(servidor de red lora).

Para gateways de canal único (llamados One-Channel Hub), que son herramientas de bajo costo que permiten a los usuarios comenzar a explorar el ámbito LoRa. Estos gateways pueden recibir paquetes LoRa en un factor de dispersión y canal específicos y facilitar el intercambio de estos paquetes con la red. Debido a su asequibilidad, muchos usuarios han comenzado a construir sus propios gateways de canal único para experimentar con LoRa.

Este es el proyecto de github: [Demostración LoRaHub de SenseCAP Indicator](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/examples/indicator_lorahub).

## Flashear Firmware

El firmware está preparado para la instalación. Simplemente descarga la última versión desde [biblioteca bin](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo).

:::tip
También proporcionamos una versión fusionada del firmware en GitHub. La siguiente instrucción se basa en la versión separada para facilitar la comprensión para el principiante. Si quieres flashear directamente [la versión fusionada](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo), establece la dirección de flasheo en 0x0.
:::

Si no usas el entorno ESP-IDF completo, también es posible flashear los archivos binarios proporcionados usando la utilidad **esptool**.

Haz clic para descargar el firmware:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241106.zip" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⏬ </font></span></strong>
    </a>
</div>

## Personalizar y construir firmware

Si quieres restablecer la configuración, la siguiente instrucción puede ayudarte a construir el firmware por ti mismo bajo el entorno ESP-IDF.

### Configurar entorno

Este proyecto está basado en el desarrollo Espressif ESP-IDF, revisa esta [guía](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation ) para configurar el entorno.

#### Obtener ESP-IDF

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### Configurar Herramientas

```linux
cd esp-idf/
./install.sh
```

### Instalación del Hub de Un Canal

**Paso 1**: Clona el hub al repositorio local. Y navega a la ruta del proyecto.

```linux
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32.git

cd ~/this_project_directory/
```

**Paso 2**: Instalar el controlador requerido

- Obtener los controladores de radio:

```
cd ~/this_project_directory/components/radio_drivers
```

- Controlador SX126x (sx1261, sx1262, sx1268):

```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- controlador llcc68:

```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- controlador lr11xx (lr1121):

```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### Compilar Firmware

**Paso 1**: Ingresa al directorio lorahub.

```
cd ~/this_project_directory/lorahub
```

Prepara tu terminal de Linux/MAC para compilar con ESP-IDF desde la línea de comandos. Este paso se puede omitir en Windows ya que la herramienta instalada 'ESP-IDF x.x CMD' preparará el entorno automáticamente.

```
. ~/esp/esp-idf/export.sh
```

Configura el objetivo ESP32 para el cual compilar.

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

### Flash con esp-idf

Identifica el dispositivo serie asociado al One-Channel Hub que se va a flashear.
Para linux y mac, puedes verificar el puerto serie mediante

```
ls /dev/cu*
```

luego flashea usando `idf.py`, reemplaza el **puerto**

```
idf.py -p port flash
```

Si se devuelve un **error de permisos**, verifica que el usuario actual sea parte del grupo dialout. Si no es así, haz lo siguiente, reinicia la máquina linux e inténtalo de nuevo:

```
sudo usermod -a -G dialout $USERNAME
```

En una configuración de **Windows**, supongamos que el dispositivo está montado como COM14, el comando anterior sería así:

```
idf.py -p COM14 flash
```

Inicia la consola del monitor para ver los registros (opcional).

```
idf.py -p port monitor
```

### Flash con esptool

Si no se utiliza el entorno completo de ESP-IDF, también es posible flashear los
archivos binarios proporcionados usando la utilidad `esptool`.

https://docs.espressif.com/projects/esptool/en/latest/esp32/

```cpp
// Merged version
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// Seperated version
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

En una configuración de Windows, el comando esptool para flashear sería:

```cpp
// Merged version
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// Seperated version
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

Reemplaza `port` y `COM` con el nombre del puerto serie utilizado. Si la conexión falla, consulta [Solución de problemas](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting).

### Flashear con esptool-JS

Se recomienda [esptool en línea](https://espressif.github.io/esptool-js/) para el flasheo.

**Paso 1**: Establece la velocidad de baudios a 115200 y conéctate al puerto correcto.

**Paso 2**: Elige el archivo bin y completa la dirección de flash correspondiente.

- Versión fusionada:

|**Dirección de Flash**|**Archivo**|
|----|----|
|0x0|Indicator_Lorahub_v1.0.0.bin|

- Versión separada:

|**Dirección Flash**|**Archivo**|
|----|----|
|0x0|bootloader.bin|
|0x10000|indicator_lorahub.bin|
|0x8000|partition-table.bin|

## Configuración del Indicator

**Paso 1**. Ingresa a la página **Wi-Fi** para configurar la red, selecciona el SSID apropiado e ingresa la contraseña.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image.png" style={{width:480, height:'auto'}}/></div>

**Paso 2**. Configura los parámetros en la página **LoRa Gateway**, establece LNS y puerto como "1700", haz clic en "configure" y luego haz clic en "reboot".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/62.png" style={{width:480, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" style={{width:480, height:'auto'}}/></div>

## Conectar a The Things Network(TTN)

**Paso 1:** Inicia sesión en la plataforma TTN y ve a la `consola`, haz clic en `Gateways->Register gateway`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image2.png" style={{width:600, height:'auto'}}/></div>

**Paso 2:** Ingresa el `Gateway ID` del Indicator en el `Gateway EUI`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image3.png" style={{width:600, height:'auto'}}/></div>

**Paso 3:** Después de completar el nombre personalizado del gateway, selecciona el plan de frecuencia correspondiente (que debe coincidir con la configuración en el Indicator) y haz clic en `Register gateway`. En este punto, el gateway de canal único del Indicator ha sido agregado a TTN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image4.png" style={{width:600, height:'auto'}}/></div>

**Paso 4:** Después de agregar el gateway de canal único del Indicator, haz clic en `Applications` para agregar un dispositivo. En este ejemplo, se utiliza el `SenseCAP T1000 Tracker` como dispositivo nodo. Para los pasos detallados de conexión, consulta la Wiki: https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN/. En `End devices`->`General settings`->`Network layer`->`Advanced MAC settings`, necesitas establecer el `Adaptive data rate (ADR)` en **modo estático**, y el `ADR data rate index` necesita ser configurado según el `spreading factor` establecido en el Indicator. Por ejemplo, si el `spreading factor` está establecido en 9, el `ADR data rate index` debe establecerse en 3, y de manera similar para otros valores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image5.png" style={{width:600, height:'auto'}}/></div>

**Paso 5:** Como se muestra a continuación, puedes verificar los `EVENT DETAILS` en los datos en vivo del dispositivo nodo agregado para ver los registros relacionados. Puedes ver que el dispositivo nodo reporta datos a través del gateway de canal único del Indicator recién agregado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image6.png" style={{width:600, height:'auto'}}/></div>

## Conectar a ChirpStack

**Paso 1:** Instala ChirpStack consultando <a  href="https://www.chirpstack.io/docs/getting-started/debian-ubuntu.html" target="_blank"><span> Configurar ChirpStack en Ubuntu/Debian</span></a>.

**Paso 2:** Después de instalar ChirpStack, necesitas agregar una definición de región de canal único al directorio `/etc/chirpstack`.

En esta Wiki, creamos una definición de canal único bajo la banda EU868, usando el canal 868.1Mhz.
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

También puedes personalizar tu región de canal único, consulta <a  href="https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8" target="_blank"><span> Teoría LoRaWAN para el Hub de Un Canal</span></a>.

**Paso 3:** Modifica el `/etc/chirpstack/chirpstack.toml` para habilitar la nueva región definida.

```toml
enabled_regions={
  ...,
  "eu868_1ch",
  ...,
}
```

**Paso 4:** Inicia sesión en la consola de ChirpStack y añade el gateway de canal único.

Antes de añadir un gateway, verifica que la región de canal único se haya habilitado exitosamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-1.png" alt="pir" width={600} height="auto" /></p>

Si la región de canal único se habilita exitosamente, añade el gateway de canal único al ChirpStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-2.png" alt="pir" width={600} height="auto" /></p>

**Paso 5:** Configura los parámetros en la página del Gateway LoRa, establece la dirección a la dirección de tu servidor ChirpStack, haz clic en `configure` y luego haz clic en `reboot`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" alt="pir" width={600} height="auto" /></p>

Después del reinicio, puedes ver que el estado cambia a en línea en la consola de ChirpStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-3.png" alt="pir" width={600} height="auto" /></p>

**Paso 6:** Podemos optimizar el tiempo de unión del dispositivo final usando la misma velocidad de datos con un gateway de canal único.

Refiriéndonos a la configuración del gateway de canal único `SF7 BW125`, ajustamos la velocidad de datos del T1000-A a `DR5`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-4.png" alt="pir" width={600} height="auto" /></p>

Después de configurar la velocidad de datos del T1000-A, necesitamos crear un perfil de dispositivo para él.

Selecciona `EU868` para la región y `EU868_1CH` para la configuración de región.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-5.png" alt="pir" width={600} height="auto" /></p>

Como puedes ver en la figura a continuación, puedes ver que el T1000-A subió exitosamente datos a ChirpStack a través del gateway de canal único.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-6.png" alt="pir" width={600} height="auto" /></p>

## Recursos

- [Firmware One Channel Hub para SenseSAP Indicator](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241031.zip)
- [Repositorio Github](https://github.com/Lora-net/one_channel_hub)
- [Nota de Aplicación Semtech](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8)

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
