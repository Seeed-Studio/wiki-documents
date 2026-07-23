---
description: PlatformIO、Seeed_GFX、LVGL を使って、Seeed reTerminal E シリーズの ePaper デバイス上にシンプルな LVGL ステータスパネルを構築します。
title: LVGL を使う
keywords:
  - ePaper ディスプレイ
  - LVGL
  - Seeed_GFX
  - PlatformIO
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_lvgl
sidebar_position: 6
last_update:
  date: 06/30/2026
  author: Citric
createdAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/epaper_work_with_lvgl/
updatedAt: '2026-07-08'
---

# LVGL を使う

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/262.jpg" style={{width:1000, height:'auto'}}/></div>

LVGL は、組み込みデバイス向けのオープンソースグラフィックスライブラリです。ラベル、パネル、バー、レイアウトツールなどの UI コンポーネントがあらかじめ用意されており、すべてのピクセルを手作業で描画することなく、C/C++ で構造化されたインターフェースを構築できます。

このガイドでは、PlatformIO を使ってシンプルな **LVGL ePaper ステータスパネル** を作成します。サンプルでは **reTerminal E1001** をデフォルトターゲットとして使用し、reTerminal E1002、E1003、E1004 用には個別の PlatformIO 環境を用意しています。

このプロジェクトでは、次の要素を持つ静的なダッシュボードを描画します：

- タイトル
- デバイスステータスカード
- ネットワークステータスカード
- デモ用バッテリーカード

ePaper ディスプレイでは、表示されている情報が変化したときだけ画面をリフレッシュすればよいため、このような静的 UI のワークフローは良い出発点になります。

:::tip 開発環境を用意せずにデモを試す
開発環境をセットアップする前に、プロジェクトの結果をすばやくプレビューしたり、基本的なデモファームウェアを試したい場合は、**[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** を開いてください。対応する reTerminal E シリーズデバイスを選択し、ブラウザから直接デモファームウェアを書き込むことができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

## 対応ハードウェア

次の reTerminal E シリーズデバイスのいずれかを用意してください。このガイドの PlatformIO プロジェクトでは、デフォルト環境として **reTerminal E1001** を使用します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5インチ モノクロ ePaper<br/>800 x 480</td>
      <td align="center">7.3インチ Spectra 6 色 ePaper<br/>800 x 480</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10.3インチ モノクロ ePaper<br/>1872 x 1404</td>
      <td align="center">13.3インチ Spectra 6 色 ePaper<br/>1200 x 1600</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## プロジェクトの仕組み

このサンプルは、主に次の 2 つの部分で構成されています：

- **LVGL** がラベル、カード、バーなどの UI オブジェクトを作成します。
- **Seeed_GFX** が ePaper ディスプレイを初期化し、レンダリングされたピクセルを受け取り、物理パネルをリフレッシュします。

プロジェクトでは、これら 2 つの部分を別々のファイルに分けています：

<div class="table-center">
  <table align="center">
    <tr>
      <th>ファイル</th>
      <th>目的</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>PlatformIO のボード、ライブラリ、ビルドフラグ、およびハードウェア環境を定義します。</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>アクティブなハードウェアターゲットに対して正しい Seeed_GFX ドライバファイルを選択します。</td>
    </tr>
    <tr>
      <td><code>include/driver_e1001.h</code> から <code>include/driver_e1004.h</code> まで</td>
      <td>各 reTerminal E シリーズモデルに対する Seeed_GFX のボードとスクリーンの組み合わせを保持します。</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>LVGL の機能、カラーデプス、フォントを設定します。</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Arduino、Seeed_GFX、LVGL、ディスプレイバッファ、および ePaper のリフレッシュフローを初期化します。</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>LVGL ステータスパネルのレイアウトを作成します。</td>
    </tr>
  </table>
</div>

## ステップ 1: PlatformIO をインストールする

このガイドでは、プロジェクトのワークフローとして PlatformIO を使用します。PlatformIO は、ボード設定、ライブラリ、ソースファイルを 1 つのフォルダにまとめて管理できるため、LVGL プロジェクトのビルドと保守が容易になります。

まだ PlatformIO をインストールしていない場合は、[Work with PlatformIO](/ja/epaper_work_with_platformio) の手順に従ってセットアップし、その後このガイドに戻ってください。

インストール後、**Visual Studio Code** を開きます。左側のアクティビティバーに PlatformIO のアイコンが表示されているはずです。

## ステップ 2: サンプルプロジェクトをダウンロードする

LVGL ePaper ステータスパネルのサンプルは、公式の reTerminal E シリーズリポジトリで提供されています：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong>
    </a>
</div><br />

リポジトリをコンピュータにダウンロードし、次のフォルダを開きます：

```text
OSHW-reTerminal-Series-E-D/examples/official/LVGLePaperStatusPanel
```

サンプルプロジェクトには、主に次のファイルが含まれています：

<div class="table-center">
  <table align="center">
    <tr>
      <th>ファイル</th>
      <th>役割</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>E1001、E1002、E1003、E1004 用の PlatformIO 環境を定義します。</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>アクティブなビルド環境に対して正しい ePaper ドライバ設定を選択します。</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>このデモで使用する LVGL の機能とフォントを設定します。</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>ディスプレイ、LVGL、レンダリングバッファ、および ePaper のリフレッシュフローを初期化します。</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>ePaper ディスプレイに表示されるステータスパネル UI を作成します。</td>
    </tr>
  </table>
</div>

## ステップ 3: PlatformIO でプロジェクトを開く

**ステップ 1.** **Visual Studio Code** を開きます。

**ステップ 2.** 左側のアクティビティバーで **PlatformIO** アイコンをクリックします。

**ステップ 3.** **PIO Home > Open** をクリックします。

**ステップ 4.** **Open Project** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/263.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 5.** `LVGLePaperStatusPanel` フォルダを選択します。

**ステップ 6.** PlatformIO がプロジェクトを読み込み、必要なライブラリをインストールするまで待ちます。

## ステップ 4: ハードウェア環境を選択する

プロジェクトルートの `platformio.ini` を開きます。デフォルト環境は `reterminal_e1001` です。

```ini
[platformio]
default_envs = reterminal_e1001
```

E1001 の場合は、デフォルト設定のままで構いません。その他のデバイスでは、`default_envs` を対応する環境に変更します：

<div class="table-center">
  <table align="center">
    <tr>
      <th>デバイス</th>
      <th>PlatformIO 環境</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>reterminal_e1001</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>reterminal_e1002</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>reterminal_e1003</code></td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>reterminal_e1004</code></td>
    </tr>
  </table>
</div>

また、`default_envs` を変更せずに、PlatformIO のターミナルから特定の環境をビルドすることもできます。

## ステップ 5: デモをビルドして書き込む

USB ケーブルで reTerminal E シリーズデバイスをコンピュータに接続します。

デフォルトの E1001 用ファームウェアをビルドするには、次を実行します：

```bash
pio run
```

特定のターゲットをビルドするには、`-e` と環境名を追加します。例えば：

```bash
pio run -e reterminal_e1001
```

ファームウェアをデバイスに書き込むには、次を実行します：

```bash
pio run -e reterminal_e1001 --target upload
```

書き込み後、シリアルモニタを開きます：

```bash
pio device monitor -b 115200
```

デモが正しく起動すると、シリアルモニタには次のように表示されます：

```text
Seeed ePaper LVGL status panel starting.
LVGL status panel rendered.
```

ePaper ディスプレイが 1 回リフレッシュされ、LVGL ステータスパネルが表示されます。

## ステップ 6: LVGL UI をカスタマイズして学ぶ

デモが正常に動作したら、小さな LVGL 学習プロジェクトとして修正を始めることができます。最も重要なファイルは次の 2 つです：

<div class="table-center">
  <table align="center">
    <tr>
      <th>File</th>
      <th>このようにしたいときはここから始める</th>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>デバイスステータス、ネットワークステータス、バッテリー残量など、UI に渡す値を変更します。</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>画面タイトル、カードレイアウト、フォント、色、ラベル、LVGL ウィジェットを変更します。</td>
    </tr>
  </table>
</div>

### 表示される値を変更する

`src/main.cpp` を開き、`setup()` 内の次の行を探します：

```cpp
ui_status_panel_set_status("Ready", "Wi-Fi Standby", 76);
```

この関数は、画面上の 3 つの動的な値を更新します：

<div class="table-center">
  <table align="center">
    <tr>
      <th>Parameter</th>
      <th>意味</th>
      <th>例</th>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td>Device カードに表示されるデバイスステータスのテキスト。</td>
      <td><code>"Ready"</code></td>
    </tr>
    <tr>
      <td><code>network</code></td>
      <td>Network カードに表示されるネットワークステータスのテキスト。</td>
      <td><code>"Wi-Fi Standby"</code></td>
    </tr>
    <tr>
      <td><code>battery_percent</code></td>
      <td>バッテリーバーの値。この関数は 0 から 100 の範囲に収まるようにします。</td>
      <td><code>76</code></td>
    </tr>
  </table>
</div>

例えば、次のように変更します：

```cpp
ui_status_panel_set_status("Online", "Wi-Fi Connected", 95);
```

その後、もう一度プロジェクトをビルドしてアップロードします：

```bash
pio run -e reterminal_e1001 --target upload
```

### タイトルとカード名を変更する

`src/ui_status_panel.cpp` を開きます。メインタイトルは `ui_status_panel_create()` 内で作成されています：

```cpp
lv_label_set_text(title, "Seeed ePaper LVGL Panel");
```

タイトルテキストを変更できます：

```cpp
lv_label_set_text(title, "My First LVGL Dashboard");
```

各カードは `create_card()` で作成されます。例えば：

```cpp
lv_obj_t *status_card = create_card(screen, "Device", status_x, status_y, status_w, status_h, lv_palette_main(LV_PALETTE_RED));
lv_obj_t *network_card = create_card(screen, "Network", network_x, network_y, network_w, network_h, lv_palette_main(LV_PALETTE_BLUE));
lv_obj_t *battery_card = create_card(screen, "Battery Demo", battery_x, battery_y, battery_w, battery_h, lv_palette_main(LV_PALETTE_GREEN));
```

2 番目のパラメータはカードタイトルです。`"Device"`、`"Network"`、`"Battery Demo"` を自分のアプリケーションに合わせて変更できます。

### 色を変更する

このデモは LVGL のパレットカラーを使用しています：

```cpp
lv_palette_main(LV_PALETTE_RED)
lv_palette_main(LV_PALETTE_BLUE)
lv_palette_main(LV_PALETTE_GREEN)
```

reTerminal E1002 や reTerminal E1004 などのカラー ePaper モデルでは、`src/main.cpp` が LVGL の色を ePaper のカラーパレットにマッピングします。サンプルパレットには、白、黒、赤、黄、緑、青が含まれます。

reTerminal E1001 や reTerminal E1003 などのモノクロ ePaper モデルでは、同じ UI が明るさに基づいて白黒に変換されます。暗い色は黒に、明るい色は白になります。

つまり、4 つすべてのデバイスで同じ LVGL UI コードを使用でき、ディスプレイドライバが選択されたハードウェアに合わせて最終的なピクセルを変換します。

### レイアウトを変更する

このデモは、画面サイズを決定するために `platformio.ini` の `EPAPER_LVGL_HOR_RES` と `EPAPER_LVGL_VER_RES` を使用します。`src/ui_status_panel.cpp` では、これらの値は次の箇所で使用されています：

```cpp
const int32_t screen_width = EPAPER_LVGL_HOR_RES;
const int32_t screen_height = EPAPER_LVGL_VER_RES;
const bool is_landscape = screen_width >= screen_height;
```

その後、レイアウトは、より横長の画面には横向きレイアウトを、より縦長の画面には縦向きレイアウトを選択します。このため、同じサンプルが 800 x 480 デバイスと、より大きな ePaper パネルの両方で動作します。

最初の簡単な変更として、スペーシングの値を調整してみましょう：

```cpp
const int32_t margin = max_i32(32, screen_width / 20);
const int32_t gap = max_i32(20, screen_width / 40);
```

`margin` を大きくすると、画面の端の周りにより多くの余白ができます。`gap` を大きくすると、カード同士の間隔が広くなります。

### 独自のデータを追加する

このデモのバッテリー値はサンプル UI データであり、画面にはデモ値として表示されます。実際のアプリケーションデータに接続するには、UI 関数をそのままにして、自分の値を渡します：

```cpp
int battery_percent = 88;
ui_status_panel_set_status("Running", "Wi-Fi Connected", battery_percent);
```

ePaper プロジェクトでは、実用的なワークフローは次のとおりです：

**ステップ 1.** アプリケーション内で最新のデータを読み取るか計算します。

**ステップ 2.** 新しい値を `ui_status_panel_set_status()` に渡します。

**ステップ 3.** コンテンツを変更する必要があるときに ePaper ディスプレイをリフレッシュします。

このデモは画面コンテンツが静的なため、`setup()` 内で 1 回だけ描画します。センサーダッシュボード、カレンダー、ステータスモニタなどのアプリケーションでは、表示されるデータが変化したときに値を更新し、パネルをリフレッシュできます。

## リソース

- **[Docs]** [LVGL ドキュメント](https://docs.lvgl.io/)
- **[GitHub]** [LVGL](https://github.com/lvgl/lvgl)
- **[GitHub]** [Seeed_GFX ライブラリ](https://github.com/Seeed-Studio/Seeed_GFX)
- **[GitHub]** [LVGL ePaper ステータスパネルサンプル](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel)
- **[Tool]** [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)
- **[Wiki]** [PlatformIO を使う](/ja/epaper_work_with_platformio)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
    <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
    <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>
  <div class="button_tech_support_container">
    <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
