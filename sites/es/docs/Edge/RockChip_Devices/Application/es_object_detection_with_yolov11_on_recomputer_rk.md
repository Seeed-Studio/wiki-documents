---
description: Este wiki muestra cómo usar YOLOv11 en reComputer-RK 
title: Detección de objetos con YOLOv11 en reComputer-RK

keywords:
  - RockChip
  - reComputer RK
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /object_detection_with_yolov11_on_recomputer_rk
last_update:
  date: 9/3/2026
  author: Nolan Chen
no_comments: false
createdAt: '2026-3-9'
updatedAt: '2026-03-09'
url: https://wiki.seeedstudio.com/es/object_detection_with_yolov11_on_recomputer_rk/
---

# Detección de objetos con YOLOv11 en reComputer-RK
Este proyecto proporciona soluciones de aplicaciones de Visión por Computador (CV) de grado industrial y alto rendimiento para placas de desarrollo de la serie Rockchip (RK3588 y RK3576). Incorpora una integración profunda del modelo de detección de objetos YOLOv11, aprovechando la aceleración NPU para inferencia en tiempo real con baja latencia y alta tasa de fotogramas.
## Estructura del proyecto
El proyecto está organizado por plataforma para gestionar controladores específicos y requisitos de tiempo de ejecución para RKNN-Toolkit2:
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

## Compatibilidad de hardware
Aunque ambos chips ofrecen 6 TOPS de rendimiento NPU, requieren diferentes asignaciones de rutas de hardware dentro de Docker.

| Plataforma | SoC | Nodo NPU | Cámara recomendada | Etiqueta de imagen |
| :--- | :--- | :--- | :--- | :--- |
| **RK3588** | RK3588/RK3588S | `/dev/dri/renderD129` | `/dev/video1` | `rk3588-yolo` |
| **RK3576** | RK3576 | `/dev/dri/renderD128` | `/dev/video0` | `rk3576-yolo` |

## Primeros pasos
### Instalar Docker
Instala el motor Docker estándar en tu placa:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo systemctl enable --now docker
```

### Reenvío X11 (Opcional)
Para ver la ventana de detección en un monitor conectado directamente a la placa:
```bash
xhost +local:docker
```

### Ejecutar el proyecto de detección
La aplicación incorpora Detección Automática: si no se encuentra ninguna pantalla, inicia automáticamente un flujo MJPEG accesible a través de tu navegador.
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


## Interacción web y transmisión en tiempo real
El proyecto incluye una API RESTful compatible con los estándares de Ultralytics, accesible a través de `http://<Board_IP>:8000.`
- **Flujo de vídeo en tiempo real:** Accede a /api/video_feed. Se puede incrustar directamente en HTML: 
```bash
<img src="http://<IP>:8000/api/video_feed">.
```

- **Inferencia de imagen estática:**

```bash
curl -X POST "http://localhost:8000/api/models/yolo11/predict" -F "file=@/home/user/test.jpg"
```

- Configuración dinámica:

```bash
# Modify confidence threshold without restarting
curl -X POST "http://localhost:8000/api/config" -d '{"obj_thresh": 0.5}'
```

## Guía para desarrolladores
### Despliegue de modelo personalizado
1. Coloca tu modelo .rknn convertido en un directorio del host.
2. Crea un archivo de configuración de clases class_config.txt (por ejemplo, "person", "car").
3. Monta mediante -v y especifica las rutas en el comando de inicio:
```bash
sudo docker run ... \
    -v $(pwd)/my_model.rknn:/app/model/my_model.rknn \
    -v $(pwd)/class_config.txt:/app/class_config.txt \
    ... \
    python web_detection.py --model_path model/my_model.rknn --class_path class_config.txt
```

### Referencia de argumentos de CLI
web_detection.py admite los siguientes parámetros:

| Argumento | Descripción | Predeterminado |
| :--- | :--- | :--- |
| `--model_path` | Ruta al archivo de modelo RKNN | (Obligatorio) |
| `--camera_id` | ID de la cámara (por ejemplo, 0 para `/dev/video0`) | 1 |
| `--class_path` | Ruta al archivo de configuración de clases personalizadas | None (COCO 80 predeterminado) |
| `--port` | Puerto del servidor web | 8000 |

## Video de demostración
Mira YOLOv11 ejecutándose en las últimas muestras EVT del próximo Kit de Desarrollo Rockchip RK3576 de Seeed:


<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/5WdCvyrCF5Q" title="Detección de objetos con YOLOv11 en reComputer-RK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>