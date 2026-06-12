---
description: Este wiki proporciona una guía completa para que reBot Arm B601-DM implemente la recopilación de datos y el entrenamiento dentro del framework LeRobot.
title: Introducción a reBot Arm B601-DM en LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15T00:00:00.000Z
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-04-09'
updatedAt: '2026-04-30'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/
---


# Introducción a reBot Arm B601-DM basado en LeRobot y reBot 102 Leader


![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Brazo robótico de 6 GDL · Soporte multi-motor · Solucionador de cinemática · Planificación de trayectorias · Totalmente de código abierto</strong>
</p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>



[reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/) es un proyecto de brazo robótico de código abierto lanzado por Seeed, dedicado a reducir el umbral para aprender inteligencia incorporada. Abrimos sin reservas todos los diseños estructurales y el código, haciendo que la tecnología robótica sea accesible para todos.

[LeRobot](https://github.com/huggingface/lerobot/tree/main) se compromete a proporcionar modelos, conjuntos de datos y herramientas para robótica en el mundo real en PyTorch. Su objetivo es reducir la barrera de entrada a la robótica, permitiendo que todos contribuyan y se beneficien del intercambio de conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones en el mundo real, centrándose en el aprendizaje por imitación y el aprendizaje por refuerzo. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos con demostraciones recopiladas por humanos y entornos de simulación, lo que permite a los usuarios comenzar sin necesidad de ensamblar robots.

### 📖 Introducción al proyecto

**reBot-DevArm (reBot Arm B601 DM y reBot Arm B601 RS)** es un proyecto de brazo robótico dedicado a reducir el umbral para aprender inteligencia incorporada. Nos centramos en el **"Verdadero Código Abierto"** — no solo código, abrimos sin reservas todo lo siguiente:
- 🦾 **Brazos robóticos de código abierto con dos versiones de motor**: Proporcionamos todos los archivos de código abierto para las versiones de motor RoboStride y Damiao con la misma apariencia.
- 🛠️ **Planos de hardware**: Archivos fuente de piezas de chapa metálica y piezas impresas en 3D.
- 🔩 **BOM (Lista de Materiales)**: Detallada hasta la especificación de cada tornillo y enlace de compra.
- 💻 **Software y algoritmos**: Python SDK, ROS1/2, Isaac Sim, LeRobot, etc.

## Construye tu brazo robótico reBot

- Ofrecemos cinco opciones de kit:
  - **Kit de motores del cuerpo del brazo robótico**: Incluye solo los motores y arneses de cableado necesarios para el brazo robótico.
  - **Kit de piezas estructurales del cuerpo del brazo robótico**: Incluye solo los componentes mecánicos estructurales.
  - **Kit completo de pinza**: Incluye motores, arneses de cableado y piezas estructurales para la pinza.
  - **Kit completo de brazo**: Incluye todos los componentes para el cuerpo del brazo robótico y la pinza.
  - **Brazo robótico preensamblado**: Un brazo robótico completamente ensamblado.

El kit de robot inteligente reBot-DevArm y reComputer Jetson AI combina a la perfección el control de brazo robótico de alta precisión con una potente plataforma de computación de IA, proporcionando una solución integral de desarrollo de robots. Este kit se basa en la plataforma Jetson Orin o AGX Orin, combinada con reBot-DevArm y el framework de IA LeRobot, ofreciendo a los usuarios un sistema de robot inteligente aplicable a múltiples escenarios como educación, investigación y automatización industrial.

Este wiki proporciona tutoriales de depuración para reBot-DevArm e implementa la recopilación de datos y el entrenamiento dentro del framework LeRobot.

:::caution
Los tutoriales de Seeed Studio se actualizan estrictamente de acuerdo con la documentación oficial. Si encuentras problemas de software o de entorno que no se puedan resolver, primero consulta las Preguntas Frecuentes al final del artículo, o contacta con atención al cliente para unirte al grupo de discusión SeeedStudio LeRobot. También puedes hacer preguntas aquí: [LeRobot GitHub](https://github.com/huggingface/lerobot) o en el [Discord Channel](https://discord.gg/8TnwDdjFGU).
:::

## 🔧 Características de la Serie reBot B601-DM:

1. **Código abierto y bajo costo**
   reBot Arm es una solución de brazo robótico de código abierto y bajo costo de Seeed Studio, dedicada a reducir el umbral para aprender inteligencia incorporada.

2. **Integración con la plataforma LeRobot**
   Diseñado para la integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma proporciona modelos PyTorch, conjuntos de datos y herramientas para el aprendizaje por imitación de tareas de robots reales (incluyendo recopilación de datos, simulación, entrenamiento y despliegue).

3. **Abundantes recursos de aprendizaje**
   Proporciona completos recursos de aprendizaje de código abierto, incluyendo guías de ensamblaje y calibración, tutoriales de prueba y recopilación de datos, documentación de entrenamiento y despliegue para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.

4. **Compatible con la plataforma Nvidia**
   Admite el despliegue a través de la plataforma reComputer Mini J4012 Orin NX 16GB.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/PoMv3mw8SGk" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/mWrWeqAPDSY" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

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

### 3. Clonar paquetes de funciones

Clona dos paquetes de funciones dependientes en el directorio rebot_lerobot:

:::tip
Para funciones detalladas de los paquetes de funciones, consulta:
- [lerobot-teleoperator-rebot-arm-102](https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102)
- [lerobot-robot-seeed-b601](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601)
:::

```bash
cd ~/rebot_lerobot

# Clone rebot 102 leader function package
git clone https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102.git

# Clone rebot b601 follower function package
git clone https://github.com/Seeed-Projects/lerobot-robot-seeed-b601.git
```

### 4. Crear entorno Conda e instalar LeRobot

El repositorio lerobot ya tiene un pyproject.toml. Crea un entorno conda e instala todas las dependencias.

```bash
cd ~/rebot_lerobot

# Create conda environment (Python 3.12)
conda create -y -n lerobot python=3.12

# Activate environment
conda activate lerobot

# Install lerobot main project (editable mode)
pip install -e ./lerobot

# Add local dependency packages (editable install)
pip install -e ./lerobot-teleoperator-rebot-arm-102
pip install -e ./lerobot-robot-seeed-b601
pip install motorbridge
```

### 5. Instalar ffmpeg

ffmpeg es una dependencia de decodificación de video, instálalo vía conda:

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

### 6. Configuración especial para dispositivos Jetson JetPack 6.0+

(Omite este paso para PC) Para dispositivos Jetson JetPack 6.0+ (asegúrate de haber instalado Pytorch-gpu y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies via conda, for Jetson Jetpack 6.0+ only
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Install specific OpenCV version using pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This version must be compatible with torchvision
```

### 7. Comprobar Pytorch y Torchvision

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

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v8Ek1Ad1VWo" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

A continuación, debes conectar la fuente de alimentación y el cable de datos a tu robot reBot B601-DM para realizar la calibración y asegurarte de que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot reBot B601-DM funcione en otro. Si necesitas recalibrar el brazo robótico, elimina completamente los archivos bajo `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y vuelve a calibrar el brazo robótico. De lo contrario, aparecerá un mensaje de error. La información de calibración del brazo robótico se almacenará en los archivos JSON de este directorio.

Primero, debes otorgar permisos de interfaz ejecutando los siguientes comandos:

```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
```

### Calibrar el brazo seguidor

El B601-DM solo necesita calibrarse una vez después del montaje. Aquí está el comando de calibración. Consulta la figura para la posición cero (pinza completamente cerrada).

```bash
sudo chmod 666 /dev/ttyACM*  # follower arm (serial bridge)

lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" />
  </div>

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
- reBot 102 leader utiliza un módulo USB-a-UART, que normalmente se asigna a `/dev/ttyUSB*`
- Usa `ls /dev/ttyUSB*` para comprobar el número de puerto real

Si es la primera conexión, es posible que obtengas un error indicando que no se puede encontrar `/dev/ttyACM0`. Esto se debe a que brltty está ocupando el puerto serie. Ejecuta los siguientes pasos:

```bash
sudo dmesg | grep ttyUSB #Check the last line shows "disconnected"
sudo apt remove brltty #Remove brltty
```
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
</div>

Siguiendo las indicaciones, mueve el brazo líder a la posición cero mostrada arriba,

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

Mantenlo quieto y luego presiona Enter hasta que la calibración se complete.
Después de la calibración, introduce el siguiente comando para probar el brazo líder.

```bash
python ./lerobot-teleoperator-rebot-arm-102/examples/read_raw_angles.py \
      --port /dev/ttyUSB0

#If you observe terminal output similar to the following printing continuously, and when at the zero position shown above, all joint output values are 0, then leader calibration is complete.
#shoulder_pan=    0.00  shoulder_lift=    0.00  elbow_flex=    0.00  wrist_flex=    0.00  wrist_yaw=    0.00  wrist_roll=    0.00  gripper=    0.00
```

</details>

## Teleoperar

:::danger
Durante la teleoperación, si el brazo robótico maestro-esclavo sufre una desconexión de energía, un mal contacto de alimentación o un desprendimiento de la línea de señal, primero debes detener el código del programa y devolver el brazo robótico a su posición cero de origen. Solo entonces vuelve a conectar la fuente de alimentación y reinicia el programa. Esto evita que el desorden de datos provoque que el brazo robótico se descontrole y cause posibles riesgos de seguridad.
:::

Primero otorga permisos a los puertos serie:
```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
```

Ejecuta la teleoperación:
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --teleop.joint_directions='{"shoulder_pan":-1,"shoulder_lift":-1,"elbow_flex":1,"wrist_flex":1,"wrist_yaw":1,"wrist_roll":-1,"gripper":-4}'
```

## Añadir cámaras


<details>
<summary> If using RealSense D435i/D405 </summary>

Las cámaras de profundidad RealSense pueden proporcionar percepción RGB-D para LeRobot y son adecuadas para tareas como reconocimiento de objetos, reconstrucción de nubes de puntos y manipulación sobre mesa. Los modelos recomendados aquí son **RealSense D405** y **RealSense D435i**.

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

La RealSense D405 es una cámara de profundidad estéreo de corto alcance diseñada para tareas de alta precisión a corta distancia, como la manipulación robótica sobre mesa, con un rango de trabajo típico de **7 cm a 50 cm**.

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

La RealSense D435i combina sensado de profundidad, imagen RGB y una IMU, lo que la hace adecuada para aplicaciones de rango medio a corto como reconstrucción 3D, SLAM y percepción del entorno robótico.

### 1. Cambiar a la rama de cámara

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

### 2. Instalar LeRobot en modo editable

Si solo utilizas RealSense:

```bash
pip install -e ".[realsense]"
```

### 3. Otorgar permisos

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

### 4. Detectar cámaras

```bash
lerobot-find-cameras realsense
```

Este paso mostrará:

- Modelo de la cámara
- Número de serie
- Información USB
- Configuración de flujo predeterminada

### 5. Ejemplo con RealSense

Prueba con dos RealSense:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

### 6. Notas sobre parámetros

- `depth_alpha` controla el factor de escala de la imagen de profundidad y se puede ajustar según el resultado de la visualización y el rango de distancia objetivo.
- Si conectas tres o más cámaras de profundidad, se recomienda reducir `fps` a `15` para mejorar la estabilidad general.
- Se recomienda mantener la resolución en `640x480` para un mejor equilibrio entre estabilidad y rendimiento en tiempo real.

</details>

<details>

<summary> If using Orbbec Gemini2 Depth Camera </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

proporcionando flujos sincronizados de RGB y profundidad con una alineación precisa de profundidad a color. Combinada con sensado de profundidad estéreo y una IMU de 6 ejes integrada, es muy adecuada para tareas robóticas como detección de objetos, percepción 3D, mapeo y navegación. Su diseño compacto y el soporte completo del SDK de Orbbec la hacen adecuada tanto para investigación como para despliegues en el mundo real.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

Gemini 336 es un nuevo miembro de la serie Gemini 330. Hereda el sólido rendimiento de profundidad de Gemini 335 y mejora aún más la calidad de la imagen de profundidad en áreas interiores reflectantes, regiones oscuras en escenas de alto rango dinámico y entornos exteriores brillantes. Para aplicaciones de robótica, puede proporcionar datos de profundidad más estables y de alta calidad para tareas como percepción, localización y manipulación.

### 1. Cambiar a la rama de cámara

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

### 2. Instalar LeRobot en modo editable

Si solo utilizas Orbbec:

```bash
pip install -e ".[orbbec]"
```

### 3. Conceder permisos

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

### 4. Detectar cámaras

```bash
lerobot-find-cameras orbbec
```

Este paso generará:

- Modelo de cámara
- Número de serie
- Información USB
- Configuración de flujo predeterminada

### 5. Ejemplo de Orbbec


Prueba de Orbbec única:



```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

### 6. Notas sobre parámetros

- `depth_alpha` controla el factor de escala de la imagen de profundidad. Un buen punto de partida es `0.2`, luego puedes ajustarlo según el resultado mostrado.
- Si conectas tres o más cámaras de profundidad, se recomienda reducir `fps` a `15` para una mejor estabilidad.
- Se recomienda mantener la resolución en `640x480` para una visualización y transferencia de datos más estables.

### 7. Problemas comunes

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
Al usar cámaras Intel RealSense en **macOS**, podrías obtener este error: **"Error finding RealSense cameras: failed to set power state"**. Esto se puede resolver ejecutando el mismo comando con permisos de `sudo`. Ten en cuenta que el uso de cámaras RealSense en **macOS** es inestable.
:::

Después de eso, podrás mostrar las cámaras en tu ordenador mientras realizas la teleoperación ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de grabar tu primer conjunto de datos.

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

:::tip
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, bajo el formato `MJPG`, se pueden soportar 3 cámaras con una resolución de `1920*1080` manteniendo `30FPS`. Sin embargo, sigue sin recomendarse conectar 2 cámaras a un ordenador a través del mismo HUB USB.
:::

Si tienes más cámaras, puedes cambiar el parámetro `--robot.cameras` para añadirlas. Debes prestar atención al formato de `index_or_path`, que viene determinado por el último dígito del ID de la cámara que se muestra al ejecutar `python -m lerobot.find_cameras opencv`.

Por ejemplo, si quieres añadir una cámara:

<!-- TODO: reBot multi-camera configuration command -->
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

## Recopilación de conjuntos de datos
<!-- vidio todo -->

:::danger
Durante la teleoperación, si el brazo robótico maestro-esclavo sufre una desconexión de energía, un mal contacto de alimentación o un desprendimiento de la línea de señal, primero debes detener el código del programa y devolver el brazo robótico a su posición cero de origen. Solo entonces vuelve a conectar la fuente de alimentación y reinicia el programa. Esto evita que el desorden de datos provoque que el brazo robótico se descontrole y cause posibles riesgos de seguridad.
:::

<details>

<summary> Si quieres guardar el conjunto de datos localmente </summary>

<!-- TODO: reBot local data collection command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Entre ellos, `repo_id` se puede modificar de forma personalizada, y `push_to_hub=false`. Finalmente, el conjunto de datos se guardará en el directorio `~/.cache/huggingface/lerobot` de la carpeta de inicio, donde se creará la carpeta `seeed_rebot_b601_dm/test` mencionada anteriormente.

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
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

Verás que aparecen muchas líneas como esta:
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
| → (Flecha derecha) | Detener anticipadamente el episodio actual/reinicio; pasar al siguiente. |
| ← (Flecha izquierda) | Cancelar el episodio actual; volver a grabarlo. |
| ESC | Detener la sesión inmediatamente, codificar los vídeos y subir el conjunto de datos. |

:::tip
Si las pulsaciones de tu teclado no responden, puede que necesites hacer un downgrade de tu versión de pynput, por ejemplo instalando la versión 1.6.8.
```bash
pip install pynput==1.6.8
```
:::

**Consejos para recopilar datos**

- **Sugerencia de tarea**: Agarra objetos en diferentes ubicaciones y colócalos en un contenedor.
- **Escala**: Registra ≥50 episodios (10 episodios por ubicación).
- **Consistencia**:
  - Mantén las cámaras fijas.
  - Mantén un comportamiento de agarre idéntico.
  - Asegúrate de que los objetos manipulados sean visibles en las transmisiones de la cámara.
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
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Aquí, `seeed_rebot_b601_dm/test` es el nombre personalizado de `repo_id` definido durante la recopilación de datos.

## Reproducir un episodio

:::tip
Inestable, se puede omitir o probar.
:::

Ahora, intenta reproducir el primer conjunto de datos en tu robot:

<!-- TODO: reBot dataset replay command -->
```bash
lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0
```

En este punto, el robot debería realizar las mismas acciones que cuando lo teleoperaste durante la grabación.

## Entrenamiento y evaluación

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulta el tutorial oficial [ACT](https://huggingface.co/docs/lerobot/act)

**Entrenamiento**

Para entrenar una política que controle tu robot, usa el script `python -m lerobot.scripts.train`. Algunos parámetros son obligatorios. Aquí tienes un comando de ejemplo:

**Si quieres entrenar en un conjunto de datos local, asegúrate de que el `repo_id` coincida con el nombre usado durante la recopilación de datos y añade `--policy.push_to_hub=false`.**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

**O usa datos almacenados de forma remota**

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

**Explicación del comando**

* **Especificación del conjunto de datos**: Proporcionamos el conjunto de datos mediante el parámetro `--dataset.repo_id=${HF_USER}/rebot_test`.
* **Pasos de entrenamiento**: Modificamos el número de pasos de entrenamiento usando `--steps=300000`. El algoritmo usa por defecto 800000 pasos, y puedes ajustarlo según la dificultad de tu tarea y observando la pérdida durante el entrenamiento.
* **Tipo de política**: Proporcionamos la política con `policy.type=act`. Del mismo modo, puedes cambiar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`]. Esto cargará la configuración desde `configuration_act.py`. Es importante destacar que esta política se adaptará automáticamente a los estados de los motores, acciones de los motores y al número de cámaras de tu robot (por ejemplo, `laptop` y `phone`), ya que esta información ya está almacenada en tu conjunto de datos.
* **Selección de dispositivo**: Proporcionamos `policy.device=cuda` porque estamos entrenando en una GPU Nvidia, pero puedes usar `policy.device=mps` para entrenar en Apple Silicon.
* **Herramienta de visualización**: Proporcionamos `wandb.enable=true` para visualizar las gráficas de entrenamiento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Esto es opcional, pero si lo usas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

**Evaluación**

Puedes usar la función `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) pero con un checkpoint de política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

<!-- TODO: reBot ACT evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
``` 

1. El parámetro `--policy.path` indica la ruta al archivo de pesos de los resultados del entrenamiento de tu política (por ejemplo, `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`). Si subes el archivo de pesos de los resultados del entrenamiento del modelo a Hub, también puedes usar el repositorio del modelo (por ejemplo, `${HF_USER}/act_rebot_test`).
2. El nombre del conjunto de datos `dataset.repo_id` comienza con `eval_`. Esta operación registrará por separado vídeos y datos durante la evaluación, que se guardarán en la carpeta que comience con `eval_`, como `seeed/eval_test123`.
3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante la fase de evaluación, elimina primero la carpeta que comience con `eval_` y luego ejecuta el programa de nuevo.
4. Cuando te encuentres con `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, ten en cuenta que palabras clave como `front` y `side` en el parámetro `--robot.cameras` deben ser estrictamente coherentes con las usadas al recopilar el conjunto de datos.

</details>

<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

Consulta el tutorial oficial [SmolVLA](https://huggingface.co/docs/lerobot/smolvla)

```bash
pip install -e ".[smolvla]"
```

**Entrenamiento**
```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \ # <- Use pretrained fine-tuned model
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

**Evaluación**

<!-- TODO: reBot SmolVLA evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.id=follower1 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=rebot_arm_102_leader \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=rebot_arm_102_leader \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME
```

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulta el tutorial oficial [Pi0](https://huggingface.co/docs/lerobot/pi0) 

```bash
pip install -e ".[pi]"
```

**Entrenamiento**
```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=seeed/eval_test123 \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=20000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

**Evaluación**

<!-- TODO: reBot Pi0 evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulta el tutorial oficial [Pi0.5](https://huggingface.co/docs/lerobot/pi05) 

```bash
pip install -e ".[pi]"
```

**Entrenamiento**
```bash
lerobot-train \
    --dataset.repo_id=seeed/eval_test123 \
    --policy.type=pi05 \
    --output_dir=outputs/pi05_training \
    --job_name=pi05_training \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=false \
    --policy.dtype=bfloat16 \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32
```

**Evaluación**

<!-- TODO: reBot Pi0.5 evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulta la documentación oficial: [GR00T N1.5](https://huggingface.co/docs/lerobot/groot)

</details>

El entrenamiento debería tardar varias horas. Encontrarás los checkpoints en el directorio `outputs/train/act_rebot_test/checkpoints`.

Para reanudar el entrenamiento desde un checkpoint, aquí tienes un comando de ejemplo para reanudar desde el checkpoint `last` de la política `act_rebot_test`:
```bash
lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## Preguntas frecuentes (FAQ)

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

- Entrenar ACT con 50 conjuntos de datos lleva aproximadamente 6 horas en un portátil con una RTX 3060 (8GB), y alrededor de 2-3 horas en ordenadores con GPUs RTX 4090 o A100.

- Durante la recopilación de datos, asegúrate de que la posición de la cámara, el ángulo y la iluminación ambiental sean estables. Reduce la cantidad de fondo inestable y de peatones capturados por la cámara, ya que cambios excesivos en el entorno de despliegue pueden hacer que el brazo robótico no pueda agarrar correctamente.

- Para el comando de recopilación de datos, asegúrate de que el parámetro `num-episodes` esté configurado para recopilar suficientes datos. No pauses manualmente a mitad de camino, ya que la media y la varianza de los datos se calculan solo después de que la recopilación de datos se haya completado, y son necesarias para el entrenamiento.

- Si el programa indica que no puede leer datos de imagen desde la cámara USB, asegúrate de que la cámara USB no esté conectada a través de un hub. La cámara USB debe estar conectada directamente al dispositivo para garantizar una alta velocidad de transmisión de imágenes.

:::tip
Si encuentras problemas de software o de dependencias de entorno que no se puedan resolver, además de consultar la sección de Preguntas frecuentes al final de este tutorial, informa del problema de inmediato en la [plataforma LeRobot](https://github.com/huggingface/lerobot) o en el [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
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
