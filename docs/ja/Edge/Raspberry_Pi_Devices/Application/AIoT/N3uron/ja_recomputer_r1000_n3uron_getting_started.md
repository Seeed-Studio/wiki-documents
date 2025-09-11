---
description: N3uronは、IIoTおよびDataOps向けの完全な産業用エッジプラットフォームであり、産業プラントフロアとサードパーティアプリケーション（オンプレミスおよびクラウドの両方）間のシームレスな統合を可能にします。Computer R1000と組み合わせることで、エッジ制御機能を強化し、組織全体でのデータのシームレスな利用を実現する堅牢なクラウド統合を提供します。

title: reComputer R1000とN3uron
keywords:
  - エッジ
  - reComputer R1000
  - N3uron
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_n3uron
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## N3uronとは？

N3uronは、IIoTおよびDataOps向けの完全な産業用エッジプラットフォームであり、産業プラントフロアとサードパーティアプリケーション（オンプレミスおよびクラウドの両方）間のシームレスな統合を可能にします。
N3uronを使用すると、OTシステムとITシステム間で双方向のデータパイプラインを簡単に作成でき、すべての運用データを単一の信頼できる情報源に統合、モデリング、処理、可視化することで、デバイスをアプリケーションから切り離し、最終的には組織全体でこれらのデータを利用可能にします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **モジュール式**: 完全にモジュール化されており、約50のモジュールを必要に応じて積み重ねることができ、プロジェクトのニーズに合わせて必要なものだけを取得できます。

- **クロスプラットフォーム**: N3uronは、ほとんどのWindowsバージョンおよびLinuxディストリビューション、さらにはRaspberry PiのようなARMアーキテクチャ上でも動作します。

- **無制限ライセンス**: N3uronは無制限のライセンスモデルを採用しており、タグ、ユーザー、デバイス、接続に関して制限のない使用を手頃な価格で提供します。

- **ウェブベース**: 一度インストールすれば、ノードにアクセスするために必要なのはウェブブラウザだけです。

- **迅速な展開と開発**: N3uronは1分以内にインストール可能であり、特にテンプレートを利用する場合、データモデルの迅速な作成を可能にする開発環境を提供します。

- **非常に効率的**: 単一のノードで数十万のタグを簡単に管理でき、ハードウェア要件も低く抑えられています。

- **スケーラブルで多用途なアーキテクチャ**: N3uronは、数百または数千のノードを持つ分散アーキテクチャをシームレスに展開することを念頭に設計されています。ユーザーはN3uron Linksを使用して複数のノードを迅速に接続し、ニーズに応じてアーキテクチャを簡単にスケールアップできます。

## はじめに

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## インストール

N3uronは、ワンステップの自動インストールスクリプトを使用して簡単にインストールできます。以下のコマンドをreComputer R1000のターミナルで実行してください：

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_3.gif" alt="pir" width="600" height="auto" /></div>

数秒でN3uronがインストールされ、稼働を開始します。

手動でインストールしたい場合は、[Knowledge Baseセクション](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup)をご覧ください。

## 使用方法

N3uronはマイクロサービス指向のアーキテクチャで設計されており、各モジュールが独立したプロセスとして実行されます。Bootstrapは、他のプロセスを管理するコアサービスです。デフォルトでは、[WebUIモジュール](https://docs.n3uron.com/docs/platform-web-user-interface)が自動的に有効化され、インストールが完了するとすぐにアクセス可能になります。追加の機能は、新しいモジュールインスタンスを作成することで有効化されます。

各モジュールは、運用モードで実行するために有効なライセンスが必要です。有効なライセンスが見つからない場合、モジュールは2時間のデモモードで実行されます。デモ期間を再開するには、モジュールを再起動する必要があります。

以下は、[OPC UA Client](https://docs.n3uron.com/docs/opc-ua-client)を使用してデータを収集し、このデータを[MQTT Clientモジュール](https://docs.n3uron.com/docs/mqtt)を使用してMQTTブローカーにシームレスに公開し、MQTTを介して継続的にデータをプッシュする方法のステップバイステップの例です。

### OPC UA Clientの設定

- **ステップ 1** : ローカルネットワーク上の別のマシンでお気に入りのブラウザを開き、N3uron WebUIにアクセスしてください。reComputer R1000のIPアドレスとWebUI用に設定されたポート（デフォルトではHTTPの場合8003、HTTPSの場合8443）を使用します。

デフォルトのN3uron WebUIユーザー：

<div class="table-center">

|            |   フルアクセス |  読み取り専用アクセス |  
|---         |     ---       |        ---        |
|  ユーザー: |    admin      |       user        |
|  パスワード: |    n3uron     |       n3uron      |

</div>

- **ステップ 2** : N3uron WebUIを開き、Config→Modulesに移動し、メニューをクリックして**新しいモジュール**を作成します。これを**OpcUaClient**と名付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 3**: モジュールタイプとして**OpcUaClient**を選択し、下部の**保存**ボタンをクリックしてモジュールをインスタンス化します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 4**: 新しく作成されたモジュールがModulesに表示されます。その設定に移動し、**新しいクライアント**を作成します。これを**DataSim**と名付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 5**: 以下のようにOPC UA Clientを設定して、DataSimエンドポイントに接続します：

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
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 6**: モジュール内のOPCブラウザセクションに移動し、先ほど作成したDataSimクライアントを選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### タグの作成

- **ステップ 1**: ブラウザからデータモデルセクションに目的のオブジェクトをドラッグ＆ドロップします。
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **ステップ 2**: Config→Tagsで新しく作成されたタグを見つけ、その値を[リアルタイムセクション](https://docs.n3uron.com/docs/platform-visualizing-real-time-values)で確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### テンプレートの作成

[テンプレート](https://docs.n3uron.com/docs/platform-templates)は、N3uronでオブジェクト指向のデータ設計原則を活用する機能を提供します。これにより、新しいプロジェクトの展開に費やす時間を大幅に削減できます。

[テンプレート](https://docs.n3uron.com/docs/platform-templates)を作成して使用することで、ユーザーは新しいインスタンスを生成し、複雑なデータ構造や通信設定を迅速に構築できます。テンプレート定義に変更を加えると、すべてのインスタンスに継承されるため、ルーティング変更を行う際の時間を大幅に節約できます。

目的のオブジェクトをテンプレートセクションにドラッグ＆ドロップし、[カスタムプロパティ](https://docs.n3uron.com/docs/platform-templates-custom-properties)、[継承](https://docs.n3uron.com/docs/platform-templates-inheritance)、[その他](https://docs.n3uron.com/docs/platform-templates-nesting)を使用してテンプレートを構築してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### MQTT Clientの設定

**ステップ 1**: Config→Modulesに移動し、メニューをクリックして**新しいモジュール**を作成し、これをMqttClientと名付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 2**: モジュールタイプとしてMqttClientを選択し、保存をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 3**: 新しいモジュールに移動し、**New Connection**（新しい接続）を作成して「HiveMQ」と名付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 4**: 接続を設定して、パブリック HiveMQ ブローカーを使用します：

```sh
Broker URL: broker.hivemq.com
Port: 1883
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>


- **ステップ 5**: 新しいパブリッシャーを作成し、送信先トピックを設定します。例えば「/n3/recomputer」とします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **ステップ 6**: このノード内のすべてのタグに一致する**Tag Filter**（タグフィルター）を作成します。タグフィルターは、モジュールにどのタグをブローカーに公開するかを指示する方法です。**Save**（保存）をクリックしてすべての変更を適用し、モジュールを再読み込みします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>


- **ステップ 7**: Diagnostics（診断）に移動し、MqttClient モジュールのリアルタイムログを有効にします。モジュールが新しいデータをブローカーに公開するたびにログが出力されるのを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>


### WebVision モジュールのインスタンス化

**ステップ 1:** N3uron を開き、Config メニューに移動します。

**ステップ 2:** Modules（モジュール）をクリックし、新しいモジュールを作成します。このインスタンスには任意の名前を付けることができます（ただし、「.」や「/」などの特殊文字を含む名前は不可）。ただし、インスタンスを識別しやすくするために、インスタンス名をインスタンス化するモジュール名に類似させることをお勧めします。この例では、WebVision モジュールが選択され、「WebVision」と名付けられています。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_5.gif" /></center>

**ステップ 3:** WebVision のメイン設定に移動し、適切なサーバー設定を選択します。ほとんどのユースケースではデフォルト設定で十分です。詳細については、以下のリンクを参照してください：[WebVision 初期設定](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_6.png" /></center>

**ステップ 4:** WebVision モジュールがインスタンス化されたら、最初のステップとして、WebUI の Roles セクションで以前に作成したロールに権限を割り当てます。デフォルトでは、管理アクセス用の Administrator と通常アクセス用の User の 2 つのロールが存在します。これらのロールにユーザーを追加するか、必要に応じて新しいロールを作成できます。ロールが確立されたら、Designer と Viewer ロールの権限をそれぞれ設定します。
さらに、各ロールに対してタグフィルターパスを設定します。タグフィルターパスアクセスは、対応するロールが視覚化にアクセスできるタグモデルのタグを決定します。この例では、両方のロールにタグモデルの完全なパスを割り当てます。

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

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_7.gif" /></center>

- 便利なリンク 

  - [ユーザーとロールの設定](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [アクセス設定](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**ステップ 5:** 初期の WebVision 画面をテストするために、タグを作成します。WebUI に移動し、**Config** を選択してから **Tag** をクリックします。**Model** セクションでメニューをクリックし、**New Tag** を選択します。例えば **TestTag** と名付け、タイプを **Number** に設定し、**Read-Write 権限**を付与し、初期値を 0 に設定（オプション）して設定を保存します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_8.gif" /></center>

**ステップ 6:** 次に、Config セクションの WebVision に移動し、**Open Designer** をクリックします。
**Administrator の資格情報**を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_9.png" /></center>

**ステップ 7:** Templates セクションで、新しいコンテナを作成し「Main」と名付けます。そして、このコンテナをスタートアップとして指定します。これにより、Main が初期の WebVision 画面として設定され、アスタリスク記号（*）が付加されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_10.gif" /></center>

**ステップ 8:** Main コンテナの背景色を変更します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_11.gif" /></center>

**ステップ 9:** Main コンテナ内で、Components に移動し、新しいコンポーネントを追加します。この例では、Gauge コンポーネントを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_12.gif" /></center>

**ステップ 10:** Gauge コンポーネント内で、ゲージコンポーネントに表示される値を提供するタグを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_13.gif" /></center>

**ステップ 11:** 次に、Config セクションの WebVision に移動し、Open UI をクリックします。
Administrator の資格情報を使用してログインします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_14.png" /></center>

**ステップ 12:** 簡単なデザインをテストするには、WebUI に移動して「Data > Realtime」を選択します。TestTag の値を変更してください。その後、WebVision UI に戻り、ゲージコンポーネントが表示する値が更新されているか確認します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_15.gif" /></center>

WebVision には、reComputer R1000 の体験を向上させるために探索できることがたくさんあります。詳細については、[WebVision に関するナレッジベース](https://docs.n3uron.com/docs/web-vision-configuration)をご参照ください。

ここでご覧いただいたのはほんの始まりに過ぎません。約 50 のモジュールからなる印象的な機能群が提供する無限の可能性を受け入れ、大きな夢を描き、革新し、N3uron の最先端機能を活用してプロジェクトを新たな高みへと引き上げてください。この強力なプラットフォームについてさらに詳しく知りたい方は、[https://n3uron.com/](https://n3uron.com/) を訪問し、エキサイティングな発見の旅に出発しましょう！