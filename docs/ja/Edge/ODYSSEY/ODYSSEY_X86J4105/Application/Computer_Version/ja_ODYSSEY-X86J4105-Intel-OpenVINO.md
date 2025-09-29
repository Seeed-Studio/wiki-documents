---
description: ODYSSEY - X86J4105
title: Intel OpenVINO Toolkit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-Intel-OpenVINO
last_update:
  date: 05/15/2025
  author: w0x7ce

---


# ODYSSEY - X86J4105 に Intel® Distribution of OpenVINO™ Toolkit をインストールする

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

**Intel® Distribution of OpenVINO™ Toolkit** は、人間の視覚を模倣するアプリケーションやソリューションを迅速に展開するためのツールキットです。畳み込みニューラルネットワーク（CNN）に基づいており、コンピュータビジョン（CV）ワークロードを Intel® ハードウェア全体に拡張し、パフォーマンスを最大化します。このツールキットには、Intel® Deep Learning Deployment Toolkit（Intel® DLDT）が含まれています。

詳細については、[Intel® Distribution of OpenVINO™ Toolkit](https://docs.openvinotoolkit.org/) をご覧ください。

**注意:** 公式ドキュメントによると、OpenVINO™ Toolkit はさまざまなオペレーティングシステムにインストール可能です。**このチュートリアルでは、ODYSSEY - X86J4105 に Ubuntu 18.04.4 LTS をインストールし、Linux 上で OpenVINO™ Toolkit をインストールします。** 環境エラーを回避するため、このバージョンの Ubuntu をインストールすることを強く推奨します。

このチュートリアルは公式の [Install Intel® Distribution of OpenVINO™ Toolkit for Linux*](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html) を基に改変されています。

## ハードウェア要件

- 動作するコンピュータ

- モニター

- キーボードとマウス

- インターネット接続

## Ubuntu OS のインストール

まだ Ubuntu をインストールしていない場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-Installing-OS/) に従って ODYSSEY - X86J4105 に Ubuntu をインストールしてください。

## Intel® Distribution of OpenVINO™ Toolkit のインストール

Intel® [Distribution of OpenVINO™ Toolkit for Linux*](https://software.intel.com/en-us/openvino-toolkit/choose-download?elq_cid=6204639&erpm_id=9318801) から Intel® Distribution of OpenVINO™ Toolkit パッケージファイルをダウンロードします。ドロップダウンメニューから Intel® Distribution of OpenVINO™ Toolkit for Linux パッケージを選択してください。

1. Ubuntu でターミナルを開きます。

2. Intel Distribution of OpenVINO Toolkit for Linux* パッケージファイルをダウンロードしたディレクトリに移動します。ファイルを現在のユーザーの `Downloads` ディレクトリにダウンロードした場合:

```sh
cd ~/Download/
```

デフォルトでは、ファイルは `l_openvino_toolkit_p_<version>.tgz` として保存されます。

3. `.tgz` ファイルを解凍します:

```sh
tar -xvzf l_openvino_toolkit_p_<version>.tgz
```

ファイルは `l_openvino_toolkit_p_<version>` フォルダに解凍されます。

4. `l_openvino_toolkit_p_<version>` ディレクトリに移動します:

```sh
cd l_openvino_toolkit_p_<version>
```

5. 次のスクリプトを実行して Intel® Distribution of OpenVINO™ Toolkit をインストールします:

```sh
sudo ./install_GUI.sh
```

**注意:** これは GUI インストールウィザードです。コマンドラインインストールの手順もあります: `sudo ./install.sh`。ただし、エラーを回避するために GUI インストールを使用することを強く推奨します。

6. 画面の指示に従います。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-01.png)

7. デフォルトオプションを選択した場合、インストール概要の GUI 画面は次のようになります:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-02.png)

- **注意:** インストールディレクトリやインストールするコンポーネントを変更するカスタマイズも可能です:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-03.png)

`root` としてインストールした場合、Intel Distribution of OpenVINO のデフォルトインストールディレクトリは `/opt/intel/openvino/` です。

8. コアコンポーネントがインストールされると、完了画面が表示されます:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-04.png)

## 外部ソフトウェア依存関係のインストール

これらの依存関係は以下のために必要です：

- Intel に最適化された OpenCV ライブラリのビルド

- ディープラーニング推論エンジン

- ディープラーニングモデルオプティマイザツール

1. `install_dependencies` ディレクトリに移動します：

```sh
cd /opt/intel/openvino/install_dependencies
```

2. 外部ソフトウェア依存関係をダウンロードしてインストールするスクリプトを実行します：

```sh
sudo -E ./install_openvino_dependencies.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/dependent-complete.png)

これはインターネット速度に依存するため、しばらくお待ちください。外部ソフトウェア依存関係がインストールされました！

## 環境変数の設定

OpenVINO™ アプリケーションをコンパイルおよび実行する前に、いくつかの環境変数を更新する必要があります。以下のスクリプトを実行して、一時的に環境変数を設定してください：

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

**注意:** OpenVINO の環境変数はシェルを閉じると削除されます。オプションとして、以下の手順で環境変数を永続的に設定することができます：

1. `<user_directory>` の `.bashrc` ファイルを開きます。

```sh
nano /home/USERNAME/.bashrc
```

`USERNAME` を自分のユーザー名に置き換えてください。

2. ファイルの末尾に以下の行を追加します：

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/source-environment.png)

3. **Ctrl + O** を押して保存し、**Ctrl + X** を押して終了します。

4. 変更をテストするには、新しいターミナルを開きます。ターミナルの上部に `[setupvars.sh] OpenVINO environment initialized` と表示されるはずです。

## モデルオプティマイザの設定

モデルオプティマイザは、Caffe*、TensorFlow*、Apache MXNet*、ONNX*、Kaldi* などの一般的なディープラーニングフレームワークからトレーニング済みモデルをインポートするための Python* ベースのコマンドラインツールです。

モデルオプティマイザは Intel Distribution of OpenVINO ツールキットの重要なコンポーネントです。モデルオプティマイザを使用せずにトレーニング済みモデルで推論を行うことはできません。トレーニング済みモデルをモデルオプティマイザで処理すると、ネットワークの中間表現（IR）が出力されます。中間表現は、モデル全体を記述する 2 つのファイルで構成されています：

- `.xml`: ネットワークトポロジーを記述

- `.bin`: 重みとバイアスのバイナリデータを含む

モデルオプティマイザに関する詳細は、[Model Optimizer Developer Guide](https://docs.openvinotoolkit.org/latest/_docs_MO_DG_Deep_Learning_Model_Optimizer_DevGuide.html) を参照してください。

### モデルオプティマイザ設定手順

すべてのサポートされているフレームワークを一度に設定する方法 **または** 個別に設定する方法を選択できます。ニーズに最適なオプションを選んでください。エラーメッセージが表示された場合は、すべての依存関係がインストールされていることを確認してください。

**オプション 1: すべてのサポートされているフレームワークを同時に設定する**

1. モデルオプティマイザの前提条件ディレクトリに移動します：

```sh
cd /opt/intel/openvino/deployment_tools/model_optimizer/install_prerequisites
```

2. Caffe、TensorFlow、MXNet、Kaldi*、ONNX 用にモデルオプティマイザを設定するスクリプトを実行します：

```sh
sudo ./install_prerequisites.sh
```

**オプション 2: 各フレームワークを個別に設定する**

モデルフレームワーク用のスクリプトを実行します。複数のスクリプトを実行することも可能です：

- **Caffe** 用：

```
sudo ./install_prerequisites_caffe.sh
```

- **TensorFlow** 用：

```
sudo ./install_prerequisites_tf.sh
```

- **MXNet** 用：

```
sudo ./install_prerequisites_mxnet.sh
```

- **ONNX** 用：

```
sudo ./install_prerequisites_onnx.sh
```

- **Kaldi** 用：

```
sudo ./install_prerequisites_kaldi.sh
```

これで、サンプルをコンパイルして実行する準備が整いました！

## インストールを検証するためのスクリプトを実行

**ODYSSEY - X86J4105 の CPU 上でインストールを検証し、2つのサンプルをコンパイルするには：**

1. 推論エンジンのデモディレクトリに移動します：

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. **画像分類検証スクリプトを実行します：**

```sh
./demo_squeezenet_download_convert_run.sh
```

この検証スクリプトは、SqueezeNet モデルをダウンロードし、Model Optimizer を使用してモデルを `.bin` および `.xml` の中間表現（IR）ファイルに変換します。推論エンジンはこのモデル変換を必要とし、IR を入力として使用することで Intel ハードウェア上で最適なパフォーマンスを実現します。

この検証スクリプトは [Image Classification Sample Async アプリケーション](https://docs.openvinotoolkit.org/latest/_inference_engine_samples_classification_sample_async_README.html) をビルドし、デモディレクトリにある `car.png` 画像で実行します。検証スクリプトが完了すると、上位10カテゴリのラベルと信頼度が表示されます：

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-1.png)

**推論パイプライン検証スクリプトを実行します：**

```sh
./demo_security_barrier_camera.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

このスクリプトは3つの事前トレーニング済みモデル IR をダウンロードし、[Security Barrier Camera Demo](https://docs.openvinotoolkit.org/latest/_demos_security_barrier_camera_demo_README.html) アプリケーションをビルドし、ダウンロードしたモデルとデモディレクトリにある `car_1.bmp` 画像を使用して推論パイプラインを表示します。この検証スクリプトは、車両認識を使用しており、車両属性が互いに基づいて特定の属性に絞り込まれる仕組みを示します。

検証スクリプトについて詳しくは、`/opt/intel/openvino/deployment_tools/demo` 内の **README.txt** ファイルを参照してください。

Intel Distribution of OpenVINO™ の事前トレーニング済み物体検出および物体認識モデルの説明については、[OpenVINO™ Toolkit Pre-Trained Models の概要](https://docs.openvinotoolkit.org/latest/_models_intel_index.html) を参照してください。

これで、CPU を使用してトレーニング済みモデルを操作するために必要なすべてのインストール、設定、およびビルド手順が完了しました。ODYSSEY - X86J4105 を使用してモデルをトレーニングするための強力な Intel OpenVINO ツールを自由に探索してください！

## リソース

- [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/)

- [Linux* 用 Intel® Distribution of OpenVINO™ toolkit のインストール](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html)

## 技術サポート & 製品ディスカッション
弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>