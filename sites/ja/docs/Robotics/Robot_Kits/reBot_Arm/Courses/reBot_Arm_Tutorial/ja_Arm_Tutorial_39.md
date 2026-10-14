---
description: "Seeed Physical AI Beginner's Course 第39章 — Real-to-Sim 同期：実機アームの関節状態をリアルタイムで MuJoCo にマッピングする方法、DM と RS の単位変換、通信周波数、UDP と ROS2 の比較、状態更新とレイテンシ、グリッパ状態の同期、同期プログラムの安全設計、そして 2 つのデモワークフローについて解説します。"
title: 第39章 - 実機アームとシミュレーションアームの同期
hide_title: true
keywords:
  - reBot
  - ロボットアーム
  - Real-to-Sim
  - デジタルツイン
  - MuJoCo
  - ROS2
  - レイテンシ
  - 重力補償
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_39
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_39/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 8 · 第39章 · 実践</span>
    <h2>39. 実機アームとシミュレーションアームの同期</h2>
    <p>
      Seeed Physical AI Beginner's Course 第39章 — Real-to-Sim 同期：実機アームの関節状態をリアルタイムで MuJoCo にマッピングする方法、DM と RS の単位変換、通信周波数、UDP と ROS2 の比較、状態更新とレイテンシ、グリッパ状態の同期、同期プログラムの安全設計、そして 2 つのデモワークフローについて解説します。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章の概要</a>
      <a href="#units">単位と周波数</a>
      <a href="#transport">UDP・Socket・ROS2 の比較</a>
      <a href="#safety">安全設計</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`重力补偿.mp4`). The file(s) are in 图片和附件/ but recordings are not published through the course CDN path - upload them and link them here once they are available. */}
reBotArm-RS プロジェクトの実際のソースコードを例に、この章では実機アームの関節状態をどのようにリアルタイムで MuJoCo シミュレーション環境へ同期するかを解説します。すべてのコード参照はこのリポジトリ内の実ファイルを指しており、実際のコードと並べて読むことができます。

<a id="overview"></a>

## 39.1 Real-to-Sim とは何か

Real-to-Sim とは、実機アームの関節角度・速度・トルクなどの状態をリアルタイムでシミュレーション環境へ送信し、仮想アームが実機アームの動きを同期再現することを指します。これは Sim-to-Real とは逆方向です。Sim-to-Real はシミュレーションでポリシーを学習し、それを実機ロボットへ展開しますが、Real-to-Sim は実機ロボットの状態を仮想モデルへマッピングします。

Real-to-Sim の典型的な用途：

1. デジタルツイン：物理デバイスを直接見なくても、Web ページ上で実機アームの姿勢をリアルタイムに観察できる。
2. 記録と再生：実機アームの動きを軌道データとして記録し、デバッグのためにシミュレーションで何度も再生できる。
3. 安全監視：シミュレーション環境側で、実機アームにはない機能（衝突検出や作業空間の可視化など）を重ね合わせられる。
4. ティーチング再現：実機アームを手で動かす（重力補償モード）と、シミュレーションモデルが同期して追従し、ティーチングデータの収集に利用できる。

本プロジェクトにおける Real-to-Sim のコアチェーンは次のとおりです：

```text
Real RobStride motors → SocketCAN can0 → MotorBridge SDK state cache
→ HardwareManager._get_arm_state() → ROS JointState topic (60 Hz)
→ MuJoCo Sync node subscribes → MuJoCo qpos update → virtual arm moves
```

主要なソースファイル：

- ハードウェア状態の読み取りとキャッシュ：`hardware_manager.py`
- ROS 関節状態のパブリッシュ：`ros_publishers.py`
- MuJoCo 同期ノード：`mujoco_sync.py`
- シミュレーション側フェイクドライバ：`fake_rs_driver.py`

<a id="units"></a>

## 39.2 DM と RS の関節単位変換

DM（Damiao モータ）と RS（RobStride モータ）はどちらも角度単位としてラジアンを使用しますが、グリッパの単位は大きく異なります——

ここは同期処理でミスが起きやすいポイントです。

### アーム関節

DM と RS の 6 つのアーム関節はいずれもラジアンを使用し、MuJoCo モデルもラジアンを使用します（`<compiler angle="radian"/>`）。

したがって、アーム関節については単位変換は不要です。

### グリッパ単位の違い

グリッパには、単位の異なる 4 種類の量が関わります：

|量|範囲|単位|用途|
|---|---|---|---|
|RS グリッパモータ角度|0-5|rad|実機ロボット SDK のコマンドとフィードバック|
|Web/タスク側のグリッパ開口幅|0-0.0715|m|ユーザーコマンドの意味表現|
|ROS 片側フィンガ状態|0-0.045|m|状態パブリッシャによるマッピング後の見かけの変位|
|MuJoCo グリッパ変位|0-0.05|m|シミュレーションの joint7 スライドストローク|

## 39.3 通信周波数

Real-to-Sim のチェーンには、異なる周波数を持つ複数のリンクが存在します。それらの関係を理解することが、レイテンシやカクつきのトラブルシューティングの前提となります。

|リンク|周波数|説明|
|---|---|---|
|RS 実機ロボット制御ループ|125 Hz|最終的にモータへ送られる MIT コマンド|
|同期用ハードウェアフィードバックポーリング|20 Hz|RobStride の状態を問い合わせてキャッシュを更新|
|ROS 関節状態パブリッシュ|60 Hz|キャッシュから JointState トピックをパブリッシュ|
|MuJoCo シミュレーション同期|250 Hz|シミュレーションのステップ周波数|
|ブラウザによる MuJoCo 状態受信|最大 25 Hz|rosbridge のサブスクリプションを 40 ms にスロットル|
|ブラウザ描画|約 60 Hz|requestAnimationFrame|

理解しておくべきポイント：

- Web ページは最大 60 Hz でコマンドを送信しますが、これはモータが 60 Hz でしか制御されないという意味ではありません。RS コントローラは新しい目標値を受け取ると、自身の 125 Hz ループで MIT コマンドを生成・送信し続けます。
- ハードウェアフィードバックは 20 Hz でキャッシュを更新し、ROS はそのキャッシュから 60 Hz でパブリッシュします。リアルタイムな MIT ループは同期的な CAN パラメータ問い合わせを行いません。
- MuJoCo は 250 Hz でステップしますが、その入力は 60 Hz の ROS トピックから来るため、MuJoCo は隣接する入力の間は最後の目標値を保持します。

<a id="transport"></a>

## 39.4 UDP・Socket・ROS2 通信

本プロジェクトでは、Real-to-Sim の通信レイヤとして UDP や生の Socket ではなく ROS2 トピックを選択しています。この選択理由を理解することで、他のシナリオでも正しいアーキテクチャ判断がしやすくなります。

### ROS2 を選ぶ理由

1. トピック抽象化：`sensor_msgs/JointState` は標準メッセージ型であり、パブリッシャとサブスクライバはデータフォーマットを事前に取り決める必要がありません。
2. QoS ポリシー：`qos_profile_sensor_data` は BEST_EFFORT の信頼性と小さなキュー深度を提供し、高頻度センサデータに適しています。
3. 多対多通信：1 つの関節状態トピックを、MuJoCo 同期ノード、Web ページ、ロギング、その他複数ノードが同時にサブスクライブできます。
4. エコシステム統合：rosbridge により ROS トピックを直接 WebSocket にブリッジできるため、Web ページ側に追加の通信レイヤは不要です。

### トピックトポロジ

```text
/rebotarm/joint_states          ← published by the real-robot controller (60 Hz)
    ↓
MuJoCo Sync node subscribes
    ↓
/rebotarm/mujoco/joint_states   ← published by the MuJoCo sync node (250 Hz)
    ↓
rosbridge WebSocket → browser
```

MuJoCo 同期ノードのサブスクライブとパブリッシュは `mujoco_sync.py` で定義されています：

```python
self.subscription = self.create_subscription(
    JointState, input_topic, self._joint_state_callback, qos_profile_sensor_data,
)
self.publisher = self.create_publisher(
    JointState, output_topic, qos_profile_sensor_data,
)
```

### ネームスペースの分離

実機ロボットとシミュレーションは、トピックの衝突を避けるために異なるネームスペースを使用します：

|環境|デフォルトネームスペース|起動スクリプト|
|---|---|---|
|実機ロボット|`/rebotarm`|`scripts/start_rs_hardware.sh`|
|フェイクドライバ + MuJoCo|`/rebotarm_rs`|`scripts/start_rs_sim.sh`|
|実機ロボット追従用 MuJoCo|`/rebotarm`（追従）|`scripts/start_rs_mujoco_follow.sh`|

Real-to-Sim のシナリオでは、MuJoCo 同期ノードは実機ロボットの `/rebotarm/joint_states` をサブスクライブし、

自身のネームスペースも `rebotarm` に設定しますが、サブスクライブのみを行いモータコマンドは一切送信しないため、実機ロボットのコントローラと競合しません。

### DDS のディスカバリ範囲

`rs_env.sh` は DDS のディスカバリ範囲をローカルホストに制限し、Wi-Fi ローミング後にノード同士が見失うことを防ぎます：

```bash
export ROS_AUTOMATIC_DISCOVERY_RANGE="${REBOTARM_ROS_DISCOVERY_RANGE:-LOCALHOST}"
```

### UDP と ROS2 の適用シナリオ

|特性|ROS2 トピック|UDP|
|---|---|---|
|レイテンシ|ミリ秒レベル（DDS ミドルウェアのオーバーヘッドあり）|最小、マイクロ秒レベル|
|信頼性|BEST_EFFORT / RELIABLE を設定可能|自前で実装が必要|
|複数サブスクライバ|ネイティブにサポート|自前でブロードキャスト実装が必要|
|デバッグツール|ros2 topic echo / hz|自前で実装が必要|
|適用シナリオ|マルチノード協調、エコシステム活用が必要な場合|ポイントツーポイントの超低レイテンシ|

本プロジェクトのレイテンシ要件（60 Hz の状態、人間の目で許容できるレベル）は UDP を必要とするほど厳しくはなく、ROS2 トピックが最も自然な選択となります。

## 39.5 状態更新とレイテンシ

### 非同期キャッシュとフィードバック周波数の分離

`hardware_manager.py` は、ハードウェアフィードバックのポーリング周波数と

ROS パブリッシュ周波数を分離する設計になっています：

```python
# JointStatePublisher in ros_publishers.py
period = 1.0 / max(float(rate_hz), 1.0)           # publish at 60 Hz
self._feedback_poll_period = 1.0 / max(float(feedback_poll_rate_hz), 1.0)  # feedback at 20 Hz

def publish(self) -> None:
    now = time.monotonic()
    request_feedback = now - self._last_feedback_poll >= self._feedback_poll_period
    if request_feedback:
        self._last_feedback_poll = now
    pos, vel, effort = self._hardware.get_joint_state(request_feedback=request_feedback)
```
60 Hz のパブリッシュフレームのうち 3 分の 1（20 Hz）が同期的な CAN リードをトリガーし、残りのフレームはキャッシュから直接返します。これにより、
ROS トピックの更新レートを高く保ちつつ、フィードバックポーリングによる CAN バスの占有を防ぎます。

### MuJoCo 側のステールタイムアウト

MuJoCo 同期ノードには `stale_timeout` パラメータ（デフォルト 1.0 秒）があり、この時間内に新しい JointState メッセージが
受信されない場合、シミュレーションの更新を停止します：

```python
def _update(self) -> None:
    if self.last_input_time == 0.0:
        return
    if (self.stale_timeout > 0.0
        and time.monotonic() - self.last_input_time > self.stale_timeout):
        return
```

これにより、実機ロボットが切断された後に古いデータでシミュレーションが動き続けてしまうことを防ぎます。

### レイテンシの層構造とトラブルシューティング

同期が遅れたり反応が鈍い場合は、単一のパラメータをいじるのではなく、チェーンに沿って層ごとに計測します：

1. 実機ロボットフィードバック層：`ros2 topic hz /rebotarm/joint_states` を使い、60 Hz を安定して維持しているか確認する。
2. MuJoCo 同期層：`last_input_time` が継続的に更新されているか確認する。
3. Web 受信層：rosbridge のサブスクリプションスロットルにより、ブラウザ側は 25 Hz 未満に抑えられている可能性がある。
4. 表示補間層：ブラウザは隣接する計測値の間を 32〜120 ms で補間描画する。

詳細なデータフローとトラブルシューティング方法については、`DATA_FLOW_RS_ZH.md` を参照してください。

## 39.6 グリッパ状態の同期

グリッパの同期は、単位変換と MuJoCo の等式制約リンクが関わるため、アーム関節よりも複雑です。

### MuJoCo グリッパモデル

`rs_arm.xml` では、グリッパは 3 つのジョイントで構成されています：

```xml
<joint name="joint7" type="slide" axis="0 1 0" range="0 0.05"/>
<joint name="joint_left" type="slide" .../>
<joint name="joint_right" type="slide" .../>

<equality>
  <joint joint1="joint7" joint2="joint_left" polycoef="0 1 0 0 0"/>
  <joint joint1="joint7" joint2="joint_right" polycoef="0 1 0 0 0"/>
</equality>
```

`joint7` が駆動ジョイントであり、`joint_left` と `joint_right` は等式制約によって 1:1 でそれに追従します。同期時には `joint7` の `qpos` を設定するだけでよく、左右のフィンガは自動的に追従します。

### 同期コード

MuJoCo 同期ノードが JointState メッセージを受信すると、まずグリッパの単位を変換し、その後 update 中に 3 つのジョイントの qpos を設定します：

```python
def _joint_state_callback(self, msg: JointState) -> None:
    if "gripper_joint1" in values:
        self.target_gripper = self._visual_to_mujoco_gripper(
            values["gripper_joint1"], _RS_ROS_VISUAL_OPEN_M
        )

def _update_kinematic(self) -> None:
    self.data.qpos[self.gripper_qpos_addr] = next_gripper      # joint7
    self.data.qpos[self.left_qpos_addr] = next_gripper         # joint_left
    self.data.qpos[self.right_qpos_addr] = next_gripper        # joint_right
```

注意：運動学モードでは、3 つのジョイントに同じ値を書き込みます。物理モードでは `joint7_motor` のみを駆動し、左右のフィンガは等式制約によって自動的に追従します。

<a id="safety"></a>

## 39.7 同期プログラムの安全設計

### ハードウェア確認ゲート

`start_rs_hardware.sh` は、実機ロボットコントローラを起動する前に明示的な確認を要求し、誤操作によるアームの動作を防ぎます：

```bash
if [[ "${REBOTARM_RS_HARDWARE_CONFIRM:-}" != "I_UNDERSTAND_RS_WILL_MOVE" ]]; then
  echo "Hardware launch blocked." >&2
  exit 2
fi
```

一方、MuJoCo フォロースクリプト `start_rs_mujoco_follow.sh` は、この確認を必要としません。これは実機ロボットのトピックを購読するだけで、モータコマンドを送信したり SocketCAN を開いたりしないためです：

### プロセスのミューテックスロック

`start_rs_hardware.sh` は、ハードウェア起動時のプロセスミューテックスとして flock を使用し、2 つのコントローラが同時にモータを取り合うことを防ぎます：

```bash
exec 9>"${REBOTARM_HARDWARE_LOCK}"
if ! flock -n 9; then
  # identify and safely terminate the previous launch
  stop_processes "the previous RS hardware launch" "${REBOTARM_LOCK_HOLDERS[@]}"
fi
```

また、Ctrl+Z で一時停止されたコントローラも認識し、まず SIGCONT を送り、その後 SIGINT を送り、最後に残存している Fast DDS の共有メモリをクリーンアップできます。

### 状態機械による仲裁

`hardware_manager.py` は状態機械を用いて、安全でないコマンドを拒否します：

```python
def _begin_lowlevel_streaming(self, required_mode: str) -> None:
    if not self._enabled:
        raise RuntimeError("rejecting low-level command while arm is disabled")
    if self._gravity_comp_active or self.state_machine == "GRAVITY_COMP":
        raise RuntimeError("rejecting low-level command during gravity compensation")
    if self.state_machine == "SAFE_HOMING":
        raise RuntimeError("rejecting low-level command during safe home")
```

状態には `IDLE`, `LOWLEVEL_STREAMING`, `TRAJ_RUNNING`, `GRAVITY_COMP`, `SAFE_HOMING` が含まれます。各状態は特定のコマンド種別のみを受け付け、それ以外はすべて拒否します。

### セーフホーミング

無効化する前に、アームがゼロ姿勢付近にいない場合（いずれかの関節の絶対角度が 2 度を超える、または速度が 0.15 rad/s を超える）、コントローラはまず `SAFE_HOMING` 状態に入ります：古いターゲットをクリアし、グリッパを閉じ、ホーミングを実行し、到達を検証してからモータを無効化します。詳細なフローについては、`DATA_FLOW_RS_ZH.md` のセクション 5 を参照してください。

---

## 39.8 実践デモ

### デモ 1：実機アームを MuJoCo に同期

#### 全体チェーン

```text
Real reBot Arm (RobStride motors)
  ↓  CAN bus
Python SDK (motorbridge + reBotArm_control_py)
  ↓  read encoder feedback
ROS controller (rebotarmcontroller)
  ↓  publish JointState topics
MuJoCo sync node (mujoco_sync.py)
  ↓  kinematics mode directly writes qpos
MuJoCo virtual arm
```

#### デモの起動

アーム上の 6 つの RobStride モータ（ジョイント 1〜6）と 1 つのグリッパモータは、SocketCAN `can0` バス（1 Mbps）経由で、エンコーダ状態（位置、速度、トルク、ステータスコード）を連続的に報告します。このレイヤは純粋なハードウェアであり、ソフトウェアは関与しません。

起動前に、CAN インターフェースを設定します：

```text
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

実機ロボットコントローラを起動します：

```text
# Terminal 1: real-robot controller
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Terminal 2: MuJoCo follow (same as Demo 1)
./scripts/start_rs_mujoco_follow.sh

# Terminal 3: web page
./rebotarm start web
```

### デモ 2：重力補償マニュアルティーチングの同期

#### 全体チェーン

```text
Click "Start gravity comp" on the web page
  ↓  rosbridge → ROS Service
The real-robot controller enters gravity compensation mode (GRAVITY_COMP)
  ↓  Pinocchio computes gravity torques + low-gain MIT holding
The user manually drags the real arm
  ↓  motor encoders report new angles
The controller publishes JointState (60 Hz, same as normal motion)
  ↓
The MuJoCo follow node subscribes → the virtual arm reproduces in real time
Meanwhile the web 3D model also displays the feedback in real time
```

デモ 1 との主な違い：実機ロボットはもはや位置ターゲットによって受動的に駆動されず、**重力補償モード**に入ります。ユーザが実機アームを手でドラッグすると、エンコーダフィードバックが継続的に変化し、JointState が通常どおり発行され、MuJoCo と Web ページの両方が追従します。MuJoCo フォロー部分はデモ 1 のスクリプトを完全に再利用しており、追加の設定は不要です。

#### ステップ 1：Web 操作 — 重力補償を開始

###### 前提条件

3 つのターミナルで、それぞれ実機ロボット、MuJoCo フォロー、Web ページを起動します：

```text
# Terminal 1: real-robot controller
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Terminal 2: MuJoCo follow (same as Demo 1)
./scripts/start_rs_mujoco_follow.sh

# Terminal 3: web page
./rebotarm start web
```

ブラウザで `http://localhost:3002` を開き、次の手順に従います：

1. **名前空間を選択**：制御対象として「RS 実機ロボット（`/rebotarm`）」を選択します；
2. **接続**：ROS WebSocket に `ws://localhost:9090` を入力し、connect をクリックします；
3. **制御ロックを開く**：制御ロックのチェックボックスをオンにします；
4. **Enable**：「Enable」ボタンをクリックし、ステータスが enabled になるまで待ちます；
5. **重力補償を開始**：「Start gravity comp」ボタンをクリックします。

#### ステップ 2：実機ロボットコントローラが重力補償に入る

いくつかの重要な設計ポイント：

- **ゲインのスムーズな遷移**：smoothstep を用いて、`transition_duration`（デフォルト 0.5 s）内で、剛性の高いゲイン `[80,150,150,50,50,50]` / `[5,10,10,5,4,4]` から、コンプライアンスの高いゲイン `kp=2.0` / `kd=1.0`（RS 設定）へ徐々に遷移させます。smoothstep は両端で導関数が 0 であり、切り替え瞬間の剛性の急激な低下を避けます。
- **ターゲットが実測角度に追従**：`q_target` は、起動時の保持角度からリアルタイムの実測角度へ滑らかに補間されます。遷移完了後は `q_target = q`、すなわちターゲットは常に現在角度と等しくなり、ユーザがどこへドラッグしてもアームが追従します。
- **重力フィードフォワード**：毎サイクル、キャッシュされた角度（CAN 読み取りなし）で `compute_generalized_gravity` を再計算し、それを MIT トルクに加えます。モータはごく小さな位置誤差の力だけを出力すればよく、`tau` の主成分は重力を打ち消すものになります。
- **リアルタイム CAN 読み取りの代わりにキャッシュを使用**：`_read_gravity_comp_positions(request=False)` は 20 Hz で更新されるキャッシュから角度を取得します。125 Hz ループでは同期的な CAN パラメータクエリを行わず、ブロッキングを回避します。

###### 重力補償中の安全ルール

状態機械が `GRAVITY_COMP` にある間、コントローラはすべての Web 関節コマンド、TCP ドラッグ、軌道再生、グリッパコマンドを拒否します。「Stop gravity comp」ボタンと無効化リクエストだけが、これを中断できます。

---

#### 完全なデータフロー

```text
User clicks "Start gravity compensation" on the web page
  → rosbridge WebSocket
  → /rebotarm/gravity_compensation/start service
  → HardwareManager.start_gravity_compensation()
  → per-joint switch to MIT + gravity feedforward
  → 125 Hz compliant control loop
The user manually drags the real robot
  → encoder feedback → SocketCAN → state cache
  → /rebotarm/joint_states (60 Hz)
  → web mirror (Three.js model follows)
  → MuJoCo Sync (virtual arm follows)
```

###### MuJoCo 仮想アーム + Web 3D モデル + 実機アームのリアルタイム再現

## 39.9 まとめ

Real-to-Sim 同期の核心は、実機ロボットの関節状態を、適切な周波数とフォーマットでシミュレーション環境へ渡すことです。本プロジェクトの実践的なポイント

は次のとおりです：

1. 配列の順序ではなく、名前でジョイントをマッピングする。
2. グリッパには 4 種類の単位が関わるため、変換チェーンの各ステップを明確にする。
3. ハードウェアフィードバックのポーリング周波数と ROS 発行周波数を分離し、リアルタイムループ内で同期的な CAN 読み取りを行わない。
4. このシナリオでは、ROS2 トピックは UDP より有利であり、エコシステムとデバッグツールの利点がマイクロ秒レベルのレイテンシ差を上回る。
5. 安全設計はチェーン全体を貫いている：ハードウェア確認ゲート、プロセスミューテックスロック、状態機械による仲裁、セーフホーミング。
6. 重力補償ティーチングは価値の高い Real-to-Sim シナリオであり、低剛性 + 重力フィードフォワード + フィードバックに追従するターゲット

更新が鍵となる設計である。

## 39.10 FAQ

---

{/* 注意：このステージの一部は Doubao AI の助けを借りて作成されました。 */}

</div>
