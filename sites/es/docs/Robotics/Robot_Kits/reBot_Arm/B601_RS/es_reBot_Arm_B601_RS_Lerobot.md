---
description: Este wiki proporciona una guía completa para que reBot Arm B601-RS implemente la recopilación de datos y el entrenamiento dentro del framework LeRobot.
title: Introducción a reBot Arm B601-RS en LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-06-17'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_lerobot/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Introducción a reBot Arm B601-RS basado en LeRobot

<RebotRsDocNav />


<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Brazo robótico de 6 GDL · Soporte multi-motor · Solucionador de cinemática · Planificación de trayectoria · Totalmente de código abierto</strong>
</p>

[reBot Arm B601-RS](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/) es un proyecto de brazo robótico de código abierto lanzado por Seeed, dedicado a reducir el umbral para aprender inteligencia encarnada. Abrimos sin reservas todos los diseños estructurales y el código, haciendo que la tecnología robótica sea accesible para todos.


[LeRobot](https://github.com/huggingface/lerobot/tree/main) se compromete a proporcionar modelos, conjuntos de datos y herramientas para robótica en el mundo real en PyTorch. Su objetivo es reducir la barrera de entrada a la robótica, permitiendo que todos contribuyan y se beneficien compartiendo conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones en el mundo real, centrándose en el aprendizaje por imitación y el aprendizaje por refuerzo. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos con demostraciones recopiladas por humanos y entornos de simulación, lo que permite a los usuarios comenzar sin necesidad de ensamblar robots.

### 📖 Introducción al proyecto

**reBot-DevArm (reBot Arm B601 DM y reBot Arm B601 RS)** es un proyecto de brazo robótico dedicado a reducir el umbral para aprender inteligencia encarnada. Nos centramos en el **"Verdadero código abierto"** — no solo código, abrimos sin reservas todo lo siguiente:
- 🦾 **Brazos robóticos de código abierto con dos versiones de motor**: Proporcionamos todos los archivos de código abierto para las versiones de motor RoboStride y Damiao con la misma apariencia.
- 🛠️ **Planos de hardware**: Archivos fuente de piezas de chapa metálica y piezas impresas en 3D.
- 🔩 **BOM (Lista de materiales)**: Detallada hasta la especificación de cada tornillo y enlace de compra.
- 💻 **Software y algoritmos**: Python SDK, ROS1/2, Isaac Sim, LeRobot, etc.

## Construye tu brazo robótico reBot

- Ofrecemos cinco opciones de kit:
  - **Kit de motores del cuerpo del brazo robótico**: Incluye solo los motores y los mazos de cables necesarios para el brazo robótico.
  - **Kit de piezas estructurales del cuerpo del brazo robótico**: Incluye solo los componentes mecánicos estructurales.
  - **Kit completo de pinza**: Incluye motores, mazos de cables y piezas estructurales para la pinza.
  - **Kit completo de brazo**: Incluye todos los componentes para el cuerpo del brazo robótico y la pinza.
  - **Brazo robótico preensamblado**: Un brazo robótico completamente ensamblado.

El kit de robot inteligente con brazo reBot-DevArm y reComputer Jetson AI combina a la perfección el control de brazo robótico de alta precisión con una potente plataforma de computación de IA, proporcionando una solución integral de desarrollo de robots. Este kit se basa en la plataforma Jetson Orin o AGX Orin, combinada con reBot-DevArm y el framework de IA LeRobot, ofreciendo a los usuarios un sistema de robot inteligente aplicable a múltiples escenarios como educación, investigación y automatización industrial.

Este wiki proporciona tutoriales de depuración para reBot-DevArm e implementa la recopilación de datos y el entrenamiento dentro del framework LeRobot.

:::caution
Los tutoriales de Seeed Studio se actualizan estrictamente de acuerdo con la documentación oficial. Si encuentras problemas de software o de entorno que no se puedan resolver, primero consulta las Preguntas Frecuentes al final del artículo, o contacta con atención al cliente para unirte al grupo de discusión SeeedStudio LeRobot. También puedes hacer preguntas aquí: [LeRobot GitHub](https://github.com/huggingface/lerobot) o en el [Discord Channel](https://discord.gg/8TnwDdjFGU).
:::

## 🔧 Características de la Serie reBot B601-RS:

1. **Código abierto y bajo coste**
   reBot Arm es una solución de brazo robótico de código abierto y bajo coste de Seeed Studio, dedicada a reducir el umbral para aprender inteligencia encarnada.

2. **Integración con la plataforma LeRobot**
   Diseñado para la integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma proporciona modelos PyTorch, conjuntos de datos y herramientas para el aprendizaje por imitación de tareas de robots reales (incluida la recopilación de datos, simulación, entrenamiento y despliegue).

3. **Abundantes recursos de aprendizaje**
   Proporciona completos recursos de aprendizaje de código abierto, incluyendo guías de ensamblaje y calibración, tutoriales de prueba y recopilación de datos, documentación de entrenamiento y despliegue para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.

4. **Compatible con la plataforma Nvidia**
   Admite el despliegue mediante la plataforma reComputer Mini J4012 Orin NX 16GB.

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1mFo7BiEwX&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

## Entorno inicial del sistema

**Para Ubuntu x86:**
  - Ubuntu 22.04
  - CUDA 12+
  - Python 3.10
  - Torch 2.6

**Para Jetson Orin:**
  - Jetson JetPack 6.0 y 6.1, no compatible con 6.2
  - Python 3.10
  - Torch 2.3+

## Instalar LeRobot

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV12Fo7BvE7G&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

Necesitas instalar pytorch, torchvision y otros entornos según tu versión de CUDA.

### 1. Instalar Miniforge

```bash
cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc
```

### 2. Clonar el repositorio Lerobot

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

### 3. Crear el entorno Conda e instalar LeRobot

:::tip
Para las funciones detalladas de los paquetes de funciones, consulta:
- [lerobot-teleoperator-rebot-arm-102](https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102)
- [lerobot-robot-seeed-b601](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601)
:::

El repositorio lerobot ya tiene un pyproject.toml. Crea un entorno conda e instala todas las dependencias.

```bash
cd ~/rebot_lerobot

# Create conda environment (Python 3.10)
conda create -y -n lerobot python=3.10

# Activate environment
conda activate lerobot

# Install lerobot main project (editable mode)
pip install -e ./lerobot

# Add dependency packages
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

### 4. Instalar ffmpeg

ffmpeg es una dependencia de decodificación de vídeo, instálalo mediante conda:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
**Notas de versión**:
- De forma predeterminada, se instalará ffmpeg 7.X (compatible con el codificador libsvtav1)
- Si encuentras problemas de compatibilidad de versión, puedes especificar ffmpeg 7.1.1:
  ```bash
  conda install ffmpeg=7.1.1 -c conda-forge
  ```
- Puedes comprobar si el codificador libsvtav1 es compatible mediante `ffmpeg -encoders | grep svtav1`
:::

### 5. Configuración especial para dispositivos Jetson JetPack 6.0+

(Omite este paso para PC) Para dispositivos Jetson JetPack 6.0+ (asegúrate de haber instalado Pytorch-gpu y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies via conda, for Jetson Jetpack 6.0+ only
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Install specific OpenCV version using pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This version must be compatible with torchvision
```

### 6. Comprobar Pytorch y Torchvision

:::tip
Si estás utilizando un dispositivo Jetson, instala Pytorch y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).
:::

Dado que instalar el entorno lerobot mediante pip desinstalará el Pytorch y Torchvision originales e instalará las versiones para CPU, necesitas realizar una comprobación en Python.

```python
python3

import torch
print(torch.cuda.is_available())#Should output True
```

Si la salida es True, puedes escribir exit() para salir de Python y continuar con los siguientes pasos.
Si la salida es False, necesitas reinstalar Pytorch y Torchvision según el [tutorial oficial](https://pytorch.org/index.html).

## Calibrar el brazo robótico

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1KFo7BiE1h&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

A continuación, debes conectar la fuente de alimentación y el cable de datos a tu robot reBot B601-RS para la calibración, a fin de garantizar que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot reBot B601-RS funcione en otro. Si necesitas recalibrar el brazo robótico, elimina por completo los archivos en `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y vuelve a calibrar el brazo robótico. De lo contrario, aparecerá un mensaje de error. La información de calibración del brazo robótico se almacenará en los archivos JSON de este directorio.

### Calibrar el brazo seguidor

:::tip
Si no puedes conectarte al seguidor, ve al wiki de introducción y prueba a usar la interfaz proporcionada por motorbridge para comprobar si el brazo robótico funciona correctamente.
:::

El B601-RS solo necesita calibrarse una vez después del montaje. Aquí está el comando de calibración. Consulta la figura para la posición cero (pinza completamente cerrada).

```bash

# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg" />
  </div>

Si utilizas Jetson (Jetpack 6.x), usa las siguientes instrucciones para encontrar el número de puerto CAN correspondiente a tu Jetson.

```bash
for i in /sys/class/net/can*; do
    [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"
done
```

salida:

```
cam2  # also maybe can0,can1,can x
```

El número de puerto para todos los comandos posteriores del seguidor debe coincidir con la salida mostrada aquí.

Si a tu Jetson le falta el controlador PCAN, la comunicación fallará de forma constante. Consulta la guía de instalación del controlador PCAN para Jetson en la sección [Quick Start](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/#3pcan-usb).


### Calibrar el brazo líder

Los pasos de calibración son cruciales y afectarán directamente a si el brazo robótico funciona con normalidad. Sigue el proceso estrictamente.

<details>

<summary> rebot 102 leader </summary>

:::tip
**Notas de calibración del reBot 102 leader**:
- Cuando comienza la calibración, la posición actual de cada servo en el reBot Arm 102 se **restablecerá a cero**
- `joint_ranges` (límites de las articulaciones) se toman del archivo de configuración `config_rebot_arm_102_leader.py`, no de los datos de calibración
- Si una articulación parece estar siempre atascada cerca de un límite, comprueba primero la configuración de `joint_ranges`
- Las direcciones de las articulaciones se definen en el archivo de configuración. Si las direcciones no coinciden, modifica la configuración en lugar de recalibrar
- reBot 102 leader utiliza un módulo USB a UART, que normalmente se asigna a `/dev/ttyUSB*`
- Usa `ls /dev/ttyUSB*` para comprobar el número de puerto real

Si esta es la primera conexión, es posible que obtengas un error indicando que no se puede encontrar `/dev/ttyACM0`. Esto se debe a que brltty está ocupando el puerto serie. Ejecuta los siguientes pasos:

```bash
sudo dmesg | grep ttyUSB #Check the last line shows "disconnected"
sudo apt remove brltty #Remove brltty
```
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
</div>

Siguiendo las indicaciones, mueve el brazo líder a la posición cero que se muestra arriba,

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

Mantenlo quieto y luego pulsa Enter hasta que la calibración se complete.
Después de la calibración, introduce el siguiente comando para probar el brazo líder.

```bash
python ./lerobot-teleoperator-rebot-arm-102/examples/read_raw_angles.py \
      --port /dev/ttyUSB0

#If you observe terminal output similar to the following printing continuously, and when at the zero position shown above, all joint output values are 0, then leader calibration is complete.
#shoulder_pan=    0.00  shoulder_lift=    0.00  elbow_flex=    0.00  wrist_flex=    0.00  wrist_yaw=    0.00  wrist_roll=    0.00  gripper=    0.00
```

</details>

## Teleoperación

:::danger
**¡Todos los escenarios de movimiento del brazo robótico requieren la misma atención!**

Durante la teleoperación, si el brazo robótico maestro-esclavo sufre una desconexión de energía, un mal contacto de alimentación o un desprendimiento de la línea de señal, primero debes detener el código del programa y devolver el brazo robótico a su posición cero inicial. Solo entonces vuelve a conectar la fuente de alimentación y reinicia el programa. Esto evita que el desorden de datos provoque una pérdida de control del brazo robótico y posibles riesgos de seguridad.

:::

Primero concede permisos a los puertos serie:

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Ejecuta la teleoperación:
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```
<!-- <div class="video-container">
    <iframe
        width="900"
        height="600"
        src="https://player.bilibili.com/player.html?bvid=BV1A6JM62EeK&page=1&high_quality=1&danmaku=0&autoplay=0&muted=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true">
    </iframe>
</div> -->

## Añadir cámaras

<details>
<summary> Si se utiliza RealSense D435i/D405 </summary>

Las cámaras de profundidad RealSense pueden proporcionar percepción RGB-D para LeRobot y son adecuadas para tareas como reconocimiento de objetos, reconstrucción de nubes de puntos y manipulación sobre mesa. Los modelos recomendados aquí son **RealSense D405** y **RealSense D435i**.

**RealSense D405**

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

La RealSense D405 es una cámara estéreo de profundidad de corto alcance diseñada para tareas de alta precisión a corta distancia, como la manipulación robótica sobre mesa, con un rango de trabajo típico de **7 cm a 50 cm**.

**RealSense D435i**

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

La RealSense D435i combina percepción de profundidad, imagen RGB y una IMU, lo que la hace adecuada para aplicaciones de rango medio a corto, como reconstrucción 3D, SLAM y percepción del entorno robótico.

**1. Cambiar a la rama de cámara**

El soporte actual para cámaras está disponible en la rama `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

Confirma la rama actual:

```bash
git branch --show-current
```

Salida esperada:

```bash
DepthCameraSupport
```

**2. Instalar RealSense:**

Si solo utilizas RealSense:

```bash
pip install -e ".[realsense]"
```

**3. Conceder permisos**

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

**4. Detectar cámaras**

```bash
lerobot-find-cameras realsense
```

Este paso mostrará:

- Modelo de la cámara
- Número de serie
- Información USB
- Configuración de flujo predeterminada

**5. Ejemplo de RealSense**

Prueba con dos RealSense:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**6. Notas sobre parámetros**

- `depth_alpha` controla el factor de escala de la imagen de profundidad y se puede ajustar según el resultado de la visualización y el rango de distancia objetivo.
- Si conectas tres o más cámaras de profundidad, se recomienda reducir `fps` a `15` para mejorar la estabilidad general.
- Se recomienda mantener la resolución en `640x480` para lograr un mejor equilibrio entre estabilidad y rendimiento en tiempo real.

</details>

<details>

<summary> Si se utiliza la cámara de profundidad Orbbec Gemini2 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

proporcionando flujos sincronizados de RGB y profundidad con una alineación precisa de profundidad a color. Combinado con la detección de profundidad estéreo y un IMU de 6 ejes integrado, es muy adecuado para tareas robóticas como detección de objetos, percepción 3D, mapeo y navegación. Su diseño compacto y la compatibilidad completa con el SDK de Orbbec lo hacen adecuado tanto para la investigación como para el despliegue en el mundo real.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

Gemini 336 es un nuevo miembro de la serie Gemini 330. Hereda el sólido rendimiento de profundidad de Gemini 335 y mejora aún más la calidad de la imagen de profundidad en áreas interiores reflectantes, regiones oscuras en escenas de alto rango dinámico y entornos exteriores brillantes. Para aplicaciones de robótica, puede proporcionar datos de profundidad más estables y de alta calidad para tareas como percepción, localización y manipulación.

* 🚀 Paso 1: Instalar las dependencias del SDK de Orbbec

**1. Cambiar a la rama de Camera**

La compatibilidad actual con cámaras está disponible en la rama `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

Confirma la rama actual:

```bash
git branch --show-current
```

Salida esperada:

```bash
DepthCameraSupport
```

**2. Instalar Orbbec**

```bash
pip install -e ".[orbbec]"
```

**3. Conceder permisos**

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

**4. Detectar cámaras**

```bash
lerobot-find-cameras orbbec
```

Este paso mostrará:

- Modelo de cámara
- Número de serie
- Información USB
- Configuración de flujo predeterminada

**5. Ejemplo de Orbbec**

Prueba de una sola Orbbec:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**6. Notas sobre parámetros**

- `depth_alpha` controla el factor de escala de la imagen de profundidad. Un buen punto de partida es `0.2`, luego puedes ajustarlo según el resultado de la visualización.
- Si conectas tres o más cámaras de profundidad, se recomienda reducir `fps` a `15` para una mejor estabilidad.
- Se recomienda mantener la resolución en `640x480` para una visualización y transferencia de datos más estables.

**7. Problemas comunes**

Si ves el siguiente error:

```bash
No Orbbec camera found for 'XXXX'
```

normalmente significa que el número de serie en la configuración no coincide con el dispositivo conectado actualmente. Ejecuta:

```bash
lerobot-find-cameras orbbec
```

Luego confirma el `serial` real y actualiza `serial_number_or_name` en tu comando.

**💡 Autor y contribución**

- Autor: Zhang Jiaquan, Wang Wenzhao - South China Normal University

</details>

<details>

<summary> Si utilizas una cámara genérica </summary>

Para instanciar una cámara, necesitas un identificador de cámara. Este identificador puede cambiar si reinicias tu ordenador o vuelves a conectar tu cámara, un comportamiento que depende principalmente de tu sistema operativo.

Para encontrar los índices de las cámaras conectadas a tu sistema, ejecuta el siguiente script:

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

La terminal imprimirá información relevante de la cámara.

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

Puedes encontrar las imágenes tomadas por cada cámara en el directorio `~/lerobot/outputs/captured_images`.

:::warning
Al usar cámaras Intel RealSense en **macOS**, podrías obtener este error: **"Error finding RealSense cameras: failed to set power state"**. Esto se puede solucionar ejecutando el mismo comando con permisos de `sudo`. Ten en cuenta que usar cámaras RealSense en **macOS** es inestable.
:::

Después de eso, podrás mostrar las cámaras en tu ordenador mientras teleoperas ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de grabar tu primer conjunto de datos.

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

:::tip
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, bajo el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Sin embargo, seguir sin recomendar conectar 2 cámaras a un ordenador a través del mismo HUB USB.
:::

Si tienes más cámaras, puedes cambiar el parámetro `--robot.cameras` para añadirlas. Debes prestar atención al formato de `index_or_path`, que está determinado por el último dígito del ID de la cámara que se muestra al ejecutar `python -m lerobot.find_cameras opencv`.

Por ejemplo, si quieres añadir una cámara:

<!-- TODO: reBot multi-camera configuration command -->
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

</details>

## Recopilación de conjuntos de datos

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1W3okBNEAJ&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

<details>

<summary> Si quieres guardar el conjunto de datos localmente </summary>

<!-- TODO: reBot local data collection command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

Entre ellos, `repo_id` se puede modificar de forma personalizada, y `push_to_hub=false`. Finalmente, el conjunto de datos se guardará en el directorio `~/.cache/huggingface/lerobot` en la carpeta de inicio, donde se creará la carpeta `seeed_rebot_b601_rs/test` mencionada anteriormente.

</details>

<details>
<summary> Si quieres usar las funciones de Hugging Face Hub para subir tu conjunto de datos </summary>

- Si quieres usar las funciones de Hugging Face Hub para subir tu conjunto de datos y no lo has hecho antes, asegúrate de haber iniciado sesión usando un token con permisos de escritura, que se puede generar desde los [ajustes de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Guarda el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Graba 5 episodios y sube tu conjunto de datos al Hub:

<!-- TODO: reBot data collection and upload to Hugging Face command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

Verás aparecer muchas líneas como esta:
```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

</details>

**Función de grabación**

La función **record** proporciona un conjunto de herramientas para capturar y gestionar datos durante el funcionamiento del robot.

**1. Almacenamiento de datos**

- Los datos se almacenan usando el formato `LeRobotDataset` y se guardan en disco durante la grabación.
- De forma predeterminada, el conjunto de datos se envía a tu página de Hugging Face después de la grabación.
- Para desactivar la subida, usa: `--dataset.push_to_hub=False`.

**2. Puntos de control y reanudación**

- Los puntos de control se crean automáticamente durante la grabación.
- Para reanudar después de una interrupción, vuelve a ejecutar el mismo comando con: `--resume=true`

⚠️ **Nota importante**: Al reanudar, establece `--dataset.num_episodes` en el número de episodios adicionales que se van a grabar (no en el número total de episodios objetivo del conjunto de datos).
- Para empezar a grabar desde cero, **elimina manualmente** el directorio del conjunto de datos.

**3. Parámetros de grabación**

Configura el flujo de grabación de datos usando argumentos de línea de comandos:

| Parámetro | Descripción | Predeterminado |
|------|------|--------|
| --dataset.episode_time_s | Duración por episodio de datos (segundos) | 60 |
| --dataset.reset_time_s | Tiempo de reinicio del entorno después de cada episodio (segundos) | 60 |
| --dataset.num_episodes | Número total de episodios a grabar | 50 |

**4. Controles de teclado durante la grabación**

Controla el flujo de grabación de datos usando atajos de teclado:

| Tecla | Acción |
|----|------|
| → (Flecha derecha) | Detener anticipadamente el episodio actual/reiniciar; pasar al siguiente. |
| ← (Flecha izquierda) | Cancelar el episodio actual; volver a grabarlo. |
| ESC | Detener la sesión inmediatamente, codificar los vídeos y subir el conjunto de datos. |

:::tip
Si las pulsaciones de tu teclado no responden, puede que necesites hacer un downgrade de tu versión de pynput, por ejemplo instalando la versión 1.6.8.
```bash
pip install pynput==1.6.8
```
:::

**Consejos para recopilar datos**

- **Sugerencia de tarea**: Agarrar objetos en diferentes ubicaciones y colocarlos en un contenedor.
- **Escala**: Graba ≥50 episodios (10 episodios por ubicación).
- **Consistencia**:
  - Mantén las cámaras fijas.
  - Mantén un comportamiento de agarre idéntico.
  - Asegúrate de que los objetos manipulados sean visibles en las imágenes de las cámaras.
- **Progresión**:
  - Comienza con agarres fiables antes de añadir variaciones (nuevas ubicaciones, técnicas de agarre, ajustes de cámara).
  - Evita aumentos rápidos de complejidad para prevenir fallos.

💡 **Regla general**: Deberías ser capaz de realizar la tarea tú mismo solo mirando las imágenes de la cámara en la pantalla.

Si quieres profundizar en este tema importante, puedes consultar la [entrada de blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escribimos sobre qué hace que un conjunto de datos sea bueno.

**Solución de problemas**

Problema específico de Linux:
Si las teclas Flecha derecha/Flecha izquierda/ESC no responden durante la grabación:
- Verifica que la variable de entorno `$DISPLAY` esté configurada (consulta [pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html)).

## Visualizar el conjunto de datos

```bash
echo ${HF_USER}/rebot_test
```

Si subiste los datos, también puedes visualizarlos localmente con el siguiente comando:

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

Si usaste `--dataset.push_to_hub=false` y no subiste los datos, también puedes visualizarlos localmente con:

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Aquí, `seeed_rebot_b601_rs/test` es el nombre personalizado de `repo_id` definido durante la recopilación de datos.

## Reproducir un episodio

:::tip
Inestable, se puede omitir o probar.
:::

Ahora, intenta reproducir el primer conjunto de datos en tu robot:

<!-- TODO: reBot dataset replay command -->
```bash
lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0
```

En este punto, el robot debería realizar las mismas acciones que cuando lo teleoperaste durante la grabación.

## Entrenamiento y evaluación

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulta el tutorial oficial [ACT](https://huggingface.co/docs/lerobot/act)

**Entrenamiento**

Para entrenar una política que controle tu robot, usa el script `python -m lerobot.scripts.train`. Algunos parámetros son obligatorios. Aquí tienes un comando de ejemplo:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/rebot_test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

**Si quieres entrenar en un conjunto de datos local, asegúrate de que el `repo_id` coincida con el nombre usado durante la recopilación de datos y añade `--policy.push_to_hub=false`.**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::tip

Si estás usando una GPU RTX serie 50, necesitas añadir `--dataset.video_backend=pyav` para evitar APIs faltantes en la versión preliminar de torchvision. El comando de entrenamiento se convierte en:

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::

Explicación del comando

- **Especificación del conjunto de datos**: Proporcionamos el conjunto de datos mediante el parámetro `--dataset.repo_id=${HF_USER}/rebot_test`.
- **Pasos de entrenamiento**: Modificamos el número de pasos de entrenamiento usando `--steps=300000`. El algoritmo usa por defecto 800000 pasos; ajústalo según la dificultad de tu tarea. Puedes establecerlo más alto si no estás seguro, ya que se generan puntos de control durante el entrenamiento y la evaluación puede reanudarse desde cualquier punto de control.
- **Tipo de política**: Proporcionamos la política con `policy.type=act`. Del mismo modo, puedes cambiar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `sac`, `smolvla`]. Esto cargará la configuración desde `configuration_act.py`. Es importante destacar que esta política se adaptará automáticamente a los estados de los motores de tu robot, a las acciones de los motores y al número de cámaras, ya que esta información ya está almacenada en tu conjunto de datos.
- **Selección de dispositivo**: Proporcionamos `policy.device=cuda` porque estamos entrenando en una GPU Nvidia, pero puedes usar `policy.device=mps` para entrenar en Apple Silicon.
- **Herramienta de visualización**: Proporcionamos `wandb.enable=true` para visualizar las gráficas de entrenamiento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Esto es opcional, pero si lo usas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

**Evaluación**

Puedes usar la función `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) pero con un punto de control de política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
```

1. El parámetro `--policy.path` indica la ruta al archivo de pesos de los resultados del entrenamiento de tu política (por ejemplo, `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`). Si subes el archivo de pesos de los resultados del entrenamiento del modelo a Hub, también puedes usar el repositorio del modelo (por ejemplo, `${HF_USER}/act_rebot_test`).
2. El nombre del conjunto de datos `dataset.repo_id` comienza con `eval_`. Esta operación grabará por separado vídeos y datos durante la evaluación, que se guardarán en la carpeta que comienza con `eval_`, como `seeed/eval_test123`.
3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante la fase de evaluación, elimina primero la carpeta que comienza con `eval_` y luego ejecuta de nuevo el programa.
4. Cuando te encuentres con `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, ten en cuenta que palabras clave como `front` y `side` en el parámetro `--robot.cameras` deben ser estrictamente coherentes con las utilizadas al recopilar el conjunto de datos.

</details>

<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

Consulta el tutorial oficial [SmolVLA](https://huggingface.co/docs/lerobot/smolvla).

SmolVLA es un **modelo base ligero para robótica** proporcionado por Hugging Face. Está diseñado para permitirte tomar tu propio conjunto de datos LeRobot grabado y **ajustarlo finamente rápidamente** para obtener resultados en robots reales.

En pocas palabras, sus entradas/salidas son:

- Entrada: secuencias de varias cámaras + estado actual del robot (sensores/articulaciones, etc.) + una instrucción de tarea en lenguaje natural
- Salida: un fragmento de acción continua para mover el brazo robótico y ejecutar la tarea

```bash
pip install -e ".[smolvla]"
```

**Recopilación de conjuntos de datos (recomendado)**

SmolVLA es un "modelo base". Para que funcione bien en tu mesa, con tus cámaras, pinza y objetos, normalmente necesitas ajustarlo finamente con tus propios datos.

- Comienza con ~50 episodios (muy pocos pueden conducir a un aprendizaje/generalización deficientes).
- Si tu tarea tiene "variables" (por ejemplo, diferentes posiciones del cubo en la mesa), asegúrate de que cada variación tenga suficientes demostraciones:
  - Ejemplo: 5 posiciones × 10 episodios cada una = 50 episodios
- Experiencia: Grabar solo 25 episodios suele ser insuficiente. Tanto la calidad como la cantidad de datos importan.

**Entrenamiento**

Usa `smolvla_base` (el modelo preentrenado de 450M) como punto de partida y ajústalo finamente en tu conjunto de datos. El ejemplo oficial entrena durante 20k pasos; en una sola A100 esto lleva unas 4 horas (solo como referencia; el tiempo real varía según el hardware).

Si no tienes una GPU disponible, considera entrenar mediante un cuaderno de Colab (consulta el tutorial oficial).

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

Consejos:

- Si te quedas sin memoria, reduce primero `--batch_size`. Una vez que funcione, ve aumentándolo gradualmente.
- Para ver los parámetros disponibles: `lerobot-train --help`

**Evaluación**

La fase de evaluación carga tu modelo ajustado, permite que el robot realice la tarea y registra el proceso de evaluación como un nuevo conjunto de datos (para revisar vídeos y analizar resultados).

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=${HF_USER}/FINETUNE_MODEL_NAME
```

Cómo rellenar los parámetros:

- `--robot.port`: Cámbialo al puerto serie reconocido en tu máquina (normalmente `can0` o `/dev/ttyACM0`).
- `--robot.id`: El ID de tu robot (debe coincidir con el que usaste durante la calibración/registro).
- `--robot.cameras`: Cámbialo al `index_or_path` de tu cámara real y asegúrate de que las claves de cámara (por ejemplo, `front`, `side`) coincidan exactamente con las que usaste al registrar el conjunto de datos.
- `--dataset.single_task`: Debe coincidir con la descripción de la tarea utilizada al registrar el conjunto de datos.
- `--dataset.repo_id`: El nombre del conjunto de datos de salida de la evaluación; si has iniciado sesión en Hugging Face, se creará/cargará en tu cuenta.
- `--policy.path`:
  - Si el modelo es local: rellena la ruta de los pesos dentro del directorio de salida del entrenamiento (por ejemplo, `outputs/train/my_smolvla/checkpoints/last/pretrained_model`)
  - Si el modelo está en Hub: rellena `${HF_USER}/FINETUNE_MODEL_NAME`

Opcional: Si quieres "teleoperar manualmente para ajustar" entre episodios de evaluación, puedes añadir teleop (rellena según tu dispositivo y configuración):

```bash
--teleop.type=rebot_arm_102_leader \
--teleop.port=/dev/ttyUSB0 \
--teleop.id=rebot_arm_102_leader
```

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulta el tutorial oficial [Pi0](https://huggingface.co/docs/lerobot/pi0).

π₀ (Pi0) es un modelo de **Visión-Lenguaje-Acción** propuesto por Physical Intelligence para un control robótico más "general". Puedes pensar en él así: puede ver imágenes de la cámara y entender una instrucción en lenguaje natural, y luego generar acciones para controlar el brazo robótico.

Usarlo en LeRobot es sencillo: solo tienes que establecer el tipo de política a `--policy.type=pi0` durante el entrenamiento (no es necesario repetir los conceptos generales de entrenamiento/evaluación cubiertos en la sección ACT).

```bash
pip install -e ".[pi]"
```

:::tip
Si estás usando una versión antigua de LeRobot (por ejemplo, 0.4.0), puede que necesites instalar la dependencia `pi` desde el código fuente de GitHub (la documentación oficial lo corregirá en un parche posterior):

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**Entrenamiento**

```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

Parámetros comunes (solo los específicos de Pi0 / los que se ajustan con más frecuencia):

- `--policy.pretrained_path=lerobot/pi0_base`: Modelo base. Oficialmente también se proporciona `lerobot/pi0_libero` (versión orientada al conjunto de datos Libero); puedes probar a cambiarlo según tu tarea.
- `--policy.compile_model=true`: Activa la optimización por compilación; el entrenamiento puede ser más rápido (la primera compilación es más lenta).
- `--policy.gradient_checkpointing=true`: Ahorra significativamente VRAM, adecuado cuando la VRAM es limitada.
- `--policy.dtype=bfloat16`: Precisión mixta, más amigable para la velocidad/VRAM (recomendado cuando el hardware lo soporta).
- `--policy.train_expert_only=true` (truco para ahorrar VRAM): Congela la parte del modelo grande (VLM) y solo entrena el "experto de acción" y las capas de proyección; ahorra más VRAM pero la capacidad entrenable es más limitada, adecuado para empezar o para experimentos rápidos con pocos datos.

**Evaluación**

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulta el tutorial oficial [Pi0.5](https://huggingface.co/docs/lerobot/pi05).

π₀.₅ (Pi0.5) también es un modelo de **Visión-Lenguaje-Acción** propuesto por Physical Intelligence, que puede entenderse como una "versión mejorada" de π₀, centrada en mejorar la capacidad de **generalización en mundo abierto**: no solo rinde bien en escenarios fijos vistos durante el entrenamiento, sino que también completa tareas de forma más fiable en habitaciones nuevas, con objetos nuevos y en nuevas disposiciones.

La "generalización" que aborda puede dividirse aproximadamente en tres niveles (ejemplos para entenderlo):

- **Capa física**: Agarrar una cuchara/plato desconocido sabiendo cómo sujetarlo (mango/borde) y operar en entornos desordenados.
- **Capa semántica**: Entender "dónde poner las cosas / qué herramienta usar", por ejemplo, los zapatos deben ir en el zapatero, la ropa en el cesto de la ropa sucia.
- **Capa ambiental**: Adaptarse a escenarios "desordenados" más realistas, como hogares, oficinas, hospitales, etc.

Para usarlo en LeRobot: simplemente establece el tipo de política a `--policy.type=pi05`.

```bash
pip install -e ".[pi]"
```

:::tip
Si estás usando una versión antigua de LeRobot (por ejemplo, 0.4.0), puede que necesites instalar la dependencia `pi` desde el código fuente de GitHub (la documentación oficial lo corregirá en un parche posterior):

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**Entrenamiento**

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

Parámetros comunes (relacionados con Pi0.5):

- `--policy.pretrained_path=lerobot/pi05_base`: Modelo base. Oficialmente también se proporciona `lerobot/pi05_libero`.
- `--policy.train_expert_only=true` (truco para ahorrar VRAM): Congela la parte del modelo grande (VLM) y solo entrena el "experto de acción" y las capas de proyección.
- `--policy.normalization_mapping=...`: Si las estadísticas de normalización de tu conjunto de datos no coinciden o faltan, puedes usar este mapeo para forzar un método de normalización.

Si tu conjunto de datos no tiene estadísticas de cuantiles (requeridas por algunas versiones/formatos), oficialmente también se proporciona un enfoque con script de conversión: completar/convertir las estadísticas del conjunto de datos antes del entrenamiento (consulta la documentación oficial para más detalles).

**Evaluación**

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulta el tutorial oficial [GR00T N1.5](https://huggingface.co/docs/lerobot/groot).

GR00T N1.5 es un modelo base abierto proporcionado por NVIDIA para un razonamiento robótico y aprendizaje de habilidades más generales. Es un modelo de **cuerpo cruzado**: puede recibir entradas multimodales como **lenguaje** e **imágenes**, y ejecutar tareas de manipulación en diferentes entornos.

La clave para usarlo en LeRobot es establecer el tipo de política a `--policy.type=groot`. Nota: GR00T N1.5 actualmente tiene mayores requisitos de entorno (depende de FlashAttention y requiere una GPU CUDA). Se recomienda hacer funcionar primero ACT / Pi0 antes de probar GR00T.

**Instalación (Importante)**

Según la documentación oficial, GR00T N1.5 requiere **flash-attn** para funcionar y solo puede usarse en **dispositivos con capacidad CUDA**.

Pasos recomendados (ejecutar en orden):

1. Configura primero el entorno base (Python, CUDA, drivers, etc.) siguiendo la guía de instalación. **No instales `lerobot` en este paso**.
2. Instala PyTorch (rango de versiones según los requisitos oficiales):

```bash
pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
```

:::tip
Si estás usando la serie RTX 50, necesitas: Python=3.10, CUDA=12.8, Torch=2.7.1

```bash
pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128
```
:::

3. Instala la dependencia flash-attn y flash-attn en sí:

```bash
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
```

:::tip
Si estás utilizando la serie RTX 50, necesitas: flash_attn=2.8.0

```bash
pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation
```
:::

4. Instala la dependencia groot de LeRobot:

```bash
pip install "lerobot[groot]"
```

:::tip
Si la instalación de flash-attn falla, normalmente se debe a (1) una incompatibilidad entre las versiones de PyTorch/CUDA, (2) dependencias de compilación faltantes o (3) un entorno demasiado nuevo/demasiado antiguo. En este caso, consulta primero la documentación oficial de GR00T y la guía de instalación de PyTorch.
:::

**Entrenamiento (Fine-tuning)**  

El repositorio oficial proporciona un ejemplo de entrenamiento multi-GPU (`accelerate launch --multi_gpu ...`). Si solo tienes una GPU, también puedes intentar ejecutarlo primero en modo de proceso único (el soporte y los detalles de los parámetros están sujetos a la documentación oficial).

Multi-GPU (es necesario reemplazar las variables):

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME
```

Explicación de parámetros (los más modificados habitualmente):

- `--dataset.repo_id`: Tu conjunto de datos de entrenamiento (`username/dataset_name` en Hub o la caché local correspondiente a `repo_id`).
- `--output_dir`: Directorio de salida del entrenamiento (aquí se guardarán los pesos/checkpoints).
- `--steps`, `--batch_size`: Pasos de entrenamiento y tamaño de lote. Los modelos grandes son sensibles a la VRAM; si no se ejecuta, reduce primero `batch_size`.
- `--policy.repo_id`: Si quieres subir el modelo a Hub, rellena el nombre del repositorio de modelo que quieres crear.

**Evaluación (Ejecución en el robot)**  

Después del entrenamiento, puedes usar `lerobot-record` para evaluación/registro igual que con otras políticas. Para usuarios de brazo único reBot B601-RS, consulta el siguiente comando:

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

Licencia: Este modelo sigue la licencia Apache 2.0 (coherente con el repositorio original de GR00T).

</details>

<details>
<summary>(Opcional) Fine-tuning eficiente con PEFT</summary>

PEFT (Parameter-Efficient Fine-Tuning) es un conjunto de métodos y herramientas de "adaptación eficiente en parámetros" para adaptar grandes modelos preentrenados a nuevas tareas **sin actualizar todos los parámetros del modelo**. Para las políticas preentrenadas de LeRobot (por ejemplo, SmolVLA, π₀, etc.), normalmente puedes entrenar solo un pequeño número de parámetros "adaptadores" (por ejemplo, LoRA) para lograr resultados cercanos al fine-tuning completo, reduciendo al mismo tiempo el uso de VRAM y el coste de entrenamiento.

**Instalación**

Instala la dependencia opcional `peft` de LeRobot para usar parámetros relacionados con PEFT:

```bash
# Method 1: Source installation (in the lerobot root directory)
pip install -e ".[peft]"
```

```bash
# Method 2: pip installation
pip install "lerobot[peft]"
```

Para más métodos de adaptación y explicaciones de conceptos, consulta la documentación oficial:
[🤗 PEFT Documentation](https://huggingface.co/docs/peft/index)

**Ejemplo: Fine-tuning de SmolVLA con LoRA (subtarea libero_spatial de Libero)**

El siguiente ejemplo muestra cómo realizar fine-tuning con LoRA de `lerobot/smolvla_base` en el conjunto de datos `HuggingFaceVLA/libero`. Los nombres de los parámetros se basan en la versión actual de LeRobot; consulta también `lerobot-train --help`.

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64
```

**Parámetros PEFT clave**

- `--peft.method_type`: Selecciona el método PEFT. LoRA (Low-Rank Adapter) es uno de los métodos más utilizados.
- `--peft.r`: Rango de LoRA. En general, un rango mayor implica mayor capacidad de expresión, pero también más parámetros y mayor uso de VRAM.

**Especificar las capas donde inyectar LoRA (Opcional)**

Por defecto, PEFT suele inyectar LoRA en las capas de proyección más críticas del modelo (por ejemplo, `q_proj`, `v_proj` de la atención, etc.), y puede además cubrir capas de proyección relacionadas con estado/acción. Si necesitas apuntar a capas diferentes, usa `--peft.target_modules` para especificar las capas objetivo.

Los patrones habituales incluyen:

1) Por lista de sufijos de nombre de módulo (ejemplo):

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2) Usando una expresión regular (ejemplo, ajusta según los nombres reales de los módulos):

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**Especificar ciertas capas para entrenamiento completo (Opcional)**

Si quieres que ciertos módulos se "entrenen completamente" (en lugar de solo inyectar LoRA), usa `--peft.full_training_modules` para especificarlos. Por ejemplo, entrenar completamente solo `state_proj`:

```bash
--peft.full_training_modules="['state_proj']"
```

**Recomendaciones de tasa de aprendizaje (valores de experiencia)**

La tasa de aprendizaje de LoRA normalmente puede ser un orden de magnitud mayor que la del fine-tuning completo (experiencia común: ~10x). Por ejemplo, el fine-tuning completo suele usar `1e-4`, mientras que LoRA puede empezar desde `1e-3`; si tienes activada la disminución de la tasa de aprendizaje (scheduler), la tasa de aprendizaje final también suele fijarse alrededor de `1e-4` como referencia.

</details>

<details>
<summary>(Opcional) Entrenamiento Multi-GPU</summary>

**1. Pasos de entrenamiento**

**Método uno: Entrenamiento multi-GPU mediante argumentos de línea de comandos**

Primero, instala el sistema de aceleración de entrenamiento en tu entorno de lerobot:

```bash
pip install accelerate
```

Luego ejecuta el siguiente comando para iniciar el entrenamiento multi-GPU:

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

Explicación de los parámetros clave de accelerate:

- `--multi_gpu`: Habilita el entrenamiento multi-GPU
- `--num_processes=2`: Número de GPUs a utilizar (normalmente igual al número de GPUs)
- `--mixed_precision=fp16`: Usa precisión mixta fp16 (o bf16 si tu hardware lo soporta)

Ten en cuenta que **bf16 requiere soporte de hardware** y no está disponible en todas las GPUs.

| Tipo de precisión | Soporte de hardware |
|--|--|
| fp16 | Soportado por casi todas las GPUs de NVIDIA |
| bf16 | Solo soportado en GPUs más recientes (arquitectura Ampere y posteriores) |

Si tu GPU no soporta bf16, elige fp16 en tu configuración de accelerate, o especifica explícitamente fp16 en la línea de comandos.

**Método dos: Usar un archivo de configuración de Accelerate (Opcional)**

Si realizas entrenamiento multi-GPU con frecuencia, puedes guardar la configuración de entrenamiento anterior para evitar introducir repetidamente los parámetros en la línea de comandos.

> **Consejo**: Si no entiendes esta sección, o solo quieres empezar rápidamente,
> **puedes omitir esta sección y usar el Método uno (argumentos de línea de comandos).**

El propósito de `accelerate config` es:

**Guardar tu entorno de hardware (número de GPUs, precisión mixta, etc.) como un archivo de configuración,
para que no necesites volver a rellenar estos parámetros al ejecutar `accelerate launch` en el futuro.**

No cambia ninguna lógica de entrenamiento de LeRobot; solo reduce la introducción repetitiva de parámetros.

Si solo **usas ocasionalmente multi-GPU**, o es tu primer intento, **está perfectamente bien no usarlo**.

---

Ejecuta:

```bash
accelerate config
```

En el proceso de configuración interactiva, para el escenario común de una sola máquina con múltiples GPUs, puedes seleccionar lo siguiente:

- Entorno de cómputo: Esta máquina
- Número de máquinas: 1
- Número de procesos: Número de GPUs a utilizar (normalmente igual al número de GPUs)
- IDs de GPU a usar: Pulsa Intro directamente (significa usar todas las GPUs)
- Precisión mixta:
  - Preferir fp16
  - Si confirmas que la GPU soporta bf16, también puedes elegir bf16

Después de la configuración, puedes entrenar con:

```bash
accelerate launch $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

**Impacto del entrenamiento multi-GPU en los parámetros de entrenamiento y estrategias de ajuste**

LeRobot no ajusta automáticamente la tasa de aprendizaje ni los pasos de entrenamiento en función del número de GPUs, para evitar cambiar el comportamiento de entrenamiento sin que el usuario lo sepa. Esto difiere de otros frameworks de entrenamiento distribuido de uso común.

Si quieres **ajustar los hiperparámetros para el entrenamiento multi-GPU**, debes hacerlo manualmente siguiendo estos pasos.

**Impacto en los pasos y estrategia de ajuste**

Dado que el multi-GPU aumenta el tamaño de lote efectivo (batch_size × num_gpus):

(Para entenderlo de forma intuitiva: si el entrenamiento es como caminar, una GPU da un paso de un metro, dos GPUs dan un paso de dos metros. Para alcanzar la misma distancia (cantidad total de datos aprendidos por el modelo), el entrenamiento con dos GPUs debería reducir los pasos a la mitad. De forma similar, n GPUs = 1/n.)

Por lo tanto, al entrenar con múltiples GPUs, deberías reducir adecuadamente el número de pasos de entrenamiento.

Entrenamiento con una sola GPU:

- batch_size = 8
- steps = 100000

Entrenamiento con dos GPUs (el tamaño de lote efectivo pasa a ser 16):

- batch_size, si aún está configurado en 8
- los steps se pueden reducir a 50000

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --batch_size=8 \
  --steps=50000 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

**Impacto en la tasa de aprendizaje y estrategia de ajuste**

Al usar múltiples GPU, cada actualización de step utiliza más muestras.

Si quieres mantener la "velocidad de aprendizaje" del modelo similar a la de una sola GPU,
normalmente necesitas aumentar la tasa de aprendizaje proporcionalmente al número de GPU.

- Nueva tasa de aprendizaje = tasa de aprendizaje de una sola GPU × número de GPU

Por ejemplo:

Si la tasa de aprendizaje de una sola GPU (optimizer.lr) es 1e-4,
al usar 2 GPU, puedes cambiarla a 2e-4:

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --optimizer.lr=2e-4 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

Nota:

Estas no son reglas obligatorias, sino buenas prácticas comunes.

Si no estás seguro de cómo ajustar, también puedes:

- Mantener la tasa de aprendizaje sin cambios
- Mantener los steps de entrenamiento sin cambios

Mientras el proceso de entrenamiento sea estable, los resultados siguen siendo utilizables.

Para configuraciones más avanzadas y resolución de problemas, consulta la documentación de [Accelerate](https://huggingface.co/docs/accelerate/index). Si quieres aprender más sobre entrenamiento con un gran número de GPU, revisa esta excelente guía: [Ultrascale Playbook](https://github.com/huggingface/ultrascale-playbook).
</details>

<details>
<summary>(Opcional) Uso de inferencia asíncrona para despliegue</summary>

Sin inferencia asíncrona, el flujo de control de LeRobot puede entenderse como inferencia secuencial/sincrónica convencional: la política predice un bloque de acciones, luego lo ejecuta y después espera la siguiente predicción. Para modelos más grandes, esto puede causar pausas notables mientras el robot espera nuevos bloques de acciones. El objetivo de la inferencia asíncrona es permitir que el robot ejecute el bloque de acciones actual mientras se precomputa el siguiente, reduciendo el tiempo de inactividad y mejorando la capacidad de respuesta. La inferencia asíncrona se aplica a las políticas compatibles con LeRobot que generan bloques de acciones, como ACT, OpenVLA, Pi0, SmolVLA. Dado que la inferencia y el control real están desacoplados, la inferencia asíncrona también permite usar máquinas más potentes para la inferencia del robot de forma remota.

Puedes leer más sobre inferencia asíncrona en esta [entrada de blog](https://huggingface.co/blog/async-robot-inference) de Hugging Face.

Presentemos algunos conceptos básicos:

- **Cliente**: Se conecta al brazo robótico y a las cámaras, recopila observaciones (imágenes, pose del robot, etc.), las envía al servidor; también recibe bloques de acciones del servidor y los ejecuta en orden.
- **Servidor**: El dispositivo que proporciona capacidad de cómputo. Recibe datos de la cámara y del robot, infiere (calcula) bloques de acciones y los envía de vuelta al cliente. Puede ser el mismo dispositivo conectado al robot y a las cámaras, otro ordenador en la misma LAN o un servidor en la nube.
- **Bloque de acciones**: Una serie de comandos de acción del brazo robótico, producidos por la política mediante inferencia en el servidor.
- **Inferencia sincrónica**: Predecir un bloque, ejecutar un bloque; el robot tendrá intervalos de inactividad esperando a que se infiera el siguiente bloque. Cuando el modelo es más grande y el cómputo es insuficiente, la brecha de inferencia es significativa: el brazo se mueve, luego se detiene (inferencia) y luego se mueve de nuevo.
- **Inferencia asíncrona**: A diferencia de la inferencia sincrónica, mientras el robot ejecuta el bloque actual, el servidor ya está calculando el siguiente bloque; las partes superpuestas se agregan para un control más receptivo.

**Tres escenarios de despliegue con inferencia asíncrona**

**1. Despliegue en una sola máquina**

Robot, cámaras, cliente y servidor están todos en el mismo dispositivo.
Este es el caso más sencillo: el servidor escucha en 127.0.0.1 y el cliente también se conecta a 127.0.0.1:port. Los ejemplos de comandos en la documentación oficial siguen este escenario.

**2. Despliegue en LAN**

El robot y las cámaras se conectan a un dispositivo ligero, y el servidor de la política se ejecuta en otro dispositivo de alto cómputo en la misma LAN.
En este caso, el servidor debe escuchar en una dirección accesible para otras máquinas, y el cliente debe conectarse a la IP de la LAN del servidor, no a 127.0.0.1.

**3. Despliegue entre redes / en la nube**

El servidor de la política se ejecuta en un host en la nube accesible públicamente, y el cliente se conecta a través de una red pública.
Este enfoque puede aprovechar GPU más potentes en hosts en la nube. Con buenas condiciones de red, el tiempo de ida y vuelta (latencia de red) puede ser relativamente pequeño en comparación con el tiempo de inferencia, pero esto depende de tu entorno de red real.

> Nota de seguridad: El flujo de inferencia asíncrona de LeRobot tiene riesgos de gRPC sin autenticación + deserialización con pickle. Si el servidor aloja información o servicios importantes, no se recomienda exponer el servicio directamente a Internet pública al desplegar en una red pública. Un enfoque más seguro es usar VPN, túneles SSH o, como mínimo, restringir las IP de origen del grupo de seguridad a la IP pública de tu cliente.

**Inicio del despliegue con inferencia asíncrona**

**Paso 1: Configuración del entorno**

Primero, instala con pip las dependencias adicionales necesarias para la inferencia asíncrona. Tanto el cliente como el servidor necesitan tener lerobot instalado con la dependencia extra:

```bash
pip install -e ".[async]"
```

**Paso 2: Configuración y comprobación de red**

**1. Problemas de proxy**

Si tu terminal tiene variables de entorno de proxy configuradas y se producen problemas de conexión, puedes desconfigurarlas temporalmente:

```bash
unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY
```

Nota: El comando anterior solo afecta a la sesión de terminal actual. Si abres una nueva ventana de terminal, necesitas ejecutarlo de nuevo.

**2. Permitir puertos en el firewall / grupos de seguridad**

- Despliegue en una sola máquina: Normalmente se puede omitir.
- Despliegue en LAN: Necesitas permitir el puerto de escucha en el lado del servidor.
  Ejemplo de permitir un puerto de escucha en la LAN (ejecutar en el servidor):

```bash
sudo ufw allow 8080/tcp
```

- Despliegue en la nube: Necesitas permitir el puerto en el grupo de seguridad del servidor en la nube e idealmente restringir las IP de origen.

Si se ejecuta en un servidor en la nube:
Permite el puerto 8080 en el grupo de seguridad en la página de gestión del servidor, o usa otro puerto ya permitido. Los métodos varían según el proveedor de la nube.

**3. Confirmar la dirección IP**

El despliegue en una sola máquina puede omitir este paso (la IP siempre es 127.0.0.1).

**4. Prueba de conexión**

- Despliegue en una sola máquina: Omite este paso.
- Despliegue en LAN / nube: Se recomienda probar si el cliente puede acceder al puerto del servidor:

```bash
nc -vz <LAN_IP_address> 8080
```

```bash
nc -vz <server_public_IP> 8080
```

**Paso 3: Iniciar el servicio**

**Escenario A: Despliegue en una sola máquina**

Inicia el servicio local en una terminal:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080
```

Después de que se inicie correctamente, debes mantener esta terminal abierta y crear una nueva terminal para ejecutar otros comandos.

**Escenario B: Despliegue en LAN**

Ejecutar en el servidor:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

Cuando el cliente se conecte, `--server_address` debe usar la dirección IP de la LAN del servidor: `<LAN_IP_address>:8080`.

**Escenario C: Despliegue en servidor en la nube**

Ejecutar en el servidor:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

Cuando el cliente se conecte, `--server_address` debe usar la dirección IP pública del servidor: `<server_public_IP>:8080`.

**Paso 4: Elegir parámetros de inferencia**

Ejecutar en el cliente:

```bash
python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false
```

Explicación de parámetros clave:

- `--server_address`: Dirección del servidor. Usa `127.0.0.1:port` para una sola máquina y la IP del servidor para LAN/nube.
- `--actions_per_chunk`: Tamaño de cada bloque de acciones (número de acciones). Valores más grandes significan menor frecuencia de inferencia pero resultados por inferencia más estables; valores más pequeños significan movimiento más suave pero más carga de inferencia en el servidor.
- `--chunk_size_threshold`: Umbral de mezcla entre bloques de acciones antiguos y nuevos. Cuando el bloque antiguo se ha ejecutado hasta esta proporción, comienza la mezcla con el nuevo bloque.
- `--fixed_update_fps`: Frecuencia de envío de comandos de control, correspondiente a la suavidad del movimiento del brazo robótico.
- `--visualize_action_queue`: Si se debe visualizar el tamaño de la cola de acciones en tiempo de ejecución. Cuando está activado, puedes ver de forma más intuitiva si la cola llega con frecuencia al fondo, lo que te ayuda a ajustar actions_per_chunk y chunk_size_threshold.

**Paso 5: Ajustar parámetros según el comportamiento del robot**

En la inferencia asíncrona, hay dos parámetros adicionales que no están presentes en la inferencia sincrónica y que necesitan ajuste:

- `--actions_per_chunk`: Tamaño de cada bloque de acciones. Si el movimiento del robot es entrecortado/brusco, aumenta este valor; si la respuesta del robot tiene un retraso notable, disminuye este valor.
- `--chunk_size_threshold`: Umbral de mezcla entre bloques de acciones antiguos y nuevos. Normalmente se empieza probando desde `0.5`.

La inferencia asíncrona necesita equilibrar: la velocidad de generación de bloques de acciones del servidor debe ser mayor o igual que la velocidad de consumo del cliente. De lo contrario, la cola de acciones se vaciará y el robot comenzará a tartamudear (esto se puede ver en la curva de visualización de la cola tocando fondo).

</details>

## FAQ

- Si estás siguiendo este tutorial de documentación, por favor haz git clone del repositorio de GitHub recomendado `https://github.com/Seeed-Projects/lerobot.git`. El repositorio recomendado en esta documentación es una versión estable verificada; el repositorio oficial de LeRobot se actualiza continuamente a la última versión, lo que puede causar problemas imprevistos como diferentes versiones de conjuntos de datos, diferentes comandos, etc.

- Si te encuentras con:
  ```bash
  Could not connect on port "/dev/ttyUSB0" or "/dev/ttyACM0"
  ```
  Y puedes ver que el dispositivo existe al ejecutar `ls /dev/ttyUSB*` o `ls /dev/ttyACM*`, significa que olvidaste otorgar permisos al puerto serie. Introduce `sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*` en la terminal para solucionarlo.

- Si te encuentras con:
  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```
  Instala ffmpeg 7.1.1 usando `conda install ffmpeg=7.1.1 -c conda-forge`.

- Entrenar ACT con 50 conjuntos de datos lleva aproximadamente 6 horas en un portátil con una RTX 3060 (8GB), y alrededor de 2-3 horas en equipos con GPUs RTX 4090 o A100.

- Durante la recopilación de datos, asegúrate de que la posición de la cámara, el ángulo y la iluminación ambiental sean estables. Reduce la cantidad de fondo inestable y de peatones capturados por la cámara, ya que cambios excesivos en el entorno de despliegue pueden hacer que el brazo robótico no pueda agarrar correctamente.

- Para el comando de recopilación de datos, asegúrate de que el parámetro `num-episodes` esté configurado para recopilar suficientes datos. No pauses manualmente a mitad de camino, ya que la media y la varianza de los datos se calculan solo después de que la recopilación de datos se haya completado, y son necesarias para el entrenamiento.

- Si el programa indica que no puede leer datos de imagen desde la cámara USB, asegúrate de que la cámara USB no esté conectada a través de un hub. La cámara USB debe estar conectada directamente al dispositivo para garantizar una alta velocidad de transmisión de imágenes.

:::tip
Si encuentras problemas de software o de dependencias de entorno que no se puedan resolver, además de consultar la sección de Preguntas Frecuentes al final de este tutorial, informa del problema de inmediato en la [plataforma LeRobot](https://github.com/huggingface/lerobot) o en el [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

## Referencias

Wiki en inglés de Seeed Studio: [Cómo usar el brazo robótico SO100Arm en Lerobot](https://wiki.seeedstudio.com/es/lerobot_so100m/)

Proyecto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Proyecto Huggingface: [LeRobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
