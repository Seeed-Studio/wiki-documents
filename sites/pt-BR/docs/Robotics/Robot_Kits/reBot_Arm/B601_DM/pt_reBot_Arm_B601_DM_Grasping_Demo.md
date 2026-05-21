---
description: Este tutorial mostra como construir uma demonstração completa de preensão visual para o reBot Arm B601-DM usando Orbbec Gemini 2 e um pipeline de preensão YOLO/OBB.
title: Demonstração de Preensão Visual com reBot Arm B601-DM
keywords:
  - reBot Arm
  - B601-DM
  - Preensão
  - Gemini 2
  - YOLO
  - Calibração mão‑olho
  - Robô
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-05-20
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_grasping_demo/
---

# Demonstração de Preensão Visual com reBot Arm B601-DM

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</p>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-Orbbec%20Gemini%202-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>Percepção de profundidade · Detecção de objetos · Calibração mão‑olho · Preensão autônoma · Totalmente open source</strong>
</p>

YOLO é uma família amplamente utilizada de modelos de detecção de objetos em tempo real que pode localizar e classificar alvos em uma única passagem direta. Este tutorial usa YOLO juntamente com a câmera de profundidade Orbbec Gemini 2 para construir uma demonstração funcional de preensão visual em desktop para o reBot Arm B601-DM, cobrindo preparação de ambiente, integração da câmera, calibração mão‑olho e validação da preensão.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Recursos do projeto

1. **Estimativa direta de pose de preensão a partir de YOLO + OBB**  
   O pipeline usa caixas de detecção ou retângulos de área mínima OBB diretamente e toma o eixo curto como a direção de abertura da garra, evitando o processamento complexo de nuvem de pontos 3D.

2. **Estimativa de pose de preensão 6D com GraspNet-Baseline (opcional)**  
   O projeto também oferece suporte ao GraspNet-Baseline (`graspnet/graspnet-baseline`) para estimativa de pose de preensão 6D a partir de nuvens de pontos RGB-D, com caixas delimitadoras YOLO usadas para selecionar candidatos‑alvo para experimentos de preensão mais complexos.

3. **Integração leve de braço robótico e garra**  
   O script principal de preensão reutiliza a interface `RebotArm` e integra IK, controle de trajetória e a máquina de estados da garra.

4. **Open source e extensível**  
   Todo o código‑fonte é aberto, e os usuários podem personalizar algoritmos de controle e efeitos com base em suas próprias necessidades.

## Especificações

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
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Graus de liberdade</td>
      <td>6-DOF + garra</td>
    </tr>
    <tr>
      <td>Modelo da câmera</td>
      <td>Orbbec Gemini 2</td>
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
      <td>24V CC</td>
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

## Lista de materiais (BOM)

| Componente | Quantidade | Incluído |
|--|--|--|
| Braço robótico reBot Arm B601-DM | 1 | ✅ |
| Garra | 1 | ✅ |
| Ponte serial USB2CAN | 1 | ✅ |
| Adaptador de energia (24V) | 1 | ✅ |
| Cabo USB-C / comunicação | 1 | ✅ |
| Câmera de profundidade Orbbec Gemini 2 | 1 | ✅ |
| Conector / suporte de fixação da câmera Gemini 2 | 1 | ✅ |

### Fiação

1. Conecte a Gemini 2 ao host via USB 3.0.
2. Conecte o adaptador USB2CAN ao barramento CAN do braço.
3. Certifique‑se de que a fonte de alimentação de 24V, a câmera e o braço robótico estejam todos conectados com segurança.
4. Defina as permissões:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

## Requisitos de ambiente

| Item | Requisito |
|------|-------------|
| Sistema operacional | Ubuntu 22.04+ |
| Python | 3.10 |
| Ambiente recomendado | conda |
| Pasta de trabalho recomendada | `rebot_grasp` |
| Ambiente conda recomendado | `rebotarm` |

## Etapas de instalação

### Etapa 0. Conclua primeiro a preparação básica do braço robótico

Antes de iniciar este tutorial, conclua o conteúdo em [reBot Arm B601-DM Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/), incluindo montagem do braço robótico, inicialização do ponto zero, configuração de ID dos motores e verificações básicas de conectividade.

### Etapa 1. Clonar o repositório

Dê preferência ao repositório oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

Você também pode usar o repositório de desenvolvimento atual:

```bash
git clone https://github.com/EclipseaHime017/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Etapa 2. Criar e configurar o ambiente conda

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

Se você quiser usar um nome de ambiente diferente, substitua `rebotarm` no comando pelo nome de sua preferência.

### Etapa 3. Instalar o SDK do braço robótico

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

### Etapa 4. Instalar o SDK Orbbec Gemini 2

Este projeto depende de `pyorbbecsdk`. O repositório não inclui `sdk/pyorbbecsdk` por padrão, portanto você precisa clonar o repositório oficial em `sdk/` por conta própria ou instalá‑lo de outra forma.

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Você também pode usar o espelho Gitee:

```bash
cd sdk
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Para uso pela primeira vez, é recomendável instalar as regras udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### Etapa 5. Configurar o GraspNet (opcional)

Você não precisa do GraspNet para `scripts/main.py` ou `scripts/ordinary_grasp_pipeline.py`. Configure‑o apenas quando quiser executar `scripts/graspnet_camera_demo.py` ou `scripts/grasp.py`, que exigem GraspNet, PyTorch com suporte a CUDA, os operadores CUDA PointNet2/knn e um checkpoint pré‑treinado.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Build CUDA operators
cd pointnet2
python setup.py install
cd ../knn
python setup.py install
cd ..

# Install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
pip install .
cd ../../..
```

Após baixar o peso pré‑treinado oficial do GraspNet, coloque `checkpoint-rs.tar` em:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Em seguida, verifique `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

O campo `checkpoint` oferece suporte a três formas: um nome de arquivo é resolvido em `sdk/graspnet-baseline/checkpoints/`; um caminho relativo é resolvido a partir da raiz do projeto; um caminho absoluto é usado diretamente.

### Etapa 6. Verificar as dependências

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
python -c "import motorbridge; print('motorbridge OK')"
```

Para uso da câmera Orbbec pela primeira vez, é recomendável executar `scripts/install_udev_rules.sh` dentro do diretório `pyorbbecsdk` instalado; caso contrário, a câmera pode não abrir corretamente.

## Calibração mão‑olho

Antes de executar o pipeline completo de preensão, conclua primeiro a calibração mão‑olho Eye-in-Hand.

```bash
python scripts/collect_handeye_eih.py
```

Antes de executá‑la, certifique‑se de que o seguinte parâmetro de tamanho do ArUco em `config/default.yaml` corresponda ao marcador impresso real:

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

O resultado da calibração é salvo em:

```text
config/calibration/orbbec_gemini2/hand_eye.npz
```

A contagem recomendada de amostras é de pelo menos 5, sendo 15 ou mais o ideal.

## Execução e depuração

### 1. Verificar apenas a detecção de objetos

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
- Se a detecção de objetos YOLO funciona como esperado

### 2. Verificar apenas a estimativa de preensão

```bash
python scripts/ordinary_grasp_pipeline.py
```

Se você precisar ajustar a frequência de inferência de preensão ou a distância de recuo pré‑preensão, modifique:

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.6
    pregrasp_offset_m: 0.080
```

Este script não se conecta ao braço robótico. Ele é usado apenas para verificar:

- Se o OBB ou o retângulo de área mínima é razoável
- Se o ponto de preensão fica próximo da área central do alvo
- Se a direção do eixo curto corresponde à direção esperada de abertura da garra

Controles principais:

- Botão esquerdo do mouse: inspecionar a profundidade no pixel selecionado
- `G`: imprimir a melhor pose de preensão atual
- `Q` / `Esc`: sair

### 3. Execute o programa principal de preensão

```bash
python scripts/main.py
```

Se você quiser apenas validar a pose alvo sem mover o braço robótico:

```bash
python scripts/main.py --dry-run
```

Recomenda-se verificar primeiro a pose e o espaço de trabalho alcançável com `--dry-run` antes de executar uma preensão real.

Se `reBotArm_control_py` não estiver no local padrão, especifique-o em `config/default.yaml`:

```yaml
robot:
  repo_root: null
```

Manter como `null` geralmente é suficiente porque o programa tentará detectar automaticamente `sdk/reBotArm_control_py` primeiro.

Fluxo principal do programa:

1. Inicializar o braço robótico e o gripper
2. Mover para a pose de pronto. Se você quiser alterar a pose inicial de pronto, modifique `config/default.yaml`:

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 1.0
    duration: 3.0
```

3. Detectar alvos sobre a mesa em tempo real
4. Estimar a pose de preensão a partir do eixo curto
5. Pressione `G` para capturar o quadro atual e executar a preensão

Teclas em tempo de execução:

- `G`: agarrar o melhor alvo atual
- `R`: retomar a visualização ao vivo
- `Q` / `Esc`: sair

### 4. Demo de estimativa com câmera GraspNet (opcional)

```bash
python scripts/graspnet_camera_demo.py
```

Este script executa a estimativa de pose de preensão 6D do GraspNet apenas com a câmera RGB-D, sem conectar ao braço robótico. Ele mantém uma visualização ao vivo da câmera, usa caixas delimitadoras do YOLO para selecionar a área alvo e filtra candidatos de cena completa viáveis do GraspNet pela bbox alvo.

Controles principais:

- `G` / `Space`: executar a inferência do GraspNet no quadro atual
- `R`: retomar a visualização ao vivo
- `Q` / `Esc`: sair

Após a inferência, o Open3D pode visualizar a nuvem de pontos e os candidatos de preensão.

### 5. Programa de preensão robótica GraspNet (opcional)

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

Este script conecta a estimativa do GraspNet ao fluxo de execução do braço robótico. O YOLO seleciona o alvo, o GraspNet gera uma pose de preensão 6D, a calibração mão-olho a transforma para o referencial da base do robô, e o script verifica a alcançabilidade por IK antes de executar a sequência de movimentos de pré-preensão, preensão e retirada.

Executar `python scripts/grasp.py` inicia o fluxo completo de preensão robótica GraspNet e de fato controla o braço robótico. `--dry-run` apenas imprime a pose alvo e o resultado do filtro de candidatos sem executar o movimento de preensão. `--target-class "light blue coffee cup"` especifica a classe alvo do YOLO e apenas filtra e agarra candidatos do GraspNet para essa classe.

## FAQ

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

Isso geralmente significa que as dependências do SDK do braço robótico não estão instaladas no ambiente Python atual. Verifique:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. Pressionar `G` não executa a preensão

Causas comuns:

- `hand_eye.npz` não existe
- O modo de calibração mão-olho não é `eye_in_hand`
- A pose alvo não é alcançável por IK

Recomenda-se executar:

```bash
python scripts/main.py --dry-run
```

### 3. A profundidade de preensão é instável

Você pode tentar ajustar:

- `grasp_pipeline.grasp.depth_quantile`
- A altura de instalação da câmera em relação ao espaço de trabalho
- As propriedades reflexivas da superfície do alvo

### 4. O GraspNet informa que `pointnet2_utils` não pode ser importado de `pointnet2`

Isso geralmente significa que a extensão CUDA local em `sdk/graspnet-baseline/pointnet2` não foi compilada no ambiente conda ativo, ou que o Python está resolvendo um pacote `pointnet2` diferente. Certifique-se de que o ambiente do projeto esteja ativo e então reconstrua tanto `pointnet2` quanto `knn` nesse mesmo ambiente:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
python setup.py install

cd ../knn
python setup.py install
```

Verifique:

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. Problemas de compatibilidade de arquitetura CUDA em GPUs mais recentes ao executar o GraspNet

Se você vir `no kernel image is available for execution on the device`, ou se o PyTorch informar que a capacidade CUDA da GPU atual não é suportada, é provável que o wheel do PyTorch instalado não inclua kernels CUDA para essa arquitetura de GPU. Instale uma versão do PyTorch que suporte sua arquitetura atual de CUDA/GPU e então reconstrua as extensões CUDA locais do GraspNet.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
python setup.py install

cd ../knn
python setup.py install
```

Se você precisar especificar manualmente a arquitetura de compilação, defina `TORCH_CUDA_ARCH_LIST` antes de recompilar. Escolha o valor de acordo com a arquitetura da sua GPU e a versão do PyTorch/CUDA.

### 6. A inferência do GraspNet informa `RuntimeError: CPU not supported`

Os operadores de amostragem em `pointnet2` suportam apenas tensores CUDA. Confirme que o CUDA está disponível, que a rede GraspNet e a nuvem de pontos de entrada estão na GPU, e que `pointnet2` / `knn` foram compilados contra a versão do PyTorch no ambiente ativo.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Se a saída for `False`, corrija primeiro a instalação do CUDA / PyTorch. Se for `True` mas o erro permanecer, reconstrua `pointnet2` e `knn`.

## Contato

- Suporte técnico: [Submit an Issue](https://github.com/EclipseaHime017/reBot-DevArm-Grasp/issues)
- Página do projeto: [GitHub](https://github.com/EclipseaHime017/reBot-DevArm-Grasp)
- Fórum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referências

- [reBot Arm B601-DM Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/)
- [Getting Started with Pinocchio and MeshCat for reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Getting Started with LeRobot-based reBot Arm B601-DM and reBot 102 Leader](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_lerobot/)
- [Orbbec Gemini 2 Product Page](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Orbbec SDK v2 API Guide](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [pyorbbecsdk Repository](https://github.com/orbbec/pyorbbecsdk)
- [pyorbbecsdk Documentation](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [Graspnet-Baseline Repository](https://github.com/graspnet/graspnet-baseline)
- [Graspnet(Anygrasp) Docs](https://graspnet.net/)
