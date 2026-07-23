---
description: Aprenda a criar seus próprios aplicativos para o reSpeaker Clip com o SDK Python para fluxos de trabalho de transcrição, diarização e resumo. Este tutorial aborda comunicação BLE e Wi‑Fi, gravação de áudio, sincronização de arquivos, configuração do dispositivo e muito mais.

title: Crie seu próprio app para reSpeaker Clip com transcrição, diarização e resumo usando o SDK Python
keywords:
  - reSpeaker clip
  - Transcrever
  - diarização
  - STT
  - Resumo
  - sdk
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/c/h/chatgpt_image_2026_7_3_10_12_05.png
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 07/21/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-07-21'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_python_build_app/
---

## Introdução 

**reSpeaker STT Web** transforma o reSpeaker Clip em um assistente de voz e de reuniões inteligente com IA, conectando hardware de áudio embarcado com tecnologias modernas de IA na web e na nuvem. Usando BLE ou Wi‑Fi, ele sincroniza continuamente as gravações do dispositivo e as processa por meio de poderosos pipelines de IA de fala e linguagem. Com fluxos de trabalho dedicados para **transcrição de fala, diarização de locutor e resumos de reunião gerados por IA**, os usuários podem transformar conversas em informações estruturadas e acionáveis. Desenvolvido em Python e com uma arquitetura modular, o projeto oferece uma base flexível para que desenvolvedores e engenheiros embarcados criem aplicações de voz e IA de próxima geração com o reSpeaker Clip.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-intro.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Como funciona

1. Conecte ao Clip via BLE (padrão) ou Wi‑Fi.
2. Escolha uma aba e clique em Start. O áudio é transmitido do dispositivo em segundo plano enquanto ele grava (sincronização contínua — igual à ferramenta `clip-web` original). A aba de onde você iniciou determina o pipeline que será executado nessa gravação.
3. Pare a gravação. Quando a sincronização final terminar, o app:
   - codifica o áudio mesclado para `.ogg` (Opus),
   - converte isso para um `.wav` mono de 16 kHz (via PyAV — sem necessidade de instalação separada do ffmpeg),
    - **Aba Transcription:** envia o `.wav` para o Groq e recebe texto simples de volta.
    - **Aba Diarization:** envia o `.wav` para o Speechmatics com `diarization: "speaker"`, obtém a transcrição em JSON em nível de palavra e a agrupa em turnos de fala por locutor (`S1`, `S2`, ...).
    - **Aba Summary:** envia o `.wav` para o Groq para transcrição e depois envia a transcrição para a API de chat do Groq (`openai/gpt-oss-20b`) para gerar atas de reunião estruturadas (título, pontos principais, itens de ação, decisões).
    - envia o resultado para o navegador pelo WebSocket já existente.
4. Cada aba tem sua própria lista de "Recordings" (filtrada pelo pipeline sob o qual a sessão foi gravada), com reprodução e um botão Process/Re-run por gravação.


## Chaves de API

Cada aba tem seu próprio cartão de Settings — chave Groq nas abas Transcription e Summary (compartilhada — defina uma vez e use em ambas), chave Speechmatics na aba Diarization. Nada é codificado em hard nem enviado para o repositório. As chaves ficam na memória durante a vida do processo do servidor. Marque "Remember on this machine" para também persistir em `app/settings.local.json` (ignorado pelo git), para que sobrevivam a uma reinicialização.

- **Groq:** obtenha uma chave em https://console.groq.com — usada tanto para transcrição (`whisper-large-v3-turbo`, chamada síncrona única e rápida) quanto para sumarização (`openai/gpt-oss-20b` chat completions).
- **Speechmatics:** obtenha uma chave em https://portal.speechmatics.com — usa a API REST em lote com `diarization: "speaker"` (enviar → consultar → buscar transcrição JSON → agrupar em turnos de fala por locutor), ponto de operação `enhanced` por padrão. Consulte [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization) na documentação deles.

## Estrutura do projeto

```
respeaker-stt-web/
├── clip/                   # vendored Clip SDK (BLE/WiFi device control)
├── app/
│   ├── main.py              # FastAPI app: device control + recording + pipeline orchestration
│   ├── audio_convert.py     # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py            # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py          # STTProvider interface
│   │   ├── groq_provider.py         # transcribe() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html       # UI — three tabs, each with recording controls, settings, results
├── recordings/               # synced audio + meta.json + transcript.json per session (gitignored)
└── requirements.txt
```

## Requisitos

- Python 3.10+
- Nenhuma instalação separada de ffmpeg é necessária — a conversão para WAV usa PyAV (`av` no PyPI), que traz suas próprias bibliotecas de codec empacotadas, inclusive no Windows
- Um dispositivo reSpeaker Clip pareado (BLE) para a gravação real — esta parte não pode ser testada sem o hardware

## Configuração

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

Depois, abra `http://localhost:5000`.

Para transporte via Wi‑Fi em vez de BLE:

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```
## Visão geral da interface

### Transcription
Adicione sua chave de API do Groq. Pressione o botão de gravação e, quando quiser parar, pressione stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app.jpg" alt="pir" width={800} height="auto"/></p>

### Diarization
Adicione sua chave de API do Speechmatics. Pressione o botão de gravação e, quando quiser parar, pressione stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-3.jpg" alt="pir" width={800} height="auto"/></p>

### Summary
Adicione sua chave de API do Groq. Pressione o botão de gravação e, quando quiser parar, pressione stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-4.jpg" alt="pir" width={800} height="auto"/></p>


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
