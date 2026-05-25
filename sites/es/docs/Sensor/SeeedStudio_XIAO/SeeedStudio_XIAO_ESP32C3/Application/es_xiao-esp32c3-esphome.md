---
description: Accediendo a ESPHome con XIAO ESP32C3
title: XIAO ESP32C3 accede a Home Assistant a través del servicio ESPHome
keywords:
  - ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-esp32c3-esphome
sku: 113991054,101991030,102010633
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/xiao-esp32c3-esphome/
---

# XIAO ESP32C3 accede a Home Assistant a través del servicio ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:700, height:'auto'}}/></div>

Este artículo te guiará a través de la instalación del servicio ESPHome en tu propio entorno de Home Assistant. Al usar la función WiFi del XIAO ESP32C3, podrás conectar tu XIAO al Home Assistant como parte de tu terminal doméstico de una manera muy fluida.

Además, construiremos un Home Assistant con detección de presencia humana en combinación con el popular Módulo Lite de Presencia Estática Humana mmWave de 24GHz.

## Comenzando

:::tip
A partir del 31 de julio de 2023, el problema anterior que causaba que el radar se dañara completamente ahora ha sido solucionado, así que por favor actualiza los archivos de biblioteca y el configurador para que este tutorial funcione correctamente.
:::

Si quieres seguir este tutorial completamente, necesitarás preparar lo siguiente.

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>Módulo Lite de Presencia Estática<br />Humana mmWave de 24GHz</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

El objetivo final de este proyecto es desplegar el Módulo Lite de Presencia Estática Humana mmWave de 24GHz en Home Assistant.

Hemos escrito archivos de configuración y bibliotecas completos para el Módulo Lite de Presencia Estática Humana mmWave de 24GHz para facilitar tu despliegue rápido del sensor en Home Assistant en este proyecto.

El contenido de este tutorial cubrirá ampliamente los siguientes pasos.

1. [Selecciona tu entorno de Home Assistant](#select-your-home-assistant-environment)
2. Instalar y configurar ESPHome en Home Assistant
3. [Configurar la conexión entre XIAO ESP32C3 y ESPHome](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [Configurar el Panel de Home Assistant](#configure-home-assistant-panel)

Por supuesto, si estás interesado en cómo el XIAO ESP32C3 usa Grove en Home Assistant, puedes leer este capítulo directamente.

- [Conectar Grove a Home Assistant usando XIAO ESP32C3](#connect-grove-to-home-assistant-using-xiao-esp32c3)

## Selecciona tu entorno de Home Assistant

En esta rutina, no expandiremos sobre cómo instalar el entorno de Home Assistant, asumiremos que ya tienes un dispositivo Home Assistant funcionando.

Si deseas aprender cómo instalar Home Assistant, entonces puedes consultar el [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos encarecidamente que instales Home Assistant usando un dispositivo x86 ya que esta es la forma más amigable para el usuario de instalar Home Assistant con Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

Según la tabla anterior, es más apropiado instalar **Home Assistant OS** y **Home Assistant Supervised**, lo cual te quitará muchas molestias de encima. Si estás ejecutando Home Assistant en Docker con OpenWRT (por ejemplo, usando LinkStar H68K), por favor no te preocupes, también te proporcionaremos una referencia detallada sobre cómo hacer esto.

También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- [Comenzando con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)
- [Comenzando con Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)
- [Comenzando con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)

## Instalar ESPHome en Home Assistant

### Paso 1. Instalar ESPHome

- **Escenario 1: instalación de ESPHome bajo Home Assistant OS (con Add-on Store)**

Si tienes Home Assistant OS instalado, tiene un Add-on Store, lo cual hace mucho más fácil instalar ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

En el Add-on Store, puedes buscar e instalar ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

- **Escenario 2: ESPHome instalado bajo Home Assistant bajo Docker de OpenWRT/Docker (sin Add-on Store)**

Como estamos instalando el Contenedor de Home Assistant, no podemos simplemente descargar el servicio ESPHome a través del Add-on Store, por lo que se necesita una solución alternativa.

Necesitamos descargar la imagen de ESPHome.

```
esphome/esphome:latest
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png" /></div>

En la página donde se crea el contenedor, necesitamos hacer algunas configuraciones simples.

- Container Name: el nombre de tu contenedor
- Docker Image: elige la imagen **esphome** recién descargada
- Network: elige el modo **host**
- Environment Variables(-e): tu variable de entorno

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png" /></div>

Una vez que hayas completado lo anterior, guarda y aplica. Verás que el Contenedor ha sido creado. También necesitas iniciarlo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png" /></div>

Para lograr el mismo efecto que descargar ESPHome en Home Assistant, necesitamos modificar el archivo de configuración bajo Home Assistant.

Ve al Contenedor de Home Assistant.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png" /></div>

Vamos al terminal en Home Assistant.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png" /></div>

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

Sal del contenedor docker escribiendo ```exit``` en el shell del contenedor de Home Assistant. Una vez hecho esto, reiniciamos el contenedor de Home Assistant.

Crea una nueva página del navegador, ingresa la dirección `http://homeassistant:8123/` e ingresa tu cuenta de Home Assistant y verás que ESPHome aparece en la barra de herramientas de la izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png" /></div>

## Configurar la conexión entre XIAO ESP32C3 y ESPHome

### Paso 2. Preparación del hardware

El objetivo de nuestro tutorial es poder ver la información de datos del Módulo de Presencia Estática Humana mmWave de 24GHz Lite en el panel de Home Assistant.

Conecta el dispositivo a la computadora a través de la placa principal. El diagrama de cableado se muestra en la tabla a continuación.

<div class="table-center">
<table align="center">
  <tbody>
    <tr>
      <td colspan="3"><div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">XIAO ESP32C3</td>
      <td align="center" />
      <td align="center">Módulo de Presencia Estática<br />Humana mmWave de 24GHz Lite</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--></td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--></td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td align="center">--></td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">D3</td>
      <td align="center">--></td>
      <td align="center">TX</td>
    </tr>
  </tbody></table>
</div>

### Paso 3. Mantener el XIAO ESP32C3 y Home Assistant en la misma LAN

Estoy seguro de que tu Home Assistant ya ha realizado el trabajo de conectarse a la red, por ejemplo conectándose a tu dispositivo a través de un cable de red. Todo lo que necesitas hacer entonces es simplemente activar una red local (por ejemplo WiFi) para que el XIAO ESP32C3 también pueda conectarse a esta red.

Usaré el LinkStar H68K como ejemplo a continuación. Mi objetivo es conseguir que el XIAO se conecte al punto de acceso del LinkStar H68K.

En la pestaña **Network** en OpenWRT, selecciona **Wireless** --> **ADD**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/58.png" /></div>

Para **Transmit Power** en **Device Configuration**, selecciona **auto**.

Para la configuración de **Interface Configuration**, por favor completa las siguientes instrucciones.

- General Setup
  - Mode: Depende de cómo LinkStar accede a internet. Si estás usando una conexión por cable entonces selecciona **Client**, si estás conectado a WiFi entonces selecciona **Access Point**.
  - ESSID: Introduce el nombre de tu WiFi, por favor trata de no tener espacios o caracteres especiales.
  - Network: marca **lan**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/23.png" /></div>

- Wireless Security
  - Encryption: WPA2-PSK
  - Key: Introduce la contraseña WiFi que deseas establecer.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/24.png" /></div>

Una vez que hayas completado la información anterior, haz clic en **Save and Apply** en la esquina inferior derecha y espera unos momentos para que LinkStar abra un punto de acceso.

Cuando ningún dispositivo esté conectado a este punto de acceso, se mostrará como sin señal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/60.png" /></div>

Considerando todo, regresemos a la página de Home Assistant.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" /></div>

Haz clic en **NEW DEVICE**. Luego haz clic en **Continue**.

Bajo la nueva ventana emergente, por favor introduce el nombre de la aplicación que deseas configurar, así como el nombre y contraseña del punto de acceso que has configurado en LinkStar (O tu propio WiFi). Asegúrate de que el XIAO ESP32C3 y Home Assistant estén en la **misma LAN**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/25.png" /></div>

Luego haz clic en **Next**.

En el tipo de dispositivo, por favor selecciona **ESP32-C3**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" /></div>

Luego haz clic en **Next**.

<span id="jump1">Haz clic en la <strong>Encryption key</strong> y guárdala en un lugar seguro, usaremos esta clave en un paso posterior.</span>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" /></div>

Luego haz clic en **SKIP**.

### Paso 4. Cambiar el archivo yaml de configuración del XIAO ESP32C3

Luego, hacemos clic en la pestaña del dispositivo que acabamos de crear, con el botón **EDIT** en la esquina inferior izquierda.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/28.png" /></div>

Por favor ten en cuenta que necesitamos hacer cambios a este archivo yaml. Hemos dividido el contenido a modificar en dos partes principales, correspondientes a uno y dos en el diagrama de abajo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.png" /></div>

- En el **①** del contenido, por favor no cambies el nombre del dispositivo excepto el que has configurado, por favor consulta el código de abajo para el resto del contenido.

```css
# part 1:
substitutions:
  name: "xiao-esp32c3"
  friendly_name: "XIAO ESP32C3"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "seeedstudio.mmwave_kit"
    version: "2.0"
  platformio_options:
    board_build.flash_mode: dio
    board_build.mcu: esp32c3

external_components:
  - source: github://limengdu/mmwave-kit-external-components@main
    refresh: 0s

esp32:
  board: esp32-c3-devkitm-1
  variant: esp32c3
  framework:
    type: esp-idf

# Enable logging
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG
```

- En el **②** del contenido, copia el siguiente código después de `captive_portal:`.

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```yml
# Sets up Bluetooth LE (Only on ESP32) to allow the user
# to provision wifi credentials to the device.
esp32_improv:
  authorizer: none

# Sets up the improv via serial client for Wi-Fi provisioning.
# Handy if your device has a usb port for the user to add credentials when they first get it.
# improv_serial: # Commented until improv works with usb-jtag on idf

uart:
  id: uart_bus
  baud_rate: 115200
  rx_pin: 4
  tx_pin: 5
  parity: NONE
  stop_bits: 1

seeed_mr24hpc1:
  id: my_seeed_mr24hpc1

text_sensor:
  - platform: seeed_mr24hpc1
    heart_beat:
      name: "Heartbeat"
    product_model:
      name: "Product Model"
    product_id:
      name: "Product ID"
    hardware_model:
      name: "Hardware Model"
    hardware_version:
      name: "Hardware Version"
    keep_away:
      name: "Active Reporting Of Proximity"
    motion_status:
      name: "Motion Information"
    custom_mode_end:
      name: "Custom Mode Status"

binary_sensor:
  - platform: seeed_mr24hpc1
    has_target:
      name: "Presence Information"

sensor:
  - platform: seeed_mr24hpc1
    custom_presence_of_detection:
      name: "Static Distance"
    movement_signs:
      name: "Body Movement Parameter"
    custom_motion_distance:
      name: "Motion Distance"
    custom_spatial_static_value:
      name: "Existence Energy"
    custom_spatial_motion_value:
      name: "Motion Energy"
    custom_motion_speed:
      name: "Motion Speed"
    custom_mode_num:
      name: "Current Custom Mode"

switch:
  - platform: seeed_mr24hpc1
    underlying_open_function:
      name: Underlying Open Function Info Output Switch

button:
  - platform: seeed_mr24hpc1
    restart:
      name: "Module Restart"
    custom_set_end:
      name: "End Of Custom Mode Settings"

select:
  - platform: seeed_mr24hpc1
    scene_mode:
      name: "Scene"
    unman_time:
      name: "Time For Entering No Person State (Standard Function)"
    existence_boundary:
      name: "Existence Boundary"
    motion_boundary:
      name: "Motion Boundary"

number:
  - platform: seeed_mr24hpc1
    sensitivity:
      name: "Sensitivity"
    custom_mode:
      name: "Custom Mode"
    existence_threshold:
      name: "Existence Energy Threshold"
    motion_threshold:
      name: "Motion Energy Threshold"
    motion_trigger:
      name: "Motion Trigger Time"
    motion_to_rest:
      name: "Motion To Rest Time"
    custom_unman_time:
      name: "Time For Entering No Person State (Underlying Open Function)"
```

</details>

Luego, haz clic en el botón **Guardar** en la esquina superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/63.png" /></div>

### Paso 5. Subir firmware al XIAO ESP32C3

- **Método 1: Compilar y subir directamente**

Si estás usando un dispositivo x86 y puedes ver el XIAO en el puerto del dispositivo, entonces puedes compilar y subir el programa al XIAO.

Conecta el XIAO a tu dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ESPHome/49.png" style={{width:700, height:'auto'}}/></div>

Haz clic en los tres puntos en la esquina inferior derecha de la barra del dispositivo y selecciona **Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/84.png" /></div>

Haz clic en **Plug into the computer running ESPHome Dashboard**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/85.png" /></div>

Selecciona el puerto conectado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

Ahora descargará todos los paquetes de placa necesarios y grabará el firmware de ESPHome en el XIAO ESP32C3. Si la grabación es exitosa, verás la siguiente salida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

Si no puedes encontrar el puerto después de conectar el XIAO a tu dispositivo, entonces puedes intentar usar el segundo método.

- **Método 2: Subir firmware compilado usando el host**

Los routers suaves como LinkStar H68K no soportan el reconocimiento de dispositivos MCU externos, necesitamos descargar primero el firmware compilado y luego subir el firmware a través de otra PC.

Haz clic en el botón **Install** en la esquina superior derecha. Luego selecciona el último elemento **Manual download**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png" /></div>

Selecciona **Modern format**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" /></div>

Luego tomará mucho tiempo descargar y compilar, así que ten paciencia. Una vez que todo esté listo, el firmware se descargará automáticamente a tu computadora.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png" /></div>

Para subir el firmware al XIAO ESP32C3 hay un par de opciones, aquí mostramos 2 formas de hacerlo:

- Opción 1: usando la [herramienta web de ESPhome](https://web.esphome.io/?dashboard_install) para subir.

Asegúrate de tener los controladores correctos instalados. A continuación están los controladores para chips comunes usados en dispositivos ESP.

1. Controladores CP2102: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

2. Controladores CH342, CH343, CH9102: [Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)

3. Controladores CH340, CH341: [Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

Abre la [herramienta web de ESPhome](https://web.esphome.io/?dashboard_install) con el navegador Chrome o Edge.

Haz clic en **CONNECT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

selecciona el puerto serie del XIAO ESP32 en la ventana emergente.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

Haz clic en **INSTALL** y luego selecciona el archivo `.bin` descargado de los pasos anteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- Opción 2: Usando la [herramienta esphome-flasher](https://github.com/esphome/esphome-flasher).

Si aún no puedes subir el firmware usando el método uno después de instalar el controlador y cambiar navegadores, entonces puedes intentar usar el método dos. Por favor consulta el tutorial oficial para métodos de instalación específicos e instrucciones.

:::tip
Si deseas observar los mensajes de registro del XIAO ESP32C3, también puedes verlos a través del botón View Logs de este software.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

Una vez que la subida esté completa, puedes desconectar el XIAO ESP32C3 de la PC (a menos que tengas necesidad de ver los registros) y simplemente alimentar el XIAO por separado.

Si todo va bien, el XIAO ESP32C3 buscará y se conectará al WiFi que has configurado para él.

Como yo, uso la red de LinkStar H68K. Puedes encontrarla en las opciones de red y ver la dirección IP asignada por LinkStar H68K.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png" /></div>

Normalmente, en este punto en Home Assistant, el estado del dispositivo también cambiará de desconectado a conectado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/65.png" /></div>

## Configurar Panel de Home Assistant

### Paso 6. Conectar a XIAO ESP32C3

Si no tienes muchos dispositivos de Home Assistant en tu LAN, Home Assistant puede buscar automáticamente y agregar tus dispositivos ESP a la pestaña de Dispositivos. Puedes ver este dispositivo dentro de la pestaña **Devices & Services** en **Settings**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png" /></div>

Si no busca automáticamente, también puedes conectarte al XIAO ESP32C3 basándote en su dirección IP.

Haz clic en **ADD INTEGRSTION** y busca **esphome**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png" /></div>

Luego ingresa la dirección IP del XIAO ESP32C3 con el número de puerto **6053**. Después haz clic en **SUBMIT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png" /></div>

Si la dirección IP y el número de puerto ingresados son correctos, entonces verás que se te pide ingresar la clave de cifrado, que pedimos guardar en el paso 4.

Luego haz clic en **SUBMIT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png" /></div>

En este punto, los pasos para agregar el dispositivo se han completado exitosamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/51.png" /></div>

### Paso 7. Descripción general de las funciones del Módulo mmWave de 24GHz Lite

Para ayudarte a entender rápidamente las capacidades completas del conjunto y el uso de estas características, necesitas leer esta sección cuidadosamente. Si quieres información más detallada, recomendamos que te tomes el tiempo de leer el [manual de usuario del producto](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf).

Para detalles sobre la configuración y parámetros del panel de control, hemos compilado un artículo detallado en la documentación de ESPHome, así que por favor dirígete allí para leer el artículo completo y los detalles.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://deploy-preview-3383--esphome.netlify.app/components/sensor/seeed_mr24hpc1" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Documentación de ESPHome 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

### Paso 8. Configurar panel de Home Assistant

Si encuentras las tarjetas predeterminadas muy aburridas y poco amigables para presentar datos, Home Assistant ofrece una amplia gama de paneles de control listos para elegir.

Puedes hacer tu propio panel de control que se adapte a tus preferencias.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/73.png" /></div>

Por ejemplo, la opción para controlar la salida de información se convierte en un interruptor agradable.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/74.png" /></div>

Convirtiendo la velocidad del movimiento humano en una visualización de panel de control visual.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/75.png" /></div>

Esto es lo que se me ocurrió. Parece que tiene las características de un centro de control de hogar inteligente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/76.png" /></div>

Hasta aquí, hemos concluido exitosamente nuestro contenido del tutorial.

## Conectar Grove a Home Assistant usando XIAO ESP32C3

Por supuesto, hay más en el XIAO ESP32C3 que solo el soporte para el Módulo Lite de Presencia Estática Humana mmWave de 24GHz en Home Assistant, y puedes encontrar más tutoriales para tu propio uso en este documento.

- [Conectar Grove a Home Assistant usando XIAO ESP32C3](https://wiki.seeedstudio.com/es/Connect-Grove-to-Home-Assistant-ESPHome/)

¡Deja fluir tu creatividad!

## Solución de problemas

### FAQ1: Obtuve el siguiente error mientras subía el firmware usando la herramienta web ESPhome, ¿cómo puedo solucionarlo?

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png" /></div>

> R: Si aparece este mensaje mientras subes, desconecta el XIAO ESP32C3 de la PC. Luego, mantén presionado el BOTÓN BOOT, conecta la placa a tu PC mientras mantienes presionado el botón BOOT, y luego suéltalo para entrar al modo bootloader. En este punto es suficiente reconectar y subir el firmware nuevamente.

### FAQ2: No puedo instalar esphome flasher en Linux siguiendo el tutorial de esphome flasher?

> R: Al ejecutar los siguientes comandos, necesitas seleccionar la versión de tu sistema, de lo contrario ocurrirá un error. Por ejemplo, mi computadora es Ubuntu 22.04, entonces el comando que debería ejecutarse es el siguiente.

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

### FAQ3: Llené el WiFi y la contraseña correctos, ¿por qué no veo la dirección IP del XIAO ESP32C3?

> R: Cuando encuentres este problema, por favor verifica que la antena del XIAO ESP32C3 esté conectada en su lugar. Si la antena ya está conectada, por favor asegúrate de que el XIAO no esté a más de 3m del LinkStar si es posible (a menos que hayas reemplazado la antena con una más potente).
Si aún no ves el XIAO, puedes usar el software [esphome flasher](https://github.com/esphome/esphome-flasher) para verificar la información de registro del XIAO y comprobar la conexión del XIAO a través de los registros.
Puedes volver a conectar el xiao para que trate de buscar WiFi y conectarse nuevamente.

<!-- ### FAQ4: Mi XIAO ESP32C3 está conectado a la red, pero ¿por qué no veo los datos del sensor actualizados?

:::caution
A partir del 1 de junio de 2023, la resolución de problemas ha revelado que si estableces cualquier valor o cambias cualquier escena en el panel de control de ESPHome, existe la posibilidad de que el radar se caiga.

A partir del 31 de julio de 2023, el problema anterior que causaría que el radar muriera completamente ahora ha sido corregido, así que por favor actualiza los archivos de biblioteca y el configurador para que esta especie de tutorial funcione correctamente.
:::

> R: En el contenido previo del Wiki, usamos los pines UART predeterminados (D6, D7) para recibir y enviar datos del radar, pero muchos usuarios comentaron que hay necesidad de volver a alimentar el radar antes de que pueda funcionar. En respuesta, **actualizamos el contenido del Wiki** y los procedimientos para reemplazar los puertos serie del radar con **D2 y D3**, y después de las pruebas, esto soluciona el problema muy bien.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" style={{width:600, height:'auto'}}/></div>

> **Si no has notado la actualización del Wiki, te sugiero que vuelvas a cablear el radar y reescribas el proceso de compilación y carga siguiendo [los pasos 2 y 5](#configure-the-xiao-esp32c3-and-esphome-connection) del tutorial de este artículo.**

> Sin embargo, algunos usuarios han respondido que aún no pueden hacer que el radar funcione correctamente incluso después de reemplazar los pines serie. Así que aquí, proponemos los siguientes métodos y pasos para verificar dónde ocurre el problema, si aún no puedes resolver el problema del funcionamiento del radar, **por favor proporciona tus pasos de operación al correo electrónico de soporte técnico**, lo cual puede acelerar el procesamiento de problemas de postventa.

**Por favor verifica las siguientes Exclusiones en orden.**

> **Exclusión 1: Asegúrate de que el XIAO ESP32C3 esté bajo la misma LAN que el dispositivo desplegado de ESPHome.**

> Si el XIAO ESP32C3 no está bajo la misma LAN que el dispositivo de ESPHome, el registro que ves en Home Assistant está incompleto y no puede ser usado como base de recolección de datos. Así que por favor verifica doblemente tu router para ver si aparece la dirección IP del XIAO.

> **Exclusión 2: Verifica que el botón de Transferencia de Datos en Vivo esté encendido.**

> Después de que XIAO esté en la red y el dispositivo sea agregado exitosamente, podrás ver los componentes del radar en el panel de control. Por favor nota que por defecto el botón de transferencia de datos en vivo está apagado, necesitas encenderlo para poder ver los datos del radar siendo reportados continuamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

> **Exclusión 3: Verifica si el radar puede funcionar correctamente.**

> Necesitamos asegurarnos de que el radar funcione bien con el XIAO ESP32C3 primero, lo cual nos permitirá identificar rápidamente si es un problema con ESPHome o el producto. Por favor sube el siguiente código al XIAO ESP32C3 en Arduino IDE, por favor nota que los **pines RX/TX del radar deben estar conectados a D2/D3 del XIAO**.

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, 4, 5);
  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

> Abre el monitor serie y establece la velocidad de baudios a 115200, si el radar está funcionando correctamente entonces deberías ver muchos números impresos.

> Si no ves ninguna salida de datos tan pronto como hagas este paso, vuelve a flashear el firmware para el radar según la Wiki. Ofrecemos dos formas para que actualices el firmware: [Actualizaciones de Versión de Firmware](https://wiki.seeedstudio.com/es/Radar_MR24HPC1/#firmware-version-updates).

> Si aún no has escuchado nada después de actualizar el firmware, por favor no seas tacaño y contacta directamente a nuestro equipo de soporte técnico. E infórmales de todo lo que ya has hecho.

> **Exclusión 4: El XIAO y el radar funcionan normalmente en los puntos de verificación anteriores, pero después de reemplazar los pines del puerto serie, aún no se pueden obtener los datos en tiempo real del radar.**

> Si has reemplazado los pines RX y TX del radar a D2/D3 y también has solucionado cuidadosamente los problemas según lo anterior y aún no puedes obtener mensajes de datos en tiempo real, por favor contacta a nuestro equipo de soporte técnico. Antes de eso, **por favor haznos saber si el radar funciona correctamente en el entorno de Arduino** para que podamos analizar y tratar el problema. -->

<!-- > R: Cuando encontramos este problema, necesitamos usar los registros para entender la razón exacta por la cual el sensor no está devolviendo datos. La situación que se ha encontrado que es probable que se encuentre hasta ahora es una situación donde el sensor no está respondiendo, entonces sus registros se verán así.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/71.png" /></div>

> Si ves un registro similar, por favor verifica dos veces los siguientes tres lugares.
> 1. Si el sensor está alimentado con 5V.
> 2. Si los pines RX y TX del sensor están conectados correctamente.
> 3. Desconecta solo el cable de 5V del sensor al XIAO y reconéctalo para permitir que el sensor se encienda nuevamente.

> Generalmente hablando, el tercer punto resuelve este problema. Un flujo de registro normal para la transferencia de datos debería verse así.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/72.png" /></div> -->

### FAQ4: Usé el firmware flash de Jlink, pero obtuve el error "Programming of range @address 0x08000000 failed (block verification error) Program failed Failed to program and verify target" ?

Cuando estás usando el firmware flash de Jlink y ocurre este error, entonces puedes estar en cualquiera de las siguientes situaciones.

1. Tu sensor ya no está funcionando correctamente en absoluto y no puedes recibir ningún mensaje de él.
2. Estás tratando de usar un firmware inválido o incorrecto.

:::caution
¡Si tu radar originalmente estaba funcionando correctamente, verifica nuevamente que estés usando el firmware correcto! ¡El firmware utilizado varía de radar a radar y de modelo de sensor a modelo de sensor! ¡Y la actualización de firmware vía UART no es la misma que la actualización de firmware vía Jlink! Por favor detén el procedimiento con los siguientes pasos.
:::

<details>

<summary><strong>He confirmado que mi producto obtiene este mensaje de error en caso de una excepción</strong></summary>

Si tu radar no está funcionando en absoluto, entonces puede ser normal tener este mensaje de error.

Porque el funcionamiento anormal del radar ha permitido que el radar active el mecanismo de protección de lectura/escritura, ya no se permite al usuario flashear el programa del producto en general, por lo que necesitamos desbloquear el mecanismo de protección de lectura/escritura del radar.

Debido al alto riesgo de desproteger las lecturas y escrituras, no divulgamos el método de desprotección de lecturas y escrituras por separado al público aquí, colocaremos el método en el [archivo zip aquí](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/ArteryICPProgrammer_V2.4.23.zip) para aquellos que lo necesiten. Una vez que el radar anormal esté desprotegido, el firmware puede actualizarse nuevamente para restaurar el funcionamiento normal.

</details>

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
