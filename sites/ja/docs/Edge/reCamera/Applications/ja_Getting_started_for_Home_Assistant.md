---
description: reCamera と Home Assistant の統合チュートリアルを提供します。Home Assistant は reComputer にインストールされています。
title: Home Assistant 入門ガイド
keywords:
  - reCamera
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/HA.png
slug: /ja/getting_started_for_home_assistant_with_recamera
sidebar_position: 6
last_update:
  date: 11/11/2025
  author: Xinrui Wu
---

# reCamera を使用した Home Assistant 入門ガイド

## はじめに

Home Assistant は、オープンソースのスマートホームプラットフォームシステムで、ユーザーは自分の IoT デバイスを簡単にシステムに接続して統一管理できます。しかし、Home Assistant の主な特徴は、さまざまなセンサーデバイスの表示を実現するだけでなく、クロスプラットフォームデバイスの自動連携を実現することです。このようなスマートホームプラットフォームだけが十分な活力を持つことができます。

## ハードウェア準備

reCamera 1台（2002 シリーズ、HQ POE バージョン、またはパンチルトバージョンのいずれでも可能ですが、POE バージョンには WiFi 機能がないため、同じネットワークセグメントで POE 機能付きスイッチに接続する必要があります）  
reComputer 1台（どのバージョンでも構いません。ここでは reComputer AI R2130-12 を例として使用します）  
コンピューター 1台

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
  <th>reComputer AI R2000 シリーズ</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## Home Assistant のインストール（reComputer AI R2130-12 を例として）

### システム準備

Home Assistant が既にインストールされている場合は、「設定ファイルのパスを見つける」ステップに直接進んで、後続の設定を行ってください。

1.システムの更新

```bash
sudo apt update && sudo apt upgrade -y
```

2.必要な依存関係のインストール

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

### Docker のインストール

1.公式スクリプトによるインストール

```bash
curl -fsSL https://get.docker.com | sh
```

2.現在のユーザーが Docker を使用できるようにする

```bash
sudo usermod -aG docker $USER
```

3.権限を有効にするためにシステムを再起動

```bash
sudo reboot
```

4.インストールの確認

```bash
docker run hello-world
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

「Hello from Docker!」という文字が表示されれば、インストールが成功したことを示します。

### Home Assistant のインストール（コンテナモード）

1. マウントディレクトリの作成
設定ファイルを永続化するため：

```bash
mkdir -p ~/homeassistant/config
```

2. コンテナの起動
以下のコマンドを実行して Home Assistant を起動します  
（この手順には時間がかかる場合があります。速度はネットワークに依存します）

```bash
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=Asia/Shanghai \
  -v ~/homeassistant/config:/config \
  -v /etc/localtime:/etc/localtime:ro \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```

パラメータの説明：
- `--network=host`: Home Assistant がホストネットワークに直接アクセス可能（自動デバイス検出に必要）
- `-v ~/homeassistant/config:/config`: 設定ファイルの保存
- `--restart=unless-stopped`: 自動再起動
- `--privileged`: ハードウェアアクセスの有効化（USB Zigbee/Z-Wave など）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### Home Assistant へのアクセス

1. IP の確認

```bash
hostname -I
```

2. ブラウザでのアクセス

Docker が起動した後、1〜2分待ってから、ブラウザでアクセスします：

```bash
http://<your IP>:8123
```

例：

```bash
http://192.168.1.88:8123
```

初回起動時は初期化インターフェースが表示されます。その後、アカウントの作成とスマートホームの設定を開始できます。

### 設定ファイルのパスを見つける

Home Assistant のすべての設定は以下に保存されます：

```bash
/homeassistant/config/
```

以下のコマンドで確認できます：

```bash
cd /homeassistant/config
ls
```

これらのファイルが表示されます：

```bash
automations.yaml  configuration.yaml  scripts.yaml ...
```

### reCamera データを受信するための自動化設定

1. nano エディタのインストール

```bash
sudo apt install nano -y
```

2. `automations.yaml` の編集：

```bash
sudo nano /homeassistant/config/automations.yaml
```

内容を以下に置き換えます：

```yaml
- alias: "ReCamera Detection"
  description: "Receive the detection results from ReCamera"
  trigger:
    - platform: webhook
      webhook_id: recamera_detection

  action:
    - service: input_text.set_value
      target:
        entity_id: input_text.recamera_people_raw
      data:
        value: "{{ trigger.json.payload }}"

  mode: single
```

保存して終了：

- **Ctrl + O** → Enter（保存）
- **Ctrl + X**（終了）

3. configuration.yaml の編集：

```bash
sudo nano /homeassistant/config/configuration.yaml
```

内容を以下に置き換えます：

```yaml
# ==========================
# Basic Configuration of Home Assistant
# ==========================

# Load default integration (do not delete)
default_config:

# Load the front-end theme
frontend:
  themes: !include_dir_merge_named themes

# Load the independent configuration file
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml


# ==========================
# ReCamera Physical Configuration Section
# ==========================

# Define an "input_text" entity to store the latest detection results from ReCamera.
input_text:
  recamera_people_raw:
    name: Original detection result of ReCamera
    max: 255
    icon: mdi:account-group  # Optional: Display as "Group" icon

# Define a template sensor to display the detection results of ReCamera
sensor:
  - platform: template
    sensors:
      recamera_people_count:
        friendly_name: "ReCamera Personnel Counting Function"
        value_template: "{{ states('input_text.recamera_people_raw') }}"
        icon_template: mdi:camera-outline
```

保存して終了：

- **Ctrl + O** → Enter（保存）
- **Ctrl + X**（終了）

4. 保存して終了後、Home Assistant を再起動

```bash
docker restart homeassistant
```

## reCamera の設定（2002w バージョンを例として）

### reCamera をコンピューターに接続後、192.168.42.1 にアクセス

インターフェースが継続的に開けない場合は、[Factory Reset](https://wiki.seeedstudio.com/ja/recamera_getting_started/#factory-reset) セクションを参照してデバイスをリセットしてください。リセット後、再度 192.168.42.1 にアクセスしてください。リセット後、パスワードの変更を求められます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### ログイン後、右下角をクリックして "Workspace" に入る

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### Workspace に入った後、ノードを設定する

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

4つの新しいノードが追加されました：「debug1」、「debug2」、「function1」、「HTTP request」。  
debug1 と debug2 は出力情報を観察するために使用され、オプションです。function1 はデータ処理に使用され、HTTP request ノードは Home Assistant にデータを送信するために使用されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

次に、元のノード「Model Info Handle」を変更して、特定の検出対象の数量のみを出力するようにする必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

ダブルクリックしてこのノードを開き、コードを以下の内容に置き換えます：

```javascript
let currentModel = "Current People";
const object = 'person';

const labels = msg.payload?.data?.labels ?? [];

if (!Array.isArray(labels)) {
    return { payload: '' };
}

const num = labels.filter(label => String(label).toLowerCase() === object).length;
currentModel += ` number: ${num}`;

return { payload: currentModel };
```

変更後、右上角の「Finish」ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

このコードは検出された人数のみを出力します。変更を加えたい場合は、検出オブジェクトを修正できます。
モデルノードを確認することで、どのタイプのオブジェクトが検出できるかを学ぶことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

次に、function1ノードを設定し、元のコードを以下のコードに置き換えます：

```javascript
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

次に、HTTPリクエストノードを設定します。ここでは、3つの領域に変更を加える必要があります：

| **オプション**| **設定値**|
|-----------|-----------|
| **リクエストメソッド**| POST|
| **URLアドレス**| `http://<your IP>:8123/api/webhook/recamera_detection`|
| **レスポンス**| JSON Object|

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

設定後、右上角の "Deploy" ボタンをクリックします。デプロイが成功すると、プロンプトが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

ここで、もう一つのステップを実行する必要があります。それは、reCameraにWiFiを接続することです。reComputerに設定したものと同じネットワークに接続する必要があります（POEバージョンにはWiFi機能がないため、POE機能付きスイッチを使用して同じネットワークセグメントに接続する必要があることに注意してください）。

左上角の "Network" ボタンをクリックしてネットワークを設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
覚えておいてください！reCameraをネットワークに接続することを確認してください！！！そうでなければ、通信ができません。
:::

## Home Assistantの概要インターフェースを表示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

まだ効果が観察されていない場合は、まずリンクが正しく接続されていないかどうかを確認してください。つまり、Webhookが正しく機能しているかどうかを確認します：
任意のデバイス（reCameraまたはコンピュータ）のターミナルで実行します：

```shell
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

成功した場合、Home Assistantの通知に以下が表示されます：
> **reCamera検出結果**
curlからのテスト

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験ができるだけスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
