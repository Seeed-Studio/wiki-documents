---
description: Guía de instalación completa para el SDK de Python y el daemon de Reachy Mini en Linux, macOS y Windows, que cubre requisitos previos, configuración de entornos virtuales y resolución de problemas.
title: Guía de instalación
slug: /es/reachymini_sdk_installation
keywords:
- installation
- setup
- python
- virtual environment
- uv
- git
- prerequisites
- cross-platform
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# 📦 Guía de instalación

:::note ¡Bienvenido a Reachy Mini!
Esta guía te ayudará a instalar el SDK de Python y el daemon para empezar a controlar tu robot.
:::

<div align="center">

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ✅ Compatible | ✅ Compatible | ✅ Compatible |

</div>

**¿Necesitas ayuda?** No dudes en abrir un [issue](https://github.com/pollen-robotics/reachy_mini/issues) si encuentras algún problema.

## ¿Es tu primera vez usando la línea de comandos? 🖥️

:::note ¿Nuevo en la línea de comandos?
Una **línea de comandos** (también llamada terminal o símbolo del sistema) es una interfaz basada en texto donde puedes escribir comandos para interactuar con tu ordenador. No te preocupes: ¡es más simple de lo que parece!

**Cómo abrir la línea de comandos:**
* **Windows:** Pulsa `Win + R`, escribe `cmd` o `powershell` y pulsa Enter
* **macOS:** Pulsa `Cmd + Space`, escribe `Terminal` y pulsa Enter
* **Linux:** Pulsa `Ctrl + Alt + T` o busca "Terminal" en tus aplicaciones

**Consejos básicos:**
* Escribe los comandos exactamente como se muestran en las instrucciones
* Pulsa `Enter` después de escribir cada comando para ejecutarlo
* Puedes copiar y pegar comandos (clic derecho para pegar en la mayoría de interfaces de línea de comandos)
:::

:::tip
_¡No te intimides!_ La línea de comandos es solo otra forma de darle instrucciones a tu ordenador. Sigue los comandos paso a paso y ¡estarás controlando tu Reachy Mini en muy poco tiempo!
:::

## 1. 📋 Requisitos previos

<div align="center">

| Herramienta | Versión | Propósito |
|------|---------|---------|
| 🐍 **Python** | 3.10 - 3.12 | Ejecutar Reachy Mini SDK |
| 📂 **Git** | Última | Descargar código fuente y aplicaciones |
| 📦 **Git LFS** | Última | Descargar recursos de modelos |

</div>

### 🐍 Instalar Python

Usaremos `uv`, un gestor de paquetes de Python rápido que hace que la instalación sea sencilla.

#### Paso 1: Instalar uv

:::tip Linux / macOS
En tu terminal, ejecuta:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
:::

:::tip Windows
En tu terminal, ejecuta:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
:::

:::success Verificar la instalación
Una vez completada la instalación, cierra tu terminal y abre una nueva. Puedes comprobar si todo fue bien con:
```bash
uv --version
```
:::

#### Paso 2: Instalar Python

En tu terminal, ejecuta:
```bash
uv python install 3.12 --default
```

:::tip
Recomendamos Python 3.12 ya que es la última versión compatible con Reachy Mini.
:::

### 📂 Instalar Git y Git LFS

:::info Linux
#### Instalar Git y Git LFS

En tu terminal, ejecuta:
```bash
sudo apt install git git-lfs
```
:::

:::info macOS
#### 1. Instalar Homebrew (si aún no está instalado)

En tu terminal, ejecuta:
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Para Apple Silicon (M1, M2, etc.), también se te pedirá que ejecutes:

```zsh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

:::success Verificar Homebrew
Una vez completada la instalación, puedes comprobar si todo fue bien con:
```zsh
brew --version
```
:::

#### 2. Instalar Git y Git LFS

En tu terminal, ejecuta:
```zsh
brew install git git-lfs
```
:::

:::info Windows
#### Descargar e instalar Git para Windows

Descarga e instala Git para Windows:
https://git-scm.com/install/windows
:::

:::success Finalizar la instalación
Por último, es necesario inicializar Git LFS con el comando:
```bash
git lfs install
```
:::

## 2. 🏠 Configurar un entorno virtual

:::tip ¿Por qué usar un entorno virtual?
Mantiene tu instalación de Reachy Mini aislada y evita conflictos con otros proyectos de Python. ¡El desarrollo moderno en Python requiere esto!
:::

### Crear el entorno

En tu terminal, ejecuta:
```bash
uv venv reachy_mini_env --python 3.12
```

### Activar el entorno

:::info Linux / macOS
En tu terminal, ejecuta:
```bash
source reachy_mini_env/bin/activate
```
:::

:::warning Windows - Configuración inicial
Antes de poder activar tu entorno virtual, Windows necesita permiso para ejecutar scripts. ¡Solo necesitas hacer esto una vez!

**Paso 1:** Abre la terminal como administrador
- Pulsa `Win + R`, escribe `powershell`
- Haz clic derecho en "Windows PowerShell" y selecciona "Run as administrator"

**Paso 2:** Habilitar la ejecución de scripts

En la terminal de administrador, ejecuta:
```powershell
powershell Set-ExecutionPolicy RemoteSigned
```

**Paso 3:** Cierra la terminal de administrador y abre una terminal normal

Ahora puedes activar tu entorno virtual ejecutando:
```powershell
reachy_mini_env\Scripts\activate
```
:::

:::success Indicador de éxito
¡Deberías ver `(reachy_mini_env)` al inicio del prompt de tu línea de comandos!
:::

## 3. 🚀 Instalar Reachy Mini

Elige tu método de instalación:

<div align="center">

| 📦 **Instalación desde PyPI** | 🔧 **Instalación desde el código fuente** |
|:---:|:---:|
| **Para todos** | **Para desarrolladores** |
| Listo para usar | Modificar el código |

</div>

### 📦 Opción A: Instalar desde PyPI

:::tip Recomendado para la mayoría de usuarios
¿Solo quieres controlar tu robot? ¡Esta opción es para ti!
:::

En tu terminal, ejecuta:
```bash
uv pip install "reachy-mini"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

Si quieres usar el modo de simulación, necesitas añadir el extra `mujoco`:
```bash
uv pip install "reachy-mini[mujoco]"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

:::note
La postinstalación de gstreamer se debe a un [issue](https://github.com/pypi/support/issues/8847#issuecomment-3899714506) con PyPi y debería resolverse en el futuro.
:::

### 🔧 Opción B: Instalar desde el código fuente

:::info Para desarrolladores
¿Quieres modificar el SDK o contribuir? ¡Elige esta opción!
:::

En tu terminal, ejecuta:
```bash
git clone https://github.com/pollen-robotics/reachy_mini
cd reachy_mini
uv pip install -e .
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

Si quieres usar el modo de simulación, necesitas añadir el extra `mujoco`:
```bash
uv pip install -e ".[mujoco]"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

### 🐧 Usuarios de Linux

:::info ¿Linux + conexión USB?
Necesitas conceder acceso al puerto serie de Reachy Mini.

Ejecuta estos comandos en tu terminal:
```bash
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
| sudo tee /etc/udev/rules.d/99-reachy-mini.rules

sudo udevadm control --reload-rules && sudo udevadm trigger
sudo usermod -aG dialout $USER
```
:::

:::warning
¡Cierra la sesión y vuelve a iniciarla para que los cambios surtan efecto!
:::

:::tip PortAudio
Asegúrate de que portaudio esté instalado en tu sistema para habilitar las funciones de audio con el backend predeterminado.

Ejecuta este comando en tu terminal:
```bash
sudo apt-get install libportaudio2
```
:::

#### Gstreamer

La gestión de medios se realiza mediante la biblioteca GStreamer. Los usuarios de Windows y MacOSX pueden usar pip para instalarla:
```bash
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

Los usuarios de Linux tienen pasos adicionales que seguir:

<div align="center">

[![Guía de instalación de GStreamer](https://img.shields.io/badge/📖-GStreamer%20Installation%20Guide-blue?style=for-the-badge)](/es/reachymini_sdk_gstreamer-installation)

</div>

## 🎉 ¡Enhorabuena!

¡Has instalado Reachy Mini correctamente! Tu robot está listo para cobrar vida.

## ❓ Resolución de problemas

¿Te has encontrado con algún problema? 👉 **[Consulta la guía de resolución de problemas y FAQ](/es/reachymini_troubleshooting)**

## Próximos pasos

* **[Guía de inicio rápido](/es/reachymini_sdk_quickstart)**: Ejecuta tu primer comportamiento en Reachy Mini
* **[Python SDK](/es/reachymini_sdk_python-sdk)**: Aprende a moverte, ver, hablar y escuchar.
* **[Integraciones de IA](/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Conceptos clave](/es/reachymini_sdk_core-concept)**: Arquitectura, sistemas de coordenadas y límites de seguridad.
