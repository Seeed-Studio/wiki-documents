---
description: Grove Vision AI V2とHome Assistantを使用して群衆密度ヒートマップを構築する方法。
title: Grove Vision AI V2とHome Assistantを使用した群衆密度の構築
keywords:
- matter
- XIAO
- light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/vision_ai_v2_crowd_heat_map
last_update:
  date: 05/15/2025
  author: Citric
---


# Grove Vision AI V2とHome Assistantを使用した群衆密度の構築

スマートホームとIoTの時代において、インテリジェントなセンサーやデバイスをホームオートメーションシステムに統合することがますます一般的になっています。[Home Assistant](https://www.home-assistant.io/)は、強力なオープンソースのホームオートメーションプラットフォームであり、個々のニーズに合わせたカスタムソリューションを作成するための幅広い可能性を提供します。このチュートリアルでは、Grove Vision AI V2とXIAO ESP32C3を使用し、Home Assistantとシームレスに統合された高度な環境検出システムを構築する方法を探ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/2.png" style={{width:900, height:'auto'}}/></div>

最先端のビジョンセンサーであるGrove Vision AI V2と、多用途なXIAO ESP32C3マイクロコントローラーを組み合わせることで、機能豊富で高性能な環境検出システムを構築するための理想的な基盤を提供します。これらのデバイスの力を活用することで、マルチモデル認識、カスタム設定、リアルタイムフレームレート、ライブビュー、ターゲット追跡、ターゲットヒートマップ、クロスエリアカウントなど、幅広い機能を実装できます。

このチュートリアルでは、ハードウェアのセットアップ、ソフトウェアの設定、システムのHome Assistantへの統合のステップバイステップのプロセスを案内します。初心者でも経験豊富なユーザーでも、このチュートリアルは、スマートホーム体験を向上させる洗練された環境検出システムを作成するために必要な知識とツールを提供することを目的としています。

Grove Vision AI V2とXIAO ESP32C3の可能性を解き放ち、Home Assistantを使用して家庭環境を監視および操作する方法を革新する旅に出る準備をしましょう。それでは、あなた自身のインテリジェントな環境検出システムを構築するために始めましょう！


## ハードウェアの準備

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

### 必要な材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2</th>
			<th>XIAO ESP32C3</th>
			<th>Home Assistant Green</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Home Assistant Greenは、最も簡単でプライバシーに配慮した方法で家庭を自動化するためのデバイスです。簡単なセットアップを提供し、すべてのスマートデバイスを1つのシステムで制御でき、データはデフォルトでローカルに保存されます。このボードは、活発なHome Assistantエコシステムの恩恵を受け、オープンソースによって毎月改善されます。

このチュートリアルでは、Home Assistant GreenをHome Assistantホストとして使用することをお勧めしますが、Supervisorを備えた任意のHome Assistantホストを使用することもできます。

Grove Vision AI V2とカメラが準備できたら、CSI接続ケーブルを介して接続します。接続時には、ピン列の方向に注意し、逆向きに差し込まないようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:400, height:'auto'}}/></div>

次に、XIAOとGrove Vision AI V2をピン列を介して接続する必要があります（または拡張ボードとGroveインターフェースを使用します）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:400, height:'auto'}}/></div>

また、デバイスに認識モデルをアップロード済みであると仮定しています。

### XIAO ESP32C3用ネットワーク透過ファームウェアのフラッシュ

適切なUSB-Cケーブルを使用して、XIAO ESP32C3をコンピュータに接続します。デバイスドライバが正しくインストールされていることを確認してください。

ウェブブラウザで[SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)を開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

次に、**XIAO ESP32S3**を選択し、**Connect**をクリックします。

:::caution
ここではXIAO ESP32S3を選択していますが、実際にはXIAO ESP32C3を使用していますのでご注意ください！
:::

以下のボタンをクリックしてファームウェアファイルをダウンロードし、ウェブページの**Add File**ボタンをクリックして、`sscma_xiao_c3_network_v1.1.0.bin`ファームウェアを`0x0`アドレスにフラッシュします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/sscma_xiao_c3_network_v1.1.0.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファイルをダウンロード</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最後に、**Flash** ボタンをクリックし、プログラムが正常にアップロードされるのを待ってから、XIAO ESP32C3 をコンピュータから切断してください。

## Home Assistant へのプラグインのインストール

環境検出システムを構築する前に、Home Assistant にいくつかの重要なアドオンをインストールする必要があります。これらのアドオンは、Grove Vision AI V2 と XIAO ESP32C3 を Home Assistant に統合するために必要な機能とツールを提供します。必要なアドオンは **EMQX**、**Advanced SSH & Web Terminal**、および **Node-RED** です。それぞれのアドオンのインストール手順を見ていきましょう。

### ステップ 1. EMQX のインストール

Home Assistant のウェブインターフェースを開き、**設定** メニューに移動します。**アドオン** オプションをクリックして、アドオン管理ページにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/4.png" style={{width:900, height:'auto'}}/></div>

ページの右下にある **ADD-ON STORE** ボタンをクリックして、アドオンストアを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/5.png" style={{width:900, height:'auto'}}/></div>

アドオンストアの検索バーに **EMQX** と入力し、Enter キーを押してアドオンを検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/6.png" style={{width:900, height:'auto'}}/></div>

検索結果から **EMQX** アドオンを見つけてクリックし、その詳細を表示します。**INSTALL** ボタンをクリックしてインストールプロセスを開始します。Home Assistant は EMQX アドオンをダウンロードしてインストールします。インストールが完了するまで待ちます。

### ステップ 2. Advanced SSH & Web Terminal のインストール

Home Assistant の「アドオンストア」で **Advanced SSH & Web Terminal** を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/7.png" style={{width:900, height:'auto'}}/></div>

**Advanced SSH & Web Terminal** アドオンを見つけてクリックし、その詳細を表示します。**Install** ボタンをクリックしてインストールプロセスを開始します。Home Assistant は Advanced SSH & Web Terminal アドオンをダウンロードしてインストールします。

### ステップ 3. Node-RED のインストール

再び、Home Assistant の「アドオンストア」で **Node-RED** を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/8.png" style={{width:900, height:'auto'}}/></div>

**Node-RED** アドオンを見つけてクリックし、その詳細を表示します。「Install」ボタンをクリックしてインストールプロセスを開始します。Home Assistant が Node-RED アドオンをダウンロードしてインストールするのを待ちます。

## Home AssistantでDockerを使用してpysscmaをデプロイする

このステップでは、Home AssistantのAdvanced SSH & Web Terminalアドオンを使用してPython SSCMA（Seeed Studio Cross-platform Modular API）サーバーをダウンロードしてセットアップします。このサーバーは、Grove Vision AI V2とHome Assistant間の通信を可能にします。以下の詳細な手順に従ってください。

### ステップ4. Advanced SSH & Web Terminalへのアクセス

Home Assistantのウェブインターフェースを開き、**設定**メニューに移動します。**アドオン**オプションをクリックして、アドオン管理ページにアクセスします。**Advanced SSH & Web Terminal**アドオンを見つけてクリックし、その詳細ページを開きます。

このページで**保護モード**をオフにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/9.png" style={{width:900, height:'auto'}}/></div>

アドオンがまだ実行されていない場合は、**START**ボタンをクリックして起動します。アドオンが実行中になったら、**OPEN WEB UI**ボタンをクリックしてターミナルインターフェースにアクセスします。

:::note
このプラグインを初めて起動する場合、プラグイン詳細ページの設定ページで`username`、`password`、および`authorized_key`を入力する必要がある場合があります。詳細な設定情報については、プラグインに付属のドキュメントを参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/10.png" style={{width:900, height:'auto'}}/></div>
:::

### ステップ5. pysscma.tarパッケージのダウンロード

Advanced SSH & Web Terminalで、以下のコマンドを実行してルートディレクトリに移動します：

```
cd /
```

以下のコマンドを実行して**pysscma.tar**パッケージをダウンロードします：

```
wget -O pysscma.tar https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/pysscma.tar
```

ダウンロードが完了するまで待ちます。**pysscma.tar**パッケージはルートディレクトリに保存されます。

### ステップ6. Dockerイメージの読み込み

ダウンロードが完了したら、以下のコマンドを実行してpysscma.tarパッケージからDockerイメージを読み込みます：

```
docker load -i pysscma.tar
```

Dockerがイメージを読み込み、プロセスが完了するとイメージIDが表示されます。

Python SSCMAサーバーを起動するには、以下のコマンドを実行します：

```
docker run -itd --net host --name pysscma_server --restart on-failure --privileged python-sscma:latest server --host 0.0.0.0
```

このコマンドは、必要な設定を持つ「pysscma_server」という名前のDockerコンテナを作成して起動します。

Dockerコンテナが正しく実行されているか確認するには、以下のコマンドを実行します：

```
docker ps
```

"pysscma_server"コンテナがリストに表示され、ステータスが"Up"になっていることを確認してください。

### ステップ7. IPアドレスの取得 {#step-7-obtaining-the-ip-address}

DockerコンテナのIPアドレスを取得するには、以下のコマンドを実行します：

```
ifconfig | grep docker -A 10
```

出力内の"inet"フィールドを探し、それに関連付けられたIPアドレス（例：172.30.232.1）をメモしてください。

このIPアドレスは、Grove Vision AI V2との通信を設定する次のステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/1.png" style={{width:900, height:'auto'}}/></div>

## MQTTブローカーの設定

このステップでは、Home AssistantのEMQXアドオンを設定し、Grove Vision AI V2とHome Assistant間の安全な通信のためのユーザー認証を構成します。

### ステップ8. 組み込みデータベースとユーザーの作成

Home Assistantのウェブインターフェースを開き、「設定」メニューに移動します。「アドオン」オプションをクリックしてアドオン管理ページにアクセスします。「EMQX」アドオンを見つけてクリックし、その詳細ページを開きます。アドオンがまだ起動していない場合は、「START」ボタンをクリックして起動します。アドオンが起動したら、「OPEN WEB UI」ボタンをクリックしてEMQX ダッシュボード にアクセスします。

EMQX ダッシュボード のログインページで、デフォルトのユーザー名とパスワードを入力します。

- デフォルトのユーザー名: **admin**
- デフォルトのパスワード: **public**

「Login」ボタンをクリックしてEMQX ダッシュボード にアクセスします。

EMQX ダッシュボード で、左側のサイドバーメニューから**Authentication**セクションに移動します。**Databases**タブをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

**Create**ボタンをクリックします。**Mechanism**ドロップダウンで**Password-Based**を選択し、**Backend**ドロップダウンで**Built-in Database**を選択します。「Create」ボタンをクリックして組み込みデータベースを作成します。

組み込みデータベースを作成した後、「Authentication」セクションの**Users**タブをクリックします。「Add User」ボタンをクリックします。

- 「Username」フィールドに「seeed」と入力します。
- 「Password」フィールドに「seeed」と入力します。

「Authentication」セクションの「Databases」タブに戻ります。リスト内の先ほど作成したデータベースを見つけます。

データベースの横にあるトグルスイッチをクリックして有効にします。データベースのステータスが「Enabled」に変わるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

### ステップ9. Grove Vision AI V2のネットワーク設定

Grove Vision AI V2をコンピュータに接続し、[Model Assistantの設定ページ](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/config)を開きます。

右上隅をクリックしてGrove Vision AI V2に接続した後、MQTTボタンをオンにし、以下の情報をページに入力してください。

- **SSID & Password**: デバイスはHome Assistantがインストールされているホストと同じLAN上にある必要があります。そのため、同じLAN内でネットワークを設定してください。XIAOは2.4G WiFiのみをサポートしており、5Gネットワークは利用できません。
- **Encryption**: **AUTO**を選択します。
- **Host**: Home AssistantがインストールされているホストのIPアドレス。
- **Port**: `1883`。
- **clientId**: デバイス識別番号として、`grove_vision_ai_v2_`に続けてカスタムID番号を付けます。
- **username**: 先ほど作成したEMQXデータベースのユーザー名。
- **password**: 先ほど作成したEMQXデータベースのパスワード。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/13.png" style={{width:900, height:'auto'}}/></div>

その後、下部の「Save」ボタンをクリックします。保存後、**Grove Vision AI V2が正しく書き込まれたことを意味するわけではありません**。左メニューの**Process**に戻り、デバイスのIPアドレスが表示されているか、MQTT接続のステータスが正しいかを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
IPアドレスが表示されている場合、WiFiに問題がないことを意味します。また、サービスステータスが図のテキストである必要があります。WiFiが正常でない場合、MQTTも正常ではありません。切り替えた直後は「未接続」と表示される場合がありますが、約10秒ほど待つ必要があります。ステータスを確認するためにリフレッシュする必要はなく、ステータスが変わると自動的に最新の状態が表示されます。
:::

接続が正常に動作している場合、理論的にはEMQXでデータストリームを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/3.png" style={{width:900, height:'auto'}}/></div>

:::note
Node-REDの接続がまだ構成されていないため、EMQXでは「All Connections」が1つだけ表示されるはずです。
:::

## Node-RED の設定

このステップでは、Home Assistant 内の Node-RED アドオンを設定し、Grove Vision AI V2 を Home Assistant と統合するための必要なフローを作成します。

### ステップ 10. Node-RED の設定と実行

Home Assistant のウェブインターフェースを開き、「設定」メニューに移動します。「アドオン」オプションをクリックして、アドオン管理ページにアクセスします。「Node-RED」アドオンを見つけてクリックし、その詳細ページを開きます。「設定」タブをクリックします。

Node-RED の設定で、**ssl** オプションを見つけます。**ssl** オプションを無効にします。**SAVE** ボタンをクリックして、設定変更を適用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/14.png" style={{width:900, height:'auto'}}/></div>

「START」ボタンをクリックして Node-RED アドオンを開始します。アドオンが正常に開始されるまで待ちます。ログを確認して進行状況を監視できます。Node-RED アドオンが実行中になったら、「OPEN WEB UI」ボタンをクリックして Node-RED エディターにアクセスします。

### ステップ 11. `msg-speed` ノードのインストール

Node-RED エディターで、右上のハンバーガーメニュー（三本線）をクリックします。メニューから **Manage palette** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/15.png" style={{width:900, height:'auto'}}/></div>

**Palette** サイドバーで **Install** タブをクリックします。検索ボックスに **msg-speed** と入力し、Enter を押します。検索結果で **msg-speed** ノードを見つけ、その横にある **Install** ボタンをクリックします。インストールが完了するまで待ち、「Palette」サイドバーを閉じます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/16.png" style={{width:900, height:'auto'}}/></div>

### ステップ 12. フロー JSON のインポート

フロー用に準備された JSON ファイル `crowd_density.json` をダウンロードしてください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/crowd_density.json" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファイルをダウンロード</font></span></strong>
    </a>
</div>

Node-RED エディターで再びハンバーガーメニューをクリックします。メニューから「Import」を選択します。「Import nodes」ダイアログで「select a file to import」ボタンをクリックします。提供された JSON ファイルをブラウズして選択し、Node-RED フローをインポートします。「Import」ボタンをクリックしてフローを Node-RED にインポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/17.png" style={{width:900, height:'auto'}}/></div>

その後、準備された Node-RED フローが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/18.png" style={{width:900, height:'auto'}}/></div>

### ステップ 13. MQTT Broker ノードの設定

インポートされたフローで、**mqtt-broker** ノードを見つけます。ノードをダブルクリックして設定を開きます。

「Server」フィールドに、EMQX ブローカーの IP アドレス（例: localhost または Home Assistant インスタンスの IP アドレス）を入力します。

「Username」フィールドに、EMQX データベースで作成したユーザー名（例: "seeed"）を入力します。

「Password」フィールドに、EMQX データベースで設定したパスワード（例: "seeed"）を入力します。「Done」ボタンをクリックして MQTT ブローカーの設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/19.png" style={{width:900, height:'auto'}}/></div>

### ステップ 14. POST ノード URL の確認

インポートされたフローで、「POST」ノードを見つけます。ノードをダブルクリックして設定を開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/20.png" style={{width:900, height:'auto'}}/></div>

「URL」フィールドに、**[ステップ 7](#step-7-obtaining-the-ip-address)** で取得した pysscma Docker コンテナの正しい IP アドレスが含まれていることを確認します。必要に応じて、URL を pysscma Docker の IP アドレスに更新します。「Done」ボタンをクリックして POST ノードの設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/21.png" style={{width:900, height:'auto'}}/></div>

### ステップ 15. フローのデプロイ

Node-RED エディターの右上にある **Deploy** ボタンをクリックしてフローをデプロイします。これでフローがアクティブになり、Grove Vision AI V2 からのデータを処理する準備が整います。

## 群衆密度 ダッシュボード 設定

このステップでは、Node-RED ダッシュボードにアクセスして、Grove Vision AI V2 デバイスからのデータを監視および操作します。

コンピュータまたはモバイルデバイスでウェブブラウザを開きます。アドレスバーに以下の形式で URL を入力してください：

```
http://homeassistant:1880/endpoint/ui/
```

これで、Node-RED ダッシュボードでデータフローを監視し、ノードと対話することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/22.png" style={{width:900, height:'auto'}}/></div>

まず、左上隅にクライアント ID を入力してください。その後、**REFRESH** ボタンをクリックして呼び出しを開始します。これにより、Grove Vision AI V2 の映像がリアルタイムでストリーミングされます。実際のニーズに応じて、以下の機能を有効または無効にすることができます。

- **region**: この機能を有効にすると、クロスエリアカウント機能が開始されます。デフォルトでは、この機能がオンになると、画像は中央のオレンジ色の線に沿ってエリア A とエリア B の 2 つのエリアに分割されます。識別フレームがエリア A からオレンジ色の線を越えてエリア B に移動すると、中央左側の **COUNT (A to B)** が 1 増加します。逆に、エリア B からエリア A に移動すると、中央右側の **COUNT (B to A)** が 1 増加します。

  - **pos1**: エリアを分割する線分の左（上）端点の位置を設定するために使用します。

  - **pos2**: エリアを分割する線分の右（下）端点の位置を設定するために使用します。

  - **vertical**: デフォルトでは、エリアを分割する線分は水平線です。このボタンをオンにすると、線分が垂直線になります。

- **box**: デフォルトでは、認識ボックスは閉じています。このボタンをオンにすると、認識ボックスがリアルタイムで中央画面に表示されます。

- **track**: デフォルトでは、ターゲット追跡機能はオフになっています。この機能をオンにすると、認識されたオブジェクトが通ったルートが中央画像に細い緑色の線としてプロットされます。

- **label**: デフォルトでは、認識ラベルは閉じています。このボタンをオンにすると、認識ラベルがリアルタイムで中央画面に表示されます。

- **heatmap**: デフォルトでは、ターゲットヒートマップはオフになっています。このボタンをオンにすると、現在検出されているエリアの群衆密度が表示されます。エリアの色が赤いほど、そのエリアで監視対象オブジェクトが検出された履歴が多く、青いほど少ないことを示します。

**Performance**（右端）はリアルタイムのフレームレートを示します。Image は画面転送のフレームレートを、Overlay は各種機能をオンにした状態での画面のフレームレートを示します。

中央の画面には、各種機能をオンにした状態でのライブプレビュー画面が表示され、右側の小窓には元の画面が表示されます。

## トラブルシューティング

### Q1: このプロジェクトはどのモデルをサポートしていますか？

現在、このプロジェクトはターゲット認識用のモデル、つまり認識フレームを持つモデルのみをサポートしています。例えば、Human Pose Detection や Hand Pose Detection などのモデルはサポートしていません。

### Q2: 特定の機能のボタンをオンにした後、ダッシュボードが応答しないのはなぜですか？

このページは Node-RED 上に構築されているため、ブラウザのカーネル最適化により、場合によってはページがリアルタイムで更新されないことがあります。**REFRESH** ボタンと呼び出しボタンをクリックして画面を更新するか、現在のウェブページをリフレッシュしてみてください。

## リソース

- **[GITHUB]** [pysscma のソースコード](https://github.com/Seeed-Studio/python-sscma/tree/feat/supervision?tab=readme-ov-file#sample)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるニーズやご希望に応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>