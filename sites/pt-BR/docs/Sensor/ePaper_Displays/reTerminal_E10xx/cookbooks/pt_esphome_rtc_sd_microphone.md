---
description: cookbook ESPHome para reTerminal E1001 / E1002 / E1003 / E1004 - demos independentes para sincronização de hora do RTC PCF8563, detecção de cartão microSD, inicialização do microfone PDM onboard e um painel combinado de status de hardware.
title: 'Cookbook ESPHome: RTC, Cartão SD e Microfone (reTerminal E Series)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_esphome_rtc_sd_microphone
sidebar_position: 5
sidebar_label: ESPHome - RTC, SD e Microfone
last_update:
  date: 08/05/2026
  author: Citric
createdAt: '2026-06-12'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome_rtc_sd_microphone/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cookbook ESPHome: RTC, Cartão SD e Microfone (reTerminal E Series)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/251.jpeg" style={{width:1000, height:'auto'}}/></div><br />

:::tip Pré-requisitos
Esta página pressupõe que você já concluiu o [cookbook ESPHome para display do reTerminal E Series](/pt-br/reterminal_e10xx_with_esphome) e que seu dispositivo está online no Home Assistant. Para botões, buzzer, LED, monitoramento de bateria, SHT4x, toque capacitivo (E1003) e deep sleep, consulte [Cookbook ESPHome: Botões, Buzzer, LED, Bateria, Toque e Baixo Consumo](/pt-br/reterminal_e10xx_with_esphome_advanced).
:::

:::tip Gerar YAML do ESPHome ou gravar demos no navegador
Quer uma configuração ESPHome pronta sem montar cada pino manualmente? Abra o **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**, escolha o cartão **ESPHome**, selecione seu dispositivo (E1001 / E1002 / E1003 / E1004) e marque os recursos onboard de que você precisa — display, botões, bateria, sensores, RTC, cartão SD, microfone, toque, deep sleep e mais. O Hub gera um YAML ESPHome correspondente que você pode copiar ou baixar para o seu painel do ESPHome.

O mesmo Hub também pode gravar firmware de demonstração diretamente pelo navegador (Chrome ou Edge para desktop). Para o fluxo de trabalho compartilhado do ESPHome, consulte **[Trabalhar com ESPHome](/pt-br/epaper_work_with_esphome)**.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />
:::

Este cookbook continua os exemplos de ESPHome para reTerminal E Series com três blocos de hardware onboard que não são abordados nos cookbooks de display e E/S:

- **RTC PCF8563** - ler a hora de hardware do RTC onboard e sincronizá-la a partir do Home Assistant.
- **slot para cartão microSD** - habilitar o trilho de alimentação do SD e informar se um cartão está inserido.
- **microfone PDM** - habilitar o trilho de alimentação do microfone onboard e inicializar o microfone PDM via ESPHome.

Cada seção abaixo é organizada como uma pequena demo ESPHome independente. Você pode copiar um exemplo YAML completo, substituir os placeholders de API e OTA e enviá-lo diretamente a partir do ESPHome.

:::note Cobertura de modelos
Os exemplos prontos para copiar nesta página cobrem **reTerminal E1001 / E1002 / E1003 / E1004**. E1003 e E1004 exigem **ESPHome 2026.7.0 ou posterior**. Os exemplos de microfone onboard se aplicam a modelos que incluem o hardware de microfone PDM (**E1001 / E1002 / E1003**); o **reTerminal E1004 não inclui o microfone**.
:::

## Capacidades de Hardware

Os seguintes pinos são usados pelas demos neste cookbook.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Função</th>
      <th>Componente ESPHome</th>
      <th>Pino / Endereço</th>
    </tr>
    <tr>
      <td>RTC PCF8563</td>
      <td><code>time.pcf8563</code></td>
      <td>Endereço I2C <code>0x51</code>, SDA <code>GPIO19</code>, SCL <code>GPIO20</code></td>
    </tr>
    <tr>
      <td>Detecção de cartão microSD</td>
      <td><code>binary_sensor.gpio</code></td>
      <td><code>GPIO15</code>, ativo em nível BAIXO</td>
    </tr>
    <tr>
      <td>Habilitar alimentação do microSD</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO16</code> (E1001 / E1002 / E1004), <code>GPIO39</code> (E1003)</td>
    </tr>
    <tr>
      <td>Habilitar alimentação do microfone PDM</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO38</code></td>
    </tr>
    <tr>
      <td>Clock do microfone PDM</td>
      <td><code>i2s_audio</code></td>
      <td><code>GPIO42</code></td>
    </tr>
    <tr>
      <td>Dados do microfone PDM</td>
      <td><code>microphone.i2s_audio</code></td>
      <td><code>GPIO41</code></td>
    </tr>
    <tr>
      <td>Barramento SPI compartilhado</td>
      <td><code>spi</code></td>
      <td>CLK <code>GPIO7</code>, MOSI <code>GPIO9</code>, MISO <code>GPIO8</code></td>
    </tr>
  </table>
</div>

:::caution Mantenha seus segredos em sigilo
Os exemplos usam placeholders como `REPLACE_WITH_YOUR_API_KEY` e `REPLACE_WITH_YOUR_OTA_PASSWORD`. Não publique sua chave real de criptografia da API, senha OTA, senha de Wi-Fi ou token do Home Assistant.
:::

## Sincronização de Hora do RTC

Esta demo lê a hora do **RTC PCF8563** onboard e a exibe na tela de ePaper. Quando o Home Assistant sincroniza a hora com o dispositivo, o ESPHome grava essa hora de volta no RTC de hardware.

O RTC usa o barramento I2C compartilhado:

- SDA: `GPIO19`
- SCL: `GPIO20`
- Endereço do RTC: `0x51`

Você pode usar este exemplo substituindo os valores de placeholder e enviando o YAML completo para o seu dispositivo.

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

<TabItem value="For E1003" label="Para E1003">

:::tip
Atualize sua versão do ESPHome para **2026.7.0** ou posterior.
:::

```yaml
esphome:
  name: reterminal-e1003-rtc-demo
  friendly_name: reTerminal_E1003_RTC_Demo
  on_boot:
    priority: 600
    then:
      - pcf8563.read_time:

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1003-RTC-Demo"
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
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(400, 40, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "RTC Time Sync Demo");
      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(400, 135, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "%Y-%m-%d", now);
        it.strftime(400, 190, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "%H:%M:%S", now);
        ESP_LOGD("rtc_demo", "RTC time is valid");
      } else {
        it.printf(400, 150, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "RTC: waiting for sync");
        ESP_LOGW("rtc_demo", "RTC time is not valid yet");
      }
```

</TabItem>

<TabItem value="For E1004" label="Para E1004">

:::tip
Atualize sua versão do ESPHome para **2026.7.0** ou posterior.
:::

```yaml
esphome:
  name: reterminal-e1004-rtc-demo
  friendly_name: reTerminal_E1004_RTC_Demo
  on_boot:
    priority: 600
    then:
      - pcf8563.read_time:

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1004-RTC-Demo"
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
    model: seeed-reterminal-e1004
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

Esta configuração:

- Lê o RTC PCF8563 uma vez durante a inicialização.
- Usa a hora do Home Assistant como fonte de verdade após o dispositivo se conectar.
- Grava a hora do Home Assistant de volta no RTC de hardware.
- Exibe a data e hora atuais na tela de ePaper.

A imagem a seguir mostra o resultado esperado no reTerminal E1002. O mesmo padrão de demonstração funciona em toda a linha reTerminal E Series. Escolha a aba do dispositivo correspondente acima. Os painéis monocromáticos / em escala de cinza (E1001, E1003) e os painéis coloridos (E1002, E1004) diferem principalmente na plataforma de exibição e na API de desenho em cores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/252.jpeg" style={{width:700, height:'auto'}}/></div>

:::tip
Se a hora do RTC não permanecer correta após um ciclo completo de energia, instale ou substitua a bateria tipo moeda CR1220 no suporte de backup do RTC.
:::

## Detecção de Cartão MicroSD

Esta demonstração informa se um cartão microSD está inserido. Ela também liga o trilho de alimentação do cartão SD através do `GPIO16` (E1001 / E1002 / E1004) ou `GPIO39` (E1003).

O pino de detecção do cartão é ativo em nível BAIXO, portanto o sensor binário usa `inverted: true`.

Você pode usar este exemplo substituindo os valores de espaço reservado e enviando o YAML completo para o seu dispositivo.

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
  id: epaper_spi_bus
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
  id: epaper_spi_bus
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

<TabItem value="For E1003" label="Para E1003">

:::tip
Atualize sua versão do ESPHome para **2026.7.0** ou posterior. O E1003 usa habilitação de alimentação do SD no `GPIO39`.
:::

```yaml
esphome:
  name: reterminal-e1003-sd-demo
  friendly_name: reTerminal_E1003_SD_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1003-SD-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

output:
  - platform: gpio
    pin: GPIO39
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
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(400, 40, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "microSD Card Detection");
      if (id(sd_card_detect).state) {
        it.printf(400, 160, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "SD Card: inserted");
      } else {
        it.printf(400, 160, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "SD Card: not detected");
      }
      it.printf(400, 230, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "Detect pin: GPIO15");
```

</TabItem>

<TabItem value="For E1004" label="Para E1004">

:::tip
Atualize sua versão do ESPHome para **2026.7.0** ou posterior.
:::

```yaml
esphome:
  name: reterminal-e1004-sd-demo
  friendly_name: reTerminal_E1004_SD_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1004-SD-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  id: epaper_spi_bus
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
    model: seeed-reterminal-e1004
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

Esta configuração:

- Habilita a alimentação do cartão SD através do `GPIO16` (E1001 / E1002 / E1004) ou `GPIO39` (E1003).
- Lê o sinal de detecção de cartão a partir do `GPIO15`.
- Mostra o estado do cartão na tela de ePaper.
- Expõe `SD Card Detected` ao Home Assistant como um sensor binário.

A imagem a seguir mostra o resultado esperado no reTerminal E1002. O mesmo padrão de demonstração funciona em toda a linha reTerminal E Series. Escolha a aba do dispositivo correspondente acima. Os painéis monocromáticos / em escala de cinza (E1001, E1003) e os painéis coloridos (E1002, E1004) diferem principalmente na plataforma de exibição e na API de desenho em cores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/253.jpeg" style={{width:700, height:'auto'}}/></div>

:::note Como o ESPHome usa o cartão microSD
Neste cookbook de ESPHome, o cartão microSD é usado como um sinal de status do dispositivo. A demonstração verifica se um cartão está inserido, mostra o resultado na tela e expõe o mesmo estado ao Home Assistant.

Isso acontece porque o ESPHome é projetado principalmente para sensores, interruptores, telas e automação com Home Assistant. Ele normalmente não é usado como um gerenciador de arquivos local no dispositivo. Tarefas como abrir arquivos, criar pastas, gravar logs ou registrar áudio WAV diretamente no cartão SD são melhor tratadas com Arduino, onde o seu firmware controla diretamente o sistema de arquivos do cartão SD.

Em uma configuração típica de ESPHome, o status do cartão SD pode ser usado para:
- mostrar se o armazenamento está fisicamente disponível;
- acionar automações do Home Assistant quando um cartão é inserido ou removido;
- exibir informações de integridade de hardware junto com o status do RTC, bateria e microfone.

Se o seu objetivo é leitura/gravação direta de arquivos no cartão SD, consulte em vez disso o cookbook de cartão SD para Arduino.
:::

## Verificação de Alimentação do Microfone PDM

Esta demonstração habilita a linha de alimentação do microfone PDM onboard e exibe a atribuição dos pinos do microfone na tela de ePaper. Ela mantém o YAML mínimo para que você possa verificar primeiro a atualização da tela e, em seguida, adicionar a configuração opcional do microfone I2S do ESPHome se quiser usar o microfone com o Assistente de Voz do Home Assistant.

O microfone usa estes pinos:

- Habilitar alimentação: `GPIO38`
- Clock PDM: `GPIO42`
- Dados PDM: `GPIO41`

Você pode usar este exemplo substituindo os valores de placeholder e enviando o YAML completo para o seu dispositivo.

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

<TabItem value="For E1003" label="Para E1003">

:::tip
Atualize sua versão do ESPHome para **2026.7.0** ou posterior. O reTerminal E1003 inclui o microfone PDM onboard.
:::

```yaml
esphome:
  name: reterminal-e1003-mic-demo
  friendly_name: reTerminal_E1003_Mic_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - logger.log: "PDM microphone power enabled"
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1003-Mic-Demo"
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
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(400, 40, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "PDM Microphone Power");
      it.printf(400, 135, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "Mic Power: ON");
      it.printf(400, 190, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "CLK GPIO42 / DATA GPIO41");
      it.printf(400, 245, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "I2S microphone: optional");
```

</TabItem>

<TabItem value="For E1004" label="Para E1004">

:::note
**O reTerminal E1004 não inclui um microfone PDM onboard.** Use as demonstrações de RTC e microSD nesta página para o E1004 ou ignore esta seção.
:::

</TabItem>
</Tabs>

Esta configuração:

- Habilita a alimentação do microfone através do `GPIO38`.
- Mostra o pino de clock PDM `GPIO42` e o pino de dados `GPIO41` na tela de ePaper.
- Mantém a demonstração principal próxima às demos de RTC e microSD, para que a atualização da tela possa ser verificada antes de adicionar o componente de áudio.

Se você quiser expor o microfone PDM onboard ao ESPHome, adicione o seguinte bloco opcional depois de confirmar que a demonstração da tela está atualizando corretamente:

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

A imagem a seguir mostra o resultado esperado no reTerminal E1002. O mesmo padrão de demonstração funciona em toda a linha reTerminal E Series. Escolha a aba do dispositivo correspondente acima. Os painéis monocromáticos / em escala de cinza (E1001, E1003) e os painéis coloridos (E1002, E1004) diferem principalmente na plataforma de exibição e na API de desenho em cores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/254.jpeg" style={{width:700, height:'auto'}}/></div>

:::note
Esta demonstração apenas verifica o controle de alimentação do microfone e a atribuição de pinos relacionada na tela de ePaper. Um pipeline completo de voz do Home Assistant Assist requer o bloco opcional de microfone acima e configuração adicional do assistente de voz. Gravar áudio diretamente no cartão SD é melhor tratado pelos exemplos de microfone em Arduino.
:::

## Demo 4: Painel Completo de Status de RTC, Cartão SD e Microfone

Esta demonstração combina os três recursos acima em uma única página de status de hardware:

1. Data e hora do RTC a partir do PCF8563.
2. Status de inserção do cartão microSD a partir do `GPIO15`.
3. Status de inicialização do microfone PDM.

Para uma melhor compreensão, execute primeiro as demonstrações de função única antes de tentar este exemplo combinado.

<details>
<summary>Clique aqui para ver o código completo</summary>

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
  id: epaper_spi_bus
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
  id: epaper_spi_bus
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

<TabItem value="For E1003" label="Para E1003">

:::tip
Atualize sua versão do ESPHome para **2026.7.0** ou posterior.
:::

```yaml
esphome:
  name: reterminal-e1003-hardware-status
  friendly_name: reTerminal_E1003_Hardware_Status
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1003-HW-Status"
    password: "ChangeMe123"

captive_portal:

spi:
  id: epaper_spi_bus
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
    pin: GPIO39
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
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(400, 20, id(font_medium), Color::BLACK, TextAlign::TOP_CENTER,
                "reTerminal E1003 Hardware Status");
      it.line(20, 60, 780, 60, Color::BLACK);

      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(30, 95, id(font_medium), Color::BLACK, "%Y-%m-%d %H:%M", now);
        ESP_LOGD("status", "RTC time is valid");
      } else {
        it.printf(30, 95, id(font_medium), Color::BLACK, "RTC: waiting for sync");
        ESP_LOGW("status", "RTC time is not valid yet");
      }

      if (id(sd_card_detect).state) {
        it.printf(30, 155, id(font_medium), Color::BLACK, "SD Card: inserted");
      } else {
        it.printf(30, 155, id(font_medium), Color::BLACK, "SD Card: not detected");
      }

      it.printf(30, 215, id(font_medium), Color::BLACK, "PDM Mic: initialized");
      it.printf(30, 265, id(font_small), Color::BLACK, "RTC: I2C address 0x51");
      it.printf(30, 295, id(font_small), Color::BLACK, "SD: DET GPIO15 / EN GPIO39");
      it.printf(30, 325, id(font_small), Color::BLACK, "Mic: CLK GPIO42 / DATA GPIO41 / EN GPIO38");
```

</TabItem>

<TabItem value="For E1004" label="Para E1004">

:::tip
Atualize sua versão do ESPHome para **2026.7.0** ou posterior. O reTerminal E1004 não inclui um microfone PDM integrado, portanto esta demonstração de status abrange apenas RTC e microSD.
:::

```yaml
esphome:
  name: reterminal-e1004-hardware-status
  friendly_name: reTerminal_E1004_Hardware_Status
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - pcf8563.read_time:
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1004-HW-Status"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

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
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);
      const auto GREEN = Color(0, 255, 0, 0);
      const auto RED = Color(255, 0, 0, 0);

      it.printf(400, 20, id(font_medium), BLACK, TextAlign::TOP_CENTER,
                "reTerminal E1004 Hardware Status");
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

      it.printf(30, 215, id(font_medium), BLUE, "PDM Mic: not available on E1004");
      it.printf(30, 265, id(font_small), BLACK, "RTC: I2C address 0x51");
      it.printf(30, 295, id(font_small), BLACK, "SD: DET GPIO15 / EN GPIO16");
```

</TabItem>
</Tabs>

</details>

Quando o firmware está em execução, a tela mostra a hora do RTC e o estado do cartão SD em uma única página. Os modelos com microfone PDM integrado (E1001 / E1002 / E1003) também exibem o status de inicialização do microfone; o E1004 mostra que o microfone não está disponível.

A imagem a seguir mostra o resultado esperado no reTerminal E1002. O mesmo padrão de demonstração funciona em toda a linha reTerminal E Series. Escolha a aba do dispositivo correspondente acima. Os painéis monocromáticos / em tons de cinza (E1001, E1003) e os painéis coloridos (E1002, E1004) diferem principalmente na plataforma de exibição e na API de desenho de cores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/250.jpeg" style={{width:700, height:'auto'}}/></div>

## Perguntas frequentes (FAQ)

### P1: Por que a tela mostra "RTC: waiting for sync"?

O dispositivo ainda não recebeu um horário válido. Confirme se o Wi-Fi está conectado, se a API do ESPHome está conectada ao Home Assistant e se o Home Assistant está com a hora correta do sistema. Depois que o Home Assistant sincronizar a hora, o ESPHome grava o horário de volta no RTC PCF8563.

### P2: Por que não há log serial via USB?

A reTerminal E Series usa uma ponte USB‑para‑UART CH340K na UART0. Mantenha esta configuração de logger no seu YAML:

```yaml
logger:
  hardware_uart: UART0
```

### P3: Por que a tela não atualiza na demonstração de RTC ou de microfone?

Se um cartão microSD estiver inserido, remova primeiro o cartão e reinicie o dispositivo. Exceto para a demonstração de detecção de cartão microSD, as outras demonstrações desta página não precisam que o cartão esteja inserido. Manter um cartão inserido pode afetar o barramento SPI compartilhado e impedir que a tela de ePaper seja atualizada corretamente.

Depois de remover o cartão, envie ou reinicie novamente a demonstração de RTC ou de microfone. A tela de ePaper deve atualizar normalmente.

## Recursos

- **[Tool]** [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) — gere YAML do ESPHome selecionando os recursos do dispositivo ou grave demonstrações diretamente pelo navegador
- **[Wiki]** [ESPHome Cookbook: Conceitos básicos de display](/pt-br/reterminal_e10xx_with_esphome)
- **[Wiki]** [ESPHome Cookbook: Botões, buzzer, LED, bateria, toque e baixo consumo](/pt-br/reterminal_e10xx_with_esphome_advanced)
- **[Wiki]** [Trabalhando com ESPHome](/pt-br/epaper_work_with_esphome)
- **[Wiki]** [Arduino Cookbook: Periféricos onboard](/pt-br/reterminal_e10xx_with_arduino_peripherals)
- **[Wiki]** [Arduino Cookbook: RTC, baixo consumo, áudio e toque](/pt-br/reterminal_e10xx_with_arduino_peripherals_2)
- **[Documentation]** [Componente de tempo do ESPHome](https://esphome.io/components/time/)
- **[Documentation]** [Componente de áudio I2S do ESPHome](https://esphome.io/components/i2s_audio.html)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
