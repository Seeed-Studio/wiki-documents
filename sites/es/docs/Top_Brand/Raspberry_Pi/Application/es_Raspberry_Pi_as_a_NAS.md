---
description: Raspberry Pi como un NAS
title: Raspberry Pi como un NAS
keywords:
  - Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_Pi_as_a_NAS
last_update:
  date: 8/5/2024
  author: Frank
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/Raspberry_Pi_as_a_NAS/
---


# Usar la Raspberry Pi como un NAS (Almacenamiento Conectado a la Red)

La Raspberry Pi es una microcomputadora potente, popular entre los entusiastas de la tecnología. Se puede usar para varios proyectos DIY, incluyendo la configuración de un Almacenamiento Conectado a la Red (NAS). En este tutorial, exploraremos los siguientes aspectos:

- [¿Es buena la Raspberry Pi para NAS?](#jump1)
- [¿Cómo convertir la Raspberry Pi 5 en NAS?](#jump2)
- [Problemas Comunes y Soluciones al Usar Raspberry Pi como NAS](#jump3)

## <span id="jump1"> ¿Es Buena la Raspberry Pi para NAS? </span>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Raspberry Pi.png" alt="pir" width={500} height="auto" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

La Raspberry Pi tiene capacidades de procesamiento sólidas y opciones de configuración flexibles, lo que la convierte en una opción ideal para construir un NAS. Aquí están sus ventajas:

- Costo-Efectivo: La Raspberry Pi es relativamente económica comparada con dispositivos NAS tradicionales.
- Bajo Consumo de Energía: La Raspberry Pi tiene un consumo de energía muy bajo, haciéndola adecuada para operación 24/7.
- Flexibilidad y Personalización: Puedes instalar varios sistemas operativos y software para configurar el NAS según sea necesario.
- Soporte de la Comunidad: La Raspberry Pi tiene una gran comunidad de usuarios, proporcionando abundantes recursos y soporte técnico.

Sin embargo, hay algunas limitaciones a considerar:

- Limitaciones de Rendimiento: La Raspberry Pi puede tener restricciones de rendimiento comparada con dispositivos NAS de alta gama, especialmente al manejar grandes cantidades de datos.
- Limitaciones de Almacenamiento: La Raspberry Pi en sí misma no tiene almacenamiento integrado de gran capacidad y requiere discos duros externos o SSDs.

## <span id="jump2"> ¿Cómo Convertir la Raspberry Pi 5 en NAS? </span>

Convertir la Raspberry Pi 5 en un NAS no es complicado. Solo sigue estos pasos:

### Paso 1: Preparar el Hardware

- [Una Raspberry Pi 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)
- Una tarjeta microSD (se recomienda 32GB o más)
- Un adaptador de corriente estable
- Disco duro externo o SSD
- Conexión de red (cableada o inalámbrica)

### Paso 2: Instalar el Sistema Operativo

1. Usa una herramienta como [Raspberry Pi Imager](https://www.raspberrypi.com/software/) para escribir la imagen del SO en la tarjeta microSD.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/imager.png" alt="pir" width={800} height="auto" /></div>

2. Selecciona "Raspberry Pi 5" -> "Raspberry Pi OS (32-bit)" -> tarjeta SD (asegúrate de seleccionar el dispositivo correcto para evitar pérdida de datos si otros dispositivos USB están conectados), luego haz clic en "Next." Aquí hay un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/burn1.gif" alt="pir" width={800} height="auto" /></div>

3. Luego, edita la configuración. Aquí hay un ejemplo de la configuración proporcionada:

- Ingresa tu nombre de host elegido nas (recomendado en este tutorial).
- Ingresa un nombre de usuario y contraseña, que necesitarás más tarde para autenticación.
- Marca la casilla junto a "Configure WiFi" para que tu Pi pueda conectarse automáticamente al Wi-Fi.
- Ingresa tu SSID de red (nombre) y contraseña.
- Marca la casilla junto a "Enable SSH," para que podamos conectarnos al Pi sin usar mouse y teclado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/burn2.gif" alt="pir" width={800} height="auto" /></div>

4. Después de hacer clic en "Save," comienza a grabar la imagen. El proceso puede tomar algún tiempo. Cuando aparezca como se muestra en la imagen a continuación, indica que la grabación está completa.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Burn completed.png" alt="pir" width={800} height="auto" /></div>

### Paso 3: Conexión Remota al Pi

Después de insertar la tarjeta SD, enciende la Raspberry Pi (si es posible, conéctala a la red vía cable Ethernet, pero en este tutorial, usaremos WiFi elegido durante la creación de imagen).

Abre una sesión de terminal en tu computadora y accede a la Raspberry Pi vía SSH ejecutando el siguiente comando, reemplazando **username** y **hostname** con los configurados durante la creación de imagen:

```bash
ssh <username>@<hostname>.local
```

Por ejemplo:

```bash
ssh seeed@nas.local
```

Necesitarás ingresar la contraseña que creaste durante la creación de la imagen. Aquí tienes un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Remote Connection.gif" alt="pir" width={800} height="auto" /></div>

Ahora que hemos completado la conexión SSH, es hora de convertirlo en un NAS.

### Paso 4: Instalar y Configurar NAS

#### 1.Localizar la Unidad

Primero, conecta el dispositivo de almacenamiento al Raspberry Pi, luego verifica los dispositivos de almacenamiento conectados con el siguiente comando:

```bash
lsblk
```

Verás una salida similar a esta:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/locate the drive.gif" alt="pir" width={800} height="auto" /></div>

:::tip
En esta salida, mmcblk0 es tu tarjeta microSD, y el primer dispositivo de almacenamiento USB conectado aparece como sda (Dispositivo de Almacenamiento A). Los dispositivos adicionales serán sdb, sdc, etc.
:::

#### 2.Particionar la Unidad

A continuación, particiona la unidad para que Raspberry Pi OS pueda reconocerla como un único dispositivo de almacenamiento:

```bash
sudo fdisk /dev/sda
```

Aquí hay algunos comandos relevantes:

- Crear una nueva partición: n
- Listar particiones actuales: p
- Eliminar una partición: d
- Salir sin guardar cambios: q

En este proyecto, procederemos a crear una partición nueva ingresando '**n**' seguido de presionar la tecla **Enter**, y la designaremos como una partición primaria escribiendo '**p**' y luego presionando **Enter**. Para las opciones restantes, optaremos por la configuración predeterminada simplemente presionando **Enter**. Si hay una partición existente presente, la eliminaremos escribiendo '**d**'. Aquí hay un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/partition the drive1.gif" alt="pir" width={800} height="auto" /></div>

:::tip
Si aparece el mensaje "**All space for primary partitions is in use**", significa que ya hay cuatro particiones primarias o tres particiones primarias y una partición extendida en el disco, y necesitarás eliminar una partición (**d**).
:::

:::note
Si hay particiones montadas en el disco (como mi sda1), sigue estos pasos para desmontarlas:

1. Salir de fdisk: Escribe q y presiona Enter para salir de fdisk y evitar modificaciones accidentales.
2. Desmontar sistemas de archivos: Si hay particiones montadas en el disco, desmóntalas primero. Puedes ver las particiones montadas con el siguiente comando:

```bash
mount | grep /dev/sda
```

3. Luego desmóntalos usando el comando umount, por ejemplo:

```bash
sudo umount /dev/sda1
```

4. Ejecuta:

```bash
sudo fdisk /dev/sda 
```

Aquí hay un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/partition the drive2.gif" alt="pir" width={800} height="auto" /></div>

Luego, regresa al paso de particionado anterior.
:::

#### 3.Formatear la Unidad

Ahora que la unidad ha sido particionada, es esencial formatearla para asegurar que el Raspberry Pi OS pueda acceder y manipular datos en ella. Para formatear tu unidad con el sistema de archivos ext4, usa el siguiente comando:

```bash
sudo mkfs.ext4 /dev/sda1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/format the drive.gif" alt="pir" width={800} height="auto" /></div>

#### 4.Montar la Unidad

A continuación, monta la unidad para hacerla disponible en el sistema de archivos de la Raspberry Pi:

```bash
sudo mount /dev/sda1 /mnt
```

Y asegúrate de que la unidad se monte cada vez que el sistema se inicie:

```bash
sudo nano /etc/fstab
```

Añade la siguiente línea al final del archivo:

```
/dev/sda1 /mnt/sda1/ ext4 defaults,noatime 0 1
```

Presiona **Ctrl**+**X**, luego **Y**, y finalmente **Enter** para guardar el archivo editado en nano. Aquí tienes un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/mount the drive.gif" alt="pir" width={800} height="auto" /></div>

#### 5.Crear una Carpeta Compartida

Ejecuta el siguiente comando para crear una carpeta compartida en tu unidad:

```bash
sudo mkdir /mnt/sda1/shared
```

Otorga permisos de lectura, escritura y ejecución a todos los usuarios en la Raspberry Pi con el siguiente comando:

```bash
sudo chmod -R 777 /mnt/sda1/shared
```

Aquí hay un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/create a shared folder.gif" alt="pir" width={800} height="auto" /></div>

### Paso 5: Compartir la Unidad a Través de la Red

Ejecuta el siguiente comando para instalar [Samba](https://www.samba.org/), una herramienta para compartir directorios a través de una red:

```bash
sudo apt install samba samba-common-bin
```

Aquí hay un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network1.gif" alt="pir" width={800} height="auto" /></div>

Luego, configura Samba para compartir el directorio a través de la red. Podemos instruir a Samba a través del archivo de configuración de Samba. Abre el archivo de configuración en un editor: smb.conf

```bash
sudo nano /etc/samba/smb.conf
```

Añade las siguientes líneas al final del archivo:

```
[shared]
path=/mnt/sda1/shared
writeable=Yes
create mask=0777
directory mask=0777
public=no
```

Presiona **Ctrl**+**X**, luego **Y**, y finalmente **Enter** para guardar el archivo editado en nano. Aquí tienes un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network2.gif" alt="pir" width={800} height="auto" /></div>

Reinicia Samba para aplicar los cambios de configuración:

```bash
sudo systemctl restart smbd
```

Aquí hay un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network3.gif" alt="pir" width={800} height="auto" /></div>

### Paso 6: Conceder acceso a la unidad

Finalmente, necesitas conceder acceso al recurso compartido de Samba para que solo los usuarios autenticados puedan acceder a los archivos a través de la red. Ejecuta el siguiente comando para crear un usuario que administre el recurso compartido de Samba, nombrando el nombre de usuario como pinas en este ejemplo:

```bash
sudo adduser <username>
```

Aquí hay un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Grant access to the drive1.gif" alt="pir" width={800} height="auto" /></div>

Luego, añade una contraseña para ese usuario usando el siguiente comando:

```bash
sudo smbpasswd -a <username>
```

Aquí hay un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Grant access to the drive2.gif" alt="pir" width={800} height="auto" /></div>

### Paso 7: Acceder y Usar el NAS

#### Desde Windows

1. Abre el Explorador de archivos y selecciona "Conectar a unidad de red" desde el menú Equipo.
2. Elige una letra de unidad e introduce la ruta de la carpeta, usando un formato de nombre de dominio para acceder fácilmente al dispositivo incluso si la dirección IP cambia (en este tutorial, la ruta es \\nas\pinas).
3. Introduce el nombre de usuario y contraseña de inicio de sesión. Aquí tienes un ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Access and Use the NAS.gif" alt="pir" width={800} height="auto" /></div>

4. Una vez iniciada la sesión, puedes acceder a los archivos en el servidor.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Access and Use the NAS finished.png" alt="pir" width={800} height="auto" /></div>

### Siguiente Paso

Si quieres hacer que tu disco duro y Raspberry Pi se vean más organizados y estéticamente atractivos, puedes usar una impresora 3D para crear soportes y carcasas para asegurar la Raspberry Pi y el disco duro externo, y luego ensamblarlos juntos.

## <span id="jump3"> Problemas Comunes y Soluciones al Usar Raspberry Pi como NAS </span>

Aquí tienes algunos problemas comunes que podrías encontrar al usar una Raspberry Pi como NAS y cómo solucionarlos:

### Pregunta 1: ¿Cómo mejorar el rendimiento del NAS con Raspberry Pi?

- Usa un SSD en lugar de un HDD para mejorar las velocidades de lectura de datos.
- Asegúrate de que la Raspberry Pi esté conectada a través de una red cableada para un rendimiento más estable.
- Optimiza el archivo de configuración de Samba ajustando la configuración de caché y las conexiones máximas.

### Pregunta 2: ¿Cómo asegurar el NAS con Raspberry Pi?

- Actualiza regularmente el sistema y el software para corregir vulnerabilidades de seguridad.
- Usa contraseñas fuertes y limita el acceso SSH.
- Configura un firewall y usa una VPN para acceso remoto.

### Pregunta 3: ¿Cómo automatizar las copias de seguridad al NAS con Raspberry Pi?

- Usa la herramienta rsync para configurar tareas de copia de seguridad periódicas:

```bash
rsync -av --delete /source_directory /mnt/external_hdd/backup_directory
```

- Configure trabajos cron para copias de seguridad automáticas.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
