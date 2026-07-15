---
description: Esta guía explica cómo hacer una copia de seguridad y restaurar el sistema en un reComputer J3011 para transferir tu entorno y software configurados a un nuevo dispositivo. El proceso de copia de seguridad incluye entrar en modo de recuperación, descargar el JetPack BSP y usar un script de copia de seguridad para copiar los datos. Durante la restauración, inserta un nuevo SSD, vuelve a entrar en modo de recuperación y ejecuta el comando de restauración. Este proceso permite una replicación eficiente del entorno de sistema configurado.
title: Crear copia de seguridad y restaurar en reComputer
keywords:
  - jetson
  - BSP
  - L4T
  - Copia de seguridad
  - Restaurar
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /create_backup_and_restore_on_recomputer
last_update:
  date: 04/11/2025
  author: Zibo
createdAt: '2025-04-14'
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/es/create_backup_and_restore_on_recomputer/
---

# Crear copia de seguridad y restaurar en reComputer

## Introducción

reComputer es una caja de borde inteligente potente y compacta que lleva hasta 275TOPS de rendimiento de IA moderna al borde. Cuando hayas configurado e instalado el software y el entorno necesarios para tu negocio en reComputer y necesites replicar el proyecto en otro reComputer nuevo, reinstalar el software no es eficiente. Por lo tanto, esta página wiki utilizará [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) para introducir cómo hacer una copia de seguridad de tu software y entorno existentes en la serie reComputer, lo que te permitirá restaurarlos y trasladarlos cómodamente al nuevo reComputer.

:::note
Nuestra plataforma de pruebas es reComputer J3011; JetPack 5.1.3 y JetPack 6.2 se proporcionan como referencia. Selecciona la sección adecuada según tu versión de JetPack.
:::

## Requisitos previos

- Ordenador host con Ubuntu
- Cable de transmisión de datos USB Type-C
- reComputer J3011 (con sistema operativo JetPack 5.1.3 o JetPack 6.2)

:::info
Instala y configura el software y las aplicaciones necesarios en tu reComputer. Asegúrate de que estas modificaciones no afecten a la funcionalidad de arranque del dispositivo. Se recomienda reiniciar el dispositivo después de realizar cambios para confirmar la estabilidad.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
Como en la captura de pantalla anterior, instalamos el software jtop, con el que podemos usar estos comandos directamente en el terminal.
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### Copia de seguridad del sistema


**Paso 1.** Configura el dispositivo en modo de recuperación según esta [página wiki](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/#entrar-en-modo-de-recuperación-forzada).

**Paso 2.** Obtén el JetPack BSP correspondiente a tu módulo Jetson. Para JetPack 5.1.3, descarga el BSP Jetson Linux R35.5.0 desde el [sitio oficial de NVIDIA.](https://developer.nvidia.com/embedded/jetson-linux-r3550)
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Paso 3.** Extrae el archivo BSP para acceder al directorio Linux_for_Tegra.

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>

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
puedes ir a tu directorio del paquete de flasheo de JetPack y encontrar un archivo `xxx.conf`.
`xxx` es tu `<target_board>`

```bash
ls | grep *.conf
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

espera pacientemente hasta que termine.
Si todo va bien, verás algo similar a la captura de pantalla siguiente en el terminal:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
Durante este proceso, tu dispositivo puede reiniciarse muchas veces como en el proceso de flasheo; no se recomienda usar máquinas virtuales o WSL porque podrían perder la conexión y hacer que el proceso de copia de seguridad/restauración falle. Puedes encontrarte con algunos archivos que faltan; puedes abrir el `recomputer-orin.conf` y eliminar el archivo que no exista.
Normalmente se trata de archivos de objetos temporales de superposición del árbol de dispositivos; no afectan a los resultados de copia de seguridad y restauración. Pero si realizaste modificaciones en el BSP, tendrás que fusionar tus archivos de superposición.
:::

### Restaurar el sistema

**Paso 1.** Inserta un [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) nuevo y vacío en tu reComputer.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Paso 2.** Entra en modo de recuperación forzada como se [describió anteriormente.](#Recovery)

**Paso 3.** En tu sistema host, ve a tu directorio del paquete de flasheo de JetPack y ejecuta el comando de restauración en el host:  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

Si todo va bien, verás algo similar a la captura de pantalla siguiente en el terminal:
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Paso 4.** Enciende el dispositivo Jetson, usa el nombre de usuario y la contraseña que configuramos anteriormente. Y prueba algún software que instalamos previamente. Si funciona, entonces nuestra restauración se ha realizado correctamente.
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
Como habíamos instalado jtop en nuestro sistema anterior, podemos iniciar jtop directamente en el terminal del nuevo sistema.

:::info
Además, se han probado los siguientes casos de copia de seguridad y restauración:  

- Restaurar la copia de seguridad al SSD original.
- Restaurar la copia de seguridad a un SSD diferente.  
- Restaurar la copia de seguridad a la misma placa carrier, con el módulo Jetson del mismo lote y diferentes SSD.

:::

## JetPack 6.2
### Copia de seguridad del sistema

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

**Paso 6.** El directorio de trabajo ya está preparado. Ve al directorio `Linux_for_Tegra/`, configura el dispositivo en modo de recuperación según esta [página wiki](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/#entrar-en-modo-de-recuperación-forzada) y ejecuta el script de copia de seguridad:

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

**Paso 4.** Enciende el dispositivo Jetson, usa el nombre de usuario y la contraseña que configuramos anteriormente. Y prueba algún software que instalamos previamente. Si funciona, entonces nuestra restauración se ha realizado correctamente.

:::info
Además, se han probado los siguientes casos de copia de seguridad y restauración:

- Restaurar la copia de seguridad al SSD original.
- Restaurar la copia de seguridad a un SSD diferente.
- Restaurar la copia de seguridad a la misma placa carrier, con el módulo Jetson del mismo lote y diferentes SSD.
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
- [Resumen de dispositivos Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Ejemplos de Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-principiantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
