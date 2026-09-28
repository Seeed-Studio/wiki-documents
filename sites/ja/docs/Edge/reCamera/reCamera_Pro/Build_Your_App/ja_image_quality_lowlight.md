---
description: reCamera Pro でメインストリームとサブストリームのエンコードを設定し、明るさ・露出・昼夜切り替えを調整して、低照度でも実用的な映像を得ます。
title: 画質と低照度
keywords:
  - reCamera
  - reCamera Pro
  - 画質
  - 低照度
  - 露出
  - 昼夜
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_image_quality
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_image_quality/
---

# 画質と低照度

Web UI を使って、reCamera Pro の動画エンコード方式と映像の見え方（低照度時や昼夜動作を含む）を調整します。すべての設定はライブビューのページにあり、左側にプレビューウィンドウ、右側に設定エリアが表示されます。

## 基本設定：動画エンコード

**Basic Settings** では、メインストリームとサブストリームのエンコードパラメータを個別に設定します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

| パラメータ | 説明 |
|---|---|
| Resolution | 動画出力解像度（例：1920×1080（1080P）） |
| Encoding Format | 動画コーデック（例：H.264） |
| Frame Rate (FPS) | 動画フレームレート（例：30 FPS） |
| GOP | キーフレーム間隔 — キーフレームを生成する頻度 |
| Bitrate Control Mode | ビットレート制御方式（例：VBR（可変ビットレート）） |
| Max Bitrate | 映像ストリームの最大ビットレート（Kbps 単位） |
| Bitrate Quality | エンコード品質レベル |

シナリオに応じて、どちらのストリームを設定するかを選択します：

- **Main stream** — 高精細プレビュー、映像保存、AI 解析向け。
- **Sub-stream** — 低帯域幅プレビュー、リモート視聴、マルチチャネルアクセス向け。

設定を変更したら、**Save Video Settings** をクリックして適用します。**Reset** をクリックすると、パラメータを復元または再入力できます。

このページには **Audio Settings** と **Audio Storage Settings** のスイッチもあり、必要に応じて音声の取得と保存を有効／無効にできます。

## 表示設定：向きと昼夜

**Display Settings** では、カメラが映像をどのように描画するかを調整します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

| パラメータ | 説明 |
|---|---|
| Flip | 取り付け方向に合わせて映像をミラー／反転します |
| Rotate | 回転角度（例：0°） |
| Video Standard | 映像方式（例：PAL（50HZ）） |

同じページで昼夜切り替えも設定します：

| パラメータ | 説明 |
|---|---|
| Switch Mode | 昼夜モードの切り替え方法（例：自動） |
| Switch Threshold Sensitivity | 切り替えをトリガーする明るさレベルの感度 |
| Switch Hysteresis Time | 頻繁な切り替えを防ぐために、元に戻るまでの遅延時間 |

## 低照度向けの映像調整

基本的な映像調整エリアでは、プロファイルを選択し、次の項目を調整できます：

- 明るさ
- コントラスト
- 彩度
- シャープネス
- 色相
- 露出モード
- ゲインモード

実践的な低照度のコツ：

1. **Exposure Mode** を設定して、暗いシーンでカメラが露光時間を延長できるようにします。ただし、動いている被写体のモーションブラーに注意してください。
2. **Gain** は必要な分だけ上げてください。ゲインを上げすぎるとノイズが増え、AI 検出精度も低下します。
3. 24 時間稼働の設置では、しきい値を中程度にし、十分なヒステリシス時間を持たせた **自動** 昼夜切り替えを使用します。
4. デフォルトのテストシーンではなく、実際のシーンの照明（屋内、屋外、逆光、夜間）で映像を再確認してください。

{/* TODO(verify): add a 0.3 lux sample frame (no fill light) captured on production firmware, and confirm recommended exposure/gain values and minimum firmware version for low-light scenes */}

設定を変更したら、**Save Display Settings** / **Save Configuration** をクリックして適用します。

## 関連ページ

- [プレビュー、キャプチャ、手動録画](/ja/recamera_pro_live_preview/)
- [検出の設定：クラス、しきい値、レート](/ja/recamera_pro_ai_inference/)
- [外部プレーヤーでストリームを視聴する（RTSP）](/ja/recamera_pro_rtsp/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
