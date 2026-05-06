---
description: このチュートリアルでは、reBot Arm B601-DM ロボットアームでの運動学解析と可視化に Pinocchio と MeshCat を使用する方法を紹介します。
title: reBot Arm B601-DM 向け Pinocchio と MeshCat 入門
keywords:
  - Pinocchio
  - MeshCat
  - ロボットアーム
  - ロボット
  - LeRobot
  - 運動学
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-17
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_pinocchio_meshcat/
---

# reBot Arm B601-DM 向け Pinocchio と MeshCat 入門

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) は、ロボットのダイナミクス解析と最適化のためのオープンソースライブラリです。効率的な順運動学 / 逆運動学、動力学計算、軌道計画機能を提供します。[MeshCat](https://github.com/rdeits/meshcat) は、ロボットの状態や動作軌跡をリアルタイムに表示できる Web ベースの 3D 可視化ツールです。

本プロジェクトは、Pinocchio の強力な計算機能と MeshCat の直感的な可視化を組み合わせ、reBot Arm B601-DM 向けに完全な運動学解析およびデバッグツール一式を提供します。


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>


---

## プロジェクトの特長

1. **完全な運動学解析**  
   順運動学（FK）および逆運動学（IK）計算をサポートし、ロボットアームのエンドエフェクタ姿勢をリアルタイムに求めることができます。

2. **リアルタイム 3D 可視化**  
   ブラウザ上の MeshCat を通じてロボットアームの状態と動作軌跡をリアルタイム表示し、追加ソフトウェアは不要です。

3. **軌道計画とトラッキング**  
   SE(3) 測地線に基づく軌道計画を実装し、CLIK（Closed-Loop Inverse Kinematics）トラッキング制御をサポートします。

4. **重力補償制御**  
   Pinocchio の動力学モデルに基づいて関節の重力トルクを計算し、ロボットアームの「フローティング」効果を実現します。

5. **オープンソース & 拡張性**  
   すべてのコードはオープンソースであり、ユーザーはニーズに応じて制御アルゴリズムや可視化効果をカスタマイズできます。

## 仕様

このチュートリアルのハードウェアは [Seeed Studio](https://www.seeedstudio.com/) によって提供されています。

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
      <td>モーターモデル</td>
      <td>Damiao DM4340 / DM4310</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td>USB-CAN アダプタ経由の CAN バス</td>
    </tr>
    <tr>
      <td>動作電圧</td>
      <td>24V DC</td>
    </tr>
    <tr>
      <td>制御方法</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>推奨動作温度範囲</td>
      <td>0°C ～ 40°C</td>
    </tr>
  </tbody>
</table>

## 部品表（BOM）

| コンポーネント | 数量 | 同梱 |
|--|--|--|
| reBot Arm B601-DM ロボットアーム | 1 | ✅ |
| USB2CAN シリアルブリッジ | 1 | ✅ |
| 電源アダプタ（24V） | 1 | ✅ |
| USB-C ケーブル | 1 | ✅ |
| グリッパ | 1 | ✅ |

:::caution
Seeed Studio は**ハードウェア品質にのみ責任を負います**。チュートリアルは公式ドキュメントに厳密に従って更新されています。解決できないソフトウェアまたは環境の問題に遭遇した場合は、まずドキュメント末尾の FAQ を参照するか、カスタマーサービスに連絡して SeeedStudio Lerobot 交流グループに参加し、問い合わせてください。
:::

---

## 動作環境要件

| 項目 | 要件 |
|------|-------------|
| **Python** | 3.10+ |
| **オペレーティングシステム** | Ubuntu 22.04+ |
| **通信インターフェース** | USB2CAN シリアルブリッジ または CAN インターフェース |

---

## インストール手順

### ステップ 1. uv をインストール（未インストールの場合）

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### ステップ 2. 環境同期（すべての依存関係をインストール）

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` は（存在しない場合は）自動的に仮想環境を作成し、`pyproject.toml` と `uv.lock` に従ってすべての依存関係をインストールします。
:::

---

## デバッグツール

#### 単一モーターコンソール（`1_damiao_text.py`）

motorbridge SDK を直接使用した単一モーターのテスト。

**使用方法**:
```bash
uv run python example/1_damiao_text.py
```

**インタラクティブコマンド**:
| コマンド | 説明 |
|---------|-------------|
| `enable` / `disable` | 有効化 / 無効化 |
| `set_zero` | ゼロ位置を設定 |
| `state` | 状態を表示 |

---

#### ゼロキャリブレーション & 角度モニタ（`2_zero_and_read.py`）

すべての関節のゼロを自動設定し、関節角度をリアルタイムに表示します。

**使用方法**:
```bash
uv run python example/2_zero_and_read.py
```

---

## 運動学テスト

#### 順運動学テスト（`5_fk_test.py`）

関節角度からエンドエフェクタ姿勢を計算します。

**入力**: 6 関節角度（度）

**出力**:
- エンドエフェクタ位置（X, Y, Z）— 単位：メートル
- 回転行列（3×3）
- オイラー角（ロール / ピッチ / ヨー）— 単位：度

**例**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### 逆運動学テスト（`6_ik_test.py`）

所望のエンドエフェクタ姿勢から関節角度を求めます。

**入力形式**:
- 位置のみ: `<x> <y> <z>`（メートル）
- 位置 + 姿勢: `<x> <y> <z> <roll> <pitch> <yaw>`（度）

**例**:
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + Orientation
```

---

## シミュレーション環境

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>

#### 順運動学シミュレーション（`sim/fk_sim.py`）

インタラクティブな順運動学シミュレーションで、MeshCat 上で関節角度を入力してロボットアーム姿勢を可視化します。

**使用方法**:
```bash
uv run python example/sim/fk_sim.py
```

**インタラクティブコマンド**:
- 6 つの関節角度（度）をスペース区切りで入力
- 例: `0 0 0 0 0 0`
- 例: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: 終了

**特長**:
- エンドエフェクタ位置と姿勢をリアルタイム表示
- 連続入力によりさまざまな姿勢をテスト可能
- 整形された姿勢情報の出力

---

#### 逆運動学シミュレーション（`sim/ik_sim.py`）

インタラクティブな逆運動学シミュレーションで、目標姿勢から自動的に関節角度を求めて可視化します。

**使用方法**:
```bash
uv run python example/sim/ik_sim.py
```

**入力形式**:
- 位置のみ: `x y z`（メートル）
- 位置 + 姿勢: `x y z roll pitch yaw`（ラジアン）

**例**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position+Orientation
```

**特長**:
- IK 収束の自動判定
- 反復回数と誤差の表示
- ロボット姿勢のリアルタイム更新

---

#### 軌道計画シミュレーション（`sim/traj_sim.py`）

SE(3) 測地線に基づく軌道計画シミュレーションで、CLIK トラッキングおよび MeshCat アニメーション再生を含みます。

**使用方法**:
```bash
uv run python example/sim/traj_sim.py
```

**インタラクティブコマンド**:
- 入力: `x y z [roll pitch yaw]`（メートル / ラジアン）
- Enter キーでデフォルト設定を使用
- `q`: 終了

**特長**:
- 現在位置から目標位置までの軌道を計画
- 最小ジャーク軌道プロファイルを使用
- 軌道統計情報をリアルタイム表示
- MeshCat 上で軌道アニメーションを完全再生
- 参照経路（灰色）と実際の経路（緑色）を表示

---

#### ビジュアライザツール（`sim/visualizer.py`）

MeshCat ビジュアライザのラッパーで、統一されたロボット表示インターフェースを提供します。

**主な機能**:
- URDF モデルを読み込みロボットを表示
- 3D ポリライン経路（参照 / 実際）を描画
- IK 目標姿勢を表示（三色軸 + 球）
- 関節軌道アニメーション再生をサポート

**使用例**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

---

## 実機制御

:::tip 権限設定
実機制御のサンプルを実行する前に、デバイス権限を設定する必要があります：

```bash
# Set serial device permission (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or for CAN interface (e.g., can0)
sudo chmod 666 /dev/can0
```
:::

#### IK リアルタイム制御（`7_arm_ik_control.py`）

IK ソルバに基づくエンドエフェクタのリアルタイム制御。

**インタラクティブコマンド**:
| コマンド | 説明 |
|---------|-------------|
| `x y z [roll pitch yaw]` | 目標エンドエフェクタ姿勢 |
| `state` | 状態を表示 |
| `pos` | 現在のエンドエフェクタ位置 |
| `q/quit/exit` | 終了 |

**使用方法**:
```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### 軌道計画制御（`8_arm_traj_control.py`）

SE(3) 測地線軌道計画 + CLIK トラッキング。

**入力形式**:
```
x y z [roll pitch yaw] [duration]
```

**パラメータ**:
- `x, y, z`: 目標位置（メートル）
- `roll, pitch, yaw`: 目標姿勢（ラジアン）
- `duration`: 移動時間（秒）、デフォルト 2.0s

**使用方法**:
```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### 重力補償制御（`9_gravity_compensation.py`）

Pinocchio の動力学モデルを用いて関節の重力を補償します。

**制御則**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position  — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**期待される動作**:
- ロボットアームが任意の姿勢で「浮いて」いられる
- 手を離しても自重で落下しない
- 手動で任意の位置に動かすことができる

**使用方法**:
```bash
uv run python example/9_gravity_compensation.py
```

**出力**:
- 各関節の期待トルク（N·m）をリアルタイム表示
- `Ctrl+C` を押して停止および切断

---

## FAQ

- **`Permission denied` エラーが発生する**  
  デバイス権限を設定するために、`sudo chmod 666 /dev/ttyACM0` または `sudo chmod 666 /dev/can0` を実行していることを確認してください。

- **IK の解が得られない、または結果がおかしい**  
  目標姿勢がロボットアームの作業空間内にあるか確認し、関節リミットの設定が正しいことを確認してください。

- **重力補償の効果が良くない**  
  これは構造誤差や加工精度が原因である可能性があります。本プロジェクトの重力補償は urdf と pinocchio に依存しています。実際に測定したパラメータに合わせて urdf を修正してみてください（このステップについては ai に相談することもできます）。

---

## ライセンス

このプロジェクトは **MIT License** の下でオープンソースとして公開されています。

---

## お問い合わせ

- **技術サポート**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **リポジトリ**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **フォーラム**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## 参考ドキュメント

- [Pinocchio 公式ドキュメント](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat 公式ドキュメント](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>このプロジェクトが役に立った場合は、ぜひ Star を付けてください！</strong>
</div>