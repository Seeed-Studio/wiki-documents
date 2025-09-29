---
description: reComputerでFlowFuseをセットアップし設定する方法を学びます。このガイドでは、アカウント作成、Node.jsのインストール、デバイスの追加と設定、Node-REDフローの作成、クラウドからデバイスへのスナップショットのデプロイによるシームレスな統合と管理について説明します。
title: reComputer R1000 with FlowFuse
keywords:
  - Flow Fuse
  - reComputer R1000
  - Node-Red
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_flow_fuse
last_update:
  date: 07/30/2024
  author: Kasun Thushara
---
## はじめに

[FlowFuse](https://flowfuse.com/)は、協調開発、リモートデプロイメントの管理、DevOps配信パイプラインのサポート、Node-REDアプリケーションのホスティング機能を追加することでNode-REDを強化します。Node-REDアプリケーションの開発と配信に特化して設計されたDevOpsプラットフォームとして機能し、チームが協力してプロジェクトを効率的にデプロイすることを容易にします。

## はじめに

このプロジェクトを開始する前に、ここで説明するようにハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## ソフトウェアの準備

### reComputerでFlowFuse用のNode.jsをインストールする

reComputerをFlowFuse用に準備するには、Node.jsをインストールする必要があります。Node.jsバージョン20をインストールするには、以下の手順に従ってください：

1. **Node.jsリポジトリの準備**

まず、パッケージリストを更新し、必要な証明書とツールをインストールします：

```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
```

2. **NodeSourceリポジトリの設定**

次に、reComputer上でNodeSourceリポジトリを設定します：

```sh
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
```

3. **Node.jsリポジトリの追加**

FlowFuseのドキュメントによると、Node.jsバージョン20のインストールが推奨されています。`NODE_MAJOR`変数を20に設定します：

```sh
NODE_MAJOR=20
```

Node.jsリポジトリをreComputerのソースリストに追加してください：

```sh
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

パッケージリストを再度更新して、Node.jsリポジトリを含めてください：

```sh
sudo apt update
```

4. **Installing Node.js**

Finally, install Node.js:

```sh
sudo apt install nodejs
```

これで、お使いのデバイスにNode.jsバージョン20がインストールされました。

FlowFuseの使用を開始するには、アカウントを作成してメールアドレスを確認する必要があります。以下の簡単な手順に従ってください：

## アカウントの作成

1. **登録ページにアクセス**：
   - [FlowFuseアカウント作成](https://app.flowfuse.com/account/create)にアクセスします。

2. **登録フォームに記入**：
   - **ユーザー名**: 一意のユーザー名を選択します。
   - **フルネーム**: フルネームを入力します。
   - **メール**: 有効なメールアドレスを入力します。
   - **パスワード**: 強力なパスワードを作成します。

3. **フォームを送信**：
   - 必要なフィールドをすべて入力した後、「Create Account」ボタンをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/signinpage.PNG" /></center>

4. **メールを確認**：
   - メールの受信箱に移動し、FlowFuseからの確認メールを探します。

5. **確認メールを開く**：
   - メールを開き、コードを使用してメールアドレスを確認します。

6. **FlowFuseログインページに戻る**：
   - FlowFuseログインページに移動します。

7. **認証情報を入力**：
   - ユーザー名/メール: 登録したユーザー名またはメールアドレスを入力します。
   - パスワード: パスワードを入力します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/email.PNG" /></center>

8. **ログイン**：
   - `Login`ボタンをクリックしてFlowFuseアカウントにアクセスします。チームの作成を求められる場合があります。

## FlowFuseでのアプリケーション作成

Node-REDインスタンスを整理するために、それらはアプリケーション内でグループ化されます。アプリケーション内では、Node-REDの1つ以上のインスタンスを持つことができます。インスタンスは、プラットフォームと統合するための様々なFlowFuseプラグインを含むNode-REDのカスタマイズされたバージョンです。

1. **アプリケーションセクションに移動**：
   - FlowFuseダッシュボードで、`Create Application`をクリックします。
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application.PNG" /></center>

2. **アプリケーションの詳細を入力**：
   - **名前**: アプリケーションの名前を入力します。
   - **説明**: アプリケーションの簡単な説明を入力します。
   - **インスタンス名**: Node-REDインスタンスの名前を選択します。
   - **ブループリント**: ブループリントとして`Blank Workspace`を選択します。
   - **Node-REDバージョン**: ドロップダウンメニューから最新のNode-REDバージョンを選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application2.PNG" /></center>

3. **アプリケーションを作成**：
   - すべての詳細を入力した後、`Create`ボタンをクリックします。

## FlowFuseでのフロー作成

Node-REDでランダムな数値を生成してダッシュボードに表示するフローを作成しましょう。Node-REDが初めての場合は、[Node-RED入門ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_started_node_red/)をご覧ください。フロー作成の手順

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/selectin.PNG" /></center>

1. **Node-REDエディターを開く**：
   - インスタンスに移動し、作成したインスタンスを選択します。
   - `Open Editor`をクリックしてNode-REDエディターを起動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/openeditor.png" /></center>

2. **必要なノードをインストール**：
   - デフォルトでは`random`ノードと`gauge`ノードが表示されない場合があります。これらをインストールするには：
   - 右上のメニューに移動し、`Manage palette`を選択します。
   - `Install`タブに移動します。
   - `Random`と`Dashboard`ノードを検索してインストールします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/noderedflow.PNG" /></center>

3. **フローを作成**：
   - 時間を節約するために、以下のフローをコピーしてNode-REDエディターにインポートします：
  
```sh
[
    {
        "id": "fd017c5f719054f5",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "45888468a69bbabb",
        "type": "random",
        "z": "fd017c5f719054f5",
        "name": "Random",
        "low": 1,
        "high": "100",
        "inte": "true",
        "property": "payload",
        "x": 340,
        "y": 160,
        "wires": [
            [
                "ce3820147521aaa6"
            ]
        ]
    },
    {
        "id": "5e571c440b2340e9",
        "type": "inject",
        "z": "fd017c5f719054f5",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "45888468a69bbabb"
            ]
        ]
    },
    {
        "id": "ce3820147521aaa6",
        "type": "ui_gauge",
        "z": "fd017c5f719054f5",
        "name": "",
        "group": "7ac87662e9cf0550",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Random Number",
        "label": "units",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "diff": false,
        "className": "",
        "x": 670,
        "y": 160,
        "wires": []
    },
    {
        "id": "7ac87662e9cf0550",
        "type": "ui_group",
        "name": "Default",
        "tab": "0dc7fe4a8add5b68",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0dc7fe4a8add5b68",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

4. **フローをデプロイする**:
   - 右上角の `Deploy` ボタンをクリックしてフローをデプロイします。

## FlowFuseでのデバイスの追加と設定

1. **FlowFuseでデバイスを追加・設定するには、以下の手順に従ってください**:

- FlowFuseダッシュボードで、`Devices` セクションに移動します。
- `Add Device` ボタンをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device.PNG" /></center>

- デバイスの詳細を入力します
- `Add` ボタンをクリックしてデバイスを作成します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device.PNG" /></center>

2. **デバイス設定をコピーする**

- デバイスを追加した後、デバイス設定が表示されます。
- 手動指示の下で、提供されたコードスニペットをコピーします。デバイスをFlowFuseクラウドに接続するために、これらの認証情報が必要になります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device2.PNG" /></center>

## デバイスエージェントのインストール

reComputerターミナルで、以下のコマンドを実行してFlowFuseデバイスエージェントをインストールします:

```sh
sudo npm install -g @flowfuse/device-agent
```

### デバイスエージェントの設定

1. **設定ディレクトリの作成**：- 以下のコマンドを順番に実行して、設定ディレクトリを作成し、適切な権限を設定します：

```sh
   sudo mkdir /opt/flowfuse-device
   sudo chown -R $USER /opt/flowfuse-device
   sudo su
   cd /
   cd opt/flowfuse-device
```

2. 設定ファイルの作成と編集:** - `device.yml`という名前の新しい設定ファイルを開きます：

```sh
nano device.yml
```

- コピーしたデバイス設定をこのファイルに貼り付け、`Ctrl + X`、次に`Y`、そして`Enter`を押して保存します。

3. Device Agentを実行する：  - 以下のコマンドを実行してFlowFuse device agentを開始します：

```sh
flowfuse-device-agent --port=1881
```

あなたのデバイスは設定され、FlowFuseクラウドに接続されました。使用準備が完了しています。

## デバイスへのフローのデプロイ

フローをデバイスにデプロイするには、Node-REDインスタンスのスナップショットを作成し、reComputerターミナルにプッシュする必要があります。以下の手順に従ってください：

### スナップショットの作成

1. **アプリケーションに移動**：
   - FlowFuseアプリケーションに移動し、作成したインスタンスを選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot1.PNG" /></center>

2. **「Snapshot」を選択**：
   - インスタンスメニューの`Snapshot`オプションをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot2.PNG" /></center>

3. **新しいスナップショットを作成**：
   - まだスナップショットがないため、新しく作成する必要があります。
   - `Create Snapshot`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot3.PNG" /></center>

4. **スナップショットの詳細を入力**：
   - `Name`：スナップショットの名前を入力します。
   - `Description`：スナップショットの簡単な説明を入力します。
   - `Set as Target`：このスナップショットをターゲットとして設定するためにボックスにチェックを入れます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot4.PNG" /></center>

5. **スナップショットを作成**：
   - `Create`ボタンをクリックしてスナップショットを作成します。これにより、フロー、認証情報、環境変数、NPMパッケージ（バージョン固定）、ランタイム設定を含む、Node-REDインスタンスの現在の状態がキャプチャされます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot5.PNG" /></center>

## デバイスへのスナップショットのプッシュ

スナップショットをデバイスにデプロイするには、以下の手順に従ってください：

1. **デバイスセクションに移動**

- FlowFuseダッシュボードで、`Devices`セクションに移動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device_add_sanp.PNG" /></center>

2. **デバイスを選択**

- 先ほど作成・設定したデバイスを見つけます。
- デバイス名の横にある3つの点をタップします。
- `Add Instance`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance.PNG" /></center>

3. **デバイスにインスタンスを追加**

- 先ほど作成したアプリケーションとインスタンスを選択します。
- `Add`ボタンをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance2.PNG" /></center>

4. **フローをデプロイ**

- フローは数秒以内にデバイスにデプロイされます。スナップショットでキャプチャされた設定と構成で実行されます。

5. **デバイスにアクセス**

- Webブラウザで`<ip_address_recomputer>:1881/ui`に移動してデバイスにアクセスします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/gauge.PNG" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
