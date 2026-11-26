---
description: Implementa una política NVIDIA Isaac GR00T N1.7 de peso completo y ajustada con precisión como un pipeline TensorRT de siete motores en Jetson AGX Orin con JetPack 7.2.
title: Implementar GR00T N1.7 de peso completo con TensorRT en JetPack 7.2 y Jetson AGX Orin
keywords:
  - Jetson AGX Orin
  - JetPack 7.2
  - GR00T N1.7
  - TensorRT
  - Physical AI
  - VLA
image: https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png
slug: /deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# Implementar GR00T N1.7 de peso completo con TensorRT en JetPack 7.2 y Jetson AGX Orin

Este tutorial implementa una política **NVIDIA Isaac GR00T N1.7** ajustada con precisión en **Jetson AGX Orin** usando **JetPack 7.2** y un pipeline de inferencia TensorRT completo. A diferencia del flujo de trabajo Orin anterior que solo aceleraba el componente DiT, esta implementación construye motores TensorRT para los siete componentes del modelo:

1. Vision Transformer (ViT)
2. Modelo de lenguaje grande (LLM)
3. Autoatención visión-lenguaje
4. Codificador de estado
5. Codificador de acción
6. Experto de acción DiT
7. Decodificador de acción

El flujo de trabajo validado realiza inferencia offline con un dataset local de LeRobot. No abre un puerto serie del robot ni envía comandos a actuadores, lo que lo hace adecuado para comprobar la conversión del modelo y la generación de acciones antes de integrar un robot físico.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png" alt="Implementación completa de TensorRT de GR00T N1.7 en Jetson AGX Orin" />
</div>

## Repositorio del proyecto

La implementación para JetPack 7.2, los scripts de conversión, los cambios en tiempo de ejecución y las notas de implementación originales están disponibles en el siguiente repositorio:

- [jjjadand/Isaac-GR00T-Orin-JP72](https://github.com/jjjadand/Isaac-GR00T-Orin-JP72)

Esta guía se validó con el siguiente commit del repositorio:

```text
93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

Commits posteriores pueden mejorar las versiones de los paquetes o las opciones de línea de comandos. Al reproducir el resultado medido, comienza desde el commit fijado y revisa los cambios más recientes por separado.

## Configuración probada

| Elemento | Valor probado |
| --- | --- |
| Dispositivo | Jetson AGX Orin, capacidad de cómputo `sm_87` |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| SO / kernel | Ubuntu 24.04 / Linux 6.8 Tegra |
| CUDA del sistema | CUDA 13.2 |
| TensorRT del sistema | 10.16.2.10 |
| Python | 3.12.3 |
| PyTorch | 2.8.0, wheel Jetson AI Lab CUDA 12.9 |
| TorchVision | 0.23.0 |
| Transformers | 4.57.6 |
| ONNX | 1.20.1 |
| PyAV / FFmpeg | PyAV 16.1.0 / FFmpeg 8 |
| Tamaño de lote de TensorRT | 1 |
| Horizonte de acción | 16 |

:::warning
La configuración Orin anterior del repositorio está dirigida a JetPack 6.2, Python 3.10, CUDA 12.6 y una versión anterior de TensorRT. No ejecutes `scripts/deployment/orin/install_deps.sh` ni `scripts/activate_orin.sh` para este flujo de trabajo con JetPack 7.2.
:::

:::note
El wheel de PyTorch usado por el entorno validado incluye un runtime CUDA 12.9. TensorRT sigue usando la instalación CUDA 13.2 del sistema de JetPack 7.2. Mantén el orden de activación y de rutas de biblioteca que se muestra en esta guía.
:::

## Planificación de almacenamiento y memoria

Reserva al menos **45–50 GB** de almacenamiento libre para el repositorio, el checkpoint, el backbone VLM local, el dataset, los grafos ONNX, los motores TensorRT y los archivos temporales de compilación. El directorio de artefactos TensorRT validado ocupa aproximadamente **13 GB**.

El AGX Orin probado expuso aproximadamente 29 GB de memoria unificada utilizable y no usó swap. Antes de compilar los motores:

```bash
free -h
df -h "${HOME}"
sudo tegrastats
```

Cierra navegadores, notebooks, aplicaciones de escritorio y servicios de modelos no relacionados si el generador de TensorRT es terminado por el killer de falta de memoria.

## 1. Definir rutas portátiles

El README del proyecto registra rutas de la máquina de prueba original. En lugar de copiar rutas absolutas específicas de la máquina, crea una configuración reutilizable en tu propio directorio home:

```bash
mkdir -p "${HOME}/.config/gr00t-jp72"

cat > "${HOME}/.config/gr00t-jp72/paths.sh" <<'EOF'
export GR00T_WORKSPACE="${HOME}/gr00t-jp72"
export GR00T_REPO="${GR00T_WORKSPACE}/Isaac-GR00T-Orin-JP72"
export GR00T_CHECKPOINT="${GR00T_WORKSPACE}/checkpoints/checkpoint-10000"
export GR00T_DATASET="${GR00T_WORKSPACE}/datasets/grab_tube_0_eval"
export GR00T_BACKBONE="${GR00T_WORKSPACE}/models/Qwen/Qwen3-VL-2B-Instruct"
export GR00T_TRT_OUTPUT="${GR00T_WORKSPACE}/artifacts/rebot_trt"
EOF

source "${HOME}/.config/gr00t-jp72/paths.sh"
mkdir -p \
  "$(dirname "${GR00T_REPO}")" \
  "$(dirname "${GR00T_CHECKPOINT}")" \
  "$(dirname "${GR00T_DATASET}")" \
  "$(dirname "${GR00T_BACKBONE}")" \
  "${GR00T_TRT_OUTPUT}"
```

Ejecuta el siguiente comando en cada nueva terminal antes de usar las variables:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
```

Puedes cambiar los valores en `paths.sh` para colocar archivos grandes en un SSD NVMe. Mantén separados las rutas del repositorio, el modelo, el dataset y la salida.

## 2. Clonar el repositorio para JetPack 7.2

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout 93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

Si el repositorio ya existe, verifica su revisión actual:

```bash
git -C "${GR00T_REPO}" rev-parse HEAD
git -C "${GR00T_REPO}" status --short
```

No cambies de revisión mientras una exportación ONNX o una compilación de motores esté en progreso.

## 3. Preparar las entradas requeridas

### 3.1 Checkpoint GR00T N1.7 ajustado con precisión

Copia tu checkpoint ajustado con precisión en `${GR00T_CHECKPOINT}`. El checkpoint de inferencia requiere la configuración de GR00T, las estadísticas y los shards del modelo. Una estructura típica es:

```text
checkpoint-10000/
├── config.json
├── embodiment_id.json
├── model-00001-of-00003.safetensors
├── model-00002-of-00003.safetensors
├── model-00003-of-00003.safetensors
├── model.safetensors.index.json
├── processor_config.json
└── statistics.json
```

Archivos de estado de entrenamiento como `optimizer.pt`, `scheduler.pt` y `trainer_state.json` no son necesarios para la inferencia ni para la exportación ONNX.

Valida la ruta configurada:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
test -f "${GR00T_CHECKPOINT}/config.json"
test -f "${GR00T_CHECKPOINT}/processor_config.json"
test -f "${GR00T_CHECKPOINT}/statistics.json"
```

### 3.2 Descargar el backbone local Qwen3-VL

La política N1.7 aún requiere la arquitectura de backbone compatible, el tokenizador y el procesador de imágenes. Este repositorio admite un backbone totalmente local mediante `GR00T_BACKBONE_PATH`, por lo que no se requiere un inicio de sesión de Hugging Face durante la exportación o la inferencia.

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

uv tool run --from modelscope modelscope download \
  Qwen/Qwen3-VL-2B-Instruct \
  --local-dir "${GR00T_BACKBONE}"
```

Confirma que el archivo principal del modelo y la configuración estén presentes:

```bash
test -f "${GR00T_BACKBONE}/config.json"
test -f "${GR00T_BACKBONE}/model.safetensors"
ls -lh "${GR00T_BACKBONE}/model.safetensors"
```

El archivo `model.safetensors` tiene aproximadamente 4,25 GB en la descarga probada.

### 3.3 Preparar el dataset local de LeRobot

La prueba en seco offline acepta un dataset local LeRobot v2/v2.1 mediante `--dataset-path`. Para el ejemplo validado RS-Rebot, la estructura mínima es:

```text
grab_tube_0_eval/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
├── videos/chunk-000/observation.images.side/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

El ejemplo proporcionado espera:

- etiqueta de embodiment: `NEW_EMBODIMENT`;
- claves de cámara: `front` y `side`;
- dimensiones de estado y acción: 7;
- horizonte de acción: 16.

El `processor_config.json` del checkpoint y el `meta/modality.json` del dataset deben describir modalidades compatibles de estado, acción y vídeo.

:::tip
Pasa el directorio local con `--dataset-path`. No proporciones una carpeta local a una opción que espera un ID de repositorio de Hugging Face, porque puede desencadenar una solicitud innecesaria al Hub y devolver un error HTTP 401.
:::

## 4. Instalar el entorno JetPack 7.2

### 4.1 Instalar paquetes del sistema

JetPack 7.2 ya debe proporcionar CUDA, TensorRT, cuDNN y los bindings de Python de TensorRT.

```bash
sudo apt-get update
sudo apt-get install -y --no-install-recommends \
  ffmpeg \
  libopenblas0-pthread \
  python3.12-venv \
  python3-dev
```

Comprueba los paquetes de la plataforma:

```bash
cat /etc/nv_tegra_release
/usr/local/cuda-13.2/bin/nvcc --version
dpkg-query -W python3-libnvinfer libnvinfer10 tensorrt
```

El entorno validado informa L4T R39.2, CUDA 13.2 y TensorRT 10.16.

### 4.2 Crear un entorno Python dedicado

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="${HOME}/.local/bin:${PATH}"

uv venv --python /usr/bin/python3.12 .venv-jp72
```

No reutilices el `.venv` del repositorio, que puede contener paquetes compilados para una plataforma Jetson diferente.

### 4.3 Instalar los wheels de PyTorch probados para Orin

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/f36/0db283b1249b3/torch-2.8.0-cp312-cp312-linux_aarch64.whl" \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/255/341cb5beb4673/torchvision-0.23.0-cp312-cp312-linux_aarch64.whl"
```

Instala las bibliotecas de runtime CUDA 12.9 requeridas por el wheel de PyTorch:

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  nvidia-cublas-cu12==12.9.2.10 \
  nvidia-cuda-cupti-cu12==12.9.79 \
  nvidia-cuda-nvrtc-cu12==12.9.86 \
  nvidia-cuda-runtime-cu12==12.9.79 \
  nvidia-cufft-cu12==11.4.1.4 \
  nvidia-curand-cu12==10.3.10.19 \
  nvidia-cusolver-cu12==11.7.5.82 \
  nvidia-cusparse-cu12==12.5.10.65 \
  nvidia-nvjitlink-cu12==12.9.86
```

### 4.4 Instalar las dependencias de GR00T

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  accelerate==1.12.0 \
  albumentations==1.4.18 \
  av==16.1.0 \
  build==1.4.0 \
  click==8.1.8 \
  cryptography==46.0.7 \
  datasets==3.6.0 \
  dm-tree==0.1.8 \
  einops==0.8.1 \
  gitpython==3.1.50 \
  gymnasium==1.2.2 \
  "huggingface-hub[cli]==0.36.2" \
  jsonlines==4.0.0 \
  lmdb==1.7.5 \
  matplotlib==3.10.1 \
  msgpack==1.1.0 \
  msgpack-numpy==0.4.8 \
  numpy==1.26.4 \
  omegaconf==2.3.0 \
  onnx==1.20.1 \
  onnxscript==0.6.2 \
  opencv-python-headless==4.11.0.86 \
  pandas==2.2.3 \
  peft==0.17.1 \
  pytest==9.0.3 \
  pytest-timeout==2.4.0 \
  pyzmq==27.0.1 \
  ruff==0.15.1 \
  safetensors==0.7.0 \
  scipy==1.15.3 \
  termcolor==3.2.0 \
  transformers==4.57.6 \
  tyro==0.9.17 \
  wandb==0.23.0

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/c46/66317287eb28a/diffusers-0.36.0.dev0-py3-none-any.whl"

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps -e "${GR00T_REPO}"
```

No instales TorchCodec para esta configuración probada. PyAV 16 se utiliza con FFmpeg 8 de JetPack 7.2 para decodificar los vídeos del conjunto de datos. Flash Attention es opcional y no se instaló en el entorno validado.

### 4.5 Exponer el paquete de Python TensorRT del sistema

Usa Python para determinar la ruta real de `site-packages` del entorno en lugar de codificar un nombre de usuario:

```bash
GR00T_SITE_PACKAGES="$("${GR00T_REPO}/.venv-jp72/bin/python" -c 'import site; print(site.getsitepackages()[0])')"

printf '%s\n' '/usr/lib/python3.12/dist-packages' \
  > "${GR00T_SITE_PACKAGES}/jetpack_system_packages.pth"
```

## 5. Activar y validar

Ejecuta el siguiente bloque en cada nueva shell:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

deactivate 2>/dev/null || true
source .venv-jp72/bin/activate
source scripts/activate_orin_jp72.sh

# Override the original test-machine path configured by the activation script.
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
hash -r
```

Valida el intérprete, la arquitectura de la GPU, el binding de TensorRT, el backbone y el backend de vídeo:

```bash
python - <<'PY'
import os
import sys

import tensorrt
import torch

print("python:", sys.executable)
print("torch:", torch.__version__)
print("torch CUDA:", torch.version.cuda)
print("GPU:", torch.cuda.get_device_name(0))
print("architectures:", torch.cuda.get_arch_list())
print("TensorRT:", tensorrt.__version__)
print("backbone:", os.environ["GR00T_BACKBONE_PATH"])
print("video backend:", os.environ["GR00T_VIDEO_BACKEND"])

assert sys.executable.endswith("/.venv-jp72/bin/python")
assert "sm_87" in torch.cuda.get_arch_list()
assert os.environ["GR00T_VIDEO_BACKEND"] == "pyav"
PY
```

Los valores clave esperados incluyen PyTorch 2.8.0, PyTorch CUDA 12.9, `sm_87`, TensorRT 10.16.2.10 y el backend `pyav`.

:::warning
Usa el comando `python` simple del entorno activado. Evita `uv run python` después de la instalación porque puede sincronizar el entorno de proyecto predeterminado del repositorio y reemplazar paquetes específicos de Jetson que funcionan.
:::

## 6. Ejecutar la prueba rápida de PyTorch

Antes de exportar, verifica que el checkpoint, el backbone local, el conjunto de datos, el decodificador de vídeo y el paso hacia adelante de CUDA funcionen juntos:

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 1 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --inference-mode pytorch \
  --save-plot-path /tmp/rebot_pytorch_smoke.jpeg
```

No continúes con la exportación a TensorRT hasta que este comando pueda cargar una observación del conjunto de datos y generar una predicción de acción.

## 7. Exportar el modelo completo a ONNX

Exporta los siete componentes con un tamaño de lote estático de 1:

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps export
```

La exportación validada tarda aproximadamente dos minutos. Confirma que el directorio ONNX contiene siete grafos y los metadatos de exportación:

```bash
find "${GR00T_TRT_OUTPUT}/onnx" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

Mantén `dit_bf16.onnx.data` junto a `dit_bf16.onnx`; contiene datos de tensores externos utilizados por el grafo DiT.

## 8. Construir los siete motores TensorRT

Construye los motores en el AGX Orin de destino. Los motores TensorRT están ligados a la arquitectura de la GPU, la versión de TensorRT, las formas de los grafos y el tamaño de lote.

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps build
```

La compilación validada tardó aproximadamente 3 minutos y 37 segundos y generó:

```text
action_decoder.engine
action_encoder.engine
dit_bf16.engine
llm_bf16.engine
state_encoder.engine
vit.engine
vl_self_attention.engine
```

Verifica el directorio de motores:

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

Vuelve a compilar después de cambiar el checkpoint, la disposición o resolución de la cámara de entrada, el horizonte de acción, el tamaño de lote, la GPU, la instalación de CUDA/TensorRT o los grafos ONNX.

## 9. Verificar TensorRT frente a PyTorch

Ejecuta la etapa de verificación numérica del repositorio:

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps verify
```

La ejecución validada produjo:

| Comparación | Similitud coseno |
| --- | ---: |
| Salida ViT | 0.995977 |
| Salida del backbone | 0.999958 |
| Acción final | 0.997426 |
| Estado de verificación | PASS |

Trata estos valores como una referencia de reproducción. Un checkpoint ajustado fino diferente, una muestra distinta del conjunto de datos o una revisión de dependencias puede producir valores ligeramente diferentes.

## 10. Ejecutar inferencia offline con TensorRT completo

El siguiente comando carga la trayectoria 0 y predice dos bloques de 16 acciones. No inicializa el ejecutor de hardware RS-Rebot.

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 32 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --skip-timing-steps 1 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --save-plot-path /tmp/rebot_trt_result.jpeg
```

Una ejecución correcta incluye mensajes similares a:

```text
N1.7 full-pipeline TRT engines loaded.
  ViT: TRT | LLM: TRT | Action Head: TRT
All inference steps completed for current trajectory-id 0
pred_action_joints vs time (32, 7)
Done
```

El tiempo de inferencia en caliente validado fue de **0.2755 segundos por bloque de predicción de 16 acciones**, o aproximadamente **3.63 bloques por segundo**. Este resultado se aplica al checkpoint probado, la forma del conjunto de datos, la configuración de los motores y las condiciones de funcionamiento del AGX Orin.

Los valores de MSE y MAE del script comparan las predicciones del modelo con las acciones registradas en el conjunto de datos. No son métricas de error de conversión de TensorRT; usa la etapa de verificación de coseno para comprobar la concordancia entre PyTorch y TensorRT.

### Demostración de inferencia con TensorRT completo

El siguiente vídeo demuestra el flujo de trabajo completo de TensorRT de GR00T N1.7 ejecutándose en JetPack 7.2 y Jetson AGX Orin.

<div className="video-container">
  <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/H3rQHnB-gaI"
    title="GR00T N1.7 full TensorRT inference on JetPack 7.2 and Jetson AGX Orin"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

## 11. Advertencias seguras

### `libnvjpeg.so.12` de TorchVision

La ruta del conjunto de datos probada usa PyAV y FFmpeg en lugar de `torchvision.io`. Esta advertencia no bloquea el flujo de trabajo de inferencia validado.

### `flash_attn is not installed`

El modelo de referencia de PyTorch usa SDPA durante la carga y la exportación. La inferencia de la canalización completa reemplaza los componentes ViT, LLM y de acción con motores TensorRT.

### `lm_head.weight` se inicializa de nuevo

GR00T consume los estados ocultos del backbone en lugar de la cabeza de generación de lenguaje. El checkpoint de la política ajustada fino proporciona los pesos utilizados por la inferencia de acciones.

## 12. Solución de problemas

### `torch._C` no tiene `_dlpack_exchange_api`

El entorno activo es incorrecto. Comprueba el intérprete:

```bash
which python
python -c "import sys; print(sys.executable)"
```

La ruta debe terminar con `${GR00T_REPO}/.venv-jp72/bin/python`. Reactiva el entorno y ejecuta `source scripts/activate_orin_jp72.sh` de nuevo.

### Hugging Face HTTP 401

Confirma que la anulación local del backbone se aplicó después del script de activación del repositorio:

```bash
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
export HF_HUB_OFFLINE=1
export TRANSFORMERS_OFFLINE=1

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors"
```

### Error de importación de TorchCodec o FFmpeg

Confirma que PyAV está seleccionado:

```bash
python -c "import os, av; print(os.environ['GR00T_VIDEO_BACKEND'], av.__version__)"
```

La salida esperada comienza con `pyav 16.1.0`.

### Error de forma del motor o de deserialización

No copies motores desde otra GPU o instalación de TensorRT. Comprueba que `export_metadata.json` acompaña la salida de los motores y vuelve a compilar los artefactos ONNX y TensorRT en el dispositivo de destino.

### La compilación de TensorRT se queda sin memoria

1. Cierra aplicaciones de GPU y servidores de modelos no relacionados.
2. Mantén `--workspace 4096` en lugar de aumentarlo inmediatamente.
3. Compila las etapas de forma secuencial.
4. Confirma que hay suficiente almacenamiento y memoria con `df -h`, `free -h` y `tegrastats`.
5. Reinicia en una sesión limpia si la memoria sigue fragmentada después de compilaciones fallidas repetidas.

## 13. Avanzar hacia el control del robot

El comando validado es intencionadamente una prueba en seco offline. Antes de conectar un robot físico:

1. compara las trayectorias de acción de TensorRT y PyTorch en episodios grabados;
2. confirma el orden de las articulaciones, las unidades, el escalado, los límites y los metadatos de la encarnación;
3. limita todos los comandos generados a límites seguros de articulación y velocidad;
4. implementa parada de emergencia, tiempo de espera de comandos y detección de observaciones obsoletas;
5. realiza pruebas con actuadores deshabilitados o sin carga;
6. comienza con acciones de baja velocidad y horizonte corto;
7. registra latencia, memoria, potencia, temperatura y tasa de éxito de la tarea.

No reutilices el comando offline como un controlador de robot sin una capa de seguridad específica de hardware.

## Lista de comprobación de reproducción

- [ ] JetPack 7.2 / L4T R39.2 está instalado.
- [ ] CUDA 13.2 y TensorRT 10.16 son visibles.
- [ ] El repositorio está clonado en la revisión documentada.
- [ ] `.venv-jp72` usa Python 3.12 y la rueda PyTorch de Orin `sm_87`.
- [ ] El backbone local Qwen3-VL se carga sin una solicitud al Hub.
- [ ] El checkpoint y las modalidades del conjunto de datos LeRobot coinciden.
- [ ] La prueba rápida de PyTorch se completa correctamente.
- [ ] Se exportan siete grafos ONNX.
- [ ] Se generan siete motores TensorRT en el Orin de destino.
- [ ] Los informes de verificación numérica APRUEBAN.
- [ ] La inferencia completa offline de TensorRT se completa y guarda la gráfica.

## Recursos relacionados

- [Centro de recursos de JetPack 7.2](/es/jetpack_7_2_resource_hub/)
- [Optimización de memoria de JetPack 7.2](/es/jetpack_7_2_memory_optimization/)
- [Implementar TensorRT Edge-LLM en JetPack 7.2](/es/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [Ajustar GR00T N1.7 para reBot Arm e implementar en Jetson Thor](/es/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [Análisis en profundidad de JetPack 7.2](/es/jetpack72_deep_dive_bk/)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
