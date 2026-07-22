---
description: Guia de referência para controlar qualquer produto Seeed ePaper compatível com ESPHome e Home Assistant - fluxo de trabalho em YAML, esqueleto genérico e onde encontrar o cookbook de cada produto.
title: Trabalhar com ESPHome
keywords:
  - ePaper display
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
url: https://wiki.seeedstudio.com/pt-br/epaper_work_with_esphome/
updatedAt: '2026-06-16'
---

# Trabalhar com ESPHome

:::tip Experimente demos sem configurar um ambiente de desenvolvimento
Se você quiser visualizar rapidamente os resultados do projeto ou testar o firmware demo básico antes de configurar um ambiente de desenvolvimento, abra o **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Você pode escolher um dispositivo reTerminal E Series compatível e gravar o firmware de demonstração diretamente a partir de um navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

Esta página é o **manual de referência** para controlar qualquer produto Seeed ePaper compatível por meio do [ESPHome](https://esphome.io/) e integrá-lo ao [Home Assistant](https://www.home-assistant.io/). Ela cobre as partes que são idênticas em todo o hardware:

1. Por que você escolheria o ESPHome para controlar um display ePaper.
2. Como usar os exemplos de YAML do cookbook, adaptá-los às suas necessidades e gravar a partir do seu painel ESPHome.
3. O esqueleto YAML genérico — `wifi`, `api`, `ota`, `display` — que cada produto especializa com seu próprio mapa de pinos.
4. Onde fica o cookbook de cada produto (periféricos, lambdas específicos de hardware, receitas de painel).

Para um **passo a passo completo "gravar → conectar → primeiro painel"**, vá direto para o cookbook do seu hardware abaixo; essas páginas reutilizam esta referência para o boilerplate e adicionam exemplos específicos do produto.

## Hardware compatível

Todo produto Seeed ePaper na [página principal do hub](/pt-br/seeed_epaper_displays) que tenha a coluna **ESPHome** marcada pode usar este fluxo de trabalho:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Produto</th>
      <th>MCU</th>
      <th>Cookbook</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3</td>
      <td>
        <a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome/">Noções básicas de display, integração com HA e desenho</a><br/>
        <a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome_advanced/">Botões, buzzer, LED, bateria, SHT4x e deep sleep</a><br/>
        <a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome_rtc_sd_microphone/">RTC, cartão SD e microfone</a>
      </td>
    </tr>
    <tr>
      <td><strong>Placa controladora EE04</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/pt-br/EE04_with_esphome_advanced/">Cookbook ESPHome da EE04</a></td>
    </tr>
    <tr>
      <td><strong>Painel ePaper XIAO 7,5"</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel_esphome/">Cookbook ESPHome do Painel XIAO</a></td>
    </tr>
    <tr>
      <td><strong>Kit DIY TRMNL 7,5" (OG)</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/pt-br/ogdiy_kit_works_with_esphome/">Cookbook ESPHome do Kit DIY TRMNL</a></td>
    </tr>
  </table>
</div>


## Por que ESPHome em ePaper?

- **Eficiência energética** — o ePaper só consome energia quando a tela está sendo atualizada, então a combinação (ESP32 + deep-sleep do ESPHome + ePaper) pode funcionar por semanas/meses com uma bateria.
- **Legível à luz do dia** — diferente do LCD, o display é legível sob luz solar; ótimo para painéis de Home Assistant montados na parede.
- **Cidadão nativo do HA** — depois que o dispositivo aparece no Home Assistant, cada entidade (clima, calendário, sensor, pessoa, clima) está a um template Jinja de distância de estar na parede.
- **Local em primeiro lugar** — sem nuvem, sem aprisionamento a fornecedor. Tudo roda na sua LAN.

## Etapa 1: Gerar o YAML do ESPHome e gravar seu firmware

A maneira mais fácil de começar é usar o **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. O hub pode gerar um arquivo YAML do ESPHome a partir das seleções de dispositivo e recursos, para que você não precise montar a primeira configuração manualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/257.png" style={{width:1000, height:'auto'}}/></div>

Fluxo de trabalho recomendado:

1. Abra o [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) no Chrome ou Edge para desktop.
2. Selecione **ESPHome** como plataforma.
3. Selecione seu dispositivo.
4. Na etapa de configuração, escolha os recursos que você quer habilitar, como display, botões, bateria, sensores, RTC, cartão SD, microfone ou deep sleep, se estiverem disponíveis para o seu dispositivo.
5. Deixe a página gerar o YAML do ESPHome correspondente.
6. Use **Copy to clipboard** ou **Download file** para exportar o YAML gerado.
7. Cole ou importe o YAML no seu painel ESPHome.
8. Concentre sua edição manual na parte que mais importa para o seu projeto: conteúdo do display ePaper, entidades do Home Assistant, layout, fontes e comportamento de atualização.

:::tip
O Firmware Hub é o ponto de partida recomendado para novos usuários porque ele lida com grande parte da estrutura YAML específica do dispositivo. Use os cookbooks quando quiser entender a configuração gerada, combinar recursos avançados ou criar um layout personalizado a partir de exemplos menores.
:::

Execute o painel ESPHome como:

- um Add-on do Home Assistant (recomendado se você já executa HA OS / HA Supervised), ou
- uma CLI Python independente (`pip install esphome` e depois `esphome dashboard config/`).

Fluxo de trabalho manual com cookbook:

1. Abra o cookbook para o seu hardware (veja a tabela acima) e copie o exemplo de YAML de que você precisa.
2. No painel ESPHome, clique em + New device, insira um nome e escolha a variante de ESP listada no seu cookbook (ESP32-S3, ESP32-C3, etc.).
3. Substitua o arquivo inicial gerado pela sua configuração. Combine seções do cookbook apenas se você precisar de vários recursos em um único dispositivo.
4. Clique em Install → Plug into this computer para o primeiro flash via USB. Depois que `wifi`, `api` e `ota` estiverem configurados, as atualizações posteriores podem ser feitas via Wi-Fi.
5. Quando o dispositivo estiver online, ele aparecerá no Home Assistant por meio da integração ESPHome.

## Etapa 2: Entender a estrutura do YAML gerado

Toda configuração ESPHome de ePaper da Seeed segue a mesma estrutura básica, mas os valores de hardware não são universais. Use o Firmware Hub ou o cookbook do seu produto como fonte de verdade para o tipo de placa, pinos de barramento, pinos de habilitação de energia, plataforma de display, modelo de display e periféricos onboard.

O bloco abaixo é um **guia de estrutura**, não uma configuração pronta para gravação. Ele mostra onde cada tipo de configuração geralmente aparece depois que você gera ou copia um arquivo YAML específico do produto:

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

Mantenha estes valores do Firmware Hub ou do cookbook:

- `esp32.board` e quaisquer configurações de logger, como `hardware_uart`.
- Pinos de `spi`, `i2c` e `i2s_audio`.
- Blocos `output` de habilitação de energia para display, medição de bateria, cartão SD, microfone ou outros circuitos onboard.
- Definições de botões, bateria, RTC, SHT4x, cartão SD, microfone, buzzer e LED.
- A `display.platform`, `model`, mapa de pinos, comportamento de reset, comportamento do pino busy e intervalo de atualização.

As partes que você normalmente personaliza são:

- `substitutions`, nome do dispositivo e nome amigável.
- Segredos de `wifi`, `api` e `ota`.
- Escolhas e tamanhos de `font`.
- Entidades do Home Assistant `sensor`, `binary_sensor`, `text_sensor` ou `time` que fornecem os dados que você quer desenhar.
- O bloco `display.lambda`, onde você projeta o layout real da tela de ePaper.
- Comportamento de atualização, como `update_interval`, atualizações acionadas por botão ou temporização de deep sleep.

## Etapa 3: Conectar ao Home Assistant

Quando o firmware inicializa e se conecta ao seu Wi-Fi, o Home Assistant descobre o dispositivo automaticamente:

1. **Settings → Devices & services**
2. A integração ESPHome mostra um cartão "Discovered" para o seu dispositivo.
3. Clique em **Configure**, cole a chave de criptografia da API (de `secrets.yaml`) e envie.
4. O dispositivo e todas as suas entidades (sensors, binary_sensors, o display) agora estão disponíveis no HA.

Agora você pode arrastar as entidades para um dashboard Lovelace ou — muito mais interessante em ePaper — usar o bloco `display.lambda` para renderizar qualquer entidade do HA diretamente na tela por meio do componente [`homeassistant`](https://esphome.io/components/homeassistant.html).

## Próximos passos — Livros de receitas

Esta página termina propositalmente no modelo básico. O YAML específico de cada produto, exemplos de periféricos e receitas ponta a ponta ficam no livro de receitas de cada produto:

- **[reTerminal E Series — ESPHome Display](/pt-br/reterminal_e10xx_with_esphome)** — primeiro dashboard, configuração de Wi-Fi e exemplos de desenho em ePaper para E1001/E1002/E1003/E1004.
- **[reTerminal E Series — ESPHome I/O, Battery & Power](/pt-br/reterminal_e10xx_with_esphome_advanced)** — botões, buzzer, LED onboard, monitoramento de bateria, sensor SHT4x, deep sleep e dashboards com várias páginas.
- **[reTerminal E1001 / E1002 — ESPHome RTC, SD & Microphone](/pt-br/reterminal_e10xx_with_esphome_rtc_sd_microphone)** — sincronização de horário com RTC PCF8563, pinos de alimentação/detecção do cartão microSD e configuração do microfone PDM onboard.
- **[EE04 driver board — ESPHome](/pt-br/EE04_with_esphome_advanced)** — integração completa com o Home Assistant no XIAO ESP32-S3 + EE04 + a tela de ePaper de sua escolha.
- **[XIAO 7.5" ePaper Panel — ESPHome](/pt-br/xiao_075inch_epaper_panel_esphome)** — dashboard mínimo em ESP32-C3.
- **[TRMNL 7.5" DIY Kit — ESPHome](/pt-br/ogdiy_kit_works_with_esphome)** — usando o hardware do kit com ESPHome em vez da plataforma em nuvem TRMNL.

Quando novos produtos de ePaper forem lançados, o livro de receitas correspondente será adicionado na pasta de cada produto; esta página principal será atualizada para apontar para ele.

## Problemas comuns



## Suporte técnico e discussão sobre produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
