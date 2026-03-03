---
description: モデルアシスタントのトレーニング
title: オブジェクト検出 - FOMO
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Tutorials_Training_FOMO
last_update:
  date: 05/15/2025
  author: LynnL4
---


# オブジェクト検出 - FOMO

このセクションでは、COCO MASK データセットを使用して FOMO マスク検出モデルをトレーニングする方法について説明します。FOMO マスク検出モデルの実装は MobileNet V2 および MobileNet V3 に基づいています（選択するモデルプロファイルによって実際のニューラルネットワークが異なります）。

MobileNet に関する詳細情報は、論文 [MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications](https://arxiv.org/pdf/1704.04861.pdf) を参照してください。

## データセットの準備

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) はデフォルトで [COCO_MASK データセット](/ja/ModelAssistant_Tutorials_Datasets#SSCMA) を使用して FOMO モデルをトレーニングします。以下の手順に従ってデータセットの準備を完了してください。

1. [インターネットデータセット](/ja/ModelAssistant_Tutorials_Datasets#SSCMA) を参照してデータセットをダウンロードし、解凍してください。

2. 解凍したデータセットの **フォルダパス**（例: `datasets\mask`）を覚えておいてください。このフォルダパスは後で使用する可能性があります。

## 設定ファイルの選択

トレーニングタスクの種類に応じて適切な設定ファイルを選択します。設定ファイルの機能、構造、および原則については、[Config](/ja/ModelAssistant_Tutorials_Config) で既に紹介しています。

FOMO モデルの例では、`fomo_mobnetv2_0.35_x8_abl_coco.py` を設定ファイルとして使用します。このファイルは [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) のルートディレクトリ内の `configs/fomo` フォルダにあり、さらに `default_runtime_det.py` 設定ファイルを継承しています。

初心者には、まずこの設定ファイル内の `data_root` と `epochs` パラメータに注目することをお勧めします。

<details>

<summary> fomo_mobnetv2_0.35_x8_abl_coco.py </summary>

```python
_base_='../_base_/default_runtime_det.py'
default_scope='sscma'
custom_imports=dict(imports=['sscma'], allow_failed_imports=False)

num_classes=2
model=dict(type='Fomo',
           backbone=dict(type='mmdet.MobileNetV2', widen_factor=0.35, out_indices=(2,)),
           head=dict(type='FomoHead',
                     input_channels=[16],
                     num_classes=num_classes,
                     middle_channel=48,
                     act_cfg='ReLU6',
                     loss_cls=dict(type='BCEWithLogitsLoss',
                                   reduction='none',
                                   pos_weight=40),
                     loss_bg=dict(type='BCEWithLogitsLoss', reduction='none'),
           ),
)

# データセット設定
dataset_type='FomoDatasets'
data_root=''
height=96
width=96
batch_size=16
workers=1

train_pipeline=[
    dict(type='RandomResizedCrop',
         height=height,
         width=width,
         scale=(0.80, 1.2),
         p=1),
    dict(type='Rotate', limit=30),
    dict(type='RandomBrightnessContrast',
         brightness_limit=0.3,
         contrast_limit=0.3,
         p=0.5),
    dict(type='HorizontalFlip', p=0.5),
]
test_pipeline=[dict(type='Resize', height=height, width=width, p=1)]

train_dataloader=dict(
    batch_size=batch_size,
    num_workers=workers,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='fomo_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 ann_file='train/_annotations.coco.json',
                 img_prefix='train',
                 pipeline=train_pipeline),
)
val_dataloader=dict(
    batch_size=1,
    num_workers=1,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='fomo_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 ann_file='valid/_annotations.coco.json',
                 img_prefix='valid',
                 pipeline=test_pipeline))
test_dataloader=val_dataloader

# オプティマイザー
lr=0.001
epochs=300
find_unused_parameters=True
optim_wrapper=dict(optimizer=dict(type='Adam', lr=lr, weight_decay=5e-4,eps=1e-7))

# 評価者
val_evaluator=dict(type='FomoMetric')
test_evaluator=val_evaluator
train_cfg=dict(by_epoch=True, max_epochs=70)

# 学習ポリシー
param_scheduler=[
    dict(type='LinearLR', begin=0, end=30, start_factor=0.001, by_epoch=False),  # ウォームアップ
    dict(type='MultiStepLR',
         begin=1,
         end=500,
         milestones=[100, 200, 250],
         gamma=0.1,
         by_epoch=True)
]
```

</details>

## モデルのトレーニング

モデルのトレーニングには、事前に設定した [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 作業環境を使用する必要があります。[インストール](/ja/ModelAssistant_Introduce_Installation) ガイドに従って Conda を使用して仮想環境 `sscma` に [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) をインストールした場合、現在その仮想環境内にいることを確認してください。

次に、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) プロジェクトのルートディレクトリで、以下のコマンドを実行して FOMO マスク検出モデルをトレーニングします。

```sh
python3 tools/train.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    --cfg-options \
        data_root='datasets/mask' \
        epochs=50
```

トレーニング中、モデルの重みと関連するログ情報はデフォルトで `work_dirs/fomo_mobnetv2_0.35_x8_abl_coco` パスに保存されます。また、[TensorBoard](https://www.tensorflow.org/tensorboard/get_started) などのツールを使用してトレーニングをモニタリングすることができます。

```sh
tensorboard --logdir work_dirs/fomo_mobnetv2_0.35_x8_abl_coco
```

トレーニングが完了すると、最新の FOMO モデルの重みファイルのパスが `work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint` ファイルに保存されます。この重みファイルのパスは、モデルを他の形式に変換する際に必要となるため、大切に保管してください。

:::tip

仮想環境が設定されているがアクティブ化されていない場合、以下のコマンドでアクティブ化できます。

```sh
conda activate sscma
```

:::

## テストと評価

### テスト

FOMO モデルのトレーニングが完了したら、特定の重みを指定して以下のコマンドでモデルをテストすることができます。

```sh
python3 tools/inference.py \
    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \
    "$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)" \
    --cfg-options \
        data_root='datasets/mask'
```

:::tip

テスト中にリアルタイムでプレビューを行いたい場合、テストコマンドにパラメータ `--show` を追加して予測結果を表示することができます。他のオプションパラメータについては、ソースコード `tools/test.py` を参照してください。

:::

### 評価

モデルを実際のエッジコンピューティングデバイスでさらにテストおよび評価するには、モデルをエクスポートする必要があります。モデルのエクスポートプロセスでは、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) がモデルのプルーニングや蒸留などの最適化を行います。モデルのエクスポート方法については、[エクスポート](/ja/ModelAssistant_Tutorials_Export_Overview) セクションを参照してください。

### デプロイ

モデルをエクスポートした後、エッジコンピューティングデバイスにモデルをデプロイしてテストおよび評価を行うことができます。モデルのデプロイ方法については、[デプロイ](/ja/ModelAssistant_Deploy_Overview) セクションを参照してください。