---
description: Grove Breakout for LinkIt Smart 7688 Duo
title: Grove Breakout for LinkIt Smart 7688 Duo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Breakout_for_LinkIt_Smart_7688_Duo
last_update:
  date: 05/15/2025
  author: shuxu hu
---


---
![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Breakout_for_LinkIt_Smart_7688_product_view_1200_s.jpg)

:::danger note
MediaTek Labsの閉鎖により、関連リンクはすべて無効になっています。関連ファイルをダウンロードする必要がある場合は、以下のリンクで検索してください：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

Grove Breakout for LinkIt Smart 7688 Duoは、Groveポートが統合されたLinkIt Smart 7688 Duo[1]開発ボード用の機能拡張ボードです。このブレイクアウトボードは、配線手順を簡素化することで迅速なプロトタイピングを可能にし、電子知識がほとんどない初心者でもすぐにプロジェクトを開始できます。I2CやUARTなどのシリアルバスをサポートし、LinkItTM Smart 7688 Duoの元のピンへのアクセスを提供します。

[1] LinkItTM Smart 7688 Duoは、OpenWrt Linuxディストリビューション、MT7688、およびATmega32u4に基づいたオープン開発ボードです。このボードは、スマートホーム向けのリッチアプリケーションIoTデバイスのプロトタイピングを可能にするために特別に設計されています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Breakout-for-LinkIt-Smart-7688-Duo-p-2575.html)

## 特徴
---
- Groveインターフェースにより配線が簡単。
- より多くのGroveポートで、豊富なGroveモジュールに拡張可能。
- コストパフォーマンスが高い。

:::tip
    <!-- Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。 -->
:::
## アプリケーションアイデア
---
- IoT/ゲートウェイデバイス
- ロボティクス
- スマートマルチメディアデバイス
- 教育と学習

## 仕様
---
- 入力電圧: 5.0V (USB電源ポート付き)
- 動作電圧: 3.3V
- デバッグピンはMT7688に接続され、その他のピンはATmega32U4に接続されます。

## ハードウェア概要
 ---
 ![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Grove_Breakout_for_LinkIt_Smart_7688_Duo_component_with_text_1200_s.jpg)

:::note
     LinkIt Smart 7688 Duoをこのブレイクアウトに差し込む必要がある場合、LinkIt Smart 7688 DuoのUSBマイクロタイプB側をGrove Breakout for LinkIt Smart 7688 Duoのシルクスクリーン「Host」側に合わせてください。
:::
**Groveインターフェース**

<!-- 豊富な[Grove](/ja/Grove_System/)インターフェース付き機能モジュールを接続します。このようなポートを使用することで、ジャンパーワイヤやはんだ付け作業が不要になり、これらの機能モジュールを使用してより強力なアプリケーションを作成できます。 -->

## 始め方

**必要な材料**

- LinkIt Smart 7688 Duo × 1
- USBケーブル (タイプAからマイクロタイプB) × 1
- USBからシリアルアダプタ × 1
- ジャンパーワイヤ × 3
- Grove - Buzzer × 1

**Grove Buzzerで音を鳴らす**

<!-- 1.[LinkIt Smart 7688 Duoのwiki](/ja/LinkIt_Smart_7688_Duo/)を参照して、LinkIt Smart 7688 Duoをインターネットに接続します。 -->

:::note
    1. Pin 8、Pin 9、およびPin GNDは、LinkIt Smart 7688に接続するポートの近くにあります。
    2. ジャンパーワイヤをMT7688 UART2ポートに差し込むことで、Pin 8、Pin 9、およびPin GNDにハンダ付けする代わりに接続できます。
:::
2. USBからシリアルアダプタをLinkIt Smart 7688 Duoに接続した後、コンソールを開きます。

3. 以下のようにすべての部品を接続します：

![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

:::note
    Grove - BuzzerをポートD4に差し込んでください。
:::
<!-- 4.[LinkIt Smart 7688 Duoのwiki](/ja/LinkIt_Smart_7688_Duo/)を参照して、ホストコンピュータ上でLinkIt Smart 7688 DuoプラットフォームのArduino環境を構築します。 -->

<!-- 5.[firmata](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Firmata_to_build_Arduino_IDE_for.zip)をダウンロードします。[LinkIt Smart 7688 Duoのwiki](/ja/LinkIt_Smart_7688_Duo/)を参照して、LinkIt Smart 7688プラットフォーム用のArduino IDEをインストールし、開発ボードにfirmataファイルをフラッシュします。 -->

:::note
    以下の手順は組み込みOS(OpenWRT)上で実行されます。
:::
6. コンソールで**pip install pyfirmata**と入力し、Enterキーを押してPythonライブラリpyfirmataをインストールします。

7. コンソールでvi buzzer.pyと入力してbuzzer.pyという名前のファイルを作成し、以下のコードをコピーして貼り付けます。

```
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```
8. buzzer.pyを保存し、コンソールでpython buzzer.pyと入力してサンプルコードを実行します。

9. これでブザーの音が聞こえるはずです。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>