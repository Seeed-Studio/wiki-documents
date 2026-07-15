---
title: Seeed Studio XIAO ESP32-C5 Conectar a HomeAssitant
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_homeassistant
last_update:
  date: 12/17/2025
  author: Zeller
  sidebar_position: 0
createdAt: '2025-12-17'
updatedAt: '2025-12-26'
url: https://wiki.seeedstudio.com/es/xiao_esp32c5_homeassistant/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conectando XIAO ESP32-C5 a Home Assistant

Este tutorial wiki demostrará cómo conectar el Seeed Studio XIAO ESP32-C5 a Home Assistant, así como cómo controlar dispositivos o transmitir datos después de conectar módulos Grove al XIAO ESP32-C5. ¡Así que comencemos!

## Introducción a [Home Assistant](https://www.home-assistant.io/)

Home Assistant es una potente plataforma de automatización del hogar de código abierto que te permite controlar y monitorear tus dispositivos domésticos inteligentes desde una interfaz única y unificada. Actúa como el centro central de tu hogar inteligente, permitiéndote automatizar rutinas, monitorear sensores y crear un espacio de vida más inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Aprender Más 🖱️</font></span></strong></a>
</div>

## Integración con [ESPHome](https://esphome.io/)

ESPHome es una herramienta de creación de firmware de código abierto diseñada específicamente para dispositivos ESP8266 / ESP32. Te permite crear firmware personalizado usando archivos de configuración YAML simples, que luego pueden ser flasheados a tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Aprender Más 🖱️</font></span></strong></a>
</div>

## Método 1: Usando ESPHome

Este ejemplo se conectará a Home Assistant a través de ESPHome.

### Preparación del Hardware

Necesitas preparar los elementos listados en la tabla.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base para XIAO</th>
      <th>Grove - LED Rojo</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ver Más 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Instalar el Firmware

Si no has configurado Home Assistant, puedes hacer clic en este enlace y seguir el tutorial oficial de Home Assistant para completar la configuración.[Instalación de Home Assistant](https://www.home-assistant.io/installation/)

**Paso 1.** Instalar ESPhome<br/>

Si ya has instalado ESPHome, puedes omitir este paso.

- Ve a **Settings** -> **Add-ons**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- Iniciar ESPhome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Asegúrate de que la versión de ESPHome que has instalado sea **mayor o igual a 25.11.5**; de lo contrario, puede que no soporte el XIAO ESP32-C5.
:::

**Paso 2.** Agregar nuevo dispositivo

Ve a ESPHome, y haz clic en el botón **Add New Device** en la parte inferior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Agrega un nuevo dispositivo y nómbralo **XIAO ESP32-C5**.
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**Paso 3.** Instalar firmware

<details>
<summary>Configuración de Archivo YAML de Referencia</summary>

:::tip
Necesitas modificar los parámetros para que coincidan con los de tu dispositivo, como la clave API, SSID, contraseña, etc. Además, el XIAO ESP32-C5 soporta WiFi de banda dual (2.4 GHz y 5 GHz), lo que significa que puedes conectarlo al router de 5 GHz en tu hogar.
:::

```yaml
esphome:
  name: xiao-esp32-c5
  friendly_name: XIAO ESP32-C5

esp32:
  board: esp32-c5-devkitc-1
  variant: esp32c5
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: 

ota:
  - platform: esphome
    password: 

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32-C5 Fallback Hotspot"
    password: 

captive_portal:
  # Example configuration entry
output:
  - platform: gpio
    pin: GPIO1
    id: led_gpio_output
    inverted: false

switch:
  - platform: output
    name: "LED Switch"
    output: led_gpio_output
    id: dev_board_led
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** para instalar el código en el dispositivo y verás la siguiente imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='Instalar a través del navegador'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está lejos de ti, recomendamos usar este método. Puedes instalarlo con la computadora que tengas a mano.
:::

Primero, necesitas hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre este sitio web donde subiremos el firmware al XIAO ESP32-C5.<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
Regresa a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>
<br/>
Selecciona formato Factory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa un cable USB para **conectar el dispositivo a tu computadora** y haz clic en **CONNECT**.<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>
<br/>
Selecciona usbmodemxxx(Windows es COMxxx) y haz clic en connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalar a través del host'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está cerca, recomendamos usar este método ya que es más simple.
:::

Antes de instalar el código en el dispositivo, necesitas usar un cable USB para **conectar este dispositivo a tu Raspberry Pi o HA Green(Yellow) etc** que esté ejecutando Home Assistant.

Haz clic en las opciones siguiendo la imagen para instalar el código en el dispositivo.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'120%', height:'auto'}}/></div>
</div>

Espera un momento y verás la retroalimentación como en la siguiente imagen. Significa que el código se está ejecutando exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalar a través de Wi-Fi'>

:::tip
Esta es la forma más simple, pero con la premisa de que al instalar el programa por primera vez, primero debes subir el programa al Panel ePaper usando el método de la izquierda. Después de eso, puedes subirlo vía wifi. También, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` configuradas correctamente con claves de cifrado válidas para que este método funcione.
:::

De esta manera, no necesitas conectar el XIAO ESP32-C5 a nada, solo asegúrate de que esté en línea.

Haz clic en la opción y luego el firmware se instalará automáticamente en el panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás la retroalimentación como en la siguiente imagen. Si falla, puede ser debido a una señal débil. Por favor mueve el dispositivo más cerca de tu router.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**Paso 4.** Agregar Dispositivo

- Navega a **Settings** → **Devices & services**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>

- ESPHome Device -> Add.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_6.png" style={{width:800, height:'auto'}}/></div>

- Si has optado por agregar una clave secreta, necesitas ingresarla, la cual se puede encontrar en el archivo YAML que creaste.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_7.png" style={{width:800, height:'auto'}}/></div>

- La siguiente pantalla se mostrará después de una adición exitosa.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_8.png" style={{width:800, height:'auto'}}/></div>

### Mostrar en el Panel de Control

**Paso 1.**  Abre Overview -> Haz clic en Edit en la esquina superior derecha

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_9.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Crea una sección y nómbrala **LED Control** -> Agrega la Tarjeta

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_10.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** Agregar por entidad -> Buscar **XIAO ESP32-C5** -> Continuar

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_11.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Selecciona **Add to dashboard** en la ventana emergente -> Haz clic en **Done** en la esquina superior derecha para completar la adición.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_12.png" style={{width:800, height:'auto'}}/></div>

- Los efectos son los siguientes:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_13.png" style={{width:800, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_effect_1.gif" style={{width:800, height:'auto'}}/></div>

## Método 2: [Seeed Home Assistant Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery)

- **Seeed HA Discovery** es una solución completa para conectar fácilmente dispositivos ESP32/nRF52840 a Home Assistant, proporcionada por [Seeed Studio](https://www.seeedstudio.com/).<br/>
- Con solo unas pocas líneas de código en Arduino IDE o PlatformIO para tus placas de desarrollo de la serie XIAO, puedes conectarte a Home Assistant vía WiFi o BLE.<br/>
- Aquí usaremos un ejemplo de lectura de un sensor de temperatura y humedad de invernadero para mostrarte cómo usar Seeed Home Assistant Discovery para conectar el XIAO ESP32-C5 a Home Assistant.

### Preparación del Hardware

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base para XIAO</th>
      <th>Grove - Sensor de Temperatura y Humedad (DHT11)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ver Más 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Instalar HACS Instagram

Antes de agregar la integración **Seeed Home Assistant Discovery**, necesitas instalar **HACS** primero.

Pasos de Instalación:

1. Settings -> Devices & services -> Add integration -> Buscar **HACS**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_1.png" style={{width:800, height:'auto'}}/></div>

2. Selecciona todas las opciones -> Submit

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_2.png" style={{width:800, height:'auto'}}/></div>

3. Haz clic en el hipervínculo y copia el código de activación dentro de él.

4. Ingresa el código de activación mencionado anteriormente

5. Regresa a HomeAssistant -> Developer tools -> Reboot system

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_3.png" style={{width:800, height:'auto'}}/></div>

6. La barra de navegación izquierda muestra HACS

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_4.png" style={{width:800, height:'auto'}}/></div>

### Instalar Integración

- Instalación con Un Clic vía HACS (Recomendado)

1. Abre HACS -> Integrations:

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_1.png" style={{width:800, height:'auto'}}/></div> -->

2. Haz clic en el ícono **⋮** en la esquina superior derecha -> **Custom repositories**

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_2.png" style={{width:800, height:'auto'}}/></div> -->

3. Ingresa `https://github.com/limengdu/Seeed-Homeassistant-Discovery`, selecciona categoría **Integration**

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_3.png" style={{width:800, height:'auto'}}/></div> -->

4. Haz clic en Add, luego busca **Seeed HA Discovery** e instala

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_4.png" style={{width:800, height:'auto'}}/></div> -->

5. Reinicia Home Assistant

### Instalar Biblioteca de Arduino

#### Instalar la Biblioteca de Dependencia WiFi

- Para Arduino IDE

1. Descarga la carpeta `arduino/SeeedHADiscovery`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. Copiar a `C:\Users\yourname\Documents\Arduino\libraries\`

3. ArduinoJson (por Benoit Blanchon)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_5.png" style={{width:800, height:'auto'}}/></div>

4. WebSockets (por Markus Sattler)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_6.png" style={{width:800, height:'auto'}}/></div>

- Para PlatformIO

```ini
lib_deps =
    bblanchon/ArduinoJson@^7.0.0
    links2004/WebSockets@^2.4.0
```

#### Instalar la Biblioteca de Dependencias BLE

- Para Arduino IDE

1. Descargar la carpeta `arduino/SeeedHADiscoveryBLE`

2. Copiar a `C:\Users\yourname\Documents\Arduino\libraries\`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. NimBLE-Arduino

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_7.png" style={{width:800, height:'auto'}}/></div>

- Para PlatformIO

```ini
lib_deps =
    h2zero/NimBLE-Arduino@^1.4.0
```

### Escribir Programa Arduino

Elige la versión correspondiente según tus necesidades reales.

<Tabs>
<TabItem value='Código Versión WiFi'>

```cpp
#include <SeeedHADiscovery.h>

const char* WIFI_SSID = "Your WiFi Name";
const char* WIFI_PASSWORD = "Your WiFi Password";

SeeedHADiscovery ha;
SeeedHASensor* tempSensor;
SeeedHASensor* humiditySensor;

void setup() {
    Serial.begin(115200);
    ha.setDeviceInfo("Living Room Sensor", "ESP32-C5", "1.0.0");
    ha.enableDebug(true);

    if (!ha.begin(WIFI_SSID, WIFI_PASSWORD)) {
        Serial.println("WiFi connection failed!");
        while (1) delay(1000);
    }

    tempSensor = ha.addSensor("temperature", "Temperature", "temperature", "°C");
    tempSensor->setPrecision(1);

    humiditySensor = ha.addSensor("humidity", "Humidity", "humidity", "%");
    humiditySensor->setPrecision(0);
}

void loop() {
    ha.handle();

    static unsigned long lastUpdate = 0;
    if (millis() - lastUpdate > 5000) {
        lastUpdate = millis();
        tempSensor->setValue(25.5);
        humiditySensor->setValue(55);
    }
}
```

Después de subir el código, abre el monitor serie. Una vez que la conexión WiFi sea exitosa, se imprimirá la dirección IP correspondiente.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_8.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ESP-C5 soporta WiFi de banda dual (2.4 GHz y 5 GHz).<br/>
Si encuentras que la configuración manual de red es demasiado engorrosa, también puedes usar la página web de flasheo de firmware que lanzamos.: [Web Firmware Flasher](https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/)
:::

</TabItem>

<TabItem value='Código Versión BLE'>

```cpp
#include <SeeedHADiscoveryBLE.h>

SeeedHADiscoveryBLE ble;
SeeedBLESensor* tempSensor;
SeeedBLESensor* humiditySensor;
SeeedBLESensor* batterySensor;

void setup() {
    Serial.begin(115200);
    ble.enableDebug(true);

    if (!ble.begin("XIAO Temperature Sensor")) {
        Serial.println("BLE initialization failed!");
        while (1) delay(1000);
    }

    // Use BTHome standard sensor types
    tempSensor = ble.addTemperature();
    humiditySensor = ble.addHumidity();
    batterySensor = ble.addBattery();
}

void loop() {
    // Set sensor values
    tempSensor->setValue(25.5f);      // Temperature 25.5°C
    humiditySensor->setValue(55.0f);  // Humidity 55%
    batterySensor->setValue(100.0f);    // Battery 100%

    // Send BLE broadcast
    ble.advertise();

    // Wait 10 seconds (BLE is suitable for low frequency updates)
    delay(10000);
}
```

Después de subir el código, abre el monitor serie, y se mostrará la información Bluetooth del XIAO ESP32-C5.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_9.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Agregar Dispositivo en Home Assistant

<Tabs>
<TabItem value='Dispositivo WiFi'>

¡Será descubierto automáticamente! O agregar manualmente:

1. Ve a **Settings** -> **Devices & Services**

2. Haz clic en **Add Integration**

3. Busca **Seeed HA Discovery**

4. Ingresa la dirección IP del ESP32

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_10.png" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value='Dispositivo BLE'>

Utiliza el protocolo BTHome, ¡será descubierto automáticamente por Home Assistant!

1. Asegúrate de que HA tenga un adaptador Bluetooth o proxy Bluetooth ESP32

2. El dispositivo aparecerá automáticamente en Settings -> Devices & Services -> BTHome

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_11.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Demostración del Efecto

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
¡Felicidades! A estas alturas, deberías haber dominado dos métodos para conectar el **XIAO ESP32-C5** a **Home Assistant**. ¡Esperamos ver tus proyectos increíbles y te damos la bienvenida a compartirlos con nosotros!

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
