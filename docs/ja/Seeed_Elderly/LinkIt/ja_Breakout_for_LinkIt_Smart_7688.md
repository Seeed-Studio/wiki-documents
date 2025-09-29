---
description: LinkIt Smart 7688用ブレイクアウトボード
title:  LinkIt Smart 7688用ブレイクアウトボード
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Breakout_for_LinkIt_Smart_7688
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_product_view_1200.jpg)

:::danger note
MediaTek Labsの閉鎖により、関連リンクはすべて無効になっています。関連ファイルをダウンロードする必要がある場合は、以下のリンクで検索してください：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

**LinkIt Smart 7688用ブレイクアウトボード**は、LinkItTM Smart 7688開発ボード用のGroveポート統合拡張ボードです。このブレイクアウトボードは配線を簡略化し、プロトタイピングを容易にすることで多くの作業を省きます。初心者が迅速に始められるようサポートします。I2CやUARTなどのシリアルバスをサポートし、USB、イーサネット、3.5mmオーディオポートを備えています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-p-2590.html)

## 特徴
---
*   Groveインターフェースにより配線が簡単になり、Groveモジュールを使用した拡張が可能。

*   USBホスト

*   オーディオ出力

*   イーサネットポート

*   コストパフォーマンスが高い

## 応用アイデア
---
*   IoT/ゲートウェイデバイス

*   ロボティクス

*   スマートマルチメディアデバイス

*   教育と学習

## 仕様
---
| 項目 | 仕様 |
|---|---|
| 入力電圧 | 5.0V（USB電源ポート使用時） |
| 動作電圧 | 3.3V |

**注意：** デバッグピン、イーサネットピン、USBタイプAホストピンはMT7688に接続され、その他のピンはATmega32U4に接続されます。

## ハードウェア概要
---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_components_1200_s.jpg)

**Groveインターフェース**

<!-- 豊富な[Grove](/ja/Grove_System)インターフェースの機能モジュールを接続できます。このようなポートを使用することで、ジャンパーワイヤやはんだ付け作業が不要になり、これらの機能モジュールを使用してより強力なアプリケーションを作成できます。 -->

:::note
    **注意** 次回の製品バージョンでは、このボードにオーディオ録音機能を追加する予定です。
:::

このセクションでは、上級ユーザー向けに、このボードに録音機能を追加する方法を説明します。

1. ページ下部から回路図ファイルをダウンロードします。**Breakout for LinkIt Smart7688 v1.0 brd.pdf**という名前のファイルを開き、**MIC Input**セクションを見つけます。インダクタL6とコンデンサC21を取り外します。これにより、このボードに録音機能が追加されます。**注意** この方法は、LinkIt Smart 7688ファームウェアバージョン0.9.3以降でのみ動作します。

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/To_use_recording_function_on_version_1.0.png)

2. 初心者には、[bazaar](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html?cPath=122_142)で販売されているBreakout for LinkIt Smart 7688 v2.0を購入することをお勧めします。

### **部品リスト**

| 部品名 | 数量 |
|---|---|
| LinkIt Smart 7688用ブレイクアウトボード | 1個 |

## 始め方

### 必要な材料

*   LinkIt Smart 7688 × 1

*   USBケーブル（タイプAからマイクロタイプB） × 2

*   USB to Serialアダプタ × 1

*   ジャンパーワイヤ × 3

*   ステレオ（3.5mmオーディオケーブル付き） × 1

*   USBフラッシュドライブ（MP3形式のオーディオファイルが入っているもの） × 1

### 音楽を再生する

<!-- 1.[こちら](/ja/LinkIt_Smart_7688#Getting_Started)を参照して、LinkIt Smart 7688をインターネットに接続します。 -->

:::note
    - ジャンパーワイヤをMT7688 UART2ポートに差し込むことで、Pin 8、Pin 9、Pin GNDに直接はんだ付けする必要がなくなります。
    - まれにインターネット接続に失敗する場合があります。その場合は組み込みOSを再起動してください。
:::
2. USB to Serialアダプタを使用してコンソールを開きます。

3. 以下のようにすべての部品を接続します：

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_demo_connection_1200.jpg)

4. コンソールで**cd /Media/USB-A1**と入力してUSBフォルダに移動します。

5. OpenWRTにインストールされているユーティリティ**Madplay**を使用して、**madplay filename.mp3**と入力して音楽を再生します。

6. これで音楽が聞こえるはずです。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

*   [回路図ファイル](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)

<!-- *   [LinkIt smart 7688](/ja/LinkIt_Smart_7688) -->

*   [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

*   [LinkIt Smart 7688を購入するリンク](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142)

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！お客様が当社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>