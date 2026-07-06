---
description: Este tutorial mostra como construir uma demonstração completa de preensão visual para o reBot Arm B601-RS usando uma câmera RGB-D, YOLO / OBB e pipelines opcionais de preensão GraspNet.
title: Demonstração de Preensão Visual com reBot Arm B601-RS
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
keywords:
  - reBot Arm
  - B601-RS
  - Preensão
  - RGB-D
  - YOLO
  - GraspNet
  - Calibração mão-olho
  - Robô
slug: /rebot_arm_b601_rs_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_grasping_demo/
---

# Demonstração de Preensão Visual com reBot Arm B601-RS

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Construa um sistema de preensão visual de mesa com visão RGB-D, YOLO e B601-RS</h2>
      <p>
        Este guia percorre uma demonstração completa de preensão visual: configuração do ambiente, integração da câmera,
        configuração do SDK do braço robótico, calibração mão-olho, estimativa de preensão com YOLO / OBB / GraspNet
        e execução real no braço robótico.
      </p>
      <div className="hero-actions">
        <a href="#quick-path">Ver fluxo de trabalho</a>
        <a href="#run">Executar a demonstração</a>
      </div>
    </div>
    <div className="hero-card">
      <strong>Configuração recomendada</strong>
      <span>reBot Arm B601-RS</span>
      <span>Orbbec Gemini 2 ou RealSense D435i / D405</span>
      <span>Ubuntu 22.04 + Python 3.10</span>
    </div>
  </section>


<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Aviso de segurança: limpe a área de trabalho do robô antes de executar</strong>
    <p>Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor, objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer afastado da faixa de movimento do robô.</p>
    <ul>
      <li>Não toque em juntas, motores, elos, garra ou efetuador final após o braço robótico ser energizado.</li>
      <li>Antes de executar calibração, MotorBridge, teleoperação, coleta de dados, controle de IK, controle de trajetória, compensação de gravidade, preensão visual, ações ROS2 ou execução com MoveIt, certifique-se de que o braço robótico esteja firmemente fixado.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores PCAN-USB, conectores XT30 ou conectores de alimentação.</li>
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

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS visual grasping demo" />
</p>

<p align="center">
  <strong>Percepção de profundidade · Detecção de objetos · Calibração mão-olho · Preensão autônoma · Totalmente open source</strong>
</p>

<div className="video-placeholder">Link de vídeo a ser adicionado: demonstração de preensão visual com B601-RS</div>

<section id="quick-path" className="section-card">

<div className="step-title-row"><span className="step-pill">Fluxo de trabalho</span><div><h2>Fluxo de trabalho recomendado</h2><p>Siga as etapas abaixo para validar percepção, calibração e execução segura no braço real.</p></div></div>

<div className="path-grid">
  <div className="path-card"><span>Step 1</span><strong>Preparar hardware</strong><p>Confirme a versão do braço, fonte de alimentação, interface PCAN-USB / SocketCAN e conexão da câmera RGB-D.</p></div>
  <div className="path-card"><span>Step 2</span><strong>Instalar ambiente</strong><p>Crie o ambiente conda e instale o SDK do braço, SDK da câmera, YOLO e GraspNet opcional.</p></div>
  <div className="path-card"><span>Step 3</span><strong>Concluir calibração mão-olho</strong><p>Colete poses ArUco e resolva a transformação de calibração Eye-in-Hand.</p></div>
  <div className="path-card"><span>Step 4</span><strong>Executar a demonstração de preensão</strong><p>Valide percepção e poses alvo primeiro em dry-run e depois execute com o braço real.</p></div>
</div>

:::tip
Conclua o guia de início rápido para o seu braço antes de executar esta demonstração: [B601-RS Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/).
:::

</section>

<section className="section-card">
  <div className="section-title">
    <span>Etapas detalhadas</span>
    <h2>Estágios detalhados de implementação</h2>
    <p>Use esta lista de verificação para avançar da validação apenas de percepção para execução segura no braço real.</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>Concluir o início rápido primeiro</strong><p>Verifique alimentação, PCAN-USB / SocketCAN, posição zero e movimento básico antes de conectar percepção ao movimento do robô.</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>Preparar visão RGB-D</strong><p>Instale o SDK da câmera e verifique fluxos estáveis de cor / profundidade antes da calibração.</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Calibrar Eye-in-Hand</strong><p>Colete amostras ArUco suficientes e valide a precisão da transformação mão-olho.</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>Validar apenas percepção</strong><p>Execute demonstrações OBB ou GraspNet sem movimento do robô para verificar estimativas de pose.</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>Executar dry-run</strong><p>Verifique pose alvo, alcançabilidade de IK, pose de pré-preensão e risco de colisão.</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>Habilitar preensão real</strong><p>Somente depois que todas as verificações anteriores forem aprovadas, habilite o braço e execute a preensão real.</p></div>
  </div>
</section>


<section className="section-card">

## Introdução ao projeto

**Demonstração de Preensão Visual com reBot Arm B601-RS** é um projeto open source de preensão visual construído em torno de uma câmera de profundidade RGB-D e da biblioteca de controle do braço robótico reBot. O sistema é projetado para a configuração B601-RS. Ele usa YOLO para detecção de objetos em tempo real na mesa, estima a orientação de preensão com um retângulo de área mínima OBB, transforma pontos de preensão no referencial da câmera para o referencial da base do robô por meio de calibração mão-olho e, por fim, aciona o braço robótico para concluir a preensão autônoma.

### Capacidades principais

<div className="feature-grid">
  <div className="path-card"><span>Step 1</span><strong>Percepção de profundidade RGB-D</strong><p>Suporta Orbbec Gemini 2, RealSense D435i / D405 e câmeras RGB-D similares.</p></div>
  <div className="path-card"><span>Step 2</span><strong>Detecção de objetos com YOLO</strong><p>Suporta classes de vocabulário aberto e modelos padrão de segmentação YOLO.</p></div>
  <div className="path-card"><span>Step 3</span><strong>Estimativa de preensão com OBB</strong><p>Usa o eixo curto do retângulo de área mínima para a orientação da garra e quantis de profundidade para a altura de preensão.</p></div>
  <div className="path-card"><span>Step 4</span><strong>Preensão 6D com GraspNet</strong><p>Opcionalmente adiciona candidatos de preensão 6D mais ricos para objetos mais complexos.</p></div>
  <div className="path-card"><span>Step 5</span><strong>Calibração Eye-in-Hand</strong><p>Usa calibração mão-olho TSAI para transformar pontos de preensão no referencial da câmera para o referencial da base do robô.</p></div>
  <div className="path-card"><span>Step 6</span><strong>Execução no braço real</strong><p>Usa reBotArm_control_py para IK, controle de trajetória e controle de força da garra.</p></div>
</div>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova objetos de valor e mantenha todas as pessoas afastadas dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="hardware" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 1</span><div><h2>Configuração de hardware</h2><p>Confirme o braço, a câmera RGB-D, a alimentação e a interface SocketCAN antes de instalar o software.</p></div></div>

| Componente | Modelo / Requisito |
|------|------------|
| Braço robótico | reBot Arm B601-RS |
| Câmera de profundidade | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Interface de comunicação | PCAN-USB / SocketCAN, taxa de bits CAN 1 Mbps |
| Host | Ubuntu 22.04+, Python 3.10, x86_64 |

### Fiação e permissões

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
```

Para o B601-RS, ative a interface CAN antes de executar scripts de calibração ou preensão:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0
```

:::danger
O B601-RS usa uma fonte de alimentação CC de 48 V. Certifique-se de que a fonte de alimentação, a interface PCAN-USB / SocketCAN e a configuração do SDK correspondam antes de executar a demonstração.
:::

</section>

<section id="install" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 2</span><div><h2>Instalação do ambiente</h2><p>Crie o ambiente do projeto e instale a biblioteca de controle do robô.</p></div></div>

| Item | Requisito |
|------|------|
| OS | Ubuntu 22.04+ |
| Python | 3.10 |
| Ambiente recomendado | conda |
| Workspace recomendado | `rebot_grasp` |
| Nome de ambiente recomendado | `rebotarm` |

### Etapa 1. Clonar o repositório

Prefira o repositório oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

Você também pode usar o repositório de desenvolvimento atual:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Etapa 2. Criar e ativar o ambiente conda

```bash
conda env create -f environment.yml
conda activate rebotarm
```

### Etapa 3. Instalar a biblioteca de controle do braço robótico

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Se `pip install -e .` informar `Multiple top-level packages discovered in a flat-layout`, adicione a seguinte configuração de descoberta de pacotes em `pyproject.toml` em `reBotArm_control_py`:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

Para B601-RS, confirme o seguinte em `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

</section>

<section id="camera-sdk" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 3</span><div><h2>Instalar o SDK da Câmera de Profundidade</h2><p>Inicialize a câmera RGB-D e verifique o SDK antes da calibração.</p></div></div>

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

Se você precisar do kit de ferramentas completo do RealSense ou de regras udev, consulte a documentação oficial do Intel RealSense SDK e instale `librealsense2`.

</details>

</section>

<section id="graspnet" className="section-card">

<div className="step-title-row"><span className="step-pill">Optional</span><div><h2>Configurar o GraspNet</h2><p>Use este caminho quando você precisar de candidatos de preensão 6D além do pipeline YOLO / OBB.</p></div></div>

Ignore esta seção se você só quiser executar primeiro o pipeline de preensão YOLO + OBB. Configure o GraspNet quando precisar de candidatos de pose de preensão 6D mais ricos.

Antes de compilar os operadores locais, certifique-se de que `nvcc` esteja disponível e corresponda à versão CUDA usada pelo PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Se `nvcc` estiver ausente ou não corresponder a `torch.version.cuda`, instale um compilador CUDA que corresponda à versão CUDA atual do seu PyTorch. Por exemplo, quando o PyTorch informar `13.0`:

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

### Configurar o Modelo Pré-treinado

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

## Estrutura de Diretórios

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


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes da execução</strong>
    <p>Remova objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="run" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 4</span><div><h2>Executar e Depurar</h2><p>Comece com scripts de simulação (dry-run) e apenas percepção, depois habilite a execução com o braço real.</p></div></div>

### 0. Confirmar Versão do Braço e Configuração do SDK

Em `sdk/reBotArm_control_py/config/rebotarm.yaml`, selecione a configuração de hardware correspondente:

```yaml
hardware_yaml: rebotarm_dm.yaml
```

Ou:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

### 1. Calibração Mão-Olho (Obrigatória Antes da Preensão)

```bash
python scripts/collect_handeye_eih.py
```

No modo automático, o braço percorre poses predefinidas e amostra automaticamente quando a detecção de ArUco está estável. São necessárias pelo menos 5 amostras, e 15 ou mais amostras são recomendadas para melhor estabilidade.

Para mover o braço manualmente para coleta de amostras:

```bash
python scripts/collect_handeye_eih.py --manual
```

:::tip
Se a precisão de preensão não for suficiente após a calibração, ajuste `X`, `Y` e `Z` em `calibration.hand_eye_compensation_m` em `config/default.yaml`.
:::

### 2. Programa Principal de Preensão: `scripts/main.py`

Fluxo completo de preensão visual:

1. Inicialize a câmera RGB-D e confirme que o fluxo de imagem está disponível.
2. Habilite o braço e o gripper, depois mova para a pose de prontidão.
3. Execute a visualização em tempo real da câmera com detecção de objetos YOLO e segmentação por instância.
4. Estime a orientação do gripper usando o eixo curto do OBB e estime a altura de preensão usando um quantil de profundidade.
5. Pressione `G` para congelar o quadro e calcular a pose alvo do braço por meio da transformação mão-olho.
6. Mova para o ponto de pré-preensão, desça, feche o gripper, eleve e retorne à pose de prontidão.

```bash
python scripts/main.py
```

Para depuração, comece com:

```bash
python scripts/main.py --dry-run
```

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Execute o dry-run antes da execução real</strong>
    <p>Use o dry-run para verificar a detecção da câmera, a calibração mão-olho, a pose alvo e a alcançabilidade de IK antes de permitir o movimento do robô.</p>
  </div>
</div>

### 3. Programa de Pegar-e-Colocar: `scripts/set.py`

Este script demonstra pegar uma banana e colocá-la em uma caixa.

```bash
python scripts/set.py
```

### 4. Teste Simplificado de Preensão: `scripts/ordinary_grasp_pipeline.py`

Este script não se conecta ao braço. Ele apenas verifica a estimativa de pose de preensão OBB e a visualização.

```bash
python scripts/ordinary_grasp_pipeline.py
```

### 5. Estimativa de Câmera com GraspNet: `scripts/graspnet_camera_demo.py`

Este script não se conecta ao braço. Ele executa a estimativa de pose de preensão 6D do GraspNet apenas com a câmera RGB-D.

```bash
python scripts/graspnet_camera_demo.py
```

### 6. Preensão com Braço Robótico usando GraspNet: `scripts/grasp.py`

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

</section>

<section id="config" className="section-card">

<div className="step-title-row"><span className="step-pill">Config</span><div><h2><code>default.yaml</code> Referência de Parâmetros</h2><p>Revise os parâmetros de câmera, calibração, detecção, preensão, robô e gripper antes de executar a demonstração.</p></div></div>

<details open className="content-details">
<summary>Câmera e Calibração</summary>

| Parâmetro | Tipo / Opções | Significado |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i` / `realsense_d405` / `orbbec_gemini2` | Tipo de câmera conectada ao sistema. |
| `camera.serial` | `string` / `null` | Número de série do dispositivo; defina como `null` para usar o primeiro dispositivo disponível. |
| `calibration.aruco.marker_length_m` | `float` | Comprimento do lado do marcador ArUco em metros. |
| `calibration.hand_eye_compensation_m` | `array` | Compensação de translação XYZ no referencial da base do robô, em metros. |

</details>

<details className="content-details">
<summary>Pipeline de Detecção e Preensão</summary>

| Parâmetro | Tipo | Significado |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | Limite de confiança da detecção YOLO. |
| `detection.iou_threshold` | `float` | Limite de IoU do NMS do YOLO. |
| `grasp_pipeline.infer_every_live` | `int` | Executa a detecção a cada N quadros durante a visualização ao vivo. |
| `grasp_pipeline.grasp.depth_quantile` | `float` | Quantil de profundidade usado pelo pipeline de preensão OBB. |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | Distância de recuo da pose final de preensão para a pose de pré-preensão. |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | Profundidade adicional de inserção usada pela execução de preensão do GraspNet. |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | Altura mínima de preensão permitida no referencial da base do robô. |

</details>

<details className="content-details">
<summary>Robô e Gripper</summary>

| Parâmetro | Tipo / Opções | Significado |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | Caminho para `reBotArm_control_py`; quando `null`, `sdk/reBotArm_control_py` é usado. |
| `robot.ready_pose` | `array` | Pose de prontidão usada na inicialização e após cada tarefa de preensão. |
| `robot.gripper.dm` / `robot.gripper.rs` | object | Parâmetros do gripper DM / RS selecionados automaticamente com base na configuração do SDK. |

`angle_open`, `close_torque`, e `default_force` devem ser números positivos. `counterclockwise` define a direção de fechamento, e `tau_max` é o limite de torque.

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

<div className="step-title-row"><span className="step-pill">FAQ</span><div><h2>FAQ</h2><p>Problemas comuns durante instalação, calibração, detecção, compilação e execução do GraspNet.</p></div></div>

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

Causas comuns incluem: `hand_eye.npz` está ausente, o modo de calibração mão-olho não é `eye_in_hand`, ou a pose alvo não é alcançável pelo IK. Comece com a validação em modo de simulação (dry-run):

```bash
python scripts/main.py --dry-run
```

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Execute o dry-run antes da execução real</strong>
    <p>Use o dry-run para verificar a detecção da câmera, a calibração mão-olho, a pose alvo e a alcançabilidade de IK antes de permitir o movimento do robô.</p>
  </div>
</div>

</details>

<details className="content-details">
<summary>3. A profundidade de preensão é instável</summary>

Verifique `grasp_pipeline.grasp.depth_quantile`, a altura de montagem da câmera, a refletividade da superfície alvo e a qualidade de profundidade na área de trabalho.

</details>

<details className="content-details">
<summary>4. O GraspNet não consegue importar `pointnet2_utils` de `pointnet2`</summary>

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
<summary>5. O GraspNet relata `RuntimeError: CPU not supported`</summary>

[LINE_80>Os operadores de amostragem em `pointnet2` só suportam tensores CUDA. Confirme que o CUDA está disponível e reconstrua as extensões locais, se necessário:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

</details>

</section>

## Referências

- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLO](https://github.com/ultralytics/ultralytics)

## Suporte técnico

- [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)



<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue aprendendo</span>
    <h2>Trilha de aprendizado do reBot B601-DM</h2>
    <p>Esses tutoriais seguem a mesma ordem da trilha de aprendizado da página de robótica: <strong>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</strong>.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/pt-br/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Conclua o unboxing, a fiação, as verificações de energia, a configuração do driver, a calibração e os primeiros testes de movimento.</span></span>
      <span className="course-tag">Comece aqui</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Teleoperação LeRobot e Coleta de Dados</strong><span>Teleopere o braço, conecte câmeras, registre conjuntos de dados, treine políticas e avalie o comportamento do braço real.</span></span>
      <span className="course-tag">Coleta de dados</span>
    </a>
    <a className="course-path-item active" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Visualização de Cinemática com Pinocchio</strong><span>Entenda modelos de robôs, juntas, referenciais de coordenadas, cinemática direta/inversa, trajetórias e compensação de gravidade.</span></span>
      <span className="course-tag">Artigo atual</span>
    </a>
    <a className="course-path-item active" href="/pt-br/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Demo de Preensão Visual</strong><span>Combine percepção RGB-D, calibração mão-olho, YOLO / GraspNet e geração de pose de preensão para agarrar objetos reais.</span></span>
      <span className="course-tag">Artigo atual</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>Integração com ROS2</strong><span>Conecte o braço ao ROS2, RViz, MoveIt 2, planejamento e fluxos de trabalho de robótica de nível superior.</span></span>
      <span className="course-tag">Integração</span>
    </a>
  </div>
</section>

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
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.agent-inline-card { margin: 1rem 0 1.25rem; padding: 1.15rem; border-radius: 18px; background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.08)); border: 1px solid rgba(37,99,235,0.22); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.power-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.power-grid div { padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-align: center; }
.power-grid h4 { margin: 0 0 0.35rem; color: var(--rb-text); }
.power-grid p { margin: 0.25rem 0 0.75rem; color: var(--rb-muted); }
.power-grid img { max-width: 100%; border-radius: 14px; }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "收起"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page table { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .agent-inline-card { background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(45,212,191,0.10)); border-color: rgba(96,165,250,0.28); }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }

.video-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 132px;
  margin: 1rem 0;
  padding: 1.1rem;
  border-radius: 16px;
  border: 1px dashed rgba(37,99,235,0.35);
  background: var(--rb-primary-soft);
  color: var(--rb-primary);
  font-weight: 850;
  text-align: center;
}
.rebot-page .section-card > h2, .rebot-page .section-card > h3 {
  color: var(--rb-text);
}
.rebot-page .section-card p, .rebot-page .section-card li {
  line-height: 1.7;
}
.rebot-page .feature-grid div p, .rebot-page .path-grid div p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.6;
}
.rebot-page pre {
  border-radius: 14px;
}
html[data-theme='dark'] .video-placeholder {
  border-color: rgba(96,165,250,0.35);
}

@media (max-width: 900px) { .doc-hero, .power-grid, .two-col, .faq-images { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }


.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239,68,68,0.38); background: linear-gradient(135deg, rgba(254,242,242,0.98), rgba(255,247,237,0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239,68,68,0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }

.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface, var(--rb-card, #fff)); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .course-path-item { background: #111827; border-color: rgba(148,163,184,0.24); }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }



/* Cartões de etapas refinados e melhorias no caminho do curso */
.step-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.step-card {
  position: relative;
  padding: 1rem 1.05rem 1rem 1.1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, #fff), var(--rb-surface-soft, #f8fafc));
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
}
.step-card .step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  font-size: 0.86rem;
}
.step-card strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.step-card p,
.step-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}
.module-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.module-summary-card {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.module-summary-card b {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--rb-text);
}
.module-summary-card span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.65;
}
.path-grid > div:not([class]) {
  padding: 1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.path-card p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.6; }
.course-path-section { margin-top: 2rem; }
.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-path-item.active,
.course-step.active {
  border-color: rgba(37, 99, 235, 0.45);
  background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.06));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary);
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}
.course-path-copy strong,
.course-step strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.course-path-copy span,
.course-step small {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}
.course-tag,
.course-step em {
  justify-self: end;
  white-space: nowrap;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  border: 1px solid rgba(37,99,235,0.18);
  font-style: normal;
  font-weight: 800;
  font-size: 0.78rem;
}
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
}
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .path-grid > div:not([class]) {
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

`}</style>
