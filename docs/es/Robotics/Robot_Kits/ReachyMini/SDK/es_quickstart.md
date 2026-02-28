---
description: Guía de inicio rápido para poner Reachy Mini en funcionamiento en hardware real o en simulación, cubriendo requisitos previos, configuración del daemon y tu primer script.
title: Guía de inicio rápido
slug: /es/reachymini_sdk_quickstart
keywords:
- quickstart
- getting started
- first script
- daemon
- prerequisites
- tutorial
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Guía de inicio rápido

Sigue esta guía para poner tu Reachy Mini en funcionamiento, ya sea en hardware real o en simulación.

## 1. Requisitos previos

:::danger Importante
Asegúrate de haber instalado Reachy Mini en tu ordenador siguiendo nuestra [guía de instalación](installation.md).
:::

:::tip Entorno virtual
Asegúrate de haber creado y activado tu entorno virtual de Python. **¡Recuerda activarlo cada vez que abras una nueva terminal!**
:::

:::info Ejecutar el SDK directamente en Reachy Mini inalámbrico (Opcional)

Si quieres ejecutar el SDK directamente en tu Reachy Mini inalámbrico en lugar de hacerlo de forma remota desde tu ordenador, puedes conectarte a él mediante SSH.

**Paso 1: Conexión SSH**

Abre una terminal y ejecuta:
```bash
ssh pollen@reachy-mini
```

Cuando se te solicite, utiliza estas **credenciales predeterminadas**:
* Nombre de usuario: `pollen`
* Contraseña: `root`

**Paso 2: Activa el entorno virtual de Python**

Después de conectarte, activa el entorno virtual:
```bash
source /venvs/apps_venv/bin/activate
```

**Paso 3: Ejecuta scripts localmente**

Cuando ejecutes scripts en el propio Reachy Mini, usa el constructor estándar `ReachyMini()`. El modo automático mantendrá la conexión en localhost a menos que la sobrescribas explícitamente:
```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

**Ventajas de ejecutarlo localmente:** Menor latencia, sin dependencia de red y acceso directo a todos los recursos del robot.

**Desventajas:** Menor potencia de CPU y sin interfaz gráfica disponible.
:::

## 2. Asegúrate de que el Robot Server esté en ejecución (Daemon)

:::info
El **Daemon** es un servicio en segundo plano que gestiona la comunicación de bajo nivel con los motores y sensores. Debe estar en ejecución para que tu código funcione.
:::

* **En Reachy Mini (Inalámbrico):** El daemon se ejecuta cuando el robot está encendido. Asegúrate de que tu ordenador y Reachy Mini estén en la misma red.

:::tip Reachy Mini Lite (USB)
Tienes dos opciones:
<!-- * Start the [desktop application](../platforms/reachy_mini_lite/get_started) -->
* Abre una terminal y ejecuta:
  ```bash
  reachy-mini-daemon
  ```
:::

:::tip Simulación (No se necesita robot)
Tienes dos opciones:
<!-- * Start the [desktop application](../platforms/reachy_mini_lite/get_started) -->
* Abre una terminal y ejecuta:

**Linux y Windows:**
```bash
reachy-mini-daemon --sim
```

**macOS:**
```bash
mjpython -m reachy_mini.daemon.app.main --sim
```
:::

:::warning Usuarios de macOS
`uv` puede tener problemas de compatibilidad con MuJoCo en macOS. Si encuentras problemas de instalación o de ejecución, se recomienda usar `pip` directamente en lugar de `uv` para los paquetes relacionados con MuJoCo.
:::

:::success Verificación
Abre [http://localhost:8000](http://localhost:8000) en tu navegador. Si ves el Reachy Dashboard, ¡estás listo!
:::

## 3. Tu primer script

:::warning Importante
¡Mantén la terminal del daemon abierta y en ejecución! El daemon debe permanecer activo para que tu robot funcione.
:::

### Crea tu script de Python

:::tip Paso 1
Abre una nueva ventana de terminal
:::

:::tip Paso 2
Crea un nuevo archivo llamado `hello.py` y copia y pega en él el siguiente código:
:::

:::info
El constructor ahora detecta automáticamente Lite frente a Inalámbrico y cambia entre localhost y red de forma automática. Solo sobrescríbelo para casos avanzados, por ejemplo `ReachyMini(connection_mode="network")`.
:::

```python
from reachy_mini import ReachyMini

# Connect to the running daemon
with ReachyMini() as mini:
    print("Connected to Reachy Mini!")

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.5, -0.5], duration=0.5)
    mini.goto_target(antennas=[-0.5, 0.5], duration=0.5)
    mini.goto_target(antennas=[0, 0], duration=0.5)

    print("Done!")
```

:::tip Paso 3
Guarda el archivo y ejecuta tu script:
:::

En tu nueva terminal, ejecuta:
```bash
python hello.py
```

🎉 Si todo ha ido bien, ¡tu robot debería mover sus antenas!

## ❓ Resolución de problemas

¿Te has encontrado con algún problema? 👉 **[Consulta la Guía de resolución de problemas y FAQ](../troubleshooting.md)**

## ¿Usas un agente de programación con IA?

:::info
Si estás usando un agente de IA como **Claude Code**, **Codex** o **Copilot**, puedes empezar a crear aplicaciones de inmediato. Simplemente pega este prompt:
:::

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md*

Esta guía proporciona a tu agente de IA todo lo que necesita saber sobre el SDK, las mejores prácticas y las herramientas disponibles.

## Próximos pasos

* **[Python SDK](python-sdk.md)**: Aprende a mover, ver, hablar y oír.
* **[Explora la carpeta de ejemplos](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[Integraciones de IA](integration.md)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Conceptos clave](core-concept.md)**: Arquitectura, sistemas de coordenadas y límites de seguridad.
