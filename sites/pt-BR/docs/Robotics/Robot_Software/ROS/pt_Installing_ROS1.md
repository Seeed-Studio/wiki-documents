---
description: Este wiki fornece a instalação do ROS1 no reComputer.
title: Instalar ROS1
keywords:
  - ROS1
  - Instalação do ROS
  - Jetson Nano
  - robótica
  - Robot Operating System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /installing_ros1
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
createdAt: '2024-07-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/installing_ros1/
---
# Como Instalar ROS1 no reComputer

## Introdução
ROS, ou Robot Operating System, é um framework de código aberto amplamente utilizado no desenvolvimento e na pesquisa em robótica. Desenvolvido inicialmente na Universidade de Stanford e posteriormente pela Willow Garage, o ROS1 oferece suporte a plataformas de computação heterogêneas, diversos linguagens de programação e design modular. Ele apresenta mecanismos de comunicação por meio de Tópicos, Serviços e um Servidor de Parâmetros, gerenciamento eficiente de pacotes com Catkin e um rico conjunto de ferramentas de desenvolvimento como rviz, gazebo e rosbag, tornando‑se uma ferramenta essencial para construir e integrar sistemas robóticos complexos.

Neste wiki, você aprenderá como instalar o ROS Noetic na Série [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html). Siga as etapas abaixo para configurar seu ambiente de desenvolvimento.

## Pré-requisitos
- __[Série reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__.

  :::note
  Certifique-se de que o seu dispositivo reComputer esteja com o _JetPack 5.x_ instalado, incluindo todos os drivers necessários de CUDA e relacionados. Siga a configuração de conexão de hardware conforme descrito abaixo.
  :::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig1.gif" />
</div>

## Primeiros Passos

### Instalar ROS1
- **Etapa 1:** Abra o Terminal e atualize os pacotes do sistema.
  ```bash
  sudo apt update 
  sudo apt upgrade
  ```
- **Etapa 2:** Instale as ferramentas básicas.
  ```bash
  sudo apt install curl gnupg2 lsb-release
  ```
- **Etapa 3:** Adicione a chave do repositório do ROS.
  ```bash
  sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
  ```
- **Etapa 4:** Adicione o repositório do ROS.
  ```bash
  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
  ```
- **Etapa 5:** Atualize a lista de pacotes.
  ```bash
  sudo apt update
  ```
- **Etapa 6:** Instale o ros-noetic-desktop-full.
  ```bash
  sudo apt install ros-noetic-desktop-full
  sudo apt-get install python3-rosdep
  ```
- **Etapa 7:** Inicialize o rosdep.
  ```bash
  sudo rosdep init
  rosdep update
  ```
- **Etapa 8:** Configure as variáveis de ambiente do ROS.
  ```bash
  echo "source /opt/ros/noetic/setup.bash">> ~/.bashrc &&
  source ~/.bashrc
  ```
- **Etapa 9:** Instale as ferramentas de dependência.
  ```bash
  sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
  ```
- **Etapa 10:** Teste a instalação.
  ```bash
  roscore
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig2.png" />
  </div>


## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>