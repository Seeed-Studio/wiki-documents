---
description: EEZ Studio を使用した EE04 ePaper ディスプレイ
title: EEZ Studio を使用した EE04 ePaper ディスプレイボード（ESP32-S3）
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
sidebar_position: 1
slug: /ja/epaper_ee04_eezstudio
last_update:
  date: 09/28/2025
  author: Zeller
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:600, height:'auto'}}/></div>

このチュートリアルでは、XIAO ePaper ディスプレイボード（ESP32-S3）- EE04 を使用し、EEZ Studio をベースとして Arduino IDE でプログラムをコンパイルしてアップロードします。

## [EEZ Studio](https://www.envox.eu/studio/studio-introduction/)

EEZ Studio は、魅力的な GUI の迅速な開発と、テスト・測定（T&M）自動化のためのデバイスのリモート制御の両方が必要な場合のユニークなソリューションを提供します。

リソース制約のある[複雑な](https://www.envox.eu/eez-bb3)組み込みデバイスの設計における第一線の経験を持つチームによって作成された EEZ Studio は、**ドラッグ**&**ドロップ**とフローチャートビジュアルプログラミングを使用して、レスポンシブなデスクトップおよび組み込み GUI の設計を可能にします。社内開発されたウィジェットとアクションのシリーズ、[LVGL](https://github.com/lvgl/lvgl) サポート（8.x と 9.x の両方）、そして即座に使用可能なプロジェクトテンプレートと例により、迅速なプロトタイピングと最終アプリケーションの開発を可能にします。

### ハードウェア

このチュートリアルを読み始める前に、以下にリストされた必要なアイテムがすべて準備されていることを確認してください。

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper ディスプレイボード（ESP32-S3）- EE04</th>
        <th>5.83 インチモノクロ ePaper</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_Pre_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### プロジェクトの作成

上部で **Create** を選択し、**LVGL** をクリックして、隣接する **PROJECT SETTING** セクションで必要なパラメータを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name：プロジェクト名
- LVGL version：バージョン 9.x を選択
- Location：エンジニアリングファイルを保存する場所は、デフォルトパスに設定するか、実際の要件に応じてカスタマイズできます。
- Project file path：エンジニアリングファイルのパス。このパスは後で使用されます（このパスはコンピュータのデフォルトパスです。パスをカスタマイズすることもできます）

### エンジニアリングページの紹介

以下は、EEZ Studio での LVGL ベースの UI 描画のための基本設定とコントロール、およびプロジェクトファイルの構築についてです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_3.png" style={{width:800, height:'auto'}}/></div>

- 上部（左から右へ）：

  - Save：プロジェクトを保存

  - Check：プロジェクトをチェック

  - Build：プロジェクトをビルドしてファイルを生成

  - Settings：パラメータ設定を変更

  - Edit：メインページで編集と描画

  - Run：作成したデザインの描画効果をプレビュー

  - Debug：描画したインターフェースをデバッグ

- Pages：ページを管理。**+** をクリックして新しいページを追加

- Widgets Structure：ウィジェット管理。ウィジェットを直感的に管理および選択できます

- Variables：UI ウィジェット、Flow ロジック、Action Script を接続するコアデータ管理メカニズム

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_2.png" style={{width:800, height:'auto'}}/></div>

- Properties：オブジェクトまたはコンポーネントのプロパティパラメータを設定および表示するために使用

- Components Palette：オプションのコンポーネントのリストを提供し、デザインインターフェースにドラッグアンドドロップして使用できます

- Styles：統一フォントのスタイルルールを定義および適用して一貫性を保持

- Fonts：プロジェクトで使用されるフォントリソースとそのサイズ設定を管理

- Bitmaps：画像やアイコンなどのビットマップリソースファイルをインポートおよび管理

- Themes：統一されたカラーテーマとビジュアルスタイルスイートを作成および適用

- Groups：複数のコンポーネントを組み合わせて管理し、同時操作とバッチ制御を可能にします

### プロジェクトファイルの構築

このプロジェクトは、**解像度 648*480 の 5.83 インチモノクロ eInk ディスプレイ**用に設計されています。したがって、いくつかの重要なパラメータを変更する必要があります。

**ステップ 1.** **Settings** を選択し、**General** タブで **Display width** と **Display height** をそれぞれ 648 と 480 に変更します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_1.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** 生成されたファイルを変更

- フォルダパス **src/ui** を **src/EEZ_UI** に名前変更します。EEZ Studio によって生成されたすべてのコードファイルはこのフォルダに保存されます。

- **Build** タブで、**LVGL include** を **lvgl.h** に変更します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_2.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** プロジェクトをビルド

- **Main** インターフェースに戻り、**Hello World** を画面の中央にドラッグします。
- **STYLE** タブで、フォントサイズまたは色を調整します。
- プロジェクトをビルドするオプションを選択します。**OUTPUT** パネルにエラーが表示されなければ、プロジェクトは正常にビルドされています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_3.png" style={{width:800, height:'auto'}}/></div>

次に、ビルドされたプロジェクトファイルを **Arduino IDE** にデプロイし、対応するハードウェアデバイスにアップロードして表示します。

### Arduino IDE のセットアップ

:::tip
Arduino を初めて使用する場合は、[Arduino 入門ガイド](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

**ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/software) をダウンロードしてインストールし、Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div><br />

**ステップ 2.** Arduino IDE に ESP32 ボードサポートを追加します。

Arduino IDE で、**File > Preferences** に移動し、**Additional Boards Manager URLs** フィールドに以下の URL を追加します：

```js
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**ステップ 3.** ESP32 ボードパッケージをインストールします。

**Tools > Board > Boards Manager** に移動し、**esp32** を検索して、Espressif Systems による ESP32 パッケージをインストールします。

**ステップ 4.** 正しいボードを選択します。

**Tools > Board > ESP32 Arduino** に移動し、**XIAO_ESP32S3_PLUS** を選択します。

**ステップ 5.** reTerminal E Series ePaper ディスプレイを USB-C ケーブルでコンピュータに接続します。

**ステップ 6.** **Tools > Port** から正しいポートを選択します。

### Seeed_GFX ライブラリのインポート

様々な Seeed Studio ディスプレイデバイスに対する包括的なサポートを提供する Seeed_GFX ライブラリを使用します。

**ステップ 1.** GitHub から Seeed_GFX ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 2.** Arduino IDE で ZIP ファイルを追加してライブラリをインストールします。**Sketch > Include Library > Add .ZIP Library** に移動し、ダウンロードした ZIP ファイルを選択します。

:::tip
以前に TFT_eSPI ライブラリをインストールしている場合、競合を避けるために Arduino ライブラリフォルダから一時的に削除または名前変更する必要があるかもしれません。Seeed_GFX は Seeed Studio ディスプレイ用の追加機能を持つ TFT_eSPI のフォークです。
:::

**ステップ 3.** Seeed_GFX ライブラリからカラーサンプルスケッチを開きます：**File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**ステップ 4.** 新しい `driver.h` ファイルを作成

[Seeed GFX 設定ツール](https://seeed-studio.github.io/Seeed_GFX/)

- ツールページで使用しているディスプレイの仕様を入力します。ここでは、選択されたディスプレイは **5.83 インチモノクロ ePaper スクリーン（UC8179）** で、ドライバーボードは **XIAO ePaper ディスプレイボード（ESP32-S3）- EE04** です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

- プログラムをコピーして `driver.h` に保存します。

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
間違った選択をすると、画面に何も表示されません。
デバイスやコンポーネントのタイプを必ず確認してください。
:::

### Arduino への展開

**ステップ 1.** ファイル `e1002_display.c`、`e1002_display.h`、`lv_conf.h`、および lvgl ライブラリを追加します。ボードは XIAO_ESP32S3 を選択してください。

- [関連ファイルを取得するにはクリック](https://wiki.seeedstudio.com/ja/epaper_ee04_eezstudio/#reference--resources)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** 生成された EEZ_UI コードファイルをライブラリフォルダに追加します（Arduino IDE ライブラリのデフォルト保存パスは `C:\Users\Users_name\Documents\Arduino\Libraries` です）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** プログラムをデバイスにアップロードします。

<details>

<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

int32_t page_index;

e1002_driver_t e1002_driver;

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "UI Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  ui_init();
  page_index = SCREEN_ID_MAIN;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

}

void loop()
{
  lv_timer_handler();
  ui_tick();


  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

# コード解説  

1. **ヘッダーファイルのインクルード**: TFT ディスプレイライブラリ、LVGL グラフィックスライブラリ、UI インターフェース定義ファイル（`ui.h`）、および電子ペーパーディスプレイドライバー（`e1002_display.h`）をインクルードします。  

2. **グローバル変数**:  
   - `page_index`: 現在表示されているページのインデックスを記録するために使用されます。  
   - `e1002_driver`: 電子ペーパーディスプレイのドライバーオブジェクトです。  

3. **setup() 関数（初期化）**:  
   - シリアル通信を初期化します（ボーレート: 115200）デバッグ情報を出力するためです。  
   - LVGL ライブラリのバージョン情報を出力します（例: "Smart Home Dashboard - LVGL Vx.x.x"）。  
   - 電子ペーパーディスプレイを初期化します（`e1002_display_init`）。  
   - UI インターフェースを初期化します（`ui_init`）。  
   - 初期ページを "Main Screen"（`SCREEN_ID_MAIN`）に設定してロードします。  
   - 電子ペーパーディスプレイをリフレッシュして初期インターフェースを表示します。  

4. **loop() 関数（メインループ）**:  
   - LVGL タイマーとイベントを処理します（`lv_timer_handler`）。  
   - UI インターフェースのスケジュールされたタスクを処理します（`ui_tick`）。  
   - 電子ペーパーディスプレイのリフレッシュが必要かどうかをチェックします（`e1002_display_should_refresh`）。必要な場合はリフレッシュを実行してログを出力します。  
   - システムの応答性を確保するため、10ミリ秒ごとにループします。  

</details>

効果のデモンストレーション:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_3.jpg" style={{width:600, height:'auto'}}/></div>

## UI デザイン  

次に、EEZ Studio で作成した UI の例を紹介し、インターフェースデザインにおけるその機能をさらに説明します。

EEZ Studio で LVGL インターフェースをデザインする際、以下のツールが特に役立つでしょう：

- カラーパレットの作成、調整、エクスポートを素早く行うためのオンラインカラーパレットジェネレーター: [Color](https://coolors.co/)  
- ウェブカラースキームの検索とマッチングのためのオンラインカラーパレットツール: [Color Chart](https://peiseka.com/)  
- アイコンのダウンロードと管理のための大規模ベクターアイコンライブラリプラットフォーム：[Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)  
- 商用利用可能なフォントの閲覧とダウンロードのための無料フォントリソースサイト: [Font](https://fonts.google.com/)  

### UI 描画の紹介  

- 効果画像:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_1_1.png" style={{width:800, height:'auto'}}/></div>  

この UI は4つのコンポーネントで構成されています：

- Label  
- Line  
- Checkbox  
- Image  

**ステップ 1.** キャンバスの背景色を変更  

デフォルトの背景色は白です。お好みに応じて変更できます。  

- 背景色を変更したいキャンバスを選択します。  

- **Color** オプションをチェックし、お好みの16進数カラーコードを選択します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_2_1.png" style={{width:800, height:'auto'}}/></div>  

**ステップ 2.** Label を追加  

- **Label** コンポーネントをキャンバスにドラッグし、希望するフォントサイズと色を選択します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_label_1_2.png" style={{width:800, height:'auto'}}/></div>  

**ステップ 3.** 線を追加  

- **Line** コンポーネントをキャンバスにドラッグし、**Points** セクションで開始点と終了点を設定して線の長さと位置を決定します。参考ポイント: 0,0 0,0 0,0 0,0,648,0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_line_1_2.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** ビットマップを追加  

- 右サイドバーの **Bitmaps** オプションをクリックし、必要な画像を追加します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_1_2.png" style={{width:800, height:'auto'}}/></div>  

- 必要に応じて画像に名前を付けます。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_2_2.png" style={{width:800, height:'auto'}}/></div>  

- **Image** コンポーネントをキャンバスにドラッグ&ドロップし、**Scale** オプションを使用してサイズを設定します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_3_2.png" style={{width:800, height:'auto'}}/></div>  

**ステップ 5.** Checkbox を追加  

- **Checkbox** コンポーネントをキャンバスにドラッグし、内容を入力してから、フォントサイズと色を調整します。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_checkout_1_2.png" style={{width:800, height:'auto'}}/></div>  

### 展開とデモンストレーション  

- 展開  
  - ヘッダーファイルを追加: `driver.h`、`e1002_display.c`、`e1002_display.h`、および `lv_conf.h`。  
  - **EEZ_UI** ファイルを Arduino IDE のライブラリフォルダに追加します。  

完全な参考コード: [EEZ_UI.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)  

<details>
<summary>EEZ_UI_EE04.ino</summary>

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
{0
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

</details>

- 効果デモンストレーション：<br/>
ここでは3つの異なるUIスクリーンが表示され、**XIAO ePaper Display Board (ESP32-S3) – EE04**は3つのオンボードボタンを使用してこれらのスクリーンを切り替えます。各ボタンに対応するスクリーンは以下の通りです：<br/>
KEY1: Smart<br/>
KEY2: Industry<br/>
KEY3: Game

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

## リファレンス & リソース

- ドライバ関連ファイル（クリックしてダウンロード）
  - [e1002_display.c](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
  - [e1002_display.h](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
  - [lv_conf.h](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)

- 5.83"の3Dシェル
  - [前面](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step)
  - [背面](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
