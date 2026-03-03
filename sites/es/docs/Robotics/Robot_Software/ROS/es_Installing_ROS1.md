---
description: Esta wiki proporciona la instalación de ROS1 en reComputer.
title: Instalar ROS1
keywords:
- ROS1
- ROS installation
- Jetson Nano
- robotics
- Robot Operating System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/installing_ros1
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# Cómo Instalar ROS1 en reComputer

## Introducción
ROS, o Robot Operating System, es un framework de código abierto ampliamente utilizado en el desarrollo e investigación de robótica. Desarrollado inicialmente en la Universidad de Stanford y posteriormente por Willow Garage, ROS1 soporta plataformas de computación heterogéneas, varios lenguajes de programación y diseño modular. Cuenta con mecanismos de comunicación a través de Topics, Services y un Parameter Server, gestión eficiente de paquetes con Catkin, y un rico conjunto de herramientas de desarrollo como rviz, gazebo y rosbag, convirtiéndolo en una herramienta vital para construir e integrar sistemas robóticos complejos.

En esta wiki, aprenderás cómo instalar ROS Noetic en la [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) Series. Sigue los pasos a continuación para configurar tu entorno de desarrollo.

## Prerrequisitos
- __[reComputer J30/40 Series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__.

  :::note
  Asegúrate de que tu dispositivo reComputer esté instalado con _JetPack 5.x_, incluyendo todos los controladores CUDA y relacionados necesarios. Sigue la configuración de conexión de hardware como se describe a continuación.
  :::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig1.gif" />
</div>

## Comenzando

### Instalar ROS1
- **Paso 1:** Abrir Terminal y Actualizar Paquetes del Sistema.
  ```bash
  sudo apt update 
  sudo apt upgrade
  ```
- **Paso 2:** Instalar Herramientas Básicas.
  ```bash
  sudo apt install curl gnupg2 lsb-release
  ```
- **Paso 3:** Agregar clave del repositorio ROS.
  ```bash
  sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
  ```
- **Paso 4:** Agregar repositorio ROS.
  ```bash
  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
  ```
- **Paso 5:** Actualizar lista de paquetes.
  ```bash
  sudo apt update
  ```
- **Paso 6:** Instalar ros-noetic-desktop-full.
  ```bash
  sudo apt install ros-noetic-desktop-full
  sudo apt-get install python3-rosdep
  ```
- **Paso 7:** Inicializar rosdep.
  ```bash
  sudo rosdep init
  rosdep update
  ```
- **Paso 8:** Configurar Variables de Entorno de ROS.
  ```bash
  echo "source /opt/ros/noetic/setup.bash">> ~/.bashrc &&
  source ~/.bashrc
  ```
- **Paso 9:** Instalar Herramientas de Dependencias.
  ```bash
  sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
  ```
- **Paso 10:** Probar la Instalación.
  ```bash
  roscore
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig2.png" />
  </div>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>