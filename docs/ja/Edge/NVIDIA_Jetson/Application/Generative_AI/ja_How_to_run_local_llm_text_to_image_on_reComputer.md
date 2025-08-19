---
description: reComputerでローカル LLM テキストから画像生成を実行する方法
title: Stable Diffusion を使用した Text2Image
keywords:
- 貢献者
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_to_run_local_llm_text_to_image_on_reComputer
last_update:
  date: 05/15/2025
  author: Bruno
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputerでローカル LLM テキストから画像生成を実行する方法

## はじめに
テキストから画像生成モデルは、テキスト記述から画像を生成する人工知能（AI）モデルの一種です。これらのモデルは、シーンを説明する文章や段落のようなテキスト入力を受け取り、その記述に基づいて画像を生成します。

これらのモデルは、テキスト記述と対応する画像のペアを含む大規模なデータセットで訓練され、テキスト情報と視覚情報の関係を理解することを学びます。

テキストから画像生成モデルは近年大きな進歩を遂げていますが、高品質で多様な画像を生成し、テキスト記述に正確に一致させることは、AI研究における課題の一つとして残っています。

## 概要

このチュートリアルでは、ローカル LLM テキストから画像生成をデプロイして実行するいくつかの方法を探ります：
1. 仮想環境を作成する（TensorFlow と PyTorch の両方）
    - 1.1. Keras Stable Diffusion を使用した例を作成
    - 1.2. Hugging Face で利用可能なモデルの1つを使用した例を作成
    - 1.3. Keras と Hugging Face の両方で API を呼び出して画像を生成する小さな Python API を作成
3. Nvidia コンテナを使用

### トラブルシューティング
開始する前に、利用可能なメモリを増やすために取れるいくつかの手順を以下に示します。

1. デスクトップ GUI を無効化します。Jetson を SSH 経由で使用できます。これにより約 800MB のメモリを節約できます。

2. ZRAM を無効化し、Swap を使用します。

これらのヒントとその実装方法については、[Nvidia Jetson AI Lab](https://www.jetson-ai-lab.com/tips_ram-optimization.html) を参照してください。

## 必要条件

このチュートリアルでは、Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) が必要です。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

また、TensorFlow と PyTorch がインストールされていることを確認する必要がありますが、ここではその手順を説明します。

### ステップ 1 - 仮想環境を作成する

Keras は TensorFlow または PyTorch をバックエンドとして使用できます。Hugging Face は主に PyTorch を使用します。

TensorFlow と PyTorch をインストールしましょう。

Jetson Orin NX 用の TensorFlow と PyTorch のインストール方法は [Nvidia のウェブサイト](https://docs.nvidia.com/deeplearning/frameworks/install-tf-jetson-platform/index.html) に記載されています。

TensorFlow と PyTorch をグローバルにインストールするか、仮想環境にインストールすることができます。このチュートリアルでは仮想環境を使用します。

仮想環境を使用することで、プロジェクトやパッケージのバージョンが混在するリスクを回避できます。

これは最良の方法ですが、Nvidia のサイトではグローバルメソッドを推奨しています。

##### TensorFlow

仮想環境を作成します（Keras の例で使用するため、名前を `kerasStableEnvironment` にしています。他の名前を使用しても構いません）。
```bash
sudo apt install python3.8-venv
python -m venv kerasStableEnvironment
```
作成後、仮想環境をアクティブ化します。
```bash
source kerasStableEnvironment/bin/activate
```
アクティブ化されると、プロンプトの前に仮想環境の名前が表示されます。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/1_prompt_bash.png" /></div>

仮想環境に入ります。
```bash
cd kerasStableEnvironment
```
PIP をアップグレードし、いくつかの依存関係をインストールします。
```bash
pip install -U pip
pip install -U numpy grpcio absl-py py-cpuinfo psutil portpicker six mock requests gast h5py astor termcolor protobuf keras-applications keras-preprocessing wrapt google-pasta setuptools testresources
```
Jetpack 5.1.1 用の TensorFlow をインストールします。

JetPack のバージョンを確認するには、以下のコマンドを実行します。
```bash
dpkg -l | grep -i jetpack
```
結果として JetPack バージョンが表示されます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/2_jetpack_version.png" />
</div>

```bash
pip install --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v511 tensorflow==2.12.0+nv23.05
```
他の JetPack バージョンを使用している場合は、正しい URL を [Nvidia のウェブサイト](https://docs.nvidia.com/deeplearning/frameworks/install-tf-jetson-platform/index.html) で確認してください。

次に、TensorFlow のインストールを確認します。
```bash
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```
以下のような行が返されるはずです。
```bash
[PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]
```

##### PyTorch

いくつかの依存関係をインストールします。
```bash
sudo apt install libopenblas-dev
```
次に、JetPack 5.1.1 用の PyTorch をインストールします。
```bash
pip install --no-cache https://developer.download.nvidia.com/compute/redist/jp/v511/pytorch/torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```
インストールと CUDA が利用可能かどうかを確認します。
```bash
python -c "import torch; print(torch.cuda.is_available())"
```
**True** と表示されるはずです。

これで TensorFlow と PyTorch の両方がインストールされましたので、Keras をインストールして画像を作成しましょう。

#### 1.1 Keras

**PyTorch** と **TensorFlow** をインストールした後、テキストプロンプトから画像を作成する準備が整いました。
仮想環境がまだアクティブであることを確認してください。

[KerasCV](https://keras.io/keras_cv/) には、[Stability.ai](https://stability.ai/) のテキストから画像生成モデル [Stable Diffusion](https://github.com/CompVis/stable-diffusion) の実装（他にもいくつかの実装があります）が含まれています。

[KerasCV 実装を使用することで](https://keras.io/guides/keras_cv/generate_images_with_stable_diffusion/)、XLA コンパイルや混合精度サポートなどのパフォーマンス向上の利点を活用できます。

[詳細は Keras のウェブサイトをご覧ください](https://keras.io/guides/keras_cv/generate_images_with_stable_diffusion/)

Keras とその依存関係をインストールします。ここでは、インストール済みの TensorFlow（または PyTorch）バージョンと互換性のあるバージョンを使用します。

```bash
pip install keras-cv==0.5.1
pip install keras==2.12.0
pip install Pillow
```

お好みのエディタを開き、以下の例を入力します。

```bash
vi generate_image.py
```

```python
import keras_cv
import keras
from PIL import Image

keras.mixed_precision.set_global_policy("mixed_float16")

model = keras_cv.models.StableDiffusion(
        img_width=512,  # 他のサイズも選択可能ですが、128の倍数である必要があります
        img_height=512, # 上記と同様
        jit_compile=True
)

prompt = "a cute magical flying dog, fantasy art, golden color, high quality, highly detailed, elegant, sharp focus, concept art, character concepts, digital painting, mystery, adventure"

image = model.text_to_image(
        prompt,
        num_steps=25, # 画像の品質
        batch_size=1  # 一度に生成する画像の数
)

Image.fromarray(image[0]).save("keras_generate_image.png")
```

スクリプトを実行中の統計情報は以下の通りです。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/3_statistics.png" />
</div>

しばらくすると、以下のような結果が得られます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/4_keras_generate_image.png" />
</div>

### ステップ 1.2 - Hugging Face
[Hugging Face](https://huggingface.co/) は、機械学習のための GitHub のような存在です。開発者が ML モデルを構築、デプロイ、共有、トレーニングできるプラットフォームを提供します。

Hugging Face は、ML モデルのダウンロードやトレーニングを簡単にする Transformers Python ライブラリでも知られています。

利用可能なモデルをいくつか試してみましょう。
Hugging Face にアクセスし、モデルを確認します。

左側には、どの種類のモデルを表示するかを選択できるフィルターがあります。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/5_huggingface.png" />
</div>

多くのモデルが利用可能ですが、ここではテキストから画像を生成するモデルに集中します。

#### 仮想環境
上記と同様に仮想環境を作成し、Hugging Face を使用してパッケージのバージョンを混乱させたり、不要なパッケージをインストールしたりしないようにします。

```bash
python -m venv huggingfaceTesting
source huggingfaceTesting/bin/activate
```

仮想環境を作成した後、環境に入ります。
上記の手順に従って PyTorch をインストールします。

```bash
cd huggingfaceTesting
```

#### モデル
Hugging Face には多くの[テキストから画像へのモデル](https://huggingface.co/models?pipeline_tag=text-to-image&sort=trending)があります。理論的にはこれらは Jetson で動作するはずですが、実際には動作しません。

**stable-diffusion-v1-5**

[Runaway の stable-diffusion-v1-5](https://huggingface.co/runwayml/stable-diffusion-v1-5) をテストします。

モデルカードには、モデルを使用するために必要なすべての情報が記載されています。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/6_stable_diffusion_v1_5.png"/>
</div>

Hugging Face の diffusers ライブラリを使用します。
仮想環境内（かつアクティブな状態）で依存関係をインストールします。
```bash
pip install diffusers transformers accelerate
```

すべての依存関係をインストールしたら、モデルを試してみましょう。
お好みのエディタを使用して、以下のコードをコピーします（モデルカードページにも記載されています）。

```python
from diffusers import StableDiffusionPipeline
import torch

model_id = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")

prompt = "a master jedi cat in star wars holding a lightsaber, wearing a jedi cloak hood, dramatic, cinematic lighting"
image = pipe(prompt).images[0]  
    
image.save("cat_jedi.png")
```

モデルを試してみましょう。
```bash
python stableDiffusion.py
```

**注意:** これは多くのストレージを消費します。モデルのチェックポイントがダウンロードされますが、これは一度だけ行われます。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/7_model_download.png"/>
</div>

しばらくすると、以下のような結果が得られます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/8_result_stablediffusion.png"/>
</div>

**SDXL-Turbo**

別のモデルも試してみましょう。[Stability AI の SDXL Turbo](https://huggingface.co/stabilityai/sdxl-turbo) です。
以下のコードをコピーします。

```python
from diffusers import AutoPipelineForText2Image
import torch

pipe = AutoPipelineForText2Image.from_pretrained("stabilityai/sdxl-turbo", torch_dtype=torch.float16, variant="fp16")
pipe.to("cuda")

prompt = "full body, cat dressed as a Viking, with weapon in his paws, battle coloring, glow hyper-detail, hyper-realism, cinematic"

image = pipe(prompt=prompt, num_inference_steps=1, guidance_scale=0.0).images[0]
image.save("sdxl-turbo.png")
```

[このプロンプトは Daria Wind による Medium 記事から引用されています](https://medium.com/phygital/top-40-useful-prompts-for-stable-diffusion-xl-008c03dd0557)

このモデルは画像生成が非常に高速です。スクリプトの実行から終了まで約 30 秒しかかかりません。
以下が結果です。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/9_sdxl-turbo.png"/>
</div>

アニメやサイバーパンクに特化したモデルなど、他のモデルも試すことができます。

一部のモデルが動作しない場合があります。これは、メモリ、利用可能なCPU、またはSwapメモリなど、いくつかの要因による可能性があります。

### ステップ 1.3 - 小さなAPIを作成する
次に、Flaskを使用して小さなAPIを作成し、プロンプトを与えて画像を生成し、それを呼び出し元に返すAPIを作成します。

Jetsonが稼働していると仮定し、APIを呼び出して画像を生成できるようにしたいとします。つまり、個人用のLLM画像生成APIです。

これを実現するプロジェクトはすでに存在しています（後で紹介します）が、自分で作成することに勝るものはありません。

新しい仮想環境を作成します。
```bash
python -m venv imageAPIGenerator
```
環境をアクティブ化してその中に入ります。
```bash
source  imageAPIGenerator/bin/activate
cd imageAPIGenerator
```
ここではFlaskを使用します。[Flask](https://flask.palletsprojects.com/en/3.0.x/)はPythonで書かれたWebアプリケーションフレームワークで、今回の目的には十分な軽量さです。

Flaskをインストールします。
```bash
pip install Flask
```
インストール後、必要なその他の依存関係をインストールします。デモ目的で、依存関係が最も少ないKerasを使用します。

TensorFlowをインストールします。上記の手順に従ってください。
次に、Kerasをインストールします。
```bash
pip install keras-cv==0.5.1
pip install keras==2.12.0
pip install Pillow
```
では、アプリケーションの記述を開始しましょう。

```bash
vi app.py
```
Flaskが何であるか、または何をするのか知らない方のために、簡単な例を試してみましょう。

```python
from flask import Flask

app = Flask (__name__)


@app.route("/generate_image")
def generate_image_api():
    return "<h2>Hello World !</h2>"


if __name__ == "__main__":
    app.run(host='',port=8080)
```
実行するには、Pythonスクリプトを実行します。
```bash
python app.py
```
以下のような出力が表示されるはずです。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/10_run_flask.png"/>
</div>

次に、ブラウザを開き、8080ポートでJetsonデバイスにアクセスしてみてください。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/11_browser_access.png"/>
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/12_accessed_flask.png"/>
</div>

ここで行ったことは、Flaskクラスをインポートすることです。
```python
import Flask
```
次に、Flaskクラスのインスタンスを作成しました。
```python
app = Flask(__name__)
```
次に、ルートデコレーターを作成して、どのURLが関数をトリガーするかをFlaskに伝えます。
 ```python
@app.route("/generate_image")
```
URLでgenerate_imageを使用すると、関数がトリガーされます。
```python
def generate_image_api():
    return "<h2>Hello World !</h2>"
```
また、curlを使用してAPIにアクセスすることもできます。
```bash
curl http://192.168.2.230:8080/generate_image
```
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/13_curl.png"/>
</div>
APIの作成方法がわかったので、さらに進んでコードを書いてみましょう。

```bash
vi app.py
```
そしてコードを貼り付けます。
```python
from flask import Flask, request, send_file
import random, string
import keras_cv
import keras
from PIL import Image

#define APP
app = Flask (__name__)


#option for keras
keras.mixed_precision.set_global_policy("mixed_float16")

# generate custom filename
def generate_random_string(size):
    """指定されたサイズのランダムな文字列を生成します。"""
    return ''.join(random.choices(string.ascii_letters + string.digits, k=size))


"""
    これは画像を生成し、
    ランダムに作成されたファイル名で保存する関数です。
"""
def generate_image(prompt):

    model = keras_cv.models.StableDiffusion (
        img_width=512,  # 別のサイズを選択できますが、128の倍数である必要があります
        img_height=512, # 上記と同じ
        jit_compile=True
    )

    image = model.text_to_image (prompt,
            num_steps = 25,
            batch_size = 1
    )

    # 画像ファイル名
    filename = generate_random_string(10) + ".png"
    Image.fromarray(image[0]).save(filename)
    return filename # クライアントに送信するためにファイル名を返します


#define routes
# プロンプトを取得するために使用します。GETを使用して受け取ります。
@app.route("/generate_image", methods=["GET"])
def generate_image_api():
    # プロンプトを取得
    prompt = request.args.get("prompt")
    if not prompt:
        # デフォルトのプロンプトを定義します
        prompt = "A cinematic shot of a baby racoon wearing an intricate italian priest robe."

    image_name = generate_image(prompt)
    return send_file(image_name, mimetype='image/png')


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8080)
```
**注意:** このコードはインターネット向けに準備されたものではありません。セキュリティ対策は一切ありません。

これを実行します。

ブラウザでURL *http://jetsonIP:8080/generate_image* を入力して待ちます。

プロンプトを指定しない場合、設定したデフォルトのプロンプトが使用されます。

CLIでは画像が生成されている様子が確認できます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/14_generating_image_api.png"/>
</div>

ブラウザでは、しばらくすると画像が表示されます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/15_image_API_generated.png"/>
</div>

画像が送信されたことも確認できます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/16_cli_generated.png"/>
</div>

curlを使用して画像を取得し保存することもできます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/17_cli_generating.png"/>
</div>

プロンプトを指定する場合（推奨）、URLは以下のようになります。
*http://jetsonIP:8080/generate_image?prompt=&lt;your_prompt&gt;*

私たちはこの例を拡張して、ユーザー入力用のテキストボックスや美しい背景などを備えたより良いページを作成することができます。しかし、これは別のプロジェクトのためのものです。

### ステップ 2 - Nvidia LLM
#### Stable Diffusion v1.5
[Jetson Containers](https://github.com/dusty-nv/jetson-containers)プロジェクトを使用して、[AUTOMATIC1111によるstable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)を実行できます。  
Jetson Containersプロジェクトは[NVIDIA社員のDusty Franklin](https://github.com/dusty-nv)によって運営されています。

NVIDIAには、機械学習に関する多くのチュートリアルを提供する[NVIDIA Jetson Generative AI Lab](https://www.jetson-ai-lab.com/tutorial-intro.html)プロジェクトがあります。

ここでは、[Stable Diffusionのチュートリアル](https://www.jetson-ai-lab.com/tutorial_stable-diffusion.html)を使用します。

GitHubリポジトリをクローンし、リポジトリに入り、依存関係をインストールします。
```bash
git clone https://github.com/dusty-nv/jetson-containers
cd jetson-containers/
sudo apt update; sudo apt install -y python3-pip
pip3 install -r requirements.txt
```

必要なものがすべて揃ったので、*stable-diffusion-webui autotag*を使用してコンテナを実行します。
```bash
./run.sh $(./autotag stable-diffusion-webui)
```
これによりコンテナが実行されます。

しばらくすると、互換性のあるコンテナが見つかったことが表示され、続行するかどうか尋ねられます。
```bash
Found compatible container dustynv/stable-diffusion-webui:r35.3.1 (2024-02-02, 7.3GB) - would you like to pull it? [Y/n] 
```
コンテナのダウンロードが開始されます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/18_container_downloading.png"/>
</div>

ダウンロードが完了すると、モデルがダウンロードされ、ポート7860でサーバーが実行されます。

ここでは、最初はうまく動作しませんでした。チェックポイントが表示されず、リフレッシュボタンを何度押しても選択できませんでした。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/20_no_checkpoint.png"/>
</div>

調べてみると、ディスク容量が100%使用されていました。
```bash
feiticeir0@JetsonOrin:~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/nvme0n1p1   79G   79G     0 100% /
none            7,4G     0  7,4G   0% /dev
tmpfs           7,6G     0  7,6G   0% /dev/shm
tmpfs           1,6G   19M  1,5G   2% /run
tmpfs           5,0M  4,0K  5,0M   1% /run/lock
tmpfs           7,6G     0  7,6G   0% /sys/fs/cgroup
/dev/loop0      162M  162M     0 100% /snap/chromium/2797
/dev/loop2      128K  128K     0 100% /snap/bare/5
/dev/loop1       70M   70M     0 100% /snap/core22/1125
/dev/loop3       65M   65M     0 100% /snap/cups/1025
/dev/loop4       92M   92M     0 100% /snap/gtk-common-themes/1535
/dev/loop6      162M  162M     0 100% /snap/chromium/2807
/dev/loop5      483M  483M     0 100% /snap/gnome-42-2204/174
/dev/loop7       35M   35M     0 100% /snap/snapd/21185
tmpfs           1,6G  4,0K  1,6G   1% /run/user/1000
```
他のモデルをテストしていたため、すべてのスペースが占有されていました。  
もしこれが発生した場合は、ホームディレクトリの隠しキャッシュディレクトリに移動し、huggingfaceディレクトリを削除してください。
```bash
cd ~/.cache
rm -rf huggingface
```
これでスペースが確保されます。または、より大きな容量の新しいドライブを購入してください。:)

モデルのダウンロードが開始されます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/21_mode_downloading.png"/>
</div>
チェックポイントが表示されます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/22_checkpoint.png"/>
</div>

ブラウザを開き、JetsonのIPアドレスとポートにアクセスして、AUTOMATIC1111のStable Diffusion webguiを実行します。

*http://JetsonIPAddress:7860*
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/19_jetson_webgui.png"/>
</div>

これで遊ぶことができます。  
以下はデフォルトモデルで作成された画像です。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/23_creating_image1.gif"/>
</div>
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/24_creating_image2.gif"/>
</div>

#### Stable Diffusion XL
AUTOMATIC1111は他のモデルもサポートしています。Stable Diffusion XLを試してみましょう。このモデルは66億のパラメータを持っています。

別のモデルを追加し、ダウンロードを簡単にするために、いくつかの変数を定義し、権限を変更してモデルをダウンロードします。  
これは[NVIDIAのチュートリアル](https://www.jetson-ai-lab.com/tutorial_stable-diffusion-xl.html)からの例です。

```bash
CONTAINERS_DIR=<where_jetson-containers_is_located>
MODEL_DIR=$CONTAINERS_DIR/data/models/stable-diffusion/models/Stable-diffusion/
sudo chown -R $USER $MODEL_DIR
```
次に、モデルをダウンロードします。
```bash
wget -P $MODEL_DIR https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
wget -P $MODEL_DIR https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors
```
モデルがダウンロードされたら、コンテナが実行中の場合はチェックポイントのドロップダウンをリフレッシュするか、再度コンテナを起動します。

これで、さらに2つのモデルが利用可能になります。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/25_models.png"/>
</div>

以下はXLモデルで生成された例です。プロンプトは以下の通りです：
>ポートレート、未来的な服を着たファッショナブルなモデル、サイバーパンクの屋上環境、ネオンライトの街の背景、鮮やかな都市の輝きに照らされた後光、ファッション写真

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/26_neon_xl.png"/>
</div>
試してみてください。ただし、選択したオプションによっては動作しない場合がありますのでご注意ください。

#### 他のモデルの追加
さらに多くのモデルを追加することも可能です。Hugging Faceに加えて、[Civitai](https://civitai.com/)は選択肢が豊富なもう一つのモデルハブです。ただし、Civitaiには一部NSFW（成人向け）のモデルが含まれているため、注意してください。

使用したいモデルを選択し、チェックポイントをダウンロードして以下のディレクトリに配置してください。
```bash
/home/<user>/<jetson-containers-location>/data/models/stable-diffusion/models/Stable-diffusion/
```
私は[DreamShaper XL](https://civitai.com/models/112902/dreamshaper-xl)というモデルをダウンロードして試してみます。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/27_dreamshaperxl.png"/>
</div>

ただし、一部のモデルは動作しない場合があります。

設定を調整し、モデルカードを読んで最適な設定を確認する必要があります（動作する場合に限ります）。

例えば、このモデルカードには以下のように記載されています：
- サンプリングステップは4～8
- サンプリング方法はDPM++ SDE Karras

モデルのチェックポイントをダウンロードし、上記のディレクトリに追加してください。

リフレッシュ後、モデルが選択可能になります。
選択すると、AUTOMATIC1111がモデルを最適化します。

もしプロセスが停止したりエラーが発生した場合は、ストレージ容量を増やしてください。私の場合も容量を増やした後、すべて正常に動作しました。

以下のプロンプトを使用しました：
> holding a staff, orbstaff &lt;lora:orbstaff:0.60&gt;, ,(by Gabriel Isak and Adam Elsheimer:1.20), (by Jon Whitcomb and Bayard Wu and Malcolm Liepke0.80),8k , professional fashion shot

[この画像](https://civitai.com/images/8570722)から、ネガティブプロンプトなしで以下の結果を得ました。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/28_dreamshaperxl_image_result.png"/>
</div>

以下の設定で生成しました：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/29_dreamshaperXL_settings.png"/>
</div>

以前、*Stable Diffusion XL*モデルを使用してサイバーパンクの女の子を生成するプロンプトを覚えていますか？

同じプロンプトを使用し、*DreamShaper XL*モデルと上記の設定で新しい画像を生成しました。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/30_cyberpunkGirl.png"/>
</div>

ご覧の通り、パラメータを調整することで素晴らしい画像を生成することができます。:)

私は、大きな画像の方がより良い結果を生むことを学びました。

Nvidia Jetson NX 16GBを使用して画像を生成する方法や、オンデマンドで画像を生成するサーバーとしての使い方を学んでいただけたら幸いです。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56418890)によって支援されています。
- [Brunoの努力](https://github.com/Seeed-Studio/wiki-documents/issues/1029)に感謝します。あなたの作業は[展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>