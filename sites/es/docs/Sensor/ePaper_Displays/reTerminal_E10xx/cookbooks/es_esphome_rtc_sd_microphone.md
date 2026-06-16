---
description: Recetario de ESPHome para reTerminal E1001 / E1002: demostraciones independientes para sincronización de hora del RTC PCF8563, detección de tarjeta microSD, inicialización del micrófono PDM integrado y un panel combinado de estado de hardware.
title: 'Recetario ESPHome: RTC, Tarjeta SD y Micrófono (reTerminal E Serie)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_esphome_rtc_sd_microphone
sidebar_position: 5
sidebar_label: 'ESPHome - RTC, SD y Micrófono'
last_update:
  date: 06/12/2026
  author: Citric
createdAt: '2026-06-12'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome_rtc_sd_microphone/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recetario ESPHome: RTC, Tarjeta SD y Micrófono (reTerminal E Serie)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/251.jpeg" style={{width:1000, height:'auto'}}/></div><br />

:::tip Requisitos previos
Esta página asume que ya has completado el [recetario de pantalla ESPHome para reTerminal E Serie](/es/reterminal_e10xx_with_esphome) y que tu dispositivo está en línea en Home Assistant. Para botones, zumbador, LED, monitorización de batería, SHT4x y suspensión profunda, consulta [Recetario ESPHome: Botones, Zumbador, LED, Batería y Bajo Consumo](/es/reterminal_e10xx_with_esphome_advanced).
:::

:::tip Prueba las demos sin configurar un entorno de desarrollo
Si quieres previsualizar rápidamente los resultados del proyecto o probar el firmware de demostración básico antes de configurar un entorno de desarrollo, abre el **[Centro de Firmware de reTerminal E-Series](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Puedes elegir un dispositivo reTerminal E Serie compatible y flashear firmware de demostración directamente desde un navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

Este recetario continúa los ejemplos de ESPHome para reTerminal E Serie con tres bloques de hardware integrados que no se cubren en los recetarios de pantalla e I/O:

- **RTC PCF8563**: lee la hora de hardware desde el RTC integrado y la sincroniza desde Home Assistant.
- **Ranura para tarjeta microSD**: habilita el raíl de alimentación de la SD e informa si hay una tarjeta insertada.
- **Micrófono PDM**: habilita el raíl de alimentación del micrófono integrado e inicializa el micrófono PDM mediante ESPHome.

Cada sección a continuación está organizada como una pequeña demo independiente de ESPHome. Puedes copiar un ejemplo completo de YAML, reemplazar los marcadores de posición de API y OTA y subirlo directamente desde ESPHome.

:::note Cobertura de modelos
Los ejemplos listos para copiar de esta página están escritos para **reTerminal E1001** y **reTerminal E1002**, coincidiendo con los ejemplos de hardware de ESPHome probados. Los ejemplos del micrófono integrado se aplican a los modelos que incluyen el hardware de micrófono PDM; reTerminal E1004 no incluye el micrófono.
:::

## Capacidades de hardware

Los siguientes pines son utilizados por las demos de este recetario.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Función</th>
      <th>Componente ESPHome</th>
      <th>Pin / Dirección</th>
    </tr>
    <tr>
      <td>RTC PCF8563</td>
      <td><code>time.pcf8563</code></td>
      <td>Dirección I2C <code>0x51</code>, SDA <code>GPIO19</code>, SCL <code>GPIO20</code></td>
    </tr>
    <tr>
      <td>Detección de tarjeta microSD</td>
      <td><code>binary_sensor.gpio</code></td>
      <td><code>GPIO15</code>, activo en BAJO</td>
    </tr>
    <tr>
      <td>Habilitación de alimentación de microSD</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO16</code></td>
    </tr>
    <tr>
      <td>Habilitación de alimentación del micrófono PDM</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO38</code></td>
    </tr>
    <tr>
      <td>Reloj del micrófono PDM</td>
      <td><code>i2s_audio</code></td>
      <td><code>GPIO42</code></td>
    </tr>
    <tr>
      <td>Datos del micrófono PDM</td>
      <td><code>microphone.i2s_audio</code></td>
      <td><code>GPIO41</code></td>
    </tr>
    <tr>
      <td>Bus SPI compartido</td>
      <td><code>spi</code></td>
      <td>CLK <code>GPIO7</code>, MOSI <code>GPIO9</code>, MISO <code>GPIO8</code></td>
    </tr>
  </table>
</div>

:::caution Mantén tus secretos en privado
Los ejemplos usan marcadores de posición como `REPLACE_WITH_YOUR_API_KEY` y `REPLACE_WITH_YOUR_OTA_PASSWORD`. No publiques tu clave de cifrado de API real, contraseña OTA, contraseña de Wi‑Fi ni token de Home Assistant.
:::

## Sincronización de hora del RTC

Esta demo lee la hora desde el **RTC PCF8563** integrado y la muestra en la pantalla de papel electrónico. Cuando Home Assistant sincroniza la hora con el dispositivo, ESPHome escribe esa hora de vuelta en el RTC de hardware.

El RTC usa el bus I2C compartido:

- SDA: `GPIO19`
- SCL: `GPIO20`
- Dirección del RTC: `0x51`

Puedes usar este ejemplo reemplazando los valores de los marcadores de posición y subiendo el YAML completo a tu dispositivo.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
esphome:
  name: reterminal-e1001-rtc-demo
  friendly_name: reTerminal_E1001_RTC_Demo
  on_boot:
    priority: 600
    then:
      - pcf8563.read_time:

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1001-RTC-Demo"
    password: "ChangeMe123"

captive_portal:

i2c:
  scl: GPIO20
  sda: GPIO19

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 26

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(400, 40, id(font_title), TextAlign::TOP_CENTER, "RTC Time Sync Demo");
      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(400, 135, id(font_title), TextAlign::TOP_CENTER, "%Y-%m-%d", now);
        it.strftime(400, 190, id(font_title), TextAlign::TOP_CENTER, "%H:%M:%S", now);
        ESP_LOGD("rtc_demo", "RTC time is valid");
      } else {
        it.printf(400, 150, id(font_body), TextAlign::TOP_CENTER, "RTC: waiting for sync");
        ESP_LOGW("rtc_demo", "RTC time is not valid yet");
      }
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml
esphome:
  name: reterminal-e1002-rtc-demo
  friendly_name: reTerminal_E1002_RTC_Demo
  on_boot:
    priority: 600
    then:
      - pcf8563.read_time:

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1002-RTC-Demo"
    password: "ChangeMe123"

captive_portal:

i2c:
  scl: GPIO20
  sda: GPIO19

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 26

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto RED = Color(255, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);

      it.printf(400, 40, id(font_title), BLACK, TextAlign::TOP_CENTER, "RTC Time Sync Demo");
      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(400, 135, id(font_title), BLUE, TextAlign::TOP_CENTER, "%Y-%m-%d", now);
        it.strftime(400, 190, id(font_title), BLUE, TextAlign::TOP_CENTER, "%H:%M:%S", now);
        ESP_LOGD("rtc_demo", "RTC time is valid");
      } else {
        it.printf(400, 150, id(font_body), RED, TextAlign::TOP_CENTER, "RTC: waiting for sync");
        ESP_LOGW("rtc_demo", "RTC time is not valid yet");
      }
```

</TabItem>
</Tabs>

Esta configuración:

- Lee el RTC PCF8563 una vez durante el arranque.
- Usa la hora de Home Assistant como fuente de verdad después de que el dispositivo se conecte.
- Escribe la hora de Home Assistant de vuelta en el RTC de hardware.
- Muestra la fecha y hora actuales en la pantalla de papel electrónico.

La siguiente imagen muestra el resultado esperado en reTerminal E1002. La misma demo funciona tanto en reTerminal E1001 como en E1002. La diferencia principal es la salida de la pantalla: E1001 muestra un resultado monocromo, mientras que E1002 puede mostrar un resultado en color.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/252.jpeg" style={{width:700, height:'auto'}}/></div>

:::tip
Si la hora del RTC no se mantiene correcta después de un ciclo completo de apagado y encendido, instala o reemplaza la pila tipo moneda CR1220 del portapilas de respaldo del RTC.
:::

## Detección de tarjeta MicroSD

Esta demo informa si hay una tarjeta microSD insertada. También enciende el raíl de alimentación de la tarjeta SD a través de `GPIO16`.

El pin de detección de tarjeta es activo en BAJO, por lo que el sensor binario usa `inverted: true`.

Puedes usar este ejemplo reemplazando los valores de los marcadores de posición y subiendo el YAML completo a tu dispositivo.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
esphome:
  name: reterminal-e1001-sd-demo
  friendly_name: reTerminal_E1001_SD_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1001-SD-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
    on_press:
      then:
        - logger.log: "SD card inserted"
        - component.update: epaper_display
    on_release:
      then:
        - logger.log: "SD card removed"
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 28

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(400, 40, id(font_title), TextAlign::TOP_CENTER, "microSD Card Detection");
      if (id(sd_card_detect).state) {
        it.printf(400, 160, id(font_body), TextAlign::TOP_CENTER, "SD Card: inserted");
      } else {
        it.printf(400, 160, id(font_body), TextAlign::TOP_CENTER, "SD Card: not detected");
      }
      it.printf(400, 230, id(font_body), TextAlign::TOP_CENTER, "Detect pin: GPIO15");
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml
esphome:
  name: reterminal-e1002-sd-demo
  friendly_name: reTerminal_E1002_SD_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1002-SD-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
    on_press:
      then:
        - logger.log: "SD card inserted"
        - component.update: epaper_display
    on_release:
      then:
        - logger.log: "SD card removed"
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 28

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto RED = Color(255, 0, 0, 0);
      const auto GREEN = Color(0, 255, 0, 0);

      it.printf(400, 40, id(font_title), BLACK, TextAlign::TOP_CENTER, "microSD Card Detection");
      if (id(sd_card_detect).state) {
        it.printf(400, 160, id(font_body), GREEN, TextAlign::TOP_CENTER, "SD Card: inserted");
      } else {
        it.printf(400, 160, id(font_body), RED, TextAlign::TOP_CENTER, "SD Card: not detected");
      }
      it.printf(400, 230, id(font_body), BLACK, TextAlign::TOP_CENTER, "Detect pin: GPIO15");
```

</TabItem>
</Tabs>

Esta configuración:

- Habilita la alimentación de la tarjeta SD a través de `GPIO16`.
- Lee la señal de detección de tarjeta desde `GPIO15`.
- Muestra el estado de la tarjeta en la pantalla de ePaper.
- Expone `SD Card Detected` a Home Assistant como un sensor binario.

La siguiente imagen muestra el resultado esperado en reTerminal E1002. La misma demostración funciona tanto en reTerminal E1001 como en E1002. La principal diferencia es la salida de la pantalla: E1001 muestra un resultado monocromo, mientras que E1002 puede mostrar un resultado en color.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/253.jpeg" style={{width:700, height:'auto'}}/></div>

:::note Cómo ESPHome utiliza la tarjeta microSD
En este recetario de ESPHome, la tarjeta microSD se utiliza como una señal de estado del dispositivo. La demostración comprueba si hay una tarjeta insertada, muestra el resultado en la pantalla y expone el mismo estado a Home Assistant.

Esto se debe a que ESPHome está diseñado principalmente para sensores, interruptores, pantallas y automatización con Home Assistant. Normalmente no se utiliza como un gestor de archivos local en el dispositivo. Tareas como abrir archivos, crear carpetas, escribir registros o grabar audio WAV directamente en la tarjeta SD se gestionan mejor con Arduino, donde tu firmware controla directamente el sistema de archivos de la tarjeta SD.

En una configuración típica de ESPHome, el estado de la tarjeta SD se puede utilizar para:
- mostrar si el almacenamiento está físicamente disponible;
- activar automatizaciones de Home Assistant cuando se inserta o se retira una tarjeta;
- mostrar información sobre el estado del hardware junto con el estado del RTC, la batería y el micrófono.

Si tu objetivo es leer y escribir archivos directamente en la tarjeta SD, consulta en su lugar el recetario de la tarjeta SD con Arduino.
:::

## Comprobación de alimentación del micrófono PDM

Esta demostración habilita el carril de alimentación del micrófono PDM integrado y muestra la asignación de pines del micrófono en la pantalla de ePaper. Mantiene el YAML mínimo para que puedas verificar primero la actualización de la pantalla y luego añadir la configuración opcional del micrófono I2S de ESPHome si quieres utilizar el micrófono con el Asistente de Voz de Home Assistant.

El micrófono utiliza estos pines:

- Habilitación de alimentación: `GPIO38`
- Reloj PDM: `GPIO42`
- Datos PDM: `GPIO41`

Puedes utilizar este ejemplo sustituyendo los valores de marcador de posición y subiendo el YAML completo a tu dispositivo.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
esphome:
  name: reterminal-e1001-mic-demo
  friendly_name: reTerminal_E1001_Mic_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - logger.log: "PDM microphone power enabled"
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1001-Mic-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

output:
  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 26

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(400, 40, id(font_title), TextAlign::TOP_CENTER, "PDM Microphone Power");
      it.printf(400, 135, id(font_body), TextAlign::TOP_CENTER, "Mic Power: ON");
      it.printf(400, 190, id(font_body), TextAlign::TOP_CENTER, "CLK GPIO42 / DATA GPIO41");
      it.printf(400, 245, id(font_body), TextAlign::TOP_CENTER, "I2S microphone: optional");
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml
esphome:
  name: reterminal-e1002-mic-demo
  friendly_name: reTerminal_E1002_Mic_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - logger.log: "PDM microphone power enabled"
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1002-Mic-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

output:
  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 26

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);

      it.printf(400, 40, id(font_title), BLACK, TextAlign::TOP_CENTER, "PDM Microphone Power");
      it.printf(400, 135, id(font_body), BLUE, TextAlign::TOP_CENTER, "Mic Power: ON");
      it.printf(400, 190, id(font_body), BLACK, TextAlign::TOP_CENTER, "CLK GPIO42 / DATA GPIO41");
      it.printf(400, 245, id(font_body), BLACK, TextAlign::TOP_CENTER, "I2S microphone: optional");
```

</TabItem>
</Tabs>

Esta configuración:

- Habilita la alimentación del micrófono a través de `GPIO38`.
- Muestra el pin de reloj PDM `GPIO42` y el pin de datos `GPIO41` en la pantalla de ePaper.
- Mantiene la demostración principal cercana a las demostraciones de RTC y microSD, de modo que se pueda verificar la actualización de la pantalla antes de añadir el componente de audio.

Si quieres exponer el micrófono PDM integrado a ESPHome, añade el siguiente bloque opcional después de confirmar que la demostración de la pantalla se actualiza correctamente:

```yaml
i2s_audio:
  i2s_lrclk_pin: GPIO42

microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41
```

La siguiente imagen muestra el resultado esperado en reTerminal E1002. La misma demostración funciona tanto en reTerminal E1001 como en E1002. La principal diferencia es la salida de la pantalla: E1001 muestra un resultado monocromo, mientras que E1002 puede mostrar un resultado en color.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/254.jpeg" style={{width:700, height:'auto'}}/></div>

:::note
Esta demostración solo verifica el control de alimentación del micrófono y la asignación de pines relacionada en la pantalla de ePaper. Un flujo de voz completo de Home Assistant Assist requiere el bloque opcional de micrófono anterior y una configuración adicional del asistente de voz. La grabación de audio directamente en la tarjeta SD se gestiona mejor con los ejemplos de micrófono de Arduino.
:::

## Demostración 4: Panel completo de estado de RTC, tarjeta SD y micrófono

Esta demostración combina las tres funciones anteriores en una sola página de estado de hardware:

1. Fecha y hora del RTC desde el PCF8563.
2. Estado de inserción de la tarjeta microSD desde `GPIO15`.
3. Estado de inicialización del micrófono PDM.

Para una mejor comprensión, ejecuta primero las demostraciones de función única antes de probar este ejemplo combinado.

<details>
<summary>Haz clic aquí para ver el código completo</summary>

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
esphome:
  name: reterminal-e1001-hardware-status
  friendly_name: reTerminal_E1001_Hardware_Status
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1001-HW-Status"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

i2s_audio:
  i2s_lrclk_pin: GPIO42

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
        - component.update: epaper_display

microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
    on_press:
      then:
        - component.update: epaper_display
    on_release:
      then:
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_small
    size: 20
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 32

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(400, 20, id(font_medium), TextAlign::TOP_CENTER,
                "reTerminal E1001 Hardware Status");
      it.line(20, 60, 780, 60);

      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(30, 95, id(font_medium), "%Y-%m-%d %H:%M", now);
        ESP_LOGD("status", "RTC time is valid");
      } else {
        it.printf(30, 95, id(font_medium), "RTC: waiting for sync");
        ESP_LOGW("status", "RTC time is not valid yet");
      }

      if (id(sd_card_detect).state) {
        it.printf(30, 155, id(font_medium), "SD Card: inserted");
      } else {
        it.printf(30, 155, id(font_medium), "SD Card: not detected");
      }

      it.printf(30, 215, id(font_medium), "PDM Mic: initialized");
      it.printf(30, 265, id(font_small), "RTC: I2C address 0x51");
      it.printf(30, 295, id(font_small), "SD: DET GPIO15 / EN GPIO16");
      it.printf(30, 325, id(font_small), "Mic: CLK GPIO42 / DATA GPIO41 / EN GPIO38");
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml
esphome:
  name: reterminal-e1002-hardware-status
  friendly_name: reTerminal_E1002_Hardware_Status
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1002-HW-Status"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

i2s_audio:
  i2s_lrclk_pin: GPIO42

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
        - component.update: epaper_display

microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
    on_press:
      then:
        - component.update: epaper_display
    on_release:
      then:
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_small
    size: 20
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 32

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);
      const auto GREEN = Color(0, 255, 0, 0);
      const auto RED = Color(255, 0, 0, 0);

      it.printf(400, 20, id(font_medium), BLACK, TextAlign::TOP_CENTER,
                "reTerminal E1002 Hardware Status");
      it.line(20, 60, 780, 60, BLACK);

      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(30, 95, id(font_medium), BLUE, "%Y-%m-%d %H:%M", now);
        ESP_LOGD("status", "RTC time is valid");
      } else {
        it.printf(30, 95, id(font_medium), RED, "RTC: waiting for sync");
        ESP_LOGW("status", "RTC time is not valid yet");
      }

      if (id(sd_card_detect).state) {
        it.printf(30, 155, id(font_medium), GREEN, "SD Card: inserted");
      } else {
        it.printf(30, 155, id(font_medium), RED, "SD Card: not detected");
      }

      it.printf(30, 215, id(font_medium), BLUE, "PDM Mic: initialized");
      it.printf(30, 265, id(font_small), BLACK, "RTC: I2C address 0x51");
      it.printf(30, 295, id(font_small), BLACK, "SD: DET GPIO15 / EN GPIO16");
      it.printf(30, 325, id(font_small), BLACK, "Mic: CLK GPIO42 / DATA GPIO41 / EN GPIO38");
```

</TabItem>
</Tabs>

</details>

Cuando el firmware se está ejecutando, la pantalla muestra la hora del RTC, el estado de la tarjeta SD y el estado de inicialización del micrófono en una sola página.

La siguiente imagen muestra el resultado esperado en reTerminal E1002. La misma demostración funciona tanto en reTerminal E1001 como en E1002. La principal diferencia es la salida de la pantalla: el E1001 muestra un resultado monocromático, mientras que el E1002 puede mostrar un resultado en color.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/250.jpeg" style={{width:700, height:'auto'}}/></div>

## Preguntas frecuentes

### P1: ¿Por qué la pantalla muestra "RTC: waiting for sync"?

El dispositivo aún no ha recibido una hora válida. Confirma que el Wi‑Fi está conectado, que la API de ESPHome está conectada a Home Assistant y que Home Assistant tiene la hora del sistema correcta. Después de que Home Assistant sincronice la hora, ESPHome escribe la hora de vuelta en el RTC PCF8563.

### P2: ¿Por qué no hay registro serie por USB?

La reTerminal E Serie utiliza un puente USB‑a‑UART CH340K en UART0. Mantén este ajuste de logger en tu archivo YAML:

```yaml
logger:
  hardware_uart: UART0
```

### P3: ¿Por qué la pantalla no se actualiza en la demostración de RTC o micrófono?

Si hay insertada una tarjeta microSD, retira primero la tarjeta y reinicia el dispositivo. Excepto para la demostración de detección de tarjeta microSD, las otras demostraciones de esta página no necesitan que la tarjeta esté insertada. Mantener una tarjeta insertada puede afectar al bus SPI compartido e impedir que la pantalla de papel electrónico se actualice correctamente.

Después de retirar la tarjeta, vuelve a cargar o reinicia la demostración de RTC o micrófono. La pantalla de papel electrónico debería actualizarse con normalidad.

## Recursos

- **[Wiki]** [ESPHome Cookbook: Display Basics](/es/reterminal_e10xx_with_esphome)
- **[Wiki]** [ESPHome Cookbook: Buttons, Buzzer, LED, Battery & Low Power](/es/reterminal_e10xx_with_esphome_advanced)
- **[Wiki]** [Work with ESPHome](/es/epaper_work_with_esphome)
- **[Wiki]** [Arduino Cookbook: Onboard Peripherals](/es/reterminal_e10xx_with_arduino_peripherals)
- **[Wiki]** [Arduino Cookbook: RTC, Low Power, Audio & Touch](/es/reterminal_e10xx_with_arduino_peripherals_2)
- **[Documentation]** [ESPHome Time Component](https://esphome.io/components/time/)
- **[Documentation]** [ESPHome I2S Audio Component](https://esphome.io/components/i2s_audio.html)

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
