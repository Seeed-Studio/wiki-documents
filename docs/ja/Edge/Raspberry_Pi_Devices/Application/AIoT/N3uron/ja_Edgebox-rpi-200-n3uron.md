---
description: EdgeBox RPi 200 with N3uron
title: EdgeBox RPi 200 with N3uron
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-rpi-200-n3uron
last_update:
  date: 07/29/2023
  author: José Granero Nueda & Kasun Thushara
---

## N3uronとは？

N3uronは、IIoT & DataOps向けの完全な産業用エッジプラットフォームで、産業プラントフロアとサードパーティアプリケーション間のシームレスな統合を可能にします（オンプレミスまたはクラウド）。
N3uronを使用することで、OTシステムとITシステム間の双方向データパイプラインを簡単に作成でき、すべての運用データを単一の信頼できるソースに統合、モデル化、処理、可視化することで、デバイスをアプリケーションから分離し、最終的にこのデータを組織全体で利用可能にします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **モジュラー**: 完全にモジュラー設計で、約50のモジュールを提供しており、ユーザーはプロジェクトのニーズに応じて必要なものだけを積み重ね、アプリケーションに厳密に必要なもののみを取得できます。

- **クロスプラットフォーム**: N3uronは、ほとんどのWindowsおよびLinuxディストリビューションのバージョン、さらにRaspberry PiなどのARMアーキテクチャでも動作します。

- **無制限ライセンス**: N3uronは無制限ライセンスモデルを誇り、タグ、ユーザー、デバイス、接続の制限なく、手頃な価格で無制限の使用を提供します。

- **Webベース**: インストール後、ノードにアクセスするために必要なのはWebブラウザだけです。

- **迅速な展開と開発**: N3uronは1分以内にインストールでき、その開発環境は、特にテンプレートを利用する際に迅速なデータモデル作成を促進します。

- **極めて効率的**: 単一ノードで数十万のタグを簡単に管理でき、低いハードウェア要件を維持します。

- **スケーラブルで汎用性のあるアーキテクチャ**: N3uronは当初から、数百または数千のノードを持つ分散アーキテクチャをシームレスに展開するように設計されました。ユーザーはN3uron Linksを使用して複数のノードを迅速に接続し、ニーズに合わせてアーキテクチャを簡単にスケールできます。

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200シリーズは、複数の産業用途を組み合わせたRaspberry Piベースのオールインワン産業用エッジコンピューティングコントローラーです。高いスケーラビリティと堅牢な産業用ハードウェアとして設計され、豊富なIOリソースを搭載し、優れたRaspberry Pi産業用ソフトウェアエコシステムによってサポートされており、スマート自動化および産業用モノのインターネット（IIoT）ソリューションに理想的な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

### ハードウェア

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)

### ソフトウェア

* [N3uron Industrial IIoT & DataOps Platform](https://n3uron.com/)

## インストール

N3uronは、ワンステップ自動インストールスクリプトで簡単にインストールできます。EdgeBoxターミナルで以下のコマンドを実行するだけです：

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif1.gif" alt="pir" width="600" height="auto" /></div>

数秒でN3uronがインストールされ、起動して実行されます。

手動インストールをご希望の場合は、詳細について[ナレッジベースセクション](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup)をご覧ください。

## 使用方法

N3uronはマイクロサービス指向アーキテクチャで設計されており、各モジュールは独立したプロセスとして実行され、Bootstrapは他のプロセスを管理するコアサービスです。デフォルトでは[WebUIモジュール](https://docs.n3uron.com/docs/platform-web-user-interface)が自動的に有効化され、インストール完了と同時にアクセス可能になります。追加機能は新しいモジュールインスタンスを作成することで有効化されます。

各モジュールは本番モードで実行するために有効なライセンスが必要です。モジュールが有効なライセンスを見つけられない場合、2時間のデモモードで実行されます。デモ期間を再開するには、モジュールを再起動する必要があります。

N3uronが[OPC UAクライアント](https://docs.n3uron.com/docs/opc-ua-client)を通じてデータ収集を促進し、このデータを[MQTTクライアントモジュール](https://docs.n3uron.com/docs/mqtt)を使用してMQTTブローカーにシームレスに公開し、MQTTを介した継続的なデータプッシュを可能にする方法の段階的な例を見てみましょう。

### OPC UAクライアントの設定

- **ステップ1**：ローカルネットワーク上の別のマシンでお気に入りのブラウザを開いてN3uron WebUIにアクセスしてください。Edgebox-RPI-200のIPアドレスとWebUI用に設定されたポート（デフォルトではHTTPの場合8003、HTTPSの場合8443）を使用してください。

デフォルトのN3uron WebUIユーザー。

<div class="table-center">

|            |   フルアクセス |  読み取り専用アクセス |  
|---         |     ---       |        ---        |
|  ユーザー:     |    admin      |       user        |
|  パスワード: |    n3uron     |       n3uron      |

</div>

- **ステップ 2** : N3uron WebUIを開き、Config→Modulesに移動し、メニューをクリックして**New Module**を作成します。これを**OpcUaClient**と名前を付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 3**: モジュールタイプとして**OpcUaClient**を選択し、下の**Save**ボタンをクリックしてモジュールをインスタンス化します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 4**: 新しく作成されたモジュールがModulesの下に表示されます。その設定に移動し、**New Client**を作成します。これを**DataSim**と名前を付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 5**: OPC UA ClientをDataSimエンドポイントに接続するように以下のように設定します：

```sh
Endpoint URL: opc.tcp://datasim.n3uron.com:4840
Security Mode: None
Security Policy: None

Authentication:
 Enabled: Yes
 User: sunn3rgy
 Password: n3uron

```

**Save**をクリックして変更を適用し、モジュールを再読み込みします。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 5**: モジュール内のOPC Browserセクションに移動し、以前に作成したDataSimクライアントを選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### タグの作成

- **ステップ 1**: ブラウザから目的のオブジェクトをデータモデルセクションにドラッグアンドドロップします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **ステップ 2**: これで、Config→Tagsで新しく作成されたタグを見つけることができ、[Real Timeセクション](https://docs.n3uron.com/docs/platform-visualizing-real-time-values)でその値を表示できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### テンプレートの作成

[テンプレート](https://docs.n3uron.com/docs/platform-templates)は、N3uronでオブジェクト指向データ設計原則を活用する機能を提供します。ユーザーが新しいプロジェクトの展開に投資する時間を大幅に削減できます。

[テンプレート](https://docs.n3uron.com/docs/platform-templates)を作成して使用することで、ユーザーは新しいインスタンスを生成して複雑なデータ構造と通信設定を迅速に構築できます。テンプレート定義への変更はすべてのインスタンスに継承されるため、ルーティング変更を行う際の時間を大幅に節約できます。

目的のオブジェクトをテンプレートセクションにドラッグアンドドロップし、[カスタムプロパティ](https://docs.n3uron.com/docs/platform-templates-custom-properties)、[継承](https://docs.n3uron.com/docs/platform-templates-inheritance)、[その他](https://docs.n3uron.com/docs/platform-templates-nesting)を使用してテンプレートの構築を開始します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### MQTTクライアントの設定

**ステップ 1**: Config→Modulesに移動し、メニューをクリックしてMqttClientという名前の**New Module**を作成します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 2**: モジュールタイプとしてMqttClientを選択し、Saveをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 3**: 新しいモジュールに移動し、HiveMQという名前の**New Connection**を作成します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 4**: パブリックHiveMQブローカーを使用するように接続を設定します：

```sh
Broker URL: broker.hivemq.com
Port: 1883
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 5**: 新しいパブリッシャーを作成し、宛先トピックを設定します。例："/n3/edgebox"。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 6**: このノード内のすべてのタグにマッチする**タグフィルター**を作成します。タグフィルターは、どのタグをブローカーに公開すべきかをモジュールに伝える方法です。**保存**をクリックしてすべての変更を適用し、モジュールを再読み込みします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 7**: 診断に移動し、MqttClientモジュールのリアルタイムログを有効にします。モジュールがブローカーに新しいデータを公開するたびに出力されるログを確認してください。

 <div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>

### WebVisionモジュールのインスタンス化

**ステップ 1:** N3uronを開き、Configメニューに移動します。

**ステップ 2:** モジュールをクリックし、新しいモジュールを作成します。このインスタンスには任意の名前を付けることができます（'.'、'/'などの特殊文字を含む名前は除く）が、識別しやすくするため、インスタンス化するモジュールの名前と似た名前を付けることをお勧めします。この例では、WebVisionモジュールが選択され、WebVisionという名前も付けられています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_5.gif" /></center>

**ステップ 3:** WebVisionのメイン設定に移動し、適切なサーバー設定を選択します。デフォルト設定はほとんどの使用例で十分です。詳細については、次のリンクを参照してください：[WebVision初期設定](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_6.png" /></center>

**ステップ 4:** WebVisionモジュールがインスタンス化されたら、最初のステップは、WebUIのロールセクションで以前に作成されたロールに権限を割り当てることです。デフォルトでは、管理アクセス用のAdministratorと通常アクセス用のUserの2つのロールが存在します。これらのロールにユーザーを追加したり、必要に応じて新しいロールを作成したりできます。ロールが確立されたら、DesignerとViewerロールの権限を適切に設定します。
さらに、各ロールのタグフィルターパスを確立します。タグフィルターパスアクセスは、タグモデルのどのタグが対応するロールによる視覚化でアクセス可能になるかを決定します。この場合、両方のロールにタグモデルの完全なパスを割り当てます。

- Administrator:
  - Designer: Edit
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*
- User:
  - Designer: None
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_7.gif" /></center>

- 有用なリンク

  - [ユーザーとロールの設定](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [アクセス設定](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**ステップ 5:** 初期WebVision画面をテストするために、タグを作成しましょう。WebUIに移動し、**Config**を選択し、**Tag**をクリックします。**Model**セクションで、メニューをクリックし、**New Tag**を選択します。例えば**TestTag**という名前を付け、タイプを**Number**として選択し、**Read-Write permission**を付与し、0に初期化し（オプション）、設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_8.gif" /></center>

**ステップ 6:** 次に、ConfigセクションのWebVisionに移動し、**Open Designer**をクリックします。
**Administrator認証情報**を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_9.png" /></center>

**ステップ 7:** Templatesセクションで、Mainという名前の新しいContainerを作成します。次に、このコンテナをスタートアップとして指定します。これによりMainが初期WebVision画面として設定されます。横にアスタリスク記号（*）が表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_10.gif" /></center>

**ステップ 8:** Mainコンテナの背景色を変更します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_11.gif" /></center>

**ステップ 9:** Mainコンテナ内で、Componentsに移動し、新しいコンポーネントを追加します。この例では、Gaugeコンポーネントを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_12.gif" /></center>

**ステップ 10:** Gaugeコンポーネント内で、ゲージコンポーネントに表示される値を提供するタグを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_13.gif" /></center>

**ステップ 11:** 次に、ConfigセクションのWebVisionに移動し、Open UIをクリックします。
Administrator認証情報を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_14.png" /></center>

**ステップ 12:** シンプルなデザインをテストするために、WebUIに移動し、Data > Realtimeを選択します。TestTagの値を変更します。その後、WebVision UIに戻り、Gaugeコンポーネントに表示される値が更新されているかを確認します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_15.gif" /></center>

WebVisionについてはEdge Boxの体験を向上させるために探求すべきことがたくさんあります。詳細については、[WebVisionに関するナレッジベース](https://docs.n3uron.com/docs/web-vision-configuration)をご参照ください。

ご覧いただいたのはほんの始まりに過ぎません。約50のモジュールからなる印象的な配列が提供する無限の可能性を受け入れてください。大きな夢を抱き、革新し、N3uronの最先端機能でプロジェクトを新たな高みへと押し上げることを恐れないでください。この強力なプラットフォームについてより深く知るには、[https://n3uron.com/](https://n3uron.com/)を訪れ、エキサイティングな発見の旅に出発しましょう！
