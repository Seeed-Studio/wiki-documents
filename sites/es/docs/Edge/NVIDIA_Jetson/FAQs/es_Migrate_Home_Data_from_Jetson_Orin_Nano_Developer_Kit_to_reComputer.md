---
description: Esta guía explica cómo migrar datos de usuario desde un NVIDIA Jetson Orin Nano Developer Kit que ejecuta JetPack 6 a un reComputer de Seeed Studio haciendo copia de seguridad y restaurando solo el directorio /home. Utiliza reComputer J4012 y reComputer Super J4012 como ejemplos de destino y evita copiar archivos de arranque específicos de la placa, device trees, módulos del kernel y configuración BSP desde el developer kit.
title: Migrar datos de /home desde Jetson Orin Nano Developer Kit a reComputer
keywords:
  - reComputer
  - reComputer Super
  - Orin Nano Developer Kit
  - Jetson
  - JetPack 6
  - Copia de seguridad
  - Restaurar
  - Migración
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer
sku: E2025021104, E2025032601
last_update:
  date: 06/05/2026
  author: Dayu
createdAt: '2026-06-04'
updatedAt: '2026-06-08'
url: https://wiki.seeedstudio.com/es/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/
---

# Migrar datos de /home desde Jetson Orin Nano Developer Kit a reComputer

## Introducción

Al pasar de un NVIDIA Jetson Orin Nano Developer Kit a un reComputer de Seeed Studio, es posible que quieras conservar tu espacio de trabajo de usuario, archivos de proyecto, entornos de Conda, scripts y datos de aplicaciones. Sin embargo, no se recomienda restaurar directamente una imagen completa del sistema del developer kit en un reComputer porque la carrier board, el device tree, el bootloader y la configuración BSP son diferentes.

Este wiki muestra cómo usar el [proyecto de migración de copia de seguridad de reComputer Classic a Super](https://github.com/jjjadand/reComputer_classic-backup-to-super.git) para migrar solo `/home` desde el Jetson Orin Nano Developer Kit de origen a un reComputer de destino. En esta guía, se utilizan [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) y [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html) como ejemplos de destino. Primero flashea el reComputer de destino con su BSP Seeed JetPack 6 correspondiente y luego restaura el paquete de `/home` sobre ese sistema limpio de reComputer.

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Obtener J4012</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Obtener Super J4012</font></span></strong>
  </a>
</div>

## Referencia de hardware

Esta guía utiliza el Jetson Orin Nano Developer Kit como dispositivo de origen y reComputer J4012 / reComputer Super J4012 como ejemplos de destino. La misma idea de migración solo de `/home` también se puede usar para otras combinaciones de Jetson a reComputer cuando ambos sistemas ejecutan JetPack 6 / L4T R36 y el destino ha sido flasheado con su BSP Seeed correspondiente.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>Dispositivo de origen</th>
      <th>Ejemplo de destino 1</th>
      <th>Ejemplo de destino 2</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp" />
        </div>
        <br />
        Jetson Orin Nano Developer Kit
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">reComputer J4012</a>
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">reComputer Super J4012</a>
      </td>
    </tr>
  </tbody>
</table>
</div>

## Qué hace esta migración

El paquete de migración contiene:

- `/home`
- metadatos del sistema de origen
- metadatos de usuarios y grupos de `/home`
- lista de paquetes APT instalados manualmente, si está disponible
- lista de paquetes instalados de dpkg, si está disponible
- checksums de paquetes

Intencionadamente no restaura:

- `/boot`
- `/boot/dtb`
- `/lib/modules`
- `/usr/lib/modules`
- `/etc/nv_boot_control.conf`
- `/etc/fstab`
- particiones del bootloader
- archivos BSP específicos de la placa

:::caution
Este flujo de trabajo es para migración de datos de usuario, no para clonado completo del sistema. Las aplicaciones instaladas bajo `/usr`, los servicios configurados bajo `/etc`, las imágenes de Docker bajo `/var/lib/docker` y los cambios BSP a nivel de sistema no se migran. Vuelve a instalar o reconfigura esos componentes en el reComputer de destino después de la restauración de `/home`.
:::

## Requisitos previos

- Jetson Orin Nano Developer Kit de NVIDIA de origen ejecutando JetPack 6 / L4T R36
- reComputer J4012 o reComputer Super J4012 de destino ejecutando su BSP Seeed JetPack 6 correspondiente
- Acceso a red o almacenamiento extraíble para transferir el paquete
- Suficiente espacio libre para un paquete comprimido de copia de seguridad de `/home`
- `git`, `tar`, `sha256sum`, `awk` y `find`

:::note
Antes de restaurar el paquete, flashea el reComputer de destino con el firmware correcto de Seeed. Para reComputer J4012, consulta [Flashear JetPack OS en la Carrier Board J401](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/). Para reComputer Super J4012, consulta [Primeros pasos con reComputer Super](https://wiki.seeedstudio.com/es/recomputer_jetson_super_getting_started/#flash-jetpack-os).
:::

## Descripción general del flujo de trabajo

1. Flashea el reComputer de destino con el BSP Seeed JetPack 6 correspondiente.
2. Clona el proyecto de migración en el Jetson Orin Nano Developer Kit de origen.
3. Crea un paquete de migración de `/home` en el dispositivo de origen.
4. Copia el paquete al reComputer de destino.
5. Inspecciona o realiza una ejecución en seco de la restauración en el destino.
6. Restaura `/home` en el destino y reinicia.
7. Vuelve a instalar los paquetes de sistema o servicios necesarios que estén fuera de `/home`.

## Copia de seguridad en el Jetson Orin Nano Developer Kit de origen

**Paso 1.** Instala `git` si aún no está instalado.

```bash
sudo apt update
sudo apt install -y git
```

**Paso 2.** Clona el proyecto de migración.

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

**Paso 3.** Crea un paquete de copia de seguridad.

Sustituye `/path/to/output` por un directorio que tenga suficiente espacio libre, como una unidad USB, un SSD externo o una carpeta de red compartida.

```bash
sudo ./backup_home_jp6.sh -o /path/to/output
```

Después de que finalice la copia de seguridad, verás dos archivos:

```text
jetson-home-jp6-<hostname>-<timestamp>.tar.gz
jetson-home-jp6-<hostname>-<timestamp>.tar.gz.sha256
```

De forma predeterminada, el script excluye directorios de caché comunes para reducir el tamaño del paquete:

```text
/home/*/.cache
/home/*/.ccache
/home/*/.nv/ComputeCache
/home/*/.npm/_cacache
/home/*/.local/share/Trash
/home/*/.local/share/gvfs-metadata
```

Si necesitas una copia más cercana de los datos de caché de usuario, añade `--include-caches`:

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --include-caches
```

Si necesitas excluir datos adicionales, crea un archivo de exclusión con patrones de exclusión de tar y pásalo al script:

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --exclude-file /path/to/exclude-patterns.txt
```

:::info
El script de copia de seguridad usa `--one-file-system` para `/home`. Si montas almacenamiento externo dentro de `/home`, haz una copia de seguridad de esos datos montados por separado.
:::

## Inspeccionar el paquete de copia de seguridad

Antes de restaurar, puedes inspeccionar el paquete en el dispositivo de origen o en el dispositivo de destino.

```bash
./inspect_home_package.sh /path/to/jetson-home-jp6-xxx.tar.gz
```

El comando de inspección verifica el checksum del paquete e imprime el formato del paquete, los metadatos del sistema de origen, los usuarios de `/home` de origen y las primeras entradas en el archivo de `/home`.

## Copiar el paquete al reComputer de destino

Copia el paquete `.tar.gz` al reComputer de destino. Por ejemplo, usando `scp`:

```bash
scp /path/to/jetson-home-jp6-xxx.tar.gz seeed@<recomputer-ip>:/home/seeed/
```

También puedes copiar el paquete usando una unidad USB o un SSD externo.

:::note
Conserva el archivo `.sha256` como un registro externo de checksum. El script de restauración también verifica los checksums incrustados dentro del paquete de migración.
:::

## Restaurar en el reComputer de destino

**Paso 1.** Asegúrate de que el reComputer de destino ya ha sido flasheado con el BSP Seeed JetPack 6 correcto y ha completado la configuración del primer arranque.

**Paso 2.** Clona el proyecto de migración en el destino.

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

:::note
El nombre del script de restauración contiene `super` porque el proyecto original se creó para un escenario de migración a reComputer Super. En esta guía, todavía se usa solo para verificar y superponer el paquete de `/home` en el reComputer de destino seleccionado.
:::

**Paso 3.** Ejecuta primero una ejecución en seco.

```bash
./restore_home_on_super_jp6.sh --dry-run /home/seeed/jetson-home-jp6-xxx.tar.gz
```

La ejecución en seco verifica el paquete e imprime un resumen sin restaurar archivos.

**Paso 4.** Restaura el paquete.

```bash
sudo ./restore_home_on_super_jp6.sh --create-users /home/seeed/jetson-home-jp6-xxx.tar.gz
```

La opción `--create-users` crea usuarios y grupos de origen que falten por UID/GID antes de extraer el paquete. Esto ayuda a preservar la propiedad de los archivos cuando el usuario de origen aún no existe en el sistema reComputer de destino.

De forma predeterminada, el script de restauración crea un archivo de reversión del `/home` actual del destino antes de superponer el paquete de origen:

```text
/var/backups/jetson_home_migration/super-home-before-restore-<timestamp>.tar.gz
```

Si `/var/backups` no tiene suficiente espacio, usa otro directorio de copia de seguridad:

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --backup-dir /path/to/backup-dir /home/seeed/jetson-home-jp6-xxx.tar.gz
```

Usa `--no-backup` solo si ya tienes una copia de seguridad independiente del `/home` de destino:

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --no-backup /home/seeed/jetson-home-jp6-xxx.tar.gz
```

:::caution
La operación de restauración superpone archivos sobre `/home`. Sobrescribe los archivos coincidentes desde el paquete, pero no elimina los archivos que existen solo en el destino.
:::

**Paso 5.** Reinicia el destino.

```bash
sudo sync
sudo reboot
```

## Validar la migración

Después de que el reComputer de destino se reinicie, comprueba los usuarios y archivos restaurados:

```bash
ls -lah /home
id <source-user>
du -sh /home/<source-user>
```

Luego valida los datos de tus aplicaciones y los entornos de usuario:

```bash
ls -lah /home/<source-user>/projects
conda env list
python3 --version
```

Si usas herramientas de Jetson como `jtop`, ejecútalas de nuevo en el reComputer de destino:

```bash
jtop
```

:::info
Si falta un comando de aplicación después de la migración, probablemente se instaló fuera de `/home`. Usa los metadatos del paquete para comprobar la lista de paquetes de origen y luego vuelve a instalar el software necesario en el sistema reComputer de destino.
:::

## Revertir el `/home` de destino

Si necesitas restaurar el estado de `/home` de destino que existía antes de la migración, utiliza el archivo de reversión creado por el script de restauración.

```bash
sudo tar --extract \
  --gzip \
  --file /var/backups/jetson_home_migration/super-home-before-restore-xxx.tar.gz \
  --directory / \
  --preserve-permissions \
  --same-owner \
  --acls \
  --xattrs \
  --xattrs-include='*' \
  --numeric-owner \
  --overwrite

sudo sync
sudo reboot
```

## Solución de problemas

### El script advierte que el sistema no parece JetPack 6

Los scripts comprueban `/etc/nv_tegra_release` y esperan L4T R36. Confirma que tanto el origen como el destino estén ejecutando JetPack 6.

```bash
cat /etc/nv_tegra_release
```

### La propiedad de los archivos parece numérica después de la restauración

Esto normalmente significa que el destino no tiene los mismos usuarios UID/GID que el origen. Ejecuta el comando de restauración con `--create-users`, o crea manualmente usuarios con UID/GID coincidentes antes de restaurar.

### El paquete es demasiado grande

Utiliza las exclusiones de caché predeterminadas, elimina archivos innecesarios de `/home` o proporciona un archivo de patrón de exclusión adicional con `--exclude-file`.

### Algunos archivos cambiaron durante la copia de seguridad

El script de copia de seguridad acepta el estado `1` de tar, que normalmente significa que archivos en uso cambiaron durante la copia de seguridad. Cierra las aplicaciones en ejecución y repite la copia de seguridad si los archivos cambiados son importantes.

### Faltan imágenes de Docker o servicios del sistema

Esta migración solo restaura `/home`. Las imágenes de Docker, los servicios del sistema, las aplicaciones instaladas con APT y los archivos bajo `/etc`, `/usr` y `/var` deben volver a instalarse o reconfigurarse en el sistema reComputer de destino.

## Recursos

- [Proyecto de migración de copia de seguridad de reComputer Classic a Super](https://github.com/jjjadand/reComputer_classic-backup-to-super.git)
- [Crear copia de seguridad y restaurar en reComputer](https://wiki.seeedstudio.com/es/create_backup_and_restore_on_recomputer/)
- [Cómo actualizar Jetson Orin Nano Developer Kit a Super Kit](https://wiki.seeedstudio.com/es/update_orin_nano_developer_kit_to_super_kit/)
- [Flashear JetPack OS a la placa portadora J401](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/)
- [Primeros pasos con reComputer Super](https://wiki.seeedstudio.com/es/recomputer_jetson_super_getting_started/)
- [Guía rápida de dispositivos Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

