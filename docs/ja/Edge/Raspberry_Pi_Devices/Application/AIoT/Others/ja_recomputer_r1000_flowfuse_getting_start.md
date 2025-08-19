---
description: reComputerでFlowFuseをセットアップおよび構成する方法を学びます。このガイドでは、アカウントの作成、Node.jsのインストール、デバイスの追加と構成、Node-REDフローの作成、クラウドからデバイスへのスナップショットのデプロイをカバーし、シームレスな統合と管理を実現します。
title: reComputer R1000とFlowFuse
keywords:
  - Flow Fuse
  - reComputer R1000
  - Node-Red
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_flow_fuse
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

[FlowFuse](https://flowfuse.com/)は、Node-REDを強化し、共同開発、リモートデプロイの管理、DevOpsデリバリーパイプラインのサポート、Node-REDアプリケーションのホスティング機能を追加します。これはNode-REDアプリケーションの開発とデリバリー専用に設計されたDevOpsプラットフォームであり、チームが効率的にプロジェクトを共同で作業し、デプロイするのを容易にします。

## 始める前に

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

## ソフトウェアの準備

### reComputerでFlowFuse用のNode.jsをインストールする

FlowFuseを使用するために、reComputerにNode.jsをインストールする必要があります。以下の手順に従ってNode.jsバージョン20をインストールしてください。

1. **Node.jsリポジトリの準備**

まず、パッケージリストを更新し、必要な証明書とツールをインストールします：

```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
```

2. **NodeSourceリポジトリの設定**

次に、reComputerにNodeSourceリポジトリを設定します：

```sh
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
```

3. **Node.jsリポジトリの追加**

FlowFuseのドキュメントによると、Node.jsバージョン20をインストールすることが推奨されています。`NODE_MAJOR`変数を20に設定します：

```sh
NODE_MAJOR=20
```

Node.jsリポジトリをreComputerのソースリストに追加します：

```sh
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

再度パッケージリストを更新してNode.jsリポジトリを含めます：

```sh
sudo apt update
```

4. **Node.jsのインストール**

最後に、Node.jsをインストールします：

```sh
sudo apt install nodejs
```

これで、デバイスにNode.jsバージョン20がインストールされました。

FlowFuseを使用するには、アカウントを作成し、メールを確認する必要があります。以下の簡単な手順に従ってください。

## アカウントの作成

1. **登録ページにアクセス**:
   - [FlowFuse アカウント作成ページ](https://app.flowfuse.com/account/create)にアクセスしてください。

2. **登録フォームに記入**:
   - **ユーザー名**: ユニークなユーザー名を選択してください。
   - **フルネーム**: フルネームを入力してください。
   - **メールアドレス**: 有効なメールアドレスを入力してください。
   - **パスワード**: 強力なパスワードを作成してください。

3. **フォームを送信**:
   - 必要な項目をすべて記入したら、「Create Account」ボタンをクリックしてください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/signinpage.PNG" /></center>

4. **メールを確認**:
   - メールボックスを開き、FlowFuseからの確認メールを探してください。

5. **確認メールを開く**:
   - メールを開き、コードを使用してメールを確認してください。

6. **FlowFuseのログインページに戻る**:
   - FlowFuseのログインページにアクセスしてください。

7. **認証情報を入力**:
   - ユーザー名/メールアドレス: 登録時に使用したユーザー名またはメールアドレスを入力してください。
   - パスワード: パスワードを入力してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/email.PNG" /></center>

8. **ログイン**:
   - `Login`ボタンをクリックしてFlowFuseアカウントにアクセスします。その後、チームを作成するよう求められる場合があります。

## FlowFuseでアプリケーションを作成する

Node-REDインスタンスを整理するために、これらはアプリケーション内にグループ化されます。アプリケーション内には、1つ以上のNode-REDインスタンスを含めることができます。インスタンスは、プラットフォームと統合するためのさまざまなFlowFuseプラグインを含むカスタマイズされたNode-REDバージョンです。

1. **アプリケーションセクションに移動**:
   - FlowFuseダッシュボードで`Create Application`をクリックしてください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application.PNG" /></center>

2. **アプリケーションの詳細を記入**:
   - **名前**: アプリケーションの名前を入力してください。
   - **説明**: アプリケーションの簡単な説明を入力してください。
   - **インスタンス名**: Node-REDインスタンスの名前を選択してください。
   - **ブループリント**: `Blank Workspace`をブループリントとして選択してください。
   - **Node-REDバージョン**: ドロップダウンメニューから最新のNode-REDバージョンを選択してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application2.PNG" /></center>

3. **アプリケーションを作成**:
   - 詳細をすべて記入したら、`Create`ボタンをクリックしてください。

## FlowFuseでフローを作成する

Node-REDでランダムな数値を生成し、それをダッシュボードに表示するフローを作成してみましょう。Node-REDを初めて使用する場合は、[Node-RED入門ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_started_node_red/)をご覧ください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/selectin.PNG" /></center>

1. **Node-REDエディタを開く**:
   - インスタンスに移動し、作成したインスタンスを選択してください。
   - `Open Editor`をクリックしてNode-REDエディタを起動してください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/openeditor.png" /></center>

2. **必要なノードをインストール**:
   - デフォルトでは`random`ノードや`gauge`ノードが表示されない場合があります。これらをインストールするには:
     - 右上のメニューから`Manage palette`を選択してください。
     - `Install`タブに移動してください。
     - `Random`および`Dashboard`ノードを検索してインストールしてください。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/noderedflow.PNG" /></center>

3. **フローを作成**:
   - 以下のフローをコピーしてNode-REDエディタにインポートし、時間を節約してください:

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
        "name": "ランダム",
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
        "title": "ランダム数値",
        "label": "単位",
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
        "name": "デフォルト",
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
        "name": "ホーム",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

4. **フローをデプロイ**:
   - 右上の`Deploy`ボタンをクリックしてフローをデプロイしてください。

## FlowFuseでのデバイスの追加と設定

1. **FlowFuseでデバイスを追加および設定する手順**:
 - FlowFuseダッシュボードで、`Devices`セクションに移動します。
 - `Add Device`ボタンをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device.PNG" /></center>

 - デバイスの詳細を入力します。
 - `Add`ボタンをクリックしてデバイスを作成します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device.PNG" /></center>

2. **デバイス構成をコピーする**

  - デバイスを追加した後、デバイス構成が表示されます。
  - 手動の指示の下にある提供されたコードスニペットをコピーします。この資格情報はデバイスをFlowFuseクラウドに接続するために必要です。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device2.PNG" /></center>

## デバイスエージェントのインストール

reComputerのターミナルで以下のコマンドを実行してFlowFuseデバイスエージェントをインストールします:

```sh
sudo npm install -g @flowfuse/device-agent
```
### デバイスエージェントの設定

1. **構成ディレクトリを作成する**:  
   - 以下のコマンドを順に実行して構成ディレクトリを作成し、適切な権限を設定します:

```sh
   sudo mkdir /opt/flowfuse-device
   sudo chown -R $USER /opt/flowfuse-device
   sudo su
   cd /
   cd opt/flowfuse-device
```
2. **構成ファイルを作成および編集する**:  
   - `device.yml`という名前の新しい構成ファイルを開きます:

```sh
nano device.yml
``` 
- コピーしたデバイス構成をこのファイルに貼り付け、`Ctrl + X`を押して保存し、次に`Y`、そして`Enter`を押します。

3. **デバイスエージェントを実行する**:  
   - 以下のコマンドを実行してFlowFuseデバイスエージェントを開始します:

```sh
flowfuse-device-agent --port=1881
```
これでデバイスが設定され、FlowFuseクラウドに接続され、使用準備が整いました。

## デバイスへのフローのデプロイ

デバイスにフローをデプロイするには、Node-REDインスタンスのスナップショットを作成し、それをreComputerターミナルにプッシュする必要があります。以下の手順に従ってください:

### スナップショットを作成する

1. **アプリケーションに移動する**:
   - FlowFuseアプリケーションに移動し、作成したインスタンスを選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot1.PNG" /></center>

2. **'Snapshot'を選択する**:
   - インスタンスメニューで`Snapshot`オプションをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot2.PNG" /></center>

3. **新しいスナップショットを作成する**:
   - まだスナップショットがない場合は、新しいスナップショットを作成する必要があります。
   - `Create Snapshot`をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot3.PNG" /></center>

4. **スナップショットの詳細を入力する**:
   - `Name`: スナップショットの名前を入力します。
   - `Description`: スナップショットの簡単な説明を記入します。
   - `Set as Target`: このスナップショットをターゲットとして設定するチェックボックスをオンにします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot4.PNG" /></center>

5. **スナップショットを作成する**:
   - `Create`ボタンをクリックしてスナップショットを作成します。これにより、Node-REDインスタンスの現在の状態（フロー、資格情報、環境変数、NPMパッケージ（ロックされたバージョン）、ランタイム設定）がキャプチャされます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot5.PNG" /></center>

## スナップショットをデバイスにプッシュする

スナップショットをデバイスにデプロイするには、以下の手順に従ってください：

1. **デバイスセクションに移動**
   - FlowFuse ダッシュボードで、`Devices` セクションに移動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device_add_sanp.PNG" /></center>

2. **デバイスを選択**
   - 以前に作成し設定したデバイスを見つけます。
   - デバイス名の横にある三点アイコンをクリックします。
   - `Add Instance` をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance.PNG" /></center>

3. **デバイスにインスタンスを追加**
   - 以前に作成したアプリケーションとインスタンスを選択します。
   - `Add` ボタンをクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance2.PNG" /></center>

4. **フローをデプロイ**
   - フローは数秒以内にデバイスにデプロイされます。スナップショットに記録された設定と構成で実行されます。

5. **デバイスにアクセス**
   - Webブラウザで `<ip_address_recomputer>:1881/ui` に移動してデバイスにアクセスします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/gauge.PNG" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>