---
description: Este artigo fornece um guia passo a passo para instalar o PyTorch otimizado pela NVIDIA em dispositivos reComputer baseados em Jetson, adaptado a diferentes versões do JetPack (5, 6 e outras). Ele explica como configurar as dependências necessárias, instalar o cuSPARSELt para versões mais recentes do PyTorch e verificar a instalação. Além disso, aborda o uso do Miniconda para gerenciar múltiplos ambientes Python, permitindo que os usuários alternem facilmente entre diferentes versões do PyTorch para desenvolvimento e implantação. Recursos úteis e links oficiais também são incluídos para referência adicional.
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
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/
---

<div style={{ textAlign: "justify" }}>
Este wiki demonstra como instalar o PyTorch otimizado pela NVIDIA no seu reComputer, combinando com a sua versão do JetPack. Ele também aborda como usar ambientes virtuais (conda) para gerenciar múltiplas versões do PyTorch para desenvolvimento e implantação.
</div>

## Pré-requisitos

- [reComputer](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) com JetPack instalado
- Conexão com a Internet

<a id="Install_Torch"></a>

## Instalar PyTorch para reComputer

Aqui, apresentaremos como instalar o PyTorch com suporte a CUDA nas duas versões comumente usadas do Jetpack 5 e Jetpack 6.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.3" label="JP5.1.3">

No reComputer, a versão comumente usada do Jetpack 5 é a 5.1.3. Aqui, vamos usá-la para apresentar como instalar o PyTorch.

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
Se você precisar de uma versão mais recente do torch que suporte o Jetpack 5.1.3, faça o download do arquivo wheel compilado a partir [daqui](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVSylp0HuEFKigdpEzDlkVoBgmcjcT5StPS2xkzfp8RQVg?e=duoRdR) (torch-2.2 para python3.8).
:::

**Passo 3.** Verifique a instalação:

```python
import torch
print(torch.cuda.is_available())
print(torch.__version__)
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.1.png"/>
</div>

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

No reComputer, a versão comumente usada do Jetpack 6 é a 6.2. Aqui, vamos usá-la para apresentar como instalar o PyTorch.

**Passo 1.** Atualize o sistema e instale as dependências:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

**Passo 2.** Instale o cuSPARSELt a partir [daqui](https://developer.nvidia.com/cusparselt-downloads?target_os=Linux&target_arch=aarch64-jetson&Compilation=Native&Distribution=Ubuntu&target_version=22.04&target_type=deb_network) (necessário para PyTorch 24.06+):

:::note
<div style={{ textAlign: "justify" }}>
cuSPARSELt é uma biblioteca CUDA de alto desempenho desenvolvida pela NVIDIA especificamente para multiplicação de matrizes esparsas. Ela é usada principalmente para acelerar operações de multiplicação de matrizes sob pesos esparsos, que são comumente vistos em inferência de grandes modelos e redes neurais esparsas. Na nova versão do PyTorch (PyTorch 24.06+), ele chamará automaticamente o cusparselt para melhorar a velocidade de inferência de modelos esparsos, especialmente em GPUs embarcadas como o Jetson, o que pode aumentar significativamente a eficiência.
</div>
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_cu.png"/>
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
Se você precisar de uma versão mais recente do torch que suporte o Jetpack 6.2, faça o download do arquivo wheel compilado a partir [daqui](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EW2ke8EPcVhGsM2mjCMQOWEBQHRtPMGgAkHOR6hGD-zLjA?e=wPiBzH) (torch-2.7 para python3.10).
:::

**Passo 5.** Verifique a instalação:

```python
import torch
print(torch.cuda.is_available())
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/torch_2.5.png"/>
</div>

</TabItem>

<TabItem value="Other Version" label="Other Version">

**Passo 1.** Atualize o sistema e instale as dependências:

```bash
sudo apt-get -y update
sudo apt-get install -y python3-pip libopenblas-dev
```

Aqui está o [arquivo wheel compilado do PyTorch](https://developer.download.nvidia.cn/compute/redist/jp/) com suporte a CUDA fornecido oficialmente pela NVIDIA.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/download_wheel.png"/>
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

## Múltiplas versões do PyTorch com Conda

Miniconda é um instalador leve para o gerenciador de pacotes Conda, fornecendo um ambiente mínimo para criar e gerenciar rapidamente ambientes e pacotes Python.

**Passo 1.** Instale o Miniconda:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
```

:::info

- Siga as instruções e digite "yes" para concordar com os termos.
- Recomenda-se usar a configuração padrão para o caminho de instalação, como ~/miniconda3.
- Por fim, será perguntado se deseja adicionar automaticamente ao .bashrc. Recomenda-se digitar "yes".

:::
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer/Application/Install_torch_on_reComputer/install_conda.png"/>
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

**Passo 4.** Baixe e instale o arquivo wheel do PyTorch conforme mostrado nas [seções anteriores](#Install_Torch).

:::info
Para mais detalhes, consulte o [guia de instalação do PyTorch da NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
:::

## Recursos

- [NVIDIA Developer Forum](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048)
- [Guia de instalação do PyTorch da NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html)
- [Notas de Lançamento do PyTorch para Jetson](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform-release-notes/pytorch-jetson-rel.html#pytorch-jetson-rel)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
