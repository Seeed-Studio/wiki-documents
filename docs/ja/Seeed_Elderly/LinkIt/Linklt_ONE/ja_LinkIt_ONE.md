---
description: LinkIt ONE
title: LinkIt ONE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_ONE
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Linkit_ONE/image/500px-Linkit-one-page.jpg)

:::danger note
MediaTek Labs の閉鎖により、関連リンクはすべて無効になっています。関連ファイルをダウンロードする必要がある場合は、以下のリンクで検索してください：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

LinkIt ONE 開発プラットフォームは、ウェアラブルおよび IoT デバイスのプロトタイピング用のオープンソースで高性能なボードです。これは、ウェアラブル向けの世界トップクラスの SoC、MediaTek Aster (**MT2502**) をベースに、高性能 Wi-Fi (**MT5931**) および GPS (**MT3332**) チップセットを組み合わせて、MediaTek LinkIt のすべての機能にアクセスできるように設計されています。また、Arduino ボードと同様のピンアウト機能を提供しており、さまざまなセンサー、周辺機器、Arduino シールドを簡単に接続できます。

LinkIt ONE は、IoT/ウェアラブルデバイス向けのオールインワンプロトタイピングボードです。GSM、GPRS、Wi-Fi、GPS、Bluetooth 機能を基本的な Arduino フォームファクターに統合しています。LinkIt ONE は [Seeed Studio](https://www.seeedstudio.com/) と [MediaTek](http://www.mediatek.com/) の共同設計製品であり、ウェアラブルおよび IoT デバイス向けのオープンハードウェア技術と業界をリードするリファレンスデザインを組み合わせて、強力な開発ボードを実現しています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2017)

:::note
LinkIt ONE ボードには多くの機能が搭載されており、その SDK（ソフトウェア開発キット）は非常に包括的です。ボードを使用する前に、このドキュメントをよくお読みください。この共同設計製品に関する基本的なハードウェア技術サポートは Seeedstudio LinkIt One フォーラムで提供されています。高度な技術サポートは [MediaTek LinkIt One フォーラム](https://labs.mediatek.com/forums/forums/list.page) で利用可能です。これらのフォーラムには、このボードに関する多くの FAQ が掲載されています。質問を投稿する前に、まずご自身の要件や問題に対する解決策を検索することで、時間を節約できます。
:::

## 特徴
--------------
- ARM7 EJ-S™、GSM、GPRS、Wi-Fi、Bluetooth BR/EDR/BLE、GPS、オーディオコーデック、SDカードコネクタを単一の開発ボードに統合。
- Arduino ボードと同様のピンアウトを提供（デジタル I/O、アナログ I/O、PWM、I2C、SPI、UART、電源供給を含む）し、Arduino と互換性あり。
- ほとんどのセンサー、周辺機器、Groves、その他のウィジェットに接続するためのさまざまなインターフェースを提供。
- 「あなたが着るものがあなた自身を表す」。LinkIt ONE を MediaTek LinkIt SDK（Arduino 用）と組み合わせて使用することで、アイデアを簡単に実用的なプロトタイプに変え、Seeed の製品化およびアジャイル製造サービスを活用して現実のものにすることができます。

## 仕様
------------------
| パラメータ   | 値          |
|:------|:-----------------|
| チップセット |	MT2502A (Aster, ARM7 EJ-S (TM)) |
| クロックスピード |	260MHz |
| 寸法 |	3.3x2.1 インチ |
| フラッシュ |	16MB |
| RAM |	4MB |
| I/O ピンあたりの DC 電流 |	1mA |
| アナログピン |	3 |
| デジタル出力 |	3.3V |
| アナログ入力 |	5V |
| UART |	ソフトウェアベース（**Serial**、USBモデムポートとしても知られる）およびハードウェアシリアル（**Serial1**, D0&D1） |
| SDカード |	最大 32GB（クラス10） |
| 位置情報 |	GPS（MT3332） |
| GSM |	850/900/1800/1900 MHz |
| GPRS |	クラス12 |
| Wi-Fi |	802.11 b/g/n |
| Bluetooth |	BR/EDR/BLE（デュアルモード） |

## アプリケーションアイデア
--------------------
* モノのインターネット (IoT)
* スマートハウス
* ウェアラブルデザイン
* 産業用途
* センサーハブ
* 自動化と輸送

以下は参考になるプロジェクトの例です。さらに素晴らしいプロジェクトは Recipe と [Instructables](https://www.instructables.com/howto/linkit+one/) でご覧ください。

|Facebook Like Monitor|Texting Door Alarm|Smart Bed Alarm|
|--------------------------|-------------|---------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project1.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project2.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project3.jpg)|
|[今すぐ作る！](https://www.instructables.com/id/Facebook-Like-Monitor/)|[今すぐ作る！](https://www.instructables.com/id/LinkIt-One-Texting-Door-Alarm/)|[今すぐ作る！](https://www.instructables.com/id/Smart-Bed-Alarm-with-LinkIT-ONE/)|


|AWS IoT チュートリアル|Instructables Indicator|DIY アクリルケース|
|--------------------------|-------------|---------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project4.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project5.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project6.jpg)|
|[今すぐ作る！](https://www.instructables.com/id/An-AWS-IoT-Tutorial-With-LinkIt-ONE/)|[今すぐ作る！](https://www.instructables.com/id/Make-a-Instructables-Indicator/)|[今すぐ作る！](https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|



## ハードウェア概要
-------------------
![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/1000px-LinkItONE_RESOURCE.png)

### 設定スイッチ
LinkIt ONE には、機能や動作モードを設定するためのスライドスイッチが3つあります：

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/300px-LinkIt_ONE_Wiki_Button.jpg)

|スイッチ番号|	機能|	位置1 - 機能|	位置2 - 機能|
|:------|:-----------------|:-----------------|:-----------------|
|1|	プログラムモード|	**MS**：この位置では、PCに接続するとLinkIt ONEボードが10MBのUSBドライブとして表示されます。このモードではプログラムは実行されません。このドライブにコピーされたファイルはコードを介して読み取ることができます。|	UART：この位置はボードをプログラムモードに設定するために使用されます。このモードでファームウェアをアップロードできます。|
|2|	電源|	**BAT**：リチウムイオンバッテリーでボードを駆動します。バッテリーを充電するには、この位置にスイッチを設定し、ボードをPCに接続します。|	**USB**：USBポートでボードを駆動します。バッテリーが接続されていない場合、この位置にスイッチを設定してボードをプログラムします。|
|3|	SD/SPI|	**SPI**：この位置では外部SPIピン（D10 - D13）へのアクセスが可能です。|**SD**：この位置ではコードがSDカードにアクセスできます。このモードではSPIピン（D10-D13）へのアクセスも無効になります。|

:::note
    USB micro type-B ソケットを扱う際は注意してください。ソケットが破損する可能性があります。
:::
## はじめに

### 手順概要
|番号|	ステップ	|詳細情報|
|:------|:-----------------|:-----------------|
|1|	Arduino IDE 1.5.7 Beta（WindowsまたはMAC OS X版）をインストールします。|	[こちら](https://wiki.seeedstudio.com/ja/LinkIt_ONE/#installing-arduino-ide)
|2|		[MediaTek Labsに登録](https://labs.mediatek.com/dpRegister/create)。	| |
|3|	[Linkit Developer's Guide](https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd) をダウンロードして読む。	||
|4|	Arduino IDE用 [LinkIt SDK](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp) をインストールします（WindowsまたはMAC OS X）。|	[こちら](https://wiki.seeedstudio.com/ja/LinkIt_ONE/#installing-mediatek-linkit-one-sdk)|
|5|	LinkIt ONE ドライバーをインストールします。|	[こちら](https://wiki.seeedstudio.com/ja/LinkIt_ONE/#installing-drivers)|
|6|	オンボードファームウェアバージョンを更新します。|	[こちら](https://wiki.seeedstudio.com/ja/LinkIt_ONE/#updating-firmware)|
|7|	Arduino IDEを開き、LinkIt ONEボードを選択してコーディングを開始します。|	[こちら](https://wiki.seeedstudio.com/ja/LinkIt_ONE/#uploading-code-blinky)||
|8|	GSM、GPS、WiFi/BTアンテナをLinkIt ONEボードに接続します。|	[こちら](https://wiki.seeedstudio.com/ja/LinkIt_ONE/#connecting-antennae)|
|9	|SIMカードとMicro SDカードを挿入します。|[こちら](https://wiki.seeedstudio.com/ja/LinkIt_ONE/#inserting-sim-card-and-sd-card)|
|10	|例を探索して、楽しいものづくりを始めましょう！|

### Arduino IDEのインストール
[最新のArduino IDEをダウンロード](https://www.arduino.cc/en/Main/Software)してください。より高度なトピックについては、MediaTekTMの[指示](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp)に従ってください。

### Mediatek LinkIt ONE SDKのインストール
- [LinkIt SDK for Arduino](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp) をダウンロードします。このガイド作成時点では、**v1.1.11** Windows SDK（Beta）が使用されました。Windows OSおよびMAC OS Xプラットフォーム向けのビデオガイドを[こちら](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/get-started/index.gsp)で確認してください。
- ダウンロードしたファイルをArduino IDEフォルダに解凍します。
- .EXEファイルをダブルクリックしてインストールします。
- LinkIt ONE SDKをインストールすると、Arduino IDEがLinkIt ONE IDEとして機能します。

### ドライバーのインストール

- Windows 8/8.1 OSを使用している場合は、**Driver Signature Enforcement**を無効にしてください。[指示](https://wiki.seeedstudio.com/ja/Driver_for_Seeeduino/#installing-drivers-for-the-seeeduino-with-window8)を参照してください。

- MS/UARTスライドスイッチをUART位置に設定し、LinkIt ONEをPCに接続します。
- デバイスマネージャーを開くと、以下のCOMポートが表示されます。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp1.jpg)

- ..\LinkIt_ONE_IDE\drivers\mtk フォルダからドライバーをインストールします。
- ドライバーをインストールした後、デバイスマネージャーには以下の2つのポートが表示されるはずです：

   **MTK USB Debug Port**：コードのアップロードに使用されます。

   **MTK USB Modem Port**：メッセージの出力（例：Serial.println()）に使用されます。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp2.jpg)  

:::note
    現時点では公式のWindows 10ドライバーはありません。Windows 10ユーザーは、デバイスマネージャーから**\LinkIt_ONE_IDE\drivers\mtk**内のWindows 7ドライバーファイルを手動で選択することができます。一部のPCで動作が確認されています。
:::
### ファームウェアの更新
LinkIt ONEボードのファームウェアは定期的に更新する必要があります。最新のLinkIt ONE SDKにはファームウェアのバージョンが含まれています。

- ファームウェアの更新を開始する前に、スライドスイッチが正しい位置にあることを確認してください（**MS/UART** は **MS** の位置に、**USB/BAT** は **USB** の位置にする必要があります）:

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONEUpdateFirmware2.jpg)  

- **\LinkIt_ONE_IDE\hardware\tools\mtk** フォルダ内の FirmwareUpdater.exe アプリケーションを実行します。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware.jpg)  

- ボタンをクリックしてから LinkIt ONE を PC に接続します。更新が正常に完了するまで約1分待ちます。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware_ok.jpg)  

### コードのアップロード (Blinky)

- ファームウェアのアップロード用にスライドスイッチを設定します（つまり、MS/UART を UART の位置に、電源スイッチを USB の位置にします）。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp3.jpg)

- LinkIt ONE IDE で **File** -> **Examples** -> **Basics** -> **Blink** を開きます。
- **Tools** -> **Port** で **MTK USB Debug port** に対応する COM ポート番号を選択します。
- **Tools > Board > LinkIt One** をクリックしてボードを選択します。

LinkIt One が見つからない場合は、[Arduino IDE に Seeed ボードを追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を確認してください。

- コードをコンパイルしてアップロードします。
- **L** とマークされた LED が点滅するはずです。

### アンテナの接続

LinkIt ONE には3つのアンテナが付属しています。それらは以下の用途に使用されます：

- GSM/GPRS
- Wi-Fi/BT
- GPS

以下の画像のようにアンテナを接続してください。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Linkit_one_antenna.jpg)

:::note
    - アンテナをボードから引き抜く際は注意してください。無理な力を加えないでください。
    - ボードの方向に対して垂直方向に力を加えるようにしてください。そうしないとアンテナパッドを損傷する可能性があります。
:::

### SIMカードとSDカードの挿入

LinkIt ONE は標準サイズのSIMカードとMicro SDカードを受け入れます。以下の画像に従って挿入してください。

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONE_SIM_SDCard_Insert.jpg)

### LinkIt ONE SDKのサンプルコードを探索する

LinkIt ONE SDKには、GSM、GPRS、WiFi、BT、オーディオ、GPSなどの周辺機器を使用するための多くの例やサンプルコードが含まれています。まずそれらを探索し、APIドキュメントを読んでください。APIドキュメントは以下で利用可能です：

- [ユーザーガイド](https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd)
- [APIリファレンスサイト](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/api_references/Core_Digital.gsp)

## LinkIt ONEに対応するGrovesとShields

- 私たちはセンサー、アクチュエーター、ディスプレイ、その他のモジュールを含む数百種類のGrovesとShieldsを製造しています。
- これらのGrovesとShieldsを使用してアイデアを簡単に実現できます。
- ただし、LinkIt ONEはすべてのGrovesとShieldsをサポートしているわけではありません。
- LinkIt ONEに対応するGrovesとShieldsのリストを準備しました：

[![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Compatible_Groves_and_Shields_for_LinkIt_ONE.png)](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/LinkIt_ONE_Comparability_Test.xlsx)

## LinkIt ONE用Sidekick Basic Kitのチュートリアル

![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/350px-LinkitONESidebox.jpg)

LinkIt ONE用Sidekick Basic Kitは、LinkIt ONEボードと一緒に使用するよう設計されています。このキットは、LinkItプラットフォームに迅速に慣れるのを助けます。DIYプロジェクトで人気のアクセサリーが多数含まれています：ブレッドボード、ジャンパーワイヤー、カラフルなLED、抵抗器、ブザーなど。これらは便利なボックスに収められており、持ち運びが簡単で、散らかりを最小限に抑えます。このキットには完全なガイドが含まれており、初心者がLinkIt ONEに慣れるための最良の方法を提供する10種類のコースが記載されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2027)

## FAQs

**Q1: LinkIt ONEで3Gまたは4Gネットワークにアクセスできますか？**

A1: いいえ、しかしGPRSネットワークを使用することができます。

**Q2: GSMデモを正常にアップロードした後、シリアルモニターに何も表示されません。**

A2: 以下の手順に従ってください。

- 印刷用にモデムUSBポートを選択してください。
- 正しいボーレートを選択してください。
- 別のデモを使用してテストしてください。
- ファームウェアを更新して再試行してください。

**Q3: GPRS機能が動作しません。「LGPRS」スケッチを試しましたが成功しませんでした。**

A3: 以下の手順に従ってください。

- GPRSカードがロックされていないことを確認してください。
- このカードを使用して携帯電話でGPRSネットワークにアクセスできますか？
- SMSは動作しますか？

**Q4: 「Blink」スケッチをLinkIt ONEにアップロードできません。故障していますか？**

A4: 以下の手順に従ってください。

- 2つのスイッチが正しい位置にあるか確認してください（Uart & USB）。
- 正しいCOMポート（MTK USB DEBUG PORT）を選択してください。
- ファームウェアを更新して再試行してください。
- 別のPCで試してください。
- 別のUSBケーブルを試してください。

**Q5: LinkIt ONEは録音をサポートしていますか？**

A5: はい、オーディオジャックは録音の入力インターフェースとして使用できます。MT2502AにはADCが統合されています。

**Q6: LinkIt ONEに統合されたWiFiモジュールはモニターモードをサポートしていますか？**

A6: LinkIt ONEの[WiFi API](https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html)リファレンスを参照してください。接続されたネットワークのRSSIをサポートしていますが、非接続WiFiネットワークのモニターモードは利用できません。

**Q7: LinkIt ONEのバッテリーソケットに5Vを適用できますか？**

A7: 申し訳ありませんが、5Vバッテリーは使用できません。LinkIt ONEボードには3.7Vリチウムイオン充電式バッテリーが付属しています。付属のバッテリーを使用することをお勧めします。

**Q8: LinkIt ONEを使用してGPRSでウェブに接続する方法についての情報はどこで見つけられますか？**

A8: LinkIt ONE IDEには、GPRSを使用してウェブに接続するための例が含まれています。最新バージョンのIDEをインストールして例を確認してください。こちらが[GPRS API](https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html)です。


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース

**回路図 / 設計ファイル:**

- [LinkIt ONE V1.0 Eagleファイル](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/202000437_PCBA%20Linkit%20ONE_PDF.zip)
- [LinkIt ONE V1.0 PDF形式の回路図](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip)

**ソフトウェア:**

- [MediaTek_LinkIt_SDK_for_Arduino](https://labs.mediatek.com/en/platform/linkit-one.html)

**データシートとユーザーガイド:**

- [LinkIt_ONE_Hardware_Reference_Design_v1_0](https://labs.mediatek.com/site/znch/access_denied/access_denied.gsp)
- [LinkIt ONE_Pinout Diagram_v1.0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/LinkIt_ONE_Pinout_Diagram_v1_0.pdf)
- [MediaTek_LinkIt_Developers_Guide_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_LinkIt_ONE_Developers_Guide_v1_3.pdf)
- [MediaTek_MT2502A_SOC_Data_Sheet_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT2502A_SOC_Data_Sheet_v1_0.pdf)
- [MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0.pdf)
- [MediaTek_MT3332_GPS_Data_Sheet_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT3332_GPS_Data_Sheet_v1_0.pdf)

**ヘルプを得る**

- [MediaTek LinkIt ONEフォーラム](https://labs.mediatek.com/forums/forums/list.page)

**その他**

- [参照: LinkIt ONE用Sidekick Base Kit](https://www.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>