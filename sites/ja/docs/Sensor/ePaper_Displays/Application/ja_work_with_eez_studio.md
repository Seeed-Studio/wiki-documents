---
description: EEZ Studio を使って Seeed の ePaper 製品向けにプロフェッショナルな LVGL ベースのインターフェースを設計し、PlatformIO でデプロイします。reTerminal E シリーズおよび XIAO ePaper Display Board (EE04) の両方で動作します。
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
  date: 06/26/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-07-09'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# EEZ Studio を使う

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

このガイドでは、ビジュアルデザインツール [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/) を使ってプロフェッショナルなユーザーインターフェースを設計し、LVGL コードを生成して、PlatformIO で Seeed の ePaper 製品にデプロイする手順を説明します。フローはサポートされているすべてのボードで共通で、異なるのはディスプレイ解像度とボード環境だけであり、それらはタブで切り替えられるようになっています。

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
      <td align="center">ユニバーサルドライバ — Seeed の 24 ピンまたは 50 ピンの ePaper スクリーンのいずれとも組み合わせ可能</td>
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

EEZ Studio は、もともと計測器および組み込み機器向けに構築された、最新のビジュアルプログラミングおよび UI デザイン環境です。ドラッグ＆ドロップによる GUI デザイン、スクリプト、デバイス統合ツールを組み合わせることで、開発者、エンジニア、メイカーが、ゼロから始めることなくプロフェッショナルなインターフェースを素早く作成できるようにします。

要するに、EEZ Studio はハードウェアとソフトウェアの橋渡しを行い、ユーザー体験の設計、プロトタイピング、デプロイをより効率的に行えるようにします。

### EEZ Studio を使う理由

- **ビジュアルインターフェース設計** — WYSIWYG エディタで複雑な UI を作成。
- **迅速なプロトタイピング** — デザインアイデアを素早くテストして検証。
- **クロスプラットフォーム** — 複数の OS や組み込みターゲット上で動作するアプリを構築。
- **ハードウェア統合** — 計測器、IoT デバイス、カスタムボードに直接接続。
- **オープンソース** — コミュニティ主導のツールセットで、オプションのプレミアムサポートあり。

### EEZ Studio と SquareLine Studio の比較

どちらも GUI デザインツールですが、対象とするユーザー層が少し異なります。

<table>
    <thead>
        <tr><th>項目</th><th>EEZ Studio</th><th>SquareLine Studio</th></tr>
    </thead>
    <tbody>
        <tr>
            <th>主な目的</th>
            <td>計測器、組み込みシステム、ハードウェア／ソフトウェア統合</td>
            <td>組み込み GUI、特に LVGL を用いたもの</td>
        </tr>
        <tr>
            <th>対象ユーザー</th>
            <td>エンジニア、プロダクト開発者、メイカー、計測器デザイナー</td>
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
            <td>1 つの環境から実機をプロトタイピング、シミュレート、制御</td>
            <td>主に、組み込みプロジェクトにコンパイルするための UI コードを生成</td>
        </tr>
    </tbody>
</table>

## ステップ 1: EEZ Studio をインストールする

[公式サイト](https://www.envox.eu/studio/studio-introduction/)から、お使いのオペレーティングシステム向けの EEZ Studio をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/30.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 2: LVGL プロジェクトを作成する

EEZ Studio のインターフェース上部で **CREATE** をクリックします。左側で **LVGL** テンプレートを選択します。

- **Name** — プロジェクト名を付けます（この記事では `EEZ_UI` を使用します）。
- **LVGL Version** — ドロップダウンから `9.5.0` を選択します。
- **Location** — プロジェクトファイルの保存場所を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/31.png" style={{width:1000, height:'auto'}}/></div>

### プロジェクト設定

ツールバーの ⚙️ アイコンをクリックして Project Settings を開きます。

**General → Display** の下で、**使用するハードウェアに合わせて**解像度を設定します。

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(E1001 の 7.5インチ モノクロと E1002 の 7.3インチ Spectra 6 は、どちらも 800×480 の解像度を共有しています。)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/32.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="e1003" label="reTerminal E1003">

- **Display width**: 1872
- **Display height**: 1404

(E1003 の 10.3インチ モノクロパネルは 1872×1404 の解像度を使用します。)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/36.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="e1004" label="reTerminal E1004">

- **Display width**: 1200
- **Display height**: 1600

(E1004 の 13.3インチ Spectra 6 パネルは 1200×1600 の解像度を使用します。)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/37.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- **Display width**: 648
- **Display height**: 480

(値は、EE04 に接続している Seeed ePaper スクリーンに合わせて設定してください。以下の例では、5.83インチ 648×480 モノクロスクリーンを使用しています。)

</TabItem>
</Tabs>

## ステップ 3: UI をデザインする

UI デザインはユーザー体験を直接左右します。EEZ Studio では、コンポーネントをドラッグ＆ドロップし、**Styles**、**Fonts**、**Bitmaps**、**Themes**、**Groups** を使って見た目を制御することで、インターフェースを素早く組み立てることができます。

おすすめのオンラインリソース：

- [Coolors](https://coolors.co/) — カラーパレットジェネレーター
- [PeisekA](https://peiseka.com/) — カラーチャート
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) — アイコンライブラリ
- [Google Fonts](https://fonts.google.com/) — 無料フォント

右側のサイドバー：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/33.png" style={{width:1000, height:'auto'}}/></div>

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

**ステップ 1.** キャンバスの背景色を変更します — キャンバスを選択し、**Color** にチェックを入れて、16 進数の値を選びます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 2.** **Panel** をキャンバスにドラッグし、幅と高さを調整して、色を選びます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 3.** 右側の **Bitmaps** パネルからビットマップを追加して名前を付け、**Image** ウィジェットをキャンバスにドラッグして、ビットマップをバインドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** Visualiser グループから **Line** を追加し、その **Points** を設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 5.** **Label** を追加して色を選び、右側の **Fonts** パネルからフォントを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## ステップ 4: コードを生成する

デザインが完了したら、次の操作を行います。

1. **保存** — Control + S を押して保存します。macOS の場合は Command + S を押して保存します。
2. **プレビュー** — **Run** をクリックしてシミュレータを起動し、UI をプレビューします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/35.png" style={{width:600, height:'auto'}}/></div>

3. **Compile / Build** — エラーを確認するには ✓ アイコンをクリックし、その後レンチアイコンをクリックして、UI コード、画像データ、フォントデータを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/34.png" style={{width:600, height:'auto'}}/></div>

緑色の **Build successful** メッセージが表示されれば、コード生成が完了したことを示します。出力はプロジェクトの **`src/ui`** フォルダに保存されます（必要に応じて `src/EEZ_UI` にリネームできます）。

## ステップ 5: PlatformIO をセットアップする

PlatformIO を使って EEZ Studio の出力をデプロイします。PlatformIO は、Seeed ePaper 製品に必要なプロジェクト構造、ボード環境、ライブラリ依存関係、およびビルド設定を提供します。

Seeed ePaper 製品で PlatformIO を初めて使用する場合は、以下のリンク先のセットアップガイドに従って開発環境を構成してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/epaper_work_with_platformio/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}>PlatformIO ガイド</font></span></strong>
    </a>
</div><br />

:::tip
PlatformIO セットアップガイドでは、ボード定義、ライブラリ依存関係、およびビルド設定について説明しています。完了したら、このページに戻って作業を続けてください。
:::

## ステップ 6: EEZ Studio PlatformIO テンプレートをダウンロードする

reTerminal E シリーズ Firmware Hub を開きます：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Firmware Hub を開く</font></span></strong>
    </a>
</div><br />

Firmware Hub ページで、次の操作を行います：

1. **Official Platforms** の下で **EEZ Studio** カードを見つけ、クリックして展開します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/38.png" style={{width:800, height:'auto'}}/></div>

2. 使用するデバイス — **E1001**、**E1002**、**E1003**、または **E1004** — を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/39.png" style={{width:800, height:'auto'}}/></div>

3. ページにはテンプレートのステップバイステップの使用ガイドが表示されます。**Download project template** ボタンをクリックして、PlatformIO プロジェクトの ZIP を取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/40.png" style={{width:800, height:'auto'}}/></div>

## ステップ 7: EEZ Studio プロジェクトをデプロイする

テンプレートをダウンロードしたら、テンプレートの UI を EEZ Studio で生成したファイルに置き換えます。

1. ダウンロードしたテンプレートの ZIP を解凍します。
2. PlatformIO 拡張機能がインストールされた VS Code で、解凍したプロジェクトフォルダを開きます。
3. テンプレートプロジェクト内の `src/ui` ディレクトリに移動します。
4. `src/ui` 内のすべてのファイルを、ステップ 4 で EEZ Studio からエクスポートしたファイルに置き換えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/41.png" style={{width:800, height:'auto'}}/></div>

5. PlatformIO ツールバーで、使用しているボードに対応する正しい environment を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/42.png" style={{width:1000, height:'auto'}}/></div>

6. **Build** をクリックしてコンパイルし、その後 **Upload** をクリックして、デバイスにファームウェアを書き込みます。

:::tip
テンプレートには、デバイスに必要なすべてのドライバと LVGL 設定がすでに含まれています。UI ファイルを置き換えるだけで構いません。
:::

### 生成される画面

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

## 参考情報 & リソース

- [EEZ Studio PlatformIO テンプレート & ソースコード](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/EEZStudio)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
