---
description: Esta wiki proporciona una guía paso a paso para instalar ROS2 humble.
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

# Instalación de ROS2 Humble

## Prerrequisitos
- ReComputer debe tener instalado el entorno Jetpack 5.1.2 y Ubuntu 20.04

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


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>