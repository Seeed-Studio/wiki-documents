---
title: Grove - ハプティックモーター
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Haptic_Motor/
slug: /ja/Grove-Haptic_Motor
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

Grove - ハプティックモーターは、[DRV2605L](http://www.ti.com/product/DRV2605L)を統合したGroveモジュールで、プロジェクトにより多くの感覚を与えることができます。このモーターは、振動レベルを上下させるなどのさまざまな効果を実現するために特別に設計されており、ウェアラブルやその他のIoTデバイスに適しています。現在、123種類の振動モードをシミュレートする使いやすいライブラリを開発しており、これによりプロトタイピングが迅速になります。また、DRV2605Lドライバーを使用して、加速度の一貫性、開始時間、停止時間の観点でアクチュエータの性能を向上させる高度な機能を開発することができます。このドライバーは、共有I2C互換バスまたはPWM入力信号を介してアクセス可能です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Haptic-Motor-p-2546.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## 特徴

- より多くの振動効果。
- プロジェクトのプロトタイピングプロセスを迅速化。
- 123種類の振動モードを備えた使いやすいライブラリ。
- より高度な機能を実現する強力なドライバー。

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| パラメータ                     | 値             |
|--------------------------------|----------------|
| 動作電圧                       | 3.3~5.0 V      |
| リップル（最大電力時）          | 50~100 mV      |
| 最大電力                       | 750 mW         |
| I2C速度                        | 100 kHz        |
| 振動効果                       | 123種類        |
| ドライバー                     | DRV2605L       |
| ポート                         | I<sup>2</sup>C |
| デフォルトI<sup>2</sup>Cアドレス | 0x5A           |

# 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## アプリケーションのアイデア

- 携帯電話、タブレット。
- ウェアラブルデバイス。
- リモコン、タッチ対応デバイス。
- 産業用ヒューマンマシンインターフェース。

## ハードウェア概要

**正面図:**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

**背面図:**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_back.jpg)

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください:

| Seeeduino V4.2 | ベースシールド | Grove - Haptic Motor |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html)|

- **ステップ 2.** Grove - Haptic MotorをGrove-Base ShieldのI2Cポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_haptic_motor_connection.jpg)

:::note
 Grove Base Shieldがない場合でも、以下のようにGrove - Haptic MotorをSeeeduinoに直接接続することができます。
:::

| Seeeduino       | Grove - Haptic Motor |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| SDA           | 白                   |
| SCL           | 黄                   |

#### ソフトウェア

- **ステップ 1.** [Grove_Haptic Motor](https://github.com/Seeed-Studio/Grove_Haptic_Motor/archive/master.zip)をGithubからダウンロードします。
- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ 3.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```cpp
#include <drv2605.h>

DRV2605 haptic;

void setup()
{
    Serial.begin(9600);
    /* ソフトウェアI2C = false, 詳細表示 = true */
    if (haptic.init(false, true) != 0) Serial.println("初期化に失敗しました！");
    if (haptic.drv2605_AutoCal() != 0) Serial.println("自動キャリブレーションに失敗しました！");
    delay(2000);
}

void loop()
{
/*
    unsigned char i;
    for(i=1;i<124;i++)
    {
        Serial.print("エフェクト番号: ");
        Serial.println(i);
        
        haptic.drv2605_Play_Waveform(i);
        delay(2000);
    }
*/
    haptic.drv2605_Play_Waveform(118);
    delay(2000);
}
```

- **ステップ 4.** 振動が確認できます。

:::warning
    電源が入っている状態でDRV2605Lドライバに触れると、損傷を引き起こす可能性があるため、絶対に触れないでください。
:::

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_cautions.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ライブラリ]** [Grove-Haptic Motor ライブラリ](https://github.com/Seeed-Studio/Grove_Haptic_Motor)
- **[Eagle]** [Grove-Haptic Motor 回路図](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip)
- **[PDF]** [Grove-Haptic Motor 回路図](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_SCH.pdf)
- **[データシート]** [DRV2605L ドライブ回路について詳しくはこちら](http://www.ti.com/product/DRV2605L)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>