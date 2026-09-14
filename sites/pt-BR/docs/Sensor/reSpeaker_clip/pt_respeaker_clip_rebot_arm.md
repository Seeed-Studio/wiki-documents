---
description: Controle por voz um reBot Arm B601-DM através de um reSpeaker Clip via BLE RTC. Transmita e decodifique áudio Opus, segmente a fala com WebRTC VAD e, em seguida, use Groq Whisper STT e um parser de intenção com LLM para acionar as juntas e a garra do braço — totalmente instalável via pip no Ubuntu 22.04.
title: Controlar reBot Arm usando voz com reSpeaker Clip
keywords:
  - reSpeaker Clip
  - reBot Arm
  - B601-DM
  - controle por voz
  - BLE RTC
  - Groq
  - Whisper
  - STT
  - reconhecimento de intenção
  - Opus
  - VAD
  - Python
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /control_rebot_arm_using_voice_with_respeaker_clip
sku: 100020126
last_update:
  date: 9/11/2026
  author: Kasun Thushara
createdAt: '2026-09-11'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/pt-br/control_rebot_arm_using_voice_with_respeaker_clip/
---

# Controlar reBot Arm usando voz com reSpeaker Clip

`rebot-clip` permite que você controle por voz um reBot Arm B601-DM através de um reSpeaker Clip, transformando fala natural em movimento físico. O Clip transmite áudio Opus via BLE RTC enquanto o app o decodifica e executa detecção de atividade de voz por WebRTC/energia; em seguida, o Whisper STT da Groq e um parser de intenção com LLM traduzem cada enunciado em uma ação fixa do braço, como cumprimentar, girar, voltar à origem ou abrir a garra. Ele é totalmente instalável com `pip` no Ubuntu 22.04, sem necessidade de conda, e alterna automaticamente para um braço simulado quando as wheels de pinocchio/motorbridge ou a porta serial não estão disponíveis.


<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/OdBwXYKzoio"
          title="ReSpeaker Lite with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## Hardware Necessário

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Clip</th>
    <th>reBot Arm B601-DM</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html"
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
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html"
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

## Pré-requisitos

:::tip
Antes de começar, leia primeiro os dois guias abaixo. Este projeto se baseia diretamente na configuração do reBot Arm e no fluxo de trabalho de streaming RTC do reSpeaker Clip, portanto concluí-los com antecedência vai poupar muito tempo de depuração.

- [reBot Arm B601-DM Getting Started](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/) — monte o braço, redefina os IDs dos motores, calibre-o e confirme que ele é acessível via serial.
- [Build Real-Time Audio Streaming with reSpeaker Clip RTC SDK](https://wiki.seeedstudio.com/pt-br/respeaker_clip_rtc_streaming/) — faça o pareamento do Clip, estabeleça uma sessão RTC e decodifique o stream de áudio ao vivo.
- Uma **chave de API Groq** — necessária para conversão de fala em texto (Whisper) e compreensão de intenção de ação (LLM). Crie uma gratuitamente em [console.groq.com/keys](https://console.groq.com/keys). Você irá adicioná-la ao arquivo `.env` durante a configuração.
:::

## Clonar o Repositório

```bash
git clone https://github.com/KasunThushara/reSpeaker-Clip-rebot-ARM.git
cd reSpeaker-Clip-rebot-ARM
```

### Estrutura do Projeto

```text
rebotclip/            application package
  clip/               vendored reSpeaker Clip BLE SDK (+ BlueZ pairing agent)
  audio/              Opus decoder, WebRTC/energy VAD, WAV/PCM helpers
  voice/              Groq STT + LLM action-intent parser
  arm/                ArmWrapper (real/sim), coordinate map, action executors
  rtc_stream.py       Clip RTC live-stream orchestration (decode→VAD→STT)
  web.py              FastAPI web UI backend (scan/connect/RTC/VAD/arm)
  static/index.html   single-page web UI
  app.py              end-to-end glue (utterance → intent → arm)
  cli.py / __main__   `python -m rebotclip` (terminal or --web)
config/
  commands.yaml       action registry → drives the LLM prompt
  coordinates.yaml    named IK poses + joint macros (calibrate these!)
vendor/reBotArm_control_py/   vendored arm control lib (package+config+urdf)
data/demo_sample_packets.json bundled Clip RTC audio (offline testing)
examples/             runnable milestones (offline-friendly)
```

## Instalação

```bash
cd reSpeaker-Clip-rebot-ARM
python3.10 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env           # then paste your GROQ_API_KEY
```

:::tip
Se `python3.10 -m venv` falhar (por exemplo, `ensurepip is not available`), instale o pacote `python3.10-venv` via apt ou reutilize qualquer ambiente Python 3.10 existente com `pip`.
:::

A camada do braço precisa de `pin` (pinocchio) + `motorbridge`, que são distribuídos como wheels binários. Se eles (ou a porta serial) estiverem ausentes, o rebot-clip **alternará automaticamente para simulação**, de modo que o pipeline de voz ainda rode em um laptop.

## Início Rápido

```bash
# 1. Show the configured models/actions            (offline)
python -m rebotclip --models

# 2. Arm smoke test (simulated)                    (offline)
python examples/arm_smoke.py

# 3. VAD segmentation on bundled Clip audio        (offline)
python examples/clip_vad_test.py

# 4. Voice → intent on bundled audio (needs key)   (network)
python examples/voice_test.py

# 5. Action → coordinate sanity (offline)          (offline)
python examples/intent_pose_check.py
python examples/intent_pose_check.py --text "say hi"   # needs Groq network

# 6. BLE sanity with a real Clip (no Groq, no arm)
python examples/clip_ble_check.py                        # info only
python examples/clip_ble_check.py --rtc 10               # speak into the Clip

# 7. Full app: replay demo, simulated arm          (network)
python -m rebotclip --demo --sim

# 8. Live: real Clip + real arm
python -m rebotclip                 # auto-scan the Clip
python -m rebotclip --address AA:BB:CC:DD:EE:FF   # pin a device
python -m rebotclip --scan          # list nearby Clip devices
```

## Interface Web (scan · connect · RTC + VAD)

Um pequeno app web local para escanear Clips, conectar o que você quiser e iniciar o stream RTC com VAD em tempo real, transcrições e ações detectadas.

```bash
source .venv/bin/activate
python -m rebotclip --web                      # http://127.0.0.1:8000
python -m rebotclip --web --host 0.0.0.0 --port 8000   # expose on your LAN
```

Depois abra **http://127.0.0.1:8000** (ou `http://<pc-ip>:8000` se vinculado a `0.0.0.0`) e:

1. **Scan devices** → escolha um `Clip XXXX` na lista suspensa → **Connect**.
2. **Start RTC** → fale. Observe o medidor de VAD, a transcrição em tempo real e o selo de **ação** detectada + resposta. (Ou marque **Demo (no Clip)** para reproduzir o áudio incluído sem hardware.)
3. Ajuste o **VAD** ao vivo: agressividade do WebRTC, limiar de energia, **min level** (gate absoluto em dBFS), ganho do microfone — além dos presets **Normal/Strict** e **Recalibrate noise** (execute enquanto o ambiente estiver silencioso).
4. Alternância de **Arm mode** — `Off` (apenas exibição de intenção, padrão), `Sim` (movimento simulado, registrado) ou `Real` (move o braço físico).

Opções de CLI: `--web --host --port`, `--no-classify` (apenas transcrição, sem ações de LLM), `--execute off|sim|real` (modo inicial do braço).

## Inicialização de Hardware

1. Conecte o Clip (BLE) e a serial USB do braço ao PC.
2. Conceda a si mesmo acesso à serial:
   ```bash
   sudo usermod -a -G dialout $USER    # then log out/in
   ls /dev/ttyACM*                     # should list the arm
   ```
3. **Calibre** `config/coordinates.yaml` (`reach_front`/`present` são placeholders) e revise os macros de juntas antes de usar sem as mãos.
4. Mantenha a área de trabalho livre; Ctrl+C encerra o app e retorna o braço para a pose segura `standby` (`AUTO_HOME_ON_EXIT=0` para pular).

## Adicionando Posições Personalizadas (Mapa de Coordenadas)

Todos os alvos nomeados do braço ficam em **`config/coordinates.yaml`** sob a chave `poses:`. Existem dois tipos de pose: uma pose em **espaço de juntas** (`kind: joints`) é uma lista dos seis ângulos das juntas do braço em radianos `[J1, J2, J3, J4, J5, J6]`, e uma pose de **IK** (`kind: ik`) é um alvo de efetuador final `[x, y, z, roll, pitch, yaw]` em metros/radianos que é resolvido com cinemática inversa. A origem do referencial fica na superfície de montagem sob J1, com `+x` apontando para frente (para longe da base), `+y` para a esquerda e `+z` para cima. Alvos de junta são automaticamente limitados aos valores do URDF e, se a IK não conseguir alcançar um alvo, o movimento retorna um erro em vez de se mover, de modo que um valor fora de alcance é seguro em vez de danoso.

Para adicionar uma nova posição, adicione uma entrada sob `poses:` e escolha o tipo que corresponde ao que você mediu — por exemplo, uma pose de coleta em espaço de juntas e uma pose de descarte em IK:

```yaml
poses:
  pick_left:
    kind: joints
    joints: [0.6, -0.9, -0.8, 0.0, 0.2, 0.0]   # radians

  drop_front:
    kind: ik
    pose: [0.32, 0.10, 0.20, 0.0, -0.7, 0.0]   # x,y,z,roll,pitch,yaw
```

Você pode testar uma pose sem qualquer envolvimento de voz ou LLM: `python examples/arm_smoke.py --pose drop_front` imprime (em simulação) ou executa (com `--real`) o movimento, e `python examples/intent_pose_check.py` lista o mapa de poses e mostra as coordenadas comandadas para cada ação. Em Python, chame diretamente com `move_to_named_pose(arm, "drop_front")` de `rebotclip.arm`.

Uma pose nomeada só se torna um **comando por voz** quando também é registrada como uma ação. Isso exige duas pequenas edições: adicionar a ação em `config/commands.yaml` (nome, descrição e frases de exemplo — é isso que constrói o prompt do LLM) e adicionar um executor em `rebotclip/arm/actions.py`. Por exemplo, para fazer "pick from the left" funcionar, adicione em `commands.yaml`:

```yaml
actions:
  pick_left:
    description: "move to the left pickup position"
    examples: ["pick from the left", "go to the left pickup", "grab on the left"]
```

depois adicione um executor e registre-o em `actions.py`:

```python
def _exec_pick_left(arm: ArmWrapper) -> str:
    return move_to_named_pose(arm, "pick_left")

EXECUTORS = {
    # ...existing entries...
    "pick_left": _exec_pick_left,
}
```

Reinicie o app e o novo comando será entendido imediatamente — nenhuma outra alteração é necessária porque o prompt de intenção é gerado a partir de `commands.yaml`.

Para calibração, mova o braço para a postura desejada (ou leia os valores atuais com `state` / `end_state` do `example/7_arm_ik_control.py` incluído), anote os números das juntas ou de IK e cole-os em `coordinates.yaml`. Mantenha os alvos dentro do espaço de trabalho alcançável e longe da base e da mesa para evitar autocoloisões, prefira valores modestos primeiro e sempre teste uma nova pose com `--sim` antes de executá-la de verdade em um espaço de trabalho desobstruído. O curso do gripper é configurado separadamente em `gripper:` (`0.0` fechado, `-5.7` totalmente aberto no B601-DM), e gestos relativos como o aceno de cabeça/aceno de mão usados por `greet` ficam em `macros:` como *deltas* de juntas aplicados à postura atual.


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>