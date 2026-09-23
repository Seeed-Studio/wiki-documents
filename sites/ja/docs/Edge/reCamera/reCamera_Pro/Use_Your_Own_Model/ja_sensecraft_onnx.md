---
description: SenseCraft プラットフォームを使用して ONNX モデルを RKNN 形式に変換し、ローカルツールなしで reCamera Pro にデプロイします。
title: "SenseCraft ONNX から RKNN への変換"
keywords:
  - reCamera
  - reCamera Pro
  - SenseCraft
  - ONNX
  - RKNN
  - model conversion
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sensecraft
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_sensecraft/
---

# SenseCraft ONNX から RKNN への変換

reCamera Pro には、ONNX モデルを RKNN 形式に変換するクラウドベースのプラットフォーム **SenseCraft** への統合エントリポイントが用意されています。これにより、ローカルに RKNN-Toolkit2 をインストールすることなくカスタムモデルをデプロイできます。

## SenseCraft へのアクセス

1. Web UI で **AI Inference** に移動します。
2. **View SenseCraft Models** をクリックします。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

## 変換ワークフロー

1. **View SenseCraft Models** をクリックして変換インターフェースを開きます。
2. 変換する **ONNX モデルファイル** を選択します。
3. 必要に応じて **量子化データセット** をアップロードします。指定しない場合、システムはデフォルトのデータセットを使用します。
4. **Start Conversion** をクリックします。
5. 変換が完了すると、生成された RKNN モデルを reCamera Pro にデプロイできます。

{/* TODO(verify): confirm whether SenseCraft conversion supports INT8 quantization, FP16, or both, and the maximum model file size */}

## SenseCraft と RKNN-Toolkit2 の使い分け

| 要素 | SenseCraft | RKNN-Toolkit2 |
|---|---|---|
| セットアップ | 不要（クラウド） | ローカルの Python 環境 |
| 量子化の制御 | 基本（デフォルトまたはカスタムデータセット） | 完全（INT8/FP16、カスタムキャリブレーション、レイヤーレベルの制御） |
| スピード | アップロード + 待機 | ローカル変換 |
| 最適な用途 | 迅速なデプロイ | 本番向け最適化 |

量子化を詳細に制御したい場合は、[RKNN-Toolkit2 Conversion](/ja/recamera_pro_rknn_model_conversion/) を参照してください。

## 関連ページ

- [モデルデプロイパスの選択](/ja/recamera_pro_model_path/)
- [RKNN モデルのアップロードと設定](/ja/recamera_pro_rknn_upload/)
- [RKNN-Toolkit2 Conversion](/ja/recamera_pro_rknn_model_conversion/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
