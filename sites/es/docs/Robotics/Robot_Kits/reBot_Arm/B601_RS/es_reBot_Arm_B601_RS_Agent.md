---
description: "Guía de operación de wrc_demo: pasos completos para la demo de agarre visual del reBot Arm B601-RS — configuración del entorno, descarga de modelos, cambio de LLM, calibración mano-ojo, ejecución de la demo y resolución de problemas."
title: Diseño de arquitectura de agente encarnado para el brazo robótico reBot B601 RS
keywords:
  - wrc_demo
  - reBot Arm B601-RS
  - visual grasping
  - vision language model
  - Qwen3-VL
  - YOLOE
  - hand-eye calibration
  - conda
  - tutorial
slug: /wrc_demo_tutorial
last_update:
  date: 2026-08-28
  author: Seeed Studio
translation:
  skip:
    - [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/cn/wrc_demo_tutorial/
---

# Diseño de arquitectura de agente encarnado para el brazo robótico reBot B601 RS

<p align="center">
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="Licencia: MIT" />
  </a>
  <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Versión de Python" />
  <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Plataforma" />
  <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Cámara" />
  <img src="https://img.shields.io/badge/Brain-VLM-purple.svg" alt="Cerebro VLM" />
</p>

<p align="center">
  <strong>Configuración del entorno → Descarga de modelos → Cambio de LLM → Calibración mano-ojo → Ejecución de la demo → Resolución de problemas</strong>
</p>

Este tutorial es la **guía de operación** para el proyecto [wrc_demo](https://github.com/TheMoonAstronaut/wrc). Sigue los pasos de esta guía para pasar de clonar desde cero a ejecutar una demo en **1-2 horas**.

wrc_demo es una demo de agarre visual para el [reBot Arm B601-RS](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/) (bus RobStride), que se ejecuta en Ubuntu 22.04 + Python 3.10 + entorno conda `wrc-demo`. La demo recibe instrucciones en lenguaje natural (por ejemplo, "recoge el bloque rojo"), planifica automáticamente el agarre y lo ejecuta.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_agent/agent3.PNG" alt="Demostración de agarre visual de wrc_demo en reBot Arm" />
</p>

## 0. Chuleta rápida

### Requisitos del sistema

| Elemento | Requisito |
|------|------|
| Sistema operativo | Ubuntu 22.04+ / Debian 12+ / WSL2 |
| Python | 3.10 (dentro del entorno conda) |
| Memoria | ≥ 16 GB (mock comienza en 8 GB) |
| Disco | ≥ 10 GB |
| GPU (Opcional) | NVIDIA RTX 5070 / 4090 / H100, etc. |
| VRAM | ≥ 8 GB |

---

## 1. Objetivos del proyecto y público objetivo

- **Objetivos del proyecto**: Conectar un Vision Language Model (VLM) al reBot Arm B601-RS, de modo que las instrucciones en lenguaje natural se conviertan automáticamente en acciones de agarre — el VLM selecciona objetos, Pinocchio resuelve la cinemática inversa (IK), `SafetyHarness` realiza una verificación fail-closed en cada waypoint a 50 Hz.
- **Público objetivo**: Desarrolladores con GPU NVIDIA + Ubuntu 22.04 + conocimientos básicos de Python 3.10, que quieran ejecutar la demo / modificar el detector / añadir habilidades.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_agent/agent2.PNG" alt="Demostración de agarre visual de wrc_demo en reBot Arm" />
</p>

---

## 2. Descripción general del proyecto

### 2.1 Características del proyecto

1. **Impulsado por Vision Language Model, toma de decisiones en tres niveles**  
   Qwen3-VL-2B-Instruct-AWQ-4bit se utiliza como cerebro de planificación de tareas por defecto, que puede ejecutarse de forma nativa en dispositivos con 8 GB de VRAM. El análisis de comandos sigue la ruta de vía rápida-lenta de tres niveles **Reflex → Hábito → LLM** — las instrucciones comunes (por ejemplo, "recoge el bloque rojo") pasan directamente por la sintaxis de plantilla Reflex sin llamar al LLM; solo las tareas nuevas implicarán al VLM.

2. **Calibración mano-ojo + planificación de agarre 6-DoF (fail-closed)**  
   Script de calibración mano-ojo incorporado (tablero de ajedrez ArUco + Pinocchio FK + optimización conjunta SE(3) LM), compatible con disposición de cámara superior (ETH). Cada punto de la trayectoria en streaming es verificado por `SafetyHarness` — si alguna verificación falla, el brazo robótico se detiene inmediatamente a mitad del movimiento.

3. **6 TOOL_SPECS + 5 puertas de enlace MCP**  
   La capa superior expone 6 herramientas con compuerta de seguridad: `pick_and_place` / `grasp_object` / `place_at/on` / `move_t` / `teach_record/replay` + `task_done`; la puerta de enlace MCP expone adicionalmente 5 herramientas: `camera_snapshot` / `world_state` / `live_view_url` / `emergency_stop` / `reset_stop`. No se requiere trabajo de adaptación de protocolo para añadir nuevas habilidades.

4. **Trazabilidad completa + memoria episódica**  
   Cada llamada de habilidad se escribe en un rastro multimodal estilo ASPIRE (`trace.jsonl` + fotograma clave JPEG antes y después), con una ventana de eventos de 15 segundos + creencia de persistencia de objetos, de modo que la "taza vista hace 10 segundos" aún pueda manipularse después de la oclusión.

5. **Experiencia de desarrollo mock-first**  
   El mock de pila completa (`--camera mock --arm mock --llm mock`) te permite ejecutar la canalización de decisión completa sin ningún hardware. Las pruebas mock y el hardware real ejecutan **el mismo código de seguridad**.

### 2.2 Especificaciones

| Categoría | Parámetro | Especificación |
|------|------|------|
| **Hardware** | Brazo robótico | reBot Arm B601-RS (bus RobStride, 6-DOF + pinza) |
| | Cámara | Orbbec Gemini 2 / Intel RealSense D435i / D405 |
| | Comunicación | Bus CAN vía USB2CAN; cámara USB 3.0 |
| | Host de control | PC con Ubuntu 22.04+ / DGX Spark |
| **LLM local** | Perfil por defecto | `local_qwen3_vl` (Qwen3-VL-2B-Instruct-AWQ-4bit) |
| | Framework de inferencia | vLLM 0.6+ (inferencia multimodal) |
| | Requisito de VRAM | ≥ 8 GB (aproximadamente 30 tokens/s) |
| | Tamaño de pesos | ~2.4 GB |
| **LLM en la nube** | Anthropic | Claude (visión + herramientas; variable de entorno `ANTHROPIC_API_KEY`) |
| | Compatible con OpenAI | Cualquier endpoint compatible con OpenAI (variable de entorno `OPENAI_API_KEY`) |
| | MiniMax | `api.minimax.com` (variable de entorno `MINIMAX_API_KEY`; solo texto) |
| **Detector** | Por defecto | YOLOE-11s-seg (detección de vocabulario abierto + segmentación de instancias) |
| | Opcional | YOLOE-26l-seg (más preciso pero 2× más lento) |
| | Codificación de texto | MobileCLIP2-B torchscript (Apple `apple/MobileCLIP2-B` → genera el trace tú mismo) |
| **Pila de software** | Cinemática | Pinocchio 3.x (FK/IK, DLS + reinicio aleatorio) |
| | Controlador RobStride | motorbridge (SocketCAN) + SDK incluido |
| | Backend de agarre | camera-camera / GraspGen-X (ZMQ) / OBB analítico (tres capas) |
| | Python | 3.10 |
| **Sistema de habilidades** | TOOL_SPECS totales | 6 (incluyendo 1 terminador `task_done` + 5 habilidades reales) |
| | Habilidades de movimiento del brazo | 18 literales de cadena en `_MOTION_SKILLS` |
| | Conjunto de herramientas MCP | `TOOL_SPECS - _EXCLUDED_TOOLS + _EXTRA_TOOLS` = 6 - 1 + 5 = 10 |
| **Seguridad** | Comprobación de trayectoria | Cada waypoint en streaming a 50 Hz pasa por `SafetyHarness.approve()` |
| | Modo de fallo | fail-closed (cualquier violación → abortar a mitad del movimiento) |
| | Reserva de articulaciones | IK `limit_margin=0.025` > harness `joint_margin=0.02` (invariante) |

### 2.3 Lista de materiales (BOM)

| Componente | Cantidad | Incluido |
|------|------|----------|
| Brazo robótico reBot Arm B601-RS | 1 | ✅ |
| Pinza (preinstalada) | 1 | ✅ |
| Puente serie USB2CAN | 1 | ✅ |
| Adaptador de corriente de 48V | 1 | ✅ |
| Cable USB-C / de comunicación | 1 | ✅ |
| Cámara de profundidad RGB-D (se recomienda Orbbec Gemini 2) | 1 | ✅ |
| Conector de cámara / soporte de montaje | 1 | ✅ |
| Host de control con Ubuntu 22.04+ (GPU NVIDIA ≥ 8 GB) | 1 | ❌ Aportado por el usuario |

#### Instrucciones de cableado

1. **Brazo robótico**: fuente de alimentación de 48V → brazo robótico; USB2CAN → puerto USB del host (el primer uso requiere `sudo ip link set can0 up type can bitrate 1000000`)
2. **Cámara**: Orbbec USB 3.0 → puerto USB 3.0 del host
3. **Configuración de permisos**:

```bash
# One-time read/write permission for USB devices
sudo chmod a+rw /dev/bus/usb/*/*

# Orbbec udev rules (recommended for first installation)
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

```bash
# The kit includes PCAN-USB, usually can0 or can1 should appear directly
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 2.4 Requisitos del entorno

#### Hardware

| Elemento | Requisito |
|------|------|
| CPU | x86_64 (aarch64 no cubierto por las pruebas) |
| Memoria | ≥ 16 GB (mock comienza en 8 GB, se recomiendan 16 GB para LLM local) |
| Disco | ≥ 10 GB (pesos de modelos + entorno conda + acumulación de trazas) |
| GPU (para inferencia LLM local) | NVIDIA RTX 5070 / 4090 / H100 |

#### Software

| Elemento | Requisito |
|------|------|
| Python | 3.10 (dentro del entorno conda) |
| Conda | miniforge3 / miniconda / anaconda |
| Paquetes del sistema | `libusb-1.0-0-dev`, `ffmpeg`, `git`, `can-utils` |

#### Red

| Recurso | Descripción |
|------|------|
| GitHub | Clonar `github.com/TheMoonAstronaut/wrc` |
| HuggingFace | Descargar pesos de YOLOE / MobileCLIP2 / Qwen3-VL |
| PyPI | Instalar ultralytics / openai / anthropic / pin / motorbridge |

---

## 3. Configuración del entorno

### 3.0 Ruta mínima: ejecutar mock en 5 minutos

Si solo quieres ejecutar el mock para verificar la instalación (sin leer otros contenidos), bastan tres comandos:

```bash
git clone https://github.com/TheMoonAstronaut/wrc.git
cd wrc
conda env create -f environment.yml && conda activate wrc-demo

# Run mock test (17 passed, 1 skipped ≈ 30 seconds)
pytest tests/test_extrinsics_loader.py \
        tests/test_hand_eye_compensation_per_camera.py \
        tests/test_demo_yaml_llm_profile.py -q
```

:::tip
El nombre del entorno está fijado como `wrc-demo`. Si necesitas personalizar el nombre (por ejemplo, convención de nombres del equipo), modifica el campo `name:` en `environment.yml` y sustituye los comandos posteriores en consecuencia.
:::

:::tip
`pyorbbecsdk2` no está incluido en environment.yml ** — su cadena de dependencias `pyorbbecsdk2 → open3d==0.18.0 → dash → plotly → ipywidgets → ...` a menudo hace que pip dispare `resolution-too-deep`. Instala el SDK de Orbbec por separado.
:::
:::tip
 `torch` tampoco está incluido en environment.yml ** — ultralytics marca torch como opcional, pero `import ultralytics` disparará `import torch`.
:::

### 3.1 Requisitos previos

- Haber completado el [Inicio rápido de reBot Arm B601-RS](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/) (montaje del brazo robótico, inicialización del punto cero, configuración de ID de motor) — **solo requerido para hardware real**
- GPU NVIDIA + controlador CUDA instalado (**solo requerido para inferencia LLM local**) 
- [miniforge3](https://conda-forge.org/miniforge/) u otra herramienta conda instalada
- Ubuntu 22.04+ / Debian 12+ / WSL2

### 3.2 Dependencias del sistema (requeridas para hardware real)

```bash
sudo apt update
sudo apt install -y libusb-1.0-0-dev ffmpeg git can-utils
```

- `libusb-1.0-0-dev`: cámara de profundidad Orbbec
- `ffmpeg`: flujo RGB UVC4K / RealSense
- `can-utils`: activación de SocketCAN (brazo robótico)

### 3.3 Post-instalación: instala PyTorch por separado (versión CUDA)

 **Directorio de trabajo**: A partir de esta sección, se asume que todos los comandos se ejecutan en el directorio raíz del repositorio `wrc`. Si abres una nueva shell, primero ejecuta `cd wrc`.

```bash
# You should have already cd wrc now; if not:
cd /path/to/wrc
```

```bash
conda activate wrc-demo
```

#### 3.3.1 Instalar Pytorch y Torchvision

Según la versión de CUDA de tu dispositivo, instala Pytorch y Torchvision siguiendo el [tutorial oficial](https://pytorch.org/index.html)

:::tip
Si necesitas instalar `stable CUDA 12.8`, ejecuta el siguiente comando

```bash
PYTHONNOUSERSITE=1 pip install --force-reinstall \
  torch torchvision torchaudio \
  --index-url https://download.pytorch.org/whl/cu128
```
:::

#### 3.3.2 Cargar PyTorch en el entorno conda

PyTorch coloca los paquetes de nvidia en site-packages/nvidia/lib/, pero conda no añade automáticamente estas rutas a LD_LIBRARY_PATH. Sin este hook, `import torch` en cualquier nueva shell dará el error `OSError: libcudart.so.13: cannot open shared object file`

Ejecuta el siguiente comando para instalar el `nvidia LD_LIBRARY_PATH conda hook`
```bash
bash scripts/install_nvidia_libs_hook.sh
```

Verifica que el hook sea efectivo (funciona en nuevas shells)
```bash
source /home/seeed/miniforge3/envs/wrc-demo/etc/conda/activate.d/nvidia_libs.sh
python -c "import torch; print('torch:', torch.__version__, 'cuda:', torch.cuda.is_available())"
# Expected: torch: 2.13.0+cu130 cuda: True
```

### 3.4 Instalar SDK de cámara de profundidad

Este proyecto es compatible con Orbbec Gemini 2, RealSense D435i / D405 y otras cámaras de profundidad RGB-D.

#### Orbbec Gemini 2

Orbbec Gemini 2 depende de pyorbbecsdk (versión Python de Orbbec SDK v2). Se recomienda **el Método 1**:

**Método 1: Instalar vía pip (recomendado)**

```bash
conda activate wrc-demo
PYTHONNOUSERSITE=1 pip install pyorbbecsdk2
```

:::tip
Debes añadir `PYTHONNOUSERSITE=1`, de lo contrario pip instalará el paquete en `~/.local/lib/python3.10/site-packages/` (site-packages a nivel de usuario), y el entorno conda seguirá vacío.
:::

**Método 2: Instalar desde el código fuente de GitHub** (cuando haya problemas de red o quieras la versión más reciente)

```bash
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

# Switch to ~/sdk directory (not the wrc directory)
mkdir -p ~/sdk && cd ~/sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
PYTHONNOUSERSITE=1 pip install -e .

# Return to the wrc directory after installation
cd -
```

:::tip
**Los usuarios en China continental** pueden usar el mirror de gitee para acelerar: `git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git`
:::

#### RealSense D435i / D405

El SDK de RealSense (`pyrealsense2`) normalmente necesita compilarse desde el código fuente, se recomienda consultar la documentación oficial de Intel.

---

## 4. Adquisición de pesos de modelo

### 4.1 Instalar el codificador de texto MobileCLIP2

Apple publicó pesos de PyTorch en HuggingFace `apple/MobileCLIP2-B`, y la detección de texto prompt de YOLOE requiere la versión `.ts`.

```bash
conda activate wrc-demo

# Download MobileCLIP2 .pt
PYTHONNOUSERSITE=1 python scripts/setup_models.py --fetch
```
Convertir formato trace `.pt → .ts` (manual) **

```bash
PYTHONNOUSERSITE=1 pip install "open_clip_torch>=2.30"

PYTHONNOUSERSITE=1 python <<'PY'
import torch, open_clip
full = open_clip.create_model_from_pretrained("MobileCLIP2-B", pretrained="models/mobileclip2_b.pt", return_transform=False)
class Wrap(torch.nn.Module):
    def __init__(self, m): super().__init__(); self.m = m
    def forward(self, t):
        f = self.m(t); return f / f.norm(dim=-1, keepdim=True)
torch.jit.trace(Wrap(full.text).eval(), torch.zeros(2, 77, dtype=torch.long), strict=False).save("models/mobileclip2_b.ts")
PY
```
Verificación manual

```bash
PYTHONNOUSERSITE=1 python -c "import torch; m=torch.jit.load('models/mobileclip2_b.ts'); o=m(torch.zeros(2,77,dtype=torch.long)); print(o.shape, o.norm(dim=-1).tolist())"
# Expected: torch.Size([2, 512]) [1.0, 1.0]
```

#### 4.1.1 Sobre la ruta de búsqueda del codificador de texto YOLOE

ultralytics carga `mobileclip*.ts` **solo buscando en el directorio de trabajo actual (CWD), no lo busca en `models/`**.

Si ejecutas `python -m wrc_demo.apps.demo ...` directamente, si el CWD no está bajo `models/`, mostrará "Download failure for ... mobileclip_*.ts".

Puedes ejecutar el siguiente comando para resolver el problema de error anterior

```bash
# Two processing methods when running python directly (choose one)
ln -sf models/mobileclip2_b.ts mobileclip2_b.ts     # Project root symlink
```


### 4.2 Descargar pesos locales de LLM Qwen3-VL

Si planeas usar API en la nube, puedes omitir este paso:

Este tutorial usa por defecto llm.profile=local_qwen3_vl correspondiente a la versión cuantizada AWQ-4bit (se ejecuta con 8GB de VRAM).
```bash
hf download cyankiwi/Qwen3-VL-2B-Instruct-AWQ-4bit \
  --local-dir models/qwen3-vl-2b-awq-4bit
# → https://huggingface.co/cyankiwi/Qwen3-VL-2B-Instruct-AWQ-4bit
```
:::tip
Si tienes problemas de red usando hf download, puedes usar el repositorio de github para descargar
```bash
git clone https://huggingface.co/cyankiwi/Qwen3-VL-2B-Instruct-AWQ-4bit models/qwen3-vl-2b-awq-4bit
# If it gets stuck for too long, just press ctrl + c to stop
cd models/qwen3-vl-2b-awq-4bit && git lfs pull
```
:::

### 4.3 Hoja de referencia rápida

| Recurso | Tamaño | Necesidad | Método de adquisición |
|------|------|--------|----------|
| `qwen3-vl-2b-awq-4bit/` | ~2.| 4 GB | Requerido para despliegue local de LLM (8 GB VRAM) | Se descarga automáticamente vía `hf download cyankiwi/Qwen3-VL-2B-Instruct-AWQ-4bit` o `scripts/start_cosmos3_server.sh --bg` |
| `yoloe-26s-seg.pt` | ~31 MB | **Detección de vocabulario abierto (recomendado para 2026-09+)** | Extraer vía `cp` después de clonar Seeed-Projects/reBot-DevArm-Grasp; usa el `mobileclip2_b.ts` existente, no requiere `blt.ts` |
| `yoloe-26l-seg.pt` | ~75 MB | Opcional (mayor precisión, ~2x más lento) | Igual que arriba; también usa `mobileclip2_b.ts` |
| `yoloe-11s-seg.pt` | ~28 MB | **No recomendado** — requiere `mobileclip_blt.ts` (572 MB, ~1.5h de descarga en el primer arranque) | Usar solo cuando se requieran pesos de modelo heredados; para volver a cambiar, modifica el campo `model:` en `configs/demo.yaml` |
| `mobileclip2_b.pt` | ~571 MB | Fuente de codificación de texto YOLOE 26s/l (versión PyTorch sin procesar) | Se descarga automáticamente desde `apple/MobileCLIP2-B` vía `python scripts/setup_models.py --fetch` |
| `mobileclip2_b.ts` | ~253 MB | Codificación de texto YOLOE 26s/l (realmente cargada en tiempo de ejecución) | Trazado manualmente (ver §4.1); después de la descarga **debe colocarse en `models/` o CWD** — ver §4.1.1 |
| `mobileclip_blt.ts` | ~572 MB | Codificación de texto YOLOE 11s (**no recomendado**, la fuente es difícil de descargar) | Trazado manualmente, fuente `apple/MobileCLIP-B-LT`; solo requerido al usar el modelo 11s |
| `pyrealsense2` | Artefacto compilado | Solo para usuarios de RealSense | Compilar según la documentación oficial de Intel |
---

## 5. Calibración mano-ojo

El propósito de la calibración es permitir que la demo conozca la transformación entre **coordenadas de píxel** ↔ **sistema de coordenadas base del robot**. `data/clip/hand_eye_top.json` es una matriz de referencia desensibilizada, **tu cámara debe ser recalibrada**.

### 5.1 Preparación

#### 1. Imprimir tablero ArUco
Imprime un tablero de ajedrez del diccionario ArUco 4x4, ID = 0, longitud de lado = 0.10 m (10 cm). Fuente recomendada: [`~/wrc/aruco100x100.pdf`](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_agent/aruco100x100.pdf)

Después de imprimir, **mide con precisión** la longitud del lado (las impresoras pueden escalar la imagen), usa el valor medido como parámetro `--marker-size`.

#### 2. Conexión de cámara + bus CAN
```bash
# Plug Orbbec into USB 3.0, grant camera permissions
sudo chmod a+rw /dev/bus/usb/*/*

# CAN bus (robotic arm)
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

#### 3. Listar dispositivos
```bash
wrc-calib-top --list
# Expected: lists Orbbec device index + serial number

# Write camera serial number
wrc-calib-top --bind top --serial `xxxx`
# Replace the content in `xxxx` with the listed camera serial number
```

### 5.2 Calibración ETH de cámara superior
**ETH = Eye-To-Hand**: La cámara está montada en una posición fija fuera del brazo robótico. Coloca el tablero de calibración como se muestra en la figura.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_agent/agent4.PNG" alt="Demostración de agarre visual de wrc_demo en reBot Arm" />
</p>

```bash
# Automatic mode (automatically runs 25+ sampling points with preset poses)
wrc-calib-top --marker-size 0.10 --n 30 \
  --out data/calibration/hand_eye_top.local.json

# Manual mode (press ENTER to sample each time)
wrc-calib-top --marker-size 0.10 --manual --n 30 \
  --out data/calibration/hand_eye_top.local.json
```

El archivo `hand_eye_top.local.json` es **ignorado automáticamente por .gitignore** (no contaminará el repositorio) y es el resultado de calibración del dispositivo real.

:::tip
Esta demo tiene un área de trabajo segura predefinida para el brazo robótico. Si la resolución de IK falla durante las operaciones de agarre y colocación en un área grande, necesitas ajustar la posición fija de la cámara y recalibrar (una posición de cámara estable está aproximadamente a 36cm * 36cm de la base del brazo robótico).
:::

#### Principio de calibración
La herramienta ejecuta internamente `joint_solve` (SE(3) LM + Huber + rechazo de valores atípicos 3*MAD):
- FK desde `wrc_demo.control.kinematics.Kinematics` (Pinocchio sobre RS URDF, `joint_signs=[-1]*6`, `ee_frame='gripper_end'`)
- PnP desde cv2.aruco + intrínsecos del SDK

Salida:
- `data/calibration/hand_eye_top.json` — Matriz de referencia desensibilizada (**no usar**, serial=REDACTED)
- `data/calibration/hand_eye_top.local.json` — **Resultado de calibración de tu dispositivo real**

### 5.3 Verificar RMSE de calibración
No recalibres, verifica directamente con puntos conocidos del sistema de coordenadas base:

```bash
wrc-calib-top --verify \
  --json data/calibration/hand_eye_top.local.json \
  --known-points "0.30,0.00,0.02;0.25,-0.05,0.02;0.35,0.05,0.02"
# Expected: RMSE < 10 mm (reference set.py:320)
```

---

## 6. Configuración de LLM

### 6.1 Árbol de decisión
```
What is your VRAM size?
├─ ≥ 8 GB  → Option A: Local model (local_qwen3_vl)
├─ Have API key → Option B: Cloud API (anthropic / openai / minimax)
└─ Neither → Option C: mock (test only)
```

### 6.2 Opción A: Modelo local (recomendado, 8 GB+ de VRAM)
Inicia el servicio vLLM (**en otra terminal**):
```bash
conda activate wrc-demo
bash scripts/start_cosmos3_server.sh --bg    # Start in background
sleep 60                                    # Wait for vLLM to load the model (~60s for first run)

# Health check
bash scripts/start_cosmos3_server.sh --status
# Expected: [status] vllm running, PID <xxx>
```
vLLM 0.6+ admite inferencia multimodal para Qwen3-VL. La versión cuantizada AWQ-4bit puede ejecutarse a ~30 tokens/s en 8 GB de VRAM.

### 6.3 Opción B: API en la nube (no se requiere GPU)
**Configuración de dos capas** — archivo de perfil YAML + clave como variable de entorno:

#### a. Archivo de perfil YAML (`configs/llm/*.yaml`)
| Archivo | Propósito | Campos clave |
|------|---------|------------|
| `anthropic.yaml` | Claude | `type: anthropic`, `model: claude-sonnet-5` |
| `openai.yaml` | OpenAI / compatible con OpenAI | `type: openai_compat`, `base_url`, `model` |
| `minimax.yaml` | MiniMax | `type: openai_compat` + `base_url: https://api.minimax.chat/v1` fijo + `env_key: MINIMAX_API_KEY` |
| `local_qwen3_vl.yaml` | vLLM local (predeterminado) | No se requiere clave |
| `mock.yaml` | mock con script | Para pruebas |

#### b. Seleccionar qué perfil usar (`configs/demo.yaml`)
```yaml
llm:
  profile: local_qwen3_vl    # ← Modify this line (mock / anthropic / openai / minimax / local_qwen3_vl)
```
Cambio temporal vía CLI: `wrc-demo --llm anthropic --task "..."`

#### c. Clave de API (variable de entorno)
| perfil | Qué variable de entorno se lee |
|---------|-----------------------|
| `anthropic` | `ANTHROPIC_API_KEY` |
| `openai` | `OPENAI_API_KEY` (modifica el endpoint mediante `OPENAI_BASE_URL`) |
| `minimax` | `MINIMAX_API_KEY` (leída desde el campo `env_key:` en YAML) |
| `local_qwen3_vl` | No requerida |

#### Ejecutar
```bash
conda activate wrc-demo

# ⚠ Important: `PUT_KEY_HERE` below is a **placeholder**, must be replaced with your real key

# Claude (Anthropic key format: sk-ant-api03-...)
export ANTHROPIC_API_KEY=PUT_KEY_HERE

# OpenAI (or any OpenAI compatible endpoint; key format: sk-...)
export OPENAI_API_KEY=PUT_KEY_HERE

# MiniMax (key format: sk-cp-...)
export MINIMAX_API_KEY=PUT_KEY_HERE

# Verify env var is set correctly
echo "ANTHROPIC_API_KEY prefix: ${ANTHROPIC_API_KEY:0:10}..."
echo "MINIMAX_API_KEY prefix: ${MINIMAX_API_KEY:0:10}..."
```
La `API_KEY` de la nube configurada con `export` solo es válida en la terminal actual. Si quieres persistir la `key` en `~/.bashrc` (export solo funciona para la shell actual, las nuevas shells necesitan ser reconfiguradas):
```bash
# Replace PUT_KEY_HERE with your real key (one full line)
echo 'export ANTHROPIC_API_KEY=PUT_KEY_HERE' >> ~/.bashrc

# Immediately reload and verify bashrc syntax is correct (will not expose key content)
bash -n ~/.bashrc && echo "✓ bashrc syntax OK"

source ~/.bashrc
# Verify env var is actually set
echo "ANTHROPIC_API_KEY prefix: ${ANTHROPIC_API_KEY:0:10}..."
```

**Como alternativa, puedes escribir la clave directamente en YAML (no recomendado):**
```yaml
# configs/llm/minimax.yaml has two writing methods:

# Method A (recommended, key is in env var)
type: openai_compat
base_url: https://api.minimax.chat/v1
model: MiniMax-M3
env_key: MINIMAX_API_KEY          # ← This is the "name of the env var", not the value

# Method B (key written directly in YAML, but will be tracked by git)
type: openai_compat
base_url: https://api.minimax.chat/v1
model: MiniMax-M3
api_key: PUT_KEY_HERE             # ← Write real key here (**not recommended**, will be tracked by git)
```

### 6.4 Dos métodos para cambiar de LLM
#### Método 1: Sobrescritura temporal vía CLI
```bash
# Single run with cloud model, tip: minimax can be replaced with the actual cloud model you use
wrc-demo --llm minimax --task "go to home" --no-view --no-serve

# Single run with local model (overrides default in demo.yaml)
wrc-demo --llm local_qwen3_vl --task "go to home" --no-view --no-serve
```

:::tip
Los dos scripts de prueba anteriores solo se utilizan para comprobar si el enlace del modelo está conectado y no controlarán realmente el brazo robótico.
:::

---

## 7. Ejecución de la demo

### 7.1 Iniciar demo

```bash
# Start the project
bash /home/seeed/wrc/scripts/start_all.sh --repl --real
```

Ejemplo de salida de la terminal tras una ejecución correcta:
```
# Output example:
(wrc-demo) seeed@seeed-KUANGSHI-Series:~/wrc$ bash /home/seeed/wrc/scripts/start_all.sh --repl --real
============================================================
  wrc_demo + Qwen3-VL-AWQ-4bit one-shot launcher
============================================================
  mode:    real hardware
  camera:  orbbec_overhead
  arm:     rebot_rs
  task:    <interactive>

[1/3] check vLLM...
  vLLM already running (skipped)

[2/3] start wrc_demo...
[wrc-demo] cameras=['orbbec_overhead'] arm=rebot_rs llm=local_qwen3_vl view=False
[wrc-demo] traces -> /home/seeed/wrc/runs/20260903_153216
load extensions from /home/seeed/miniforge3/envs/wrc-demo/lib/python3.10/site-packages/pyorbbecsdk/extensions
[stream] live view on http://192.168.3.175:8090/
[wrc-demo] LIVESTREAM dashboard: http://192.168.3.175:8090/
Type a task (empty line to quit).
task> 
```

Abre la página web, haz clic en el enlace `[wrc-demo] LIVESTREAM dashboard: http:xxxx` que se muestra en la terminal, y podrás controlar el brazo robótico mediante diálogo.

Ejemplo de salida de la terminal después de enviar un comando de diálogo:
```
=== task report ===
task:    go to home
success: True
path:    reflex (3.08s)
steps:   1
summary: done via reflex path in 3.08s: move_home()

[✓ done] task complete — arm parked at home. Enter a new task or press Enter to quit.

=== task report ===
task:    Wave and say hello
success: True
path:    llm (14.66s)
steps:   3
summary: Robot waved hello three times as requested.
```

:::tip
Esta demo tiene un área de trabajo segura predefinida para el brazo robótico. Si la resolución de IK falla durante las operaciones de agarre y colocación en un área grande, necesitas ajustar la posición fija de la cámara y recalibrar (una posición estable de la cámara está aproximadamente a 36 cm * 36 cm de la base del brazo robótico).
:::

### 7.2 Tareas ejecutables
Hay dos rutas para el control por diálogo de texto, `path: llm & path: reflex`

`reflex` se refiere a texto precargado (modo mock), que garantiza que se realicen las operaciones correspondientes sin que se ejecute el LLM, utilizando texto fijo preescrito para controlar el robot y completar diferentes tareas.

Los comandos estables de reflex son los siguientes:
```
pick up X and put in Y  # Complete pick+place

open the gripper        # Open the gripper

look around             # List objects recognized by the camera

go home                 # Return to origin
```

`llm` se refiere al análisis por un modelo real conectado en la nube o un modelo desplegado localmente, que puede entender el texto en lenguaje de forma más flexible y llamar a las habilidades correspondientes.

Las habilidades y sus funciones correspondientes son las siguientes:
```
skill_get_observation	 # Take photo + recognize
skill_localize_object	 # Single object localization
skill_grasp_object	     # Grasp only
skill_place_at	         # Place to coordinates
skill_place_on_object	 # Place on object
skill_open_gripper	     # Open gripper
skill_close_gripper	     # Close gripper
```

---

## 8. Configuración personalizada

### 8.1 Añadir nuevo perfil de LLM
El backend de LLM de wrc-demo es **enchufable**. Si necesitas añadir un nuevo perfil de LLM, un archivo `configs/llm/<name>.yaml` es un perfil.

Modifica una línea `profile: <name>` en `demo.yaml` para cambiar.

**Actualmente hay 5 perfiles integrados**:
| perfil | Propósito | Variable de entorno requerida |
|---|---|---|
| `local_qwen3_vl` | **Predeterminado**, Qwen3-VL-2B-AWQ-4bit local (vLLM 8080) | No requerida |
| `mock` | Script sin conexión, prueba pura (usado en §7.4 resolución de problemas) | No requerida |
| `anthropic` | Anthropic Claude | `ANTHROPIC_API_KEY` |
| `openai` | Protocolo OpenAI / compatible con OpenAI | `OPENAI_API_KEY` |
| `minimax` | MiniMax en la nube (migrado a variable de entorno) | `MINIMAX_API_KEY` |

Si necesitas añadir un nuevo perfil, sigue los pasos a continuación:

#### Paso 1: Copiar yaml como plantilla
(1) La mayoría de los LLM nacionales (DeepSeek / Moonshot Kimi / DashScope Qwen / Zhipu / SiliconFlow) siguen el protocolo OpenAI Chat Completions.
Copia desde openai.yaml:
```bash
cp configs/llm/openai.yaml configs/llm/kimi.yaml
```

(2) Para el protocolo Anthropic, copia desde anthropic.yaml.

#### Paso 2: Modificar 4 campos en yaml
Abre configs/llm/kimi.yaml, solo necesitas modificar 4 campos:
```
type: openai                # Protocol type (see "How to choose type" below)
model: moonshot-v1-8k       # Model name (check vendor documentation)
base_url: https://api.moonshot.cn/v1   # API endpoint, **do not miss the trailing /v1**
env_key: MOONSHOT_API_KEY   # Which env var to read
supports_vision: false      # Whether it supports images (critical, see below)
temperature: 0.0            # Generally no need to modify
max_tokens: 1024            # Generally no need to modify
timeout_s: 30               # Can be adjusted to 60 for slow networks
```

#### Paso 3: Cambiar el perfil en demo.yaml
Abre `configs/demo.yaml`, encuentra el bloque llm: y modifica solo una línea:
```
llm:
  profile: kimi    # ← Change to new profile name (remove .yaml suffix)
```

#### Paso 4: Configurar variable de entorno + verificar
(1) Exportación temporal (válida para la shell actual)
```
export MOONSHOT_API_KEY=sk-...
```
(2) Verificar que la variable de entorno surte efecto
```
echo "${MOONSHOT_API_KEY:0:8}"
```
(3) Prueba de ejecución con la bandera --llm, **sin modificar demo.yaml**
```
conda activate wrc-demo
python -m wrc_demo.apps.demo --llm kimi --task "list the objects" --no-view --no-serve
```

(4) Comprueba si stdout imprime "[wrc-demo] llm=kimi". Un mensaje de respuesta del LLM cuenta como éxito (una escena vacía también está bien).

### 8.2 Modificar la precisión de agarre
Edita el bloque `grasp.*` en `configs/demo.yaml`:
```yaml
grasp:
  backend: obb                          # obb (default fallback) / graspgenx (learning-based)
  pregrasp_offset_m: 0.08              # Hover height (along -approach direction)
  insertion_depth_m: 0.0              # TCP offset along +tool-x
  depth_fraction: 0.35                 # How deep to grasp from the top of the object
  exempt_radius_m: 0.15                # Grasp safety cylinder radius
  move_duration_s: 2.5
  descend_duration_s: 2.0
  release_height_m: 0.05
  air_grasp_frac: 0.04                # Gripper opening below this = empty grasp
  approach_pitch_rad: 1.2             # Angle between approach direction and +z (~69°)
```

Más conservador (más preciso, más lento) → aumenta `n_samples` (más tiempo de razonamiento de vLLM); más agresivo (más rápido) → disminuye.

Compensación mano-ojo (`hand_eye_compensation_m`), edita `extrinsics` en `configs/cameras/orbbec_overhead.yaml`.

La pose de agarre se convierte de coordenadas de cámara al sistema de coordenadas base mediante `T_cam2base`; las desviaciones en este paso se transmitirán directamente al punto de aterrizaje del agarre. El ajuste fino de la desviación en este eslabón se puede hacer ajustando el valor de `hand_eye_compensation_m`.
```yaml
# configs/cameras/orbbec_overhead.yaml
extrinsics:
  source: "${repo}/data/calibration/hand_eye_top.json"
  mode: eye_to_hand
  hand_eye_compensation_m:    # Meters; default [0, 0, 0] = identity (no effect)
    x: 0.00
    y: 0.
```00
    z: 0.00
```
The three values X, Y, and Z are used to add a manual translation offset on top of the calibrated `T_hand_eye` to ensure stable grasping of objects.

### 8.3 Modify detector configuration
```yaml
# configs/demo.yaml
detector:
  type: yoloe                          # yoloe / yolo-world
  model: ${repo}/models/yoloe-11s-seg.pt
  conf: 0.20                           # Umbral de confianza (más bajo = más detecciones, pero más falsos positivos)

detect_classes: ["banana", "cracker box", "soup can", "cube", "box", "pen", "toy"]
# ↑ Esta lista le indica a YOLOE qué etiquetas buscar en modo de vocabulario abierto
```

### 8.4 Modify safety thresholds
**Invariant**: The `limit_margin=0.025` parameter of `Kinematics.ik` (in `src/wrc_demo/control/kinematics.py`) **must be strictly greater than** the harness's `joint_margin=0.02`. Adjusting only one of these values will break the boundary between IK and safety verification. **Adjust both together**!

```yaml
# configs/demo.yaml
safety:
  workspace:                          # AABB del espacio de trabajo del TCP (metros)
    min: [0.10, -0.30, -0.01]
    max: [0.50, 0.30, 0.55]
  table_z: 0.0                        # Altura de la mesa (sistema de coordenadas base)
  table_clearance: 0.02              # Distancia de seguridad TCP-mesa
  max_joint_vel: 1.2                  # rad/s (aplicado por punto intermedio)
  joint_margin: 0.02                  # rad (reservado dentro de los límites del URDF)
  watchdog_s: 5.0                     # Tiempo de parada por expiración de percepción
  keep_out: []                        # Lista de AABB de parada de emergencia
```

---

## 9. Add new skills
**Prerequisites**: Familiarity with Python + Pinocchio + ultralytics. This section is a 30-minute quick start; to understand the underlying design, refer to `src/wrc_demo/skills/runtime.py`.

### 9.1 5 steps to add a new skill
All skills are added to the `SkillRuntime` class in `src/wrc_demo/skills/runtime.py` (no need to create a new `.py` file).

#### Step 1: Write the `skill_<name>()` method
```python
# src/wrc_demo/skills/runtime.py
from ..types import SkillError, SafetyViolation

class SkillRuntime:
    # ... existing methods ...

    def skill_my_skill(self, foo: str, bar: int = 0) -> dict:
        """Descripción en una línea. Devuelve: {...}"""
        if not foo:
            raise SkillError("foo must be non-empty")
        # ... tu lógica (debe usar self.arm (SafeArm), no accedas directamente a self.arm.raw) ...
        return {"ok": True, "result": "..."}
```

#### Step 2: Add an entry to `TOOL_SPECS`
```python
# src/wrc_demo/skills/runtime.py
TOOL_SPECS.append({
    "name": "my_skill",
    "description": "...",
    "parameters": {
        "type": "object",
        "properties": {
            "foo": {"type": "string"},
            "bar": {"type": "integer", "default": 0},
        },
        "required": ["foo"],
    },
})
```

#### Step 3: Add motion skills to `_MOTION_SKILLS`
```python
_MOTION_SKILLS = {
    # ... 18 existing entries ...
    "my_skill",
}
```
**This is the only location where WorldWatcher belief fusion is paused** — if fusion is not paused during arm movement, held objects will be incorrectly re-fused to their in-air position.

#### Step 4: Automatic tracing and MCP exposure
`SkillRuntime.execute()` is the single scheduling entry point; `mcp_server.py` serves `TOOL_SPECS` minus `_EXCLUDED_TOOLS` plus `_EXTRA_TOOLS` — once added, the skill can be called by LLM/MCP.

#### Step 5: (Optional) Add regex to `_RULES`
Enable common commands to use the fast reflex path (no LLM call):
```python
# src/wrc_demo/agent/reflex.py
_RULES.append((
    re.compile(r"^my command pattern\s+(\w+)", re.IGNORECASE),
    "my_skill",
))
```

### 9.2 Add a new detector
Implement the new detector class in `src/wrc_demo/perception/detector.py`:
```python
from .detector import Detector

class MyDetector:
    def __init__(self, model_path: str, **kwargs):
        # Cargar modelo
        ...

    def detect(self, frame) -> list[Detection]:
        # Devolver lista de objetos Detection
        ...
```

Add a branch in `apps/demo.py::_make_detector()`:
```python
if dcfg.type == "my_detector":
    from wrc_demo.perception.my_detector import MyDetector
    return MyDetector(dcfg.model)
```

### 9.3 Add a new grasp planner
`src/wrc_demo/grasping/my_planner.py`:
```python
from .selector import Grasp

def plan_my_grasps(fix, cloud, cfg) -> list[Grasp]:
    # Devolver lista de objetos Grasp
    ...
```

Add a layer in `SkillRuntime._plan_grasps()` (stacked by default on top of the camera-frame, graspgenx, and obb layers).

---

## 10. Architecture Overview
> **This chapter is reference material** — a guide to understanding how `wrc_demo` organizes code. Read the process in §9.1 before writing code; to understand the design rationale, refer to §10.3 Key Design Decisions.

### 10.1 Three-tier decision making (Reflex → Habit → LLM)
`wrc_demo` splits decision making into a **three-tier fast/slow path system**, similar to human fast/slow thinking:
```
N cámaras ──CameraStream (un hilo cada una, ranura de último fotograma, descartar obsoletos)
   │
   ├── WorldWatcher (hilo, ~3 Hz): detector + etiqueta de color HSV
   │     └─> BeliefStore (seguro para hilos): etiqueta+color+3D+frescura
   └── StreamServer (panel MJPEG): cuadrícula de cámaras + narración + tabla de objetos

comando de chat ("pick and place pink object")
   ├─ nivel 1 REFLEX    Sintaxis de plantilla → llamadas a skills                 (~µs)
   ├─ nivel 2 HABIT     Memoria de experiencia (BoW con hash, coseno ≥ 0.9)      (~ms)
   └─ nivel 3 LLM       Bucle de orquestador en bruto (2-15 s/turno)
        Todos los niveles usan el mismo SkillRuntime con compuerta de seguridad
```

**Key mechanisms**:
- **Latest-slot streaming**: Consumers always receive the most recent frame; sensors never fall behind (`perception/stream.py`)
- **Always-hot world model**: WorldWatcher continuously fuses depth and extrinsic parameters from each camera into BeliefStore, turning command parsing into a dictionary lookup instead of an observe→detect round trip. Fusion is paused during movement (to avoid in-air re-fusion) and sends heartbeats to the safety watchdog.
- **Color matching without CLIP**: Detection results map the median HSV value of masks to color names, which are stored in the belief store and matched against color terms in queries — "pink object" works even with a closed-set COCO detector. VLMs can still be consulted (tier 3/advisor), but are **never** used in the hot path.
- **One-call pick-and-place**: `skill_pick_and_place` = resolve → grasp → place → home, total execution time = robot arm movement time.
- **LazyArm**: The MCP gateway preheats cameras, detectors, and the world model on startup, but motors are **not** enabled until the first motion command is received — starting the chat server does not power on the robot.

### 10.2 Module diagram (simplified)
```
src/wrc_demo/
├── types.py            Frame / Detection / ObjectFix / Grasp / RobotState
├── config.py           Perfiles YAML (cameras/, arms/, llm/) combinados en Cfg
│
├── perception/         # 4 backends de cámara + detector YOLOE + alineación de profundidad
├── calibration/        # Calibración mano-ojo (ArUco + Pinocchio FK + LM)
├── memory/             # episódica + creencias + resultado de agarres
├── control/            # Pinocchio FK/IK + mock + lazy + RS real + SafeArm
├── safety/             # verificación de puntos intermedios con fallo seguro
├── grasping/           # planificación de agarre en 3 capas
├── agent/              # orquestador + reflejo + asesor + clientes LLM + traza
├── skills/              # SkillRuntime + TOOL_SPECS + lógica de negocio (teach, master_arm, etc.)
└── apps/                # demo / record / viewer / stream_server / mcp_server
```

### 10.3 Key design decisions
| Decision | Rationale |
|----------|-----------|
| **`Frame.rgb` is BGR, `depth_m` is metric float32** | Unit differences between L515 (0.25 mm/unit) and D4xx (1 mm/unit) caused bugs in the baseline; conversion at the camera boundary ensures unit safety for all downstream consumers. |
| **Grasp planning in base coordinate system, not camera coordinate system** | The baseline derived approach vectors from camera ray direction, making grasp quality dependent on camera pose. Here, mask points are lifted to 3D, transformed to the base coordinate system, and the OBB in the base frame provides yaw, width, and height — camera pose only affects visibility, not grasp geometry. |
| **Learned grasping as default, analytical grasping always available** | `grasp.backend: graspgenx` sends the object's base-frame point cloud to the GraspGen-X ZMQ service (`scripts/serve_graspgenx.sh`, port :5556), prioritizing ranked 6-DoF grasps before analytical OBB candidates. Any server error silently falls back to OBB — the demo will never freeze due to a dead model server. |
| **Custom kinematics wrapper** | The ReBotArm SDK's kinematics silently reads its own global config file (ignoring the passed `hw_yaml`), causing the DM installation URDF to be loaded for RS arms (incorrect tool coordinate system). We explicitly load the RS URDF from `assets/`. |
| **Feedback, no sleep** | The baseline used `sleep(duration + 0.6)`; the RS motor's motorbridge `get_state()` never decodes type-0x18 report frames, so actual position is obtained from `mechPos` (0x7019) parameter reads — verified on this rig. |
| **Fail-closed safety** | The SDK does not execute anything outside of IK. Our harness gates every streaming waypoint; grasp descent only occurs within an explicit exemption cylinder around the target, allowing "do not touch the table" and "grasp objects on the table" to coexist. |

### 10.4 Module dependency graph
```
            ┌──────────────────────────────────────────────────────────────┐
            │                apps/  (puntos de entrada)                    │
            │   demo.py (build_runtime)   mcp_server.py   dashboard_runner │
            └────────────┬──────────────────────┬────────────────┬─────────┘
                         │                      │                │
        ┌────────────────▼─────────┐   ┌────────▼────────┐  ┌────▼─────────┐
        │   agent/  (orquestador)  │   │  skills/        │  │  perception/ │
        │   orchestrator.py        │◄──│  runtime.py     │  │  camera_base │
        │   reflex.py (nivel1)     │   │   6 skills      │  │  + cameras/  │
        │   advisor.py  (nivel3)   │   │  TOOL_SPECS     │  │  detector    │
        │   llm.py                 │   │  trace auto     │  │  depth_prov  │
        └────────┬─────────────────┘   └────────┬─────────┘  └────┬─────────┘
                 │                            │                │
                 ▼                            ▼                ▼
        ┌─────────────────────────────────────────────────────────────────┐
        │              memory/  +  grasping/  +  control/                 │
        │   BeliefStore   GraspMemory   camera_grasp + obb_grasp + graspgenx│
        │   EpisodicMem   (3 capas)        Kinematics + MockArm + SafeArm  │
        └────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
        ┌─────────────────────────────────────────────────────────────────┐
        │                       safety/  (fail-closed)                    │
        │   SafetyHarness.approve(waypoint)  vet_pose()  estop latch   │
        └─────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
              SDK incluido + pyorbbecsdk + ultralytics + pin + motorbridge
```

### 10.5 Trace sequence diagram (one `pick_and_place` call)
```
t=0.0s  usuario  ──→  build_runtime()
                   ├─ Kinematics(urdf, joint_signs)
                   ├─ make_arm(cfg) ── RebotArm.connect()
                   ├─ CameraRig(N) ── Open + warm_up
                   ├─ LockedDetector(YOLOE weights)
                   ├─ EpisodicMemory / BeliefStore / TraceLogger
                   └─ SkillRuntime(...)

t=0.5s  hilo WorldWatcher inicia (pasada del detector a 3 Hz → creencias)

t=1.0s  usuario --task "pick up red block"
        AgentOrchestrator.run_task()
        ├─ nivel1 REFLEX: coincidencia regex ──→ pick_and_place acierto?  ──→ ejecutar
        └─ (respaldo) nivel2 HABIT ──→ nivel3 LLM ──→ tool_calls

t=1.1s  SkillRuntime.execute("pick_and_place")
        ├─ tracer.start()
        ├─ belief.find("red block")  ── esperar límite 5s
        ├─ _plan_grasps() ── cámara + graspgenx + obb ── reordenar
        ├─ select_grasps() ── IK ── arnés preevaluación
        ├─ safe_arm.move_joints() ── cada waypoint 50Hz ── SafetyHarness.approve
        ├─ cierre de pinza en dos etapas ── detección de bloqueo
        ├─ levantar + colocar + home
        └─ tracer.finish()  ── trace.jsonl + fotogramas clave + narración

t=N.5s  report.success ── print "✓ done — arm parked at home"
```

### 10.6 Comparison of the three grasp planning layers
| Layer | Trigger condition | Data source | Output | Failure behavior |
|-------|-------------------|-------------|--------|------------------|
| **1. camera-frame planner** (`camera_grasp.py::plan_grasp_from_mask`) | Always — as long as detection has mask + depth | segmentation mask + depth → `cv2.minAreaRect` → depth-quantile back-project → camera-frame Grasp | `Grasp(approach, position, width, height)` | Fall back to layer 2 |
| **2. GraspGen-X ZMQ** (`graspgenx_backend.py`) | `grasp.backend == "graspgenx"` and server at :5556 is reachable | base-frame point cloud → learned 6-DoF grasp | List of `Grasp` (top-k=32) | Server timeout / disconnect → silent fallthrough |
| **3. analytic OBB** (`obb_grasp.py::plan_grasps_from`) | Always | base-frame OBB (yaw, width, height) | List of `Grasp` | No failure — always returns |

All layers output the same `Grasp` dataclass; `GraspOutcomeMemory` re-ranks across layers; `select_grasp()` performs jaw-width filtering + IK walk + harness pre-vet (including 7 samples along the descent path).

### 10.7 Verification status (as of 2026-08-28)
- **17 unit + integration tests** passed, 1 skipped (mock stack, ~30s)
- **Full suite**: ~290 unit + integration tests passed (hardware-tagged tests deselected by default)
- **2 adversarial multi-view reviews**: 2026-07-16 (4 reviewers × skeptic verification, 29 confirmed defects) + 2026-07-18 livestreaming redesign (45-agent workflow, 33 confirmed findings)
- **Real robot verification**: L515 streaming, RobStride `mechPos` parameter reads (can0 read-only), YOLO inference (CUDA, GB10), GraspGen-X backend (first-light verification)
- **Not verified**: Real robot motion (requires on-site gripper re-verification + hand-eye calibration)

---