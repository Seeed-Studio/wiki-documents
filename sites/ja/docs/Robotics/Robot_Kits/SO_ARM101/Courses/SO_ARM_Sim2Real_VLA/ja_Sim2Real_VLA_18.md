---
description: "SO-ARM101 Sim-to-Real VLA コース第 18 章 —— Jetson 上の GR00T N1.7 TensorRT 推論：7 つの対象固有エンジンをビルドし、オフライン評価し、エッジポリシーサーバを起動する。"
title: 第 18 章 - GR00T N1.7 TensorRT 推論の実行
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - TensorRT
  - GR00T N1.7
  - エッジデプロイ
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_18
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 4 · 第 18 章 · Deploy on Jetson</span>
    <h2>18. GR00T N1.7 TensorRT 推論の実行</h2>
    <p>
      ファインチューニング済みポリシーを 7 つの対象固有 TensorRT エンジンへ
      エクスポートし、オフラインで検証し、Jetson だけでポリシーを SO-101
      フォロワーに供給する。
    </p>
    <div className="hero-actions">
      <a href="#prereq">前提条件</a>
      <a href="#build">エンジンのビルド</a>
      <a href="#offline">オフライン推論</a>
      <a href="#serve">ポリシーサーバ</a>
      <a href="#troubleshoot">トラブルシューティング</a>
    </div>
  </div>
</section>

## 18.1 前提条件

<section id="prereq" className="section-card">
  <div className="section-title">
    <span>ビルド前の確認</span>
    <h2>18.1 前提条件</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"
git rev-parse HEAD
```

期待するリポジトリリビジョン：

```text
dcf5f6b759fd17cab3644a97fc4429bca7451e38
```

第 17 章の必要な入力を検証：

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_BACKBONE_PATH}/config.json"
```

:::caution 対象間でエンジンをコピーしない
TensorRT の `.engine` ファイルは GPU アーキテクチャ、TensorRT バージョン、
チェックポイント、グラフ形状、精度、ビルダー構成に依存します。各対象は
独自のエンジンをビルドします。
:::

</section>

## 18.2 TensorRT パイプラインの出力

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>7 つのエンジン</span>
    <h2>18.2 TensorRT パイプラインの出力</h2>
  </div>

完全なパイプラインは 7 つの対象固有エンジンを作成します：

```text
1. vit.engine
2. llm_bf16.engine
3. vl_self_attention.engine
4. state_encoder.engine
5. action_encoder.engine
6. dit_bf16.engine
7. action_decoder.engine
```

</section>

## 18.3 Jetson AGX Orin でのビルド

<section id="orin" className="section-card">
  <div className="section-title">
    <span>Orin ラッパー</span>
    <h2>18.3 Jetson AGX Orin でのビルド</h2>
  </div>

```bash
export GR00T_TARGET=orin
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
bash scripts/deployment/orin_jp72/run_full_trt.sh verify
bash scripts/deployment/orin_jp72/run_full_trt.sh status
```

ラッパーは `.venv-jp72` を有効化し、JetPack 7.2 の CUDA ランタイムパスを
読み込み、Orin エンジンバンドルを `${GR00T_TRT_OUTPUT}` にビルドします。

</section>

## 18.4 Jetson AGX Thor でのビルド

<section id="thor" className="section-card">
  <div className="section-title">
    <span>Thor パイプライン</span>
    <h2>18.4 Jetson AGX Thor でのビルド</h2>
  </div>

```bash
export GR00T_TARGET=thor
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

source .venv/bin/activate
source scripts/activate_thor.sh

python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_MODEL_PATH}" \
  --dataset-path "${GR00T_DATASET_PATH}" \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --precision bf16 \
  --batch-size 1 \
  --steps export,build,verify,benchmark
```

第 10 章で学習したのと同じエンボディメントタグ（`NEW_EMBODIMENT`）と 16
ステップのアクションホライズンを使用してください。チェックポイントと
データセットを Orin と共有する場合でも、Thor 用の出力ディレクトリは別に
ビルドします。

</section>

## 18.5 オフライン推論の実行

<section id="offline" className="section-card">
  <div className="section-title">
    <span>ロボット非接続</span>
    <h2>18.5 オフライン推論の実行</h2>
  </div>

まず録画済み軌跡に対してエンジンを検証します：

```bash
# Orin
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

このコマンドは設定されたローカル軌跡に対して TensorRT パイプラインを評価し、
結果を `${GR00T_RESULT_PATH}` に書き込みます。

```bash
# Thor
source .venv/bin/activate
source scripts/activate_thor.sh

python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_MODEL_PATH}" \
  --dataset-path "${GR00T_DATASET_PATH}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --execution-horizon 16 \
  --save-plot-path "${GR00T_RESULT_PATH}"
```

エンジンのエクスポート時に使用したものと同じエンボディメントタグとアクション
ホライズンを使用してください。

</section>

## 18.6 TensorRT ポリシーサーバの起動

<section id="serve" className="section-card">
  <div className="section-title">
    <span>エッジエンドポイント</span>
    <h2>18.6 TensorRT ポリシーサーバの起動</h2>
  </div>

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
ss -ltn | grep ':5555'
```

デフォルトのエンドポイントは `127.0.0.1:5555` です。別のアドレスを公開する
には：

```bash
export GR00T_SERVER_HOST=0.0.0.0
export GR00T_SERVER_PORT=5555
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
```

SO-101 ロボットクライアントを Jetson に向けます。Jetson 自身から——または
workshop の評価スクリプトを持ち、フォロワーを接続した同一ネットワーク上の
任意のマシンから——Jetson のアドレスを指定して第 11 章のクライアントを実行
します：

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=<JETSON_IP> \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack"
```

これで SO-101 フォロワーは、完全に Jetson 上で動作するポリシーを実行します。

エンジンバンドルの検証：

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -name '*.engine' -printf '%f\n' | sort
```

7 つのエンジンすべてが存在し、検証が形状や数値精度の失敗なしに完了したこと
を確認してください。

</section>

## 18.7 トラブルシューティング

<section id="troubleshoot" className="section-card">
  <div className="section-title">
    <span>よくある問題</span>
    <h2>18.7 トラブルシューティング</h2>
  </div>

### Orin で `libcusparseLt.so.0` が見つからない

`.venv-jp72/bin/python` を直接呼ばず、ラッパーを使ってください：

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

### Python 環境が誤り

```bash
which python
python -c "import sys; print(sys.executable)"
```

- Orin：`${GR00T_REPO}/.venv-jp72/bin/python`
- Thor：`${GR00T_REPO}/.venv/bin/python`

### エンジンの形状 / デシリアライズエラー

チェックポイント、バックボーン、TensorRT バージョン、精度、バッチサイズ、
アクションホライズン、グラフ形状を変更した後は、対象固有のエンジンを削除して
再ビルドします：

```bash
rm -rf "${GR00T_TRT_OUTPUT}/engines"
```

その後、対応する Orin または Thor のビルドコマンドを再実行してください。

### TensorRT ビルドのメモリ不足

```bash
free -h
df -h "${GR00T_WORKSPACE}"
sudo tegrastats
```

他の GPU アプリケーションを閉じ、ワークスペースに十分な空きがあることを
確認してから再ビルドしてください。

</section>

## 18.8 再現チェックリスト

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>最終ゲート</span>
    <h2>18.8 再現チェックリスト</h2>
  </div>

- [ ] リポジトリが検証済みコミットにある；
- [ ] チェックポイント、バックボーン、データセット、エンボディメント設定が
      完全；
- [ ] Orin は `.venv-jp72`、Thor は `.venv` を使用；
- [ ] 7 つのエンジンを実行する対象上でビルドした；
- [ ] オフライン TensorRT 推論が完了し結果プロットを保存した；
- [ ] ポリシーサーバはエンジンバンドルが検証を通ってから起動した；
- [ ] SO-101 フォロワーが Jetson ポリシーサーバ駆動のタスクを実行した。

コース概観へ戻る：[SO-ARM101 Sim-to-Real VLA コース](ja_Sim2Real_VLA_Introduction.md)。

</section>

</div>