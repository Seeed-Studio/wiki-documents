---
description: Errores comunes al flashear Jetson y cómo solucionarlos.
title: Errores Comunes de Flasheo y Cómo Solucionarlos
keywords:
  - reComputer
  - Jetson
  - flashing
  - USB
  - NFS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /usb_timeout_during_flash
last_update:
  date: 3/18/2026
  author: Lorraine
createdAt: '2025-01-22'
updatedAt: '2026-03-18'
url: https://wiki.seeedstudio.com/es/usb_timeout_during_flash/
---

Esta página resume varios fallos comunes al flashear Jetson, especialmente errores relacionados con la reconexión USB, el montaje NFS, problemas del entorno del host, herramientas de flasheo faltantes y la configuración OEM en el primer arranque.

## Antes de empezar

Antes de solucionar un error específico, confirma lo siguiente:

1. Siempre que sea posible, utiliza un host físico dedicado con Ubuntu. Evita máquinas virtuales, contenedores Docker y WSL para flashear.
2. Usa un cable USB corto, de buena calidad, que admita una transferencia de datos estable.
3. Conecta el cable directamente al PC host. Evita los hubs USB.
4. Vuelve a poner el Jetson en modo de recuperación y reconecta la alimentación si es necesario.
5. Asegúrate de que el sistema operativo del host coincida con la versión de JetPack:
   - JetPack 5.x: se recomienda Ubuntu 18.04 o 20.04.
   - JetPack 6.x: se recomienda Ubuntu 20.04 o 22.04.

## Error: Tiempo de espera de USB durante el flasheo

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

Los síntomas típicos incluyen mensajes como:

```text
ERROR: might be timeout in usb write
```

o que el dispositivo se desconecte durante el proceso de flasheo.

### Por qué ocurre

Durante el flasheo, el Jetson puede reiniciarse y volver a enumerarse por USB. En un host físico con Ubuntu, normalmente se reconecta de forma automática. En un entorno de VM o WSL, a menudo es necesario volver a adjuntar el dispositivo manualmente, y esto puede provocar errores de tiempo de espera.

### Qué comprobar

1. Confirma si el host es un PC físico con Ubuntu, una VM o WSL.
2. Si utilizas una VM, vuelve a conectar manualmente el dispositivo USB del Jetson después de que se reinicie durante el flasheo.
3. Si utilizas WSL, vuelve a adjuntar el dispositivo después de la reconexión. Para más detalles de configuración, consulta [Flash JetPack with WSL2](/es/ai_robotics_flash_jetpack_with_wsl2/).
4. Confirma que el adaptador de alimentación de CC puede proporcionar suficiente potencia para el dispositivo Jetson.
5. Cambia a otro cable USB Type-C de alta calidad. El cable debe admitir al menos comunicación de datos USB 2.0 y, idealmente, debe ser más corto de 1,5 metros.
6. Prueba con otro puerto USB-A en el host.
7. Evita usar hubs USB, ya que pueden reducir la estabilidad de la conexión durante el flasheo.
8. Confirma que seleccionaste el paquete de flasheo correcto para el producto Jetson de destino y la versión de JetPack.
9. Vuelve a entrar en modo de recuperación y reconecta la alimentación antes de intentarlo de nuevo.
10. Después de comprobar los puntos anteriores, reinicia el script de flasheo e inténtalo de nuevo.

### Recomendación

Recomendamos encarecidamente utilizar un host físico dedicado con Ubuntu para el flasheo.

## Error: Fallo de montaje NFS durante el flasheo

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/nfs_error.png"/>
</div>

Los registros típicos pueden incluir:

```text
Formatting APP partition /dev/nvme0n1p1 ...
tar --checkpoint-action="ttyout=Hit %s checkpoint #%u%*\r" -x -I 'zstd -T0' -pf /mnt/external/system.img --warning=no-timestamp --numeric-owner --xattrs --xattrs-include=* -C /tmp/ci-EUsLOiqBxk
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
Check your network setting (VPN, firewall,...) to make sure the device can mount NFS server.
```

Referencia:
[Flash fails Orin AGX at 99% - NVIDIA Developer Forums](https://forums.developer.nvidia.com/t/either-the-device-cannot-mount-the-nfs-server-on-the-host-or-a-flash-command-has-failed-while-using-sdk-manager/312719/3)

### Por qué ocurre

Al usar initrd flash, Jetson monta un recurso compartido NFS exportado por el PC host a través de la interfaz de red USB0. Si el servicio NFS del host no está disponible, está bloqueado por reglas de firewall o el entorno del host es inestable, el flasheo puede fallar cerca del final.

### Lista de comprobación

1. Asegúrate de que el servidor NFS se esté ejecutando en el host Ubuntu:

```bash
systemctl status nfs-kernel-server
```

2. Desactiva temporalmente el firewall de Ubuntu y prueba de nuevo:

```bash
sudo ufw status
sudo ufw disable
```

3. Evita entornos de VM, Docker y WSL.
4. Formatea el SSD NVMe a `ext4` antes de usarlo.
5. Instala las dependencias necesarias en el host:

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

6. Comprueba que el PC host tenga suficiente espacio libre en disco. Los fallos de montaje NFS también pueden ocurrir cuando el almacenamiento del host es insuficiente.
7. Si el problema persiste, prueba con un modelo de SSD validado. Referencia de SSD de Seeed:
[NVMe M.2 2280 SSD 256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)

## Error: `The connected jetson device is not ready for flash: Stat for blob_boot0.imgimg failed`

La línea clave es:

```text
Stat for blob_boot0.imgimg failed Error: Return value 19
```

### Por qué ocurre

En la práctica, esto suele significar que el entorno del host utilizado para generar el boot blob no es compatible con la cadena de herramientas de flasheo. Hemos visto esto en hosts con Ubuntu 24.04.

### Solución recomendada

Utiliza Ubuntu 20.04 o Ubuntu 22.04 como host de flasheo en lugar de Ubuntu 24.04.

## Error: `could not find tegrarcm_v2`

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/tegrarcm_v2_failed.jpg"/>
</div>

Registro típico:

```text
Error: could not find tegrarcm_v2
```

### Por qué ocurre

El paquete de flasheo y la herramienta de flasheo MFI están pensados para un host x86. Este error suele aparecer cuando los usuarios intentan flashear desde otro dispositivo Jetson u otra arquitectura de host no compatible.

### Solución recomendada

Utiliza un PC host x86 con Ubuntu para el flasheo.

## Error: Bloqueado en la configuración OEM después del primer arranque

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/oem_failed.png"/>
</div>

Mensaje típico:

```text
(1 of 2) A start job is running for End-user configuration after initial OEM installation (Debconf UI)
```

### Por qué ocurre

Esto normalmente significa que el servicio de configuración OEM está esperando la interacción del usuario, pero no hay una ruta de visualización utilizable disponible. Esto ocurre comúnmente cuando la pantalla HDMI no se conectó en el primer arranque y se conectó más tarde.

### Qué hacer

1. Apaga el Jetson.
2. Desconecta los periféricos innecesarios.
3. Deja conectados solo el monitor HDMI y la alimentación.
4. Reinicia el dispositivo.
5. Si es necesario, reinicia unas cuantas veces más.

## Notas adicionales

- Si el dispositivo se reinicia durante el flasheo, esto puede ser esperado. Lo importante es si el host vuelve a detectar y reconectar el Jetson correctamente.
- Si estás flasheando a NVMe, confirma que la unidad de destino esté en buen estado y ya formateada correctamente.
- Si utilizas SDK Manager, revisa también los detalles de la terminal para identificar el componente exacto que falla.

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
