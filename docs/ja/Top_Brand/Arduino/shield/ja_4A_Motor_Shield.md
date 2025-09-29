---
description: 4A_Motor_Shield
title: 4A モーターシールド

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/4A_Motor_Shield
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4A_Motor_Shield_top.jpg" alt="pir" width={600} height="auto" /></p>

4A モーターシールドは、Freescale MC33932 デュアル H-ブリッジパワー IC をベースにしており、単一ブリッジあたり最大 5.0A のピーク電流で誘導負荷を制御することができます。このシールドを使用すると、Arduino/Seeeduino ボードで 2 つの DC モーターを駆動し、それぞれの速度と方向を独立して制御できます。また、各モーターの電流吸収を測定することも可能です。  
オンボードの DC/DC コンバーターは非常に広い入力電圧範囲をサポートしており、最大 100mA の電流でマイクロコントローラーボードに 5V の電源を供給できます。そのため、モーターを駆動し、ロジック回路に電力を供給するために必要なのは 1 つの電源だけです。  

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4A-Motor-Shield-p-1954.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 仕様

- 動作電圧: 6V ~ 28V  
- DC/DC 出力: 5V 100mA @ "5V" ピン  
- 出力電流 (各チャンネル): 2A (連続動作) / 5A (ピーク)  
- 出力デューティ範囲: 0% ~ 100%  
- 出力短絡保護 (VPWR または GND への短絡)  
- 内部の一定オフタイム PWM による過電流制限 (調整)  
- 温度依存の電流制限閾値の減少  

## インターフェース

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4a_motor_shield_top_view.jpeg" alt="pir" width={600} height="auto" /></p>

**①：J1:** DC 入力コネクタ。  
**②：J2:** モータードライバー出力コネクタ。  
**③：EN, FT:** EN 制御および Fault フラグ検出用ジャンパー。EN ジャンパーを短絡すると、EN 信号が D4 ピンにマッピングされ、D4 ピンで H-ブリッジの出力を無効化したり Fault フラグをリセットしたりできます。FT ジャンパーを短絡すると、Fault フラグ信号が D3 ピンにマッピングされ、D3 ピンから Fault フラグを読み取ることができます。  
**④：IO:** ロジック電圧レベル選択ジャンパー。このジャンパーから制御ロジック電圧レベルを選択できます。  
**⑤：IA, IB:** 電流センサージャンパー。モーター電流を検出する必要がある場合は、これらのジャンパーを短絡する必要があります。モーター電流は電圧信号に変換され、A0, A1 ピンから読み取ることができます。  

**電源供給:** シールドを J1 (DC 入力コネクタ) から電源供給する必要があります。入力電圧範囲は 6Vdc ~ 28Vdc に設定できます。オンボードの DC/DC コンバーターは DC 入力電圧を 5Vdc 出力電圧に変換してロジック回路に供給します。DC/DC コンバーターはまた、最大 100mA の電流で "5V" ピンからマイクロコントローラーボード (Arduino/Seeeduino) に電力を供給することができます。  
**モーターインターフェース:** Out 1 と Out 2 (Out 3 と Out 4) は DC モーター用のモーター A (B) に接続します。  

## 注意事項

<span style={{color: 'red'}}>動作中に H-ブリッジ IC や PCB ボードに触れないでください。フルロード動作の場合、温度が最大 100 度に達する可能性があります。</span>

## デモンストレーション

### DC モーターを駆動する

DC モーターをモーターシールドの出力ピン OUT1 & OUT2 (OUT3 & OUT4) に接続します。そして、駆動電圧を電源端子に接続します。モータードライバーボードは Seeeduino に 5V の供給電圧を生成できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/Drive_DC_Motor.png" alt="pir" width={600} height="auto" /></p>

リソースセクションで提供されているライブラリを Arduino ライブラリファイルにインストールし、次のパスで例「DCMotorDemo」を見つけます: File->Example->MotorDrive->DCMotorDemo。  

このデモでは、モーターが 1 方向に 2 秒間回転し、1 秒間停止し、逆方向に 2 秒間回転します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/DC_Motor_Code.jpg" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- [回路図 pdf](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.pdf)  
- [Eagle ファイル](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip)  
- [モーターシールドライブラリ](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MotorDriver20121210.zip)  
- [MC33932 データシート](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MC33932.pdf)  

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>