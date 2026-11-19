---
title: reBot Arm T701 HT クイックスタート
sidebar_label: クイックスタート
description: reBot Arm T701 HT を開封して組み立て、Ubuntu に SDK をインストールし、関節フィードバックを確認し、ゼロ位置を設定して、デモを実行します。
keywords:
  - reBot
  - T701 HT
  - OpenArm-HT-A1
  - Bimanual Robot
  - Python SDK
slug: /rebot_t701_ht_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT クイックスタート

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701"
  fallbackCount={35}
  ariaLabel="Star reBot Arm T701 on GitHub"
/>

## プロジェクト概要

reBot Arm T701 は、Seeed Studio が提供する Physical AI、ロボット学習、実環境でのデータ収集向けのオープンソース双腕ロボットプラットフォームです。オープンソース設計の reBot Arm B601 をベースとしており、開発者は 1 つのプラットフォームでデータ収集と協調的な両腕タスクの研究を行うことができます。

- **双腕構成。** 2 本の 7 自由度アームが 1 つの胴体コラムに取り付けられています。CAN バスモーターが各関節を駆動し、それぞれのアームにグリッパーが 1 つずつ搭載されています。
- **ビジョンとエッジコンピューティング。** プラットフォームには、RealSense D405 手首カメラ、D435 ヘッドカメラ、および NVIDIA Jetson Orin コンピュートモジュール用のマウントポイントがあります。**Basic バージョンにはカメラは含まれません。**
- **オープンソースリソース。** CAD ファイル、部品表 (BOM)、組立ガイド、ソフトウェアは、プロジェクトロードマップに従って段階的に公開されます。

## 安全に関する免責事項およびリスクに関する注意

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="reBot Arm safety disclaimer and risk notice in Chinese" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="reBot Arm safety disclaimer and risk notice in English" />
  </figure>
</div>

{/*
## About the Power Supply

- **TODO** Add the power supply model, rated output, connector specifications, and availability.
*/}

## ロボットの開封と組み立て

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### 梱包内容を確認する

キャリングケースを開け、梱包明細書と照らし合わせてロボットの部品とファスナーを確認します。

:::note[Basic バージョンにはカメラは含まれません]
出荷内容については梱包明細書を参照してください。
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="Open carrying case showing both arms, the torso column, the covers, and the cameras in the pictured configuration" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### 両方のアームを胴体コラムに取り付ける

1. 胴体コラムと右アームを取り出します。両方の写真で赤丸で示されている 4 つの取付穴の位置を合わせます。
2. 付属の **M6 ネジ** 4 本を使用して、右アームをコラムに固定します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>胴体コラム側の取付穴</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-torso-holes.webp" alt="Four mounting holes circled in red on the side of the torso column" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>右アーム取付プレート側の対応する穴</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-arm-holes.webp" alt="Four mounting holes circled in red on the right arm's metal mounting plate" loading="lazy" />
  </figure>
</div>

右アームを固定したら、上からと横から見てコラムに対してどのように収まっているかを確認します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>右アーム取付後（上面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-top.webp" alt="Top view of the right arm mounting plate and upper screws" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>右アーム取付後（側面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-side.webp" alt="Side view of the right arm mounting plate and lower screws" loading="lazy" />
  </figure>
</div>

電源が切れている状態で、胴体コラム側面から伸びている **XT30 2+2 ケーブルハーネス** を、下図に示す右アームのコネクタに接続します。左アームも、コラムの反対側で同じ手順で取り付けて接続します。

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="Routing of the XT30 2+2 cable harness from the torso column to the arm connector" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### ショルダーカバーを取り付ける

1. 各ショルダーの周りに、緑色カバーの上半分と下半分を組み合わせてはめ込みます。
2. 赤丸で示された位置に、付属の **中短 M3 ネジ** を挿入します。片側 4 本、合計 8 本使用します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーの上半分と下半分</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="Two green semicircular shoulder cover pieces" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバー取付後</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="Red box marking the position of the assembled green shoulder cover" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーのネジ位置（上面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="Two shoulder cover screws circled in red in the top view" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーのネジ位置（側面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="Shoulder cover screw circled in red in the side view" loading="lazy" />
  </figure>
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### 胴体カバーを取り付ける

1. 両方のショルダーカバーを固定したら、胴体カバーをはめ込み、側面のケーブルを対応する切り欠きに通します。お使いのロボットに、下図のような **RealSense D435i** カメラが搭載されている場合は、前面カバーの開口部と位置を合わせてください。**Basic バージョンにはカメラは含まれません。**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>前面カバーのカメラ開口部（Basic バージョンにはカメラは含まれません）</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="Red box marking where the D435i aligns with the opening in the front cover" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>側面のケーブル用切り欠き</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="Red circle marking the cable cutout on the side of the torso cover" loading="lazy" />
     </figure>
   </div>

2. 胴体カバー背面の赤丸で示された穴に、付属の **最も長い M3 ネジ** 4 本を挿入して固定します。

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="Four screw positions circled in red on the rear torso cover" loading="lazy" />
   </div>

  </div>
</div>

</div>

{/* - **TODO** Add instructions for securing the base and installing the grippers separately. */}

## ロボットを接続する

:::warning
配線作業の前に必ず電源を切ってください。ロボットの電源を入れる前に、しっかりと固定されていることを確認し、両腕の可動範囲全体に障害物がないようにしてください。
:::

1. 下図のように電源を接続します。
2. 丸い電源ボタンを押してロボットの電源を入れます。
3. USB データケーブルで、コンピュータをメインボードの USB-C ポートに接続します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>電源接続</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="Power connector and cable at the base of the T701 HT" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>丸い電源ボタンとメインボードの USB-C ポート</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="Round power button next to the mainboard and a USB data cable plugged into the USB-C port" loading="lazy" />
  </figure>
</div>

## T701-HT SDK を使ってロボットをキャリブレーションして動かす

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### SDK をインストールする

:::info[モータライブラリの対応プラットフォーム]

SDK には、`motor_whl/` 内に以下の事前ビルド済み `hightorque_robot` ホイールが含まれています。

| プラットフォーム | モータライブラリのバージョン | CPython のバージョン |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9, 3.10, 3.11, 3.12 |
| Linux aarch64 (ARM64) | 1.0.0 | 3.9, 3.10, 3.11, 3.12 |

以下のインストール例では、**Ubuntu 22.04 (x86_64) と Python 3.10** を使用します。表の他の組み合わせを使用する場合は、自分のアーキテクチャと Python バージョンに一致する `.whl` ファイルを選択し、その後で以下の環境チェックを実行してください。

:::

[T701-HT SDK リポジトリ](https://github.com/Seeed-Projects/reBot-Arm-T701-SDK) をクローンし、SDK のルートディレクトリに移動します。

```bash
git clone https://github.com/Seeed-Projects/reBot-Arm-T701-SDK.git
cd reBot-Arm-T701-SDK
```

特に指示がない限り、このディレクトリから以下の SDK コマンドを実行します。

Conda をまだお持ちでない場合は、Miniforge をインストールしてください。

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

プロンプトに従って Conda を初期化します。新しいターミナルを開いて SDK のルートディレクトリに戻り、環境を作成してから SDK とその依存関係をインストールします。

```bash
conda create -n t701-ht python=3.10 pip
conda activate t701-ht
python -I -m pip install ./motor_whl/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
python -I -m pip install -r requirements.txt
```

Python が依存関係をインポートし、URDF モデルを読み込めることを確認するため、次のコマンドを実行します。このチェックはロボットを接続していなくても実行できます。

```bash
python -I -c "import hightorque_robot, numpy, osqp, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### シリアル接続を確認する

左腕は CAN1、右腕は CAN2 に接続します。SDK の `T701-HT_robot_param/serial_binding.yaml` 内の `board_serial` を、使用している通信ボードの USB シリアル番号に設定します。SDK は起動時に、ボードの USB 識別情報を使って現在のシリアルデバイスを検出します。

シリアルポートを開かずに両腕のマッピングを確認するには、次のコマンドを実行します。片方の腕だけを確認する場合は、その腕の YAML ファイルだけを指定します。

```bash
ls -l /dev/serial/by-id/
python scripts/t701_ht_can_serial_adapter.py T701-HT_robot_param/T701-HT_left.yaml T701-HT_robot_param/T701-HT_right.yaml
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### 関節およびグリッパの状態を読み取る

スクリプトを実行し、左腕には `1`、右腕には `2`、両腕には `3` を入力します。選択した各腕について、7 つすべての関節とグリッパがフィードバックを返すことを確認してください。終了するには `Ctrl+C` を押します。

```bash
python scripts/t701_ht_read_state.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### ゼロ位置を設定する

<div align="center">
  <img width={520} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-zero-pose.png" alt="T701-HT zero pose" loading="lazy" />
</div>

スクリプトを起動して腕を選択します。関節とグリッパを意図したゼロ位置に動かし、操作メニューで `3` を選択して、選択した腕に保存されているゼロ位置を現在の姿勢で置き換えます。保存済みのゼロ位置へ移動するには `4` を、終了するには `0` を選択します。

```bash
python scripts/t701_ht_set_zero.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">

### デモを実行する

:::warning[デモを実行する前に]
関節のゼロ位置を確認し、ペイロードをすべて取り外し、腕の可動範囲内を片付けてください。最初の実行では片方の腕だけから始めてください。重力補償デモの開始と停止時には、腕を手で支えてください。
:::

`scripts` ディレクトリに入ります。デモを起動したら、左腕には `1`、右腕には `2`、両腕には `3` を入力します。

```bash
cd scripts
```

#### 重力補償

このデモでは、MIT トルクフィードフォワードとして `0.8 × G(q)` を適用し、腕を手で動かしやすくします。関節の `Kp` および `Kd` ゲインとグリッパトルクはゼロです。

```bash
python t701_ht_gravity_compensation.py
```

このデモでは、設定された関節トルク制限が適用されます。`Ctrl+C` を押すとモータが停止します。

単一モータの 5 パラメータ制御、状態フィードバック、およびゼロ位置への復帰を伴うシャットダウンについては、[MIT Control SDK](https://wiki.seeedstudio.com/ja/rebot_t701_ht_control_mit/) を参照してください。

順運動学および逆運動学のチェック、デカルト軌道、キーボード操作の例については、[T701 HT with Pinocchio](https://wiki.seeedstudio.com/ja/rebot_t701_ht_pinocchio/) を参照してください。

  </div>
</div>

</div>

## トラブルシューティング

- **シリアルポートが見つかりません。** ロボットの電源が入っていること、USB データケーブルがメインボードの USB-C ポートに接続されていることを確認し、再度 `ls -l /dev/serial/by-id/` を実行してください。
- **一致する USB インターフェースがありません。** `board_serial` が接続されているボードと一致していること、左腕が CAN1、右腕が CAN2 を使用していることを確認してください。
- **Permission denied（許可がありません）。** Ubuntu では、ユーザーが `dialout` グループを通じてシリアルデバイスへの読み書き権限を持っているか確認してください。
