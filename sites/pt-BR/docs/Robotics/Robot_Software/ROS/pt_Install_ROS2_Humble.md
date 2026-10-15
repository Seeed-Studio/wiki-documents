---
description: Este wiki fornece um guia passo a passo para instalar o ROS2 Humble.
title: Instalar o ROS2 Humble
keywords:
  - NVIDIA
  - Isaac ROS
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_ros2_humble
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
createdAt: '2025-05-28'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/install_ros2_humble/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Instalação do ROS2 Humble

ROS 2 é um middleware de robótica open-source de próxima geração, projetado para construir sistemas robóticos em tempo real, confiáveis e escaláveis. Este wiki demonstrará o processo detalhado de instalação do ROS 2 usando o Jetson como exemplo.


<Tabs>

<TabItem value="JP5.1.2" label="JP5.1.2">

## Definir localidade (Locale)
```bash
locale  # check for UTF-8
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
locale  # verify settings
```

## Instalar dependências
```bash
sudo apt update && sudo apt install gnupg wget
sudo apt install software-properties-common
sudo add-apt-repository universe
```

## Inicializar fontes (Escolha uma região)
```bash
# US Region
echo 'deb https://isaac.download.nvidia.com/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list

# China Region
echo 'deb https://isaac.download.nvidia.cn/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list
```

## Adicionar repositório APT do ROS 2
```bash
sudo apt update && sudo apt install curl -y \
&& sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

## Instalar ROS2
```bash
sudo apt update
sudo apt install ros-humble-desktop-full  # Options: ros-humble-desktop-full, ros-humble-desktop, or ros-humble-ros-base
```

## Instalar ferramentas de build adicionais
```bash
sudo apt install ros-dev-tools
```

## Inicializar ambiente do ROS
```bash
sudo rosdep init
rosdep update
```

## Configurar variáveis de ambiente do ROS
```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

No dispositivo Jetson, abra um terminal e insira o seguinte comando:

```bash
sudo apt install software-properties-common -y
sudo add-apt-repository universe
sudo apt update
sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
sudo apt update
sudo apt install ros-humble-desktop -y
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_install.png"/>
</div>

</TabItem>

</Tabs>

Para verificar se o ROS2 foi instalado com sucesso, podemos criar dois novos terminais no dispositivo e executar os seguintes comandos, respectivamente.

```bash
# terminal1
ros2 run demo_nodes_cpp talker

# terminal2
ros2 run demo_nodes_py listener
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_test.png"/>
</div>

Se ambos os terminais imprimirem as mensagens, isso significa que o ROS 2 Humble foi instalado com sucesso! 🎉

## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>