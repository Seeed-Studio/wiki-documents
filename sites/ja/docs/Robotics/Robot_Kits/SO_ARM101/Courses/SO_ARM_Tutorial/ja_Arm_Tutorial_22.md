---
description: "SO-ARM Physical AI ビギナーコース第 22 章 — ノーコード VLA パス：SenseCraft Robotics でアームを接続・キャリブレーションし、テレオペレーションを確認し、カメラをバインドし、データを収集・洗浄し、クラウドまたはローカルで訓練して推論を実行 — 端末も訓練 GPU も不要です。"
title: 第 22 章 - SenseCraft Robotics のノーコード VLA
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SenseCraft Robotics
  - ノーコード
  - VLA
  - 訓練
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_22
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_22/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 4 · 第 22 章 · 実践</span>
    <h2>22. SenseCraft Robotics のノーコード VLA</h2>
    <p>
      ノーコード VLA パス：SenseCraft Robotics でアームの接続とキャリブレーション、テレオペレーションの確認、カメラのバインド、データの収集と洗浄、クラウド / ローカル訓練、推論まで — 端末も訓練 GPU も不要です。
    </p>
    <div className="hero-actions">
      <a href="#prepare">準備</a>
      <a href="#connect">接続</a>
      <a href="#dataset">収集</a>
      <a href="#operation">運用</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章の対象</strong>
    <span>すべての人 — 特に訓練 GPU のない読者へ。</span>
    <span>第 11 章と同じタスク（A でつかみ B へ置く）、同じ理論 — Python は不要です。</span>
    <span>6 ステップのガイド付きワークフローが端末を置き換えます。</span>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ コード不要 · 環境構築不要</span>
    <p className="sensecraft-banner__title">セットアップをスキップして — reBot Arm と LeRobot を 1 つのアプリから実行</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics は、SO-ARM101、reBot Arm 102 + B601-RS および B601-DM 向けの Seeed のノーコードプラットフォームです。アームを接続し、キャリブレーションを行い、デモを収集し、ガイド付きインターフェースから学習と推論を実行できます — Python 環境もターミナルも不要です。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 ステップのガイド付きワークフロー</li>
      <li>✅ クラウド学習 — ローカル GPU 不要</li>
      <li>✅ Windows / macOS クライアント</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">SenseCraft Robotics へ移動 ↗</a>
    <a className="sensecraft-banner__link" href="/ja/sensecraft_robotics/">ソフトウェアガイド</a>
  </div>
</div>

:::tip
SenseCraft Robotics は SO-ARM101（および reBot シリーズ）向けの Seeed のノーコードプラットフォームです。ガイド付き UI でアームの接続、キャリブレーション、教示データの収集、訓練、推論まで行えます — Python 環境も端末も不要。本章はステージ 3〜4 で行ったすべての GUI 対応版です。
:::

<a id="overview"></a>

## 22.1 準備

<section id="prepare" className="section-card">
  <div className="section-title">
    <span>準備</span>
    <h2>22.1 準備</h2>
  </div>

### ハードウェア

![SO-ARM101 Pro ハードウェア一覧](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-1-hardware-list-soarm-en.webp)

| 項目 | リーダー | フォロワー |
| :--- | :--- | :--- |
| アーム | 組み立て済み黒リーダー ×1 | 組み立て済み白フォロワー ×1 |
| LeRobot サーボ制御ボード | ×1 | ×1 |
| 電源ケーブル | 5V ×1 | Pro：12V ×1、スタンダード：5V |
| データケーブル | USB-C ×1 | USB-C ×1 |
| 固定クランプ | ×2 | ×2 |

共通品：フレキシブルグリッパ部品、**32 × 32 mm USB カメラ 2 台**（キットに 1 台付属、もう 1 台は別途 — 訓練データには 2 視点が必要です）、ドライバー、マウスパッド。

> アームは組み立て・固定・給電・USB 接続済みである必要があります。未完了の場合は [第 6 章](/ja/robotics/soarm_physical_ai_course_chapter_6/) へ戻ってください。

### PC とソフトウェア

- Windows または macOS。ローカル訓練には互換 GPU が必要；
- ダウンロード・ログイン・クラウド訓練・推論のための安定したネットワーク；
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) をインストールし、[SenseCraft アカウント](https://account.seeed.cc/login)でログイン済みであること。

### シーンと安全

- テーブルに 2 つの固定位置をマーク：A 点は物体の開始位置、B 点は目的地；
- 掴みやすい適度なサイズの物体（赤いブロックや柔らかい物）を準備；
- A 点・B 点・両アーム・物体がカメラ映像に見え、遮蔽されていないことを確認；
- 作業領域から人・雑物・ケーブル・壊れやすい物を撤去。リーダーをフォロワーから離し、フォロワーのカメラ視野外に置く。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp" alt="タスクシーンと安全の例" />
</div>

:::note
インターフェース名・ボタン位置・訓練バックエンドは SenseCraft Robotics のバージョンにより変わる可能性があります。シリアルポートやデータセット名は例です — 常に現在の PC が検出したデバイスを使用してください。
:::

</section>

## 22.2 アームの接続

<section id="connect" className="section-card">
  <div className="section-title">
    <span>接続</span>
    <h2>22.2 アームの接続</h2>
  </div>

:::warning
安全上の注意：アームの取り付け・接続・取り外しの前に電源を切ってください。通電前に、アームが固定され、ケーブルが正しく、作業領域が空であることを確認。通電中の電源インターフェース抜き差しは厳禁です。
:::

**アーム本体の取り付け。** リーダーとフォロワーを安定したテーブルに置き、各アームをクランプ 2 個で固定。アーム間に安全距離を確保。電源オフの状態で各関節を手でゆっくり回し、衝突や引っかかりなく滑らかに動くことを確認。

![アーム本体の取り付け](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-1-install-arm-body-soarm-en.webp)

**制御ボードの取り付け。** 各アームに 1 枚の LeRobot サーボ制御ボードを取り付け：ベースのスロットに合わせ、コネクタの向きを確認して確実に装着。すべてのサーボケーブルが奥まで挿さっているか、鋭く折れたり挟まれたりしていないかを確認。

**データケーブルの接続。** リーダー → USB-C → PC。フォロワー → USB-C → PC。シリアル識別を容易にするため、アーム側を先に接続し、PC 側は 22.3 のバインド手順で 1 本ずつ挿します。

![制御ボードの取り付け](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp)

**電源インターフェースの取り付けと通電。** アダプターを AC から外した状態で：各 DC ケーブルを挿入しロックリングを右回しで締める。Pro = リーダー 5V / フォロワー 12V、スタンダード = 両方 5V — 電圧を混在させない。ケーブルを関節の可動範囲から遠ざける。その後電源を接続し、制御ボードのインジケータを確認し、USB-C（データ）と DC（電源）の両方が接続済みであることを確認。

![電源インターフェースの取り付け](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-3-install-power-interface-soarm-en.webp)

</section>

## 22.3 アプリでのデバイス設定

<section id="device-setup" className="section-card">
  <div className="section-title">
    <span>デバイス設定</span>
    <h2>22.3 アプリでのデバイス設定</h2>
  </div>

ログイン後、**プロジェクト** → **新規プロジェクト**を開き、名前と説明を入力して作成。プロジェクト概要はデバイス設定・アクション再生・データセット・訓練・モデル・運用への入口を提供します。「未設定」または「未接続」と表示されたら**デバイス設定へ移動**をクリック。

![プロジェクトの作成](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-create-project-soarm-en.webp)

### デバイスモデルの選択

**デバイスペアリング**で **SO-ARM101 + SO-ARM101** を選択し、**次へ**でシリアルポートをバインドします。

![SO-ARM101 + SO-ARM101 の選択](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-1-device-pairing-soarm-en.webp)

### USB シリアルポートのバインド

1. **初回スキャン**：両アームの USB ケーブルを抜き、**再スキャン**をクリック、表示されたポートを記録；
2. **リーダーのバインド**：リーダーを接続し、**再スキャン**、新しく現れたポートをリーダーに割り当て；
3. **フォロワーのバインド**：フォロワーを接続し、**再スキャン**、新しいポートをフォロワーに割り当て；
4. 両方が**接続済み**と表示され → **次へ**。

![リーダーとフォロワーのポートバインド](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-2-serial-binding-soarm-en.webp)

:::tip
シリアルポートのトラブル対処：各スキャン後は**新しく現れたポート**だけをバインド — COM 番号だけでデバイスを判断しない。ポートが表示されない場合は USB を挿し直して再スキャン。1 つしか表示されない場合は、もう一方のケーブルとアームの電源を確認。
:::

### アームキャリブレーションの検証

画面例の中間姿勢へリーダーとフォロワーを動かし、作業領域を清空します。2 つのモード：

- **自動キャリブレーション** — システムが各関節の可動域を自動で識別します。すべての関節に確実な物理ストッパーが必要。負荷を外し、両アームをほぼ垂直に揃え、確認チェックボックスにチェックを入れ、**キャリブレーション開始**を押して完了を待ちます；
- **手動キャリブレーション** — ストッパーが不確かな関節や、段階的に確認したい場合：リーダーを通電したまま各関節を可動域の中央へ動かし、**キャリブレーション開始**を押し、画面の指示に従って両アームの関節の中位と可動域を順に確認します。

> キャリブレーション中はテレオペレーションやデータ収集を行わないでください。姿勢が異常・関節が引っかかる・キャリブレーションが失敗する場合は、直ちに停止し、アームと作業領域を確認して再試行してください。

### テレオペレーションの検証

1. **テレオペレーション開始**をクリック；
2. リーダーを少し動かす — フォロワーが同期的に、同じ方向へ、滑らかに追従する必要があります；
3. **テレオペレーション終了**を押し、**テレオペレーション正常を確認**（または**異常、再キャリブレーションへ戻る**）を選択。

![テレオペレーションの検証](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-4-teleoperation-soarm-en.webp)

:::tip
**重力補償（任意）**：アームには自重があり、手でフォロワーを調整するのは労力が必要です。重力補償は重量の一部を相殺して調整を楽にします — 調整後、テレオペレーション検証の前に**オフ**にしてください。これは手動移動の補助であり、フォロワーがリーダーに追従する機能ではありません。
:::

### カメラのバインド

2 台のカメラ・2 視点が必要です。一般的なレイアウト（第 12 章で同じ選択を検討）：**グリッパ視点**（俯瞰 + グリッパカメラ、接触を見る精密作業向け）または**側面補助**（俯瞰 + 側面、把持・搬送・配置向け — 本コースが採用）。

1. 両カメラを接続し、**再スキャン**をクリック；
2. ストリームを**前面カメラ**と**側面カメラ**に割り当て；
3. 両プレビューを確認：アーム・物体・目標位置がはっきり見える → **次へ**。

![前面と側面カメラのバインド](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-camera-binding-soarm-en.webp)

</section>

## 22.4 アクション再生（任意のウォームアップ）

<section id="action-replay" className="section-card">
  <div className="section-title">
    <span>再生</span>
    <h2>22.4 アクション再生（任意のウォームアップ）</h2>
  </div>

**アクション再生**はリーダー教示でアーム動作を記録し、アクションリストに保存して再生します — データセットに本格着手する前の動作確認に便利です：

| 機能 | 操作 | 目的 |
| :--- | :--- | :--- |
| アクションの記録 | **+** をクリック → リーダーで教示 → **記録停止** | 把持・移動・配置の動作を記録 |
| アクションの再生 | **再生**をクリック | 連続性・方向・グリッパ開閉の正しさを確認 |

![アクションリストと再生](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-3-action-replay-soarm-en.webp)

</section>

## 22.5 データセット：設定・収集・洗浄

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>データセット</span>
    <h2>22.5 データセット：設定・収集・洗浄</h2>
  </div>

第 11 章の計画と同じく、小バッチ・複数セッション方式を推奨します：1 バッチ約 10 エピソード。2〜3 バッチ後に最初の訓練用に有効な 20〜30 本を残し、複雑な変種は後から追加します。

### データ収集タスクの設定

**データセット** → **データ収集**を開き、タスク情報を入力：

| フィールド | 例 | ガイダンス |
| :--- | :--- | :--- |
| データセット名 | `SO-ARM101 pick-and-place A-to-B-01` | 「デバイス + タスク + バッチ」の命名 |
| タスク記述 | `Move the object from the left to the right` | 目標を明確に。**統合時は記述が完全一致必須** |
| エピソード数 | `10` | 1 エピソードが 1 回の完全なタスク |
| 1 エピソードの長さ | `20`〜`30` 秒 | 完全な動作をカバー |
| 休憩時間 | `5` 秒 | アームとシーンのリセット |

![データ収集タスクの設定](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-1-dataset-config-soarm-en.webp)

### タスクエピソードの記録

各エピソードは「A 点で把持 → 運搬 → B 点でリリース」の完全な流れを記録します。手順は一貫させ、より強い汎化が必要になった場合にのみ小さな位置・角度の変化を加えます。

1. 物体を A 点に置き、初期姿勢を確認、**記録開始**をクリック；
2. リーダーでタスクを実行し、アームを初期姿勢へ戻す；
3. 残り時間を待つか、➡（またはスペース）で早期終了；
4. 休憩中に物体を A 点へ戻し、次のエピソードの準備。

![タスクエピソードの記録](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-2-recording-episode-soarm-en.webp)

:::note
重要：
- カメラを固定。アーム・グリッパ・物体・A/B 点が両視界に常に見えていること；
- 重要な動作が遮られたり画面外に出ないように；
- 失敗・物体落下・動画のカクつき・カメラ遮蔽時は — **再記録**をクリックするか `Esc` で停止；
- まずバッチを完走し、後から異常エピソードを検査・削除しても構いません；
- 制御不能や衝突のリスクがあれば直ちに停止。
:::

### 検査・削除・統合

| 操作 | 方法 |
| :--- | :--- |
| エピソードの検査 | エピソードを選択し、動画 / アクション再生を再生。タスク完了度とグリッパ動作を確認 |
| 異常エピソードの削除 | **一括エピソード削除** → 選択 → 確認 → **削除コピーを生成**（元データセットは上書きされない） |
| データセットの統合 | **統合** → データセット選択 → 新名称入力（タスク記述・デバイス構成・カメラ構成が一致している必要あり） |

![データセットの検査](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-check-soarm-en.webp)

</section>

## 22.6 訓練

<section id="training" className="section-card">
  <div className="section-title">
    <span>訓練</span>
    <h2>22.6 訓練</h2>
  </div>

訓練は教示データからアクションモデルを生成します — 第 15 章の GUI 版です。

| パラメータ | 選択肢 / 値 | 詳細 |
| :--- | :--- | :--- |
| **訓練ハードウェア** | クラウド · GPU 自動選択 | クラウドサーバー。対応するクレジットを消費 |
| | ローカル · 無料 | 現在の PC。互換性のあるローカル GPU が必要 |
| **訓練データセット** | 対象データセットを選択 | 22.5 で洗浄したデータセット |
| **ポリシー** | ACT | 現在のデフォルトのアクション制御ポリシー |
| **訓練ステップ数** | `10000` | 初期値。結果に応じて調整 |

推奨ステップ数とエピソード数（第 11 章の指針と一致）：

| タスク難度 | タスク内容 | エピソード数 | ステップ数 |
| :--- | :--- | :---: | :---: |
| 初級 | 固定 A 点から B 点 | 約 20 | 10,000〜15,000 |
| 中級 | ランダム位置での把持と配置 | 約 50 | 30,000〜40,000 |
| 上級 | 複数ステップまたは長時間 | 約 100 | 80,000〜100,000 |

訓練時間は GPU 型番とステップ数によります — クラウドの 20,000 ステップは数分〜数十分、100,000 ステップは約 5 倍です。設定を確認して**訓練開始**をクリックし、**現在の訓練タスク**で進捗を確認します。

![訓練の設定](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-5-training-soarm-en.webp)

</section>

## 22.7 モデルと運用（推論）

<section id="operation" className="section-card">
  <div className="section-title">
    <span>運用</span>
    <h2>22.7 モデルと運用（推論）</h2>
  </div>

**モデル**で訓練結果を確認。タスクとデバイスの組合せが現在のプロジェクトと一致していることを確かめます。そして**運用**でモデルをアームにロードします：

1. 現在のアームをサポートと表示されたモデルを選択；
2. 推論方法を選択：クラウド推論またはローカル推論；
3. **推論開始**を押してタスクの実行を見守ります。

![モデルリスト](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-6-model-soarm-en.webp)

**クラウド推論とローカル推論の比較：**

| 比較項目 | クラウド推論 | ローカル推論 |
| :--- | :--- | :--- |
| **計算** | 高性能クラウド GPU | ローカル CPU（現在のプラットフォームはローカル GPU 非対応） |
| **性能の依存先** | ネットワーク品質 | ローカル CPU 性能 |
| **パラメータ** | アクション数（デフォルト 120）：1 推論あたりの予測アクション数。チャンク閾値（デフォルト 0.9）：大きいほど慎重で停止しがち、小さいほど滑らかだが誤差が増しうる | 実行回数。1 回あたりの制限時間（タイムアウトで自動終了） |
| **データ出力** | 推論検証のみ | 実行終了後に推論データセットを自動生成 |
| **コスト** | プラットフォーム規則に従いクレジット消費 | 通常無料。CPU 性能の制約あり |

![モデル運用画面](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-inference-soarm-en.webp)

:::note
運用前に、アームが正しく接続され作業領域が安全であることを確認。運用中はアームを切断・分解しないでください。結果が満足できない場合は**データセット**へ戻る — 異常エピソードを削除し、有効なデータを追加し、再訓練。それが第 16 章のイテレーションループをもう一度回すことです。
:::

</section>

## 22.8 コースの結び

<section id="conclusion" className="section-card">
  <div className="section-title">
    <span>結び</span>
    <h2>22.8 コースの結び</h2>
  </div>

ここまで、あなたは SO-ARM を箱から開けて訓練・展開まで — しかも 2 つの道で — 連れてきました：

- **コードの道（ステージ 2〜3）**：組み立て、キャリブレーション、テレオペレーション、録画、ACT 訓練、評価、イテレーション；
- **VLA の道（ステージ 4）**：自分の GPU パイプラインで GR00T を微調整するか、SenseCraft Robotics で完全ノーコードで走るか。

次の行き先：

- 飛ばした場合は**第 17 章の双腕**を補完；
- [ロボティクス Wiki](https://wiki.seeedstudio.com/ja/robotics_page/) でより広い SO-ARM エコシステムへ：Jetson Thor 上の GR00T、AmazingHand、Isaac Lab 強化学習、LeIsaac シミュレーション；
- あなた自身のタスク — コース全体はそのための足場にすぎません。

このコースが役に立ったら、GitHub の [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) と [Seeed-Projects/lerobot](https://github.com/Seeed-Projects/lerobot) に Star を頂き、[コース紹介](/ja/robotics/soarm_physical_ai_course_introduction/)のコミュニティで作品を披露してください。

</section>

</div>
