---
description: SDカードシールド V3.0
title: SDカードシールド V3.0
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SD_Card_Shield_V3.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: SDカードシールド V3.0
category: 廃止
bzurl:
oldwikiname: SD_Card_Shield_V3.0
prodimagename:
surveyurl: https://www.research.net/r/SD_Card_Shield_V3-0
sku:   
--- -->
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_shield.jpg)

SDカードシールド v3.0は、Arduinoプロジェクトにストレージを追加します。SD、SDHC、またはMicroSD TFカードをサポートしています。オンボードのトグルスイッチを使用してSDカードの種類を選択します。このカードは、SD/SDHCまたはMicroSDのいずれか1つの形式のみをサポートします。SDまたはMicroSDカードを使用する前に、シールドの「SELECT」スイッチを適切な設定に切り替えてください：SD/SDHCスロットまたはMicroSDスロットの方向へ。

SDカードシールド v3.0はArduinoのSPIポートのみを使用します。このシールドは積み重ね可能で、追加のシールドを上に重ねることができます。オンボードにはI2CおよびUARTポート用のGrove互換ソケットがあります。

SDカードシールド v3.0はピン10をチップセレクトとして使用します。他の積み重ねられたシールドが同じピンを使用していないことを確認してください。このシールドのバージョン4.0ではピン4を使用するバージョンがあります。

以下の行はユーザーが追加したものです：このシールドはArduino Mega 2560で問題なく動作しますが、適切な接続を行う必要があります。4または10 -> 53、11 -> 51、12 -> 50、13 -> 52。この配置は、これらのピンに他のものを割り当てない限り問題なく動作します。

**モデル: [INT106D1P](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)**

## 特徴  

* Arduino/Seeeduino互換<font color="red">(Megaには非対応)</font>

* Grove互換
* SDカード、Micro SDカード、SDHCカード対応
* 3.3Vおよび5V論理電圧対応
* 2.6~3.6V DC電源供給

## 仕様  

<table cellspacing="0" width="100%">
  <tr>
    <th scope="col"> 項目 </th>
    <th scope="col"> 最小値 </th>
    <th scope="col"> 標準値 </th>
    <th scope="col"> 最大値 </th>
    <th scope="col"> 単位 </th>
  </tr>
  <tr>
    <th scope="row"> 電圧 </th>
    <td> 2.7 </td>
    <td> 3.3 </td>
    <td> 3.6 </td>
    <td> V </td>
  </tr>
  <tr>
    <th scope="row"> 電流 </th>
    <td> 0.159 </td>
    <td> 40 </td>
    <td> 200 </td>
    <td> mA </td>
  </tr>
  <tr>
    <th scope="row"> 対応カードタイプ </th>
    <td colspan="3"> SDカード(&lt;=2G); Micro SDカード(&lt;=2G); SDHCカード(&lt;=16G) </td>
    <td> / </td>
  </tr>
  <tr>
    <th scope="row"> 寸法 </th>
    <td colspan="3"> 57.15x44.70x19.00 </td>
    <td> mm </td>
  </tr>
  <tr>
    <th scope="row"> 正味重量 </th>
    <td colspan="3"> 16.6 </td>
    <td> g </td>
  </tr>
</table>

## インターフェース機能  

![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_Card_interface.png)
 **D10** – SPIのCSに使用
 **D11** – SPIのMOSIに使用
 **D12** – SPIのMISOに使用
 **D13** – SPIのSCKに使用
 **Groveコネクタ** - 1つはUARTシリアルポート用、もう1つはI2Cポート用。

## 使用方法  

### ハードウェアのインストール  

SDカードシールドをArduinoに差し込みます。SDカードをソケットに挿入し、カードセレクタが正しい方向（標準カードまたはマイクロカード）を指していることを確認してください。その後、USBケーブルでArduinoをPCに接続します。
 **<font color="red">警告: SDカードとMicroSDカードを同時にシールドに挿入しないでください。</font>**
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_shield_hardware.jpg)

### ソフトウェア  

まず、[SDカードまたはMicro SDカード](https://www.seeedstudio.com/depot/sandisk-microsd%C3%82%E2%84%A2-card-2gb-p-546.html?cPath=178_182)を入手し、必要に応じてSDカードをFAT16またはFAT32としてフォーマットします。
以下のスクリーンショットのようにSDカードをフォーマットします：
 ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format.jpg) ![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format2.jpg)

1. **SdFat for Arduino**の最新バージョンをダウンロードします。

2. このパッケージを解凍し、Arduino-1.0プログラムに配置します: ..\arduino-1.0\libraries。

3. Arduinoボード（Arduino UNOやDuemilanoveなど）と使用しているCOMポートを選択します。

4. スケッチ _**Sdinfo**_ をアップロードします。以下の画像はシリアルモニターの結果です。もちろん、他のスケッチをアップロードすることもできます。
![](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_software.jpg)
5. エラーが発生した場合は、すべての手順を再確認し、SDカードが正常に動作していることを確認してください。それでも問題が解決しない場合は、SDカードを交換してみてください。
これで、GPSやリアルタイムクロックを使用した読み取り、書き込み、サンプルログの他のライブラリ例を確認できます。楽しんでください！

## FAQ  

1. SDカードが初期化できません。

2. SDカードをFAT/FTA32形式に再フォーマットしてください。それでも動作しない場合は、[SD Formatter](https://www.sdcard.org/downloads/formatter_3/)をダウンロードし、このソフトウェアでSDカードを再フォーマットすることをお勧めします。

## バージョントラッカー  

<table cellspacing="0" width="85%">
  <tr>
    <th scope="col"> リビジョン </th>
    <th scope="col"> 説明 </th>
    <th scope="col"> リリース日 </th>
  </tr>
  <tr>
    <td> v3.0 </td>
    <td> V3.0リリース </td>
    <td> 2012/3/29 </td>
  </tr>
  <tr>
    <td> v3.1 </td>
    <td> 電圧レギュレーターがMIC5205にアップグレード </td>
    <td> 2012/5/10 </td>
  </tr>
</table>

## SDカードシールド v3.1 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## SDカードシールド v3.0 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/ja/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース  

* **[Eagle]**  [SDカードシールド v3.1のEagleファイル](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip)

* **[PDF]** [SDカードシールドPDF](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD%20Card%20Shield.pdf)

* **[PDF]**   [SDカードシールド v3.1のPDFファイル](https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD_Card_Shield.pdf)

* **[Eagle]**   [SDカードシールド v3.0のEagleファイル](https://wiki.seeedstudio.com/ja/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP).

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>