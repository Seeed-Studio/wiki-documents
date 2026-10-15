---
description: reSpeaker Flex は XMOS XVF3800 を搭載した強力なモジュラー音声システムで、交換可能な円形および直線型の 4 マイクアレイにより、ロボット工学やスマートデバイスに最適な、正確な 360° または指向性オーディオキャプチャを実現します。
title: GPIO を使用して Xiao ESP32S3 から reSpeaker Flex を制御する
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_gpio_control
sku: 100070894,100026178
last_update:
  date: 06/01/2026
  author: Kasun Thushara
createdAt: '2026-06-01'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_xiao_gpio_control/
---

## 目的

このガイドでは、I2C インターフェースを使用して XVF3800 ボイスプロセッサ上の **GPIO ピンを読み取り・制御する方法** を説明します。ここでは次のことを学びます：

- **GPI および GPO ピンの状態を読み取る**
- **GPIO のマッピングとその用途を理解する**

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear with XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular with XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## GPIO の概要

| ピン名 | 方向        | 機能                                      |
|:---------|:------------|:---------------------------------------|
| X1D09    | 入力 (RO)   | ブートボタン状態 / GPI0                 |
| X1D13    | 入力 (RO)   | フローティング / GPI1                   |
| X1D34    | 入力 (RO)   | フローティング / GPI2                   |
| X0D11    | 出力 (RW)   | フローティング / GPO、SPI MOSI と共有   |
| X0D30    | 出力 (RW)   | SD/FAULT 制御                           |
| X0D31    | 出力 (RW)   | PA / アンプ制御                         |
| X0D32    | 出力 (RW)   | XMOS GPIO 1                            |
| X0D33    | 出力 (RW)   | XMOS GPIO 2                            |
| X0D39    | 出力 (RW)   | フローティング / GPO、SPI MISO と共有   |


## GPO ピン状態の読み取り

**目的**: **出力可能な GPIO（GPO）** の論理レベルをすべて確認します。
**コードのポイント**:

- 次の設定で読み取り要求を送信します：
  - リソース ID: 20 (GPO)
  - コマンド ID: 0 (GPO_READ_VALUES)
- 5 つの GPO ピン状態を次の順序で読み取ります: X0D11 → X0D30 → X0D31 → X0D33 → X0D39
- 応答を検証するためのステータスバイトを含みます



```c
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7-bit address

#define GPO_SERVICER_RESID 20
#define GPO_SERVICER_RESID_GPO_READ_VALUES 0
#define GPO_GPO_READ_NUM_BYTES 5

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 GPO Read Test Starting...");
}

void loop() {
  uint8_t gpo_values[GPO_GPO_READ_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  bool success = read_gpo_values(gpo_values, &status);

  if (success) {
    Serial.print("I2C Communication SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | GPO Output Values: ");
    for (uint8_t i = 0; i < GPO_GPO_READ_NUM_BYTES; i++) {
      Serial.print("0x");
      Serial.print(gpo_values[i], HEX);
      Serial.print(" ");
    }
    Serial.println();
  } else {
    Serial.println("Failed to read GPO values.");
  }

  delay(1000);
}

bool read_gpo_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = GPO_SERVICER_RESID;
  const uint8_t cmd = GPO_SERVICER_RESID_GPO_READ_VALUES | 0x80;
  const uint8_t read_len = GPO_GPO_READ_NUM_BYTES;

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


```


## GPI ピン状態の読み取り

**目的**: **入力可能な GPIO**（例：ミュートボタンの状態）を確認します。
**コードのポイント**:

- 次の宛先にコマンドを送信します：
  - リソース ID: 36 (IO_CONFIG)
  - コマンド ID: 6 (GPI_VALUE_ALL)
- X1D09、X1D13、X1D34 の状態を表す 3 つの GPI を受信します


```c
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7-bit address of XVF3800

// Resource and command IDs for GPI
#define IO_CONFIG_SERVICER_RESID 36
#define IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES 0
#define GPI_READ_NUM_BYTES 3   // From header: IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES_NUM_VALUES

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 GPI Read Test Starting...");
}

void loop() {
  uint8_t gpi_values[GPI_READ_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  bool success = read_gpi_values(gpi_values, &status);

  if (success) {
    Serial.print("I2C Communication SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | GPI Input Values: ");
    for (uint8_t i = 0; i < GPI_READ_NUM_BYTES; i++) {
      Serial.print("0x");
      Serial.print(gpi_values[i], HEX);
      Serial.print(" ");
    }
    Serial.println();
  } else {
    Serial.println("Failed to read GPI values.");
  }

  delay(1000);
}

bool read_gpi_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = IO_CONFIG_SERVICER_RESID;
  const uint8_t cmd = IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES | 0x80;  // Read command
  const uint8_t read_len = GPI_READ_NUM_BYTES;

  // Step 1: Send the command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);  // +1 for status byte
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

  *status = Wire.read();  // first byte is status
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

```
ブートボタンを押すと、状態が変化します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/gpio_ard.jpg" alt="pir" width={600} height="auto" /></p>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
