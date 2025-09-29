---
description: モデルアシスタント用の設定
title: 設定
keywords:
- sscma モデルアシスタント ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Tutorials_Config
last_update:
  date: 05/15/2025
  author: LynnL4
---


# 設定

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) は、[OpenMMLab - MMEngine](https://github.com/open-mmlab/mmengine) が提供する設定処理システムを使用しており、モジュール化され継承可能な設計により、さまざまなニューラルネットワークのテストや検証に対して統一された設定アクセスインターフェースを提供します。

## ディレクトリ構造

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) で使用される設定ファイルは `configs` ディレクトリに配置されており、異なるタスクの下で異なるモデルをトレーニングするために使用されます。タスクごとに多くのサブフォルダを作成しており、各サブフォルダには複数のモデルの異なるトレーニングパイプラインパラメータが格納されています。

```sh
configs
├── _base_
│   ├── datasets
│   │   └── coco_detection.py
│   ├── default_runtime_cls.py
│   ├── default_runtime_det.py
│   ├── default_runtime_pose.py
│   └── schedules
│       ├── schedule_1x.py
│       ├── schedule_20e.py
│       └── schedule_2x.py
├── classification
│   ├── base.py
│   ├── mobnetv2_1.0_1bx16_300e_custom.py
│   └── mobnetv3_small_1bx16_300e_custom.py
├── fomo
│   ├── fomo_efficientnet_b0_x8_abl_coco.py
│   ├── fomo_mobnetv2_0.35_x8_abl_coco.py
│   └── fomo_squeezenet_0.1_x8_abl_coco.py
├── pfld
│   ├── pfld_dan_fpn_x8_192.py
│   ├── pfld_mbv2n_112.py
│   ├── pfld_mbv3l_192.py
│   └── README.md
└── swift_yolo
    ├── base_arch.py
    └── swift_yolo_tiny_1xb16_300e_coco.py
└── <その他のタスク...>
```

:::tip

`_base_` という名前のタスクフォルダは、他のタスクの継承オブジェクトです。設定ファイルの継承に関する詳細は、[MMEngine - 設定ファイルの継承](https://mmengine.readthedocs.io/en/latest/advanced_tutorials/config.html#id3) を参照してください。

:::

## 設定構造

`fomo_mobnetv2_0.35_x8_abl_coco.py` 設定ファイルを例に取り、異なる機能モジュールに応じてこの設定ファイル内のさまざまなフィールドを紹介します。

### 重要なパラメータ

トレーニング設定を変更する際には、通常以下のパラメータを変更する必要があります。例えば、`height` と `width` の要素は通常画像サイズを指します。そのため、これらのパラメータを設定ファイル内で個別に定義することをお勧めします。

```python
height=96       # 入力画像の高さ
width=96        # 入力画像の幅
batch_size=16   # 検証中の単一GPUのバッチサイズ
workers=4       # 検証中の単一GPUのデータを事前取得するワーカー数
epoches=300     # 最大トレーニングエポック数: 300エポック
lr=0.001        # 学習率
```

### モデル設定

FOMOモデルの設定ファイルでは、モデルを使用して検出アルゴリズムのコンポーネント（バックボーン、ネックなどのニューラルネットワークコンポーネントを含む）を設定します。以下はモデル設定の一部です：

```python
num_classes=2                                   # クラス数
model=dict(
    type='Fomo',                                # 検出器の名前
    backbone=dict(
        type='MobileNetV2',
        widen_factor=0.35,
        out_indices=(2, )),                     # バックボーンの設定
    head=dict(
        type='Fomo_Head',                       # ヘッドの設定
        input_channels=16,                      # 入力チャンネル数、これはネックの入力チャンネル数と一致
        num_classes=num_classes,                # 分類のクラス数
        middle_channels=[96, 32],               # ヘッドの畳み込みの出力チャンネル数
        act_cfg='ReLU6',                        # 活性化関数の設定
        loss_cls=dict(type='BCEWithLogitsLoss', # この損失はシグモイド層とBCELossを1つのクラスで組み合わせたもの
                      reduction='none',
                      pos_weight=40),
        loss_bg=dict(type='BCEWithLogitsLoss', reduction='none'),
        cls_weight=40)                          # pos_weightのパラメータ
)
```

### データセットと評価器の設定

データセットとデータパイプラインはデータローダーを構築するために設定する必要があります。この部分の複雑さのため、中間変数を使用してデータローダー設定の記述を簡略化しています。より複雑なデータ拡張方法は、`sscma/datasets/pipelines` パスで見つけることができます。

ここでは、[Custom COCO_MASK Dataset](/ja/ModelAssistant_Tutorials_Datasets) を使用するFOMOのトレーニングおよびテストパイプラインを示します：

```python
dataset_type='FomoDatasets'   # データセットタイプ、これによりデータセットが定義される
data_root=''                  # データのルートパス
train_pipeline=[              # トレーニングデータの読み込みパイプライン
    dict(type='RandomResizedCrop', height=height, width=width, scale=(0.90, 1.1),
         p=1),                                 # FOMO用のalbumentationのRandomResizedCrop拡張
    dict(type='Rotate', limit=20),             # 回転変換、制限角度20度
    dict(type='RandomBrightnessContrast',      # albumentationのRandomBrightnessContrast拡張
         brightness_limit=0.2,                 # 明るさ変更の係数範囲
         contrast_limit=0.2,                   # コントラスト変更の係数範囲
         p=0.5),                               # 変換を適用する確率
    dict(type='HorizontalFlip', p=0.5),        # 入力をy軸周りで水平反転
]
test_pipeline=[dict(type='Resize', height=height, width=width,
                    p=1)]                      # 指定された高さと幅に入力をリサイズ

data=dict(samples_per_gpu=batch_size,          # トレーニング中の単一GPUのバッチサイズ
          workers_per_gpu=workers,             # トレーニング中の単一GPUのデータを事前取得するワーカー数
          train_dataloader=dict(collate=True), # サンプルリストをマージしてミニバッチを形成するフラグ
          val_dataloader=dict(collate=True),
          train=dict(type=dataset_type,
                     data_root=data_root,
                     ann_file='annotations/person_keypoints_train2017.json',
                     img_prefix='train2017',   # アノテーションファイルのパスと画像パスのプレフィックス
                     pipeline=train_pipeline),
          val=dict(type=dataset_type,
                   data_root=data_root,
                   test_mode=True,             # アノテーションや画像のフィルタリングを避けるためのデータセットのテストモードを有効化
                   ann_file='annotations/person_keypoints_val2017.json',
                   img_prefix='val2017',
                   pipeline=test_pipeline),
          test=dict(type=dataset_type,
                    data_root=data_root,
                    test_mode=True,
                    ann_file='annotations/person_keypoints_val2017.json',
                    img_prefix='val2017',
                    pipeline=test_pipeline))
```

評価器は、トレーニング済みモデルの検証およびテストデータセットに対するメトリクスを計算するために使用されます。評価器の設定は、1つまたは複数のメトリクス設定から構成されます。

```python
evaluation=dict(interval=1, metric=['mAP'], fomo=True) # mAPを評価するための検証メトリクス
find_unused_parameters=True
```

### オプティマイザー設定

```python
optimizer=dict(type='Adam', lr=lr, weight_decay=0.0005)         # 基本学習率と重み減衰を持つAdam勾配降下オプティマイザー
optimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2)) # オプティマイザーフックを構築するための設定
```

:::tip

Hookの適用に関する詳細は、[MMEngine - Hook](https://mmengine.readthedocs.io/en/latest/tutorials/hook.html)を参照してください。

:::

### 設定ファイルの継承

ディレクトリ`config/_base_`にはデフォルトの設定ファイルが含まれており、設定ファイルは`_base_`内のコンポーネントで構成されており、これをプリミティブと呼びます。

簡単にテストを行うために、既存の設定ファイルを継承することを推奨します。例えば、FOMOモデルのトレーニング設定ファイルは`_base_='. /_base_/default_runtime_det.py'`であり、継承したファイルを基に設定ファイル内の必要なフィールドを修正します。

```python
_base_='../_base_/default_runtime_det.py
checkpoint_config=dict(interval=5) # チェックポイントフックを設定するための設定
log_config=dict(                   # ロガーフックを登録するための設定
            interval=150,          # ログを出力する間隔
            hooks=[
                dict(type='TextLoggerHook', ndigits=4),       # TXTロガー
                dict(type='TensorboardLoggerHook', ndigits=4) # Tensorboardロガー
            ])                                                # トレーニングプロセスを記録するために使用されるロガー
epochs=300
runner=dict(type='EpochBasedRunner',  # 使用するランナーのタイプ（例：IterBasedRunnerまたはEpochBasedRunner）
            max_epochs=epochs)        # 合計max_epochsでワークフローを実行するランナー。IterBasedRunnerの場合は`max_iters`を使用
dist_params=dict(backend='nccl')      # 分散トレーニングを設定するためのパラメータ。ポートも設定可能
log_level = 'INFO'                    # ログのレベル
load_from = None                      # 指定されたパスから事前学習済みモデルをロードする。この場合、トレーニングは再開されない
resume_from = None                    # 指定されたパスからチェックポイントを再開する。チェックポイントが保存されたエポックからトレーニングが再開される
workflow = [('train', 1)]             # ランナーのワークフロー。`[('train', 1)]`は1つのワークフローのみが存在し、'train'という名前のワークフローが1回実行されることを意味する。このワークフローは合計300エポックでモデルをトレーニングする
opencv_num_threads = 1                # メモリを節約するためにOpenCVのマルチスレッドを無効化
work_dir = './work_dirs'              # 現在の実験のモデルチェックポイントとログを保存するディレクトリ
```

## パラメータ化された設定

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)の`tools/train.py`または`tools/test.py`を使用してジョブを送信する際に、`--cfg-options`を指定して設定を一時的に上書きすることができます。

:::tip

元の設定内の辞書キーの順序で設定オプションを指定し、設定キーの辞書チェーンを更新できます。例えば、`--cfg-options data_root='. /dataset/coco'`はデータセットのデータルートディレクトリを変更します。

:::

## FAQs

- 異なるモデルの設定ファイルが異なる場合、どのように理解すればよいですか？

  詳細については、[MMDet Config](https://mmdetection.readthedocs.io/en/latest/tutorials/config.html)、[MMPose Config](https://mmpose.readthedocs.io/en/latest/tutorials/0_config.html)、および [MMCls Config](https://mmclassification.readthedocs.io/en/latest/tutorials/config.html) を参照してください。