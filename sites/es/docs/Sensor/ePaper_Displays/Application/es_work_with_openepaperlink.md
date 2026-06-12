---
description: Controla el hardware ePaper de Seeed por Bluetooth Low Energy con los ecosistemas de código abierto OpenEPaperLink (OEPL) y OpenDisplay: cubre la XIAO ePaper Display Board EN04 y la ePaper Breakout Board para Seeed Studio XIAO.
title: Trabajar con OpenEPaperLink / OpenDisplay
keywords:
  - pantalla ePaper
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 9
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/EN04_opendisplay/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con OpenEPaperLink / OpenDisplay

El ecosistema [OpenEPaperLink (OEPL)](https://openepaperlink.de/) y el proyecto relacionado [OpenDisplay](https://opendisplay.org/) son firmware/pilas de protocolo de código abierto para controlar pantallas de papel electrónico. Las versiones modernas funcionan sobre **Bluetooth Low Energy**: tu teléfono, ordenador o Home Assistant se comunican directamente con el dispositivo, sin necesidad de un punto de acceso 802.15.4 dedicado.

Esta guía cubre dos rutas de hardware de Seeed hacia ese ecosistema:

- **XIAO ePaper Display Board EN04**: un kit integrado que ejecuta el firmware OpenDisplay sobre BLE.
- **ePaper Breakout Board para Seeed Studio XIAO**: una ruta DIY más modular que usa OEPL Config Builder + OEPL Image Uploader junto con una placa de la serie XIAO nRF52840.

Ambos flujos comparten una filosofía común (configuración por BLE, herramientas basadas en la web, bajo consumo), pero el hardware y las herramientas de firmware/web son diferentes. Elige la pestaña que coincida con tu hardware a lo largo de todo el artículo.

## Hardware compatible

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
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

Impulsada por **XIAO nRF52840 Plus**, la XIAO EN04 ePaper Display Board es la forma más sencilla de empezar con pantallas de papel electrónico habilitadas para Bluetooth. Control inalámbrico directo desde tu teléfono, ordenador o Home Assistant, sin necesidad de un punto de acceso dedicado.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<table align="center">
  <tr>
    <th>Pantalla ePaper monocroma de 4,26"</th>
    <th>ePaper Breakout Board para Seeed Studio XIAO</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
Toda la **serie XIAO nRF52840** puede controlar este kit DIY, no solo la Sense Plus que se muestra arriba. El proyecto comunitario OEPL es compatible con la pantalla de 4,26" desde el primer momento; se añadirán más tamaños de pantalla con el tiempo.
:::

</TabItem>
</Tabs>

## ¿Por qué usar OpenEPaperLink / OpenDisplay?

- **No se requiere punto de acceso**: utiliza Bluetooth Low Energy para la comunicación directa. No se necesita hardware 802.15.4.
- **Herramientas basadas en la web**: instala firmware, configura dispositivos y sube imágenes directamente desde tu navegador.
- **Compatibilidad con hardware específico**: familia XIAO nRF52840, EN04, EE04, etc.
- **Código abierto y gratuito**: desarrollado activamente en GitHub.
- **Múltiples microcontroladores**: nRF52840, ESP32-S3, ESP32-C6, ESP32-C3.
- **Flujo sencillo**: instalación de firmware por arrastrar y soltar, configuración vía web, sin programación compleja.
- **Eficiente en batería**: optimizado para e-paper de bajo consumo.
- **Comunidad activa**: [OpenDisplay Discord](https://discord.gg/WG7tbTzF9Z).

## Paso 1: Configuración del hardware

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

**Paso 1. Conecta la pantalla a la placa controladora**  
Alinea el cable FPC con el conector en la placa XIAO EN04 y luego asegura la pestaña.

:::tip
El lado metálico del cable FPC debe mirar hacia arriba; de lo contrario, no se mostrará ningún contenido. La mayoría de las pantallas tienen `1` y `50` impresos en el FPC; alinéalos con los números correspondientes en la placa.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2. Conecta la batería**  
Conecta el cable de la batería al conector JST de la placa controladora. Cable rojo al **+**, negro al **−**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Verifica la polaridad dos veces. Diferentes baterías pueden tener cableados mezclados. Los cables mal alineados pueden retirarse del conector JST con una aguja y volver a insertarse correctamente.
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

Conecta la **XIAO nRF52840 (Sense Plus)** a la **ePaper Breakout Board** y luego conecta la **pantalla ePaper monocroma de 4,26"** al conector FPC. Usa un cable de datos USB-C para conectar la XIAO a tu ordenador.

</TabItem>
</Tabs>

## Paso 2: Flashear el firmware

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

La ruta más sencilla es el instalador web de OpenDisplay.

**Paso 1.** Abre el [OpenDisplay Web Installer](https://opendisplay.org/firmware/install/index.html) en un navegador.

**Paso 2.** Elige **Seeed EN04 4.26** o **Seeed EN04 7.3** (o el preset que coincida con tu pantalla) de la lista de dispositivos.

**Paso 3.** Haz clic en **Download Firmware** y guarda `NRF52840.uf2` localmente.

**Paso 4.** Conecta la placa EN04 mediante USB-C.

**Paso 5.** Pulsa el botón de reinicio **dos veces** consecutivas. Aparecerá una unidad USB en tu ordenador (la EN04 en modo DFU). Copia `NRF52840.uf2` a esa unidad.

:::tip
Si el instalador falla:

- Prueba con un cable USB diferente (algunos solo son de alimentación; usa un cable de datos).
- Pulsa dos veces el botón de reinicio en la EN04 para volver a entrar en modo DFU.
- Prueba con un puerto USB diferente.
:::

**Paso 6.** Abre la [página de configuración de OpenDisplay](https://opendisplay.org/firmware/config/?config=nrf52840-en04-s6) y conéctate a tu placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

Si seleccionaste **Seeed EN04 4.26** o **Seeed EN04 7.3**, verás **Auto Install to Device**, la forma más sencilla de configurar el kit.

**Paso 7.** Pulsa el botón **Connect**. Selecciona el nuevo dispositivo en el cuadro de diálogo de emparejamiento y pulsa **Pair**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**Paso 8.** Pulsa **Auto Install to Device** para guardar la configuración en la placa.

Tras la instalación y configuración, la pantalla muestra una pantalla de inicio y está lista para recibir contenido por BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

La XIAO nRF52840 necesita el firmware **OEPL_BLE** antes de que OEPL Config Builder pueda comunicarse con ella.

**Paso 1.** Descarga el firmware `OEPL_BLE` más reciente desde la página oficial de lanzamientos de OEPL.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the firmware</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Conecta la XIAO nRF52840 + Breakout Board + pantalla, enchufa la XIAO a tu ordenador mediante USB-C y luego **pulsa el botón de reinicio dos veces**. La XIAO aparecerá como una unidad USB en tu ordenador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Arrastra y suelta el firmware `.uf2` descargado en esa unidad USB. La XIAO se reiniciará y ejecutará el nuevo firmware en el siguiente ciclo de encendido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Paso 3: Configurar el dispositivo por BLE

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="XIAO ePaper Display Board EN04" default>

El paso de configuración de OpenDisplay del flujo de flasheo anterior ya se encarga de esto: tu EN04 ahora debería arrancar en la pantalla de inicio de OpenDisplay y aceptar cargas de imágenes.

</TabItem>
<TabItem value="breakout" label="Placa de expansión ePaper + XIAO nRF52840">

Abre el [OEPL Config Builder](https://config.openepaperlink.org/), luego conéctate a tu XIAO mediante BLE. (Si no aparece ningún dispositivo, vuelve a flashear el firmware e inténtalo de nuevo).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

Cuando veas "Connected" en la terminal, puedes usar:

- **Read Config** — leer la configuración actual desde el MCU.
- **Write Config** — escribir una nueva configuración en el MCU.
- **Reboot** — reiniciar el MCU.

### Panel del generador

Elige variables y parámetros en el panel para componer tu configuración.

- **system_config** — IC host y pines de gestión de energía.
- **manufacturer_data** — identificador del fabricante e información de la placa.
- **power_option** — ajustes de alimentación y suspensión.
- **display** — información de la pantalla / panel (se puede repetir para varias pantallas).
- **led** — configuración opcional del LED (repetible).
- **sensor_data** — lecturas / definiciones opcionales de sensores (repetible).
- **data_bus** — definiciones de bus (I2C / SPI / …).
- **binary_inputs** — botones, interruptores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

Puedes exportar la configuración como `.bin`, `Hex` o `JSON`, o importar un JSON guardado. A continuación se ofrece una configuración ya preparada para la pantalla de 4,26".

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Configuración de ejemplo 4,26" (JSON)</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

Después de ajustar la configuración, haz clic en **Write Config** para guardarla en el MCU.

</TabItem>
</Tabs>

## Paso 4: Cargar imágenes

<Tabs groupId="oepl-hardware">
<TabItem value="en04" label="Placa de pantalla XIAO ePaper EN04" default>

El proyecto OpenDisplay tiene un cargador dedicado basado en navegador.

**Paso 1.** Abre el [OpenDisplay BLE Tester](https://opendisplay.org/firmware/display/index.html).

**Paso 2.** Haz clic en **Connect** y elige tu dispositivo OpenDisplay en el cuadro de diálogo de emparejamiento BLE.

**Paso 3.** Haz clic en **Select Image** y elige un archivo de tu ordenador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

:::tip
Para obtener los mejores resultados:

- Usa imágenes que coincidan con la resolución de tu pantalla (el panel de 7,3" es de 800×480 px).
- Las imágenes en blanco y negro se muestran mejor en pantallas monocromas.
- La herramienta convierte y aplica tramado automáticamente a las imágenes en color.
:::

**Paso 4.** Haz clic en **Upload Image**. El papel electrónico se actualiza y aparece tu imagen.

También puedes crear contenido personalizado con editores de imágenes (GIMP, Photoshop), scripts de Python + Pillow, generadores de imágenes web o una integración con Home Assistant (tratada más adelante).

</TabItem>
<TabItem value="breakout" label="Placa de expansión ePaper + XIAO nRF52840">

El OEPL Image Uploader también es una herramienta web BLE. Las asignaciones de pines difieren del firmware de Config Builder, por lo que primero debes flashear un firmware de carga de imágenes ligeramente diferente.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener el firmware</button></p>
</a>
</div>

En el campo **E-Paper prefix filter(s)**, cambia el valor a `OEPL`; de lo contrario, el cargador no puede encontrar el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

Haz clic en **Select File** para elegir un archivo local para cargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

Cuando la transferencia del archivo haya finalizado, haz clic en **Upload Image** para enviarlo al papel electrónico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

Cuando veas **Upload Complete**, el papel electrónico se habrá actualizado con la nueva imagen.

</TabItem>
</Tabs>

## Integración con Home Assistant (solo EN04 / OpenDisplay)

:::tip
Para integrarte con Home Assistant, necesitas una configuración con capacidad Bluetooth:

- **Home Assistant Green** (Bluetooth integrado)
- **Home Assistant OS / Supervised** en hardware con soporte Bluetooth
- **ESPHome Bluetooth Proxy** (recomendado para un mejor alcance; ver más abajo)

**Nota:** Los dispositivos Shelly que actúan como proxies Bluetooth **no** admiten las conexiones activas que requiere OpenDisplay, por lo que no se pueden usar.
:::

**Paso 1. Instalar la integración**

Para obtener instrucciones de instalación detalladas, consulta el [repositorio de la integración de OpenDisplay con Home Assistant](https://github.com/OpenEPaperLink/Home_Assistant_Integration?tab=readme-ov-file#getting-help).

La forma más sencilla es a través de **HACS** (Home Assistant Community Store):

[![Abre tu instancia de Home Assistant y abre un repositorio dentro de Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=OpenEpaperLink&repository=Home_Assistant_Integration)

:::info
Después de instalar la integración personalizada mediante HACS, **reinicia Home Assistant** para que los cambios surtan efecto.
:::

**Paso 2. Añadir el dispositivo detectado**

Una vez que Home Assistant haya vuelto a iniciarse:

1. Ve a **Settings → Devices & services**.
2. Busca tu dispositivo OpenDisplay en **Discovered**.
3. Haz clic en **Add**.
4. Establece el **Name** y el **Area**, luego haz clic en **Finish**.

Aparece una nueva imagen en la pantalla, lo que confirma que Home Assistant está conectado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### Automatizar las actualizaciones de la pantalla

El servicio principal es `open_epaper_link.drawcustom`, que te permite dibujar texto, iconos, imágenes y formas. Consulta la [documentación de drawcustom](https://github.com/OpenDisplay-org/Home_Assistant_Integration/blob/main/docs/drawcustom/supported_types.md) para ver la referencia completa de tipos y parámetros.

#### Ejemplo 1: mostrar datos de sensores (Editor visual)

1. Ve a **Settings → Automations & Scenes** y haz clic en **Create Automation**.
2. Añade un disparador **Time Pattern** (por ejemplo, cada 10 minutos).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

3. Añade una **Action** → **OpenDisplay: Draw Custom Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

4. Elige el dispositivo de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

5. En el campo **Payload**, introduce la configuración del diseño:

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

:::caution Entity IDs
Los IDs de entidad anteriores (por ejemplo, `sensor.living_room_temperature`) son marcadores de posición. Sustitúyelos por tus IDs de entidad reales de Home Assistant.
:::

#### Ejemplo 2: temporizador de cuenta atrás (YAML)

Para usuarios avanzados, edita la automatización como YAML. Este ejemplo cuenta hacia atrás hasta una fecha y muestra el resultado en la pantalla.

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

:::caution ID del dispositivo
El `device_id` anterior es un marcador de posición. Encuentra el ID real de tu dispositivo de la siguiente manera:

1. Crea una nueva automatización en el Editor Visual.
2. Selecciona tu dispositivo OpenDisplay en la configuración de la acción.
3. Cambia al **modo YAML** (menú de tres puntos en la tarjeta de acción).
4. Copia el `device_id` y pégalo en tu automatización.
:::

## Extra

¿Buscas una forma elegante de montar la pantalla? Este inserto impreso en 3D encaja en el marco de fotos IKEA RODÅLM y facilita el montaje:

- **[MakerWorld]** [Inserto Seeed 7.3" Spectra para marco IKEA RODALM](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Solución de problemas

### Problemas de instalación de firmware

**Problema**: El PC no detecta una nueva unidad USB después de conectar la placa.

- Prueba con otro cable USB (cable de datos, no solo de alimentación).
- Pulsa el botón de reinicio dos veces después de conectar la placa.

### Problemas de configuración

**Problema**: No se descubre la placa.

- Verifica que el LED de la placa parpadea; esto confirma que el dispositivo está alimentado.
- Intenta reiniciar la placa.
- Vuelve a flashear el firmware.

**Problema**: La pantalla no muestra nada después de instalar el firmware.

- Verifica la orientación del cable FPC (contactos metálicos hacia arriba).
- Confirma que el cable está completamente insertado y bloqueado.
- Vuelve a comprobar la configuración mediante el configurador.

### Problemas de conexión Bluetooth

**Problema**: No se puede encontrar el dispositivo en el emparejamiento Bluetooth.

- Asegúrate de que el dispositivo esté encendido y el firmware instalado.
- Acércate más (dentro de 2–3 m).
- Confirma que el Bluetooth está activado en tu ordenador / teléfono.

**Problema**: La conexión se corta durante la carga de la imagen.

- Mantente cerca del dispositivo durante la carga.
- Carga la batería suficientemente o aliméntalo mediante USB.
- Evita subir imágenes muy grandes.
- Inténtalo de nuevo en un entorno Bluetooth menos congestionado.

### Problemas de batería y alimentación

**Problema**: Poca duración de la batería.

- Configura intervalos de suspensión más largos en el configurador.
- Ejecuta siempre el firmware más reciente (cada versión mejora el consumo de energía).
- Reduce la frecuencia de actualización de la pantalla.
- Verifica que la batería esté completamente cargada (4,2 V para Li-Po).

**Problema**: El dispositivo no carga.

- Comprueba la polaridad (rojo = +, negro = −).
- Verifica que el cable de carga proporcione ≥500 mA.
- Asegúrate de que el interruptor de encendido esté **ON**.
- Prueba con otra fuente de alimentación USB.

### Problemas con Home Assistant / Integración

**Problema**: "Insufficient connection slots" al añadir dispositivos mediante Raspberry Pi + HA.

Esto suele ocurrir porque el adaptador Bluetooth integrado de la Raspberry Pi ha alcanzado su límite de conexiones simultáneas.

![Error: Insufficient connection slots](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/1.png)
*Ejemplo del mensaje "Insufficient connection slots".*

**Solución recomendada**: usa un dispositivo ESP32 (por ejemplo, XIAO ESP32S3) como **ESPHome Bluetooth Proxy**. Esto descarga la conexión Bluetooth del Pi, proporcionando "slots" más estables para tus pantallas de papel electrónico.

## Uso de ESPHome Bluetooth Proxy

Si te aparece "Insufficient connection slots" usando una Raspberry Pi con Home Assistant, un ESPHome Bluetooth Proxy es la solución más efectiva.

### Requisitos previos

- Un dispositivo ESP32 (por ejemplo, XIAO ESP32S3).
- ESPHome instalado en Home Assistant.
- Un cable de datos USB para conectar el ESP32 a tu Pi (para el primer flasheo).

### Configuración paso a paso

1. **Conecta el dispositivo**: enchufa el XIAO ESP32S3 en un puerto USB de tu Raspberry Pi.

2. **Crea una nueva configuración ESPHome** con el YAML siguiente:

   ![Configuración YAML de ESPHome](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/2.png)

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
   bluetooth_proxy:
     active: true

   api:
     encryption:
       key: "YOUR_ENCRYPTION_KEY"

   ota:
     - platform: esphome
       password: "YOUR_OTA_PASSWORD"

   wifi:
     ssid: "YOUR_WIFI_SSID"
     password: "YOUR_WIFI_PASSWORD"

   captive_portal:
   ```

3. **Instalar / flashear**:

   - Elige **Install → Plug into this computer** (o el dispositivo que ejecuta ESPHome).

     ![Proceso de flasheo de ESPHome](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/4.png)

   - En el primer flasheo, ESPHome puede descargar la cadena de herramientas `esp-idf`. Asegúrate de que tu entorno tenga acceso estable a Internet y a GitHub.
   - Después de la compilación, los registros muestran "WiFi connected" y actividad de escaneo Bluetooth.

4. **Añade el proxy a Home Assistant**:

   - Home Assistant descubrirá automáticamente el nuevo Bluetooth Proxy.
   - Una vez añadido, tus pantallas de papel electrónico deberían poder descubrirse a través del proxy sin el error de "insufficient slots".

   ![Correcto: Bluetooth Proxy conectado](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png)

   ![Correcto: pantalla de papel electrónico añadida](https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png)

## Recursos

- **[GitHub]** [Firmware de OpenDisplay](https://github.com/OpenDisplay-org/Firmware)
- **[GitHub]** [Firmware OEPL_BLE](https://github.com/OpenEPaperLink/OEPL_BLE)
- **[Web Tool]** [Instalador web del firmware de OpenDisplay](https://opendisplay.org/firmware/install/index.html)
- **[Web Tool]** [Generador de configuración de OpenDisplay](https://opendisplay.org/firmware/config/index.html)
- **[Web Tool]** [Probador de pantalla OpenDisplay](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Discord]** [Comunidad OpenDisplay](https://discord.gg/WG7tbTzF9Z)
- **[Website]** [Sitio oficial de OpenDisplay](https://opendisplay.org)
- **[Website]** [Sitio oficial de OpenEPaperLink](https://openepaperlink.de/)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
