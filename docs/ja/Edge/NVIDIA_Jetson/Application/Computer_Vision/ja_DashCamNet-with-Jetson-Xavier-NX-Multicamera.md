---
description: DashCamNet と Jetson Xavier NX マルチカメラ
title: DashCamNet と Jetson Xavier NX マルチカメラ
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/DashCamNet-with-Jetson-Xavier-NX-Multicamera
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# DashCamNet と PeopleNet を使用した Jetson Xavier NX マルチカメラ

## はじめに

近年、自動運転、車載録画、違反監視の分野では、人工知能を活用して車両情報、車両ナンバープレート、周囲の障害物を特定することが一般的になっています。Nvidia NGC が提供する多数の事前学習済みモデルのおかげで、これらの複雑なタスクをより簡単に実行できるようになりました。

AI/機械学習モデルをゼロから作成するには、多くの時間と費用がかかる可能性があります。[転移学習](https://blogs.nvidia.com/blog/2019/02/07/what-is-transfer-learning/)は、既存のニューラルネットワークモデルから学習済みの特徴を新しいモデルに抽出するために使用できる人気のある手法です。NVIDIA TAO (*Train, Adapt, and Optimize*) Toolkit は、[NVIDIA TAO](https://developer.nvidia.com/tao) の CLI および Jupyter Notebook ベースのソリューションであり、AI/ディープラーニングフレームワークの複雑さを抽象化し、ゼロからの学習と比較してわずかなデータで高品質な NVIDIA 事前学習済み AI モデルを微調整できるようにします。

TAO Toolkit はまた、EfficientNet、YOLOv3/v4、RetinaNet、FasterRCNN、UNET など、NVIDIA に最適化されたモデルアーキテクチャとバックボーンの 100 以上の組み合わせをサポートしています。

<!-- NVIDIA の [リポジトリ](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) と Tomasz の [プロジェクト](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines) に感謝し、Jetson Xavier NX にマルチカメラを展開して車両と人を検出します。[Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) および [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) は、このデモに適しています。 -->

NVIDIA の [リポジトリ](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) と Tomasz の [プロジェクト](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines) に感謝し、Jetson Xavier NX にマルチカメラを展開して車両と人を検出します。[Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) は、このデモに適しています。

*NVIDIA TAO Toolkit は以前、NVIDIA Transfer Learning Toolkit (Tlt) と呼ばれていました。*

<p style={{textAlign: 'center'}}><img src="https://developer.nvidia.com/sites/default/files/akamai/metropolis-and-iva-tao-toolkit-sw-stack-update-diagram-1875240-r7.jpg" alt="pir" width={800} height="auto" /></p>

## 必要な材料

### ハードウェアセットアップ

<!-- - [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) / [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) -->
- [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)

<p style={{textAlign: 'center'}}><img src="https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/jetson-xavier-nx/products/jetson-xavier-nx-dev-kit-2c50-D.jpg" alt="pir" width={300} height="auto" /></p>

- USB ウェブカメラ / Raspberry Pi カメラ V2.1 / [IMX219-130 8MP カメラ](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) / [高品質 12.3MP IMX477 カメラ](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<p style={{textAlign: 'center'}}><img src="https://images.prismic.io/rpf-products/ffa68a46-fd44-4995-9ad4-ac846a5563f1_Camera%20V2%20Hero.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400" alt="pir" width={300} height="auto" /></p>

- HDMI、DP、または eDP インターフェースを備えたディスプレイ
- Linux ディストリビューションのオペレーティングシステムを搭載した PC

### ソフトウェアセットアップ

- Jetson Xavier NX 用 Jetpack 4.5 または 4.6
- Docker
- DeepStream
- TAO Toolkit
- Pypi(python3-pip) と仮想環境を備えた Python3.6
- NVIDIA Container Toolkit

ソフトウェアのインストール方法は、以下の手順で提供されます。

## 事前インストール

プロジェクトを開始する前に、Ubuntu に Docker Engine をインストールする必要があります。Docker Engine をインストールする方法はいくつかあり、ニーズに応じて選択できます。すでにセットアップ済みの場合は、このステップをスキップしてください。

- ほとんどのユーザーは、[Docker のリポジトリを設定](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)し、そこからインストールすることで、インストールやアップグレード作業を簡単に行います。これは推奨される方法です。
- 一部のユーザーは DEB パッケージをダウンロードして[手動でインストール](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package)し、アップグレードを完全に手動で管理します。これは、インターネットにアクセスできない環境（エアギャップシステム）で Docker をインストールする場合などに便利です。
- テストおよび開発環境では、一部のユーザーが自動化された[便利なスクリプト](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script)を使用して Docker をインストールすることを選択します。

ここでは、最初の方法を使用します。Docker をインストールする前に、バージョンが最新であることを確認する必要があります。古いバージョンの名前は `docker`、`docker.io`、または `docker-engine` である可能性があります。以下のコマンドを使用して確認できます：

```shell
sudo apt-get purge docker docker-engine docker.io containerd runc
```

Docker をアンインストールしても、`/var/lib/docker/` の内容（イメージ、コンテナ、ボリューム、ネットワークなど）は保持されます。クリーンインストールを開始したい場合は、このページの下部にある[Docker Engine のアンインストール](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine)セクションを参照してください。

### リポジトリを使用して Docker をインストール

新しいホストマシンに Docker Engine をインストールする前に、Docker リポジトリを設定する必要があります。その後、リポジトリから Docker をインストールおよび更新できます。

- **ステップ 1**. `apt` パッケージを使用してリポジトリを設定

`apt` パッケージインデックスを更新し、以下のコマンドを使用して `apt` が HTTPS 経由でリポジトリを使用できるようにするためのパッケージをインストールします：

   ```shell
    sudo apt-get update
    sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

Docker の公式 GPG キーを追加します：

   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

以下のコマンドを使用して **stable** リポジトリを設定します。**nightly** または **test** リポジトリを追加するには、以下のコマンド内の `stable` の後に `nightly` または `test`（またはその両方）という単語を追加します。[**nightly** および **test** チャンネルについて学ぶ](https://docs.docker.com/engine/install/)ことができます。

   ```shell
    echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

- **ステップ 2**. Docker Engine をインストール

`apt` パッケージインデックスを更新し、以下のコマンドを使用して Docker Engine と containerd の**最新バージョン**をインストールします：

   ```shell
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

`hello-world` イメージを実行して、Docker Engine が正しくインストールされているかどうかを確認できます。

   ```shell
    sudo docker run hello-world
   ```

- **ステップ 3**. 非 root ユーザーとして Docker を管理する

`docker` グループを作成します。

   ```shell
   sudo groupadd docker
   ```

ユーザーを `docker` グループに追加します。

   ```shell
   sudo usermod -aG docker $USER
   ```

グループメンバーシップを再評価するためにログアウトして再ログインします。

`sudo` を使用せずに `docker` コマンドを実行できることを確認するために、`hello-world` を実行します。

   ```shell
   docker run hello-world
   ```

- **ステップ 4**. NVIDIA Container Toolkit を設定

`stable` リポジトリと GPG キーを設定します：

   ```shell
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
      && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
   ```

パッケージリストを更新し、`nvidia-docker2` パッケージ（および依存関係）をインストールします：

   ```shell
   sudo apt-get update
   sudo apt-get install -y nvidia-docker2
   ```

デフォルトのランタイムを設定した後、Docker デーモンを再起動してインストールを完了します：

   ```shell
   sudo systemctl restart docker
   ```

## はじめに

### NVIDIA GPU Cloud CLI ARM64 Linux のインストール

**NVIDIA GPU Cloud (NGC) CLI** は、NGC コンテナレジストリ内の Docker コンテナを管理するための Python ベースのコマンドラインインターフェースです。NGC CLI を使用すると、ジョブの実行や組織およびチームスペース内の Docker リポジトリの表示など、NGC ウェブサイトで利用可能な多くの操作を実行できます。

- **ステップ 1**. [CLI ダウンロード](https://ngc.nvidia.com/setup/installers/cli) ページに移動し、バイナリを含む zip ファイルをダウンロードします。ARM64 用の NGC CLI バイナリは、Ubuntu 18.04 以降のディストリビューションでサポートされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/NGC.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 2**. zip ファイルを権限のあるディレクトリに転送し、解凍してバイナリを実行します。

コマンドラインからダウンロード、解凍、インストールすることもできます。権限のあるディレクトリに移動して、次のコマンドを実行してください：

```shell
wget -O ngccli_arm64.zip https://ngc.nvidia.com/downloads/ngccli_arm64.zip && unzip -o ngccli_arm64.zip && chmod u+x ngc
```

ダウンロード中にファイルが破損していないことを確認するために、バイナリの md5 ハッシュをチェックします：

```shell
md5sum -c ngc.md5
```

- **ステップ 3**. 現在のディレクトリをパスに追加します：

```shell
echo "export PATH=\"\$PATH:$(pwd)\"" >> ~/.bash_profile && source ~/.bash_profile
```

NGC CLI を使用するには、コマンドを実行するための設定が必要です。

- **ステップ 4**. 次のコマンドを入力し、プロンプトが表示されたら API キーを入力します：

```shell
ngc config set
```

#### NGC API キーの生成

NGC CLI を設定するには API キーが必要です。これは NGC ウェブサイトを通じて生成できます。

- **ステップ 1**. [ウェブサイト](https://catalog.ngc.nvidia.com/) に移動し、「Sign In/Sign Up」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302020851671.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 2**. NVIDIA 開発者としてアカウントを登録します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021137914.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 3**. アカウントを選択して続行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021226602.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 4**. ページの右上にある「Setup」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021332972.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 5**. 「Get API Key」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021429846.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 6**. 「Generate API Key」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021504292.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 7**. API キーがページの下部に表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021630443.png" alt="pir" width={800} height="auto" /></p>

### TAO Toolkit のインストール

まず Python3 と python3-pip をインストールします：

```shell
sudo apt install -y python3 python3-pip
```

TAO Toolkit は NVIDIA PyIndex にホストされている Python pip パッケージです。このパッケージは、NGC Docker レジストリとやり取りするために Docker の restAPI を使用して、基盤となる Docker コンテナをプルしてインスタンス化します。前の手順で、NGC アカウントを設定し、それに関連付けられた API キーを生成しました。[インストール前提条件](https://docs.nvidia.com/tao/tao-toolkit/text/tao_toolkit_quick_start_guide.html#install-prereq) セクションの詳細については、リンクをクリックして NGC アカウントの作成と API キーの取得に関する詳細を確認してください。

#### **仮想環境 - Virtualenv**

仮想環境は、Python の作業コピーを分離して特定のプロジェクトで作業できるようにするものです。他のプロジェクトに影響を与えることを心配せずに作業できます。例えば、Django 1.3 を必要とするプロジェクトと Django 1.0 を必要とするプロジェクトを同時に処理できます。[こちら](http://pypi.python.org/pypi/virtualenv) をクリックして、分離された Python 環境を作成できます。

まず仮想環境を設定してから TAO Toolkit をインストールすることを強くお勧めします。

- pip を使用して virtualenv をインストールします：

```shell
pip install virtualenv
```

- 仮想環境を作成します：

```shell
virtualenv venv
```

このコマンドを実行したディレクトリに Python のコピーが作成され、`venv` というフォルダに配置されます。

- 仮想環境を有効化します：

```shell
source venv/bin/activate
```

- 仮想環境での作業を一時的に終了する場合は、次のコマンドで無効化できます：

```shell
deactivate
```

これにより、システムのデフォルトの Python インタープリタとそのすべてのインストール済みライブラリに戻ります。

仮想環境を削除するには、そのフォルダを削除するだけです。

**virtualenvwrapper**

時間が経つと、システム全体に仮想環境が散らばり、その名前や場所を忘れる可能性があります。そのため、virtualenvwrapper を使用します。[virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/index.html) は、仮想環境での作業をより快適にする一連のコマンドを提供します。また、すべての仮想環境を一箇所にまとめます。

インストールするには（**virtualenv** がすでにインストールされていることを確認してください）：

```shell
pip install virtualenvwrapper
export WORKON_HOME=~/Envs
source /usr/local/bin/virtualenvwrapper.sh
```

詳細については、[virtualenvwrapper の完全なインストール手順](http://virtualenvwrapper.readthedocs.org/en/latest/install.html) を参照してください。

*この[リンク](https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html)の指示に従って、virtualenvwrapperを使用してPythonの仮想環境をセットアップしてください。*

#### **仮想環境でPythonバージョンを設定する**

- **ステップ 1**. `virtualenv`と`virtualenvwrapper`をインストールする指示に従った後、`virtualenv`内でPythonバージョンを設定します。以下のいずれかの方法で設定できます：

- 環境変数`VIRTUALENVWRAPPER_PYTHON`を定義します。この変数は、ローカルマシンにインストールされているpython3バイナリのパスを指す必要があります。また、`.bashrc`または`.bash_profile`に追加して、デフォルトでPythonの`virtualenv`を設定することもできます。

```shell
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
```

- `virtualenvwrapper`を使用して`virtualenv`を作成する際に、python3バイナリのパスを指定します。

```shell
mkvirtualenv launcher -p /path/to/your/python3
```

- **ステップ 2**. `virtualenv`にログインすると、コマンドプロンプトに仮想環境の名前が表示されます。

```shell
   (launcher) py-3.6.9 desktop:
```

- **ステップ 3**. セッションが終了したら、`deactivate`コマンドを使用して`virtualenv`を無効化できます。

```shell
deactivate
```

- **ステップ 4**. 作成した`virtualenv`環境を再度有効化するには、`workon`コマンドを使用します。

```shell
workon launcher
```

#### **TAOパッケージをインストールする**

- **ステップ 1**. 必要な環境がすでにセットアップされています。次に、以下のコマンドを使用してTAO Launcher Pythonパッケージ`nvidia-tao`をインストールします。

```shell
pip3 install nvidia-pyindex
pip3 install nvidia-tao
```

- **ステップ 2**. `tao`コマンドを使用してエントリポイントを呼び出します。

```
tao --help
```

上記コマンドのサンプル出力は以下の通りです：

```
usage: tao [-h]
         {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,
         heartratenet,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,
         retinanet,speech_to_text,ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}
         ...

Launcher for TAO

optional arguments:
-h, --help            show this help message and exit

tasks:
      {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,heartratenet
      ,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,retinanet,speech_to_text,
      ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}
```

- **ステップ 3**. タスクの下に、TAO Launcherで呼び出せるすべてのタスクが表示されます。以下は、TAO Launcherを使用してコマンドを処理するための特定のタスクです：

  - list
  - stop
  - info

**注意:** ターミナルで「bash: Cannot find tao」と表示された場合は、以下のコマンドを使用してください：

```shell
export PATH=$PATH:~/.local/bin
tao --help
```

### DeepStream5をインストールする

- **ステップ 1**. `/etc/apt/sources.list.d/nvidia-l4t-apt-source.list`を編集し、`.6`を`.5`に置き換えます：

```shell
deb https://repo.download.nvidia.com/jetson/common r32.5 main
#deb https://repo.download.nvidia.com/jetson/common r32.6 main
deb https://repo.download.nvidia.com/jetson/t194 r32.5 main
#deb https://repo.download.nvidia.com/jetson/t194 r32.6 main
```

- **ステップ 2**. `sudo apt update`を実行し、DeepStream 5.1のインストールを再試行します。

以下のコマンドでインストールします：

```shell
sudo -H pip3 install pyds-ext
```

詳細については、以下のリンクを参照してください：

- [DeepStream-Docker Containers](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_docker_containers.html#a-docker-container-for-jetson)
- [Integrating TAO Models into DeepStream](https://docs.nvidia.com/tao/tao-toolkit/text/deepstream_tao_integration.html)
- [DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/models/tlt_dashcamnet)

### Jetsonマルチカメラパイプラインとクイックスタートをインストールする

最後に、典型的なマルチカメラパイプライン、すなわち`N×(capture)->preprocess->batch->DNN-> your application logic here ->encode->file I/O + display`を構築します。これは、gstreamerとdeepstreamを使用して行われ、Python経由でjetmulticamパッケージを使用してパイプラインをプログラム的に構成できます。

このプロジェクトは、Nvidiaのハードウェアアクセラレーションを利用してCPU使用率を最小限に抑えます。例えば、6つのカメラストリームでリアルタイムの物体検出を行う際、CPU使用率をわずか16.5%に抑えることができます。画像データ（np.array経由）や物体検出結果にアクセスすることで、Pythonで簡単にカスタムロジックを構築できます。

- **ステップ 1**. 以下のコマンドでJetsonマルチカメラパイプラインをインストールします：

```shell
git clone https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines.git
cd jetson-multicamera-pipelines
bash scripts/install_dependencies.sh
sudo -H pip3 install Cython
sudo -H pip3 install .
```

- **ステップ 2**. カメラを使用して例を実行します：

```shell
source scripts/env_vars.sh 
cd examples
sudo -H python3 example.py
```

*以下は`example.py`で、単眼カメラまたはマルチカメラのいずれにも適用できます。*

```cpp
import time
from jetmulticam import CameraPipelineDNN
from jetmulticam.models import PeopleNet, DashCamNet

if __name__ == "__main__":

    pipeline = CameraPipelineDNN(
        cameras=[2, 5, 8],
        models=[
            PeopleNet.DLA1,
            DashCamNet.DLA0,
            # PeopleNet.GPU
        ],
        save_video=True,
        save_video_folder="/home/nx/logs/videos",
        display=True,
    )

    while pipeline.running():
        arr = pipeline.images[0] # np.array with shape (1080, 1920, 3), i.e. (1080p RGB image)
        dets = pipeline.detections[0] # Detections from the DNNs
        time.sleep(1/30)
```

以下はマルチカメラの結果の例です：

<video id="video" controls src="https://user-images.githubusercontent.com/26127866/134721058-8378697f-bbf0-4505-be75-f3dba3080c71.mp4" preload="none">
</video>

*さらに*

サポートされているモデル/アクセラレータは以下の通りです：

```cpp
pipeline = CameraPipelineDNN(
    cam_ids = [0, 1, 2]
    models=[
        models.PeopleNet.DLA0,
        models.PeopleNet.DLA1,
        models.PeopleNet.GPU,
        models.DashCamNet.DLA0,
        models.DashCamNet.DLA1,
        models.DashCamNet.GPU
        ]
    # ...
)
```

**注意:** ターミナルが「EGL Not found」と表示された場合は、[EGLDevice](https://docs.nvidia.com/drive/drive_os_5.1.6.1L/nvvib_docs/index.html#page/DRIVE_OS_Linux_SDK_Development_Guide/Windows%20Systems/window_system_egl.html)を確認してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>