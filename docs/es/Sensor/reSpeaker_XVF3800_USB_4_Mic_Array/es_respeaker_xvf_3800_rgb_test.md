---
description: El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo de micrófonos circular profesional con AEC, formación de haces, supresión de ruido y captura de voz de 360°. Emparejado con el XIAO ESP32S3, permite control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre la integración perfecta y flexibilidad de modo dual.

title: Prueba RGB del reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /es/respeaker_xvf3800_xiao_rgb
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

# Prueba RGB del reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3


## Objetivo

Este código controla el anillo de LED colorido en el **reSpeaker XVF3800 USB 4-Mic Array** usando un microcontrolador **ESP32S3** a través de **comunicación I2C**. Cambia el **efecto, color, velocidad y brillo del LED** enviando comandos específicos. El ESP32S3 le dice al XVF3800 qué hacer usando bytes de datos a través de la librería Wire (I2C). Puedes elegir tus propios colores usando valores RGB como naranja, rojo o azul. Una vez cargado, los LEDs se iluminan con el efecto, color y brillo que seleccionaste.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
    </a>
</div>

## Cómo Funciona

Este sketch de Arduino está diseñado para controlar el **anillo de LED RGB WS2812** en el ReSpeaker XVF3800 usando el **protocolo I2C**. Utiliza la librería **Wire.h** para comunicarse con el controlador interno del XVF3800 y enviar instrucciones específicas para ajustar el **efecto, color, velocidad y brillo del LED**. Puedes personalizar el comportamiento del LED sin cambiar el firmware del XVF3800 — ¡todo se maneja desde el ESP32S3!

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

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>