---
description: Arduino IDE から互換性のあるすべての Seeed ePaper 製品を駆動するためのリファレンスガイド - Arduino IDE のセットアップ、Seeed_GFX ライブラリのインストール、driver.h の生成。ハードウェア固有の詳細は各製品のクックブックに記載されています。
title: Arduino で使う
keywords:
  - ePaper ディスプレイ
  - Arduino
  - Seeed_GFX
  - GxEPD2
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_arduino
sidebar_position: 4
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/epaper_work_with_arduino/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arduino で使う

このページは、Arduino IDE から互換性のある任意の Seeed ePaper 製品を駆動するための**リファレンスマニュアル**です。ここでは、すべてのハードウェアで共通の部分を扱います：

1. Arduino IDE と ESP32 ボードサポートのセットアップ。
2. Seeed ePaper を一級でサポートする、`TFT_eSPI` をフォークしてメンテナンスしている **Seeed_GFX** ライブラリのインストール。
3. [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) を使って、ボードとスクリーンの組み合わせに対応した `driver.h` を生成。
4. （オプション）代替ドライバとしてサードパーティ製ライブラリ **GxEPD2** を使用。

**「箱を開けて、Hello World を書き込んで、センサーやボタンを光らせる」エンドツーエンドの手順**については、使用している特定ハードウェア向けの**クックブック**に進んでください。これらのページでは、このリファレンスで説明するボイラープレートを再利用し、そのうえで製品固有のサンプル（ペリフェラル、コード例、トラブルシューティング）を追加しています：

- [reTerminal E シリーズ — ePaper ディスプレイ クックブック](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino) — `Seeed_GFX` と `GxEPD2` の両方を使った reTerminal E1001 / E1002 / E1003 / E1004 の Hello World 例を扱います。
- [reTerminal E シリーズ — オンボードペリフェラル クックブック](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals) — 同じモデル向けのフルペリフェラル例：LED、ブザー、3 つのユーザーボタン、SHT4x センサー、バッテリーモニタ、microSD カード、および SD からの BMP 画像描画。
- [reTerminal E シリーズ — RTC・低消費電力・オーディオ クックブック](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals_2) — RTC 時刻管理、ディープスリープ / ライトスリープ、I2S マイク録音。
- 対応製品がプラットフォームに追加され次第、さらなるクックブック（XIAO 7.5" パネル、EE0x ドライバボードなど）が追加されます。

クックブックでまだ扱われていない新製品で `Hello World` を動かすためのボイラープレートだけが必要な場合は、このページだけで十分です。

## 対応ハードウェア

Arduino 列にチェックが入っている [メインハブページ](https://wiki.seeedstudio.com/ja/seeed_epaper_displays) 上のすべての Seeed ePaper 製品は、このワークフローを実行できます。概要は次のとおりです：

<div class="table-center">
  <table align="center">
    <tr>
      <th>製品ライン</th>
      <th>MCU</th>
      <th>備考</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3（内蔵）</td>
      <td>クックブックあり — 上記リンクを参照</td>
    </tr>
    <tr>
      <td><strong>EE02 / EE03 / EE04 / EE05</strong></td>
      <td>XIAO ESP32-S3 / ESP32-S3 Plus</td>
      <td>使用するスクリーンに合わせて Configuration Tool を使用</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05</strong></td>
      <td>XIAO nRF52840 Plus</td>
      <td>nRF52840 ボードパッケージを選択；主なターゲットは代わりに OpenDisplay（BLE）</td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>専用の [XIAO 7.5" Panel + Arduino ガイド](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_arduino) を参照</td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td>専用の [TRMNL DIY Kit + Arduino ガイド](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_arduino) を参照</td>
    </tr>
    <tr>
      <td><strong>XIAO eInk Expansion Board v2 / ePaper Breakout Board</strong></td>
      <td>接続した任意の XIAO</td>
      <td>使用する XIAO とスクリーンに合わせて Configuration Tool を使用</td>
    </tr>
  </table>
</div>

## ステップ 1: Arduino IDE をセットアップする

Arduino から ESP32 / ESP32-S3 / ESP32-C3 上で動作する任意の Seeed ePaper 製品を駆動するには、Arduino IDE と ESP32 ボードサポートが必要です。

:::tip
Arduino を使うのが初めての場合は、まず [Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照してください。
:::

**ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/software) をダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div><br />

**ステップ 2.** ESP32 ボードサポートを追加します。Arduino IDE で **File → Preferences** を開き、**Additional Boards Manager URLs** フィールドに次を追加します：

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**ステップ 3.** ESP32 ボードパッケージをインストールします：**Tools → Board → Boards Manager** を開き、`esp32` を検索し、Espressif Systems によるパッケージをインストールします。

**ステップ 4.** 使用しているハードウェアに合ったボードを選択します：

- **reTerminal E シリーズ / EE04 with EE04 plus / TRMNL DIY Kit**: `XIAO_ESP32S3_PLUS`
- **EE02 / EE03 / EE04 / EE05 standard / EN04（Arduino 経路）**: `XIAO_ESP32S3`（nRF52840 ベースのボードの場合は `XIAO_nRF52840`）
- **XIAO 7.5" ePaper Panel**: `XIAO_ESP32C3`

どれを選べばよいか分からない場合は、製品のクックブックに記載されています。

**ステップ 5.** ハードウェアを USB-C で接続し、**Tools → Port** から正しいポートを選択します。

**ステップ 6.** ESP32-S3 ボード（ほとんどの reTerminal E シリーズおよび EE0x ボード）では、PSRAM を有効にします：

**Tools → PSRAM → OPI PSRAM**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/open_opi_psram.jpg" style={{width:1000, height:'auto'}}/></div>

## ステップ 2: Seeed_GFX ライブラリをインストールする

Seeed_GFX は、Seeed 製ディスプレイを一級でサポートするようにした `TFT_eSPI` のフォークです。当社の ePaper ライン全体に推奨されるライブラリです。

**ステップ 1.** GitHub から Seeed_GFX ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong>
    </a>
</div><br />

**ステップ 2.** **Sketch → Include Library → Add .ZIP Library** を選択し、ダウンロードした ZIP を指定します。

:::note
以前に `TFT_eSPI` をインストールしている場合は、競合を避けるために Arduino のライブラリフォルダから一時的に削除するか名前を変更してください。
:::

## ステップ 3: 使用しているハードウェア向けに `driver.h` を生成する

`Seeed_GFX` のすべてのサンプルスケッチは、スケッチフォルダ内のローカルな `driver.h` を探します。このヘッダは、どのボード・スクリーンコントローラ・ピンマップを使用するかをライブラリに伝えます。Configuration Tool がこれを生成します。

**ステップ 1.** サンプルスケッチを選びます：

- **モノクロスクリーン**: **File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**
- **カラースクリーン**: **File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**

**ステップ 2.** 同じスケッチフォルダ内に `driver.h` という名前の新しいファイルを作成します（Arduino IDE の新しいタブの矢印を使用）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) を開き、使用しているハードウェアを選択します。あらかじめ用意された各デバイスは、正しい `BOARD_SCREEN_COMBO` 値（および `USE_XIAO_EPAPER_DISPLAY_BOARD_EE04` などの追加の define）を生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** 生成された内容をコピーし、`driver.h` に貼り付けます。代表的な値は次のとおりです：

<Tabs groupId="arduino-board">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

```cpp
#define BOARD_SCREEN_COMBO 522 // reTerminal E1003 (ED103TC2)
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

```cpp
#define BOARD_SCREEN_COMBO 523 // reTerminal E1004 (T133A01)
```

</TabItem>
<TabItem value="ee04-583" label="EE04 + 5.83&quot; mono">

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
</Tabs>

その他の組み合わせについては、**常に Configuration Tool の出力を信頼してください** — 使用している XIAO ボード（または reTerminal / EN04 / 一体型キットの場合は `None`）と、接続しているスクリーンを選択します。

**ステップ 5.** スケッチをハードウェアに書き込みます。最初の電源投入時には部分更新が表示される場合がありますが、その後の更新では完全な Hello World の例が表示されます。

## ステップ 4（オプション）: 代わりに GxEPD2 を使う

`Seeed_GFX` が推奨ライブラリですが、すでに `GxEPD2` ベースのコードベースを持っている場合は、それを使って Seeed ePaper を駆動することもできます。`GxEPD2` は、幅広い電子ペーパーディスプレイをカバーする人気のコミュニティライブラリです。

最新のデバイスサポートを得るために GitHub から手動でインストールするには：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong>
    </a>
</div><br />

**Sketch → Include Library → Add .ZIP Library** を選択し、ダウンロードした ZIP を指定します。製品クックブックには、該当する場合に具体的な `GxEPD2` の例が含まれています（たとえば [reTerminal E シリーズ クックブック](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino) では、E1002 でのフルカラー描画を紹介しています）。

## 次のステップ — クックブック

このページは意図的にボイラープレートまでで止めています。ハードウェア固有のコードサンプルやエンドツーエンドの手順は、各製品のクックブックに記載されています：

- **[reTerminal E シリーズ — ePaper ディスプレイ クックブック](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino)** — E1001/E1002/E1003/E1004 での `Seeed_GFX` と `GxEPD2` の両方を使った Hello World。
- **[reTerminal E シリーズ — オンボードペリフェラル クックブック](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals)** — 同じモデル向けのフルペリフェラル一式：LED 制御、ブザー（パッシブ PWM ビープとメロディ再生）、3 ボタン入力、SHT4x 温度/湿度、バッテリ管理、microSD カード、SD からの BMP 画像描画。
- **[reTerminal E シリーズ — RTC・低消費電力・オーディオ クックブック](https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals_2)** — RTC 時刻管理、ディープスリープ / ライトスリープ、I2S マイク録音。
- **[XIAO 7.5" ePaper Panel + Arduino](https://wiki.seeedstudio.com/ja/xiao_075inch_epaper_panel_arduino)** — `Seeed_GFX` を用いた XIAO ESP32-C3 のウォークスルー。
- **[TRMNL 7.5" DIY Kit + Arduino](https://wiki.seeedstudio.com/ja/ogdiy_kit_works_with_arduino)** — TRMNL クラウドプラットフォームではなく、キットのハードウェアをカスタム Arduino スケッチで使用する方法。

新しいePaper製品が出荷されると、対応するクックブックが各製品のフォルダの下に追加され、このメインページからそのクックブックへのリンクが更新されます。

## よくある問題

### 画面に何も表示されない／更新されない

- 多くの場合、ePaperのFPCケーブルが緩んでいるか、上下逆になっています。金属端子が上を向くように差し直してください。
- ESP32-S3ボードでは、**Tools → PSRAM** で `OPI PSRAM` が有効になっていることを確認してください。
- `driver.h` 内の `BOARD_SCREEN_COMBO` がお使いのハードウェアに一致していることを確認してください。値が間違っていると、エラー表示もなく画面が真っ白になります。
- 開いたサンプルスケッチが、使用している画面（Basic か Colorful か）に対応していることを確認してください。

### ボードに書き込めない

- 別のUSB-Cケーブルを試してください（給電専用ではなくデータ通信対応のケーブル）。
- ESP32-S3ボードの場合：USBケーブルを接続する前に **BOOT** ボタンを押し続けてダウンロードモードに入り、その後ボタンを離してください。
- 再接続後、**Tools → Port** が正しいシリアルデバイスを指していることを確認してください。

特定の製品についてより詳しいトラブルシューティングを行う場合は、そのハードウェア用のクックブックを確認してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
