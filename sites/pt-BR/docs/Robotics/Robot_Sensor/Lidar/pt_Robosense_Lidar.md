---
description: Este wiki fornece um guia passo a passo para instalar e configurar o RoboSense LiDAR no reComputer J30/40 usando ROS.
title: RoboSense Lidar com ROS
keywords:
  - Jetson Nano
  - reComputer
  - Robosense
  - Lidar
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /robosense_lidar
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
createdAt: '2024-07-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/robosense_lidar/
---
# Como usar o RoboSense LiDAR no reComputer

## Introdução
Os sensores RoboSense LiDAR fornecem dados de nuvem de pontos 3D de alta precisão para várias aplicações. Este guia foca na configuração do modelo RS32 em um dispositivo [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) executando ROS Noetic.

Este wiki fornece um guia passo a passo para instalar e configurar o RoboSense LiDAR no Jetson [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) usando ROS, e visualizar os dados da nuvem de pontos.
<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div>


## Pré-requisitos
- __[reComputer série J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: Já concluiu a [instalação do sistema JetPack 5.x](/pt-br/reComputer_J4012_Flash_Jetpack) e do [ambiente ROS Noetic](/pt-br/installing_ros1) de acordo com o tutorial. 

- __Toda a série de lidar RoboSense__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Primeiros Passos

### Instalar o Robosense SDK
- **Passo 1:** Instalar dependências básicas
  ```bash
  sudo apt-get update &&
  sudo apt-get install -y libyaml-cpp-dev libpcap-dev
  ```
- **Passo 2:** Criar o workspace
  ```bash
  mkdir -p catkin_ws/src
  cd catkin_ws/src
  ```
- **Passo 3:** Clonar o rslidar_sdk
  ```bash
  git clone https://github.com/RoboSense-LiDAR/rslidar_sdk.git
  cd rslidar_sdk
  git submodule init
  git submodule update
  ```
- **Passo 4:** Abra o arquivo **CMakeLists.txt** localizado em **_catkin_ws/src/rslidar_sdk/CMakeLists.txt_** e altere a variável **_COMPILE_METHOD_** no topo do arquivo para **_CATKIN_**.

  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig3.png" />
  </div>

- **Passo 4:** Exclua o arquivo **package.xml** existente localizado no **_diretório catkin_ws/src/rslidar_sdk/_**, e renomeie o arquivo **package_ros1.xml** para **package.xml**.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig4.png" />
  </div>

- **Passo 5:** Insira os seguintes comandos no terminal
  ```bash
  cd ~/catkin_ws/src/rslidar_sdk/
  mkdir build && cd build
  cmake .. && make -j4
  cd ~/catkin_ws/
  catkin_make
  ```
### Conectar o hardware
- **Passo 1:** Conecte a fonte de alimentação, o Robosense RS32 LiDAR, a caixa de interface e o cabo Ethernet ao reComputer J4012 conforme descrito abaixo:
<div align="center">
    <img width={500} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig5.gif" />
</div>

- **Passo 2:** Abra o arquivo config.yaml localizado em **_/catkin_ws/src/rslidar_sdk/config/config.yaml_** e altere o **lidar_type** na linha **10** para **RS32**. Salve o arquivo e feche-o. Certifique-se de preencher o modelo correto de LiDAR de acordo com o seu dispositivo.
<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig6.png" />
</div>

### Configurar o endereço IP do reComputer
O endereço IP padrão para o Robosense RS32 LiDAR é **_192.168.1.200_**, o endereço IP do host de destino é **_192.168.1.102_**, o número da porta do pacote MSOP é 6699 e o número da porta do pacote DIFOP é 7788. Após conectar o hardware, você precisa configurar manualmente o endereço IP do reComputer.

- **Passo 1:** Abra as configurações de Ethernet.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **Passo 2:** Selecione configurações manuais no campo IPv4 e insira o endereço IP **192.168.1.102** e a máscara **255.255.255.0**. 
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig8.png" />
  </div>

  ```bash
  ping 192.168.1.200
  ```
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig9.png" />
  </div>
  Se você receber dados do LiDAR, isso indica uma conexão bem-sucedida.

### Executando o código do Lidar
  ```bash
  cd ~/catkin_ws/
  source devel/setup.bash
  roslaunch rslidar_sdk start.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig10.png" />
  </div>


## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>