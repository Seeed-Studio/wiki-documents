---
description: LinkIt Smart 7688 v2.0 用ブレイクアウトボード
title: LinkIt Smart 7688 v2.0 用ブレイクアウトボード
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Breakout_for_LinkIt_Smart_7688_v2.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


:::danger note
MediaTek Labs の閉鎖により、関連リンクはすべて無効になっています。関連ファイルをダウンロードする必要がある場合は、以下のリンクで検索してください：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

---
**LinkIt Smart 7688 v2.0 用ブレイクアウトボード**は、LinkItTM Smart 7688 開発ボード向けの Grove ポート統合拡張ボードです。このブレイクアウトボードは、初心者が迅速に始められるように設計されており、配線を簡略化することでプロトタイピングを容易にします。USB、イーサネット、3.5mm オーディオポートを備え、I2C や UART などのシリアルバスをサポートしています。

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg)

**バージョントラッカー**

|製品バージョン | リリース日 | サポート状況 | 備考                  |
|------------------|--------------|---------------|-----------------------|
|バージョン 1.0       |2015年11月 |サポート中      |	なし                  |
|バージョン 2.0       |2016年4月	  |サポート中      | 新機能を参照してください |

**新機能:**

* 録音機能をサポート。
* 3.5mm フォンコネクタ（オーディオジャック）は OMTP と CTIA のプロトコルをサポートしています。スイッチを切り替えることでどちらのプロトコルも使用可能です。プロトコルの切り替え方法については、ページをスクロールして **OMTP と CTIA のフォンコネクタプロトコルの切り替え方法** をお読みください。

[![enter image description here](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html)

## 特徴
---
* Grove インターフェースにより配線が簡単になり、Grove モジュールを使用した拡張が可能。
* USB ホスト
* オーディオ出力
* イーサネットポート
* コストパフォーマンスが高い
* 録音機能をサポート
* OMTP と CTIA の切り替えが可能

## 応用アイデア
---
* IoT/ゲートウェイデバイス
* ロボティクス
* スマートマルチメディアデバイス
* 教育と学習

## 仕様
---
|入力電圧|動作電圧|
|:---------------:|:---------------:|
|5.0V(USB 電源ポート使用時) 	|  3.3V  |

:::note
    デバッグピン、イーサネットピン、USB Type-A ホストピンは MT7688 に接続され、その他のピンは ATmega32U4 に接続されています。
:::
## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_hardware_connections_1200_s.jpg)

|ハードウェア|数量|ハードウェア|数量|ハードウェア|数量|
|---|---|---|---|---|---|
|デバッグポート	|1|ヘッドセットポート|1|補助ピン|2|
|イーサネットポート	|1|プロトコル切り替えピン |6|Grove コネクタ|3|
|USB Type-A	|1|ステレオスピーカードライバーインターフェース|1|ヘッドセットポート|	1|

### Grove インターフェースについて

Seeed の [Grove](https://www.seeedstudio.com/wiki/Grove_System) 製品を使用したことがあるなら、このモジュールに夢中になるでしょう。このポートを使用することで、ジャンパーワイヤーやはんだ付け作業から解放され、これらの機能モジュールを使用してより強力なアプリケーションを作成できます。

### OMTP と CTIA のフォンコネクタプロトコルの切り替え方法

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_switch_procotol_1200_.jpg)

バージョン 1.0 と 2.0 を比較すると、右下隅に 6 つのピンと 2 つのジャンパーキャップがあることに気付くでしょう。これらのピンはフォンコネクタプロトコルを切り替えるために使用されます。小さなジャンパー（両方）を左側の 4 つのピンに設定すると、プロトコル OMTP が使用されます。小さなジャンパー（両方）を右側の 4 つのピンに設定すると（前述の図のように）、プロトコル CTIA が使用されます。以下の図のように設定してください：
Breakout for LinkIt Smart 7688 v2.0 CTIA OMTP Switch Manner.JPG
録音機能を使用するには、オンボードファームウェアを Breakout for LinkIt Smart 7688 ファームウェア（バージョン v0.9.2 以上）に更新する必要があります。

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_CTIA_OMTP_Switch_Manner.JPG)

:::note
	* オンボードフラッシュメモリの書き込み/読み取り速度が制限されているため、外部ストレージデバイスの使用を推奨します。
:::

## はじめに
---
このチュートリアルでは、LinkIt Smart 7688 V2.0用のBreakoutを使用して、シンプルなMP3プレーヤーを作成します。

### 必要な材料
LinkIt Smart 7688 V2.0用のBreakout以外に、以下の材料が必要です。作業を始める前に、すべての材料が揃っていることを確認してください。必要な場合は、Seeed [Bazaar](https://www.seeedstudio.com/)で購入できます。

|LinkIt Smart 7688 × 1|USBケーブル（タイプAからマイクロタイプB）× 2|UARTBee × 1|ジャンパーワイヤー × 3|
|:---:|:---:|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/linkit%20smart%207688.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/jw100n.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-v2.0-p-2641.html)|[今すぐ購入](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[今すぐ購入](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[今すぐ購入](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|

以下の2つについては、すでにお持ちだと思います。
- ステレオスピーカー（3.5mmオーディオケーブル付き）× 1
- USBフラッシュディスク（MP3形式の音声ファイルが入っているもの）× 1

**ステップ1:** [こちら](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688#Getting_Started)を参照して、LinkIt Smart 7688をインターネットに接続してください。

:::note
ジャンパーワイヤーをMT7688 UART2ポートに差し込むことで、Pin 8、Pin 9、Pin GNDにハンダ付けする必要がなくなります。
:::
:::note
稀にインターネットに正常に接続できない場合があります。その場合は、組み込みOSを再起動してください。
:::
**ステップ2:** USBからシリアルアダプタを使用してコンソールを開きます。

**ステップ3:** 以下のようにすべての部品を接続します。

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_demo_connection_New.jpg)

:::note
これはLinkIt Smart 7688(v1.0)用Breakoutの図です。
:::
**ステップ4:** コンソールで **cd /Media/USB-A1** と入力してUSBフォルダに移動します。

**ステップ5:** コンソールで **madplay filename.mp3** と入力して、OpenWRTにインストールされているユーティリティ **Madplay** を使用して音楽を再生します。

**ステップ6:** 音楽が聞こえるはずです。


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---

* [回路図ファイル](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)
* [LinkIt Smart 7688](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688)
* [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
* [LinkIt Smart 7688購入リンク](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142)

## プロジェクト

**Smart Vendy**  
ベンダーの販売状況を追跡し、在庫切れになる前に自動販売機を補充するために必要な在庫を効果的に管理します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sainath-komakula/smart-vendy-cd197e/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供できるよう、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>