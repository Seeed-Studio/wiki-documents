---
description: Mostrar a las personas cómo usar Orbbec Gemini 335Lg en la plataforma reComputer Jetson.
title: Primeros Pasos con AC1
keywords:
- Jetson
- reComputer Robotics
- Computer Vision
- Autonomous Driving
- Industrial Robot
- Orbbec
- AI Camera
- Stereo Camera
- Depth Camera
- Visual SLAM
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1.webp 
slug: /es/ac1
last_update:
  date: 2025-09-18
  author: Youjiang
---

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/ac1_1.png" />
</div>

## Introducción

<div style={{ textAlign: "justify" }}>
Active Camera, inventada por RoboSense, es una categoría revolucionaria en visión robótica diseñada para abordar los desafíos de percepción de movilidad y cognición operacional.

El AC1, el primero de esta serie, integra múltiples sensores para entregar fusión a nivel de hardware de información de profundidad, datos de imagen y datos de postura de movimiento, sincronizados en tiempo y espacio. Esto permite a los robots capturar detalles ambientales completos, superando interferencias de la luz solar y superficies altamente reflectantes, y adaptándose a diversos escenarios interiores y exteriores.

En esta wiki, demostraremos el proceso detallado de usar AC1 junto con reComputer Robotics.
</div>

## Prerrequisitos

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
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
  </table>
</div>

## Conexión de Hardware

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/hardware.png" />
</div>


## Primeros Pasos

### Paso 1. Instalar ROS en reComputer Robotics J4012

a. Agregar el siguiente contenido a `~/.bashrc`.
```bash
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export PATH=/usr/src/tensorrt/bin:$PATH
```
:::info
Podemos abrir el archivo en la terminal ingresando el comando `vim ~/bashrc`.
:::

b. Ingresar el siguiente comando en la terminal para instalar ROS2.

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

Para verificar si ROS2 se ha instalado exitosamente, podemos crear dos nuevas terminales en el dispositivo y ejecutar los siguientes comandos respectivamente.

```bash
# terminal1
ros2 run demo_nodes_cpp talker

# terminal2
ros2 run demo_nodes_py listener
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ros/ros_test.png"/>
</div>

¡Si ambas terminales imprimen los mensajes, significa que ROS 2 Humble se ha instalado exitosamente! 🎉

### Paso 2. Instalar ROS SDK para AC1

Ingresar el siguiente comando en la terminal de reComputer.
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

Si todo va bien, podemos visualizar los datos del entorno capturados por AC1 usando Rviz.

```bash
ros2 launch ac_driver start.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ac1/demo.png" />
</div>

## Siguiente Paso

:::note
Muchos algoritmos avanzados pueden ser reproducidos usando AC1 junto con reComputer Jetson. Para más detalles, por favor consulte [aquí](https://robosense-wiki-en.readthedocs.io/en/latest/ac_studio/algorithms.html).
:::

## Recursos

- https://robosense-wiki-en.readthedocs.io/en/latest/
- https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra
- https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
