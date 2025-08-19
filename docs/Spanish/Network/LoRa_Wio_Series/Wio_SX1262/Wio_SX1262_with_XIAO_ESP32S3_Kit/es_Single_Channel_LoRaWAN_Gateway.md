---
description: Single Channel LoraWAN Gateway based on XIAO ESP32S3 & Wio-SX1262 Kit
title: Gateway LoRaWAN de Canal Único
keywords: ["XIAO ESP32S3", "LoRa", "Wio SX1262", "Single Channel Gateway"]
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /es/wio_sx1262_xiao_esp32s3_for_single_channel_gateway
sidebar_position: 3
last_update:
  date: 05/21/2025
  author: Guillermo
---

# **Configurar el Kit XIAO ESP32S3 & Wio-SX1262 como Gateway LoRaWAN de Canal Único**

Los gateways de canal único (también llamados One-Channel Hub) son herramientas de bajo costo que permiten a los usuarios comenzar a explorar el mundo de LoRa.  
Estos gateways pueden recibir paquetes LoRa en un factor de dispersión y canal específicos, y facilitan el intercambio de estos paquetes con la red.  
Debido a su bajo costo, muchos usuarios han optado por construir sus propios gateways de canal único para experimentar con la tecnología LoRa.

El XIAO ESP32S3 como MCU principal junto con el kit de radio LoRa Wio-SX1262 pueden configurarse para funcionar como un gateway de canal único.  
Este kit ofrece una solución práctica para quienes estén interesados en adentrarse en la tecnología LoRa y establecer conexiones con un LNS (servidor de red LoRa).

Este es el proyecto en GitHub: [One Channel Hub](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config).

## Flashear el Firmware

El firmware está preparado para su instalación y viene pre-flasheado en el Kit XIAO ESP32S3 & Wio-SX1262 con carcasa 3D.  
Si deseas flashear el Kit XIAO ESP32S3 & Wio-SX1262 como Gateway LoRaWAN de Canal Único, simplemente descárgalo desde la [biblioteca binaria](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config/bin).

:::tip
El Kit XIAO ESP32S3 & Wio-SX1262 con carcasa 3D viene pre-flasheado como un gateway LoRaWAN de canal único.  
Por favor, salta a la siguiente sección para la [configuración](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#configuration-via-sensecraft-app).
:::

:::note
Este firmware está construido con:
- Seleccionar la placa Seeed XIAO ESP32S3 Gateway
- Modificar el tamaño de la Flash a 8 MB
- Habilitar obtener configuración desde la flash
- Deshabilitar Configuración por Wi-Fi
- Deshabilitar pantalla OLED

Uso:
- Habilitar/deshabilitar la configuración mediante el botón de usuario
- El nombre de difusión por Bluetooth es "GW-XIAO-ESP32S3"
- Conéctate a través de la app SenseCraft y configura Wi-Fi/LoRa
:::


Si no utilizas el entorno completo de ESP-IDF, también es posible flashear los archivos binarios proporcionados usando la utilidad **esptool**.

Haz clic para descargar el firmware:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬ </font></span></strong></a>
</div>

**Paso 1**: Descarga **Esptool**. Para más información, consulta la [documentación de Esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/).

```python
$ pip install esptool
```

**Paso 2**: Conecta el **XIAO ESP32S3** a tu PC.

**Paso 3**: Navega hasta el archivo descargado y abre una terminal o línea de comandos, luego ejecuta los comandos de **esptool.py**.

- Para Linux/macOS

```linux
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

- Para Windows

```linux
py -m esptool --chip esp32s3 -p COM14 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

Reemplaza `port` con el nombre del puerto serial que estés utilizando.  
Si la conexión falla, consulta la sección de [Solución de problemas](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting).

### Flashear con ESP-IDF

Identifica el dispositivo serial asociado al One-Channel Hub que se va a flashear.  
En **Linux** y **macOS**, puedes verificar el puerto serial con:

```
ls /dev/cu*
```

luego flashea usando `idf.py`, remplaza **port**

```
idf.py -p port flash
```

Si se devuelve un error de permisos, verifica que el usuario actual pertenezca al grupo dialout. Si no es así, realiza lo siguiente, reinicia la máquina con Linux y vuelve a intentarlo:

```
sudo usermod -a -G dialout $USERNAME
```

En un entorno Windows, supongamos que el dispositivo está montado como COM14, el comando anterior se vería así:

```
idf.py -p COM14 flash
```

Lanza la consola de monitoreo para ver los registros (opcional).

```
idf.py -p port monitor
```

### Flashear con esptool

Si no utilizas el entorno completo de ESP-IDF, simplemente puedes descargar los archivos binarios proporcionados siguiendo [la primera sección](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#flash-firmware). 

### Flashear con esptool-JS

Se recomienda usar la herramienta [esptool en línea](https://espressif.github.io/esptool-js/) para flashear. 

**Paso 1**: Configura la velocidad de baudios en 115200 y conéctate al puerto correcto.

**Paso 2**: Elige los archivos .bin y completa con la dirección de memoria correspondiente:

|**Flash Address**|**File**|
|----|----|
|0x0|seeed_xiao_esp32s3_devkit_bootloader.bin|
|0x10000|seeed_xiao_esp32s3_devkit_lorahub.bin|
|0x8000|seeed_xiao_esp32s3_devkit_partition-table.bin|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/70.png" alt="pir" width={600} height="auto" /></p>


## Configuración mediante la App SenseCraft

### Configuración de WiFi y LoRaWAN

**Paso 1**: Descarga la aplicación `SenseCraft`: [Enlace de descarga](https://sensecap-mate-download.seeed.cn/)

**Paso 2**: Conecta el Kit XIAO ESP32S3 & Wio-SX1262 a la corriente.

**Paso 3**: Sigue las instrucciones en la aplicación para configurar el WiFi y LoRaWAN.

- Regístrate e inicia sesión en la aplicación SenseCraft.
- Navega a `Usuario` -> `Configuración del dispositivo por Bluetooth`.
- Selecciona `XIAO ESP32S3 & Wio-SX1262 Kit`.
- Haz clic en `El dispositivo está listo para la configuración`.
- Presiona el botón del kit una vez. Cuando el LED comience a parpadear, el dispositivo entrará en modo de emparejamiento por Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/APPOperation.gif" alt="pir" width={300} height="auto" /></p>

**Paso 4**: Registra la pasarela LoRaWAN en The Things Network (TTN).

- Crea una cuenta e inicia sesión en: https://eu1.cloud.thethings.network/
- Registra la pasarela (gateway).
- Copia el `gateway EUI` correcto en TTN, y completa también el `plan de frecuencia` y el `ID de la pasarela (gateway ID)` correctamente.
- Reinicia el módulo de la pasarela y espera aproximadamente 2 minutos. Luego podrás comprobar el estado de conexión de la pasarela.

## Configuración mediante ESP BLE prov

:::note
Si deseas configurar el Wi-Fi usando **ESP BLE prov** y configurar LoRaWAN mediante un **cliente web**, necesitas flashear [este firmware](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip). Ten en cuenta que **no es el mismo firmware** que el utilizado para la configuración mediante la aplicación SenseCraft.  
Además, puedes habilitar la opción `Habilitar provisión de Wi-Fi (Enable Wi-Fi provisioning)` siguiendo la guía [Personalizar y compilar firmware](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#customize-and-build-firmware).
:::

### Configuración de Wi-Fi

**Paso 1**: Descarga la aplicación `ESP BLE prov`:

* [Para Android](https://play.google.com/store/apps/details?id=com.espressif.provble)
* [Para IOS](https://apps.apple.com/in/app/esp-ble-provisioning/id1473590141)


Presiona el botón `RST` en la placa, y luego presiona el botón `BOOT`, el LED se encenderá. 


**Paso 2**: Conecta el XIAO a tu PC y abre una herramienta de puerto serial, como PuTTY, COMTOOL u otra herramienta de tu preferencia.

**Paso 3**: Abre la comunicación por terminal

- Para `COMTOOL`:
  
(1). Selecciona el puerto serial correcto y establece la velocidad en **115200 baudios**

(2). Ve a la pestaña "Terminal" y abre la comunicación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/23.png" alt="pir" width={500} height="auto" /></p>

- Para `PuTTY`:

(1). Selecciona la línea serial correcta y configura la velocidad en **115200 baudios**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/25.png" alt="pir" width={500} height="auto" /></p>

(2). Ve a "Terminal" y haz clic en "Implicit CR in every LF" (CR implícito en cada LF)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/26.png" alt="pir" width={500} height="auto" /></p>


**Paso 4**: Haz clic en 'Provision Device' en la app ESP BLE prov

Una vez conectado con éxito, la información de conexión Wi-Fi y el ID de la puerta de enlace LoRa se mostrarán en el terminal.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/wifi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

:::tip
Toma nota, esta información es útil para la configuración de LoRa:
1. Dirección IP: 192.168.1.44  
2. Puerto: 8000  
3. Gateway EUI: 0xF09E9EFFFE20D02C  
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/24.png" alt="pir" width={600} height="auto" /></p>

El mensaje del reenviador de paquetes LoRa, en formato JSON, se puede verificar en el terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/27.png" alt="pir" width={400} height="auto" /></p>

### Configuración de LoRaWAN

Como anotamos anteriormente la dirección IP y el puerto, la interfaz web está disponible en: `http://ip_address:8000`. Ábrela en tu navegador. 


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/28.png" alt="pir" width={400} height="auto" /></p>

La interfaz web permite configurar los siguientes parámetros:

**Parámetros de canal:**
- Frecuencia
- Spreading Factor (Factor de propagación)
- Ancho de banda

**Servidor de red LoRaWAN:**
- Dirección
- Puerto

**Dirección del servidor SNTP:** para obtener la hora UTC

Hay 2 botones en la parte inferior del formulario de configuración:

- `Configure`: al presionar este botón, los parámetros establecidos en el formulario HTML se escriben en la memoria flash (NVS).  
- `Reboot`: al presionar este botón, se activa un comando de reinicio; el LoRaHub se reiniciará y se aplicará la nueva configuración.

:::note
Ten en cuenta que la configuración escrita en la memoria flash solo se aplica después del próximo reinicio.
:::


Todo está listo. Ahora podemos conectar el kit XIAO ESP32S3 & SX1262 LoRa a un servidor de red LoRa como TTN (The Things Network) y Chirpstack.

* [Conectar a TTN](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_LNS_TTN/)
* [Conectar a Chirpstack](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_LNS_Chirpstack/)

## Personalizar y compilar el firmware

Si quieres restablecer la configuración, las siguientes instrucciones te ayudarán a compilar el firmware por ti mismo en el entorno ESP-IDF.

### Configurar el entorno

Este proyecto está basado en el entorno de desarrollo ESP-IDF de Espressif, consulta esta [guía](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation) para configurar el entorno.

#### Obtener ESP-IDF

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

**Paso 1**: Clona el repositorio localmente y navega hasta la ruta del proyecto.

```linux
git clone https://github.com/Seeed-Studio/one_channel_hub.git

cd ~/this_project_directory
```

**Paso 2**: Instala los controladores requeridos

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

### Compilar el firmware

**Paso 1**: Entra al directorio lorahub.
```
cd lorahub
```

Prepara tu terminal Linux/MAC para compilar con ESP-IDF desde la línea de comandos. Este paso puede omitirse en Windows, ya que la herramienta instalada 'ESP-IDF x.x CMD' prepara el entorno automáticamente.

```
. ~/esp/esp-idf/export.sh
```

Configura el target ESP32 para la compilación.

```
idf.py set-target esp32s3
```

Personaliza la compilación si es necesario:

```
idf.py menuconfig
```

(1) Configura el **tipo de placa**:

`LoRaWAN 1-CH HUB Configuration` -> `Hardware Configuration` -> `Board type` -> `Seeed XIAO ESP32S3 Gateway`

El valor por defecto para el tipo de radio LoRa es `sx1262`.

No olvides deshabilitar la pantalla OLED.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/21.png" alt="pir" width={800} height="auto" /></p>

(2) Configura el **tamaño de la memoria flash**:

`Serial flasher config` -> `Flash size` -> para XIAO ESP32S3 es `8MB`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/22.png" alt="pir" width={800} height="auto" /></p>

(3) Configura el **Provisionamiento Wi-Fi**:

Para usar Provisionamiento Wi-Fi vía **SenseCraft APP**:
 `LoRaWAN 1-CH HUB Configuration` -> `WiFi Configuration` -> `Disable WiFi Provisionning over BLE` 

- Para usar Provisionamiento Wi-Fi vía **ESP BLE prov**:
 `LoRaWAN 1-CH HUB Configuration` -> `WiFi Configuration` -> `Enable WiFi Provisionning over BLE` 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/100.png" alt="pir" width={800} height="auto" /></p>

Finalmente, compila el proyecto:

```
idf.py all
```

## Recursos

* [Firmware One Channel Hub para XIAO ESP32S3 & Wio-SX1262 Kit vía SenseCraft APP](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip)
* [Firmware One Channel Hub para XIAO ESP32S3 & Wio-SX1262 Kit vía ESP BLE prov](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip)
* [Repositorio Github](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes canales de soporte y asegurar que tu experiencia con nuestros productos sea lo más satisfactoria posible. Ofrecemos múltiples vías de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>





