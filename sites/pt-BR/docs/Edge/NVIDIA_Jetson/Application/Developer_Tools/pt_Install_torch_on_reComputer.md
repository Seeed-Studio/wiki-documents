---
description: "Instale o PyTorch otimizado pela NVIDIA no reComputer para JetPack 5 e JetPack 6, com ambientes conda para alternar versões do torch."
title: Instalar Pytorch para reComputer Jetson
keywords:
  - reComputer
  - Jetson
  - PyTorch
  - JetPack
  - torch
  - Deep Learning
  - AI
  - CUDA
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /install_torch_on_recomputer
last_update:
  date: 07/25/2025
  author: Zibo
createdAt: '2025-07-25'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/
---

<div style={{ textAlign: "justify" }}>
A NVIDIA publica wheels do PyTorch para cada versão do JetPack, portanto a instalação é diferente entre JetPack 5 e JetPack 6. Escolha a seção que corresponde ao seu módulo, instale o wheel correspondente e confirme que `torch.cuda.is_available()` retorna True. Ambientes Conda mantêm várias versões do torch lado a lado quando um projeto fixa uma versão mais antiga.
</div>

## Pré-requisitos

- [reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) com JetPack instalado
- Conexão com a internet

<a id="Install_Torch"></a>

## Instalar PyTorch para reComputer

As duas gerações de JetPack na maioria das unidades reComputer usam wheels diferentes: JetPack 5.1.3 emparelha com Python 3.8, JetPack 6.2 com Python 3.10.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

No reComputer, a versão comumente usada do Jetpack 5 é a 5.1.3. As etapas abaixo instalam o PyTorch para ela.

**Passo 1.** Atualize o sistema e instale as dependências:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Passo 2.** Baixe o wheel oficial do PyTorch (exemplo: torch-2.1.0 para JetPack 5.1.3, Python 3.8):

```bash
wget https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

:::note
Se você precisar de uma versão mais recente do torch que suporte Jetpack 5.1.3, baixe o arquivo wheel compilado a partir [daqui](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR) (torch-2.2 para python3.8).
:::

**Passo 3.** Verifique a instalação:

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img alt="saída de torch.__version__ e torch.cuda.is_available() no JetPack 5.1.3 com torch 2.1.0" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

No reComputer, a versão comumente usada do Jetpack 6 é a 6.2. As etapas abaixo instalam o PyTorch para ela.

**Passo 1.** Atualize o sistema e instale as dependências:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Passo 2.** Instale o cuSPARSELt a partir [daqui](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network) (necessário para PyTorch 24.06+):

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELt é uma biblioteca CUDA de alto desempenho desenvolvida pela NVIDIA especificamente para multiplicação de matrizes esparsas. Ela é usada principalmente para acelerar operações de multiplicação de matrizes sob pesos esparsos, que são comuns em inferência de grandes modelos e redes neurais esparsas. Na nova versão do PyTorch (PyTorch 24.06+), ele chamará automaticamente o cusparselt para melhorar a velocidade de inferência de modelos esparsos, especialmente em GPUs embarcadas como Jetson, o que pode aumentar significativamente a eficiência.
</div>
:::

<div align="center">
  <img alt="página de download do cuSPARSELt com Linux, aarch64, Ubuntu 22.04 e compilação nativa selecionados" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
</div>

**Passo 3.** De acordo com a versão selecionada como mostrado na figura acima, você obterá o seguinte comando de instalação:

```bash
wget https://developer.download.nvidia.com/compute/cusparselt/0.7.1/local_installers/cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo dpkg -i cusparselt-local-tegra-repo-ubuntu2204-0.7.1_1.0-1_arm64.deb
sudo cp /var/cusparselt-local-tegra-repo-ubuntu2204-0.7.1/cusparselt-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
```

**Passo 4.** Baixe e instale o PyTorch (exemplo: torch-2.5.0 para JetPack 6.2, Python 3.10):

```bash
wget https://developer.download.nvidia.cn/compute/redist/jp/v61/pytorch/torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
pip install torch-2.5.0a0+872d972e41.nv24.08.17622132-cp310-cp310-linux_aarch64.whl
```

:::note
Se você precisar de uma versão mais recente do torch que suporte Jetpack 6.2, baixe o arquivo wheel compilado a partir [daqui](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH) (torch-2.7 para python3.10).
:::

**Passo 5.** Verifique a instalação:

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img alt="torch.cuda.is_available() retornando True em Python 3.10 na configuração JetPack 6.2" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="Outra versão">

**Passo 1.** Atualize o sistema e instale as dependências:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

Aqui está o [arquivo wheel compilado do PyTorch](https://developer.download.nvidia.cn/compute/redist/jp/) com suporte a CUDA fornecido oficialmente pela NVIDIA.

<div align="center">
  <img alt="índice de wheels do PyTorch da NVIDIA listando builds por versão de JetPack e Python" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
</div>

**Passo 2.** Baixe o arquivo wheel apropriado com base na sua versão do JetPack e na versão do Python.

```bash
# Download the wheel file
wget https://developer.download.nvidia.cn/compute/redist/jp/v60/pytorch/torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
# Install the wheel file
pip install torch-2.4.0a0+f70bd71a48.nv24.06.15634931-cp310-cp310-linux_aarch64.whl
```

**Passo 3.** Verifique a instalação:

```python
import torch
print(torch.cuda.is_available())
```

</TabItem>
</Tabs>

<!-- Code END -->

## Várias versões do PyTorch com Conda

O Miniconda é um instalador leve para o gerenciador de pacotes Conda, fornecendo um ambiente mínimo para criar e gerenciar rapidamente ambientes e pacotes Python.

**Passo 1.** Instale o Miniconda:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- Siga as instruções e digite "yes" para concordar com os termos.
- Recomenda-se usar o caminho de instalação padrão, como ~/miniconda3.
- Por fim, será perguntado se deseja adicionar automaticamente ao .bashrc. Recomenda-se digitar "yes".

:::
<div align="center">
  <img alt="saída do conda init mostrando /home/seeed/.bashrc modificado para que o conda carregue em novos shells" width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
</div>

**Passo 2.** Inicialize e configure o conda:

```bash
source ~/.bashrc
# Verify if conda is functioning properly
conda --version
# Disable automatic entry into the conda base environment
conda config --set auto_activate_base false
# Close and reopen the terminal. By default, it will not enter the base environment.
```

**Passo 3.** Crie um novo ambiente e instale um wheel específico do PyTorch:

```bash
conda create -n torch_2.0 python=3.8
conda activate torch_2.0
```

**Passo 4.** Baixe e instale o arquivo wheel do PyTorch como mostrado nas [seções anteriores](#Install_Torch).

:::info
Para mais detalhes, consulte o [guia de instalação do PyTorch da NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
:::

## Recursos

- [Fórum de desenvolvedores NVIDIA](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [Guia de instalação do PyTorch da NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [Notas de versão do PyTorch para Jetson](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

## FAQ

**Qual wheel do PyTorch corresponde à minha versão do JetPack?**
JetPack 5.1.3 usa `torch-2.1.0a0+...cp38` (Python 3.8) e JetPack 6.2 usa `torch-2.5.0a0+...cp310` (Python 3.10). Escolha o wheel cujo caminho `jp/vXX` e tag `cpXX` correspondam a ambos, caso contrário o pip instala algo que roda apenas em CPU.

**Eu preciso do cuSPARSELt antes de instalar o torch?**
Apenas nos wheels mais recentes. Builds do PyTorch a partir de 24.06 chamam o cuSPARSELt para multiplicação de matrizes esparsas, então o caminho do JetPack 6.2 instala primeiro a versão 0.7.1. O exemplo do JetPack 5.1.3 com torch 2.1.0 não precisa disso.

**Como manter duas versões do torch na mesma máquina?**
Use ambientes conda: um ambiente por par de Python e torch, por exemplo `conda create -n torch_2.0 python=3.8`. Ative o ambiente antes de instalar o wheel e mantenha `auto_activate_base` desativado para que o Python do sistema permaneça limpo.

**`torch.cuda.is_available()` retorna False. O que deu errado?**
O wheel é ou o build de CPU do PyPI ou foi compilado para um JetPack diferente. Reinstale o wheel da NVIDIA que corresponde ao seu caminho de JetPack e confirme com `torch.__version__`, que traz a tag de build `nv` para wheels com CUDA habilitado.

## Recursos relacionados

- [Instalar ROS 2 Humble no reComputer](/pt-br/install_ros2_humble/)
- [Parear o Gemini 2 com YOLOv11 para medição de distância](/pt-br/yolov11_with_depth_camera/)
- [Mechanismo eficiente de inferência de visão multitarefa no Jetson](/pt-br/deploy_visual_perception_engine_recomputer/)
- [Página do produto reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
- [Notas de versão do PyTorch para Jetson](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
