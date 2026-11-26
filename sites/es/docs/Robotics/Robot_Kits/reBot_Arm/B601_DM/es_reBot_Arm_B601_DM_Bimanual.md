---
description: Este wiki cubre la calibración, teleoperación, recopilación de datos y entrenamiento ACT para dos brazos reBot RS / DM con LeRobot.
title: Colaboración Bimanual reBot-DM
keywords:
  - LeRobot
  - Huggingface
  - robotic arm
  - rebot arm
  - robotics
slug: /rebot_arm_b601_dm_bimanual
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-11-19
  author: zhuyuan
translation:
  skip: [[zh-CN]]
createdAt: '2026-11-19'
updatedAt: '2026-11-19'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_bimanual/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Colaboración Bimanual reBot-DM

<div style={{ textAlign: 'center' }}>
    <img width={800} style={{ maxWidth: '100%', height: 'auto' }} alt="reBot-RS bimanual collaboration"
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_Bimanual/rs_bimanual.webp" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue uno ahora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>


## 1. Configuración del entorno

Antes de usar dos brazos, configura el entorno siguiendo los tutoriales de inicio rápido para un solo brazo:

- [Inicio rápido de reBot-DM](/es/rebot_b601_dm_getting_started/)
- [reBot-DM con LeRobot](/es/rebot_arm_b601_dm_lerobot/)

### 1.1 Activar el entorno existente

Después de completar correctamente todo el flujo de trabajo de un solo brazo, continúa instalando el entorno bimanual.

```bash
conda activate lerobot

cd ~
git clone https://github.com/xiehuangbao888/lerobot-robot-seeed-b601.git
cd lerobot-robot-seeed-b601
pip install -e .
```

### 1.2 Asignaciones de puertos usadas en esta guía

| Dispositivo | Izquierdo | Derecho |
| --- | --- | --- |
| Líder del brazo 102 | `/dev/ttyUSB0` | `/dev/ttyUSB1` |
| Seguidor RS | `can0` | `can1` |
| Seguidor DM, serie Damiao | `/dev/ttyACM0` | `/dev/ttyACM1` |

## 2. Calibración bimanual

Mantén el mismo `robot.id` y `teleop.id` durante la calibración y las operaciones posteriores. Tanto los ejemplos RS como DM usan `bi_follower`, y los dos líderes usan `bi_leader`. El `id` identifica archivos de calibración, no el modelo de motor. Si anteriormente calibraste tus brazos DM con `bi_follower_dm`, continúa usando ese ID en los comandos posteriores para esos brazos.

<Tabs groupId="rebot-bimanual-motor" defaultValue="dm">
<TabItem value="dm" label="DM">

### 2.2 Calibrar dos seguidores DM: serie Damiao

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1
```

</TabItem>
<TabItem value="rs" label="RS">

### 2.1 Calibrar dos seguidores RS

**RS**

**izquierdo**

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

**derecho**

```bash
sudo ip link set can1 down 2>/dev/null
sudo ip link set can1 type can bitrate 1000000
sudo ip link set can1 up
```

```bash
lerobot-calibrate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1
```

</TabItem>
</Tabs>

### 2.3 Calibrar dos líderes

```bash
lerobot-calibrate \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

### 2.4 Procedimiento de calibración

:::warning

1. Sigue las indicaciones para calibrar los brazos izquierdo y derecho en orden.
2. Si la calibración ya existe, pulsa Enter para reutilizarla, o escribe `c` y pulsa Enter para recalibrar.
3. Cuando se te pida posicionar manualmente el brazo en cero, mueve todo el brazo actual a la pose cero especificada, cierra completamente la garra vacía y confirma.
4. La calibración del seguidor restablece las posiciones cero de todos los motores de todo el brazo seguidor, no solo de la garra. No confirmes el cero en una pose arbitraria.

Salir de la calibración no restablece automáticamente los brazos. Los archivos de calibración se almacenan por defecto en `~/.cache/huggingface/lerobot/calibration/`, con subdirectorios para los tipos de dispositivo subyacentes y `_left` o `_right` añadidos al ID de cada lado. Vuelve a comprobar la calibración después de sustituir un brazo físico o cambiar las posiciones cero de los motores.

:::

## 3. Teleoperación bimanual

<Tabs groupId="rebot-bimanual-motor" defaultValue="dm">
<TabItem value="dm" label="DM">

### 3.2 Teleoperar dos brazos DM: serie Damiao

```bash
lerobot-teleoperate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1 \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

</TabItem>
<TabItem value="rs" label="RS">

### 3.1 Teleoperar dos brazos RS

```bash
lerobot-teleoperate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1 \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

</TabItem>
</Tabs>

## 4. Recopilación de datos

Verifica que la teleoperación funcione antes de ejecutar los comandos de grabación. Los ejemplos registran dos episodios de 20 segundos para comprobar la canalización de datos. Sustituye `dataset.single_task` por la tarea que realmente demuestres.

<Tabs groupId="rebot-bimanual-motor" defaultValue="dm">
<TabItem value="dm" label="DM">

### 4.2 Dos brazos DM: serie Damiao y grabación con tres cámaras

```bash
lerobot-record \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1 \
    --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1 \
    --dataset.repo_id=seeed_rebot/test \
    --dataset.single_task="pick the cube" \
    --dataset.fps=30 \
    --dataset.num_episodes=2 \
    --dataset.episode_time_s=20 \
    --dataset.reset_time_s=10 \
    --dataset.push_to_hub=false \
    --display_data=false
```

</TabItem>
<TabItem value="rs" label="RS">

### 4.1 Dos brazos RS: grabación con tres cámaras

```bash
lerobot-record \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1 \
    --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1 \
    --dataset.repo_id=seeed_rebot/test \
    --dataset.single_task="pick the cube" \
    --dataset.fps=30 \
    --dataset.num_episodes=2 \
    --dataset.episode_time_s=20 \
    --dataset.reset_time_s=10 \
    --dataset.push_to_hub=false \
    --display_data=false
```

</TabItem>
</Tabs>

## 5. Entrenamiento y evaluación

:::note

Esta sección sigue la [guía DM LeRobot](/es/rebot_arm_b601_dm_lerobot/#training-and-evaluation), manteniendo sus métodos de entrenamiento y adaptando la evaluación, la teleoperación opcional y el cliente de inferencia asíncrona a la configuración DM bimanual anterior. Usa un modelo entrenado en tu conjunto de datos bimanual y mantén los IDs de calibración, nombres de cámaras, resolución y frecuencia de fotogramas coherentes con la grabación. Sustituye los nombres de conjuntos de datos, descripciones de tareas y rutas de modelos por tus valores reales. Los ejemplos de entrenamiento conservan las opciones `wandb` de la guía original; para el entorno bimanual anterior, usa `trackio.enable` según lo admita tu versión instalada en lugar de mezclar opciones de registro no compatibles.

:::

<Tabs>
<TabItem value="act" label="ACT">

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
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000 
```

:::tip

Si estás utilizando una GPU RTX serie 50, necesitas añadir `--dataset.video_backend=pyav` para evitar las APIs que faltan en la versión preliminar de torchvision. El comando de entrenamiento se convierte en:

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
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

- **Especificación del dataset**: Proporcionamos el dataset mediante el parámetro `--dataset.repo_id=${HF_USER}/rebot_test`.
- **Pasos de entrenamiento**: Modificamos el número de pasos de entrenamiento usando `--steps=300000`. El algoritmo usa por defecto 800000 pasos; ajústalo según la dificultad de tu tarea. Puedes configurarlo más alto si no estás seguro, ya que se generan checkpoints durante el entrenamiento y la evaluación puede reanudarse desde cualquier checkpoint.
- **Tipo de policy**: Proporcionamos la policy con `policy.type=act`. Del mismo modo, puedes cambiar entre policies como [`act`, `diffusion`, `pi0`, `pi0fast`, `sac`, `smolvla`]. Esto cargará la configuración desde `configuration_act.py`. Es importante destacar que esta policy se adaptará automáticamente a los estados de los motores de tu robot, las acciones de los motores y el número de cámaras, ya que esta información ya está almacenada en tu dataset.
- **Selección de dispositivo**: Usamos `policy.device=cuda` porque estamos entrenando en una GPU Nvidia, pero puedes usar `policy.device=mps` para entrenar en Apple Silicon.
- **Herramienta de visualización**: Usamos `wandb.enable=true` para visualizar las gráficas de entrenamiento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Esto es opcional, pero si lo utilizas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

**Evaluación**

Puedes usar la función `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) pero con un checkpoint de policy como entrada. Por ejemplo, ejecuta este comando para registrar 10 episodios de evaluación:

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
```

1. El parámetro `--policy.path` indica la ruta al archivo de pesos de los resultados de entrenamiento de tu policy (por ejemplo, `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`). Si subes el archivo de pesos del resultado del entrenamiento del modelo a Hub, también puedes usar el repositorio del modelo (por ejemplo, `${HF_USER}/act_rebot_test`).
2. El nombre del dataset `dataset.repo_id` comienza con `eval_`. Esta operación registrará por separado vídeos y datos durante la evaluación, que se guardarán en la carpeta que comienza con `eval_`, como `seeed/eval_test123`.
3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante la fase de evaluación, elimina primero la carpeta que comienza con `eval_` y luego ejecuta de nuevo el programa.
4. Cuando te encuentres con `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, ten en cuenta que palabras clave como `front` y `side` en el parámetro `--robot.cameras` deben ser estrictamente coherentes con las utilizadas al recopilar el dataset.

</TabItem>

<TabItem value="smolvla" label="SmolVLA">

Consulta el tutorial oficial [SmolVLA](https://huggingface.co/docs/lerobot/smolvla).

SmolVLA es un **modelo base de robótica ligero** proporcionado por Hugging Face. Está diseñado para que puedas tomar tu propio dataset de LeRobot grabado y **ajustarlo finamente rápidamente** para obtener resultados en robots reales.

En pocas palabras, sus entradas/salidas son:

- Entrada: vídeo de múltiples cámaras + estado actual del robot (sensores/articulaciones, etc.) + una instrucción de tarea en lenguaje natural
- Salida: un fragmento de acción continua para mover el brazo robótico y ejecutar la tarea

```bash
pip install -e ".[smolvla]"
```

**Recopilación de datasets (recomendado)**

SmolVLA es un "modelo base". Para que funcione bien en tu mesa, con tus cámaras, pinza y objetos, normalmente necesitas ajustarlo finamente con tus propios datos.

- Empieza con ~50 episodios (demasiado pocos pueden conducir a un aprendizaje/generalización deficientes).
- Si tu tarea tiene "variables" (por ejemplo, diferentes posiciones del cubo en la mesa), asegúrate de que cada variación tenga suficientes demostraciones:
  - Ejemplo: 5 posiciones × 10 episodios cada una = 50 episodios
- Experiencia: Grabar solo 25 episodios suele ser insuficiente. Tanto la calidad como la cantidad de datos importan.

**Entrenamiento**

Usa `smolvla_base` (el modelo preentrenado de 450M) como punto de partida y ajústalo finamente en tu dataset. El ejemplo oficial entrena durante 20k pasos; en una sola A100 esto lleva unas 4 horas (solo como referencia; el tiempo real varía según el hardware).

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

La fase de evaluación carga tu modelo ajustado finamente, permite que el robot ejecute la tarea y registra el proceso de evaluación como un nuevo dataset (para revisar vídeos y analizar resultados).

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=bi_follower \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=${HF_USER}/FINETUNE_MODEL_NAME
```

Cómo rellenar los parámetros:

- `--robot.left_arm_config.port` y `--robot.right_arm_config.port`: usa los puertos serie de los seguidores DM izquierdo y derecho, `/dev/ttyACM0` y `/dev/ttyACM1` en esta guía.
- `--robot.id`: El ID de tu robot (debe coincidir con el que usaste durante la calibración/registro).
- `--robot.cameras`: Cámbialo por el `index_or_path` de tu cámara real y asegúrate de que las claves de cámara (por ejemplo, `top`, `left_wrist`, `right_wrist`) coincidan exactamente con las que usaste al registrar el dataset.
- `--dataset.single_task`: Debe coincidir con la descripción de la tarea utilizada al registrar el dataset.
- `--dataset.repo_id`: El nombre del dataset de salida de evaluación; si has iniciado sesión en Hugging Face, se creará/subirá en tu cuenta.
- `--policy.path`:
  - Si el modelo es local: rellena la ruta de los pesos en el directorio de salida de entrenamiento (por ejemplo, `outputs/train/my_smolvla/checkpoints/last/pretrained_model`)
  - Si el modelo está en Hub: rellena `${HF_USER}/FINETUNE_MODEL_NAME`

Opcional: Si quieres "teleoperar manualmente para ajustar" entre episodios de evaluación, puedes añadir teleop (rellena según tu dispositivo y configuración):

```bash
--teleop.type=bi_seeed_102_leader \
--teleop.left_arm_config.port=/dev/ttyUSB0 \
--teleop.right_arm_config.port=/dev/ttyUSB1 \
--teleop.id=bi_leader
```

</TabItem>

<TabItem value="pi0" label="Pi0">

Consulta el tutorial oficial [Pi0](https://huggingface.co/docs/lerobot/pi0).

π₀ (Pi0) es un modelo de **Visión-Lenguaje-Acción** propuesto por Physical Intelligence para un control robótico más "general". Puedes pensar en él así: puede ver imágenes de la cámara y entender una instrucción en lenguaje natural, y luego generar acciones para controlar el brazo robótico.

Usarlo en LeRobot es sencillo: solo tienes que establecer el tipo de policy a `--policy.type=pi0` durante el entrenamiento (no es necesario repetir los conceptos generales de entrenamiento/evaluación tratados en la sección ACT).

```bash
pip install -e ".[pi]"
```

:::tip
Si estás utilizando una versión antigua de LeRobot (por ejemplo, 0.4.0), puede que necesites instalar la dependencia `pi` desde el código fuente de GitHub (la documentación oficial corregirá esto en un parche posterior):

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
- `--policy.train_expert_only=true` (truco para ahorrar VRAM): Congela la parte del modelo grande (VLM), solo entrena el "experto de acción" y las capas de proyección; ahorra más VRAM pero la capacidad entrenable es más limitada, adecuado para empezar o para experimentos rápidos con pocos datos.

**Evaluación**

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</TabItem>

<TabItem value="pi05" label="Pi0.5">

Consulta el tutorial oficial [Pi0.5](https://huggingface.co/docs/lerobot/pi05).

π₀.₅ (Pi0.5) también es un modelo de **Visión-Lenguaje-Acción** propuesto por Physical Intelligence, que puede entenderse como una "versión mejorada" de π₀, con un enfoque en mejorar la capacidad de **generalización en mundo abierto**.

Para usarlo en LeRobot: simplemente establece el tipo de policy a `--policy.type=pi05`.

```bash
pip install -e ".[pi]"
```

:::tip
Si estás usando una versión antigua de LeRobot (por ejemplo, 0.4.0), puede que necesites instalar la dependencia `pi` desde el código fuente de GitHub (la documentación oficial corregirá esto en un parche posterior):

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
- `--policy.train_expert_only=true` (truco para ahorrar VRAM): Congela la parte del modelo grande (VLM), solo entrena el "experto de acción" y las capas de proyección.
- `--policy.normalization_mapping=...`: Si las estadísticas de normalización de tu conjunto de datos no coinciden o faltan, puedes usar este mapeo para forzar un método de normalización.

**Evaluación**

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</TabItem>

<TabItem value="groot-n15" label="GR00T N1.5">

Consulta el tutorial oficial [GR00T N1.5](https://huggingface.co/docs/lerobot/groot).

GR00T N1.5 es un modelo base abierto proporcionado por NVIDIA. La clave para usarlo en LeRobot es establecer el tipo de policy a `--policy.type=groot`. Nota: actualmente GR00T N1.5 tiene requisitos de entorno más altos (depende de FlashAttention y requiere una GPU CUDA). Se recomienda hacer funcionar primero ACT / Pi0 antes de probar GR00T.

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
Si estás usando la serie RTX 50, necesitas: flash_attn=2.8.0

```bash
pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation
```

:::

4. Instala la dependencia `groot` de LeRobot:

```bash
pip install "lerobot[groot]"
```

:::tip
Si la instalación de flash-attn falla, normalmente está relacionada con (1) incompatibilidad de versiones entre PyTorch/CUDA, (2) dependencias de compilación faltantes o (3) un entorno demasiado nuevo/demasiado antiguo. En ese caso, consulta primero la documentación oficial de GR00T y la guía de instalación de PyTorch.
:::

**Entrenamiento (Fine-tuning)**

El proyecto oficial proporciona un ejemplo de entrenamiento multi-GPU (`accelerate launch --multi_gpu ...`). Si solo tienes una GPU, también puedes intentar ejecutarlo primero en modo de un solo proceso (el soporte/detalle de parámetros está sujeto a la documentación oficial).

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

- `--dataset.repo_id`: Tu conjunto de datos de entrenamiento (`username/dataset_name` en Hub o caché local correspondiente a `repo_id`).
- `--output_dir`: Directorio de salida del entrenamiento (aquí se guardarán los pesos/checkpoints).
- `--steps`, `--batch_size`: Pasos de entrenamiento y tamaño de batch. Los modelos grandes son sensibles a la VRAM; si no se ejecuta, reduce primero `batch_size`.
- `--policy.repo_id`: Si quieres subir el modelo a Hub, rellena el nombre del repositorio de modelo que quieres crear.

**Evaluación (Ejecución en el robot)**

Después del entrenamiento, puedes usar `lerobot-record` para evaluación/registro igual que con otras policies. Para usuarios bimanuales de reBot B601-DM, consulta el siguiente comando:

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

Licencia: Este modelo sigue la licencia Apache 2.0 (coherente con el repositorio original de GR00T).

</TabItem>

<TabItem value="peft" label="PEFT (Optional)">

PEFT (Parameter-Efficient Fine-Tuning) es un conjunto de métodos y herramientas de "adaptación eficiente en parámetros" para adaptar grandes modelos preentrenados a nuevas tareas **sin actualizar todos los parámetros del modelo**. Para las policies preentrenadas de LeRobot (por ejemplo, SmolVLA, π₀, etc.), normalmente puedes entrenar solo un pequeño número de parámetros "adaptadores" (por ejemplo, LoRA) para lograr resultados cercanos al fine-tuning completo mientras reduces el uso de VRAM y el coste de entrenamiento.

**Instalación**

Instala la dependencia opcional `peft` de LeRobot para usar parámetros relacionados con PEFT:

```bash
pip install -e ".[peft]"
```

```bash
pip install "lerobot[peft]"
```

Para más métodos de adaptación y explicaciones de conceptos, consulta la documentación oficial:
[🤗 PEFT Documentation](https://huggingface.co/docs/peft/index)

**Ejemplo: Fine-tuning de SmolVLA con LoRA (subtarea libero_spatial de Libero)**

El siguiente ejemplo muestra cómo realizar fine-tuning con LoRA de `lerobot/smolvla_base` en el conjunto de datos `HuggingFaceVLA/libero`. Los nombres de parámetros se basan en la versión actual de LeRobot; consulta también `lerobot-train --help`.

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

**Parámetros clave de PEFT**

- `--peft.method_type`: Selecciona el método PEFT. LoRA (Low-Rank Adapter) es uno de los métodos más utilizados.
- `--peft.r`: Rango de LoRA. En general, un rango mayor implica mayor capacidad expresiva, pero también más parámetros y uso de VRAM.

**Especificar capas para inyectar LoRA (Opcional)**

De forma predeterminada, PEFT suele inyectar LoRA en las capas de proyección más críticas del modelo (por ejemplo, `q_proj`, `v_proj` de la atención, etc.), y puede además cubrir capas de proyección relacionadas con estado/acción. Si necesitas apuntar a capas diferentes, usa `--peft.target_modules` para especificar las capas objetivo.

Los patrones comunes incluyen:

1) Por lista de sufijos de nombre de módulo (ejemplo):

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2) Usando una expresión regular (ejemplo, ajusta según los nombres reales de los módulos):

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**Especificar ciertas capas para entrenamiento completo (Opcional)**

Si quieres que ciertos módulos se "entrenen completamente" (en lugar de solo inyectar LoRA), usa `--peft.full_training_modules` para especificarlos. Por ejemplo, para entrenar completamente solo `state_proj`:

```bash
--peft.full_training_modules="['state_proj']"
```

**Recomendaciones de tasa de aprendizaje (valores de experiencia)**

La tasa de aprendizaje de LoRA normalmente puede ser un orden de magnitud mayor que la de un fine-tuning completo (experiencia común: ~10x). Por ejemplo, el fine-tuning completo suele usar `1e-4`, mientras que LoRA puede empezar desde `1e-3`; si tienes activada la disminución de la tasa de aprendizaje (scheduler), la tasa final también suele fijarse alrededor de `1e-4` como referencia.

</TabItem>

<TabItem value="multi-gpu" label="Multi-GPU (Opcional)">

**1. Pasos de entrenamiento**

**Método uno: Entrenamiento Multi-GPU mediante argumentos de línea de comandos**

Primero, instala el sistema de aceleración de entrenamiento en tu entorno de lerobot:

```bash
pip install accelerate
```

Luego ejecuta el siguiente comando para iniciar el entrenamiento Multi-GPU:

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

Explicación de parámetros clave de accelerate:

- `--multi_gpu`: Habilita el entrenamiento Multi-GPU
- `--num_processes=2`: Número de GPUs a usar (normalmente igual al número de GPUs)
- `--mixed_precision=fp16`: Usa precisión mixta fp16 (o bf16 si tu hardware lo soporta)

Ten en cuenta que **bf16 requiere soporte de hardware** y no está disponible en todas las GPUs.

| Tipo de precisión | Soporte de hardware |
| -- | -- |
| fp16 | Soportado por casi todas las GPUs NVIDIA |
| bf16 | Solo soportado en GPUs más recientes (arquitectura Ampere y posteriores) |

Si tu GPU no soporta bf16, elige fp16 en tu configuración de accelerate, o especifica explícitamente fp16 en la línea de comandos.

**Método dos: Usar un archivo de configuración de Accelerate (Opcional)**

Si realizas entrenamiento Multi-GPU con frecuencia, puedes guardar la configuración de entrenamiento anterior para evitar introducir repetidamente los argumentos en la línea de comandos.

> **Consejo**: Si no entiendes esta sección, o solo quieres empezar rápidamente,
> **puedes omitir esta sección y usar el Método uno (argumentos de línea de comandos).**

El propósito de `accelerate config` es:

**Guardar tu entorno de hardware (número de GPU, precisión mixta, etc.) como un archivo de configuración,
para que no necesites rellenar estos parámetros repetidamente al ejecutar `accelerate launch` en el futuro.**

No cambia ninguna lógica de entrenamiento de LeRobot; solo reduce la introducción repetitiva de parámetros.

Si solo **usas Multi-GPU ocasionalmente**, o es tu primer intento, **está perfectamente bien no usarlo**.

---

Ejecuta:

```bash
accelerate config
```

En el proceso de configuración interactiva, para el escenario común de una sola máquina con múltiples GPUs, puedes seleccionar lo siguiente:

- Entorno de cómputo: Esta máquina
- Número de máquinas: 1
- Número de procesos: Número de GPUs a usar (normalmente igual al número de GPUs)
- IDs de GPU a usar: Pulsa Enter directamente (significa usar todas las GPUs)
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

**Impacto del entrenamiento Multi-GPU en los parámetros de entrenamiento y estrategias de ajuste**

LeRobot no ajusta automáticamente la tasa de aprendizaje ni los pasos de entrenamiento en función del número de GPUs, para evitar cambiar el comportamiento de entrenamiento sin que el usuario lo sepa. Esto difiere de otros frameworks de entrenamiento distribuido comúnmente usados.

Si quieres **ajustar hiperparámetros para entrenamiento Multi-GPU**, necesitas hacerlo manualmente siguiendo estos pasos.

**Impacto en los pasos y estrategia de ajuste**

Dado que Multi-GPU incrementa el tamaño de batch efectivo (batch_size × num_gpus):

(Para entenderlo de forma intuitiva: si el entrenamiento es como caminar, una GPU da un paso de un metro, dos GPUs dan un paso de dos metros. Para alcanzar la misma distancia (datos totales aprendidos por el modelo), el entrenamiento con dos GPUs debería reducir a la mitad los pasos. De forma similar, n GPUs = 1/n.)

Por lo tanto, al entrenar con múltiples GPUs, deberías reducir apropiadamente el número de pasos de entrenamiento.

Entrenamiento con una sola GPU:

- batch_size = 8
- steps = 100000

Entrenamiento con dos GPUs (el tamaño de batch efectivo pasa a 16):

- batch_size, si sigue configurado en 8
- steps se puede reducir a 50000

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --batch_size=8 \
  --steps=50000 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

**Impacto en la tasa de aprendizaje y estrategia de ajuste**

Al usar múltiples GPUs, cada actualización de paso utiliza más muestras.

Si quieres mantener la "velocidad de aprendizaje" del modelo similar a la de una sola GPU,
normalmente necesitas aumentar la tasa de aprendizaje proporcionalmente al número de GPUs.

- Nueva tasa de aprendizaje = tasa de aprendizaje de una sola GPU × número de GPUs

Por ejemplo:

Si la tasa de aprendizaje con una sola GPU (optimizer.lr) es 1e-4,
al usar 2 GPUs, puedes cambiarla a 2e-4:

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
- Mantener los pasos de entrenamiento sin cambios

Mientras el proceso de entrenamiento sea estable, los resultados siguen siendo utilizables.

Para configuraciones más avanzadas y resolución de problemas, consulta la documentación de [Accelerate](https://huggingface.co/docs/accelerate/index). Si quieres aprender más sobre entrenamiento con un gran número de GPUs, revisa esta excelente guía: [Ultrascale Playbook](https://github.com/huggingface/ultrascale-playbook).
</TabItem>

<TabItem value="async-inference" label="Async Inference (Opcional)">

Sin inferencia asíncrona, el flujo de control de LeRobot puede entenderse como inferencia secuencial/sincrónica convencional: la policy predice un bloque de acciones, luego lo ejecuta, y después espera la siguiente predicción. Para modelos más grandes, esto puede causar pausas notables mientras el robot espera nuevos bloques de acciones. El objetivo de la inferencia asíncrona es permitir que el robot ejecute el bloque de acciones actual mientras se precomputa el siguiente, reduciendo el tiempo inactivo y mejorando la capacidad de respuesta. La inferencia asíncrona se aplica a las policies compatibles con LeRobot que producen bloques de acciones, como ACT, OpenVLA, Pi0, SmolVLA. Dado que la inferencia y el control real están desacoplados, la inferencia asíncrona también permite usar máquinas más potentes para la inferencia del robot de forma remota.

Puedes leer más sobre inferencia asíncrona en esta [entrada de blog](https://huggingface.co/blog/async-robot-inference) de Hugging Face.

Presentemos algunos conceptos básicos:

- **Cliente**: Se conecta al brazo robótico y a las cámaras, recopila observaciones (imágenes, pose del robot, etc.), las envía al servidor; también recibe bloques de acciones del servidor y los ejecuta en orden.
- **Servidor**: El dispositivo que proporciona la capacidad de cómputo. Recibe datos de cámara y del robot, infiere (calcula) bloques de acciones y los envía de vuelta al cliente. Puede ser el mismo dispositivo conectado al robot y a las cámaras, otro ordenador en la misma LAN o un servidor en la nube.
- **Bloque de acciones**: Una serie de comandos de acción del brazo robótico, producidos por la policy mediante inferencia en el servidor.
- **Inferencia sincrónica**: Predecir un bloque, ejecutar un bloque; el robot tendrá huecos de inactividad esperando a que se infiera el siguiente bloque. Cuando el modelo es más grande y el cómputo es insuficiente, la brecha de inferencia es significativa: el brazo se mueve, luego se detiene (inferencias), y luego vuelve a moverse.
- **Inferencia asíncrona**: A diferencia de la inferencia sincrónica, mientras el robot ejecuta el bloque actual, el servidor ya está calculando el siguiente bloque; las partes superpuestas se agregan para un control más receptivo.

**Tres escenarios de despliegue de inferencia asíncrona**

**1. Despliegue en una sola máquina**

El robot, las cámaras, el cliente y el servidor están todos en el mismo dispositivo.
Este es el caso más sencillo: el servidor escucha en 127.0.0.1 y el cliente también se conecta a 127.0.0.1:puerto. Los ejemplos de comandos en la documentación oficial siguen este escenario.

**2. Despliegue en LAN**

El robot y las cámaras se conectan a un dispositivo ligero, y el servidor de políticas se ejecuta en otro dispositivo de alto cómputo en la misma LAN.
En este caso, el servidor debe escuchar en una dirección accesible para otras máquinas, y el cliente debe conectarse a la IP de la LAN del servidor, no a 127.0.0.1.

**3. Despliegue entre redes / en la nube**

El servidor de políticas se ejecuta en un host en la nube accesible públicamente, y el cliente se conecta a través de una red pública.
Este enfoque puede aprovechar GPUs más potentes en hosts en la nube. Con buenas condiciones de red, el tiempo de ida y vuelta (latencia de red) puede ser relativamente pequeño en comparación con el tiempo de inferencia, pero esto depende de tu entorno de red real.

> Nota de seguridad: El pipeline de inferencia asíncrona de LeRobot tiene riesgos de gRPC sin autenticación + deserialización con pickle. Si el servidor aloja información o servicios importantes, no se recomienda exponer el servicio directamente a internet pública al desplegar en una red pública. Un enfoque más seguro es usar VPN, túnel SSH o al menos restringir las IP de origen del grupo de seguridad a la IP pública de tu cliente.

**Inicio del despliegue de inferencia asíncrona**

**Paso 1: Configuración del entorno**

Primero, instala las dependencias adicionales requeridas para la inferencia asíncrona usando pip. Tanto el cliente como el servidor necesitan lerobot instalado con la dependencia extra:

```bash
pip install -e ".[async]"
```

**Paso 2: Configuración y comprobación de red**

**1. Problemas de proxy**

Si tu terminal tiene variables de entorno de proxy configuradas y se producen problemas de conexión, puedes desactivarlas temporalmente:

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

- Despliegue en la nube: Necesitas permitir el puerto en el grupo de seguridad del servidor en la nube y, idealmente, restringir las IP de origen.

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
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false
```

Explicación de parámetros clave:

- `--server_address`: Dirección del servidor. Usa `127.0.0.1:port` para una sola máquina, y la IP del servidor para LAN/nube.
- `--actions_per_chunk`: Tamaño de cada bloque de acciones (número de acciones). Valores más grandes significan menor frecuencia de inferencia pero resultados por inferencia más estables; valores más pequeños significan movimiento más suave pero más presión de inferencia en el servidor.
- `--chunk_size_threshold`: Umbral de mezcla entre bloques de acciones antiguos y nuevos. Cuando el bloque antiguo se ejecuta hasta esta proporción, comienza la mezcla con el nuevo bloque.
- `--fixed_update_fps`: Frecuencia de envío de comandos de control, correspondiente a la suavidad del movimiento del brazo robótico.
- `--visualize_action_queue`: Si se debe visualizar el tamaño de la cola de acciones en tiempo de ejecución. Cuando está activado, puedes ver de forma más intuitiva si la cola toca fondo con frecuencia, lo que te ayuda a ajustar actions_per_chunk y chunk_size_threshold.

**Paso 5: Ajustar parámetros según el comportamiento del robot**

En la inferencia asíncrona, hay dos parámetros adicionales que no están presentes en la inferencia síncrona y que necesitan ajuste:

- `--actions_per_chunk`: Tamaño de cada bloque de acciones. Si el movimiento del robot es entrecortado/brusco, aumenta este valor; si la respuesta del robot tiene un retraso notable, disminuye este valor.
- `--chunk_size_threshold`: Umbral de mezcla entre bloques de acciones antiguos y nuevos. Normalmente se empieza probando desde `0.5`.

La inferencia asíncrona necesita equilibrar: la velocidad de generación de bloques de acciones del servidor debe ser mayor o igual que la velocidad de consumo del cliente. De lo contrario, la cola de acciones se vaciará y el robot empezará a tartamudear (esto se puede ver en la curva de visualización de la cola tocando fondo).

</TabItem>
</Tabs>

Para reanudar el entrenamiento desde un checkpoint, aquí hay un comando de ejemplo para reanudar desde el checkpoint `last` de la política `act_rebot_test`:

```bash
lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```
