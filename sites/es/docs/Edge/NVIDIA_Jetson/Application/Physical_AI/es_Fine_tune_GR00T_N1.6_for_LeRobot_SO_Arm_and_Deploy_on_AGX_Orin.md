---
description: Este wiki introduce flujos de trabajo de ejemplo para desplegar proyectos de IA y robótica en J501 Mini (AGX Orin). También se proporcionan instrucciones detalladas paso a paso y documentación de referencia.
title: Ajustar Isaac GR00T N1.6 para el Brazo LeRobot SO-101 y Desplegar en AGX Orin
keywords:
- J501 mini
- Robotics
- AGX Orin
- gr00t n1.6
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin
sku: E2025123101,114993668
last_update:
  date: 2026-1-6
  author: Dayu
---

# 🤖 Ajustar GR00T N1.6 para el Brazo LeRobot SO-101 y Desplegar en AGX Orin

## 🚀 Introducción

Este wiki explica cómo **ajustar NVIDIA Isaac GR00T N1.6** para el **brazo LeRobot SO-101** y desplegarlo en **AGX Orin 64G**. Puedes comprar la placa portadora AGX Orin y el brazo robótico SO-ARM utilizados en este wiki desde los enlaces a continuación:

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '40px',
    flexWrap: 'wrap',
    marginTop: '20px',
  }}
>
  {/* ===== Item 1 ===== */}
  <div style={{ textAlign: 'center' }}>
    <img
      width="350"
      src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"
    />

    <div class="get_one_now_container" style={{ textAlign: 'center', marginTop: '12px' }}>
      <a
        class="get_one_now_item"
        href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html"
        target="_blank"
      >
        <strong>
          <span>
            <font color={'FFFFFF'} size={'4'}>Obtener Uno Ahora 🖱</font>
          </span>
        </strong>
      </a>
    </div>
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      width="350"
      src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993668-so-arm101-low-cost-ai-arm-3d-printed-parts-for-lerobot_1.jpg"
    />

    <div class="get_one_now_container" style={{ textAlign: 'center', marginTop: '12px' }}>
      <a
        class="get_one_now_item"
        href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html"
        target="_blank"
      >
        <strong>
          <span>
            <font color={'FFFFFF'} size={'4'}>Obtener Uno Ahora 🖱️</font>
          </span>
        </strong>
      </a>
    </div>
  </div>
</div>

<p></p>


- 🔧 Preparación de hardware para **LeRobot SO-101** y **AGX Orin 64G**  
- 💻 Configuración del entorno de software para **GR00T N1.6** en **AGX Orin 64G** 
- 🎯 Uso de la **plataforma de entrenamiento LeRobot**: recolección de datos, formateo de conjuntos de datos y ajuste fino para el brazo SO-101  
- 🚀 Flujos de trabajo de ejemplo para desplegar la política GR00T N1.6 entrenada (LeRobot + SO-101) en **L20** (GPU de grado servidor)
- 🛠️ Consejos de solución de problemas y errores comunes  

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/form.png"/>
</div>

<p></p>

**📚 Se proporcionan instrucciones detalladas paso a paso y documentación de referencia para ayudarte a ir desde la configuración inicial hasta el despliegue completo.**

Este wiki se basa en el proyecto LeRobot para la recolección de datos, luego lo convierte al formato de conjunto de datos compatible con GR00T N1.6. Además del AGX Orin, necesitarás preparar un dispositivo con más de 48GB de VRAM para el ajuste fino del modelo preentrenado (**se recomienda el alquiler de servidor**). Finalmente, desplegarás el modelo ajustado en AGX Orin 64G para inferencia, logrando la tarea de agarrar fruta de un plato.

:::warning
Este wiki se basa en JetPack 6.2 y utiliza el módulo AGX Orin 64GB. 
:::

## 🛠️ Configuración del Entorno GR00T N1.6

La configuración del entorno GR00T N1.6 en AGX Orin y en servidores de arquitectura x86 sigue un proceso similar, pero Jetson requiere que algunas dependencias se instalen manualmente.

### 🔧 Configuración del Entorno en AGX Orin

Clona el código fuente de GR00T N1.6 y completa la estructura de directorios:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
git checkout d483f00b1c13116bda020bead9d16dca497b2f6d
git submodule update --init --recursive
```

Permanece en el directorio `Isaac-GR00T` para crear un entorno virtual e instalar dependencias:

```bash
cd Isaac-GR00T

# Create virtual environment
uv venv .venv --python python3.10
source .venv/bin/activate

# Install LeRobot related dependencies
cd gr00t/eval/real_robot/SO100
uv pip install -e . --verbose
uv pip install --no-deps -e ../../../../
```

Descarga los archivos wheel precompilados a AGX Orin. Estos necesitan ser instalados manualmente. Haz clic en los enlaces a continuación para descargar:

**📦 Archivos Wheel Requeridos:**
- **PyTorch**: [Haz clic para descargar](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCPB-wlwOrsSZNkhH9I27DMAcXbUvnXhRmshioXZz-N4Jk?e=DIrq5U)
- **TorchVision**: [Haz clic para descargar](https://pypi.jetson-ai-lab.io/jp6/cu126/+f/907/c4c1933789645/torchvision-0.23.0-cp310-cp310-linux_aarch64.whl#sha256=907c4c1933789645ebb20dd9181d40f8647978e6bd30086ae7b01febb937d2d1)
- **Flash-Attention**: [Haz clic para descargar](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDsyHCBmfaVQ4iM1dQxOrA0ASs-RgdpKdLPy87XPW5RL20?e=CbZnio)
- **TorchCodec**: [Haz clic para descargar](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBkC3cpYjGcQ5Qwmei9PF3rAfYWOZY7JqugbcRtQ2VO7ro?e=Llh7yu)
- **Triton**: [Haz clic para descargar](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxXj1wMjIORbEkjCoZgRmnAWVrarrEHxHqW7-avotuJks?e=cDST1l)

Para más archivos wheel para Jetson, puedes descargar desde:  
🔗 [https://pypi.jetson-ai-lab.io/jp6/cu126](https://pypi.jetson-ai-lab.io/jp6/cu126)

Después de descargar los archivos `.whl`, activa el entorno virtual e instálalos vía pip:

```bash
source .venv/bin/activate

pip install xxxx.whl

# For example:
# pip install torch-2.8.0a0+gitba56102-cp310-cp310-linux_aarch64.whl
```

:::warning
`flash-attn` y `torchvision` deben instalarse **después** de `pytorch`
:::

Regresa al directorio de trabajo del código fuente y completa la instalación final de dependencias:

```bash
cd Isaac-GR00T
source .venv/bin/activate
pip install -e .[base]

# We recommend using ffmpeg version 7.x
sudo apt update
sudo apt install ffmpeg
```

### 🖥️ Configuración del Entorno en el Servidor de Ajuste Fino

Clona el código fuente de GR00T N1.6 y completa la estructura de directorios:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
git checkout d483f00b1c13116bda020bead9d16dca497b2f6d
git submodule update --init --recursive
```

Permanece en el directorio `Isaac-GR00T` para crear un entorno virtual e instalar dependencias:

```bash
cd Isaac-GR00T

# Create virtual environment
uv venv .venv --python python3.10
source .venv/bin/activate

# Install LeRobot related dependencies
cd gr00t/eval/real_robot/SO100
uv pip install -e . --verbose
uv pip install --no-deps -e ../../../../
```

Basado en la versión CUDA de tu servidor (el autor usa CUDA 12.8), encuentra los comandos de instalación correspondientes para las versiones GPU de torch 2.8 y torchvision 0.22.0 desde el sitio web oficial de PyTorch:

🔗 [Haz clic aquí para encontrar comandos de instalación](https://pytorch.org/get-started/previous-versions/)

Asegúrate de que el entorno virtual esté activado al instalar dependencias:

```bash
source .venv/bin/activate

# For example
# pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 --index-url https://download.pytorch.org/whl/cu128
```

:::warning
`flash-attn` y `torchvision` deben instalarse **después** de `pytorch`
:::

Regresa al directorio de trabajo del código fuente y completa la instalación final de dependencias:

```bash
cd Isaac-GR00T
source .venv/bin/activate
pip install --no-build-isolation flash-attn==2.8.2.post1
pip install -e .[base]
pip install torchcodec==0.4.0

# We recommend using ffmpeg version 7.x
sudo apt update
sudo apt install ffmpeg
```


## 📊 Recolección de Datos Usando el SO-ARM

Para un tutorial detallado sobre recolección de datos, por favor consulta el siguiente enlace:  
[https://wiki.seeedstudio.com/es/lerobot_so100m_new/#grabar-el-conjunto-de-datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#grabar-el-conjunto-de-datos)  
**Este enlace contiene un tutorial completo para el SO-ARM, cubriendo configuración, ensamblaje, calibración, recolección de datos, entrenamiento e inferencia.**

La recolección de datos para el brazo robótico lerobot puede realizarse ya sea en una PC o directamente en un dispositivo Jetson.

- **Método 1**: Recolectar datos usando Jetson
- **Método 2**: Recolectar datos usando una PC Ubuntu (**recomendado**)

Los procedimientos de recolección de datos son esencialmente los mismos para ambos métodos.


### Configuración del Entorno LeRobot (Opcional)

El proceso de configuración del entorno de desarrollo para Lerobot se puede encontrar en la subsección del siguiente enlace:  
🔗 [https://wiki.seeedstudio.com/es/lerobot_so100m_new/#instalar-lerobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#instalar-lerobot)



### Configurar los Motores

Los motores en cada articulación del SO-ARM necesitan ser configurados antes del ensamblaje. Los pasos de configuración se pueden encontrar en la subsección del siguiente enlace:    
🔗 [https://wiki.seeedstudio.com/es/lerobot_so100m_new/#configurar-los-motores](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#configurar-los-motores)


### Ensamblaje

El proceso de instalación de los brazos maestro y seguidor del SO-ARM se puede encontrar en la subsección del siguiente enlace:  
🔗 [https://wiki.seeedstudio.com/es/lerobot_so100m_new/#ensamblaje](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#ensamblaje)

### Calibración del SO-ARM


Después de que el SO-ARM haya sido completamente ensamblado, se requiere calibración. Por favor consulta la subsección del siguiente enlace para el procedimiento de calibración:  
🔗 [https://wiki.seeedstudio.com/es/lerobot_so100m_new/#calibrar](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#calibrar)



:::note
**Al calibrar los brazos robóticos, por favor NO conectes ninguna cámara USB, ya que esto puede causar conflictos de puerto o asignaciones incorrectas de puerto.**
:::

**Después de ejecutar el script de calibración, mueve manualmente cada articulación del brazo robótico para asegurar que alcance su rango completo de movimiento! No hacerlo puede resultar en una discrepancia entre las poses de los brazos líder y seguidor durante la teleoperación.**




### Configuración de Cámara

Generalmente se recomienda instalar una cámara en la muñeca/pinza del brazo robótico, y otra cámara en la superficie del escritorio, para asegurar una cobertura adecuada de la postura del brazo.
<mark>El enfoque de instalación específico depende de tu escenario de aplicación; el ejemplo mostrado a continuación es solo para referencia.</mark>

Para más detalles, consulte la subsección del siguiente enlace:  
🔗 [https://wiki.seeedstudio.com/es/lerobot_so100m_new/#agregar-cámaras](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#agregar-cámaras)



### Recolección de Datos

:::warning
Para GR00T N1.6, el nombre del parámetro de la cámara de muñeca debe ser `wrist`, y el nombre del parámetro de la cámara de vista en tercera persona debe ser `front`.

Por ejemplo:
`--robot.cameras="{ wrist: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 6, width: 640, height: 480, fps: 30}}"`  

Si no usas estos nombres de parámetros durante la recolección de datos, necesitarás modificar los archivos de parámetros y las palabras clave en el código fuente durante los procesos posteriores de entrenamiento e implementación.
:::


Después de completar tanto la instalación de la cámara como la calibración del brazo robótico, el procedimiento de recolección del conjunto de datos se puede encontrar en la subsección del siguiente enlace:  
[https://wiki.seeedstudio.com/es/lerobot_so100m_new/#grabar-el-conjunto-de-datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#grabar-el-conjunto-de-datos)



### Visualización de Datos Recolectados


Para visualizar los datos recolectados en el SO-ARM, consulte la subsección del siguiente enlace:  
🔗 [https://wiki.seeedstudio.com/es/lerobot_so100m_new/#visualizar-el-conjunto-de-datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#visualizar-el-conjunto-de-datos)



:::note
Si eliges entrenar la política en la nube, asegúrate de que tu conjunto de datos esté subido al servidor en la nube con anticipación, o descargado desde Hugging Face Hub. Sin embargo, debido a posibles problemas de red al descargar directamente desde Hugging Face Hub, se recomienda encarecidamente subir manualmente el conjunto de datos a tu servidor en la nube.
:::



## 🚀 Uso de L20 para Entrenar Políticas

El autor eligió la GPU L20 de NVIDIA para el ajuste fino del modelo preentrenado. También puedes elegir alquilar otras GPUs de grado servidor, pero asegúrate de que el proceso de ajuste fino tenga 48GB de VRAM disponible.

### Conversión de Formato del Conjunto de Datos

Primero, necesitas convertir el conjunto de datos de entrenamiento recolectado en la sección anterior al formato usado por GR00T N1.6. El autor se refiere a [este enlace](https://github.com/NVIDIA/Isaac-GR00T/blob/main/getting_started/finetune_new_embodiment.md) para el proceso.


Si ya tienes un conjunto de datos en formato LeRobot v2, puedes **omitir el proceso de conversión de formato del conjunto de datos**.

Si tienes un conjunto de datos en formato LeRobot v3.0, usa este script para convertirlo al formato LeRobot v2.

Si tienes un conjunto de datos en otro formato, conviértelo al formato LeRobot v2 que satisfaga los siguientes requisitos.

**📁 Requisitos de Estructura**
La carpeta debe seguir una estructura similar a la siguiente y contener estas carpetas y archivos principales:

```bash
.
├─meta 
│ ├─episodes.jsonl
│ ├─modality.json # -> GR00T LeRobot specific
│ ├─info.json
│ └─tasks.jsonl
├─videos
│ └─chunk-000
│   └─observation.images.ego_view
│     └─episode_000001.mp4
│     └─episode_000000.mp4
└─data
  └─chunk-000
    ├─episode_000001.parquet
    └─episode_000000.parquet
```

El script de conversión de formato del conjunto de datos se encuentra en `Isaac-GR00T/scripts/lerobot_conversion`. Usa el siguiente comando para convertir el formato del conjunto de datos:

```bash
python convert_v3_to_v2.py --repo-id seeed/grap_fruit
```

`--repo-id` es la ruta al conjunto de datos fuente para conversión.

Si estás usando el SO-ARM y al conjunto de datos recolectado le falta `modality.json`, puedes encontrarlo en el directorio demo_data:
🔗 [https://github.com/NVIDIA/Isaac-GR00T/blob/main/demo_data/cube_to_bowl_5/meta/modality.json](https://github.com/NVIDIA/Isaac-GR00T/blob/main/demo_data/cube_to_bowl_5/meta/modality.json)

### Descargar Modelo Preentrenado

Puedes descargar los pesos del modelo preentrenado (
**GR00T-N1.6-3B**) desde el sitio web oficial de Hugging Face. Página de descarga: 
🔗 [https://huggingface.co/nvidia/GR00T-N1.6-3B](https://huggingface.co/nvidia/GR00T-N1.6-3B)

Selecciona el contenido mostrado en la imagen a continuación y haz clic en descargar. Coloca los archivos descargados en la misma carpeta.
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/dl-1.6.png" width="800"/>
</div>


### Ejecutar Ajuste Fino

Usaremos `gr00t/experiment/launch_finetune.py` como punto de entrada. Asegúrate de que el entorno uv esté habilitado antes de lanzar. Puedes hacer esto ejecutando el comando `uv run bash <nombre_del_script_ejemplo>`.

**📋 Ver Argumentos Disponibles**
```bash
# Display all available arguments
python gr00t/experiment/launch_finetune.py --help
```

**🔧 Ejecutar Ajuste Fino**

Si estás usando una sola GPU para el ajuste fino, necesitas modificar `/Isaac-GR00T/gr00t/data/dataset/factory.py` según la sección resaltada en rojo en la imagen a continuación:
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/modify-gr00t.png" width="800"/>
</div>

```python
# Change torch.distributed.barrier() to:

import torch.distributed as dist
if dist.is_available() and dist.is_initialized():
    dist.barrier()
```

Usa el siguiente comando para el ajuste fino:

```bash
export NUM_GPUS=1
CUDA_VISIBLE_DEVICES=0 python \
    gr00t/experiment/launch_finetune.py \
    --base-model-path nvidia/GR00T-N1.6-3B \
    --dataset-path ./demo_data/cube_to_bowl_5 \
    --embodiment-tag NEW_EMBODIMENT \
    --modality-config-path examples/SO100/so100_config.py \
    --num-gpus $NUM_GPUS \
    --output-dir /tmp/so100 \
    --save-total-limit 5 \
    --save-steps 2000 \
    --max-steps 2000 \
    --use-wandb \
    --global-batch-size 32 \
    --color-jitter-params brightness 0.3 contrast 0.4 saturation 0.5 hue 0.08 \
    --dataloader-num-workers 4
```

**📊 Parámetros Clave**

| Parámetro | Descripción |
|-----------|-------------|
| `--base-model-path` | Ruta al checkpoint del modelo base preentrenado |
| `--dataset-path` | Ruta a tu conjunto de datos de entrenamiento |
| `--embodiment-tag` | Etiqueta para identificar tu encarnación robótica |
| `--modality-config-path` | Ruta a la configuración de modalidad especificada por el usuario (requerida solo para etiqueta NEW_EMBODIMENT) |
| `--output-dir` | Directorio donde se guardarán los checkpoints |
| `--save-steps` | Guardar checkpoint cada N pasos |
| `--max-steps` | Número total de pasos de entrenamiento |
| `--use-wandb` | Habilitar registro de Weights & Biases para seguimiento de experimentos |



## 🚀 Inferencia con Modelo Ajustado en AGX Orin 64G

Asegúrate de haber configurado el entorno GR00T N1.6 en AGX Orin según los pasos anteriores.

**🖥️ Terminal 1: Iniciar Servidor de Inferencia Local**

Abre el primer terminal, activa el entorno virtual e inicia el servidor de inferencia local con el siguiente comando:

```bash
source .venv/bin/activate

uv run python gr00t/eval/run_gr00t_server.py \
  --model-path /tmp/so100_finetune/checkpoint-10000 \
  --embodiment-tag NEW_EMBODIMENT 
```

Donde `--model-path` es la ruta a los pesos del modelo ajustado.

**🤖 Terminal 2: Iniciar Cliente de Inferencia Local**

Abre el segundo terminal, activa el entorno virtual e inicia el cliente de inferencia local con el siguiente comando:

```bash
source .venv/bin/activate

uv run python gr00t/eval/real_robot/SO100/eval_so100.py \
  --robot.type=so101_follower --robot.port=/dev/ttyACM0 \
  --robot.id=orange_follower \
  --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
  --policy_host=localhost --policy_port=5555 \
  --lang_instruction="grasp fruit into plate"
```

Donde el parámetro `--robot.port` debe modificarse según el nombre real de tu puerto serie, y `index_or_path` también debe modificarse según los números de índice del dispositivo de tus dos cámaras.

**🎥 Resultados de la Demo**

Después de lanzar la solicitud de inferencia, puedes ver la secuencia de acciones generada por GR00T N1.6 en el terminal. Cada inferencia produce ocho acciones:

<div align="center"> <img src="https://files.seeedstudio.com/wiki/other/gr00t-infer.jpg" width="800"/> </div>

Los resultados de inferencia del autor de GR00T N1.6 en AGX Orin 64G se muestran en el video a continuación. **La primera mitad muestra** la salida de inferencia en el terminal después de iniciar el programa GR00T N1.6—puedes ver que se generan ocho acciones por inferencia. **La segunda mitad** demuestra el resultado en el mundo real: el brazo robótico agarrando exitosamente fruta y colocándola en un plato.
<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/MuzIkoKYOwU" title="Demo de Inferencia GR00T N1.6 en AGX Orin 64G" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>




## 📚 Referencias

- 🔗 https://developer.nvidia.com/embedded/jetpack
- 🔗 https://github.com/NVIDIA/Isaac-GR00T/tree/main
- 🔗 https://huggingface.co/nvidia/GR00T-N1.6-3B

## 🤝 Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
