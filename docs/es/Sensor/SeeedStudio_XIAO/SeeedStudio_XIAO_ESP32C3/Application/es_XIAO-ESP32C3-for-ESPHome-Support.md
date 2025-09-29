---
description: Soporte de ESPHome en Seeed Studio XIAO ESP32C3
title: Soporte de ESPHome en Seeed Studio XIAO ESP32C3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/XIAO-ESP32C3-for-ESPHome-Support
last_update:
  date: 10/20/2023
  author: Zachary
---

# XIAO ESP32C3 conectándose con Home Assistant a través de ESPHome (todos los puertos soportados)

<!-- # Soporte-de-ESPHome-en-Seeed-Studio-XIAO-ESP32C3 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:900, height:'auto'}}/></div>

Este wiki te guiará paso a paso sobre cómo conectar [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) con ESPHome ejecutándose en Home Assistant y enviar los datos del sensor/controlar dispositivos después de conectar módulos Grove al XIAO ESP32C3. Aquí apliqué todo tipo de puertos, incluyendo **digital, analógico, IIC, SPI y UART**. ¡Ahora comencemos!

## ¿Qué son ESPHome y Home Assistant?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:900, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) es una herramienta que tiene como objetivo hacer que la gestión de tus placas ESP sea lo más simple posible. Lee un archivo de configuración YAML y crea firmware personalizado que instala en tu dispositivo ESP. Los dispositivos o sensores añadidos en la configuración de ESPHome aparecerán automáticamente en la interfaz de usuario de Home Assistant. ESPHome puede ayudarte a conectar y enviar los datos a dispositivos de Home Assistant.

## Preparación del Hardware

Estoy usando XIAO ESP32C3 como placa de control, usando [reRouter](https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html) como hardware aquí, junto con múltiples sensores Grove.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Expansion Board</th>
      <th>Dispositivos de Home Assistant</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ver Más 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Sensores Grove**

- [Grove - Sensor de Temperatura y Humedad (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - Sensor Inteligente de Calidad del Aire (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)
- [Grove - Micrófono Analógico](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)
- [Grove - Sensor PIR Digital](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## Preparación del Software

### Instalar Home Assistant

Asegúrate de que ya tienes Home Assistant funcionando. Hay múltiples wikis que introducen cómo flashear Home Assistant en los [productos](https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-) aquí. Estoy usando reRouter que está alimentado por Raspberry Pi CM4, así que puedo [usar directamente el oficial para flashear el OS en el reRouter](https://www.home-assistant.io/installation/raspberrypi).

### Instalar ESPHome en Home Assistant

ESPHome está disponible como un **Complemento de Home Assistant** y se puede instalar simplemente a través de la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Paso 1.** Para configurar rápidamente ESPHome en Home Assistant, haz clic en el botón de abajo -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png"style={{width:300, height:'auto'}}/></div> -->
<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png" style={{width:300, height:'auto'}}/></div> -->

<!-- - **Paso 2.** Una vez que veas la siguiente ventana emergente, haz clic en **ABRIR ENLACE** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png"style={{width:300, height:'auto'}}/></div> -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png" style={{width:300, height:'auto'}}/></div> -->

- **Paso 1.** Haz clic en **INSTALL**


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Habilita todas las opciones y haz clic en **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Paso 3.** Haz clic en **ABRIR INTERFAZ WEB** o en **ESPHOME desde el panel lateral** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png"style={{width:700, height:'auto'}}/></div> -->

Verás la siguiente ventana si ESPHome se carga exitosamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## Comenzando

Una vez que todo el software y el hardware estén listos, ahora podemos comenzar.

### 1. Agregar Seeed Studio XIAO ESP32C3 a ESPHome

- **Paso 1.** Haz clic en **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Haz clic en CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **Paso 3.** Ingresa un **Nombre** para el dispositivo e ingresa las credenciales WiFi como **Nombre de red** y **Contraseña**. Luego haz clic en **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **Paso 4.** Selecciona **ESP32-C3** y haz clic

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **Paso 5.** Haz clic en **SKIP** porque configuraremos esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **Paso 6.** Haz clic en **EDIT** bajo la placa recién creada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

- **Paso 7.** Esto abrirá un archivo **YAML** y este archivo se usará para establecer todas las configuraciones de la placa. Edita el contenido bajo **esp32** como sigue


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

:::note Aquí estamos usando la versión más reciente del [núcleo de Arduino](https://github.com/espressif/arduino-esp32/releases) para ESP32 y [soporte ESP32 para PlatformIO](https://github.com/platformio/platform-espressif32/releases)
:::

- **Paso 8.** Haz clic en **SAVE** y luego haz clic en **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/10-2.png" style={{width:900, height:'auto'}}/></div>

- **Paso 9.** Conecta un extremo de un cable USB Tipo-C al Seeed Studio XIAO ESP32C3 y el otro extremo a uno de los puertos USB del reRouter CM4 1432

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>


- **Paso 10.** Haz clic en **Plug into the computer running ESPHome Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/12-1.png" style={{width:900, height:'auto'}}/></div>

- **Paso 11.** Selecciona el puerto conectado. Es probable que sea ```/dev/ttyACM1 porque /dev/ttyACM0``` está conectado al reRouter CM4 1432

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/13-1.png" style={{width:900, height:'auto'}}/></div>

:::tip
Es mejor usar Wi-Fi de 2.4GHz
:::

Ahora descargará todos los paquetes de placa necesarios y flasheará el firmware de ESPHome en el XIAO ESP32C3. Si el flasheo es exitoso, verás la siguiente salida. Si ves algún error, intenta reiniciar tu xiao esp32c3 o entrar al modo bootloader manteniendo presionado el BOTÓN BOOT y conectar el XIAO ESP32C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **Paso 12.** La ventana anterior muestra los registros en tiempo real de la placa conectada. Ciérrala haciendo clic en **STOP**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/14.png" style={{width:900, height:'auto'}}/></div>

- **Paso 13.** Si ves el estado de la placa como **ONLINE**, eso significa que la placa se conectó exitosamente al WiFi

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/15.png" style={{width:900, height:'auto'}}/></div>

- **Paso 14.** Ve a **Settings** y selecciona **Devices & Services**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **Paso 15.** Verás **ESPHome** como una integración descubierta. Haz clic en **CONFIGURE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/20.png"style={{width:900, height:'auto'}}/></div>

- **Paso 16.** Haz clic en **SUBMIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/21.png"style={{width:900, height:'auto'}}/></div>

- **Paso 17.** Ingresa tu contraseña. Esta es la contraseña de la api que puedes encontrar en el **PASO 8**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/22.png"style={{width:900, height:'auto'}}/></div>

- **Paso 18.** Haz clic en **FINISH**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/23.png"style={{width:900, height:'auto'}}/></div>

### 2. Conectar Módulos Grove y Enviar los Datos

Ahora conectaremos módulos Grove al Seeed Studio XIAO ESP32C3 para que podamos mostrar datos de sensores o controlar los dispositivos usando Home Assistant!

### Conocimiento de Desarrollo

#### Placa de Expansión XIAO

Para usar módulos Grove con el Seeed Studio XIAO ESP32C3, usaremos una [Base de Expansión Seeed Studio para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos el XIAO ESP32C3 en ella.

Después de eso, los conectores Grove en la placa se pueden usar para conectar módulos Grove. Aquí están las definiciones de pines.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:900, height:'auto'}}/></div>

#### Definiciones de Pines

Necesitas seguir el gráfico a continuación para usar los números de pin internos apropiados al conectar los módulos Grove a los conectores Grove en el Shield Grove para Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pin_map.png"style={{width:900, height:'auto'}}/></div>

Por ejemplo, si quieres conectar un módulo Grove al puerto D0, necesitas definir el pin en ESPHome como GPIO2

#### Lista de Compatibilidad Grove con ESPHome

Actualmente los siguientes módulos Grove son compatibles con ESPHome. Consulta [aquí](https://esphome.io/components/sensor/index.html#see-also)

### 3. Conexión Grove y Transmisión de Datos

Ahora seleccionaremos varios módulos Grove y explicaremos cómo pueden conectarse con ESPHome y Home Assistant.

#### Grove - Sensor de Temperatura y Humedad (DHT20)

Este sensor de Temperatura y Humedad proporciona una salida digital precalibrada. Un elemento sensor capacitivo único mide la humedad relativa y la temperatura se mide mediante un termistor de coeficiente de temperatura negativo (NTC). Tiene excelente confiabilidad y estabilidad a largo plazo. [Haz clic aquí](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) para la compra.

##### Configuración de Instalación

- **Paso 1.** Conecta el Grove - DHT20 a uno de los conectores I2C en la Base de Expansión Seeed Studio para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic1.png"style={{width:300, height:'auto'}}/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambia el archivo y envíalo OTA al XIAO ESP32C3

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

Puedes aprender más sobre el [componente DHT20](https://esphome.io/components/sensor/aht10) aquí. Aquí añadimos el componente I²C Bus porque el DHT20 se comunica usando el protocolo I2C.


##### Visualizar en el Panel de Control

- **Paso 1.** En la página de Resumen de Home Assistant, haz clic en los 3 puntos y haz clic en **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Haz clic en **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **Paso 3.** Selecciona **By ENTITY**, escribe **temperature** y selecciona la **casilla de verificación** junto a **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37.png"style={{width:900, height:'auto'}}/></div>

- **Paso 4.** Haz clic en **ADD TO DASHBOARD**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/38.png"style={{width:900, height:'auto'}}/></div>

- **Paso 5.** También puedes visualizar los datos del sensor como medidores. Haz clic en **Gauge** bajo **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37-1.png"style={{width:900, height:'auto'}}/></div>

Ahora tu panel de control de Home Assistant se verá como se muestra a continuación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/39.png"style={{width:900, height:'auto'}}/></div>


#### Grove - Sensor de Luz(LS06-S)

El Grove - Light Sensor v1.2 es un módulo analógico y puede generar varias señales eléctricas que pueden convertirse a diferentes rangos. Integra un fotorresistor LS06-S, un fotodiodo altamente sensible y confiable, para detectar la intensidad de luz en el ambiente. Es un módulo sensor de luz perfecto para Arduino para medición de luz, detección de luz y un interruptor controlado por luz.

[Haz clic aquí](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) para la compra.

##### Configuración de Instalación

- **Paso 1.** Conecta el Grove - Light sensor a uno de los conectores Analógicos/Digitales en la Seeed Studio Expansion Base para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic2.png"style={{width:300, height:'auto'}}/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambia el archivo y envíalo OTA al XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/41-1.png"style={{width:900, height:'auto'}}/></div>

Verás este resultado si todo va bien.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/42.png"style={{width:900, height:'auto'}}/></div>

##### Visualizar en el Panel de Control

- **Paso 1.** En la página de Resumen de Home Assistant, haz clic en los 3 puntos y haz clic en **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Haz clic en **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **Paso 3.** Selecciona **By ENTITY**, selecciona el **Light Sensor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/43.png"style={{width:900, height:'auto'}}/></div>

- **Paso 4.** Selecciona **PICK DIFFERENT CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/44.png"style={{width:900, height:'auto'}}/></div>

- **Paso 5.** Selecciona **Gauge**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/45.png"style={{width:900, height:'auto'}}/></div>

- **Paso 6.** Establece el mínimo y máximo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/46.png"style={{width:900, height:'auto'}}/></div>

- **Paso 7.** Entonces verás el valor del sensor de luz en tu panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/47.png"style={{width:900, height:'auto'}}/></div>


<!-- #### Grove - Sensor de Temperatura y Humedad (BME680)

El Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) es un sensor de múltiples funciones que puede medir temperatura, presión, humedad y gas al mismo tiempo. Está basado en el módulo BME680 y puedes usar este sensor en tu GPS, dispositivos IoT u otros dispositivos que necesiten esos cuatro parámetros. [Haz clic aquí](https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html) para la compra.

##### Configuración de Instalación

- **Paso 1.** Conecta el Grove - [Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) a uno de los conectores I2C en la Seeed Studio Expansion Base para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/30.jpg"style={{width:700, height:'auto'}}/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambia el archivo y envíalo OTA al XIAO ESP32C3

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

Puedes aprender más sobre el [componente BME680](https://esphome.io/components/sensor/bme680) aquí. Te permite usar sensores basados en BME280, BME680, BMP085, BMP280, AHT10, AHT20 y AHT21. Aquí agregamos el componente I²C Bus porque AHT20 se comunica usando el protocolo I2C.

##### Visualizar en el Panel de Control

- **Paso 1.** En la página de Resumen de Home Assistant, haz clic en los 3 puntos y haz clic en **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Haz clic en **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/32.png"style={{width:900, height:'auto'}}/></div>

- **Paso 3.** Selecciona **By ENTITY**, escribe **temperature** y selecciona la **casilla de verificación** junto a **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/33.png"style={{width:900, height:'auto'}}/></div>

- **Paso 4.** Repite lo mismo para **Humidity**, **Gas Resitance** y **Pressure**

- **Paso 5.** Haz clic en **CONTINUE**

- **Paso 6.** Haz clic en **ADD TO DASHBOARD**

Ahora tu panel de control de Home Assistant se verá como se muestra a continuación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/34.png"style={{width:900, height:'auto'}}/></div>

- **Paso 7.** También puedes visualizar los datos del sensor como medidores. Haz clic en **Gauge** bajo **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/35.png"style={{width:900, height:'auto'}}/></div>

- **Paso 8.** Selecciona **Temperature** del menú desplegable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/36.png"style={{width:900, height:'auto'}}/></div>

- **Paso 9.** Haz clic en **SAVE**

- **Paso 10.** Repite lo mismo para **Humidity**, **Gas Resitance** y **Pressure**

- Ahora tu panel de control se verá como se muestra a continuación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/37.png"style={{width:900, height:'auto'}}/></div>

<!-- #### Grove -Smart Air Quality Sensor (SGP41)

El sensor de gas digital SGP41 utiliza la tecnología CMOSens® de Sensirion, que ofrece un sistema de sensor completo y fácil de usar en un solo chip. Puede medir la concentración de compuestos orgánicos volátiles (VOCs) y óxidos de nitrógeno (NOx) en el aire interior y proporciona señales de salida digitales. Además, este sensor tiene una estabilidad a largo plazo y vida útil excepcionales. [Haz clic aquí](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) para la compra.

##### Configuración de Instalación

- **Paso 1.** Conecta Grove - [Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) a uno de los conectores I2C en la Seeed Studio Expansion Base para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.jpg"style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambia el archivo y envíalo OTA al XIAO ESP32C3

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

**Nota:** Este sensor costará 90 ciclos para recopilar suficientes muestras de datos y la advertencia no se puede evitar hasta ahora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.png"style={{width:700, height:'auto'}}/></div>

##### Visualizar en el Panel de Control

Ver antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/39.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Micrófono Analógico

El Grove - Micrófono Analógico está basado en la tecnología MEMS SiSonic de alto rendimiento, ofreciendo un micrófono extremadamente silencioso, de bajo consumo, confiable y pequeño para la industria de hardware de código abierto, y tiene un rendimiento mejorado bajo condiciones severas. [Haz clic aquí](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) para una compra.

##### Configuración de Instalación

- **Paso 1.** Conecta Grove - [Micrófono Analógico](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) al conector A0 en la Base de Expansión Seeed Studio para XIAO

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambia el archivo y envíalo OTA al XIAO ESP32C3
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

Puedes consultar más información sobre [Componente de Sensor Binario](https://esphome.io/components/binary_sensor/index.html#binary-sensor-component)

##### Visualizar en el Panel de Control

Ver anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/41.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Sensor PIR Digital

El sensor PIR es un sensor IR para detectar movimientos humanos. Este Sensor PIR Digital Grove es el sensor PIR más económico en las familias PIR, sin embargo, es capaz de dar una respuesta rápida y generar una señal alta desde el Pin "sig". [Haz clic aquí](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html) para una compra.

##### Configuración de Instalación

- **Paso 1.** Conecta [Grove - Sensor PIR Digital](https://wiki.seeedstudio.com/es/Grove-Digital-PIR-Sensor/) al conector D7 en la Base de Expansión Seeed Studio para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/42.jpg"style={{width:700, height:'auto'}}/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambia el archivo y envíalo OTA al XIAO ESP32C3

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

##### Visualizar en el Dashboard

Ver antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Pantalla(SSD1306) en la Placa de Expansión XIAO

##### Configuración de Instalación

- **Paso 1.** Descargar archivos de fuente para la pantalla, [haz clic aquí](https://esphome.io/components/display/index.html#fonts) para una referencia

- **Paso 2.** Instalar "File editor" en **Setting** >>> **Add-ons** >>> **File editor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/44.png"style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Hacer clic en **File editor** >>> Introducir la ruta: **config/esphome** >>> **cargar** tu archivo de fuente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/45.png"style={{width:700, height:'auto'}}/></div>

- **Paso 4.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, cambiar el archivo y enviarlo OTA al XIAO ESP32C3

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

 Puedes explorar más sobre las casas de componentes de visualización del potente motor de renderizado y visualización de ESPHome [haciendo clic aquí.](https://esphome.io/components/display/#display-engine)
 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/46.jpg"style={{width:700, height:'auto'}}/></div> -->

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [los esfuerzos de Zachary](https://github.com/Seeed-Studio/wiki-documents/issues/603) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

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

