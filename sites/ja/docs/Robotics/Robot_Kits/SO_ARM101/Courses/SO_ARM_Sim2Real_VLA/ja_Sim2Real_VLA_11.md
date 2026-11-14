---
description: "SO-ARM101 Sim-to-Real VLA コース第 11 章 —— 実環境での評価：分離されたポリシーサーバとロボットクライアントで、物理 SO-101 フォロワー上でファインチューニング済み GR00T N1.7 を閉ループ実行する。"
title: 第 11 章 - 実環境での評価
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - GR00T N1.7
  - 推論
  - 評価
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_11
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_11/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 3 · 第 11 章 · Get Your Own VLA Model</span>
    <h2>11. 実環境での評価</h2>
    <p>
      ファインチューニング済み GR00T N1.7 を実世界にデプロイする：ポリシー
      サーバがモデルを実行し、ロボットクライアントが SO-101 フォロワーを
      閉ループで駆動する。
    </p>
    <div className="hero-actions">
      <a href="#architecture">アーキテクチャ</a>
      <a href="#server">サーバ</a>
      <a href="#client">クライアント</a>
      <a href="#safety">安全</a>
      <a href="#iterate">反復</a>
    </div>
  </div>
</section>

## 11.1 デプロイアーキテクチャ

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>分離設計</span>
    <h2>11.1 デプロイアーキテクチャ</h2>
  </div>

Isaac GR00T のデプロイアーキテクチャは、推論側と制御側を分離する設計を
採用しています：

- **推論側（サーバ）**：モデル推論の実行に専用；
- **制御側（クライアント）**：アームの状態取得と運動制御の調整を担当。

サーバとクライアントは 2 台の別々のデバイスで動かせます（例：GPU
ワークステーションが Jetson 搭載ロボットにポリシーを供給——第 18 章）、
本章のデモのように 1 台のコンピュータで両方動かすこともできます。

:::caution VRAM
単一マシン評価では、3B GR00T モデルを載せられる NVIDIA GPU——それを
ファインチューニングしたクラス（第 10 章）——が必要です。
:::

評価には NVIDIA workshop の SO-101 実機クライアントを使用します。完全な
閉ループを処理します：観測を入力すると 16 ステップのアクションチャンクが
返り、クライアントは重複する予測を時間整合・ブレンドし、30 Hz でモーター
命令をフォロワーへ連続送出します。

</section>

## 11.2 端末 1：推論サーバの起動

<section id="server" className="section-card">
  <div className="section-title">
    <span>ポリシーサーバ</span>
    <h2>11.2 端末 1：推論サーバの起動</h2>
  </div>

NVIDIA の実機コンテナは GR00T 評価スクリプトとチェックポイントディレクトリ
をマウントします。出力ディレクトリをマウントして起動：

```bash
cd ~/Sim-to-Real-SO-101-Workshop
docker run -it --rm --name real-robot --network host --privileged --gpus all \
  -e DISPLAY \
  -v /dev:/dev \
  -v /run/udev:/run/udev:ro \
  -v $HOME/.Xauthority:/root/.Xauthority \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v $HOME/.cache/huggingface/lerobot/calibration:/root/.cache/huggingface/lerobot/calibration \
  -v $HOME/groot_so101_real:/workspace/models/so101 \
  -v $(pwd)/docker/real/scripts:/Isaac-GR00T/gr00t/eval/real_robot/SO100 \
  real-robot \
  /bin/bash
```

コンテナ内でチェックポイントを指定してサーバを起動：

```bash
python Isaac-GR00T/gr00t/eval/run_gr00t_server.py \
  --model-path /workspace/models/so101/checkpoint-5000
```

サーバはポート 5555 で待ち受け、複数回のロールアウトにわたって動作し続け
ます——試行間に止めるのはクライアントだけです。

</section>

## 11.3 端末 2：ロボットクライアントの起動

<section id="client" className="section-card">
  <div className="section-title">
    <span>閉ループ</span>
    <h2>11.3 端末 2：ロボットクライアントの起動</h2>
  </div>

コンテナに 2 番目の端末をアタッチします：

```bash
docker exec -it real-robot /bin/bash
```

評価スクリプトを実行します。カメラのキーに注意：推論時のランタイム名は
`wrist` と `front` です——第 10 章のモダリティファイルが生成した名前と同じ
です。物理カメラは不変：`wrist` はグリッパーカメラ、`front` は見下ろし
カメラです。

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=localhost \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack" \
  --rerun True
```

期待される動作：

1. フォロワーがゆっくり開始姿勢へ立ち上がる；
2. 推論モードに入りタスクを開始；
3. 端末 2 で `Ctrl+C` を押すと停止しホームへ戻る；
4. 端末 1 のサーバは起動したままなので、再ロールアウトが可能。

:::tip 複数チェックポイントを評価する
チェックポイント番号を変えてクライアントを再実行し（両端末を停止、
`--model-path` を変更、再起動）、タスク成功率が最も高いものを残す——
必ずしも最後のものではない。
:::

</section>

## 11.4 安全

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Enter を押す前に</span>
    <h2>11.4 安全</h2>
  </div>

ポリシーは人が予想するより速く動くことがあります：

- ロールアウト中は手・髪・袖をバイアル領域から離す；
- カメラケーブルと電源ケーブルをフォロワーの作業域から離す；
- フォロワーの電源スイッチを手の届く所に——モーター電源の切断が非常停止；
- ロールアウト間はバイアルを開始領域に戻し、ラックが動いていないか確認。

</section>

## 11.5 観察に基づく反復

<section id="iterate" className="section-card">
  <div className="section-title">
    <span>失敗 → 修正</span>
    <h2>11.5 観察に基づく反復</h2>
  </div>

初回の実機ロールアウトが毎回成功することはまれです。典型的な観察と修正：

| 観察 | 考えられる原因 | 修正 |
| --- | --- | --- |
| 数センチの把持ミス | 学習時とカメラ構図が違う | 第 8 章のカメラ姿勢を再確認 |
| 把持後に落下 | 接触 / 摩擦の差 | 成功把持の実エピソードを追加録画 |
| 正しい方向へだんだんずれる | キャリブレーション不良 | `lerobot-calibrate` と検査を再実行 |
| 言語指示を無視 | タスク文の不一致 | `--lang_instruction` に録画時の原文を使う |
| サーバが観測を拒否 | カメラキーの不一致 | 評価コマンドで `wrist` と `front` を維持 |
| タスク途中で失速 | エピソードがホールドで終了 | 長く完全な演示を録画 |

この順序で反復してください：まずスタジオとカメラを直し、次に 5–10 本の
実エピソードを追加（第 9 章）、それから再学習（第 10 章）。データを直す前に
モデルを変えると、本物の問題が隠れることが多い。

| 症状 | 原因 | 修正 |
| --- | --- | --- |
| ポート 5555 で `address already in use` | 古いサーバが残存 | 前のコンテナやプロセスを停止 |
| サーバ起動時にロールアウトが動かない | チェックポイントパスの失効 | マウントと `--model-path` が同じチェックポイントを指すか確認 |
| ロボットが即座にホームへ戻る | ポリシーか観測のエラー | サーバログを確認。カメラストリームと関節名をチェック |
| コンテナ内 `Cannot find calibration` | キャリブレーションの未マウント | `~/.cache/huggingface/lerobot/calibration` をマウント（上の `docker run` に同梱済み） |

エッジデプロイ——ワークステーション GPU ではなく Jetson でポリシーを実行
——に進むなら[第 14 章 —— Jetson エッジデバイスのセットアップ](ja_Sim2Real_VLA_14.md)へ。まずデータを増やすならオプションの
[第 12 章](ja_Sim2Real_VLA_12.md)・[第 13 章](ja_Sim2Real_VLA_13.md)へ。

コース概観へ戻る：[SO-ARM101 Sim-to-Real VLA コース](ja_Sim2Real_VLA_Introduction.md)。

</section>

</div>