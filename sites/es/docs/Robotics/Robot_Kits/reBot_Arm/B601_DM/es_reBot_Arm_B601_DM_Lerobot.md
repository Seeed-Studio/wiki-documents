---
description: Este wiki proporciona una guía completa para que reBot Arm B601-DM implemente la recopilación de datos y el entrenamiento dentro del framework LeRobot.
title: Introducción a reBot Arm B601-DM en LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-04-09'
updatedAt: '2026-04-09'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/
---

# Introducción a reBot Arm B601-DM basado en LeRobot y reBot 102 Leader

[reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/) es un proyecto de brazo robótico de código abierto lanzado por Seeed, dedicado a reducir el umbral para aprender inteligencia encarnada. Publicamos como código abierto todos los diseños estructurales y el código sin reservas, haciendo que la tecnología robótica sea accesible para todos.

[LeRobot](https://github.com/huggingface/lerobot/tree/main) se compromete a proporcionar modelos, conjuntos de datos y herramientas para robótica en el mundo real en PyTorch. Su objetivo es reducir la barrera de entrada a la robótica, permitiendo que todos contribuyan y se beneficien compartiendo conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones en el mundo real, centrándose en el aprendizaje por imitación y el aprendizaje por refuerzo. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos con demostraciones recopiladas por humanos y entornos de simulación, lo que permite a los usuarios comenzar sin necesidad de ensamblar robots.

### 📖 Introducción al proyecto

**reBot-DevArm (reBot Arm B601 DM y reBot Arm B601 RS)** es un proyecto de brazo robótico dedicado a reducir el umbral para aprender inteligencia encarnada. Nos centramos en el **"Verdadero Código Abierto"** — no solo código, publicamos como código abierto todo lo siguiente sin reservas:
- 🦾 **Brazos robóticos de código abierto con dos versiones de motor**: Proporcionamos todos los archivos de código abierto para las versiones de motor RoboStride y Damiao con la misma apariencia.
- 🛠️ **Planos de hardware**: Archivos fuente de piezas de chapa metálica y piezas impresas en 3D.
- 🔩 **BOM (Lista de Materiales)**: Detallada hasta la especificación de cada tornillo y enlace de compra.
- 💻 **Software y algoritmos**: Python SDK, ROS1/2, Isaac Sim, LeRobot, etc.

## Construye tu brazo robótico reBot

- Ofrecemos cinco opciones de kit:
  - **Kit de Motores del Cuerpo del Brazo Robótico**: Incluye solo los motores y arneses de cableado necesarios para el brazo robótico.
  - **Kit de Piezas Estructurales del Cuerpo del Brazo Robótico**: Incluye solo los componentes mecánicos estructurales.
  - **Kit Completo de Pinza**: Incluye motores, arneses de cableado y piezas estructurales para la pinza.
  - **Kit Completo de Brazo**: Incluye todos los componentes para el cuerpo del brazo robótico y la pinza.
  - **Brazo Robótico Preensamblado**: Un brazo robótico completamente ensamblado.

El kit de robot inteligente reBot-DevArm y reComputer Jetson AI combina a la perfección el control de brazo robótico de alta precisión con una potente plataforma de computación de IA, proporcionando una solución integral de desarrollo de robots. Este kit se basa en la plataforma Jetson Orin o AGX Orin, combinada con reBot-DevArm y el framework de IA LeRobot, ofreciendo a los usuarios un sistema de robot inteligente aplicable a múltiples escenarios como educación, investigación y automatización industrial.

Este wiki proporciona tutoriales de depuración para reBot-DevArm e implementa la recopilación de datos y el entrenamiento dentro del framework LeRobot.

:::caution
Los tutoriales de Seeed Studio se actualizan estrictamente de acuerdo con la documentación oficial. Si encuentras problemas de software o de entorno que no se puedan resolver, primero consulta las Preguntas Frecuentes al final del artículo, o contacta con atención al cliente para unirte al grupo de discusión SeeedStudio LeRobot. También puedes hacer preguntas aquí: [LeRobot GitHub](https://github.com/huggingface/lerobot) o en el [Discord Channel](https://discord.gg/8TnwDdjFGU).
:::

## 🔧 Características de la Serie reBot B601-DM:

1. **Código abierto y bajo costo**
   reBot Arm es una solución de brazo robótico de código abierto y bajo costo de Seeed Studio, dedicada a reducir el umbral para aprender inteligencia encarnada.

2. **Integración con la plataforma LeRobot**
   Diseñado para la integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma proporciona modelos PyTorch, conjuntos de datos y herramientas para el aprendizaje por imitación de tareas de robots reales (incluyendo recopilación de datos, simulación, entrenamiento y despliegue).

3. **Abundantes recursos de aprendizaje**
   Proporciona completos recursos de aprendizaje de código abierto, incluyendo guías de ensamblaje y calibración, tutoriales de prueba y recopilación de datos, documentación de entrenamiento y despliegue para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.

4. **Compatible con la plataforma Nvidia**
   Admite el despliegue mediante la plataforma reComputer Mini J4012 Orin NX 16GB.

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
Para las funciones detalladas de los paquetes de funciones, consulta:
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
pip install opencv-python==4.10.0.84  # Install specific OpenCV version
pip install numpy==1.26.0  # This version should be compatible with torchvision
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

A continuación, necesitas conectar la fuente de alimentación y el cable de datos a tu robot reBot B601-DM para la calibración, a fin de garantizar que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot reBot B601-DM funcione en otro. Si necesitas recalibrar el brazo robótico, elimina completamente los archivos en `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y vuelve a calibrar el brazo robótico. De lo contrario, aparecerá un mensaje de error. La información de calibración del brazo robótico se almacenará en los archivos JSON de este directorio.

Primero, necesitas otorgar permisos de interfaz ejecutando los siguientes comandos:

```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
```

### Calibrar el brazo seguidor

B601-DM se calibrará automáticamente una vez cada vez que ejecutes un programa relacionado con LeRobot en este wiki.
Lo que necesitas hacer es asegurarte de que, antes de comenzar, coloques el B601-DM en la posición que se muestra en la figura (pinza completamente cerrada).
  <div align="center">
      <img width={800} 
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" />
  </div>

### Calibrar el brazo líder

Los pasos de calibración son cruciales y afectarán directamente a si el brazo robótico funciona con normalidad. Sigue estrictamente el proceso.

<details>

<summary> rebot 102 leader </summary>

:::tip
**Notas de calibración de reBot 102 leader**:
- Cuando comienza la calibración, la posición actual de cada servo en reBot Arm 102 se **restablecerá a cero**
- `joint_ranges` (límites de las articulaciones) se toman del archivo de configuración `config_rebot_arm_102_leader.py`, no de los datos de calibración
- Si una articulación siempre parece atascada cerca de un límite, comprueba primero la configuración de `joint_ranges`
- Las direcciones de las articulaciones se definen en el archivo de configuración. Si las direcciones no coinciden, modifica la configuración en lugar de recalibrar
- El líder reBot 102 utiliza un módulo USB-a-UART, normalmente asignado a `/dev/ttyUSB*`
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

Primero concede permisos a los puertos serie:
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

<summary> Si utilizas la cámara de profundidad Orbbec Gemini2 </summary>

- 🚀 Paso 1: Instalar las dependencias del SDK de Orbbec

1. Clona el repositorio `pyorbbec`
   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. Descarga e instala el **archivo .whl** correspondiente para el SDK
   Ve a [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases),
   Selecciona e instala según la versión de Python, por ejemplo:
   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. Instala las dependencias en el directorio `pyorbbec`
   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   Fuerza la degradación de la versión de `numpy` a `1.26.0`
    ```bash
    pip install numpy==1.26.0
    ```
   Se pueden ignorar los errores en rojo.

4. Clona el SDK de Orbbec en el directorio `~/lerobot/src/cameras`

   ```bash
   cd ~/rebot_lerobot/src/cameras
   git clone https://github.com/ZhuYaoHui1998/orbbec.git
   ```

5. Modifica utils.py y __init__.py
- En el directorio `~/lerobot/src/lerobot/cameras`, busca `utils.py` y añade el siguiente código en la línea `40`:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- En el directorio `~/lerobot/src/lerobot/cameras`, busca `__init__.py` y añade el siguiente código en la línea `18`:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 Paso 2: Llamadas de función y ejemplos

Hemos añadido el hiperparámetro `focus_area` porque los datos de profundidad que están demasiado lejos no tienen sentido para el brazo robótico (no puede agarrar). Por lo tanto, los datos de profundidad menores o mayores que `focus_area` se volverán negros. El `focus_area` predeterminado es (20, 600).
Actualmente, la resolución admitida está limitada a ancho: 640, alto: 880.

```bash

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true

```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

Las tareas posteriores de recopilación de datos, entrenamiento y evaluación son las mismas que los comandos RGB normales. Solo reemplaza:

```bash
  --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
```

en el comando RGB normal. También puedes añadir cámaras RGB monoculares adicionales después de esto.

**💡 Autor y contribución**

- Autor: Zhang Jiaquan, Wang Wenzhao - Universidad Normal del Sur de China

</details>

Para instanciar una cámara, necesitas un identificador de cámara. Este identificador puede cambiar si reinicias tu ordenador o vuelves a conectar tu cámara, un comportamiento que depende principalmente de tu sistema operativo.

Para encontrar los índices de las cámaras conectadas a tu sistema, ejecuta el siguiente script:

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

La terminal imprimirá la información relevante de la cámara.

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

Después de eso, podrás mostrar las cámaras en tu ordenador mientras teleoperas ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de grabar tu primer conjunto de datos.

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
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, bajo el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Sin embargo, seguir sin recomendar conectar 2 cámaras a un ordenador a través del mismo HUB USB.
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

Entre ellos, `repo_id` se puede modificar de forma personalizada, y `push_to_hub=false`. Finalmente, el conjunto de datos se guardará en el directorio `~/.cache/huggingface/lerobot` en la carpeta de inicio, donde se creará la carpeta `seeed_rebot_b601_dm/test` mencionada anteriormente.

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

**Función Record**

La función **record** proporciona un conjunto de herramientas para capturar y gestionar datos durante el funcionamiento del robot.

**1. Almacenamiento de datos**

- Los datos se almacenan utilizando el formato `LeRobotDataset` y se guardan en disco durante la grabación.
- De forma predeterminada, el conjunto de datos se envía a tu página de Hugging Face después de la grabación.
- Para desactivar la subida, utiliza: `--dataset.push_to_hub=False`.

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
- **Escala**: Grabar ≥50 episodios (10 episodios por ubicación).
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

Para entrenar una política que controle tu robot, utiliza el script `python -m lerobot.scripts.train`. Algunos parámetros son obligatorios. Aquí tienes un comando de ejemplo:

**Si quieres entrenar en un conjunto de datos local, asegúrate de que el `repo_id` coincida con el nombre utilizado durante la recopilación de datos y añade `--policy.push_to_hub=false`.**

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

**O utiliza datos almacenados de forma remota**

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
* **Pasos de entrenamiento**: Modificamos el número de pasos de entrenamiento usando `--steps=300000`. El algoritmo usa por defecto 800000 pasos, y puedes ajustarlo en función de la dificultad de tu tarea y observando la pérdida durante el entrenamiento.
* **Tipo de política**: Proporcionamos la política con `policy.type=act`. Del mismo modo, puedes cambiar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`]. Esto cargará la configuración desde `configuration_act.py`. Es importante destacar que esta política se adaptará automáticamente a los estados de los motores, acciones de los motores y al número de cámaras de tu robot (por ejemplo, `laptop` y `phone`), ya que esta información ya está almacenada en tu conjunto de datos.
* **Selección de dispositivo**: Proporcionamos `policy.device=cuda` porque estamos entrenando en una GPU Nvidia, pero puedes usar `policy.device=mps` para entrenar en Apple Silicon.
* **Herramienta de visualización**: Proporcionamos `wandb.enable=true` para visualizar las gráficas de entrenamiento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Esto es opcional, pero si lo utilizas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

**Evaluación**

Puedes usar la función `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) pero con un punto de control de política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

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

1. El parámetro `--policy.path` indica la ruta al archivo de pesos de los resultados del entrenamiento de tu política (por ejemplo, `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`). Si subes el archivo de pesos del resultado del entrenamiento del modelo al Hub, también puedes usar el repositorio del modelo (por ejemplo, `${HF_USER}/act_rebot_test`).
2. El nombre del conjunto de datos `dataset.repo_id` comienza con `eval_`. Esta operación grabará por separado vídeos y datos durante la evaluación, que se guardarán en la carpeta que comienza con `eval_`, como `seeed/eval_test123`.
3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante la fase de evaluación, elimina primero la carpeta que comienza con `eval_` y luego ejecuta de nuevo el programa.
4. Cuando te encuentres con `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, ten en cuenta que palabras clave como `front` y `side` en el parámetro `--robot.cameras` deben ser estrictamente coherentes con las utilizadas al recopilar el conjunto de datos.

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

El entrenamiento debería tardar varias horas. Encontrarás puntos de control en el directorio `outputs/train/act_rebot_test/checkpoints`.

Para reanudar el entrenamiento desde un punto de control, aquí tienes un comando de ejemplo para reanudar desde el punto de control `last` de la política `act_rebot_test`:
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

- Entrenar ACT con 50 conjuntos de datos lleva aproximadamente 6 horas en un portátil con una RTX 3060 (8 GB), y alrededor de 2-3 horas en ordenadores con GPU RTX 4090 o A100.

- Durante la recopilación de datos, asegúrate de que la posición de la cámara, el ángulo y la iluminación ambiental sean estables. Reduce la cantidad de fondo inestable y de peatones capturados por la cámara, ya que cambios excesivos en el entorno de despliegue pueden hacer que el brazo robótico no pueda agarrar correctamente.

- Para el comando de recopilación de datos, asegúrate de que el parámetro `num-episodes` esté configurado para recopilar suficientes datos. No pauses manualmente a mitad de camino, ya que la media y la varianza de los datos se calculan solo después de que se completa la recopilación de datos, lo cual es necesario para el entrenamiento.

- Si el programa indica que no puede leer datos de imagen desde la cámara USB, asegúrate de que la cámara USB no esté conectada a través de un hub. La cámara USB debe estar conectada directamente al dispositivo para garantizar una velocidad rápida de transmisión de imágenes.

:::tip
Si encuentras problemas de software o de dependencias de entorno que no se puedan resolver, además de consultar la sección de Preguntas frecuentes (FAQ) al final de este tutorial, informa del problema de inmediato en la [plataforma LeRobot](https://github.com/huggingface/lerobot) o en el [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

## Referencias

Wiki en inglés de Seeed Studio: [Cómo usar el brazo robótico SO100Arm en Lerobot](https://wiki.seeedstudio.com/es/lerobot_so100m/)

Proyecto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Proyecto Huggingface: [LeRobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT o ALOHA](https://tonyzhaozh.github.io/aloha/)

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
