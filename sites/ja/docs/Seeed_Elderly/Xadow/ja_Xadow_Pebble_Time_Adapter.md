---
description: Xadow - Pebble Time アダプター
title: Xadow - Pebble Time アダプター
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Pebble_Time_Adapter
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_wiki.png)

RePhone (Xadow) モジュールの導入により、スマートウォッチがさらにスマートになります。[Pebble Time の背面にある新しいスマートアクセサリーポート](http://developer.getpebble.com/guides/hardware/)を基に、スリムで小型の RePhone モジュール（Xadow GPS v2 と Xadow NFC v2）を Pebble の既存エコシステムに統合し、内蔵エレクトロニクスの観点からその機能を向上させます。Xadow Pebble Time アダプターは、RePhone (Xadow) モジュールが Smartstrap インターフェースを介して One-wire シリアルプロトコルを使用して Pebble Time と通信できるようにします。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html)

仕様
--------------

背面フレームの「GND」と「PWR」は、シェルを外さずに Pebble Time を充電できることを意味します。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Pebble_base_2.png)

ハードウェア概要
-----------------

### 組み立てプロセス

日常使用では、モジュールは時計の両側に均等に配置され、FPC ケーブルで接続されます。モジュールとアダプター間の接続は、予期しない接続の引き抜きを防ぐために、拡張可能な形状に特別に設計されています。Pebble Time の充電ポートは、時計の日常的な充電のためにアダプターの背面で引き続きアクセス可能です。

Pebble Time 用 RePhone ストラップキットの組み立てプロセスの概略図は以下の通りです。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_assembly3.png)

Pebble Time 用 Xadow アプリのダウンロード
--------------------------------------

Pebble Time 用 Xadow アプリをダウンロードし、GPS 情報やタグ ID にアクセスする手順に従うことができます。

デモアプリは [こちら](https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw) からダウンロードできます。スマートフォンからダウンロードするか、PC からスマートフォンに送信してください。その後、スマートフォンの「Pebble Time」アプリで開くオプションを選択します。デモアプリを Pebble Time にインストールするオプションが表示されます。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_APP_UI.png)

プログラミングガイド
-----------------

### アダプターとの通信

アダプターのファームウェアは、Pebble の公式ドキュメントで説明されているプロトコルを実装しています：[Smartstrap Protocol](http://developer.getpebble.com/guides/hardware/smartstrap-protocol/)

したがって、ウォッチアプリ側から呼び出すことができるリソースは以下の通りです：

<table>
<thead>
<tr class="header">
<th>サービス</th>
<th>属性</th>
<th>R/W</th>
<th>データ型</th>
<th>データ</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0x0 Raw Data</td>
<td>0x0 Raw Data</td>
<td>RW</td>
<td>uint8 *buffer</td>
<td>アダプター側にハンドラーはありません。アダプターファームウェアプログラマーの拡張性を残します。</td>
</tr>
<tr class="even">
<td>0x2003 バッテリーサービス</td>
<td>0x1001 バッテリーの電圧を取得</td>
<td>R</td>
<td>uint16</td>
<td>ストラップのバッテリー電圧を 1/100 の精度でボルト単位で表します。例えば、電圧が 3.70V の場合、370 と指定されます。</td>
</tr>
<tr class="odd">
<td>0x2003 バッテリーサービス</td>
<td>0x1002 ストラップのバッテリーで Pebble の充電を有効または無効にする</td>
<td>RW</td>
<td>uint8</td>
<td>0: Pebble を充電しない。1: Pebble を充電する。</td>
</tr>
<tr class="even">
<td>0x2001 位置およびナビゲーションサービス</td>
<td>0x0001 位置</td>
<td>R</td>
<td>sint32[2]</td>
<td>現在の緯度と経度を 1/10^7 の精度で度単位で表します。データ内では緯度が経度の前に来ます。例えば、Pebble HQ の位置は (37.4400662, -122.1583808) で、{374400662, -1221583808} と指定されます。</td>
</tr>
<tr class="odd">
<td>0x2001 位置およびナビゲーションサービス</td>
<td>0x0003 速度</td>
<td>R</td>
<td>uint16</td>
<td>現在の速度を 1/100 の精度でメートル毎秒単位で表します。例えば、1.5 m/s は 150 と指定されます。</td>
</tr>
<tr class="even">
<td>0x2001 位置およびナビゲーションサービス</td>
<td>0x1001 高度</td>
<td>R</td>
<td>uint16</td>
<td>現在の高度を 1/100 の精度でメートル単位で表します。例えば、100m は 10000 と指定されます。</td>
</tr>
<tr class="odd">
<td>0x2001 位置およびナビゲーションサービス</td>
<td>0x0101 GPS 衛星</td>
<td>R</td>
<td>uint8</td>
<td>GPS 衛星の数（通常は NMEA を介して報告されます）。この数値は視界内の衛星数を示します。</td>
</tr>
<tr class="even">
<td>0x2001 位置およびナビゲーションサービス</td>
<td>0x0102 GPS フィックス品質</td>
<td>R</td>
<td>uint8</td>
<td>GPS フィックスの品質（NMEA を介して報告されます）。可能な値は <a href="http://www.gpsinformation.org/dale/nmea.htm#GGA">NMEA 仕様</a> に記載されています。</td>
</tr>
<tr class="odd">
<td>0x1E01 NFC サービス</td>
<td>0x1001 NFC タグの UID を取得</td>
<td>R</td>
<td>uint8 *</td>
<td>UID は可変長で返され、SmartstrapReadHandler のパラメーター length で示されます。
<strong>この属性は SmartstrapNotifyHandler で通知可能です。</strong></td>
</tr>
<tr class="even">
<td>0x1E01 NFC サービス</td>
<td>0x1002 NDEF データを読み取る</td>
<td>R</td>
<td>uint8 *</td>
<td>NDEF データは可変長で返され、SmartstrapReadHandler のパラメーター length で示されます。</td>
</tr>
<tr class="odd">
<td>0x1E01 NFC サービス</td>
<td>0x1003 NDEF データを書き込む</td>
<td>W</td>
<td>uint8 *</td>
<td>uint8 バッファを NFC タグに書き込みます。</td>
</tr>
<tr class="even">
<td>0x1E01 NFC サービス</td>
<td>0x1004 NDEF データを消去する</td>
<td>W</td>
<td>任意の型</td>
<td>消去をトリガーするために任意の内容または空を記述します。</td>
</tr>
</tbody>
</table>

デモ Pebble アプリのソースコードは以下の GitHub リンクからダウンロードできます：[Xadow_Strap](https://github.com/Seeed-Studio/Xadow_Strap)

このアプリは部分的な属性呼び出しのデモンストレーション用です。GPS、NFC などの機能を活用して、独自の素晴らしい Pebble アプリを自由に想像してください。

### アダプタのプログラミング

アダプタは LPC11U35 を使用して構築されており、内部で mbed ソフトウェアを実行しています。初期ファームウェアは mbed.org にあります。以下をご覧ください：[mbed.org](https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/)

アダプタの Eagle 回路図は以下からダウンロードできます：[こちら](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)

ファームウェアのバイナリをビルドした後、以下の手順に従ってアダプタにバイナリをフラッシュしてください。

1) USB ケーブルを改造し、配線を対応するはんだ付けパッドに接続します。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Hack_USB_cable-03.png)

2) バッテリーを切断し、USB を PC に接続します。

3) 「ISP」ピンと「GND」ピンをショートします。

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/ShortISP_GND.PNG)

4) バッテリーを接続してアダプタの電源を入れます。

5) PC 上に USB ドライブが表示されます。ドライブを開き、中のデータをすべて削除してから、ファームウェアのバイナリをドライブにコピーします。

6) 電源をオフにしてから再度オンにすると、ファームウェアが更新されます。

RePhone コミュニティ
-----------------

[![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

私たちは、RePhone ユーザー（支援者）が集まり、温かく快適に会話を楽しみ、RePhone に関する技術的な問題を議論し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここに「RePhone コミュニティ」が誕生しました。

今すぐ [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone) に参加してください！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Xadow Pebble Time Adapter Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)
- [RePhone に関するよくある質問 (FAQs)](https://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>