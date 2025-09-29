---
description: BeagleBone®シリーズ用Grove Cape
title: BeagleBone®シリーズ用Grove Cape
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Cape_for_BeagleBone_Series
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/img/Grove%20Cape%20for%20BeagleBone.jpg)

完全なオープンハードウェアであるBeagleBone®シリーズは、インターネットに接続し、Android 4.0やUbuntuなどのソフトウェアを実行するクレジットカードサイズのLinuxコンピュータです。AM335x 720MHz ARM®プロセッサによるリアルタイム分析のための豊富なI/Oと処理能力を備えたBeagleBone®は、機能を拡張するためのCapeプラグインボードで補完することができます。

このGrove - BeagleBone®シリーズ用Grove Capeは、BeagleBone®シリーズが豊富なGroveリソースと連携するための拡張ボードです。ボードにはUART、I2C、ADCなどの機能をカバーする6つの準備済みGroveソケットが搭載されています。この方法で、すべてのGroveモジュールがBeagleBone®ボードで利用可能になります。BeagleBone®を使ったプロジェクトを作成したい場合、センサーやディスプレイが必要ですか？このGrove - BeagleBone®シリーズ用Grove Capeがその利便性を提供します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)

## 仕様

---

* 電圧：3.3~5V
* 電流：&lt;0.5uA
* 寸法：69.9X54.8X17.5 mm
* デジタルI/Oポート電圧保護
* デジタル最大入力電圧：5V
* アナログ入力は分圧抵抗による、比率1.8/5
* アナログポート最大入力電圧：5V

## インターフェース

---

![](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/img/Grove_Cape_for_BeagleBone_Series.jpg)

**J1, J5:** I2Cに使用可能。

**J2, J6:** UARTに使用可能。

**J3, J7:** ADCに使用可能。

以下の表は、BeagleBone®シリーズ用Grove Capeボードへのピンマッピングを示しています：

<table cellSpacing={0} width="100%">
  <tbody><tr>
      <th scope="col"> Groveインターフェース</th>
      <th scope="col"> Groveピン</th>
      <th scope="col"> A/D</th>
      <th scope="col"> I²C</th>
      <th scope="col"> UART</th>
      <th scope="col"> BeagleBone®ピン</th>
      <th scope="col"> BeagleBone®機能</th>
    </tr>
    <tr>
      <td rowSpan={2}> J1</td>
      <td scope="row"> 1</td>
      <td></td>
      <td> SCL1</td>
      <td></td>
      <td> J8.17</td>
      <td> gpio[5]/</td>
    </tr>
    <tr>
      <td scope="row"> 2</td>
      <td></td>
      <td> SDA1</td>
      <td></td>
      <td> J8.18</td>
      <td> gpio[4]/</td>
    </tr>
    <tr>
      <td rowSpan={2}> J5</td>
      <td> 1</td>
      <td></td>
      <td> SCL2</td>
      <td></td>
      <td> J8.19</td>
      <td> gpio[13]/</td>
    </tr>
    <tr>
      <td> 2</td>
      <td></td>
      <td> SDA2</td>
      <td></td>
      <td> J8.20</td>
      <td> gpio[12]/</td>
    </tr>
    <tr>
      <td rowSpan={2}> J2</td>
      <td> 1</td>
      <td></td>
      <td></td>
      <td> RX1</td>
      <td> J8.26</td>
      <td> gpio[14]/</td>
    </tr>
    <tr>
      <td> 2</td>
      <td></td>
      <td></td>
      <td> TX1</td>
      <td> J8.24</td>
      <td> gpio[15]/</td>
    </tr>
    <tr>
      <td rowSpan={2}> J6</td>
      <td> 1</td>
      <td></td>
      <td></td>
      <td> RX2</td>
      <td> J8.22</td>
      <td> gpio[2]/</td>
    </tr>
    <tr>
      <td> 2</td>
      <td></td>
      <td></td>
      <td> TX2</td>
      <td> J8.21</td>
      <td> gpio[3]/</td>
    </tr>
    <tr>
      <td rowSpan={2}> J3</td>
      <td scope="row"> 1</td>
      <td> AIN0</td>
      <td></td>
      <td></td>
      <td> J8.39</td>
      <td></td>
    </tr>
    <tr>
      <td scope="row"> 2</td>
      <td> AIN1</td>
      <td></td>
      <td></td>
      <td> J8.40</td>
      <td></td>
    </tr>
    <tr>
      <td rowSpan={2}> J7</td>
      <td scope="row"> 1</td>
      <td> AIN2</td>
      <td></td>
      <td></td>
      <td> J8.37</td>
      <td></td>
    </tr>
    <tr>
      <td scope="row"> 2</td>
      <td> AIN3</td>
      <td></td>
      <td></td>
      <td> J8.38</td>
      <td></td>
    </tr></tbody></table>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/res/Grove_Cape_for_BeagleBone_Series_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Grove Cape for BeagleBone® Series Eagle ファイル](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/res/Grove_Cape_for_BeagleBone_Series_V1.0.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>