---
description: reCamera と WeChat Work の統合チュートリアルを提供します。Home Assistant に依存します。
title: WeChat Work での開始方法
keywords:
  - reCamera
  - Wechat work
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png
slug: /ja/getting_started_in_Wechat_work_with_recamera
sidebar_position: 8
last_update:
  date: 11/19/2025
  author: Xinrui Wu
---

# reCamera Home Assistant 企業 WeChat の連携

## はじめに

真に動的なインテリジェントシステムは、単に「世界を見る」だけでなく、イベントを理解し、アクションをトリガーし、クロスプラットフォーム相互接続を実現する能力を持っています。このソリューションでは、AI ベースの ReCamera をフロントエンド感知デバイスとして使用し、Node-RED を通じてデータの解析とフォーマットを完了し、その後 Home Assistant を自動化センターとして使用して検出結果をリアルタイムで表示し、決定を下し、さらに企業 WeChat ロボットと連携して即座の通知を実現します。全体のチェーンは、拡張可能で観察可能で自動応答するインテリジェントシーンシステムのセットを形成します。
ReCamera は YOLO モデルを使用して人間やペットなどのオブジェクトをリアルタイムで検出し、Node-RED が検出結果を処理して Home Assistant にプッシュし、HA は Webhook を使用してエンティティへのデータ書き込み、条件判定、企業 WeChat グループへのアラーム情報プッシュのプロセスを自動化し、クロスプラットフォームリアルタイムアラートを実現します。このアーキテクチャは、ReCamera と HA の深い結合能力を実証するだけでなく、実用的なアプリケーションにおいて AI ビジョン、自動化ルール、企業レベルの通知システムを組み合わせて、真に「使用可能でインテリジェント」な IoT 統合ソリューションを構築する方法を反映しています。

## ハードウェア準備

reCamera 1台（2002 シリーズ、HQ POE バージョン、またはパンチルトバージョンのいずれでも可能ですが、POE バージョンには WiFi 機能がないため、同じネットワークセグメントで POE 機能付きスイッチに接続する必要があります）  
reComputer 1台（どのバージョンでも構いません。ここでは reComputer AI R2130-12 を例として使用します）  
コンピュータ 1台（企業 WeChat がインストール済み）

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

## 1. 企業 WeChat の設定

### (1) インテリジェントロボットの作成

アドレス帳 - インテリジェントロボット - インテリジェントロボットの作成をクリック

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat1.png" /></div>

### (2) ロボットの設定

必要項目を完了後、保存をクリック

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat2.png" /></div>

### (3) 新しいグループチャットの作成

作成したロボットと任意の同僚をグループに追加します（3人以上でグループを構築できるため、グループ構築成功後に同僚をグループチャットから削除できます）

### (4) メッセージプッシュの設定

設定手順は以下の図に示されています。名前と紹介を入力後、保存をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat3.png" /></div>

この手順の Webhook アドレスは、後で configuration.yaml を編集する際に役立ちます。

必ず**良いニュースプッシュの webhook アドレスを保護**して漏洩を避けてください！github、ブログ、その他公開で参照できる場所に共有しないでください。そうしないと悪意のある人があなたのメッセージプッシュを使用してスパムメッセージを送信する可能性があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat4.png" /></div>

設定方法の詳細を確認したい場合は、「設定方法を知る」をクリックしてください。企業 WeChat 公式がメッセージフォーマットルーチンを提供しており、より良く理解できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat5.png" /></div>

## 2. reComputer AI R2130-12 の設定

### (1) システム準備

#### システムの更新

```bash
sudo apt update && sudo apt upgrade -y
```

#### 必要な依存関係のインストール

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

---

### (2) Docker のインストール

#### 公式スクリプトインストール

```bash
curl -fsSL https://get.docker.com | sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_docker.png" /></div>

#### 現在のユーザーが docker を使用できるようにする

```bash
sudo usermod -aG docker $USER
```

#### その後、システムを再起動して権限を有効にする

```bash
sudo reboot
```

#### インストールの確認

```bash
docker run hello-world
```

「Hello from Docker!」という文字が表示されれば、インストールが成功したことを示しています

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

---

### (3) Home Assistant のインストール（コンテナモード）

#### マウントディレクトリの作成

設定ファイルを永続化するため：

```bash
mkdir -p ~/homeassistant/config
```

#### コンテナの開始

以下のコマンドを実行して Home Assistant を開始します（この手順は時間がかかります。ネットワークによって異なります）：

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

> パラメータ説明：

>>

> - '-- network = host'：Home Assistant がホストネットワークに直接アクセス（自動デバイス検出に必要）

> - '-v ~/homeassistant/config:/config'：設定ファイルの保存

> - '-- restart = unless-stopped'：自動再起動

> - '-- privileged'：ハードウェアアクセスの有効化（USB Zigbee/Z-Wave など）

---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### (4) Home Assistant へのアクセス

#### IP の確認：

```bash
hostname -I
```

#### ブラウザでアクセス

コンテナ開始後 1〜2 分待ってから、ブラウザでアクセスします：

```
http://<你的IP>:8123
```

例：

```
http://192.168.1.88:8123
```

初回起動時は初期化インターフェースに入り、アカウントの作成とスマートホームの設定を開始します

------

### (5) 設定ファイルパスの確認

Home Assistant のすべての設定は以下に保存されます：

```
/home/seeed/homeassistant/config/
```

以下で利用可能：

```bash
cd /home/seeed/homeassistant/config
ls
```

確認：

```
automations.yaml  configuration.yaml  scripts.yaml ...
```

------

### (6) ReCamera データを受信する自動化の設定

#### エディタのインストール：

```bash
sudo apt install nano -y
```

#### 'automations.yaml' の編集：

```bash
sudo nano /home/seeed/homeassistant/config/automations.yaml
```

内容を置き換え：

```yaml
- alias: "ReCamera Detection"
  description: "接收来自 ReCamera 的检测结果并更新实体和推送企业微信"
  trigger:
    - platform: webhook
      webhook_id: recamera_detection

  action:
    # 1️⃣ 更新 input_text 实体（UI 上显示）
    - service: input_text.set_value
      target:
        entity_id: input_text.recamera_people_raw
      data:
        value: "{{ trigger.json.payload }}"

    # 2️⃣ 条件判断：人数 >= 2 时推送企业微信
    - condition: template
      value_template: >
        {% set payload = trigger.json.payload %}
        {% set num = payload | regex_findall_index('[0-9]+') | first | int %}
        {{ num >= 2 }}

    - service: rest_command.recamera_wechat_notify
      data:
        message: "ReCamera 检测到多人！当前人数：{{ trigger.json.payload }}"

  mode: single
```

保存して終了：

-**Ctrl O** → Enter（保存）

-**Ctrl X**（終了）

#### configuration.yaml の編集：

```bash
sudo nano /home/seeed/homeassistant/config/configuration.yaml
```

内容を置き換え：

```yaml
# ==========================
# Home Assistant 基础配置
# ==========================

# 加载默认集成（请勿删除）
default_config:

# 加载前端主题
frontend:
  themes: !include_dir_merge_named themes

# 加载独立配置文件
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml


# ==========================
# ReCamera 实体配置部分
# ==========================

# 1️⃣ 定义一个 input_text 实体，用于保存 ReCamera 最新检测结果
input_text:
  recamera_people_raw:
    name: ReCamera 原始检测结果
    max: 255
    icon: mdi:account-group  # 可选：显示为“多人”图标

# 2️⃣ 定义一个模板传感器，用于展示 ReCamera 检测结果
sensor:
  - platform: template
    sensors:
      recamera_people_count:
        friendly_name: "ReCamera 检测人数"
        value_template: "{{ states('input_text.recamera_people_raw') }}"
        icon_template: mdi:camera-outline


# ==========================
# 企业微信机器人推送
# ==========================
rest_command:
  recamera_wechat_notify:
    url: "https://xxxxxx"  #此处填写你在群聊中配置的Webhook地址
    method: POST
    headers:
      Content-Type: "application/json"
    payload: |
      {
        "msgtype": "text",
        "text": {
          "content": "{{ message }}",
          "mentioned_list": ["@all"]
        }
      }

```

保存して終了：

-**Ctrl O** → Enter（保存）

-**Ctrl X**（終了）

#### 保存して終了後、Home Assistantを再起動します：

```bash
docker restart homeassistant
```

------

## 3. reCamera 2002wの設定

### (1) reCameraをコンピュータに挿入後、192.168.42.1にアクセス

スタックしてインターフェースが開けない場合は、「工場出荷時設定に復元」セクションを参照してデバイスをリセットしてください。リセット後、再度192.168.42.1にアクセスしてください。リセット後はパスワードを変更する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### (2) インターフェースにログイン後、右下角をクリックして「Workspace」に入る

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### (3) Workspaceに入った後、ノードを設定する

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

これらの4つの新しいノードが追加されました：debug1とdebug2は出力情報を観察するために使用され、必要かどうかは任意です；function1はデータ処理に使用されます；Http requestノードはHome Assistantにデータを送信するために使用されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

次に、元のノード「Model Info Handle」を変更して、特定の検出対象の数のみを出力するようにします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

ダブルクリックしてノードを開き、コードを以下に置き換えます：

```
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

変更後、右上角の「Finish」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

このコードは検出された人の数のみを出力します。変更したい場合は、検出対象を変更できます。

モデルノードを見ることで、どのタイプのオブジェクトが検出できるかを確認できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

次に、function1ノードを設定し、元のコードを置き換えます：

```
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

次に、http requestノードを設定します。ここでは3つの場所を変更する必要があります：

| オプション | 設定値 |
| ------------ | ----------------------------------------- |
| **Request Method** | POST |
| **URL address** | 'http://YOUR_IP:8123/api/webhook/recamera_detection'|
| **Return** | JSON Object |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

設定後、右上角の「Deploy」をクリックし、デプロイが成功すると通知が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

ここでもう一つのステップが必要です。それは、reCameraをWiFiに接続し、reComputerを同じネットワーク下に接続することです。

左上角の「Network」をクリックしてネットワークを設定します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
覚えておいてください！reCameraをネットワークに接続することを確認してください！！！そうでなければ、通信ができません。
:::

## 4. 効果を確認する

この時点で、企業微信で以下の効果が見られるはずです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png" /></div>

それに応じて、Home Assistantの概要画面には以下が表示されるはずです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

効果が見られない場合は、まずリンクが機能していないかどうかを確認してください。つまり、Webhookが正常かどうかを確認してください：

任意のデバイス（reCamera、PC等）で：

```bash
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

成功すると、Home Assistantの通知に以下が表示されます：

> **reCamera テスト結果**
>
> curlからのテスト

------

## システムロジック

```
┌────────────────────────────────────────────────────────────────────────┐
│ ReCamera (AI Camera)                                                   │
│ └─ YOLO Model Detects Objects (e.g., person, cat)                      │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ Node-RED Flow                                                          │
│                                                                        │
│ [Model Info Handle]                                                    │
│ └─ Parse detection results, count objects                              │
│    Output:                                                             │
│    payload = "Current people number: 1"                                │
│                                                                        │
│ [Function Node]                                                        │
│ └─ Pack into JSON format:                                              │
│    payload = { payload: "Current people number: 1" }                   │
│                                                                        │
│ [HTTP Request Node]                                                    │
│ └─ POST → HA Webhook                                                   │
│    URL: http://<HA_IP>:8123/api/webhook/recamera_detection             │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ Home Assistant (HA)                                                    │
│                                                                        │
│ [Webhook Trigger]                                                      │
│ └─ Receive data sent from Node-RED                                     │
│                                                                        │
│ [Automation]                                                           │
│ ├─ Write payload into input_text.recamera_people_raw                   │
│ │    → Display detected people count in real time on HA frontend       │
│ │                                                                      │
│ ├─ Condition check: if count ≥ 2                                       │
│ │      → Trigger rest_command to call WeCom Bot                        │
│ │                                                                      │
│ └─ Call rest_command.recamera_wechat_notify                            │
│       POST detection information to WeCom Webhook                      │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ WeCom Bot (Group Chat)                                                 │
│                                                                        │
│ Message received:                                                      │
│   "ReCamera detected multiple people! Current count:                   │
│    Current people number: 3"                                           │
│                                                                        │
│ → Instant alert to group members                                       │
└────────────────────────────────────────────────────────────────────────┘

```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
