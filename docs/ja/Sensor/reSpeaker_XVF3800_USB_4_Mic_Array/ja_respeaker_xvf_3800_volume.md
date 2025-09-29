---
description: ReSpeaker XVF3800 USB 4-Mic Arrayは、AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えたプロフェッショナルな円形マイクロフォンアレイです。XIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性をご体験ください。

title: reSpeaker XVF3800 I2C経由でのオーディオ再生とボリューム制御

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /ja/respeaker_xvf3800_xiao_volume
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

このコードは、**XIAO ESP32S3**がI2Sインターフェースを通じて**外部AIC3104オーディオコーデックチップ**を使用して**440Hz**のトーンを再生するものです。オーディオ出力を**ヘッドフォン（HPLOUT）またはライン出力（LOP）**に送信し、シリアルモニターで`+`または`-`を入力することでボリュームを調整できます。トーンはサイン波を使用してコード内で生成されます（ファイルからではありません）。また、`m`を入力することで出力モード（ヘッドフォンまたはライン出力）を切り替えることができます。AIC3104は**I2C**を使用してボリュームと出力パワーのレジスタを設定することで制御されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## 動作原理

コードは、I2Cインターフェースを介して**AIC3104オーディオコーデック**を初期化することから始まり、DACボリュームやヘッドフォン/ライン出力レベルなどの主要な出力パラメータを設定します。次に、AudioToolsライブラリのSineWaveGeneratorコンポーネントを使用して**サイン波信号**（具体的には440Hzトーン）を生成します。このオーディオ信号は**I2Sインターフェース**を介してストリーミングされ、ESP32S3からAIC3104チップにデジタルオーディオデータを送信するように設定されています。サイン波は、I2Sストリームへのオーディオデータのリアルタイム転送を処理するStreamCopyオブジェクトを使用してコーデックに継続的に供給されます。一方、ユーザーは**シリアルモニター**を介してシステムと対話でき、**ボリュームレベル**と**出力モード（ヘッドフォンまたはライン出力）**のオンザフライ制御が可能です。

## シリアルコマンド

システムはシリアルモニターに入力されたシンプルなシリアルコマンドに応答します。`+`キーを押すとボリュームが1レベル上がり、`-`キーを押すと下がります。`m`キーを押すと、出力モードが**ヘッドフォン出力（HPLOUT）とライン出力（LOP）の間で切り替わります**。これらのコマンドにより、コードを変更したり再アップロードしたりすることなく、リアルタイムでオーディオ出力のテストと調整が可能です。

## コード

```bash
#include <Wire.h>
#include "AudioTools.h"

// AIC3104 I2C address
#define AIC3104_ADDR 0x18

// Register addresses
#define AIC3104_PAGE_CTRL        0x00
#define AIC3104_LEFT_DAC_VOLUME  0x2B
#define AIC3104_RIGHT_DAC_VOLUME 0x2C
#define AIC3104_HPLOUT_LEVEL     0x33
#define AIC3104_HPROUT_LEVEL     0x41
#define AIC3104_LEFT_LOP_LEVEL   0x56
#define AIC3104_RIGHT_LOP_LEVEL  0x5D

// Audio: 16kHz, stereo, 16-bit
AudioInfo info(16000, 2, 16);
SineWaveGenerator<int16_t> sineWave(32000);
GeneratedSoundStream<int16_t> sound(sineWave);
I2SStream out;
StreamCopy copier(out, sound);

// Volume: range 0–17 (0–8 = DAC, 9–17 = analog boost)
int volume = 8;
bool useHPOUT = true; // true = use HPLOUT, false = use LOP

void aic3104_reg_write(uint8_t reg, uint8_t val) {
  Wire.beginTransmission(AIC3104_ADDR);
  Wire.write(reg);
  Wire.write(val);
  Wire.endTransmission();
}

void setupAIC3104() {
  Wire.begin();
  aic3104_reg_write(AIC3104_PAGE_CTRL, 0x00);

  // Set default 0dB DAC volume
  aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00);
  aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

  // Set output to 0dB, unmuted, powered up
  aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D);
  aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D);
  aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x0B);
  aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
}

void setVolume(int vol) {
  vol = constrain(vol, 0, 17);
  volume = vol;

  if (vol <= 8) {
    // DAC attenuation
    uint8_t dacVal = vol * 9; // 0dB to -72dB
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, dacVal);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, dacVal);

    // Output level fixed to 0dB
    aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D);
    aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D);
    aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x0B);
    aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
  } else {
    // DAC at 0dB
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

    // Boost output gain via HPLOUT or LOP
    uint8_t gain = (vol - 8); // from +1 to +9 dB
    uint8_t outVal = (gain << 4) | 0x0B; // Set gain and power/mute bits

    if (useHPOUT) {
      aic3104_reg_write(AIC3104_HPLOUT_LEVEL, outVal);
      aic3104_reg_write(AIC3104_HPROUT_LEVEL, outVal);
    } else {
      aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, outVal);
      aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, outVal);
    }
  }

  // Debug info
  Serial.print("Volume set to ");
  Serial.print(volume);
  Serial.print(" (");
  if (vol <= 8) Serial.print("-" + String(volume * 1) + " dB)");
  else Serial.print("+" + String((vol - 8)) + " dB)");
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  while (!Serial);

  setupAIC3104();
  setVolume(volume);

  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info);
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 44;
  config.is_master = true;

  out.begin(config);
  sineWave.begin(info, N_A4); // 440Hz tone
}

void loop() {
  copier.copy();

  if (Serial.available()) {
    char c = Serial.read();

    if (c == '+' && volume < 17) {
      setVolume(volume + 1);
    } else if (c == '-' && volume > 0) {
      setVolume(volume - 1);
    } else if (c == 'm') {
      useHPOUT = !useHPOUT;
      setVolume(volume);
      Serial.print("Switched to ");
      Serial.println(useHPOUT ? "HPLOUT (headphone)" : "LOP (line out)");
    }
  }
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/volumecontrol.PNG" alt="pir" width={600} height="auto" /></p>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>