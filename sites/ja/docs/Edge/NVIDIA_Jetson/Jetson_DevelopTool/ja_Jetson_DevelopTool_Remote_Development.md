---
description: Seeed Jetson DevelopTool を使用して、Jetson デバイス上の VS Code Server、Jupyter Lab、VNC リモートデスクトップ、SSH ターミナル、AI エージェントツールにブラウザからアクセスし、さらに PC ネットワーク共有と初回起動用 Jetson Init を利用できます。
title: リモート開発
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - remote development
  - VS Code Server
  - Jupyter Lab
  - VNC
  - network sharing
  - Jetson Init
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_remote_development
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/jetson_developtool_remote_development/
---

**Remote Dev** モジュールを使うと、Jetson にモニタやキーボードを接続することなく、Jetson 上で直接動作する完全な開発環境にブラウザ経由でアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-remote-dev.png" style={{width:800, height:'auto'}}/></div>

## 利用可能なツール

| ツール | アクセス方法 | 説明 |
|------|--------------|-------------|
| VS Code Server | ブラウザ | Jetson 上で動作し、ブラウザ経由でアクセスするフル機能の VS Code IDE |
| Jupyter Lab | ブラウザ | 対話的な Python ノートブック環境 |
| VNC リモートデスクトップ | ブラウザ (noVNC) または VNC クライアント | Jetson のフルグラフィカルデスクトップ |
| SSH ターミナル | インラインターミナル | DevelopTool 内から素早くターミナルにアクセス |
| AI Agent インストール | ワンクリック | Jetson 上に Claude Code、Codex、OpenClaw CLI をインストール |

## VS Code Server

1. Jetson デバイスに接続します。
2. **Remote Dev** タブで **Launch VS Code Server** をクリックします。
3. ツールが Jetson 上に `code-server` をインストールし（初回のみ）、起動します。
4. **Open in Browser** ボタンをクリックすると、Jetson に接続された VS Code が既定のブラウザで開きます。

Jetson のファイルシステム上の任意のフォルダを開き、拡張機能をインストールし、ターミナルを実行し、ローカルの VS Code と同様にコードをデバッグできます。

## Jupyter Lab

1. Remote Dev タブで **Launch Jupyter Lab** をクリックします。
2. Jupyter Lab が Jetson 上で起動し、アクセス用 URL（トークン付き）が表示されます。
3. **Open in Browser** をクリックして接続します。

## VNC リモートデスクトップ

1. Remote Dev タブで **Launch VNC** をクリックします。
2. ツールが Jetson 上に VNC サーバーを設定します（初回のみ）。
3. 組み込みの **noVNC** ブラウザビューアからアクセスするか、表示されたアドレスとポートを使って任意の VNC クライアントで接続します。

:::tip
ローカルネットワークで VNC のパフォーマンスを最大限に引き出すには、ブラウザベースの noVNC ビューアよりも、専用の VNC クライアント（例：TigerVNC）の方が高速です。
:::

## AI Agent インストール

**AI Agent** セクションでは、Jetson 上に AI コーディングアシスタントを直接インストールできます：

| エージェント | 説明 |
|-------|-------------|
| Claude Code | Anthropic の CLI コーディングエージェント |
| OpenClaw | Seeed のオープンソースエージェントフレームワーク |

目的のエージェントの横にある **Install** をクリックします。ツールが Jetson の ARM 環境向けの依存関係セットアップをすべて処理します。

---

## PC ネットワーク共有

**PC Network Sharing** モジュールを使うと、ホスト PC と Jetson デバイスを直接 Ethernet ケーブルで接続し、ホスト PC のインターネット接続を Jetson と共有できます。Jetson に Wi-Fi カードが搭載されていない場合や、ローカルルーターのない実験室環境で作業する場合に便利です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-network-share.png" style={{width:800, height:'auto'}}/></div>

### 動作概要

PC はルーターとして動作し、アクティブなインターネットインターフェース（Wi-Fi または別の Ethernet ポート）を Jetson に接続された Ethernet インターフェースへブリッジします。また、ツールはプロキシ設定を自動検出して Jetson に転送するため、`apt`、`pip`、`docker pull` などのツールが透過的に動作します。

### セットアップ

**必要なもの：**

- ホスト PC と Jetson を接続する Ethernet ケーブル
- ホスト PC にアクティブなインターネット接続（Wi-Fi または 2 つ目の Ethernet）があること

**手順：**

1. PC と Jetson の間に Ethernet ケーブルを接続します。
2. DevelopTool で **PC Network Sharing** タブを開きます。
3. **outbound interface**（PC のインターネット接続側インターフェース。例：`wlan0` や `eth0`）を選択します。
4. **inbound interface**（Jetson に接続されている Ethernet ポート。例：`eth1`）を選択します。
5. **Enable Sharing** をクリックします。
6. ツールが NAT を設定し、DHCP 経由で Jetson に IP を割り当て、Jetson の IP アドレスを表示します。

有効になると、Jetson は PC 経由でフルなインターネットアクセスを利用できます。

:::tip
企業プロキシの背後にいる場合は、**Auto Proxy Forward** トグルを有効にしてください。ツールが PC のプロキシ設定を検出し、Jetson セッション上の `http_proxy` / `https_proxy` 環境変数を自動的に設定します。
:::

### ネットワーク共有の無効化

**Disable Sharing** をクリックするとブリッジが停止し、PC の元のネットワーク構成が復元されます。

---

## Jetson Init

**Jetson Init** モジュールは、Jetson にモニタやキーボードを接続することなく、NVIDIA の初回起動セットアップ（OEM 設定）を進められるガイド付きシリアルターミナルウィザードを提供します。新しくフラッシュした Jetson デバイスを初期化する推奨方法です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-jetson-init.png" style={{width:800, height:'auto'}}/></div>

### Jetson Init を使うタイミング

- Jetson デバイスに新しい JetPack イメージを書き込んだ直後
- Jetson にディスプレイが接続されておらず、初回の OOBE（Out-of-Box Experience）を完了する必要がある場合
- 初回起動時にシステムのホスト名、ユーザー名、パスワード、タイムゾーン、Wi-Fi ネットワークを設定する場合

### セットアップ

**必要なもの：**

- Jetson のデバッグシリアルポート（通常はキャリアボード上の 3 ピンまたは 4 ピンヘッダ）に接続された USB-シリアル（UART）ケーブル
- ホスト PC 上で動作している DevelopTool

**手順：**

1. ホスト PC と Jetson の UART デバッグポートの間にシリアルケーブルを接続します。
2. Jetson の電源を入れます。
3. DevelopTool で **Jetson Init** タブを開きます。
4. 正しい **serial port**（例：Windows では `COM3`、Linux では `/dev/ttyUSB0`）を選択し、ボーレートを **115200** に設定します。
5. **Connect** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-jetson-init.png" style={{width:800, height:'auto'}}/></div>

6. ウィザードが初回起動プロンプトを検出し、次の項目について案内します：
   - NVIDIA ライセンス契約への同意
   - システム言語とロケールの設定
   - 既定のユーザー名とパスワードの作成
   - ネットワークの設定（Ethernet DHCP または Wi-Fi）
   - ホスト名とタイムゾーンの設定
7. セットアップが完了すると、Jetson は再起動し、割り当てられた IP アドレスが表示されます。

:::tip
Jetson Init が完了したら、すぐに [Device Management](/ja/jetson_developtool_device_management) に切り替えるか、上記の **Remote Dev** ツールを表示された IP アドレスで利用できます。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
