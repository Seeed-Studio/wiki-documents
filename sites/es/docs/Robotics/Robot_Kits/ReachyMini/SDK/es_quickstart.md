---
description: Guía de inicio rápido para Reachy Mini que cubre requisitos previos, configuración del daemon y tu primer script para el robot.
title: Guía de inicio rápido
slug: /reachymini_sdk_quickstart
keywords:
  - inicio rápido
  - primer script
  - daemon
  - configuración
  - hola mundo
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_quickstart/
---

# Guía de inicio rápido

Sigue esta guía para poner en marcha tu Reachy Mini, ya sea en hardware real o en simulación.

## 1. Requisitos previos

Asegúrate de haber instalado Reachy Mini en tu ordenador siguiendo nuestra [guía de instalación](/es/reachymini_sdk_installation).

:::tip
Asegúrate de haber creado y activado tu entorno virtual de Python. **¡Recuerda activarlo cada vez que abras una nueva terminal!**
:::

<details>
<summary><strong>🔧 Ejecutar el SDK directamente en Reachy Mini inalámbrico (Opcional)</strong></summary>

Si quieres ejecutar el SDK directamente en tu Reachy Mini inalámbrico en lugar de hacerlo de forma remota desde tu ordenador, puedes conectarte a él mediante SSH.

### Paso 1: Conexión SSH

Abre una terminal y ejecuta:

```bash
ssh pollen@reachy-mini
```

Cuando se te solicite, utiliza estas **credenciales predeterminadas**:
- Nombre de usuario: `pollen`
- Contraseña: `root`

### Paso 2: Activar el entorno virtual de Python

Después de conectarte, activa el entorno virtual:

```bash
source /venvs/apps_venv/bin/activate
```

### Paso 3: Ejecutar scripts localmente

Al ejecutar scripts en el propio Reachy Mini, utiliza el constructor estándar `ReachyMini()`. El modo automático mantendrá la conexión en localhost a menos que lo sobrescribas explícitamente:

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

:::tip
Ventajas de ejecutar localmente
Menor latencia, sin dependencia de la red y acceso directo a todos los recursos del robot.
:::
:::warning
Desventajas
Menor potencia de CPU y sin interfaz gráfica disponible.
:::

</details>

## 2. Asegúrate de que el servidor del robot esté en ejecución (Daemon)

El **Daemon** es un servicio en segundo plano que gestiona la comunicación de bajo nivel con los motores y sensores. Debe estar en ejecución para que tu código funcione.

* **En Reachy Mini (Inalámbrico)**: El daemon se ejecuta cuando el robot está encendido. Asegúrate de que tu ordenador y Reachy Mini estén en la misma red.
* **En Reachy Mini Lite (USB)** - Tienes dos opciones:
  - Iniciar la [aplicación de escritorio](/es/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control)
  - Abrir una terminal y ejecutar:
    ```bash
    reachy-mini-daemon
    ```
* **Para simulación (No se necesita robot)** - Tienes dos opciones:
  - Iniciar la [aplicación de escritorio](/es/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control)
  - Abrir una terminal y ejecutar:
    - **Linux y Windows:**
      ```bash
      reachy-mini-daemon --sim
      ```
    - **macOS:**
      ```bash
      mjpython -m reachy_mini.daemon.app.main --sim
      ```
      > **⚠️ Usuarios de macOS:** `uv` puede tener problemas de compatibilidad con MuJoCo en macOS. Si encuentras problemas de instalación o de ejecución, se recomienda usar `pip` directamente en lugar de `uv` para los paquetes relacionados con MuJoCo.
      >
      > Si obtienes un error de segmentación de `libgstpython`, consulta la sección de [resolución de problemas de la simulación](/es/reachymini_platforms_simulation_get_started#-resolución-de-problemas).

:::success
Abre [http://localhost:8000/docs](http://localhost:8000/docs) en tu navegador. Si ves la documentación de la API de Reachy SDK, ¡estás listo!
:::

## 3. Tu primer script

:::warning
¡Mantén abierta y en ejecución la terminal del daemon! El daemon debe permanecer activo para que tu robot funcione.
:::

### Crea tu script de Python

**Paso 1:** Abre una nueva ventana de terminal

**Paso 2:** Crea un nuevo archivo llamado `hello.py` y copia y pega en él el siguiente código:

:::tip
El constructor ahora detecta automáticamente Lite frente a Inalámbrico y cambia entre localhost y red de forma automática. Solo sobrescríbelo para casos avanzados, por ejemplo `ReachyMini(connection_mode="network")`.
:::

```python
from reachy_mini import ReachyMini

# Connect to the running daemon
with ReachyMini() as mini:
    print("Connected to Reachy Mini! ")

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.5, -0.5], duration=0.5)
    mini.goto_target(antennas=[-0.5, 0.5], duration=0.5)
    mini.goto_target(antennas=[0, 0], duration=0.5)

    print("Done!")
```

**Paso 3:** Guarda el archivo y ejecuta tu script:

En tu nueva terminal, ejecuta:

```bash
python hello.py
```

🎉 Si todo ha ido bien, ¡tu robot debería mover sus antenas!

## ❓ Resolución de problemas

¿Te has encontrado con algún problema? 👉 **[Consulta la guía de resolución de problemas y preguntas frecuentes](/es/reachymini_troubleshooting)**


## ¿Usas un agente de programación con IA?

Si estás usando un agente de IA como **Claude Code**, **Codex** o **Copilot**, puedes empezar a crear aplicaciones de inmediato. Solo pega este prompt:

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

Esta guía proporciona a tu agente de IA todo lo que necesita saber sobre el SDK, las mejores prácticas y las herramientas disponibles.

## Próximos pasos
* **[SDK de Python](/es/reachymini_sdk_python-sdk)**: Aprende a mover, ver, hablar y escuchar.
* **[Explora la carpeta de ejemplos](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[Integraciones de IA](/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Conceptos básicos](/es/reachymini_sdk_core-concept)**: Arquitectura, sistemas de coordenadas y límites de seguridad.