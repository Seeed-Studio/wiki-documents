---
description: EEZStudio を使用し、アプリケーション用途のために Arduino へデプロイする方法
title: EEZ Studio を使う
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 6
last_update:
  date: 09/11/2025
  author: Jason
createdAt: '2025-09-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_eezstudio/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E シリーズの電子ペーパーディスプレイと EEZ Studio のはじめかた

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

## はじめに

このガイドでは、ビジュアルデザインツール [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/) を使用して、reTerminal E シリーズ向けのプロフェッショナルなユーザーインターフェースを設計する手順を説明します。UI 要素の作成方法、必要なコードの生成方法、そして最終的に Arduino IDE を使ってデバイスへデプロイする方法を学びます。このプロセスにより、視認性に優れ、超低消費電力で、HMI アプリケーションに最適なカスタムインターフェースを構築できます。

### 必要なもの

このチュートリアルを完了するには、次の reTerminal E シリーズデバイスのいずれかを用意してください。

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

### EEZ Studio とは？

EEZ Studio は、主に試験・計測機器、組み込みデバイス、その他のインタラクティブアプリケーション向けのユーザーインターフェースを構築するために開発された、最新のビジュアルプログラミングおよび UI デザイン環境です。ドラッグ＆ドロップによる GUI デザイン、スクリプト機能、デバイス統合ツールを組み合わせることで、開発者、エンジニア、メイカーが、一から作り直すことなくプロフェッショナルなインターフェースを素早く作成できます。

要するに、EEZ Studio はハードウェアとソフトウェアの橋渡しを行い、ユーザー体験の設計、プロトタイピング、デプロイをより効率的に行えるようにします。

### EEZ Studio を使う理由

- ビジュアルインターフェースデザイン – WYSIWYG エディタで複雑な UI を作成し、手作業によるコーディングの必要性を減らします。
- 高速プロトタイピング – デザインアイデアを素早くテスト・検証でき、開発時間とコストを削減します。
- クロスプラットフォーム対応 – 複数の OS や組み込みターゲット上で動作するアプリケーションを構築できます。
- ハードウェアとの統合 – ラボ用計測器、IoT デバイス、カスタムボードを直接接続して制御できます。
- オープンソースエコシステム – コミュニティ主導のツールセットにより、透明性と柔軟性の恩恵を受けられます。

EEZ Studio を使えば、コンセプトから動作するプロトタイプまでを、従来のごく一部の時間で進められ、かつデザインをプロフェッショナルかつ将来の要件にも適応しやすい形で仕上げることができます。

### SquareLine Studio との違い

EEZ Studio と SquareLine Studio はどちらも GUI デザインツールですが、目指すゴールや想定するユーザーシナリオが異なります。

<table class="EEZStudio-table">
    <thead>
        <tr>
            <th>項目</th>
            <th>EEZ Studio</th>
            <th>SquareLine Studio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>主な目的</th>
            <td>試験・計測機器、組み込みシステム、およびハードウェア／ソフトウェア統合向けに設計</td>
            <td>組み込みシステム（特に LVGL）向けの GUI 構築に特化</td>
        </tr>
        <tr>
            <th>対象ユーザー</th>
            <td>エンジニア、プロダクト開発者、メイカー、ラボ／試験機器の設計者</td>
            <td>組み込み UI 開発者、ホビイスト、IoT プロダクトデザイナー</td>
        </tr>
        <tr>
            <th>ハードウェア統合</th>
            <td>計測器、測定デバイス、自動化システムとの直接統合</td>
            <td>主にディスプレイ／UI 生成にフォーカスしており、外部デバイス統合は重視していない</td>
        </tr>
        <tr>
            <th>オープンソース</th>
            <td>コミュニティ主導で透明性が高く拡張可能。プレミアム／有償テクニカルサポートも利用可能</td>
            <td>クローズドソースの商用製品で、ライセンス制</td>
        </tr>
        <tr>
            <th>ワークフロー</th>
            <td>1 つの環境からプロトタイピング、シミュレーション、実機制御まで行える</td>
            <td>主に、組み込みプロジェクトにコンパイルして組み込むための UI コードを生成</td>
        </tr>
    </tbody>
</table>

## EEZ Studio のはじめかた

### EEZ Studio のインストール

[EEZ Studio Install Link](https://www.envox.eu/studio/studio-introduction/) ダウンロードリンクにアクセスしたら、お使いのコンピュータに対応したシステムバージョンを選択してダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## プロジェクトの作成

### 新しい LVGL プロジェクトを開始する

EEZ Studio インターフェース上部の “CREATE” ボタンをクリックします。
左側のプロジェクトテンプレート一覧から “LVGL” プロジェクトを探して選択します。

- `Name:` プロジェクトファイルに名前を付けます。この記事の後続の内容を説明しやすくするため、ここでは EEZ_UI と呼ぶことにします。
- `LVGL Version:` プロジェクトで使用する LVGL ライブラリのバージョンを指定します。ドロップダウンメニューから 9.x を選択します。
- `Location:` プロジェクトファイルをコンピュータ上のどこに保存するかを指定します。デフォルトのパスは通常、EEZ Studio のダウンロードまたはインストールディレクトリ内の既定のプロジェクトフォルダ（例：C:\Users\YourUser\Documents\EEZ Studio\Projects など）を指します。保存場所を変更する必要がある場合は、Location テキストボックス右側のフォルダアイコン（または三点リーダー ...）をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### プロジェクト設定の構成

E-paper reTerminal 向けに LVGL UI プロジェクトを構築する際は、生成される UI ファイルが Arduino や組み込み環境と互換性を持つよう、EEZ Studio の Project Settings を正しく構成する必要があります。

Step 1. Project Settings を開く

下図のように、上部ツールバーの ⚙️（Settings）アイコンをクリックします。
すると、ワークスペース右側に Project Settings パネルが開きます。

Step 2. Build Output と LVGL Include を設定する

General → Build の下で、次の項目を探します。

- LVGL include: コンパイル時に正しい LVGL ヘッダーをインクルードするために、lvgl.h を入力します。

💡 これにより、生成された UI コードがビルド時に LVGL ライブラリを正しく参照できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

<br></br>

Step 3. ディスプレイ解像度を設定する

次に、同じく Settings → General の下で、ディスプレイの解像度を設定します。
- Display width: 800
- Display height: 480

🧩 これらのパラメータは、UI レイアウトと座標マッピングの対象となる E-paper 画面の解像度を定義します。
値が使用している E-paper モデル（例：7.5 インチ E-paper – 800×480）と一致していることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

### プロジェクトパラメータ設定と UI インターフェースデザイン

### UI インターフェースデザイン

UI（ユーザーインターフェース）デザインは組み込み製品開発において非常に重要であり、ユーザー体験を直接左右します。見た目が美しく、直感的で、応答性の高いインターフェースは、製品の使いやすさを高めるだけでなく、全体的な魅力も向上させます。

EEZ Studio では、コンポーネントをドラッグ＆ドロップすることで、インターフェースを素早く組み立てることができます。Styles、Fonts、Bitmaps、Themes などのツールを活用して視覚効果を細かく制御し、プロフェッショナルで個性的なユーザー体験を作り上げましょう。

以下に、おすすめのツールを紹介します：

- [Color](https://coolors.co/)
- [Color Chart](https://peiseka.com/)
- [Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)
- [Font](https://fonts.google.com/)

**右端のコンポーネントの紹介**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- Styles: インターフェース要素を統一・再利用するための視覚属性で、一貫性と効率的な保守を実現します。
- Bitmap: 背景、アイコン、ロゴなどによく使用され、ビジュアル表現を強化します。
- Fonts: テキストの可読性を確保しつつ、多言語コンテンツやブランドスタイルをサポートします。
- Themes: インターフェース全体の美観を定義し、ライト／ダークモードなどを素早く切り替えられます。
- Groups: 複数のウィジェットをまとめて整理し、一括管理やレイアウトを行います。

このチュートリアルでは、Web サイトやアプリのホームページ用 UI のデザイン手順を案内します。コアとなるテクニックを習得すれば、どんなインターフェースでも自在に作成できるようになります。

このページは次の 5 つのコンポーネントで構成されています。

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

Step 1 .キャンバスの背景色を変更する

- 背景色を変更したいキャンバスを選択します。
- Color をチェックし、好みの16進数カラーコードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

Step 2 .Panel を追加

- Basic セクションから Panel コンポーネントをキャンバス上にドラッグし、Width と Height を調整します。

- Color をチェックし、好みの16進数カラーコードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

Step 3 .Bitmaps を追加

- 画像を追加するには、右端のサイドバーにある Bitmaps アイコンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

- 選択した画像に名前を付けます。後で命名規則に基づいて画像を選択する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

- Basic グループから Image コンポーネントをキャンバス上にドラッグし、画像を選択して Scale を使ってサイズを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

Step 4 .Line を追加

- Visualiser グループから Line コンポーネントをキャンバス上にドラッグします。Points の開始点と終了点を設定して、線の長さと高さを決定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

Step 5 .Label を追加

- Basic グループから Label コンポーネントをキャンバス上にドラッグし、フォントカラーとフォント形式の設定を行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

- 一番右の列にある Fonts ボックスをクリックして、フォント形式を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

- フォント名とサイズを設定します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

以上が、これら5つのコンポーネントの基本的な使い方です。参照図に従って、または自分で設計した UI インターフェースに合わせて配置することができます。

### コード生成とデプロイ

UI デザインが完了したら、プロジェクトを保存し、シミュレータでプレビューする必要があります。検証が完了したら、ビルド操作を実行して、ターゲットハードウェア上で実行可能なコードファイルを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a20.jpg" style={{width:900, height:'auto'}}/></div>

**Step 1 .プロジェクトを保存**

インターフェース上部の Save アイコン（フロッピーディスクの形で、“OPEN” ボタンの隣にあります）をクリックして、プロジェクトを保存します。

**Step 2 .デザインをプレビュー**

ツールバーの Run アイコン（再生ボタン）をクリックしてシミュレータを起動し、UI の効果をインタラクティブにプレビューします。

**Step 3 .プロジェクトをビルド**

Compile アイコン（チェックマークボタン）をクリックして、プロジェクト内の構文エラーやロジックエラーをチェックします。
Build アイコン（レンチボタン）をクリックして、UI コード、画像データ、フォントデータなどのファイルを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

**Step 4 .ビルド成功の確認**

完了すると、EEZ Studio に緑色の「Build successful」というメッセージが表示され、コードが正常に生成されたことを示します。

## 環境準備

Arduino で reTerminal E シリーズ ePaper Display をプログラムするには、ESP32 をサポートするように Arduino IDE をセットアップする必要があります。

:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

#### Arduino IDE のセットアップ

**Step 1.** [Arduino IDE](https://www.arduino.cc/en/software) をダウンロードしてインストールし、Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div><br />

**Step 2.** Arduino IDE に ESP32 ボードのサポートを追加します。

Arduino IDE で **File > Preferences** に移動し、「Additional Boards Manager URLs」フィールドに次の URL を追加します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Step 3.** ESP32 ボードパッケージをインストールします。

**Tools > Board > Boards Manager** に移動し、「esp32」を検索して、Espressif Systems による ESP32 パッケージをインストールします。

**Step 4.** 正しいボードを選択します。

**Tools > Board > ESP32 Arduino** に移動し、**XIAO_ESP32S3** を選択します。

**Step 5.** reTerminal E シリーズ ePaper Display を USB-C ケーブルでコンピュータに接続します。

**Step 6.** **Tools > Port** から正しいポートを選択します。

## ePaper Display のプログラミング

**reTerminal E1001 には 7.5 インチの白黒 ePaper ディスプレイ**が搭載されており、**reTerminal E1002 には 7.3 インチのフルカラー ePaper ディスプレイ**が搭載されています。どちらのディスプレイも、さまざまな照明条件下で優れた視認性を提供し、超低消費電力で動作するため、常時表示と最小限の電力使用が求められる産業用途に最適です。

### Seeed_GFX ライブラリの使用

ePaper ディスプレイを制御するために、Seeed Studio の各種ディスプレイデバイスを幅広くサポートする Seeed_GFX ライブラリを使用します。

**Step 1.** GitHub から Seeed_GFX ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 2.** Arduino IDE で ZIP ファイルを追加してライブラリをインストールします。**Sketch > Include Library > Add .ZIP Library** に移動し、ダウンロードした ZIP ファイルを選択します。

:::note
以前に TFT_eSPI ライブラリをインストールしている場合、競合を避けるために、一時的に Arduino ライブラリフォルダから削除するか名前を変更する必要があるかもしれません。Seeed_GFX は、Seeed Studio のディスプレイ向けに機能を追加した TFT_eSPI のフォークであるためです。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="reTerminal E1001 のプログラミング" default>
#### reTerminal E1001 のプログラミング（7.5 インチ白黒 ePaper）

白黒 ePaper ディスプレイ上での基本的な描画操作を示す、簡単なサンプルを見ていきましょう。

**Step 1.** Seeed_GFX ライブラリからサンプルスケッチを開きます：**File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**Step 2.** スケッチと同じフォルダに `driver.h` という名前の新しいファイルを作成します。Arduino IDE で矢印ボタンをクリックし、「New Tab」を選択して `driver.h` と名付けることで作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Step 3.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) にアクセスし、デバイスリストから **reTerminal E1001** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Step 4.** 生成された設定コードをコピーして `driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="Programming reTerminal E1002" label="reTerminal E1002 のプログラミング">

#### reTerminal E1002 のプログラミング（7.3 インチフルカラー ePaper）

フルカラー ePaper ディスプレイは赤・黒・白の色をサポートしており、より視覚的にリッチなインターフェースを実現できます。

**Step 1.** Seeed_GFX ライブラリからカラーサンプルスケッチを開きます：**File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Step 2.** 先ほどと同じ手順で、スケッチと同じフォルダに `driver.h` という名前の新しいファイルを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**Step 3.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) にアクセスし、デバイスリストから **reTerminal E1002** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**Step 4.** 生成された設定コードをコピーして `driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
</Tabs>

## EEZ Studio プロジェクトを Arduino にデプロイ

まず、「Tools」メニューバーの中から OPI PSRAM を見つけて開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

これら 2 つの下位ドライバファイルを、プロジェクトディレクトリに追加する必要があります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

- [e1002_display.cpp](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [e1002_display.h](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

次のプロジェクトファイル（4 つのファイルを含む）を Arduino ライブラリに移植し、Arduino プロジェクトで使用します。
`EEZ_UI file` は、EEZStudio のビルドプロセス中に生成されます。保存したパスを特定する必要があります。

- 🔗 **[ZIP]** [Code](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

<br></br>

以下は UI を動作させるためのメイン Arduino スケッチです：
3 つのボタンは 3 つの異なる画面に対応しており、緑から順に HOME、Workstation、Plant となります。

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

- `e1002_display_init():` 電子ペーパーディスプレイハードウェアを初期化し、その動作パラメータを設定します。

- `pinMode(..., INPUT_PULLUP):` ボタンのピンを入力モードとして設定し、内部プルアップ抵抗を有効にします。これにより、ボタンが押されていないときはピンが高レベル（HIGH）に保たれ、押されたときはグラウンドに接続されて低レベル（LOW）になります。

- `ui_init()` と `loadScreen():` これらの関数は LVGL ユーザーインターフェースライブラリを初期化し、指定された画面を読み込みます。

- `lv_timer_handler():` これは LVGL ライブラリにおける重要な関数で、アニメーションや画面更新など、LVGL 内のタイマーイベントを処理します。

- `if (lastKey0State == HIGH && currentKey0State == LOW):` この行はキーイベント検出の中核です。キーの状態が未押下から押下に変化したかどうかを確認します。

- 条件が満たされると、プログラムは `page_index` を更新し、新しいページを読み込むために `loadScreen()` 関数を呼び出します。

- 状態更新：`lastKey0State = currentKey0State;` この行は非常に重要です。次の `loop()` 繰り返しで使用するために現在のキー状態を保存し、次回の状態比較を可能にします。

- 電子ペーパーのリフレッシュ：`e1002_display_should_refresh()` と `e1002_display_refresh()` は電子ペーパースクリーンのリフレッシュを管理します。LCD 画面とは異なり、電子ペーパーはリアルタイムにリフレッシュすることはできません。通常、電力を節約し寿命を延ばすために、特定の間隔で選択的または全画面のリフレッシュが必要です。このコードは、そのオンデマンドリフレッシュ機構を実装しています。

- `delay(10)`: これは単純なソフトウェアデバウンス対策で、物理的なキーのチャタリングを複数回の押下として誤認識するのを防ぎます。

## インターフェース表示図

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

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
