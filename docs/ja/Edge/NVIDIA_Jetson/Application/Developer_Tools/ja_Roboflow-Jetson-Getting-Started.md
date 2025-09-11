---
description: NVIDIA Jetson デバイスでの Roboflow の使い方
title: Roboflow の使い方
tags:
  - データラベル
  - AIモデルのトレーニング
  - AIモデルのデプロイ
  - Roboflow
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Roboflow-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイスでの Roboflow 推論の使い方

このウィキガイドでは、NVIDIA Jetson デバイス上で動作する [Roboflow](https://roboflow.com) 推論サーバーを使用して AI モデルを簡単にデプロイする方法を説明します。ここでは、[Roboflow Universe](https://universe.roboflow.com) を使用して既にトレーニングされたモデルを選択し、そのモデルを Jetson デバイスにデプロイし、ライブウェブカメラストリームで推論を実行します。

[Roboflow Inference](https://github.com/roboflow/inference) は、コンピュータビジョンモデルを使用およびデプロイする最も簡単な方法であり、推論を実行するための HTTP Roboflow API を提供します。Roboflow 推論は以下をサポートしています：

- オブジェクト検出
- 画像セグメンテーション
- 画像分類

および CLIP や SAM のような基盤モデル。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/9.gif
" style={{width:1000, height:'auto'}}/></div>

## 前提条件

- Ubuntu ホスト PC（ネイティブまたは VMware Workstation Player を使用した VM）
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) またはその他の NVIDIA Jetson デバイス

:::note
このウィキは、NVIDIA Jetson Orin NX 16GB モジュールを搭載した [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) および [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) でテストおよび検証されています。
:::

## Jetson に JetPack をフラッシュする

まず、Jetson デバイスに [JetPack](https://developer.nvidia.com/embedded/jetpack) システムがフラッシュされていることを確認する必要があります。JetPack をデバイスにフラッシュするには、NVIDIA SDK Manager またはコマンドラインを使用できます。

Seeed の Jetson 搭載デバイスのフラッシュガイドについては、以下のリンクを参照してください：
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/ja/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack)
- [A203 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A203_Flash_System)
- [A205 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A205_Flash_System)
- [A206 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack)
- [A603 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A603_Flash_System)
- [A607 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_A607_Flash_System)
- [Jetson Xavier AGX H01 キット](https://wiki.seeedstudio.com/ja/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 キット](https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)
- [reComputer Industrial](https://wiki.seeedstudio.com/ja/reComputer_Industrial_Getting_Started/#flash-jetpack)
- [reServer Industrial](https://wiki.seeedstudio.com/ja/reServer_Industrial_Getting_Started/#flash-jetpack)

:::note
JetPack バージョン 5.1.1 をフラッシュしてください。このウィキで検証済みのバージョンです。
:::

## Roboflow Universeで50,000以上のモデルを活用

Roboflowは、50,000以上のすぐに使用可能なAIモデルを提供しており、誰でも最速でコンピュータビジョンのデプロイを開始できます。[Roboflow Universe](https://universe.roboflow.com)でこれらすべてを探索できます。また、Roboflow Universeでは200,000以上のデータセットも提供されており、これらのデータセットを使用して[モデルをトレーニング](https://docs.roboflow.com/train/train)したり、自分のデータセットを持ち込んで[Roboflowオンライン画像アノテーションツール](https://docs.roboflow.com/annotate/use-roboflow-annotate)を使用してトレーニングを開始することができます。

- **ステップ1:** Roboflow Universeから[人検出モデル](https://universe.roboflow.com/mohamed-traore-2ekkp/people-detection-general/model/7)を参照として使用します。

- **ステップ2:** モデル名は「model_name/version」という形式に従います。この場合、**people-detection-general/7**です。このモデル名は、後ほど推論を開始する際に使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/1.png" style={{width:1000, height:'auto'}}/></div>

## Roboflow APIキーの取得

Roboflow推論サーバーを動作させるために、Roboflow APIキーを取得する必要があります。

- **ステップ1:** [新しいRoboflowアカウントにサインアップ](https://app.roboflow.com)し、資格情報を入力します。

- **ステップ2:** アカウントにサインインし、`Projects > Workspaces > <your_workspace_name> > Roboflow API`に移動し、「Private API Key」セクションの横にある**Copy**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/2.jpg" style={{width:1000, height:'auto'}}/></div>

このプライベートキーを保存しておいてください。後で必要になります。

## Roboflow推論サーバーの実行

NVIDIA JetsonでRoboflow推論を開始するには、以下の3つの方法があります。

1. **pipパッケージを使用** - pipパッケージを使用するのが最速の方法ですが、JetPackとともにSDKコンポーネント（CUDA、cuDNN、TensorRT）をインストールする必要があります。
2. **Docker Hubを使用** - Docker Hubを使用する方法は少し遅くなりますが、約19GBのDockerイメージを最初にプルする必要があります。ただし、DockerイメージにはすでにSDKコンポーネントが含まれているため、インストールする必要はありません。
3. **ローカルDockerビルドを使用** - ローカルDockerビルドを使用する方法は、Docker Hubの方法を拡張したもので、Dockerイメージのソースコードを希望するアプリケーション（例：INT8でTensorRT精度を有効化）に応じて変更できます。

Roboflow推論サーバーを実行する前に、推論に使用するAIモデルとRoboflow APIキーを取得する必要があります。まずそれを説明します。

<!-- コード -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pip Package" label="pipパッケージ">

### pipパッケージを使用

- **ステップ1:** JetsonデバイスをJetson L4Tでフラッシュした場合、最初にSDKコンポーネントをインストールする必要があります。

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

- **ステップ2:** 以下のコマンドをターミナルで実行して、Roboflow推論サーバーのpipパッケージをインストールします。

```sh
sudo apt update
sudo apt install python3-pip -y
pip install inference-gpu
```

- **ステップ3:** 以下を実行し、取得したRoboflowプライベートAPIキーに置き換えます。

```sh
export ROBOFLOW_API_KEY=your_key_here
```

- **ステップ4:** Jetsonデバイスにウェブカメラを接続し、以下のPythonスクリプトを実行して、オープンソースの人検出モデルをウェブカメラストリームで動作させます。

<details>

<summary> webcam.py</summary>

```python
import cv2
import inference
import supervision as sv

annotator = sv.BoxAnnotator()

inference.Stream(
    source="webcam", 
    model=" people-detection-general/7", 

    output_channel_order="BGR",
    use_main_thread=True, 
    
    on_prediction=lambda predictions, image: (
        print(predictions), 
        
        cv2.imshow(
            "Prediction", 
            annotator.annotate(
                scene=image, 
                detections=sv.Detections.from_roboflow(predictions)
            )
        ),
        cv2.waitKey(1)
    )
)
```

</details>

最終的に、以下のような結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/11.gif" style={{width:1000, height:'auto'}}/></div>

---

</TabItem>
<TabItem value="Docker Hub" label="Docker Hub">

### Docker Hubを使用

この方法を使用するには、デバイスをJetson L4Tでフラッシュするだけで十分です。この方法はクライアント-サーバーアーキテクチャを使用しており、Roboflow推論サーバーがJetson上の特定のネットワークポートで動作し、同じネットワーク上の任意のPCからこの推論サーバーにアクセスすることができます。また、Jetson自体をサーバー兼クライアントとして使用することも可能です。

#### サーバーセットアップ - Jetson

以下を実行して、Roboflow推論サーバーのDockerコンテナをダウンロードして実行します。

```sh
sudo docker run --network=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1
```

以下の出力が表示された場合、推論サーバーが正常に起動しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/3.png" style={{width:1000, height:'auto'}}/></div>

#### クライアントセットアップ - Jetson/ PC

- **ステップ1:** 必要なパッケージをインストールします。

```sh
sudo apt update
sudo apt install python3-pip -y
git clone https://github.com/roboflow/roboflow-api-snippets
cd Python/webcam
pip install -r requirements.txt
```

- **ステップ2:** 同じディレクトリにroboflow_config.jsonファイルを作成し、Roboflow APIキーとモデル名を含めます。このGitHubリポジトリ内のroboflow_config.sample.jsonファイルを参照してください。

- **ステップ3:** 同じデバイスの別のターミナルウィンドウ、または同じネットワーク上の別のPCで以下のPythonスクリプトを実行して、オープンソースの人検出モデルをウェブカメラストリームで動作させます。

```sh
python infer-simple.py
```

---

</TabItem>
<TabItem value="Local Docker Build" label="ローカルDockerビルド">

### ローカルDockerビルドを使用

#### サーバーセットアップ - Jetson

この方法を使用するには、Jetson L4T をデバイスにフラッシュするだけで十分です。この方法はクライアント-サーバーアーキテクチャを使用しており、Roboflow 推論サーバーが Jetson 上の特定のネットワークポートで実行されます。同じネットワーク上の任意の PC を使用してこの推論サーバーにアクセスすることができ、Jetson 自体をサーバーとクライアントの両方として使用することも可能です。

- **ステップ 1:** Roboflow 推論サーバーのリポジトリをクローンします

```sh
git clone https://github.com/roboflow/inference
```

- **ステップ 2:** "inference" ディレクトリに移動し、独自の Docker イメージをコンパイルします

```sh
cd inference
sudo docker build \
    -f docker/dockerfiles/Dockerfile.onnx.jetson.5.1.1 \
    -t roboflow/roboflow-inference-server-jetson-5.1.1:seeed1 .
```

ここで "-t" の後のテキストは、構築するコンテナの名前です。任意の名前を付けることができます。

- **ステップ 3:** 以下のコマンドを実行して、コンパイルした Docker イメージがリストされているか確認します

```sh
sudo docker ps
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/5.png
" style={{width:1000, height:'auto'}}/></div>

- **ステップ 4:** コンパイルした Docker イメージに基づいて Docker コンテナを起動します

```sh
docker run --privileged --net=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1:seeed1
```

以下の出力が表示された場合、推論サーバーが正常に起動しています

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/6.png
" style={{width:1000, height:'auto'}}/></div>

#### クライアント設定 - Jetson/PC

以下の Python スクリプトを実行して、オープンソースの人物検出モデルをウェブカメラストリームで動作させます

<details>

<summary> webcam.py</summary>

```python
import cv2
import base64
import requests
import time


upload_url = ("http://<ip_address_of_jetson>:9001/"
              "people-detection-general/7"
              "?api_key=xxxxxxxx"
              "&stroke=5")
video = cv2.VideoCapture(0)

while True:
    start = time.time()

    ret, img = video.read()
    if ret:
        # アスペクト比を維持しながらリサイズして速度を向上させ、帯域幅を節約
        height, width, channels = img.shape
        scale = 416 / max(height, width)
        img = cv2.resize(img, (round(scale * width), round(scale * height)))

        # 画像を base64 文字列にエンコード
        retval, buffer = cv2.imencode('.jpg', img)
        img_str = base64.b64encode(buffer)

        # Roboflow Infer API から予測を取得
        resp = requests.post(upload_url, data=img_str, headers={
            "Content-Type": "application/x-www-form-urlencoded"
        }, stream=True)
        resp = resp.json()

        for bbox in resp["predictions"]:
            img = cv2.rectangle(
                img,
                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2))),
                (int(bbox['x']+(bbox['width']/2)), int(bbox['y']+(bbox['height']/2))),
                (0, 255, 0),
                2)
            cv2.putText(
                img, f"{bbox['class']}",
                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2)-5)),
                0, 0.9,
                (0, 255, 0), thickness=2, lineType=cv2.LINE_AA
            )
        cv2.imshow('image', img)
        print((1/(time.time()-start)), " fps")

    if cv2.waitKey(1) == ord('q'):
        break
video.release()
cv2.destroyAllWindows()
```

</details>

スクリプト内の `upload_url` に含める必要がある要素は以下の通りです：

- Roboflow 推論サーバーの IP アドレス
- 実行したいモデル
- Roboflow API キー

モデルは Roboflow Universe で選択できます。

#### TensorRT を有効化

デフォルトでは、Roboflow 推論サーバーは CUDA ランタイムを使用しています。ただし、推論速度を向上させるために TensorRT ランタイムに変更したい場合は、以下を "inference/docker/dockerfiles/Dockerfile.onnx.jetson.5.1.1" ファイル内に追加し、Docker イメージを構築します

```sh
ENV ONNXRUNTIME_EXECUTION_PROVIDERS=TensorrtExecutionProvider
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## 詳細情報

Roboflowは非常に詳細で包括的なドキュメントを提供しています。そのため、[こちら](https://docs.roboflow.com)をぜひご確認ください。

## 技術サポートと製品に関するディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>