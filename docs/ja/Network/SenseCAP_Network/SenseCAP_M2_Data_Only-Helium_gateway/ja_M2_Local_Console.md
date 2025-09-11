---
description: SenseCAP M2 データ専用ローカルコンソール
title: SenseCAP M2 データ専用ローカルコンソール
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

**ローカルコンソールへのアクセス方法**
===================================

ローカルコンソールにアクセスする方法は2つあります。

* * *

**ルーター経由でのアクセス**
---------------------

*   **ステップ 1**: コンピュータとホットスポットを同じルーターに接続します。

デバイスをネットワークケーブルでルーターに接続するか、SenseCAP Hotspot APPを使用してWi-Fi接続を設定することができます。

**注意**: コンピュータとデバイスは同じルーター/ネットワークに接続されている必要があります。

![SenseCAP M2 ローカルコンソール ステップ 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **ステップ 2**: デバイスのIPアドレスを取得します

SenseCAP MX Dashboardのアカウントを持っていない場合、またはデバイスをDashboardに追加していない場合は、ルーターの管理ページでデバイスのIPアドレスを確認するか、Helium APPで診断を実行してIPアドレスを取得してください。

すでにSenseCAP MX Dashboardのアカウントを登録し、デバイスを追加している場合は、ダッシュボードからデバイスのIPアドレスを確認できます：

*   *   Wi-Fi経由で接続している場合、デバイスのWi-Fi IPアドレスが表示され、それをクリックできます。
    *   イーサネットケーブルまたはローカルLAN経由で接続している場合、デバイスのLANアドレスが表示され、それをクリックできます。

*   **ステップ 3**: デバイスのユーザー名とパスワードを取得します

デバイスの背面に記載されている情報からユーザー名とパスワードを取得してください。

**セキュリティ上の理由から、各デバイスには固有のパスワードがあります。ログイン後、パスワードを変更することができます。**

![SenseCAP M2 ローカルコンソール ステップ 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **ステップ 4**: PCのブラウザを開いてログインします

ブラウザに取得したIPアドレスを入力してローカルコンソールにアクセスします。その後、デバイスのユーザー名とパスワードを入力し、ログインボタンをクリックします。

![SenseCAP M2 ローカルコンソール ログイン](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**デバイスAPホットスポット経由でのアクセス**
--------------------------------

*   **ステップ 1**: デバイスAPホットスポットをオンにします

ボタンを5秒間押し続け、青色のインジケーターがゆっくり点滅するまで待つと、設定モードに入ります。

*   **ステップ 2**: APホットスポットに接続します

APホットスポット名はSenseCAP\_XXXXXX（6桁のMACアドレス）です。コンピュータをこのAPホットスポットに接続してください。

*   **ステップ 3**: デバイスのユーザー名とパスワードを取得します
*   **ステップ 4**: PCのブラウザを開いてログインします

ブラウザにIPアドレス（**192.168.168.1**）を入力してローカルコンソールにアクセスします。その後、デバイスのユーザー名とパスワードを入力し、ログインボタンをクリックします。

* * *

**ステータス**
==========

ホームページには、ネットワーク接続、LoRaパケットの送受信、システム情報、メモリ使用量などのステータス表示が主に含まれています。

**注意:** 完全なメッセージが表示されるまで少し待つ必要があります。

![SenseCAP M2 ローカルコンソール ガイド](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**注意:** LoRaパケットのヒストグラムには、必ずしも有効なHeliumパケットネットワークが含まれているわけではありません。

システム情報では、Heliumプログラムのバージョン、ホットスポットのアドレス、現在使用されている地域パラメータを確認できます。

![SenseCAP M2 ローカルコンソール ガイド 地域](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**システム**
==========

**システムと時間**
-------------------

*   _ページパス_：System -> System

ここでは、デバイスのホスト名やタイムゾーンなどの基本的な設定を構成できます。また、時間同期設定を変更することができます。ただし、通常はこのページで何も変更する必要はありません。

![SenseCAP M2 ローカルコンソール ガイド 時間](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**呼吸ライト**
-------------------

*   _ページパス_： System -> Breathing Light

呼吸ライトはホットスポットデバイスのインジケーターであり、ライトの動作を構成することができます。

![SenseCAP M2 ローカルコンソール ガイド 呼吸ライト](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**地域**
----------

*   _ページパス_：System -> Region

ここでは地域パラメータを変更することができます。工場出荷時のデフォルトは「AUTO」で、これは以下を意味します：

*   ホットスポットの位置がアサートされていない場合、使用される地域はホットスポットのタイプに基づきます。例えば、デバイスモデルM2-EU868は地域EU868を使用します。
*   ホットスポットの位置がアサートされている場合、位置に応じて地域が自動的に調整されます。

通常、地域を設定する必要はありません。特別な場合：ホットスポット（データ専用）の位置がアサートされていない場合、別の地域を選択することができます。例えば、M2-US915デバイスモデルはオーストラリアでAU915に設定することができます。

![SenseCAP M2 ローカルコンソール ガイド 地域設定](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**注意:** ホットスポットの位置がアサートされている場合、地域設定は必ず**AUTO**である必要があります。

* * *

**LuCiパスワード**
-----------------

*   **ページパス**：System -> Administration

ここではLuCiパスワードを変更することができます。

![SenseCAP M2 ローカルコンソール ガイド LuCiパスワード変更](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**工場出荷時設定にリセット**
----------------------------

*   _ページパス_：System -> Firmware

LuCiパスワードを忘れた場合、工場出荷時設定にリセットすることで回復することができます。ただし、工場出荷時設定にリセットした後、デバイスは再度更新されます。

![SenseCAP M2 ローカルコンソール ガイド LuCiパスワード変更](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**再起動**
----------

*   _ページパス_：System -> Reboot

ここでデバイスをリセットするか、デバイスのタイマーリセットを構成することができます。

![SenseCAP M2 ローカルコンソール 再起動](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**ネットワーク**
===========

**インターフェース**
--------------

*   _ページパス_： Network -> Interfaces

ここではネットワークインターフェースに関する情報を取得できます。LAN IPのデフォルトは「192.168.168.1」です。ルーターのゲートウェイIPがこれと同じ場合、デバイスのLAN IPを変更する必要があります。

![SenseCAP M2 ローカルコンソールガイド ネットワークインターフェース](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**Wireless（無線）**
--------------------

*   _ページパス_： Network -> Wireless

ここでWi-Fiに接続できます。以下の手順を実行してください：

*   **ステップ 1**: '**scan**'ボタンをクリックして、周辺のWi-Fiをスキャンします。

![SenseCAP M2 ローカルコンソールガイド ネットワークインターフェース 無線](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **ステップ 2**: 接続するWi-Fiを選択します。

![SenseCAP M2 ローカルコンソールガイド ネットワークインターフェース Wi-Fi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **ステップ 3**: Wi-Fiのパスワードを入力し、送信して保存します。

![SenseCAP M2 ローカルコンソールガイド ネットワークインターフェース Wi-Fi ガイド](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 ローカルコンソールガイド ネットワークインターフェース Wi-Fi 保存](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

数秒後、インターフェースページでWi-Fiに接続できることが確認できます。

* * *

**MultiWan（マルチWAN）**
------------------------

*   _ページパス_： Network -> MultiWan

ここではネットワークインターフェースの優先順位とステータスを確認できます。MultiWANの優先順位は以下の通りです： wan(ETH) > wwan(Wi-Fi) > wwan0 (4G\*)。

![SenseCAP M2 ローカルコンソールガイド ネットワークインターフェース マルチWAN](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**Diagnostics（診断）**
----------------------

*   _ページパス_： Network -> Diagnostics

ここではインターネット接続の速度を測定できます。

![SenseCAP M2 ローカルコンソールガイド ネットワークインターフェース ネットワークテスト](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)