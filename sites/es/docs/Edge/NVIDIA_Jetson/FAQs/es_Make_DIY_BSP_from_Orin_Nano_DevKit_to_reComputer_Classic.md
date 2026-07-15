---
description: Clona un entorno completo del Jetson Orin Nano Developer Kit y construye un BSP híbrido para Seeed reComputer Classic J4011/J4012
title: Crear un BSP DIY desde Orin Nano DevKit a reComputer Classic
keywords:
  - reComputer
  - reComputer Classic
  - J4011
  - J4012
  - Orin Nano Developer Kit
  - BSP
  - Hybrid
  - Jetson
  - JetPack
  - custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic
sku: 110110144, 110110145
last_update:
  date: 07/13/2026
  author: Zuhao
createdAt: '2026-07-10'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/es/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic/
---

Este wiki muestra cómo clonar un entorno de desarrollo completo desde un **NVIDIA Jetson Orin Nano Developer Kit**, construir un BSP híbrido que pueda flashearse en **Seeed reComputer Classic (J4011/J4012, configuración de placa `recomputer-orin-j401`)** y completar el flasheo.

Amplía el flujo de BSP DIY con la misma carrier. Si tu origen y destino son ambas placas de Seeed, usa en su lugar [Creating a Custom BSP Package from Jetson Development Environment](/es/make_diy_bsp_for_jetson/).

Documentos relacionados:

- [Creating a Custom BSP Package from Jetson Development Environment](/es/make_diy_bsp_for_jetson/)
- [Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/es/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/)
- [Flash JetPack to a Selected Product](/es/flash/jetpack_to_selected_product/)

Esta guía usa JetPack 6.2 / L4T 36.4.3 como ejemplo (módulo **SKU 0005** = Orin Nano 8GB).

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
      <td>A. Clon con la misma carrier</td>
      <td><code>mfi_jetson-orin-nano-devkit-nvme.tar.gz</code></td>
      <td>Reflashear el <strong>DevKit</strong> con un clon completo del entorno</td>
    </tr>
    <tr>
      <td>B. Classic Bundle</td>
      <td><code>mfi_recomputer-orin-j401.tar.gz</code></td>
      <td>Flashear <strong>Classic J4011</strong>: QSPI a nivel de placa J401 + APP completa del DevKit (incluyendo <code>/home</code>)</td>
    </tr>
    <tr>
      <td>C. Fallback seguro</td>
      <td>BSP oficial J401 + migrar solo <code>/home</code></td>
      <td>Usar cuando los resultados híbridos sean anormales</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
**No** flashees directamente el paquete `mfi_jetson-orin-nano-devkit-nvme` del DevKit en Classic.  
**No** consideres que editar un solo `.dtb` dentro del directorio mfi equivale a una adaptación de placa.
:::

## Requisitos previos

### Hardware

- Origen: Orin Nano **Developer Kit** (este ejemplo usa el módulo **SKU 0005** = Orin Nano 8GB, arranque NVMe)
- Destino: Seeed **reComputer Classic J4011/J4012** (carrier J401; idealmente el módulo también debería ser 0005)
- Host: Ubuntu 22.04 x86_64, cable USB Type-C (puerto de flasheo)
- Disco: reserva **≥ 100GB** de espacio libre (copia de seguridad + doble mfi + snapshots)

### Dependencias en el host

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

Antes de la copia de seguridad/flasheo:

```bash
sudo systemctl stop udisks2.service
sudo service nfs-kernel-server start
lsusb | grep 0955:7523   # must show NVIDIA Corp. APX
```

### Comparación de placas (este ejemplo)

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Elemento</th>
      <th>DevKit</th>
      <th>Classic J4011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>board-name</td>
      <td><code>jetson-orin-nano-devkit-nvme</code></td>
      <td><code>recomputer-orin-j401</code></td>
    </tr>
    <tr>
      <td>Archivo de configuración</td>
      <td><code>p3768-0000-p3767-0000-a0-nvme.conf</code></td>
      <td><code>recomputer-orin-j401.conf</code></td>
    </tr>
    <tr>
      <td>Pinmux</td>
      <td><code>...-dp-a03</code> (DP)</td>
      <td><code>...-hdmi-a03</code> (HDMI)</td>
    </tr>
    <tr>
      <td>Overlay</td>
      <td>Dinámico del DevKit, etc.</td>
      <td><code>tegra234-dcb-p3767-0000-hdmi.dtbo</code> + <code>tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo</code></td>
    </tr>
    <tr>
      <td>DTB principal SKU0005</td>
      <td><code>...-0005-nv(-super).dtb</code></td>
      <td><strong>Sigue usando</strong> <code>tegra234-p3768-0000+p3767-0005-nv-super.dtb</code></td>
    </tr>
  </tbody>
</table>
</div>

Ejemplo de `board_spec` de copia de seguridad:

```text
3767-300-0005-V.2-1-1-jetson-orin-nano-devkit-nvme-
```

:::danger
La serie reComputer Classic no tiene refrigeración suficiente para soportar el modo MAXN Super. Si flasheas JetPack 6.2 en un dispositivo Classic, **no habilites MAXN**.
:::

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

```bash
test -f Linux_for_Tegra/recomputer-orin-j401.conf
test -f Linux_for_Tegra/jetson-orin-nano-devkit-nvme.conf
ls Linux_for_Tegra/kernel/dtb/tegra234-j401-*-recomputer.dtb
ls Linux_for_Tegra/kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
```

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
**No** uses `recomputer-orin-j401` para la primera copia de seguridad cuando el origen es un DevKit. Eso corromperá `board_spec` y las líneas base posteriores.
:::

### 2.3 Verificación

```bash
ls -lah tools/backup_restore/images/
head -5 tools/backup_restore/images/nvpartitionmap.txt
```

Deberías ver:

- `board_spec` contiene `jetson-orin-nano-devkit-nvme`
- `nvme0n1p1.tar.zst` (o la APP grande convertida posteriormente) tiene tamaño de **varios GB**
- `QSPI0.img` existe (esto es la QSPI del **DevKit**; el híbrido no debe reutilizarla como QSPI de Classic)

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-3.3-verify.png"/></div>

Recomendado: crea un snapshot inmediatamente:

```bash
sudo cp -a tools/backup_restore/images ~/backup_images_dk_sku0005
```

## 3. Construir BSP DIY de DevKit con la misma carrier (opcional)

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
**Solo para reflashear el DevKit. No flashees Classic con este paquete.**
:::

## 4. Lectura obligatoria: la trampa de la QSPI

Con `--use-backup-image`, `convert_backup_image_to_initrd_flash` coloca:

| Contenido de la copia de seguridad | Destino |
| --- | --- |
| NVMe / APP | `tools/kernel_flash/images/external/` |
| `QSPI0.img` de **origen** | `tools/kernel_flash/images/internal/` |

Por lo tanto:

| Enfoque incorrecto | Resultado |
| --- | --- |
| Solo editar `mfi/.../rootfs` o un `.dtb` | Ineficaz (lo que realmente se flashea es bak / QSPI) |
| Copia de seguridad del DevKit y luego directamente `recomputer-orin-j401` + `--use-backup-image` | **Sigue flasheando la QSPI del DevKit (pinmux DP)**; HDMI/USB pueden ser incorrectos |
| Cambiar el conf y luego `--flash-only` | `--flash-only` **no** reconstruye las imágenes a partir del conf |

Lo que realmente difiere en Classic J4011 es el **pinmux HDMI + overlay DCB/cámara** en `recomputer-orin-j401.conf`:

```bash
PINMUX_CONFIG="tegra234-mb1-bct-pinmux-p3767-hdmi-a03.dtsi"
PMC_CONFIG="tegra234-mb1-bct-padvoltage-p3767-hdmi-a03.dtsi"
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo"
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo"
```

Para SKU **0005**, el nombre de archivo DTB principal sigue siendo el `*-0005-nv-super.dtb` de NVIDIA. **No** fuerces el cambio a `*-0000-recomputer.dtb` (esa ruta es para NX 16GB).

## 5. Híbrido B': construir el Classic J4011 Bundle

Idea central:

1. **APP**: seguir usando la copia de seguridad del DevKit (entorno completo de usuario)
2. **QSPI**: regenerar con `recomputer-orin-j401` (**sin** `--use-backup-image`)
3. Ensamblar en `mfi_recomputer-orin-j401`

```text
DevKit backup APP  ──►  external/ (nvme0n1p1_bak.img, etc.)
J401 conf new QSPI  ──►  internal/ (QSPI shards, not DevKit monolithic QSPI0.img)
                     └──► mfi_recomputer-orin-j401(.tar.gz)
```

### 5.1 Preparar solo APP (eliminar la QSPI del DevKit)

```bash
cd Linux_for_Tegra
sudo cp -a ~/backup_images_dk_sku0005 \
  tools/backup_restore/images_app_only
sudo rm -f tools/backup_restore/images_app_only/QSPI0.img
sudo sed -i '/qspi/Id' tools/backup_restore/images_app_only/nvpartitionmap.txt
```

Convierte la APP solamente en imágenes `external` de initrd flash (usa el paso de conversión de la herramienta de copia de seguridad, o reutiliza la APP grande que ya está bajo `tools/kernel_flash/images/external/` del paso de empaquetado mfi del DevKit).

### 5.2 Regenerar QSPI con el conf de J401

El dispositivo debe estar en APX. Los parámetros del módulo deben coincidir con la copia de seguridad (este ejemplo: 3767 / 0005 / 300 / V.2):

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

Los registros deberían mostrar el pinmux de HDMI, por ejemplo `tegra234-mb1-bct-pinmux-p3767-hdmi-a03`.

Recomendado: guarda el nuevo QSPI como interno:

```bash
sudo cp -a tools/kernel_flash/images/internal ~/j401_qspi_internal_save
```

### 5.3 Ensamblar mfi

El directorio final debe cumplir:

| Ruta | Contenido |
| --- | --- |
| `mfi_recomputer-orin-j401/recomputer-orin-j401.conf` | Presente |
| `.../tools/kernel_flash/images/internal/` | **Nuevo QSPI de J401** (sin `QSPI0.img` monolítico de DevKit, o hash diferente al de DevKit; `flash.idx` suele ser fragmentos de varias líneas) |
| `.../tools/kernel_flash/images/external/nvme0n1p1_bak.img` | APP de **escala en GB** |

Archivo opcional:

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-j401.tar.gz mfi_recomputer-orin-j401
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-6.3-artifacts.png"/></div>

## 6. Flashear a Classic J4011

### 6.1 Poner el objetivo en APX

`lsusb` → `0955:7523 NVIDIA Corp. APX`

### 6.2 Comando de flasheo

**Si el directorio extraído ya existe localmente, no ejecutes** `tar xpf` **de nuevo:**

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

Solo cuando otro PC tiene **solo** el `.tar.gz`:

```bash
sudo tar xpf mfi_recomputer-orin-j401.tar.gz
cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

### 6.3 Mensajes normales durante el flasheo

| Registro | Significado |
| --- | --- |
| `p3768-0000-p3767-0000-a0.conf: No such file or directory` | Común con `--flash-only`; las imágenes ya están precompiladas, continuar |
| `rpcbind already running` | Se puede ignorar con seguridad |
| `blockdev: cannot open /dev/mmcblk0boot0` | Orin Nano no tiene esa partición; normalmente inofensivo |
| RCM-boot + `SSH ready` | Entrada de flasheo normal |
| DTB `...-0005-nv-super.dtb` | Correcto para SKU0005 |
| Varias líneas `internal` + `Starting to flash to qspi` | Flasheando el QSPI de J401 |
| `tar ... zstd ... nvme0n1p1_bak.img` | Restaurando APP (el paso más largo; puede tardar decenas de minutos) |

:::warning
**No apagues ni desconectes hasta que veas un mensaje de finalización correcta.**
:::

### 6.4 Comprobaciones posteriores al flasheo (en Classic)

```bash
cat /proc/device-tree/model
ls /boot/kernel_tegra234*.dtb
ls /boot/*.dtbo | grep -E 'hdmi|imx219-dual-seeed' || true

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
Sin sudo, `dmesg` puede informar `Operation not permitted`. Eso es un problema de permisos; usa `sudo`.
:::

**En el dispositivo: modelo / DTB**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-model-dtb.png"/></div>

**En el dispositivo: CUDA instalado en el DevKit original sigue funcionando**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-cuda-nvcc.png"/></div>

#### Cómo interpretar los resultados (SKU 0005)

**1) `/proc/device-tree/model` sigue mostrando DevKit — normal para SKU 0005**

Ejemplo:

```text
NVIDIA Jetson Orin Nano Engineering Reference Developer Kit Super
```

Motivo: para **SKU 0005**, `recomputer-orin-j401.conf` selecciona el `tegra234-p3768-0000+p3767-0005-nv-super.dtb` de NVIDIA. **No** cambia a `tegra234-j401-*-recomputer.dtb`, por lo que la cadena de modelo sigue pareciendo la del DevKit oficial. **No** concluyas “se flasheó el bundle de DevKit equivocado” solo a partir de esta línea.

**2) Nombres de archivo DTB bajo `/boot`**

Comúnmente visibles:

```text
/boot/kernel_tegra234-p3768-0000+p3767-0000-nv.dtb
/boot/kernel_tegra234-p3768-0000+p3767-0005-nv.dtb
```

Puede que no veas un nombre de archivo `*-0005-nv-super.dtb`; el DTB de arranque real a menudo lo elige **UEFI/QSPI**. El listado de `/boot` es solo de referencia.

**3) `grep hdmi|imx219-dual-seeed` vacío — no es un fallo por sí mismo**

Después del flasheo híbrido, `/boot/*.dtbo` a menudo todavía contiene la lista de overlays genérica de la copia de seguridad del DevKit. **Puede que no** veas `tegra234-dcb-p3767-0000-hdmi.dtbo` o `...-imx219-dual-seeed.dtbo`. Los ajustes de HDMI/cámara de Seeed se aplican principalmente a través de la ruta de **nuevo overlay de J401 QSPI / UEFI**.

**4) Júzgalo por “¿funciona?”**

| Comprobación | Ejemplo saludable |
| --- | --- |
| USB | Hubs, ratón, Bluetooth, Ethernet USB enumerados (`lsusb` muestra varios dispositivos) |
| Ethernet por cable | `enP8p1s0` etc. están `UP` |
| Wi‑Fi | `wlP1p1s0` está `UP` |
| Pantalla | El escritorio funciona; o `xrandr` tiene salida |
| Entorno de usuario | Los usuarios, software y datos originales del DevKit permanecen |
| CUDA | `nvcc --version` funciona (en este ejemplo **12.6**), lo que indica que la clonación de APP está intacta |

#### Cuándo editar `extlinux.conf`

Solo si **HDMI / USB / arranque es anómalo**, intenta añadir bajo `LABEL primary` en `/boot/extlinux/extlinux.conf`:

```text
FDT /boot/kernel_tegra234-p3768-0000+p3767-0005-nv-super.dtb
```

(Si ese archivo falta en `/boot`, prueba con `...-0005-nv.dtb`, o cópialo primero desde `kernel/dtb/` del BSP).

```bash
sudo reboot
```

Si sigue siendo anómalo, usa la Sección 7 Plan A (BSP oficial de J401 + migrar `/home`).

## 7. Plan A de respaldo (ruta oficial)

Si el flasheo híbrido deja particiones/UEFI/periféricos anómalos:

1. Flashea el BSP **oficial** `recomputer-orin-j401` según el flujo de Seeed (no flashees el mfi de DevKit).
2. Extrae `/home` de la copia de seguridad (`nvme0n1p1.tar.zst`) o sigue [Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/es/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/).
3. Restaura `/home` en Classic y luego reinstala el software a nivel de sistema según sea necesario (`/usr`, `/etc`, Docker, etc. requieren un manejo separado).

Ventajas: firmware de placa más limpio. Desventajas: no es una clonación completa del disco `/`.

## 8. Referencia rápida de rutas clave

| Tipo | Ruta (bajo `Linux_for_Tegra/`) |
| --- | --- |
| DK mfi | `mfi_jetson-orin-nano-devkit-nvme.tar.gz` |
| Classic Bundle mfi | `mfi_recomputer-orin-j401.tar.gz` |
| Conf de J401 | `recomputer-orin-j401.conf` |
| HDMI DCB | `kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo` |
| Seeed dual IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo` |
| J401 DTB | `kernel/dtb/tegra234-j401-p3768-0000+p3767-*-recomputer.dtb` |
| SKU0005 DTB | `kernel/dtb/tegra234-p3768-0000+p3767-0005-nv-super.dtb` |

## 9. Resumen del flujo

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
          └─► [APX] J401 without --use-backup-image → generate QSPI
                    │
                    ▼
              assemble mfi_recomputer-orin-j401
                    │
                    ▼
              [Classic APX] --flash-only
                    │
                    ▼
              check display/USB/NVMe/user environment
```

## 10. Preguntas frecuentes

**P: Tanto el directorio como el `.tar.gz` existen, ¿todavía necesito extraerlo?**  
R: No. Si `mfi_recomputer-orin-j401/` existe, haz `cd` dentro de él y ejecuta `--flash-only`.

**P: ¿El módulo Classic de destino no es 0005?**  
R: Cambia `BOARDSKU`, elige el DTB correspondiente según `p3767_super_overlay` en `recomputer-orin-j401.conf` y luego regenera el QSPI.

**P: Solo quiero conservar `/home`, ¿no clonar todo el disco?**  
R: Usa el Plan A (Sección 7). Es más sencillo y fiable.

**P: ¿Por qué el ejemplo del wiki de BSP DIY usa `recomputer-orin-j401`?**  
R: Ese ejemplo asume que **tanto el origen como el destino son placas de Seeed**. Cuando el origen es un DevKit oficial, la copia de seguridad primero debe usar `jetson-orin-nano-devkit-nvme`, luego seguir este tutorial de adaptación híbrida a Classic.

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
