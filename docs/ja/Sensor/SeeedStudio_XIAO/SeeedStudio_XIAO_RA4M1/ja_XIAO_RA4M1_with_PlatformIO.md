---
description: Seeed Studio XIAO RA4M1 with PlatformIO
title: XIAO RA4M1 with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/ra4m1_with_platformio.webp
slug: /ja/xiao_ra4m1_with_platform_io
last_update:
  date: 04/07/2025
  author: Hugo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/ra4m1_with_platformio.jpg" /></div>

## PlatformIO の紹介

PlatformIO は多くの種類の開発ボードを統合した開発プラットフォームで、優れた拡張性を持っています。プラットフォームに必要なタイプがない場合は、手動で開発ボードのタイプを追加することができます。Arduino で書いたコードは、対応するライブラリを追加するだけで使用できます。

このwikiでは、PlatformIO でサンプルコードをインストールして実行する方法を紹介します。

## XIAO RA4M1 で PlatformIO を使用する

### セットアップ 1. 公式サイトから [PlatformIO](https://platformio.org/platformio-ide) をインストール

PlatformIO ソフトウェアをまだインストールしていない場合は、上記のリンクをクリックしてください。

### セットアップ 2. PlatformIO で任意のプロジェクトを作成

プラットフォームには既に XIAO ESP32S3 と XIAO ESP32C3 開発ボードのオプションがあるため、そのうちの1つを選択してファイルを作成できます。もちろん、他のファイルでも構いません。プロジェクト名も任意に選択できます。

<table align="center">
  <tr>
      <th>操作1</th>
        <th>操作2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
</table>

:::tip
これより前に、私は既に XIAO RA4M1 インストールパッケージをインストールしていたため、操作2の画像で XIAO RA4M1 のオプションが表示されていますが、操作を実行する際にはそれが表示されません。
:::

### セットアップ 3. platformio.ini ファイルを修正

PlatformIO ファイルの作成に成功すると、左列に多くのファイルが表示されます。platform.ini という名前のファイルが見えます。次に、その中身を置き換える必要があります。

<table align="center">
  <tr>
      <th>操作3</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/2.png" /></div>
  </tr>
</table>

以下のコードをコピーして、platform.ini ファイルの内容を置き換える必要があります。

```
[env:seeed_xiao_ra4m1]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-ra4m1
framework = arduino
```

:::tip
Ctrl + S を押してファイルを保存することを忘れないでください。ロードが開始されます。
:::

### セットアップ 4. コンパイルと書き込み

<table align="center">  
  <tr>  
      <th>操作4</th>  
  </tr>  
  <tr>  
      <td>  
          <div align="center">  
              <img width="500" src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/ra4m1_platformio_complied.png" />  
          </div>  
      </td>  
  </tr>  
</table>  

最終的に、上記の画像と同じ結果が表示されれば、XIAO RA4M1 開発ボードの追加に成功したことを意味します。再度プロジェクトを作成する際に、XIAO RA4M1 オプションが利用可能になります。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>