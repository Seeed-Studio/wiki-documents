---
description: Fallo intermitente de arranque en frío de Weston con EGL_NOT_INITIALIZED en Seeed Jetson (confirmado en reComputer Super J401 con R36.4.4). Describe los síntomas de doble DRM por orden de tarjeta, una recomendación de GNOME y enlaces para seguimiento.
title: El arranque en frío de Weston falla con EGL_NOT_INITIALIZED
tags:
  - JetPack
  - Pantalla
  - Weston
  - reComputer Super
keywords:
  - jetson
  - weston
  - EGL_NOT_INITIALIZED
  - tegra_drm
  - nvidia-drm
  - GNOME
  - JetPack 6
  - L4T R36
  - reComputer Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png
slug: /weston_egl_not_initialized_jetson_cold_boot
last_update:
  date: 08/17/2026
  author: haochen
createdAt: '2026-08-13'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/es/weston_egl_not_initialized_jetson_cold_boot/
---

# El arranque en frío de Weston falla con EGL_NOT_INITIALIZED

## Introducción

Si sustituyes el escritorio predeterminado por **Weston**, puedes ver un fallo **intermitente** después de un **arranque en frío**:

```text
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

Un **reinicio en caliente** a veces tiene éxito.

Esta página registra un **caso confirmado** y un diagnóstico funcional para que otros que encuentren los mismos registros puedan comparar síntomas y hacer seguimiento. **No** es una afirmación de que todas las imágenes Seeed Jetson o todos los arranques de JetPack 6 estén afectados.

:::info Caso confirmado
**reComputer Super J401** (Jetson Orin Nano Super) flasheado con Seeed **R36.4.4** (JetPack 6.2), usando Weston como compositor.

Problemas similares de orden `card0` / `card1` con Weston también se han debatido en los [Foros de Desarrolladores de NVIDIA](https://forums.developer.nvidia.com/) para otras configuraciones de **Jetson Orin + JetPack 6**. Si ves los mismos registros en otro producto Orin de Seeed o en una imagen L4T R36.x, este FAQ sigue siendo válido como punto de partida; por favor añade detalles en el issue de GitHub enlazado más abajo.
:::

## Escritorio recomendado

Si **no** necesitas Weston, mantente en el escritorio **GNOME** que se incluye con la imagen Seeed Jetson.

Los informes hasta ahora se refieren a **Weston** como compositor (a menudo después de desactivar GDM o usar un inicio tipo kiosco/servicio). GNOME predeterminado es la solución práctica utilizada en el caso confirmado.

## Síntomas

En los registros confirmados:

- Encendido en frío: Weston falla con `EGL_NOT_INITIALIZED`.
- Reinicio suave/en caliente: Weston puede iniciarse.
- Los arranques fallidos a menudo muestran a Weston usando `/dev/dri/card0` vinculado a `nvidia-drm` / `nv_platform`, a veces con `Cannot find any crtc or sizes`.
- Los arranques correctos a menudo muestran a Weston usando `/dev/dri/card1`, con `tegra_drm` manteniendo el otro nodo.

Fragmento de fallo de ejemplo:

```text
using /dev/dri/card0
Loading module '.../gl-renderer.so'
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

## Lo que sugieren los registros

La revisión del BSP de Seeed de [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) apunta a una **interacción en el orden de carga** entre `tegra_drm` y `nvidia-drm` en Orin (ambos pueden registrar minors DRM). No hay ninguna garantía documentada de qué controlador recibe el **minor 0** (`/dev/dri/card0`).

| Observado cuando Weston falla | Observado cuando Weston arranca |
| --- | --- |
| Weston abre `/dev/dri/card0`; ese nodo suele ser `nvidia-drm` / `nv_platform` | Weston abre `/dev/dri/card1`; `tegra_drm` / host1x suele mantener la otra tarjeta |

El arranque en frío frente al arranque en caliente puede cambiar el tiempo de sondeo, lo que coincide con el comportamiento intermitente. Esto pertenece a la pila de **Weston-on-Tegra** de NVIDIA más que a un error de flasheo de la carrier board. NVIDIA no ha publicado un aviso de corrección específico para este síntoma.

## Si debes usar Weston

1. Da preferencia a **GNOME** a menos que el producto realmente requiera Weston.
2. Trata los problemas restantes de Weston EGL/DRM como **NVIDIA / upstream**: publica en los [Foros de Desarrolladores de NVIDIA](https://forums.developer.nvidia.com/) con los registros de Weston y `dmesg | grep -i drm`.
3. Para comparar un arranque fallido frente a un arranque correcto:

```bash
# Which driver owns card0?
readlink -f /sys/class/drm/card0/device/driver
sudo udevadm info /dev/dri/card0
ls -l /dev/dri /dev/dri/by-path
sudo dmesg | grep -i drm
```

Seeed no distribuye un parche de BSP soportado que fuerce el orden de sondeo de DRM. Las soluciones alternativas de la comunidad (renombrar nodos `/dev/dri`, temporización personalizada de `modprobe`) están **fuera del alcance** de este FAQ.

Si reproduces esto en otro SKU o versión de L4T, comenta en [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) con el hardware, la versión de L4T/JetPack y los comandos anteriores.

## Recursos

- [Seeed Linux_for_Tegra #50 — Arranque en frío de Weston pantalla / EGL_NOT_INITIALIZED](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50)
- [Can't enable modeset on boot for Wayland (AGX Orin, JP 6.0)](https://forums.developer.nvidia.com/t/cant-enable-modeset-on-boot-for-wayland/303843)
- [Orden de carga de Weston kiosk / nvidia_drm (Orin Nano Super)](https://forums.developer.nvidia.com/t/some-issues-i-found-trying-to-start-weston-automatically-in-a-kiosk-mode-using-systemd/348933)
- [NVIDIA Jetson Linux — Weston (Wayland) (R36.4)](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/WindowingSystems/WestonWayland.html)
- [Guía de inicio de reComputer Super](https://wiki.seeedstudio.com/es/recomputer_jetson_super_getting_started/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
