---
description: SenseCAP M1 ローカルコンソール
title: SenseCAP M1 ローカルコンソール
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
---


**概要**
============

**2022年1月14日に更新された最新機能：** SenseCAP ローカルコンソールのセキュリティレベルを向上させるため、CPUIDに加えてローカルコンソールにログインするための追加パスワードが追加されました。デフォルトパスワードはホットスポットのシリアル番号です。初回ログイン後にパスワードを変更することを強く推奨します。

**注意**: ローカルコンソールを使用するには、お使いのコンピューターとホットスポットが同じルーター/ネットワークに接続されている必要があります。ホットスポットが遠隔地にある場合、現在ローカルコンソールの機能を実行することはできません。

![Local Console](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

**ログイン**
=========

**1. ホットスポットのCPU IDとS/Nを取得する**

*   SenseCAP M1 ダッシュボードのアカウントをお持ちでない場合、またはダッシュボードにホットスポットを追加していない場合は、SenseCAP M1のデバイスラベルを確認し、S/NとCPU IDを取得してください

![Local Console Login Details](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

*   すでにSenseCAP M1 ダッシュボードのアカウントを登録し、ホットスポットを追加している場合は、ダッシュボードからホットスポットのCPU IDとS/Nをコピーできます。

![Local Console Login Details 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2. ホットスポットのIPアドレスを取得する**

*   SenseCAP M1 ダッシュボードのアカウントをお持ちでない場合、またはダッシュボードにホットスポットを追加していない場合は、ルーター管理ページでホットスポットのIPアドレスを確認するか、Helium APPで診断を実行してIPアドレスを取得してください。その後、ブラウザでIPアドレスを入力してローカルコンソールページに入ります。
*   すでにSenseCAP M1 ダッシュボードのアカウントを登録し、ホットスポットを追加している場合は、ダッシュボードからホットスポットのIPアドレスを確認できます：
    *   Turbo Sync ローカルコンソールページに直接移動する「**Wi-Fi IPアドレス**」または「**LAN IPアドレス**」リンクをクリックします。
    *   Wi-Fi経由で接続している場合、クリック可能なホットスポットのWi-Fi IPアドレスが表示されます。
    *   イーサネットケーブルまたはローカルLAN経由で接続している場合、ホットスポットのLANアドレスが表示されます。

![Local Console Login Details 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)

**3. ホットスポットのCPU IDとデフォルトパスワード（シリアル番号、別名S/N）を使用してログインする**

![Local Console Login Details 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![Local Console Login Details 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4. デフォルトパスワードを変更する**

![Local Console Change Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

初回ログイン後、「**パスワード変更**」ボタンをクリックしてデフォルトパスワードを変更してください。新しいパスワードは8～32桁で、数字、文字、記号のうち少なくとも2つの組み合わせを含む必要があります。パスワードは暗号化され、SenseCAP M1にローカルでのみ保存されます。

セキュリティ上の理由から、現在「**パスワードを忘れた場合**」機能は提供していませんので、パスワードをよく覚えておいてください。パスワードを紛失した場合は、MicroSDカードを再フラッシュしてデフォルトパスワードを復元する必要があります。

CLIユーザーの方は、パスワードが変更されるたびに、ローカルコンソールデバイストークンも自動的に更新されることにご注意ください。ローカルコンソールのWebページを更新すると、新しいデバイストークンが表示されます。デバイストークンは安全に保管し、いかなる状況でも第三者と共有しないでください。

**5. bind-keyを取得してSenseCAP ダッシュボードにホットスポットを追加する**

![Local Console Bind Key](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

上記のローカルコンソールページでデバイスCPU ID、デバイスETH MAC、デバイスbind keyを取得します。

* * *

**重要な情報**

**注意**: Turbo Syncはmicro SDカードの頻繁な消去と書き込みを引き起こす可能性があり、必要な場合にのみ実行することをお勧めします。

デバイスの同期ブロック高がブロックチェーンに非常に近い場合（200ブロック未満）、デバイスにTurbo Syncは必要なく、実行することもできません。

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

Turbo Syncプロセスは完了まで時間がかかる場合があり、ネットワーク速度に依存します。安定したインターネット接続を維持し、同期プロセスを辛抱強くお待ちください。

**重要**: Turbo Syncプロセス中にデバイスの電源を切らないでください。そうしないと、次回起動時にデバイスの台帳が破損し、最後の祝福されたスナップショットから再び同期を開始することになります。その場合、Turbo Syncプロセスを繰り返す必要があります。

* * *

**再起動**
==========

**注意**: ローカルコンソールにログインする必要があります。

オレンジ色の「再起動」ボタンをクリックして再起動プロセスを開始します。

*   \[reboot\] request sent + \[reboot going\]が表示されたら、プロセスが開始されています。
*   "----log stream disconnected from the host----"と"----log stream connected to the host----"が表示されたら、再起動プロセスが完了しています。

![Reboot SenseCAP Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**注意**: Helium Blockchainの台帳は、micro SDカードの予期しないエラーによって損傷することがあり、ブロックチェーンの同期プロセスがブロックで停止し、同期に失敗することがあります。

ローカルコンソールでホットスポットを再起動すると、micro SDカードの潜在的なエラーを解決するのに役立つ場合があります。

**重要**: ホットスポットを頻繁に再起動しないでください。必要な場合にのみ再起動してください。

ブロック高が停止して増加しない場合、高さが-1または1のままの場合は、ブロックリセットを実行してください。これらの手順に従った後、ホットスポットは再び完全に同期されます。

* * *

**シャットダウン**
=============

シャットダウン機能は、突然の電源切断によるデバイスの損傷を防ぐため、デバイスのプラグを抜く前に使用することを推奨します。

**シャットダウン機能の使用方法**

「**Shutdown**」ボタンをクリックし、プロンプトを承認してください。

*   シャットダウンには数分かかります。
*   シャットダウンが完了すると、青色LEDとEthernetポートのLEDが消灯します。

![SenseCAP Shutdown Feature](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**注意**: デバイスを再度電源投入したい場合はアダプターを再接続する必要があるため、シャットダウン時はSenseCAP M1の近くにいることを確認してください。

* * *

**Reset Block**
===============

**注意**: Local Consoleにログインする必要があります。

赤色の「**Reset Blocks**」ボタンをクリックして、リセットブロックプロセスを開始してください。

![Reset Blocks SenseCAP](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**注意**: SenseCAP M1は最新のblessed snapshotの読み込みを開始します。ダッシュボードのステータスには遅延が生じる可能性があり、一時的に「**Unknown**」同期ステータスが表示されるのは正常です。

Turbo Syncを実行する必要がある場合は、最新のblessed snapshotが読み込まれるまで待ってください（約30分）。