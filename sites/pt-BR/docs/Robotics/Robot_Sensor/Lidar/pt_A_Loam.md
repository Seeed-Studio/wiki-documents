---
description: Este wiki fornece etapas detalhadas para configurar e executar o algoritmo A-LOAM no reComputer Jetson usando um sensor LiDAR RoboSense RS32.
title: Executar A-LOAM 3D SLAM
keywords:
  - A-LOAM
  - SLAM
  - reComputer
  - Jetson nano
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /a_loam
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
createdAt: '2024-07-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/a_loam/
---
# Como executar A-LOAM 3D SLAM no reComputer

## Introdução ao A-LOAM

[A-LOAM](https://github.com/HKUST-Aerial-Robotics/A-LOAM/tree/devel) é uma implementação avançada do algoritmo LOAM (Lidar Odometry and Mapping) original de J. Zhang e S. Singh. Os principais recursos do A-LOAM incluem:

- Odometria e mapeamento LiDAR em tempo real.
- Estrutura de código simplificada usando Eigen e Ceres Solver.
- Alto desempenho e robustez em ambientes variados.

O A-LOAM pode ser usado para várias aplicações, incluindo direção autônoma, robótica e mapeamento 3D.

Este wiki fornece etapas detalhadas para configurar e executar o algoritmo A-LOAM (Advanced LOAM) na reComputer Jetson Série usando um sensor LiDAR RoboSense RS32. O A-LOAM é uma implementação avançada do LOAM (Lidar Odometry and Mapping in Real-time) que utiliza Eigen e Ceres Solver para mapeamento e localização eficientes e em tempo real.
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig0.gif" />
  </div>

## Pré-requisitos

- __[reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__.

- __RoboSense RS32 Lidar__.

  :::note
  - Certifique-se de que o seu reComputer esteja executando Jetpack 5.x. Nós testamos apenas no Ubuntu 20.04 e ROS Noetic. Siga a [instalação do ROS1 para reComputer](/pt-br/installing_ros1) conforme descrito neste guia para concluir a configuração do ambiente ROS.
  - Certifique-se de seguir o tutorial para [iniciar o RoboSense RS32 LiDAR no reComputer em ROS](/pt-br/robosense_lidar) e visualizar com sucesso os dados de nuvem de pontos.
  :::

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Primeiros Passos

### Configuração do Ambiente

- __Etapa 1:__ Instale gflags, google-glog, suitesparse, cxsparse3, cxsparse.

    ```bash
    sudo apt-get install libgflags-dev libgoogle-glog-dev
    sudo apt-get install libsuitesparse-dev libcxsparse3 libcxsparse-dev
    ```

- __Etapa 2:__ Instale PCL (Point Cloud Library).

  ```bash
  sudo apt install libpcl-dev
  ```

- __Etapa 3:__ Instale Ceres.

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

- __Etapa 4:__ Clone o código do A-LOAM no diretório src do seu workspace (~/catkin_ws/src).

  ```bash
  cd ~/catkin_ws/src
  git clone https://github.com/HKUST-Aerial-Robotics/A-LOAM.git
  ```

### Modificar Arquivos de Configuração e Código-fonte

- __Etapa 1:__ Como o algoritmo A-LOAM requer que o tipo de nuvem de pontos seja __XYZIRT__, e a saída padrão do RS32 LiDAR é __XYZI__, você precisa modificar o arquivo __CMakeLists.txt__ na linha __8__ no diretório ___~/catkin_ws/src/rslidar_sdk/___, alterando __XYZI__ para __XYZIRT__.
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig1.png" />
  </div>

- __Etapa 2:__ O tópico padrão de nuvem de pontos ao qual o A-LOAM assina é ___/velodyne_points___, enquanto o tópico de saída padrão do RS32 LiDAR é ___/rslidar_points___. Portanto, modifique o nome do tópico na linha 26 no arquivo ___~/catkin_ws/src/rslidar_sdk/config/config.yaml___ para ___/velodyne_points___.
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig2.png" />
  </div>

- __Etapa 3:__ Se você estiver usando C++14, modifique a linha __5__ no arquivo __CMakeLists.txt__ localizado no diretório ___~/catkin_ws/src/A-LOAM/___, alterando ___C++11___ para ___C++14___.
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig3.png" />
  </div>

- __Etapa 4:__ Se você estiver usando __OpenCV 4.x__, será necessário atualizar as referências aos arquivos de cabeçalho do OpenCV na linha __44__ do arquivo __scanRegistration.cpp__ localizado no diretório ___~/catkin_ws/src/A-LOAM/src___ (esta etapa pode ser ignorada se você estiver usando OpenCV 3.x).

  Substitua o código

  ```c++
  #include <opencv/cv.h>
  ```

  por

  ```c++
  #include <opencv2/opencv.hpp>
  ```

  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig4.png" />
  </div>

- __Etapa 5:__ Nas linhas __91__ e __93__ de ___~/catkin_ws/src/A-LOAM/src/kittiHelper.cpp___, altere ___CV_LOAD_IMAGE_GRAYSCALE___ para ___cv::IMREAD_GRAYSCALE___
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig5.png" />
  </div>

- __Etapa 6:__ Se você estiver usando __tf2__, modifique todos os arquivos __.cpp__ __(kittiHelper.cpp, laserMapping.cpp, laserOdometry.cpp, scanRegistration.cpp)__ no diretório ___~/catkin_ws/src/A-LOAM/src/___ alterando ___frame_id=/camera_init___ para ___frame_id=camera_init___, removendo apenas o símbolo __'/'__.
  <div align="center">
      <img width={400}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig6.png" />
  </div>

### Compilar o Pacote

- __Etapa 1:__ Volte para o workspace e recompile o pacote de recursos e recarregue o ambiente.

  ```bash
  cd ~/catkin_ws
  catkin_make
  source ~/catkin_ws/devel/setup.bash
  ```

### Iniciando o 3D SLAM

- __Etapa 1:__ Executando o código do lidar

  ```bash
    roslaunch rslidar_sdk start.launch
  ```

- __Etapa 2:__ Executando o código do A-LOAM

  ```bash
  roslaunch aloam_velodyne aloam_velodyne_HDL_32.launch
  ```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/software/aloam/fig7.png" />
  </div>

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
