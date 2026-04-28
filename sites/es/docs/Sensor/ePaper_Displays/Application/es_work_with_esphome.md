---
description: Guía de referencia para controlar cualquier producto Seeed ePaper compatible con ESPHome y Home Assistant: rutas de flasheo, esqueleto YAML genérico y dónde encontrar el cookbook de cada producto.
title: Trabajar con ESPHome
keywords:
  - pantalla ePaper
  - ESPHome
  - Home Assistant
  - YAML
  - reTerminal
  - XIAO
  - TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_esphome
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con ESPHome

Esta página es el **manual de referencia** para controlar cualquier producto Seeed ePaper compatible mediante [ESPHome](https://esphome.io/) e integrarlo con [Home Assistant](https://www.home-assistant.io/). Cubre las partes que son idénticas en todo el hardware:

1. Por qué elegirías ESPHome para controlar una pantalla ePaper.
2. Las dos rutas de flasheo: **ESPHome Web Installer** (cero configuración, basado en navegador) y **ESPHome CLI / complemento de HA** (control YAML completo).
3. El esqueleto YAML genérico — `wifi`, `api`, `ota`, `display` — que cada producto especializa con su propio mapa de pines.
4. Dónde se encuentra el cookbook por producto (periféricos, lambdas específicas de hardware, recetas de paneles).

Para un **recorrido de extremo a extremo "flashear → conectar → primer panel"**, ve directamente al cookbook de tu hardware más abajo; esas páginas reutilizan esta referencia para el boilerplate y añaden ejemplos específicos del producto.

## Hardware compatible

Cada producto Seeed ePaper en la [página principal](/es/seeed_epaper_displays) que tenga marcada la columna **ESPHome** puede seguir este flujo de trabajo:

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
      <td><a href="/es/reterminal_e10xx_with_esphome">Básico</a> · <a href="/es/reterminal_e10xx_with_esphome_advanced">Avanzado (periféricos)</a></td>
    </tr>
    <tr>
      <td><strong>Placa controladora EE04</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/es/EE04_with_esphome_advanced">Cookbook de EE04 con ESPHome</a></td>
    </tr>
    <tr>
      <td><strong>Panel ePaper XIAO 7.5"</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="/es/xiao_075inch_epaper_panel_esphome">Cookbook del panel XIAO con ESPHome</a></td>
    </tr>
    <tr>
      <td><strong>Kit DIY TRMNL 7.5" (OG)</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/es/ogdiy_kit_works_with_esphome">Cookbook del kit DIY TRMNL con ESPHome</a></td>
    </tr>
  </table>
</div>

:::tip
¿Buscas mejor **paneles TRMNL en la nube** (sin YAML, basados en complementos)? Consulta [Trabajar con TRMNL](/es/reterminal_e10xx_trmnl). ¿Buscas mejor la **HMI visual sin código de Seeed**? Consulta [Trabajar con SenseCraft HMI](/es/EE04_with_hmi).
:::

## ¿Por qué ESPHome en ePaper?

- **Eficiencia energética**: ePaper solo consume energía cuando la pantalla se está actualizando, así que la combinación (ESP32 + deep-sleep de ESPHome + ePaper) puede funcionar durante semanas/meses con una batería.
- **Legible a la luz del día**: a diferencia del LCD, la pantalla es legible a la luz del sol; ideal para paneles de Home Assistant montados en la pared.
- **Ciudadano nativo de HA**: una vez que el dispositivo aparece en Home Assistant, cada entidad (clima, calendario, sensor, persona, tiempo) está a un template Jinja de distancia de estar en la pared.
- **Local primero**: sin nube, sin bloqueo de proveedor. Todo se ejecuta en tu LAN.

## Paso 1: Elige una ruta de flasheo

El firmware de ESPHome se puede cargar en el dispositivo de dos maneras. La elección correcta depende de si quieres escribir YAML desde cero o simplemente obtener un panel funcional rápidamente.

<Tabs groupId="esphome-flash-path">
<TabItem value="web-installer" label="Ruta A: ESPHome Web Installer (recomendada para usuarios primerizos)" default>

Seeed aloja un firmware ZIP precompilado y se flashea en tu dispositivo a través del navegador mediante WebSerial.

1. Conecta el dispositivo a tu ordenador con un cable USB-C.
2. Abre la página de flasheo por producto (enlazada desde el cookbook de tu producto) en **Chrome** o **Edge**.
3. Haz clic en **Connect**, elige el puerto serie y luego haz clic en **Install**.
4. Después del flasheo, el dispositivo arranca en un portal cautivo Wi‑Fi (`ESPHome-XXXX`). Conéctate, configura el Wi‑Fi y el dispositivo aparecerá en Home Assistant mediante la integración ESPHome.

Esta ruta no requiere **ninguna edición de YAML**. Más adelante puedes "adoptar" el dispositivo en el panel de ESPHome si quieres empezar a personalizarlo.

</TabItem>
<TabItem value="yaml-cli" label="Ruta B: YAML + panel de ESPHome (control total)">

Para un control completo sobre el firmware (diseños de pantalla personalizados, sensores personalizados, paneles multipágina, ajuste de deep sleep, actualizaciones OTA), ejecuta el **panel de ESPHome** como:

- un **complemento** de Home Assistant (recomendado si ya ejecutas HA OS / HA Supervised), o
- una **CLI de Python** independiente (`pip install esphome` y luego `esphome dashboard config/`).

Flujo de trabajo:

1. En el panel de ESPHome, haz clic en **+ New device** → introduce un nombre → elige la variante ESP correcta (ESP32-S3 / ESP32-C3 / etc. — tu cookbook de producto te dirá cuál).
2. El panel genera un `<device-name>.yaml` inicial. Sustituye su cuerpo por el YAML específico del producto de tu cookbook (consulta el Paso 2 más abajo para la estructura).
3. Haz clic en **Install** → **Conecta al ordenador que ejecuta ESPHome** para el primer flasheo; los flasheos posteriores son inalámbricos mediante OTA.
4. El dispositivo se une automáticamente a la integración ESPHome en Home Assistant.

</TabItem>
</Tabs>

## Paso 2: Esqueleto YAML genérico

Cada configuración ESPHome de Seeed ePaper sigue el mismo esquema. El cookbook de tu producto rellena las **partes específicas del producto** (sustituciones, mapa de pines, modelo de pantalla), pero la forma general siempre es:

```yaml
substitutions:
  device_name: my-epaper

esphome:
  name: ${device_name}
  friendly_name: ${device_name}

# Pick the right platform for your hardware.
# - reTerminal E Series & EE04 & TRMNL Kit: esp32 with framework: arduino (S3 variant)
# - XIAO 7.5" Panel: esp32 with framework: arduino (C3 variant)
esp32:
  board: seeed_xiao_esp32s3   # see your cookbook
  framework:
    type: arduino

logger:
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

# SPI bus that drives the ePaper - exact pins come from the cookbook
spi:
  clk_pin: GPIO13
  mosi_pin: GPIO11

# The display block - the model + pin map are the part that's
# different per product. The cookbook gives you the right values.
display:
  - platform: waveshare_epaper
    id: epaper
    cs_pin: GPIO9
    dc_pin: GPIO15
    busy_pin: GPIO12
    reset_pin: GPIO14
    model: 7.50inv2
    update_interval: never   # we'll trigger refreshes from automations
    lambda: |-
      it.print(0, 0, id(roboto_24), "Hello, ePaper!");

font:
  - file: "fonts/Roboto-Regular.ttf"
    id: roboto_24
    size: 24
```

Qué es específico del producto (y está en cada cookbook):

- `esp32.board` — `seeed_xiao_esp32s3` para E1001/E1002/EE04/Kit TRMNL; `esp32-c3-devkitm-1` para el panel XIAO 7.5"; etc.
- Los mapas de pines de `spi` y `display`.
- El valor de `model` (`7.50in-bwr`, `13.3in-spectra6`, …).
- Cualquier periférico integrado (botones / zumbador / batería / SHT4x), cubierto en las secciones **Avanzadas** del cookbook correspondiente.

## Paso 3: Conectar a Home Assistant

Una vez que el firmware arranca y se une a tu Wi‑Fi, Home Assistant detecta automáticamente el dispositivo:

1. **Settings → Devices & services**
2. La integración ESPHome muestra una tarjeta "Discovered" para tu dispositivo.
3. Haz clic en **Configure**, pega la clave de cifrado de la API (desde `secrets.yaml`) y envía.
4. El dispositivo y todas sus entidades (sensors, binary_sensors, la pantalla) ya están disponibles en HA.

Ahora puedes arrastrar las entidades a un panel Lovelace o — mucho más interesante en ePaper — usar el bloque `display.lambda` para renderizar cualquier entidad de HA directamente en la pantalla mediante el componente [`homeassistant`](https://esphome.io/components/homeassistant.html).

## Próximos pasos: Cookbooks

Esta página se detiene intencionadamente en el boilerplate. El YAML específico del producto, los ejemplos de periféricos y las recetas de extremo a extremo están en el cookbook de cada producto:

- **[reTerminal E Serie — ESPHome básico](/es/reterminal_e10xx_with_esphome)**: primer panel, configuración de Wi‑Fi, firmware ZIP precompilado para E1001/E1002/E1003/E1004.
- **[reTerminal E Serie — ESPHome avanzado](/es/reterminal_e10xx_with_esphome_advanced)**: botones, zumbador, monitorización de batería, sensor SHT4x, deep sleep, paneles multipágina.
- **[Placa controladora EE04 — ESPHome](/es/EE04_with_esphome_advanced)**: integración completa con Home Assistant en el XIAO ESP32-S3 + EE04 + la pantalla ePaper que elijas.
- **[Panel ePaper XIAO 7.5" — ESPHome](/es/xiao_075inch_epaper_panel_esphome)**: panel mínimo con ESP32-C3.
- **[Kit DIY TRMNL 7.5" — ESPHome](/es/ogdiy_kit_works_with_esphome)**: usar el hardware del kit con ESPHome en lugar de la plataforma en la nube TRMNL.

Cuando se envíen nuevos productos ePaper, se añadirá el cookbook correspondiente en la carpeta de cada producto; esta página principal se actualizará para enlazarlo.

## Problemas comunes

### La pantalla permanece en blanco después del flasheo

- Confirma que las cadenas `display.platform` y `model` coinciden con tu pantalla: un modelo incorrecto produce silenciosamente una actualización en blanco.
- Comprueba que `busy_pin` y `reset_pin` estén cableados correctamente; una línea busy suelta bloqueará todas las actualizaciones.
- Para ePaper en color (`spectra6`, `7-color`, `bwr`), la primera actualización puede tardar 25‑45 segundos; espera antes de seguir depurando.

### El dispositivo no aparece en Home Assistant

- Verifica que el dispositivo se haya unido al Wi‑Fi (revisa los registros del panel de ESPHome).
- Asegúrate de que `api:` esté presente en el YAML y de que la clave de cifrado en HA coincida con `secrets.yaml`.
- Añade la integración manualmente: **Settings → Devices & services → Add Integration → ESPHome**, luego introduce la IP del dispositivo.

### La batería se agota más rápido de lo esperado

ePaper solo ahorra energía cuando el resto del SoC también está en reposo. Añade un bloque `deep_sleep` (consulta el cookbook avanzado de tu producto) y reduce el `update_interval`.

Para una depuración más profunda en un producto específico, consulta el cookbook de ese hardware.

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
