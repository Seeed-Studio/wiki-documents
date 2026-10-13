---
description: Este tutorial abrange duas implementações de preensão visual para o reBot Arm B601-RS, incluindo um pipeline YOLO/OBB e um fluxo de trabalho de preensão baseado em ROS2.
title: B601-RS com Preensão Visual
keywords:
  - reBot Arm
  - B601-RS
  - Grasping
  - RGB-D
  - YOLO
  - Hand-Eye Calibration
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
slug: /rebot_arm_b601_rs_grasping_demo
last_update:
  date: 2026-09-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-09-30'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_grasping_demo/
---
import '/src/css/rebot-wiki-style.css';

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';
import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';

# Demonstração de Preensão Visual com reBot Arm B601-RS

<RebotRsDocNav />

<div className={styles.page}>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
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
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="Demonstração de preensão visual com reBot Arm B601-RS" />
</p>

## Qual é a diferença entre os dois métodos de preensão?

Esta página cobre duas demonstrações de preensão visual com implementações diferentes. Compare os frameworks, os requisitos de calibração e os fluxos de inicialização e, em seguida, escolha um tutorial abaixo.

<div className={styles.comparison}>
  <section className={styles.methodCard} aria-label="Método 1: Python SDK">
    <span className={styles.methodNumber}>Método 01</span>
    <h3>Python SDK + YOLO / OBB</h3>
    <p>Use YOLO, uma câmera de profundidade RGB-D e o SDK Python para o fluxo completo, da configuração do ambiente e da integração da câmera até a calibração mão-olho e a depuração da preensão.</p>
    <dl>
      <div><dt>Lógica de preensão</dt><dd>Estime poses de preensão a partir de caixas de detecção ou retângulos de área mínima OBB; opcionalmente, use o GraspNet para estimativa de pose 6D.</dd></div>
      <div><dt>Calibração mão-olho</dt><dd>Conclua a calibração Eye-in-Hand com um marcador ArUco antes da primeira execução completa de preensão.</dd></div>
      <div><dt>Inicialização</dt><dd>Execute scripts Python para verificar passo a passo a detecção, a estimativa de pose e a preensão robótica.</dd></div>
    </dl>
  </section>
  <section className={styles.methodCard} aria-label="Método 2: ROS 2">
    <span className={styles.methodNumber}>Método 02</span>
    <h3>ROS 2 + YOLOE</h3>
    <p>Use ROS 2 e YOLOE para iniciar o braço, a câmera Gemini 2 / D405 / D435i e os nós de preensão em terminais separados para pegar e colocar objetos.</p>
    <dl>
      <div><dt>Lógica de preensão</dt><dd>O nó de preensão visual detecta, pega e coloca objetos. Os nomes de classe em texto especificam os alvos de preensão e de colocação.</dd></div>
      <div><dt>Calibração mão-olho</dt><dd>Não é necessária uma placa de calibração; ajuste os parâmetros de deslocamento para compensar pequenas tolerâncias de montagem e das peças impressas.</dd></div>
      <div><dt>Inicialização</dt><dd>Inicie o braço, a câmera e o nó de preensão em terminais separados e, em seguida, acione a pegada e a colocação.</dd></div>
    </dl>
  </section>
</div>

## Escolha um método de preensão

<p className={styles.selectionHint}>Alterne as abas para ver o tutorial do método escolhido e siga as etapas de instalação e execução.</p>

<GraspingTabs>
<TabItem value="python-sdk" label="Método 1 · Python SDK / OBB">

## Método de Preensão Visual 1

Esta rota usa **Python SDK + câmera RGB-D + YOLO / OBB** sem um workspace ROS 2. A rota padrão é adequada para objetos comuns sobre a mesa; ative o módulo opcional GraspNet abaixo quando precisar de uma preensão 6D mais complexa.

### 1. Recursos do projeto

1. **Estimativa direta de pose de preensão a partir de YOLO + OBB**
   O pipeline usa caixas de detecção ou retângulos de área mínima OBB diretamente e toma o eixo curto como direção de abertura do gripper, evitando o processamento complexo de nuvens de pontos 3D.
2. **Estimativa de pose de preensão 6D com GraspNet-Baseline (opcional)**
   O projeto também oferece suporte ao GraspNet-Baseline (`graspnet/graspnet-baseline`) para estimativa de pose de preensão 6D a partir de nuvens de pontos RGB-D, com caixas delimitadoras do YOLO usadas para selecionar candidatos-alvo para experimentos de preensão mais complexos.
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
| Conector da câmera / suporte de fixação | 1 | ✅ |

#### Fiação

1. Conecte a câmera de profundidade ao host via USB 3.0.
2. Conecte o adaptador USB2CAN ao barramento CAN do braço.
3. Certifique-se de que a fonte de alimentação de 48V, a câmera e o braço robótico estejam todos conectados com segurança.
4. Se encontrar problemas de permissão, execute:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. Requisitos de ambiente

| Item | Requisito |
|------|-----------|
| Sistema operacional | Ubuntu 22.04+ |
| Python | 3.10 |

### 5. Instalar o ambiente básico

Siga estas etapas em ordem. As etapas 0–3 são obrigatórias para a rota padrão; na etapa 4, escolha o SDK da câmera de acordo com o hardware. A instalação e a execução do GraspNet estão no módulo avançado separado abaixo.

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

#### Etapa 2. Crie e configure o ambiente conda

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

:::note Resultado esperado
O prompt do terminal mostra `rebotarm`, indicando que este ambiente está ativo e que as dependências seguintes serão instaladas nele.
:::

Se quiser usar um nome de ambiente diferente, substitua `rebotarm` no comando pelo nome que preferir.

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

Se `pip install -e .` relatar `Multiple top-level packages discovered in a flat-layout`, adicione descoberta explícita de pacotes em `pyproject.toml` em `reBotArm_control_py` e, em seguida, execute `pip install -e .` novamente:

```toml
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

As configurações B601 DM e RS são selecionadas por meio dos arquivos de configuração do SDK. Para o B601-RS, confirme o seguinte em `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

Os programas de preensão visual leem essa configuração do SDK e selecionam automaticamente o modo de controle do braço e os parâmetros do gripper correspondentes.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Etapa 4. Instale o SDK da câmera de profundidade

Este projeto oferece suporte a câmeras de profundidade RGB-D como Orbbec Gemini 2 e RealSense D435i / D405. Instale o SDK que corresponde à sua câmera; se o seu ambiente já conseguir importar o driver da câmera, você pode pular esta etapa.

**Orbbec Gemini 2**

A câmera de profundidade Orbbec Gemini 2 depende de `pyorbbecsdk`, o wrapper Python para o Orbbec SDK v2. Dê preferência à instalação do pacote Python pré-compilado.

No Linux / Ubuntu, configure as regras udev antes de usar a câmera pela primeira vez, qualquer que seja o método de instalação escolhido. As regras permitem que usuários comuns acessem o dispositivo USB e são instaladas em todo o sistema, portanto cada máquina precisa desta configuração apenas uma vez. Ignore os comandos correspondentes se as regras já estiverem configuradas.

<Tabs defaultValue="pip">
<TabItem value="pip" label="Opção 1: Instalar com pip (recomendado)">

```bash
pip install pyorbbecsdk2
```

**Configurar as regras udev (Linux / Ubuntu)**

O `pyorbbecsdk2` 2.1.0 e posterior inclui um script de configuração do ambiente. Mantenha o ambiente conda ativo e execute o script a partir do pacote instalado. Ele solicita permissão sudo e instala e recarrega as regras udev automaticamente.

```bash
orbbec_sdk_dir="$(python -c 'import os, pyorbbecsdk; print(os.path.dirname(pyorbbecsdk.__file__))')"
python "$orbbec_sdk_dir/shared/setup_env.py"
```

Se `shared/setup_env.py` não for encontrado, execute `pip install --upgrade "pyorbbecsdk2>=2.1.0"` e repita os comandos acima. Consulte o [guia oficial de instalação da Orbbec](https://orbbec.github.io/pyorbbecsdk/source/2_installation/install_the_package.html) para mais detalhes.

</TabItem>
<TabItem value="github" label="Opção 2: Obter pelo GitHub">

Mantenha o ambiente `rebotarm` ativo. Instale as dependências de compilação e, em seguida, compile a extensão Python:

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

Usuários na China continental podem substituir o comando de clone do GitHub acima por:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Após a compilação, confirme que `install/lib` contém `pyorbbecsdk*.so` e as bibliotecas compartilhadas da Orbbec (em `install/lib/pyorbbecsdk/` nas versões mais recentes) e, em seguida, instale o pacote Python. Consulte o [guia oficial de compilação do código-fonte da Orbbec](https://orbbec.github.io/pyorbbecsdk/source/2_installation/build_the_package.html) para a configuração do CMake e do conda.

```bash
pip install -e .
```

**Configurar as regras udev (Linux / Ubuntu)**

Execute o seguinte a partir da raiz do repositório `pyorbbecsdk` clonado. As versões mais recentes usam o script de configuração do ambiente; as versões anteriores usam `install_udev_rules.sh`:

```bash
if [ -f scripts/env_setup/setup_env.py ]; then
  python scripts/env_setup/setup_env.py
else
  sudo bash scripts/install_udev_rules.sh
  sudo udevadm control --reload-rules
  sudo udevadm trigger
fi
```

Volte à raiz do projeto antes de continuar com a verificação e as etapas de execução:

```bash
cd ../..
```

</TabItem>
</Tabs>

Se os dois métodos de instalação falharem, consulte a documentação oficial da Orbbec abaixo.

**Verificar instalação**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

**RealSense D435i / D405**

As câmeras RealSense dependem de `pyrealsense2`. Normalmente você pode instalá-lo diretamente com pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Se o seu sistema precisar da cadeia de ferramentas completa do RealSense ou de regras udev, siga a [documentação oficial do librealsense](https://github.com/realsenseai/librealsense).

:::note Resultado esperado
O comando de verificação correspondente imprime `pyorbbecsdk OK` ou `pyrealsense2 OK` sem um `ModuleNotFoundError`.
:::

**Resumo de recursos do SDK**

| Recurso | Link |
|---------|------|
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
└── environment.yml               # Recommended conda environment file
```

### 7. Calibração mão-olho

Antes de executar o pipeline completo de preensão, conclua primeiro a calibração mão-olho Eye-in-Hand.

Antes de executar o script de calibração, inicie e verifique a interface CAN:

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

Depois de confirmar a configuração, execute a calibração automática:

```bash
python scripts/collect_handeye_eih.py
```


No modo automático, o braço percorre 50 poses predefinidas e registra uma amostra sempre que o marcador ArUco é detectado de forma estável. Mesmo que você interrompa o processo com `c` ou `q`, o script ainda tenta calcular o resultado da calibração a partir das amostras coletadas.

Se você quiser mover o braço robótico manualmente durante a coleta, use o modo manual:

```bash
python scripts/collect_handeye_eih.py --manual
```

No modo manual, o braço entra em modo de compensação de gravidade. Mova o efetuador final para um ângulo de visão adequado, pressione `Enter` para capturar e pressione `c` ou `q` para finalizar e calcular o resultado.

:::tip
Se, após a calibração, você achar que a precisão de preensão do braço robótico não atende aos seus requisitos, você pode definir os parâmetros `X` (frente-trás), `Y` (esquerda-direita), `Z` (cima-baixo) em `config/default.yaml` sob `calibration.hand_eye_compensation_m` para fornecer compensação de posição.
:::

O resultado da calibração é salvo em:

```text
config/calibration/<camera_type>/hand_eye.npz
```

A contagem de amostras recomendada é de pelo menos 5 amostras, sendo 15 ou mais recomendado.

### 8. Execução e depuração

Verifique os cenários nesta ordem: os dois primeiros não se conectam ao braço robótico e ajudam a conferir a câmera, a detecção e a estimativa de preensão. Os dois seguintes se conectam ao braço robótico e o controlam.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

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

- A câmera abre corretamente
- O modelo YOLO é carregado corretamente
- A detecção de objetos com YOLO funciona como esperado

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
- Se o ponto de preensão está próximo da área central do alvo
- Se a direção do eixo curto corresponde à direção esperada de abertura do gripper

Controles principais:

- Botão esquerdo do mouse: inspecionar a profundidade no pixel selecionado
- `G`: imprimir a pose de preensão atual considerada melhor
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

Para validar a pose alvo ignorando o movimento de preensão:

```bash
python scripts/main.py --dry-run
```

Verifique a pose e o espaço de trabalho com `--dry-run` antes de executar uma preensão real. Neste modo, o script atual ainda inicializa o braço, move-se para a pose de prontidão e faz a limpeza e o retorno à posição inicial ao sair. Para verificação apenas da visão, use os dois primeiros scripts, que não se conectam ao braço.

Fluxo principal do programa:

1. Inicializar a câmera RGB-D e confirmar que o fluxo de imagem está disponível.
2. Habilitar o braço robótico e o gripper.
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

#### 4. `scripts/set.py` — Programa de pegar e colocar

Função: pegar a banana e colocá-la na caixa.

```bash
python scripts/set.py
```

Fluxo concluído:

1. Inicialização da câmera e do braço, mover para a posição de prontidão
2. Visualização em tempo real da câmera + detecção de objetos YOLO e segmentação de instâncias
3. Pressione `G` para congelar o quadro, calcular a pose alvo do braço via transformação mão-olho
4. O braço se move para agarrar a banana e erguer
5. O braço coloca a banana na caixa e retorna à pose inicial
6. Pressione `Q` para sair do sistema, o braço retorna à posição zero

</div>
</section>
</div>

### 9. Módulo avançado GraspNet (opcional)

A rota padrão Python SDK / OBB não exige o GraspNet. Siga estas etapas somente quando precisar estimar poses de preensão 6D a partir de nuvens de pontos RGB-D.

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Etapa 1. Instalar o GraspNet e os operadores CUDA

Você não precisa do GraspNet para `scripts/main.py` ou `scripts/ordinary_grasp_pipeline.py`. Configure-o apenas quando quiser executar `scripts/graspnet_camera_demo.py` ou `scripts/grasp.py`, que exigem GraspNet, PyTorch com suporte a CUDA, os operadores CUDA PointNet2/knn e um checkpoint pré-treinado.

As extensões `pointnet2` / `knn` do GraspNet exigem um compilador CUDA. Antes de começar, certifique-se de que o ambiente ativo consiga encontrar `nvcc` e verifique se a versão CUDA relatada por `nvcc` corresponde à versão CUDA usada para compilar o PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Se `nvcc` estiver ausente ou se a versão CUDA relatada por `nvcc` não corresponder a `torch.version.cuda`, instale um compilador CUDA que corresponda à versão CUDA atual do seu PyTorch. Por exemplo, se o PyTorch indicar `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

Você também pode instalar uma compilação do PyTorch que corresponda à sua versão atual do `nvcc`. As duas versões devem corresponder, caso contrário a compilação de `pointnet2` / `knn` falhará com `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`.

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
Observação: Se você seguir a documentação do repositório oficial graspnet-baseline e usar `python setup.py install`, podem ocorrer erros relacionados ao CUDA / PyTorch. Recomendamos usar `pip install . --no-build-isolation` para que a extensão seja compilada com a configuração de PyTorch e CUDA já instalada no ambiente conda ativo.
:::

:::tip
Se a compilação falhar com `fatal error: cusparse.h: No such file or directory`, execute `find $CONDA_PREFIX -name cusparse.h` e certifique-se de que o diretório que contém `cusparse.h` esteja incluído em `CPATH` / `CPLUS_INCLUDE_PATH`. Se você instalou os cabeçalhos do CUDA a partir do conda `cuda-toolkit`, o caminho de include geralmente é `$CONDA_PREFIX/targets/x86_64-linux/include` em vez do caminho pip `nvidia/cu13/include` mostrado acima.
:::

:::tip
Além disso, dependências mais antigas da GraspNet API ainda podem usar o nome de pacote obsoleto `sklearn`. O comando `sed` o substitui pelo nome de pacote atualmente recomendado `scikit-learn` para evitar `The 'sklearn' PyPI package is deprecated` durante a instalação. A menos que você também atualize as dependências mais antigas da GraspNet API, mantenha a restrição `numpy==1.23.4` porque `transforms3d==0.3.1` ainda usa aliases antigos do NumPy como `np.float`.
:::

**Configurar modelo pré-treinado**

Baixe os pesos oficiais pré-treinados da GraspNet a partir do repositório oficial graspnet-baseline [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A), depois coloque `checkpoint-rs.tar` em:

```bash
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

#### Etapa 2. Executar a demonstração de estimativa de câmera do GraspNet

```bash
python scripts/graspnet_camera_demo.py
```

Este script executa a estimativa de pose de preensão 6D da GraspNet usando apenas a câmera RGB-D, sem conectar ao braço robótico. Ele mantém uma visualização ao vivo da câmera, usa caixas delimitadoras do YOLO para selecionar a área alvo e filtra candidatos de cena completa viáveis da GraspNet pela bbox do alvo.

Controles principais:

- `G` / `Space`: executar inferência GraspNet no quadro atual
- `R`: retomar a visualização ao vivo
- `Q` / `Esc`: sair

Após a inferência, o Open3D pode visualizar a nuvem de pontos e os candidatos de preensão.

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Etapa 3. Executar o programa de preensão robótica do GraspNet

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

Este script conecta a estimativa da GraspNet ao fluxo de execução do braço robótico. O YOLO seleciona o alvo, a GraspNet gera uma pose de preensão 6D, a calibração mão-olho a transforma para o referencial da base do robô, e o script verifica a alcançabilidade de IK antes de executar a sequência de movimentos de pré-preensão, preensão e recuo.

Executar `python scripts/grasp.py` inicia todo o fluxo de preensão robótica do GraspNet e controla o braço robótico. `--dry-run` imprime a pose alvo e o resultado da filtragem de candidatos e ignora o movimento de preensão; o script atual ainda inicializa o braço, move-se para a pose de prontidão e faz a limpeza e o retorno à posição inicial ao sair. `--target-class "light blue coffee cup"` especifica a classe alvo do YOLO e apenas filtra e realiza a preensão dos candidatos do GraspNet para essa classe.

</div>
</section>
</div>

### 10. FAQ


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
- As propriedades reflexivas da superfície alvo

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

Se você vir `no kernel image is available for execution on the device`, ou se o PyTorch informar que a capacidade CUDA da GPU atual não é suportada, é provável que o wheel do PyTorch instalado não inclua kernels CUDA para essa arquitetura de GPU. Instale uma compilação do PyTorch que suporte sua arquitetura atual de CUDA/GPU e, em seguida, reconstrua as extensões CUDA locais do GraspNet.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Se você precisar especificar manualmente a arquitetura de compilação, defina `TORCH_CUDA_ARCH_LIST` antes de recompilar. Escolha o valor de acordo com a arquitetura da sua GPU e a versão do PyTorch/CUDA.

<h4>6. A inferência do GraspNet informa <code>RuntimeError: CPU not supported</code></h4>

Os operadores de amostragem em `pointnet2` só suportam tensores CUDA. Confirme que o CUDA está disponível, que a rede GraspNet e a nuvem de pontos de entrada estão na GPU, e que `pointnet2` / `knn` foram compilados com a versão do PyTorch no ambiente ativo.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Se a saída for `False`, corrija primeiro a instalação do CUDA / PyTorch. Se for `True` mas o erro permanecer, reconstrua `pointnet2` e `knn`.

</TabItem>
<TabItem value="ros2-yoloe" label="Método 2 · ROS 2 / YOLOE">

## Método de Preensão Visual 2

### 1. Visão Geral do Projeto

Esta solução usa **ROS2** e **YOLO** no reBot Arm B601-RS para detecção, preensão e posicionamento de objetos. O sistema inicia o braço, a câmera de profundidade e os nós de preensão em terminais separados.

A câmera de profundidade atualmente oferece suporte a **Orbbec Gemini 2** e **RealSense D405 / D435i**. Este fluxo de trabalho não requer uma placa de calibração para calibração mão-olho. Devido às tolerâncias de montagem e das peças impressas, cada braço pode apresentar um pequeno desvio na preensão.

### 2. Configuração do Ambiente


<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Etapa 1. Instalar o workspace ROS2 do braço robótico

Primeiro conclua a instalação e compilação do workspace `rebotarm_ros2` seguindo [reBot Arm B601-RS ROS2 Integration](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_ros2_integration/).

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Etapa 2. Instalar a câmera

Escolha uma das configurações de câmera abaixo e expanda a seção correspondente.

<details className="content-details">
<summary>Clique para expandir a configuração do Gemini 2</summary>

Clone o Orbbec ROS2 SDK no workspace e mude para o branch `v2-main`:

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
<summary>Clique para expandir os passos de instalação do D405 / D435i</summary>

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
Se um proxy estiver habilitado, desative-o antes de configurar novamente:

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

4. Compile o pacote RealSense ROS2:

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
cd ~/rebotarm_ros2
colcon build --cmake-args -DUSE_LIFECYCLE_NODE=OFF
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Etapa 3. Importar o pacote de preensão visual

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
cd ~/rebotarm_ros2
colcon build --symlink-install
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Etapa 4. Instalar o ambiente YOLO / YOLOE

`grasp_yolo` chama o Ultralytics YOLOE a partir do Python. Use um ambiente conda dedicado e não use o `/usr/bin/python3` do sistema.

**Criar o ambiente**

```bash
conda create -n yolo python=3.10
conda activate yolo

pip install -U ultralytics
pip install "numpy==1.26.4" transforms3d

# YOLOE open-vocabulary classes require the Ultralytics CLIP package, not the PyPI clip package
pip install git+https://github.com/ultralytics/CLIP.git
```

Se você tiver uma GPU NVIDIA, primeiro confirme que o CUDA está disponível. Se a saída for `False`, instale uma compilação correspondente de CUDA / PyTorch. Você também pode continuar usando a CPU, mas a taxa de quadros de detecção será menor:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Verifique o YOLOE:

```bash
python -c "from ultralytics import YOLOE; print('YOLOE OK')"
```

**Baixar pesos para `~/rebot_visual_model`**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP (required by YOLOE set_classes, about 242MB)
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# YOLOE segmentation weights can also download on first run; placing them here is recommended
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### Etapa 5. Compilar o workspace

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
colcon build --symlink-install
source ~/rebotarm_ros2/install/setup.bash
```

O ambiente de preensão visual agora está pronto. Em todo novo terminal, faça o source do seguinte antes de executar comandos de preensão visual:

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

</div>
</section>
</div>

### 3. Executar o Projeto

Antes de começar, confirme que o braço está ligado, que a interface CAN é `can0` e que o Gemini 2, D405 ou D435i está conectado via USB. Em seguida, ative o CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Inicie a pilha em terminais separados para que a lógica de preensão seja mais fácil de acompanhar. Gemini 2, D405 e D435i usam comandos de lançamento diferentes; escolha aqueles para a sua câmera. Se quiser um lançamento com um clique, você pode escrever seu próprio script de inicialização.


<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">A</span>
<div className="rebot-step-content">

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
  depth_module.depth_profile:=640x360x30 \
  depth_module.color_profile:=640x360x30
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">C</span>
<div className="rebot-step-content">

#### Terminal C — Mover para a pose de observação + detecção YOLO

Ative primeiro o seu ambiente conda com `conda activate yolo`. Se o nome do ambiente não for `yolo`, substitua-o pelo nome real do seu ambiente conda.

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
  -p yolo_device:=gpu \
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

Altere o caminho do Python para o ambiente YOLO que você criou.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args \
-p yolo_model:=/home/ubuntu/rebot_visual_model/yoloe-26s-seg.pt \
-p color_topic:=/camera/camera/color/image_raw \
-p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
-p color_info_topic:=/camera/camera/color/camera_info \
-p optical_frame:=camera_color_optical_frame \
-p target_class:=cube \
-p place_class:=box \
-p yolo_device:=gpu \
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

Altere o caminho do Python para o ambiente YOLO que você criou.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

~/miniconda3/envs/yolov8/bin/python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:=~/rebot_visual_model/yoloe-26s-seg.pt \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=gpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_y_offset_m:=0.01 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

| Parâmetro | Descrição |
|-----------|-------------|
| `yolo_device:=gpu` | Usar a GPU; defina como `cpu` se você não tiver uma GPU dedicada. Você também pode usar `yolo_device:=0` para a GPU 0 |
| `target_class` | Nome de classe de texto YOLOE do objeto a ser agarrado; altere para corresponder ao objeto real. Suporta as classes padrão do YOLO |
| `place_class` | Nome de classe de texto YOLOE do alvo de colocação; altere para corresponder ao objeto real. Suporta as classes padrão do YOLO |
| `grasp_x_offset_m` | Deslocamento para frente/trás em `base_link`; um valor negativo puxa a pose para trás |
| `grasp_y_offset_m` | Deslocamento de preensão esquerda/direita. `0.01` desloca 1 cm para a esquerda; um valor negativo desloca para a direita |
| `grasp_z_offset_m` | Ajuste fino da altura de preensão. O padrão é para o gripper flexível, que é mais longo que o gripper padrão |
| `place_z_offset_m` | Elevação extra usada ao colocar, para controlar a que altura o objeto é liberado acima do ponto de colocação |

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">D</span>
<div className="rebot-step-content">

#### Terminal D — Agarrar e colocar com um clique

O atraso de disparo padrão é de 3 segundos.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

Para alterar o atraso, adicione um parâmetro. Por exemplo, disparar após 5 segundos:

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">E</span>
<div className="rebot-step-content">

#### Terminal E — Retornar para a posição inicial (opcional)

Na compilação mais recente do `rebotarm`, pressionar `Ctrl + C` no terminal faz o braço retornar automaticamente para a posição inicial. Para retorná-lo manualmente:

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
