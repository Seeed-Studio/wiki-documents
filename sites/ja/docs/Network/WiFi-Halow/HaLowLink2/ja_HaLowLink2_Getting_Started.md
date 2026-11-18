---
description: HaLowLink 2 Wi-Fi HaLow Gateway のスタートアップガイド一式 — ハードウェア接続、Web インターフェース、ネットワークモード、2 台構成の HaLow リンクセットアップ、高度な設定、ファームウェア保守、よくある質問、トラブルシューティング
title: HaLowLink 2 入門ガイド
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - 入門ガイド
  - アクセスポイント
  - エクステンダ
  - ペアリング
  - OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_getting_started
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/ja/halowlink2_getting_started/
---

# HaLowLink 2 入門ガイド

<!-- Internal note: all procedures on this page are sourced from the official Morse Micro HaLowLink User Guide, which states it applies to both HaLowLink 1 and HaLowLink 2. Items not yet re-verified on Seeed retail hardware carry internal "Requires Verification" comments — confirm them, with screenshots and the tested firmware version recorded, before publication. No simulated results anywhere on this page. -->
<!-- Internal note (source check 2026-11-11, official HaLowLink User Guide PDF, 58 pp.): default state = "Router with a HaLow Access Point" — §1.3.1 p.9 ("This is the default mode of operation"), §2.5 p.13 ("When you first power on your HaLowLink it will be a Router with a HaLow Access Point"); factory reset returns to it — §5 p.24. USB-C carries Ethernet: §2.1.3 p.10 (initial-connection method), §6.4 p.28 ("A new Ethernet adapter should appear on your computer… DHCP Client"), §12.2.1 Table 6 p.44 (USB-C row: computer gets a 192.168.12.x IP and reaches https://192.168.12.1). Spec-table wording agreed by Seeed product page and Product Brief Rev 9 ("1x USB-C port (power and Ethernet data)"). -->

開封から長距離 HaLow リンクの動作までを 4 段階で説明します：ハードウェアを接続し、Web UI にログインし、ネットワークモードを選択し、2 台をペアリングします。仕様と機能については [Introduction](/ja/halowlink2_introduction) を参照してください。

本ガイドの Web UI スクリーンショットは **HaLowLink software 2.11.8** で取得したものです。メニュー名やカードレイアウトは、他のファームウェアバージョンでは異なる場合があります。

<!-- Video Required: unboxing + first login + two-device pairing walkthrough (Optional, P1). To be produced by Seeed; embed here when available. -->

## 準備

### 必要なもの

- **HaLowLink 2 を 1 台**（ルータ / アクセスポイント）、または長距離リンク用に **2 台**（エクステンダ付き）（[2 台構成](#2-台の-halowlink-2-デバイスを接続する)）
- 小売パッケージ同梱物：電源アダプタ、USB-C - USB-C ケーブル、Ethernet ケーブル、アンテナ、スタンド
- セットアップ用のコンピュータまたはスマートフォン。必要に応じて、インターネット上流用の既存ルータ

:::tip
底面ラベルには、**Web UI のユーザー名とパスワード**、およびデフォルトの **2.4 GHz Wi-Fi SSID / パスワード**（と QR コード）が記載されています。ログインにはこれらが必要です。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-lan-connection.jpg" alt="HaLowLink 2 on its stand with the antenna, a LAN Ethernet cable and the USB-C power cable connected" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>デバイス側：SMA コネクタにアンテナ、LAN ポートに Ethernet ケーブル、USB-C 電源ケーブルを接続した状態。写真では WAN ポートは未接続で、コンピュータ側は写っていません。</em></p>

### ハードウェアを接続する

1. 電源を入れる**前に**、SMA コネクタに **アンテナ** をねじ込んで取り付けます。
2. **付属の電源アダプタ**で **USB-C** から給電します。USB-A - USB-C アダプタは使用しないでください。
3. コンピュータを接続します — 次のいずれかの方法を選びます：
   - **LAN ポートへの Ethernet ケーブル** — 初回セットアップに推奨
   - **2.4 GHz Wi-Fi** — SSID とパスワードはラベルに記載（起動後に接続）
   - **USB-C - USB-C ケーブル** — デバイスがコンピュータ上のネットワークアダプタとして認識されます
4. 下流側でインターネット接続が必要な場合は、ルータを **WAN** ポートに接続します。

**期待される結果：** Status LED が **緑点灯** — デバイスは工場出荷時デフォルトの **Wi-Fi HaLow アクセスポイント付きルータ構成** で動作しています。

## Web UI へアクセスする

1. ブラウザを開き、次のアドレスにアクセスします：

   ```text
   https://192.168.12.1
   ```

   管理インターフェースは **HTTPS のみ** です。`http://` と入力しても自動的にリダイレクトされます。
2. 初回アクセス時には **証明書警告** が表示されます — デバイスが自己署名証明書を使用しているためです。これを許可してください。接続自体は暗号化されています。
3. **デバイスラベルに印字されているユーザー名とパスワード** でログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-login.png" alt="HaLowLink 2 web UI login page with username and password fields" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>ログインページ：デバイスラベルに記載されたユーザー名とパスワードを入力し、Log in を選択します。</em></p>

4. **Home ページ** が開き、次のカードが表示されます：**Access Point (HaLow)**、**Access Point (2.4 GHz)**、**Local Network**、**Uplink (Ethernet)**、**Mode**、**Network Interfaces**、**System**。ファームウェアバージョンは **左下** に表示されます。**System** カードには、モデル、OpenWrt バージョン、およびアップグレード通知が表示されます（[Firmware](#ファームウェア更新と-工場出荷時リセット)）。

**期待される結果：** Home ページが読み込まれ、左下にファームウェアバージョンが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-home-2.11.8.png" alt="HaLowLink 2 web UI Home page on software 2.11.8" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Home ページ（2.11.8）、工場出荷時デフォルト：Mode カードには "Router with HaLow Access Point" と表示され、接続クライアント数は 0、Uplink (Ethernet) は Disconnected（WAN ケーブル未接続）です。これはレイアウトを示すものであり、HaLow リンクが動作している状態ではありません。</em></p>

## ネットワーク設定

HaLowLink 2 は次の 3 つの構成のいずれかで動作します：

- **Router** / **Access Point** — どちらも **HaLow AP** をホストしますが、クライアントが IP アドレスを取得する場所が異なります。**Wizard** で設定します。
- **Extender** — HaLow クライアントリンク経由でその AP に参加します。物理 **Mode ボタン** で設定します。

緑点灯の Status LED だけでは、Router と Access Point を区別できません。

| モード | Status LED | クライアントの IP アドレス取得元 | 管理アドレス | 使用シーン |
|:----:|:----:|:----|:----|:----|
| **Router**（工場出荷時デフォルト） | 緑点灯 | デバイス自身 — `192.168.12.x`、独自の DHCP サーバ、NAT、ファイアウォール | `https://192.168.12.1` | 独立した HaLow ネットワークや分離されたテスト環境 |
| **Access Point**（推奨） | 緑点灯 | 既存ルータの DHCP サーバ — NAT なし | 上流から割り当てられた IP に加え、LAN ポート側の `https://192.168.12.1` | 既存 LAN に HaLow デバイスを追加し、すべての機器同士が通信できるようにする場合 |
| **Extender** | アクア色点灯 | HaLow リンク越しの、Access Point の背後にあるネットワーク | なし — Access Point 経由で管理 | 2 台構成展開における遠隔側ユニット |

デバイスが HaLow AP をホストしている場合（Router または Access Point 構成）：

- デバイスが別の上流 IP を取得した後でも、**`192.168.12.1` の管理アドレスは LAN ポート（および USB-C）で利用可能なまま** です。例外：ペアリング済み Extender、または [完全ブリッジ構成](#静的-ip-と-dhcp)。
- **Wizard はデフォルト構成から開始** します — Wizard 外で行った変更は、Wizard を実行すると上書きされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-wizard-2.11.8.png" alt="HaLowLink 2 Wizard page with the HaLow Mode and Network Mode options on software 2.11.8" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Wizard（2.11.8）。HaLow Mode：Access Point、EasyMesh Controller、802.11s Mesh。Network Mode：HaLow デバイスが IP を取得する場所 — スクリーンショットではデフォルト選択（このデバイスのローカルネットワーク）が表示されています。推奨される既存ルータ利用のオプションは 2 番目のラジオボタンです。変更は Save &amp; Apply で反映されます。</em></p>

一時的な Status LED の状態：緑またはアクア色の点滅 = 起動中、黄色点滅 = 工場出荷時リセット処理中、黄色点灯 = ブートローダ（[Recovery](#ファームウェア更新と-工場出荷時リセット)）、**青点滅 = ファームウェア更新中 — 電源を切らないでください**。

### Router モード（デフォルト）

出荷時の状態では、デバイスはルーティングを行います：独自の `192.168.12.x` サブネット、DHCP サーバとファイアウォール、上流としての **WAN** ポート。設定は不要です。Web UI はデバイス自身のネットワーク（LAN、USB-C、2.4 GHz Wi-Fi、HaLow）からのみ応答し、WAN 側からは決して応答しません。

### Access Point モード（推奨）

このモードを使用すると、HaLow デバイスを既存ネットワークの一員として扱うことができます：

1. **WAN** ポートをルータにケーブル接続します。Home ページで、**Uplink (Ethernet)** に IP が割り当てられていることを確認します。
2. **Wizard** を開きます。*"Wi-Fi HaLow devices will get an IP on your existing router's network"*（*(Recommended)* と表示）を選択します。

**期待される結果：** HaLow クライアントはルータから IP を取得し、LAN 上のすべてのデバイスに到達できます。Web UI は上流アドレスと、LAN ポート側の `https://192.168.12.1` の両方で引き続きアクセス可能です。

### Extender モード

Extender モードは、2 台構成展開における *遠隔側* ユニット用です。物理 **Mode ボタン** で切り替えます — Web UI は不要です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mode-button.jpg" alt="Mode button on the side of the HaLowLink 2 enclosure" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>筐体側面の通気スリットの間にある Mode ボタン。電源スイッチではありません。</em></p>

1. 電源を入れます。Status LED が点灯（緑またはアクア色）するまで待ちます。
2. **Mode ボタンを押し続けます。** Status LED が **緑のゆっくり点滅**、続いて **アクア色の高速点滅** に変わります。アクア色の高速点滅になったらボタンを離します。
   （緑のゆっくり点滅中に離すと、代わりに [工場出荷時リセット](#ファームウェア更新と-工場出荷時リセット) が実行されます。）
3. Status LED が **アクア色点灯** になるまで待ちます。

**期待される結果：** アクア色点灯 = Extender モード。ユニットはペアリングが必要な状態です（[次のセクション](#2-台の-halowlink-2-デバイスを接続する)）。ペアリング後は独自の Web UI を持たず、Access Point 経由で管理します。LAN、WAN、USB-C、および 2.4 GHz Wi-Fi はすべて拡張ネットワークを提供します。

## 2 台の HaLowLink 2 デバイスを接続する

ユニット #1 = ルータの近くに置く **HaLow Access Point**。ユニット #2 = 遠隔地に置く **Extender**。Extender に接続されたものは何であっても — Ethernet、USB-C、2.4 GHz Wi-Fi — サブ 1 GHz HaLow リンク経由であなたのネットワークに参加します。すべてのアプリケーションシナリオは、この手順を基盤としています。

### ネットワークトポロジ

```text
[ Router / LAN ] --Ethernet(WAN)-- [ HaLowLink 2 #1: HaLow AP (green LED) ]
                                        )))  Wi-Fi HaLow link ( sub-1 GHz )  (((
[ Remote devices ] --Ethernet/USB-C/2.4 GHz Wi-Fi-- [ HaLowLink 2 #2: Extender (aqua LED) ]
```

<!-- Image Required: verified two-device topology diagram with real photos. Priority P1. -->

### デバイスをペアリングする

2 台のユニットを準備します：

1. 以前に設定したユニットですか？両方をデフォルト状態から開始するため、まず[ファクトリーリセット](#firmware-update-and-factory-reset)してください。
2. ユニット #1 = ルーターの近くに置く**アクセスポイント**：WAN ポートをルーターに有線接続し、ウィザードを推奨オプションで実行します（[手順](#access-point-mode-recommended)）。Status LED が緑の点灯。
3. ユニット #2 = 遠隔地に置く**エクステンダー**（[手順](#extender-mode)）。Status LED がアクア色の点灯。
4. 両方とも同じファームウェアですか？ユニット #2 がエクステンダーモードに入り Web UI にアクセスできなくなる**前に**、各 Home ページ左下のバージョンを確認します。

<!-- Requires Verification (internal): confirm whether units from different regional variants can pair, and whether HaLowLink 1 and HaLowLink 2 interoperate. Not stated in the official guide — do not publish an answer until confirmed with Morse Micro or on hardware. -->

次にペアリングします — プッシュ設定で、認証情報を入力する必要はありません：

1. **アクセスポイント**側：Mode ボタンを押して**すぐに離します**。Wi-Fi HaLow LED がゆっくり点滅を開始します。
2. **エクステンダー**側：Mode ボタンを押して**すぐに離します**。こちらの Wi-Fi HaLow LED もゆっくり点滅を開始します。
3. 認証情報の交換が完了するまで待ちます（通常は数秒）。

**期待される結果：** エクステンダーの Wi-Fi HaLow LED が**紫の点灯**になります — 認証情報を受信し、リンクが接続された状態です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-led-indicators.jpg" alt="Front of the HaLowLink 2 showing the labelled Status, Wi-Fi HaLow and 2.4 GHz LEDs" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>ラベル付きの 3 つの前面 LED。ここでは：Status がアクア色 + Wi-Fi HaLow が紫 = ペアリング済みエクステンダー。静止画では色のみが分かり、点滅パターンは分かりません。</em></p>

ペアリングに失敗しましたか？両方の HaLow LED が**120 秒間高速点滅**します — セキュリティの再試行待ち時間です。両方のユニットで点滅が止むまで待ってから、手順 1 からやり直してください。

:::note
アクセスポイントが **EasyMesh Controller** として動作している場合、ペアリングされたエクステンダーは自動的に EasyMesh Agent になります（メッシュ：**EU および UK では非対応**。必要になることはまれです）。手動で認証情報を設定する場合：エクステンダーをファクトリーリセットし、`https://192.168.12.1` の設定ポータルを使用します。詳細：公式の [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) を参照してください。
:::

## 接続を確認する

1. **アクセスポイントの Home ページ → Connected Devices：** ここにエクステンダーと、その背後にあるデバイスが表示されます — カードをクリックすると信号強度が確認できます。
2. **エクステンダー側：** Wi-Fi HaLow LED が**紫の点灯**になっていること（紫の点滅 = トラフィックのアクティビティ）。
3. **テスト用デバイスをエクステンダーに接続します** — Ethernet、USB-C、または 2.4 GHz Wi-Fi。Wi-Fi の認証情報は**アクセスポイントではなく、エクステンダー本体のラベル**に記載されています。
4. **その IP アドレスを確認します：** DHCP で割り当てられます — 推奨構成では、メインルーターからのアドレスです（ルーターのリーステーブルを参照）。
5. テストデバイスからルーターまたは他の LAN ホストに対して **ping** を実行するか、アクセスポイントの Web UI で **Network → Diagnostics** を使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-associated-client.jpg" alt="Expanded Access Point (HaLow) card on the Home page listing one associated HaLow client with signal and RX/TX rates" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>AP の Home ページで展開された Access Point (HaLow) カード：関連付けられた HaLow クライアントが 1 台（ペアリング済みエクステンダー）で、信号は −32 dBm。RX/TX の値は UI が報告する無線リンクレートであり、アプリケーションの実効スループットではありません。</em></p>

**期待される結果：** テストデバイスはメイン LAN の IP アドレスを保持し、HaLow リンク経由でネットワークに到達できます。

<!-- Resolved 2026-11-11: screenshot inserted above. The device owner confirmed it shows the successful AP–Extender link and approved publishing the client MAC visible in it (0C:BF:74:00:50:AC). Same screen records firmware context: OpenWrt 23.05.6, hostname halowlink2-74e7, channel 28 (916.0 MHz, 8 MHz), WPA3 SAE. -->

## 高度な設定

ウィザード以外の機能として、**Quick Config**（一般的な設定を、図でリアルタイム表示）と **Advanced Config**（インターフェース、無線、ファイアウォール、システム、パッケージ、ターミナルへの詳細アクセス）があります。Advanced Config を有効にすると、**Unsaved Changes** インジケーターが、適用前に各変更によって生成される正確な `uci` コマンドをプレビュー表示します。

:::caution
誤ったネットワーク設定を行うと、Web UI にアクセスできなくなる可能性があります。救済手順：LAN または WAN ポートに接続したコンピュータで、静的 IP `10.22.121.110`（ネットマスク `255.255.255.254`、または OS が /31 を設定できない場合は `255.255.255.0`）を設定します。デバイスは常に **`https://10.22.121.111`** で応答します。最終手段： [ファクトリーリセット](#firmware-update-and-factory-reset) を実行します。
:::

### 無線設定

- **Quick Config → Wireless** で SSID、パスワード、チャネル、帯域幅を設定します。
- 帯域幅は 1 / 2 / 4 / 8 MHz です：広いほどスループットが高くなり、狭いほど到達距離とロバスト性が向上します。
- **規制リージョンはロックされています。** チャネル、帯域幅、送信電力はリージョン別バリアントに従います（EU/UK：14 dBm、日本：16 dBm、ハードウェア能力：最大 26 dBm）。EU および UK ではメッシュは利用できません。デバイスは販売されたリージョン内でのみ使用してください。
- 電波が混雑していますか？**Status → Channel Analysis**（Advanced Config）がより静かなチャネルを見つけ、**Status → Realtime Graphs** がリンク品質をリアルタイム表示します。

<!-- Requires Verification (internal): capture the actual Quick Config → Wireless options on retail firmware (TX power exposure, bandwidth dropdown per region) before adding screenshots. -->

### 固定 IP と DHCP

- **Quick Config → Network Interfaces** で、各論理インターフェースを固定 IP（必要に応じて DHCP サーバー付き）または DHCP クライアントに設定します。同じネットワークに属するポートは自動的にブリッジされます。変更は **Save & Apply** で反映されます。
- **完全ブリッジ型アクセスポイント（上級者向け）：** LAN、2.4 GHz、USB インターフェースを `lan` ネットワークから `wlan` に移動し、`192.168.12.1` の管理用サブネットを分離しない構成にします。**上流側から割り当てられたアドレス**（`192.168.12.1` ではない）から実行するか、**Apply Unchecked** を使用してください — そうしないと自動的に元に戻ります。詳細：公式の [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) を参照してください。
- CLI：`uci set … && uci commit` の後に `reload_config` を実行します（再起動は不要）。`logread -l 100 -f` でログを追跡します。

### SSH と診断

- **SSH はデフォルトで無効です。** **Advanced Config → Administration → SSH Access** で有効化し、ラベルに記載された認証情報でログインします。**Services → Terminal** はブラウザベースのコンソールです（プレーン HTTP のみ — ブラウザの警告リンクを進んでください）。
- **Network → Diagnostics** では ping、traceroute、arp-scan、iperf3 を実行でき、使用された正確なコマンドも表示されます。
- **Services → Range Test**（Advanced Config）は 2 台の HaLowLink デバイス間で iperf3 を自動実行します：両方を同じファームウェアにし、ドロップダウンからリモートユニットを選択し、その**ラベルパスワード**を入力して Start Test を押します。結果は CSV/JSON としてエクスポートできます。CLI の追加ツール：`morse_cli`（HaLow チップへの低レベルアクセス）と `wavemon`（信号モニタ）。

:::caution
Range Test の結果は**揮発性**です — 再起動すると削除されるため、先にエクスポートしてください。約 40 Mbps の UDP **かつ** 900 Mbps 以上の TCP という結果は、テストが **HaLow リンクではなく Ethernet 経由**で実行されたことを意味します：デバイスの位置を調整して再テストしてください。
:::

<!-- Requires Verification (internal): run a real Range Test on Seeed hardware and capture screenshots + a CSV export. Real results only — never publish throughput numbers that were not captured from a real test. -->

### ファームウェア更新とファクトリーリセット

**ファームウェアを確認して更新します。** インストール済みバージョンは Home ページの**左下**に表示されます。オンライン時には、**System** カードにアップグレード通知（例：*Upgrade to 3.2.3 available*）が表示されます — これはインストールするまで単なる通知です。サイドバーの **Upgrade** ページからインストールします：自動アップグレード（公式アップデートサーバーからダウンロード；インターネット接続が必要）またはファイルの手動アップロード。アップデート中は Status LED が**青く点滅します — 電源を切らないでください**。

<!-- Requires Verification (internal): confirm whether Seeed will distribute firmware separately from the Morse Micro servers; only official Morse Micro / Seeed Studio download sources may ever be linked here. -->

**ファクトリーリセット。** デバイスをデフォルトの **Wi-Fi HaLow アクセスポイント付きルーター構成**（緑の点灯）に戻します：

1. 電源を入れます。Status LED が点灯状態（緑またはアクア）になるまで待ちます。
2. **Status LED がゆっくり緑点滅を始めるまで Mode ボタンを押し続け、そのタイミングで離します。**（すぐにアクア色になるまで押し続けると、代わりにエクステンダーモードに入ります。）
3. LED が短時間黄色に点滅し、その後**緑の点灯**になれば完了です。`https://192.168.12.1` に再度アクセスし、ラベルの認証情報でログインします。

**リカバリ。** アップデート中に電源が失われるとファームウェアが破損することがあり、その場合 Status LED は**黄色の点灯**のままで、デバイスは通常起動しません。リカバリはブートローダー経由で行います — 公式 [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) の「Recovering From Failed Updates」セクションに厳密に従い、実行前に Seeed サポートへ連絡してください。

<!-- Requires Verification (internal): the full bootloader recovery procedure (User Guide §14.1: hold Mode while powering on → yellow + 5 white blinks → release → static IP 192.168.12.2/24 on the PC → http://192.168.12.1 → upload firmware → 10+ min LED sequence) is deliberately NOT published as executable steps until it has been reproduced on Seeed retail hardware. The previous full transcription is kept in D:\SeeedWiki\notes\halowlink2\old-drafts\. -->

## FAQ

### Wi-Fi HaLow とは？

Wi-Fi HaLow（IEEE 802.11ah）は、サブ 1 GHz 帯で動作する Wi-Fi で、長距離と低消費電力向けに設計されています。HaLowLink 2 では、見通し距離で最大 1 km、2.4 GHz Wi-Fi よりも優れた障害物透過性を持つ一方で、リンクごとのデータレートは低くなります。

### HaLowLink 2 デバイスは 2 台必要ですか？

1台あれば、HaLow 対応クライアント（例：Wio-WM6108 / Wio-WM6180 ベースのノード）向けの Wi-Fi HaLow アクセスポイントを追加するのに十分です。2台あれば、**非 HaLow** デバイス ― スマートフォン、ノート PC、Ethernet 機器 ― を長距離リンクでブリッジできます：1台を Access Point、もう1台を Extender として使用します。

### 既定の管理アドレスとログイン情報は？

`https://192.168.12.1`（HTTPS のみ。初回アクセス時の証明書警告は想定どおりです）。ユーザー名とパスワードは本体ラベルに印字されています。Extender モードでは、このアドレスからはデバイスに到達できません。

### Access Point モードと Extender モードの違いは？

**Access Point**（緑の点灯）：HaLow ネットワークをホストし、ルーターに接続し、完全な Web UI を提供します。**Extender**（青緑の点灯）：HaLow クライアントとして動作し、Ethernet、USB-C、および自身の 2.4 GHz Wi-Fi を介して AP のネットワークを拡張します。ペアリング後は独自の Web UI はありません。Mode ボタンで Extender モードに切り替えられます。ファクトリーリセットを行うと、ユニットは Access Point モードに戻ります。

### 一般的なスマートフォンは Wi-Fi HaLow に直接接続できますか？

いいえ。一般的なスマートフォンにはサブ 1 GHz の 802.11ah 無線が搭載されていません。2台目の HaLowLink 2 を **Extender** として使用してください：通常の 2.4 GHz Wi-Fi ホットスポット（認証情報はその Extender 自身のラベルに記載）としてリンクを再送信し、さらに Ethernet/USB-C ポート経由でも提供します。

### 43.3 Mbps は実効スループットですか？

いいえ。これは 8 MHz 帯域幅で動作する MM8108 無線の最大 **PHY（物理層）レート** です。実効スループットはこれより低く、帯域幅、距離、信号品質、干渉に依存します。[Diagnostics / Range Test tools](#ssh-and-diagnostics) を使って、ご自身のリンクを計測してください。

### 動作リージョンを変更できますか？

いいえ。本製品は販売された地域（米国、カナダ、オーストラリア、英国、欧州、日本）向けに認証されています。周波数帯、チャネル、送信電力制限はその地域に従います。リージョンを変更したり回避したりすることはサポートされておらず、無線規制への違反となります。

<!-- Requires Verification (internal): confirm with Morse Micro whether any region-selection mechanism exists in retail firmware at all before expanding this answer. -->

## トラブルシューティング

| 症状 | 確認事項 | 対処方法 |
|:----|:----|:----|
| `https://192.168.12.1` で **Web UI にアクセスできない** | Status LED の色は？PC は **LAN または USB-C**（WAN ではない）に接続されていますか？PC は `192.168.12.x` アドレス（DHCP クライアント）を取得していますか？ | **青緑の点灯** = Extender モード ― 想定どおりです。ネットワークは AP から管理するか、[ファクトリーリセット](#firmware-update-and-factory-reset) して Extender モードを終了します。緑の点灯なのに到達できない場合：[ファクトリーリセット](#firmware-update-and-factory-reset)。設定変更後にロックアウトされた場合： [diagnostic IP](#advanced-settings) `10.22.121.111` を使用します。 |
| **デバイスがペアリングできない**（HaLow LED が高速点滅） | 両方のボタンを *押してすぐ離し*（長押しではなく）ましたか？AP は緑の点灯、Extender は青緑の点灯ですか？デバイス同士は届く範囲内にありますか？ | 高速点滅 = **120 秒の再試行待ち時間** です ― 両方のユニットで点滅が止むまで待ってから、再度ペアリングしてください。ペアリング後に AP モードを変更した場合：Extender の電源を入れ直します（Network Mode の変更）。または [ペアリング](#pair-the-devices) をやり直します（HaLow Mode の変更）。 |
| 接続されたクライアントに **IP アドレスが割り当てられない** | デバイスはどのモードですか？DHCP を実行しているのはどれですか？（[比較表](#network-configuration) を参照。） | Router モード：本機が `192.168.12.x` を配布します。Access Point モード：IP は **メインルーター** が配布します ― そのリーステーブルを確認してください。クライアントは本機の Local Network カードには *表示されません*。Extender のクライアント：AP のネットワーク経由で配布されます ― AP を再設定した場合は Extender の電源を入れ直してください。 |
| **インターネットに接続できない**（接続済みだが通信できない） | AP の Home ページで **Uplink (Ethernet)** に IP が表示されていますか？WAN ポートはルーターに接続されていますか？ | まず WAN のアップリンクを修正してください。PC を Extender/AP に有線接続したときだけインターネットが遅くなる／切れる場合：OS が有線リンクを優先しています ― 既定のルートが通常の接続に残るよう、ルートの優先度/メトリックを調整してください。 |
| HaLow リンクの **スループットが低い** | 信号強度（Connected Devices カード）、Realtime Graphs、Channel Analysis、距離と障害物、帯域幅設定 | デバイスの位置や向きを調整し、混雑の少ないチャネルを選び、帯域幅設定を見直してください。メッシュホップが 1 回増えるごとにスループットは半分になります。Range Test で約 40 Mbps UDP + 900 Mbps 超の TCP が出ている場合：トラフィックは **HaLow ではなく Ethernet** を通っています。HaLow LED が常に高速点滅している場合 = **ネットワークループ** です ― 両端の間に 2 本目のケーブルがないか取り除いてください。 |

ここに記載のない事象については、まずファームウェアを更新し、その後ファクトリーリセットを試してください。問題を報告する際は、Web UI で **Help → Support → Create Archive** を開き、生成されたアーカイブをサポート用に保管してください。詳細については、公式の [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) を参照してください。

<!-- Requires Verification (internal): reproduce each troubleshooting row on retail hardware and record the firmware version. Full 11-entry Symptom/Checks/Resolution/Verification version is kept in D:\SeeedWiki\notes\halowlink2\old-drafts\ for reference. -->

## テクニカルサポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
