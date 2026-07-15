---
description: Este wiki mostra como implantar um sistema local de preensão robótica controlado por voz no NVIDIA Jetson Thor com o reBot Arm B601. Ele abrange a configuração do ambiente Jetson, reconhecimento de fala com Whisper, implantação local de LLM com Ollama, integração com OpenWebUI, planejamento de preensão baseado em GraspNet e controle por comandos de voz para tarefas de preensão robótica.
title: Controle de voz do reBot Arm B601 com Nvidia Jetson Thor
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg
slug: /voice_control_rebot_arm
sku: 100060965 | 100046482
last_update:
  date: 05/18/2026
  author: youjiang
createdAt: '2026-06-15'
url: https://wiki.seeedstudio.com/pt-br/voice_control_rebot_arm/
updatedAt: '2026-05-20'
---

# Controle de voz do reBot Arm B601 com Nvidia Jetson Thor


## Introdução

Os Large Language Models (LLMs) estão tornando os sistemas robóticos mais intuitivos ao permitir interação em linguagem natural. Combinados com visão robótica e planejamento de preensão, os usuários podem controlar robôs usando comandos de voz simples.
<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_controlled_rebot_arm/cover_page.png" />
</div>
Neste tutorial, vamos implantar um sistema completo de preensão robótica controlado por voz na plataforma NVIDIA Jetson Thor. 

## Recursos

* Inferência de IA totalmente local no Jetson Thor
* Interação por voz usando Whisper
* LLM local alimentado por Ollama
* Interface OpenWebUI baseada em navegador
* Detecção de preensão 6-DoF usando GraspNet
* Controle em tempo real do braço robótico

## Fluxo de trabalho
<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_controlled_rebot_arm/workflow.png" />
</div>

## Preparação de hardware

### Hardware necessário

- Nvidia Jetson Thor (JetPack 7.x instalado)
- [reBot Arm B601 DM](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [Adaptador USB-para-CAN](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- Câmera RGBD Orbbec Gemini 2
- reSpeaker
- Fonte de alimentação e cabo USB para o braço robótico
- Botão USB (opcional)

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reBot Arm B601 </th>
        <th> Kit de Desenvolvimento NVIDIA® Jetson AGX Thor™ </th>
        <th> Câmera RGBD Orbbec Gemini 2 </th>
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
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-p-6738.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>


### Conexão de hardware

1. Conecte a câmera à porta USB do Jetson Thor.
2. Conecte o reBot Arm RS ao Jetson Thor pelo módulo CAN2USB.
3. Conecte o microfone USB ao Jetson Thor.
4. Ligue todos os dispositivos.


## Instalar o Ollama

### Etapa 1. Instalar o Ollama

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Etapa 2. Baixar um modelo de linguagem

```bash
ollama pull nemotron3:33b
```

### Etapa 3. Verificar o Ollama

```bash
ollama run nemotron3:33b
```

## Implantar o OpenWebUI

### Etapa 1. Iniciar o OpenWebUI

```bash
docker run -d -p 4000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -v open-webui_tt:/app/backend/data   --name open-webui_tt \
  ghcr.io/open-webui/open-webui:main
```

:::info
Observação: A imagem Docker oficial do Open WebUI não inclui o recurso de push-to-talk (gravação de voz acionada por botão). Se você quiser habilitar a funcionalidade de push-to-talk, use a seguinte imagem Docker em seu lugar.
:::

### Etapa 2. Acessar a interface

Abra o navegador e acesse:

```text
http://<Jetson-IP>:3000
```

### Etapa 3. Conectar o Ollama

Configure o endpoint do Ollama dentro do OpenWebUI.

```text
http://host.docker.internal:11434
```

:::info
Se o Open WebUI não conseguir se conectar corretamente ao Ollama, modifique a configuração do serviço systemd do Ollama e, em seguida, reinicie o serviço Ollama:

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

### Etapa 4. Configurar as ferramentas

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


## Implantar o serviço de backend do reBot Arm

### Etapa 1. Instalar pacotes de sistema e Miniconda

```bash
sudo apt update
sudo apt install -y git wget curl build-essential cmake libusb-1.0-0-dev python3-pip

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

### Etapa 2. Clonar o projeto

```bash
git clone https://github.com/jjjadand/reBot-DevArm-Grasp.git rebot_grasp-jetson
cd rebot_grasp-jetson
```

Se você estiver usando um pacote interno em vez do repositório público, copie esse diretório de projeto para o Jetson e execute os comandos restantes a partir da raiz do projeto.

### Etapa 3. Criar o ambiente Python

Use Python 3.10 no JetPack 6.x. Use Python 3.12 no JetPack 7.x / Thor.

```bash
# JetPack 6.x
conda create -y -n graspnet python=3.10

# JetPack 7.x / Thor
# conda create -y -n graspnet python=3.12

conda activate graspnet
python -m pip install -U pip wheel setuptools
```

Verifique suas versões do JetPack e CUDA:

```bash
cat /etc/nv_tegra_release
nvcc --version
```

### Etapa 4. Instalar o PyTorch compatível com Jetson

Não instale o pacote genérico PyTorch CPU/GPU do PyPI no Jetson. Instale um wheel que corresponda às suas versões de JetPack, Python e CUDA. Para usuários de reComputer, você também pode seguir o guia dedicado: [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/).

Pontos de partida comuns são:

```bash
# JetPack 6.x, CUDA 12.x, Python 3.10
pip install --extra-index-url https://pypi.jetson-ai-lab.io/jp6/cu126 torch torchvision

# JetPack 7.x / Thor, CUDA 13.x, Python 3.12
# pip install --extra-index-url https://pypi.jetson-ai-lab.io/sbsa/cu130 torch torchvision
```

Verifique o CUDA a partir do Python:

```bash
python - <<'PY'
import torch
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("device:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "none")
PY
```

`cuda available` deve ser `True` antes de continuar.

### Etapa 5. Instalar dependências Python

```bash
pip install -r requirements-graspnet-jetson.txt
```

### Etapa 6. Instalar SDKs do robô, GraspNet e GraspNet API

```bash
mkdir -p sdk

git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
pip install -e sdk/reBotArm_control_py

git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
git clone https://github.com/graspnet/graspnetAPI.git sdk/graspnetAPI
pip install -e sdk/graspnetAPI
```

Baixe o checkpoint pré-treinado do GraspNet na página de download do GraspNet e coloque-o aqui:

```text
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

### Etapa 7. Definir caminhos CUDA e compilar operadores CUDA do GraspNet

Defina o caminho CUDA para a sua versão do JetPack:

```bash
# JetPack 6.x example
export CUDA_HOME=/usr/local/cuda-12.6

# JetPack 7.x / Thor example
# export CUDA_HOME=/usr/local/cuda-13.0

export PATH="$CUDA_HOME/bin:$PATH"
export LD_LIBRARY_PATH="$CUDA_HOME/lib64:$LD_LIBRARY_PATH"
```

Compile as extensões CUDA usadas pelo GraspNet:

```bash
bash scripts/install_graspnet_cuda_ops.sh
bash scripts/install_graspnet_cuda_ops.sh --check
```

Se você alterar JetPack, Python, CUDA ou PyTorch depois, recompile com:

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

### Etapa 8. Instalar o SDK da câmera Orbbec

O projeto inclui um auxiliar que instala `pyorbbecsdk2` no ambiente Python ativo:

```bash
bash scripts/install_pyorbbecsdk.sh
```

Se você precisar compilar o SDK localmente, primeiro clone a árvore de código-fonte e execute o modo de código-fonte:

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git sdk/pyorbbecsdk
bash scripts/install_pyorbbecsdk.sh --from-source
```

Instale as regras udev da Orbbec quando a árvore de código-fonte do SDK estiver disponível:

```bash
sudo bash sdk/pyorbbecsdk/scripts/env_setup/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### Etapa 9. Baixar pesos do YOLO e exportar TensorRT no Jetson de destino

Arquivos de engine TensorRT são específicos do dispositivo. Sempre exporte o `.engine` no Jetson que irá executar a demonstração.

```bash
mkdir -p models
wget https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-seg.pt -O models/yolo11n-seg.pt

yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 half=True device=0 workspace=4
```

A saída esperada é:

```text
models/yolo11n-seg.engine
```

Se a exportação FP16 falhar na sua plataforma, exporte sem `half=True`:

```bash
yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 device=0 workspace=4
```

## Verificar e calibrar

Execute estas verificações em ordem antes de tentar uma pega real.

**1. Verificar a câmera RGB-D**

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/verify_pyorbbec_stream.py
python scripts/verify_pyorbbec_stream.py --preview --seconds 10
```

A verificação somente texto deve relatar informações de quadros RGB e de profundidade. A verificação de pré-visualização deve mostrar janelas RGB e de profundidade quando um monitor de desktop estiver disponível.

**2. Verificar a conexão do robô**

Comece com o modo somente leitura:

```bash
python scripts/verify_rebot_arm_motion.py --read-only
```

Em seguida, execute um pequeno movimento de junta 6 após confirmar que o caminho do braço está livre:

```bash
python scripts/verify_rebot_arm_motion.py --deg 5
```

**3. Verificar a pilha GraspNet**

```bash
python scripts/verify_graspnet_stack.py
```

Se a câmera ainda não estiver conectada, mas você quiser apenas verificar Python, CUDA, GraspNet e arquivos YOLO:

```bash
python scripts/verify_graspnet_stack.py --skip-camera
```

**4. Realizar calibração olho-na-mão**

Este projeto usa calibração olho-na-mão: a câmera é montada no efetuador final e o marcador ArUco é fixado na mesa. A configuração padrão espera um `DICT_4X4_50`, ID `0`, marcador de 0,1 m. O repositório inclui arquivos de marcador imprimíveis como `aruco100x100.pdf`.

Coleta automática:

```bash
python scripts/collect_handeye_eih.py
```

Coleta manual com compensação de gravidade:

```bash
python scripts/collect_handeye_eih.py --manual
```

Os resultados da calibração são salvos no diretório da câmera ativa:

```text
config/calibration/orbbec_gemini2/hand_eye.npz
config/calibration/orbbec_gemini2/intrinsics.npz
```

Verifique a calibração salva:

```bash
python scripts/verify_handeye_calibration.py
```

Recalibre sempre que o suporte da câmera, a garra, o tamanho da placa ArUco ou a geometria da mesa mudarem.

## Iniciar o aplicativo 

A interface Web é a primeira interface de usuário recomendada. Ela fornece vídeo MJPEG ao vivo, seleção de alvo, pré-visualização de pega, execução de pega real, ajuste de compensação, movimento da base, controle da garra, pose de pronto e operações de redefinição.

Comece primeiro no modo de pré-visualização. Isso não executa movimento real do robô:

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8000 \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

Abra a interface Web a partir de um navegador:

```text
http://<jetson_ip>:8000
```

Use o modo de pré-visualização para confirmar o fluxo da câmera, detecções YOLO, filtragem de alvos e geração de pontos de pega. Clique no controle de inferência ou atualização na interface Web para atualizar a pré-visualização do GraspNet.

Abra a página `Open WebUI` (`http://<jetson_ip>:4000`). Se você tiver habilitado as Robot Arm Tools no chat, poderá controlar o braço robótico diretamente usando comandos em linguagem natural.

## Demonstração de recursos

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/V1_ksIhJgkQ" title="Voice Control reBot Arm B601 by Nvidia Jetson Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências

- https://docs.nvidia.com/jetson/agx-thor-devkit/user-guide/latest/index.html
- https://github.com/Seeed-Projects/reBot-DevArm
- https://github.com/graspnet/graspnet-baseline.git
- https://github.com/vectorBH6/reBotArm_control_py
- https://github.com/orbbec/pyorbbecsdk.git
- https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
