---
description: Esta wiki proporciona una guía paso a paso para instalar y configurar RoboSense LiDAR en una reComputer J30/40 usando ROS.
title: RoboSense Lidar con ROS
keywords:
- Jetson Nano
- reComputer
- Robosense
- Lidar
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/robosense_lidar
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# Cómo utilizar RoboSense LiDAR en la reComputer

## Introducción
Los sensores RoboSense LiDAR proporcionan datos de nubes de puntos 3D de alta precisión para diversas aplicaciones. Esta guía se centra en la configuración del modelo RS32 en un dispositivo [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) que ejecuta ROS Noetic.

Esta wiki proporciona una guía paso a paso para instalar y configurar RoboSense LiDAR en la[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson usando ROS y visualizar datos de nubes de puntos.
<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div>


## Prerequisitos
- __[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: Con la[instalación del sistema operativo JetPack 5.x](/reComputer_J4012_Flash_Jetpack) y [ROS Noetic environment](/installing_ros1) de acuerdo al tutorial. 

- __RoboSense todas las series lidar__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Primeros pasos

### Instalar Robosense SDK
- **Paso 1:** Instalar las dependencias básicas
  ```bash
  sudo apt-get update &&
  sudo apt-get install -y libyaml-cpp-dev libpcap-dev
  ```
- **Paso 2:** Crear el espacio de trabajo
  ```bash
  mkdir -p catkin_ws/src
  cd catkin_ws/src
  ```
- **Paso 3:** Clonar el repositorio rslidar_sdk
  ```bash
  git clone https://github.com/RoboSense-LiDAR/rslidar_sdk.git
  cd rslidar_sdk
  git submodule init
  git submodule update
  ```
- **Paso 4:** Abre el archivo **CMakeLists.txt** ubicado en **_catkin_ws/src/rslidar_sdk/CMakeLists.txt_** y cambia la variable **_COMPILE_METHOD_** en la parte superior del archivo a **_CATKIN_**.

  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig3.png" />
  </div>

- **Paso 4:** Elimina el archivo **package.xml** existente ubicado en el directorio **_catkin_ws/src/rslidar_sdk/_**, cambia el nombre del archivo **package_ros1.xml** a **package.xml**.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig4.png" />
  </div>

- **Paso 5:** Ingresa los siguientes comandos en la terminal
  ```bash
  cd ~/catkin_ws/src/rslidar_sdk/
  mkdir build && cd build
  cmake .. && make -j4
  cd ~/catkin_ws/
  catkin_make
  ```
### Conexiones de Hardware
- **Paso 1:** Conecta la fuente de alimentación, Robosense RS32 LiDAR, la caja de interfaz y el cable Ethernet a la reComputer J4012 como se muestra a continuación:
<div align="center">
    <img width={500} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig5.gif" />
</div>

- **Paso 2:** Abre el archivo config.yaml ubicado en **_/catkin_ws/src/rslidar_sdk/config/config.yaml_** y cambia el **lidar_type** en la línea **10** a **RS32**. Guarda el archivo y ciérralo. Asegúrate de completar el modelo LiDAR correcto según tu dispositivo.
<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig6.png" />
</div>

### Configurar la dirección IP de la reComputer
La dirección IP predeterminada para Robosense RS32 LiDAR es **_192.168.1.200_**, la dirección IP de la máquina host de destino es **_192.168.1.102_**, el número de puerto del paquete MSOP es 6699 y el número de puerto del paquete DIFOP es 7788. Después de conectar el hardware, debes configurar manualmente la dirección IP de la reComputer.

- **Paso 1:** Abre la configuración de Ethernet.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **Paso 2:** Selecciona Configuración manual en el campo IPv4 e ingresa la dirección IP **192.168.1.102** y la máscara **255.255.255.0**.
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
  Si recibes datos del LiDAR, indica una conexión exitosa.

### Ejecutando un código para el LiDAR
  ```bash
  cd ~/catkin_ws/
  source devel/setup.bash
  roslaunch rslidar_sdk start.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig10.png" />
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