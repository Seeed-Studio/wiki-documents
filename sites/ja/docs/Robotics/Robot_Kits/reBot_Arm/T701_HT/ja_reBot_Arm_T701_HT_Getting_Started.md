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

reBot Arm T701 は、Seeed Studio が提供する Physical AI、ロボット学習、実環境でのデータ収集向けのオープンソース両腕ロボットプラットフォームです。オープンソース設計の reBot Arm B601 をベースとしており、開発者は 1 つのプラットフォームでデータ収集と協調的な両腕タスクの研究を行うことができます。

- **両腕構成。** 2 本の 7 自由度アームが 1 つの胴体コラムに取り付けられています。CAN バスモーターが関節を駆動し、各アームにはそれぞれグリッパーが搭載されています。
- **ビジョンとエッジコンピューティング。** プラットフォームには、RealSense D405 手首カメラ、D435 ヘッドカメラ、および NVIDIA Jetson Orin コンピュートモジュール用のマウントポイントがあります。**Basic バージョンにはカメラは含まれません。**
- **オープンソースリソース。** CAD ファイル、部品表 (BOM)、組立ガイド、ソフトウェアは、プロジェクトロードマップに従って段階的に公開されます。

## 安全に関する免責事項およびリスクに関する注意

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="reBot Arm の安全に関する免責事項およびリスクに関する注意（中国語）" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="reBot Arm の安全に関する免責事項およびリスクに関する注意（英語）" />
  </figure>
</div>

{/*
## About the Power Supply

- **TODO** Add the power supply model, rated output, connector specifications, and availability.
*/}

## ロボットの開封と組み立て

### 梱包内容を確認する

キャリングケースを開け、梱包明細書と照らし合わせてロボットの部品とファスナーを確認します。

:::note[Basic バージョンにはカメラは含まれません]
出荷内容については梱包明細書を参照してください。
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="両腕、胴体コラム、カバー、およびカメラが同梱された状態でキャリングケースを開いた様子" loading="lazy" />
</div>

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
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="胴体コラムから腕のコネクタまでの XT30 2+2 ケーブルハーネスの配線" loading="lazy" />
</div>

### ショルダーカバーを取り付ける

1. 各ショルダーカバーの上下の緑色カバーを肩の周りで組み合わせます。
2. 赤丸で示された位置に、付属の **中短 M3 ネジ** を挿入します。片側 4 本、合計 8 本使用します。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーの上下パーツ</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="緑色の半円形ショルダーカバー 2 つ" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーを取り付けた状態</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="組み立て済みの緑色ショルダーカバーの位置を赤枠で示した様子" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーのネジ位置（上面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="上面図で赤丸で示された 2 本のショルダーカバーネジ" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>ショルダーカバーのネジ位置（側面図）</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="側面図で赤丸で示されたショルダーカバーのネジ" loading="lazy" />
  </figure>
</div>

### 胴体カバーを取り付ける

1. 両方のショルダーカバーを固定したら、胴体カバーを合わせ、側面のケーブルを対応する切り欠きに通します。お使いのロボットに、下図のような **RealSense D435i** カメラが搭載されている場合は、前面カバーの開口部と位置を合わせてください。**Basic バージョンにはカメラは含まれません。**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>前面カバーのカメラ開口部（Basic バージョンにはカメラは含まれません）</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="前面カバーの開口部に D435i を合わせた位置を赤枠で示した様子" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>側面ケーブル用の切り欠き</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="胴体カバー側面のケーブル用切り欠きを赤丸で示した様子" loading="lazy" />
     </figure>
   </div>

2. 胴体カバー背面の赤丸で示された穴に、付属の **最も長い M3 ネジ** 4 本を挿入して固定します。

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="胴体カバー背面で赤丸で示された 4 つのネジ位置" loading="lazy" />
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

### SDK をインストールする

:::info[モーターライブラリの対応プラットフォーム]

SDK には、`motor_whl/` 内に次のビルド済み `hightorque_robot` ホイールが含まれています。

| プラットフォーム | モーターライブラリのバージョン | CPython バージョン |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9, 3.10, 3.11, 3.12 |
| Linux aarch64 (ARM64) | 1.0.0 | 3.9, 3.10, 3.11, 3.12 |

以下のインストール例では、**Ubuntu 22.04 (x86_64) と Python 3.10** を使用します。表の他の組み合わせを使用する場合は、自分のアーキテクチャと Python バージョンに合った `.whl` ファイルを選択し、その後で以下の環境チェックを実行してください。

:::

SDK のルートディレクトリ（`motor_whl/`、`requirements.txt`、`scripts/` が含まれているディレクトリ）でターミナルを開きます。以下の SDK コマンドはこのディレクトリから実行します。

Conda をまだお持ちでない場合は、Miniforge をインストールします。

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
python -I -c "import hightorque_robot, numpy, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

### シリアル接続を確認する

1. **シリアルポートを一覧表示します。** ロボットを接続し、ターミナルで次のコマンドを実行します。

   ```bash
   ls -l /dev/ttyACM*
   ```

2. **両アームのシリアルポートを確認します。** チェックスクリプトを実行します。

   ```bash
   python scripts/t701_ht_read_state.py --arm both --check
   ```

   スクリプトは次の項目をチェックします。

   - シリアルポートの列挙順序
   - 通信ボードの USB 識別子
   - シリアルポートの読み書き権限

:::tip[片方のアームだけをチェックする]

確認したいアームに対する引数に `--arm both` を置き換えます。

| アーム | 引数 | デフォルトのシリアルポート | SDK シリアル ID |
| --- | --- | --- | --- |
| 左アーム | `--arm left` | `/dev/ttyACM0` | `serial_id=1` |
| 右アーム | `--arm right` | `/dev/ttyACM1` | `serial_id=2` |

:::

**シリアルポートの権限エラー**

スクリプトが権限エラーを報告した場合、SDK ガイドにある次のコマンドにより、指定したシリアルポートに対して、すべてのローカルユーザーに一時的に読み書きアクセス権を付与します。片方のアームだけをチェックする場合は、そのアームのポートのみを指定します。

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1
```

アクセス権を付与した後、再度シリアルポートチェックを実行します。デバイスの再接続や再起動を行うと、これらの権限はリセットされます。

### 関節およびグリッパの状態を読み取る

シリアルチェックが通ったら、両アームから 1 サンプルを読み取ります。各アームの 7 つの関節とグリッパすべてがフィードバックを返すことを確認します。スクリプトは、関節位置（rad）、速度（rad/s）、トルク（N·m）、およびグリッパ位置（rad）と速度（rad/s）を報告します。

```bash
python scripts/t701_ht_read_state.py --arm both --once
```

連続的に読み取るには、次のコマンドを実行し、左アームには `1`、右アームには `2`、両方には `3` を入力します。`Ctrl+C` を押して終了します。

```bash
python scripts/t701_ht_read_state.py
```

### ゼロ位置を設定する

- **TODO** 両アームの関節およびグリッパの標準ゼロ位置とキャリブレーション図を追加する。工場出荷時にキャリブレーション済みのロボットが再キャリブレーションを必要とするかどうかを明確にする。

標準ゼロ位置を確認したら、選択したアームの関節とグリッパをその位置に動かします。以下のコマンドは左アームを選択します。右アームまたは両アームを選択するには、`left` を `right` または `both` に置き換えます。`yes` を入力すると、現在位置が新しいゼロ位置として書き込まれ、保存されている値が上書きされます。

```bash
python scripts/t701_ht_set_zero.py --arm left
```

### デモを実行する

:::warning
デモを実行する前に、関節のゼロ位置を確認し、ペイロードを取り外し、アームの可動範囲を確保してください。まずは片方のアームから始め、デモの開始と停止時にはアームを支えてください。関節インピーダンスのデモでは、選択したアームはスクリプトで設定された目標姿勢に向かって動きます。
:::

3 つのデモのいずれでも、左アームには `1`、右アームには `2`、両方には `3` を入力します。コマンドラインで `--arm left`、`--arm right`、`--arm both` を指定することもできます。`Ctrl+C` を押して終了し、選択したアームとグリッパに停止コマンドを送信します。

#### 重力補償

このデモでは、現在の姿勢に対して計算された重力トルクの 0.8 倍をフィードフォワードトルクとして適用し、アームを手で動かしやすくします。

```bash
python scripts/t701_ht_gravity_compensation.py
```

#### 重力フィードフォワード付き関節インピーダンス

```bash
python scripts/t701_ht_joint_impedance_with_gravity.py
```

#### 重力フィードフォワードおよび摩擦補償付き関節インピーダンス

```bash
python scripts/t701_ht_joint_impedance_with_gravity_friction.py
```

## トラブルシューティング

- **シリアルポートが見つかりません。** ロボットの電源が入っていること、USB データケーブルがメインボードの USB-C ポートに接続されていることを確認します。再度 `ls -l /dev/ttyACM*` を実行します。
- **シリアルポートの列挙が設定と一致しません。** 選択したアームのデフォルトデバイスパスと、他の USB シリアルデバイスが接続されていないかを確認します。
