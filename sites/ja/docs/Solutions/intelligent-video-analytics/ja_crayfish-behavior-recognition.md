---
description: '水産養殖高密度水槽におけるザリガニ争闘・行動認識エンジニアリングドキュメント：4段階ファネルパイプライン、8フレーム時系列モザイクネットワーク、多フレーム性別投票分類、solution-cliによる自動デプロイ、モデルとランタイムマトリクス、MQTT/WSプロトコルおよびエッジ現場実測データ'
title: '水産ザリガニ争闘行動認識：4段階ファネルパイプラインとエッジ実測性能'
sidebar_label: '水産ザリガニ争闘・行動認識'
keywords:
  - ザリガニ争闘認識
  - 水産養殖 AI
  - オーストラリアレイククレイフィッシュ
  - solution-cli
  - reCamera Pro
  - SG2002 cvimodel
  - 時系列行動分類
  - YOLO11
  - 共食い早期警告
  - MQTT
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png
slug: /solutions/crayfish-behavior-recognition
sidebar_position: 2
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/ja/solutions/crayfish-behavior-recognition/
generated_from: sensecraft-solutions@crayfish_behavior_recognition
---

:::caution[利用上の注意]
養殖モニタリングおよび早期警報を目的とした補助システムであり、全自動制御・完全遮断型の産業安全装置ではありません。既存の水質・溶存酸素センサーや自動給餌システムと連携して運用することを推奨します。
:::

## このソリューションでできること

### システム構成と機器トポロジー

![水産ザリガニ争闘行動認識システム構成図](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/architecture-en-5ac111ce.png)

稼働に必要なのは2系統のみです。映像取得と推論を行うスマートエッジカメラと、イベントを受信する養殖監視システムです。カメラとダッシュボードは標準ネットワークプロトコルで接続され、高価な集中型GPUサーバーは不要です。

閉鎖循環式陸上養殖（RAS）や親海老の飼育・繁殖水槽において、レッドクロウ（オーストラリアレイククレイフィッシュ）は脱皮期に個体同士の争闘により鋏の脱落や共食い（カニバリズム）を起こしやすい性質があります。**水槽上部に設置されたスマートエッジカメラがすべての個体をローカルでリアルタイム追跡**し、2尾が接近して攻撃行動を開始した場合、**システムは8フレームの時系列内で攻撃を判定・確定し、MQTT経由で養殖監視ダッシュボードへ通知**します。作業員による迅速な隔離や給餌介入を促し、欠損率と死亡率を低減します。

- オープンソース実装：[github.com/suharvest/crayfish-fight](https://github.com/suharvest/crayfish-fight)
- 機器選定と導入手順：[実機導入ガイド（ハードウェア選定とデプロイ手順）](https://www.seeed.co.jp/solutions/reference-designs/crayfish_behavior_recognition/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>4段階ファネル階層型推論</h3>
                <p>物体検出 → 接近トリガー → 単フレーム粗スクリーニング → 8フレーム時系列確認。段階的に無駄な演算の90%以上を排除し、エッジ側の軽量NPUでも高スループットを維持します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>時系列モザイクによる2D見かけ重なりの排除</h3>
                <p>連続する8フレームの相互作用領域を1枚の時空間モザイク画像に統合し軽量CNNへ入力。水中の斜め見下ろし視角特有の透視投影による誤検知を解消します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.199l-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>多フレーム多数決による雌雄判別</h3>
                <p>画角内に進入した初期10フレームから鋏の形態を自動抽出し性別を判定（Top-1精度 82.0%）。水槽ごとの雌雄構成比率を自動算出します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 00-2.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>オンデバイス完全自律動作とIP67防水</h3>
                <p>NPU/TPUを内蔵しPoEケーブル1本で給電可能。外部ネットワークが切断された状態でも、ローカル録画と争闘イベントキャッシュを維持します。</p>
            </div>
        </li>
    </ul>
</div>

### 実機デモ表示

水槽上部カメラの出力画面：視野内の各個体にByteTrackでトラッキングIDと性別推定ラベル（例：`#3 male 91%`）を付与し、`#2` と `#5` が組み合って争闘を開始すると、争闘領域に赤枠トラッキングボックスを表示し `FIGHT (temporal confirmed)` と記録します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png" alt="陸上養殖水槽における争闘認識実機デモ：マルチオブジェクトトラッキング、雌雄判定、争闘領域ハイライト"/>
</div>

---

## 必要なハードウェア

現場では防水一体型スマートカメラを選定し、養殖施設のローカルLANに接続します。

| | デバイス選定 | スペックと構成 | 選定基準 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>4K大型センサー + 3 TOPS NPU | Rockchip RV1126B · 3 TOPS NPU<br/>2GB RAM · Linux 5.10 | **推奨第1候補**。広幅水槽や大型養殖池向け。4段階ファネルと8フレーム時系列モザイクネットワークの全パイプラインを実行 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>1/2.8" センサー + 1 TOPS TPU | SOPHGO SG2002 · 1 TOPS TPU<br/>512MB RAM · C++ ネイティブランタイム | **量産コスト重視向け**。標準規格の小型水槽への多数設置。超低消費電力・PoE単線デプロイに最適 |

---

## 現場での導入手順

### 1. 設置仕様と撮影条件
- **設置高さと撮影画角**：水槽水面上 **0.8〜1.5 m**、垂直見下ろし（俯角 80°〜90°）が最適；
- **水深と透明度**：推奨水深 20〜80 cm、透明度 ≥ 25 cm。エアレーション気泡がカメラ直下に当たらないよう配置；
- **照明環境**：水槽上部に拡散型LED（照度 ≥ 100 Lux）を設置し、水面の波立ちによる高周波反射グレアを低減。

### 2. ソフトウェア導入：公式推奨ツールによるデプロイ

本ソリューションはSeeedの自動化デプロイエコシステムに対応しており、CLIツールの **`solution-cli`** を使用した自動選型診断とエッジ配信を推奨します。管理コンソールGUIからの操作にも対応しています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/crayfish_behavior_recognition/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>実機導入ガイドを開く 🖱️</font></span></strong>
    </a>
</div><br />

#### 推奨手法：`solution-cli` による自動デプロイと環境診断（CLI）
`solution-cli` は、産業ソリューションおよびエッジAIデバイス向けの公式デプロイツールキットです（[実機導入ガイド](https://www.seeed.co.jp/solutions/reference-designs/crayfish_behavior_recognition/deploy)参照）。コンテナ手動設定不要で、わずか3ステップで配備が完了します。

```bash
# 1. solution-cli の確認とインストール（初回のみ）
npm install -g @seeed-studio/solution-cli
# または npx 経由で直接実行：npx @seeed-studio/solution-cli doctor

# 2. 環境診断とデバイススキャン（同一LAN内の reCamera を自動探索）
solution-cli doctor
solution-cli device scan

# 3. パッケージ情報の確認とエッジデバイスへの一括デプロイ
solution-cli hub get crayfish_behavior_recognition --locale en
solution-cli deploy --solution crayfish_behavior_recognition --target recamera --host 192.168.42.1
```
> **ヒント**：Claude Code、Codex、Antigravity などのAIアシスタントをご利用の場合、組み込みの `solution-cli` スキルを活用して「*水槽上部の reCamera Pro に crayfish_behavior_recognition をデプロイして*」と指示することで、環境チェックと推論エンジンの登録を全自動で実行できます。

#### 代替手法：GUIコンソールからのインストール（SenseCraft Web / App Center）
1. ブラウザで `http://<camera_ip>` にアクセスし、デバイス管理画面を開きます。
2. **App Center** で `crayfish_behavior_recognition` を検索します。
3. **Install** をクリックすると、検出器と時系列分析パイプラインが自動配備されます。
4. 設定画面で養殖場の MQTT Broker アドレス（例：`192.168.1.100:1883`）を入力しサービスを開始します。

---

## アルゴリズム構成：4段階ファネルと時系列モザイク

```
カメラ入力 (1080p @ 10-15fps)
   │
   ▼ [Stage 1] 個体検出   YOLO11n (640×640) → ザリガニ Bounding Box + ByteTrack 多個体追跡
   │
   ▼ [Stage 2] 接近トリガー 2尾の中心間距離 < 1.1×体長 または IoU > 0 が 3フレーム以上継続
   │                      相互作用領域を20%マージンでクリップしてROI化
   │
   ▼ [Stage 3] 単フレーム粗選 YOLO11n-cls (224×224) 高速2値分類により通常遊泳を即座に除外
   │
   ▼ [Stage 4] 時系列確認  YOLO11n-cls (448×448 モザイク)、8フレームの相互作用ROIをCNNへ入力
   │                      見下ろし視角における2D透視投影の偽接触を完全除去
   │
   ▼ イベント出力         状態遷移（start / change / end）時のみ MQTT / WebSocket で通知
```

### 並行ブランチ：雌雄分類器
新たに生成されたTrack IDの初期10フレームから鋏と腹部を切り出し、YOLO11n-cls（128×128）で多フレーム投票を実施。`male` / `female` / `unknown` を出力し、Top-1 精度 **82.0%** を達成しています。

---

## 性能と実測データ

検証データセットは、養殖現場の水槽から取得した 2,000フレーム以上の実写注釈付き検証セットに基づきます（水面反射・ピンボケ増強15%を含む）：

### 1. 検出および分類精度
| モデル名 | 入力解像度 | タスク | 実測指標 | 実行環境 |
|---|---|---|---|---|
| `det_v2_n` | 640×640×3 | 個体検出 | **mAP50: 0.950** (P: 0.914, R: 0.880) | RV1126B RKNN / SG2002 TPU |
| `behavior_temporal`| 448×448×3 | 8フレーム時系列争闘確認 | **Recall: 0.950** (Precision: 0.905) | RV1126B RKNN INT8 |
| `behavior_cls` | 224×224×3 | 単フレーム粗スクリーニング | Recall: 0.775, Precision: 0.816 | RV1126B RKNN / SG2002 TPU |
| `sex_cls` | 128×128×3 | 雌雄判定 | **Top-1: 0.820** (10フレーム投票) | RV1126B RKNN / SG2002 TPU |

### 2. ハードウェア別スループット
- **reCamera Pro**：**10〜15 FPS**（4段階ファネル全閉ループ実行時、CPU負荷 ~18%）；
- **reCamera 2002**：**12〜15 FPS**（検出 + 粗選スクリーニング実行時、CPU負荷 ~25%）。

---

## データインターフェースとプロトコル

### 1. 養殖中控ダッシュボードおよび自動給餌連動 (MQTT)
- **Broker**：`mqtt://<camera_ip>:1883`
- **Topic**：`crayfish/tank/<tank_id>/event`
- **争闘アラートメッセージ例**：
```json
{
  "timestamp": 1793339665200,
  "tank_id": "RAS_04",
  "event_type": "FIGHT_CONFIRMED",
  "severity": "CRITICAL",
  "actors": [
    {"track_id": 2, "sex": "male", "box": [210, 140, 320, 260]},
    {"track_id": 5, "sex": "unknown", "box": [260, 160, 370, 280]}
  ],
  "duration_sec": 4.5
}
```

### 2. 性別および個体密度統計レポート
- **Topic**：`crayfish/tank/<tank_id>/stats`
- **定期通知**：水槽内の総個体数、雌雄比率、争闘頻度を1時間ごとに集計送信し、飼育管理システムの水質調整や投餌スケジュール最適化に活用されます。
