---
description: OpenEPaperLink設定ジェネレーターを使用してe-paperの設定を生成する
title: ePaper用OpenEPaperLink設定ビルダー
keywords:
- XIAO eInk Expansion
- XIAO
- OEPL Config Builder
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/OEPL_Config_img.webp
slug: /ja/epaper_breakout_board_with_oepl
sidebar_position: 2
last_update:
  date: 10/23/2025
  author: Zovey
---

# OpenEPaperLinkとePaper設定ビルダー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/seeed_logo_2.jpg" style={{width:500, height:'auto'}}/></div>

## はじめに

[OpenEPaperLink](https://openepaperlink.de/)（以下、このプロジェクトを「OEPL」と呼びます）は、電子棚札の代替プロトコルとファームウェア実装です。ESP32ベースのアクセスポイントと802.15.4無線通信により、複数のディスプレイがサポートされています。これはオープンソースの電子ペーパーラベル通信システムで、ユーザーが電子インクスクリーンの表示内容をワイヤレスで更新できるようにします。システムはアクセスポイント（AP）とラベルデバイスで構成され、さまざまなタイプの電子インクスクリーンをサポートしています。幅広いコンテンツ生成と送信機能を提供します。現在、このプロジェクトはSeeed Studio XIAO nRF52840 Sense Plusとも互換性があります。

ePaper Breakout Boardを購入した後、電子ペーパースクリーンを異なる仕様のものに交換する必要がある場合があります。このチュートリアルでは、プロセスに2つのツールを使用します：OPEL Config Builderは電子ペーパーのパラメータを変更するために使用され、OEPL Image Uploaderは画像をアップロードするために使用されます。

[OEPL Config Builder](https://config.openepaperlink.org/)は、BLEプロトコルを使用してワイヤレス送信を行うローコード電子ペーパーパラメータ設定ツールです。ユーザーは複雑な設定コードを書く必要がなく、ウェブサイト上でマウス操作するだけで設定を完了できます。

[OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)も、BLEプロトコルを介してワイヤレス送信を行うツールです。違いは、このツールが写真を送信することです。

## ハードウェアの準備

<table align="center">
  <tr>
    <th>4.26インチモノクロームePaperディスプレイ</th>
    <th>Seeed Studio XIAO用ePaper Breakout Board</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
XIAO nRF52840 シリーズのMCUはすべてこのツールをサポートしており、XIAO nRF52840 Sense Plusに限定されません。ePaperスクリーンは4.26インチディスプレイのみをサポートしています。ただし、今後より多くのスクリーンサイズをサポートするために継続的に更新していく予定です。
:::

## OEPL Config Builderの使用方法

### ステップ1：BLEファームウェアの書き込み

最初のステップは、OEPLの公式リポジトリからOEPL_BLEファームウェアを取得することです。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

Seeed Studio XIAO nRF52840 Sense Plus、ePaper Breakout Board、スクリーンを接続した後、USBデータケーブルを使用してコンピューターをnRF52840に接続し、リセットボタンを2回連続で押します。すると、PC側にファイルマネージャーがポップアップ表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

次に、先ほど取得した`.uf2`ファイルをUSBドライブからnRF52840のファイルマネージャーにコピーします。MCUが次回電源投入されると、この`.uf2`ファームウェアが自動的に実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

### ステップ2：BLEを使用してBuilderに接続

Builderインターフェースで、BLEプロトコルを介してデバイスを接続します（デバイスが表示されない場合は、ファームウェアを再フラッシュしてください）。このウェブサイトは、BLEプロトコルを介して接続された場合にのみ、以下のワイヤレスアップロード機能を実現できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

接続が成功すると、ターミナルボックスに「Connected」という文字が表示されます。

- **Read Config**：MCU内の設定を読み取ります。
- **Write Config**：設定をMCUに書き込みます。
- **Reboot**：MCUを再起動します。

### ステップ3：Builderパネル

パネル上で対応する変数を選択するか、パラメータを入力するだけで設定が完了します。

- **Config Builderのパラメータ**
  - **system_config**：ホストICと電源管理ピンに関する情報を保持
  - **manufacturer_data**：メーカー識別子とボード情報
  - **power_option**：電源供給とスリープ関連オプション
  - **display**：ディスプレイ/パネル情報（オプション）。複数のディスプレイを持つデバイスでは複数回表示可能。
  - **led**：オプションのLED設定（繰り返し可能）。
  - **sensor_data**：オプションのセンサー読み取り値/定義（繰り返し可能）。
  - **data_bus**：グローバルバス定義（I2C/SPIなど）。
  - **binary_inputs**：オプションのバイナリ入力（ボタン、スイッチ）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

設定した構成を保存したい場合は、このパネル内で`.bin`、`Hex`、`JSON`ファイルとしてエクスポートできます。逆に、このパネルは設定目的で`JSON`ファイルのインポートもサポートしています。4.26スクリーン設定ファイルはこちらから取得できます。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>こちらをクリックして取得</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

設定を行った後、**Write Config**機能を使用してMCUにアップロードできます。

## OEPL Image Uploaderの使用方法

OEPL Image Uploaderはオンライン電子ペーパーアップロードツールで、BLEプロトコルを介して動作します。このツールは非常に軽量でコード不要であり、従来の電子ペーパーの遅い更新速度の煩わしさを解消します。使用方法はOEPL Config Builderと似ています。

### ステップ1：Uploaderに接続

接続方法はBuilderと似ています。デバイスはBLEを介して接続されます。ただし、以前のファームウェアとこの画像アップロードに必要なピンとの間にいくつかの競合があるため、このWeb機能を使用する前にファームウェアにいくつかの変更が必要であることに注意してください。ここでは、書き込み用の新しいファームウェアが提供されています。前述の手順に従って書き込みプロセスを実行してください。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>こちらをクリックして取得</button></p>
</a>
</div>

「E-Paper prefix filter(s)」セクションの変数を「OEPL」に変更する必要があります。そうしないと、デバイスを取得できません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

### ステップ 2：画像のアップロード

次に「Select File」ボタンをクリックして、アップロード用のローカルファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

ファイル転送が完了したら、「Upload Image」ボタンをクリックして電子ペーパーにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

「Upload Complete」が表示されると、書き込みプロセスが成功したことを示します！その後、画面上の画像が変わったことを確認できます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
