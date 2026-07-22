---
description: reSpeaker Flex は XMOS XVF3800 を搭載した強力なモジュラー音声システムで、交換可能な円形およびリニア型 4 マイクアレイにより、ロボット工学やスマートデバイスに最適な、正確な 360° または指向性オーディオキャプチャを実現します。
title: Xiao ESP32S3 で reSpeaker Flex の音量を制御する
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_volume_control
sku: 100070894,100026178
last_update:
  date: 05/29/2026
  author: Kasun Thushara
createdAt: '2026-05-29'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_xiao_volume_control/
---


このコードは、**XIAO ESP32S3** が **I2S インターフェース**経由で**外部 AIC3104 オーディオコーデックチップ**を使用して **440Hz** のトーンを再生するものです。オーディオ出力は **ヘッドホン（HPLOUT）またはラインアウト（LOP）** のいずれかに送られ、シリアルモニタで `+ `または` - `を入力することで音量を調整できます。このトーンはファイルからではなく、サイン波を用いてコード内で生成されます。また、`m` を入力することで出力モード（ヘッドホンまたはラインアウト）を切り替えることもできます。AIC3104 は **I2C** を使用して制御され、音量や出力電力のレジスタが設定されます。

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


## 仕組み

コードはまず、I2C インターフェース経由で **AIC3104 オーディオコーデック**を初期化し、DAC 音量やヘッドホン／ラインアウトレベルなどの主要な出力パラメータを設定します。次に、AudioTools ライブラリの SineWaveGenerator コンポーネントを使用して、**サイン波信号**（具体的には 440 Hz のトーン）を生成します。このオーディオ信号は、ESP32S3 から AIC3104 チップへデジタルオーディオデータを送信するように設定された **I2S インターフェース**を介してストリーミングされます。サイン波は StreamCopy オブジェクトを使ってコーデックに継続的に供給され、これが I2S ストリームへのリアルタイムなオーディオデータ転送を処理します。一方、ユーザーは **シリアルモニタ**を通じてシステムと対話でき、**音量レベル**や**出力モード（ヘッドホンまたはラインアウト）**をその場で制御できます。

## シリアルコマンド

このシステムは、シリアルモニタに入力されたシンプルなシリアルコマンドに応答します。`+` キーを押すと音量が 1 レベル上がり、`-` キーを押すと 1 レベル下がります。`m` キーを押すと、出力モードが**ヘッドホン出力（HPLOUT）とライン出力（LOP）の間で切り替わります**。これらのコマンドにより、コードを変更したり再書き込みしたりすることなく、オーディオ出力をリアルタイムでテストおよび調整できます。

## コード

```c
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
AudioInfo info(16000, 2, 32);
SineWaveGenerator<int16_t> sineWave(32000);
GeneratedSoundStream<int16_t> sound(sineWave);
I2SStream out;
StreamCopy copier(out, sound);

// Volume: range 0–17 (0–8 = DAC range, 9–17 = analog boost)
int volume = 3;  // Changed from 8 to 3 for quieter start
bool useHPOUT = true; // true = HPLOUT (headphone), false = LOP (line out)

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
  aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  0x00);
  aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

  // Set output to 0dB, unmuted, powered up
  aic3104_reg_write(AIC3104_HPLOUT_LEVEL,   0x0D);
  aic3104_reg_write(AIC3104_HPROUT_LEVEL,   0x0D);
  aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  0x0B);
  aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
}

void setVolume(int vol) {
  vol = constrain(vol, 0, 17);
  volume = vol;

  if (vol <= 8) {
    // ✅ FIX: DAC register is attenuation — invert so higher vol = less attenuation
    // vol=8 → dacVal=0  (0 dB, loudest)
    // vol=0 → dacVal=72 (−72 dB, quietest)
    uint8_t dacVal = (8 - vol) * 9;
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  dacVal);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, dacVal);

    // Output level fixed at 0dB
    aic3104_reg_write(AIC3104_HPLOUT_LEVEL,   0x0D);
    aic3104_reg_write(AIC3104_HPROUT_LEVEL,   0x0D);
    aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  0x0B);
    aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x0B);
  } else {
    // DAC at max (0 dB), boost via analog output stage
    aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME,  0x00);
    aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00);

    uint8_t gain   = vol - 8;          // +1 to +9 dB above unity
    uint8_t outVal = (gain << 4) | 0x0B;

    if (useHPOUT) {
      aic3104_reg_write(AIC3104_HPLOUT_LEVEL, outVal);
      aic3104_reg_write(AIC3104_HPROUT_LEVEL, outVal);
    } else {
      aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL,  outVal);
      aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, outVal);
    }
  }

  // ✅ FIX: corrected dB label (attenuation = how far below max, not vol*1)
  Serial.print("Volume: step ");
  Serial.print(volume);
  Serial.print("/17  (");
  if (vol <= 8) {
    int dbAtten = (8 - vol) * 9;
    Serial.print("-");
    Serial.print(dbAtten);
    Serial.print(" dB DAC attenuation)");
  } else {
    Serial.print("+");
    Serial.print(vol - 8);
    Serial.print(" dB analog boost)");
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  while (!Serial);

  setupAIC3104();
  setVolume(volume);  // This will now start at 3/17

  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info);
  config.pin_bck  = 8;
  config.pin_ws   = 7;
  config.pin_data = 44;
  config.is_master = false;

  out.begin(config);
  sineWave.begin(info, N_A4); // 440 Hz tone
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
      Serial.print("Output switched to: ");
      Serial.println(useHPOUT ? "HPLOUT (headphone)" : "LOP (line out)");
    }
  }
}
```


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>