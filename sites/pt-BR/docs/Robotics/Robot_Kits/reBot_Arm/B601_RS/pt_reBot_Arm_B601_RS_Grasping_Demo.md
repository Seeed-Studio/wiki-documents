---
description: Este tutorial aborda duas implementações de preensão visual para o reBot Arm B601-RS, incluindo um pipeline YOLO/OBB e um fluxo de preensão baseado em ROS2.
title: Demonstração de Preensão Visual com reBot Arm B601-RS
keywords:
  - reBot Arm
  - B601-RS
  - Preensão
  - RGB-D
  - YOLO
  - Calibração Mão-Olho
  - Robô
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
slug: /rebot_arm_b601_rs_grasping_demo
last_update:
  date: 2026-09-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-09-10'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_grasping_demo/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Demonstração de Preensão Visual com reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="Licença: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Versão do Python" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Plataforma" />
    <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Câmera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>Percepção de Profundidade · Detecção de Objetos · Calibração Mão-Olho · Preensão Autônoma · Totalmente Open Source</strong>
</p>

Esta página aborda duas demonstrações de preensão visual com implementações diferentes:

- **Método 1 de preensão visual**: um pipeline YOLO + RGB-D + SDK Python que cobre configuração de ambiente, integração da câmera, calibração mão-olho e depuração da preensão.
- **Método 2 de preensão visual**: um fluxo ROS2 + YOLOE que inicia o braço, a câmera Gemini 2 / D405 e os nós de preensão em vários terminais para pegar e colocar objetos.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="Demonstração de preensão visual com reBot Arm B601-RS" />
</p>

## Método 1 de preensão visual

### 1. Características do projeto

1. **Estimativa direta de pose de preensão a partir de YOLO + OBB**
   O pipeline usa diretamente caixas de detecção ou retângulos de área mínima OBB e toma o eixo curto como direção de abertura do gripper, evitando o processamento complexo de nuvens de pontos 3D.
2. **Estimativa de pose de preensão 6D com GraspNet-Baseline (opcional)**
   O projeto também oferece suporte ao GraspNet-Baseline (`graspnet/graspnet-baseline`) para estimativa de pose de preensão 6D a partir de nuvens de pontos RGB-D, com caixas delimitadoras YOLO usadas para selecionar candidatos-alvo para experimentos de preensão mais complexos.
3. **Integração do driver do braço robótico e do gripper**
   O script principal de preensão é baseado no controlador de braço robótico e de pose final de `reBotArm_control_py`, com um auxiliar de preensão leve para abertura do gripper, preensão com controle de força e leitura da pose TCP.
4. **Open Source e Extensível**
   Todo o código-fonte é aberto, e os usuários podem personalizar algoritmos de controle e efeitos com base em suas próprias necessidades.

### 2. Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/)

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Especificação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Modelo do Braço Robótico</td>
      <td>reBot Arm B601-RS</td>
    </tr>
    <tr>
      <td>Graus de Liberdade</td>
      <td>6-DOF + Gripper</td>
    </tr>
    <tr>
      <td>Modelo da Câmera</td>
      <td>Orbbec Gemini 2 / Intel RealSense D435i / D405</td>
    </tr>
    <tr>
      <td>Método de Detecção</td>
      <td>YOLO + Retângulo de Área Mínima OBB</td>
    </tr>
    <tr>
      <td>Método de Comunicação</td>
      <td>Barramento CAN via adaptador USB2CAN; conexão de câmera USB 3.0</td>
    </tr>
    <tr>
      <td>Tensão de Operação</td>
      <td>48V CC</td>
    </tr>
    <tr>
      <td>Plataforma Host</td>
      <td>PC com Ubuntu 22.04+</td>
    </tr>
    <tr>
      <td>Versão Recomendada do Python</td>
      <td>Python 3.10</td>
    </tr>
  </tbody>
</table>

### 3. Lista de materiais (BOM)

| Componente | Quantidade | Incluído |
|-----------|----------|----------|
| Braço Robótico reBot Arm B601-RS | 1 | ✅ |
| Gripper | 1 | ✅ |
| Ponte Serial USB2CAN | 1 | ✅ |
| Adaptador de Energia (48V) | 1 | ✅ |
| Cabo USB-C / Comunicação | 1 | ✅ |
| Câmera de Profundidade RGB-D | 1 | ✅ |
| Conector da Câmera / Suporte de Montagem | 1 | ✅ |

#### Fiação

1. Conecte a câmera de profundidade ao host via USB 3.0.
2. Conecte o adaptador USB2CAN ao barramento CAN do braço.
3. Certifique-se de que a fonte de alimentação de 48V, a câmera e o braço robótico estejam todos conectados com segurança.
4. Defina as permissões:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. Requisitos de ambiente

| Item | Requisito |
|------|-------------|
| Sistema Operacional | Ubuntu 22.04+ |
| Python | 3.10 |

### 5. Etapas de instalação

#### Etapa 0. Conclua primeiro a preparação básica do braço robótico

Antes de iniciar este tutorial, conclua o conteúdo em [reBot Arm B601-RS Guia de início rápido](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/), incluindo montagem do braço robótico, inicialização do ponto zero, configuração de ID dos motores e verificações básicas de conectividade.

#### Etapa 1. Clonar o repositório

Dê preferência ao repositório oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

#### Etapa 2. Criar e configurar o ambiente conda

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

Se você quiser usar um nome de ambiente diferente, substitua `rebotarm` no comando pelo nome de sua preferência.

#### Etapa 3. Instalar o SDK do braço robótico

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Se `pip install -e .` relatar `Multiple top-level packages discovered in a flat-layout`, adicione descoberta explícita de pacotes a `pyproject.toml` em `reBotArm_control_py` e, em seguida, execute `pip install -e .` novamente:

```toml
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

As configurações B601 DM e RS são selecionadas por meio dos arquivos de configuração do SDK. Para o B601-RS, confirme o seguinte em `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

Os programas de preensão visual leem essa configuração do SDK e selecionam automaticamente o modo de controle do braço e os parâmetros do gripper correspondentes.

#### Etapa 4. Instalar o SDK da câmera de profundidade

Este projeto oferece suporte a câmeras de profundidade RGB-D como Orbbec Gemini 2 e RealSense D435i / D405. Instale o SDK que corresponde à sua câmera; se o seu ambiente já consegue importar o driver da câmera, você pode pular esta etapa.

**Orbbec Gemini 2**

A câmera de profundidade Orbbec Gemini 2 depende de `pyorbbecsdk`, o wrapper Python para o Orbbec SDK v2. Dê preferência à instalação primeiro do pacote Python pré-compilado:

**Opção 1: Instalar via pip (recomendado)**

```bash
pip install pyorbbecsdk2
```

**Opção 2: Obter a partir do GitHub**

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Usuários da China continental podem usar:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Ao instalar a partir do código-fonte, certifique-se de que a extensão nativa tenha sido compilada com CMake primeiro, de modo que `install/lib` contenha `pyorbbecsdk*.so` e as bibliotecas compartilhadas Orbbec antes de executar `pip install -e .`.

Se todos os métodos de instalação acima falharem, consulte a documentação oficial da Orbbec abaixo.

**Verificar instalação**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

Para uso pela primeira vez, é recomendável instalar as regras udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**RealSense D435i / D405**

As câmeras RealSense dependem de `pyrealsense2`. Normalmente você pode instalá-lo diretamente com pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Se o seu sistema precisar da cadeia de ferramentas completa RealSense ou de regras udev, instale `librealsense2` seguindo a documentação oficial do RealSense SDK.

**Resumo de Recursos do SDK**

| Recurso | Link |
|----------|------|
| Página do Produto Gemini 2 | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| Recursos de Desenvolvimento | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| Documentação da API do SDK v2 | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| Documentação do pyorbbecsdk | https://orbbec.github.io/pyorbbecsdk/index.html |
| Wrapper ROS2 | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| Intel RealSense SDK | https://github.com/realsenseai/librealsense |

#### Etapa 5. Configurar o GraspNet (opcional)

Você não precisa do GraspNet para `scripts/main.py` ou `scripts/ordinary_grasp_pipeline.py`. Configure-o apenas quando quiser executar `scripts/graspnet_camera_demo.py` ou `scripts/grasp.py`, que exigem GraspNet, PyTorch com suporte a CUDA, os operadores CUDA PointNet2/knn e um checkpoint pré-treinado.

As extensões `pointnet2` / `knn` do GraspNet exigem um compilador CUDA. Antes de começar, certifique-se de que o ambiente ativo consiga encontrar `nvcc` e verifique se a versão CUDA relatada por `nvcc` corresponde à versão CUDA usada para compilar o PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Se `nvcc` estiver ausente ou se a versão CUDA relatada por `nvcc` não corresponder a `torch.version.cuda`, instale um compilador CUDA que corresponda à versão CUDA atual do seu PyTorch. Por exemplo, se o PyTorch relatar `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

Você também pode instalar uma compilação do PyTorch que corresponda à sua versão atual do `nvcc`. As duas versões devem corresponder, caso contrário, a compilação de `pointnet2` / `knn` falhará com `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`.

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
Observação: se você seguir a documentação do repositório oficial graspnet-baseline e usar `python setup.py install`, podem ocorrer erros relacionados a CUDA / PyTorch. Recomendamos usar `pip install . --no-build-isolation` para que a extensão seja compilada com a configuração de PyTorch e CUDA já instalada no ambiente conda ativo.
:::

:::tip
Se a compilação falhar com `fatal error: cusparse.h: No such file or directory`, execute `find $CONDA_PREFIX -name cusparse.h` e certifique-se de que o diretório que contém `cusparse.h` esteja incluído em `CPATH` / `CPLUS_INCLUDE_PATH`. Se você instalou os cabeçalhos CUDA a partir do pacote conda `cuda-toolkit`, o caminho de include geralmente é `$CONDA_PREFIX/targets/x86_64-linux/include` em vez do caminho `nvidia/cu13/include` do pip mostrado acima.
:::

:::tip
Além disso, dependências antigas da API do GraspNet ainda podem usar o nome de pacote obsoleto `sklearn`. O comando `sed` o substitui pelo nome de pacote atualmente recomendado `scikit-learn` para evitar `The 'sklearn' PyPI package is deprecated` durante a instalação. A menos que você também atualize as dependências antigas da API do GraspNet, mantenha a restrição `numpy==1.23.4` porque `transforms3d==0.3.1` ainda usa aliases antigos do NumPy como `np.float`.
:::

**Configurar modelo pré-treinado**

Baixe os pesos oficiais pré-treinados do GraspNet a partir do repositório oficial graspnet-baseline [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A) e então coloque `checkpoint-rs.tar` em:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Em seguida, verifique em `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

O campo `checkpoint` suporta três formas: um nome de arquivo é resolvido em `sdk/graspnet-baseline/checkpoints/`; um caminho relativo é resolvido a partir da raiz do projeto; um caminho absoluto é usado diretamente.

### 6. Estrutura de diretórios

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
│       └── grasp_driver.py       # Lightweight grasp helper based on arm SDK
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

### 7. Calibração mão-olho

Antes de executar o pipeline completo de preensão, conclua primeiro a calibração mão-olho Eye-in-Hand.

Antes de executar o script de calibração, inicialize e verifique a interface CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

```bash
python scripts/collect_handeye_eih.py
```

Antes de executá-lo, certifique-se de que o seguinte parâmetro de tamanho do ArUco em `config/default.yaml` corresponda ao marcador impresso real:

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

No modo automático, o braço percorre 50 poses predefinidas e registra uma amostra sempre que o marcador ArUco é detectado de forma estável. Mesmo que você interrompa o processo com `c` ou `q`, o script ainda tenta calcular o resultado da calibração a partir das amostras coletadas.

Se você quiser mover o braço robótico manualmente durante a coleta, use o modo manual:

```bash
python scripts/collect_handeye_eih.py --manual
```

No modo manual, o braço entra em modo de compensação de gravidade. Mova o efetuador final para um ângulo de visão adequado, pressione `Enter` para capturar e pressione `c` ou `q` para finalizar e calcular o resultado.

:::tip
Se, após a calibração, você perceber que a precisão de preensão do braço robótico não atende aos seus requisitos, pode definir os parâmetros `X` (frente-trás), `Y` (esquerda-direita), `Z` (cima-baixo) em `config/default.yaml` sob `calibration.hand_eye_compensation_m` para fornecer compensação de posição.
:::

O resultado da calibração é salvo em:

```text
config/calibration/<camera_type>/hand_eye.npz
```

A contagem de amostras recomendada é de pelo menos 5 amostras, sendo 15 ou mais o ideal.

### 8. Execução e depuração

#### 1. Verificar apenas a detecção de objetos

```bash
python scripts/object_detection.py
```

Se você precisar alterar o modelo ou as classes de detecção, modifique `config/default.yaml`:

```yaml
yolo:
  model_name: "yoloe-26l-seg.pt"
  device: "cpu"
  use_world: true
  custom_classes:
    - "yellow banana"
    - "water bottle"
    - "cup"
```

Esta etapa é útil para confirmar:

- Se a câmera abre corretamente
- Se o modelo YOLO é carregado corretamente
- Se a detecção de objetos com YOLO funciona como esperado

#### 2. Verificar apenas a estimativa de preensão

```bash
python scripts/ordinary_grasp_pipeline.py
```

Se você precisar ajustar a frequência de inferência de preensão ou a distância de recuo pré-preensão, modifique:

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.5
    pregrasp_offset_m: 0.080
    insertion_depth_m: 0.015
    min_base_z_m: 0.00
```

Este script não se conecta ao braço robótico. Ele é usado apenas para verificar:

- Se o OBB ou o retângulo de área mínima é razoável
- Se o ponto de preensão está próximo da área central do alvo
- Se a direção do eixo curto corresponde à direção esperada de abertura da garra

Controles principais:

- Botão esquerdo do mouse: inspecionar a profundidade no pixel selecionado
- `G`: imprimir a pose de preensão atual considerada a melhor
- `Q` / `Esc`: sair

#### 3. Executar o programa principal de preensão

```bash
python scripts/main.py
```

Se você quiser apenas validar a pose alvo sem mover o braço robótico:

```bash
python scripts/main.py --dry-run
```

Recomenda-se verificar primeiro a pose e o espaço de trabalho alcançável com `--dry-run` antes de executar uma preensão real.

Fluxo principal do programa:

1. Inicializar a câmera RGB-D e confirmar que o fluxo de imagem está disponível.
2. Habilitar o braço robótico e a garra.
3. Mover para a pose de prontidão. Se você quiser alterar a pose inicial de prontidão, modifique `config/default.yaml`:

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 0.7
    duration: 3.0
```

4. Detectar alvos sobre a mesa em tempo real.
5. Estimar a pose de preensão a partir do eixo curto.
6. Pressionar `G` para capturar o quadro atual e executar a preensão.

Teclas em tempo de execução:

- `G`: agarrar o melhor alvo atual
- `R`: retomar a visualização ao vivo
- `Q` / `Esc`: sair

#### 4. `scripts/set.py` — Programa de pegar e colocar

Função: pegar a banana e colocá-la na caixa.

Fluxo concluído:

1. Inicialização da câmera e do braço, mover para a posição de prontidão
2. Visualização em tempo real da câmera + detecção de objetos YOLO e segmentação por instância
3. Pressionar `G` para congelar o quadro, calcular a pose alvo do braço via transformação mão-olho
4. O braço se move para agarrar a banana e erguer
5. O braço coloca a banana na caixa e retorna à pose inicial
6. Pressionar `Q` para sair do sistema, o braço retorna à posição zero

#### 5. Demo de estimativa de câmera com GraspNet (opcional)

```bash
python scripts/graspnet_camera_demo.py
```

Este script executa a estimativa de pose de preensão 6D do GraspNet usando apenas a câmera RGB-D, sem conectar ao braço robótico. Ele mantém uma visualização ao vivo da câmera, usa caixas delimitadoras do YOLO para selecionar a área alvo e filtra candidatos de cena completa viáveis do GraspNet pela bbox do alvo.

Controles principais:

- `G` / `Space`: executar inferência do GraspNet no quadro atual
- `R`: retomar a visualização ao vivo
- `Q` / `Esc`: sair

Após a inferência, o Open3D pode visualizar a nuvem de pontos e os candidatos de preensão.

#### 6. Programa de preensão robótica com GraspNet (opcional)

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

Este script conecta a estimativa do GraspNet ao fluxo de execução do braço robótico. O YOLO seleciona o alvo, o GraspNet gera uma pose de preensão 6D, a calibração mão-olho a transforma para o referencial da base do robô e o script verifica a alcançabilidade de IK antes de executar a sequência de movimentos de pré-preensão, preensão e recuo.

Executar `python scripts/grasp.py` inicia o fluxo completo de preensão robótica com GraspNet e de fato controla o braço robótico. `--dry-run` apenas imprime a pose alvo e o resultado de filtragem de candidatos sem executar o movimento de preensão. `--target-class "light blue coffee cup"` especifica a classe alvo do YOLO e apenas filtra e agarra candidatos do GraspNet para essa classe.

### 9. FAQ

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

Isso geralmente significa que as dependências do SDK do braço robótico não estão instaladas no ambiente Python atual. Verifique:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

<h4>2. Pressionar <code>G</code> não executa a preensão</h4>

Causas comuns:

- `hand_eye.npz` não existe
- O modo de calibração mão-olho não é `eye_in_hand`
- A pose alvo não é alcançável pelo IK

Recomenda-se executar:

```bash
python scripts/main.py --dry-run
```

<h4>3. A profundidade de preensão é instável</h4>

Você pode tentar ajustar:

- `grasp_pipeline.grasp.depth_quantile`
- A altura de instalação da câmera em relação à área de trabalho
- As propriedades reflexivas da superfície do alvo

<h4>4. O GraspNet informa que <code>pointnet2_utils</code> não pode ser importado de <code>pointnet2</code></h4>

Isso geralmente significa que a extensão CUDA local em `sdk/graspnet-baseline/pointnet2` não foi compilada no ambiente conda ativo, ou que o Python está resolvendo um pacote `pointnet2` diferente. Certifique-se de que o ambiente do projeto esteja ativo e, em seguida, reconstrua `pointnet2` e `knn` nesse mesmo ambiente:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Verifique:

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

<h4>5. Problemas de compatibilidade de arquitetura CUDA em GPUs mais recentes ao executar o GraspNet</h4>

Se você vir `no kernel image is available for execution on the device`, ou se o PyTorch informar que a capacidade CUDA da GPU atual não é suportada, é provável que o wheel do PyTorch instalado não inclua kernels CUDA para essa arquitetura de GPU. Instale uma compilação do PyTorch que ofereça suporte à sua arquitetura atual de CUDA/GPU e, em seguida, reconstrua as extensões CUDA locais do GraspNet.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Se você precisar especificar manualmente a arquitetura de compilação, defina `TORCH_CUDA_ARCH_LIST` antes de recompilar. Escolha o valor de acordo com a arquitetura da sua GPU e a versão do PyTorch/CUDA.

<h4>6. Inferência do GraspNet informa <code>RuntimeError: CPU not supported</code></h4>

Os operadores de amostragem em `pointnet2` oferecem suporte apenas a tensores CUDA. Confirme que o CUDA está disponível, que a rede GraspNet e a nuvem de pontos de entrada estão na GPU e que `pointnet2` / `knn` foram compilados com a versão do PyTorch no ambiente ativo.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Se a saída for `False`, corrija primeiro a instalação do CUDA / PyTorch. Se for `True`, mas o erro permanecer, reconstrua `pointnet2` e `knn`.

## Método 2 de preensão visual

### 1. Apresentação do projeto

Esta solução usa **ROS2** e **YOLO** no reBot Arm B601-RS para detecção de objetos, preensão e colocação. O sistema inicia o braço, a câmera de profundidade e os nós de preensão em terminais separados.

A câmera de profundidade atualmente oferece suporte à **Orbbec Gemini 2** e à **Intel RealSense D405**. Este fluxo não exige uma placa de calibração para a calibração mão-olho. Devido a tolerâncias de montagem e das peças impressas, cada braço pode apresentar um pequeno deslocamento na preensão.

### 2. Instalação do ambiente

#### Etapa 1. Instalar o workspace ROS2 do braço robótico

Primeiro, conclua a instalação e a compilação do workspace `rebotarm_ros2` seguindo [Integração ROS2 do reBot Arm B601-RS](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_ros2_integration/).

#### Etapa 2. Instalar a câmera

Escolha uma das câmeras abaixo e expanda a seção correspondente.

<details className="content-details">
<summary>Clique para expandir a instalação do Gemini 2</summary>

Clone o SDK ROS2 da Orbbec no workspace e mude para o branch `v2-main`:

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Compile o workspace:

```bash
cd ~/rebotarm_ros2
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

Instale as regras udev:

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

</details>

<details className="content-details">
<summary>Clique para expandir a instalação da D405</summary>

1. Clone o SDK RealSense e mude para `v2.58.1`:

```bash
cd ~
git clone https://github.com/realsenseai/librealsense.git
cd librealsense
git checkout v2.58.1
```

2. Instale as regras udev:

```bash
sudo apt install -y v4l-utils
cd ~/librealsense
./scripts/setup_udev_rules.sh
```

3. Compile e instale o SDK:

:::tip
Se houver proxy, desative-o antes de configurar novamente:

```bash
unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY all_proxy ALL_PROXY
```
:::

```bash
cd ~/librealsense
mkdir -p build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)
sudo make install
sudo ldconfig
```

4. Compile o pacote ROS2 do RealSense:

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
cd ~/rebotarm_ros2
colcon build --cmake-args -DUSE_LIFECYCLE_NODE=OFF
```

</details>

#### Etapa 3. Importar o pacote de preensão visual

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
cd ~/rebotarm_ros2
colcon build --symlink-install
```

#### Etapa 4. Instalar o ambiente YOLO / YOLOE

`grasp_yolo` chama o Ultralytics YOLOE a partir do Python. Use um ambiente conda separado e não use o `/usr/bin/python3` do sistema.

**Criar o ambiente**

```bash
conda create -n yolo python=3.10
conda activate yolo

pip install -U ultralytics
pip install "numpy==1.26.4" transforms3d

# YOLOE open-vocabulary classes require the Ultralytics CLIP package, not the PyPI clip package
pip install git+https://github.com/ultralytics/CLIP.git
```

Se você tiver uma GPU NVIDIA, primeiro confirme que o CUDA está disponível. Se a saída for `False`, instale uma combinação compatível de CUDA / PyTorch. Também é possível continuar na CPU, mas a taxa de quadros da detecção será menor:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Verifique o YOLOE:

```bash
python -c "from ultralytics import YOLOE; print('YOLOE OK')"
```

**Baixar os pesos para `~/rebot_visual_model`**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP (required by YOLOE set_classes, about 242MB)
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# YOLOE segmentation weights can also download on first run; placing them here is recommended
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

#### Etapa 5. Compilar o workspace

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
colcon build --symlink-install
source ~/rebotarm_ros2/install/setup.bash
```

O ambiente de preensão visual está pronto. Em cada novo terminal, faça source do seguinte antes dos comandos de preensão visual:

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

### 3. Executar o projeto

Antes de iniciar, confirme que o braço está ligado, que a interface CAN é `can0` e que a Gemini 2 ou a D405 está conectada via USB. Em seguida, suba o CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Inicie cada parte em um terminal separado para deixar a lógica de preensão mais clara. Gemini 2 e D405 usam comandos de inicialização diferentes; escolha os da sua câmera. Se quiser inicialização em um clique, você pode escrever o próprio script.

#### Terminal A — Iniciar o braço + RViz

<details className="content-details">
<summary>Clique para expandir Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_camera.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>Clique para expandir D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d405.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

#### Terminal B — Iniciar a câmera

<details className="content-details">
<summary>Clique para expandir Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash

ros2 launch orbbec_camera gemini2.launch.py
```

</details>

<details className="content-details">
<summary>Clique para expandir D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x360x30 \
  depth_module.color_profile:=640x360x30
```

</details>

#### Terminal C — Ir para a pose de observação + detecção YOLO

Primeiro execute `conda activate yolo`. Se o nome do ambiente não for `yolo`, troque pelo nome real do seu ambiente conda.

<details className="content-details">
<summary>Clique para expandir Gemini 2</summary>

Altere o caminho do Python para o ambiente YOLO que você criou.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:=~/rebot_visual_model/yoloe-26s-seg.pt \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=0 \
  -p grasp_z_offset_m:=0.02 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>Clique para expandir D405</summary>

Altere o caminho do Python para o ambiente YOLO que você criou.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args 
-p yolo_model:=~/rebot_visual_model/yoloe-26s-seg.pt 
-p color_topic:=/camera/camera/color/image_raw 
-p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw 
-p color_info_topic:=/camera/camera/color/camera_info 
-p optical_frame:=camera_color_optical_frame 
-p target_class:="cube" 
-p place_class:="box" 
-p yolo_device:=gpu 
-p grasp_z_offset_m:=0.01 
-p place_z_offset_m:=0.1 
-p grasp_x_offset_m:=-0.04 
-p move_to_observation_on_start:=true 
-p auto_publish_on_detect:=true
```

</details>

| Parâmetro | Descrição |
|-----------|-----------|
| `yolo_device:=gpu` | Usa a GPU; mude para `cpu` se não houver GPU dedicada. Também pode usar `yolo_device:=0` para a GPU 0 |
| `target_class` | Nome de classe de texto YOLOE do objeto a ser pego; altere conforme o objeto real. Suporta as classes padrão do YOLO |
| `place_class` | Nome de classe de texto YOLOE do alvo de colocação; altere conforme o objeto real. Suporta as classes padrão do YOLO |
| `grasp_x_offset_m` | Deslocamento frente/trás em `base_link`; valor negativo puxa para trás |
| `grasp_z_offset_m` | Ajuste fino da altura de preensão. O padrão é para o gripper flexível, mais longo que o gripper comum |
| `place_z_offset_m` | Elevação extra na colocação, para controlar a que altura o objeto é solto |

#### Terminal D — Preensão e colocação em um clique

O atraso padrão do gatilho é de 3 segundos.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

Para alterar o atraso, acrescente um parâmetro. Por exemplo, disparar após 5 segundos:

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

#### Terminal E — Retornar à posição inicial (opcional)

Na versão mais nova do `rebotarm`, pressionar `Ctrl + C` no terminal faz o braço voltar automaticamente à posição inicial. Para fazer isso manualmente:

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger {}
```

## Contato

- Suporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- Página do projeto: [GitHub](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- Fórum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referências

- [reBot Arm B601-RS Guia de início rápido](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/)
- [Integração ROS2 do reBot Arm B601-RS](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_ros2_integration/)
- [rebot_visual_grasp](https://github.com/xiehuangbao888/rebot_visual_grasp)
- [OrbbecSDK_ROS2](https://github.com/xiehuangbao888/OrbbecSDK_ROS2)
- [Página do produto Orbbec Gemini 2](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Recursos de desenvolvimento Orbbec](https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Guia da API do Orbbec SDK v2](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [Repositório pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [Documentação do pyorbbecsdk](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [realsense-ros](https://github.com/xiehuangbao888/realsense-ros)
- [Intel RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Documentação Graspnet(Anygrasp)](https://graspnet.net/)
