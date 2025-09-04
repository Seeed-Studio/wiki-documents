---
description: Introducción de cómo el Sensor mmWave se conecta a HA.
title: mmWave para XIAO a Home Assistant vía Bluetooth o Wifi
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/mmwave_for_xiao_to_ha_bt
last_update:
  date: 09/14/2024
  author: Allen, Djair
---

# mmWave para XIAO a Home Assistant vía Bluetooth

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

## Introducción

El Sensor mmWave de 24GHz para XIAO - Presencia Estática Humana es una placa de expansión para la serie Seeed Studio XIAO. Es un sensor mmwave de alta sensibilidad con antena integrada que se basa en el principio FMCW. Combinado con el procesamiento de señales del sensor y algoritmos precisos de detección del cuerpo humano, puede identificar cuerpos humanos en estados de movimiento y estacionarios.

Este capítulo introduce principalmente cómo el Sensor mmWave de 24GHz para XIAO se conecta al HA vía Bluetooth. Para características funcionales detalladas del Sensor mmWave de 24GHz para XIAO, puedes consultar [aquí](https://wiki.seeedstudio.com/es/mmwave_for_xiao/).

:::caution
Todos los contenidos de esta Wiki se aplican únicamente al mmWave de 24GHz para XIAO y pueden no ser utilizados en otros sensores de ondas milimétricas.
:::

## Comenzando

### Preparaciones de Hardware

En este artículo, usaremos mmWave para XIAO en conjunto con el XIAO ESP32C3 para conectarlo a Home Assistant por motivos de estética y facilidad de cableado. Si quieres seguir este tutorial al pie de la letra, entonces necesitarás preparar los siguientes módulos.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>mmWave de 24GHz para XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

El sensor está diseñado para compatibilidad con XIAO, por lo que en general, si quieres usar este sensor, necesitas preparar un XIAO e instalar la fila de pines hembra para el sensor. Al conectar al XIAO, por favor presta especial atención a la dirección de instalación del sensor, por favor no lo conectes al revés, de lo contrario es probable que quemes el sensor o el XIAO.

:::caution
La dirección correcta a seguir es que la antena del sensor debe mirar hacia afuera.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

Después de confirmar que la dirección de conexión es correcta, puedes conectar el cable tipo USB-C a la computadora o fuente de alimentación de 3.3V, y el sensor comenzará a funcionar.

:::tip
Si no tienes un XIAO a mano en este momento, entonces tienes la opción de alimentar el mmwave para XIAO por separado conectando TTL a su pin de 3.3V y pin GND, lo cual también se puede hacer usando el contenido de este tutorial. Para este tutorial, no hay necesidad de usar los pines RX y TX.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/10.jpg" style={{width:300, height:'auto'}}/></div>
:::


### Preparaciones de Software

Si aún no has instalado HomeAssistant, puedes consultar el tutorial oficial de HomeAssistant haciendo clic [aquí](https://www.home-assistant.io/installation/).

## Procedimientos

### Paso 1. Descubrir Dispositivo

En Home Assistant, haz clic en **configuración** en la esquina inferior izquierda, selecciona **Dispositivos y Servicios** en el centro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png" style={{width:1000, height:'auto'}}/></div>

En la zona Descubiertos, habrá un ícono de sensor, haz clic en **configurar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png" style={{width:1000, height:'auto'}}/></div>

Aparecerá una ventana emergente, haz clic en **enviar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png" style={{width:1000, height:'auto'}}/></div>

Verás una ventana emergente de configuración exitosa, haz clic en **finalizar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Configurar Dispositivo

En la zona configurada, haz clic en **ld2410_ble**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png" style={{width:1000, height:'auto'}}/></div>

Una vez que estés en la página de configuración del sensor, haz clic en **1 dispositivo**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png" style={{width:1000, height:'auto'}}/></div>

Agrega el valor de retorno del sensor al panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png" style={{width:1000, height:'auto'}}/></div>

Selecciona **AGREGAR AL PANEL DE CONTROL** en la ventana emergente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, haz clic en **resumen** en la esquina superior izquierda, verás los datos del sensor mmwave-for-xiao mostrados exitosamente en el panel de control. Hasta aquí el sensor mmwave para xiao se ha conectado exitosamente al Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

¡Ahora puedes ser creativo con tu automatización!

# mmWave para XIAO a Home Assistant vía Wifi usando ESPHome
El siguiente archivo yaml conecta un Seeed XIAO ESP32S3 Sense con módulo Radar a Home Assistant, usando el firmware ESPHome:

```
# Configuration for ESPHome
esphome:
  # Name of the ESP32-S3 device
  name: "seeed-xiao-esp32s3-cam"
  
  # PlatformIO build options
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# Configuration for ESP32 board
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API - use your api and password
api:
  encryption:
    key: ""

ota:
  - platform: esphome
    password: ""

# Wi-Fi configuration - fill with your data
wifi:
  ssid: ""
  password: ""

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: ""

# Captive portal configuration
captive_portal:

# Configuration for the ESP32 Camera
esp32_camera:
  id: espcam
  name: Xiao Cam
  external_clock:
    pin: GPIO10
    frequency: 20MHz
  i2c_pins:
    sda: GPIO40
    scl: GPIO39
  data_pins: [GPIO15, GPIO17, GPIO18, GPIO16, GPIO14, GPIO12, GPIO11, GPIO48]
  vsync_pin: GPIO38
  href_pin: GPIO47
  pixel_clock_pin: GPIO13
  resolution: 800x600
  
# Configuration for the ESP32 Camera Web Server
esp32_camera_web_server:
  - port: 8080
    mode: stream
  - port: 8081
    mode: snapshot

# Configuration for the 24GHz mmwave XIAO Radar
ld2410:
  id: ld2410_radar
  
uart:
  tx_pin: GPIO4
  rx_pin: GPIO3
  baud_rate: 256000
  parity: NONE
  stop_bits: 1

number:
  - platform: ld2410
    timeout:
      name: Radar Timeout
    max_move_distance_gate:
      name: Radar Max Move Distance
    max_still_distance_gate:
      name: Radar Max Still Distance
    g0:
      move_threshold:
        name: g0 move threshold
      still_threshold:
        name: g0 still threshold
    g1:
      move_threshold:
        name: g1 move threshold
      still_threshold:
        name: g1 still threshold
    g2:
      move_threshold:
        name: g2 move threshold
      still_threshold:
        name: g2 still threshold
    g3:
      move_threshold:
        name: g3 move threshold
      still_threshold:
        name: g3 still threshold
    g4:
      move_threshold:
        name: g4 move threshold
      still_threshold:
        name: g4 still threshold
    g5:
      move_threshold:
        name: g5 move threshold
      still_threshold:
        name: g5 still threshold
    g6:
      move_threshold:
        name: g6 move threshold
      still_threshold:
        name: g6 still threshold
    g7:
      move_threshold:
        name: g7 move threshold
      still_threshold:
        name: g7 still threshold
    g8:
      move_threshold:
        name: g8 move threshold
      still_threshold:
        name: g8 still threshold

binary_sensor:
  - platform: ld2410
    has_target:
      name: Radar Target
      id: radar_has_target
    has_moving_target:
      name: Radar Moving Target
    has_still_target:
      name: Radar Still Target

sensor:
  - platform: ld2410
    moving_distance:
      name: Radar Moving Distance
      id: moving_distance
    still_distance:
      name: Radar Still Distance
      id: still_distance
    moving_energy:
      name: Radar Move Energy
    still_energy:
      name: Radar Still Energy
    detection_distance:
      name: Radar Detection Distance
      id: radar_detection_distance
    g0:
      move_energy:
        name: g0 move energy
      still_energy:
        name: g0 still energy
    g1:
      move_energy:
        name: g1 move energy
      still_energy:
        name: g1 still energy
    g2:
      move_energy:
        name: g2 move energy
      still_energy:
        name: g2 still energy
    g3:
      move_energy:
        name: g3 move energy
      still_energy:
        name: g3 still energy
    g4:
      move_energy:
        name: g4 move energy
      still_energy:
        name: g4 still energy
    g5:
      move_energy:
        name: g5 move energy
      still_energy:
        name: g5 still energy
    g6:
      move_energy:
        name: g6 move energy
      still_energy:
        name: g6 still energy
    g7:
      move_energy:
        name: g7 move energy
      still_energy:
        name: g7 still energy
    g8:
      move_energy:
        name: g8 move energy
      still_energy:
        name: g8 still energy
```

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
