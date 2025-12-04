---
description: このwikiでは、Jetsonデバイス上でQuectel RM520N 5Gモジュールをインストールおよび設定する方法について説明し、ハードウェアセットアップ手順と必要なATコマンドをカバーしています。
title: Jetson用Quectel RM520Nモジュール
keywords:
  - Edge
  - reComputer
  - Jetson
  - 4G/5G
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/RM520N.webp
slug: /ja/rm520n_module_for_jetson
last_update:
  date: 11/25/2025
  author: Youjiang
---

RM520Nは、IoT/eMBBアプリケーション向けに特別に最適化された5G IoTモジュールシリーズで、3GPP Release 16仕様に準拠したM.2フォームファクターで設計されており、5G NSAとSAの両方のモードをサポートしています。RM520NはQuectelの5Gモジュールシリーズ RM50xQ、LTE-A Cat 6モジュール EM06、Cat 12モジュールシリーズ EM12/EM12xR/EM120K、およびCat 16モジュール EM160R-GLと互換性があり、LTE-Aから5Gへの移行を促進します。

RM520Nは産業用および商用アプリケーション専用の産業グレードモジュールです。世界中のほぼすべての主要キャリアをカバーし、Qualcomm® IZat位置技術Gen9C Lite（GPS、GLONASS、BDS、Galileo）をサポートしています。統合されたGNSS受信機により、製品設計が大幅に簡素化され、より迅速で正確かつ信頼性の高い測位機能を提供します。

豊富なインターネットプロトコル、業界標準インターフェース、および豊富な機能（Windows 10、Linux、Android用のUSBおよびPCIeドライバー）により、このモジュールは産業用ルーター、ホームゲートウェイ、STB、産業用ラップトップ、コンシューマーラップトップ、産業用PDA、頑丈なタブレットPC、映像伝送、デジタルサイネージなど、幅広いeMBBおよびIoTアプリケーションで採用できます。

<!-- Need to image and jump button  -->

## 特徴

- IoTおよびeMBBアプリケーション向けに最適化されたM.2フォームファクターの5G/4G/3Gマルチモードモジュール
- 世界規模の5GおよびLTE-Aカバレッジ
- NSAおよびSAモードをサポート
- あらゆる環境で高速かつ正確な測位を必要とするアプリケーション向けのマルチコンステレーションGNSS受信機を利用可能
- 機能改良：DFOTA および VoLTE（オプション）

## 仕様
<div align="center">
  <img width ="950" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/specification.png"/>
</div>

## サポート対象デバイス

- [reComputer Robotis J30/J40](https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html)
- [reComputer Industrial J30/J40](https://www.seeedstudio.com/reComputer-Industrial-optional-accessories.html)
- [reServer Industrial J30/J40](https://www.seeedstudio.com/reServer-Industrial-J401-optional-accessories.html)
- [reServer Industrial J501](https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-board-for-Jetson-AGX-Orin-p-5950.html)

:::note
テスト済みのデバイスのみが上記にリストされています。
:::

## ハードウェア接続

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/hardware_connection.png"/>
</div>

:::danger
このwikiでは、[reComputer Robotics J3011](https://www.seeedstudio.com/reComputer-Robotics-J3011-p-6503.html)を例として使用し、JetsonデバイスでRM520N-GLモジュールをインストールおよび設定する方法を実演します。
:::

ステップ1. 使用するすべての材料を準備します。

- Jetpack 6.2を搭載したreComputer Robotics J4012
- Quectel RM520N-GLモジュール

ステップ2. サポートネジの位置を調整します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/support_screw.png"/>
</div>

ステップ3. 5GモジュールをM.2 Key Bポートに挿入します。

ステップ4. 固定ネジを締めてアンテナを取り付けます。

ステップ5. フロントパネルに5G SIMカードを取り付けます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/sim.jpg"/>
</div>

## 5Gモジュールの設定

Jetsonデバイスを起動し、ターミナルで以下のコマンドを入力します。
```bash
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2
```

minicomインターフェースでは、ATコマンドを使用して5Gモジュールの動作モードを設定できます。

```bash
AT+CPIN? # Check SIM card status. A normal response is READY.
AT+QCFG="usbnet",3 # Set module operation mode to RNDIS. A normal response is OK.
AT+CFUN=1,1 # Restart the module. If it fails to start for an extended period, try restarting the Jetson device.
AT+QNWPREFCFG="mode_pref",AUTO # Set automatic network mode or prioritize LTE network mode
AT+QNWPREFCFG="mode_pref",LTE
```

すべてが順調に進めば、デバイスは正常にインターネットにアクセスできるようになります。

ネットワーク品質を確認するには、速度テストツールを使用してネットワーク速度をテストできます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/speed_test.png"/>
</div>


既知の問題：この設定方法により5Gモジュールは正常にネットワークに接続できますが、mmcli情報に異常が表示されることがわかっています。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/mmcli.png"/>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
