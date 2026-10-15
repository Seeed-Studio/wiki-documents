---
description: Este guia mostra como construir um sistema de processamento de imagens com câmera dupla GMSL baseado no modelo YOLOv26 e aceleração TensorRT em plataformas Jetson. Ele é voltado especificamente para câmeras Sensing SG3S-ISX031C-GMSL2F em reComputer J4012/AGX Orin, alcançando desempenho de 1920x1536@30fps.
title: Sistema de Processamento de Imagens com Câmera Dupla GMSL YOLOv26 no Jetson
keywords:
  - re
  - YOLOv26
  - Dual GMSL Camera
  - TensorRT
  - SG3S-ISX031C-GMSL2F
  - Computer Vision
  - Jetson
  - Object Detection
  - Pose Estimation
  - Image Segmentation
image: https://files.seeedstudio.com/wiki/yolov26_on_jetson/local.png
slug: /ai_roboticsyolov26_dual_camera_system
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 02/10/2026
  author: Lorraine
createdAt: '2026-01-28'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/ai_roboticsyolov26_dual_camera_system/
---
## Introdução

Com o rápido avanço da inteligência artificial e da tecnologia de computação de borda, os sistemas de visão industrial estão evoluindo para maior inteligência e capacidades de processamento em tempo real. Sistemas de processamento de imagens com câmera dupla, alimentados por modelos de deep learning, permitem análise simultânea em múltiplas perspectivas, detecção de objetos, estimativa de pose e segmentação de instâncias. Isso aumenta a eficiência e a precisão de aplicações de inspeção industrial, robótica e monitoramento automatizado. Este guia apresentará como construir um sistema de processamento de imagens de alta performance com câmera dupla GMSL usando YOLOv26 e aceleração TensorRT na plataforma NVIDIA Jetson.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/detect.png" />
</div>

Neste wiki, implantaremos modelos **YOLOv26** otimizados com **TensorRT** no **reComputer Robotics J5011** para alcançar análise de visão em múltiplas tarefas em tempo real. O sistema utiliza câmeras GMSL (Gigabit Multimedia Serial Link) para transmissão de vídeo de alta largura de banda e baixa latência, tornando-o ideal para aplicações industriais em ambientes desafiadores. Executaremos simultaneamente três variantes de modelo YOLOv26: Detecção de Objetos, Estimativa de Pose e Segmentação de Instâncias, todas aceleradas por TensorRT para rendimento máximo na poderosa GPU do Jetson Orin.

**O que é um Sistema de Processamento de Imagens com Câmera Dupla GMSL?**

Um sistema de processamento de imagens com câmera dupla GMSL é uma solução de IA de borda que integra duas câmeras de alta resolução com capacidades de inferência de deep learning. Diferente dos sistemas tradicionais de visão com uma única câmera, uma configuração com câmera dupla oferece:
- **Visão Estéreo**: Permite percepção de profundidade e reconstrução de cenas 3D
- **Campo de Visão Mais Amplo**: Cobre áreas maiores com perspectivas sobrepostas
- **Redundância**: Garante operação contínua mesmo se uma câmera falhar
- **Análise Multiângulo**: Captura objetos de diferentes pontos de vista para melhor precisão de reconhecimento

O sistema aproveita a interface GMSL para transmissão confiável de vídeo a longas distâncias (até 15 metros) com cabos blindados, tornando-o adequado para ambientes industriais com interferência eletromagnética.

**Por que YOLOv26 no Jetson?**

O [Guia Jetson da Ultralytics](https://docs.ultralytics.com/guides/nvidia-jetson/) lista várias vantagens do YOLOv26 para implantação embarcada:

1. **Alta Eficiência em ARM64**: A arquitetura do modelo é otimizada para o processador ARM64 em dispositivos Jetson, mantendo o consumo de energia baixo enquanto preserva alto rendimento.
2. **Aceleração por Tensor Core**: Quando exportado para **TensorRT**, YOLOv26 utiliza os Tensor Cores dedicados na arquitetura de GPU Ampere do Jetson Orin. Isso permite:
    -   **Baixa Latência**: Fundamental para inspeção industrial em tempo real.
    -   **Alto Rendimento**: Capaz de processar múltiplos fluxos de alta resolução simultaneamente.
3. **Framework Unificado**: Uma única arquitetura suporta múltiplas tarefas (Detecção, Segmentação, Pose), o que simplifica a implantação em dispositivos de borda com recursos limitados.

<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={'4'}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Principais Recursos

- **Captura GMSL de Alta Resolução**: Suporta duas câmeras [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html) com resolução de **1920x1536**.
- **Inferência Somente com TensorRT**: Remove a sobrecarga do runtime PyTorch usando apenas engines TensorRT para máximo rendimento.
- **Análise de Visão Multitarefa**: Detecção de Objetos, Estimativa de Pose e Segmentação de Instâncias simultâneas.
- **Otimização Industrial**:
    - **Entrada**: 1920x1536 @ 30fps (Raw YUY2)
    - **Latência**: Minimizada via buffers DMA e pipeline multithread

## Visão Geral do Modelo YOLOv26

O sistema usa a arquitetura **YOLOv26** para visão computacional em tempo real. Implantamos modelos da série **Nano (n)**, que funcionam bem em dispositivos de IA de borda como o NVIDIA Jetson Orin.

**Modelos Implantados**

Executamos três variantes de modelo simultaneamente:

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file2.png"/></div>

1.  **Detecção de Objetos (`yolov26n`)**:
    -   **Tarefa**: Detecção e classificação por caixas delimitadoras.
    -   **Classes**: 80 classes padrão COCO (Pessoa, Veículo, etc.).
    -   **Vantagem**: Inferência extremamente rápida para localização primária de objetos.

2.  **Estimativa de Pose (`yolov26n-pose`)**:
    -   **Tarefa**: Detecção de pontos-chave do esqueleto humano (17 pontos-chave).
    -   **Vantagem**: Análise de comportamento em tempo real sem bibliotecas externas pesadas de pose.

3.  **Segmentação de Instâncias (`yolov26n-seg`)**:
    -   **Tarefa**: Mascaramento de objetos em nível de pixel.
    -   **Vantagem**: Fornece contornos precisos de objetos, útil para detecção de defeitos em que caixas delimitadoras são insuficientes.

**Estratégia de Otimização**: Todos os modelos são exportados para o formato **TensorRT Engine (.engine)** com **precisão FP16**. Isso remove a sobrecarga do runtime PyTorch e maximiza o uso dos mais de 100 TOPS (Tera Operações por Segundo) de desempenho de IA do Orin.

## Pré-requisitos

**Hardware**

- **[reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html)**
- **2x [Sensing SG3S-ISX031C-GMSL2F Camera](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)**
- **Placa Desserializadora GMSL**: Compatível com Jetson Orin (garanta que os drivers estejam instalados)
- **Cabos**: Cabos Fakra de alta qualidade

**Software**
- **JetPack 6.x** (L4T 36.x)
- **GStreamer** com plugins de aceleração NVIDIA (`nvv4l2camerasrc` ou `v4l2src` padrão com `io-mode=dmabuf`)
- **Python 3.10+**
- **Ultralytics YOLOv26**

---

## Instalação e Configuração

**Etapa 0: Verificar Parâmetros da Câmera**

Primeiro, verifique os formatos e taxas de quadros suportados pela sua câmera usando v4l2-ctl:

```bash
v4l2-ctl -d /dev/video0 --list-formats-ext
v4l2-ctl -d /dev/video1 --list-formats-ext
```

Este comando exibirá a taxa de quadros máxima da câmera em diferentes resoluções. Usando a câmera SG3S-ISX031C-GMSL2F como exemplo, a saída mostra:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/dp.png"/></div>

:::note
<mark>O limite de 30fps na resolução 1920x1536 é uma limitação de hardware da câmera, não o teto de desempenho do AGX Orin.</mark> O AGX Orin é capaz de processar taxas de quadros muito maiores com resolução mais baixa ou modelos mais leves. Se você estiver usando um modelo de câmera diferente, consulte seu datasheet para a taxa de quadros máxima na resolução desejada.
:::

**Etapa 1: Clonar o Repositório**

```bash
cd /home/seeed
git clone https://github.com/bleaaach/yolov26_jetson.git
cd yolov26_jetson
```
<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file.png"/></div>

**Etapas Detalhadas de Instalação**

Siga estas etapas para configurar o ambiente do zero.

**Etapa 1: Atualizar Lista de Pacotes e Instalar pip**

```bash
sudo apt update
sudo apt install python3-pip -y
pip install -U pip
```

Se o pip não estiver pré-instalado no sistema, use este comando para instalar:

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py --user
```

**Etapa 2: Instalar o Pacote Ultralytics**

```bash
~/.local/bin/pip install ultralytics[export]
```

**Etapa 3: Instalar PyTorch e Torchvision**

PyTorch e Torchvision instalados via pip não são compatíveis com a arquitetura ARM64 do Jetson. Você precisa instalar manualmente versões construídas especificamente para o Jetson.

Primeiro desinstale as versões incompatíveis:

```bash
~/.local/bin/pip uninstall torch torchvision -y
```

Depois instale versões compatíveis com JetPack 6.1:

```bash
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

Se o download pelo GitHub estiver lento, você pode usar um proxy de aceleração:

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

**Etapa 4: Instalar cuSPARSELt**

```bash
sudo apt-get install -y libcusparselt0
```

**Etapa 5: Instalar onnxruntime-gpu**

onnxruntime-gpu é usado para algumas funções de exportação de modelos. Como o pacote no PyPI não contém binários aarch64 para Jetson, é necessária a instalação manual:

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.23.0-cp310-cp310-linux_aarch64.whl
```

Ou use a versão 1.20.0:

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
```

**Etapa 6: Configurar a Variável de Ambiente PATH**

```bash
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc
source ~/.bashrc
```

**Etapa 7: Verificar a Instalação**

```bash
python3 -c "import ultralytics; import torch; import torchvision; import onnxruntime; print('ultralytics version:', ultralytics.__version__); print('torch version:', torch.__version__); print('torchvision version:', torchvision.__version__); print('onnxruntime version:', onnxruntime.__version__)"
```

Saída esperada:

```
ultralytics version: 8.4.7
torch version: 2.5.0a0+872d972e41.nv24.08
torchvision version: 0.20.0a0+afc54f7
onnxruntime version: 1.23.0
```

**Etapa 8: Testar a Funcionalidade de Inferência do YOLOv26**

```python
from ultralytics import YOLO
import torch

print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"CUDA device count: {torch.cuda.device_count()}")
    print(f"CUDA device name: {torch.cuda.get_device_name(0)}")

model = YOLO('yolov26n.pt')
print(f"Model loaded successfully!")

results = model('https://ultralytics.com/images/bus.jpg')
print(f"Inference successful! Detected {len(results[0].boxes)} objects")

for i, box in enumerate(results[0].boxes):
    cls_id = int(box.cls[0])
    conf = float(box.conf[0])
    cls_name = model.names[cls_id]
    print(f"  Object {i+1}: {cls_name} (confidence: {conf:.2f})")
```

**Etapa 9: Preparar os Arquivos de Modelo**

```bash
ls -la /home/seeed/ultralytics_data/
mkdir -p /home/seeed/ultralytics_data
```

Se os arquivos de modelo não existirem, baixe-os primeiro:

```bash
cd /home/seeed/ultralytics_data
yolo export model=yolov26n.pt format=engine device=0 half=True
yolo export model=yolov26n-pose.pt format=engine device=0 half=True
yolo export model=yolov26n-seg.pt format=engine device=0 half=True
ls -la
```

Você deverá ver os seguintes arquivos:
- `yolov26n.engine`
- `yolov26n-pose.engine`
- `yolov26n-seg.engine`

**Etapa 10: Executar o Script Local**

```bash
cd /home/seeed/yolov26_jetson
chmod +x run_dual_gmsl_local.sh
./run_dual_gmsl_local.sh
```

---

## Configuração e Execução

O sistema usa `run_dual_gmsl_local.sh`, que já está pré-configurado para a câmera SG3S-ISX031C.

**Detalhes de Configuração da Câmera**

| Parâmetro | Valor | Observação |
|-----------|-------|-----------|
| **Modelo da Câmera** | SG3S-ISX031C-GMSL2F | Câmera Sensing GMSL2 |
| **Resolução de Captura** | **1920 x 1536** | Resolução Total do Sensor |
| **FPS de Captura** | **30 FPS** | Taxa de Quadros Nativa |
| **Resolução de Processamento** | 640 x 480 | Reduzida via Hardware (VIC) para Inferência |
| **Formato de Pixel** | YUY2 | Convertido para BGR via Hardware |

**Executando o Sistema**

```bash
cd /home/seeed/yolov26_jetson
chmod +x run_dual_gmsl_local.sh
./run_dual_gmsl_local.sh
```

<video src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/test.mp4" controls width="800"></video>

:::note
A câmera SG3S-ISX031C-G-GMSL2F possui uma taxa máxima de quadros de exibição de 30fps na resolução total (1920x1536). Esta é uma limitação de hardware da câmera, não o limite de desempenho do AGX Orin. O AGX Orin é capaz de processar taxas de quadros muito mais altas com resolução menor ou modelos mais leves. Para referência sobre o desempenho típico de inferência do AGX Orin, consulte o [Guia Ultralytics Jetson](https://docs.ultralytics.com/guides/nvidia-jetson/#nvidia-jetson-agx-orin-developer-kit-64gb).
:::

## Solução de Problemas

- **FPS baixo?**: Certifique-se de que você está usando os modelos `.engine`, não `.pt`. O script aplica o uso de `.engine`.
- **Sem Vídeo?**: Verifique as conexões GMSL e certifique-se de que os dispositivos `/dev/video*` existam. Verifique os drivers com `v4l2-ctl --list-devices`.

## Recursos

- [Página do Produto Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- [Centro de Downloads NVIDIA Jetson](https://developer.nvidia.com/embedded/downloads)
- [Guia Ultralytics YOLOv26 em NVIDIA Jetson](https://docs.ultralytics.com/guides/nvidia-jetson/)


## Suporte Técnico e Discussão de Produto

Obrigado por escolher os produtos Seeed Studio! Para suporte técnico e discussão de produtos, utilize os seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
