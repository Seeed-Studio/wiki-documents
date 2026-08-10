---
description: Implementa un Agente de Visión en Streaming en NVIDIA Jetson con memoria multimodal rodante dual Qwen3-VL-2B y una interfaz Ask en vivo
title: Agente de Visión en Streaming en Jetson
tags:
  - Despliegue de modelo de IA
  - VLM
  - Visión por Computador
  - reComputer
  - Jetson
  - Memoria Multimodal
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/computer_vision.webp
sku: 100020039, 100094378
slug: /streaming_vision_agent_on_jetson
last_update:
  date: 08/03/2026
  author: HaoChen
updatedAt: '2026-08-03'
---

# Agente de Visión en Streaming en Jetson

## Introducción

La mayoría de las demos de visión en Jetson se quedan en la detección de **un solo fotograma** (cada fotograma es independiente) o en la comprensión de **clips cortos sin conexión** (ejecutar un VLM una vez sobre unos segundos de vídeo grabado). Ninguna mantiene estado a lo largo de un flujo continuo en vivo, así que después de que un objeto salga de la vista — o después de que termine el clip — normalmente no puedes preguntar “¿qué acaba de pasar hace un momento?” con evidencia. Un **Agente de Visión en Streaming** mantiene una breve memoria multimodal **en línea y rodante** en el borde — incrustaciones visuales, eventos episódicos y hechos semánticos — y responde preguntas con fotogramas y clips de evidencia mientras la cámara sigue funcionando.

Este wiki implementa una demo en tiempo real en dispositivos Jetson de Seeed (verificada en **reComputer Mini J5012 · JetPack 7.2**). Una cámara USB alimenta una interfaz de navegador; dos instancias independientes de **Qwen3-VL-2B** manejan el reconocimiento y Ask para que las respuestas no bloqueen las escrituras de memoria en segundo plano.

:::tip
El diseño está **inspirado en** las ideas de memoria multimodal de [WorldMM](https://worldmm.github.io) (CVPR 2026). Esta demo se centra en una **ventana rodante en línea** en Jetson — **no** es una reproducción de los benchmarks offline EgoLife del artículo. Consulta [Inspiración y agradecimientos](#inspiración--agradecimientos).
:::

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

Verificado en **reComputer Mini (Jetson AGX Orin 64GB)** con **JetPack 7.2** (L4T R39.2.0).

## Descripción general

| Capa | Función |
| --- | --- |
| Memoria visual | Incrustaciones de fotogramas VLM2Vec + evidencia JPEG (~cada 5 s) |
| Memoria episódica | Qwen3-VL-2B **#1** — eventos de aparición / movimiento / desaparición (~cada 45 s) |
| Hechos semánticos | Estado de entidad (`is_at` / `absent_from` / `usually_at`) + línea temporal |
| Ask | Recupera memoria → Qwen3-VL-2B **#2** responde con trayectoria + evidencia |

Abre `http://<jetson-ip>:8790` para vídeo en vivo, memoria rodante y Ask.

```text
Camera ──► visual @ ~5s (VLM2Vec)
       └──► episodic @ ~45s (Qwen3-VL-2B recognition)
Ask   ──► retrieve memory ──► Qwen3-VL-2B answer
```

## Hardware compatible

| Elemento | Configuración |
| --- | --- |
| **Dispositivos** | [reComputer J501 Mini](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html) |
| **Verificado** | reComputer J501 Mini · **JetPack 7.2** (L4T 39.2.0) |
| **RAM / Disco** | Se recomiendan 64 GB de RAM · ≥50 GB de disco libre para modelos + venv |
| **Cámara** | USB UVC / V4L2 (`/dev/video0`) |

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/xbs0325/Streaming-Vision-Agent-Orin.git
cd Streaming-Vision-Agent-Orin
```

### 2. Crear el entorno Python en Jetson

```bash
bash script/jetson_setup.sh
```

Ruta predeterminada del venv: `~/leucus/.venv-worldmm` (sobrescribe con `WORLDMM_VENV`).

Activa y configura las variables de entorno:

```bash
source "${WORLDMM_VENV:-$HOME/leucus/.venv-worldmm}/bin/activate"
export PYTHONPATH="$PWD/src:$PWD:$PYTHONPATH"
export WORLDMM_ATTN_IMPL=sdpa
export WORLDMM_QWEN_DEVICE_MAP=cuda:0
export WORLDMM_DTYPE=bfloat16
export WORLDMM_MODELS="${WORLDMM_MODELS:-$HOME/leucus/models/worldmm}"
export HF_HOME="$WORLDMM_MODELS/hf_home"
unset HF_ENDPOINT
```

:::caution
**No** configures `HF_ENDPOINT=https://hf-mirror.com` en esta pila — puede romper las descargas de `huggingface_hub`.
:::

### 3. Descargar modelos

```bash
bash script/jetson_download_models.sh
```

| Modelo | Requerido para el modo en vivo dual-2B predeterminado |
| --- | --- |
| Qwen3-VL-2B-Instruct | Sí (cargado **dos veces**: reconocimiento + Ask) |
| Qwen3-Embedding-4B | Sí |
| Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 | Sí (memoria visual) |
| Qwen3-VL-8B-Instruct | Opcional (`WORLDMM_DOWNLOAD_8B=1` o `--episodic-model 8b`) |

Los pesos de Qwen se descargan a través de ModelScope; VLM2Vec a través de Hugging Face (`huggingface.co`). La primera descarga puede tardar un tiempo dependiendo de la red.

## Ejecutar la demo en vivo

Conecta una cámara USB y luego:

```bash
bash run.sh
# or:
python script/orin_live.py --ui-port 8790 --window-min 8 \
  --visual-interval 5 --episodic-interval 45
```

Ábrelo en un navegador:

```text
http://<jetson-ip>:8790/
```

El tiempo de ejecución predeterminado es **dual 2B** (instancias de modelo, bloqueos y flujos CUDA separados). Flags opcionales:

| Flag | Significado |
| --- | --- |
| `--episodic-model 8b` | Reconocimiento más potente con Qwen3-VL-8B |
| `--shared-2b` | Un solo 2B para ambos roles (menos VRAM; Ask espera al reconocimiento) |
| `--window-min 10` | Ventana de memoria rodante más larga |

### Prueba rápida (opcional)

Captura corta + comprobación del pipeline:

```bash
python script/orin_smoke.py --vlm qwen3vl-2b --seconds 20 \
  --vlm2vec-base "$WORLDMM_MODELS/Qwen2-VL-2B-Instruct"
```

## Resultados de la demo

Clips cortos en el CDN de archivos de Seeed que muestran la memoria rodante y las respuestas de Ask en la interfaz en vivo.

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_01.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_02.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_03.mp4" controls width="800"></video>

:::note
En algunos turnos de Ask (consulta los clips y miniaturas de evidencia anteriores), la respuesta de texto puede nombrar un objeto mientras que el JPEG / clip de evidencia recuperado muestra un objeto **diferente** de un momento anterior en la ventana rodante. Eso es esperado en una demo de memoria corta dual-2B: la recuperación puede adjuntar la evidencia visual más cercana en lugar de una coincidencia de identidad perfecta. Prefiere interacciones con un solo objeto centrado en el encuadre para obtener resultados más limpios.
:::

## Qué deberías ver

| Escena | Comportamiento esperado |
| --- | --- |
| Vista estable de escritorio | Fotograma en vivo + indicadores de estado; los contadores episódicos / visuales aumentan con el tiempo |
| Colocar / retirar un objeto (p. ej., estuche de auriculares) en el centro de la vista | Evento episódico tras la confirmación; Ask puede responder “¿qué se acaba de dejar?” |
| Pregunta “What was just put down?” | La respuesta cita la línea temporal / hechos; JPEG o clip de evidencia opcional |

El reconocimiento utiliza disparadores sesgados al centro y paneles de recorte FULL + CENTER para reducir la distracción de manos / ratón en el borde de la imagen.

## Modelos usados en esta demo

| Función | Modelo predeterminado |
| --- | --- |
| Reconocimiento episódico | Qwen3-VL-2B-Instruct (instancia #1) |
| Ask / respuesta | Qwen3-VL-2B-Instruct (instancia #2) |
| Incrustación de texto | Qwen3-Embedding-4B |
| Incrustación visual | Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 LoRA |

## Solución de problemas

| Problema | Solución |
| --- | --- |
| No se puede abrir `/dev/video0` | Comprueba `ls /dev/video*`; prueba `--device /dev/video1` |
| `huggingface_hub` FileMetadataError | `unset HF_ENDPOINT`; evita hf-mirror |
| Conflicto entre Hub / transformers | Mantén `huggingface_hub>=0.34,<1` (fijado en `jetson_setup.sh`) |
| OOM / muy lento | No ejecutes otras demos pesadas de GPU en paralelo; prueba `--shared-2b` o un `--episodic-interval` más largo |
| Ask parece bloqueado | Confirma que **no** estás usando `--shared-2b`; el dual-2B predeterminado debería responder en un flujo separado |
| Puerto en uso | `fuser -k 8790/tcp` y luego vuelve a lanzar |

## Recursos

- Proyecto: https://github.com/xbs0325/Streaming-Vision-Agent-Orin

## Inspiración y agradecimientos

Esta demo en el borde está inspirada en **WorldMM** — un agente de memoria multimodal dinámica para razonamiento sobre vídeo largo (CVPR 2026 Highlight). Adaptamos la idea de tres memorias (visual / episódica / semántica) a una ventana rodante en tiempo real en Jetson.

```bibtex
@inproceedings{yeo2026worldmm,
  title     = {WorldMM: Dynamic Multimodal Memory Agent for Long Video Reasoning},
  author    = {Yeo, Woongyeong and Kim, Kangsan and Yoon, Jaehong and Hwang, Sung Ju},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  month     = {June},
  year      = {2026},
  pages     = {25599-25609}
}
```

También gracias a [HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG), [VLM2Vec](https://github.com/TIGER-AI-Lab/VLM2Vec) y la implementación original de [WorldMM](https://github.com/wgcyeo/WorldMM) (Apache-2.0).


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
