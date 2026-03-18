---
description: Mostrar às pessoas como usar Orbbec Gemini 335Lg na plataforma reComputer Jetson.
title: Primeiros Passos com AC1
keywords:
  - Jetson
  - reComputer Robotics
  - Visão Computacional
  - Direção Autônoma
  - Robô Industrial
  - Orbbec
  - Câmera de IA
  - Câmera Estéreo
  - Câmera de Profundidade
  - SLAM Visual
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1.webp
slug: /ac1
last_update:
  date: 2025-09-18T00:00:00.000Z
  author: Youjiang
createdAt: '2025-09-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ac1/
---

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1_1.png" />
</div>

## Introdução

<div style={{ textAlign: "justify" }}>
Active Camera, inventada pela RoboSense, é uma categoria inovadora em visão robótica projetada para lidar com os desafios de percepção de mobilidade e cognição operacional.

A AC1, a primeira desta série, integra múltiplos sensores para fornecer fusão em nível de hardware de informações de profundidade, dados de imagem e dados de postura de movimento, sincronizados no tempo e no espaço. Isso permite que robôs capturem detalhes ambientais abrangentes, superando interferências de luz solar e superfícies altamente reflexivas e se adaptando a diversos cenários internos e externos.

Neste wiki, demonstraremos o processo detalhado de uso da AC1 juntamente com o reComputer Robotics.
</div>

## Pré-requisitos

<div class="table-center">
  <table align="center">
    <tr>
        <th>AC1</th>
        <th>reComputer Robotics J4012</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1_1.png" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension_1.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.robosense.ai/en/IncrementalComponents/AC1" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
  </table>
</div>

## Conexão de Hardware 

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/hardware.png" />
</div>


## Primeiros Passos

### Etapa 1. instalar ROS no reComputer Robotics J4012

a. Adicione o seguinte conteúdo a `~/.bashrc`.
```bash
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export PATH=/usr/src/tensorrt/bin:$PATH
```
:::info
Podemos abrir o arquivo no terminal inserindo o comando `vim ~/bashrc`.
:::

b. Digite o seguinte comando no terminal para instalar o ROS2.

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
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_install.png" />
</div>

Para verificar se o ROS2 foi instalado com sucesso, podemos criar dois novos terminais no dispositivo e executar os seguintes comandos, respectivamente.

```bash
# terminal1
ros2 run demo_nodes_cpp talker

# terminal2
ros2 run demo_nodes_py listener
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_test.png"/>
</div>

Se ambos os terminais imprimirem as mensagens, significa que o ROS 2 Humble foi instalado com sucesso! 🎉

### Etapa 2. Instalar o ROS SDK para AC1

Digite o seguinte comando no terminal do reComputer.
```bash
git clone https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra.git
sudo apt-get install libavformat-dev libavdevice-dev libavcodec-dev
sudo apt install python3-colcon-common-extensions -y
echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
source ~/.bashrc
cd robosense_ac_ros2_sdk_infra/modules/
colcon build
source install/setup.bash
```
<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/install_ac1_sdk.png" />
</div>

Se tudo correr bem, podemos visualizar os dados de ambiente capturados pela AC1 usando o Rviz.

```bash
ros2 launch ac_driver start.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/demo.png" />
</div>

## Próxima Etapa

:::note
Muitos algoritmos avançados podem ser reproduzidos usando a AC1 juntamente com o reComputer Jetson. Para mais detalhes, consulte [aqui](https://robosense-wiki-en.readthedocs.io/en/latest/ac_studio/algorithms.html).
:::

## Recursos

- https://robosense-wiki-en.readthedocs.io/en/latest/
- https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra
- https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
