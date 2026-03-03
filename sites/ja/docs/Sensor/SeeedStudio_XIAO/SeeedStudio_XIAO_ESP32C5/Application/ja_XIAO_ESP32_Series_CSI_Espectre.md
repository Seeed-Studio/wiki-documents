---
description: Wi-Fi スペクトル解析（CSI）に基づくモーション検出システムで、ESPHome を介した Home Assistant ネイティブ統合を提供します。
title: ESPHome を使用した Seeed Studio XIAO ESP32 シリーズでの Espectre デプロイ
keywords:
  - Espectre
  - XIAO
  - ESPHome
  - WiFi
image: https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image1.webp
slug: /xiao-esp32--series-espresense
sku: 100010048,113991254,113991114, 113991054
last_update:
  date: 01/26/2026
  author: Carla Guo
---

# ESPHome を使用した Seeed Studio XIAO ESP32 シリーズでの Espectre デプロイ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image1.png" style={{width:1000, height:'auto'}}/></div>

**ESPectre は Wi-Fi スペクトル解析（CSI）に基づくモーション検出システムで、ESPHome を介した Home Assistant ネイティブ統合を提供します。** 誰かが部屋で動くと、ルーターとセンサー間を移動する Wi-Fi 波を「妨害」します。これは懐中電灯の前で手を動かして影の変化を見るのと似ています。[XIAO ESP32 ボード](https://www.seeedstudio.com/ESP32-Series-c-2580.html)はこれらの変化を「聞き取り」、動きがあるかどうかを理解します。


## 機能

- **Wi-Fi ベースのモーション検出**: Wi-Fi 信号のみを使用して人の動きを検出 — カメラやマイクは不要で、完全なプライバシーを確保
- **最小限のハードウェア、高速セットアップ**: XIAO ESP32 ボードのみが必要で、10〜15分でセットアップ可能、総コストは約7ドル
- **完全に非侵襲的**: ウェアラブルや物理センサーは不要 — ユーザーは何も持ち運んだり着用したりする必要がありません
- **壁を通して動作**: Wi-Fi 信号は壁を貫通し、部屋を越えた信頼性の高いモーション検出を可能にします

## 必要なもの

### ハードウェア

- **2.4GHz Wi-Fi ルーター** - ご自宅にある既存のものでも問題ありません
- [**CSI サポート付き ESP32**](https://www.seeedstudio.com/ESP32-Series-c-2580.html) - XIAO ESP32-C3 / XIAO ESP32-C6 / XIAO ESP32-S3、XIAO ESP32-C5 は実験的にサポートされています。

### ソフトウェア（すべて無料）

- **Python 3.12**（⚠️ Python 3.14 は ESPHome で既知の問題があります）
- **ESPHome**（Home Assistant に統合またはスタンドアロン）
- **Home Assistant**（Raspberry Pi、PC、NAS、またはクラウド上。推奨ですが、オプションです）

## クイックスタート

### 1. ESPHome のインストール

```bash
# Create virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# venv\Scripts\activate   # On Windows

# Install ESPHome
pip install esphome
```

Home Assistant 内で直接実行するのではなく、コンピューターターミナルで ESPHome をダウンロードして実行することを推奨する理由は、PlatformIO（PIO）によって生成されるバイナリファイルが非常に大きいためです。Home Assistant 環境では、このような大きな一時ファイルやシステムファイルを確実に処理することができず、最終的にビルドやデプロイプロセスが失敗する可能性があります。

例えば、テスト中に次のメッセージが表示されました：
>We found 1.63GB of unnecessary PlatformIO system data (temporary files, unnecessary packages, etc.). Use pio system prune --dry-run to list them or pio system prune to save disk space.


### 2. 設定ファイルのダウンロード

お使いのハードウェア用のサンプル設定をダウンロードしてください：

| プラットフォーム | 設定ファイル | CPU | WiFi | PSRAM | ステータス |
|----------|-------------------|-----|------|-------|--------|
| **XIAO ESP32-C6** | [espectre-c6.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c6.yaml) | RISC-V @ 160MHz | WiFi 6 | ❌ | ✅ テスト済み |
| **XIAO ESP32-S3** | [espectre-s3.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-s3.yaml) | Xtensa @ 240MHz | WiFi 4 | ✅ 8MB | ✅ テスト済み |
| **XIAO ESP32-C3** | [espectre-c3.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c3.yaml) | RISC-V @ 160MHz | WiFi 4 | ❌ | ✅ テスト済み ² |
| **XIAO ESP32-C5** | [espectre-c5.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c5.yaml) | RISC-V @ 240MHz | WiFi 6 | ❌ | ⚠️ 実験的 ¹ |

**推奨事項**：
- **XIAO ESP32-C6**: WiFi 6 環境、標準的なモーション検出に最適
- **XIAO ESP32-S3**: 高度なアプリケーション、将来の ML 機能に最適（より多くのメモリ）
- **XIAO ESP32-C3**: 予算重視のオプション

これらのファイルは、GitHub からコンポーネントを自動的にダウンロードするように事前設定されています。

> ⚠️ **実験的プラットフォーム**: ESP32-S2 と ESP32-C5 は CSI サポートがありますが、広範囲にテストされていません。
>
> ESP32-C5: `improv_serial`（USB プロビジョニング）は ESPHome でまだサポートされていません。代わりに BLE または WiFi AP プロビジョニングを使用してください。

### 3. ビルドとフラッシュ

```bash
cd examples
esphome run espectre-c5.yaml  # or espectre-s3.yaml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image2.png" style={{width:1000, height:'auto'}}/></div>


### 4. WiFi の設定

フラッシュ後、以下のいずれかの方法で WiFi を設定してください：

| 方法 | 手順 |
|--------|-----|
| **BLE**（最も簡単） | ESPHome アプリまたは Home Assistant Companion アプリを使用 |
| **USB** | [web.esphome.io](https://web.esphome.io) → Connect → Configure WiFi に移動（XIAO ESP32-C5 は非推奨） |
| **キャプティブポータル** | "ESPectre Fallback" WiFi に接続 → http://192.168.4.1|

XIAO ESP32 デバイスを Home Assistant に統合するには、Home Assistant と同じローカルエリアネットワークを使用するように設定する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image3.png" style={{width:400, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image4.png" style={{width:1000, height:'auto'}}/></div>

以上です！デバイスは Home Assistant によって自動的に検出されます。

### 5. センサーの配置

信頼性の高い動き検出には、最適なセンサー配置が重要です。ルーターからの推奨距離、最適範囲：3〜8メートル

| 距離 | 信号 | マルチパス | 感度 | ノイズ | 推奨 |
|----------|--------|-----------|-------------|-------|----------------|
| < 2m | 強すぎる | 最小 | 低 | 低 | ❌ 近すぎる |
| 3-8m | 強い | 良好 | 高 | 低 | ✅ **最適** |
| > 10-15m | 弱い | 可変 | 低 | 高 | ❌ 遠すぎる |

>**配置のヒント**
>
>推奨：
>- 監視したいエリアにセンサーを配置（ルーターと直線上にある必要はありません）
>- 高さ：地面から1〜1.5メートル（机/テーブルの高さ）
>- 外部アンテナ：より良い受信のために IPEX コネクタを使用
>
>避けるべき：
>- ルーターとセンサー間の金属障害物（冷蔵庫、金属キャビネット）
>- 角や密閉空間（マルチパスダイバーシティを減少させる）


### 6. Home Assistant 統合

ESPHome は **自動 Home Assistant 統合** を提供します。デバイスがフラッシュされ WiFi に接続されると：

1. Home Assistant がデバイスを自動的に検出します
2. **Settings** → **Devices & Services** → **ESPHome** に移動
3. 検出されたデバイスで **Configure** をクリック
4. すべてのセンサーが自動的に追加されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image5.png" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image6.png" style={{width:1000, height:'auto'}}/></div>

- 使用前にデバイスをキャリブレーションしてください。単純に `Calibrate` ボタンを押すだけで、キャリブレーション完了後にボタンステータスが自動的にリセットされます。注意：キャリブレーション中は部屋に人がいてはいけません。

- Home Assistant が Espectre デバイスを検出できるが、正常に追加できない場合は、単純に `traffic_generator_rate` を下げてみてください。

> CSI データを収集する際、CPU は高い割り込み負荷（毎秒100回以上）で動作します。その結果、CSI データ収集プロセスと Home Assistant 通信タスクの間で、ハードウェアレベルまたは限られたネットワーク帯域幅により、リソース競合が発生します。


- さらなる自動化例、ダッシュボード例、詳細なセットアップについては、[SETUP.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/SETUP.md) を参照してください。

### 7. 設定パラメータ

精度に満足できない場合は、YAML ファイルの `espectre:` セクション下のパラメータを調整して手動で微調整できます。調整後、ファイルを再ビルドしてアップロードしてください。

| パラメータ | タイプ | デフォルト | 説明 |
|-----------|------|---------|-------------|
| `traffic_generator_rate` | int | 100 | CSI 生成用のパケット/秒（0=無効、外部トラフィックを使用） |
| `traffic_generator_mode` | string | dns | トラフィックジェネレーターモード：`dns`（UDP クエリ）または `ping`（ICMP） |
| `publish_interval` | int | auto | センサー更新間のパケット数（デフォルト：traffic_generator_rate と同じ、またはトラフィックが0の場合は100） |
| `segmentation_threshold` | float | 1.0 | モーション感度（低い=より敏感） |
| `segmentation_window_size` | int | 50 | パケット単位での移動分散ウィンドウ |
| `selected_subcarriers` | list | auto | 固定サブキャリア（自動キャリブレーション用に省略） |
| `lowpass_enabled` | bool | false | ノイズ低減用ローパスフィルターを有効化 |
| `lowpass_cutoff` | float | 11.0 | Hz 単位でのローパスフィルターカットオフ周波数（5-20） |
| `hampel_enabled` | bool | false | Hampel 外れ値フィルターを有効化 |
| `hampel_window` | int | 7 | Hampel フィルターウィンドウサイズ |
| `hampel_threshold` | float | 4.0 | Hampel フィルター感度（MAD 乗数） |
| `gain_lock` | string | auto | AGC/FFT ゲインロック：`auto`、`enabled`、`disabled` |

詳細なパラメータ調整（範囲、推奨値、トラブルシューティング）については、[TUNING.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/TUNING.md) を参照してください。


## システムアーキテクチャ

### 処理パイプライン

ESPectre はモーション検出のために集中的な処理パイプラインを使用します：

```
┌─────────────┐
│  CSI Data   │  Raw Wi-Fi Channel State Information
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Gain Lock  │  AGC/FFT stabilization (~3 seconds)
│             │  Locks hardware gain for stable measurements
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Auto     │  Automatic subcarrier selection (once at boot)
│ Calibration │  Selects optimal 12 subcarriers via NBVI
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Normalization│  Attenuate if baseline > 0.25 (always enabled)
│             │  Prevents extreme motion values
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Hampel    │  Turbulence outlier removal
│   Filter    │  (optional, disabled by default)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Low-pass   │  Noise reduction (smoothing)
│   Filter    │  (optional, disabled by default)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Segmentation │  MVS algorithm
│    (MVS)    │  IDLE ↔ MOTION
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Home        │  Native ESPHome integration
│ Assistant   │  Binary sensor + Movement/Threshold
└─────────────┘
```

### 単一または複数のセンサー

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ ESP32   │  │ ESP32   │  │ ESP32   │
│ Room 1  │  │ Room 2  │  │ Room 3  │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┴────────────┘
                  │
                  │ ESPHome Native API
                  ▼
         ┌────────────────────┐
         │   Home Assistant   │
         │   (Auto-discovery) │
         └────────────────────┘
```

各センサーは Home Assistant によって自動的に検出され、以下の機能を提供します：
- 動作検出用のバイナリセンサー
- 動作スコアセンサー
- 調整可能な閾値（数値エンティティ）

### 自動サブキャリア選択

ESPectre は **NBVI（正規化ベースライン変動指数）** アルゴリズムを実装し、自動サブキャリア選択により **手動設定なし** で最適に近いパフォーマンス（F1=98.2%）を実現します。

> ⚠️ **重要**: デバイス起動後10秒間は部屋を **静かで動きのない状態** に保ってください。この間に自動キャリブレーションが実行され、動きがあると検出精度に影響します。

NBVI アルゴリズムの詳細については、[ALGORITHMS.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/ALGORITHMS.md) をご覧ください。

## できること

- **ホームセキュリティ**: 外出中に誰かが侵入した場合にアラートを受信
- **高齢者ケア**: 活動を監視して転倒や長時間の無活動を検出
- **スマート自動化**: 人がいる時のみライト/暖房をオン
- **省エネ**: 空の部屋のデバイスを自動的にオフ
- **子供の監視**: 夜間に部屋を出た場合にアラート
- **気候制御**: 人がいるゾーンのみ暖房/冷房


## 技術的詳細

アルゴリズムの詳細（MVS、NBVI、Hampel フィルター）については、[ALGORITHMS.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/ALGORITHMS.md) をご覧ください。

パフォーマンス指標（混同行列、F1スコア、ベンチマーク）については、[PERFORMANCE.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/PERFORMANCE.md) をご覧ください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>