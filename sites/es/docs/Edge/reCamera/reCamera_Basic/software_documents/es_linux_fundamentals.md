---
description: Comandos básicos de Linux para reCamera
title: Fundamentos de Linux
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /recamera_linux_fundamentals
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
createdAt: '2025-02-14'
updatedAt: '2025-04-08'
url: https://wiki.seeedstudio.com/es/recamera_linux_fundamentals/
---
# Fundamentos de Linux

## **1. Introducción al sistema Linux**

Linux es un sistema operativo de código abierto, similar a Unix, que ha ganado una amplia adopción debido a su fiabilidad, flexibilidad y rendimiento. Se utiliza ampliamente en servidores, escritorios, dispositivos móviles y sistemas embebidos.

### Características clave de Linux:

- **Gratis y de código abierto**: El código fuente de Linux está disponible de forma gratuita y los usuarios pueden modificarlo según sus necesidades.
- **Multitarea**: Linux admite la ejecución simultánea de múltiples aplicaciones.
- **Seguridad**: Es conocido por sus sólidas funciones de seguridad, como permisos de archivos, gestión de usuarios y SELinux.
- **Portabilidad**: Linux puede ejecutarse en una variedad de arquitecturas de hardware.

## **2. Introducción al sistema de archivos de Linux**

Linux organiza sus archivos y directorios en una estructura jerárquica. En la parte superior de esta estructura se encuentra el directorio raíz `/`, y desde ahí se ramifican los demás directorios.

### Directorios clave en el sistema de archivos de Linux:

- `/`: Directorio raíz. Es el punto de inicio del sistema de archivos de Linux.
- `/home`: Directorios personales de los usuarios. Cada usuario tiene un subdirectorio aquí (por ejemplo, `/home/user`).
- `/etc`: Archivos de configuración del sistema.
- `/bin`: Archivos binarios y comandos esenciales.
- `/var`: Datos variables, como registros (logs) y bases de datos.
- `/tmp`: Archivos temporales.
- `/dev`: Archivos de dispositivo que representan componentes de hardware.

## **3. Uso de la terminal y la línea de comandos**

La terminal es una herramienta potente para interactuar con el sistema operativo Linux. Permite a los usuarios emitir comandos para realizar diversas tareas.

**Abrir la terminal:**

- Dirección de acceso：http://192.168.42.1/#/terminal（Nombre de usuario y contraseña predeterminados：`recamera`）
- Inicia sesión de forma remota mediante la herramienta ssh [tool](https://mobaxterm.mobatek.net/).
Puedes acceder a la reCamera de forma remota utilizando el siguiente comando:
```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

Luego pulsa ```Enter```, y ahora deberías poder controlar la reCamera de forma remota.

### Estructura básica de la línea de comandos:

Los comandos en Linux siguen una estructura general:

```bash
command [options] [arguments]
```

Por ejemplo, `ls -l /home/recamera` listará todos los archivos en el directorio `/home/recamera` en formato largo.

## **4.Usuario recamera && root**

La primera vez que uses la recamera, restablecerás la contraseña predeterminada de recamera, que también es la contraseña utilizada para iniciar sesión en la terminal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-1.png" /></div>

:::note

Cuando se introduce la contraseña en la terminal, el contenido no se mostrará. Pulsa `Enter` para ejecutar después de introducir la contraseña.

:::

El problema de permisos insuficientes se produce en algunas operaciones especiales. Para ejecutar el comando, necesitas añadir sudo antes de ejecutar el comando. O cambiar al usuario `root` para ejecutar todos los comandos del sistema.

El usuario root no tiene una contraseña establecida por defecto; utiliza este comando para establecer una contraseña.

- `sudo passwd root`:Cambiar la contraseña de un usuario.
- `su root`:Cambiar al usuario root.

:::note

El usuario root puede modificar archivos relacionados con el sistema, lo que puede provocar un fallo del sistema. Por favor, opera con precaución.

:::

## **5. Comandos básicos de Linux**

A continuación se muestran algunos comandos básicos y su uso:

### Gestión de archivos y directorios:

- `pwd`: Muestra el directorio de trabajo actual.
- `ls`: Lista los archivos y directorios en el directorio actual.
- `cd [directory]`: Cambia el directorio actual.
- `mkdir [directory]`: Crea un nuevo directorio.
- `rm [file]`: Elimina un archivo.
- `rmdir [directory]`: Elimina un directorio vacío.

### Permisos y propiedad de archivos:

- `chmod [permissions] [file]`: Cambia los permisos de un archivo.
- `chown [owner] [file]`: Cambia el propietario de un archivo.

### Operaciones con archivos:

- `cp [source] [destination]`: Copia archivos o directorios.
- `mv [source] [destination]`: Mueve o renombra archivos o directorios.
- `cat [file]`: Muestra el contenido de un archivo.
- `nano [file]`: Abre un archivo en un editor de texto (Nano).

### Información del sistema:

- `top`: Muestra en tiempo real los procesos del sistema y el uso de recursos.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-2.png" /></div>
- `df`: Muestra el uso del espacio en disco.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-3.png" /></div>
- `free`: Muestra el uso de la memoria.
- `uname -r`: Muestra la versión del kernel.

## 6.Transferencia de archivos

Linux ofrece varios métodos para transferir archivos entre sistemas, ya sea a través de una red local o de Internet. A continuación se muestran las herramientas y protocolos más comunes utilizados para la transferencia de archivos en Linux.

### **Uso de SCP (Secure Copy Protocol)**

SCP te permite copiar archivos de forma segura entre un host local y uno remoto o entre dos hosts remotos.

#### Comandos básicos de SCP:

- Copiar un archivo desde local a remoto:

  ```bash
  scp [file] username@remote_host:/path/to/destination
  ```

- Copiar un archivo desde remoto a local:

  ```bash
  scp username@remote_host:/path/to/file /local/destination
  ```

- Copiar un directorio (usa la opción `-r` para copia recursiva):

  ```bash
  scp -r [directory] username@remote_host:/path/to/destination
  ```

#### Ejemplo:

Para copiar un archivo desde tu máquina local a un servidor remoto:

```bash
scp myfile.txt recamera@192.168.1.100:/home/recamera/
```

### **Uso de SFTP (Secure File Transfer Protocol)**

SFTP es otro método seguro de transferencia de archivos y funciona sobre SSH. Te permite gestionar archivos de forma interactiva en un servidor remoto.

#### Comandos básicos de SFTP:

1. Iniciar una sesión SFTP:

   ```bash
   sftp username@remote_host
   ```

2. Una vez conectado, utiliza los siguientes comandos:

   - `ls`: Lista los archivos en el directorio remoto.
   - `cd [directory]`: Cambia el directorio remoto.
   - `get [file]`: Descarga un archivo desde el servidor remoto a la máquina local.
   - `put [file]`: Sube un archivo desde la máquina local al servidor remoto.
   - `exit`: Cierra la sesión SFTP.

#### Ejemplo:

Para subir un archivo a un servidor remoto:

```bash
sftp recamera@192.168.42.1
sftp> put myfile.txt /home/user/Documents/
```

## **7.Comando de hardware**

Puedes consultar esta [documentación](https://wiki.seeedstudio.com/es/recamera_basicardware_and_specs/) para controlar el hardware en el dispositivo recamera.

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