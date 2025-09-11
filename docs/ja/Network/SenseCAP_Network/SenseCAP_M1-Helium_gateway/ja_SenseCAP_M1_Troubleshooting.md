---
description: SenseCAP M1 トラブルシューティング
title: SenseCAP M1 トラブルシューティング
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Troubleshooting
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP M1 トラブルシューティング
===========================

ハードウェア関連
================

* * *

**青色LEDが点滅しない**
------------------------

![SenseCAP M1 青色LED](https://www.sensecapmx.com/wp-content/uploads/2022/07/blue-led-1.webp)

![SenseCAP M1 青色LEDが点灯しない](https://www.sensecapmx.com/wp-content/uploads/2022/08/back-front-led-m1.png)

**トラブルシューティング手順**

1. ETH LEDが点滅しているか確認してください。ETHの緑色と黄色のライトが点灯していて青色LEDが消灯している場合、**[まず新しいSDカードをフラッシュしてください](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)**。青色ライトが依然として消灯している場合は、ハードウェアの欠陥が原因です。
2. 緑色と黄色のLEDが消灯している場合、電源アダプターが正常か確認してください。5V-3Aの電話充電器とタイプCケーブル、新しいネットワークケーブルを使用して問題が解決するか確認してください。
3. ホットスポットがWi-Fi経由でインターネットに接続している場合、前面パネルで赤色ライトが点灯しているか確認してください。点灯していない場合は、ハードウェアの欠陥が原因です。

* * *

ネットワーク関連
===============

* * *

**インターネットに接続できない？**
--------------------------------------

ネットワーク構成を正しく設定することが重要です。以下の詳細をすべて確認して、適切な構成を確保してください。

Helium ホットスポットは、ファイアウォールの背後にある場合や、以下に記載されているような非互換のNATタイプを使用している場合、動作しない可能性があります。他の場合では、ルーター構成/ネットワーク構成の問題や、単にインターネット接続がオフラインであることが原因かもしれません。

**注意**: ネットワーク構成を正しく設定できない場合や、以下の手順がうまくいかない場合は、>>公式Discordチャンネルを訪れてさらなる指導を受けてください。

**トラブルシューティング手順 - イーサネット接続**

**Wi-Fiを使用していない場合はイーサネットケーブルを確認してください**: イーサネットケーブルがルーター/モデムからホットスポットにしっかりと接続されていることを確認してください。

*   **ホットスポットのイーサネットポート横のアンバーライトが点滅している場合**: 接続が確立されています。
*   イーサネットポートにアンバーライトの点滅が見られない場合は、別のケーブルを試してください。ケーブルは時間が経つと故障することがあります。

**インターネット接続を確認してください**: 同じネットワークで自宅のコンピュータ/ラップトップ/電話を使用してインターネットに接続できることを確認してください。インターネットに接続できない場合は、インターネットサービスプロバイダー（ISP）に連絡して接続に関する追加の支援を受けてください。

**トラブルシューティング手順 - Wi-Fi接続**

*   **Wi-Fiを使用している場合**: WEPまたはWPAセキュリティパスワード（Wi-Fiパスワード）を使用してワイヤレスネットワークに接続できることを確認してください。ワイヤレスモデムへの接続方法やアクセス方法がわからない場合は、機器の製造元に直接連絡してください。
*   インターネットに接続できない場合は、ルーターを電源サイクルしてください。ホットスポットとルーターを壁や電源タップから2分間抜いてください。その後、再度接続してインターネットに接続できるか確認してください。

* * *

**ホットスポットを電話のWi-Fiに接続する方法**
--------------------------------------------------

**以下はApple iOSデバイスでの例です。**

*   携帯電話で「**設定**」を見つけます。
*   「**パーソナルホットスポット**」をクリックします。

![iOS パーソナルホットスポット](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot.png)

*   他のデバイスが参加できるように設定を有効にします。
*   ホットスポットをペアリングします。
*   ホットスポットをApple iOS電話のパーソナルホットスポット名に接続します。

![iOS ホットスポット設定](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-setup.png)

これで、SenseCAPゲートウェイをWi-Fi経由で電話のパーソナルホットスポットにペアリングし、ファームウェアの更新やネットワーク接続のトラブルシューティングを行うことができます。

* * *

SDカード関連
===============

* * *

**'config.json'ファイルを交換する方法**
-----------------------------------------

**注意して進めてください**: 以下の手順は、技術サポートチームから指示を受けた場合のみ使用してください。指示を受けていない場合は、これらの手順を実行する必要はありません。

**注意:** 他のホットスポットに同じ「**config.json**」ファイルを使用しないでください。各ホットスポットには、シリアル番号に関連付けられた固有の「**config.json**」ファイルがあります。

* * *

**手順**

以下の手順は、Micro SDカード内の「config.json」ファイルを交換する方法を説明します。デバイスがファームウェア/古いバージョンで停止している場合や、エラーが原因で失敗している可能性がある場合は、以下の手順に従って問題を解決してください。

**注意**: 以下の手順を実行する前に、インターネット接続を確認して問題がインターネットに関連していないことを確認してください。

* * *

**必要なもの**

1.  SenseCAP M1ホットスポット内のMicro SDカード
2.  Micro SDカードリーダー
3.  ドライバー
4.  元のカードからコピーされた「**config.json**」ファイル

**注意**: 元のファイルを取得できない場合は、技術サポートエージェントに依頼してください。

![Swap Config.json File Requirements](https://www.sensecapmx.com/wp-content/uploads/2022/07/requirements-sd-flash.png)

_必要なアイテム_

* * *

**手順**

*   **ステップ1**: ホットスポットの電源をオフにします。
*   **ステップ2**: アンテナを取り外します。
*   **ステップ3**: パネルの前面側に向けます。

![Config.json File Swap 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step1-1.png)

*   **ステップ4**: ドライバーを使用してパネル前面の2つのネジを緩めます。

![Config.json File Swap 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step2-1.png)

*   **ステップ5**: 前面パネルを取り外して横に置きます。

![Config.json File Swap 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step3-1.png)

* **ステップ 6**: ピンセットを使用してMicro SDカード上部の黄色いシールを取り外し、Micro SDカードを引き抜きます。

![Config.json File Swap 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step4-1.png)

![Config.json File Swap 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/step5-1.png)

![Config.json File Swap 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/step6-1.png)

* **ステップ 7**: Micro SDカードをカードリーダーに挿入し、コンピュータに接続します。

![Config.json File Swap 7](https://www.sensecapmx.com/wp-content/uploads/2022/07/step7-1.png)

![Config.json File Swap 7B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step8-1.png)

**注意**: Windows OSを使用している場合、「**ドライブ** "**X**" を使用するにはフォーマットする必要があります」と表示されたら、「**キャンセル**」をクリックしてください。そうしないとMicro SDカードのデータが消去されます。

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/format-1.png)

_WindowsでのMicro SDカード挿入時のプロンプト_

* **ステップ 8**: '**resin-boot**'フォルダ内に'**config.json**'ファイルがあることを確認してください。メモ帳で開き、中身が空であることを確認します。

もし**空でない**場合、これはOTA（Over The Air）アップデートの問題であり、ネットワーク接続の問題が原因です。ネットワークおよびセキュリティ/ファイアウォール設定を確認してください。

もし**空である**場合、提供された新しい'config.json'ファイルで置き換えてください。

![Empty config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/config-1.png)

* **ステップ 9**: '**config.json**'ファイルが空の場合、提供されたファイルで置き換える必要があります。新しいファイルをディスクにドラッグし、「置き換え」をクリックしてください。

**注意**: 他のファイルを削除しないでください。そうしないと、SenseCAP M1に予期しない問題が発生する可能性があります。

**注意**: 各デバイスには登録された異なる'config.json'ファイルがあります。他人とファイルを共有したり、他人のファイルを使用したりしないでください。

**MacOSの場合**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 'config.json' ファイルのコピー_

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Windowsの場合**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - "config.json" ファイルのコピー_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

**注意**: コピー後、メモ帳で開いて'**config.json**'ファイルの中身があることを再確認することをお勧めします。

* **ステップ 10**: Micro SDカードをHotspotに戻します。

**ヒント**: Hotspotが正常に動作していることを確認した後、フロントパネルを組み立ててください。

![Put Together SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step10-1.png)

![Put Together SenseCAP M1 - 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step11-1.png)

![Put Together SenseCAP M1 - 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step12-1.png)

![Put Together SenseCAP M1 - 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step13-1.png)

* **ステップ 11**: アンテナを組み立て、Hotspotの電源を入れます。

SenseCAP M1の電源を入れ、インターネットに接続します（イーサネットケーブルを使用することを推奨）。OTAアップデートのために約20分待ち、Dashboard（[**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)）でステータスを確認するか、Heliumアプリ内で診断を実行してください。

さらに問題や質問がある場合は、こちらでチケットを作成してください: [**https://support.sensecapmx.com**](https://support.sensecapmx.com)

* * *

**新しいMicro SDカードに新しいイメージをフラッシュする方法**
---------------------------------------------------

**注意して進めてください**: 以下の手順は、技術サポートチームから指示を受けた場合にのみ使用してください。指示を受けていない場合は、これらの手順を実行する必要はありません。

ユーザーによるHotspotの誤使用により、頻繁な電源のオンオフやMicro SDカードの抜き差しが原因で、ファイルシステムの不整合などの未知のMicro SDカードエラーが発生する可能性があります。

**Micro SDカードを交換して問題をデバッグするよう指示された場合は、以下の手順に従ってください。**

* * *

**手順**

以下の手順は、新しいMicro SDカードにイメージをフラッシュし、元のMicro SDカードをSenseCAP M1で交換する方法を説明します。これにより、Micro SDカードエラーが原因で発生した問題を修正できます。

**注意**: 以下の手順を実行する前に、インターネット接続を確認し、問題がインターネットに関連していないことを確認してください。

* * *

**必要なもの**

**注意**: SDカード交換キットが利用可能です。購入はこちらから: [**here**](https://www.seeedstudio.com/SenseCAP-M1-SD-Card-Replacement-Kit-p-5279.html)

![SenseCAP M1 Replacement SD Card Kit](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_このキットには、ドライバー、MicroSDカードリーダー、64GB MicroSDカード、およびMicroSDカードの交換方法に関する説明書が含まれています。_

1. 新しいMicro SDカード（SanDisk High Endurance 64GB）
2. Micro SDカードリーダー
3. ドライバー
4. 元のカードからコピーした'**config.json**'ファイル  
   1. **注意**: 元のファイルを取得できない場合は、技術サポートエージェントに提供を依頼してください。

* * *

**手順**

1. デバイスの電源を切り、フロントパネルを開き、Micro SDカード上部の黄色いシールを取り外します（ピンセットを使用できます）。元のMicro SDカードを抜き取ります。
2. 元のMicro SDカードをMicro SDカードリーダーでコンピュータに接続し、元のSDカードの"resin-boot"パーティションから'config.json'ファイルをコピーしてコンピュータに保存します。  
   1. **注意**: 元のファイルを取得できない場合は、技術サポートエージェントに提供を依頼してください。
3. **SenseCap M1 Image**をこちらからダウンロードします: [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
4. **Balena Etcherツール**をこちらからダウンロードします: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)
5. Balena Etcherを使用して、新しいMicro SDカードに**SenseCap M1 Image**をフラッシュします。
6. フラッシュ後、コンピュータから提供された"**config.json**"ファイルを新しいMicro SDカードの"**resin-boot**"パーティションにコピーします。
7. 新しいMicro SDカードをコンピュータから取り外し、SenseCap M1に挿入します。
8. SenseCap M1の電源を入れ、インターネットに接続します（イーサネットケーブルを使用することを推奨）。20分間のアップデートを待ち、Dashboard（[**https://status.sensecapmx.cloud**](https://status.sensecapmx.cloud/)）でステータスを確認するか、Heliumアプリ内で診断を実行してください。

**注意**: ホットスポットが正常であることを確認した後にのみ、フロントパネルを組み立ててください。

* * *

**SenseCAP M1 を開いて Micro SD カードを交換する方法**

*   **ステップ 1:** ホットスポットの電源を切り、アンテナを取り外します。

![SenseCAP M1 SD カード ステップ 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **ステップ 2**: ドライバーを使用してフロントパネルの2本のネジを緩めます。

![SenseCAP M1 SD カード ステップ 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **ステップ 3**: フロントパネルを取り外し、脇に置きます。

![SenseCAP M1 SD カード ステップ 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **ステップ 4**: Micro SD カードの上にある黄色いステッカーを取り外します（ピンセットを使用することもできます）。

![SenseCAP M1 SD カード ステップ 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD カード ステップ 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Micro SD カードを読み取り、イメージを書き込む方法**

*   **ステップ 1**: 新しい Micro SD カードを Micro SD カードリーダーに挿入します。

![SenseCAP M1 SD カード イメージ ステップ 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_新しい Micro SD カードを Micro SD カードリーダーに挿入_

![SenseCAP M1 SD カード イメージ ステップ 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_完全に挿入されていることを確認_

*   **ステップ 2**: Balena Etcher を使用して新しい Micro SD カードに SenseCAP M1 イメージを書き込みます。
    *   **SenseCap M1 イメージ**をこちらからダウンロードしてください: [**sensecap-m1.img.zip**](https://drive.google.com/file/d/1fZf09U2_jQOpsSKPWc8TAZ_Jl82X9tzx/view?usp=sharing)
    *   **Balena Etcher ツール**をこちらからダウンロードしてください: [**balenaEtcher - Flash OS images to SD cards & USB drives ​**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_お使いのオペレーティングシステムに基づいて選択_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Image.ZIP ファイルを Balena Etcher にドラッグ_

*   **ステップ 3**: イメージを MicroSD カードに正常に書き込んだ後、提供された、または元々コピーした "config.json" ファイルをコンピュータから "resin-boot" というパーティションにコピーします。

**MacOS の場合**

![MacOS Config.json ファイルをコピー](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - '_config.json' ファイルをコピー_

**Windows の場合**

![Windows Config.json ファイルをコピー](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

*   **ステップ 4**: 新しい Micro SD カードをコンピュータから取り外します。
*   **ステップ 5**: 新しい Micro SD カードを SenseCAP M1 に挿入します。

![SenseCAP M1 SD カード ステップ 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **ステップ 6**: SenseCAP M1 の電源を入れ、インターネットに再接続します（イーサネットケーブルを使用するのが最適です）。
*   **ステップ 7**: 約20分間待機してアップデートを適用し、Dashboard (**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/))** を確認するか、Helium アプリで診断を実行します。

![SenseCAP M1 SD カード ステップ 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**注意**: ホットスポットが正常であることを確認した後にのみ、フロントパネルを組み立ててください。

その他の問題や質問がある場合は、こちらでチケットを開いてください: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

**Micro SD カードをフォーマットしてイメージを書き込む方法**
-------------------------------------------------------

**注意して進めてください**: 以下の手順は、技術サポートチームから指示を受けた場合にのみ使用してください。指示を受けていない場合は、これらの手順を実行する必要はありません。

ユーザーによるホットスポットの誤用により、頻繁な電源のオンオフや Micro SD カードの抜き差しが原因で、ファイルシステムの整合性などの未知の Micro SD カードエラーが発生する可能性があります。

**Micro SD カードを交換して問題をデバッグするよう指示された場合は、以下の手順に従ってください。**

* * *

**手順**

以下の手順は、新しい Micro SD カードにイメージを書き込み、SenseCAP M1 の元のカードを交換して、Micro SD カードエラーが原因で発生した問題を修正するのに役立ちます。

**注意**: 以下の手順に従って Micro SD カードを交換する前に、インターネット接続を確認して、問題がインターネットに関連していないことを確認してください。

* * *

**必要なもの**

1.  SenseCAP M1 ホットスポット内の Micro SD カード
2.  Micro SD カードリーダー
3.  ドライバー
4.  元のカードからコピーした '**config.json**' ファイル  
    1.  **注意**: 元のファイルを取得できない場合は、技術サポートエージェントに提供を依頼してください。
5.  SD Card Formatter 5.0.1
6.  **Windows** 用 => [**こちらをクリック**](https://drive.google.com/file/d/15KMqnVpeOMRcFOYIRLbwA4CJooNsdkLM/view?usp=sharing) してダウンロードおよびインストール
7.  **Mac OS** 用 => [**こちらをクリック**](https://drive.google.com/file/d/1FjxMOdGDjW3iKx3COeexY7E2bpF2cqDy/view?usp=sharing) してダウンロードおよびインストール
8.  SenseCAP M1 イメージ => [**こちらをクリック**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0) してダウンロード
9.  Balena Etcher => [**こちらをクリック**](https://www.balena.io/etcher/) してダウンロード

![SenseCAP M1 交換用 SD カードキット](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_このキットには、ドライバー、MicroSD カードリーダー、64GB MicroSD カード、および MicroSD カードの交換方法に関する説明が含まれています。_

* * *

**手順**

1.  デバイスの電源を切り、フロントパネルを開き、Micro SD カードの上にある黄色いステッカーを取り外し、Micro SD カードを取り外します。
2.  Micro SD カードを Micro SD カードリーダーでコンピュータに接続し、パーティション "resin-boot" から '**config.json'** ファイルをコピーしてコンピュータに保存します。  
    1.  **注意**: 元のファイルを取得できない場合は、技術サポートエージェントに提供を依頼してください。
3.  “**SD Card Formatter 5.0.1**” を使用して MicroSD カードをフォーマットします。
4.  **Balena Etcher** を使用して MicroSD カードに **SenseCap M1 イメージ** を書き込みます。
5.  コンピュータから '**config.json**' ファイルを Micro SD カードの "**resin-boot**" パーティションにコピーします。
6.  コンピュータから Micro SD カードを取り外し、SenseCap M1 ホットスポットに挿入します。
7.  SenseCap M1 の電源を入れ、インターネットに接続します（イーサネットケーブルを使用するのが最適です）。OTA アップデートのために約20分間待機し、[**Dashboard**](https://docs.sensecapmx.com/home/sensecap-dashboard) または Helium アプリ内で診断を実行して状態を確認します。

**注意**: ホットスポットが正常であることを確認した後にのみ、フロントパネルを組み立ててください。

* * *

**SenseCAP M1 を開いて Micro SD カードを交換する方法**

*   **ステップ 1:** ホットスポットの電源を切り、アンテナを取り外します。

![SenseCAP M1 SD カード ステップ 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **ステップ 2**: ドライバーを使用してフロントパネルの2本のネジを緩めます。

![SenseCAP M1 SD カード ステップ 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **ステップ 3**: フロントパネルを取り外し、脇に置きます。

![SenseCAP M1 SD カード ステップ 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **ステップ 4**: Micro SD カードの上にある黄色いステッカーを取り外します（ピンセットを使用することもできます）。

![SenseCAP M1 SD カード ステップ 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD カード ステップ 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Micro SD カードをフォーマットする方法 (Windows)**

*   **ステップ 1**: 新しい Micro SD カードを Micro SD カードリーダーに挿入します。  
    

![SenseCAP M1 SD カード イメージ ステップ 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_新しい Micro SD カードを Micro SD カードリーダーに挿入_

![SenseCAP M1 SD カード イメージ ステップ 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_完全に挿入されていることを確認_

*   **ステップ 2**: SD Card Formatter をインストールして実行します。

![SD Card Formatter](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-formatter-1.png)

*   **ステップ 3**: コンピュータに接続した Micro SD カードを選択し、「Overwrite format」を選択、ボリュームラベルに「resin-boot」と入力し、「Format」ボタンをクリックします。  
    

![SD Card Formatter Resin-Boot フォルダ](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-resin-1.png)

*   **ステップ 4**: ダイアログウィンドウで「Yes」を選択します。  
    

![SD カードをフォーマット](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-2.png)

*   **ステップ 5**: 約30～45分待つとフォーマットプロセスが完了します。

![SD Card Formatter スクリーン](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-3-1.png)

* * *

**Micro SD カードをフォーマットする方法 (MacOS)**

手順は似ています。以下の画像をご覧ください：

![SD Card Formatter MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-1-1.png)

![SD Card Formatter MacOS 完了](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-2-1.png)

* * *

**Micro SD カードにイメージをフラッシュする方法**

*   **SenseCap M1 イメージ**をこちらからダウンロードしてください: [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
*   **Balena Etcher ツール**をこちらからダウンロードしてください: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_お使いのオペレーティングシステムに基づいて選択_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Image.ZIP ファイルを Balena Etcher にドラッグ_

* * *

**Micro SD カードに 'config.json' ファイルを追加する方法**
------------------------------------------------------

MicroSD カードにイメージを正常にフラッシュした後、提供されたまたは元々コピーした "**config.json**" ファイルをコンピュータから "resin-boot" というパーティションにコピーします。

**注意**: 他のファイルを削除しないでください。そうしないと、SenseCAP M1 に予期しない問題が発生する可能性があります。

**注意**: 各デバイスには異なる '**config.json**' ファイルが登録されています。他人と '**config.json**' ファイルを共有したり、他人のファイルを使用したりしないでください。

**MacOS の場合**

![MacOS Config.json ファイルをコピー](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 'config.json' ファイルをコピー_

![MacOS Config.json ファイルを置き換え](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Windows の場合**

![Windows Config.json ファイルをコピー](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - 'config.json' ファイルをコピー_

![Windows Config.json ファイルを置き換え](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

* * *

**Micro SD カードをフォーマットしてイメージをフラッシュした後**
-------------------------------------------------------------

*   **ステップ 1**: 新しい Micro SD カードをコンピュータから取り外します。
*   **ステップ 2**: 新しい Micro SD カードを SenseCAP M1 に挿入します。

![SenseCAP M1 SD カード ステップ 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **ステップ 6**: SenseCAP M1 の電源を入れ、インターネットに再接続します（イーサネットケーブルが最適です）。
*   **ステップ 7**: 約20分待ってアップデートを適用し、Dashboard (**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/))** を確認するか、Helium アプリで診断を実行します。

![SenseCAP M1 SD カード ステップ 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**注意**: ホットスポットが正常であることを確認した後にのみ、フロントパネルを組み立ててください。

その他の問題や質問がある場合は、こちらでチケットを開いてください: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

Helium アプリのエラー
================

**オンボーディングキーが見つかりません**
---------------------------

こちらでサポートチケットを開き、ホットスポットの SN（シリアル番号）を送信してください: [**https://support.sensecapmx.com**](https://support.sensecapmx.com)。問題を解決いたします。

![Helium アプリ - オンボーディングキーが見つかりません](https://www.sensecapmx.com/wp-content/uploads/2022/07/onboarding.png)

* * *

**ホットスポットが見つかりません**
--------------------

Helium アプリに「ホットスポットが見つかりません」と表示される場合

**トラブルシューティング手順**

1.  まず青色の LED を確認してください。ゆっくり点滅しているはずです。
2.  点滅していない場合、SenseCAP M1 が Bluetooth 設定モードを有効にしていないことを示しています。ホットスポットと携帯電話を確認し、Bluetooth がオンになっていることを確認してください。
3.  SenseCAP M1 の背面のボタンを6～10秒間押して、SenseCAP M1 の設定モードを有効にします。青色の LED がゆっくり点滅モード（2秒ごとに1回点滅）に変わるのを確認し、その後ホットスポットを再スキャンしてください。

![Helium アプリエラー - ホットスポットが見つかりません](https://www.sensecapmx.com/wp-content/uploads/2022/07/no-hotspots-found.png)

* * *

**デバイスが切断されました**
-----------------------

Bluetooth経由でペアリング中にデバイスが切断されました

**トラブルシューティング手順**

SamsungのS9以降の新しいモデルのスマートフォンを使用している場合、互換性の問題が発生することがあります。

[**新しいイメージでSDカードをフラッシュしてください**](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)。

![Helium アプリエラー - デバイスが切断されました](https://www.sensecapmx.com/wp-content/uploads/2022/07/error-device-disconnected.png)

* * *

**Characteristic Write Failed**
-------------------------------

Helium アプリ内でホットスポットを登録できません

**トラブルシューティング手順**

1.  EthernetまたはWi-Fi経由で接続した直後にホットスポットを登録しようとすると、OTA（無線アップデート）が実行中のため、このエラーが表示されます。
2.  EthernetまたはWi-Fi経由でホットスポットをさらに10分以上接続したままにしてください。これにより、OTAアップデートが完了します。
3.  ボタンを6～10秒間長押しして設定モードに入り、再度登録を試みてください。

![Helium アプリエラー - Characteristic Write Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/unable-to-register.webp)

* * *

**Characteristic Read Failed**
------------------------------

BluetoothでのペアリングまたはWi-Fiへの接続時にエラーが発生しました

Bluetooth経由でホットスポットをペアリングしようとしたり、Wi-Fiに接続しようとした際に以下のエラーメッセージが表示される場合、Wi-FiネットワークのSSIDに認識されない無効な文字が含まれていることを意味します。

英数字以外の文字（例：a - z、0 - 9以外の文字）や記号の使用を避けてください。

**解決策**: 記号や英数字以外の文字を含まないSSIDにWi-Fiネットワーク名を変更してください。

![Helium アプリエラー - Characteristic Read Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/read-error.png)

* * *

**Constructing Add Hotspot Transaction**
----------------------------------------

ホットスポットを登録する際に、Helium アプリが「Add Hotspot Transaction」の構築エラーを表示します

**トラブルシューティング手順**

1.  EthernetまたはWi-Fiに接続した直後にホットスポットを登録しようとすると、OTA（無線アップデート）が実行中、またはブロックが完全に同期されていないため、このエラーが表示されます。
2.  ホットスポットをEthernetまたはWi-Fiに少なくとも30分間接続したままにして、ファームウェアOTAとブロックの同期プロセスが完了するのを待ってください。その後、ボタンを6～10秒間長押しして設定モードに入り、再度登録を試みてください。
3.  診断ツールまたはSenseCAP Dashboardを使用して、ファームウェアバージョンが最新であることを確認してください。  
    1.  **注意**: ホットスポットのファームウェアが最新バージョンに更新できない場合は、デバイスが使用しているネットワークを別のネットワーク（例：スマートフォンのホットスポット）に変更し、上記の2番目の手順を実行してください。
    2.  **注意**: ファームウェアOTAが完了した後もデバイス自体でブロックが完全に同期されない場合は、ローカルコンソールでブロックをリセットすることをお勧めします。

![Helium アプリエラー - Constructing Add Hotspot Transaction](https://www.sensecapmx.com/wp-content/uploads/2022/07/transaction-failed-add-hotspot.png)

* * *

**位置/アンテナのアサート**
------------------------------

アンテナの詳細を更新したり、位置をアサートしようとすると、以下のエラーが表示されます

**トラブルシューティング手順**

この問題はネットワーク接続またはアプリに関連しています。アプリを再起動するか、後でもう一度試してください。

![Helium アプリエラー - 位置/アンテナのアサート](https://www.sensecapmx.com/wp-content/uploads/2022/07/assert-location-error.png)