---
description: Web USB を使用して ESP32S3 上に MeshCore リピーターファームウェアを書き込む方法と、LoRa リージョンおよびパス設定のためのアプリ構成ガイド。
title: ESP32 MeshCore を使い始める
keywords:
  - Meshcore
  - ESP32 MeshCore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ESP32S3Series.png
slug: /get_started_with_esp32s3_meshcore
sku: 102010611,113110064
sidebar_position: 3
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/get_started_with_esp32s3_meshcore/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ESP32S3Series.png" alt="pir" width={800} height="auto" /></p>

[MeshCore](https://meshcore.io/) は、LoRa Mesh ハードウェアを利用して安全なテキストベース通信を実現するためのオープンソースシステムです。MeshCore リピーターと MeshCore コンパニオンノードを使用して、自分の MeshCore ネットワークを構築できます。[XIAO ESP32S3 & Wio-SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) は、MeshCore ノードを開発するための柔軟なソリューションです。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## ファームウェアの書き込み

USB ケーブルでデバイスをコンピュータに接続します。ケーブルがデータ通信に対応していることを確認してください。

:::warning
データ転送中は USB ケーブルを接続したままにしてください。そうしないとデバイスが破損する可能性があります。
:::

[Meshcore Web Flasher](https://meshcore.io/flasher) にアクセスします。

`Community Firmware` グループから `Seeed Studio Xiao S3 Wio` を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ScreenShot_2026-04-20_140721_194.png" alt="pir" width={800} height="auto" /></p>

`Repeater` を選択します。ほかのファームウェアを書き込みたい場合は、[click here](https://docs.meshcore.io/) をクリックしてチュートリアルを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RepeaterFirmware.png" alt="pir" width={800} height="auto" /></p>


ファームウェアのバージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FirmwareVersion.png" alt="pir" width={600} height="auto" /></p>

`Boot(B)` ボタンを押しながら、`Reset(R)` ボタンを押してフラッシュモードに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RB.png" alt="pir" width={300} height="auto" /></p>

`Erase device ` を選択し、`Flash` をクリックして、`Xiao xxx` または `debug unit xxx` という名前のシリアルポートを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Flash1.png" alt="pir" width={800} height="auto" /></p>

プログレスバーが最後まで埋まったら、フラッシュが完了したことを示します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FlashigComplete.png" alt="pir" width={800} height="auto" /></p>

`Reset(R)` ボタンをクリックしてデバイスを再起動します。

## デバイス接続

### SX-1262 への接続

SX-1262 は B2B インターフェースを介して Xiao ESP32-S3 に接続できます。SX-1262 は SPI を使用して Xiao ESP32-S3 と通信します。

次の図は、XIAO ESP32S3 と Wio-SX1262 間の B2B ピンマッピングを示しています。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="B2B pin mapping between XIAO ESP32S3 and Wio-SX1262"/>
</div>
:::warning
対応する SX-1262 はキットに含まれるもののみ購入可能です。
:::

### （オプション）バッテリーへの接続

XIAO ESP32S3 には電源管理チップが内蔵されており、バッテリーを使用して XIAO ESP32S3 を単独で給電したり、XIAO ESP32S3 の USB ポートを介してバッテリーを充電したりできます。

XIAO 用にバッテリーを接続したい場合は、`protection circuit` 付きの、適合した充電式 `3.7V lithium` バッテリーの購入をお勧めします。バッテリーをはんだ付けする際は、必ず正極と負極を区別してください。電源の負極端子は USB ポートに最も近い側であり、電源の正極端子は USB ポートから離れた側になります。

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### （オプション）拡張ボードへの接続

拡張ボードは、接続や、Grove センサーやモジュールを簡単に追加するなどの追加アプリケーションに便利なツールです。

<table align="center">
  <tbody>
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic</th>
      <th>（オプション）拡張ボード</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg"
            style={{ width: 330, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Expansion.jpg"
            style={{ width: 330, height: 'auto' }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                今すぐ入手🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                今すぐ入手🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 設定

### 初期設定

MeshCore リピーターファームウェアを MeshCore デバイスに初めて書き込むときは、その国や地域で合法な周波数を利用できるように、デバイスの周波数を設定する必要があります。

リピーターを設定するには [Click here](https://config.meshcore.io/) をクリックしてください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

LoRa リージョンを変更して設定を保存します。その後、デバイスは自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Configure.png" alt="pir" width={800} height="auto" /></p>

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、ローリング 1 時間ベースで毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

これで、自分の Mesh ネットワークのテストを開始できます。

### Advert の送信

"send advert" をクリックして、ほかの Meshcore デバイスがこのリピーターを認識できるようにします。その後、デバイス一覧にリピーターが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

### 管理者ログイン

リピーターのデフォルト管理者パスワードは `password` です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Admin.png" alt="pir" width={800} height="auto" /></p>

ログイン後、設定ページが表示されます。ここから hone アプリ上でリピーターの設定を調整できます。

### パスの設定

リピーターをルートに追加する前に、まずリピーターを使って advert を送信する必要がある場合があります。リピーターは一定間隔で自動的に advert を送信します。この間隔は複数時間（デフォルトでは 3 時間）になることがあります。そのため、手動で advert を送信するか、そうでなければ待つ必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

メッセージ送信パスを手動で設定できます。Bluetooth コンパニオンデバイスをスマートフォンアプリに接続し、プライベートメッセージウィンドウを開きます。その後、検出されたリピーターを選択してパスを構成できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

パスを設定すると、送信方法は「n hop」に変更されます。たとえば、ルートにリピーターを 1 台追加すると、1 hop に変更されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

### （オプション）その他の設定

リピーターの位置を MeshCore ノードマップ上に表示したい場合は、まずキットに GPS モジュールを取り付ける必要があります。

<table align="center">
  <tbody>
    <tr>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic</th>
      <th>XIAO ESP32S3 & Wio-SX1262 Kit（ケース付き）</th>
      <th>（オプション）L76K GNSS モジュール</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg"
            style={{ width: 300, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/XiaoESP32S3Casing.jpg"
            style={{ width: 300, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg"
            style={{ width: 350, height: 'auto' }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                今すぐ入手🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                今すぐ入手🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                今すぐ入手🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:800, height:'auto'}}/></div>

次に、管理画面にログインして GPS を有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

また、アドバタイズのブロードキャスト間隔を調整することもできます。`auto zero hop advert` の間隔範囲は 60～240 分です。`auto flood advert` の間隔範囲は 3～168 時間です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

## リソース
- **[PDF]**[Xiao ESP32-S3 互換 SX1262 の回路図](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Wio-SX1262 モジュール データシート](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Wio-SX1262 for XlAO 3D ファイル](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Seeed Studio XIAO ESP32S3 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [XIAO ESP32S3 キット Kicad ライブラリ](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D モデル](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 形式寸法図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle フットプリント](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [ケース 3D ファイル](https://www.thingiverse.com/thing:6888371)
## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
