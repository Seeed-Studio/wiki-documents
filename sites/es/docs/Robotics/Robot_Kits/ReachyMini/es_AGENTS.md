---
description: Guía de desarrollo integral para agentes de IA que ayuden a los usuarios a crear aplicaciones para Reachy Mini, que cubre lo esencial del SDK, REST API, compatibilidad de plataformas y buenas prácticas.
title: Guía de Desarrollo de Reachy Mini para Agentes de IA
slug: /reachymini_agents
keywords:
  - ai agents
  - development guide
  - sdk
  - rest api
  - platform compatibility
  - app development
  - best practices
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reachymini_agents/
---

# Guía de Desarrollo de Reachy Mini para Agentes de IA

Esta guía ayuda a los agentes de IA a asistir a los usuarios en el desarrollo de aplicaciones para Reachy Mini.

---

## Comportamiento del Agente

### PRIMERO: Comprobar si existe agents.local.md

**Antes de hacer cualquier otra cosa**, busca `agents.local.md` en el directorio actual:

```
IF agents.local.md exists:
    Read it immediately
    It contains user configuration and session context
ELSE:
    → Run skills/setup-environment.md to set up the environment
```

Este archivo almacena el tipo de robot del usuario, sus preferencias y el estado de la configuración. Revísalo siempre primero.

### Sé un Profesor

A menos que el usuario pida explícitamente lo contrario:
- Explica los conceptos a medida que avanzas
- Anima a hacer preguntas ("Let me know if you'd like more detail on any of this")
- Guía a los usuarios no técnicos paso a paso
- No des por sentado ningún conocimiento previo

### Crea Siempre Apps en Python

Al crear aplicaciones:
- **Usa siempre Python**: las apps en Python se pueden descubrir y compartir a través de la tienda de apps del robot
- **NUNCA crees carpetas de apps manualmente**: usa siempre el asistente de apps (gestiona metadatos, puntos de entrada, estructura)
- **Si el comando falla**: pide al usuario que lo ejecute en su terminal; no intentes soluciones alternativas complejas
- **Las interfaces web van en `static/`**: las apps en Python pueden tener frontends web

```bash
# Default template (minimal app - good for most cases):
reachy-mini-app-assistant create <app_name> <path> --publish

# Conversation template (for LLM integration, speech, making robot talk):
reachy-mini-app-assistant create --template conversation <app_name> <path> --publish
```

Consulta `skills/create-app.md` para más detalles. Las apps solo en JS aún no son compatibles con el sistema de descubrimiento/compartición.

### Crea Siempre plan.md Antes de Programar

Antes de implementar cualquier app:
1. Crea `plan.md` en el directorio de la app
2. Escribe tu comprensión de lo que quiere el usuario
3. Enumera tu enfoque técnico
4. Formula preguntas de aclaración y proporciona campos de respuesta dentro de `plan.md`
5. Espera las respuestas antes de programar

### Mantén Notas en agents.local.md

Usa `agents.local.md` para almacenar:
- Tipo de robot del usuario (Lite/Wireless)
- Preferencias de entorno
- Contexto útil para futuras sesiones
- Mantén todo conciso

---

## Conceptos Básicos del Robot

**Reachy Mini** es un pequeño robot expresivo:

| Componente | Descripción |
|-----------|-------------|
| **Cabeza** | 6 GDL: x, y, z, alabeo, cabeceo, guiñada (mediante plataforma Stewart) |
| **Cuerpo** | Rotación alrededor del eje vertical |
| **Antenas** | 2 motores, también utilizables como botones físicos |

**Variantes de hardware:**
- **Lite**: conexión USB a un portátil (potencia de cómputo completa)
- **Wireless**: CM4 integrado, se conecta vía WiFi (cómputo limitado)

---

## Elementos Esenciales del SDK

### Conexión

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

### Dos Métodos de Movimiento

| Método | Úsalo cuando |
|--------|--------------|
| `goto_target()` | **Por defecto**: interpolación suave para gestos que duren al menos 0,5 s cada uno |
| `set_target()` | Bucles de control en tiempo real (p. ej. seguimiento) a 10 Hz o más |

### Ejemplo Básico

Consulta y ejecuta `examples/minimal_demo.py`: demuestra conexión, movimiento de la cabeza y control de antenas.

### Antes de Escribir Código

- Lee `docs/source/SDK/python-sdk.md` para una visión general del API
- Revisa por encima `src/reachy_mini/reachy_mini.py` para ver firmas de métodos y docstrings
- Comprueba `examples/` para ver patrones de código ejecutable

---

## REST API

El daemon expone una API HTTP/WebSocket en `http://{daemon-ip}:8000/api`.

- **Lite**: `localhost:8000` (el daemon se ejecuta en tu máquina)
- **Wireless**: `reachy-mini.local:8000` o la dirección IP del robot

**Usa REST API para:** interfaces web, clientes que no sean Python, control remoto, integración de IA/LLM vía HTTP. => Nota: para que la app sea detectable, por ahora debe ser una app en Python; esto cambiará en una versión futura.

**Documentación interactiva:** `http://{daemon-ip}:8000/docs` (cuando el daemon está en ejecución)

Consulta `skills/rest-api.md` para más detalles.

---

## Compatibilidad de Plataformas

| Configuración | Cómputo | Cámara | Notas |
|-------|---------|--------|-------|
| **Lite** | Completo (portátil) | USB directa | La más flexible, la mejor para desarrollo |
| **Wireless (local)** | Limitado (CM4) | Directa | Memoria/CPU limitadas |
| **Wireless (streamed)** | Completo (portátil) | Vía red | Algo de pérdida de calidad en el seguimiento |
| **Simulación** | Completo | N/D | No se pueden probar funciones de cámara |

---

## Límites de Seguridad

| Articulación | Rango |
|-------|-------|
| Cabeza cabeceo/alabeo | [-40, +40] grados |
| Cabeza guiñada | [-180, +180] grados |
| Cuerpo guiñada | [-160, +160] grados |
| Delta de guiñada (cabeza - cuerpo) | Máx. 65° de diferencia |

Colisiones suaves con el cuerpo son seguras. El SDK limita automáticamente los valores.

Para sistemas de coordenadas y detalles de arquitectura, consulta `docs/source/SDK/core-concept.md`.

---

## Apps de Ejemplo

| App | Patrones clave | Código fuente |
|-----|--------------|--------|
| **reachy_mini_conversation_app** | Integración de IA, bucles de control, herramientas LLM | [GitHub](https://github.com/pollen-robotics/reachy_mini_conversation_app) |
| **marionette** | Grabación de movimiento, torque seguro, dataset en HF | [HF Space](https://huggingface.co/spaces/RemiFabre/marionette) |
| **fire_nation_attacked** | Cabeza como controlador, tablas de clasificación, juegos | [HF Space](https://huggingface.co/spaces/RemiFabre/fire_nation_attacked) |
| **spaceship_game** | Cabeza como joystick, botones de antena | [HF Space](https://huggingface.co/spaces/apirrone/spaceship_game) |
| **reachy_mini_radio** | Patrón de interacción con antenas | [HF Space](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio) |
| **reachy_mini_simon** | Patrón sin GUI (antena para iniciar) | [HF Space](https://huggingface.co/spaces/apirrone/reachy_mini_simon) |
| **hand_tracker_v2** | Bucle de control basado en cámara | [HF Space](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2) |
| **reachy_mini_dances_library** | Definición simbólica de movimiento | [GitHub](https://github.com/pollen-robotics/reachy_mini_dances_library) |

---

## Documentación

La documentación completa del SDK está en `docs/source/`:

| Tema | Archivo |
|-------|------|
| Inicio rápido | `docs/source/SDK/quickstart.md` |
| Python SDK | `docs/source/SDK/python-sdk.md` |
| Conceptos clave | `docs/source/SDK/core-concept.md` |
| Integración de IA | `docs/source/SDK/integration.md` |
| Resolución de problemas | `docs/source/troubleshooting.md` |

Para guías específicas de plataforma (Lite, Wireless, Simulación), consulta `docs/source/platforms/`.

---

## Referencia de Skills

Lee estos archivos en `skills/` cuando necesites conocimiento detallado:

| Skill | Cuándo usarla |
|-------|-------------|
| **setup-environment.md** | Primera sesión, no existe `agents.local.md` |
| **create-app.md** | Crear una nueva app con `reachy-mini-app-assistant` |
| **control-loops.md** | Crear apps reactivas en tiempo real (seguimiento, juegos) |
| **motion-philosophy.md** | Elegir entre `goto_target` y `set_target` |
| **safe-torque.md** | Activar/desactivar motores sin movimientos bruscos |
| **ai-integration.md** | Crear apps potenciadas por LLM |
| **symbolic-motion.md** | Definir movimiento matemáticamente (bailes, ritmos) |
| **interaction-patterns.md** | Usar antenas como botones, cabeza como controlador |
| **debugging.md** | Caídas de la app, problemas de conectividad, comprobaciones básicas |
| **testing-apps.md** | Probar antes de entregar (simulación vs físico) |
| **rest-api.md** | HTTP/WebSocket API para clientes que no sean Python |
| **deep-dive-docs.md** | Cuándo leer la documentación completa del SDK |

---

## Referencia Rápida

**Nombres de motores:** `body_rotation`, `stewart_1-6`, `right_antenna`, `left_antenna`

**Métodos de interpolación:** `linear`, `minjerk` (por defecto), `ease_in_out`, `cartoon`

**Biblioteca de emociones:**
```python
from reachy_mini.motion.recorded_move import RecordedMoves
moves = RecordedMoves("pollen-robotics/reachy-mini-emotions-library")
mini.play_move(moves.get("happy"), initial_goto_duration=1.0)
```

---

## Comunidad

- **Guía de apps**: https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps
- **Código fuente**: https://github.com/pollen-robotics/reachy_mini
- **Apps de la comunidad**: https://huggingface.co/spaces?q=reachy_mini
- **Discord**: https://discord.gg/Y7FgMqHsub
