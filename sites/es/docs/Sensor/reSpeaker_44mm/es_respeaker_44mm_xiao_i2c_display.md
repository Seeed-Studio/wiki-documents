---
description: Controla un OLED SSD1306 de 128x64 desde el XIAO ESP32-S3 Plus en el reSpeaker XVF3800 44mm mediante I2C por software de U8g2 en las almohadillas libres D13 y D3, de modo que el bus del XVF3800 en D4/D5 permanece intacto.
title: Pantalla OLED I2C para reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - pantalla I2C
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
url: https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_i2c_display/
---
# Pantalla OLED I2C para reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus

Este sketch controla un OLED SSD1306 de 128×64 desde el XIAO ESP32-S3 Plus y muestra **HELLO!** en él. La pantalla se conecta a las almohadillas libres **D13** y **D3**, y U8g2 se comunica con ella mediante un controlador I2C por software (bit-banging), de modo que el bus I2C que el XIAO comparte con el XVF3800 en D4/D5 no se toca. Úsalo para confirmar el cableado de la pantalla y la biblioteca U8g2 antes de añadir la salida de estado a un sketch de audio más grande.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Requisitos previos

- Arduino IDE con el paquete de placas ESP32 instalado. Consulta [Preparación de software](https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_getting_started/#preparación-de-software).
- La biblioteca **U8g2** de oliver, instalada desde **Sketch > Include Library > Manage Libraries**.
- Un módulo OLED I2C SSD1306 de 128×64, con dirección `0x3C` de forma predeterminada.
- Cuatro cables puente para 3V3, GND, SDA y SCL.
- Placa seleccionada como **XIAO_ESP32S3_Plus**; es necesario seleccionar el número de puerto.

:::note
Este sketch no se comunica con el XVF3800, así que cualquier imagen de firmware sirve; la imagen I2S es adecuada. D4/D5 llevan el bus I2C hacia el XVF3800 y D12 lleva su interrupción, por eso la pantalla usa las almohadillas libres D13/D3.
:::

## Cableado

| Pin del OLED | Almohadilla del XIAO | GPIO del ESP32-S3 |
|----------|----------|---------------|
| `VCC` | `3V3` | — |
| `GND` | `GND` | — |
| `SDA` | `D13` | GPIO40 |
| `SCL` | `D3` | GPIO4 |

Mantén cortos los cables puente. El controlador I2C por software conmuta las líneas desde la CPU, por lo que los cables largos o flojos suelen ser la causa de una pantalla en blanco o con la imagen distorsionada.

## Sketch de Arduino

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

## Salida esperada

El OLED se enciende y muestra **HELLO!** en la mitad superior del panel:

```text
HELLO!
```

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
