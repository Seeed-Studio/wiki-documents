---
description: Esta wiki proporciona una guía paso a paso para instalar Isaac ROS.
title: Instalar Isaac ROS
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/install_isaacros
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

## Configuración Inicial del Entorno Isaac ROS

### Requisitos de ReComputer

#### Entorno de Hardware

- Jetson Orin/Jetson Xavier

#### Entorno de Software

- JetPack 5.1.2
- Ubuntu 20.04+
- [ROS2 Humble](/es/install_ros2_humble)

## 1. Instalar Dependencias Iniciales

Sigue la imagen oficial de NVIDIA y la guía de flasheo de Seeed Wiki:

```bash
sudo apt-get install python3-pip # Instalar python3
sudo apt-get install nvidia-jetpack # Instalar herramientas de desarrollador
sudo pip3 install jetson-stats # Instalar Jtop para verificar la versión de Jetpack
sudo apt-get install git-lfs # Instalar git-lfs
```

## 2. Instalar Docker-CE

Actualizar fuentes de software:

```bash
sudo apt-get update
```

Instalar dependencias básicas:

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Instalar paquetes esenciales para permitir apt sobre HTTPS
```

Agregar la clave GPG oficial de Docker:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Agregar el repositorio estable de Docker:

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Actualizar la lista de paquetes nuevamente (nuevo repositorio agregado):

```bash
sudo apt-get update
```

Instalar Docker CE (Community Edition):

```bash
sudo apt-get install docker-ce
```

Asegurar que Docker se inicie:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Agregar permisos (agregar usuario al grupo Docker):

```bash
sudo usermod -aG docker $USER
```

Reiniciar sistema o cerrar sesión:

```bash
sudo reboot
```

## 3. Configuración del Paquete Común Isaac ROS

Crear espacio de trabajo y agregar al entorno:

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

Entrar al espacio de trabajo y clonar paquetes:

```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

Descargar la imagen oficial de Isaac Common Docker y entrar a Docker:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

Configuración inicial del entorno completada.

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
