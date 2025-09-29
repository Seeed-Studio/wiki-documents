---
description: Gateway LoRaWAN de Canal Único basado en XIAO ESP32S3 & Kit Wio-SX1262
title: Gateway LoRaWAN de Canal Único
keywords: ["XIAO ESP32S3", "LoRa", "Wio SX1262", "Single Channel Gateway"]
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /es/wio_sx1262_xiao_esp32s3_for_single_channel_gateway
sidebar_position: 3
last_update:
  date: 10/09/2024
  author: Evelyn Chen
---

# **Configurando el Kit XIAO ESP32S3 & Wio-SX1262 como Gateway LoRaWAN de Canal Único**

Los gateways de canal único (llamados One-Channel Hub) son herramientas de bajo costo que permiten a los usuarios comenzar a explorar el mundo de LoRa. Estos gateways pueden recibir paquetes LoRa en un factor de dispersión y canal específicos y facilitar el intercambio de estos paquetes con la red. Debido a su asequibilidad, muchos usuarios han comenzado a construir sus propios gateways de canal único para experimentar con LoRa.

El XIAO ESP32S3 como MCU anfitrión y el kit de radio LoRa Wio-SX1262 pueden configurarse para funcionar como gateway de canal único. Este kit ofrece una solución práctica para aquellos interesados en adentrarse en la tecnología LoRa y establecer conexiones con LNS (servidor de red LoRa).

Este es el proyecto de github: [One Channel Hub](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config).

## Flashear Firmware

El firmware está preparado para la instalación que viene pre-flasheado en el Kit XIAO ESP32S3 & Wio-SX1262 con carcasa 3D. Si deseas flashear el Kit XIAO ESP32S3 & Wio-SX1262 como Gateway LoRaWAN de Canal Único, simplemente descarga desde la [biblioteca bin](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config/bin).

:::tip
El Kit XIAO ESP32S3 & Wio-SX1262 con carcasa 3D viene pre-flasheado como un gateway LoRaWAN de Canal Único, por favor salta a la siguiente sección para [configuración](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#configuration-via-sensecraft-app).
:::

:::note
Este firmware está construido con:

- Seleccionar placa Seeed XIAO ESP32S3 Gateway
- Modificar el tamaño de Flash a 8 MB
- Habilitar Obtener configuración desde flash
- Deshabilitar aprovisionamiento Wi-Fi
- Deshabilitar pantalla OLED

Uso:

- Habilitar/deshabilitar configuración a través del botón de usuario
- Nombre de transmisión Bluetooth por "GW-XIAO-ESP32S3"
- Conectar a través de la APP SenseCraft y configurar Wi-Fi/LoRa

:::

Si no usas el entorno completo ESP-IDF, también es posible flashear los archivos binarios proporcionados usando la utilidad **esptool**.

Haz clic para descargar el firmware:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/seeed_xiao_esp32s3_one_chanel_hub_2024_12_09_01.rar" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Descargar ⏬ </font></span></strong></a>
</div>

**Paso 1**: Descarga Esptool, para más información por favor consulta la [documentación de Esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/).

```python
pip install esptool
```

**Paso 2**: Conecta el XIAO ESP32S3 a tu PC.

**Paso 3**: Navega al archivo descargado y abre la terminal/Comando, luego ejecuta los comandos de **esptool.py**.

- Para Linux/macOS

```linux
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

- Para Windows

```linux
py -m esptool --chip esp32s3 -p COM14 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

Reemplaza `port` con el nombre del puerto serie utilizado. Si la conexión falla, consulta [Solución de problemas](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting).

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

Inicia la consola de monitoreo para ver los registros (opcional).

```
idf.py -p port monitor
```

### Flash con esptool

Si no se utiliza el entorno completo de ESP-IDF, simplemente se pueden descargar los archivos binarios proporcionados siguiendo [la primera sección](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#flash-firmware).

### Flash con esptool-JS

Se recomienda [esptool en línea](https://espressif.github.io/esptool-js/) para el flasheo.

**Paso 1**: Establecer la velocidad de baudios a 115200 y conectar al puerto correcto.

**Paso 2**: Elegir el archivo bin y completar la dirección de flash correspondiente.

|**Dirección de Flash**|**Archivo**|
|----|----|
|0x0|seeed_xiao_esp32s3_devkit_bootloader.bin|
|0x10000|seeed_xiao_esp32s3_devkit_lorahub.bin|
|0x8000|seeed_xiao_esp32s3_devkit_partition-table.bin|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/70.png" alt="pir" width={600} height="auto" /></p>

## Configuración a través de la aplicación Sensecraft

### Configuración de WiFi y LoRaWAN

**Paso 1**: Descarga la aplicación `SenseCraft`: [Enlace de descarga](https://sensecap-mate-download.seeed.cn/)

**Paso 2**: Conecta el kit XIAO ESP32S3 & Wio-SX1262 a la alimentación.

**Paso 3**: Sigue las instrucciones en la aplicación para configurar el WiFi y LoRaWAN.

- Regístrate e inicia sesión en la aplicación SenseCraft
- Navega a `Usuario` → `Configuración Bluetooth del dispositivo`
- Selecciona `Kit XIAO ESP32S3 & Wio-SX1262`
- Haz clic en `El dispositivo está listo para configuración`
- Presiona el botón del kit una vez. Cuando el LED comience a parpadear, entrará en el modo de emparejamiento Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/APPOperation.gif" alt="pir" width={300} height="auto" /></p>

**Paso 4**: Registra la puerta de enlace LoRaWAN en The Things Network(TTN).

- crea una cuenta e inicia sesión en https://eu1.cloud.thethings.network/.
- Registra la puerta de enlace.
- Copia el `EUI de puerta de enlace` correcto a TTN, y también completa el `plan de frecuencia` y el `ID de puerta de enlace` correctos.
- Reinicia tu módulo de puerta de enlace y espera aproximadamente 2 minutos. Luego puedes verificar el estado de la puerta de enlace como conectada.

## Configuración a través de ESP BLE prov

:::note
Si quieres configurar Wi-Fi usando **ESP BLE prov** y configurar LoRaWAN usando **cliente web**, necesitas flashear [este firmware](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip). Ten en cuenta que no es el mismo firmware que se usa para la configuración a través de la aplicación SenseCraft. Además, puedes configurar `Habilitar aprovisionamiento Wi-Fi` siguiendo [Personalizar y construir firmware](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#customize-and-build-firmware).
:::

### Configuración de Wi-Fi

**Paso 1**: Descarga la aplicación `ESP BLE prov`:

- [para Android](https://play.google.com/store/apps/details?id=com.espressif.provble)
- [para iOS](https://apps.apple.com/in/app/esp-ble-provisioning/id1473590141)

Presiona el botón `RST` en la placa, y luego presiona el botón `BOOT`, el LED se encenderá.

**Paso 2**: Conecta el XIAO a tu PC y abre una herramienta de puerto serie, como PuTTY, COMTOOL, o cualquier otra herramienta que prefieras.

**Paso 3**: Abre la comunicación del terminal

- Para `COMTOOL`:
  
(1). Selecciona el puerto serie correcto y establece la velocidad de baudios a **115200**

(2). Ve a Terminal y abre la comunicación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/23.png" alt="pir" width={500} height="auto" /></p>

- Para `PuTTY`:

(1). Selecciona la línea serie correcta y establece la velocidad de baudios a **115200**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/25.png" alt="pir" width={500} height="auto" /></p>

(2). Ve a Terminal y haz clic en 'Implicit CR in every LF'

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/26.png" alt="pir" width={500} height="auto" /></p>

**Paso 4**: Haz clic en 'Provison Device' en la aplicación ESP BLE prov

Una vez conectado exitosamente, la información de conexión wifi y el ID de puerta de enlace lora aparecerán en el terminal.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/wifi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

:::tip
Por favor toma nota, es útil para la configuración de Lora.

1. Dirección IP: 192.168.1.44
2. Puerto: 8000
3. EUI de puerta de enlace: 0xF09E9EFFFE20D02C

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/24.png" alt="pir" width={600} height="auto" /></p>

El mensaje del reenviador de paquetes lora que está en formato Json se puede verificar en el Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/27.png" alt="pir" width={400} height="auto" /></p>

### Configuración de LoRaWAN

Como la dirección IP y el puerto que anotamos, la interfaz web está disponible en: `http://ip_address:8000`, y ábrela en el navegador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/28.png" alt="pir" width={400} height="auto" /></p>

La interfaz web permite configurar los siguientes parámetros:

Parámetros del canal:

- Frecuencia
- Factor de dispersión
- Ancho de banda

Servidor de red LoRaWAN:

- Dirección
- Puerto

Dirección del servidor SNTP: para obtener la hora UTC

Hay 2 botones en la parte inferior del formulario de configuración:

`Configure`: cuando se presiona, los parámetros establecidos en el formulario HTML se escriben en la memoria flash (NVS).<br/>
`Reboot`: cuando se presiona, se activa un comando de reinicio, el LoRaHub se reiniciará y se aplicará la nueva configuración.

:::note
Ten en cuenta que la configuración escrita en la memoria flash solo se tiene en cuenta en el siguiente reinicio.
:::

Todo está configurado. Ahora podemos conectar el kit XIAO ESP32S3 & SX1262 Kit lora al servidor de red Lora como TTN(The things network) y Chirpstack.

- [Conectar a TTN](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- [Conectar a Chirpstack](https://wiki.seeedstudio.com/es/wio_sx1262_xiao_esp32s3_LNS_Chirpstack/)

## Personalizar y construir firmware

Si quieres restablecer la configuración, las siguientes instrucciones pueden ayudarte a construir el firmware por ti mismo bajo el entorno ESP-IDF.

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
git clone https://github.com/Seeed-Studio/one_channel_hub.git

cd ~/this_project_directory
```

**Paso 2**: Instalar el controlador requerido

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
cd lorahub
```

Prepara tu terminal de Linux/MAC para compilar con ESP-IDF desde la línea de comandos. Este paso se puede omitir en Windows ya que la herramienta instalada 'ESP-IDF x.x CMD' preparará el entorno automáticamente.

```
. ~/esp/esp-idf/export.sh
```

Configura el objetivo ESP32 para el cual construir.

```
idf.py set-target esp32s3
```

Personaliza la compilación si es necesario:

```
idf.py menuconfig
```

(1) Configurar **tipo de placa**:

`LoRaWAN 1-CH HUB Configuration` → `Hardware Configuration` → `Board type` → `Seeed XIAO ESP32S3 Gateway`

La configuración predeterminada del tipo de radio Lora es `sx1262`.

No olvides deshabilitar la pantalla OLED.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/21.png" alt="pir" width={800} height="auto" /></p>

(2) Configurar **tamaño de flash**:

`Serial flasher config` → `Flash size` → para XIAO ESP32S3 es `8MB`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/22.png" alt="pir" width={800} height="auto" /></p>

 (3) Configurar **aprovisionamiento Wi-Fi**:

- Configurar el aprovisionamiento Wi-Fi a través de **SenseCraft APP**:
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Disable WiFi Provisionning over BLE`

- Configurar el aprovisionamiento Wi-Fi a través de **ESP BLE prov**:
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Enable WiFi Provisionning over BLE`

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/100.png" alt="pir" width={800} height="auto" /></p>

Compilar el proyecto:

```
idf.py all
```

## Recursos

- [Firmware One Channel Hub para XIAO ESP32S3 & Kit Wio-SX1262 vía APP SenseCraft](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip)
- [Firmware One Channel Hub para XIAO ESP32S3 & Kit Wio-SX1262 vía ESP BLE prov](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip)
- [Repositorio Github](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
