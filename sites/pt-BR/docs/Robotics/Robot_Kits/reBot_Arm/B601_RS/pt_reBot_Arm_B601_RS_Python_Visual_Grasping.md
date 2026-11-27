---
description: Configure a preensão visual em mesa no reBot Arm B601-RS com uma Orbbec Gemini 336 e YOLOE. Visualize antecipadamente preensões OBB, faça a calibração mão-olho e execute o braço com backends opcionais AnyGrasp ou GraspNet-Baseline.
title: reBot-RS Multi-Backend Visual Grasping
sidebar_label: reBot-RS Multi-Backend Visual Grasping
keywords:
  - reBot Arm B601-RS
  - RGB-D
  - YOLOE
  - OBB
  - AnyGrasp
  - GraspNet
  - Calibração mão-olho
slug: /rebot_arm_b601_rs_python_visual_grasping
sku: 100019336
last_update:
  date: 2026-11-24
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-11-23'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_python_visual_grasping/
---

import '/src/css/rebot-wiki-style.css';
import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" width={800} height={586} style={{ height: 'auto' }} />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true" />
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Adquira agora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7" />
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4" />
    </svg>
  </a>
</div>

<p className="text--center">
  <img src="https://img.shields.io/badge/Camera-Gemini%20336-teal.svg" alt="Câmera RGB-D Orbbec Gemini 336" />{' '}
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Python 3.10" />{' '}
  <img src="https://img.shields.io/badge/Version-v0.1.0-brightgreen.svg" alt="Versão v0.1.0" />{' '}
  <img src="https://img.shields.io/badge/Platform-Ubuntu%20x86--64-orange.svg" alt="Ubuntu x86-64" />
</p>

<p className="text--center"><strong>AnyGrasp · GraspNet · OBB · Calibração mão-olho · YOLOE</strong></p>

Este tutorial usa uma Orbbec Gemini 336 montada no efetuador final do reBot Arm B601-RS para identificar e agarrar objetos sobre a mesa. O YOLOE segmenta objetos usando rótulos de texto. O backend de preensão estima poses de preensão a partir do contorno do alvo e dos dados de profundidade. Após a calibração mão-olho, o software transforma os candidatos para o referencial da base do robô e verifica os limites da área de trabalho e a cinemática inversa (IK).

Comece visualizando candidatos de preensão a partir do backend filtrado de caixa delimitadora orientada (OBB). Em seguida, calibre a câmera e tente uma preensão com o braço. Use AnyGrasp ou GraspNet-Baseline para estimar poses de preensão em seis graus de liberdade a partir de nuvens de pontos. Para um fluxo de trabalho de pick-and-place com ROS 2, consulte o método ROS 2 em [B601-RS Visual Grasping Demo](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_grasping_demo/).

## Prepare o hardware e o host

- **Braço robótico.** Separe um reBot Arm B601-RS, garra, fonte de alimentação adequada e adaptador USB-para-CAN configurado. Conclua primeiro a montagem, o ajuste de posição zero e as verificações básicas de comunicação. [B601-RS Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/)
- **Câmera.** Use uma Orbbec Gemini 336, um cabo de dados USB 3.0 e um suporte de câmera no efetuador final. O projeto também fornece drivers para a Orbbec Gemini 2, RealSense D405 e RealSense D435i. Verifique novamente o enquadramento da câmera e repita a calibração mão-olho após substituir a câmera ou o suporte. [Camera SDK setup](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)
- **Host.** Use uma máquina Ubuntu x86-64 com ambiente gráfico, Git e curl. Os scripts criam um ambiente Conda chamado `rebot` com Python 3.10. AnyGrasp e GraspNet-Baseline exigem uma GPU NVIDIA compatível e driver correspondente.
- **Objeto de teste e placa de calibração.** Prepare uma banana ou outro objeto da lista de classes configurada. Para a calibração mão-olho, fixe uma placa de calibração ArUco na superfície de trabalho. [Baixe a placa ArUco de 100 mm (PDF)](https://raw.githubusercontent.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/main/examples/hand_eye/boards/aruco_100mm.pdf)

## 1. Configure o ambiente e os SDKs

Clone o projeto a partir de um terminal no Ubuntu. Execute os demais comandos a partir da raiz do repositório.

```bash
git clone https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping.git
cd Rebot-Arm-B601-Visual-Grasping
```

Abra `config/default.yaml` e defina `camera.type` para corresponder ao seu dispositivo. Os padrões da Gemini 336 são `orbbec_gemini336`, 640 × 480 e 30 FPS. Defina `camera.serial` se você tiver várias câmeras do mesmo modelo. Selecione o modelo antes de executar o script de configuração para que ele instale o driver correspondente.

**Escolha configuração automática ou manual.** A configuração automática permite instalar o que você precisa, desde uma visualização de câmera OBB na CPU até todos os backends de preensão. Escolha a configuração manual para instalar as dependências componente por componente.

<div className={styles.page}>
<GraspingTabs defaultValue="automatic" queryString="grasping-setup">

<TabItem value="automatic" label="Configuração automática">

<h3 id="option-a--automatic-setup">Opção A — Configuração automática</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Verificar e instalar dependências</h4>

Escolha um dos conjuntos de comandos abaixo. Execute em ordem a verificação inicial, o script de configuração e a verificação pós-instalação. Se a verificação inicial relatar dependências ausentes, continue com o comando de configuração. Você pode desconectar a câmera e o braço durante a configuração.

**Somente para visualização de câmera OBB**, você pode usar a CPU. Após instalar e ativar o ambiente, continue para a Seção 2.

```bash
bash scripts/check_env.sh --backend obb
bash scripts/setup_env.sh --backend obb
bash scripts/check_env.sh --backend obb
```

**Para preensão OBB com o braço**, adicione `--robot` para instalar e verificar o SDK de controle do B601. O OBB pode ser executado na CPU.

```bash
bash scripts/check_env.sh --backend obb --robot
bash scripts/setup_env.sh --backend obb --robot
bash scripts/check_env.sh --backend obb --robot
```

**Para instalar todos os backends e o SDK de controle do B601**, use uma GPU NVIDIA compatível e driver correspondente. Execute `nvidia-smi -L` para confirmar que o host detecta a GPU antes de executar estes comandos. O script de configuração compila os operadores CUDA necessários.

```bash
bash scripts/check_env.sh
bash scripts/setup_env.sh
bash scripts/check_env.sh
```

- **Instale um único backend de nuvem de pontos.** Use `--backend anygrasp` ou `--backend graspnet` nos comandos de configuração e verificação. Adicione `--robot` se você planeja agarrar com o braço. Se o download dos pesos do GraspNet falhar, adicione `--checkpoint-file /path/to/checkpoint-rs.tar` ao comando de configuração e substitua o caminho pela sua cópia local.
- **Revise as alterações.** O script instala componentes ausentes e reutiliza SDKs Git existentes. Ele mostra as alterações e pergunta antes de trocar versões de dependências, compilações Conda ou branches de SDK. Digite `y` para confirmar. Pressionar Enter, digitar `n` ou executar de forma não interativa ignora essas alterações. Veja as alterações aplicadas abaixo de `----`.
- **Verifique o resultado.** Revise o resumo abaixo de `----`. O código de saída `3` significa que restam apenas itens `[MANUAL]`. Para AnyGrasp, configure a licença e os pesos conforme descrito abaixo. Para preensão com o braço, gere a matriz mão-olho na Seção 3. Depois de fornecer os arquivos para a sua configuração, execute novamente a verificação com as mesmas opções.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Ativar o ambiente</h4>

Se o script tiver instalado o Miniforge, execute `source ~/miniforge3/etc/profile.d/conda.sh` primeiro no terminal atual. Em seguida, ative o ambiente.

```bash
conda activate rebot
```

</div>
</div>

</div>

</TabItem>

<TabItem value="manual" label="Configuração manual">

<h3 id="option-b--manual-setup">Opção B — Configuração manual</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

#### Crie o ambiente e instale o PyTorch

Execute os seguintes comandos em um terminal com Conda disponível. O arquivo `environment.yml` especifica Python 3.10, NumPy abaixo da versão 2 e Pinocchio 3.9.0 para o B601. Se você já tiver um ambiente `rebot`, ative-o e verifique suas dependências em relação ao arquivo de ambiente.

```bash
conda env create -f environment.yml
conda activate rebot
```

<Tabs defaultValue="cuda">

<TabItem value="cuda" label="GPU NVIDIA">

Instale a versão GPU do PyTorch para usar todos os backends ou para executar AnyGrasp ou GraspNet. O projeto verificou o PyTorch 2.5.1 com CUDA 12.1. A verificação deve mostrar `12.1` e `True`.

```bash
python -m pip install 'torch==2.5.1+cu121' 'torchvision==0.20.1+cu121' 'torchaudio==2.5.1+cu121' \
  --index-url https://download.pytorch.org/whl/cu121
python -c 'import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())'
```

</TabItem>

<TabItem value="cpu" label="CPU">

Para OBB em um sistema somente com CPU, instale a versão CPU do PyTorch.

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
```

</TabItem>

</Tabs>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

#### Instale o driver da câmera, YOLOE e o SDK do B601

Para a Orbbec Gemini 336, execute `python -m pip install 'pyorbbecsdk2==2.0.18'`. Para a RealSense D405 ou D435i, execute `python -m pip install 'pyrealsense2>=2.54'`. Siga as instruções do fabricante da câmera para configurar o acesso USB. [Camera SDK setup](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)

```bash
python -m pip install -e '.[obb,yolo,visualization]' scipy
python -m pip install 'git+https://github.com/ultralytics/CLIP.git@7ffa84b3bfa40c42ecc1c77147a855e69cb2dd40'
mkdir -p models
curl -fL --retry 3 -o models/yoloe-26s-seg.pt \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
curl -fL --retry 3 -o mobileclip2_b.ts \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
python -m pip install 'motorbridge==0.6.0' 'meshcat>=0.3.2' 'matplotlib>=3.10'
```

Se OBB for o único backend que você planeja usar com o braço, execute `bash scripts/check_env.sh --backend obb --robot` para verificar as dependências e continue para a Seção 2. Você irá gerar a matriz mão‑olho na Seção 3.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

#### Configure a cadeia de ferramentas CUDA para AnyGrasp e GraspNet

No ambiente `rebot` ativo, instale um compilador e uma cadeia de ferramentas compatíveis com CUDA 12.1. Confirme que `nvcc --version` mostra `release 12.1` antes de continuar.

```bash
conda install --override-channels -c conda-forge 'gcc_linux-64=12' 'gxx_linux-64=12'
conda install --override-channels -c nvidia/label/cuda-12.1.1 -c conda-forge 'cuda-toolkit=12.1'
conda activate rebot
export CUDA_HOME="$CONDA_PREFIX"
export PATH="$CUDA_HOME/bin:$PATH"
export MAX_JOBS=2
nvcc --version
python -m pip install wheel ninja
python -m pip install 'transforms3d>=0.4.2' \
  'graspnetAPI @ git+https://github.com/graspnet/graspnetAPI.git@eb57dd2092d8dbe05312a29c3d0c22f3226efbfc'
```

**AnyGrasp.** Instale o SDK e sua extensão PointNet2 e, em seguida, compile o MinkowskiEngine com OpenBLAS. Siga [AnyGrasp license and weights](#anygrasp-license-and-weights) para colocar os arquivos necessários.

```bash
git clone https://github.com/graspnet/anygrasp_sdk.git sdk/anygrasp_sdk
git clone --branch cuda-12-1 https://github.com/chenxi-wang/MinkowskiEngine.git sdk/MinkowskiEngine-cuda-12-1
conda install --override-channels -c conda-forge 'openblas>=0.3.30,<0.4' 'numpy<2'
python -c 'import ctypes, sys; ctypes.CDLL(sys.prefix + "/lib/libopenblas.so")'
python -m pip install --no-build-isolation --no-deps ./sdk/anygrasp_sdk/pointnet2
(
  cd sdk/MinkowskiEngine-cuda-12-1 &&
  python setup.py bdist_wheel --force_cuda --blas=openblas \
    --blas_include_dirs="$CONDA_PREFIX/include" --blas_library_dirs="$CONDA_PREFIX/lib" &&
  python -m pip install --no-deps dist/*.whl
)
```

**GraspNet-Baseline.** Instale as extensões PointNet2 e kNN em subdiretórios separados do SDK GraspNet-Baseline. Isso permite que AnyGrasp e GraspNet usem suas próprias compilações PointNet2 no mesmo ambiente `rebot`. Baixe os pesos pré‑treinados do RealSense e salve‑os em `sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar`. [Official GraspNet-Baseline pretrained weights](https://github.com/graspnet/graspnet-baseline#training-and-testing)

```bash
git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
baseline="$PWD/sdk/graspnet-baseline"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/pointnet2" "$baseline/pointnet2"
touch "$baseline/pointnet2/pointnet2/__init__.py"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/knn" "$baseline/knn"
mkdir -p "$baseline/checkpoints"
```

Após concluir toda a configuração manual, execute `bash scripts/check_env.sh`. Se você configurou apenas alguns dos backends, use `--backend obb`, `--backend anygrasp` ou `--backend graspnet` para verificar as dependências relevantes. Adicione `--robot` para verificar também o braço. [Project manual setup guide](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/README.md#2-manual-environment-and-sdk-setup)

</div>
</div>

</div>

</TabItem>

</GraspingTabs>
</div>

### Licença e pesos do AnyGrasp

Para usar AnyGrasp, obtenha a licença oficial e os pesos de detecção e, em seguida, configure‑os com `bash scripts/anygrasp_license.sh`. As etapas se aplicam tanto à configuração automática quanto à manual. Executar o script sem argumentos abre um menu interativo.

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Obter o ID de recurso da máquina</h4>

Na máquina que executará a inferência, use a interface de rede que você usará na implantação. Selecione `1` para obter o `feature_id` e, em seguida, use‑o para solicitar a licença e os pesos correspondentes. [Official AnyGrasp license registration](https://github.com/graspnet/anygrasp_sdk/tree/main/license_registration)

```bash
bash scripts/anygrasp_license.sh 1
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Instalar a licença e os pesos</h4>

Coloque o ZIP da licença oficial ou o diretório de licença extraído ao lado de `checkpoint_detection.tar` no mesmo diretório de entrega. Selecione `2` para instalar ambos. Substitua `/path/to/delivery` pelo caminho para o seu diretório de entrega.

```bash
bash scripts/anygrasp_license.sh 2 "/path/to/delivery"
```

O script usa o SDK oficial para validar a licença e verifica se consegue ler os pesos. Em seguida, instala os arquivos de acordo com `config/backends/anygrasp.yaml`.

**Locais padrão dos arquivos.** Procure em `license/` pelos arquivos de licença e em `log/` pelos pesos de detecção, `checkpoint_detection.tar`.

```text
sdk/anygrasp_sdk/grasp_detection/
├── gsnet.so
├── license/
│   ├── licenseCfg.json
│   ├── *.lic
│   ├── *.public_key
│   └── *.signature
└── log/
    └── checkpoint_detection.tar
```

Quando necessário, o script de configuração do ambiente e a opção `2` colocam uma versão de `gsnet.so` compatível com o ambiente Python ativo ao lado de `license/`.

**Se o backend filtrado usar um SDK separado ou caminho de pesos separado**, use o comando abaixo. O script instala os arquivos de acordo com `config/backends/anygrasp_filtered.yaml`.

```bash
bash scripts/anygrasp_license.sh --backend anygrasp_filtered 2 "/path/to/delivery"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Verificar a instalação</h4>

Revise o status da licença e dos pesos abaixo de `----`. `[PARTIAL]` e código de saída `3` significam que a licença está pronta e os pesos de detecção ainda estão faltando. Quando você tiver os pesos, passe o caminho para `checkpoint_detection.tar` diretamente para a opção `2`. Se o script relatar `[ERROR]`, verifique a causa informada, como incompatibilidade de ID da máquina ou pesos ilegíveis. Execute novamente a verificação de ambiente do AnyGrasp.

```bash
bash scripts/check_env.sh --backend anygrasp
```

Quando a verificação for concluída com êxito, use a visualização da câmera AnyGrasp na Seção 5 para verificar o carregamento do modelo e a inferência.

</div>
</div>

</div>

## 2. Visualizar quadros da câmera e candidatos de preensão

Execute `conda activate rebot` antes de iniciar os exemplos. Eles usam `scripts/run_python.sh` para executar o Python a partir desse ambiente. Por padrão, o lançador isola `rebot` de `PYTHONPATH`, `LD_LIBRARY_PATH` e pacotes Python do usuário herdados, para que dependências do ROS Humble ou de outros ambientes não sejam carregadas. [Python launcher](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#python-launcher)

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Gravar um quadro RGB-D</h4>

Conecte a câmera e grave um quadro. O comando deve gravar um arquivo `.npz`.

```bash
bash examples/rgbd_capture/run.sh --output "outputs/rgbd/frame-$(date +%s%N).npz"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Abrir a visualização OBB filtrada</h4>

Coloque o alvo no centro da imagem e abra a visualização OBB filtrada. O exemplo usa `yellow banana` como padrão. Use `--target-class` para selecionar outra classe da lista configurada. Este comando se conecta apenas à câmera.

```bash
bash examples/obb_filtered/run.sh
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Comparar candidatos de preensão</h4>

Pressione **G** na janela de imagem para salvar uma captura e comparar os candidatos brutos e filtrados para o mesmo quadro. Confirme que a máscara cobre o alvo e que o centro de preensão filtrado e o eixo de abertura do gripper são adequados ao objeto. Pressione **Q** ou **Esc** para sair. Para inspecionar a qualidade da segmentação ou da nuvem de pontos, execute `bash examples/camera_check/run.sh --target-class "yellow banana"`. [Filtered OBB details](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/obb_filtered.md)

</div>
</div>

</div>

## 3. Executar a calibração mão‑olho

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Preparar o quadro de calibração</h4>

Baixe `aruco_100mm.pdf` e imprima em escala de 100%. Meça o comprimento do lado do quadrado preto. Em `config/default.yaml`, defina `calibration.aruco.marker_length_m` para esse comprimento em metros. O comprimento padrão é `0.100` m e o ID do marcador é `0`. Fixe o quadro à superfície de trabalho onde a câmera possa vê‑lo a partir de várias poses. [Download the 100 mm ArUco board (PDF)](https://raw.githubusercontent.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/main/examples/hand_eye/boards/aruco_100mm.pdf)

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Verificar a detecção do marcador</h4>

Verifique o marcador com a câmera. O terminal informa quantos de 10 quadros contêm uma detecção do marcador configurado. Se a detecção for inconsistente, ajuste a iluminação, a distância ou o ângulo do quadro.

```bash
bash examples/hand_eye/run.sh --check-marker
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Verifique a conexão do braço</h4>

No arquivo `sdk/reBotArm_control_py/config/rebotarm.yaml`, confirme que `hardware_yaml: rebotarm_rs.yaml` está definido. Verifique a interface CAN e o modelo cinemático para esse perfil de hardware. Substitua o `can0` de exemplo pelo nome da interface que você configurou. [B601-RS control SDK and CAN setup](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/)

```bash
ip -details link show can0
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>Execute a calibração automática</h4>

:::warning
A calibração automática move o braço ao longo de trajetórias predefinidas. Fixe a base, desobstrua todo o envelope de movimento e deixe folga suficiente no cabo da câmera. Esteja pronto para cortar a alimentação dos atuadores, se necessário. Você pode fazer backup de um `hand_eye.npz` existente antes de recalibrar.
:::

Inicie a calibração automática. O programa associa poses do efetuador final com poses do marcador observadas pela câmera. Após coletar as amostras, ele resolve a transformação fixa da câmera para o efetuador final.

```bash
bash examples/hand_eye/run.sh
```

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/Cal.gif" alt="Demonstração de calibração automática mão-olho do reBot Arm B601-RS" width={1138} height={640} loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4>Verifique o resultado da calibração</h4>

Confirme que o terminal relata `[OK] Saved to .../hand_eye.npz` para a execução atual. Se o script relatar menos de 15 amostras válidas, ajuste a posição da placa ou a iluminação para que o marcador fique visível a partir de mais poses e execute a calibração novamente.

O arquivo de calibração da Gemini 336 é `config/calibration/orbbec_gemini336/hand_eye.npz`. Para outras câmeras, a saída vai para o diretório de modelo correspondente em `config/calibration/`. Em `config/default.yaml`, verifique `calibration.hand_eye_path`. Caminhos relativos são resolvidos a partir de `config/`. Em seguida, verifique as dependências do braço e o arquivo de calibração.

```bash
bash scripts/check_env.sh --backend obb --robot
```

</div>
</div>

</div>

## 4. Execute uma preensão OBB filtrada

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Verifique o alvo e as configurações do braço</h4>

Confirme que a visualização encontra o alvo de forma consistente. Verifique `robot.ready_pose`, a orientação do gripper e os limites do espaço de trabalho. Se você tiver modificado o gripper, verifique também `planning.T_grasp_tcp`.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Execute a preensão</h4>

:::warning
`--execute` habilita o braço e o move para a pose de prontidão na inicialização. Pressionar **G** inicia a preensão. Antes de executar o comando, confirme que a área de movimento está livre de pessoas, cabos e obstáculos.
:::

```bash
bash examples/obb_filtered/run.sh --execute --target-class "yellow banana"
```

Aguarde o braço parar na pose de prontidão. Pressione **G** na janela de imagem para capturar a cena atual e selecionar um candidato de preensão filtrado que passe nas verificações. O programa ignora a tentativa se não encontrar alvo ou candidato executável. Pressione **Q** ou **Esc** para encerrar a sessão.

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/obb.gif" alt="Demonstração de preensão OBB filtrada do reBot Arm B601-RS" loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Inspecione os resultados</h4>

Abra o diretório de execução impresso no terminal. O diretório `result/snapshot-NNN/` contém o `frame.npz` capturado, candidatos e planos de preensão em `result.json`, e os resultados bruto versus filtrado em `comparison.png` e `comparison.json`. Após o início de uma tentativa de preensão, o programa também grava `execution.json`. O campo `object_held` registra o status de apreensão relatado pelo controlador.

</div>
</div>

</div>

## 5. Experimente backends de preensão com nuvem de pontos

<div className={styles.page}>
<GraspingTabs defaultValue="anygrasp" queryString="grasping-backend">

<TabItem value="anygrasp" label="AnyGrasp">

<h3 id="anygrasp">AnyGrasp</h3>

Após concluir a configuração do ambiente na Seção 1 e colocar os arquivos de [AnyGrasp license and weights](#anygrasp-license-and-weights), inicie a visualização da câmera.

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana"
```

Pressione **G** na janela de imagem para salvar um snapshot. O painel esquerdo mostra a referência de nuvem de pontos bruta e o painel direito mostra o resultado filtrado. A ordem de classes padrão é `pen`, `orange` e `yellow banana`. Pressione **1**, **2** ou **3** na janela de imagem para alternar as classes. Após verificar os candidatos, pressione **Q** ou **Esc** para sair da visualização.

Depois de verificar a visualização e a calibração mão-olho, verifique as dependências do braço.

```bash
bash scripts/check_env.sh --backend anygrasp --robot
```

:::warning
O comando de preensão habilita o braço e o move para a pose de prontidão na inicialização. Antes de executá-lo, remova pessoas, cabos e obstáculos da área de movimento.
:::

Quando as verificações forem aprovadas, execute o seguinte comando para iniciar a preensão com o braço.

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana" --execute
```

Aguarde o braço parar na pose de prontidão. Pressione **G** na janela de imagem para capturar um quadro novo e executar um candidato do painel direito que passe nas verificações de espaço de trabalho e IK. Pressione **Q** ou **Esc** para encerrar a sessão. [Filtered AnyGrasp details](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/anygrasp_filtered/README.md)

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/any.gif" alt="Demonstração AnyGrasp 1" width={1138} height={640} loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/anygrasp.gif" alt="Demonstração AnyGrasp 2" width={1024} height={640} loading="lazy" />
  </figure>
</div>

</TabItem>

<TabItem value="graspnet" label="GraspNet-Baseline">

<h3 id="graspnet-baseline">GraspNet-Baseline</h3>

Depois de configurar o ambiente e os pesos do GraspNet-Baseline na Seção 1, verifique as dependências e abra a visualização da câmera.

```bash
bash scripts/check_env.sh --backend graspnet
bash examples/graspnet_camera/run.sh
```

Pressione **G** ou **Space** na janela da câmera para gerar candidatos e, em seguida, inspecione-os na janela de nuvem de pontos. Pressione **R** para retomar o fluxo ao vivo. Após verificar os candidatos, pressione **Q** ou **Esc** para sair da visualização.

Conclua a calibração mão-olho e a verificação da conexão do braço na Seção 3 e, em seguida, verifique as dependências para preensão com o GraspNet.

```bash
bash scripts/check_env.sh --backend graspnet --robot
```

:::warning
O comando de preensão habilita o braço e o move para a pose de prontidão na inicialização, mesmo com `--dry-run`. Antes de executá-lo, remova pessoas, cabos e obstáculos da área de movimento.
:::

Quando as verificações forem aprovadas, execute o seguinte comando para iniciar a preensão com o braço.

```bash
bash examples/graspnet_grasp/run.sh --target-class "yellow banana"
```

Aguarde o braço parar na pose de prontidão. Pressione **G** ou **Space** na janela de imagem para executar a inferência e realizar uma preensão alcançável. Pressione **Q** ou **Esc** para encerrar a sessão e retornar o braço à posição inicial. [GraspNet arm example](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/graspnet_grasp/README.md)

</TabItem>

</GraspingTabs>
</div>

## Solução de problemas

- **A câmera não consegue gravar.** Verifique `camera.type`, o número de série e as permissões de USB. Confirme que a câmera suporta a resolução e a taxa de quadros selecionadas e, em seguida, execute novamente o comando de captura na Seção 2.
- **O braço permanece parado após pressionar G.**
  - **OBB filtrado ou AnyGrasp.** Confirme que o comando inclui `--execute`. Verifique `result.json` e os logs do terminal para ver se o detector perdeu o alvo, se a nuvem de pontos falhou nas verificações de qualidade, se o candidato estava fora do espaço de trabalho ou se o IK não encontrou solução.
  - **GraspNet-Baseline.** Confirme que você está executando `examples/graspnet_grasp/run.sh`. Com `--dry-run`, o programa ignora o movimento de preensão. Verifique o terminal para ver se há calibração mão-olho ausente ou inválida ou indicação de que nenhum candidato é alcançável.
- **O candidato parece correto na imagem, mas a preensão está deslocada.** Verifique se o suporte da câmera se moveu, se a matriz mão-olho pertence à câmera atual e se `planning.T_grasp_tcp` corresponde ao gripper atual. Após confirmar um deslocamento ao longo da direção de aproximação, use `--insertion-depth-mm` com os backends filtrados para substituir a distância adicional de inserção para a execução, em milímetros. O OBB filtrado tem padrão de 0 mm e o AnyGrasp filtrado tem padrão de 5 mm. Verifique o candidato e a folga entre o gripper e a mesa após cada ajuste.
- **A verificação de ambiente relata `[MANUAL]`.** O código de saída `3` significa que você precisa fornecer manualmente os itens restantes, como a licença AnyGrasp, pesos de detecção ou matriz mão-olho. Adicione os arquivos e execute novamente a verificação com os mesmos argumentos. [Environment and SDK troubleshooting](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md)
- **Um script mais antigo está faltando.** Inicie cada exemplo com o arquivo `run.sh` em seu diretório. Inicializadores de compatibilidade estão em `scripts/legacy/`, por exemplo `bash scripts/legacy/anygrasp.sh`. Execute `bash scripts/run_python.sh -m rebot_grasp --help` para ver as opções de CLI do projeto.

Para a lista completa de pontos de entrada e convenções de coordenadas, consulte o [índice de exemplos](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/README.md) e a [arquitetura do projeto](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/architecture.md).
