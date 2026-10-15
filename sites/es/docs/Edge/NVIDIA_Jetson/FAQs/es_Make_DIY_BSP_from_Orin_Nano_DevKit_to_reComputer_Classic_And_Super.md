---
description: Clona un entorno completo del Jetson Orin Nano Developer Kit y construye un BSP híbrido para Seeed reComputer Classic o Super
title: Crear un BSP DIY desde Orin Nano DevKit a reComputer Classic / Super
keywords:
  - reComputer
  - reComputer Classic
  - reComputer Super
  - J4011
  - J4012
  - Orin Nano Developer Kit
  - BSP
  - Hybrid
  - Hybrid BSP
  - Jetson
  - JetPack
  - custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super
sku: 110110144, 110110145
last_update:
  date: 07/22/2026
  author: Zuhao
createdAt: '2026-07-22'
updatedAt: '2026-07-23'
url: https://wiki.seeedstudio.com/es/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Esta guía muestra cómo clonar un entorno de desarrollo completo desde un **NVIDIA Jetson Orin Nano Developer Kit**, sustituir el firmware de la placa por el de **Seeed reComputer**, compilar un BSP híbrido y completar el flasheo.

Se admiten dos placas de destino:

- **reComputer Classic** (J4011/J4012, configuración de placa `recomputer-orin-j401`)
- **reComputer Super** (configuración de placa `recomputer-orin-super-j401`)

Ambas comparten la misma idea central: **mantener la APP completa del DevKit y regenerar la QSPI de la placa de destino**, pero difieren en detalles de pinmux, superposición de cámara y diseño de disco. Las diferencias se presentan en las pestañas de abajo; los pasos comunes se escriben una sola vez.

Este flujo se ha validado con JetPack 6.2 / L4T 36.4.3, Orin Nano 8GB (SKU 0005).

Documentos relacionados:

- [Creating a Custom BSP Package from Jetson Development Environment](/es/make_diy_bsp_for_jetson/)
- [Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/es/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/)
- [Flash JetPack to a Selected Product](/es/flash/jetpack_to_selected_product/)

## Qué estás construyendo

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>Artefacto</th>
      <th>Propósito</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A. Clon en la misma carrier</td>
      <td><code>mfi_jetson-orin-nano-devkit-nvme.tar.gz</code></td>
      <td>Reflashear el <strong>DevKit</strong> con un clon completo del entorno</td>
    </tr>
    <tr>
      <td>B. Paquete de destino</td>
      <td><code>mfi_recomputer-orin-j401.tar.gz</code> (Classic)<br/><code>mfi_recomputer-orin-super-j401.tar.gz</code> (Super)</td>
      <td>Flashear la <strong>placa de destino</strong>: QSPI a nivel de placa de destino + APP completa del DevKit (incluyendo <code>/home</code>)</td>
    </tr>
    <tr>
      <td>C. Fallback seguro</td>
      <td>BSP oficial + migrar solo <code>/home</code></td>
      <td>Usar cuando los resultados híbridos sean anómalos</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
**No** flashees el paquete `mfi_jetson-orin-nano-devkit-nvme` del DevKit directamente en la placa de destino.

**No** consideres que editar un único `.dtb` dentro del directorio mfi equivale a una adaptación de placa.

**No** flashees un paquete híbrido Classic en Super, ni viceversa: sus pinmux y superposiciones de cámara son diferentes.
:::

## Requisitos previos

### Hardware

- Origen: Orin Nano **Developer Kit** (este ejemplo usa el módulo **SKU 0005** = Orin Nano 8GB, arranque por NVMe)
- Destino: Seeed **reComputer Classic J4011/J4012** o **reComputer Super** (idealmente el módulo también debería ser 0005)
- Host: Ubuntu 22.04 x86_64, cable USB Type-C (puerto de flasheo)
- Disco: reserva **≥ 100GB** de espacio libre (copia de seguridad + doble mfi + instantáneas)

:::danger
La serie reComputer Classic no tiene refrigeración suficiente para soportar el modo MAXN Super. Si flasheas JetPack 6.2 en un dispositivo Classic, **no habilites MAXN**.
:::

### Dependencias en el host

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

Antes de la copia de seguridad / flasheo:

```bash
sudo systemctl stop udisks2.service
sudo service nfs-kernel-server start
lsusb | grep 0955:7523   # must show NVIDIA Corp. APX
```

### Comparación de placas

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Elemento</th>
      <th>DevKit</th>
      <th>reComputer Classic</th>
      <th>reComputer Super</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>board-name</td>
      <td><code>jetson-orin-nano-devkit-nvme</code></td>
      <td><code>recomputer-orin-j401</code></td>
      <td><code>recomputer-orin-super-j401</code></td>
    </tr>
    <tr>
      <td>Archivo de configuración</td>
      <td><code>p3768-0000-p3767-0000-a0-nvme.conf</code></td>
      <td><code>recomputer-orin-j401.conf</code></td>
      <td><code>recomputer-orin-super-j401.conf</code></td>
    </tr>
    <tr>
      <td>Pinmux</td>
      <td>NVIDIA DevKit (DP)</td>
      <td>Classic HDMI</td>
      <td>Super HDMI</td>
    </tr>
    <tr>
      <td>Superposición de cámara</td>
      <td>NVIDIA dinámica</td>
      <td>Seeed doble IMX219</td>
      <td>Seeed cuádruple IMX219</td>
    </tr>
    <tr>
      <td>DTB principal SKU0005</td>
      <td><code>...-0005-nv(-super).dtb</code></td>
      <td colspan="2"><strong>Sigue usando</strong> <code>tegra234-p3768-0000+p3767-0005-nv-super.dtb</code></td>
    </tr>
    <tr>
      <td>mfi final</td>
      <td>Solo DevKit</td>
      <td>Solo Classic</td>
      <td>Solo Super</td>
    </tr>
  </tbody>
</table>
</div>

Ejemplo de `board_spec` de copia de seguridad:

```text
3767-300-0005-V.2-1-1-jetson-orin-nano-devkit-nvme-
```

## 1. Preparar el espacio de trabajo Linux_for_Tegra

Descarga el paquete de trabajo L4T de Seeed desde la tabla en [Creating a Custom BSP Package from Jetson Development Environment](/es/make_diy_bsp_for_jetson/#1-prepare-working-directory-on-pc) (JetPack 6.2 / L4T 36.4.3 plus en este ejemplo).

```bash
sudo tar xpf L4T_36.4.3_plus.tar.gz
# Adjust the archive name to match your download

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..

export ARCH=arm64
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"

cd Linux_for_Tegra/source
./nvbuild.sh
./do_copy.sh
./nvbuild.sh -i
```

Verificación:

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
test -f Linux_for_Tegra/recomputer-orin-j401.conf
test -f Linux_for_Tegra/jetson-orin-nano-devkit-nvme.conf
ls Linux_for_Tegra/kernel/dtb/tegra234-j401-*-recomputer.dtb
ls Linux_for_Tegra/kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
cd Linux_for_Tegra
test -f recomputer-orin-super-j401.conf
test -f jetson-orin-nano-devkit-nvme.conf
test -f kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
test -f kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo
```

  </TabItem>
</Tabs>

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-2-verify.png"/></div>

## 2. Hacer copia de seguridad del entorno completo del DevKit

### 2.1 Poner el dispositivo de origen en modo Recovery

Conecta el puerto de flasheo del DevKit al host con un cable de datos USB Type-C y entra en modo Recovery. En el host, `lsusb` debería mostrar `0955:7523` **APX**.

Para los pasos del modo Recovery, consulta: [Flash JetPack to a Selected Product](/es/flash/jetpack_to_selected_product/)

Durante la copia de seguridad el dispositivo puede cambiar brevemente a `0955:7035` (Linux for Tegra / initrd). Eso es normal.

### 2.2 Comando de copia de seguridad

```bash
cd Linux_for_Tegra
sudo ./tools/backup_restore/l4t_backup_restore.sh \
  -e nvme0n1 -b -c jetson-orin-nano-devkit-nvme
```

:::warning
**No** uses el nombre de la placa de destino para la primera copia de seguridad cuando el origen es un DevKit. Eso corromperá `board_spec` y las líneas base posteriores.
:::

### 2.3 Verificación

```bash
ls -lah tools/backup_restore/images/
head -5 tools/backup_restore/images/nvpartitionmap.txt
```

Deberías ver:

- `board_spec` contiene `jetson-orin-nano-devkit-nvme`
- `nvme0n1p1.tar.zst` (o la APP grande convertida posteriormente) tiene tamaño de **varios GB**
- `QSPI0.img` existe (esta es la QSPI del **DevKit**; el híbrido no debe reutilizarla como QSPI de la placa de destino)

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-3.3-verify.png"/></div>

Recomendado: crea una instantánea inmediatamente:

```bash
sudo cp -a tools/backup_restore/images ~/backup_images_dk_sku0005
```

## 3. Compilar BSP DIY de mismo carrier para DevKit (opcional)

Vuelve a poner el dispositivo en **APX**. En el host, `lsusb` debería mostrar `0955:7523 APX`:

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --use-backup-image --no-flash --network usb0 --massflash 5 \
  jetson-orin-nano-devkit-nvme internal
```

Artefactos:

- `mfi_jetson-orin-nano-devkit-nvme/`
- `mfi_jetson-orin-nano-devkit-nvme.tar.gz`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-4-artifacts.png"/></div>

:::danger
**Solo para reflashear el DevKit. No flashees la placa de destino con este paquete.**

Su APP puede usarse como fuente de datos para el paquete híbrido, pero su QSPI no puede reutilizarse.
:::

## 4. Lectura obligatoria: la trampa de la QSPI

Con `--use-backup-image`, `convert_backup_image_to_initrd_flash` coloca:

| Contenido de la copia de seguridad | Destino |
| --- | --- |
| NVMe / APP | `tools/kernel_flash/images/external/` |
| `QSPI0.img` de la **fuente** | `tools/kernel_flash/images/internal/` |

Por lo tanto:

| Enfoque incorrecto | Resultado |
| --- | --- |
| Solo editar `mfi/.../rootfs` o un `.dtb` | Ineficaz (lo que realmente se flashea es bak / QSPI) |
| Copia de seguridad del DevKit y luego cambiar directamente el nombre de la placa de destino + `--use-backup-image` | **Sigue flasheando la QSPI del DevKit (pinmux DP)**; HDMI/USB pueden ser incorrectos |
| Cambiar el conf y luego `--flash-only` | `--flash-only` **no** recompila las imágenes a partir del conf |

Lo que realmente difiere en la placa de destino es el **pinmux de HDMI + la superposición DCB/cámara** en el archivo conf de la placa:

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

Contenido clave de `recomputer-orin-j401.conf`:

```bash
PINMUX_CONFIG="tegra234-mb1-bct-pinmux-p3767-hdmi-a03.dtsi"
PMC_CONFIG="tegra234-mb1-bct-padvoltage-p3767-hdmi-a03.dtsi"
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo"
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo"
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

Contenido clave de `recomputer-orin-super-j401.conf`:

```bash
PINMUX_CONFIG="recomputer-super-orin-j401-pinmux-p3767-hdmi-a03.dtsi";
PMC_CONFIG="recomputer-super-orin-j401-padvoltage-p3767-hdmi-a03.dtsi";
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo";
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo";
```

  </TabItem>
</Tabs>

Para el SKU **0005**, el nombre principal del DTB sigue siendo el `*-0005-nv-super.dtb` de NVIDIA. **No** fuerces el cambio a `*-0000-recomputer.dtb` (esa ruta es para NX 16GB).

## 5. BSP híbrido: compilar el paquete de destino

Idea principal:

1. **APP**: seguir usando la copia de seguridad del DevKit (entorno de usuario completo)
2. **QSPI**: regenerar con la configuración de la placa de destino (**sin** `--use-backup-image`)
3. Ensamblar en el mfi de la placa de destino

```text
DevKit backup APP  ──►  external/ (nvme0n1p1_bak.img, etc.)
Target conf new QSPI ──►  internal/ (QSPI shards, not DevKit monolithic QSPI0.img)
                     └──► mfi_recomputer-orin-<target>(.tar.gz)
```

### 5.1 Preparar solo APP (eliminar QSPI del DevKit)

```bash
cd Linux_for_Tegra
sudo cp -a ~/backup_images_dk_sku0005 \
  tools/backup_restore/images_app_only
sudo rm -f tools/backup_restore/images_app_only/QSPI0.img
sudo sed -i '/qspi/Id' tools/backup_restore/images_app_only/nvpartitionmap.txt
```

Convierte solo APP en imágenes `external` de initrd flash (usa el paso de conversión de la herramienta de copia de seguridad, o reutiliza la APP grande que ya está en `tools/kernel_flash/images/external/` del paso de empaquetado mfi del DevKit).

### 5.2 Generar QSPI de la placa de destino

El dispositivo debe estar en APX. Los parámetros del módulo deben coincidir con la copia de seguridad (en este ejemplo: 3767 / 0005 / 300 / V.2):

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
cd Linux_for_Tegra
sudo BOARDID=3767 BOARDSKU=0005 FAB=300 BOARDREV=V.2 CHIP_SKU=00:00:00:D5 \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --no-flash --massflash 5 --showlogs --network usb0 \
  recomputer-orin-j401 internal
```

Los registros deberían mostrar el pinmux HDMI, por ejemplo `tegra234-mb1-bct-pinmux-p3767-hdmi-a03`.

  </TabItem>
  <TabItem value="super" label="reComputer Super">

Primero crea un alias que herede la configuración de la placa Super pero que use explícitamente una raíz NVMe:

```bash
cd Linux_for_Tegra
cat > recomputer-orin-super-j401-nvme.conf <<'EOF'
source "${LDK_DIR}/recomputer-orin-super-j401.conf";
EOF
```

```bash
cd Linux_for_Tegra
sudo BOARDID=3767 BOARDSKU=0005 FAB=300 BOARDREV=V.2 \
  CHIP_SKU=00:00:00:D5 \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --no-flash --massflash 5 --showlogs --network usb0 \
  recomputer-orin-super-j401-nvme external
```

:::danger
No uses `internal` como `rootdev` final en este escenario NVMe. En la configuración validada, eso generó una configuración MB2 con `SDCARD instance: 0`, y el arranque se detuvo en `Busy Spin` cuando no existía ninguna tarjeta SD.
:::

El registro debe contener:

```text
recomputer-super-orin-j401-pinmux-p3767-hdmi-a03.dtsi
tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo
```

  </TabItem>
</Tabs>

Recomendado: guarda el nuevo QSPI interno:

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
sudo cp -a tools/kernel_flash/images/internal ~/j401_qspi_internal_save
```

:::info
El QSPI interno (SKU 0005 / L4T 36.4.3) generado en esta guía está disponible para descarga directa:

```bash
wget -O j401_qspi_internal_save.tar.gz \
  https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/j401_qspi_internal_save.tar.gz
mkdir -p Linux_for_Tegra/tools/kernel_flash/images/internal
tar xpf j401_qspi_internal_save.tar.gz -C Linux_for_Tegra/tools/kernel_flash/images/internal/
```

Coloca los archivos descargados en `Linux_for_Tegra/tools/kernel_flash/images/internal/` para omitir el paso de generación de QSPI anterior.

**Reutilizar requisitos previos**: la placa de destino es reComputer Classic J4011/J4012, módulo SKU 0005, L4T 36.4.3. Si alguna condición no coincide, regenera el QSPI según esta sección.
:::

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
sudo cp -a tools/kernel_flash/images/internal ~/super_j401_qspi_internal_save
```

Verifica que el `internal/flash.idx` de Super exista y que el `QSPI0.img` monolítico del DevKit no esté presente:

```bash
test -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/flash.idx
test ! -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/QSPI0.img
```

:::info
El QSPI interno de Super (SKU 0005 / L4T 36.4.3) generado en esta guía está disponible para descarga directa:

```bash
wget -O super_j401_qspi_internal_save.tar.gz \
  https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-super/super_j401_qspi_internal_save.tar.gz
mkdir -p Linux_for_Tegra/tools/kernel_flash/images/internal
tar xpf super_j401_qspi_internal_save.tar.gz -C Linux_for_Tegra/tools/kernel_flash/images/internal/
```

Coloca los archivos descargados en `Linux_for_Tegra/tools/kernel_flash/images/internal/` para omitir el paso de generación de QSPI anterior.

**Reutilizar requisitos previos**: la placa de destino es reComputer Super, módulo SKU 0005, L4T 36.4.3. Si alguna condición no coincide, regenera el QSPI según esta sección.
:::

  </TabItem>
</Tabs>

### 5.3 Ensamblar mfi

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

El directorio final debe cumplir:

| Ruta | Contenido |
| --- | --- |
| `mfi_recomputer-orin-j401/recomputer-orin-j401.conf` | Presente |
| `.../tools/kernel_flash/images/internal/` | **Nuevo QSPI J401** (sin `QSPI0.img` monolítico de DevKit, o hash diferente al de DevKit; `flash.idx` suele ser fragmentos de varias líneas) |
| `.../tools/kernel_flash/images/external/nvme0n1p1_bak.img` | APP de **escala GB** |

Archivo opcional:

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-j401.tar.gz mfi_recomputer-orin-j401
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-6.3-artifacts.png"/></div>

  </TabItem>
  <TabItem value="super" label="reComputer Super">

:::danger
No copies incondicionalmente todo el directorio `external/` del mfi del DevKit.

Si el DevKit de origen usa una unidad de 256GB y el Super de destino usa 128GB, la GPT de origen falla en `partprobe` con "GPT is larger than device storage".
:::

La unidad de destino validada tenía `128035676160` bytes. Usamos el diseño externo estándar `flash_l4t_t234_nvme.xml` de `102400000000` bytes y solo reemplazamos la carga útil de APP:

```bash
cd Linux_for_Tegra

# Use the standard external images generated for the current Super workspace:
sudo cp -a tools/kernel_flash/images/external/. \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/

# Reuse only the DevKit APP content:
sudo cp -a \
  mfi_jetson-orin-nano-devkit-nvme/tools/kernel_flash/images/external/nvme0n1p1_bak.img* \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/

sudo tee \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/flash.cfg \
  >/dev/null <<'EOF'
APP_ext=nvme0n1p1_bak.img
external_device=nvme0n1p1
EOF
```

Verificar:

```bash
test -f mfi_recomputer-orin-super-j401/recomputer-orin-super-j401.conf
test -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/nvme0n1p1_bak.img
test ! -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/QSPI0.img
```

Las tres condiciones deben cumplirse:

- `internal/` contiene el nuevo QSPI de Super;
- la GPT externa es más pequeña que el disco físico de destino;
- `APP_ext` apunta al `nvme0n1p1_bak.img` del DevKit.

Antes de archivar, comprueba también tres requisitos de coherencia; consulta la [Nota técnica A](#nota-técnica-a-super-first-boot-consistency).

Archivo:

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-super-j401.tar.gz \
  mfi_recomputer-orin-super-j401
sudo gzip -t mfi_recomputer-orin-super-j401.tar.gz
sha256sum mfi_recomputer-orin-super-j401.tar.gz \
  > mfi_recomputer-orin-super-j401.tar.gz.sha256
```

El archivo coherente final construido en esta validación tiene `12,822,619,478` bytes, pasa `gzip -t` y tiene este SHA-256:

```text
fb1d502d9e869d67226eaf71bbe2462fab4e2f1dacf8a6e7fa59057c66a2e845
```

  </TabItem>
</Tabs>

## 6. Flashear a la placa de destino

### 6.1 Poner la placa de destino en APX

`lsusb` → `0955:7523 NVIDIA Corp. APX`

### 6.2 Comando de flasheo

**Si el directorio extraído ya existe localmente, no ejecutes** `tar xpf` **de nuevo:**

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-super-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
</Tabs>

Solo cuando otro PC tiene **solo** el `.tar.gz`:

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
sudo tar xpf mfi_recomputer-orin-j401.tar.gz
cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
sudo tar xpf mfi_recomputer-orin-super-j401.tar.gz
cd mfi_recomputer-orin-super-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
</Tabs>

:::warning
Si aparece `/mnt/external/...: Permission denied` mientras se escribe la recuperación o APP, se trata de un problema de permisos NFS; consulta la [Nota técnica B](#nota-técnica-b-nfs-permission-denied).
:::

### 6.3 Mensajes normales durante el flasheo

| Registro | Significado |
| --- | --- |
| `p3768-0000-p3767-0000-a0.conf: No such file or directory` | Común con `--flash-only`; las imágenes ya están precompiladas, continuar |
| `rpcbind already running` | Seguro de ignorar |
| `blockdev: cannot open /dev/mmcblk0boot0` | Orin Nano no tiene esa partición; normalmente inofensivo |
| RCM-boot + `SSH ready` | Entrada de flasheo normal |
| DTB `...-0005-nv-super.dtb` | Correcto para SKU0005 |
| Múltiples líneas `internal` + `Starting to flash to qspi` | Flasheando el QSPI de la placa de destino |
| `tar ... zstd ... nvme0n1p1_bak.img` | Restaurando APP (paso más largo; puede tardar decenas de minutos) |
| `Successfully flash the qspi` | Flasheo de QSPI completado |
| `Successfully flash the external device` | Flasheo del dispositivo externo completado |
| `Flashing success` / `Flash is successful` | Flasheo correcto |

:::warning
**No apagues ni desconectes la alimentación hasta que veas un mensaje de finalización correcta.**
:::

## 7. Comprobaciones posteriores al flasheo

Suelta el botón o jumper de Recovery y apaga/enciende la alimentación después de un flasheo correcto. Si `lsusb` sigue mostrando `0955:7523 APX`, el dispositivo permanece en Recovery y no ha arrancado Linux.

Después de un arranque normal, ejecuta:

```bash
cat /proc/device-tree/model
ls /boot/kernel_tegra234*.dtb
ls /boot/*.dtbo | grep -E 'hdmi|imx219' || true

# Whether peripherals actually work (more important than model / dtbo filenames)
xrandr 2>/dev/null | head -20
lsusb | head
ip -br link
ls /boot/*.dtbo 2>/dev/null | head -40
sudo dmesg | grep -iE 'dtb|overlay|hdmi|tegra234' | tail -30

# Whether the original DevKit user environment survived (CUDA example)
nvcc --version
```

:::info
Sin sudo, `dmesg` puede mostrar `Operation not permitted`. Eso es un problema de permisos; usa `sudo`.
:::

### Cómo interpretar los resultados (SKU 0005)

**1) `/proc/device-tree/model` sigue mostrando DevKit: normal para SKU 0005**

Ejemplo:

```text
NVIDIA Jetson Orin Nano Engineering Reference Developer Kit Super
```

Motivo: la configuración de placa de destino para **SKU 0005** selecciona `tegra234-p3768-0000+p3767-0005-nv-super.dtb` de NVIDIA. **No** cambia a `tegra234-j401-*-recomputer.dtb`, por lo que la cadena de modelo sigue pareciendo la del DevKit oficial. **No** concluyas "se flasheó el bundle de DevKit incorrecto" solo a partir de esta línea.

**2) Nombres de archivo DTB bajo `/boot`**

Comúnmente visibles:

```text
/boot/kernel_tegra234-p3768-0000+p3767-0000-nv.dtb
/boot/kernel_tegra234-p3768-0000+p3767-0005-nv.dtb
```

Puede que no veas un nombre de archivo `*-0005-nv-super.dtb`; el DTB de arranque real a menudo lo eligen **UEFI/QSPI**. El listado de `/boot` es solo de referencia.

**3) `grep hdmi|imx219` vacío: no es un fallo por sí mismo**

Después del flasheo híbrido, `/boot/*.dtbo` a menudo sigue conteniendo la lista de overlays genéricos de la copia de seguridad del DevKit. **Puede que no** veas `tegra234-dcb-p3767-0000-hdmi.dtbo` ni overlays de cámara de Seeed. Los ajustes de HDMI/cámara de Seeed se aplican principalmente a través de la **nueva ruta de overlay de QSPI / UEFI de la placa de destino**.

**4) Júzgalo por “¿funciona?”**

| Comprobación | Ejemplo saludable |
| --- | --- |
| USB | Hubs, ratón, Bluetooth y Ethernet USB enumerados (`lsusb` muestra varios dispositivos) |
| Ethernet por cable | Classic: `enP8p1s0` etc. están `UP`; Super: ver [Tech Note C](#tech-note-c-super-lan743x-wired-ethernet-limitation) |
| Wi‑Fi | `wlP1p1s0` está `UP` |
| Pantalla | El escritorio funciona; o `xrandr` tiene salida |
| Entorno de usuario | Los usuarios, software y datos originales del DevKit permanecen |
| CUDA | `nvcc --version` funciona (en este ejemplo **12.6**), lo que indica que el clon de APP está intacto |

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

Classic debe centrarse en validar la configuración de cámara dual (`imx219-dual-seeed`).

**En el dispositivo: modelo / DTB**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-model-dtb.png"/></div>

**En el dispositivo: CUDA instalada en el DevKit original sigue funcionando**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-cuda-nvcc.png"/></div>

  </TabItem>
  <TabItem value="super" label="reComputer Super">

Super debe centrarse en validar la configuración de cámara cuádruple requerida por Super (`imx219-quad-seeed`). La ausencia de un nombre de archivo `imx219-quad-seeed.dtbo` bajo `/boot` no es un fallo por sí misma porque el overlay puede aplicarse a través de QSPI/UEFI.

Resultados validados:

- El sistema alcanzó la pantalla de inicio de sesión de Ubuntu con `display-manager` activo;
- HDMI, teclado/ratón USB, Bluetooth y Wi‑Fi funcionaron;
- Se conservaron la APP clonada del DevKit y CUDA 12.6;
- Estaban presentes el overlay de cámara cuádruple y cuatro nodos de configuración IMX219/I2C.

<div></div>
</TabItem>
</Tabs>

### Cuándo editar `extlinux.conf`

Solo si **HDMI / USB / el arranque son anómalos**, intenta añadir bajo `LABEL primary` en `/boot/extlinux/extlinux.conf`:

```text
FDT /boot/kernel_tegra234-p3768-0000+p3767-0005-nv-super.dtb
```

(Si ese archivo falta bajo `/boot`, prueba con `...-0005-nv.dtb`, o cópialo primero desde `kernel/dtb/` del BSP.)

```bash
sudo reboot
```

Si sigue siendo anómalo, usa el método alternativo de la Sección 8.

## 8. Método alternativo (ruta oficial)

Si el flasheo híbrido deja particiones/UEFI/periféricos anómalos:

1. Flashea el BSP de la placa de destino **oficial** según el flujo de Seeed (no flashees el mfi del DevKit).
2. Extrae `/home` de la copia de seguridad (`nvme0n1p1.tar.zst`) o sigue [Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/es/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/).
3. Restaura `/home` en la placa de destino y luego reinstala el software a nivel de sistema según sea necesario (`/usr`, `/etc`, Docker, etc. requieren un manejo separado).

Ventajas: firmware de placa más limpio. Desventajas: no es un clon completo del disco `/`.

## 9. Referencia rápida de rutas clave

| Tipo | Ruta (bajo `Linux_for_Tegra/`) |
| --- | --- |
| DK mfi | `mfi_jetson-orin-nano-devkit-nvme.tar.gz` |
| Classic Bundle mfi | `mfi_recomputer-orin-j401.tar.gz` |
| Super Bundle mfi | `mfi_recomputer-orin-super-j401.tar.gz` |
| Classic conf | `recomputer-orin-j401.conf` |
| Super conf | `recomputer-orin-super-j401.conf` |
| HDMI DCB | `kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo` |
| Classic dual IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo` |
| Super quad IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo` |
| J401 DTB | `kernel/dtb/tegra234-j401-p3768-0000+p3767-*-recomputer.dtb` |
| SKU0005 DTB | `kernel/dtb/tegra234-p3768-0000+p3767-0005-nv-super.dtb` |

## 10. Resumen del flujo

```text
[Host] Extract L4T + apply_binaries + nvbuild
          │
          ▼
[DevKit APX] backup -c jetson-orin-nano-devkit-nvme
          │
          ├─► (optional) --use-backup-image → mfi_jetson-orin-nano-devkit-nvme
          │
          ├─► snapshot backup_images_dk_sku0005
          │         │
          │         ├─ APP-only (remove QSPI)
          │         └─► external APP
          │
          └─► [APX] target board conf → generate QSPI
                    │           │
                    │           ├─ Classic: recomputer-orin-j401 internal
                    │           └─ Super:   recomputer-orin-super-j401-nvme external
                    │
                    ▼
              assemble mfi_recomputer-orin-<target>
                    │
                    ▼
              [target APX] --flash-only
                    │
                    ▼
              check display/USB/NVMe/user environment
```

## 11. Preguntas frecuentes

**P: El directorio y el `.tar.gz` existen: ¿todavía necesito extraerlo?**  
R: No. Si existe el directorio `mfi_recomputer-orin-*`, haz `cd` en él y ejecuta `--flash-only`.

**P: ¿El módulo de la placa de destino no es 0005?**  
R: Cambia `BOARDSKU`, elige el DTB correspondiente según `p3767_super_overlay` en la configuración de la placa de destino y luego regenera QSPI.

**P: Solo quiero conservar `/home`, no clonar todo el disco.**  
R: Usa el método alternativo de la Sección 8. Es más sencillo y fiable.

**P: ¿Puedo renombrar y flashear el bundle híbrido Classic en Super?**  
R: No. Su pinmux y sus overlays de cámara son diferentes. Regenera el QSPI correspondiente.

**P: ¿Por qué no usar directamente `--use-backup-image`?**  
R: También puede reutilizar `QSPI0.img` del DevKit. El método híbrido solo debe reutilizar la APP.

**P: ¿Qué pasa si las capacidades de las unidades de origen y destino son diferentes? (Super)**  
R: Genera la GPT para la unidad de destino y reemplaza solo la carga útil de APP. La APP ampliada debe caber en la nueva partición APP.

**P: ¿Por qué el ejemplo de la wiki del BSP DIY usa `recomputer-orin-j401`?**  
R: Ese ejemplo asume que **tanto el origen como el destino son placas de Seeed**. Cuando el origen es un DevKit oficial, la copia de seguridad debe usar primero `jetson-orin-nano-devkit-nvme` y luego seguir este tutorial híbrido para adaptarse a la placa de destino.

## Notas técnicas

### Nota técnica A. Consistencia del primer arranque en Super

Comprueba tres requisitos de consistencia antes de archivar:

1. `root=PARTUUID=...` en `boot.img` debe coincidir con el GUID único de la partición APP en la GPT externa;
2. el UUID de `/boot/efi` en `/etc/fstab` de la APP del DevKit debe coincidir con el UUID FAT del nuevo `esp.img`;
3. si el kernel RT clonado del DevKit se bloquea en `lan743x` en el LAN7430 de Super, preinstala:

```text
/etc/modprobe.d/blacklist-lan743x-super-hybrid.conf
```

```conf
blacklist lan743x
install lan743x /bin/false
```

Las dos primeras discrepancias impiden montar la raíz o hacen que se entre en modo de mantenimiento. Cambiar el PARTUUID en vivo con `sgdisk` en un initrd de reparación es una medida de recuperación, no un paso de compilación reproducible. Regenera la GPT y `boot.img` juntos y luego parchea la APP antes de crear el archivo final.

### Nota técnica B. Permiso denegado en NFS

Si aparece `/mnt/external/...: Permission denied` mientras se escribe la recuperación o la APP, asegúrate de que el cliente NFS pueda atravesar todos los directorios padre en la ruta del mfi.

Por ejemplo, si el modo del directorio home del usuario es `750`, usa temporalmente `751` durante el flasheo y restáuralo inmediatamente después:

```bash
sudo chmod 751 /home/$USER
# Re-enter APX and flash
sudo chmod 750 /home/$USER
```

El modo `751` solo añade permiso de recorrido; no permite que otros usuarios listan el directorio. No uses `777`.

### Nota técnica C. Limitación de Ethernet por cable lan743x en Super

El kernel RT clonado del DevKit usado en esta prueba provocó un Oops de kernel al cargar `lan743x` para el LAN7430 de Super. El BSP híbrido final añade a la lista negra `lan743x` (ver el punto 3 de [Tech Note A](#tech-note-a-super-first-boot-consistency)), por lo que el Ethernet por cable integrado no está disponible temporalmente; Wi‑Fi no se ve afectado.

Se trata de una limitación de compatibilidad entre el driver de kernel de la APP de origen y el hardware, no de un fallo de QSPI o pinmux de Super. Porta o actualiza un driver compatible y ejecuta pruebas de estrés antes de depender de Ethernet por cable en producción.

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
