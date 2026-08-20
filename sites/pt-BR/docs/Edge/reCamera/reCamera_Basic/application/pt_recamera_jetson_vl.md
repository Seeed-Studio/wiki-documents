---
title: Criar um Gateway de Eventos VLM com reCamera e NVIDIA Jetson
description: Implante um aplicativo de visão em duas etapas em que a reCamera detecta pessoas com YOLOv8 e o NVIDIA Jetson usa Qwen3-VL para identificar roupas vermelhas e publicar eventos WebSocket.
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
url: https://wiki.seeedstudio.com/pt-br/recamera_jetson_vlm_gateway/
---

# Criar um Gateway de Eventos VLM com reCamera e NVIDIA Jetson

## Introdução

Este guia implanta uma demonstração completa de visão em duas etapas:

1. Uma reCamera Basic executa YOLOv8 continuamente.
2. Somente depois que ela detecta uma pessoa, envia esse frame para um NVIDIA Jetson.
3. Qwen3-VL no Jetson decide se o frame contém uma pessoa vestindo roupas claramente vermelhas.
4. O Jetson transmite um alerta de pessoa de vermelho ou uma descrição da cena via WebSocket.
5. A reCamera também fornece um stream RTSP H.264 1920×1080 com caixas de detecção de pessoa.

```text
reCamera Basic                     NVIDIA Jetson                         Client
YOLOv8 person detector             :8080 llama-server + Qwen3-VL
  |                                :8000 Vision Gateway
  +-- HTTP Base64 JPEG -----------> analyze -> structured VLM result
  +-- RTSP :8554/live0             +---------------- WebSocket /ws ----> app
```

Essa arquitetura mantém a detecção contínua de objetos na reCamera de baixo consumo e invoca o modelo maior de visão e linguagem apenas quando uma pessoa está presente. Isso reduz as requisições de inferência ao Jetson enquanto ainda fornece compreensão de cena em linguagem natural para aplicações downstream.

:::note
O aplicativo pré-compilado deste projeto tem como alvo a **reCamera Basic com o SoC RISC-V SG2002**. Ele não é executado na reCamera Pro baseada em aarch64.
:::

## Preparação de Hardware

| Item | Finalidade |
|---|---|
| [reCamera 2002 Series](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) | Executa a detecção de pessoas com YOLOv8 e o stream RTSP |
| Dispositivo NVIDIA Jetson Orin | Executa llama.cpp, Qwen3-VL e o Vision Gateway |
| Computador de desenvolvimento | Copia o aplicativo para a reCamera e assina a saída RTSP/WebSocket |
| Rede LAN ou USB/Ethernet | Conecta reCamera, Jetson e o cliente |

## Requisitos de Software

- reCamera Basic (SG2002/RISC-V), não reCamera Pro.
- NVIDIA Jetson Orin com JetPack, CUDA e pelo menos 8 GB de memória unificada recomendados.
- Ambos os dispositivos na mesma LAN confiável, com endereços IP mutuamente alcançáveis.
- Git e Python 3.10+ no Jetson.
- Um modelo de linguagem Qwen3-VL GGUF compatível e seu arquivo `mmproj` correspondente.

Baixe o repositório da demonstração no Jetson ou no computador de desenvolvimento:

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
```

Este guia usa `/home/nvidia/recamera_vl` e estes placeholders:

```text
JETSON_IP    Jetson LAN address, for example 192.168.4.33
RECAMERA_IP  reCamera LAN address
```

:::caution
O subsistema multimodal do llama.cpp muda rapidamente e sua própria documentação alerta que são esperadas mudanças incompatíveis. Fixe um commit testado do llama.cpp para um deployment reprodutível. Um modelo multimodal normalmente requer tanto o GGUF de linguagem quanto um projector correspondente. Consulte a [documentação multimodal](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd) oficial e a [documentação do servidor](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md).
:::

## Configurar o NVIDIA Jetson

### Etapa 1: Verificar JetPack e CUDA

No Jetson:

```bash
uname -m
cat /etc/nv_tegra_release
nvcc --version
```

A arquitetura esperada é `aarch64`. Se `nvcc` estiver ausente, instale uma versão do JetPack que inclua o kit de desenvolvimento CUDA antes de continuar. Você pode monitorar o dispositivo com:

```bash
sudo tegrastats
```

Monitor opcional de interface gráfica:

```bash
sudo python3 -m pip install jetson-stats
jtop
```

### Etapa 2: Instalar Dependências de Build

```bash
sudo apt update
sudo apt install -y git cmake build-essential ninja-build pkg-config \
  libssl-dev python3-venv curl
mkdir -p /home/nvidia/recamera_vl
cd /home/nvidia/recamera_vl
```

OpenSSL é útil quando o próprio llama-server precisa buscar imagens HTTPS. Esta demonstração envia URIs de dados Base64, portanto não depende de busca remota de imagens.

### Etapa 3: Compilar llama.cpp com CUDA

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

O Jetson Orin usa capacidade de computação 8.7. Se um Jetson diferente for usado, selecione a arquitetura CUDA apropriada. Dispositivos com pouca memória podem precisar de `-j1`.

Verifique a saída e o backend CUDA:

```bash
file build/bin/llama-server
build/bin/llama-server --list-devices
```

A lista deve conter um dispositivo CUDA em vez de apenas CPU.

### Etapa 4: Preparar o Modelo Qwen3-VL

Obtenha o GGUF de linguagem e o projector multimodal correspondente a partir da mesma versão de modelo confiável. Não misture projectors entre variantes ou revisões de modelo. Revise sua licença e checksum antes do deployment.

Layout de exemplo correspondente aos nomes de arquivo usados abaixo:

```text
/home/nvidia/recamera_vl/models/Qwen3-VL-4B-Instruct-GGUF/
├── Qwen3VL-4B-Instruct-Q8_0.gguf
└── mmproj-Qwen3VL-4B-Instruct-Q8_0.gguf
```

:::caution
Q8 pode ficar no limite em um Jetson de 8 GB quando CUDA, cache KV, o projector e o sistema operacional são incluídos. Uma variante Q4 fornecida pelo publicador pode reduzir o uso de memória. Nunca renomeie um arquivo não relacionado para corresponder a este exemplo.
:::

### Etapa 5: Iniciar o llama-server

Crie `/home/nvidia/recamera_vl/start_qwen3_vl.sh`:

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

Em seguida, execute:

```bash
chmod +x /home/nvidia/recamera_vl/start_qwen3_vl.sh
/home/nvidia/recamera_vl/start_qwen3_vl.sh
```

As flags podem mudar entre revisões do llama.cpp. Se uma flag for rejeitada, use `build/bin/llama-server --help` da mesma compilação em vez de copiar flags de outra versão.

Em outro terminal:

```bash
curl http://127.0.0.1:8080/health
curl http://127.0.0.1:8080/v1/models
```

Se a memória for insuficiente, tente `--ctx-size 2048`, uma quantização oficial menor ou `--no-mmproj-offload` (mais lento). Flags de cache KV quantizado também podem estar disponíveis; confirme seus nomes com `--help`.

### Etapa 6: Instalar e Iniciar o Vision Gateway

Clone este repositório em `/home/nvidia/reCamera-VLM-Gateway`, depois:

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

O script incluído espera o llama-server em `127.0.0.1:8080`, alias de modelo `qwen3-vl` e inicia um único worker em `0.0.0.0:8000`. Mantenha um worker porque a serialização de inferência e as conexões WebSocket ficam na memória do processo.

Verifique:

```bash
curl http://127.0.0.1:8000/health
curl http://127.0.0.1:8000/api/v1/status
```

A resposta de health deve mostrar `status: ok`, `busy: false` e a URL do llama-server.

### Etapa 7: Testar Análise de Imagem e WebSocket

A partir da raiz do repositório:

```bash
base64 -w 0 vision_gateway/image.jpg > /tmp/vision-image.b64
curl http://127.0.0.1:8000/api/v1/analyze \
  -H 'Content-Type: application/json' \
  --data-binary "{\"image_base64\":\"$(</tmp/vision-image.b64)\"}"
```

Uma resposta bem-sucedida contém `red_person_detected`, `message` e `processing_ms`.

Assine a partir de um navegador ou aplicativo antes de enviar outra imagem:

```js
const ws = new WebSocket("ws://JETSON_IP:8000/ws");
ws.onmessage = e => console.log(JSON.parse(e.data));
setInterval(() => ws.readyState === WebSocket.OPEN && ws.send("ping"), 30000);
```

Os eventos são:

```json
{"type":"red_person_detected","message":"发现了红色衣服的人","request_id":"...","timestamp":0}
```

ou:

```json
{"type":"scene_description","message":"...","request_id":"...","timestamp":0}
```

## Configurar a reCamera

### Etapa 1: Conectar à reCamera

Conclua primeiro o guia [reCamera Getting Started](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/). Conecte a reCamera e o Jetson à mesma LAN e, em seguida, confirme seus endereços IP. O endereço de rede USB padrão da reCamera é geralmente `192.168.42.1`, mas use o endereço atribuído pela sua rede real ao se comunicar com o Jetson.

:::note
Os recursos da câmera são exclusivos. O serviço padrão `sscma-node` deve ser parado antes que o aplicativo C++ standalone possa acessar a câmera.
:::

### Etapa 2: Fazer Deploy e Iniciar o Aplicativo

A partir do seu computador:

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
cd reCamera-VLM-Gateway
scp -r recamera root@RECAMERA_IP:/home/recamera/person-vl
ssh root@RECAMERA_IP
```

Na reCamera:

```bash
cd /home/recamera/person-vl
chmod +x run.sh bin/person_vl
killall sscma-node 2>/dev/null || true
JETSON_VL_URL=http://JETSON_IP:8000/api/v1/analyze ./run.sh
```

O binário incluído tem como alvo a reCamera Basic (SG2002/RISC-V) e o SDK de vídeo requer root. Uma detecção de pessoa coloca em fila um upload de JPEG; o tempo de espera padrão é de 10 segundos.

Veja o stream anotado usando RTSP-over-TCP:

```bash
ffplay -rtsp_transport tcp rtsp://RECAMERA_IP:8554/live0
```

## Verificar a Demonstração Completa

Entre no campo de visão vestindo roupas predominantemente vermelhas e, em seguida, repita o teste sem roupas vermelhas. Confirme as três saídas:

- a reCamera imprime `[vl] response ... http=200`.
- o WebSocket recebe `red_person_detected` ou `scene_description`.
- o RTSP mostra a caixa da pessoa.

:::tip
O Gateway permite intencionalmente apenas uma inferência VLM por vez. Se várias câmeras forem usadas, aumente `VL_COOLDOWN_SECONDS` ou adicione uma fila de requisições externa.
:::

## Recursos

- [reCamera Getting Started](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/)
- [Develop with C/C++ on reCamera](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_c_cpp/)
- [Documentação de Build CUDA do llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md)
- [Documentação Multimodal do llama.cpp](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd)
- [Documentação do Servidor llama.cpp](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)

## Suporte Técnico e Discussão de Produtos  

Obrigado por escolher nossos produtos! Fornecemos diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
