---
description: Grove - EMG検出器
title: Grove - EMG検出器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-EMG_Detector
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_product.jpg" /></div>

EMG検出器は人体と電気を繋ぐ橋渡しです。センサーは小さな筋肉信号を収集し、2次増幅とフィルタで処理します。出力信号はArduinoで認識できます。この信号を制御システムに追加できます。

:::note
このセンサーは医療目的には使用できません。
:::

待機モードでは、出力電圧は1.5Vです。筋肉の活動を検出すると、出力信号が上昇し、最大電圧は3.3Vです。このセンサーは3.3Vまたは5Vシステムで使用できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特徴
--------

- Grove互換
- 3.5mmコネクタ
- 6個の使い捨て表面電極
- 電源電圧：3.3V-5V
- 1000mmケーブルリード
- 追加電源不要

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応として記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示すものです。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_EMG_detector.jpg" /></div>

- J2：Groveインターフェース、アナログI/Oに接続
- J1：EMG使い捨て表面電極コネクタ
- U1：INA331IDGKT、差動増幅器
- U2、U3：OPA333、ゼロドリフト増幅器

デモンストレーション
-------------

このデモンストレーションでは、Grove - LCD RGB Backlightの使用方法を示します。Seeeduino V3.0、Grove - LED Bar、Grove - Base Shieldが必要です。

### ハードウェアの設置

Grove - Base ShieldをSeeduinoに接続し、Grove - LED BarをD8に、Grove - EMGセンサーをA0に接続します。

最後に、3つの電極を筋肉に貼り付け、各電極間に距離を保ちます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_connect.jpg" /></div>

:::tip
この製品の部品リストは最近更新されました。2つの仕様の接続ワイヤを受け取る場合がありますが、機能は完全に同じで、色のみが異なります。対応関係は下図に示されています。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/newline.png" /></div>
:::

### コードのダウンロードとアップロード

デモコードはgithubからダウンロードできます。[こちら](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code/)をクリックして、任意の場所に展開してください。

次に、コードをSeeduinoにアップロードします。コードのアップロードに問題がある場合は、Getting Started With Seeduinoを参照してください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_ide.png" /></div>

### 動作

デモコードのダウンロードが完了すると、初期化に約5秒かかります。初期化中は静止状態を保ってください。

初期化中、LED Barがレベル10からレベル0まで変化するのが確認できます。LED Barがすべて消灯したら、動作できます。

動作すると、LED Barのレベルが変化するのが確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_emg_demo_2.gif" /></div>


<!-- 
# Grove-EMGセンサー v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div> -->

リソース
--------

- [Grove-EMGセンサー v1.1 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip)
- [デモコード](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EMG_Detector -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

