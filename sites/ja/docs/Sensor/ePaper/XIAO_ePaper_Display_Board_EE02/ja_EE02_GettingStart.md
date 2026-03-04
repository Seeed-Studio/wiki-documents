---
description: XIAO ePaper Display Board - EE02 入門ガイド
title: XIAO ePaper Display Board - EE02 入門ガイド
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

**EE02** は、**13.3インチ**の電子ペーパー・ディスプレイ専用に設計された高性能なE-inkスクリーン・ドライバーボードです。ESP32-S3チップを搭載し、Wi-Fi と Bluetooth 接続をサポートしているため、ワイヤレス表示アプリケーションに最適なソリューションです。

小型スクリーン向けに設計された兄弟製品 EE04 と同様に、EE02 は大判E-inkディスプレイをIoTプロジェクトに統合したい開発者にシームレスな体験を提供します。駆動プロセスを簡素化し、SenseCraft HMI プラットフォームをサポートしているため、コンテンツ管理も容易です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### 特長

- **高性能コントローラ**: ESP32-S3 を中心に構成されており、強力な処理能力とワイヤレス機能を提供します。
- **大画面専用設計**: 13.3インチE-inkディスプレイを高い安定性と視認性で駆動するよう最適化されています。
- **ワイヤレス接続**: Wi-Fi および Bluetooth 5.0 (LE) をサポートし、リモートでのデータ更新やクラウド連携が可能です。
- **低消費電力**: 省電力設計により、バッテリー駆動アプリケーションに適しています。
- **容易な統合**: SenseCraft HMI と互換性があり、ドラッグ＆ドロップでのインターフェース設計やリモート管理が可能です。
- **多彩なインターフェース**: 電源供給／プログラミング用のType-Cと、E-inkスクリーン用の標準コネクタを備えています。

### 仕様

| 項目 | 説明 |
| :--- | :--- |
| **コントローラ** | ESP32-S3 |
| **対応スクリーンサイズ** | 13.3インチ E-ink ディスプレイ |
| **接続方式** | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 (LE) |
| **電源** | USB Type-C による 5V 供給 |
| **動作電圧** | 3.3V |
| **インターフェース** | USB Type-C、E-ink 用 FPC コネクタ |
| **寸法** | 80×40 mm |
| **動作温度** | -20°C ～ 70°C |

### 用途

- **デジタルサイネージ**: レストランのメニュー、会議室のサイン、小売店のプライスタグに最適です。
- **スマートホーム**: 天気、カレンダー、ホームオートメーションの状態を表示する情報ダッシュボード。
- **産業用HMI**: 機械設備や倉庫管理向けの低消費電力ステータス表示。
- **教育**: 電子書籍リーダーや教室用インフォメーションボード。
- **オフィス**: デスクネームプレートや掲示板。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: 電源供給およびファームウェア書き込み用。
- **FPC コネクタ**: 13.3インチ E-ink ディスプレイを接続します。
- **リセットボタン**: ボードをリセットします。
- **ボタン**: それぞれ "refresh the page"、"switch previous page"、"switch next page" の機能を持ちます。
- **スイッチ**: バッテリー電源のオン／オフを制御します。
- **Boot ボタン**: ブートローダーモードに入るために使用します。
- **LED インジケータ**: 点滅している場合はバッテリー未接続を示します。緑色の点灯はバッテリー充電中を意味します。
- **JST コネクタ**: バッテリー接続用の 2ピン JST 2.0mm コネクタ。

## SenseCraft HMI の使い方

このセクションでは、EE02 を SenseCraft HMI プラットフォームに接続し、画面コンテンツをワイヤレスで簡単に更新する手順を説明します。

### 機器のセットアップ

**ステップ 1. スクリーンとボードを接続する**
13.3インチ E-ink スクリーンの FPC ケーブルを、EE02 ドライバーボード上のコネクタに慎重に接続します。ロック機構が確実に固定されていることを確認してください。

**ステップ 2. 電源を入れる**
USB Type-C ケーブルを使用して、EE02 ボードを電源（PC または USB アダプタ）に接続します。電源投入後、スクリーンがリフレッシュされ、ウェルカム画像が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**ステップ 3. ネットワーク設定モードに入る**
ウェルカム画像の後、スクリーンは自動的にリフレッシュされ、Network Configuration インターフェースが表示されます。これは、デバイスが Wi-Fi 接続の準備ができていることを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### ネットワーク設定

**ステップ 4. スマートフォンで Wi-Fi を設定する**
スマートフォンを使って、スクリーンに表示されている QR コードをスキャンする（または表示されているホットスポットに接続する）ことで、案内に従いローカル Wi-Fi の SSID とパスワードを入力し、EE02 をインターネットに接続します。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**ステップ 5. ペアリングコードを取得する**
ネットワーク設定が成功すると、スクリーンが再度リフレッシュされ、一意の **Pairing Code**（または Device ID）が表示されます。次のステップでこのコードを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.jpg" style={{width:300,height:'auto'}}/></div>

### プラットフォームへのバインドと更新

**ステップ 6. SenseCraft HMI 上でデバイスをバインドする**
[SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi/device) にアクセスし、アカウントにログインします。デバイス管理セクションに移動して "Add Device" を選択し、E-ink スクリーンに表示されている Pairing Code を入力して、デバイスをアカウントにバインドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 7. 新しいインターフェースを作成してプッシュする**
SenseCraft HMI プラットフォーム上でエディタを使用し、新しいインターフェースを作成します（例: 画像をアップロードする、ダッシュボードをデザインするなど）。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 8. 画像を適用する**
作成が完了したら、右上の "Apply" ボタンをクリックし、画像を受信させたいデバイスを選択します。EE02 はデータを受信し、13.3インチスクリーンをリフレッシュして新しいコンテンツを表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 9. スクリーンに表示される**

最後に、EE02 がデータを受信し、13.3インチスクリーンをリフレッシュして新しいコンテンツを表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## Arduino ではじめる

### Seeed GFX ライブラリのインストール

:::tip
このライブラリは TFT ライブラリと同じ機能を持ちますが、互換性はありません。TFT ライブラリや類似のディスプレイライブラリをインストールしている場合は、先にアンインストールしてください。
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
誤った選択をすると、スクリーンには何も表示されません。

そのため、ご使用のデバイスやコンポーネントの種類を必ず確認してください。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_1.png" style={{width:800, height:'auto'}}/></div>

ライブラリをダウンロードしたら、**Sketch** -> **Include Library** -> **Add .ZIP Library** に進み、ダウンロードしたライブラリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

### プログラムの設定と書き込み

図に示すサンプルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_2.png" style={{width:800, height:'auto'}}/></div>

"driver.h" という新しいファイルを作成し、そのコードを貼り付けます。コードは次のようになります:
```cpp
#define BOARD_SCREEN_COMBO 510 // 13.3 inch six-color ePaper Screen（T133A01）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE02
```


その後、**Tools** -> **Board** -> **XIAO ESP32S3 Plus** および **Tools** -> **Port** -> **Select the port your board is connected to** を選択します。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_3.png" style={{width:1000, height:'auto'}}/></div>

PSAM が有効になっていることに注意してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_4.png" style={{width:1000, height:'auto'}}/></div>

その後、**Upload** をクリックしてコードをアップロードします。
これで epaper 画面にフィードバックが表示されます！以下は Bitmap サンプルの結果です。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_5.jpg" style={{width:500, height:'auto'}}/></div>

## トラブルシューティング

**Q1: 電源を入れても画面がリフレッシュされません。**
*   FPC ケーブルが正しく挿入され、ロックされているか確認してください。
*   USB Type-C ケーブルが十分な電力を供給していることを確認してください。
*   Reset ボタンを押してボードを再起動してください。

**Q2: Wi-Fi 設定に失敗します。**
*   Wi-Fi ネットワークが 2.4GHz であることを確認してください（5GHz はサポートされていません）。
*   Wi-Fi パスワードが正しく入力されているか確認してください。
*   ルーターに近づいて、十分な電波強度を確保してください。

**Q3: 画面表示がぼやけている、または残像があります。**
*   これは、長時間画面をリフレッシュしていない場合や、電源が不安定な場合に発生することがあります。HMI プラットフォーム経由で画面を再度リフレッシュしてみてください。

## リソース
- **[PDF]** [13.3 E6 eInk Display module データシート](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 回路図](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

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