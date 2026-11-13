---
description: "Rastreie objetos em um reComputer Jetson e envie a posição para o PX4 via ROS 2: entrada de profundidade do Gemini 2, detecção YOLO e saída MAVROS."
title: Rastreamento de Objetos com reComputer Jetson e PX4
keywords:
  - NVIDIA
  - PX4
  - ROS
  - Jetson
  - reComputer
  - object tracking
  - distance measure
  - drone
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /object_tracking_with_reComputer_jetson_and_pX4
sku: 101090144,100071398
last_update:
  date: 8/08/2025
  author: Zibo
createdAt: '2025-08-08'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/object_tracking_with_reComputer_jetson_and_pX4/
---

## Introdução

<div style={{ textAlign: "justify" }}>
reComputer Mini traz um módulo Jetson Orin Nano ou Orin NX e oferece até 100 TOPS em um gabinete pequeno o suficiente para ser montado em uma aeronave. A montagem o conecta ao PX4 via ROS 2, executa detecção YOLO com ByteTrack no fluxo de cor do Gemini 2 e usa o quadro de profundidade para medir a distância entre o alvo rastreado e o drone.
</div>

<div align="center">
  <img alt="Two reComputer Mini units with Wi-Fi antennas, badged NVIDIA Jetson Orin Nano / Orin NX" width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Pré-requisitos

- Série de produtos reComputer
- Controlador de voo PX4
- JetPack 6.2 e [ROS 2 Humble](https://wiki.seeedstudio.com/pt-br/install_ros2_humble/) instalados
- [Câmera 3D Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## Configurar o ambiente de comunicação PX4 do ROS2

Para implementar o monitoramento de estado do drone no Jetson, primeiro consulte [este wiki](https://wiki.seeedstudio.com/pt-br/control_px4_with_recomputer_jetson/) para configurar o ambiente de comunicação ROS2 para o PX4.

## Configurar o SDK Python do Gemini 2

A Orbbec Gemini 2 é uma câmera 3D RGB-D de alta precisão que captura dados sincronizados de profundidade e cor para aplicações como robótica, digitalização 3D e visão computacional.

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
    <img alt="PX4 controller wired to the UART1 serial port on the Jetson for the Micro-XRCE-DDS link" width={1000}
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
    <img alt="ros2 topic list filtered on /fmu/out/ showing the PX4 status topics" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
Lendo o conteúdo dos seguintes tópicos, você pode obter as informações básicas de status do drone:

- /fmu/out/failsafe_flags -> Indicadores das condições atuais de failsafe.
- /fmu/out/sensor_combined -> Dados brutos sincronizados de IMU, magnetômetro e barômetro.
- /fmu/out/timesync_status -> Status da sincronização de tempo com fontes externas.
- /fmu/out/vehicle_attitude -> Orientação atual da aeronave como um quaternio.
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
O vídeo acima apresenta um exemplo de como alcançar o rastreamento de alvos em um drone. Ele localiza o alvo por meio de detecção de alvos e usa o algoritmo de rastreamento ByteTrack para rastrear com precisão o alvo específico. Ao mesmo tempo, imagens de profundidade são usadas para estimar a distância entre o drone e o alvo.
</div>

## FAQ

**O que o Jetson faz e o que o PX4 faz?**
O Jetson executa a detecção YOLO com ByteTrack e lê a distância a partir do quadro de profundidade do Gemini 2, depois envia a posição do alvo para o PX4 via ROS 2. O PX4 continua pilotando a aeronave; esta montagem não substitui o controlador de voo.

**Qual porta serial carrega o link ROS 2 para o PX4?**
`/dev/ttyTHS1` a 921600 baud, através do Micro-XRCE-DDS Agent: `./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600`. Execute o agent primeiro e depois inicie o nó de detecção em um segundo terminal.

**Como sei que o link está ativo?**
`ros2 topic list | grep "/fmu/out/"` deve listar `vehicle_status`, `vehicle_local_position`, `vehicle_attitude` e o restante dos tópicos de status do PX4. Nenhum tópico significa que o agent ou a fiação está incorreta, não o detector.

**Qual versão do JetPack esta montagem usa?**
JetPack 6.2 com ROS 2 Humble, além da Orbbec Gemini 2 e das regras udev de `./scripts/install_udev_rules.sh`. O nó de detecção é compilado em um workspace ROS 2 e precisa que o `PYTHONPATH` seja estendido para `install/lib/`.

## Recursos Relacionados

- [Câmera 3D Orbbec Gemini 2 no ROS 2](/pt-br/orbbec_gemini2/)
- [Combine a Gemini 2 com YOLOv11 para medição de distância](/pt-br/yolov11_with_depth_camera/)
- [Instalar ROS 2 Humble no reComputer](/pt-br/install_ros2_humble/)
- [Página do produto Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

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
