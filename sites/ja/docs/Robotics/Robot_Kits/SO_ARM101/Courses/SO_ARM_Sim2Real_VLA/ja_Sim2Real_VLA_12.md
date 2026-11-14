---
description: "SO-ARM101 Sim-to-Real VLA コース第 12 章（オプション）—— Isaac Sim からのデータ収集：同じリーダーでホワイト SO-ARM101 デジタルツインを操縦し、まったく同じスキーマでエピソードを録画・再生・検証する。"
title: 第 12 章 - Isaac Sim からのデータ収集（オプション）
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac Sim
  - デジタルツイン
  - データ収集
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_12
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_12/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 3 · 第 12 章 · オプション · シミュデータ</span>
    <h2>12. Isaac Sim からのデータ収集</h2>
    <p>
      同じリーダーアームでホワイト SO-ARM101 デジタルツインを操縦し、実データ
      とまったく同じスキーマでエピソードを録画して、実機を占有せずにパイプ
      ライン全体を検証する。
    </p>
    <div className="hero-actions">
      <a href="#process">データリンク</a>
      <a href="#cameras">カメラ視野</a>
      <a href="#requirements">要件</a>
      <a href="#launch">起動</a>
      <a href="#capture">録画</a>
      <a href="#replay">再生</a>
    </div>
  </div>
</section>

:::note この章はオプション
まず完全な実世界ループ（データ収集 → 学習 → 実環境評価、第 9–11 章）を
実行することを推奨します。シミュレーションデータは実機を占有せず、低コスト
でシーンと照明の多様性を拡張できるため、実パイプライン検証後の補完として
有効です。
:::

## 12.1 学習目標とデータリンク

<section id="process" className="section-card">
  <div className="section-title">
    <span>データリンク</span>
    <h2>12.1 学習目標とデータリンク</h2>
  </div>

- NVIDIA Isaac Sim シミュレーションツールについて学ぶ；
- ツインのカメラ構成を学ぶ：手首搭載の `front` カメラと見下ろしの `external`
  カメラ——実データセットと同じ 2 ストリーム；
- ツインで完全な VLA 学習データセットを生成する。

SO-ARM101 プロジェクトのデータリンクは次の通りです：

```text
SO-101 リーダー（またはキーボード IK）
       | USB シリアル
       ▼
LeRobot Python ブリッジ -- UDP 127.0.0.1:5015 --> Isaac Sim ホワイト SO-ARM101
                                                        |
                                   +--------------------+--------------------+
                                   |                                         |
                                   ▼                                         ▼
                              action/state                        front + external カメラ
                                   |                                         |
                                   +--------------------+--------------------+
                                                        |
                                                        ▼
                                                 LeRobot Dataset v3
```

リーダーは手動制御コマンドを提供するだけで、シミュレーションアームが自立的
に把持軌道を実行することはありません。システムは同時に記録します：

- `action`：6 次元のリーダー関節コマンド；
- `observation.state`：リーダー空間の 6 次元シミュレーション関節値；
- `observation.images.front`：手首とともに動くカメラ；
- `observation.images.external`：作業域上方からの見下ろしビュー；
- タスク文（`Put the three vials into the vial rack`）、ランダム化パラメータ、
  タスク成功状態。

デフォルトの取得周波数は 30 FPS、両記録カメラは 640 × 480——第 9 章の実
データセットと同一です。

</section>

## 12.2 カメラ視野

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>front + external</span>
    <h2>12.2 カメラ視野</h2>
  </div>

`R` でシーンをリセットすると、2 つのカメラ視野は実機と同じように見えます：
`front` はアームとともに動く手首ストリーム、`external` は固定の見下ろし
ビュー——どちらもデータセットに記録されます。

:::note 手首視野にハードウェアが写るのは正常
`front` ビュー下部に見えるグリッパーとカメラマウントは意図的なものです
——手首カメラはレンズ前方にあり、アームに沿って見ます。第 8 章の実機手首
ブラケットと同じです。`./run_so101.sh --single-viewport` でメインビューポー
トだけを残してフローティングカメラウィンドウを隠せます。録画への影響は
ありません。
:::

</section>

## 12.3 環境要件

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>GPU とインストール</span>
    <h2>12.3 環境要件</h2>
  </div>

- Ubuntu 22.04；
- NVIDIA RTX GPU——Isaac Sim の作業には 12 GB 以上の VRAM を推奨；
- Isaac Sim 6.1 スタンドアロンがインストールされ起動可能なこと。

Isaac Sim を一度インストールします：

```bash
# NVIDIA から Isaac Sim 6.1 Linux スタンドアロン zip をダウンロードし、
# 展開して一度起動する：
mkdir -p ~/isaacsim && cd ~/isaacsim
unzip ~/Downloads/isaac-sim-standalone-6.1.0-linux-x86_64.zip
./python.sh -c "print('isaac ok')"
```

- 第 7 章の LeRobot 環境（`~/rebot_lerobot/.venv`）。録画エピソードの変換に
  必要なデータセットオプション付きでインストール：
  `uv pip install -e "./lerobot[dataset,viz]"`。未導入だと録画エピソードの
  変換が失敗し、端末に `[dataset-error]` が出ます；
- `git-lfs` 導入済み——プロジェクトの USD アセットは Git LFS で格納。

:::caution 8 GB ノート GPU
8 GB GPU（大半のノート GPU）では、プロジェクト組み込みの緩和策（Real-Time
レンダリング、640×360、30 Hz 上限）を有効にしても、レンダリング負荷が
デスクトップコンポジターを圧迫し数分でフリーズすることがあります。緩和
フラグを使うか、ヘッドレス収集に切り替えてください。
:::

</section>

## 12.4 ソースコードのダウンロード

<section id="source" className="section-card">
  <div className="section-title">
    <span>プロジェクトのクローン</span>
    <h2>12.4 ソースコードのダウンロード</h2>
  </div>

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/yuyoujiang/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

:::caution USD アセットは Git LFS
`git lfs pull` をしないとクローンには小さなポインタファイルしかなく、
Isaac Sim がシーンを開けません。
:::

</section>

## 12.5 Isaac Sim テレオペレーションの起動

<section id="launch" className="section-card">
  <div className="section-title">
    <span>初回ビルド</span>
    <h2>12.5 Isaac Sim テレオペレーションの起動</h2>
  </div>

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --leader-port /dev/ttyACM0
```

シリアルデバイスが 1 つだけなら自動検出もできます：

```bash
./run_so101.sh
```

Isaac Sim が別ディレクトリにある場合：

```bash
ISAACSIM_ROOT=/path/to/isaacsim ./run_so101.sh --leader-port /dev/ttyACM0
```

初回起動は `scenes/so101_vials_sorting.usda` をビルドしシェーダーをコンパイル
するため数分かかります。正常です。

リーダー機材がない？ キーボード IK モードでエンドエフェクタを直接駆動
できます：

1. 3D ビューポートを 1 回クリック（キーボードフォーカス）；
2. `Y` を押す——端末に
   `[teleop] Control source: KEYBOARD (IK: WASD ...)` と表示；
3. `W`/`S`/`A`/`D` で机上平面を移動、矢印キーで上下、`Z`/`C` でツール
   俯仰、`G` でグリッパー開閉。

</section>

## 12.6 エピソードの録画

<section id="capture" className="section-card">
  <div className="section-title">
    <span>R · S · C</span>
    <h2>12.6 エピソードの録画</h2>
  </div>

Isaac Sim のビューポートがキーボードフォーカスを得ていることを確認し、
次の順で操作します：

1. `R` でシーンをリセット。3 本のバイアルが再配置され、物体と照明の
   ランダム化が適用されます；
2. 2 つのカメラ視野とバイアルの初期位置を確認；
3. `S`（リーダーモード）または `T`（キーボードモード）で録画開始：

```text
[record] Episode started at 30 FPS -> .../datasets/so101_vials_front_side
```

4. リーダーを操作して 3 本のバイアルをラックへ。グリッパーが近くで閉じると
   把持アシストが取り付け（端末に `[GRASP]`）、ラック上で開くと解放します
   （`[RELEASE]`）；
5. もう一度 `S`/`T` で終了して保存；
6. バックグラウンドエンコードの完了を待つ：

```text
[dataset] Episode saved; total completed: 1
```

システムは一時 JPEG・アクション・状態をバックグラウンドで LeRobot Dataset
v3 へ変換します。エンコード中に次の操作を開始できます。

キーボードショートカット：

| キー | 機能 |
|---|---|
| `R` | 3 本のバイアルをリセットし再ランダム化 |
| `S` / `T` | 録画開始。録画中にもう一度押すと終了して保存 |
| `C` | 現エピソードをキャンセル（データセットに書かない） |
| `Y` | リーダーモード / キーボード IK モードの切替 |
| `B` | キーボードステップの低速 / 高速切替 |

バイアルが倒れた、把持に失敗した、動作品質が悪い場合は `C` で破棄し、
`R` を押して再録してください。

</section>

## 12.7 データセットの検査と可視化

<section id="viz" className="section-card">
  <div className="section-title">
    <span>データセットビジュアライザー</span>
    <h2>12.7 データセットの検査と可視化</h2>
  </div>

```bash
cd ~/rebot_lerobot
source .venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --episode-index 0 \
  --display-compressed-images true
```

エピソードを順に確認：アクション・状態・2 つの動画ストリームが同期して
おり、黒フレーム・固まりフレーム・深刻な遮蔽がないこと。

</section>

## 12.8 Isaac Sim でのアクション再生

<section id="replay" className="section-card">
  <div className="section-title">
    <span>シミュ閉ループ</span>
    <h2>12.8 Isaac Sim でのアクション再生</h2>
  </div>

まず、リーダーに接続せず、録画せず、ランダム化を無効にした Isaac Sim
レシーバを起動します：

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --no-start-bridge --no-recording --no-dr &
```

次に第 2 端末からエピソード 0 を再生：

```bash
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts ~/rebot_lerobot/.venv/bin/python \
  scripts/replay_episode_so101.py --episode 0
```

ループ再生は `--loop` を追加。再生スクリプトはデータセットの `action` 列を
送信してアームの軌道を確認するもので、動画プレイヤーではありません
——カメラ内容は上のデータセットビジュアライザーで確認してください。アク
ション送信中は端末に `[teleop:LIVE]`、3 本のバイアルが 0.35 秒ラック内で
安定すると `[SUCCESS]` が出ます。

</section>

## 12.9 リーダーなしでの検証（オプション）

<section id="no-leader" className="section-card">
  <div className="section-title">
    <span>ヘッドレスチェック</span>
    <h2>12.9 リーダーなしでの検証（オプション）</h2>
  </div>

リーダーがまだ手元になくても、内蔵のスクリプトリコーダーで物理・カメラ・
データセット書き込みをヘッドレス検証できます：

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --auto-record 2
```

`datasets/so101_vials_front_side` に短い 2 エピソードを録画して終了します。
最後の `[dataset] Episode saved` は、シーン構築・物理・カメラ・データセット
変換の全チェーンが機材なしで動作することを意味します。

</section>

## 12.10 設定と参考資料

<section id="config" className="section-card">
  <div className="section-title">
    <span>設定ファイル</span>
    <h2>12.10 設定と参考資料</h2>
  </div>

SO-ARM101 プロジェクトの主な設定ファイル：

- `config/teleop_config_so101.json`：シリアルポート、UDP、関節マッピング、
  把持アシスト；
- `config/domain_randomization_so101.json`：物体・照明・カメラ・データセット
  パラメータ；
- `config/grasp_config_so101.json`：シーン物体、物理パラメータ、タスク成功
  条件。

続いて[第 13 章 —— データセット拡張（オプション）](ja_Sim2Real_VLA_13.md)、
または実機ルートの[第 14 章 —— Jetson エッジデバイスのセットアップ](ja_Sim2Real_VLA_14.md)へ。

</section>

</div>