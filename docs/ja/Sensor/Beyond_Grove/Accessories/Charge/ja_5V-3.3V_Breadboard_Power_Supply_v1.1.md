---
title: 5V-3.3V ブレッドボード電源 v1.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/5V-3.3V_Breadboard_Power_Supply_v1.1/
slug: /ja/5V-3.3V_Breadboard_Power_Supply_v1.1
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/5V-3.3V_Breadboard_Power_Supply_v1.1/img/Supply.jpg)

SeeedStudio によって設計された 5V/3.3V ブレッドボード電源です。この電源は DC ウォールアダプターから直接電力を供給し、選択可能な 5V または 3.3V の安定化電圧を出力します。他のブレッドボード電源設計と比較して、この製品は Seeeduino のように mini-USB ポートを備えており、スイッチを切り替えて電源を選択することができます。5V/3.3V ブレッドボード電源には mini-USB ポートと電源ジャックポートが含まれています。この電源は幅 5.3cm のブレッドボードに適合します（例：[Bread board Clear - 8.2 x 5.3cm](https://www.seeedstudio.com/depot/bread-board-clear-82-x-53cm-p-262.html?cPath=175_176)）。また、幅 5.5cm のブレッドボードにも適合します（例：[Basic Bread board - 16.5*5.5 cm](https://www.seeedstudio.com/depot/basic-bread-board-16555-cm-p-4.html?cPath=175_176)）、ただし少しきつめです。

このボードを使用すると、ブレッドボードの両方の電源ラインに電力を供給することができ、各側にはオン/オフスイッチがあります。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/5V-3.3V-Breadboard-Power-Supply-p-566.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴  

* 5V/3.3V の安定化電圧
* デュアルライン出力
* 各ラインの電源選択を個別に設定可能
* デュアル電源ポート入力
* ブレッドボード使用向けに特別設計

## 仕様  

<table>
  <tbody><tr>
      <th> 仕様</th>
      <th> 条件</th>
      <th> 最小</th>
      <th> 標準</th>
      <th> 最大</th>
      <th> 単位</th>
    </tr>
    <tr>
      <td width={200}> 入力電圧</td>
      <td width={400}></td>
      <td width={100}> 5.0</td>
      <td width={100}> 6.5</td>
      <td width={100}> 12.0</td>
      <td width={100}> V</td>
    </tr>
    <tr>
      <td rowSpan={2}> 出力電圧</td>
      <td> チャンネル 3.3V</td>
      <td> 3.235</td>
      <td> 3.3</td>
      <td> 3.365</td>
      <td> V</td>
    </tr>
    <tr>
      <td> チャンネル 5V: 10mA≤IOUT≤600mA, 6.5V≤VIN ≤12V</td>
      <td> 4.9000</td>
      <td> 5.0</td>
      <td> 5.100</td>
      <td> V</td>
    </tr>
    <tr>
      <td> 出力電流</td>
      <td></td>
      <td></td>
      <td></td>
      <td> 800</td>
      <td> mA</td>
    </tr>
  </tbody>
</table>

## 使用方法  

### ハードウェアのインストール  

1. ピンヘッダーの極性をブレッドボードに合わせます。（通常、赤は +、青は -）
2. 電源ボードをブレッドボードに完全に差し込みます。

これで、2つのジャンパーで電源を無効化したり、縦型スイッチを調整して異なる電圧を選択したりできます。横型スイッチはジャックピンまたは mini USB ケーブルを入力として選択するために使用します。

![](https://files.seeedstudio.com/wiki/5V-3.3V_Breadboard_Power_Supply_v1.1/img/Breadboard_power.jpg)

## サポート  

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または[ウィッシュ](http://wish.seeedstudio.com)で議論することができます。

## バージョントラッカー  

<table>
  <tbody><tr>
      <th> リビジョン</th>
      <th> 説明</th>
      <th> リリース</th>
    </tr>
    <tr>
      <td width={300}> v1.0b</td>
      <td width={500}> 初回公開リリース</td>
      <td width={200}> 2009年11月16日</td>
    </tr>
    <tr>
      <td width={300}> v1.1</td>
      <td width={500}> JST 電源コネクタを DC ジャックコネクタに変更</td>
      <td width={200}> 2011年9月20日</td>
    </tr>
  </tbody>
</table>

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Files/106100000/Res/5V-3.3V_Breadboard_Power_Supply_v1_1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Eagle](https://files.seeedstudio.com/wiki/Bazzar_Files/106100000/Res/5V-3.3V_Breadboard_Power_Supply_v1_1.rar)

## ライセンス  

このドキュメントは Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードとライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細についてはソースコードファイルを参照してください。

## 技術サポートと製品ディスカッション  

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>