---
description: Este wiki muestra cómo desplegar un sistema local de agarre robótico controlado por voz en NVIDIA Jetson Thor con el reBot Arm B601. Cubre la configuración del entorno Jetson, el reconocimiento de voz Whisper, el despliegue local de LLM con Ollama, la integración con OpenWebUI, la planificación de agarre basada en GraspNet y el control por comandos de voz para tareas de agarre robótico.
title: Control por voz de reBot Arm B601 con Nvidia Jetson Thor
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg
slug: /voice_control_rebot_arm
sku: 100060965 | 100046482
last_update:
  date: 05/18/2026
  author: youjiang
createdAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/voice_control_rebot_arm/
updatedAt: '2026-08-11'
---

# Control por voz de reBot Arm B601 con Nvidia Jetson Thor


## Introducción

Los modelos de lenguaje grandes (LLMs) están haciendo que los sistemas robóticos sean más intuitivos al permitir la interacción en lenguaje natural. Combinados con visión robótica y planificación de agarre, los usuarios pueden controlar robots usando simples comandos de voz.
<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_controlled_rebot_arm/cover_page.png" />
</div>
En este tutorial, desplegaremos un sistema completo de agarre robótico controlado por voz en la plataforma NVIDIA Jetson Thor. 

## Características

* Inferencia de IA completamente local en Jetson Thor
* Interacción por voz usando Whisper
* LLM local impulsado por Ollama
* Interfaz OpenWebUI basada en navegador
* Detección de agarre 6-DoF usando GraspNet
* Control en tiempo real del brazo robótico

## Flujo de trabajo
<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_controlled_rebot_arm/workflow.png" />
</div>

## Preparación de hardware

### Hardware requerido

- Nvidia Jetson Thor (JetPack 7.x instalado)
- [reBot Arm B601 DM](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [Adaptador USB-a-CAN](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- Cámara RGBD Orbbec Gemini 2
- reSpeaker
- Fuente de alimentación y cable USB para el brazo robótico
- Botón USB (opcional)

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reBot Arm B601 </th>
        <th> Kit de desarrollo NVIDIA® Jetson AGX Thor™ </th>
        <th> Cámara RGBD Orbbec Gemini 2 </th>
        <th> reSpeaker Flex XVF3800 Linear-4 </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210h_1e029c0a-706b-4f38-a34b-0255801987bg.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-p-6738.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>


### Conexión de hardware

1. Conecta la cámara al puerto USB de Jetson Thor.
2. Conecta el reBot Arm RS a Jetson Thor mediante el módulo CAN2USB.
3. Conecta el micrófono USB a Jetson Thor.
4. Enciende todos los dispositivos.


## Instalar Ollama

### Paso 1. Instalar Ollama

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Paso 2. Descargar un modelo de lenguaje

```bash
ollama pull nemotron3:33b
```

### Paso 3. Verificar Ollama

```bash
ollama run nemotron3:33b
```

## Desplegar OpenWebUI

### Paso 1. Iniciar OpenWebUI

```bash
docker run -d -p 4000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -v open-webui_tt:/app/backend/data   --name open-webui_tt \
  ghcr.io/open-webui/open-webui:main
```

:::info
Nota: La imagen oficial de Docker de Open WebUI no incluye una función de pulsar para hablar (grabación de voz activada por botón). Si deseas habilitar la funcionalidad de pulsar para hablar, utiliza en su lugar la siguiente imagen de Docker.
:::

### Paso 2. Acceder a la interfaz

Abre tu navegador y visita:

```text
http://<Jetson-IP>:3000
```

### Paso 3. Conectar Ollama

Configura el endpoint de Ollama dentro de OpenWebUI.

```text
http://host.docker.internal:11434
```

:::info
Si Open WebUI no puede conectarse correctamente a Ollama, modifica la configuración del servicio systemd de Ollama y luego reinicia el servicio de Ollama:

<details>

<summary> /etc/systemd/system/ollama.service </summary>

``` bash
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/local/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=/home/seeed/.local/bin:/home/seeed/.local/bin:/home/seeed/.nvm/versions/node/v22.22.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
Environment="OLLAMA_HOST=0.0.0.0:11434"

[Install]
WantedBy=default.target
```

</details>
:::

### Paso 4. Configurar las herramientas

`Workspace` --> `Tools` --> `New Tool`

<details>

<summary> robot arm tools </summary>

``` python
"""
title: Grasp Web Robot Arm
author: seeedstudio
version: 0.3.0
description: Open WebUI tools for controlling grasp_web.py robot arm HTTP API.
requirements: requests
"""

import os
import requests
from typing import Dict, Any, List, Optional


class Tools:
    def __init__(self):
        self.base_url = os.getenv(
            "GRASP_BASE", "http://host.docker.internal:8090"
        ).rstrip("/")
        self.timeout = float(os.getenv("GRASP_TIMEOUT", "20"))

    def _json_or_text(self, r: requests.Response):
        try:
            return r.json()
        except Exception:
            return r.text

    def _get(self, path: str) -> Dict[str, Any]:
        try:
            r = requests.get(f"{self.base_url}{path}", timeout=self.timeout)
            return {
                "ok": r.ok,
                "status_code": r.status_code,
                "data": self._json_or_text(r),
            }
        except Exception as e:
            return {"ok": False, "error": str(e)}

    def _post(self, path: str, payload: Optional[dict] = None) -> Dict[str, Any]:
        try:
            r = requests.post(
                f"{self.base_url}{path}",
                json=payload or {},
                timeout=self.timeout,
            )
            return {
                "ok": r.ok,
                "status_code": r.status_code,
                "data": self._json_or_text(r),
            }
        except Exception as e:
            return {"ok": False, "error": str(e)}

    # -------------------------
    # 状态查询
    # -------------------------

    def robot_state(self) -> Dict[str, Any]:
        """
        读取机器人状态：关节角度、末端位姿、夹爪状态，包括位置、速度、力矩、是否夹住。
        这是只读操作，不会驱动机械臂。
        """
        return self._get("/robot/state")

    # -------------------------
    # 基础操作
    # -------------------------

    def reset_robot(self) -> Dict[str, Any]:
        """
        复位机器人：停止当前执行、松开夹爪、机械臂回原点。
        注意：这会驱动真实机械臂运动。
        """
        return self._post("/reset", {})

    def move_ready(self) -> Dict[str, Any]:
        """
        移动机械臂到预定义就绪位：张开夹爪并移动到就绪姿态。
        注意：这会驱动真实机械臂运动。
        """
        return self._post("/ready", {})

    # -------------------------
    # 目标类别设置
    # -------------------------

    def set_target_class(self, class_name: str) -> Dict[str, Any]:
        """
        设置目标类别，例如 bottle、cup、apple。
        设置后后端会自动触发推理更新。

        传入空字符串 "" 可以取消类别过滤，扫描全场所有检测到的物体。
        """
        if class_name is None:
            return {"ok": False, "error": "class_name must be a string"}

        return self._post("/target", {"class_name": class_name})

    def clear_target_filter(self) -> Dict[str, Any]:
        """
        取消目标类别过滤，扫描全场所有检测到的物体。
        """
        return self._post("/target", {"class_name": ""})

    # -------------------------
    # 夹爪控制
    # -------------------------

    def gripper_state(self) -> Dict[str, Any]:
        """
        读取夹爪状态：位置、速度、力矩、是否夹住。
        这是只读操作，不会驱动机械臂。
        """
        return self._post("/gripper", {"action": "state"})

    def gripper_open(self, distance_m: float = 0.09) -> Dict[str, Any]:
        """
        张开夹爪到指定距离。

        参数：
        - distance_m: 张开距离，单位米，默认 0.09

        注意：这会驱动真实夹爪。
        """
        if distance_m < 0:
            return {"ok": False, "error": "distance_m must be >= 0"}

        return self._post(
            "/gripper",
            {
                "action": "open",
                "distance_m": distance_m,
            },
        )

    def gripper_close(self) -> Dict[str, Any]:
        """
        闭合夹爪，使用非阻塞力矩模式。
        注意：这会驱动真实夹爪。
        """
        return self._post("/gripper", {"action": "close"})

    def gripper_release(self) -> Dict[str, Any]:
        """
        释放夹爪，松开并解除 HOLDING 状态。
        注意：这会驱动真实夹爪。
        """
        return self._post("/gripper", {"action": "release"})

    # -------------------------
    # 关节控制
    # -------------------------

    def joint_jog(
        self,
        joint: str,
        delta_deg: float,
        duration_s: float = 2.0,
        safety_margin_deg: float = 5.0,
    ) -> Dict[str, Any]:
        """
        单关节点动控制。

        参数：
        - joint: joint1 ~ joint6
        - delta_deg: 相对旋转角度，单位度。正数为正方向，负数为负方向
        - duration_s: 运动时间，单位秒
        - safety_margin_deg: 限位安全边距，单位度

        注意：这会驱动真实机械臂。
        """
        valid_joints = {"joint1", "joint2", "joint3", "joint4", "joint5", "joint6"}

        if joint not in valid_joints:
            return {"ok": False, "error": "joint must be one of joint1 ~ joint6"}

        if duration_s <= 0:
            return {"ok": False, "error": "duration_s must be greater than 0"}

        if safety_margin_deg < 0:
            return {"ok": False, "error": "safety_margin_deg must be >= 0"}

        return self._post(
            "/joint/jog",
            {
                "joint": joint,
                "delta_deg": delta_deg,
                "duration_s": duration_s,
                "safety_margin_deg": safety_margin_deg,
            },
        )

    def move_joints(
        self,
        joints_rad: List[float],
        duration_s: float = 3.0,
    ) -> Dict[str, Any]:
        """
        一次性设置所有 6 个关节的绝对位置。

        参数：
        - joints_rad: 6 个关节角，单位弧度
        - duration_s: 运动时间，单位秒

        关节顺序：
        [joint1, joint2, joint3, joint4, joint5, joint6]

        注意：这会驱动真实机械臂。
        """
        if not isinstance(joints_rad, list) or len(joints_rad) != 6:
            return {"ok": False, "error": "joints_rad must be a list of 6 numbers"}

        if duration_s <= 0:
            return {"ok": False, "error": "duration_s must be greater than 0"}

        return self._post(
            "/joint/move",
            {
                "joints_rad": joints_rad,
                "duration_s": duration_s,
            },
        )

    def move_zero_joints(self) -> Dict[str, Any]:
        """
        将所有关节移动到 0 位。
        注意：这会驱动真实机械臂。
        """
        return self.move_joints(
            joints_rad=[0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            duration_s=3.0,
        )

    def move_ready_joints(self) -> Dict[str, Any]:
        """
        移动到示例就绪关节位：
        [0.0, -1.0, -1.5, 0.5, 0.0, 0.0]

        注意：这会驱动真实机械臂。
        """
        return self.move_joints(
            joints_rad=[0.0, -1.0, -1.5, 0.5, 0.0, 0.0],
            duration_s=3.0,
        )

    # -------------------------
    # 末端位姿控制
    # -------------------------

    def move_pose(
        self,
        x: float,
        y: float,
        z: float,
        roll: float,
        pitch: float,
        yaw: float,
        duration: float = 3.0,
    ) -> Dict[str, Any]:
        """
        末端位姿控制。服务端会先做 IK 规划，不可达则返回错误。

        参数：
        - x, y, z: 末端位置，单位米
        - roll, pitch, yaw: 末端姿态，单位弧度
        - duration: 运动时间，单位秒

        建议先调用 ready 或 joint/move 到可达位置后，再使用 move_pose。

        注意：这会驱动真实机械臂。
        """
        if duration <= 0:
            return {"ok": False, "error": "duration must be greater than 0"}

        return self._post(
            "/move/pose",
            {
                "x": x,
                "y": y,
                "z": z,
                "roll": roll,
                "pitch": pitch,
                "yaw": yaw,
                "duration": duration,
            },
        )

    def move_ready_pose(self) -> Dict[str, Any]:
        """
        移动到默认末端就绪位：
        x=0.25, y=0.0, z=0.35, roll=0.0, pitch=1.2, yaw=0.0

        注意：这会驱动真实机械臂。
        """
        return self.move_pose(
            x=0.25,
            y=0.0,
            z=0.35,
            roll=0.0,
            pitch=1.2,
            yaw=0.0,
            duration=3.0,
        )

    def move_near_current_pose(self) -> Dict[str, Any]:
        """
        移动到从零位出发通常可达的保守末端位：
        x=0.260, y=0.0, z=0.20, roll=0.0, pitch=0.0, yaw=0.0

        注意：这会驱动真实机械臂。
        """
        return self.move_pose(
            x=0.260,
            y=0.0,
            z=0.20,
            roll=0.0,
            pitch=0.0,
            yaw=0.0,
            duration=2.0,
        )

    # -------------------------
    # 底座点动
    # -------------------------

    def base_jog(
        self,
        delta_deg: float,
        duration_s: float = 2.0,
    ) -> Dict[str, Any]:
        """
        底座点动。

        参数：
        - delta_deg: 底座旋转角度，单位度。正数为正方向，负数为负方向
        - duration_s: 运动时间，单位秒

        注意：这会驱动真实机械臂底座。
        """
        if duration_s <= 0:
            return {"ok": False, "error": "duration_s must be greater than 0"}

        return self._post(
            "/base_jog",
            {
                "delta_deg": delta_deg,
                "duration_s": duration_s,
            },
        )

    # -------------------------
    # 一键自动抓取
    # -------------------------

    def auto_grasp(
        self,
        class_name: str = "bottle",
        max_retries: int = 10,
        retry_interval_s: float = 1.5,
    ) -> Dict[str, Any]:
        """
        一键自动抓取。

        流程：
        1. 设置目标类别
        2. 自动循环推理
        3. 检测到目标后执行夹取

        后端会在后台运行抓取流程。
        可通过 robot_state 查看进度。

        参数：
        - class_name: 目标类别，例如 bottle。空字符串表示扫描全场
        - max_retries: 最大重试次数
        - retry_interval_s: 每次重试间隔，单位秒

        注意：这会驱动真实机械臂。
        """
        if max_retries <= 0:
            return {"ok": False, "error": "max_retries must be greater than 0"}

        if retry_interval_s <= 0:
            return {"ok": False, "error": "retry_interval_s must be greater than 0"}

        return self._post(
            "/auto_grasp",
            {
                "class_name": class_name,
                "max_retries": max_retries,
                "retry_interval_s": retry_interval_s,
            },
        )

    # -------------------------
    # 视频流
    # -------------------------

    def stream_url(self) -> Dict[str, Any]:
        """
        返回 MJPEG 视频流地址。
        不会驱动机械臂。
        """
        return {
            "ok": True,
            "stream_url": f"{self.base_url}/stream.mjpg",
        }
```

</details>


## Desplegar el servicio backend de reBot Arm

### Paso 1. Instalar paquetes del sistema y Miniconda

```bash
sudo apt update
sudo apt install -y git wget curl build-essential cmake libusb-1.0-0-dev python3-pip

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

### Paso 2. Clonar el proyecto

```bash
git clone https://github.com/jjjadand/reBot-DevArm-Grasp.git rebot_grasp-jetson
cd rebot_grasp-jetson
```

Si estás utilizando un paquete interno en lugar del repositorio público, copia ese directorio de proyecto a Jetson y ejecuta los comandos restantes desde la raíz del proyecto.

### Paso 3. Crear el entorno de Python

Usa Python 3.10 en JetPack 6.x. Usa Python 3.12 en JetPack 7.x / Thor.

```bash
# JetPack 6.x
conda create -y -n graspnet python=3.10

# JetPack 7.x / Thor
# conda create -y -n graspnet python=3.12

conda activate graspnet
python -m pip install -U pip wheel setuptools
```

Comprueba tus versiones de JetPack y CUDA:

```bash
cat /etc/nv_tegra_release
nvcc --version
```

### Paso 4. Instalar PyTorch compatible con Jetson

No instales el paquete genérico de PyTorch CPU/GPU de PyPI en Jetson. Instala un wheel que coincida con tus versiones de JetPack, Python y CUDA. Para usuarios de reComputer, también puedes seguir la guía dedicada: [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/es/install_torch_on_recomputer/).

Los puntos de partida habituales son:

```bash
# JetPack 6.x, CUDA 12.x, Python 3.10
pip install --extra-index-url https://pypi.jetson-ai-lab.io/jp6/cu126 torch torchvision

# JetPack 7.x / Thor, CUDA 13.x, Python 3.12
# pip install --extra-index-url https://pypi.jetson-ai-lab.io/sbsa/cu130 torch torchvision
```

Verifica CUDA desde Python:

```bash
python - <<'PY'
import torch
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("device:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "none")
PY
```

`cuda available` debe ser `True` antes de continuar.

### Paso 5. Instalar dependencias de Python

```bash
pip install -r requirements-graspnet-jetson.txt
```

### Paso 6. Instalar los SDK de robot, GraspNet y GraspNet API

```bash
mkdir -p sdk

git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
pip install -e sdk/reBotArm_control_py

git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
git clone https://github.com/graspnet/graspnetAPI.git sdk/graspnetAPI
pip install -e sdk/graspnetAPI
```

Descarga el checkpoint preentrenado de GraspNet desde la página de descargas de GraspNet y colócalo aquí:

```text
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

### Paso 7. Establecer rutas de CUDA y compilar los operadores CUDA de GraspNet

Establece la ruta de CUDA para tu versión de JetPack:

```bash
# JetPack 6.x example
export CUDA_HOME=/usr/local/cuda-12.6

# JetPack 7.x / Thor example
# export CUDA_HOME=/usr/local/cuda-13.0

export PATH="$CUDA_HOME/bin:$PATH"
export LD_LIBRARY_PATH="$CUDA_HOME/lib64:$LD_LIBRARY_PATH"
```

Compila las extensiones CUDA utilizadas por GraspNet:

```bash
bash scripts/install_graspnet_cuda_ops.sh
bash scripts/install_graspnet_cuda_ops.sh --check
```

Si más adelante cambias JetPack, Python, CUDA o PyTorch, vuelve a compilar con:

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

### Paso 8. Instalar el SDK de la cámara Orbbec

El proyecto incluye un asistente que instala `pyorbbecsdk2` en el entorno de Python activo:

```bash
bash scripts/install_pyorbbecsdk.sh
```

Si necesitas compilar el SDK localmente, primero clona el árbol de código fuente y ejecuta el modo de código fuente:

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git sdk/pyorbbecsdk
bash scripts/install_pyorbbecsdk.sh --from-source
```

Instala las reglas udev de Orbbec cuando el árbol de código fuente del SDK esté disponible:

```bash
sudo bash sdk/pyorbbecsdk/scripts/env_setup/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### Paso 9. Descargar pesos de YOLO y exportar TensorRT en el Jetson de destino

Los archivos de motor de TensorRT son específicos del dispositivo. Siempre exporta el `.engine` en el Jetson que ejecutará la demostración.

```bash
mkdir -p models
wget https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-seg.pt -O models/yolo11n-seg.pt

yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 half=True device=0 workspace=4
```

La salida esperada es:

```text
models/yolo11n-seg.engine
```

Si la exportación FP16 falla en tu plataforma, exporta sin `half=True`:

```bash
yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 device=0 workspace=4
```

## Verificar y calibrar

Ejecuta estas comprobaciones en orden antes de intentar una sujeción real.

**1. Comprobar la cámara RGB-D**

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/verify_pyorbbec_stream.py
python scripts/verify_pyorbbec_stream.py --preview --seconds 10
```

La comprobación solo de texto debe informar información de fotogramas RGB y de profundidad. La comprobación de vista previa debe mostrar ventanas RGB y de profundidad cuando haya una pantalla de escritorio disponible.

**2. Comprobar la conexión del robot**

Comienza con el modo de solo lectura:

```bash
python scripts/verify_rebot_arm_motion.py --read-only
```

Luego ejecuta un pequeño movimiento de la articulación 6 después de confirmar que la trayectoria del brazo está despejada:

```bash
python scripts/verify_rebot_arm_motion.py --deg 5
```

**3. Comprobar la pila de GraspNet**

```bash
python scripts/verify_graspnet_stack.py
```

Si la cámara aún no está conectada pero solo quieres comprobar los archivos de Python, CUDA, GraspNet y YOLO:

```bash
python scripts/verify_graspnet_stack.py --skip-camera
```

**4. Realizar la calibración eye-in-hand**

Este proyecto utiliza calibración eye-in-hand: la cámara está montada en el efector final y el marcador ArUco está fijo en la mesa. La configuración predeterminada espera un marcador `DICT_4X4_50`, ID `0`, de 0.1 m. El repositorio incluye archivos de marcadores imprimibles como `aruco100x100.pdf`.

Recopilación automática:

```bash
python scripts/collect_handeye_eih.py
```

Recopilación manual con compensación de gravedad:

```bash
python scripts/collect_handeye_eih.py --manual
```

Los resultados de la calibración se guardan en el directorio de la cámara activa:

```text
config/calibration/orbbec_gemini2/hand_eye.npz
config/calibration/orbbec_gemini2/intrinsics.npz
```

Verifica la calibración guardada:

```bash
python scripts/verify_handeye_calibration.py
```

Vuelve a calibrar siempre que cambie el soporte de la cámara, la garra, el tamaño de la placa ArUco o la geometría de la mesa.

## Iniciar la aplicación 

La interfaz Web UI es la primera interfaz de usuario recomendada. Proporciona vídeo MJPEG en vivo, selección de objetivo, vista previa de sujeción, ejecución de sujeción real, ajuste de compensación, movimiento base, control de la garra, posición de preparado y operaciones de reinicio.

Primero inicia en modo de vista previa. Esto no ejecuta movimiento real del robot:

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8000 \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

Abre la Web UI desde un navegador:

```text
http://<jetson_ip>:8000
```

Usa el modo de vista previa para confirmar el flujo de la cámara, las detecciones de YOLO, el filtrado de objetivos y la generación de puntos de sujeción. Haz clic en el control de inferencia o actualización en la Web UI para actualizar la vista previa de GraspNet.

Abre la página `Open WebUI` (`http://<jetson_ip>:4000`). Si has habilitado las Robot Arm Tools en el chat, puedes controlar el brazo robótico directamente usando comandos en lenguaje natural.

## Demostración de funciones

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/V1_ksIhJgkQ" title="Voice Control reBot Arm B601 by Nvidia Jetson Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias

- https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/index.html
- https://github.com/Seeed-Projects/reBot-DevArm
- https://github.com/graspnet/graspnet-baseline.git
- https://github.com/Seeed-Projects/reBotArm_control_py
- https://github.com/orbbec/pyorbbecsdk.git
- https://wiki.seeedstudio.com/es/install_torch_on_recomputer/

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
