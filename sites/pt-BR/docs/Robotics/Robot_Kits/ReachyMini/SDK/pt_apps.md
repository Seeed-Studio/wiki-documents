---
description: Guia completo para criar e publicar apps Reachy Mini, cobrindo criação de apps, testes, depuração e publicação no Hugging Face Spaces.
title: Criando e Publicando Apps
slug: /reachymini_sdk_apps
keywords:
  - apps
  - criação
  - publicação
  - apps em python
  - hugging face spaces
  - ReachyMiniApp
  - assistente de app
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_apps/
---

# Criando e Publicando Apps

Reachy Mini tem um ecossistema de apps baseado em Hugging Face Spaces. Você pode criar apps em Python, publicá-los, e qualquer proprietário de um Reachy Mini pode instalá-los com um clique a partir do painel.


<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: "1px solid #ddd", borderRadius: "8px"}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

> Para um tutorial passo a passo com capturas de tela, veja o post no blog: [Make and Publish Your Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps).

---

## Usando Agentes de IA

Se você usar um agente de codificação com IA (Claude Code, Cursor, Copilot, etc.), ele pode criar apps para você. Aponte-o para o arquivo [AGENTS.md](https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md) do projeto:

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

O repositório inclui um diretório `skills/` com guias detalhados que agentes de IA usam para criar apps corretamente:

| Skill | O que ele cobre |
|-------|---------------|
| `create-app.md` | Fluxo de criação de app e templates |
| `ai-integration.md` | Criação de apps com LLM |
| `control-loops.md` | Apps reativos em tempo real (rastreamento, jogos) |
| `motion-philosophy.md` | Escolhendo entre `goto_target` e `set_target` |
| `interaction-patterns.md` | Antenas como botões, cabeça como controle |
| `symbolic-motion.md` | Definindo movimento matematicamente (danças, ritmos) |

---

## Como os Apps Funcionam

O daemon do Reachy Mini gerencia todo o ciclo de vida do seu app:

1. Você envia uma requisição de "start app" (a partir do painel ou da REST API).
2. O daemon inicia seu app como um **subprocesso Python** (`python -u -m your_app.main`).
3. Seu app recebe uma instância conectada de `ReachyMini` e um `stop_event`.
4. Ao ser interrompido, o daemon envia `SIGINT` para o seu processo, o que dispara o desligamento gracioso.
5. Depois que o app termina, o daemon retorna o robô para a posição padrão.

**Restrições principais:**
- Apenas **um app** pode ser executado por vez.
- Seu app roda dentro do subprocesso do daemon — ele não gerencia suas próprias conexões de hardware.
- No robô Wireless, seu app roda em um ambiente virtual compartilhado em `/venvs/apps_venv/`.

---

## Criando um App

Sempre use a ferramenta de CLI para criar apps — ela gera a estrutura correta, metadados e pontos de entrada:

```bash
# Install reachy-mini if not already done
uv pip install reachy-mini

# Create and publish in one step (recommended)
reachy-mini-app-assistant create my_app_name /path/to/destination --publish

# Or create locally first
reachy-mini-app-assistant create my_app_name /path/to/destination
```

> **Nunca crie pastas de app manualmente.** O assistente cuida do boilerplate, tags do Hugging Face, pontos de entrada e da estrutura de pacote correta. A criação manual leva a problemas sutis que são difíceis de depurar.

### Escolha um Template

| Template | Comando | Use quando |
|----------|---------|------------|
| **Default** | `reachy-mini-app-assistant create my_app .` | A maioria dos apps. Estrutura mínima funcional. |
| **Conversation** | `reachy-mini-app-assistant create --template conversation my_app .` | Integração com LLM, fala, fazer o robô falar. Inclui pipeline de áudio, ferramentas de LLM, fusão de movimento e toda a infraestrutura. |

### Estrutura Gerada

```
my_app/
├── index.html              # Hugging Face Space landing page
├── style.css               # Landing page styles
├── pyproject.toml          # Package config with entry points
├── README.md               # Must contain reachy_mini_python_app tag
└── my_app/
    ├── __init__.py
    ├── main.py             # Your app logic
    └── static/             # Optional web UI
        ├── index.html
        ├── style.css
        └── main.js
```

---

## O Contrato ReachyMiniApp

Seu app é uma classe que estende `ReachyMiniApp` e implementa um método `run()`. Aqui está a estrutura mínima:

```python
import threading
import time

import numpy as np

from reachy_mini import ReachyMini, ReachyMiniApp
from reachy_mini.utils import create_head_pose


class MyApp(ReachyMiniApp):
    def run(self, reachy_mini: ReachyMini, stop_event: threading.Event):
        t0 = time.time()

        while not stop_event.is_set():
            t = time.time() - t0

            # Move the head
            yaw = 30.0 * np.sin(2.0 * np.pi * 0.2 * t)
            head_pose = create_head_pose(yaw=yaw, degrees=True)

            # Move the antennas
            a = np.deg2rad(25.0 * np.sin(2.0 * np.pi * 0.5 * t))
            antennas = np.array([a, -a])

            reachy_mini.set_target(head=head_pose, antennas=antennas)
            time.sleep(0.02)


if __name__ == "__main__":
    app = MyApp()
    try:
        app.wrapped_run()
    except KeyboardInterrupt:
        app.stop()
```

### Pontos principais

- **`run(reachy_mini, stop_event)`**: O único método que você deve implementar. A instância `ReachyMini` já está conectada e pronta. Consulte (`poll`) o `stop_event` no seu loop principal para sair de forma graciosa.
- **`wrapped_run()`**: Chamado a partir do bloco `__main__`. Ele cuida de conectar ao robô, iniciar serviços opcionais e chamar seu método `run()`.
- **`stop()`**: Define o `stop_event`. O daemon chama isso via `SIGINT` ao interromper seu app.
- Bloco **`__main__`**: Obrigatório. O daemon executa seu app como um módulo (`python -m my_app.main`), então esse bloco é o ponto de entrada real.

### O Ponto de Entrada em `pyproject.toml`

O daemon descobre seu app por meio de um ponto de entrada padrão do Python. O assistente gera isso para você:

```toml
[project.entry-points."reachy_mini_apps"]
my_app = "my_app.main:MyApp"
```

O nome do grupo é `reachy_mini_apps` (com underscores). O valor aponta para sua classe (`module.main:ClassName`).

Qualquer dependência adicional para o seu projeto deve ser adicionada neste arquivo.

---

## Opcional: Web UI para Seu App

Se você quiser uma página de configurações ou qualquer interface web para seu app, defina `custom_app_url` na sua classe:

```python
class MyApp(ReachyMiniApp):
    custom_app_url: str | None = "http://0.0.0.0:8042"

    def run(self, reachy_mini: ReachyMini, stop_event: threading.Event):
        # Define FastAPI routes on self.settings_app
        @self.settings_app.post("/my_endpoint")
        def my_endpoint():
            return {"status": "ok"}

        # Your main loop...
```

Quando `custom_app_url` é definido, o app inicia automaticamente um servidor web FastAPI que serve arquivos do diretório `static/` dentro do seu pacote. O painel mostra um ícone de configurações para abrir essa UI. A página pode ser acessada em `http://localhost:8042` com uma lite ou em `http://reachy-mini.local:8042` com uma wireless.

Defina `custom_app_url = None` se seu app não precisar de uma Web UI.

> Para um exemplo funcional com um toggle e reprodução de som, veja o [template app](https://huggingface.co/spaces/pollen-robotics/reachy_mini_template_app).

---

## Testando Seu App

### 1. Validar estrutura

```bash
reachy-mini-app-assistant check /path/to/my_app
```

Isso verifica se seu app tem a estrutura correta, pontos de entrada e metadados.

### 2. Executar diretamente

Você pode executar o `main.py` do seu app diretamente para iterar rapidamente (certifique-se de que o daemon esteja em execução):

```bash
python -m my_app.main
```

### 3. Testar pelo painel

Instale seu app localmente e teste-o pelo painel, como os usuários fariam:

```bash
# Install in development mode
uv pip install -e /path/to/my_app

# Start the daemon
reachy-mini-daemon          # Lite
reachy-mini-daemon --sim    # Simulation
```

Depois abra [http://127.0.0.1:8000/](http://127.0.0.1:8000/) — seu app aparece na lista de instalados.

---

## Publicando no Hugging Face

### 1. Fazer login no Hugging Face

```bash
uv pip install --upgrade huggingface_hub
hf auth login
```

Use um token com permissões de **Write**.

### 2. Publicar

Se você usou `--publish` ao criar o app, ele já é um Space do Hugging Face com um remoto Git. Basta fazer push:

```bash
git add . && git commit -m "my changes" && git push
```

Se você criou sem `--publish`, pode publicar depois:

```bash
reachy-mini-app-assistant publish /path/to/my_app
```

### 3. Descoberta

Para que seu app apareça na loja de apps do Reachy Mini, o `README.md` dele deve conter a tag `reachy_mini_python_app` no frontmatter YAML:

```yaml
---
tags:
  - reachy_mini_python_app
---
```

O assistente adiciona isso automaticamente. Se você criar o README manualmente, não se esqueça disso.

---

## Instalando Apps

### Pelo painel

Abra o painel do Reachy Mini e clique em **Install** em qualquer app da comunidade. Este é o jeito mais fácil.

### Via REST API

```bash
# Install from Hugging Face
curl -X POST http://localhost:8000/api/apps/install \
  -H "Content-Type: application/json" \
  -d '{"url": "https://huggingface.co/spaces/<user>/<app_name>"}'

# Start an app
curl -X POST http://localhost:8000/api/apps/start-app/<app_name>

# Stop the current app
curl -X POST http://localhost:8000/api/apps/stop-current-app

# List installed apps
curl http://localhost:8000/api/apps/list
```

Substitua `localhost` por `reachy-mini.local` ou pelo endereço IP do robô para a versão Wireless.

### Implantação offline / manual para uma unidade Wireless

Se você não tiver acesso à internet no robô (por exemplo, em uma conferência), pode instalar seu app diretamente:

```bash
# Copy and install your app on the robot
scp -r /path/to/my_app pollen@reachy-mini.local:/tmp/my_app
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/pip install /tmp/my_app"
```

Depois de atualizar o código manualmente, reinicie o daemon ou o app para que as alterações entrem em vigor.

---

## Depurando Apps

### Visualizando logs

:::info Lite / Simulation
Se você executar o daemon em um terminal, os logs do app (stdout/stderr) aparecem diretamente ali.

```bash
reachy-mini-daemon          # Lite
reachy-mini-daemon --sim    # Simulation
# App logs will print here
```
:::

:::info Wireless
A saída do app é capturada pelo daemon e fica disponível via `journalctl`:

```bash
ssh pollen@reachy-mini.local

# Live logs
sudo journalctl -u reachy-mini-daemon -f

# Recent logs, filtered (daemon logs are noisy with HTTP access logs)
sudo journalctl -u reachy-mini-daemon --since '5 min ago' | grep -v "uvicorn\|GET \|POST "
```
:::

### Problemas comuns

| Problema | Solução |
|---------|----------|
| "An app is already running" | Pare primeiro o app atual: `curl -X POST http://localhost:8000/api/apps/stop-current-app` |
| Daemon em um estado ruim | Reinicie-o: `sudo systemctl restart reachy-mini-daemon` (espere ~30s antes de iniciar um app) |
| App não detecta alterações no código | Reinicie o app. Se você fez o deploy manualmente, também limpe o bytecode: `rm -rf __pycache__` |

### Dica: registre tudo na inicialização

Uma prática útil de depuração é registrar sua configuração quando o app inicia:

```python
import logging
import sys

logger = logging.getLogger(__name__)

def run(self, reachy_mini, stop_event):
    logger.info("=" * 50)
    logger.info("MY APP STARTING")
    logger.info(f"  Python: {sys.version}")
    logger.info("=" * 50)
    # ...
```

---

## Configuração do App

O subprocesso do app **herda as variáveis de ambiente do daemon**. Não há nenhum mecanismo especial de injeção — seu app vê tudo o que o processo do daemon vê.

Se o seu app precisar de configuração em tempo de execução (chaves de API, URLs de servidor, etc.), a abordagem recomendada é usar **a interface web do app**. Defina `custom_app_url` na sua classe e adicione uma página de configurações onde os usuários possam inserir valores (chaves de API, endereços de servidor, etc.) diretamente pelo navegador. Esta é a opção mais amigável para o usuário e funciona em todas as plataformas. Veja [Opcional: Interface Web para o Seu App](#opcional-interface-web-para-o-seu-app) acima para saber como configurar isso.

Outras abordagens:

- **Arquivo de configuração**: Leia de um caminho conhecido (por exemplo, `.env` veja [exemplo aqui](https://github.com/pollen-robotics/reachy_mini_conversation_app/blob/main/.env.example)).
- **Padrões fixos em código**: Simples e fácil de depurar durante o desenvolvimento.

---

## Usando Áudio no Seu App

Gravação de áudio, reprodução e detecção de direção de chegada funcionam da mesma forma dentro de um app e em um script independente — use diretamente os métodos do SDK (`start_recording()`, `get_audio_sample()`, `push_audio_sample()`, `play_sound()`).

Consulte os exemplos oficiais para ver código funcional:

- **[Gravação de Som](/pt-br/reachymini_examples_sound_record)**: Grave a partir do array de microfones e salve em WAV.
- **[Reprodução de Som](/pt-br/reachymini_examples_sound_play)**: Reproduza um arquivo WAV ou envie áudio em tempo real (por exemplo, de um mecanismo de TTS).
- **[Direção de Chegada do Som](/pt-br/reachymini_examples_sound_doa)**: Detecte quem está falando e faça o robô olhar para a pessoa.

Para detalhes sobre como os fluxos de áudio diferem entre Wireless e Lite, veja [Arquitetura de Mídia](/pt-br/reachymini_sdk_media-architecture).

---

## Leituras adicionais

- **Post no blog**: [Make and Publish Your Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps) — passo a passo completo com capturas de tela
- **Referência de API**: [Apps API](/pt-br/reachymini_api_apps) — referência gerada automaticamente para `ReachyMiniApp`, `AppManager` e classes relacionadas
- **REST API**: [REST API Reference](/pt-br/reachymini_api_rest-api) — documentação completa dos endpoints HTTP
- **Apps de exemplo**: Navegue pelos [apps da comunidade no Hugging Face](https://hf.co/reachy-mini/#/apps) para se inspirar

| App | Padrões principais | Link |
|-----|-------------|------|
| Conversation App | Ferramentas de LLM, pipeline de áudio, laços de controle | [GitHub](https://github.com/pollen-robotics/reachy_mini_conversation_app) |
| Marionette | Gravação de movimento, torque seguro, datasets do HF | [HF Space](https://huggingface.co/spaces/RemiFabre/marionette) |
| Radio | Padrão de interação com antena | [HF Space](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio) |
| Simon | Padrão sem GUI (antena para iniciar) | [HF Space](https://huggingface.co/spaces/apirrone/reachy_mini_simon) |
| Hand Tracker | Laço de controle em tempo real baseado em câmera | [HF Space](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2) |
| Spaceship Game | Cabeça como joystick, botões da antena | [HF Space](https://huggingface.co/spaces/apirrone/spaceship_game) |