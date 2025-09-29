---
description: Grove-Mega_Shield
title: Grove-Mega Shield

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Mega_Shield
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/500px-Megashieldn1_03.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mega Shieldは、Arduino MegaおよびGoogle ADK用の拡張ボードです。すべてのコネクタを4ピン（Signal 1、Signal 2、VCC、GND）の2mmコネクタに標準化し、サーボやエレクトロニックブリック用に3ピン（Signal、VCC、GND）の2.54mmヘッダーも一部残しています。これにより、電子プロジェクトの配線が簡素化されます。また、4ピンのバックル付きコネクタにより、配線の安定性が向上します。Mega Shieldにはデジタル0～21とアナログ0～15が含まれています。Xduino Mega/Google ADKと簡単に取り付けられるように、デジタル22～53は省略しています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mega-Shield-v12-p-2539.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴
---
- Arduino Mega1280/2560互換
- Grove互換
- Google ADK互換
- 寸法: 92.8 mm X 57.2 mm

## 機能ブロック
---
Grove - Mega Shieldの目的は、Xduino Mega/Google ADKの入出力ピンをGroveユニットに簡単に接続できるようにすることです。

各ソケットには対応するI/Oピンが明確にラベル付けされています。Grove - Mega Shieldは、リセットボタン、アナログエリア、デジタルエリア、電源エリアの4つのセクションに分けることができます。以下の図をご覧ください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield001.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mega Shieldのデジタルエリアは、GPIOの異なる機能に応じて4つのセクションに分けることができます：IIC（3つのコネクタ）、UART（UART0-3）、PWM（PWM2-13）、およびICSP（コネクタなし）。PWMには2つの形態があります：3ピン2.54mmヘッダーと標準の4ピン2mmコネクタです。これら2つの形態は異なる目的に使用されます。4ピン2mmコネクタは標準のGroveに接続でき、3ピン2.54mmヘッダーはサーボ、超音波距離測定モジュール、エレクトロニックブリックに接続できます。PWMで3ピンと4ピンモジュールを同時に使用する場合、同じGPIOを多重使用しないように注意してください。以下の図を参照してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield002.jpg" alt="pir" width={600} height="auto" /></p>

# Grove - メガシールド
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - メガシールド v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [Grove - Mega ShieldのEagleファイル](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip)
- [Grove - Mega Shield v1.1のEagleファイル](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip)

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