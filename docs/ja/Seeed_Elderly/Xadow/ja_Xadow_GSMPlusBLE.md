---
description: Xadow - GSM&#43;BLE
title: Xadow - GSM&#43;BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_GSMPlusBLE
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow_GSM%2BBLE_shangjiatu.JPG)

外部スピーカーとマイクを使用して無線リンクを介して電話をかけたり受けたり、またはBluetoothを使用して短距離でデータを交換したりする場合でも、Xadow GSM+BLEを使用してこれらを実現できます。

<!-- RePhoneキットCreateの中心として、Xadow GSM+BLEは強力なSystem-On-Chip（SOC）MT2502を基盤としており、GSM、GPRS、Bluetooth（v4.0および2.1デュアルモード）などの豊富な通信プロトコルを提供します。850/900/1800/1900MHzのクアッドバンドをサポートしており、世界中のどのGSMネットワークにも対応しています。2G Nano SIMカードを挿入するだけで、セルラー接続でデバイスを強化できます。 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/depot/Xadow-GSM-BLE-p-2560.html?cPath=84_120)  


## 特徴  

- 市場で現在最小の商用System-on-Chipに基づく  
- （5.4mm x 6.2mm）  
- オープンソースでモジュール設計  
- スリムでコンパクト  
- 簡単に接続可能なFPCケーブル用の内蔵Xadowコネクタ  
- 他のXadowモジュールと積み重ね可能、チェーン接続可能、縫い付け可能  
- ほとんどのRePhoneキットのコアモジュール  
- 長距離および短距離通信に最適な選択肢  

## 仕様  

| マイクロコントローラー | MT2502                                                                                  |
|-------------------------|----------------------------------------------------------------------------------------|
| MCUコア                | 32ビット ARM7EJ-STM RISCプロセッサ                                                     |
| RAM                    | 4 MB                                                                                    |
| フラッシュメモリ        | 16 MB                                                                                   |
| 電源供給                | 3.3 ~ 4.2V（SIMなし）/3.5 ~ 4.2V（SIMあり）                                              |
| 消費電力                | 20mW/30mW/52mW @ 待機（無線なし）/待機（GSM）/待機（BT）                                |
| クアッドバンド          | 850/900/1800/1900 MHz                                                                   |
| GPRS                   | クラス12モデム                                                                          |
| クロックスピード        | 260 MHz                                                                                 |
| コネクタ                | Xadowモジュール用35ピンコネクタ＆11ピンコネクタ；バッテリー用JST 1.0コネクタ              |
| インターフェース        | LCD、オーディオ、I2C、SPI、UART、GPIOなど                                               |
| 寸法                   | 25.37mm × 20.30mm / 1” × 0.8”                                                           |  

## ハードウェア概要  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow_GSM%2BBLE_Overview.png) 

 
以下の画像は、**左から右**の順に、11ピンXadowコネクタ、はんだ付け可能なブレイクアウトピン、および35ピンXadowコネクタのピン定義を示しています。  

![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Xadow-connector-Pin-definitions-06.jpg)  

## 電源供給  
RePhone/Xadow GSM+BLE に電源を供給するには、**3.5V ~ 4.2V** のバッテリーと **JST 1.0 オスコネクタ**を使用するか、ハードウェアビューで示されているように、ブレークアウトの **PIN 3(VCC)** と **PIN 6(GND)** を通じて電源を供給してください。  

## バッテリー充電  
Xadow GSM+BLE はバッテリー用に [JST 1.0 メスコネクタ](https://www.seeedstudio.com/depot/index.php?main_page=opl_info&opl_id=555) を使用しています。ボードを USB ケーブルで接続するだけでバッテリーを充電できます。  

## 動作モード  
Xadow GSM+BLE を電源オンにして PC に接続すると、2 つの動作モードがあります。モジュールを **ON** または **OFF** にするには、**電源キーを 2 秒間押し続けてください**。これにより、**マスストレージモード**または**フラッシュ/デバッグモード**にアクセスできます。  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Operating_mode.png)  

## マスストレージモード  
Xadow GSM+BLE が **OFF** の状態で、バッテリーを接続したボードを Micro USB ケーブルで PC に接続すると、PC 上で 5MB の「マスストレージモード」にアクセスできます。この 5MB のディスクには、すべてのアプリケーション（vxp ファイル）とシステム設定が保存されています。  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Mass_Storage_Mode.png)  

## フラッシュ/デバッグモード  
Xadow GSM+BLE が **ON** の状態で、バッテリーを接続したボードを Micro USB ケーブルで PC に接続すると、**デバイスマネージャー**に 2 つの **COM ポート**が表示されます：  

- **MTK USB Debug Port(COM4)**  
- **MTK USB Modem Port(COM5)**  

COM 番号は PC によって異なる場合があります。各 COM ポートは使用する開発環境に応じて異なる機能を持っています。詳細については、「Getting Started」セクションを参照してください。  

**デバイスマネージャー**を開くには、**スタート**ボタンをクリックし、**コントロールパネル**をクリックし、**システムとセキュリティ**をクリックし、その後 **システム**の下で **デバイスマネージャー**をクリックします。管理者パスワードや確認を求められた場合は、パスワードを入力するか確認を行ってください。以下の画像を参照してください：  
![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Check_ports.png)  

## はじめに  
Arduino IDE、Lua、JavaScript に対応した豊富なライブラリを開発しており、詳細なサンプルスケッチを提供することで、初心者でも RePhone モジュールを簡単かつ迅速に開発できるようにしています。  

また、C/C++ 開発者向けに Eclipse IDE をベースとした強力な SDK も提供しており、より高度なアプリケーションを開発することが可能です。  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Arduino_IDE-17.png)  ]  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Eclipse_IDE-13.png) ](https://www.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit)   
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/Lua-14.png)](https://www.seeedstudio.com/wiki/Lua_for_RePhone#Use_Lua_Shellt)  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/JS-15.png) ](https://www.seeedstudio.com/wiki/JavaScript_for_RePhone)  

詳細については、RePhone メインページの RePhone 開発環境を参照してください：  

[
RePhone 開発環境](https://wiki.seeedstudio.com/ja/RePhone/#development-environment)  

## 関連プロジェクト  
RePhone を使用して達成された素晴らしいプロジェクトをチェックしてください。  
**追跡可能な犬用首輪**  
愛犬のために追跡可能な犬用首輪を作る 5 ステップ。  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/450px-Dog_Collar.png.jpeg)  ](https://www.seeedstudio.com/recipe/424-rephone-traceable-dog-collar.html)  

## RePhone コミュニティ  
[![](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/image/300px-RePhone_Community-2.png) ](http://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)  
私たちは、支援者（RePhone ユーザー）が集まり、温かく快適に会話を楽しみ、RePhone について話し合い、技術的な問題を議論し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここに「RePhone コミュニティ」が誕生しました。

今すぐ [RePhone コミュニティ](https://community.seeedstudio.com/discover.html?t=rephone) に参加してください！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

### よくある質問  
RePhone コミュニティでよく寄せられる質問を収集し、トピック「[RePhone のよくある質問 (FAQ)](https://community.seeedstudio.com/topic_detail.html?id=5170#p23753)」で回答しています。このトピックは、新しい FAQ が出るたびに更新されます。

## リソース  
Xadow GSM+BLE の回路図は以下のリンクから提供されています：  
[- Xadow_GSM+BLE eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Xadow_GSM%2BBLE.rar)  
MT2502 チップセットに関する詳細情報はこちらをご覧ください：  
[- MT2502 のデータシート](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Datasheet_for_MT2502.rar)  
Xadow 1.0 モジュールとの互換性については、以下の Excel ファイルをご確認ください：  
[- GSM+BLE と Xadow 1.0 モジュール間の互換性](https://files.seeedstudio.com/wiki/Xadow_GSM-BLE/resource/Compatibility_between_GSM%2BBLE_and_Xadow_1.0_modules.xlsx)

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>