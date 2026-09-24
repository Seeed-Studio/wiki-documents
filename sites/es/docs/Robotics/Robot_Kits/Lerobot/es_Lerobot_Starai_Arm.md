---
description: Este wiki proporciona el tutorial de depuración para el brazo robótico StarAI y permite la recopilación de datos y el entrenamiento dentro del framework Lerobot.
title: StarAI Arm con LeRobot
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
  skip: [zh-CN]
createdAt: '2025-07-25'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/lerobot_starai_arm/
---

# Introducción al brazo robótico StarAI con LeRobot

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **Seguidor Viola** | **Líder Violin** | **Seguidor Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora!!! 🖱️</font></span></strong>
</a></div>

## Introducción de productos

1. **Open-Source y amigable para desarrolladores**
   Es una solución de brazo robótico de 6+1 DoF de código abierto y amigable para desarrolladores de [Fishion Star Technology Limited](https://fashionrobo.com/).
2. **Integración con LeRobot**
   Diseñado para la integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot), que proporciona modelos PyTorch, conjuntos de datos y herramientas para aprendizaje por imitación en tareas robóticas del mundo real — incluyendo recopilación de datos, simulación, entrenamiento y despliegue.
3. **Recursos de aprendizaje completos**
   Proporciona completos recursos de aprendizaje de código abierto como guías de ensamblaje y calibración, y ejemplos de tareas personalizadas de agarre para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.
4. **Compatible con Nvidia**
   Admite el despliegue en la plataforma reComputer Mini J4012 Orin NX 16GB.

## Características principales

- Listo para usar — No se requiere ensamblaje. Solo desempaqueta y sumérgete en el mundo de la IA.
- 6+1 grados de libertad y un alcance de 470 mm — Diseñado para versatilidad y precisión.
- Impulsado por servos de bus brushless dobles — Suave, silencioso y potente con hasta 300 g de carga útil.
- Pinza paralela con apertura máxima de 66 mm — Puntas de dedos modulares para una flexibilidad de reemplazo rápido.
- Tecnología exclusiva Hover Lock — Congela instantáneamente el brazo líder en cualquier posición con una sola pulsación.

## Especificaciones

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.jpg" />
</div>

| Elemento             | Brazo seguidor \| Viola                          | Brazo líder \|Violin                             |    Brazo seguidor \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| Grados de libertad   | 6+1                                               | 6+1                                               | 6+1             |
| Alcance              | 470mm                                             | 470mm                                             | 670mm |
| Repetibilidad        | 2mm                                               | -                                                 | 2mm  |
| Carga útil de trabajo| 300g (con 70% del alcance)                        | -                                                 |  750g (con 70% del alcance)   |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| Kit de pinza paralela| ✅                                                 | -                                                 | ✅   |
| Rotación de muñeca   | Sí                                                | Sí                                                | Sí |
| Mantener en cualquier posición | Sí                                       | Sí (con botón del mando)                          |  Sí|
| Montura de cámara en la muñeca |Proporciona archivos de referencia para impresión 3D | | Proporciona archivos de referencia para impresión 3D
| Funciona con LeRobot | ✅                                                 | ✅                                                 | ✅|
| Funciona con ROS 2   | ✅                                                 | ✅                                                | ✅|
| Funciona con MoveIt2 | ✅                                                 | ✅                                               |✅ |
| Funciona con Gazebo  | ✅                                                 |✅                                              |✅ |
| Concentrador de comunicación | UC-01                                      | UC-01                                             | UC-01 |
| Fuente de alimentación| 12V10A/120w XT30                                  | 12V10A/120w XT30                                 |12V25A/300w XT60  |

Para obtener más información sobre los servomotores, visita el siguiente enlace.

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## Configuración inicial del entorno

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.12
- Torch 2.6  

**Para Jetson Orin:**

- Jetson JetPack 6.0+  
- Python 3.12
- Torch 2.6  

## Instalación y depuración

### Instalar LeRobot

Es necesario instalar entornos como pytorch y torchvision en función de tu versión de CUDA.

1. Instalar Miniconda:
Para Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

O, para Ubuntu 22.04 X86:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Crear y activar un nuevo entorno conda para lerobot

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

3. Clonar Lerobot:

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. Al usar miniconda, instala ffmpeg en tu entorno:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Normalmente esto instala ffmpeg 7.X para tu plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (comprueba los codificadores compatibles con ffmpeg -encoders), puedes:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Solo en Linux] Instalar las dependencias de compilación de ffmpeg y compilar ffmpeg desde el código fuente con libsvtav1, y asegurarte de usar el binario de ffmpeg correspondiente a tu instalación con which ffmpeg.

:::

5. Instalar LeRobot:

```bash
cd ~/lerobot && pip install -e .
```

```bash
sudo apt remove brltty
```

Para dispositivos Jetson Jetpack (asegúrate de instalar [Pytorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) desde el paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6.Instalar dependencias del motor Fashionstar:

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

7. Comprobar Pytorch y Torchvision

Dado que instalar el entorno lerobot mediante pip desinstalará las versiones originales de Pytorch y Torchvision e instalará las versiones de CPU de Pytorch y Torchvision, necesitas realizar una comprobación en Python.

```python
import torch
print(torch.cuda.is_available())
```

Si el resultado impreso es False, necesitas reinstalar Pytorch y Torchvision de acuerdo con el [tutorial del sitio oficial](https://pytorch.org/index.html).

Si estás usando un dispositivo Jetson, instala Pytorch y Torchvision de acuerdo con [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

### Desempaquetar el brazo robótico

El kit del brazo robótico incluye

- Brazo líder
- Brazo seguidor
- Controlador (mando)
- Pinza paralela
- Herramientas de instalación (tornillos, llave hexagonal)
- Abrazadera en C ×2
- Placa de depuración UC-01 ×2

Interruptor de la placa de depuración UC-01：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/C0DsNSNl0dI?si=HQzFXNwGEEqdXz3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Configurar el puerto del brazo

Entra en el directorio `~/lerobot`:

```bash
cd ~/lerobot
```

Ejecuta el siguiente comando en la terminal para encontrar los puertos USB asociados a tus brazos：

```bash
lerobot-find-port
```

:::tip
Recuerda retirar el USB, de lo contrario la interfaz no será detectada.
:::

Por ejemplo：

1. Ejemplo de salida al identificar el puerto del brazo líder (por ejemplo, `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyUSB0` en Linux):
2. Ejemplo de salida al identificar el puerto del brazo seguidor (por ejemplo, `/dev/tty.usbmodem575E0032081`en Mac, o posiblemente `/dev/ttyUSB1` en Linux):

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

Una vez identificado, comprueba la información del ttyusb.

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

Por último, utiliza el comando chmod.

```sh
sudo chmod 777 /dev/ttyUSB*
```

:::

Es posible que necesites dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyUSB*
```

## Calibrar

Para ver videos que cubren el brazo robótico StarAI desde el desempaquetado hasta la teleoperación, puedes consultar:
<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/02lxxF9Cvy8?si=IGJda5nXkYEbm2N6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Mueve el brazo robótico a la posición inicial del brazo robótico (como se muestra en la figura siguiente) y ponlo en modo de espera, luego vuelve a conectar la fuente de alimentación. 


Para la posición inicial de la nueva versión del brazo robótico, se debe prestar especial atención a garantizar que los servos de las articulaciones 3, 4 y 5 se alineen estrictamente con las posiciones de la figura.


| **Nuevo brazo líder de violín** | **Antiguo brazo líder de violín** | **Brazo seguidor de viola** |**Brazo seguidor de violonchelo** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png) |![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello_init.png) |

Por ejemplo:

| **Brazo líder de violín** | **Brazo seguidor de viola** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_rest.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_rest.jpg) |


:::tip
Tomando como ejemplo un PC (Linux) y una placa Jetson, el `primer` dispositivo USB insertado se asignará a `ttyUSB0`, y el `segundo` dispositivo USB insertado se asignará a `ttyUSB1`.

Por favor, presta atención a las interfaces de mapeo del líder y el seguidor antes de ejecutar el código.
:::

#### Brazo robótico líder

Conecta el líder a `/dev/ttyUSB0`, o modifica el parámetro `--teleop.port`, y luego ejecuta:

```bash
lerobot-calibrate     --teleop.type=lerobot_teleoperator_violin --teleop.port=/dev/ttyUSB0 --teleop.id=my_awesome_staraiviolin_arm
```

Después de iniciar, verás los valores del codificador de cada articulación. Debes calibrar manualmente cada articulación una por una: gira cada articulación hasta sus posiciones máxima y mínima. Para las articulaciones sin topes de límite, el rango de giro no debe exceder 180° en el sentido de las agujas del reloj ni 180° en sentido contrario. Después de calibrar todas las articulaciones, pulsa Intro para guardar la configuración.

#### Brazo robótico seguidor

Conecta el seguidor a `/dev/ttyUSB1`, o modifica el parámetro `--teleop.port`, y luego ejecuta:

Viola:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_viola --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraiviola_arm
```

Violonchelo:
```bash
lerobot-calibrate     --robot.type=lerobot_robot_cello --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraicello_arm
```

Después de iniciar, verás los valores del codificador de cada articulación. Debes calibrar manualmente cada articulación una por una: gira cada articulación hasta sus posiciones máxima y mínima. Para las articulaciones sin topes de límite, el rango de giro no debe exceder 180° en el sentido de las agujas del reloj ni 180° en sentido contrario. Después de calibrar todas las articulaciones, pulsa Intro para guardar la configuración.

:::tip
Los archivos de calibración se guardarán en las siguientes rutas: `~/.cache/huggingface/lerobot/calibration/robots` y `~/.cache/huggingface/lerobot/calibration/teleoperators`.
:::

### Configuración de calibración de doble brazo

<details>
<summary> Tutorial </summary>

#### Brazo robótico líder

Conecta `left_arm_port` a `/dev/ttyUSB0` y `right_arm_port` a `/dev/ttyUSB2`, o modifica los parámetros `--teleop.left_arm_port` y `--teleop.right_arm_port`, y luego ejecuta:

```bash
lerobot-calibrate     --teleop.type=lerobot_teleoperator_bimanual_leader  --teleop.left_arm_port=/dev/ttyUSB0  --teleop.right_arm_port=/dev/ttyUSB2  --teleop.id=bi_starai_violin_leader
```

Después de iniciar, verás los valores del codificador de cada articulación. Debes calibrar manualmente cada articulación una por una: gira cada articulación hasta sus posiciones máxima y mínima. Para las articulaciones sin topes de límite, el rango de giro no debe exceder 180° en el sentido de las agujas del reloj ni 180° en sentido contrario. Después de calibrar todas las articulaciones, pulsa Intro para guardar la configuración.

#### Brazo robótico seguidor

Conecta `left_arm_port` a `/dev/ttyUSB1` y `right_arm_port` a `/dev/ttyUSB3`, o modifica los parámetros `--robot.left_arm_port` y `--robot.right_arm_port`, y luego ejecuta:

Vioa:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_bimanual_follower  --robot.arm_name=starai_viola  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_viola_follower
```

Violonchelo:

```bash
lerobot-calibrate     --robot.type=lerobot_robot_bimanual_follower  --robot.arm_name=starai_cello  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_cello_follower
```

Después de iniciar, verás los valores del codificador de cada articulación. Debes calibrar manualmente cada articulación una por una: gira cada articulación hasta sus posiciones máxima y mínima. Para las articulaciones sin topes de límite, el rango de giro no debe exceder 180° en el sentido de las agujas del reloj ni 180° en sentido contrario. Después de calibrar todas las articulaciones, pulsa Intro para guardar la configuración.

:::tip

La diferencia entre las configuraciones de un solo brazo y de doble brazo radica en los parámetros `--teleop.type` y `--robot.type`. Además, las configuraciones de doble brazo requieren puertos USB separados para los brazos izquierdo y derecho, con un total de cuatro puertos USB: `--teleop.left_arm_port`, `--teleop.right_arm_port`, `--robot.left_arm_port` y `--robot.right_arm_port`.

Si utilizas una configuración de doble brazo, debes modificar manualmente los tipos de archivo del brazo robótico `--teleop.type` y `--robot.type`, así como los puertos USB `--teleop.left_arm_port`, `--teleop.right_arm_port`, `--robot.left_arm_port` y `--robot.right_arm_port`, para adaptarlos a los comandos de teleoperación, recopilación de datos, entrenamiento y evaluación.

:::

</details>

## Teleoperar

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/02lxxF9Cvy8?si=IGJda5nXkYEbm2N6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Mueve el brazo a la posición mostrada en el diagrama y ponlo en espera.

| **Brazo líder de violín** | **Brazo seguidor de viola** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_rest.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_rest.jpg) |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

Entonces estarás listo para teleoperar tu robot (¡no mostrará las cámaras)! Ejecuta este sencillo script:

Violín&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

Violín&Violonchelo:

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
<summary> Doble brazo </summary>

Violín&Viola:

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

Violín&Violonchelo:

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

Después de que el programa se inicie, la tecnología Hover Lock permanece funcional.

## Añadir cámaras

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

- 🚀 Paso 1: Instalar el entorno dependiente del SDK de Orbbec

1. Clona el repositorio `pyorbbec`

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. Descarga e instala el **archivo .whl** correspondiente para el SDK  
   Ve a [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases),  
   selecciona e instala según tu versión de Python. Por ejemplo:

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

  Se pueden ignorar los mensajes de error en rojo.

4. Clona el SDK de Orbbec en el directorio `~/lerobot/src/cameras`

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. Modifica utils.py y **init**.py

- Encuentra `utils.py` en el directorio `~/lerobot/src/lerobot/cameras` y añade el siguiente código en la línea 40:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- Encuentra `__init__.py` en el directorio `~/lerobot/src/lerobot/cameras` y añade el siguiente código en la línea 18:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 Paso 2: Llamada de funciones y ejemplos

En todos los ejemplos siguientes, reemplaza `starai_viola` con el modelo real del brazo robótico que estés usando (por ejemplo, `so100` / `so101`).

Hemos añadido el hiperparámetro `focus_area`. Dado que los datos de profundidad que están demasiado lejos no tienen sentido para el brazo robótico (no puede alcanzar ni agarrar objetos), los datos de profundidad menores o mayores que el `focus_area` se mostrarán en negro. El `focus_area` predeterminado es (20, 600).  
Actualmente, la única resolución compatible es ancho: 640, alto: 880.

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

Para tareas posteriores como recopilación de datos, entrenamiento y evaluación, el proceso es el mismo que para los comandos RGB normales. Solo necesitas reemplazar la parte correspondiente en el comando RGB normal con:

  ```
  --robot.cameras="{ front: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:(20,600)}}" \
  ```

También puedes añadir posteriormente una cámara RGB monocular adicional.

</details>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Después de insertar tus dos cámaras USB, ejecuta el siguiente script para comprobar los números de puerto de las cámaras. Es importante recordar que la cámara no debe conectarse a un USB Hub; en su lugar, debe enchufarse directamente al dispositivo. La menor velocidad de un USB Hub puede provocar que no se puedan leer los datos de imagen.

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

Después de confirmar las cámaras externas, reemplaza la información de la cámara que aparece a continuación con la información real de tus cámaras, y podrás mostrar las cámaras en tu ordenador durante la operación remota:

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
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, bajo el formato `MJPG`, se pueden soportar 3 cámaras con una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, sigue sin recomendarse conectar 2 cámaras a un ordenador a través del mismo USB HUB.
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
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, bajo el formato `MJPG`, se pueden soportar 3 cámaras con una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, sigue sin recomendarse conectar 2 cámaras a un ordenador a través del mismo USB HUB.
:::


<details>
<summary> Dual-Arm </summary>

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
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, bajo el formato `MJPG`, se pueden soportar 3 cámaras con una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, sigue sin recomendarse conectar 2 cámaras a un ordenador a través del mismo USB HUB.
:::


</details>

:::tip
Si encuentras un bug como este.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

Puedes degradar la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::

## Registrar el conjunto de datos

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Una vez que estés familiarizado con la teleoperación, puedes registrar tu primer conjunto de datos.

Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho antes, asegúrate de haber iniciado sesión usando un token con permiso de escritura, que se puede generar desde los [ajustes de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Guarda el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

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
<summary> Dual-Arm </summary>

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
Para diferenciar entre configuraciones de un solo brazo y de dos brazos, aquí el `--dataset.repo_id` se llama `starai/record-test_bi_arm`.
:::

</details>

:::tip
Si no quieres usar la función de subida de conjuntos de datos al Hugging Face Hub, puedes elegir `--dataset.push_to_hub=false`. Además, reemplaza `--dataset.repo_id=${HF_USER}/starai` con un nombre de carpeta local personalizado, por ejemplo, `--dataset.repo_id=starai/record-test`. Los datos se almacenarán en `~/.cache/huggingface/lerobot` dentro del directorio home del sistema.
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
<summary> Dual-Arm </summary>

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
Para diferenciar entre configuraciones de un solo brazo y de dos brazos, aquí el `--dataset.repo_id` se llama `starai/record-test_bi_arm`.
:::

</details>

- `record` proporciona un conjunto de herramientas para capturar y gestionar datos durante las operaciones del robot:

#### 1. Almacenamiento de datos

- Los datos se almacenan en el formato `LeRobotDataset` y se guardan en disco durante el proceso de grabación.

#### 2. Puntos de control y reanudación

- Los puntos de control se crean automáticamente durante la grabación.
- Si ocurre algún problema, puedes reanudar ejecutando de nuevo el mismo comando con `--resume=true`. Al reanudar la grabación, debes establecer `--dataset.num_episodes` en el **número adicional de episodios que se van a grabar**, no en el número total objetivo de episodios del conjunto de datos.
- Para empezar a grabar desde cero, **elimina manualmente** el directorio del conjunto de datos.

#### 3. Parámetros de grabación

Configura el flujo de trabajo de grabación de datos usando parámetros de línea de comandos:

```markdown
Parameter Description
- warmup-time-s: The initialization time.
- episode-time-s: The duration for each data collection session.
- reset-time-s: The preparation time between each data collection.
- num-episodes: The expected number of data sets to collect.
- push-to-hub: Determines whether to upload the data to HuggingFace Hub.
```

#### 4. Controles de teclado durante la grabación

Usa atajos de teclado para controlar el flujo de trabajo de grabación de datos:

- Pulsa **la tecla de flecha derecha (→)**: Detén prematuramente el episodio actual o reinicia el tiempo y luego pasa al siguiente.
- Pulsa **la tecla de flecha izquierda (←)**: Cancela el episodio actual y vuelve a grabarlo.
- Pulsa **ESC**: Detén la sesión inmediatamente, codifica el vídeo y sube el conjunto de datos.

:::tip

Si el teclado no funciona, puede que necesites instalar otra versión de pynput.

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
<summary> Doble brazo </summary>

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

## Entrenar y evaluar la política

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
<summary> Doble brazo </summary>

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

1. `policy.type` admite la entrada `diffusion,pi0,pi0fast`
1. Proporcionamos el conjunto de datos como un parámetro: `dataset.repo_id=starai/record-test`.
2. Cargaremos la configuración desde [`configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py). Es importante destacar que esta política se adaptará automáticamente a los estados de los motores del robot, las acciones de los motores y el número de cámaras, y se guardará en tu conjunto de datos.
3. Proporcionamos `wandb.enable=true` para usar [Weights and Biases](https://docs.wandb.ai/quickstart) para visualizar las gráficas de entrenamiento. Esto es opcional, pero si lo utilizas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

**Evaluar**


Ejecuta el siguiente comando para registrar 10 episodios de evaluación:

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
<summary> Doble brazo </summary>

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

Como puedes ver, esto es casi lo mismo que el comando utilizado anteriormente para registrar el conjunto de datos de entrenamiento, con unos pocos cambios:

1. El parámetro `--policy.path`, que indica la ruta al archivo de pesos de tu política entrenada (por ejemplo, `outputs/train/act_viola_test/checkpoints/last/pretrained_model`). Si has subido los pesos de tu modelo al Hub, también puedes usar el repositorio del modelo (por ejemplo, `${HF_USER}/starai`).

2. El nombre del conjunto de datos de evaluación `dataset.repo_id` comienza con `eval_`. Esta operación registrará vídeos y datos específicamente para la fase de evaluación, que se guardarán en una carpeta que comience con `eval_`, como `starai/eval_record-test`.

3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/starai/eval_xxxx'` durante la fase de evaluación, elimina la carpeta que comience con `eval_` y ejecuta el programa de nuevo.

4. Cuando te encuentres con `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, asegúrate de que las palabras clave como `up` y `front` en el parámetro `--robot.cameras` sean estrictamente coherentes con las utilizadas durante la fase de recopilación de datos.

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

LIBERO es un benchmark diseñado para estudiar el aprendizaje continuo de robots. La idea es que los robots no solo se preentrenarán una vez en una fábrica, sino que necesitarán seguir aprendiendo y adaptándose junto con sus usuarios humanos a lo largo del tiempo. Esta adaptación continua se denomina aprendizaje continuo en la toma de decisiones (LLDM), y es un paso clave hacia la construcción de robots que se conviertan en ayudantes verdaderamente personalizados.

- [Artículo de LIBERO](https://arxiv.org/abs/2306.03310)
- [Repositorio original de LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO)

LIBERO incluye cinco conjuntos de tareas:

- LIBERO-Spatial (libero_spatial): tareas que requieren razonar sobre relaciones espaciales.

- LIBERO-Object (libero_object): tareas centradas en manipular diferentes objetos.

- LIBERO-Goal (libero_goal): tareas condicionadas por objetivos en las que el robot debe adaptarse a objetivos cambiantes.

- LIBERO-90 (libero_90): 90 tareas de horizonte corto de la colección LIBERO-100.

- LIBERO-Long (libero_10): 10 tareas de horizonte largo de la colección LIBERO-100.

Juntas, estas suites cubren 130 tareas, que van desde manipulaciones simples de objetos hasta escenarios complejos de múltiples pasos. LIBERO está pensada para crecer con el tiempo y servir como un benchmark compartido donde la comunidad pueda probar y mejorar algoritmos de aprendizaje de por vida.

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

**Evaluación**

Para instalar LIBERO, después de seguir las instrucciones oficiales de LeRobot, simplemente ejecuta: `pip install -e ".[libero]"`

**Evaluación de una sola suite**

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

- `--eval.n_episodes` establece cuántos episodios se ejecutan en total.

**Evaluación multi-suite**

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- Pasa una lista separada por comas a `--env.task` para la evaluación multi-suite.

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




Reanuda el entrenamiento desde un checkpoint específico.

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



## Preguntas frecuentes (FAQ)

- Si estás utilizando el tutorial de este documento, por favor ejecuta `git clone` en el repositorio de GitHub recomendado: `https://github.com/servodevelop/lerobot.git`.

- Si la teleoperación funciona con normalidad pero la teleoperación con una cámara no muestra la interfaz de imagen, consulta [aquí](https://github.com/huggingface/lerobot/pull/757/files).

- Si encuentras un problema con libtiff durante la teleoperación del conjunto de datos, actualiza la versión de libtiff.

  ```bash
  conda install libtiff==4.5.0  # for Ubuntu 22.04, use libtiff==4.5.1
  ```

- Después de instalar LeRobot, puede desinstalar automáticamente la versión GPU de PyTorch, por lo que necesitas instalar manualmente torch-gpu.

- Para Jetson, instala primero [PyTorch y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) antes de ejecutar `conda install -y -c conda-forge ffmpeg`; de lo contrario, habrá un problema de incompatibilidad de versiones al compilar torchvision.

- Entrenar 50 episodios de datos ACT en un portátil con 3060 8GB lleva aproximadamente 6 horas, mientras que entrenar 50 episodios en un ordenador con 4090 o A100 lleva alrededor de 2-3 horas.

- Durante la recopilación de datos, asegúrate de la estabilidad de la posición y el ángulo de la cámara, así como de la iluminación del entorno, y minimiza el fondo inestable y los peatones capturados por la cámara. De lo contrario, cambios significativos en el entorno de despliegue pueden hacer que el brazo robótico no pueda agarrar objetos con normalidad.

- El `num-episodes` en el comando de recopilación de datos debe garantizar una recopilación de datos suficiente y no debe pausarse manualmente a mitad de camino. Esto se debe a que la media y la varianza de los datos se calculan solo después de que se completa la recopilación de datos, lo cual es necesario para el entrenamiento.

- Si el programa indica que no puede leer los datos de imagen de la cámara USB, asegúrate de que la cámara USB no esté conectada a través de un Hub. La cámara USB debe estar conectada directamente al dispositivo para garantizar velocidades rápidas de transmisión de imágenes.

## Cita

StarAI Robot Arm ROS2 Moveit2: [star-arm-moveit2](https://wiki.seeedstudio.com/es/starai_arm_ros_moveit/)

lerobot-starai github: [lerobot-starai](https://github.com/servodevelop/lerobot.git)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

Proyecto en Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT o ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)

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
