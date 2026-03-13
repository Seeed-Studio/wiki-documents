---
description: Instalação para Model Assistant
title: Instalação
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Introduce_Installation
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Introduce_Installation/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Instalação

O ambiente de execução do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) depende do PyTorch e de várias bibliotecas de terceiros do OpenMMLab. Você pode encontrar o código do SSCMA no [GitHub](https://github.com/Seeed-Studio/ModelAssistant). Para começar, certifique-se de que o PyTorch esteja instalado localmente seguindo as instruções [aqui](https://pytorch.org/get-started/locally/), e depois obtenha as bibliotecas necessárias do OpenMMLab.

- [MMCV](https://github.com/open-mmlab/mmcv): Biblioteca de Fundamentos de Visão Computacional do OpenMMLab.
- [MMClassification](https://github.com/open-mmlab/mmclassification): Kit de ferramentas e benchmarking de classificação de imagens do OpenMMLab. Além das tarefas de classificação, também é usado para fornecer uma variedade de redes backbone.
- [MMDetection](https://github.com/open-mmlab/mmdetection): Caixa de ferramentas e benchmark de detecção do OpenMMLab.
- [MMPose](https://github.com/open-mmlab/mmpose): Caixa de ferramentas e benchmark de pose do OpenMMLab.
- [MIM](https://github.com/open-mmlab/mim): MIM fornece uma interface unificada para iniciar e instalar o projeto OpenMMLab e suas extensões, além de gerenciar a biblioteca de modelos do OpenMMLab.

## Pré-requisitos

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) funciona em Linux, Windows e macOS. **Recomendamos fortemente que você use o [Miniconda](https://docs.conda.io/en/latest/miniconda.html) para gerenciar pacotes Python.** Siga as etapas abaixo para preparar o ambiente.

:::tip
Miniconda é um instalador mínimo gratuito para conda; você pode baixar e instalar o Miniconda3 pelo [Site Oficial do Miniconda](https://docs.conda.io/en/latest/miniconda.html).
:::

### Etapa 0 - Clonar o Repositório Git

Primeiro, você precisa clonar o [Código-fonte do SSCMA](https://github.com/Seeed-Studio/ModelAssistant) localmente. Usamos Git para gerenciá-lo e hospedá-lo no GitHub, e fornecemos duas maneiras diferentes de cloná-lo abaixo (escolha uma delas). Se você não tiver o Git instalado, pode configurá-lo em seu computador consultando a [Documentação do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

<Tabs>
<TabItem value="HTTPS" label="HTTPS">

```sh
git clone https://github.com/Seeed-Studio/ModelAssistant.git --depth 1 && \
cd ModelAssistant
```

</TabItem>
<TabItem value="SSH" label="SSH">

```sh
git clone git@github.com:Seeed-Studio/ModelAssistant.git --depth 1 && \
cd ModelAssistant
```

</TabItem>

</Tabs>


### Etapa 1 - Criar Ambiente Virtual

Supondo que você tenha o conda instalado, então **crie** e **ative** um ambiente virtual conda.

```sh
conda create --name sscma python=3.8 -y && \
conda activate sscma
```

### Etapa 2 - Instalar o PyTorch

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) depende do PyTorch. Antes de executar o código a seguir, confirme novamente que você **ativou** o ambiente virtual que acabou de criar.

Para dispositivos com GPUs (CUDA), recomendamos instalar dependências que suportem aceleração por GPU. Listamos as opções de configuração que você pode escolher em 2 casos diferentes; escolha manualmente de acordo com o seu ambiente de hardware.

- Plataforma somente CPU:

<Tabs>
<TabItem value="conda" label="conda">

```sh
conda install pytorch torchvision torchaudio cpuonly -c pytorch
```

</TabItem>
<TabItem value="pip" label="pip">

```sh
pip3 install torch torchvision torchaudio
```

</TabItem>
</Tabs>


- Plataforma com GPUs (CUDA):

<Tabs>
<TabItem value="conda" label="conda">

```sh
conda install pytorch torchvision torchaudio pytorch-cuda=11.7 cudatoolkit=11.7 -c pytorch -c nvidia
```

</TabItem>
<TabItem value="pip" label="pip">

```sh
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu117
```

</TabItem>
</Tabs>

:::tip
Você pode encontrar instaladores CUDA no [Site de Arquivo do NVIDIA CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit-archive) se sua plataforma não tiver CUDA instalado para GPUs NVIDIA; recomendamos usar CUDA 11.7 ou superior no ambiente do seu host. Para instalar o PyTorch em outras plataformas, leia mais no [Site Oficial do PyTorch](https://pytorch.org/get-started/locally/).
:::

### Etapa 3 - Instalar Dependências Essenciais

**Confirme que você ativou o ambiente virtual e está no diretório de trabalho principal do código-fonte do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)**, e então execute o código a seguir para concluir a configuração das dependências básicas.

- Instalar dependências do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)

```sh
pip3 install -r requirements/base.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

### Etapa 4 - Instalar Dependências Extras (Opcional)

Se você precisar realizar transformação de modelos ou testes de inferência, também será necessário instalar as seguintes dependências adicionais.

```sh
pip3 install -r requirements/inference.txt -r requirements/export.txt
```

Se você deseja fazer alterações no [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) e enviá-las para nós, recomendamos que você execute adicionalmente o comando a seguir para facilitar a verificação do seu código no momento do commit.

```sh
pip3 install -r requirements/tests.txt
pre-commit install
```

## Outro Método

A configuração do ambiente do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) pode ser feita automaticamente usando um script shell no Linux (testado no Ubuntu 20.04~22.10), se você tiver o Conda configurado.

```bash
bash scripts/setup_linux.sh
```

Ou você pode fazer a configuração manualmente usando o arquivo de configuração do Conda.

<Tabs>
<TabItem value="CPU" label="CPU">

```sh
conda env create -n sscma -f environment.yml && \
conda activate sscma && \
pip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

</TabItem>
<TabItem value="GPU (CUDA)" label="GPU (CUDA)">

```sh
conda env create -n sscma -f environment_cuda.yml && \
conda activate sscma && \
pip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \
mim install -r requirements/mmlab.txt && \
mim install -e .
```

</TabItem>
</Tabs>


## Lembretes

Após concluir a instalação do Miniconda e configurar o [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) com o Conda, criamos um ambiente virtual Conda chamado `sscma` e instalamos as dependências nesse ambiente virtual. Para as configurações e o desenvolvimento subsequentes relacionados ao [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), certifique-se de estar no ambiente virtual do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), que você pode ativar com o seguinte comando.

```sh
conda activate sscma
```

Se você quiser reconfigurar ou remover o ambiente virtual do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant), pode executar o seguinte comando.

```sh
conda env remove -n sscma
```

## FAQs

- Minha velocidade de conexão é lenta ao instalar pacotes a partir dos canais padrão do anaconda.

  Por favor, seja paciente e tente alguns canais espelhados de terceiros, como o [espelho da SJTU](https://mirror.sjtu.edu.cn/docs/anaconda), [espelho da TUNA](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda) etc.
