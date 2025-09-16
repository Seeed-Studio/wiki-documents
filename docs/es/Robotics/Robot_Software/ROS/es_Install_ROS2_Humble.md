---
description: Este wiki proporciona una guía paso a paso para instalar ROS2 humble.
title: Instalar ROS2 Humble
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/install_ros2_humble
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Instalación de ROS2 Humble

ROS 2 es un middleware de robótica de código abierto de próxima generación diseñado para construir sistemas robóticos en tiempo real, confiables y escalables. Este wiki demostrará el proceso de instalación detallado de ROS 2 usando Jetson como ejemplo.


<Tabs>

<TabItem value="JP5.1.2" label="JP5.1.2">

## Configurar Localización
```bash
locale  # check for UTF-8
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
locale  # verify settings
```

## Instalar Dependencias
```bash
sudo apt update && sudo apt install gnupg wget
sudo apt install software-properties-common
sudo add-apt-repository universe
```

## Inicializar Fuentes (Elegir Una Región)
```bash
# US Region
echo 'deb https://isaac.download.nvidia.com/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list

# China Region
echo 'deb https://isaac.download.nvidia.cn/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list
```

## Agregar Repositorio APT de ROS 2
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

## Instalar Herramientas de Construcción Adicionales
```bash
sudo apt install ros-dev-tools
```

## Inicializar Entorno ROS
```bash
sudo rosdep init
rosdep update
```

## Configurar Variables de Entorno ROS
```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

En el dispositivo Jetson, abra una terminal e ingrese el siguiente comando:

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

Para verificar si ROS2 se ha instalado correctamente, podemos crear dos nuevas terminales en el dispositivo y ejecutar los siguientes comandos respectivamente.

```bash
# terminal1
ros2 run demo_nodes_cpp talker

# terminal2
ros2 run demo_nodes_py listener
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_test.png"/>
</div>

¡Si ambas terminales imprimen los mensajes, significa que ROS 2 Humble se ha instalado correctamente! 🎉

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>