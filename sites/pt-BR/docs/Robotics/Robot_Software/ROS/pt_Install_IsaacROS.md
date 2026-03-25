---
description: Este wiki fornece um guia passo a passo para instalar o Isaac ROS.
title: Instalar o Isaac ROS
keywords:
  - NVIDIA
  - Isaac ROS
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_isaacros
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
createdAt: '2025-05-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/install_isaacros/
---

## Configuração Inicial do Ambiente Isaac ROS

### Requisitos do ReComputer

#### Ambiente de Hardware

- Jetson Orin/Jetson Xavier

#### Ambiente de Software

- JetPack 5.1.2
- Ubuntu 20.04+
- [ROS2 Humble](/pt-br/install_ros2_humble)

## 1. Instalar Dependências Iniciais

Siga a imagem oficial da NVIDIA e o guia de gravação do Seeed Wiki:

```bash
sudo apt-get install python3-pip # Install python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check Jetpack version
sudo apt-get install git-lfs # Install git-lfs
```

## 2. Instalar Docker-CE

Atualize as fontes de software:

```bash
sudo apt-get update
```

Instale as dependências básicas:

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Install essential packages to allow apt over HTTPS
```

Adicione a chave GPG oficial do Docker:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Adicione o repositório estável do Docker:

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Atualize a lista de pacotes novamente (novo repositório adicionado):

```bash
sudo apt-get update
```

Instale o Docker CE (Community Edition):

```bash
sudo apt-get install docker-ce
```

Garanta que o Docker seja iniciado:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Adicione permissões (adicionar usuário ao grupo Docker):

```bash
sudo usermod -aG docker $USER
```

Reinicie o sistema ou faça logout:

```bash
sudo reboot
```

## 3. Configuração de Pacotes Comuns do Isaac ROS

Crie o workspace e adicione ao ambiente:

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

Entre no workspace e clone os pacotes:

```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

Puxe a imagem Docker oficial Isaac Common e entre no Docker:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

Configuração inicial do ambiente concluída.

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
