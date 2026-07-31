---
description: Controla la apertura/cierre de la pinza del SO-ARM con comandos de voz a través de la app de conversación de Reachy Mini, sin modificar el código fuente oficial, utilizando el mecanismo de herramientas externas.
title: Control por voz de Reachy Mini para SO-ARM
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
updatedAt: '2026-07-29'
url: https://wiki.seeedstudio.com/es/reachymini_development_cases_gripper_voice_control/
---
# Control por voz de Reachy Mini para SO-ARM

Este caso utiliza la app de conversación de Reachy Mini para abrir y cerrar la pinza del brazo seguidor SO-ARM con comandos de voz — **sin modificar el código fuente oficial**, usando el mecanismo de herramientas externas integrado en la app.

<div align="center">
  <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini-demo/reachymini-soarm.webp"
  />
</div>

## Cómo funciona

```text
Voice command
  → gripper_control external tool (LLM function calling)
  → subprocess runs the driver script: soarm_gripper.py open|close
  → lerobot SOFollower → /dev/ttyACM1 drives the SO-ARM gripper
```

Archivos añadidos por este fork:


| File                                                 | Purpose                                            |
| ---------------------------------------------------- | -------------------------------------------------- |
| `soarm_gripper.py`                                   | Gripper driver script (based on lerobot)           |
| `external_content/external_tools/gripper_control.py` | External tool exposed to the LLM                   |
| `.gitignore`                                         | Un-ignores the tool files so they can be committed |

## Requisitos previos

1. Reachy Mini está conectado (`/dev/ttyACM0`) y el daemon se está ejecutando.
2. El brazo seguidor SO-ARM está conectado. Esta guía asume que se enumera como `/dev/ttyACM1` — confírmalo con `ls /dev/ttyACM*`; si es diferente, actualiza `PORT` en `soarm_gripper.py`.
3. Se ha creado un entorno conda de `lerobot` con soporte para feetech:

   ```bash
   conda create -n lerobot python=3.10
   conda activate lerobot
   pip install lerobot[feetech]
   ```
4. Has calibrado el brazo una vez con lerobot (esto genera un archivo de calibración en `~/.cache/huggingface/lerobot/calibration/robots/so_follower/`). El script usa `ARM_ID = "my_awesome_follower_arm"`, que debe coincidir con el nombre de tu archivo de calibración.

## Instalar reachy_mini_conversation_app

> Nota: antes de instalar esta app, primero debes instalar el [Reachy Mini SDK](https://github.com/pollen-robotics/reachy_mini/).

Clona el repositorio del fork:

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

**(o) Usando uv**

```bash
# macOS (Homebrew)
uv venv --python /opt/homebrew/bin/python3.12 .venv

# Linux / Windows (Python on PATH)
uv venv --python python3.12 .venv

source .venv/bin/activate
uv sync
```

:::caution
Si instalas esta app en un entorno conda mientras `lerobot` está en otro entorno conda (ver Requisitos previos), establece `LEROBOT_PYTHON` en `.env` a la ruta de python del entorno de lerobot (por ejemplo `/home/ubuntu/miniconda3/envs/lerobot/bin/python`). No lo mezcles con el entorno de reachy_mini.
:::

## Configurar el control por voz de la pinza

Añade las dos líneas siguientes a `.env` en la raíz del repositorio (crea el archivo si no existe):

```bash
REACHY_MINI_EXTERNAL_TOOLS_DIRECTORY=external_content/external_tools
AUTOLOAD_EXTERNAL_TOOLS=1
```

Si tu ruta de python de lerobot es diferente, establece también:

```bash
LEROBOT_PYTHON=/path/to/lerobot/env/bin/python
```

## Ejecutar

**Debes iniciar la app desde la raíz del repositorio** para que `.env` y el directorio relativo de herramientas se resuelvan correctamente:

```bash
cd reachy_mini_conversation_app
reachy-mini-conversation-app
```

## Comandos de voz

- Abrir: "open the gripper" / "open the claw" / "release" / "let go"
- Cerrar: "close the gripper" / "close the claw" / "grab it" / "hold this"

## Pruebas manuales

Sin iniciar la app de conversación, verifica primero que el hardware y la calibración funcionan:

```bash
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py open
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py close
/home/ubuntu/miniconda3/envs/lerobot/bin/python soarm_gripper.py demo   # open and close twice
```

## Personalizar: controlar otras partes del brazo

Toda la cadena solo implica dos archivos — modifica el que se ajuste a tu necesidad:

### 1. Cambiar el movimiento en sí → `soarm_gripper.py` (raíz del repositorio)

Este es el script que realmente controla el brazo. Actualmente solo envía acciones de la pinza:

```python
robot.send_action({"gripper.pos": target})
```

Las claves de articulación disponibles para el seguidor SO-ARM son `shoulder_pan.pos`, `shoulder_lift.pos`, `elbow_flex.pos`, `wrist_flex.pos`, `wrist_roll.pos` y `gripper.pos` (normalizado 0–100). Para controlar otras partes, añade las articulaciones correspondientes al diccionario pasado a `send_action()`, por ejemplo:

```python
robot.send_action({
    "shoulder_pan.pos": 50.0,
    "elbow_flex.pos": 70.0,
    "gripper.pos": OPEN_POS,
})
```

También puedes añadir tus propias ramas de acción (por ejemplo, `wave`, `home`) en `main()`, siguiendo el patrón `open` / `close` / `demo`.

Parámetros de ajuste comunes en este archivo:

- `OPEN_POS` / `CLOSE_POS` — recorrido de la pinza, normalizado 0–100 (por defecto 60 / 20).
- `PORT` — dispositivo serie del brazo seguidor.
- `ARM_ID` — nombre del perfil de calibración.

### 2. Permitir que el LLM llame a la nueva acción → `external_content/external_tools/gripper_control.py`

Esta es la herramienta externa expuesta al LLM — determina qué acciones "sabe" el LLM que están disponibles. Al añadir una acción, actualiza esto de forma sincronizada:

- `description` — la descripción de la herramienta, indicando al LLM cuándo llamarla (qué expresiones del usuario deberían activarla).
- `parameters_schema` — añade el nuevo nombre de acción (por ejemplo `"wave"`) al `enum` de `action`.
- `__call__()` — pasa la nueva `action` al comando del subproceso `cmd = [LEROBOT_PYTHON, GRIPPER_SCRIPT, action]`.

Si quieres controlar un dispositivo completamente diferente, también puedes **crear un nuevo archivo de herramienta** en ese directorio (por ejemplo `arm_control.py`), heredando igualmente de `reachy_mini_conversation_app.tools.core_tools.Tool`; con `AUTOLOAD_EXTERNAL_TOOLS=1`, todos los archivos de herramientas válidos en el directorio se cargan automáticamente. Ten en cuenta que cada clase de herramienta debe tener un `Tool.name` único.

## Solución de problemas

**El backend no se inicia: `Unknown scheme for proxy URL 'socks://...'`**

La app usa httpx, que no acepta el esquema `socks://` en `ALL_PROXY` (solo reconoce `http(s)://`, `socks5://`, `socks5h://`). Si tu shell (por ejemplo clash) establece `ALL_PROXY=socks://...`, desactívalo al inicio — mantener `HTTPS_PROXY=http://...` es suficiente:

```bash
env -u ALL_PROXY -u all_proxy reachy-mini-conversation-app
```

O cambia la variable de proxy a `socks5://127.0.0.1:port/` (httpx acepta esta forma; requiere `socksio`, que ya está instalado en el entorno).
