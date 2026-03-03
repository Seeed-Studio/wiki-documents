---
description: EE02 13.3インチ E-ink ドライバーボードの入門ガイド
title: XIAO ePaper Display Board - EE02 の入門ガイド
keywords:
  - E-ink
  - Driver Board
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
slug: /getting_started_with_ee02
sku: 100067144
last_update:
  date: 2025-12-20
  author: Allen
---

## はじめに

**EE02** は、**13.3インチ**電子ペーパーディスプレイ専用に設計された高性能 E-ink スクリーンドライバーボードです。ESP32-S3 チップを搭載し、Wi-Fi と Bluetooth 接続をサポートしており、ワイヤレスディスプレイアプリケーションに最適なソリューションです。

小型スクリーン用に設計された兄弟機種 EE04 と同様に、EE02 は大型フォーマット E-ink ディスプレイを IoT プロジェクトに統合したい開発者にシームレスな体験を提供します。駆動プロセスを簡素化し、簡単なコンテンツ管理のための SenseCraft HMI プラットフォームをサポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特徴

- **強力なコントローラー**: ESP32-S3 を中心に構築され、堅牢な処理能力とワイヤレス機能を提供します。
- **大型スクリーン専用**: 13.3インチ E-ink ディスプレイを高い安定性と鮮明さで駆動するよう特別に最適化されています。
- **ワイヤレス接続**: Wi-Fi と Bluetooth 5.0 (LE) をサポートし、リモートデータ更新とクラウド統合を可能にします。
- **低消費電力**: エネルギー効率を考慮して設計され、バッテリー駆動アプリケーションに適しています。
- **簡単な統合**: ドラッグアンドドロップインターフェース設計とリモート管理のための SenseCraft HMI と互換性があります。
- **多様なインターフェース**: 電源/プログラミング用の Type-C と E-ink スクリーン用の標準コネクタを含みます。

### 仕様

| 項目 | 説明 |
| :--- | :--- |
| **コントローラー** | ESP32-S3 |
| **対応スクリーンサイズ** | 13.3インチ E-ink ディスプレイ |
| **接続性** | Wi-Fi 802.11 b/g/n、Bluetooth 5.0 (LE) |
| **電源供給** | USB Type-C 経由 5V |
| **動作電圧** | 3.3V |
| **インターフェース** | USB Type-C、E-ink 用 FPC コネクタ |
| **寸法** | 80x40 mm |
| **動作温度** | -20°C から 70°C |

### 応用例

- **デジタルサイネージ**: レストランメニュー、会議室サイン、小売価格タグに最適です。
- **スマートホーム**: 天気、カレンダー、ホームオートメーション状態の情報ダッシュボード。
- **産業用 HMI**: 機械や倉庫管理用の低消費電力ステータスディスプレイ。
- **教育**: 電子書籍リーダーや教室情報ボード。
- **オフィス**: デスクネームプレートや掲示板。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: 電源供給とファームウェア書き込み用。
- **FPC コネクタ**: 13.3インチ E-ink ディスプレイを接続するため。
- **リセットボタン**: ボードをリセットするため。
- **ボタン**: 「ページ更新」、「前のページに切り替え」、「次のページに切り替え」です。
- **スイッチ**: バッテリー電源のオン/オフを制御します。
- **Boot ボタン**: ブートローダーモードに入るために使用します。
- **LED インジケーター**: 点滅はバッテリー接続なしを意味します。緑色点灯はバッテリー充電中を意味します。
- **JST コネクタ**: バッテリー接続用の 2 ピン JST 2.0mm コネクタ。

## SenseCraft HMI の入門ガイド

このセクションでは、EE02 を SenseCraft HMI プラットフォームに接続し、スクリーンコンテンツをワイヤレスで簡単に更新する方法をガイドします。

### 機器の設置

**ステップ 1. スクリーンとボードの接続**
13.3インチ E-ink スクリーンの FPC ケーブルを EE02 ドライバーボードのコネクタに慎重に接続します。ロック機構が確実に固定されていることを確認してください。

**ステップ 2. 電源投入**
USB Type-C ケーブルを使用して EE02 ボードを電源（コンピューターまたは USB アダプター）に接続します。電源投入時、スクリーンが更新されてウェルカム画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**ステップ 3. ネットワーク設定モードに入る**
ウェルカム画像の後、スクリーンは自動的に更新されてネットワーク設定インターフェースを表示します。これはデバイスが Wi-Fi 接続の準備ができていることを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### ネットワーク設定

**ステップ 4. 携帯電話で Wi-Fi を設定**
携帯電話を使用してスクリーンに表示された QR コードをスキャンします（または表示されたホットスポットに接続します）。携帯電話の指示に従って、ローカル Wi-Fi SSID とパスワードを入力し、EE02 をインターネットに接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**ステップ 5. ペアリングコードの取得**
ネットワーク設定が成功すると、スクリーンが再び更新され、固有の**ペアリングコード**（またはデバイス ID）が表示されます。次のステップでこのコードが必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.JPG" style={{width:300,height:'auto'}}/></div>

### プラットフォームバインディングと更新

**ステップ 6. SenseCraft HMI でデバイスをバインド**
[SenseCraft HMI プラットフォーム](https://sensecraft.seeed.cc/hmi/device)にアクセスします。アカウントにログインします。デバイス管理セクションに移動し、"Add Device" を選択します。E-ink スクリーンに表示されたペアリングコードを入力して、デバイスをアカウントにバインドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 7. 新しいインターフェースの作成とプッシュ**
SenseCraft HMI プラットフォームで、エディターを使用して新しいインターフェースを作成します（例：画像をアップロードまたはダッシュボードを設計）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 8. 画像の適用**
完了したら、右上角の "Apply" ボタンをクリックし、画像を受信したいデバイスを選択します。EE02 がデータを受信し、13.3インチスクリーンを新しいコンテンツで更新します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 9. スクリーンでの表示**

最終的に EE02 がデータを受信し、13.3インチスクリーンを新しいコンテンツで更新します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## Arduino の入門ガイド

### Seeed GFX ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ち、互換性がありません。TFT ライブラリまたは他の類似のディスプレイライブラリをインストールしている場合は、まずアンインストールしてください。
:::

GitHub から Seeed GFX ライブラリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>ここをクリックしてダウンロード</button></p>
</a>
</div>

下にスクロールしてこのリンクを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

デバイスタイプを選択すると、コードが生成されます。そのコードをコピーして、後で使用します。

:::tip
間違った選択をすると、スクリーンには何も表示されません。

デバイスまたはコンポーネントのタイプを確認してください。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_1.png" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードした後、**Sketch** -> **Include Library** -> **Add .ZIP Library** に移動し、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

### プログラムの設定と書き込み

図に示されている例を選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_2.png" style={{width:800, height:'auto'}}/></div>

新しい "driver.h" ファイルを作成し、そのコードを貼り付けます。コードは次のようになります：
```cpp
#define BOARD_SCREEN_COMBO 510 // 13.3 inch six-color ePaper Screen（T133A01）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE02
```


その後、**Tools** -> **Board** -> **XIAO ESP32S3 Plus** と **Tools** -> **Port** -> **ボードが接続されているポートを選択** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_3.png" style={{width:1000, height:'auto'}}/></div>

PSAM を有効にする必要があることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_4.png" style={{width:1000, height:'auto'}}/></div>

次に **Upload** をクリックしてコードをアップロードします。
これで e-paper スクリーンにフィードバックが表示されます！以下は Bitmap 例の結果です。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_5.jpg" style={{width:500, height:'auto'}}/></div>

## トラブルシューティング

**Q1: 電源投入後にスクリーンが更新されません。**
*   FPC ケーブルが正しく挿入され、ロックされているかを確認してください。
*   USB Type-C ケーブルが十分な電力を供給していることを確認してください。
*   リセットボタンを押してボードを再起動してください。

**Q2: Wi-Fi 設定が失敗します。**
*   Wi-Fi ネットワークが 2.4GHz であることを確認してください（5GHz はサポートされていません）。
*   Wi-Fi パスワードが正しく入力されているかを確認してください。
*   強い信号を確保するためにルーターに近づいてください。

**Q3: スクリーン表示がぼやけているか、ゴーストが発生しています。**
*   これは、スクリーンが長時間更新されていない場合や電源供給が不安定な場合に発生する可能性があります。HMI プラットフォーム経由でスクリーンを再度更新してみてください。

## リソース
- **[PDF]** [13.3 E6 eInk Display module Datasheet](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

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