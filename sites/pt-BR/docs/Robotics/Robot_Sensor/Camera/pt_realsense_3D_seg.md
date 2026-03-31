---
description: Este wiki demonstra a reconstrução de nuvem de pontos com uma câmera de profundidade RealSense e detecção de caixa delimitadora 3D para objetos-alvo.
title: Segmentação 3D com RealSense
keywords:
  - RealSense
  - YOLO
  - realsense camera
  - GPU acceleration
  - RGB-D camera
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.webp
slug: /realsense_3d_seg
sku: 113990795,100000540
last_update:
  date: 2025-10-10T00:00:00.000Z
  author: ZhangJiaQuan
createdAt: '2026-03-28'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/realsense_3d_seg/
translation:
  skip:
    - zh-CN
---
# Segmentação 3D com RealSense
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.jpg" />
</div>
## Visão geral do dispositivo

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

A câmera de profundidade RealSense D405 é uma câmera estéreo de curto alcance projetada para tarefas de visão computacional em close-up com precisão submilimétrica. Seu alcance operacional ideal é de **7 cm a 50 cm**. Ela possui sensores de obturador global de alta resolução e utiliza um processador de sinal de imagem (ISP) para gerar dados RGB alinhados sem exigir um sensor RGB dedicado. Esta câmera compacta é otimizada para robótica de precisão, imagens médicas e cenários de inspeção automatizada.

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

A câmera de profundidade RealSense D435i é uma câmera estéreo que combina percepção de profundidade e rastreamento de movimento, projetada para aplicações de robótica, reconstrução 3D, SLAM e percepção automatizada. Ela utiliza tecnologia de profundidade estéreo ativa e oferece um amplo campo de visão, sensores de profundidade com obturador global, imagem em cores RGB e uma IMU integrada, permitindo saída sincronizada de dados de profundidade, cor e movimento. Esta câmera compacta é adequada para tarefas de visão computacional de curto a médio alcance, como desvio de obstáculos para robôs móveis, modelagem espacial, planejamento de trajetória e percepção do ambiente em tempo real.

## Introdução

Esta demonstração é baseada em segmentação com OpenCV e usa uma câmera de profundidade para reconstrução de nuvem de pontos e detecção de objetos-alvo na nuvem de pontos reconstruída. Ela gera as seguintes informações:

- Categoria do objeto
- Coordenadas XYZ do centro do objeto
- Dimensões da caixa delimitadora
- Ângulo de guinada (yaw) da caixa delimitadora

Ela também oferece suporte à visualização por meio do Open3D. Esta solução é adequada para tarefas de percepção robótica, como preensão em mesa, localização de objetos e filtragem de poses de preensão candidatas, e pode fornecer informações geométricas 3D estáveis para o planejamento de preensão de braços robóticos e operações subsequentes.

## Pré-requisitos

- RealSense D435i ou RealSense D405

## Início rápido

### 1. Obter o código do projeto

Primeiro, clone o projeto localmente e entre no diretório do projeto:

```bash
git clone git@github.com:Miscanthus40076/TabletopSeg3D.git
cd TabletopSeg3D
```

> Observação: Todos os comandos de instalação e execução abaixo são executados a partir do diretório raiz do projeto `TabletopSeg3D` por padrão.

### 2. Ambiente virtual Python

Recomenda-se usar um ambiente virtual Python dedicado. A versão sugerida é **Python 3.11**.

Crie um ambiente com `conda`:

```bash
conda create -n tabletopseg3d python=3.11
conda activate tabletopseg3d
```

Crie um ambiente com `venv`:

```bash
python3.11 -m venv .venv
source .venv/bin/activate
```

### 3. Dependências do sistema

Antes de executar este projeto, seu sistema deve ter o **Intel RealSense SDK / librealsense** instalado para oferecer suporte à aquisição de dados e acesso ao driver da câmera de profundidade.

Observações:

- Se você só quiser ler o código, escrever documentação ou realizar análise estática, pode ignorar esta dependência por enquanto.
- Se você quiser conectar uma câmera de profundidade e realmente executar esta demonstração, esta dependência deve ser instalada com antecedência.

### 4. Instalar dependências Python

Este projeto fornece dois caminhos de instalação recomendados:

- Instalação padrão em CPU
- Instalação com aceleração por GPU

Você pode escolher a opção apropriada com base no seu hardware.

#### 4.1 Instalação padrão em CPU

Execute o seguinte comando para instalar as dependências do projeto:

```bash
python -m pip install -r requirements.txt
```

#### 4.2 Aceleração por GPU

Se o seu dispositivo tiver uma GPU NVIDIA e um ambiente CUDA configurado corretamente, você pode usar o caminho de instalação com GPU para melhorar o desempenho de inferência da segmentação YOLO.

Antes de continuar, certifique-se de que seu sistema atenda aos seguintes requisitos:

- O driver da GPU NVIDIA está instalado
- Um runtime CUDA compatível com o driver está instalado
- Você planeja instalar versões GPU de `torch` e `torchvision` que correspondam à sua versão do CUDA

Instale as versões GPU de `torch` e `torchvision` que correspondam à sua versão do CUDA:

```bash
pip install torch torchvision --index-url https://download.pytorch.org/whl/cuXXX
```

Onde:

- Substitua `cuXXX` pela tag real da versão do CUDA
- Exemplos comuns incluem `cu121` e `cu124`

## 5. Executar

### 5.1 Obter o número de série do dispositivo

```bash
python scripts/realtime_open3d_scene.py --list-devices
```

### 5.2 Iniciar o modo de visualização

Substitua o número de série pelo número de série real do seu dispositivo:

```bash
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --show-labels
```

### 5.3 Executar sem GUI

Se você não precisar da interface gráfica do Open3D e quiser obter diretamente resultados de detecção estruturados para cada quadro, pode executar em modo headless:

```bash
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --frames 10 \
  --no-display
```

Neste modo, o programa gera dados JSON quadro a quadro, incluindo principalmente:

- Categoria do alvo
- Coordenadas 3D do centro do alvo
- Dimensões da caixa delimitadora do alvo
- Ângulo de guinada (yaw) da caixa delimitadora do alvo

### 5.4 Parâmetros recomendados para a D405

Para câmeras de profundidade de curto alcance, como a D405, geralmente é recomendável estreitar a faixa de profundidade válida para obter resultados de nuvem de pontos mais estáveis.

```bash
python scripts/realtime_open3d_scene.py \
  --serial 409122273421 \
  --device cpu \
  --min-depth 0.02 \
  --max-depth 0.50
```
