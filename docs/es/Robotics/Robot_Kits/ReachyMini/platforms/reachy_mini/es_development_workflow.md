---
description: Guía de flujo de trabajo de desarrollo para Reachy Mini inalámbrico que cubre acceso SSH, opciones multiplataforma, edición remota y métodos eficientes de prueba de código.
title: Flujo de Trabajo de Desarrollo para Reachy Mini Inalámbrico
slug: /es/reachymini_platforms_reachy_mini_development_workflow
keywords:
- development
- workflow
- wireless
- ssh
- sshfs
- remote editing
- vs code
- rsync
- cross-platform
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Flujo de Trabajo de Desarrollo para Reachy Mini Inalámbrico

Esta guía cubre flujos de trabajo eficientes para desarrollar y probar código en el Reachy Mini Inalámbrico.

## Requisitos Previos

- Acceso SSH a tu robot (`ssh pollen@reachy-mini.local`, contraseña: `root`)
- SSHFS instalado en tu computadora (`sudo apt install sshfs` en Ubuntu/Debian)
- La dirección IP de tu robot (encuéntrala en el dashboard, en el router o ejecuta `ifconfig` después de hacer SSH)

## Opciones Rápidas Multiplataforma

Antes de profundizar en los flujos de trabajo completos, aquí hay dos enfoques multiplataforma más simples:

### VS Code Remote SSH

La [extensión Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) de VS Code te permite editar archivos directamente en el robot. Conéctate a `pollen@reachy-mini.local` y luego abre cualquier carpeta. Los cambios se guardan directamente en el robot. Esto funciona en Windows, macOS y Linux.

### Rsync

Usa `rsync` para sincronizar tu código fuente local con los site-packages del robot. Esto es rápido y funciona (casi) en todas partes:

```bash
rsync -avz /path/to/your_app/src/your_app/ \
    pollen@reachy-mini.local:/venvs/apps_venv/lib/python3.12/site-packages/your_app/
```

Ejecuta esto después de cada edición para enviar los cambios. Añade `--delete` para eliminar archivos que ya no existan localmente.

Para ambas opciones, consulta [Step 3 of Approach A](#step-3-install-and-run-your-code-on-the-robot) para ejecutar tu código en el robot.

---

## Enfoque A: Clonar en el Robot, Editar Localmente (Recomendado)

Este es el flujo de trabajo preferido. Tu código vive en el robot, pero lo editas desde tu computadora usando tu IDE favorito o herramientas de programación con IA.

### Paso 1: Clona tu repositorio en el robot

```bash
ssh pollen@reachy-mini.local
cd /home/pollen
git clone https://github.com/YOUR_USER/YOUR_APP.git
```

### Paso 2: Monta los archivos del robot en tu máquina local

En tu computadora local, crea un punto de montaje y móntalo:

```bash
mkdir -p ~/wireless_dev
sshfs pollen@reachy-mini.local:/home/pollen/YOUR_APP ~/wireless_dev \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

Ahora puedes abrir `~/wireless_dev` en tu IDE y editar como si los archivos fueran locales.

### Paso 3: Instala y ejecuta tu código en el robot

Haz SSH al robot e instala/ejecuta tu app:

```bash
ssh pollen@reachy-mini.local
cd /home/pollen/YOUR_APP

# Install in editable mode (changes apply immediately):
/venvs/apps_venv/bin/pip install -e .

# Then run your app:
/venvs/apps_venv/bin/python -m YOUR_MODULE.main

# Or run directly without installing:
/venvs/apps_venv/bin/python your_script.py
```

### Paso 4: Desmontar cuando termines

```bash
fusermount -u ~/wireless_dev
```

## Enfoque B: Sobrescribir el Código Fuente de la App Instalada

Si ya instalaste una app mediante el dashboard y quieres modificar su código fuente directamente montando tus archivos locales en el robot.

### Paso 1: Localiza la app instalada en el robot

Las apps se instalan en:
```
/venvs/apps_venv/lib/python3.12/site-packages/YOUR_APP_NAME/
```

### Paso 2: Monta tu código fuente local sobre la ubicación instalada

Ejecuta esto **en el robot** para montar el código fuente de tu PC sobre el paquete instalado:

```bash
ssh pollen@reachy-mini.local

# Mount your local src content onto site-packages
sshfs YOUR_USER@YOUR_PC_IP:/path/to/your_app/src/your_app \
    /venvs/apps_venv/lib/python3.12/site-packages/YOUR_APP_NAME \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

Importante: Monta solo el **contenido de tu directorio `src/your_app/`**, no todo el repositorio. El directorio site-packages contiene el paquete directamente, no la estructura del repositorio.

Ahora edita archivos en tu PC. Los cambios se aplican inmediatamente cuando reinicias la app.

## Enfoque C: Montar Código Fuente Local y Ejecutar Directamente

Similar al Enfoque B, pero sin usar pip install ni el dashboard. Montas tu código fuente local en el robot y ejecutas la app directamente.

### Paso 1: Monta tu código fuente local en el robot

Ejecuta esto **en el robot**:

```bash
ssh pollen@reachy-mini.local
mkdir -p /home/pollen/my_app_mount

sshfs YOUR_USER@YOUR_PC_IP:/path/to/your_app /home/pollen/my_app_mount \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

### Paso 2: Ejecuta tu app directamente

```bash
cd /home/pollen/my_app_mount
/venvs/apps_venv/bin/python main.py
```

Este enfoque es rápido para hacer pruebas, pero no tendrás la app registrada en el dashboard.

## Instalación de una Rama o Versión Específica

Para instalar una versión específica a nivel de sistema:

```bash
ssh pollen@reachy-mini.local
/venvs/apps_venv/bin/python -m pip install --force-reinstall \
    "git+https://github.com/pollen-robotics/MY_AWESOME_APP.git@MY_AWESOME_BRANCH"
```

Sustituye `MY_AWESOME_BRANCH` por un nombre de rama (`develop`), etiqueta o hash de commit.

## Errores Comunes

### pip install lento sobre SSHFS

Si montas archivos **desde tu computadora al robot** (inverso del Enfoque A), las operaciones de pip install serán extremadamente lentas porque pip lee muchos archivos pequeños a través de la red.

**Solución:** O bien:
- Usa el Enfoque A (los archivos viven en el robot, se montan en tu computadora)
- O sáltate pip install y ejecuta manualmente con `python -m your_module`

### Punto de montaje incorrecto para site-packages

Un repositorio git tiene esta estructura:
```
your_app/
  src/
    your_app/
      __init__.py
      main.py
```

Pero site-packages contiene:
```
your_app/
  __init__.py
  main.py
```

Si montas todo el repositorio sobre site-packages, Python no encontrará tu código. Monta solo el directorio interno del paquete.


## Referencia Rápida

| Tarea | Comando |
|------|---------|
| SSH al robot | `ssh pollen@reachy-mini.local` |
| Detener daemon | `sudo systemctl stop reachy-mini-daemon` |
| Iniciar daemon | `sudo systemctl start reachy-mini-daemon` |
| Ver logs del daemon | `journalctl -u reachy-mini-daemon -f` |
| Comprobar estado del robot | `reachyminios_check` |
| Montar archivos del robot localmente | `sshfs pollen@IP:/path ~/local_mount -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3` |
| Desmontar | `fusermount -u ~/local_mount` |

## Ver También

- [Install Daemon from Branch](./install_daemon_from_branch.md) - Para probar versiones de daemon no publicadas
- [Troubleshooting](../../troubleshooting.md) - Problemas comunes y soluciones
