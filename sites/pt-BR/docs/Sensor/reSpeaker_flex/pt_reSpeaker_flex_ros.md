---
description: Um projeto ROS2 TurtleSim controlado por voz usando reSpeaker Flex e Groq AI para converter comandos falados em movimento de robô em tempo real, ações de giro e resposta falada.
title: Pipeline de Voz ROS2 no reSpeaker 
keywords:
  - reSpeaker
  - Robótica
  - ROS2
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_ros_banner.png
slug: /respeaker_flex_ros2_voice_pipeline
sku: 114993700, 101991441, 114993701,100099135,,100005504
last_update:
  date: 5/27/2026
  author: Kasun Thushara
createdAt: '2026-05-27'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_ros2_voice_pipeline/
---

## Introdução

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_ros_banner.png" alt="pir" width={800} height="auto" /></p>

Este projeto transforma sua voz em controle do TurtleSim usando um array de microfones reSpeaker e ROS2. Diga “Hey Jarvis” seguido de um comando, e o Jarvis grava o áudio, o transcreve com Groq Whisper, interpreta a intenção com Groq LLaMA e responde com Groq Orpheus TTS. Ele oferece suporte a movimento para frente/para trás, giros em ângulo, orientação baseada em DoA e comandos de parada instantânea. O sistema integra detecção de palavra de ativação, captura de áudio, tópicos ROS2 e publicação de comandos para o simulador em um pipeline contínuo. Ele foi projetado para configuração rápida com Ubuntu e ROS2 Humble, facilitando a execução de experimentos de robótica controlados por voz.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Parte 1 — Instalar o ROS2 Humble

> Pule esta parte se o ROS2 Humble já estiver instalado na sua máquina.
> Verifique executando: `ros2 --version`

**1.1 Configurar o repositório apt do ROS2**

```bash
# Make sure your system is up to date
sudo apt update && sudo apt upgrade -y

# Install required tools
sudo apt install -y software-properties-common curl

# Add the ROS2 GPG key
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key \
    -o /usr/share/keyrings/ros-archive-keyring.gpg

# Add the ROS2 repository to your sources
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] \
    http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" \
    | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

**1.2 Instalar o ROS2 Humble Desktop**

```bash
sudo apt update
sudo apt install -y ros-humble-desktop
```

> A variante `desktop` inclui TurtleSim, RViz e todas as ferramentas de que você precisa.
> Este download tem cerca de 1 GB — pode levar alguns minutos.

**1.3 Instalar ferramentas de build**

```bash
sudo apt install -y python3-colcon-common-extensions python3-rosdep
```

**1.4 Fazer o source do ROS2 automaticamente em todo terminal**

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

**1.5 Verificar a instalação**

```bash
ros2 --version
# Expected output: ros2 cli    version 0.18.x (or similar)
```

Em seguida, teste o TurtleSim para confirmar que tudo está funcionando:

```bash
# Terminal 1
ros2 run turtlesim turtlesim_node

# Terminal 2
ros2 run turtlesim turtle_teleop_key
```

Você deverá ver uma janela com uma tartaruga que pode ser controlada com as setas do teclado. Pressione `Ctrl+C` em ambos os terminais quando terminar.

## Parte 2 — Criar uma regra udev para o dispositivo

Crie uma nova regra udev para garantir as permissões corretas para o reSpeaker USB Mic Array:

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

Adicione as seguintes linhas ao arquivo:

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

Recarregar as regras udev e reiniciar o serviço

Recarregue as regras udev e reinicie o serviço para que as alterações entrem em vigor:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

Desconecte e reconecte seu reSpeaker USB Mic Array para aplicar as novas regras.

---

## Parte 3 — Obter uma chave de API Groq

Este projeto usa a API em nuvem gratuita da Groq para:
- **Whisper** — conversão de fala em texto
- **LLaMA 3** — compreensão dos seus comandos
- **Orpheus** — resposta de voz do Jarvis

1. Acesse [console.groq.com](https://console.groq.com) e crie uma conta gratuita
2. Clique em **API Keys** na barra lateral esquerda
3. Clique em **Create API Key**, dê um nome (por exemplo, "jarvis") e copie a chave
4. Salve-a em um local seguro — você irá colá-la em `config.env` em breve

> O nível gratuito da Groq é generoso o suficiente para desenvolvimento e testes.
> Não é necessário cartão de crédito para começar.

---

## Parte 4 — Instalar dependências Python (no sistema)

> **Importante:** NÃO use um ambiente virtual para este projeto.
> O ROS2 usa o Python do sistema e não consegue ver pacotes instalados dentro de um venv.
> Instalamos tudo com `--break-system-packages` para torná-los disponíveis para os nós ROS2.

```bash
pip install \
    groq \
    openwakeword \
    pyaudio \
    numpy<2 \
    python-dotenv \
    pyusb \
```

**Baixar o modelo de palavra de ativação "Hey Jarvis"**

```bash
python3 -c "import openwakeword; openwakeword.utils.download_models()"
```

Isso baixa modelos pré-treinados para `~/.openwakeword/`. Leva cerca de 30 segundos.

**Instalar PortAudio (necessário para o PyAudio)**

```bash
sudo apt install -y portaudio19-dev python3-pyaudio
```

---

## Parte 5 — Criar seu workspace ROS2

> Pule para a Parte 6 se você já tiver um workspace `~/ros2_ws`.

```bash
# Create the workspace directory
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws

# Build the empty workspace to set it up
colcon build

# Source it and add to .bashrc so it loads automatically
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

---

## Parte 6 — Clonar e configurar o projeto

**6.1 Clonar o repositório**

**Se você estiver usando Flex**

```bash
cd ~/ros2_ws/src
git clone https://github.com/KasunThushara/ros_voice_controller_flex.git my_robot_controller
```

**Se você estiver usando XVF3800**

```bash
cd ~/ros2_ws/src
git clone https://github.com/KasunThushara/ros_voice_controller.git my_robot_controller
```

> Seu workspace agora deve estar assim:
> ```
> ~/ros2_ws/
> └── src/
>     └── my_robot_controller/
>         ├── my_robot_controller/
>         │   ├── voice_node.py
>         │   ├── rotate_doa.py
>         │   ├── wakeword.py
>         │   └── ...
>         ├── launch/
>         │   └── jarvis.launch.py
>         └── config.env.example
> ```

**6.2 Criar seu arquivo de configuração**

```bash
cd ~/ros2_ws/src/my_robot_controller
cp config.env.example config.env
nano config.env
```

Abra o arquivo e preencha com seus valores:

```env
# ── Groq API (required) ────────────────────────────────
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ← paste your key here

# ── Microphone ─────────────────────────────────────────
MIC_INDEX=1          ← find the correct number in Step 6.3 below
WAKEWORD_THRESHOLD=0.5
WAKEWORD_COOLDOWN=2

# ── Recording ──────────────────────────────────────────
RECORDING_SECONDS=4
SAMPLE_RATE=16000

# ── Models ─────────────────────────────────────────────
WAKEWORD_MODEL=hey jarvis
LLM_MODEL=llama-3.1-8b-instant
STT_MODEL=whisper-large-v3-turbo
TTS_MODEL=canopylabs/orpheus-v1-english
TTS_VOICE=autumn
```

Salve com `Ctrl+O`, `Enter`, `Ctrl+X`.

**6.3 Encontrar o MIC_INDEX correto**

Execute este auxiliar para listar todos os dispositivos de entrada de áudio:

```bash
python3 -c "
import pyaudio
p = pyaudio.PyAudio()
print('\nAvailable INPUT devices:\n')
for i in range(p.get_device_count()):
    d = p.get_device_info_by_index(i)
    if d['maxInputChannels'] > 0:
        print(f'  [{i}]  {d[\"name\"]}')
        print(f'        channels={int(d[\"maxInputChannels\"])}  rate={int(d[\"defaultSampleRate\"])}Hz')
p.terminate()
"
```

Exemplo de saída:

```
Available INPUT devices:

  [0]  HDA Intel PCH: ALC897 Analog
        channels=2  rate=44100Hz

  [1]  reSpeaker Flex XVF3800
        channels=6  rate=16000Hz    ← this is the one you want

  [2]  USB PnP Sound Device
        channels=2  rate=16000Hz
```

Encontre a linha que diz **reSpeaker Flex** ou **reSpeaker Flex XVF3800**. Anote o número entre colchetes — esse é o seu `MIC_INDEX`. Atualize o `config.env` com esse número.

---

## Parte 7 — Fazer o build do pacote

```bash
cd ~/ros2_ws
colcon build --packages-select my_robot_controller
source ~/.bashrc
```

Saída esperada:

```
Starting >>> my_robot_controller
Finished <<< my_robot_controller [3.2s]

Summary: 1 package finished [3.5s]
```

>  Você deve executar `colcon build` e `source ~/.bashrc` sempre que alterar qualquer arquivo Python.

---

## Parte 8 — Executar o projeto

```bash
ros2 launch my_robot_controller jarvis.launch.py
```

Você deverá ver três processos iniciarem:

```
[turtlesim_node-1]   [INFO] Spawning turtle [turtle1] at x=[5.54], y=[5.54]
[angle_controller-2] [INFO] AngleController ready — listening on /target_angle
[voice_command-3]    [INFO] reSpeaker Flex XVF3800 found — DoA ready
[voice_command-3]    [WakeWord] Listening on device 1 (6ch → mono) for 'hey jarvis' ...
[voice_command-3]    [INFO] Jarvis is listening ...
```

Uma janela será aberta mostrando a tartaruga. Agora fale:

> **"Hey Jarvis, move forward"**

Jarvis responderá "Moving forward!" e a tartaruga se moverá. 

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/ros-results.png" alt="pir" width={800} height="auto" /></p>

## Referência de comandos de voz

| Diga isto | O que acontece |
|---|---|
| `"Hey Jarvis, move forward"` | A tartaruga se move 1 passo para frente |
| `"Hey Jarvis, move backward"` | A tartaruga se move 1 passo para trás |
| `"Hey Jarvis, turn left"` | A tartaruga gira 90° para a esquerda |
| `"Hey Jarvis, turn left 45"` | A tartaruga gira 45° para a esquerda |
| `"Hey Jarvis, turn right"` | A tartaruga gira 90° para a direita |
| `"Hey Jarvis, turn right 30 degrees"` | A tartaruga gira 30° para a direita |
| `"Hey Jarvis, turn to my direction"` | A tartaruga se volta na direção da sua voz (DoA) |
| `"Hey Jarvis, face me"` | Igual ao acima |
| `"Hey Jarvis, turn to 90"` | A tartaruga gira para 90° absolutos |
| `"Hey Jarvis, face 180 degrees"` | A tartaruga gira para 180° absolutos |
| `"Hey Jarvis, spin around"` | A tartaruga faz uma volta completa de 360° |
| `"Hey Jarvis, do a 360"` | Igual ao acima |
| `"Hey Jarvis, stop"` | A tartaruga para imediatamente |

---

## Estrutura de Arquivos do Projeto

```
my_robot_controller/
│
├── my_robot_controller/          # Python package (ROS2 nodes)
│   ├── __init__.py
│   ├── voice_node.py             # Main voice pipeline node
│   ├── rotate_doa.py             # PID angle controller node
│   ├── wakeword.py               # Wake word detection (openwakeword)
│   ├── audio_recorder.py         # Mic recording after wake word
│   ├── stt.py                    # Speech-to-text (Groq Whisper)
│   ├── llm.py                    # Intent parsing (Groq LLaMA)
│   ├── tts.py                    # Text-to-speech (Groq Orpheus)
│   └── config.py                 # Loads settings from config.env
│
├── launch/
│   └── jarvis.launch.py          # Starts all 3 nodes together
│
├── config.env                    # Your secrets (not in git)
├── config.env.example            # Template — copy to config.env
├── package.xml
└── setup.py
```

### Como os nós se conectam

```
reSpeaker Flex (USB)
        │
        ├── [voice_command node]
        │     openwakeword → Groq Whisper → Groq LLaMA → Groq Orpheus
        │     │                                          │
        │     │ publishes /target_angle (Float32)        │ speaks reply
        │     │ publishes /turtle1/cmd_vel (Twist)       │
        │     │                                          ▼
        │     ▼                                     Speaker output
        └── [angle_controller node]
              subscribes /target_angle
              subscribes /turtle1/pose
              PID control → publishes /turtle1/cmd_vel
                                        │
                                        ▼
                              [turtlesim_node]
```

---

## Referência de Configuração

Todas as configurações ficam em `config.env`. Edite e reconstrua para aplicar as alterações.

| Variável | Padrão | Descrição |
|---|---|---|
| `GROQ_API_KEY` | *(required)* | Sua chave de API Groq |
| `MIC_INDEX` | `1` | Índice de dispositivo PyAudio do reSpeaker |
| `WAKEWORD_MODEL` | `hey jarvis` | Frase da palavra de ativação |
| `WAKEWORD_THRESHOLD` | `0.5` | Sensibilidade de detecção (0,0–1,0, menor = mais sensível) |
| `WAKEWORD_COOLDOWN` | `2` | Segundos antes que a palavra de ativação possa ser disparada novamente |
| `RECORDING_SECONDS` | `4` | Quanto tempo gravar após a palavra de ativação disparar |
| `SAMPLE_RATE` | `16000` | Taxa de amostragem de áudio em Hz |
| `LLM_MODEL` | `llama-3.1-8b-instant` | Modelo Groq LLM para análise de intenção |
| `STT_MODEL` | `whisper-large-v3-turbo` | Modelo Groq Whisper para transcrição |
| `TTS_MODEL` | `canopylabs/orpheus-v1-english` | Modelo Groq TTS |
| `TTS_VOICE` | `autumn` | Voz para saída de fala (`tara`, `leah`, `leo`, `dan`, `mia`) |

---


## Recursos

Construído com:
- [Seeed Studio reSpeaker Flex](https://wiki.seeedstudio.com/pt-br/respeaker_flex_introduction/) — matriz de microfones com chip XMOS XVF3800
- [ROS2 Humble](https://docs.ros.org/en/humble/) — middleware para robôs
- [openwakeword](https://github.com/dscripka/openWakeWord) — detecção local de palavra de ativação
- [Groq](https://groq.com/) — Whisper STT ultrarrápido, LLaMA LLM, Orpheus TTS
- [TurtleSim](https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools/Introducing-Turtlesim/Introducing-Turtlesim.html) — simulador de tartaruga ROS2


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
