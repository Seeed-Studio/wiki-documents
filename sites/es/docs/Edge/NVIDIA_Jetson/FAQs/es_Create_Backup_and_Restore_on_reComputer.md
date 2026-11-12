---
description: "Realiza copias de seguridad y restaura una imagen de reComputer J3011 en JetPack 5.1.3 y 6.2: clona el sistema a NVMe o USB y luego escríbelo en un nuevo dispositivo."
title: Crear copia de seguridad y restaurar en reComputer
keywords:
  - jetson
  - BSP
  - L4T
  - Backup
  - Restore
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /create_backup_and_restore_on_recomputer
last_update:
  date: 04/11/2025
  author: Zibo
createdAt: '2025-04-14'
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/es/create_backup_and_restore_on_recomputer/
---

# Crear copia de seguridad y restaurar en reComputer

## Introducción

El reComputer ofrece hasta 275 TOPS de rendimiento de IA en una carcasa compacta para el edge. Reinstalar manualmente una unidad ya configurada es lento, por lo que el flujo siguiente usa `l4t_backup_restore.sh` para leer la imagen del sistema NVMe de un [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) en un host y luego escribir esa imagen en otra unidad. Se cubren tanto JetPack 5.1.3 como JetPack 6.2.

:::note
Nuestra plataforma de pruebas es reComputer J3011; JetPack 5.1.3 y JetPack 6.2 se proporcionan como referencia. Selecciona la sección adecuada según tu versión de JetPack.
:::

## Requisitos previos

- Ordenador host con Ubuntu
- Cable de transmisión de datos USB Type-C
- reComputer J3011 (con sistema operativo JetPack 5.1.3 o JetPack 6.2)

:::info
Instala y configura el software y las aplicaciones necesarios en tu reComputer. Asegúrate de que estas modificaciones no afecten a la funcionalidad de arranque del dispositivo. Se recomienda reiniciar el dispositivo después de realizar cambios para confirmar la estabilidad.

<div align="center"><img alt="jtop ejecutándose en el terminal del reComputer, mostrando la versión de JetPack instalada" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
Como en la captura de pantalla anterior, instalamos el software jtop, con el que podemos usar estos comandos directamente en el terminal.
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### Realizar copia de seguridad del sistema


**Paso 1.** Pon el dispositivo en modo de recuperación según esta [página wiki](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/#entrar-en-modo-de-recuperación-forzada).

**Paso 2.** Obtén el BSP de JetPack correspondiente a tu módulo Jetson. Para JetPack 5.1.3, descarga el BSP Jetson Linux R35.5.0 desde el [sitio oficial de NVIDIA.](https://developer.nvidia.com/embedded/jetson-linux-r3550)
<div align="center"><img alt="Página de descarga de NVIDIA Jetson Linux R35.5.0 BSP utilizada para JetPack 5.1.3" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Paso 3.** Extrae el archivo BSP para acceder al directorio Linux_for_Tegra.

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img alt="Salida de ls del directorio Linux_for_Tegra extraído que muestra flash.sh, apply_binaries.sh y los archivos .conf de la placa" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>

**Paso 4.** Copia el contenido de Linux_for_Tegra a tu directorio del paquete de flasheo de JetPack (por ejemplo, mfi_recomputer-orin).
:::note
"directorio del paquete de flasheo" es el directorio de archivos utilizado durante el proceso de flasheo del sistema.
:::

Usa las opciones `-rn` para conservar los archivos existentes:

```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**Paso 5.** Ve a tu directorio del paquete de flasheo de JetPack:

```bash
cd /path/to/mfi_recomputer-orin
```

**Paso 6.** Ejecuta el script de copia de seguridad, especificando tu dispositivo de almacenamiento y el nombre de copia de seguridad deseado:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```

:::info
-b `<target_board>` sustitúyelo por tu dispositivo

:::

:::note
puedes ir a tu directorio del paquete de flasheo de Jepack y encontrar un archivo `xxx.conf`.
`xxx` es tu `<target_board>`

```bash
ls | grep *.conf
```

<div align="center"><img alt="Salida de ls del directorio del paquete de flasheo con recomputer-orin.conf resaltado" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img alt="Terminal del host tras iniciar la copia de seguridad: l4t_initrd_flash.sh generando la línea de comandos de arranque RCM" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

espera pacientemente hasta que termine.
Si todo va bien, verás algo similar a la captura de pantalla siguiente en el terminal:

<div align="center"><img alt="Finalización de la copia de seguridad con la imagen escrita en el directorio del host" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
Durante este proceso, tu dispositivo puede reiniciarse muchas veces como en el proceso de flasheo; no se recomienda usar máquinas virtuales o WSL porque podrían perder la conexión y hacer que el proceso de copia de seguridad/restauración falle. Puedes encontrarte con algunos archivos que faltan; puedes abrir `recomputer-orin.conf` y eliminar el archivo que no exista.
Normalmente se trata de archivos objeto temporales de superposición del árbol de dispositivos; no afectan a los resultados de copia de seguridad y restauración. Pero si realizaste modificaciones en el BSP, tendrás que fusionar tus archivos de superposición.
:::

### Restaurar el sistema

**Paso 1.** Inserta un [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) nuevo y vacío en tu reComputer.

<div align="center"><img alt="SSD original aún en la placa, resaltado, junto al nuevo SSD M.2 2280 vacío" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Paso 2.** Entra en modo de recuperación forzada como se [describió anteriormente.](#Recovery)

**Paso 3.** En tu sistema host, ve a tu directorio del paquete de flasheo de JetPack y ejecuta el comando de restauración en el host:  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

Si todo va bien, verás algo similar a la captura de pantalla siguiente en el terminal:
<div align="center"><img alt="Finalización del comando de restauración con la imagen escrita de nuevo en la unidad NVMe" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Paso 4.** Enciende el dispositivo Jetson, usa el nombre de usuario y la contraseña que configuramos anteriormente. Y prueba algún software que instalamos previamente. Si funciona, entonces nuestra restauración ha sido exitosa.
<div align="center"><img alt="jtop disponible de nuevo en el sistema restaurado, confirmando que la imagen arrancó" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
Como habíamos instalado jtop en nuestro sistema anterior, podemos lanzar jtop directamente en el terminal del nuevo sistema.

:::info
Además, se han probado los siguientes casos de copia de seguridad y restauración:  

- Restaurar la copia de seguridad al SSD original.
- Restaurar la copia de seguridad a un SSD diferente.  
- Restaurar la copia de seguridad a la misma placa carrier, con el módulo Jetson del mismo lote y SSDs diferentes.

:::

## JetPack 6.2
### Realizar copia de seguridad del sistema

Para JetPack 6.2 (L4T 36.4.3), el proceso de copia de seguridad requiere descargar el firmware BSP compilado de Seeed y compilar el código fuente antes de realizar la copia de seguridad.

**Paso 1.** Descarga el firmware BSP compilado de Seeed: [L4T-36.4.3](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/L4T36-4-3_plus.tar)

**Paso 2.** Extrae el paquete descargado y genera el contenido necesario usando los siguientes comandos en el terminal de tu PC:

```bash
sudo tar xpf L4T36-4-3_plus.tar
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

**Paso 3.** Configura las variables de entorno en el directorio extraído (donde se encuentra el paquete tar.gz):

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

**Paso 4.** Ve al directorio source y compila el código fuente (este proceso llevará algún tiempo):

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

**Paso 5.** Una vez completada la compilación, copia e instala los componentes compilados:

```bash
./do_copy.sh
./nvbuild.sh -i
```

**Paso 6.** El directorio de trabajo ya está preparado. Ve al directorio `Linux_for_Tegra/`, pon el dispositivo en modo de recuperación según esta [página wiki](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/#entrar-en-modo-de-recuperación-forzada) y ejecuta el script de copia de seguridad:

```bash
cd ../
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin-j401
```

:::info
-b `<target_board>` sustitúyelo por tu dispositivo. Para JetPack 6.2, la placa de destino predeterminada es `recomputer-orin-j401`.
:::

Espera pacientemente hasta que termine. Si todo va bien, verás un mensaje de éxito en el terminal.

:::note
Durante este proceso, tu dispositivo puede reiniciarse muchas veces como en el proceso de flasheo; no se recomienda usar máquinas virtuales o WSL porque podrían perder la conexión y hacer que el proceso de copia de seguridad/restauración falle.
:::

### Restaurar el sistema

**Paso 1.** Inserta un [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) nuevo y vacío en tu reComputer.

**Paso 2.** Entra en modo de recuperación forzada como se [describió anteriormente.](#Recovery)

**Paso 3.** En tu sistema host, ve a tu directorio `Linux_for_Tegra/` y ejecuta el comando de restauración en el host:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin-j401
```

Si todo va bien, verás un mensaje de éxito en el terminal.

**Paso 4.** Enciende el dispositivo Jetson, usa el nombre de usuario y la contraseña que configuramos anteriormente. Y prueba algún software que instalamos previamente. Si funciona, entonces nuestra restauración ha sido exitosa.

:::info
Además, se han probado los siguientes casos de copia de seguridad y restauración:

- Restaurar la copia de seguridad al SSD original.
- Restaurar la copia de seguridad a un SSD diferente.
- Restaurar la copia de seguridad a la misma placa carrier, con el módulo Jetson del mismo lote y SSDs diferentes.
:::

## Recursos

- [Flashear el sistema operativo JetPack en la placa carrier J401](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/)
- [Hoja de datos de reComputer J30x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [Hoja de datos de reComputer J40x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [Esquemático de reComputer J30/J40](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [Archivo 3D de reComputer J30/J40](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Catálogo de series Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de éxito de Edge AI de Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparación de series Jetson de Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Resumen de dispositivos Jetson de Seeed en una página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Ejemplos de Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## Preguntas frecuentes

**¿En qué host se puede ejecutar la copia de seguridad?**
En un host Ubuntu con el cable USB Type-C conectado al reComputer. No lo ejecutes en una máquina virtual ni en WSL: el dispositivo se reinicia varias veces durante el proceso y una conexión USB interrumpida deja una imagen escrita a medias.

**¿Qué hacen las banderas `-b` y `-r`?**
`-b` lee la imagen del sistema desde el módulo hacia el directorio del paquete de flasheo; `-r` escribe una imagen de vuelta al NVMe. Ambas usan `-e nvme0n1` para el dispositivo de almacenamiento y el nombre de la placa de destino, que es `recomputer-orin` en JetPack 5.1.3 y `recomputer-orin-j401` en JetPack 6.2.

**La copia de seguridad se detiene con errores de archivo faltante.**
Es posible que no existan objetos temporales de superposición de device-tree referenciados en `recomputer-orin.conf`. Elimina esas líneas del archivo `.conf` y vuelve a ejecutar: no afectan a la imagen a menos que hayas modificado el BSP, en cuyo caso fusiona tus superposiciones en su lugar.

**¿Se puede usar la imagen en un SSD diferente o en una unidad diferente?**
Sí. Se ha probado la restauración en el SSD original, en un SSD diferente y en otra unidad de la misma placa carrier y lote de módulo. Un SKU de módulo diferente es una imagen diferente y no está cubierto.

## Recursos relacionados

- [Flashear JetPack en reComputer J4012](/es/reComputer_J4012_Flash_Jetpack/)
- [Desplegar actualizaciones OTA en reComputer](/es/deploy_ota_on_recomputer/)
- [Página de producto de reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html)
- [Jetson Linux R35.5.0 BSP](https://developer.nvidia.com/embedded/jetson-linux-r3550)

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
