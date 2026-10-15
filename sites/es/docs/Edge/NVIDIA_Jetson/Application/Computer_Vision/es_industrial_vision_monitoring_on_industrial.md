---
description: Implementa una demo de monitorización de visión industrial en NVIDIA Jetson con detección de objetos YOLO y análisis de comportamiento con VLM
title: Monitorización de Visión Industrial en Industrial
tags:
  - Despliegue de modelo de IA
  - YOLO
  - Visión por Computador
  - reComputer
  - Industrial
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg
slug: /industrial_vision_monitoring_on_industrial
last_update:
  date: 07/14/2026
  author: HaoChen
createdAt: '2026-07-13'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/es/industrial_vision_monitoring_on_industrial/
---

# Monitorización de Visión Industrial en Industrial

## Introducción

La seguridad industrial y en el lugar de trabajo depende de saber qué está ocurriendo en la planta, en tiempo real, no solo después de un incidente. Las cámaras están en todas partes, pero la mayoría de las configuraciones siguen dependiendo de la revisión manual. La **IA de visión industrial** cierra esa brecha: detecta si hay trabajadores presentes, si llevan el EPP requerido y si aparecen comportamientos inseguros en la escena, y luego lanza alertas inmediatamente en el borde.

Este wiki despliega una **demo de monitorización de seguridad industrial** de referencia en dispositivos Seeed Industrial Jetson. Una cámara USB transmite al navegador; **YOLO** se encarga de la detección de personas y EPP, y un **VLM** analiza los riesgos de comportamiento. Ambas familias de modelos son intercambiables: el repositorio es un punto de partida, no está bloqueado a un único checkpoint.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tr>
    <th>reComputer Industrial J4012</th>
    <th>reServer Industrial J4011</th>
  </tr>
  <tr>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" style={{width:400, height:'auto'}}/>
      </div>
    </td>
    <td>
      <div style={{textAlign:'center'}}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110248-reserver-industrial-j4011-first.jpg" style={{width:400, height:'auto'}}/>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div>
    </td>
    <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

Verificado en **reComputer Industrial J4012** y **reServer Industrial J4011** con **JetPack 7.2**.

## Descripción general

| Capa | Función |
| --- | --- |
| YOLO | Detección de personas (cajas verdes) y violaciones de EPP como ausencia de casco o chaleco (cajas rojas) |
| VLM | Alertas de comportamiento a nivel de escena: uso del teléfono, fumar, caídas, fuego/humo y más |

Abre `http://<jetson-ip>:8080` en un navegador para vídeo WebRTC en vivo, superposiciones de detección y un feed de alertas.

## Hardware compatible

| Elemento | Configuración |
| --- | --- |
| **Dispositivos** | [reComputer Industrial](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html), [reServer Industrial](https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html) |
| **Verificado** | reComputer Industrial J4012, reServer Industrial J4011 · **JetPack 7.2** (L4T 39.2.0) |
| **JetPack** | **7.2** verificado · **6.2** se espera compatible · por debajo de 6.2 requiere ruedas de PyTorch manuales |
| **RAM / Disco** | 8 GB de RAM mínimo · 8 GB de disco libre |
| **Cámara** | USB UVC / V4L2 (`/dev/video*`) |

:::note
Probado en **reComputer Industrial J4012** y **reServer Industrial J4011** con **JetPack 7.2**. Los mismos pasos se aplican a otros dispositivos Seeed Industrial Jetson con una versión de JetPack coincidente.
:::

## Instalación

Clona el repositorio y ejecuta el script de un solo clic en el **Jetson de destino**:

```bash
git clone https://github.com/xbs0325/industrial-inspection.git
cd industrial-inspection
./run.sh
```

`./run.sh` copia `.env` si falta, descarga los modelos, construye la imagen de Docker (primer inicio **15–30 min**) y arranca los contenedores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_run.png" style={{width:1000, height:'auto'}}/></div>

Luego abre:

```text
http://<jetson-ip>:8080
```

:::note
La aplicación se ejecuta completamente en Docker; no se requiere configuración manual de Python en el host para el flujo de trabajo predeterminado.
:::

### Notas sobre JetPack

| JetPack | PyTorch |
| --- | --- |
| **7.2** | Se instala automáticamente durante la construcción de Docker (`TORCH_INDEX_URL=cu130`) |
| **6.2** | Establece `TORCH_INDEX_URL` en tu índice de CUDA 12.x, o coloca ruedas coincidentes en `wheels/` |
| **Por debajo de 6.2** | Coloca `torch-*.whl` / `torchvision-*.whl` adaptados a Jetson en `wheels/` antes de `./run.sh` |

Después de cambiar archivos relacionados con JetPack, reconstruye en el dispositivo de destino:

```bash
./clean.sh && ./run.sh
```

Consulta [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/es/install_torch_on_recomputer/) para fuentes de ruedas.

:::caution
No copies imágenes de Docker entre dispositivos con diferentes versiones de JetPack o CUDA. Siempre reconstruye en el Jetson de destino.
:::

### Ajustes opcionales de `.env`

```bash
CAMERA_PIPELINE=sw    # sw (default) or hw
```

## Resultados de la demo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_ui_cn.png" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_ui_en.png" style={{width:900, height:'auto'}}/></div>

Interfaz inactiva antes de que comience la transmisión de la cámara.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_phone.png" style={{width:900, height:'auto'}}/></div>

Alerta de comportamiento del VLM: uso del teléfono en el área de trabajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/industrial/industrial_vision_monitoring_no_helmet.png" style={{width:900, height:'auto'}}/></div>

Alerta de EPP de YOLO: falta el casco de seguridad.

## Modelos usados en esta demo

La versión predeterminada se entrega con los checkpoints siguientes. Puedes sustituirlos por otros modelos YOLO o VLM actualizando la configuración del repositorio y el directorio `models/`.

| Función | Modelo predeterminado | Archivo |
| --- | --- | --- |
| Detección de personas | YOLOv8n | `models/yolov8n.onnx` |
| Detección de EPP | YOLOv8 PPE | `models/ppe-yolov8n.pt` |
| Análisis de comportamiento | SmolVLM-500M-Instruct | `models/SmolVLM-500M-Instruct/` |

Los modelos se descargan automáticamente en el primer `./run.sh`, o manualmente mediante `./scripts/download_models.sh`.

## Detener y limpiar

```bash
./clean.sh              # stop containers and remove local image
./clean.sh --full       # also remove models/, data/, bin/go2rtc
```

## Solución de problemas

| Problema | Solución |
| --- | --- |
| Permiso denegado de Docker | Añade el usuario al grupo `docker`, o usa `sudo docker` |
| Primera compilación lenta | Normal (15–30 min). En JetPack 6.2 o anterior, coloca ruedas en `wheels/` |
| Incompatibilidad entre PyTorch / CUDA | Reconstruye en el Jetson de destino; no reutilices imágenes de otro JetPack |
| Cámara no disponible en el contenedor | Confirma `/dev/video*` en el host; `./run.sh` monta automáticamente las cámaras detectadas |
| Sin vídeo en el navegador | Comprueba `docker ps` para `industrial-go2rtc`; el puerto `1984` debe ser accesible |

## Recursos

- Proyecto: https://github.com/xbs0325/industrial-inspection
- [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/es/install_torch_on_recomputer/)


## Soporte técnico y debate sobre el producto

Gracias por elegir productos de Seeed Studio. Para soporte técnico y debate sobre el producto, utiliza los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

