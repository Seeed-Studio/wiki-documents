---
description: SenseCAP M1 トラブルシューティング
title: SenseCAP M1 トラブルシューティング
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Troubleshooting
last_update:
  date: 02/14/2023
  author: Matthew
---


SenseCAP M1 トラブルシューティング
===========================

ハードウェア関連
================

* * *

**青色LEDが点滅しない**
------------------------

![SenseCAP M1 Blue LED](https://www.sensecapmx.com/wp-content/uploads/2022/07/blue-led-1.webp)

![SenseCAP M1 Blue LED Not Good](https://www.sensecapmx.com/wp-content/uploads/2022/08/back-front-led-m1.png)

**トラブルシューティング手順**

1.  ETH LEDが点滅しているかを確認してください。ETHの緑色と黄色のライトが点灯し、青色LEDが消灯している場合は、**[まず新しいSDカードをフラッシュしてください](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)**。青色ライトがまだ消灯している場合は、ハードウェア不良の問題です。
2.  緑色と黄色のLEDが消灯している場合は、電源アダプターが正常であることを確認してください。5V-3Aの携帯電話充電器とType-Cケーブル、新しいネットワークケーブルに交換して問題が解決するかを確認してください。
3.  ホットスポットがWi-Fi経由でインターネットに接続している場合は、フロントパネルを通して赤色ライトが点灯しているかを確認してください。点灯していない場合は、ハードウェア不良の問題です。

* * *

ネットワーク関連
===============

* * *

**インターネットに接続できない場合**
--------------------------------------

ネットワーク設定を正しく設定することは重要な役割を果たします。適切な設定を確実にするために、以下のすべての詳細を読んでください。

Helium ホットスポットは、ホットスポットがファイアウォールの背後にある場合や、以下に説明する互換性のないNATタイプを使用している場合に動作しない可能性があります。その他の場合では、ルーター設定/ネットワーク設定の問題、または単純に接続がオフライン（インターネットなし）である可能性があります。

**注意**: ネットワーク設定を適切に設定できない場合、または以下の手順が機能しない場合は、さらなるガイダンスについて >> 公式Discordチャンネルをご訪問ください。

**トラブルシューティング手順 - イーサネット接続**

**Wi-Fiを使用していない場合は、イーサネットケーブルを確認してください**: イーサネットケーブルがルーター/モデムからホットスポットにしっかりと接続されていることを確認してください。

*   **ホットスポットのイーサネットポート横の琥珀色ライトの点滅**: 安定した接続が確立されています。
*   イーサネットポートで琥珀色ライトの点滅が見られない場合は、ケーブルが時間の経過とともに故障する傾向があるため、別のケーブルを試してください。

**インターネット接続を確認してください**: 同じネットワーク上で、お使いの家庭用コンピューター/ラップトップ/電話からその場所でインターネットに接続できることを確認してください。インターネットに接続できない場合は、接続に関する追加サポートについて、インターネットサービスプロバイダー（ISP）に連絡する必要があります。

**トラブルシューティング手順 - Wi-Fi接続**

*   **Wi-Fiを使用している場合**: WEPまたはWPAセキュリティパスワード（Wi-Fiパスワード）を使用してワイヤレスネットワークに接続できることを確認してください。ワイヤレスモデムへの接続方法やアクセス方法がわからない場合は、機器の製造元に直接連絡する必要があります。
*   インターネットに接続できない場合は、ルーターの電源を再投入してください。ホットスポットとルーターを壁またはパワーストリップから2分間抜いてください。その後、再び接続してインターネットに接続できるかを確認してください。

* * *

**ホットスポットを携帯電話のWiFiに接続する方法**
--------------------------------------------------

**以下の例はApple iOSデバイス用に示されています。**

*   携帯電話で「**設定**」を見つけてください。
*   「**インターネット共有**」をクリックしてください。

![iOS Personal Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot.png)

*   他の人の参加を許可するために有効にしてください。
*   ホットスポットをペアリングしてください。
*   ホットスポットをApple iOS携帯電話のインターネット共有名に接続してください。

![iOS Hotspot Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-setup.png)

これで、ファームウェアアップデートとネットワーク接続のトラブルシューティングのために、SenseCAP GatewayをWi-Fi経由で携帯電話のインターネット共有にペアリングできます。

* * *

SDカード関連
===============

* * *

**'config.json'ファイルの交換方法**
-----------------------------------------

**注意して進めてください**: 以下の手順は、技術サポートチームからアドバイスを受けた場合にのみ使用してください。アドバイスを受けて**いない**場合は、これらの手順を複製する必要はありません。

**注意:** 他のホットスポットに同じ'**config.json**'ファイルを使用**しないでください**。各ホットスポットには、そのシリアル番号に固有の'**config.json**'ファイルが添付されています。

* * *

**手順**

以下の手順は、Micro SDカード内の'config.json'ファイルを交換するのに役立ちます。デバイスがファームウェア/古いバージョンで停止しており、障害の原因となる潜在的なエラーである可能性があると判断した場合は、以下の手順に従って問題を解決してください。

**注意**: 以下の手順に従ってmicro SDカードを交換する前に、まずインターネット接続を確認して、問題がインターネットに関連していないことを確認してください。

* * *

**必要なもの**

1.  SenseCAP M1 ホットスポット内のMicro SDカード
2.  Micro SDカードリーダー
3.  ドライバー
4.  元のカードからコピーした'**config.json**'ファイル

**注意**: 元のファイルを取得できない場合は、技術サポートエージェントに提供を依頼してください。

![Swap Config.json File Requirements](https://www.sensecapmx.com/wp-content/uploads/2022/07/requirements-sd-flash.png)

_必要なアイテム_

* * *

**手順**

*   **ステップ1**: ホットスポットの電源を切ってください
*   **ステップ2**: アンテナを取り外してください
*   **ステップ3**: パネルの前面側に向けてください

![Config.json File Swap 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step1-1.png)

*   **ステップ4**: ドライバーを使用してパネル前面の2つのネジを緩めてください

![Config.json File Swap 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step2-1.png)

*   **ステップ5**: フロントパネルを移動して脇に置いてください

![Config.json File Swap 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step3-1.png)

*   **ステップ 6**: ピンセットを使用してMicro SDカードの上にある黄色いストックを取り除き、Micro SDカードを引き抜きます

![Config.json File Swap 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step4-1.png)

![Config.json File Swap 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/step5-1.png)

![Config.json File Swap 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/step6-1.png)

*   **ステップ 7**: Micro SDカードをカードリーダーに挿入し、コンピューターに接続します

![Config.json File Swap 7](https://www.sensecapmx.com/wp-content/uploads/2022/07/step7-1.png)

![Config.json File Swap 7B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step8-1.png)

**注意**: Windows OSを使用していて「**ドライブ** "**X**" **のディスクをフォーマットする必要があります**」と表示された場合は、「**キャンセル**」をクリックしてください。そうしないとMicro SDカードのデータが消去されます。

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/format-1.png)

_Micro SDカード挿入時のWindowsプロンプト_

*   **ステップ 8**: '**resin-boot**'フォルダ内に'**config.json**'ファイルがあることを確認できます。メモ帳で開いて空であることを確認してください。

空で**ない**場合、configファイルによるOTA（無線アップデート）の問題があり、これはネットワーク接続の問題です。ネットワークとセキュリティ/ファイアウォール設定を確認してください。

空**である**場合は、私たちが提供する新しい'config.json'ファイルを使用して置き換えてください。

![Empty config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/config-1.png)

*   **ステップ 9**: '**config.json**'ファイルが空の場合、私たちが提供するファイルで置き換える必要があります。新しいファイルをディスクにドラッグし、「置換」をクリックします。

**注意**: 他のファイルは削除しないでください。そうしないとSenseCAP M1に予期しない問題が発生します。

**注意**: 各デバイスには異なる'config.json'ファイルが登録されています。'config.json'ファイルを他の人と共有したり、他の人のファイルを使用したりしないでください。

**MacOS用**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 'config.json'ファイルのコピー_

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Windows用**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - "config.json"ファイルのコピー_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

**注意**: コピー後、メモ帳で開いて'**config.json**'ファイル内に内容があることを再確認することをお勧めします。

*   **ステップ 10**: Micro SDカードをホットスポット内に戻します

**ヒント**: ホットスポットが起動して動作していることを確認してから、フロントパネルを組み立ててください。

![Put Together SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step10-1.png)

![Put Together SenseCAP M1 - 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step11-1.png)

![Put Together SenseCAP M1 - 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step12-1.png)

![Put Together SenseCAP M1 - 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step13-1.png)

*   **ステップ 11**: アンテナを組み立て、ホットスポットの電源を入れます

SenseCAP M1の電源を入れ、インターネットに接続し（イーサネットケーブルが推奨）、OTAアップデートのために約20分待機し、ダッシュボード（[**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)）でステータスを確認するか、Helium APPで診断を実行してください。

さらに問題や質問がある場合は、こちらでチケットを開いてください：[**https://support.sensecapmx.com**](https://support.sensecapmx.com)

* * *

**新しいMicro SDカードに新しいイメージをフラッシュする方法**
---------------------------------------------------

**注意して進めてください**: 以下の手順は、技術サポートチームから指示された場合**のみ**使用してください。指示されて**いない**場合は、これらの手順を実行する必要はありません。

ユーザーによるホットスポットの誤用により、頻繁な電源の入り切り、micro SDカードの抜き差しが、ファイルシステムの整列などの未知のmicro SDカードエラーを引き起こす可能性があることがわかりました。

**問題をデバッグするためにmicro SDカードの交換を指示された場合は、以下の手順を注意深く従ってください。**

* * *

**手順**

以下に提供される手順は、新しいmicro SDカードにイメージをフラッシュし、SenseCAP M1の元のカードと交換して、潜在的なmicro SDカードエラーによって引き起こされる問題を修正するのに役立ちます。

**注意**: 以下の手順に従ってmicro SDカードを交換する前に、まずインターネット接続を確認して、問題がインターネットに関連していないことを確認してください。

* * *

**必要なもの**

**注意**: SDカード交換キットが利用可能になりました。[**こちら**](https://www.seeedstudio.com/SenseCAP-M1-SD-Card-Replacement-Kit-p-5279.html)をクリックして購入できます。

![SenseCAP M1 Replacement SD Card Kit](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_キットには、ドライバー、MicroSDカードリーダー、64GB MicroSDカード、MicroSDの交換方法に関する説明書が含まれています。_

1.  新しいMicro SDカード（SanDisk High Endurance 64GB）
2.  Micro SDカードリーダー
3.  ドライバー
4.  元のカードからコピーした'**config.json**'ファイル  
    1.  **注意**: 元のファイルを取得できない場合は、技術サポート担当者に提供を依頼してください。

* * *

**手順**

1.  デバイスの電源を切り、フロントパネルを開け、micro SDカードの上の黄色いステッカーを取り除き（ピンセットを使用可能）、元のmicro SDカードを抜いて取り出します。
2.  元のmicro SDカードをmicro SDカードリーダーでコンピューターに接続し、元のSDカードの「resin-boot」パーティションから'config.json'ファイルをコピーし、コンピューターに保存します  
    1.  **注意**: 元のファイルを取得できない場合は、技術サポート担当者に提供を依頼してください。
3.  **SenseCap M1イメージ**をこちらからダウンロードします：[**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
4.  **Balena Etcher ツール**をこちらからダウンロードします：[**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)
5.  Balena Etcherを使用して**SenseCap M1イメージ**を新しいmicro SDカードにフラッシュします。
6.  フラッシュ後、私たちが提供した「**config.json**」ファイルをコンピューターから新しいmicro SDカードの「**resin-boot**」パーティションにコピーします。
7.  新しいmicro SDカードをコンピューターから抜き、SenseCap M1に挿入します。
8.  SenseCap M1の電源を入れ、インターネットに接続し（イーサネットケーブルが推奨）、20分間のアップデートを待機し、ダッシュボード（[**https://status.sensecapmx.cloud**](https://status.sensecapmx.cloud/)）でステータスを確認するか、Helium Appで診断を実行します。

**注意**: Hotspotが正常に動作することを確認してから、Hotspotのフロントパネルを組み立ててください。

* * *

**SenseCAP M1を開いてMicro SDカードを交換する方法**

*   **ステップ1:** Hotspotの電源を切り、アンテナを取り外します。

![SenseCAP M1 SD Card Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **ステップ2**: ドライバーを使用してフロントパネルの2本のネジを緩めます。

![SenseCAP M1 SD Card Step 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **ステップ3**: フロントパネルを移動して脇に置きます。

![SenseCAP M1 SD Card Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **ステップ4**: Micro SDカードの上にある黄色いステッカーを取り除きます（ピンセットを使用してもよい）。

![SenseCAP M1 SD Card Step 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card Step 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Micro SDを読み取りイメージを書き込む方法**

*   **ステップ1**: 新しいMicro SDカードをMicro SDカードリーダーに挿入します。

![SenseCAP M1 SD Card Image Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_新しいMicro SDカードをMicro SDカードリーダーに挿入_

![SenseCAP M1 SD Card Image Step 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_完全に挿入されていることを確認_

*   **ステップ2**: Balena EtcherでSenseCAP M1イメージを新しいMicro SDカードに書き込みます。
    *   **SenseCap M1イメージ**をここからダウンロード: [**sensecap-m1.img.zip**](https://drive.google.com/file/d/1fZf09U2_jQOpsSKPWc8TAZ_Jl82X9tzx/view?usp=sharing)
    *   **Balena Etcher ツール**をここからダウンロード: [**balenaEtcher - Flash OS images to SD cards & USB drives ​**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_お使いのオペレーティングシステムに基づいて選択_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Image.ZIPファイルをBalena Etcherにドラッグ_

*   **ステップ3**: MicroSDカードにイメージの書き込みが正常に完了したら、提供された「config.json」ファイル、または元々コピーしたファイルを、コンピューターから「resin-boot」というパーティションにコピーします。

**MacOSの場合**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 'config.json'ファイルをコピー_

**Windowsの場合**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

*   **ステップ4**: 新しいMicro SDカードをコンピューターから取り外します。
*   **ステップ5**: 新しいMicro SDカードをSenseCAP M1に挿入します。

![SenseCAP M1 SD Card Step 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **ステップ6**: SenseCAP M1の電源を入れ、インターネットに再接続します（イーサネットケーブルが最適）。
*   **ステップ7**: 約20分待ってアップデートを適用し、ダッシュボード（**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/)**）を確認するか、完了後にHelium Appで診断を実行します。

![SenseCAP M1 SD Card Step 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**注意**: Hotspotが正常に動作することを確認してから、Hotspotのフロントパネルを組み立ててください。

さらなる問題や質問がございましたら、こちらでチケットを開いてください: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

**Micro SDカードをフォーマットしてイメージを書き込む方法**
-------------------------------------------------------

**注意して進めてください**: 以下の手順は、技術サポートチームからアドバイスを受けた場合のみ使用してください。アドバイスを受けて**いない**場合は、これらの手順を実行する必要はありません。

ユーザーによるHotspotの誤用により、頻繁な電源の入り切り、micro SDカードの抜き差しが、ファイルシステムの整合性などの未知のmicro SDカードエラーを引き起こす可能性があることがわかりました。

**問題をデバッグするためにmicro SDカードの交換をアドバイスされた場合は、以下の手順を注意深く従ってください。**

* * *

**手順**

以下に提供される手順は、新しいmicro SDカードにイメージを書き込み、SenseCAP M1の元のカードと交換して、潜在的なmicro SDカードエラーによって引き起こされる問題を修正するのに役立ちます。

**注意**: 以下の手順に従ってmicro SDカードを交換する前に、まずインターネット接続を確認して、問題がインターネットに関連していないことを確認してください。

* * *

**必要なもの**

1.  SenseCAP M1 Hotspot内のMicro SDカード
2.  Micro SDカードリーダー
3.  ドライバー
4.  元のカードからコピーした「**config.json**」ファイル  
    1.  **注意**: 元のファイルを取得できない場合は、技術サポート担当者に提供を依頼してください。
5.  SD Card Formatter 5.0.1
6.  **Windows**用 => [**こちらをクリック**](https://drive.google.com/file/d/15KMqnVpeOMRcFOYIRLbwA4CJooNsdkLM/view?usp=sharing)してダウンロードとインストール
7.  **Mac OS**用 => [**こちらをクリック**](https://drive.google.com/file/d/1FjxMOdGDjW3iKx3COeexY7E2bpF2cqDy/view?usp=sharing)してダウンロードとインストール
8.  SenseCAP M1イメージ => [**こちらをクリック**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)してダウンロード
9.  Balena Etcher => [**こちらをクリック**](https://www.balena.io/etcher/)してダウンロード

![SenseCAP M1 Replacement SD Card Kit](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_キットには、ドライバー、MicroSDカードリーダー、64GB MicroSDカード、およびMicroSDの交換方法に関する説明書が含まれています。_

* * *

**手順**

1.  デバイスの電源を切り、フロントパネルを開け、Micro SDカードの上の黄色いステッカーを取り除き、Micro SDカードを取り外します。
2.  Micro SDカードリーダーでMicro SDカードをコンピューターに接続し、パーティション「resin-boot」から「**config.json**」ファイルをコピーして、コンピューターに保存します。  
    1.  **注意**: 元のファイルを取得できない場合は、技術サポート担当者に提供を依頼してください。
3.  「**SD Card Formatter 5.0.1**」を使用してMicroSDカードをフォーマットします。
4.  **Balena Etcher**で**SenseCap M1イメージ**をMicroSDカードに書き込みます。
5.  コンピューターからMicro SDカードのパーティション「**resin-boot**」に「**config.json**」ファイルをコピーします。
6.  コンピューターからMicro SDカードを取り外し、SenseCap M1 Hotspotに挿入し直します。
7.  SenseCap M1の電源を入れ、インターネットに接続し（イーサネットケーブルが推奨）、OTAアップデートのために約20分待ち、[**ダッシュボード**](https://docs.sensecapmx.com/home/sensecap-dashboard)でステータスを確認するか、Helium APP内で診断を実行します。

**注意**：Hotspotが正常に動作することを確認してから、Hotspotのフロントパネルを組み立ててください。

* * *

**SenseCAP M1を開いてMicro SDカードを交換する方法**

*   **ステップ1:** Hotspotの電源を切り、アンテナを取り外します。

![SenseCAP M1 SD Card Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **ステップ2**:  ドライバーを使用してフロントパネルの2本のネジを緩めます。

![SenseCAP M1 SD Card Step 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **ステップ3**:  フロントパネルを移動して脇に置きます。

![SenseCAP M1 SD Card Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **ステップ4**:  Micro SDカードの上にある黄色いステッカーを取り除きます（ピンセットを使用してもよい）。

![SenseCAP M1 SD Card Step 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card Step 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Micro SDカードをフォーマットする方法（Windows）**

*   **ステップ1****:** 新しいMicro SDカードをMicro SDカードリーダーに挿入します。  
    

![SenseCAP M1 SD Card Image Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_新しいMicro SDカードをMicro SDカードリーダーに挿入_

![SenseCAP M1 SD Card Image Step 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_完全に挿入されていることを確認_

*   **ステップ2****:** SD Card Formatterをインストールして実行します

![SD Card Formatter](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-formatter-1.png)

*   **ステップ3****:**  コンピューターに接続したMicro SDカードを選択し、「Overwrite format」を選択し、ボリュームラベルに「resin-boot」と入力して、「Format」ボタンをクリックします  
    

![SD Card Formatter Resin-Boot Folder](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-resin-1.png)

*   **ステップ4****:**  ダイアログウィンドウで「Yes」を選択します  
    

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-2.png)

*   **ステップ5**: 約30〜45分待つとフォーマット処理が完了します

![SD Card Formatter Screen](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-3-1.png)

* * *

**Micro SDカードをフォーマットする方法（MacOS）**

手順は似ています。以下の画像をご覧ください：

![SD Card Formatter MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-1-1.png)

![SD Card Formatter MacOS Complete](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-2-1.png)

* * *

**Micro SDカードにイメージを書き込む方法**

*   **SenseCap M1イメージ**をここからダウンロードします：[**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
*   **Balena Etcher ツール**をここからダウンロードします：[**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_お使いのオペレーティングシステムに基づいて選択_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Image.ZIPファイルをBalena Etcherにドラッグ_

* * *

**Micro SDカードに'config.json'ファイルを追加する方法**
------------------------------------------------------

MicroSDカードにイメージを正常に書き込んだ後、提供された「**config.json**」ファイル、または元々コピーしたファイルを、コンピューターから「resin-boot」というパーティションにコピーします。

**注意**：他のファイルは削除しないでください。削除するとSenseCAP M1で予期しない問題が発生します。

**注意**：各デバイスには異なる「**config.json**」ファイルが登録されています。「**config.json**」ファイルを他の人と共有したり、他の人のファイルを使用したりしないでください。

**macOSの場合**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 'config.json'ファイルをコピー_

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Windowsの場合**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - 'config.json'ファイルをコピー_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

* * *

**Micro SDカードのフォーマットとイメージの書き込み後**
-------------------------------------------------------------

*   **ステップ1**: 新しいMicro SDカードをコンピューターから取り外します。
*   **ステップ2**: 新しいMicro SDカードをSenseCAP M1に挿入します。

![SenseCAP M1 SD Card Step 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **ステップ6**: SenseCAP M1の電源を入れ、インターネットに再接続します（Ethernetケーブルが最適）。
*   **ステップ7**: 約20分待ってアップデートを適用し、完了後にダッシュボード（**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/)**）を確認するか、Heliumアプリで診断を実行します。

![SenseCAP M1 SD Card Step 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**注意**：Hotspotが正常に動作することを確認してから、Hotspotのフロントパネルを組み立ててください。

さらなる問題や質問がある場合は、こちらでチケットを開いてください：[**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

Heliumアプリエラー
================

**オンボーディングキーが見つかりません**
---------------------------

こちらでサポートチケットを開いてください：[**https://support.sensecapmx.com**](https://support.sensecapmx.com) そして、問題を解決するためにhotspotのSN（シリアル番号）を送信してください。

![Helium App - No Onboarding Key Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/onboarding.png)

* * *

**Hotspotが見つかりません**
--------------------

Heliumアプリで「Hotspotが見つかりません」と表示される

**トラブルシューティング手順**

1.  まず青色LEDを確認してください。ゆっくりと点滅モードになっているはずです。
2.  そうでない場合は、SenseCAP M1がBluetooth設定モードを有効にしていないことを示しています。hotspotと携帯電話でBluetoothがオンになっていることを確認してください。
3.  SenseCAP M1の背面にあるボタンを6〜10秒間押してSenseCAP M1の設定モードを有効にすると、青色LEDがゆっくりと点滅モード（2秒ごとに1回点滅）に変わります。その後、再度hotspotをスキャンしてください。

![Helium App Errors - Not Hotspots Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/no-hotspots-found.png)

* * *

**デバイス切断**
-----------------------

Bluetooth経由でペアリング中にデバイスが切断されました

**トラブルシューティング手順**

S9より新しいSamsungスマートフォンを使用している場合に互換性の問題が発生します。

[**新しいイメージでSDカードをフラッシュしてください**](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)。

![Helium App Errors - Device Disconnected](https://www.sensecapmx.com/wp-content/uploads/2022/07/error-device-disconnected.png)

* * *

**特性書き込み失敗**
-------------------------------

Helium App内でHotspotを登録できません

**トラブルシューティング手順**

1.  EthernetまたはWi-Fi接続直後にホットスポットを登録しようとすると、OTA（無線アップデート）が実行中のためこのエラーが表示されます。
2.  ホットスポットをEthernetまたはWi-Fi経由で10分以上接続したままにしてください。これによりOTAアップデートが完了します。
3.  ボタンを6-10秒間長押しして設定モードに入り、再度登録を試してください。

![Helium App Errors - Characteristic Write Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/unable-to-register.webp)

* * *

**特性読み取り失敗**
------------------------------

BluetoothでのペアリングまたはWi-Fi接続時のエラー

Bluetooth経由でHotspotをペアリングしたり、Wi-Fiに接続しようとする際に以下のエラーメッセージが表示される場合、これはWi-FiネットワークのSSIDに認識されない無効な文字が含まれていることを意味します。

英数字以外の文字（a - z、0 - 9以外の文字）や記号の使用は避けてください。

**解決策**: 記号や英数字以外の文字を使わずにWi-Fiネットワーク名を変更してください。

![Helium App Errors - Characteristic Read Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/read-error.png)

* * *

**Hotspot追加トランザクションの構築**
----------------------------------------

Hotspot登録時にHelium Appでhotspot追加トランザクションの構築エラーが表示される

**トラブルシューティング手順**

1.  EthernetまたはWi-Fi接続直後にホットスポットを登録しようとすると、OTA（無線アップデート）が実行中またはブロックが完全に同期されていないためこのエラーが表示されます。
2.  ファームウェアOTAとブロックの同期プロセスが完了するまで、ホットスポットをEthernetまたはWifiに少なくとも30分間接続したままにしてください。その後、ボタンを6-10秒間長押しして設定モードに入り、再度登録を試してください。
3.  完了後、診断またはSenseCAP Dashboardを使用してファームウェアバージョンを確認し、最新であることを確認してください。  
    1.  **注意**: ホットスポットのファームウェアが最新バージョンにアップデートできない場合は、デバイスが使用しているネットワークを携帯電話のホットスポットなど別のネットワークに変更し、上記の2番目の手順に従うことをお勧めします。
    2.  **注意**: ファームウェアOTAが完了した後もデバイス自体でブロックが完全に同期できない場合は、ローカルコンソールでブロックをリセットすることをお勧めします。

![Helium App Errors - Constructing Add Hotspot Transaction](https://www.sensecapmx.com/wp-content/uploads/2022/07/transaction-failed-add-hotspot.png)

* * *

**位置/アンテナのアサート**
------------------------------

アンテナ詳細の更新または位置のアサート時に以下のエラーが表示される場合

**トラブルシューティング手順**

この問題はネットワーク接続またはAppに関連しています。アプリを再起動するか、後でもう一度試してください。

![Helium App Errors - Asserting Location/Antenna](https://www.sensecapmx.com/wp-content/uploads/2022/07/assert-location-error.png)