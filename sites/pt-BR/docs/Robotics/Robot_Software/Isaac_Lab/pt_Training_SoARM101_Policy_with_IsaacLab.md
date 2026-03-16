---
description: Este wiki mostra como configurar o Isaac Lab no Ubuntu com GPU Nvidia para treinar políticas de aprendizado por reforço para os braços robóticos SO-ARM100/101.
title: Treinando a Política do SoArm101 com IsaacLab
keywords:
  - IsaacLab
  - Reinforcement Learning
  - Robotic Arm
  - SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.webp
slug: /training_soarm101_policy_with_isaacLab
last_update:
  date: 9/4/2025
  author: Youjiang
createdAt: '2025-09-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/training_soarm101_policy_with_isaacLab/
---

## Introdução

Este wiki apresenta como usar o Isaac Lab para treinar e testar políticas de braço robótico SO-ARM100/101 com aprendizado por reforço.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/cube_play.gif" />
</div>

## 📌Pré-requisitos

- Um PC com Ubuntu e GPU Nvidia

:::info
Se você não tiver drivers CUDA ou o Conda instalados, configure-os primeiro.
:::

## Primeiros Passos

### 🚀 Etapa 1. Instalar o Isaac Lab

NVIDIA Isaac™ Lab é um framework unificado de código aberto para [aprendizado de robôs](https://www.nvidia.com/en-us/glossary/robot-learning/) que ajuda pesquisadores e desenvolvedores a treinar políticas robóticas de forma eficiente.

Execute os seguintes comandos no terminal do PC com Ubuntu:

```bash
# Create and activate Conda environment
conda create -n isaaclab python=3.10
conda activate isaaclab

# Install PyTorch (GPU version)
pip install torch==2.7.0 torchvision==0.22.0 --index-url https://download.pytorch.org/whl/cu128

# Upgrade pip
pip install --upgrade pip

# Install Isaac Sim (with extensions)
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# Clone IsaacLab repository
cd ~/Documents
git clone https://github.com/isaac-sim/IsaacLab.git

# Install dependencies
sudo apt install cmake build-essential

# Initialize setup
cd IsaacLab
./isaaclab.sh --install
```

Execute o seguinte comando para verificar a instalação:

```bash
./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py
```

Se tudo der certo, uma janela vazia do Isaac Sim deve aparecer.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/create_empty.png" />
</div>

### 🤖 Etapa 2. Instalar o Projeto isaac_so_arm101

<div style={{ textAlign: 'justify' }}>
    Este repositório implementa tarefas para os robôs SO‑ARM100 e SO‑ARM101 usando o Isaac Lab. Ele serve como base para vários tutoriais da série LycheeAI Hub Project: [SO‑ARM101 × Isaac Sim × Isaac Lab](https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series).
</div>

Execute os seguintes comandos:

```bash
cd ~/Documents
git clone https://github.com/MuammerBay/isaac_so_arm101.git
cd isaac_so_arm101

# Install project dependencies
python -m pip install -e source/SO_100

# Test environments
python scripts/list_envs.py
```

Se o projeto isaac_so_arm101 for instalado com sucesso, a janela do terminal exibirá o seguinte log:

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/install.png" />
</div>

### 🎯 Etapa 3. Iniciar o Treinamento

Inicie o treinamento com:

```bash
python scripts/rsl_rl/train.py --task SO-ARM100-Reach-v0
```

Isso abrirá uma janela do Isaac Sim onde você pode observar o processo de treinamento em tempo real. Você pode adicionar o parâmetro `--headless` ao comando de inicialização para acelerar o processo de treinamento.

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/J9JpmeXeKKE" title="Training SoArm100 with IsaacLab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Após o treinamento, os pesos do modelo serão salvos em:
`~/Documents/isaac_so_arm101/logs/rsl_rl/so_arm100_reach`

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/isaaclab_rl/models.png" />
</div>

### 🧪 Etapa 4. Testar o Modelo

Teste o modelo treinado com:

```bash
python scripts/rsl_rl/play.py --task SO-ARM100-Reach-Play-v0
```

Durante o teste, posições-alvo são geradas aleatoriamente dentro de um intervalo definido, e o modelo treinado controla o braço robótico para alcançar esses alvos.

<div class="video-container">
    <iframe width="900" height="540" src="https://www.youtube.com/embed/9BOOWKCyhXk" title="Test SoArm100 with IsaacLab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências

- https://lycheeai-hub.com/project-so-arm101-x-isaac-sim-x-isaac-lab-tutorial-series
- https://github.com/MuammerBay/isaac_so_arm101
- https://github.com/huggingface/lerobot
- https://github.com/isaac-sim/IsaacLab
- https://github.com/leggedrobotics/rsl_rl

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
