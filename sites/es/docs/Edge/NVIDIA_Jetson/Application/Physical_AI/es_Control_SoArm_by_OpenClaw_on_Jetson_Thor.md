---
description: Este wiki muestra cómo controlar SO-Arm en Jetson Thor con OpenClaw y LeRobot.
title: Controlar SO-Arm con OpenClaw en Jetson Thor
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.webp
slug: /ai_robotics_control_soarm_by_openclaw_on_jetson_thor
sku: 100060965 | 100046482
last_update:
  date: 03/09/2026
  author: youjiang
---

# Controlar SO-Arm con OpenClaw en Jetson Thor

## Introducción

Este wiki explica cómo combinar OpenClaw y LeRobot en Jetson Thor para controlar un SO-Arm con un agente de IA local.

**NVIDIA Jetson AGX Thor** es una plataforma de IA de borde de alto rendimiento diseñada para robótica y cargas de trabajo de IA física, que proporciona una potente computación en el dispositivo para percepción, planificación y control.

**SO-Arm** es una plataforma de brazo robótico de código abierto y bajo costo (SO-ARM100/SO-ARM101) que se utiliza ampliamente para experimentos de IA encarnada, teleoperación y desarrollo de tareas de manipulación.

**OpenClaw** es un framework de agente de IA que puede orquestar herramientas y modelos locales. En este proyecto, OpenClaw se utiliza como la interfaz de control de alto nivel, mientras que LeRobot proporciona las utilidades de comunicación de motor de bajo nivel y calibración para SO-Arm.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.png" />
</div>

:::note
En esta guía, OpenClaw se encarga de la planificación del agente y la orquestación de tareas, mientras que la ejecución del movimiento de SO-Arm es manejada por LeRobot.
:::

## Tabla de contenidos

1. [Preparación de hardware](#preparación-de-hardware)
2. [Configuración del sistema en Jetson Thor](#configuración-del-sistema-en-jetson-thor)
3. [Instalar Ollama y ejecutar un LLM local](#instalar-ollama-y-ejecutar-un-llm-local)
4. [Instalar OpenClaw en Jetson Thor](#instalar-openclaw-en-jetson-thor)
5. [Conectar y calibrar SO-Arm](#conectar-y-calibrar-so-arm)
6. [Ejecutar demostración de control](#ejecutar-demostración-de-control)
7. [Referencias](#referencias)

## Preparación de hardware

### Lista de dispositivos

- 1x Kit de desarrollo NVIDIA® Jetson AGX Thor™
- 1x SO-ARM101 Brazo de IA de bajo costo

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> Kit de desarrollo NVIDIA® Jetson AGX Thor™ </th>
        <th> SO-ARM101 Brazo de IA de bajo costo </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100046482-so-arm-101-assembled-kit-pro.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM-101-Assembled-Kit-Pro-p-6691.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

### Cableado y conexión

- Conecta la placa controladora de SO-Arm a Thor mediante USB.
- Conecta el adaptador de alimentación de CC correspondiente a la placa controladora de SO-Arm.
- Enciende Thor y luego enciende la placa controladora del brazo.

### Lista de verificación de encendido

- Thor arranca con normalidad y la red está disponible.
- Los LED de la placa controladora de SO-Arm están encendidos.
- El dispositivo serie aparece después de la conexión USB.

```bash
ls /dev/ttyACM*
```

Si se detecta un nodo serie en la salida del terminal, la conexión de hardware es correcta.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/check_serial.png" />
</div>

## Configuración del sistema en Jetson Thor

### Actualizar paquetes del sistema

```bash
sudo apt update
sudo apt install -y nvidia-jetpack git curl ffmpeg python3-pip
python3 -m pip install -U pip
```

### Instalar dependencias principales

Instalar Miniconda (recomendado):

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/conda.png" />
</div>

Crear entorno LeRobot:

```bash
conda create -y -n lerobot python=3.12
conda activate lerobot
git clone https://github.com/huggingface/lerobot.git ~/lerobot
cd ~/lerobot
pip install -e . 
pip uninstall torch torchvision
pip install torch torchvision --index-url https://pypi.jetson-ai-lab.io
```

Instalar Pinocchio en el entorno LeRobot:

```bash
conda install pinocchio -c conda-forge
```

### Verificar CUDA y dispositivos periféricos

```bash
python -c "import torch; print(torch.cuda.is_available())"
lerobot-find-port
```

Resultado esperado:

- `torch.cuda.is_available()` imprime `True`
- Se detectan los puertos serie del brazo (por ejemplo `/dev/ttyACM0`)

## Instalar Ollama y ejecutar un LLM local

Instalar Ollama:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Descargar un modelo:

```bash
ollama pull qwen3-vl:9b
```

:::info
Esta guía utiliza `qwen3-vl:9b` como ejemplo. Puedes reemplazarlo por otro modelo de Ollama según tus restricciones de rendimiento y memoria.
:::

## Instalar OpenClaw en Jetson Thor

### Instalar OpenClaw

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### Configurar parámetros de ejecución

Edita `~/.openclaw/openclaw.json` y establece Ollama como el proveedor de modelo predeterminado:

```json
{
  "agents": {
    "defaults": {
      "models": {
        "ollama": {}
      },
      "model": {
        "primary": "ollama/qwen3-vl:9b"
      }
    }
  },
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3-vl:9b",
            "name": "Qwen3 VL 9B",
            "reasoning": false,
            "input": [
              "text"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  }
}
```

:::note
Opcional: también puedes usar directamente el script proporcionado por Ollama para configurar rápidamente el archivo de configuración de OpenClaw.

`ollama launch openclaw --model qwen3.5`
:::

### Más configuración

Instalar la skill de control de SO-Arm:

- Descarga [soarm-control Skill](https://clawhub.ai/yuyoujiang/soarm-control)
- Extráela en `~/.openclaw/workspace/skills`

Preparar archivo de descripción del robot:

- Descarga [SO-ARM101 URDF](https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf)
- Muévelo a `~/.openclaw/workspace/skills/soarm-control/references`

Reinicia la pasarela de OpenClaw:

```bash
openclaw gateway restart
```

Abrir WebUI:

```text
http://127.0.0.1:18789/
```

## Conectar y calibrar SO-Arm

### Permisos y detección del puerto serie

```bash
conda activate lerobot
lerobot-find-port
sudo chmod 666 /dev/ttyACM*
```

### Calibración inicial

Calibrar el brazo seguidor:

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=openclaw_soarm
```

Los archivos de calibración se guardan en:

`~/.cache/huggingface/lerobot/calibration/`

:::note
Para una guía completa de calibración, consulta:
[SO-Arm en LeRobot - Calibrate](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#calibrate)
:::

## Ejecutar demostración de control

### Iniciar servicio de OpenClaw

Asegúrate de que los entornos de OpenClaw y LeRobot estén listos:

```bash
openclaw gateway restart
conda activate lerobot
```

### Ejecutar tarea básica de movimiento

En OpenClaw WebUI, introduce instrucciones de control del robot. OpenClaw analizará tu prompt y llamará a la skill `soarm-control` instalada para mover el brazo a la posición objetivo.

El vídeo muestra tres comandos:

1. Mover el efector final del brazo robótico hacia arriba 20 cm.
2. Luego moverlo hacia adelante 20 cm, manteniendo la altura sin cambios.
3. Volver a la posición inicial.

Las respuestas de OpenClaw a estos tres comandos coinciden con el comportamiento esperado.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/5fPBpAno2wc" title="Using OpenClaw to Control the SOARM 101 Robot Arm | Robotics Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias

- https://docs.openclaw.ai/
- https://wiki.seeedstudio.com/es/local_openclaw_on_recomputer_jetson/
- https://unstabledemos.com/tutorials/openclaw-orin-nano/
- https://wiki.seeedstudio.com/es/lerobot_so100m_new/
- https://github.com/huggingface/lerobot
- https://github.com/TheRobotStudio/SO-ARM100

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
