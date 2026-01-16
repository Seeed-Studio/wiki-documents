---
description: Configurar y Configurar OpenDisplay con el Kit OpenDisplay
title: Configurar y Configurar el firmware OpenDisplay con el Kit OpenDisplay
keywords:
  - epaper
  - opendisplay
  - en04
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1 
slug: /es/EN04_opendisplay
sku: E25120101
last_update:
  date: 01/13/2026
  author: Tomasz/Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Configurar y Configurar el firmware OpenDisplay con el Kit OpenDisplay

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Pantalla ePaper XIAO EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EN04.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Alimentada por **XIAO nRF52840** Plus, la Placa de Pantalla ePaper XIAO EN04 es la forma más fácil de comenzar con pantallas de papel electrónico habilitadas para Bluetooth usando el firmware OpenDisplay. A diferencia de los sistemas tradicionales que requieren Puntos de Acceso dedicados con radios 802.15.4, esta placa utiliza Bluetooth Low Energy para control inalámbrico directo desde tu teléfono, computadora o Home Assistant.

### Aplicación

- **Panel de Control de Casa Inteligente**: Mostrar información en tiempo real como actualizaciones del clima, eventos del calendario y notificaciones de varios dispositivos de casa inteligente.
- **Monitoreo de Energía**: Mostrar datos de consumo de energía de medidores inteligentes, ayudando a los propietarios a rastrear y gestionar su uso de energía de manera más eficiente.
- **Alertas de Seguridad**: Mostrar alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Pantalla de Termostato Inteligente**: Mostrar niveles de temperatura y humedad, así como configuraciones de control para tu termostato inteligente.

## ¿Qué es [OpenDisplay](https://opendisplay.org)?

OpenDisplay es un proyecto de código abierto que proporciona firmware y protocolos para pantallas de papel electrónico. Está diseñado específicamente para construcciones de hardware personalizadas usando microcontroladores como el nRF52840 y ESP32.

El [firmware OpenDisplay](https://github.com/OpenDisplay-org/Firmware) habilita:
- **Comunicación Bluetooth Low Energy (BLE)**: Control inalámbrico directo sin requerir puntos de acceso dedicados
- **Soporte de Hardware Dedicado**: Funciona con placas construidas específicamente como la Placa ePaper XIAO EN04, EE04 y otras
- **Flasheo y Configuración Basados en Web**: Configuración fácil y carga de imágenes a través de interfaz web en [https://opendisplay.org/firmware/install](https://opendisplay.org/firmware/install/index.html)
- **Soporte de Múltiples Pantallas**: Compatible con varios tamaños de papel electrónico y controladores


### ¿Por qué usar el firmware OpenDisplay?

El firmware OpenDisplay ofrece varias ventajas para proyectos de pantallas de papel electrónico personalizadas:

- **No Requiere Punto de Acceso**: Utiliza Bluetooth Low Energy para comunicación directa - no se necesita hardware adicional
- **Herramientas Basadas en Web**: Instalación de firmware fácil, configuración y carga de imágenes a través de herramientas basadas en navegador
- **Hardware Construido Específicamente**: Diseñado para placas como la EN04, no limitado a etiquetas ESL comerciales
- **Código Abierto y Gratuito**: Proyecto completamente de código abierto con desarrollo activo en GitHub
- **Soporte de Múltiples Microcontroladores**: Funciona con nRF52840, ESP32-S3, ESP32-C6 y ESP32-C3
- **Configuración Simple**: Cargar firmware mediante arrastrar y soltar un solo archivo a tu placa, configurar a través de interfaz web, no se requiere programación compleja
- **Eficiente en Batería**: Optimizado para operación de bajo consumo con pantallas de papel electrónico
- **Comunidad Activa**: Soporte y desarrollo a través de [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z)


## Comenzando con el firmware OpenDisplay

### Ensamblaje de Hardware

**Paso 1. Conectar la Pantalla a la Placa Controladora**  
Alinea el cable FPC con el conector en la Placa XIAO EN04, luego asegura el pestillo para garantizar una conexión firme.  

:::tip
El lado metálico del cable FPC debe estar hacia arriba, de lo contrario, no se mostrará contenido. La mayoría de las pantallas tienen 1 y 50 en el cable FPC, esos números deben alinearse con los de la placa!

Por favor sigue el tutorial de instalación a continuación, muchas personas lo hacen mal.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2. Conectar la Batería**  
Conecta el cable de la batería al conector JST en la placa controladora, asegurando la polaridad correcta (cable rojo a +, negro a -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Verifica dos veces la polaridad, diferentes baterías pueden tener cableado mixto. Si el rojo y negro están mal alineados, pueden ser fácilmente removidos del conector JST usando una aguja y luego posicionados correctamente.
:::



## Instalando el Firmware OpenDisplay

### Método del Instalador Web (Recomendado)

La forma más fácil de instalar el firmware OpenDisplay es usando el instalador basado en web.

**Paso 1. Abrir el Instalador Web**  
Visita el [Instalador Web OpenDisplay](https://opendisplay.org/firmware/install/index.html) en un navegador.

**Paso 2. Seleccionar Tu Placa**  
Elige **"Seeed EN04 4.26"** o **"Seeed EN04 7.3"** (o cualquier preconfiguración que se adapte a tu hardware) de la lista de dispositivos (basado en el tamaño de pantalla en tu kit).

**Paso 3. Descargar el firmware**  
Haz clic en el botón **"Download Firmware"** y guarda el **"NRF52840.uf2"** en tu disco duro.

**Paso 4. Conectar Tu Placa**  
Conecta la Placa ePaper XIAO EN04 a tu computadora usando un cable USB-C.

**Paso 5. Instalar Firmware**  
Presiona el botón de reset dos veces consecutivamente. Verás aparecer un administrador de archivos en tu PC. Copia el archivo **"NRF52840.uf2"** descargado a la unidad USB que aparece (la unidad USB es la placa EN04 en modo DFU)

:::tip
Si la instalación falla, intenta:
- Usar un cable USB diferente (algunos cables son solo de alimentación)
- Presionar el botón de reset dos veces en la placa EN04
- Usar un puerto USB diferente
:::

**Paso 6. Configurar la Placa**  
Abre la [Página de Configuración OpenDisplay](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) y conéctate a tu placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>


Si seleccionaste **"Seeed EN04 4.26"** o **"Seeed EN04 7.3"**, verás **"Auto Install to Device"**.
Esta es la forma más fácil de configurar tu Kit.

**Paso 7. Conectar a la Placa**
Presiona el botón **"Connect"** en la página. Deberías ver una ventana mostrando dispositivos OpenDisplay disponibles, selecciona el nuevo dispositivo y presiona **"Pair"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png"  style={{width:500, height:'auto'}}/></div>


**Paso 8. Guardar la configuración en la Placa**  
Lo último que hay que hacer es presionar el botón **"Auto Install to Device"**, esto guardará la configuración en el dispositivo.


### Verificar Configuración

Después de la instalación y configuración, la pantalla debería mostrar una pantalla de inicio. El dispositivo ahora está listo para mostrar contenido vía Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>




## Subiendo Imágenes a la Pantalla

### Usando la Herramienta de Pantalla Web

**Paso 1. Herramienta OpenDisplay**  
Visita [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html) en tu navegador.

**Paso 2. Conectar al Dispositivo**  
Haz clic en **"Connect"** y selecciona tu dispositivo OpenDisplay del diálogo de emparejamiento Bluetooth.

**Paso 3. Seleccionar Imagen**  
Haz clic en **"Select Image"** y elige un archivo de imagen de tu computadora.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>




:::tip
Para mejores resultados:
- Usa imágenes que coincidan con la resolución de tu pantalla (la pantalla de 7.3" es de 800x480 píxeles)
- Las imágenes en blanco y negro funcionan mejor en pantallas monocromáticas
- La herramienta convertirá automáticamente y aplicará dithering a las imágenes en color
:::

**Paso 4. Subir Imagen**  
Haz clic en **"Upload Image"** para enviar la imagen a tu pantalla. El papel electrónico se refrescará y mostrará tu imagen.



### Creando Contenido Personalizado

Puedes crear contenido de pantalla personalizado usando:
- Software de edición de imágenes (GIMP, Photoshop, etc.)
- Scripts de Python con la librería PIL/Pillow
- Generadores de imágenes basados en web
- Integración con Home Assistant


### Integración con Home Assistant
:::tip
Para integrar con Home Assistant, necesitas una configuración con capacidad Bluetooth:
- **Home Assistant Green** (Bluetooth integrado)
- **Home Assistant OS/Supervised** en hardware con soporte Bluetooth
- **ESPHome Bluetooth Proxy** (recomendado para mejor alcance)

**Nota**: Los dispositivos Shelly actuando como proxies Bluetooth **no soportan conexiones activas** requeridas por OpenDisplay, por lo que no pueden ser usados para esta integración.
:::

**Paso 1. Instalar Integración**

Para instrucciones detalladas de instalación, por favor consulta el [Repositorio de Integración OpenDisplay Home Assistant](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help).

La forma más fácil de instalar la integración es vía **HACS** (Home Assistant Community Store). Haz clic en el botón de abajo para abrir el repositorio directamente en HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
Después de instalar la integración personalizada vía HACS, debes **reiniciar Home Assistant** para que los cambios tomen efecto.
:::

**Paso 2. Agregar Dispositivo Descubierto**

Una vez que Home Assistant se haya reiniciado:
1. Navega a **Settings > Devices & services**.
2. Deberías ver tu dispositivo OpenDisplay listado bajo **Discovered**.
3. Haz clic en **Add**.
4. Aparecerá un diálogo permitiéndote establecer el **Name** y **Area** del dispositivo.
5. Haz clic en **Finish**. Serás redirigido a la página de detalles del dispositivo donde puedes gestionar tu pantalla de papel electrónico.

Verás una nueva imagen mostrada en la pantalla, indicando que el dispositivo está conectado a Home Assistant.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

## Uso con Home Assistant

Una vez que hayas integrado tu dispositivo OpenDisplay con Home Assistant, puedes crear automatizaciones para actualizar dinámicamente el contenido de la pantalla basándote en datos de sensores, tiempo u otros eventos.

### Automatización de Actualizaciones de Pantalla

El servicio principal para actualizar la pantalla es `open_epaper_link.drawcustom`. Este servicio te permite dibujar texto, iconos, imágenes y formas en la pantalla. Para una lista completa de tipos y parámetros soportados, consulta la [documentación de drawcustom](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md).

Puedes crear automatizaciones en Home Assistant usando el **Visual Editor** o escribiendo código **YAML** directamente. A continuación se muestran ejemplos de ambos métodos.

#### Ejemplo 1: Mostrar Datos de Sensores (Editor Visual)

1.  Ve a **Settings > Automations & Scenes** y haz clic en **Create Automation**.
2.  Añade un disparador **Time Pattern** (por ejemplo, cada 10 minutos).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3.  Añade una **Action** y selecciona **OpenDisplay: Draw Custom Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4.  Selecciona tu dispositivo objetivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5.  En el campo **Payload**, introduce la configuración para los elementos de tu pantalla.

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

:::caution Importante: IDs de Entidad
Los IDs de entidad utilizados en el payload anterior (por ejemplo, `sensor.living_room_temperature`, `sensor.living_room_humidity`) son ejemplos. **Debes** reemplazarlos con los IDs de Entidad reales de tus sensores en Home Assistant.
:::

#### Ejemplo 2: Temporizador de Cuenta Regresiva (YAML)

Para usuarios avanzados, puedes editar la automatización en modo YAML. Esta automatización calcula los días restantes hasta una fecha específica (por ejemplo, Navidad) y la muestra.

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

:::caution Importante: ID del Dispositivo
El `device_id` mostrado en el ejemplo anterior (`2ad706d4aa7c657b6fe99a733cef2253`) es solo un ejemplo. **Debes** reemplazarlo con el ID de Dispositivo real de tu propia pantalla OpenDisplay.

Para encontrar tu ID de Dispositivo:
1. Crea una nueva automatización en Home Assistant usando el Editor Visual.
2. Selecciona tu dispositivo OpenDisplay en la configuración de la acción.
3. Cambia al **modo YAML** (haz clic en los tres puntos en la esquina superior derecha de la tarjeta de acción).
4. Copia el `device_id` del código YAML y pégalo en tu automatización.
:::

## Bonus

Si estás buscando una forma elegante de montar tu pantalla, echa un vistazo a este inserto impreso en 3D para el marco IKEA RODALM. Permite un montaje fácil de la pantalla.

- **[MakerWorld]** [Inserto Seeed 7.3" Spectra para Marco IKEA RODALM](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Solución de Problemas

### Problemas de Instalación de Firmware

**Problema**: La PC no detecta una nueva unidad USB después de conectar la placa EN04
- **Solución**: 
  - Prueba un cable USB diferente (cable de datos, no solo de alimentación)
  - Presiona el botón de reset dos veces después de conectar la placa


### Problemas de Configuración

**Problema**: La placa EN04 no es descubierta
- **Solución**:
  - Verifica que el LED en la placa parpadee - esto confirma que el dispositivo está alimentado
  - Intenta reiniciar la placa
  - Verifica la instalación del firmware o copia el archivo nuevamente

**Problema**: La pantalla no muestra nada después de la instalación del firmware
- **Solución**:
  - Verifica que el cable FPC esté insertado correctamente (contactos metálicos hacia arriba)
  - Verifica que el cable esté completamente insertado y asegurado
  - Verifica si la configuración es correcta (puedes conectarte a la placa a través del configurador y leer la configuración)


### Problemas de Conexión Bluetooth

**Problema**: No se puede encontrar el dispositivo OpenDisplay en el emparejamiento Bluetooth
- **Solución**:
  - Asegúrate de que el dispositivo esté encendido y el firmware esté instalado
  - Acércate al dispositivo (dentro de 2-3 metros)
  - Verifica que Bluetooth esté habilitado en tu computadora/teléfono

**Problema**: La conexión se interrumpe durante la carga de imagen
- **Solución**:
  - Mantente cerca del dispositivo durante la carga
  - Asegúrate de que la batería esté suficientemente cargada o alimenta el dispositivo vía USB
  - Evita cargar imágenes muy grandes
  - Intenta nuevamente con un entorno Bluetooth más estable

### Problemas de Batería y Alimentación

**Problema**: Duración corta de la batería
- **Solución**:
  - Configura intervalos de suspensión más largos en el configurador
  - Usa siempre la versión más reciente del firmware; cada versión optimiza el uso de la batería
  - Reduce la frecuencia de actualización de la pantalla
  - Verifica que la batería esté completamente cargada (4.2V para Li-Po)

**Problema**: El dispositivo no carga
- **Solución**:
  - Verifica la polaridad de la batería (rojo: +, negro: -)
  - Verifica que el cable de carga proporcione suficiente corriente (mín. 500mA)
  - Asegúrate de que el interruptor de alimentación esté en posición ON
  - Prueba con una fuente de alimentación USB diferente

## Recursos

- **[GitHub]** [Repositorio de Firmware OpenDisplay](https://github.com/OpenDisplay-org/Firmware)
- **[Herramienta Web]** [Instalador Web de Firmware](https://opendisplay.org/firmware/install/index.html)
- **[Herramienta Web]** [Constructor de Configuración](https://opendisplay.org/firmware/config/index.html)
- **[Herramienta Web]** [Probador de Pantalla](https://opendisplay.org/firmware/display/index.html)
- **[Discord]** [Comunidad OpenDisplay](https://discord.gg/WG7tbTzF9Z)
- **[Sitio Web]** [Sitio Oficial OpenDisplay](https://opendisplay.org)



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
