---
description: MT3620 Ethernet Shield v1.0
title: MT3620 Ethernet Shield v1.0
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/MT3620_Ethernet_Shield_v1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像の説明を入力してください](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/product_picture.png)

[Azure Sphere MT3620 Development kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)は、MT3620からハードウェアリソースを拡張するための4つの2.54mmヘッダーを備えています。MT3620 Ethernet Shieldは、MT3620開発キット用に設計された追加のブレークアウトボードです。Azure Sphere Ethernet Shieldは、プライベートLAN接続のみをサポートします。詳細については[こちら](https://docs.microsoft.com/en-us/azure-sphere/network/connect-private-network)をご覧ください。

Microsoft Azure Sphereは、高度にセキュアで接続されたMCU駆動のデバイスを作成するためのソリューションです。Azure Sphereは、Microsoftのクラウド、ソフトウェア、シリコンに関する専門知識を結集し、シリコンからクラウドまでセキュリティを拡張する独自のアプローチを提供します。Azure Sphere認定MCU、Azure Sphere OS、およびAzure Sphere Security Serviceが一体となり、ビジネスを再構築し未来を創造するための自信と力を提供します。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
インターネットアクセスおよびAzure Sphereサービスには外部Wi-Fiが必要です。Azure SphereはプライベートLANとWi-Fiインターフェース間のルーティングやブリッジングをサポートしていません。
:::

## 特徴

- プロセッサ: Microchip, ENC28J60
- IEEE 802.3TM互換イーサネットコントローラー
- 10/100/1000Base-Tネットワークと完全互換
- 統合MACおよび10Base-T PHY
- 自動極性検出および修正を備えた1つの10Base-Tポートをサポート
- 全二重および半二重モードをサポート
- 最大20 MHzのクロックスピードを持つSPIインターフェース
- 動作温度(℃): 0 ~ +70℃

:::note
-40 ~ +85℃で動作させる必要がある場合は、iot@seeed.ccまでお問い合わせください。
:::

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> J1**: RJ45インターフェース。ENC28J60に接続されています。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J1.png)

- **<font face="" size="3" font color="ff0000">②</font> LED1**: 3.3V電源用赤色LED。ボードに電源を供給するとLEDが点灯します。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/led.png)

- **<font face="" size="3" font color="ff0000">③</font> U1**: ENC28J60。SPIインターフェースを備えたスタンドアロンイーサネットコントローラーで、SPIをイーサネットインターフェースに変換します。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/U1.png)

- **<font face="" size="3" font color="ff0000">④</font> H4**: Azure Sphere(MT3620開発ボード)拡張ヘッダー、H4。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H4.png)

- **<font face="" size="3" font color="ff0000">⑤</font> H3**: Azure Sphere(MT3620開発ボード)拡張ヘッダー、H3。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H3.png)

- **<font face="" size="3" font color="ff0000">⑥</font> H2**: Azure Sphere(MT3620開発ボード)拡張ヘッダー、H2。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H2.png)

- **<font face="" size="3" font color="ff0000">⑦</font> H1**: Azure Sphere(MT3620開発ボード)拡張ヘッダー、H1。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H1.png)

- **<font face="" size="3" font color="ff0000">⑧</font> J2**: UART3ピンヘッダー。MT3620 GPIO66~GPIO69に接続されています。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J2.png)

**ピン配置**

- H1/H2/H3/H4はAzure Sphereボードのピン配置と同じです。

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**寸法**

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing1.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing2.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing3.png)

## アプリケーションアイデア

- 家庭/建物/施設
- 自動化
- セキュリティ
- 機器管理
- 公共サービス
- 公共安全

:::tip
Azure Sphere が実際の環境でどのように機能するかを理解するには、[Contoso, Ltd のシナリオ](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere)を参照してください。
:::

## はじめに

### 前提条件

**Azure Sphere のインストール**

まだ使用されていない Azure Sphere 開発キットをお持ちの場合は、[これらの手順](https://docs.microsoft.com/en-us/azure-sphere/install/overview)を最初に完了して、セットアップを行ってください。

**MT3620 Ethernet Shield ライブラリ**

このサンプル C アプリケーションは、[Azure Sphere デバイスをプライベート Ethernet ネットワークに接続する](https://docs.microsoft.com/azure-sphere/network/connect-private-network)方法を示します。<!-- リンク404 -->このアプリケーションは、Azure Sphere デバイスを DHCP サーバーおよび SNTP サーバーとして構成し、基本的な TCP サーバーも実装します。以下の手順では、このプライベートネットワークにコンピュータを接続して機能を確認する方法を示します。

DHCP サーバーと SNTP サーバーは、アプリケーションによって提供される設定に従って Azure Sphere OS によって管理されます。これらのサーバーは、アプリケーションが起動を要求した後にのみ開始されますが、アプリケーションが停止しても引き続き動作します。

TCP サーバーはアプリケーションプロセス内で動作し、アプリケーションが停止すると終了します。このサンプル TCP サーバーの実装は基本的なものであり、あくまで例示用であり、接続の認証や暗号化は行いません。実際の運用ロジックに置き換える必要があります。

このサンプルでは、以下の Azure Sphere ライブラリを使用し、[ベータ版 API](https://docs.microsoft.com/azure-sphere/app-development/use-beta)を含みます。

| ライブラリ   | 目的  |
|---------|---------|
| log     | デバッグ中に Visual Studio のデバイス出力ウィンドウにメッセージを表示します  |
| networking    | ネットワークインターフェイスの設定を取得および設定します |

:::note
現在、MT3620 Ethernet Shield は Microsoft ソフトウェアが未対応のため、インターネット接続をサポートしていません。PC への接続のみをサポートしています。
:::

**ハードウェア接続**

| MT3620 開発キット | MT3620 Ethernet Shield |
|--------------|-------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/ethernet_s.png)|
|[今すぐ購入](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[今すぐ購入](https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html)|

- ステップ 1. MT3620 Ethernet Shield を Azure Sphere MT3620 開発ボードに接続します。
- ステップ 2. USB ケーブルを Azure Sphere MT3620 開発ボードと PC に接続します。
- ステップ 3. MT3620 Ethernet ボードと PC の間にネットワークケーブルを接続します。

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/stack_with_azuresphere.png)

**サンプルをビルドして実行する**

- [Azure Sphere ドキュメント](https://docs.microsoft.com/azure-sphere/install/install)<!-- リンク404 -->に記載されているように、Azure Sphere デバイスと開発環境をセットアップします。
- 以前にセットアップを行った場合でも、Azure Sphere SDK バージョン 19.02 以上を使用していることを確認してください。Azure Sphere Developer Command Prompt で **azsphere show-version** を実行して確認します。必要に応じて、[最新の SDK](https://aka.ms/AzureSphereSDKDownload)をダウンロードしてインストールしてください。
- Azure Sphere デバイスを USB 経由で PC に接続します。
- [アプリケーション開発](https://docs.microsoft.com/azure-sphere/quickstarts/qs-blink-application#prepare-your-device-for-development-and-debugging)<!-- リンク404 -->を有効にします（まだ行っていない場合）：

   `azsphere device prep-debug`

- Microchip ENC286J60 Ethernet チップ用の[ボード構成イメージ](https://docs.microsoft.com/azure-sphere/network/connect-private-network)<!-- リンク404 -->をパッケージ化してデプロイします：

   `azsphere image package-board-config --preset lan-enc28j60-isu0-int5 --output enc28j60-isu0-int5.imagepackage`

   `azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage`

- [Azure Sphere サンプル](https://github.com/Azure/azure-sphere-samples)リポジトリをクローンし、PrivateEthernet サンプルを見つけます。
- Visual Studio で PrivateEthernet.sln を開き、F5 を押してソリューションをコンパイルおよびビルドし、デバイスにロードしてデバッグします。
- 以下の手順を実行する間、アプリを実行したままにします。

**トラブルシューティング**

Visual Studio のエラーリストにヘッダーが見つからない、または識別子が未定義であるというエラーが多数表示される場合、またはアプリをビルドする際に Visual Studio のビルド出力に次のエラーが表示される場合：

   `error MSB6004: The specified task executable location "C:\Program Files (x86)\Microsoft Azure Sphere SDK\\SysRoot\tools\gcc\arm-poky-linux-musleabi-gcc.exe" is invalid.`

これは、古いバージョンの Azure Sphere SDK がインストールされている可能性があります。バージョン 19.02 以上を使用していることを確認してください。

**コンピュータでの Ethernet 接続の構成**

- 設定を開き、**ネットワークとインターネット** > **アダプターオプションの変更**をクリックします。
- Ethernet アダプターを右クリックして、**プロパティ**を選択します。
- **Ethernet プロパティ**ウィンドウで、**インターネット プロトコル バージョン 4 (TCP/IPv4)** 以外のすべての項目を無効にします。
- **インターネット プロトコル バージョン 4 (TCP/IPv4)** を選択し、**プロパティ**ボタンをクリックして **インターネット プロトコル バージョン 4 (TCP/IPv4) プロパティ**ウィンドウを起動します。
- 「IP アドレスを自動的に取得する」が選択されていることを確認します。（このサンプルの以前のバージョンでは、この時点で静的 IP アドレスの設定が必要でしたが、現在はアプリケーションが DHCP サーバーを提供するため必要ありません。）
- **IPv4 プロパティ ウィンドウ**を閉じるために **OK** をクリックし、次に **Ethernet プロパティ**ウィンドウを閉じます。
- ENC286J60-H からコンピュータの Ethernet 接続に Ethernet ケーブルを接続します。

:::note
コンピュータが複数のネットワークインターフェイスに同時に接続することを防ぐポリシーで管理されている場合、このサンプルを使用する間、他のネットワークインターフェイスを無効にする必要がある場合があります。
:::

:::note
このサンプルでは、IP アドレス範囲 192.168.100.xxx を使用しています。同じ範囲を使用している別のネットワークアダプターがある場合は、サンプルを変更するか、他のネットワークアダプターを一時的に無効にする必要があります。
:::

**デバイスの DHCP サーバーをテストする**

コンピューターでコマンドプロンプトを開き、**ipconfig** と入力します。DHCP サーバーがイーサネット接続用に 192.168.100.11 の IP アドレスを PC に割り当てたことが確認できます：

```sh
Ethernet adapter <name>:

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::8c67:be24:4d9a:d4bb%9
   IPv4 Address. . . . . . . . . . . : 192.168.100.11
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . :
```

また、PC 上で DHCP クライアントテストツールを見つけてダウンロードし、使用することで、DHCP サーバーの応答をより詳細に調査することもできます。例えば、返される NTP サーバーアドレスを確認することができます。

**デバイスの SNTP サーバーをテストする**

- デバイスが [Wi-Fi に接続されている](https://docs.microsoft.com/azure-sphere/install/configure-wifi) ことを確認してください。これにより、デバイスはパブリック NTP サーバーから時刻を取得できます。デバイス自身の SNTP サーバーは、現在時刻を認識するまで応答しません。
- コンピューターでコマンドプロンプトを開き、**w32tm /stripchart /computer:192.168.100.10 /dataonly /samples:1** と入力します。これにより、[Windows Time ツール](https://docs.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings) がデバイスの SNTP サーバーにクエリを送信し、コンピューターの時刻とデバイスの時刻の計算された差を表示します：

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:18:09.
   14:18:09, +00.0349344s
   ```

- SNTP サーバーが動作していない、または応答しない場合、次のような出力が表示されることがあります。アプリが実行中であり、Wi-Fi が構成されていることを確認してください。

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:16:50.
   14:16:50, error: 0x800705B4
   ```

**アプリケーションの TCP サーバーをテストする**

Azure Sphere デバイスでサンプルアプリが引き続き実行されていることを確認してください。その後、コンピューターでターミナルアプリケーションを使用して、Azure Sphere アプリケーションの TCP サーバー（192.168.100.10 のポート 11000）に生の TCP 接続を開きます。この接続は、PuTTY のようなサードパーティ製ターミナルアプリケーション（"raw" 接続タイプを使用）や、Windows の組み込み Telnet クライアントを使用して開くことができます。

Windows の組み込み Telnet クライアントを使用するには：

- コントロールパネルを開き、**プログラムと機能** > **Windows の機能の有効化または無効化** をクリックして **Windows の機能** ウィンドウを起動します。
- **Telnet クライアント** が選択されていることを確認し、**OK** をクリックします。
- コマンドプロンプトを開き、**telnet 192.168.100.10 11000** と入力します。

入力した文字は Visual Studio のデバッグコンソールに表示されます。これは、例の TCP サーバーが MT3620 上で受信したことを示しています。さらに、改行を入力すると、MT3620 はターミナルに次の文字列を送信します：

   ```sh
   Received "<last-received-line>"
   ```

このサンプルサーバーには単純な 16 文字の入力バッファがあります。これを超えるデータを送信すると、Visual Studio の出力ウィンドウに「Input data overflow. Discarding 16 characters.」と表示される場合があります。

**トラブルシューティング**

- ENC28J60 が接続されていない（または正しく接続されていない）状態でサンプルを実行すると、サンプルアプリは直ちに終了します。デバッグ出力には、終了直前に「ERROR: Networking_SetStaticIp: 5 (I/O error)」のようなエラーが表示されます。その後 ENC28J60 を接続または修正した場合は、MT3620 をリセットする必要があります。
- デバイスにボード構成がロードされていない状態でサンプルを実行すると、サンプルアプリは直ちに終了します。デバッグ出力には、終了直前に「ERROR: Networking_SetStaticIp: 2 (No such file or directory)」のようなエラーが表示されます。

**イーサネットボード構成の削除**

イーサネットが不要になった場合（例えば、別のプロジェクトでボードを使用したい場合）、イーサネットボード構成イメージを手動で削除する必要があります：

- タイプが「Board config」のインストール済みイメージを見つけ、そのコンポーネント ID を確認します：

   `azsphere device image list-installed`

- このイメージを削除します：

   `azsphere device sideload delete --componentid <component ID>`

- MT3620 開発ボードのリセットボタンを押します。

**注意:** このサンプルでは、MT3620 の ISU0（I2C/SPI/UART ポート 0）を使用しています。他のサンプルもこのポートを使用しています。他のサンプルは別の ISU ポートを使用するように適応できますが、このプライベートイーサネットサンプルを別の ISU ポートで使用するように適応することは現在できません。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/MT3620%20Ethernet%20Shield_v1.0_SCH_181220.pdf)
- **[Eagle]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip)
- **[機械図面]** [MT3620 Ethernet Shield 機械図面](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/103990403%2C%20MT3620%20Ethernet%20Shield%20v1.0.pdf)
<!-- - **[ライブラリ]** [MT3620 Ethernet Shield ライブラリ](https://github.com/Azure/azure-sphere-samples/tree/master/Samples/PrivateEthernet)リンクが欠落 -->
- **[データシート]** [ENC28J60 データシート](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/ENC28J60.pdf)
- **[FAQ Web]** [Azure Sphere フォーラム](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github イシュー](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>