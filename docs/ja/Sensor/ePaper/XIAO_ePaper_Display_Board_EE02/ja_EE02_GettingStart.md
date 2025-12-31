---
description: EE02 13.3インチE-inkドライバーボード入門ガイド
title: EE02入門ガイド
keywords:
  - E-ink
  - Driver Board
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
slug: /ja/getting_started_with_ee02
last_update:
  date: 2025-12-20
  author: Allen
---

## はじめに

**EE02**は、**13.3インチ**電子ペーパーディスプレイ専用に設計された高性能E-inkスクリーンドライバーボードです。ESP32-S3チップを搭載し、Wi-FiとBluetooth接続をサポートしており、ワイヤレスディスプレイアプリケーションに最適なソリューションです。

小型スクリーン向けに設計された兄弟機種EE04と同様に、EE02は大型フォーマットのE-inkディスプレイをIoTプロジェクトに統合したい開発者にシームレスな体験を提供します。駆動プロセスを簡素化し、簡単なコンテンツ管理のためのSenseCraft HMIプラットフォームをサポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特徴

- **強力なコントローラー**: ESP32-S3を中心に構築され、堅牢な処理能力とワイヤレス機能を提供します。
- **大型スクリーン専用**: 13.3インチE-inkディスプレイを高い安定性と鮮明さで駆動するよう特別に最適化されています。
- **ワイヤレス接続**: Wi-FiとBluetooth 5.0（LE）をサポートし、リモートデータ更新とクラウド統合を可能にします。
- **低消費電力**: エネルギー効率を重視した設計で、バッテリー駆動アプリケーションに適しています。
- **簡単統合**: ドラッグアンドドロップインターフェース設計とリモート管理のためのSenseCraft HMIと互換性があります。
- **多様なインターフェース**: 電源/プログラミング用のType-CとE-inkスクリーン用の標準コネクタを含みます。

### 仕様

| 項目 | 説明 |
| :--- | :--- |
| **コントローラー** | ESP32-S3 |
| **対応スクリーンサイズ** | 13.3インチE-inkディスプレイ |
| **接続性** | Wi-Fi 802.11 b/g/n、Bluetooth 5.0（LE） |
| **電源供給** | USB Type-C経由5V |
| **動作電圧** | 3.3V |
| **インターフェース** | USB Type-C、E-ink用FPCコネクタ |
| **寸法** | 80x40 mm |
| **動作温度** | -20°C～70°C |

### 応用例

- **デジタルサイネージ**: レストランメニュー、会議室サイン、小売価格タグに最適です。
- **スマートホーム**: 天気、カレンダー、ホームオートメーションステータスの情報ダッシュボード。
- **産業用HMI**: 機械や倉庫管理用の低消費電力ステータスディスプレイ。
- **教育**: 電子書籍リーダーや教室情報ボード。
- **オフィス**: デスクネームプレートや掲示板。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: 電源供給とファームウェア書き込み用。
- **FPCコネクタ**: 13.3インチE-inkディスプレイを接続するため。
- **リセットボタン**: ボードをリセットするため。
- **ボタン**: 「ページ更新」、「前のページに切り替え」、「次のページに切り替え」です。
- **スイッチ**: バッテリー電源のオン/オフを制御します。
- **ブートボタン**: ブートローダーモードに入るために使用します。
- **LEDインジケータ**: 点滅はバッテリー未接続を意味します。緑色点灯はバッテリー充電中を意味します。
- **JSTコネクタ**: バッテリー接続用の2ピンJST 2.0mmコネクタ。

## SenseCraft HMI入門ガイド

このセクションでは、EE02をSenseCraft HMIプラットフォームに接続し、スクリーンコンテンツをワイヤレスで簡単に更新する方法をガイドします。

### 機器設置

**ステップ1. スクリーンとボードの接続**
13.3インチE-inkスクリーンのFPCケーブルをEE02ドライバーボードのコネクタに慎重に接続します。ロック機構が確実に固定されていることを確認してください。

**ステップ2. 電源投入**
USB Type-Cケーブルを使用してEE02ボードを電源（コンピューターまたはUSBアダプター）に接続します。電源投入時、スクリーンが更新されてウェルカム画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**ステップ3. ネットワーク設定モードに入る**
ウェルカム画像の後、スクリーンは自動的に更新されてネットワーク設定インターフェースを表示します。これはデバイスがWi-Fi接続の準備ができていることを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### ネットワーク設定

**ステップ4. 携帯電話でWi-Fi設定**
携帯電話を使用してスクリーンに表示されたQRコードをスキャンします（または表示されたホットスポットに接続します）。携帯電話の指示に従って、ローカルWi-FiのSSIDとパスワードを入力し、EE02をインターネットに接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**ステップ5. ペアリングコードの取得**
ネットワーク設定が成功すると、スクリーンが再度更新され、固有の**ペアリングコード**（またはデバイスID）が表示されます。次のステップでこのコードが必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.JPG" style={{width:300,height:'auto'}}/></div>

### プラットフォーム連携と更新

**ステップ6. SenseCraft HMIでデバイス連携**
[SenseCraft HMIプラットフォーム](https://sensecraft.seeed.cc/hmi/device)にアクセスします。アカウントにログインします。デバイス管理セクションに移動し、"Add Device"を選択します。E-inkスクリーンに表示されたペアリングコードを入力して、デバイスをアカウントに連携します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ7. 新しいインターフェースの作成と送信**
SenseCraft HMIプラットフォームで、エディターを使用して新しいインターフェースを作成します（例：画像のアップロードやダッシュボードの設計）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ8. 画像の適用**
完了したら、右上角の"Apply"ボタンをクリックし、画像を受信したいデバイスを選択します。EE02がデータを受信し、13.3インチスクリーンを新しいコンテンツで更新します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ9. スクリーンでの表示**

最終的にEE02がデータを受信し、13.3インチスクリーンを新しいコンテンツで更新します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## トラブルシューティング

**Q1: 電源投入後にスクリーンが更新されません。**
*   FPCケーブルが正しく挿入され、ロックされているかを確認してください。
*   USB Type-Cケーブルが十分な電力を供給していることを確認してください。
*   リセットボタンを押してボードを再起動してください。

**Q2: Wi-Fi設定が失敗します。**
*   Wi-Fiネットワークが2.4GHzであることを確認してください（5GHzはサポートされていません）。
*   Wi-Fiパスワードが正しく入力されているかを確認してください。
*   ルーターに近づいて強い信号を確保してください。

**Q3: スクリーン表示がぼやけたり、ゴーストが発生します。**
*   これは長時間スクリーンが更新されていない場合や電源供給が不安定な場合に発生することがあります。HMIプラットフォーム経由でスクリーンを再度更新してみてください。

## リソース
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 回路図](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

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