---
description: reCamera を reComputer 上に Home Assistant をインストールした環境で統合するためのチュートリアルを提供します。
title: Home Assistant 入門ガイド
keywords:
  - reCamera
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/HA.png
slug: /getting_started_for_home_assistant_with_recamera
sku: 102991896, 108990119, 100029708, 114993560
sidebar_position: 6
last_update:
  date: 11/11/2025
  author: Xinrui Wu
createdAt: '2025-11-11'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/getting_started_for_home_assistant_with_recamera/
---

# reCamera と Home Assistant の連携入門

## はじめに

Home Assistant はオープンソースのスマートホームプラットフォームであり、ユーザーは自分の IoT デバイスを簡単にシステムへ接続して一元管理できます。しかし、Home Assistant の主な特徴は、さまざまなセンサーデバイスの状態を表示できることだけではなく、クロスプラットフォームのデバイス同士を自動で連携させられる点にあります。このような自動連携があってこそ、スマートホームプラットフォームは十分な活力を持つと言えます。

## ハードウェアの準備

reCamera を 1 台（2002 シリーズ、HQ POE バージョン、またはパン・チルトバージョンのいずれでも構いません。ただし、POE バージョンには WiFi 機能がなく、同一セグメント内で POE 機能付きスイッチに接続する必要があります）  
reComputer を 1 台（どのバージョンでも構いません。ここでは例として reComputer AI R2130-12 を使用します）  
PC を 1 台

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera ジンバル</th>
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

## Home Assistant のインストール（reComputer AI R2130-12 を例とする）

### システムの準備

すでに Home Assistant がインストールされている場合は、この後の設定のために「設定ファイルのパスを確認する」の手順までスキップしてください。

1. システムを更新する

```bash
sudo apt update && sudo apt upgrade -y
```

2. 必要な依存関係をインストールする

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

### Docker をインストールする

1. 公式スクリプトでインストール

```bash
curl -fsSL https://get.docker.com | sh
```

2. 現在のユーザーに Docker の使用を許可する

```bash
sudo usermod -aG docker $USER
```

3. システムを再起動して権限を有効にする

```bash
sudo reboot
```

4. インストールを確認する

```bash
docker run hello-world
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

"Hello from Docker!" という文字が表示されれば、インストールは成功しています。

### Home Assistant をインストールする（コンテナモード）

1. マウントディレクトリを作成する
設定ファイルを永続化するために実施します：

```bash
mkdir -p ~/homeassistant/config
```

2. コンテナを起動する
以下のコマンドを実行して Home Assistant を起動します  
（このステップには時間がかかる場合があります。速度はネットワーク環境に依存します）

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
- `--network=host`: Home Assistant がホストネットワークへ直接アクセスできるようにします（デバイスの自動検出に必須）
- `-v ~/homeassistant/config:/config`: 設定ファイルを保存します
- `--restart=unless-stopped`: 自動的に再起動します
- `--privileged`: ハードウェアアクセスを有効にします（USB Zigbee/Z-Wave など）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### Home Assistant にアクセスする

1. IP を確認する

```bash
hostname -I
```

2. ブラウザでアクセスする

Docker を起動した後、1〜2 分ほど待ってから、ブラウザで次のようにアクセスします：

```bash
http://<your IP>:8123
```

例：

```bash
http://192.168.1.88:8123
```

初回起動時には初期設定画面が表示されます。ここからアカウントの作成やスマートホームの設定を開始できます。

### 設定ファイルのパスを確認する

Home Assistant のすべての設定は次の場所に保存されています：

```bash
/homeassistant/config/
```

次のコマンドで確認できます：

```bash
cd /homeassistant/config
ls
```

次のようなファイルが表示されます：

```bash
automations.yaml  configuration.yaml  scripts.yaml ...
```

### 自動化を設定して reCamera のデータを受信する

1. nano エディタをインストールする

```bash
sudo apt install nano -y
```

2. `automations.yaml` を編集する：

```bash
sudo nano /homeassistant/config/automations.yaml
```

内容を次のものに置き換えます：

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

保存して終了します：

- **Ctrl + O** → Enter（保存）
- **Ctrl + X**（終了）

3. configuration.yaml を編集する：

```bash
sudo nano /homeassistant/config/configuration.yaml
```

内容を次のものに置き換えます：

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

保存して終了します：

- **Ctrl + O** → Enter（保存）
- **Ctrl + X**（終了）

4. 保存して終了したら、Home Assistant を再起動します

```bash
docker restart homeassistant
```

## reCamera の設定（2002w バージョンを例とする）

### reCamera をコンピュータに接続した後、192.168.42.1 にアクセスする

インターフェースを開けない状態が続く場合は、[Factory Reset](https://wiki.seeedstudio.com/ja/recamera_getting_started/#factory-reset) セクションを参照してデバイスをリセットしてください。リセット後に再度 192.168.42.1 にアクセスします。リセット後はパスワード変更を求められます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### ログイン後、右下をクリックして「Workspace」に入る

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### Workspace に入ったら、ノードを設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

新しく 4 つのノードが追加されています："debug1"、"debug2"、"function1"、"HTTP request" です。  
debug1 と debug2 は出力情報を確認するためのもので、任意で使用します。function1 はデータ処理用、HTTP request ノードは Home Assistant へデータを送信するために使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

次に、元のノード "Model Info Handle" を修正し、特定の検出対象の数だけを出力するようにします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

このノードをダブルクリックして開き、コードを次の内容に置き換えます：

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

変更が完了したら、右上の "Finish" ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

このコードは検出された人物の数のみを出力します。変更を加えたい場合は、検出オブジェクトを修正してください。  
どの種類のオブジェクトを検出できるかは、モデルノードを確認することで把握できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

次に、function1 ノードを設定し、元のコードを次のコードに置き換えます：

```javascript
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

次に、HTTP request ノードを設定します。ここでは、3 つの項目を変更する必要があります：

| **Option**| **Setting Value**|
|-----------|-----------|
| **Request Method**| POST|
| **URL Address**| `http://<your IP>:8123/api/webhook/recamera_detection`|
| **Response**| JSON Object|

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

設定が完了したら、右上の "Deploy" ボタンをクリックします。デプロイが成功すると、プロンプトが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

ここで、もう 1 つ行う必要がある手順があります。それは reCamera を WiFi に接続することです。reComputer 用に設定したネットワークと同じネットワークに接続する必要があります（POE バージョンには WiFi 機能がなく、同一セグメントのネットワークに接続するために POE 機能付きスイッチを使用する必要がある点に注意してください）。  

左上の "Network" ボタンをクリックしてネットワークを設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
忘れないでください！必ず Recamera をネットワークに接続してください！！！そうしないと通信できません。
:::

## Home Assistant の概要インターフェースを表示する

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

まだ何の効果も確認できない場合は、まずリンクが正しく接続されていないかを確認してください。つまり、Webhook が正しく機能しているかどうかを確認します：  
任意のデバイス（ReCamera またはコンピュータ）のターミナルで実行します：

```shell
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

成功すると、Home Assistant の通知には次のように表示されます：
> **ReCamera Detection Results**  
curl からのテスト

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
