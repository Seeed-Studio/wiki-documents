---
description: Raspberry Pi RS232 Board v1.0
title: Raspberry Pi RS232 Board v1.0
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Raspberry_Pi_R232_Board_v1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi-R232-Board-v1.0.jpg)

Raspberry Pi RS232 Board v1.0は、産業機器向けの標準通信ポートです。このモジュールはMAX3232をベースにしており、これはデュアルドライバ/レシーバで、単一の5V電源からTIA/EIA-232-F電圧レベルを供給するための容量性電圧ジェネレータを含んでいます。このシールドはDB9コネクタ（メス）を統合しており、RS232インターフェースを持つさまざまなデバイスとの接続を提供します。また、RS232ヘッダーは接続と試運転を容易にします。さらに、余分なスペースを最大限に活用するための溶接エリアを提供しており、プロトタイピングに非常に便利です。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-RS232-Board-v1.0-p-2408.html)

特徴
--------

- 低消費電流：300μA
- 保証データレート：120kbps
- 3.0VまでEIA/TIA-232仕様に準拠
- 業界標準MAX232とピン互換
- 保証スルーレート：6V/μs
- LEDインジケータ
- DB9コネクタ（メス）

仕様
-------------

<div style={{textAlign: 'center'}}>
<table>
  <thead>
    <tr>
      <th>項目</th>
      <th>最小</th>
      <th>典型</th>
      <th>最大</th>
      <th>単位</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>入力電圧範囲</td>
      <td>-25</td>
      <td>/</td>
      <td>25</td>
      <td>V</td>
    </tr>
    <tr>
      <td>入力しきい値低 (VCC=3.3V/5.0V)</td>
      <td>0.6 / 0.8</td>
      <td>1.2 / 1.5</td>
      <td>/</td>
      <td>V</td>
    </tr>
    <tr>
      <td>入力しきい値高 (VCC=3.3V/5.0V)</td>
      <td>/</td>
      <td>1.5 / 1.8</td>
      <td>2.4 / 2.4</td>
      <td>V</td>
    </tr>
    <tr>
      <td>最大データレート</td>
      <td>120</td>
      <td>235</td>
      <td></td>
      <td>kHz</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td>0</td>
      <td>/</td>
      <td>70</td>
      <td>℃</td>
    </tr>
    <tr>
      <td>寸法</td>
      <td colSpan="3">91.20 x 56.15 x 32</td>
      <td>mm</td>
    </tr>
  </tbody>
</table>
</div>

ハードウェア概要
------------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p2.jpg)

Raspberry Piに接続する場合、UARTピンを接続する必要があります。

使用方法
-----

Raspberry Piでシステムを構成するためにシリアルCOMポートを使用します。

### ハードウェアインストール

1. Raspberry PiとUSBからシリアルCOMポートラインを用意します。

2. 以下の図のように接続します：

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p5.jpg)

3. PCのデバイスマネージャで使用しているCOMポートを確認します。
4. シリアルポートアシスタントを実行し、以下のように設定します：

    COMポートはPCのデバイスマネージャで確認したものに設定してください。その後、Raspberry Piの電源を入れます。以下のようにシリアルポートアシスタントが表示されます。

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p6.jpg)

5. Raspberry Piとの通信が成功します。

    ![](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/img/Raspberry_Pi_RS232_Board_v1.0_p4.jpg)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [Raspberry_Pi_RS232_Board_v1.0_sch_pcb](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/Raspberry_Pi_RS232_Board_v1.0_sch_pcb.zip)
- [MAX3232](https://files.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0/res/MAX3232.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Raspberry_Pi_R232_Board_v1.0 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>