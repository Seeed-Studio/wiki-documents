---
description: XIAO ESP32-C3 Bus Servo Adapter と micro-ROS を用い、Wi-Fi UDP 経由で SO-ARM101 フォロワー向けの低遅延ワイヤレス ROS 2 テレオペレーションリンクを構築します。
title: XIAO ESP32-C3 と micro-ROS を用いた SO-ARM101 のワイヤレステレオペレーション
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
  date: 07/24/2026
  author: linao681
createdAt: '2026-07-24'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/ja/soarm101_xiao_microros_wireless_teleoperation/
---

# XIAO ESP32-C3 と micro-ROS を用いた SO-ARM101 のワイヤレステレオペレーション

:::note Community Contribution
このチュートリアルは [@linao681](https://github.com/linao681) によるコミュニティ貢献です。Seeed Studio コミュニティとこのプロジェクトを共有していただきありがとうございます。
:::

## はじめに

このチュートリアルでは、SO-ARM101 リーダーから SO-ARM101 フォロワーをワイヤレスで制御する方法を説明します。リーダーは標準的な USB バスサーボドライバボードを介して Ubuntu コンピュータに接続されます。フォロワーは Seeed Studio XIAO ESP32-C3 Bus Servo Adapter を使用し、Wi-Fi UDP 上の micro-ROS を通じて ROS 2 と通信します。

この実装は次の機能を提供します：

- `/joint_states` 上での、6 つすべてのフォロワージョイントからのフィードバック
- `/joint_command` 上での、6 つすべてのフォロワージョイントへのコマンド
- LeRobot によるリーダーからフォロワーへのジョイントマッピング
- 予期しない位置ジャンプを防ぐための起動時ハンドシェイク
- キャリブレーション、ジョイントリミット、コマンドステップ、およびバス健全性チェック
- 自動プレフライトチェックと、1 コマンドでのテレオペレーション起動

完全なソースコードは [soarm101-drone-teleop リポジトリ](https://github.com/linao681/soarm101-drone-teleop)で入手できます。

:::note

このプロジェクトは、将来のドローン搭載 SO-ARM101 デモンストレーションに向けた、地上試験済みプロトタイプとして開発されました。本ガイドではロボットアームの通信とテレオペレーションリンクのみを扱います。飛行認証済みの制御または安全システムは提供しません。

:::

## システムアーキテクチャ

```text
SO-ARM101 leader
  │  Feetech UART bus
  ▼
USB bus-servo driver
  │  USB
  ▼
Ubuntu 22.04 PC
  ├─ LeRobot reads the leader
  ├─ ROS 2 Humble bridge publishes /joint_command
  └─ micro-ROS Agent, UDP port 8888
              │
              │  2.4 GHz Wi-Fi LAN
              ▼
XIAO ESP32-C3 Bus Servo Adapter
  ├─ micro-ROS publishes /joint_states
  └─ 1 Mbps UART Sync Read/Write
              │
              ▼
SO-ARM101 follower, 6 × STS3215
```

PC と XIAO は同じローカルネットワークに接続されている必要があります。デモ用には、スマートフォンのホットスポットまたは専用の 2.4 GHz アクセスポイントを使用できます。

## ハードウェア

- SO-ARM101 リーダー × 1
- SO-ARM101 フォロワー × 1
- リーダー用の標準 USB バスサーボドライバボード × 1
- フォロワー用 Seeed Studio XIAO ESP32-C3 Bus Servo Adapter × 1
- 適切な定格のアーム用電源 × 2
- Ubuntu 22.04 コンピュータ × 1
- 2.4 GHz Wi-Fi ネットワーク × 1
- キャリブレーションおよびファームウェア書き込み用の USB ケーブル

このリファレンスファームウェアは、モデル番号 `777` の STS3215 サーボ 6 個を搭載した標準 5 V SO-ARM101 フォロワーでテストされています。

:::danger

- いずれかのサーボケーブルを交換する前に、サーボ電源を必ず切断してください。
- 使用している SO-ARM101 のバージョンに指定された電圧を使用してください。5 V アームに 12 V 電源を接続しないでください。
- USB はサーボに十分な電力を供給できません。
- 最初のテストは、安定した作業台上で、明確な非常用電源遮断手段を確保したうえで実施してください。
- ドローンの近くでテストする場合は、プロペラを取り外してください。

:::

## ソフトウェア要件

テスト済みのホスト構成は次のとおりです：

- Ubuntu 22.04
- ROS 2 Humble
- Feetech 対応の LeRobot
- micro-ROS Agent
- Python 3.10
- PlatformIO

micro-ROS Agent と PlatformIO がまだインストールされていない場合は、次を実行してインストールします：

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

続行する前に、[SO-ARM100/101 LeRobot ガイド](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/)に従って LeRobot をインストールし、サーボ ID を設定してください。

## ステップ 1: プロジェクトをクローンする

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

重要なプロジェクトパスは次のとおりです：

```text
firmware/xiao_soarm/          PlatformIO firmware for the wireless follower
tools/wireless_teleoperate.py ROS 2 and LeRobot teleoperation bridge
start_soarm_demo.sh           network, Agent, arm, and topic preflight checks
cali/                         leader and follower calibration files
```

このリポジトリには、ESP32-C3 RISC-V アーキテクチャ向けにビルド済みの `libmicroros.a` が含まれているため、通常のユーザーが micro-ROS をクロスコンパイルする必要はありません。

## ステップ 2: 両方のアームをキャリブレーションする

まず、標準 USB バスサーボドライバを使用してフォロワーをキャリブレーションします。`/dev/ttyACM0` は正しいポートに置き換えてください：

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower_recal \
  --robot.calibration_dir="$PWD/cali"
```

次にリーダーを接続してキャリブレーションします：

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM0 \
  --teleop.id=leader_recal \
  --teleop.calibration_dir="$PWD/cali"
```

これにより次のファイルが作成されます：

```text
cali/follower_recal.json
cali/leader_recal.json
```

:::warning

キャリブレーション値は 1 台の物理アームに固有です。リポジトリに例として含まれているキャリブレーション値を使用して、別のフォロワーを制御しないでください。

:::

### フォロワーのキャリブレーションをファームウェアにコピーする

XIAO はトルクを有効にする前にサーボ EEPROM を検証します。次のファイルを開きます：

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

これら 3 つの配列を、自分の `cali/follower_recal.json` の値で置き換えます：

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

## ステップ 3: Wi-Fi を設定する

Ubuntu コンピュータを、XIAO が使用する Wi-Fi ネットワークに接続します。コンピュータの IPv4 アドレスを確認します：

```bash
ip -4 address
```

ファームウェアディレクトリに入り、プライベート設定ファイルを作成します：

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

`src/wifi_config.h` を編集します：

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
const char* AGENT_IP = "YOUR_UBUNTU_PC_IP";
```

`wifi_config.h` は Git によって無視され、公開リポジトリにコミットしてはなりません。

:::tip

ESP32-C3 は 2.4 GHz Wi-Fi を使用します。スマートフォンのホットスポットが両方のバンドをサポートしている場合は、互換モードまたは 2.4 GHz モードを選択してください。

:::

## ステップ 4: XIAO をビルドして書き込む

XIAO を USB でコンピュータに接続し、次を実行します：

```bash
python3 -m platformio run
python3 -m platformio run --target upload
python3 -m platformio device monitor --baud 115200
```

フォロワーアームを外部電源で給電します。起動が成功すると、次のようなメッセージが表示されます：

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` は、6 個すべてのサーボ ID が応答したことを意味します。キャリブレーションが一致しない場合でも、ファームウェアは状態を報告しますが、動作コマンドは拒否します。

書き込み後は、XIAO がアダプタから正しく給電されている場合、USB ケーブルはシリアルモニタリングにのみ必要です。フォロワーの外部サーボ電源は接続したままにしてください。

## ステップ 5: micro-ROS Agent を起動する

Ubuntu コンピュータで新しいターミナルを開きます：

```bash
source /opt/ros/humble/setup.bash
snap run micro-ros-agent udp4 --port 8888
```

XIAO が Agent を検出すると、そのシリアルモニタには次のように表示されます：

```text
micro-ROS ready
```

ROS 2 インターフェースは次のとおりです：

| トピック | メッセージ型 | 方向 | 公称レート |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | フォロワー → PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC → フォロワー | 最大 30 Hz |

フィードバックを確認します：

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

現在姿勢の起動ハンドシェイクを完了する前に、任意のジョイント値を送信しないでください。

## ステップ 6: ワイヤレスリーダー・フォロワーテレオペレーションを実行する

リーダーを通常の USB バスサーボドライバ経由でコンピュータに接続し、適切な外部電源で給電します。

安定したシリアルパスを確認します：

```bash
ls -l /dev/serial/by-id/
```

プロジェクトルートからローカル設定をエクスポートします：

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_AGENT_IP="YOUR_UBUNTU_PC_IP"
export SOARM_LEADER_PORT="/dev/serial/by-id/YOUR_LEADER_ADAPTER"
export SOARM_PYTHON="$(command -v python)"
```

まず、動かさないプレフライトチェックを実行します：

```bash
./start_soarm_demo.sh --check
```

これにより次の点が検証されます：

- Wi-Fi SSID と Agent の IP
- リーダーの USB アダプタ
- リーダーおよびフォロワーのキャリブレーションファイル
- micro-ROS Agent
- `/joint_states` 上でのライブなフォロワーフィードバック
- 同じリーダーバスを別のテレオペレーションプロセスが使用していないこと

すべてのチェックに合格したら、テレオペレーションを開始します：

```bash
./start_soarm_demo.sh
```

ブリッジはフォロワーの初期姿勢を読み取り、トルクを有効にする前に同じ姿勢を繰り返しパブリッシュします。その後は相対マッピングを使用するため、フォロワーは現在位置から動作を開始し、リーダーに加えられた変化に追従します。停止するには `Ctrl+C` を押します。

:::warning

ブリッジを停止するかコマンドが途絶えても、トルクは解除されません。フォロワーは最後に指令された位置を保持します。非常停止が必要な場合は、サーボ電源を切断してください。

:::

## 安全メカニズム

このリファレンス実装には、デモをより予測しやすくすることを目的とした複数のチェックが含まれています：

1. **サーボ識別チェック:** 6 個すべての ID とモデル番号が一致している必要があります。
2. **EEPROM キャリブレーションチェック:** ホーミングオフセットとリミットが、ファームウェアにコンパイルされたフォロワーのキャリブレーションと一致している必要があります。
3. **現在姿勢ハンドシェイク:** 最初のコマンドは、計測された姿勢から `0.05 rad` 以内でなければなりません。
4. **ジョイントソフトリミット:** すべてのコマンドは、キャリブレーションされた範囲内に収まっている必要があります。
5. **コマンドごとのステップ制限:** アーミング後は、1 回のコマンドでターゲットを `0.25 rad` を超えて変更できません。
6. **フィードバックウォッチドッグ:** フォロワーフィードバックが `0.5 s` より古い場合、PC ブリッジはパブリッシュを停止します。
7. **Wi-Fi リカバリ:** Wi-Fi が 10 秒以内に復旧できない場合、XIAO はクリーンに再起動します。

これらのソフトウェアによるチェックは、物理的な非常停止を補完するものであり、置き換えるものではありません。

## トラブルシューティング

### XIAO が `Waiting for micro-ROS Agent` のままになる

- コンピュータと XIAO が同じ LAN 上にあることを確認します。
- `AGENT_IP` がコンピュータの現在の Wi-Fi IPv4 アドレスであることを確認します。
- Agent が UDP ポート `8888` を使用していることを確認します。
- ホットスポットでクライアント分離が有効になっていないか確認します。
- ファイアウォールが有効な場合は、UDP ポート `8888` を許可します。

### `servo_mask` が `0x3f` ではない

1 つ以上のサーボが応答していません：

- 電源を切り、3 線式バスケーブルを点検します。
- すべてのサーボに 1 から 6 までの一意の ID が割り当てられていることを確認します。
- 電源の電圧と電流定格を確認します。
- サーボバスを、設定された 1 Mbps のボーレートに保ちます。

### ファームウェアが `calib:0` を報告する

サーボ EEPROM が、`servo_bus.cpp` にコンパイルされている値と一致していません。フォロワーを USB ドライバボード経由で再接続し、再キャリブレーションを行い、3 つのファームウェア配列を更新してから、XIAO に再度書き込みます。

### 動作中に Wi-Fi が切断される

- アクセスポイントを近づけます。
- 外部アンテナをサーボの電源線や金属部品から離して配置します。
- デモ用に専用の 2.4 GHz ネットワークを使用します。
- シリアル診断出力で RSSI 値を監視します。
- サーボの電源を切った状態での結果と比較し、電源または電磁干渉の可能性を特定します。

### 関節の方向または可動範囲が正しくない

両方のアームを再キャリブレーションし、両方の JSON ファイルで関節の順序を確認します。また、`servo_bus.cpp` 内のフォロワー配列が、現在 XIAO に接続されている物理的なフォロワーと同じものであることを確認します。

## テスト結果

リファレンス構成では：

- 6 個すべてのフォロワーサーボが検出されました（`servo_mask=0x3f`）。
- `/joint_states` は約 20 Hz で配信されました。
- リーダーブリッジは 30 Hz でコマンドを配信しました。
- 6 個すべての関節が、スマートフォンのホットスポット越しに一緒に追従しました。
- XIAO は、書き込み後に USB データケーブルを外し、外部アーム電源を接続しても動作を継続しました。

## 参考資料

- [プロジェクトのソースコード](https://github.com/linao681/soarm101-drone-teleop)
- [LeRobot における SO-ARM100 および SO-ARM101 の入門](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/)
- [XIAO Bus Servo Adapter の入門](https://wiki.seeedstudio.com/ja/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

本稿は、独自に開発された統合について記録したものです。LeRobot、ROS 2、micro-ROS、PlatformIO、およびサーボライブラリは、それぞれのライセンスに従います。
