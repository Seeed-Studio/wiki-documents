---
description: テンプレート Wiki
title: テンプレート Wiki
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Name_your_website
last_update:
  date: 08/09/2023
  author: Example name
createdAt: '2023-08-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/Name_your_website/
---

# プロジェクト概要

:::note
これは Wiki を執筆するための基本的なガイドラインであり、よく使われる記述コードを含みます。
:::

これはこの Wiki の概要です。ここには次の内容を含める必要があります：

1. アプリケーションの表示図や主に使用する製品の写真
2. アプリケーションの原理
3. プロジェクトの簡単な紹介

## ハードウェアの準備

ここではハードウェアとして（Seeed 製品）を使用します。ここに含める内容は次のとおりです：

1. Seeed Studio で使用するすべての製品をリストアップし、テキストで記述した横並びの表と、「今すぐ入手」製品リンクを追加します。サンプルコードは以下のとおりです。
2. プロジェクトのハードウェア接続方法を図で示します

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32-S3（例）</th>
        <th>Seeed Studio Grove OLED Display 0.96（例）</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## ソフトウェアの準備

ここでは Thonny IDE ソフトウェア（Windows）と、いくつかの関連ライブラリおよびファイルを使用します。ここに含める内容は次のとおりです：

1. アプリケーションソフトウェアとダウンロードアドレス
2. ソフトウェアを開き、必要な依存関係またはライブラリをインストールする

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
        <th>関連ファイル（ライブラリ）</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 入門ガイド

### ステップごとの説明：プロジェクトはどのように実装されるか

1. 最初のステップのコードをある製品に書き込み、その効果を確認します
2. 2 番目のステップのコードを製品に書き込み、その効果を確認します
3. ...

## さらに詳しく

追加したい内容や、拡張したい内容を記載します。例えば：

- このアプリケーションの拡張
- 分野を広げる
- 発展的な思考を提供する

## トラブルシューティング

ハードウェア接続、ソフトウェアデバッグ、またはアップロードの過程で発生する可能性のある問題。

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

## ✨ その他の Wiki 機能コード

### 最初に記述するコード（必須）

```
---
description: // One sentence introduction of the project
title: // One short words introduction of the project
keywords:
//Enter the upper-level directory where the file is stored (Grove，SenseCAP，reTerminal...)
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: / The name of file
last_update:
  date: //The data finished wiki
  author: // author
---
```

### 画像コード

```cpp
<p style={{textAlign: 'center'}}><img src="image_link" alt="pir" width={600} height="auto" /></p>
```

### 動画コード

```cpp
<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
```

### ハイパーリンク

```cpp
<a  href="link" target="_blank"><span> PDF Download of SenseCAP S210X Sereis User Guide</span></a>
```

### ハイライトコード

```cpp

{code}

```

### コードを非表示にする

<details>

<summary> タイトルをここに入力</summary>

```cpp
#include
Print "code here"
```

</details>

### Arduino IDE ダウンロードボタン

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

### Github ライブラリダウンロードボタン

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### テーブルコード

ここにはハイパーリンク、画像リンク、表のタイトルが含まれます

<table align="center">
  <caption> <h2>タイトル</h2> </caption>
  <tbody>
    <tr>
    <td><h4>センサー</h4></td>
    <td><h4>ガスタイプ</h4></td>
    <td><h4>今すぐ入手</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>可燃性ガス、煙</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
        <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    </tr>
  </tbody></table>

### note

:::note
いくつかの *Markdown* `syntax` を用いた **コンテンツ**。 [this `api`](#) を確認してください。
:::

### tip

:::tip
いくつかの *Markdown* `syntax` を用いた **コンテンツ**。 [this `api`](#) を確認してください。
:::

### info

:::info
いくつかの *Markdown* `syntax` を用いた **コンテンツ**。 [this `api`](#) を確認してください。
:::

### danger

:::danger
いくつかの *Markdown* `syntax` を用いた **コンテンツ**。 [this `api`](#) を確認してください。
:::

### Caution

:::caution
いくつかの *Markdown* `syntax` を用いた **コンテンツ**。 [this `api`](#) を確認してください。
:::
