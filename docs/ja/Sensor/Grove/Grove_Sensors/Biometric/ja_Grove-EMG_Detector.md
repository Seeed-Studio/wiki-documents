---
description: Grove - EMG Detector
title: Grove - EMG Detector
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-EMG_Detector
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_product.jpg" /></div>

EMG検出器は、人間の身体と電気をつなぐ橋渡し役です。このセンサーは微弱な筋肉信号を収集し、2段階の増幅とフィルタリングを行った後、Arduinoで認識可能な信号を出力します。この信号を制御システムに組み込むことができます。

:::note
このセンサーは医療目的には使用できません。
:::

待機モードでは、出力電圧は1.5Vです。筋肉の活動を検出すると、出力信号が上昇し、最大電圧は3.3Vになります。このセンサーは3.3Vまたは5Vシステムで使用できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特徴
--------

- Grove互換
- 3.5mmコネクタ
- 6枚の使い捨て表面電極
- 電源電圧：3.3V-5V
- 1000mmケーブルリード
- 追加の電源不要

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で言及されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_EMG_detector.jpg" /></div>

- J2: Groveインターフェース、アナログI/Oに接続
- J1: EMG使い捨て表面電極コネクタ
- U1: INA331IDGKT、差動増幅器
- U2, U3: OPA333、ゼロドリフト増幅器

デモンストレーション
-------------

このデモンストレーションでは、Grove - LCD RGBバックライトの使用方法を示します。Seeeduino V3.0、Grove - LEDバー、およびGrove - Base Shieldが必要です。

### ハードウェアのインストール

Grove - Base ShieldをSeeeduinoに接続し、Grove - LEDバーをD8に接続し、Grove - EMGセンサーをA0に接続します。

最後に、3つの電極を筋肉に貼り付け、各電極間に距離を保ちます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_connect.jpg" /></div>

:::tip
この製品の部品リストは最近更新されました。2種類の仕様の接続ワイヤを受け取る場合がありますが、それらの機能は完全に同一であり、色が異なるだけです。対応関係は以下の図に示されています。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/newline.png" /></div>
:::

### コードのダウンロードとアップロード

デモコードをGitHubからダウンロードできます。[こちら](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code/)をクリックして、任意の場所に解凍してください。

その後、コードをSeeeduinoにアップロードします。コードのアップロードに問題がある場合は、「Getting Started With Seeeduino」を参照してください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_ide.png" /></div>

### 動作

デモコードのダウンロードが完了すると、初期化に約5秒かかります。初期化中は静止してください。

初期化中、LEDバーがレベル10からレベル0に移動するのが確認できます。LEDバーがすべてオフになったら、動作を開始できます。

動作中、LEDバーのレベルが変化するのが確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_emg_demo_2.gif" /></div>

# Grove-EMG センサー v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/Grove-EMG_Sensor_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-EMG センサー v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
--------

- [Grove-EMG センサー v1.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/Grove-EMG_Sensor_v1.0.zip)
- [Grove-EMG センサー v1.1 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip)
- [デモコード](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_EMG_Detector から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>