---
description: Este wiki proporciona una guía completa paso a paso para desplegar NVBlox con cámara RGB-D Orbbec en dispositivos Jetson AGX Orin. Cubre la configuración del entorno, instalación de dependencias, integración con Isaac ROS y demostraciones de mapeo 3D en tiempo real para aplicaciones robóticas.
title: Desplegar NVBlox con Cámara Orbbec en Jetson AGX Orin
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
  date: 2026-01-20T00:00:00.000Z
  author: Dayu
createdAt: '2026-01-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/deploy_nvblox_jetson_agx_orin/
---

<div align="center">
    <img width={700}
     src="https://media.githubusercontent.com/media/NVIDIA-ISAAC-ROS/.github/release-4.0/resources/isaac_ros_docs/repositories_and_packages/isaac_ros_nvblox/isaac_sim_nvblox_humans.gif"/>
</div>

## Introducción

<div style={{ textAlign: "justify" }}>
[Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox) es un framework de mapeo 3D de alto rendimiento acelerado por GPU desarrollado por NVIDIA para percepción robótica en tiempo real. A diferencia de los modelos de estimación de profundidad monocular, NVBlox consume entrada de profundidad real de cámaras RGB-D o cámaras estéreo para construir representaciones 3D precisas de la escena.

Construye mapas densos TSDF (Campo de Distancia Firmado Truncado) y ESDF (Campo de Distancia Firmado Euclidiano) en tiempo real, permitiendo reconstrucción 3D de alta calidad, navegación consciente de obstáculos y verificación de colisiones. NVBlox también puede generar mallas, mapas de costos basados en vóxeles y representaciones de ocupación 3D adecuadas para robots móviles autónomos (AMR).

Esto lo hace particularmente valioso para aplicaciones de Edge AI donde las limitaciones de hardware y la eficiencia computacional son consideraciones críticas. Este wiki demuestra cómo desplegar Isaac ROS NVBlox en **Jetson AGX Orin** con integración de **ROS 2**, usando una **cámara RGB-D Orbbec** y una plataforma de robot móvil para lograr un pipeline completo de percepción y navegación en el dispositivo. 🚀

</div>

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>

## Prerrequisitos

- **[reComputer J50](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)** (Jetson AGX Orin) con JetPack 6.2
- Cámara RGB-D Orbbec 📷
- Chasis de robot móvil (opcional) 🤖
- Entorno [ROS2 Humble](https://wiki.seeedstudio.com/es/install_ros2_humble/) instalado
- Instalación del SDK ROS2 de Orbbec requerida
- Instalación de Isaac ROS requerida

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/page-nvblox.jpg"/>
</div>

## Características Técnicas Destacadas

- **Mapeo 3D en Tiempo Real**: NVBlox genera mapas densos TSDF y ESDF en tiempo real usando aceleración GPU, permitiendo reconstrucción 3D de alta calidad para aplicaciones robóticas.

- **Integración de Cámara RGB-D**: Aprovecha información de profundidad real de cámaras RGB-D Orbbec para crear representaciones 3D precisas sin depender de estimación de profundidad monocular.

- **Optimizado para Despliegue en el Borde**: Específicamente diseñado para inferencia eficiente en dispositivos de borde como Jetson AGX Orin, con optimización CUDA para máximo rendimiento.

- **Salidas Listas para Navegación**: Genera mallas, mapas de costos basados en vóxeles y grillas de ocupación 3D adecuadas para navegación autónoma y evitación de colisiones.

- **Soporte Nativo ROS2**: Proporciona integración perfecta con ROS2 Humble con tipos de mensajes robóticos estándar para fácil integración en sistemas robóticos existentes.

## Configuración del Entorno

### Instalar Dependencias Básicas

Instala las siguientes dependencias en tu terminal:

```bash
sudo apt update
sudo apt-get install python3-pip # Install Python3
sudo apt-get install nvidia-jetpack # Install developer tools
sudo pip3 install jetson-stats # Install Jtop to check JetPack version
sudo apt-get install git-lfs # Install Git LFS
```

### Instalar Docker CE

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
    software-properties-common # Install essential packages to allow apt over HTTPS
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

Actualizar lista de paquetes nuevamente (nuevo repositorio agregado):

```bash
sudo apt-get update
```

Instalar Docker CE (Community Edition):

```bash
sudo apt-get install docker-ce
```

Asegurar que Docker inicie:

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

### Instalar Isaac ROS 3.2

Crear espacio de trabajo y agregar al entorno:

```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

Entrar al espacio de trabajo y clonar paquetes:

```bash
cd ${ISAAC_ROS_WS}/src
git clone -b release-3.2 https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
```

Descargar imagen oficial Isaac Common Docker y entrar a Docker:

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

Ejecutar `./scripts/run_dev.sh` instalará automáticamente Isaac ROS e iniciará el contenedor.

:::tip
Instalar Isaac ROS requiere iniciar sesión en NVIDIA NGC en el terminal e ingresar tu API Key generada por la cuenta NGC 🔑
:::

### Instalar Orbbec SDK ROS2

Usar cámaras RGB-D Orbbec requiere instalar el controlador SDK. Esta guía usa el método Build from Source.

Instalar dependencias:

```bash
sudo apt install libgflags-dev nlohmann-json3-dev \
ros-$ROS_DISTRO-image-transport ros-${ROS_DISTRO}-image-transport-plugins ros-${ROS_DISTRO}-compressed-image-transport \
ros-$ROS_DISTRO-image-publisher ros-$ROS_DISTRO-camera-info-manager \
ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs ros-$ROS_DISTRO-statistics-msgs ros-$ROS_DISTRO-xacro \
ros-$ROS_DISTRO-backward-ros libdw-dev libssl-dev mesa-utils libgl1 libgoogle-glog-dev
```

Crear un espacio de trabajo colcon:

```bash
mkdir -p ~/ros2_ws/src

cd ~/ros2_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Entrar al directorio de trabajo y compilar:

```bash
cd ~/ros2_ws
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

Para permitir que las cámaras Orbbec sean reconocidas correctamente en Linux, instala las reglas udev.

Entrar al directorio de trabajo del código fuente y ejecutar el script:

```bash
cd ~/ros2_ws/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

:::note
Si este script no se ejecuta, abrir el dispositivo fallará debido a problemas de permisos. Necesitarías ejecutar la muestra con sudo (privilegios de administrador). ⚠️
:::

## Desplegar NVBlox

### Construir NVBlox

Obtener el código fuente de NVBlox adaptado para cámara Orbbec y copiarlo al directorio de trabajo:

```bash
git clone https://github.com/jjjadand/isaac-NVblox-Orbbec.git
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nvblox/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/src/isaac_ros_nitros/ ${ISAAC_ROS_WS}/src/
cp -r isaac-NVblox-Orbbec/build/ ${ISAAC_ROS_WS}/
```

Entrar al espacio de trabajo e iniciar el contenedor Docker de Isaac ROS:

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

Puedes intentar ejecutar el siguiente comando en el terminal para solucionarlo:

```bash
sudo nvidia-ctk cdi generate --mode=csv --output=/etc/cdi/nvidia.yaml
```

Después de iniciar exitosamente el contenedor, deberías ver algo como esto:
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/isaac-ros.jpg"/>
</div>

Instalar dependencias adicionales:

```bash
sudo apt update
sudo apt-get install -y ros-humble-magic-enum
sudo apt-get install -y ros-humble-foxglove-msgs
```

Agregar variables de entorno CUDA a `.bashrc`:

```bash
echo '
CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc
```

Crear enlaces simbólicos:

```bash
sudo ln -sf /opt/ros/humble/include/magic_enum.hpp /usr/include/magic_enum.hpp

sudo mkdir -p /opt/ros/humble/include/foxglove_msgs
sudo ln -sfn /opt/ros/humble/include/foxglove_msgs/foxglove_msgs/msg /opt/ros/humble/include/foxglove_msgs/msg
```

Construir e inicializar el espacio de trabajo en `/workspaces/isaac_ros-dev`:

```bash
colcon build --symlink-install --cmake-args -DBUILD_TESTING=OFF
source install/setup.bash
```

Después de que la compilación esté completa, deberías ver resultados como este:
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/NVblox-complied.jpg"/>
</div>

### Lanzar NVBlox

Después de conectar la cámara Orbbec al Jetson vía cable de datos, primero inicia el script ROS2 de Orbbec en el entorno local:

```bash
cd ~/ros2_ws/src
source install/setup.bash

ros2 launch orbbec_camera <camera_name>.launch.py

# Example: ros2 launch orbbec_camera gemini2.launch.py
```

Aquí hay algunos parámetros `<camera_name>` soportados:

- gemini210
- gemini2
- gemini2L
- gemini_330_gmsl
- gemini_330_series

:::warning
Ten en cuenta que NO debes iniciar el script de Orbbec dentro del contenedor Docker. Asegúrate de haber instalado el controlador de Orbbec siguiendo el tutorial anterior. ⚠️
:::

El contenedor Isaac ROS se conecta con ROS2 publicado localmente por defecto. En el contenedor Docker, ingresa:

```bash
ros2 topic list
```

Normalmente, deberías ver los siguientes tópicos de datos publicados por la cámara Orbbec en el contenedor Docker:

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

Asegúrate de poder leer los tópicos de datos de la cámara Orbbec. Luego inicia el script de ejemplo NVBlox en el contenedor Isaac ROS:

```bash
cd ~/workspaces/isaac_ros-dev
source install/setup.bash

ros2 launch nvblox_examples_bringup orbbec_example.launch.py
```

Puedes ver la salida de NVBlox de cuadrículas de ocupación 3D y mallas en RViz:
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/other/rviz.jpg"/>
</div>

RViz se puede configurar como se muestra a continuación. Habilita los resultados de visualización que desees y selecciona los nombres de tópicos disponibles:
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/other/rviz-lan.jpg"/>
</div>

Finalmente, montando el AGX Orin y la cámara Orbbec en un AGV móvil, puedes lograr el efecto mostrado en el video: 🎥

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/_TKNGejfGIo" title="Deploy NVBlox on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Esto se puede usar para detección de obstáculos y construcción de mapas de malla 3D de escenas para robots móviles. 🤖

## Referencias

- [Repositorio GitHub de Isaac ROS Common](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common)
- [Repositorio GitHub de Isaac ROS NVBlox](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_nvblox.git)
- [Repositorio GitHub de Isaac NVBlox Orbbec](https://github.com/jjjadand/isaac-NVblox-Orbbec#)
- [Documentación de ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentación de Orbbec SDK ROS2](https://github.com/orbbec/OrbbecSDK_ROS2)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
