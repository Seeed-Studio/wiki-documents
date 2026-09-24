---
title: SO-ARM101 トレーニングガイド
description: SenseCraft Robotics で SO-ARM101 をセットアップし、アームを接続・キャリブレーションし、デモを収集してモデルを学習し、推論を検証します。
keywords:
  - SenseCraft Robotics
  - SO-ARM101
  - ロボットアーム
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/00-task-overview-soarm-en.webp
slug: /sensecraft_robotics_so_arm101
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

このチュートリアルでは、SenseCraft Robotics と組み合わせた SO-ARM101 Leader アームと SO-ARM101 Follower アームを使用します。プロジェクト作成とデバイスセットアップから、データ収集、モデル学習、運用までの一連のワークフローを扱います。

例として、ポイント A にある物体を拾い上げてポイント B に置くタスクを使用します。これは手順を説明するためだけに用意されたものです。ユーザーは、仕分け、搬送、箱詰め、ボタン押下、プラグの抜き差しなど、他のアプリケーションシナリオを設計できます。

![SO-ARM101 pick-and-place task example](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/00-task-overview-soarm-en.webp)

> **バージョンに関する注意**
> インターフェース名、ボタン位置、トレーニングバックエンドは、SenseCraft Robotics のバージョンによって変更される場合があります。COM21、COM35、COM3、COM6 などのシリアルポート名やデータセット名は、ビデオ内の例です。必ず現在使用しているコンピュータで検出されたデバイスを使用してください。

## チュートリアル概要

このチュートリアルは、ハードウェアセットアップとソフトウェア操作の順序に従います：

| 章 | ステージ | 主な内容 |
| :--- | :--- | :--- |
| 第1章 | **準備** | ハードウェア一覧、コンピュータとソフトウェア要件、シーンと安全確認 |
| 第2章 | **アームの接続** | 物理的な取り付けとケーブル接続 |
| 第3章 | **ソフトウェアワークフロー** | **コアワークフロー**：デバイスセットアップ ➔ データ収集 ➔ モデル学習 ➔ デプロイと運用 |


---

<span id="preparation"></span>

## 1. 準備

### 1.1 ハードウェア

![SO-ARM101 Pro hardware list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-1-hardware-list-soarm-en.webp)

次の一覧は、SO-ARM101 キットに同梱されている公式の **Part List** に基づいています。

#### Leader と Follower の付属品

| 項目 | Leader | Follower |
|---|---|---|
| アーム  [Buy now](https://www.seeedstudio.com/SO-101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html?utm_source=sensecraft_wiki&utm_medium=socil) | 黒色組立済み Leader アーム ×1| 白色組立済み Follower アーム ×1 |
| LeRobot サーボ制御ボード | ×1 | ×1 |
| 電源ケーブル | 5 V 電源ケーブル（マルチヘッド）×1 | Pro：12 V 電源ケーブル ×1；Standard：5 V |
| データケーブル | USB-C データケーブル ×1 | USB-C データケーブル ×1 |
| DC 電源アダプタケーブル | ×1 | ×1 |
| 取り付けクランプ | ×2 | ×2 |

#### 共通の部材と付属品

| 付属品 | 数量 | 説明 |
|---|---:|---|
| フレキシブルグリッパー部品 | ×1 | アーム先端に取り付け済み |
| 32 × 32 mm USB カメラ | ×2 | カメラは 2 台必要です。キットには 1 台含まれているため、もう 1 台は別途用意してください。学習データには 2 つの視点が必要です。 |
| ドライバー | ×1 | 組み立てと調整用 |
| マウスパッド | ×1 | 作業面を保護し、安定させます |

> アームは組み立て、取り付け、通電し、USB 接続されている必要があります。組み立てが完了していない場合は、[ステップ 1：アームの組み立て](https://wiki.seeedstudio.com/cn/lerobot_so100m/#%E6%A0%A1%E5%87%86%E8%88%B5%E6%9C%BA%E5%B9%B6%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82) を参照してください。

#### 電源と接続に関する注意

- **Standard バージョン：** Leader と Follower の両方が **5 V** 電源を使用します。
- **Pro バージョン：** Leader は **5 V**、Follower は **12 V** を使用します。入れ替えて使用しないでください。
- アダプタのラベルおよび該当バージョンの公式製品ドキュメントで、入力電圧、出力電圧、定格電流を確認してください。

### 1.2 コンピュータとソフトウェア

- Windows または macOS コンピュータ。ローカルトレーニングには対応 GPU が必要です。
- ダウンロード、ログイン、クラウドトレーニング、および推論のための安定したネットワーク接続。
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) がインストールされていること。
- [SenseCraft アカウント](https://account.seeed.cc/login) を登録し、SenseCraft Robotics 内でサインインしていること。

詳細な手順については、[ソフトウェアのダウンロードとアカウント設定](/ja/sensecraft_robotics/#download-and-account) を参照してください。

### 1.3 シーンと安全

- テーブル上に 2 つの固定位置をマークします：物体の開始位置であるポイント A と、目的位置であるポイント B。
- 赤いブロックや柔らかい物体など、つかみやすく適切なサイズの物体を用意します。
- ポイント A、ポイント B、両方のアーム、および物体がカメラの視野内に入り、遮られていないことを確認します。
- アームの作業空間から人、雑然とした物、ケーブル、壊れやすい物体を取り除きます。Leader を Follower から離し、Follower のカメラ視野に入らないようにしてください。

![Task scene and safety example](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp)

---

<span id="connect-arms"></span>

## 2. アームを接続する

> **安全に関する注意：**
> アームの取り付け、接続、取り外しを行う前に、必ず電源を切ってください。電源を再投入する前に、アームが確実に固定されていること、ケーブルが正しく接続されていること、作業空間がクリアであることを確認してください。通電中に電源インターフェースを抜き差ししないでください。

### 2.1 アーム本体の取り付け

#### ステップ 1：Leader と Follower を固定する

1. SO-ARM101 Leader と Follower を、安定した水平なテーブルまたは取り付けプラットフォーム上に配置します。
2. キット付属の 4 つのクランプを使用して 2 台のアームを固定します（アーム 1 台につき 2 つのクランプを使用）。各ベースを軽く押して、滑ったり転倒したりしないことを確認します。
3. アーム同士の間に十分な距離を取り、各関節の可動範囲全体が障害物のない状態になるようにします。
4. 電源を切った状態で、各関節を手でゆっくり動かし、衝突や引っ掛かり、機械的なリミットへの接触がなく、スムーズに動くことを確認します。

![Install the arm bodies](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-1-install-arm-body-soarm-en.webp)

### 2.2 制御ボードの取り付けと USB-C 接続

#### ステップ 2：制御ボードを取り付ける

1. 各アームに 1 枚ずつ LeRobot サーボ制御ボードを取り付けます。ボードをアームベースのスロットに合わせ、コネクタの向きを確認して、確実に取り付けます。逆向きに無理に差し込まないでください。
2. 各制御ボードとサーボ間のケーブルが奥までしっかり挿入されており、緩んでいたり、急激に曲がっていたり、挟まれていたり、誤ったインターフェースに接続されていないことを確認します。

#### ステップ 3：データケーブルを接続する

データ接続は次のとおりです：

* **Leader：** SO-ARM101 Leader → USB-C データケーブル → コンピュータ
* **Follower：** SO-ARM101 Follower → USB-C データケーブル → コンピュータ

各制御ボードとコンピュータを 1 本ずつ USB-C ケーブルで接続します。シリアルポートの識別を容易にするため、まずアーム側を接続し、3.2.2 節のシリアルポートバインディングのステップで、コンピュータ側を 1 本ずつ接続してください。

![Install the control boards](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp)

### 2.3 電源インターフェースの取り付けと電源投入

#### ステップ 4：電源インターフェースを取り付ける

1. 電源アダプタが AC 電源に接続されていないことを確認します。
2. 各 DC 電源アダプタケーブルをアームの電源インターフェースに挿入し、ロックリングを時計回りに回して締め付けます。
3. 電源要件を確認します：**Pro** は Leader に 5 V、Follower に 12 V を使用し、**Standard** は両方のアームに 5 V を使用します。電圧を混在させないでください。
4. 各コネクタがロックされており、ケーブルが関節の可動範囲内に入り込まないことを確認します。

#### ステップ 5：電源を入れる

1. 両方の電源アダプタをコンセントに接続し、電源を入れます。
2. 制御ボードのインジケータを確認します。インジケータが消灯している、異常に点滅する、発熱している、または異臭がする場合は、直ちに電源を切り、システムを点検してください。
3. USB-C はデータ通信専用です。デバイススキャン、キャリブレーション、遠隔操作の間は、電源と USB-C の両方を接続しておく必要があります。

![Install the power interfaces](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-3-install-power-interface-soarm-en.webp)


<span id="project"></span>

## 3. プロジェクトワークフロー

サインイン後、**Projects** ページを開きます。初めて使用する場合はプロジェクトを作成し、既存のプロジェクトがある場合はそれを開きます。プロジェクト概要から、デバイスセットアップ、アクションリプレイ、データセット、トレーニング、モデル、運用にアクセスできます。

| 操作 | 手順 |
|---|---|
| プロジェクトを作成 | **New Project** をクリック → プロジェクト名と説明を入力 → **Create and Start** をクリック |
| 既存のプロジェクトを開く | プロジェクト一覧からプロジェクトを選択 → 開く |

![Create a project](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-create-project-soarm-en.webp)

### 3.1 プロジェクト概要

**Project Overview** では、アーム、デバイスセットアップ、データセット、トレーニング、モデル、運用の現在の状態が表示されます。

ページに **To be configured** または **Not connected** と表示されている場合は、**Go to Device Setup** をクリックしてアームを設定します。

![Project overview](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-1-project-overview-soarm-en.webp)

<span id="device-setup"></span>

### 3.2 デバイスセットアップ

Device Setup では、デバイス選択、シリアルポートのバインディング、アームのキャリブレーション、遠隔操作の検証、カメラ設定を行います。

#### 3.2.1 デバイスモデルを選択する

**Device Pairing** ステップで **SO-ARM101 + SO-ARM101** を選択し、**Next** をクリックしてシリアルポートをバインドします。

![Select SO-ARM101 + SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-1-device-pairing-soarm-en.webp)

#### 3.2.2 USB シリアルポートをバインドする

1. **初回スキャン：** 両方のアームから USB ケーブルを外し、**Rescan** をクリックして、現在表示されているポートを確認します。
2. **Leader をバインド：** Leader SO-ARM101 を接続し、再度 **Rescan** をクリックして、新たに表示されたポートを Leader にバインドします。
3. **Follower をバインド：** Follower SO-ARM101 を接続し、再度 **Rescan** をクリックして、新たに表示されたポートを Follower にバインドします。
4. 両方のアームが **Connected** と表示されていることを確認し、**Next** をクリックします。

![Bind the Leader and Follower serial ports](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-2-serial-binding-soarm-en.webp)

> **シリアルポートのトラブルシューティング：**
> - 各スキャンの後は、新たに表示されたポートだけをバインドしてください。COM 番号だけでデバイスを識別しないでください。
> - ポートが表示されない場合は、USB ケーブルを再接続して再スキャンしてください。ポートが 1 つしか表示されない場合は、もう一方の USB ケーブルとデバイスの電源を確認してください。

#### 3.2.3 アームキャリブレーションの検証

キャリブレーションページでは、**自動キャリブレーション** と **手動キャリブレーション** を提供します。開始前に、画面上の例に示されている中央の姿勢に Leader と Follower を移動し、アームの作業空間を片付けてください。

##### 自動キャリブレーション

自動キャリブレーションは、関節の可動範囲を自動的に特定します。関節に信頼できる物理ストッパーを持つ SO-ARM101 アームに適しています。

1. Leader と Follower から荷重を取り外し、アームの作業空間に障害物がないことを確認します。
2. 画面上の例に従い、各関節を順番にゆっくり動かして、Leader と Follower が中央位置でほぼ垂直に整列するようにします。
3. キャリブレーションするすべての関節に信頼できる物理ストッパーがあることを確認し、ページ上の確認チェックボックスを選択します。
4. **Start Calibration** をクリックし、システムが関節の可動範囲を特定してキャリブレーションを完了するまで待ちます。

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![ calibration selection](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-calibration0-soarm-en.webp)


<figcaption>キャリブレーションモードの選択</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-automatic-calibration-soarm-en.webp)


<figcaption>手動キャリブレーション</figcaption>
</figure>

</div>

##### 手動キャリブレーション

関節に信頼できる物理ストッパーがない場合、または画面上のガイダンスを使用して中央位置と関節の可動範囲を段階的に確認する必要がある場合は、手動キャリブレーションを選択します。

1. Leader の電源を入れたままにして、手動ガイダンスができる状態にします。アームの作業空間に障害物がないことを確認します。
2. 画面上の例に従い、各 Leader の関節をその可動範囲の中央付近までゆっくり動かします。
3. Leader の姿勢が正しいことを確認したら、**Start Calibration** をクリックします。
4. 画面上の指示に従い、Leader と Follower の中央位置と関節の可動範囲を順番に確認します。

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-manual-calibration-soarm-en.webp)


<figcaption>手動キャリブレーション</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-calibration2-soarm-en.webp)


<figcaption>手動キャリブレーション</figcaption>
</figure>

</div>

> キャリブレーション中はテレオペレーションやデータ収集を行わないでください。アームの姿勢が異常な場合、関節が妨げられている場合、またはキャリブレーションが失敗した場合は、直ちにキャリブレーションを停止し、アームの位置と作業空間を確認してから再試行してください。

#### 3.2.4 テレオペレーションの検証

テレオペレーションの検証では、Follower が Leader に正しく追従していることを確認します。方向が逆であったり、遅延が大きすぎたり、動きが途切れたりする場合は、デバイスの役割、シリアルポートのバインディング、およびキャリブレーション結果を確認してください。

1. **Start Teleoperation** をクリックします。
2. Leader を少し動かし、Follower が同期して動くか、同じ方向に追従するか、スムーズに動くかを観察します。
3. 確認後に **End Teleoperation** をクリックし、次の結果を選択します：
   - **Normal:** **Confirm Teleoperation Normal** をクリックします。
   - **Abnormal:** **Abnormal, Return to Recalibrate** をクリックします。

![Teleoperation verification](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-4-teleoperation-soarm-en.webp)

> **重力補償（オプション）**
> アームには重量があるため、Follower を手動で調整するには力が必要になる場合があります。重力補償は重量の一部を相殺し、調整を容易にします。調整後およびテレオペレーション検証の前にオフにしてください。重力補償は Follower の調整用であり、Follower を Leader に追従させる機能ではありません。

#### 3.2.5 カメラのバインド

データ収集とモデル学習には 2 台のカメラと 2 つのビューが必要です。取り付け位置に応じて、一般的なレイアウトは次のとおりです：

| レイアウト | 取り付けと目的 | 適したシナリオ | 図解 |
|:---|:---|:---|:---|
| グリッパービュー | **トップビューカメラ：** 作業エリアをカバーするように、作業台前方の上部に取り付けます。<br /><br />**グリッパーカメラ：** 把持の詳細を観察するために、グリッパー付近に取り付けます。 | グリッパーと物体の接触を観察する必要がある精密な操作。 | ![Gripper-view layout](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-in-hand-soarm-en.webp)<br /><small>*注：独自の 3D カメラマウントを設計してもかまいません。*</small> |
| サイドビュー補助 | **トップビューカメラ：** 作業エリアをカバーするように、作業台前方の上部に取り付けます。<br /><br />**サイドビューカメラ：** アームの高さとグリッパーの動きを観察するために、作業台前面の側面に取り付けます。 | 把持、搬送、配置などのタスク。 | ![Side-view assistance layout](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-to-hand-soarm-en.webp) |

このチュートリアルでは、**サイドビュー補助レイアウト** を使用します。2 台のカメラを接続し、取り付けと位置決めを行ってから、次の操作を行います：

1. カメラをコンピュータに接続し、**Rescan** をクリックします。
2. **Front Camera** と **Side Camera** の各エリアで対応するビデオストリームを選択します。
3. 両方のプレビューを確認し、アーム、物体、およびターゲット位置がはっきり見えることを確認します。確認後に **Next** をクリックします。

![Bind the front and side cameras](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-camera-binding-soarm-en.webp)

> 各カメラがその取り付け位置に対応していることを確認するには、**View Camera Layout** をクリックします。プレビューが黒い、または異常な場合は、再スキャン、カメラの再起動、または USB ポートの変更を行ってください。

<span id="action-replay"></span>

### 3.3 アクションリプレイ

**Action Replay** は、Leader ティーチングによってアームの動作を記録し、アクションリストに保存して再生します。記録後、動作が連続しているか、動きの方向およびグリッパーの開閉が正しいかを確認します。

| 機能 | 操作 | 目的 |
|---|---|---|
| アクションを記録 | **+** をクリックしてアクションを作成 → Leader を使用して Follower を制御 → **Stop Recording** をクリックして保存 | 把持、移動、配置の動作を記録 |
| アクションを再生 | **Replay** をクリック | 動作が完全かつ連続していること、動きの方向とグリッパーの動作が正しいことを確認 |

> 初めてアクションを記録する前に、デバイスのセットアップとテレオペレーション検証を完了し、**Confirm Teleoperation Normal** をクリックしてください。再生が異常な場合は、そのアクションを削除して再度記録してください。

![Action list and replay](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-3-action-replay-soarm-en.webp)

<span id="dataset"></span>

### 3.4 データセット

**Dataset** は、収集タスクを作成し、タスクエピソードを記録、確認、クリーンアップ、およびマージするために使用します。切断、ソフトウェアの問題、ビデオのカクつきを早期に発見できるよう、小規模バッチ・複数セッション方式を推奨します。

- まず 1 バッチあたり約 10 エピソードを記録します。
- 2～3 バッチ後、最初の学習用に約 20～30 の有効なエピソードを残します。
- 学習結果に応じて、複雑なタスクにはさらにデータを追加します。

#### 3.4.1 データ収集タスクの設定

**Dataset** → **Collect Data** を開き、タスク情報を入力します。データセットをマージする場合は、タスク説明を完全に同一にする必要があります。A/B 位置、物体カテゴリ、カメラ位置、テーブルの背景、照明はできるだけ安定させてください。

| 項目 | 例 | ガイダンス |
|---|---|---|
| データセット名 | `SO-ARM101 pick-and-place A-to-B-01` | 「デバイス + タスク + バッチ」の命名を使用 |
| タスク説明 | `Move the object from the left to the right` | タスクの目標を明確に記述すること；マージ時には説明が完全に一致している必要があります |
| エピソード数 | `10` | 各エピソードで 1 回のタスクを完了 |
| エピソードあたりの時間 | `20`～`30` 秒 | 完全な動作をカバー |
| 休止時間 | `5` 秒 | アームとシーンをリセット |

![Configure a data-collection task](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-1-dataset-config-soarm-en.webp)

#### 3.4.2 タスクエピソードの記録

各エピソードでは、ポイント A で物体を把持し、ポイント B に移動して解放するまでの一連のプロセスを完全に記録する必要があります。手順は一貫させ、より高い汎化が必要な場合のみ、位置、角度、動きに小さな変化を加えてください。

1. 物体をポイント A に置き、初期姿勢を確認してから **Start Recording** をクリックします。
2. Leader を使用して Follower をタスクに沿って制御し、その後アームを初期姿勢に戻します。
3. タスク完了後、残り時間を待つか、➡ をクリック（または Space キーを押して）してエピソードを早めに終了します。
4. 休止時間中に、物体をポイント A に戻し、次のエピソードに向けてアームを準備します。

![Record task episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-2-recording-episode-soarm-en.webp)

> **重要**
> - 収集前にカメラを固定してください。アーム、グリッパー、物体、およびポイント A と B が両方のビューで常に見える状態を保ってください。
> - 重要な動作が遮られたり、カメラビューの外に出たりしないようにしてください。
> - タスクが失敗した場合、物体がしっかり保持されていない場合、動画がカクつく場合、またはカメラが遮られている場合は、**Record Again** をクリックするか `Esc` を押して収集を停止します。
> - まずバッチを完了してから、異常なエピソードを確認して削除できます。
> - 制御不能や衝突の危険がある場合は、直ちに停止してください。

#### 3.4.3 データの確認、削除、およびマージ

収集後に異常なエピソードを確認し、無効なデータを削除し、必要に応じて互換性のあるデータセットをマージします。

| 操作 | 方法 | 説明 |
|---|---|---|
| 異常なエピソードの確認 | エピソードを選択し、動画またはアクションリプレイを再生 | タスクの完了状況とグリッパーの動きを確認 |
| 異常なエピソードの削除 | **Batch Delete Episodes** をクリックし、エピソードを選択して確認し、**Generate Deleted Copy** をクリック | 新しいデータセットの名前を変更します。元のデータセットは上書きされません |
| データセットのマージ | **Merge** をクリックし、データセットを選択して新しいデータセット名を入力 | タスク説明、デバイス構成、カメラ構成が一致するデータセットをマージ |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![データセットの確認](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-check-soarm-en.webp)


<figcaption>データセットの確認</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![異常なエピソードの削除](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-delete-soarm-en.webp)


<figcaption>異常なエピソードの削除</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![データセットのマージ](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-merge-soarm-en.webp)


<figcaption>データセットのマージ</figcaption>
</figure>

</div>

<span id="training"></span>

### 3.5 トレーニング

トレーニングは、ティーチングデータからアクションモデルを生成します。SenseCraft Robotics は記録されたタスクデータを読み取り、アームがターゲットアクションをどのように実行するかを解析し、自律動作用のモデルを生成します。

| パラメータ | オプション / 値 | 詳細 |
| :--- | :--- | :--- |
| **Training hardware** | Cloud · automatically select GPU | クラウドサーバーを使用し、対応するクレジットを消費します。 |
| | Local · free | 現在のコンピュータを使用し、互換性のあるローカル GPU が必要です。 |
| **Training dataset** | 対象データセットを選択 | 記録および準備済みのデータセットを選択します。 |
| **Policy** | ACT | 現在のデフォルトのアクション制御ポリシーです。 |
| **Training steps** | `10000` | 初期値として推奨されます。結果に応じて調整してください。 |

> **クレジットに関する注意**
> クラウドトレーニングはクレジットを消費します。ローカルトレーニングはクラウドトレーニングクレジットを消費しません。クレジット情報については [Credit rules](/ja/sensecraft_robotics/#クレジット) を参照してください。

**推奨トレーニングステップ数とエピソード数：**

| タスク難易度 | タスク説明 | 推奨エピソード数 | 推奨ステップ数 |
|---|---|---:|---:|
| 初級 | 固定されたポイント A からポイント B | 約 20 | 10,000–15,000 |
| 中級 | ランダムな位置での把持と配置 | 約 50 | 30,000–40,000 |
| 上級 | 複数ステップまたは長時間タスク | 約 100 | 80,000–100,000 |

> **トレーニング時間：** 合計トレーニング時間は、選択した GPU モデルとトレーニングステップ数に依存します。例えば、クラウドで 20,000 ステップの場合、多くの GPU では数分から数十数分かかることがあります。100,000 ステップではその約 5 倍の時間がかかります。

設定を確認したら **Start Training** をクリックします。進行状況と履歴は **Current Training Tasks** で確認できます。

![トレーニング設定](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-5-training-soarm-en.webp)

<span id="model"></span>

### 3.6 モデル

**Model** では、トレーニング結果を確認し、動作に使用するモデルを選択します。トレーニングが完了していること、およびタスクとデバイス構成が現在のプロジェクトと一致していることを確認してください。

![モデル一覧](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-6-model-soarm-en.webp)

<span id="run"></span>

### 3.7 運用

**Operation** では、トレーニング済みモデルをアームにロードし、タスクを正しく完了できるかを検証します。

1. **モデルを選択：** 現在のアームをサポートしているとマークされたモデルを選択します。
2. **推論方法を選択：** **Cloud Inference** または **Local Inference** を選択し、対応するパラメータを設定します。
3. **推論を開始：** 設定を確認し、**Start Cloud/Local Inference** をクリックします。

**クラウド推論とローカル推論の主な違い：**

| 比較項目 | クラウド推論 | ローカル推論 |
| :--- | :--- | :--- |
| **計算ハードウェア** | 高性能なクラウド GPU を使用します。 | ローカル CPU を使用します。現在のプラットフォームはローカル GPU をサポートしていません。 |
| **性能への影響** | 結果はネットワーク伝送品質に大きく依存します。 | 結果はローカル CPU の性能に依存します。 |
| **パラメータ** | **Action count（デフォルト 120）：** 1 回の推論あたりの予測アクションステップ数。<br />**Chunk threshold（デフォルト 0.9）：** 滑らかさと精度に影響します。値が高いほど慎重になり、一時停止する場合があります。値が低いほど動きは滑らかになりますが、誤差が増える可能性があります。 | **Run count：** タスクを繰り返し実行する回数。<br />**Time limit per run：** 1 回の実行の最大時間。タイムアウト時に自動的に終了します。 |
| **データ出力** | 推論検証のみを実行します。 | 動作終了後、推論実行から自動的にデータセットを生成します。 |
| **コストと制限** | プラットフォームのルールに従います。計算能力は素早く始めるのに適しています。 | 通常クラウドクレジットは不要ですが、ローカル CPU の性能に制限されます。 |

**注意事項**

- 運用前に、アームが正しく接続されていることと、作業空間が安全であることを確認してください。
- 運用中は、アームの接続を外したり分解したりしないでください。アームの動きを観察してください。
- 結果に満足できない場合は、**Dataset** に戻り、異常なエピソードを削除して有効なデータを追加し、再度トレーニングしてください。
![モデル運用インターフェース](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-inference-soarm-en.webp)
![モデル運用インターフェース](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-run-soarm-en.webp)
