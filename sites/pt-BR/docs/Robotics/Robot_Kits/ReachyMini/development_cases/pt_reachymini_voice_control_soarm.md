---
description: Controle a abertura/fechamento da garra do SO-ARM com comandos de voz via o aplicativo de conversação do Reachy Mini, sem modificar o código-fonte oficial, usando o mecanismo de ferramentas externas.
title: Controle por Voz do Reachy Mini para SO-ARM
slug: /reachymini_development_cases_gripper_voice_control
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp
keywords:
  - reachy mini
  - so-arm
  - Huggingface
  - conversation app
sku: 100090917，100025004，114993666,114993667
last_update:
  date: 7/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-29'
updatedAt: '2026-07-30'
url: https://wiki.seeedstudio.com/pt-br/reachymini_development_cases_gripper_voice_control/
---
# Controle por Voz do Reachy Mini para SO-ARM

Este caso usa o aplicativo de conversação do Reachy Mini para abrir e fechar a garra do braço seguidor SO-ARM com comandos de voz — **sem modificar o código-fonte oficial**, usando o mecanismo de ferramentas externas integrado ao app.

<div align="center">
  <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp"
  />
</div>

## Como funciona

```text
Voice command
  → gripper_control external tool (LLM function calling)
  → subprocess runs the driver script: soarm_gripper.py open|close
  → lerobot SOFollower → /dev/ttyACM1 drives the SO-ARM gripper
```

Arquivos adicionados por este fork:


| File                                                 | Purpose                                            |
| ---------------------------------------------------- | -------------------------------------------------- |
| `soarm_gripper.py`                                   | Gripper driver script (based on lerobot)           |
| `external_content/external_tools/gripper_control.py` | External tool exposed to the LLM                   |
| `.gitignore`                                         | Un-ignores the tool files so they can be committed |

## Pré-requisitos

1. O Reachy Mini está conectado (`/dev/ttyACM0`) e o daemon está em execução.
2. O braço seguidor SO-ARM está conectado. Este guia assume que ele é enumerado como `/dev/ttyACM1` — confirme com `ls /dev/ttyACM*`; se for diferente, atualize `PORT` em `soarm_gripper.py`.
3. Um ambiente conda `lerobot` com suporte a feetech foi criado:

   ```bash
   conda create -n lerobot python=3.10
   conda activate lerobot
   pip install lerobot[feetech]
   ```
4. Você já calibrou o braço uma vez com o lerobot (isso gera um arquivo de calibração em `~/.cache/huggingface/lerobot/calibration/robots/so_follower/`). O script usa `ARM_ID = "my_awesome_follower_arm"`, que deve corresponder ao nome do seu arquivo de calibração.

## Instalar reachy_mini_conversation_app

> Observação: antes de instalar este app, você precisa instalar primeiro o [Reachy Mini SDK](https://github.com/pollen-robotics/reachy_mini/).

Clone o repositório do fork:

```bash
git clone https://github.com/xiehuangbao888/reachy_mini_conversation_app.git
cd reachy_mini_conversation_app
```

**Usando conda**

```bash
conda create -n reachy_mini python=3.12
conda activate reachy_mini
pip install -e .
```

**(ou) Usando uv**

```bash
# macOS (Homebrew)
uv venv --python /opt/homebrew/bin/python3.12 .venv

# Linux / Windows (Python on PATH)
uv venv --python python3.12 .venv

source .venv/bin/activate
uv sync
```

:::caution
Se você instalar este app em um ambiente conda enquanto o `lerobot` estiver em outro ambiente conda (veja Pré-requisitos), defina `LEROBOT_PYTHON` em `.env` para o caminho do python do ambiente do lerobot (por exemplo, `/home/ubuntu/miniconda3/envs/lerobot/bin/python`). Não misture com o ambiente reachy_mini.
:::

## Configurar o controle de voz da garra

Adicione as duas linhas a seguir ao `.env` na raiz do repositório (crie o arquivo se ele não existir):

```bash
REACHY_MINI_EXTERNAL_TOOLS_DIRECTORY=external_content/external_tools
AUTOLOAD_EXTERNAL_TOOLS=1
```

Se o caminho do python do seu lerobot for diferente, também defina:

```bash
LEROBOT_PYTHON=/path/to/lerobot/env/bin/python
```

## Executar

**Você deve iniciar o app a partir da raiz do repositório** para que `.env` e o diretório de ferramentas relativas sejam resolvidos corretamente:

```bash
cd reachy_mini_conversation_app
reachy-mini-conversation-app
```

## Comandos de voz

- Abrir: "open the gripper" / "open the claw" / "release" / "let go"
- Fechar: "close the gripper" / "close the claw" / "grab it" / "hold this"

## Teste manual

Sem iniciar o aplicativo de conversação, verifique primeiro se o hardware e a calibração funcionam:

```bash
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py open
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py close
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py demo   # open and close twice
```

## Personalizar: controlar outras partes do braço

Toda a cadeia envolve apenas dois arquivos — modifique aquele que corresponde à sua necessidade:

### 1. Alterar o movimento em si → `soarm_gripper.py` (raiz do repositório)

Este é o script que realmente aciona o braço. Ele atualmente apenas envia ações para a garra:

```python
robot.send_action({"gripper.pos": target})
```

As chaves de juntas disponíveis para o seguidor SO-ARM são `shoulder_pan.pos`, `shoulder_lift.pos`, `elbow_flex.pos`, `wrist_flex.pos`, `wrist_roll.pos` e `gripper.pos` (normalizado 0–100). Para controlar outras partes, adicione as juntas correspondentes ao dicionário passado para `send_action()`, por exemplo:

```python
robot.send_action({
    "shoulder_pan.pos": 50.0,
    "elbow_flex.pos": 70.0,
    "gripper.pos": OPEN_POS,
})
```

Você também pode adicionar seus próprios ramos de ação (por exemplo, `wave`, `home`) em `main()`, seguindo o padrão `open` / `close` / `demo`.

Parâmetros de ajuste comuns neste arquivo:

- `OPEN_POS` / `CLOSE_POS` — curso da garra, normalizado 0–100 (padrões 60 / 20).
- `PORT` — dispositivo serial do braço seguidor.
- `ARM_ID` — nome do perfil de calibração.

### 2. Permitir que o LLM chame a nova ação → `external_content/external_tools/gripper_control.py`

Esta é a ferramenta externa exposta ao LLM — ela determina quais ações o LLM "sabe" que estão disponíveis. Ao adicionar uma ação, atualize isto em sincronia:

- `description` — a descrição da ferramenta, dizendo ao LLM quando chamá-la (quais enunciados do usuário devem acioná-la).
- `parameters_schema` — adicione o novo nome de ação (por exemplo, `"wave"`) ao `enum` de `action`.
- `__call__()` — passe a nova `action` para o comando de subprocesso `cmd = [LEROBOT_PYTHON, GRIPPER_SCRIPT, action]`.

Se você quiser controlar um dispositivo completamente diferente, também pode **criar um novo arquivo de ferramenta** nesse diretório (por exemplo, `arm_control.py`), igualmente herdando de `reachy_mini_conversation_app.tools.core_tools.Tool`; com `AUTOLOAD_EXTERNAL_TOOLS=1`, todos os arquivos de ferramenta válidos no diretório são carregados automaticamente. Observe que cada classe de ferramenta deve ter um `Tool.name` exclusivo.

## Solução de problemas

**Falha ao iniciar o backend: `Unknown scheme for proxy URL 'socks://...'`**

O app usa httpx, que não aceita o esquema `socks://` em `ALL_PROXY` (ele só reconhece `http(s)://`, `socks5://`, `socks5h://`). Se o seu shell (por exemplo, clash) definir `ALL_PROXY=socks://...`, desfaça essa variável na inicialização — manter `HTTPS_PROXY=http://...` é suficiente:

```bash
env -u ALL_PROXY -u all_proxy reachy-mini-conversation-app
```

Ou altere a variável de proxy para `socks5://127.0.0.1:port/` (httpx aceita essa forma; ela requer `socksio`, que já está instalado no ambiente).
