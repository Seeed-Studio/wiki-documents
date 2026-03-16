---
description: 'ReSpeaker + OpenClaw: Localização Inteligente de Grupos Lark e Envio Interativo de Cartão de Reunião'
title: 'reSpeaker + OpenClaw: Localização Inteligente de Grupos Lark e Envio Interativo de Cartão de Reunião'
keywords:
  - reSpeaker_XVF3800_USB_4_Mic_Array
  - reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_openclaw
sku: 114993702,114993700
last_update:
  date: 2/10/2026
  author: Mingxi
createdAt: '2026-02-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf_3800_openclaw/
---

# ReSpeaker + OpenClaw: Localização Inteligente de Grupos Lark e Envio Interativo de Cartão de Reunião

> Quer dar capacidades de interação por voz ao seu robô? Experimente a série ReSpeaker da Seeed Studio! O objetivo deste projeto é integrar o reSpeaker XVF3800 USB 4-Mic Array com o OpenClaw, permitindo a operação de agentes de IA controlados por voz. Com o poderoso recurso de captura de áudio e redução de ruído do reSpeaker, combinado com a estrutura flexível de agentes de IA do OpenClaw, você pode criar facilmente um assistente inteligente controlado por voz capaz de entender e responder aos seus comandos. Esta demonstração mostra como usar o reSpeaker para controlar o Openclaw, permitindo que ele localize automaticamente grupos do Lark e envie cartões interativos de convite para reuniões.
> [Repositório do Código-Fonte do Projeto](https://github.com/DengMingXi777GZ/openclaw-feishu-InteractMeetingCard)
> [Código-Fonte dos Produtos reSpeaker](https://github.com/respeaker)
> [reSpeaker 4-Mic Array | Link de Compra na Seeed Studio](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2906.html)
>
> ![reSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)
>

## Demonstração de Resultado

Abaixo está uma demonstração da operação real deste projeto:

### Vídeo de Demonstração

<video src="https://files.seeedstudio.com/wiki/reSpeaker-openclaw/DemoVideo.mp4" controls width="100%"></video>

### Descrição da Demonstração de Funções

O vídeo demonstra um fluxo de trabalho completo de interação por voz:

1. **Ativação por voz** - Usando o array de microfones do reSpeaker para captura de voz.
2. **Reconhecimento de fala** - O modelo Whisper reconhece comandos de voz em tempo real.
3. **Extração de informações** - Analisa automaticamente o tópico, horário, local e participantes da reunião.
4. **Geração de cartão** - Cria um belo cartão interativo de reunião do Feishu.
5. **Envio com um clique** - O cartão é enviado para um grupo de chat Feishu especificado.
6. **Criação de evento de calendário** - Clique no botão do cartão para criar diretamente um evento no calendário do Feishu.

### Captura de Tela do Efeito Real

Após a execução bem-sucedida, o grupo Feishu receberá um cartão interativo como o seguinte:

![Demonstração do Efeito](https://files.seeedstudio.com/wiki/reSpeaker-openclaw/result.png)

---

## Contexto do Projeto

Durante o desenvolvimento de projetos de assistente de voz, percebi a necessidade de criar uma Skill capaz de enviar cartões interativos de reunião do Feishu. Diferente de mensagens de texto simples, cartões interativos exigem uma estrutura JSON específica e suporte da API do Feishu, o que me levou a aprofundar no mecanismo de desenvolvimento de Skills do OpenClaw.

Este projeto combina reconhecimento de fala, processamento de linguagem natural e a API do Feishu para implementar a função de criar e enviar automaticamente cartões interativos de convite de reunião para grupos Feishu por meio de **entrada de voz**.

## Função de Entrada por Voz

Este projeto oferece suporte à criação de cartões de reunião por comandos de voz. Abaixo está a solução completa de entrada por voz:

### Fluxo de Processamento da Entrada por Voz

```python
# Example voice input
"Schedule a meeting with Tom tomorrow at 3pm in Room 1"

# System parsing results:
{
    "topic": "Meeting",
    "date": "2024-01-15",
    "time": "15:00",
    "attendees": ["Tom"],
    "location": "Room 1",
    "duration": 60
}
```

### Configuração do Reconhecimento de Voz

#### 1. Requisitos de Hardware

- **reSpeaker 4-Mic Array** - array circular de 4 microfones
- 2GB+ de RAM
- Conexão com a Internet

#### 2. Instalar o Modelo de Reconhecimento de Fala

```bash
# Download Whisper model
mkdir -p ~/moltbot/asr_model_en
cd ~/moltbot/asr_model_en

# Download tiny.en model files
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-encoder.onnx
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-decoder.onnx
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-tokens.txt
```

#### 3. Exemplos de Comandos de Voz

**Comandos em Inglês:**

- `"Schedule a meeting with Tom tomorrow at 3pm"`
- `"Book a review meeting today at 2pm in Room 1"`
- `"Create a discussion next Monday at 10am"`

**Comandos em Chinês:**

- `"Tomorrow at 3pm, have a meeting with Tom"`
- `"Today at 2pm, create a review meeting in Room 1"`
- `"Next Monday 10am, create a discussion meeting"`

### Fluxo de Trabalho da Entrada por Voz

1. **Reconhecimento de fala** - Gravação de 5 segundos, reconhecimento pelo modelo Whisper.
2. **Análise de informações** - Extração de horário, pessoa, local, etc.
3. **Geração de cartão** - Criação de um cartão interativo de reunião do Feishu.
4. **Envio para o grupo** - Envio para o grupo Feishu configurado.
5. **Feedback de resultado** - Exibição do status de envio e do ID do cartão.

### Iniciar o Programa de Entrada por Voz

```bash
cd ~/feishu_card
python3 Demo.py
```

---

## Processo Completo de Desenvolvimento da Skill

### Etapa 1: Entender a Arquitetura de Skills do OpenClaw

O sistema de Skills do OpenClaw é baseado em um design modular. Cada Skill é um módulo Python independente que interage com o sistema central do OpenClaw por meio de interfaces específicas.

**Conceitos-chave:**

- **Diretório da Skill**: `~/.openclaw/skills/[skill_name]/`
- **Arquivo de entrada**: `__init__.py` ou um arquivo Python especificado.
- **Registro de ferramenta**: Registrada por meio do decorador `@tool`.
- **Arquivo de configuração**: `SKILL.md` fornece instruções de uso.

### Etapa 2: Criar a Estrutura Básica da Skill

#### 1. Criar o Diretório da Skill

```bash
mkdir -p ~/.openclaw/skills/feishu_meeting
cd ~/.openclaw/skills/feishu_meeting
```

#### 2. Criar os Arquivos Centrais

```bash
touch __init__.py
touch send_meeting_card.py
touch SKILL.md
```

### Etapa 3: Escrever o Código da Função Principal

#### 1. Arquivo da Função Principal: `send_meeting_card.py`

```python
#!/usr/bin/env python3
"""
Feishu Meeting Card Sending Module
Used for OpenClaw Skill system to create and send interactive meeting invitation cards
"""

import json
import sys
from datetime import datetime, timedelta
from typing import Dict, Any, Optional

def create_meeting_card(params: Dict[str, Any]) -> Dict[str, Any]:
    """Create Feishu interactive meeting card"""

    # Parameter extraction and default value processing
    topic = params.get("topic", "Meeting")
    date = params.get("date", datetime.now().strftime("%Y-%m-%d"))
    time = params.get("time", "15:00")
    attendees = params.get("attendees", [])
    location = params.get("location", "TBD")
    duration = params.get("duration", 60)

    # Construct attendees string
    attendees_str = ", ".join(attendees) if attendees else "TBD"

    # Create Feishu interactive card structure
    card_content = {
        "msg_type": "interactive",
        "card": {
            "config": {
                "wide_screen_mode": True,
                "enable_forward": True
            },
            "header": {
                "title": {
                    "tag": "plain_text",
                    "content": f"📅 {topic}"
                },
                "template": "blue"  # Blue theme
            },
            "elements": [
                {
                    "tag": "div",
                    "text": {
                        "tag": "lark_md",
                        "content": f"**🕐 Time:** {date} {time}"
                    }
                },
                {
                    "tag": "div",
                    "text": {
                        "tag": "lark_md",
                        "content": f"**👥 Attendees:** {attendees_str}"
                    }
                },
                {
                    "tag": "div",
                    "text": {
                        "tag": "lark_md",
                        "content": f"**📍 Location:** {location}"
                    }
                },
                {
                    "tag": "hr"  # Separator line
                },
                {
                    "tag": "action",
                    "actions": [
                        {
                            "tag": "button",
                            "text": {
                                "tag": "plain_text",
                                "content": "Create Calendar"
                            },
                            "type": "primary",
                            "value": {
                                "action": "create_calendar_event",
                                "meeting_data": {
                                    "topic": topic,
                                    "date": date,
                                    "time": time,
                                    "duration": duration,
                                    "attendees": attendees,
                                    "location": location
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }

    return card_content

def send_meeting_card(params: Dict[str, Any]) -> Dict[str, Any]:
    """Send meeting card to Feishu group"""

    try:
        # Create card content
        card_content = create_meeting_card(params)

        # Get group ID (can be specified in params or use default)
        group_chat_id = params.get("group_chat_id", "oc_837f7a564514f")

        # Send using OpenClaw message tool
        result = send_feishu_message(group_chat_id, card_content)

        if result.get("success"):
            return {
                "success": True,
                "message_id": result.get("message_id"),
                "group": params.get("group_name", "Group")
            }
        else:
            return {
                "success": False,
                "error": result.get("error", "Failed to send")
            }

    except Exception as e:
        return {
            "success": False,
            "error": f"Send exception: {str(e)}"
        }

def send_feishu_message(target: str, content: Dict[str, Any]) -> Dict[str, Any]:
    """Send Feishu message through OpenClaw"""
    try:
        # Import OpenClaw message tool
        from tools import message

        # Send message
        response = message.send(
            channel="feishu",
            target=target,
            message=json.dumps(content, ensure_ascii=False)
        )

        return {"success": True, "message_id": response.get("message_id")}

    except ImportError:
        # Standby plan if running independently
        import subprocess
        import json

        try:
            cmd = [
                "openclaw", "message", "send",
                "--channel", "feishu",
                "--target", target,
                "--message", json.dumps(content, ensure_ascii=False)
            ]

            result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)

            if result.returncode == 0:
                return {"success": True, "message_id": "sent_via_cli"}
            else:
                return {"success": False, "error": result.stderr}

        except Exception as e:
            return {"success": False, "error": str(e)}
    except Exception as e:
        return {"success": False, "error": str(e)}

def main():
    """Main function - supports command line calls"""
    if len(sys.argv) > 1:
        if sys.argv[1] == "--help":
            print("Usage: python3 send_meeting_card.py '{\"topic\": \"Meeting\", \"time\": \"15:00\"}'")
            return

        try:
            params = json.loads(sys.argv[1])
        except json.JSONDecodeError:
            print("Error: Invalid JSON format")
            return
    else:
        # Default test data
        params = {
            "topic": "Project Review Meeting",
            "date": "2024-01-15",
            "time": "15:00",
            "attendees": ["Zhang San", "Li Si"],
            "location": "Meeting Room A"
        }

    result = send_meeting_card(params)
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
```

#### 2. Arquivo de Inicialização: `__init__.py`

```python
"""
Feishu Meeting Skill - Feishu Meeting Card Skill
"""

from .send_meeting_card import send_meeting_card, create_meeting_card

# Export main functions
__all__ = ['send_meeting_card', 'create_meeting_card']
```

#### 3. Arquivo de Documentação: `SKILL.md`

```markdown
# Feishu Meeting Skill

**MANDATORY TOOL FOR MEETING SCHEDULING**
When user wants to schedule/create/arrange a meeting, you MUST use this tool.
This tool creates professional interactive meeting cards with calendar buttons.
Do NOT use the generic "message" tool - it cannot create interactive cards.

## Features

This Skill is dedicated to creating and sending Feishu interactive meeting invitation cards, supporting:
- 📅 Interactive meeting cards
- 🔗 One-click calendar creation button
- 👥 Attendee management
- 📍 Location setting
- ⏰ Time reminders

## Usage

### Basic Usage
```python
from tools import feishu_meeting

# Criar reunião
feishu_meeting.create(
    topic="Reunião de Revisão do Projeto",
    date="2024-01-15",
    time="15:00",
    attendees=["Zhang San", "Li Si"],
    location="Sala de Reunião A",
    duration=60,
    group_name="Equipe do Projeto"
)
```

### Parameter Description

- `topic`: Meeting topic
- `date`: Meeting date (YYYY-MM-DD)
- `time`: Meeting time (HH:MM)
- `attendees`: List of attendees
- `location`: Meeting location
- `duration`: Meeting duration (minutes)
- `group_name`: Group name

### Command Line Usage

```bash
python3 send_meeting_card.py '{"topic": "Weekly Meeting", "time": "14:00"}'
```

```

### Etapa 4: Integrar ao Sistema OpenClaw

#### A Solução Mais Importante: Deixar o OpenClaw depurar a si mesmo
Estamos usando uma IA. Em meus experimentos, encontrei situações em que eu tinha escrito Skills, mas o OpenClaw não as reconhecia. Mais tarde, deixei o OpenClaw se depurar sozinho, e ele realizou algumas operações de caixa-preta para concluir automaticamente o reconhecimento. Esse método continuou eficaz em meus projetos posteriores.

```bash
# Open the OpenClaw dashboard for self-debugging, tell OpenClaw where your completed skills are, and let it perform registration and configuration.
openclaw dashboard
```

#### 1. Registro da Ferramenta

Para permitir que o OpenClaw reconheça esta Skill, ela precisa ser registrada no arquivo de configuração apropriado. Normalmente, o OpenClaw irá escanear automaticamente o diretório `~/.openclaw/skills/` em busca de Skills.

#### 2. Configurar Informações de Autenticação

Certifique-se de que as informações de autenticação do aplicativo Feishu estejam configuradas no OpenClaw:

```json
// ~/.openclaw/agents/main/agent/auth-profiles.json
{
  "feishu": {
    "appId": "cli_xxxxxxxx",
    "appSecret": "xxxxxxxxxx",
    "verificationToken": "xxxxxxxxxx",
    "encryptKey": "xxxxxxxxxx"
  }
}
```

#### 3. Testar Funcionalidade da Skill

```bash
# Enter Skill directory
cd ~/.openclaw/skills/feishu_meeting

# Test basic functionality
python3 send_meeting_card.py

# Test with parameters
python3 send_meeting_card.py '{"topic": "Test Meeting", "time": "16:00", "attendees": ["Test User"]}'
```

### Etapa 5: Usar a Skill no OpenClaw

#### 1. Chamada via Agente

Quando um usuário diz: "Agende uma reunião", o OpenClaw deve invocar automaticamente esta Skill:

```python
# In Agent's processing logic
from tools import feishu_meeting

# Parse user intent and call Skill
feishu_meeting.create(
    topic=extracted_topic,
    date=extracted_date,
    time=extracted_time,
    attendees=extracted_attendees,
    location=extracted_location
)
```

#### 2. Chamada Direta pela Linha de Comando

```bash
openclaw message send --channel feishu --target [group_id] --message '[Card Content]'
```

## Pontos Técnicos-Chave

### 1. Formato do Card Feishu

Os cards interativos do Feishu exigem uma estrutura JSON específica:

- `msg_type`: Deve ser "interactive"
- `card`: Contém a definição completa do card
- `elements`: Define vários componentes do card
- `actions`: Define botões interativos

### 2. Mecanismo de Tratamento de Erros

```python
try:
    # Main logic
    result = send_feishu_message(target, card_content)
    if result.get("success"):
        return {"success": True, "message_id": result["message_id"]}
    else:
        return {"success": False, "error": result.get("error")}
except Exception as e:
    return {"success": False, "error": f"Exception: {str(e)}"}
```

### 3. Considerações de Compatibilidade

- **Modo de Integração com OpenClaw**: Via `from tools import message`
- **Modo de Execução Independente**: Chamando comandos do openclaw via subprocess
- **Modo Linha de Comando**: Processando diretamente parâmetros JSON

## Depuração e Solução de Problemas

### 1. Dicas de Depuração

```bash
# Enable debug mode
export OPENCLAW_DEBUG=1

# View logs
tail -f ~/.openclaw/logs/gateway.log

# Manually test card JSON
python3 -c "import json; print(json.dumps(card_content, indent=2))"
```

### 2. Etapas de Verificação

1. **Verificação de Reconhecimento da Skill**

   ```bash
   openclaw skills list
   ```

2. **Verificação de Autenticação**

   ```bash
   # Test Feishu API connection
   python3 -c "from tools import message; print('OK')"
   ```

3. **Verificação de Funcionalidade**

   ```bash
   # Test card creation
   python3 send_meeting_card.py
   ```

---

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nosso produto! Fornecemos vários canais de comunicação para garantir que você tenha uma experiência de produto tranquila.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
