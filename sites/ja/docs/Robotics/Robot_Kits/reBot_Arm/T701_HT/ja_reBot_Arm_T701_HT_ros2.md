---
title: reBot Arm T701 HT ROS 2 SDK
sidebar_label: ROS 2 SDK
toc_max_heading_level: 2
description: Ubuntu 22.04 上の ROS 2 Humble 環境に T701-HT ROS 2 SDK をインストールし、RViz2 と運動学シミュレーションまたはハードウェア用サンプルを使って、トピック、サービス、軌道アクション経由でアームを制御します。
keywords:
  - reBot
  - T701 HT
  - ROS 2
  - Humble
  - RViz2
  - QP IK
slug: /rebot_t701_ht_ros2
translation:
  skip: [zh-CN]
last_update:
  date: 11/24/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT ROS 2 SDK

<div className="rebot-page">

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT bimanual robot"
  />
</div>

<GitHubStarButton
  owner="Welt-liu"
  repo="T701_ROS2_SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT ROS 2 SDK on GitHub"
/>

T701-HT ROS 2 SDK は、関節制御、多点軌道、QP 逆運動学、グリッパ制御、原点復帰、ダンピングブレーキを提供します。まずロボットを接続せずに RViz2 とサンプルを使い、その後ハードウェアに切り替えて、自作の ROS 2 ノードからコマンドを送信できます。

[SDK repository](https://github.com/Welt-liu/T701_ROS2_SDK) には、ソースコード、モデル、依存ホイール、中国語および英語の README が含まれています。このページのすべてのコマンドは、`start.sh` を含む **`T701_ROS2_SDK` ルートディレクトリ** から実行してください。

:::note[Python SDK とは別にインストール]

この章ではシステムの Python 3.10 と SDK の `.venv` を使用します。クイックスタートで作成した `t701-ht` Conda 環境を有効化する必要はありません。1 枚の通信ボードに対して同時に実行できる SDK は 1 つだけです。既存の [Pinocchio](./reBot_Arm_T701_HT_pinocchio.md) と [VR Teleoperation](./reBot_Arm_T701_HT_vr.md) のページでは、Python SDK のサンプルを説明しています。この ROS 2 パッケージには、VR 入力レシーバ、MoveIt、`ros2_control` プラグイン、Gazebo 物理シミュレーションは含まれていません。

:::

<section className="section-card">

## インストールとビルド

### システム依存パッケージのインストール

| 環境項目 | 要件 |
| --- | --- |
| オペレーティングシステム | Ubuntu 22.04 |
| ROS バージョン | ROS 2 Humble |
| Python | SDK の `.venv` を用いたシステム Python 3.10 |
| プロセッサアーキテクチャ | Linux x86_64 または ARM64 |
| モデルおよび数値ライブラリ | apt からインストールする Pinocchio と FCL、および NumPy 1.x。シミュレーションとハードウェアの両方で必須 |

[公式の ROS 2 Humble インストール手順](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html) に従って ROS リポジトリを設定し、次に依存パッケージをインストールします：

```bash
sudo apt update
sudo apt install python3-venv python3-pip python3-pytest \
  python3-colcon-common-extensions python3-numpy python3-scipy python3-yaml \
  python3-jinja2 python3-joblib \
  ros-humble-desktop ros-humble-control-msgs ros-humble-diagnostic-msgs \
  ros-humble-pinocchio ros-humble-hpp-fcl
```

Pinocchio と FCL は、運動学、重力計算、メッシュ衝突チェックを提供します。シミュレーションとハードウェアの両方で必要です。ここで説明する apt のモデルライブラリと NumPy 1.x を使用し、Python SDK の Conda 環境を流用しないでください。

### SDK の取得

```bash
git clone https://github.com/Welt-liu/T701_ROS2_SDK.git
cd T701_ROS2_SDK
```

### 環境の作成とビルド

```bash
python3.10 -m venv --system-site-packages .venv
.venv/bin/python -m pip install \
  'numpy>=1.23,<2' 'scipy>=1.9,<2' 'PyYAML>=6,<7' 'osqp>=1,<2' pytest
./build.sh
```

`build.sh` と `start.sh` は ROS 2 Humble とこのワークスペースを読み込みます。初期セットアップ後は、日常の運用には `start.sh` を使用してください。ディレクトリを移動したり別の PC にコピーした場合は、`.venv` を再作成して再ビルドしてください。シミュレーションではモータ SDK は不要です。インストール方法は下の **Connect hardware** タブを参照してください。

</section>

<section className="section-card">

## 実行モードを選択

| 比較項目 | シミュレーション `sim` | ハードウェア `real` |
| --- | --- | --- |
| ロボット接続 | ロボットや通信ボードは不要 | ロボットに給電し、通信ボードを接続 |
| モータ SDK | 不要 | 使用 PC のアーキテクチャ用ホイールをインストール |
| 起動時のモーション有効化 | 自動的に有効 | 既定では無効。有効化前にフィードバックを確認 |
| 既定の通信ドメイン | `20` | `21` |

2 つのターミナルを開きます：**ターミナル A でドライバを動かし続け、ターミナル B でサンプルを実行します。** 両方のターミナルは SDK ルートにあり、同じ `sim` または `real` プレフィックスを使用する必要があります。必要なサンプルを選び、1 度に 1 つずつ実行してください。

<Tabs defaultValue="sim" groupId="t701-ros2-mode">
<TabItem value="sim" label="シミュレーションと RViz2">

ロボット接続は不要です。シミュレーションでは、コマンドから関節状態を更新してモデル表示と ROS インターフェースの練習を行います。力学、接触、重力による落下はシミュレートしません。

### ターミナル A：シミュレーションを起動

```bash
./start.sh sim arms:=dual
```

このターミナルは動かしたままにします。RViz2 の Fixed Frame を `base_link` に設定してください。サンプル実行中にモデルが更新されるはずです。片腕のみを使用する場合は、現在のドライバを終了し、`arms:=dual` を `arms:=left` または `arms:=right` に置き換えてください。

### ターミナル B：状態を読み取る

```bash
./start.sh sim demo --mode state --duration 5
```

関節位置、速度、トルク、および左ツールの姿勢を 1 回読み取ります：

```bash
./start.sh sim topic echo /t701_ht/motor_states --once
./start.sh sim topic echo /t701_ht/left_tool_pose --once
```

### ターミナル B：モーションサンプルを実行

| サンプル | 期待される動作 | パラメータとアーム選択 |
| --- | --- | --- |
| 関節モーション | 選択された各アームの J1 が現在位置から前後に動作 | 振幅 `0.10 rad`、`5 s` 間 |
| 多点軌道 | 現在位置から 4 つの小さな軌道セグメントを実行 | モーション時間 `8 s` |
| QP 逆運動学 | 現在姿勢から近傍のツール目標を生成し、それを解いて到達を確認 | サンプルは左腕を使用。右腕またはドライバで両腕を選択している場合は `--side right` を使用 |
| グリッパ制御（現在は目に見える効果なし） | 内部のシミュレートされた目標のみを設定します。現在のモデルは指の動きを表示しないため、開口幅や把持を確認できません | 左グリッパ目標 `0.4 rad` を既定で `5 s` 観測。右グリッパには `--side right` を使用 |

以下の各コマンドブロックは 1 つのサンプルを実行します。

**関節モーション**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode joint --duration 5 --amplitude 0.10
```

**多点軌道**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode trajectory --duration 8 --amplitude 0.10
```

**QP 逆運動学**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode ik --side left
```

**グリッパ制御（現在は目に見える効果なし）**

:::info[現在のシミュレーションの制限]

グリッパは、個別の指関節を持たない 1 つの剛体エンドエフェクタモデルとして表示されます。このサンプルは内部のシミュレートされた目標のみを設定し、RViz2 には開閉動作は表示されません。ターミナルに出力されるアーム関節状態にもグリッパ位置は含まれないため、開口幅、目標到達、把持を確認できません。この制限は現在の `sim` サンプルに適用されます。

:::

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode gripper --side left --gripper 0.4
```

これらのモーションサンプルは、完了時に原点復帰してダンピングブレーキを適用するため、新しいサンプルごとに制御を有効化してください。関節および軌道の `--duration` 値には、最後の原点復帰時間は含まれません。RViz2 は、グリッパの各指の開閉アニメーションを表示しません。

### ターミナル B：原点復帰と停止

ゼロ位置への個別の原点復帰を要求するには：

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode home
```

シミュレートされたモーションを即座に停止し、制御を無効化するには：

```bash
./start.sh sim demo --mode stop
```

</TabItem>
<TabItem value="real" label="ハードウェア接続">

[Quick Start](./reBot_Arm_T701_HT_Getting_Started.md) に従ってロボットを組み立てて給電し、ゼロ位置を確認してください。この章では、別の ROS 2 SDK ディレクトリと設定を使用します。

:::warning[初めてのハードウェア実行]

ロボットを固定し、ペイロードを取り外し、可動範囲と原点復帰経路を完全に確保してください。まず片腕から始め、実行を監視します。ドライバを起動した後、モーションを有効化する前にフィードバックを確認してください。

:::

### モータ SDK のインストール

使用している PC のアーキテクチャに対応するコマンドを 1 つ選択し、1 回だけインストールします。

Linux x86_64、Python 3.10：

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
```

Linux ARM64、Python 3.10：

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.0.0-cp310-cp310-linux_aarch64.whl
```

### 配線とシリアルポートの確認

| 接続 | ポート |
| --- | --- |
| 左腕 | 通信ボード上の CAN1 |
| 右腕 | 通信ボード上の CAN2 |
| コンピュータ | 通信ボードへの USB 接続 |

ボードの USB 識別情報を確認し、`src/t701_ht_description/config/serial_binding.yaml` 内の `board_serial` を実際のシリアル番号に設定します。ドライバはボードの識別情報からポートを解決するため、ACM の列挙順が変わっても手動で設定を変更する必要はありません。

```bash
ls -l /dev/serial/by-id/
ls -l /dev/ttyACM*
id -nG
```

ユーザが `dialout` グループに属していない場合は、次のコマンドを実行し、その後デスクトップから一度ログアウトして再度ログインしてください：

```bash
sudo usermod -aG dialout "$USER"
```

### ターミナル A：ハードウェアドライバを起動

最初の実行では左腕を使用します：

```bash
./start.sh real arms:=left
```

右腕には `arms:=right`、両腕には `arms:=dual` を使用します。アーム選択を変更する前に、現在のドライバを終了してください。起動時は既定でモーションが無効のままフィードバックを読み取ります。ターミナル A は動かしたままにしてください。

### ターミナル B：フィードバックを確認

```bash
./start.sh real demo --mode state --duration 5
./start.sh real topic echo /t701_ht/motor_states --once
./start.sh real topic echo /diagnostics --once
```

モーションサンプルを実行する前に、選択したアームの関節フィードバックと診断を確認してください。下記のグリッパサンプルを使用して、実機グリッパの応答を観察します。

### ターミナル B：モーションサンプルを実行

| サンプル | 期待される動作 | パラメータとアーム選択 |
| --- | --- | --- |
| 関節モーション | 選択された各アームの J1 が現在位置から前後に動作 | 振幅 `0.10 rad`、`5 s` 間 |
| 多点軌道 | 現在位置から 4 つの小さな軌道セグメントを実行 | モーション時間 `8 s` |
| QP 逆運動学 | 現在姿勢から近傍のツール目標を生成し、それを解いて到達を確認 | サンプルは左腕を使用。右腕またはドライバで両腕を選択している場合は `--side right` を使用 |
| グリッパ制御 | グリッパモータの目標を設定し、その応答を観察 | 左グリッパ目標 `0.4 rad` を既定で `5 s` 観測。右グリッパには `--side right` を使用 |

以下の各コマンドブロックは、それぞれ 1 つのサンプルを実行します。

**関節動作**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode joint --duration 5 --amplitude 0.10
```

**多点軌道**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode trajectory --duration 8 --amplitude 0.10
```

**QP 逆運動学**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode ik --side left
```

**グリッパ制御**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode gripper --side left --gripper 0.4
```

完了時に、これらの動作サンプルは、ドライバで選択されたすべてのアームの関節とグリッパをゼロに戻し、その後ダンピングブレーキを適用します。新しいサンプルの前には毎回、制御を再度有効にしてください。関節および軌道動作時間には、原点復帰時間は含まれません。

### 端末 B：原点復帰と停止

個別にゼロへの復帰を要求するには：

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode home
```

原点復帰経路に従わずに、直ちにモータのダンピングブレーキを要求し、制御を無効にするには：

```bash
./start.sh real demo --mode stop
```

</TabItem>
</Tabs>

| パラメータ | 目的 | 範囲または動作 |
| --- | --- | --- |
| `arms` | ドライバ起動時に関節動作、多点軌道、原点復帰に使用するアームを選択 | `left`、`right`、または `dual` |
| `--side` | IK またはグリッパ側を選択 | `left` または `right`。ドライバはその側で起動している必要があります |
| `--amplitude` | 関節および軌道サンプルの振幅 | `(0, 0.20]` rad |
| `--gripper` | グリッパモータの目標角度 | `[-0.2, 2.2]` rad |
| `--duration` | 関節および軌道動作時間、または状態およびグリッパ観測時間 | 関節および軌道時間には最終的な原点復帰は含まれません。IK はこの時間ではなく到達判定に基づいて終了します |

デュアルアームモードでは、関節動作は右側の J1 の符号を反転させて両アームで同時に実行されます。IK サンプル中は、もう一方のアームは現在位置を保持します。

</section>

<section className="section-card">

## RViz2 とヘッドレス動作

<div className="image-frame">

![T701-HT ROS 2 SDK model and coordinate frames in RViz2](https://raw.githubusercontent.com/Welt-liu/T701_ROS2_SDK/main/assets/docs/rviz_overview.png)

</div>

| RViz2 設定 | 値または操作 | 目的 |
| --- | --- | --- |
| Fixed Frame | `base_link` | ロボットベースを表示基準フレームとして使用 |
| TF | 有効化 | 座標フレームを表示 |
| RobotModel → Collision Enabled | 有効化 | 衝突メッシュを表示 |

ハードウェアモードでは実測の関節フィードバックを使用し、シミュレーションではシミュレートされた関節状態を使用します。

グラフィカルデスクトップのないコンピュータでは、端末 A で RViz2 なしでドライバを起動します：

```bash
./start.sh sim arms:=dual rviz:=false
```

ハードウェアの場合は `./start.sh real arms:=left rviz:=false` を使用します。ドライバがすでに動作している状態で、別の端末で RViz2 を個別に起動します：

```bash
./start.sh sim run rviz2 rviz2 -d src/t701_ht_ros2/config/t701_ht.rviz
```

ハードウェアには `real` プレフィックスを使用します。GLX/OpenGL が失敗した場合は、元のドライバを終了し、`T701_HT_SOFTWARE_RENDERING=1 ./start.sh sim` または対応する `real` コマンドで再起動してください。

ドライバと RViz2 を別々のコンピュータで実行する場合は、両方で同じ SDK モードと通信ドメインを使用します。起動前に `export ROS_LOCALHOST_ONLY=0` を設定し、LAN DDS 通信を許可してください。ドライバは 1 つだけ起動します。

</section>

<section className="section-card">

## ROS 2 プログラムを接続する

### 共通インタフェース

| インタフェース | メッセージ型 | 目的 |
| --- | --- | --- |
| `/joint_states` | `sensor_msgs/msg/JointState` | TF と RViz2 用の URDF 座標系での状態 |
| `/t701_ht/motor_states` | `sensor_msgs/msg/JointState` | モータ座標系での関節位置、速度、トルク |
| `/t701_ht/joint_command` | `sensor_msgs/msg/JointState` | 選択されたアームの完全な関節目標 |
| `/t701_ht/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 多点軌道、フィードバック、結果、およびキャンセル |
| `/t701_ht/left_tool_pose`, `/t701_ht/right_tool_pose` | `geometry_msgs/msg/PoseStamped` | 計測されたツール姿勢 |
| `/t701_ht/left_target_pose`, `/t701_ht/right_target_pose` | `geometry_msgs/msg/PoseStamped` | QP ツール目標 |
| `/t701_ht/left_gripper`, `/t701_ht/right_gripper` | `std_msgs/msg/Float64` | グリッパモータの目標角度 |
| `/t701_ht/home`, `/t701_ht/stop` | `std_srvs/srv/Trigger` | 原点復帰または即時ダンピングブレーキの要求 |
| `/t701_ht/set_enabled` | `std_srvs/srv/SetBool` | 動作の有効化または無効化 |
| `/diagnostics` | `diagnostic_msgs/msg/DiagnosticArray` | モード、有効状態、アクティブなゴール、およびエラー |

シングルアームモードでは、選択された側のツールおよびグリッパインタフェースのみが作成されます。モータ位置、速度、トルクはそれぞれ rad、rad/s、N·m を使用し、ツール位置はメートルを使用します。

:::note[モータ座標とモデル座標]

関節コマンドは `left_joint1` から `left_joint7`、および `right_joint1` から `right_joint7` を使用します。`/joint_states` は `A_l_joint1_link` のような URDF 名を使用し、軸の符号はすでに変換されています。そのままモータコマンドとして送信しないでください。各関節コマンドには、ドライバで選択されたすべての関節を含める必要があります。デュアルアームモードでは 14 関節です。

:::

### 関節目標を送信する

このサンプルには、**左アームのシミュレーションドライバ**が必要です。現在のドライバを終了し、端末 A で次を実行します：

```bash
./start.sh sim arms:=left
```

端末 B から 7 軸の目標を送信します。デフォルトのスムーズな遷移時間は 2 秒です：

```bash
./start.sh sim demo --mode enable
./start.sh sim topic pub --once /t701_ht/joint_command sensor_msgs/msg/JointState \
  '{name: [left_joint1, left_joint2, left_joint3, left_joint4, left_joint5, left_joint6, left_joint7], position: [0.10, 0, 0, 0, 0, 0, 0]}'
```

トピックへの直接目標および軌道アクションは、完了後に終端点を保持します。ゼロに戻したいときは `./start.sh sim demo --mode home` を実行してください。フルのデュアルアーム、軌道アクション、および QP 姿勢メッセージのサンプルについては、[SDK README standard ROS commands](https://github.com/Welt-liu/T701_ROS2_SDK/blob/main/README_EN.md) を参照してください。

姿勢目標は `base_link` で表現され、正規化されたクォータニオンを x, y, z, w の順で使用します。同時に実行される動作タスクは 1 つだけであり、このインタフェースは高レートの連続テレオペレーション目標を直接受信するためのものではありません。

</section>

<section className="section-card">

## 起動パラメータとシャットダウン

| パラメータ | デフォルト | 説明 |
| --- | --- | --- |
| `arms` | `dual` | `left`、`right`、または `dual` |
| `rviz` | `true` | RViz2 を起動 |
| `state_rate` | `50.0` | 制御および状態配信レート（5～100 Hz） |
| `enable_on_start` | `false` | ハードウェア起動時に動作を有効化。シミュレーションは自動的に有効化されます |

パラメータを変更した後はドライバを再起動してください。引数なしで `./start.sh` を実行するとシミュレーションが起動し、サンプルはドライバのモードを確認します。

| モード | デフォルト通信ドメイン | カスタマイズ用環境変数 |
| --- | --- | --- |
| シミュレーション | `20` | `T701_HT_SIM_DOMAIN_ID` |
| ハードウェア | `21` | `T701_HT_REAL_DOMAIN_ID` |

複数ロボットの場合は、該当する端末で一致する環境変数の値を設定してください。シミュレーションとハードウェアの値は異なり、0～232 の範囲である必要があります。

| トリガ | ドライバの動作 | 備考 |
| --- | --- | --- |
| 関節、軌道、IK、またはグリッパサンプルが完了 | 原点復帰し、ダンピングブレーキを適用してから動作を無効化 | 次の動作の前に再度有効化してください |
| 端末 B で最初の Ctrl+C | 現在の動作の終了と原点復帰を要求 | シャットダウン処理が完了するまで端末 A を動作させたままにします |
| 端末 A で Ctrl+C | 条件が許せば、終了前に原点復帰とブレーキを実行 | 制御が有効であり、フィードバックが有効で、原点復帰経路が確認されている必要があります |
| 2 回目の割り込み | 直ちにダンピングブレーキを要求 | 原点復帰の完了待ちを中止 |
| 明示的な停止または無効化 | 直ちにダンピングブレーキを要求 | 原点復帰経路には従いません |
| 軌道キャンセル | 元の軌道を終了し、原点復帰を要求 | 実際の状態から原点復帰完了を確認してください |

サービス応答の `success: true` は、要求が受理されたことを意味します。関節状態および診断の `mode=braked` から、実際の原点復帰完了を確認してください。

デフォルトのジオメトリチェックは、選択されたアームの自己衝突、本体との衝突、およびデュアルアームモードでのアーム間衝突をカバーします。シングルアームモードでは、もう一方のアームはチェックされません。指、ケーブル、外部障害物はモデルに含まれておらず、離散メッシュチェックは実測の停止距離を表すものではありません。無効なフィードバックや拒否された原点復帰経路はエラーとして報告され、正常な原点復帰の報告ではなくブレーキを試みます。

</section>

<section className="section-card">

## トラブルシューティング

| 症状 | 対処 |
| --- | --- |
| `ros2` または `rclpy` が見つからない | ROS 2 Humble のインストールを確認し、この章のシステム Python 3.10 環境を使用して再ビルドします |
| NumPy または Python 拡張のインポートエラー | NumPy 1.x を使用し、Conda を ROS ネイティブライブラリから分離し、SDK ルートで `.venv` を再作成します |
| `control is disabled` | 端末 B で同じモードを使用して `demo --mode enable` を実行します。原点復帰とブレーキを行う各サンプルの後に再度有効化してください |
| ドライバが見つからない、またはサンプルがモード不一致を報告する | 端末 A を動作させたままにし、両方の端末で `sim` / `real` プレフィックスと通信ドメインを一致させます |
| モータ SDK、シリアルポート、または USB ID エラー | 使用しているアーキテクチャ用の wheel をインストールし、配線、`board_serial`、および `dialout` 権限を確認します |
| RViz2 にモデルがない、または TF エラーを報告する | `/joint_states` と `/robot_description` を確認し、Fixed Frame として `base_link` を使用します |
| 軌道が拒否される、または QP が収束しない | 関節名、完全な関節数、タイミング、制限、姿勢フレーム、および診断を確認します。このページの小さなサンプルから始めてください |

</section>

</div>
