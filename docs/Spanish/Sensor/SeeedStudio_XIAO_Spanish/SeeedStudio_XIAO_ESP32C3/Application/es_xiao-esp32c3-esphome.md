---
description: Accessing ESPHome with XIAO ESP32C3
title: Uso de XIAO ESP32C3 con Home Assistant a través del servicio ESPHome.
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao-esp32c3-esphome
last_update:
  date: 02/04/2025
  author: Guillermo
---

# Uso de XIAO ESP32C3 con Home Assistant a través del servicio ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:700, height:'auto'}}/></div>

Este artículo te guiará a través de la instalación del servicio ESPHome en tu propio entorno de Home Assistant. Utilizando la función WiFi del XIAO ESP32C3, podrás conectar tu XIAO a Home Assistant como parte de tu terminal en casa de una manera muy fluida.

Además, construiremos un Home Assistant con detección de presencia humana en combinación con el módulo más popular de presencia estática humana de 24GHz mmWave, el Human Static Presence Module Lite.

## Empezando

:::tip
A partir del 31 de julio de 2023, se ha solucionado el problema anterior que causaba que el radar dejara de funcionar por completo, así que por favor actualiza los archivos de la biblioteca y el configurador para que el tutorial funcione correctamente.
:::

Si deseas seguir este tutorial en su totalidad, necesitarás preparar lo siguiente.

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>24GHz mmWave Human Static<br />Módulo de Presencia Lite</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

El objetivo final de este proyecto es implementar el módulo de presencia estática humana de 24GHz mmWave Lite en Home Assistant.

Hemos escrito archivos de configuración completos y bibliotecas para el Módulo de Presencia Estática Humana de 24GHz mmWave Lite para facilitar el despliegue rápido del sensor en Home Assistant en este proyecto.

El contenido de este tutorial pasará por los siguientes pasos:

1. [Selecciona tu entorno de Home Assistant](#select-your-home-assistant-environment)
2. [Instala y configura ESPHome en Home Assistant](#install-and-configure-esphome-in-home-assistant)
3. [Configura la conexión entre el XIAO ESP32C3 y ESPHome](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [Configura el Panel de Home Assistant](#configure-home-assistant-panel)

Por supuesto, si estás interesado en cómo el XIAO ESP32C3 utiliza Grove en Home Assistant, puedes leer este capítulo directamente.

- [Conectar Grove a Home Assistant usando el XIAO ESP32C3](#connect-grove-to-home-assistant-using-xiao-esp32c3)

## Selecciona tu entorno de Home Assistant

En esta rutina, no ampliaremos sobre cómo instalar el entorno de Home Assistant, asumiremos que ya tienes un dispositivo de Home Assistant funcionando.

Si deseas aprender cómo instalar Home Assistant, puedes consultar el [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos encarecidamente que instales Home Assistant utilizando un dispositivo x86, ya que es la forma más fácil de instalar Home Assistant con Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

Según la tabla anterior, lo más adecuado es instalar **Home Assistant OS** y **Home Assistant Supervised**, lo que te ahorrará muchos inconvenientes. Si estás ejecutando Home Assistant en Docker con OpenWRT (por ejemplo, usando LinkStar H68K), no te preocupes, también te proporcionaremos una referencia detallada sobre cómo hacerlo.

También hemos escrito cómo instalar Home Assistant para algunos de los productos de Seeed Studio, por favor consúltalos.

- [Empezando con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)
- [Empezando con Home Assistant en reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)
- [Empezando con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## Instalar ESPHome en Home Assistant

### Paso 1. Instalar ESPHome

- **Escenario 1: Instalación de ESPHome en Home Assistant OS (con la Tienda de Complementos)**

Si tienes instalado Home Assistant OS, este cuenta con una Tienda de Complementos, lo que hace mucho más fácil instalar ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>


En la Tienda de Complementos, puedes buscar e instalar ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

- **Escenario 2: ESPHome instalado en Home Assistant bajo OpenWRT Docker/Docker (sin la Tienda de Complementos)**

Como estamos instalando el contenedor de Home Assistant, no podemos simplemente descargar el servicio ESPHome a través de la Tienda de Complementos, por lo que se necesita una solución alternativa.

Debemos descargar la imagen de ESPHome.

```
esphome/esphome:latest
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png" /></div>


En la página donde se crea el contenedor, necesitamos hacer algunos ajustes sencillos.  
- Nombre del contenedor: el nombre de tu contenedor  
- Imagen de Docker: elige la imagen **esphome** que acabas de descargar  
- Red: selecciona el modo **host**  
- Variables de entorno (-e): tu variable de entorno

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png" /></div>


Una vez que hayas completado los campos anteriores, guarda y aplica. Verás que el contenedor ha sido creado. También necesitas iniciarlo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png" /></div>

Para lograr el mismo efecto que descargar ESPHome en Home Assistant, necesitamos modificar el archivo de configuración en Home Assistant.

Ve a Home Assistant Container.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png" /></div>


Vamos a la terminal de Home Assistant:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png" /></div>


Ingresa el siguiente comando en la terminal:

```sh
vi configuration.yaml
```

Agrega el siguiente contenido al final de `configuration.yaml`.

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

Sal de el contenedor Docker escribiendo ```exit``` en la terminal del contenedor de Home Assistant. Una vez hecho esto, reinicia el contenedor de Home Assistant.

Crea una nueva página en tu navegador, ingresa la dirección http://homeassistant:8123/ e ingresa con tu cuenta de Home Assistant. Verás que ESPHome aparece en la barra de herramientas a la izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png" /></div>

## Configurar la conexión entre el XIAO ESP32C3 y ESPHome

### Paso 2. Preparación del hardware

El objetivo de nuestro tutorial es poder ver la información de los datos del Módulo de Presencia Estática Humana de 24GHz mmWave Lite en el panel de Home Assistant.

Conecta el dispositivo al computador a través de la placa principal. El diagrama de conexiones se muestra en la tabla a continuación.

<div class="table-center">
<table align="center">
  <tbody>
    <tr>
      <td colspan="3"><div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">XIAO ESP32C3</td>
      <td align="center" />
      <td align="center">24GHz mmWave Human Static<br />Presence Module Lite</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">D3</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody></table>
</div>

### Paso 3. Mantén el XIAO ESP32C3 y Home Assistant en la misma red LAN

Estoy seguro de que tu Home Assistant ya ha hecho el trabajo de conectarse a la red, por ejemplo, conectando tu dispositivo mediante un cable de red. Lo único que necesitas hacer es activar una red local (por ejemplo, WiFi) para que el XIAO ESP32C3 también pueda conectarse a esta red.

Usaré el LinkStar H68K como ejemplo a continuación. Mi objetivo es conectar el XIAO al punto de acceso del LinkStar H68K.

En la pestaña **Red** de OpenWRT, selecciona **Inalámbrico** --> **AGREGAR**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/58.png" /></div>


Para **Potencia de Transmisión** en **Configuración del Dispositivo**, selecciona **automático**.

Para la configuración de **Interfaz**, por favor llena los siguientes campos.

- Configuración General
    - Modo: Depende de cómo el LinkStar accede a internet. Si estás usando una conexión por cable selecciona **Cliente**, si estás conectado por WiFi selecciona **Punto de Acceso**.
    - ESSID: Ingresa el nombre de tu red WiFi, intenta evitar usar espacios o caracteres especiales.
    - Red: marca **lan**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/23.png" /></div>


- Seguridad Inalámbrica
    - Cifrado: WPA2-PSK
    - Contraseña: Ingresa la contraseña de WiFi que deseas configurar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/24.png" /></div>



Una vez que hayas completado la información anterior, haz clic en **Guardar y Aplicar** en la esquina inferior derecha y espera unos momentos a que LinkStar abra un punto de acceso.

Cuando ningún dispositivo esté conectado a este punto de acceso, se mostrará como sin señal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/60.png" /></div>


Considerando todo lo anterior, volvamos a la página de Home Assistant.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" /></div>


Haz clic en **NUEVO DISPOSITIVO**. Luego, haz clic en **Continuar**.

En la nueva ventana emergente, ingresa el nombre de la aplicación que deseas configurar, así como el nombre y la contraseña del punto de acceso que has configurado en LinkStar (o tu propia red WiFi). Asegúrate de que el XIAO ESP32C3 y Home Assistant estén en **la misma red LAN**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/25.png" /></div>


Luego, haz clic en **Siguiente**.

En el tipo de dispositivo, selecciona **ESP32-C3**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" /></div>

Luego, haz clic en **Siguiente**.

<span id="jump1">Haz clic en la <strong>clave de cifrado</strong> y guárdala en un lugar seguro, usaremos esta clave en un paso posterior.</span>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" /></div>

Luego, haz clic en **SALTAR**.

### Paso 4. Cambiar el archivo de configuración yaml del XIAO ESP32C3

Después, haz clic en la pestaña del dispositivo que acabamos de crear, utilizando el botón **EDITAR** en la esquina inferior izquierda.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/28.png" /></div>

Ten en cuenta que necesitamos hacer cambios en este archivo YAML. Hemos dividido el contenido que debe modificarse en dos partes principales, correspondientes a uno y dos en el diagrama a continuación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.png" /></div>


- En el **①** del contenido, no cambies el nombre del dispositivo excepto el que has configurado. Para el resto del contenido, consulta el código a continuación.

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

<summary>Haz clic aquí para previsualizar el código completo.</summary>

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

### Paso 5. Cargar el firmware en el XIAO ESP32C3  

- **Método 1: Compilar y cargar directamente**  

Si estás usando un dispositivo x86 y puedes ver el XIAO en el puerto del dispositivo, entonces puedes compilar y cargar el programa en el XIAO.  

Conecta el XIAO a tu dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ESPHome/49.png" style={{width:700, height:'auto'}}/></div>


Haz clic en los tres puntos en la esquina inferior derecha de la barra del dispositivo y selecciona **Instalar**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/84.png" /></div>


Haz clic en **Conectar al ordenador que ejecuta el panel de ESPHome**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/85.png" /></div>


Selecciona el puerto conectado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

Ahora se descargarán todos los paquetes necesarios de la placa y se grabará el firmware de ESPHome en el XIAO ESP32C3. Si la grabación es exitosa, verás la siguiente salida.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

Si no puedes encontrar el puerto después de conectar el XIAO a tu dispositivo, puedes intentar usar el segundo método.  

- **Método 2: Cargar el firmware compilado usando otro equipo**  

Algunas rutas de software como LinkStar H68K no soportan el reconocimiento de dispositivos MCU externos, por lo que primero debemos descargar el firmware compilado y luego cargarlo desde otro PC.  

Haz clic en el botón **Instalar** en la esquina superior derecha. Luego, selecciona la última opción **Descarga manual**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png" /></div>


Selecciona **Formato moderno**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" /></div>

Luego, tomará un tiempo para descargar y compilar, así que por favor ten paciencia. Una vez que todo esté listo, el firmware se descargará automáticamente a tu computadora.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png" /></div>

Para cargar el firmware en el XIAO ESP32C3, hay un par de opciones. Aquí mostramos 2 formas de hacerlo:

- Opción 1: usar la [herramienta web de ESPHome](https://web.esphome.io/?dashboard_install) para cargarlo.

Asegúrate de tener los controladores correctos instalados. A continuación se encuentran los controladores para los chips comunes usados en dispositivos ESP.

1. Controladores CP2102: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

2. Controladores CH342, CH343, CH9102: [Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)

3. Controladores CH340, CH341: [Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

Abre la [herramienta web de ESPHome](https://web.esphome.io/?dashboard_install) con el navegador Chrome o Edge.

Haz clic en **CONECTAR**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

Selecciona el puerto serial del XIAO ESP32 en la ventana emergente.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

Haz clic en **INSTALAR** y luego selecciona el archivo `.bin` descargado en los pasos anteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>


- Opción 2: Usando la herramienta [esphome-flasher](https://github.com/esphome/esphome-flasher).

Si aún no puedes cargar el firmware utilizando el primer método después de instalar el controlador y cambiar de navegador, puedes intentar usar el segundo método. Consulta el tutorial oficial para obtener métodos e instrucciones de instalación específicos.

:::tip
Si deseas observar los mensajes de registro del XIAO ESP32C3, también puedes verlos a través del botón Ver Registros de este software.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

Una vez que la carga se haya completado, puedes desconectar el XIAO ESP32C3 del PC (a menos que necesites ver los registros) y simplemente alimentar el XIAO por separado.

Si todo va bien, el XIAO ESP32C3 buscará y se conectará al WiFi que le hayas configurado.

Al igual que yo, uso la red de LinkStar H68K. Puedes encontrarla en las opciones de red y ver la dirección IP que le ha asignado el LinkStar H68K.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png" /></div>

Normalmente, en este punto, en Home Assistant, el estado del dispositivo cambiará de offline a online. Esto indica que el XIAO ESP32C3 está correctamente conectado a la red y listo para interactuar con Home Assistant.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/65.png" /></div>

## Configurar Panel de Home Assistant

### Paso 6. Conectar al XIAO ESP32C3

Si no tienes muchos dispositivos de Home Assistant en tu red local, Home Assistant puede buscar automáticamente y agregar tus dispositivos ESP en la pestaña de Dispositivos. Puedes ver este dispositivo dentro de la pestaña **Dispositivos y Servicios** en **Configuración**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png" /></div>

Si no se detecta automáticamente, también puedes conectar al XIAO ESP32C3 usando su dirección IP.

Haz clic en **AÑADIR INTEGRACIÓN** y busca **esphome**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png" /></div>

Luego, ingresa la dirección IP del XIAO ESP32C3 con el número de puerto **6053**. Luego haz clic en **ENVIAR**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png" /></div>

Si la dirección IP y el número de puerto ingresados son correctos, verás que se te pedirá que ingreses la clave de cifrado, que te pedimos guardar en [el paso 4](#jump1).

Luego haz clic en **ENVIAR**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png" /></div>

At this point, the steps to add the device have been successfully completed.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/51.png" /></div>

### Paso 7. Descripción general de las funciones del módulo 24GHz mmWave

Para ayudarte a entender rápidamente todas las capacidades del conjunto y el uso de estas funciones, debes leer esta sección con atención. Si deseas obtener más información detallada, te recomendamos que dediques tiempo a leer el [manual de usuario del producto](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf).

Para detalles sobre la configuración y los parámetros del panel de control, hemos preparado una descripción detallada en la documentación de ESPHome, así que por favor dirígete allí para leer la descripción completa y los detalles.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://deploy-preview-3383--esphome.netlify.app/components/sensor/seeed_mr24hpc1">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome Docs 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

### Paso 8. Configurar el panel de Home Assistant

Si encuentras que las tarjetas predeterminadas son aburridas o poco amigables para presentar los datos, Home Assistant ofrece una amplia variedad de paneles prediseñados para elegir.

Puedes crear tu propio panel para adaptarlo a tus preferencias.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/73.png" /></div>

Por ejemplo, la opción de controlar la salida de la información se convierte en un interruptor bonito.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/74.png" /></div>

Convirtiendo la velocidad del movimiento humano en una visualización de panel de control.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/75.png" /></div>

Esto es lo que se me ocurrió. Parece que tiene todo lo necesario para convertirse en un centro de control de hogar inteligente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/76.png" /></div>

Hasta ahora, hemos concluido con éxito el contenido del tutorial.

## Conectar Grove a Home Assistant usando XIAO ESP32C3

Por supuesto, el XIAO ESP32C3 ofrece más que solo soporte para el Módulo de Presencia Estática Humana de 24GHz en Home Assistant, y puedes encontrar más tutoriales para tu propio uso en este documento.

- [Conectar Grove a Home Assistant usando XIAO ESP32C3](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)

¡Deja que fluya tu creatividad!

## Solución de problemas

### Pregunta frecuente 1: Recibí el siguiente error al subir el firmware utilizando la herramienta Web de ESPhome, ¿cómo puedo solucionarlo?

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png" /></div>

> R: Si aparece este mensaje mientras subes el firmware, desconecta el XIAO ESP32C3 del PC. Luego, mantén presionado el BOTÓN BOOT, conecta la placa a tu PC mientras mantienes presionado el botón BOOT y luego suéltalo para entrar en el modo de arranque. En este punto, simplemente vuelve a conectar y sube el firmware nuevamente.

### Pregunta frecuente 2: No puedo instalar esphome flasher en Linux siguiendo el tutorial de esphome flasher.

> R: Al ejecutar los siguientes comandos, necesitas seleccionar la versión de tu sistema, de lo contrario ocurrirá un error. Por ejemplo, mi computadora es Ubuntu 22.04, entonces el comando que debería ejecutarse es el siguiente.

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

### Pregunta frecuente 3: Llené correctamente el WiFi y la contraseña, ¿por qué no veo la dirección IP del XIAO ESP32C3?

> R: Si tienes este problema, verifica que la antena del XIAO ESP32C3 esté correctamente conectada. Si la antena ya está conectada, asegúrate de que el XIAO no esté a más de 3 metros del LinkStar si es posible (a menos que hayas reemplazado la antena por una más potente).  
Si aún no ves el XIAO, puedes usar el software [esphome flasher](https://github.com/esphome/esphome-flasher) para revisar la información del registro del XIAO y verificar la conexión a través de los registros.  
También puedes desconectar y volver a conectar el XIAO para que intente buscar la red WiFi y conectarse nuevamente.

<!-- ### FAQ4: My XIAO ESP32C3 is connected to network, but why don't I see the sensor data refreshed?

:::caution
As of June 1, 2023 troubleshooting has revealed that if you set any value or change any scene in the dashboard of ESPHome, there is a possibility that the radar will go down.

As of 31 July 2023, the previous issue that would cause the radar to completely die has now been fixed, so please update the library files and configurator for this tutorial species to work properly.
:::

> A: In the previous Wiki content, we used the default UART pins (D6, D7) to receive and send data from the radar, but many users feedback there is a need to re-power the radar before it can work. In response, we **updated the Wiki** content and procedures to replace the serial ports of the radar with **D2 and D3**, and after testing, this fixes the problem very well.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" style={{width:600, height:'auto'}}/></div>

> **If you haven't noticed the Wiki update, I suggest you re-wire the radar and re-write the compile and upload process following [steps 2 and 5](#configure-the-xiao-esp32c3-and-esphome-connection) of this article's tutorial.**

> However, some users have responded that they still can't get the radar to work properly even after replacing the serial pins. So here, we propose the following methods and steps to check where the problem occurs, if you still can't solve the problem of radar working, **please provide your operation steps to the technical support email**, which can speed up the processing of after-sales problems.

**Please check the following Exclusion in order.**

> **Exclusion 1: Make sure the XIAO ESP32C3 is under the same LAN as the ESPHome deployed device.**

> If the XIAO ESP32C3 is not under the same LAN as the device of ESPHome, the log you see in Home Assistant is incomplete and cannot be used as the basis of data collection. So please double check your router to see if the IP address of XIAO appears.

> **Exclusion 2: Check that the Data Live Transfer button is on.**

> After XIAO is on the network and the device is successfully added, you will be able to see the radar components in the dashboard. Please note that by default the live data transfer button is off, you need to turn it on to be able to see the radar data being reported continuously.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

> **Exclusion 3: Check whether the radar can work properly.**

> We need to make sure that the radar works well with the XIAO ESP32C3 first, which will allow us to quickly identify whether it is a problem with ESPHome or the product. Please upload the following code to XIAO ESP32C3 in Arduino IDE, please note that the **RX/TX pins of radar should be connected to D2/D3 of XIAO**.

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

> Open the serial monitor and set the baud rate to 115200, if the radar is working properly then you should see a lot of numbers printed out.

> If you don't see any data output as soon as you do this step, re-flash the firmware for the radar according to the Wiki. We offer two ways for you to update the firmware: [Firmware Version Updates](https://wiki.seeedstudio.com/Radar_MR24HPC1/#firmware-version-updates).

> If you still haven't heard anything after updating the firmware, please don't be stingy and contact our technical support team directly. And inform them of everything you have already done.

> **Exclusion 4: The XIAO and radar work normally at the above check points, but after replacing the serial port pins, still can't get the radar real-time data.**

> If you have replaced the RX and TX pins of the radar to D2/D3 and have also carefully troubleshoot according to the above and still cannot get real-time data messages, please contact our technical support team. Before that, **please let us know if the radar works properly in Arduino environment** so that we can analyze and deal with the problem. -->

<!-- > A: When we encounter this problem, we need to use the logs to understand the exact reason why the sensor is not returning data. The situation that has been found to be likely to be encountered so far is a situation where the sensor is not responding, then its logs will look like this.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/71.png" /></div>

> If you see a similar log, please double check the following three places.
> 1. Whether the sensor is supplied with 5V.
> 2. Are the RX and TX pins of the sensor connected correctly.
> 3. Disconnect only the 5V wire from the sensor to the XIAO and reconnect it to allow the sensor to be powered up again.

> Generally speaking, the third point solves this problem. A normal log flow for data transfer should look like this.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/72.png" /></div> -->

### Pregunta frecuente 4: Usé el firmware de Jlink, pero obtuve el error "Programming of range @address 0x08000000 failed (block verification error) Program failed Failed to program and verify target". ¿Cómo puedo solucionarlo?

Si estás utilizando el firmware de Jlink y aparece este error, podrías estar en alguna de las siguientes situaciones:

1. Tu sensor ya no está funcionando correctamente y no puedes recibir ningún mensaje de él.  
2. Estás intentando usar un firmware inválido o incorrecto.

:::caution
Si tu radar funcionaba correctamente antes, verifica nuevamente que estás utilizando el firmware correcto. ¡El firmware varía según el radar y el modelo del sensor! Además, la actualización de firmware vía UART no es la misma que la actualización vía Jlink. ¡Por favor, detén el proceso antes de continuar con los siguientes pasos!
:::

<details>

<summary><strong>He confirmado que mi producto muestra este mensaje de error en caso de una excepción.</strong></summary>

Si tu radar no funciona en absoluto, entonces puede ser normal que aparezca este mensaje de error.

Debido a la operación anormal del radar, es posible que se haya activado el mecanismo de protección de lectura/escritura, lo que impide al usuario volver a programar el producto. Para solucionar esto, es necesario desbloquear dicho mecanismo.

Dado el alto riesgo de desproteger las lecturas y escrituras, no divulgamos públicamente el método para hacerlo. Sin embargo, hemos colocado el procedimiento en el [archivo zip aquí](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/ArteryICPProgrammer_V2.4.23.zip) para quienes lo necesiten. Una vez que el radar defectuoso haya sido desbloqueado, se podrá actualizar el firmware nuevamente para restaurar su funcionamiento normal.

</details>

## Soporte Técnico y Discusión de Productos  



¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


