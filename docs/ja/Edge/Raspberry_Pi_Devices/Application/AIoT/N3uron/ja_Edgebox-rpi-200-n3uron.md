---
description: EdgeBox RPi 200 と N3uron
title: EdgeBox RPi 200 と N3uron
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-rpi-200-n3uron
last_update:
  date: 05/15/2025
  author: José Granero Nueda & Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## N3uronとは？

N3uronは、IIoT（産業用IoT）およびDataOps向けの完全な産業用エッジプラットフォームであり、工場の現場とサードパーティアプリケーション（オンプレミスまたはクラウド）間のシームレスな統合を可能にします。  
N3uronを使用すると、OT（運用技術）システムとITシステム間で双方向のデータパイプラインを簡単に作成でき、すべての運用データを単一の信頼できる情報源に統合、モデリング、処理、可視化することで、デバイスをアプリケーションから切り離すことができます。最終的には、このデータを組織全体で利用可能にします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **モジュール式**: 完全にモジュール化されており、約50のモジュールが用意されています。ユーザーはプロジェクトのニーズに応じて必要なモジュールを選択し、必要最小限のものだけを取得できます。

- **クロスプラットフォーム**: N3uronは、ほとんどのWindowsバージョンやLinuxディストリビューション、Raspberry PiのようなARMアーキテクチャ上で動作します。

- **無制限ライセンス**: N3uronは無制限のライセンスモデルを採用しており、タグ、ユーザー、デバイス、接続に制限なく、手頃な価格で利用できます。

- **ウェブベース**: 一度インストールすれば、ノードにアクセスするのに必要なのはウェブブラウザだけです。

- **迅速な展開と開発**: N3uronは1分以内にインストール可能で、特にテンプレートを活用する場合、データモデルの作成を迅速に行える開発環境を提供します。

- **非常に効率的**: 単一のノードで数十万のタグを簡単に管理でき、ハードウェア要件も低く抑えられています。

- **スケーラブルで多用途なアーキテクチャ**: N3uronは、数百または数千のノードを持つ分散アーキテクチャをシームレスに展開することを念頭に設計されています。ユーザーはN3uron Linksを使用して複数のノードを迅速に接続し、ニーズに応じてアーキテクチャを簡単にスケールアップできます。


## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPI-200シリーズは、Raspberry Piをベースとしたオールインワンの産業用エッジコンピューティングコントローラーであり、複数の産業用途を統合しています。  
高いスケーラビリティと堅牢な産業用ハードウェアとして設計され、豊富なIOリソースを備え、優れたRaspberry Pi産業用ソフトウェアエコシステムに対応しているため、スマートオートメーションや産業用IoT（IIoT）ソリューションに最適な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 前提条件

### ハードウェア
* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)

### ソフトウェア
* [N3uron Industrial IIoT & DataOps Platform](https://n3uron.com/)

## インストール

N3uronは、ワンステップの自動インストールスクリプトを使用して簡単にインストールできます。EdgeBoxのターミナルで以下のコマンドを実行してください：

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif1.gif" alt="pir" width="600" height="auto" /></div>

数秒でN3uronがインストールされ、稼働を開始します。

手動でインストールしたい場合は、[Knowledge Baseセクション](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup)をご覧ください。

## 使用方法

N3uronはマイクロサービス指向のアーキテクチャで設計されており、各モジュールが独立したプロセスとして動作します。Bootstrapは他のプロセスを管理するコアサービスです。デフォルトでは、[WebUIモジュール](https://docs.n3uron.com/docs/platform-web-user-interface)が自動的に有効化され、インストールが完了するとすぐにアクセス可能になります。追加の機能は、新しいモジュールインスタンスを作成することで有効化されます。

各モジュールは、運用モードで動作するために有効なライセンスが必要です。有効なライセンスが見つからない場合、モジュールは2時間のデモモードで動作します。デモ期間を再開するには、モジュールを再起動する必要があります。

以下は、N3uronが[OPC UA Client](https://docs.n3uron.com/docs/opc-ua-client)を通じてデータ収集をどのように簡単に行い、そのデータを[MQTT Clientモジュール](https://docs.n3uron.com/docs/mqtt)を使用してMQTTブローカーにシームレスに公開し、MQTTを介して継続的にデータをプッシュする方法のステップバイステップの例です。

### OPC UA Clientの設定

- **ステップ1** : ローカルネットワーク上の別のマシンでお気に入りのブラウザを開き、N3uron WebUIにアクセスしてください。Edgebox-RPI-200のIPアドレスとWebUI用に設定されたポート（デフォルトではHTTPの場合8003、HTTPSの場合8443）を使用します。

デフォルトのN3uron WebUIユーザー：

<div class="table-center">

|            |   フルアクセス |  読み取り専用アクセス |  
|---         |     ---       |        ---        |
|  ユーザー: |    admin      |       user        |
|  パスワード: |    n3uron     |       n3uron      |

</div>

- **ステップ2** : N3uron WebUIを開き、Config→Modulesに移動し、メニューをクリックして**新しいモジュール**を作成します。これを**OpcUaClient**と名付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **ステップ3**: モジュールタイプとして**OpcUaClient**を選択し、下部の**保存**ボタンをクリックしてモジュールをインスタンス化します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **ステップ4**: 新しく作成されたモジュールがModulesに表示されます。その設定に移動し、**新しいクライアント**を作成します。これを**DataSim**と名付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **ステップ5**: 以下のようにOPC UA Clientを設定して、DataSimエンドポイントに接続します：

```sh
エンドポイントURL: opc.tcp://datasim.n3uron.com:4840
セキュリティモード: なし
セキュリティポリシー: なし

認証:
	有効: はい
	ユーザー: sunn3rgy
	パスワード: n3uron

``` 

**保存**をクリックして変更を適用し、モジュールをリロードします。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **ステップ6**: モジュール内のOPCブラウザセクションに移動し、先ほど作成したDataSimクライアントを選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### タグの作成

- **ステップ1**: ブラウザからデータモデルセクションに目的のオブジェクトをドラッグ＆ドロップします。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **ステップ2**: Config→Tagsで新しく作成されたタグを見つけ、その値を[リアルタイムセクション](https://docs.n3uron.com/docs/platform-visualizing-real-time-values)で確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### テンプレートの作成

[テンプレート](https://docs.n3uron.com/docs/platform-templates)は、N3uronでオブジェクト指向のデータ設計原則を活用する能力を提供します。これにより、新しいプロジェクトの展開に費やす時間を大幅に削減できます。

[テンプレート](https://docs.n3uron.com/docs/platform-templates)を作成して使用することで、ユーザーは新しいインスタンスを生成し、複雑なデータ構造や通信設定を迅速に構築できます。テンプレート定義に変更を加えると、すべてのインスタンスに継承されるため、ルーティング変更を行う際の時間を大幅に節約できます。

目的のオブジェクトをテンプレートセクションにドラッグ＆ドロップし、[カスタムプロパティ](https://docs.n3uron.com/docs/platform-templates-custom-properties)、[継承](https://docs.n3uron.com/docs/platform-templates-inheritance)、[その他](https://docs.n3uron.com/docs/platform-templates-nesting)を使用してテンプレートを構築し始めてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### MQTT Clientの設定

**ステップ1**: Config→Modulesに移動し、メニューをクリックして**新しいモジュール**を作成し、これをMqttClientと名付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 2**: モジュールタイプとして MqttClient を選択し、[保存] をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 3**: 新しいモジュールに移動し、**新しい接続**を作成して HiveMQ と名付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 4**: 公開 HiveMQ ブローカーを使用するように接続を設定します：

```sh
ブローカー URL: broker.hivemq.com
ポート: 1883
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>


- **ステップ 5**: 新しいパブリッシャーを作成し、送信先トピックを設定します。例として「/n3/edgebox」を使用します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 6**: このノード内のすべてのタグに一致する **タグフィルター** を作成します。タグフィルターは、モジュールにどのタグをブローカーに公開するかを指示する方法です。[保存] をクリックしてすべての変更を適用し、モジュールを再読み込みします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 7**: [診断] に移動し、MqttClient モジュールのリアルタイムログを有効にします。モジュールが新しいデータをブローカーに公開するたびにログが出力されるのを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>

### WebVision モジュールのインスタンス化

**ステップ 1:** N3uron を開き、[設定] メニューに移動します。

**ステップ 2:** [モジュール] をクリックし、新しいモジュールを作成します。このインスタンスには任意の名前を付けることができます（ただし、‘.’、‘/’ などの特殊文字を含む名前は不可）。ただし、識別を容易にするために、インスタンス名をインスタンス化するモジュール名に類似させることをお勧めします。この例では、WebVision モジュールが選択され、WebVision と名付けられています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_5.gif" /></center>

**ステップ 3:** WebVision のメイン設定に移動し、適切なサーバー設定を選択します。ほとんどのユースケースではデフォルト設定で十分です。詳細については、以下のリンクを参照してください：[WebVision 初期設定](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_6.png" /></center>

**ステップ 4:** WebVision モジュールがインスタンス化されたら、最初のステップとして WebUI の [Roles] セクションで以前に作成したロールに権限を割り当てます。デフォルトでは、管理アクセス用の Administrator と通常アクセス用の User の 2 つのロールが存在します。これらのロールにユーザーを追加するか、必要に応じて新しいロールを作成できます。ロールが確立されたら、Designer および Viewer ロールに応じて権限を設定します。
さらに、各ロールに対してタグフィルターパスを設定します。タグフィルターパスアクセスは、対応するロールが視覚化にアクセスできるタグモデルのタグを決定します。この場合、タグモデルの完全なパスを両方のロールに割り当てます。

- 管理者:
    - Designer: 編集
    - Viewer: 表示
    - TagFilterPath:
        - モード: 含む
        - パス: /
        - 正規表現パターン: .*
- ユーザー:
    - Designer: なし
    - Viewer: 表示
    - TagFilterPath:
        - モード: 含む
        - パス: /
        - 正規表現パターン: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_7.gif" /></center>

- 便利なリンク 

  - [ユーザーとロールの設定](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [アクセス設定](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**ステップ 5:** 初期 WebVision 画面をテストするために、タグを作成します。WebUI に移動し、**設定** を選択してから **タグ** をクリックします。[モデル] セクションでメニューをクリックし、**新しいタグ** を選択します。例えば **TestTag** と名付け、タイプを **数値** に設定し、**読み書き権限** を付与し、初期値を 0 に設定（オプション）して設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_8.gif" /></center>

**ステップ 6:** 次に、[設定] セクションの WebVision に移動し、**デザイナーを開く** をクリックします。
**管理者の資格情報** を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_9.png" /></center>

**ステップ 7:** [テンプレート] セクションで、Main という名前の新しいコンテナを作成します。その後、このコンテナをスタートアップとして指定します。これにより、Main が初期 WebVision 画面として設定され、横にアスタリスク記号 (*) が表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_10.gif" /></center>

**ステップ 8:** Main コンテナの背景色を変更します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_11.gif" /></center>

**ステップ 9:** Main コンテナ内で、[コンポーネント] に移動し、新しいコンポーネントを追加します。この例では、ゲージコンポーネントを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_12.gif" /></center>

**ステップ 10:** ゲージコンポーネント内で、ゲージコンポーネントに表示される値を提供するタグを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_13.gif" /></center>

**ステップ 11:** 次に、Configセクション内のWebVisionに移動し、「Open UI」をクリックします。  
管理者の資格情報を使用してログインしてください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_14.png" /></center>

**ステップ 12:** 簡単なデザインをテストするために、WebUIに移動して「Data > Realtime」を選択します。TestTagの値を変更してください。その後、WebVision UIに戻り、Gaugeコンポーネントが表示する値が更新されているか確認してください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_15.gif" /></center>

WebVisionには、Edge Boxの体験を向上させるための多くの機能があります。詳細については、[WebVisionに関するナレッジベース](https://docs.n3uron.com/docs/web-vision-configuration)をご参照ください。

ここで見たのはほんの始まりに過ぎません。ほぼ50のモジュールからなる印象的な機能群が提供する無限の可能性を受け入れましょう。大胆に夢を描き、革新し、N3uronの最先端機能を活用してプロジェクトを新たな高みに引き上げてください。この強力なプラットフォームについてさらに詳しく知りたい方は、[https://n3uron.com/](https://n3uron.com/)を訪問し、エキサイティングな発見の旅を始めてください！