---
description: Este artigo demonstra como implementar a plataforma de IA GR00T da NVIDIA para controle avançado de braço robótico usando o hardware StarAI, cobrindo o fluxo de trabalho completo desde a configuração do ambiente até o ajuste fino do modelo e a implantação.
title: Controlar Braço Robótico 6/7 DOF usando NVIDIA Isaac GR00T N1.5
keywords:
  - NVIDIA Jetson
  - Isaac GR00T
  - Braço Robótico
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gr00t/dataset.webp
slug: /control_robotic_arm_via_gr00t
last_update:
  date: 6/16/2025
  author: Youjiang
createdAt: '2025-06-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/control_robotic_arm_via_gr00t/
---

## Introdução

Este artigo demonstra como a plataforma de IA GR00T da NVIDIA possibilita o controle avançado e autônomo do braço robótico StarAI. Combinando percepção em tempo real e tomada de decisão adaptativa, o GR00T conecta IA e robótica para tarefas de precisão em aplicações industriais e de pesquisa.

## Pré-requisitos

- Braço Robótico StarAI
- Orbbec Gemini 2
- Host Linux com GPU NVIDIA acelerada
  - ubuntu 20.04
  - VRAM >32GB

:::info
 Embora esta demonstração use StarAI + Gemini2, o tutorial continua totalmente aplicável ao SOArm 100 + câmeras USB padrão.
:::

## Primeiros Passos

### Configurar Ambiente Lerobot

O braço robótico StarAI pode ser acionado usando o projeto lerobot. Consulte este [wiki](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/) para configurar o ambiente operacional do seu braço robótico StarAI. Quando tudo estiver pronto, você poderá controlar o Follow Arm usando o comando abaixo.

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

O efeito de execução do programa será semelhante ao vídeo abaixo.

<div class="video-container">
  <iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Configurar SDK da Câmera Orbbec

Etapa 1. Clonar o OrbbecSDK.

```bash
cd ~/
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
```

Etapa 2. Instalar dependências e compilar pyOrbbecsdk.

```bash
conda activate lerobot
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
pip3 install -r requirements.txt
mkdir build
cd build
cmake -Dpybind11_DIR=`pybind11-config --cmakedir` ..
make -j4
make install
cd ~/pyorbbecsdk
pip install -e .
```

Etapa 3. Testar se a câmera de profundidade está funcionando corretamente.

```bash
cd ~/pyorbbecsdk 
pip install -e .
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
python3 examples/depth.py
```

Se tudo correr bem, as informações de profundidade capturadas pela câmera de profundidade serão exibidas na área de trabalho.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gr00t/ob_camera.png" />
</div>

### Registrar o Conjunto de Dados

Podemos executar o seguinte script para coletar um novo conjunto de dados:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a green block and put it in the bin." \
  --control.repo_id=${HF_USER}/starai_test \
  --control.tags='["starai","lerobot","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=100 \
  --control.display_data=true \
  --control.push_to_hub=true
```

:::note
Para treinar o Isaac-GR00T, é recomendado coletar pelo menos 50 amostras de dados.
:::

Aqui está o conjunto de dados que coletamos.

[https://huggingface.co/datasets/youjiang97/starai02](https://huggingface.co/datasets/youjiang97/starai02)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gr00t/dataset.png" />
</div>

Como usaremos o projeto Isaac-GR00T para o treinamento do modelo, precisamos adicionar um parâmetro de configuração de conversão de conjunto de dados ao dataset de acordo com os requisitos do projeto. Especificamente, isso envolve criar um arquivo chamado `modality.json` na pasta meta com o seguinte conteúdo:

```json
{
    "state": {
        "single_arm": {
            "start": 0,
            "end": 6
        },
        "gripper": {
            "start": 6,
            "end": 7
        }
    },
    "action": {
        "single_arm": {
            "start": 0,
            "end": 6
        },
        "gripper": {
            "start": 6,
            "end": 7
        }
    },
    "video": {
        "webcam": {
            "original_key": "observation.images.webcam"
        }
    },
    "annotation": {
        "human.task_description": {
            "original_key": "task_index"
        }
    }
}
```

:::info
Se você estiver usando o [SOARM100](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) para testes, defina os IDs dos servos de um único braço robótico para 0-5 e o ID do gripper para 5-6.

Ajuste os parâmetros de `video` com base na convenção de nomenclatura da câmera no conjunto de dados.
:::

A estrutura de arquivos do conjunto de dados organizado é a seguinte:

```text
    ├── data
    │   └── chunk-000
    │       ├── episode_000000.parquet
    │       ├── ....
    │       ├── episode_000099.parquet
    │       └── episode_000100.parquet
    ├── meta
    │   ├── episodes.jsonl
    │   ├── episodes_stats.jsonl
    │   ├── modality.json
    │   ├── info.json
    │   ├── so100__modality.json
    │   ├── stats.json
    │   └── tasks.jsonl
    └── videos
        └── chunk-000
            ├── observation.images.Orbbec
            │   ├── episode_000000.mp4
            │   ├── ....
            │   ├── episode_000099.mp4
            │   └── episode_000100.mp4
            └── observation.images.laptop
                ├── episode_000000.mp4
                ├── ....
                ├── episode_000099.mp4
                └── episode_000100.mp4
```

### Configurar Ambiente Isaac-GR00T

Primeiro, precisamos clonar o repositório de código do Isaac-GR00T:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
```

Em seguida, configure um ambiente de execução Python de acordo com os requisitos do projeto:

```bash
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4 
```

:::info
A instalação do `flash-attn` envolve compilação de pacotes, o que pode ser extremamente lento. Recomenda-se [baixar](https://github.com/Dao-AILab/flash-attention/releases/tag/v2.7.1.post4) a versão pré-compilada do pacote que corresponda ao ambiente do seu sistema e instalá-la localmente usando o comando: `pip install ./<package_name>`
:::

### Ajuste fino do Modelo

Agora podemos usar o conjunto de dados preparado para ajustar finamente o modelo VLM `GR00T N1.5 3B`. A NVIDIA forneceu um script Python dedicado para o ajuste fino — basta executar o seguinte comando no seu terminal:

```bash
python scripts/gr00t_finetune.py \
    --dataset-path ~/Isaac-GR00T/demo_data/starai_test    
    --num-gpus 1    
    --output-dir ~/Isaac-GR00T/output_starai     
    --max-steps 20000    
    --data-config so100    
    --video-backend torchvision_av
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gr00t/train.png" />
</div>

:::note
Você precisa modificar o caminho de armazenamento do conjunto de dados de acordo com a sua configuração real.

O processo de treinamento requer aproximadamente `33GB` de memória de GPU. Se o hardware local tiver VRAM insuficiente, considere usar recursos de computação em nuvem para concluir o treinamento.
:::

### Implantação

A arquitetura de implantação do Isaac-GR00T adota um design desacoplado entre o endpoint de inferência e o endpoint de controle:

- Endpoint de Inferência (Servidor): Dedicado exclusivamente à execução de tarefas de inferência do modelo.
- Endpoint de Controle (Cliente): Responsável por adquirir os estados do braço robótico e orquestrar o controle de movimento.

#### Servidor

```bash
python scripts/inference_service.py --server \
    --model_path <PATH_TO_YOUR_CHECKPOINT> \
    --embodiment-tag new_embodiment \
    --data-config so100 \
    --denoising-steps 4
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gr00t/server.png" />
</div>

#### Cliente

```bash
python getting_started/examples/eval_gr00t_so100.py  --use_policy
```

Se tudo correr bem, o Isaac-GR00T agora deverá estar controlando o seu braço robótico.

:::info

Como estamos usando um braço robótico StarAI, são necessárias pequenas modificações no código do lado do cliente para garantir a compatibilidade com o novo braço e a câmera. O código atualizado é o seguinte:

<details>

<summary> eval_gr00t_so100.py </summary>

```python
# SPDX-FileCopyrightText: Copyright (c) 2025 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
# SPDX-License-Identifier: Apache-2.0
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# SO100 Real Robot
import time
from contextlib import contextmanager

import cv2
import matplotlib.pyplot as plt
import numpy as np
import torch
from lerobot.common.datasets.lerobot_dataset import LeRobotDataset
from lerobot.common.robot_devices.cameras.configs import OpenCVCameraConfig, OrbbecCameraConfig
from lerobot.common.robot_devices.motors.dynamixel import TorqueMode
from lerobot.common.robot_devices.robots.configs import So100RobotConfig, StaraiRobotConfig
from lerobot.common.robot_devices.robots.utils import make_robot_from_config
from lerobot.common.robot_devices.utils import RobotDeviceAlreadyConnectedError

# NOTE:
# Sometimes we would like to abstract different env, or run this on a separate machine
# User can just move this single python class method gr00t/eval/service.py
# to their code or do the following line below
import sys
import os
sys.path.append(os.path.expanduser("~/Isaac-GR00T/gr00t/eval/"))
from service import ExternalRobotInferenceClient

# Import tqdm for progress bar
from tqdm import tqdm

#################################################################################


class SO100Robot:
    def __init__(self, calibrate=False, enable_camera=False, cam_idx=9):
        # self.config = So100RobotConfig()
        self.config = StaraiRobotConfig()
        self.calibrate = calibrate
        self.enable_camera = enable_camera
        self.cam_idx = cam_idx
        if not enable_camera:
            self.config.cameras = {}
        else:
            # self.config.cameras = {"webcam": OpenCVCameraConfig(cam_idx, 30, 640, 480, "bgr")}
            self.config.cameras = {"webcam": OrbbecCameraConfig(fps=30,use_depth=True,width = 640,Hi_resolution_mode = False)}
        self.config.leader_arms = {}

        # remove the .cache/calibration/so100 folder
        if self.calibrate:
            import os
            import shutil

            calibration_folder = os.path.join(os.getcwd(), ".cache", "calibration", "so100")
            print("========> Deleting calibration_folder:", calibration_folder)
            if os.path.exists(calibration_folder):
                shutil.rmtree(calibration_folder)

        # Create the robot
        self.robot = make_robot_from_config(self.config)
        print("<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>")
        print(self.robot.robot_type)
        print("<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>")
        self.motor_bus = self.robot.follower_arms["main"]

    @contextmanager
    def activate(self):
        try:
            self.connect()
            # self.move_to_initial_pose()
            yield
        finally:
            self.disconnect()

    def connect(self):
        if self.robot.is_connected:
            raise RobotDeviceAlreadyConnectedError(
                "ManipulatorRobot is already connected. Do not run `robot.connect()` twice."
            )

        # Connect the arms
        self.motor_bus.connect()

        # We assume that at connection time, arms are in a rest position, and torque can
        # be safely disabled to run calibration and/or set robot preset configurations.
        self.motor_bus.write("Torque_Enable", TorqueMode.DISABLED.value)

        # Calibrate the robot
        # self.robot.activate_calibration()

        # self.set_so100_robot_preset()

        # Enable torque on all motors of the follower arms
        self.motor_bus.write("Torque_Enable", TorqueMode.ENABLED.value)
        print("robot present position:", self.motor_bus.read("Present_Position"))
        self.robot.is_connected = True

        self.camera = self.robot.cameras["webcam"] if self.enable_camera else None
        if self.camera is not None:
            self.camera.connect()
        print("================> SO100 Robot is fully connected =================")

    def set_so100_robot_preset(self):
        # Mode=0 for Position Control
        self.motor_bus.write("Mode", 0)
        # Set P_Coefficient to lower value to avoid shakiness (Default is 32)
        # self.motor_bus.write("P_Coefficient", 16)
        self.motor_bus.write("P_Coefficient", 10)
        # Set I_Coefficient and D_Coefficient to default value 0 and 32
        self.motor_bus.write("I_Coefficient", 0)
        self.motor_bus.write("D_Coefficient", 32)
        # Close the write lock so that Maximum_Acceleration gets written to EPROM address,
        # which is mandatory for Maximum_Acceleration to take effect after rebooting.
        self.motor_bus.write("Lock", 0)
        # Set Maximum_Acceleration to 254 to speedup acceleration and deceleration of
        # the motors. Note: this configuration is not in the official STS3215 Memory Table
        self.motor_bus.write("Maximum_Acceleration", 254)
        self.motor_bus.write("Acceleration", 254)

    def move_to_initial_pose(self):
        current_state = self.robot.capture_observation()["observation.state"]
        # print("current_state", current_state)
        # print all keys of the observation
        # print("observation keys:", self.robot.capture_observation().keys())
        # current_state = torch.tensor([90, 90, 90, 90, -70, 30])
        current_state = torch.tensor([90, 90, 90, 90, -70, 30, 40])
        self.robot.send_action(current_state)
        time.sleep(2)
        print("-------------------------------- moving to initial pose")

    def go_home(self):
        # [ 88.0664, 156.7090, 135.6152,  83.7598, -89.1211,  16.5107]
        print("-------------------------------- moving to home pose")
        home_state = torch.tensor([88.0664, 156.7090, 135.6152, 83.7598, -89.1211, 16.5107])
        self.set_target_state(home_state)
        time.sleep(2)

    def get_observation(self):
        return self.robot.capture_observation()

    def get_current_state(self):
        state = self.get_observation()["observation.state"].data.numpy()
        state[6] = -state[6]
        return state

    def get_current_img(self):
        img = self.get_observation()["observation.images.webcam"].data.numpy()
        # convert bgr to rgb
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        return img

    def set_target_state(self, target_state: torch.Tensor):
        temp = self.robot.send_action(target_state)
        print(f">>>>>>>>>>>>>>>>>>>>>>>>{temp}<<<<<<<<<<<<<<<<<<<<")
    def enable(self):
        self.motor_bus.write("Torque_Enable", TorqueMode.ENABLED.value)

    def disable(self):
        self.motor_bus.write("Torque_Enable", TorqueMode.DISABLED.value)

    def disconnect(self):
        self.disable()
        self.robot.disconnect()
        self.robot.is_connected = False
        print("================> SO100 Robot disconnected")

    def __del__(self):
        self.disconnect()


#################################################################################


class Gr00tRobotInferenceClient:
    def __init__(
        self,
        host="localhost",
        port=5555,
        language_instruction="Pick up the fruits and place them on the plate.",
    ):
        self.language_instruction = language_instruction
        # 480, 640
        self.img_size = (480, 640)
        self.policy = ExternalRobotInferenceClient(host=host, port=port)

    def get_action(self, img, state):
        obs_dict = {
            "video.webcam": img[np.newaxis, :, :, :],
            "state.single_arm": state[:6][np.newaxis, :].astype(np.float64),
            "state.gripper": state[6:7][np.newaxis, :].astype(np.float64),
            "annotation.human.task_description": [self.language_instruction],
        }
        res = self.policy.get_action(obs_dict)
        # print("Inference query time taken", time.time() - start_time)
        return res

    def sample_action(self):
        obs_dict = {
            "video.webcam": np.zeros((1, self.img_size[0], self.img_size[1], 3), dtype=np.uint8),
            "state.single_arm": np.zeros((1, 5)),
            "state.gripper": np.zeros((1, 1)),
            "annotation.human.action.task_description": [self.language_instruction],
        }
        return self.policy.get_action(obs_dict)

    def set_lang_instruction(self, lang_instruction):
        self.language_instruction = lang_instruction


#################################################################################


def view_img(img, img2=None):
    """
    This is a matplotlib viewer since cv2.imshow can be flaky in lerobot env
    also able to overlay the image to ensure camera view is alligned to training settings
    """
    plt.imshow(img)
    if img2 is not None:
        plt.imshow(img2, alpha=0.5)
    plt.axis("off")
    plt.pause(0.001)  # Non-blocking show
    plt.clf()  # Clear the figure for the next frame


#################################################################################

if __name__ == "__main__":
    import argparse

    default_dataset_path = os.path.expanduser("/home/seeed/Isaac-GR00T/demo_data/starai01")

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--use_policy", action="store_true"
    )  # default is to playback the provided dataset
    parser.add_argument("--dataset_path", type=str, default=default_dataset_path)
    # parser.add_argument("--host", type=str, default="192.168.1.78")
    parser.add_argument("--host", type=str, default="127.0.0.1")
    parser.add_argument("--port", type=int, default=5555)
    parser.add_argument("--action_horizon", type=int, default=16)
    parser.add_argument("--actions_to_execute", type=int, default=350)
    parser.add_argument("--cam_idx", type=int, default=8)  # 8和6
    parser.add_argument(
        "--lang_instruction", type=str, default="Pick up the fruits and place them on the plate."
    )
    parser.add_argument("--record_imgs", action="store_true")
    args = parser.parse_args()

    # print lang_instruction
    print("lang_instruction: ", args.lang_instruction)

    ACTIONS_TO_EXECUTE = args.actions_to_execute
    USE_POLICY = args.use_policy
    ACTION_HORIZON = (
        args.action_horizon
    )  # we will execute only some actions from the action_chunk of 16
    MODALITY_KEYS = ["single_arm", "gripper"]
    if USE_POLICY:
        client = Gr00tRobotInferenceClient(
            host=args.host,
            port=args.port,
            language_instruction=args.lang_instruction,
        )

        if args.record_imgs:
            # create a folder to save the images and delete all the images in the folder
            os.makedirs("eval_images", exist_ok=True)
            for file in os.listdir("eval_images"):
                os.remove(os.path.join("eval_images", file))

        robot = SO100Robot(calibrate=False, enable_camera=True, cam_idx=args.cam_idx)
        image_count = 0

        with robot.activate():
            for i in tqdm(range(ACTIONS_TO_EXECUTE), desc="Executing actions"):
                img = robot.get_current_img()
                view_img(img)
                state = robot.get_current_state()

                # new_image = np.zeros((880, 640, 3), dtype=np.uint8)
                # new_image[:480, :, :] = img

                # print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<")
                # print(type(state))
                # print(state.shape)
                # print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<")
                # -70 ~ -10
                action = client.get_action(img, state)
                action["action.gripper"] = action["action.gripper"] * -1

                # set_gripper = np.ones_like(action["action.gripper"]) * -10
                # action["action.gripper"] = set_gripper
                # # action = client.get_action(img, state)
                # print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<")
                # print(type(action))
                # print(action)
                # print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<")

                start_time = time.time()
                for i in range(ACTION_HORIZON):
                    concat_action = np.concatenate(
                        [np.atleast_1d(action[f"action.{key}"][i]) for key in MODALITY_KEYS],
                        axis=0,
                    )
                    # assert concat_action.shape == (6,), concat_action.shape
                    assert concat_action.shape == (7,), concat_action.shape
                    robot.set_target_state(torch.from_numpy(concat_action))
                    time.sleep(0.02)

                    # get the realtime image
                    img = robot.get_current_img()
                    view_img(img)

                    if args.record_imgs:
                        # resize the image to 320x240
                        img = cv2.resize(cv2.cvtColor(img, cv2.COLOR_RGB2BGR), (320, 240))
                        cv2.imwrite(f"eval_images/img_{image_count}.jpg", img)
                        image_count += 1

                    # 0.05*16 = 0.8 seconds
                    print("executing action", i, "time taken", time.time() - start_time)
                print("Action chunk execution time taken", time.time() - start_time)
    else:
        # Test Dataset Source https://huggingface.co/datasets/youliangtan/so100_strawberry_grape
        dataset = LeRobotDataset(
            repo_id="",
            root=args.dataset_path,
        )

        robot = SO100Robot(calibrate=False, enable_camera=True, cam_idx=args.cam_idx)

        with robot.activate():
            print("Run replay of the dataset")
            actions = []
            for i in tqdm(range(ACTIONS_TO_EXECUTE), desc="Loading actions"):
                action = dataset[i]["action"]
                img = dataset[i]["observation.images.webcam"].data.numpy()
                # original shape (3, 480, 640) for image data
                realtime_img = robot.get_current_img()

                img = img.transpose(1, 2, 0)
                view_img(img, realtime_img)
                actions.append(action)
                robot.set_target_state(action)
                time.sleep(0.05)

            # plot the actions
            plt.plot(actions)
            plt.show()

            print("Done all actions")
            robot.go_home()
            print("Done home")
```

</details>
:::

## Demonstração do Efeito

Nossos testes de inferência foram realizados em um notebook equipado com uma GPU RTX 4080. Embora a precisão de inferência tenha se mostrado excelente, observamos uma trepidação perceptível no movimento do braço devido ao grande tamanho do modelo VLA. Ainda assim, o sistema executa com sucesso todas as tarefas previstas.

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/nOTwjHGjE_Q" title="AI-Powered Control of the Robotic Arm via GR00T" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências

- [https://wiki.seeedstudio.com/pt-br/lerobot_so100m/](https://wiki.seeedstudio.com/lerobot_so100m/)
- [https://github.com/NVIDIA/Isaac-GR00T/tree/main](https://github.com/NVIDIA/Isaac-GR00T/tree/main)
- [https://github.com/huggingface/lerobot](https://github.com/huggingface/lerobot)
- [https://github.com/Dao-AILab/flash-attention](https://github.com/Dao-AILab/flash-attention])
- [https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
