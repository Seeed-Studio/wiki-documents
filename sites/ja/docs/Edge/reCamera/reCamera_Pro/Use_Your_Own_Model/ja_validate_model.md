---
description: カスタムモデルを reCamera Pro 上で正しく動作させるために、推論ステータス、FPS、検出結果、およびリソース使用状況を確認します。
title: モデル性能の検証
keywords:
  - reCamera
  - reCamera Pro
  - model validation
  - inference
  - FPS
  - performance
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_validate
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_model_validate/
---

# モデル性能の検証

カスタムモデルをアップロードまたは変換した後、本番環境にデプロイする前に、reCamera Pro 上で正しく動作することを確認します。

## ステップ 1: 推論を開始する

1. Web UI で **AI Inference** → **Inference Configuration** に移動します。
2. 推論を有効にします。
3. 使用するモデルを **Running Model** として選択します。
4. 推論頻度を設定します。
5. **Save Configuration** をクリックします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## ステップ 2: リアルタイム監視を確認する

**Real-time Inference Monitoring** に移動して、次の項目を確認します：

| 指標 | 確認内容 |
|---|---|
| 推論ステータス | 実行中か停止中か |
| FPS | 1 秒あたりのフレーム数 — 高いほど良い |
| 検出結果 | クラス名、信頼度スコア、バウンディングボックス |
| 検出数 | フレームごとの物体数 |

{/* TODO(verify): Real-time Inference Monitoring に表示される正確なフィールド名（例：FPS、CPU 使用率、NPU 使用率、メモリ使用量が表示されるかどうか）を確認する */}

## ステップ 3: 検出精度を検証する

1. カメラを、検出カテゴリに対応するテスト対象に向けます。
2. 検出結果に正しいクラス名が表示され、妥当な信頼度スコアになっているかを確認します。
3. 誤検出（存在しない物体が検出される）や見逃し（存在する物体が検出されない）がないかを確認します。

### 後処理パラメータの調整

検出品質が低い場合は、[Model Configuration](/ja/recamera_pro_rknn_upload/) を見直してください：

| パラメータ | 影響 |
|---|---|
| IOU threshold | 低い → 重複ボックスが少なくなる／高い → 重なったボックスがより多く残る |
| Confidence threshold | 低い → 検出数が増える（誤検出を含む）／高い → 検出数は減るが、より信頼性の高い検出のみになる |
| max_obj | フレームごとに報告される最大物体数 |

## ステップ 4: リソース使用状況を確認する

SSH 経由で推論中のデバイスリソース使用状況を監視します：

```bash
# CPU and memory
top -bn1 | head -5

# NPU usage (if available)
# TODO(verify): confirm the command to check RKNN NPU utilization on reCamera Pro
```

{/* TODO(verify): 推論中の NPU/RKNN 使用率およびメモリ消費量を監視するための正確な SSH コマンドを確認する */}

## よくある問題

| 症状 | 想定される原因 | 対処方法 |
|---|---|---|
| モデルが読み込めない | 非互換なオペレータまたは量子化形式 | RKNN-Toolkit2 で再変換し、[Model Compatibility](/ja/recamera_pro_model_compatibility/) を確認する |
| FPS が非常に低い | モデルが大きすぎる、または複雑すぎる | より軽量なモデルを使用するか、入力解像度を下げる |
| 検出がない | カテゴリ設定の誤り、またはしきい値が高すぎる | 検出カテゴリがモデル出力と一致しているか確認し、confidence threshold を下げる |
| クラス名が文字化けする | カテゴリリストの不一致 | Model Configuration で正しいカテゴリ TXT を再インポートする |

## 関連ページ

- [モデルデプロイパスを選択する](/ja/recamera_pro_model_path/)
- [RKNN モデルのアップロードと設定](/ja/recamera_pro_rknn_upload/)
- [検出の設定](/ja/recamera_pro_ai_inference/)
- [Model Compatibility](/ja/recamera_pro_model_compatibility/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
