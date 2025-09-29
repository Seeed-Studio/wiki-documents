---
description: DashCamNet with Jetson Xavier NX Multicamera
title: DashCamNet with Jetson Xavier NX Multicamera
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/DashCamNet-with-Jetson-Xavier-NX-Multicamera
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# DashCamNet と PeopleNet を使用した Jetson Xavier NX マルチカメラ

## はじめに

現在、自動運転、車載記録、違反監視の分野では、車両情報、車両ナンバープレート、周囲の障害物を識別するために人工知能を活用することが多くなっています。Nvidia NGC が提供する大量の事前訓練済みモデルのおかげで、これらの複雑なタスクをより簡単に実行できるようになりました。

AI/機械学習モデルをゼロから作成するには、多くの時間とコストがかかります。[転移学習](https://blogs.nvidia.com/blog/2019/02/07/what-is-transfer-learning/)は、既存のニューラルネットワークモデルから学習した特徴を新しいモデルに抽出するために使用できる人気の技術です。NVIDIA TAO（*Train, Adapt, and Optimize*）Toolkit は、[NVIDIA TAO](https://developer.nvidia.com/tao) の CLI および Jupyter ノートブックベースのソリューションで、AI/深層学習フレームワークの複雑さを抽象化し、ゼロから訓練する場合と比較してわずかなデータ量で高品質な NVIDIA 事前訓練済み AI モデルを微調整できます。

TAO Toolkit は、EfficientNet、YOLOv3/v4、RetinaNet、FasterRCNN、UNET など、100 以上の NVIDIA 最適化モデルアーキテクチャとバックボーンの組み合わせもサポートしています。

<!-- Credit to NVIDIA's [repository](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) and Tomasz's [project](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines), we are going to detect cars and people with muliticamera deployed in Jetson Xavier NX. Both  [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) and [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) are good for this demo. -->

NVIDIA の[リポジトリ](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/)と Tomasz の[プロジェクト](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines)のおかげで、Jetson Xavier NX にデプロイされたマルチカメラで車両と人物を検出します。[Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) はこのデモに適しています。

*NVIDIA TAO Toolkit は以前 NVIDIA Transfer Learning Toolkit（Tlt）と呼ばれていました。*

<p style={{textAlign: 'center'}}><img src="https://developer.nvidia.com/sites/default/files/akamai/metropolis-and-iva-tao-toolkit-sw-stack-update-diagram-1875240-r7.jpg" alt="pir" width={800} height="auto" /></p>

## 必要な材料

### ハードウェアセットアップ

<!-- - [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) / [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) -->
- [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)

<p style={{textAlign: 'center'}}><img src="https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/jetson-xavier-nx/products/jetson-xavier-nx-dev-kit-2c50-D.jpg" alt="pir" width={300} height="auto" /></p>

- USB ウェブカメラ / Raspberry Pi Camera V2.1 / [IMX219-130 8MP カメラ](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) / [高品質 12.3MP IMX477 カメラ](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<p style={{textAlign: 'center'}}><img src="https://images.prismic.io/rpf-products/ffa68a46-fd44-4995-9ad4-ac846a5563f1_Camera%20V2%20Hero.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400" alt="pir" width={300} height="auto" /></p>

- HDMI、DP または eDP インターフェースを持つディスプレイ
- Linux ディストリビューション OS を搭載した PC

### ソフトウェアセットアップ

- Jetson Xavier NX 用 Jetpack 4.5 または 4.6
- Docker
- DeepStream
- TAO Toolkit
- Pypi（python3-pip）と仮想環境を含む Python3.6
- NVIDIA Container Toolkit

ソフトウェアのインストール方法は以下の手順で説明します。

## 事前インストール

プロジェクトを開始する前に、Ubuntu に Docker Engine をインストールする必要があります。Docker Engine をインストールする方法はいくつかあり、ニーズに応じていずれかの方法を選択できます。すでにセットアップしている場合は、この手順をスキップできます。

- ほとんどのユーザーは、インストールとアップグレードタスクを簡単にするために [Docker のリポジトリをセットアップ](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) してそこからインストールします。これが推奨されるアプローチです。
- 一部のユーザーは DEB パッケージをダウンロードして [手動でインストール](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package) し、アップグレードを完全に手動で管理します。これは、インターネットにアクセスできないエアギャップシステムに Docker をインストールする場合などに有用です。
- テストおよび開発環境では、一部のユーザーは自動化された [便利スクリプト](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script) を使用して Docker をインストールすることを選択します。

ここでは最初の方法を使用します。docker をインストールする前に、そのバージョンが最新であることを確認する必要があります。古いバージョンの名前は `docker`、`docker.io`、または `docker-engine` である可能性があり、以下のコマンドを使用して確認できます：

```shell
sudo apt-get purge docker docker-engine docker.io containerd runc
```

Dockerをアンインストールする際、`/var/lib/docker/`の内容（イメージ、コンテナ、ボリューム、ネットワークを含む）はすべて保持されます。クリーンインストールから始めたい場合は、このページの下部にある[Docker Engineのアンインストール](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine)セクションを参照してください。

### リポジトリを使用したDockerのインストール

新しいホストマシンにDocker Engineをインストールする前に、Dockerリポジトリをセットアップする必要があります。その後、リポジトリからDockerをインストールおよび更新できます。

- **ステップ1**. `apt`パッケージでリポジトリをセットアップ

`apt`パッケージインデックスを更新し、`apt`がHTTPS経由でリポジトリを使用できるようにするパッケージを以下のコマンドでインストールします：

   ```shell
    sudo apt-get update
    sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

DockerのオフィシャルGPGキーを追加：

   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

以下のコマンドを使用して**stable**リポジトリを設定してください。**nightly**または**test**リポジトリを追加するには、以下のコマンドの`stable`という単語の後に`nightly`または`test`（または両方）という単語を追加してください。**nightly**および**test**チャンネルについては[こちら](https://docs.docker.com/engine/install/)で詳しく学ぶことができます。

   ```shell
    echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

- **ステップ 2**. Docker エンジンをインストールする

`apt` パッケージインデックスを更新し、以下のコマンドで Docker エンジンと containerd の**最新バージョン**をインストールします：

   ```shell
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

`hello-world`イメージを実行してDocker Engineが正しくインストールされているかどうかを確認できます。

   ```shell
    sudo docker run hello-world
   ```

- **ステップ 3**. 以下のプロセスで非rootユーザーとしてDockerを管理します。

`docker`グループを作成します。

   ```shell
   sudo groupadd docker
   ```

ユーザーを `docker` グループに追加します。

   ```shell
   sudo usermod -aG docker $USER
   ```

ログアウトして再度ログインし、グループメンバーシップを再評価してください。

`hello-world`を実行して、`sudo`なしで`docker`コマンドを実行できることを確認してください

   ```shell
   docker run hello-world
   ```

- **ステップ 4**. 以下のプロセスでNVIDIA Container Toolkitをセットアップします：

`stable`リポジトリとGPGキーをセットアップします：

   ```shell
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
      && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
   ```

パッケージリストを更新し、`nvidia-docker2`パッケージ（および依存関係）をインストールします：

   ```shell
   sudo apt-get update
   sudo apt-get install -y nvidia-docker2
   ```

デフォルトランタイムを設定した後、インストールを完了するためにDockerデーモンを再起動します：

   ```shell
   sudo systemctl restart docker
   ```

## はじめに

### NVIDIA GPU Cloud CLI ARM64 Linux のインストール

**NVIDIA GPU Cloud (NGC) CLI** は、NGC Container Registry 内の Docker コンテナを管理するための Python ベースのコマンドラインインターフェースです。NGC CLI を使用すると、ジョブの実行や組織およびチーム空間内の Docker リポジトリの表示など、NGC ウェブサイトから利用可能な多くの同じ操作を実行できます。

- **ステップ 1**. [Download CLI](https://ngc.nvidia.com/setup/installers/cli) ページに移動し、バイナリを含む zip ファイルをダウンロードします。ARM64 用の NGC CLI バイナリは Ubuntu 18.04 以降のディストリビューションでサポートされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/NGC.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 2**. zip ファイルを権限のあるディレクトリに転送し、解凍して最後にバイナリを実行します。

また、実行権限のあるディレクトリに移動してから以下のコマンドを実行することで、コマンドラインからダウンロード、解凍、インストールを行うこともできます：

```shell
wget -O ngccli_arm64.zip https://ngc.nvidia.com/downloads/ngccli_arm64.zip && unzip -o ngccli_arm64.zip && chmod u+x ngc
```

バイナリのmd5ハッシュをチェックして、ダウンロード中にファイルが破損していないことを確認します：

```shell
md5sum -c ngc.md5
```

- **ステップ 3**. 現在のディレクトリをパスに追加します：

```shell
echo "export PATH=\"\$PATH:$(pwd)\"" >> ~/.bash_profile && source ~/.bash_profile
```

NGC CLIを使用してコマンドを実行するために、設定を行う必要があります。

- **ステップ4**. 以下のコマンドを入力し、プロンプトが表示されたらAPIキーを含めてください：

```shell
ngc config set
```

#### NGC API キー生成

NGC CLI を設定するには API キーが必要です。NGC ウェブサイトから生成できます。

- **ステップ 1**. [ウェブサイト](https://catalog.ngc.nvidia.com/)に移動し、「Sign In/Sign Up」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302020851671.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 2**. NVIDIA 開発者としてアカウントを登録します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021137914.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 3**. 続行するアカウントを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021226602.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 4**. ページの右上角にある「Setup」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021332972.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 5**. 「Get API Key」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021429846.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 6**. 「Generate API Key」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021504292.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 7**. API キーがページの下部に表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021630443.png" alt="pir" width={800} height="auto" /></p>

### TAO Toolkit のインストール

最初に Python3 と python3-pip をインストールする必要があります：

```shell
sudo apt install -y python3 python3-pip
```

TAO Toolkitは、NVIDIA PyIndexでホストされているPython pipパッケージです。このパッケージは、内部でdocker restAPIを使用してNGC Dockerレジストリと連携し、基盤となるdockerコンテナをプルして実行します。前のステップで、すでにNGCアカウントを設定し、それに関連付けられたAPIキーを生成しました。[インストール前提条件](https://docs.nvidia.com/tao/tao-toolkit/text/tao_toolkit_quick_start_guide.html#install-prereq)セクションについて詳しく知りたい場合は、NGCアカウントの作成とAPIキーの取得に関する詳細をクリックして確認できます。

#### **仮想環境 - Virtualenv**

仮想環境は、Pythonの独立した作業コピーであり、他のプロジェクトに影響を与えることなく特定のプロジェクトで作業することができます。例えば、Django 1.0を必要とするプロジェクトを処理しながら、Django 1.3を必要とするプロジェクトで作業することができます。独立したPython環境を作成するには、[こちら](http://pypi.python.org/pypi/virtualenv)をクリックしてください。

まず仮想環境を設定してからTAO Toolkitをインストールすることを強く推奨します。

- pipを使用してvirtualenvをインストールできます：

```shell
pip install virtualenv
```

- Create a virtual environment:

```shell
virtualenv venv
```

Pythonのコピーを、コマンドを実行したディレクトリに作成し、`venv`という名前のフォルダに配置します。

- 仮想環境をアクティベートします：

```shell
source venv/bin/activate
```

- 仮想環境での作業を一時的に終了する場合は、それを無効化できます：

```shell
deactivate
```

これにより、システムのデフォルトPythonインタープリターとそのインストール済みライブラリに戻ります。

仮想環境を削除するには、そのフォルダを削除するだけです。

**virtualenvwarpper**

しかし、しばらくすると、システム全体に多くの仮想環境が散らばってしまい、それらの名前や配置場所を忘れてしまう可能性があります。そのため、virtualenvwrapperを使用します。[virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/index.html)は、仮想環境での作業をより快適にするコマンドセットを提供します。また、すべての仮想環境を一箇所に配置します。

インストールできます（**virtualenv**が既にインストールされていることを確認してください）：

   ```
   pip install virtualenvwrapper
   export WORKON_HOME=~/Envs
   source /usr/local/bin/virtualenvwrapper.sh
   ```

より詳細な情報については、[Full virtualenvwrapper install instructions](http://virtualenvwrapper.readthedocs.org/en/latest/install.html) を参照してください。)

*virtualenvwrapperを使用してPython virtualenvを設定するには、この[リンク](https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html)の手順に従ってください。*

#### **仮想環境でのPythonバージョンの設定**

- **ステップ 1**. `virtualenv` と `virtualenvwrapper` のインストール手順に従った後、`virtualenv` でPythonバージョンを設定します。これは以下のいずれかの方法で実行できます：

- VIRTUALENVWRAPPER_PYTHON という環境変数を定義します。この変数は、ローカルマシンにpython3バイナリがインストールされているパスを指す必要があります。デフォルトでPython `virtualenv` を設定するために、`.bashrc` または `.bash_profile` に追加することもできます。

```shell
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
```

- `virtualenvwrapper` ラッパーを使用して `virtualenv` を作成する際に python3 バイナリのパスを設定する

```shell
mkvirtualenv launcher -p /path/to/your/python3
```

- **ステップ 2**. `virtualenv` にログインすると、コマンドプロンプトに仮想環境の名前が表示されるはずです

```shell
   (launcher) py-3.6.9 desktop:
```

- **ステップ 3**. セッションが完了したら、`deactivate` コマンドを使用して `virtualenv` を無効化できます：

```shell
deactivate
```

- **ステップ 4**. この作成された `virtualenv` 環境は `workon` コマンドを使用して再インスタンス化することができます。

   ```shell
   workon launcher
   ```

#### **TAOパッケージのインストール**

- **ステップ1**. 必要な環境はすでに設定済みです。次のコマンドで`nvidia-tao`というTAO Launcher Pythonパッケージをインストールできます。

   ```shell
   pip3 install nvidia-pyindex
   pip3 install nvidia-tao
   ```

- **ステップ 2**. `tao` コマンドを使用してエントリーポイントを呼び出します。

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

- **ステップ 3**. タスクの下で、ランチャーから呼び出し可能なすべてのタスクを確認できることに注意してください。以下は、TAO Launcherを使用して起動されたコマンドの処理に役立つ具体的なタスクです：

  - list
  - stop
  - info

**注意:** ターミナルで「bash: Cannot find tao」と表示される場合は、次のコマンドを使用してください：

```shell
export PATH=$PATH:~/.local/bin
tao --help
```

### DeepStream5のインストール

- **ステップ1**. `/etc/apt/sources.list.d/nvidia-l4t-apt-source.list`を編集し、.6を.5に置き換えます：

```shell
deb https://repo.download.nvidia.com/jetson/common r32.5 main
#deb https://repo.download.nvidia.com/jetson/common r32.6 main
deb https://repo.download.nvidia.com/jetson/t194 r32.5 main
#deb https://repo.download.nvidia.com/jetson/t194 r32.6 main
```

- **ステップ 2**. `sudo apt update` と入力し、再度 DeepStream 5.1 のインストールを試してください。

その後、以下のコマンドでインストールしてください：

```shell
sudo -H pip3 install pyds-ext
```

詳細については、以下のリンクをご確認ください：

- [DeepStream-Docker コンテナ](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_docker_containers.html#a-docker-container-for-jetson)
- [TAO モデルの DeepStream への統合](https://docs.nvidia.com/tao/tao-toolkit/text/deepstream_tao_integration.html)
- [DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/models/tlt_dashcamnet)

### Jetson Multicamera Pipelines のインストールとクイックスタート

最後に、典型的なマルチカメラパイプライン、つまり `N×(capture)->preprocess->batch->DNN-> your application logic here ->encode->file I/O + display` を構築します。内部で gstreamer と deepstream を使用し、jetmulticam パッケージを通じて Python でパイプラインを設定するプログラマティックアクセスを提供します。

このプロジェクトは、最小限の CPU 使用量で Nvidia HW アクセラレーションを活用します。例えば、わずか 16.5% の CPU 使用量で 6 つのカメラストリームでリアルタイムオブジェクト検出を実行できます。画像データ（np.array 経由）およびオブジェクト検出結果にアクセスすることで、Python で独自のロジックを簡単に構築できます。

- **ステップ 1**. 以下のコマンドで Jetson Multicamera Pipelines をインストールします：

```shell
git clone https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines.git
cd jetson-multicamera-pipelines
bash scripts/install_dependencies.sh
sudo -H pip3 install Cython
sudo -H pip3 install .
```

- **ステップ 2**. あなたのカメラで例を実行する：

```shell
source scripts/env_vars.sh 
cd examples
sudo -H python3 example.py
```

*これは 'example.py' です。単眼カメラまたはマルチカメラのどちらにも適用できます。*

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

これは以下のようなマルチカメラの結果です：

<video id="video" controls src="https://user-images.githubusercontent.com/26127866/134721058-8378697f-bbf0-4505-be75-f3dba3080c71.mp4" preload="none">
</video>

*その他*

サポートされているモデル/アクセラレータがさらにあります：

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

**注意:** ターミナルで "EGL Not found" と表示される場合は、[EGLDevice](https://docs.nvidia.com/drive/drive_os_5.1.6.1L/nvvib_docs/index.html#page/DRIVE_OS_Linux_SDK_Development_Guide/Windows%20Systems/window_system_egl.html)を確認してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
