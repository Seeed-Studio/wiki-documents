---
title: reBot Arm T701 HT VR テレオペレーション
sidebar_label: VR テレオペレーション
description: USB または WiFi 経由で VR コントローラを使って reBot Arm T701 HT を制御し、コントローラデータの確認、エンドエフェクタの姿勢トラッキングおよびグリッパ制御を行います。
keywords:
  - reBot
  - T701 HT
  - VR
  - Quest
  - Pico
  - Dual-Arm Teleoperation
  - WebXR
slug: /rebot_t701_ht_vr
aliases: ["/rebot_t701_ht_quest"]
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT VR テレオペレーション

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT SDK on GitHub"
/>

左右の VR コントローラを使用して、対応する T701 HT アームを制御します。エンドエフェクタの姿勢トラッキングとグリッパ制御を含みます。ヘッドセットのブラウザは WebXR を通じてコントローラデータを読み取り、WebSocket でコンピュータに送信します。ストリームサーバはそれを UDP でデュアルアームコントローラに転送します。

:::note[デバイスサポート]

このデモは Quest でテストされています。Pico ユーザは、WebXR 対応のヘッドセットブラウザを使用して、同じ WebXR → WebSocket → UDP パイプライン経由で接続できます。以下の手順では Quest を例に使用し、USB 接続と WiFi 接続の両方を扱います。

:::

<section className="section-card">

## 環境と接続

[T701 HT クイックスタートのインストール手順](https://wiki.seeedstudio.com/ja/rebot_t701_ht_getting_started/#SDK-をインストールする)に従って SDK を入手し、依存関係をインストールします。シリアルマッピングを完了し、関節とグリッパのフィードバックを確認し、ゼロ位置を設定します。左アームは CAN1、右アームは CAN2 を使用します。

VR ヘッドセットと両方のコントローラを準備します。USB モードでは USB データケーブルも必要です。WiFi モードではヘッドセットとコンピュータを同じ LAN 上に置きます。

以下のコマンドは SDK ルートから実行します。新しいターミナルを開くたびに、そのディレクトリに戻り、`t701-ht` 環境を有効化してください。

```bash
conda activate t701-ht
```

</section>

<section className="section-card">

## ストリーミングを開始する

最初のターミナルで、ストリーム UI を起動します：

```bash
python Quest_controller_stream/quest_stream_tui.py
```

Up/Down でフィールドを選択し、Left/Right で値を調整し、`E` でアドレスやポートを編集し、Enter でボタンを有効化します。初期デフォルトは WiFi / 8080 で、UI は設定を保存します。モードを切り替えるときは、まず **Stop Server** を選択し、その後で該当タブに示されたモードとポートを設定します。

<Tabs defaultValue="usb" groupId="t701-vr-connection">
<TabItem value="usb" label="USB（有線）">

#### 接続と設定

ヘッドセットで開発者モードを有効にし、USB データケーブルで SDK を実行しているコンピュータに接続し、ヘッドセット内で USB デバッグを許可します。別のターミナルで接続を確認します：

```bash
adb devices
```

デバイスはステータス `device` と表示されている必要があります。`unauthorized` と表示される場合は、ヘッドセット内で承認を確認してください。Ubuntu では、`adb` がない場合は `sudo apt install adb` でインストールします。

ストリーム UI を次のように設定します：

| 設定 | 値 |
| --- | --- |
| Mode | USB |
| Force HTTPS | False |
| HTTP Host / Port | 0.0.0.0 / 8080 |
| WS Host / Port | 0.0.0.0 / 8765 |
| UDP IP / Port | 127.0.0.1 / 5005 |
| Verify Port | 5005 |

#### 起動とページのオープン

**Start Server** を選択します。プログラムは `adb reverse` を使用して、ヘッドセットのポート 8080 と 8765 をコンピュータに転送します。ヘッドセットのブラウザで次の URL を開きます：

```text
http://localhost:8080/index.html?ws=ws://localhost:8765
```

ページの WebSocket 入力を `ws://localhost:8765` に設定します。USB モードでは **HTTP / WS** を使用し、HTTPS 証明書は不要です。ここで `localhost` は USB 転送を通じてコンピュータに到達します。

#### コマンドラインからの起動（任意）

ストリーム UI を使わない場合は、SDK ルートから次のコマンドを実行します。UI から起動したサーバと同時に実行しないでください：

```bash
python Quest_controller_stream/start_stream_server.py --http-host 0.0.0.0 --http-port 8080 --ws-host 0.0.0.0 --ws-port 8765 --udp-ip 127.0.0.1 --udp-port 5005 --adb auto
```

</TabItem>
<TabItem value="wifi" label="WiFi（無線）">

#### 接続と設定

ヘッドセットと SDK を実行しているコンピュータを同じ LAN に接続します。このモードでは USB ケーブル、ADB、USB デバッグの許可は不要です。

コンピュータで LAN 上の IP を確認し、OpenSSL をチェックします：

```bash
hostname -I
openssl version
```

その LAN 上でのコンピュータの実際の IP を使用し、Docker や VPN アダプタのアドレスは使用しないでください。Ubuntu では、OpenSSL がない場合は `sudo apt install openssl` でインストールします。

ストリーム UI を次のように設定します：

| 設定 | 値 |
| --- | --- |
| Mode | WiFi |
| Force HTTPS | True |
| HTTP Host / Port | 0.0.0.0 / 8080 |
| WS Host / Port | 0.0.0.0 / 8765 |
| UDP IP / Port | 127.0.0.1 / 5005 |
| Verify Port | 5005 |
| Cert File | .certs/quest-controller.crt |
| Key File | .certs/quest-controller.key |

#### 起動とページのオープン

**Start Server** を選択します。WiFi モードでは **HTTPS / WSS** を使用します。証明書と秘密鍵がない場合、プログラムは OpenSSL を使って自己署名証明書を生成します。

UI に表示される WiFi URL をヘッドセットのブラウザで開き、コンピュータの実際の LAN IP が使われていることを確認します。たとえば、コンピュータの IP が `192.168.1.100` の場合：

```text
https://192.168.1.100:8080/index.html?ws=wss://192.168.1.100:8765
```

例の IP をコンピュータの実際の IP に置き換えてください。初回アクセス時には、ブラウザで自己署名証明書のプロンプトに対応し、ページを再読み込みします。WebSocket 入力を `wss://ACTUAL_COMPUTER_IP:8765` に設定し、`localhost` や `ws://` は使用しないでください。

`0.0.0.0` の HTTP Host と WS Host の値は待ち受けアドレスであり、ヘッドセットから開くアドレスではありません。ストリームサーバとデュアルアームコントローラが同じコンピュータ上で動作している場合、UDP の宛先は `127.0.0.1:5005` のままです。

#### コマンドラインからの起動（任意）

ストリーム UI を使わない場合は、SDK ルートから次のコマンドを実行します。UI から起動したサーバと同時に実行しないでください。`--adb never` は ADB 転送を無効にし、自動的に HTTPS / WSS を有効にします。

```bash
python Quest_controller_stream/start_stream_server.py --http-host 0.0.0.0 --http-port 8080 --ws-host 0.0.0.0 --ws-port 8765 --udp-ip 127.0.0.1 --udp-port 5005 --adb never
```

</TabItem>
</Tabs>

選択したモードで接続したら、ヘッドセットのページで **Start XR Stream** を選択します。次のステータス値を確認します：

| ページステータス | 期待される値 |
| --- | --- |
| WebSocket | Connected |
| XR | Running |
| 両方のコントローラ | Tracking |

ページは保存された WebSocket 設定を復元します。モードを切り替えた後は、入力のプロトコル、IP、ポートが選択したタブと一致していることを確認し、設定を保存してください。

</section>

<section className="section-card">

## コントローラデータの確認

コンピュータ側のストリーム UI で **Start Verify** を選択します。両方のコントローラを動かし、パケット数が増加し、姿勢とボタンのデータが入力に応じて変化することを確認します。

その後 **Stop Verify** を選択します。サーバ、選択した USB または WiFi 接続、およびヘッドセットの XR ストリームは動作させたままにします。Verify とデュアルアームコントローラは同じ UDP 5005 ポートを使用し、同時には受信できません。

| ターミナルキー | 機能 |
| --- | --- |
| `1` / `2` / `3` / `4` | Controls、Left Hand、Right Hand、Logs を開きます。 |
| `Tab` | ページを切り替えます。 |
| `Q` | ストリームサーバを停止し、UI を終了します。 |

</section>

<section className="section-card">

## デュアルアーム制御の開始

:::warning[開始前に動作範囲をクリアする]

Verify、`udp_receiver_test.py`、およびその他の UDP 5005 受信プログラムを停止します。コントローラデータを受信すると、プログラムは左アーム、続いて右アームを VR の初期姿勢に移動させます。ロボットを固定し、ペイロードを取り外し、動作範囲と戻り経路をクリアしてください。ロボットのそばに付き添い、関節やグリッパの挟み込みポイントから離れていてください。

:::

2 つ目のターミナルで、SDK ルートから次を実行します：

```bash
conda activate t701-ht
cd scripts
python t701_ht_vr_dual_cartesian_qp_control.py
```

このエントリはアーム選択メニューなしで両アームを直接制御します。左アームと右アームはそれぞれ `T701-HT_robot_param/T701-HT_left.yaml` と `T701-HT_right.yaml` を使用します。

初期動作が完了し、プログラムが制御開始メッセージを表示するまで待ってから、次の操作を行います：

| 入力 | ロボットの動作 |
| --- | --- |
| 左または右コントローラの **Squeeze** を押し続ける | 対応するアームがコントローラの姿勢に追従します。 |
| **Squeeze** を離す | 現在位置を保持します。 |
| Squeeze を押し続けながら **Trigger** を使用する | 対応するグリッパを開閉します。 |
| プログラム内で A と表示されるプライマリボタンを押す | そのアームを、この実行の初期関節角度にスムーズにリセットします。 |
| 制御用ターミナルで `Ctrl+C` を押す | アームを MIT モードでゼロ位置に戻し、モータを停止します。シャットダウンが完了するまで待ちます。 |

コントローラが終了したら、ストリーム UI で `Q` を押してサーバを停止し、終了します。

</section>

<section className="section-card">

## トラブルシューティング

| 症状 | 確認事項と対処 |
| --- | --- |
| USB ページが開かない | USB デバッグの許可、`adb devices` でのデバイスステータス `device`、およびストリームサーバが動作していることを確認します。`http://localhost:8080` を使用します。 |
| WiFi ページが開かない | ヘッドセットとコンピュータが同じ LAN 上にあることを確認します。`https://ACTUAL_COMPUTER_IP:8080` を使用し、証明書プロンプトに対応し、コンピュータがポート 8080 と 8765 への接続を許可しているか確認します。 |
| WebSocket が Connecting と Reconnecting を繰り返す | USB では Force HTTPS を無効にして `ws://localhost:8765` を使用し、WiFi では `wss://ACTUAL_COMPUTER_IP:8765` を使用します。ページが別モードの設定を復元していないか確認します。 |
| UDP 5005 をバインドできない | Verify、`udp_receiver_test.py`、またはそのポートを使用している他の受信プログラムを停止します。 |
| 起動から 10 秒以内にコントローラパケットがない | ヘッドセットで Start XR Stream を選択し、WebSocket が接続されていることを確認し、UDP の宛先を `127.0.0.1:5005` に設定します。プログラムはアームを初期化する前に終了します。 |
| 設定をリセットした後に接続モードが変わる | Reset Defaults または保存済み設定の削除により、WiFi / 8080 が復元されます。選択したタブでモードとポートを再設定してください。モードを切り替えてもポートは自動ではリセットされません。 |

</section>

<section className="section-card">

## デスクトップ UI（任意）

デスクトップ UI は `Quest_controller_stream/quest_stream_ui.py` です。任意の依存関係である `PyQt5` が必要で、別個の `.quest_stream_ui.json` 設定を使用します。USB と WiFi のプロトコルおよびアドレス要件は同じであり、デスクトップ UI 内で個別に設定します。

</section>

</div>
