---
description: モデルアシスタント用データセット
title: データセット
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Tutorials_Datasets
last_update:
  date: 05/15/2025
  author: LynnL4
---


# データセット

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) はさまざまなデータセットをサポートしています。インターネット上で異なるデータセットを閲覧およびダウンロードすることができるほか、自分でデータセットをアノテーションして作成することも可能です。

## インターネットデータセット

### [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) は現在、対応するモデルのトレーニングおよびテスト用に以下の公式データセットを提供しています。

特定のデータセットをダウンロードするコマンドを実行する前に、必ず **[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) のルートディレクトリ** にいることを確認してください。このコマンドはデータセットを自動的にダウンロードし、現在のディレクトリ内の `datasets` というフォルダに保存し、最終的に解凍します。

- [カスタムメーターデータセットをダウンロード](https://files.seeedstudio.com/sscma/datasets/meter.zip):

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/meter.zip -P datasets && unzip datasets/meter.zip -d datasets
  ```

- [COCO_MASK データセットをダウンロード](https://files.seeedstudio.com/sscma/datasets/coco_mask.zip):

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/coco_mask.zip -P datasets && unzip datasets/coco_mask.zip -d datasets
  ```

### Roboflow

[Roboflow](https://public.roboflow.com/) は、CreateML JSON、COCO JSON、Pascal VOC XML、YOLO、Tensorflow TFRecords などの形式をサポートする、公開コンピュータビジョンデータセットの無料ホスティングプラットフォームです。また、対応するデータセットの縮小版や拡張版も追加されています。

:::tip

Roboflow でデータセットを探すことを強くお勧めします。アカウントを作成するだけで、数百種類の異なるデータセットを無料でダウンロードし、特定のニーズに対応することができます。

:::

以下は、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 用のデータセットを Roboflow で見つけることができる例です：

| データセット | 説明 |
| -- | -- |
| [Digital Meter Water](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-water/dataset/1) | デジタルメーターウォーターデータセット |
| [Digital Meter Seg7](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-seg7/dataset/1) | デジタルメーター Seg7 データセット |
| [Digit Seg7 Classification](https://universe.roboflow.com/seeed-studio-ovcjn/digit-seg7/1) | Digit Seg7 分類データセット |

### Kaggle

[Kaggle](https://www.kaggle.com/) はデータモデリングおよびデータ分析の競技プラットフォームです。企業や研究者がデータを公開し、統計学者やデータマイニングの専門家が最適なモデルを作成するために競い合います。Kaggle では数千ものデータセットが提供されており、[Kaggle データセット](https://www.kaggle.com/datasets) を訪問して、自分のニーズに合ったものを選ぶことができます。

## カスタムデータセット

カスタムデータセットを作成するには、通常以下の手順を実行します。

1. **データ収集:** 問題領域に関連するデータを収集します。このデータはテキスト、画像、音声、または動画形式である場合があります。

2. **データ整理:** 収集したデータをクリーンアップし、[アノテーション](#dataset-annotation)を行い、重複を削除して正確性と一貫性を確保します。このステップは、トレーニングされたモデルの精度を確保するために重要です。

3. **データセットの分割:** 整理されたデータセットをトレーニングセット、検証セット、テストセットに分割します。通常、70%、15%、15% の比率で分割します。

4. **データ形式の変換:** 整理されたデータセットをモデルが読み取れる形式（テキスト形式、画像形式など）に変換します。

5. **データセットの読み込み:** 変換されたデータセットをモデルに読み込んでトレーニングおよびテストを行います。データセットを読み込む際には、適切なデータローダーとバッチサイズを使用することが重要です。

6. **データ拡張（オプション、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) による実施を推奨）:** データセットに対して回転、反転、切り抜きなどのデータ拡張を行い、データセットの多様性と量を増やします。

## データセットのアノテーション

データセットのラベリングは、データセット内のサンプルを分類またはラベル付けするプロセスであり、通常は手動での介入が必要です。

データセットのラベリングプロセスは非常に重要であり、トレーニングされたモデルの品質を決定します。以下は、データセットをラベリングする一般的な方法とツールです。

- **手動アノテーション:** 各サンプルを手作業でアノテーションすることで、アノテーションの正確性を確保できますが、速度は遅くなります。

- **半自動アノテーション:** 手動アノテーションの結果を他のデータセットに適用することでアノテーション時間を短縮しますが、アノテーションの正確性が低下する可能性があります。

- **自動アノテーション:** キーワード抽出やテキスト分類などのアルゴリズムモデルを使用してデータを自動的にアノテーションします。アノテーションの効率を向上させることができますが、正確性が影響を受ける場合もあります。

一般的に使用されるデータラベリングツール:

- [LabelImg](https://github.com/heartexlabs/labelImg): 画像ラベリング用ツールで、PASCAL VOC、YOLOなどのさまざまなラベリング形式をサポート。

- [Labelbox](https://labelbox.com/): 画像、テキスト、動画などの形式をサポートするオンラインラベリングツールで、さまざまなラベリングテンプレートやカスタムテンプレートを提供。

- [Doccano](https://github.com/doccano/doccano): テキスト分類やシーケンスアノテーション用のオープンソースツールで、NER、POSなどのさまざまなアノテーション形式をサポート。

- [Annotator](https://github.com/openannotation/annotator): 画像、テキスト、音声などの形式をサポートする軽量なオンラインアノテーションツール。

- [VGG Image Annotator (VIA)](https://gitlab.com/vgg/via): 画像アノテーション用のオープンソースツールで、PASCAL VOC、YOLOなどのさまざまなアノテーション形式をサポート。

- [COCO Annotator](https://github.com/jsbroks/coco-annotator): ターゲット検出、セグメンテーション、キーポイントアノテーションなどのタスク向けのウェブベースの画像および動画アノテーションツール。

上記は一般的なデータアノテーションツールの一部です。異なるツールは異なるデータセットタイプやアノテーションニーズに適しているため、実際のニーズに応じて選択してください。