---
description: Esta wiki proporciona una guía paso a paso para usar múltiples cámaras CSI en reComputer mediante ROS.
title: Cámara CSI con ROS
keywords:
- Jetson Nano
- reComputer
- CSI
- Camera
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/csi_camera_on_ros
last_update:
  date: 05/7/2024
  author: ZhuYaoHui
---
# Cómo Usar Múltiples Cámaras CSI en reComputer con ROS

## Introducción
Este tutorial proporciona una guía paso a paso sobre cómo leer datos de imagen de múltiples cámaras CSI a través de ROS en dispositivos de la serie [reComputer J30/J40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) y publicar temas de imagen para mostrarlos en la interfaz de visualización RVIZ.

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Prerrequisitos
- __[Serie reComputer J30/40](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)__: Asegúrate de haber completado la [instalación del sistema JetPack 5.x](/es/reComputer_J4012_Flash_Jetpack) y el [entorno ROS Noetic](/es/installing_ros1) según los tutoriales proporcionados.

- __Las cámaras compatibles son las siguientes:__

  - Cámaras IMX219

    - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
    - [Cámara IMX219-130 8MP con FOV de 130°](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
    - [Cámara IMX219-160 8MP con FOV de 160°](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
    - [Cámara IMX219-200 8MP con FOV de 200°](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
    - [Cámara IMX219-77 8MP con FOV de 77°](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
    - [Módulo de Cámara CMOS IMX219 M12/CS mount](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
    - [Módulo de Cámara Estéreo 3D IMX219-83 8MP](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
    - [Cámara de Visión Nocturna IR IMX219-77IR 8MP con FOV de 77°](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
    - [Cámara IMX219-160IR 8MP con FOV de 160°](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
    - [Módulo de Cámara CMOS IMX219 M12/CS mount](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

  - Cámaras IMX477

    - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
    - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
    - [Cámara de Alta Calidad para Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)


## Comenzando
### Conectando las Cámaras
Por favor, sigue este tutorial para completar la [Conexión y prueba de las cámaras CSI](/es/J401_carrierboard_Hardware_Interfaces_Usage), y asegúrate de que [ROS ya esté instalado](/es/installing_ros1) en tu sistema.

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig0.jpg" />
  </div>

### Instalación
- **Paso 1:** Abre una terminal en tu reComputer y crea un directorio para tu espacio de trabajo:
  ```bash
  mkdir -p ~/catkin_ws/src
  cd ~/catkin_ws/src
  ```
- **Paso 2:** Clona el paquete ROS deseado:
  ```bash
  git clone https://github.com/ZhuYaoHui1998/csi_camera_reader.git
  ```

- **Paso 3:** Construye el espacio de trabajo:
  ```bash
  cd ~/catkin_ws/
  catkin_make
  ```

- **Paso 4:** Ejecuta el archivo de configuración nuevamente para actualizar tu entorno:
  ```bash
  source devel/setup.bash
  ```

### Uso
- Para publicar el flujo de una cámara al tema ROS /csi_cam_0/image_raw, usa este comando en la terminal:
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=0
  ```

- También puedes cambiar sensor_id a 1 para que coincida con tu interfaz:
  ```bash
  roslaunch csi_camera_reader csi_camera.launch sensor_id:=1
  ```

- Si quieres abrir dos cámaras CSI simultáneamente y publicar temas a ROS, puedes ejecutar los siguientes comandos:

  ```bash
  roslaunch csi_camera_reader dual_camera.launch
  ```
  Puedes ingresar el comando "**rostopic list**" en la terminal para ver los temas de imagen publicados por las cámaras.
  <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig1.png" />
  </div>
    También puedes usar la herramienta de visualización RVIZ para suscribirte a los temas de imagen y ver la información visual.
      <div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/robotics/hardware/csi_camera/fig2.png" />
  </div>
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