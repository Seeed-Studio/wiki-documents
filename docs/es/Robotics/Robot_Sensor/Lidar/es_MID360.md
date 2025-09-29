---
description: Esta wiki proporciona una guía paso a paso para instalar y configurar MID360 LiDAR en reComputer J30/40 usando ROS.
title: Mid360 con ROS
keywords:
- Jetson Nano
- reComputer
- Mid360
- Lidar
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/mid360
last_update:
  date: 04/10/2024
  author: ZhuYaoHui
---
# Cómo usar MID360 LiDAR en reComputer

## Introducción
Los sensores MID360 LIDAR proporcionan datos de nube de puntos 3D de alta precisión para diversas aplicaciones. Esta guía se centra en configurar el MID360 en un dispositivo [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) ejecutando ROS Noetic.

Esta wiki proporciona una guía paso a paso para instalar y configurar MID360 LiDAR en [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson usando ROS, y visualizar datos de nube de puntos.
<!-- <div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div> -->


## Prerrequisitos
- __[reComputer J30/40 series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: Ya completó la [instalación del sistema JetPack 5.x](/es/reComputer_J4012_Flash_Jetpack) y el [entorno ROS Noetic](/es/installing_ros1) según el tutorial. 

- __MID360 LIDAR__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Comenzando

### Instalar SDK2
- **Paso 1:** Instalar Livox-SDK2
  ```bash
  git clone https://github.com/Livox-SDK/Livox-SDK2.git
  cd ./Livox-SDK2/
  mkdir build
  cd build
  cmake .. && make -j8
  sudo make install
  ```

- **Paso 2:** Instalar livox_ros_driver2:
  ```bash
  git clone https://github.com/Livox-SDK/livox_ros_driver2.git ~/ws_livox/src/livox_ros_driver2
  cd ~/ws_livox/src/livox_ros_driver2
  source /opt/ros/noetic/setup.sh
  ./build.sh ROS1
  ```

### Configurar Dirección IP de reComputer
La dirección IP predeterminada para el MID360 LiDAR es **_192.168.1.2xx_**, la dirección IP de la máquina host objetivo es **_192.168.1.50_**. Después de conectar el hardware, necesita configurar manualmente la dirección IP del reComputer.

- **Paso 1:** Abrir Configuración de Ethernet.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **Paso 2:** Seleccionar Configuración Manual en el campo IPv4 e ingresar la dirección IP **192.168.1.50** y máscara **255.255.255.0**. 
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/change_ip.png" />
  </div>

- **Paso 3:** Parámetros de Configuración.
  A continuación, modifique los archivos `~/src/livox_ros_driver2/config` en el `livox_ros_driver2`. Las partes subrayadas en azul deben ser consistentes con la IP estática. Las partes subrayadas en rojo deben configurarse como `192.168.1.1xx`, donde los últimos dos dígitos corresponden a los últimos dos dígitos del código de difusión MID360. Por ejemplo, si su código de difusión es 47MDL1C0010081 (14 caracteres), entonces la dirección IP debe configurarse como `192.168.1.181`.

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


### Ejecutar Código Lidar
  Iniciar Lidar:
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 msg_MID360.launch
  ```
  
  Abrir una nueva terminal:
  ```bash
  cd ~/ws_livox/
  source devel/setup.bash
  roslaunch livox_ros_driver2 rviz_MID360.launch
  ```
  <div align="center">
  <img width={500} 
  src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/reesult.png" />
  </div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>