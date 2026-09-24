---
title: reBot Arm 102 + B601 DM トレーニングガイド
description: SenseCraft Robotics を使用して reBot Arm 102 + B601 DM をセットアップし、アームを接続・キャリブレーションし、デモを収集してモデルを学習し、推論を検証します。
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 DM
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_dm
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

このチュートリアルでは、リーダーアームである reBot Arm 102 とフォロワーアームである B601 DM を SenseCraft Robotics と組み合わせて使用し、プロジェクト作成とデバイスセットアップから、データ収集、モデル学習、運用までの一連のワークフローを紹介します。
本ガイドの例題タスクは、ポイント A にある物体をつかみ、ポイント B に置くことです。これはあくまで説明用の例であり、ユーザーは仕分け、搬送、箱詰め、ボタン押下、プラグの抜き差しなど、ニーズに応じてアプリケーションシナリオを設計できます。

![DM arm pick-and-place task example](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp)

> **バージョンに関する注意**
> インターフェース名、ボタン位置、トレーニングバックエンドは、SenseCraft Robotics のバージョンによって変更される場合があります。本ガイドに登場するシリアルポート番号（COM21、COM35、COM3、COM6 など）やデータセット名は、動画からの例です。必ず現在使用しているコンピュータで検出されたデバイスを使用してください。

## チュートリアル概要

このチュートリアルは、ハードウェアセットアップとソフトウェア操作の順に構成されており、アームを素早く構成してモデルを学習できるようになっています。

| 章 | ステージ | 主な内容 |
| :--- | :--- | :--- |
| 第1章 | **準備** | ハードウェア一覧、コンピュータとソフトウェア要件、シーンと安全確認 |
| 第2章 | **アームの接続** | リーダーアームとフォロワーアームの物理的な取り付けとケーブル接続 |
| 第3章 | **ソフトウェアトレーニング** | **中核ワークフロー**：デバイスセットアップ ➔ データ収集 ➔ モデル学習 ➔ デプロイと運用 |



<span id="preparation"></span>

## 1. 準備

### 1.1 ハードウェア

![Hardware list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-1-hardware-list-dm-en.webp)

> アームは組み立て、固定、給電し、USB 接続されている必要があります。組み立てが完了していない場合は、[ステップ 1：アームの組み立て](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/#%E7%AC%AC%E4%B8%80%E6%AD%A5%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82) を参照してください。

#### アーム

| カテゴリ | リーダー：reBot Arm 102 | フォロワー：B601 DM |
|---|---|---|
| アーム | reBot Arm 102 ×1  🔗[Buy now](https://www.seeedstudio.com/Star-Arm-102-p-6765.html?utm_source=sensecraft_wiki&utm_medium=socil) | 組み立て済み reBot Arm B601-DM キット（電源付きグリッパー組み立て済みバージョン）×1   🔗[Buy now](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html?utm_source=sensecraft_wiki&utm_medium=socil) |
| 電源 | 12 V / 2 A 電源アダプタ ×1    | 24 V / 15 A 電源および電源ケーブル ×1   |
| データケーブル | USB-C データケーブル ×1 | USB-C データケーブル ×1 |
| 通信および電源コンポーネント | — | USB-CAN ドライバボード ×1 <br />信号/電源分離ボード ×1 |
| その他のケーブル | — | 2 ピン JST ケーブル ×1<br />3 ピン JST ケーブル ×1<br />XT30 2+2 ケーブル ×1 |
| 取り付け工具 | G クランプ ×2 | G クランプ ×2  |

#### カメラ

カメラは 2 台必要です。1 台は上面視点用、もう 1 台は側面視点またはグリッパー視点用です。

<table>
  <thead>
    <tr>
      <th>カメラ</th>
      <th>上面カメラ</th>
      <th>側面カメラ</th>
      <th>グリッパーカメラ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数量</td>
      <td>1</td>
      <td colspan="2"><em>側面</em>カメラまたは<em>グリッパー</em>カメラのいずれかを選択</td>
    </tr>
    <tr>
      <td>マウント</td>
      <td>上面用マウント ×1</td>
      <td>小型デスクトップマウント ×1</td>
      <td>3D プリントマウント ×1</td>
    </tr>
  </tbody>
</table>

**カメラの選択肢**：macOS または Windows では、以下のいずれかの組み合わせを選択できます。USB ハブやドックではなく、カメラをコンピュータの USB ポートに直接接続することを推奨します。

| オプション | Hikvision USB カメラ | Logitech C270 HD Webcam | 収集性能 |
|:---|:---|:---|:---|
| オプション1 | 1 | 1 | 最も安定；120 FPS での収集をサポート |
| オプション2 | ❌ | 2 | 安定；すべての収集フレームレートをサポート |
| オプション3 | 2 | ❌ | フレームレートを 60 FPS 以下に維持；120 FPS での収集はサポートされず、一部のケースでは互換性の問題が発生する可能性があります |


### 1.2 コンピュータとソフトウェア

- Windows または macOS コンピュータ（ローカルトレーニングには対応 GPU が必要）
- 安定したネットワーク接続（ダウンロード、ログイン、クラウドトレーニング、および推論用）
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) をインストール済み
- [SenseCraft アカウント](https://account.seeed.cc/login) を登録し、SenseCraft Robotics 内でサインイン済み


詳細な手順については、[ソフトウェアのダウンロードとアカウント設定](/ja/sensecraft_robotics/#ソフトウェアのダウンロードとアカウント設定) を参照してください。

### 1.3 シーンと安全

- テーブル上に 2 つの固定位置をマークします。ポイント A は物体の開始位置、ポイント B は目的位置です。
- 適切なサイズでつかみやすい物体を用意します（赤いブロックや柔らかい物体など）。
- ポイント A、ポイント B、両方のアーム、および物体がカメラの視野内に収まり、遮られていないことを確認します。
- アームの作業空間から人、雑然とした物、ケーブル、壊れやすい物を取り除きます。リーダーアームを調整し、フォロワーアームに近づいたり、フォロワーカメラの視野に入ったりしないようにします。

![Scene and safety example](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-3-scene-and-safety-dm-en.webp)


<span id="connect-arms"></span>

## 2. アームの接続

> **安全に関する注意：**
> JST、XT30、その他のケーブルを接続・取り外しする前に、必ず電源を切ってください。すべてのケーブルが正しく接続されていることを確認してから電源を入れてください。
> B601 RS と B601 DM は外観が似ています。必ず見分けてください。


### 2.1 reBot Arm 102（リーダーアーム）の取り付けと接続



#### ステップ 1：reBot Arm 102 を取り付ける

木工用クランプを使用して、reBot Arm 102 を平らなテーブルトップに固定します。ベースを軽く押して、動かないことを確認します。

#### ステップ 2：ケーブルを接続する

![Mounting and connecting the reBot Arm 102 (leader arm)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)


接続は次の 2 つの経路で構成されます。

* **信号経路（アーム -> USB-C ケーブル -> コンピュータ）**
  1. アームとコンピュータを接続するための USB-C ケーブルを用意します（**まだコンピュータには接続しないでください。シリアルポートのバインドとデバイススキャンの段階で接続します**）。

* **電源経路（アーム -> 12 V 2 A 電源アダプタ -> 電源タップ -> 通電）**
  1. **12 V 2 A 電源アダプタ**をアームの電源コネクタに接続します。
  2. アダプタを電源タップに接続してアームの電源を入れます。


### 2.2 B601 DM（フォロワーアーム）の取り付けと接続

![B601 DM cable connection](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-2-follower-wiring-overview-dm-en.webp)

#### ステップ 3：B601 DM を取り付ける

G クランプを使用して、B601 DM を安定した平らなテーブルトップに固定します。固定後、アームを左右に軽く回転させ、ベースが動かないことを確認します。

#### ステップ 4：ケーブルを接続する

作業を始める前に、必ず電源が切れていることを確認してください。接続は次の 2 つの経路で構成されます。

* **信号経路（アーム -> 信号/電源分離ボード -> USB-CAN ドライバボード -> コンピュータ）**
  1. XT30 2+2 ケーブルを使用して、一番下の第 1 モータと信号/電源分離ボードを接続します。
  2. 2 ピン JST ケーブルを使用して、信号/電源分離ボードと USB-CAN ドライバボードを接続します。
  3. 3 ピン JST ケーブルを使用して、一番下の第 1 モータと USB-CAN ドライバボードを接続します（これはデバッグ用ケーブルであり、未接続のままでも構いません）。
  4. USB-C データケーブルを用意し、USB-CAN ドライバボードとコンピュータを接続します（**まだコンピュータには接続しないでください。シリアルポートのバインドとデバイススキャンの段階で接続します**）。

* **電源経路（アーム -> 信号/電源分離ボード -> 24 V 電源アダプタ -> コンセント -> 通電）**
  1. XT30 2+2 ケーブルを使用して、一番下の第 1 モータと信号/電源分離ボードを接続します。
  2. 信号/電源分離ボードを **24 V 電源アダプタ**に接続します。
  3. 電源アダプタをコンセントに接続します。アームが確実に固定されていること、ケーブルが正しいこと、周囲が安全であることを確認したうえで、電源を入れます。

![Connecting the B601 DM (follower arm)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-2-connect-follower-dm-en.webp)



<span id="project"></span>

## 3. プロジェクト

サインイン後、**Projects** ページを開きます。初めて使用する場合は新しいプロジェクトを作成するか、既存のプロジェクトを開きます。プロジェクト内の **Project Overview** から、デバイスセットアップ、アクションリプレイ、データセット、トレーニング、モデル、運用にアクセスできます。

| 操作 | 手順 |
|---|---|
| プロジェクトを作成 | **New Project** をクリック → プロジェクト名と説明を入力 → **Create and Start** をクリック |
| 既存プロジェクトを開く | プロジェクト一覧からプロジェクトを選択 → プロジェクトを開く |

![New project window](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-create-project-dm-en.webp)


### 3.1 Project Overview

**Project Overview** には、アーム接続、デバイスセットアップ、データセット、トレーニング、モデル、運用状況など、現在のプロジェクトステータスが表示されます。

ページに **Pending configuration** または **Not connected** と表示されている場合は、**Go to Device Setup** をクリックしてアームを構成します。

![Project overview](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-1-device-selection-dm-en.webp)



<span id="device-setup"></span>

### 3.2 Device Setup

Device Setup では、デバイス選択、シリアルポートのバインド、アームのキャリブレーション、遠隔操作の検証、カメラ設定を行います。

#### 3.2.1 デバイスモデルの選択

**Device Pairing** ステップで **reBot Arm 102 + B601 DM** を選択し、**Next** をクリックしてシリアルポートをバインドします。

![Select reBot Arm 102 + B601 DM](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-1-device-pairing-dm-en.webp)


#### 3.2.2 リーダーアームとフォロワーアームの USB シリアルポートをバインドする

1. **初回スキャン**：両方のアームから USB ケーブルを外し、**Rescan** をクリックして、現在表示されているシリアルポートを確認します。
2. **リーダーアームをバインド**：reBot Arm 102（リーダーアーム）を接続し、再度 **Rescan** をクリックして、新たに検出されたシリアルポートをリーダーアームにバインドします。
3. **フォロワーアームをバインド**：B601 DM（フォロワーアーム）を接続し、再度 **Rescan** をクリックして、新たに検出されたシリアルポートをフォロワーアームにバインドします。
4. 両方のアームが **Connected** と表示されていることを確認し、**Next** をクリックします。

![リーダーアームとフォロワーアームのシリアルポートをバインドする](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-2-serial-binding-dm-en.webp)

> **シリアルポートのバインドとトラブルシューティング：**
> - 各スキャン後は、新たに検出されたシリアルポートのみをバインドしてください。COM 番号だけでデバイスを識別しないでください。
> - シリアルポートが表示されない場合は、USB ケーブルを再接続して再スキャンしてください。シリアルポートが 1 つしか表示されない場合は、もう一方の USB ケーブルとデバイスの電源を確認してください。


#### 3.2.3 アームキャリブレーションの検証

1. 画面上の例に従って、リーダーアームとフォロワーアームを初期姿勢に配置し、作業空間がクリアであることを確認します。
2. **Start Calibration** をクリックし、画面の指示に従ってリーダーアームのゼロ点合わせ、フォロワーアームのゼロ点合わせ、およびキャリブレーション完了まで行います。
3. アームの姿勢が一致しない場合やキャリブレーションに失敗した場合は、**Recalibrate** をクリックし、次のステップへ進まないでください。

![アームキャリブレーションの検証](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)

> キャリブレーションが完了する前に、遠隔操作やデータ収集を行わないでください。

#### 3.2.4 遠隔操作の検証

遠隔操作の検証では、フォロワーアームがリーダーアームに正しく追従しているかを確認します。方向が逆であったり、遅延が大きすぎたり、動きが途切れる場合は、デバイスの役割、シリアルポートのバインド、およびキャリブレーション結果を確認してください。

1. **Start Teleoperation** をクリックします。
2. リーダーアームを小さな範囲で動かし、フォロワーアームが同じ方向に、かつ滑らかに同期して動くかを観察します。
3. 確認が完了したら **End Teleoperation** をクリックし、結果に応じて次のオプションを選択します：
   - **Normal**：**Confirm Teleoperation Normal** をクリックします。
   - **Abnormal**：**Abnormal, Return to Recalibrate** をクリックします。

![遠隔操作の検証](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)

> **重力補償（オプション）**
> アームには重量があるため、フォロワーアームを手動で調整するには力が必要になる場合があります。重力補償を有効にすると、システムが重量の一部を相殺し、フォロワーアームを動かしやすくします。調整後は、遠隔操作の検証を行う前に重力補償をオフにしてください。
> 重力補償はフォロワーアームの調整用であり、リーダー・フォロワー動作中にフォロワーアームを制御するためには使用しません。


#### 3.2.5 カメラのバインド

カメラは、アームがタスクを実行している間の視覚情報を記録します。以下は一般的な 2 つのカメラレイアウトです：

| レイアウト | 取り付け方法と目的 | 適したシナリオ | 図解 |
|:---|:---|:---|:---|
| グリッパービュー<br /> | <small><strong>トップビューカメラ</strong>：作業エリアをカバーするように、作業台前方の上部に取り付けます。<br /><br /><strong>グリッパーカメラ</strong>：把持の詳細を観察できるように、グリッパー付近に取り付けます。</small> | <small>グリッパーと物体の接触を観察する必要がある精密な操作。</small> | ![グリッパービューレイアウト](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-eye-in-hand-dm-en.webp)<br /><small>*注：3D カメラマウントは自作してもかまいません。</small> |
| サイドビュー補助<br /> | <small><strong>トップビューカメラ</strong>：作業エリアをカバーするように、作業台前方の上部に取り付けます。<br /><br /><strong>サイドビューカメラ</strong>：アームの高さとグリッパーの動きを観察できるように、作業台前面の側方に取り付けます。</small> | <small>ピックアンドプレース、搬送、配置タスク。</small> | ![サイドビュー補助レイアウト](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-eye-to-hand-dm-en.webp) |

このチュートリアルでは、**サイドビュー補助**レイアウトを使用します。カメラの取り付けと位置決めが完了したら：

1. カメラをコンピュータに接続し、**Rescan** をクリックします。
2. **Top-view camera** と **Side-view camera** セクションで、対応するビデオストリームを選択します。
3. 両方のプレビューウィンドウを確認し、アーム、物体、およびターゲット位置がはっきり見えることを確認します。設定を確認したら **Next** をクリックします。

![トップビューおよびサイドビューカメラのバインド](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-camera-binding-dm-en.webp)

> 各カメラが取り付け位置と一致していることを確認するには、**View Camera Layout** をクリックします。プレビューが真っ黒または異常な場合は、再スキャン、カメラの再起動、または別の USB ポートの使用を行ってください。


<span id="action-replay"></span>

### 3.3 アクションリプレイ

**Action Replay** は、リーダーアームによるティーチングを通じてアームの動きを記録し、アクションリストに保存して再生します。記録後、動きが連続しているか、移動方向およびグリッパーの開閉が正常かを確認します。

| 機能 | 操作 | 目的 |
|---|---|---|
| アクションを記録 | **+** をクリックしてアクションを作成 → リーダーアームでフォロワーアームを操作してタスクを完了 → **Stop Recording** をクリック → 保存 | 把持、移動、配置などの目標アクションを記録 |
| アクションを再生 | **Replay** をクリック | アクションが完全かつ連続しているか、移動方向およびグリッパーの開閉が正常かを確認 |

> 初めてアクションを記録する前に、**Device Setup** でデバイス接続と遠隔操作の検証を完了し、**Confirm Teleoperation Normal** をクリックしてください。再生が異常な場合は、そのアクションを削除して再度記録してください。

![アクションリストとリプレイ操作](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-3-action-replay-dm-en.webp)


<span id="dataset"></span>

### 3.4 データセット

**Dataset** は、収集タスクを作成し、タスクエピソードの記録、検査、クリーンアップ、マージを行うために使用します。データは小さなバッチで収集することを推奨します。これにより、デバイス切断、ソフトウェアエラー、ビデオのスタッタリングを早期に発見でき、1 回の障害で全データを失うリスクを減らせます。

- まずは 1 バッチあたり約 10 エピソードを記録します。
- 2～3 バッチ完了後、最初の学習用として約 20～30 個の有効なエピソードを残します。
- 学習結果に応じて、複雑なタスクにはさらにデータを追加します。

#### 3.4.1 データ収集タスクの設定

ページ上部の **Dataset** → **Collect Data** を開き、タスク情報を入力します。複数のデータセットをマージする場合は、各バッチのタスク説明を完全に同一にする必要があります。収集前に、A および B の位置、物体カテゴリ、カメラ位置、テーブルの背景、照明条件もできるだけ安定させてください。

| 項目 | 設定例 | 説明 |
|---|---|---|
| Dataset name | `DM Arm Pick-and-Place from A to B-01` | 「デバイス + タスク + バッチ」の命名方式を使用 |
| Task description | `Move the object from the left to the right` | タスクの目的を明確に記述します。バッチをマージする場合、説明は完全に同一である必要があります |
| Number of episodes | `10` | 各エピソードには 1 回分のタスクを含めます |
| Episode duration | `20`–`30` seconds | 完全なアクションシーケンスをカバーします |
| Rest duration | `5` seconds | アームをリセットし、シーンを調整する時間を確保します |

![データ収集タスクの設定](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-1-dataset-config-dm-en.webp)

#### 3.4.2 タスクエピソードの記録

タスクエピソードの記録は、学習データの中核となる部分です。各エピソードには、物体をポイント A で拾い上げ、ポイント B まで移動し、置くまでを完全に記録する必要があります。モデルが素早く学習できるよう、タスクの流れは概ね一貫させてください。汎化性能を高めるため、位置、角度、動きのバリエーションが異なるデータも追加します。

1. 物体をポイント A に置き、アームが初期姿勢にあることを確認してから **Start Recording** をクリックします。
2. リーダーアームでフォロワーアームを操作してタスクを完了し、その後アームを初期姿勢に戻します。
3. タスク完了後、残り時間が終了するまで待つか、矢印をクリック（またはスペースキーを押下）して現在のエピソードを早めに終了します。
4. 休止時間中に、物体をポイント A に戻し、アームの準備が整っていることを確認します。休止時間が終了したら次のエピソードを開始します。

![タスクエピソードの記録](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-2-recording-episode-dm-en.webp)

> **重要 ⚠️**
>
> - 収集前にカメラを調整して固定してください。**カメラビュー内にアーム、グリッパー、物体、およびポイント A と B がすべて映っていることを必ず確認してください。**
> - 重要な動作が 🚫 物体などで遮られたり、カメラビューの外になったりしないようにしてください。そうでない場合、そのデータは学習に使用できない可能性があります。
> - タスクが失敗した場合、物体が確実に把持されていない場合、ビデオがスタッタリングする場合、またはカメラが遮られた場合は、**Retake Immediately** をクリックするか `Esc` を押して収集を停止してください。
> - まず現在のバッチを完了し、その後で異常なエピソードを確認して削除することもできます。
> - 制御不能や衝突の危険がある場合は、直ちに 🛑 停止してください。



#### 3.4.3 データの確認・削除・マージ

収集後、異常なエピソードを確認し、無効なデータを削除し、必要に応じて複数のデータセットをマージします。

| 操作 | 実行方法 | 説明 |
|---|---|---|
| 異常エピソードの確認 | エピソードを選択し、そのビデオを再生するかアクションをリプレイします | タスクが完了しているか、グリッパーの動きが正常かを確認します。記録中に異常なエピソード番号をメモしておくと、後で直接確認できます |
| 異常エピソードの削除 | **Batch Delete Episodes** をクリックし、異常なエピソードを選択して確認し、その後 **Generate Deleted Copy** をクリックします | 新しいデータセット名を変更して確認します。元のデータセットは上書きされません |
| データセットのマージ | **Merge** をクリックし、データセットを選択して新しいデータセット名を入力します | 同じタスク説明、デバイス構成、カメラ構成のデータセットをマージすることを推奨します |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspect dataset](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-check-dm-en.webp)


<figcaption>データセットの確認</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Delete abnormal episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-delete-dm-en.webp)


<figcaption>異常なエピソードの削除</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Merge datasets](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-merge-dm-en.webp)


<figcaption>データセットのマージ</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 トレーニング

トレーニングでは、アーム用のアクションモデル（つまり、デモンストレーションデータから形成されるアクション制御プログラム）を生成します。SenseCraft Robotics は記録されたタスクデータを読み取り、アームがどのように目標を達成するかを解析し、自動動作に使用できるモデルを生成します。

次の表を使用してトレーニングパラメータを設定します：

| パラメータ | オプション / 値 | 詳細 |
| :--- | :--- | :--- |
| **トレーニングハードウェア** | Cloud · Auto-select GPU | クラウドサーバーを使用してトレーニングを行い、対応するクレジットを消費します。 |
| | Local · Free | 現在のコンピュータを使用してトレーニングを行い、クレジットは消費しませんが、互換性のあるローカル GPU が必要です。 |
| **トレーニングデータセット** | 対象データセットを選択 | このトレーニング用に準備した記録済みデータセットを選択します。 |
| **ポリシー** | ACT | 現在使用されているデフォルトのアクション制御ポリシーです。 |
| **トレーニングステップ数** | `10000` | 初期値として 10000 を入力し、モデルの実際の性能に応じて調整することを推奨します。 |

> **クレジットに関する注意**
> Cloud · Auto-select GPU でのトレーニングはクレジットを消費します。Local · Free でのトレーニングはクラウドトレーニングクレジットを消費しません。クレジットの取得方法、使用方法、およびルールについては、[Credit Rules](/ja/sensecraft_robotics/#クレジット) を参照してください。

**トレーニングステップ数とエピソード数の推奨値：**

| タスク難易度 | タスクの説明 | 推奨エピソード数 | 推奨トレーニングステップ数 |
|---|---|---:|---:|
| 初級 | 固定されたポイント A からポイント B への移動 | 約 20 | 10,000–15,000 ステップ |
| 中級 | ランダムな位置でのピック＆プレース | 約 50 | 30,000–40,000 ステップ |
| 上級 | ステップ数が多い、または時間が長いタスク | 約 100 | 80,000–100,000 ステップ |

> **トレーニング時間**：総トレーニング時間は、選択した GPU モデルとトレーニングステップ数の両方に依存します。たとえば、クラウド上のほとんどの GPU で 20,000 ステップ（2W）のトレーニングを行う場合、通常は数分から数十数分程度かかります。100,000 ステップ（10W）のトレーニングには、20,000 ステップのトレーニングのおよそ 5 倍の時間がかかります。

設定を確認したら、**Start Training** をクリックします。トレーニングが開始されると、**Current Training Tasks** リストで進行状況と履歴タスクを確認できます。

![Training configuration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-5-training-dm-en.webp)

<span id="model"></span>

### 3.6 モデル

**Model** は、トレーニング結果を確認し、その後の動作に使用するモデルを選択するために使用します。モデルを使用する前に、トレーニングが完了していること、およびそのタスクとデバイスの組み合わせが現在のプロジェクトと一致していることを確認してください。

![Model list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-6-model-dm-en.webp)

<span id="run"></span>

### 3.7 実行

**Operation** では、トレーニング済みモデルをアームに読み込み、タスクを正しく完了できるかどうかを検証します。

**手順：**

1. **モデルを選択**：**Supported by Current Robot Arm** と表示されているモデルを選択します。
2. **推論方法を選択**：**Cloud Inference** または **Local Inference** を選択し、対応するパラメータを設定します。
3. **推論を開始**：設定を確認したら、**Start Inference** をクリックします。

**Cloud Inference と Local Inference の主な違い：**

| 比較項目 | Cloud Inference | Local Inference |
| :--- | :--- | :--- |
| **計算ハードウェア** | 高性能なクラウド GPU を使用して推論を行います。 | コンピュータのローカル CPU を使用して推論を行います（現在のプラットフォームではローカル GPU の使用はサポートされていません）。 |
| **性能への影響** | 計算能力は高く、一般的に制限は少ないですが、結果は **ネットワーク伝送品質** に大きく依存します。 | 性能は **ローカル CPU** の性能に影響されます。 |
| **パラメータ設定** | **Action count（デフォルト：120）:** 1 回の推論で予測されるアクションステップ数。<br />**Block threshold（デフォルト：0.9）:** 動作の連続性と精度に影響するパラメータです。値を高くするとアームの動作はより慎重になり（停止が発生する場合があります）、値を低くすると動作はよりスムーズになります（ただし誤動作の可能性があります）。<br />**（通常はデフォルト設定で問題ありません。）** | **Run count:** タスクを連続して繰り返す総回数（エピソード数）。<br />**Time limit per run（秒）:** 1 回のタスク実行の最大時間。制限時間に達すると自動的に終了します。<br />**（通常はデフォルト設定で問題ありません。）** |
| **データ出力** | 検証のための推論のみを実行します。 | 実行終了後、推論内容に対応するデータセットが自動的に生成されます。 |
| **コストと制限** | コストはプラットフォームのルールに従います。計算能力が高く、素早くトレーニングを開始するのに適しています。 | 通常はクラウドクレジットを必要としませんが、ローカル CPU の性能に制限されます。 |

**注意事項**

- 開始前：アームが正しく接続されていること、および作業エリアが安全であることを確認してください。
- 実行中：アームの接続を切断したり分解したりせず、動作が正常かどうかを観察してください。
- 結果が満足できない場合：**Dataset** に戻り、異常なエピソードを削除し、有効なデータを追加して再度トレーニングを行ってください。

![Model operation interface](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-7-run-dm-en.webp)
