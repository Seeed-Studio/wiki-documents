---
description: XIAO ESP32-S3 Plus から I2C 経由で AIC3104 DAC とアナログ出力レジスタに書き込み、440 Hz のテストトーンを使って reSpeaker XVF3800 44mm の再生音量を制御します。
title: XIAO ESP32-S3 Plus による reSpeaker XVF3800 44mm の音量制御
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - AIC3104
  - volume control
  - xvf3800
  - I2C
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_volume_control
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_volume_control/
---
# XIAO ESP32-S3 Plus による reSpeaker XVF3800 44mm の音量制御

このスケッチでは、XIAO ESP32-S3 Plus が I2S 経由でオンボードの **AIC3104** コーデックから生成した **440 Hz** トーンを再生し、シリアルモニタに `+` または `-` を入力して音量を調整します。`m` を入力すると、ヘッドホン出力（`HPLOUT`/`HPROUT`）とライン出力（`LOP`）の間で出力先を切り替えます。コーデックの設定はすべて I2C 経由で行われます。このトーンはコード内で合成されるため、オーディオファイルは不要です。

{/* TODO: href="#" の値は、Seeed Studio の製品ページ URL が公開されたら置き換えてください。 */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 事前準備

- アレイは **I2S ファームウェア** を実行している必要があります。XVF3800 が I2S クロックを提供するためです。[Update Firmware](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/#update-firmware) を参照してください。
- ESP32 ボードパッケージと **Arduino Audio Tools** ライブラリをインストールした Arduino IDE。[Software Preparation](https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_getting_started/#software-preparation) を参照してください。
- ボードに **XIAO_ESP32S3_Plus** を選択し、ポート番号を選択しておきます。
- JST コネクタに接続したスピーカー、または 3.5 mm ジャックに接続したヘッドホン。



:::note
AIC3104 は XVF3800 と I2C バスを共有しています。XMOS ファームウェアとオンボードの音量ボタンも同じレジスタに書き込むため、XIAO から設定したレベルが後で上書きされる可能性があります。
:::

## 音量マッピング

このスケッチでは、デジタル減衰とアナログゲインに分割された 0〜17 の音量スケールを提供します。

| Volume | 結果 |
|--------|--------|
| `0` | −8 dB（DAC 減衰） |
| `8` | 0 dB（基準、DAC フルスケール） |
| `9` … `17` | +1 dB … +9 dB のアナログ出力ゲイン |

0 から 8 までは、DAC が **0.5 dB ステップ**（`(8 − volume) × 2`）で減衰します。9 から 17 では DAC は 0 dB のままで、アナログ出力段が `volume − 8` dB だけブーストされます。

## レジスタマップ

| レジスタ | アドレス | 用途 |
|----------|---------|---------|
| ページ制御 | `0x00` | レジスタページ 0 を選択 |
| 左 DAC 音量 | `0x2B` | デジタル減衰、1 ステップあたり 0.5 dB |
| 右 DAC 音量 | `0x2C` | デジタル減衰、1 ステップあたり 0.5 dB |
| HPLOUT レベル | `0x33` | ヘッドホン左出力 |
| HPROUT レベル | `0x41` | ヘッドホン右出力 |
| LEFT_LOP レベル | `0x56` | ラインアウト左 |
| RIGHT_LOP レベル | `0x5D` | ラインアウト右 |

出力レジスタのビット: **D7–D4** = アナログゲイン（`0`〜`9` dB）、**D3** = ミュート解除、**D0** = 電源オン。ヘッドホン用レジスタでは、電源オフ時に高インピーダンスとする **D2** も設定するため、下位 4 ビットの固定値として `0x0D` を使用し、ラインアウト用レジスタでは `0x09` を使用します。

## 動作概要

1. `setup()` は I2C を 100 kHz で開始し、AIC3104 のページ制御レジスタに書き込んだ後、両方の DAC チャンネルを 0 dB に設定し、ヘッドホン出力とライン出力を 0 dB でミュート解除／電源オンにします。
2. `setVolume()` は要求されたレベルを DAC 減衰値とアナログゲイン値に分割し、4 つすべての出力レジスタに書き込んでから、確認のため左 DAC レジスタを読み戻します。
3. I2S は `TX_MODE`、48 kHz、ステレオ、32 ビットで開始され、XIAO をスレーブとして XVF3800 が BCLK と LRCLK を駆動します。
4. `SineWaveGenerator` が 32 ビットフルスケールの 25 % レベルで 440 Hz トーンを生成し、`GeneratedSoundStream` でラップして `StreamCopy` により I2S へコピーします。
5. `loop()` はトーンの再生を継続し、シリアルモニタからの 1 文字コマンドを処理します。

## シリアルコマンド

| キー | 動作 |
|-----|--------|
| `+` | 音量を上げる（最大 17 まで） |
| `-` | 音量を下げる（最小 0 まで） |
| `m` | ヘッドホン出力とライン出力を切り替える |
| `v` | 現在の音量を表示する |
| `h` | コマンド一覧を表示する |

## コード

```c
#include <Wire.h>
#include "AudioTools.h"

// =====================================================
// AIC3104 I2C CONFIGURATION
// =====================================================

#define AIC3104_ADDR 0x18

#define I2C_SDA_PIN 5
#define I2C_SCL_PIN 6

// Register addresses
#define AIC3104_PAGE_CTRL         0x00

#define AIC3104_LEFT_DAC_VOLUME   0x2B
#define AIC3104_RIGHT_DAC_VOLUME  0x2C

#define AIC3104_HPLOUT_LEVEL      0x33
#define AIC3104_HPROUT_LEVEL      0x41

#define AIC3104_LEFT_LOP_LEVEL    0x56
#define AIC3104_RIGHT_LOP_LEVEL   0x5D


// =====================================================
// I2S CONFIGURATION
// =====================================================

#define SAMPLE_RATE 48000
#define CHANNELS    2
#define BITS        32

AudioInfo info(SAMPLE_RATE, CHANNELS, BITS);

// 440Hz sine wave, 25% of 32-bit full scale
SineWaveGenerator<int32_t> sineWave(0x20000000);

GeneratedSoundStream<int32_t> sound(sineWave);

I2SStream out;
StreamCopy copier(out, sound);


// =====================================================
// VOLUME CONFIGURATION
// =====================================================

// Volume: 0 to 17
// 0  = -8dB
// 8  =  0dB
// 17 = +9dB

int volume = 8;

// true  = HPLOUT / HPROUT
// false = LEFT_LOP / RIGHT_LOP

bool useHPOUT = true;


// =====================================================
// AIC3104 REGISTER WRITE
// =====================================================

bool aic3104_reg_write(uint8_t reg, uint8_t val) {

    Wire.beginTransmission(AIC3104_ADDR);

    Wire.write(reg);
    Wire.write(val);

    uint8_t error = Wire.endTransmission();

    if (error != 0) {

        Serial.printf(
            "I2C WRITE ERROR: Register 0x%02X, Error %u\n",
            reg,
            error
        );

        return false;
    }

    return true;
}


// =====================================================
// AIC3104 REGISTER READ
// =====================================================

bool aic3104_reg_read(uint8_t reg, uint8_t &value) {

    Wire.beginTransmission(AIC3104_ADDR);

    Wire.write(reg);

    if (Wire.endTransmission(false) != 0) {
        return false;
    }

    if (Wire.requestFrom(
            (uint8_t)AIC3104_ADDR,
            (uint8_t)1
        ) != 1) {

        return false;
    }

    value = Wire.read();

    return true;
}


// =====================================================
// INITIALIZE AIC3104
// =====================================================

bool setupAIC3104() {

    Serial.println("\nInitializing AIC3104...");

    // Select register page 0
    if (!aic3104_reg_write(AIC3104_PAGE_CTRL, 0x00)) {
        return false;
    }

    // DAC digital volume: 0dB, unmuted
    if (!aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00))
        return false;

    if (!aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00))
        return false;

    // HPLOUT / HPROUT:
    // 0dB, unmuted, powered up
    if (!aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D))
        return false;

    if (!aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D))
        return false;

    // LEFT_LOP / RIGHT_LOP:
    // 0dB, unmuted, powered up
    // Bit 2 is reserved; write it as zero.
    if (!aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x09))
        return false;

    if (!aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x09))
        return false;

    Serial.println("AIC3104 initialized successfully");

    return true;
}


// =====================================================
// SET OUTPUT ANALOG GAIN
// =====================================================

bool setOutputGain(uint8_t gain) {

    gain = constrain(gain, 0, 9);

    // Reset inactive output to 0dB.
    // Keep active output at requested gain.

    uint8_t hpGain =
        useHPOUT ? gain : 0;

    uint8_t lopGain =
        useHPOUT ? 0 : gain;

    // HP registers:
    // D7-D4 = 0 to +9dB
    // D3 = 1 (unmuted)
    // D2 = 1 (high impedance when powered down)
    // D0 = 1 (powered up)

    uint8_t hpValue =
        (hpGain << 4) | 0x0D;

    // LOP registers:
    // D7-D4 = 0 to +9dB
    // D3 = 1 (unmuted)
    // D2 = 0 (reserved)
    // D0 = 1 (powered up)

    uint8_t lopValue =
        (lopGain << 4) | 0x09;

    bool ok = true;

    ok &= aic3104_reg_write(
        AIC3104_HPLOUT_LEVEL,
        hpValue
    );

    ok &= aic3104_reg_write(
        AIC3104_HPROUT_LEVEL,
        hpValue
    );

    ok &= aic3104_reg_write(
        AIC3104_LEFT_LOP_LEVEL,
        lopValue
    );

    ok &= aic3104_reg_write(
        AIC3104_RIGHT_LOP_LEVEL,
        lopValue
    );

    return ok;
}


// =====================================================
// SET VOLUME
// =====================================================

void setVolume(int vol) {

    vol = constrain(vol, 0, 17);

    volume = vol;

    uint8_t dacValue;
    uint8_t analogGain;

    if (vol <= 8) {

        // DAC attenuation:
        // Volume 0 = -8dB
        // Volume 8 =  0dB

        int attenuationDB = 8 - vol;

        // AIC3104 DAC step = 0.5dB
        dacValue = attenuationDB * 2;

        analogGain = 0;

    } else {

        // DAC at 0dB
        dacValue = 0;

        // Analog boost: +1dB to +9dB
        analogGain = vol - 8;
    }

    // Update left and right DAC
    bool ok = true;

    ok &= aic3104_reg_write(
        AIC3104_LEFT_DAC_VOLUME,
        dacValue
    );

    ok &= aic3104_reg_write(
        AIC3104_RIGHT_DAC_VOLUME,
        dacValue
    );

    // Update analog output gain
    ok &= setOutputGain(analogGain);

    if (!ok) {

        Serial.println("Volume update failed!");
        return;
    }

    // Debug output

    Serial.println("\n------------------------------");

    Serial.printf(
        "Volume level: %d / 17\n",
        volume
    );

    if (vol <= 8) {

        Serial.printf(
            "DAC attenuation: -%d dB\n",
            8 - vol
        );

    } else {

        Serial.printf(
            "Analog output gain: +%d dB\n",
            analogGain
        );
    }

    Serial.printf(
        "Output mode: %s\n",
        useHPOUT ? "HPLOUT" : "LINE OUT"
    );

    Serial.printf(
        "DAC register: 0x%02X\n",
        dacValue
    );

    uint8_t readValue;

    if (aic3104_reg_read(
            AIC3104_LEFT_DAC_VOLUME,
            readValue
        )) {

        Serial.printf(
            "DAC readback: 0x%02X\n",
            readValue
        );
    }

    Serial.println("------------------------------");
}


// =====================================================
// SERIAL CONTROL
// =====================================================

void handleSerial() {

    while (Serial.available()) {

        char c = Serial.read();

        if (c == '+') {

            if (volume < 17) {
                setVolume(volume + 1);
            } else {
                Serial.println("Maximum volume reached");
            }

        } else if (c == '-') {

            if (volume > 0) {
                setVolume(volume - 1);
            } else {
                Serial.println("Minimum volume reached");
            }

        } else if (c == 'm' || c == 'M') {

            useHPOUT = !useHPOUT;

            setVolume(volume);

        } else if (c == 'v' || c == 'V') {

            Serial.printf(
                "Current volume: %d / 17\n",
                volume
            );

        } else if (c == 'h' || c == 'H') {

            Serial.println("\nCommands:");
            Serial.println("+ : Increase volume");
            Serial.println("- : Decrease volume");
            Serial.println("m : Switch HP / LINE output");
            Serial.println("v : Show current volume");
            Serial.println("h : Show help");
        }
    }
}


// =====================================================
// SETUP
// =====================================================

void setup() {

    Serial.begin(115200);

    while (!Serial);

    Serial.println("\n================================");
    Serial.println("ReSpeaker 44mm Volume Test");
    Serial.println("XVF3800 + AIC3104");
    Serial.println("================================");

    // Initialize I2C
    Wire.begin(
        I2C_SDA_PIN,
        I2C_SCL_PIN
    );

    Wire.setClock(100000);

    delay(100);

    Serial.println("I2C initialized");

    // Initialize AIC3104
    if (!setupAIC3104()) {

        Serial.println("AIC3104 initialization FAILED!");

        while (true) {
            delay(1000);
        }
    }

    // Set starting volume
    setVolume(volume);

    // Initialize I2S output
    auto config = out.defaultConfig(TX_MODE);

    config.copyFrom(info);

    config.pin_bck = 8;     // D9 / GPIO8
    config.pin_ws = 7;      // D8 / GPIO7
    config.pin_data = 44;   // D7 / GPIO44

    // XVF3800 provides I2S clocks
    config.is_master = false;

    if (!out.begin(config)) {

        Serial.println("I2S initialization FAILED!");

        while (true) {
            delay(1000);
        }
    }

    // Start 440Hz sine wave
    sineWave.begin(info, N_A4);

    Serial.println("\nI2S started");
    Serial.println("440Hz test tone playing");

    Serial.println("\nVolume control ready:");
    Serial.println("+ : Increase volume");
    Serial.println("- : Decrease volume");
    Serial.println("m : Switch HP / LINE output");
    Serial.println("v : Show current volume");
    Serial.println("h : Show help");
}


// =====================================================
// LOOP
// =====================================================

void loop() {

    // Continuously transmit 440Hz test tone
    copier.copy();

    // Check serial commands
    handleSerial();
}
```

## 期待される出力

```text
================================
ReSpeaker 44mm Volume Test
XVF3800 + AIC3104
================================
I2C initialized

Initializing AIC3104...
AIC3104 initialized successfully

------------------------------
Volume level: 8 / 17
Output mode: HPLOUT
DAC register: 0x00
DAC readback: 0x00
------------------------------

I2S started
440Hz test tone playing

Volume control ready:
+ : Increase volume
- : Decrease volume
m : Switch HP / LINE output
v : Show current volume
h : Show help
```

`+` を送信してステップアップします。レベル 8 を超えると、ログは `Analog output gain: +N dB` に切り替わります：

```text
------------------------------
Volume level: 10 / 17
Analog output gain: +2 dB
Output mode: HPLOUT
DAC register: 0x00
DAC readback: 0x00
------------------------------
```

## トラブルシューティング

### `I2C WRITE ERROR: Register 0x.., Error 2`

AIC3104 が `0x18` で ACK を返していません。D4（GPIO5）の SDA と D5（GPIO6）の SCL を確認し、I2S ファームウェアが動作していることを確認してから、ボードの電源を入れ直してください。

### `AIC3104 initialization FAILED!`

コーデックがページ選択書き込みを受け付けませんでした。通常は、I2C バスが別のマスターに保持されているか、ボードがまだ起動中です — `setupAIC3104()` の前に短いディレイを追加して、再試行してください。

### トーンが出ないが、シリアルログは正しい

- スピーカーまたはヘッドホンが JST / 3.5 mm 出力に接続されていることを確認します。
- 440 Hz のトーンはフルスケールの 25 % で生成されるため、レベル 8 では意図的に小さな音量になっています。
- `m` を押して、別の出力経路（ヘッドホン出力とライン出力）を試してください。

### 数秒後に音量が元に戻ってしまう

XVF3800 ファームウェアまたはオンボードの `+` / `-` ボタンが、同じ AIC3104 レジスタに書き込みを行います。ボタンには触れずに XIAO からレベルを設定するか、コーデックを XIAO の制御下のみに保ってください。

### `m` で切り替えるときにクリック音やポップノイズがする

両方の出力ステージは、変更のたびに再設定されます。これは AIC3104 では想定された動作です。切り替える前に音量を下げて、ノイズを軽減してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
