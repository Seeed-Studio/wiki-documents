---
description: Xadow - NFC v2
title: Xadow - NFC v2
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_NFC_v2
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://seeeddoc.github.io/Xadow_NFC_v2/img/Xadow_NFC_v2.JPG)

Xadow NFC v2は、市場で最も人気のあるNFCチップセットである高度に統合されたトランシーバーモジュールPN532を搭載しています。このチップセットは非常に強力で、ほとんどのスマートフォンやNFCデバイスに見られます。タグやカードの読み書きに使用でき、NFCタグのように動作します。現在、MIFARE ClassおよびMIFARE Ultralightカードの読み書きをサポートするArduinoライブラリを開発しています。このボードは、新しい11ピンXadowコネクタを採用しており、モジュール接続の柔軟性を向上させています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)

## 特徴

*   オープンソースでモジュール設計
*   スリムでコンパクト
*   他のXadowモジュールとの完全な柔軟な接続を可能にする内蔵11ピンXadowコネクタ
*   他のXadowモジュールと積み重ね可能、チェーン接続可能、縫い付け可能

## 仕様

| マイクロコントローラ | Kinetis KL02 |
|---|---|
| コア | ARM® 32-bit Cortex® -M0+CPU |
| 電源供給 | 3.3 ~ 6V (ブレークアウトピン経由) |
| フラッシュ | 32 KB |
| SRAM | 4 KB |
| 動作電流 | スタンバイ時5mA、読み書き時55mA |
| 無線周波数 | 13.56 MHz |
| 対応プロトコル | ISO/IEC 14443 Type AおよびISO/IEC 14443 Type B |
| 最大動作距離 | アンテナサイズに応じて約28mm |
| 寸法 | 25.37mm × 20.30mm / 1” × 0.8” |

## ハードウェア概要

![](https://seeeddoc.github.io/Xadow_NFC_v2/img/Xadow_NFC_v2.png)

## 近距離無線通信 (NFC) について

近距離無線通信 (NFC) は、電子デバイスが近接して通信するためのプロトコルセットです（通常10cm以下）。完全なNFCデバイスは通常、以下の3つの動作モードを持っています：

*   カードエミュレーション：入場カードやスマートフォンがスマートカードのように動作し、支払い処理やチケット発行を行うために使用されます。
*   リーダー/ライターモード：NFCタグに保存された情報を読み取るために使用されます。
*   ピアツーピアモード：デバイス間でデータを交換するために使用されます。

## RePhone コミュニティ

[![](https://seeeddoc.github.io/Xadow_NFC_v2/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)

私たちは、支援者（RePhoneユーザー）が集まり、温かく快適に会話を楽しみ、RePhoneについて議論し、技術的な問題を共有し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここにRePhoneコミュニティがあります。

今すぐ[RePhoneコミュニティ](https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)に参加しましょう！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

## よくある質問

RePhoneコミュニティでよくある質問を収集し、トピック**["Frequently Asked Questions of RePhone (FAQ)"](http://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753#p23753)**で回答しています。このトピックは、新しいFAQが出るたびに更新されます。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/res/Xadow_NFC_v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

[**Source**] [Xadow NFC v2のソースコード](https://github.com/WayenWeng/Xadow_NFC_v2/)

[**ZIP**] [Xadow NFC v2回路図ファイル](https://files.seeedstudio.com/wiki/Xadow_NFC/res/Xadow_NFC_v2.0.zip)

[**PDF**] [PN532のデータシート](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf)

[**PDF**] [MCU Kinetis KL02のデータシート](https://files.seeedstudio.com/wiki/Xadow_NFC/res/KL02P32M48SF0.pdf)

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>