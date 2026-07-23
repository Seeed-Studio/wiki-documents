---
description: Compila y flashea el paquete fuente BSP para el NVIDIA Jetson AGX Thor Developer Kit.
title: Cómo Compilar y Flashear el Código Fuente BSP para Jetson Thor
keywords:
  - Jetson Thor
  - BSP
  - compilación de fuente
  - flasheo
  - JetPack 7.1
image: https://files.seeedstudio.com/wiki/other/thor-post.png
slug: /how_to_build_and_flash_bsp_source_for_jetson_thor
sku: 100060965
last_update:
  date: 04/14/2026
  author: Dayu
createdAt: '2026-04-14'
updatedAt: '2026-05-25'
url: https://wiki.seeedstudio.com/es/how_to_build_and_flash_bsp_source_for_jetson_thor/
---

# Cómo Compilar y Flashear el Código Fuente BSP para Jetson Thor

<div align="center">
  <img width ="700" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
  </a>
</div>

Esta wiki explica cómo usar el paquete fuente BSP para compilar y flashear el **NVIDIA Jetson AGX Thor Developer Kit** desde un host Ubuntu.

El flujo de trabajo en este artículo utiliza el paquete BSP **JetPack 7.1** proporcionado a continuación y cubre:

- Descargar y extraer el paquete BSP
- Entrar en modo de recuperación USB en Thor
- Ejecutar `thor_build_flash.sh`
- Limpiar el espacio de trabajo con `thor_cleanup.sh`
- Instalación opcional de paquetes post-flasheo

## Requisitos Previos

- NVIDIA Jetson AGX Thor Developer Kit
- PC host con Ubuntu
- Cable de datos USB Type-C
- Fuente de alimentación estable para Thor
- Paquete BSP para Thor

:::info
Usa el **puerto de flasheo USB Type-C más cercano al conector HDMI** cuando conectes Thor al PC host.
:::

## 1. Descargar y Extraer el Paquete BSP

Primero descarga el paquete BSP:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Enlace de Descarga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93">Descargar</a></td>
    </tr>
  </tbody>
</table>
</div>

Después de descargar el paquete, extráelo e ingresa al directorio de trabajo:

```bash
cd /other_data
sudo tar xpf <downloaded_package>.tar.gz
cd thor-dev/linux_for_tegra
```

:::tip
Usa `sudo tar xpf` al extraer el paquete para que la propiedad y los permisos de los archivos se conserven correctamente.
:::

## 2. Entrar en Modo de Recuperación USB en Thor

Primero conecta el PC host al **puerto de flasheo USB Type-C cerca del conector HDMI**:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/flash-Thor-dev.png"/>
</div>

Los botones laterales se muestran a continuación:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/JAT-Button-Side_white.png"/>
</div>

Definiciones de botones en la imagen:

- `11`: Botón de encendido
- `12`: Botón de recuperación forzada
- `13`: Botón de reinicio
- `14`: LED blanco

Para entrar en modo de recuperación:

1. Apaga Thor.
2. Conecta el cable USB Type-C entre el PC host y el puerto de flasheo de Thor.
3. Presiona y mantén presionado el **botón de recuperación forzada** (`12`).
4. Mientras mantienes presionado el **botón de recuperación forzada** (`12`), presiona el **botón de encendido** (`11`) para encender la placa.
5. Suelta el botón después de que la placa entre en modo de recuperación.

En el PC host, verifica el modo de recuperación con:

```bash
lsusb
```

Thor en modo de recuperación USB normalmente se enumera como:

```text
0955:7045
```

Imagen de referencia:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/recovery-mode.png"/>
</div>

## 3. Compilar y Flashear

Primero ejecuta el comando de ayuda:

```bash
cd /other_data/thor-dev/linux_for_tegra
./thor_build_flash.sh help
```

La configuración predeterminada de la placa ya está configurada para **Thor J601**:

- `CONFIG=jetson-agx-thor-devkit`
- `BOARDID=3834`
- `BOARDSKU=0008`
- `FAB=400`
- `BOARDREV=G.5`
- `CHIP_SKU=00:00:00:A0`

### Flujo Típico

```bash
cd /other_data/thor-dev/linux_for_tegra

./thor_build_flash.sh prepare
./thor_build_flash.sh build
sudo -E ./thor_build_flash.sh flash
```

También puedes ejecutar el proceso completo de una vez:

```bash
./thor_build_flash.sh all
```

:::tip
Para el primer flasheo, se recomienda el flujo dividido `prepare -> build -> flash` porque facilita la identificación de fallos.
:::

### Significado de las Etapas

- `prepare`
  - Descarga el tarball del rootfs
  - Extrae `rootfs/`
  - Ejecuta `apply_binaries.sh`
  - Descarga y extrae la cadena de herramientas cruzada

- `build`
  - Compila el kernel y los módulos fuera del árbol
  - Copia la imagen del kernel en `rootfs/boot/`
  - Ejecuta `rootfs_magic.sh`
  - Actualiza initrd
  - Crea el usuario predeterminado

- `flash`
  - Llama a `l4t_initrd_flash.sh`
  - Requiere que la placa objetivo esté en modo de recuperación USB

### Notas Importantes

- Ejecuta `build` como un usuario normal, no como `root`.
- Ejecuta `flash` con `sudo -E`.
- El modo de recuperación USB de Thor normalmente es visible en el host como `0955:7045`.
- El script corrige automáticamente un enlace simbólico `nvethernetrm` faltante antes de la compilación.

### Anulaciones Comunes

Usa variables de entorno cuando necesites anular los valores predeterminados:

```bash
CONFIG=jetson-agx-thor-devkit \
DOWNLOAD_BASE_URL=http://192.168.1.77/jetson \
DEFAULT_USER=seeed \
DEFAULT_PASSWORD=seeed \
DEFAULT_HOSTNAME=jetson-test \
./thor_build_flash.sh build
```

Variables útiles:

- `DOWNLOAD_BASE_URL`
- `ROOTFS_NAME`
- `TOOLCHAIN_NAME`
- `DEFAULT_USER`
- `DEFAULT_PASSWORD`
- `DEFAULT_HOSTNAME`
- `FLASH_TARGET`
- `RUN_ROOTFS_MAGIC`

## 4. Limpieza

Mostrar ayuda:

```bash
./thor_cleanup.sh help
```

### Limpieza Diaria Recomendada

```bash
./thor_cleanup.sh incremental
```

Esto mantiene `source/kernel_out` para que la próxima compilación siga siendo rápida, mientras elimina:

- `output/`
- `bootloader/system.img*`
- `bootloader/esp.img*`
- `bootloader/recovery.img*`
- `bootloader/boot*.img`
- Artefactos temporales y registros de flasheo

### Modos de Limpieza

- `incremental`
  - Mantiene `source/kernel_out`
  - Mejor opción para desarrollo normal

- `rebuild`
  - También elimina `source/kernel_out`
  - La próxima compilación será una recompilación completa

- `distclean`
  - También elimina `rootfs/` y `l4t-gcc/`
  - Usar solo al archivar o restablecer completamente el entorno

### Ejecución en Seco

```bash
./thor_cleanup.sh incremental --dry-run
```

## 5. Paquetes Opcionales Post-Flasheo

Después de que Thor arranque exitosamente, puedes opcionalmente actualizar los metadatos de paquetes e instalar el meta-paquete `nvidia-jetpack`:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Solución de Problemas

### El arranque muestra un error `mmap`

Si Thor no arranca normalmente y la pantalla muestra un error `mmap` como la imagen de abajo, vuelve a entrar en modo de recuperación USB y reflashea la placa:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/mmap-error-thor.png"/>
</div>

Ejecuta el siguiente comando desde el espacio de trabajo de flasheo:

```bash
cd /other_data/thor-dev/linux_for_tegra
sudo BOARDID=$BOARDID FAB=$FAB BOARDSKU=$BOARDSKU BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU \
./l4t_initrd_flash.sh --erase-all jetson-agx-thor-devkit internal
```

:::note
Si el error `mmap` persiste después de ejecutar el comando de borrar y reflashear anterior, recopila el registro de arranque completo y contacta con soporte.
:::

## Recursos

- [NVIDIA Jetson AGX Thor Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
- [Paquete BSP de Thor para JetPack 7.1](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
