---
description: Pebble用RePhoneストラップキット
title: Pebble用RePhoneストラップキット
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RePhone_Strap_Kit_for_Pebble
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Pebble3-04.png)

RePhone（Xadow）モジュールの導入により、スマートウォッチがさらにスマートになります。[Pebble Timeの背面にある新しいスマートアクセサリーポート](http://developer.getpebble.com/guides/hardware/)を基に、スリムで小型のRePhoneモジュール（Xadow GPS v2およびXadow NFC v2）をPebbleの既存のエコシステムに統合し、内蔵電子機器の観点からその機能を向上させます。Xadow Pebble Time Adapterは、One-wireシリアルプロトコルを使用してSmartstrapインターフェースを介してRePhone（Xadow）モジュールがPebble Timeと通信できるようにします。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html)

##  仕様
---
###   Pebble用Xadowアダプタのベース

背面フレームの「GND」と「PWR」は、シェルを外さずにPebble Timeを充電できることを意味します。

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Pebble_base_2.png)

### Xadow GPS v2
---
<!-- このモジュールの詳細については、[**Xadow GPS V2 Wikiページ**](/ja/Xadow_GPS_V2)をご確認ください。 -->

<table>
<tr>
<td> マイクロコントローラ </td>
<td> Kinetis KL02</td>
</tr>
<tr>
<td> コア </td>
<td> ARM® 32-bit Cortex® -M0+CPU</td>
</tr>
<tr>
<td> 電源供給 </td>
<td> 3.3 ~ 6 V (ブレークアウトピン経由)</td>
</tr>
<tr>
<td> フラッシュ </td>
<td> 32 KB</td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB</td>
</tr>
<tr>
<td> クロックスピード </td>
<td> 48 MHz</td>
</tr>
<tr>
<td> 消費電力 </td>
<td> 18mA@トラッキング、21mA@取得</td>
</tr>
<tr>
<td> 省電力 </td>
<td> Typ. 3mA@AlwaysLocateTM、7uA@バックアップモード、180uA@スタンバイモード</td>
</tr>
<tr>
<td> チャンネル </td>
<td> 22(トラッキング) / 66 (取得)</td>
</tr>
<tr>
<td> 更新レート </td>
<td> 1Hz(デフォルト)、最大10Hz</td>
</tr>
<tr>
<td> 水平方向位置精度 </td>
<td> &lt;2.5m CEP</td>
</tr>
<tr>
<td> 速度精度 </td>
<td> &lt;0.1m/s</td>
</tr>
<tr>
<td> 最大速度 </td>
<td> 最大515m/s</td>
</tr>
<tr>
<td> EASYTMによるコールド/ウォームスタート </td>
<td> 215s/5s</td>
</tr>
<tr>
<td> 取得感度 </td>
<td> -145dBm</td>
</tr>
<tr>
<td> トラッキング感度 </td>
<td>-163dBm</td>
</tr>
<tr>
<td> 動作温度 </td>
<td> -40℃ ～ 85℃</td>
</tr>
<tr>
<td> プロトコル </td>
<td> NMEA 0183/PMTK</td>
</tr>
<tr>
<td> アンテナタイプ </td>
<td> チップアンテナ</td>
</tr>
<tr>
<td> インターフェース </td>
<td> Xadow GSM+BLEとのインターフェース（I2C、7ビットアドレス0x05）</td>
</tr>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”</td>
</tr>
</table>

### Xadow NFC v2

<!-- このモジュールの詳細については、[**Xadow NFC v2 Wikiページ**](/ja/Xadow_NFC_v2)をご確認ください。 -->

<table>
<tr>
<td> マイクロコントローラ </td>
<td> Kinetis KL02</td>
</tr>
<tr>
<td> コア </td>
<td> ARM® 32-bit Cortex® -M0+CPU</td>
</tr>
<tr>
<td> 電源供給 </td>
<td> 3.3 ~ 6V (ブレークアウトピン経由)</td>
</tr>
<tr>
<td> フラッシュ </td>
<td> 32 KB</td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB</td>
</tr>
<tr>
<td> 動作電流 </td>
<td> スタンバイ時5mA、読み書き時55mA</td>
</tr>
<tr>
<td> 無線周波数 </td>
<td> 13.56 MHz</td>
</tr>
<tr>
<td> 対応プロトコル </td>
<td> ISO/IEC 14443 Type AおよびISO/IEC 14443 Type B</td>
</tr>
<tr>
<td> 最大動作距離 </td>
<td> 現在のアンテナサイズに応じて約28mm</td>
</tr>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”</td>
</tr>
</table>

### Xadow バッテリー 100mAh

<table>
<tr>
<td> 電圧 </td>
<td> 3.3 V</td>
</tr>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”</td>
</tr>
</table>

## 組み立てプロセス
---
日常使用では、モジュールは時計の両側に均等に配置され、FPCケーブルで接続されています。モジュールとアダプター間の接続は、予期しない接続の引き抜きを防ぐために、伸縮可能な形状に特別に設計されています。Pebble Timeの充電ポートは、アダプターの背面にあり、日常的な充電が可能です。

以下に、Pebble Time用RePhone Strap Kitの組み立てプロセスの概略図を示します。

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Xadow_Pebble_Time_Adapter_assembly3.png)

## Xadow APP for Pebble Timeのダウンロード
---
以下の手順に従って、Pebble Time用のXadow APPをダウンロードし、GPS情報やTag IDにアクセスできます。

デモアプリは以下のリンクからダウンロードできます：[https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw](https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw)。スマートフォンから直接ダウンロードするか、PCからスマートフォンに送信してください。その後、スマートフォンの「Pebble Time」アプリで開くよう選択します。デモアプリをPebble Timeにインストールするオプションが表示されます。

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Xadow_Pebble_Time_Adapter_APP_UI.png)

## プログラミングガイド
---
### アダプターとの通信

アダプターのファームウェアは、Pebbleの公式ドキュメントで説明されているプロトコルを実装しています：[http://developer.getpebble.com/guides/hardware/smartstrap-protocol/](http://developer.getpebble.com/guides/hardware/smartstrap-protocol/)

そのため、ウォッチアプリ側から呼び出せるリソースは以下の通りです：

<table>
<tr>
<th>サービス</th>
<th>属性</th>
<th>R/W</th>
<th>データ型</th>
<th>データ</th>
</tr>
<tr>
<td>0x0 Raw Data</td>
<td>0x0 Raw Data</td>
<td>RW</td>
<td>uint8 *buffer</td>
<td>アダプター側にハンドラーはありません。アダプターファームウェアプログラマーのために拡張性を残しています。</td>
</tr>
<tr>
<td>0x2003 Battery Service</td>
<td>0x1001 バッテリー電圧の取得</td>
<td>R</td>
<td>uint16</td>
<td>ストラップのバッテリー電圧（単位：ボルト、精度：1/100）。例：電圧が3.70Vの場合、370と指定されます。</td>
</tr>
<tr>
<td>0x2003 Battery Service</td>
<td>0x1002 ストラップのバッテリーでPebbleを充電するかどうかを設定</td>
<td>RW</td>
<td>uint8</td>
<td>0: Pebbleを充電しない。1: Pebbleを充電する。</td>
</tr>
<tr>
<td>0x2001 Location and Navigation Service</td>
<td>0x0001 位置情報</td>
<td>R</td>
<td>sint32[2]</td>
<td>現在の経度と緯度（単位：度、精度：1/10^7）。データ内では緯度が経度の前に来ます。例：Pebble HQの位置は(37.4400662, -122.1583808)で、{374400662, -1221583808}と指定されます。</td>
</tr>
<tr>
<td>0x2001 Location and Navigation Service</td>
<td>0x0003 速度</td>
<td>R</td>
<td>uint16</td>
<td>現在の速度（単位：メートル/秒、精度：1/100）。例：1.5 m/sの場合、150と指定されます。</td>
</tr>
<tr>
<td>0x2001 Location and Navigation Service</td>
<td>0x1001 高度</td>
<td>R</td>
<td>uint16</td>
<td>現在の高度（単位：メートル、精度：1/100）。例：100mの場合、10000と指定されます。</td>
</tr>
<tr>
<td>0x2001 Location and Navigation Service</td>
<td>0x0101 GPS衛星</td>
<td>R</td>
<td>uint8</td>
<td>GPS衛星の数（通常NMEAを介して報告されます）。この数値は視界内の衛星数を示します。</td>
</tr>
<tr>
<td>0x2001 Location and Navigation Service</td>
<td>0x0102 GPSフィックス品質</td>
<td>R</td>
<td>uint8</td>
<td>GPSフィックスの品質（NMEAを介して報告されます）。可能な値は[NMEA仕様](http://www.gpsinformation.org/dale/nmea.htm#GGA)に記載されています。</td>
</tr>
<tr>
<td>0x1E01 NFC Service</td>
<td>0x1001 NFCタグのUID取得</td>
<td>R</td>
<td>uint8 *</td>
<td>UIDは可変長で返され、SmartstrapReadHandlerのパラメーターlengthで示されます。
 **この属性はSmartstrapNotifyHandlerで通知可能です。**</td>
</tr>
<tr>
<td>0x1E01 NFC Service</td>
<td>0x1002 NDEFデータの読み取り</td>
<td>R</td>
<td>uint8 *</td>
<td>NDEFデータは可変長で返され、SmartstrapReadHandlerのパラメーターlengthで示されます。</td>
</tr>
<tr>
<td>0x1E01 NFC Service</td>
<td>0x1003 NDEFデータの書き込み</td>
<td>W</td>
<td>uint8 *</td>
<td>NFCタグにuint8バッファを書き込みます。</td>
</tr>
<tr>
<td>0x1E01 NFC Service</td>
<td>0x1004 NDEFデータの消去</td>
<td>W</td>
<td>任意の型</td>
<td>消去をトリガーするために、任意の内容または空のデータを書き込みます。</td>
</tr>
</table>

デモPebbleアプリのソースコードはGitHubからダウンロードできます：[https://github.com/Seeed-Studio/Xadow_Strap](https://github.com/Seeed-Studio/Xadow_Strap)

このアプリは一部の属性呼び出しをデモするためのものです。GPS、NFCなどの機能を活用して、独自の素晴らしいPebbleアプリを自由に想像してください。

### アダプターのプログラミング

アダプターはLPC11U35を搭載し、内部でmbedソフトウェアを実行しています。初期ファームウェアはmbed.orgにあります。以下をご覧ください：[https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/](https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/)

アダプターのEagle回路図は以下からダウンロードできます：[https://www.seeedstudio.com/wiki/images/f/f8/Xadow_Pebble_Time_Adapter.rar](https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar)

ファームウェアバイナリをビルドした後、以下の手順に従ってバイナリをアダプターにフラッシュします。

1) USBケーブルを改造し、対応するはんだ付けパッドにワイヤーをはんだ付けします。

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Hack_USB_cable-03.png)

2) バッテリーを切断し、USBをPCに接続します。

3) 「ISP」と「GND」ピンを短絡します。

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/ShortISP_GND.PNG)

4) バッテリーを接続してアダプターの電源を入れます。

5) PCに接続されたUSBドライブを開き、ディスク内のすべての内容を削除してください。その後、ファームウェアのバイナリをディスクにコピーします。

6) 電源をオフにしてから再度オンにすると、ファームウェアが更新されます。

## RePhone コミュニティ
---
[![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

私たちは、支援者（RePhoneユーザー）が集まり、温かく快適に会話を楽しみ、RePhoneについて議論し、技術的な問題を話し合い、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探していました。そして、ここに「RePhoneコミュニティ」が誕生しました。

今すぐ[RePhoneコミュニティ](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)に参加してください！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

### よくある質問

RePhoneコミュニティでよくある質問を収集し、トピック**["Frequently Asked Questions of RePhone (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)**で回答しています。このトピックは、新しいFAQが出るたびに更新されます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
Xadow Pebble Time Adapterの回路図は以下のリンクで提供されています：

*   [_Xadow Pebble Time Adapter eagle files_](https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar)

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>