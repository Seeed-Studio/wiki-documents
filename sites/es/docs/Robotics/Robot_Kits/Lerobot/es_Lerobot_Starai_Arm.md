---
description: Este wiki proporciona el tutorial de depuración para el Brazo Robótico StarAI y realiza la recolección de datos y entrenamiento dentro del framework Lerobot.
title: Brazo StarAI en LeRobot
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /lerobot_starai_arm
sku: 114090081,114090080,100049805,100038899,100028196
last_update:
  date: 10/13/2025
  author: LiShanghang
translation:
  skip: [ zh-CN ]
---

# Comenzando con el Brazo Robótico StarAI con LeRobot

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **Seguidor Viola** | **Líder Violin** | **Seguidor Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ¡Obtén Uno Ahora! 🖱️</font></span></strong>
</a></div>

## Introducción de Productos

1. **Código Abierto y Amigable para Desarrolladores**
   Es una solución de brazo robótico de 6+1 DoF de código abierto y amigable para desarrolladores de [Fishion Star Technology Limited](https://fashionrobo.com/).
2. **Integración con LeRobot**
   Diseñado para integración con [Plataforma LeRobot](https://github.com/huggingface/lerobot), que proporciona modelos PyTorch, conjuntos de datos y herramientas para aprendizaje por imitación en tareas robóticas del mundo real — incluyendo recolección de datos, simulación, entrenamiento y despliegue.
3. **Recursos de Aprendizaje Integrales**
   Proporciona recursos de aprendizaje de código abierto integrales como guías de ensamblaje y calibración, y ejemplos de tareas de agarre personalizadas para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.
4. **Compatible con Nvidia**
   Soporta despliegue en la plataforma reComputer Mini J4012 Orin NX 16GB.

## Características Principales

- Listo para Usar — Sin Ensamblaje Requerido. Solo Desempaca y Sumérgete en el Mundo de la IA.
- 6+1 Grados de Libertad y un Alcance de 470mm — Construido para Versatilidad y Precisión.
- Alimentado por Servos de Bus Sin Escobillas Duales — Suave, Silencioso y Fuerte con hasta 300g de Carga Útil.
- Pinza Paralela con Apertura Máxima de 66mm — Puntas de Dedos Modulares para Flexibilidad de Reemplazo Rápido.
- Tecnología Exclusiva de Bloqueo Flotante — Congela Instantáneamente el Brazo Líder en Cualquier Posición con una Sola Presión.

## Especificaciones

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.jpg" />
</div>

| Elemento                 | Brazo Seguidor \| Viola                             | Brazo Líder \|Violin                                |    Brazo Seguidor \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| Grados de Libertad   | 6+1                                               | 6+1                                               | 6+1             |
| Alcance                | 470mm                                             | 470mm                                             | 670mm |
| Repetibilidad        | 2mm                                               | -                                                 | 2mm  |
| Carga Útil de Trabajo      | 300g (con 70% de Alcance)                            | -                                                 |  750g (con 70% de Alcance)   |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| Kit de Pinza Paralela  | ✅                                                 | -                                                 | ✅   |
| Rotación de Muñeca         | Sí                                               | Sí                                               | Sí |
| Mantener en Cualquier Posición | Sí                                               | Sí (con botón de mango)                          |  Sí|
| Montaje de Cámara en Muñeca   |Proporciona archivos de referencia de impresión 3D | | Proporciona archivos de referencia de impresión 3D
| Funciona con LeRobot   | ✅                                                 | ✅                                                 | ✅|
| Funciona con ROS 2     | ✅                                                 | ✅                                                | ✅|
| Funciona con MoveIt2    | ✅                                                 | ✅                                               |✅ |
| Funciona con Gazebo    | ✅                                                 |✅                                              |✅ |
| Hub de Comunicación    | UC-01                                             | UC-01                                             | UC-01 |
| Fuente de Alimentación         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

Para más información sobre los motores servo, por favor visita el siguiente enlace.

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## Configuración inicial del entorno

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Para Jetson Orin:**

- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## Instalación y Depuración

### Instalar LeRobot

Los entornos como pytorch y torchvision necesitan ser instalados basándose en tu CUDA.

1. Instalar Miniconda:
Para Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

O, Para X86 Ubuntu 22.04:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Crear y activar un entorno conda fresco para lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clonar Lerobot:

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. Cuando uses miniconda, instala ffmpeg en tu entorno:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Esto usualmente instala ffmpeg 7.X para tu plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es soportado (verifica codificadores soportados con ffmpeg -encoders), puedes:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Solo en Linux] Instalar dependencias de construcción de ffmpeg y compilar ffmpeg desde el código fuente con libsvtav1, y asegúrate de usar el binario ffmpeg correspondiente a tu instalación con which ffmpeg.

:::

5. Instalar LeRobot:

```bash
cd ~/lerobot && pip install -e .
```

```bash
sudo apt remove brltty
```

Para dispositivos Jetson Jetpack (por favor asegúrate de instalar [Pytorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) desde el paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6.Instalar Dependencias del Motor Fashionstar:

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

7. Verificar Pytorch y Torchvision

Dado que instalar el entorno lerobot vía pip desinstalará el Pytorch y Torchvision originales e instalará las versiones CPU de Pytorch y Torchvision, necesitas realizar una verificación en Python.

```python
import torch
print(torch.cuda.is_available())
```

Si el resultado impreso es False, necesitas reinstalar Pytorch y Torchvision según el [tutorial del sitio web oficial](https://pytorch.org/index.html).

Si estás usando un dispositivo Jetson, instala Pytorch y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

### Desempacando el Brazo Robótico

El Kit de Brazo Robótico Incluye

- Brazo líder
- Brazo seguidor
- Controlador (mango)
- Pinza paralela
- Herramientas de instalación (tornillos, llave hexagonal)
- Abrazadera C ×2
- Placa de depuración UC-01 ×2

Interruptor de la placa de depuración UC-01：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/C0DsNSNl0dI?si=HQzFXNwGEEqdXz3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Configurar Puerto del Brazo

Entra al directorio `~/lerobot`:

```bash
cd ~/lerobot
```

Ejecuta el siguiente comando en la terminal para encontrar puertos USB asociados a tus brazos：

```bash
lerobot-find-port
```

:::tip
Recuerda quitar el usb, de lo contrario la interfaz no será detectada.
:::

Por ejemplo：

1. Salida de ejemplo al identificar el puerto del brazo líder (ej., `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyUSB0` en Linux):
2. Salida de ejemplo al identificar el puerto del brazo seguidor (ej., `/dev/tty.usbmodem575E0032081`en Mac, o posiblemente `/dev/ttyUSB1` en Linux):

:::tip
Si no se puede identificar el puerto serie ttyUSB0, prueba las siguientes soluciones:

Lista todos los puertos USB.

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

Una vez identificado, verifica la información del ttyusb.

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

La última línea indica una desconexión porque brltty está ocupando el USB. Eliminar brltty resolverá el problema.

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

Finalmente, usa el comando chmod.

```sh
sudo chmod 777 /dev/ttyUSB*
```

:::

Es posible que necesites dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyUSB*
```

## Calibrar

Para videos que cubren el Brazo Robótico StarAI desde el desempaquetado hasta la teleoperación, puedes consultar:
<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/02lxxF9Cvy8?si=IGJda5nXkYEbm2N6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Mueve el brazo robótico a la posición inicial del brazo robótico (como se muestra en la figura a continuación) y ponlo en modo de espera, luego reconecta la fuente de alimentación.


Para la posición inicial de la nueva versión del brazo robótico, se debe prestar especial atención a asegurar que los servos de las Articulaciones 3, 4 y 5 se alineen estrictamente con las posiciones en la figura.


| **Nuevo Brazo Líder de Violín** | **Antiguo Brazo Líder de Violín** | **Brazo Seguidor de Viola** | **Brazo Seguidor de Violonchelo** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello_init.png) |

Por ejemplo:

| **Brazo Líder Violin** | **Brazo Seguidor Viola** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_rest.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_rest.jpg) |


:::tip
Tomando PC (Linux) y placa Jetson como ejemplos, el `primer` dispositivo USB insertado se mapeará a `ttyUSB0`, y el `segundo` dispositivo USB insertado se mapeará a `ttyUSB1`.

Por favor, presta atención a las interfaces de mapeo del líder y seguidor antes de ejecutar el código.
:::

#### Brazo Robótico Líder

Conecta el líder a `/dev/ttyUSB0`, o modifica el parámetro `--teleop.port`, y luego ejecuta:

```bash
lerobot-calibrate     --teleop.type=lerobot_teleoperator_violin --teleop.port=/dev/ttyUSB0 --teleop.id=my_awesome_staraiviolin_arm
```

Después del inicio, verás los valores del codificador de cada articulación. Necesitas calibrar manualmente cada articulación una por una: rota cada articulación a sus posiciones máxima y mínima. Para articulaciones sin topes límite, el rango de rotación no debe exceder 180° en sentido horario o 180° en sentido antihorario. Después de calibrar todas las articulaciones, presiona Enter para guardar la configuración.

#### Brazo Robótico Seguidor

Conecta el seguidor a `/dev/ttyUSB1`, o modifica el parámetro `--teleop.port`, y luego ejecuta:

Viola:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_viola --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraiviola_arm
```

Cello:
```bash
lerobot-calibrate     --robot.type=lerobot_robot_cello --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraicello_arm
```

Después del inicio, verás los valores del codificador de cada articulación. Necesitas calibrar manualmente cada articulación una por una: rota cada articulación a sus posiciones máxima y mínima. Para articulaciones sin topes límite, el rango de rotación no debe exceder 180° en sentido horario o 180° en sentido antihorario. Después de calibrar todas las articulaciones, presiona Enter para guardar la configuración.

:::tip
Los archivos de calibración se guardarán en las siguientes rutas: `~/.cache/huggingface/lerobot/calibration/robots` y `~/.cache/huggingface/lerobot/calibration/teleoperators`.
:::

### Configuración de Calibración de Brazo Dual

<details>
<summary> Tutorial </summary>

#### Brazo Robótico Líder

Conecta `left_arm_port` a `/dev/ttyUSB0` y `right_arm_port` a `/dev/ttyUSB2`, o modifica los parámetros `--teleop.left_arm_port` y `--teleop.right_arm_port`, y luego ejecuta:

```bash
lerobot-calibrate     --teleop.type=lerobot_teleoperator_bimanual_leader  --teleop.left_arm_port=/dev/ttyUSB0  --teleop.right_arm_port=/dev/ttyUSB2  --teleop.id=bi_starai_violin_leader
```

Después del inicio, verás los valores del codificador de cada articulación. Necesitas calibrar manualmente cada articulación una por una: rota cada articulación a sus posiciones máxima y mínima. Para articulaciones sin topes límite, el rango de rotación no debe exceder 180° en sentido horario o 180° en sentido antihorario. Después de calibrar todas las articulaciones, presiona Enter para guardar la configuración.

#### Brazo Robótico Seguidor

Conecta `left_arm_port` a `/dev/ttyUSB1` y `right_arm_port` a `/dev/ttyUSB3`, o modifica los parámetros `--robot.left_arm_port` y `--robot.right_arm_port`, y luego ejecuta:

Vioa:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_bimanual_follower  --robot.arm_name=starai_viola  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_viola_follower
```

Cello:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_bimanual_follower  --robot.arm_name=starai_cello  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_cello_follower
```

Después del inicio, verás los valores del codificador de cada articulación. Necesitas calibrar manualmente cada articulación una por una: rota cada articulación a sus posiciones máxima y mínima. Para articulaciones sin topes límite, el rango de rotación no debe exceder 180° en sentido horario o 180° en sentido antihorario. Después de calibrar todas las articulaciones, presiona Enter para guardar la configuración.

:::tip

La diferencia entre configuraciones de brazo único y brazo dual radica en los parámetros `--teleop.type` y `--robot.type`. Además, las configuraciones de brazo dual requieren puertos USB separados para los brazos izquierdo y derecho, totalizando cuatro puertos USB: `--teleop.left_arm_port`, `--teleop.right_arm_port`, `--robot.left_arm_port`, y `--robot.right_arm_port`.

Si usas una configuración de brazo dual, necesitas modificar manualmente los tipos de archivo del brazo robótico `--teleop.type` y `--robot.type`, así como los puertos USB `--teleop.left_arm_port`, `--teleop.right_arm_port`, `--robot.left_arm_port`, y `--robot.right_arm_port`, para adaptarse a los comandos de teleoperación, recolección de datos, entrenamiento y evaluación.

:::

</details>

## Teleoperar

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/02lxxF9Cvy8?si=IGJda5nXkYEbm2N6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Mueve el brazo a la posición mostrada en el diagrama y ponlo en espera.

| **Brazo Líder Violin** | **Brazo Seguidor Viola** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_rest.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_rest.jpg) |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

¡Entonces estarás listo para teleoperar tu robot (No mostrará las cámaras)! Ejecuta este script simple:

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

<details>
<summary> Brazo Dual </summary>

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader
```

Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader
```

</details>

El comando de operación remota detectará automáticamente los siguientes parámetros:

1. Identificar cualquier calibración faltante e iniciar el procedimiento de calibración.
2. Conectar el robot y el dispositivo de operación remota e iniciar la operación remota.

Después de que el programa inicie, la Tecnología Hover Lock permanece funcional.

## Agregar cámaras

<details>
<summary> Si usas la Cámara de Profundidad Orbbec Gemini2 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

- 🚀 Paso 1: Instalar el Entorno de Dependencias del SDK de Orbbec

1. Clonar el repositorio `pyorbbec`

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. Descargar e instalar el archivo **.whl** correspondiente para el SDK  
   Ve a [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases),  
   selecciona e instala según tu versión de Python. Por ejemplo:

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. Instalar dependencias en el directorio `pyorbbec`

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   Forzar la degradación de la versión de `numpy` a `1.26.0`

    ```bash
    pip install numpy==1.26.0
    ```

  Los mensajes de error rojos pueden ser ignorados.

4. Clonar el SDK de Orbbec en el directorio `~/lerobot/src/cameras`

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. Modificar utils.py e **init**.py

- Encuentra `utils.py` en el directorio `~/lerobot/src/lerobot/cameras`, y añade el siguiente código en la línea 40:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- Encuentra `__init__.py` en el directorio `~/lerobot/src/lerobot/cameras`, y añade el siguiente código en la línea 18:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 Paso 2: Llamada de Función y Ejemplos

En todos los siguientes ejemplos, reemplaza `starai_viola` con el modelo real del brazo robótico que estés usando (ej., `so100` / `so101`).

Hemos añadido el hiperparámetro `focus_area`. Dado que los datos de profundidad que están demasiado lejos no tienen sentido para el brazo robótico (no puede alcanzar o agarrar objetos), los datos de profundidad menores o mayores que el `focus_area` se mostrarán en negro. El `focus_area` predeterminado es (20, 600).  
Actualmente, la única resolución soportada es ancho: 640, alto: 880.

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```

Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_starai_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

Para tareas posteriores como recolección de datos, entrenamiento y evaluación, el proceso es el mismo que para comandos RGB regulares. Solo necesitas reemplazar la parte relevante en el comando RGB regular con:

  ```
  --robot.cameras="{ front: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:(20,600)}}" \
  ```

También puedes añadir una cámara RGB monocular adicional después.

</details>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Después de insertar tus dos cámaras USB, ejecuta el siguiente script para verificar los números de puerto de las cámaras. Es importante recordar que la cámara no debe estar conectada a un Hub USB; en su lugar, debe estar conectada directamente al dispositivo. La velocidad más lenta de un Hub USB puede resultar en la incapacidad de leer datos de imagen.

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

La terminal imprimirá la siguiente información. Por ejemplo, la cámara del portátil es `index 2`, y la cámara USB es `index 4`.

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ /dev/video2
  Type: OpenCV
  Id: /dev/video2
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 480
    Fps: 30.0
--------------------
Camera #1:
  Name: OpenCV Camera @ /dev/video4
  Type: OpenCV
  Id: /dev/video4
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 360
    Fps: 30.0
--------------------

Finalizing image saving...
Image capture finished. Images saved to outputs/captured_images
```

Puedes encontrar las imágenes capturadas por cada cámara en el directorio `outputs/images_from_opencv_cameras` y verificar la información del índice de puerto correspondiente a las cámaras en diferentes posiciones.

Después de confirmar las cámaras externas, reemplaza la información de la cámara a continuación con tu información real de la cámara, y podrás mostrar las cámaras en tu computadora durante la operación remota:

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```


:::tip
Las imágenes en formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas, y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de imagen y FPS, causando retraso en la operación del brazo robótico. Actualmente, bajo el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, conectar 2 cámaras a una computadora a través del mismo USB HUB aún no se recomienda.
:::


Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```


:::tip
Las imágenes en formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas, y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de imagen y FPS, causando retraso en la operación del brazo robótico. Actualmente, bajo el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, conectar 2 cámaras a una computadora a través del mismo USB HUB aún no se recomienda.
:::


<details>
<summary> Brazo Dual </summary>

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --display_data=true
```

Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --display_data=true
```


:::tip
Las imágenes en formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas, y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de imagen y FPS, causando retraso en la operación del brazo robótico. Actualmente, bajo el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, conectar 2 cámaras a una computadora a través del mismo USB HUB aún no se recomienda.
:::


</details>

:::tip
Si encuentras un error como este.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

Puedes degradar la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::

## Grabar el conjunto de datos

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Una vez que te familiarices con la teleoperación, puedes grabar tu primer conjunto de datos.

Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho anteriormente, asegúrate de haber iniciado sesión usando un token de acceso de escritura, que puede generarse desde la [configuración de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Almacena el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Graba 10 episodios y sube tu conjunto de datos al hub:

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> Brazo Dual </summary>

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

:::tip
Para diferenciar entre configuraciones de brazo único y brazo dual, el `--dataset.repo_id` aquí se llama `starai/record-test_bi_arm`.
:::

</details>

:::tip
Si no quieres usar la función de subida de conjuntos de datos del Hub de Hugging Face, puedes elegir `--dataset.push_to_hub=false`. Además, reemplaza `--dataset.repo_id=${HF_USER}/starai` con un nombre de carpeta local personalizado, por ejemplo, `--dataset.repo_id=starai/record-test`. Los datos se almacenarán en `~/.cache/huggingface/lerobot` bajo el directorio home del sistema.
:::

Sin subir al Hub:

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> Brazo Dual </summary>

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

:::tip
Para diferenciar entre configuraciones de brazo único y brazo dual, el `--dataset.repo_id` aquí se llama `starai/record-test_bi_arm`.
:::

</details>

- `record` proporciona un conjunto de herramientas para capturar y gestionar datos durante las operaciones del robot:

#### 1. Almacenamiento de Datos

- Los datos se almacenan en el formato `LeRobotDataset` y se guardan en disco durante el proceso de grabación.

#### 2. Puntos de Control y Reanudación

- Los puntos de control se crean automáticamente durante la grabación.
- Si ocurre un problema, puedes reanudar ejecutando el mismo comando con `--resume=true`. Al reanudar la grabación, debes establecer `--dataset.num_episodes` al **número adicional de episodios a grabar**, ¡no al número total objetivo de episodios en el conjunto de datos!
- Para comenzar a grabar desde cero, **elimina manualmente** el directorio del conjunto de datos.

#### 3. Parámetros de Grabación

Configura el flujo de trabajo de grabación de datos usando parámetros de línea de comandos:

```markdown
Parameter Description
- warmup-time-s: The initialization time.
- episode-time-s: The duration for each data collection session.
- reset-time-s: The preparation time between each data collection.
- num-episodes: The expected number of data sets to collect.
- push-to-hub: Determines whether to upload the data to HuggingFace Hub.
```

#### 4. Controles de Teclado Durante la Grabación

Usa atajos de teclado para controlar el flujo de trabajo de grabación de datos:

- Presiona **tecla de flecha derecha (→)**: Detener prematuramente el episodio actual o reiniciar el tiempo, luego pasar al siguiente.
- Presiona **tecla de flecha izquierda (←)**: Cancelar el episodio actual y volver a grabarlo.
- Presiona **ESC**: Detener inmediatamente la sesión, codificar el video y subir el conjunto de datos.

:::tip

Si el teclado no funciona, es posible que necesites instalar otra versión de pynput.

```bash
pip install pynput==1.6.8
```

:::

## Reproducir un episodio

Ahora intenta reproducir el primer episodio en tu robot:

Viola:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=1 # choose the episode you want to replay
```

Cello:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=1 # choose the episode you want to replay
```

<details>
<summary> Brazo Dual </summary>

Viola:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

Cello:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

</details>

## Entrenar y Evaluar Política

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>


Consulta [ACT](https://huggingface.co/docs/lerobot/act)

**Entrenar**

Viola:

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_viola_test \
  --job_name=act_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

Cello:

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_cello_test \
  --job_name=act_cello_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

<details>
<summary> Brazo Dual </summary>

Viola:

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_viola_test \
  --job_name=act_bi_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

Cello:

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_cello_test \
  --job_name=act_bi_cello_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

</details>

1. `policy.type` admite entrada `diffusion,pi0,pi0fast`
1. Proporcionamos el conjunto de datos como parámetro: `dataset.repo_id=starai/record-test`.
2. Cargaremos la configuración desde [`configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py). Importante: esta política se adaptará automáticamente a los estados del motor del robot, las acciones del motor y el número de cámaras, y se guardará en tu conjunto de datos.
3. Proporcionamos `wandb.enable=true` para usar [Weights and Biases](https://docs.wandb.ai/quickstart) para visualizar gráficos de entrenamiento. Esto es opcional, pero si lo usas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

**Evaluar**


Ejecuta el siguiente comando para grabar 10 episodios de evaluación:

Viola:

```bash
lerobot-record  \
  --robot.type=lerobot_robot_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=lerobot_teleoperator_violin \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=my_awesome_leader_arm \
```

Cello:

```bash
lerobot-record  \
  --robot.type=lerobot_robot_cello \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_staraicello_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=lerobot_teleoperator_violin \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=my_awesome_leader_arm \
```

<details>
<summary> Brazo Dual </summary>

Viola:

```bash
lerobot-record  \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --robot.id=bi_starai_viola_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model
```

Cello:

```bash
lerobot-record  \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --robot.id=bi_starai_cello_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_cello_test/checkpoints/last/pretrained_model
```

</details>

Como puedes ver, esto es casi lo mismo que el comando usado previamente para grabar el conjunto de datos de entrenamiento, con algunos cambios:

1. El parámetro `--policy.path`, que indica la ruta a tu archivo de pesos de política entrenada (por ejemplo, `outputs/train/act_viola_test/checkpoints/last/pretrained_model`). Si has subido los pesos de tu modelo al Hub, también puedes usar el repositorio del modelo (por ejemplo, `${HF_USER}/starai`).

2. El nombre del conjunto de datos de evaluación `dataset.repo_id` comienza con `eval_`. Esta operación grabará videos y datos específicamente para la fase de evaluación, que se guardarán en una carpeta que comience con `eval_`, como `starai/eval_record-test`.

3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/starai/eval_xxxx'` durante la fase de evaluación, por favor elimina la carpeta que comience con `eval_` y ejecuta el programa nuevamente.

4. Cuando encuentres `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, por favor asegúrate de que las palabras clave como `up` y `front` en el parámetro `--robot.cameras` sean estrictamente consistentes con las usadas durante la fase de recolección de datos.

</details>



<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

Consulta [SmolVLA](https://huggingface.co/docs/lerobot/smolvla) 

```bash
pip install -e ".[smolvla]"
```

**Entrenar**

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

**Evaluar**

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30, fourcc: "MJPG"}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \ 
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```

</details>

<details>
<summary>[Libero](https://huggingface.co/docs/lerobot/libero) </summary>

Consulta [Libero](https://huggingface.co/docs/lerobot/libero) 

LIBERO es un benchmark diseñado para estudiar el aprendizaje robótico de por vida. La idea es que los robots no solo serán preentrenados una vez en una fábrica, sino que necesitarán seguir aprendiendo y adaptándose con sus usuarios humanos a lo largo del tiempo. Esta adaptación continua se llama aprendizaje de por vida en la toma de decisiones (LLDM), y es un paso clave hacia la construcción de robots que se conviertan en verdaderos asistentes personalizados.

- [Artículo de LIBERO](https://arxiv.org/abs/2306.03310)
- [Repositorio original de LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO)

LIBERO incluye cinco suites de tareas:

- LIBERO-Spatial (libero_spatial) – tareas que requieren razonamiento sobre relaciones espaciales.

- LIBERO-Object (libero_object) – tareas centradas en manipular diferentes objetos.

- LIBERO-Goal (libero_goal) – tareas condicionadas por objetivos donde el robot debe adaptarse a objetivos cambiantes.

- LIBERO-90 (libero_90) – 90 tareas de horizonte corto de la colección LIBERO-100.

- LIBERO-Long (libero_10) – 10 tareas de horizonte largo de la colección LIBERO-100.

En conjunto, estas suites cubren 130 tareas, que van desde manipulaciones simples de objetos hasta escenarios complejos de múltiples pasos. LIBERO está destinado a crecer con el tiempo y servir como un benchmark compartido donde la comunidad puede probar y mejorar algoritmos de aprendizaje permanente.

**Entrenar**

```bash
lerobot-train \
  --policy.type=smolvla \
  --policy.repo_id=${HF_USER}/libero-test \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_10 \
  --output_dir=./outputs/ \
  --steps=100000 \
  --batch_size=4 \
  --eval.batch_size=1 \
  --eval.n_episodes=1 \
  --eval_freq=1000 \
```

**Evaluando**

Para instalar LIBERO, después de seguir las instrucciones oficiales de LeRobot, simplemente haz: `pip install -e ".[libero]"`

**Evaluación de suite única**

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` selecciona la suite (libero_object, libero_spatial, etc.).

- `--eval.batch_size` controla cuántos entornos se ejecutan en paralelo.

- `--eval.n_episodes` establece cuántos episodios ejecutar en total.

**Evaluación multi-suite**

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- Pasa una lista separada por comas a `--env.task` para evaluación multi-suite.

</details>



<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulta [Pi0](https://huggingface.co/docs/lerobot/pi0) 

```bash
pip install -e ".[pi]"
```

**Entrenar**
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

**Evaluar**

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulta [Pi0.5](https://huggingface.co/docs/lerobot/pi05) 

```bash
pip install -e ".[pi]"
```

**Entrenar**
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

**Evaluar**

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulta [GR00T N1.5](https://huggingface.co/docs/lerobot/groot) 


</details>




Reanudar el entrenamiento desde un checkpoint específico.

Viola:

```bash
lerobot-train \
  --config_path=outputs/train/act_viola_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true \
  --steps=400000
```

Cello:

```bash
lerobot-train \
  --config_path=outputs/train/act_cello_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true \
  --steps=400000
```



## FAQ

- Si estás usando el tutorial en este documento, por favor `git clone` el repositorio de GitHub recomendado: `https://github.com/servodevelop/lerobot.git`.

- Si la teleoperación funciona normalmente pero la teleoperación con una cámara no muestra la interfaz de imagen, por favor consulta [aquí](https://github.com/huggingface/lerobot/pull/757/files).

- Si encuentras un problema con libtiff durante la teleoperación del dataset, por favor actualiza la versión de libtiff.

  ```bash
  conda install libtiff==4.5.0  # for Ubuntu 22.04, use libtiff==4.5.1
  ```

- Después de instalar LeRobot, puede desinstalar automáticamente la versión GPU de PyTorch, por lo que necesitas instalar manualmente torch-gpu.

- Para Jetson, por favor instala primero [PyTorch y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) antes de ejecutar `conda install -y -c conda-forge ffmpeg`, de lo contrario, habrá un problema de incompatibilidad de versiones al compilar torchvision.

- Entrenar 50 episodios de datos ACT en una laptop 3060 8GB toma aproximadamente 6 horas, mientras que entrenar 50 episodios en una computadora 4090 o A100 toma alrededor de 2-3 horas.

- Durante la recolección de datos, asegura la estabilidad de la posición y ángulo de la cámara, así como la iluminación ambiental, y minimiza el fondo inestable y los peatones capturados por la cámara. De lo contrario, cambios significativos en el entorno de despliegue pueden causar que el brazo robótico falle al agarrar objetos normalmente.

- El `num-episodes` en el comando de recolección de datos debe asegurar suficiente recolección de datos y no debe pausarse manualmente a la mitad. Esto es porque la media y varianza de los datos se calculan solo después de que se completa la recolección de datos, lo cual es necesario para el entrenamiento.

- Si el programa indica que no puede leer los datos de imagen de la cámara USB, por favor asegúrate de que la cámara USB no esté conectada a través de un Hub. La cámara USB debe estar conectada directamente al dispositivo para asegurar velocidades rápidas de transmisión de imagen.

## Citas

StarAI Robot Arm ROS2 Moveit2: [star-arm-moveit2](https://wiki.seeedstudio.com/es/starai_arm_ros_moveit/)

lerobot-starai github: [lerobot-starai](https://github.com/servodevelop/lerobot.git)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

Proyecto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT o ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)

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
