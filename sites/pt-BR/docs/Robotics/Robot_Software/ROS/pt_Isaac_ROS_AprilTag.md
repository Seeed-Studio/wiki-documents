---
description: Este wiki oferece um guia passo a passo para usar o Isaac ROS AprilTag.
title: Isaac ROS AprilTag
keywords:
  - NVIDIA
  - Isaac ROS
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /isaac_ros_apriltag
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
createdAt: '2025-05-28'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/isaac_ros_apriltag/
---

# Isaac ROS AprilTag  

## Pré-requisitos  
Antes de implantar o AprilTag, certifique-se de que o ambiente básico do Isaac ROS foi configurado com sucesso no seu reComputer [Guia de Instalação](/pt-br/install_isaacros). Se o ROS2 não estiver instalado, consulte [este documento](/pt-br/install_ros2_humble).  

### Tópicos do Pacote Isaac ROS AprilTag  
**Tópicos Assinados:**  

| Tópico ROS     | Interface                  | Descrição                      |  
|-----------------|----------------------------|---------------------------------|  
| image         | sensor_msgs/Image        | Fluxo de entrada da câmera.    |  
| camera_info   | sensor_msgs/CameraInfo   | Fluxo de entrada de intrínsecos da câmera. |  

**Tópicos Publicados:**  

| Tópico ROS        | Tipo                                              | Descrição                                      |  
|--------------------|---------------------------------------------------|--------------------------------------------------|  
| tag_detections   | isaac_ros_apriltag_interfaces/AprilTagDetectionArray | Array de mensagens de detecção de AprilTag.    |  
| tf              | tf2_msgs/TFMessage                             | Poses dos AprilTags detectados (TagFamily:ID) em relação ao frame_id da câmera. |  


## 1. Configuração do Ambiente Isaac ROS AprilTag  

### Criar Workspace (Pule se já tiver feito)  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### Clonar Pacotes e Dados de ROS Bag  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_apriltag.git
cd ${ISAAC_ROS_WS}/src/isaac_ros_apriltag && \
  git lfs pull -X "" -I "resources/rosbags/quickstart.bag"
```

### Entrar no Container Docker  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```


## 2. Testando com Dados de ROS Bag  

### Instalar Pacote AprilTag (Dentro do Docker)  
```bash
sudo apt-get install -y ros-humble-isaac-ros-apriltag
```

### Iniciar Nó AprilTag  
```bash
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### Abrir Novo Terminal (Dentro do Docker)  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

### Reproduzir ROS Bag  
```bash
ros2 bag play --loop src/isaac_ros_apriltag/resources/rosbags/quickstart.bag
```

### Visualizar no RViz2  
Abra o RViz2 em um terminal local e adicione os componentes **Image** e **TF**:  
```bash
ros2 run rviz2 rviz2
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/1.png" />
</div>



## 3. Testando com Câmera USB  
Certifique-se de que o ROS2 está instalado localmente.  

### Criar Workspace para Câmera USB  
```bash
cd ~/
mkdir -p usbcam/src
cd usbcam/src
```

### Clonar e Compilar Pacote `usb_cam`  
```bash
git clone https://github.com/ros-drivers/usb_cam.git
cd ..
colcon build
echo "source ~/usbcam/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### Verificar Formato da Câmera  
Conecte a câmera e verifique o caminho do dispositivo (por exemplo, `/dev/video*`). Teste com:  
```bash
cd ~/usbcam
ros2 run usb_cam usb_cam_node_exe
```

<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/2.png" />
</div>


#### Formatos de Pixel Suportados:  
`rgb8`, `yuyv`, `yuyv2rgb`, `uyvy`, `uyvy2rgb`, `m4202rgb`, `mono8`, `mono16`, `y102mono8`, `raw_mjpeg`  

### Configurar Câmera  
1. Modifique `pixel_format` em `/usbcam/src/usb_cam/config/params_1.yaml`.  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/3.png" />
</div>

2. Ajuste o `frame_id` (padrão: `camera`).  
3. Faça o remapeamento dos nomes dos tópicos em `/usbcam/src/usb_cam/launch/camera_config.py` (linhas 58 e 62) para corresponder aos requisitos do AprilTag (`/image` e `/camera_info`).  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/4.png" />
</div>

### Recompilar e Iniciar Câmera  
```bash
cd ~/usbcam
colcon build
ros2 launch usb_cam camera.launch.py
```

### Executar Nó AprilTag (Dentro do Docker)  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### Visualizar no RViz2  
Defina **Fixed Frame** para o `frame_id` da câmera, adicione um componente **Image** inscrito em `/image` e ative **TF**.  
*Observação: Este teste utiliza um AprilTag de 200 mm × 200 mm.*  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/5.png" />
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>