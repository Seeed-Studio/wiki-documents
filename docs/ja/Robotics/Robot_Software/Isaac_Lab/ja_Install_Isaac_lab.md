---
description: このwikiはIsaac Labをインストールするためのステップバイステップガイドを提供します。
title: Isaac Labのインストール
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.webp
slug: /ja/install_isaaclab
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# Isaac Labのインストール

このwikiはIsaac Labをインストールするためのステップバイステップガイドを提供します。Isaac LabにはIsaac Simが必要です。このチュートリアルでは、まずpip経由でIsaac Simをインストールし、次にソースコードからIsaac Labをインストールします。

:::tip
- このチュートリアルはUbuntu 20.04および22.04システムにのみ適用され、現在Windowsはサポートしていません。お使いのコンピューターにGPUに基づいてNVIDIAグラフィックスドライバーとCUDA 12+がインストールされていることを確認してください。

- ハードウェアが要件を満たしているかどうかを確認するには、公式Isaac Simリンクをチェックしてください。

- Minicondaを推奨し、事前にインストールしておく必要があります。
:::

## Minicondaで仮想環境を作成する  
まず仮想環境を作成することをお勧めします。仮想環境のPythonバージョンがPython 3.10であることを確認してください。  

```bash
conda create -n env_isaaclab python=3.10  
conda activate env_isaaclab  
```  

## PyTorchとtorchvisionのインストール  
次に、CUDAバージョンに応じてPyTorchとTorchvisionをインストールします。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>


<TabItem value="CUDA 11+" label="CUDA 11+">

```bash
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118
```


</TabItem>

<TabItem value="CUDA 12+" label="CUDA 12+">

```bash
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu121
```


</TabItem>

</Tabs>

## Isaac Simのインストール  
```bash
pip install --upgrade pip  
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com  
```  

## Isaac Simインストールの確認  
```bash
isaacsim  
```  

:::note
Isaac Simを初回実行する際、必要なすべての拡張機能がレジストリから取得されます。このプロセスには**10分以上**かかる場合があり、各エクスペリエンスファイルの初回実行時に必要です。拡張機能がダウンロードされると、同じエクスペリエンスファイルでの後続の実行ではキャッシュされた拡張機能が使用されます。  
:::

### Isaac Labのインストール  

**Isaac Labリポジトリのクローン**  
```bash
git clone https://github.com/isaac-sim/IsaacLab.git  
```  

**Isaac Labの依存関係をインストール**  
```bash
sudo apt install cmake build-essential  
```  

**Isaac Labの強化学習ライブラリをインストール**  
```bash
./isaaclab.sh --install  # または "./isaaclab.sh -i"  
```  
特定のRLライブラリを個別にインストールすることもできます：  
```bash
./isaaclab.sh --install rl_games  # または "rsl_rl, sb3, skrl, robomimic"  
```  

**Isaac Labインストールの確認**  
クローンしたIsaac Labディレクトリに移動します。  

**オプション1：シェルスクリプト経由で起動**  
```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py  
```  

**オプション2：Python経由で起動**  
```bash
python scripts/tutorials/00_sim/create_empty.py  
```  

:::note
上記のコマンドはシミュレーターを起動し、以下に示すように黒いビューポートを持つウィンドウを表示するはずです。ターミナルで**Ctrl+C**を押してスクリプトを終了できます。Windowsでは、コマンドプロンプトで**Ctrl+Break**または**Ctrl+fn+B**を使用してプロセスを終了します。
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.png" />
</div>

### シンプルなロボットの訓練  

提供されたサンプルスクリプトを使用してスパイダーのグループを訓練できます：  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/3.jpg" />
</div>


または単一の犬を訓練します：  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Velocity-Rough-Anymal-C-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/2.jpg" />
</div>

### Isaac Gymのインストール（オプション）  
前のインストール手順で十分ですが、Isaac Gymで強化学習部分のみを体験したい場合は、Isaac Gymを個別にインストールできます。  

**[Isaac Gymコード](https://developer.nvidia.com/isaac-gym/download)をダウンロードして展開**  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/4.png" />
</div>

ホームディレクトリに展開し、Conda環境を作成して依存関係をインストールします：  
```bash
conda create --name isaac python=3.8  
conda activate isaac  
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia  
conda install numpy=1.23  
```  

**Isaac Gymのインストール**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python  
pip install -e .  
```  

**Isaac Gymインストールの確認**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python/examples  
python 1080_balls_of_solitude.py  
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/5.png" />
</div>


:::warning
**発生する可能性のあるエラーと解決策**  
Pythonスクリプトを実行する際、以下のエラーが発生する場合があります：  
```plaintext
ImportError: libpython3.8.so.1.0: cannot open shared object file: No such file or directory  
```  
このコマンドで修正してください（パスを自分のものに置き換えてください）：  
```bash
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/home/{Your Username}/anaconda3/envs/pi/lib  
```  
:::