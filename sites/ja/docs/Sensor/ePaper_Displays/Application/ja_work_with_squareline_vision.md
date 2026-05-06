---
description: この記事では、SquareLine 上で reTerminal E シリーズのペーパーディスプレイ用 UI インターフェースを作成する方法について説明します。
title: SquareLine Vision を使う
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_5.webp
slug: /reterminal_e10xx_with_squareline_vision
sidebar_position: 4
last_update:
  date: 10/29/2025
  author: Zovey
createdAt: '2025-11-03'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_squareline_vision/
---

# reTerminal E シリーズ ePaper ディスプレイと SquareLine Vision の連携

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:600, height:'auto'}}/></div>

## はじめに

自分だけのインテリジェント端末を作りたいとき、そのデバイスに魅力的で洗練されたユーザーインターフェースを持たせたいと考えるはずです。これを実現できるのが [LVGL](https://lvgl.io/) です。LVGL は、あらゆる MCU、MPU、およびディスプレイタイプ向けに美しい UI を作成できる、最も人気のある無償・オープンソースの組み込みグラフィックスライブラリです。このライブラリを使うことで、多数の美しい組み込みユーザーインターフェースを作成できます。特に、当社の reTerminal E シリーズ ePaper 製品を使用する場合、魅力的なインターフェースは欠かせない要素です。しかし、LVGL ライブラリのコードを書くことは非常に複雑な作業でもあります。そこで本チュートリアルでは、コントロールをドラッグ＆ドロップするだけで UI を描画できるエディタを主に紹介します。WYSIWYG（What You See Is What You Get）方式で作成することで、最終的な表示効果をより正確に把握でき、UI を描き終えた後は LVGL の UI ファイルとしてエクスポートできるため、開発者の開発プロセスを大幅に簡素化できます。このツールの名前は SquareLine Vision で、LVGL 向けのビジュアルフロントエンドツールです。

[SquareLine Vision](https://vision.squareline.io/) は、ブラウザ（Web）または Web 互換環境上で動作する UI 開発環境であり、画面付きデバイスなどの組み込みシステム向けユーザーインターフェース（UI）を素早く設計することに特化しています。
また、**デザイン + コードエクスポート** ツールでもあります。プラットフォーム上でインターフェースをデザインし、そのデザインを組み込みデバイス上で動作させるためのコードやリソースとしてエクスポートできます。 

## SquareLine Vision の特長

- **ビジュアル UI デザイン** – ドラッグ＆ドロップエディタで美しくインタラクティブなインターフェースを視覚的にデザインでき、手作業で LVGL コードを作成する必要がありません。
- **高速な組み込みプロトタイピング** – デスクトップまたはターゲットハードウェア上で UI を即座にプレビューして検証でき、デザインからデバイスまでの反復時間を大幅に短縮します。
- **LVGL ベースのエクスポート** – デザインをシームレスに LVGL ベースのクリーンなソースコードとしてエクスポートでき、組み込みデバイス、マイコン、シミュレーション環境上ですぐにコンパイルして利用できます。

SquareLine Vision を使えば、コンセプト段階からインタラクティブな組み込み UI プロトタイプまでを数分で実現できます。柔軟なデザイン、リアルタイムプレビュー、そして本番利用可能な LVGL 出力を組み合わせることで、製品開発サイクル全体を加速させます。

### 必要なもの

このチュートリアルを完了するには、次の reTerminal E シリーズデバイスのいずれかを用意してください。E1001 はモノクロ、E1002 はフルカラーです。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
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


## [SquareLine Vision](https://vision.squareline.io/) を使い始める

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_7.png" style={{width:600, height:'auto'}}/></div>

### コンポーネントの紹介

SquareLine Vision プラットフォーム全体は、**Launcher** と **アプリケーションインターフェース** の 2 つの部分に分けることができます。
**Launcher** インターフェースでは、次の 3 つの主な機能が確認できます。
- プロジェクト
- インポートの処理
- アカウント設定の管理

UI の作成を始めると、次の 5 つのツールについて学ぶことになります。
- 階層システム
- 画面管理
- スタイル設定オプション
- さまざまなウィジェットタイプ
- イベント、トリガー、アクションの活用方法

プラットフォーム全体の構成とツールを明確に理解しておくことは、個人プロジェクトの制作に大いに役立ちます。次に、reTerminal E1002 をベースにプロジェクトを作成していきます。

## プロジェクトを作成する

### 新しい LVGL プロジェクトを開始する

SquareLine Vision の Launcher 画面上部で、`Create new` ボタンをクリックします。その後、`Seeed Studio` を選択して当社の製品を表示します。`reTerminal E1002` を選択してプロジェクトを作成します。
このプロジェクトの固定設定は次のとおりです。
- `Resolution`: 800x480
- `Offset`: 0(x), 0(y)
- `Rotation`: 0°
- `Shape`: Rectangle
- `Color Depth`: 32 bit
- `LVGL version`: 9.1
- `Theme`: Light

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Launcher_2.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
SenseCAP Watcher と reTerminal E1001 および E1002 デバイスをすでにサポートしています。今後は Seeed Studio のさらに多くの製品にも対応していく予定です。
:::

### 既存の .slvp プロジェクトをインポートする
すでに .slvp ファイルをお持ちの場合は、それをそのままプロジェクトとしてインポートできます。ここでは天気に関連する 2 つのダッシュボードを用意しました。以下から直接ダウンロードできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.png" style={{width:600, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>モノクロ天気</th>
      <th>フルカラー天気</th>
      <th>フルカラー天気 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_3.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 7 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>クリックして入手</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Paper_Weather.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>クリックして入手</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 13 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>クリックして入手</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## プロジェクトパラメータ設定 & UI インターフェースデザイン

エンジニアリングインターフェースに入ると、4 つの主要な領域が表示されます。

- 領域 1 は **Hierarchy** で、主に UI 要素の構造を管理するために使用されます。 
- 領域 2 は **Simulator** で、UI が表示され、各 UI の表示効果を確認するために使用されます。 
- 領域 3 は **Inspector** で、現在選択されている要素を詳細に制御するための設定を提供します。 
- 領域 4 は **Toolbar** で、アプリケーションインターフェースの上部にあり、多くのツールや機能へ簡単にアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_2.png" style={{width:500, height:'auto'}}/></div>

### UI インターフェースデザイン

UI（ユーザーインターフェース）デザインは組み込み製品開発において極めて重要であり、ユーザー体験を直接左右します。見た目が美しく、直感的で、応答性の高いインターフェースは、製品の使いやすさを高めるだけでなく、全体的な魅力も向上させます。

SquareLine Vision では、コンポーネントをドラッグ＆ドロップすることで、インターフェースを素早く組み立てることができます。Styles、Fonts、Bitmaps、Themes などのツールを活用して視覚効果を細かく制御し、プロフェッショナルで個性的なユーザー体験を作り上げましょう。

:::tip
本チュートリアルでは、このプロジェクト内に登場するコントロールのみを扱います。しかし、SquareLine Vision にはアニメーション、イベント、さまざまなフォントなど、多くの機能があります。このツールをさらに深く知りたい場合は、[公式チュートリアル](https://docs.vision.squareline.io/docs/overview)を参照してください。
:::

#### Hierarchy の紹介

ここではウィジェット同士を入れ子にして、コンテナウィジェットが親、その中の要素が子ウィジェットとなる親子関係を作成できます。この画像は、さまざまなコンテナ、画像、テキストで構成されていることが分かります。これら 3 つのコントロールはすべてツールバーから見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_3.png" style={{width:300, height:'auto'}}/></div>

#### Inspector の紹介

このパネルでは、画面、コンテナ、ウィジェット、その他の UI 要素のプロパティを表示および変更できます。さらに、ウィジェットの種類によって異なる特別な設定がある場合もあります。"background img" を選択すると、Inspector でその img に関連するすべてのコンポーネントを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_5.png" style={{width:500, height:'auto'}}/></div>

#### Toolbar の紹介

Toolbar には、プロジェクト設定、プロジェクトの保存、ヘルプへのアクセス、不具合報告、プロジェクトビューの変更、プロジェクトコードのダウンロード、そして SquareLine Vision 内で直接プロジェクトを再生モードで開始するためのオプションが含まれています。

- **Menu**: ここから、作業内容の保存、プロジェクトのエクスポート、プロジェクト設定の調整、ランチャー画面への復帰といった機能にアクセスできます。
- **Project name**: 現在のプロジェクト名を表示します。
- **Plan**: ユーザーの現在のサブスクリプションプランを表示します。
- **Editor / Animation mode**: 2 つの異なる作業環境を切り替えます。
- **Widgets**: コンポーネントを論理的にグループ化した 3 つのドロップダウンメニューを通じて UI 要素にアクセスでき、プロジェクトに適したウィジェットを簡単に見つけられます。 
- **Undo / Redo**: デザイン変更を前後にたどることができ、リスクなく試行錯誤を行えます。 
- **Play mode**: プレビューを開始し、UI シミュレーションをテストします。
- **Send bug report**: エラー報告システムへの直接アクセスを提供します。
- **User(s)**: 現在プロジェクト内で作業しているすべてのアクティブユーザーを表示し、共同設計作業をサポートします。
- **View options**: ミニマップ表示の切り替えや、専用の入力フィールドで正確なズーム率を入力できます。
- **Version**: プロジェクトが実行されている現在の SquareLine Vision のバージョンを表示し、使用しているソフトウェア環境を把握できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_6.png" style={{width:500, height:'auto'}}/></div>

### コード生成とプロジェクト構造

SquareLine Vision のエクスポーターは、関心の分離とコードの保守性を高めるために整理された構造で、LVGL ベースの GUI コードを生成します。エクスポートされたコードは、GUI 初期化、画面管理、イベント、スタイル、アニメーションを明確に分離したモジュラーアーキテクチャに従います。

#### プロジェクト構造

```shell
exported_project/
├── GUI/                    # Main GUI folder (or 'ui' for Studio format)
│   ├── Content/            # GUI content files
│   │   ├── screens/        # Individual screen source files
│   │   ├── images/         # Generated image source files
│   │   └── fonts/          # Font source files
│   ├── Behavior/           # Event and animation related files
│   │   ├── GUI_Events.c    # Event handler implementations
│   │   └── GUI_Animations.c # Animation and timeline definitions
│   ├── Framework/          # GUI framework files
│   │   └── LVGL/           # LVGL library files
│   ├── GUI.c               # Main GUI implementation
│   ├── GUI.h               # Main GUI header
│   ├── GUI_variables.c     # GUI object declarations
│   ├── GUI_GlobalStyles.c  # Global style definitions
│   ├── CMakeLists.txt      # CMake build configuration
│   └── filelist.txt        # List of all GUI source files
├── lv_conf.h               # LVGL configuration file
├── main.c                  # Application entry point
├── HAL.c                   # Hardware abstraction layer
├── CMakeLists.txt          # Main CMake configuration
├── build.sh                # Build script
└── run.sh                  # Run script
```

#### 主要コンポーネント

GUI サブシステムのメインインターフェースです。以下のような高レベル関数を提供します：

- `GUI_load()`: HAL と LVGL を含む完全な GUI 初期化
- `GUI_init()`: 基本的な GUI 初期化
- `GUI_refresh()`: GUI 状態を更新（LVGL ハンドラを呼び出し）
- `GUI_initContent()`: 画面とウィジェットを初期化
- `GUI_initTheme()`: GUI テーマを設定
- `GUI_loadFirstScreen()`: 最初の画面を読み込む

## プログラムの書き込み

E1002 のメイン制御モジュールは ESP32-S3 です。PlatformIO を使用して reTerminal E シリーズの電子ペーパーディスプレイ画面をプログラムしたい場合は、`.ini` ファイルで ESP32 をサポートするためのオプションを設定する必要があります。

:::tip
初めて PlatformIO を使用する場合は、[Getting Started with PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html) を参照することを強くお勧めします。
:::

### 使用例

### PlatformIO セットアップ

- **Step 1**: 公式サイトで [PlatformIO](https://platformio.org/platformio-ide) をインストールします。まだ PlatformIO のソフトウェアをインストールしていない場合は、上記のリンクをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_1.png" style={{width:500, height:'auto'}}/></div>

- **Step 2**: VScode の拡張機能で `platformio` を検索します。最初に表示されるアイコンが必要なものです。`Install` をクリックするだけでダウンロードが開始されます。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_5.png" style={{width:700, height:'auto'}}/></div>

- **Step 3**: 順に PlatformIO プラグインを開きます。その後、`Open` ボタンをクリックし、`Open Project` をクリックしてローカルの PlatformIO プロジェクトを選択して開きます。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_6.png" style={{width:700, height:'auto'}}/></div>


### 参照用ルーチン

リアルタイムの天気ダッシュボードを表示できる、UI インターフェースがそれぞれ異なる 3 つの既存テンプレートを用意しています。これらは [OpenWeather](https://openweathermap.org/)（世界の気象データを提供するサービスプラットフォーム）と連携して、リアルタイムの気候変化を取得します。必要なのは、OpenWeather から API KEY を取得し、WIFI に接続するだけで、通常どおり使用できます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>Monochrome Weather </th>
      <th>Full Color Weather </th>
      <th>Full Color Weather 2</th>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/weather_gray.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to get</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_7_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to get</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_13_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to get</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

- **Step 1**: フォルダを VScode で開き、関連する依存関係のダウンロードが完了するまで待ちます。プロジェクトを開いたら、`.ini` ファイルを開いて `Ctrl+S` を押します。この時点で、プロジェクトの依存関係のダウンロードが自動的に開始されます。`Project has been successfully updated` と表示されたら、ダウンロード処理が完了したことを意味します。`successful` という単語が表示されていれば、インストールが正常に完了したことがすぐに分かります。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_2.png" style={{width:700, height:'auto'}}/></div>


- **Step 2**: **OpenWeather** を開き、自分の API KEY を取得します。
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_1.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_2.png" style={{width:700, height:'auto'}}/></div>
- **Step 3**: `main.cpp` 内の `WIFI_SSID`、`WIFI_PASSWORD`、`OW_API_KEY` を自分用に変更します。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_3.png" style={{width:700, height:'auto'}}/></div>

- **Step 4**: USB データケーブルを使用して reTerminal をコンピュータに接続し、書き込み処理用の適切なシリアルポートを選択します。その後、`upload` ボタンをクリックして書き込み処理を実行します。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_3.png" style={{width:700, height:'auto'}}/></div>
  端末に次の内容が表示された場合、書き込み処理が正常に完了したことを示します。その後、reTerminal は自動的に画面イメージを更新します。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_4.png" style={{width:700, height:'auto'}}/></div>

## 結果の表示

<div class="table-center">
  <table align="center">
    <tr>
      <th>モノクロ天気</th>
      <th>フルカラー天気</th>
      <th>フルカラー天気 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/squareline_BW_template.jpeg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_3.jpg" style={{width:350, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

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
