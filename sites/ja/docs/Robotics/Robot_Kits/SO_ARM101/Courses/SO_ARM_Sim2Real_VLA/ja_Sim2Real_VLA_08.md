---
description: "SO-ARM101 Sim-to-Real VLA コース第 8 章 —— 作業環境の構築：スタジオのハードウェア一覧、ライトボックス、カメラブラケット、ラックとプロップ配置、2 台のカメラ。"
title: 第 8 章 - 作業環境の構築
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - 作業環境
  - ライトボックス
  - カメラマウント
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_8
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_8/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 2 · 第 8 章 · Build Your Robot Lab</span>
    <h2>8. 作業環境の構築</h2>
    <p>
      タスクは常に同じ：3 本のバイアルをラックに入れる。本章ではそのタスクを
      録画可能で再現可能にするスタジオ——ハードウェア一覧、ライトボックス、
      ブラケット、プロップ配置、カメラ——を構築します。
    </p>
    <div className="hero-actions">
      <a href="#hardware">ハードウェア</a>
      <a href="#lightbox">ライトボックス</a>
      <a href="#brackets">ブラケット</a>
      <a href="#props">プロップ配置</a>
      <a href="#cameras">カメラ</a>
      <a href="#checklist">チェックリスト</a>
    </div>
  </div>
</section>

## 8.1 ハードウェア一覧

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>部品表</span>
    <h2>8.1 ハードウェア一覧</h2>
  </div>

| 部品 | 説明 | 数量 |
|---|---|---|
| SO-ARM101 Pro キット（リーダー + フォロワー） | [SO-ARM101 低コスト AI アームキット Pro](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 |
| USB カメラ ×2 | 手首用 1 台と外部用 1 台。640×480・30 FPS の UVC カメラ | 2 |
| カメラマウント | workshop の手首ブラケット + 剛性のある外部スタンド | 2 |
| バイアルラックと 3 本のバイアル | タスク用プロップ——デジタルツインと同寸法 | 1 セット |
| ライトボックスまたは発泡ボール箱 + 拡散光 | 均一な背景と安定した照明 | 1 |
| 反射しないマット | プロップを置く作業面 | 1 |
| 給電付き USB ハブ | PC や Jetson のポートが足りない場合 | 1 |

ポリシーはカメラが見たものを学習します。窓のある普通の机は照明が変わり続ける
データセットを生みます。スタジオはそのノイズを除去します。アプローチは
ビギナーコースのデータセット章
（[ビギナー第 11 章 —— タスク設計](https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_11/)、
[第 12 章 —— カメラ設定](https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_12/)）に準拠しています。

</section>

## 8.2 ライトボックス

<section id="lightbox" className="section-card">
  <div className="section-title">
    <span>スタジオ</span>
    <h2>8.2 ライトボックス</h2>
  </div>

最小構成のスタジオ：

| 部品 | 目的 |
| --- | --- |
| 発泡ボール箱または無地のマット | プロップの背後に均一な背景 |
| 拡散白光（シェード付きランプ、または 45° の LED 2 灯） | 強い影のない柔らかく安定した照明 |
| 反射しない作業面 | どちらのカメラからもバイアルとラックが見える |
| ロボット位置の固定 | フォロワーをボルトやテープで固定し、ベースをプロップに向ける |

:::tip 1 灯は 3 灯に勝る
不均一な複数光源は光沢のあるバイアルに移動するハイライトを作ります。拡散
した 1 灯と室内環境光の方が、別の日に再現しやすい——後日エピソードを追録
するときに重要です。
:::

</section>

## 8.3 ブラケットとマウント

<section id="brackets" className="section-card">
  <div className="section-title">
    <span>ブラケット</span>
    <h2>8.3 ブラケットとマウント</h2>
  </div>

2 つのマウントがカメラを支えます。どちらも 1 週間の録画に耐えて位置が
ずれない剛性が必要です。

**手首カメラブラケット。** フォロワーのグリッパーに取り付け、公式 SO-101
workshop のブラケットに従います：カメラは爪の上に、約 45° 下方に傾けて
配置し、全到達範囲で爪の先端と把持対象の両方が画面に収まるようにします。
workshop ブラケットをプリントまたは購入し、ねじをしっかり締めてください
——録画の途中で回ると、以降のエピソードがすべて無効になります。

**外部カメラスタンド。** 剛性のあるスタンドなら何でも使えます：小型
三脚、2020 アルミフレーム柱、机にクランプするアーム。作業域の上方前方に
置き、1 フレームでラック・3 つのバイアル位置・フォロワーの到達範囲の
大半を収めます。手持ちは不可、フォロワーが押す板にクランプするのも不可
です。

ケーブル配線：手首側にはたるみを残して引っかからないようにし、2 本の
カメラケーブルはフォロワーの作業域から離します。

</section>

## 8.4 プロップ配置

<section id="props" className="section-card">
  <div className="section-title">
    <span>プロップ配置</span>
    <h2>8.4 プロップ配置</h2>
  </div>

タスクの定義はデータセットの一部です。一貫性を保ってください：

- **バイアルラック**：フォロワーベースの右側、楽に届く範囲——デジタル
  ツインと同じ側・同じ距離；
- **3 本のバイアル**：アーム前方の作業域に、10–20 cm ほどの位置に散らばら
  せます。エピソード間に手で置き直します；
- **タスク文**：`Put the three vials into the vial rack`——第 9 章の録画
  とデジタルツインのデータセットで使う原文そのものです。エピソード間で
  言い換えないでください。

:::tip 一度測り、治具を作る
ラック位置をテープで固定し、マットにバイアル領域をマーキングします。再現
可能性はミリ精度より重要です。
:::

シミュレーションデータも収集する予定がある場合（第 12 章）、ベンチを
ツインのシーンに合わせてください——ツインが仕様です：

| 確認項目 | シミュレーション参考値 | 実機ベンチ |
| --- | --- | --- |
| ラック位置 | `SO101_RACK_POSITION` で固定 | ベース基準の同じ側・同じ距離 |
| バイアル初期域 | `SO101_VIAL_POSITIONS` | アーム前方の同じ 10–20 cm 域 |
| カメラ視野 | 手首 + 外部 | 同じ構図、640×480、30 FPS |
| 照明 | ドーム光 + キーライト | 拡散光、ラックに強い影なし |

1–2 cm のずれは許容されます。ラックが反対側、カメラの高さが違う、手持ち
カメラ——これらは不可です。

</section>

## 8.5 カメラ

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>2 視点</span>
    <h2>8.5 カメラ</h2>
  </div>

カメラを一覧し、それぞれのプレビューを取得します：

```bash
lerobot-find-cameras opencv
```

プレビュー画像は `outputs/captured_images/` に書き込まれます。ファイル名に
デバイス番号が含まれ、例えば `opencv__dev_video4.png` は 4 番です。エクス
ポートします：

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

再起動や再接続で番号は変わる可能性があるため、録画セッションごとに確認
します。カメラが対応していればフォーカスと露出を固定してください——
エピソード中のオートフォーカスはぼけた学習フレームになります。

テレオペレーション中に両視野を確認します：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --display_data=true \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }"
```

:::note カメラ名はデータセットスキーマの一部
本コースは `front`（手首カメラ）と `external`（見下ろしカメラ）のキーで
録画します。これにより実データセットは第 12 章のシミュレーションデータ
セットと完全に同じ特徴名を持ち、特徴の改名なしにシミュ＋実の協調学習が
可能になります。第 10 章でこの 2 ストリームを GR00T の `wrist` と `front`
入力にマッピングします。
:::

</section>

## 8.6 スタジオチェックリスト

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>第 9 章の前に</span>
    <h2>8.6 スタジオチェックリスト</h2>
  </div>

- ライトボックスかマットを設置、拡散 1 灯、ラックに強い影なし；
- フォロワーを固定。リーダーは手の届く範囲に；
- 手首ブラケットは剛性があり、カメラは約 45° 下方、爪が見える；
- 外部カメラは剛性スタンド上で、ラックと 3 つのバイアルスロットが見える；
- 両カメラが 640×480・30 FPS でプレビュー、フォーカス固定；
- `CAMERA_GRIPPER` と `CAMERA_EXTERNAL` をエクスポート；
- ラックをテープ固定、バイアル領域をマーキング、タスク文を固定。

次の章：[第 9 章 —— 実環境でのデータ収集](ja_Sim2Real_VLA_09.md)。

</section>

</div>