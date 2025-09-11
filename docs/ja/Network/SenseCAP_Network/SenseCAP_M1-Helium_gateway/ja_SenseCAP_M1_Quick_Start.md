---
description: SenseCAP M1 クイックスタート
title: SenseCAP M1 クイックスタート
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Quick_Start
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

**以下の手順に従えば、数分でホットスポットを簡単にセットアップできます！**

1. Helium アプリをダウンロードして Helium ウォレットを作成する
2. アンテナと電源アダプタを SenseCAP M1 に接続し、電源を入れる
3. 背面の小さなボタンを6～10秒間押し続け、青色LEDがゆっくり点滅し始めるまで待つ
4. 「ホットスポットをセットアップ」をクリックし、リストから「SenseCAP M1」を選択する
5. Bluetoothページで「ホットスポットをスキャン」をクリックし、SenseCAP M1 に接続する
6. Wi-Fiを選択してパスワードを入力する、またはイーサネットケーブルを使用する
7. ホットスポットの位置を設定し、位置料金を支払う

**必要なもの**  
![SenseCAP M1 クイックスタート](https://www.sensecapmx.com/wp-content/uploads/2022/06/what-youll-need.webp)

* * *

**ステップ1: SenseCAPアプリをダウンロードして Helium ウォレットを作成する**
================================================================

![SenseCAP MX アプリ](https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapmx-app.png)

*   [**iOS用ホットスポットアプリ**](https://apps.apple.com/us/app/sensecap-hotspot/id1600051150) （iTunes App Store）
*   [**Android用ホットスポットアプリ**](https://play.google.com/store/apps/details?id=com.sensecapmx.hotspot) （Google Play Store）

* * *

**ステップ2: アンテナと電源アダプタを SenseCAP M1 に接続し、電源を入れる**
==========================================================================================

**注意**: 初回使用時には、ホットスポットが準備を整え、最新のファームウェアに自動更新されるまで30分ほどお待ちください。

**注意**: アンテナが接続されていない状態でゲートウェイの電源を入れないでください。これによりデバイスが損傷する可能性があります。提供された電源アダプタを使用してください。

**注意**: ユニットには、選択したバージョンに応じてUS/EU標準プラグのアダプタが付属しています。そのため、設置場所のプラグ標準が異なる場合は、適合するプラグアダプタを購入することをお勧めします。ゲートウェイの電源を入れた後、30～60秒間待機してゲートウェイが起動するのを待ちます。ユニット背面の青色LEDが点灯し、速い点滅を始めるはずです。これで次のステップに進み、Bluetooth接続を構成する準備が整いました。

![SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/06/hotspot-1.webp)

* * *

**ステップ3: 背面のボタンを6～10秒間押し続け、青色LEDがゆっくり点滅モードに切り替わるまで待つ**
======================================================================================================

![SenseCAP M1 LED ステータス](https://www.sensecapmx.com/wp-content/uploads/2022/06/LED-status-1.webp)

* * *

**ステップ4: 「ホットスポットをセットアップ」をクリックし、リストから SenseCAP M1 を選択する**
========================================================================

![SenseCAP M1 セットアップアプリ](https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-app-sensecap-m1.png)

* * *

**ステップ5: Bluetoothページで「ホットスポットをスキャン」をクリックし、SenseCAP M1 に接続する**
================================================================================================

![SenseCAP アプリセットアップ](https://www.sensecapmx.com/wp-content/uploads/2022/06/app-steps.png)

**注意**: デバイスのETH MACの最後の6桁がホットスポットの名前の下に表示されます。そのため、複数のゲートウェイが接続待機中の場合、デバイス底面のラベルに記載されたETH MACを確認することで、それぞれのホットスポットを区別できます。

![SenseCAP M1 MAC](https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecap-m1-mac-labels.webp)

* * *

**ステップ6: Wi-Fiを選択し、Wi-Fiパスワードを入力してネットワークに接続する**
==================================================================================

**注意**: イーサネットで接続する場合は、ETHポートを介してゲートウェイにイーサネットケーブルを接続し、Wi-Fi接続ページで「代わりにイーサネットを使用」をクリックして続行してください。

**注意**: イーサネットケーブルを使用してインターネットに接続する場合、ケーブルの緩みや抜けによるネットワーク接続障害を防ぐため、ケーブルを差し込む際にはしっかりと押し込み、「カチッ」という明確な音が聞こえることを確認してください。

![SenseCAP M1 イーサネット](https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecap-m1-ethernet.webp)

![SenseCAP M1 アプリ WiFi](https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-app-wifi-eth.png)

**注意**: 初回起動時、ゲートウェイがインターネットに接続された後、ファームウェアの更新が完了するまで約10～15分かかります。その後、さらに構成を行い、ゲートウェイを Helium に登録することができます。問題が発生した場合は、更新が完了するまでお待ちください。  
ファームウェアの更新が完了した後、再度Bluetooth構成モードに入るために、ボタンを6～10秒間押し続け、青色LEDがゆっくり点滅モードに切り替わるのを確認してください。

* * *

**ステップ7: ホットスポットの位置を設定し、位置料金を支払う**
=====================================================

*   ゲートウェイをセットアップした後、ホットスポットの位置を設定するよう求められる場合があります。
*   SenseCAP M1 の購入価格には、\$40のHeliumネットワークアクティベーション料金と\$10の初回位置アサート料金（合計\$50相当）が含まれています。
*   必要に応じて位置を設定し、別の場所に変更することもできますが、ゲートウェイを新しい場所に移動するたびに\$10の位置アサート料金を再度支払う必要があります。
*   地図上で位置を選択し、ホットスポットの位置を確認すると、セットアップが完了します。

![SenseCAP M1 ホットスポット登録](https://www.sensecapmx.com/wp-content/uploads/2022/06/register-hotspot.png)

**注意**: ホットスポットがHeliumネットワークに登録されるまで約15分待つ必要があります。「ウォレットへ移動」をクリックしてこの画面を閉じることができます。このステップを完了した後、アプリでホットスポットの更新情報を確認することができます。

![Heliumウォレット](https://www.sensecapmx.com/wp-content/uploads/2022/06/helium-wallet.png)

* * *

**ようこそ、People's Networkへ！**

![Longfi](https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp)