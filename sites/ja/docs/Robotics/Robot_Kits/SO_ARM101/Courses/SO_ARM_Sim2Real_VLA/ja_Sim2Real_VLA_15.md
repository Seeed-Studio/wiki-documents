---
description: "SO-ARM101 Sim-to-Real VLA コース第 15 章 —— ロボットハードウェアの接続：SO-101 フォロワーを USB シリアルで Jetson に接続、2 カメラの接続、キャリブレーションの移行、準備チェックリスト。"
title: 第 15 章 - ロボットハードウェアの接続
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - ハードウェア
  - USB シリアル
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_15
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 4 · 第 15 章 · Deploy on Jetson</span>
    <h2>15. ロボットハードウェアの接続</h2>
    <p>
      SO-101 フォロワーを USB シリアルで Jetson に接続し、2 台のカメラを
      つなぎ、キャリブレーションを移行する——以降、実行時にワークステーション
      は不要になる。
    </p>
    <div className="hero-actions">
      <a href="#requirements">要件</a>
      <a href="#connect">接続</a>
      <a href="#serial">シリアルポート</a>
      <a href="#cameras">カメラ</a>
      <a href="#checklist">チェックリスト</a>
    </div>
  </div>
</section>

## 15.1 ハードウェア要件

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>必要なもの</span>
    <h2>15.1 ハードウェア要件</h2>
  </div>

- Jetson AGX Orin または AGX Thor（JetPack 7.2、第 14 章）；
- SO-ARM101 フォロワーアーム——USB シリアル、**CAN アダプタは不要**；
- USB カメラ 2 台（手首 + 外部、第 8 章と同じ）；
- 給電付き USB 3.0 ハブ——Thor は Type-A ポートが 2 つしかなく、フォロワー
  + カメラ 2 台には足りません；
- フォロワーの 12 V 電源と USB データケーブル。

:::note エッジ側にリーダーは不要
リーダーアームはデータ収集専用です。Jetson デプロイに必要なのはフォロワー、
カメラ、ポリシーだけです。
:::

</section>

## 15.2 デバイスの接続

<section id="connect" className="section-card">
  <div className="section-title">
    <span>順序が重要</span>
    <h2>15.2 デバイスの接続</h2>
  </div>

1. フォロワーの 12 V 電源をオフのままにする；
2. フォロワーの USB シリアルポートを Jetson に接続（直結、または給電ハブ
   経由）；
3. 手首と外部のカメラを給電ハブ経由で接続；
4. ワークステーションからキャリブレーションディレクトリをコピー（下記）；
5. 最後にフォロワーへ給電。

:::tip コードだけではなくキャリブレーションもコピー
フォロワーは自分の ID に対して書かれたキャリブレーションを再生します。
ワークステーションのキャリブレーションを Jetson の同じパスへコピー：

```bash
# ワークステーション上で
rsync -av ~/.cache/huggingface/lerobot/calibration/ \
  jetson:/home/<jetson-user>/.cache/huggingface/lerobot/calibration/
```
:::

</section>

## 15.3 シリアルポートの特定

<section id="serial" className="section-card">
  <div className="section-title">
    <span>USB シリアル</span>
    <h2>15.3 シリアルポートの特定</h2>
  </div>

フォロワーに給電し、デバイスノードを確認：

```bash
ls /dev/ttyACM*
```

LeRobot の検出ツールでポートが機能することを確認（プロンプトに従い抜き差し）：

```bash
lerobot-find-port
```

以降のコマンドで使う変数をエクスポート——ワークステーションと同名です：

```bash
export ROBOT_PORT=/dev/ttyACM0
export ROBOT_ID=so101_follower
```

ポートが開けない場合は Jetson で権限を修正：

```bash
sudo usermod -aG dialout $USER   # 一度ログアウトして再ログイン
sudo chmod 666 /dev/ttyACM*
```

</section>

## 15.4 カメラの特定

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>2 つの映像ノード</span>
    <h2>15.4 カメラの特定</h2>
  </div>

```bash
ls /dev/video*
lerobot-find-cameras opencv
```

プレビュー画像（ファイル名にデバイス番号を含む）を対応付け、第 8 章
と同じ変数をエクスポートします：

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

カメラ番号は再起動や再接続で変わることがあります。デプロイセッションの
たびに再確認してください。

</section>

## 15.5 ハードウェア準備チェックリスト

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>第 16 章の前に</span>
    <h2>15.5 ハードウェア準備チェックリスト</h2>
  </div>

- [ ] Jetson が検証済みの JetPack/L4T で、確実に起動する；
- [ ] フォロワーが期待する `/dev/ttyACM*` ノードに現れる；
- [ ] `~/.cache/huggingface/lerobot/calibration/` にキャリブレーションが存在；
- [ ] 両カメラが 640×480・30 FPS で列挙・プレビューできる；
- [ ] `ROBOT_PORT`、`ROBOT_ID`、`CAMERA_GRIPPER`、`CAMERA_EXTERNAL` を
      エクスポート済み；
- [ ] 給電ハブを使用。負荷下でデバイスが外れない。

次の章：[第 16 章 —— GR00T ソフトウェア環境の構成](ja_Sim2Real_VLA_16.md)。

</section>

</div>