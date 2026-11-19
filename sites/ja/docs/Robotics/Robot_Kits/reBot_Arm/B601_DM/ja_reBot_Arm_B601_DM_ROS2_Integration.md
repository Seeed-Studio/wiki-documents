---
description: このチュートリアルでは、reBot Arm B601-DM 向けに ROS2 control ワークスペースをセットアップする方法を説明します。アーム制御、RViz 可視化、MoveIt2 連携を含みます。
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png
title: B601-DM と ROS2
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-05-29
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_ros2_integration/
---
import '/src/css/rebot-wiki-style.css';


# reBot Arm B601-DM ROS2 連携

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="reBot Arm B601-DM" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.2.3-brightgreen.svg" alt="Version v0.2.3" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 Control · RViz 可視化 · MoveIt2 対応</strong>
</p>

このチュートリアルでは、reBot Arm B601-DM 向けに ROS2 control ワークスペース `rebotarm_ros2` を実行する方法を説明します。このワークスペースは、低レベルの `reBotArm_control_py` Python SDK を ROS2 のトピック、サービス、アクションにラップし、上位レベルのプランニング、ビジュアルグラスピング、RViz 可視化、カスタムアプリケーション開発との統合を容易にします。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v2MlI3zMi1k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
このチュートリアルでは、`Ubuntu 24.04 + ROS2 Jazzy + Python 3.12` を主な参照環境として使用します。ROS2 Humble / Ubuntu 22.04 でも、対応する ROS2 ディストリビューションを用いれば同じワークフローに従うことができます。
:::

## プロジェクトの特長

1. **標準的な ROS2 インターフェース**  
   `/joint_states`、`FollowJointTrajectory`、`GripperCommand`、`MoveToPose` などの一般的な ROS2 インターフェースを提供し、MoveIt2、ビジュアルグラスピングパイプライン、タスクレベルシステムとの統合を容易にします。

2. **すぐに使える運動学・軌道・重力補償ノード**  
   順運動学 / 逆運動学、軌道実行、重力補償、および RViz 可視化のサポートをすぐに使える形で提供します。

3. **MoveIt 2 連携**  
   完全な MoveIt 2 設定とアプリケーションデモを含み、RViz MotionPlanning プラグインによるシミュレーションプランニングと実機実行をサポートします。

## 仕様

このチュートリアルで使用するハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>仕様</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ロボットアームモデル</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>自由度</td>
      <td>6-DOF + グリッパ</td>
    </tr>
    <tr>
      <td>モーターバージョン</td>
      <td>DAMIAO モーターバージョン</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>USB2CAN シリアルブリッジ経由の CAN バス</td>
    </tr>
    <tr>
      <td>デフォルトシリアルポート</td>
      <td><code>/dev/ttyACM0</code></td>
    </tr>
    <tr>
      <td>推奨システム</td>
      <td>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</td>
    </tr>
    <tr>
      <td>参考システム</td>
      <td>Ubuntu 22.04 + ROS2 Humble + Python 3.10</td>
    </tr>
  </tbody>
</table>

## 部品表 (BOM)

| コンポーネント | 数量 | 同梱 |
|--|--|--|
| reBot Arm B601-DM ロボットアーム | 1 | ✅ |
| グリッパ | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ (24V) | 1 | ✅ |
| USB-C / 通信用ケーブル | 1 | ✅ |
| Ubuntu ホスト PC | 1 | 自前で用意 |

## 配線

1. USB2CAN シリアルブリッジをロボットアームの CAN バスに接続します。
2. 24V 電源を接続し、USB2CAN アダプタをホスト PC に接続します。
3. ホストがシリアルデバイスを認識していることを確認します：

```bash
ls /dev/ttyACM*
```

シリアルポートの権限を一時的に付与する必要がある場合：

```bash
sudo chmod 666 /dev/ttyACM0
```

代わりに、現在のユーザーを `dialout` グループに追加することを推奨します。変更を有効にするには、一度ログアウトして再度ログインしてください：

```bash
sudo usermod -a -G dialout $USER
```

## 動作環境要件

| 項目 | 推奨要件 |
|------|------|
| オペレーティングシステム | Ubuntu 24.04、Ubuntu 22.04 は参考として使用可能 |
| ROS2 | Jazzy、Humble は参考として使用可能 |
| Python | システム Python。Jazzy では通常 3.12、Humble では通常 3.10 を使用 |

## インストール手順

### ステップ 0. ロボットアームの基本セットアップを完了する

ROS2 連携を始める前に、[reBot Arm B601-DM 入門ガイド](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) を完了してください。組み立て、モーター ID 設定、ゼロ位置初期化、基本的な接続確認を含みます。

### ステップ 1. 使用している Ubuntu に対応する ROS2 バージョンをインストールする

公式 ROS2 ドキュメントを参照してください：

- [ROS2 Jazzy Ubuntu インストール](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [ROS2 Humble Ubuntu インストール](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

:::tip

Ubuntu 24.04 を使用している場合は、ROS 2 Jazzy をインストールしてください。

Ubuntu 22.04 を使用している場合は、ROS 2 Humble をインストールしてください。

:::

### ステップ 2. ビルドツールと ROS 依存パッケージをインストールする

colcon、pip、Git、およびこのワークスペースに必要な ROS パッケージをインストールします：

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio
```

インストールを確認します：

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

ROS2 Humble を使用する場合は、`ros-jazzy-*` パッケージ名を `ros-humble-*` に置き換え、かつ
`/opt/ros/humble/setup.bash` を source してください。

### ステップ 3. コードリポジトリをクローンする

このチュートリアルでは、`~/rebotarm_ros2` をワークスペースディレクトリとし、公式の Seeed-Projects リポジトリを使用します：

```bash
cd ~
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd ~/rebotarm_ros2
```

別のディレクトリにクローンした場合は、以下に出てくる `~/rebotarm_ros2` をすべてその絶対パスに置き換えてください。`third_party`、`src`、`install` などの相対パスは、ワークスペースルートからの相対パスです。

### ステップ 4. motorbridge をインストールする

公式 PyPI ソースから `motorbridge` をインストールします：

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### ステップ 5. 低レベル SDK を取得する

```bash
cd ~/rebotarm_ros2
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### ステップ 6. ワークスペースをビルドする

:::note コードバージョン
ここで説明するステータスハートビート、重力補償の終了検出、および矩形トレースは、[ROS2 controller PR #7](https://github.com/Seeed-Projects/reBotArmController_ROS2/pull/7) に対応しています。これらの挙動を使用する前に、チェックアウトしたコードにこれらの変更が含まれていることを確認し、その後コントロールノードを再ビルドして再起動してください。
:::

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

実行可能エントリを確認します：

```bash
ros2 pkg executables rebotarmcontroller
```

想定されるエントリには次のものが含まれます：

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## クイックスタート

:::caution
ロボットを使用する前に、次の点に注意してください：**アームコントローラは高い自由度を持ちます。コントローラを有効化したりアームに給電したりする前に、作業空間に人や障害物がないことを必ず確認してください。事故を避けるため、すべての動作コマンドを慎重に確認してください。危険な操作は固く禁じられており、その結果については自己責任となります。**
:::

### フルシステムを起動する

新しいターミナルを開くたびに、ワークスペースに移動し、ROS2 とワークスペース環境の両方を source してください。以下のコマンドでは `/opt/ros/jazzy/setup.bash` を使用していますが、ROS2 Humble の場合は代わりに `/opt/ros/humble/setup.bash` を使用します。

フルブリングアップでは次のものが起動します：

- `reBotArmController` コントロールノード
- `robot_state_publisher`
- オプションの RViz

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0  #Do not open the RViz visualization interface when starting communication
```

:::tip
新しいターミナルを開くたびに、最初に次のコマンドを実行する必要があります

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
```
:::

シリアルポートが `/dev/ttyACM0` でない場合は、実際のデバイス名に置き換えてください：

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM1
```

### RViz 可視化のみを起動する

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0 use_rviz:=true   #Open the RViz visualization interface when starting communication
```

RViz でモデルが小さく表示される場合は、左側の `Views` パネルからビューを調整します：

- `Target Frame` を `base_link` に設定
- `Distance` を `1.0` や `1.5` などに調整
- マウスホイールでズーム
- `Fixed Frame` が `base_link` に設定されていることを確認

### コントロールノードのみを起動する

URDF と RViz が不要な場合：

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=dm channel:=/dev/ttyACM0
```

ノードを直接実行することもできます：

```bash
ros2 run rebotarmcontroller reBotArmController
```

:::tip
`driver.launch.py` が `rebotarm_bringup/config` から設定ファイルを渡すのとは異なり、コントローラを直接実行すると、デフォルトの SDK アーム設定にフォールバックします。通常の使用では、ROS を通して起動することを推奨します。
:::

## ROS2 ネームスペース

デフォルトのネームスペースは次のとおりです：

```text
/rebotarm
```

したがって、すべてのトピック、サービス、アクションは `/rebotarm` がプレフィックスとして付きます。例えば：

```text
/rebotarm/joint_states
/rebotarm/enable
/rebotarm/move_to_pose
```

複数のロボットアームが必要な場合や、他の ROS2 システムと並行して実行したい場合は、起動時にネームスペースを変更できます：

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm arm_namespace:=left_arm
```

この場合、`/rebotarm/joint_states` は `/left_arm/joint_states` になります。

## 共通 API

### ステータストピック

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 軸ジョイントの位置、速度、トルク |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 制御モード、有効状態、ステートマシン、エラーコード |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | 単一ジョイントのモータ状態 |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | グリッパーモータ状態 |

例：

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

`--once` は 1 つのメッセージを受信すると終了します。制御ノードは、起動時および状態変化時に加えて、毎秒 `arm_status` をパブリッシュするため、追加の QoS オプションは不要です。ソースを変更して再ビルドした後は、制御ノードを再起動してください。出力が届かない場合は、`Ctrl+C` でチェックを停止し、ターミナル A の制御ノードが動作していることを確認してください。

### サービス

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | ロボットアームを有効化 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | ロボットアームを無効化 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | セーフホーム位置に戻る |
| `/rebotarm/set_mode` | `rebotarm_msgs/srv/SetMode` | `mit`、`pos_vel`、`vel` の間で切り替え |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | 全ジョイントまたは単一ジョイントのゼロ位置を設定 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 事前チェックと目標ジョイント解 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | グリッパーモータ位置を rad 単位で設定 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 重力補償を開始 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 重力補償を停止 |

### アクション

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | エンドエフェクタ姿勢の動作 |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 標準ジョイント軌道互換のエントリポイント |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | 標準グリッパーアクション |

## 基本制御の例

### 1. 制御ノードを起動して状態を確認する

**ターミナル A：制御ノードを起動し、そのまま動かしておきます。** このノードはトピック、サービス、アクションのリクエストを継続的に処理します。クイックスタートから `bringup.launch.py` または `driver.launch.py` がすでに動作している場合は、そのターミナルを開いたままにし、同じアームに対して 2 つ目のドライバを起動しないでください。

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup driver.launch.py model:=dm channel:=/dev/ttyACM0
```

`reBotArmController started` と表示されたら、ターミナル A はそのままにしておき、以降のコマンドには別のターミナルを使用します。

**ターミナル B：環境を読み込み、状態メッセージが届いていることを確認します。**

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

各 `--once` コマンドは 1 つのメッセージを受信すると終了します。ターミナル B で手順 2〜5 を続けてください。継続的に監視したい場合は、別のターミナルで同じ環境を読み込み、`ros2 topic echo /rebotarm/joint_states` を実行します。連続的なトピックリスナーはコマンド送信には必須ではありませんが、ターミナル A のドライバは動作し続けている必要があります。

制御ノードは接続後、自動的にアームを有効化し、制御ループを開始します。通常、`arm_status` 内の `enabled` と `control_loop_active` はどちらも `true` であり、手動で `/rebotarm/enable` を呼び出す必要はありません。以前にアームを無効化していた場合は、まず軌道、ホーミング、重力補償タスクが動作していないことを確認し、その後で再度有効化します：

```bash
# Only needed to resume control after the arm was disabled
ros2 service call /rebotarm/enable std_srvs/srv/Trigger "{}"
```

### 2. エンドエフェクタ姿勢へ移動する

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

### 3. ジョイント目標を送信する

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. セーフホームと無効化

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## デモ例

ターミナル A の制御ノードは動作させたままにし、以下の例にはターミナル B を使用します。ドライバがすでに動作している場合は、起動コマンドを繰り返さないでください。新しいターミナルごとに、まず環境を読み込みます：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
```

`MoveTo` と `MoveToPose` は、制御ノード起動直後から直接実行できます。`GravityCompensation` と `GripperControl` は内部で `/rebotarm/enable` を呼び出すため、開始前に手動でアームを有効化しないでください。例は 1 つずつ実行し、それぞれが終了してから次を開始してください。

### ジョイント動作の例

6 つのジョイントすべてを同時に制御します。単位は rad です：

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

単一ジョイントのみを制御します：

```bash
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0
```

### エンドエフェクタ姿勢の例

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

### 重力補償の例

```bash
ros2 run rebotarmcontroller GravityCompensation
```

このスクリプトは最初に `/rebotarm/enable` を呼び出し、その後に重力補償を開始します。`Ctrl+C` が押されると、`/rebotarm/safe_home` を呼び出し、その後に `/rebotarm/disable` を呼び出します。`safe_home` は、セーフホーム位置へ移動する前に重力補償からの離脱を処理します。

ターミナル A の制御ノードが終了すると、ターミナル B の重力補償プログラムも自動的に終了します。また、ステータスのハートビートが約 3 秒間途切れた場合にも、重複したホーミングや無効化リクエストを送信することなく終了します。RS がすでにデフォルトの MIT モードにある場合、重力補償に入っても有効状態は維持されます。DM は、位置／速度モードから MIT へ切り替える際に、既存のモード切り替え手順を保持します。

別の方法として、サービスを手動で呼び出すこともできますが、このシーケンスをスクリプトと同時に実行しないでください。通常どおり起動された制御ノードには、追加の enable リクエストは不要です。無効化されていた場合は、まず「基本制御の例」に従って再度有効化してください。

```bash
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### 対話的グリッパーの例

```bash
ros2 run rebotarmcontroller GripperControl
```

終了時に、このスクリプトはグリッパーを閉じ、`/rebotarm/disable` を呼び出します。さらに手動でグリッパーコマンドを送信する前に、アームを再度有効化してください。このスクリプトを再度実行すると、内部でアームが有効化されます。

起動後、次を入力します：

```text
o / open    Open the gripper
c / close   Close the gripper
q / quit    Quit
```

## 設定

デフォルトの設定ファイルは次の場所にあります：

```text
src/rebotarm_bringup/config/
```

| ファイル | 説明 |
|---|---|
| `arm.yaml` | 6 つのアームジョイントのモータ、フィードバック ID、および制御パラメータ |
| `gripper.yaml` | グリッパーモータ ID、フィードバック ID、ベンダー、および制御パラメータ |
| `driver_params.yaml` | ROS パラメータの例 |

一般的な起動パラメータ：

| パラメータ | デフォルト | 説明 |
|---|---|---|
| `arm_config` | bringup に含まれる組み込みの `arm.yaml` | アーム設定ファイルのパス |
| `gripper_config` | bringup に含まれる組み込みの `gripper.yaml` | グリッパー設定ファイルのパス |
| `channel` | 空文字列 | デフォルトで YAML を使用。空でない場合はシリアルポートを上書き |
| `joint_state_rate` | `100.0` | `/rebotarm/joint_states` のパブリッシュレート |
| `cmd_arbitration` | `reject` | アーム軌道実行中の低レベルコマンドの仲裁方式。`reject` または `preempt`。グリッパーの低レベルコマンドはアーム軌道をプリエンプトしません |
| `arm_namespace` | `rebotarm` | ROS ネームスペースのプレフィックス |
| `frame_id` | `base_link` | ロボットアームのベースフレーム |
| `ee_frame_id` | `end_link` | エンドエフェクタフレーム |
| `use_rviz` | `false` | RViz を起動するかどうか |

## 低レベルコマンドトピック

ROS2 ワークスペースには、低レベルのモータデバッグ用トピックも用意されています：

| API | 型 | 説明 |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | 単一ジョイントの MIT 生コマンド |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | 単一ジョイントの位置・速度生コマンド |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | 単一ジョイントの速度生コマンド |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | グリッパー MIT 生コマンド |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | グリッパー位置・速度生コマンド |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | グリッパー速度生コマンド |

:::caution
低レベルコマンドトピックはデバッグおよび実験用です。これらは IK、軌道計画、URDF の制限チェックを実行しません。アプリケーションレベルのモーションには、`/move_to_pose`、`/follow_joint_trajectory`、`/gripper/set` などのサービスやアクションを優先して使用してください。
:::

## MoveIt 2

MoveIt 2 は、ここで逆運動学、衝突チェック、軌道計画および実行に使用されるモーションプランニングフレームワークです。デモはそれぞれ専用のパッケージに分離されており、アプリケーションフローがベースドライバから分離された状態を保ちます。
詳細については、公式の [MoveIt 2 Documentation](https://moveit.picknik.ai/main/index.html) を参照してください。

MoveIt 関連の内容は 2 つのパッケージに分割されています：

| パッケージ | 目的 |
|---|---|
| `rebotarm_moveit_config` | ロボットモデル、SRDF、運動学、関節制限、コントローラおよび RViz 設定 |
| `rebotarm_moveit_demos` | MoveIt 2 ベースのアプリケーションデモ |

MoveIt 環境は、計画と実行のために `ros2_control` と `move_group` を通じてシミュレートされたハードウェアを使用します。これは、RViz 内でモデル、IK、軌道計画、およびデモフローを検証することを目的としています。

このリポジトリは実機ハードウェアもサポートします。実機を接続する前に、アームのゼロ構成、関節方向、関節制限、速度制限、およびグリッパの可動範囲がすべて正しいことを確認するか、リポジトリのデフォルト設定のままにしてください。

### MoveIt 環境セットアップ

まず ROS2 環境が利用可能であることを確認します。現在 source されている ROS ディストリビューションに対して、`ROS_DISTRO` を通じてパッケージをインストールできます：

```bash
sudo apt update
sudo apt install -y \
  ros-${ROS_DISTRO}-moveit \
  ros-${ROS_DISTRO}-moveit-configs-utils \
  ros-${ROS_DISTRO}-moveit-kinematics \
  ros-${ROS_DISTRO}-moveit-planners-ompl \
  ros-${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-${ROS_DISTRO}-ros2-control \
  ros-${ROS_DISTRO}-ros2-controllers \
  ros-${ROS_DISTRO}-xacro
```

MoveIt の設定とデモはこのワークスペースに含まれています。依存関係をインストールしたら、ワークスペースを再ビルドします：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

MoveIt パッケージとデモのエントリポイントを確認します：

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

想定されるエントリには次のものが含まれます：

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### MoveIt を使用する

MoveIt のプランニングは、シミュレーションと実環境の両方で、RViz の GUI または ROS ノードを通じて使用できます。

#### シミュレーションで MoveIt を使用する

MoveIt は RViz シミュレーションのために ros2_control 仮想ハードウェアインターフェースを使用します：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=dm
```

デフォルトでは次のノードが起動します：

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- MoveIt MotionPlanning プラグイン付きの RViz

RViz は自動的に開き、ロボットの URDF モデルを読み込みます。GUI 左側のパネルからモーションを制御できます。

RViz なしで MoveIt 環境を実行するには：

```bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=dm use_rviz:=false
```

#### reBotArm ハードウェアで MoveIt を使用する

実機ロボットの場合は、まず仮想コントローラではなくハードウェアインターフェースを使用してコントローラを起動し、その後ハードウェア用 MoveIt 環境を起動します：

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=dm channel:=/dev/ttyACM0
```

別のターミナルで：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
```

繰り返しますが、実機ハードウェアで任意のデモを実行する前に、作業空間に人や障害物がないことを確認し、RViz で計画経路を検証し、いつでもコントローラを停止できるように準備しておいてください。

#### RViz で目標を設定して実行する

1. `MotionPlanning` → `Planning` で、`Start State` を `<current>` に設定し、現在の関節フィードバックから計画します。すでに `<current>` が表示されている場合は、いったん `home` を選択してから再度 `<current>` に戻し、状態が更新されるのを待ちます。
2. `Goal State` を `home` に設定し、`Joints` を開いて目標を調整します。すでに `home` が選択されている場合は、別のオプションを選んでから再度 `home` を選択してください。**編集する前に、テーブルの見出しが `Group joints of goal state` になっていることを確認してください。** `Group joints of start state` と表示されている場合は開始状態を編集しているので、`Planning` に戻って `Goal State` を再度選択してください。
3. 初期シミュレーションチェックとして、目標の `joint1` だけを約 `10°` に設定し、他の関節はゼロのままにします。`Joints` エディタ内の回転関節値は度数法を使用しますが、ROS の関節状態と軌道はラジアンを使用します。
4. `Plan` をクリックしてプレビューを確認し、その後 `Execute` をクリックします。プランニング後にアームの状態が変化した場合は、現在の状態から再度プランニングしてください。

ROS2 Humble の RViz プラグインでは、`Joints` は直近に更新された開始または目標状態のどちらかを編集します。`Start State` を設定した後や実行が完了した後は、再度編集する前に `Group joints of goal state` であることを確認してください。

シアンの球と赤・緑・青のリングは、手動プランニング用のエンドエフェクタ操作コントロールです。左下の `Displays` パネルで `MotionPlanning` → `Planning Request` を展開します：

- **エンドエフェクタを手動でドラッグする：** `Query Start State` を無効にし、`Query Goal State` を有効にして目標を編集します。
- **矩形またはピック＆プレーススクリプトを実行する：** `Query Start State` と `Query Goal State` の両方を無効にして球とリングを非表示にします。手動ドラッグを再開するには、`Query Goal State` を再度有効にします。
- **ロボットと軌跡を表示し続ける：** `PlanningScene` と `RectangleTrace` を有効にしたままにします。`RectangleTrace` のトピックを `/draw_square/markers` に設定します。古い RViz ウィンドウにトレース表示がない場合は、`Add` → `By display type` → `MarkerArray` を選択し、その `Topic` を `/draw_square/markers` に設定するか、MoveIt を再起動して更新された RViz 設定を読み込んでください。

実行時に `Invalid Trajectory: start point deviates from current robot state more than 0.05` に続いて `failed or timeout reached` が報告される場合、軌道の開始点が現在の関節フィードバックと一致していません。このエラーでは、`expected` が軌道の開始点、`current` がフィードバックであり、最終目標ではありません。開始状態をリセットし、自分が目標を編集していることを確認してから再計画してください。実行タイムアウトを延長したり開始許容誤差を緩めたりしても、この不一致は解消されません。

シミュレーションには `demo.launch.py` を、実機アームにはハードウェアドライバと `hardware.launch.py` を使用してください。2 つの MoveIt 環境を同時に実行しないでください。joint-state publisher を確認するには、次を実行します：

```bash
ros2 topic info /joint_states --verbose
ros2 topic info /rebotarm/joint_states --verbose
```

### Draw-square デモを実行する

この例では **モックシミュレーション** を使用します。シミュレートされた `ros2_control` ハードウェアインターフェースが、物理的な接触をシミュレートすることなく RViz 内にロボットとその動きを表示します。デモは実行中の MoveIt 環境に接続します。`model:=dm` はロボットモデルを選択するだけであり、シミュレーションか実機ハードウェアかを選択するものではありません。

**1. ターミナル A：シミュレーションを起動し、そのまま実行し続けます。** このシミュレーションがすでに実行中の場合は、再度起動しないでください：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=dm
```

ROS2 Humble の場合は、これ以降のコマンドも含めて `jazzy` を `humble` に置き換えてください。ハードウェアドライバと `hardware.launch.py` を前述のとおり起動した場合にのみ、このデモは実機アームを駆動します。2 つの環境を同時に実行しないでください。

**2. ターミナル B：矩形デモを実行します。** デモコードを変更した後は、ワークスペースから `colcon build --symlink-install --packages-select rebotarm_moveit_demos rebotarm_moveit_config` を実行し、再度環境を source してください。RViz で `Plan` や `Execute` をクリックする必要はありません：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
```

`draw_square` は最初にグリッパを閉じます。成功を確認した後、アームをリセットし、同一平面上の矩形の 4 つの頂点を通過してから最初の頂点に戻ります。グリッパインターフェースが利用できない場合やクローズに失敗した場合、デモは停止します。

RViz では、**細いシアンの線が参照用の矩形であり、黄色の線が TF からサンプリングされた実際の `gripper_tcp` の動きです。** 記録は最初の頂点に到達した後に開始され、リセットと接近の動きは含まれません。デモを再実行すると、以前のトレースは消去されます。デモは頂点間で関節空間プランニングを使用するため、実際の動きが 4 本の直線の参照エッジに厳密に沿うことは保証されません。

デフォルトパラメータは次の場所にあります：

```text
src/rebotarm_moveit_demos/config/draw_square.yaml
```

主なパラメータ：

| パラメータ | 説明 |
|---|---|
| `start_point` | デモ開始前の関節リセット位置 |
| `closed_gripper_position` | クローズ時のシミュレートされた片側グリッパ関節位置。デフォルトは `0.0` |
| `hardware_closed_gripper_position` | クローズ時のハードウェアグリッパモータ位置。デフォルトは `0.0`。使用前にハードウェアの制限を確認してください |
| `rectangle_center` | `base_link` における矩形の中心 |
| `rectangle_width` / `rectangle_height` | メートル単位の矩形寸法 |
| `tcp_rpy` | TCP の姿勢。デフォルトは下向きのグリッパ |
| `tcp_yaw_offsets` | 大きな joint6 の巻き付きを避けるために使用される代替 IK ヨー値 |

### Pick-place デモを実行する

ターミナル A でモックシミュレーションを実行し続けます。矩形デモが終了したら、ターミナル B で次を実行します。RViz では `Query Goal State` と `Query Start State` の両方を無効にしたままにし、`Plan` や `Execute` をクリックしないでください。

代わりにハードウェアドライバと `hardware.launch.py` を起動している場合は、同じコマンドで実機アームを駆動します。pick-place デモはシミュレーションとハードウェア環境を起動したり切り替えたりしません：

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=dm
```

デフォルトパラメータは次の場所にあります：

```text
src/rebotarm_moveit_demos/config/pick_place.yaml
```

共通パラメータ：

| パラメータ | 説明 |
|---|---|
| `ready_point` | ピック／プレースの前後で使用される待機ジョイント位置 |
| `pick_position` | `base_link` における物体の底面中心位置 |
| `pick_tcp_rpy` / `place_tcp_rpy` | ピックおよびプレース用の TCP 姿勢 |
| `object_dimensions` | プランニングシーン内の物体寸法（メートル単位） |
| `max_gripper_width` | グリッパの合計最大開口幅、デフォルトは `0.09m` |
| `open_gripper_position` / `closed_gripper_position` | シミュレーション用片側グリッパジョイントの開／閉位置 |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | 実機グリッパモータの開／閉位置 |
| `grasp_gripper_to_object_width` | 物体の幅から把持位置を計算 |

モックシミュレーションでは、`pick_place` は仮想オブジェクトをプランニングシーンに追加します。シーンへのアタッチとデタッチによってオブジェクトがグリッパに追従しますが、これは物理的な接触や把持力をシミュレートするものではありません。

`pick_place` はグリッパを開き、ピック姿勢へ移動し、グリッパを閉じ、プレース姿勢へ移動してオブジェクトを解放します。シミュレーション用グリッパジョイント位置と実機グリッパモータ位置は別パラメータです。実機で動かす前に、グリッパの開閉方向とリミットを必ず確認してください。

### MoveIt 設定ファイル

| ファイル | 説明 |
|---|---|
| `rebotarm_moveit_config/config/rebotarm.urdf.xacro` | MoveIt が使用するロボットモデル |
| `rebotarm_moveit_config/config/rebotarm.srdf` | MoveIt のグループ、エンドエフェクタ、デフォルト状態 |
| `rebotarm_moveit_config/config/kinematics.yaml` | IK ソルバ設定 |
| `rebotarm_moveit_config/config/joint_limits.yaml` | MoveIt プランニングで使用されるジョイントリミット |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | MoveIt 軌道実行コントローラ設定 |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | ros2_control コントローラ設定 |
| `rebotarm_moveit_config/config/initial_positions.yaml` | シミュレートされたハードウェア用の初期ジョイント位置 |
| `rebotarm_moveit_demos/config/draw_square.yaml` | 四角形描画デモのパラメータ |
| `rebotarm_moveit_demos/config/pick_place.yaml` | ピック＆プレースデモのパラメータ |

## FAQ

### 1. 起動時に `open serial port /dev/ttyACM0 failed` が表示される

これは、デフォルトのシリアルポートが存在しないか、デバイス名が変更されたことを意味します。まず実際のシリアルデバイスを確認します：

```bash
ls /dev/ttyACM*
```

その後、`channel` で指定します：

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM1
```

### 2. 起動時に `Device or resource busy` が表示される

これは、そのシリアルポートがすでに別のプロセスに占有されていることを意味します。よくある原因としては、以前起動した ROS2 ノード、SDK のサンプル、終了していないデバッグスクリプトなどがあります。まずプロセスを確認します：

```bash
ps aux | grep -E "reBotArmController|ros2|python"
```

シリアルポートを占有しているプロセスを停止してから再起動してください。アームとグリッパは同じ低レベル Controller を共有する必要があります。アームとグリッパで同じシリアルポートを別々に開かないでください。

### 3. Permission denied

シリアルデバイスは存在するが、パーミッションが拒否される場合：

```bash
sudo usermod -a -G dialout $USER
```

変更を有効にするには、一度ログアウトしてから再ログインしてください。一時的なデバッグであれば、次のコマンドを実行することもできます：

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. RViz にロボットモデルが表示されない

次の点を確認してください：

- ワークスペースが source 済みか：`source install/setup.bash`
- `Fixed Frame` が `base_link` に設定されているか
- `robot_state_publisher` が正しく起動しているか
- URDF のメッシュパスが `package://rebotarm_bringup/description/meshes/...` になっているか

### 5. FastDDS SHM ポートの警告が表示される

ターミナルに次のような表示が出る場合：

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

これは通常、以前の ROS2 プロセスが異常終了した後に残った FastDDS の共有メモリロックファイルが原因です。サービスやアクションが正常に応答している場合、この警告は通常制御には影響しません。

クリーンアップするには、まず関連する ROS2 プロセスを停止し、次のコマンドを実行します：

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

共有メモリトランスポートを一時的にバイパスしたい場合は、ROS2 を起動する前に次を設定します：

```bash
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4
```

### 6. Humble を使用している場合は？

Humble ユーザーも同じワークフローに従い、コマンド内の `jazzy` を `humble` に置き換え、Humble の公式ドキュメントに従って対応する依存関係をインストールしてください。ROS2 ディストリビューションを切り替えた後は、再度 `colcon build` を実行します。

### 7. `pinocchio` が見つからない

ノードや検証コマンドが次のように報告する場合：

```text
ModuleNotFoundError: No module named 'pinocchio'
```

まず、使用している ROS2 ディストリビューション向けの Pinocchio パッケージがインストールされていることを確認します：

```bash
sudo apt install -y ros-jazzy-pinocchio
```

次に、現在のターミナルで ROS2 環境が source 済みであることを確認します：

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

それでも見つからない場合は、現在の Python 検索パスに ROS2 の Python パッケージパスが含まれているか確認します：

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

Jazzy を source した後であれば、次のようなパスが表示されるはずです：
`/opt/ros/jazzy/lib/python3.12/site-packages`。Humble を使用している場合は、コマンド内の `jazzy` を
`humble` に置き換えてください。

## お問い合わせ

- 技術サポート: [Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- プロジェクトリポジトリ: [Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- フォーラム: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文献

- [reBot Arm B601-DM 入門ガイド](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM ビジュアルグラスピングデモ](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio と MeshCat](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot チュートリアル](https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_lerobot/)
- [ROS2 Humble ドキュメント](https://docs.ros.org/en/humble/)
- [ROS2 Jazzy ドキュメント](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
