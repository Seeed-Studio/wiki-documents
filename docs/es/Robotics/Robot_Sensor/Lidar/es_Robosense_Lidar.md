---
description: Esta wiki proporciona una guía paso a paso para instalar y configurar RoboSense LiDAR en reComputer J30/40 usando ROS.
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
# Cómo usar RoboSense LiDAR en reComputer

## Introducción
Los sensores LiDAR de RoboSense proporcionan datos de nube de puntos 3D de alta precisión para diversas aplicaciones. Esta guía se enfoca en configurar el modelo RS32 en un dispositivo [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) ejecutando ROS Noetic.

Esta wiki proporciona una guía paso a paso para instalar y configurar RoboSense LiDAR en [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Jetson usando ROS, y visualizar datos de nube de puntos.
<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig1.gif" />
</div>


## Prerrequisitos
- __[reComputer serie J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: Ya completó la [instalación del sistema JetPack 5.x](/es/reComputer_J4012_Flash_Jetpack) y el [entorno ROS Noetic](/es/installing_ros1) según el tutorial. 

- __RoboSense toda la serie lidar__

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Comenzando

### Instalar Robosense SDK
- **Paso 1:** Instalar Dependencias Básicas
  ```bash
  sudo apt-get update &&
  sudo apt-get install -y libyaml-cpp-dev libpcap-dev
  ```
- **Paso 2:** Crear Espacio de Trabajo
  ```bash
  mkdir -p catkin_ws/src
  cd catkin_ws/src
  ```
- **Paso 3:** Clonar el rslidar_sdk
  ```bash
  git clone https://github.com/RoboSense-LiDAR/rslidar_sdk.git
  cd rslidar_sdk
  git submodule init
  git submodule update
  ```
- **Paso 4:** Abrir el archivo **CMakeLists.txt** ubicado en **_catkin_ws/src/rslidar_sdk/CMakeLists.txt_** y cambiar la variable **_COMPILE_METHOD_** en la parte superior del archivo a **_CATKIN_**.

  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig3.png" />
  </div>

- **Paso 4:** Eliminar el archivo **package.xml** existente ubicado en el **_directorio catkin_ws/src/rslidar_sdk/_**，Renombrar el archivo **package_ros1.xml** a **package.xml**.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig4.png" />
  </div>

- **Paso 5:** Ingresar los Siguientes Comandos en la Terminal
  ```bash
  cd ~/catkin_ws/src/rslidar_sdk/
  mkdir build && cd build
  cmake .. && make -j4
  cd ~/catkin_ws/
  catkin_make
  ```
### Conectar Hardware
- **Paso 1:** Conectar la fuente de alimentación, Robosense RS32 LiDAR, caja de interfaz, y cable Ethernet al reComputer J4012 como se describe a continuación:
<div align="center">
    <img width={500} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig5.gif" />
</div>

- **Paso 2:** Abrir el archivo config.yaml ubicado en **_/catkin_ws/src/rslidar_sdk/config/config.yaml_** y cambiar el **lidar_type** en la línea **10** a **RS32**. Guardar el archivo y cerrarlo. Asegúrese de completar el modelo LiDAR correcto según su dispositivo.
<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig6.png" />
</div>

### Configurar Dirección IP de reComputer
La dirección IP predeterminada para el Robosense RS32 LiDAR es **_192.168.1.200_**, la dirección IP de la máquina host objetivo es **_192.168.1.102_**, el número de puerto del paquete MSOP es 6699, y el número de puerto del paquete DIFOP es 7788. Después de conectar el hardware, necesita configurar manualmente la dirección IP del reComputer.

- **Paso 1:** Abrir Configuración de Ethernet.
  <div align="center">
      <img width={500} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig7.png" />
  </div>
- **Paso 2:** Seleccionar Configuración Manual en el campo IPv4 e ingresar la dirección IP **192.168.1.102** y máscara **255.255.255.0**. 
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
  Si recibe datos del LiDAR, indica una conexión exitosa.

### Ejecutar Código Lidar
  ```bash
  cd ~/catkin_ws/
  source devel/setup.bash
  roslaunch rslidar_sdk start.launch
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/robosense/fig10.png" />
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