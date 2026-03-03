---
description: モデルアシスタントのトレーニング
title: キーポイント検出 - PFLD
keywords:
- sscma モデルアシスタント ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Tutorials_Training_PFLD
last_update:
  date: 05/15/2025
  author: LynnL4
---


# キーポイント検出 - PFLD

このセクションでは、PFLDメーターデータセットを使用してPFLDモデルをトレーニングする方法について説明します。PFLDモデルは論文 [PFLD: A Practical Facial Landmark Detector](https://arxiv.org/pdf/1902.10859.pdf) で紹介されています。

## データセットの準備

SSCMAはデフォルトで[PFLDカスタムメーターデータセット](/ja/ModelAssistant_Tutorials_Datasets#SSCMA)を使用してPFLDモデルをトレーニングします。以下の手順に従ってデータセットの準備を完了してください。

1. [インターネットデータセット - SSCMA - カスタムメーターデータセット](/ja/ModelAssistant_Tutorials_Datasets#SSCMA)を参照してデータセットをダウンロードし、解凍してください。

2. 解凍したデータセットの**フォルダパス**（例: `datasets\meter`）を覚えておいてください。このフォルダパスは後で使用する可能性があります。

## 設定ファイルの選択

トレーニングタスクの種類に応じて適切な設定ファイルを選択します。設定ファイルの機能、構造、および原則については、[Config](/ja/ModelAssistant_Tutorials_Config)で既に紹介しています。

メーターPFLDモデルの例では、`pfld_mbv2n_112.py`を設定ファイルとして使用します。このファイルはSSCMAのルートディレクトリ内の`configs/pfld`フォルダにあり、さらに`default_runtime_pose.py`設定ファイルを継承しています。

初心者には、この設定ファイル内の`data_root`と`epochs`パラメータに最初に注意を払うことをお勧めします。

<details>

<summary> pfld_mbv2n_112.py </summary>

```python
_base_='../_base_/default_runtime_pose.py'

num_classes=1
model=dict(type='PFLD',
             backbone=dict(type='PfldMobileNetV2',
                           inchannel=3,
                           layer1=[16, 16, 16, 16, 16],
                           layer2=[32, 32, 32, 32, 32, 32],
                           out_channel=16),
             head=dict(type='PFLDhead',
                       num_point=num_classes,
                       input_channel=16,
                       loss_cfg=dict(type='L1Loss')))

# データセット設定
dataset_type='MeterData'

data_root=''
height=112
width=112
batch_size=32
workers=4

train_pipeline=[
    dict(type="Resize", height=height, width=width, interpolation=0),
    dict(type='ColorJitter', brightness=0.3, p=0.5),
    dict(type='GaussNoise'),
    dict(type='MedianBlur', blur_limit=3, p=0.3),
    dict(type='HorizontalFlip'),
    dict(type='VerticalFlip'),
    dict(type='Rotate'),
    dict(type='Affine', translate_percent=[0.05, 0.1], p=0.6)
]

val_pipeline=[dict(type="Resize", height=height, width=width)]

train_dataloader=dict(
    batch_size=32,
    num_workers=2,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='default_collate'),
    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 index_file=r'train/annotations.txt',
                 pipeline=train_pipeline,
                 test_mode=False),
)

val_dataloader=dict(
    batch_size=1,
    num_workers=1,
    persistent_workers=True,
    drop_last=False,
    collate_fn=dict(type='default_collate'),
    sampler=dict(type='DefaultSampler', shuffle=False, round_up=False),
    dataset=dict(type=dataset_type,
                 data_root=data_root,
                 index_file=r'val/annotations.txt',
                 pipeline=val_pipeline,
                 test_mode=True),
)
test_dataloader=val_dataloader

lr=0.0001
epochs=300
evaluation=dict(save_best='loss')
optim_wrapper=dict(
    optimizer=dict(type='Adam', lr=lr, betas=(0.9, 0.99), weight_decay=1e-6))
optimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2))
val_evaluator=dict(type='PointMetric')
test_evaluator=val_evaluator
find_unused_parameters=True
train_cfg=dict(by_epoch=True, max_epochs=500)

# 学習ポリシー
param_scheduler=[
    dict(type='LinearLR', begin=0, end=500, start_factor=0.001,
         by_epoch=False),  # ウォームアップ
    dict(type='MultiStepLR',
         begin=1,
         end=500,
         milestones=[350, 400, 450, 490],
         gamma=0.1,
         by_epoch=True)
]
```

</details>

## モデルのトレーニング

モデルをトレーニングするには、事前に設定した SSCMA 作業環境を使用する必要があります。[インストール](/ja/ModelAssistant_Introduce_Installation)ガイドに従って Conda を使用して `sscma` という名前の仮想環境に SSCMA をインストールした場合、現在その仮想環境内にいることをまず確認してください。

次に、SSCMA プロジェクトのルートディレクトリで、以下のコマンドを実行してエンドツーエンドのメータ PFLD モデルをトレーニングします。

```sh
python3 tools/train.py \
    configs/pfld/pfld_mbv2n_112.py \
    --cfg-options \
        data_root='datasets/meter' \
        epochs=50
```

トレーニング中、モデルの重みと関連するログ情報はデフォルトで `work_dirs/pfld_mbv2n_112` パスに保存されます。また、[TensorBoard](https://www.tensorflow.org/tensorboard/get_started) などのツールを使用してトレーニングをモニタリングすることができます。

```sh
tensorboard --logdir work_dirs/pfld_mbv2n_112
```

トレーニングが完了すると、最新の FOMO モデルの重みファイルのパスが `work_dirs/pfld_mbv2n_112/last_checkpoint` ファイルに保存されます。この重みファイルのパスは、モデルを他の形式に変換する際に必要となるため、大切に保管してください。

:::tip

仮想環境が設定されているがアクティブ化されていない場合、以下のコマンドでアクティブ化できます。

```sh
conda activate sscma
```

:::

## テストと評価

### テスト

PFLD モデルのトレーニングが完了したら、特定の重みを指定して以下のコマンドでモデルをテストすることができます。

```sh
python3 tools/inference.py \
    configs/pfld/pfld_mbv2n_112.py \
    "$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)" \
    --cfg-options \
        data_root='datasets/meter'
```

:::tip

テスト中にリアルタイムでプレビューを行いたい場合、テストコマンドに `--show` パラメータを追加して予測結果を表示することができます。その他のオプションパラメータについては、ソースコード `tools/test.py` を参照してください。

:::

### 評価

モデルを実際のエッジコンピューティングデバイス上でさらにテストおよび評価するには、モデルをエクスポートする必要があります。モデルのエクスポートプロセスでは、SSCMA がモデルのプルーニングや蒸留などの最適化を行います。モデルのエクスポート方法については、[エクスポート](/ja/ModelAssistant_Tutorials_Export_Overview)セクションを参照してください。

### デプロイ

モデルをエクスポートした後、エッジコンピューティングデバイスにモデルをデプロイしてテストおよび評価を行うことができます。モデルのデプロイ方法については、[デプロイ](/ja/ModelAssistant_Deploy_Overview)セクションを参照してください。