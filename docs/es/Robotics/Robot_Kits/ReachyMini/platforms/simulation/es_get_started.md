---
description: Guía de configuración para la simulación de Reachy Mini usando MuJoCo, que proporciona un entorno de física realista para crear prototipos y probar aplicaciones sin hardware físico.
title: Configuración de la simulación de Reachy Mini
slug: /es/reachymini_platforms_simulation_get_started
keywords:
- simulation
- mujoco
- physics
- prototype
- test
- debug
- virtual robot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Simulación de Reachy Mini - Guía de configuración

¡No necesitas un robot físico para empezar a construir! La simulación de Reachy Mini se ejecuta sobre [MuJoCo](https://mujoco.org) y proporciona un entorno de física realista para crear prototipos, probar y depurar tus aplicaciones.

![Simulation](https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f7777772e706f6c6c656e2d726f626f746963732e636f6d2f77702d636f6e74656e742f75706c6f6164646c6f6164732f323032352f30362f5265616368795f6d696e695f73696d756c6174696f6e2e676966)

## 1. Instalación

:::danger Requisitos previos
Antes de configurar la simulación, primero debes completar la instalación básica y la configuración del entorno virtual siguiendo la **[Guía de instalación](../../SDK/installation.md)**. Esta guía asume que ya tienes el SDK de Reachy Mini instalado y tu entorno virtual activado.
:::

La simulación requiere los bindings de Python `mujoco`. Puedes instalarlos junto con el software de Reachy Mini usando la etiqueta extra `[mujoco]`.

:::tip Con pip
```bash
pip install "reachy-mini[mujoco]"
```
:::

:::tip Con uv
```bash
uv pip install "reachy-mini[mujoco]"
```
:::

## 2. Ejecutar la simulación

Para iniciar el robot simulado, simplemente ejecuta el comando del daemon con la opción `--sim`:

:::tip Iniciar simulación
```bash
reachy-mini-daemon --sim
```
:::

Debería abrirse una ventana que muestre la vista 3D del robot. Puedes interactuar con la vista usando el ratón (arrastrar para rotar, clic derecho para desplazar, rueda para hacer zoom).

### 🍎 Usuarios de Mac (Apple Silicon / Intel)

:::tip Específico de macOS
En macOS, MuJoCo requiere un lanzador específico para funcionar correctamente con la interfaz gráfica. En lugar del comando anterior, usa `mjpython`:
:::

```bash
mjpython -m reachy_mini.daemon.app.main --sim
```

:::warning Usuarios de macOS
`uv` puede tener problemas de compatibilidad con MuJoCo en macOS. Si encuentras problemas de instalación o de ejecución, se recomienda usar `pip` directamente en lugar de `uv` para los paquetes relacionados con MuJoCo.
:::

## 3. Panel de control y Apps

:::info
Puedes acceder al Panel de control en **[http://localhost:8000](http://localhost:8000)**.
:::

* **Apps:** ¡Puedes instalar y ejecutar Apps! Se ejecutarán dentro de la simulación (por ejemplo, el robot se moverá en el visor 3D).

## 4. Escenas y opciones

:::info Personalización
Puedes personalizar el entorno de simulación usando el argumento `--scene`.
:::

* **`empty`** (predeterminado): Solo el robot en el vacío.
* **`minimal`**: Añade una mesa y algunos objetos (manzana, croissant, pato) con los que jugar.

:::tip Ejemplo
```bash
reachy-mini-daemon --sim --scene minimal
```
:::

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

:::info Sigue aprendiendo
* **[Python SDK](../../SDK/python-sdk.md)**: Aprende a mover, ver, hablar y escuchar.
* **[AI Integrations](../../SDK/integration.md)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Core Concepts](../../SDK/core-concept.md)**: Arquitectura, sistemas de coordenadas y límites de seguridad.
:::

## ❓ Resolución de problemas

¿Tienes algún problema? 👉 **[Consulta la guía de resolución de problemas y FAQ](../../troubleshooting.md)**
