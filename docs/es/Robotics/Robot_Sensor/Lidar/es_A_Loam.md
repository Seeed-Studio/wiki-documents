---
description: Este wiki proporciona pasos detallados para configurar y ejecutar el algoritmo A-LOAM en reComputer Jetson usando un sensor LiDAR RoboSense RS32.
title: Ejecutar A-LOAM 3D SLAM
keywords:
- A-LOAM
- SLAM
- reComputer
- Jetson nano
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/a_loam
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# Cómo ejecutar A-LOAM 3D SLAM en reComputer

## Introducción a A-LOAM

[A-LOAM](https://github.com/HKUST-Aerial-Robotics/A-LOAM/tree/devel) es una implementación avanzada del algoritmo LOAM (Lidar Odometry and Mapping) original de J. Zhang y S. Singh. Las características clave de A-LOAM incluyen:
- Odometría y mapeo LiDAR en tiempo real.
- Estructura de código simplificada usando Eigen y Ceres Solver.
- Alto rendimiento y robustez en entornos diversos.

A-LOAM puede ser usado para varias aplicaciones incluyendo conducción autónoma, robótica y mapeo 3D.

Este wiki proporciona pasos detallados para configurar y ejecutar el algoritmo A-LOAM (Advanced LOAM) en reComputer Jetson Series usando un sensor LiDAR RoboSense RS32. A-LOAM es una implementación avanzada de LOAM (Lidar Odometry and Mapping in Real-time) que utiliza Eigen y Ceres Solver para mapeo y localización eficientes y en tiempo real.
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig0.gif" />
  </div>

## Prerrequisitos
- __[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__.

- __RoboSense RS32 Lidar__.

  :::note
    - Asegúrate de que tu reComputer esté ejecutando Jetpack 5.x. Solo hemos probado en Ubuntu 20.04 y ROS Noetic. Sigue la [instalación de ROS1 para reComputer](/es/installing_ros1) como se describe en esta guía para completar la configuración del entorno ROS.
    - Asegúrate de seguir el tutorial para [lanzar el RoboSense RS32 LiDAR en reComputer en ROS](/es/robosense_lidar), y visualizar exitosamente los datos de nube de puntos.
  :::

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Comenzando

### Configuración del Entorno
 - **Paso 1:** Instalar gflags, google-glog, suitesparse, cxsparse3, cxsparse.
    ```bash
    sudo apt-get install libgflags-dev libgoogle-glog-dev
    sudo apt-get install libsuitesparse-dev libcxsparse3 libcxsparse-dev
    ```
- **Paso 2:** Instalar PCL (Point Cloud Library).
  ```bash
  sudo apt install libpcl-dev
  ```

- **Paso 3:** Instalar Ceres.
  ```bash
  wget ceres-solver.org/ceres-solver-1.14.0.tar.gz
  tar xvf ceres-solver-1.14.0.tar.gz
  cd ceres-solver-1.14.0
  mkdir build
  cd build
  cmake ..
  make -j4 
  sudo make install
  ```

- **Step 4:** Clone the A-LOAM code into the src directory of your workspace (~/catkin_ws/src).
  ```bash
  cd ~/catkin_ws/src
  git clone https://github.com/HKUST-Aerial-Robotics/A-LOAM.git
  ```

### Modificar Archivos de Configuración y Código Fuente

- **Paso 1:** Dado que el algoritmo A-LOAM requiere que el tipo de nube de puntos sea **XYZIRT**, y la salida predeterminada del LiDAR RS32 es **XYZI**, necesitas modificar el archivo **CMakeLists.txt** en la línea **8** en el directorio **_~/catkin_ws/src/rslidar_sdk/_**, cambiando **XYZI** a **XYZIRT**.
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig1.png" />
  </div>

- **Paso 2:** El tema de nube de puntos predeterminado al que se suscribe A-LOAM es **_/velodyne_points_**, mientras que el tema de salida predeterminado del LiDAR RS32 es **_/rslidar_points_**. Por lo tanto, modifica el nombre del tema en la línea 26 del archivo **_~/catkin_ws/src/rslidar_sdk/config/config.yaml_** a **_/velodyne_points_**.
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig2.png" />
  </div>

- **Paso 3:** Si estás usando C++14, modifica la línea **5** en el archivo **CMakeLists.txt** ubicado en el directorio **_~/catkin_ws/src/A-LOAM/_**, cambiando **_C++11_** a **_C++14_**.
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig3.png" />
  </div>

- **Paso 4:** Si estás usando **OpenCV 4.x**, necesitas actualizar las referencias del archivo de cabecera de OpenCV en la línea **44** del archivo **scanRegistration.cpp** ubicado en el directorio **_~/catkin_ws/src/A-LOAM/src_** (este paso se puede omitir si estás usando OpenCV 3.x).

  Reemplazar código
  ```c++
  #include <opencv/cv.h>
  ```

  
  con
  ```c++
  #include <opencv2/opencv.hpp>
  ```

  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig4.png" />
  </div>

- **Paso 5:** En las líneas **91** y **93** de **_~/catkin_ws/src/A-LOAM/src/kittiHelper.cpp_**, cambia **_CV_LOAD_IMAGE_GRAYSCALE_** por **_cv::IMREAD_GRAYSCALE_**
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig5.png" />
  </div>

- **Paso 6:** Si estás usando **tf2**, modifica todos los archivos **.cpp** **(kittiHelper.cpp, laserMapping.cpp, laserOdometry.cpp, scanRegistration.cpp)** en el directorio **_~/catkin_ws/src/A-LOAM/src/_** cambiando **_frame_id=/camera_init_** por **_frame_id=camera_init_**, eliminando únicamente el símbolo **'/'**.
  <div align="center">
      <img width={400} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig6.png" />
  </div>

### Compilar el Paquete

-  **Paso 1:** Regresa al espacio de trabajo y recompila el paquete de características y recarga el entorno.
  ```bash
  cd ~/catkin_ws
  catkin_make
  source ~/catkin_ws/devel/setup.bash
  ```

### Iniciando SLAM 3D
- **Paso 1:** Ejecutando código lidar
  ```bash
    roslaunch rslidar_sdk start.launch
  ```

- **Paso 2:** Ejecutar el código A loam
  ```bash
  roslaunch aloam_velodyne aloam_velodyne_HDL_32.launch
  ```

  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig7.png" />
  </div>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>