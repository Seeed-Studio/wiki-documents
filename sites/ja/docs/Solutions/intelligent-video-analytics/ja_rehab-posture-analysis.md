---
description: 'エッジ AI リハビリ姿勢・動作分析エンジニアリングドキュメント：33キーポイント解剖学トポロジー再学習モデル、ヒステリシス状態遷移マシン、ROM関節可動域計測、代償動作インターセプトエンジン、手足2次カスケードマイクロモデル拡張、solution-cliによる自動デプロイ、WebSocket/EMRプロトコルおよびエッジ現場実測データ'
title: 'エッジ AI リハビリ姿勢・動作分析：33キーポイント骨格と臨床運動力学評価'
sidebar_label: 'リハビリ姿勢・動作分析'
keywords:
  - リハビリ姿勢分析
  - 33キーポイント検出
  - YOLO11-Pose
  - 運動力学
  - 関節可動域 ROM
  - 代償動作検知
  - 手部カスケードモデル
  - solution-cli
  - reCamera Pro
  - RV1126B RKNN
  - SG2002
  - 生映像ローカル完結
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/cover-93765b27.png
slug: /solutions/rehab-posture-analysis
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/ja/solutions/rehab-posture-analysis/
generated_from: sensecraft-solutions@rehab_posture_analysis
---

:::caution[利用上の注意]
臨床評価を支援するための計測補助ツールであり、医療診断機器ではありません。客観的かつ定量的な運動力学パラメータを提供することを目的としており、医師や理学療法士による専門的診断に代わるものではありません。
:::

## このソリューションでできること

### システム構成とデータフロー図

![エッジ AI リハビリ姿勢・動作分析システム構成図](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/architecture-en-328afea6.png)

深層学習による姿勢推定と臨床運動力学評価を4つの機能ドメインに分離してエッジ側で完結させています。エッジスマートカメラが映像取得と33点キーポイント推論を担当し、ヒステリシス状態遷移マシンがROM可動域計測と代償動作の防振判定を実行します。構造化データはWebSocketとRTSPで現場の大画面HUDへ即時出力され、MQTT/Webhook経由で病院の電子カルテ（EMR）システムとも連携可能です。生映像はカメラ外部へ一切流出せず、患者のプライバシーを保護します。

外来リハビリ室、デイケアセンター、在宅訓練などの現場において、肩関節外転やスクワット動作を行う患者に対し、**エッジ一体型カメラが全身33点の骨格キーポイントをローカルでリアルタイム推論**します。筋力不足に伴う肩甲骨のすくみ（肩すくめ）、体幹の側屈、膝の内折れなどの代償動作が発生した際、**画面上のHUDが50ms以内に警告を表示し音声で是正を促す**とともに、客観的な関節可動域（ROM）と有効反復回数を記録・集計します。

- オープンソース実装：[github.com/suharvest/rehab-posture-analysis](https://github.com/suharvest/rehab-posture-analysis)
- 機器選定と導入手順：[実機導入ガイド（ハードウェア選定とデプロイ手順）](https://www.seeed.co.jp/solutions/reference-designs/rehab_posture_analysis/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>33点解剖学骨格トポロジー</h3>
                <p>33点骨格モデルを独自再学習。親指/人差し指/小指および踵/つま先の支持三角形を補完し、従来の17点モデルで課題だった四肢末端の未トラッキングを解消。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
            </div>
            <div class="info-content">
                <h3>ミリ秒精度の代償動作検知</h3>
                <p>3フレーム時系列防振と左右肩峰の高さ偏差比較（&gt;12mm）により、肩すくめや膝の内折れ代償を正確に検出し、不正な回数稼ぎを防止。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>生映像の外部流出ゼロ</h3>
                <p>取得された映像フレームはオンチップのSRAM/DRAM内で推論直後に破棄。出力されるのは座標JSONとアラートのみで、医療プライバシー基準に適合。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>エッジ側 24.0 FPS リアルタイム動作</h3>
                <p>reCamera Pro（RV1126B 3 TOPS）上で 41.7ms の低遅延を達成。大画面HUDの描画追従にも残像や不自然な遅延が発生しません。</p>
            </div>
        </li>
    </ul>
</div>

### 実機デモ表示

実機出力画面：訓練者の全身に33色のキーポイントと解剖学的骨格線がリアルタイム重畳され、左側に現在の可動域角度、右側に運動フェーズ・有効回数・動作品質スコアがリアルタイム表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-rom-en-e95471f2.gif" alt="reCamera Pro上でのリアルタイムリハビリ姿勢追跡：33キーポイント骨格トポロジーとHUD表示"/>
</div>

画面には両腕手首、親指・人差し指・小指、下肢の踵・つま先を結ぶ完全なラインが含まれます。肩をすくめる代償動作が発生すると、肩の結線が赤色に変化してハイライト警告されます：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-compensation-en-d8bd5846.gif" alt="病理学的代償動作の検知：僧帽筋の肩すくめ代償を検出し赤線でアラート通知"/>
</div>

---

## 必要なハードウェア

現場では一体型スマートカメラを1台設置するか、既存カメラとエッジボックスを組み合わせて運用します。

| | デバイス選定 | スペックと構成 | 選定基準 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>4K大型センサー + 3 TOPS NPU | Rockchip RV1126B · 3 TOPS NPU<br/>2GB LPDDR4 | **推奨第1候補**。リハビリ外来、機能訓練施設。24 FPSの高フレームレートと33点骨格の滑らかな追跡を重視 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>1/2.8" センサー + 1 TOPS TPU | SOPHGO SG2002 · 1 TOPS TPU<br/>512MB DDR3 | **高コストパフォーマンス**。地域デイケア、在宅リハビリ向け。低消費電力PoE給電での導入に最適 |

---

## 現場での導入手順

### 1. 設置仕様と撮影条件
- **設置高さ**：**1.2〜1.4 m**（胸の高さの水平アングル）。見下ろし角は 0°〜5° 以内に抑え、天井からの急角度吊り下げは避けてください；
- **有効距離**：立位全身訓練（スクワット、肩外転）はカメラから **2.0〜3.5 m**、座位訓練は **1.5〜2.5 m**；
- **照明条件**：照度 ≥ 150 Lux。逆光となる窓正面の配置は避け、関節位置が視認しやすいフィット感のある運動着を推奨。

### 2. ソフトウェア導入：公式推奨ツールによるデプロイ

本ソリューションはSeeedの自動化デプロイエコシステムに対応しており、CLIツールの **`solution-cli`** を使用した自動選型診断とエッジ配信を推奨します。管理コンソールGUIからの操作にも対応しています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/rehab_posture_analysis/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>実機導入ガイドを開く 🖱️</font></span></strong>
    </a>
</div><br />

#### 推奨手法：`solution-cli` による自動デプロイと環境診断（CLI）
`solution-cli` は、産業ソリューションおよびエッジAIデバイス向けの公式デプロイツールキットです（[実機導入ガイド](https://www.seeed.co.jp/solutions/reference-designs/rehab_posture_analysis/deploy)参照）。コンテナ手動設定不要で、わずか3ステップで配備が完了します。

```bash
# 1. solution-cli の確認とインストール（初回のみ）
npm install -g @seeed-studio/solution-cli
# または npx 経由で直接実行：npx @seeed-studio/solution-cli doctor

# 2. 環境診断とデバイススキャン（同一LAN内の reCamera を自動探索）
solution-cli doctor
solution-cli device scan

# 3. パッケージ情報の確認とエッジデバイスへの一括デプロイ
solution-cli hub get rehab_posture_analysis --locale en
solution-cli deploy --solution rehab_posture_analysis --target recamera --host 192.168.42.1
```
> **ヒント**：Claude Code、Codex、Antigravity などのAIアシスタントをご利用の場合、組み込みの `solution-cli` スキルを活用して「*接続されている reCamera Pro に rehab_posture_analysis をデプロイして*」と指示することで、環境チェックと推論エンジンの登録を全自動で実行できます。

#### 代替手法：GUIコンソールからのインストール（SenseCraft Web / App Center）
1. PCから reCamera の管理用ホットスポットまたはローカルIP（`http://<camera_ip>`）にアクセスします。
2. **App Center** で `rehab_posture_analysis` を検索します。
3. **Install / Run** をクリックすると、ビルド済みINT8モデルが自動取得され常駐起動します。
4. **Open Live HUD** をクリックして、ローカルディスプレイやタブレットでリハビリ画面を開きます。

---

## アルゴリズム構成：33点骨格モデルと従来17点モデルの比較

### 1. 33点骨格トポロジー再学習の理由
一般的なCOCO 17点基準（0:鼻, 1-2:眼, 3-4:耳, 5-6:肩, 7-8:肘, 9-10:手首, 11-12:股関節, 13-14:膝, 15-16:足首）には、リハビリ評価における重大な制約があります：
- **手部末端の欠落**：手首より先に点が存在しないため、前腕の回内・回外（Pronation/Supination）や手の把持開閉が判定できず、肩関節外転時の力点末端が正確に取れません；
- **足底支持三角形の消失**：足首のみでは足底の接地ラインが作れず、スクワット訓練において下肢運動力学の最重要指標である「踵の浮き上がり代償」や「足部内反」を検知できません。

これに対応するため、運動力学データセットに基づき MediaPipe / BlazePose トポロジーに完全準拠した **YOLO11n-Pose 33-Keypoint モデル** を再学習しました：

```
                    0: 鼻先
              1-3: 左眼部   4-6: 右眼部
                 7: 左耳     8: 右耳
                 9: 左口角  10: 右口角
                         │
            11: 左肩 ────┴──── 12: 右肩
             │                  │
            13: 左肘           14: 右肘
             │                  │
            15: 左手首         16: 右手首
         ┌───┼───┐          ┌───┼───┐
     17:小指 19:人指 21:親指 18:小指 20:人指 22:親指
                         │
            23: 左股関節 ─┴──── 24: 右股関節
             │                  │
            25: 左膝           26: 右膝
             │                  │
            27: 左足首         28: 右足首
         ┌───┴───┐          ┌───┴───┐
     29:踵     31:つま先  30:踵     32:つま先
```

### 2. 従来17点モデル vs 33点再学習モデルの比較

| 評価軸 | 従来の COCO 17点モデル | 自社再学習 33点モデル | 臨床リハビリにおける効果 |
|---|---|---|---|
| **末端部位の分解能** | 手首・足首で切断 | 手部6点（親指/人差し指/小指）＋足部4点（踵/つま先） | 指の伸展度を数値化でき、足底支持の力線が完全成立 |
| **代償動作検出率** | 約 68%（肩すくめ・踵浮きを見落としやすい） | **94.2%**（両肩峰の高さ偏差＋足底角度） | 僧帽筋代償やスクワット時のアライメント崩れを高精度検出 |
| **エッジ演算遅延** | 35ms (RV1126B) | **41.7ms** (RV1126B INT8) | 16点追加しても負荷増はわずか 6.7ms、24 FPS のリアルタイム性を維持 |
| **モデルサイズ (INT8)**| 3.8 MB | **4.2 MB** | 極めて軽量で、512MB〜2GB のエッジ組込み環境に最適 |

---

## 開発者向け：拡張機能と2次カスケードモデル構造

本アーキテクチャは、**2段階カスケード（Two-Stage Cascade）推論パイプライン** をサポートしています。全身33点バックボーンをベースに、必要に応じて局所マイクロモデルを追加可能です：

```
パノラマ映像ストリーム (1080p)
   │
   ▼ [Stage 1: 全身骨格検出] YOLO11n-Pose 33点検出器
   │                         全身骨格と各関節の高信頼度 Bounding Box を出力
   │
   ├──▶ 分岐 A: [手指リハビリ拡張] 左右手首の ROI (128×128) をクリップ
   │                              21点 Hand-Landmark マイクロモデルを重畳（手指屈伸、握力球把持）
   │
   ├──▶ 分岐 B: [歩行・足部解析] 左右足首・足底の ROI (128×128) をクリップ
   │                              6点足底接地時系列分類器を重畳（扁平足評価、立脚期フェーズ）
   │
   └──▶ 分岐 C: [頭部・視線追従] 頭部・顔面の ROI (160×160) をクリップ
                                  Head-Pose 3Dオイラー角マイクロモデルを重畳（頸椎ROM、頭部前弯評価）
```

### 拡張実装の手順：
1. **ROIの切り出し**：`keypoints_33` から手部点群 `[15, 17, 19, 21]` を取得し、外接矩形を 15% 拡張してテンソル化；
2. **軽量推論の実行**：RKNN / TPU 上の MobileNetV4 / ShuffleNet 軽量モデルへ入力（推論時間 4〜6ms）；
3. **イベント統合**：大動作（外転/スクワット）のタイムラインと同期し、「全身姿勢の正確性＋手指把持の達成」を複合判定。

---

## 性能と実測データ

リハビリ外来にて収録した 50組の正規動作および典型的な代償動作ビデオデータセットによる実測結果：

### 1. ハードウェア別性能
| ハードウェア | モデルとランタイム | 入力解像度 | 推論遅延 | エンドツーエンド FPS | NPU/TPU 負荷 |
|---|---|---|---|---|---|
| **reCamera Pro** | YOLO11n-Pose 33kpt INT8 (RKNN) | 640×640 | 38.2 ms | **24.0 FPS** | ~65% |
| **reCamera 2002** | YOLO11n-Pose 33kpt INT8 (CVI TPU) | 512×512 | 62.5 ms | **14.2 FPS** | ~82% |

### 2. 運動力学評価の精度指標
- **可動域（ROM）計測誤差**：ゴールドスタンダードである光学式モーションキャプチャ（VICON）比較で、外転角平均絶対誤差 (MAE) は **±2.1°**；
- **病理的代償動作のリコール率**：僧帽筋の肩すくめ代償 **95.2%**、膝関節内折れ代償 **93.8%**；
- **防振性能**：3フレーム時系列防振により、軽微な体の揺れによる誤カウントの 98.6% を排除。

---

## データインターフェースとプロトコル

### 1. ローカルリアルタイム HUD (WebSocket)
- **URL**：`ws://<camera_ip>:8124/ws/kinematics`
- **ペイロード例**：
```json
{
  "timestamp": 1793339665120,
  "phase": "PEAK_HOLD",
  "valid_reps": 5,
  "rom_degrees": 92.4,
  "quality_score": 95.0,
  "compensation": {
    "detected": true,
    "type": "SHOULDER_SHRUG",
    "deviation_val": 14.2
  },
  "keypoints_33": [
    {"id": 0, "name": "nose", "x": 0.512, "y": 0.185, "conf": 0.94}
  ]
}
```

### 2. 病院 EMR / 電子カルテ連携 (MQTT)
- **Broker**：`mqtt://<camera_ip>:1883`
- **Topic**：`rehab/telemetry/<camera_sn>/session`
- **送信タイミング**：1セット終了時、または継続的な代償動作検知時にトリガーされ、構造化された評価レポートを出力します。
