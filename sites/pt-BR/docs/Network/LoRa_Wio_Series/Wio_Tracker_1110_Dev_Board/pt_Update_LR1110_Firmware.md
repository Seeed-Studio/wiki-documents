---
description: Atualizando o firmware LR1110 no Wio Tracker 1110 usando a ferramenta oficial LR11xx Updater da Semtech
title: Atualizar o firmware LR1110 no Wio Tracker 1110
keywords:
  - Wio
  - Tracker
  - LR1110
  - Atualização de firmware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /update_internal_lr1110_firmware
sku: 114993186
sidebar_position: 8
last_update:
  date: 06/17/2026
  author: David Du
createdAt: '2026-06-17'
updatedAt: '2026-06-18'
url: https://wiki.seeedstudio.com/pt-br/update_internal_lr1110_firmware/
---

## Visão geral

A placa de desenvolvimento Wio Tracker 1110 é construída em torno do módulo sem fio Wio-WM1110, que integra o transceptor LoRa® LR1110 da Semtech e um front-end de rádio multiuso para geolocalização. Este guia explica como atualizar o firmware no chip LR1110 incorporado no Wio Tracker 1110 usando a ferramenta oficial Semtech LR11xx Updater.

:::note
A ferramenta LR11xx Updater é uma implementação de referência fornecida pela Semtech para atualizar a memória de programa dos chips LR1110 / LR1120 / LR1121, com base na Application Note AN1200.57 – “LR1110: Upgrade of the Program Memory”.
:::

:::caution
**NÃO** reinicie manualmente nem desligue o dispositivo durante o processo de atualização, pois isso pode danificar o chip permanentemente.
:::

## Pré-requisitos

### Hardware necessário

- Placa de desenvolvimento Wio Tracker 1110 × 1
- Computador (Windows / Linux / macOS) × 1
- Cabo USB Type‑C × 1
- (Opcional) Sonda de depuração J‑Link – para programação via interface SWD

:::note
Observe que há uma diferença entre a `Wio Tracker 1110 dev board` (SKU:114993186) e o `LPWAN Asset Tracker Dev Kit for Amazon Sidewalk` (SKU:114993187). Se você planeja usar a placa de desenvolvimento para o desenvolvimento com Sidewalk, observe que será necessário atualizar o firmware do LR1110 seguindo este guia, pois a versão padrão é diferente dos requisitos do Sidewalk.
:::

## Atualizando o firmware LR1110

1. Obtenha o código-fonte e prepare o ambiente de workspace do Zephyr:

```bash
# obtain the manifest repository from Seeed Studio's GitHub
git clone https://github.com/Seeed-Studio/SWSD006/tree/Wenzy/dev/samples/SWTL001_wio_tracker

# initialize the zephyr workspace
cd <your_workspace_path>/SWSD006-Wenzy-dev/
west init
west update
```

2. Baixe o firmware desejado a partir de [Here](https://github.com/Lora-net/radio_firmware_images) e coloque-o no subdiretório `include`. Somente o firmware "transceiver" funcionará com o Sidewalk; não use firmware "modem".

3. Edite `app.c` para incluir este arquivo de cabeçalho baixado. (Aqui usamos o padrão `lr1110_transceiver_0401.h`)

```c
# The target project path is: /samples/SWTL001_nrf52840_wm1110/src/swtl001/app.c
#include <lr1110_transceiver_0401.h>
```

4. Compile o firmware de destino:

```bash
west build -p auto -b nrf52840_wm1110 -- -DRADIO=LR1110
```

Você deverá conseguir encontrar o arquivo compilado em: `/SWSD006-Wenzy-dev/samples/SWTL001_nrf52840_wm1110/build/zephyr/`

5. Você tem duas opções para gravar o firmware compilado:

- **O Wio Tracker 1110 suporta o modo bootloader UF2 (recomendado):**
  1. Conecte a placa ao computador usando um cabo USB Type‑C.
  2. Pressione duas vezes o botão Reset na placa. Uma unidade de armazenamento em massa chamada WM1110_BOOT deverá aparecer.
  3. Arraste o [.uf2 file](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWTLApp.uf2) compilado para essa unidade.
  4. A programação será iniciada automaticamente e a unidade será desmontada quando terminar.

- **Se você preferir programar via SWD usando um J-Link:**
  1. Use conectores 2×3 com passo de 1,2 mm para conectar à porta de depuração SWD na parte de trás da placa de desenvolvimento.
  2. Grave o firmware compilado:
```bash
west flash
```

<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWD_pinout.png" alt="pir" width={600} height="auto" /></p>

<br />

6. Quando conectado via USB, uma porta COM (ou /dev/ttyACM*) aparecerá. Abra um emulador de terminal (por exemplo, PuTTY, Screen, Minicom) com: 

- **Taxa de baud**: 115200

- As mensagens de log em tempo real do processo de atualização serão exibidas.

## Recursos

- **[.uf2]** [Firmware pré-compilado](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWTLApp.uf2)

- **[Link]** [Repositório GitHub da ferramenta Updater](https://github.com/Seeed-Studio/SWSD006/tree/Wenzy/dev/samples/SWTL001_wio_tracker)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>