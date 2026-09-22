---
description: XIAO ESP32-C3 Bus Servo Adapter と micro-ROS を用い、Wi-Fi UDP 経由で SO-ARM101 フォロワー向けの低遅延ワイヤレス ROS 2 テレオペレーションリンクを構築します。
title: SO-Arm と XIAO によるワイヤレステレオペレーション
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
updatedAt: '2026-09-20'
url: https://wiki.seeedstudio.com/ja/soarm101_xiao_microros_wireless_teleoperation/
---

# XIAO ESP32-C3 と micro-ROS を用いた SO-ARM101 の有線／無線テレオペレーション

:::note Community Contribution
このチュートリアルは [@linao681](https://github.com/linao681) によるコミュニティ貢献です。Seeed Studio コミュニティとこのプロジェクトを共有していただきありがとうございます。
:::

## はじめに

このチュートリアルでは、SO-ARM101 リーダーから SO-ARM101 フォロワーを制御する、サポートされている 2 つの方法を説明します。

1. **有線リーダー + 無線フォロワー：** リーダーは標準 USB バスサーボドライバボードを使用します。
2. **無線リーダー + 無線フォロワー：** 各アームは Seeed Studio XIAO ESP32-C3 Bus Servo Adapter を使用します。

どちらのモードでも、フォロワーは micro-ROS を介して Wi-Fi UDP 経由で ROS 2 と通信します。無線リーダー側の XIAO は 6 つのリーダーアクチュエータ位置を読み取り、読み取り専用の状態を publish しますが、リーダーアームに位置コマンドを書き込むことは決してありません。

この実装は次の機能を提供します。

- `/joint_states` 上で、6 つすべてのフォロワージョイントからのフィードバック
- `/joint_command` 上で、6 つすべてのフォロワージョイントへのコマンド
- LeRobot におけるリーダーからフォロワーへのジョイントマッピング
- 予期しない位置ジャンプを防ぐ起動時ハンドシェイク
- キャリブレーション、ジョイントリミット、コマンドステップ、およびバス健全性チェック
- シーケンスチェック、フィードバックウォッチドッグ、安全な「最後のコマンド保持」動作、およびセッションリカバリ
- コンピュータの現在の Wi-Fi アドレスからのランタイム Agent 検出により、ホットスポットアドレスが変わっても再フラッシュが不要
- 無線リーダーが利用できない場合の診断および運用のための有線リーダーフォールバック
- 自動プレフライトチェックと、1 コマンドでのテレオペレーション起動

完全なソースコードは [soarm101-drone-teleop リポジトリ](https://github.com/linao681/soarm101-drone-teleop)で公開されています。

:::note

このプロジェクトは、将来のドローン搭載 SO-ARM101 デモンストレーションに向けた、地上試験済みプロトタイプとして開発されました。本ガイドでは、ロボットアームの通信とテレオペレーションリンクのみを扱います。飛行認証済みの制御または安全システムは提供しません。

:::

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

PC と XIAO は同じローカルネットワークに接続する必要があります。デモ用途として、スマートフォンのホットスポットまたは専用の 2.4 GHz アクセスポイントを使用できます。

## ハードウェア

- SO-ARM101 リーダー × 1
- SO-ARM101 フォロワー × 1
- リーダーのキャリブレーションと有線フォールバック用の標準 USB バスサーボドライバボード × 1
- フォロワー用 XIAO ESP32-C3 Bus Servo Adapter × 1
- 無線リーダーモード用の追加 XIAO ESP32-C3 Bus Servo Adapter × 1
- 適切に定格されたアーム用電源 × 2
- Ubuntu 22.04 搭載コンピュータ × 1
- 2.4 GHz Wi-Fi ネットワーク × 1
- キャリブレーションおよびファームウェア書き込み用 USB ケーブル

このリファレンスファームウェアは、モデル番号 `777` の STS3215 サーボ 6 個を使用する標準 5 V SO-ARM101 フォロワーでテストされています。

:::danger

- いかなるサーボケーブルを変更する前にも、サーボ電源を必ず切断してください。
- 使用している SO-ARM101 のバージョンに指定された電圧を使用してください。5 V アームに 12 V 電源を接続しないでください。
- USB はサーボに十分な電力を供給できません。
- 最初のテストは、安定した作業台上で、明確な緊急電源遮断手段を確保した状態で行ってください。
- ドローンの近くでテストする場合は、プロペラを取り外してください。

:::

## ソフトウェア要件

テスト済みのホスト構成は次のとおりです。

- Ubuntu 22.04
- ROS 2 Humble
- Feetech 対応の LeRobot
- micro-ROS Agent
- Python 3.10
- PlatformIO

micro-ROS Agent と PlatformIO がまだインストールされていない場合は、次を実行してインストールします。

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

重要なプロジェクトパスは次のとおりです。

```text
firmware/xiao_soarm/          PlatformIO firmware for the wireless follower
firmware/xiao_soarm_leader/   PlatformIO firmware for the wireless leader
tools/wireless_teleoperate.py ROS 2 and LeRobot teleoperation bridge
tools/soarm_agent_discovery.py Agent discovery service for both XIAOs
start_soarm_demo.sh           network, Agent, arm, and topic preflight checks
cali/                         leader and follower calibration files
```

このリポジトリには、無線フォロワー用と無線リーダー用の個別の PlatformIO ファームウェアプロジェクトが含まれています。プロジェクトには必要な ESP32-C3 micro-ROS ライブラリが同梱されているため、通常のユーザーが micro-ROS をクロスコンパイルする必要はありません。

## ステップ 2: 両方のアームをキャリブレーションする

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

キャリブレーション値は、1 台の物理アームに固有です。リポジトリにサンプルとして含まれているキャリブレーション値を使用して、別のフォロワーを制御しないでください。

:::

### フォロワーのキャリブレーションをファームウェアにコピーする

フォロワー側の XIAO は、トルクを有効化する前にサーボ EEPROM を検証します。次のファイルを開きます。

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

これら 3 つの配列を、`cali/follower_recal.json` の値で置き換えます。

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

期待される順序は次のとおりです。

```text
shoulder_pan, shoulder_lift, elbow_flex,
wrist_flex, wrist_roll, gripper
```

次のコマンドは、3 つの配列を正しい順序で出力します。

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

## ステップ 3: Wi-Fi と Agent 検出を設定する

Ubuntu コンピュータと 2 台の XIAO を同じ 2.4 GHz Wi-Fi ネットワークに接続します。XIAO ファームウェアには SSID とパスワードのみが保存されます。コンピュータの現在の Agent アドレスは、ランチャーと検出サービスによって実行時にアナウンスされます。コンピュータの IP をパブリックなファームウェアファイルにハードコードしないでください。

```bash
ip -4 address
```

フォロワーファームウェアのディレクトリに入り、プライベート設定ファイルを作成します。

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

無線リーダーモードの場合は、`firmware/xiao_soarm_leader` 以下でも同じ手順を繰り返します。

`src/wifi_config.h` を編集します。

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
```

リーダーファームウェアでは、`firmware/xiao_soarm_leader/src/wifi_config.example.h` 内の、対応する `#define WIFI_SSID` および `#define WIFI_PASS` プレースホルダを使用します。

`wifi_config.h` は Git によって無視され、パブリックリポジトリに commit してはなりません。現在のランチャーは Agent 検出を使用してコンピュータの現在の Wi-Fi アドレスをアナウンスするため、通常はホットスポットの IP が変わっても、どちらの XIAO も再フラッシュする必要はありません。

:::tip

ESP32-C3 は 2.4 GHz Wi-Fi を使用します。スマートフォンのホットスポットが両方のバンドをサポートしている場合は、互換モードまたは 2.4 GHz モードを選択してください。

:::

## ステップ 4: XIAO をビルドして書き込む

1 度に 1 台ずつ、XIAO を USB 経由でコンピュータに接続します。アップロードの前に、ネイティブテストと ESP32-C3 ビルドを実行します。

```bash
(cd firmware/xiao_soarm && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
(cd firmware/xiao_soarm_leader && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
```

テストとビルドが通ったら、選択したファームウェアを書き込みます。

```bash
cd firmware/xiao_soarm
pio run -e seeed_xiao_esp32c3 --target upload
pio device monitor -b 115200
```

無線リーダーモードの場合は、代わりに `firmware/xiao_soarm_leader` からアップロードおよびモニタコマンドを実行します。

フォロワーアームに外部電源を接続します。起動が成功すると、次のようなメッセージが表示されます。

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` は、6 つすべてのサーボ ID から応答があったことを意味します。キャリブレーションが一致しない場合でも、ファームウェアは状態を報告しますが、モーションコマンドを拒否します。

書き込み後は、USB ケーブルはシリアルモニタリングにのみ必要です。対応するアームの外部サーボ電源は接続したままにしてください。リーダーファームウェアはトルクを無効化し、位置／状態のみを publish します。位置コマンドを実行するコンポーネントはフォロワーファームウェアです。

## ステップ 5: micro-ROS Agent とプレフライトを開始する

プロジェクトルートから、ランチャーを使って Agent と検出サービスを起動できます。

```bash
source /opt/ros/humble/setup.bash
./start_soarm_demo.sh --leader wireless --check
```

ランチャーは Agent と検出サービスを起動し、その後、必要な ROS 2 トピックをチェックします。XIAO が Agent を検出すると、シリアルモニタには次のように表示されるはずです。

```text
micro-ROS ready
```

ROS 2 インターフェースは次のとおりです。

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

現在姿勢のスタートアップ・ハンドシェイクが完了する前に、任意の関節値を送信しないでください。

## ステップ 6: 有線またはデュアル無線テレオペレーションを実行する

2 つのリーダー入力のうち 1 つを選択します。有線モードでは、通常の USB バスサーボドライバを介してリーダーをコンピュータに接続します。無線モードでは、リーダーを外部電源で給電し、その XIAO を設定済みの Wi-Fi ネットワークに接続したままにします。

安定したシリアルパスを探します：

```bash
ls -l /dev/serial/by-id/
```

プロジェクトルートからローカル設定をエクスポートします：

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_PYTHON="$(command -v python)"
```

まず、動かさないプレフライトチェックを実行します：

```bash
./start_soarm_demo.sh --leader wireless --check
```

これは次の項目を検証します：

- Wi-Fi SSID と Agent の IP；
- 選択されたリーダー入力（`wireless` は `/leader/raw_state` と `/leader/status` を確認し、`wired` は起動時に USB アダプタを確認します）；
- リーダーとフォロワーのキャリブレーションファイル；
- micro-ROS Agent；
- `/joint_states` 上のフォロワーのライブフィードバック；
- 別のテレオペレーションプロセスが同じリーダーバスを使用していないこと。

すべてのチェックに合格したら、テレオペレーションを開始します：

```bash
./start_soarm_demo.sh --leader wireless

# Wired leader fallback:
./start_soarm_demo.sh --leader wired
```

ブリッジはフォロワーの初期姿勢を読み取り、トルクを有効にする前に同じ姿勢を繰り返しパブリッシュします。その後は相対マッピングを使用するため、フォロワーは現在位置から開始し、選択されたリーダーに対する変化を追従します。無線セッションが復旧した場合、ブリッジは通常のコマンドを再開する前に、リーダーの現在姿勢へ向けてブレンドします。停止するには `Ctrl+C` を押します。フォロワーは最後に指令された位置を保持します。

:::warning

ブリッジを停止しても、またはコマンドが失われても、トルクは解除されません。フォロワーは最後に指令された位置を保持します。緊急停止が必要な場合は、サーボ電源を切断してください。

:::

## 安全メカニズム

このリファレンス実装には、デモをより予測しやすくすることを目的とした複数のチェックが含まれています：

1. **サーボ ID チェック：** 6 つすべての ID と型番が一致している必要があります。
2. **EEPROM キャリブレーションチェック：** ホーミングオフセットとリミットが、ファームウェアにコンパイルされているフォロワーのキャリブレーションと一致している必要があります。
3. **現在姿勢ハンドシェイク：** 最初のコマンドは、計測された姿勢から `0.05 rad` 以内でなければなりません。
4. **関節ソフトリミット：** すべてのコマンドは、キャリブレーションされた範囲内に収まっていなければなりません。
5. **コマンドごとのステップ制限：** アーミング後、ターゲットは 1 回のコマンドで `0.25 rad` を超えて変化してはなりません。
6. **フィードバック・ウォッチドッグ：** フォロワーのフィードバックが `0.5 s` より古い場合、PC ブリッジはパブリッシュを停止します。
7. **Wi-Fi リカバリ：** Wi-Fi が 10 秒以内に復旧できない場合、XIAO はクリーンに再起動します。

これらのソフトウェアチェックは、物理的な非常停止を補完するものであり、置き換えるものではありません。

## トラブルシューティング

### XIAO が `Waiting for micro-ROS Agent` のままになる

- コンピュータと XIAO が同じ LAN 上にあることを確認します。
- ランチャーが現在の Wi-Fi IPv4 アドレスを報告し、Agent の検出を開始していることを確認します。
- Agent が UDP ポート `8888` を使用していることを確認します。
- ホットスポットでクライアント分離が有効になっていないか確認します。
- ファイアウォールが有効な場合は、UDP ポート `8888` を許可します。

### `servo_mask` が `0x3f` ではない

1 台以上のサーボが応答していません：

- 電源を切り、3 線式バスケーブルを点検します；
- すべてのサーボが 1 から 6 の一意の ID を持っていることを確認します；
- 電源の電圧と電流定格を確認します；
- サーボバスを設定済みの 1 Mbps ボーレートに保ちます。

### ファームウェアが `calib:0` を報告する

サーボ EEPROM が `servo_bus.cpp` にコンパイルされている値と一致していません。フォロワーを USB ドライバボード経由で再接続し、再キャリブレーションを行い、3 つのファームウェア配列を更新してから、XIAO に再書き込みしてください。

### 動作中に Wi-Fi が切断される

- アクセスポイントを近づけます；
- 外部アンテナをサーボ電源線や金属部品から離して配置します；
- デモ用に専用の 2.4 GHz ネットワークを使用します；
- シリアル診断出力で RSSI 値を監視します；
- サーボの電源を切った状態と比較し、電源または電磁干渉の可能性を特定します。

### 無線リーダーが準備完了にならない

- リーダー側の XIAO が `/leader/raw_state` と `/leader/status` の両方をパブリッシュしていることを確認します；
- 6 台すべてのリーダーサーボが応答し、トルクが無効になっていることを確認します；
- `cali/leader_recal.json` が実機のリーダーと一致していることを確認します；
- 一時的なフォールバックとして `./start_soarm_demo.sh --leader wired` を使用します。

### 関節の方向または可動範囲が正しくない

両方のアームを再キャリブレーションし、両方の JSON ファイルで関節の順序を確認します。また、`servo_bus.cpp` 内のフォロワー配列が、現在 XIAO に接続されている物理フォロワーから取得されたものであることを確認してください。

## 検証範囲

このプロジェクトは、リファレンス構成において次の条件で検証されています：

- 6 台すべてのフォロワーサーボが検出された（`servo_mask=0x3f`）；
- `/joint_states` が約 20 Hz でパブリッシュされた；
- リーダーブリッジが 30 Hz でコマンドをパブリッシュした；
- 6 つすべての関節が、スマートフォンのホットスポット越しに同時に追従した；
- XIAO は、書き込み後に USB データケーブルを外し、外部アーム電源を接続した状態でも動作を継続した。

デュアル無線経路と有線フォールバックの両方が、現在のランチャーでサポートされています。リファレンスとなる無線耐久テストは 2026-09-20 に実施され、783 秒（約 13 分）継続しました。このテストでは、コマンドタイムアウト 0 回、コマンド拒否 0 回、リーダーリカバリ 0 回を記録し、フィードバックは平均 19.87 Hz、コマンド応答遅延は P50 で 66.0 ms、観測された最小 RSSI は -65 dBm でした。これらの数値は 1 回のリファレンス実行を示すものであり、すべての Wi-Fi 環境での保証ではありません。

## 参考文献

- [Project source code](https://github.com/linao681/soarm101-drone-teleop)
- [Getting Started with SO-ARM100 and SO-ARM101 in LeRobot](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/)
- [Getting Started with the XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/ja/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

このドキュメントは、独自に開発された統合を記録したものです。LeRobot、ROS 2、micro-ROS、PlatformIO、およびサーボライブラリは、それぞれのライセンスに従います。
