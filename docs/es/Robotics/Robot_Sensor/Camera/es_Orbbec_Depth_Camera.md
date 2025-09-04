---
description: Esta wiki proporciona una guía paso a paso para usar cámaras de profundidad Orbbec en reComputer mediante ROS.
title: Cámara de Profundidad Orbbec con ROS
keywords:
- Jetson Nano
- reComputer
- Orbbec
- Depth Camera
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/orbbec_depth_camera_on_ros
last_update:
  date: 10/10/2024
  author: Lidayu
---
# Cómo Usar Cámaras de Profundidad Orbbec en reComputer con ROS

## Introducción

Este tutorial proporciona una guía paso a paso sobre cómo usar la Cámara de Profundidad Orbbec a través de ROS en dispositivos de la serie [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html). Tomaremos Orbbec Gemini 2 como ejemplo, obtendremos datos de tópicos de imágenes de profundidad y nubes de puntos, y los visualizaremos en rviz.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Prerrequisitos

- __[reComputer serie J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__:  Realizamos tutoriales basados en el [sistema JetPack 5.x](/es/reComputer_J4012_Flash_Jetpack) y el [entorno ROS Noetic](/es/installing_ros1).

- Instalar dependencias (ten cuidado con tu distribución de ROS):
  
  ```bash
  # Assuming you have sourced the ROS environment, same below
  sudo apt install libgflags-dev ros-$ROS_DISTRO-image-geometry ros-$ROS_DISTRO-camera-info-manager \
  ros-$ROS_DISTRO-image-transport ros-$ROS_DISTRO-image-publisher libgoogle-glog-dev libusb-1.0-0-dev libeigen3-dev \
  ros-$ROS_DISTRO-diagnostic-updater ros-$ROS_DISTRO-diagnostic-msgs libdw-dev
  ```

## Comenzando

### Conectando las Cámaras

Conecta la Cámara de Profundidad Orbbec al Jetson vía USB Type-C, y asegúrate de que [ROS ya esté instalado](/es/installing_ros1) en tu sistema.

<div align="center">
      <img width={700}
      src="https://i.imgur.com/0gAng8s.jpg" />
  </div>

### Instalación
__Si has clonado OBcamera_ws de nuestro proyecto, no necesitas clonar desde el enlace de abajo.__

- __Paso 1:__ Crea un espacio de trabajo ROS (__si no tienes uno__):

```bash
mkdir -p OBcamera_ws/src
```

- __Paso 2:__ Obtener el código fuente:

```bash
cd OBcamera_ws/src
git clone https://github.com/orbbec/OrbbecSDK_ROS1.git
```

- __Paso 3:__ Construir el paquete:

```bash
cd OBcamera_ws
catkin_make
```

- __Paso 4:__ Instalar reglas udev:

```bash
source ./devel/setup.bash
roscd orbbec_camera
sudo bash ./scripts/install_udev_rules.sh
```

### Iniciar la Cámara

Para el modelo de cámara __Gemini2__, ingresa lo siguiente en la terminal 1:

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

- `/camera/color/camera_info`: La información de la cámara de color.
- `/camera/color/image_raw`: La imagen del flujo de color.
- `/camera/depth/camera_info`: La información de la cámara de profundidad.
- `/camera/depth/image_raw`: La imagen del flujo de profundidad.
- `/camera/depth/points`: La nube de puntos, solo disponible cuando `enable_point_cloud` es `true`.
- `/camera/depth_registered/points`: La nube de puntos coloreada, solo disponible cuando `enable_colored_point_cloud` es `true`.
- `/camera/left_ir/camera_info`: La información de la cámara IR izquierda.
- `/camera/left_ir/image_raw`: La imagen del flujo IR izquierdo.
- `/camera/right_ir/camera_info`: La información de la cámara IR derecha.
- `/camera/right_ir/image_raw`: La imagen del flujo IR derecho.
- `/diagnostics`: La información de diagnóstico de la cámara. Actualmente, la información de diagnóstico solo incluye la temperatura de la cámara.

Inicia RVIZ y añade el tema a través del botón en la esquina inferior izquierda de la interfaz de RVIZ, puedes obtener una renderización similar a la siguiente:
<div align="center">
      <img width={700}
      src="https://i.imgur.com/7jmfnZ4.png" />
  </div>

Si el modelo de cámara que estás usando es diferente, encuentra el nombre del archivo launch correspondiente de la tabla a continuación y reemplaza `gemini2.launch` en la terminal 1 en consecuencia.

| Seriales de Producto                | Archivo Launch           |
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

__Todos los archivos de lanzamiento son esencialmente similares, siendo la diferencia principal los valores predeterminados de los parámetros establecidos para diferentes modelos dentro de la misma serie. Las diferencias en los estándares USB, como USB 2.0 versus USB 3.0, pueden requerir ajustes a estos parámetros. Si encuentras una falla de inicio, por favor revisa cuidadosamente el manual de especificaciones. Presta especial atención a la configuración de resolución en el archivo de lanzamiento, así como a otros parámetros, para asegurar compatibilidad y rendimiento óptimo.__

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
