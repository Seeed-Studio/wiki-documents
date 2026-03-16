---
description: Este wiki fornece um guia abrangente, passo a passo, para implantar o Depth Anything V3 em dispositivos Jetson AGX Orin. Ele aborda a configuração do ambiente, instalação das dependências principais (CUDA, ROS2, TensorRT), conversão do modelo para engines TensorRT e estimação de profundidade em tempo real com integração de câmera USB. O guia destaca a capacidade do Depth Anything V3 de gerar mapas de profundidade de alta qualidade a partir de imagens RGB únicas com sobrecarga computacional mínima, tornando-o ideal para aplicações de robótica, navegação autônoma e percepção 3D em dispositivos de borda.
title: Implantar Depth Anything V3 no Jetson AGX Orin
keywords:
  - Depth Anything V3
  - Jetson AGX Orin
  - Estimação de Profundidade
  - TensorRT
  - ROS2
  - Visão Computacional
  - Robótica
  - Percepção 3D
  - Câmera USB
  - Edge AI
image: https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3_head.webp
slug: /deploy_depth_anything_v3_jetson_agx_orin
last_update:
  date: 2026-01-09T00:00:00.000Z
  author: Zibo
createdAt: '2026-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/deploy_depth_anything_v3_jetson_agx_orin/
---

<div align="center">
  <img width="600" src="https://github.com/ByteDance-Seed/Depth-Anything-3/raw/main/assets/images/demo320-2.gif"/>
</div>

## Introdução

<div style={{ textAlign: "justify" }}>
[Depth Anything V3](https://github.com/ByteDance-Seed/depth-anything-3) é um modelo de estimação de profundidade monocular de última geração que revoluciona a percepção 3D ao gerar mapas de profundidade de alta qualidade a partir de imagens RGB únicas. Diferente dos métodos tradicionais de estimação de profundidade, que exigem hardware especializado ou múltiplas entradas de câmeras, o Depth Anything V3 aproveita técnicas avançadas de deep learning para prever informações de profundidade precisas usando apenas imagens 2D padrão. Isso o torna particularmente valioso para aplicações de Edge AI, em que restrições de hardware e eficiência computacional são considerações críticas. Este wiki irá guiá-lo na implantação do Depth Anything V3 no Jetson AGX Orin com integração ROS2 para aplicações robóticas em tempo real.
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Pré-requisitos

- **[reComputer Mini J501 Carrier Board](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)** (Jetson AGX Orin) com JetPack 6.2
- Câmera USB
- Ambiente [ROS2 Humble](https://wiki.seeedstudio.com/pt-br/install_ros2_humble/) instalado


<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/demo.gif"/>
</div>


## Destaques Técnicos

- **Estimação de Profundidade Monocular de Alta Qualidade**: Depth Anything V3 gera mapas de profundidade precisos a partir de imagens RGB únicas, sem exigir sensores de profundidade especializados ou configurações de câmeras estéreo.

- **Otimizado para Implantação em Borda**: O modelo é projetado especificamente para inferência eficiente em dispositivos de borda como o Jetson AGX Orin, com otimização TensorRT para desempenho máximo.

- **Processamento em Tempo Real**: Capaz de processar imagens de alta resolução em tempo real, tornando-o adequado para navegação autônoma, desvio de obstáculos e tarefas de manipulação robótica.

- **Integração com ROS2**: Fornece suporte nativo ao ROS2 Humble com publicação de mapas de profundidade e nuvens de pontos, permitindo integração transparente em sistemas robóticos.

- **Suporte Flexível de Entrada**: Funciona com várias fontes de entrada, incluindo câmeras USB, tópicos de imagem ROS e fluxos de vídeo pré-gravados.

## Configuração do Ambiente

**Passo 1.** Instalar Dependências

```bash
sudo apt update
sudo apt install -y \
    build-essential \
    cmake \
    git \
    libopencv-dev \
    python3-pip \
    python3-colcon-common-extensions \
    v4l-utils
```

**Passo 2.** Instalar Dependências Python

```bash
pip3 install numpy opencv-python
```

**Passo 3.** Configurar Variáveis de Ambiente do CUDA

```bash
# Add CUDA environment variables to .bashrc
echo '
# CUDA Environment
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc

# Reload shell configuration
source ~/.bashrc

# Verify CUDA installation
nvcc --version
```
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/nvcc.png"/>
</div>


**Passo 4.** Instalar Pacote ROS2 da Câmera USB

```bash
# Install USB camera driver for ROS2
sudo apt install -y ros-humble-usb-cam

# Install additional ROS2 dependencies
sudo apt install -y ros-humble-cv-bridge
sudo apt install -y ros-humble-image-transport
sudo apt install -y ros-humble-image-geometry
sudo apt install -y ros-humble-cv-bridge ros-humble-image-transport ros-humble-rviz2

```

**Passo 5.** Configurar Ambiente ROS2 do Depth Anything V3

```bash
# Clone the repository
git clone https://github.com/zibochen6/ros2-depth-anything-v3-trt.git

# Navigate to the project directory
cd ros2-depth-anything-v3-trt
```

**Passo 6.** Compilar o Pacote ROS2

```bash
# Build the depth_anything_v3 package with Release configuration
colcon build --packages-select depth_anything_v3 --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source the workspace
source install/setup.bash
```

**Passo 7.** Gerar Engines TensorRT

:::note
Antes de gerar o arquivo de engine, você precisa baixar antecipadamente o [modelo `.onnx` do Depth Anything V3](https://huggingface.co/TillBeemelmanns/Depth-Anything-V3-ONNX) e colocá-lo no diretório ros2-depth-anything-v3-trt/onnx.
:::

```bash
# Make the engine generation script executable
chmod +x generate_engines.sh

# Generate TensorRT engines from ONNX models
./generate_engines.sh onnx
```
Por favor, seja paciente enquanto o arquivo `.engine` está sendo gerado. Quando a conversão for concluída, dois arquivos serão criados no diretório `onnx`, conforme mostrado a seguir.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/engine.png"/>
</div>


## Executando Estimação de Profundidade

### Câmera para Estimação de Profundidade

**Passo 1.** Conectar Câmera USB

Conecte sua câmera USB ao dispositivo Jetson AGX Orin. Verifique se a câmera foi detectada:

```bash
# Check if USB camera is detected
ls /dev/video*
```
**Saída Esperada:**

```
/dev/video0  /dev/video1
```

**Passo 2.** Calibração da câmera

O pacote `v4l2_camera` atua como uma ponte entre a API Linux Video4Linux2 (V4L2) e os tópicos ROS 2, publicando mensagens de imagem e informações da câmera que podem ser facilmente usadas em pipelines de calibração.

Instalar Pacote de Calibração de Câmera:

```bash
# Install Camera Calibration Package
sudo apt install ros-humble-camera-calibration

# v4l2_camera is the official ROS2 maintained node that can directly publish USB camera images
sudo apt install ros-${ROS_DISTRO}-v4l2-camera
```

iniciar nó da câmera:

```bash
# Launch camera node
ros2 run v4l2_camera v4l2_camera_node \
  --ros-args \
  -p image_size:=[640,480] \
  -p pixel_format:=YUYV
```

Os tópicos publicados por padrão são:

- `/image_raw` - Imagem bruta da câmera
- `/camera` - Informações da câmera

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/image.png" />
</div>

Execute a calibração da câmera:

```bash
# In another terminal
ros2 run camera_calibration cameracalibrator \
  --size 8x6 \
  --square 0.025 \
  --fisheye-recompute-extrinsicsts \
  --fisheye-fix-skew \
  --ros-args --remap image:=/image_raw --remap camera:=/v4l2_camera
```

:::note
- `--size 8x6` refere-se ao número de cantos internos (8×6 = 48 cantos para uma grade 9×7)
- `--square 0.025` refere-se ao tamanho do quadrado em metros (25mm)
- Mova a câmera para capturar imagens de diferentes ângulos até que o botão `CALIBRATE` acenda

:::

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal2.png" />
</div>

Após a calibração bem-sucedida, você obterá parâmetros da câmera no terminal semelhantes a:

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal3.png" />
</div>

Você pode consultar [este wiki](https://wiki.seeedstudio.com/pt-br/pycuvslam_recomputer_robotics/#Calibração-da-câmera) para calibração da câmera.
Escreva os parâmetros calibrados no arquivo `camera_info_example.yaml`

**Passo 3.** Iniciar Nó de Câmera USB 

Salve os parâmetros de calibração no arquivo `camera_info_example.yaml` para corrigir a distorção olho de peixe da câmera GMSL. Em seguida, execute o seguinte comando para estimação de profundidade em tempo real:
```bash
#Start the script for camera depth estimation
CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1 ./run_camera_depth.sh
```

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/3Khm3OpLg3M" title="Deploy Depth Anything V3 on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### Vídeo para Estimação de Profundidade

**Passo 1.** Preparar Arquivo de Vídeo

Prepare um arquivo de vídeo para estimação de profundidade.

**Passo 2.** Iniciar Nó de Estimação de Profundidade em Vídeo 

```bash
#Start the script for video depth estimation
./run_video_depth.sh
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3.gif"/>
</div>


## Referências

- [Repositório Depth Anything V3 no GitHub](https://github.com/DepthAnything/Depth-Anything-V3)
- [Repositório ROS2 Depth Anything V3 TRT](https://github.com/ika-rwth-aachen/ros2-depth-anything-v3-trt)
- [Documentação do TensorRT](https://developer.nvidia.com/tensorrt)
- [Documentação do ROS2 Humble](https://docs.ros.org/en/humble/)


## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

