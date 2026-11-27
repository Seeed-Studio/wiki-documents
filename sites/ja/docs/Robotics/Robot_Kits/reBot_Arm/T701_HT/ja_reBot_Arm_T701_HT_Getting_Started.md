---
title: reBot Arm T701 HT クイックスタート
sidebar_label: クイックスタート
description: reBot Arm T701 HT を開封して組み立て、Ubuntu に SDK をインストールし、関節フィードバックを確認し、ゼロ位置を設定し、デモを実行します。
keywords:
  - reBot
  - T701 HT
  - OpenArm-HT-A1
  - Bimanual Robot
  - Python SDK
slug: /rebot_t701_ht_getting_started
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
createdAt: '2026-11-14'
url: https://wiki.seeedstudio.com/ja/rebot_t701_ht_getting_started/
updatedAt: '2026-11-23'
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT クイックスタート

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT 両腕ロボット"
  />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701"
  fallbackCount={35}
  ariaLabel="GitHub で reBot Arm T701 に Star を付ける"
/>

## プロジェクト概要

reBot Arm T701 は、Seeed Studio が提供する Physical AI、ロボット学習、実環境でのデータ収集向けのオープンソース両腕ロボットプラットフォームです。オープンソース設計の reBot Arm B601 をベースとしており、開発者は 1 つのプラットフォームでデータ収集と両腕協調タスクの研究を行うことができます。

- **両腕構成。** 2 本の 7 自由度アームが 1 つの胴体コラムに取り付けられています。CAN バスモーターが各関節を駆動し、それぞれのアームにグリッパーが 1 つずつ搭載されています。
- **ビジョンとエッジコンピューティング。** プラットフォームには、RealSense D405 手首カメラ、D435 ヘッドカメラ、および NVIDIA Jetson Orin コンピュートモジュール用のマウントポイントがあります。**Basic バージョンにはカメラは含まれません。**
- **オープンソースリソース。** CAD ファイル、部品表 (BOM)、組立ガイド、ソフトウェアは、プロジェクトロードマップに従って段階的に公開されます。

## 安全に関する免責事項およびリスクに関する注意

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="中国語による reBot Arm の安全に関する免責事項およびリスクに関する注意" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="英語による reBot Arm の安全に関する免責事項およびリスクに関する注意" />
  </figure>
</div>

{/*
## About the Power Supply

- **TODO** Add the power supply model, rated output, connector specifications, and availability.
*/}

## ロボットの開封と組み立て

お使いの T701 モデルを選択して、開封および組み立て動画を視聴してください。

<Tabs>
<TabItem value="basic" label="Basic">

<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/x3CkpDcxyFI"
    title="reBot Arm T701 Basic の開封と組み立て"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="encrypted-media; picture-in-picture"
    allowFullScreen
  />
</div>

</TabItem>

<TabItem value="pro" label="Pro">

<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/D7Cj482WSlQ"
    title="reBot Arm T701 Pro の開封と組み立て"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="encrypted-media; picture-in-picture"
    allowFullScreen
  />
</div>

</TabItem>
</Tabs>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### 梱包内容を確認する

キャリングケースを開け、同梱の梱包明細と照らし合わせてロボット部品とファスナーを確認します。

:::note[Basic バージョンにはカメラは含まれません]
出荷内容については梱包明細を参照してください。
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="開いたキャリングケースに、両腕、胴体コラム、カバー、および図の構成で配置されたカメラが見えている様子" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### 両腕を胴体コラムに取り付ける

1. 胴体コラムと右腕を取り出します。両方の写真で赤丸で示されている 4 つの取付穴の位置を合わせます。
2. 付属の **M6 ネジ** 4 本を使用して、右腕をコラムに固定します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>胴体コラム側の取付穴</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-torso-holes.webp" alt="胴体コラム側面に赤丸で示された 4 つの取付穴" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>右腕の取付プレート側の対応する穴</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-arm-holes.webp" alt="右腕の金属製取付プレートに赤丸で示された 4 つの取付穴" loading="lazy" />
  </figure>
</div>

右腕を固定したら、上からと横から見てコラムに対してどのように収まっているかを確認します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>右腕を取り付けた状態（上面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-top.webp" alt="右腕の取付プレートと上側のネジを上から見た様子" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>右腕を取り付けた状態（側面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-side.webp" alt="右腕の取付プレートと下側のネジを横から見た様子" loading="lazy" />
  </figure>
</div>

電源が接続されていない状態で、胴体コラム側面から伸びている **XT30 2+2 ケーブルハーネス** を、下図に示す右腕のコネクタに接続します。左腕も同様に、コラムの反対側に取り付けて接続します。

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="胴体コラムからアームコネクタまでの XT30 2+2 ケーブルハーネスの配線経路" loading="lazy" />
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
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="緑色の半円形ショルダーカバー 2 ピース" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーを取り付けた状態</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="組み立て済みの緑色ショルダーカバー位置を赤枠で示した様子" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーのネジ位置（上面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="上面図で赤丸で示された 2 本のショルダーカバーネジ" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーのネジ位置（側面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="側面図で赤丸で示されたショルダーカバーネジ" loading="lazy" />
  </figure>
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### 胴体カバーを取り付ける

1. 両方のショルダーカバーを固定したら、胴体カバーをはめ込み、側面のケーブルを対応する切り欠きに通します。お使いのロボットに、下図のような **RealSense D435i** カメラが搭載されている場合は、フロントカバーの開口部と位置を合わせてください。**Basic バージョンにはカメラは含まれません。**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>フロントカバーのカメラ開口部（Basic バージョンにはカメラは含まれません）</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="フロントカバーの開口部に D435i が合う位置を赤枠で示した様子" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>側面のケーブル用切り欠き</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="胴体カバー側面のケーブル用切り欠きを赤丸で示した様子" loading="lazy" />
     </figure>
   </div>

2. 胴体カバー背面の赤丸で示された穴に、付属の **最も長い M3 ネジ** 4 本を挿入して固定します。

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="胴体カバー背面で赤丸で示された 4 つのネジ位置" loading="lazy" />
   </div>

  </div>
</div>

</div>

{/* - **TODO** Add instructions for securing the base and installing the grippers separately. */}

## ロボットを接続する

:::warning
配線作業の前に電源を切り、接続を外してください。ロボットの電源を入れる前に、しっかりと固定されていることを確認し、両腕の可動範囲全体に障害物がないようにしてください。
:::

1. 以下の図のように電源を接続します。
2. 丸い電源ボタンを押してロボットの電源を入れます。
3. コンピュータをメインボードの USB-C ポートに USB データケーブルで接続します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>電源接続</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="T701 HT のベース部にある電源コネクタとケーブル" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>丸型電源ボタンとメインボードの USB-C ポート</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="メインボード横の丸型電源ボタンと、USB-C ポートに接続された USB データケーブル" loading="lazy" />
  </figure>
</div>

## T701-HT SDK でロボットをキャリブレーションして実行する

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### SDK をインストールする

:::info[モータライブラリの対応プラットフォーム]

SDK には、`motor_whl/` に以下のビルド済み `hightorque_robot` ホイールが含まれています。

| プラットフォーム | モータライブラリのバージョン | CPython のバージョン |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9, 3.10, 3.11, 3.12 |
| Linux aarch64 (ARM64) | 1.0.0 | 3.9, 3.10, 3.11, 3.12 |

以下のインストール例では、**Ubuntu 22.04 (x86_64) と Python 3.10** を使用します。表の他の組み合わせを使用する場合は、自分のアーキテクチャと Python バージョンに合った `.whl` ファイルを選択し、その後で以下の環境チェックを実行してください。

:::

[T701-HT SDK リポジトリ](https://github.com/Seeed-Projects/reBot-Arm-T701-SDK) をクローンし、SDK のルートディレクトリに移動します。

```bash
git clone https://github.com/Seeed-Projects/reBot-Arm-T701-SDK.git
cd reBot-Arm-T701-SDK
```

特に指示がない限り、このディレクトリから以下の SDK コマンドを実行します。

Conda をお持ちでない場合は、Miniforge をインストールしてください。

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

プロンプトに従って Conda を初期化します。新しいターミナルを開き、SDK のルートディレクトリに戻ります。環境を作成し、その後 SDK とその依存関係をインストールします。

```bash
conda create -n t701-ht python=3.10 pip
conda activate t701-ht
python -I -m pip install ./motor_whl/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
python -I -m pip install -r requirements.txt
```

次のコマンドを実行して、Python が依存関係をインポートし、URDF モデルを読み込めることを確認します。このチェックはロボットを接続していなくても実行できます。

```bash
python -I -c "import hightorque_robot, numpy, osqp, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### シリアル接続を確認する

左腕は CAN1、右腕は CAN2 に接続されています。SDK の `T701-HT_robot_param/serial_binding.yaml` 内の `board_serial` を、使用している通信ボードの USB シリアル番号に設定します。SDK は起動時に、ボードの USB ID を使って現在のシリアルデバイスを検出します。

以下のコマンドを実行して、シリアルポートを開かずに両腕のマッピングを確認します。片方の腕だけを確認する場合は、その腕の YAML ファイルだけを指定します。

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

スクリプトを実行し、左腕には `1`、右腕には `2`、両腕には `3` を入力します。選択した各腕について、7 つすべての関節とグリッパがフィードバックを返していることを確認します。終了するには `Ctrl+C` を押します。

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
  <img width={520} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-zero-pose.png" alt="T701-HT のゼロ姿勢" loading="lazy" />
</div>

スクリプトを起動して腕を選択します。関節とグリッパを意図するゼロ位置に動かし、操作メニューで `3` を選択して、選択した腕に保存されているゼロ位置を現在の姿勢で置き換えます。`4` を選択すると保存済みのゼロ位置へ移動し、`0` を選択すると終了します。

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
関節のゼロ位置を確認し、ペイロードをすべて取り外し、腕の可動範囲を確保してください。最初の実行では片腕から始めてください。重力補償デモの開始および停止時には、腕を手で支えてください。
:::

`scripts` ディレクトリに移動します。デモを起動したら、左腕には `1`、右腕には `2`、両腕には `3` を入力します。

```bash
cd scripts
```

#### 重力補償

このデモでは、MIT トルクフィードフォワードとして `0.8 × G(q)` を適用し、腕を手で動かしやすくします。関節の `Kp` および `Kd` ゲインとグリッパトルクはゼロです。

```bash
python t701_ht_gravity_compensation.py
```

このデモでは、設定された関節トルク制限が適用されます。モータを停止するには `Ctrl+C` を押します。

単一モータの 5 パラメータ制御、状態フィードバック、およびゼロ位置への復帰シャットダウンについては、[MIT Control SDK](https://wiki.seeedstudio.com/ja/rebot_t701_ht_control_mit/) を参照してください。

順運動学および逆運動学のチェック、デカルト軌道、キーボード制御の例については、[T701 HT with Pinocchio](https://wiki.seeedstudio.com/ja/rebot_t701_ht_pinocchio/) を参照してください。

ROS 2 のトピック、サービス、軌道アクション、RViz2、および運動学シミュレーションについては、[ROS 2 SDK](./reBot_Arm_T701_HT_ros2.md) を参照してください。その SDK は専用の手順に従って別途インストールしてください。

  </div>
</div>

</div>

## トラブルシューティング

- **シリアルポートが見つかりません。** ロボットの電源が入っていること、USB データケーブルがメインボードの USB-C ポートに接続されていることを確認し、再度 `ls -l /dev/serial/by-id/` を実行してください。
- **一致する USB インターフェースがありません。** `board_serial` が接続されているボードと一致していること、左腕が CAN1、右腕が CAN2 を使用していることを確認してください。
- **Permission denied（許可がありません）。** Ubuntu では、ユーザーが `dialout` グループを通じてシリアルデバイスへの読み書き権限を持っているか確認してください。
