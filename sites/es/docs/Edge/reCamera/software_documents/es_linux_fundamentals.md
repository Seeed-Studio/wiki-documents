---
description: Comandos básicos de linux para reCamera
title: Fundamentos de Linux
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /es/recamera_linux_fundamentals
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---
# Fundamentos de Linux

## **1. Introducción al Sistema Linux**

Linux es un sistema operativo de código abierto similar a Unix que ha ganado una adopción generalizada debido a su confiabilidad, flexibilidad y rendimiento. Se utiliza ampliamente en servidores, escritorios, dispositivos móviles y sistemas embebidos.

### Características Clave de Linux:

- **Gratuito y de Código Abierto**: El código fuente de Linux está disponible de forma gratuita, y los usuarios pueden modificarlo según sus requerimientos.
- **Multitarea**: Linux soporta la ejecución de múltiples aplicaciones simultáneamente.
- **Seguridad**: Es conocido por sus características robustas de seguridad, como permisos de archivos, gestión de usuarios y SELinux.
- **Portabilidad**: Linux puede ejecutarse en una variedad de arquitecturas de hardware.

## **2. Introducción al Sistema de Archivos de Linux**

Linux organiza sus archivos y directorios en una estructura jerárquica. En la parte superior de esta estructura está el directorio raíz `/`, y desde ahí, otros directorios se ramifican.

### Directorios Clave en el Sistema de Archivos de Linux:

- `/`: Directorio raíz. Es el punto de partida del sistema de archivos de Linux.
- `/home`: Directorios home de usuarios. Cada usuario tiene un subdirectorio aquí (ej., `/home/user`).
- `/etc`: Archivos de configuración para el sistema.
- `/bin`: Archivos binarios y comandos esenciales.
- `/var`: Datos variables, como logs y bases de datos.
- `/tmp`: Archivos temporales.
- `/dev`: Archivos de dispositivo que representan componentes de hardware.

## **3. Usando la Terminal y la Línea de Comandos**

La terminal es una herramienta poderosa para interactuar con el sistema operativo Linux. Permite a los usuarios emitir comandos para realizar varias tareas.

**Abriendo la Terminal:**

- Dirección de acceso：http://192.168.42.1/#/terminal（Nombre de usuario y contraseña por defecto：`recamera`）
- Iniciar sesión remotamente a través de la [herramienta](https://mobaxterm.mobatek.net/) ssh.
Puedes visitar la reCamera remotamente, usando el siguiente comando:
```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

Luego presiona ```Enter```, ahora deberías poder controlar remotamente la reCamera.

### Estructura Básica de la Línea de Comandos:

Los comandos en Linux siguen una estructura general:

```bash
command [options] [arguments]
```

Por ejemplo, `ls -l /home/recamera` listará todos los archivos en el directorio `/home/recamera` en formato largo.

## **4.Usuario recamera && root**

La primera vez que uses la recamera, restableces la contraseña predeterminada de recamera, que también es la contraseña utilizada para iniciar sesión en el terminal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-1.png" /></div>

:::note

Cuando se ingresa la contraseña en el terminal, el contenido no se mostrará. Presiona `Enter` para ejecutar después de ingresar la contraseña.

:::

El problema de permisos insuficientes ocurre en algunas operaciones especiales. Para ejecutar el comando, necesitas agregar sudo antes de ejecutar el comando. O cambiar al usuario `root` para ejecutar todos los comandos en el sistema.

El usuario root no tiene una contraseña establecida por defecto; usa este comando para establecer una contraseña.

- `sudo passwd root`:Cambiar la contraseña de un usuario
- `su root`:Cambiar al usuario root.

:::note

El usuario root puede modificar archivos relacionados con el sistema, lo que puede llevar a fallas del sistema. Por favor opera con precaución.

:::

## **5. Comandos Básicos de Linux**

Aquí tienes algunos comandos básicos y su uso:

### Gestión de Archivos y Directorios:

- `pwd`: Imprime el directorio de trabajo actual.
- `ls`: Lista los archivos y directorios en el directorio actual.
- `cd [directorio]`: Cambia el directorio actual.
- `mkdir [directorio]`: Crea un nuevo directorio.
- `rm [archivo]`: Elimina un archivo.
- `rmdir [directorio]`: Elimina un directorio vacío.

### Permisos y Propiedad de Archivos:

- `chmod [permisos] [archivo]`: Cambia los permisos de un archivo.
- `chown [propietario] [archivo]`: Cambia el propietario de un archivo.

### Operaciones de Archivos:

- `cp [origen] [destino]`: Copia archivos o directorios.
- `mv [origen] [destino]`: Mueve o renombra archivos o directorios.
- `cat [archivo]`: Muestra el contenido de un archivo.
- `nano [archivo]`: Abre un archivo en un editor de texto (Nano).

### Información del Sistema:

- `top`: Muestra procesos del sistema en tiempo real y uso de recursos.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-2.png" /></div>
- `df`: Muestra el uso del espacio en disco.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-3.png" /></div>
- `free`: Muestra el uso de memoria.
- `uname -r`: Muestra la versión del kernel.

## 6.Transferencia de archivos

Linux ofrece varios métodos para transferir archivos entre sistemas, ya sea a través de una red local o internet. A continuación se muestran las herramientas y protocolos comunes utilizados para la transferencia de archivos en Linux.

### **Usando SCP (Protocolo de Copia Segura)**

SCP te permite copiar archivos de forma segura entre un host local y remoto o entre dos hosts remotos.

#### Comandos Básicos de SCP:

- Copiar un archivo de local a remoto:

  ```bash
  scp [file] username@remote_host:/path/to/destination
  ```

- Copiar un archivo de remoto a local:

  ```bash
  scp username@remote_host:/path/to/file /local/destination
  ```

- Copiar un directorio (usa la bandera `-r` para copia recursiva):

  ```bash
  scp -r [directory] username@remote_host:/path/to/destination
  ```

#### Ejemplo:

Para copiar un archivo desde tu máquina local a un servidor remoto:

```bash
scp myfile.txt recamera@192.168.1.100:/home/recamera/
```

### **Usando SFTP (Protocolo de Transferencia Segura de Archivos)**

SFTP es otro método seguro de transferir archivos, y opera sobre SSH. Te permite gestionar archivos de forma interactiva en un servidor remoto.

#### Comandos Básicos de SFTP:

1. Iniciar una sesión SFTP:

   ```bash
   sftp username@remote_host
   ```

2. Una vez conectado, usa los siguientes comandos:

   - `ls`: Listar archivos en el directorio remoto.
   - `cd [directorio]`: Cambiar directorio remoto.
   - `get [archivo]`: Descargar un archivo del servidor remoto a la máquina local.
   - `put [archivo]`: Subir un archivo de la máquina local al servidor remoto.
   - `exit`: Cerrar la sesión SFTP.

#### Ejemplo:

Para subir un archivo a un servidor remoto:

```bash
sftp recamera@192.168.42.1
sftp> put myfile.txt /home/user/Documents/
```

## **7.Comando de Hardware**

Puedes consultar esta [documentación](https://wiki.seeedstudio.com/es/recamera_hardware_and_specs/#hardware-interface) para controlar el hardware en el dispositivo recamera.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>