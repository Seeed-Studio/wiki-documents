---
description: Explore quatro aplicações de visão computacional para empilhadeiras industriais usando o reComputer Rugged J401, incluindo rastreamento de alvo, alerta de área traseira, monitoramento do motorista e gravação de vídeo.
title: reComputer Rugged J401 para Visão Industrial
keywords:
  - reComputer Rugged J401
  - Jetson Orin NX
  - Visão Industrial
  - EfficientTAM
  - Depth Anything V2
  - TensorRT
  - RTSP
  - MediaPipe
image: https://files.seeedstudio.com/wiki/rugged/rugged_banner.png
slug: /ai_robotics_recomputer_rugged_j401_cv_demo
sku: 100046979,100002634
last_update:
  date: 09/20/2026
  author: Zibo
createdAt: '2026-09-20'
updatedAt: '2026-09-20'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_rugged_j401_cv_demo/
---

## Introdução

Empilhadeiras industriais trabalham em docas de carregamento, armazéns, pátios externos, câmaras frias e áreas de lavagem. Poeira, água, vibração, variações de temperatura e cobertura de rede instável tornam esses locais difíceis para um computador convencional. Um sistema de visão veicular precisa de hardware selado, conectores seguros, alimentação estável para as câmeras e capacidade de computação local suficiente para processar vídeo no próprio veículo.

Este wiki apresenta várias maneiras de usar visão computacional em empilhadeiras industriais. O exemplo usa o reComputer Rugged J401 como controlador de borda. Seu gabinete IP66, conectores M12, resistência à vibração, quatro portas PoE e Jetson Orin NX permitem que ele fique próximo às câmeras e execute as cargas de trabalho de visão localmente.

O exemplo abrange quatro tarefas práticas: rastrear um objeto selecionado à frente da empilhadeira, monitorar a área cega traseira, verificar fadiga do motorista e uso de capacete, e gravar imagens para revisão posterior. As quatro são gerenciadas a partir de um único console web.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="application banner" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora 🖱️</font></span></strong>
</a>
</div>


:::warning
Este projeto é um protótipo de assistência, não um sistema de segurança funcional. Ele não possui certificação de segurança e não deve substituir as verificações do próprio operador. A visualização de alerta traseiro informa `SYSTEM ERROR` se a câmera ou o pipeline de inferência falhar.
:::

## Pré-requisitos

- reComputer Rugged J4012 / J3011
- JetPack 5.1.3 já instalado
- Câmera POE / Câmera USB
- Conexão com a Internet para download de pacotes e modelos
- Recomendado pelo menos 30 GB de armazenamento livre


## Aplicações de Visão para Empilhadeiras Industriais
Este caso usa duas câmeras POE de 48 V e uma câmera USB. Dependendo de diferentes cenários, essas câmeras podem ser livremente substituídas.
### Conexão de hardware
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/poe_connection.png" alt="application banner" />
</div>

### Rastreamento de alvo na visão frontal

Durante o manuseio de paletes, o operador pode precisar manter uma determinada carga ou área de trabalho em vista enquanto a empilhadeira se move. A aplicação frontal usa EfficientTAM para rastreamento por clique-para-segmentar. O operador seleciona um alvo no vídeo, e o sistema segue seu contorno nos quadros posteriores.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/seg_demo.jpg" alt="" />
</div>


Este é um rastreamento interativo, não reconhecimento automático de objetos. Ele é útil quando o alvo muda de uma tarefa para outra e o operador pode selecioná-lo diretamente.

### Alerta de área traseira

O contrapeso e o mastro deixam grandes áreas cegas ao redor de uma empilhadeira. Uma câmera PoE voltada para trás usa Depth Anything V2 para estimar a profundidade da cena e um detector de pessoas para monitorar a área de trabalho atrás do veículo. A interface informa `SAFE`, `WARNING` ou `DANGER` de acordo com os limites de distância configurados.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/depth_demo.jpg" alt="" />
</div>

:::note
A estimativa de profundidade monocular tem limitações. A distância real não é confiável. É necessário ajustar o limite de alarme com base nas condições e requisitos do local!
:::

### Monitoramento do motorista e de EPI

Uma câmera na cabine pode verificar condições que não são visíveis do lado de fora. Os pontos de referência faciais do MediaPipe fornecem sinais relacionados à fadiga, enquanto um modelo separado verifica o uso de capacete. Quando o algoritmo do modelo detecta fadiga do motorista durante a operação, ele ativa uma luz de alerta para avisar o motorista e evitar grandes acidentes de segurança causados por direção fatigada.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/detect_demo.jpg" alt="" />
</div>


### Gravação com múltiplas câmeras

Podemos exibir imagens de monitoramento de diferentes perspectivas em um único painel, tornando conveniente monitorar a situação em tempo real.

<div align="center">
  <img width="1000" src="https://raw.githubusercontent.com/zibochen6/rugged_cv_demo/main/docs/images/dashboard.png" alt="Industrial forklift vision dashboard" />
</div>


## Visão geral do sistema

| Aplicação | Câmera | Método de visão |
| --- | --- | --- |
| Frontal | PoE RTSP | Rastreamento EfficientTAM clique-para-segmentar |
| Traseira | PoE RTSP | Alerta de profundidade métrica Depth Anything V2 com estados `SAFE`, `WARNING`, `DANGER` e `SYSTEM ERROR` |
| Cabine | USB UVC | Detecção de fadiga com MediaPipe e status de capacete |
| Gravação | Qualquer câmera configurada | Gravação 1080p H.264 MP4 sem inferência de IA |

O servidor FastAPI inicia e interrompe cada aplicação, impede que duas aplicações abram a mesma câmera e envia os fluxos de vídeo para o navegador. Modelos e câmeras permanecem inativos até serem solicitados, portanto uma aplicação não utilizada não ocupa memória da GPU.

## Implantar a aplicação de exemplo

### Etapa 1. Instalar pacotes de sistema

```bash
sudo apt-get update
sudo apt-get install -y python3.8-venv python3-opencv libopenblas-base logrotate nodejs npm

python3 -c "import cv2; print([line.strip() for line in cv2.getBuildInformation().splitlines() if 'GStreamer' in line])"
```

A saída deve mostrar `GStreamer: YES`. Não substitua o OpenCV do sistema pelo pacote `opencv-python` do PyPI; esse pacote não fornece o suporte a GStreamer usado para captura RTSP nesta configuração.

### Etapa 2. Clonar o projeto e criar o ambiente

```bash
git clone https://github.com/zibochen6/rugged_cv_demo.git /home/seeed/workspace/seg_demo
cd /home/seeed/workspace/seg_demo

python3 -m venv .venv
.venv/bin/python -m pip install --upgrade pip setuptools wheel
.venv/bin/pip install "numpy==1.24.4"

curl -fL --retry 3 -o /tmp/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl \
  https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
.venv/bin/pip install /tmp/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl

git clone --branch v0.16.2 --depth 1 https://github.com/pytorch/vision.git /tmp/vision
cd /tmp/vision
MAX_JOBS=4 /home/seeed/workspace/seg_demo/.venv/bin/python setup.py install
cd /home/seeed/workspace/seg_demo
```

Aponte o ambiente virtual para os pacotes JetPack OpenCV e TensorRT e, em seguida, instale as dependências do projeto:

```bash
SP="$(.venv/bin/python -c 'import site; print(site.getsitepackages()[0])')"
printf "import sys; sys.path.insert(0, '/usr/lib/python3.8/dist-packages')\n" \
  > "$SP/_system_opencv_prepend.pth"

.venv/bin/pip install -r requirements-jetson.txt
.venv/bin/pip install -r backend/requirements.txt

cd frontend
npm ci
npm run build
cd ..
```

### Etapa 3. Instalar EfficientTAM e baixar os modelos

```bash
mkdir -p third_party checkpoints models/onnx models/tensorrt models/mediapipe
git clone --depth 1 https://github.com/yformer/EfficientTAM.git third_party/EfficientTAM

Efficient_Track_Anything_BUILD_CUDA=0 .venv/bin/pip install \
  -e third_party/EfficientTAM --no-build-isolation --no-deps --ignore-requires-python

.venv/bin/pip install --no-deps "ultralytics==8.3.40" "ultralytics-thop==2.0.14"
.venv/bin/pip install "onnx==1.14.1" "matplotlib==3.7.5" "pandas==2.0.3" \
  "seaborn==0.13.2" "psutil==6.1.1" "py-cpuinfo==9.0.0" "scipy==1.10.1"

curl -fL --retry 3 -o checkpoints/efficienttam_ti_512x512.pt \
  https://huggingface.co/yunyangx/efficient-track-anything/resolve/main/efficienttam_ti_512x512.pt

.venv/bin/huggingface-cli download depth-anything/Depth-Anything-V2-Metric-Indoor-Small-hf \
  --local-dir checkpoints/depth_anything_v2_metric_indoor_small

curl -fL --retry 3 -o models/mediapipe/face_landmarker.task \
  https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task

curl -fL --retry 3 -o checkpoints/yolov8n.pt \
  https://github.com/ultralytics/assets/releases/download/v8.3.0/yolov8n.pt
```

<details>
<summary>Exportar os modelos ONNX e construir os mecanismos TensorRT</summary>

Crie `export_depth_onnx.py` na raiz do projeto:

```python
import os
import torch
from transformers import DepthAnythingForDepthEstimation

cam_w, cam_h = 2304, 1296
longest, multiple = 518, 14
scale = longest / float(max(cam_h, cam_w))
in_h = max(multiple, (int(round(cam_h * scale)) // multiple) * multiple)
in_w = max(multiple, (int(round(cam_w * scale)) // multiple) * multiple)
output = "models/onnx/depth_metric_small_518.onnx"

model = DepthAnythingForDepthEstimation.from_pretrained(
    "checkpoints/depth_anything_v2_metric_indoor_small"
).eval()


class Wrapped(torch.nn.Module):
    def __init__(self, depth_model):
        super().__init__()
        self.depth_model = depth_model

    def forward(self, pixel_values):
        return self.depth_model(pixel_values=pixel_values).predicted_depth


os.makedirs(os.path.dirname(output), exist_ok=True)
torch.onnx.export(
    Wrapped(model),
    (torch.zeros((1, 3, in_h, in_w), dtype=torch.float32),),
    output,
    input_names=["pixel_values"],
    output_names=["predicted_depth"],
    opset_version=16,
    do_constant_folding=True,
)
print("ONNX written:", output)
```

Exporte os modelos de profundidade e de pessoa e, em seguida, baixe o modelo experimental de capacete:

```bash
.venv/bin/python export_depth_onnx.py

.venv/bin/python - <<'PY'
from pathlib import Path
from ultralytics import YOLO

result = Path(YOLO("checkpoints/yolov8n.pt").export(
    format="onnx", imgsz=640, opset=12, simplify=False, dynamic=False
))
Path("models/onnx/yolov8n_person.onnx").write_bytes(result.read_bytes())
PY

curl -fL --retry 3 -o models/onnx/ppe_hard_hat.experimental.onnx \
  https://raw.githubusercontent.com/Sanaurrehmanarain/object-detection-yolov8/main/best.onnx
```

Compile todos os três engines no J401. Os engines TensorRT são vinculados à arquitetura da GPU e à versão do TensorRT, portanto não copie engines compilados em outro computador.

```bash
TRTEXEC=/usr/src/tensorrt/bin/trtexec
[ -x "$TRTEXEC" ] || TRTEXEC="$(command -v trtexec)"

"$TRTEXEC" --onnx=models/onnx/depth_metric_small_518.onnx \
  --saveEngine=models/tensorrt/depth_metric_small_518_fp16.engine \
  --fp16 --workspace=1024

"$TRTEXEC" --onnx=models/onnx/yolov8n_person.onnx \
  --saveEngine=models/tensorrt/yolov8n_person_fp16.engine \
  --fp16 --workspace=2048

"$TRTEXEC" --onnx=models/onnx/ppe_hard_hat.experimental.onnx \
  --saveEngine=models/tensorrt/ppe_hard_hat_fp16.engine \
  --fp16 --workspace=1024
```

</details>

### Etapa 4. Instale o serviço e configure as câmeras

Visualize as alterações do sistema antes de instalar o serviço:

```bash
sudo ./deploy/install.sh --dry-run
sudo ./deploy/install.sh
```

Armazene as credenciais RTSP no arquivo de ambiente protegido:

```bash
sudo tee /etc/seg-demo/visual-hub.env >/dev/null <<'EOF'
FRONT_CAMERA_URL=rtsp://<user>:<password>@192.168.10.20:554/
REAR_CAMERA_URL=rtsp://<user>:<password>@192.168.10.21:554/
DMS_CAMERA=usb:0
EOF
sudo chmod 600 /etc/seg-demo/visual-hub.env

sudo systemctl start visual-hub
curl -s http://127.0.0.1:8000/api/health
```

## Teste os aplicativos

Abra o seguinte endereço a partir de um navegador na mesma LAN:

```text
http://<Jetson-LAN-IP>:8000/
```

Use o seletor de câmera em cada cartão para confirmar as fontes frontal, traseira e da cabine. Uma câmera já em uso fica indisponível para os outros aplicativos até que pare. Teste cada aplicativo separadamente antes de usar **Start All**.

### Rastreie um objeto à frente da empilhadeira

1. Selecione a câmera PoE frontal e inicie o aplicativo frontal.
2. Clique no objeto ou carga que deve ser rastreado.
3. Adicione pontos negativos se a máscara incluir parte do plano de fundo.
4. Limpe a seleção antes de escolher outro alvo.

O primeiro carregamento do modelo leva vários segundos. Depois que um alvo é selecionado, a máscara o segue nos quadros posteriores e tenta travar nele novamente se ele sair brevemente do campo de visão.

### Verifique a área de trabalho traseira

Selecione a câmera PoE traseira e inicie o aplicativo traseiro. O painel de status alterna entre `SAFE`, `WARNING` e `DANGER` à medida que a distância estimada cruza os limites configurados.

Antes de usar a distância exibida, defina os parâmetros intrínsecos da câmera, altura de montagem, inclinação e correção de distância em `configs/warning.yaml`. Uma câmera ou posição de montagem diferente exige uma nova calibração.

### Ative o monitoramento da cabine

Selecione a câmera USB da cabine e inicie o aplicativo da cabine. As verificações de fadiga e capacete têm chaves separadas. Desative o caminho que não for necessário; o modelo correspondente não será carregado.

Coloque a câmera onde o rosto do motorista fique visível sem bloquear a visão do operador. Teste-a sob as mesmas condições de iluminação usadas durante os turnos normais.


Comandos úteis do serviço:

```bash
sudo systemctl restart visual-hub
./scripts/run_visual_hub.sh status
./scripts/run_visual_hub.sh stop
journalctl -u visual-hub -f
```

## Desempenho medido

Esses valores foram medidos com os quatro aplicativos em execução em um reComputer Rugged J401 com Jetson Orin NX 16GB. Execute `sudo nvpmodel -m 0 && sudo jetson_clocks` antes de comparar resultados.

| Aplicativo | Configuração | Resultado medido |
| --- | --- | --- |
| Segmentação frontal | EfficientTAM-Ti, 512, PyTorch bf16 | Cerca de 13,2 FPS; o primeiro carregamento leva de 7 a 8 segundos |
| Alerta traseiro | Depth Anything V2 Metric Small, TensorRT FP16 | Cerca de 21 FPS de processamento de profundidade |
| Monitoramento da cabine | Câmera USB 1280x720 | Cerca de 5,4 FPS com verificações de fadiga e capacete |
| Gravação | Três fluxos, `nvv4l2h264enc` | 3 x 1920x1080 a 15 FPS H.264 |

A vazão real depende da resolução da câmera, modo de energia, temperatura e número de aplicativos ativos.

## Solução de problemas

| Sintoma | Verificação | Correção |
| --- | --- | --- |
| A porta 8000 está indisponível | `systemctl status visual-hub` | Reinicie o serviço e inspecione `journalctl -u visual-hub` |
| Um aplicativo informa `CAMERA_BUSY` | `curl -s http://127.0.0.1:8000/api/hub/status` | Pare o aplicativo ou tarefa de gravação que está usando a câmera |
| Uma câmera USB não abre | `sudo dmesg \| grep -i "not enough bandwidth"` | Mova-a para USB 3 ou pare o outro fluxo USB |
| Um fluxo RTSP congela | Verifique `frame_age_s` no status do aplicativo | Confirme a alimentação da câmera, orçamento PoE, rota de rede e credenciais RTSP |
| A visualização frontal leva vários segundos para aparecer | `journalctl -u visual-hub` | O primeiro carregamento do modelo EfficientTAM normalmente leva de 7 a 8 segundos |

Para uma câmera ausente no seletor, verifique primeiro o inventário:

```bash
curl -s http://127.0.0.1:8000/api/hub/cameras
```

Adicione fontes RTSP extras a `HUB_EXTRA_CAMERAS` em `/etc/seg-demo/visual-hub.env`, ou insira a URL por meio da linha manual no seletor.

## Segurança e limites do aplicativo

- O alerta de área traseira usa profundidade monocular, não um sensor físico de distância. Pouca luz, reflexos, objetos transparentes, lente suja ou vibração intensa podem produzir estimativas ruins.
- O monitoramento da cabine usa imagens RGB e regras de temporização fixas. Ele não possui calibração por motorista nem suporte a visão noturna.
- O rastreamento frontal segue um alvo selecionado pelo usuário. Ele não identifica o objeto nem decide se é seguro movê-lo.
- O modelo de capacete é experimental. Revise sua precisão, dados de treinamento e licença antes do uso operacional.
## Vídeo de demonstração

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/X2OEmbMKadA" title="reComputer Rugged J401 industrial forklift vision demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Recursos
- [reComputer Rugged J40 Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf) 
- [Carrier Board Schematic](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf)
- [PSE Board Schematic](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf)
- [3D File](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp)
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson Devices Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Repositório do projeto rugged_cv_demo](https://github.com/zibochen6/rugged_cv_demo)
- [EfficientTAM](https://github.com/yformer/EfficientTAM)
- [Depth Anything V2 Metric Indoor Small](https://huggingface.co/depth-anything/Depth-Anything-V2-Metric-Indoor-Small-hf)
- [MediaPipe Face Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker)
- [Primeiros passos com reComputer Rugged J40](https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_rugged_j40_getting_started/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
