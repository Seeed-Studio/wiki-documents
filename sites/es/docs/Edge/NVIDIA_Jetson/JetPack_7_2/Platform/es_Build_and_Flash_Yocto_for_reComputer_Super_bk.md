---
description: Selecciona, compila, empaqueta y flashea una imagen Yocto de JetPack 7.2 para las carrier boards Jetson compatibles de Seeed Studio.
title: Compilar y flashear Yocto para las carrier boards Jetson de Seeed
keywords:
  - Yocto
  - OpenEmbedded
  - Seeed Jetson carrier board
  - Jetson Orin
  - Jetson Thor
  - meta-tegra
  - Jetson Linux 39.2
image: https://files.seeedstudio.com/wiki/jetpack-7.2/jetpack-7-2-yocto-workflow.png
slug: /build_and_flash_yocto_for_seeed_jetson_carrier_boards
aliases:
  - /build_and_flash_yocto_for_recomputer_super_bk
last_update:
  date: 2026-09-01
  author: Dayu
createdAt: '2026-07-24'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/es/build_and_flash_yocto_for_seeed_jetson_carrier_boards/
---

# Compilar y flashear Yocto para las carrier boards Jetson de Seeed

Esta guía proporciona un flujo de trabajo común para compilar y flashear una imagen OpenEmbedded/Yocto en las carrier boards Jetson de Seeed Studio definidas por el repositorio [`seeed-tegra-demo-distro`](https://github.com/jjjadand/seeed-tegra-demo-distro).

El repositorio usa las ramas `wrynose` de OE4T y el BSP `meta-tegra` para **Jetson Linux R39.2.0 / JetPack 7.2**. Una imagen Yocto utiliza los componentes del BSP NVIDIA Jetson Linux, pero no es el sistema de archivos raíz de Ubuntu que instala NVIDIA SDK Manager. La gestión de paquetes, la composición de la imagen, el entorno de escritorio y el comportamiento de actualización están controlados por los metadatos de Yocto.

:::warning Alcance del repositorio
Los comandos y las tablas de parámetros de este artículo siguen el estado del repositorio revisado el **31 de agosto de 2026**. Antes de compilar, vuelve a comprobar el README del repositorio y la matriz de soporte, porque las máquinas disponibles, los SKU de los módulos, las ramas y el estado de validación de hardware pueden cambiar.
:::

El siguiente diagrama resume todo el flujo de trabajo. Primero selecciona la carrier board y el módulo Jetson, luego mantén la misma máquina, SKU, directorio de compilación y receta de imagen durante la compilación y el flasheo.

<div align="center">
  <img width={1200} src="https://files.seeedstudio.com/wiki/jetpack-7.2/jetpack-7-2-yocto-workflow.png" alt="Flujo de trabajo de compilación y flasheo de Yocto JetPack 7.2 para las carrier boards Jetson de Seeed" />
</div>

## Antes de empezar

Utiliza un host Linux físico x86_64 con un SSD local rápido, una conexión de red estable y acceso `sudo`. Prepara un cable USB con capacidad de datos para el puerto de recuperación/dispositivo de la carrier board. Una compilación completa de desarrollo con Yocto puede consumir varios cientos de gigabytes, así que reserva aproximadamente **400 GB** de almacenamiento libre cuando sea posible. Usa al menos **16 GB de RAM**, con **32 GB o más recomendados**.

Instala los paquetes de compilación y flasheo comúnmente requeridos en un host Ubuntu:

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect python3-git python3-jinja2 \
  xz-utils debianutils iputils-ping libegl1-mesa libsdl1.2-dev \
  pylint xterm zstd liblz4-tool file locales \
  gdisk parted udev udisks2
```

Los nombres de los paquetes pueden diferir entre distribuciones host. Sigue la guía Yocto Project Quick Build y los requisitos de flasheo de OE4T para la rama usada por el repositorio. Si BitBake informa de una distribución host no compatible, utiliza un host compatible en lugar de omitir la validación.

Los scripts auxiliares usan los siguientes parámetros a lo largo del flujo de trabajo:

| Parámetro | Propósito | Regla importante |
| --- | --- | --- |
| `--machine` | Selecciona la configuración `MACHINE` de Yocto para la carrier board. | Debe coincidir con la carrier board física. |
| `--module-sku` | Selecciona el módulo Jetson instalado en una carrier Orin configurable. Son los cuatro dígitos finales del número de módulo de NVIDIA. | Obligatorio para máquinas Orin configurables; omítelo para máquinas Thor con módulo fijo. |
| `--build-dir` | Almacena la configuración seleccionada, los archivos de trabajo de BitBake y los artefactos desplegados. | Usa un directorio separado para cada combinación de carrier y SKU de módulo. |
| `--cache-dir` | Almacena las descargas compartidas y los datos de la caché sstate. | Reutiliza una caché local del host entre compilaciones. |
| `--image` | Selecciona la receta de imagen de BitBake. | Usa el mismo nombre de imagen para la compilación y la preparación del flasheo. |
| `--output-dir` | Selecciona dónde se extrae el paquete tegraflash verificado. | Usa un directorio local del host nuevo o vacío. |

`MACHINE` es el nombre del objetivo de hardware de Yocto, no solo una etiqueta de producto. Selecciona una configuración de máquina de `layers/meta-seeed/conf/machine/`, que determina la familia de SoC, el DTB de la carrier, la configuración del módulo, los datos BPMP, los archivos de pinmux y voltaje de pads, los overlays y las variables de flasheo que usan BitBake y tegraflash.

:::tip Selecciona la máquina para tu hardware
Los comandos `recomputer-orin-super-j401` de esta guía son solo un ejemplo concreto. Antes de preparar el espacio de trabajo, selecciona el `MACHINE` y el SKU del módulo que coincidan con tu carrier y tu módulo Jetson en la [tabla de carrier boards](https://wiki.seeedstudio.com/es/build_and_flash_yocto_for_seeed_jetson_carrier_boards/#elige-la-carrier-board-y-el-módulo-jetson).
:::

Elige una imagen según el propósito del objetivo:

| Receta de imagen | Caso de uso |
| --- | --- |
| `demo-image-full` | Imagen de referencia/demostración de OE4T con gráficos, contenedores, OpenCV y ejemplos de NVIDIA. Esta es la opción predeterminada de los scripts auxiliares. |
| `seeed-image-jetson-runtime` | Perfil de runtime de Seeed alineado con la pila de runtime OE4T/NVIDIA. |
| `seeed-image-jetson-development` | Imagen de runtime más paquetes de desarrollo CUDA en el objetivo, cabeceras, herramientas de compilación/depuración, ejemplos y pruebas. |

Los ejemplos siguientes usan `seeed-image-jetson-development`.

## Elige la carrier board y el módulo Jetson

El repositorio revisado para esta guía define 16 configuraciones de máquina de Seeed. También puedes imprimir la lista de máquinas del checkout actual con `./scripts/seeed/build.sh machines`.

| Producto o configuración de carrier | `MACHINE` | Selección de módulo compatible |
| --- | --- | --- |
| reComputer Industrial J401 | `recomputer-industrial-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Mini AGX Orin J501X | `recomputer-mini-agx-orin-j501x` | P3701 AGX Orin: `0004`, `0005` |
| reComputer Orin J401 | `recomputer-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Orin J40mini | `recomputer-orin-j40mini` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robotics J401 | `recomputer-orin-robotics-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robotics J401 GMSL | `recomputer-orin-robotics-j401-gmsl` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Super J401 | `recomputer-orin-super-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robo AGX Orin J501X | `recomputer-robo-agx-orin-j501x` | P3701 AGX Orin: `0004`, `0005` |
| reComputer Rugged Orin J401 | `recomputer-rugged-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Thor Carrier J601 | `recomputer-thor-carrier-j601` | P3834-0008 T5000 fijo; omite `--module-sku` |
| reComputer Thor Carrier J6014 | `recomputer-thor-carrier-j6014` | P3834-0000 T4000 fijo; omite `--module-sku` |
| reComputer Thor Carrier J6015 | `recomputer-thor-carrier-j6015` | P3834-0008 T5000 fijo; omite `--module-sku` |
| reServer AGX Orin J501X | `reserver-agx-orin-j501x` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |
| reServer AGX Orin J501X GMSL | `reserver-agx-orin-j501x-gmsl` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |
| reServer Industrial Orin J401 | `reserver-industrial-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| Seeed AGX Orin Kit | `seeed-agx-orin-kit` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |

`--module-sku` son los últimos cuatro dígitos impresos en el número de parte del módulo de NVIDIA. Comprueba la etiqueta del módulo o el EEPROM en lugar de seleccionar un valor de memoria.

| Familia de módulo | `--module-sku` | Número completo de módulo | Modelo de módulo o mapeo del repositorio |
| --- | --- | --- | --- |
| P3767 | `0000` | `P3767-0000` | Jetson Orin NX 16GB |
| P3767 | `0001` | `P3767-0001` | Jetson Orin NX 8GB |
| P3767 | `0003` | `P3767-0003` | Jetson Orin Nano 8GB |
| P3767 | `0004` | `P3767-0004` | Jetson Orin Nano 4GB |
| P3701 | `0000` | `P3701-0000` | Módulo Jetson AGX Orin del kit de desarrollo |
| P3701 | `0001` | `P3701-0001` | SKU de compatibilidad que usa el mapeo DTB/BPMP `0000` del repositorio |
| P3701 | `0002` | `P3701-0002` | SKU de compatibilidad que usa el mapeo DTB/BPMP `0000` del repositorio |
| P3701 | `0004` | `P3701-0004` | Jetson AGX Orin 32GB |
| P3701 | `0005` | `P3701-0005` | Jetson AGX Orin 64GB |
| P3834 | not selectable | `P3834-0000` | Jetson T4000, seleccionado por el `MACHINE` Thor |
| P3834 | not selectable | `P3834-0008` | Módulo Jetson T5000 / AGX Thor del kit de desarrollo, seleccionado por el `MACHINE` Thor |

:::caution Soporte de compilación frente a validación de hardware
El repositorio proporciona metadatos de máquina y validación de compilación para todas las configuraciones listadas. Esto no significa que cada carrier, SKU de módulo, opción de cámara y periférico haya completado la validación física. En la matriz de soporte revisada, `recomputer-orin-super-j401` ha completado la validación de flasheo, arranque desde NVMe, HDMI y USB básico. `reserver-agx-orin-j501x-gmsl` con SKU `0004` ha completado la validación de flasheo y arranque, mientras que la validación de GMSL y de periféricos más amplia sigue pendiente. Trata las demás máquinas como validadas solo para compilación hasta que se actualice su estado de hardware.
:::

La secuencia de comandos de las siguientes secciones usa **reComputer Super J401 con un módulo Orin NX 16GB** como ejemplo concreto. Sustituye su máquina, SKU y nombres de directorio por los valores seleccionados en las tablas anteriores. El mismo flujo de trabajo parametrizado también se aplica a otras máquinas de la tabla de soporte, como reComputer Mini J5011.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>reComputer Super J401</th>
      <th>reComputer Mini J5011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img width={360} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" alt="reComputer Super J401" />
      </td>
      <td>
        <img width={360} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl.jpg" alt="reComputer Mini J5011" />
      </td>
    </tr>
    <tr>
      <td>
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Buy One 🖱️</font></span></strong></a>
        </div>
      </td>
      <td>
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Comprar uno 🖱️</font></span></strong></a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Usar un `MACHINE` o un SKU de módulo incorrecto puede seleccionar archivos DTB, BPMP, pinmux, memoria o configuración de la flash incompatibles. Nunca reutilices un directorio de compilación existente después de cambiar cualquiera de estos valores.
:::

## Preparar y verificar el espacio de trabajo

Clona el repositorio de Seeed y registra el commit utilizado para la compilación:

```bash
mkdir -p ~/work/jetson-yocto
cd ~/work/jetson-yocto

git clone \
  --branch master \
  --single-branch \
  https://github.com/jjjadand/seeed-tegra-demo-distro.git \
  tegra-demo-distro

cd tegra-demo-distro
git rev-parse HEAD
```

Prepara un espacio de trabajo para la carrier de ejemplo y el módulo:

```bash
./scripts/seeed/prepare-workspace.sh \
  --machine recomputer-orin-super-j401 \
  --module-sku 0000 \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --cache-dir "$HOME/.cache/yocto-seeed"
```

Para una carrier AGX Orin, reemplaza los valores con su máquina y el SKU P3701 compatible. Para una carrier Thor, omite `--module-sku` porque el módulo está fijado por el archivo de máquina seleccionado. El asistente también acepta `--no-activate`, `--no-submodules` y `--full-history` para una gestión avanzada del espacio de trabajo.

Verifica el directorio de compilación seleccionado, la máquina y el SKU del módulo antes de compilar:

```bash
./scripts/seeed/build.sh current \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/current.png" alt="Asistente de Yocto que muestra el directorio de compilación, la máquina y el SKU del módulo seleccionados" />
</div>

No continúes si los valores mostrados no coinciden con el hardware físico.

## Compilar la imagen y el paquete de flasheo

La primera compilación recomendada utiliza el comando `all`. Ejecuta la validación de metadatos, la compilación de los DTB/DTBO de Seeed, las comprobaciones de instalación de archivos de arranque y la compilación completa de la imagen en secuencia:

```bash
./scripts/seeed/build.sh all \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

La primera compilación descarga y compila muchos componentes y puede tardar varias horas. Una ejecución correcta termina después de que se completen las cuatro etapas:

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/build-full-complete.png" alt="Etapas completadas de compilación de metadatos, árbol de dispositivo, archivos de arranque e imagen de Yocto" />
</div>

Los archivos generados se colocan bajo `<build-dir>/tmp/deploy/images/<machine>/`. Las salidas importantes siguen este patrón de nombres:

```text
<image>-<machine>.rootfs.ext4
<image>-<machine>.rootfs.manifest
<image>-<machine>.rootfs.spdx.json
<image>-<machine>.rootfs.testdata.json
<image>-<machine>.rootfs.tegraflash-tar.zst
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/filename.png" alt="Directorio de despliegue de Yocto que contiene el sistema de archivos raíz generado y el archivo tegraflash" />
</div>

El archivo `.tegraflash-tar.zst` contiene los archivos utilizados por el asistente de preparación de flasheo.

Para depuración o recompilaciones parciales, reemplaza `all` por `metadata`, `dtb`, `bootfiles`, `image` o `flash-package`. Mantén los mismos valores de `--build-dir`, `--machine` y `--image`. Para compilar un SDK opcional de desarrollo cruzado x86_64, ejecuta:

```bash
./scripts/seeed/build.sh sdk \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

El instalador del SDK se escribe bajo `<build-dir>/tmp/deploy/sdk/`. No es necesario para compilar o flashear la imagen de destino, y no es necesario cuando se compila directamente en el Jetson.

## Preparar y flashear el dispositivo de destino

Extrae y verifica el archivo de flasheo con el mismo directorio de compilación, máquina e imagen utilizados para la compilación:

```bash
./scripts/seeed/prepare-flash.sh \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development \
  --output-dir "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
```

El asistente comprueba el rootfs, `initrd-flash`, las variables de flasheo, DTB/BPMP DTB, pinmux, voltaje de pads y otros archivos de arranque seleccionados. Para carriers configurables, también verifica que el SKU del módulo en el archivo de flasheo coincida con el espacio de trabajo preparado. El asistente no ejecuta `sudo` ni flashea el dispositivo de destino por sí mismo.

Pon el dispositivo de destino en modo Force Recovery usando la secuencia de botón o switch de recuperación documentada para esa carrier board específica de Seeed. Conecta el puerto USB de dispositivo/depuración de la carrier directamente al host Linux con un cable capaz de transmitir datos y luego verifica que sea visible un dispositivo NVIDIA APX:

```bash
lsusb -d 0955:
```

El ID de producto USB varía según el módulo Jetson. No inicies el flasheo hasta que aparezca el dispositivo de recuperación de NVIDIA.

Ejecuta el flasher generado desde el directorio de salida preparado:

```bash
cd "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
sudo ./initrd-flash
```

El script arranca un initrd temporal a través de USB, expone el dispositivo de almacenamiento de destino al host, escribe el esquema de particiones y el sistema de archivos raíz, e informa del estado final. No desconectes la alimentación ni el USB durante el flasheo.

:::warning
El nombre temporal del dispositivo de bloque del host se asigna dinámicamente. Nunca supongas que siempre es `/dev/sdb` o `/dev/sdc`, y no redirijas manualmente el flujo de trabajo a una unidad del host.
:::

## Primer arranque y validación

Después de que el flasheo termine correctamente, desconecta el cable USB de recuperación, devuelve los controles de recuperación de la carrier a su estado normal si es necesario, apaga y vuelve a encender el dispositivo de destino y conecta su pantalla y periféricos.

El escritorio de Yocto debería arrancar desde el almacenamiento de destino seleccionado:

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg" alt="Escritorio Yocto ejecutándose en un dispositivo Jetson de Seeed" />
</div>

La configuración predeterminada `tegrademo` habilita una contraseña raíz inicial vacía y el inicio de sesión como root para desarrollo. Establece una contraseña inmediatamente:

```bash
passwd
```

Para la imagen de desarrollo, verifica las herramientas y bibliotecas necesarias en el lado del dispositivo de destino y luego prueba las interfaces específicas de la carrier que utiliza tu aplicación:

```bash
nvcc --version
gcc --version
cmake --version
pkg-config --modversion opencv4
```

Compilar o arrancar la imagen correctamente no valida todas las cámaras, enlaces GMSL, modos de pantalla, puertos USB, interfaces de red o conectores de expansión. Completa las pruebas de periféricos específicas del producto antes del despliegue.

## Solución de problemas

**El directorio de compilación informa de una máquina o SKU incorrectos:** Crea un nuevo directorio de compilación con `prepare-workspace.sh`. No edites ni reutilices un espacio de trabajo existente para cambiar de carrier board o de SKU de módulo.

**No se puede encontrar el archivo de flasheo:** Pasa el mismo valor de `--image` a `build.sh` y `prepare-flash.sh`. Ambos asistentes usan por defecto `demo-image-full`, por lo que una compilación de `seeed-image-jetson-development` debe usar explícitamente ese nombre durante la preparación del flasheo.

**Los metadatos se analizan pero el hardware no arranca:** Comprueba la matriz de soporte del repositorio. La validación de compilación de metadatos y DTB no demuestra el funcionamiento físico del flasheo, el arranque desde el almacenamiento, la pantalla, la cámara, GMSL o los periféricos para cada combinación de máquina y módulo.

**El flasheo se detiene en `Waiting for USB storage device flashpkg`:** En esta etapa, el host está esperando a que el initrd de Jetson enumere un dispositivo de almacenamiento masivo USB temporal; la escritura de la partición rootfs no ha comenzado. Comprueba el cable de datos, la conexión USB directa al host, el estado de modo de recuperación y la ruta de modo dispositivo USB del árbol de dispositivo compilado. No trates los puntos repetidos como una escritura lenta normal del almacenamiento.

## Referencias

- [Repositorio Seeed tegra-demo-distro](https://github.com/jjjadand/seeed-tegra-demo-distro)
- [Matriz de soporte de carrier boards de Seeed](https://github.com/jjjadand/seeed-tegra-demo-distro/blob/master/layers/meta-seeed/docs/board-support-status.md)
- [Compilación rápida del proyecto Yocto](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [Documentación de OE4T meta-tegra](https://oe4t.github.io/)
- [Conceptos básicos de flasheo de OE4T](https://oe4t.github.io/wrynose/Flashing.html)

¡Gracias por elegir productos de Seeed Studio! Para soporte técnico y discusión de productos, utiliza los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
