---
description: EEZStudioを使用してアプリケーション目的でArduinoにデプロイする
title: reTerminal E Series ePaper Display と EEZStudio の連携
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /ja/reterminal_e10xx_with_eezstudio
sidebar_position: 6
last_update:
  date: 09/11/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E Series ePaper Display と EEZStudio の入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

## はじめに

このガイドでは、ビジュアルデザインツール **EEZStudio** を使用して reTerminal E Series 用のプロフェッショナルなユーザーインターフェースを設計する方法を説明します。UI要素の作成、必要なコードの生成、そして最終的に Arduino IDE を使用してデバイスにデプロイする方法を学習します。このプロセスにより、優れた視認性と超低消費電力を持つカスタムインターフェースを構築でき、HMIアプリケーションに最適です。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### EEZ Studio とは？

EEZ Studio は、主にテスト・測定機器、組み込みデバイス、その他のインタラクティブアプリケーション用のユーザーインターフェース構築のために開発された、現代的なビジュアルプログラミングおよびUI設計環境です。ドラッグアンドドロップGUI設計、スクリプト機能、デバイス統合ツールを組み合わせ、開発者、エンジニア、メーカーがゼロから始めることなく、迅速にプロフェッショナルなインターフェースを作成できるようにします。

簡単に言えば、EEZ Studio はハードウェアとソフトウェアの橋渡しとして機能し、ユーザーエクスペリエンスをより効率的に設計、プロトタイプ、デプロイできるようにします。

### なぜ EEZ Studio を使用するのか？

- ビジュアルインターフェース設計 – WYSIWYG エディターで複雑なUIを作成し、手動コーディングの必要性を削減
- 迅速なプロトタイピング – 設計アイデアを素早くテストし検証、開発時間とコストを節約
- クロスプラットフォーム対応 – 複数のオペレーティングシステムと組み込みターゲットで動作するアプリケーションを構築
- ハードウェアとの統合 – 実験機器、IoTデバイス、カスタムボードを直接接続・制御
- スクリプトによる拡張性 – Lua スクリプトを使用してロジック、自動化、高度な機能を追加
- オープンソースエコシステム – 透明性と柔軟性を持つコミュニティ主導のツールセットの恩恵

EEZ Studio を使用することで、コンセプトから動作するプロトタイプまでの時間を大幅に短縮でき、設計がプロフェッショナルで将来の要件に適応可能であることを保証できます。

### SquareLine Studio との違い

EEZ Studio と SquareLine Studio は両方ともGUI設計ツールですが、異なる目標とユーザーシナリオに焦点を当てています：

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
            <td>組み込みシステム（特にLVGL）用のGUI構築に焦点</td>
        </tr>
        <tr>
            <th>対象ユーザー</th>
            <td>エンジニア、製品開発者、メーカー、実験/テスト機器設計者</td>
            <td>組み込みUI開発者、愛好家、IoT製品設計者</td>
        </tr>
        <tr>
            <th>拡張性</th>
            <td>ロジック、自動化、デバイス制御のためのLuaスクリプトをサポート</td>
            <td>限定的なスクリプト（主にエクスポート後のCコードに依存）</td>
        </tr>
        <tr>
            <th>ハードウェア統合</th>
            <td>機器、測定デバイス、自動化システムとの直接統合</td>
            <td>主にディスプレイ/UI生成に焦点、外部デバイス統合は限定的</td>
        </tr>
        <tr>
            <th>オープンソース</th>
            <td>コミュニティ主導、透明性、拡張可能</td>
            <td>クローズドソース、ライセンス付き商用製品</td>
        </tr>
        <tr>
            <th>ワークフロー</th>
            <td>一つの環境でプロトタイプ、シミュレーション、実デバイス制御が可能</td>
            <td>主に組み込みプロジェクトにコンパイルされるUIコードを生成</td>
        </tr>
    </tbody>
</table>

## EEZ Studio の入門

### EEZ Studio のインストール

[EEZ Studio インストールリンク](https://www.envox.eu/studio/studio-introduction/) ダウンロードリンクにアクセス後、お使いのコンピューターと互換性のあるシステムバージョンを選択してダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>
### プロジェクトの作成

EEZ Studio インターフェースの上部にある「CREATE」ボタンをクリックします。
左側のプロジェクトテンプレートリストで「LVGL」プロジェクトを見つけて選択します。

- `Name:` プロジェクトファイルに名前を付けます。記事の後続内容の説明を便利にするため、ここでは EEZ_UI と呼びます。
- `LVGL Version:` プロジェクトで使用するLVGLライブラリのバージョンを指定します。ドロップダウンメニューから9.xを選択してください。
- `Location:` コンピューター上のプロジェクトファイルの保存パスを指定します。デフォルトパスは通常、EEZ Studio のダウンロードまたはインストールディレクトリ内のデフォルトプロジェクトフォルダーを指します（例：C:\Users\YourUser\Documents\EEZ Studio\Projects または類似のパス）。保存場所を変更する必要がある場合は、Location テキストボックスの右側にあるフォルダーアイコン（または省略記号 ...）をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### プロジェクトパラメータ設定とUIインターフェース設計

### UIインターフェース設計

UI（ユーザーインターフェース）設計は組み込み製品開発において重要で、ユーザーエクスペリエンスを直接決定します。美しく、直感的で、レスポンシブなインターフェースは、製品の使いやすさを向上させるだけでなく、全体的な魅力も高めます。

EEZ Studio では、コンポーネントをドラッグアンドドロップすることで迅速にインターフェースを組み立てることができます。Styles、Fonts、Bitmaps、Themes などのツールを活用して視覚効果を正確に制御し、プロフェッショナルで独特なユーザーエクスペリエンスを作り上げます。

以下は推奨ツールの紹介です：

- [Color](https://coolors.co/)
- [Color Chart](https://peiseka.com/)
- [Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)
- [Font](https://fonts.google.com/)

**右端のコンポーネントの紹介**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- Styles: インターフェース要素を統一し再利用するために使用される視覚属性で、一貫性と効率的なメンテナンスを保証します。
- Bitmap: 背景、アイコン、ロゴなどに一般的に使用され、視覚的プレゼンテーションを向上させます。
- Fonts: 明確なテキストの読みやすさを保証し、多言語コンテンツとブランドスタイリングをサポートします。
- Themes: 全体的なインターフェースの美学を定義し、ライト/ダークモードなどの迅速な切り替えを可能にします。
- Groups: 複数のウィジェットを一緒に整理し、統一された管理とレイアウトを行います。

このチュートリアルでは、ウェブサイトやアプリのホームページのUIを設計する方法をガイドします。コア技術をマスターすれば、簡単に任意のインターフェースを作成できるようになります。

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

ステップ 2. Panel を追加する

- Basic セクションから Panel コンポーネントをキャンバスにドラッグし、Width と Height を調整します。

- Color をチェックし、お好みの16進数カラーコードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

ステップ 3. Bitmaps を追加する

- 右端のサイドバーにある Bitmaps アイコンをクリックして画像を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

- 選択した画像に名前を付けます。後で命名規則に基づいて画像を選択する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

- Basic グループから Image コンポーネントをキャンバスにドラッグし、画像を選択して Scale を使用してサイズを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

ステップ 4 .線を追加

- Visualiserグループから線コンポーネントをキャンバスにドラッグします。Pointsの開始点と終了点を設定して、線の長さと高さを決定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

ステップ 5 .ラベルを追加

- BasicグループからLabelコンポーネントをキャンバスにドラッグし、フォントの色とフォーマット設定を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

- 右端の列にあるFontsボックスをクリックして、フォントフォーマットを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

- フォント名とサイズを設定します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

以上がこれら5つのコンポーネントの基本的な使用方法です。参考図または独自に設計したUIインターフェースに従って配置することができます。

### コード生成とデプロイ

UI設計を完了した後、プロジェクトを保存してシミュレーターでプレビューする必要があります。確認後、ビルド操作を実行してターゲットハードウェアで実行可能なコードファイルを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a20.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 1 .プロジェクトを保存**

インターフェース上部の保存アイコン（フロッピーディスク形状、「OPEN」ボタンの隣）をクリックしてプロジェクトを保存します。

**ステップ 2 .デザインをプレビュー**

ツールバーの実行アイコン（再生ボタン）をクリックしてシミュレーターを起動し、UI効果をインタラクティブにプレビューします。

**ステップ 3 .プロジェクトをビルド**

コンパイルアイコン（チェックマークボタン）をクリックして、プロジェクトの構文や論理エラーをチェックします。
ビルドアイコン（レンチボタン）をクリックして、UIコード、画像データ、フォントデータなどのファイルを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

**ステップ 4 .ビルド成功の確認**

完了すると、EEZ Studioは「Build successful」という緑色のプロンプトを表示し、コードが正常に生成されたことを示します。

## 環境準備

reTerminal E Series ePaper DisplayをArduinoでプログラムするには、ESP32サポート付きのArduino IDEをセットアップする必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

#### Arduino IDEセットアップ

**ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/software)をダウンロードしてインストールし、Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong>
    </a>
</div><br />

**ステップ 2.** Arduino IDEにESP32ボードサポートを追加します。

Arduino IDEで、**File > Preferences**に移動し、「Additional Boards Manager URLs」フィールドに以下のURLを追加します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**ステップ 3.** ESP32ボードパッケージをインストールします。

**Tools > Board > Boards Manager**に移動し、「esp32」を検索してEspressif SystemsのESP32パッケージをインストールします。

**ステップ 4.** 正しいボードを選択します。

**Tools > Board > ESP32 Arduino**に移動し、**XIAO_ESP32S3**を選択します。

**ステップ 5.** USB-Cケーブルを使用してreTerminal E Series ePaper Displayをコンピューターに接続します。

**ステップ 6.** **Tools > Port**から正しいポートを選択します。

## ePaper Displayプログラミング

**reTerminal E1001は7.5インチの白黒ePaper displayを搭載**し、**reTerminal E1002は7.3インチのフルカラーePaper displayを搭載**しています。両方のディスプレイは、様々な照明条件で優れた視認性を提供し、超低消費電力で、最小限の電力使用で常時表示が必要な産業用アプリケーションに最適です。

### Seeed_GFXライブラリの使用

ePaper displayを制御するために、様々なSeeed Studioディスプレイデバイスの包括的なサポートを提供するSeeed_GFXライブラリを使用します。

**ステップ 1.** GitHubからSeeed_GFXライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 2.** Arduino IDEでZIPファイルを追加してライブラリをインストールします。**Sketch > Include Library > Add .ZIP Library**に移動し、ダウンロードしたZIPファイルを選択します。

:::note
以前にTFT_eSPIライブラリをインストールしている場合、競合を避けるためにArduinoライブラリフォルダから一時的に削除または名前を変更する必要があります。Seeed_GFXはSeeed Studioディスプレイ用の追加機能を持つTFT_eSPIのフォークです。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="reTerminal E1001のプログラミング" default>
#### reTerminal E1001のプログラミング（7.5インチ白黒ePaper）

白黒ePaper displayでの基本的な描画操作を実演する簡単な例を見てみましょう。

**ステップ 1.** Seeed_GFXライブラリからサンプルスケッチを開きます：**File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**ステップ 2.** スケッチと同じフォルダに`driver.h`という名前の新しいファイルを作成します。Arduino IDEの矢印ボタンをクリックして「New Tab」を選択し、`driver.h`と名前を付けることで実行できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)に移動し、デバイスリストから**reTerminal E1001**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** 生成された設定コードをコピーして`driver.h`ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="Programming reTerminal E1002" label="reTerminal E1002のプログラミング">

#### reTerminal E1002のプログラミング（7.3インチフルカラーePaper）

フルカラーePaper displayは赤、黒、白の色をサポートし、より視覚的に豊かなインターフェースを可能にします。

**ステップ 1.** Seeed_GFXライブラリからカラーサンプルスケッチを開きます：**File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**ステップ 2.** 前と同じプロセスに従って、スケッチと同じフォルダに`driver.h`という名前の新しいファイルを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)に移動し、デバイスリストから**reTerminal E1002**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** 生成された設定コードをコピーして`driver.h`ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
</Tabs>

## EEZ StudioプロジェクトのArduinoへのデプロイ

以下のプロジェクトファイル（4つのファイルを含む）をArduino Libraryに移植して、Arduinoプロジェクトで使用します。
`EEZ_UI file`はEEZStudioのビルドプロセス中に生成されます。保存したパスを見つける必要があります。

- 🔗 **[ZIP]** [Code](https://files.seeedstudio.com/wiki/EEZStudio/E1002_EEZStudio.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

<br></br>

以下はUIを実行するメインのArduinoスケッチです：
3つのボタンが3つの異なる画面に対応し、緑から開始：HOME\Workstation\Plantの順序です。

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
        page_index = SCREEN_ID_PHOTO;
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

- `pinMode(..., INPUT_PULLUP):` ボタンピンを入力モードとして設定し、内部プルアップ抵抗を有効にします。これにより、ボタンが押されていない時はピンが高レベル（HIGH）を維持し、押された時はグランドに接続されて低レベル（LOW）になります。

- `ui_init()` と `loadScreen():` これらの関数はLVGLユーザーインターフェースライブラリを初期化し、指定された画面を読み込みます

- `lv_timer_handler():` これはLVGLライブラリの重要な関数で、アニメーションや画面更新などのLVGL内のタイマーイベントを処理します。

- `if (lastKey0State == HIGH && currentKey0State == LOW):` この行はキーイベント検出の核心部分です。キーの状態が未押下から押下に変化したかどうかをチェックします。

- 条件が満たされると、プログラムは `page_index` を更新し、`loadScreen()` 関数を呼び出して新しいページを読み込みます。

- 状態更新: `lastKey0State = currentKey0State;` この行は重要です。現在のキー状態を次の `loop()` 反復で使用するために保存し、次の状態比較を可能にします。

- E-inkリフレッシュ: `e1002_display_should_refresh()` と `e1002_display_refresh()` はE-ink画面のリフレッシュを管理します。LCD画面とは異なり、E-inkはリアルタイムでリフレッシュできません。通常、電力を節約し寿命を延ばすために、特定の間隔で選択的または全画面リフレッシュが必要です。このコードはそのオンデマンドリフレッシュメカニズムを実装しています。

- `delay(10)`: これは物理的なキーの振動を複数回の押下として誤認識することを防ぐための簡単なソフトウェアデバウンス対策です。

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

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

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
