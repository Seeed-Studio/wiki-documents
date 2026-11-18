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
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT クイックスタート

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT 両腕ロボット" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701"
  fallbackCount={35}
  ariaLabel="GitHub で reBot Arm T701 にスターを付ける"
/>

## プロジェクト概要

reBot Arm T701 は、Seeed Studio が提供する Physical AI、ロボット学習、実環境でのデータ収集向けのオープンソース両腕ロボットプラットフォームです。オープンソース設計の reBot Arm B601 をベースとしており、開発者がデータ収集や両腕協調タスクの研究を 1 つのプラットフォームで行えるようにします。

- **両腕構成。** 2 本の 7 自由度アームが 1 つの胴体コラムに取り付けられています。CAN バスモーターが各関節を駆動し、それぞれのアームにグリッパーが備わっています。
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

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### 同梱物を確認する

キャリングケースを開け、梱包明細書と照らし合わせてロボットの部品とファスナーを確認します。

:::note[Basic バージョンにはカメラは含まれません]
出荷内容については梱包明細書を参照してください。
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="両腕、胴体コラム、カバー、およびカメラが配置された状態でキャリングケースを開けた様子" loading="lazy" />
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

電源が切れている状態で、胴体コラム側面から伸びている **XT30 2+2 ケーブルハーネス** を、下図に示す右腕のコネクタに接続します。左腕も同様に、コラムの反対側に取り付けて接続します。

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="胴体コラムから腕のコネクタまでの XT30 2+2 ケーブルハーネスの配線経路" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### ショルダーカバーを取り付ける

1. 各ショルダーカバーの上下の緑色カバーを肩の周りで組み合わせます。
2. 赤丸で示された位置に、付属の **中短 M3 ネジ** を挿入します。片側 4 本、合計 8 本使用します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーの上側と下側のパーツ</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="2 つの緑色の半円形ショルダーカバーパーツ" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーを取り付けた状態</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="組み立て済みの緑色ショルダーカバーの位置を赤枠で示した図" loading="lazy" />
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

### トルソーカバーを取り付ける

1. 両方のショルダーカバーを固定したら、トルソーカバーを合わせ、側面のケーブルを対応する切り欠きに通します。お使いのロボットに、下図のような **RealSense D435i** カメラが搭載されている場合は、フロントカバーの開口部と位置を合わせてください。**Basic バージョンにはカメラは含まれません。**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>フロントカバーのカメラ開口部（Basic バージョンにはカメラは含まれません）</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="D435i がフロントカバーの開口部とどこで位置合わせされるかを赤枠で示した図" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>側面のケーブル用切り欠き</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="トルソーカバー側面のケーブル用切り欠きを赤丸で示した図" loading="lazy" />
     </figure>
   </div>

2. 背面で赤丸で示された穴に、付属の **最も長い M3 ネジ 4 本** を挿入してトルソーカバーを固定します。

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="背面トルソーカバーに赤丸で示された 4 つのネジ位置" loading="lazy" />
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
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="T701 HT のベース部にある電源コネクタとケーブル" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>丸い電源ボタンとメインボードの USB-C ポート</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="メインボード横の丸い電源ボタンと、USB-C ポートに接続された USB データケーブル" loading="lazy" />
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

Conda をお持ちでない場合は、Miniforge をインストールしてください。

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

Python が依存関係をインポートし、URDF モデルを読み込めることを確認するため、次のコマンドを実行します。このチェックはロボットが未接続の状態でも実行できます。

```bash
python -I -c "import hightorque_robot, numpy, osqp, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### シリアル接続を確認する

左アームは CAN1、右アームは CAN2 に接続します。SDK の `T701-HT_robot_param/serial_binding.yaml` 内の `board_serial` を、使用している通信ボードの USB シリアル番号に設定してください。SDK は起動時に、ボードの USB ID を使用して現在のシリアルデバイスを検出します。

シリアルポートを開かずに、両アームのマッピングを確認するには、次のコマンドを実行します。片方のアームだけを確認する場合は、そのアームの YAML ファイルのみを指定します。

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

スクリプトを実行し、左アームには `1`、右アームには `2`、両方には `3` を入力します。選択した各アームの 7 つの関節とグリッパすべてからフィードバックが返ってくることを確認してください。終了するには `Ctrl+C` を押します。

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

スクリプトを起動してアームを選択します。関節とグリッパを所望のゼロ位置に動かし、操作メニューで `3` を選択して、選択したアームに保存されているゼロ位置を現在の姿勢で置き換えます。`4` を選択すると保存済みのゼロ位置へ移動し、`0` を選択すると終了します。

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
関節のゼロ位置を確認し、ペイロードを取り外し、アームの可動範囲内を障害物のない状態にしてください。最初の実行では 1 本のアームから始めてください。重力補償デモの開始および停止時には、アームを手で支えてください。
:::

`scripts` ディレクトリに移動します。デモを起動したら、左アームには `1`、右アームには `2`、両方には `3` を入力します。

```bash
cd scripts
```

#### 重力補償

このデモでは、MIT トルクフィードフォワードとして `0.8 × G(q)` を印加し、アームを手で動かしやすくします。関節の `Kp` および `Kd` ゲインとグリッパトルクはゼロです。

```bash
python t701_ht_gravity_compensation.py
```

#### 関節インピーダンス

:::warning[関節インピーダンスデモを開始する前に]
**いずれのデモを開始する前にも、ロボットの周囲およびアームの可動範囲内に人や壊れやすい物体がないことを必ず確認してください。** デモが開始されると、選択したアームはすぐに固定姿勢へ向けて動き始めます。
:::

左アームの目標姿勢は、おおよそ `[-0.2, -0.2, 0.2, -0.4, 0.5, 0.2, 1.4708]` rad です。右アームの目標姿勢は、各関節角度の符号を反転させたものになります。

**重力フィードフォワード付き関節インピーダンス**

```bash
python t701_ht_joint_impedance_with_gravity.py
```

**重力フィードフォワードおよび摩擦補償付き関節インピーダンス**

```bash
python t701_ht_joint_impedance_with_gravity_friction.py
```

3 つすべてのデモで、設定された関節トルク制限が適用されます。重力補償を停止する場合、または関節インピーダンスデモを停止する前にアームをゼロ位置へ戻す場合は、`Ctrl+C` を押してください。戻り動作の最中に再度 `Ctrl+C` を押すと、アームの動作が停止します。

順運動学および逆運動学のチェック、デカルト軌道、キーボード操作の例については、[T701 HT with Pinocchio](/ja/rebot_t701_ht_pinocchio/) を参照してください。

  </div>
</div>

</div>

## トラブルシューティング

- **シリアルポートが見つかりません。** ロボットの電源が入っていることと、USB データケーブルがメインボードの USB-C ポートに接続されていることを確認し、再度 `ls -l /dev/serial/by-id/` を実行してください。
- **一致する USB インターフェースがありません。** `board_serial` が接続されているボードと一致していること、左アームが CAN1、右アームが CAN2 を使用していることを確認してください。
- **Permission denied（許可がありません）。** Ubuntu では、ユーザーが `dialout` グループを通じてシリアルデバイスへの読み書き権限を持っているか確認してください。
