---
description: Aprenda a criar seus próprios aplicativos para o reSpeaker Clip com o SDK Python para fluxos de trabalho de Live STT (streaming RTC) em tempo real, transcrição, diarização e resumo. Este tutorial aborda comunicação via BLE e Wi‑Fi, streaming de áudio RTC, gravação de áudio, sincronização de arquivos, configuração do dispositivo e muito mais.
title: Crie seu próprio app para reSpeaker Clip com Live STT, Transcrição, Diarização e Resumo usando o SDK Python
keywords:
  - reSpeaker clip
  - Live STT
  - RTC
  - em tempo real
  - Transcrever
  - diarização
  - STT
  - Resumo
  - sdk
slug: /respeaker_clip_python_build_app
sku: 100020126
last_update:
  date: 08/27/2026
  author: Kasun Thushara
createdAt: '2026-07-21'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_python_build_app/
---

## Introdução

**reSpeaker STT Web** transforma o reSpeaker Clip em um assistente de voz e de reuniões inteligente com IA, conectando hardware de áudio embarcado com tecnologias modernas de IA na web e na nuvem. Usando BLE ou Wi‑Fi, ele sincroniza continuamente as gravações do dispositivo e as processa por meio de poderosos pipelines de IA de fala e linguagem. Ele também adiciona uma **aba Live STT em tempo real** que transmite o áudio do microfone do Clip via BLE (modo RTC) e o transcreve para texto enquanto você fala.

Com fluxos de trabalho dedicados para **fala‑para‑texto em tempo real**, **transcrição de fala**, **diarização de locutor** e **resumos de reunião gerados por IA**, os usuários podem transformar conversas em informações estruturadas e acionáveis — instantaneamente ou depois. Construído em Python e com uma arquitetura modular, o projeto oferece uma base flexível para que desenvolvedores e engenheiros embarcados criem a próxima geração de aplicativos de voz e IA com o reSpeaker Clip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>

## Como funciona

O app tem **quatro abas**. A aba **Live STT** é em tempo real; as outras três gravam no cartão SD e processam depois que você parar.

**Live STT (em tempo real, apenas BLE):**
1. Conecte ao Clip via BLE (varredura automática ou faça a varredura e escolha um dispositivo específico).
2. Pressione **Start Streaming**. O backend envia `AT+START=RTC` (sessão ao vivo, nada é gravado no cartão SD) e depois `AT+DOWNLOAD=<session>` para iniciar o stream.
3. O Clip envia **um pacote Opus de 20 ms por quadro** via BLE (característica File Data).
4. O backend decodifica cada pacote para PCM, executa um **VAD em camadas** (WebRTC + limiar de energia adaptativo) e só envia **enunciados de fala** completos para o Groq — silêncio nunca é enviado.
5. As transcrições são enviadas ao vivo para o navegador por um WebSocket como linhas de texto; um indicador `listening`/`SPEAKING` mostra o estado do VAD.
6. Pressione **Stop** para descarregar o enunciado final e encerrar o stream (`AT+STOP`).

**Abas de gravar‑e‑processar (BLE ou WiFi):**
1. Conecte ao Clip via BLE (padrão) ou WiFi.
2. Escolha uma aba e clique em Start. O áudio é transmitido do dispositivo em segundo plano enquanto ele grava (sincronização contínua — igual à ferramenta `clip-web` original). A aba de onde você iniciou define o pipeline que será executado nessa gravação.
3. Pare a gravação. Quando a sincronização final terminar, o app:
   - codifica o áudio mesclado para `.ogg` (Opus),
   - converte isso para um `.wav` mono de 16 kHz (via PyAV — sem necessidade de instalar ffmpeg separadamente),
   - **Aba Transcription:** envia o `.wav` para o Groq e recebe texto simples de volta.
   - **Aba Diarization:** envia o `.wav` para o Speechmatics com `diarization: "speaker"`, busca a transcrição JSON em nível de palavra e a agrupa em turnos de fala (`S1`, `S2`, ...).
   - **Aba Summary:** envia o `.wav` para o Groq para transcrição e depois envia a transcrição para a API de chat do Groq (`openai/gpt-oss-20b`) para gerar atas de reunião estruturadas (título, pontos principais, itens de ação, decisões).
   - envia o resultado para o navegador pelo WebSocket existente.
4. Cada aba tem sua própria lista de "Recordings" (filtrada pelo pipeline sob o qual a sessão foi gravada), com reprodução e um botão Process/Re-run por gravação.

> Sessões de Live STT nunca são armazenadas no cartão SD, portanto não aparecem nas listas de Recordings — a transcrição é o resultado.

## Chaves de API

Cada aba tem seu próprio cartão de Settings — chave Groq nas abas Live STT, Transcription e Summary (compartilhada — defina uma vez, utilizável pelas três), chave Speechmatics na aba Diarization. Nada é codificado em hard nem versionado. As chaves ficam na memória durante a vida do processo do servidor. Marque "Remember on this machine" para também persistir em `app/settings.local.json` (ignorado pelo git), para que sobrevivam a uma reinicialização.

- **Groq:** obtenha uma chave em https://console.groq.com — usada para Live STT (`whisper-large-v3-turbo`, chamadas por enunciado), transcrição (`whisper-large-v3-turbo`) e sumarização (compleções de chat `openai/gpt-oss-20b`).
- **Speechmatics:** obtenha uma chave em https://portal.speechmatics.com — usa a API REST em lote com `diarization: "speaker"` (enviar → consultar → buscar transcrição JSON → agrupar em turnos de fala), ponto de operação `enhanced` por padrão. Veja [Batch diarization](https://docs.speechmatics.com/speech-to-text/batch/batch-diarization) na documentação deles.

## Estrutura do projeto

```
respeaker-stt-clip-rtc/
├── clip/                       # vendored Clip SDK (BLE/WiFi device control, RTC stream callbacks)
├── app/
│   ├── main.py                 # FastAPI app: device control + recording + live STT + pipelines
│   ├── stream.py               # RTCStreamManager: BLE RTC stream -> decode -> VAD -> Groq -> WebSocket
│   ├── opus_decode.py          # PyAV raw-Opus -> int16 PCM decoder (48 kHz, 20 ms frames)
│   ├── vad.py                  # StreamVAD: WebRTC VAD AND adaptive energy gate + hangover/pre-roll
│   ├── demo_sample_packets.json  # bundled Opus packets for no-hardware demo mode
│   ├── audio_convert.py        # PyAV-based conversion to 16kHz mono WAV
│   ├── config.py               # runtime settings (per-provider API keys)
│   ├── llm/
│   │   └── groq_summarizer.py  # Groq chat summarization via openai/gpt-oss-20b
│   ├── stt/
│   │   ├── base.py             # STTProvider interface
│   │   ├── groq_provider.py    # transcribe() / transcribe_bytes() — plain text
│   │   └── speechmatics_provider.py # transcribe() + diarize() — speaker turns
│   └── static/
│       └── index.html          # UI — Live STT + three record tabs, settings, results
├── reference/web/              # original browser-only Web Bluetooth streaming reference
├── docs/                       # project documentation
└── requirements.txt
```

Cada gravação sincronizada recebe um `meta.json` (gravado no início da gravação, registra a qual pipeline a sessão pertence) e, depois de processada, um `transcript.json`. A saída de Live STT é transmitida ao vivo e não é persistida em disco.

## Requisitos

- Python 3.10+
- Não é necessário instalar ffmpeg separadamente — a conversão para WAV usa PyAV (`av` no PyPI), que traz suas próprias bibliotecas de codec empacotadas, inclusive no Windows
- `webrtcvad-wheels` para a camada de VAD WebRTC (reverte automaticamente para o limiar de energia adaptativo se não conseguir ser instalado)
- Um dispositivo reSpeaker Clip pareado (BLE) para a gravação real — esta parte não pode ser exercitada sem o hardware
- Para a aba **Live STT**: um Clip executando firmware com suporte a **streaming ao vivo RTC** (`AT+START=RTC`) e transporte BLE (streaming RTC é apenas via BLE)

## Configuração

```bash
git clone https://github.com/KasunThushara/clip-sdk-python-usage.git && cd clip-sdk-python-usage
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python app/main.py
```

Depois abra `http://localhost:5000`.

Para transporte via WiFi em vez de BLE (apenas abas de gravação — Live STT requer BLE):

```bash
python app/main.py --transport wifi --wifi-host 192.168.4.1 --wifi-port 8089
```

## Visão geral da interface

### Live STT (streaming RTC)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-6.jpg" alt="pir" width={800} height="auto"/></p>

O cartão do dispositivo na parte superior é compartilhado entre todas as abas — faça a varredura por Clips próximos, escolha o seu na lista suspensa e então pressione **Connect**. Se Connect falhar com um erro de pareamento BLE no Windows, use **Re-pair & Connect** para limpar o vínculo obsoleto.

1. Adicione sua **chave de API Groq** no cartão de configurações de Live STT.
2. **Conecte** ao Clip (varredura automática BLE ou um dispositivo que você escolheu após a varredura).
3. Pressione **Start Streaming**. Fale — cada enunciado (fala seguida de silêncio) é transcrito e aparece na caixa de transcrição em tempo real. O indicador mostra `listening` / `SPEAKING`.
4. Ajuste os controles deslizantes de **agressividade do WebRTC VAD** (0–3) e **limiar de energia (dB)** para calibrar quão agressivamente o silêncio é rejeitado.
5. Pressione **Stop** para descarregar qualquer enunciado pendente e encerrar o stream.

Sem hardware à mão? Marque **Demo (no device)** — pacotes Opus incluídos são reproduzidos pelo mesmo pipeline de decodificação → VAD → Groq, para que você possa verificar as chaves e o ajuste primeiro.

### Transcription

Adicione sua chave de API Groq. Pressione o botão de gravação e, quando quiser parar, pressione stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app.jpg" alt="pir" width={800} height="auto"/></p>

### Diarization

Adicione sua chave de API Speechmatics. Pressione o botão de gravação e, quando quiser parar, pressione stop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/app_python/clip-python-app-3.jpg" alt="pir" width={800} height="auto"/></p>

### Summary

Adicione sua chave de API Groq. Pressione o botão de gravação e, quando quiser parar, pressione stop.

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
