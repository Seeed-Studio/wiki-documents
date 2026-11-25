---
description: XIAO ESP32-C3 Bus Servo Adapter と micro-ROS を用いて、SO-ARM101 フォロワー向けの低遅延ワイヤレス ROS 2 テレオペレーションリンクを Wi-Fi UDP 経由で構築します。
title: XIAO を用いた SO-Arm ワイヤレステレオペレーション
keywords:
  - SO-ARM101
  - XIAO ESP32-C3
  - micro-ROS
  - ROS 2
  - LeRobot
  - Teleoperation
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /soarm101_xiao_microros_wireless_teleoperation
last_update:
  date: 09/20/2026
  author: linao681
createdAt: '2026-07-24'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/soarm101_xiao_microros_wireless_teleoperation/
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 有線および無線 SO-ARM101 テレオペレーション（XIAO ESP32-C3 と micro-ROS 使用）

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp" width={800} height={600} style={{height: 'auto'}} alt="SO-ARM100 and SO-ARM101 robotic arm kits" />
</div>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem 1rem', margin: '1.1rem 0 1.35rem'}}>

<div className="rebot-buy-button-group" style={{margin: 0}}>
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>SO-ARM101 キットを入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<div className="rebot-buy-button-group" style={{margin: 0}}>
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank" rel="noopener noreferrer">
    <span>XIAO サーボアダプタを入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

</div>

:::note Community Contribution
このチュートリアルは [@linao681](https://github.com/linao681) によるコミュニティ貢献です。Seeed Studio コミュニティとこのプロジェクトを共有していただきありがとうございます。
:::

## はじめに

このチュートリアルでは、SO-ARM101 リーダーから SO-ARM101 フォロワーを制御する、サポートされている 2 つの方法を説明します。

| モード | リーダー接続 | フォロワー接続 |
| --- | --- | --- |
| 有線リーダー | 標準 USB バスサーボドライバボードを介してコンピュータに接続。 | Wi-Fi 経由の XIAO。 |
| 無線リーダー | Wi-Fi 経由の XIAO。 | Wi-Fi 経由の XIAO。 |

どちらのモードでも、フォロワーは Wi-Fi UDP 上の micro-ROS を通じて ROS 2 と通信します。無線リーダーの XIAO は 6 つのリーダーアクチュエータ位置を読み取り、読み取り専用の状態をパブリッシュしますが、リーダーアームに位置コマンドを書き込むことはありません。

この実装は次の機能を提供します。

- `/joint_states` 上の 6 つすべてのフォロワージョイントからのフィードバック
- `/joint_command` 上の 6 つすべてのフォロワージョイントへのコマンド
- LeRobot におけるリーダーからフォロワーへのジョイントマッピング
- 予期しない位置ジャンプを防ぐ起動時ハンドシェイク
- キャリブレーション、関節リミット、コマンドステップ、およびバス健全性チェック
- シーケンスチェック、フィードバックウォッチドッグ、安全な最後のコマンド保持動作、およびセッション復旧
- コンピュータの現在の Wi-Fi アドレスからのランタイム Agent 検出により、ホットスポットアドレスが変わっても再フラッシュが不要
- 無線リーダーが利用できない場合の診断および動作用の有線リーダーフォールバック
- 自動プレフライトチェックと 1 コマンドでのテレオペレーション起動

完全なソースコードは [soarm101-drone-teleop リポジトリ](https://github.com/linao681/soarm101-drone-teleop)で入手できます。

:::note

このプロジェクトは、将来のドローン搭載 SO-ARM101 デモのための地上試験済みプロトタイプとして開発されました。本ガイドではロボットアームの通信とテレオペレーションリンクのみを扱います。飛行認証済みの制御または安全システムは提供しません。

:::

### 推奨セットアップ手順

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#step-1-clone-the-project">プロジェクトをクローンする</a></h4>
<p>コードとファームウェアプロジェクトを取得します。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#step-2-calibrate-both-arms">両方のアームをキャリブレーションする</a></h4>
<p>使用する物理アームをキャリブレーションします。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#step-3-configure-wi-fi-and-agent-discovery">Wi-Fi と Agent 検出を設定する</a></h4>
<p>コンピュータと XIAO を同じ LAN 上に配置します。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#step-4-build-and-flash-the-xiaos">ファームウェアをビルドして書き込む</a></h4>
<p>テストしてから、適切な XIAO ファームウェアを書き込みます。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#step-5-start-the-micro-ros-agent-and-preflight">Agent を起動しプレフライトを実行する</a></h4>
<p>選択したモードの ROS 2 フィードバックを確認します。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#step-6-run-wired-or-dual-wireless-teleoperation">テレオペレーションを開始する</a></h4>
<p>選択したリーダーモードを起動し、動作を確認します。</p>
</div>
</section>

</div>

## システムアーキテクチャ

```text
SO-ARM101 leader
  ├─ wireless: leader XIAO ── Wi-Fi / micro-ROS ──┐
  └─ wired: USB bus-servo driver ────────────────┤
                                                  ▼
Ubuntu 22.04 PC
  ├─ LeRobot reads the leader
  ├─ ROS 2 Humble bridge publishes /joint_command
  └─ micro-ROS Agent, UDP port 8888
              │
              │  2.4 GHz Wi-Fi LAN
              ▼
follower XIAO ESP32-C3 Bus Servo Adapter
  ├─ micro-ROS publishes /joint_states
  └─ 1 Mbps UART Sync Read/Write
              │
              ▼
SO-ARM101 follower, 6 × STS3215
```

PC と XIAO は同じローカルネットワークに接続する必要があります。デモ用には、スマートフォンのホットスポットまたは専用の 2.4 GHz アクセスポイントを使用できます。

## ハードウェア

| 項目 | 数量または要件 | 用途 |
| --- | --- | --- |
| SO-ARM101 リーダーとフォロワー | 各 1 台 | 入力用アームと制御されるアーム。 |
| 標準 USB バスサーボドライバボード | 1 台 | キャリブレーションおよび有線リーダー接続。 |
| XIAO ESP32-C3 Bus Servo Adapter | 1 台（無線リーダーモードではさらに 1 台） | フォロワーに必須。無線リーダー用にもう 1 台追加。 |
| アーム用電源 | 2 台（アームに見合う定格） | リーダーとフォロワーに個別に電源を供給。 |
| コンピュータ | 1 台、Ubuntu 22.04 | ROS 2 と micro-ROS Agent を実行。 |
| Wi-Fi ネットワーク | 1 つ、2.4 GHz | コンピュータと XIAO を同じ LAN 上に配置。 |
| USB ケーブル | 必要な本数 | キャリブレーション、書き込み、およびシリアルモニタリング。 |

このリファレンスファームウェアは、モデル番号 `777` の STS3215 サーボ 6 個を搭載した標準 5 V SO-ARM101 フォロワーでテストされています。

:::danger

- いかなるサーボケーブルを変更する前にも、サーボ電源を切断してください。
- 使用している SO-ARM101 バージョンに指定された電圧を使用してください。5 V アームに 12 V 電源を接続しないでください。
- USB はサーボに十分な電力を供給できません。
- 最初のテストは、安定した作業台上で、明確な緊急電源遮断手段を確保した状態で行ってください。
- ドローンの近くでテストする場合は、プロペラを取り外してください。

:::

## ソフトウェア要件

テスト済みのホスト構成は次のとおりです。

| 項目 | テスト済み構成 |
| --- | --- |
| オペレーティングシステム | Ubuntu 22.04 |
| ROS 2 | Humble |
| ロボティクスフレームワーク | LeRobot（Feetech 対応） |
| micro-ROS 通信 | micro-ROS Agent |
| Python | 3.12 |
| ファームウェアツール | PlatformIO |

micro-ROS Agent と PlatformIO がまだインストールされていない場合は、次をインストールします。

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

続行する前に、[SO-ARM100/101 LeRobot ガイド](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/)に従って LeRobot をインストールし、サーボ ID を設定してください。

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

## プロジェクトをクローンする {#step-1-clone-the-project}

<p className="rebot-step-label">Step 1</p>

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

重要なプロジェクトパスは次のとおりです。

| パス | 用途 |
| --- | --- |
| `firmware/xiao_soarm/` | 無線フォロワーファームウェア |
| `firmware/xiao_soarm_leader/` | 無線リーダーファームウェア |
| `tools/wireless_teleoperate.py` | ROS 2 と LeRobot のテレオペレーションブリッジ |
| `tools/soarm_agent_discovery.py` | 両方の XIAO 用の Agent 検出 |
| `start_soarm_demo.sh` | ネットワーク、Agent、ハードウェア、およびトピックのプレフライト |
| `cali/` | リーダーおよびフォロワーのキャリブレーションファイル |

このリポジトリには、無線フォロワーと無線リーダー用に個別の PlatformIO ファームウェアプロジェクトが含まれています。プロジェクトには必要な ESP32-C3 micro-ROS ライブラリが含まれているため、通常のユーザーが micro-ROS をクロスコンパイルする必要はありません。

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

## 両方のアームをキャリブレーションする {#step-2-calibrate-both-arms}

<p className="rebot-step-label">Step 2</p>

まず、標準 USB バスサーボドライバを使用してフォロワーをキャリブレーションします。`/dev/ttyACM0` は正しいポートに置き換えてください。

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower_recal \
  --robot.calibration_dir="$PWD/cali"
```

次に、リーダーを接続してキャリブレーションします。

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM0 \
  --teleop.id=leader_recal \
  --teleop.calibration_dir="$PWD/cali"
```

これにより次のファイルが作成されます。

```text
cali/follower_recal.json
cali/leader_recal.json
```

:::warning

キャリブレーション値は、1 つの物理アームに固有です。リポジトリ内のサンプルとして含まれているキャリブレーション値を使用して、別のフォロワーを制御しないでください。

:::

### フォロワーのキャリブレーションをファームウェアにコピーする

フォロワー側の XIAO は、トルクを有効化する前にサーボ EEPROM を検証します。次を開きます：

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

これら 3 つの配列を、`cali/follower_recal.json` の値に置き換えます：

```cpp
constexpr int16_t kHomingOffsets[kJointCount] = {
    /* homing_offset for joints 1 to 6 */
};
constexpr int16_t kRangeMin[kJointCount] = {
    /* range_min for joints 1 to 6 */
};
constexpr int16_t kRangeMax[kJointCount] = {
    /* range_max for joints 1 to 6 */
};
```

期待される順序は次のとおりです：

```text
shoulder_pan, shoulder_lift, elbow_flex,
wrist_flex, wrist_roll, gripper
```

次のコマンドは、3 つの配列を正しい順序で出力します：

```bash
python3 - <<'PY'
import json

joints = [
    "shoulder_pan", "shoulder_lift", "elbow_flex",
    "wrist_flex", "wrist_roll", "gripper",
]
with open("cali/follower_recal.json", encoding="utf-8") as calibration_file:
    calibration = json.load(calibration_file)

for key in ("homing_offset", "range_min", "range_max"):
    print(key, [calibration[joint][key] for joint in joints])
PY
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

## Wi-Fi と Agent 検出を設定する {#step-3-configure-wi-fi-and-agent-discovery}

<p className="rebot-step-label">Step 3</p>

Ubuntu コンピュータと、使用しているモードの XIAO を同じ 2.4 GHz Wi-Fi ネットワークに接続します。有線リーダーモードではフォロワー XIAO のみを使用し、無線リーダーモードでは両方の XIAO を使用します。XIAO ファームウェアは SSID とパスワードのみを保存します。ランチャーと検出サービスは、実行時にコンピュータの現在の Agent アドレスを通知します。コンピュータの IP をパブリックなファームウェアファイルにハードコードしないでください。

```bash
ip -4 address
```

フォロワー用ファームウェアのディレクトリに入り、プライベート設定ファイルを作成します：

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

無線リーダーモードの場合は、`firmware/xiao_soarm_leader` 以下でも同じ手順を繰り返します。

`src/wifi_config.h` を編集します：

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
```

リーダー用ファームウェアでは、`firmware/xiao_soarm_leader/src/wifi_config.example.h` 内の対応する `#define WIFI_SSID` と `#define WIFI_PASS` のプレースホルダを使用します。

`wifi_config.h` は Git によって無視され、パブリックリポジトリにコミットしてはなりません。現在のランチャーは Agent 検出を使用してコンピュータの現在の Wi-Fi アドレスを通知するため、通常はホットスポットの IP が変わっても、どちらの XIAO も再書き込みは不要です。

:::tip

ESP32-C3 は 2.4 GHz Wi-Fi を使用します。スマートフォンのホットスポットが両方のバンドをサポートしている場合は、互換モードまたは 2.4 GHz モードを選択してください。

:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

## ファームウェアをビルドして書き込む {#step-4-build-and-flash-the-xiaos}

<p className="rebot-step-label">Step 4</p>

1 度に 1 つの XIAO を USB でコンピュータに接続します。アップロードの前に、ネイティブテストと ESP32-C3 ビルドを実行します：

```bash
(cd firmware/xiao_soarm && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
(cd firmware/xiao_soarm_leader && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
```

テストとビルドが通ったら、選択したファームウェアを書き込みます：

```bash
cd firmware/xiao_soarm
pio run -e seeed_xiao_esp32c3 --target upload
pio device monitor -b 115200
```

無線リーダーモードの場合は、代わりに `firmware/xiao_soarm_leader` からアップロードとモニタのコマンドを実行します。

フォロワーアームを外部電源で給電します。起動に成功すると、次のようなメッセージが含まれます：

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` は、6 個すべてのサーボ ID が応答したことを意味します。キャリブレーションが一致しない場合でも、ファームウェアは状態を報告しますが、モーションコマンドを拒否します。

書き込み後は、USB ケーブルはシリアルモニタリングにのみ必要です。対応するアームの外部サーボ電源は接続したままにします。リーダーファームウェアはトルクを無効化し、位置／状態のみを配信します。位置コマンドを実行するコンポーネントはフォロワーファームウェアです。

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">

## Agent を起動してプリフライトを実行する {#step-5-start-the-micro-ros-agent-and-preflight}

<p className="rebot-step-label">Step 5</p>

プロジェクトルートから、Wi-Fi 名と、LeRobot が使用する Python 実行ファイルを設定します。その後、使用するリーダーモードに対してプリフライトを実行します。

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_PYTHON="$(command -v python)"
```

```bash
source /opt/ros/humble/setup.bash
./start_soarm_demo.sh --leader wireless --check
```

この例では無線リーダーモードをチェックしています。有線リーダーの場合は、`--leader wireless` を `--leader wired` に置き換えます。有線プリフライトでは、起動時に実行されるリーダー USB チェックをスキップします。

ランチャーは Agent と検出サービスを起動し、その後、必要な ROS 2 トピックをチェックします。XIAO が Agent を検出すると、シリアルモニタには次のように表示されるはずです：

```text
micro-ROS ready
```

ROS 2 インターフェースは次のとおりです：

| トピック | メッセージ型 | 方向 | 公称レート |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | フォロワー → PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC → フォロワー | 最大 30 Hz |

Agent が動作している間、別のターミナルを使用してフィードバックを確認します。プリフライトが Agent を起動した場合、終了時に Agent を停止します。その場合は、テレオペレーションを開始した後にこのチェックを実行してください。

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

現在姿勢のスタートアップハンドシェイクを完了する前に、任意の関節値を送信しないでください。

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">

## テレオペレーションを開始する {#step-6-run-wired-or-dual-wireless-teleoperation}

<p className="rebot-step-label">Step 6</p>

プリフライトが通ったら、使用するリーダー接続に応じて起動コマンドを選択します。どちらのオプションも無線フォロワーを使用します。

<Tabs defaultValue="wired">

<TabItem value="wired" label="有線リーダー">

リーダーを標準の USB バスサーボドライバ経由で接続し、安定したシリアルパスを特定します。

```bash
ls -l /dev/serial/by-id/
```

`YOUR_USB_ADAPTER` を実際のデバイス名に置き換え、その後、有線リーダーモードを開始します。

```bash
export SOARM_LEADER_PORT="/dev/serial/by-id/YOUR_USB_ADAPTER"
./start_soarm_demo.sh --leader wired
```

</TabItem>
<TabItem value="wireless" label="無線リーダー">

リーダーを外部電源で給電し、その XIAO が設定済みの Wi-Fi ネットワークに参加していることを確認してから、デュアル無線モードを開始します。

```bash
./start_soarm_demo.sh --leader wireless
```

</TabItem>
</Tabs>

ブリッジは、フォロワーの初期姿勢を読み取り、トルクを有効化する前に同じ姿勢を繰り返し配信します。その後は相対マッピングを使用するため、フォロワーは現在位置から開始し、選択したリーダーに加えられた変化に追従します。無線セッションが復旧した場合、ブリッジは通常のコマンドを再開する前に、リーダーの現在姿勢へ向けてブレンドします。停止するには `Ctrl+C` を押します。フォロワーは最後に指令された位置を保持します。

:::warning

ブリッジを停止したりコマンドが途切れたりしても、トルクは解除されません。フォロワーは最後に指令された位置を保持します。緊急停止が必要な場合は、サーボ電源を切断してください。

:::

</div>
</section>

</div>

## 安全メカニズム

このリファレンス実装には、デモをより予測しやすくすることを目的とした、いくつかのチェックが含まれています：

| チェック | 条件または動作 |
| --- | --- |
| サーボ識別 | 6 個すべての ID と型番が一致している必要があります。 |
| EEPROM キャリブレーション | ホーミングオフセットとリミットが、ファームウェアにコンパイルされたフォロワーのキャリブレーションと一致している必要があります。 |
| 現在姿勢ハンドシェイク | 最初のコマンドは、計測された姿勢から `0.05 rad` 以内でなければなりません。 |
| 関節ソフトリミット | 各コマンドは、キャリブレーションされた範囲内に収まっている必要があります。 |
| コマンドごとのステップ制限 | アーミング後、ターゲットは 1 回のコマンドで `0.25 rad` を超えて変化してはなりません。 |
| フィードバックウォッチドッグ | フォロワーのフィードバックが `0.5 s` より古い場合、PC ブリッジは配信を停止します。 |
| Wi-Fi リカバリ | Wi-Fi が 10 秒以内に復旧できない場合、XIAO は再起動します。 |

これらのソフトウェアチェックは、物理的な非常停止を補完するものであり、置き換えるものではありません。

## トラブルシューティング

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="the-xiao-stays-at-waiting-for-micro-ros-agent">
<summary>XIAO が <code>Waiting for micro-ROS Agent</code> のままになる</summary>

- コンピュータと XIAO が同じ LAN 上にあることを確認します。
- ランチャーが現在の Wi-Fi IPv4 アドレスを報告し、Agent 検出を開始していることを確認します。
- Agent が UDP ポート `8888` を使用していることを確認します。
- ホットスポットでクライアント分離が有効になっていないか確認します。
- ファイアウォールが有効な場合は、UDP ポート `8888` を許可します。

</details>

<details className="rebot-demo-details" id="servo_mask-is-not-0x3f">
<summary><code>servo_mask</code> が <code>0x3f</code> ではない</summary>

1 個以上のサーボが応答していません：

- 電源を切り、3 線式バスケーブルを点検します。
- すべてのサーボに 1 から 6 までの一意の ID が設定されていることを確認します。
- 電源の電圧と電流定格を確認します。
- サーボバスを設定済みの 1 Mbps ボーレートに保ちます。

</details>

<details className="rebot-demo-details" id="the-firmware-reports-calib0">
<summary>ファームウェアが <code>calib:0</code> を報告する</summary>

サーボ EEPROM が、`servo_bus.cpp` にコンパイルされた値と一致していません。フォロワーを USB ドライバボード経由で再接続し、再キャリブレーションを行い、3 つのファームウェア配列を更新してから、XIAO を再度書き込みます。

</details>

<details className="rebot-demo-details" id="wi-fi-disconnects-during-motion">
<summary>動作中に Wi-Fi が切断される</summary>

- アクセスポイントを近づけてください；
- 外部アンテナをサーボの電源配線や金属部品から離して配置してください；
- デモ用に専用の 2.4 GHz ネットワークを使用してください；
- シリアル診断出力で RSSI 値を監視してください；
- サーボの電源を切った状態と結果を比較し、電源または電磁干渉の可能性を特定してください。

</details>

<details className="rebot-demo-details" id="the-wireless-leader-is-not-ready">
<summary>ワイヤレスリーダーが準備完了にならない</summary>

- リーダー XIAO が `/leader/raw_state` と `/leader/status` の両方を publish していることを確認してください；
- 6 個すべてのリーダーサーボが応答し、トルクが無効化されていることを確認してください；
- `cali/leader_recal.json` が実際のリーダーと一致していることを確認してください；
- 一時的なフォールバックとして `./start_soarm_demo.sh --leader wired` を使用してください。

</details>

<details className="rebot-demo-details" id="a-joint-direction-or-range-is-incorrect">
<summary>関節の方向または可動範囲が正しくない</summary>

両方のアームを再キャリブレーションし、両方の JSON ファイルで関節の順序を確認してください。また、`servo_bus.cpp` 内のフォロワー配列が、現在 XIAO に接続されている同じ実機フォロワーから取得されたものであることを確認してください。

</details>

</div>

## 検証範囲

このプロジェクトは、リファレンス構成で次の条件を満たすことを確認しています：

- 6 個すべてのフォロワーサーボが検出された（`servo_mask=0x3f`）；
- `/joint_states` が約 20 Hz で publish された；
- リーダーブリッジが 30 Hz でコマンドを publish した；
- 6 個すべての関節が、スマートフォンのテザリング経由で同期して追従した；
- XIAO は、書き込み後に USB データケーブルを外し、外部アーム電源を接続した状態でも動作を継続した。

デュアルワイヤレス経路と有線フォールバックの両方が、現在のランチャーでサポートされています。リファレンスとなるワイヤレス耐久テストは 2026-09-20 に実施され、783 秒（約 13 分）継続しました。このテストでは、コマンドタイムアウト 0 件、コマンド拒否 0 件、リーダーリカバリ 0 件を記録しました。フィードバックは平均 19.87 Hz、コマンド応答のレイテンシは P50 で 66.0 ms、観測された最小 RSSI は -65 dBm でした。これらの数値は 1 回のリファレンステストを示すものであり、すべての Wi-Fi 環境での動作を保証するものではありません。

## 参考情報

- [プロジェクトのソースコード](https://github.com/linao681/soarm101-drone-teleop)
- [LeRobot における SO-ARM100 および SO-ARM101 の入門ガイド](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/)
- [XIAO Bus Servo Adapter 入門ガイド](https://wiki.seeedstudio.com/ja/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

この投稿は、独自に開発された統合内容を文書化したものです。LeRobot、ROS 2、micro-ROS、PlatformIO、およびサーボライブラリは、それぞれのライセンスに従います。
