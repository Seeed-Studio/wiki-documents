---
description: SenseCAP M1 クイックスタート
title: SenseCAP M1 クイックスタート
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Quick_Start
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

**以下の手順に従えば、数分でホットスポットを簡単にセットアップできます！**

1. Helium アプリをダウンロードし、Helium ウォレットを作成します。
2. アンテナと電源アダプタをSenseCAP M1に接続し、電源を入れます。
3. 背面の小さなボタンを6～10秒間押し続け、青色LEDがゆっくり点滅し始めるまで待ちます。
4. 「ホットスポットをセットアップ」をクリックし、リストから「SenseCAP M1」を選択します。
5. Bluetoothページで「ホットスポットをスキャン」をクリックし、SenseCAP M1に接続します。
6. Wi-Fiを選択してパスワードを入力するか、イーサネットケーブルを使用します。
7. ホットスポットの位置を設定し、位置料金を支払います。

**必要なもの**  
![SenseCAP M1 クイックスタート](https://www.sensecapmx.com/wp-content/uploads/2022/06/what-youll-need.webp)

* * *

**ステップ 1: SenseCAPアプリをダウンロードし、Helium ウォレットを作成します。**
================================================================

![SenseCAP MX アプリ](https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapmx-app.png)

*   [**iOS用ホットスポットアプリ**](https://apps.apple.com/us/app/sensecap-hotspot/id1600051150) （iTunes App Store）
*   [**Android用ホットスポットアプリ**](https://play.google.com/store/apps/details?id=com.sensecapmx.hotspot) （Google Play Store）

* * *

**ステップ 2: アンテナと電源アダプタをSenseCAP M1に接続し、電源を入れます。**
==========================================================================================

**注意**: 初回使用時には、ホットスポットが準備を整え、最新のファームウェアに自動更新されるまで30分ほどお待ちください。

**警告**: アンテナを接続せずにゲートウェイの電源を入れると、デバイスが損傷する可能性があります。提供された電源アダプタを必ず使用してください。

**注意**: ユニットには、選択したバージョンに応じてUS/EU標準プラグのアダプタが付属しています。そのため、設置場所のプラグ標準が異なる場合は、適合するプラグアダプタを購入することをお勧めします。ゲートウェイの電源を入れた後、30～60秒間待機してゲートウェイが起動するのを確認してください。背面の青色LEDが点灯し、速い点滅を始めたら、次のステップに進みBluetooth接続を設定する準備が整います。

![SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/06/hotspot-1.webp)

* * *

**ステップ 3: 背面のボタンを6～10秒間押し続け、青色LEDがゆっくり点滅モードに切り替わるまで待ちます。**
======================================================================================================

![SenseCAP M1 LED ステータス](https://www.sensecapmx.com/wp-content/uploads/2022/06/LED-status-1.webp)

* * *

**ステップ 4: 「ホットスポットをセットアップ」をクリックし、リストからSenseCAP M1を選択します。**
========================================================================

![SenseCAP M1 セットアップアプリ](https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-app-sensecap-m1.png)

* * *

**ステップ 5: Bluetoothページで「ホットスポットをスキャン」をクリックし、SenseCAP M1に接続します。**
================================================================================================

![SenseCAP アプリセットアップ](https://www.sensecapmx.com/wp-content/uploads/2022/06/app-steps.png)

**注意**: デバイスのETH MACの最後の6桁がホットスポットの名前の下に表示されます。そのため、複数のゲートウェイが接続待機中の場合、デバイス底面のラベルに記載されたETH MACを確認することで、各ホットスポットを区別できます。

![SenseCAP M1 MAC](https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecap-m1-mac-labels.webp)

* * *

**ステップ 6: Wi-Fiを選択し、Wi-Fiパスワードを入力してネットワークに接続します。**
==================================================================================

**注意**: イーサネットで接続する場合は、ETHポートを介してゲートウェイにイーサネットケーブルを接続し、Wi-Fi接続ページで「代わりにイーサネットを使用」をクリックして続行します。

**警告**: イーサネットケーブルを使用してインターネットに接続する場合、ケーブルの緩みや抜けによるネットワーク接続障害を防ぐため、ケーブルを差し込む際にはしっかりと押し込み、「カチッ」という音が聞こえることを確認してください。

![SenseCAP M1 イーサネット](https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecap-m1-ethernet.webp)

![SenseCAP M1 アプリ WiFi](https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-app-wifi-eth.png)

**注意**: 初回起動時、ゲートウェイがインターネットに接続された後、ファームウェアの更新が完了するまで10～15分ほどかかります。その後、さらに設定を行い、ゲートウェイをHeliumに登録することができます。問題が発生した場合は、更新が完了するまでお待ちください。  
ファームウェアの更新が完了した後、再度Bluetooth設定モードに入るために、ボタンを6～10秒間押し続けて青色LEDがゆっくり点滅モードに切り替わるのを確認してください。

* * *

**ステップ 7: ホットスポットの位置を設定し、位置料金を支払います。**
=====================================================

*   ゲートウェイを設定した後、ホットスポットの位置を設定するよう求められる場合があります。
*   SenseCAP M1の購入価格には、\$40のHeliumネットワークアクティベーション料金と、\$10の初回位置アサート料金（合計\$50相当）が含まれています。
*   必要に応じて位置を設定し、別の場所に変更することもできますが、ゲートウェイを新しい場所に移動するたびに\$10の位置アサート料金を再度支払う必要があります。
*   地図上で位置を選択し、ホットスポットの位置を確認すると、セットアップが完了します。

![SenseCAP M1 ホットスポット登録](https://www.sensecapmx.com/wp-content/uploads/2022/06/register-hotspot.png)

**注意**: ホットスポットがHeliumネットワークに登録されるまで約15分待つ必要があります。「ウォレットに移動」をクリックしてこの画面を閉じることができます。このステップを完了した後、アプリでホットスポットの更新情報を確認することができます。

![Heliumウォレット](https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-wallet.png)

* * *

**ようこそ、The People's Networkへ！**

![Longfi](https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp)