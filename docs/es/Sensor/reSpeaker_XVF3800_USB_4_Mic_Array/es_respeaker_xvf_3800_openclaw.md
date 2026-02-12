---
description: "ReSpeaker + OpenClaw: Localización Inteligente de Grupos Lark y Envío de Tarjetas de Reunión Interactivas"
title: "ReSpeaker + OpenClaw: Localización Inteligente de Grupos Lark y Envío de Tarjetas de Reunión Interactivas"
keywords:
- reSpeaker_XVF3800_USB_4_Mic_Array
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /es/respeaker_xvf_3800_openclaw
sku: 114993702,114993700
last_update:
  date: 2/10/2026
  author: Mingxi
---

# ReSpeaker + OpenClaw: Localización Inteligente de Grupos Lark y Envío de Tarjetas de Reunión Interactivas

> ¿Quieres darle capacidades de interacción por voz a tu robot? ¡Prueba la serie ReSpeaker de Seeed Studio! El objetivo de este proyecto es integrar el reSpeaker XVF3800 USB 4-Mic Array con OpenClaw, habilitando la operación de agentes de IA controlados por voz. Con las poderosas capacidades de captura de audio y reducción de ruido de reSpeaker, combinadas con el marco flexible de agentes de IA de OpenClaw, puedes crear fácilmente un asistente inteligente controlado por voz que puede entender y responder a tus comandos. Esta demostración muestra cómo usar reSpeaker para controlar Openclaw, permitiéndole localizar automáticamente grupos Lark y enviar tarjetas de invitación de reunión interactivas.
> [Repositorio de Código Fuente del Proyecto](https://github.com/DengMingXi777GZ/openclaw-feishu-InteractMeetingCard)
> [Código Fuente del Producto reSpeaker](https://github.com/respeaker)
> [reSpeaker 4-Mic Array | Enlace de Compra Seeed Studio](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2906.html)
> 
> ![reSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)
>

## Demostración de Resultados

A continuación se muestra una demostración de la operación real de este proyecto:

### Video de Demostración

<video src="https://files.seeedstudio.com/wiki/reSpeaker-openclaw/DemoVideo.mp4" controls width="100%"></video>


### Descripción de la Demostración de Funciones

El video demuestra un flujo de trabajo completo de interacción por voz:

1. **Activación por Voz** - Usando el arreglo de micrófonos reSpeaker para captura de voz.
2. **Reconocimiento de Voz** - El modelo Whisper reconoce comandos de voz en tiempo real.
3. **Extracción de Información** - Analiza automáticamente el tema de la reunión, hora, ubicación y participantes.
4. **Generación de Tarjeta** - Crea una hermosa tarjeta de reunión interactiva de Feishu.
5. **Envío con Un Clic** - La tarjeta se envía a un chat de grupo Feishu especificado.
6. **Creación de Evento de Calendario** - Haz clic en el botón de la tarjeta para crear directamente un evento en el calendario de Feishu.

### Captura de Pantalla del Efecto Real

Después de la ejecución exitosa, el grupo Feishu recibirá una tarjeta interactiva como la siguiente:

![Demostración de Efecto](https://files.seeedstudio.com/wiki/reSpeaker-openclaw/result.png)


---

## Antecedentes del Proyecto

Mientras desarrollaba proyectos de asistente de voz, encontré la necesidad de crear una Skill capaz de enviar tarjetas de reunión interactivas de Feishu. A diferencia de los mensajes de texto plano, las tarjetas interactivas requieren una estructura JSON específica y soporte de la API de Feishu, lo que me motivó a profundizar en el mecanismo de desarrollo de Skills de OpenClaw.

Este proyecto combina reconocimiento de voz, procesamiento de lenguaje natural y la API de Feishu para implementar la función de crear y enviar automáticamente tarjetas de invitación de reunión interactivas a grupos Feishu mediante **entrada de voz**.

## Función de Entrada de Voz

Este proyecto soporta la creación de tarjetas de reunión mediante comandos de voz. A continuación se presenta la solución completa de entrada de voz:

### Flujo de Trabajo de Procesamiento de Entrada de Voz

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

### Configuración de Reconocimiento de Voz

#### 1. Requisitos de Hardware
- **reSpeaker 4-Mic Array** - Arreglo circular de 4 micrófonos
- 2GB+ RAM
- Conexión a Internet

#### 2. Instalar Modelo de Reconocimiento de Voz

```bash
# Download Whisper model
mkdir -p ~/moltbot/asr_model_en
cd ~/moltbot/asr_model_en

# Download tiny.en model files
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-encoder.onnx
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-decoder.onnx
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/tiny.en-tokens.txt
```

#### 3. Ejemplos de Comandos de Voz

**Comandos en Inglés:**
- `"Schedule a meeting with Tom tomorrow at 3pm"`
- `"Book a review meeting today at 2pm in Room 1"`
- `"Create a discussion next Monday at 10am"`

**Comandos en Chino:**
- `"Tomorrow at 3pm, have a meeting with Tom"`
- `"Today at 2pm, create a review meeting in Room 1"`
- `"Next Monday 10am, create a discussion meeting"`

### Flujo de Trabajo de Entrada de Voz

1. **Reconocimiento de Voz** - Grabación de 5 segundos, reconocimiento del modelo Whisper.
2. **Análisis de Información** - Extrayendo hora, persona, ubicación, etc.
3. **Generación de Tarjeta** - Creando una tarjeta de reunión interactiva de Feishu.
4. **Envío a Grupo** - Enviando al grupo Feishu configurado.
5. **Retroalimentación de Resultado** - Mostrando estado de envío e ID de Tarjeta.

### Iniciar Programa de Entrada de Voz

```bash
cd ~/feishu_card
python3 Demo.py
```

---

## Proceso Completo de Desarrollo de Skill

### Paso 1: Entender la Arquitectura de Skill de OpenClaw

El sistema de Skills de OpenClaw está basado en un diseño modular. Cada Skill es un módulo Python independiente que interactúa con el sistema central de OpenClaw a través de interfaces específicas.

**Conceptos Clave:**
- **Directorio de Skill**: `~/.openclaw/skills/[skill_name]/`
- **Archivo de Entrada**: `__init__.py` o un archivo Python especificado.
- **Registro de Herramienta**: Registrado mediante el decorador `@tool`.
- **Archivo de Configuración**: `SKILL.md` proporciona instrucciones de uso.

### Paso 2: Crear Estructura Básica de Skill

#### 1. Crear Directorio de Skill
```bash
mkdir -p ~/.openclaw/skills/feishu_meeting
cd ~/.openclaw/skills/feishu_meeting
```

#### 2. Crear Archivos Principales
```bash
touch __init__.py
touch send_meeting_card.py
touch SKILL.md
```

### Paso 3: Escribir Código de Función Principal

#### 1. Archivo de Función Principal: `send_meeting_card.py`

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

#### 2. Archivo de Inicialización: `__init__.py`

```python
"""
Feishu Meeting Skill - Feishu Meeting Card Skill
"""

from .send_meeting_card import send_meeting_card, create_meeting_card

# Export main functions
__all__ = ['send_meeting_card', 'create_meeting_card']
```

#### 3. Archivo de Documentación: `SKILL.md`

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

# Create meeting
feishu_meeting.create(
    topic="Project Review Meeting",
    date="2024-01-15",
    time="15:00",
    attendees=["Zhang San", "Li Si"],
    location="Meeting Room A",
    duration=60,
    group_name="Project Team"
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

### Paso 4: Integrar en el Sistema OpenClaw

#### La Solución Más Importante: Dejar que OpenClaw se depure a sí mismo
Estamos usando una IA. En mis experimentos, encontré situaciones donde había escrito habilidades pero OpenClaw no las reconocía. Más tarde, dejé que OpenClaw se depurara a sí mismo, y realizó algunas operaciones de caja negra para completar automáticamente el reconocimiento. Este método ha seguido siendo efectivo en mis proyectos posteriores.

```bash
# Open the OpenClaw dashboard for self-debugging, tell OpenClaw where your completed skills are, and let it perform registration and configuration.
openclaw dashboard
```


#### 1. Registro de Herramientas

Para que OpenClaw reconozca esta Habilidad, necesita ser registrada en el archivo de configuración apropiado. Usualmente, OpenClaw escaneará automáticamente el directorio `~/.openclaw/skills/` en busca de Habilidades.

#### 2. Configurar Información de Autenticación

Asegúrate de que la información de autenticación de la aplicación Feishu esté configurada en OpenClaw:

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

#### 3. Probar Funcionalidad de la Habilidad

```bash
# Enter Skill directory
cd ~/.openclaw/skills/feishu_meeting

# Test basic functionality
python3 send_meeting_card.py

# Test with parameters
python3 send_meeting_card.py '{"topic": "Test Meeting", "time": "16:00", "attendees": ["Test User"]}'
```

### Paso 5: Usar la Habilidad en OpenClaw

#### 1. Llamada a través del Agente

Cuando un usuario dice: "Programar una reunión", OpenClaw debería invocar automáticamente esta Habilidad:

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

#### 2. Llamada Directa por Línea de Comandos

```bash
openclaw message send --channel feishu --target [group_id] --message '[Card Content]'
```

## Puntos Técnicos Clave

### 1. Formato de Tarjeta Feishu

Las tarjetas interactivas de Feishu requieren una estructura JSON específica:
- `msg_type`: Debe ser "interactive"
- `card`: Contiene la definición completa de la tarjeta
- `elements`: Define varios componentes de la tarjeta
- `actions`: Define botones interactivos

### 2. Mecanismo de Manejo de Errores

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

### 3. Consideraciones de Compatibilidad

- **Modo de Integración OpenClaw**: A través de `from tools import message`
- **Modo de Ejecución Independiente**: Llamando comandos openclaw a través de subprocess
- **Modo de Línea de Comandos**: Procesando directamente parámetros JSON

## Depuración y Solución de Problemas

### 1. Consejos de Depuración

```bash
# Enable debug mode
export OPENCLAW_DEBUG=1

# View logs
tail -f ~/.openclaw/logs/gateway.log

# Manually test card JSON
python3 -c "import json; print(json.dumps(card_content, indent=2))"
```

### 2. Pasos de Verificación

1. **Verificación de Reconocimiento de Habilidad**
   ```bash
   openclaw skills list
   ```

2. **Verificación de Autenticación**
   ```bash
   # Test Feishu API connection
   python3 -c "from tools import message; print('OK')"
   ```

3. **Verificación de Función**
   ```bash
   # Test card creation
   python3 send_meeting_card.py
   ```

---

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestro producto! Proporcionamos múltiples canales de comunicación para asegurar que tengas una experiencia fluida con el producto.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
