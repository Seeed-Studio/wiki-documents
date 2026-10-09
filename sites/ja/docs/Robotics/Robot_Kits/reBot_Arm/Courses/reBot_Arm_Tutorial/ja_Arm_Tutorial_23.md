---
description: "Seeed Physical AI Beginner's Course 第23章 — 座標系と同次変換：ワールド、ベース、関節、エンドエフェクタおよびカメラ座標系、ベクトルと行列、並進行列と回転行列、変換の連鎖、そしてオイラー角とクォータニオンの比較。"
title: 第23章 - ロボットアームの数学的基礎と座標系
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - Coordinate Frame
  - Homogeneous Transform
  - Euler Angles
  - Quaternion
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_23
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: Seeed Studio Robotics Team
createdAt: '2026-09-25'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_23/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 5 · 第23章 · 理論</span>
    <h2>23. ロボットアームの数学的基礎と座標系</h2>
    <p>
      Seeed Physical AI Beginner's Course 第23章 — 座標系と同次変換：ワールド、ベース、関節、エンドエフェクタおよびカメラ座標系、ベクトルと行列、並進行列と回転行列、変換の連鎖、そしてオイラー角とクォータニオンの比較。
    </p>
    <div className="hero-actions">
      <a href="#objectives">学習目標</a>
      <a href="#frames">座標系</a>
      <a href="#transforms">同次変換</a>
    </div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>このステージがコース内で位置づけられる場所</h2>
  </div>

  これらの章で紹介する内容は**従来型制御**に属します。つまり、ハードコードされたプログラミングによってロボットアームを制御する方法です。従来型制御は、実際に稼働しているプロジェクトの大多数で使われています。その利点は安定性と信頼性であり、特に産業生産の現場で非常に重要です。欠点は、新しい環境では安定して動作させる前に再チューニングが必要になることです。

  | 章 | タイトル | 種類 | フォーカス |
  | :--- | :--- | :--- | :--- |
  | **23** | ロボットアームの数学的基礎と座標系 | 理論 | 座標系、ベクトル、同次変換、回転の表現 |
  | **24** | 順運動学、逆運動学、およびヤコビアン | 理論 | 関節角とエンドエフェクタ姿勢がどのようにつながるか |
  | **25** | 軌道計画とロボットアーム制御 | 理論 | パスとトラジェクトリの違い、補間、フィードフォワード＋フィードバック |
  | **26** | Pinocchio と MeshCat | 実践 | 実際の reBot Arm モデルで FK / IK / 軌道計画を実行 |

  :::tip
  第23〜25章はリファレンス資料です。実際のプロジェクトでは URDF と運動学ライブラリが
  行列計算を代わりに行ってくれます。一度通読して「数値が何を意味しているか」を理解し、
  その後は第26章を進める間の参照用として手元に置いておきましょう。
  :::

  **なぜステージ5がステージ4の後に来るのか。** ステージ3とステージ4では、アームに模倣と自然言語追従を学習させました。これらのシステムは学習ベースであり、世界を観測して行動しますが、何かを*保証*してくれるわけではありません。まっすぐな溶接線、再現性の高い把持、安全な非常停止が必要になった瞬間、基盤となる決定論的レイヤー — すなわち、このステージで扱う数学とモーションコントロール — が必要になります。
  上の図はその対比を1枚にまとめたものです：VLM は世界を記述し、VLA は世界に作用し、そしてここで学ぶすべてが、その行動が実際に*どのように*実行されるかを決定します。

  | 観点 | VLM（Vision-Language Model） | VLA（Vision-Language-Action Model） |
  | :--- | :--- | :--- |
  | 入力 | 画像 + 質問 | 画像 + タスク指示（＋ロボット状態） |
  | 出力 | テキストによる記述 | ロボット動作のシーケンス |
  | 目的 | 理解して記述する | 理解して行動する |
  | 代表的なモデル | LLaVA, Qwen-VL | GR00T, pi0 |
  | 用途 | 認識、アノテーション、デバッグ | 実ロボット制御（ステージ4） |
</section>

<a id="objectives"></a>

## 23.1 学習目標

この章を終えたら、次のことができるようになります：

1. 座標系とは何か、そしてなぜロボットアームには複数の座標系が必要なのかを説明できる。
2. ワールド座標系、ベース座標系、関節空間座標系、エンドエフェクタ／ツール座標系、カメラ座標系の名称を挙げ、それぞれが何に固定されているかを説明できる。
3. 並進と回転を 4x4 の同次変換行列として書き下し、それら2つを手計算で掛け合わせることができる。
4. なぜ同次座標が存在するのか、そして「非同次」表記では何が失われるのかを説明できる。
5. いつオイラー角を使い、いつクォータニオンを使うべきかを言える。

## 23.2 ベクトルと行列の基礎

順運動学と逆運動学（次の章で扱います）には多数のベクトルと行列が登場するため、しっかりした行列の基礎を築くことが重要です。実際の制御では、低レベルの計算を自分で行う必要はないので、この章はリファレンスとして提供しています。

- **ベクトル**は向きと大きさを持つ量を表します：位置、速度、力など。
- **行列**は線形写像を表します：ある座標系のベクトルが別の座標系のベクトルにどのように変換されるか。
- ロボティクスで至るところに登場する3つの基本オブジェクトは、**3x1 位置ベクトル** $\mathbf{p}$、**3x3 回転行列** $R$、そして **4x4 同次変換** $T$ です。

任意の回転行列 $R$ に対する有用な健全性チェック：

$$
\begin{aligned}
R^\top R &= I && \text{(orthonormal)} \\
\det(R) &= +1 && \text{(a proper rotation, no mirroring)}
\end{aligned}
$$

<details>
<summary><strong>ミクロな例題：4x4 変換行列の読み取り</strong></summary>

$$
T =
\begin{pmatrix}
0 & 0 & 1 & 0.30 \\
0 & 1 & 0 & 0.05 \\
-1 & 0 & 0 & 0.42 \\
0 & 0 & 0 & 1
\end{pmatrix},
\qquad
R =
\begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
-1 & 0 & 0
\end{pmatrix},
\qquad
\mathbf{t} =
\begin{pmatrix}
0.30 \\ 0.05 \\ 0.42
\end{pmatrix}
$$

$R$ の各列を、「親座標系で表現された子座標系の各軸」として読み取ります：

- 子 x = $[0,\ 0,\ -1]^\top$ -> 親座標系では下向き
- 子 y = $[0,\ 1,\ 0]^\top$ -> 親の y と同じ
- 子 z = $[1,\ 0,\ 0]^\top$ -> 親の x 方向

そして $\mathbf{t}$ は、子座標系の原点がどこにあるかを表します。変換とはそれだけのものです。

</details>

<a id="frames"></a>

## 23.3 ワールド座標系とベース座標系

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-01.png" alt="World frame versus base frame" />
</div>

ワールド座標系は、ロボットアームが置かれている環境の座標系と理解できます。ベース座標系はロボットのベース部に設定されます。reBot アームの設計では、ロボットベースが固定されているため、ワールド座標系とベース座標系は一致します。

例えば：アームがテーブルの上に置かれているとします。アームベースの中心を原点、テーブルトップを xy 平面、テーブルの脚の鉛直方向を z 軸とし、ワールド座標系は右手系に従います。ベース座標系もワールド座標系と一致します。（一般的なデカルト座標系）

<div className="image-frame">
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-02.png" alt="Right-hand rule, RGB = XYZ" />
</div>

**ロボティクス／ビジョンにおける XYZ 三軸の色の慣例（RGB = XYZ）**

| 軸 | 色 | 一般的な呼び名 |
| :--- | :--- | :--- |
| **X** | 🔴 Red | Red |
| **Y** | 🟢 Green | Green |
| **Z** | 🔵 Blue | Blue |

:::note
右手系のルール：人差し指の方向を `+X`、中指の方向を `+Y` とし、親指が `+Z` を与えます。`+X`、`+Y`、`+Z` 周りの回転は、その軸に沿って原点の方向を振り返って見たときに反時計回りが正になります。すべてのロボティクスツール（RViz, MeshCat, SolidWorks, URDF）はこの同じ慣例を使っているため、RGB = XYZ の色対応を覚えておく価値があります。
:::

## 23.4 関節空間座標系とエンドエフェクタ座標系

関節空間座標系は、ロボット制御で最も一般的に使われる座標系です。ロボットの各関節に設定され、その次元数はロボットが持つ関節の数に等しくなります。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-03.png" alt="Joint space frame" />
</div>

reBot B601 には 6 つの回転関節と 1 つのグリッパがあるため、その関節空間座標系は 6 次元です（グリッパを追加軸として扱う場合は 7 次元）。

**エンドエフェクタ座標系**

- 原点：ツールセンターポイント（TCP）

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-04.png" alt="End-effector / TCP frame" />
</div>

エンドエフェクタ座標系はロボットの先端に設定され、ツール座標系も存在します。先端をある位置に到達させたいときにはエンドエフェクタ座標を気にしますし、先端にグリッパが取り付けられている場合はグリッパ座標を気にします。

| 座標系 | 取り付け先 | 原点 | 典型的な用途 |
| :--- | :--- | :--- | :--- |
| World $\{world\}$ | 環境 | テーブル／セル上の固定点 | タスクレベルの座標、カメラ処理 |
| Base $\{base\}$ | ロボットベース | ベース中心 | 運動学チェーンの根元 |
| Joint $\{j_i\}$ | 関節 $i$ | 関節 $i$ の軸 | FK / IK の内部計算 |
| Flange | 最終関節の出力部 | フランジ中心 | ツールの取り付け位置 |
| Tool / TCP | ツール本体 | ツールセンターポイント | 経路計画、把持点 |

一言で言えば：ワールド座標系は人間が最も直感的に理解しやすい座標系であり、ロボットは関節空間座標系を使って先端グリッパの位置を変化させます。したがって、私たちはワールド座標で目標を設定し、関節空間座標系を使ってロボットを意図したとおりに動かします。その間をつなぐのが座標変換です。

## 23.5 カメラ座標系

カメラ座標系とエンドエフェクタ座標系は、通常は並進変換によって関係付けられます。

- 原点：カメラの光学中心
- 慣例：z 軸は光軸に沿って前方、x は右向き、y は下向き（OpenCV の慣例。一部の OpenGL／ROS ツールでは y 上向き）

| 慣例 | x | y | z | 右手系 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenCV / vision** | 右 | **下** | 前方（シーンの奥） | yes |
| OpenGL / 一部の ROS ツール | 右 | 上 | 後方 | yes |
| ROS `camera_optical_frame` | 右 | 下 | 前方 | yes |

:::warning
この2つの慣例を黙って混在させてはいけません。「y 下向き」のカメラと「y 上向き」のカメラは、x 軸周り 180 度の回転だけ異なります。ある慣例で求めたハンドアイキャリブレーションを、別の慣例で使うと、グリッパは物体の反対側へ移動してしまいます。
:::

カメラ座標系がビジュアルグラスピングのパイプラインに現れる位置：

$$
\begin{aligned}
\text{pixel } (u, v) &\ \xrightarrow{\ \text{intrinsics } K\ } \text{camera frame} \\
&\ \xrightarrow{\ \text{ハンドアイ } T_{\text{cam}\to\text{tcp}}\ } \text{エンドエフェクタ座標系} \\
&\ \xrightarrow{\ \text{FK}\ } \text{ベース座標系} \\
&\ \xrightarrow{\ \text{IK}\ } \text{関節角}
\end{aligned}
$$

<a id="transforms"></a>

## 23.6 座標変換の行列表現

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23.jpg" alt="基本的な座標系回転 i, j, k" />
</div>

**同次**表現は、「線形変換 + 並進」を 1 回の行列積に統一します。

**非同次**表現では、並進は行列の外側での加算となり、回転と 1 つの行列にまとめることはできません。

**一般的な同次変換**

$$
T =
\begin{pmatrix}
R & \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix},
\qquad
R:\ 3\times3 \text{ 回転（姿勢）},
\qquad
\mathbf{t}:\ 3\times1 \text{ 並進（位置）}
$$

**並進変換**

$$
\mathbf{p}' = \mathbf{p} + \mathbf{t}
\qquad
\mathbf{T} =
\begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

非同次表現を左側に、同次表現を右側に、すべて書き下すと次のようになります：

$$
\begin{pmatrix}
x' \\ y' \\ z'
\end{pmatrix}
=
\begin{pmatrix}
x \\ y \\ z
\end{pmatrix}
+
\begin{pmatrix}
t_x \\ t_y \\ t_z
\end{pmatrix}
=
\begin{pmatrix}
x + t_x \\ y + t_y \\ z + t_z
\end{pmatrix}
\qquad\Longleftrightarrow\qquad
\begin{pmatrix}
x' \\ y' \\ z' \\ 1
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
x \\ y \\ z \\ 1
\end{pmatrix}
=
\begin{pmatrix}
x + t_x \\ y + t_y \\ z + t_z \\ 1
\end{pmatrix}
$$

**回転変換**

3 つの基本回転行列です。$c = \cos\theta$、$s = \sin\theta$ と書くことで行列を読みやすくしています。手計算するときは、元に戻して代入して展開してください。

$$
R_x(\theta) =
\begin{pmatrix}
1 & 0 & 0 \\
0 & c & -s \\
0 & s &  c
\end{pmatrix}
\qquad
R_y(\theta) =
\begin{pmatrix}
 c & 0 & s \\
 0 & 1 & 0 \\
-s & 0 & c
\end{pmatrix}
\qquad
R_z(\theta) =
\begin{pmatrix}
c & -s & 0 \\
s &  c & 0 \\
0 &  0 & 1
\end{pmatrix}
$$

各回転の同次表現では、3x3 ブロックはそのままで、並進の列がゼロになります。したがって回転行列 $R$ は次のようになります。

$$
\begin{pmatrix}
R & \mathbf{0} \\
\mathbf{0}^\top & 1
\end{pmatrix}
\qquad\text{例}\qquad
R_z(\theta) =
\begin{pmatrix}
c & -s & 0 & 0 \\
s &  c & 0 & 0 \\
0 &  0 & 1 & 0 \\
0 &  0 & 0 & 1
\end{pmatrix}
$$

| 軸 | 非同次 | 同次 |
| :--- | :--- | :--- |
| X 軸 | $R_x(\theta)$ | $\begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & c & -s & 0 \\ 0 & s & c & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |
| Y 軸 | $R_y(\theta)$ | $\begin{pmatrix} c & 0 & s & 0 \\ 0 & 1 & 0 & 0 \\ -s & 0 & c & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |
| Z 軸 | $R_z(\theta)$ | $\begin{pmatrix} c & -s & 0 & 0 \\ s & c & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$ |

:::note
**なぜ最下行が $[0\ 0\ 0\ 1]$ なのか。** これは物理的な意味は持ちません。2 つの変換の行列積が再び変換行列になるようにするため、そして *点* $(x, y, z, 1)$ と *方向* $(x, y, z, 0)$ の両方を同じ行列で変換できるようにするために存在します — 方向は並進を無視し、点は無視しません。
:::

**変換の合成** — 連鎖は単なる行列積であり、逆行列の計算も安価です：

$$
\begin{aligned}
T_a^c &= T_a^b \, T_b^c && \text{合成（連鎖則）} \\
\left( T_a^b \right)^{-1} = T_b^a &=
\begin{pmatrix}
R^\top & -R^\top \mathbf{t} \\
\mathbf{0}^\top & 1
\end{pmatrix}
&& (3\times3 の逆行列の代わりに R^\top \text{ を用いる})
\end{aligned}
$$

## 23.7 オイラー角とクォータニオン

<div className="image-frame">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23/ch23-06.png" alt="ロール、ピッチ、ヨー" />
</div>

**オイラー角 vs. クォータニオン**

- オイラー角：3 つの数値、直感的、ジンバルロックがある
- クォータニオン：4 つの数値（1 つの制約付き）、直感的ではない、ジンバルロックなし

| 観点 | オイラー角（ロール/ピッチ/ヨー） | クォータニオン |
| :--- | :--- | :--- |
| 数の個数 | 3 | 4（制約 $w^2+x^2+y^2+z^2 = 1$ 付き） |
| 直感的か | はい。読み取りやログが容易 | いいえ |
| 特異点 | 中間の角度が +/-90 度に達するとジンバルロック | なし |
| 補間 | 不良（飛び、複数の値） | 良好（slerp） |
| 規約リスク | 24 通りの異なる規約（順序、内因/外因） | 単一の規約（符号のあいまいさのみ） |
| 典型的な用途 | 人間の入力、設定ファイル、ログ | 内部計算、ROS メッセージ、状態推定 |

工学では、**人間にはオイラー角、機械にはクォータニオン**を使います。

:::tip
reBot Arm ではこれは具体的に次のように現れます：MeshCat と Pinocchio は回転行列と SE(3) オブジェクトで考えますが、あなたはターミナルでロール/ピッチ/ヨーを度数で入力します。Chapter 26 のデモでは、その間の変換（`rpyToMatrix`、`matrixToRpy`）を自動で行います。
:::

- **座標系（フレーム）** は 3 本の軸と原点からなります。アームには少なくとも world、base、joint、tool、camera の各座標系が必要です。
- reBot Arm ではベースが固定されているため、$\{world\} = \{base\}$ です。
- **同次変換** は回転と並進を 1 つの 4x4 行列にまとめます。連鎖は行列の積です。
- **オイラー角**は人間用、**クォータニオン**は機械用です。
- 次の章では、これらの変換を使って関節角からエンドエフェクタの姿勢を計算し、その逆も行います。

</div>
