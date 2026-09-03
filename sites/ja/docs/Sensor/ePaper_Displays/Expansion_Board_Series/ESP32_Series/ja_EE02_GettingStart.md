---
description: EE02 13.3インチ E-ink ドライバボード入門ガイド
title: EE02 入門ガイド
keywords:
  - E-ink
  - ドライバボード
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
sidebar_position: 1
slug: /getting_started_with_ee02
sku: 100067144
last_update:
  date: 8/18/2026
  author: Nemo
createdAt: '2025-12-19'
updatedAt: '2026-08-25'
url: https://wiki.seeedstudio.com/ja/getting_started_with_ee02/
---

# XIAO ePaper Display Board - EE02 入門ガイド

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE02</th>
        <th>13.3" spectra™ 6 E-Ink Display</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-xiao-epaper-display-board-ee02.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE02-p-6639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100088646-13.3-elnk-spectra-6-color-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/13-3inch-Six-Color-eInk-ePaper-Display-with-1200x1600-Pixels-p-6569.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## はじめに

**XIAO ePaper Display Board EE02** は、**13.3インチ Spectra™ 6 6色**電子ペーパーディスプレイ専用に設計された高性能な ePaper スクリーンドライバボードです。**XIAO ESP32-S3 Plus** を搭載し、Wi-Fi と Bluetooth 接続をサポート、さらに **SenseCraft HMI ファームウェアがプリインストール** されているため、AI を活用したドラッグ＆ドロップの UI デザインをコード不要で実現できます。リアルタイムダッシュボード、デジタルサイネージ、スマートホームコントロールパネルなど、ワイヤレスディスプレイ用途に最適なソリューションです。

小型画面向けに設計された EE04（兄弟モデル）と同様に、EE02 は大画面 ePaper ディスプレイを IoT プロジェクトに統合したい開発者にシームレスな体験を提供します。駆動プロセスを簡素化し、SenseCraft HMI プラットフォームをサポートすることで、コンテンツ管理も容易になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特長

- **XIAO ESP32-S3 Plus 内蔵:** 対応する ePaper ディスプレイに接続するだけで、すぐに動作します。
- **13.3" Spectra™ 6 E-Ink 専用サポート:** 13.3" Spectra™ 6 ディスプレイ専用に設計されており、迅速なセットアップと安定した動作を実現します。
- **スイッチ付き BAT コネクタ:** シンプルなバッテリー接続を提供し、スイッチを統合することで効率的な電源管理と省電力を可能にします。
- **ユーザーフレンドリーなボタン:** リセットボタン 1 個とユーザーがプログラム可能なボタン 3 個を備え、プロジェクトのスピードアップや機能のカスタマイズに柔軟に対応できます。
- **SenseCraft HMI ファームウェアをプリインストール:** SenseCraft HMI（AI を活用したノーコード UI デザインプラットフォーム）を使って、接続するだけですぐに使い始められます。豊富なテンプレートから選択するか、ドラッグ＆ドロップ（必要に応じて AI 支援付き）で UI を構築し、数クリックで ePaper ディスプレイにデプロイできます。

### 仕様

| パラメータ | 説明 |
| :--- | :--- |
| **コントローラ** | XIAO ESP32-S3 Plus |
| **ePaper コネクタ** | FPC 60 ピン、0.5mm ピッチ |
| **対応スクリーンサイズ** | 13.3インチ E-ink ディスプレイ |
| **接続方式** | Wi-Fi 802.11 b/g/n、Bluetooth 5.0 (LE) |
| **電源** | USB Type-C から 5V / 3.7V リチウムバッテリー（JST 2.0mm） |
| **バッテリーコネクタ** | JST 2.0mm 2ピン |
| **動作電圧** | 3.3V |
| **インターフェース** | USB Type-C、ePaper 用 FPC コネクタ |
| **寸法** | 80mm x 43mm x 7mm |
| **動作温度** | -20°C ～ 70°C |
| **スイッチ** | バッテリー電源の ON/OFF |
| **ボタン** | リセットボタン 1 個 <br/> ユーザーボタン 3 個 |

### 用途

- **リアルタイムダッシュボード**: 天気、株価、交通情報、ホームオートメーションデータなどのライブ情報表示。
- **セキュリティアラート**: セキュリティシステムの状態や警告メッセージを表示する低消費電力の通知ディスプレイ。
- **デジタルフォトフレーム**: 穏やかなリフレッシュと超低消費電力を備えた ePaper フォトフレーム。
- **公共交通到着ボード**: 駅や停留所でのバス／電車の到着情報表示。
- **デジタルサイネージ**: レストランメニュー、会議室サイン、小売店のプライスタグなど。
- **スマートホーム**: 天気、カレンダー、ホームオートメーションの状態を表示する情報ダッシュボード。
- **産業用 HMI**: 機械や倉庫管理向けの低消費電力ステータスディスプレイ。
- **教育**: 電子書籍リーダーや教室用インフォメーションボード。
- **オフィス**: デスクネームプレートや掲示板。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: 電源供給およびファームウェア書き込み用。
- **FPC コネクタ**: 13.3インチ E-ink ディスプレイを接続します。
- **リセットボタン**: ボードをリセットします。
- **ボタン**: 「ページをリフレッシュ」「前のページに切り替え」「次のページに切り替え」の機能を持ちます。
- **スイッチ**: バッテリー電源のオン／オフを制御します。
- **Boot ボタン**: ブートローダーモードに入るために使用します。
- **LED インジケータ**: 点滅している場合はバッテリー未接続を示します。緑色の点灯はバッテリー充電中を示します。
- **JST コネクタ**: バッテリー接続用の 2 ピン JST 2.0mm コネクタ。

## SenseCraft HMI の使い方

このセクションでは、EE02 を SenseCraft HMI プラットフォームに接続し、画面コンテンツをワイヤレスで簡単に更新する手順を説明します。

### 事前準備

始める前に、以下を用意してください：

- SenseCraft HMI プラットフォーム用の Seeed Studio アカウント（まだお持ちでない場合は [こちらから登録](https://sensecraft.seeed.cc/hmi)）
- 2.4GHz Wi-Fi ネットワーク（5GHz は非対応）

### 機器のセットアップ

**ステップ 1. 画面とボードを接続**
13.3インチ E-ink スクリーンの FPC ケーブルを、EE02 ドライバボード上のコネクタに慎重に接続します。ロック機構が確実に固定されていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.gif" style={{width:800, height:'auto'}}/></div>

**ステップ 2. 電源を入れる**
USB Type-C ケーブルを使用して、EE02 ボードを電源（PC または USB アダプタ）に接続します。電源投入後、画面がリフレッシュされ、ウェルカム画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**ステップ 3. ネットワーク設定モードに入る**
ウェルカム画像の後、画面は自動的にリフレッシュされ、ネットワーク設定インターフェースが表示されます。これは、デバイスが Wi-Fi 接続の準備ができていることを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### ネットワーク設定

**ステップ 4. スマートフォンで Wi-Fi を設定**
スマートフォンを使って画面に表示されている QR コードをスキャンする（または表示されているホットスポットに接続する）ことで、案内に従いローカル Wi-Fi の SSID とパスワードを入力し、EE02 をインターネットに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**ステップ 5. ペアリングコードを取得**
ネットワーク設定が成功すると、画面が再度リフレッシュされ、一意の **ペアリングコード**（またはデバイス ID）が表示されます。次のステップでこのコードを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.jpg" style={{width:300,height:'auto'}}/></div>

### プラットフォームへのバインドと更新

**ステップ 6. SenseCraft HMI でデバイスをバインド**
[SenseCraft HMI プラットフォーム](https://sensecraft.seeed.cc/hmi/device) にアクセスし、アカウントにログインします。デバイス管理セクションに移動して「New Device」を選択し、E-ink 画面に表示されているペアリングコードを入力して、デバイスをアカウントにバインドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**ステップ 7. 新しいインターフェースを作成してプッシュ**
SenseCraft HMI プラットフォーム上でエディタを使用し、新しいインターフェース（例：画像をアップロードする、ダッシュボードをデザインする）を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.png" style={{width:500, height:'auto'}}/></div>

**ステップ 8. 画像を適用する**
作成が完了したら、右上の "Apply" ボタンをクリックし、画像を受信させたいデバイスを選択します。EE02 はデータを受信し、13.3インチスクリーンを新しいコンテンツでリフレッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/12.png" style={{width:800, height:'auto'}}/></div>

**ステップ 9. 画面に表示**

最後に、EE02 がデータを受信し、13.3インチスクリーンを新しいコンテンツでリフレッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/13.png" style={{width:300, height:'auto'}}/></div>

## Arduino の使い方

### Seeed GFX2 ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同等の機能を持ちますが、互換性は **ありません**。すでに TFT ライブラリや類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
:::

GitHub から Seeed GFX2 ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>クリックしてダウンロード</button></p>
</a>
</div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>

### プログラムの設定と書き込み

画像に示すように、次のメニューからサンプルへ移動します：
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → EE02 → 13.3-inch ePaper Displays → 13_3_inch_Spectra6_HelloWorld


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/16.png" style={{width:800, height:'auto'}}/></div>

その後、**Tools** -> **Board** -> **XIAO ESP32S3 Plus** および **Tools** -> **Port** -> **ボードが接続されているポートを選択** に進みます。 

PSRAM が有効になっていることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

その後、**Upload** をクリックしてコードを書き込みます。
これで、epaper スクリーンにフィードバックが表示されます！以下は HelloWorld サンプルの結果です。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/18.png" style={{width:500, height:'auto'}}/></div>

## トラブルシューティング

**Q1: 電源を入れても画面がリフレッシュされません。**
*   FPC ケーブルが正しく挿入され、ロックされているか確認してください。
*   USB Type-C ケーブルが十分な電力を供給していることを確認してください。
*   Reset ボタンを押してボードを再起動してください。
*   Arduino IDE の Tools メニューで PSRAM が有効になっていることを確認してください。

**Q2: Wi-Fi の設定に失敗します。**
*   Wi-Fi ネットワークが 2.4GHz であることを確認してください（5GHz はサポートされていません）。
*   Wi-Fi パスワードが正しく入力されているか確認してください。
*   ルーターに近づいて、十分な電波強度を確保してください。

**Q3: 画面表示がぼやけている、または残像があります。**
*   これは、長時間画面をリフレッシュしていない場合や、電源が不安定な場合に発生することがあります。HMI プラットフォームから画面を再度リフレッシュしてみてください。

**Q4: 動作中に高周波音が聞こえます。**
*   これは正常です！リフレッシュ中に ePaper の電源回路が断続的に高周波音を発することがありますが、性能や製品寿命には影響しません。

**Q5: SenseCraft HMI でデバイスをバインドできない / ペアリングに失敗します。**
*   ペアリングコードを正しく入力したか（大文字と小文字が区別されます）を再確認してください。
*   EE02 の電源が入っており、Wi-Fi に接続されていることを確認してください（画面のステータスを確認）。
*   セットアップ中、スマートフォンと EE02 が同じ 2.4GHz Wi-Fi ネットワーク上にあることを確認してください。
*   デバイスがオフラインと表示される場合は、Reset ボタンを押してから再度ペアリングを試してください。

## リソース
- **[PDF]** [13.3 E6 eInk Display module データシート](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 回路図](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

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