---
description: "Capítulo 30 do Curso para Iniciantes em IA Física da Seeed — um projeto eletivo de interação por voz e multimodal: um array de microfones reSpeaker com rastreamento de fonte sonora por DOA mais reconhecimento de fala Whisper da Groq e compreensão de intenção com Llama para controlar por voz o reBot Arm, desde a fiação de hardware até a referência de linha de comando."
title: Capítulo 30 - Interação por Voz e Multimodal
hide_title: true
keywords:
  - reBot
  - Braço Robótico
  - reSpeaker
  - DOA
  - Whisper
  - Controle por Voz
  - Multimodal
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_30
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-08
  author: Seeed Studio Robotics Team
createdAt: '2026-10-08'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_30/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 6 · Capítulo 30 · Eletivo</span>
    <h2>30. Interação por Voz e Multimodal</h2>
    <p>
      Capítulo 30 do Curso para Iniciantes em IA Física da Seeed — um projeto eletivo de interação por voz e multimodal: um array de microfones reSpeaker com rastreamento de fonte sonora por DOA mais reconhecimento de fala Whisper da Groq e compreensão de intenção com Llama para controlar por voz o reBot Arm, desde a fiação de hardware até a referência de linha de comando.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#hardware">Hardware</a>
      <a href="#setup">Configuração do ambiente</a>
      <a href="#modes">Modos de interação</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 30.1 Visão Geral do Capítulo

Use um reSpeaker para controlar por voz o reBot Arm. Este documento guia você passo a passo, do zero, na construção de um sistema de braço inteligente que "consegue ouvir e se mover".

Este é um **sistema de controle de braço inteligente acionado por voz**.

Quando você diz "olá", o braço se vira para você e acena com a cabeça; quando você diz "dançar", ele balança feliz; bata palmas do outro lado da sala e ele "ouve" a direção do som e gira para encará-lo.

O sistema faz três coisas:

- **Ouvir** — capturar áudio pelo array de microfones e estimar a direção do som
- **Entender** — reconhecer a fala com IA e inferir a intenção
- **Mover** — controlar o braço para executar a ação correspondente

Este projeto demonstra um sistema completo de "colaboração dispositivo-nuvem + fusão de múltiplos sensores":

- **Borda (no dispositivo)**: localização sonora por DOA, controle de movimento, animação em repouso
- **Nuvem**: reconhecimento de fala (Whisper), compreensão de intenção (Llama)

Vantagens desta arquitetura:

- DOA é uma tarefa em tempo real (&lt; 100 ms) e precisa rodar localmente
- O reconhecimento de fala precisa de um modelo grande e deve rodar na nuvem
- O controle de movimento é um loop de segurança e deve rodar localmente

### Dois modos de interação
| Modo | Nome | Método de Interação | Cenários Aplicáveis | Requer Internet |
| ---- | ---- | ---- | ---- | ---- |
| Modo 1 | Rastreamento de Fonte Sonora por DOA | Detecta automaticamente a direção da fonte sonora e gira em sua direção | Demonstrações em exposições, instalações interativas | Não |
| Modo 2 | Controle por Comando de Voz | Segure a tecla Enter para controlar | Assistente de voz, demonstrações em aulas | Sim (Groq API) |


### Arquitetura do sistema

```text
You speak / make a sound
      v
[ reSpeaker ]  4-mic array + XVF3800 chip
      v
[ Ubuntu ]  Python 3.10 main program
      v
   two paths:
   |--> DOA mode: compute sound direction locally -> turn the arm
   +--> Voice mode: upload to Groq cloud AI -> Whisper STT + Llama NLU -> control the arm
      v
[ reBot Arm ]  7-DoF arm executes
```

- Arquitetura em camadas
    - **Camada de hardware** (dispositivos que você pode tocar):
        - reSpeaker (array de 4 microfones com controlador XIAO ESP32S3)
        - reBot Arm B601-DM (braço de 6 DoF + garra)
        - PC com Ubuntu 22.04 (roda o programa principal)
    - **Camada de driver** (faz o hardware conversar entre si):
        - Áudio USB (pyusb / libusb) — conecta o array de microfones
        - Comunicação serial (MotorBridge) — conecta o braço
        - Web API (Groq Cloud) — conecta os serviços de IA na nuvem
    - **Camada de algoritmo** (o "cérebro" que processa os dados):
        - Localização sonora por DOA (local, em tempo real)
        - Reconhecimento de fala Whisper (Groq Cloud)
        - Compreensão de intenção Llama-3.3 (Groq Cloud)
        - Planejamento de interpolação de movimento (local, controle suave)
    - **Camada de aplicação** (efeitos que você pode ver):
        - Modo de rastreamento por DOA
        - Modo de controle por voz
        - Animação de respiração em repouso
        - Reprodução de voz

<a id="hardware"></a>

## 30.2 Preparação de Hardware

### O que preparar
| Componente | Modelo | Qtde | Função Geral | Recomendação de Compra |
| ---- | ---- | ---- | ---- | ---- |
| Braço Robótico | reBot Arm B601-DM | 1 | O "corpo" que executa os movimentos | [Official Seeed Studio](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html) |
| Array de Microfones | reSpeaker XVF3800 | 1 | Capturar som e detectar direção | [Official Seeed Studio](https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html) |
| PC Host | PC com Ubuntu 22.04 | 1 | O "cérebro" que roda os programas | Arquitetura x86_64 |
| Cabo USB | USB-A para USB-C | 2 | Conexão dos dispositivos | Normalmente incluído com o dispositivo |
| Sargento de Marcenaria | 3 polegadas ou maior | 2 | Fixar a base do braço robótico | [Official Seeed Studio](https://www.seeedstudio.com/6-Inch-G-Clamp-p-6912.html)   |
| Fonte de Alimentação | 24V 15A (conector XT30) | 1 | Alimentar o braço robótico |  [Official Seeed Studio](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)  |


#### Por que este hardware

- O **reSpeaker XVF3800** é um array de 4 microfones da Seeed Studio e XMOS:
- Chip DSP XVF3800 onboard, com suporte nativo a DOA, cancelamento de eco e supressão de ruído
- Nenhum desenvolvimento extra de algoritmo é necessário; a localização sonora é feita no nível de hardware
- USB plug-and-play

O **reBot Arm B601-DM** é um braço de mesa com 7 DoF:

- 7 DoF significa movimento muito flexível (próximo a um braço humano)
- B601-DM é a versão com motor DM (a outra é a versão com servo RS); motores DM têm maior precisão
- Suporte integrado à biblioteca de cinemática Pinocchio

### Visão geral do hardware

#### Array de microfones reSpeaker

Um módulo de processamento de áudio inteligente com **4 microfones**:

| Recurso | Detalhe |
| :--- | :--- |
| Design dividido | A placa principal e a placa do array de microfones podem ser separadas para implantação flexível |
| Captação 360° | Quatro microfones dispostos em anel, capturando som de todas as direções |
| Processamento inteligente onboard | Chip XMOS XVF3800 com cancelamento de eco, supressão de ruído e localização sonora (DOA) |
| Interfaces USB duplas | Conector USB-C e conector de travamento PH2.0 |
| Amplificador onboard | Aciona diretamente um alto-falante de 10 W (via conector JST) |

Em uma frase: um "ouvido que ouve tudo" — quatro "ouvidos" para escutar som de todas as direções, além da capacidade de calcular a direção e filtrar ruídos.

#### PC com Ubuntu 22.04

| Item | Requisito |
| :--- | :--- |
| SO | Ubuntu 22.04 LTS (64 bits) |
| Arquitetura | x86_64 (PC comum Intel/AMD) |
| Mínimo | CPU de 4 núcleos / 8 GB de RAM / 50 GB de disco / acesso à internet |

Opções para usuários Windows:

- Instalar um sistema de dual boot (recomendado)
- Usar uma VM (VMware; perda de desempenho; não recomendado para este projeto)

### Diagrama de fiação do hardware

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-30/ch30-01.png" alt="Hand-eye calibration AX = XB" />
</div>


Etapas de fiação:

- Conecte o reSpeaker ao PC com um cabo USB-C
- Conecte o reBot Arm ao PC com um cabo USB-C
- (Opcional) conecte um alto-falante ou fones de ouvido à saída de áudio do reSpeaker
- Certifique-se de que o PC esteja online

<a id="setup"></a>

## 30.3 Configuração do Ambiente

### Instalar o Miniforge

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

#### Por que Miniforge em vez do Python do sistema

- **Isolamento**: cada projeto tem seu próprio ambiente Python, independente dos outros
- **Versões flexíveis**: fixar uma versão específica do Python para o projeto (por exemplo, 3.10.2)
- **Gerenciamento de dependências**: o conda resolve dependências binárias complexas (por exemplo, bibliotecas C++ do Pinocchio)

Mensagens do instalador:

- Pressione Enter para ver a licença
- Digite `yes` para concordar
- Pressione Enter para confirmar o caminho de instalação (padrão `~/miniforge3`)
- Digite `yes` para inicializar o conda (recomendado)

Depois que terminar, feche e reabra o terminal:

```bash
conda --version
# expected: conda 24.x.x
```

### Clonar o código do projeto

```bash
git clone https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git
cd reBot-Arm-reSpeaker-Flex
```

Se a rede estiver lenta, use um espelho: `git clone https://ghproxy.com/https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git`

### Criar o ambiente Conda

```bash
conda env create -f environment.yml
```

Isso leva cerca de 10-30 minutos e irá:

- Criar um ambiente Python 3.10.2 chamado `flex`
- Instalar pinocchio, numpy, pyusb e outras dependências

O sucesso se parece com isto:

```text
Executing transaction: ... done
# To activate this environment, use
#     $ conda activate flex
```

#### Por que pinocchio

- Pinocchio é uma biblioteca C++ rápida de cinemática de corpos rígidos
- Fornece cinemática direta (FK), cinemática inversa (IK) e dinâmica
- É a dependência central para o controle de movimento do braço neste projeto

### Ativar o ambiente Conda

```bash
conda activate flex
```

Ativação bem-sucedida: `(flex)` aparece antes do prompt

```bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

Reative isso toda vez que você abrir um novo terminal.

### Instalar dependências do sistema

```bash
sudo apt-get update && sudo apt-get install -y ffmpeg
```

#### O que o ffmpeg faz

- ffmpeg é uma ferramenta de processamento de áudio/vídeo; este projeto a usa para pós-processar arquivos de áudio após TTS: converter formato de áudio, ajustar taxa de amostragem e mesclar/aparar áudio.

### Instalar o uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### Por que o uv é necessário

- uv é um gerenciador de pacotes Python extremamente rápido (10-100x mais rápido que o pip)
- A biblioteca `motorbridge` do projeto deve ser instalada via uv
- O arquivo uv.lock fixa versões exatas das dependências

Após a instalação, feche e reabra o terminal.

### Clonar a biblioteca de controle do braço

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

Saída esperada: progresso da instalação sem erros.

### Definir PYTHONPATH

```bash
export PYTHONPATH="$PWD:$PYTHONPATH"
```

#### O que isso significa

- Quando o Python importa uma biblioteca, ele procura pelos caminhos em `sys.path`. Este comando diz ao Python: "além dos caminhos de busca padrão, procure neste diretório."
- ⚠ Esta configuração é perdida quando você fecha o terminal. Opção permanente:

    ```bash
    echo 'export PYTHONPATH="'$PWD':$PYTHONPATH"' >> ~/.bashrc
    source ~/.bashrc
    ```

#### Por que não usar pip install

- `reBotArm_control_py` é uma biblioteca em desenvolvimento, não um pacote estável publicado no PyPI
- Uma instalação editável é mais flexível
- Apontar o PYTHONPATH diretamente para o diretório-fonte também funciona

### Definir permissões da porta serial

```bash
sudo chmod 666 /dev/ttyACM*
```

Por quê

- O Linux tem uma gestão rígida de permissões para dispositivos de hardware. Por padrão, usuários comuns não podem acessar diretamente dispositivos seriais; este comando permite que todos os usuários leiam e escrevam nesses dispositivos.

Essa configuração é perdida após reiniciar. Opção permanente:

```bash
sudo usermod -a -G dialout $USER
# log out and back in to take effect
```

- **Princípio**: `dialout` é o grupo do Linux com acesso a dispositivos seriais; entrar nele concede ao usuário leitura/gravação em dispositivos pertencentes a esse grupo.

### Configurar a chave de API da Groq

Obter a chave de API:

- Visite [https://console.groq.com/keys](https://console.groq.com/keys)
- Registre-se / faça login (e-mail ou conta do GitHub)
- Clique em "Create API Key"
- Copie a chave (formato `gsk_xxxxxxxxxxxx`)

Configure-a no código:

```bash
cd ~/reBot-Arm-reSpeaker-Flex
nano sound_tracking_arm.py
```

Encontre `VOICE_CFG`:

```python
VOICE_CFG = {
    "api_key": "12345678",   # ←- replace with your API key
    ...
}
```

Altere para:

```python
"api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

- Salvar: Ctrl O -> Enter -> Ctrl X

Lembrete de segurança:

- Não compartilhe a chave de API em repositórios públicos
- Não publique capturas de tela nas redes sociais
- Se vazar, exclua-a imediatamente e gere outra no console da Groq


## 30.4 Conexão e Montagem de Hardware

### Conexão de hardware

- Etapa 1: conectar o reSpeaker
    - Conecte o reSpeaker ao PC com um cabo USB-C
    - O LED no reSpeaker deve acender
    - `lsusb` deve mostrar o dispositivo Seeed Studio
- Etapa 2: conectar o reBot Arm
    - Prenda a base do braço a uma mesa com um grampo de marcenaria
    - Conecte o braço ao PC com um cabo USB-C
    - Conecte a alimentação de 24 V (XT30); **ainda não ligue**
    - **Lista de verificação de segurança antes de ligar:**
        - Base do braço fixada
        - Sem obstáculos no alcance de movimento
        - Ninguém próximo ao alcance de movimento
        - Cabo USB conectado
        - Cabo de alimentação conectado corretamente
- Etapa 3: ligar a alimentação
    - Após confirmar, ligue a fonte de 24 V
    - O braço emite um leve som de energização do motor
    - `ls /dev/ttyUSB*` deve mostrar `/dev/ttyUSB0`

### Verificar conexões de hardware

```bash
arecord -l
```

Esperado: `card 2: XVF3800 [reSpeaker XVF3800], device 0: USB Audio [USB Audio]`

```bash
ls -la /dev/ttyUSB0
```

Esperado: `crw-rw-rw- 1 root dialout ... /dev/ttyUSB0`

## 30.5 Primeira Execução

### Verificação pré-execução

#### Verificação 1: dependências do Python

```bash
conda activate flex
cd ~/reBot-Arm-reSpeaker-Flex
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

Esperado: `pyusb + numpy OK`

#### Verificação 2: biblioteca do braço

```bash
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

- Esperado: `Robot Arm Library OK`

#### Verificação 3: microfone

```bash
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
aplay -D plughw:2,0 /tmp/test.wav
```

- Ouvir o áudio gravado = microfone funcionando.

### Inicialização

```bash
cd ~/reBot-Arm-reSpeaker-Flex
python sound_tracking_arm.py
```

Saída esperada:

```text
==================================================
  reBot Arm B601-DM + reSpeaker Flex
  Please select the operating mode:
==================================================
  [1] DOA Interaction Mode (Sound Source Tracking + Standby Animation)
  [2] Voice control mode (button trigger + AI LLM control)
==================================================
Please enter the mode number (1 or 2):
```

- Digite `1`: modo de rastreamento de fonte sonora DOA
- Digite `2`: modo de controle por voz

Iniciar diretamente em um modo específico:

```bash
python sound_tracking_arm.py --mode doa    # DOA mode
python sound_tracking_arm.py --mode voice  # voice mode
```

### Teste da primeira execução

#### Teste do modo DOA

- O programa: inicializa o USB -> conecta o braço -> entra em repouso
- Método de teste: fique ao lado do braço e fale ou bata palmas
- Observe se o braço gira em sua direção, faz um aceno de cabeça e retorna ao repouso

#### Teste do modo de voz

- Pressione Enter; veja o aviso de "recording"
- Diga "hello" ou "say hello"
- Aguarde cerca de 5 segundos
- Observe se ele reconhece a fala, se o braço executa a ação e se uma resposta em voz é reproduzida

---

<a id="modes"></a>

## 30.6 Detalhes dos Recursos

### Modo 1: Rastreamento de Fonte Sonora DOA

#### O que é DOA

- DOA = Direction of Arrival
- Estima de qual direção o som vem (como os ouvidos julgando de onde vem um som)

#### Fluxo de trabalho

```text
Start the system
    v
Initialize USB device
    v
Connect reSpeaker  ←->  Connect reBot Arm
    v
Loop:
    |- Read DOA angle data (0 deg~360 deg)
    |- Is a valid sound source detected?
    |   |- No -> Breathing idle animation -> keep reading
    |   +- Yes -> 4-frame angle buffer queue -> compute weighted average angle
    |           -> cosine-similarity smoothing filter
    |           -> angle change > trigger threshold?
    |               |- No -> keep reading
    |               +- Yes -> arm turns toward the target direction
    |                       -> performs a nod
    |                       -> enters cooldown
    |                       -> keep reading
    v
Exit (Press Ctrl+C)
```

#### Detalhes do algoritmo principal

- Fila de buffer de ângulo de 4 quadros
- **Problema**: ângulos DOA de quadro único oscilam (+/-5°~10°); acionar o braço diretamente causa tremores constantes.
- **Solução**: um buffer circular armazena os últimos 4 quadros de dados DOA (~200 ms).

    ```text
    [diagram: ring buffer]

         new frame written
            v
      [F4] [F3] [F2] [F1]
       |              |
       +---- average --+
            v
         smoothed angle
    ```

- **Por que 4 quadros**:
    - Poucos demais: suavização insuficiente (a oscilação ainda é visível)
    - Muitos demais: atraso na resposta (o braço reage lentamente)
    - 4 quadros é um valor empírico que equilibra suavidade e capacidade de resposta

#### Filtro de suavização por similaridade de cosseno

- **Problema**: o microfone pode julgar a direção de forma errada (ruído súbito, som refletido).
- **Solução**: verificar a consistência do ângulo entre quadros recentes; diferença grande demais é tratada como ruído.

    ```python
    import numpy as np

    def is_consistent(angles, threshold_deg=30):
        """Check whether recent angles are consistent."""
        if len(angles) < 2:
            return True
        # compute angle differences between adjacent frames (handle 360 deg wrap)
        diffs = []
        for i in range(len(angles) - 1):
            diff = abs(angles[i+1] - angles[i])
            # the diff may wrap around 360; take the smaller
            diff = min(diff, 360 - diff)
            diffs.append(diff)

        # consistent only when the max diff is below the threshold
        return max(diffs) < threshold_deg
    ```

- Limite de disparo
    - Justificativa para o **padrão de 15°**:
        - Os ouvidos humanos julgam a direção do som com cerca de +/-10°~15° de erro
        - O limite é um pouco maior que o erro do ouvido para evitar responder a pequenas flutuações
        - Limite grande demais -> resposta lenta
        - Limite pequeno demais -> disparos falsos frequentes

#### Justificativa do cooldown (padrão 3 segundos)

- Girar + acenar leva cerca de 2–3 segundos
- Durante o cooldown, novos sons são ignorados para que uma ação não seja interrompida no meio da execução
- O cooldown deve ser um pouco maior que a duração de uma única ação

#### Animação de repouso "respirando"

- Ciclo de cerca de 4 segundos
- Ângulos das juntas oscilam lentamente em +/-5 graus de forma senoidal
- Efeito visual: como uma pessoa respirando
- Mostra que o sistema está em execução e dá confiança ao usuário

### Modo 2: Controle por Comandos de Voz

#### Loop completo de interação

- Gravar -> reconhecer -> entender -> executar -> anunciar

#### Fluxo de trabalho

```text
The user presses Enter.
    v
arecord starts recording (6 channels, 16kHz, 5 seconds)
    v
User releases Enter -> stop recording
    v
NumPy audio normalization (extract first channel + gain amplification)
    v
Upload to Groq API
    v
Whisper model performs speech-to-text (STT)
    v
Text command obtained (e.g. "turn left")
    v
Send to Llama-3.3-70B large language model
    v
LLM understands intent + outputs JSON structured result
    v
Parse result
    |- Invalid -> broadcast "Sorry, I didn't catch that. Could you please repeat?"
    +- Valid -> execute the corresponding arm action
              v
         Edge-TTS voice broadcast of the result
              v
         Return to idle
```

#### Detalhes do processamento de áudio

```python
# 6-channel capture
audio_data = arecord(... -c 6 -r 16000 ...)  # 6 channels, 16kHz
# take channel 1 (XVF3800 has already beamformed)
single_channel = audio_data[:, 0]

# normalize + gain
normalized = single_channel / np.max(np.abs(single_channel))
amplified = normalized * 0.9  # leave 10% headroom to avoid clipping
# save as WAV
scipy.io.wavfile.write("output.wav", 16000, (amplified * 32767).astype(np.int16))
```

#### Comandos de voz suportados

#### Como a IA entende suas palavras

- Usa prompt engineering: fornece à IA um modelo de instrução detalhado:
- Quais ações podem ser executadas
- O significado de cada ação

#### Formato de saída necessário (JSON)

- Por exemplo, "help me turn my head to the left" é analisado como:

    ```json
    {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
    ```

**Vantagem**: não são necessárias palavras de comando fixas; basta falar naturalmente como em uma conversa.

- Exemplo de design de prompt

    ```python
    SYSTEM_PROMPT = """
    You are a robotic arm voice-control assistant. The user will say what they want the arm to do.
    Choose the best-matching action from the list below and output it as JSON:

    Available actions:
    - turn_left: turn left, param angle (default 45)
    - turn_right: turn right, param angle (default 45)
    - say_hello: greet, nod twice in a row
    - wave: wave, sway left and right twice
    - reset: return to initial position
    - stop: stop immediately

    Output format (strict JSON):
    {"action": "<action_name>", "params": {<params>}, "reply": "<voice reply to user>"}

    Do not output anything else; output only JSON.
    """
    ```

## 30.7 Argumentos de linha de comando

### Tabela completa de argumentos

```bash
python sound_tracking_arm.py [arguments]
```

### Exemplos de uso

#### Uso básico

```bash
python sound_tracking_arm.py                    # DOA tracking mode (default)
python sound_tracking_arm.py --mode voice       # voice control mode
```

#### Ajustar sensibilidade de DOA

```bash
# raise the trigger threshold (larger angle change needed, fewer false triggers)
python sound_tracking_arm.py --threshold 25

# lower the trigger threshold (more sensitive, but more false triggers)
python sound_tracking_arm.py --threshold 10

# extend cooldown
python sound_tracking_arm.py --cooldown 5

# adjust multiple at once
python sound_tracking_arm.py --threshold 20 --cooldown 5
```

#### Especificar dispositivos de hardware

```bash
# arm on a different serial port
python sound_tracking_arm.py --port /dev/ttyACM0

# pass the API key on the command line (overrides code config)
python sound_tracking_arm.py --mode voice --groq-key gsk_xxxxxxxxxxx
```

#### Alternar voz de TTS

```bash
# Chinese male voice (Yunjian)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-YunjianNeural

# Chinese female voice (Xiaoxiao, default)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoNeural

# Chinese female voice (Xiaoxiao, multilingual, multi-emotion)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoMultilingualNeural
```

- Habilitar depuração

    ```bash
    python sound_tracking_arm.py --debug
    ```

---

> （Nota: parte do conteúdo foi gerado pela IA Doubao Work）

</div>
