---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3
title: Compatibilidad de ESPHome en Seeed Studio XIAO ESP32C3
keywords:
  - ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-ESP32C3-for-ESPHome-Support
sku: 113991054,110061541,102010633
last_update:
  date: 10/20/2023
  author: Zachary
createdAt: '2023-10-19'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/XIAO-ESP32C3-for-ESPHome-Support/
---

# XIAO ESP32C3 conectando con Home Assistant vía ESPHome (todos los puertos compatibles)

<!-- # ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:900, height:'auto'}}/></div>

Este wiki explicará paso a paso cómo conectar la [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) con ESPHome ejecutándose en Home Assistant y enviar los datos de los sensores/controlar dispositivos después de conectar módulos Grove a la XIAO ESP32C3. Aquí he aplicado todo tipo de puertos, incluidos **digital, analógico, IIC, SPI y UART**. ¡Ahora empecemos!

## ¿Qué son ESPHome y Home Assistant?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:900, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) es una herramienta cuyo objetivo es hacer que la gestión de tus placas ESP sea lo más sencilla posible. Lee un archivo de configuración YAML y crea un firmware personalizado que instala en tu dispositivo ESP. Los dispositivos o sensores añadidos en la configuración de ESPHome aparecerán automáticamente en la interfaz de usuario de Home Assistant. ESPHome puede ayudarte a conectar y enviar los datos a los dispositivos de Home Assistant.

## Preparación de hardware

Estoy usando XIAO ESP32C3 como placa de control, utilizando [reRouter](https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html) como hardware aquí, junto con múltiples sensores Grove.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Placa de expansión Seeed Studio</th>
      <th>Dispositivos Home Assistant</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ver más 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Sensores Grove**

- [Grove - Temperature and Humidity Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove -Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)
- [Grove - Analog Microphone](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)
- [Grove - Digital PIR Sensor](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## Preparación de software

### Instalar Home Assistant

Asegúrate de que ya tienes Home Assistant en funcionamiento. Hay múltiples wikis que introducen cómo grabar Home Assistant en los [productos](https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-) aquí. Estoy usando reRouter, que funciona con Raspberry Pi CM4, así que puedo [usar directamente la herramienta oficial para grabar el sistema operativo en el reRouter](https://www.home-assistant.io/installation/raspberrypi).

### Instalar ESPHome en Home Assistant

ESPHome está disponible como un **Add-On de Home Assistant** y se puede instalar fácilmente a través de la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Step 1.** To quickly setup ESPHome on Home Asssistant, click the below button -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png"style={{width:300, height:'auto'}}/></div> -->
<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png" style={{width:300, height:'auto'}}/></div> -->

<!-- - **Step 2.** Once you see the following pop-up, click **OPEN LINK** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png"style={{width:300, height:'auto'}}/></div> -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png" style={{width:300, height:'auto'}}/></div> -->

- **Paso 1.** Haz clic en **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Habilita todas las opciones y haz clic en **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Step 3.** Click **OPEN WEB UI** or **ESPHOME from the side-panel** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png"style={{width:700, height:'auto'}}/></div> -->

Verás la siguiente ventana si ESPHome se ha cargado correctamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## Introducción

Una vez que todo el software y el hardware estén listos, podemos empezar.

### 1. Añadir Seeed Studio XIAO ESP32C3 a ESPHome

- **Paso 1.** Haz clic en **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Haz clic en CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **Paso 3.** Introduce un **Name** para el dispositivo e introduce las credenciales WiFi como **Network name** y **Password**. Luego haz clic en **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **Paso 4.** Selecciona **ESP32-C3** y haz clic

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **Paso 5.** Haz clic en **SKIP** porque configuraremos esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **Paso 6.** Haz clic en **EDIT** debajo de la placa recién creada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

- **Paso 7.** Esto abrirá un archivo **YAML** y este archivo se utilizará para establecer todas las configuraciones de la placa. Edita el contenido bajo **esp32** como se indica a continuación

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "Your Password"
```

:::note Aquí estamos utilizando la última versión del [Arduino core](https://github.com/espressif/arduino-esp32/releases) para ESP32 y [compatibilidad ESP32 para PlatformIO](https://github.com/platformio/platform-espressif32/releases)
:::

- **Paso 8.** Haz clic en **SAVE** y luego haz clic en **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/10-2.png" style={{width:900, height:'auto'}}/></div>

- **Paso 9.** Conecta un extremo de un cable USB Tipo C a la Seeed Studio XIAO ESP32C3 y el otro extremo a uno de los puertos USB del reRouter CM4 1432

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **Paso 10.** Haz clic en **Plug into the computer running ESPHome Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/12-1.png" style={{width:900, height:'auto'}}/></div>

- **Paso 11.** Selecciona el puerto conectado. Probablemente será ```/dev/ttyACM1``` porque ```/dev/ttyACM0``` está conectado al reRouter CM4 1432

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/13-1.png" style={{width:900, height:'auto'}}/></div>

:::tip
Es mejor usar Wi-Fi de 2.4GHz
:::

Ahora descargará todos los paquetes de placa necesarios y flasheará el firmware de ESPHome en el XIAO ESP32C3. Si el flasheo es exitoso, verás la siguiente salida. Si ves algún error, intenta reiniciar tu XIAO ESP32C3 o entrar en modo bootloader manteniendo presionado el BOOT BUTTON y conectando el XIAO ESP32C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **Paso 12.** La ventana anterior muestra los registros en tiempo real de la placa conectada. Ciérrala haciendo clic en **STOP**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/14.png" style={{width:900, height:'auto'}}/></div>

- **Paso 13.** Si ves el estado de la placa como **ONLINE**, significa que la placa se ha conectado correctamente a la WiFi

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/15.png" style={{width:900, height:'auto'}}/></div>

- **Paso 14.** Ve a **Settings** y selecciona **Devices & Services**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **Paso 15.** Verás **ESPHome** como una integración detectada. Haz clic en **CONFIGURE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/20.png"style={{width:900, height:'auto'}}/></div>

- **Paso 16.** Haz clic en **SUBMIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/21.png"style={{width:900, height:'auto'}}/></div>

- **Paso 17.** Introduce tu contraseña. Esta es la contraseña de la api que puedes encontrar en el **STEP 8**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/22.png"style={{width:900, height:'auto'}}/></div>

- **Paso 18.** Haz clic en **FINISH**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/23.png"style={{width:900, height:'auto'}}/></div>

### 2. Conectar módulos Grove y enviar los datos

Ahora conectaremos módulos Grove al Seeed Studio XIAO ESP32C3 para que podamos mostrar los datos del sensor o controlar los dispositivos usando Home Assistant.

### Conocimientos de desarrollo

#### Placa de expansión XIAO

Para poder usar módulos Grove con Seeed Studio XIAO ESP32C3, utilizaremos una [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos el XIAO ESP32C3 en ella.

Después de eso, los conectores Grove de la placa se pueden usar para conectar módulos Grove. Aquí están las definiciones de pines.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:900, height:'auto'}}/></div>

#### Definiciones de pines

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

Debes seguir el gráfico de abajo para usar los números de pines internos apropiados cuando conectes los módulos Grove a los conectores Grove en el Grove Shield para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pin_map.png"style={{width:900, height:'auto'}}/></div>

Por ejemplo, si quieres conectar un módulo Grove al puerto D0, necesitas definir el pin en ESPHome como GPIO2

#### Lista de compatibilidad de Grove con ESPHome

Actualmente los siguientes módulos Grove son compatibles con ESPHome. Consulta [aquí](https://esphome.io/components/sensor/index.html#see-also)

### 3. Conexión Grove y transmisión de datos

Ahora seleccionaremos varios módulos Grove y explicaremos cómo se pueden conectar con ESPHome y Home Assistant.

#### Grove - Temperature and Humidity Sensor (DHT20)

Este sensor de temperatura y humedad proporciona una salida digital precalibrada. Un elemento sensor capacitivo único mide la humedad relativa y la temperatura se mide mediante un termistor de coeficiente de temperatura negativo (NTC). Tiene una excelente fiabilidad y estabilidad a largo plazo. [Haz clic aquí](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) para la compra.

##### Configuración de instalación

- **Paso 1.** Conecta el Grove - DHT20 a uno de los conectores I2C en la Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic1.png"style={{width:300, height:'auto'}}/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambia el archivo y súbelo por OTA al XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

api:
  password: "F4MQG/rBhNmqP8Nud+AJ+5CYu7LuIhIFTOcRwOm5Nw4="

ota:
  password: "999afa1f8a07e85959a9f89f8f6aebb2"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "YtpCwOqLoYlp"

captive_portal:

# 0x28 is the I2C address of DHT20
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38

sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

Puedes aprender más sobre el [componente DHT20](https://esphome.io/components/sensor/aht10) aquí. Aquí añadimos el componente de bus I²C porque el DHT20 se comunica usando el protocolo I2C.

##### Visualizar en el panel

- **Paso 1.** En la página Overview de Home Assistant, haz clic en los 3 puntos y haz clic en **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Haz clic en **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **Paso 3.** Selecciona **By ENTITY**, escribe **temperature** y selecciona la **check box** junto a **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37.png"style={{width:900, height:'auto'}}/></div>

- **Paso 4.** Haz clic en **ADD TO DASHBOARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/38.png"style={{width:900, height:'auto'}}/></div>

- **Paso 5.** También puedes visualizar los datos del sensor como indicadores. Haz clic en **Gauge** bajo **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37-1.png"style={{width:900, height:'auto'}}/></div>

Ahora tu panel de Home Assistant se verá como se muestra abajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/39.png"style={{width:900, height:'auto'}}/></div>

#### Grove - Light Sensor(LS06-S)

El Grove - Light Sensor v1.2 es un módulo analógico y puede generar varias señales eléctricas que se pueden convertir a diferentes rangos. Integra una fotorresistencia LS06-S, un fotodiodo de alta sensibilidad y fiabilidad, para detectar la intensidad de la luz en el entorno. Es un módulo de sensor de luz Arduino perfecto para la medición de luz, la detección de luz y un interruptor controlado por luz.

[Haz clic aquí](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) para la compra.

##### Configuración de instalación

- **Paso 1.** Conecta el Grove - Light sensor a uno de los conectores analógicos/digitales en la Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic2.png"style={{width:300, height:'auto'}}/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambia el archivo y súbelo por OTA al XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/41-1.png"style={{width:900, height:'auto'}}/></div>

Verás este resultado si todo va bien.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/42.png"style={{width:900, height:'auto'}}/></div>

##### Visualizar en el panel

- **Paso 1.** En la página Overview de Home Assistant, haz clic en los 3 puntos y haz clic en **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Haz clic en **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **Paso 3.** Selecciona **By ENTITY**, selecciona el **Light Sensor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/43.png"style={{width:900, height:'auto'}}/></div>

- **Paso 4.** Selecciona **PICK DIFFERENT CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/44.png"style={{width:900, height:'auto'}}/></div>

- **Paso 5.** Selecciona **Gauge**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/45.png"style={{width:900, height:'auto'}}/></div>

- **Paso 6.** Establece el mínimo y el máximo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/46.png"style={{width:900, height:'auto'}}/></div>

- **Paso 7.** Entonces verás el valor del sensor de luz en tu panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/47.png"style={{width:900, height:'auto'}}/></div>

<!-- #### Grove - Temperature and Humidity Sensor (BME680)

The Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) is a multiple function sensor which can measure temperature, pressure, humidity and gas at the same time. It is based on the BME680 module and you can use this sensor in your GPS, IoT devices or other device which needs those four parameters. [Click here](https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html) for the purchase.

##### Setup Configuration

- **Step 1.** Connect Grove - [Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) to one of the I2C connectors on the Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/30.jpg"style={{width:700, height:'auto'}}/></div>

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

i2c:
  sda: GPIO6
  scl: GPIO7

sensor:
  - platform: bme680
    temperature:
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
    update_interval: 60s
```

You can learn more about the [BME680 component](https://esphome.io/components/sensor/bme680) here. It allows you to use BME280, BME680, BMP085, BMP280, AHT10, AHT20 and AHT21 based sensors. Here we add the I²C Bus component because AHT20 communicates using I2C protocol.

##### Visualize on Dashboard

- **Step 1.** On the Overview page of Home Assistant, click the 3 dots and click **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:900, height:'auto'}}/></div>

- **Step 2.** Click **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/32.png"style={{width:900, height:'auto'}}/></div>

- **Step 3.** Select **By ENTITY**, type **temperature** and select the **check box** next to **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/33.png"style={{width:900, height:'auto'}}/></div>

- **Step 4.** Repeat the same for **Humidity**, **Gas Resitance** and **Pressure**

- **Step 5.** Click **CONTINUE**

- **Step 6.** Click **ADD TO DASHBOARD**

Now your Home Assistant dashboard will look like below

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/34.png"style={{width:900, height:'auto'}}/></div>

- **Step 7.** You can also visualize sensor data as gauges. Click **Gauge** under **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/35.png"style={{width:900, height:'auto'}}/></div>

- **Step 8.** Select **Temperature** from the drop-down menu

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/36.png"style={{width:900, height:'auto'}}/></div>

- **Step 9.** Click **SAVE**

- **Step 10.** Repeat the same for **Humidity**, **Gas Resitance** and **Pressure**

- Now your dashboard will look like below

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/37.png"style={{width:900, height:'auto'}}/></div>
 -->

<!-- #### Grove -Smart Air Quality Sensor (SGP41)

The SGP41 digital gas sensor uses Sensirion's CMOSens® technology, which offers a complete and easy-to-use sensor system on a single chip. It can measure the concentration of volatile organic compounds (VOCs) and nitrogen oxides (NOx) in indoor air and provides digital output signals. Additionally, this sensor has outstanding long-term stability and lifetime. [Click here](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) for the purchase.

##### Setup Configuration

- **Step 1.** Connect Grove - [Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) to one of the I2C connectors on the Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.jpg"style={{width:900, height:'auto'}}/></div>

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"

``` 

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz
sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76

  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```
**Nota:** Este sensor necesitará 90 ciclos para recopilar suficientes muestras de datos y, por el momento, no se puede evitar la advertencia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.png"style={{width:700, height:'auto'}}/></div>

##### Visualizar en el panel

Consulta lo anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/39.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Analog Microphone

The Grove - Analog Microphone is a based on high-performance SiSonic MEMS technology, offering an extremely-low-noise, low-current, reliable, and small microphone to opensource hardware industry, and it has improved performance under severe conditions. [Click here](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) for a purchase.

##### Setup Configuration

- **Step 1.** Connect Grove - [Analog Microphone](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) to the A0 connector on the Seeed Studio Expansion Base for XIAO

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3
```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```

Puedes consultar más información sobre el [Componente de Sensor Binario](https://esphome.io/components/binary_sensor/index.html#binary-sensor-component)

##### Visualizar en el Panel

Consulta lo anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/41.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Digital PIR Sensor

El sensor PIR es un sensor IR para detectar movimientos humanos. Este Grove Digital PIR Sensor es el sensor PIR más económico de la familia PIR, sin embargo, es capaz de dar una respuesta rápida y generar una señal alta desde el pin "sig". [Haz clic aquí](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html) para comprarlo.

##### Configuración de la instalación

- **Paso 1.** Conecta el [Grove - Digital PIR Sensor](https://wiki.seeedstudio.com/es/Grove-Digital-PIR-Sensor/) al conector D7 en la Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/42.jpg"style={{width:700, height:'auto'}}/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, modifica el archivo y súbelo por OTA a la XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
```

##### Visualizar en el Panel

Consulta lo anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Display(SSD1306) on XIAO Expansion Board

##### Configuración de la instalación

- **Paso 1.** Descarga los archivos de fuente para la pantalla, [haz clic aquí](https://esphome.io/components/display/index.html#fonts) para una referencia

- **Paso 2.** Instala "File editor" en **Setting** >>> **Add-ons** >>> **File editor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/44.png"style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Haz clic en **File editor** >>> Introduce la ruta: **config/esphome** >>> **sube** tu archivo de fuente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/45.png"style={{width:700, height:'auto'}}/></div>

- **Paso 4.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, modifica el archivo y súbelo por OTA a la XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    lambda: |-
      it.print(0, 0, id(font), "Wi-fi Connected");

sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76

  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion

  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```
 Puedes explorar más sobre el componente de pantalla que alberga el potente motor de renderizado y visualización de ESPHome [haciendo clic aquí.](https://esphome.io/components/display/#display-engine)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/46.jpg"style={{width:700, height:'auto'}}/></div> -->

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a los [esfuerzos de Zachary](https://github.com/Seeed-Studio/wiki-documents/issues/603) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

## Soporte Técnico y Discusión de Productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
