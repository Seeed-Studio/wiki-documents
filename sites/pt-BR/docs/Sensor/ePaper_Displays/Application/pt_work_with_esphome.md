---
description: Guia de referência para controlar qualquer produto Seeed ePaper compatível com ESPHome e Home Assistant - caminhos de gravação, esqueleto YAML genérico e onde encontrar o cookbook de cada produto.
title: Trabalhar com ESPHome
keywords:
  - display ePaper
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
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com ESPHome

Esta página é o **manual de referência** para controlar qualquer produto Seeed ePaper compatível através do [ESPHome](https://esphome.io/) e integrá-lo com o [Home Assistant](https://www.home-assistant.io/). Ela cobre as partes que são idênticas em todo o hardware:

1. Por que você escolheria o ESPHome para controlar um display ePaper.
2. Os dois caminhos de gravação: **ESPHome Web Installer** (zero configuração, baseado em navegador) e **ESPHome CLI / Add-on do HA** (controle total via YAML).
3. O esqueleto YAML genérico — `wifi`, `api`, `ota`, `display` — que cada produto especializa com seu próprio mapa de pinos.
4. Onde fica o cookbook de cada produto (periféricos, lambdas específicos de hardware, receitas de dashboards).

Para um **passo a passo completo "gravar → conectar → primeiro dashboard"**, vá direto para o cookbook do seu hardware abaixo; essas páginas reutilizam esta referência para o boilerplate e adicionam exemplos específicos do produto.

## Hardware compatível

Todo produto Seeed ePaper na [página principal](/pt-br/seeed_epaper_displays) que tenha a coluna **ESPHome** marcada pode seguir este fluxo de trabalho:

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
      <td><a href="/pt-br/reterminal_e10xx_with_esphome">Básico</a> · <a href="/pt-br/reterminal_e10xx_with_esphome_advanced">Avançado (periféricos)</a></td>
    </tr>
    <tr>
      <td><strong>Placa controladora EE04</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/pt-br/EE04_with_esphome_advanced">Cookbook EE04 ESPHome</a></td>
    </tr>
    <tr>
      <td><strong>Painel ePaper XIAO 7,5"</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="/pt-br/xiao_075inch_epaper_panel_esphome">Cookbook XIAO Panel ESPHome</a></td>
    </tr>
    <tr>
      <td><strong>Kit DIY TRMNL 7,5" (OG)</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/pt-br/ogdiy_kit_works_with_esphome">Cookbook TRMNL DIY Kit ESPHome</a></td>
    </tr>
  </table>
</div>

:::tip
Procurando pelos **dashboards em nuvem TRMNL** (sem YAML, baseados em plug-ins)? Veja [Trabalhar com TRMNL](/pt-br/reterminal_e10xx_trmnl). Procurando pelo **HMI visual sem código da Seeed**? Veja [Trabalhar com SenseCraft HMI](/pt-br/EE04_with_hmi).
:::

## Por que ESPHome em ePaper?

- **Eficiência energética** — o ePaper só consome energia quando a tela está sendo atualizada, então a combinação (ESP32 + deep-sleep do ESPHome + ePaper) pode funcionar por semanas/meses com bateria.
- **Legível à luz do dia** — diferente do LCD, o display é legível sob luz solar; ótimo para painéis de Home Assistant montados na parede.
- **Cidadão nativo do HA** — depois que o dispositivo aparece no Home Assistant, cada entidade (clima, calendário, sensor, pessoa, clima) está a um template Jinja de distância de estar na parede.
- **Local-first** — sem nuvem, sem aprisionamento a fornecedor. Tudo roda na sua LAN.

## Etapa 1: Escolha um caminho de gravação

O firmware ESPHome pode ser carregado no dispositivo de duas maneiras. A escolha certa depende se você quer escrever YAML do zero ou apenas obter um dashboard funcional rapidamente.

<Tabs groupId="esphome-flash-path">
<TabItem value="web-installer" label="Caminho A: ESPHome Web Installer (recomendado para usuários iniciantes)" default>

Um firmware ZIP pré-compilado é hospedado pela Seeed e gravado no seu dispositivo através do navegador via WebSerial.

1. Conecte o dispositivo ao seu computador com um cabo USB-C.
2. Abra a página de gravação específica do produto (linkada a partir do cookbook do seu produto) no **Chrome** ou **Edge**.
3. Clique em **Connect**, escolha a porta serial e depois clique em **Install**.
4. Após a gravação, o dispositivo inicia em um portal cativo Wi-Fi (`ESPHome-XXXX`). Conecte-se, configure o Wi-Fi e o dispositivo aparecerá no Home Assistant via integração ESPHome.

Este caminho não exige **nenhuma edição de YAML**. Você pode mais tarde "adotar" o dispositivo no dashboard do ESPHome se quiser começar a personalizá-lo.

</TabItem>
<TabItem value="yaml-cli" label="Caminho B: YAML + dashboard ESPHome (controle total)">

Para controle completo sobre o firmware (layouts de display personalizados, sensores personalizados, dashboards com múltiplas páginas, ajuste de deep sleep, atualizações OTA), execute o **dashboard ESPHome** como:

- um **Add-on** do Home Assistant (recomendado se você já roda HA OS / HA Supervised), ou
- um **CLI Python** independente (`pip install esphome` e depois `esphome dashboard config/`).

Fluxo de trabalho:

1. No dashboard do ESPHome, clique em **+ New device** → insira um nome → escolha a variante correta de ESP (ESP32-S3 / ESP32-C3 / etc. — o cookbook do seu produto dirá qual).
2. O dashboard gera um `<device-name>.yaml` inicial. Substitua o corpo dele pelo YAML específico do produto a partir do seu cookbook (veja a Etapa 2 abaixo para o formato).
3. Clique em **Install** → **Conecte ao computador que está executando o ESPHome** para a primeira gravação; as gravações seguintes são sem fio via OTA.
4. O dispositivo entra automaticamente na integração ESPHome no Home Assistant.

</TabItem>
</Tabs>

## Etapa 2: Esqueleto YAML genérico

Toda configuração ESPHome de ePaper da Seeed segue o mesmo esboço. O cookbook do seu produto preenche as **partes específicas do produto** (substituições, mapa de pinos, modelo de tela) — mas o formato geral é sempre:

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

O que é específico do produto (e está em cada cookbook):

- `esp32.board` — `seeed_xiao_esp32s3` para E1001/E1002/EE04/Kit TRMNL; `esp32-c3-devkitm-1` para o Painel XIAO 7,5"; etc.
- Os mapas de pinos de `spi` e `display`.
- O valor de `model` (`7.50in-bwr`, `13.3in-spectra6`, …).
- Quaisquer periféricos onboard (botões / buzzer / bateria / SHT4x) — abordados nas seções **Avançado** do cookbook relevante.

## Etapa 3: Conectar ao Home Assistant

Quando o firmware inicia e entra na sua rede Wi-Fi, o Home Assistant descobre o dispositivo automaticamente:

1. **Settings → Devices & services**
2. A integração ESPHome mostra um cartão "Discovered" para o seu dispositivo.
3. Clique em **Configure**, cole a chave de criptografia da API (de `secrets.yaml`) e envie.
4. O dispositivo + todas as suas entidades (sensors, binary_sensors, o display) agora estão disponíveis no HA.

Agora você pode arrastar as entidades para um dashboard Lovelace ou — muito mais interessante em ePaper — usar o bloco `display.lambda` para renderizar qualquer entidade do HA diretamente na tela através do componente [`homeassistant`](https://esphome.io/components/homeassistant.html).

## Para onde ir em seguida — Cookbooks

Esta página intencionalmente para no boilerplate. O YAML específico do produto, exemplos de periféricos e receitas ponta a ponta estão no cookbook de cada produto:

- **[reTerminal E Series — ESPHome básico](/pt-br/reterminal_e10xx_with_esphome)** — primeiro dashboard, configuração de Wi-Fi, firmware ZIP pré-compilado para E1001/E1002/E1003/E1004.
- **[reTerminal E Series — ESPHome avançado](/pt-br/reterminal_e10xx_with_esphome_advanced)** — botões, buzzer, monitoramento de bateria, sensor SHT4x, deep sleep, dashboards com múltiplas páginas.
- **[Placa controladora EE04 — ESPHome](/pt-br/EE04_with_esphome_advanced)** — integração completa com Home Assistant no XIAO ESP32-S3 + EE04 + a tela ePaper de sua escolha.
- **[Painel ePaper XIAO 7,5" — ESPHome](/pt-br/xiao_075inch_epaper_panel_esphome)** — dashboard mínimo com ESP32-C3.
- **[Kit DIY TRMNL 7,5" — ESPHome](/pt-br/ogdiy_kit_works_with_esphome)** — usando o hardware do kit com ESPHome em vez da plataforma em nuvem TRMNL.

Quando novos produtos ePaper forem lançados, o cookbook correspondente será adicionado na pasta de cada produto; esta página principal será atualizada para apontar para ele.

## Problemas comuns

### O display permanece em branco após a gravação

- Confirme que as strings `display.platform` e `model` correspondem à sua tela — o modelo errado produz silenciosamente uma atualização em branco.
- Verifique se `busy_pin` e `reset_pin` estão conectados corretamente; uma linha busy solta bloqueará todas as atualizações.
- Para ePaper colorido (`spectra6`, `7-color`, `bwr`), a primeira atualização pode levar de 25 a 45 segundos; aguarde antes de continuar o debug.

### O dispositivo não aparece no Home Assistant

- Verifique se o dispositivo entrou no Wi-Fi (confira os logs do dashboard ESPHome).
- Certifique-se de que `api:` está presente no YAML e de que a chave de criptografia no HA corresponde à de `secrets.yaml`.
- Adicione a integração manualmente: **Settings → Devices & services → Add Integration → ESPHome**, depois insira o IP do dispositivo.

### A bateria descarrega mais rápido do que o esperado

O ePaper só economiza energia quando o restante do SoC também está em modo de suspensão. Adicione um bloco `deep_sleep` (veja o cookbook Avançado do seu produto) e reduza o `update_interval`.

Para uma depuração mais profunda em um produto específico, consulte o cookbook para esse hardware.

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
