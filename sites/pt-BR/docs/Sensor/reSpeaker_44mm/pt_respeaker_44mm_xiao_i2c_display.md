---
description: Aciona um OLED SSD1306 de 128x64 a partir do XIAO ESP32-S3 Plus no reSpeaker XVF3800 44mm usando I2C por software do U8g2 nos pads livres D13 e D3, deixando intacto o barramento do XVF3800 em D4/D5.
title: Display OLED I2C para reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - display I2C
  - SSD1306
  - U8g2
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_i2c_display
sku: 100066841,100065276
last_update:
  date: 11/25/2026
  author: Kasun Thushara
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_i2c_display/
---
# Display OLED I2C para reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus

Este sketch aciona um OLED SSD1306 de 128×64 a partir do XIAO ESP32-S3 Plus e exibe **HELLO!** nele. O display é conectado aos pads livres **D13** e **D3**, e o U8g2 se comunica com ele por um driver I2C por software (bit-banging), de modo que o barramento I2C que o XIAO compartilha com o XVF3800 em D4/D5 não é usado. Use-o para confirmar a ligação do display e a biblioteca U8g2 antes de adicionar a saída de status a um sketch de áudio maior.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Pré-requisitos

- Arduino IDE com o pacote de placas ESP32 instalado. Consulte [Preparação de Software](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_getting_started/#preparação-de-software).
- A biblioteca **U8g2** de oliver, instalada em **Sketch > Include Library > Manage Libraries**.
- Um módulo OLED I2C SSD1306 de 128×64, com endereço `0x3C` por padrão.
- Quatro fios jumper para 3V3, GND, SDA e SCL.
- Placa selecionada como **XIAO_ESP32S3_Plus**; o número da porta precisa ser selecionado.

:::note
Este sketch não se comunica com o XVF3800, portanto qualquer imagem de firmware funciona — a imagem I2S é suficiente. D4/D5 transportam o barramento I2C até o XVF3800 e D12 transporta a interrupção, por isso o display usa os pads livres D13/D3.
:::

## Fiação

| Pino do OLED | Pad do XIAO | GPIO do ESP32-S3 |
|----------|----------|---------------|
| `VCC` | `3V3` | — |
| `GND` | `GND` | — |
| `SDA` | `D13` | GPIO40 |
| `SCL` | `D3` | GPIO4 |

Mantenha os fios jumper curtos. O driver I2C por software alterna as linhas a partir da CPU, então fios longos ou frouxos costumam deixar o display em branco ou com a imagem ilegível.

## Sketch Arduino

```c
#include <U8g2lib.h>

#define SDA_PIN D13
#define SCL_PIN D3

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(
  U8G2_R0,
  SCL_PIN,
  SDA_PIN,
  U8X8_PIN_NONE
);

void setup() {
  u8g2.setI2CAddress(0x3C << 1);
  u8g2.begin();

  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB14_tr);
  u8g2.drawStr(10, 30, "HELLO!");
  u8g2.sendBuffer();
}

void loop() {
}
```

## Saída esperada

O OLED acende e mostra **HELLO!** na metade superior do painel:

```text
HELLO!
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
