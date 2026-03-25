---
description: Este wiki fornece um guia passo a passo para usar o Isaac ROS Visual SLAM.
title: Isaac ROS Visual SLAM
keywords:
  - NVIDIA
  - Isaac ROS
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /isaac_ros_visual_slam
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
createdAt: '2025-05-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/isaac_ros_visual_slam/
---


# Implantação do Isaac ROS Visual SLAM  

## Pré-requisitos  
Antes de implantar o Visual SLAM, verifique se o ambiente Isaac ROS está configurado corretamente no seu ReComputer [Guia de Instalação](/pt-br/install_isaacros). Se o ROS2 não estiver instalado, consulte [este documento](/pt-br/install_ros2_humble).  


## 1. Configuração do Ambiente  

### Criar Workspace (Pule se já existir)  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### Clonar Pacote do Visual SLAM  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam.git
```

### Entrar no Contêiner Docker  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

## 2. Teste com Dados de ROS Bag  

### Instalar Pacote do Visual SLAM (Dentro do Docker)  
```bash
sudo apt-get install -y ros-humble-isaac-ros-visual-slam
```

### Iniciar Nó do Visual SLAM  
```bash
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py
```

### Abrir RViz2 para Visualização  
Em um **terminal local** (fora do Docker):  
```bash
cd ${ISAAC_ROS_WS}/src
rviz2 -d isaac_ros_visual_slam/isaac_ros_visual_slam/rviz/default.cfg.rviz
```

### Reproduzir ROS Bag da Câmera Estéreo  
Em um **terceiro terminal**:  
```bash
cd ${ISAAC_ROS_WS}/src
ros2 bag play isaac_ros_visual_slam/isaac_ros_visual_slam/test/test_cases/rosbags/small_pol_test/
```

### Saída Esperada:  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/6.png" />
</div>


### Observações:  
1. Certifique-se de que o ROS bag contenha **imagens da câmera estéreo** (quadros esquerdo/direito).  
2. Ajuste a configuração do RViz2 conforme necessário (por exemplo, visualização do mapa, configurações de trajetória).  

Para solução de problemas, consulte a [documentação oficial](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam).  

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>