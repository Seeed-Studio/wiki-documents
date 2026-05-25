---
description: Este wiki fornece um guia passo a passo para usar várias câmeras CSI no reComputer com ROS.
title: Câmera CSI com ROS
keywords:
  - Jetson Nano
  - reComputer
  - CSI
  - Camera
  - ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /csi_camera_on_ros
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
createdAt: '2024-07-23'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/csi_camera_on_ros/
---
# Como Usar Várias Câmeras CSI no reComputer com ROS

## Introdução
Este tutorial fornece um guia passo a passo sobre como ler dados de imagem de várias câmeras CSI por meio do ROS em dispositivos da série [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) e publicar tópicos de imagem para serem exibidos na interface de visualização RVIZ.

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Pré-requisitos
- __[reComputer J30/40 series](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__:  Certifique-se de ter concluído a [instalação do JetPack 5.x](/pt-br/reComputer_J4012_Flash_Jetpack) e do [ambiente ROS Noetic](/pt-br/installing_ros1) de acordo com os tutoriais fornecidos.

- __As câmeras compatíveis são as seguintes:__

  - Câmeras IMX219

    - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
    - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
    - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
    - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
    - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
    - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
    - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
    - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
    - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
    - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

  - Câmeras IMX477

    - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
    - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
    - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)


## Primeiros Passos
### Conectando as Câmeras
Siga este tutorial para concluir a [conexão e teste das câmeras CSI](/pt-br/J401_carrierboard_Hardware_Interfaces_Usage) e certifique-se de que o [ROS já está instalado](/pt-br/installing_ros1) no seu sistema.

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig0.jpg" />
  </div>

### Instalação
- **Passo 1:** Abra um terminal no seu reComputer e crie um diretório para o seu workspace:
  ```bash
  mkdir -p ~/catkin_ws/src
  cd ~/catkin_ws/src
  ```
- **Passo 2:** Clone o pacote ROS desejado:
  ```bash
  git clone https://github.com/ZhuYaoHui1998/csi_camera_reader.git
  ```

- **Passo 3:** Compile o workspace:
  ```bash
  cd ~/catkin_ws/
  catkin_make
  ```

- **Passo 4:** Execute novamente o arquivo de configuração (`source`) para atualizar o seu ambiente:
  ```bash
  source devel/setup.bash
  ```

### Uso
- Para publicar o stream de uma câmera no tópico ROS /csi_cam_0/image_raw, use este comando no terminal:
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=0
  ```

- Você também pode alterar `sensor_id` para 1 para corresponder à sua interface:
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=1
  ```

- Se você quiser abrir duas câmeras CSI simultaneamente e publicar tópicos para o ROS, pode executar os seguintes comandos:

  ```bash
  roslaunch csi_camera_reader dual_camera.launch
  ```
  Você pode inserir o comando "**rostopic list**" no terminal para ver os tópicos de imagem publicados pelas câmeras.
  <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig1.png" />
  </div>
    Você também pode usar a ferramenta de visualização RVIZ para assinar os tópicos de imagem e visualizar as informações visuais.
      <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig2.png" />
  </div>
## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>