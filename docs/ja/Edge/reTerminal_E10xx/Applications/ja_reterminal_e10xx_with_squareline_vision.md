---
description: この記事では、SquareLine で reTerminal E 系列の電子ペーパーディスプレイ用 UI インターフェースを作成する方法について説明します。
title: reTerminal E 系列 ePaper ディスプレイと SquareLine Vision の連携
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_5.webp
slug: /ja/reterminal_e10xx_with_squareline_vision
sidebar_position: 3
last_update:
  date: 10/29/2025
  author: Zovey
---

# reTerminal E 系列 ePaper ディスプレイと SquareLine Vision の連携

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:600, height:'auto'}}/></div>

## はじめに

独自のインテリジェント端末を作成したい場合、このデバイスに魅力的でエレガントなユーザーインターフェースを持たせたいと思うでしょう。[LVGL](https://lvgl.io/) でこれを実現できます。これは、あらゆる MCU、MPU、ディスプレイタイプに対応した美しい UI を作成するための最も人気のある無料でオープンソースの組み込みグラフィックスライブラリです。このライブラリを使用すると、多数の美しい組み込みユーザーインターフェースを作成できます。特に当社の reTerminal E 系列 ePaper 製品を使用する場合、魅力的なインターフェースは不可欠な部分です。しかし、LVGL ライブラリのコードを書くことも非常に複雑な作業です。そのため、このチュートリアルでは主に、コントロールをドラッグアンドドロップするだけで UI を簡単に描画できるエディターを紹介することを目的としています。WYSIWYG（What You See Is What You Get）作成方法により、最終的なプレゼンテーション効果をより良く把握でき、UI を描画した後、LVGL の UI ファイルとしてエクスポートできるため、開発者の開発プロセスが大幅に簡素化されます。このツールの名前は SquareLine Vision で、LVGL のビジュアルフロントエンドツールです。

[SquareLine Vision](https://vision.squareline.io/) は、ブラウザ（Web）または Web 互換環境に基づく UI 開発環境で、組み込みシステム（画面付きデバイスなど）のユーザーインターフェース（UI）を迅速に設計することに特化しています。
これは **設計 + コードエクスポート** ツールでもあります：プラットフォーム上でインターフェースを設計し、その設計を組み込みデバイスで実行するためのコードやリソースとしてエクスポートできます。

## SquareLine Vision の機能

- **ビジュアル UI デザイン** – ドラッグアンドドロップエディターで美しくインタラクティブなインターフェースを視覚的に設計し、手動での LVGL コード作成の必要性を排除します。
- **高速組み込みプロトタイピング** – デスクトップまたはターゲットハードウェア上で UI を即座にプレビューおよび検証し、設計からデバイスまでの反復時間を劇的に短縮します。
- **LVGL ベースのエクスポート** – 設計をクリーンな LVGL ベースのソースコードにシームレスにエクスポートし、組み込みデバイス、マイクロコントローラー、またはシミュレーション環境でコンパイル可能な状態にします。

SquareLine Vision を使用すると、コンセプトからインタラクティブな組み込み UI プロトタイプまでを数分で実現できます — 設計の柔軟性、リアルタイムプレビュー、本格的な LVGL 出力を組み合わせて、製品開発サイクル全体を加速します。

### 必要な材料

このチュートリアルを完了するには、以下の reTerminal E 系列デバイスのいずれかを準備してください：

:::note
現在のところ、SquareLine Vision は reTerminal E1002 のみに対応しており、reTerminal E1001 はまだサポートされていません。ただし、公式チームは既に必要な適応作業を進めています。
:::

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


## [SquareLine Vision](https://vision.squareline.io/) の使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_7.png" style={{width:600, height:'auto'}}/></div>

### コンポーネント紹介

SquareLine Vision プラットフォーム全体は、**ランチャー** と **アプリケーションインターフェース** の 2 つの部分に分けることができます。
**ランチャー** インターフェースでは、以下の 3 つの主要機能を確認できます：
- プロジェクト
- インポート処理
- アカウント設定の制御

UI の描画を開始すると、5 つのツールについて学習します：
- 階層システム
- 画面管理
- スタイリングオプション
- 様々なウィジェットタイプ
- イベント、トリガー、アクションの活用方法

プラットフォームの全体的な組織構造とツールを明確に理解すると、個人プロジェクトの制作に非常に役立ちます。次に、reTerminal E1002 に基づいてプロジェクトを作成します。

## プロジェクトの作成

### 新しい LVGL プロジェクトの開始

SquareLine Vision ランチャーインターフェースの上部で、`Create new` ボタンをクリックします。次に、`Seeed Studio` を選択して当社の製品を表示します。`reTerminal E1002` を選択してプロジェクトを作成します。
このプロジェクトの固定設定は以下の通りです：
- `Resolution`: 800x480
- `Offset`: 0(x), 0(y)
- `Rotation`: 0°
- `Shape`: Rectangle
- `Color Depth`: 32 bit
- `LVGL version`: 9.1
- `Theme`: Light

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Launcher_2.png" style={{width:600, height:'auto'}}/></div>

:::tip
SenseCAP Watcher と reTerminal E1002 デバイスをサポートしています。将来的には、Seeed Studio のより多くの製品もサポートする予定です。
:::

### 既存の .slvp プロジェクトのインポート
既に .slvp ファイルをお持ちの場合は、それを直接プロジェクトとしてインポートできます。天気に関連する 2 つのダッシュボードを提供しています。以下から直接ダウンロードできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.png" style={{width:600, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Weather 7 epaper</th>
      <th>Seeed Weather 13 epaper</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_3.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 7 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>こちらをクリックして入手</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 13 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>こちらをクリックして入手</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## プロジェクトパラメータ設定と UI インターフェース設計

エンジニアリングインターフェースに入ると、4 つの主要エリアを確認できます：

- エリア 1 は **階層** で、主に UI 要素の構造を管理するために使用されます。
- エリア 2 は **シミュレーター** で、UI が表示され、各 UI のプレゼンテーション効果を表示するために使用されます。
- エリア 3 は **インスペクター** で、現在選択されている要素の詳細なコントロールを提供します。
- エリア 4 は **ツールバー** で、アプリケーションインターフェースの上部に位置し、多くのツールと機能に簡単にアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_2.png" style={{width:500, height:'auto'}}/></div>

### UI インターフェース設計

UI（ユーザーインターフェース）設計は組み込み製品開発において重要で、ユーザーエクスペリエンスを直接決定します。美しく、直感的で、レスポンシブなインターフェースは、製品の使いやすさを向上させるだけでなく、全体的な魅力も高めます。

SquareLine Vision では、コンポーネントをドラッグアンドドロップしてインターフェースを迅速に組み立てることができます。スタイル、フォント、ビットマップ、テーマなどのツールを活用して視覚効果を正確に制御し、プロフェッショナルで独特なユーザーエクスペリエンスを作り上げます。

:::tip
このチュートリアルでは、このプロジェクトに登場するコントロールのみを扱います。ただし、SquareLine Vision はアニメーション、イベント、異なるフォントなど、他にも多くの機能を提供しています。このツールをさらに探求したい場合は、[公式チュートリアル](https://docs.vision.squareline.io/docs/overview)を参照してください。
:::

#### 階層の紹介

ここでは、ウィジェットを相互にネストして親子関係を作成できます。コンテナウィジェットが親となり、その内部の要素が子ウィジェットになります。この画像が様々なコンテナ、画像、テキストで構成されていることがわかります。これら 3 つのコントロールはすべてツールバーで見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_3.png" style={{width:300, height:'auto'}}/></div>

#### インスペクターの紹介

このパネルでは、画面、コンテナ、ウィジェット、その他の UI 要素のプロパティを表示および変更できます。さらに、ウィジェットタイプによって異なる特別な設定がある場合があります。「background img」を選択すると、インスペクターで img に関連するすべてのコンポーネントを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_5.png" style={{width:500, height:'auto'}}/></div>

#### ツールバーの紹介

ツールバーには、プロジェクト設定、プロジェクトの保存、ヘルプへのアクセス、問題の報告、プロジェクトビューの変更、プロジェクトコードのダウンロード、SquareLine Vision内でプロジェクトを直接プレイモードで開始するためのオプションが含まれています。

- **Menu**：ここから、作業の保存、プロジェクトのエクスポート、プロジェクト設定の調整、ランチャー画面への戻りの機能にアクセスできます。
- **Project name**：現在のプロジェクトの名前を表示します。
- **Plan**：ユーザーの現在のサブスクリプションプランを表示します。
- **Editor / Animation mode**：2つの異なる作業環境を切り替えます
- **Widgets**：コンポーネントを論理的にグループ化した3つのドロップダウンメニューを通じてUI要素にアクセスし、プロジェクトに適したウィジェットを簡単に見つけることができます。
- **Undo / Redo**：デザインの変更を前後にステップすることができ、リスクなしで実験をサポートします。
- **Play mode**：プレビューを開始し、UIシミュレーションをテストします。
- **Send bug report**：エラー報告システムへの直接アクセスを提供します。
- **User(s)**：プロジェクト内で現在作業しているすべてのアクティブユーザーを表示し、協調的なデザイン作業をサポートします。
- **View options**：ミニマップ表示を切り替え、専用の入力フィールドに正確なズーム率の値を入力できます。
- **Version**：プロジェクトが実行されている現在のSquareLine Visionバージョンを表示し、ソフトウェア環境を把握できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_6.png" style={{width:500, height:'auto'}}/></div>

### コード生成とプロジェクト構造

SquareLine Visionエクスポーターは、関心事を分離し、コードを保守可能にするために構造化された方法で整理されたLVGLベースのGUIコードを生成します。エクスポートされたコードは、GUI初期化、画面管理、イベント、スタイル、アニメーションの間で明確に分離されたモジュラーアーキテクチャに従います。

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

GUIサブシステムのメインインターフェース。以下の高レベル機能を提供します：

- `GUI_load()`：HALとLVGLを含む完全なGUI初期化
- `GUI_init()`：基本的なGUI初期化
- `GUI_refresh()`：GUI状態を更新（LVGLハンドラーを呼び出し）
- `GUI_initContent()`：画面とウィジェットを初期化
- `GUI_initTheme()`：GUIテーマを設定
- `GUI_loadFirstScreen()`：初期画面を読み込み

## プログラム書き込み

E1002のメイン制御モジュールはESP32-S3です。PlatformIOを使用してreTerminal E系列の電子ペーパーディスプレイ画面をプログラムする場合、`.ini`ファイルでESP32をサポートするオプションを設定する必要があります。

:::tip
PlatformIOを初めて使用する場合は、[Getting Started with PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html)を参照することを強くお勧めします。
:::

### 使用例

### PlatformIOセットアップ

- **ステップ1**：公式ウェブサイトで[PlatformIO](https://platformio.org/platformio-ide)をインストールします。PlatformIOソフトウェアをインストールしていない場合は、上記のリンクをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_1.png" style={{width:500, height:'auto'}}/></div>

- **ステップ2**：VScodeの拡張機能で`platformio`を検索します。最初に表示されるアイコンが必要なものです。`Install`をクリックしてダウンロードを開始します。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_5.png" style={{width:700, height:'auto'}}/></div>

- **ステップ3**：順番にPlatformIOプラグインを開きます。次に、`Open`ボタンをクリックし、`Open Project`をクリックしてローカルのPlatformIOプロジェクトを選択して開きます。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_6.png" style={{width:700, height:'auto'}}/></div>


### 参考ルーチン

リアルタイム天気ダッシュボードを表示できる、それぞれ異なるUIインターフェースを持つ2つの既存のルーチンを提供しています。これらは[OpenWeather](https://openweathermap.org/)（グローバル天気データを提供するサービスプラットフォーム）と統合してリアルタイムの気候変化を取得します。OpenWeatherからAPI KEYを取得し、WIFIに接続するだけで正常に使用できます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Weather 7 epaper</th>
      <th>Seeed Weather 13 epaper</th>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_7_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックして取得</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_13_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックして取得</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

- **ステップ1**：VScodeでフォルダを開き、関連する依存関係が完全にダウンロードされるまで待ちます。プロジェクトを開いた後、`.ini`ファイルを開いて`Ctrl+S`を押します。この時点で、プロジェクトの依存関係が自動的にダウンロードを開始します。`Project has been successfully updated`が表示されると、ダウンロードプロセスが完了したことを意味します。`successful`という単語が表示されると、インストールが正常に完了したことがすぐに示されます。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_2.png" style={{width:700, height:'auto'}}/></div>


- **ステップ2**：**OpenWeather**を開いて独自のAPI KEYを取得します
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_1.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_2.png" style={{width:700, height:'auto'}}/></div>
- **ステップ3**：`main.cpp`で`WIFI_SSID`、`WIFI_PASSWORD`、`OW_API_KEY`を変更します。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_3.png" style={{width:700, height:'auto'}}/></div>

- **ステップ4**：USBデータケーブルを使用してreTerminalをコンピューターに接続し、書き込みプロセスに適切なシリアルポートを選択します。次に、`upload`ボタンをクリックして書き込みプロセスを実行します。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_3.png" style={{width:700, height:'auto'}}/></div>
  ターミナルに以下の内容が表示されると、書き込みプロセスが成功したことを示します。その後、reTerminalは自動的に画面画像を更新します。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_4.png" style={{width:700, height:'auto'}}/></div>

## 結果の表示

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Weather 7 epaper</th>
      <th>Seeed Weather 13 epaper</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_3.jpg" style={{width:350, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
