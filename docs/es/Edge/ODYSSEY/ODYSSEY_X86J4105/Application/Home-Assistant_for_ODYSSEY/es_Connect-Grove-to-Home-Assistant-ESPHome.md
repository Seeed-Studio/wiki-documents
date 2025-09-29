---
description: Conectar módulos Grove a Home Assistant usando ESPHome en ODYSSEY y Seeed Studio XIAO ESP32C3
title: Conectar módulos Grove a Home Assistant usando ESPHome
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connect-Grove-to-Home-Assistant-ESPHome
last_update:
  date: 03/16/2023
  author: Lakshantha
---

# Conectar módulos Grove a Home Assistant usando ESPHome

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/106.png" /></div>

## Introducción

Este wiki te guiará paso a paso sobre cómo conectar [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) con ESPHome ejecutándose en Home Assistant y enviar los datos del sensor/controlar dispositivos después de conectar módulos Grove al XIAO ESP32C3. ¡Así que comencemos!

## ¿Qué es ESPHome?

[ESPHome](https://esphome.io) es una herramienta que tiene como objetivo hacer que la gestión de tus placas ESP sea lo más simple posible. Lee un archivo de configuración YAML y crea firmware personalizado que instala en tu dispositivo ESP. Los dispositivos o sensores añadidos en la configuración de ESPHome aparecerán automáticamente en la interfaz de usuario de Home Assistant.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/54.png" /></div>

## Instalar Home Assistant

Asegúrate de que ya tienes Home Assistant funcionando. Puedes seguir [este wiki](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant) para una guía paso a paso sobre la instalación de Home Assistant en un SBC ODYSSEY-X86.

## Instalar ESPHome en Home Assistant

ESPHome está disponible como un **Complemento de Home Assistant** y se puede instalar simplemente a través de la tienda de complementos.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/6.png" /></div>

- **Paso 1.** Para configurar rápidamente ESPHome en Home Assistant, haz clic en el botón de abajo

<div align="center"><a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=5c53de3b_esphome&repository_url=https%3A%2F%2Fgithub.com%2Fesphome%2Fhome-assistant-addon"><img width={200} src="https://files.seeedstudio.com/wiki/ESPHome/1.png" /></a></div>

- **Paso 2.** Una vez que veas la siguiente ventana emergente, haz clic en **ABRIR ENLACE**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/2.png" /></div>

- **Paso 3.** Haz clic en **INSTALAR**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/3.png" /></div>

- **Paso 4.** Habilita todas las opciones y haz clic en **INICIAR**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/4.png" /></div>

- **Paso 5.** Haz clic en **ABRIR INTERFAZ WEB** o **ESPHOME** desde el panel lateral

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/5.png" /></div>

Verás la siguiente ventana si ESPHome se carga exitosamente

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/7.png" /></div>

## Añadir Seeed Studio XIAO ESP32C3 a ESPHome

- **Paso 1.** Haz clic en **+ NUEVO DISPOSITIVO**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png" /></div>

- **Paso 2.** Haz clic en **CONTINUAR**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png" /></div>

- **Paso 3.** Ingresa un **Nombre** para el dispositivo e ingresa las credenciales WiFi como **Nombre de red** y **Contraseña**. Luego haz clic en **SIGUIENTE**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png" /></div>

- **Paso 4.** Selecciona **ESP32-C3** y haz clic

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png" /></div>

- **Paso 5.** Haz clic en **OMITIR** porque configuraremos esta placa manualmente

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png" /></div>

- **Paso 6.** Haz clic en **EDITAR** bajo la placa recién creada

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png" /></div>

- **Paso 7.** Esto abrirá un archivo **YAML** y este archivo se usará para establecer todas las configuraciones de la placa. Edita el contenido bajo **esp32** como sigue

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**Nota:** Aquí estamos usando la última versión de [Arduino core para ESP32](https://github.com/espressif/arduino-esp32/releases) y [soporte ESP32 para PlatformIO](https://github.com/platformio/platform-espressif32/releases)

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png" /></div>

- **Paso 8.** Haz clic en **SAVE** y luego haz clic en **INSTALL**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ESPHome/16.png" /></div>

- **Paso 9.** Conecta un extremo de un cable USB Type-C al Seeed Studio XIAO ESP32C3 y el otro extremo a uno de los puertos USB del ODYSSEY-X86

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/49.png" /></div>

- **Paso 10.** Haz clic en **Plug into the computer running ESPHome Dashboard**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/17.png" /></div>

- **Paso 11.** Selecciona el puerto conectado. Es probable que sea **/dev/ttyACM1** porque **/dev/ttyACM0** está conectado al coprocesador ATSAMD21 integrado en el ODYSSEY-X86

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

Ahora descargará todos los paquetes de placa necesarios y flasheará el firmware de ESPHome en el XIAO ESP32C3. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

- **Paso 12.** La ventana anterior muestra los registros en tiempo real de la placa conectada. Ciérrala haciendo clic en **STOP**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/20.png" /></div>

- **Paso 12.** Si ves el estado de la placa como **ONLINE**, eso significa que la placa se conectó exitosamente al WiFi

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png" /></div>

Ahora puedes desconectar el XIAO ESP32C3 de la placa X86 y simplemente alimentarlo a través de un cable USB. Esto es porque de ahora en adelante, si quieres flashear firmware al XIAO ESP32C3, simplemente puedes hacerlo OTA sin conectar a la placa X86 a través de un cable USB.

- **Paso 13.** Haz clic en los **tres puntos** y haz clic en **Install**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>

- **Paso 14.** Haz clic en los **tres puntos** y haz clic en **Install**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>

- **Paso 15.** Selecciona **Wirelessly** y enviará los cambios a la placa de forma inalámbrica

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/29.png" /></div>

- **Paso 16.** Ve a **Settings** y selecciona **Devices & Services**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/22.png" /></div>

- **Paso 17.** Verás **ESPHome** como una integración descubierta. Haz clic en **CONFIGURE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/23.png" /></div>

- **Paso 18.** Haz clic en **SUBMIT**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/24.png" /></div>

Aquí te pedirá la clave de cifrado que tienes en tu configuración para xiao-esp32c3

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/25.png" /></div>

- **Paso 19.** Regresa a **xiao-esp32c3.yaml**, copia la clave de cifrado, pégala dentro del cuadro de diálogo anterior y haz clic en **SUBMIT**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/26.png" /></div>

- **Paso 20.** Haz clic en **FINISH**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/27.png" /></div>

## Módulos Grove con ESPHome y Home Assistant

¡Ahora conectaremos módulos Grove al Seeed Studio XIAO ESP32C3 para poder mostrar datos de sensores o controlar dispositivos usando Home Assistant!

### Conectar Módulos Grove al XIAO ESP32C3

Para usar módulos Grove con el Seeed Studio XIAO ESP32C3, utilizaremos un [Grove Shield para Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) y conectaremos el XIAO ESP32C3 en él.

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png" /></div>

Después de eso, los conectores Grove en la placa se pueden usar para conectar módulos Grove

### Definiciones de Pines

Necesitas seguir la tabla a continuación para usar los números de pin internos apropiados al conectar los módulos Grove a los conectores Grove en el Grove Shield para Seeed Studio XIAO.

| Número de Pin Interno  | Mapeo de Pin  |
|--- |--- |
| 2  | D0  |
| 3  | D1  |
| 4  | D2  |
| 5  | D3  |
| 6  | D4  |
| 7  | D5  |
| 21  | D6  |
| 20  | D7  |
| 8  | D8  |
| 9  | D9  |
| 10  | D10  |
| 6  | SDA  |
| 7  | SCL  |

Por ejemplo, si quieres conectar un módulo Grove al puerto **D0**, necesitas definir el pin en ESPHome como **2**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png" /></div>

### Lista de Compatibilidad de Grove con ESPHome

Actualmente los siguientes módulos Grove son compatibles con ESPHome

<table>
<thead>
  <tr>
    <th>Grove</th>
    <th>Categoría</th>
    <th>Componentes de ESPHome</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - Sensor de Polvo Láser PM2.5</a></td>
    <td>Gas</td>
    <td><a href="https://esphome.io/components/sensor/hm3301">El Sensor Grove - Láser PM2.5 (HM3301)</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - Sensor ambiental todo en uno SEN55</a>, NOx, PM, VOC, RH, Temp</td>
    <td>Gas</td>
    <td><a href="https://esphome.io/components/sensor/sen5x.html">Sensor Ambiental Serie Sen5x</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - Sensor ambiental todo en uno SEN54</a>, PM, VOC, RH, Temperatura</td>
    <td>Gas</td>
    <td><a href="https://esphome.io/components/sensor/sen5x.html">Sensor Ambiental Serie Sen5x</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - Sensor de Gas VOC y eCO2 - SGP30</a></td>
    <td>Gas</td>
    <td><a href="https://esphome.io/components/sensor/sgp30.html">Sensor SGP30 de CO₂ y Compuestos Orgánicos Volátiles</a></td>
  </tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html">Grove - Sensor de Gas VOC (SGP40)</a></td>
  <td>Gas</td>
  <td><a href="https://esphome.io/components/sensor/sgp4x.html">Sensor de Compuestos Orgánicos Volátiles SGP40 y Sensor de VOC y NOx SGP41</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html">Grove - Sensor de Formaldehído (SFA30) - Sensor HCHO</a></td>
  <td>Calidad del Aire</td>
  <td><a href="https://esphome.io/components/sensor/sfa30.html">Sensor de Formaldehído SFA30</a></td>
</tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - Pantalla de 4 Dígitos</a></td>
    <td>Pantalla</td>
    <td><a href="https://esphome.io/components/display/tm1637.html">Pantalla de 7 Segmentos TM1637</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - Servo</a></td>
    <td>Actuador</td>
    <td><a href="https://esphome.io/components/servo.html">Componente Servo</a></td>
  </tr>
  <tr>
  <td><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-TB6612FNG-p-3220.html">Grove - Controlador de Motor I2C (TB6612FNG)</a></td>
  <td>Actuador</td>
  <td><a href="https://esphome.io/components/grove_tb6612fng.html">Controlador de Motor Grove TB6612FNG</a></td>
</tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-RTC-DS1307.html">Grove - DS1307 RTC (Reloj de Tiempo Real) para Arduino</a></td>
    <td>Tiempo</td>
    <td><a href="https://esphome.io/components/time/">Componente de Tiempo</a></td>
  </tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-High-Precision-RTC.html">Grove - RTC de Alta Precisión (DS1307)</a></td>
  <td>Tiempo</td>
  <td><a href="https://esphome.io/components/time/">Componente de Tiempo</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - Tira LED RGB WS2813 Impermeable - 30 LED/m - 1m</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - Tira LED RGB WS2813 Impermeable - 60 LED/m - 1m</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - Anillo LED RGB (20 - WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - Barra LED RGB (10 - WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - Anillo LED RGB (24-WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - LED RGB (WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - Barra LED RGB (20-WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - Anillo LED RGB (16-WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - Barra LED RGB (15-WS2813 Mini)</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - Anillo LED RGB Ultimate</a></td>
  <td>Luz</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">Luz NeoPixelBus</a></td>
</tr>
</tbody>
</table>

Ahora seleccionaremos 6 módulos Grove de la tabla anterior y explicaremos cómo se pueden conectar con ESPHome y Home Assistant.

### Grove - Sensor de Temperatura y Humedad (AHT20)

#### Configuración de Instalación

- **Paso 1.** Conecta el [Grove - Sensor de Temperatura y Humedad (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) a uno de los conectores I2C en el Grove Shield para Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos anteriormente, añade lo siguiente al final del archivo y envíalo por OTA al XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    variant: AHT20
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Puedes aprender más sobre el **componente AHT10** [aquí](https://esphome.io/components/sensor/aht10.html). Te permite usar sensores basados en **AHT10, AHT20** y **AHT21**. Aquí agregamos el componente [Bus I²C](https://esphome.io/components/i2c.html) porque el AHT20 se comunica usando el protocolo I2C.

#### Visualizar en el Panel de Control

- **Paso 1.** En la página **Resumen** de Home Assistant, haz clic en los **3 puntos** y haz clic en **Editar Panel de Control**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png" /></div>

- **Paso 2.** Haz clic en **+ AGREGAR TARJETA**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png" /></div>

- **Paso 3.** Selecciona **Por ENTIDAD**, escribe **temperature** y selecciona la **casilla de verificación** junto a **Temperature**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png" /></div>

- **Paso 4.** Repite lo mismo para **Humidity**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png" /></div>

- **Paso 5.** Haz clic en **CONTINUAR**

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png" /></div>

- **Paso 6.** Haz clic en **AGREGAR AL PANEL DE CONTROL**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png" /></div>

Ahora tu panel de control de Home Assistant se verá como se muestra a continuación

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png" /></div>

- **Paso 7.** También puedes visualizar los datos del sensor como medidores. Haz clic en **Gauge** bajo **POR TARJETA**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png" /></div>

- **Paso 8.** Selecciona **Temperature** del menú desplegable

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png" /></div>

- **Paso 9.** Haz clic en **GUARDAR**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png" /></div>

- **Paso 10.** Repite lo mismo para **Humidity**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png" /></div>

Ahora tu panel de control se verá como se muestra a continuación

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png" /></div>

Para el **Grove - Sensor de Gas VOC y eCO2 (SGP30)** y **Grove - Sensor de CO2, Temperatura y Humedad (SCD41)** en este wiki, puedes seguir un procedimiento similar para visualizar los datos del sensor en el panel de control

### Grove - Sensor de Gas VOC y eCO2 (SGP30)

#### Configurar la configuración

- **Paso 1.** Conecta el [Grove - Sensor de Gas VOC y eCO2 (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) a uno de los conectores I2C en el Grove Shield para Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, agrega lo siguiente al final del archivo y envíalo OTA al XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: sgp30
    eco2:
      name: "eCO2"
      accuracy_decimals: 1
    tvoc:
      name: "TVOC"
      accuracy_decimals: 1
```

Puedes aprender más sobre el **componente SGP30** [aquí](https://esphome.io/components/sensor/sgp30.html).

### Grove - Sensor de CO2, Temperatura y Humedad (SCD41)

#### Configuración de instalación

- **Paso 1.** Conecta el [Grove - Sensor de CO2, Temperatura y Humedad (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) a uno de los conectores I2C en el Grove Shield para Seeed Studio XIAO

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos anteriormente, añade lo siguiente al final del archivo y envíalo por OTA al XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: scd4x
    co2:
      name: "CO2"
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Puedes aprender más sobre el **componente SGP4x** [aquí](https://esphome.io/components/sensor/scd4x.html)

### Grove - Relay

#### Configuración de instalación

- **Paso 1.** Conecta [Grove - Relay](https://www.seeedstudio.com/Grove-Relay.html) a uno de los puertos **Digital** en el Grove Shield para Seeed Studio XIAO. Aquí seleccionamos el puerto **D0**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, añade lo siguiente al final del archivo y envíalo OTA al XIAO ESP32C3

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

Puedes aprender más sobre el **componente Relay** [aquí](https://esphome.io/cookbook/relay.html)

#### Visualizar en el Panel de Control

- **Paso 1.** Bajo **+ ADD CARD** que mencionamos antes, selecciona **BY ENTITY**, escribe **relay**, selecciónalo y haz clic en **CONTINUE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png" /></div>

- **Paso 2.** Haz clic en **ADD TO DASHBOARD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png" /></div>

Ahora puedes encender/apagar el relé **ON/OFF** usando el interruptor de palanca

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg" /></div>

### Grove - mini sensor de movimiento PIR

#### Configurar la configuración

- **Paso 1.** Conecta el [Grove - mini sensor de movimiento PIR](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) a uno de los puertos **Digital** en el Grove Shield para Seeed Studio XIAO. Aquí seleccionamos el puerto **D0**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos antes, añade lo siguiente al final del archivo y envíalo OTA al XIAO ESP32C3

```sh
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```

Puedes aprender más sobre el **componente PIR** [aquí](https://esphome.io/cookbook/pir.html)

#### Visualizar en el Panel de Control

- **Paso 1.** Bajo **+ ADD CARD** que mencionamos antes, selecciona **BY ENTITY**, escribe **pir**, selecciónalo y haz clic en **CONTINUE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png" /></div>

- **Paso 2.** Haz clic en **ADD TO DASHBOARD**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png" /></div>

Ahora si se detecta movimiento, se mostrará como **Detected**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png" /></div>

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
