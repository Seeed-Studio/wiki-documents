---
title: reBot Arm 102 + B601 RS トレーニングガイド
description: SenseCraft Robotics を使用して reBot Arm 102 + B601 RS をセットアップし、アームを接続・キャリブレーションしてデモを収集し、モデルをトレーニングして推論を検証します。
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 RS
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_rs
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

このチュートリアルでは、SenseCraft Robotics と reBot Arm 102（リーダーアーム）、B601 RS（フォロワーアーム）を使用して、プロジェクト作成とデバイスセットアップから、データ収集、モデル学習、デプロイまでの一連のワークフローを紹介します。
本ガイドの例題タスクは、ポイント A にある物体をつかみ、ポイント B に移動して置くことです。これはあくまで説明用の例であり、ユーザーは仕分け、搬送、箱詰め、ボタン押下、プラグの抜き差しなど、ニーズに応じてアプリケーションシナリオを設計できます。

![RS arm pick-and-place task example](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp)


> **バージョンに関する注意**
> インターフェース名、ボタン位置、トレーニングバックエンドは、SenseCraft Robotics のバージョンによって変更される場合があります。本ガイドに登場するシリアルポート番号（COM21、COM35、COM3、COM6 など）やデータセット名は、動画からの一例です。必ず、お使いのコンピュータで検出されたデバイスを使用してください。

## チュートリアル概要

このチュートリアルは、ハードウェアのセットアップとソフトウェアの操作の順に構成されており、アームを素早く構成してモデルをトレーニングできるようにします。

| 章 | ステージ | 主な内容 |
| :--- | :--- | :--- |
| 第1章 | **準備** | ハードウェア一覧、コンピュータとソフトウェア要件、シーンと安全確認 |
| 第2章 | **アームの接続** | リーダーアームとフォロワーアームの物理的な取り付けとケーブル接続 |
| 第3章 | **ソフトウェアトレーニング** | **中核ワークフロー**：デバイスセットアップ ➔ データ収集 ➔ モデル学習 ➔ デプロイと動作 |



---

<span id="preparation"></span>

## 1. 準備

### 1.1 ハードウェア
![Hardware list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/01-1-hardware-list-rs-en.webp)

> アームは組み立て、固定、通電し、USB に接続されている必要があります。組み立てが完了していない場合は、[ステップ 1: アームの組み立て](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)を参照してください。

#### アーム

| カテゴリ | リーダー: reBot Arm 102 | フォロワー: B601 RS |
|---|---|---|
| アーム | reBot Arm 102 ×1    🔗[Buy now](https://www.seeedstudio.com/Star-Arm-102-p-6765.html?utm_source=sensecraft_wiki&utm_medium=socil) | 組み立て済み reBot Arm B601-RS ×1  🔗[Buy now](https://www.seeedstudio.com/reBot-Arm-B601-RS-Assembled-Kit-with-Gripper-p-6865.html?utm_source=sensecraft_wiki&utm_medium=socil) |
| 電源 | 12 V / 2 A 電源アダプタ ×1 | 48 V / 12.5 A 電源 ×1 |
| データケーブル | USB-C データケーブル ×1 | USB 延長ケーブル ×1 |
| 通信・電源コンポーネント | — | USB-CAN ドライバボード ×1 <br />信号/電源分離ボード ×1  |
| その他のケーブル | — | 2 ピン JST ケーブル ×1<br />3 ピン JST ケーブル ×1<br />XT30 2+2 ケーブル ×1 |
| 取り付け工具 | G クランプ ×2   | G クランプ ×2  |

> アームは組み立て、固定、通電し、USB に接続されている必要があります。組み立てが完了していない場合は、[ステップ 1: アームの組み立て](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)を参照してください。

#### カメラ
カメラは 2 台必要です。1 台は俯瞰用、もう 1 台は側面またはグリッパービュー用です。
<table>
  <thead>
    <tr>
      <th>カメラ</th>
      <th>俯瞰カメラ</th>
      <th>側面カメラ</th>
      <th>グリッパーカメラ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数量</td>
      <td>1</td>
      <td colspan="2"><em>側面</em> または <em>グリッパー</em> カメラのいずれかを選択</td>
    </tr>
    <tr>
      <td>マウント</td>
      <td>俯瞰マウント ×1</td>
      <td>小型デスクトップマウント ×1</td>
      <td>3D プリントマウント ×1</td>
    </tr>
  </tbody>
</table>

**カメラの選択肢**：macOS または Windows では、以下のいずれかの組み合わせを選択できます。USB ハブやドックは使用せず、カメラはコンピュータの USB ポートに直接接続することを推奨します。

| オプション | Hikvision USB カメラ | Logitech C270 HD Webcam | 収集性能 |
|:---|:---|:---|:---|
| オプション 1 | 1 | 1 | 最も安定しており、120 FPS での収集をサポート |
| オプション 2 | ❌ | 2 | 安定しており、すべての収集フレームレートをサポート |
| オプション 3 | 2 | ❌ | フレームレートを 60 FPS 以下に保ってください。120 FPS での収集はサポートされず、場合によっては互換性の問題が発生する可能性があります |

### 1.2 コンピュータとソフトウェア

- Windows または macOS コンピュータ（ローカルトレーニングには対応 GPU が必要）
- 安定したネットワーク接続（ダウンロード、ログイン、クラウドトレーニング、推論のため）
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) をインストール済み
- [SenseCraft アカウント](https://account.seeed.cc/login)を登録し、SenseCraft Robotics 内でサインイン済み


詳細な手順については、[ソフトウェアのダウンロードとアカウント設定](/ja/sensecraft_robotics/#ソフトウェアのダウンロードとアカウント設定)を参照してください。

### 1.3 シーンと安全

- テーブル上に 2 つの固定位置をマークします。ポイント A は物体の開始位置、ポイント B は目的地です。
- 適切なサイズでつかみやすい物体を用意します（赤いブロックや柔らかい物体など）。
- ポイント A、ポイント B、両方のアーム、および物体がカメラの視野内に収まり、遮られていないことを確認します。
- アームの作業領域から人、雑然とした物、ケーブル、壊れやすい物を取り除きます。リーダーアームを調整し、フォロワーアームに近づいたり、フォロワーカメラの視野に入ったりしないようにします。
![Scene and safety example](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-3-scene-and-safety-dm-en.webp)
> **注:** この画像では B601 DM アームを例として使用しています。B601 RS でもセットアップと操作は同じです。
---
<span id="connect-arms"></span>

## 2. アームの接続

> **安全上の注意:**
> JST、XT30、その他のケーブルを接続・取り外しする前に、必ず電源を切ってください。すべてのケーブルが正しく接続されていることを確認してから電源を入れてください。
> B601 RS と B601 DM は外観が似ています。必ず見分けてください。


### 2.1 reBot Arm 102（リーダーアーム）の取り付けと接続

![Mounting and connecting the reBot Arm 102 (leader arm)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)

#### ステップ 1: reBot Arm 102 を取り付ける
木工用クランプを使用して、reBot Arm 102 を平らなテーブルトップに固定します。土台を軽く押して、動かないことを確認します。

#### ステップ 2: ケーブルを接続する
接続は 2 つの経路で構成されます。

* **信号経路（アーム -> USB-C ケーブル -> コンピュータ）**
  1. アームとコンピュータを接続する USB-C ケーブルを用意します（**まだコンピュータには接続しないでください。シリアルポートのバインドとデバイススキャンの段階で接続します**）。

* **電源経路（アーム -> 12 V 2 A 電源 -> 電源タップ）**
  1. **12 V 2 A 電源アダプタ**をアームの電源コネクタに接続します。
  2. アダプタを電源タップに接続してアームの電源を入れます。



---

### 2.2 B601 RS（フォロワーアーム）の取り付けと接続
![B601 RS cable connection](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-follower-wiring-overview-rs-en.webp)

#### ステップ 4: B601 RS を取り付ける
G クランプを使用して、B601 RS を平らなテーブルトップに固定します。アームを左右に軽く回転させ、土台が動かないことを確認します。

#### ステップ 5: ケーブルを接続する
作業を始める前に、必ず電源が切れていることを確認してください。接続は 2 つの経路で構成されます。

* **信号経路（アーム -> 信号分離ボード -> USB-CAN -> コンピュータ）**
  1. XT30 2+2 ケーブルを使用して、アームのベースと信号分離モジュールを接続します。
  2. 2 ピンケーブルを切断します。一方の端を信号分離モジュールに接続し、もう一方の端の赤い線を USB-CAN の H に、黒い線を L に接続します。
  3. USB 延長ケーブルを介して USB-CAN の一方の端をコンピュータに接続します（**まだコンピュータには接続しないでください。シリアルポートのバインド準備ができてデバイススキャンを行う段階で接続します**）。

* **電源経路（アーム -> 信号分離ボード -> 48 V 12.5 A 電源 -> コンセント）**
  1. XT30 2+2 ケーブルを使用して、アームのベースと信号分離モジュールを接続します。
  2. 電源用 XT30 ケーブルを使用して、信号分離モジュールと 48 V 12.5 A 電源を接続します。
  3. 電源をコンセントに接続します。アームがしっかり固定されていること、ケーブルが正しいこと、周囲が安全であることを確認したうえで、電源を入れます。

![Connecting power to the B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-connect-follower-rs-en.webp)


---

<span id="project"></span>

## 3. プロジェクト

サインイン後、**Projects** ページを開きます。初めて使用する場合は新しいプロジェクトを作成し、既存のプロジェクトがある場合はそれを開きます。プロジェクト内の **Project Overview** から、デバイスセットアップ、アクションリプレイ、データセット、トレーニング、モデル、運用にアクセスできます。

| 操作 | 手順 |
|---|---|
| プロジェクトを作成 | **New Project** をクリック → プロジェクト名と説明を入力 → **Create and Start** をクリック |
| 既存プロジェクトを開く | プロジェクト一覧からプロジェクトを選択 → プロジェクトを開く |

![New project window](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-create-project-rs-en.webp)


### 3.1 Project Overview

**Project Overview** には、アーム接続、デバイスセットアップ、データセット、トレーニング、モデル、運用状況など、現在のプロジェクトのステータスが表示されます。

ページに **Pending configuration** または **Not connected** と表示されている場合は、**Go to Device Setup** をクリックしてアームを構成します。

![Project overview](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-1-device-selection-rs-en.webp)



<span id="device-setup"></span>

### 3.2 Device Setup

Device Setup では、デバイスの選択、シリアルポートのバインド、アームのキャリブレーション、遠隔操作の検証、カメラ設定を行います。

#### 3.2.1 デバイスモデルの選択

**Device Pairing** ステップで **reBot Arm 102 + B601 RS** を選択し、**Next** をクリックしてシリアルポートをバインドします。

![Select reBot Arm 102 + B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-1-device-pairing-rs-en.webp)


#### 3.2.2 リーダーアームとフォロワーアームの USB シリアルポートをバインドする



1. **初回スキャン**：両方のアームからUSBケーブルを取り外し、**Rescan** をクリックして、現在表示されているシリアルポートを記録します。
2. **リーダーアームのバインド**：reBot Arm 102 を接続し、再度 **Rescan** をクリックして、新たに表示されたシリアルポートをリーダーアームにバインドします。
3. **フォロワーアームのバインド**：B601 RS を接続し、再度 **Rescan** をクリックして、新たに表示された *PCAN channel (can0)* をフォロワーアームにバインドします。
4. 両方のアームが **Connected** と表示されていることを確認し、**Next** をクリックします。

![リーダーアームとフォロワーアームのシリアルポートをバインド](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-2-serial-binding-rs-en.webp)

> **シリアルポートのバインドとトラブルシューティング：**
> - 各スキャンの後は、新たに表示されたシリアルポートのみをバインドしてください。COM番号だけでデバイスを識別しないでください。
> - シリアルポートが表示されない場合は、USBケーブルを再接続して再度スキャンしてください。1つのシリアルポートしか表示されない場合は、もう一方のUSBケーブルとデバイスの電源を確認してください。


#### 3.2.3 アームキャリブレーションの検証

1. 画面上の例に従って、リーダーアームとフォロワーアームを初期姿勢に動かし、作業空間に障害物がないことを確認します。
2. **Start Calibration** をクリックし、画面の指示に従って、リーダーのゼロ位置、フォロワーのゼロ位置、キャリブレーション完了の各ステップを順番に実行します。
3. アームの姿勢が一致しない場合やキャリブレーションに失敗した場合は、**Recalibrate** をクリックし、そのまま続行しないでください。

![アームキャリブレーションの検証](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)
*注：図はDMアームを例にしています。RSアームでも手順はまったく同じです。*

> キャリブレーションが完了する前に、遠隔操作やデータ収集を行わないでください。

#### 3.2.4 テレオペレーションの検証

テレオペレーションの検証では、フォロワーアームがリーダーアームに正しく追従しているかを確認します。方向が逆であったり、遅延が大きすぎたり、動きが途切れたりする場合は、デバイスの役割、シリアルポートのバインド、およびキャリブレーション結果を確認してください。

1. **Start Teleoperation** をクリックします。
2. リーダーアームを少し動かし、フォロワーアームが同期して動くか、同じ方向に追従するか、スムーズに動くかを観察します。
3. 確認後、**End Teleoperation** をクリックし、結果に応じてオプションを選択します：
   - **Normal**：**Confirm Teleoperation Normal** をクリックします。
   - **Abnormal**：**Abnormal, Return to Recalibrate** をクリックします。

![テレオペレーションの検証](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)
*注：図はDMアームを例にしています。RSアームでも手順はまったく同じです。*

> **重力補償（オプション）**
> アームには重量があるため、フォロワーを手動で調整するには力が必要になる場合があります。重力補償を有効にすると、システムが重量の一部を相殺し、フォロワーを動かしやすくします。調整後およびテレオペレーション検証の前には、重力補償をオフにしてください。
> 重力補償はフォロワーアームの調整用であり、フォロワーアームをリーダーに追従させる機能ではありません。

#### 3.2.5 カメラのバインド

カメラは、アームがタスクを実行している間の視覚情報を記録します。カメラの取り付け位置に応じて、次の2つのレイアウトが一般的に使用されます：
| レイアウト | 取り付けと目的 | 適したシナリオ | 図 |
|:---|:---|:---|:---|
| グリッパービュー<br /> | <small><strong>トップビューカメラ</strong>：作業エリアをカバーするため、作業台前方の上部に取り付けます。<br /><br /><strong>グリッパーカメラ</strong>：把持の詳細を観察するため、グリッパー付近に取り付けます。</small> | <small>グリッパーと物体の接触を観察する必要がある精密な操作。</small> | ![グリッパービューレイアウト](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-in-hand-rs-en.webp)<br /><small>*注：独自の3Dカメラマウントを設計してもかまいません。</small> |
| サイドビュー補助<br /> | <small><strong>トップビューカメラ</strong>：作業エリアをカバーするため、作業台前方の上部に取り付けます。<br /><br /><strong>サイドビューカメラ</strong>：アームの高さとグリッパーの動きを観察するため、作業台前面の側面に取り付けます。</small> | <small>把持、搬送、配置などのタスク。</small> | ![サイドビュー補助レイアウト](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-to-hand-rs-en.webp) |

このチュートリアルでは、**サイドビュー補助レイアウト** を使用します。カメラの取り付けと位置決めが完了したら：

1. カメラをコンピュータに接続し、**Rescan** をクリックします。
2. **Front Camera** と **Side Camera** のエリアで、対応するビデオストリームを選択します。
3. 両方のプレビューウィンドウを確認し、アーム、物体、およびターゲット位置がはっきり見えることを確認します。確認後、**Next** をクリックします。

![フロントカメラとサイドカメラのバインド](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-camera-binding-dm-en.webp)

> カメラが取り付け位置と対応しているか確認するには、**View Camera Layout** をクリックします。プレビューが真っ黒または異常な場合は、再スキャン、カメラの再起動、またはUSBポートの変更を行ってください。


<span id="action-replay"></span>

### 3.3 アクションリプレイ

**Action Replay** は、リーダーアームによるティーチングを通じてアームの動作を記録し、アクションリストに保存して再生します。記録後、動作が連続しているか、動きの方向およびグリッパーの開閉が正しいかを確認します。

| 機能 | 操作 | 目的 |
|---|---|---|
| アクションを記録 | **+** をクリックしてアクションを作成 → リーダーアームを使用してタスクを通じてフォロワーを制御<br />**Stop Recording** をクリック → 保存 | 把持、移動、配置などのターゲットアクションを記録 |
| アクションを再生 | **Replay** をクリック | アクションが完全かつ連続していることを確認し、動きの方向およびグリッパーの開閉を確認 |
> 初めてアクションを記録する前に、**Device Setup** でデバイス接続とテレオペレーション検証を完了し、**Confirm Teleoperation Normal** をクリックしてください。再生が異常な場合は、そのアクションを削除して再度記録してください。

![アクションリストとリプレイ操作](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-3-action-replay-rs-en.webp)


<span id="dataset"></span>

### 3.4 データセット

**Dataset** は、収集タスクの作成、およびタスクエピソードの記録、確認、クリーンアップ、マージに使用します。切断、ソフトウェアの問題、ビデオのカクつきを早期に検出し、単一の障害で全データを失うリスクを減らすため、小さなバッチでデータを収集することを推奨します。

- 1バッチあたり約10エピソードを記録します。
- 2～3バッチ完了後、最初のトレーニング用に約20～30の有効なエピソードを残します。
- トレーニング結果に応じて、複雑なタスクにはさらにデータを追加します。

#### 3.4.1 データ収集タスクの設定

**Dataset** → **Collect Data** に進み、タスク情報を入力します。複数のデータセットをマージする場合は、すべてのバッチでタスク説明を完全に同一にする必要があります。収集前に、AおよびBの位置、物体カテゴリ、カメラ位置、テーブルトップの背景、照明条件をできるだけ一定に保ってください。

| 項目 | 設定例 | 説明 |
|---|---|---|
| Dataset name | `RS arm pick object from A to B-01` | 「デバイス + タスク + バッチ」の形式を使用します |
| Task description | `Move the object from the left to the right` | タスクの目標を明確に記述します。バッチをマージする場合、説明は完全に同一である必要があります |
| Number of episodes | `10` | 各エピソードには1つの完全なタスクを含めます |
| Duration per episode | `20`～`30` 秒 | 完全なアクションシーケンスをカバーします |
| Rest duration | `5` 秒 | アームのリセットとシーン調整のための時間を確保します |

![データ収集タスクの設定](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-1-dataset-config-rs-en.webp)

#### 3.4.2 タスクエピソードの記録

タスクエピソードの記録は、トレーニングデータの中核となる部分です。各エピソードには、ポイントAで物体を把持し、ポイントBまで移動して解放するプロセスを完全に記録する必要があります。モデルが素早く学習できるよう、タスク手順は概ね一貫させてください。汎化性能を高めるため、位置、角度、動作バリエーションの異なるデータを追加します。

1. 物体をポイントAに置き、アームが初期姿勢にあることを確認してから、**Start Recording** をクリックします。
2. リーダーアームを使用してフォロワーを制御し、タスクを実行してから、アームを初期姿勢に戻します。
3. タスク完了後、残り時間が終了するのを待つか、矢印をクリック（または Space キーを押して）して現在のエピソードを早めに終了します。
4. 休止時間中に、物体をポイントAに戻し、アームが準備完了であることを確認します。休止時間が終了したら次のエピソードを開始します。

![タスクエピソードの記録](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-2-recording-episode-rs-en.webp)

> **重要な注意 ⚠️**
>
> - 収集前にカメラを調整して固定してください。**アーム、グリッパー、物体、およびポイントAとBがすべて見えていることを必ず確認してください。**
> - 重要な動作が🚫遮られたりカメラの視野外になったりすると、そのデータはトレーニングに使用できない可能性があります。
> - タスクが失敗した場合、物体がしっかり把持されていない場合、ビデオがカクつく場合、またはカメラが遮られた場合は、**Record Again** をクリックするか `Esc` を押して収集を停止してください。
> - まず現在のバッチを完了し、その後で異常なエピソードを確認して削除することもできます。
> - アームが予期しない動作をしたり、衝突の危険がある場合は、直ちに🛑停止してください。

#### 3.4.3 データの確認・削除・マージ

収集後、異常なエピソードを確認し、無効なデータを削除し、必要に応じて複数のデータセットをマージします。

| 操作 | 方法 | 説明 |
|---|---|---|
| 異常エピソードの確認 | エピソードを選択し、ビデオを再生するかアクションをリプレイします | タスクが完了していること、グリッパーの動作が正常であることを確認します。記録中に異常なエピソード番号をメモしておき、後で直接確認することもできます |
| 異常エピソードの削除 | **Batch Delete Episodes** をクリックし、異常なエピソードを選択して確認し、**Generate Deleted Copy** をクリックします | 新しいデータセット名を入力して確認します。元のデータセットは上書きされません |
| データセットのマージ | **Merge** をクリックし、データセットを選択して新しいデータセット名を入力します | タスク説明、デバイス構成、カメラ構成が一致するデータセットをマージします |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspect the dataset](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-check-rs-en.webp)


<figcaption>データセットを確認</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Delete abnormal episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-delete-rs-en.webp)


<figcaption>異常なエピソードを削除</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Merge datasets](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-merge-rs-en.webp)


<figcaption>データセットをマージ</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 トレーニング

トレーニングでは、アーム用のアクションモデル（つまり、ティーチングデータから作成されるアクション制御プログラム）を生成します。SenseCraft Robotics は記録されたタスクデータを読み取り、アームがターゲット動作をどのように実行しているかを解析し、自律動作に使用できるモデルを生成します。

次の表を使用してトレーニングパラメータを設定します：

| パラメータ | オプション / 値 | 詳細 |
| :--- | :--- | :--- |
| **トレーニングハードウェア** | Cloud · automatically select GPU | クラウドサーバーを使用してトレーニングを行い、対応するクレジットを消費します。 |
| | Local · free | 現在のコンピュータを使用してトレーニングを行います。クレジットは消費しませんが、互換性のあるローカル GPU が必要です。 |
| **トレーニングデータセット** | 対象のデータセットを選択 | このトレーニング実行用に記録・準備したデータセットを選択します。 |
| **ポリシー** | ACT | 現在サポートされているデフォルトのアクション制御ポリシーです。 |
| **トレーニングステップ数** | `10000` | 初期値として 10,000 を推奨します。後でモデルの実際の性能に応じて調整してください。 |

> **クレジットに関する注意**
> **Cloud · automatically select GPU** を使用したクラウドトレーニングではクレジットを消費します。**Local · free** トレーニングではクラウドトレーニング用クレジットは消費しません。クレジットの取得および使用方法については、[Credit Rules](/ja/sensecraft_robotics/#クレジット) を参照してください。

**推奨トレーニングステップ数とエピソード数：**

| タスク難易度 | タスクの説明 | 推奨エピソード数 | 推奨トレーニングステップ数 |
|---|---|---:|---:|
| 初級 | 固定されたポイント A からポイント B | 約 20 | 10,000～15,000 ステップ |
| 中級 | ランダムな位置での把持と配置 | 約 50 | 30,000～40,000 ステップ |
| 上級 | 複数ステップまたは長時間タスク | 約 100 | 80,000～100,000 ステップ |

> **トレーニング時間**：総トレーニング時間は、選択した **GPU モデル** と **トレーニングステップ数** の両方に依存します。例えば、クラウドで 20,000 ステップ（20K）のトレーニングを行う場合、多くの GPU では数分から数十数分程度かかります。100,000 ステップ（100K）のトレーニングには、20K のトレーニングのおよそ 5 倍の時間がかかります。

設定を確認したら、**Start Training** をクリックします。トレーニングが開始されると、**Current Training Tasks** リストで進行状況とトレーニング履歴を確認できます。

![Training configuration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-5-training-rs-en.webp)

<span id="model"></span>

### 3.6 モデル

**Model** では、トレーニング結果を確認し、その後の動作に使用するモデルを選択します。使用前に、トレーニングが完了していること、およびタスクとデバイスの組み合わせが現在のプロジェクトと一致していることを確認してください。

![Model list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-6-model-rs-en.webp)

<span id="run"></span>

### 3.7 オペレーション

**Operation** では、トレーニング済みモデルをアームに読み込んで、タスクを正しく完了できるかどうかを検証します。

**手順：**
1. **モデルを選択**：**Supports current arm** と表示されているモデルを選択します。
2. **推論方法を選択**：**Cloud Inference** または **Local Inference** を選択し、対応するパラメータを設定します。
3. **推論を開始**：設定を確認したら、**Start Cloud/Local Inference** をクリックします。

**クラウド推論とローカル推論の主な違い：**
| 比較項目 | クラウド推論 | ローカル推論 |
| :--- | :--- | :--- |
| **計算ハードウェア** | 高性能なクラウド GPU を使用して推論を行います。 | コンピュータのローカル CPU を使用して推論を行います（現在のプラットフォームはローカル GPU の使用をサポートしていません）。 |
| **性能への影響** | 計算能力がボトルネックになることは一般的に少ないですが、結果は **ネットワーク伝送品質** に大きく依存します。 | 結果は **ローカル CPU の計算能力** に依存します。 |
| **パラメータ** | **Action chunks（デフォルト 120）:** 1 回の推論で予測されるアクションステップ数。<br />**Chunk threshold（デフォルト 0.9）:** 動作の滑らかさと精度に影響します。値を高くするとアームはより慎重になり、一時停止が発生する場合があります。値を低くすると動作は滑らかになりますが、誤差が増える可能性があります。<br />**（通常はデフォルト値を推奨します。）** | **Run count:** タスクを繰り返す総回数（エピソード数）。<br />**Time limit per run（秒）:** 1 回のタスク実行の最大時間。タイムアウトすると自動的に実行が終了します。<br />**（通常はデフォルト値を推奨します。）** |
| **データ出力** | 推論検証のみを実行します。 | 動作終了後、推論実行から対応するデータセットを自動生成します。 |
| **コストと制限** | プラットフォームの料金体系に従います。高い計算能力により、素早く始めるのに適しています。 | 通常はクラウドクレジットを消費しませんが、ローカル CPU の性能に制限されます。 |

**注意事項**
- 開始前：アームが正しく接続されていること、および作業エリアが安全であることを確認してください。
- 動作中：アームの接続を外したり分解したりせず、動きが正常かどうかを観察してください。
- 結果が不満な場合：**Dataset** に戻り、異常なエピソードを削除し、有効なデータを追加して再度トレーニングを行ってください。

![Model operation interface](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-7-run-rs-en.webp)
