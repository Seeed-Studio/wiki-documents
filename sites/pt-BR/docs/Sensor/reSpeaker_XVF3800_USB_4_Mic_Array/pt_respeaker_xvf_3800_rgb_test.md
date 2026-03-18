---
description: O ReSpeaker XVF3800 USB 4-Mic Array é um array de microfones circular profissional com AEC, beamforming, supressão de ruído e captura de voz em 360°. Emparelhado com o XIAO ESP32S3, ele possibilita controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra integração perfeita e flexibilidade em modo duplo.
title: reSpeaker XVF3800 USB Mic Array com teste RGB no XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /respeaker_xvf3800_xiao_rgb
last_update:
  date: 7/16/2025
  author: Kasun Thushara
createdAt: '2025-07-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_rgb/
---

# reSpeaker XVF3800 USB Mic Array com teste RGB no XIAO ESP32S3

## Objetivo

Este código controla o anel de LEDs coloridos na **reSpeaker XVF3800 USB 4-Mic Array** usando um **microcontrolador ESP32S3** via **comunicação I2C**. Ele altera o **efeito, a cor, a velocidade e o brilho dos LEDs** enviando comandos específicos. O ESP32S3 informa ao XVF3800 o que fazer usando bytes de dados por meio da biblioteca Wire (I2C). Você pode escolher suas próprias cores usando valores RGB como laranja, vermelho ou azul. Depois de fazer o upload, os LEDs acendem com o efeito, a cor e o brilho que você selecionou.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Como Funciona

Este sketch Arduino foi desenvolvido para controlar o **anel de LEDs RGB WS2812** no ReSpeaker XVF3800 usando o **protocolo I2C**. Ele utiliza a biblioteca **Wire.h** para se comunicar com o controlador interno do XVF3800 e enviar instruções específicas para ajustar o **efeito, a cor, a velocidade e o brilho dos LEDs**. Você pode personalizar o comportamento dos LEDs sem alterar o firmware do XVF3800 — tudo é controlado a partir do ESP32S3!

## Código

```bash
#include <Wire.h>

#define XMOS_ADDR 0x2C
#define GPO_SERVICER_RESID 20

#define GPO_SERVICER_RESID_LED_EFFECT 12
#define GPO_SERVICER_RESID_LED_COLOR 16
#define GPO_SERVICER_RESID_LED_SPEED 15
#define GPO_SERVICER_RESID_LED_BRIGHTNESS 13

void setup() {
  Wire.begin();
  Serial.begin(115200);
  delay(1000);

  setLEDEffect(1);        // LED effect ID 1
  setLEDColor(0xFF8800);  // LED color: orange (24-bit RGB)
  setLEDSpeed(1);         // Speed: 1
  setLEDBrightness(255);  // Brightness: max
}

void loop() {
  // No repeating actions needed
}

void xmos_write_bytes(uint8_t resid, uint8_t cmd, uint8_t *value, uint8_t write_byte_num) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(write_byte_num);
  for (uint8_t i = 0; i < write_byte_num; i++) {
    Wire.write(value[i]);
  }
  Wire.endTransmission();
}

void setLEDEffect(uint8_t effect) {
  uint8_t payload[1] = { effect };
  xmos_write_bytes(GPO_SERVICER_RESID, GPO_SERVICER_RESID_LED_EFFECT, payload, 1);
  Serial.println("LED effect set.");
}

void setLEDColor(uint32_t color) {
  uint8_t payload[4] = {
    (uint8_t)(color & 0xFF),         // Red
    (uint8_t)((color >> 8) & 0xFF),  // Green
    (uint8_t)((color >> 16) & 0xFF), // Blue
    0x00                             // Reserved (some systems may expect 4 bytes)
  };
  xmos_write_bytes(GPO_SERVICER_RESID, GPO_SERVICER_RESID_LED_COLOR, payload, 4);
  Serial.println("LED color set.");
}

void setLEDSpeed(uint8_t speed) {
  uint8_t payload[1] = { speed };
  xmos_write_bytes(GPO_SERVICER_RESID, GPO_SERVICER_RESID_LED_SPEED, payload, 1);
  Serial.println("LED speed set.");
}

void setLEDBrightness(uint8_t brightness) {
  uint8_t payload[1] = { brightness };
  xmos_write_bytes(GPO_SERVICER_RESID, GPO_SERVICER_RESID_LED_BRIGHTNESS, payload, 1);
  Serial.println("LED brightness set.");
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/led_2.gif" alt="pir" width={600} height="auto"/></p>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
