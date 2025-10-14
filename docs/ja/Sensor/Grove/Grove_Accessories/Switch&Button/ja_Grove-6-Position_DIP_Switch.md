---
description: Grove - 6-Position DIPスイッチ
title: Grove - 6-Position DIPスイッチ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-6-Position_DIP_Switch
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/main.jpg" /></div>

Grove - 6-Position DIPスイッチは、6つの個別スイッチポジションを持ち、I2Cを使用してデータを送信します。マルチチャンネル制御スイッチとして非常に優れています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 6-Position DIPスイッチ | 初期リリース                                                                                               | 2018年6月      |

## 特徴

- 6つの個別スイッチ
- 優れた耐熱性
- 長寿命
- Grove互換

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|インターフェース|I2C|
|デフォルトI2Cアドレス|0x03|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 13mm|
|重量|5g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 10mm|
|総重量|11g|

## 応用例

- 多機能制御

## ハードウェア概要

### ピンマップ

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/pin_map_back.jpg" /></div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 6-Position DIP Switch |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。お持ちのケーブルが適切かどうかわからない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - 6-Position DIP SwitchをBase Shieldの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/connect.jpg" /></div>

:::note
Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino     |  Grove - 6-Position DIP Switch           |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| SDA           | 白                   |
| SCL           | 黄                  |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** Githubから[Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch)ライブラリをダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。以下のパスから例を開きます：**File --> Examples --> Grove Multi Switch Library --> Grove_Switch_Events**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/path.jpg" /></div>

または、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp
#include "Grove_Multi_Switch.h"

GroveMultiSwitch mswitch[1];
const char* grove_5way_tactile_keys[] = {
 "KEY A",
 "KEY B",
 "KEY C",
 "KEY D",
 "KEY E",
};
const char* grove_6pos_dip_switch_keys[] = {
 "POS 1",
 "POS 2",
 "POS 3",
 "POS 4",
 "POS 5",
 "POS 6",
};

const char** key_names;

int deviceDetect(void) {
 if (!mswitch->begin()) {
  Serial.println("***** デバイスの検出に失敗しました *****");
  return -1;
 }

 Serial.println("***** デバイスの検出に成功しました *****");
 if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
  Serial.println("Grove 5-Way Tactile Switchが挿入されました！");
  key_names = grove_5way_tactile_keys;
 } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
  Serial.println("Grove 6-Position DIP Switchが挿入されました！");
  key_names = grove_6pos_dip_switch_keys;
 }

 // イベント検出を有効化
 mswitch->setEventMode(true);

 // デバイスモデルを報告
 Serial.print("A ");
 Serial.print(mswitch->getSwitchCount());
 Serial.print(" ボタン/スイッチ デバイス ");
 Serial.println(mswitch->getDevVer());
 return 0;
}

void setup()
{
 Serial.begin(115200);
 Serial.println("Grove Multi Switch");

 // 初期デバイス検出
 if (deviceDetect() < 0) {
  Serial.println("Grove 5-Way Tactileを挿入してください");
  Serial.println("またはGrove 6-Position DIP Switchを挿入してください");
  for (;;);
 }

 return;
}

void loop()
{
 GroveMultiSwitch::ButtonEvent_t* evt;

 delay(1);

 evt = mswitch->getEvent();
 if (!evt) {
  // 動的デバイス検出
  deviceDetect();
  delay(1000);
  return;
 }

 if (!(evt->event & GroveMultiSwitch::BTN_EV_HAS_EVENT)) {
  #if 0
  Serial.print("イベントなし, errno = ");
  Serial.println(mswitch->errno);
  #endif
  return;
 }

 for (int i = 0; i < mswitch->getSwitchCount(); i++) {
  Serial.print(key_names[i]);
  Serial.print(": RAW - ");
  Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
               "HIGH ": "LOW ");
  if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
                "RELEASED ": "PRESSED ");
  } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
                "OFF ": "ON ");
  }
  Serial.println("");
 }

 for (int i = 0; i < mswitch->getSwitchCount(); i++) {
  if (evt->button[i] & ~GroveMultiSwitch::BTN_EV_RAW_STATUS) {
   Serial.println("");
   Serial.print(key_names[i]);
   Serial.print(": EVENT - ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_SINGLE_CLICK) {
   Serial.print("シングルクリック ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_DOUBLE_CLICK) {
   Serial.print("ダブルクリック ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LONG_PRESS) {
   Serial.print("長押し ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LEVEL_CHANGED) {
   Serial.print("レベル変更 ");
  }
 }
 Serial.println("");
}

```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニタ** を開くには、**ツール -> シリアルモニタ** をクリックします。または `ctrl`+`shift`+`m` キーを同時に押します。ボーレートを **115200** に設定してください。

:::tip
すべてが正常に動作していれば、結果が表示されます。例えば、デフォルトではスイッチがオフ（High）になっていますが、**Switch6** を **ON** にすると、出力は **POS 6: RAW - LOW ON** になります。
:::

```cpp
Grove Multi Switch
***** デバイスプローブ OK *****
Grove 6-Position DIP Switch 挿入済み！
A 6 ボタン/スイッチ デバイス BN-6--0.1
POS 1: RAW - HIGH OFF 
POS 2: RAW - HIGH OFF 
POS 3: RAW - HIGH OFF 
POS 4: RAW - HIGH OFF 
POS 5: RAW - HIGH OFF 
POS 6: RAW - LOW ON 

POS 6: EVENT - LEVEL-CHANGED 
POS 1: RAW - LOW ON 
POS 2: RAW - HIGH OFF 
POS 3: RAW - HIGH OFF 
POS 4: RAW - HIGH OFF 
POS 5: RAW - HIGH OFF 
POS 6: RAW - LOW ON 
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 6-Position DIP Switch eagle ファイル](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip)
- **[Zip]** [Grove Multi Switch ライブラリ](https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/res/Grove-6-Position_DIP_Switch.zip)

## プロジェクト

この製品の紹介動画です。簡単なデモが含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>