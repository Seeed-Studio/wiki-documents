---
description: Guía para desarrolladores para instalar el daemon de Reachy Mini desde una rama específica de GitHub para probar nuevas funciones y correcciones de errores.
title: Instalar el Daemon desde una Rama Específica
slug: /reachymini_platforms_reachy_mini_install_daemon_from_branch
keywords:
  - daemon
  - rama
  - instalar
  - pruebas
  - desarrollo
  - ssh
  - git
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_install_daemon_from_branch/
---

# Instalar el Daemon desde una Rama Específica

:::warning
_⚠️ Solo para Desarrolladores y Testers_

Esta guía explica cómo instalar el daemon de Reachy Mini desde una rama específica de GitHub antes de que se publique oficialmente. Úsala para probar nuevas funciones o correcciones de errores.
:::

## Requisitos previos

- Acceso SSH a tu robot Reachy Mini (`pollen@reachy-mini.local`, contraseña: `root`)
- El robot debe estar conectado a tu red Wi-Fi (o ser accesible a través de su hotspot)

## Opción A: Configuración de Desarrollo Local

:::info
Esta opción está pensada para desarrollo activo y ciclos rápidos de depuración. Te permite probar cambios de forma segura sin afectar la instalación a nivel de sistema.

⚠️ Evita instalar apps con esta opción, ya que cualquier cambio realizado en la versión local de `reachy_mini` no se propagará correctamente.
:::

### Pasos:

1. **Conéctate al robot vía SSH:**
   ```bash
   ssh pollen@reachy-mini.local
   # Password: root
   ```

2. **Clona el repositorio de Reachy Mini con la rama específica:**
   ```bash
   git clone -b <branch-name> https://github.com/pollen-robotics/reachy_mini.git
   cd reachy_mini
   ```

3. **Configura el entorno virtual:**
   ```bash
   uv venv --python /venvs/mini_daemon/bin/python .venv
   source .venv/bin/activate
   uv sync --extra gstreamer --extra wireless-version
   ```

4. **Detén el servicio del daemon del sistema:**
   ```bash
   sudo systemctl stop reachy-mini-daemon
   ```

:::tip
Este paso debe repetirse después de cada reinicio, ya que el servicio del sistema se inicia automáticamente.
:::

5. **Inicia el daemon local para pruebas:**
   ```bash
   reachy-mini-daemon --wireless-version
   ```

Ahora puedes modificar el código en `~/reachy_mini` y probar tus cambios sin afectar la instalación del sistema.

## Opción B: Instalación Personalizada a Nivel de Sistema

:::info
Esta opción instala una compilación de rama de reachy-mini como daemon a nivel de sistema. Es más adecuada para pruebas exhaustivas de extremo a extremo y permite una instalación fluida de apps desde Reachy Mini Control.
:::

### Pasos:

1. **Conéctate al robot vía SSH:**
   ```bash
   ssh pollen@reachy-mini.local
   # Password: root
   ```

2. **Activa el entorno virtual del daemon:**
   ```bash
   source /venvs/mini_daemon/bin/activate
   ```

3. **Instala la rama específica:**
   ```bash
   pip install --no-cache-dir --force-reinstall \
     "reachy_mini[gstreamer,wireless-version] @ git+https://github.com/pollen-robotics/reachy_mini.git@<branch-name>"
   ```
   Sustituye `<branch-name>` por la rama que quieras probar (por ejemplo, `develop`, `feature/my-feature`, `bugfix/issue-123`).

Aquí tenemos que usar `pip` y no `uv` porque `uv pip install` [no funciona correctamente con `git lfs`](https://github.com/astral-sh/uv/issues/3312).

4. **(Solo para versiones ≤ 1.2.13)** Repite los pasos 2 y 3 usando `/venvs/apps_venv`.

5. **Reinicia el servicio del daemon:**
   ```bash
   sudo systemctl restart reachy-mini-daemon
   ```

6. **Verifica que la instalación se haya realizado correctamente:**
   ```bash
   pip show reachy-mini | grep Version
   ```
   Esto debería mostrar la versión correspondiente a la rama que has instalado.

## Volver a la Versión de Fábrica

Si encuentras problemas con la instalación de la rama, puedes restaurar el daemon de fábrica:

1. **Lanza el comando SOFTWARE_RESET** vía Bluetooth para reinstalar el daemon original de fábrica
2. **Consulta la [Guía de Restablecimiento](/es/reachymini_platforms_reachy_mini_reset)** para obtener instrucciones detalladas paso a paso

## Notas Importantes

- **Haz una copia de seguridad de tu trabajo** antes de cambiar entre diferentes instalaciones de ramas
- **Prueba exhaustivamente** en modo de desarrollo local antes de hacer instalaciones a nivel de sistema
- **Supervisa los registros del sistema** después de la instalación: `journalctl -u reachy-mini-daemon -f`
- **Impacto en el rendimiento:** Algunas ramas de desarrollo pueden tener un rendimiento o una estabilidad reducidos