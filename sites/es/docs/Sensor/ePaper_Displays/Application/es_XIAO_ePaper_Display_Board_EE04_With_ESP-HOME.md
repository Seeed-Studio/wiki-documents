---
description: Este artículo explica cómo utilizar las características de hardware de la XIAO ePaper Display Board EE04 en ESPHome e integrarla con Home Assistant.
title: XIAO ePaper Display Board(ESP32-S3) con ESPHome
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /EE04_with_esphome_advanced
sidebar_position: 2
last_update:
  date: 10/07/2025
  author: Jason
createdAt: '2023-08-20'
updatedAt: '2025-12-08'
url: https://wiki.seeedstudio.com/es/EE04_with_esphome_advanced/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# XIAO ePaper Display Board(ESP32-S3) - EE04 ePaper Display Funciona con ESPHome

## ¿Qué es ESPHome?

[ESPHome](https://esphome.io/) es un framework de firmware de código abierto que simplifica el proceso de crear firmware personalizado para microcontroladores populares habilitados para WiFi. Con ESPHome, puedes:

- Crear dispositivos domóticos inteligentes personalizados usando archivos de configuración YAML simples
- Integrar sin problemas con Home Assistant para una experiencia de hogar inteligente unificada
- Controlar y monitorear tus dispositivos a través de múltiples interfaces (web, API, MQTT)
- Automatizar tu hogar con potentes automatizaciones en el dispositivo
- Actualizar tus dispositivos de forma inalámbrica "Over The Air" (OTA) sin acceso físico

## Introducción

### Descripción del Hardware

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es la forma más fácil y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente por defecto. Esta placa se beneficia del próspero ecosistema de Home Assistant y será mejorada cada mes por código abierto.

También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- **[Introducción a Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)**
- **[Introducción a Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)**

:::tip instalar Home Assistant
Si no estás usando un producto de Seeed Studio, también puedes verificar y aprender cómo instalar Home Assistant para otros productos en el sitio web oficial de Home Assistant.

- **[Instalación de Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Paso 1. Instalar ESPHome

Ve a **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

Ingresa el término de búsqueda **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **INSTALL** y **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si no puedes encontrar ESPHome en la tienda de complementos, asegúrate de estar usando una instalación de Home Assistant que soporte complementos (como Home Assistant OS o instalaciones supervisadas). Para otros tipos de instalación (como Home Assistant Container), es posible que necesites ejecutar el ESPHome Device Builder independientemente usando Docker. Consulta la [documentación oficial de ESPHome](https://esphome.io/guides/getting_started_hassio) para más detalles.
:::

### Paso 2. Agregar un nuevo dispositivo

Ve a ESPHome y haz clic en **NEW DEVICE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

Dale a la XIAO ePaper Display Board(ESP32-S3) - EE04 un nombre que te guste y selecciona **ESP32-S3** para el tipo de chip, luego haz clic en **SKIP**.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome8.png" style={{width:400, height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Después de crear un nuevo dispositivo, haz clic en **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome6.png" style={{width:900, height:'auto'}}/></div><br />

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->


### Paso 3. Instalar firmware

Este es un ejemplo básico y mostrará "Hello World!" en la pantalla.

**El propósito principal es mostrarte diferentes formas de instalar firmware en el dispositivo.**

Puedes usar este ejemplo copiando el código de abajo y pegándolo después de la línea de código `captive_portal` en tu archivo YAML.

:::note
- Dado que la siguiente rutina requiere fuentes antes de descargar el firmware, por favor haz clic en este [enlace](https://wiki.seeedstudio.com/es/EE04_with_esphome_advanced/#drawing-truetype-fonts) para completar la configuración.
- `ssid:`,`password:` Aquí necesitas agregar el nombre de la red y la contraseña.
- El **Quadruple Color 2.13** y **Quadruple Color 2.9** usan bibliotecas externas, por lo que los nombres de `board` usados en ESPHome difieren.
:::
***Los siguientes son tipos de pantalla con conector de 24 pines:***

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Pulgadas Color Monocromático" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 Pulgadas Color Cuádruple">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.fill(YELLOW); 
      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```


</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Pulgadas Color Cuádruple">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# external_components:
#   - source:
#       type: local
#       path: components_epaper
#     components : [waveshare_epaper]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
      ESP_LOGD("epaper", "reflash......");
```

</TabItem>

<TabItem value="4.2 Inch" label="4.2 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"


# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.print(0, 150, id(font1), "Hello World!");
```

</TabItem> -->

<TabItem value="5.83 Inch" label="5.83 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```
</TabItem>

<TabItem value="7.5 Inch" label="7.5 Pulgadas Color Monocromático" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

</Tabs>

<br></br>

***Los siguientes son tipos de pantalla con conector de 50 pines:***

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Pulgadas spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto BLUE     = Color(0, 0,   255,   0);
      const auto GREEN     = Color(0, 255,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.fill(WHITE); 
      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
      it.print(0, 90, id(font1), GREEN, "Hello World in GREEN!");
      it.print(0, 120, id(font1), BLUE, "Hello World in BLUE!");
```

</TabItem>
</Tabs>


Haz clic en **INSTALL** para instalar el código en el dispositivo y verás la siguiente imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphome_ee042.png" style={{width:1000, height:'auto'}}/></div><br />

<Tabs>
<TabItem value='Instalar a través del navegador'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está lejos de ti, recomendamos usar este método. Puedes instalarlo con la computadora que tengas a mano.
:::

Primero, necesitas hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre este sitio web donde subiremos el firmware al panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Regresa a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecciona **Factory format**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa un cable USB para **conectar el panel ePaper a tu computadora** y haz clic en **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecciona usbmodemxxx (en Windows es COMxxx) y haz clic en connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:800, height:'auto'}}/></div>

Espera un momento y verás '¡Hola mundo!' en la pantalla ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalar a través del host'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está cerca, recomendamos usar este método ya que es más simple.
:::

Antes de instalar el código en el dispositivo, necesitas usar un cable USB para **conectar este dispositivo a tu Raspberry Pi o HA Green(Yellow) etc** que esté ejecutando Home Assistant.

Haz clic en las opciones siguiendo la imagen para instalar el código en el dispositivo.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Espera un momento y verás la retroalimentación como en la siguiente imagen. Significa que el código se está ejecutando exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalar a través de Wi-Fi'>

:::tip
Esta es la forma más simple, pero con la premisa de que al instalar el programa por primera vez, primero debes subir el programa al Panel ePaper usando el método de la izquierda. Después de eso, puedes subirlo vía wifi. También, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` configuradas correctamente con claves de encriptación válidas para que este método funcione.
:::

De esta manera, no necesitas conectar el panel ePaper a nada, solo asegúrate de que esté en línea.

Haz clic en la opción y luego el firmware se instalará en el panel ePaper automáticamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:800, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Básicos para dibujar en ESPHome

### Dibujando Gráficos Simples

Este código YAML de ejemplo configura la interfaz SPI y la Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 para un proyecto ESPHome. La sección `lambda` contiene comandos de dibujo que renderizan formas simples en la pantalla:

- Dos rectángulos (uno en la posición (10, 10) con tamaño 100x50, y otro en (150, 10) con tamaño 50x50)
- Un círculo en (250, 35) con un radio de 25
- Dos rectángulos rellenos (en (10, 80) y (150, 80))
- Un círculo relleno en (250, 105) con un radio de 25

Puedes usar este ejemplo copiando el código de abajo y pegándolo después de la línea de código `captive_portal` en tu archivo YAML.

<Tabs>
<TabItem value="1.54 Inch Monochrome" label="1.54 Pulgadas Color Monocromático" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 Pulgadas Color Cuádruple">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,YELLOW);
      it.rectangle(150, 10, 50, 50,YELLOW);
      it.circle(250, 35, 25,YELLOW);
      it.filled_rectangle(10, 80, 100, 50,YELLOW);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,YELLOW);
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Pulgadas Color Cuádruple">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,YELLOW);
      it.rectangle(150, 10, 50, 50,YELLOW);
      it.circle(250, 35, 25,YELLOW);
      it.filled_rectangle(10, 80, 100, 50,YELLOW);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,YELLOW);
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```
</TabItem>

<TabItem value="7.5 Inch-24Pin" label="7.5 Pulgadas Color Monocromático" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Pulgadas spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto BLUE     = Color(0, 0,   255,   0);
      const auto GREEN     = Color(0, 255,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,BLACK);
      it.rectangle(150, 10, 50, 50,RED);
      it.circle(250, 35, 25,BLUE);
      it.filled_rectangle(10, 80, 100, 50,GREEN);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,WHITE);
```

</TabItem>
</Tabs>

Cuando veas la retroalimentación como la siguiente imagen, significa que el código se está ejecutando exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee044.png" style={{width:1000, height:'auto'}}/></div><br />

Debido a limitaciones de espacio, no elaboraremos demasiado sobre los métodos de dibujo y principios de otros patrones, si es necesario, se recomienda al lector leer [ESPHome en esta parte de ejemplos detallados](https://esphome.io/components/display/).


### Dibujando fuentes TrueType

Este ejemplo demuestra cómo mostrar iconos personalizados en tu XIAO ePaper Display Board(ESP32-S3) - EE04 usando fuentes TrueType. Los iconos de Material Design proporcionan una amplia gama de símbolos escalables perfectos para pantallas ePaper.

#### Instalando Herramientas Requeridas

Paso 1. Primero, necesitamos instalar el complemento **Studio Code Server** para gestionar archivos. Navega a la tienda de complementos de Home Assistant, busca **Studio Code Server** y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphome00444.png" style={{width:1000, height:'auto'}}/></div>

Paso 2. Haz clic en **INSTALL** y espera a que se complete la instalación. Una vez instalado, haz clic en **START** para lanzar el editor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### Configurando Fuentes de Iconos

Paso 3. Crea una nueva carpeta llamada **fonts** en tu directorio de configuración de ESPHome. Esta carpeta almacenará los archivos de fuentes TrueType necesarios para mostrar iconos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphme_ee041.png" style={{width:800, height:'auto'}}/></div>

Paso 4. Descarga el archivo de fuente de Material Design Icons haciendo clic en el botón de abajo y extrae el contenido.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Descargar Fuente de Material Design Icons</button></p>
</a>
</div>

Paso 5. Sube el archivo de fuente descargado (`materialdesignicons-webfont.ttf`) a la carpeta fonts que creaste anteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### Configurando ESPHome para Iconos

Paso 6. Agrega el siguiente código a tu archivo de configuración de ESPHome después de la sección `captive_portal`. Este código define dos tamaños de fuente para iconos y configura la pantalla para mostrar iconos del clima.

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Pulgadas Color Monocromático" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 Pulgadas Color Cuádruple">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>


<TabItem value="2.13 Inch" label="2.13 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Pulgadas Color Cuádruple">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# external_components:
#   - source:
#       type: local
#       path: components_epaper
#     components : [waveshare_epaper]


captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```
</TabItem>

<TabItem value="24 Pin" label="7.5 Pulgadas Color Monocromático" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Pulgadas spectra™ 6" default>

```yaml

esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");

```

</TabItem>
</Tabs>

:::note

1. La sección `glyphs` define qué iconos cargar desde el archivo de fuente. Cargar solo los iconos que necesitas ahorra memoria en tu dispositivo.

2. El programa puede tardar de 2 a 3 minutos desde la finalización de la grabación hasta la visualización final.

:::

Paso 7. Guarda tu configuración y súbela a tu XIAO ePaper Display Board(ESP32-S3) - EE04. Cuando veas una respuesta como la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee045.png" style={{width:1000, height:'auto'}}/></div><br />

#### Personalización con Diferentes Iconos

La biblioteca de Material Design Icons contiene miles de iconos que puedes usar en tus proyectos. Aquí te mostramos cómo encontrar y usar diferentes iconos:

Paso 1. Visita el sitio web de Material Design Icons haciendo clic en el botón de abajo.

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Explorar Material Design Icons</button></p>
</a>
</div>

Paso 2. Busca un icono que quieras usar en tu proyecto. Puedes navegar por categoría o usar la función de búsqueda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

Paso 3. Cuando encuentres un icono que te guste, haz clic en él para ver sus detalles. Busca el valor Unicode, que estará en el formato `F0595`.

Paso 4. Agrega el valor Unicode a tu configuración de ESPHome:

- Agregándolo a la lista `glyphs` en tu configuración de fuente
- Actualizando el código de visualización para usar el nuevo icono

Por ejemplo, para usar un nuevo icono con Unicode `F0123`:

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

Y en el lambda de visualización:

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

Paso 5. Guarda tu configuración actualizada y súbela a tu dispositivo para ver el nuevo icono.

:::tip
Para paneles meteorológicos, considera usar iconos como `F0590` (soleado), `F0591` (parcialmente nublado), `F0593` (lluvioso), y `F059E` (ventoso).
:::

Al combinar estos iconos con los datos meteorológicos de Home Assistant que configuramos anteriormente, puedes crear una visualización meteorológica dinámica que muestre las condiciones actuales usando iconos apropiados.

### Visualización de Imágenes Personalizadas

Este ejemplo demuestra cómo mostrar imágenes personalizadas en tu XIAO ePaper Display Board(ESP32-S3) - EE04. Puedes usar esta función para mostrar logotipos, iconos o cualquier gráfico que mejore tu experiencia de panel.

#### Preparación

Paso 1. Asegúrate de tener el complemento **Studio Code Server** instalado en Home Assistant. Si aún no lo has instalado, sigue las instrucciones del ejemplo anterior.

Paso 2. Crea una nueva carpeta llamada **image** en tu directorio de configuración de ESPHome. Esta carpeta almacenará los archivos de imagen que quieras mostrar.

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### Agregando Imágenes

Paso 3. Descarga una imagen de muestra para probar la funcionalidad. Puedes usar el icono WiFi proporcionado a continuación o usar tu propia imagen.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Descargar Imagen WiFi de Muestra</button></p>
</a>
</div>

Paso 4. Sube la imagen descargada a la carpeta **image** que creaste anteriormente usando el administrador de archivos de Studio Code Server.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
Para mejores resultados en pantallas ePaper, usa imágenes de alto contraste con áreas claras en blanco y negro. Se admiten tanto formatos JPG como PNG.
:::

#### Configurando ESPHome para Visualización de Imágenes

Paso 5. Agrega el siguiente código a tu archivo de configuración de ESPHome después de la sección `captive_portal`. Este código define el recurso de imagen y configura la pantalla para mostrarla.

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Pulgadas Color Monocromático" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 Pulgadas Color Cuádruple">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Pulgadas Color Cuádruple">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83 Pulgadas Color Monocromático">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```
</TabItem>

<TabItem value="7.5 Inch" label="7.5 Pulgadas Color Monocromático" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Pulgadas spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```
</TabItem>
</Tabs>

Paso 6. Guarda tu configuración y súbela a tu XIAO ePaper Display Board(ESP32-S3) - EE04. Cuando se complete la actualización, tu pantalla ePaper mostrará la imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee046.png" style={{width:1000, height:'auto'}}/></div><br />


#### Técnicas Avanzadas de Imágenes

Puedes mejorar la visualización de tus imágenes con estas técnicas adicionales:

**Posicionamiento de Imágenes**

Para posicionar tu imagen en coordenadas específicas en la pantalla:

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**Combinando Imágenes con Texto**

Puedes mostrar tanto imágenes como texto en la misma pantalla:

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**Usando Múltiples Imágenes**

Para mostrar múltiples imágenes en la misma pantalla, define cada imagen en tu configuración:

```yaml
image:
  - file: /config/esphome/image/wifi.jpg
    id: wifiImage
    type: BINARY
    resize: 200x200

  - file: /config/esphome/image/temperature.png
    id: tempImage
    type: BINARY
    resize: 200x200

# In the display lambda:
lambda: |-
  it.image(50, 50, id(wifiImage));
  it.image(300, 50, id(tempImage));
```

:::caution
Recuerda que las pantallas ePaper tienen tasas de actualización limitadas. La configuración `update_interval: 300s` significa que tu pantalla se actualizará solo cada 5 minutos. Ajusta este valor según tus necesidades, pero ten en cuenta que las actualizaciones frecuentes pueden reducir la vida útil de las pantallas ePaper.
:::

Al combinar imágenes con texto y otros elementos de visualización cubiertos en ejemplos anteriores, puedes crear paneles informativos ricos en tu XIAO ePaper Display Board(ESP32-S3) - EE04.

## Referencia y Recursos

- [ESPHome](https://esphome.io/)
- [Ejemplos detallados de ESPHome](https://esphome.io/components/display/)
## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
