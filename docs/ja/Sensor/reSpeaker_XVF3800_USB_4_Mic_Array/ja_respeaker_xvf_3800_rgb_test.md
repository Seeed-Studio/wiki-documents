---
description: ReSpeaker XVF3800 USB 4-Mic Arrayは、AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えたプロフェッショナルな円形マイクロフォンアレイです。XIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性をご体験ください。

title: reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3 RGB テスト
keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /ja/respeaker_xvf3800_xiao_rgb
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3 RGB テスト

## 目的

このコードは、**ESP32S3 マイクロコントローラー**を使用して**I2C通信**経由で**reSpeaker XVF3800 USB 4-Mic Array**のカラフルなLEDリングを制御します。特定のコマンドを送信することで、**LEDのエフェクト、色、速度、明度**を変更します。ESP32S3は、Wireライブラリ（I2C）を通じてデータのバイトを使用してXVF3800に指示を送ります。オレンジ、赤、青などのRGB値を使用して独自の色を選択できます。アップロード後、LEDは選択したエフェクト、色、明度で点灯します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 動作原理

このArduinoスケッチは、**I2Cプロトコル**を使用してReSpeaker XVF3800の**WS2812 RGB LEDリング**を制御するように設計されています。**Wire.h**ライブラリを使用してXVF3800の内部コントローラーと通信し、**LEDエフェクト、色、速度、明度**を調整するための特定の指示を送信します。XVF3800のファームウェアを変更することなくLEDの動作をカスタマイズできます — すべてはESP32S3から処理されます！

## コード

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

## 技術サポート & 製品に関するディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>