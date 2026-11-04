---
description: Preparar y verificar las dependencias del host para compilar el paquete completo del código fuente.
title: Entorno de compilación del BSP
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_build_environment
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_bsp_build_environment/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Entorno de compilación del BSP

## Script de instalación de una sola ejecución

La raíz del SDK contiene `setup_build_env.sh` (el script real es `project/setup_build_env.sh`, con un enlace simbólico en la raíz). Es **idempotente**: no reinstala ni actualiza herramientas que ya estén instaladas en una versión aceptable, por lo que puedes ejecutarlo repetidamente.

```bash
cd recamera-pro-sdk-v1.0.10
./setup_build_env.sh             # Install all missing tools
./setup_build_env.sh --check     # Dry run: report missing tools without changing anything
./setup_build_env.sh --help      # Show script help
```

En la primera ejecución, usa `--check` para ver qué falta antes de decidir si instalar paquetes o acceder a la red.

## Instalar herramientas para tu objetivo de compilación

Los requisitos de herramientas dependen de lo que planees compilar. Para una primera compilación completa del SDK, usar el script para instalar y comprobar todas las dependencias es el enfoque más sencillo. Si solo vas a compilar una aplicación en C/C++, primero revisa qué requieren su Makefile, las bibliotecas enlazadas y el sysroot, e instala solo esas herramientas. Rust, Go, Node.js y Docker son usados por aplicaciones específicas de nivel superior en el SDK; no son prerrequisitos universales para compilar el kernel o cualquier programa en C.

El script resume y comprueba las herramientas requeridas. Sus etapas de instalación son:

| Etapa | Contenido | Usado por |
| --- | --- | --- |
| Paso 1 | Comprobaciones de hardware: CPU de 64 bits y espacio libre en la partición del SDK (≥20 GB; ≥100 GB recomendados) | Todas las compilaciones |
| Paso 2 | Paquetes básicos de compilación vía `apt`: `repo git make gcc g++ cmake bison flex libssl-dev autoconf pkg-config python3 device-tree-compiler`, etc. | U-Boot / kernel / Buildroot / dependencias comunes de aplicaciones |
| Paso 3 | Rust (`rustup` / `cargo`), Docker (≥27.0.0, y añadir el usuario al grupo `docker`), `cross` (asistente de compilación cruzada para Rust), nvm / Node.js (≥18) | `recamera_services`, `recamera_web` |
| Paso 4 | CMake ≥3.21, `libblkid-dev`, `libprotobuf-dev`, `protobuf-compiler` | `recamera_ipc`, `common/vigil` |
| Paso 5 | Go ≥1.24.0, UPX | `recamera_go2rtc` y aplicaciones relacionadas |
| Paso 6 | Imprimir un resumen de versiones de todas las herramientas | Todas las compilaciones |

> ¿Por qué un “SDK en C” comprueba Rust, Go y Node.js? Este es un paquete completo del código fuente del producto, no solo código en C. `recamera_services` usa Rust, los programas relacionados con go2rtc usan Go, el frontend Web usa herramientas de Node.js y el servicio de notificaciones usa Python. Estas herramientas solo son necesarias al compilar los componentes correspondientes. Si una compilación completa falla porque falta una herramienta, primero identifica qué aplicación falló. Consulta la [Arquitectura de servicios de capa superior de reCamera](/es/recamera_pro_bsp_services/) para ver la lista de aplicaciones.

## Usuarios y permisos

- Ejecuta el script como **usuario normal con acceso a sudo**, o como root.
- Cuando se invoca como `sudo ./setup_build_env.sh`, las herramientas a nivel de usuario como rustup, nvm y la configuración de Go se instalan para el usuario real identificado por `$SUDO_USER`, no para root. Esto es intencional y evita problemas de permisos durante compilaciones posteriores.

## Pasos necesarios después de la instalación

1. Si el script añadió el usuario actual al grupo `docker`, **cierra sesión e inicia sesión de nuevo**, o ejecuta `newgrp docker` temporalmente para que el cambio surta efecto.
2. Abre una nueva terminal o ejecuta `source ~/.bashrc` para que los cambios en PATH de Go, cargo y nvm surtan efecto.
3. Confirma que ninguna herramienta requerida esté marcada como `NOT INSTALLED` en el resumen de versiones del Paso 6.

Verifica el entorno con:

```bash
./setup_build_env.sh --check
```

## Redes restringidas: mirrors y paquetes sin conexión

El script admite variables de entorno para sobrescribir las fuentes de descarga:

| Variable de entorno | Sobrescribe |
| --- | --- |
| `GO_MIRROR_BASE` | URL base de descarga de Go |
| `DOCKER_REPO_BASE` | URL base del repositorio apt de Docker |
| `CMAKE_BASE_URL` | URL base de descarga de CMake |
| `RUSTUP_DIST_SERVER` | Servidor de distribución de rustup |

Por ejemplo:

```bash
export GO_MIRROR_BASE=https://golang.google.cn/dl
export RUSTUP_DIST_SERVER=https://rsproxy.cn
./setup_build_env.sh
```

Si colocas el archivo sin conexión `go1.24.0.linux-*.tar.gz` en la **raíz del SDK**, el script lo usará para instalar Go antes de intentar una descarga desde la red.

## Instalación manual (sin el script)

Si la política de la empresa no permite ejecutar el instalador, instala al menos:

```bash
sudo apt install -y build-essential git make cmake bison flex libssl-dev \
    autoconf pkg-config python3 device-tree-compiler libblkid-dev \
    libprotobuf-dev protobuf-compiler
```

Requisitos mínimos de versión:

- CMake ≥ 3.21 (`recamera_ipc` lo requiere en su CMakeLists)
- Docker ≥ 27.0.0 (requerido por el compilador cruzado `cross` de Rust)
- Node.js ≥ 18 (compilación del frontend)
- Go ≥ 1.24.0 (go2rtc)

**No necesitas instalar manualmente la toolchain cruzada.** El SDK la incluye en `tools/linux/toolchain/`:

- `aarch64-rockchip1240-linux-gnu` (GCC 12.4.0, 64 bits; usado por reCamera Pro)
- `arm-rockchip1240-linux-gnueabihf` (32 bits)

`project/app/Makefile.param` añade automáticamente `tools/linux/toolchain/<RK_TOOLCHAIN_CROSS>/bin` a `PATH`, por lo que no necesitas modificar el PATH del sistema.

## Comprobar si el entorno de compilación está listo

El SDK proporciona este comando de comprobación:

```bash
./build.sh check
```

Comprueba las dependencias de los SDK de componentes. Después de ejecutar `lunch`, `./build.sh info` también imprime la configuración actual de la placa y todas las variables `RK_*` para ayudar a verificar que el entorno se haya cargado correctamente.

> Nota: `./build.sh --help` **no** es el comando de ayuda. Un argumento no reconocido hace que `build.sh` muestre el menú de selección de placa. La información de uso está en la función `usage()` en `project/build.sh`; también se resume en la tabla de comandos en [Primera compilación completa](/es/recamera_pro_bsp_full_build/).

## Problemas comunes de instalación

| Síntoma | Causa | Solución |
| --- | --- | --- |
| `docker: permission denied` | El cambio de grupo no ha surtido efecto | Cierra sesión y vuelve a iniciarla, o ejecuta `newgrp docker` |
| `go: command not found` después de la instalación | PATH no se ha actualizado | Abre una nueva terminal o ejecuta `source ~/.bashrc` |
| tiempo de espera agotado en la descarga de rustup | Red restringida | Establece `RUSTUP_DIST_SERVER` y ejecuta el instalador de nuevo |
| Falla la comprobación de espacio en disco | Menos de 20 GB libres en la partición | Usa otra partición o libera espacio y vuelve a intentarlo; las salidas de compilación pueden requerir decenas de GB adicionales |
| falla la compilación con `cross` | Docker no se está ejecutando | Ejecuta `sudo systemctl start docker` |

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>