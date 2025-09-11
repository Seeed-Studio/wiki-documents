---
description: Jetsonの群衆追跡AIデモを紹介します
title: 群衆追跡・カウント
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/crowd%20tracking.webp
slug: /ja/solutions/jetson-crowd-tracking
last_update:
  date: 08/15/2025
  author: lian
---

このガイドは**NVIDIA Jetson Ubuntu 22 + JetPack 6.x**環境向けで、迅速なデプロイメントの完了をサポートします。

## 📋 環境要件

- **デバイス**: NVIDIA Jetsonシリーズ（Nano、Xavier、Orinなど）
- **システム**: Ubuntu 22.x + JetPack 6.x
- **ネットワーク**: GitHubとDocker Hubにアクセス可能
- **権限**: `sudo`権限

> デバイスに適切なシステム環境がまだインストールされていない場合は、システムインストールと環境準備について公式フラッシュガイドを参照してください：  
> [JetPackフラッシュチュートリアル（Seeed Studio）](/ja/flash/jetpack_to_selected_product/)

## ⚡ ワンクリックデプロイメント

Jetsonデバイスのターミナルで以下のコマンドを実行してください：

```bash
curl -fsSL https://raw.githubusercontent.com/Seeed-Studio/SenseCraft-AI_Server/refs/heads/jetson/scripts/install.sh | bash
```

> 💡 スクリプトは**冪等実行**をサポートしており、複数回実行しても安全です。

## 🔍 デプロイメントプロセス

スクリプトは以下のステップを自動的に実行します：

1. **Docker（27.x）のインストール**  
   - Dockerがインストールされているかチェック  
   - インストール済みだがバージョン27.xでない場合 → 自動的にアンインストールして再インストール  
   - NVIDIA Container Toolkitの設定  
   - Dockerのデフォルトランタイムを`nvidia`に設定

2. **MQTTブローカーのインストール**  
   - `mosquitto`と`mosquitto-clients`をインストール  
   - 外部アクセスを許可するよう設定：  

     ```shell
     listener 1883 0.0.0.0
     allow_anonymous true
     ```

3. **SenseCraft AI Serverのデプロイ**  
   - 指定されたブランチを`~/sensecraft-ai_server`にクローン  
   - `scripts/run.sh`を実行してサービスを開始  
   - YOLOv11モデルを`~/sensecraft-ai_server/models/yolo11n.pt`にダウンロード

---

## 🛡 例外処理

- **冪等実行**：  
  - **ほとんどの問題**（ネットワーク中断、部分的なインストール失敗など）は**単純にスクリプトを再実行する**ことで修正できます  
  - スクリプトはソフトウェアのバージョンと設定をチェックし、不足または不正確な部分のみをインストールします  
- **稀な問題**（永続的なaptソースの失敗、外部リポジトリへの到達不可など）は手動介入が必要です

---

## 🖥 サービスの開始とアクセス

1. **サービスの開始**  

   ```bash
   cd ~/sensecraft-ai_server
   sudo bash scripts/run.sh
   ```

### 📷 コマンドライン出力（例）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Command%20Line%20Output%20%28Example%29.png" alt="Command"/></div>

2. **メインページへのアクセス**  
   - ブラウザで：  

     ```bash
     http://<JETSON_IP>:46654
     ```

   - デフォルトパラメータが事前設定されています；開始して結果を確認してください

### 📷 Webインターフェース（例）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Web%20Interface%20%28Example%29.png"/></div>

3. **設定ページへのアクセス**  
   - ブラウザで：  

     ```bash
     http://<JETSON_IP>:46654/config.html
     ```

   - ここでビデオソース、モデル、推論パラメータなどを調整し、サーバーに保存できます

## ⚙ 設定ページ概要

### 📷 設定ページ（例）

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Configuration%20Page%20%28Example%29.png"/></div>

## ✨ 検出結果の取得
サービスをデプロイする際、ローカルMQTTブローカーがインストールされます。そのため、認識結果はローカルMQTTを通じて取得できます。

### 📡 MQTTメッセージプッシュトピック

```bash
edgeai/result
```
### 🧩 MQTTメッセージデータ構造
```json
{
  "uuid": "0c7ef3d9-617d-4e6b-83f6-467f89b28d78", // result's uuid
  "info": {
    "person": 6 // object count
  },
  "line_crossing": {
    "enter": 1, // enter count
    "exit": 0   // exit count
  }
}
```
### 🔧 Node-RED設定
MQTTブローカーのIPを調整する必要がある場合があります。
この場合、Node-REDはコンテナにデプロイされているため、docker0アドレスが使用されます。
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered.png"/></div>
## 🔧 Node-RED設定（完全フロー）

MQTTブローカーのIPを調整する必要がある場合があります。  
この場合、Node-REDはコンテナにデプロイされているため、`docker0`アドレスが使用されます。

```json
[{
  "id": "f7641cb7c6a84d23",
  "type": "mqtt in",
  "z": "827a3420678b76d2",
  "name": "",
  "topic": "edgeai/result",
  "qos": "2",
  "datatype": "auto-detect",
  "broker": "0f948328c1975515",
  "nl": false,
  "rap": true,
  "rh": 0,
  "inputs": 0,
  "x": 530,
  "y": 620,
  "wires": [
    ["c086c2dfcc39b708"]
  ]
},
{
  "id": "c086c2dfcc39b708",
  "type": "ui-template",
  "z": "827a3420678b76d2",
  "group": "e33e8e2eb3424d08",
  "page": "",
  "ui": "",
  "name": "human tracking",
  "order": 0,
  "width": 0,
  "height": 0,
  "head": "",
  "format": "<template>\n    <div>\n        <!-- Conditional Styling using Attribute Binding (\":\") -->\n        <!-- and rendering content inside <tags></tags> with {{ }} -->\n        <p> <span :style=\"{'color' : (count > 5 ? 'red' : 'green' )}\">Current Count: {{ msg.payload.info.person }}</span>\n            <span style=\"margin-left:20px\"><b v-if=\"msg.payload.info.person > 5\">Too many!</b> </span>\n        </p>\n        <!-- Computed Rendering using Vue Computed Variables -->\n        <p class=\"my-class\">enter: {{ msg.payload.line_crossing.enter }}</p>\n        <p class=\"my-class\">exit: {{ msg.payload.line_crossing.exit }}</p>\n        <!-- Conditional Rendering with \"v-if\" -->\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            // define variables available component-wide\n            // (in <template> and component functions)\n            return {\n                count: 0\n            }\n        },\n        watch: {\n            // watch for any changes of \"count\"\n            count: function () {\n                if (this.count % 5 === 0) {\n                    this.send({payload: 'Multiple of 5'})\n                }\n            }\n        },\n        computed: {\n            // automatically compute this variable\n            // whenever VueJS deems appropriate\n            formattedCount: function () {\n                return this.count + ' Apples'\n            }\n        },\n        methods: {\n            // expose a method to our <template> and Vue Application\n            increase: function () {\n                this.count++\n            }\n        },\n        mounted() {\n            // code here when the component is first loaded\n        },\n        unmounted() {\n            // code here when the component is removed from the Dashboard\n            // i.e. when the user navigates away from the page\n        }\n    }\n</script>\n<style>\n    /* define any styles here - supports raw CSS */\n    .my-class {\n        color: red;\n    }\n</style>",
  "storeOutMessages": true,
  "passthru": true,
  "resendOnRefresh": true,
  "templateScope": "local",
  "className": "",
  "x": 740,
  "y": 620,
  "wires": [[]]
},
{
  "id": "0f948328c1975515",
  "type": "mqtt-broker",
  "name": "",
  "broker": "172.17.0.1",
  "port": 1883,
  "clientid": "",
  "autoConnect": true,
  "usetls": false,
  "protocolVersion": 4,
  "keepalive": 15,
  "cleansession": true,
  "autoUnsubscribe": true,
  "birthTopic": "",
  "birthQos": "0",
  "birthPayload": "",
  "birthMsg": {},
  "closeTopic": "",
  "closePayload": "",
  "closeMsg": {},
  "willTopic": "",
  "willQos": "0",
  "willPayload": "",
  "willMsg": {},
  "userProps": "",
  "sessionExpiry": ""
},
{
  "id": "e33e8e2eb3424d08",
  "type": "ui-group",
  "name": "人流追踪",
  "page": "h1i2j3k4l5m6n7o8",
  "width": "8",
  "height": "8",
  "order": -1,
  "showTitle": true,
  "className": "",
  "visible": "true",
  "disabled": "false",
  "groupType": "default"
},
{
  "id": "h1i2j3k4l5m6n7o8",
  "type": "ui-page",
  "name": "Frigate Page",
  "ui": "f121584d21d465f1",
  "path": "/frigate",
  "icon": "",
  "layout": "grid",
  "theme": "6666b6af5668e7b2",
  "breakpoints": [
    {"name": "Default","px": "0","cols": "3"},
    {"name": "Tablet","px": "576","cols": "6"},
    {"name": "Small Desktop","px": "768","cols": "9"},
    {"name": "Desktop","px": "1024","cols": "12"}
  ],
  "order": 1,
  "className": "",
  "visible": "true",
  "disabled": "false"
},
{
  "id": "f121584d21d465f1",
  "type": "ui-base",
  "name": "My Dashboard",
  "path": "/dashboard",
  "headerContent": "page",
  "titleBarStyle": "default",
  "showReconnectNotification": true,
  "notificationDisplayTime": 5,
  "showDisconnectNotification": true,
  "allowInstall": true
},
{
  "id": "6666b6af5668e7b2",
  "type": "ui-theme",
  "name": "Default Theme",
  "colors": {
    "surface": "#ffffff",
    "primary": "#0094CE",
    "bgPage": "#eeeeee",
    "groupBg": "#ffffff",
    "groupOutline": "#cccccc"
  },
  "sizes": {
    "density": "default",
    "pagePadding": "12px",
    "groupGap": "12px",
    "groupBorderRadius": "4px",
    "widgetGap": "12px"
  }
},
{
  "id": "e9696690fa075863",
  "type": "global-config",
  "env": [],
  "modules": {
    "@flowfuse/node-red-dashboard": "1.26.0"
  }
}]
```
### 📊 Node-REDダッシュボードプレビュー
<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/nodered%20preview.png"/></div>


### ビデオソース

- **ローカルビデオファイル**、**USBカメラ**（デフォルトは最初のデバイス）、**RTSPストリーム**をサポート
- MP4、AVI、MOV、MKVのアップロードをサポート
- アップロードされたビデオソースの表示と削除

### AIモデル

- 利用可能なAI推論モデルから選択
- `.pt`、`.pth`、`.onnx`、`.engine`形式をサポート
- アップロードされたモデルの表示と削除

### 推論パラメータ

- **信頼度閾値**: 0.1–1.0
- **最大検出数**: 1–1000
- **半精度推論**: 速度向上（小さなモデルでは最小限の差）

### 表示

- 検出ボックスの表示（カスタマイズ可能な色、デフォルトはオレンジ）
- タイムスタンプとFPSは常に有効

### 追跡

- マルチオブジェクト追跡を有効化
- カスタマイズ可能な長さ、太さ、色の軌跡線を表示


### トリップワイヤー検出

- 水平または垂直トリップワイヤーをサポート（垂直推奨）
- 開始/終了点を描画；リアルタイムデバッグ用の表示を有効化
- 許容値：1〜20ピクセル
- カスタマイズ可能な色と太さ
- カウンターの表示/非表示とリセット（サービス再起動時にリセット）

### 設定管理

- 現在の設定をサーバーに保存（実行時に読み込み）
- 設定ファイルのエクスポート/インポート
- デフォルト設定の復元

---

## 🛠 よくある問題

| 問題                        | 原因                      | 解決方法                                                              |
| ---------------------------- | -------------------------- | --------------------------------------------------------------------- |
| `Dockerインストール失敗` | ネットワーク不安定またはソース | ネットワークを確認してスクリプトを再実行                                   |
| Mosquittoに接続できない     | ファイアウォール/設定問題      | `/etc/mosquitto/mosquitto.conf`に`listener 1883 0.0.0.0`が含まれていることを確認 |
| YOLOモデルがダウンロードされない    | ネットワーク中断       | `~/sensecraft-ai_server/models/yolo11n.pt`を削除してスクリプトを再実行 |

---

## 📦 サービスのアンインストール

```bash
# Uninstall MQTT
sudo apt remove -y mosquitto mosquitto-clients

# Uninstall Docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# Remove service directory
rm -rf ~/sensecraft-ai_server
```

---

## 📚 参考資料

- [Jetsonフラッシュガイド](/ja/flash/jetpack_to_selected_product/)
- [SenseCraft-AI_Serverソースリポジトリ](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
- [NVIDIA Jetson Dockerガイド](https://www.jetson-ai-lab.com/tips_ssd-docker.html)
- [Mosquitto公式ドキュメント](https://mosquitto.org/man/mosquitto-conf-5.html)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
