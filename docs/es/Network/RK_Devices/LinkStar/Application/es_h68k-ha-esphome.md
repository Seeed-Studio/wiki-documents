---
description: Construyendo un centro de control de hogar inteligente alrededor de Home Assistant
title: Construyendo un centro de control de hogar inteligente alrededor de Home Assistant
keywords:
  - LinkStar
  - Getting started
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/h68k-ha-esphome
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

<p><meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" /></p>

# Construyendo un centro de control de hogar inteligente alrededor de Home Assistant

En este artículo, detallaremos cómo configurar Home Assistant en el nuevo producto LinkStar H68K de Seeed Studio y desplegar el entorno ESPHome. ESPHome es un servicio muy común en Home Assistant. Debido a las limitaciones del sistema de enrutamiento por software, usaremos ESPHome como ejemplo para guiarte a través de un método inteligente para instalar este servicio.

## Comenzando

Si quieres seguir este tutorial completamente, necesitarás preparar lo siguiente.

<table align="center">
 <tr>
     <th>LinkStar H68K con Wi-Fi 6</th>
      <th>reRouter CM4 1432 (Opcional)</th>
      <th>XIAO ESP32C3</th>
 </tr>
  <tr>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg"/></div></td>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png"/></div></td>
      <td><div align="center"><img width ={100} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
  </tr>
 <tr>
      <td align = "center"><a href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html">Obtener Uno Ahora</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html">Obtener Uno Ahora</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">Obtener Uno Ahora</a></td>
 </tr>
</table>

*El reRouter CM4 1432 también es compatible con este tutorial. Puedes comprar LinkStar o reRouter.

El objetivo de este proyecto es instalar Home Assistant y ESPHome usando el servicio Docker de LinkStar, y luego configurar un punto de acceso LinkStar para conectarse a LinkStar usando las capacidades WiFi del XIAO ESP32C3 para completar la red.

Luego, combinado con el vasto ecosistema Grove, puedes crear aún más posibilidades en Home Assistant.

El contenido de este tutorial pasará ampliamente por los siguientes pasos.

1. [Configurar el entorno Docker en LinkStar OpenWRT](#configure-home-assistant-panel)
2. [Instalación y configuración de Home Assistant, ESPHome](#installation-and-configuration-of-home-assistant-esphome)
3. [Agregar Seeed Studio XIAO ESP32C3 a ESPHome](#add-seeed-studio-xiao-esp32c3-to-esphome)
4. [Módulos Grove con ESPHome y Home Assistant](#grove-modules-with-esphome-and-home-assistant)

## Configurar el entorno Docker en LinkStar OpenWRT

### Paso 1. Instalar OpenWRT para LinkStar

Hemos detallado cómo instalar varios sistemas para LinkStar en el Wiki de LinkStar. En este tutorial, tomaremos el sistema OpenWRT como ejemplo y explicaremos cómo instalar el Contenedor de Home Assistant mientras aseguramos que LinkStar actúe como una ruta suave.

- [Flashear OpenWRT a la tarjeta TF](https://wiki.seeedstudio.com/es/linkstar-install-system/#flash-openwrt-to-the-tf-card)
- [Flashear OpenWRT a eMMC](https://wiki.seeedstudio.com/es/linkstar-install-system/#flash-openwrt-to-emmc)

Por favor selecciona arriba la ubicación del sistema donde te gustaría instalar OpenWRT para LinkStar.

### Paso 2. Configurar la red LinkStar

Por favor conecta a LinkStar a través de un cable de red e ingresa la dirección IP: `192.168.100.1` en tu navegador para acceder al backend operativo de OpenWRT.

La contraseña de cuenta inicial es:

```
Account: root
Password: password
```

A continuación necesitamos conectar LinkStar a internet.

Necesitas comprar un LinkStar con redes inalámbricas, por lo que puedes elegir conectar un cable de red al LinkStar o a WiFi.

- Si es una red cableada, por favor configura tu red según las instrucciones de tu operador de red.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/53.png"/></div>

- Si quieres usar una LAN inalámbrica, puedes buscar una red en las opciones de **Wireless**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/54.png"/></div>

Después de eso, simplemente ingresa tu contraseña de red, haz clic en **Save and Apply**.

Asegúrate de tener un buen estado de red antes de continuar con los siguientes pasos.

### Paso 3. Asignar más espacio a Docker

Por defecto, docker tiene solo unos 250MB de tamaño, lo cual no es suficiente para instalar la imagen, así que primero necesitamos expandir la capacidad para Docker.

Haz clic en **System** --> **Disk Man** --> **EDIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/1.png"/></div>

En la última línea, escribe el tamaño del espacio de almacenamiento a agregar en la columna END SECTOR. En mi caso, es `+20G`. Luego haz clic en el botón **NEW**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/2.png"/></div>

Elige el formato **ext4**, luego haz clic en el botón **FORMAT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/4.png"/></div>

Cuando esté listo, verás que se agregó un nuevo espacio de 20GB. Sin embargo, ahora es un espacio libre, necesitas montarlo en Docker.

Luego elige **System** --> **Mount Points**, encuentra la sección **Mount Point**, haz clic en el botón **ADD**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/5.png"/></div>

Elige el nuevo espacio que acabas de crear.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/6.png"/></div>

Elige el Mount Point **Use as Docker data (/opt)**. No olvides marcar la casilla **Enable this mount**, luego haz clic en el botón **SAVE & APPLY**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/7.png"/></div>

Todas las configuraciones para la expansión están completas, solo necesitas reiniciar para que sea válido.

Elige **System** --> **Reboot**, haz clic en el botón **PERFORM REBOOT**. Espera a que OpenWRT se reinicie e inicia sesión nuevamente.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/8.png"/></div>

## Instalación y configuración de Home Assistant, ESPHome

### Paso 4. Instalar Home Assistant con Docker

Una mejor manera de instalar Home Assistant en OpenWRT es hacerlo en Docker, lo cual asegura que LinkStar sea estable como una ruta suave y también permite que Home Assistant sea desplegado.

Entonces todo lo que necesitamos hacer es descargar la imagen específica de Home Assistant. Esta imagen nos servirá bien para instalar el servicio ESPHome más adelante.

```
homeassistant/qemuarm-64-homeassistant:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/12.png"/></div>

Usamos la imagen descargada para crear un Contenedor.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/11.png"/></div>

En la página donde se crea el contenedor, necesitamos hacer algunas configuraciones simples.

- Container Name: el nombre de tu contenedor
- Docker Image: elige la imagen **qemuarm-64-homeassistant** recién descargada
- Network: elige el modo **host**
- Environment Variables(-e): tu variable de entorno

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/13.png"/></div>

Una vez que hayas completado lo anterior, guarda y aplica. Verás que el Contenedor ha sido creado. Vamos a iniciarlo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/14.png"/></div>

### Paso 5. Instalar ESPHome con Docker

Como estamos instalando el Contenedor de Home Assistant, no podemos simplemente descargar el servicio ESPHome a través de la tienda de Add-on, por lo que se necesita una solución alternativa.

Repitiendo los pasos anteriores, descargamos la imagen de ESPHome.

```
esphome/esphome:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png"/></div>

En la página donde se crea el contenedor, necesitamos hacer algunas configuraciones simples.

- Container Name: el nombre de tu contenedor
- Docker Image: elige la imagen **esphome** recién descargada
- Network: elige el modo **host**
- Environment Variables(-e): tu variable de entorno

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png"/></div>

Una vez que hayas completado lo anterior, guarda y aplica. Verás que el Contenedor ha sido creado. También necesitas iniciarlo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png"/></div>

### Paso 6. Agregar el servicio ESPHome a Home Assistant

Para lograr el mismo efecto que descargar ESPHome en Home Assistant, necesitamos modificar el archivo de configuración bajo Home Assistant.

Ve al Contenedor de Home Assistant.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png"/></div>

Vamos al terminal en Home Assistant.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png"/></div>

Ingresa el siguiente comando en el terminal.

```sh
vi configuration.yaml
```

Añade el siguiente contenido al final de `configuration.yaml`.

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

Salga del contenedor docker escribiendo ```exit``` en el shell del contenedor de Home Assistant. Una vez hecho esto, reiniciamos el contenedor de Home Assistant.

Cree una nueva página del navegador, ingrese la dirección IP `192.168.100.1:8123` y registre su cuenta de Home Assistant y verá que ESPHome aparece en la barra de herramientas de la izquierda.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png"/></div>

## Agregar Seeed Studio XIAO ESP32C3 a ESPHome

- **Paso 1.** Haga clic en **+ NEW DEVICE**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png"/></div>

- **Paso 2.** Haga clic en **CONTINUE**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png"/></div>

- **Paso 3.** Ingrese un **Nombre** para el dispositivo e ingrese las credenciales de WiFi como **Nombre de red** y **Contraseña**. Luego haga clic en **NEXT**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png"/></div>

- **Paso 4.** Seleccione **ESP32-C3** y haga clic

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png"/></div>

- **Paso 5.** Haga clic en **SKIP** porque configuraremos esta placa manualmente

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png"/></div>

- **Paso 6.** Haga clic en **EDIT** debajo de la placa recién creada

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png"/></div>

- **Paso 7.** Esto abrirá un archivo **YAML** y este archivo se utilizará para establecer todas las configuraciones de la placa. Edite el contenido bajo **esp32** de la siguiente manera

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**Nota:** Aquí estamos usando la versión más reciente de [Arduino core para ESP32](https://github.com/espressif/arduino-esp32/releases) y [soporte ESP32 para PlatformIO](https://github.com/platformio/platform-espressif32/releases)

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png"/></div>

- **Paso 8.** luego, por favor haz clic en el botón **Save** en la esquina superior derecha.

LinkStar H68K no soporta el reconocimiento de dispositivos MCU externos, necesitamos descargar primero el firmware compilado y luego subir el firmware a través de otra PC.

- **Paso 9.** Haz clic en el botón **Install** en la esquina superior derecha. Luego selecciona el último elemento **Manual download**.

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png"/></div>

- **Paso 10.** Selecciona **Modern format**.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png"/></div>

Luego tomará mucho tiempo descargar y compilar, así que por favor ten paciencia. Una vez que todo esté listo, el firmware se descargará automáticamente a tu computadora.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png"/></div>

- **Paso 11.** Para subir el firmware al XIAO ESP32C3 hay un par de opciones aquí mostramos 2 formas de hacerlo:

  - Opción 1: usando la [herramienta web ESPhome](https://web.esphome.io/?dashboard_install) para subir.

Asegúrate de tener los controladores correctos instalados. A continuación están los controladores para chips comunes usados en dispositivos ESP.

1. Controladores CP2102: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
2. Controladores CH342, CH343, CH9102: [Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)
3. Controladores CH340, CH341: [Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

Abre la [herramienta web ESPhome](https://web.esphome.io/?dashboard_install) con el navegador web Chrome o Edge.

Haz clic en **CONNECT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png"/></div>

selecciona el puerto serie del XIAO ESP32 en la ventana emergente.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png"/></div>

Haz clic en **INSTALL** y luego selecciona el archivo `.bin` descargado de los pasos anteriores.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png"/></div>

- Opción 2: Usando la [herramienta esphome-flasher](https://github.com/esphome/esphome-flasher).

Si aún no puedes subir el firmware usando el método uno después de instalar el controlador y cambiar navegadores, entonces puedes intentar usar el método dos. Por favor consulta el tutorial oficial para métodos de instalación específicos e instrucciones.

:::tip
Si deseas observar los mensajes de registro del XIAO ESP32C3, también puedes verlos a través del botón View Logs de este software.
<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png"/></div>
:::

Una vez que la subida esté completa, puedes desconectar el XIAO ESP32C3 de la PC (a menos que tengas necesidad de ver los registros) y simplemente alimentar el XIAO por separado.

Si todo va bien, el XIAO ESP32C3 buscará y se conectará al WiFi que has configurado para él.

Como yo, uso la red de LinkStar H68K. Puedes encontrarla en las opciones de red y ver la dirección IP asignada por LinkStar H68K.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png"/></div>

- **Paso 12.** Si ves el estado de la placa como **ONLINE**, eso significa que la placa se conectó exitosamente al WiFi

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png"/></div>

- **Paso 13.** Conectar al XIAO ESP32C3

Si no tienes muchos dispositivos Home Assistant en tu LAN, Home Assistant puede buscar automáticamente y agregar tus dispositivos ESP a la pestaña Devices. Puedes ver este dispositivo dentro de la pestaña **Devices & Services** en **Settings**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png"/></div>

Si no busca automáticamente, también puedes conectarte al XIAO ESP32C3 basándote en su dirección IP.

Haz clic en **ADD INTEGRSTION** y busca **esphome**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png"/></div>

Luego ingresa la dirección IP del XIAO ESP32C3 con el número de puerto **6053**. Luego haz clic en **SUBMIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png"/></div>

Si la dirección IP y el número de puerto ingresados son correctos, entonces verás que se te pide ingresar la clave de encriptación, que pedimos guardar en el archivo yaml.

Luego haz clic en **SUBMIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png"/></div>

En este punto, los pasos para agregar el dispositivo se han completado exitosamente.

## Módulos Grove con ESPHome y Home Assistant

¡Ahora conectaremos módulos Grove al Seeed Studio XIAO ESP32C3 para poder mostrar datos de sensores o controlar dispositivos usando Home Assistant!

### Conectar Módulos Grove al XIAO ESP32C3

Para usar módulos Grove con el Seeed Studio XIAO ESP32C3, utilizaremos un [Grove Shield para Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) y conectaremos el XIAO ESP32C3 en él.

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png"/></div>

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

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png"/></div>

### Lista de Compatibilidad de Grove con ESPHome

Actualmente los siguientes módulos Grove son compatibles con ESPHome

<table>
<thead>
  <tr>
    <th>Módulo Grove</th>
    <th>Categoría</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - Sensor de Polvo Láser PM2.5</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - Sensor ambiental todo en uno SEN55</a>, NOx, PM, VOC, RH, Temp</td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - Sensor ambiental todo en uno SEN54</a>, PM, VOC, RH, Temperatura</td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html">Grove - Sensor de CO2, Temperatura y Humedad (SCD30)</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html">Grove - Sensor de CO2, Temperatura y Humedad - SCD41</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - Sensor de Gas VOC y eCO2 - SGP30</a></td>
    <td>Gas</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html">Grove - ADC de 4 Canales de 16 bits (ADS1115)</a></td>
    <td>ADC</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html">Grove - Sensor de Distancia Time of Flight (VL53L0X)</a></td>
    <td>Distancia</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html">Grove - Sensor de Distancia Ultrasónico</a></td>
    <td>Distancia</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html">Grove - Sensor de Temperatura y Humedad de Grado Industrial I2C AHT20</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">Grove - Sensor de Temperatura y Humedad V2.0 (DHT20)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html">Grove - Sensor de Temperatura y Humedad Pro (DHT22/AM2302)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html">Grove - Sensor de Temp, Humedad y Barómetro (BME280)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html">Grove - Sensor de Temperatura, Humedad, Presión y Gas para Arduino - BME680</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html">Grove Sensor de Temperatura y Barómetro (BMP280)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html">Sensor de Temperatura One Wire - DS18B20</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html">Grove - Sensor de Temperatura y Humedad (DHT11)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - Sensor de Temperatura I2C de Alta Precisión - MCP9808</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - Sensor de Temperatura y Humedad (SHT31)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank" rel="noopener noreferrer">Grove - Sensor de Temperatura y Humedad (SHT40)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener noreferrer">Grove - Sensor Barométrico de Alta Precisión (DPS310)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-MCP9600.html" target="_blank" rel="noopener noreferrer">Grove - Amplificador de Termopar I2C (MCP9600)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - Sensor de Color I2C V2</a></td>
    <td>Color</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - Sensor de Luz Digital - TSL2561</a></td>
    <td>Luz</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html">Grove - ADC para Celda de Carga (HX711)</a></td>
    <td>Peso</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html">Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V3 (MPR121)</a></td>
    <td>Capacitivo</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA9685.html">Grove - Controlador PWM de 16 Canales (PCA9685)</a></td>
    <td>PWM</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - Display de 4 Dígitos</a></td>
    <td>Display</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html">Grove - Display OLED 0.66" (SSD1306)</a></td>
    <td>Display</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Relay.html">Grove - Relé</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-SPDT-Relay-30A.html">Grove - Relé SPDT (30A)</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html">Grove - Relé de Estado Sólido V2</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html">Grove - Relé SPDT de 2 Canales</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor.html">Grove - Sensor de Movimiento PIR</a></td>
    <td>Movimiento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html">Grove - sensor de movimiento PIR mini</a></td>
    <td>Movimiento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html">Grove - Sensor de Movimiento PIR Digital (12m)</a></td>
    <td>Movimiento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - Servo</a></td>
    <td>Actuador</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank" rel="noopener noreferrer">Grove - Multiplexor I2C de 8 Canales/Hub I2C (TCA9548A)</a></td>
    <td>Multiplexor</td>
  </tr>
</tbody>
</table>

Ahora seleccionaremos 6 módulos Grove de la tabla anterior y explicaremos cómo se pueden conectar con ESPHome y Home Assistant.

### Grove - Sensor de Temperatura y Humedad (AHT20)

#### Configuración de Instalación

- **Paso 1.** Conecta el [Grove - Sensor de Temperatura y Humedad (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) a uno de los conectores I2C en el Grove Shield para Seeed Studio XIAO

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **Paso 2.** Dentro del archivo **xiao-esp32c3.yaml** que creamos anteriormente, añade lo siguiente al final del archivo y envíalo por OTA al XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Puedes aprender más sobre el **componente AHT10** [aquí](https://esphome.io/components/sensor/aht10.html). Te permite usar sensores basados en **AHT10, AHT20** y **AHT21**. Aquí agregamos el componente [Bus I²C](https://esphome.io/components/i2c.html) porque el AHT20 se comunica usando el protocolo I2C.

#### Visualizar en el Panel de Control

- **Paso 1.** En la página **Resumen** de Home Assistant, haz clic en los **3 puntos** y haz clic en **Editar Panel de Control**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png"/></div>

- **Paso 2.** Haz clic en **+ AGREGAR TARJETA**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png"/></div>

- **Paso 3.** Selecciona **POR ENTIDAD**, escribe **temperature** y selecciona la **casilla de verificación** junto a **Temperature**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png"/></div>

- **Paso 4.** Repite lo mismo para **Humidity**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png"/></div>

- **Paso 5.** Haz clic en **CONTINUAR**

<div align="center"><img width ={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png"/></div>

- **Paso 6.** Haz clic en **AGREGAR AL PANEL DE CONTROL**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png"/></div>

Ahora tu panel de control de Home Assistant se verá como se muestra a continuación

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png"/></div>

- **Paso 7.** También puedes visualizar los datos del sensor como medidores. Haz clic en **Gauge** bajo **POR TARJETA**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png"/></div>

- **Paso 8.** Selecciona **Temperature** del menú desplegable

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png"/></div>

- **Paso 9.** Haz clic en **GUARDAR**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png"/></div>

- **Paso 10.** Repite lo mismo para **Humidity**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png"/></div>

Ahora tu panel de control se verá como se muestra a continuación

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png"/></div>

Para el **Grove - Sensor de Gas VOC y eCO2 (SGP30)** y **Grove - Sensor de CO2, Temperatura y Humedad (SCD41)** en este wiki, puedes seguir un procedimiento similar para visualizar los datos del sensor en el panel de control

### Grove - Sensor de Gas VOC y eCO2 (SGP30)

#### Configurar la configuración

- **Paso 1.** Conecta el [Grove - Sensor de Gas VOC y eCO2 (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) a uno de los conectores I2C en el Grove Shield para Seeed Studio XIAO

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

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

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

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

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

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

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png"/></div>

- **Paso 2.** Haz clic en **ADD TO DASHBOARD**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png"/></div>

Ahora puedes encender/apagar el relé **ON/OFF** usando el interruptor de palanca

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg"/></div>

### Grove - mini sensor de movimiento PIR

#### Configurar la configuración

- **Paso 1.** Conecta el [Grove - mini sensor de movimiento PIR](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) a uno de los puertos **Digital** en el Grove Shield para Seeed Studio XIAO. Aquí seleccionamos el puerto **D0**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

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

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png"/></div>

- **Paso 2.** Haz clic en **ADD TO DASHBOARD**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png"/></div>

Ahora si se detecta movimiento, se mostrará como **Detected**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png"/></div>

## ¿Qué Sigue?

Felicitaciones, has aprendido a completar el despliegue de Home Assistant en LinkStar y puedes usar el plugin de ESPHome. Para cualquier cosa similar a no poder instalar un Contenedor de Home Assistant con Add-on, puedes usar este método para instalar otros plugins de Home Assistant.

¡También esperamos que te unas a nuestro equipo de creadores y nos traigas más ejemplos útiles!

Por supuesto, hay más en el XIAO ESP32C3 que solo soporte para el MR24HPCB1 en Home Assistant, y puedes encontrar más tutoriales para tu propio uso en este documento.

- [Conectar Módulos Grove a Home Assistant usando ESPHome (Odyssey)](https://wiki.seeedstudio.com/es/Connect-Grove-to-Home-Assistant-ESPHome/)
- [XIAO ESP32C3 accede a Home Assistant vía servicio ESPHome](https://wiki.seeedstudio.com/es/xiao-esp32c3-esphome/)

¡Deja fluir tu creatividad!

## Solución de Problemas

**FAQ1: Obtuve el siguiente error mientras subía firmware usando la herramienta Web de ESPhome, ¿cómo puedo solucionarlo?**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png"/></div>

> R: Si aparece esta advertencia mientras subes, desconecta el XIAO ESP32C3 de la PC. Luego, mantén presionado el BOTÓN BOOT, conecta la placa a tu PC mientras mantienes presionado el botón BOOT, y luego suéltalo para entrar al modo bootloader. En este punto es suficiente reconectar y subir el firmware nuevamente.

**FAQ2: No puedo instalar esphome flasher bajo Linux siguiendo el tutorial de esphome flasher?**

> R: Al ejecutar los siguientes comandos, necesitas seleccionar tu versión del sistema, de lo contrario ocurrirá un error. Por ejemplo, mi computadora es Ubuntu 22.04, entonces el comando que debería ejecutarse es el siguiente.

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

**FAQ3: Llené el WiFi y la contraseña correctos, ¿por qué no veo la dirección IP del XIAO ESP32C3?**

> R: Cuando encuentres este problema, por favor verifica que la antena del XIAO ESP32C3 esté conectada en su lugar. Si la antena ya está conectada, por favor asegúrate de que el XIAO no esté a más de 3m del LinkStar si es posible (a menos que hayas reemplazado la antena con una más potente).
Si aún no ves el XIAO, puedes usar el software [esphome flasher](https://github.com/esphome/esphome-flasher) para verificar la información de registro del XIAO y comprobar la conexión del XIAO a través de los registros.
Puedes volver a conectar el xiao para permitir que trate de buscar WiFi y conectarse nuevamente.

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
