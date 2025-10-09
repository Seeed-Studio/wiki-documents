---
description: Seeeduino Lotus Cortex-M0+
title: Seeeduino Lotus Cortex-M0+
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Lotus_Cortex-M0-
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像を挿入してください](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/main.jpg)

Seeeduino Lotus Cortex-M0+は、ATMEGA SAM D21マイクロコントローラ開発ボードです。Atmel® | SMART™ SAM D21は、256KBのフラッシュメモリと32KBのSRAMを備えた32ビットARM® Cortex®-M0+プロセッサを使用する低消費電力マイクロコントローラシリーズです。Seeeduino Lotus Cortex-M0+は、SeeeduinoとBase Shieldを組み合わせたものと考えることができます。

Seeeduino Lotus Cortex-M0+は、14個のデジタル入力/出力（うち10個はPWMをサポート）、6個のアナログ入力/出力、3つのシリアル通信インターフェース、マイクロUSBコネクタ、JST2.0 Li-Poコネクタ、ICSPヘッダー、12個のGroveコネクタ、リセットボタンを備えています。

Seeeduino Lotus Cortex-M0+は、[Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface-p-2917.html)のアップグレード版であり、より強力なチップに置き換えられ、回路レイアウトが最適化され、電源がより安定しています。このチップは直接USBレベル出力をサポートしているため、CP2102NのようなシリアルポートからUSBへのチップを使用する必要がありません。そのため、ユーザーが利用できるハードウェアシリアルポートが1つ増えています。

Seeeduino Lotusは、14個のデジタル入力/出力（うち6個はPWMを出力可能）、7個のアナログ入力/出力、マイクロUSB接続、ICSPヘッダー、12個のGrove接続、リセットボタンを備えています。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![画像を挿入してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)

## バージョン
---
| リビジョン | 説明                                                     | リリース日      |購入方法|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1.0   | 初回公開リリース（ベータ版）                             | 2014年7月22日  |[![画像を挿入してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
| v1.1   | CH340をCP2102Nに置き換え、MACとの互換性を向上             |2016年12月22日   |[![画像を挿入してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html)|
|Seeeduino Lotus Cortex-M0+| Atmega328マイクロコントローラチップをSAM D21に変更 / 回路設計を最適化し、電源がより安定|2018年10月29日|[![画像を挿入してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|


### アップグレードの詳細

Seeeduino Lotus V1.1と比較して、Seeeduino Lotus Cortex-M0+は主にハードウェアがアップグレードされています。以下の図を確認してください。

|項目|Seeeduino Lotus V1.1|Seeeduino Lotus Cortex-M0+|
|---|---|----|
|MCU|Atmega328 |SAM D21|
|UART|1|2|
|Li-poバッテリー対応|非対応|対応|
|PWMピン|6|10|



<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/area_chart.jpg" />
    <figcaption><b>図1</b>. <i>比較チャート</i></figcaption>
  </figure>
</div>

## アプリケーションアイデア

* DIY
* IoTとスマートホーム
* ロボット
* 教育



## 特徴

- Arduino UNOと完全互換
- ARM® Cortex®-M0+ 32bit 48MHzマイクロコントローラー(SAMD21)
- 12個のオンボードGroveコネクタ
- 14個のデジタルI/Oピン（10個のPWM出力）
- 6個のアナログ入力
- 電源パス管理をサポート
- micro-usbまたはLi-Poバッテリーでの電源供給をサポート
- 最大2Aの充電電流
- 低消費電力設計に適している



## 仕様

|項目|値|
|------------|-----------|
|マイクロコントローラー|SAM D21|
|電源入力|Micro-USB / JST2.0|
|動作電圧|USB:5V / Lipo:3.5V~4.2V|
|デジタルI/Oピン|14|
|PWMチャンネル|10|
|アナログ入力チャンネル|6|
|I/OピンあたりのDC電流|40 mA|
|I/O入力電圧|3.3V|
|SRAM|32 KB|
|フラッシュメモリ|256KB|
|最大CPU周波数|48 MHz|



## ピン配置

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/Pin_out.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/Pin_out.jpg" /></a></p>
    <figcaption><b>図2</b>. <i>ピン配置。画像をクリックすると元のファイルを表示できます</i></figcaption>
  </figure>
</div>



## ハードウェア概要

以下の画像はSeeeduino Lotusのハードウェア機能の概要を示しています。Seeeduino Lotusの各ピンのピン配置と代替機能はピン配置図に示されています。これを簡易リファレンスとして使用できます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/overview.jpg" />
    <figcaption><b>図3</b>. <i>ハードウェア概要</i></figcaption>
  </figure>
</div>



- **Groveデジタル**  
6つのGroveデジタルコネクタがあります。例えば**D3**を例に取ると：  
>GND: システムGND  
>VCC: 出力3.3V VCC  
>D3: デジタルピン3に接続  
>D2: デジタルピン2に接続  

基板の裏面にシルクスクリーンを見つけることができます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/4.jpg" />
    <figcaption><b>図4</b>. <i>Groveデジタルコネクタ</i></figcaption>
  </figure>
</div>



- **Groveアナログ**  
3つのアナログGroveコネクタがあり、入力電圧範囲は0〜3.3Vです。3つ以上のアナログ入力が必要な場合は、ヘッダーゾーンのアナログピンを使用できます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/5.jpg" />
    <figcaption><b>図5</b>. <i>Groveアナログコネクタ</i></figcaption>
  </figure>
</div>



- **Grove UART**  
3つのハードウェアUARTポートを提供しています。1つはGrove UART、もう1つはヘッダーのTX-RXピン、そしてSWDポートの多重機能ピン**SCK** **SDO**です。ただし、多重機能ピンは現在ファームウェアでサポートされていません。  
実際には、現在利用可能なハードウェアUARTは2つのみです。**Serial**はGrove UARTに対応し、**Serial1**はヘッダーゾーンのRX-TXに対応します。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/3.jpg" />
    <figcaption><b>図6</b>. <i>GroveハードウェアUART</i></figcaption>
  </figure>
</div>



- **メスヘッダー**  
Seeeduino Lotus Cortex-M0+のメスヘッダーはArduino UNOと完全互換です。特筆すべき点として、デジタル部分では、**~**が付いているすべてのピンがPWM出力をサポートしています。つまり、**D3,D4,D5,D6,D8,D9,D10,D11,D12,D13**の合計10個です。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/2.jpg" />
    <figcaption><b>図7</b>. <i>メスヘッダー</i></figcaption>
  </figure>
</div>



- **Li-Poヘッダー**  
Seeeduino Lotus Cortex-M0+では、USBとLi-Poバッテリーの両方を電源供給に使用できます。また、このボードを使用してLi-Poバッテリーを充電することも可能です。USBでボードに電源を供給し、同時にLi-Poバッテリーを接続すると、Li-Poバッテリーが充電され、**CHR** LEDが点滅します。バッテリーが完全に充電されると、**CHR** LEDの点滅が停止します。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/7.jpg" />
    <figcaption><b>図8</b>. <i>JST2.0 Li-Poヘッダー</i></figcaption>
  </figure>
</div>

## はじめに

### ハードウェア

まずは以下を準備してください：

* **Micro-USBケーブルを用意する**  
  まずMicro-USBケーブルが必要です。Androidスマートフォンのデータケーブルでも問題ありません。  
  もし見つからない場合は、[こちら](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)で購入できます。

* **ボードを接続する**  
  USBケーブルを使用してArduinoボードをコンピュータに接続します。緑色の電源LED（**PWR**とラベル付けされています）が点灯するはずです。

### ソフトウェア

- **ステップ1. Arduinoソフトウェアをインストールする**  

[![画像を挿入](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduinoアプリケーションを起動する**  
以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックします。

:::note
    Arduinoソフトウェアが異なる言語でロードされた場合は、設定ダイアログで言語を変更できます。詳細は[Arduino Software (IDE) ページ](https://www.arduino.cc/en/Guide/Environment#languages)をご覧ください。
:::

- **ステップ2. Blink例を開く**  
  LED点滅の例題スケッチを開きます：**File > Examples > 01.Basics > Blink**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><b>図9</b>. <i>Blinkのパス</i></figcaption>
  </figure>
</div>

- **ステップ3. Seeedボードを追加する**  
  [Seeed Boardインストールガイド](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)に従って、Seeeduino samdをArduino IDEに追加してください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png" />
    <figcaption><b>図10</b>. <i>キーワードはLotus M0</i></figcaption>
  </figure>
</div>

- **ステップ4. ボードとポートを選択する**  
  **Tools > Board**メニューで、使用するArduinoに対応する項目を選択します。ここでは**Seeeduino Zero**を選択します。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png" />
    <figcaption><b>図11</b>. <i>正しいボードを選択</i></figcaption>
  </figure>
</div>

Arduinoボードのシリアルデバイスを**Tools > Serial Port**メニューから選択します。通常、COM3以上が該当します（**COM1**と**COM2**は通常ハードウェアシリアルポートに予約されています）。確認するには、Arduinoボードを取り外してメニューを再度開き、消える項目がArduinoボードです。再接続してそのシリアルポートを選択してください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png" />
    <figcaption><b>図12</b>. <i>正しいポートを選択</i></figcaption>
  </figure>
</div>

- **ステップ5. プログラムをアップロードする**  
  環境内で「Upload」ボタンをクリックするだけです。数秒待つと、アップロードが成功した場合、ステータスバーに「Done uploading.」というメッセージが表示されます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><b>図13</b>. <i>コードをアップロード</i></figcaption>
  </figure>
</div>

アップロードが完了して数秒後、ボード上のピン13（L）LEDがオレンジ色で点滅し始めるはずです。点滅した場合、おめでとうございます！Arduinoのセットアップが完了しました。問題がある場合は、トラブルシューティングの提案を参照してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/Seeeduino_Lotus_Cortex-M0%2B.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[ZIP]** [Seeeduino Lotus Cortex-M0+ Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/Seeeduino_Lotus_Cortex-M0%2B.zip)
- **[PDF]** [SAM D21 データシート](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/SAM_D21.pdf)



## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>