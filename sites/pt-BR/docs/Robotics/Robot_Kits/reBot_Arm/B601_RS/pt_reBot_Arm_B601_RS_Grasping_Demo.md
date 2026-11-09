---
description: Este tutorial abrange duas implementações de preensão visual para o reBot Arm B601-RS, incluindo um pipeline YOLO/OBB e um fluxo de trabalho de preensão baseado em ROS2.
title: B601-RS com Preensão Visual
keywords:
  - reBot Arm
  - B601-RS
  - Preensão
  - RGB-D
  - YOLO
  - Calibração mão-olho
  - Robô
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
slug: /rebot_arm_b601_rs_grasping_demo
last_update:
  date: 2026-11-04
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_grasping_demo/
---
import '/src/css/rebot-wiki-style.css';

import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';

# Demonstração de Preensão Visual do reBot Arm B601-RS

<div className={styles.page}>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Adquira agora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

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
  <strong>Percepção de profundidade · Detecção de objetos · Calibração mão-olho · Preensão autônoma · Totalmente open source</strong>
</p>

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="Demonstração de preensão visual do reBot Arm B601-RS" />
</p>

## Em que as duas formas de preensão são diferentes?

Esta página apresenta duas demonstrações de preensão visual com diferentes implementações. Compare seus frameworks, requisitos de calibração e fluxos de inicialização e, em seguida, escolha um tutorial abaixo.

<div className={styles.comparison}>
  <section className={styles.methodCard} aria-label="Method 1: Python SDK">
    <span className={styles.methodNumber}>Method 01</span>
    <h3>Python SDK + YOLO / OBB</h3>
    <p>Use YOLO, uma câmera de profundidade RGB-D e o Python SDK para o fluxo de trabalho completo, desde a configuração do ambiente e integração da câmera até a calibração mão-olho e depuração da preensão.</p>
    <dl>
      <div><dt>Lógica de preensão</dt><dd>Estime poses de preensão a partir de caixas de detecção ou retângulos de área mínima OBB; opcionalmente use GraspNet para estimação de pose 6D.</dd></div>
      <div><dt>Calibração mão-olho</dt><dd>Conclua a calibração Eye-in-Hand com um marcador ArUco antes da primeira execução completa de preensão.</dd></div>
      <div><dt>Inicialização</dt><dd>Execute scripts Python para verificar detecção, estimação de pose e preensão robótica passo a passo.</dd></div>
    </dl>
  </section>
  <section className={styles.methodCard} aria-label="Method 2: ROS 2">
    <span className={styles.methodNumber}>Method 02</span>
    <h3>ROS 2 + YOLOE</h3>
    <p>Use ROS 2 e YOLOE para iniciar o braço, a câmera Gemini 2 / D405 / D435i e os nós de preensão em terminais separados para pegar e posicionar objetos.</p>
    <dl>
      <div><dt>Lógica de preensão</dt><dd>O nó de preensão visual detecta, agarra e posiciona objetos. Nomes de classes em texto especificam os alvos de preensão e posicionamento.</dd></div>
      <div><dt>Calibração mão-olho</dt><dd>Não é necessário quadro de calibração; ajuste parâmetros de deslocamento para compensar pequenas tolerâncias de montagem e de peças impressas.</dd></div>
      <div><dt>Inicialização</dt><dd>Inicie o braço, a câmera e o nó de preensão em terminais separados e, em seguida, acione a coleta e o posicionamento.</dd></div>
    </dl>
  </section>
</div>

## Escolha um método de preensão

<p className={styles.selectionHint}>Alterne as abas para ver o tutorial do método escolhido e siga suas etapas de instalação e execução.</p>

<GraspingTabs>
<TabItem value="python-sdk" label="Method 1 · Python SDK / OBB">

## Método de Preensão Visual 1

Esta rota usa **Python SDK + câmera RGB-D + YOLO / OBB** sem um workspace ROS 2. A rota padrão é adequada para objetos comuns de mesa; ative o módulo opcional GraspNet abaixo quando precisar de uma preensão 6D mais complexa.

### 1. Recursos do projeto

1. **Estimação direta da pose de preensão a partir de YOLO + OBB**
   O pipeline usa diretamente caixas de detecção ou retângulos de área mínima OBB e toma o eixo curto como direção de abertura do gripper, evitando o processamento complexo de nuvens de pontos 3D.
2. **Estimação de pose de preensão 6D GraspNet-Baseline (opcional)**
   O projeto também oferece suporte ao GraspNet-Baseline (`graspnet/graspnet-baseline`) para estimação de pose de preensão 6D a partir de nuvens de pontos RGB-D, com caixas delimitadoras YOLO usadas para selecionar candidatos-alvo para experimentos de preensão mais complexos.
3. **Integração do driver do braço robótico e do gripper**
   O script principal de preensão é baseado no braço robótico e no controlador de pose final de `reBotArm_control_py`, com um auxiliar de preensão leve para abertura do gripper, preensão com controle de força e leitura da pose TCP.
4. **Open source e extensível**
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
      <td>Modelo do braço robótico</td>
      <td>reBot Arm B601-RS</td>
    </tr>
    <tr>
      <td>Graus de liberdade</td>
      <td>6-DOF + Gripper</td>
    </tr>
    <tr>
      <td>Modelo da câmera</td>
      <td>Orbbec Gemini 2 / RealSense D435i / D405</td>
    </tr>
    <tr>
      <td>Método de detecção</td>
      <td>YOLO + retângulo de área mínima OBB</td>
    </tr>
    <tr>
      <td>Método de comunicação</td>
      <td>Barramento CAN via adaptador USB2CAN; conexão de câmera USB 3.0</td>
    </tr>
    <tr>
      <td>Tensão de operação</td>
      <td>48V DC</td>
    </tr>
    <tr>
      <td>Plataforma host</td>
      <td>PC com Ubuntu 22.04+</td>
    </tr>
    <tr>
      <td>Versão recomendada do Python</td>
      <td>Python 3.10</td>
    </tr>
  </tbody>
</table>

### 3. Lista de materiais (BOM)

| Componente | Quantidade | Incluído |
|-----------|-----------|----------|
| Braço robótico reBot Arm B601-RS | 1 | ✅ |
| Gripper | 1 | ✅ |
| Ponte serial USB2CAN | 1 | ✅ |
| Adaptador de energia (48V) | 1 | ✅ |
| Cabo USB-C / comunicação | 1 | ✅ |
| Câmera de profundidade RGB-D | 1 | ✅ |
| Conector da câmera / suporte de montagem | 1 | ✅ |

#### Fiação

1. Conecte a câmera de profundidade ao host via USB 3.0.
2. Conecte o adaptador USB2CAN ao barramento CAN do braço.
3. Certifique-se de que a fonte de alimentação de 48V, a câmera e o braço robótico estejam todos conectados com segurança.
4. Se você encontrar problemas de permissão, execute:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. Requisitos de ambiente

| Item | Requisito |
|------|-----------|
| Sistema operacional | Ubuntu 22.04+ |
| Python | 3.10 |

### 5. Instale o ambiente básico

Siga estas etapas na ordem. As etapas 0–3 são necessárias para a rota padrão; escolha o SDK da câmera na etapa 4 para corresponder ao seu hardware. As instruções de instalação e execução do GraspNet estão no módulo avançado separado abaixo.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">0</span>
<div className="rebot-step-content">

#### Etapa 0. Conclua primeiro a preparação básica do braço robótico

Antes de iniciar este tutorial, conclua o conteúdo em [reBot Arm B601-RS Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/), incluindo montagem do braço robótico, inicialização do ponto zero, configuração de ID dos motores e verificações básicas de conectividade.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Etapa 1. Clone o repositório

Dê preferência ao repositório oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Etapa 2. Crie o ambiente e escolha o PyTorch para o seu hardware

Conclua estas três fases na ordem: crie o ambiente base, instale o PyTorch para o seu hardware e instale as dependências do projeto.

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.1</span>
<div className="rebot-step-content">

##### Crie o ambiente base

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

:::note Resultado esperado
O prompt do terminal mostra `rebotarm`, indicando que o ambiente está ativo. O PyTorch ainda não está instalado; continue com as duas próximas fases.
:::

Para usar um nome de ambiente diferente, substitua `rebotarm` em ambos os comandos acima. Para um ambiente existente, ative-o e execute `conda env update -n rebotarm -f environment.yml` para atualizar as dependências básicas. Este comando não remove pacotes pip existentes.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.2</span>
<div className="rebot-step-content">

##### Instale o PyTorch para o seu hardware

Ambas as abas usam as mesmas versões de pacotes compatíveis; apenas o índice de download é diferente. O arquivo de versão atual especifica PyTorch 2.9.1, torchvision 0.24.1 e torchaudio 2.9.1 para o ambiente Python 3.10, Ubuntu x86_64 usado neste tutorial.

<Tabs groupId="rebot-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU (sem GPU NVIDIA)">

Use esta opção para computadores com gráficos integrados Intel / AMD ou para verificar primeiro o fluxo de trabalho básico na CPU.

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available())"
```

:::note Resultado esperado
O caminho do PyTorch aponta para dentro do ambiente Conda ativo. `CUDA available: False` é o comportamento esperado.
:::

Mantenha a seguinte configuração em `config/default.yaml`:

```yaml
yolo:
  device: "cpu"
```

:::tip Fluxo de trabalho compatível
O fluxo de trabalho básico de YOLO / OBB pode ser executado em CPU. A velocidade de inferência depende do modelo e do seu computador. Os operadores CUDA do GraspNet deste projeto exigem uma GPU NVIDIA, portanto, pule o módulo avançado do GraspNet abaixo.
:::

</TabItem>
<TabItem value="nvidia" label="GPU NVIDIA (CUDA)">

Confirme que o driver reconhece sua GPU antes de instalar o PyTorch com suporte a CUDA. O exemplo abaixo usa a build CUDA 12.8, que requer suporte tanto da arquitetura da sua GPU quanto do driver:

```bash
nvidia-smi
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available())"
```

:::note Resultado esperado
`nvidia-smi` lista sua GPU, o caminho do PyTorch aponta para dentro do ambiente Conda ativo e `CUDA available: True` é impresso. Depois de verificar isso, selecione a GPU 0 em `config/default.yaml`:

```yaml
yolo:
  device: "0"
```
:::

:::tip Escolha uma build CUDA
Use a [lista oficial de versões do PyTorch](https://pytorch.org/get-started/previous-versions/) para escolher uma build que ofereça suporte à sua GPU, ao driver e à versão do Python. Não escolha apenas pela série da GPU ou pelo número de CUDA exibido por `nvidia-smi`.

Se você precisar de uma versão diferente do PyTorch, atualize em conjunto todas as três versões compatíveis em `requirements-pytorch.txt` e no índice de download. A inferência padrão do YOLO usa wheels pré-compilados e não requer uma instalação separada do CUDA Toolkit. Um compilador CUDA correspondente é necessário ao compilar as extensões do GraspNet.
:::

Se o CUDA não estiver disponível, verifique seu driver, a arquitetura da GPU e o wheel selecionado, ou siga a aba de CPU para verificar o fluxo de trabalho básico.

</TabItem>
</Tabs>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.3</span>
<div className="rebot-step-content">

##### Instale e verifique as dependências do projeto

Após concluir qualquer uma das opções de hardware, execute o seguinte a partir da raiz do projeto:

```bash
python -m pip install -r requirements.txt -c requirements-pytorch.txt
python -m pip check
python -c "import torch, torchvision, torchaudio, cv2; from ultralytics import YOLO; from calibration.aruco_pose import ArUcoDetector; ArUcoDetector(); print('Vision dependencies OK:', cv2.__version__)"
```

:::note Resultado esperado
`pip check` imprime `No broken requirements found.`, e o comando de verificação imprime `Vision dependencies OK` sem erros de importação. Conclua essas verificações antes de instalar os SDKs do braço robótico e da câmera.
:::

:::tip Falhas de instalação
`-c requirements-pytorch.txt` restringe as versões compatíveis do pacote PyTorch. Mantenha esse argumento e não adicione `--upgrade`. Se o pip falhar, revise o erro final e tente novamente a fase correspondente. Ativar um ambiente Conda não significa que todas as dependências foram instaladas com sucesso.

Instale apenas o pacote OpenCV padrão especificado em `requirements.txt`. As APIs ArUco do projeto estão disponíveis na versão 4.7; não instale wheels adicionais do OpenCV junto com ela. O CLIP é instalado a partir do repositório Git da Ultralytics, portanto o Git deve estar disponível no seu sistema. Carregar o YOLOE pela primeira vez também pode fazer o download dos pesos do modelo.
:::

</div>
</section>
</div>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Etapa 3. Instale o SDK do braço robótico

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Se executar pip install -e . retornar 'Multiple top-level packages discovered in a flat-layout', adicione uma configuração explícita de descoberta de pacotes em pyproject.toml de reBotArm_control_py e, em seguida, execute pip install -e . novamente:

```bash
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

As configurações B601 DM e RS são selecionadas por meio dos arquivos de configuração do SDK. Para B601-RS, confirme o seguinte em `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

Os programas de apreensão visual leem essa configuração do SDK e selecionam automaticamente o modo de controle do braço e os parâmetros do gripper correspondentes.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Etapa 4. Instale o SDK da câmera de profundidade

Este projeto oferece suporte a câmeras de profundidade RGB-D como Orbbec Gemini 2 e RealSense D435i / D405. Instale o SDK que corresponde à sua câmera; se o seu ambiente já conseguir importar o driver da câmera, você pode pular esta etapa.

<Tabs groupId="rebot-depth-camera" defaultValue="orbbec">
<TabItem value="orbbec" label="Orbbec Gemini 2">

A câmera de profundidade Orbbec Gemini 2 depende de `pyorbbecsdk`, o wrapper Python para o Orbbec SDK v2. Dê preferência a instalar primeiro o pacote Python pré-compilado.

No Linux / Ubuntu, configure as regras udev antes de usar a câmera pela primeira vez, qualquer que seja o método de instalação escolhido. As regras permitem que usuários comuns acessem o dispositivo USB e são instaladas em todo o sistema, portanto cada máquina precisa dessa configuração apenas uma vez. Pule os comandos correspondentes se as regras já estiverem configuradas.

<Tabs defaultValue="pip">
<TabItem value="pip" label="Opção 1: Instalar via pip (recomendado)">

```bash
pip install pyorbbecsdk2
```

**Configurar regras udev (Linux / Ubuntu)**

`pyorbbecsdk2` 2.1.0 e posteriores incluem um script de configuração de ambiente. Mantenha seu ambiente conda ativo e execute o script a partir do pacote instalado. Ele solicita permissão de sudo e instala e recarrega automaticamente as regras udev.

```bash
orbbec_sdk_dir="$(python -c 'import os, pyorbbecsdk; print(os.path.dirname(pyorbbecsdk.__file__))')"
python "$orbbec_sdk_dir/shared/setup_env.py"
```

Se `shared/setup_env.py` não puder ser encontrado, execute `pip install --upgrade "pyorbbecsdk2>=2.1.0"`, depois repita os comandos acima. Consulte o [guia oficial de instalação da Orbbec](https://orbbec.github.io/pyorbbecsdk/source/2_installation/install_the_package.html) para mais detalhes.

</TabItem>
<TabItem value="github" label="Opção 2: Obter a partir do GitHub">

Mantenha o ambiente `rebotarm` ativo. Instale as dependências de compilação e depois compile a extensão Python:

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev python3-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
git checkout v2-main
python -m pip install pybind11
mkdir -p build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DPython3_EXECUTABLE="$(python -c 'import sys; print(sys.executable)')" \
  -Dpybind11_DIR="$(python -m pybind11 --cmakedir)"
cmake --build . --parallel "$(nproc)"
cmake --install .
cd ..
```

Usuários da China continental podem substituir o comando de clone do GitHub acima por:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Após a compilação, confirme que `install/lib` contém `pyorbbecsdk*.so` e as bibliotecas compartilhadas da Orbbec (em `install/lib/pyorbbecsdk/` nas versões mais recentes) e, em seguida, instale o pacote Python. Consulte o [guia oficial de compilação do Orbbec a partir do código-fonte](https://orbbec.github.io/pyorbbecsdk/source/2_installation/build_the_package.html) para configuração do CMake e do conda.

```bash
pip install -e .
```

**Configurar regras udev (Linux / Ubuntu)**

Execute o seguinte a partir da raiz do repositório `pyorbbecsdk` clonado. Versões mais recentes usam o script de configuração de ambiente; versões mais antigas usam `install_udev_rules.sh`:

```bash
if [ -f scripts/env_setup/setup_env.py ]; then
  python scripts/env_setup/setup_env.py
else
  sudo bash scripts/install_udev_rules.sh
  sudo udevadm control --reload-rules
  sudo udevadm trigger
fi
```

Retorne à raiz do projeto antes de continuar com as etapas de verificação e execução:

```bash
cd ../..
```

</TabItem>
</Tabs>

Se ambos os métodos de instalação falharem, consulte a documentação oficial da Orbbec abaixo.

**Verificar instalação**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</TabItem>
<TabItem value="realsense" label="RealSense D435i / D405">

As câmeras RealSense dependem de `pyrealsense2`. Normalmente você pode instalá-lo diretamente com pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Se o seu sistema precisar da cadeia de ferramentas completa do RealSense ou de regras udev, siga a [documentação oficial do librealsense](https://github.com/realsenseai/librealsense).

:::warning Use uma porta USB 3.x
O D405 / D435i deve ser conectado a uma porta USB 3.0/3.2 (geralmente azul). Se for conectado a uma porta USB 2.0, o sintoma típico é: **o sistema reconhece o dispositivo e `pipeline.start()` é bem-sucedido, mas os frames nunca chegam** (`Frame didn't arrive within ...`). Verifique a velocidade negociada com:

```bash
lsusb -t   # the camera line should show 5000M; 480M means it fell back to a USB 2.0 port — switch ports
```
:::

</TabItem>
</Tabs>

:::note Resultado esperado
O comando de verificação correspondente imprime `pyorbbecsdk OK` ou `pyrealsense2 OK` sem um `ModuleNotFoundError`.
:::

**Resumo de recursos do SDK**

| Recurso | Link |
|----------|------|
| Página do produto Gemini 2 | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| Recursos de desenvolvimento | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| Documentação da API do SDK v2 | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| Documentação do pyorbbecsdk | https://orbbec.github.io/pyorbbecsdk/index.html |
| Wrapper ROS2 | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| RealSense SDK | https://github.com/realsenseai/librealsense |

</div>
</section>
</div>

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
│   ├── pyorbbecsdk/              # Orbbec SDK Python wrapper (source installation)
│   └── reBotArm_control_py/      # reBot Arm SDK
├── requirements-pytorch.txt      # Compatible versions installed from the CPU / CUDA index
├── requirements.txt              # Project dependencies installed after PyTorch
└── environment.yml               # Base Conda environment
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

Antes de executá-lo, certifique-se de que o seguinte parâmetro de tamanho do ArUco em `config/default.yaml` corresponda ao marcador impresso real:

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

Após confirmar a configuração, execute a calibração automática:

```bash
python scripts/collect_handeye_eih.py
```

No modo automático, o braço percorre 50 poses predefinidas e registra uma amostra sempre que o marcador ArUco é detectado de forma estável. Mesmo que você interrompa o processo com `c` ou `q`, o script ainda tenta calcular o resultado da calibração a partir das amostras coletadas.

Se você quiser mover o braço robótico manualmente durante a coleta, use o modo manual:

```bash
python scripts/collect_handeye_eih.py --manual
```

No modo manual, o braço entra em modo de compensação de gravidade. Mova o efetuador final para um ângulo de visualização adequado, pressione `Enter` para capturar e pressione `c` ou `q` para finalizar e calcular o resultado.

:::tip
Se, após a calibração, você perceber que a precisão de preensão do braço robótico não atende aos seus requisitos, pode definir os parâmetros `X` (frente-trás), `Y` (esquerda-direita), `Z` (cima-baixo) em `config/default.yaml` em `calibration.hand_eye_compensation_m` para fornecer compensação de posição.
:::

O resultado da calibração é salvo em:

```text
config/calibration/<camera_type>/hand_eye.npz
```

A contagem de amostras recomendada é de pelo menos 5 amostras, sendo 15 ou mais o ideal.

### 8. Execução e depuração

Verifique os cenários nesta ordem: os dois primeiros não se conectam ao braço robótico e ajudam a verificar a câmera, a detecção e a estimativa de preensão. Os dois seguintes se conectam e controlam o braço robótico.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### 1. Verificar apenas a detecção de objetos

```bash
python scripts/object_detection.py
```

Se você precisar alterar o modelo de detecção ou as classes, modifique `config/default.yaml`:

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

- A câmera abre corretamente
- O modelo YOLO é carregado corretamente
- A detecção de objetos com YOLO funciona conforme o esperado

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

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
- Se o ponto de preensão fica próximo da área central do alvo
- Se a direção do eixo curto corresponde à direção esperada de abertura da garra

Controles principais:

- Botão esquerdo do mouse: inspecionar a profundidade no pixel selecionado
- `G`: imprimir a pose de preensão atual considerada a melhor
- `Q` / `Esc`: sair

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 3. Executar o programa principal de preensão

```bash
python scripts/main.py
```

Para validar a pose do alvo enquanto pula o movimento de preensão:

```bash
python scripts/main.py --dry-run
```

Verifique a pose e a área de trabalho com `--dry-run` antes de executar uma preensão real. Nesse modo, o script atual ainda inicializa o braço, move para a pose de prontidão e realiza limpeza e retorno à origem ao sair. Para verificação apenas de visão, use os dois primeiros scripts, que não se conectam ao braço.

Fluxo principal do programa:

1. Inicializar a câmera RGB-D e confirmar que o fluxo de imagem está disponível.
2. Habilitar o braço robótico e a garra.
3. Mover para a pose de prontidão. Se você quiser alterar a pose de prontidão na inicialização, modifique `config/default.yaml`:

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
6. Pressione `G` para capturar o quadro atual e executar a preensão.

Teclas em tempo de execução:

- `G`: agarrar o melhor alvo atual
- `R`: retomar a visualização ao vivo
- `Q` / `Esc`: sair

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### 4. `scripts/set.py` — Programa de agarrar e colocar

Função: Agarrar a banana e colocá-la na caixa.

```bash
python scripts/set.py
```

Fluxo concluído:

1. Inicialização da câmera e do braço, mover para a posição de prontidão
2. Pré-visualização da câmera em tempo real + detecção de objetos YOLO e segmentação de instâncias
3. Pressione `G` para congelar o quadro, calcular a pose alvo do braço via transformação mão-olho
4. O braço se move para agarrar a banana e levantá-la
5. O braço coloca a banana na caixa e retorna à pose inicial
6. Pressione `Q` para sair do sistema, o braço retorna à posição zero

</div>
</section>
</div>

### 9. Módulo avançado GraspNet (Opcional)

O SDK Python / rota OBB padrão não requer GraspNet. Siga estas etapas apenas quando você precisar de estimativa de pose de preensão 6D a partir de nuvens de pontos RGB-D.

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Etapa 1. Instalar GraspNet e operadores CUDA

Você não precisa do GraspNet para `scripts/main.py` ou `scripts/ordinary_grasp_pipeline.py`. Configure-o apenas quando quiser executar `scripts/graspnet_camera_demo.py` ou `scripts/grasp.py`, que exigem GraspNet, PyTorch com suporte a CUDA, os operadores CUDA PointNet2/knn e um checkpoint pré-treinado.

As extensões `pointnet2` / `knn` do GraspNet exigem um compilador CUDA. Antes de começar, confirme que `nvcc` está disponível no ambiente atual e compare sua versão CUDA com a versão usada para compilar o PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

O PyTorch é instalado separadamente na Etapa 2 da instalação básica. O GraspNet requer uma GPU NVIDIA e suporte CUDA funcional; pule esta seção se você tiver seguido a opção de CPU. Conclua as verificações abaixo antes de configurar o compilador.

**Etapa 1: Confirmar sua GPU**

```bash
nvidia-smi
```

O driver deve reconhecer sua GPU NVIDIA. Instalar apenas o CUDA Toolkit não permite que gráficos integrados Intel / AMD executem os operadores CUDA deste projeto.

**Etapa 2: Confirmar o suporte CUDA do PyTorch**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
```

Se `torch.cuda.is_available()` imprimir `True`, continue para a próxima etapa. Se o PyTorch estiver ausente, `torch.version.cuda` for `None` ou o CUDA estiver indisponível, volte para a Etapa 2 da instalação básica e conclua a instalação e verificação da NVIDIA. Ao alternar entre builds de CPU e CUDA, remova o build antigo antes de reinstalar.

**Etapa 3: Instalar o compilador CUDA correspondente ao seu PyTorch**

`pointnet2` / `knn` são extensões CUDA locais: a versão CUDA reportada por `nvcc --version` deve corresponder a `torch.version.cuda` durante a compilação, caso contrário a compilação falha com `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`. Verifique ambas as versões primeiro:

```bash
nvcc --version
python -c "import torch; print(torch.version.cuda)"
```

Tomando `torch.version.cuda` mostrando `12.8` como exemplo, instale o compilador correspondente dentro do ambiente conda:

```bash
conda install -c nvidia cuda-nvcc=12.8 cuda-cudart-dev=12.8

which nvcc       # should point to $CONDA_PREFIX/bin/nvcc, not /usr/bin/nvcc
nvcc --version   # should match torch.version.cuda
```

`cuda-nvcc` fornece o compilador e `cuda-cudart-dev` fornece os headers CUDA em `targets/x86_64-linux/include`; ambos são necessários. Quando o ambiente conda é ativado, `$CONDA_PREFIX/bin` precede os caminhos do sistema, então o `nvcc` do conda automaticamente sombreia o antigo do sistema (por exemplo, CUDA 11.5 dos repositórios do Ubuntu) — não é necessário desinstalar o CUDA do sistema.

:::warning
Não faça downgrade do PyTorch para corresponder a um `nvcc` antigo do sistema: versões antigas do CUDA podem não suportar a arquitetura da sua GPU (CUDA 11.5 suporta no máximo sm_86; a série RTX 40 requer CUDA 11.8+ e a série RTX 50 requer CUDA 12.8+), e builds antigos do PyTorch podem ser incompatíveis com outras dependências do projeto, como versões recentes do ultralytics.
:::

**Etapa 4: Verificar**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
nvcc --version
```

Quando ambas as versões do CUDA corresponderem e `torch.cuda.is_available()` imprimir `True`, a configuração do PyTorch estará completa e você poderá continuar compilando os operadores CUDA.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Configure CUDA build paths before building the local operators.
# Note: use the conda cuda-toolkit targets directory for headers/libraries;
# do not mix in the pip nvidia/cu13 directory (a version mismatch with conda nvcc causes build errors).
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="$(python -c 'import torch; major, minor = torch.cuda.get_device_capability(); print(f"{major}.{minor}")')"
export CPATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPLUS_INCLUDE_PATH
export LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LIBRARY_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

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
Observação: Se você seguir a documentação do repositório oficial graspnet-baseline e usar `python setup.py install`, podem ocorrer erros relacionados a CUDA / PyTorch. Recomendamos usar `pip install . --no-build-isolation` para que a extensão seja compilada com base na configuração de PyTorch e CUDA já instalada no ambiente conda ativo.
:::

:::tip
Se a compilação falhar com `fatal error: cusparse.h: No such file or directory`, execute `find $CONDA_PREFIX -name cusparse.h` e adicione o diretório que contém `cusparse.h` a `CPATH` / `CPLUS_INCLUDE_PATH` (com o `cuda-toolkit` do conda isso geralmente é `$CONDA_PREFIX/targets/x86_64-linux/include`). Se você obtiver erros relacionados a headers como `'__NV_IS_DEVICE' was not declared in this scope`, eles geralmente são causados por misturar os headers `nvidia/cu13` do pip com a versão `nvcc` do conda — mude para os caminhos `targets` do conda acima e recompile.
:::

:::tip
Além disso, dependências mais antigas da GraspNet API ainda podem usar o nome de pacote obsoleto `sklearn`. O comando `sed` o substitui pelo nome de pacote atualmente recomendado `scikit-learn` para evitar `The 'sklearn' PyPI package is deprecated` durante a instalação. A menos que você também atualize as dependências mais antigas da GraspNet API, mantenha a restrição `numpy==1.23.4` porque `transforms3d==0.3.1` ainda usa aliases antigos do NumPy como `np.float`.
:::

**Configurar modelo pré-treinado**

Baixe os pesos oficiais pré-treinados da GraspNet a partir do repositório oficial graspnet-baseline [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A), depois coloque `checkpoint-rs.tar` em:

```bash
mkdir -p ~/rebot_grasp/sdk/graspnet-baseline/checkpoints

sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Em seguida, verifique em `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

O campo `checkpoint` suporta três formas: um nome de arquivo é resolvido em `sdk/graspnet-baseline/checkpoints/`; um caminho relativo é resolvido a partir da raiz do projeto; um caminho absoluto é usado diretamente.

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Etapa 2. Execute a demonstração de estimativa de câmera da GraspNet

```bash
python scripts/graspnet_camera_demo.py
```

Este script executa a estimativa de pose de preensão 6D da GraspNet apenas com a câmera RGB-D, sem conectar ao braço robótico. Ele mantém uma pré-visualização ao vivo da câmera, usa bounding boxes do YOLO para selecionar a área alvo e filtra candidatos de cena completa viáveis da GraspNet pelo bbox alvo.

Controles principais:

- `G` / `Space`: executa a inferência da GraspNet no quadro atual
- `R`: retoma a pré-visualização ao vivo
- `Q` / `Esc`: sair

Após a inferência, o Open3D pode visualizar a nuvem de pontos e os candidatos de preensão.

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Etapa 3. Execute o programa de preensão robótica da GraspNet

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

Este script conecta a estimativa da GraspNet ao fluxo de execução do braço robótico. O YOLO seleciona o alvo, a GraspNet gera uma pose de preensão 6D, a calibração mão-olho a transforma para o referencial da base do robô, e o script verifica a alcançabilidade por IK antes de executar a sequência de movimentos de pré-preensão, preensão e retirada.

Executar `python scripts/grasp.py` inicia todo o fluxo de preensão robótica da GraspNet e controla o braço robótico. `--dry-run` imprime a pose alvo e o resultado da filtragem de candidatos e pula o movimento de preensão; o script atual ainda inicializa o braço, move para a pose de pronto e realiza limpeza e homing ao sair. `--target-class "light blue coffee cup"` especifica a classe alvo do YOLO e apenas filtra e realiza preensões em candidatos da GraspNet para essa classe.

</div>
</section>
</div>

### 10. FAQ

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

Isso significa que as dependências do SDK do braço robótico não estão instaladas no ambiente Python atual. `conda env update` atualiza apenas o ambiente base; instale as dependências do projeto separadamente. Execute o seguinte a partir da raiz do projeto:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
# Complete the PyTorch installation in basic installation Step 2 first.
python -m pip install -r requirements.txt -c requirements-pytorch.txt
cd sdk/reBotArm_control_py && python -m pip install -e .
```

<h4>2. Pressionar <code>G</code> não executa a preensão</h4>

Causas comuns:

- `hand_eye.npz` não existe
- O modo de calibração mão-olho não é `eye_in_hand`
- A pose alvo não é alcançável por IK

Recomenda-se executar:

```bash
python scripts/main.py --dry-run
```

<h4>3. A profundidade de preensão é instável</h4>

Você pode tentar ajustar:

- `grasp_pipeline.grasp.depth_quantile`
- A altura de instalação da câmera em relação à área de trabalho
- Propriedades reflexivas da superfície do alvo

<h4>4. A GraspNet informa que <code>pointnet2_utils</code> não pode ser importado de <code>pointnet2</code></h4>

Isso geralmente significa que a extensão CUDA local em `sdk/graspnet-baseline/pointnet2` não foi compilada no ambiente conda ativo, ou que o Python está resolvendo um pacote `pointnet2` diferente. Certifique-se de que o ambiente do projeto esteja ativo e então recompile tanto `pointnet2` quanto `knn` nesse mesmo ambiente:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Verifique (`pointnet2_utils` / `knn_modules` são importados como módulos de nível superior a partir dos diretórios de origem, que é também como `models/` os importa; os scripts de preensão adicionam automaticamente os diretórios de origem ao `sys.path`):

```bash
cd sdk/graspnet-baseline
python -c "import sys; sys.path[:0]=['pointnet2','knn']; import pointnet2_utils, knn_modules; print('import works')"
```

<h4>5. Problemas de compatibilidade de arquitetura CUDA em GPUs mais recentes ao executar a GraspNet</h4>

Se você vir `no kernel image is available for execution on the device`, ou se o PyTorch informar que a capacidade CUDA da GPU atual não é suportada, é provável que o wheel do PyTorch instalado não inclua kernels CUDA para essa arquitetura de GPU. Instale um build do PyTorch que suporte sua arquitetura atual de CUDA/GPU e então recompile as extensões CUDA locais da GraspNet.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Se você precisar especificar manualmente a arquitetura de compilação, defina `TORCH_CUDA_ARCH_LIST` antes de recompilar. Escolha o valor de acordo com a arquitetura da sua GPU e a versão do PyTorch/CUDA.

<h4>6. A inferência da GraspNet informa <code>RuntimeError: CPU not supported</code></h4>

Os operadores de amostragem em `pointnet2` suportam apenas tensores CUDA. Confirme que o CUDA está disponível, que a rede GraspNet e a nuvem de pontos de entrada estão na GPU, e que `pointnet2` / `knn` foram compilados com a versão do PyTorch no ambiente ativo.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Se a saída for `False`, corrija primeiro a instalação do CUDA / PyTorch. Se for `True` mas o erro permanecer, recompile `pointnet2` e `knn`.

</TabItem>
<TabItem value="ros2-yoloe" label="Method 2 · ROS 2 / YOLOE">

## Método de preensão visual 2

### 1. Visão geral do projeto

Este fluxo de trabalho usa **ROS 2** e **YOLOE** para detecção de objetos, preensão e posicionamento no reBot Arm B601-RS. Inicie o braço, a câmera de profundidade e os nós de preensão em terminais separados.

As câmeras de profundidade compatíveis são **Orbbec Gemini 2** e **RealSense D405 / D435i**. O modelo do robô fornece extrínsecos predefinidos de montagem da câmera, portanto você pode pular a coleta de dados de calibração mão‑olho com uma placa de calibração. Use o suporte e a posição de montagem especificados para sua câmera. As tolerâncias de montagem e de peças impressas podem introduzir erros. Verifique o TF e a pose de destino antes de ajustar finamente os deslocamentos.

### 2. Configuração do ambiente

Este fluxo de trabalho usa Ubuntu 22.04, ROS 2 Humble, Python 3.10 do sistema e um ambiente Conda dedicado chamado `yolo`. Configure e compile o braço, o driver da câmera e os pacotes de preensão visual juntos no ambiente do sistema antes de criar o ambiente Conda para inferência com YOLOE.

Execute as etapas 1–4 em um terminal novo com o Conda inativo. Faça o source apenas da configuração do ROS do sistema e deixe qualquer workspace antigo sem source. Os terminais A, B, D e E também usam o ambiente do sistema. Use o ambiente `yolo` apenas no terminal C. Os arquivos de ambiente e comandos de instalação do fluxo de trabalho do Python SDK / OBB se aplicam somente àquele fluxo de trabalho.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Etapa 1. Instalar o workspace ROS 2 do braço robótico

Siga o guia [reBot Arm B601-RS ROS 2 Integration](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_ros2_integration/) para preparar o braço e instalar o ROS 2 Humble, as ferramentas de compilação, o workspace do braço e o SDK de baixo nível. Confirme que o workspace do braço é compilado com sucesso. Continue usando o mesmo workspace `~/rebotarm_ros2` para este guia.

```bash
source /opt/ros/humble/setup.bash
echo "$ROS_DISTRO"
sudo apt update
sudo apt install -y python3-rosdep python3-colcon-common-extensions git wget cmake build-essential
```

Espere que `ROS_DISTRO` retorne `humble`. Se o workspace já contiver qualquer um dos repositórios abaixo, verifique o branch e o conteúdo antes de continuar. Clone cada repositório apenas uma vez por caminho.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Etapa 2. Instalar a câmera

Expanda as instruções de configuração para sua câmera.

<details className="content-details">
<summary>Clique para expandir a configuração da Gemini 2</summary>

Clone o Orbbec ROS 2 SDK no workspace e mude para o branch `v2-main`.

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Instale as dependências nativas listadas no repositório do driver. A etapa 3 instala as dependências ROS em conjunto.

```bash
sudo apt install -y libgflags-dev nlohmann-json3-dev libgoogle-glog-dev libdw-dev libssl-dev mesa-utils libgl1 \
  ros-humble-image-transport-plugins ros-humble-compressed-image-transport
```

Instale as regras udev.

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

</details>

<details className="content-details">
<summary>Clique para expandir a configuração da D405 / D435i</summary>

1. Instale as dependências de compilação e depois clone o RealSense SDK e mude para `v2.58.1`.

```bash
sudo apt update
sudo apt install -y cmake build-essential git pkg-config libusb-1.0-0-dev libudev-dev libssl-dev v4l-utils
```

```bash
cd ~
git clone https://github.com/realsenseai/librealsense.git
cd librealsense
git checkout v2.58.1
```

2. Instale as regras udev.

```bash
cd ~/librealsense
./scripts/setup_udev_rules.sh
```

3. Compile e instale o SDK.

Esta compilação usa o backend RSUSB para evitar aplicar patches ao módulo UVC do kernel. Ela desativa exemplos e extensões GLSL. `BUILD_TOOLS=ON` mantém disponíveis as ferramentas de linha de comando como `rs-enumerate-devices`. `realsense-viewer` é um exemplo gráfico.

```bash
cd ~/librealsense &&
mkdir -p build && cd build &&
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DFORCE_RSUSB_BACKEND=ON \
  -DBUILD_EXAMPLES=OFF \
  -DBUILD_TOOLS=ON \
  -DBUILD_GRAPHICAL_EXAMPLES=OFF \
  -DBUILD_GLSL_EXTENSIONS=OFF &&
cmake --build . --parallel 2 &&
sudo cmake --install . &&
sudo ldconfig
```

:::tip CMake cannot find `OpenGL::GL`
No librealsense `v2.58.1`, desativar apenas `BUILD_GRAPHICAL_EXAMPLES` ainda deixa os exemplos padrão vinculados a `OpenGL::GL`, o que pode impedir o CMake de gerar os arquivos de compilação. Se você encontrou esse erro com `BUILD_EXAMPLES=ON`, execute novamente os comandos acima para atualizar as opções no diretório `build` existente.
:::

4. Clone o driver ROS 2 do RealSense.

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
```

Instale as dependências ROS do driver da câmera na etapa 3 e compile o workspace na etapa 4. Reconecte a câmera e execute `lsusb -t` para verificar se ela está conectada via USB 3.x. A velocidade normalmente deve ser `5000M` ou superior.

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Etapa 3. Adicionar o pacote de preensão visual e instalar dependências ROS

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
```

Inicialize o `rosdep` no primeiro uso. Se ele informar `default sources list file already exists`, prossiga diretamente para a atualização do índice.

```bash
sudo rosdep init
```

```bash
rosdep update
cd ~/rebotarm_ros2
rosdep install --from-paths src --ignore-src -r -y --rosdistro humble --skip-keys="librealsense2 orbbec_description realsense2_description"
```

Este comando instala as dependências de sistema declaradas pelos pacotes ROS clonados, incluindo `diagnostic_updater`, `cv_bridge` e `xacro`. A configuração do RealSense já instala `librealsense2` a partir do código‑fonte. As outras duas chaves são pacotes de descrição de câmera. O código‑fonte clonado na etapa 2 fornece o pacote de descrição para sua câmera, e o pacote da outra câmera é opcional para esta configuração. Pular essas chaves evita reinstalar o SDK ou ficar bloqueado por dependências da outra câmera.

Espere ver `All required rosdeps installed successfully`. Resolva quaisquer erros de dependência restantes antes de compilar. Verifique a saída completa para confirmar que a instalação foi concluída com sucesso.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Etapa 4. Compilar o workspace

Use `--symlink-install` de forma consistente ao compilar este workspace, inclusive depois de adicionar o driver da câmera e o pacote de preensão visual.

:::tip Conflitos com diretórios de compilação anteriores
Se você compilou anteriormente sem `--symlink-install`, mudar para ele pode gerar `failed to create symbolic link` e `existing path cannot be removed: Is a directory`. Diretórios da compilação anterior entram em conflito com os novos links simbólicos. Limpe os artefatos de compilação e compile novamente.

Abra um terminal novo com o Conda inativo e sem fazer source do `install/setup.bash` do workspace. Execute os comandos a seguir.

```bash
cd ~/rebotarm_ros2
rm -rf build install log
```

Isso remove os diretórios build, install e log do workspace e preserva `src` e outros arquivos de código‑fonte. Em seguida, compile novamente todo o workspace usando os comandos para sua câmera.
:::

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
```

<Tabs groupId="rebot-ros2-camera-build" defaultValue="realsense">
<TabItem value="realsense" label="RealSense D405 / D435i">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release -DUSE_LIFECYCLE_NODE=OFF
```

</TabItem>
<TabItem value="orbbec" label="Orbbec Gemini 2">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```

</TabItem>
</Tabs>

Depois que a compilação for bem‑sucedida, faça o source do workspace e verifique o pacote de preensão visual.

```bash
source ~/rebotarm_ros2/install/setup.bash
ros2 pkg prefix rebot_visual_grasp
```

Para RealSense, também execute `ros2 pkg prefix realsense2_camera`. Para Gemini 2, execute `ros2 pkg prefix orbbec_camera`. Espere ver o caminho de instalação do pacote selecionado no workspace atual.

**Verificar o resultado da compilação**

Verifique o `Summary` final. A compilação foi bem‑sucedida se todos os pacotes mostrarem `Finished` e nenhum mostrar `Failed` ou `Aborted`. Por exemplo, um workspace com o driver RealSense e o pacote de preensão visual pode exibir a seguinte saída.

```text
Summary: 11 packages finished [33.8s]
  4 packages had stderr output: realsense2_camera_msgs realsense2_description rebotarm_moveit_config rebotarm_msgs
```

As contagens de pacotes e os tempos de compilação variam conforme o workspace e o computador. `packages had stderr output` significa que esses pacotes escreveram na saída de erro padrão. Verifique os logs deles para ver o que aconteceu. Se a saída consistir apenas nos avisos do CMake descritos abaixo, a compilação ainda pode ser bem‑sucedida.

:::tip Caminhos obsoletos após limpeza e avisos do CMake
Se você fez source do `install/setup.bash` do workspace, removeu `install` e recompilou no mesmo terminal, talvez veja avisos sobre caminhos inexistentes em `AMENT_PREFIX_PATH` ou `CMAKE_PREFIX_PATH`. O terminal ainda mantém os caminhos de instalação anteriores. Se todos os pacotes forem compilados com sucesso, faça o source do novo `install/setup.bash` como mostrado acima e continue.

Para compilações subsequentes, use um terminal novo e faça source apenas de `/opt/ros/humble/setup.bash` antes de compilar. Se o `~/.bashrc` fizer automaticamente o source do workspace, desative temporariamente essa linha antes de recompilar após uma limpeza.

Com `--cmake-args -DUSE_LIFECYCLE_NODE=OFF`, alguns pacotes podem informar `Manually-specified variables were not used by the project: USE_LIFECYCLE_NODE`. Esse aviso do CMake é esperado para pacotes fora do driver que usa a opção.
:::

Depois de compilar o workspace ROS, crie o ambiente Conda de inferência na etapa 5. Em cada novo terminal, faça o source de ambos os arquivos de configuração antes de executar comandos ROS.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### Etapa 5. Configure o ambiente YOLOE

`grasp_yolo` chama Ultralytics YOLOE a partir do Python. Use o interpretador Python em um ambiente Conda dedicado para este nó.

Esta etapa se aplica a hosts x86_64 executando Ubuntu 22.04, ROS 2 Humble e Python 3.10. Crie o ambiente, escolha um backend PyTorch e, em seguida, instale as dependências de visão e de runtime Python para ROS. Verifique as dependências dentro do Conda separadamente, porque pacotes Python instalados via apt podem não estar disponíveis lá.

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.1</span>
<div className="rebot-step-content">

##### 5.1 Crie o ambiente base

```bash
conda create -n yolo python=3.10
conda activate yolo
python -c "import sys; print(sys.executable)"
```

:::note Resultado esperado
O caminho do Python termina em `envs/yolo/bin/python` dentro da sua instalação Conda. Se você já tiver um ambiente `yolo`, ative-o e continue com o PyTorch e as dependências do projeto abaixo.
:::

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.2</span>
<div className="rebot-step-content">

##### 5.2 Instale o PyTorch para o seu hardware

Ambas as abas instalam PyTorch `2.9.1`, torchvision `0.24.1` e torchaudio `2.9.1` a partir de seus respectivos índices de pacotes. Selecione um backend no ambiente `yolo` ativo.

<Tabs groupId="rebot-ros2-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU (sem NVIDIA GPU)">

Use esta opção em computadores com gráficos integrados Intel ou AMD, ou para verificar a configuração primeiro na CPU.

```bash
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3))"
```

:::note Resultado esperado
O caminho do PyTorch está dentro do ambiente Conda ativo e o comando imprime um tensor aleatório. `CUDA available: False` é esperado para este backend. Defina `-p yolo_device:=cpu` ao iniciar `grasp_yolo`. A taxa de quadros de inferência na CPU depende do modelo e do computador.
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA GPU (CUDA)">

Verifique se o driver detecta a NVIDIA GPU antes de instalar uma build CUDA do PyTorch. O exemplo usa CUDA 12.8, que requer suporte tanto da arquitetura da GPU quanto do driver.

```bash
nvidia-smi
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3, device='cuda'))"
```

:::note Resultado esperado
`nvidia-smi` lista a GPU, o caminho do PyTorch está dentro do ambiente Conda ativo e o comando imprime `CUDA available: True` e um tensor CUDA. Use `-p yolo_device:=0` ao iniciar `grasp_yolo` para selecionar a GPU 0.
:::

:::tip Escolha uma build CUDA
Use a [lista oficial de versões do PyTorch](https://pytorch.org/get-started/previous-versions/) para escolher uma build que ofereça suporte à sua GPU, ao driver e à versão do Python. Considere os três ao selecionar uma build, já que a versão CUDA mostrada apenas por `nvidia-smi` é insuficiente. A wheel pré-compilada fornece o runtime CUDA para a inferência padrão do YOLOE.

Se CUDA não estiver disponível, verifique o driver, a arquitetura da GPU e a wheel selecionada, ou mude para a aba CPU para verificar a configuração básica. Se você alterar a versão do PyTorch, atualize as versões correspondentes do torchvision e torchaudio e os pins na próxima fase.
:::

</TabItem>
</Tabs>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.3</span>
<div className="rebot-step-content">

##### 5.3 Instale e verifique as dependências do projeto

Depois de instalar um backend, mantenha `yolo` ativo e instale as dependências de visão e de runtime Python. O comando preserva as versões correspondentes do PyTorch e resolve em conjunto as restrições do NumPy e do OpenCV.

```bash
python -m pip install "ultralytics==8.4.202" "torch==2.9.1" "torchvision==0.24.1" "torchaudio==2.9.1" "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d pyyaml lark typeguard

# YOLOE open-vocabulary classes require the Ultralytics CLIP package.
python -m pip install git+https://github.com/ultralytics/CLIP.git
```

:::tip Mensagens de dependência do ROS durante a instalação do PyTorch
Se você já tiver feito o source do ROS 2, o pip pode informar que `generate-parameter-library-py` requer `pyyaml` e `typeguard`. Verifique se a linha final `Successfully installed` lista `torch`, `torchvision` e `torchaudio`. Instale ambas as dependências ausentes com o comando nesta fase e, em seguida, execute `pip check` e os testes de importação abaixo.
:::

Se você compilou `rebotarm_agent` com a configuração padrão do workspace do braço, instale a dependência declarada dele para que `pip check` possa passar depois que você fizer o source do workspace completo.

```bash
python -m pip install fastmcp
```

`fastmcp` oferece suporte ao recurso Agent. Instale-o somente se o seu workspace contiver `rebotarm_agent`.

Este fluxo de trabalho fixa o NumPy em `1.26.4` e o OpenCV em `4.11.0.86`. Mantenha esses pins e as versões correspondentes do PyTorch ao instalar ou atualizar o Ultralytics.

:::tip Conflitos de dependência entre OpenCV e NumPy
Se você executou `pip install -U ultralytics` antes de instalar separadamente o NumPy `1.26.4`, o pip pode informar que `opencv-python ... requires numpy>=2`. Por exemplo, o OpenCV `5.0.0.93` requer NumPy 2, enquanto este fluxo de trabalho usa NumPy `1.26.4`. Uma mensagem final `Successfully installed` ainda pode deixar dependências em conflito.

Mantenha o ambiente `yolo` ativo, instale as versões compatíveis e, em seguida, execute as verificações de dependência e de importação abaixo.

```bash
conda activate yolo
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```

Mantenha apenas um pacote OpenCV que forneça `cv2` no ambiente. Se você instalou múltiplas variantes como `opencv-python`, `opencv-contrib-python` ou os pacotes headless correspondentes, desinstale-as e reinstale o pacote fixado.

```bash
python -m pip uninstall -y opencv-python opencv-contrib-python opencv-python-headless opencv-contrib-python-headless
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```
:::

**Verifique as dependências e valide o YOLOE**

Faça o source da configuração ROS do sistema e do workspace compilado e, em seguida, use o Python do Conda ativo para verificar as dependências.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
python -m pip check
python -c "import sys, torch, torchvision, torchaudio, cv2, numpy, yaml, lark, transforms3d, clip; from ultralytics import YOLOE; print('Python:', sys.executable); print('PyTorch:', torch.__version__); print('OpenCV:', cv2.__version__); print('NumPy:', numpy.__version__); print('CUDA available:', torch.cuda.is_available()); print('YOLOE OK')"
python -c "import rclpy, cv_bridge, launch_ros; import rebot_visual_grasp.grasp_yolo; print('ROS grasp imports OK')"
```

:::note Resultado esperado
`pip check` informa `No broken requirements found.` O caminho do Python está dentro do ambiente Conda ativo. A verificação de visão imprime `OpenCV: 4.11.0`, `NumPy: 1.26.4` e `YOLOE OK`. A verificação de importação do ROS imprime `ROS grasp imports OK`. Espere `CUDA available: False` para o backend de CPU e `True` para o backend de GPU. Essas verificações apenas importam módulos e mantêm o braço inativo.
:::

Se `pip check` informar `launch-ros ... requires pyyaml`, verifique se você instalou as dependências acima em `yolo`. Se informar `rebotarm-agent ... requires fastmcp`, instale a dependência Agent conforme descrito acima. Se as importações de `rclpy`, `cv_bridge` ou módulos do workspace falharem, verifique as dependências ROS do sistema, os resultados da compilação do workspace e ambos os comandos `source`. Use esses pacotes ROS a partir do sistema e do workspace.

Aguarde até que as verificações de dependência e de importação sejam aprovadas antes de baixar os pesos e iniciar os nós de grasping.

</div>
</section>
</div>

**Baixe os pesos para `~/rebot_visual_model`**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP is required by YOLOE set_classes and is about 242 MB.
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# The segmentation weights can download on first use. Download them here to verify the setup before launch.
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

Verifique se o YOLOE consegue carregar os pesos e definir classes de texto a partir do diretório do modelo. Isso detecta arquivos de modelo ou dependências CLIP ausentes antes de você iniciar o braço.

```bash
cd ~/rebot_visual_model
python -c "from ultralytics import YOLOE; model = YOLOE('yoloe-26s-seg.pt'); model.set_classes(['cube', 'box']); print('YOLOE weights and text encoder OK')"
```

Espere `YOLOE weights and text encoder OK`. O primeiro carregamento pode levar mais tempo. Este comando carrega apenas o modelo de visão e mantém o braço desconectado. Resolva quaisquer pesos ou dependências ausentes antes de executar o projeto.

</div>
</section>

</div>

### 3. Execute o projeto

Antes de começar, confirme que o braço está ligado, a interface CAN é `can0` e que o Gemini 2, D405 ou D435i está conectado via USB. Em seguida, ative o CAN.

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

:::warning O braço robótico irá se mover
No terminal C, `move_to_observation_on_start:=true` move o braço para a pose de observação. O terminal D aciona o grasping e o posicionamento. Antes de começar, verifique a posição zero, o suporte de montagem, o workspace e os deslocamentos. Mantenha pessoas e obstáculos fora do caminho de movimento e esteja pronto para parar o braço.
:::

Inicie os terminais A, B, C e D nessa ordem, mantendo os terminais anteriores em execução. Selecione os comandos de inicialização para sua câmera. Você também pode escrever um script de inicialização para lançar toda a pilha em conjunto.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">A</span>
<div className="rebot-step-content">

#### Terminal A — Iniciar o braço e o RViz

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

<details className="content-details">
<summary>Clique para expandir D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d435i.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">B</span>
<div className="rebot-step-content">

#### Terminal B — Iniciar a câmera

<details className="content-details">
<summary>Clique para expandir Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

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

<details className="content-details">
<summary>Clique para expandir D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x480x30 \
  rgb_camera.color_profile:=640x480x30
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">C</span>
<div className="rebot-step-content">

#### Terminal C — Mover para a pose de observação e iniciar a detecção YOLOE

Execute primeiro `conda activate yolo` ou ative o ambiente pelo nome real. O comando `python` usa o ambiente ativo e funciona tanto com Miniconda quanto com Miniforge. Os exemplos usam `yolo_device:=cpu` por padrão. Para inferência em GPU, passe na verificação de CUDA na etapa 5 e, em seguida, defina `yolo_device:=0`.

<details className="content-details">
<summary>Clique para expandir Gemini 2</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.02 \
  -p grasp_y_offset_m:=0.002 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>Clique para expandir D405</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:=cube \
  -p place_class:=box \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p grasp_y_offset_m:=-0.005 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.01 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>Clique para expandir D435i</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_y_offset_m:=0.01 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

| Parameter | Description |
| ------------------ | ---------------------------------------------------------------------------- |
| `yolo_device:=cpu` | Usar a CPU por padrão. Após verificar o CUDA, defina `yolo_device:=0` para usar a GPU 0. |
| `target_class` | Classe de texto YOLOE para o objeto a ser agarrado. Defina para corresponder ao objeto. As classes YOLO padrão são suportadas. |
| `place_class` | Classe de texto YOLOE para o alvo de posicionamento. Defina para corresponder ao alvo. As classes YOLO padrão são suportadas. |
| `grasp_x_offset_m` | Deslocamento para frente ou para trás em `base_link`. Um valor negativo move a preensão para trás. |
| `grasp_y_offset_m` | Deslocamento lateral da preensão. `0.01` move a preensão 1 cm para a esquerda. Um valor negativo a move para a direita. |
| `grasp_z_offset_m` | Ajuste da altura de preensão. O padrão é para a garra flexível, que é mais longa que a garra padrão. Ajuste esse valor para a altura da sua garra. |
| `place_z_offset_m` | Altura extra acima do ponto de posicionamento na qual o braço solta o objeto. |

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">D</span>
<div className="rebot-step-content">

#### Terminal D — Acionar a preensão e o posicionamento

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

Para alterar o atraso, adicione o parâmetro de inicialização. Este exemplo aciona após 5 segundos.

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">E</span>
<div className="rebot-step-content">

#### Terminal E — Retornar para a posição inicial (opcional)

Em um desligamento normal, o controlador do braço tenta retornar o braço à sua posição inicial e desativar os motores. Após uma interrupção anormal ou falha de comunicação, o retorno automático à posição inicial não é confiável. Para retornar manualmente, mantenha o controlador em execução no terminal A e certifique-se de que o caminho de movimento esteja livre.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger {}
```

</div>
</section>
</div>

</TabItem>
</GraspingTabs>

## Contato

- Suporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- Página do projeto: [GitHub](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- Fórum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referências

- [reBot Arm B601-RS Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/)
- [reBot Arm B601-RS ROS2 Integration](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_ros2_integration/)
- [rebot_visual_grasp](https://github.com/xiehuangbao888/rebot_visual_grasp)
- [OrbbecSDK_ROS2](https://github.com/xiehuangbao888/OrbbecSDK_ROS2)
- [Orbbec Gemini 2 Product Page](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec Development Resources](https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API Guide](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk Repository](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk Documentation](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [realsense-ros](https://github.com/xiehuangbao888/realsense-ros)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) Docs](https://graspnet.net/)

</div>
