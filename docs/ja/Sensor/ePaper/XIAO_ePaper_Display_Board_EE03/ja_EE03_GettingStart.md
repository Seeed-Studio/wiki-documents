---
description: EE03 10.3インチE-inkドライバーボードのはじめ方
title: XIAO ePaper Display Board - EE03 入門ガイド
keywords:
  - E-ink
  - Driver Board
  - 10.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.jpg
slug: /ja/getting_started_with_ee03
last_update:
  date: 2026-02-28
  author: Jackson.Li
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

## はじめに

**XIAO ESP32-S3 Plus** を搭載した ePaper ドライバーボード EE03 は、**10.3 モノクロ ePaper Display** をサポートします。JST 2.0 mm バッテリーコネクタ（電源スイッチ付き）、内蔵充電 IC を備え、1 つのリセットボタンと 3 つのユーザーボタンが付属しています。デジタルフォトフレームやインフォメーションボードなど、低消費電力の ePaper プロジェクトに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特長

- **XIAO ESP32-S3 Plus 内蔵:** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **10.3インチ モノクロ ePaper Display 専用サポート:** 10.3インチ高速リフレッシュ ePaper ディスプレイ向けに特別設計されており、素早いセットアップと安定した動作を実現します。
- **高速リフレッシュ対応:** 統合された T-CON タイミング制御により、高速駆動を正確に行い、オンボードの SHT40 がリアルタイムの温度検知を行って波形補償を実現します。
- **スイッチ付き BAT コネクタ:** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省エネを可能にします。
- **ユーザーフレンドリーなボタン:** 1 つのリセットボタンと 3 つのユーザープログラマブルボタンを備え、プロジェクトの加速や機能のカスタマイズに柔軟性を提供します。
- **SenseCraft HMI ファームウェア書き込み済み:** SenseCraft HMI（AI 搭載ノーコード UI デザインプラットフォーム）により、接続するだけですぐに使い始められます。豊富なテンプレートから選択するか、ドラッグ＆ドロップ（必要に応じて AI 支援）で UI を構築し、数クリックで ePaper ディスプレイにデプロイできます。

### 仕様

| Parameter | Description |
| :--- | :--- |
| **Processor** | XIAO ESP32-S3 Plus |
| **ePaper Connector** | FPC 40 Pin 0.5mm |
| **Battery Connector** | JST 2.0mm |
| **Switch** | Battery Power ON/OFF |
| **Power Supply** | - 3.7V Li-Battery<br/>- USB Type-C |
| **Button** | - 1x Reset button<br/>- 3x User button |

### 応用例

- **デジタル電子書籍リーダー:** 16 階調グレースケールと高速リフレッシュにより、紙のようなモノクロ読書体験を提供し、ページめくりをスムーズにし、より素早い更新を実現します。
- **リアルタイムダッシュボード:** 天気情報、カレンダーの予定、重要な通知、エネルギー使用量、センサー状態、KPI などのデータウィジェットといったライブ情報を表示します。
- **セキュリティアラート:** 動体検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **公共交通到着ボード:** 日々の通勤向けに、バス／電車のリアルタイム到着時刻、ルート状況、サービスアラートを一目で確認できます。

## ハードウェア概要
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: 電源供給およびファームウェア書き込み用。
- **FPC Connector**: ePaper ディスプレイを接続します。
- **Reset Button**: ボードをリセットします。
- **User Buttons**: ユーザー操作用のプログラマブルボタンです。
- **Power Switch**: バッテリー電源のオン／オフを制御します。
- **Boot Button**: ブートローダーモードに入るために使用します。
- **LED Indicators**: 電源および充電状態を示すステータスインジケーターです。
- **JST Connector**: バッテリーを接続するための 2 ピン JST 2.0mm コネクタです。

## SenseCraft HMI の使い方

このセクションでは、EE03 を SenseCraft HMI プラットフォームに接続し、画面コンテンツをワイヤレスで簡単に更新する手順を説明します。
:::tip
SenseCraft HMI プラットフォームを使用する前に、**SenseCraft HMI EE03 firmware** を書き込む必要があります。
:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_0.jpg" style={{width:800,height:'auto'}}/></div>
### 機器のセットアップ

**Step 1. 画面とボードを接続する**
ePaper スクリーンの FPC ケーブルを、EE03 ドライバーボード上のコネクタに慎重に接続します。ロック機構が確実に固定されていることを確認してください。

**Step 2. 電源を入れる**
USB Type-C ケーブルを使用して、EE03 ボードを電源（コンピュータまたは USB アダプタ）に接続します。電源投入後、画面がリフレッシュされ、ウェルカム画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_1.jpg" style={{width:300,height:'auto'}}/></div>

**Step 3. ネットワーク設定モードに入る**
ウェルカム画像の後、画面は自動的にリフレッシュされ、Network Configuration インターフェースが表示されます。これは、デバイスが Wi-Fi 接続の準備ができていることを示します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.jpg" style={{width:300,height:'auto'}}/></div>


### ネットワーク設定

**Step 4. スマートフォンで Wi-Fi を設定する**
スマートフォンを使って、画面に表示されている QR コードをスキャンします。スマートフォン上の指示に従い、ローカル Wi-Fi の SSID とパスワードを入力して、EE03 をインターネットに接続します。

**Step 5. Pairing Code を取得する**
ネットワーク設定が成功すると、画面が再度リフレッシュされ、一意の **Pairing Code** が表示されます。次のステップでこのコードが必要になります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.jpg" style={{width:300,height:'auto'}}/></div>

### プラットフォームのバインドと更新

**Step 6. SenseCraft HMI 上でデバイスをバインドする**
[SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device) にアクセスします。アカウントにログインし、デバイス管理セクションに移動して "Add Device" を選択します。E-ink スクリーンに表示されている Pairing Code を入力します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_4.jpg" style={{width:800, height:'auto'}}/></div]
**Step 7. 新しいインターフェースを作成してプッシュする**     
SenseCraft HMI プラットフォーム上で、10.3インチスクリーンに適したテンプレートを選択して新しいインターフェースを作成するか、画像をアップロードします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_8.jpg" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_5.jpg" style={{width:800, height:'auto'}}/></div>

**Step 8. 画像を適用する**
作成が完了したら、"Apply" ボタンをクリックし、自分の EE03 デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_6.jpg" style={{width:800, height:'auto'}}/></div>

**Step 9. 画面に表示する**
最後に、EE03 がデータを受信し、10.3インチスクリーンが新しいコンテンツでリフレッシュされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300, height:'auto'}}/></div>


## Arduino ではじめる

### Seeed GFX ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリやその他の類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>
スクロールダウンして、このリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

自分のデバイスタイプを選択すると、いくつかのコードが生成されます。そのコードをコピーしておき、後で使用します。

:::tip
誤った選択をすると、画面には何も表示されません。

必ず正しいデバイスまたはコンポーネントタイプを選択してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/3.png" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>


### プログラムの設定と書き込み
図に示すサンプルを選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/4.png" style={{width:800, height:'auto'}}/></div>

新しい "driver.h" ファイルを作成し、そのコードを貼り付けます。コードは次のようになります:
```cpp
#define BOARD_SCREEN_COMBO 511 // 10.3 inch monochrome ePaper Screen（ED103TC2）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE03
```


その後、**Tools** -> **Board** -> **XIAO ESP32S3 Plus** および **Tools** -> **Port** -> **Select the port your board is connected to** を選択します。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.jpg" style={{width:1000, height:'auto'}}/></div>

PSAM が有効になっていることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

その後、**Upload** をクリックしてコードを書き込みます。
これで ePaper スクリーンにフィードバックが表示されます！以下は Bitmap サンプルの結果です。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.jpg" style={{width:500, height:'auto'}}/></div>


## トラブルシューティング

**Q1: 電源を入れても画面がリフレッシュされません。**
*   FPC ケーブルが正しく挿入され、ロックされているか確認してください。
*   USB Type-C ケーブルが十分な電力を供給していることを確認してください。
*   Reset ボタンを押してボードを再起動してください。

**Q2: Wi-Fi 設定に失敗します。**
*   Wi-Fi ネットワークが 2.4GHz であることを確認してください。
*   Wi-Fi パスワードが正しく入力されているか確認してください。

**Q3: 画面表示がぼやけている、または残像が出ます。**
*   これは、長時間画面がリフレッシュされていない場合や、電源が不安定な場合に発生することがあります。HMI プラットフォームから画面を再度リフレッシュしてみてください。

## リソース
- **[PDF]** [Seeed Studio XIAO ePaper Display EE03 回路図](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE03 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
