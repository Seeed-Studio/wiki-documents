---
description: レトロフォンキット
title: レトロフォンキット
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Retro Phone Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Retro%20Phone%20Kit.jpg)

レトロフォンキットは、Arduinoと互換性のあるオープンソースハードウェアの電話です。RePhoneを覚えていますか？世界初のオープンソースでモジュール式の電話で、セルラー接続を使って周囲のものをハックすることができました。このレトロフォンは、ボタン操作で、携帯電話が単に電話をかけるためのツールだった昔の日々を思い出させるRePhoneと考えることができます。このキットは非常に使いやすく、数分で携帯電話を作ることができます。

このキットのメインボードはXadow-Key Boardで、画面とボタンパネルが含まれています。最も重要な部分はRePhone Core 2G-Atmel32u4で、これは市場に新たに登場したRePhone Coreボードです。このボードはAtmel32u4 MCUを使用し、850/900/1800/1900MHzのクアッドバンドをサポートしており、世界中のGSMネットワークをカバーしています。また、3.5mmヘッドフォンジャックを保持しているため、ヘッドフォンを使って電話をかけることができます。この電話にはシェルを含めていないため、好きなシェルを自由にDIYすることができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Retro-Phone-Kit-p-2797.html)

## 特徴

---

- Arduino互換

- アナログオーディオ対応

- 2G Nano SIMのみ対応

- PTCRB認証済み

- LCD 128*64

- 3.5mmヘッドフォンジャック（マイク付き）OMTP対応

- 電源供給：3.4-4.2V（BAT）、5V（USB）

## 仕様

**Rephone Core 2G-Atmel32u4**

このモジュールの詳細については、[Rephone Core 2G-Atmel32u4](https://wiki.seeedstudio.com/ja/RePhone_core_2G-Atmel32u4/)をご覧ください。

|項目|値|
|---|---|
|マイクロコントローラー|Atmega32U4|
|動作電圧|3.3V|
|I/OピンあたりのDC電流|50|
|フラッシュメモリ|32 KB（うち4KBはブートローダーで使用）|
|SRAM|2.5 KB|
|EEPROM|1KB|
|クロックスピード|16 MHz|
|長さ|68 mm|
|幅|30 mm|
|重量|12 g|

## モジュール接続

Rephone Core 2G-Atmel32u4は、Xadow 36ピンコネクタとXadow 11ピンコネクタを統合しており、Xadow - GSM＋BLEと似ています。このため、モジュール接続は非常に簡単です。

1. Xadow Key Boardを36ピンコネクタを介してRePhone Coreボードに接続します。ケーブルはしっかりと平らに挿入し、特に「TOP」側を上向きに保つことを忘れないでください。

2. アンテナを挿入します。

3. Nano 2G SIMカードを挿入します。

4. Lipoバッテリーをバッテリーインターフェースを介してRePhone Coreボードに接続します。

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/IMG_2275.JPG)

## テストコードを実行する

**RePhone_Menu_GSM**

ステップ1. Rephone Core 2G-Atmel32u4をインストールします。完全な手順については[こちら](https://wiki.seeedstudio.com/ja/RePhone_core_2G-Atmel32u4/#arduino-ide)をクリックしてください。

ステップ2. サンプルを見つけてボードにアップロードします。

Arduino IDEにRephone Core 2G-Atmel32u4をインストールすると、基本的なサンプルも含まれており、サンプルセクションで見つけることができます。

サンプルには以下が含まれます：

- Atmel32u4_gprs.h
- TimerOne.h
- Rephone_lcm.h
- Rephone_button.h
- Rephone_menu_gsm

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Example%20code.png)

ステップ3. 自分自身に電話をかける

- サンプルが正常にアップロードされると、画面が点灯し、以下のようなメインメニューが表示されます。

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Main%20Manu.JPG)

- 右ボタンをクリックして電話インターフェースを選択します。

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Call.JPG)

- 自分の番号を入力し、右ボタンをクリックして「Go」を選択します。

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Del.JPG)

すると、レトロフォンから電話がかかってきます。

## RePhone コミュニティ

---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

私たちは、支援者（RePhone ユーザー）が集まり、温かく快適に会話を楽しみ、RePhone について議論し、技術的な問題を話し合い、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探していました。そして、ここに「RePhone コミュニティ」が誕生しました。

今すぐ [RePhone コミュニティ](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4) に参加してください！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

## RePhone core 2G Atmel32u4 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Xadow - キーボード回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- [RePhone core 2G Atmel32u4 回路図（PDF）](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [RePhone core 2G Atmel32u4 回路図（Eagle）](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip)
- [Xadow - キーボード回路図（PDF）](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/Xadow%20-%20Key%20Board%20v1.0.pdf)
- [Xadow - キーボード回路図（Eagle）](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip)
- [RePhone core 2G Atmel32u4 用ドライバー](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20driver.zip)
- [ETA6003 のデータシート](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/ETA6003.pdf)
- [SIM800 の AT コマンド](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/SIM800_AT.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
