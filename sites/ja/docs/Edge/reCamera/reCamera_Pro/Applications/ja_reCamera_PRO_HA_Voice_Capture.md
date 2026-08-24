---
title: reCamera Pro と Home Assistant 連携 サウンドトリガー付き写真アラート
description: この Wiki では、特定の音が検出されたときに、カスタムメッセージと現在のカメラスナップショットを Home Assistant ダッシュボードに自動送信するように、reCamera Pro を Home Assistant と連携させる方法を説明します。
keywords:
  - reCamera
  - Home Assistant
  - MQTT
  - サウンド検出
  - エッジ AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif
slug: /recamera_pro_ha_sound_alert
sidebar_position: 2
last_update:
  date: 2026-07-27
  author: Sizhao zhou
createdAt: '2026-07-27'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/ja/recamera_pro_ha_sound_alert/
---

# reCamera Pro と Home Assistant 連携：サウンドトリガー付き写真アラート

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## はじめに

この Wiki では、reCamera Pro を Home Assistant (HA) と連携させ、特定の音が検出されたときにカスタムメッセージと現在のカメラスナップショットを Home Assistant ダッシュボードに自動送信する方法を説明します。双方向通信には MQTT プロトコルを使用し、reCamera Pro が指定した音（例："help"）をしきい値を超える信頼度で検出すると、自動的にアラートメッセージとライブ画像を HA に送信します。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif" /></div>

## ハードウェアの準備

- Home Assistant を実行しているホスト（Docker、HA OS、venv デプロイをサポート）
- reCamera Pro デバイス

<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## HA への reCamera アドオンのインストール

Home Assistant に reCamera アドオンを追加し、reCamera Pro からのメッセージと画像を HA 上に表示できるようにします。インストール方法は 2 通りあり、推奨の自動インストールスクリプトと手動インストールがあります。

### 方法 1：自動インストールスクリプト（推奨）

[install.py スクリプト](https://drive.google.com/file/d/1nFBHJNkOUPqcAAUCYw43IhGhDWIYNhUX/view?usp=drive_link) をダウンロードして実行し、HA の設定ディレクトリを入力すると、インストール全体が自動的に完了します。

```bash
# Download install.py (includes all files, no additional downloads needed)
python3 install.py

# Or specify the configuration directory directly (non-interactive)
python3 install.py /home/zsz/HA/config
```

このスクリプトは自動的に以下を行います：
1. 統合コードを `custom_components/recamera_chat/` にコピー
2. フロントエンドファイルを `www/recamera_chat/` にコピー
3. `configuration.yaml` に `recamera_chat` と `panel_custom` の設定を追記（元のファイルを自動バックアップ）
4. すべてのファイルが正しく配置されているか検証

:::tip
このスクリプトは Linux / Windows / macOS に対応しており、Docker、HA OS、venv を含むすべてのデプロイ方法で動作します。
:::

インストール後は、[Step 4: Restart Home Assistant](#step-4-restart-home-assistant) に進んでください。

### 方法 2：手動インストール

#### Step 1: デプロイパッケージをダウンロード

[recamera_chat.zip](https://drive.google.com/file/d/1UgukqGPetQhh_klJBN13dTUfxcCZCAMY/view?usp=drive_link) デプロイパッケージをダウンロードして解凍します。解凍後のディレクトリ構造は次のとおりです：

```
recamera_chat/
└── custom_components/
    └── recamera_chat/
        └── __init__.py
        └── const.py
        └── manifest.json
        └── services.yaml
└── www/
    └── recamera_chat/
        └── panel.js
        └── panel.html
└── configuration_snippet.yaml
```

#### Step 2: ファイルを HA 設定ディレクトリにコピー

`custom_components` フォルダと `www` フォルダを Home Assistant の設定ディレクトリにコピーします。

:::note
HA 設定ディレクトリの場所はインストール方法によって異なります：
- **HA OS**: Samba または SSH 経由で `/config` にアクセス
- **Docker**: マウントした設定ディレクトリ（例：`/home/zsz/HA/config`）
- **venv**: HA をインストールしたディレクトリ
:::

:::danger
`www/` と `custom_components/` は**同じ階層のディレクトリ**であり、どちらも設定ルートディレクトリ直下に配置する必要があります。`www/` を `custom_components/` の中に入れないでください。そうしないとサイドバーに表示されません。
:::

**Docker デプロイ例：**

```bash
# Assuming the HA configuration directory is /home/zsz/HA/config
cd /home/zsz/HA/config

# Copy the integration files
cp -r recamera_chat/custom_components/recamera_chat custom_components/

# Copy the frontend files
cp -r recamera_chat/www/recamera_chat www/
```

コピー後のディレクトリ構造は次のとおりです：

```
/config/
└── custom_components/
    └── recamera_chat/
        └── __init__.py
        └── const.py
        └── manifest.json
        └── services.yaml
└── www/
    └── recamera_chat/
        └── panel.js
        └── panel.html
        └── images/          # Images are automatically saved here
└── configuration.yaml
```

#### Step 3: configuration.yaml を編集

HA の `configuration.yaml` に次の設定を追加します：

```yaml
# ===== reCamera Chat (MQTT Bidirectional Chat) =====
recamera_chat:
  broker: 127.0.0.1       # MQTT broker address (127.0.0.1 if HA and broker are on the same host)
  port: 1883              # MQTT broker port
  # username: youruser    # Uncomment and fill in if authentication is required
  # password: yourpass
  topic_in: recamera/chat/to_ha       # reCamera publishes to this topic -> HA receives
  topic_out: recamera/chat/to_camera  # HA panel sends -> reCamera subscribes to this topic
  message_field: ""       # Leave empty = auto-extract message/text/payload/msg/content
  max_history: 200        # Maximum number of message history entries

panel_custom:
  - name: recamera-chat
    sidebar_title: reCamera
    sidebar_icon: mdi:camera
    url_path: recamera-chat
    module_url: /local/recamera_chat/panel.js?v=13
    require_admin: false
```

:::warning
`module_url` 内のバージョン番号（例：`?v=13`）は、`panel.js` ファイル内のバージョン番号と一致している必要があります。一致していない場合、ブラウザが古いキャッシュを読み込んでしまい、パネルが表示されないことがあります。
:::

#### Step 4: Home Assistant を再起動

設定を反映させるために HA を再起動します：

- Web インターフェース: Settings -> System -> 右上の電源アイコン -> Restart
- コマンドライン（Docker）: `docker restart homeassistant`

#### Step 5: デプロイを確認

1. 再起動完了後、HA のサイドバーに **reCamera** タブ（カメラアイコン付き）が表示されるはずです。
2. クリックするとチャットインターフェースが表示され、右上に **Connected** ステータスが表示されます。
3. 入力ボックスにテキストを入力し、Enter キーを押すか **Send** ボタンをクリックします。
4. `recamera/chat/to_camera` を購読している reCamera 側がメッセージを受信するはずです。

:::warning
再起動後にサイドバーに reCamera タブが表示されない場合は、次の順序でトラブルシューティングを行ってください：
1. 設定ルート直下の `www/` ディレクトリ内に `www/recamera_chat/panel.js` が存在するか確認する（`custom_components/www/` の下ではないこと）
2. `configuration.yaml` に `panel_custom` 設定ブロックが含まれているか確認する
3. `panel.js` 内の `?v=13` のバージョン番号が、`configuration.yaml` の `module_url` 内のバージョン番号と一致しているか確認する
4. Ctrl+F5 を押してブラウザを強制再読み込みし、キャッシュをクリアする
:::

## reCamera Pro の設定

この例ではカメラで写真を撮影する必要があるため、まず reCamera Pro のメインプロセスを停止してカメラリソースを解放する必要があります。次のコマンドを実行します：

```bash
pkill -x rkipc
```

メインプロセスを停止したら、Python プログラムをダウンロードします：[reCamera Program](https://drive.google.com/file/d/1hQZNFvYzIFAPasy6_DWrxtMavjDmzrV_/view?usp=drive_link)

### プログラム設定パラメータの変更

プログラムをダウンロードしたら、正しく動作させるために次のパラメータを変更する必要があります：

```python
# ===================== MQTT Configuration =====================

MQTT_HOST = "192.168.6.215"         # MQTT Broker Address
MQTT_PORT = 1883                    # MQTT Broker Port
TARGET_SOUND = "help"               # Name of the sound to detect
CONFIDENCE_THRESHOLD = 94.0         # Trigger threshold, unit: percentage
MQTT_MESSAGE = "Someone is calling for help!!"  # Message to send when triggered
```

- **MQTT_HOST**: MQTT Broker のアドレス。HA ホストの IP アドレスを入力します
- **MQTT_PORT**: MQTT Broker のポート。`1883` を入力します
- **TARGET_SOUND**: 検出する音の名前。`"help"` を入力します
- **CONFIDENCE_THRESHOLD**: トリガーしきい値（単位：パーセンテージ）。`94.0` を入力します。この値を超える信頼度の場合にのみメッセージと画像が送信されます。
- **MQTT_MESSAGE**: トリガー時に送信するメッセージ。HA パネルに表示したい内容を自由に入力できます。

### コードを reCamera Pro にアップロードして実行

1. 次のコマンドを使用して、変更したコードを reCamera Pro にアップロードします：

```bash
scp voice_capture.py root@<device_IP>:/userdata
```

2. 次のコマンドを実行してコードを起動します：

```bash
python3 ./voice_capture.py
```

## 期待される結果

1. サウンド検出プログラムを起動すると、reCamera Pro は周囲の音を継続的に監視します。
2. 指定した音（例："help"）がしきい値を超える信頼度で検出されると、自動的に現在のシーンを撮影します。
3. カスタムアラートメッセージと画像を MQTT 経由で Home Assistant に送信します。
4. HA サイドバー内の reCamera パネルに、受信したメッセージと画像が表示されます。

## トラブルシューティング

| 問題 | 考えられる原因 | 解決策 |
| --- | --- | --- |
| HA サイドバーに reCamera タブがない | ファイルパスが誤っている、または設定が反映されていない | `www/recamera_chat/panel.js` のパスと `configuration.yaml` の設定を確認する |
| パネルが "Disconnected" と表示される | MQTT 接続に失敗している | MQTT Broker のアドレスとポートが正しいか確認する |
| サウンド検出が反応しない | マイクが接続されていない、または権限不足 | USB マイクが接続されていることを確認し、reCamera Pro 上のオーディオデバイスを確認する |
| 画像が表示されない | カメラリソースが占有されている | カメラを解放するために `pkill -x rkipc` を実行済みか確認する |

## リソース

- [reCamera Pro 製品ページ](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [Home Assistant 公式ドキュメント](https://www.home-assistant.io/)
- [reCamera Chat デプロイメントパッケージ](https://drive.google.com/file/d/1UgukqGPetQhh_klJBN13dTUfxcCZCAMY/view?usp=drive_link)
- [reCamera 音声検出プログラム](https://drive.google.com/file/d/1hQZNFvYzIFAPasy6_DWrxtMavjDmzrV_/view?usp=drive_link)
- [自動インストールスクリプト](https://drive.google.com/file/d/1nFBHJNkOUPqcAAUCYw43IhGhDWIYNhUX/view?usp=drive_link)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。複数のコミュニケーションチャネルを用意し、異なるご希望やニーズにお応えします。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>