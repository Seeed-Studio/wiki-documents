---
description: Esta wiki proporciona la instalación de ROS1 en una reComputer.
title: Instalar ROS1
keywords:
- ROS1
- Instalación de ROS
- Jetson Nano
- Robótica
- Robot Operating System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/installing_ros1
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# ¿Cómo instalar ROS1 en la reComputer?

## Introducción
ROS, o Robot Operating System, es un marco de código abierto ampliamente utilizado en el desarrollo y la investigación de robótica. Desarrollado inicialmente en la Universidad de Stanford y luego por Willow Garage, ROS1 admite plataformas informáticas heterogéneas, varios lenguajes de programación y diseño modular. Cuenta con mecanismos de comunicación a través de temas, servicios y un servidor de parámetros, gestión eficiente de paquetes con Catkin y un amplio conjunto de herramientas de desarrollo como rviz, gazebo y rosbag, lo que la convierte en una herramienta vital para construir e integrar sistemas robóticos complejos.

En esta wiki, aprenderás cómo instalar ROS Noetic en la serie [reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html). Sigue los pasos a continuación para configurar tu entorno de desarrollo.

## Prerequisitos
- __[reComputer J30/40 Series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__.

  :::nota
  Asegúrate de que tu dispositivo reComputer esté instalado con _JetPack 5.x_, incluidos todos los CUDA necesarios y los controladores relacionados. Sigue la configuración de la conexión de hardware como se describe a continuación.
  :::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig1.gif" />
</div>

## Primeros pasos

### Instalar ROS1
- **Paso 1:** Abre la terminal y actualiza los paquetes del sistema.
  ```bash
  sudo apt update 
  sudo apt upgrade
  ```
- **Paso 2:** Instala las herramientas básicas.
  ```bash
  sudo apt install curl gnupg2 lsb-release
  ```
- **Paso 3:** Agrega la clave del repositorio ROS.
  ```bash
  sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
  ```
- **Paso 4:** Agrega el repositorio ROS.
  ```bash
  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
  ```
- **Paso 5:** Actualizar la lista de paquetes.
  ```bash
  sudo apt update
  ```
- **Paso 6:** Instala ros-noetic-desktop-full.
  ```bash
  sudo apt install ros-noetic-desktop-full
  sudo apt-get install python3-rosdep
  ```
- **Paso 7:** Inicializa rosdep.
  ```bash
  sudo rosdep init
  rosdep update
  ```
- **Paso 8:** Configura las variables de entorno de ROS.
  ```bash
  echo "source /opt/ros/noetic/setup.bash">> ~/.bashrc &&
  source ~/.bashrc
  ```
- **Paso 9:** Instalar herramientas de dependencia.
  ```bash
  sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
  ```
- **Paso 10:** Prueba la instalación.
  ```bash
  roscore
  ```
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/install_ros1/fig2.png" />
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