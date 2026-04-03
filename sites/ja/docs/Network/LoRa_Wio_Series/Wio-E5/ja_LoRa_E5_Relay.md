---
description: Wio-E5 LoRaWAN リレー機能の使用手順。
title: Wio-E5 リレー機能
keywords:
  - wio
  - docusaurus
slug: /lora-e5_relay
sku: 317990687,317990829
last_update:
  date: 03/28/2026
  author: David Du
createdAt: '2026-03-28'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/ja/lora-e5_relay/
---
<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-Tape-Reel-p-5302.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<br />

> LoRaWAN® は LoRa Alliance® からライセンスを受けて使用されている商標です。
LoRa® マークは Semtech Corporation またはその子会社の商標です。

# Wio-E5 LoRaWAN リレー機能ガイド

**対象ハードウェア**: Wio-E5 LoRa® モジュール

**ファームウェア**: カスタムファームウェア（注文前にお問い合わせください）

**ドキュメントバージョン**: V1.0

**サーバー対応**: ChirpStack / The Things Network (TTN) 

> [ここ](https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/rhf0m055-v5.1.2-20250319.ebin.bin)をクリックして、Wio-E5 LoRaWAN リレー機能ファームウェアをダウンロードしてください。

## 1. 概要

Wio-E5 リレー機能は [LoRaWAN Relay Specification](https://resources.lora-alliance.org/technical-specifications/ts011-1-0-0-relay) に基づいており、ゲートウェイの電波が直接届かないエリアのデバイスが、**リレーマスター** デバイスを介して LoRaWAN ネットワークへアクセスできるようにします。

### 基本概念

| 役割 | 説明 | ネットワーク接続 |
|:---:|:---|:---|
| **Relay Master** | ブリッジデバイスとして動作し、`Slave` からのパケットを受信して実際のゲートウェイへ転送します | LoRaWAN ネットワークへ直接接続（OTAA） |
| **Relay Slave** | 電波の死角に配置され、`Master` を介して間接的にネットワークへアクセスします | `Master` 経由の間接接続 |
| **WOR** <br /> (Wake-on-Radio) | `Slave` が周期的にウェイクアップフレームを送信し、`Master` がそれを受信して応答します | - |

### ワークフローの要点
- **CAD 検出**: マスターは 1 秒ごとに Channel Activity Detection ウィンドウを開き、スレーブをリッスンします
- **時刻同期**: 初回通信後、スレーブはマスターと時刻を同期し、プリアンブルシンボル数を **259 から 15** に削減して、消費電力とチャネル占有率を大幅に低減します
- **RXR ウィンドウ**: スレーブは 3 番目の受信ウィンドウ（RX Window 3）を使用して下りデータを受信します

---

## 2. 事前準備

### 2.1 ハードウェア一覧
- **Wio-E5 モジュール** × 2（1 台をマスター、1 台をスレーブとして使用）
- **LoRaWAN ゲートウェイ**（例: SenseCAP M2 Multi-Platform）
- **USB–シリアル変換ツール**（ボーレート: **9600**）
- シリアルデバッグツールをインストールした **PC**（例: XCOM, Putty）

### 2.2 サーバー環境の選択

| フェーズ | 推奨プラットフォーム | 備考 |
|:---|:---|:---|
| **テスト** | **ChirpStack** | リレーをネイティブサポート、デバイスバインド用の Web UI を提供 |
| **本番運用** | **TTN** | TTN CLI ツールによる設定が必要。TTN は現在リレーメッセージを受信可能だが、リレー管理用の完全な UI は未実装 |

---

## 3. デバイス設定（AT コマンド）

:::note 
すべての AT コマンドは、ボーレートを **9600** に設定したシリアルツールから入力し、キャリッジリターン（`<CR><LF>`）で終端する必要があります。
:::

### 3.1 リレスレーブの設定

```bash
# 1. Set to OTAA mode
AT+MODE=OTAA

# 2. Set frequency band (EU868 example)
AT+DR=EU868

# 3. Set channels (0-2)
AT+CH=NUM,0-2

# 4. Enable Slave mode (Critical)
AT+STDRELAY=MODE,SLAVE

# 5. Get device ID information (record DevEUI and AppEUI)
AT+ID

# 6. Set AppKey (generated on server side)
AT+KEY=APPKEY,"your_app_key_here"
```

### 3.2 リレーマスターの設定

```bash
# 1. Basic network settings (same as Slave)
AT+MODE=OTAA
AT+DR=EU868
AT+CH=NUM,0-2

# 2. Initially disable Relay mode (enabled via server downlink)
AT+STDRELAY=MODE,OFF

# 3. Set AppKey
AT+KEY=APPKEY,"your_app_key_here"

# 4. Enable debug logs (to observe forwarding process)
AT+LOG=DEBUG
```

## 4. サーバー設定（ChirpStack）

### 4.1 ゲートウェイとアプリケーションの登録

1. ゲートウェイの登録: Gateways → Add gateway → Gateway EUI を入力
2. アプリケーションの作成: Applications → Add application → 名前を入力（例: relay-app）

### 4.2 デバイスプロファイルの作成

#### スレーブプロファイル
- General: Region（EU868）を選択、LoRaWAN 1.0.4
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-1.png" alt="pir" width={600} height="auto" /></p>


- Relay タブ:
    - Device is a Relay ❌
    - Device is a Relay capable end-device ✅
    - Only use Relay ✅


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-2.png" alt="pir" width={600} height="auto" /></p>


#### マスタープロファイル

- General: 上記と同じ
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-1.png" alt="pir" width={600} height="auto" /></p>


- Relay タブ:
    - Device is a Relay ✅
    - Relay enabled ✅
    - Device is a Relay capable end-device ❌

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-2.png" alt="pir" width={600} height="auto" /></p>

### 4.3 デバイス登録とバインド

**ステップ 1: スレーブデバイスの登録**
- relay-app → Devices → Add へ移動
- Device EUI、Join EUI を入力し、Slave Device Profile を選択
- OTAA Keys の AppKey を入力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-tx-1.png" alt="pir" width={600} height="auto" /></p>

**ステップ 2: マスターデバイスの登録**
- 上記と同様に実施し、Master Device Profile を選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-rx-1.png" alt="pir" width={600} height="auto" /></p>

**ステップ 3: 関係のバインド（重要）**
1. relay-app 内のデバイス一覧に入る
2. スレーブデバイスを選択 → Selected devices をクリック → Add to relay
3. ポップアップで、該当するマスターデバイスをリレーホストとして選択
4. 検証: Relays タブへ移動し、マスターの下にスレーブが表示されていることを確認

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-2.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-3.png" alt="pir" width={600} height="auto" /></p>

## 5. サーバー設定（TTN）

:::note
TTN でのリレー設定には **Command Line Interface (CLI)** が必要です。Web UI は基本的なデバイス登録のみをサポートしています。
:::

### 5.1 基本登録
1. ゲートウェイ登録: `Gateways` → `Register gateway` → EUI と Frequency Plan を入力
2.  アプリケーション作成: `Applications` → `Add application` → ID（**relay-app**）を設定
3. デバイス登録:
    - スレーブ: ID（**relay-tx**）を設定し、`DevEUI` / `JoinEUI` / `AppKey` を入力
    - マスター: ID（**relay-rx**）を設定し、`DevEUI` / `JoinEUI` / `AppKey` を入力

### 5.2 CLI 設定（Windows の例）

```bash
# 1. Download and configure CLI (version 3.32.2+)
ttn-lw-cli.exe use "eu1.cloud.thethings.network"

# 2. Login to TTN (opens browser for authorization)
ttn-lw-cli.exe login

# 3. Enable Relay Master (serving mode)
ttn-lw-cli.exe relays create relay-app relay-rx --mode.serving

# 4. Enable Relay Slave and associate with Master (always via Master)
ttn-lw-cli.exe relays create relay-app relay-tx \
  --mode.served.mode.always \
  --mode.served.serving-device-id relay-rx

# 5. Create uplink forwarding rule (index 0)
ttn-lw-cli.exe relays uplink-forwarding-rules create relay-app relay-rx 0 --device-id relay-tx
```

> 詳細については、[TTN 公式ドキュメント](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/)を参照してください。


## 6. 検証テスト

### 6.1 リレーマスターの起動

シリアルポートツールを開き、対応するシリアルポートを選択してボーレートを **9600** に設定し、ログを監視します。

```bash
# 1. Turn on log output:
AT+LOG=DEBUG

# 2. Reset device
AT+RESET

# 3. The Relay Master is turned on and off by the server downlink control, turn off the Relay mode first 
AT+STDRELAY=MODE,OFF

# 4. Join network (observe logs until +JOIN:Done)
AT+JOIN

# 5. Trigger uplink to receive Relay Config MAC command from server
AT+MSG

# Logs should show:
# +LOG: DEBUG ... MACCMD, RX, 0219010350FF00010640002000000042400043007F07
# Then CAD window opens every 1 second: 
# +LOG: DEBUG 211708 LORA   CAD, 865100000, SF9, 125KHz
```

この時点で、`Relay Master` は Relay Slave を用いたウェイクアップおよびフォワーディングを行う準備ができています。

### 6.2 リレスレーブの起動

```bash
# 1. Ensure Slave mode is set
AT+STDRELAY=MODE,SLAVE

# 2. Reset and enable logs
AT+RESET
AT+LOG=DEBUG

# 3. Attempt network join (via Master forwarding)
AT+MODE=OTAA
AT+JOIN

# Logs should show:
# +JOIN: Network joined
# +JOIN: NetID 000000 DevAddr 00:C9:F4:5F
# +JOIN: Done
```
### 6.3 時刻同期と最適化の検証

```bash
# Set retry count to 1
AT+RETRY=1

# Send confirmed packet (first time)
AT+CMSGHEX=AA

# +LOG: DEBUG 872489 LORA   TX, 865100000, SF9, 125KHz, 259, 22
# +LOG: DEBUG 872490 LORA   TX, 015FF4C90054066CFF01006A3A2EA8
# Observe: WOR_ACK received, preamble length ~259

# At this point, WOR_ACK will be received and time synchronization will be performed, and the number of subsequent preamble derived from the calculation will be greatly reduced.

# Send again (synchronized)
AT+CMSGHEX=AA

# +LOG: DEBUG 141852 LORA   TX, 865100000, SF9, 125KHz, 15, 22
# Observe: Preamble reduced to ~15, latency decreased
```

### 7. 重要な注意事項

1. サーバーの選択: 現時点で TTN は CLI 経由でのみリレー設定をサポートしています。ChirpStack は Web UI による完全なサポートを提供しているため、テスト用途には ChirpStack の使用を推奨します。

2. 電力最適化：時刻同期後、Slave の WOR フレームのプレアンブルは 259 から 15 に削減され、消費電力が大幅に低減します。安定した運用環境での導入を推奨します。

3. ファームウェア要件：Wio-E5 のファームウェアが AT+STDRELAY コマンドセットをサポートしていることを確認してください。

4. 通信距離テスト：リレー転送の有効性を確認するため、テスト中は Slave と Master の距離を（例：50〜500 メートル）に保ってください。

## リソース

- **📄[PDF]** [Wio-E5 LoRaWAN リレー機能取扱説明書](http://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/E5%20relay%20function%20Instruction%20v1.0%20.pdf)