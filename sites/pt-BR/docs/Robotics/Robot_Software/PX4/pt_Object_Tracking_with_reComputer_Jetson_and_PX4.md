---
description: O reComputer Mini, com tecnologia NVIDIA Jetson Orin Nano/Orin NX, é um computador de IA compacto projetado para drones realizarem rastreamento de alvos em tempo real, integrando o controlador de voo PX4, ROS 2 e a câmera 3D Orbbec Gemini 2. Esta configuração envolve a configuração da comunicação ROS2 para o PX4, a instalação do SDK Python do Gemini 2 para capturar dados RGB‑D sincronizados e o uso de um modelo YOLOv11n exportado com TensorRT para detecção otimizada. O pacote ROS2 combina a detecção YOLO com o algoritmo ByteTrack para rastreamento preciso de múltiplos objetos, enquanto os dados de profundidade estimam a distância entre o drone e o alvo, permitindo um rastreamento de drone preciso e em tempo real durante o voo.
title: Rastreamento de Objetos com reComputer Jetson e PX4
keywords:
  - NVIDIA
  - PX4
  - ROS
  - Jetson
  - reComputer
  - rastreamento de objetos
  - medição de distância
  - drone
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /object_tracking_with_reComputer_jetson_and_pX4
sku: 101090144,100071398
last_update:
  date: 8/08/2025
  author: Zibo
createdAt: '2025-08-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/object_tracking_with_reComputer_jetson_and_pX4/
---

## Introdução

<div style={{ textAlign: "justify" }}>
reComputer Mini é um minicomputador de IA com tecnologia do módulo NVIDIA Jetson Orin Nano/Orin NX, oferecendo até 100 TOPS de desempenho em IA.
Graças ao seu design compacto, ele é altamente adequado para ser instalado em drones para lidar com algumas tarefas de IA. Este Wiki mostrará como usar o reComputer e o px4 para obter rastreamento de alvo em tempo real no drone.
</div>

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Pré-requisitos

- série de produtos reComputer
- Controlador de voo PX4
- Jetson Pack 6.2 e [ROS 2 Humble](https://wiki.seeedstudio.com/pt-br/install_ros2_humble/) já instalados
- [Câmera 3D Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## Configurar o ambiente de comunicação PX4 do ROS2

Para implementar o monitoramento de estado do drone no Jetson, primeiro consulte [este wiki](https://wiki.seeedstudio.com/pt-br/control_px4_with_recomputer_jetson/) para configurar o ambiente de comunicação ROS2 para o PX4.

## Configurar o SDK Python do Gemini 2

O Orbbec Gemini 2 é uma câmera 3D RGB‑D de alta precisão que captura dados sincronizados de profundidade e cor para aplicações como robótica, digitalização 3D e visão computacional.

**Passo 1.** Instale as dependências e clone o repositório:

```bash
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
#install pybind11
pip install pybind11
#clone the repository
git clone https://github.com/orbbec/pyorbbecsdk.git
#Install the necessary packages
cd pyorbbecsdk
pip install -r requirements.txt
```

**Passo 2.** Compile e instale o projeto:

```bash
mkdir build && cd build
#Build the project
cmake \
  -Dpybind11_DIR=`pybind11-config --cmakedir` \
  -DPython3_EXECUTABLE=/usr/bin/python3.10 \
  -DPython3_INCLUDE_DIR=/usr/include/python3.10 \
  -DPython3_LIBRARY=/usr/lib/aarch64-linux-gnu/libpython3.10.so \
  ..
make -j4
sudo make install
#apply the python SDK
pip install wheel
python setup.py bdist_wheel
pip install dist/*.whl
#Configure udev_rules
export PYTHONPATH=$PYTHONPATH:$(pwd)/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

## Ler os tópicos publicados pelo px4 no ROS2

Conecte o controlador PX4 à porta serial UART1 do Jetson

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_mini.jpg" />
</div>

Abra um terminal e inicie o Agent no Jetson:

```bash
cd /path/to/Micro-XRCE-DDS-Agent/build
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
```

Usando o seguinte comando e abrindo outro terminal, você pode ver o tópico de status publicado pelo px4:

```bash
ros2 topic list | grep "/fmu/out/"
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
Lendo o conteúdo dos seguintes tópicos, você pode obter as informações básicas de status do drone:

- /fmu/out/failsafe_flags -> Indicadores das condições atuais de failsafe.
- /fmu/out/sensor_combined -> Dados brutos sincronizados de IMU, magnetômetro e barômetro.
- /fmu/out/timesync_status -> Status da sincronização de tempo com fontes externas.
- /fmu/out/vehicle_attitude -> Orientação atual da aeronave como um quaternión.
- /fmu/out/vehicle_control_mode -> Modos atuais de controle e navegação ativos.
- /fmu/out/vehicle_local_position -> Posição e velocidade no referencial local NED.
- /fmu/out/vehicle_odometry -> Dados completos de pose e velocidade em 6 DoF.
- /fmu/out/vehicle_status -> Estado geral da aeronave, modo e prontidão.

:::

## Configurar rapidamente o ambiente de detecção de objetos

**Passo 1.** De acordo com a sua versão do Jetpack, você pode consultar este wiki para [instalar o PyTorch](https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/) e o Torchvision.

**Passo 2.** Instale as dependências e pacotes necessários:

```bash
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
pip install ultralytics
pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
pip install numpy==1.23.5
```

**Passo 3.** Baixe o modelo pré-treinado YOLOv11n:

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```

**Passo 4.** Exporte o modelo engine para usar inferência com tensorrt:

```bash
yolo export model=/path/to/yolo11n.pt format=engine device=0 half=True dynamic=True
```

## Instalar o pacote ROS2 para rastreamento de alvos

```bash
cd /path/to/your/work_space/src

git clone https://github.com/zibochen6/ROS2-package-for-target-tracking.git

cd ..
# build the package
colcon build
```

:::note
Antes de executar o nó de detecção, você precisa mover o arquivo de modelo engine gerado anteriormente para o diretório `/ROS2-package-for-target-tracking/models`. Além disso, você deve clonar os pacotes `px4_msgs` e `px4_ros_com` (consulte [este wiki](https://wiki.seeedstudio.com/pt-br/control_px4_with_recomputer_jetson/#step-2-build-the-px4_msgs-ros-2-package)) no diretório src do seu workspace.

A estrutura do seu diretório src deve ser a seguinte:

```bash
└── src
    ├── detect
    ├── px4_msgs
    └── px4_ros_com
```

:::

Para executar o pacote ROS2 para operação normal de rastreamento de alvos, você precisa abrir um terminal e iniciar o MicroXRCEAgent:

```bash
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600

# Open another terminal and run the detection node
cd /path/to/your/work_space
source install/setup.bash
ros2 run detect detect
```

<div class="video-container">
  <iframe width="853" height="480" src="https://www.youtube.com/embed/YG1XmZL6kpU" title="🚁 Autonomous Drone Target Tracking by reComputer Mini" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
O vídeo acima apresenta um exemplo de obtenção de rastreamento de alvos em um drone. Ele localiza o alvo por meio de detecção de alvos e usa o algoritmo de rastreamento de alvos ByteTrack para rastrear com precisão o alvo específico. Ao mesmo tempo, imagens de profundidade são usadas para estimar a distância entre o drone e o alvo.
</div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
