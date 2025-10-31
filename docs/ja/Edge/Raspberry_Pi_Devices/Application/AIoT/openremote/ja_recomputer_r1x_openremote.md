---
description: OpenRemoteは、ネットワーク接続されたデバイスをモバイルおよびWebアプリケーションに簡単に接続できる完全オープンソースのIoTプラットフォームです。Recomputer R1000やR1100などのRaspberry Pi搭載デバイスにデプロイできる機能により、OpenRemoteは環境内のIoTデバイスを管理・制御するための柔軟なエッジソリューションを提供します
title: reComputer R1xでのOpenRemoteデプロイ エッジでのIoTデバイス管理
keywords:
- IIoT
- OpenRemote
- Raspberry-Pi 
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /ja/openremote_r1x00
last_update:
  date: 9/30/2025
  author: Kasun Thushara
---

## はじめに

[OpenRemote](https://openremote.io/)は、ネットワーク接続されたデバイスの接続と管理を簡素化するために設計されたオープンソースのIoTプラットフォームです。システムの中核にあるのはManagerで、これはIoTコンテキストブローカーとして機能するヘッドレスJavaアプリケーションで、アセットの状態をリアルタイムでキャプチャし管理します。動的アセットモデリングにより、建物、部屋、センサーなど、環境のさまざまなコンポーネントを表現でき、特定のニーズに合わせてカスタマイズできます。Groovy、JavaScript、またはJSONで記述されたルールは、アセットの状態変化やイベントシーケンスに基づいてアクションをトリガーします。これらのルールは、例えば部屋の湿度が上昇したときなど、特定の閾値に達したときにユーザーに通知することができます。プラットフォームは、サードパーティAPIやサービスプロトコルとインターフェースするAgentを介してネットワーク接続されたデバイスをサポートし、マネージャーと同じ場所に配置することも、エッジゲートウェイにインストールすることもできます。Raspberry Pi搭載のRecomputer R1000およびR1100デバイスにOpenRemoteをデプロイすることで、エッジでIoTエコシステムを管理し、デバイスの効率的でローカライズされた制御を提供できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## DockerとDocker-Composeのインストール

UbuntuシステムにDockerとDocker-Composeをインストールするには、以下の手順に従ってください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremoter11.jpg" alt="pir" width={600} height="auto" /></p>

**1. システムパッケージの更新**

まず、パッケージリストを更新し、インストール済みパッケージをアップグレードして、システムが最新の状態であることを確認します。

```bash
sudo apt update
sudo apt upgrade
```

**2. Dockerのインストール**

次に、公式インストールスクリプトを使用してDockerをダウンロードしてインストールします。これにより、Dockerとそのすべての依存関係が自動的にインストールされます。

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**3. ユーザーをDockerグループに追加**

デフォルトでは、Dockerはroot権限を必要とします。`sudo`なしでDockerコマンドを実行するには、ユーザーをDockerグループに追加します：

```bash
sudo usermod -aG docker ${USER}
```

このコマンドを実行した後、ログアウトして再度ログインするか、システムを再起動して変更を有効にしてください。

**4. システムの再起動**

変更を有効にし、ユーザーがDockerグループに追加されるように、システムを再起動します。

```bash
sudo reboot
```

**5. Dockerインストールのテスト**

再起動後、`hello-world`イメージを実行してDockerインストールを確認します。これにより、Dockerが正しく動作していることが確認されます。

```bash
docker run hello-world
```

**6. Docker-Composeのインストール**

最後に、マルチコンテナDockerアプリケーションを定義・実行するためのツールであるDocker-Composeをインストールします。インストールするには、以下を実行してください：

```bash
sudo apt install docker-compose
```

## Recomputer R1000 / R1100でのOpenRemoteのインストール

**1. Docker Composeファイルのダウンロード**

OpenRemoteリポジトリから公式の`docker-compose.yml`ファイルを直接取得します：

```bash
wget https://raw.githubusercontent.com/openremote/openremote/master/docker-compose.yml
```

**2. ディレクトリへの移動**

YAMLファイルが配置されているディレクトリに移動します：

```bash
cd /path/to/yaml
```

**3. Dockerイメージのプル**

必要なDockerイメージをダウンロードします：

```bash
docker-compose pull
```

**4. OpenRemoteの起動**

Docker Composeを使用してOpenRemoteを実行します：

```bash
docker-compose -p openremote up
```

これにより、OpenRemote Managerとサポートサービスが起動します。

**5. OpenRemoteへのアクセス**

起動後、デフォルトの認証情報でOpenRemote Managerにログインできます：

- **Username:** `admin`
- **Password:** `secret`

これで、Recomputer R1000 / R1100上で**エッジIoTプラットフォーム**としてOpenRemoteが動作し、接続されたデバイスを管理・制御できるようになりました。

## HTTPプロトコルでの作業

Recomputer R1000 / R1100上のOpenRemoteにOpenWeatherMap APIを統合するには、以下の手順に従ってください。このガイドでは、天気データ用のAgentの作成、アセットへのリンク、設定の構成方法について説明します。

### OpenWeatherMap APIキーの取得

OpenWeatherMap APIを使用するには、無料のAPIキーが必要です。[OpenWeatherMap](https://openweathermap.org/)で無料アカウントを登録し、APIキーを取得してください。

### Agentの作成

**HTTP API Agentの作成**  

- **Assets**ページに移動します。
- 左側のアセットリストの上部にある**+**アイコンをクリックして、新しい**Agent**または**Asset**を追加します。
- 表示されるダイアログで、リストから**HTTP Agent**を選択します。
- **Name:** `HTTP API Agent`
- **Add**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote2.png" alt="pir" width={800} height="auto" /></p>

エージェントが事前設定された属性で作成されました。OpenWeatherMap APIに接続するように設定する必要があります。

### HTTP API Agentの設定

HTTP API Agentが作成されたので、以下の詳細で設定します：

- **Base URI:** `https://api.openweathermap.org/data/2.5/`  
  *(右側の送信ボタンをクリックするかEnterキーを押して値を送信することを忘れないでください。)*

- **Request Query Parameters:**  
  OpenWeatherMapアカウントからAPIキーを入力し、以下のようにパラメータを設定します：

```json
{
   "appid": ["YOUR_API_KEY"],
   "q": ["Rotterdam,nl"],
   "units": ["metric"]
}
```

**Save**をクリックして設定を確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote3.png" alt="pir" width={800} height="auto" /></p>

### Weather Assetの作成

**新しいWeather Assetの追加**

- **+**アイコンをクリックしてアセットを追加します。
- リストから**Weather Asset**を選択します。
- **Name:** `Weather Rotterdam`
- **Add**をクリックします。

weather assetがHTTP API Agentの子としてリストに表示されます。必要に応じて親を変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote4.png" alt="pir" width={800} height="auto" /></p>

### Agent Linkの追加

**アセット設定の変更**
アセットページ上部のトグルをクリックして**Modify Mode**に移行します。このモードでは、アセットの属性を変更し、設定を構成できます。

### Humidity属性の設定

- **humidity**属性を展開します。
- **Add configuration item**をクリックし、**Agent link**を選択します。
- **HTTP API Agent**を選択します。
- 以下のパラメータを追加します：

  - **Polling millis:** `60000` (1分ごとにポーリング)
  - **Path:** `weather`
  - **Value filters:** `JsonPathFilter-2`
  - **Path (JSON):** `$.main.humidity`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote5.png" alt="pir" width={800} height="auto" /></p>

### Temperature属性の設定：

- **temperature**属性を展開します。
- **Add configuration item**をクリックし、**Agent link**を選択します。
- **HTTP API Agent**を選択します。
- 以下のパラメータを追加します：

  - **Polling millis:** `60000` (1分ごとにポーリング)
  - **Path:** `weather`
  - **Value filters:** `JsonPathFilter-2`
  - **Path (JSON):** `$.main.temp`

右上の**Save**をクリックして、これらの変更を適用します。

### ライブ天気データの表示

属性を追加したら、**View Mode**に切り替えてライブ天気データを確認します。これで、weather assetにリンクされたロッテルダムの現在の気温と湿度が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote1.png" alt="pir" width={800} height="auto" /></p>

## ChirpStack LoRaWANゲートウェイ統合でのMQTT Agent

このチュートリアルでは、MQTT AgentをChirpStackと統合し、Dragino LHT65やSenseCap S210xセンサーなどのデバイスで使用するためにOpenRemoteマネージャーで設定するプロセスをガイドします。続行する前に、ReComputer R1XデバイスにChirpStackをインストールし、デバイス（例：SenseCap S210X）をペアリングしていることを確認してください。ChirpStackのインストール詳細については、公式の[ChirpStack LoRa Gateway on ReComputer R1X](https://wiki.seeedstudio.com/ja/chirpstack_lora_gateway_r1x00/)ガイドを参照してください。

### 前提条件

- OpenRemote Manager UIが動作していること。
- ReComputer R1XデバイスにChirpStack LoRaWANゲートウェイがインストールされていること。
- LoRaWANデバイス SenseCap S210X。

### OpenRemote MQTT Agentの作成

1. **OpenRemote Manager UIにログイン**：  
   ブラウザを開き、OpenRemote Manager UIにアクセスします

2. **Assetsページに移動**：  
   ページの左側で、**Assets**タブをクリックします。

3. **新しいMQTT Agentの作成**：  
   - 左側のアセットツリーで**+**ボタンをクリックします。
   - **Add asset**ダイアログで、アセットタイプのリストから**MQTT Agent**を選択します。
   - アセットに**ChirpStack MQTT Agent**と名前を付けます。
   - **ADD**をクリックしてアセットを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote6.png" alt="pir" width={800} height="auto" /></p>

4. **MQTT Agentの設定**：
   - **Modify**をクリックしてアセット設定を編集します。
   - 以下の属性を設定します：
     - **Host**: ChirpStackサーバーのIPアドレス（例：`10.0.0.208`）。
     - **Port**: `1883`（デフォルトのMQTTポート）。
   - **SAVE**をクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote7.png" alt="pir" width={800} height="auto" /></p>

### OpenRemote LoRaWANデバイスアセットの作成

1. **新しいLoRaWANデバイスの追加**：
   - **Assets**ページで、左側のアセットツリーの**+**をクリックします。
   - **Add asset**ダイアログで、**Thing Asset**を選択します。
   - アセットに**S2101**（または特定のデバイス名）と名前を付けます。
   - **ADD**をクリックしてアセットを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote8.png" alt="pir" width={800} height="auto" /></p>

2. **Device Assetを変更**：
   - **Modify**をクリックしてアセット設定を編集します。

3. **温度用のカスタム属性を追加**：
   - **ADD ATTRIBUTE**をクリックして新しい属性を追加します。
   - **Add attribute**ダイアログで、以下を設定します：
     - **Type**: **Custom attribute**
     - **Name**: **Temperature**
     - **Value type**: **Number**
   - **ADD**をクリックして属性を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote9.png" alt="pir" width={800} height="auto" /></p>

4. **MQTT Agent用の設定項目を追加**：
   - **Temperature**属性を展開し、**ADD CONFIGURATION ITEMS**をクリックします。
   - **Add configuration items**ダイアログで、以下のように設定します：
     - **Select**: **Agent link**
   - **ADD**をクリックしてMQTT Agentへのリンクを作成します。
   - **Agent link**設定項目を展開し、**Agent ID**を設定します：
     - **Agent ID**: **ChirpStack MQTT Agent**
   - **ADD**をクリックしてAgent linkを保存します。

### センサーデータ用のMQTTサブスクリプションを設定

1. **MQTTトピック用のパラメータを追加**：
   - **ADD PARAMETER**をクリックして新しい設定項目を追加します。
   - **Add parameter**ダイアログで、**Subscription Topic**を選択し、**ADD**をクリックします。

2. **MQTTサブスクリプショントピックを設定**：
   - **Subscription Topic**フィールドを以下のChirpStack MQTTトピック形式で編集します：

     ```
     application/+/device/+/event/up
     ```

   - このトピックはLoRaWANデバイスからの受信センサーデータをサブスクライブします。

3. **Value Filtersを追加**：
   - **ADD**をクリックして新しい**Value Filters**パラメータを追加します。
   - **Value Filters**セクションを展開し、**ADD ITEM**をクリックします。
   - **Add item**ダイアログで、**JSON Path**を選択し、**ADD**をクリックします。

4. **センサーデータ用のJSON Pathを設定**：
   - 新しく作成された**JSON Path**項目を展開し、**Path**を以下に設定します：

     ```
     $.object.messages[?(@.measurementId==4097)].measurementValue
     ```

   - これはSenseCap S2101データデコーダーの例です。特定のデバイスに応じてパスを調整してください。
   - **Return First**オプションを有効にします。

5. **設定を保存**：
   - すべての設定が完了したら、**SAVE**をクリックしてセットアップを完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote10.png" alt="pir" width={800} height="auto" /></p>

### 統合をテスト

1. **MQTT通信を確認**：  
   MQTT AgentがChirpStackサーバーに接続されており、トピック`application/+/device/+/event/up`がデータを受信していることを確認します。

2. **温度を監視**：  
   **SenseCap S2101**（または設定したデバイス）が温度測定値を送信し、OpenRemoteマネージャーが**Temperature**属性の下にこれらの値を表示するはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/openremote/openremote11.png" alt="pir" width={800} height="auto" /></p>

### デモ

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/vYmtEf-7j2I"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
