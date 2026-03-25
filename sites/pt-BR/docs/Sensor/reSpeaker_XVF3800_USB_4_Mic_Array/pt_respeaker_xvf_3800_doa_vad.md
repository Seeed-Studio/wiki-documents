---
description: O ReSpeaker XVF3800 USB 4-Mic Array é um array de microfones circular profissional com AEC, formação de feixe, supressão de ruído e captação de voz em 360°. Emparelhado com o XIAO ESP32S3, ele possibilita controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra integração perfeita e flexibilidade de modo duplo.
title: reSpeaker XVF3800 USB Mic Array com XIAO ESP32S3 DoA e VAD
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf3800_xiao_doa_vad
sku: 114993702,114993700
last_update:
  date: 1/23/2025
  author: Kasun Thushara
createdAt: '2026-01-23'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_doa_vad/
---

## Introdução 

O ReSpeaker XVF3800 é uma solução de processamento de voz com múltiplos microfones baseada no XMOS XVF3800, projetada para aplicações embarcadas que exigem inteligência de áudio em tempo real. O XVF3800 calcula internamente Detecção de Atividade de Voz (VAD) e Direção de Chegada (DoA) para indicar quando a fala está presente e de que direção ela se origina. Esses resultados de inferência podem ser acessados diretamente por um MCU host via I2C usando comandos baseados em recursos, permitindo recursos como ativação por voz, localização da fonte sonora e feedback sensível à direção sem processar áudio bruto no host.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>


:::note
O Firmware que oferece suporte para este código é `respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k_test5.bin`. Portanto, certifique-se de fazer o flash primeiro
:::

## Código Arduino 

```cpp
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7-bit address

#define GPO_SERVICER_RESID            20
#define GPO_SERVICER_RESID_LED_EFFECT 12
#define GPO_SERVICER_RESID_DOA        19
#define GPO_DOA_READ_NUM_BYTES        4

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(2000);
  Serial.println("XVF3800 DoA Read Test Starting...");
  write_led_effect(4);
}

void loop() {
  uint16_t doa_values[2] = {0};
  uint8_t status = 0xFF;

  bool success = read_doa_values((uint8_t *)doa_values, &status);

  if (success) {
    Serial.print("I2C Communication SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | DOA_VALUE: ");
    Serial.print(doa_values[0]);
    Serial.print(" | SPEECH_DETECTED: ");
    Serial.println(doa_values[1]);
  } else {
    Serial.println("Failed to read DoA values.");
  }

  delay(1000);
}

bool read_versions(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = 48;
  const uint8_t cmd = 0 | 0x80;
  const uint8_t read_len = 3;

  // Step 1: Write command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Step 2: Read response (status + payload)
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

bool read_doa_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = GPO_SERVICER_RESID;
  const uint8_t cmd = GPO_SERVICER_RESID_DOA | 0x80;
  const uint8_t read_len = GPO_DOA_READ_NUM_BYTES;

  // Step 1: Write command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Step 2: Read response (status + payload)
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

void write_led_effect(uint8_t effect) {
  Wire.beginTransmission(XMOS_ADDR); // Begin I2C transmission to XVF3800
  Wire.write(GPO_SERVICER_RESID);                 // Write the resource ID
  Wire.write(GPO_SERVICER_RESID_LED_EFFECT);                   // Write the command ID
  Wire.write(1);       // Write number of payload bytes
  Wire.write(effect);           // Write each payload byte
  Wire.endTransmission();           // End the I2C transmission
}

```

**Saída Esperada**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/doa_vad_i2c.png" alt="pir" width={800} height="auto" /></p>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

