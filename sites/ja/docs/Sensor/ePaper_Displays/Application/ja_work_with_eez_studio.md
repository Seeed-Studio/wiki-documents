---
description: Seeed の ePaper 製品向けに EEZ Studio を使って LVGL ベースのプロフェッショナルなインターフェースを設計し、その後 Arduino IDE でデプロイします。reTerminal E シリーズおよび XIAO ePaper Display Board (EE04) の両方で動作します。
title: EEZ Studio を使う
keywords:
  - ePaper ディスプレイ
  - EEZ Studio
  - LVGL
  - reTerminal
  - EE04
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 8
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# EEZ Studio を使う

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

このガイドでは、ビジュアルデザインツール [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/) を使ってプロフェッショナルなユーザーインターフェースを設計し、LVGL コードを生成し、それを Arduino IDE 経由で Seeed の ePaper 製品にデプロイする手順を説明します。フローはサポートされているすべてのボードで共通であり、異なるのはディスプレイ解像度とドライバ設定用の定数だけです。これらの違いはタブで示します。

## 対応ハードウェア

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001 / E1002 / E1003 / E1004</th>
      <th>XIAO ePaper Display Board (ESP32-S3) – EE04</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5インチ モノクロ / 7.3インチ Spectra 6 / 10.3インチ モノクロ / 13.3インチ Spectra 6</td>
      <td align="center">ユニバーサルドライバ — 24ピンまたは 50ピンの Seeed ePaper スクリーンのいずれとも組み合わせ可能</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## EEZ Studio とは？

EEZ Studio は、もともと計測器や組み込み機器向けに構築された、最新のビジュアルプログラミングおよび UI デザイン環境です。ドラッグ＆ドロップによる GUI デザイン、スクリプト、デバイス統合ツールを組み合わせることで、開発者、エンジニア、メイカーが、ゼロから作り直すことなくプロフェッショナルなインターフェースを素早く作成できるようにします。

要するに、EEZ Studio はハードウェアとソフトウェアの橋渡しを行い、ユーザー体験の設計、プロトタイピング、デプロイをより効率的に行えるようにします。

### EEZ Studio を使う理由

- **ビジュアルインターフェース設計** — WYSIWYG エディタで複雑な UI を作成。
- **迅速なプロトタイピング** — デザインアイデアを素早くテストして検証。
- **クロスプラットフォーム** — 複数の OS や組み込みターゲット上で動作するアプリを構築。
- **ハードウェア統合** — 計測器、IoT デバイス、カスタムボードに直接接続。
- **オープンソース** — コミュニティ主導のツールセットで、オプションのプレミアムサポートあり。

### EEZ Studio と SquareLine Studio の比較

どちらも GUI デザインツールですが、対象としているユーザー層が少し異なります。

<table>
    <thead>
        <tr><th>項目</th><th>EEZ Studio</th><th>SquareLine Studio</th></tr>
    </thead>
    <tbody>
        <tr>
            <th>主な用途</th>
            <td>計測器、組み込みシステム、ハードウェア／ソフトウェア統合</td>
            <td>組み込み GUI、特に LVGL を用いたもの</td>
        </tr>
        <tr>
            <th>対象ユーザー</th>
            <td>エンジニア、プロダクト開発者、メイカー、計測器／試験機器の設計者</td>
            <td>組み込み UI 開発者、ホビイスト、IoT プロダクトデザイナー</td>
        </tr>
        <tr>
            <th>ハードウェア統合</th>
            <td>計測器、測定デバイス、自動化機器との直接統合</td>
            <td>UI 生成に特化し、外部デバイス統合は少なめ</td>
        </tr>
        <tr>
            <th>オープンソース</th>
            <td>コミュニティ主導で透明性が高く拡張可能（プレミアムサポートあり）</td>
            <td>クローズドソースの商用製品でライセンス制</td>
        </tr>
        <tr>
            <th>ワークフロー</th>
            <td>1つの環境から実機デバイスのプロトタイピング、シミュレーション、制御を実行</td>
            <td>主に、組み込みプロジェクトに組み込むための UI コードを生成</td>
        </tr>
    </tbody>
</table>

## ステップ 1: EEZ Studio をインストールする

[公式サイト](https://www.envox.eu/studio/studio-introduction/)から、お使いのオペレーティングシステム向けの EEZ Studio をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## ステップ 2: LVGL プロジェクトを作成する

EEZ Studio の画面上部で **CREATE** をクリックします。左側で **LVGL** テンプレートを選択します。

- **Name** — プロジェクト名を付けます（この記事では `EEZ_UI` を使用します）。
- **LVGL Version** — ドロップダウンから `9.x` を選択します。
- **Location** — プロジェクトファイルの保存先を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### プロジェクト設定

ツールバーの ⚙️ アイコンをクリックして Project Settings を開きます。

**General → Build** の下で次を設定します。

- **LVGL include**: 生成されたコードがビルド時に正しく LVGL を参照できるように、`lvgl.h` と入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

**General → Display** の下で、**使用するハードウェアに合わせて**解像度を設定します。

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(E1001 の 7.5インチ モノクロと E1002 の 7.3インチ Spectra 6 は、どちらも 800×480 の解像度を共有しています。)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- **Display width**: 648
- **Display height**: 480

(値は、EE04 に接続している Seeed ePaper スクリーンに合わせてください。以下の例では、5.83インチ 648×480 モノクロスクリーンを使用しています。)

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

## ステップ 3: UI をデザインする

UI デザインはユーザー体験を直接左右します。EEZ Studio では、コンポーネントをドラッグ＆ドロップし、**Styles**、**Fonts**、**Bitmaps**、**Themes**、**Groups** を使って見た目を制御することで、インターフェースを素早く組み立てることができます。

おすすめのオンラインリソース：

- [Coolors](https://coolors.co/) — カラーパレットジェネレーター
- [PeisekA](https://peiseka.com/) — カラーチャート
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) — アイコンライブラリ
- [Google Fonts](https://fonts.google.com/) — 無料フォント

右側のサイドバー：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- **Styles** — インターフェース要素を統一・再利用するための視覚属性。
- **Bitmaps** — 背景、アイコン、ロゴ。
- **Fonts** — テキスト描画と多言語対応。
- **Themes** — ライト／ダークなどのトップレベルスタイル。
- **Groups** — レイアウト補助。

### レイアウト例（Hello World + Panel + Image + Line + Label）

このチュートリアルでは、次の 5 つのコンポーネントからなるシンプルなホームページを作成します。

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 1.** キャンバスの背景色を変更します — キャンバスを選択し、**Color** にチェックを入れ、16進カラー値を選びます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 2.** **Panel** をキャンバス上にドラッグし、幅と高さを調整して色を選びます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 3.** 右側の **Bitmaps** パネルからビットマップを追加して名前を付け、**Image** ウィジェットをキャンバスにドラッグして、そのビットマップをバインドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** Visualiser グループから **Line** を追加し、その **Points** を設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 5.** **Label** を追加して色を選び、右側の **Fonts** パネルからフォントを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## ステップ 4: コードを生成する

デザインが完了したら、次の操作を行います。

1. **保存** — **OPEN** の横にあるフロッピーディスクアイコンをクリックします。
2. **プレビュー** — **Run** をクリックしてシミュレータを起動し、UI をプレビューします。
3. **コンパイル／ビルド** — ✓ アイコンをクリックしてエラーをチェックし、その後レンチアイコンをクリックして UI コード、画像データ、フォントデータを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

緑色の **Build successful** メッセージが表示されれば、コード生成が成功したことを示します。出力はプロジェクトの **`src/ui`** フォルダに保存されます（必要に応じて `src/EEZ_UI` にリネームしてもかまいません）。

## ステップ 5: Arduino IDE をセットアップする

EEZ Studio の出力を Seeed ePaper デバイスに書き込むには、ESP32 対応の Arduino IDE をセットアップします。

:::tip
Arduino を初めて使用する場合は、まず [Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照してください。
:::

1. [Arduino IDE](https://www.arduino.cc/en/software) を**インストール**します。

   <div class="download_arduino_container" style={{textAlign: 'center'}}>
       <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
         <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
       </a>
   </div><br />

2. **ESP32 ボードサポートを追加**します：**File → Preferences** を開き、**Additional Boards Manager URLs** に次を追加します：

   ```text
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```

3. **ESP32 パッケージをインストール**します：**Tools → Board → Boards Manager** を開き、`esp32` を検索して Espressif Systems パッケージをインストールします。

4. 使用するハードウェアに合わせて**ボードを選択**します：

   <Tabs groupId="eez-hardware">
   <TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3**

   </TabItem>
   <TabItem value="ee04" label="EE04 + 5.83&quot; mono">

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3_PLUS**

   また、**Tools** メニューから **OPI PSRAM** を有効にします。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. デバイスを USB-C で**接続**し、**Tools → Port** から正しいシリアルポートを選択します。

## ステップ 6: Seeed_GFX ライブラリをインストールする

Seeed ディスプレイデバイスを幅広くサポートする Seeed_GFX ライブラリを使用します。

1. GitHub からダウンロードします：

   <div class="github_container" style={{textAlign: 'center'}}>
       <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
       <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong>
       </a>
   </div><br />

2. **Sketch → Include Library → Add .ZIP Library** を選択し、ダウンロードした ZIP ファイルを指定します。

   :::note
   以前に `TFT_eSPI` をインストールしている場合は、競合を避けるために Arduino のライブラリフォルダから一時的に削除するか名前を変更してください。`Seeed_GFX` は `TFT_eSPI` をベースに、Seeed ディスプレイ向けの機能を追加したフォークです。
   :::

3. **適切なサンプルスケッチを開きます**：

   - カラー表示の場合：**File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**
   - モノクロ表示の場合：**File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**

4. スケッチと同じフォルダに **`driver.h` ファイルを作成**します（Arduino IDE の新しいタブの矢印から作成します）。

5. [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) を開き、ハードウェアを選択して生成された設定をコピーし、`driver.h` に貼り付けます。内容はハードウェアごとに異なります：

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

**reTerminal E1001**（7.5 インチ白黒、UC8179）の場合：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**reTerminal E1002**（7.3 インチフルカラー、UC8179C）の場合：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

**EE04 + 5.83 インチ モノクロ（UC8179）**の場合：

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

EE04 で別の画面サイズに交換した場合は、設定ツールから `driver.h` を再生成し、`USE_XIAO_EPAPER_DISPLAY_BOARD_EE04` の行は残しておいてください。

:::tip
誤った組み合わせを選択すると画面には何も表示されません。画面とドライバボードの組み合わせをもう一度確認してください。
:::

</TabItem>
</Tabs>

## ステップ 7: EEZ Studio プロジェクトを Arduino に書き込む

EEZ Studio の出力とプラットフォーム用ドライバヘルパーをスケッチフォルダに追加し、アップロードします。

### 必要なドライバファイル（全ハードウェア共通）

次のヘルパーファイルをダウンロードし、`.ino` と同じ場所に配置します：

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

EE04 の場合は、さらに `lv_conf.h` と LVGL ライブラリが必要です — 下の EE04 タブを参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

### EEZ_UI 出力をコピーする

生成された `EEZ_UI` フォルダ（EEZ Studio プロジェクトの `src/` 内）を Arduino のライブラリフォルダ（通常は `~/Documents/Arduino/Libraries`）にコピーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

### スケッチとアップロード

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

リファレンススケッチ — 3 つのボタン（KEY0/KEY1/KEY2）で 3 つのページ **HOME**、**Workstation**、**Plant** を順番に切り替えます。

完全なリファレンスコード： [E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY0 = 3;
const int BUTTON_KEY1 = 4;
const int BUTTON_KEY2 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

e1002_driver_t e1002_driver;

void setup()
{
    String LVGL_Arduino = "Automotive Dashboard Demo - LVGL ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() +
                    "." + lv_version_patch();
    Serial.begin(115200);
    Serial.println(LVGL_Arduino);
    Serial.println("Initializing 6-color e-paper display...");
    e1002_display_init(&e1002_driver);

    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    lastKey0State = digitalRead(BUTTON_KEY0);
    lastKey1State = digitalRead(BUTTON_KEY1);
    lastKey2State = digitalRead(BUTTON_KEY2);

    ui_init();
    page_index = SCREEN_ID_HOME;
    loadScreen((ScreensEnum)page_index);
    Serial.println("Boot: Main Screen");
}

void loop()
{
    lv_timer_handler();
    ui_tick();
    delay(50);

    bool currentKey0State = digitalRead(BUTTON_KEY0);
    bool currentKey1State = digitalRead(BUTTON_KEY1);
    bool currentKey2State = digitalRead(BUTTON_KEY2);

    if (lastKey0State == HIGH && currentKey0State == LOW) {
        page_index = SCREEN_ID_HOME;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Main Screen");
        delay(50);
    }

    if (lastKey1State == HIGH && currentKey1State == LOW) {
        page_index = SCREEN_ID_WORKSTATION;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Plant Screen");
        delay(50);
    }

    if (lastKey2State == HIGH && currentKey2State == LOW) {
        page_index = SCREEN_ID_PLANT;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Setting Screen");
        delay(50);
    }

    lastKey0State = currentKey0State;
    lastKey1State = currentKey1State;
    lastKey2State = currentKey2State;

    if (e1002_display_should_refresh(&e1002_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1002_display_refresh(&e1002_driver);
        Serial.println("Display refresh complete");
    }

    delay(10);
}
```

注意事項：

- `e1002_display_init()` は電子ペーパーディスプレイのハードウェアを初期化します。
- `pinMode(..., INPUT_PULLUP)` はボタンピンを内部プルアップ付き入力として設定します。
- `ui_init()` と `loadScreen()` は LVGL を初期化し、特定の画面を読み込みます。
- `lv_timer_handler()` は LVGL のタイマーとアニメーションを処理します。
- `if (lastKeyXState == HIGH && currentKeyXState == LOW)` ブロックは HIGH→LOW エッジをデバウンスし、ページを更新します。
- `e1002_display_should_refresh()` / `e1002_display_refresh()` は電子ペーパーのリフレッシュをオンデマンドで制御します。

#### 表示される画面

<div class="table-center">
  <table align="center">
    <tr>
      <th>ホームページ</th>
      <th>ワークステーションページ</th>
      <th>フォトページ</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

EE04 では、次のファイルも必要です：

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- Arduino IDE にインストールされた LVGL ライブラリ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

生成された **EEZ_UI** フォルダを `~/Documents/Arduino/Libraries` にコピーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

リファレンススケッチ — 3 つのオンボードボタン（KEY1/KEY2/KEY3 = ピン 2 / 3 / 5）で 3 つのページ **Smart**、**Industry**、**Game** を切り替えます。

完全なリファレンスコード: [EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY1 = 2;
const int BUTTON_KEY2 = 3;
const int BUTTON_KEY3 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

unsigned long lastDebounceTime0 = 0;
unsigned long lastDebounceTime1 = 0;
unsigned long lastDebounceTime2 = 0;
const unsigned long debounceDelay = 120;

e1002_driver_t e1002_driver;

unsigned long lastFullRefreshTime = 0;
const unsigned long fullRefreshCooldown = 1500;

bool buttonPressed(int pin, bool &lastState, unsigned long &lastDebounceTime)
{
  bool currentState = digitalRead(pin);

  if (lastState == HIGH && currentState == LOW &&
      (millis() - lastDebounceTime) > debounceDelay)
  {
    lastDebounceTime = millis();
    lastState = currentState;
    return true;
  }

  lastState = currentState;
  return false;
}

void switchPage(ScreensEnum targetScreen, const char *pageName)
{
  if (millis() - lastFullRefreshTime < fullRefreshCooldown)
  {
    Serial.println("[Skip] Refresh cooling down...");
    return;
  }

  Serial.printf("Switching to %s ...\n", pageName);

  e1002_driver.epd->fillScreen(TFT_WHITE);
  e1002_driver.epd->update();

  loadScreen(targetScreen);

  e1002_display_refresh(&e1002_driver);

  lastFullRefreshTime = millis();
  Serial.printf("[OK] %s refreshed.\n", pageName);
}

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "Smart Home Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);
  pinMode(BUTTON_KEY3, INPUT_PULLUP);

  ui_init();
  page_index = SCREEN_ID_SMART;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

  Serial.println("Boot: Main Screen");
}

void loop()
{
  lv_timer_handler();
  ui_tick();

  if (buttonPressed(BUTTON_KEY1, lastKey0State, lastDebounceTime0))
  {
    page_index = SCREEN_ID_SMART;
    switchPage((ScreensEnum)page_index, "Main Screen");
  }

  if (buttonPressed(BUTTON_KEY2, lastKey1State, lastDebounceTime1))
  {
    page_index = SCREEN_ID_INDUSTRY;
    switchPage((ScreensEnum)page_index, "Plant Screen");
  }

  if (buttonPressed(BUTTON_KEY3, lastKey2State, lastDebounceTime2))
  {
    page_index = SCREEN_ID_GAME;
    switchPage((ScreensEnum)page_index, "Workstation Screen");
  }

  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

#### 結果画面

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>
</div>

</TabItem>
</Tabs>

## リファレンス & リソース

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)
- [リファレンスプロジェクト — E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- [リファレンスプロジェクト — EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)
- 5.83 インチ用 3D エンクロージャ — [front](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step) / [back](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

</TabItem>
</Tabs>

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
