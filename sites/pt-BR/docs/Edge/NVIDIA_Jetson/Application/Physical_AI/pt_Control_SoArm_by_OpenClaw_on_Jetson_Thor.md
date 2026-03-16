---
description: Este wiki mostra como controlar o SO-Arm no Jetson Thor com OpenClaw e LeRobot.
title: Controlar o SO-Arm com OpenClaw no Jetson Thor
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.webp
slug: /ai_robotics_control_soarm_by_openclaw_on_jetson_thor
sku: 100060965 | 100046482
last_update:
  date: 03/09/2026
  author: youjiang
---

# Controlar o SO-Arm com OpenClaw no Jetson Thor

## Introdução

Este wiki explica como combinar OpenClaw e LeRobot no Jetson Thor para controlar um SO-Arm com um agente de IA local.

**NVIDIA Jetson AGX Thor** é uma plataforma de IA de borda de alto desempenho projetada para robótica e workloads de IA física, fornecendo forte capacidade de computação embarcada para percepção, planejamento e controle.

**SO-Arm** é uma plataforma de braço robótico open-source e de baixo custo (SO-ARM100/SO-ARM101) amplamente utilizada para experimentos de IA incorporada, teleoperação e desenvolvimento de tarefas de manipulação.

**OpenClaw** é um framework de agente de IA que pode orquestrar ferramentas e modelos locais. Neste projeto, o OpenClaw é usado como a interface de controle de alto nível, enquanto o LeRobot fornece a comunicação de baixo nível com os motores e utilitários de calibração para o SO-Arm.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.png" />
</div>

:::note
Neste guia, o OpenClaw lida com o planejamento do agente e a orquestração de tarefas, enquanto a execução do movimento do SO-Arm é feita pelo LeRobot.
:::

## Índice

1. [Preparação de Hardware](#preparação-de-hardware)
2. [Configuração do Sistema no Jetson Thor](#configuração-do-sistema-no-jetson-thor)
3. [Instalar Ollama e Executar um LLM Local](#instalar-ollama-e-executar-um-llm-local)
4. [Instalar OpenClaw no Jetson Thor](#instalar-openclaw-no-jetson-thor)
5. [Conectar e Calibrar o SO-Arm](#conectar-e-calibrar-o-so-arm)
6. [Executar Demonstração de Controle](#executar-demonstração-de-controle)
7. [Referências](#referências)

## Preparação de Hardware

### Lista de Dispositivos

- 1x Kit de Desenvolvimento NVIDIA® Jetson AGX Thor™
- 1x SO-ARM101 Braço de IA de Baixo Custo

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> Kit de Desenvolvimento NVIDIA® Jetson AGX Thor™ </th>
        <th> SO-ARM101 Braço de IA de Baixo Custo </th>
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
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM-101-Assembled-Kit-Pro-p-6691.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

### Fiação e Conexão

- Conecte a placa controladora do SO-Arm ao Thor via USB.
- Conecte o adaptador de energia DC correspondente à placa controladora do SO-Arm.
- Ligue o Thor e depois ligue a placa controladora do braço.

### Lista de Verificação ao Ligar

- O Thor inicializa normalmente e a rede está disponível.
- Os LEDs da placa controladora do SO-Arm estão acesos.
- O dispositivo serial aparece após a conexão USB.

```bash
ls /dev/ttyACM*
```

Se um nó serial for detectado na saída do terminal, a conexão de hardware está correta.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/check_serial.png" />
</div>

## Configuração do Sistema no Jetson Thor

### Atualizar Pacotes do Sistema

```bash
sudo apt update
sudo apt install -y nvidia-jetpack git curl ffmpeg python3-pip
python3 -m pip install -U pip
```

### Instalar Dependências Principais

Instale o Miniconda (recomendado):

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

Crie o ambiente LeRobot:

```bash
conda create -y -n lerobot python=3.12
conda activate lerobot
git clone https://github.com/huggingface/lerobot.git ~/lerobot
cd ~/lerobot
pip install -e . 
pip uninstall torch torchvision
pip install torch torchvision --index-url https://pypi.jetson-ai-lab.io
```

Instale o Pinocchio no ambiente LeRobot:

```bash
conda install pinocchio -c conda-forge
```

### Verificar CUDA e Dispositivos Periféricos

```bash
python -c "import torch; print(torch.cuda.is_available())"
lerobot-find-port
```

Resultado esperado:

- `torch.cuda.is_available()` imprime `True`
- portas seriais do braço são detectadas (por exemplo `/dev/ttyACM0`)

## Instalar Ollama e Executar um LLM Local

Instale o Ollama:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Baixe um modelo:

```bash
ollama pull qwen3-vl:9b
```

:::info
Este guia usa `qwen3-vl:9b` como exemplo. Você pode substituí-lo por outro modelo do Ollama com base nas suas limitações de desempenho e memória.
:::

## Instalar OpenClaw no Jetson Thor

### Instalar OpenClaw

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### Configurar Parâmetros de Runtime

Edite `~/.openclaw/openclaw.json` e defina o Ollama como o provedor de modelo padrão:

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
Opcional: você também pode usar diretamente o script fornecido pelo Ollama para configurar rapidamente o arquivo de configuração do OpenClaw.

`ollama launch openclaw --model qwen3.5`
:::

### Mais Configurações

Instale a skill de controle do SO-Arm:

- Baixe a [Skill soarm-control](https://clawhub.ai/yuyoujiang/soarm-control)
- Extraia-a para `~/.openclaw/workspace/skills`

Prepare o arquivo de descrição do robô:

- Baixe o [URDF do SO-ARM101](https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf)
- Mova-o para `~/.openclaw/workspace/skills/soarm-control/references`

Reinicie o gateway do OpenClaw:

```bash
openclaw gateway restart
```

Abra o WebUI:

```text
http://127.0.0.1:18789/
```

## Conectar e Calibrar o SO-Arm

### Permissão e Detecção da Porta Serial

```bash
conda activate lerobot
lerobot-find-port
sudo chmod 666 /dev/ttyACM*
```

### Calibração Inicial

Calibre o braço seguidor:

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=openclaw_soarm
```

Os arquivos de calibração são salvos em:

`~/.cache/huggingface/lerobot/calibration/`

:::note
Para um passo a passo completo de calibração, consulte:
[SO-Arm no LeRobot - Calibrate](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#calibrate)
:::

## Executar Demonstração de Controle

### Iniciar o Serviço OpenClaw

Certifique-se de que os ambientes OpenClaw e LeRobot estão prontos:

```bash
openclaw gateway restart
conda activate lerobot
```

### Executar Tarefa Básica de Movimento

No WebUI do OpenClaw, insira instruções de controle do robô. O OpenClaw irá analisar o seu prompt e chamar a skill `soarm-control` instalada para mover o braço até a posição alvo.

O vídeo demonstra três comandos:

1. Mover o efetuador final do braço robótico para cima 20 cm.
2. Em seguida mover 20 cm para frente, mantendo a altura inalterada.
3. Retornar à posição inicial.

As respostas do OpenClaw a esses três comandos correspondem totalmente ao comportamento esperado.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/5fPBpAno2wc" title="Using OpenClaw to Control the SOARM 101 Robot Arm | Robotics Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referências

- https://docs.openclaw.ai/
- https://wiki.seeedstudio.com/pt-br/local_openclaw_on_recomputer_jetson/
- https://unstabledemos.com/tutorials/openclaw-orin-nano/
- https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/
- https://github.com/huggingface/lerobot
- https://github.com/TheRobotStudio/SO-ARM100

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
