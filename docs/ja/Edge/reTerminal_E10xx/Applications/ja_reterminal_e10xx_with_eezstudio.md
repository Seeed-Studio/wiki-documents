---
description: EEZStudioを使用してアプリケーション目的でArduinoにデプロイする
title: reTerminal E Series ePaper Display と EEZ Studio の連携
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /ja/reterminal_e10xx_with_eezstudio
sidebar_position: 6
last_update:
  date: 09/11/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E Series ePaper Display と EEZ Studio の入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

## はじめに

このガイドでは、ビジュアルデザインツール [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/) を使用して reTerminal E Series 用のプロフェッショナルなユーザーインターフェースを設計する方法を説明します。UI要素の作成、必要なコードの生成、そして最終的に Arduino IDE を使用してデバイスにデプロイする方法を学習します。このプロセスにより、優れた視認性と超低消費電力を持つカスタムインターフェースを構築でき、HMIアプリケーションに最適です。

### 必要な材料

このチュートリアルを完了するには、以下の reTerminal E Series デバイスのいずれかをご用意ください：

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### EEZ Studio とは？

EEZ Studio は、主にテスト・測定機器、組み込みデバイス、その他のインタラクティブアプリケーション用のユーザーインターフェース構築のために開発された、現代的なビジュアルプログラミングおよび UI デザイン環境です。ドラッグアンドドロップ GUI デザイン、スクリプト機能、デバイス統合ツールを組み合わせ、開発者、エンジニア、メーカーがゼロから始めることなく、プロフェッショナルなインターフェースを迅速に作成できるようにします。

簡単に言えば、EEZ Studio はハードウェアとソフトウェアの橋渡しとして機能し、ユーザーエクスペリエンスをより効率的に設計、プロトタイプ、デプロイできるようにします。

### なぜ EEZ Studio を使用するのか？

- ビジュアルインターフェースデザイン – WYSIWYG エディターで複雑な UI を作成し、手動コーディングの必要性を削減
- 迅速なプロトタイピング – デザインアイデアを素早くテストし検証、開発時間とコストを節約
- クロスプラットフォームサポート – 複数のオペレーティングシステムと組み込みターゲットで動作するアプリケーションを構築
- ハードウェアとの統合 – ラボ機器、IoT デバイス、カスタムボードを直接接続・制御
- オープンソースエコシステム – 透明性と柔軟性を持つコミュニティ主導のツールセットの恩恵

EEZ Studio を使用することで、コンセプトから動作するプロトタイプまでの時間を大幅に短縮でき、同時にデザインがプロフェッショナルで将来の要件に適応可能であることを保証できます。

### SquareLine Studio との違い

EEZ Studio と SquareLine Studio はどちらも GUI デザインツールですが、異なる目標とユーザーシナリオに焦点を当てています：

<table class="EEZStudio-table">
    <thead>
        <tr>
            <th>側面</th>
            <th>EEZ Studio</th>
            <th>SquareLine Studio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>主な目的</th>
            <td>テスト・測定機器、組み込みシステム、ハードウェア/ソフトウェア統合向けに設計</td>
            <td>組み込みシステム（特に LVGL）用 GUI 構築に焦点</td>
        </tr>
        <tr>
            <th>対象ユーザー</th>
            <td>エンジニア、製品開発者、メーカー、ラボ/テスト機器設計者</td>
            <td>組み込み UI 開発者、愛好家、IoT 製品設計者</td>
        </tr>
        <tr>
            <th>ハードウェア統合</th>
            <td>機器、測定デバイス、自動化システムとの直接統合</td>
            <td>主にディスプレイ/UI 生成に焦点、外部デバイス統合は限定的</td>
        </tr>
        <tr>
            <th>オープンソース</th>
            <td>コミュニティ主導、透明性、拡張可能 プレミアム/有料技術サポートが利用可能</td>
            <td>クローズドソース、ライセンス付き商用製品</td>
        </tr>
        <tr>
            <th>ワークフロー</th>
            <td>一つの環境でプロトタイプ、シミュレーション、実デバイス制御が可能</td>
            <td>主に組み込みプロジェクトにコンパイルされる UI コードを生成</td>
        </tr>
    </tbody>
</table>

## EEZ Studio の入門

### EEZ Studio のインストール

[EEZ Studio インストールリンク](https://www.envox.eu/studio/studio-introduction/) ダウンロードリンクにアクセス後、お使いのコンピューターと互換性のあるシステムバージョンを選択してダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## プロジェクトの作成

### 新しい LVGL プロジェクトの開始

EEZ Studio インターフェースの上部で、"CREATE" ボタンをクリックします。
左側のプロジェクトテンプレートリストで、"LVGL" プロジェクトを見つけて選択します。

- `Name:` プロジェクトファイルに名前を付けます。記事の後続内容の説明を便利にするため、ここでは EEZ_UI と呼びます。
- `LVGL Version:` プロジェクトで使用する LVGL ライブラリのバージョンを指定します。ドロップダウンメニューから 9.x を選択します。
- `Location:` コンピューター上のプロジェクトファイルの保存パスを指定します。デフォルトパスは通常、EEZ Studio のダウンロードまたはインストールディレクトリ内のデフォルトプロジェクトフォルダーを指します（例：C:\Users\YourUser\Documents\EEZ Studio\Projects または類似のパス）。保存場所を変更する必要がある場合は、Location テキストボックスの右側にあるフォルダーアイコン（または省略記号 ...）をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### プロジェクト設定の構成

E-paper reTerminal 用の LVGL UI プロジェクトを構築する際、生成される UI ファイルが Arduino または組み込み環境と互換性があることを確認するために、EEZ Studio プロジェクト設定を適切に構成する必要があります。

ステップ 1. プロジェクト設定を開く

下図に示すように、上部ツールバーの ⚙️（Settings）アイコンをクリックします。
これにより、ワークスペースの右側にプロジェクト設定パネルが開きます。

ステップ 2. ビルド出力と LVGL インクルードの構成

General → Build の下で、以下のフィールドを見つけます：

- LVGL include: コンパイル時に正しい LVGL ヘッダーをインクルードするために lvgl.h を入力します。

💡 これにより、生成された UI コードがビルド時に LVGL ライブラリを正しく参照できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

<br></br>

ステップ 3. ディスプレイ解像度の設定

次に、Settings → General の下で、ディスプレイの解像度を構成します：
- Display width: 800
- Display height: 480

🧩 これらのパラメーターは、UI レイアウトと座標マッピング用のターゲット E-paper スクリーン解像度を定義します。
値が特定の E-paper モデルと一致することを確認してください（例：7.5インチ E-paper – 800×480）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

### プロジェクトパラメーター設定と UI インターフェースデザイン

### UI インターフェースデザイン

UI（ユーザーインターフェース）デザインは組み込み製品開発において重要であり、ユーザーエクスペリエンスを直接決定します。美しく、直感的で、レスポンシブなインターフェースは、製品の使いやすさを向上させるだけでなく、全体的な魅力も高めます。

EEZ Studio では、コンポーネントをドラッグアンドドロップすることでインターフェースを迅速に組み立てることができます。Styles、Fonts、Bitmaps、Themes などのツールを活用して視覚効果を正確に制御し、プロフェッショナルで独特なユーザーエクスペリエンスを作り上げます。

以下は推奨ツールの紹介です：

- [Color](https://coolors.co/)
- [Color Chart](https://peiseka.com/)
- [Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)
- [Font](https://fonts.google.com/)

**右端コンポーネントの紹介**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- Styles: インターフェース要素を統一し再利用するために使用される視覚属性で、一貫性と効率的なメンテナンスを保証します。
- Bitmap: 背景、アイコン、ロゴなどに一般的に使用され、視覚的プレゼンテーションを向上させます。
- Fonts: 多言語コンテンツとブランドスタイリングをサポートしながら、明確なテキストの読みやすさを保証します。
- Themes: 全体的なインターフェースの美学を定義し、ライト/ダークモードなどの迅速な切り替えを可能にします。
- Groups: 複数のウィジェットを一緒に整理し、統一された管理とレイアウトを実現します。

このチュートリアルでは、ウェブサイトやアプリのホームページ用 UI の設計方法をガイドします。コア技術をマスターすれば、簡単に任意のインターフェースを作成できるようになります。

このページは5つのコンポーネントで構成されています：

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

ステップ 1. キャンバスの背景色を変更する

- 背景色を変更したいキャンバスを選択します。
- Color をチェックし、お好みの16進数カラーコードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

ステップ 2 .パネルを追加

- Basic セクションから Panel コンポーネントをキャンバスにドラッグし、Width と Height を調整します。

- Color をチェックし、お好みの16進数カラーコードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

ステップ 3 .ビットマップを追加

- 右端のサイドバーにある Bitmaps アイコンをクリックして画像を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

- 選択した画像に名前を付けます。後で命名規則に基づいて画像を選択する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

- Basic グループから Image コンポーネントをキャンバスにドラッグし、画像を選択して Scale を使用してサイズを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

ステップ 4 .ラインを追加

- Visualiser グループから Line コンポーネントをキャンバスにドラッグします。Points の開始点と終了点を設定して、線の長さと高さを決定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

ステップ 5 .ラベルを追加

- Basic グループから Label コンポーネントをキャンバスにドラッグし、フォントの色とフォーマット設定を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

- 右端の列にある Fonts ボックスをクリックして、フォントフォーマットを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

- フォント名とサイズを設定します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

以上が、これら5つのコンポーネントの基本的な使用方法です。参考図または独自に設計したUIインターフェースに従って配置することができます。

### コード生成とデプロイメント

UI設計が完了したら、プロジェクトを保存してシミュレーターでプレビューする必要があります。確認後、ビルド操作を実行してターゲットハードウェアで実行可能なコードファイルを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a20.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 1 .プロジェクトを保存**

インターフェース上部の Save アイコン（フロッピーディスク形状、"OPEN" ボタンの隣）をクリックしてプロジェクトを保存します。

**ステップ 2 .デザインをプレビュー**

ツールバーの Run アイコン（再生ボタン）をクリックしてシミュレーターを起動し、UI効果をインタラクティブにプレビューします。

**ステップ 3 .プロジェクトをビルド**

Compile アイコン（チェックマークボタン）をクリックして、プロジェクトの構文やロジックエラーをチェックします。
Build アイコン（レンチボタン）をクリックして、UIコード、画像データ、フォントデータなどのファイルを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

**ステップ 4 .ビルド成功の確認**

完了すると、EEZ Studio は「Build successful」という緑色のプロンプトを表示し、コードが正常に生成されたことを示します。

## 環境準備

reTerminal E Series ePaper Display を Arduino でプログラムするには、ESP32 サポートを含む Arduino IDE をセットアップする必要があります。

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

#### Arduino IDE セットアップ

**ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/software) をダウンロードしてインストールし、Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div><br />

**ステップ 2.** Arduino IDE に ESP32 ボードサポートを追加します。

Arduino IDE で、**File > Preferences** に移動し、"Additional Boards Manager URLs" フィールドに以下の URL を追加します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**ステップ 3.** ESP32 ボードパッケージをインストールします。

**Tools > Board > Boards Manager** に移動し、「esp32」を検索して Espressif Systems の ESP32 パッケージをインストールします。

**ステップ 4.** 正しいボードを選択します。

**Tools > Board > ESP32 Arduino** に移動し、**XIAO_ESP32S3** を選択します。

**ステップ 5.** USB-C ケーブルを使用して reTerminal E Series ePaper Display をコンピューターに接続します。

**ステップ 6.** **Tools > Port** から正しいポートを選択します。

## ePaper ディスプレイプログラミング

**reTerminal E1001 は 7.5 インチの白黒 ePaper ディスプレイを搭載**し、**reTerminal E1002 は 7.3 インチのフルカラー ePaper ディスプレイを搭載**しています。両方のディスプレイは、超低消費電力で様々な照明条件下で優れた視認性を提供し、最小限の電力使用で常時表示が必要な産業用アプリケーションに最適です。

### Seeed_GFX ライブラリの使用

ePaper ディスプレイを制御するために、様々な Seeed Studio ディスプレイデバイスに包括的なサポートを提供する Seeed_GFX ライブラリを使用します。

**ステップ 1.** GitHub から Seeed_GFX ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 2.** Arduino IDE で ZIP ファイルを追加してライブラリをインストールします。**Sketch > Include Library > Add .ZIP Library** に移動し、ダウンロードした ZIP ファイルを選択します。

:::note
以前に TFT_eSPI ライブラリをインストールしている場合、Seeed_GFX は Seeed Studio ディスプレイ用の追加機能を持つ TFT_eSPI のフォークであるため、競合を避けるために Arduino ライブラリフォルダから一時的に削除または名前を変更する必要がある場合があります。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="Programming reTerminal E1001" default>
#### reTerminal E1001 のプログラミング（7.5 インチ白黒 ePaper）

白黒 ePaper ディスプレイでの基本的な描画操作を実演する簡単な例を見てみましょう。

**ステップ 1.** Seeed_GFX ライブラリからサンプルスケッチを開きます：**File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**ステップ 2.** スケッチと同じフォルダに `driver.h` という名前の新しいファイルを作成します。Arduino IDE の矢印ボタンをクリックして "New Tab" を選択し、`driver.h` と名前を付けることで実行できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) に移動し、デバイスリストから **reTerminal E1001** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** 生成された設定コードをコピーして `driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="Programming reTerminal E1002" label="Programming reTerminal E1002">

#### reTerminal E1002 のプログラミング（7.3 インチフルカラー ePaper）

フルカラー ePaper ディスプレイは赤、黒、白の色をサポートし、より視覚的に豊かなインターフェースを可能にします。

**ステップ 1.** Seeed_GFX ライブラリからカラーサンプルスケッチを開きます：**File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**ステップ 2.** 前と同じプロセスに従って、スケッチと同じフォルダに `driver.h` という名前の新しいファイルを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) に移動し、デバイスリストから **reTerminal E1002** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** 生成された設定コードをコピーして `driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
</Tabs>

## EEZ Studio プロジェクトの Arduino へのデプロイ

まず、'Tools' メニューバーで OPI PSRAM を見つけて開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

これら2つの基盤ドライバーファイルをプロジェクトディレクトリに追加する必要があります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

- [e1002_display.cpp](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [e1002_display.h](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

以下のプロジェクトファイル（4つのファイルを含む）をArduinoライブラリに移植して、Arduinoプロジェクトで使用します。
`EEZ_UI file` は EEZStudio のビルドプロセス中に生成されます。保存したパスを見つける必要があります。

- 🔗 **[ZIP]** [コード](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

<br></br>

以下は UI を実行するメインの Arduino スケッチです：
3つのボタンが3つの異なる画面に対応し、緑から順番に HOME\Workstation\Plant で開始します。

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

- `e1002_display_init():` e-inkディスプレイハードウェアを初期化し、動作パラメータを設定します。

- `pinMode(..., INPUT_PULLUP):` ボタンピンを入力モードとして設定し、内部プルアップ抵抗を有効にします。これにより、ボタンが押されていない時はピンが高レベル（HIGH）を維持し、押されると接地に接続されて低レベル（LOW）になります。

- `ui_init()` と `loadScreen():` これらの関数は LVGL ユーザーインターフェースライブラリを初期化し、指定された画面を読み込みます

- `lv_timer_handler():` これは LVGL ライブラリの重要な関数で、アニメーションや画面更新などの LVGL 内のタイマーイベントを処理します。

- `if (lastKey0State == HIGH && currentKey0State == LOW):` この行はキーイベント検出の核心です。キーの状態が未押下から押下に変化したかどうかをチェックします。

- 条件が満たされると、プログラムは `page_index` を更新し、`loadScreen()` 関数を呼び出して新しいページを読み込みます。

- 状態更新：`lastKey0State = currentKey0State;` この行は重要です。現在のキー状態を保存して次の `loop()` 反復で使用し、次の状態比較を可能にします。

- E-ink リフレッシュ：`e1002_display_should_refresh()` と `e1002_display_refresh()` は E-ink 画面のリフレッシュを管理します。LCD 画面とは異なり、E-ink はリアルタイムでリフレッシュできません。通常、電力を節約し寿命を延ばすために、特定の間隔で選択的または全画面リフレッシュが必要です。このコードはそのオンデマンドリフレッシュメカニズムを実装しています。

- `delay(10)`: これは物理的なキーの振動を複数回の押下として誤解釈することを防ぐための簡単なソフトウェアデバウンス対策です。

## インターフェース表示図

<div class="table-center">
  <table align="center">
    <tr>
      <th>ホームページ</th>
      <th>ワークステーションページ</th>
      <th>写真ページ</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
