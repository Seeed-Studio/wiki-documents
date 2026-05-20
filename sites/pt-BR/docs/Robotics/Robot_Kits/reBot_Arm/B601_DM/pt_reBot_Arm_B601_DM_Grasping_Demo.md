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
  date: 2026-05-18
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-05-18'
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

YOLO é uma família amplamente utilizada de modelos de detecção de objetos em tempo real que podem localizar e classificar alvos em uma única passagem direta. Este tutorial usa YOLO junto com a câmera de profundidade Orbbec Gemini 2 para construir uma demonstração funcional de preensão visual em desktop para o reBot Arm B601-DM, cobrindo preparação de ambiente, integração da câmera, calibração mão‑olho e validação da preensão.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Recursos do projeto

1. **Estimativa direta da pose de preensão a partir de YOLO + OBB**  
   O pipeline usa diretamente caixas de detecção ou retângulos de área mínima OBB e toma o eixo curto como direção de abertura do gripper, evitando o processamento complexo de nuvem de pontos 3D.

2. **Integração leve de braço robótico e gripper**  
   O script principal de preensão reutiliza a interface `RebotArm` e integra IK, controle de trajetória e a máquina de estados do gripper.

3. **Open source e extensível**  
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
      <td>6-DOF + gripper</td>
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
| Gripper | 1 | ✅ |
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

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Etapa 2. Criar e configurar o ambiente conda

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

Se você quiser usar um nome de ambiente diferente, substitua `rebotarm` no comando pelo nome que preferir.

### Etapa 3. Instalar o SDK do braço robótico

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

### Etapa 4. Instalar o SDK Orbbec Gemini 2

Este projeto depende de `pyorbbecsdk`. O repositório não inclui `sdk/pyorbbecsdk` por padrão, então você precisa clonar o repositório oficial em `sdk/` por conta própria ou instalá‑lo de outra forma.

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Você também pode usar o espelho do Gitee:

```bash
cd sdk
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Para o primeiro uso, é recomendável instalar as regras udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### Etapa 5. Verificar as dependências

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
python -c "import motorbridge; print('motorbridge OK')"
```

Para o primeiro uso da câmera Orbbec, é recomendável executar `scripts/install_udev_rules.sh` dentro do diretório `pyorbbecsdk` instalado; caso contrário, a câmera pode não abrir corretamente.

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

Contagem de amostras recomendada:

- Mínimo: 5 amostras
- Recomendado: pelo menos 15 amostras

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
- Se a detecção de objetos com YOLO funciona como esperado

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
- Se a direção do eixo curto corresponde à direção esperada de abertura do gripper

Controles principais:

- Botão esquerdo do mouse: inspecionar a profundidade no pixel selecionado
- `G`: imprimir a melhor pose de preensão atual
- `Q` / `Esc`: sair

### 3. Executar o programa principal de preensão

```bash
python scripts/main.py
```

Se você só quiser validar a pose do alvo sem mover o braço robótico:

```bash
python scripts/main.py --dry-run
```

Recomenda‑se verificar primeiro a pose e o espaço de trabalho alcançável com `--dry-run` antes de executar uma preensão real.

Se `reBotArm_control_py` não estiver no local padrão, especifique‑o em `config/default.yaml`:

```yaml
robot:
  repo_root: null
```

Manter como `null` geralmente é suficiente, porque o programa tentará detectar automaticamente `sdk/reBotArm_control_py` primeiro.

Fluxo principal do programa:

1. Inicializar o braço robótico e o gripper
2. Mover para a pose de prontidão. Se você quiser alterar a pose inicial de prontidão, modifique `config/default.yaml`:

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
- O modo de calibração mão‑olho não é `eye_in_hand`
- A pose do alvo não é alcançável por IK

Recomenda‑se executar:

```bash
python scripts/main.py --dry-run
```

### 3. A profundidade de apreensão é instável

Você pode tentar ajustar:

- `grasp_pipeline.grasp.depth_quantile`
- A altura de instalação da câmera em relação à área de trabalho
- As propriedades de reflexão da superfície alvo

## Contato

- Suporte técnico: [Submit an Issue](https://github.com/EclipseaHime017/reBot-DevArm-Grasp/issues)
- Página do projeto: [GitHub](https://github.com/EclipseaHime017/reBot-DevArm-Grasp)
- Fórum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referências

- [Guia Rápido do reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/)
- [Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Introdução ao reBot Arm B601-DM baseado em LeRobot e reBot 102 Leader](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_lerobot/)
- [Página do Produto Orbbec Gemini 2](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Guia da API do Orbbec SDK v2](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [Repositório pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [Documentação do pyorbbecsdk](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
