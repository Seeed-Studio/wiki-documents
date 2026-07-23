---
description: reCamera を Wechat work と連携するためのチュートリアルを提供します。Home Assistant に依存します。
title: Wechat work での使用を開始する
keywords:
  - reCamera
  - Wechat work
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png
slug: /getting_started_in_Wechat_work_with_recamera_bak
sku: 102991896, 108990119, 100029708, 114993560
sidebar_position: 8
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-19'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/getting_started_in_Wechat_work_with_recamera_bak/
---

# reCamera と Home Assistant を企業向け WeChat に連携する

## はじめに

本当にダイナミックなインテリジェントシステムとは、単に「世界を見る」だけでなく、イベントを理解し、アクションをトリガーし、プラットフォームをまたいだ相互接続を実現できるものです。本ソリューションでは、AI ベースの ReCamera をフロントエンドのセンシングデバイスとして使用し、Node-RED によってデータの解析とフォーマットを完了し、その後 Home Assistant をオートメーションセンターとして用いて検出結果をリアルタイムに表示し、判断を行い、さらに企業向け WeChat ロボットと連携して即時通知を実現します。この一連の流れにより、拡張性があり、可観測で、自動的に応答するインテリジェントなシーンシステムが構成されます。
ReCamera は YOLO モデルを使用して人やペットなどの物体をリアルタイムに検出します。Node-RED は検出結果を処理して Home Assistant にプッシュし、HA は Webhook を使用して、エンティティへのデータ書き込み、条件判定、企業向け WeChat グループへのアラーム情報のプッシュといった自動化処理を行い、プラットフォームをまたいだリアルタイムアラートを実現します。このアーキテクチャは、ReCamera と HA の高い連携能力を示すだけでなく、AI ビジョン、オートメーションルール、エンタープライズ向け通知システムを実際のアプリケーションでどのように組み合わせて、本当に「使えるインテリジェントな」IoT 統合ソリューションを構築するかを体現しています。

## ハードウェアの準備

reCamera 1 台（2002 シリーズ、HQ POE バージョン、またはパン・チルトバージョンのいずれでも構いませんが、POE バージョンには WiFi 機能がなく、同一セグメント内で POE 機能付きスイッチに接続する必要がある点に注意してください）  
reComputer 1 台（どのバージョンでも構いません。ここでは例として reComputer AI R2130-12 を使用します）  
パソコン 1 台（Enterprise WeChat がインストール済みであること）

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

## 1. 企業向け WeChat の設定

### (1) インテリジェントロボットを作成する

「アドレス帳」→「インテリジェントロボット」→「インテリジェントロボットを作成」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat1.png" /></div>

### (2) ロボットを設定する

必須項目の入力を完了したら、「保存」をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat2.png" /></div>

### (3) 新しいグループチャットを作成する

先ほど作成したロボットと任意の同僚をグループに追加します（3 人以上でグループを作成できるため、グループ作成が成功した後は同僚をグループチャットから外して構いません）

### (4) メッセージプッシュを設定する

設定手順は次の図のとおりです。名前と紹介文を入力したら、「保存」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat3.png" /></div>

このステップで取得した Webhook アドレスは、後で configuration.yaml を編集する際に使用します。

必ず、**良い知らせのプッシュ用 Webhook アドレスを保護**して、漏えいを防いでください！GitHub やブログなど、公開で閲覧できる場所に共有しないでください。そうしないと、悪意のある第三者があなたのメッセージプッシュを利用してスパムメッセージを送信する可能性があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat4.png" /></div>

設定方法の詳細を確認したい場合は、「設定方法を確認」をクリックしてください。企業向け WeChat 公式がメッセージフォーマットのサンプルを提供しており、より理解しやすくなっています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat5.png" /></div>

## 2. reComputer AI R2130-12 の設定

### (1) システムの準備

#### システムを更新する

```bash
sudo apt update && sudo apt upgrade -y
```

#### 必要な依存関係をインストールする

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

---

### (2) Docker をインストールする

#### 公式スクリプトでインストール

```bash
curl -fsSL https://get.docker.com | sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_docker.png" /></div>

#### 現在のユーザーが docker を使用できるようにする

```bash
sudo usermod -aG docker $USER
```

#### その後、権限を有効にするためにシステムを再起動する

```bash
sudo reboot
```

#### インストールを確認する

```bash
docker run hello-world
```

"Hello from Docker!" という文字が表示されれば、インストールは成功です

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

---

### (3) Home Assistant をインストールする（コンテナモード）

#### マウントディレクトリを作成する

設定ファイルを永続化するために：

```bash
mkdir -p ~/homeassistant/config
```

#### コンテナを起動する

以下のコマンドを実行して Home Assistant を起動します（このステップにはネットワーク環境に応じて長い時間がかかります）:

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

> パラメータの説明:

>>

> - '-- network = host': Home Assistant がホストネットワークへ直接アクセスします（自動デバイス検出に必須）

> - '-v ~/homeassistant/config:/config': 設定ファイルを保存

> - '-- restart = unless-stopped': 自動再起動

> - '-- privileged': ハードウェアアクセスを有効化（USB Zigbee/Z-Wave など）

---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### (4) Home Assistant にアクセスする

#### IP を確認する:

```bash
hostname -I
```

#### ブラウザでアクセスする

コンテナ起動後 1～2 分待ってから、ブラウザで次のようにアクセスします：

```
http://<你的IP>:8123
```

例：

```
http://192.168.1.88:8123
```

初回起動時には初期化画面が表示されるので、アカウントの作成とスマートホームの設定を開始します

------

### (5) 設定ファイルのパスを探す

Home Assistant のすべての設定は次の場所に保存されます:

```
/home/seeed/homeassistant/config/
```

次の方法で確認できます:

```bash
cd /home/seeed/homeassistant/config
ls
```

以下を参照:

```
automations.yaml  configuration.yaml  scripts.yaml ...
```

------

### (6) ReCamera データを受信するための自動化設定

#### エディタをインストールする:

```bash
sudo apt install nano -y
```

#### 'automations.yaml ' を編集する:

```bash
sudo nano /home/seeed/homeassistant/config/automations.yaml
```

内容を置き換えます:

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

保存して終了します:

-**Ctrl O** → Enter（保存）

-**Ctrl X**（終了）

#### configuration.yaml を編集する:

```bash
sudo nano /home/seeed/homeassistant/config/configuration.yaml
```

内容を置き換えます:

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

保存して終了します：

-**Ctrl O** → Enter（保存）

-**Ctrl X**（終了）

#### 保存して終了したら、Home Assistant を再起動します：

```bash
docker restart homeassistant
```

------

## 3. reCamera 2002w の設定

### (1) reCamera をコンピュータに挿入した後、192.168.42.1 にアクセスします

もしフリーズしてインターフェースを開けない場合は、「工場出荷時設定に戻す」セクションを参照してデバイスをリセットしてください。リセット後、再度 192.168.42.1 にアクセスします。リセット後はパスワードを変更する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### (2) インターフェースにログインした後、右下をクリックして「Workspace」に入ります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### (3) Workspace に入った後、ノードを設定します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

これら 4 つの新しいノードが追加されています：debug1 と debug2 は出力情報を確認するために使用し、必要に応じて使用します；function1 はデータを処理するために使用します；Http request ノードは Home Assistant にデータを送信するために使用します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

次に、元のノード「Model Info Handle」を変更し、特定の検出対象の数だけを出力するようにします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

ノードをダブルクリックして開き、コードを次のものに置き換えます：

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

変更後、右上の「Finish」をクリックします"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

このコードは検出された人数のみを出力します。変更したい場合は、検出対象のオブジェクトを変更できます。

どの種類のオブジェクトを検出できるかは、モデルノードを確認することで確認できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

次に、function1 ノードを設定し、元のコードを置き換えます：

```
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

次に、http request ノードを設定します。ここでは 3 か所を変更する必要があります：

| オプション | 設定値 |
| ------------ | ----------------------------------------- |
| **Request Method** | POST |
| **URL address** | 'http://YOUR_IP:8123/api/webhook/recamera_detection'|
| **Return** | JSON Object |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

設定後、右上の「Deploy」をクリックすると、デプロイが成功した後にプロンプトが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

ここで、もう 1 つ行う必要があるステップがあります。それは、reCamera を WiFi に接続し、同じネットワーク下で reComputer をあなたのネットワークに接続することです。

左上の「Network」をクリックしてネットワークを設定します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
忘れないでください！必ず Recamera をネットワークに接続してください！！！そうしないと通信できません。
:::

## 4. 効果を確認する

この時点で、企業向け WeChat では次のような効果が見られるはずです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png" /></div>

それに応じて、Home Assistant の概要画面には次のように表示されるはずです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

もし効果が見られない場合は、まずリンクが機能していないかどうか、つまり Webhook が正常かどうかを確認します：

任意のデバイス（ReCamera、PC など）で：

```bash
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

成功すると、Home Assistant の通知に次のように表示されます：

> **ReCamera Test Results**
>
> curl からのテスト

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

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様それぞれの好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
