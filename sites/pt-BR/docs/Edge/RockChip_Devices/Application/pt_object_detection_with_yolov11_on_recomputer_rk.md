---
description: Este wiki demonstra como usar YOLOv11 no reComputer-RK
title: Detecção de Objetos com YOLOv11 no reComputer-RK
keywords:
  - RockChip
  - reComputer RK
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /object_detection_with_yolov11_on_recomputer_rk
last_update:
  date: 3/9/2026
  author: Nolan Chen
no_comments: false
createdAt: 2026-3-9
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/pt-br/object_detection_with_yolov11_on_recomputer_rk/
---

# Detecção de Objetos com YOLOv11 no reComputer-RK
Este projeto fornece soluções de aplicações de Visão Computacional (CV) de nível industrial e alto desempenho para placas de desenvolvimento da série Rockchip (RK3588 e RK3576). Ele apresenta integração profunda do modelo de detecção de objetos YOLOv11, aproveitando a aceleração da NPU para inferência em tempo real com baixa latência e alta taxa de quadros.
## Estrutura do Projeto
O projeto é organizado por plataforma para gerenciar drivers específicos e requisitos de runtime para o RKNN-Toolkit2:
```pl
reComputer-RK-CV/
├── docker/                 # Environment setup files
│   ├── rk3576/             # Dockerfile for RK3576 (rknn-rt 2.1.0+)
│   └── rk3588/             # Dockerfile for RK3588 (rknn-rt 2.1.0+)
├── src/                    # Implementation logic
│   ├── rk3576/             # RK3576 source, models, and dependencies
│   └── rk3588/             # RK3588 source, models, and dependencies
└── .github/workflows/      # CI/CD for automated image building
```

## Compatibilidade de Hardware
Embora ambos os chips ofereçam 6 TOPS de desempenho de NPU, eles exigem diferentes mapeamentos de caminhos de hardware dentro do Docker.

| Plataforma | SoC | NPU Node | Câmera Recomendada | Tag da Imagem |
| :--- | :--- | :--- | :--- | :--- |
| **RK3588** | RK3588/RK3588S | `/dev/dri/renderD129` | `/dev/video1` | `rk3588-yolo` |
| **RK3576** | RK3576 | `/dev/dri/renderD128` | `/dev/video0` | `rk3576-yolo` |

## Primeiros Passos
### Instalar o Docker
Instale o Docker Engine padrão na sua placa:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo systemctl enable --now docker
```

### Encaminhamento X11 (Opcional)
Para ver a janela de detecção em um monitor conectado diretamente à placa:
```bash
xhost +local:docker
```

### Executar o Projeto de Detecção
O aplicativo possui Detecção Automática: se nenhum display for encontrado, ele inicia automaticamente um stream MJPEG acessível pelo seu navegador.
#### Para reComputer RK3588:
```bash
sudo docker run --rm --privileged --net=host \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e PYTHONUNBUFFERED=1 \
    --device /dev/video1:/dev/video1 \
    --device /dev/dri/renderD129:/dev/dri/renderD129 \
    -v /proc/device-tree/compatible:/proc/device-tree/compatible \
    ghcr.io/seeed-projects/recomputer-rk-cv/rk3588-yolo:latest \
    python web_detection.py --model_path model/yolo11n.rknn --camera_id 1
```

#### Para reComputer RK3576:
```bash
sudo docker run --rm --privileged --net=host \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e PYTHONUNBUFFERED=1 \
    --device /dev/video0:/dev/video0 \
    --device /dev/dri/renderD128:/dev/dri/renderD128 \
    -v /proc/device-tree/compatible:/proc/device-tree/compatible \
    ghcr.io/seeed-projects/recomputer-rk-cv/rk3576-yolo:latest \
    python web_detection.py --model_path model/yolo11n.rknn --camera_id 0
```


## Interação Web & Streaming em Tempo Real
O projeto inclui uma API RESTful compatível com os padrões Ultralytics, acessível via `http://<Board_IP>:8000.`
- **Feed de Vídeo em Tempo Real:** Acesse /api/video_feed. Pode ser incorporado diretamente em HTML: 
```bash
<img src="http://<IP>:8000/api/video_feed">.
```

- **Inferência em Imagem Estática:**

```bash
curl -X POST "http://localhost:8000/api/models/yolo11/predict" -F "file=@/home/user/test.jpg"
```

- Configuração Dinâmica:

```bash
# Modify confidence threshold without restarting
curl -X POST "http://localhost:8000/api/config" -d '{"obj_thresh": 0.5}'
```

## Guia do Desenvolvedor
### Implantação de Modelo Personalizado
1. Coloque seu modelo `.rknn` convertido em um diretório do host.
2. Crie um arquivo de configuração de classes `class_config.txt` (por exemplo, "person", "car").
3. Monte via -v e especifique os caminhos no comando de inicialização:
```bash
sudo docker run ... \
    -v $(pwd)/my_model.rknn:/app/model/my_model.rknn \
    -v $(pwd)/class_config.txt:/app/class_config.txt \
    ... \
    python web_detection.py --model_path model/my_model.rknn --class_path class_config.txt
```

### Referência de Argumentos de CLI
`web_detection.py` suporta os seguintes parâmetros:

| Argumento | Descrição | Padrão |
| :--- | :--- | :--- |
| `--model_path` | Caminho para o arquivo de modelo RKNN | (Obrigatório) |
| `--camera_id` | ID da câmera (por exemplo, 0 para `/dev/video0`) | 1 |
| `--class_path` | Caminho para o arquivo de configuração de classes personalizadas | None (COCO 80 padrão) |
| `--port` | Porta do servidor web | 8000 |

## Vídeo de Demonstração
Assista ao YOLOv11 rodando nos últimos samples EVT do próximo Dev Kit Rockchip RK3576 da Seeed:


<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/5WdCvyrCF5Q" title="Detecção de Objetos com YOLOv11 no reComputer-RK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>