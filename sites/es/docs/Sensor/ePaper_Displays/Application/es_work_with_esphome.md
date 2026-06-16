---
description: Guía de referencia para controlar cualquier producto Seeed ePaper compatible con ESPHome y Home Assistant: flujo de trabajo con YAML, esqueleto genérico y dónde encontrar el cookbook de cada producto.
title: Trabajar con ESPHome
keywords:
  - Pantalla ePaper
  - ESPHome
  - Home Assistant
  - YAML
  - reTerminal
  - XIAO
  - TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_esphome
sidebar_position: 2
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/epaper_work_with_esphome/
updatedAt: '2026-06-15'
---

# Trabajar con ESPHome

:::tip Probar demos sin configurar un entorno de desarrollo
Si quieres previsualizar rápidamente los resultados del proyecto o probar el firmware demo básico antes de configurar un entorno de desarrollo, abre el **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Puedes elegir un dispositivo reTerminal E Serie compatible y flashear firmware de demostración directamente desde un navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

Esta página es el **manual de referencia** para controlar cualquier producto Seeed ePaper compatible mediante [ESPHome](https://esphome.io/) e integrarlo con [Home Assistant](https://www.home-assistant.io/). Cubre las partes que son idénticas en todo el hardware:

1. Por qué elegirías ESPHome para controlar una pantalla ePaper.
2. Cómo usar los ejemplos YAML del cookbook, adaptarlos a tus necesidades y flashearlos desde tu panel de ESPHome.
3. El esqueleto YAML genérico — `wifi`, `api`, `ota`, `display` — que cada producto especializa con su propio mapa de pines.
4. Dónde se encuentra el cookbook por producto (periféricos, lambdas específicas de hardware, recetas de paneles).

Para un **recorrido de extremo a extremo "flashear → conectar → primer panel"**, ve directamente al cookbook de tu hardware más abajo; esas páginas reutilizan esta referencia para la plantilla base y añaden ejemplos específicos del producto.

## Hardware compatible

Cada producto Seeed ePaper en la [página principal del hub](/es/seeed_epaper_displays) que tenga marcada la columna **ESPHome** puede utilizar este flujo de trabajo:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Producto</th>
      <th>MCU</th>
      <th>Cookbook</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3</td>
      <td>
        <a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome/">Conceptos básicos de pantalla, integración con HA y dibujo</a><br/>
        <a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome_advanced/">Botones, zumbador, LED, batería, SHT4x y deep sleep</a><br/>
        <a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome_rtc_sd_microphone/">RTC, tarjeta SD y micrófono</a>
      </td>
    </tr>
    <tr>
      <td><strong>Placa controladora EE04</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/es/EE04_with_esphome_advanced/">Cookbook de ESPHome para EE04</a></td>
    </tr>
    <tr>
      <td><strong>Panel ePaper XIAO de 7,5"</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_esphome/">Cookbook de ESPHome para XIAO Panel</a></td>
    </tr>
    <tr>
      <td><strong>Kit DIY TRMNL 7,5" (OG)</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_esphome/">Cookbook de ESPHome para TRMNL DIY Kit</a></td>
    </tr>
  </table>
</div>


## ¿Por qué ESPHome en ePaper?

- **Eficiencia energética**: ePaper solo consume energía cuando la pantalla se está actualizando, por lo que la combinación (ESP32 + deep sleep de ESPHome + ePaper) puede funcionar durante semanas o meses con una batería.
- **Legible a la luz del día**: a diferencia del LCD, la pantalla es legible a la luz del sol; ideal para paneles de Home Assistant montados en la pared.
- **Ciudadano nativo de HA**: una vez que el dispositivo aparece en Home Assistant, cada entidad (clima, calendario, sensor, persona, tiempo) está a un solo template de Jinja de estar en la pared.
- **Local primero**: sin nube, sin dependencia de proveedor. Todo se ejecuta en tu LAN.

## Paso 1: Generar el YAML de ESPHome y flashear tu firmware

La forma más sencilla de empezar es usar el **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. El hub puede generar un archivo YAML de ESPHome a partir de tu dispositivo y de las funciones que selecciones, de modo que no necesitas ensamblar la primera configuración a mano.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/257.png" style={{width:1000, height:'auto'}}/></div>

Flujo de trabajo recomendado:

1. Abre el [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) en Chrome o Edge de escritorio.
2. Selecciona **ESPHome** como plataforma.
3. Selecciona tu dispositivo.
4. En el paso de configuración, elige las funciones que quieres habilitar, como pantalla, botones, batería, sensores, RTC, tarjeta SD, micrófono o deep sleep si están disponibles para tu dispositivo.
5. Deja que la página genere el YAML de ESPHome correspondiente.
6. Usa **Copy to clipboard** o **Download file** para exportar el YAML generado.
7. Pega o importa el YAML en tu panel de ESPHome.
8. Centra tu edición manual en la parte que más importa para tu proyecto: contenido de la pantalla ePaper, entidades de Home Assistant, diseño, fuentes y comportamiento de refresco.

:::tip
El Firmware Hub es el punto de partida recomendado para usuarios nuevos porque gestiona gran parte de la estructura YAML específica del dispositivo. Usa los cookbooks cuando quieras entender la configuración generada, combinar funciones avanzadas o crear un diseño personalizado a partir de ejemplos más pequeños.
:::

Ejecuta el panel de ESPHome como:

- un complemento de Home Assistant (recomendado si ya ejecutas HA OS / HA Supervised), o
- una CLI de Python independiente (`pip install esphome` y luego `esphome dashboard config/`).

Flujo de trabajo manual con cookbook:

1. Abre el cookbook para tu hardware (consulta la tabla anterior) y copia el ejemplo YAML que necesites.
2. En el panel de ESPHome, haz clic en + New device, introduce un nombre y elige la variante de ESP indicada en tu cookbook (ESP32-S3, ESP32-C3, etc.).
3. Sustituye el archivo inicial generado por tu configuración. Combina secciones del cookbook solo si necesitas varias funciones en un mismo dispositivo.
4. Haz clic en Install → Plug into this computer para el primer flasheo por USB. Después de configurar `wifi`, `api` y `ota`, las actualizaciones posteriores pueden ir por Wi‑Fi.
5. Cuando el dispositivo esté en línea, aparecerá en Home Assistant a través de la integración ESPHome.

## Paso 2: Entender la estructura YAML generada

Cada configuración ESPHome de Seeed ePaper sigue la misma estructura básica, pero los valores de hardware no son universales. Usa el Firmware Hub o el cookbook de tu producto como fuente de verdad para el tipo de placa, pines de bus, pines de habilitación de alimentación, plataforma de pantalla, modelo de pantalla y periféricos integrados.

El bloque siguiente es una **guía de estructura**, no una configuración lista para flashear. Muestra dónde suele aparecer cada tipo de ajuste después de generar o copiar un archivo YAML específico del producto:

```yaml
substitutions:
  device_name: my-epaper
  friendly_name: My ePaper Display

esphome:
  name: ${device_name}
  friendly_name: ${friendly_name}
  # Optional. Some products enable power rails or read sensors during boot.
  # Keep this section from the generated YAML if your device needs it.
  on_boot:
    priority: 600
    then:
      - output.turn_on: <power_enable_output_id>
      - delay: 200ms

# Board and framework come from the Firmware Hub or your cookbook.
esp32:
  board: <board_from_generated_yaml>
  framework:
    type: arduino

logger:
  # Some ESP32-S3 products use a USB-to-UART bridge.
  # Keep hardware_uart from the generated YAML if it is present.
  # hardware_uart: UART0

api:
  encryption:
    key: !secret api_key

ota:
  - platform: esphome
    password: !secret ota_password

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "${device_name} Fallback"

captive_portal:

# Buses are hardware-specific. Do not reuse pins from another product.
spi:
  clk_pin: <spi_clk_from_generated_yaml>
  mosi_pin: <spi_mosi_from_generated_yaml>
  miso_pin: <spi_miso_if_required>

i2c:
  scl: <i2c_scl_if_required>
  sda: <i2c_sda_if_required>

i2s_audio:
  # Only needed when your generated YAML enables a microphone.
  i2s_lrclk_pin: <i2s_clock_if_required>

font:
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 24

# Outputs are often used for LEDs, buzzers, or power-enable circuits.
output:
  - platform: gpio
    id: <output_id_from_generated_yaml>
    pin: <gpio_from_generated_yaml>

light:
  - platform: binary
    name: "Onboard LED"
    output: <output_id_from_generated_yaml>

time:
  - platform: homeassistant
    id: ha_time

sensor:
  # Add Home Assistant, onboard, or template sensors here.
  - platform: homeassistant
    id: outdoor_temperature
    entity_id: sensor.outdoor_temperature

binary_sensor:
  # Add buttons or status inputs here if your hardware provides them.
  - platform: gpio
    id: button_1
    pin: <button_gpio_from_generated_yaml>

display:
  - platform: <display_platform_from_generated_yaml>
    id: epaper_display
    # Keep the model and pin map from the generated YAML or cookbook.
    model: <display_model_from_generated_yaml>
    cs_pin: <display_cs_from_generated_yaml>
    dc_pin: <display_dc_from_generated_yaml>
    reset_pin: <display_reset_from_generated_yaml>
    busy_pin: <display_busy_from_generated_yaml>
    update_interval: never
    lambda: |-
      it.print(0, 0, id(font_medium), "Hello, ePaper!");
```

Conserva estos valores del Firmware Hub o del cookbook:

- `esp32.board` y cualquier ajuste de logger como `hardware_uart`.
- Pines de `spi`, `i2c` e `i2s_audio`.
- Bloques `output` de habilitación de alimentación para pantalla, medición de batería, tarjeta SD, micrófono u otros circuitos integrados.
- Definiciones de botones, batería, RTC, SHT4x, tarjeta SD, micrófono, zumbador y LED.
- La `display.platform`, `model`, mapa de pines, comportamiento de reinicio, comportamiento del pin busy e intervalo de actualización.

Las partes que normalmente personalizas son:

- `substitutions`, nombre del dispositivo y nombre descriptivo.
- Secretos de `wifi`, `api` y `ota`.
- Elección y tamaños de `font`.
- Entidades de Home Assistant `sensor`, `binary_sensor`, `text_sensor` o `time` que proporcionan los datos que quieres dibujar.
- El bloque `display.lambda`, donde diseñas el diseño real de la pantalla de papel electrónico.
- Comportamiento de actualización, como `update_interval`, actualizaciones activadas por botones o temporización de suspensión profunda.

## Paso 3: Conectar a Home Assistant

Una vez que el firmware se inicia y se une a tu Wi‑Fi, Home Assistant detecta automáticamente el dispositivo:

1. **Settings → Devices & services**
2. La integración de ESPHome muestra una tarjeta "Discovered" para tu dispositivo.
3. Haz clic en **Configure**, pega la clave de cifrado de la API (desde `secrets.yaml`) y envía.
4. El dispositivo y todas sus entidades (sensors, binary_sensors, la pantalla) ya están disponibles en HA.

Ahora puedes arrastrar las entidades a un panel de control de Lovelace o, algo mucho más interesante en papel electrónico, usar el bloque `display.lambda` para representar cualquier entidad de HA directamente en la pantalla mediante el componente [`homeassistant`](https://esphome.io/components/homeassistant.html).

## Próximos pasos — Recetarios

Esta página se detiene intencionalmente en el código base. El YAML específico del producto, los ejemplos de periféricos y las recetas de extremo a extremo se encuentran en el recetario de cada producto:

- **[reTerminal E Series — ESPHome Display](/es/reterminal_e10xx_with_esphome)** — primer panel de control, configuración de Wi‑Fi y ejemplos de dibujo en papel electrónico para E1001/E1002/E1003/E1004.
- **[reTerminal E Series — ESPHome I/O, Battery & Power](/es/reterminal_e10xx_with_esphome_advanced)** — botones, zumbador, LED integrado, monitorización de batería, sensor SHT4x, suspensión profunda y paneles de control multipágina.
- **[reTerminal E1001 / E1002 — ESPHome RTC, SD & Microphone](/es/reterminal_e10xx_with_esphome_rtc_sd_microphone)** — sincronización horaria con el RTC PCF8563, pines de alimentación/detección de tarjeta microSD y configuración del micrófono PDM integrado.
- **[EE04 driver board — ESPHome](/es/EE04_with_esphome_advanced)** — integración completa con Home Assistant en la XIAO ESP32-S3 + EE04 + la pantalla de papel electrónico que elijas.
- **[XIAO 7.5" ePaper Panel — ESPHome](/es/xiao_075inch_epaper_panel_esphome)** — panel de control mínimo con ESP32-C3.
- **[TRMNL 7.5" DIY Kit — ESPHome](/es/ogdiy_kit_works_with_esphome)** — uso del hardware del kit con ESPHome en lugar de la plataforma en la nube TRMNL.

Cuando se envían nuevos productos de papel electrónico, el recetario correspondiente se añade en la carpeta de cada producto; esta página principal se actualiza para enlazarlo.

## Problemas comunes



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
