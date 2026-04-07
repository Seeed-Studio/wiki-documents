---
description: Configurar y ajustar OpenDisplay con el OpenDisplay Kit
title: Configurar y ajustar el firmware de OpenDisplay con el OpenDisplay Kit
keywords:
  - epaper
  - opendisplay
  - en04
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /EN04_opendisplay
sku: E25120101
last_update:
  date: 01/13/2026
  author: Tomasz/Allen/Jackson.li
createdAt: '2026-01-09'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/es/EN04_opendisplay/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Configurar y ajustar el firmware de OpenDisplay con el OpenDisplay Kit

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Pantalla XIAO ePaper EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EN04.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Impulsada por **XIAO nRF52840** Plus, la Placa de Pantalla XIAO EN04 ePaper es la forma más sencilla de empezar con pantallas de papel electrónico con Bluetooth usando el firmware OpenDisplay. A diferencia de los sistemas tradicionales que requieren Puntos de Acceso dedicados con radios 802.15.4, esta placa utiliza Bluetooth Low Energy para un control inalámbrico directo desde tu teléfono, ordenador o Home Assistant.

### Aplicaciones

- **Panel de control para hogar inteligente**: Muestra información en tiempo real como actualizaciones meteorológicas, eventos del calendario y notificaciones de diversos dispositivos del hogar inteligente.
- **Monitorización de energía**: Muestra datos de consumo energético de contadores inteligentes, ayudando a los propietarios a seguir y gestionar su uso de energía de forma más eficiente.
- **Alertas de seguridad**: Muestra alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puerta/ventana.
- **Pantalla para termostato inteligente**: Muestra los niveles de temperatura y humedad, así como los ajustes de control de tu termostato inteligente.

## ¿Qué es [OpenDisplay](https://opendisplay.org)?

OpenDisplay es un proyecto de código abierto que proporciona firmware y protocolos para pantallas de papel electrónico. Está diseñado específicamente para proyectos de hardware personalizado que usan microcontroladores como el nRF52840 y el ESP32.

El [firmware OpenDisplay](https://github.com/OpenDisplay-org/Firmware) permite:
- **Comunicación Bluetooth Low Energy (BLE)**: Control inalámbrico directo sin necesidad de puntos de acceso dedicados
- **Compatibilidad con hardware dedicado**: Funciona con placas diseñadas específicamente como la XIAO ePaper Board EN04, EE04 y otras
- **Programación y configuración basadas en la web**: Configuración sencilla y carga de imágenes a través de la interfaz web en [https://opendisplay.org/firmware/install](https://opendisplay.org/firmware/install/index.html)
- **Compatibilidad con múltiples pantallas**: Compatible con varios tamaños y controladores de pantallas de papel electrónico


## ¿Por qué usar el firmware OpenDisplay?

El firmware OpenDisplay ofrece varias ventajas para proyectos personalizados de pantallas de papel electrónico:

- **No requiere Punto de Acceso**: Usa Bluetooth Low Energy para la comunicación directa, sin necesidad de hardware adicional
- **Herramientas basadas en la web**: Instalación de firmware, configuración y carga de imágenes de forma sencilla mediante herramientas basadas en navegador
- **Hardware diseñado específicamente**: Diseñado para placas como la EN04, no se limita a etiquetas ESL comerciales
- **Código abierto y gratuito**: Proyecto completamente de código abierto con desarrollo activo en GitHub
- **Compatibilidad con múltiples microcontroladores**: Funciona con nRF52840, ESP32-S3, ESP32-C6 y ESP32-C3
- **Configuración sencilla**: Sube el firmware arrastrando y soltando un único archivo en tu placa, configura mediante la interfaz web, sin necesidad de programación compleja
- **Eficiente en batería**: Optimizado para funcionamiento de bajo consumo con pantallas de papel electrónico
- **Comunidad activa**: Soporte y desarrollo a través de [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z)


## Primeros pasos con el firmware OpenDisplay

### Montaje de hardware

**Paso 1. Conectar la pantalla a la placa controladora**  
Alinea el cable FPC con el conector de la Placa XIAO EN04 y después asegura la pestaña para garantizar una conexión firme.  

:::tip
El lado metálico del cable FPC debe mirar hacia arriba, de lo contrario no se mostrará ningún contenido. La mayoría de las pantallas tienen 1 y 50 en el cable FPC; ¡esos números deben alinearse con los de la placa!

Por favor, sigue el siguiente tutorial de instalación; mucha gente se equivoca.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2. Conectar la batería**  
Conecta el cable de la batería al conector JST de la placa controladora, asegurándote de que la polaridad sea correcta (cable rojo a +, negro a -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Verifica dos veces la polaridad; diferentes baterías pueden tener el cableado mezclado. Si el rojo y el negro están mal alineados, se pueden sacar fácilmente del conector JST con una aguja y luego colocarse correctamente.
:::


### Método del instalador web (recomendado)

La forma más sencilla de instalar el firmware OpenDisplay es usando el instalador basado en la web.

**Paso 1. Abrir el instalador web**  
Visita el [Instalador Web de OpenDisplay](https://opendisplay.org/firmware/install/index.html) en un navegador.

**Paso 2. Seleccionar tu placa**  
Elige **"Seeed EN04 4.26"** o **"Seeed EN04 7.3"** (o cualquier ajuste predefinido que se adapte a tu hardware) de la lista de dispositivos (según el tamaño de la pantalla de tu kit).

**Paso 3. Descargar el firmware**  
Haz clic en el botón **"Download Firmware"** y guarda el archivo **"NRF52840.uf2"** en tu disco duro.

**Paso 4. Conectar tu placa**  
Conecta la Placa XIAO ePaper EN04 a tu ordenador usando un cable USB-C.

**Paso 5. Instalar el firmware**  
Pulsa el botón de reinicio dos veces consecutivas. Verás que aparece un gestor de archivos en tu PC. Copia el archivo **"NRF52840.uf2"** descargado a la unidad USB que aparece (la unidad USB es la placa EN04 en modo DFU)

:::tip
Si la instalación falla, prueba:
- Usar un cable USB diferente (algunos cables solo suministran energía)
- Pulsar el botón de reinicio dos veces en la placa EN04
- Usar un puerto USB diferente
:::

**Paso 6. Configurar la placa**  
Abre la [Página de Configuración de OpenDisplay](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) y conéctate a tu placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>


Si seleccionaste **"Seeed EN04 4.26"** o **"Seeed EN04 7.3"**, verás **"Auto Install to Device"**.
Esta es la forma más sencilla de configurar tu Kit.

**Paso 7. Conectarse a la placa**
Pulsa el botón **""Connect** en la página. Deberías ver una ventana que muestra los dispositivos OpenDisplay disponibles; selecciona el nuevo dispositivo y pulsa **"Pair"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png"  style={{width:500, height:'auto'}}/></div>


**Paso 8. Guardar la configuración en la placa**  
Lo último que hay que hacer es pulsar el botón **"Auto Install to Device"**, esto guardará la configuración en el dispositivo.


### Verificar la configuración

Tras la instalación y configuración, la pantalla debería mostrar una pantalla de inicio. El dispositivo ya está listo para mostrar contenido vía Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>




### Cargar imágenes en la pantalla

**Usar la herramienta web de visualización**  

**Paso 1. Herramienta OpenDisplay**  
Visita [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html) en tu navegador.

**Paso 2. Conectarse al dispositivo**  
Haz clic en **"Connect"** y selecciona tu dispositivo OpenDisplay en el cuadro de diálogo de emparejamiento Bluetooth.

**Paso 3. Seleccionar imagen**  
Haz clic en **"Select Image"** y elige un archivo de imagen de tu ordenador.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>




:::tip
Para obtener los mejores resultados:
- Usa imágenes que coincidan con la resolución de tu pantalla (la pantalla de 7.3" es de 800x480 píxeles)
- Las imágenes en blanco y negro funcionan mejor en pantallas monocromáticas
- La herramienta convertirá y aplicará tramado automáticamente a las imágenes en color
:::

**Paso 4. Subir la imagen**  
Haz clic en **"Upload Image"** para enviar la imagen a tu pantalla. La pantalla de papel electrónico se actualizará y mostrará tu imagen.



### Crear contenido personalizado

Puedes crear contenido personalizado para la pantalla usando:
- Software de edición de imágenes (GIMP, Photoshop, etc.)
- Scripts en Python con la biblioteca PIL/Pillow
- Generadores de imágenes basados en la web
- Integración con Home Assistant


## Integración con Home Assistant
:::tip
Para integrarlo con Home Assistant, necesitas una configuración con capacidad Bluetooth:
- **Home Assistant Green** (Bluetooth integrado)
- **Home Assistant OS/Supervised** en hardware con soporte Bluetooth
- **ESPHome Bluetooth Proxy** (recomendado para mejor alcance)

**Nota**: Los dispositivos Shelly que actúan como proxies Bluetooth **no admiten conexiones activas** requeridas por OpenDisplay, por lo que no pueden usarse para esta integración.
:::

**Paso 1. Instalar la integración**

Para obtener instrucciones detalladas de instalación, consulta el [Repositorio de Integración de OpenDisplay con Home Assistant](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help).

La forma más sencilla de instalar la integración es mediante **HACS** (Home Assistant Community Store). Haz clic en el botón de abajo para abrir el repositorio directamente en HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
Después de instalar la integración personalizada mediante HACS, debes **reiniciar Home Assistant** para que los cambios surtan efecto.
:::

**Paso 2. Añadir el dispositivo detectado**

Una vez que Home Assistant se haya reiniciado:
1. Ve a **Settings > Devices & services**.
2. Deberías ver tu dispositivo OpenDisplay listado bajo **Discovered**.
3. Haz clic en **Add**.
4. Aparecerá un cuadro de diálogo que te permitirá establecer el **Name** y el **Area** del dispositivo.
5. Haz clic en **Finish**. Serás redirigido a la página de detalles del dispositivo donde podrás gestionar tu pantalla de papel electrónico.

Verás una nueva imagen mostrada en la pantalla, indicando que el dispositivo está conectado a Home Assistant.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

## Uso con Home Assistant

Una vez que hayas integrado tu dispositivo OpenDisplay con Home Assistant, puedes crear automatizaciones para actualizar dinámicamente el contenido mostrado en función de datos de sensores, la hora u otros eventos.

### Automatizar actualizaciones de la pantalla

El servicio principal para actualizar la pantalla es `open_epaper_link.drawcustom`. Este servicio te permite dibujar texto, iconos, imágenes y formas en la pantalla. Para ver la lista completa de tipos y parámetros compatibles, consulta la [documentación de drawcustom](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md).

Puedes crear automatizaciones en Home Assistant usando el **Editor visual** o escribiendo directamente código **YAML**. A continuación se muestran ejemplos de ambos métodos.

#### Ejemplo 1: Mostrar datos de sensores (Editor visual)

1.  Ve a **Settings > Automations & Scenes** y haz clic en **Create Automation**.
2.  Añade un disparador de tipo **Time Pattern** (por ejemplo, cada 10 minutos).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3.  Añade una **Action** y selecciona **OpenDisplay: Draw Custom Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4.  Selecciona tu dispositivo de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5.  En el campo **Payload**, introduce la configuración de los elementos de tu pantalla.

<!-- <div style={{textAlign:'center'}}><img src={require('./ha_automation_visual.jpg').default} style={{width:800, height:'auto'}}/></div> -->

**Configuración del Payload:**

```yaml
- type: "text"
  value: "Living Room"
  x: "50%"
  y: 50
  anchor: "mm"
  size: 70
  color: "red"
- type: "icon"
  value: "mdi:thermometer"
  x: "35%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_temperature') }}°C"
  x: "65%"
  y: 200
  anchor: "mm"
  size: 100
  color: "black"
- type: "icon"
  value: "mdi:water-percent"
  x: "35%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
- type: "text"
  value: "{{ states('sensor.living_room_humidity') }}%"
  x: "65%"
  y: 350
  anchor: "mm"
  size: 100
  color: "black"
```

:::caution Importante: IDs de entidad
Los IDs de entidad usados en el payload anterior (por ejemplo, `sensor.living_room_temperature`, `sensor.living_room_humidity`) son solo ejemplos. **Debes** sustituirlos por los IDs de entidad reales de tus sensores en Home Assistant.
:::

#### Ejemplo 2: Temporizador de cuenta regresiva (YAML)

Para usuarios avanzados, puedes editar la automatización en modo YAML. Esta automatización calcula los días restantes hasta una fecha específica (por ejemplo, Navidad) y los muestra.

```yaml
alias: Update ePaper Display - Countdown
description: Displays days until Christmas
triggers:
  - at: "00:00:00"
    trigger: time
actions:
  - variables:
      days_left: "{{ (as_datetime('2025-12-24').date() - now().date()).days }}"
  - action: open_epaper_link.drawcustom
    data:
      background: white
      payload:
        - type: text
          value: "{{ 'Christmas Countdown' if days_left > 0 else '' }}"
          x: 50%
          "y": 50
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ days_left if days_left > 0 else '' }}"
          x: 50%
          "y": 240
          anchor: mm
          size: 250
          color: red
        - type: text
          value: >-
            {{ 'Day Left' if days_left == 1 else ('Days Left' if days_left > 0
            else '') }}
          x: 50%
          "y": 430
          anchor: mm
          size: 60
          color: black
        - type: text
          value: "{{ 'It''s Christmas!!!' if days_left == 0 else '' }}"
          x: 50%
          "y": 50%
          anchor: mm
          size: 100
          color: red
    target:
      device_id: 2ad706d4aa7c657b6fe99a733cef2253
```

:::caution Importante: ID del dispositivo
El `device_id` mostrado en el ejemplo anterior (`2ad706d4aa7c657b6fe99a733cef2253`) es solo un ejemplo. **Debes** sustituirlo por el ID de dispositivo real de tu propia pantalla OpenDisplay.

Para encontrar tu ID de dispositivo:
1. Crea una nueva automatización en Home Assistant usando el Editor visual.
2. Selecciona tu dispositivo OpenDisplay en la configuración de la acción.
3. Cambia al **modo YAML** (haz clic en los tres puntos en la esquina superior derecha de la tarjeta de acción).
4. Copia el `device_id` del código YAML y pégalo en tu automatización.
:::

## Extra

Si buscas una forma elegante de montar tu pantalla, echa un vistazo a este inserto impreso en 3D para el marco IKEA RODALM. Permite un montaje sencillo de la pantalla.

- **[MakerWorld]** [Inserto Seeed 7.3" Spectra para marco IKEA RODALM](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Solución de problemas

### Problemas de instalación de firmware

**Problema**: El PC no detecta una nueva unidad USB después de conectar la placa EN04
- **Solución**: 
  - Prueba con un cable USB diferente (cable de datos, no solo de alimentación)
  - Pulsa el botón de reinicio dos veces después de conectar la placa


### Problemas de configuración

**Problema**: No se descubre la placa EN04
- **Solución**:
  - Verifica que el LED de la placa parpadea; esto confirma que el dispositivo está alimentado
  - Intenta reiniciar la placa
  - Verifica la instalación del firmware o copia de nuevo el archivo

**Problema**: La pantalla no muestra nada después de la instalación del firmware
- **Solución**:
  - Verifica que el cable FPC esté insertado correctamente (contactos metálicos hacia arriba)
  - Comprueba que el cable esté completamente insertado y bloqueado
  - Verifica si la configuración es correcta (puedes conectarte a la placa mediante el configurador y leer la configuración)


### Problemas de conexión Bluetooth

**Problema**: No se puede encontrar el dispositivo OpenDisplay en el emparejamiento Bluetooth
- **Solución**:
  - Asegúrate de que el dispositivo esté encendido y que el firmware esté instalado
  - Acércate más al dispositivo (dentro de 2-3 metros)
  - Comprueba que el Bluetooth esté activado en tu ordenador/teléfono

**Problema**: La conexión se interrumpe durante la carga de la imagen
- **Solución**:
  - Mantente cerca del dispositivo durante la carga
  - Asegúrate de que la batería esté suficientemente cargada o alimenta el dispositivo por USB
  - Evita subir imágenes muy grandes
  - Intenta de nuevo en un entorno Bluetooth más estable

### Problemas de batería y alimentación

**Problema**: Duración de batería corta
- **Solución**:
  - Configura intervalos de suspensión más largos en el configurador
  - Usa siempre la versión más reciente del firmware; cada versión optimiza el consumo de batería
  - Reduce la frecuencia de actualización de la pantalla
  - Verifica que la batería esté completamente cargada (4.2V para Li-Po)

**Problema**: El dispositivo no carga
- **Solución**:
  - Comprueba la polaridad de la batería (rojo: +, negro: -)
  - Verifica que el cable de carga proporcione corriente suficiente (mín. 500mA)
  - Asegúrate de que el interruptor de encendido esté en la posición ON
  - Prueba con una fuente de alimentación USB diferente

### Problemas con Home Assistant e integración

**Problema**: Error "Insufficient connection slots" al añadir dispositivos mediante Raspberry Pi + HA + OpenDisplay
- **Solución**:
  - Este error suele producirse cuando el adaptador Bluetooth integrado de la Raspberry Pi alcanza su límite de conexiones simultáneas.

  ![Error: Insufficient connection slots](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/1.png)  
  Ejemplo del mensaje de error "Insufficient connection slots".

  - **Solución recomendada**: Usa un dispositivo ESP32 (por ejemplo, XIAO ESP32S3) como **ESPHome Bluetooth Proxy**. Esto traslada la conexión Bluetooth de la Raspberry Pi al ESP32, proporcionando “slots” más estables para tus pantallas de papel electrónico.
  - Consulta la sección [Using ESPHome Bluetooth Proxy](#Using-ESPHome-Bluetooth-Proxy) más abajo para obtener instrucciones detalladas de configuración.

## Using ESPHome Bluetooth Proxy

Si encuentras "Insufficient connection slots" al usar Raspberry Pi con Home Assistant, configurar un Bluetooth Proxy es la solución más efectiva. Esto permite que HA use un dispositivo ESP32 externo como puente para comunicarse con tus pantallas de papel electrónico.

### Requisitos previos
- Un dispositivo ESP32 (por ejemplo, XIAO ESP32S3)
- ESPHome instalado en tu Home Assistant
- Un cable de datos USB para conectar el ESP32 a tu Raspberry Pi (para el primer flasheo)

### Configuración paso a paso

1. **Conecta el dispositivo**: Enchufa tu XIAO ESP32S3 en uno de los puertos USB de tu Raspberry Pi.
2. **Crea una nueva configuración**: En el panel de ESPHome, crea un nuevo dispositivo y usa la siguiente configuración YAML como plantilla:

   ![Configuración YAML de ESPHome](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/2.png)
   Configuración YAML de ESPHome para el Bluetooth Proxy.

```yaml
esphome:
  name: esps3-proxy
  friendly_name: ESP32S3 Bluetooth Proxy

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# 1. Enable detailed logging (useful for debugging)
logger:
  level: VERY_VERBOSE

# 2. Core: Enable Bluetooth Tracker
esp32_ble_tracker:
  scan_parameters:
    active: true

# 3. Core: Enable Bluetooth Proxy
# This allows HA to control the e-Paper display through this device
bluetooth_proxy:
  active: true

api:
  encryption:
    key: "YOUR_ENCRYPTION_KEY" # Generate your own key

ota:
  - platform: esphome
    password: "YOUR_OTA_PASSWORD" # Set your own password

wifi:
  ssid: "YOUR_WIFI_SSID"
  password: "YOUR_WIFI_PASSWORD"

# Recommended: Enable captive portal for fallback access
captive_portal:
```

3. **Instalar/Flashear**:
     - Selecciona **Install** -> **Plug into this computer** (o el dispositivo que ejecuta ESPHome).

     ![Proceso de flasheo de ESPHome](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/4.png)
      Flashear el firmware al XIAO ESP32S3 a través de la Raspberry Pi.

    - Si es la primera vez, ESPHome puede descargar la cadena de herramientas `esp-idf`. Asegúrate de que tu entorno tenga una conexión a Internet estable a GitHub.
    - Una vez compilado, los registros mostrarán "WiFi connected" y actividades de escaneo Bluetooth.

4. **Integración**:
     - Home Assistant descubrirá automáticamente el nuevo Bluetooth Proxy.
     - Una vez añadido, tus pantallas de e-Paper ahora deberían poder detectarse a través de este proxy sin el error de "insufficient slots".

     ![Éxito: Bluetooth Proxy conectado](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png)
      Home Assistant descubre correctamente el Bluetooth Proxy.

      ![Éxito: pantalla de e-Paper añadida](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png)
      Prueba si la pantalla puede mostrar normalmente; si es así, la configuración se ha realizado correctamente.

## Recursos

- **[GitHub]** [Repositorio de firmware de OpenDisplay](https://github.com/OpenDisplay-org/Firmware)
- **[Web Tool]** [Instalador web de firmware](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [Generador de configuración](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [Probador de pantalla](https://opendisplay.org/firmware/display/index.html)
- **[Discord]** [Comunidad OpenDisplay](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [Sitio oficial de OpenDisplay](https://opendisplay.org)



## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

