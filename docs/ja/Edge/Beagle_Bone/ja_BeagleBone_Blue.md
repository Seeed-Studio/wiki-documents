---
description: BeagleBone® Blue
title: BeagleBone® Blue
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BeagleBone_Blue
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover.jpg" /></div>

BeagleBone® Blueは、BeagleBoard.Org Foundationによって作成された、拡張性が高く、メイカー向けで、コミュニティに支えられたオープンハードウェアコンピュータであるBeagleBone® Blackの非常に成功したオープンソースハードウェア設計に基づいています。

BeagleBone® Blueは、BeagleBone® Black Wirelessの高性能で柔軟なWiFi/Bluetooth WiLink™インターフェースと、Strawson DesignのRobotics Capeのロボティクス機能を組み合わせています。BeagleBone® Blueには、充電器とバッテリーレベルLEDを備えた2セル（2S）LiPoバッテリー管理、8つのサーボモーター出力、4つのDCモータードライバー、4つのエンコーダ入力、多数のGPIOおよびシリアルプロトコルコネクタ（CANを含む）、9軸IMUと気圧計、4つのADC入力、PC USBインターフェース、USB 2.0ホストポート、リセットボタン、電源ボタン、2つのユーザー設定可能なボタン、6つのインジケータLEDが搭載されています。高性能なTI ARMプロセッサと512MBのDDR3を統合したOctavo SystemsのSystem-In-Packageを基盤としており、BeagleBone® Blueは約10秒でLinuxを起動し、単一のUSBケーブルで5分以内にウェブブラウザを通じて開発を開始できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

----

* **プロセッサ: Octavo Systems OSD3358 1GHz ARM® Cortex-A8**
  * 512MB DDR3 RAM
  * 統合電源管理
  * 2×32ビット 200-MHz プログラマブルリアルタイムユニット（PRUs）
  * ARM Cortex-M3
  * Debian Linuxがプログラムされたオンボード4GB 8ビットeMMCフラッシュストレージ

* **接続性とセンサー**
  * バッテリー: 2セルLiPo対応（バランス機能付き）、9-18V充電器入力
  * ワイヤレス: 802.11bgn、Bluetooth 4.1およびBLE
  * モーター制御: 8つの6Vサーボ出力、4つのDCモーター出力、4つのエンコーダ入力
  * センサー: 9軸IMU、気圧計
  * 接続性: 高速USB 2.0クライアントおよびホスト
  * ユーザーインターフェース: 11個のユーザー設定可能なLED、2つのユーザー設定可能なボタン
  * 追加センサーを簡単に接続可能なインターフェース:
    * GPS、DSM2ラジオ、UARTs、SPI、I2C、1.8Vアナログ、3.3V GPIOs

* **ソフトウェア互換性**
  * [Debian](http://elinux.org/Beagleboard:BeagleBoneBlack_Debian)
  * [ROS](https://dscl.lcsr.jhu.edu/home/courses/me530707_2017_edumip_ros)
  * [ArduPilot](https://github.com/mirkix/ardupilotblue)
  * [LabVIEW](https://github.com/ktalke12/Labview-MiP)を使用したグラフィカルプログラミング
  * Node.js上のCloud9 IDEとBoneScriptライブラリ
  * その他多数

## 仕様

----

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-dlfj{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n.tg .tg-14gg{background-color:#ffffff;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-88pu{background-color:#ffffff;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 824}}>
    <colgroup>
      <col style={{width: 275}} />
      <col style={{width: 252}} />
      <col style={{width: 297}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls">項目</th>
        <th className="tg-l5ls" colSpan={2}>説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-q7v3">プロセッサ<br />(OSD3358に統合)</td>
        <td className="tg-dlfj" colSpan={2}>● AM335x 1GHz ARM® Cortex-A8<br />● SGX530グラフィックスアクセラレータ<br />● NEON浮動小数点アクセラレータ<br />● 2x PRU 32ビット 200MHzマイクロコントローラ</td>
      </tr>
      <tr>
        <td className="tg-q7v3">メモリ</td>
        <td className="tg-dlfj" colSpan={2}>● 512MB DDR3800MHZ RAM (OSD3358に統合)<br />● 4GB 8ビットeMMCオンボードフラッシュストレージ<br />● microSD用SD/MMCコネクタ</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={18}><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />接続性<br /></td>
        <td className="tg-dlfj">高速USB 2.0クライアントポート</td>
        <td className="tg-14gg">USB0へのアクセス、クライアントモード（microUSB経由）</td>
      </tr>
      <tr>
        <td className="tg-dlfj">高速USB 2.0ホストポート</td>
        <td className="tg-14gg">USB1へのアクセス、Type Aソケット、500mA LS/FS/HS</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={6}><br /><br />WiLink1835 <br />WiFi 802.11 b/g/n 2.4GHz.<br />以下のモードをサポート:</td>
        <td className="tg-88pu">2x2 MIMO</td>
      </tr>
      <tr>
        <td className="tg-88pu">AP</td>
      </tr>
      <tr>
        <td className="tg-88pu">SmartConfig</td>
      </tr>
      <tr>
        <td className="tg-88pu">STA</td>
      </tr>
      <tr>
        <td className="tg-88pu">Wi-Fi Direct</td>
      </tr>
      <tr>
        <td className="tg-88pu">802.11sに基づくWi-Fiメッシュ</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={3}><br />シリアルポート<br /></td>
        <td className="tg-14gg">UART0、UART1、UART5は4ピンJSTコネクタ経由で利用可能</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART2は6ピンJSTコネクタ経由で利用可能（EM-506 GPSスタイルコネクタ）</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART4 RXは3ピンDSM2コネクタ経由で利用可能</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>WiLink 1835 Bluetooth 4.1（BLE対応）</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>I2C1は4ピンJSTコネクタ経由で利用可能</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>SPI1 CS0 (S1.1)およびSPI1 CS1 (S1.2)は6ピンJSTコネクタ経由で利用可能</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>CANは4ピンJSTコネクタ経由で利用可能（TCAN1051 CANトランシーバーを含む）</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>8 GPIOs (GP0およびGPI1)は6ピンJSTコネクタ経由で利用可能</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>ADC入力0～3は6ピンJSTコネクタ経由で利用可能</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>3.3VDCおよび5VDC電源出力は4ピンJSTコネクタ経由で利用可能</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br />電源管理</td>
        <td className="tg-dlfj" colSpan={2}>TPS65217C PMICを使用し、システムに電力を供給するための別個のLDOを備えています（OSD3358に統合）</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>2セル（2S）LiPoバッテリーチャージャー（9 – 18VDC DCジャックで駆動）:<br />i., 4つのバッテリーレベルLED;<br />ii.,1つの充電LED</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>6VDC 4Aレギュレータでサーボモーター出力を駆動</td>
      </tr>
      <tr>
        <td className="tg-q7v3">デバッグサポート</td>
        <td className="tg-dlfj" colSpan={2}>JTAGテストポイント</td>
      </tr>
      <tr>
        <td className="tg-q7v3">電源ソース</td>
        <td className="tg-dlfj" colSpan={2}>i., microUSB USB,<br />ii., 2セル（2S）LiPoバッテリーコネクタ,<br />iii.,9 - 18VDC DCジャック</td>
      </tr>
      <tr>
        <td className="tg-q7v3">ユーザー入力/出力</td>
        <td className="tg-dlfj" colSpan={2}>i.,電源ボタン; ii.,リセットボタン; iii.,ブートボタン; iv.,2つのユーザー設定可能なボタン;<br />v.,6つのユーザー設定可能なLED;vi 電源LED</td>
      </tr>
      <tr>
        <td className="tg-q7v3">モーター制御（DCジャックまたは2Sバッテリーからの電力が必要）</td>
        <td className="tg-dlfj" colSpan={2}>i., 4つのDCモータードライバー,<br />ii., 4つのエンコーダ入力,<br />iii.,8つのサーボモーター出力</td>
      </tr>
      <tr>
        <td className="tg-q7v3">センサー<br /></td>
        <td className="tg-dlfj" colSpan={2}>i., 9軸IMU,<br />ii.,気圧計</td>
      </tr>
    </tbody>
  </table>
</div>

## アプリケーションアイデア

* モノのインターネット (IoT)
* スマートハウス
* 産業用途
* 自動化とプロセス制御
* ヒューマンマシンインターフェース
* モーター制御
* UAV制御
* ロボット

## ハードウェア概要

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Hardware_overviw.png" /></div>

## はじめに

----

### 準備

#### ステップ1. 最新イメージの更新

SeeedからBeagleBone® Blueを受け取った際には、イメージはすでにオンボードeMMCに書き込まれています。このため、このステップをスキップすることも可能です。しかし、最新のイメージに更新することを強くお勧めします。

**i.** [beagleboard.org](https://beagleboard.org/latest-images) から最新のイメージをクリックしてダウンロードしてください。

:::note
「IoT」イメージは、グラフィカルユーザーインターフェース（GUI）を使用しない場合に、より多くのディスクスペースを提供します。サイズの関係で、このダウンロードには30分以上かかる場合があります。
:::

Debianディストリビューションがボード用に提供されています。ダウンロードしたファイルは`.img.xz`拡張子を持っています。これはSDカードのセクターごとの圧縮イメージです。

**ii.** SDカードリーダーを使用して、SDカードをPCまたはMACに挿入します。容量が4GB以上のSDカードが必要です。

**iii.** [Etcher](https://etcher.io/) をダウンロードしてインストールしてください。

<a href="https://etcher.io/">Etcher</a> をクリックしてダウンロードし、Etcherを使用して直接```*.img.xz```ファイルをSDカードに書き込むか、```*.img.xz```ファイルを解凍して```*.img```ファイルに変換し、他のイメージ書き込みツールでSDカードに書き込んでください。

プラスアイコンをクリックしてダウンロードしたイメージを追加すると、ソフトウェアが自動的に挿入されたSDカードを選択します。その後、「Flash!」をクリックして書き込みを開始します。書き込みには約20分かかります。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/v2-flash-sd.png" /></div>

その後、SDカードを取り出し、BeagleBone® Blueに挿入してください。

#### ステップ2. 電源供給と起動

BeagleBone® BlueをMicro-USBケーブルでコンピュータに接続します。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/connect.jpg" /></div>

:::caution
USBケーブルを優しく差し込んでください。そうしないとインターフェースを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータ転送ができません。使用しているケーブルが不明な場合は、<a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><strong>こちら</strong></a>をクリックして購入できます。BeagleBone® Blueのモーター制御モジュールを使用する場合、USBポート経由の電源供給では不十分なため、DC-DCポートまたは2Sバッテリーを使用する必要があります。
:::

電源（PWRまたはON）LEDが点灯しているのが確認できます。1分ほどで、他のLEDがデフォルトの設定で点滅し始めます。

* USR0は通常、起動時にハートビートパターンで点滅するように設定されています。
* USR1は通常、起動時にSD（microSD）カードアクセス中に点灯するように設定されています。
* USR2は通常、起動時にCPUアクティビティ中に点灯するように設定されています。
* USR3は通常、起動時にeMMCアクセス中に点灯するように設定されています。
* WIFI LEDは通常、起動時にWiFiネットワーク接続時に点灯するように設定されています（BeagleBone® Blueのみ）。

最新のイメージでは、BeagleへのUSB経由のネットワークアクセスを提供するために、オペレーティングシステム用のドライバーをインストールする必要がなくなっています。古いイメージ、古いオペレーティングシステムを使用している場合、または古いボードへのシリアルアクセス用に追加のドライバーが必要な場合は、以下のリンクから古いドライバーをダウンロードできます。

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-gvcd{background-color:#ffffff;border-color:#000000;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-l0dh{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;text-decoration:underline;\n  vertical-align:top}\n.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}\n.tg .tg-wzu8{background-color:#ffffff;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 826}}>
    <colgroup>
      <col style={{width: 148}} />
      <col style={{width: 155}} />
      <col style={{width: 523}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-wzu8">オペレーティングシステム</th>
        <th className="tg-wzu8">USBドライバー</th>
        <th className="tg-wzu8">コメント</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-v0nz">Windows <br />(64ビット)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe" target="_blank" rel="noopener noreferrer">64ビットインストーラー</a><br /></td>
        <td className="tg-gvcd" rowSpan={2}>不明な場合は、まず64ビットインストーラーを試してください。<br /><br />● Windowsドライバー認証警告が2～3回表示される場合があります。「無視」、「インストール」または「実行」をクリックしてください。<br />● 使用しているWindowsが32ビットか64ビットかを確認するには、この<a href="https://support.microsoft.com/kb/827218" target="_blank" rel="noopener noreferrer">リンク</a>を参照してください。<br />● 最新のサービスリリースがないシステムでは、エラー（0xc000007b）が発生する場合があります。その場合は、この<a href="https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523" target="_blank" rel="noopener noreferrer">リンク</a>をクリックしてインストールし、再試行してください。<br />● Windowsを再起動する必要がある場合があります。<br />● これらのドライバーはWindows 10まで動作確認されています。</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Windows <br />(32ビット)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe" target="_blank" rel="noopener noreferrer">32ビットインストーラー</a><br /></td>
      </tr>
      <tr>
        <td className="tg-v0nz">Mac OS X<br /></td>
        <td className="tg-v0nz"> <a href="https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg" target="_blank" rel="noopener noreferrer">ネットワーク</a> <a href="https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg" target="_blank" rel="noopener noreferrer">シリアル</a></td>
        <td className="tg-gvcd">ネットワークとシリアルドライバーの両方をインストールしてください。</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Linux</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh" target="_blank" rel="noopener noreferrer">mkudevrule.sh</a></td>
        <td className="tg-gvcd">ドライバーのインストールは不要ですが、いくつかのudevルールが役立つ場合があります。</td>
      </tr>
    </tbody>
  </table>
</div>

#### ステップ3. Beagleにアクセスする

ChromeまたはFirefox（Internet Explorerは使用できません）を使用して、ボード上で実行されているウェブサーバーにアクセスしてください。ボードの機能を示すプレゼンテーションが読み込まれます。キーボードの矢印キーを使用してプレゼンテーションを操作してください。

起動が完了すると、コンピュータにネットワークアダプタが表示されるはずです。[Cloud 9 IDE](http://beaglebone.local:3000/)にアクセスするにはクリックしてください。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cloud9.png" /></div>

#### ステップ4. Wi-Fiに接続する

新しいターミナルを開き、以下のコマンドを入力してください。

```
root@beaglebone:/var/lib/cloud9# connmanctl
connmanctl> enable wifi
Enabled wifi
connmanctl> tether wifi disable
Error disabling wifi tethering: Already disabled
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO seeed                wifi_f45eabf743ad_7365656564_managed_psk
    CHAIHUOMAKERS        wifi_f45eabf743ad_4348414948554f4d414b455253_managed_psk
    DIRECT-99-HP DeskJet 4670 series wifi_f45eabf743ad_4449524543542d39392d4850204465736b4a6574203436373020736572696573_managed_psk
    mostfun-5bf7         wifi_f45eabf743ad_6d6f737466756e2d35626637_managed_psk
    DIRECT-TNDESKTOP-71PTKLKmsXO wifi_f45eabf743ad_4449524543542d544e4445534b544f502d373150544b4c4b6d73584f_managed_psk
    HPKJ                 wifi_f45eabf743ad_48504b4a_managed_psk
    ChinaNet-yTGy        wifi_f45eabf743ad_4368696e614e65742d79544779_managed_psk
    GPKJ1                wifi_f45eabf743ad_47504b4a31_managed_psk
    GUMO                 wifi_f45eabf743ad_47554d4f_managed_psk
    jdsfkf               wifi_f45eabf743ad_6a6473666b66_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_f45eabf743ad_7365656564_managed_psk
Error /net/connman/service/wifi_f45eabf743ad_7365656564_managed_psk: Already connected
connmanctl> quit
root@beaglebone:/var/lib/cloud9# ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr f4:5e:ab:f7:43:ad  
          inet addr:192.168.199.145  Bcast:192.168.199.255  Mask:255.255.255.0
          inet6 addr: fe80::f65e:abff:fef7:43ad/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST DYNAMIC  MTU:1500  Metric:1
          RX packets:8920 errors:0 dropped:0 overruns:0 frame:0
          TX packets:3531 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1166820 (1.1 MiB)  TX bytes:3352208 (3.1 MiB)

root@beaglebone:/var/lib/cloud9#
```

```ifconfig wlan0```を入力し、インターネットアドレスが「192.168.199.145」のような形式で表示された場合、Wi-Fiへの接続に成功したことになります。

BeagleBone® Blueがインターネットに接続されたら、以下のコマンドを使用してBeagleBone® Blueを更新することを強くお勧めします。

```
sudo apt-get update
sudo apt-get upgrade
```

更新には時間がかかる場合がありますが、価値があります。

### Demo.1  点滅（Blink）

これはJavascriptのデモです。

Cloud9 IDEの右上隅にある**File->New File->**ボタンをクリックしてください。

:::note
ファイルを作成した後、ファイルを保存し、ファイルタイプを追加することを忘れないでください。
:::

以下のコードをコピーして**Run**をクリックしてください。

```
var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("USR2", b.OUTPUT);
b.pinMode("USR3", b.OUTPUT);
setInterval(toggle, 1000);

function toggle() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("USR2", state);
}
```

これでUSER2 LEDが点滅するのが確認できます。

### Demo.2  Grove-LEDを使用したGPIOの利用

**ステップ1.** 以下のパーツリストに記載されたものを準備してください。

| BeagleBone® Blue | Grove - LEDソケットキット | Groveアダプターケーブル（6ピン） |
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-White-LED-p-2016.jpeg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Universal-4-Pin-to-Beaglebone-Blue-6-Pin-Female-JST%2FSH-Conversion-Cable-%2810-pcs-pack%29-p-3027.html)|

**ステップ2.** LEDソケットキットをBeagleBone® Blueの6ピン**GPIO**インターフェースに接続してください。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/LED.jpg" /></div>

**ステップ3.** Cloud9 IDEで新しいターミナルを開き、以下のコードをこのターミナルに入力してください。

```
cd /sys/class/gpio
echo 49 >export
cd gpio49
echo out >direction
while sleep 1;
do echo 0 >value;
sleep 1;
echo 1 >value;
done
```

これでLEDがハートビートモードで点灯するのが確認できます。

### Demo.3  Grove-GPSを使用したUARTの利用

**ステップ1.** 以下のパーツリストに記載されたものを準備してください。

| BeagleBone® Blue | Grove - GPSソケットキット | Groveアダプターケーブル（4ピン） |
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-GPS.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[今すぐ購入](https://www.seeedstudio.com/grove-gps-p-959.html)|[今すぐ購入](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**ステップ2.** Grove-GPSセンサーをBeagleBone® Blueの4ピン**UART1**インターフェースに接続してください。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS_hARD.jpg" /></div>

**ステップ 3.** Cloud9 IDEで新しいターミナルを開き、以下のコードをターミナルに入力してください。

```
apt install tio
tio /dev/ttyO1 -b 9600
```

その後、以下の画像のようにターミナルにGPS情報が表示されます。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS.png" /></div>

### デモ.4 Grove-Digital Light Sensorを使用したI2Cの利用

**ステップ 1.** 以下のパーツリストに記載されたものを準備してください。

| BeagleBone® Blue | Grove - LEDソケットキット | Groveアダプターケーブル(4ピン) |
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_Light_Sensor.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[今すぐ購入](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**ステップ 2.** Grove-Digital Light SensorをBeagleBone® Blueの4ピン**I2C**インターフェースに接続してください。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_light.jpg" /></div>

**ステップ 3.** Cloud9 IDEで新しいターミナルを開き、以下のコードをターミナルに入力してください。

```
cd /sys/bus/i2c/devices/i2c-1;
echo tsl2561 0x29 >new_device;
watch -n0 cat 1-0029/iio\:device0/in_illuminance0_input
```

その後、以下の画像のように光の値が表示されます。

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_520.png" /></div>

## Grove互換性リスト

Groveはモジュール化された標準化コネクタのプロトタイピングシステムです。Groveは電子機器を組み立てる際にブロック構造のアプローチを採用しています。ジャンパーやはんだ付けベースのシステムと比較して、接続、実験、構築が容易で、学習システムを簡素化しますが、単純化しすぎることはありません。他のプロトタイプシステムの中には、レベルをブロック構造にまで下げるものもあります。それも良い学習方法ですが、Groveシステムは実際のシステムを構築することを可能にします。接続するにはある程度の学習と専門知識が必要です。

以下は、BeagleBone® Blueと相性の良いGroveモジュールのリストです。

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-fhi2{background-color:#ffffff;color:#000000;font-size:20px;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-366q{background-color:#ffffff;color:#000000;font-size:18px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fhi2">SKU</th>
        <th className="tg-fhi2">アイテム</th>
        <th className="tg-fhi2">I/Oタイプ</th>
        <th className="tg-fhi2">動作電圧</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-366q">101020017</td>
        <td className="tg-366q">Grove - 回転角センサー</td>
        <td className="tg-366q">アナログ</td>
        <td className="tg-366q">1.8Vで動作可能</td>
      </tr>
      <tr>
        <td className="tg-366q">101020048</td>
        <td className="tg-366q">Grove - 回転角センサー(P)</td>
        <td className="tg-366q">アナログ</td>
        <td className="tg-366q">1.8Vで動作可能</td>
      </tr>
      <tr>
        <td className="tg-366q">101020036</td>
        <td className="tg-366q">Grove - スライドポテンショメータ</td>
        <td className="tg-366q">アナログ</td>
        <td className="tg-366q">1.8Vで動作可能</td>
      </tr>
      <tr>
        <td className="tg-366q">101020031</td>
        <td className="tg-366q">Grove - 圧電振動センサー</td>
        <td className="tg-366q">アナログ</td>
        <td className="tg-366q">1.8Vで動作可能</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - ボタン</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - ボタン(P)</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020001</td>
        <td className="tg-366q">Grove - エンコーダ</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - スイッチ(P)</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - 傾きスイッチ</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - 水センサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - 衝突センサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020030</td>
        <td className="tg-366q">Grove - マウスエンコーダ</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - 緑色LED</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - 赤色LED</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020172</td>
        <td className="tg-366q">Grove - ラインファインダー v1.1</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - 水センサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020019</td>
        <td className="tg-366q">Grove - 温度＆湿度センサーPro</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020020</td>
        <td className="tg-366q">Grove - PIRモーションセンサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020052</td>
        <td className="tg-366q">Grove - GSRセンサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020175</td>
        <td className="tg-366q">Grove - IR距離インタラプタ v1.2</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020033</td>
        <td className="tg-366q">Grove - 耳クリップ心拍センサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020037</td>
        <td className="tg-366q">Grove - タッチセンサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020030</td>
        <td className="tg-366q">Grove - デジタル光センサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020232</td>
        <td className="tg-366q">Grove - 音声認識器 v1.0</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - 衝突センサー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020005</td>
        <td className="tg-366q">Grove - ELドライバ</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030009</td>
        <td className="tg-366q">Grove - 白色LED</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030010</td>
        <td className="tg-366q">Grove - 青色LED</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - 赤色LED</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - 緑色LED</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030014</td>
        <td className="tg-366q">Grove - マルチカラー点滅LED (5mm)</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020001</td>
        <td className="tg-366q">Grove - 可変色LED</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020005</td>
        <td className="tg-366q">Grove - LEDストリングライト</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020048</td>
        <td className="tg-366q">Grove - チェイン可能RGB LED v2.0</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - スイッチ(P)</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - ボタン(P)</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - ボタン</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020038</td>
        <td className="tg-366q">Grove - 磁気スイッチ</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - 傾きスイッチ</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020005</td>
        <td className="tg-366q">Grove - リレー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">107020000</td>
        <td className="tg-366q">Grove - ブザー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020014</td>
        <td className="tg-366q">Grove - ドライリードリレー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020003</td>
        <td className="tg-366q">Grove - 振動モーター</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">108020021</td>
        <td className="tg-366q">Grove - ミニファン v1.1</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020004</td>
        <td className="tg-366q">Grove - ソリッドステートリレー</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020007</td>
        <td className="tg-366q">Grove - スクリューターミナル</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020008</td>
        <td className="tg-366q">Grove - MOSFET</td>
        <td className="tg-366q">デジタル</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020212</td>
        <td className="tg-366q">Grove - 温度＆湿度センサー(SHT31)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020192</td>
        <td className="tg-366q">Grove - 気圧センサー (BMP280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020080</td>
        <td className="tg-366q">Grove - IMU 9DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020054</td>
        <td className="tg-366q">Grove - 3軸デジタル加速度計(±16g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020252</td>
        <td className="tg-366q">Grove - IMU 10DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020193</td>
        <td className="tg-366q">Grove - 気圧センサー(BME280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020082</td>
        <td className="tg-366q">Grove - シェル付き指クリップ心拍センサー</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020050</td>
        <td className="tg-366q">Grove - 3軸デジタルジャイロ</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020024</td>
        <td className="tg-366q">Grove - 指クリップ心拍センサー</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020081</td>
        <td className="tg-366q">Grove - 6軸加速度計＆コンパス v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020071</td>
        <td className="tg-366q">Grove - 3軸デジタル加速度計(±400g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030008</td>
        <td className="tg-366q">Grove - OLEDディスプレイ 0.96''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030011</td>
        <td className="tg-366q">Grove - OLEDディスプレイ 1.12''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020006</td>
        <td className="tg-366q">Grove - I2Cハブ</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020013</td>
        <td className="tg-366q">Grove - I2C ADC</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">113020003</td>
        <td className="tg-366q">Grove - GPS</td>
        <td className="tg-366q">UART</td>
        <td className="tg-366q">3.3V</td>
      </tr>
    </tbody>
  </table>
</div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

-----

* **[回路図]** [BeagleBone® Blue 回路図](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip)
* **[Grove]** [BeagleBone® Blue Grove 互換性リスト.xlsx](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/res/Beaglebone%20Blue%20Grove%20Compatibility%20List.xlsx)
* **[追加読書]** [BeagleBoard メインページ](http://beagleboard.org/)
* **[追加読書]** [BeagleBoard 入門](http://beagleboard.org/getting-started)
* **[追加読書]** [トラブルシューティング](http://beagleboard.org/getting-started#troubleshooting)
* **[追加読書]** [ハードウェアドキュメント](http://beagleboard.org/getting-started#hardware)
* **[追加読書]** [BeagleBoard のプロジェクト](http://beagleboard.org/project)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>