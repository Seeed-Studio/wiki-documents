---
description: Aprenda como criar um aplicativo para o reSpeaker Clip com uma camada de memória usando o Python SDK. Este tutorial aborda comunicação BLE e Wi-Fi, gravação de áudio, transcrição, diarização, sumarização e correspondência de memória local para discussões repetidas.
title: Crie seu próprio app para reSpeaker Clip adicionando camada de memória usando o Python SDK
keywords:
  - reSpeaker Clip
  - camada de memória
  - Python SDK
  - transcrição
  - diarização
  - resumo
  - Firebase
  - SQL
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg
slug: /respeaker_clip_python_build_app_with_memory
sku: 100020126
last_update:
  date: 07/31/2026
  author: Kasun Thushara
createdAt: '2026-07-31'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_python_build_app_with_memory/
---

## Introdução

Este guia mostra como transformar o reSpeaker Clip em um assistente acionado por voz que não apenas transcreve, faz diarização ou resume gravações, mas também se lembra do que foi dito antes. Ao adicionar uma camada de memória sobre o fluxo de trabalho do Python SDK, seu app pode comparar novas transcrições com conversas passadas e notificá-lo quando detectar uma discussão semelhante.

O resultado é uma base prática para criar assistentes inteligentes de reunião, tomadores de notas pessoais ou aplicativos de conhecimento acionados por voz com o reSpeaker Clip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="reSpeaker Clip memory app" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Como funciona

1. Conecte ao Clip via BLE (padrão) ou Wi-Fi.
2. Inicie uma gravação a partir do app. O áudio é transmitido do dispositivo em segundo plano enquanto você fala.
3. Pare a gravação. Quando a sincronização for concluída, o app:
   - codifica o áudio mesclado para `.ogg` (Opus),
   - converte-o para um `.wav` mono de 16kHz usando PyAV,
   - executa o pipeline selecionado para transcrição, diarização ou sumarização,
   - executa a camada de memória sobre o texto de transcrição resultante,
   - envia o resultado e qualquer notificação de memória para o navegador pelo WebSocket existente.
4. Cada gravação é armazenada com controles de reprodução e processamento, e a verificação de memória é executada novamente se você reprocessar a gravação.

## O que torna esta versão diferente

A camada de memória adiciona uma nova etapa após o processamento de fala:

```text
reSpeaker Clip -> record -> STT / diarization / summary
                                  |
                                  v
                            embed transcript locally
                                  |
                                  v
                    compare with previous recordings
                                  |
                         match found or no match
```

Principais capacidades:

- Nenhum áudio é armazenado para a camada de memória. Apenas texto de transcrição, embeddings, carimbos de tempo e metadados de correspondência são mantidos.
- O armazenamento vetorial local padrão usa arquivos JSON e NumPy na pasta `data/`, portanto funciona sem serviços em nuvem.
- Se uma gravação semelhante for encontrada, o app pode exibir um toast no canto, como “você já discutiu isso antes”.
- A camada de memória é aditiva. Ela não bloqueia a transcrição ou o resumo em si se nenhuma correspondência for encontrada.

## Fluxos de trabalho suportados

O app suporta quatro padrões de fluxo de trabalho:

- **Aba de transcrição** — transcrição de texto simples baseada em Groq.
- **Aba de diarização** — transcrição com rótulo de locutor baseada em Speechmatics.
- **Aba de resumo** — transcrição Groq mais ata de reunião gerada por IA.
- **Camada de memória** — é executada em cada gravação, independentemente de qual aba foi usada.

## Chaves de API

Cada aba usa suas próprias configurações de provedor:

- **Groq** — usado para transcrição e sumarização.
- **Speechmatics** — usado para diarização e rotulagem de locutor.
- **Firebase** — opcional se você quiser alternar para uma opção de armazenamento baseada em Firestore para a camada de memória.

As chaves não são codificadas no código-fonte. Elas podem ser armazenadas temporariamente na memória para a sessão atual do servidor ou persistidas localmente para uso futuro.

## Requisitos

- Python 3.10+
- Um dispositivo reSpeaker Clip pareado para gravação e streaming reais
- Nenhuma instalação separada de ffmpeg é necessária porque o PyAV inclui codecs
- Integração opcional com a nuvem está disponível para equipes que desejam explorar Firebase ou outro armazenamento de memória baseado em banco de dados

## Configuração

### Linux / macOS

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env
python app/main.py
```

### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt

Copy-Item .env.example .env
python app/main.py
```

Em seguida, abra `http://localhost:5000`.

Para transporte via Wi-Fi em vez de BLE:

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## Estrutura do projeto

```text
respeaker-stt-memory/
├── clip/                     # vendored Clip SDK for BLE and Wi-Fi device control
├── app/
│   ├── main.py               # FastAPI app for device control, recording, and memory hooks
│   ├── audio_convert.py      # converts audio to 16kHz mono WAV
│   ├── config.py             # runtime settings and provider keys
│   ├── llm/
│   ├── stt/
│   ├── memory/               # memory layer implementation
│   │   ├── config.py         # threshold and model settings
│   │   ├── embeddings.py     # local embedding generation
│   │   ├── local_store.py    # local vector store
│   │   └── memory_service.py # matching and memory orchestration
│   └── static/
├── data/                     # local memories.json and memories.npy
├── recordings/               # synced audio and transcript outputs
├── requirements.txt
```

## Ajuste da camada de memória

Você pode ajustar o comportamento da camada de memória afinando o limite de similaridade e o limite de busca:

- **MEMORY_SIMILARITY_THRESHOLD** — aumente se quiser menos correspondências, diminua se quiser mais recall.
- **MEMORY_SEARCH_LIMIT** — controla quantos vizinhos mais próximos são considerados antes de aplicar o limite.

Esses valores devem ser ajustados a partir do uso real em vez de serem apenas estimados.

## Indo além do armazenamento local

A implementação padrão usa um armazenamento local baseado em JSON e NumPy, o que facilita testar a ideia sem dependências de nuvem. Se você quiser um backend mais centralizado ou pesquisável depois, o design também é compatível com a ideia mais ampla de armazenamento baseado em Firebase ou persistência baseada em SQL para equipes que desejam uma memória estruturada de longo prazo.

Isso torna o projeto um bom ponto de partida tanto para protótipos quanto para aplicativos de voz mais orientados à produção.

## Visão geral da interface

Adicione sua chave de API Groq ou chave de API Speechmatics, comece a gravar e pare quando terminar. O app então exibirá uma breve notificação em toast com o resultado da sessão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip_memory_demo.png" alt="Interface de transcrição" width={800} height="auto" /></p>

## Visão geral do Firebase

Se você quiser explorar uma experiência de memória apoiada na nuvem, o Firebase pode ser usado como uma extensão opcional para armazenar e compartilhar memórias entre dispositivos. Na prática, você só precisa preparar o lado da nuvem e configurar o backend para usá-lo. O fluxo de trabalho de memória local do app permanece o padrão, e alternar para Firebase requer um pequeno ajuste no backend para direcionar a camada de memória ao armazenamento em nuvem em vez dos arquivos locais.

Para mais informações, [veja](https://github.com/KasunThushara/reSpeaker_Clip_Memory/tree/main/firebase)

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
