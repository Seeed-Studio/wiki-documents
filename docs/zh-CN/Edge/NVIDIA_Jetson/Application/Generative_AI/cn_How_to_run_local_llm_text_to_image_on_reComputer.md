---
description: 如何在 reComputer 上运行本地 LLM 文本生成图像
title: 使用 Stable Diffusion 实现文本生成图像
keywords:
- 贡献者
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_to_run_local_llm_text_to_image_on_reComputer
last_update:
  date: 04/01/2024
  author: Bruno
---

# 如何在 reComputer 上运行本地 LLM 文本生成图像

## 简介
文本生成图像模型是一种人工智能 (AI) 模型，可以根据文本描述生成图像。这些模型接收文本输入，例如描述场景的句子或段落，并根据描述生成图像。

这些模型通过包含文本描述和对应图像的大型数据集进行训练，学习文本信息与视觉信息之间的关系。

近年来，文本生成图像模型取得了显著进展，但生成高质量且多样化的图像以准确匹配文本描述仍然是 AI 研究中的一项挑战性任务。

## 概述

在本教程中，我们将探索几种部署和运行本地 LLM 文本生成图像的方法：
1. 创建虚拟环境（支持 TensorFlow 和 PyTorch）
    - 1.1 使用 Keras Stable Diffusion 创建示例
    - 1.2 使用 Hugging Face 提供的模型创建示例
    - 1.3 创建一个小型 Python API，用于通过调用 API 为 Keras 和 Hugging Face 生成图像
3. 使用 Nvidia 容器。

### 故障排除
在开始之前，我们可以采取以下步骤以获得更多可用内存：

1. 禁用桌面 GUI。我们可以通过 SSH 使用 Jetson，这样可以节省约 ~800MB 的内存。

2. 禁用 ZRAM 并使用 Swap。

您可以在 [Nvidia Jetson AI Lab](https://www.jetson-ai-lab.com/tips_ram-optimization.html) 中找到这些提示及其实现方法。

## 要求

在本教程中，我们需要一个 Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

我们还需要确保安装了 TensorFlow 和 PyTorch——但我将在这里介绍安装过程。

### 第一步 - 创建虚拟环境

Keras 可以使用 TensorFlow 或 PyTorch 作为后端。Hugging Face 大多使用 PyTorch。

让我们安装 TensorFlow 和 PyTorch。

有关如何为 Jetson Orin NX 安装 TensorFlow 和 PyTorch 的说明，请参阅 [Nvidia 网站](https://docs.nvidia.com/deeplearning/frameworks/install-tf-jetson-platform/index.html)。

我们可以全局安装 TensorFlow 和 PyTorch，也可以在虚拟环境中安装。我们将使用虚拟环境。

使用虚拟环境可以避免项目或包版本混淆。

这是最佳方法，尽管 Nvidia 网站更推荐全局安装。

##### TensorFlow

创建虚拟环境（我使用名称 kerasStableEnvironment，因为我将用于 Keras 示例。如果需要，可以使用其他名称。）
```bash
sudo apt install python3.8-venv
python -m venv kerasStableEnvironment
```
创建后，激活虚拟环境
```bash
source kerasStableEnvironment/bin/activate
```
激活后，您会在提示符前看到虚拟环境的名称
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/1_prompt_bash.png" /></div>

进入虚拟环境
```bash
cd kerasStableEnvironment
```
升级 PIP 并安装一些依赖项
```bash
pip install -U pip
pip install -U numpy grpcio absl-py py-cpuinfo psutil portpicker six mock requests gast h5py astor termcolor protobuf keras-applications keras-preprocessing wrapt google-pasta setuptools testresources
```
为 Jetpack 5.1.1 安装 TensorFlow

要查看我们拥有的 JetPack 版本，请执行以下命令：
```bash
dpkg -l | grep -i jetpack
```
结果应显示 Jetpack 版本：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/2_jetpack_version.png" />
</div>

```bash
pip install --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v511 tensorflow==2.12.0+nv23.05
```
如果您有其他 JetPack 版本，请查看 [Nvidia 网站](https://docs.nvidia.com/deeplearning/frameworks/install-tf-jetson-platform/index.html) 以获取正确的 URL。

现在，让我们检查 TensorFlow 安装
```bash
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```
这应该返回以下行：
```bash
[PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]
```

##### PyTorch

让我们安装一些依赖项
```bash
sudo apt install libopenblas-dev
```
现在，为 JetPack 5.1.1 安装 PyTorch
```bash
pip install --no-cache https://developer.download.nvidia.com/compute/redist/jp/v511/pytorch/torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```
检查安装并确认 CUDA 是否可用
```bash
python -c "import torch; print(torch.cuda.is_available())"
```
它应该返回 **True**

现在我们已经安装了 TensorFlow 和 PyTorch，接下来安装 Keras 并创建图像。

#### 1.1 Keras

安装完 **PyTorch** 和 **TensorFlow** 后，我们现在可以开始根据文本提示生成图像。
确保您仍然处于虚拟环境中。

[KerasCV](https://keras.io/keras_cv/) 提供了 [Stability.ai](https://stability.ai/) 的文本生成图像模型 [Stable Diffusion](https://github.com/CompVis/stable-diffusion) 的实现（以及其他多个实现）。

[通过使用 KerasCV 的实现](https://keras.io/guides/keras_cv/generate_images_with_stable_diffusion/)，我们可以利用一些性能优势，例如 XLA 编译和混合精度支持。

[你可以在 Keras 网站上阅读更多内容](https://keras.io/guides/keras_cv/generate_images_with_stable_diffusion/)

安装 keras 和相关依赖项。我们选择以下版本是因为它们与我们已安装的 TensorFlow（或 PyTorch）版本兼容。

```bash
pip install keras-cv==0.5.1
pip install keras==2.12.0
pip install Pillow
```
打开你喜欢的编辑器并输入以下示例代码：

```bash
vi generate_image.py
```
```python
import keras_cv
import keras
from PIL import Image

keras.mixed_precision.set_global_policy("mixed_float16")

model = keras_cv.models.StableDiffusion (
        img_width=512,  # 我们可以选择其他尺寸，但必须是 128 的倍数
        img_height=512, # 同上
        jit_compile=True
)

prompt = "一只可爱的魔法飞狗，奇幻艺术，金色，高质量，高度细节化，优雅，清晰聚焦，概念艺术，角色概念，数字绘画，神秘，冒险"

image = model.text_to_image (prompt,
        num_steps = 25, # 图像质量
        batch_size = 1 # 一次生成多少张图像
)

Image.fromarray(image[0]).save("keras_generate_image.png")
```
运行脚本时，这里是一些统计数据：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/3_statistics.png" />
</div>

过了一会儿，这是生成的结果：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/4_keras_generate_image.png" />
</div>

### 第 1.2 步 - Hugging Face
[Hugging Face](https://huggingface.co/) 类似于机器学习领域的 Github。它允许开发者构建、部署、共享和训练他们的机器学习模型。

Hugging Face 还因其 Transformers Python 库而闻名，该库简化了下载和训练机器学习模型的过程。

让我们使用一些可用的模型。
前往 Hugging Face 并选择查看模型。

在左侧，你会看到一些过滤器，允许我们选择想要查看的模型类型。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/5_huggingface.png" />
</div>
有很多可用的模型，但我们将专注于文本到图像模型。

#### 虚拟环境
创建一个虚拟环境，就像我们之前做的那样，这样我们可以使用 Hugging Face 而不会干扰其他包的版本或安装不需要的包。

```bash
python -m venv huggingfaceTesting
source huggingfaceTesting/bin/activate
```
创建虚拟环境后，进入该环境。
按照上述说明安装 PyTorch。

```bash
cd huggingfaceTesting
```
#### 模型
Hugging Face 提供了许多 [文本到图像模型](https://huggingface.co/models?pipeline_tag=text-to-image&sort=trending)。尽管理论上它们应该可以在我们的 Jetson 上运行，但实际上并不行。

**stable-diffusion-v1-5**

我将测试 [Runaway 的 stable-diffusion-v1-5](https://huggingface.co/runwayml/stable-diffusion-v1-5)。

在模型卡片上，它提供了使用该模型所需的所有信息。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/6_stable_diffusion_v1_5.png"/>
</div>

我们将使用 Hugging Face 的 diffusers 库。
在虚拟环境中（并确保已激活），安装依赖项。
```bash
pip install diffusers transformers accelerate
```
现在我们已经安装了所有依赖项，让我们尝试运行模型。
使用你喜欢的编辑器，复制以下代码（也可以在模型卡片页面中找到）：
```python
from diffusers import StableDiffusionPipeline
import torch

model_id = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")

prompt = "一只星球大战中的绝地大师猫，手持光剑，穿着绝地斗篷，戏剧性、电影感的灯光"
image = pipe(prompt).images[0]  
    
image.save("cat_jedi.png")

```
尝试运行模型：
```bash
python stableDiffusion.py
```
**注意：** 这会占用大量空间。模型的检查点文件正在下载。这只会在第一次运行时完成。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/7_model_download.png"/>
</div>
过了一会儿，这是生成的结果：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/8_result_stablediffusion.png"/>
</div>

**SDXL-Turbo**

这是另一个我们可以尝试的模型。[来自 Stability AI 的 SDXL Turbo](https://huggingface.co/stabilityai/sdxl-turbo)。
复制以下代码：
```python
from diffusers import AutoPipelineForText2Image
import torch

pipe = AutoPipelineForText2Image.from_pretrained("stabilityai/sdxl-turbo", torch_dtype=torch.float16, variant="fp16")
pipe.to("cuda")

prompt = "全身，一只打扮成维京人的猫，爪子里拿着武器，战斗色彩，发光，高度细节化，超现实主义，电影感"

image = pipe(prompt=prompt, num_inference_steps=1, guidance_scale=0.0).images[0]
image.save("sdxl-turbo.png")
```
[这个提示词来自 Daria Wind 在 Medium 上的一篇文章](https://medium.com/phygital/top-40-useful-prompts-for-stable-diffusion-xl-008c03dd0557)

这个模型生成图像非常快。从运行脚本到退出大约需要 30 秒。
这是生成的结果：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/9_sdxl-turbo.png"/>
</div>

我们还可以尝试其他模型，比如专门为动漫或赛博朋克训练的模型。

有些模型可能无法运行。这可能是由于多个因素导致的——内存、可用的 CPU 或甚至是交换内存。

### 第 1.3 步 - 创建一个小型 API
现在我们使用 Flask 创建一个小型 API，用于根据提示生成图像并将其返回给调用者。

想象一下，你的 Jetson 设备正在运行，并希望通过调用 API 来生成图像——你的个人 LLM 图像到文本工具。

已经有一些项目可以实现这一点（例如我们稍后会看到的项目），但自己动手实现总是更有趣。

让我们创建一个新的虚拟环境：
```bash
python -m venv imageAPIGenerator
```
激活环境并进入：
```bash
source imageAPIGenerator/bin/activate
cd imageAPIGenerator
```
我们将使用 Flask。[Flask](https://flask.palletsprojects.com/en/3.0.x/) 是一个用 Python 编写的 Web 应用框架。它足够小，适合我们的目的。

安装 Flask：
```bash
pip install Flask
```
安装完成后，接下来安装我们需要的其他依赖项。为了演示，我们将使用 Keras，因为它的依赖项最少。

安装 TensorFlow。按照上面的说明操作。
接下来，安装 Keras：
```bash
pip install keras-cv==0.5.1
pip install keras==2.12.0
pip install Pillow
```
现在，让我们开始编写应用程序。

```bash
vi app.py
```
对于那些不知道 Flask 是什么或能做什么的人，让我们尝试一个简单的示例：

```python
from flask import Flask

app = Flask(__name__)


@app.route("/generate_image")
def generate_image_api():
    return "<h2>Hello World !</h2>"


if __name__ == "__main__":
    app.run(host='', port=8080)
```
运行脚本：
```bash
python app.py
```
你应该会看到以下内容：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/10_run_flask.png"/>
</div>

现在，打开浏览器并尝试通过 8080 端口访问你的 Jetson 设备。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/11_browser_access.png"/>
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/12_accessed_flask.png"/>
</div>

我们所做的是导入 Flask 类：
```python
import Flask
```
接下来创建了 Flask 类的一个实例：
```python
app = Flask(__name__)
```
然后创建了一个路由装饰器，用于告诉 Flask 哪个 URL 会触发我们的函数：
```python
@app.route("/generate_image")
```
当使用 URL 中的 `generate_image` 时，我们会触发以下函数：
```python
def generate_image_api():
    return "<h2>Hello World !</h2>"
```
我们还可以使用 curl 来访问我们的 API：
```bash
curl http://192.168.2.230:8080/generate_image
```
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/13_curl.png"/>
</div>

现在我们知道如何创建一个 API，让我们深入编写它。

```bash
vi app.py
```
并粘贴以下代码：
```python
from flask import Flask, request, send_file
import random, string
import keras_cv
import keras
from PIL import Image

# 定义 APP
app = Flask(__name__)

# Keras 配置选项
keras.mixed_precision.set_global_policy("mixed_float16")

# 生成自定义文件名
def generate_random_string(size):
    """生成指定大小的随机字符串。"""
    return ''.join(random.choices(string.ascii_letters + string.digits, k=size))


"""
    这是生成图像的函数
    并使用随机生成的文件名保存图像
"""
def generate_image(prompt):

    model = keras_cv.models.StableDiffusion(
        img_width=512,  # 我们可以选择其他尺寸，但必须是 128 的倍数
        img_height=512, # 同上
        jit_compile=True
    )

    image = model.text_to_image(prompt,
            num_steps=25,
            batch_size=1
    )

    # 图像文件名
    filename = generate_random_string(10) + ".png"
    Image.fromarray(image[0]).save(filename)
    return filename # 返回文件名以发送给客户端


# 定义路由
# 使用 GET 方法接收提示
@app.route("/generate_image", methods=["GET"])
def generate_image_api():
    # 获取提示
    prompt = request.args.get("prompt")
    if not prompt:
        # 定义默认提示
        prompt = "A cinematic shot of a baby racoon wearing an intricate italian priest robe."

    image_name = generate_image(prompt)
    return send_file(image_name, mimetype='image/png')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
```
**注意：** 这段代码并不适合直接用于互联网。我们没有任何安全措施。

运行代码。

在浏览器中输入 URL *http://jetsonIP:8080/generate_image* 并等待。

如果没有提供提示，它将使用我们设置的默认提示。

在 CLI 中，你可以看到图像正在生成：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/14_generating_image_api.png"/>
</div>

在浏览器中，稍等片刻后，你可以看到生成的图像：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/15_image_API_generated.png"/>
</div>

我们还可以看到图像已被发送：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/16_cli_generated.png"/>
</div>

我们还可以使用 curl 获取图像并保存：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/17_cli_generating.png"/>
</div>

如果我们想提供一个提示（这是我们应该做的），URL 将如下所示：
*http://jetsonIP:8080/generate_image?prompt=&lt;your_prompt&gt;*

我们可以扩展这个示例来构建一个更好的页面，比如添加一些用于用户输入的文本框、美观的背景等。但这些属于另一个项目的内容。

### 第 2 步 - Nvidia LLM
#### Stable Diffusion v1.5
我们可以使用 [Jetson Containers](https://github.com/dusty-nv/jetson-containers) 项目来运行 [基于 AUTOMATIC1111 的 stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)。  
Jetson Containers 项目由 [Dusty Franklin](https://github.com/dusty-nv) 维护，他是 NVIDIA 的一名员工。

NVIDIA 提供了 [NVIDIA Jetson Generative AI Lab](https://www.jetson-ai-lab.com/tutorial-intro.html) 项目，其中包含许多关于机器学习的教程。

我们将使用 [Stable Diffusion 教程](https://www.jetson-ai-lab.com/tutorial_stable-diffusion.html)。

首先克隆 GitHub 仓库，进入仓库并安装依赖项：
```bash
git clone https://github.com/dusty-nv/jetson-containers
cd jetson-containers/
sudo apt update; sudo apt install -y python3-pip
pip3 install -r requirements.txt
```

现在我们已经准备好所需的一切，运行带有 *stable-diffusion-webui autotag* 的容器：
```bash
./run.sh $(./autotag stable-diffusion-webui)
```
容器将开始运行。

过一会儿，它会提示有一个兼容的容器，并询问是否继续：
```bash
Found compatible container dustynv/stable-diffusion-webui:r35.3.1 (2024-02-02, 7.3GB) - would you like to pull it? [Y/n] 
```
它将开始下载容器。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/18_container_downloading.png"/>
</div>

下载完成后，它会下载模型并在端口 7860 上运行服务器。

在我的情况下，起初并没有成功。无论我按多少次刷新按钮，都没有出现可供选择的检查点。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/20_no_checkpoint.png"/>
</div>

我发现磁盘空间已经被占满了：
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
我之前测试了其他模型，它们占用了所有空间。  
如果你也遇到这种情况，只需进入主目录的隐藏缓存目录并删除 huggingface 目录：
```bash
cd ~/.cache
rm -rf huggingface
```
现在你应该有可用空间了。或者，换一个更大容量的硬盘也是个好办法。:)

现在模型正在下载。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/21_mode_downloading.png"/>
</div>
我们终于有了一个检查点。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/22_checkpoint.png"/>
</div>

打开浏览器，访问你的 Jetson IP 地址和端口，运行 AUTOMATIC1111 的 Stable Diffusion webgui：

*http://JetsonIPAddress:7860*
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/19_jetson_webgui.png"/>
</div>

现在我们可以开始玩了。  
以下是使用默认模型创建的一些图像：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/23_creating_image1.gif"/>
</div>
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/24_creating_image2.gif"/>
</div>

#### Stable Diffusion XL
AUTOMATIC1111 支持其他模型。让我们尝试 Stable Diffusion XL。它有 66 亿个参数。

为了添加另一个模型并简化下载过程，我们可以定义一些变量、更改权限并下载模型。  
以下是 [NVIDIA 教程](https://www.jetson-ai-lab.com/tutorial_stable-diffusion-xl.html)中的示例：

```bash
CONTAINERS_DIR=<where_jetson-containers_is_located>
MODEL_DIR=$CONTAINERS_DIR/data/models/stable-diffusion/models/Stable-diffusion/
sudo chown -R $USER $MODEL_DIR
```
现在，下载模型：
```bash
wget -P $MODEL_DIR https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
wget -P $MODEL_DIR https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors
```
下载模型后，如果容器正在运行，请刷新检查点下拉菜单，或者重新启动容器。

现在我们有两个新模型可用。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/25_models.png"/>
</div>

以下是使用 XL 模型生成的示例，提示如下：
> 一幅肖像画，时尚模特穿着未来主义服装，置身于赛博朋克风格的屋顶环境中，背景是霓虹灯点缀的城市，背光由充满活力的城市光辉提供，时尚摄影

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/26_neon_xl.png"/>
</div>
试试看吧！请记住，某些选项可能无法正常工作。

#### 添加其他模型

我们还可以添加更多的模型。除了 Hugging Face，[Civitai](https://civitai.com/) 是另一个可以选择更多模型的中心。需要注意的是，Civitai 上有一些 NSFW（不适合公开场合）的模型，请自行斟酌。

选择你想要的模型，下载检查点文件并将其放置在以下目录中：
```bash
/home/<user>/<jetson-containers-location>/data/models/stable-diffusion/models/Stable-diffusion/
```
我将下载并尝试一个名为 [DreamShaper XL](https://civitai.com/models/112902/dreamshaper-xl) 的模型。
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/27_dreamshaperxl.png"/>
</div>

请记住，有些模型可能无法正常工作。

你需要调整设置并阅读模型卡片，以了解哪些设置可能最适合（如果有的话）。

例如，这个模型卡片上写着采样步数应该是 4-8，采样方法应该是 DPM++ SDE Karras 等等。

下载模型检查点并将其添加到上述目录中。

刷新后，你应该可以选择该模型。
在选择时，AUTOMATIC1111 会优化模型。

如果出现模型被杀死或错误提示的情况，请增加存储空间。我遇到过这种情况，在增加存储空间后，一切正常。

使用以下提示词：
> holding a staff, orbstaff `<lora:orbstaff:0.60>` , ,(by Gabriel Isak and Adam Elsheimer:1.20), (by Jon Whitcomb and Bayard Wu and Malcolm Liepke0.80),8k , professional fashion shot

[来自这张图片](https://civitai.com/images/8570722)，
在没有负面提示词的情况下，我得到了以下结果：

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/28_dreamshaperxl_image_result.png"/>
</div>

使用以下设置：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/29_dreamshaperXL_settings.png"/>
</div>

还记得之前使用 *Stable Diffusion XL* 模型生成的赛博朋克女孩的提示词吗？

以下是使用相同提示词、相同设置，通过 *DreamShaper XL* 生成的新图像：
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/30_cyberpunkGirl.png"/>
</div>

如你所见，只要你知道如何调整参数，就可以生成非常棒的图像。:)

我发现更大的图像往往能产生更好的结果。

希望你已经学会了如何使用 Nvidia Jetson NX 16GB 生成图像，以及如何将其用作服务器按需生成图像。

## ✨ 贡献者项目

- 本项目由 Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56418890) 支持。
- 感谢 [Bruno 的努力](https://github.com/Seeed-Studio/wiki-documents/issues/1029)，你的工作将会被 [展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>