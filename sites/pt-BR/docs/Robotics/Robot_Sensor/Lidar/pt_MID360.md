---
description: Este wiki fornece um guia passo a passo para instalar e configurar o MID360 LiDAR no reComputer J30/40 usando ROS.
title: Mid360 com ROS
keywords:
  - Jetson Nano
  - reComputer
  - Mid360
  - Lidar
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /mid360
last_update:
  date: 04/10/2024
  author: ZhuYaoHui
createdAt: '2024-10-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/mid360/
---
# Como usar o MID360 LiDAR no reComputer

## Introdução
Os sensores MID360 LIDAR fornecem dados de nuvem de pontos 3D de alta precisão para diversas aplicações. Este guia se concentra na configuração do MID360 em um dispositivo [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) rodando ROS Noetic.

Este wiki fornece um guia passo a passo para instalar e configurar o MID360 LiDAR em um Jetson [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) usando ROS e visualizar dados de nuvem de pontos.
<!-- <div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div> -->


## Pré-requisitos
- __[reComputer J30/40 series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: Já concluiu a [instalação do sistema JetPack 5.x](/pt-br/reComputer_J4012_Flash_Jetpack) e do [ambiente ROS Noetic](/pt-br/installing_ros1) de acordo com o tutorial. 

- __MID360 LIDAR__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Primeiros Passos

### Instalar o SDK2
- **Passo 1:** Instalar Livox-SDK2
  ```bash
  git clone https://github.com/Livox-SDK/Livox-SDK2.git
  cd ./Livox-SDK2/
  mkdir build
  cd build
  cmake .. && make -j8
  sudo make install
  ```

- **Passo 2:** Instalar livox_ros_driver2:
  ```bash
  git clone https://github.com/Livox-SDK/livox_ros_driver2.git ~/ws_livox/src/livox_ros_driver2
  cd ~/ws_livox/src/livox_ros_driver2
  source /opt/ros/noetic/setup.sh
  ./build.sh ROS1
  ```

### Configurar o endereço IP do reComputer
O endereço IP padrão do MID360 LiDAR é **_192.168.1.2xx_**, o endereço IP alvo da máquina host é **_192.168.1.50_**. Após conectar o hardware, você precisa configurar manualmente o endereço IP do reComputer.

- **Passo 1:** Abrir as configurações de Ethernet.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **Passo 2:** Selecione Configurações Manuais no campo IPv4 e insira o endereço IP **192.168.1.50** e a máscara **255.255.255.0**. 
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/change_ip.png" />
  </div>

- **Passo 3:** Parâmetros de Configuração.
  Em seguida, modifique os arquivos `~/src/livox_ros_driver2/config` em `livox_ros_driver2`. As partes sublinhadas em azul devem ser consistentes com o IP estático. As partes sublinhadas em vermelho devem ser definidas como `192.168.1.1xx`, onde os dois últimos dígitos correspondem aos dois últimos dígitos do código de broadcast do MID360. Por exemplo, se o seu código de broadcast for 47MDL1C0010081 (14 caracteres), então o endereço IP deve ser definido como `192.168.1.181`.

  - `livox_ros_driver2/config/MID360_config.json`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/MID360_config.png" />
      </div>
  - `livox_ros_driver2/launch_ROS1/rviz_MID360.launch`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/RVIZ_MID360.png" />
      </div>
  - `livox_ros_driver2/launch_ROS1/msg_MID360.launch`
      <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/MSG_MID360.png" />
      </div>


### Executando o código do Lidar
  Iniciar o Lidar:
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 msg_MID360.launch
  ```

  Abra um novo terminal:
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 rviz_MID360.launch
  ```
  <div align="center">
  <img width={500} 
  src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/reesult.png" />
  </div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>