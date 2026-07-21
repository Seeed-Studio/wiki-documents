---
description: Guía de configuración para la simulación de Reachy Mini usando MuJoCo, que proporciona un entorno de física realista para crear prototipos y probar aplicaciones sin hardware físico.
title: Configuración de la simulación de Reachy Mini
slug: /reachymini_platforms_simulation_get_started
keywords:
  - simulación
  - mujoco
  - física
  - prototipo
  - prueba
  - depuración
  - robot virtual
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_simulation_get_started/
---

# Simulación de Reachy Mini - Guía de configuración

¡No necesitas un robot físico para empezar a construir! La simulación de Reachy Mini se ejecuta sobre [MuJoCo](https://mujoco.org) y proporciona un entorno de física realista para crear prototipos, probar y depurar tus aplicaciones.

![Simulation](https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f7777772e706f6c6c656e2d726f626f746963732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032352f30362f5265616368795f6d696e695f73696d756c6174696f6e2e676966)

## 1. Instalación

> **📋 Requisitos previos:** Antes de configurar la simulación, primero debes completar la instalación básica y la configuración del entorno virtual siguiendo la **[Guía de instalación](/es/reachymini_sdk_installation)**. Esta guía asume que ya tienes el Reachy Mini SDK instalado y tu entorno virtual activado.

La simulación requiere los bindings de Python de `mujoco`. Puedes instalarlos junto con el software de Reachy Mini usando la etiqueta extra `[mujoco]`.

Con `pip`, ejecuta:
```bash
pip install "reachy-mini[mujoco]"
```
Con `uv`, ejecuta:
```bash
uv pip install "reachy-mini[mujoco]"
```

## 2. Ejecución de la simulación

Para iniciar el robot simulado, simplemente ejecuta el comando del daemon con la opción `--sim`:

```bash
reachy-mini-daemon --sim
```

Debería abrirse una ventana que muestre la vista 3D del robot. Puedes interactuar con la vista usando el ratón (arrastrar para rotar, clic derecho para desplazar, rueda para hacer zoom).

### 🍎 Usuarios de Mac (Apple Silicon / Intel)
En macOS, MuJoCo requiere un lanzador específico para funcionar correctamente con la interfaz gráfica. En lugar del comando anterior, usa `mjpython`:

```bash
mjpython -m reachy_mini.daemon.app.main --sim
```

> **⚠️ Usuarios de macOS:** `uv` puede tener problemas de compatibilidad con MuJoCo en macOS. Si encuentras problemas de instalación o de ejecución, se recomienda usar `pip` directamente en lugar de `uv` para los paquetes relacionados con MuJoCo.

## 3. Reachy Mini Control y Apps

Puedes usar **Reachy Mini Control** para interactuar con el robot simulado. Simplemente abre la app y conéctate a la simulación local.

![Control App with local daemon](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-external-daemon.png)

* **Apps:** ¡Puedes instalar y ejecutar Apps! Se ejecutarán dentro de la simulación (por ejemplo, el robot se moverá en el visor 3D).

## 4. Escenas y opciones

Puedes personalizar el entorno de simulación usando el argumento `--scene`.

* **`empty`** (predeterminado): Solo el robot en el vacío.
* **`minimal`**: Añade una mesa y algunos objetos (manzana, cruasán, pato) con los que jugar.

**Ejemplo:**
```bash
reachy-mini-daemon --sim --scene minimal
```

## 5. Conectar tu código

Una vez que la simulación está en ejecución, se comporta exactamente como un **Reachy Mini Lite** real conectado por USB. El daemon escucha en `localhost`, y puedes ejecutar cualquier script del SDK de Python sin modificaciones:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

# Connects to the simulation running on localhost
with ReachyMini() as mini:
    print("Connected to simulation!")

    # Look up and tilt head
    print("Moving head...")
    mini.goto_target(
        head=create_head_pose(z=20, roll=10, mm=True, degrees=True),
        duration=1.0
    )

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.6, -0.6], duration=0.3)
    mini.goto_target(antennas=[-0.6, 0.6], duration=0.3)

    # Reset to rest position
    mini.goto_target(
        head=create_head_pose(),
        antennas=[0, 0],
        duration=1.0
    )
```

## Próximos pasos
* **[Python SDK](/es/reachymini_sdk_python-sdk)**: Aprende a mover, ver, hablar y escuchar.
* **[AI Integrations](/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Core Concepts](/es/reachymini_sdk_core-concept)**: Arquitectura, sistemas de coordenadas y límites de seguridad.

## ❓ Resolución de problemas

<details>
<summary><strong>Fallo de segmentación desde <code>libgstpython.dylib</code> al usar <code>mjpython</code> (macOS)</strong></summary>

Puedes ver un error como:

```
ERROR: Caught a segmentation fault while loading plugin file:
.../gstreamer_python/lib/gstreamer-1.0/libgstpython.dylib
```

Este fallo de segmentación del plugin de GStreamer es un problema conocido, que también ocurre con el robot real, pero se produce en un proceso paralelo y no causa ningún problema visible. Sin embargo, con `mjpython` bloquea el proceso principal. La solución es renombrar el plugin para que GStreamer deje de cargarlo:

```bash
# Find the file inside your environment (adjust the path to match yours)
mv $(python -c "import gstreamer_python, pathlib; print(pathlib.Path(gstreamer_python.__file__).parent / 'lib/gstreamer-1.0/libgstpython.dylib')") \
   $(python -c "import gstreamer_python, pathlib; print(pathlib.Path(gstreamer_python.__file__).parent / 'lib/gstreamer-1.0/libgstpython_.dylib')")
```

Esto simplemente evita que GStreamer cargue automáticamente el plugin. No afecta a la funcionalidad normal de audio/vídeo.

</details>

¿Te has encontrado con otro problema? 👉 **[Consulta la guía de resolución de problemas y FAQ](/es/reachymini_troubleshooting)**