---
description: Este tutorial mostra como construir uma demonstração completa de preensão visual para o reBot Arm B601 usando uma câmera RGB-D, YOLO / OBB e pipelines de preensão opcionais GraspNet.
title: Demonstração de Preensão Visual com reBot Arm B601
keywords:
  - reBot Arm
  - B601-DM
  - B601-RS
  - Preensão
  - RGB-D
  - YOLO
  - GraspNet
  - Calibração mão-olho
  - Robô
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_grasping_demo/
---

# Demonstração de Preensão Visual com reBot Arm B601

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Construa um sistema de preensão visual de mesa com visão RGB-D, YOLO e reBot Arm</h2>
      <p>
        Este guia percorre uma demonstração completa de preensão visual: configuração do ambiente, integração da câmera,
        configuração do SDK do braço robótico, calibração mão-olho, estimativa de preensão com YOLO / OBB / GraspNet
        e execução real com o braço robótico.
      </p>
      <div className="hero-actions">
        <a href="#quick-path">Ver fluxo de trabalho</a>
        <a href="#run">Executar a demonstração</a>
      </div>
    </div>
    <div className="hero-card">
      <strong>Configuração recomendada</strong>
      <span>reBot Arm B601-DM / B601-RS</span>
      <span>Orbbec Gemini 2 ou RealSense D435i / D405</span>
      <span>Ubuntu 22.04 + Python 3.10</span>
    </div>
  </section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Alerta de segurança: limpe a área de trabalho do robô antes de executar</strong>
    <p>
      Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor,
      objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um raio de <strong>1 metro</strong>
      da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer fora
      da área de movimento do robô.
    </p>
    <ul>
      <li>Não toque nas juntas, motores, elos, garra ou efetuador final após o braço robótico ser energizado.</li>
      <li>Antes de calibração, teleoperação, controle de IK, controle de trajetória, compensação de gravidade, execução ROS2 / MoveIt ou preensão visual, certifique-se de que a base do braço esteja firmemente fixada.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores USB2CAN / PCAN-USB, conectores XT30 ou conectores de alimentação.</li>
    </ul>
  </div>
</div>


  <nav className="doc-nav" aria-label="visual grasping navigation">
    <a href="#quick-path">Fluxo de trabalho</a>
    <a href="#hardware">Hardware</a>
    <a href="#install">Instalação</a>
    <a href="#camera-sdk">SDK da câmera</a>
    <a href="#graspnet">GraspNet</a>
    <a href="#run">Executar e depurar</a>
    <a href="#config">Configuração</a>
    <a href="#faq">FAQ</a>
  </nav>
</div>

<div className="rebot-page">
  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601 visual grasping demo" />
  </div>
</div>

<p align="center">
  <strong>Percepção de profundidade · Detecção de objetos · Calibração mão-olho · Preensão autônoma · Totalmente open source</strong>
</p>

<div className="video-container">
  <iframe
    width="900"
    height="600"
    src="https://www.youtube.com/embed/6dqKZNh_D7k?autoplay=0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
</div>

<div className="rebot-page">

<section id="quick-path" className="section-card">

## Fluxo de trabalho recomendado

<div className="path-grid">
  <div className="path-card"><span>Passo 1</span><strong>Preparar hardware</strong><p>Confirme a versão do braço, fonte de alimentação, interface USB2CAN / CAN e conexão da câmera RGB-D.</p></div>
  <div className="path-card"><span>Passo 2</span><strong>Instalar ambiente</strong><p>Crie o ambiente conda e instale o SDK do braço, SDK da câmera, YOLO e GraspNet opcional.</p></div>
  <div className="path-card"><span>Passo 3</span><strong>Concluir calibração mão-olho</strong><p>Colete poses ArUco e resolva a transformação de calibração Eye-in-Hand.</p></div>
  <div className="path-card"><span>Passo 4</span><strong>Executar a demonstração de preensão</strong><p>Valide a percepção e as poses-alvo primeiro com dry-run e depois execute com o braço real.</p></div>
</div>

:::tip
Conclua o guia de início rápido para o seu braço antes de executar esta demonstração: [B601-DM Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/) ou [B601-RS Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/).
:::

</section>

<section className="section-card">

## Introdução ao projeto

**reBot Arm B601 Visual Grasping Demo** é um projeto de preensão visual open source construído em torno de uma câmera de profundidade RGB-D e da biblioteca de controle do braço robótico reBot. O sistema oferece suporte às configurações B601-DM e B601-RS. Ele usa YOLO para detecção de objetos em tempo real na mesa, estima a orientação de preensão com um retângulo de área mínima OBB, transforma pontos de preensão no referencial da câmera para o referencial da base do robô por meio de calibração mão-olho e, por fim, aciona o braço robótico para concluir a preensão autônoma.

### Capacidades principais

<div className="feature-grid">
  <div><strong>Percepção de profundidade RGB-D</strong><span>Suporta Orbbec Gemini 2, RealSense D435i / D405 e câmeras RGB-D similares.</span></div>
  <div><strong>Detecção de objetos com YOLO</strong><span>Suporta classes de vocabulário aberto e modelos padrão de segmentação YOLO.</span></div>
  <div><strong>Estimativa de preensão com OBB</strong><span>Usa o eixo curto do retângulo de área mínima para a orientação da garra e quantis de profundidade para a altura de preensão.</span></div>
  <div><strong>Preensão 6D com GraspNet</strong><span>Opcionalmente adiciona candidatos de preensão 6D mais ricos para objetos mais complexos.</span></div>
  <div><strong>Calibração Eye-in-Hand</strong><span>Usa calibração mão-olho TSAI para transformar pontos de preensão no referencial da câmera para o referencial da base do robô.</span></div>
  <div><strong>Execução com braço real</strong><span>Usa reBotArm_control_py para IK, controle de trajetória e controle de força da garra.</span></div>
</div>

</section>

<section id="hardware" className="section-card">


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes da execução</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

## Configuração de hardware

| Componente | Modelo / Requisito |
|------|------------|
| Braço robótico | reBot Arm B601-DM ou reBot Arm B601-RS |
| Câmera de profundidade | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Interface de comunicação | B601-DM usa uma ponte serial USB2CAN; B601-RS usa PCAN-USB / SocketCAN |
| Host | Ubuntu 22.04+, Python 3.10, x86_64 |

### Fiação e permissões

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
sudo chmod 666 /dev/ttyUSB0        # B601-DM USB2CAN; adjust the port if needed
```

Para B601-RS, ative a interface CAN antes de executar scripts de calibração ou preensão:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0
```

:::danger
B601-DM usa uma fonte de alimentação CC de 24 V, enquanto B601-RS usa uma fonte de alimentação CC de 48 V. Certifique-se de que a fonte de alimentação, a versão do braço e a configuração do SDK correspondam. Não os misture.
:::

</section>

<section id="install" className="section-card">

## Instalação do ambiente

| Item | Requisito |
|------|------|
| SO | Ubuntu 22.04+ |
| Python | 3.10 |
| Ambiente recomendado | conda |
| Espaço de trabalho recomendado | `rebot_grasp` |
| Nome de ambiente recomendado | `rebotarm` |

### Passo 1. Clonar o repositório

Prefira o repositório oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

Você também pode usar o repositório de desenvolvimento atual:

```bash
git clone https://github.com/EclipseaHime017/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Passo 2. Criar e ativar o ambiente conda

```bash
conda env create -f environment.yml
conda activate rebotarm
```

### Passo 3. Instalar a biblioteca de controle do braço robótico

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Se `pip install -e .` relatar `Multiple top-level packages discovered in a flat-layout`, adicione a seguinte configuração de descoberta de pacotes a `pyproject.toml` em `reBotArm_control_py`:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

</section>

<section id="camera-sdk" className="section-card">

## Instalar o SDK da câmera de profundidade

<details open className="content-details">
<summary>Orbbec Gemini 2</summary>

Orbbec Gemini 2 depende de `pyorbbecsdk`. A abordagem recomendada é instalar o pacote Python pré-compilado:

```bash
pip install pyorbbecsdk2
```

Você também pode compilar a partir do código-fonte:

```bash
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev
cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Para usuários da China continental:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Para o primeiro uso, instale as regras udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</details>

<details className="content-details">
<summary>Intel RealSense D435i / D405</summary>

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Se você precisar do kit de ferramentas completo RealSense ou de regras udev, consulte a documentação oficial do Intel RealSense SDK e instale `librealsense2`.

</details>

</section>

<section id="graspnet" className="section-card">

## Configurar GraspNet (opcional)

Ignore esta seção se você só quiser executar primeiro o pipeline de preensão YOLO + OBB. Configure o GraspNet quando precisar de candidatos de pose de preensão 6D mais ricos.

Antes de compilar os operadores locais, certifique-se de que `nvcc` está disponível e corresponde à versão do CUDA usada pelo PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Se `nvcc` estiver ausente ou não corresponder a `torch.version.cuda`, instale um compilador CUDA que corresponda à versão atual do CUDA do seu PyTorch. Por exemplo, quando o PyTorch indicar `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

Compile os operadores locais do GraspNet:

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline
pip install open3d tensorboard Pillow tqdm

export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

### Configurar o modelo pré-treinado

Baixe o peso oficial pré-treinado do GraspNet `checkpoint-rs.tar` e coloque-o em:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Em seguida, verifique `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

</section>

<section className="section-card">

## Estrutura de diretórios

```text
rebot_grasp/
├── config/
│   ├── default.yaml
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz
│           └── hand_eye.npz
├── drivers/
│   ├── camera/
│   └── robot/
├── calibration/
│   ├── aruco_pose.py
│   └── hand_eye.py
├── utils/
├── scripts/
│   ├── main.py
│   ├── set.py
│   ├── ordinary_grasp_pipeline.py
│   ├── graspnet_camera_demo.py
│   ├── grasp.py
│   └── collect_handeye_eih.py
├── sdk/
└── environment.yml
```

</section>

<section id="run" className="section-card">


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes da execução</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

## Executar e depurar

### 0. Confirmar versão do braço e configuração do SDK

Em `sdk/reBotArm_control_py/config/rebotarm.yaml`, selecione a configuração de hardware correspondente:

```yaml
hardware_yaml: rebotarm_dm.yaml
```

Ou:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

### 1. Calibração mão-olho (obrigatória antes da preensão)

```bash
python scripts/collect_handeye_eih.py
```

No modo automático, o braço percorre poses predefinidas e faz amostragens automaticamente quando a detecção ArUco está estável. São necessárias pelo menos 5 amostras, e 15 ou mais amostras são recomendadas para melhor estabilidade.

Para mover o braço manualmente para coleta de amostras:

```bash
python scripts/collect_handeye_eih.py --manual
```

:::tip
Se a precisão de preensão não for boa o suficiente após a calibração, ajuste `X`, `Y` e `Z` em `calibration.hand_eye_compensation_m` em `config/default.yaml`.
:::

### 2. Programa principal de preensão: `scripts/main.py`

Fluxo completo de preensão visual:

1. Inicialize a câmera RGB-D e confirme que o fluxo de imagem está disponível.
2. Habilite o braço e a garra e, em seguida, mova para a pose de prontidão.
3. Execute a visualização em tempo real da câmera com detecção de objetos YOLO e segmentação de instâncias.
4. Estime a orientação da garra usando o eixo curto do OBB e estime a altura de preensão usando um quantil de profundidade.
5. Pressione `G` para congelar o quadro e calcular a pose alvo do braço por meio da transformação mão-olho.
6. Mova para o ponto de pré-preensão, desça, feche a garra, eleve e retorne à pose de prontidão.

```bash
python scripts/main.py
```

Para depuração, comece com:

```bash
python scripts/main.py --dry-run
```

### 3. Programa de pegar e colocar: `scripts/set.py`

Este script demonstra pegar uma banana e colocá-la em uma caixa.

```bash
python scripts/set.py
```

### 4. Teste de preensão simplificado: `scripts/ordinary_grasp_pipeline.py`

Este script não se conecta ao braço. Ele apenas verifica a estimativa de pose de preensão OBB e a visualização.

```bash
python scripts/ordinary_grasp_pipeline.py
```

### 5. Estimativa de câmera GraspNet: `scripts/graspnet_camera_demo.py`

Este script não se conecta ao braço. Ele executa a estimativa de pose de preensão 6D do GraspNet apenas com a câmera RGB-D.

```bash
python scripts/graspnet_camera_demo.py
```

### 6. Preensão com braço robótico GraspNet: `scripts/grasp.py`

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

</section>

<section id="config" className="section-card">

## Referência de parâmetros de `default.yaml`

<details open className="content-details">
<summary>Câmera e calibração</summary>

| Parâmetro | Tipo / Opções | Significado |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i` / `realsense_d405` / `orbbec_gemini2` | Tipo de câmera conectada ao sistema. |
| `camera.serial` | `string` / `null` | Número de série do dispositivo; defina como `null` para usar o primeiro dispositivo disponível. |
| `calibration.aruco.marker_length_m` | `float` | Comprimento do lado do marcador ArUco em metros. |
| `calibration.hand_eye_compensation_m` | `array` | Compensação de translação XYZ no referencial da base do robô, em metros. |

</details>

<details className="content-details">
<summary>Detecção e pipeline de preensão</summary>

| Parâmetro | Tipo | Significado |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | Limite de confiança da detecção YOLO. |
| `detection.iou_threshold` | `float` | Limite de IoU do NMS do YOLO. |
| `grasp_pipeline.infer_every_live` | `int` | Executar detecção a cada N quadros durante a visualização ao vivo. |
| `grasp_pipeline.grasp.depth_quantile` | `float` | Quantil de profundidade usado pelo pipeline de preensão OBB. |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | Distância de recuo da pose final de preensão para a pose de pré-preensão. |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | Profundidade adicional de inserção usada pela execução de preensão do GraspNet. |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | Altura mínima de preensão permitida no referencial da base do robô. |

</details>

<details className="content-details">
<summary>Robô e garra</summary>

| Parâmetro | Tipo / Opções | Significado |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | Caminho para `reBotArm_control_py`; quando `null`, `sdk/reBotArm_control_py` é usado. |
| `robot.ready_pose` | `array` | Pose de prontidão usada na inicialização e após cada tarefa de preensão. |
| `robot.gripper.dm` / `robot.gripper.rs` | object | Parâmetros da garra DM / RS selecionados automaticamente com base na configuração do SDK. |

`angle_open`, `close_torque` e `default_force` devem ser números positivos. `counterclockwise` define a direção de fechamento, e `tau_max` é o limite de torque.

</details>

### Seleção de modelo

Os modelos YOLO são carregados de `rebot_grasp/models/`. Se o arquivo não existir, o Ultralytics geralmente tenta baixá-lo automaticamente.

| Modelo | Descrição |
| --- | --- |
| `yoloe-26l-seg.pt` | Vocabulário aberto + segmentação, padrão atual. |
| `yoloe-26s-seg.pt` | Mais leve e mais rápido. |
| `yolov8n-seg.pt` | Segmentação de categoria fechada, modelo pequeno. |
| `yolov8s-seg.pt` | Segmentação de categoria fechada com maior precisão. |

</section>

<section id="faq" className="section-card">

## FAQ

<details className="content-details">
<summary>1. `ModuleNotFoundError: No module named 'motorbridge'`</summary>

Confirme que o ambiente do projeto está ativado, depois sincronize o ambiente e reinstale o SDK do braço:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

</details>

<details className="content-details">
<summary>2. Pressionar `G` não executa a preensão</summary>

Causas comuns incluem: `hand_eye.npz` ausente, modo de calibração mão-olho não é `eye_in_hand` ou a pose alvo não é alcançável pelo IK. Comece com a validação em modo simulado (dry-run):

```bash
python scripts/main.py --dry-run
```

</details>

<details className="content-details">
<summary>3. Profundidade de preensão instável</summary>

Verifique `grasp_pipeline.grasp.depth_quantile`, a altura de montagem da câmera, a refletividade da superfície alvo e a qualidade de profundidade na área de trabalho.

</details>

<details className="content-details">
<summary>4. GraspNet não consegue importar `pointnet2_utils` de `pointnet2`</summary>

Isso geralmente significa que as extensões CUDA locais `pointnet2` / `knn` não foram compiladas corretamente no ambiente conda atual. Recompile-as:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

</details>

<details className="content-details">
<summary>5. GraspNet informa `RuntimeError: CPU not supported`</summary>

Os operadores de amostragem em `pointnet2` só suportam tensores CUDA. Confirme que o CUDA está disponível e recompile as extensões locais, se necessário:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

</details>

</section>

<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>Caminho de aprendizado</span>
    <h2>Continue com o caminho de aprendizado do reBot B601-DM</h2>
    <p>Esses tutoriais foram projetados para serem lidos na mesma ordem da página de robótica: comece pela inicialização básica, depois vá para a coleta de dados com LeRobot, depuração de cinemática, preensão visual e, por fim, integração com ROS2.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step" href="/pt-br/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>Primeiros Passos</strong>
        <small>Desembalagem completa, fiação, verificações de energia, configuração de driver, calibração e testes básicos de movimento.</small>
      </div>
      <em>Comece aqui</em>
    </a>
    <a className="course-step" href="/pt-br/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>Teleoperação e Coleta de Dados com LeRobot</strong>
        <small>Teleopere o braço, conecte câmeras, registre conjuntos de dados, treine políticas e avalie o comportamento do braço real.</small>
      </div>
      <em>Coleta de dados</em>
    </a>
    <a className="course-step" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <div>
        <strong>Visualização de Cinemática com Pinocchio</strong>
        <small>Entenda modelos de robô, sistemas de coordenadas, FK / IK, planejamento de trajetória e compensação de gravidade.</small>
      </div>
      <em>Controle</em>
    </a>
    <a className="course-step active" href="/pt-br/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <div>
        <strong>Demo de Preensão Visual</strong>
        <small>Combine percepção RGB-D, YOLO / OBB ou GraspNet, calibração mão-olho e preensão de objetos reais.</small>
      </div>
      <em>Artigo atual</em>
    </a>
    <a className="course-step" href="/pt-br/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <div>
        <strong>Integração com ROS2</strong>
        <small>Conecte o braço ao ROS2, RViz, MoveIt 2, serviços padrão, ações e fluxos de trabalho de planejamento.</small>
      </div>
      <em>Integração</em>
    </a>
  </div>
</section>


## Referências

- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLO](https://github.com/ultralytics/ultralytics)

## Suporte Técnico

- [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.rebot-page .doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.rebot-page .doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.rebot-page .eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.rebot-page .doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.rebot-page .doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.rebot-page .hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.rebot-page .hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.rebot-page .hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.rebot-page .hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.rebot-page .hero-card strong { color: var(--rb-text); }
.rebot-page .hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.rebot-page .doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.rebot-page .doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.rebot-page .doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.rebot-page .section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.rebot-page .section-card > h2 { margin-top: 0; color: var(--rb-text); }
.rebot-page .section-card > h3, .rebot-page .section-card h3 { color: var(--rb-text); }
.rebot-page .section-card p, .rebot-page .section-card li { color: var(--rb-muted); line-height: 1.65; }
.rebot-page .path-grid, .rebot-page .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.rebot-page .path-card, .rebot-page .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.rebot-page .path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.rebot-page .path-card > span:first-child { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); font-weight: 900; font-size: 0.75rem; }
.rebot-page .path-card strong, .rebot-page .feature-grid strong { color: var(--rb-text); }
.rebot-page .path-card p, .rebot-page .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; margin: 0; }
.rebot-page .image-frame { margin: 1rem 0; text-align: center; }
.rebot-page .image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.rebot-page .content-details, .rebot-page .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.rebot-page .content-details summary, .rebot-page .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.rebot-page .content-details summary::-webkit-details-marker, .rebot-page .video-details summary::-webkit-details-marker { display: none; }
.rebot-page .content-details summary::after, .rebot-page .video-details summary::after { content: "Open"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.rebot-page .content-details[open] summary::after, .rebot-page .video-details[open] summary::after { content: "Close"; }
.rebot-page .content-details > :not(summary), .rebot-page .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.rebot-page .content-details > :last-child, .rebot-page .video-details > :last-child { margin-bottom: 1rem; }
.rebot-page .video-container, .video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border, rgba(148,163,184,0.28)); background: #000; }
.rebot-page .video-container iframe, .video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.rebot-page table { width: 100%; display: table; }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page code { word-break: break-word; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .rebot-page .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .rebot-page .hero-card, html[data-theme='dark'] .rebot-page .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .rebot-page .doc-nav a:hover { background: #1f2023; }
@media (max-width: 900px) { .rebot-page .doc-hero { grid-template-columns: 1fr; } .rebot-page .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) { .rebot-page .doc-hero, .rebot-page .section-card { padding: 1.1rem; border-radius: 18px; } .rebot-page .doc-nav { grid-template-columns: 1fr; } }

/* Shared safety warning and course navigation */
.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.15rem 0 1.35rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}
.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}
.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}
.safety-alert-content p,
.safety-alert-content ul {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.68;
}
.safety-alert-content ul {
  margin-top: 0.65rem;
  padding-left: 1.2rem;
}
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
.course-nav-section {
  margin-top: 1.4rem;
}
.course-path-grid {
  display: grid;
  gap: 0.85rem;
}
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, rgba(148, 163, 184, 0.28));
  background: var(--rb-surface, var(--panel-bg, #ffffff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-step:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.32);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.10);
}
.course-step.active {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #ffffff;
  background: #2563eb;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);
}
.course-step strong {
  display: block;
  color: var(--rb-text, var(--text-main, #111827));
  font-size: 1rem;
  margin-bottom: 0.24rem;
}
.course-step small {
  display: block;
  color: var(--rb-muted, var(--text-muted, #64748b));
  line-height: 1.55;
  font-size: 0.92rem;
}
.course-step em {
  justify-self: end;
  white-space: nowrap;
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
}
html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step {
  background: rgba(31, 32, 35, 0.84);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(20, 184, 166, 0.10));
  border-color: rgba(96, 165, 250, 0.38);
}
html[data-theme='dark'] .course-step strong { color: #e5e7eb; }
html[data-theme='dark'] .course-step small { color: #cbd5e1; }
html[data-theme='dark'] .course-step em { color: #93c5fd; background: rgba(37, 99, 235, 0.16); border-color: rgba(96, 165, 250, 0.28); }
@media (max-width: 640px) {
  .safety-alert { grid-template-columns: 1fr; }
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-step em { grid-column: 2; justify-self: start; }
}


`}</style>
