---
description: SenseCAP M1 ローカルコンソール
title: SenseCAP M1 ローカルコンソール
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

**概要**
============

**2022年1月14日に更新された最新機能:** SenseCAP ローカルコンソールのセキュリティレベルを向上させるため、CPUIDに加えてローカルコンソールにログインする際に追加のパスワードが必要になりました。デフォルトのパスワードはホットスポットのシリアル番号（Serial Number）です。初回ログイン後にパスワードを変更することを強くお勧めします。

**注意**: ローカルコンソールを使用するには、コンピュータとホットスポットが同じルーター/ネットワークに接続されている必要があります。ホットスポットがリモートにある場合、現在ローカルコンソールの機能を使用することはできません。

![ローカルコンソール](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

**ログイン**
=========

**1\. ホットスポットのCPU IDとS/Nを取得する**

*   SenseCAP M1 Dashboardのアカウントを持っていない、またはホットスポットをDashboardに追加していない場合は、SenseCAP M1のデバイスラベルを確認し、S/NとCPU IDを取得してください。

![ローカルコンソールログイン詳細](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

*   すでにSenseCAP M1 Dashboardのアカウントを登録し、ホットスポットを追加している場合は、ダッシュボードからホットスポットのCPU IDとS/Nをコピーできます。

![ローカルコンソールログイン詳細 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2\. ホットスポットのIPアドレスを取得する**

*   SenseCAP M1 Dashboardのアカウントを持っていない、またはホットスポットをDashboardに追加していない場合は、ルーターの管理ページでホットスポットのIPアドレスを確認するか、Heliumアプリで診断を実行してIPアドレスを取得してください。その後、ブラウザにIPアドレスを入力してローカルコンソールページにアクセスします。
*   すでにSenseCAP M1 Dashboardのアカウントを登録し、ホットスポットを追加している場合は、ダッシュボードからホットスポットのIPアドレスを確認できます：
    *   "**Wi-Fi IP Address**" または "**LAN IP Address**" リンクをクリックすると、Turbo Syncローカルコンソールページに移動します。
    *   Wi-Fi接続の場合、ホットスポットのWi-Fi IPアドレスが表示されます。
    *   イーサネットケーブルまたはローカルLAN接続の場合、ホットスポットのLANアドレスが表示されます。

![ローカルコンソールログイン詳細 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)

**3\. ホットスポットのCPU IDとデフォルトパスワード（シリアル番号、S/N）を使用してログインする**

![ローカルコンソールログイン詳細 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![ローカルコンソールログイン詳細 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4\. デフォルトパスワードを変更する**

![ローカルコンソールパスワード変更](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

初回ログイン後、必ず "**Change Password**" ボタンをクリックしてデフォルトパスワードを変更してください。新しいパスワードは8～32桁で、数字、文字、記号の少なくとも2種類の組み合わせを含む必要があります。パスワードは暗号化され、SenseCAP M1にローカルでのみ保存されます。

セキュリティ上の理由から、「**Forget Password**」機能はまだ提供されていません。そのため、パスワードをしっかりと覚えておいてください。パスワードを忘れた場合は、MicroSDカードを再フラッシュしてデフォルトパスワードに戻す必要があります。

CLIユーザーの場合、パスワードが変更されるたびにローカルコンソールのデバイストークンも自動的に更新されることに注意してください。ローカルコンソールのウェブページをリフレッシュすると、新しいデバイストークンが表示されます。デバイストークンを安全に保管し、いかなる状況でも第三者に共有しないでください。

**5\. バインドキーを取得し、ホットスポットをSenseCAP Dashboardに追加する**

![ローカルコンソールバインドキー](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

上記のローカルコンソールページでデバイスCPU ID、デバイスETH MAC、およびデバイスバインドキーを取得してください。

* * *

**重要な情報**

**注意**: Turbo SyncはMicroSDカードへの頻繁な消去と書き込みを伴うため、必要な場合にのみ実行することをお勧めします。

デバイスの同期済みブロック高がブロックチェーンに非常に近い場合（200ブロック未満）、Turbo Syncはデバイスに必要ありません。また、実行することはできません。

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

Turbo Syncプロセスの完了には時間がかかる場合があり、ネットワーク速度に依存します。安定したインターネット接続を維持し、同期プロセスが完了するまで辛抱強くお待ちください。

**重要**: Turbo Syncプロセス中にデバイスの電源を切らないでください。そうしないと、次回の起動時に台帳が破損し、最後の承認済みスナップショットから再同期を開始します。その場合、Turbo Syncプロセスを再度実行する必要があります。

* * *

**再起動**
==========

**注意**: ローカルコンソールにログインする必要があります。

オレンジ色の「Reboot」ボタンをクリックして再起動プロセスを開始します。

*   「\[reboot\] request sent + \[reboot going\]」が表示されたら、プロセスが開始されています。
*   「----log stream disconnected from the host----」および「----log stream connected to the host----」が表示されたら、再起動プロセスが完了しています。

![SenseCAP ホットスポット再起動](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**注意**: Helium ブロックチェーン台帳は、MicroSDカードの予期しないエラーによって損傷し、ブロックチェーンの同期プロセスが特定のブロックで停止し、同期に失敗することがあります。

ローカルコンソールでホットスポットを再起動することで、MicroSDカードの潜在的なエラーを解決できる場合があります。

**重要**: ホットスポットを頻繁に再起動しないでください。必要な場合にのみ再起動してください。

ブロック高が停止して増加しない場合、高さが-1または1のままの場合は、ブロックリセットを実行してください。これらの手順を実行した後、ホットスポットは再び完全に同期されます。

* * *

**シャットダウン**
=============

デバイスを突然電源オフすることによる損傷を防ぐために、デバイスを抜く前にシャットダウン機能を使用することを推奨します。

**シャットダウン機能の使用方法**

"**Shutdown**" ボタンをクリックし、プロンプトを承認してください。

*   シャットダウンには数分かかります。
*   シャットダウンが完了すると、青色のLEDとイーサネットポートのLEDが消灯します。

![SenseCAP シャットダウン機能](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**注意**: シャットダウンを行う際は、必ずSenseCAP M1の近くにいることを確認してください。デバイスを再び起動するには、アダプターを再接続する必要があります。

* * *

**ブロックのリセット**
====================

**注意**: ローカルコンソールにログインする必要があります。

赤い "**Reset Blocks**" ボタンをクリックして、ブロックリセットプロセスを開始してください。

![ブロックリセット SenseCAP](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**注意**: SenseCAP M1は最新の承認済みスナップショットをロードし始めます。ダッシュボードのステータスに遅延が発生する場合があり、一時的に "**Unknown**" の同期ステータスが表示されるのは正常です。

Turbo Syncを実行する必要がある場合は、最新の承認済みスナップショットがロードされるまで（約30分）お待ちください。