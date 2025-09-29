---
description: モデルアシスタントのトレーニング
title: 概要
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Tutorials_Training_Overview
last_update:
  date: 05/15/2025
  author: LynnL4
---


# 概要

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)は現在以下のモデルをサポートしています。対応するチュートリアルを参照してモデルのトレーニングを完了し、モデルの重みを取得することができます。

- [物体検出 - SWIFT-YOLO](/ja/ModelAssistant_Tutorials_Training_YOLO): デジタルメーターの読み取り

- [物体検出 - FOMO](/ja/ModelAssistant_Tutorials_Training_FOMO): マスク着用検出

- [キーポイント検出 PFLD](/ja/ModelAssistant_Tutorials_Training_PFLD): ポインターメーターの読み取り


:::tip

トレーニングを開始する前に、まず[Config](/ja/ModelAssistant_Tutorials_Config)と[Datasets](/ja/ModelAssistant_Tutorials_Datasets)セクションを読むことをお勧めします。

:::

## パラメーターの説明

モデルトレーニング中の詳細なパラメーターについては、以下のコードを参照してください。

```sh
python3 tools/train.py --help

# SSCMAモデルのトレーニング

# 必須引数:
#   config                モデル設定ファイルのパス

# オプション引数:
#   -h, --help            このヘルプメッセージを表示して終了
#   --work_dir WORK_DIR, --work-dir WORK_DIR
#                         ログとモデルを保存するディレクトリ
#   --amp                 トレーニング中に自動混合精度を有効化 (https://pytorch.org/tutorials/recipes/recipes/amp_recipe.html)
#   --auto_scale_lr, --auto-scale-lr
#                         トレーニング中に自動スケールLRを有効化
#   --resume [RESUME]     最後のエポックのチェックポイント (または指定されたチェックポイントパス) からトレーニングを再開
#   --no_validate, --no-validate
#                         トレーニング中のチェックポイント評価を無効化
#   --launcher {none,pytorch,slurm,mpi}
#                         MMEngineのジョブランチャー
#   --cfg_options CFG_OPTIONS [CFG_OPTIONS ...], --cfg-options CFG_OPTIONS [CFG_OPTIONS ...]
#                         使用される設定の一部を上書き、'xxx=yyy'形式のキーと値のペアが設定ファイルに統合される
#   --local_rank LOCAL_RANK, --local-rank LOCAL_RANK
#                         PyTorchのローカルランクを設定
#   --dynamo_cache_size DYNAMO_CACHE_SIZE, --dynamo-cache-size DYNAMO_CACHE_SIZE
#                         PyTorchのダイナモキャッシュサイズ制限を設定
#   --input_shape INPUT_SHAPE [INPUT_SHAPE ...], --input-shape INPUT_SHAPE [INPUT_SHAPE ...]
#                         拡張: モデルパラメーター推定のための入力データ形状、例: 1 3 224 224
```

### デプロイ

モデルをエクスポートした後、エッジコンピューティングデバイスにモデルをデプロイしてテストと評価を行うことができます。[Deploy](/ja/ModelAssistant_Deploy_Overview)セクションを参照して、モデルのデプロイ方法について詳しく学んでください。