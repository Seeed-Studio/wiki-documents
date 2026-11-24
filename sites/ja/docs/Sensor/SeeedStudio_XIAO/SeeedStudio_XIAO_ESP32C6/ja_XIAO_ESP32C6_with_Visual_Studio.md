---
description: Arduino の Wi-Fi スケッチを XIAO ESP32C6 にビルドして書き込み、内蔵 USB JTAG を使って Visual Studio で信号しきい値の比較処理をステップ実行します。
title: Visual Studio で使う XIAO ESP32C6
keywords:
  - XIAO
  - ESP32C6
  - Visual Studio
  - Arduino
  - USB JTAG
slug: /xiao_esp32c6_with_visual_studio
last_update:
  date: 11/23/2026
---

この手順書は、XIAO ESP32C6 の [Wi-Fi スキャン例](https://wiki.seeedstudio.com/ja/xiao_wifi_usage_esp32c6/#近くの-wifi-ネットワークをスキャンする) を基にしています。最も強い 2.4 GHz 信号をサンプリングして分類する Arduino スケッチを書き込み、その比較処理で一時停止して、ステップ実行しながら値が変化する様子を確認します。XIAO の内蔵 USB JTAG は、スケッチの書き込みに使うのと同じ USB データケーブル経由で動作します。[Espressif の内蔵 USB JTAG リファレンス](https://docs.espressif.com/projects/esp-idf/en/stable/esp32c6/api-guides/jtag-debugging/configure-builtin-jtag.html)

## 必要なもの

- Seeed Studio XIAO ESP32C6 本体と、Windows コンピュータに直接接続された USB-C データケーブル。
- **Desktop development with C++** ワークロードを含む Microsoft Visual Studio 2022 または 2026 と、[Visual Micro 拡張機能](https://marketplace.visualstudio.com/items?itemName=VisualMicro.ArduinoIDEforVisualStudio)。Visual Micro はサードパーティ製拡張機能で、試用版と有償ライセンスがあります。
- 到達範囲内にあるアクティブな 2.4 GHz Wi-Fi アクセスポイント。スケッチはネットワークに参加せず、近くのネットワークをスキャンするだけです。

## ボードとポートを選択する

1. Visual Micro ツールバーで、使用したい Arduino 環境を選択します。**Arduino 2** オプションは、Arduino IDE 2 の設定を使用します。その環境にすでに **esp32 by Espressif Systems** がインストールされている場合は、手順 2 に進みます。インストールされていない場合は、**Micro Explorer → Board Manager** を使って安定版パッケージをインストールします。Board Manager に Espressif が表示されない場合は、**IDE Locations → Additional board manager JSON URLs** に Seeed の手順にあるパッケージインデックスを追加し、保存してから Board Manager で **Check for Updates** を選択します。[Seeed のボードセットアップ](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#ボードを追加) · [Visual Micro Board Manager](https://www.visualmicro.com/page/User-Guide.aspx?doc=Board-Manager.html)
2. **vMicro → New Arduino Project** を選択し、プロジェクト名を `XiaoC6WifiSignal` にします。ボードに `XIAO_ESP32C6` を、XIAO を接続したときに表示される COM ポートを選択します。
3. **vMicro → Board Options** で **USB CDC On Boot** を **Enabled** に設定します。これにより、スケッチの `Serial` 出力が XIAO の USB コネクタにルーティングされます。

## Wi-Fi スケッチを書き込む

`XiaoC6WifiSignal.ino` の内容を、以下のスケッチに置き換えます。ネットワークをスキャンし、dBm 単位でサンプリングした RSSI の最も強い値を記録し、それを `-70 dBm` と比較します。`-70 dBm` 以上の値は強いと見なされます。

```cpp
#include <WiFi.h>

volatile int32_t thresholdDbm = -70;
volatile int32_t strongestDbm = -127;
volatile bool strongSignal = false;

void setup() {
  Serial.begin(115200);
  WiFi.STA.begin(false);
}

void loop() {
  const int count = WiFi.scanNetworks();

  if (count > 0) {
    // WiFi.RSSI() takes an 8-bit scan-result index.
    const int sampleCount = min(count, 256);
    int32_t bestDbm = WiFi.RSSI(0);
    for (int index = 1; index < sampleCount; ++index) {
      const int32_t rssi = WiFi.RSSI(index);
      if (rssi > bestDbm) {
        bestDbm = rssi;
      }
    }

    strongestDbm = bestDbm;
    strongSignal = strongestDbm >= thresholdDbm;  // Set a breakpoint here.
    Serial.printf("%ld dBm (%s)\n", static_cast<long>(strongestDbm),
                  strongSignal ? "strong" : "weak");
  } else {
    Serial.println(count == 0 ? "No networks found" : "Wi-Fi scan failed");
  }

  WiFi.scanDelete();
  delay(4000);
}
```

**vMicro → Build & Upload** を選択します。Visual Micro の **Serial Monitor** を開き、ボードの COM ポートを選択し、**115200 baud** に設定して **Connect** をクリックします。スキャン後、`-68 dBm (strong)` や `-71 dBm (weak)` のような行が表示されるはずです。後の書き込みでポートが解放された後も開いているモニタを自動的に再接続させたい場合は、**Auto-Recon** を有効にします。

## 信号比較をステップ実行する

1. **Debug** ビルド構成を選択します。Visual Micro ツールバーでデバッガーモードを **Hardware** に設定し、**ESP32C6-USB** を選択します。ボードは `XIAO_ESP32C6` のままにします。ボードテストに合わせるため、**vMicro → Debugger → Disable Optimization → No Project + Libraries Optimization** を選択します。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiao-esp32-c6-setup.png" alt="Visual Micro ツールバーに XIAO_ESP32C6、COM ポート、Hardware デバッグ、ESP32C6-USB が表示されている" style={{width:450, height:'auto'}}/></div>

2. 行 `strongSignal = strongestDbm >= thresholdDbm;` の左余白をクリックしてブレークポイントを設定します。**F5** を押してデバッグを開始します。スキャンでネットワークが見つかると、その行でスケッチが一時停止します。
3. Visual Studio で **Debug → Windows → Watch → Watch 1** を開きます。`strongestDbm`、`thresholdDbm`、`strongSignal` を追加します。この時点では、`strongSignal` にはまだ以前の値が保持されています。
4. **F10** を 1 回押して比較を実行します。デバッガーは `Serial.printf` の行に移動します。以下に示すボードテストでは、`strongestDbm` は `-71`、`thresholdDbm` は `-70` で、代入によって `strongSignal` は `true` から `false` に変化しました。結果は周囲のネットワークによって異なります。スクリーンショットでは、これらの値が **Autos** に表示されています。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiao-esp32-c6-f10-result.png" alt="F10 の後、実行位置は print 行にあり、Autos に strongestDbm -71、thresholdDbm -70、strongSignal false が表示されている" style={{width:700, height:'auto'}}/></div>

5. **F5** を押して再開します。Serial Monitor に分類結果が出力されます。その後スケッチは 4 秒待機し、別のスキャンを開始します。一時停止せずにスキャンを続けたい場合は、ブレークポイントを解除してからもう一度 **F5** を押します。

スクリーンショットは、元のオンボードテストを示しています。上記のスケッチは同じ比較処理を使用し、インデックス付けするスキャン結果の数を 256 に制限しています。この改訂版は Arduino-ESP32 3.3.13 でコンパイルされました。

## トラブルシューティング

- **ブレークポイントに到達しない。** 比較処理は、スキャンで少なくとも 1 つのネットワークが見つかった場合にのみ実行されます。Serial Monitor に `No networks found` と表示される場合は、XIAO を 2.4 GHz アクセスポイントに近づけてください。スケッチが一時停止している間に手動でモニタに接続する必要がある場合は、**Connect** をクリックする前に **F5** で実行を再開します。
- **COM ポートが表示されない、または書き込みがタイムアウトする。** ケーブルがデータ通信に対応していることを確認し、ボードを再接続して現在の COM ポートを選択します。Windows がそれでも認識しない場合は、[Seeed のブートローダー復旧手順](https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/#ブートローダーモード)に従ってください。
- **USB JTAG が切断される、またはデバッガーが停止する。** XIAO を抜き差ししてから、Windows が認識するまで待ちます。デバッガーがまだ待機状態の場合は、デバッグを停止し、**F5** で新しいセッションを開始します。OpenOCD エラーやデバッガープロファイルの確認については、[ESP32-C6 USB JTAG トラブルシューティング](https://www.visualmicro.com/page/ESP32C6-USB-Debugging.aspx#usb-jtag-troubleshooting)を参照してください。

## 関連情報

- [XIAO ESP32C6 と PlatformIO](https://wiki.seeedstudio.com/ja/xiao_esp32c6_with_platform_io/)
- [XIAO ESP32C6 の Wi-Fi 利用](https://wiki.seeedstudio.com/ja/xiao_wifi_usage_esp32c6/)
