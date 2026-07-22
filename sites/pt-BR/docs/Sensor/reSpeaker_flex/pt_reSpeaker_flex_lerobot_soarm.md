---
description: Braço robótico SO-ARM100 controlado por voz usando LeRobot, Groq Whisper STT, LLaMA 3 e openwakeword em Nvidia ou Ubuntu.
title: Adicione interação por voz ao seu SO-ARM10x com reSpeaker
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/lerobot_flex.png
slug: /respeaker_flex_soarm
sku: 100046482, 100070894, 114110314
last_update:
  date: 05/19/2026
  author: Kasun Thushara
createdAt: '2026-05-19'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_soarm/
---

## Visão geral

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/lerobot_flex.png" alt="pir" width={800} height="auto" /></p>


O LeRobot SO-ARM Voice Controller permite controlar um braço robótico SO-ARM100 usando comandos de voz naturais alimentados por IA. O sistema combina detecção de palavra de ativação, Groq Whisper speech-to-text, compreensão de linguagem com LLaMA 3 e Orpheus text-to-speech para criar uma experiência robótica totalmente interativa e mãos livres. Construído sobre o [framework LeRobot](https://github.com/huggingface/lerobot?utm_source=chatgpt.com), ele roda em sistemas Ubuntu x86 e dispositivos NVIDIA Jetson usando um array de microfones USB ReSpeaker para entrada de voz. Os usuários podem criar poses personalizadas do braço, gestos e gatilhos conversacionais para construir interações robóticas inteligentes para pesquisa, educação e desenvolvimento em robótica.


## Hardware necessário

<table align="center">
  <tr>
    <th>SO-ARM101</th>
    <th>reComputer Super J4012</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100046482-so-arm-101-assembled-kit-pro.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010_1.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM-101-Assembled-Kit-Pro-p-6691.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th></th>
    <th>reSpeaker XVF3800</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>

    <td
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0 20px'
      }}
    >
      OU
    </td>

    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Adquira agora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>

    <td></td>

    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Adquira agora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


## Como funciona

```
You speak → Wake word detected → Audio recorded → Whisper STT → LLaMA LLM → Orpheus TTS speaks back → SO-ARM100 moves
```

## Serviços necessários

| Serviço | Finalidade | Custo |
|---------|---------|------|
| [Groq](https://groq.com/) | Whisper STT, LLaMA LLM, Orpheus TTS | O nível gratuito é suficiente |


## Parte 1 — Instalar o LeRobot

### Instalar o Miniforge

**Para Jetson (ARM64):**
```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
source ~/.bashrc
```

**Para x86 Ubuntu 22.04:**
```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
source ~/.bashrc
conda init --all
```
### Criar o ambiente Conda

```bash
conda create -y -n lerobot python=3.10
conda activate lerobot
```

### Clonar e instalar o LeRobot

```bash
git clone https://github.com/KasunThushara/lerobot
conda install ffmpeg -c conda-forge
cd lerobot
pip install -e ".[feetech]"
```

---

## Parte 2 — Configurar os braços

### Configurar IDs dos motores

Cada servo precisa de um ID exclusivo atribuído antes da montagem. Siga o guia oficial:
[Configure the Motors](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#configurar-os-motores)

### Montar os braços

Siga o tutorial de montagem para o SO-ARM100:
[Assembly Guide](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#montagem)

### Encontrar as portas USB

Conecte cada braço e execute este utilitário para identificar qual porta pertence a qual braço:

```bash
lerobot-find-port
```

Execute-o uma vez por braço (conecte um de cada vez). Anote os caminhos das portas — normalmente `/dev/ttyACM0` e `/dev/ttyACM1`.

### Calibrar ambos os braços

A calibração mapeia valores brutos dos motores para posições normalizadas. Siga o guia para ambos os braços, líder e seguidor:
[Calibration Guide](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#calibrar)

O arquivo de calibração será salvo automaticamente em:
```
~/.cache/huggingface/lerobot/calibration/robots/so_follower/<your_arm_id>.json
```

---

---

## Parte 3 — Configurar o controlador de voz

```bash
cd ~/lerobot/examples/voice_arm
```

### Instalar dependências

```bash
# System dependency required for PyAudio
sudo apt-get install -y portaudio19-dev

pip install -r requirements.txt
```

### Baixar o modelo de palavra de ativação

Baixa o modelo pré-treinado **"Hey Jarvis"** do openwakeword em `~/.openwakeword/`:

```bash
python download_model.py
```

### Encontrar o índice do seu microfone

Conecte seu reSpeaker e então execute:

```bash
python list_mics.py
```

Exemplo de saída:

```
Available audio INPUT devices:

  [0] bcm2835 Headphones      (rate=44100Hz)
  [1] ReSpeaker 4 Mic Array   (rate=16000Hz)
  [2] USB PnP Sound Device    (rate=16000Hz)
```

Anote o número de índice ao lado do seu ReSpeaker — esse é o seu `MIC_INDEX`.

### Configurar o projeto

```bash
cp config.env.example config.env
nano config.env
```

No mínimo, atualize estes dois valores:

```env
# Your Groq API key (required) — get one free at console.groq.com
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxx

# The number from list_mics.py
MIC_INDEX=1
```

---

## Parte 4 — Definir as ações do braço

### Etapa 1 — Ler as posições atuais das juntas

Mova fisicamente o braço para uma pose que você queira salvar e então execute:

```bash
python read_positions.py
```

O script imprime valores normalizados das juntas em tempo real enquanto você move o braço. Quando estiver satisfeito com a pose, pressione **Ctrl+C** e a posição final será impressa para você copiar.

### Etapa 2 — Adicionar a pose em `robot_arm.py`

Abra `robot_arm.py` e encontre o dicionário `ACTION_MAP`. Adicione sua pose:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arm_ss.jpg" alt="pir" width={800} height="auto" /></p>

```python
"my_custom_pose": _pose(**{
    "shoulder_pan.pos":  20.0,
    "shoulder_lift.pos": 40.0,
    "elbow_flex.pos":    60.0,
    "wrist_flex.pos":   -30.0,
    "gripper.pos":       80.0,
}),
```

Para gestos animados (como um aceno), use uma lista de poses — cada etapa é executada com `ARM_GESTURE_DELAY` entre elas:

```python
"wave_hi": [
    _pose(**{"shoulder_lift.pos": -70.0, "wrist_flex.pos":  60.0, ...}),
    _pose(**{"shoulder_lift.pos": -70.0, "wrist_flex.pos": -60.0, ...}),
    _HOME,  # return to neutral
],
```

### Etapa 3 — Atualizar o prompt de sistema do LLM em `llm.py`

Adicione sua nova ação à lista de ações válidas e às regras de gatilho para que o LLM saiba sobre ela:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/llm_ss.jpg" alt="pir" width={800} height="auto" /></p>

```python
Valid actions:
  my_custom_pose  = describe what it does

Trigger rules:
  - "your trigger phrase"  → my_custom_pose
```

---

## Executar o controlador de voz

Certifique-se de que seu ambiente conda esteja ativo e então:

```bash
conda activate lerobot
python pipeline.py
```

Você deverá ver:

```
======================================================
  SO100 Arm Voice Controller — Ready
  Wake word  : hey jarvis
  LLM model  : llama-3.1-8b-instant
  STT model  : whisper-large-v3-turbo
  TTS voice  : autumn
  Arm port   : /dev/ttyACM0  id='my_awesome_follower_arm'
======================================================
[WakeWord] Listening for 'hey jarvis' ...
```

Agora diga **"Hey Jarvis"** e dê um comando!

### Exemplos de comandos de voz

| Você diz | O que acontece |
|---------|-------------|
| *"Hey Jarvis, open the gripper"* | O gripper abre totalmente |
| *"Hey Jarvis, grab it"* | O gripper fecha |
| *"Hey Jarvis, go to pick up mode"* | O braço se move para a pose de preensão |
| *"Hey Jarvis, can you turn around"* | A base gira para o lado |
| *"Hey Jarvis, wave at the camera"* | O braço acena e retorna à posição neutra |
| *"Hey Jarvis, go home"* | Todas as juntas retornam à posição neutra |

---

## Visão geral dos arquivos do projeto

```
examples/voice_arm/
├── pipeline.py          # Main entry point — orchestrates the full flow
├── robot_arm.py         # SO100 arm controller — add your poses here
├── llm.py               # LLM prompt — add your voice triggers here
├── wakeword.py          # Listens for "Hey Jarvis" in a background thread
├── audio_recorder.py    # Records audio after wake word fires
├── stt.py               # Sends audio to Groq Whisper → returns text
├── tts.py               # Sends reply to Groq Orpheus → plays audio
├── config.py            # Loads all settings from config.env
├── config.env.example   # Template — copy to config.env and fill in
├── read_positions.py    # Helper: read live joint positions for tuning poses
├── list_mics.py         # Helper: find your MIC_INDEX
└── download_model.py    # Downloads the openwakeword model files
```

---

## Referência de Configuração

| Variável | Padrão | Descrição |
|---|---|---|
| `GROQ_API_KEY` | *(required)* | Sua chave de API Groq |
| `WAKEWORD_MODEL` | `hey jarvis` | Frase de palavra de ativação |
| `MIC_INDEX` | `1` | Índice de dispositivo PyAudio |
| `WAKEWORD_THRESHOLD` | `0.5` | Sensibilidade de detecção (0,0–1,0) |
| `WAKEWORD_COOLDOWN` | `2` | Segundos entre novas ativações |
| `RECORDING_SECONDS` | `3` | Quanto tempo gravar após a palavra de ativação |
| `LLM_MODEL` | `llama-3.1-8b-instant` | Modelo Groq LLM |
| `STT_MODEL` | `whisper-large-v3-turbo` | Modelo Groq Whisper |
| `TTS_VOICE` | `autumn` | Voz para saída de fala |
| `ARM_PORT` | `/dev/ttyACM0` | Porta USB do braço seguidor |
| `ARM_ID` | `my_awesome_follower_arm` | ID do braço (corresponde ao nome do arquivo de calibração) |
| `ARM_MOVE_DELAY` | `1.5` | Segundos de espera após um movimento de pose |
| `ARM_GESTURE_DELAY` | `0.4` | Segundos entre etapas da sequência de gestos |

---

## Solução de Problemas

**Falha na instalação do PyAudio**
Instale primeiro a biblioteca de sistema PortAudio:
```bash
sudo apt-get install -y portaudio19-dev
```

**A palavra de ativação nunca é acionada**
Execute `list_mics.py` novamente e confirme que `MIC_INDEX` corresponde ao seu ReSpeaker. Tente reduzir `WAKEWORD_THRESHOLD` para `0.3`. Fale claramente a cerca de 1 metro do microfone.

**Braço não se move após um comando**
Verifique se `ARM_PORT` está correto (`lerobot-find-port`). Confirme se o arquivo de calibração existe em `~/.cache/huggingface/lerobot/calibration/robots/so_follower/<ARM_ID>.json`.

**Braço se move para a posição errada**
Os valores de pose padrão em `ACTION_MAP` são estimativas iniciais. Execute `read_positions.py`, mova fisicamente o braço para a pose desejada e copie os valores exibidos para `robot_arm.py`.

**Erros de TTS / STT**
Verifique novamente `GROQ_API_KEY` em `config.env`. O nível gratuito da Groq possui limites de taxa — aguarde alguns segundos entre comandos se encontrar erros.

**O áudio é reproduzido, mas soa distorcido**
No Raspberry Pi, defina a saída de áudio para o dispositivo correto via `raspi-config` → System Options → Audio.

---

## Créditos

Feito com:
- [LeRobot](https://github.com/huggingface/lerobot) — framework de robótica open-source da Hugging Face
- [SO-ARM100](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/) — braço robótico open-source de baixo custo da Seeed Studio
- [openwakeword](https://github.com/dscripka/openWakeWord) — detecção local de palavra de ativação
- [Groq](https://groq.com/) — Whisper STT, LLaMA LLM e Orpheus TTS ultrarrápidos
- [ReSpeaker Flex](https://wiki.seeedstudio.com/pt-br/respeaker_flex/) — matriz de microfones USB
