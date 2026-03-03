---
description: Esta guía explica cómo hacer una copia de seguridad y restaurar el sistema en un reComputer J3011 para transferir tu entorno configurado y software a un nuevo dispositivo. El proceso de copia de seguridad incluye entrar en modo de recuperación, descargar el BSP de JetPack, y usar un script de copia de seguridad para copiar los datos. Durante la restauración, inserta un nuevo SSD, vuelve a entrar en modo de recuperación, y ejecuta el comando de restauración. Este proceso permite la replicación eficiente del entorno del sistema configurado.
title: Crear Copia de Seguridad y Restaurar en reComputer
keywords:
- jetson
- BSP
- L4T
- Backup
- Restore
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /es/create_backup_and_restore_on_recomputer
last_update:
  date: 04/11/2025
  author: Zibo
---

# Crear Copia de Seguridad y Restaurar en reComputer 

## Introducción
reComputer es una caja inteligente de borde potente y compacta para llevar hasta 275TOPS de rendimiento de IA moderno al borde. Cuando has configurado e instalado el software y entorno necesarios para tu negocio en recomputer, y necesitas replicar el proyecto desde otro nuevo recomputer, reinstalar el software no es eficiente. Por lo tanto, esta página wiki usará [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) para introducir cómo hacer una copia de seguridad de tu software y entorno existentes en la serie recomputer, haciendo conveniente para ti restaurar y trasplantar a la nueva recomputer.

:::note
Nuestra plataforma de prueba es reComputer J3011, JetPack 5.1.3 se proporciona como referencia.
:::


## Prerrequisitos
- Computadora Host Ubuntu
- Cable de transmisión de datos USB Type-C
- reComputer J3011 (con SO JetPack 5.1.3)

:::info
Software y aplicaciones necesarias instaladas y configuradas en tu reComputer. Asegúrate de que estas modificaciones no afecten la funcionalidad de arranque del dispositivo. Se recomienda reiniciar el dispositivo después de hacer cambios para confirmar la estabilidad.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
Como la captura de pantalla de arriba, instalamos el software jtop, donde podemos usar estos comandos en la terminal directamente.
<a id="Recovery"></a>
:::

## Hacer Copia de Seguridad del Sistema

**Paso 1.** Configurar el dispositivo en modo de recuperación consulta esta [página wiki](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode).

**Paso 2.** Obtener el BSP de JetPack correspondiente a tu módulo Jetson. Para JetPack 5.1.3, descarga el BSP Jetson Linux R35.5.0 desde [el sitio oficial de NVIDIA.](https://developer.nvidia.com/embedded/jetson-linux-r3550)
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Paso 3.** Extraer el archivo BSP para acceder al directorio Linux_for_Tegra.

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>
  

**Paso 4.** Copia el contenido de Linux_for_Tegra a tu directorio del paquete de flasheo JetPack (por ejemplo, mfi_recomputer-orin). 
:::note
"directorio del paquete de flasheo" es el archivo de directorio utilizado durante el proceso de flasheo del sistema.
:::

Usa las opciones `-rn` para preservar los archivos existentes:
```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**Paso 5.** Navega al directorio de tu paquete de flasheo JetPack:

```bash
cd /path/to/mfi_recomputer-orin
```
**Paso 6.** Ejecuta el script de respaldo, especificando tu dispositivo de almacenamiento y el nombre de respaldo deseado:
```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```
:::info
-b `<target_board>` reemplaza con tu dispositivo

:::

:::note
puedes navegar al directorio de tu paquete de flasheo Jetpack y encontrar un archivo `xxx.conf`.
`xxx` es tu `<target_board>`
```bash
ls | grep *.conf
```
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

espera pacientemente hasta que termine.
Si todo va bien, verás algo similar a la captura de pantalla de abajo en la terminal:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>


:::note
Durante este proceso, tu dispositivo puede reiniciarse muchas veces como en el proceso de flasheo, no se recomienda usar máquinas virtuales o WSL porque podría perder la conexión y causar que el proceso de respaldo/restauración falle. Puedes encontrar algunos archivos faltantes; puedes abrir el `recomputer-orin.conf` y eliminar el archivo que no existe. 
Usualmente estos son archivos objeto temporales de superposición del árbol de dispositivos; no afectan los resultados de respaldo y restauración. Pero si hiciste modificaciones al BSP, necesitarás fusionar tus archivos de superposición.
:::

## Restaurando el Sistema

**Paso 1.** Inserta un nuevo [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) vacío en tu reComputer.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Paso 2.** Entra en modo de recuperación forzada como se [describió anteriormente.](#Recovery)

**Paso 3.** En tu sistema host, navega a tu directorio del paquete de flasheo JetPack y ejecuta el comando de restauración en el host:  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

Si todo va bien, verás algo similar a la captura de pantalla de abajo en la terminal:
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>


**Paso 4.** Enciende el dispositivo jetson, usa el nombre de usuario y contraseña que configuramos previamente. Y prueba algún software que instalamos previamente. Si funcionó, entonces nuestra restauración fue exitosa.
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
Debido a que habíamos instalado jtop en nuestro sistema anterior, podemos lanzar directamente jtop en la terminal del nuevo sistema.

:::info
Adicionalmente, los siguientes casos han sido probados para respaldo y restauración:  
- Restaurar el respaldo al SSD original. 
- Restaurar el respaldo a un SSD diferente.  
- Restaurar el respaldo a la misma placa portadora, con módulo Jetson del mismo lote, SSDs diferentes.
:::

## Recursos
- [Flash JetPack OS to J401 Carrier Board](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 Schematic](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D File](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson examples](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)
## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


