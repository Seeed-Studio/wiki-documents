---
description: SenseCAP M2 Data Only Local Console
title: SenseCAP M2 Data Only Local Console
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
---

**ローカルコンソールへのアクセス方法**
===================================

ローカルコンソールにアクセスする方法は2つあります。

* * *

**ルーター経由でのアクセス**
---------------------

*   **ステップ1**: コンピューターとHotspotを同じルーターに接続します。

デバイスをネットワークケーブルでルーターに接続するか、SenseCAP Hotspot APPを使用してWI-FI接続を設定できます。

**注意**: コンピューターとデバイスは同じルーター/ネットワークに接続されている必要があります。

![SenseCAP M2 Local Console Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **ステップ2**: デバイスのIPアドレスを取得します

SenseCAP MX Dashboardのアカウントをお持ちでない場合、またはデバイスをDashboardに追加していない場合は、ルーターの管理ページでデバイスのIPアドレスを確認するか、Helium APPで診断を実行してIPアドレスを取得してください。

すでにSenseCAP MX Dashboardのアカウントを登録し、デバイスを追加している場合は、ダッシュボードからデバイスのIPアドレスを確認できます：

*   *   Wi-Fi経由で接続している場合、クリック可能なデバイスのWi-Fi IPアドレスが表示されます。
    *   イーサネットケーブルまたはローカルLAN経由で接続している場合、クリック可能なデバイスのLANアドレスが表示されます。

*   **ステップ3**: デバイスのユーザー名とパスワードを取得します

デバイス背面の情報からユーザー名とパスワードを取得します。

**セキュリティ上の理由により、各デバイスには固有のパスワードがあります。ログイン後、パスワードを変更できます。**

![SenseCAP M2 Local Console Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **ステップ4**: PCでブラウザを開いてログインします

取得したIPアドレスをブラウザに入力してローカルコンソールに入ります。次に、デバイスのユーザー名とパスワードを入力し、ログインボタンをクリックします。

![SenseCAP M2 Local Console Login](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**デバイスAPホットスポット経由でのアクセス**
--------------------------------

*   **ステップ1**: デバイスAPホットスポットをオンにします

青色インジケーターがゆっくり点滅するまでボタンを5秒間押して、設定モードに入ります。

*   **ステップ2**: APホットスポットに接続します

APホットスポット名はSenseCAP_XXXXXX（6桁のMACアドレス）です。コンピューターをこのAPホットスポットに接続します。

*   **ステップ3**: デバイスのユーザー名とパスワードを取得します
*   **ステップ4**: PCでブラウザを開いてログインします

IPアドレス（**192.168.168.1**）をブラウザに入力してローカルコンソールに入ります。次に、デバイスのユーザー名とパスワードを入力し、ログインボタンをクリックします。

* * *

**ステータス**
==========

ホームページには、主にネットワーク接続、LoRaパケットの送受信、システム情報、メモリ使用量などのステータス表示があります。

**注意:** 完全なメッセージが表示されるまで少し待つ必要があります。

![SenseCAP M2 Local Console Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**注意:** LoRa Packetsヒストグラムでは、必ずしも有効なHelium Packets Networkとは限りません。

システム情報では、heliumプログラムのバージョン、ホットスポットのアドレス、現在使用中のリージョンパラメーターを確認できます。

![SenseCAP M2 Local Console Guide Region](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**システム**
==========

**システムと時刻**
-------------------

*   _ページパス_：System -> System

ここでは、ホスト名やタイムゾーンなど、デバイスの基本的な側面を設定できます。また、時刻同期設定を変更することもできます。もちろん、一般的にはこのページで何も変更する必要はありません。

![SenseCAP M2 Local Console Guide Time](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**ブリージングライト**
-------------------

*   _ページパス_： System -> Breathing Light

ブリージングライトはホットスポットデバイスのインジケーターで、ライトの動作を設定できます。

![SenseCAP M2 Local Console Guide Breathing Light](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**リージョン**
----------

*   _ページパス_：System -> Region

ここでリージョンパラメーターを変更できます。工場出荷時のデフォルトは「AUTO」で、これは以下を意味します：

*   ホットスポットにアサートされた位置がない場合、使用されるリージョンはホットスポットタイプに基づきます。例えば、デバイスモデルM2-EU868はリージョンEU868を使用します。
*   ホットスポットにアサートされた位置がある場合、位置に応じてリージョンが自動調整されます。

一般的に、リージョンを設定する必要はありません。特別な場合：ホットスポット（Data-Only）にアサートされた位置がない場合、別のリージョンを選択できます。例えば、M2-US915のデバイスモデルは、オーストラリアでAU915に設定できます。

![SenseCAP M2 Local Console Guide Breathing Region Config](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**注意:** ホットスポットにアサートされた位置がある場合、リージョン設定は**AUTO**である必要があります。

* * *

**LuCiパスワード**
-----------------

*   **ページパス**：System -> Administration

ここでLuCiパスワードを変更できます。

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**工場出荷時設定の復元**
----------------------------

*   _ページパス_：System -> Firmware

LuCiパスワードを忘れた場合、工場出荷時設定を復元することでパスワードを回復できます。ただし、工場出荷時設定を復元した後、デバイスは再度更新されます。

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**再起動**
----------

*   _ページパス_：System -> Reboot

ここでデバイスをリセットしたり、デバイスの定時リセットを設定したりできます。

![SenseCAP M2 Local Console Reboot](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**ネットワーク**
===========

**インターフェース**
--------------

*   _Page Path_： Network -> Interfaces

ここでネットワークインターフェースの情報を取得できます。LAN IPのデフォルトは「192.168.168.1」です。ルーターのゲートウェイIPも同じ場合は、デバイスのLAN IPを変更する必要があります。

![SenseCAP M2 Local Console Guide Network Interface](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**Wireless**
------------

*   _Page Path_： Network -> Wireless

ここでWi-Fiに接続できます。以下の手順に従ってください：

*   **ステップ 1**: 「**scan**」ボタンをクリックして、お住まいの地域のWi-Fiをスキャンします。

![SenseCAP M2 Local Console Guide Network Interface Wireless](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **ステップ 2**: ネットワークに参加するWi-Fiを選択します。

![SenseCAP M2 Local Console Guide Network Interface Wifi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **ステップ 3**: Wi-Fiパスワードを入力し、送信して保存します。

![SenseCAP M2 Local Console Guide Network Interface Wifi Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 Local Console Guide Network Interface Wifi Save](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

しばらくすると、インターフェースページで確認できるように、WiFiに接続できるようになります。

* * *

**MultiWan**
------------

*   _Page Path_： Network -> MultiWan

ここでネットワークインターフェースの優先度とステータスを確認できます。MultiWANの優先度は：wan(ETH) > wwan(Wi-Fi) > wwan0 (4G\*) です。

![SenseCAP M2 Local Console Guide Network Interface MultiWan](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**Diagnostics**
---------------

*   _Page Path_：Network -> Diagnostics

ここでインターネット接続の速度を測定できます。

![SenseCAP M2 Local Console Guide Network Interface Network Test](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)