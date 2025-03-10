---
description: Esta wiki proporciona una guía paso a paso para instalar y configurar MID360 LiDAR en una reComputer J30/40 usando ROS.
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
# Cómo utilizar el MID360 LiDAR con la reComputer

## Introducción
Los sensores LIDAR MID360 proporcionan datos de nubes de puntos 3D de alta precisión para diversas aplicaciones. Esta guía se centra en la configuración del MID360 en un dispositivo [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) que ejecuta ROS Noetic.

Esta wiki proporciona una guía paso a paso para instalar y configurar MID360 LiDAR en la [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson usando ROS y visualizar datos de nubes de puntos.
<!-- <div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div> -->


## Prerequisitos
- __[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: Con la[instalación de JetPack 5.x](/reComputer_J4012_Flash_Jetpack) completada y [ROS Noetic environment](/installing_ros1) de acuerdo al tutorial. 

- __MID360 LIDAR__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Primeros pasos

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

### Configurar la dirección IP de la reComputer
La dirección IP predeterminada para MID360 LiDAR es **_192.168.1.2xx_**, la dirección IP de la máquina host de destino es **_192.168.1.50_**. Después de conectar el hardware, debes configurar manualmente la dirección IP de la reComputer.

- **Paso 1:** Abre los ajustes Ethernet.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **Paso 2:** Selecciona Configuración manual en el campo IPv4 e ingresa la dirección IP **192.168.1.50** y la máscara **255.255.255.0**.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/MID360/change_ip.png" />
  </div>

- **Paso 3:** Parámetros de configuración.
  A continuación, modifica los archivos `~/src/livox_ros_driver2/config` en `livox_ros_driver2`. Las partes subrayadas en azul deben ser coherentes con la IP estática. Las partes subrayadas en rojo deben configurarse como "192.168.1.1xx", donde los dos últimos dígitos corresponden a los dos últimos dígitos del código de transmisión MID360. Por ejemplo, si tu código de transmisión es 47MDL1C0010081 (14 caracteres), entonces la dirección IP debe configurarse como `192.168.1.181`.

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


### Ejecutando un código con el LiDAR
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

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>