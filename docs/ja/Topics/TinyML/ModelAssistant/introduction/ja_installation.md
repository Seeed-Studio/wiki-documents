---
description: モデルアシスタントのインストール
title: インストール
keywords:
- sscma model assistant ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Introduce_Installation
last_update:
  date: 05/15/2025
  author: LynnL4
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# インストール

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) の実行環境は PyTorch と OpenMMLab のさまざまなサードパーティライブラリに依存しています。[GitHub](https://github.com/Seeed-Studio/ModelAssistant) で SSCMA のコードを見つけることができます。始めるには、[こちら](https://pytorch.org/get-started/locally/) の指示に従ってローカルに PyTorch をインストールし、必要な OpenMMLab ライブラリを取得してください。

- [MMCV](https://github.com/open-mmlab/mmcv): OpenMMLab コンピュータビジョン基盤ライブラリ。
- [MMClassification](https://github.com/open-mmlab/mmclassification): OpenMMLab 画像分類ツールキットとベンチマーク。分類タスクに加えて、さまざまなバックボーンネットワークを提供します。
- [MMDetection](https://github.com/open-mmlab/mmdetection): OpenMMLab 検出ツールボックスとベンチマーク。
- [MMPose](https://github.com/open-mmlab/mmpose): OpenMMLab 検査ツールボックスとベンチマーク。
- [MIM](https://github.com/open-mmlab/mim): MIM は OpenMMLab プロジェクトとその拡張機能を開始およびインストールし、OpenMMLab モデルライブラリを管理するための統一インターフェースを提供します。

## 前提条件

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) は Linux、Windows、macOS で動作します。**Python パッケージを管理するために [Miniconda](https://docs.conda.io/en/latest/miniconda.html) を使用することを強くお勧めします。** 以下の手順に従って環境を準備してください。

:::tip
Miniconda は conda の無料の最小インストーラーであり、[Miniconda公式ウェブサイト](https://docs.conda.io/en/latest/miniconda.html) から Miniconda3 をダウンロードしてインストールできます。
:::

### ステップ 0 - Git リポジトリをクローンする

まず、[SSCMA ソースコード](https://github.com/Seeed-Studio/ModelAssistant) をローカルにクローンする必要があります。Git を使用して管理し、GitHub にホストしています。以下にクローンするための 2 つの異なる方法を提供しています（どちらかを選択してください）。Git がインストールされていない場合は、[Git ドキュメント](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) を参照してコンピュータに Git を設定してください。

<Tabs>
<TabItem value="HTTPS" label="HTTPS">

```sh
git clone https://github.com/Seeed-Studio/ModelAssistant.git --depth 1 && \
cd ModelAssistant
```

</TabItem>
<TabItem value="SSH" label="SSH">

```sh
git clone git@github.com:Seeed-Studio/ModelAssistant.git --depth 1 && \
cd ModelAssistant
```

</TabItem>

</Tabs>

### ステップ 1 - 仮想環境を作成する

conda がインストールされていると仮定して、conda 仮想環境を**作成**して**アクティブ化**します。

```sh
conda create --name sscma python=3.8 -y && \
conda activate sscma
```

### ステップ 2 - PyTorch をインストールする

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) は PyTorch に依存しています。以下のコードを実行する前に、先ほど作成した仮想環境を**アクティブ化**していることを再度確認してください。

GPU (CUDA) を搭載したデバイスの場合、GPU アクセラレーションをサポートする依存関係をインストールすることをお勧めします。以下に 2 つの異なるケースで選択できる構成オプションを記載しています。ハードウェア環境に応じて手動で選択してください。

- CPU のみのプラットフォーム:

<Tabs>
<TabItem value="conda" label="conda">

```sh
conda install pytorch torchvision torchaudio cpuonly -c pytorch
```

</TabItem>
<TabItem value="pip" label="pip">

```sh
pip3 install torch torchvision torchaudio
```

</TabItem>
</Tabs>

- GPU (CUDA) プラットフォーム:

<Tabs>
<TabItem value="conda" label="conda">

```sh
conda install pytorch torchvision torchaudio pytorch-cuda=11.7 cudatoolkit=11.7 -c pytorch -c nvidia
```

</TabItem>
<TabItem value="pip" label="pip">

```sh
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu117
```

</TabItem>
</Tabs>

:::tip
NVIDIA GPU 用の CUDA がプラットフォームにインストールされていない場合は、[NVIDIA CUDA Toolkit Archive Website](https://developer.nvidia.com/cuda-toolkit-archive) で CUDA インストーラーを見つけることができます。ホスト環境で CUDA 11.7 以上を使用することをお勧めします。他のプラットフォームで PyTorch をインストールする方法については、[PyTorch公式ウェブサイト](https://pytorch.org/get-started/locally/) を参照してください。
:::

### ステップ 3 - 必須依存関係をインストールする

**仮想環境をアクティブ化し、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) ソースコードのメイン作業ディレクトリにいることを確認してください。** 次に、以下のコードを実行して基本的な依存関係の構成を完了します。

- [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) の依存関係をインストール

```sh
pip3 install -r requirements/base.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

### ステップ 4 - 追加依存関係をインストールする (オプション)

モデル変換や推論テストを実行する必要がある場合は、以下の追加依存関係もインストールする必要があります。

```sh
pip3 install -r requirements/inference.txt -r requirements/export.txt
```

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) に変更を加えてそれを提出したい場合は、以下のコマンドを実行することをお勧めします。これにより、コミット時にコードをチェックしやすくなります。

```sh
pip3 install -r requirements/tests.txt
pre-commit install
```

## その他の方法

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 環境の設定は、Linux（Ubuntu 20.04~22.10 でテスト済み）上で Conda をセットアップしている場合、シェルスクリプトを使用して自動的に行うことができます。

```bash
bash scripts/setup_linux.sh
```

または、Conda の設定ファイルを使用して手動で設定することもできます。

<Tabs>
<TabItem value="CPU" label="CPU">

```sh
conda env create -n sscma -f environment.yml && \
conda activate sscma && \
pip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

</TabItem>
<TabItem value="GPU (CUDA)" label="GPU (CUDA)">

```sh
conda env create -n sscma -f environment_cuda.yml && \
conda activate sscma && \
pip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

</TabItem>
</Tabs>

## 注意事項

Miniconda のインストールを完了し、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) を Conda で設定した後、`sscma` という名前の Conda 仮想環境を作成し、その仮想環境内に依存関係をインストールしました。以降の [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) に関連する設定や開発を行う際は、[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 仮想環境内にいることを確認してください。以下のコマンドで仮想環境を有効化できます。

```sh
conda activate sscma
```

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) 仮想環境を再設定または削除したい場合は、以下のコマンドを実行してください。

```sh
conda env remove -n sscma
```

## よくある質問

- パッケージを anaconda のデフォルトチャンネルからインストールする際に接続速度が遅いです。

  忍耐強く待つか、[SJTU ミラー](https://mirror.sjtu.edu.cn/docs/anaconda)、[TUNA ミラー](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda) などのサードパーティのミラーチャンネルを試してください。