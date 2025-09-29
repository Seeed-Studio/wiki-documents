---
description: LinkIt Smart 7688
title: LinkIt Smart 7688
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_Smart_7688
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Linkit_Smart_product.jpg)

:::danger note
MediaTek Labsの閉鎖により、関連リンクはすべて無効になりました。関連ファイルをダウンロードする必要がある場合は、以下のリンクで検索してください：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

LinkIt Smart 7688（コンパクトなコントローラーボード）は、OpenWrt LinuxディストリビューションとMT7688（[データシート](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/MT7688_datasheet.pdf)）に基づいたオープン開発ボードです。このボードは、スマートホーム向けのリッチアプリケーションIoTデバイスのプロトタイピングに特化して設計されています。ボードは十分なメモリとストレージを提供し、堅牢なビデオ処理を可能にします。また、Python、Node.js、Cプログラミング言語でデバイスアプリケーションを作成するオプションも提供します。このボードは、MediaTek LinkIt Smart 7688プラットフォームの一部であり、他の開発ボードも含まれています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkIt-Smart-7688-p-2573.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴
---
* シングル入力シングル出力（1T1R）Wi-Fi 802.11 b/g/n。
* GPIO、I<sup>2</sup>C、I<sup>2</sup>S、SPI、UART、PWM、イーサネットポートのピンアウト。
* 580 MHz MIPS CPU。
* 32MBフラッシュと128MB DDR2 RAM。
* USBホスト。
* Micro SDスロット。

## アプリケーションアイデア
---
* スマートホーム向けリッチアプリケーションIoTデバイス
* ロボティクス

## 仕様
---
<table>
<tr>
<th>カテゴリ</th>
<th>特徴</th>
<th>仕様</th>
</tr>
<tr>
<td rowspan="4">MPU</td>
<td>チップセット</td>
<td>MT7688AN</td>
</tr>
<tr>
<td>コア</td>
<td>MIPS24KEc</td>
</tr>
<tr>
<td>クロックスピード</td>
<td>580MHz</td>
</tr>
<tr>
<td>動作電圧</td>
<td>3.3V</td>
</tr>
<tr>
<td>PCBサイズ</td>
<td>寸法</td>
<td>55.7 x 26 mm</td>
</tr>
<tr>
<td rowspan="2">メモリ</td>
<td>フラッシュ</td>
<td>32MB</td>
</tr>
<tr>
<td>RAM</td>
<td>128MB DDR2</td>
</tr>
<tr>
<td rowspan="2">電源</td>
<td>USB電源</td>
<td>5V (USB micro-B)</td>
</tr>
<tr>
<td>VCC</td>
<td>3.3V (ピンブレークアウト)</td>
</tr>
<tr>
<td rowspan="2">GPIO</td>
<td>ピン数</td>
<td>22 (MT7688AN)</td>
</tr>
<tr>
<td>電圧</td>
<td>3.3V</td>
</tr>
<tr>
<td rowspan="5">PWM</td>
<td>ピン数</td>
<td>4 (MT7688AN)</td>
</tr>
<tr>
<td>電圧</td>
<td>3.3V</td>
</tr>
<tr>
<td>最大解像度</td>
<td>7ビット（カスタマイズ可能）</td>
</tr>
<tr>
<td rowspan="2">解像度ごとの最大周波数</td>
<td>

100kHz@1ビット,
50kHz@2ビット,
25kHz@3ビット,
12.5kHz@4ビット,
6.25kHz@5ビット,
3.125kHz@6ビット,
1.5625kHz@7ビット（標準モード）

</td></tr>
<tr>
<td>

40MHz@1ビット,
20MHz@2ビット,
10MHz@3ビット,
5MHz@4ビット,
2.5MHz@5ビット,
1.25MHz@6ビット,
625kHz@7ビット
（高速モード）

</td></tr>
<tr>
<td>外部割り込み</td>
<td>ピン数</td>
<td>22 (MT7688AN)</td>
</tr>
<tr>
<td rowspan="3">SPI</td>
<td>セット数</td>
<td>1 (MT7688AN)</td>
</tr>
<tr>
<td>ピン番号</td>
<td>P22, P23, P24（オンボードフラッシュと共有）, P25</td>
</tr>
<tr>
<td>最大速度</td>
<td>25 MHz</td>
</tr>
<tr>
<td rowspan="3">SPIスレーブ</td>
<td>セット数</td>
<td>1 (MT7688AN)</td>
</tr>
<tr>
<td>ピン番号</td>
<td>P28, P29, P30, P31</td>
</tr>
<tr>
<td>最大速度</td>
<td>25 MHz</td>
</tr>
<tr>
<td rowspan="2">I<sup>2</sup>S</td>
<td>セット数</td>
<td>1 (MT7688AN)</td>
</tr>
<tr>
<td>ピン番号</td>
<td>P10, P11, P12, P13</td>
</tr>
<tr>
<td rowspan="3">I<sup>2</sup>C</td>
<td>セット数</td>
<td>1</td>
</tr>
<tr>
<td>ピン番号</td>
<td>P20, P21</td>
</tr>
<tr>
<td>速度</td>
<td>120K/400K</td>
</tr>
<tr>
<td rowspan="3">UART Lite</td>
<td>セット数</td>
<td>3 (MT7688AN)</td>
</tr>
<tr>
<td>ピン番号</td>
<td>P8, P9, P16, P17, P18, P19</td>
</tr>
<tr>
<td>最大速度</td>
<td>0.5Mbps</td>
</tr>
<tr>
<td rowspan="3">USBホスト</td>
<td>セット数</td>
<td>1 (MT7688AN)</td>
</tr>
<tr>
<td>ピン番号</td>
<td>P6, P7</td>
</tr>
<tr>
<td>速度</td>
<td>Micro-AB</td>
</tr>
<tr>
<td rowspan="3">通信</td>
<td>Wi-Fi</td>
<td>1T1R 802.11 b/g/n (2.4G)</td>
</tr>
<tr>
<td>イーサネット</td>
<td>1ポート 10/100 FE PHY</td>
</tr>
<tr>
<td>ピン番号</td>
<td>P2, P3, P4, P5</td>
</tr>
<tr>
<td>ユーザーストレージ</td>
<td>SDカード</td>
<td>Micro SD
SDXC</td>
</tr>
</table>

## ハードウェア概要
----
![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Component_intro_with_text_1200.jpg)

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Back_hardware_view_with_text_1200_s.jpg)

:::note
    * 製品を不適切な操作から保護するため、以下の注意事項に従ってください。安定した出力を持つ信頼性の高い電源アダプタを選択してください。7688の電源入力条件の推奨事項：
      * - 電源入力のオーバーシュート電圧は5.5を超えないこと。
      * - 電圧波形は定格電圧の±100mV以内であること。
:::

### 部品リスト

<table>
<tr>
<th>部品名</th>
<th>数量</th>
</tr>
<tr>
<td>LinkIt<sup>TM</sup> Smart 7688</td>
<td>1個</td>
</tr>
<tr>
<td>マニュアル</td>
<td>1冊</td>
</tr>
</table>

## はじめに
----
### 組み込みオペレーティングシステムへの接続

:::note
    マニュアルには2つの方法が記載されています。ここでは、少し難しいですが、長期的に多くの利点が得られる高度な方法（USBからシリアルアダプタを使用）を紹介します。
:::

#### 必要な材料

* LinkIt Smart 7688 × 1
* USBケーブル（タイプAからマイクロタイプB）× 2
* USBからシリアルアダプタ × 1
* ジャンパーワイヤー × 3

### Windowsでの操作

**1.** [PuTTy](http://www.putty.org/)をインストールします。PuTTYは、SSH（Secure Socket Shell）を使用して開発ボードのオペレーティングシステムにアクセスするためのシステムコンソール環境を提供します。

**2.** [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US) Print Serviceをインストールします（Windows 7、Windows 8、Windows 10用）。

**3.** ドライバをインストールします。FTDIチップを使用したUSBケーブルを使用している場合は、[こちら](https://www.ftdichip.com/Drivers/VCP.htm)からドライバをダウンロードしてインストールしてください。最新のドライバで問題が発生する場合は、[旧バージョン](https://www.ftdichip.com/Support/Documents/InstallGuides.htm)をインストールしてみてください。

**4.** 次に、以下の表に示すように、シリアルからUSBケーブルをLinkIt Smart 7688のUARTピンに接続します：

| USBアダプタのピン | LinkIt Smart 7688で接続する対応ピン |
|--------------------|------------------------------------|
| Pin RX            | Pin 8                             |
| Pin TX            | Pin 9                             |
| Pin GND           | Pin GND                           |

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/LinkIt_Smart_7688_demo_connection_1200_s.jpg)

**5.** シリアルからUSBケーブルを接続した後、デバイスマネージャを開き、以下のようにCOMポート番号を確認します。この番号はコンピュータによって異なる場合があります。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/COM_port.jpg)

**6.** PuTTYターミナルを起動し、デバイスマネージャで見つかったUSBデバイスのCOMポート番号を入力し、Serialラジオボタンをクリックし、Speedボックスに57600を入力してOpenをクリックします。以下のように設定します：
![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Putty_configuration.jpg)

**7.** これで、Linuxコンソールのようなテキストが表示されます。

### Macでの操作

**1.** 必要に応じてドライバをインストールします。ケーブルメーカーのウェブサイトで、Mac用のドライバ要件とインストール手順を確認してください。

**2.** ケーブルをPC/ラップトップに接続し、LinkIt Smart 7688に接続します。

**3.** ターミナルセッションを開きます。

**4.** ターミナルで **ls /dev/cu*** を入力します。デバイスのリストが表示されます。cu.usbserial-XXXXXXXXのようなものを探します（XXXXXXXXは通常ランダムな識別子です）。これはシステムコンソールにアクセスするためのシリアルデバイスです。例：
```
$ls /dev/cu*

/dev/cu.Bluetooth-Incoming-Port

/dev/cu.Bluetooth-Modem

/dev/cu.pablop-WirelessiAP

/dev/cu.usbserial-A6YMCQBR
```

**5.** screenユーティリティを使用してシリアルポートに接続し、ボーレートを57600に設定します。これは、システムコンソールのボーレートがデフォルトで57600であるためです。例：
```
$screen /dev/cu.usbserial-XXXXXXXX 57600
```

**6.** これでシステムコンソールに接続されます。ターミナルでENTERを押してプロンプトを表示します。プロンプトがOS Xターミナルアプリケーションとは異なることに気付くでしょう。これはLinkIt Smart 7688のプロンプトで、以下のように表示されます：
```
  root@myLinkIt:/#
```

**7.** このコンソールを通じてLinkIt Smart 7688システムに変更を加える準備ができました。

### Linuxでの操作

**1.** 必要に応じてドライバをインストールします。ケーブルメーカーのウェブサイトで、Linux用のドライバ要件とインストール手順を確認してください。

**2.** ケーブルを接続し、LinkIt Smart 7688に接続します。

**3.** ターミナルセッションを開きます。

**4.** ターミナルで **ls /dev/ttyUSB*** を入力します。デバイスのリストが表示されます。cu.usbserial-XXXXXXXXのようなものを探します（XXXXXXXXは通常ランダムな識別子です）。例：
```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```

**5.** **screen** ユーティリティを使用してシリアルポートに接続し、ボーレートを **57600** に設定します。これは、システムコンソールのボーレートがデフォルトで57600であるためです。例：
```
$sudo screen /dev/ttyUSB0 57600
```

**6.** これでシステムコンソールに接続されます。ターミナルでENTERを押してプロンプトを表示します。プロンプトが通常のアプリケーションとは異なることに気付くでしょう。これはLinkIt Smart 7688のプロンプトで、以下のように表示されます：
```
  root@myLinkIt:/#
```

**7.** このコンソールを通じてLinkIt Smart 7688システムに変更を加える準備ができました。

### Blink例の実行

#### 必要な材料

* LinkIt Smart 7688 × 1
* USBケーブル（タイプAからマイクロタイプB）× 1
* USBからシリアルアダプタ × 1
* ジャンパーワイヤー × 3

#### Blinkの実行

**1.** マイクロUSBケーブルでボードに電源を供給します（USBホストインターフェースではなく、USB電源インターフェースのみを接続してください）。
![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Power_up.jpg)

**2.** PuTTyを起動し、前のセクションで説明したようにUSBからシリアルアダプタを使用してシステムに接続します。

**3.** **python /IoT/examples/blink-gpio44.py** と入力し、**Enter** を押してBlink例を実行します。

:::note
    最初の単語「python」の後に1つの空白スペースがあることに注意してください。そうしないと、例が見つかりません。
:::

**4.** 約2秒後、Wi-Fi LEDが一定の間隔で点滅することに気付くでしょう。

**5.** システムコンソールで **CTRL + C** を入力して、この例を終了します。

### インターネットに接続する（ステーションモードに切り替え）

Wi-Fi には2種類のモードがあります：APモードとステーションモードです。それらの違いについては[こちら](https://answers.yahoo.com/question/index?qid=20061207225409AANCN17)を参照してください。

**1.** マイクロUSBケーブルを使用してボードに電源を供給します。

**2.** コンピュータのWi-Fi接続ユーティリティを開き、LinkIt_Smart_7688_XXXXXXという名前のアクセスポイントに接続します。XXXXXXはボードごとに異なるハードウェア識別子です。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Connect_wifi.jpg)

**3.** ブラウザを開き、URLに「mylinkit.local/」または「192.168.100.1」を入力します。rootのパスワードを設定してサインインします。右上の「Network」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Network_conf.jpg)

**4.** ステーションモードを選択し、右側の「Refresh」または下向き矢印をクリックして接続するAPを見つけます。APを選択した後、必要に応じてパスワードを入力します。「Configure & Restart」をクリックして完了します（以下の画像参照）。その後、モード切り替えのために約30秒待ちます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Station_mode.jpg)

**5.** PuTTyを起動し、前のセクションで説明したようにUSB-シリアルアダプタを使用してシステムに接続します。

**6.** ifconfigを入力し、以下のようにinet addrのIPアドレスを確認します：

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/IFCONFIG.jpg)

:::note
    システムを再起動してもステーションモードのままになります。APモードに戻すには、Wi-Fiボタンを少なくとも5秒間押してください。注意：rebootコマンドを使用して組み込みOSを再起動する必要があります。
:::

**7.** 新しいブラウザタブにIPアドレスを入力し、Webユーザーインターフェースにログインしてシステムを構成できます。

**8.** これでホストコンピュータとLinkIt Smart 7688の両方がインターネットに接続されました。コンソールで **ping www.mediatek.com** を入力すると、以下のような結果が得られます：

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Ping_result.jpg)

**9.** これで、開発ボード上でシステムを構成するためにインターネットを使用できます。

## デモ：Hello Worldの例
---

:::note
    ネイティブアプリケーション開発中にメモリ不足を避けるために、より強力なホスト環境でネイティブアプリケーション開発環境をセットアップし、LinkIt Smart 7688ターゲットの実行可能形式をクロスコンパイルすることをお勧めします。以下の表は、LinkIt Smart 7688のプログラミング言語とホストコンピュータ上の関連開発環境の概要を示しています。
:::

| プログラミング言語 | ツールとライブラリ                     | アプリケーション                              | サポートされるホストプラットフォーム |
|----------------------|--------------------------------------|-------------------------------------------|--------------------------|
| C/C++                | クロスコンパイルツールチェーン         | システムプログラミング                       | OS X Linux               |
| Python               | LinkIt Smart 7688上のPythonランタイム | プロトタイピング ネットワーク Arduinoブリッジライブラリ | OS X Linux Windows       |
| Node.js              | LinkIt Smart 7688上のNode.jsランタイム | プロトタイピング ネットワーク                | OS X Linux  Windows      |

### PythonでのHello Worldの例

**1.** FileZillaを使用し、この[チュートリアル](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29)を参照してください。サーバーIP（**ホスト名**を置き換え）は、前の[ステーションモードに切り替え](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch_to_Station_mode)セクションで見つけたinet addrです。ユーザー名はroot、パスワードはそのセクションで設定したものです。

**2.** テキストエディタを開き、以下のサンプルコードをコピーして貼り付け、**helloworld.py**として保存します。
```
print "Hello World!"
```

**3.** FileZillaを使用して、**helloworld.py**ファイルをターゲット開発環境（LinkIt Smart 7688）にコピーし、**root**フォルダに配置します。

**4.** PuTTyを起動し、USB-シリアルアダプタを使用してシステムに接続します。

**5.** 作業ディレクトリを**/root**に設定し、**python helloworld.py**を入力して実行します。

**6.** コンソールに**Hello World**!と表示されるのが確認できます。

## よくある質問 (FAQs)

[こちら](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq)から、Mediatek の FAQ をご覧いただけます。


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Hardware_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
----
* **[Eagle]** [LinkIt_Smart_7688](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Hardware_Schematics.zip)
* **[PDF]** [LinkIt_Smart_7688 PCB](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt%20Smart%207688%20Layout.pdf)
* **[PDF]** [LinkIt_Smart_7688 回路図](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt%20Smart%207688.pdf)
* **[ドキュメント]** [マニュアル](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Manual.zip)
* **[ドキュメント]** [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
* **[ドキュメント]** [MediaTek LinkIt? Smart 7688 リソース](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
* **[ドキュメント]** [ファームウェアアップグレード手順](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt_Smart_7688_Firmware_upgrade.zip)
* **[ドキュメント]** [証明書](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt_Smart_7688-Certificate.zip)
* **[ドキュメント]** [Mediatek](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## プロジェクト

**myva-Home (音声制御によるホームオートメーション)**: LinkIt Smart と Android を使用し、簡単に利用できる例やライブラリを活用した音声制御ホームオートメーションプロジェクト。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/smerkousdavid/myva-home-voice-controlled-home-automation-f4cfe3/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>