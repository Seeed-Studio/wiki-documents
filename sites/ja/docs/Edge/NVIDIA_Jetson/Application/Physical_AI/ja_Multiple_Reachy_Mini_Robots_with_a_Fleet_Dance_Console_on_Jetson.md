---
description: 複数の Jetson デバイス上で Docker 化された Reachy Mini ダンスサービスをデプロイし、ノート PC ベースの Web UI からフリート全体を制御します。
title: Jetson 上のフリートダンスコンソールで複数の Reachy Mini ロボットを制御する
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_reachy_fleet_dance
last_update:
  date: 03/25/2026
  author: Youjiang
keywords:
  - Jetson
  - Reachy Mini
  - Docker
  - Robotics
  - Web UI
  - Fleet Control
createdAt: '2026-03-25'
url: https://wiki.seeedstudio.com/ja/ai_robotics_reachy_fleet_dance/
updatedAt: '2026-03-25'
---

# Jetson 上のフリートダンスコンソールで複数の Reachy Mini ロボットを制御する

## はじめに

この Wiki では、Reachy Mini と Jetson デバイスを使ってマルチロボットのダンスデモを構築する方法を説明します。

このプロジェクトでは、各 Jetson が Docker 内でローカルの Reachy Mini ダンスサービスを実行し、Web UI と REST API の両方を公開します。別のノート PC 上で動作するフリートコントロールダッシュボードは、同じ LAN 上の複数の Jetson の IP を検出し、接続されているすべての Reachy Mini ロボットに同じダンスコマンドを同時にブロードキャストできます。

最終的な結果として、次のことができるデモになります：

- Jetson デバイス 1 台につき Reachy Mini を 1 台動かす
- ノート PC 上で中央のブラウザダッシュボードを開く
- 複数の Jetson の IP アドレスを動的に追加する
- すべてのロボットのダンスを一括で開始・停止する
- フリート全体の BPM、ダンススタイル、エネルギーを変更する
- すべてのロボットに対して一度にアクセントおよびセンターアクションをトリガーする

:::note
このプロジェクトは 2 つのレイヤーで構成されています：

- `reachy_bpm_dancer`: 各 Jetson 上で動作する単一ロボットサービス
- `reachy_fleet_control`: ノート PC 上で動作する中央フリートダッシュボード
:::

## 目次

1. ハードウェアの準備
2. システムアーキテクチャ
3. 各 Jetson を Reachy Mini 用に準備する
4. Docker 化された Reachy Mini ダンスサービスをデプロイする
5. ノート PC 上でフリートコントロールダッシュボードを実行する
6. 複数の Reachy Mini ロボットを制御する
7. REST API リファレンス
8. トラブルシューティング
9. 参考資料

## ハードウェアの準備

### デバイス一覧

- 同一 LAN 上の Windows ノート PC または制御用 PC 1 台
- Jetson デバイス 1 台以上
- 各 Jetson に USB 接続された Reachy Mini 1 台
- LAN 接続用のネットワークルーターまたはスイッチ 1 台

このワークフローは、ターゲットシステムが Docker を実行でき、USB シリアル経由で Reachy Mini にアクセスできる限り、Seeed reComputer Jetson シリーズデバイスを含む Jetson ベースのエッジデバイスに適しています。

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Mini J501 Kit </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110839-nvidia-jetson-orin-nano-developer-kit.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://huggingface.co/reachy-mini">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

### 配線と接続

各ロボットノードについて：

- Reachy Mini を USB で Jetson に接続する
- Jetson の電源を入れる
- ノート PC とすべての Jetson デバイスが同じ LAN 上にあることを確認する

### 電源投入チェックリスト

各 Jetson 上で、Reachy Mini のシリアルデバイスが見えていることを確認します：

```bash
ls /dev/ttyACM*
```

`/dev/ttyACM0` のようなデバイスが見えていれば、ハードウェアリンクは準備完了です。

## システムアーキテクチャ

このデモはハブ＆スポーク型の設計を採用しています：

- 各 Jetson が 1 つの Reachy Mini ダンスコンテナをホストする
- 各コンテナはポート `8042` でローカルロボットの Web UI と REST API を公開する
- ノート PC はポート `8060` でフリートコントロール Web アプリケーションを実行する
- ノート PC はすべての Jetson API をポーリングし、同じ制御コマンドをオンラインのすべてのロボットにファンアウトする

:::info
Jetson 側サービスは、低レイテンシのシンボリックモーション制御向けに設計されています。軽量な `set_target()` ループを使用し、マイクやカメラ入力には依存しません。
:::

推奨ネットワーク構成：

```text
Laptop (Fleet Control, port 8060)
    |- Jetson A -> Reachy Mini A -> http://<jetson-a-ip>:8042
    |- Jetson B -> Reachy Mini B -> http://<jetson-b-ip>:8042
    |- Jetson C -> Reachy Mini C -> http://<jetson-c-ip>:8042
```

## 各 Jetson を Reachy Mini 用に準備する

Reachy Mini を制御するすべての Jetson 上で、次の手順を実行します。

```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
sudo systemctl daemon-reload && sudo systemctl restart docker
```

## Docker 化された Reachy Mini ダンスサービスをデプロイする

### Docker イメージをダウンロードして実行する
[ここ](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgB5HfoKnB8eSa-ERVUZ0J9hAUT572CBk0tShhJdqwQ_qMo?e=g2DHYe)から Docker イメージをダウンロードします。

`reachy-bpm-dancer_20260323_linux-arm64.tar.gz` のようなパッケージ化されたイメージを受け取った場合：

```bash
docker load -i reachy-bpm-dancer_20260323_linux-arm64.tar.gz

docker run -d \
  --name reachy-bpm-dancer \
  --restart unless-stopped \
  -p 8042:8042 \
  -p 8000:8000 \
  --device /dev/ttyACM0:/dev/ttyACM0 \
  -e REACHY_SERIAL_PORT=/dev/ttyACM0 \
  reachy-bpm-dancer:20260323-arm64
```

### Jetson 側サービスを確認する

ローカルの単一ロボット UI を開きます：

```text
http://<jetson-ip>:8042/
```

API ドキュメントを開きます：

```text
http://<jetson-ip>:8042/docs
```

ターミナルからロボットのステータスを確認します：

```bash
curl http://127.0.0.1:8042/api/status
```

ロボットのダンスを開始します：

```bash
curl -X POST http://127.0.0.1:8042/api/dance/start \
  -H "Content-Type: application/json" \
  -d '{"bpm":124,"style":"anthem","energy":1.15}'
```

ロボットを停止します：

```bash
curl -X POST http://127.0.0.1:8042/api/dance/stop
```

:::note
Jetson 側サービスは次のものを公開します：

- ポート `8042` 上の Web UI
- ポート `8042` 上の REST API
- ポート `8000` 上の Reachy Mini デーモン
:::

## ノート PC 上でフリートコントロールダッシュボードを実行する

フリートコントロールダッシュボードはノート PC 上で別途動作し、1 つのブラウザからすべての Jetson ノードを管理できます。

### ローカルの Python 環境を準備する

ノート PC 上で：

```powershell
git clone https://github.com/yuyoujiang/reachy_fleet_control
cd reachy_fleet_control
python -m venv .venv
.\.venv\Scripts\python -m pip install -e .
```

:::info
このデモでは Windows を使用しています。PC が別のオペレーティングシステムを実行している場合は、対応するコマンドを使用して環境をインストールしてください。
:::

### フリートコントロール Web UI を起動する

```powershell
.\.venv\Scripts\python -m uvicorn reachy_fleet_control.main:app --host 0.0.0.0 --port 8060
```

その後、次を開きます：

```text
http://127.0.0.1:8060/
```

または、LAN 上の別のデバイスからアクセスします：

```text
http://<laptop-ip>:8060/
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_fleet_control/fleet_ui.png" />
</div>

### フリートダッシュボードの機能

ダッシュボードは次のことをサポートします：

- Jetson の IP、`host:port`、またはフル URL の追加
- オフラインまたは未使用の Jetson ノードの削除
- ロボットごとのオンラインステータスとレイテンシの監視
- 登録済みのすべての Reachy Mini へのダンスコマンドのブロードキャスト
- デバイスリストをローカルの状態ファイルに保持

デバイスリストは Windows 上で次の場所にローカル保存されます：

```text
C:\Users\<username>\.reachy_fleet_control\fleet_state.json
```

## 複数の Reachy Mini ロボットを制御する

両方のレイヤーが動作していれば、マルチロボットのワークフローはシンプルです。

### ステップ 1. Jetson デバイスを追加する

Fleet Control ページで：

- `192.168.1.130` のような Jetson の IP を入力する
- 必要に応じてラベルを追加する
- **Add Device** をクリックする

LAN 上のすべての Jetson について同じ手順を繰り返します。

### ステップ 2. オンラインステータスを確認する

各デバイスカードには次の情報が表示されます：

- エンドポイント
- ラベル
- オンラインまたはオフライン状態
- 現在の BPM
- ビートカウント
- レイテンシ

デバイスがオフラインの場合でも、ダッシュボードはリスト内に保持し、復帰するまでポーリングを続けます。

### ステップ 3. ダンスコマンドをブロードキャストする

共有コントロールを使用して、すべてのロボットを一度に更新します：

- **Start Dance**
- **Pause Dance**
- **Accent All**
- **Center All**
- BPM プリセット：`82`、`124`、`135`
- スタイル選択：`groove`、`bounce`、`sway`、`anthem`
- エネルギースライダー

### ステップ 4. フリートを観察する

ブロードキャストが成功すると：

- オンラインのすべての Reachy Mini ロボットが同じ希望 BPM に切り替わる
- 選択したスタイルがすべてのロボットに適用される
- アクティブなデバイス数がダッシュボード上で更新される
- 各 Jetson はローカルでモーション生成を継続するため、小さなネットワークジッタではダンスループは停止しない

## 効果デモ

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NWoJMN_IWH0" title="Reachy Fleet Control" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## REST API リファレンス

このプロジェクトは 2 つの API レイヤーを公開します。

### Jetson 側単一ロボット API

ベース URL：

```text
http://<jetson-ip>:8042
```

利用可能なエンドポイント：

- `GET /api`
- `GET /api/status`
- `GET /api/styles`
- `GET /api/presets`
- `POST /api/settings`
- `POST /api/dance/start`
- `POST /api/dance/stop`
- `POST /api/dance/accent`
- `POST /api/dance/center`

例：

```bash
curl -X POST http://<jetson-ip>:8042/api/dance/start \
  -H "Content-Type: application/json" \
  -d '{"bpm":135,"style":"anthem","energy":1.2}'
```

### ノート PC 側フリート API

ベース URL：

```text
http://<laptop-ip>:8060
```

利用可能なエンドポイント：

- `GET /api`
- `GET /api/fleet/status`
- `POST /api/fleet/devices`
- `DELETE /api/fleet/devices?endpoint=<host:port>`
- `POST /api/fleet/settings`
- `POST /api/fleet/dance/start`
- `POST /api/fleet/dance/stop`
- `POST /api/fleet/dance/accent`
- `POST /api/fleet/dance/center`

Jetson デバイスを追加します：

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/devices" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"target":"192.168.1.130","label":"Stage Left"}'
```

すべてのロボットを起動します：

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/dance/start" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"bpm":124,"style":"anthem","energy":1.15}'
```

すべてのロボットを停止します：

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/dance/stop" `
  -Method Post
```

## トラブルシューティング

### Reachy Mini が Jetson に認識されない

USB シリアルノードが存在するか確認します：

```bash
ls /dev/ttyACM*
```

必要に応じて、Docker のデバイスマッピングと `REACHY_SERIAL_PORT` の値を更新してください。

### ポート `8042` または `8060` がすでに使用されています

サービスを再起動する前に、古いプロセスを停止するか、別のポートを選択してください。

### フリートダッシュボードでデバイスがオフラインと表示される

次の点を確認してください：

- ノート PC と Jetson が同じ LAN 上にある
- Jetson サービスが実行中である
- Jetson のファイアウォールがポート `8042` をブロックしていない
- ダッシュボードに入力した IP アドレスが正しい

### API は応答するがロボットが動かない

Jetson 上のコンテナログを確認します：

```bash
docker compose logs -f
```

また、次の点も確認してください：

- Reachy Mini が Jetson に接続されている
- シリアルデバイスパスがコンテナ設定と一致している
- ロボットが他のプロセスに占有されていない

## 参考情報

- [Jetson での Docker セットアップ](https://www.jetson-ai-lab.com/tutorials/ssd-docker-setup/)
- [Reachy Mini GitHub リポジトリ](https://github.com/pollen-robotics/reachy_mini)
- [Reachy Mini AGENTS.md](https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
