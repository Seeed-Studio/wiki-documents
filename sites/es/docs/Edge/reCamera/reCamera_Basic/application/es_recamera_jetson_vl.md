---
title: Crea una pasarela de eventos VLM con reCamera y NVIDIA Jetson
description: Implementa una aplicación de visión en dos etapas en la que reCamera detecta personas con YOLOv8 y NVIDIA Jetson usa Qwen3-VL para identificar ropa roja y publicar eventos WebSocket.
keywords:
  - reCamera
  - NVIDIA Jetson
  - Qwen3-VL
  - llama.cpp
  - YOLOv8
  - WebSocket
  - Edge AI
slug: /recamera_jetson_vlm_gateway
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sku: 102991897, 100029708, 108990120
sidebar_position: 20
last_update:
  date: 08/20/2026
  author: yylin
createdAt: '2026-08-20'
updatedAt: '2026-08-20'
url: https://wiki.seeedstudio.com/es/recamera_jetson_vlm_gateway/
---

# Crea una pasarela de eventos VLM con reCamera y NVIDIA Jetson

## Introducción

Esta guía implementa una demostración completa de visión en dos etapas:

1. Una reCamera Basic ejecuta YOLOv8 de forma continua.
2. Solo después de detectar a una persona, envía ese fotograma a un NVIDIA Jetson.
3. Qwen3-VL en el Jetson decide si el fotograma contiene una persona que lleve ropa claramente roja.
4. El Jetson difunde una alerta de persona con ropa roja o una descripción de la escena a través de WebSocket.
5. La reCamera también proporciona un flujo RTSP H.264 de 1920×1080 con cuadros delimitadores de personas.

```text
reCamera Basic                     NVIDIA Jetson                         Client
YOLOv8 person detector             :8080 llama-server + Qwen3-VL
  |                                :8000 Vision Gateway
  +-- HTTP Base64 JPEG -----------> analyze -> structured VLM result
  +-- RTSP :8554/live0             +---------------- WebSocket /ws ----> app
```

Esta arquitectura mantiene la detección de objetos continua en la reCamera de bajo consumo e invoca el modelo de visión-lenguaje más grande solo cuando hay una persona presente. Reduce las peticiones de inferencia al Jetson y aun así proporciona comprensión de la escena en lenguaje natural a las aplicaciones posteriores.

:::note
La aplicación precompilada de este proyecto está dirigida a **reCamera Basic con el SoC RISC-V SG2002**. No se ejecuta en la reCamera Pro basada en aarch64.
:::

## Preparación de hardware

| Elemento | Propósito |
|---|---|
| [reCamera 2002 Series](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) | Ejecuta la detección de personas con YOLOv8 y el flujo RTSP |
| Dispositivo NVIDIA Jetson Orin | Ejecuta llama.cpp, Qwen3-VL y Vision Gateway |
| Ordenador de desarrollo | Copia la aplicación a reCamera y se suscribe a la salida RTSP/WebSocket |
| Red LAN o USB/Ethernet | Conecta reCamera, Jetson y el cliente |

## Requisitos de software

- reCamera Basic (SG2002/RISC-V), no reCamera Pro.
- NVIDIA Jetson Orin con JetPack, CUDA y al menos 8 GB de memoria unificada recomendados.
- Ambos dispositivos en la misma LAN de confianza, con direcciones IP mutuamente accesibles.
- Git y Python 3.10+ en el Jetson.
- Un modelo de lenguaje Qwen3-VL GGUF compatible y su archivo `mmproj` correspondiente.

Descarga el repositorio de demostración en el Jetson o en el ordenador de desarrollo:

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
```

Esta guía usa `/home/nvidia/recamera_vl` y estos marcadores de posición:

```text
JETSON_IP    Jetson LAN address, for example 192.168.4.33
RECAMERA_IP  reCamera LAN address
```

:::caution
El subsistema multimodal de llama.cpp cambia rápidamente y su propia documentación advierte que se esperan cambios incompatibles. Fija un commit probado de llama.cpp para un despliegue reproducible. Un modelo multimodal normalmente requiere tanto el GGUF de lenguaje como un proyector correspondiente. Consulta la [documentación multimodal](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd) oficial y la [documentación del servidor](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md).
:::

## Configurar NVIDIA Jetson

### Paso 1: Comprobar JetPack y CUDA

En el Jetson:

```bash
uname -m
cat /etc/nv_tegra_release
nvcc --version
```

La arquitectura esperada es `aarch64`. Si falta `nvcc`, instala una versión de JetPack que incluya el kit de desarrollo de CUDA antes de continuar. Puedes monitorizar el dispositivo con:

```bash
sudo tegrastats
```

Monitor de interfaz gráfica opcional:

```bash
sudo python3 -m pip install jetson-stats
jtop
```

### Paso 2: Instalar dependencias de compilación

```bash
sudo apt update
sudo apt install -y git cmake build-essential ninja-build pkg-config \
  libssl-dev python3-venv curl
mkdir -p /home/nvidia/recamera_vl
cd /home/nvidia/recamera_vl
```

OpenSSL es útil cuando el propio llama-server debe obtener imágenes HTTPS. Esta demostración envía datos URI Base64, por lo que no depende de la obtención remota de imágenes.

### Paso 3: Compilar llama.cpp con CUDA

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp

# Recommended: replace this with a commit you have tested and record it.
git rev-parse HEAD

cmake -S . -B build \
  -DGGML_CUDA=ON \
  -DCMAKE_CUDA_ARCHITECTURES=87 \
  -DLLAMA_OPENSSL=ON \
  -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release -j2 --target llama-server llama-cli
```

Jetson Orin usa capacidad de cómputo 8.7. Si se usa un Jetson diferente, selecciona la arquitectura CUDA apropiada. Los dispositivos con poca memoria pueden necesitar `-j1`.

Verifica la salida y el backend CUDA:

```bash
file build/bin/llama-server
build/bin/llama-server --list-devices
```

La lista debe contener un dispositivo CUDA en lugar de solo CPU.

### Paso 4: Preparar el modelo Qwen3-VL

Obtén el GGUF de lenguaje y el proyector multimodal correspondiente de la misma versión de modelo de confianza. No mezcles proyectores entre variantes o revisiones de modelo. Revisa su licencia y suma de verificación antes del despliegue.

Ejemplo de estructura que coincide con los nombres de archivo usados a continuación:

```text
/home/nvidia/recamera_vl/models/Qwen3-VL-4B-Instruct-GGUF/
├── Qwen3VL-4B-Instruct-Q8_0.gguf
└── mmproj-Qwen3VL-4B-Instruct-Q8_0.gguf
```

:::caution
Q8 puede ser justo en un Jetson de 8 GB una vez que se incluyen CUDA, la caché KV, el proyector y el sistema operativo. Una variante Q4 proporcionada por el publicador puede reducir el uso de memoria. Nunca renombres un archivo no relacionado para que coincida con este ejemplo.
:::

### Paso 5: Iniciar llama-server

Crea `/home/nvidia/recamera_vl/start_qwen3_vl.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

BASE=/home/nvidia/recamera_vl
MODEL="$BASE/models/Qwen3-VL-4B-Instruct-GGUF/Qwen3VL-4B-Instruct-Q8_0.gguf"
MMPROJ="$BASE/models/Qwen3-VL-4B-Instruct-GGUF/mmproj-Qwen3VL-4B-Instruct-Q8_0.gguf"

exec "$BASE/llama.cpp/build/bin/llama-server" \
  --model "$MODEL" \
  --mmproj "$MMPROJ" \
  --alias qwen3-vl \
  --host 0.0.0.0 \
  --port 8080 \
  --n-gpu-layers all \
  --ctx-size 4096 \
  --parallel 1 \
  --flash-attn auto
```

Luego ejecuta:

```bash
chmod +x /home/nvidia/recamera_vl/start_qwen3_vl.sh
/home/nvidia/recamera_vl/start_qwen3_vl.sh
```

Las banderas pueden cambiar entre revisiones de llama.cpp. Si se rechaza una bandera, usa `build/bin/llama-server --help` de la misma compilación en lugar de copiar banderas de otra versión.

En otra terminal:

```bash
curl http://127.0.0.1:8080/health
curl http://127.0.0.1:8080/v1/models
```

Si la memoria es insuficiente, prueba `--ctx-size 2048`, una cuantización oficial más pequeña o `--no-mmproj-offload` (más lento). También pueden estar disponibles banderas de caché KV cuantizada; confirma sus nombres con `--help`.

### Paso 6: Instalar e iniciar Vision Gateway

Clona este repositorio en `/home/nvidia/reCamera-VLM-Gateway`, luego:

```bash
cd /home/nvidia
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
cd reCamera-VLM-Gateway
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r vision_gateway/requirements.txt
chmod +x vision_gateway/start.sh
./vision_gateway/start.sh
```

El script incluido espera llama-server en `127.0.0.1:8080`, alias de modelo `qwen3-vl`, y arranca un único worker en `0.0.0.0:8000`. Mantén un solo worker porque la serialización de inferencias y las conexiones WebSocket están en la memoria del proceso.

Verifica:

```bash
curl http://127.0.0.1:8000/health
curl http://127.0.0.1:8000/api/v1/status
```

La respuesta de estado de salud debe mostrar `status: ok`, `busy: false` y la URL de llama-server.

### Paso 7: Probar el análisis de imágenes y WebSocket

Desde la raíz del repositorio:

```bash
base64 -w 0 vision_gateway/image.jpg > /tmp/vision-image.b64
curl http://127.0.0.1:8000/api/v1/analyze \
  -H 'Content-Type: application/json' \
  --data-binary "{\"image_base64\":\"$(</tmp/vision-image.b64)\"}"
```

Una respuesta correcta contiene `red_person_detected`, `message` y `processing_ms`.

Suscríbete desde un navegador o aplicación antes de enviar otra imagen:

```js
const ws = new WebSocket("ws://JETSON_IP:8000/ws");
ws.onmessage = e => console.log(JSON.parse(e.data));
setInterval(() => ws.readyState === WebSocket.OPEN && ws.send("ping"), 30000);
```

Los eventos son:

```json
{"type":"red_person_detected","message":"发现了红色衣服的人","request_id":"...","timestamp":0}
```

o:

```json
{"type":"scene_description","message":"...","request_id":"...","timestamp":0}
```

## Configurar reCamera

### Paso 1: Conectarse a reCamera

Completa primero la guía [reCamera Getting Started](https://wiki.seeedstudio.com/es/recamera_getting_started/). Conecta reCamera y Jetson a la misma LAN y luego confirma sus direcciones IP. La dirección de red USB predeterminada de reCamera suele ser `192.168.42.1`, pero usa la dirección asignada por tu red real cuando te comuniques con Jetson.

:::note
Los recursos de la cámara son exclusivos. El servicio `sscma-node` predeterminado debe detenerse antes de que la aplicación C++ independiente pueda acceder a la cámara.
:::

### Paso 2: Desplegar e iniciar la aplicación

Desde tu ordenador:

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
cd reCamera-VLM-Gateway
scp -r recamera root@RECAMERA_IP:/home/recamera/person-vl
ssh root@RECAMERA_IP
```

En reCamera:

```bash
cd /home/recamera/person-vl
chmod +x run.sh bin/person_vl
killall sscma-node 2>/dev/null || true
JETSON_VL_URL=http://JETSON_IP:8000/api/v1/analyze ./run.sh
```

El binario incluido está dirigido a reCamera Basic (SG2002/RISC-V) y el SDK de vídeo requiere root. Una detección de persona pone en cola una carga de un JPEG; el tiempo de enfriamiento predeterminado es de 10 segundos.

Visualiza el flujo anotado usando RTSP-sobre-TCP:

```bash
ffplay -rtsp_transport tcp rtsp://RECAMERA_IP:8554/live0
```

## Verificar la demostración completa

Entra en el campo de visión vistiendo ropa principal roja y luego repite la prueba sin ropa roja. Confirma las tres salidas:

- reCamera imprime `[vl] response ... http=200`.
- el WebSocket recibe `red_person_detected` o `scene_description`.
- RTSP muestra el cuadro delimitador de la persona.

:::tip
La Gateway permite intencionadamente solo una inferencia VLM a la vez. Si se usan varias cámaras, aumenta `VL_COOLDOWN_SECONDS` o añade una cola de peticiones externa.
:::

## Recursos

- [reCamera Getting Started](https://wiki.seeedstudio.com/es/recamera_getting_started/)
- [Develop with C/C++ on reCamera](https://wiki.seeedstudio.com/es/recamera_develop_with_c_cpp/)
- [Documentación de compilación CUDA de llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md)
- [Documentación multimodal de llama.cpp](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd)
- [Documentación del servidor de llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)

## Soporte técnico y debate sobre el producto  

Gracias por elegir nuestros productos. Ofrecemos distintos niveles de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Contamos con múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
