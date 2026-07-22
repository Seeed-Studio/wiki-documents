---
description: Seeed ePaper 製品で PlatformIO を使用するためのリファレンスガイド - VS Code セットアップ、プロジェクト構造、platformio.ini 設定、Seeed_GFX セットアップ、および製品ごとの環境選択。
title: PlatformIO を使う
keywords:
  - ePaper ディスプレイ
  - PlatformIO
  - platformio.ini
  - Seeed_GFX
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_platformio
sidebar_position: 5
last_update:
  date: 06/01/2026
  author: Citric
createdAt: '2026-06-01'
url: https://wiki.seeedstudio.com/ja/epaper_work_with_platformio/
updatedAt: '2026-06-12'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PlatformIO を使う

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/248.png" style={{width:650, height:'auto'}}/></div>

このページは、Seeed ePaper 製品向けの**PlatformIO 設定リファレンス**です。Arduino IDE ワークフローと異なる部分に焦点を当てています：

1. Visual Studio Code への PlatformIO のインストール。
2. PlatformIO によって作成されるプロジェクト構造の理解。
3. ボード選択、フレームワーク選択、ライブラリ依存関係、シリアルモニタ速度、書き込みオプション、ビルドフラグのためのメイン設定ファイルである `platformio.ini` の編集。
4. 各 Seeed ePaper 製品に対して正しい PlatformIO 環境を選択すること。
5. `Seeed_GFX` を追加し、[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) を使って対応する `driver.h` を生成すること。

ディスプレイ描画 API、サンプルスケッチ、ハードウェア固有のデモコードを探している場合は、[Work with Arduino](/ja/epaper_work_with_arduino) と、このページの末尾にリンクされている各製品のクックブックから始めてください。PlatformIO で使用される C/C++ コードは、通常 Arduino コードと同じです。主な違いは、プロジェクトの設定方法です。

## 対応ハードウェア

PlatformIO は、Arduino 互換のファームウェアパスを公開している Seeed ePaper 製品のコードベースのワークフローで使用できます。このページを使って PlatformIO プロジェクトを準備し、その後ボードとスクリーンに合った正しい `driver.h` を選択してください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>製品ライン</th>
      <th>代表的な MCU / ボードターゲット</th>
      <th>設定メモ</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>ESP32-S3 ベースの reTerminal E シリーズ</td>
      <td>ESP32-S3 の PlatformIO 環境を使用し、その後、正確な reTerminal モデル用の `driver.h` を生成します。</td>
    </tr>
    <tr>
      <td><strong>EE02 / EE03 / EE04 / EE05 ドライバボード</strong></td>
      <td>XIAO ESP32-S3 ファミリ</td>
      <td>EE0x ファミリ全体で同じ PlatformIO 構成を使用します。`BOARD_SCREEN_COMBO` の値は、選択したボードとスクリーンに応じて変わります。</td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY キット</strong></td>
      <td>XIAO ESP32-S3 ファミリ</td>
      <td>TRMNL クラウドファームウェアを使用する代わりに、カスタム Arduino スタイルのファームウェアを書く場合は ESP32-S3 環境を使用します。</td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper パネル</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>XIAO ESP32-C3 の PlatformIO 環境を使用し、その後、スクリーン固有の `driver.h` 設定については製品クックブックを参照します。</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05 および nRF52840 ベースの ePaper ボード</strong></td>
      <td>XIAO nRF52840 ファミリ</td>
      <td>ファームウェア開発には nRF52840 の PlatformIO 環境を使用します。ePaper 固有のクックブックがまだ公開されていない場合は、このページを環境リファレンスとして使用し、ピンについては製品の回路図/クックブックを参照してください。</td>
    </tr>
  </table>
</div>

:::note
PlatformIO プロジェクトは、ビルドと書き込みのための環境にすぎません。ディスプレイは依然として正しい `driver.h` に依存します。`platformio.ini` が正しくても、`driver.h` が誤ったボードやパネルを対象としている場合、ファームウェアはコンパイルと書き込みに成功しても、画面は真っ白なままになる可能性があります。
:::

## ePaper 開発に PlatformIO を使う理由

PlatformIO は、ePaper プロジェクトが単一のスケッチを超えて大きくなったときに役立ちます：

- ボード、フレームワーク、ライブラリ、書き込み速度、シリアルモニタ速度、ビルドフラグを 1 つのバージョン管理された `platformio.ini` ファイルにまとめておけます。
- 1 つのプロジェクト内に複数のビルド環境を定義できるため、同じコードベースで複数の Seeed ePaper 製品をターゲットにできます。
- `lib_deps` を通じてライブラリをダウンロードするため、別のコンピュータでプロジェクトを再現しやすくなります。
- VS Code 内からビルド、書き込み、クリーン、シリアルモニタのタスクを提供します。

ディスプレイ描画やハードウェア API については、Arduino クックブックで使用しているのと同じ Arduino スタイルの C/C++ コードを引き続き使用します。PlatformIO が主に変えるのは、プロジェクトのレイアウトと設定方法です。

## ステップ 1: VS Code と PlatformIO をインストールする

**Step 1.** [Visual Studio Code](https://code.visualstudio.com/) をダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** VS Code で **Extensions** を開き、`PlatformIO IDE` を検索してインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** 拡張機能のインストールが完了したら VS Code を再起動します。

**Step 4.** VS Code のアクティビティバーにある PlatformIO アイコンから **PlatformIO Home** を開きます。

:::tip
VS Code で PlatformIO IDE を使用する場合、PlatformIO Core は拡張機能に含まれています。VS Code の外で `pio` コマンドを使いたい場合にのみ、別途 PlatformIO Core をインストールする必要があります。
:::

## ステップ 2: PlatformIO プロジェクトを作成する

**Step 1.** **PlatformIO Home** で **New Project** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:1000, height:'auto'}}/></div>

**Step 2.** プロジェクト名を入力します。

**Step 3.** PlatformIO にプロジェクトを作成させるための、一時的な Arduino 互換ボードを任意に選択します。この最初の選択は、プロジェクトフォルダを生成するためだけに使用されます。

**Step 4.** フレームワークとして **Arduino** を選択します。

**Step 5.** **Finish** をクリックし、PlatformIO がプロジェクトを作成し終えるまで待ちます。

**Step 6.** `platformio.ini` を開き、生成された設定を次のセクションに示す Seeed 用設定に置き換えます。

:::caution
この ePaper 製品ラインで使用される Seeed Studio 開発ボードのほとんどは、PlatformIO のデフォルトボード一覧だけでなく、Seeed の PlatformIO プラットフォームパッケージによって管理されています。PlatformIO の **New Project** ウィンドウで、完全に一致する Seeed ボードが見つからなくても、それは想定された動作です。まず一時的なプロジェクトを作成し、その後 `platformio.ini` で `platform = https://github.com/Seeed-Studio/platform-seeedboards.git` と正しい `board` ID を設定してください。
:::

作成後、重要なファイルとフォルダは次のとおりです：

<div class="table-center">
  <table align="center">
    <tr>
      <th>パス</th>
      <th>用途</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>メインの PlatformIO 設定ファイル。このガイドで最も重要なファイルです。</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>メインのファームウェアソースファイル。Arduino スタイルのコードはここに記述します。</td>
    </tr>
    <tr>
      <td><code>lib/</code></td>
      <td>任意のローカルライブラリ。この中にローカルの <code>driver.h</code> 用ヘルパーフォルダを置くと便利です。</td>
    </tr>
    <tr>
      <td><code>.pio/</code></td>
      <td>PlatformIO のビルド出力とダウンロードされた依存関係。手動で編集しないでください。</td>
    </tr>
  </table>
</div>

## ステップ 3: `platformio.ini` を理解する

`platformio.ini` は PlatformIO プロジェクトの中心です。各 `[env:name]` セクションが 1 つのビルド環境を定義します。環境は、どのボード向けにコンパイルするか、どのフレームワークを使うか、どのライブラリをダウンロードするか、どのようにファームウェアを書き込んだりモニタしたりするかを PlatformIO に伝えます。

初心者にとって最も簡単なワークフローは、[ステップ 4](#ステップ-4-デバイス用の設定をコピーする) から自分のデバイス用の完全な設定をコピーし、それを `platformio.ini` に貼り付けてから、対応する `driver.h` ファイルを作成することです。共通のベースセクションと別のデバイスセクションを自分で組み合わせる必要はありません。

最も重要なフィールドは次のとおりです：

<div class="table-center">
  <table align="center">
    <tr>
      <th>フィールド</th>
      <th>制御内容</th>
      <th>例</th>
    </tr>
    <tr>
      <td><code>platform</code></td>
      <td>PlatformIO のプラットフォームパッケージ。このガイドの Seeed ボードでは、PlatformIO がボード定義をダウンロードできるように、Seeed のプラットフォームパッケージ URL を使用します。</td>
      <td><code>platform = https://github.com/Seeed-Studio/platform-seeedboards.git</code></td>
    </tr>
    <tr>
      <td><code>board</code></td>
      <td>PlatformIO のボード ID。MCU、フラッシュレイアウト、書き込みツール、デフォルトのビルド設定を決定します。</td>
      <td><code>board = seeed-xiao-esp32-s3-sense</code></td>
    </tr>
    <tr>
      <td><code>framework</code></td>
      <td>ファームウェアで使用するソフトウェアフレームワーク。Arduino スタイルのサンプルでは <code>arduino</code> を使用します。</td>
      <td><code>framework = arduino</code></td>
    </tr>
    <tr>
      <td><code>monitor_speed</code></td>
      <td>シリアルモニタのボーレート。ファームウェア内の <code>Serial.begin(...)</code> と一致させる必要があります。</td>
      <td><code>monitor_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>upload_speed</code></td>
      <td>PlatformIO が USB シリアル経由でファームウェアを書き込むときに使用する書き込みボーレート。</td>
      <td><code>upload_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>lib_deps</code></td>
      <td>この環境用に PlatformIO が自動的にダウンロードするライブラリ。</td>
      <td><code>https://github.com/Seeed-Studio/Seeed_GFX</code></td>
    </tr>
    <tr>
      <td><code>build_flags</code></td>
      <td>追加のコンパイラ定義。製品クックブックやライブラリで必要とされている場合にのみ使用します。</td>
      <td><code>-DBOARD_HAS_PSRAM</code></td>
    </tr>
    <tr>
      <td><code>upload_port</code></td>
      <td>任意指定の固定シリアルポート。PlatformIO の自動検出を優先する場合は設定しないでください。</td>
      <td><code>upload_port = /dev/ttyACM0</code></td>
    </tr>
  </table>
</div>

:::caution
無関係な製品間で `platformio.ini` をそのままコピーしないでください。同じ C/C++ ソースは移植可能な場合がありますが、`board`、PSRAM 設定、`driver.h` は実際のハードウェアと一致している必要があります。
:::

## ステップ 4: デバイス用の設定をコピーする

自分のデバイスタブを選び、`platformio.ini` ブロック全体をコピーして、PlatformIO プロジェクト内の `platformio.ini` ファイルに貼り付けてください。共通のベースセクションとデバイスセクションをマージする必要がないように、設定は各タブであえて繰り返されています。

:::tip
最初のビルドには時間がかかる場合があります。これは、PlatformIO が Seeed のプラットフォームパッケージ、ツールチェーン、Arduino フレームワーク、および `Seeed_GFX` ライブラリをダウンロードするためです。
:::

<Tabs groupId="platformio-device">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

**reTerminal E1001** には次の設定を使用します：

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

**reTerminal E1001** 用に生成された `driver.h` を使用します。既存の `Seeed_GFX` のサンプルでは、E1001 は次の設定を使用します：

```cpp
#define BOARD_SCREEN_COMBO 520
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

**reTerminal E1002** には次の設定を使用します：

```ini
[env:reterminal_e1002]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

**reTerminal E1002** 用に生成された `driver.h` を使用します。既存の `Seeed_GFX` のサンプルでは、E1002 は次の設定を使用します：

```cpp
#define BOARD_SCREEN_COMBO 521
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

**reTerminal E1003** には次の設定を使用します：

```ini
[env:reterminal_e1003]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

**reTerminal E1003** 用に生成された `driver.h` を使用します。既存の `Seeed_GFX` のサンプルでは、E1003 は次の設定を使用します：

```cpp
#define BOARD_SCREEN_COMBO 522
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

**reTerminal E1004** には次の設定を使用します：

```ini
[env:reterminal_e1004]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

**reTerminal E1004** 用に生成された `driver.h` を使用します。既存の `Seeed_GFX` のサンプルでは、E1004 は次の設定を使用します：

```cpp
#define BOARD_SCREEN_COMBO 523
```

</TabItem>
<TabItem value="ee0x" label="EE02 / EE03 / EE04 / EE05">

**EE02 / EE03 / EE04 / EE05** ESP32-S3 ePaper ドライバボードには、次の設定を使用します：

```ini
[env:ee0x_epaper_driver_board]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

お使いの EE0x ボードと ePaper パネルに合わせて `driver.h` を生成します。例えば、7.5 インチのモノクロ ePaper パネルを搭載した EE04 では、次の設定を使用します：

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**TRMNL 7.5 インチ (OG) DIY Kit** 上でカスタム Arduino 風ファームウェアを動かすには、次の設定を使用します：

```ini
[env:trmnl_diy_kit]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

ビルドする前に、TRMNL DIY Kit のディスプレイ構成に合わせて `driver.h` を生成してください。

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

**XIAO 7.5 インチ ePaper Panel** には次の設定を使用します：

```ini
[env:xiao_075_epaper_panel]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c3
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

ビルドする前に、XIAO 7.5 インチ ePaper Panel 用の `driver.h` を生成してください。

</TabItem>
<TabItem value="en04-en05" label="EN04 / EN05">

**EN04 / EN05** nRF52840 ベースの ePaper ボード向けに、PlatformIO の出発点として次の設定を使用します：

```ini
[env:en04_en05]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840-plus
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
```

EN04 / EN05 のディスプレイドライバ、ピンマップ、およびライブラリ依存関係は、ベースとしている製品固有のファームウェアまたはクックブックに従う必要があります。

</TabItem>
</Tabs>

## ステップ 5：`driver.h` を追加する

`platformio.ini` は MCU とビルド環境を選択します。`driver.h` は、`Seeed_GFX` が使用する ePaper ボードと画面の組み合わせを選択します。

**ステップ 1.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) を開きます。

**ステップ 2.** 使用するボードと画面を選択します。

**ステップ 3.** 生成された設定をコピーします。

**ステップ 4.** その設定を、ファームウェアからインクルードできる `driver.h` ファイルに追加します。

典型的な生成ファイルは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

既存の ePaper ドキュメントでよく使われる `BOARD_SCREEN_COMBO` の値には、次のようなものがあります：

<div class="table-center">
  <table align="center">
    <tr>
      <th>ハードウェア</th>
      <th>生成される設定の例</th>
      <th>正確な情報源</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>#define BOARD_SCREEN_COMBO 520</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>#define BOARD_SCREEN_COMBO 521</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>#define BOARD_SCREEN_COMBO 522</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>#define BOARD_SCREEN_COMBO 523</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>EE04 + 7.5 インチ モノクロ ePaper</td>
      <td><code>#define BOARD_SCREEN_COMBO 502</code><br/><code>#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>その他の EE0x / 画面の組み合わせ</td>
      <td>ボードと画面ごとに生成</td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
  </table>
</div>

:::caution
ePaper ボード、ディスプレイサイズ、ディスプレイのカラータイプ、またはドライバボードを変更した場合は、必ず `driver.h` を再生成してください。不一致の `BOARD_SCREEN_COMBO` は、画面が真っ黒（何も表示されない）になる最も一般的な原因の 1 つです。
:::

最終的に、PlatformIO を使用する完成したスクリーン製品向けのコードとプロジェクトフレームワークは、次のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/249.png" style={{width:1000, height:'auto'}}/></div>


## ステップ 6：ビルド、アップロード、モニタ

`platformio.ini` と `driver.h` の準備ができたら、VS Code の PlatformIO ツールバーを使用します：

<div class="table-center">
  <table align="center">
    <tr>
      <th>アクション</th>
      <th>動作内容</th>
    </tr>
    <tr>
      <td><strong>Build</strong></td>
      <td>選択された環境をコンパイルし、ボード、フレームワーク、ライブラリ、およびコードの互換性をチェックします。</td>
    </tr>
    <tr>
      <td><strong>Upload</strong></td>
      <td>選択されたアップロードプロトコルを通じて、接続されたデバイスにファームウェアをアップロードします。</td>
    </tr>
    <tr>
      <td><strong>Monitor</strong></td>
      <td><code>monitor_speed</code> のボーレートを使用してシリアルモニタを開きます。</td>
    </tr>
    <tr>
      <td><strong>Clean</strong></td>
      <td>以前のビルド出力を削除します。ボードパッケージ、PSRAM 設定、または主要なビルドフラグを変更した後に使用します。</td>
    </tr>
  </table>
</div>

プロジェクトに複数の環境がある場合は、ビルドまたはアップロードを行う前に、PlatformIO プロジェクトタスクからターゲット環境を選択してください。

## オプション：Seeed_GxEPD2 ライブラリを使用する

このページのデフォルトのサンプルは `Seeed_GFX` を使用しています。GxEPD2 ディスプレイワークフローに基づくプロジェクトでは、ディスプレイライブラリの依存関係を Seeed の GxEPD2 フォークに置き換えることができます。

このオプションは、プロジェクトコードが `Seeed_GxEPD2` / `GxEPD2` API 向けに書かれている場合にのみ使用してください。コードが標準の `Seeed_GFX` サンプルに従っている場合は、`lib_deps` に `Seeed_GFX` を残してください。

例えば、reTerminal E1001 の設定は次のように変更できます：

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Projects/Seeed_GxEPD2
```

ここでは設定を分かりやすくするために、ディスプレイライブラリを 1 つだけ示しています。プロジェクトで追加のライブラリが必要な場合は、`lib_deps` の下に別行として追加してください。

## 次のステップ

このページは意図的に PlatformIO の環境設定に焦点を当てています。配線、画面の選択、ファームウェアの挙動については、製品固有のページを続けて参照してください：

- [Work with Arduino](/ja/epaper_work_with_arduino) — 一般的な Arduino と `Seeed_GFX` のワークフロー。
- [XIAO ePaper Driver Boards PlatformIO Cookbook](/ja/ee04_with_platformio) — EE04 を実行例とした EE0x の PlatformIO ワークフロー。
- [reTerminal E Series Arduino cookbook](/ja/reterminal_e10xx_with_arduino) — E1001 / E1002 / E1003 / E1004 向けのディスプレイサンプル。
- [reTerminal E Series onboard peripherals cookbook](/ja/reterminal_e10xx_with_arduino_peripherals) — ボタン、ブザー、バッテリーモニタ、SHT4x センサ、microSD のサンプル。
- [XIAO 7.5" ePaper Panel Arduino guide](/ja/xiao_075inch_epaper_panel_arduino) — XIAO ESP32-C3 ベースパネル向けの製品固有セットアップ。
- [TRMNL DIY Kit Arduino guide](/ja/ogdiy_kit_works_with_arduino) — TRMNL キットハードウェア向けのカスタム Arduino ファームウェア手順。

## よくある問題

### Q1: なぜ PlatformIO のボード一覧に Seeed ボードが表示されないのですか？

多くの Seeed 開発ボードでは、これは想定された動作です。このガイドで使用しているボード定義は Seeed の PlatformIO プラットフォームパッケージに含まれているため、そのパッケージをインストールする前は、PlatformIO のデフォルトの **New Project** ボード検索には表示されない場合があります。

`platformio.ini` で Seeed パッケージの URL を直接使用します：

```ini
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
```

次に、`board` をお使いの製品で使用されている Seeed のボード ID に設定します。例えば：

```ini
board = seeed-xiao-esp32-s3-sense
```

最初にビルドするときに、PlatformIO がプラットフォームパッケージをダウンロードし、その後ボード ID を認識します。

### Q2: なぜファームウェアの書き込みは成功するのに ePaper ディスプレイが真っ黒のままなのですか？

最も一般的な原因は、`driver.h` が間違っている、または存在しないことです。

- [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) を使って `driver.h` を再生成します。
- 選択したボードとディスプレイが実際のハードウェアと一致していることを確認します。
- 生成された `BOARD_SCREEN_COMBO` が、`Seeed_GFX` をインクルードしているソースファイルから参照可能であることを確認します。
- 大きなバッファを持つ ESP32-S3 製品の場合、製品クックブックで PSRAM 設定が必要かどうかを確認します。

### Q3: なぜ PlatformIO がボードへの書き込みに失敗するのですか？

reTerminal E1003 の場合、よくある原因はアップロードボーレートが高すぎることです。他の原因を確認する前に、同じ environment ブロック内で `upload_speed` を `115200` に設定してください。

```ini
upload_speed = 115200
```

それでも書き込みに失敗する場合は、次の点を確認してください：

- データ転送に対応した USB-C ケーブルを使用します。
- 他のシリアルデバイスを取り外してから再試行します。
- 自動検出で誤ったポートが選択される場合のみ `upload_port` を設定します。
- ESP32 ベースのボードでは、ボードが自動的にダウンロードモードに入らない場合、USB を接続する間ブートボタンを押し続けます。

## リソース

- **[Docs]** [PlatformIO プロジェクト設定ファイル](https://docs.platformio.org/en/stable/projectconf/index.html)
- **[Docs]** [VS Code 用 PlatformIO IDE](https://docs.platformio.org/en/stable/integration/ide/pioide.html)
- **[GitHub]** [Seeed PlatformIO プラットフォームパッケージ](https://github.com/Seeed-Studio/platform-seeedboards)
- **[GitHub]** [Seeed PlatformIO Arduino Blink サンプル](https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/arduino-blink)
- **[GitHub]** [Seeed_GFX ライブラリ](https://github.com/Seeed-Studio/Seeed_GFX)
- **[Tool]** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)
- **[Wiki]** [Arduino 対応ボード向け PlatformIO](/ja/Software-PlatformIO)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
