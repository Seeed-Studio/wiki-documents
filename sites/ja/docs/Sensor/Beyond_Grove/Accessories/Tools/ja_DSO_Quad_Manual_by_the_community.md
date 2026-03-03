---
title: DSO Quad マニュアル（コミュニティによる）
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/DSO_Quad_Manual_by_the_community/
slug: /ja/DSO_Quad_Manual_by_the_community
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/P10308912-1024x684.jpg)

DSO Quad はポケットサイズのオシロスコープです。小型ながら多くの優れた機能を備えています：

* 2つのアナログ入力、72 MS/s（[x1プローブ](#definitions)を使用した場合10[Vpp](#definitions)、アップグレードにより80[Vpp](#definitions)が可能）。

* 2つのデジタル入力（最大3.3V、より高い電圧を許容するためにはダイオードのアップグレードが必要）。デジタルプローブは付属していません。

* 信号発生器出力、10 Hz-20kHz（アナログ）または10 Hz-100kHz（デジタル）（アップグレードにより8 MHzのデジタル出力が可能）。

* オート、ノーマル、シングル、スキャン、フリーモードのトリガーモード。

初めてDSO Quadを使用する場合は、[はじめに](#getting-started)セクションをお読みください。

[仕様](#specifications)セクションには、DSO Quadの機能に関するすべての詳細が記載されています。

<!-- [&gt; このマニュアルをPDFとしてダウンロード &lt;](#PDF) -->

_**注意: DSO Quadは現在BETA製品です。これは、製品に重大なハードウェアおよびソフトウェアの問題がまだ存在することを意味します。このマニュアルでは、現在の製品を正確に説明するためにあらゆる努力がなされていますが、このマニュアルには絶対的な保証はありません。**_

## なぜ別のマニュアルが必要なのか？

Seeedstudioの公式マニュアルは[こちら](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)からダウンロードできます。このページは、私がDSO Quadを初めて手にしたときに抱いたすべての疑問に答えるために、余暇を利用して始めたプロジェクトです。

このマニュアルは、以下のような疑問を持つ方に役立つかもしれません：

1. バッテリーをどうやって取り付けるの？（バッテリーが逆向きかもしれないと心配です！どうすれば確認できますか？）

2. 背面カバーをどうやって開けるの？

3. 本体をどうやって電源オンにするの？

4. 充電インジケーターLEDは何を意味しているの？

5. ファームウェアをどうやってアップグレードするの？

6. 本体をどうやってテストするの？

7. ボタンは何のためにあるの？

これらすべてを1つの場所、つまりマニュアルにまとめるべきだと感じ、現在の形になるまで作業を続けました。

### その他のSeeedstudioドキュメント

* [DSO Quad マニュアル（公式Wikiページ）](/ja/DSO_Quad "DSO Quad")

* [DSO Quad ファームウェアの構築](/ja/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")

* [DSO Quad バッテリー取り付けチュートリアル（ビデオ付き）](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2074)

## はじめに

DSO Quadを受け取った際、以下のようなものが含まれているはずです：

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_plastic_cover.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_usb_cable.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_pouch.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_probes.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_battery.jpg)<br />
（これは静電気防止袋に入ったリチウムポリマーバッテリーです）

### バッテリーの取り付け

1. まず、DSO Quadのオン/オフスイッチが**オフ**になっていることを確認してください：
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Turn_off.jpg)

2. DSO Quadを持ち、背面のテキストが正しい向きで見えるようにします：
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_right_side_up.jpg)

3. 背面カバーを左にスライドさせます：<br />
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_slide_to_left.jpg)

4. 背面カバーが簡単に外れ、バッテリー収納部が現れます：
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_back_removed.jpg)<br />
 **注意:** 逆極性のバッテリーが報告されています。_**これを修正しないと充電回路が破損します。**_ 赤と黒のワイヤーの正しい配置を慎重に確認してください。

5. 赤いワイヤーがDSO Quadの外側に最も近く、黒いワイヤーが内側にあることを確認してください。
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_observe_polarity.jpg)

6. バッテリーが誤って接続されている場合、_**絶対に接続しないでください！**_ [このフォーラムスレッド](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1911)で助けを求めてください。

7. バッテリーが正しく接続されている場合、ワイヤーを左側のクリップに通します。

8. 背面カバーを元に戻します。
左側をしっかり押さえながら、カバーを右にスライドさせます。[http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/](http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/)でデモンストレーションをご覧ください。

9. <div className="thumb tright"><div className="thumbinner" style={{width: 202}}> <div className="thumbcaption">赤い「充電中」LED</div></div></div> DSO Quadを立ててUSBケーブルを接続します。赤い「充電中」LEDが点灯するはずです。初回使用前に少なくとも1時間充電してください。

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_red_charging_led.jpg)

10. 最新バージョンに[ファームウェアを更新](#firmware-updates)してください。

### LEDインジケーターと電源モード

DSO QuadはUSBケーブルを接続して充電します。LTC4054バッテリーコントローラーは、[電源スイッチがオンの間はバッテリーを充電しません](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922)。以下の表で説明します：

| 電源スイッチ | USBケーブル | バッテリー | 見える状態 | DSO Quadの電源モード |
|-------------|-------------|-----------|-----------|-------------------|
| オフ | 未接続 | 待機中 | LEDオフ、ディスプレイオフ | 電源オフ |
| オン | 未接続 | 放電中 | LEDオフ、ディスプレイオン | 通常（電源オン） |
| オン | 未接続 | 放電中 | 緑色LEDオン、ディスプレイオフ | 省電力モード：600秒間ボタンが押されない場合、画面が消灯 |
| オン | 未接続 | 空 | LEDオフ、ディスプレイオフ | バッテリーなし、電源オフ。USBケーブルを接続してください：バッテリーを充電する必要があります |
| オン | 5V/500mA USBに接続 | 待機中 | 赤色LEDオン、ディスプレイオン | 電源オン、[電源オン中はバッテリーは充電されません](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922) |
| オフ | 5V/500mA USBに接続 | 充電中 | 赤色LEDオン、ディスプレイオフ | 電源オフ、バッテリー充電中 |
| オフ | USBポートが電力を供給していない* | 待機中 | LEDオフ、ディスプレイオフ | 電源オフ、充電不可 |
| オフ | 5V/500mA USBに接続 | フル | LEDオフ、ディスプレイオフ | 電源オフ、バッテリーが満充電 |
| オフ | 5V/500mA USBに接続 | バッテリー未装着 | 赤色LEDが薄く点灯、ディスプレイオフ | 電源オフ、バッテリー未装着 |

*** USBポートが電力を供給していない場合:** DSO Quadが充電されない場合、USBポートが原因である可能性があります。以下はトラブルシューティングのヒントです：

1. USBケーブルが正しく接続されていることを確認してください。

2. コンピュータの別のポートを試してください。一部のUSBハブは十分な電力を供給できない場合があります。特に複数のデバイスが接続されている場合は注意が必要です。

3. 別のコンピュータのポートを試してください。一部のノートパソコンはスリープモード時にUSBポートへの電力供給を停止することがあります。

### ファームウェアの更新

DSO Quadにはいくつかのバージョンがあり、それぞれ異なるファームウェアが必要です。ハードウェアを慎重に識別してください。DSO Quadを初めて起動した際に、ハードウェアバージョンを確認してください。以下の表と比較してください：

最新のファームウェアはこちらで確認できます：[DSO Quad Building Firmware](/ja/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")  
特別契約による最新ファームウェアはこちら：[FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip)。

| 起動画面 | ハードウェアバージョン | 工場出荷時ファームウェア | 最新ファームウェア更新 | 備考 |
|----------|----------------------|------------------------|----------------------|------|
| | 2.7 | APP 2.53<br/>SYS 1.52<br/>FPGA 2.61 | APP P1.00<br/>SYS B1.52<br/>FPGA 2.61 | Seeed Studioがこのバージョンを出荷しています。<br/>このファームウェアはGUIが大幅に改善されています！<br/>（また、2.7の工場出荷時ファームウェアは頻繁にフリーズするため、このファームウェアが強く推奨されます）<br/>![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_26.jpg) |
| | 2.6 | APP 2.33<br/>SYS 1.33<br/>FPGA 2.5 | APP 2.53<br/>SYS 1.52<br/>FPGA 2.61<br/>Seeed Studioがこのバージョンを出荷しています。<br/>![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_22.jpg)<br/>2.2<br/>APP<br/>SYS 1.02 | [APP 2.34?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)<br/>[SYS 1.32?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760) | バージョン2.2のデバイスはベータテスターにのみ提供され、[無料で2.6にアップグレード](http://ourdev.cn/bbs/bbs_content_all.jsp?bbs_sn=4138839)されました。このバージョンは今後のソフトウェア更新を受けることはありません。 |

さらに情報を見つけることができます：[https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)。

ファームウェアのソースコードは[こちら](http://github.com/Seeed-Studio/DSOQuad_SourceCode)で利用可能です。  
**注意:** SeeedstudioはFPGAファームウェアを自作することを推奨していません。ハードウェアを損傷するリスクがあるためです。

### キャリブレーション

DSO Quadは初回使用前にキャリブレーションが必要であり、長期間使用後には再キャリブレーションが推奨されます。キャリブレーションするべき2つのパラメータは、ゲインとバイアス（DCオフセット）です。

#### 古いGUI（アプリバージョン2.x）

1. バイアスキャリブレーション

    1. 四角でマークされたボタンを2秒間押し続けると、キャリブレーションの「スプレッドシート」が表示されます。

    2. 各ボックスの値を0に設定します。右端の「ナビゲーション」スイッチを左/右に回転させて上下に移動します。右端の「ナビゲーション」スイッチをクリックして列を移動します。

    3. 一部のエントリを変更せずにキャリブレーションをキャンセルするか、各レベルでキャリブレーションを行った後に保存します。上部の指示に従ってください。

2. ゲインキャリブレーション

    1. （通常のマニュアルを参照してください）

#### 新しいGUI（ハードウェア2.7、アプリバージョンP1.00以上）

（バージョン番号については不明ですが、ベータ版またはプレビュー版の可能性がありますが、明確ではありません）

1. バイアスキャリブレーション

    1. 四角ボタンを1回押します。

    2. メニューで「Calibrat」を選択します。

    3. 指示に従ってください。

詳細はこちらをご覧ください：[DSO Quad:Calibration](/ja/DSO_Quad-Calibration "DSO Quad:Calibration")

注意: マイクロUSB接続に電源を接続または切断した場合、キャリブレーションが異なることに気付きました。最も頻繁に使用する方法でキャリブレーションを行ってください。

1. ゲインキャリブレーション

    1. （通常のマニュアルを参照してください）

## DSO Quadの使用方法

最も重要なスイッチは右側にある2つの回転式スイッチです。右端のスイッチは「ナビゲーション」スイッチで、UIの主要部分のうち現在点滅している部分を変更するために使用します。もう一つのスイッチは「サブメニュー」スイッチで、Volts/div、マイクロ秒、トリガー位置などを変更するために使用します。

これらのスイッチは左右に回転させることができ、押しボタンのようにクリックすることもできます。

メイン画面には以下のブロックがあります：

| タイトル | ブロックの説明 |
|----------|---------------|
| RUN/HOLD | オシロスコープの停止と再実行 |
| CH(A) | シアン色のプロットと測定値 |
| CH(B) | 黄色のプロットと測定値 |
| CH(C) | 紫色のプロットと測定値 |
| CH(D) | 緑色のプロットと測定値 |
| SCAN | 茶色のSCAN/AUTO/NORM（NORMAL）/SINGL（SINGLE）/NONEトリガーモード |
| Signal Generator | 青色のデジタルおよびアナログ「波形出力」 |
| Trigger | CH(A)からCH(D)までのすべてのトリガーレベルとトリガーモード |
| YPOS | YPOS |
| V1 | V1 |
| V2 | V2 |
| Horizontal scroller | 水平方向スクロール |
| T1 | T1 |
| T2 | T2 |
| XPOS | XPOS |
| Delta V | V1とV2マーカー間の差 |
| Delta T | T1とT2マーカー間の差 |
| live measurements | カスタマイズ可能な測定値の読み取り。例：Vbt、FPS、Vdc、RMS、Max、Min、Vpp、FRQ、DUT、CIR、TL、TH |

### 電圧の測定

Vmax、Vmin、Vpp、Vdc（平均電圧）、Vrms（sqrt(平均(V*V)))

## 仕様

サンプリング 0.1 μ秒 - 1 秒

デジタル入力帯域幅 [このフォーラムスレッド](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1978)

### 定義

| 項目 | 説明 |
|------|------|
| Vpp | ピーク間電圧 |
| x1プローブ | 低電圧信号を測定します。80Vppを超えないようにしてください。超えるとDSO Quadが損傷する可能性があります。（低インピーダンスプローブとして使用可能です。） |
| x10プローブ | 高電圧信号を測定します。400Vppを超えないようにしてください。超えるとDSO Quadが損傷する可能性があります。（高インピーダンスプローブとして使用可能です。）<br/>画面上の値は入力の1/10で表示されるため、頭の中で10倍してください。 |
| ... | ... |

### 要件

DSO Quadは通常のUSBポートから充電できます。使用する前に少なくとも1時間充電してください。

DSO Quadのファームウェアは「ライブ」ファームウェア更新を行うために急速なUSB切断-再接続を行います。この方法はMac OS XやLinuxと互換性がありません。詳細については[このフォーラムスレッド](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1934)を参照してください。[DSO Quad Building Firmware](/ja/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")を参照してLinuxからファームウェアをアップグレードする方法を確認してください。

## リソース

[FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip)

## 技術サポートと製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験ができる限りスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>