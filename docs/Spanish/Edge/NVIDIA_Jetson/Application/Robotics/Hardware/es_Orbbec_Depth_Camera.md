---
description: Esta wiki proporciona una guía paso a paso para utilizar las cámaras de profundidad Orbbec en una reComputer de ROS.
title: Cámara de profundidad Orbbec con ROS
keywords:
- Jetson Nano
- reComputer
- Orbbec
- Cámara de profundidad
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/orbbec_depth_camera_on_ros
last_update:
  date: 10/10/2024
  author: Lidayu
---
# Cómo utilizar las cámaras de profundidad Orbbec en una reComputer con ROS

## Introducción
Este tutorial proporciona una guía paso a paso sobre cómo utilizar la cámara de profundidad Orbbec a través de ROS en dispositivos de la serie [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html). Tomaremos Orbbec Gemini 2 como ejemplo, obtendremos datos temáticos de imágenes de profundidad y nubes de puntos, y los visualizaremos en rviz.

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Prerequisitos
- __[reComputer J30/40 series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__:  Hemos desarrollado esta wiki usando el [sistema operativo JetPack 5.x](/reComputer_J4012_Flash_Jetpack) y [ROS Noetic environment](/installing_ros1).

- Instala las dependencias (ten cuidado con tu distribución ROS):
  
  ```bash
  # Assuming you have sourced the ROS environment, same below
  sudo apt install libgflags-dev ros-$ROS_DISTRO-image-geometry ros-$ROS_DISTRO-camera-info-manager \
  ros-$ROS_DISTRO-image-transport ros-$ROS_DISTRO-image-publisher libgoogle-glog-dev libusb-1.0-0-dev libeigen3-dev \
  ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs libdw-dev
  ```


## Primeros pasos
### Conectar las cámaras
Conecta la cámara de profundidad Orbbec a la Jetson mediante de un cable USB Tipo-C y asegúrate de que [ROS ya esté instalado](/installing_ros1) en tu sistema.

<div align="center">
      <img width={700} 
      src="https://i.imgur.com/0gAng8s.jpg" />
  </div>

### Instalación
**Si clonaste OBcamera_ws de nuestro proyecto, no necesitas clonarlo desde el siguiente enlace.**

- **Paso 1:**Crea un espacio de trabajo ROS (**si no tienes uno**):

```bash
mkdir -p OBcamera_ws/src
```

- **Paso 2:**Obtén el código fuente:

```bash
cd OBcamera_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS1.git
```

- **Paso 3:**Construye el paquete:

```bash
cd OBcamera_ws
catkin_make
```

- **Paso 4:**Instalar reglas de udev:

```bash
source ./devel/setup.bash
roscd orbbec_camera
sudo bash ./scripts/install_udev_rules.sh
```

### Inicializa la cámara

Para el modelo de cámara **Gemini2**, ingresa lo siguiente en la terminal 1:

```bash
source ./devel/setup.bash
roslaunch orbbec_camera gemini2.launch
```

En la terminal 2:

```bash
source ./devel/setup.bash
rviz
```
Puedes ingresar el comando `rostpoic list` en la tercera terminal para ver los temas publicados por Orbbec Camera. Los temas disponibles son los siguientes:

- `/camera/color/camera_info`: The color camera info.
- `/camera/color/image_raw`: The color stream image.
- `/camera/depth/camera_info`: The depth camera info.
- `/camera/depth/image_raw`: The depth stream image.
- `/camera/depth/points`: The point cloud, only available when `enable_point_cloud` is `true`.
- `/camera/depth_registered/points`: The colored point cloud, only available when `enable_colored_point_cloud` is `true`.
- `/camera/left_ir/camera_info`: The left IR camera info.
- `/camera/left_ir/image_raw`: The left IR stream image.
- `/camera/right_ir/camera_info`: The right IR camera info.
- `/camera/right_ir/image_raw`: The right IR stream image.
- `/diagnostics`: The diagnostic information of the camera. Currently, the diagnostic information only includes the temperature of the camera.


Inicia RVIZ y agrega un tema mediante el botón en la esquina inferior izquierda de la interfaz RVIZ, puedes obtener una representación similar a la siguiente:
<div align="center">
      <img width={700} 
      src="https://i.imgur.com/7jmfnZ4.png" />
  </div>


Si el modelo de cámara que estás utilizando es diferente, busca el nombre del archivo de inicio correspondiente en la siguiente tabla y reemplaza `gemini2.launch` en la terminal 1 en consecuencia.

| Serial del producto                 | Archivo a utilizar       |
| ----------------------------------- | ------------------------ |
| astra+                              | astra_adv.launch         |
| astra mini/astra mini pro/astra pro | astra.launch             |
| astra mini s pro                    | astra.launch             |
| astra2                              | astra2.launch            |
| astra stereo s                      | stereo_s_u3.launch       |
| astra pro2                          | astra_pro2.launch        |
| dabai                               | dabai.launch             |
| dabai d1                            | dabai_d1.launch          |
| dabai dcw                           | dabai_dcw.launch         |
| dabai dw                            | dabai_dw.launch          |
| dabai pro                           | dabai_pro.launch         |
| deeya                               | deeya.launch             |
| femto / femto w                     | femto.launch             |
| femto mega                          | femto_mega.launch        |
| femto bolt                          | femto_bolt.launch        |
| gemini                              | gemini.launch            |
| gemini2 / dabai DCL                 | gemini2.launch           |
| gemini2L                            | gemini2L.launch          |
| gemini e                            | gemini_e.launch          |
| gemini e lite                       | gemini_e_lite.launch     |
| dabai max                           | dabai_max.launch         |
| dabai max pro                       | dabai_max_pro.launch     |
| gemini uw                           | gemini_uw.launch         |
| dabai dcw2                          | dabai_dcw2.launch        |
| dabai dw2                           | dabai_dw2.launch         |
| gemini ew                           | gemini_ew.launch         |
| gemini ew lite                      | gemini_ew_lite.launch    |
| gemini 330 series                   | gemini_330_series.launch |

**Todos los archivos de lanzamiento son esencialmente similares, siendo la principal diferencia los valores predeterminados de los parámetros establecidos para diferentes modelos dentro de la misma serie. Las diferencias en los estándares USB, como USB 2.0 versus USB 3.0, pueden requerir ajustes en estos parámetros. Si encuentras una falla de inicio, revisa cuidadosamente el manual de especificaciones. Presta especial atención a la configuración de resolución en el archivo de inicio, así como a otros parámetros, para garantizar la compatibilidad y el rendimiento óptimo.**

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
