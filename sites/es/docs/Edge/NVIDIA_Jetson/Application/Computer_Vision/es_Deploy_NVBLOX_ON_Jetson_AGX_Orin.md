---
description: Este wiki proporciona una guía completa y paso a paso para desplegar NVBlox con la cámara Orbbec RGB-D en dispositivos Jetson AGX Orin. Cubre la configuración del entorno, instalación de dependencias, integración con Isaac ROS y demostraciones de mapeo 3D en tiempo real para aplicaciones robóticas.
title: Desplegar NVBlox con cámara Orbbec en Jetson AGX Orin
keywords:
  - NVBlox
  - Jetson AGX Orin
  - Isaac ROS
  - ROS2
  - Computer Vision
  - Robotics
  - 3D Perception
  - RGB-D Camera
  - Edge AI
  - TSDF
  - ESDF
  - 3D Mapping
image: https://files.seeedstudio.com/wiki/other/page-nvblox.jpg
slug: /deploy_nvblox_jetson_agx_orin
sku: 101090144,100020039
last_update:
  date: 2026-01-20
  author: Dayu
createdAt: '2026-01-22'
updatedAt: '2026-03-17'
url: https://wiki.seeedstudio.com/es/deploy_nvblox_jetson_agx_orin/
---

<div align="center">
    <img width={700}
     src="https://media.githubusercontent.com/media/NVIDIA-ISAAC-ROS/.github/release-4.0/resources/isaac_ros_docs/repositories_and_packages/isaac_ros_nvblox/isaac_sim_nvblox_humans.gif"/>
</div>

## Introducción

<div style={{ textAlign: "justify" }}>
[Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox) es un framework de mapeo 3D de alto rendimiento acelerado por GPU desarrollado por NVIDIA para percepción robótica en tiempo real. A diferencia de los modelos de estimación de profundidad monocular, NVBlox consume entrada de profundidad real de cámaras RGB-D o cámaras estéreo para construir representaciones precisas de escenas 3D.

Genera mapas densos TSDF (Truncated Signed Distance Field) y ESDF (Euclidean Signed Distance Field) en tiempo real, lo que permite reconstrucción 3D de alta calidad, navegación consciente de obstáculos y verificación de colisiones. NVBlox también puede generar mallas, mapas de coste basados en vóxeles y representaciones de ocupación 3D adecuadas para robots móviles autónomos (AMR).

Esto lo hace especialmente valioso para aplicaciones de Edge AI donde las limitaciones de hardware y la eficiencia computacional son consideraciones críticas. Este wiki demuestra cómo desplegar Isaac ROS NVBlox en **Jetson AGX Orin** con integración de **ROS 2**, utilizando una **cámara Orbbec RGB-D** y una plataforma de robot móvil para lograr una canalización completa de percepción y navegación en el propio dispositivo. 🚀

</div>

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱</font></span></strong>
    </a>
</div>

## Requisitos previos

- **[reComputer J50](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html)** (Jetson AGX Orin) con JetPack 6.2.1
- Cámara Orbbec RGB-D 📷
- Chasis de robot móvil (opcional) 🤖
- Entorno [ROS2 Humble](https://wiki.seeedstudio.com/es/install_ros2_humble/) instalado
- Se requiere instalación del SDK de Orbbec ROS2
- Se requiere instalación de Isaac ROS

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/page-nvblox.jpg"/>
</div>

## Aspectos técnicos destacados

- **Mapeo 3D en tiempo real**: NVBlox genera mapas TSDF y ESDF densos en tiempo real usando aceleración por GPU, lo que permite reconstrucción de escenas 3D de alta calidad para aplicaciones robóticas.

- **Integración con cámara RGB-D**: Aprovecha información de profundidad real de cámaras Orbbec RGB-D para crear representaciones 3D precisas sin depender de estimación de profundidad monocular.

- **Optimizado para despliegue en el borde**: Diseñado específicamente para inferencia eficiente en dispositivos de borde como Jetson AGX Orin, con optimización CUDA para máximo rendimiento.

- **Salidas listas para navegación**: Genera mallas, mapas de coste basados en vóxeles y rejillas de ocupación 3D adecuadas para navegación autónoma y evitación de colisiones.

- **Compatibilidad nativa con ROS2**: Proporciona integración fluida con ROS2 Humble con tipos de mensajes robóticos estándar para una fácil integración en sistemas robóticos existentes.

## Configuración del entorno

### Instalar dependencias básicas

Instala las siguientes dependencias en tu terminal:

```bash
sudo apt update
sudo apt-get install python3-pip # Install Python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check JetPack version
sudo apt-get install git-lfs # Install Git LFS
```

### Instalar Docker CE

Actualiza las fuentes de software:

```bash
sudo apt-get update
```

Instala dependencias básicas:

```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common # Install essential packages to allow apt over HTTPS
```

Añade la clave GPG oficial de Docker:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Añade el repositorio estable de Docker:

```bash
sudo add-apt-repository \
   "deb [arch=arm64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

Actualiza de nuevo la lista de paquetes (se añadió un nuevo repositorio):

```bash
sudo apt-get update
```

Instala Docker CE (Community Edition):

```bash
sudo apt-get install docker-ce
```

Asegúrate de que Docker se inicie:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Añadir permisos (añadir usuario al grupo Docker):

```bash
sudo usermod -aG docker $USER
```

Reinicia el sistema o cierra sesión:

```bash
sudo reboot
```

### Instalar Isaac ROS 3.2

Crea un espacio de trabajo y añádelo al entorno:

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

Entra en el espacio de trabajo y clona los paquetes:

```bash
cd ${ISAAC_ROS_WS}/src
git clone -b release-3.2 https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

Descarga la imagen oficial Docker de Isaac Common y entra en Docker:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

Ejecutar `./scripts/run_dev.sh` instalará automáticamente Isaac ROS e iniciará el contenedor.

:::tip
Instalar Isaac ROS requiere iniciar sesión en NVIDIA NGC en la terminal e introducir la API Key 🔑 generada por tu cuenta NGC.
:::

### Instalar Orbbec SDK ROS2

El uso de cámaras Orbbec RGB-D requiere instalar el controlador del SDK. Esta guía utiliza el método de compilación desde el código fuente (Build from Source).

Instala las dependencias:

```bash
sudo apt install libgflags-dev nlohmann-json3-dev \
ros-$ROS_DISTRO-image-transport ros-${ROS_DISTRO}-image-transport-plugins ros-${ROS_DISTRO}-compressed-image-transport \
ros-$ROS_DISTRO-image-publisher ros-$ROS_DISTRO-camera-info-manager \
ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs ros-$ROS_DISTRO-statistics-msgs ros-$ROS_DISTRO-xacro \
ros-$ROS_DISTRO-backward-ros libdw-dev libssl-dev mesa-utils libgl1 libgoogle-glog-dev
```

Crea un espacio de trabajo colcon:

```bash
mkdir -p ~/ros2_ws/src

cd ~/ros2_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Entra en el directorio de trabajo y compila:

```bash
cd ~/ros2_ws
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

Para permitir que las cámaras Orbbec se reconozcan correctamente en Linux, instala las reglas udev.

Entra en el directorio de trabajo del código fuente y ejecuta el script:

```bash
cd ~/ros2_ws/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

:::note
Si este script no se ejecuta, la apertura del dispositivo fallará debido a problemas de permisos. Tendrías que ejecutar el ejemplo con sudo (privilegios de administrador). ⚠️
:::

## Desplegar NVBlox

### Compilar NVBlox

Obtén el código fuente de NVBlox adaptado a la cámara Orbbec y cópialo al directorio de trabajo:

```bash
git clone https://github.com/jjjadand/isaac-NVblox-Orbbec.git
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nvblox/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nitros/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/build/ ${ISAAC_ROS_WS}/
```

Entra en el espacio de trabajo e inicia el contenedor Docker de Isaac ROS:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

(Opcional) Si encuentras un error similar al siguiente:

```bash
Finished pulling pre-built base image: nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c
Nothing to build, retagged nvcr.io/nvidia/isaac/ros:aarch64-ros2_humble_4c0c55dddd2bbcc3e8d5f9753bee634c as isaac_ros_dev-aarch64
Running isaac_ros_dev-aarch64-container
docker: Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: could not apply required modification to OCI specification: error modifying OCI spec: failed to inject CDI devices: unresolvable CDI devices nvidia.com/gpu=all
```

Puedes intentar ejecutar el siguiente comando en la terminal para solucionarlo:

```bash
sudo nvidia-ctk cdi generate --mode=csv --output=/etc/cdi/nvidia.yaml
```

Después de iniciar correctamente el contenedor, deberías ver algo como esto:
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/isaac-ros.jpg"/>
</div>

Instala dependencias adicionales:

```bash
sudo apt update
sudo apt-get install -y ros-humble-magic-enum
sudo apt-get install -y ros-humble-foxglove-msgs
```

Añade variables de entorno CUDA a `.bashrc`:

```bash
echo '
CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc
```

Crea enlaces simbólicos:

```bash
sudo ln -sf /opt/ros/humble/include/magic_enum.hpp /usr/include/magic_enum.hpp

sudo mkdir -p /opt/ros/humble/include/foxglove_msgs
sudo ln -sfn /opt/ros/humble/include/foxglove_msgs/foxglove_msgs/msg /opt/ros/humble/include/foxglove_msgs/msg
```

Compila e inicializa el espacio de trabajo en `/workspaces/isaac_ros-dev`:

```bash
colcon build --symlink-install --cmake-args -DBUILD_TESTING=OFF
source install/setup.bash
```

Después de que la compilación se complete, deberías ver resultados como estos:
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/NVblox-complied.jpg"/>
</div>

### Lanzar NVBlox

Después de conectar la cámara Orbbec al Jetson mediante un cable de datos, primero inicia el script Orbbec ROS2 en el entorno local:

```bash
cd ~/ros2_ws/src
source install/setup.bash

ros2 launch orbbec_camera <camera_name>.launch.py

# Example: ros2 launch orbbec_camera gemini2.launch.py
```

Aquí hay algunos parámetros `<camera_name>` compatibles:

- gemini210
- gemini2
- gemini2L
- gemini_330_gmsl
- gemini_330_series

:::warning
Ten en cuenta que NO debes iniciar el script de Orbbec dentro del contenedor Docker. Asegúrate de haber instalado el controlador de Orbbec siguiendo el tutorial anterior. ⚠️
:::

El contenedor Isaac ROS se conecta por defecto con ROS2 publicado localmente. En el contenedor Docker, introduce:

```bash
ros2 topic list
```

Normalmente, deberías ver los siguientes temas de datos publicados por la cámara Orbbec en el contenedor Docker:

```yaml
/camera/accel/imu_info
/camera/color/camera_info
/camera/color/image_raw
/camera/depth/camera_info
/camera/depth/image_raw
/camera/depth/points
/camera/depth_filter_status
/camera/device_status
/camera/gyro/imu_info
/camera/gyro_accel/sample
/camera/ir/camera_info
/camera/ir/image_raw
```

Asegúrate de poder leer los temas de datos de la cámara Orbbec. Luego inicia el script de ejemplo de NVBlox en el contenedor Isaac ROS:

```bash
cd ~/workspaces/isaac_ros-dev
source install/setup.bash

ros2 launch nvblox_examples_bringup orbbec_example.launch.py
```

Puedes ver la salida de NVBlox de rejillas de ocupación 3D y mallas en RViz:
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/other/rviz.jpg"/>
</div>

RViz se puede configurar como se muestra a continuación. Habilita los resultados de visualización que desees y selecciona los nombres de temas disponibles:
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/other/rviz-lan.jpg"/>
</div>

Finalmente, montando el AGX Orin y la cámara Orbbec en un AGV móvil, puedes lograr el efecto que se muestra en el video: 🎥

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/_TKNGejfGIo" title="Deploy NVBlox on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Esto se puede utilizar para la detección de obstáculos y la construcción de mapas de malla 3D de escenas para robots móviles. 🤖

## Referencias

- [Repositorio de GitHub Isaac ROS Common](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common)
- [Repositorio de GitHub Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox.git)
- [Repositorio de GitHub Isaac NVBlox Orbbec](https://github.com/jjjadand/isaac-NVblox-Orbbec#)
- [Documentación de ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentación de Orbbec SDK ROS2](https://github.com/orbbec/OrbbecSDK_ROS2)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
