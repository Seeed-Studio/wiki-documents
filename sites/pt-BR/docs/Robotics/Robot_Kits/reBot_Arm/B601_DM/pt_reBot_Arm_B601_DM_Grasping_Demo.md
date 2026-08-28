---
description: Este tutorial mostra como construir uma demonstração completa de preensão visual para o reBot Arm B601 usando o pipeline de preensão YOLO/OBB.
title: Demo de Preensão Visual com reBot Arm B601
keywords:
  - reBot Arm
  - B601
  - Grasping
  - Gemini 2
  - YOLO
  - Hand-Eye Calibration
  - Robot
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-30
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_grasping_demo/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Demo de Preensão Visual com reBot Arm B601

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>Percepção de Profundidade · Detecção de Objetos · Calibração Mão-Olho · Preensão Autônoma · Totalmente Open Source</strong>
</p>

YOLO é uma família amplamente utilizada de modelos de detecção de objetos em tempo real que podem localizar e classificar alvos em uma única passagem direta. Este tutorial usa YOLO, uma câmera de profundidade RGB-D e o reBot Arm B601-DM para construir uma demo funcional de preensão visual em desktop, cobrindo configuração de ambiente, integração da câmera, calibração mão-olho e validação da preensão.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601-DM visual grasping demo" />
</p>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/6dqKZNh_D7k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
---

## Introdução ao Projeto

**reBot Arm B601 Visual Grasping Demo** é um projeto de demonstração de algoritmo de preensão visual baseado na biblioteca de controle do braço robótico [reBot Arm B601](https://github.com/Seeed-Projects/reBotArm_control_py) e em câmera de profundidade RGB-D. O sistema suporta as configurações DM e RS para o braço B601. Ele usa o modelo YOLO para detecção de objetos em tempo real na mesa, estima poses de preensão via retângulos de área mínima OBB, realiza calibração mão-olho para transformar pontos de preensão do referencial da câmera para o referencial da base do robô e aciona o braço robótico para completar a preensão autônoma.

### Recursos Principais

- 📷 **Percepção de Profundidade** — Suporta câmeras de profundidade RGB-D como Orbbec Gemini 2 e Intel RealSense D435i / D405
- 🔍 **Detecção de Objetos** — Reconhecimento baseado em YOLO com suporte a classes personalizadas de vocabulário aberto
- 📐 **Estimativa de Pose** — Eixo curto de retângulo de área mínima OBB para orientação do gripper, quantil de profundidade para estimativa da altura de preensão
- 🔄 **Transformação de Coordenadas** — Calibração mão-olho TSAI (Eye-in-Hand), transformando pontos de preensão no referencial da câmera para o referencial da base do robô
- 🦾 **Execução de Movimento** — Controlador de IK + trajetória reBotArm_control_py com máquina de estados integrada para controle de força do gripper

---

## Configuração de Hardware

| Componente | Modelo / Requisitos |
|------|------------|
| Braço Robótico | reBot Arm B601 (configurações DM / RS) |
| Câmera de Profundidade | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Interface de Comunicação | Ponte serial USB2CAN (braço); USB 3.0 (câmera) |
| Host | Ubuntu 22.04+, Python 3.10, x86_64 |

**Instruções de Fiação**

1. Conecte a câmera de profundidade ao host via USB 3.0.
2. Conecte o adaptador USB2CAN ao barramento CAN do braço.
3. Certifique-se de que a fonte de alimentação de 24 V, a câmera e o braço robótico estejam todos conectados com segurança.
4. Defina as permissões:

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
sudo chmod 666 /dev/ttyUSB0        # USB2CAN (adjust port number as needed)
```

---

## Instalação do Ambiente

### Etapa 1. Clonar o Repositório

Prefira o repositório oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Etapa 2. Criar e Configurar o Ambiente conda

```bash
conda env create -f environment.yml
conda activate rebotarm
```
:::tip
Se você quiser usar um nome de ambiente diferente, substitua `rebotarm` no comando pelo seu nome personalizado.

:::


### Etapa 3. Instalar a Biblioteca de Controle do Braço Robótico

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Se `pip install -e .` relatar `Multiple top-level packages discovered in a flat-layout`, adicione configuração explícita de descoberta de pacotes ao `pyproject.toml` de `reBotArm_control_py` e, em seguida, execute novamente `pip install -e .`:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

O programa de preensão visual lê a configuração do SDK e seleciona automaticamente o modo de controle do braço e os parâmetros do gripper correspondentes.

### Etapa 4. Instalar o SDK da Câmera de Profundidade

Este projeto suporta câmeras de profundidade RGB-D como Orbbec Gemini 2 e RealSense D435i / D405. Instale o SDK correspondente à sua câmera real; se o driver da câmera já puder ser importado normalmente no ambiente atual, você pode pular esta etapa.

**Orbbec Gemini 2**

Orbbec Gemini 2 depende de **pyorbbecsdk** (versão Python do Orbbec SDK v2). Recomenda-se instalar diretamente o pacote Python pré-compilado:

**Opção 1: Instalar via pip (recomendado)**

```bash
pip install pyorbbecsdk2
```

**Opção 2: Obter no GitHub**

```bash
# Install build dependencies
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Para usuários da China continental, você pode usar:
```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Ao instalar a partir do código-fonte, primeiro compile a extensão nativa com CMake para garantir que `install/lib` contenha `pyorbbecsdk*.so` e as bibliotecas compartilhadas Orbbec e, em seguida, execute `pip install -e .`.

Observação: Se todos os métodos de instalação acima falharem, consulte a documentação oficial da Orbbec abaixo para instalação.

:::tip
Para o primeiro uso, é recomendável instalar as regras udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**Verificar Instalação**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```
:::

**OrbbecViewer (opcional, para verificação da câmera)**

Após baixar o pacote pré-compilado e executar `OrbbecViewer`, você pode verificar se a conexão da câmera e o fluxo de profundidade estão funcionando corretamente antes de executar a Demo.

- GitHub: https://github.com/orbbec/OrbbecSDK_v2/releases
- Gitee: https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases

**RealSense D435i / D405**

As câmeras RealSense dependem de `pyrealsense2`. Normalmente você pode instalá-lo diretamente via pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Se o sistema precisar do kit de ferramentas completo RealSense ou de regras udev, consulte a documentação oficial do SDK RealSense para instalar `librealsense2`.


**Resumo de Recursos do SDK**

| Recurso | Link |
|------|------|
| Página do Produto Gemini 2 | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| Recursos de Desenvolvimento | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| Documentação da API do SDK v2 | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| Documentação do pyorbbecsdk | https://orbbec.github.io/pyorbbecsdk/index.html |
| Wrapper ROS2 | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| Intel RealSense SDK | https://github.com/realsenseai/librealsense |

### Etapa 5. Configurar o GraspNet (opcional)

Para obter uma estimativa de pose de preensão mais precisa para os objetos, este projeto adapta [graspnet-baseline](https://github.com/graspnet/graspnet-baseline) para melhorar o desempenho de preensão do braço robótico.

As extensões `pointnet2` / `knn` do GraspNet exigem um compilador CUDA. Antes de começar, confirme que `nvcc` está disponível no ambiente atual e verifique se a versão CUDA relatada por `nvcc` corresponde à versão CUDA usada para compilar o PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Se `nvcc` estiver ausente ou se a versão CUDA relatada por `nvcc` não corresponder a `torch.version.cuda`, instale um compilador CUDA que corresponda à versão CUDA atual do seu PyTorch. Por exemplo, quando o PyTorch mostrar `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

Você também pode instalar uma compilação do PyTorch que corresponda à sua versão atual de `nvcc`. As duas versões devem corresponder, caso contrário, a compilação de `pointnet2` / `knn` falhará com `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Configure CUDA build paths before building the local operators.
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# Build CUDA operators
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# Install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

:::tip
Observação: se você seguir diretamente a documentação do repositório oficial graspnet-baseline e usar `python setup.py install`, podem ocorrer erros relacionados a CUDA / PyTorch. Recomenda-se usar `pip install . --no-build-isolation` para que a extensão seja compilada com a configuração de PyTorch e CUDA já instalada no ambiente conda atual.
:::

:::tip
Se a compilação falhar com `fatal error: cusparse.h: No such file or directory`, execute `find $CONDA_PREFIX -name cusparse.h` e adicione o diretório que contém `cusparse.h` a `CPATH` / `CPLUS_INCLUDE_PATH`. Se os headers de CUDA vierem do pacote conda `cuda-toolkit`, o caminho geralmente é `$CONDA_PREFIX/targets/x86_64-linux/include`, e não o caminho do pip `nvidia/cu13/include` mostrado acima.
:::

:::tip
Além disso, dependências antigas da API do GraspNet ainda podem usar o nome de pacote obsoleto `sklearn`. O comando `sed` acima o substitui por `scikit-learn` para evitar problemas de nome de pacote durante a instalação. A menos que você também atualize o conjunto de dependências da API do GraspNet, mantenha a restrição `numpy==1.23.4`, pois `transforms3d==0.3.1` ainda usa aliases do NumPy como `np.float`.
:::

**Configurar modelo pré-treinado**

Baixe os pesos oficiais pré-treinados do GraspNet a partir do repositório oficial graspnet-baseline [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A), e coloque o arquivo `checkpoint-rs.tar` baixado em:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Em seguida, verifique em `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

O campo `checkpoint` suporta três formas: apenas um nome de arquivo é resolvido em `sdk/graspnet-baseline/checkpoints/`; um caminho relativo é resolvido a partir da raiz do projeto; um caminho absoluto é usado diretamente.

---

## Estrutura de diretórios

```
rebot_grasp/
├── config/
│   ├── default.yaml              # Main configuration file
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz    # Camera intrinsics
│           └── hand_eye.npz      # Hand-eye calibration results
├── drivers/
│   ├── camera/
│   │   ├── base.py               # Camera abstract base class
│   │   ├── orbbec_gemini2.py     # Gemini 2 driver
│   │   └── realsense.py          # RealSense driver (alternative)
│   └── robot/
│       └── grasp_driver.py       # Lightweight grasping helper based on arm SDK
├── calibration/
│   ├── aruco_pose.py             # ArUco pose estimation
│   └── hand_eye.py               # Hand-eye calibration solver
├── utils/
│   ├── ordinary_grasp.py         # OBB grasp pose estimation and visualization
│   └── transforms.py             # Coordinate transformation utilities
├── scripts/
│   ├── main.py                   # Main grasping program
│   ├── set.py                    # Grasp and place program
│   ├── ordinary_grasp_pipeline.py
│   ├── object_detection.py
│   └── collect_handeye_eih.py
├── sdk/
│   ├── pyorbbecsdk/              # Orbbec SDK Python wrapper
│   └── reBotArm_control_py/      # reBot Arm SDK
└── environment.yml               # Recommended conda environment file
```


## Execução e depuração

### 0. Confirmar versão do braço e configuração do SDK

Antes de executar scripts que se conectam ao braço robótico, confirme que a versão do braço, a fonte de alimentação e a configuração do SDK são consistentes:

- Conclua primeiro a preparação básica do braço: [B601-DM Início Rápido](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/) ou [B601-RS Início Rápido](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/).
- Em `sdk/reBotArm_control_py/config/rebotarm.yaml`, selecione a configuração de hardware correspondente:

```yaml
hardware_yaml: rebotarm_dm.yaml
```

Ou:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

- O B601-DM usa fonte DC de 24V, o B601-RS usa fonte DC de 48V. Confirme se o adaptador de energia e a fiação correspondem à versão do braço.
- Ao usar o B601-DM, confirme se o caminho do dispositivo de ponte serial na configuração do SDK corresponde ao dispositivo real.
- Ao usar o B601-RS, inicie a interface CAN antes de executar scripts de calibração ou de preensão:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

### 1. Calibração mão-olho (obrigatória antes da preensão)

```bash
python scripts/collect_handeye_eih.py
```

No modo automático, o braço percorre automaticamente 50 poses predefinidas e faz amostragens automaticamente quando o ArUco é detectado de forma estável. Ao terminar normalmente ou ser interrompido no meio, o script tenta calcular e salvar o resultado da calibração; são necessárias pelo menos 5 amostras, sendo recomendadas 15 ou mais para resultados mais estáveis.

Se você quiser mover o braço manualmente para coleta, use:

```bash
python scripts/collect_handeye_eih.py --manual
```

No modo manual, o braço entra em modo de compensação de gravidade. Empurre o efetuador final para um ângulo de visão adequado e pressione `Enter` para capturar; pressione `c` ou `q` para finalizar e calcular.

:::tip
Se, após a calibração, você achar que a precisão de preensão do braço robótico não atende às suas necessidades, pode definir os parâmetros `X` (frente-trás), `Y` (esquerda-direita), `Z` (cima-baixo) em `config/default.yaml` sob `calibration.hand_eye_compensation_m` para fornecer compensação de posição.
:::

### 2. `scripts/main.py` — Programa principal de preensão

Pipeline completo de preensão visual:

1. Inicializar câmera RGB-D, confirmar que o fluxo de imagem está disponível
2. Habilitar braço e garra, mover para a posição de prontidão
3. Pré-visualização em tempo real da câmera + detecção de objetos YOLO e segmentação por instância
4. O eixo curto do OBB estima a orientação da garra, o quantil de profundidade estima a altura de preensão
5. Pressione `G` para congelar o quadro, calcular a pose alvo do braço via transformação mão-olho
6. O braço se move para o ponto de pré-preensão → desce → a garra fecha → ergue → retorna à posição de prontidão

### 3. `scripts/set.py` — Programa de pegar e colocar

Função: pegar a banana e colocá-la na caixa

Fluxo concluído:
1. Inicialização da câmera e do braço, mover para a posição de prontidão
2. Pré-visualização em tempo real da câmera + detecção de objetos YOLO e segmentação por instância
3. Pressione `G` para congelar o quadro, calcular a pose alvo do braço via transformação mão-olho
4. O braço se move para pegar a banana e erguer
5. O braço coloca a banana na caixa e retorna à pose inicial
6. Pressione `Q` para sair do sistema, o braço retorna à posição zero


### 4. `scripts/ordinary_grasp_pipeline.py` — Teste simplificado de preensão

Não depende do braço robótico; apenas verifica a estimativa de pose de preensão via OBB e os efeitos de visualização, adequado para depurar o módulo de percepção.

### 5. `scripts/graspnet_camera_demo.py` — Demo de estimativa com câmera GraspNet

Não se conecta ao braço robótico; apenas executa a estimativa de pose de preensão 6D do GraspNet usando a câmera RGB-D. O script mantém uma pré-visualização ao vivo da câmera, usa caixas de detecção YOLO para selecionar a área alvo e, em seguida, filtra candidatos de preensão viáveis a partir dos candidatos de cena completa do GraspNet dentro da bbox alvo. Pressione `G` ou `Space` para executar inferência no quadro atual, pressione `R` para retomar a pré-visualização ao vivo, pressione `Q` ou `Esc` para sair; após a inferência, você pode visualizar a nuvem de pontos e os candidatos de preensão via Open3D.

```bash
python scripts/graspnet_camera_demo.py
```

### 6. `scripts/grasp.py` — Programa de preensão com braço robótico GraspNet

Conecta os resultados de estimativa do GraspNet ao fluxo de execução do braço robótico com base em `graspnet_camera_demo.py`: o YOLO seleciona o alvo, o GraspNet gera a pose de preensão 6D, a calibração mão-olho a transforma para o referencial da base do robô, depois verifica a alcançabilidade de IK e executa os movimentos de pré-preensão, preensão e recuo. Para depuração, recomenda-se primeiro usar `--dry-run` para apenas imprimir a pose alvo e os resultados de filtragem de candidatos.

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

### 7. `scripts/object_detection.py` — Demo básico de detecção

Demonstração de detecção pura com YOLO, com exibição em tempo real de caixas de detecção e escores de confiança, sem lógica de preensão.

---

## Descrição dos parâmetros de default.yaml

#### 1. Configuração da câmera e calibração (`camera` & `calibration`)

| Parâmetro | Tipo / Opções | Significado e descrição |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i`<br/>`realsense_d405`<br/>`orbbec_gemini2` | **Tipo de câmera**: especifica o hardware de câmera conectado ao sistema atual. |
| `camera.serial` | `string` / `null` | **Número de série do dispositivo**: especifica o número de série (SN) do dispositivo. Defina como `null` para usar o primeiro dispositivo disponível detectado pelo sistema. |
| `calibration.aruco.marker_length_m` | `float` | **Tamanho do marcador ArUco**: o comprimento físico real do lado do marcador ArUco de calibração usado para calibração mão-olho, em **metros (m)**. |
| `calibration.hand_eye_compensation_m` | `array` | **Compensação de translação da calibração mão-olho**: compensação manual de translação XYZ (formato `[X, Y, Z]`) executada no **referencial da base do robô** após a conclusão da calibração mão-olho, em **metros (m)**. Se todos os três valores forem `0.0`, a matriz de compensação é a matriz identidade. |

---

#### 2. Configuração de detecção de objetos (`detection`)

| Parâmetro | Tipo | Significado e descrição |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | **Limite de confiança da detecção YOLO**: caixas de detecção com escores abaixo desse valor serão filtradas. |
| `detection.iou_threshold` | `float` | **Limite de IoU do NMS do YOLO**: o limite de Intersection over Union (IoU) usado na Supressão Não Máxima (NMS) para filtrar caixas sobrepostas. |

---

#### 3. Configuração do robô e da garra (`robot`)

| Parâmetro | Tipo / Opções | Significado e descrição |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | **Diretório raiz do repositório**: caminho para o repositório `reBotArm_control_py`. Quando `null`, o padrão é o caminho relativo interno `sdk/reBotArm_control_py`. |
| `robot.ready_pose` | `array` | **Pose de prontidão**: a posição de prontidão para a qual o braço do sistema se move na inicialização. Após cada tarefa de preensão ser concluída, o braço também retorna automaticamente a essa posição. |
| `robot.gripper.dm`<br/>`robot.gripper.rs` | objeto struct | **Parâmetros de hardware da garra**: o sistema seleciona e aplica automaticamente um desses dois conjuntos de parâmetros com base na configuração de hardware real atual no SDK. |

#### Descrição dos Parâmetros Internos do Núcleo do Gripper

Para subparâmetros dentro de `robot.gripper.dm` ou `robot.gripper.rs`:

* **`angle_open`**, **`close_torque`**, **`default_force`**: Correspondem, respectivamente, ao ângulo de abertura, torque de fechamento e força de controle padrão; todos devem ser填写**números positivos**.
* **`counterclockwise`**: Valor booleano. Indica a direção de rotação do motor usada ao fechar (se é no sentido anti-horário). O código deriva automaticamente os sinais do ângulo de abertura e do torque de fechamento com base nessa lógica.
* **`tau_max`**: Limite superior de torque.

:::tip
Observação: Para outros parâmetros avançados de comportamento de controle do gripper, consulte e defina-os no arquivo `drivers/robot/grasp_driver.py`.
:::

---

#### 4. Pipeline de Grasp e Configuração do GraspNet (`grasp_pipeline` & `graspnet`)

| Parâmetro | Tipo | Significado e Descrição |
| :--- | :--- | :--- |
| `grasp_pipeline.infer_every_live` | `int` | **Intervalo de Quadros para Inferência**: Durante a visualização em tempo real do vídeo, executa a detecção de objetos a cada N quadros para reduzir efetivamente a carga de computação em tempo real da CPU/GPU. |
| `grasp_pipeline.grasp.depth_quantile` | `float` | **Quantil de Profundidade**: O quantil de cálculo de profundidade usado pelo pipeline de grasp de eixo curto. Um valor maior normalmente resulta em um ponto de grasp mais profundo. |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | **Offset de Posição de Pré-grasp**: A distância de recuo ao longo da direção de avanço do efetuador final em relação à posição alvo final de grasp, em **metros (m)**. |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | **Profundidade de Inserção**: O avanço adicional ou profundidade de inserção ao longo da direção de avanço quando o GraspNet executa o grasp, em **metros (m)**. |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | **Limite Mínimo de Altura de Grasp**: A altura mínima permitida do eixo Z de grasp no **referencial da base do robô**, em **metros (m)** (usado como uma底层防碰撞fronteira de segurança). |
| `graspnet` | struct config | **Parâmetros de Runtime do GraspNet**: Todos os subparâmetros sob este item de configuração são carregados ao executar `scripts/graspnet_camera_demo.py` e `scripts/grasp.py`. |

### Biblioteca de Seleção de Modelos

O modelo YOLO é carregado a partir do diretório `rebot_grasp/models/`; se o arquivo de modelo não existir, o Ultralytics geralmente tenta baixá-lo automaticamente.

Modelos comuns:

| Modelo | Descrição |
| --- | --- |
| `yoloe-26l-seg.pt` | Vocabulário aberto + segmentação, padrão atual |
| `yoloe-26s-seg.pt` | Mais leve, mais rápido |
| `yolov8n-seg.pt` | Segmentação de categorias fechadas, modelo pequeno |
| `yolov8s-seg.pt` | Segmentação de categorias fechadas, maior precisão |

Quando o nome do modelo contém `world` / `yoloe` e `yolo.use_world=true`, o programa chama `model.set_classes(custom_classes)` para injetar `yolo.custom_classes` como classes de vocabulário aberto. Modelos `yolov8*-seg.pt` comuns ignoram esse conjunto de classes de vocabulário aberto.

---

## ❓ FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

Isso geralmente significa que as dependências do SDK do braço robótico não estão instaladas no ambiente Python atual. Confirme que o ambiente do projeto está ativado e ressincronize o ambiente e instale o SDK do braço robótico:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. Pressionar `G` não executa o grasp

Causas comuns:

- `hand_eye.npz` não existe
- O modo de calibração mão-olho não é `eye_in_hand`
- A pose alvo atual não é alcançável pelo IK

Recomenda-se primeiro usar o modo dry-run para verificar os resultados de percepção e a pose alvo:

```bash
python scripts/main.py --dry-run
```

### 3. A profundidade do ponto de grasp é instável

Pode-se priorizar a verificação e ajuste de:

- `grasp_pipeline.grasp.depth_quantile`
- A altura de instalação da câmera em relação à área de trabalho alvo
- A refletividade da superfície do alvo

### 4. O GraspNet relata que `pointnet2_utils` não pode ser importado de `pointnet2`

Isso geralmente ocorre porque a extensão CUDA local em `sdk/graspnet-baseline/pointnet2` não foi devidamente compilada e instalada no ambiente conda atual, ou o Python está resolvendo para um pacote `pointnet2` incorreto. Recomenda-se confirmar que o ambiente do projeto está ativado e recompilar e instalar tanto `pointnet2` quanto `knn` no mesmo ambiente:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Verificar:

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. Incompatibilidade de arquitetura CUDA ao executar o GraspNet na placa gráfica atual

Se você vir `no kernel image is available for execution on the device` ou o PyTorch relatar que a capacidade CUDA da GPU atual não é suportada, isso geralmente significa que o wheel atual do PyTorch não inclui kernels CUDA para a arquitetura dessa placa gráfica. Recomenda-se instalar uma versão do PyTorch que suporte a arquitetura CUDA/placa gráfica atual e, em seguida, recompilar as extensões CUDA locais do GraspNet.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Se você precisar especificar manualmente a arquitetura de compilação, defina `TORCH_CUDA_ARCH_LIST` antes de recompilar, com o valor específico confirmado de acordo com a arquitetura da sua placa gráfica atual e a versão do PyTorch/CUDA.

### 6. A inferência do GraspNet relata `RuntimeError: CPU not supported`

Os operadores de amostragem em `pointnet2` suportam apenas tensores CUDA. Confirme que o CUDA está disponível, que a rede GraspNet e a nuvem de pontos de entrada estão na GPU, e que `pointnet2` / `knn` foram compilados para o ambiente atual e a versão do PyTorch.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Se a saída for `False`, você precisa corrigir primeiro a instalação do CUDA / PyTorch; se a saída for `True` mas o erro persistir, recomenda-se recompilar `pointnet2` e `knn`.

---

## 📄 Referências

- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) — Biblioteca de controle do braço robótico
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm) — Projeto de código aberto do braço robótico reBot
- [Página do Produto Orbbec Gemini 2](https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLOv11](https://github.com/ultralytics/ultralytics)

---

## ☎ Contato

- **Suporte Técnico**: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)

---

<p align="center">
  <strong>🌟 Se este projeto for útil para você, por favor dê uma Star!</strong>
</p>
