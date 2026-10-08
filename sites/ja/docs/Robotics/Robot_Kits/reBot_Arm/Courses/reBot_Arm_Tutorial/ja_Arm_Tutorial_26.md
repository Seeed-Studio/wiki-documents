---
description: "Seeed Physical AI Beginner's Course の第26章 — reBot Arm 上で Pinocchio と MeshCat を実践：uv のインストール、URDF の読み込み、順運動学、逆運動学（ラインサーチ付きダンピング付き最小二乗法）および軌道計画（SE(3)測地線＋CLIK）デモの実行。"
title: 第26章 - Pinocchio と MeshCat
keywords:
  - reBot
  - ロボットアーム
  - Pinocchio
  - MeshCat
  - 逆運動学
  - 軌道計画
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_26
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_26/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 5 · 第26章 · 実践</span>
    <h2>26. Pinocchio と MeshCat</h2>
    <p>
      Seeed Physical AI Beginner's Course の第26章 — reBot Arm 上で Pinocchio と MeshCat を実践：uv のインストール、URDF の読み込み、順運動学、逆運動学（ラインサーチ付きダンピング付き最小二乗法）および軌道計画（SE(3)測地線＋CLIK）デモの実行。
    </p>
    <div className="hero-actions">
      <a href="#setup">環境構築</a>
      <a href="#fk-demo">FK デモ</a>
      <a href="#ik-demo">IK デモ</a>
      <a href="#traj-demo">軌道デモ</a>
    </div>
  </div>
</section>

## 26.1 学習目標

座標変換、運動学、軌道計画の理論を、実際のロボット開発フレームワークに適用する。

Pinocchio と MeshCat の使い方を学ぶ

## 26.2 Pinocchio と MeshCat でできること

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) は、ロボットの動力学解析と最適化のためのオープンソースライブラリです。効率的な順／逆運動学、動力学計算、軌道計画を提供します。[MeshCat](https://github.com/rdeits/meshcat) は、ロボットの状態や運動軌跡をリアルタイムに表示できる Web ベースの 3D 可視化ツールです。

$$
\underbrace{\text{URDF}}_{\text{describe}} \longrightarrow \underbrace{\text{Pinocchio}}_{\text{algorithm}} \longrightarrow \underbrace{\text{Result}}_{\text{FK / IK / dynamics}}
$$

ロボットの URDF モデルを読み込むことで、Pinocchio は次のことができます。

| 機能 | Pinocchio 呼び出し | 本章での用途 |
| :--- | :--- | :--- |
| URDF から運動学モデルを構築 | `pin.buildModelFromUrdf()` | `reBot-DevArm_fixend.urdf` を読み込む |
| 順運動学（全リンク姿勢） | `pin.forwardKinematics()` | FK デモ、IK 反復 |
| フレーム配置の更新 | `pin.updateFramePlacements()` | `end_link` の姿勢を読む |
| フレームヤコビアン | `pin.getFrameJacobian()` | ダンピング付き最小二乗 IK |
| SE(3) 指数／対数写像 | `pin.exp6()` / `pin.log6()` | 6 次元姿勢誤差、測地線補間 |
| 回転ヘルパー | `pin.rpy.rpyToMatrix()`, `matrixToRpy()` | 姿勢の読み取りと表示 |

次に、reBot 制御リポジトリを使って試してみましょう。

<a id="setup"></a>

## 26.3 デモのダウンロードと環境構築

チュートリアルに従って、まずアームの初期化を完了します。

## 26.4 uv のインストール（未インストールの場合）

```Bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 26.5 環境の同期（すべての依存関係をインストール）

```Bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

`uv sync` は仮想環境を作成し、Pinocchio、MeshCat、および reBot の依存関係をインストールします。先に進む前に確認してください：

```Bash
uv run python -c "import pinocchio, meshcat; print(pinocchio.__version__)"
```

**Damiao と Robostride のモーター構成を切り替える方法**

`config/rebotarm_dm.yaml`（Damiao）または `config/rebotarm_rs.yaml`（Robostride）の設定ファイルを変更し、コード内で対応する設定を読み込みます。

| バージョン | 設定ファイル | モーターバス | エンドエフェクタフレーム |
| :--- | :--- | :--- | :--- |
| **B601-DM**（Damiao） | `config/rebotarm_dm.yaml` | Damiao シリアル | `end_link`（config から） |
| **B601-RS**（Robostride） | `config/rebotarm_rs.yaml` | SocketCAN | `end_link`（config から） |

:::tip
`config/rebotarm.yaml` がエントリーポイントです：ここからハードウェア設定（`rebotarm_dm.yaml` /
`rebotarm_rs.yaml`）を指し、さらにそこから URDF（`reBot-DevArm_fixend.urdf`）を指します。デモがモデルを
見つけられない場合は、まずこのチェーンを確認してください。
:::

<a id="fk-demo"></a>

## 26.6 順運動学 MeshCat 可視化デモ


<iframe width="560" height="315" src="https://www.youtube.com/embed/wVBwBnDO6X8?si=HSc4UqpDKHEg5Y43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run ./example/sim/fk_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter angles as prompted
45 -30 15 -60 90 -180

#The arm model moves accordingly
```

## 26.7 順運動学デモの解説

fk_sim.py は **ストレートスルーの順運動学パイプライン** です：関節角度 -> Pinocchio の FK -> エンドエフェクタ姿勢＋MeshCat レンダリング。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-26/ch26-02.png" alt="" />
</div>


このデモが良い出発点である理由：これは「6 個の数値」から「動く 3D モデル」までの最短経路であり、その間に IK も動力学もハードウェアも存在しません。

<a id="ik-demo"></a>

## 26.8 逆運動学 MeshCat 可視化デモ

<iframe width="560" height="315" src="https://www.youtube.com/embed/4B9ngX8e7x4?si=Ork_DT-A9zlxfEmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run ./example/sim/ik_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter position and orientation as prompted

0.25 0.0 0.25              # position only

0.25 0.0 0.25 0 0 0        # position + orientation

```

## 26.9 逆運動学デモの解説

1. **目標入力** — ユーザーが望むエンドエフェクタの位置（xyz）と姿勢（ロール／ピッチ／ヨー）を与え、プログラムはそれらを SE3 姿勢オブジェクトに組み立てます。

2. **モデル読み込み** — 設定ファイルから URDF を読み込み、ロボットの運動学モデルを構築し、エンドエフェクタがどのフレーム上にあるかを決定します。

3. **順運動学** — 現在の関節角度に基づき、ワールド座標系におけるエンドの実際の SE3 姿勢を計算します。

4. **ギャップの計算** — `log6` を使って現在の SE3 と目標 SE3 を対数写像し、6 次元の誤差（回転がどれだけ異なるか、並進がどれだけ異なるか）を得ます。

5. **補正量の推定** — ヤコビアンを通じて、エンドの誤差を各関節がどれだけ回転すべきかに「変換」し、関節のジャンプを防ぐためにダンピング付き最小二乗で解きます。

6. **収束までループ** — ステップ 3->5 を繰り返し、毎回ラインサーチで誤差が減少することを確認しながら、誤差がしきい値（約 0.1 mm）未満になるまで続け、その時点で到達したとみなします。

7. **結果の出力** — 解かれた関節角度（ラジアン）、収束したかどうか、最終誤差を返し、その後の制御に利用します。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-26/ch26-01.png" alt="" />
</div>


<a id="traj-demo"></a>

## 26.10 軌道計画 MeshCat 可視化デモ

<iframe width="560" height="315" src="https://www.youtube.com/embed/B5gz1Me78nQ?si=HDzRq-WhDX6N78V5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```Plain Text
uv run python example/sim/traj_sim.py

#Open the arm model visualization web address as prompted in the terminal

#Enter position and orientation as prompted

0.25 0.0 0.25              # position only

0.25 0.0 0.25 0 0 0        # position + orientation

```

## 26.11 軌道計画デモの解説

#### SE(3) 姿勢

**何か**

SE(3) = **位置＋姿勢**、3D 剛体の「現在の状態」を完全に表すものです。

- **S** — *special*：回転部分が正規の回転であり、$\det R = 1$
- **E** — *Euclidean*：長さと角度が保存される
- **3** — 空間が 3 次元である

**たとえ話**

駐車場に停まっている車：

- **位置** = 駐車スペース P3 にいる
- **姿勢** = 車の鼻先が外向き
- この 2 つを合わせたものが、その車の現在の SE(3) 姿勢です

**自由度**

- 位置：3 つの数（上下、左右、前後）
- 姿勢：3 つの数（どのように回転しているか）
- 合計 **6 自由度（DOF）**

**行列表現（4x4 同次変換行列）**

$$
T =
\begin{pmatrix}
R & \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix}
$$

- 左上の $3\times3$ ブロック = 回転行列 $R$（姿勢）
- 右上の $3\times1$ 列 = 並進ベクトル $\mathbf{t}$（位置）
- 一番下の行 $[0\ 0\ 0\ 1]$ は固定のプレースホルダ

**例：位置が変わる -> $\mathbf{t}$ が変わる；姿勢が変わる -> $R$ が変わる。**

#### **軌道生成**

**サンプラは高密度な SE(3) 姿勢タイムラインを生成します**。

処理は 3 層構造になっています：

1. **幾何レイヤー** — SE(3) の曲がった多様体上で `log6`／`exp6` を用いて測地線（最短経路）を計算します：回転は slerp（大円）に従い、並進はエンドのローカル座標系で直線に従います。式は $T(s) = T_{start}\,\exp_6\big(\log_6(T_{start}^{-1} T_{end})\,s\big)$、ここで $s \in [0, 1]$ は経路の割合です。

2. **時間レイヤー** — プロファイルを選んで $s(\tau)$ を決めます（$\tau = t / \text{duration}$）：LINEAR 一定速度、MIN_JERK 5 次多項式（デフォルト、開始／停止時の速度と加速度がゼロ）、TRAPEZOID 台形加減速。

3. **サンプリングレイヤー** — $dt = 0.02\ \text{s}$（50 Hz）で等間隔に $n$ フレームを切り出します；各フレームは $T(s(t))$ であり、`CartesianTrajectory` として出力されます：$(t = 0, T_{start}), (t = 0.02, T_1), \ldots, (t = \text{duration}, T_{end})$。

**コアアイデア**：幾何（経路）と時間（ペース）は分離されており、出力はすべて SE(3) で、関節情報は含まれません。関節は CLIK が逆問題として解きます。

**P3 にいる車（位置 $(5, 0, 0)$）、鼻先が東向き（回転なし）**

$$
T =
\begin{pmatrix}
1 & 0 & 0 & 5 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

**車両を移動: P3 は変わらず、機首は北向きに（$z$ 軸まわりに $90^\circ$ 回転）**

$$
T =
\begin{pmatrix}
0 & -1 & 0 & 5 \\
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

#### CLIK

ステップ 4: 6 次元誤差の算出 -> フィードバック信号

- 「エンドが実際にある場所」と「エンドが到達すべき場所」との距離を 6 次元ツイストとして計算します
- この 6 次元が CLIK における誤差信号 $e$ であり、制御システムにおける偏差に相当します
- オイラー角は $360^\circ$ の折り返しで誤差計算が発散するのを避けるため、直接減算しません

ステップ 5: DLS ヤコビアン解法 -> コントローラ

- これは CLIK における「コントローラ」の役割です
- エンドの 6 次元誤差を、各関節がどれだけ動くべきかに変換します
- DLS: $\Delta q = J^\top (J J^\top + \lambda^2 I)^{-1} e$、これは $\|J\,\Delta q - e\|^2 + \lambda^2 \|\Delta q\|^2$ を最小化することに相当します
- $\lambda^2 I$ のダンピング項により、$J$ が特異点に近づいたときに（特異点では疑似逆行列が無限大に発散するため）$\Delta q$ が発散するのを防ぎます

ステップ 6: 反復 + ラインサーチ -> 閉ループ構造

- このステップによって「閉ループ」という名前が付きます
- 各ラウンドで FK を再計算 -> 誤差を再計算 -> $\Delta q$ を再計算し、フィードバックループを形成します
- ラインサーチ $\alpha$ により、各更新が実際に誤差を減少させることを保証し、発振を避けます
- PID 制御と同じパターン：誤差を測定 -> 制御量を計算 -> 適用 -> 再度測定

## 26.12 実機ロボットの滑らかな軌道のための逆運動学制御（`8_arm_traj_control.py`）

MIT モードで逆運動学（IK）を用いることで、目標時間内に自動的に一定速度または滑らかな加減速の軌道を計画し、関節の激しい振動を回避します。

**入力形式**:

- 位置のみ: `<x> <y> <z>`（メートル）
- 位置 + 姿勢: `<x> <y> <z> <roll> <pitch> <yaw>`（度）
- 位置 + 姿勢 + 時間（デフォルト 2.0）: `<x> <y> <z> <roll> <pitch> <yaw> <time>`（度）
- `state` を入力: 各関節の実際の現在ラジアン値を表示します。
- `end_state` を入力: 空間内でのエンドの実際の座標（m）とオイラー角（rad）を表示します。

**実行方法**:

```Bash
uv run python example/8_arm_traj_control.py

*#Usage A*
> 0.3 0.0 0.4 *#position only, orientation defaults to 0, move time defaults to 2.0 s*

*#Usage B*
> 0.3 0.0 0.4 0.0 0.0 0.5 *#control position and orientation together: move to the target position while rotating the wrist yaw by 0.5 rad; move time defaults to 2.0 s*

*#Usage C*
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 *#move the arm to a specific position, taking 5.0 s to ease over there. (Note: if you input a time, the preceding orientation parameters 0 0 0 cannot be omitted)*

> ctrl + c *# exit the system*
```

## 26.13 デモのトラブルシューティング

| 症状 | 想定される原因 | 対処方法 |
| :--- | :--- | :--- |
| `ModuleNotFoundError: pinocchio` | 環境が同期されていない | `reBotArm_control_py` 内で `uv sync` を再実行する |
| MeshCat ページは開くが空のまま | ブラウザがローカル WebSocket をブロックしている | ターミナルに表示された URL を使用し、別のブラウザを試す |
| `FileNotFoundError: ...urdf` | 作業ディレクトリが誤っている | コマンド例のように、リポジトリのルートから実行する |
| IK が `success: False` を返す | 目標が作業空間外、または特異姿勢 | 目標をベースに近づけるか、ダンピングを増やす |
| IK 中に関節がリミットで張り付く | 目標が到達不能な姿勢を要求している | 姿勢の要求を下げるか、初期推定 `q_init` を変更する |

- **Pinocchio** は URDF を運動学モデルに変換し、FK、ヤコビアン、SE(3) ヘルパーを 1 つのライブラリから提供します。
- **MeshCat** は、コントローラが使用しているのと同じ数値をブラウザ上で可視化してくれるため、デバッグに非常に有用です。
- これら 3 つのデモは、第 23〜25 章の理論を実行可能な形にしたものです：**FK（角度から姿勢）**、**IK（姿勢から角度、DLS + ラインサーチ）**、**軌道計画（測地線 + 時間プロファイル + CLIK）**。
- 実機アームでは、`8_arm_traj_control.py` が、同じパイプラインで MIT モードの IK を通じて実際のモータを駆動する様子を示します。


</div>
