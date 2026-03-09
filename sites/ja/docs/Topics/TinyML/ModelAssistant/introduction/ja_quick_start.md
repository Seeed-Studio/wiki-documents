---
description: モデルアシスタントのクイックスタート
title: クイックスタート
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Introduce_Quick_Start
last_update:
  date: 05/15/2025
  author: LynnL4
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/ModelAssistant_Introduce_Quick_Start/
---


# クイックスタート

[概要](/ja/ModelAssistant_Introduce_Overview)では、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)が提供する機能と特徴について紹介しました。[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)は複数の異なるモジュールに分かれており、それぞれのモジュールが対応するタスクを完了します。以下の手順に従うことで、迅速に始めることができます。

:::tip
[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)の初心者には、[Getting Started](#getting-started)から学び始めることをお勧めします。[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)や[OpenMMLab](https://github.com/open-mmlab)に精通しており、エッジコンピューティングデバイスへのデプロイ、既存のニューラルネットワークの修正、またはユーザー定義データセットでのトレーニングを試したい場合は、[Advanced](#advanced)を直接参照してください。
:::

## Getting Started

### モデルのデプロイ

デバイスにモデルをデプロイしたい場合は、[Deploy](/ja/ModelAssistant_Deploy_Overview)セクションを参照して、モデルのデプロイ方法を学んでください。

### モデルのトレーニング

モデルをトレーニングしたい場合は、まずColabプラットフォームでモデルをトレーニングすることを強くお勧めします。以下のチュートリアルを参照してください。

#### オブジェクト検出

| モデル                                                                                           | Colab                                                                                                                                                                                                                     |
|:------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Gender_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Detection_Swift-YOLO_192.md)                   | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Detection_Swift-YOLO_192.ipynb)          |
| [Digital_Meter_Water_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Water_Swift-YOLO_192.md)             | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Water_Swift-YOLO_192.ipynb)       |
| [Apple_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Apple_Detection_Swift-YOLO_192.md)                     | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Apple_Detection_Swift-YOLO_192.ipynb)           |
| [person_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/person_Detection_Swift-YOLO_192.md)                   | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/person_Detection_Swift-YOLO_192.ipynb)          |
| [Face_Detection_Swift-YOLO_96](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Face_Detection_Swift-YOLO_96.md)                         | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Face_Detection_Swift-YOLO_96.ipynb)             |
| [COCO_Detection_Swift-YOLO_320](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/COCO_Detection_Swift-YOLO_320.md)                       | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/COCO_Detection_Swift-YOLO_320.ipynb)            |
| [Gesture_Detection_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gesture_Detection_Swift-YOLO_192.md)                 | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gesture_Detection_Swift-YOLO_192.ipynb)         |
| [Digital_Meter_Electricity_Swift-YOLO_192](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Electricity_Swift-YOLO_192.md) | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Electricity_Swift-YOLO_192.ipynb) |

#### 画像分類

| モデル                                                                                                         | Colab                                                                                                                                                                                                                            |
|:--------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [MNIST_Classification_MobileNetV2_0.5_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.md)         | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.ipynb)     |
| [Gender_Classification_MobileNetV2_0.35_Rep_64](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Classification_MobileNetV2_0.35_Rep_64.md)     | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Classification_MobileNetV2_0.35_Rep_64.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_64](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_64.md)     | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_64.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_96](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_96.md)     | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_96.ipynb)   |
| [Person_Classification_MobileNetV2_0.35_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_32.md)     | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_32.ipynb)   |
| [CIFAR-10_Classification_MobileNetV2_0.35_Rep_32](https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.md) | [![Colabで開く](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.ipynb) |

## 上級

1. まず、[インストールガイド](/ja/ModelAssistant_Introduce_Installation)を参照して、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)の実行環境を構成してください。

2. 次に、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)の基本的な使用方法に慣れてください：

   - **モデルのトレーニング**については、[モデルトレーニング](/ja/ModelAssistant_Tutorials_Training_Overview)を参照して、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant)を使用してモデルをトレーニングする方法を学んでください。例からモデルを選択してトレーニングすることをお勧めします。

   - **モデルのエクスポート**。モデルのトレーニングを完了した後、エッジコンピューティングデバイスにデプロイするためには、まずモデルをエクスポートする必要があります。モデルのエクスポートに関するチュートリアルについては、[モデルエクスポート](/ja/ModelAssistant_Tutorials_Export_Overview)を参照してください。

   - **モデルの検証**。モデルの検証は、トレーニング後またはエクスポート後に実行できます。前者はニューラルネットワークとトレーニング結果の正確性を検証し、後者は主にエクスポートされたモデルの正確性を検証して、後のエッジコンピューティングデバイスでのデプロイとデバッグを容易にします。モデル検証のいくつかの方法は、上記の2つのステップのドキュメントに記載されています。

- **モデルのデプロイ**。エクスポートされたトレーニングモデルをエッジコンピューティングデバイスにデプロイしたい場合は、[デプロイメント](/ja/ModelAssistant_Deploy_Overview)を参照してください。
- **カスタムデータセット**。カスタムデータセットでトレーニングを行いたい場合は、[データセット](/ja/ModelAssistant_Tutorials_Datasets)を参照してください。

- **カスタムモデル**。既存のニューラルネットワークを修正したり、自分自身でニューラルネットワークを設計したい場合は、[モデル構成](/ja/ModelAssistant_Tutorials_Config)を参照してください。

## 必要な知識

### 📸 コンピュータビジョン:

コンピュータビジョンの基礎はデジタル画像処理に基づいています。そのため、まずデジタル画像処理（DIP）の基礎を学ぶ必要があります。その後、パターン認識や3Dジオメトリなどのコンピュータビジョンのトピックを学ぶことができます。線形代数を理解していると、次元削減などのコンピュータビジョンのいくつかの概念を完全に理解するのに役立ちます。コンピュータビジョンの基礎を理解した後は、深層学習、特に畳み込みニューラルネットワーク（CNN）の知識を構築する必要があります。

### 💻 プログラミング:

設計やプロトタイピングにはPythonで十分ですが、組み込み作業を行いたい場合はC++にも精通している必要があります。

### 🧰 ツール:

OpenCVはコンピュータビジョンの主要なツールであり、Numpyはデータ処理と分析の重要なツールです。これらを習得する必要があります。また、どのツールが利用可能で、それらをどのように使用するかを知っておく必要があります。さらに、深層学習フレームワークにも慣れる必要があります。最初は学びやすいKerasから始め、その後TensorflowやPyTorchを学ぶことをお勧めします。