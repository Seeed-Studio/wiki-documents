---
description: Este wiki mostra como implantar o demo de preensão visual GraspNet do reBot Arm B601-DM em NVIDIA Jetson. Ele abrange a configuração do ambiente Jetson, operadores CUDA do GraspNet, configuração da câmera RGB-D Orbbec Gemini 2, exportação do YOLO TensorRT, calibração mão‑olho, uso da interface Web, uso via CLI e controle pela API HTTP.
title: Preensão Visual GraspNet no Jetson com reBot-DM
keywords:
  - reBot Arm
  - B601-DM
  - GraspNet
  - Jetson
  - Physical AI
  - Orbbec Gemini 2
  - YOLO
  - TensorRT
  - Visual Grasping
image: https://files.seeedstudio.com/wiki/graspnet/front-graspnet.png
slug: /rebot_arm_b601_dm_graspnet_visual_grasping
sku: E26051901
last_update:
  date: 06/15/2026
  author: Dayu
createdAt: '2026-06-15'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_graspnet_visual_grasping/
---

# Preensão Visual GraspNet no Jetson com reBot Arm B601-DM

Este wiki explica como implantar o **demo de preensão visual do reBot Arm B601-DM** em NVIDIA Jetson. O demo combina uma câmera RGB-D, segmentação por instância com YOLO, estimação de pose de preensão 6-DoF com GraspNet, calibração olho‑na‑mão e controle de robô real, para que o braço possa selecionar e agarrar objetos comuns sobre uma mesa.

A versão 1.0 deste guia foca em uma implantação confiável com um único Jetson e no fluxo de operação diária. A configuração padrão usa **Orbbec Gemini 2** como câmera RGB-D, **YOLO11n-seg TensorRT** para filtragem de alvos e **GraspNet** para geração genérica de poses de preensão 6-DoF.

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/graspnet/front-graspnet.png" />
</div>

<div class="table-center">
<table style={{ textAlign: 'center' }}>
  <tr>
    <th>Kit reBot Arm B601-DM com Jetson Orin</th>
  </tr>
  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e26052001-rebot-arm-b601-dm-bundle-with-jetson-thor.jpg" style={{ width: 600, height: 'auto' }} />
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{ textAlign: 'center' }}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle-with-Jetson-Orin.html">
          <strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

## O que você vai construir

O pipeline de execução é:

```text
Orbbec Gemini 2 RGB-D camera
        |
YOLO instance segmentation for target filtering
        |
GraspNet 6-DoF grasp pose estimation
        |
Eye-in-hand calibration transform
        |
reBot Arm IK trajectory and gripper force control
        |
Optional base rotation and object placement
```

O projeto oferece três maneiras práticas de usar o sistema:

| Modo | Ponto de entrada | Uso típico |
| --- | --- | --- |
| Web UI | `scripts/grasp_web.py` | Vídeo ao vivo, seleção de alvo, pré-visualização de preensão, preensão real, ajuste de offset |
| CLI | `scripts/grasp.py` | Preensão sem interface gráfica ou testes roteirizados |
| HTTP API | `scripts/grasp_curl.sh` and `scripts/grasp_api_client.py` | Controle remoto, automação, integração com outros aplicativos |

## Preparação de Hardware e Sistema

Prepare o seguinte hardware antes de começar:

- reBot Arm B601-DM
- Dispositivo NVIDIA Jetson executando JetPack 6.x ou JetPack 7.x
- Câmera RGB-D Orbbec Gemini 2
- Adaptador USB2CAN para o barramento CAN do robô
- Cabo USB 3.0 para a câmera
- Marcador ArUco para calibração mão‑olho, `DICT_4X4_50`, ID `0`, aresta de 0,1 m
- Uma mesa estável, espaço livre suficiente ao redor do braço e um método de desligamento de emergência

:::warning
Este demo aciona um braço robótico real. Durante todos os testes de movimento e de preensão, mantenha mãos, cabos e objetos soltos fora da área de trabalho do braço. Comece com `--dry-run`, verificações somente leitura e pequenos valores de deslocamento antes de habilitar a execução completa do robô.
:::

Conecte o hardware:

1. Conecte a Gemini 2 ao Jetson via USB 3.0.
2. Conecte o adaptador USB2CAN ao barramento CAN do reBot Arm e depois ao Jetson.
3. Ligue o reBot Arm.
4. Confirme que os dispositivos estão visíveis:

```bash
lsusb
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null || true
```

Defina permissões temporárias de dispositivo para a primeira inicialização:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0 2>/dev/null || true
sudo chmod 666 /dev/ttyACM0 2>/dev/null || true
```

Para dispositivos seriais, também é recomendado adicionar o usuário atual ao grupo `dialout`, depois sair da sessão e entrar novamente:

```bash
sudo usermod -aG dialout $USER
```

## Implantar o projeto no Jetson

**Passo 1. Instalar pacotes de sistema e Miniconda**

```bash
sudo apt update
sudo apt install -y git wget curl build-essential cmake libusb-1.0-0-dev python3-pip

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

**Passo 2. Clonar o projeto**

```bash
git clone https://github.com/jjjadand/reBot-DevArm-Grasp.git rebot_grasp-jetson
cd rebot_grasp-jetson
```

Se você estiver usando um pacote interno em vez do repositório público, copie esse diretório de projeto para o Jetson e execute os comandos restantes a partir da raiz do projeto.

**Passo 3. Criar o ambiente Python**

Use Python 3.10 no JetPack 6.x. Use Python 3.12 no JetPack 7.x / Thor.

```bash
# JetPack 6.x
conda create -y -n graspnet python=3.10

# JetPack 7.x / Thor
# conda create -y -n graspnet python=3.12

conda activate graspnet
python -m pip install -U pip wheel setuptools
```

Verifique suas versões de JetPack e CUDA:

```bash
cat /etc/nv_tegra_release
nvcc --version
```

**Passo 4. Instalar o PyTorch compatível com Jetson**

Não instale o pacote genérico PyTorch CPU/GPU do PyPI no Jetson. Instale um wheel que corresponda às suas versões de JetPack, Python e CUDA. Para usuários de reComputer, você também pode seguir o guia dedicado: [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/).

Pontos de partida comuns são:

```bash
# JetPack 6.x, CUDA 12.x, Python 3.10
pip install --extra-index-url https://pypi.jetson-ai-lab.io/jp6/cu126 torch torchvision

# JetPack 7.x / Thor, CUDA 13.x, Python 3.12
pip install --extra-index-url https://pypi.jetson-ai-lab.io/sbsa/cu130 torch torchvision
```

Verifique o CUDA a partir do Python:

```bash
python - <<'PY'
import torch
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("device:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "none")
PY
```

`cuda available` deve ser `True` antes de continuar.

**Passo 5. Instalar dependências Python**

```bash
pip install -r requirements-graspnet-jetson.txt
```

**Passo 6. Instalar os SDKs do robô, GraspNet e GraspNet API**

```bash
mkdir -p sdk

git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
pip install -e sdk/reBotArm_control_py

git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
git clone https://github.com/graspnet/graspnetAPI.git sdk/graspnetAPI
pip install -e sdk/graspnetAPI
```

Baixe o checkpoint pré-treinado do GraspNet na página de download do GraspNet e coloque-o aqui:

```text
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

**Passo 7. Definir caminhos CUDA e compilar os operadores CUDA do GraspNet**

Defina o caminho do CUDA para a sua versão do JetPack:

```bash
# JetPack 6.x example
export CUDA_HOME=/usr/local/cuda-12.6

# JetPack 7.x / Thor example
# export CUDA_HOME=/usr/local/cuda-13.0

export PATH="$CUDA_HOME/bin:$PATH"
export LD_LIBRARY_PATH="$CUDA_HOME/lib64:$LD_LIBRARY_PATH"
```

Compile as extensões CUDA usadas pelo GraspNet:

```bash
bash scripts/install_graspnet_cuda_ops.sh
bash scripts/install_graspnet_cuda_ops.sh --check
```

Se você alterar JetPack, Python, CUDA ou PyTorch depois, recompile com:

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

**Passo 8. Instalar o SDK da câmera Orbbec**

O projeto inclui um auxiliar que instala `pyorbbecsdk2` no ambiente Python ativo:

```bash
bash scripts/install_pyorbbecsdk.sh
```

Se você precisar compilar o SDK localmente, primeiro clone a árvore de código-fonte e execute o modo de código-fonte:

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git sdk/pyorbbecsdk
bash scripts/install_pyorbbecsdk.sh --from-source
```

Instale as regras udev da Orbbec quando a árvore de código-fonte do SDK estiver disponível:

```bash
sudo bash sdk/pyorbbecsdk/scripts/env_setup/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**Passo 9. Baixar pesos do YOLO e exportar TensorRT no Jetson de destino**

Arquivos de engine TensorRT são específicos do dispositivo. Sempre exporte o `.engine` no Jetson que irá executar o demo.

```bash
mkdir -p models
wget https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-seg.pt -O models/yolo11n-seg.pt

yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 half=True device=0 workspace=4
```

A saída esperada é:

```text
models/yolo11n-seg.engine
```

Se a exportação FP16 falhar na sua plataforma, exporte sem `half=True`:

```bash
yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 device=0 workspace=4
```

## Verificar e Calibrar

Execute estas verificações em ordem antes de tentar uma preensão real.

**1. Verificar a câmera RGB-D**

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/verify_pyorbbec_stream.py
python scripts/verify_pyorbbec_stream.py --preview --seconds 10
```

A verificação somente texto deve relatar informações dos frames de RGB e profundidade. A verificação com pré-visualização deve mostrar janelas de RGB e profundidade quando um monitor estiver disponível.

**2. Verificar a conexão do robô**

Comece com o modo somente leitura:

```bash
python scripts/verify_rebot_arm_motion.py --read-only
```

Depois execute um pequeno deslocamento na junta 6 após confirmar que o caminho do braço está livre:

```bash
python scripts/verify_rebot_arm_motion.py --deg 5
```

**3. Verificar a pilha GraspNet**

```bash
python scripts/verify_graspnet_stack.py
```

Se a câmera ainda não estiver conectada, mas você só quiser verificar Python, CUDA, GraspNet e arquivos YOLO:

```bash
python scripts/verify_graspnet_stack.py --skip-camera
```

**4. Executar calibração olho‑na‑mão**

Este projeto usa calibração olho‑na‑mão: a câmera é montada no efetuador final e o marcador ArUco é fixado na mesa. A configuração padrão espera um marcador `DICT_4X4_50`, ID `0`, de 0,1 m. O repositório inclui arquivos de marcador imprimíveis como `aruco100x100.pdf`.

Coleta automática:

```bash
python scripts/collect_handeye_eih.py
```

Coleta manual com compensação de gravidade:

```bash
python scripts/collect_handeye_eih.py --manual
```

Os resultados da calibração são salvos no diretório da câmera ativa:

```text
config/calibration/orbbec_gemini2/hand_eye.npz
config/calibration/orbbec_gemini2/intrinsics.npz
```

Verifique a calibração salva:

```bash
python scripts/verify_handeye_calibration.py
```

Recalibre sempre que o suporte da câmera, o gripper, o tamanho da placa ArUco ou a geometria da mesa forem alterados.

## Executar a demonstração Web

A interface Web é a primeira interface de usuário recomendada. Ela fornece vídeo MJPEG ao vivo, seleção de alvo, pré-visualização de preensão, execução real de preensão, ajuste de compensação, movimentação da base, controle do gripper, pose de pronto e operações de redefinição.

Comece primeiro no modo de pré-visualização. Isso não executa movimento real do robô:

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

Abra a interface Web a partir de um navegador:

```text
http://<jetson_ip>:8090
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/graspnet/web.png" />
</div>

Use o modo de pré-visualização para confirmar o fluxo da câmera, detecções YOLO, filtragem de alvos e geração de pontos de preensão. Clique no controle de inferência ou atualização na interface Web para atualizar a pré-visualização do GraspNet.

Quando a cena estiver estável e as etapas de verificação tiverem sido concluídas, inicie a execução real do robô:

```bash
python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --enable-robot \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

Para os primeiros testes reais, desative o posicionamento pós-preensão para que o braço execute apenas o movimento de preensão e recuperação:

```bash
python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8090 \
  --enable-robot \
  --no-place-after-grasp \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

Opções de inicialização úteis:

| Opção | Finalidade |
| --- | --- |
| `--enable-robot` | Permitir movimento real do braço e do gripper |
| `--target-class cup` | Pré-selecionar uma classe de alvo |
| `--no-yolo` | Desativar filtragem YOLO e executar GraspNet em cena completa |
| `--camera-type orbbec_gemini2` | Forçar o driver da câmera |
| `--no-place-after-grasp` | Ignorar rotação da base e posicionamento após a preensão |
| `--num-point 12000` | Reduzir a contagem de pontos do GraspNet para memória do Jetson |
| `--cloud-crop-nsample 32` | Reduzir amostras do CloudCrop para memória do Jetson |
| `--graspnet-interval 2.0` | Definir o intervalo de atualização automática do GraspNet quando ativado |

O fluxo de trabalho normal da interface Web é:

1. Clique em **Ready** para mover o braço para a pose de pronto.
2. Selecione uma classe de alvo ou deixe em branco para usar objetos detectados.
3. Clique em **Infer** ou **Refresh** para calcular uma pose de preensão.
4. Verifique se o marcador de preensão parece razoável no vídeo.
5. Ajuste o gripper, a câmera ou a compensação da base, se necessário.
6. Clique em **Real Grasp** somente quando o caminho do braço estiver livre.
7. Use **Reset** se a cena mudar ou se o robô precisar retornar a um estado seguro.

Os valores de compensação são usados para corrigir pequenos erros mecânicos e de calibração. Após o ajuste na interface Web, persista os valores em `config/compensation.json` ou copie valores estáveis para suas notas de implantação. Use incrementos pequenos, por exemplo 0,005 m para deslocamentos de posição e 1 a 2 graus para deslocamentos de rotação.

## Uso via CLI e API

Para uma execução de teste sem interface gráfica, use:

```bash
python scripts/grasp.py --dry-run --camera-type orbbec_gemini2 --target-class cup
```

Para GraspNet em cena completa sem filtragem YOLO:

```bash
python scripts/grasp.py --dry-run --camera-type orbbec_gemini2 --no-yolo
```

Para execução real via CLI:

```bash
python scripts/grasp.py --camera-type orbbec_gemini2 --target-class cup
```

Desative o posicionamento durante a colocação em serviço via CLI:

```bash
python scripts/grasp.py \
  --camera-type orbbec_gemini2 \
  --target-class cup \
  --no-place-after-grasp
```

Para inspecionar a saída ao vivo do GraspNet sem executar o robô:

```bash
python scripts/graspnet_camera_demo.py --auto --target-class cup
python scripts/graspnet_camera_demo.py --auto --no-yolo --no-visualizer
```

Para automação HTTP, inicie o serviço Web com o auxiliar:

```bash
bash scripts/grasp_curl.sh serve --enable-robot --no-auto-graspnet
```

Em outro terminal:

```bash
bash scripts/grasp_curl.sh state
bash scripts/grasp_curl.sh ready
bash scripts/grasp_curl.sh target bottle
bash scripts/grasp_curl.sh infer
bash scripts/grasp_curl.sh grasp
bash scripts/grasp_curl.sh reset
```

As mesmas operações podem ser chamadas diretamente com `curl`:

```bash
BASE=http://127.0.0.1:8090

curl -s "$BASE/state"
curl -s -X POST "$BASE/ready" -H "Content-Type: application/json" -d "{}"
curl -s -X POST "$BASE/target" -H "Content-Type: application/json" -d '{"class_name":"bottle"}'
curl -s -X POST "$BASE/infer" -H "Content-Type: application/json" -d "{}"
curl -s -X POST "$BASE/grasp" -H "Content-Type: application/json" -d "{}"
```

Outros endpoints úteis:

| Endpoint | Método | Finalidade |
| --- | --- | --- |
| `/state` | GET | Estado atual de detecção, preensão e runtime Web |
| `/robot/state` | GET | Juntas do robô, pose do TCP, estado do gripper |
| `/stream.mjpg` | GET | Fluxo de câmera MJPEG |
| `/compensation` | POST | Definir compensação do gripper, da câmera e da base |
| `/joint/limits` | GET | Ler posições e limites das juntas |
| `/joint/jog` | POST | Movimentar uma junta, frequentemente `joint1` para testes da base |
| `/move/joints` | POST | Mover todas as juntas para posições absolutas |
| `/move/pose` | POST | Mover o TCP para uma pose alvo via IK ou modo de trajetória |
| `/gripper` | POST | Abrir, fechar, liberar ou ler o estado do gripper |
| `/auto_grasp` | POST | Executar um ciclo em segundo plano de busca de alvo e preensão |

## Configuração e Ajuste Fino

O principal arquivo de configuração é:

```text
config/default.yaml
```

Configurações padrão da câmera:

```yaml
camera:
  type: orbbec_gemini2
  color_width: 1280
  color_height: 720
  depth_width: 1280
  depth_height: 720
  fps: 30
```

Configurações padrão de detecção e GraspNet:

```yaml
yolo:
  model_name: "yolo11n-seg.engine"
  device: "auto"

graspnet:
  checkpoint: "checkpoint-rs.tar"
```

Comportamento padrão de posicionamento:

```yaml
grasp_pipeline:
  place:
    enabled: true
    base_joint: joint1
    base_delta_deg: 90.0
    base_direction: auto
    base_rotate_duration: 2.5
    base_safety_margin_deg: 5.0
    return_home: false
```

Se o gripper perder o objeto de forma consistente, ajuste nesta ordem:

| Sintoma | Primeiro alvo de ajuste |
| --- | --- |
| O gripper fica muito à frente ou atrás | `grasp_forward_offset` / avanço do gripper na Web |
| O gripper erra para a esquerda ou direita | `grasp_lateral_offset` ou compensação X/Y da câmera |
| O gripper fica muito alto ou baixo | `grasp_vertical_offset` ou compensação Z da câmera |
| O ângulo do punho está errado | Compensação de rolagem, inclinação e guinada do gripper |
| Todas as preensões se deslocam na mesma direção | Compensação da câmera ou da base |

## Vídeo de Demonstração

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/_44o0oZ9nqI" title="reBot Arm B601-DM GraspNet Visual Grasping Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Solução de Problemas

`torch.cuda.is_available()` retorna `False`: reinstale um wheel do PyTorch compatível com o JetPack. O `torch` genérico do PyPI não é adequado para implantação em Jetson.

`No module named pointnet2._ext` ou `No module named knn_pytorch.knn_pytorch`: reconstrua os operadores CUDA do GraspNet:

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

`pyorbbecsdk import failed` ou a câmera não pode ser aberta: reinstale o SDK e verifique as permissões USB:

```bash
bash scripts/install_pyorbbecsdk.sh
sudo chmod a+rw /dev/bus/usb/*/*
python scripts/verify_pyorbbec_stream.py
```

Falha ao carregar o YOLO `.engine`: reexporte-o no mesmo Jetson. Arquivos de engine não devem ser copiados entre modelos Jetson, versões do JetPack ou versões do TensorRT.

O marcador ArUco não é detectado: confirme que o dicionário do marcador é `DICT_4X4_50`, o ID é `0`, o comprimento da aresta do marcador é 0,1 m, a iluminação é estável e o marcador está plano e totalmente visível.

O robô conecta, mas o movimento falha: execute `verify_rebot_arm_motion.py --read-only`, confirme o dispositivo USB2CAN, verifique a alimentação dos motores e teste um pequeno movimento de `--deg 5` antes de tentar novamente a execução da preensão.

O GraspNet fica sem memória: reduza `--num-point`, reduza `--cloud-crop-nsample`, feche aplicativos de desktop e evite executar vários processos de inferência pesados ao mesmo tempo.

## Recursos

- Referência da demonstração GraspNet do reBot Arm: https://github.com/EclipseaHime017/reBot-DevArm-Grasp
- SDK do reBot Arm: https://github.com/vectorBH6/reBotArm_control_py
- GraspNet baseline: https://github.com/graspnet/graspnet-baseline
- GraspNet API: https://github.com/graspnet/graspnetAPI
- Orbbec pyorbbecsdk: https://github.com/orbbec/pyorbbecsdk
- Instalar Pytorch para reComputer Jetson: https://wiki.seeedstudio.com/pt-br/install_torch_on_recomputer/


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Fornecemos vários canais de suporte para dúvidas, discussões e relato de problemas.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
