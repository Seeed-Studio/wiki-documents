---
description: 440 Hz のテストトーンを送信し、受信したマイクサンプルを確認することで、XIAO ESP32-S3 Plus と reSpeaker XVF3800 44mm アレイ間のフルデュプレックス I2S を検証します。
title: XIAO ESP32-S3 Plus を用いた reSpeaker XVF3800 44mm 向け I2S テスト
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - I2S test
  - xvf3800
  - arduino audio tools
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_i2s_test
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_i2s_test/
---
# XIAO ESP32-S3 Plus を用いた reSpeaker XVF3800 44mm 向け I2S テスト

このスケッチは、XIAO ESP32-S3 Plus と 44 mm アレイ上の XVF3800 間の I2S リンクを検証します。440 Hz の矩形波を生成して I2S 送信ラインに書き込み、同時にマイクアレイから戻ってくるステレオフレームを読み取ります。受信サンプルのうち `0` でも `-1` でもないものを有効としてカウントし、戻ってきた有効サンプル数に基づいて PASS か FAIL かをレポートします。

{/* TODO: href="#" の値は、公開後に Seeed Studio の製品ページ URL に置き換えてください。 */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

- アレイは **I2S ファームウェア** で動作している必要があります。まだ USB イメージのままの場合は、[Update Firmware](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/#update-firmware) を参照してください。
- ESP32 ボードパッケージと **Arduino Audio Tools** ライブラリがインストールされた Arduino IDE。詳しくは [Software Preparation](https://wiki.seeedstudio.com/ja/respeaker_44mm_xiao_getting_started/#software-preparation) を参照してください。
- ボードに **XIAO_ESP32S3_Plus** を選択し、ポート番号を選択していること。
- データ通信対応の USB-C ケーブル（充電専用ではないもの）。



:::note
このテストでは、XIAO を I2S の **マスター**（`cfg.is_master = true`）として設定します。録音および再生のサンプルでは、XVF3800 がクロックを駆動するため、XIAO は **スレーブ** として動作します。スケッチを切り替える場合は、この違いを覚えておいてください。
:::

## 動作概要

1. スケッチは 48 kHz、ステレオ、32 ビットのフルデュプレックス I2S ストリーム（`RXTX_MODE`）を設定します。
2. 32,000 フレームそれぞれについて、32 ビットの位相アキュムレータから 440 Hz の矩形波を計算し、同じサンプルを両チャネルに書き込んでから、1 フレーム分のステレオデータを読み戻します。
3. 受信サンプルのうち `0` でも `-1` でもないものごとに `nonZero` をインクリメントします。最初の 100 フレームは、データを目視確認できるように出力されます。
4. 実行後に、`nonZero` を `frameCount`（64,000 サンプル中 32,000 サンプル）と比較します。しきい値を下回る場合は、`I2S RX FAIL!` を報告する前にテストをもう一度実行します。

## Arduino スケッチ

```c
#include "AudioTools.h"

const int sampleRate = 48000;
const int frequency = 440;
const int32_t amplitude = 500;

const int frameCount = 32000;  // 32000 stereo frames

AudioInfo info(sampleRate, 2, 32);
I2SStream i2s;
I2SConfig cfg;

uint32_t phase = 0;
const uint32_t phaseStep =
    (uint64_t)frequency * 0x100000000ULL / sampleRate;

// Generate TX frames and check RX samples simultaneously
void runI2STest(int &nonZero) {

  nonZero = 0;
  bool truncated = false;

  int32_t txFrame[2];
  int32_t rxFrame[2];

  phase = 0;

  for (int i = 0; i < frameCount; i++) {

    // Generate 440 Hz square wave
    phase += phaseStep;

    int32_t sample =
        (phase & 0x80000000UL) ? -amplitude : amplitude;

    // Same signal on left and right channels
    txFrame[0] = sample;
    txFrame[1] = sample;

    // Write one stereo frame (2 x 32-bit)
    i2s.write((uint8_t *)txFrame, sizeof(txFrame));

    // Read one stereo frame (2 x 32-bit)
    size_t n = i2s.readBytes(
        (uint8_t *)rxFrame,
        sizeof(rxFrame)
    );

    if (n == sizeof(rxFrame)) {

      for (int ch = 0; ch < 2; ch++) {

        if (rxFrame[ch] != 0 && rxFrame[ch] != -1) {
          nonZero++;
        }
      }

      // Print first 100 stereo frames
      if (i < 100) {
        Serial.printf(
            "L: %ld  R: %ld\n",
            (long)rxFrame[0],
            (long)rxFrame[1]
        );
      }
      else if (!truncated) {
        Serial.println("... (truncated)");
        truncated = true;
      }
    }
  }

  Serial.println();
}

void setup() {

  Serial.begin(115200);
  while (!Serial);

  AudioLogger::instance().begin(
      Serial,
      AudioLogger::Info
  );

  cfg = i2s.defaultConfig(RXTX_MODE);
  cfg.copyFrom(info);

  cfg.pin_bck = 8;
  cfg.pin_ws = 7;

  cfg.pin_data = 44;     // TX
  cfg.pin_data_rx = 43;  // RX

  cfg.is_master = true;

  i2s.begin(cfg);

  Serial.println("I2S full-duplex test started");
  Serial.println("Sample rate: 48000 Hz");
  Serial.println("Channels: 2");
  Serial.println("Bit depth: 32-bit");
}

void loop() {

  int nonZero = 0;

  Serial.println("First I2S RX test:");

  runI2STest(nonZero);

  Serial.printf(
      "Valid samples: %d / %d\n",
      nonZero,
      frameCount * 2
  );

  if (nonZero > frameCount) {

    Serial.println("I2S RX PASS!");

  } else {

    Serial.println(
        "Valid samples below threshold. Trying again..."
    );

    nonZero = 0;

    runI2STest(nonZero);

    Serial.printf(
        "Valid samples: %d / %d\n",
        nonZero,
        frameCount * 2
    );

    if (nonZero > frameCount) {
      Serial.println("I2S RX PASS!");
    } else {
      Serial.println("I2S RX FAIL!");
    }
  }

  Serial.println("Test complete");

  while (true);
}
```

## 期待される出力

シリアルモニタを **115200 baud** に設定して開きます。正常なリンクは次のように表示されます：

```text
I2S full-duplex test started
Sample rate: 48000 Hz
Channels: 2
Bit depth: 32-bit
First I2S RX test:
L: -500  R: -500
L: -500  R: -500
L: 500  R: 500
... (truncated)
Valid samples: 63500 / 64000
I2S RX PASS!
Test complete
```

最初のフレーム内の具体的な値は、マイクが拾う音に依存します。重要なのは `I2S RX PASS!` という行です。

## トラブルシューティング

### `I2S RX FAIL!`

- アレイが **I2S** ファームウェアで動作していることを確認してください — USB イメージでは I2S データは生成されません。
- ボードパッケージが `XIAO_ESP32S3_Plus` であり、他のスケッチで I2S ピンが再定義されていないことを確認してください。
- スケッチが、上の表と一致する GPIO 8 / 7 / 44 / 43 を使用していることを確認してください。

### 受信サンプルがすべて `0` または `-1` になる

マイクのストリームが XIAO に届いていません。I2S ファームウェアを書き直し、その後ボードの電源を入れ直してください。アレイがミュートされている場合、処理済みチャネルは無音になることがあります — ミュートボタンを 1 回押してください。

### シリアルモニタが何も表示しない

ボードが再認識された後に、`Tools > Port` で正しいポートを選択してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
