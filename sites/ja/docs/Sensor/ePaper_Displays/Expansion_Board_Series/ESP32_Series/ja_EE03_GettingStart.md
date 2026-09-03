---
description: EE03 10.3インチE-inkドライバーボード入門ガイド
title: EE03 入門ガイド
keywords:
  - E-ink
  - ドライバーボード
  - 10.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.webp
slug: /getting_started_with_ee03
sidebar_position: 2
sku: 100080566
last_update:
  date: 9/2/2026
  author: Nemo
createdAt: '2026-03-02'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/ja/getting_started_with_ee03/
---

# XIAO ePaper Display Board - EE03 入門ガイド

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE03</th>
        <th>10.3" モノクロ ePaper ディスプレイ</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE03-p-6638.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100071485-10.3-monochrome-epaper-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/10-3inch-Monochrome-eInk-ePaper-Display-with-1404x1872-Pixels-p-6568.html?qid=BB9L37_r6uwit7x_1772441061474" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO ESP32-S3 Plus** を搭載した ePaper ドライバーボード EE03 は、**10.3 モノクロ ePaper ディスプレイ** をサポートします。JST 2.0 mm バッテリーコネクタ（電源スイッチ付き）、内蔵充電 IC を備え、1 つのリセットボタンと 3 つのユーザーボタンが付属しています。デジタルフォトフレームやインフォメーションボードなど、低消費電力の ePaper プロジェクトに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特長

- **XIAO ESP32-S3 Plus 内蔵:** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **10.3" モノクロ ePaper ディスプレイ専用サポート:** 10.3" 高速リフレッシュ ePaper ディスプレイ向けに特別設計されており、迅速なセットアップと安定した動作を実現します。
- **高速リフレッシュ対応:** 統合された T-CON タイミング制御により、高速駆動を正確に行い、オンボードの SHT40 がリアルタイムの温度検知を提供して波形補償を行います。
- **スイッチ付き BAT コネクタ:** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省エネを実現します。
- **ユーザーフレンドリーなボタン:** 1 つのリセットボタンと 3 つのユーザープログラマブルボタンを備え、プロジェクトの加速や機能のカスタマイズに柔軟性を提供します。
- **SenseCraft HMI ファームウェア書き込み済み:** SenseCraft HMI（AI 搭載ノーコード UI デザインプラットフォーム）により、接続するだけですぐに使い始められます。豊富なテンプレートから選択するか、ドラッグ＆ドロップ（必要に応じて AI 支援付き）で UI を構築し、数クリックで ePaper ディスプレイにデプロイできます。

### 仕様

| パラメータ | 説明 |
| :--- | :--- |
| **プロセッサ** | XIAO ESP32-S3 Plus |
| **ePaper コネクタ** | FPC 40 ピン 0.5mm |
| **バッテリーコネクタ** | JST 2.0mm |
| **スイッチ** | バッテリー電源 ON/OFF |
| **電源** | - 3.7V リチウムバッテリー<br/>- USB Type-C |
| **ボタン** | - 1x リセットボタン<br/>- 3x ユーザーボタン |

### 応用例

- **デジタル電子書籍リーダー:** 16 階調グレースケールと高速リフレッシュにより、紙のようなモノクロ読書体験を提供し、ページめくりをスムーズにし、より素早い更新を実現します。
- **リアルタイムダッシュボード:** 天気情報、カレンダー予定、重要な通知、エネルギー使用量、センサー状態、KPI などのデータウィジェットといったライブ情報を表示します。
- **セキュリティアラート:** 動体検知やドア／窓センサーの作動など、セキュリティイベントに関するアラートや通知を表示します。
- **公共交通到着ボード:** 日々の通勤向けに、バス／電車のリアルタイム到着時刻、ルート状況、サービスアラートを一目で確認できるよう表示します。

## ハードウェア概要
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: 電源供給およびファームウェア書き込み用。
- **FPC コネクタ**: ePaper ディスプレイを接続します。
- **リセットボタン**: ボードをリセットします。
- **ユーザーボタン**: ユーザー操作用のプログラマブルボタンです。
- **電源スイッチ**: バッテリー電源のオン／オフを制御します。
- **Boot ボタン**: ブートローダーモードに入るために使用します。
- **LED インジケータ**: 電源および充電状態を示します。
- **JST コネクタ**: バッテリー接続用の 2 ピン JST 2.0mm コネクタです。

## SenseCraft HMI の使い方

このセクションでは、EE03 を SenseCraft HMI プラットフォームに接続し、画面コンテンツをワイヤレスで簡単に更新する手順を説明します。

### 機器のセットアップ

**ステップ 1. 画面とボードを接続する**
ePaper 画面の FPC ケーブルを、EE03 ドライバーボード上のコネクタに慎重に接続します。ロック機構が確実に固定されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.gif" style={{width:800, height:'auto'}}/></div>

**ステップ 2. 電源を入れる**
USB Type-C ケーブルを使用して、EE03 ボードを電源（コンピュータまたは USB アダプタ）に接続します。電源投入後、画面がリフレッシュされ、ウェルカム画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300,height:'auto'}}/></div>

**ステップ 3. ネットワーク設定モードに入る**
ウェルカム画像の後、画面は自動的にリフレッシュされ、ネットワーク設定インターフェースが表示されます。これは、デバイスが Wi-Fi 接続の準備ができていることを示します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.png" style={{width:300,height:'auto'}}/></div>


### ネットワーク設定

**ステップ 4. 携帯電話で Wi-Fi を設定する**
携帯電話を使って、画面に表示されている QR コードをスキャンします。携帯電話上の指示に従い、ローカル Wi-Fi の SSID とパスワードを入力して、EE03 をインターネットに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**ステップ 5. ペアコードを取得する**
ネットワーク設定が成功すると、画面が再度リフレッシュされ、一意の **Pair Code** が表示されます。次のステップでこのコードが必要になります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### プラットフォームへのバインドと更新

**ステップ 6. SenseCraft HMI 上でデバイスをバインドする**
[SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device) にアクセスします。アカウントにログインし、デバイス管理セクションに移動して "New Device" を選択します。E-ink 画面に表示されている Pair Code を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**ステップ 7. 新しいインターフェースを作成してプッシュする**     
SenseCraft HMI プラットフォーム上で、10.3 インチ画面に適したテンプレートを選択して新しいインターフェースを作成するか、画像をアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.png" style={{width:500, height:'auto'}}/></div>

**ステップ 8. 画像を適用する**
作業が完了したら、"Apply" ボタンをクリックし、EE03 デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.png" style={{width:800, height:'auto'}}/></div>

**ステップ 9. 画面に表示する**
最後に、EE03 がデータを受信し、10.3 インチ画面が新しいコンテンツでリフレッシュされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.png" style={{width:300, height:'auto'}}/></div>


## Arduino の使い方

### Seeed GFX2 ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性は**ありません**。TFT ライブラリやその他の類似ディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX2 ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### プログラムの設定と書き込み

図のように、次のメニューからサンプルスケッチに移動します：
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → EE03 → 10.3 Monochrome ePaper Display → 10_3_inch_Monochrome_HelloWorld


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/8.png" style={{width:800, height:'auto'}}/></div>

その後、**Tools** -> **Board** -> **XIAO ESP32S3 Plus** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。 

PSRAM が有効になっていることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

その後、**Upload** をクリックしてコードをアップロードします。
これで、epaper 画面にフィードバックが表示されます！以下は HelloWorld サンプルの結果です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.png" style={{width:500, height:'auto'}}/></div>


## トラブルシューティング

**Q1: 電源を入れても画面がリフレッシュされません。**
*   FPC ケーブルが正しく挿入され、ロックされているか確認してください。
*   USB Type-C ケーブルが十分な電力を供給していることを確認してください。
*   Reset ボタンを押してボードを再起動してください。
*   Arduino ユーザーの場合：**Tools** → **PSRAM** → **OPI PSRAM** で PSRAM が有効になっていることを確認してください。

**Q2: Wi-Fi 設定に失敗します。**
*   使用している Wi-Fi ネットワークが 2.4GHz であることを確認してください。
*   Wi-Fi パスワードが正しく入力されているか確認してください。

**Q3: 画面表示がぼやけている、または残像があります。**
*   これは、長時間画面をリフレッシュしていない場合や、電源が不安定な場合に発生することがあります。HMI プラットフォームから画面を再度リフレッシュしてみてください。

**Q4: リフレッシュ中に画面から高周波のブーンという音がします。**
*   これは ePaper ディスプレイでは正常な動作です。高電圧駆動回路がリフレッシュサイクル中に可聴音を発生させますが、特に大きな画面で顕著です。これはハードウェアの故障を示すものではなく、リフレッシュが完了すると音は止まります。

**Q5: SenseCraft HMI デバイスのバインディングに失敗します。**
*   Pair Code が正しく入力されているか（大文字と小文字を区別）再確認してください。
*   デバイスのバインディング中、スマートフォンとデバイスが同じ 2.4GHz Wi-Fi ネットワークに接続されていることを確認してください。
*   デバイスがオフラインと表示される場合は、Reset ボタンを押してから、もう一度デバイスのバインディングを試してください。

## リソース
- **[PDF]** [Seeed Studio XIAO ePaper Display EE03 回路図](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE03 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。

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
