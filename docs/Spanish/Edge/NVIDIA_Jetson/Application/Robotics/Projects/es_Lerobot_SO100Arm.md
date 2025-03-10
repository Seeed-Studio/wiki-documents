---
description: Esta wiki proporciona el tutorial de ensamblaje y depuración del SO ARM100 y realiza la recopilación de datos y el entrenamiento dentro del marco de Lerobot.
title: Cómo utilizar el brazo robótico SO100Arm en Lerobot
keywords:
- Lerobot
- Huggingface
- Brazo Robótico
- Robótica
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /es/lerobot_so100m
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
---

# Cómo utilizar el brazo robótico SO-ARM100 en Lerobot

## Introducción

El [SO-100ARM](https://github.com/TheRobotStudio/SO-ARM100) es un proyecto de brazo robótico totalmente de código abierto lanzado por [TheRobotStudio](https://www.therobotstudio.com/). Incluye el brazo seguidor y el brazo robótico líder, y también proporciona archivos de impresión 3D detallados y guías de operación. [LeRobot](https://github.com/huggingface/lerobot/tree/main) se compromete a proporcionar modelos, conjuntos de datos y herramientas para la robótica del mundo real en PyTorch. Su objetivo es reducir la barrera de entrada de la robótica, permitiendo que todos contribuyan y se beneficien al compartir conjuntos de datos y modelos previamente entrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones en el mundo real, centrándose en el aprendizaje por imitación y el aprendizaje por refuerzo. Ha proporcionado un conjunto de modelos previamente entrenados, conjuntos de datos con demostraciones recopiladas por humanos y entornos de simulación, lo que permite a los usuarios comenzar sin la necesidad de ensamblar un robot. En las próximas semanas, la intención es aumentar el soporte para la robótica del mundo real en los robots más rentables y competentes actualmente disponibles.

<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Introducción al proyectos

El SO-ARM100 y el kit de robot inteligente reComputer Jetson AI combinan a la perfección el control del brazo robótico de alta precisión con una potente plataforma informática de IA, proporcionando una solución integral de desarrollo de robots. Este kit se basa en la plataforma Jetson Orin o AGX Orin, combinada con el brazo robótico SO-ARM100 y el marco de IA de LeRobot, ofreciendo a los usuarios un sistema de robot inteligente aplicable a múltiples escenarios como educación, investigación y automatización industrial.
Esta wiki proporciona el tutorial de ensamblaje y depuración para SO ARM100 y realiza la recopilación de datos y la capacitación dentro del marco de Lerobot.

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir uno 🖱️</font></span></strong>
</a></div>

## Características principales

1. **Brazo robótico de alta precisión**: El brazo robótico SO-ARM100 emplea servomotores de alta precisión y algoritmos avanzados de control de movimiento, y es adecuado para una variedad de tareas como agarre, ensamblaje e inspección.
2. **Plataforma reComputer Jetson**: utiliza SeeedStudio reComputer Jetson Orin o AGX Orin Dev Kit como plataforma informática de IA, que admite tareas de aprendizaje profundo, visión por computadora y procesamiento de datos, proporcionando potentes capacidades informáticas.
3. **Impulsado por IA**: integra el marco de IA de LeRobot de Hugging Face, admite el procesamiento del lenguaje natural (NLP) y visión por computadora, lo que permite que el robot comprenda instrucciones de manera inteligente y perciba el entorno.
4. **Código abierto y expansión flexible**: Es una plataforma de código abierto que es fácil de personalizar y expandir, adecuada para que desarrolladores e investigadores realicen desarrollo secundario y admite la integración de múltiples sensores y herramientas.
5. **Aplicación multiescena**: es aplicable a campos como la educación, la investigación científica, la producción automatizada y la robótica, ayuda a los usuarios a lograr operaciones robóticas eficientes y precisas en diversas tareas complejas.

<iframe width="900" height="600" src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Especificaciones

| Especificación | Arm Kit | Arm Kit Pro |
|--|--|--|
| Tipo | Arm Kit | Arm Kit Pro |
| Grados de libertad | 6 | 6 |
| Torque máximo | 19.5kg.cm 7.4V | 30kg.cm 12V |
| Servo | STS3215 Bus Servo | STS3215 Bus Servo |
| Alimentación| 5.5mm*2.1mm DC 5V4A | 5.5mm*2.1mm DC 12V1A |
| Encoder | 12-bit magnético | 12-bit magnético |
| Rango de temperatura | 0℃～40℃ | 0℃～40℃ |
| Comunicación | UART | UART |
| Método de control | PC | PC |

## Lista de materiales

| Parte | Cantidad | ¿Incluido? |
|--|--|--|
| STS3215 Servo1 | 12 | ✅ |
| Placa de control de Motor | 2 | ✅ |
| Cable USB-C | 1 | ✅ |
| Fuente de alimentación | 2 | ✅ |
| Abrazadera de mesa | 1 | ❌ |
| Partes impresas en 3D del brazo | 1 | ❌ |

:::Precaución
Las piezas impresas en 3D y las abrazaderas de mesa no están incluidas en el producto. Sin embargo, el SO-100ARM proporciona [archivos STL de impresión 3D](https://github.com/TheRobotStudio/SO-ARM100/tree/main/stl_files_for_3dprinting) detallados y parámetros de impresión. Además, también ofrecemos las [piezas impresas en 3D de la abrazadera de mesa](https://makerworld.com/zh/models/908660).
:::

## Guía de impresión 3D

Se acepta una variedad de impresoras 3D para imprimir las piezas necesarias del brazo seguidor y líder. Sigue los pasos a continuación para garantizar una impresión exitosa.

1. Elige una impresora: los archivos STL proporcionados están listos para imprimir en muchas impresoras FDM. A continuación se muestran las configuraciones probadas y sugeridas, aunque es posible que otras funcionen.
    - Material: PLA
    - Diámetro de la boquilla y precisión: 0.4mm de diámetro de boquilla a 0.2mm de altura de capa o 0.6mm de diámetro de boquilla a 0.4mm de altura de capa.
    - Densidad de relleno (Infill): 13%

2. Adquisición de archivos de impresión 3D: Todas las piezas del líder o seguidor están contenidas en un único archivo, correctamente orientado de z hacia arriba para minimizar apoyos.

    Para tamaños de cama de impresora de 220 mm x 220 mm (como la Ender), imprime:
    - [Print_Follower_SO_ARM100_08_Ender.STL](https://github.com/TheRobotStudio/SO-ARM100/blob/main/stl_files_for_3dprinting/Follower/Print_Follower_SO_ARM100_08k_Ender.STL)
    - [Print_Leader_SO_ARM100_08_Ender.STL](https://github.com/TheRobotStudio/SO-ARM100/blob/main/stl_files_for_3dprinting/Leader/Print_Leader_SO_ARM100_08k_Ender.STL)

    Para tamaños de cama de impresora de 205 mm x 250 mm (como Prusa/Up), imprime:
    - [Print_Follower_SO_ARM100_08_UP_Prusa.STL](https://github.com/TheRobotStudio/SO-ARM100/blob/main/stl_files_for_3dprinting/Follower/Print_Follower_SO_ARM100_08k_UP_Prusa.STL)
    - [Print_Leader_SO_ARM100_08_UP_Prusa.STL](https://github.com/TheRobotStudio/SO-ARM100/blob/main/stl_files_for_3dprinting/Leader/Print_Leader_SO_ARM100_08k_UP_Prusa.STL)

Para facilitar la descarga, ya hemos empaquetado todos los archivos en la [plataforma Makerworld](https://makerworld.com/zh/models/908660), incluidas las abrazaderas de mesa.

## Instalar LeRobot

En tu reComputer Nvidia Jetson:

1. Instala Miniconda:

```bash
mkdir -p ~/miniconda3
cd ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
```

2. Reinicia shell o `source ~/.bashrc`

3. Crea y activa un nuevo entorno conda para lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

4. Clona Lerobot:

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

5. Instala LeRobot con dependencias para los motores feetech:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Solo para Linux (no para Mac), instala dependencias adicionales para registrar conjuntos de datos:

```bash
conda install -y -c conda-forge ffmpeg
pip uninstall -y opencv-python
conda install -y -c conda-forge "opencv>=4.10.0"
```

## Configura los motores

Sigue los pasos del [video de ensamblaje](https://www.youtube.com/watch?v=FioA2oeFZ5I) que ilustra el uso de nuestros scripts a continuación.

<iframe width="900" height="600" src="https://www.youtube.com/embed/FioA2oeFZ5I?si=GjudmAovwF_X5m2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Encuentra puertos USB asociados a tus brazos**
Para encontrar los puertos correctos para cada brazo, ejecuta el script de la utilidad dos veces:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

Ejemplo de salida al identificar el puerto del brazo líder (por ejemplo, `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Ejemplo de salida al identificar el puerto del brazo seguidor (por ejemplo, `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

Solución de problemas: en Linux, es posible que necesites dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configura tus motores**
Conecta tu primer motor y ejecuta este script para establecer su ID en 1. También establecerá su posición actual en 2048, así que espera que tu motor gire:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

Nota: Estos motores están actualmente limitados. Sólo pueden tomar valores entre 0 y 4096, lo que corresponde a un giro completo. No pueden girar más que eso. 2048 está en el medio de este rango, por lo que podemos tomar -2048 pasos (180 grados en el sentido contrario a las agujas del reloj) y alcanzar el rango máximo, o tomar +2048 pasos (180 grados en el sentido de las agujas del reloj) y alcanzar el rango máximo. El paso de configuración también establece el desplazamiento de referencia en 0, de modo que si no ensamblaste mal el brazo, siempre puedes actualizar el desplazamiento de referencia para tener en cuenta un desplazamiento de hasta ± 2048 pasos (± 180 grados).

Luego desenchufa tu motor y conecta el segundo motor y configura su ID en 2.

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

Vuelve a realizar el proceso para todos tus motores hasta el ID 6. Haz lo mismo para los 6 motores del brazo líder.

## Ensambleje

Las instrucciones detalladas en vídeo se encuentran en [HuggingFace Youtube](https://www.youtube.com/watch?v=FioA2oeFZ5I)

<iframe width="900" height="600" src="https://www.youtube.com/embed/FioA2oeFZ5I?si=GjudmAovwF_X5m2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Calibración

A continuación, deberás calibrar tu robot SO-100 para asegurarte de que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot SO-100 funcione en otro.

:::info
La calibración del brazo robótico debe realizarse estrictamente de acuerdo con los pasos de ["Calibrar"](https://github.com/huggingface/lerobot/blob/main/examples/10_use_so100.md#calibrate) en el tutorial oficial de Lerobot.
:::

**Calibración manual del brazo seguidor**

En primer lugar, debes asegurarte de que los números de puerto serie del brazo robótico en el archivo `\lerobot\lerobot\configs\robot\so100.yaml` sean consistentes con los tuyos, como se muestra en la siguiente figura. Puedes ver todos los nombres de los puertos serie según `ls /dev/ttyACM*`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so100yaml.png" />
</div>

Deberás mover el brazo seguidor a estas posiciones secuencialmente:

<iframe width="900" height="600" src="https://www.youtube.com/embed/m1z9Dlk1gW8?si=Ln2PFmPnap2AeDZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Asegúrate de que ambos brazos estén conectados y ejecuta este script para iniciar la calibración manual:

```bash
python lerobot/scripts/control_robot.py calibrate \
    --robot-path lerobot/configs/robot/so100.yaml \
    --robot-overrides '~cameras' --arms main_follower
```

**Calibración manual del brazo guía**
Sigue el paso 6 del [vídeo de montaje](https://www.youtube.com/watch?v=FioA2oeFZ5I) que ilustra la calibración manual. Deberás mover el brazo guía a estas posiciones de forma secuencial:

Ejecuta este script para iniciar la calibración manual:

```bash
python lerobot/scripts/control_robot.py calibrate \
    --robot-path lerobot/configs/robot/so100.yaml \
    --robot-overrides '~cameras' --arms main_leader
```

## Teleoperación

**Teleoperación simple**
¡Entonces estás listo para teleoperar tu robot! Ejecuta este script simple (no se conectará ni mostrará las cámaras):

```bash
python lerobot/scripts/control_robot.py teleoperate \
    --robot-path lerobot/configs/robot/so100.yaml \
    --robot-overrides '~cameras' \
    --display-cameras 0
```

<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Teleoperación con cámaras de visualización.

Después de insertar tus dos cámaras USB, ejecuta el siguiente script para verificar los números de puerto de las cámaras.

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

La terminal imprimirá la siguiente información.

```markdown
Mac or Windows detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 2
Camera found at index 4
[...]
Connecting cameras
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(4, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

Puedes encontrar las fotografías tomadas por cada cámara en el directorio `outputs/images_from_opencv_cameras` y confirmar la información del índice de puerto correspondiente a las cámaras en diferentes posiciones. Luego completa la alineación de los parámetros de la cámara en el archivo `\lerobot\lerobot\configs\robot\so100.yaml`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so100camerayaml.png" />
</div>

Luego podrás mostrar las cámaras en tu computadora mientras estás teleoperando, ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de registrar tu primer conjunto de datos.

```bash
python lerobot/scripts/control_robot.py teleoperate \
    --robot-path lerobot/configs/robot/so100.yaml
```

<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Registrar el conjunto de datos

Una vez que estés familiarizado con la teleoperación, podrás registrar tu primer conjunto de datos con el SO-100.

Si deseas utilizar las funciones del centro Hugging Face para cargar tu conjunto de datos y no lo has hecho anteriormente, asegúrate de haber iniciado sesión con un token de acceso de escritura, que se puede generar desde la [configuración de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Guarda el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Graba 2 episodios y sube tu conjunto de datos al centro:

```bash
python lerobot/scripts/control_robot.py record \
    --robot-path lerobot/configs/robot/so100.yaml \
    --fps 30 \
    --repo-id ${HF_USER}/so100_test \
    --tags so100 tutorial \
    --warmup-time-s 5 \
    --episode-time-s 40 \
    --reset-time-s 10 \
    --num-episodes 2 \
    --push-to-hub 1
    --single-task seeedstudio
```

```markdown
Explicaciones de parámetros
- wormup-time-s: Se refiere al tiempo de inicialización.
- episode-time-s: Representa el tiempo para recopilar datos cada vez.
- reset-time-s: Es el tiempo de preparación entre cada recolección de datos.
- num-episodes: Indica cuántos grupos de datos se espera recopilar.
- push-to-hub: Determina si se cargan los datos en HuggingFace Hub.
```

<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Visualizar el conjunto de datos

Si cargaste tu conjunto de datos en el centro con `--push-to-hub 1`, puedes [visualizar tu conjunto de datos en línea](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando y pegando tu ID de repositorio proporcionada por:

```bash
echo ${HF_USER}/so100_test
```

Si no subiste con `--push-to-hub 0`, también puedes visualizarlo localmente con:

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so100_test
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
  </div>

## Reproducir una rutina

Ahora intenta reproducir la primer rutina en tu robot:

```bash
python lerobot/scripts/control_robot.py replay \
    --robot-path lerobot/configs/robot/so100.yaml \
    --fps 30 \
    --repo-id ${HF_USER}/so100_test \
    --episode 0
```

## Entrenar una política

Para entrenar una política para controlar tu robot, usa el script `python lerobot/scripts/train.py`. Se requieren algunos argumentos. Aquí hay un comando de ejemplo:

```bash
python lerobot/scripts/train.py \
  dataset_repo_id=${HF_USER}/so100_test \
  policy=act_so100_real \
  env=so100_real \
  hydra.run.dir=outputs/train/act_so100_test \
  hydra.job.name=act_so100_test \
  device=cuda \
  wandb.enable=false
```

A continuación se ofrece una explicación detallada:

1. Proporcionamos el conjunto de datos como argumento con `dataset_repo_id=${HF_USER}/so100_test`.
2. Proporcionamos la política con `policy=act_so100_real`. Esto carga configuraciones de [`lerobot/configs/policy/act_so100_real.yaml`](https://github.com/huggingface/lerobot/blob/main/lerobot/configs/policy/act_so100_real.yaml). Es importante destacar que esta política utiliza 2 cámaras como entrada "computadora portátil", "teléfono".
3. Proporcionamos un entorno como argumento con `env=so100_real`. Esto carga configuraciones de [`lerobot/configs/env/so100_real.yaml`](https://github.com/huggingface/lerobot/blob/main/lerobot/configs/env/so100_real.yaml).
4. Proporcionamos `device=cuda` ya que estamos entrenando en una GPU Nvidia, pero también puedes usar `device=mps` si estás usando una Mac con Apple Silicon, o `device=cpu` en caso contrario.
5. Proporcionamos `wandb.enable=true` para usar [Pesos y sesgos](https://docs.wandb.ai/quickstart) para visualizar gráficos de entrenamiento. Esto es opcional, pero si lo usas, asegúrate de haber iniciado sesión ejecutando "wandb login".

El entrenamiento debería durar varias horas. Encontrarás puntos de control en `outputs/train/act_so100_test/checkpoints`.

## Evaluación

Puedes usar la función `record` desde [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) pero con un punto de control de política como entrada. Por ejemplo, ejecuta este comando para registrar 10 episodios de evaluación:

```bash
python lerobot/scripts/control_robot.py record \
  --robot-path lerobot/configs/robot/so100.yaml \
  --fps 30 \
  --repo-id ${HF_USER}/eval_act_so100_test \
  --tags so100 tutorial eval \
  --warmup-time-s 5 \
  --episode-time-s 40 \
  --reset-time-s 10 \
  --num-episodes 10 \
  -p outputs/train/act_so100_test/checkpoints/last/pretrained_model
```

Como puedes ver, es casi el mismo comando que se usó anteriormente para registrar tu conjunto de datos de entrenamiento. Dos cosas cambiaron:

1. Hay un argumento `-p` adicional que indica la ruta al punto de control de tu política (por ejemplo, `-p outputs/train/eval_so100_test/checkpoints/last/pretrained_model`). También puedes utilizar el repositorio de modelos si cargaste un punto de control de modelo en el centro (por ejemplo, `-p ${HF_USER}/act_so100_test`).
2. El nombre del conjunto de datos comienza con `eval` para reflejar que está ejecutando inferencia (por ejemplo, `--repo-id ${HF_USER}/eval_act_so100_test`).

<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Referencias

TheRobotStudio Project: [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
