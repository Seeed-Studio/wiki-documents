---
description: Este wiki fornece um guia passo a passo para instalar o Isaac Lab.
title: Instalar o Isaac Lab
keywords:
  - NVIDIA
  - Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.webp
slug: /install_isaaclab
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
createdAt: '2025-05-28'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/install_isaaclab/
---

# Instalar o Isaac Lab

Este wiki fornece um guia passo a passo para instalar o Isaac Lab. Isaac Lab requer Isaac Sim. Este tutorial primeiro instala o Isaac Sim via pip e, em seguida, instala o Isaac Lab a partir do código-fonte.

:::tip
- Este tutorial é aplicável apenas aos sistemas Ubuntu 20.04 e 22.04 e atualmente não oferece suporte ao Windows. Certifique-se de que seu computador tenha drivers gráficos NVIDIA e CUDA 12+ instalados de acordo com sua GPU.

- Verifique o link oficial do Isaac Sim para confirmar se o seu hardware atende aos requisitos.

- Miniconda é recomendada e deve estar previamente instalada.
:::

## Criando um ambiente virtual com Miniconda  
Recomendamos criar primeiro um ambiente virtual. Certifique-se de que a versão do Python no ambiente virtual seja Python 3.10.  

```bash
conda create -n env_isaaclab python=3.10  
conda activate env_isaaclab  
```  

## Instalando PyTorch e torchvision  
Em seguida, instale o PyTorch e o Torchvision de acordo com sua versão do CUDA.

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

## Instalando Isaac Sim  
```bash
pip install --upgrade pip  
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com  
```  

## Verificando a instalação do Isaac Sim  
```bash
isaacsim  
```  

:::note
Ao executar o Isaac Sim pela primeira vez, todas as extensões necessárias serão baixadas do registro. Esse processo pode levar **mais de 10 minutos** e é necessário para a primeira execução de cada arquivo de experiência. Depois que as extensões forem baixadas, as execuções posteriores com o mesmo arquivo de experiência usarão as extensões em cache.  
:::

### Instalando o Isaac Lab  

**Clonar o repositório do Isaac Lab**  
```bash
git clone https://github.com/isaac-sim/IsaacLab.git  
```  

**Instalar dependências para o Isaac Lab**  
```bash
sudo apt install cmake build-essential  
```  

**Instalar as bibliotecas de aprendizado por reforço do Isaac Lab**  
```bash
./isaaclab.sh --install  # or "./isaaclab.sh -i"  
```  
Você também pode instalar individualmente uma biblioteca específica de RL:  
```bash
./isaaclab.sh --install rl_games  # or "rsl_rl, sb3, skrl, robomimic"  
```  

**Verificar a instalação do Isaac Lab**  
Navegue até o diretório clonado do Isaac Lab.  

**Opção 1: iniciar via script shell**  
```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py  
```  

**Opção 2: iniciar via Python**  
```bash
python scripts/tutorials/00_sim/create_empty.py  
```  

:::note
Os comandos acima devem iniciar o simulador e exibir uma janela com uma área de visualização preta, como mostrado abaixo. Você pode encerrar o script pressionando **Ctrl+C** no terminal. No Windows, use **Ctrl+Break** ou **Ctrl+fn+B** no Prompt de Comando para encerrar o processo.
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/1.png" />
</div>

### Treinando um robô simples  

Você pode treinar um grupo de aranhas usando o script de exemplo fornecido:  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Ant-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/3.jpg" />
</div>


Ou treinar um único cão:  
```bash
./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task=Isaac-Velocity-Rough-Anymal-C-v0 --headless
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/2.jpg" />
</div>

### Instalando o Isaac Gym (Opcional)  
As etapas de instalação anteriores são suficientes, mas se você quiser apenas experimentar a parte de aprendizado por reforço com o Isaac Gym, poderá instalar o Isaac Gym separadamente.  

**Baixar e extrair o [código do Isaac Gym](https://developer.nvidia.com/isaac-gym/download)**  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/4.png" />
</div>

Extraia-o para o seu diretório home, depois crie um ambiente Conda e instale as dependências:  
```bash
conda create --name isaac python=3.8  
conda activate isaac  
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia  
conda install numpy=1.23  
```  

**Instalar o Isaac Gym**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python  
pip install -e .  
```  

**Verificar a instalação do Isaac Gym**  
```bash
cd <path_to_isaacgym>/IsaacGym_Preview_4_Package/isaacgym/python/examples  
python 1080_balls_of_solitude.py  
```  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/isaac_lab/5.png" />
</div>


:::warning
**Possível erro e solução**  
Ao executar o script em Python, você pode encontrar o seguinte erro:  
```plaintext
ImportError: libpython3.8.so.1.0: cannot open shared object file: No such file or directory  
```  
Corrija-o com este comando (substitua o caminho pelo seu):  
```bash
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/home/{Your Username}/anaconda3/envs/pi/lib  
```  
:::