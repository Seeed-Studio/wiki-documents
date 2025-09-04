---
description: Este wiki proporciona el tutorial de depuración para el brazo robótico Starai y realiza la recolección de datos y entrenamiento dentro del marco de trabajo Lerobot.
title: Cómo usar el brazo robótico LeRobot-starai en Lerobot
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /es/lerobot_starai_arm
last_update:
  date: 8/20/2025
  author: LiShanghang
---

# Cómo usar el brazo robótico LeRobot-starai en Lerobot

:::tip
 [LeRobot](https://github.com/huggingface/lerobot/tree/main) está comprometido con proporcionar modelos, conjuntos de datos y herramientas para robótica del mundo real en PyTorch. Su objetivo es reducir la barrera de entrada de la robótica, permitiendo que todos contribuyan y se beneficien del intercambio de conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones del mundo real, centrándose en el aprendizaje por imitación. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos que presentan demostraciones recopiladas por humanos y entornos de simulación, permitiendo a los usuarios comenzar sin la necesidad de ensamblar robots. En las próximas semanas, la intención es aumentar el soporte para robótica del mundo real en los robots más rentables y competentes actualmente accesibles.
:::

## Introducción del Producto

1. **Código Abierto y Fácil para Desarrollo Secundario**
    Esta serie de servomotores, proporcionada por [Fashion Robotics](https://fashionrobo.com/), ofrece una solución de brazo robótico de código abierto y fácilmente personalizable de 6+1 grados de libertad.

2. **Soporte de Integración con la Plataforma LeRobot**
    Está específicamente diseñado para integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma proporciona modelos PyTorch, conjuntos de datos y herramientas para aprendizaje por imitación en tareas de robótica del mundo real, incluyendo recolección de datos, simulación, entrenamiento y despliegue.

3. **Abundantes Recursos de Aprendizaje**
    Ofrecemos recursos de aprendizaje de código abierto integrales, incluyendo configuración de entorno, guías de instalación y depuración, y ejemplos de tareas de agarre personalizadas para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.

4. **Compatibilidad con Plataforma Nvidia**
    Se admite el despliegue a través de la plataforma reComputer Mini J4012 Orin NX 16GB.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/pAKqP_vReNY?si=AaZQ_DBQyY2p0YMf" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Características Clave

- Listo para Usar -- No Requiere Ensamblaje. Solo Desempaca y Sumérgete en el Mundo de la IA.
- 6+1 Grados de Libertad y un Alcance de 470mm -- Construido para Versatilidad y Precisión.
- Alimentado por Servos de Bus sin Escobillas Duales -- Suave, Silencioso y Fuerte con hasta 300g de Carga Útil.
- Pinza Paralela con Apertura Máxima de 66mm -- Puntas de Dedos Modulares para Flexibilidad de Reemplazo Rápido.
- Tecnología Exclusiva de Bloqueo Flotante -- Congela Instantáneamente el Brazo Líder en Cualquier Posición con una Sola Presión.

## Especificaciones

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
  </div>

| Elemento             | Brazo Seguidor \| Viola                           | Brazo Líder \|Violin                              |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |
| Grados de Libertad   | 6                                                 | 6+1                                               |
| Alcance              | 470mm                                             | 470mm                                             |
| Envergadura          | 940mm                                             | 940mm                                             |
| Repetibilidad        | 2mm                                               | -                                                 |
| Carga de Trabajo     | 300g (con 70% de Alcance)                        | -                                                 |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |
| Kit de Pinza Paralela| ✅                                                 | -                                                 |
| Rotación de Muñeca   | Sí                                                | Sí                                                |
| Mantener en Cualquier Posición | Sí                                      | Sí (con botón del mango)                          |
| Montaje de Cámara en Muñeca | ✅                                         | -                                                 |
| Funciona con LeRobot | ✅                                                 | ✅                                                 |
| Funciona con ROS 2   | ✅                                                 | /                                                 |
| Funciona con MoveIt  | ✅                                                 | /                                                 |
| Funciona con Gazebo  | ✅                                                 | /                                                 |
| Hub de Comunicación  | UC-01                                             | UC-01                                             |
| Fuente de Alimentación | 12v/120w                                        | 12v/120w                                          |

Para más información sobre motores servo, por favor visita el siguiente enlace.

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

O, para X86 Ubuntu 22.04:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Create and activate a fresh conda environment for lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clona Lerobot:

```bash
git clone https://github.com/servodevelop/lerobot-starai.git
```

4. Cuando uses miniconda, instala ffmpeg en tu entorno:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Esto usualmente instala ffmpeg 7.X para tu plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (verifica los codificadores compatibles con ffmpeg -encoders), puedes:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Solo en Linux] Instala las dependencias de compilación de ffmpeg y compila ffmpeg desde el código fuente con libsvtav1, y asegúrate de usar el binario de ffmpeg correspondiente a tu instalación con which ffmpeg.

:::

5. Instala LeRobot con dependencias para los motores feetech:

```bash
cd ~/lerobot-starai && pip install -e ".[feetech]"
```

Para dispositivos Jetson Jetpack (por favor asegúrate de instalar [Pytorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) del paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. Verificar Pytorch y Torchvision

Dado que instalar el entorno lerobot a través de pip desinstalará el Pytorch y Torchvision originales e instalará las versiones CPU de Pytorch y Torchvision, necesitas realizar una verificación en Python.

```python
import torch
print(torch.cuda.is_available())
```

Si el resultado impreso es False, necesitas reinstalar Pytorch y Torchvision según el [tutorial del sitio web oficial](https://pytorch.org/index.html).

Si estás usando un dispositivo Jetson, instala Pytorch y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

### Desempaquetado del Brazo Robótico

El Kit de Brazo Robótico Incluye

- Brazo líder
- Brazo seguidor
- Controlador (mango)
- Pinza paralela
- Herramientas de instalación (tornillos, llave hexagonal)
- Fuente de alimentación ×2
- Abrazadera en C ×2
- Placa de depuración UC-01 ×2

Interruptor de la placa de depuración UC-01：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

### Configurar Puerto del Brazo

Ejecuta el siguiente comando en la terminal para encontrar los puertos USB asociados a tus brazos：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

:::tip
Recuerda quitar el usb, de lo contrario la interfaz no será detectada.
:::

Por ejemplo：

1. Salida de ejemplo al identificar el puerto del brazo líder (ej., `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):
2. Salida de ejemplo al identificar el puerto del brazo seguidor (ej., `/dev/tty.usbmodem575E0032081` en Mac, o posiblemente `/dev/ttyACM1` en Linux):

Es posible que necesites dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

Abre el archivo `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

Usa Ctrl+F para buscar starai y localiza el siguiente código. Luego, necesitas modificar la configuración de puertos de follower_arms y leader_arms para que coincida con la configuración real de puertos.

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None
    
    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",##### UPDATE HEARE
                interval = 100,        
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",##### UPDATE HEARE
                interval = 100,        
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )
```

### Establecer Parámetros de Tiempo de Ejecución

Abrir archivo `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

Usar Ctrl + F para buscar starai y localizar el siguiente código. Luego, necesitas modificar la configuración de intervalo de follower_arms.

- Descripción: Cuanto menor sea el intervalo de tiempo, más rápido responde el seguidor, y cuanto mayor sea el intervalo de tiempo, más estable funciona el seguidor.
- Rango de Valores: Entero, mayor que 50 y menor que 2000.

Se recomienda establecer el intervalo en 100 (valor predeterminado) durante la teleoperación para una mejor capacidad de respuesta, y en 1000 durante la ejecución autónoma en fases de evaluación para asegurar un movimiento más estable.

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",
                interval = 100,        
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",
                interval = 100, ##### UPDATE HEARE
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

```

### Calibrar

Normalmente, el brazo robótico está pre-calibrado de fábrica y no requiere recalibración. Si se encuentra que un motor de articulación permanece en una posición límite durante un período prolongado, por favor contáctanos para obtener el archivo de calibración y realizar la recalibración nuevamente.

<details>
<summary> Nota </summary>

Si el puerto serie ttyUSB0 no puede ser identificado, prueba las siguientes soluciones:

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
sudo chmod 666 /dev/ttyUSB0
```

</details>

## Teleoperar

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Mueve el brazo a la posición mostrada en el diagrama y ponlo en espera.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

**Teleoperar simple**
¡Entonces estás listo para teleoperar tu robot! Ejecuta este script simple (no se conectará ni mostrará las cámaras):

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

Después de que el programa se inicia, el botón Hold permanece funcional.

## Añadir cámaras

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Después de insertar sus dos cámaras USB, ejecute el siguiente script para verificar los números de puerto de las cámaras. Es importante recordar que la cámara no debe estar conectada a un Hub USB; en su lugar, debe estar enchufada directamente al dispositivo. La velocidad más lenta de un Hub USB puede resultar en la incapacidad de leer datos de imagen.

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

La terminal imprimirá la siguiente información. Por ejemplo, la cámara del portátil es `index 0`, y la cámara USB es `index 2`.

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 0
Camera found at index 2
[...]
Connecting cameras
OpenCVCamera(0, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

Puedes encontrar las imágenes tomadas por cada cámara en el directorio `outputs/images_from_opencv_cameras`, y confirmar la información del índice de puerto correspondiente a las cámaras en diferentes posiciones. Luego completa la alineación de los parámetros de la cámara en el archivo `lerobot-starai/lerobot/common/robot_devices/robots/configs.py`.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/camera.png" />
</div>

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"

    cameras: dict[str, CameraConfig] = field(
        default_factory=*lambda*: {
            "laptop": OpenCVCameraConfig(
                camera_index=2,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=0,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

​    mock: bool = False
  
```

Entonces podrás mostrar las cámaras en tu computadora mientras estés teleoperando：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=teleoperate \
  --control.display_data=true
```

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

Una vez que estés familiarizado con la teleoperación, puedes grabar tu primer conjunto de datos.

Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho previamente, asegúrate de haber iniciado sesión usando un token de acceso de escritura, que se puede generar desde la [configuración de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Almacena el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

:::tip
Si no deseas usar la función de carga de conjuntos de datos del Hub de Hugging Face, puedes optar por `--control.push_to_hub=false`. Además, reemplaza `--control.repo_id=${HF_USER}/starai` con un nombre de carpeta local personalizado, como `--control.repo_id=starai/starai`. Los datos se almacenarán en el directorio `~/.cache/huggingface/lerobot` bajo el directorio home del sistema.
:::

Graba 20 episodios y sube tu conjunto de datos al hub:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/starai \
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=ture
```

No subir al Hub:
**(Recomendado, los siguientes tutoriales se enfocarán principalmente en datos locales)**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/starai \#Assign a name to the local storage file yourself
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=false #set push_to_hub to false
```

Verás datos similares a los siguientes:

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

```markdown
Parameter Explanations
- wormup-time-s: It refers to the initialization time.
- episode-time-s: It represents the time for collecting data each time.
- reset-time-s: It is the preparation time between each data collection.
- num-episodes: It indicates how many groups of data are expected to be collected.
- push-to-hub: It determines whether to upload the data to the HuggingFace Hub. 
```

:::tip

- **De nuevo**: "Si quieres guardar los datos localmente (`--control.push_to_hub=false`), reemplaza `--control.repo_id=${HF_USER}/starai` con un nombre de carpeta local personalizado, como `--control.repo_id=starai/starai`. Entonces se almacenará en el directorio home del sistema en `~/.cache/huggingface/lerobot`."

- Nota: Puedes reanudar la grabación añadiendo `--control.resume=true`. También si aún no has subido tu conjunto de datos, añade `--control.local_files_only=true`. Necesitarás eliminar manualmente el directorio del conjunto de datos si quieres empezar a grabar desde cero.

- Si subiste tu conjunto de datos al hub con `--control.push_to_hub=true`, puedes [visualizar tu conjunto de datos en línea](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando y pegando tu repo id dado por:

- Presiona la flecha derecha → en cualquier momento durante la grabación del episodio para detener temprano e ir al reinicio. Lo mismo durante el reinicio, para detener temprano e ir a la siguiente grabación de episodio.

- Presiona la flecha izquierda ← en cualquier momento durante la grabación del episodio o reinicio para detener temprano, cancelar el episodio actual, y volver a grabarlo.

- Presiona escape ESC en cualquier momento durante la grabación del episodio para terminar la sesión temprano e ir directamente a la codificación de video y subida del conjunto de datos.

- Una vez que te sientas cómodo con la grabación de datos, puedes crear un conjunto de datos más grande para entrenamiento. Una buena tarea inicial es agarrar un objeto en diferentes ubicaciones y colocarlo en un contenedor. Sugerimos grabar al menos 50 episodios, con 10 episodios por ubicación. Mantén las cámaras fijas y mantén un comportamiento de agarre consistente a lo largo de las grabaciones. También asegúrate de que el objeto que estás manipulando sea visible en las cámaras. Una buena regla general es que deberías poder hacer la tarea tú mismo solo mirando las imágenes de la cámara.

- En las siguientes secciones, entrenarás tu red neuronal. Después de lograr un rendimiento de agarre confiable, puedes empezar a introducir más variaciones durante la recolección de datos, como ubicaciones de agarre adicionales, diferentes técnicas de agarre, y alterar las posiciones de la cámara.

- Evita añadir demasiada variación muy rápidamente, ya que puede perjudicar tus resultados.

- En Linux, si las teclas de flecha izquierda y derecha y la tecla escape no tienen ningún efecto durante la grabación de datos, asegúrate de haber configurado la variable de entorno $DISPLAY. Ver [limitaciones de pynput](https://pynput.readthedocs.io/en/latest/limitations.html#linux).

:::

## Visualizar el conjunto de datos

El conjunto de datos se guarda localmente. Puedes visualizarlo localmente con:

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id starai/starai \
```

Aquí, `starai/starai` es el nombre personalizado de `repo_id` definido al recopilar datos.

## Reproducir un episodio

Ahora intenta reproducir el primer episodio en tu robot:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=starai/starai \
  --control.episode=0 \# 0 is the first episode
  --control.local_files_only=true
```

:::tip
El parámetro `--control.local_files_only=true` se utiliza para instruir al programa a utilizar conjuntos de datos locales en lugar de aquellos del Hub.
:::

## Entrenar una política

Para entrenar una política para controlar tu robot, usa el script `python lerobot/scripts/train.py`. Se requieren algunos argumentos. Aquí tienes un comando de ejemplo:

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=starai/starai \
  --policy.type=act \
  --output_dir=outputs/train/act_starai \
  --job_name=act_starai \
  --policy.device=cuda \
  --wandb.enable=false
```

Vamos a explicarlo:

1. Usamos nuestro conjunto de datos local como argumento `--dataset.repo_id=starai/starai`.
2. Proporcionamos la política usando `policy.type=act`, que cargará la configuración desde [`lerobot-starai/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py). Actualmente, ACT ha sido probado, pero también puedes probar otras políticas como diffusion, pi0, pi0fast, tdmpc y vqbet.
3. Proporcionamos policy.device=cuda ya que estamos entrenando en una GPU Nvidia, pero podrías usar policy.device=mps para entrenar en silicio de Apple.
4. Proporcionamos `wandb.enable=true` para usar [Weights and Biases](https://docs.wandb.ai/quickstart) para visualizar gráficos de entrenamiento. Esto es opcional pero si lo usas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

Si quieres entrenar en un conjunto de datos local, asegúrate de que el `repo_id` coincida con el usado durante la recolección de datos. El entrenamiento debería tomar varias horas. Encontrarás puntos de control en `outputs/train/act_starai/checkpoints`.

Para reanudar el entrenamiento desde un punto de control, a continuación hay un comando de ejemplo para reanudar desde el último punto de control del `act_starai`:

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_starai/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## Evalúa tu política

Puedes usar la función `record` de [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) , pero con un checkpoint de política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/eval_act_starai \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=false \#Choose don't upload to Hub
  --control.policy.path=outputs/train/act_starai/checkpoints/last/pretrained_model
```

Como puedes ver, esto es casi idéntico al comando utilizado previamente para grabar el conjunto de datos de entrenamiento. Solo hay dos diferencias:

1. Se ha añadido el parámetro `--control.policy.path` para indicar la ruta de tu checkpoint de política (por ejemplo, `outputs/train/act_starai/checkpoints/last/pretrained_model`).
2. El nombre del conjunto de datos de evaluación **debe** comenzar con `eval` para reflejar que estás ejecutando inferencia (por ejemplo, `--control.repo_id=starai/eval_act_starai`). Esta operación grabará videos y datos específicamente durante la evaluación y los guardará en `eval_act_starai`.

:::warning
Si ocurre un error cuando ejecutas el comando de evaluación por segunda vez, necesitas eliminar el archivo `eval_act_starai` correspondiente para asegurar que no haya archivos con el mismo nombre bajo el directorio `~/.cache/huggingface/lerobot/starai/`.
:::

:::tip
Si subes tu checkpoint del modelo al Hub, también puedes usar el repositorio del modelo (por ejemplo, `--control.repo_id=${HF_USER}/eval_act_starai`), mientras estableces `--control.push_to_hub=true`.
:::

## FAQ

- Si estás siguiendo esta documentación/tutorial, por favor clona el repositorio de GitHub recomendado `git clone https://github.com/servodevelop/lerobot-starai.git`.

- Si encuentras el siguiente error, necesitas verificar si el brazo robótico conectado al puerto correspondiente está encendido y si los servos del bus tienen cables sueltos o desconectados.

  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- Si has reparado o reemplazado cualquier parte del brazo robótico, por favor elimina completamente la carpeta `~/lerobot/.cache/huggingface/calibration/so100` y recalibra el brazo robótico.

- Si el control remoto funciona normalmente pero el control remoto con Cámara no logra mostrar la interfaz de imagen, puedes encontrar [aquí](https://github.com/huggingface/lerobot/pull/757/files)

- Si encuentras problemas con libtiff durante la operación remota del conjunto de datos, por favor actualiza la versión de libtiff.

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- Después de ejecutar la [Instalación de Lerobot](https://wiki.seeedstudio.com/es/lerobot_so100m/#install-lerobot), la versión GPU de pytorch puede desinstalarse automáticamente, por lo que necesitas instalar manualmente torch-gpu.

- Para Jetson, por favor instala primero [Pytorch y Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) antes de ejecutar `conda install -y -c conda-forge ffmpeg`, de lo contrario, al compilar torchvision, puede ocurrir un problema de incompatibilidad de versión de ffmpeg.

- Si ocurre el siguiente problema, significa que tu computadora no soporta este formato de códec de video. Necesitas modificar la línea 134 en el archivo `lerobot-starai/lerobot/common/datasets/video_utils.py` cambiando el valor de `vcodec: str = "libsvtav1"` a `libx264` o `libopenh264`. Diferentes computadoras pueden requerir diferentes parámetros, por lo que puedes probar varias opciones. [Issues 705](https://github.com/huggingface/lerobot/issues/705)
  
  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ```

- ¡Importante! Si durante la ejecución el cable del servo se afloja, por favor restaura el servo a su posición inicial y luego reconecta el cable del servo. También puedes calibrar individualmente un servo usando el [Comando de Inicialización del Servo](https://wiki.seeedstudio.com/es/lerobot_so100m/#configure-the-motors), asegurándote de que solo un cable esté conectado entre el servo y la placa del controlador durante la calibración individual. Si encuentras

  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```

  o otros errores durante el proceso de calibración del brazo robótico relacionados con ángulos y valores que exceden los límites, este método sigue siendo aplicable.

- Entrenar 50 conjuntos de datos ACT en una laptop con 8G 3060 toma aproximadamente 6 horas, mientras que en una computadora 4090 o A100, entrenar 50 conjuntos de datos toma alrededor de 2–3 horas.

- Durante la recolección de datos, asegúrese de que la posición, ángulo e iluminación ambiental de la cámara permanezcan estables, y minimice la captura de fondos inestables excesivos y peatones; de lo contrario, cambios ambientales significativos durante el despliegue pueden causar que el brazo robótico falle al agarrar correctamente.

- Asegúrese de que el parámetro `num-episodes` en el comando de recolección de datos esté configurado para recolectar datos suficientes, y no pause manualmente a la mitad. Esto es porque la media y varianza de los datos se calculan solo después de que la recolección de datos esté completa, lo cual es necesario para el entrenamiento.

- Si el programa indica que no puede leer los datos de imagen de la cámara USB, por favor asegúrese de que la cámara USB no esté conectada a un hub. La cámara USB debe estar conectada directamente al dispositivo para asegurar una velocidad de transmisión de imagen rápida.

- Si encuentra un error como `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, puede degradar la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
Si encuentras problemas de software o problemas de dependencias del entorno que no se pueden resolver, además de revisar la sección de FAQ al final de este tutorial, por favor reporta el problema de inmediato a la [plataforma LeRobot](https://github.com/huggingface/lerobot) o al [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

## Cita

Documentación Wiki en inglés de Seeed Technology: [Cómo usar el brazo robótico SO10xArm en la última versión de Lerobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/)

Proyecto Huggingface:[Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT o ALOHA:[Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT:[VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy:[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC:[TD-MPC](https://www.nicklashansen.com/td-mpc/)

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
