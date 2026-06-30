---
description: Guía completa para crear y publicar apps de Reachy Mini, que cubre creación de apps, pruebas, depuración y publicación en Hugging Face Spaces.
title: Creación y publicación de apps
slug: /reachymini_sdk_apps
keywords:
  - apps
  - creación
  - publicación
  - apps de python
  - hugging face spaces
  - ReachyMiniApp
  - asistente de apps
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_apps/
---

# Creación y publicación de apps

Reachy Mini tiene un ecosistema de apps impulsado por Hugging Face Spaces. Puedes crear apps en Python, publicarlas y cualquier propietario de Reachy Mini puede instalarlas con un solo clic desde el panel.


<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: "1px solid #ddd", borderRadius: "8px"}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

> Para un tutorial paso a paso con capturas de pantalla, consulta la entrada del blog: [Make and Publish Your Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps).

---

## Uso de agentes de IA

Si utilizas un agente de programación con IA (Claude Code, Cursor, Copilot, etc.), puede crear apps por ti. Indícale el archivo [AGENTS.md](https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md) del proyecto:

> *Me gustaría crear una app para Reachy Mini. Empieza leyendo https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

El repositorio incluye un directorio `skills/` con guías detalladas que los agentes de IA usan para crear apps correctamente:

| Skill | Qué cubre |
|-------|---------------|
| `create-app.md` | Flujo de trabajo y plantillas para crear apps |
| `ai-integration.md` | Creación de apps impulsadas por LLM |
| `control-loops.md` | Apps reactivas en tiempo real (seguimiento, juegos) |
| `motion-philosophy.md` | Elección entre `goto_target` y `set_target` |
| `interaction-patterns.md` | Antenas como botones, cabeza como controlador |
| `symbolic-motion.md` | Definir el movimiento matemáticamente (bailes, ritmos) |

---

## Cómo funcionan las apps

El demonio de Reachy Mini gestiona todo el ciclo de vida de tu app:

1. Envías una petición de "start app" (desde el panel o la REST API).
2. El demonio lanza tu app como un **subproceso de Python** (`python -u -m your_app.main`).
3. Tu app recibe una instancia conectada de `ReachyMini` y un `stop_event`.
4. Al detenerse, el demonio envía `SIGINT` a tu proceso, lo que dispara un apagado limpio.
5. Después de que la app termina, el demonio devuelve el robot a su posición por defecto.

**Restricciones clave:**
- Solo puede ejecutarse **una app** a la vez.
- Tu app se ejecuta dentro del subproceso del demonio: no gestiona sus propias conexiones de hardware.
- En el robot Wireless, tu app se ejecuta en un entorno virtual compartido en `/venvs/apps_venv/`.

---

## Creación de una app

Utiliza siempre la herramienta de CLI para crear apps: genera la estructura correcta, los metadatos y los puntos de entrada:

```bash
# Install reachy-mini if not already done
uv pip install reachy-mini

# Create and publish in one step (recommended)
reachy-mini-app-assistant create my_app_name /path/to/destination --publish

# Or create locally first
reachy-mini-app-assistant create my_app_name /path/to/destination
```

> **Nunca crees carpetas de apps manualmente.** El asistente se encarga del código plantilla, las etiquetas de Hugging Face, los puntos de entrada y la estructura de paquetes correcta. La creación manual provoca problemas sutiles difíciles de depurar.

### Elegir una plantilla

| Plantilla | Comando | Úsala cuando |
|----------|---------|--------------|
| **Default** | `reachy-mini-app-assistant create my_app .` | La mayoría de las apps. Estructura mínima funcional. |
| **Conversation** | `reachy-mini-app-assistant create --template conversation my_app .` | Integración con LLM, voz, hacer que el robot hable. Incluye canal de audio, herramientas LLM, fusión de movimiento y toda la fontanería. |

### Estructura generada

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

## El contrato ReachyMiniApp

Tu app es una clase que extiende `ReachyMiniApp` e implementa un método `run()`. Esta es la estructura mínima:

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

### Puntos clave

- **`run(reachy_mini, stop_event)`**: El único método que debes implementar. La instancia de `ReachyMini` ya está conectada y lista. Consulta `stop_event` en tu bucle principal para salir limpiamente.
- **`wrapped_run()`**: Se llama desde el bloque `__main__`. Se encarga de conectar con el robot, iniciar servicios opcionales y llamar a tu método `run()`.
- **`stop()`**: Establece el `stop_event`. El demonio lo llama mediante `SIGINT` al detener tu app.
- Bloque **`__main__`**: Obligatorio. El demonio ejecuta tu app como un módulo (`python -m my_app.main`), por lo que este bloque es el punto de entrada real.

### El punto de entrada en `pyproject.toml`

El demonio descubre tu app mediante un punto de entrada estándar de Python. El asistente lo genera por ti:

```toml
[project.entry-points."reachy_mini_apps"]
my_app = "my_app.main:MyApp"
```

El nombre del grupo es `reachy_mini_apps` (con guiones bajos). El valor apunta a tu clase (`module.main:ClassName`).

Cualquier dependencia adicional de tu proyecto debe añadirse en este archivo.

---

## Opcional: interfaz web para tu app

Si quieres una página de ajustes o cualquier interfaz web para tu app, define `custom_app_url` en tu clase:

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

Cuando `custom_app_url` está definido, la app inicia automáticamente un servidor web FastAPI que sirve archivos desde el directorio `static/` dentro de tu paquete. El panel muestra un icono de ajustes para abrir esta interfaz. La página se puede acceder desde `http://localhost:8042` con una lite o `http://reachy-mini.local:8042` con una wireless.

Establece `custom_app_url = None` si tu app no necesita una interfaz web.

> Para un ejemplo funcional con un interruptor y reproducción de sonido, consulta la [template app](https://huggingface.co/spaces/pollen-robotics/reachy_mini_template_app).

---

## Pruebas de tu app

### 1. Validar la estructura

```bash
reachy-mini-app-assistant check /path/to/my_app
```

Esto comprueba que tu app tenga la estructura correcta, los puntos de entrada y los metadatos.

### 2. Ejecutar directamente

Puedes ejecutar directamente el `main.py` de tu app para iterar rápidamente (asegúrate de que el demonio esté en ejecución):

```bash
python -m my_app.main
```

### 3. Probar desde el panel

Instala tu app localmente y pruébala desde el panel, como lo harían los usuarios:

```bash
# Install in development mode
uv pip install -e /path/to/my_app

# Start the daemon
reachy-mini-daemon          # Lite
reachy-mini-daemon --sim    # Simulation
```

Luego abre [http://127.0.0.1:8000/](http://127.0.0.1:8000/) — tu app aparecerá en la lista de instaladas.

---

## Publicación en Hugging Face

### 1. Iniciar sesión en Hugging Face

```bash
uv pip install --upgrade huggingface_hub
hf auth login
```

Utiliza un token con permisos de **Write**.

### 2. Publicar

Si usaste `--publish` al crear la app, ya es un Space de Hugging Face con un remoto Git. Solo tienes que hacer push:

```bash
git add . && git commit -m "my changes" && git push
```

Si la creaste sin `--publish`, puedes publicarla más tarde:

```bash
reachy-mini-app-assistant publish /path/to/my_app
```

### 3. Descubribilidad

Para que tu app aparezca en la tienda de apps de Reachy Mini, su `README.md` debe contener la etiqueta `reachy_mini_python_app` en el frontmatter YAML:

```yaml
---
tags:
  - reachy_mini_python_app
---
```

El asistente la añade automáticamente. Si creas el README manualmente, no lo olvides.

---

## Instalación de apps

### Desde el panel

Abre el panel de Reachy Mini y haz clic en **Install** en cualquier app de la comunidad. Es la forma más sencilla.

### A través de la REST API

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

Sustituye `localhost` por `reachy-mini.local` o por la dirección IP del robot para la versión Wireless.

### Despliegue offline / manual para una unidad Wireless

Si no tienes acceso a internet en el robot (por ejemplo, en una conferencia), puedes instalar tu app directamente:

```bash
# Copy and install your app on the robot
scp -r /path/to/my_app pollen@reachy-mini.local:/tmp/my_app
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/pip install /tmp/my_app"
```

Después de actualizar el código manualmente, reinicia el demonio o la app para que los cambios surtan efecto.

---

## Depuración de apps

### Visualización de logs

:::info Lite / Simulation
Si ejecutas el demonio en una terminal, los logs de la app (stdout/stderr) aparecen directamente allí.

```bash
reachy-mini-daemon          # Lite
reachy-mini-daemon --sim    # Simulation
# App logs will print here
```
:::

:::info Wireless
La salida de la app es capturada por el daemon y está disponible vía `journalctl`:

```bash
ssh pollen@reachy-mini.local

# Live logs
sudo journalctl -u reachy-mini-daemon -f

# Recent logs, filtered (daemon logs are noisy with HTTP access logs)
sudo journalctl -u reachy-mini-daemon --since '5 min ago' | grep -v "uvicorn\|GET \|POST "
```
:::

### Problemas comunes

| Problema | Solución |
|---------|----------|
| "An app is already running" | Detén primero la app actual: `curl -X POST http://localhost:8000/api/apps/stop-current-app` |
| Daemon en mal estado | Reinícialo: `sudo systemctl restart reachy-mini-daemon` (espera ~30s antes de iniciar una app) |
| La app no detecta cambios en el código | Reinicia la app. Si la desplegaste manualmente, borra también el bytecode: `rm -rf __pycache__` |

### Consejo: registra todo al inicio

Una práctica útil de depuración es registrar tu configuración cuando la app se inicia:

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

## Configuración de la app

El subproceso de la app **hereda las variables de entorno del daemon**. No hay ningún mecanismo especial de inyección: tu app ve lo mismo que ve el proceso del daemon.

Si tu app necesita configuración en tiempo de ejecución (claves de API, URLs de servidores, etc.), el enfoque recomendado es usar **la interfaz web de la app**. Define `custom_app_url` en tu clase y añade una página de ajustes donde los usuarios puedan introducir valores (claves de API, direcciones de servidor, etc.) directamente desde su navegador. Esta es la opción más fácil de usar y funciona en todas las plataformas. Consulta [Optional: Web UI for Your App](#optional-web-ui-for-your-app) más arriba para ver cómo configurarla.

Otros enfoques:

- **Archivo de configuración**: Lee desde una ruta conocida (por ejemplo, `.env`, consulta [ejemplo aquí](https://github.com/pollen-robotics/reachy_mini_conversation_app/blob/main/.env.example)).
- **Valores predeterminados hardcodeados**: Sencillos y fáciles de depurar durante el desarrollo.

---

## Uso de audio en tu app

La grabación de audio, la reproducción y la detección de la dirección de llegada funcionan de la misma manera dentro de una app que en un script independiente: usa directamente los métodos del SDK (`start_recording()`, `get_audio_sample()`, `push_audio_sample()`, `play_sound()`).

Consulta los ejemplos oficiales para ver código funcional:

- **[Sound Recording](/es/reachymini_examples_sound_record)**: Graba desde la matriz de micrófonos y guarda en WAV.
- **[Sound Playback](/es/reachymini_examples_sound_play)**: Reproduce un archivo WAV o envía audio en tiempo real (por ejemplo, desde un motor TTS).
- **[Sound Direction of Arrival](/es/reachymini_examples_sound_doa)**: Detecta quién está hablando y hace que el robot lo mire.

Para más detalles sobre cómo difieren los flujos de audio entre Wireless y Lite, consulta [Media Architecture](/es/reachymini_sdk_media-architecture).

---

## Lecturas adicionales

- **Entrada de blog**: [Make and Publish Your Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps): guía completa con capturas de pantalla
- **Referencia de la API**: [Apps API](/es/reachymini_api_apps): referencia autogenerada para `ReachyMiniApp`, `AppManager` y clases relacionadas
- **REST API**: [REST API Reference](/es/reachymini_api_rest-api): documentación completa de los endpoints HTTP
- **Apps de ejemplo**: Explora [apps de la comunidad en Hugging Face](https://hf.co/reachy-mini/#/apps) para inspirarte

| App | Patrones clave | Enlace |
|-----|-------------|------|
| Conversation App | Herramientas LLM, canalización de audio, bucles de control | [GitHub](https://github.com/pollen-robotics/reachy_mini_conversation_app) |
| Marionette | Grabación de movimiento, par seguro, datasets de HF | [HF Space](https://huggingface.co/spaces/RemiFabre/marionette) |
| Radio | Patrón de interacción con antena | [HF Space](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio) |
| Simon | Patrón sin GUI (antena para iniciar) | [HF Space](https://huggingface.co/spaces/apirrone/reachy_mini_simon) |
| Hand Tracker | Bucle de control en tiempo real basado en cámara | [HF Space](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2) |
| Spaceship Game | Cabeza como joystick, botones de antena | [HF Space](https://huggingface.co/spaces/apirrone/spaceship_game) |