---
description: Expansión de memoria
title: Expansión de memoria
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Jetson_Memory_Expansion
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# reComputer para expansión de memoria de la Jetson

La reComputer para Jetson se vende con 16 GB de eMMC y tiene **ubuntu 18.04 LTS** y **NVIDIA JetPack 4.6** instalados, por lo que el espacio restante disponible es de aproximadamente 2 GB, lo que es un obstáculo importante para usar la reComputer para capacitación e implementación en algunos proyectos. Este tutorial presentará el proceso de expansión para diferentes modelos de reComputer según esta situación y ayudará a los desarrolladores a expandir sus sistemas transfiriéndolos a dispositivos de almacenamiento externos.

## Fundamentos de la expansión de memoria

El primer sector del disco donde está instalado el sistema se llama **Master Boot Record (MBR)**, y contiene información sobre el **BootLoader**, la tabla de particiones y el identificador fijo **55AA**. Durante el proceso de arranque de Linux, el **BootLoader** y el **kernel** pasan por dos fases importantes.

**Fase 1:** El BootLoader inicializa **(initrd)** un sistema de archivos raíz temporal **(ramfs)**. El ramfs contiene programas de configuración para controladores, sistemas de archivos (fs), redes (net), etc. que son necesarios en el momento del arranque. Después de eso, el control del BootLoader se transfiere al kernel para que el kernel pueda extraer estos programas, moverlos a la memoria **(RAM)** y ejecutarlos para cargar los distintos módulos funcionales.

**Fase 2:** Después de que el kernel haya cargado los módulos necesarios con ramfs, libera el sistema y configura el sistema de archivos raíz real **(rootfs)** para montarlo en el directorio raíz real.

1. En las dos fases anteriores, no necesitamos modificar la parte del kernel que carga los módulos funcionales con ramfs (fase 1), por lo que incluso si la reComputer se ha expandido, aún necesitarás usar el eMMC.
2. Lo que necesitamos modificar es la segunda fase, que monta el sistema de archivos raíz en la memoria externa, permitiendo así la expansión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/2.png" /></div>

## Notas sobre la expansión de la capacidad

1. El principio fundamental del escalado a través de almacenamiento externo es configurar rootfs para que esté en un dispositivo de almacenamiento externo.

2. Este método de expansión modificará los archivos del sistema a nivel del kernel de Linux y es posible que encuentres algunos problemas que no son fáciles de resolver. Debes utilizar una nueva computadora y un nuevo dispositivo de almacenamiento cuando sigas este tutorial para completar la expansión, y **no intentes almacenar archivos importantes en el dispositivo**. Si todo no funciona como se esperaba, es posible que necesites reformatear el dispositivo de almacenamiento o incluso la reComputer y, para la opción de retención final, te ofreceremos ayuda para restaurar la copia de seguridad a través del puerto serie si es posible, pero tú eres responsable de cualquier pérdida de datos.

3. Este proceso de expansión no requiere recompilar el kernel y ahorra alrededor de 40 minutos de tiempo de instalación en comparación con otros métodos de expansión anteriores disponibles en línea.

## Expansión mediante ranura M.2 en la Carrier Board y SSD

Los SSD, también conocidos como unidades de estado sólido, se utilizan a menudo como dispositivo de almacenamiento principal para computadoras portátiles, de escritorio, etc. Con su alta confiabilidad y rápidas velocidades de lectura y escritura de datos, es la mejor opción para la expansión de computadoras. La siguiente tabla enumera los productos de la serie reComputer que están disponibles actualmente para soluciones de expansión SSD. La razón principal por la que el reComputer J1010 no admite la expansión SSD es porque la Carrier Board no está equipada con una ranura M.2 adecuada.

<table align="center">
  <tbody><tr>
      <th align="center">Producto</th>
      <th align="center">reComputer J1020</th>  
      <th align="center">reComputer J2011</th>
      <th align="center">reComputer J2012</th>
      <th align="center">reComputer J2021</th>
    </tr>
    <tr>
      <th align="center">SKU
      </th><td align="center">110061361</td>
      <td align="center">110061363</td>
      <td align="center">110061401</td>
      <td align="center">110061381</td>
    </tr>
    <tr>
      <th align="center">Vista lateral
      </th><td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
    </tr>
    <tr>
      <th align="center">Módulo equipado
      </th><td align="center">Jetson Nano 4G</td>
      <td align="center">Jetson Xavier NX 8GB</td>
      <td align="center">Jetson Xavier NX 16GB</td>
      <td align="center">Jetson Xavier NX 8GB</td>
    </tr>
    <tr>
      <th align="center">Carrier Board
      </th><td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">J202</td>
    </tr>
  </tbody>
</table>


### Requerimientos de Software y Hardware

Se deben cumplir las siguientes condiciones para la solución de expansión mediante SSD.

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">Requerimientos de software y hardware</th>  
    </tr>
    <tr>
      <th align="center">reComputer para Jetson
      </th><td align="left">Versión de JetPack 4.4 ~ 4.6 <br />
        La Carrier board debe contar con un slot M.2 M-Key</td>
    </tr>
    <tr>
      <th align="center">SSD
      </th><td align="left">SSD debe tener un sistema de archivos extendido de cuarta generación (Ext4) <br />
        Interfaz M.2 M-Key con protocolo NVMe <br />
        Capacidad recomendada ≤ 512 GB</td>
    </tr>
  </tbody>
</table>


¡¡¡Atención!!!
    La versión actualizada de JetPack no ha sido probada para expansión, por lo que no se puede garantizar la estabilidad o el éxito de la expansión. Sigue este tutorial cuidadosamente.

    El SSD debe ser M.2 M-Key; de lo contrario, no coincidirá con la interfaz de la placa portadora.
    <div align=center><img width = 300 src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/3.jpeg"/></div>

    Los dispositivos de almacenamiento con sistemas de archivos de cuarta generación no extendidos (Ext4) no pueden completar las operaciones de expansión.

### Pasos de expansión

**Paso 1.** Instala el SSD

Sigue los pasos de las [instrucciones de Hardware](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Hardware_Layout/) para instalar el SSD en la reComputer.

**Paso 2.** Prepara el SSD

Utiliza el acceso directo `Ctrl+F` o haz click en el icono de Ubuntu en la esquina superior izquierda para buscar **Disks** y abre la herramienta Disks (Discos) que viene con Ubuntu 18.04.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

Selecciona tu SSD en el lado izquierdo y luego selecciona **Format Disk** en la esquina superior derecha debajo de la barra de menú.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd1.jpg" /></div>


Formatea tu SSD al formato GPT. Aparecerá una ventana emergente pidiéndote que confirmes e ingreses tu contraseña de usuario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd3.png" /></div>


Luego, hacemos click en el **+** central para agregar un carácter de disco.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd6.png" /></div>


Haz click en "Next" (Siguiente).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd7.png" /></div>


Asigna un nombre a tu SSD, selecciona **Ext4** en el tipo y haz click en "Create". En este punto, hemos completado la preparación del SSD de acuerdo con los requisitos de expansión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd8.png" /></div>


**Paso 3.** Crea el directorio raíz del SSD

Usa el comando git para descargar los archivos de script que necesitamos usar en la reComputer.

```sh
$ git clone https://github.com/limengdu/rootOnNVMe.git
$ cd rootOnNVMe/
```

Luego ejecuta el siguiente comando para compilar los archivos desde el directorio raíz del eMMC al SSD; el tiempo de espera para este paso depende del tamaño del directorio raíz que estés utilizando.

```sh
$ ./copy-rootfs-ssd.sh
```

**Paso 4.** Configura el entorno y completa la expansión

Ejecuta el siguiente comando para completar la configuración de rootfs.

```sh
$ ./setup-service.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/9.png" /></div>

Cuando reinicies la reComputer, verás que el eMMC se ha convertido en un dispositivo de almacenamiento externo en la interfaz principal y verás que la huella del sistema se ha reducido, por lo que la expansión fue exitosa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/11.png" /></div>

¡¡¡Atención!!!
    La ruta SSD predeterminada en el archivo de secuencia de comandos es `/dev/nvme0n1p1`, que también es la ruta asignada de forma predeterminada por la reComputer. Si descubres que la ruta de tu SSD no coincide con el comando `sudo fdisk -l`, cambia la ruta de todos los `/dev/nvme0n1p1` en los archivos **copy-rootfs-ssd.sh**, **data/setssdroot.service** y **data/setssdroot.sh** en rootOnNVMe a la ruta donde se encuentra tu SSD.
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/21.png" /></div>


    La expansión anterior no eliminará el contenido del directorio raíz original del eMMC. Si no deseas arrancar desde el SSD, puedes quitar el SSD y el sistema seguirá arrancando desde el eMMC.

## Ampliación de memoria mediante dispositivo de almacenamiento USB

Los dispositivos de almacenamiento USB, como unidades flash USB y discos duros móviles, se utilizan ampliamente como almacenamiento externo en diversas áreas, y la expansión USB también se aplica a la reComputer. La siguiente tabla enumera los productos reComputer que están actualmente disponibles para soluciones de expansión USB.

<table align="center">
  <tbody><tr>
      <th align="center">Producto</th>
      <th align="center">reComputer J1010</th>  
    </tr>
    <tr>
      <th align="center">SKU
      </th><td align="center">110061362</td>
    </tr>
    <tr>
      <th align="center">Vista lateral
      </th><td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" /></div></td>
    </tr>
    <tr>
      <th align="center">Módulo equipado
      </th><td align="center">Jetson Nano 4G</td>
    </tr>
    <tr>
      <th align="center">Carrier Board
      </th><td align="center">Carrier Board J1010</td>
    </tr>
  </tbody>
</table>


La mayor ventaja de escalar a través de dispositivos de almacenamiento USB sobre el escalado a través de SSD es el alto grado de conveniencia de los dispositivos USB y la simplicidad de extraerlos.
Sin embargo, incluso con la interfaz USB 3.2 de alta velocidad, la velocidad de transferencia de datos es mucho menor que la del bus PCIe estándar, por lo que el método de expansión SSD es superior en términos de estabilidad, confiabilidad y velocidad de transferencia de datos.

### Requerimientos de Software y Hardware

Se deben cumplir las siguientes condiciones para la solución de expansión mediante USB:

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">Requerimientos de software y hardware</th>  
    </tr>
    <tr>
      <th align="center">reComputer para Jetson
      </th><td align="left">Versión de JetPack 4.4 ~ 4.6 <br />
        El módulo equipado debe ser Jetson Nano</td>
    </tr>
    <tr>
      <th align="center">Dispositivos de almacenamiento USB
      </th><td align="left">Los dispositivos de almacenamiento USB deben tener un sistema de archivos extendido de cuarta generación (Ext4) <br />
        La alimentación del dispositivo de almacenamiento USB ≤ 0.5 A</td>
    </tr>
  </tbody>
</table>


¡¡¡Atención!!!
    La versión actualizada de JetPack no ha sido probada para expansión, por lo que no se puede garantizar la estabilidad o el éxito de la expansión. Sigue este tutorial cuidadosamente.

    Los dispositivos de almacenamiento USB de gran capacidad requieren que la reComputer esté correctamente alimentada para mantener un funcionamiento adecuado, y no se recomiendan dispositivos de almacenamiento USB con capacidades superiores a 512 GB. Una fuente de alimentación insuficiente puede provocar que la computadora se apague.

    Los módulos equipados que no sean Jetson Nano no admiten la expansión mediante este método en este momento.
    
    Los dispositivos de almacenamiento con sistemas de archivos de cuarta generación no extendidos (Ext4) no pueden completar las operaciones de expansión.

### Pasos de expansión

**Paso 1.** Prepara los documentos necesarios

Usa git para descargar los archivos de script que necesitamos usar en la reComputer.

```sh
$ git clone https://github.com/limengdu/bootFromUSB.git
$ cd bootFromUSB
```

**Paso 2.** Preparación del dispositivo de almacenamiento USB

Conecta un dispositivo de almacenamiento USB a tu computadora y abre la herramienta Discos que viene con Ubuntu 18.04 usando el acceso directo `Ctrl+F` o haciendo click en el ícono de Ubuntu en la esquina superior izquierda y buscando **Discos**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

Selecciona tu dispositivo de almacenamiento USB en el lado izquierdo y luego selecciona **Formatear disco** en la esquina superior derecha debajo de la barra de menú.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd1.jpg" /></div>


Formatea tu dispositivo de almacenamiento USB al formato GPT. Aparecerá una ventana emergente pidiéndote que confirmes e ingreses tu contraseña de usuario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd2.png" /></div>


Luego, hacemos click en el **+** central para agregar un carácter de disco.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd4.png" /></div>


Haz click en "Next" (Siguiente).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd5.png" /></div>


Asigna un nombre a tu dispositivo de almacenamiento USB, selecciona **Ext4** en el tipo y haz click en "Create". En este punto, hemos completado la preparación del dispositivo de almacenamiento USB de acuerdo con los requisitos de expansión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd6.png" /></div>


**Paso 3.** Montaje de un dispositivo de almacenamiento USB

El dispositivo de almacenamiento USB preparado según el **paso 2** se puede ver en el software de **Disks** como desmontado.

!!!Nota
  Si descubres que tu dispositivo USB se montó automáticamente después de formatear, omite este paso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/60.png" /></div>


Usamos el siguiente comando para montar el dispositivo USB.

```sh
$ mkdir /media/USB/
$ sudo mount <USB Device Path> /media/USB/
```

Donde `<USB Device Path>` se refiere a la ruta del dispositivo de almacenamiento USB, este parámetro se puede ver en el software Dispositivo de discos o se puede consultar con el comando `sudo fdisk -l`. Por ejemplo, para mi dispositivo USB, puedo montar `/dev/sda1` en `/media/USB/` con el siguiente comando.

```sh
$ sudo mount /dev/sda1 /media/USB/
```

Utiliza el siguiente comando para verificar la ubicación de montaje del dispositivo.

```sh
$ sudo findmnt -rno TARGET <USB Device Path>
```

Para mi dispositivo USB, los comandos que necesito usar son:

```sh
$ sudo findmnt -rno TARGET /dev/sda1
```


**Paso 4.** Copia el sistema a un dispositivo de almacenamiento USB

El script **copyRootToUSB.sh** copia el contenido de todo el sistema eMMC al dispositivo de almacenamiento USB. Por supuesto, el dispositivo de almacenamiento USB debería tener más espacio de almacenamiento que el eMMC.

El comando utilizado es el siguiente.

```sh
usage: ./copyRootToUSB.sh [OPTIONS]
-d | --directory     Directory path to parent of kernel

-v | --volume_label  Label of Volume to lookup

-p | --path          Device Path to USB drive (e.g. /dev/sda1)

-h | --help  This message
```

En general, para necesidades de expansión regulares, podemos simplemente seleccionar `-p` en el parámetro `[OPCIONES]` y luego necesitamos agregar la ruta del dispositivo USB (por ejemplo, `/dev/sda1`), que obtuvimos en el **paso 3**. Por ejemplo, para mi dispositivo USB, el comando completo que necesito usar es:

```sh
$ ./copyRootToUSB.sh -p /dev/sda1
```

El tiempo que tarda este comando en ejecutarse depende del tamaño de los archivos almacenados en tu eMMC.

**Paso 5.** Consultar el UUID de los dispositivos USB

Sólo para estar seguros, debemos buscar el UUID del dispositivo USB.

```sh
$ ./partUUID.sh 
```

La ruta predeterminada para este comando es **sda1 (/dev/sda1)**, pero también puedes determinar el UUID de otros dispositivos USB. especifica `/dev/ usando` el indicador `-d`. Por ejemplo, para mi dispositivo USB sería:

```sh
$ ./partUUID.sh -d sdb1

UUID of Disk: /dev/sdb1
e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5
Sample for /boot/extlinux/extlinux.conf entry:
APPEND ${cbootargs} root=UUID=e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5 rootwait rootfstype=ext4
```

¡¡¡Atención!!!
    Si el UUID devuelto difiere en formato y longitud del ejemplo anterior, entonces el dispositivo probablemente no esté formateado como Ext4, ¡Comienza de nuevo desde el **paso 2**!

**Paso 6.** Modifica la configuración de arranque para completar la expansión

Primero debemos hacer una copia de seguridad del archivo de configuración de arranque.  

```sh
$ sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
```

Este paso es el más importante y peligroso en la operación de expansión del dispositivo USB. Edita el archivo `/boot/extlinux/extlinux.conf` y `/media/nvidia/boot/extlinux/extlinux.conf`, luego agrega una entrada para apuntar al nuevo rootfs, la ubicación es la ruta del dispositivo USB, complétala en el parámetro `<ruta>` a continuación. La información de la ruta se obtiene en el **paso 3**.

```sh
$ sudo vi /boot/extlinux/extlinux.conf
$ sudo vi /media/nvidia/boot/extlinux/extlinux.conf

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=<path> rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
```

Para el dispositivo de almacenamiento USB que estoy usando, el archivo `/boot/extlinux/extlinux.conf` modificado y `/media/nvidia/boot/extlinux/extlinux.conf` dicen lo siguiente:

```sh
TIMEOUT 30
DEFAULT primary

MENU TITLE L4T boot options

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=/dev/sda1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
#      APPEND ${cbootargs} quiet root=/dev/mmcblk0p1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1 

# When testing a custom kernel, it is recommended that you create a backup of
# the original kernel and add a new entry to this file so that the device can
# fallback to the original kernel. To do this:
#
# 1, Make a backup of the original kernel
#      sudo cp /boot/Image /boot/Image.backup
#
# 2, Copy your custom kernel into /boot/Image
#
# 3, Uncomment below menu setting lines for the original kernel
#
# 4, Reboot

# LABEL backup
#    MENU LABEL backup kernel
#    LINUX /boot/Image.backup
#    INITRD /boot/initrd
#    APPEND ${cbootargs}
```

Guarda el archivo y reinicia la reComputer, la raíz del sistema cambiará al dispositivo de almacenamiento USB y la expansión estará completa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/62.png" /></div>


## Restaurar la copia de seguridad del sistema a través de la consola serial

Cuando tu sistema no arranca correctamente debido a un error o por alguna otra razón (un escenario común es que el ícono de Nvidia sigue apareciendo durante el arranque), la copia de seguridad que realizaste durante la expansión jugará un papel importante. Ten paciencia y sigue los pasos mostrados a continuación para volver a conectar la computadora a la consola serial y manipularemos el U-boot para restaurar tu copia de seguridad.

### Preparación de materiales

<table align="center">
  <tbody><tr>
      <th align="center">Preparación de materiales</th>
      <th align="center">Descripción</th>  
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/7.jpeg" /></div>
      </th><td align="left">Ubuntu host x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div>
      </th><td align="left">No se puede acceder al sistema reComputer Jetson x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/5.png" /></div>
      </th><td align="left"><a href="https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?queryID=cb30ad1a9d75c9ef437912535186b130&objectID=1112&indexName=bazaar_retailer_products">Módulo UART a USB x1</a></td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/6.png" /></div>
      </th><td align="left"><a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html?queryID=a51c4491cb6b462a1e844c832c98c52a&objectID=2042&indexName=bazaar_retailer_products">Cable Dupont Hembra - hembra x3</a></td>
    </tr>
  </tbody>
</table>


### Pasos para acceder a la consola serial

**Paso 1.** Conectar el módulo UART a USB a la reComputer

Conecta la reComputer al módulo UART a USB de acuerdo con las instrucciones de cableado en la siguiente tabla.

<table align="center">
  <tbody><tr>
      <td colSpan={3}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/8.jpeg" /></div></td>
    </tr>
    <tr>
      <td align="center">reComputer</td>
      <td align="center"> </td>
      <td align="center">Módulo UART a USB</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">UART TXD</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">UART RXD</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody>
</table>


¡¡¡Tip!!!
    No es necesario conectar la interfaz VCC entre la reComputer y el módulo UART a USB.
    
    No es necesario encender la reComputer por el momento después de conectar el cable, así que déjala a un lado por ahora.

    Desconecta la memoria externa expandida.

**Paso 2.** Instala e inicia minicom en el host de Ubuntu

Si tu host de Ubuntu no tiene minicom instalado, puedes instalar 
minicom en tu computadora con el siguiente comando.

```sh
$ sudo apt-get install minicom
```

Después de esperar a que se complete la instalación, 
ingresa el comando para iniciar minicom.

```sh
$ sudo minicom
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/40.png" /></div>

**Paso 3.** Configurar minicom

En la barra de menú de minicom, abrimos el puerto serie y 
lo configuramos para que podamos obtener la información de inicio 
de la computadora a través de minicom. En la barra de menú, presiona 
la tecla **o** del teclado para acceder a la pantalla de configuración. 
Utiliza las teclas de flecha hacia arriba y hacia abajo del teclado para 
controlar el cursor y moverse a **Serial port setup**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/41.png" /></div>

**Paso 4.** Conexión de la reComputer al host de Ubuntu

En este momento, creamos una nueva ventana de línea de comandos e 
ingresamos comandos en la ventana para monitorear el acceso del nuevo dispositivo.

```sh
$ dmesg --follow
```

En este punto, encenderemos la reComputer y conectaremos 
el módulo UART al USB con la reComputer conectada al host 
de Ubuntu a través del puerto USB. La ventana de la línea de 
comandos mostrará el nombre del dispositivo recién conectado, 
necesitamos encontrar el fragmento que comienza con **tty** y 
escribirlo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/44.png" /></div>

**Step 5.** Operación U-boot

Regresa a minicom y completa el nombre del dispositivo obtenido 
en **paso 4** en **Serial Device**. Además, verifica si la 
velocidad en baudios está configurada en **115200**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/42.png" /></div>

Después de modificar, ingresA para guardar. Selecciona 
**Save setup as dfl** y sal de la interfaz 
de minicom.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/43.png" /></div>

Vuelve a ingresar el comando `sudo minicom` y después de 
ingresar minicom, veremos la información de inicio de la 
computadora en la ventana.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/45.png" /></div>

Podemos solucionar el motivo por el que la reComputer no 
arranca utilizando la información devuelta y utilizando 
la ayuda del comando para ver todos los comandos disponibles 
en el sistema U-boot. Saber utilizar estos comandos es 
necesario para solucionar el problema, pero por supuesto 
puede resultar complicado.

```sh
Tegra210 (P3450-0000) # help
?         - alias para 'ayuda'
base      - imprimir o establecer desplazamiento de dirección
bdinfo    - imprimir estructura de información de la placa
blkcache  - bloquear diagnóstico y control de caché
boot      - arranque predeterminado, es decir, ejecuta 'bootcmd'
bootd     - arranque predeterminado, es decir, ejecuta 'bootcmd'
bootefi   - Arranca una carga útil EFI desde la memoria
bootelf   - Arrancar desde una imagen ELF en la memoria
booti     - arrancar el formato 'Imagen' del kernel de Linux desde la memoria
bootm     - arrancar la imagen de la aplicación desde la memoria
bootp     - imagen de arranque a través de la red usando el protocolo BOOTP/TFTP
bootvx    - Arrancar vxWorks desde una imagen ELF
cmp       - comparación de memoria
coninfo   - Dispositivos e información de la consola de impresión.
cp        - copia de memoria
crc32     - cálculo de suma de control
dcache    - habilitar o deshabilitar el caché de datos
dfu       - Actualización del firmware del dispositivo
dhcp      - imagen de arranque a través de la red usando el protocolo DHCP/TFTP
dm        - Modelo de conductor con acceso de bajo nivel.
echo      - argumentos de eco a la consola
editenv   - editar variable de entorno
enterrcm  - reinicia Tegra e ingresa al modo de recuperación USB
env       - comandos de manejo del entorno
exit      - Salir
ext2load  - cargar un archivo binario desde un sistema de archivos Ext2
ext2ls    - enumerar archivos en un directorio (predeterminado /)
ext4load  - cargar un archivo binario desde un sistema de archivos Ext4
ext4ls    - enumerar archivos en un directorio (predeterminado /)
ext4size  - determina el tamaño de un archivo
ext4write - crea un archivo en el directorio raíz
false     - no hacer nada, sin éxito
fatinfo   - imprimir información sobre el sistema de archivos
fatload   - cargar un archivo binario desde un sistema de archivos DOS
fatls     - enumerar archivos en un directorio (predeterminado /)
fatmkdir  - crear un directorio
fatrm     - eliminar un archivo
fatsize   - determina el tamaño de un archivo
fatwrite  - escribir archivos en un sistema de archivos DOS
fdt       - Comandos de utilidades del árbol de dispositivos aplanados.
fstype    - Buscar un tipo de sistema de archivos
go        - inicia la aplicación en la dirección 'addr'
gpio      - consultar y controlar pines gpio
gzwrite   - descomprimir y escribir memoria para bloquear el dispositivo
help      - descripción/uso del comando de impresión
i2c       - Subsistema I2C
icache    - habilitar o deshabilitar el caché de instrucciones
imxtract  - extraer una parte de una imagen múltiple
itest     - retorna verdadero/falso en comparación de números enteros
ln        - Crea un enlace simbólico
load      - carga un archivo binario desde un sistema de archivos
loadb     - carga un archivo binario a través de una línea serial (modo kermit)
loads     - carga el archivo S-Record a través de la línea serial
loadx     - carga un archivo binario a través de una línea serial (modo xmodem)
loady     - carga un archivo binario a través de una línea serial (modo ymodem)
loop      - bucle infinito en el rango de direcciones
ls        - enumera archivos en un directorio (predeterminado /)
lzmadec   - lzma descomprime una región de memoria
md        - pantalla de memoria
mii       - Comandos de la utilidad MII
mm        - modificación de memoria (dirección de incremento automático)
mmc       - Subsistema MMC
mmcinfo   - mostrar información MMC
mw        - escritura en memoria (llenar)
nm        - modificación de memoria (dirección constante)
nvme      - Subsistema NVM Express
part      - comandos relacionados con la partición del disco
pci       - enumerar y acceder al espacio de configuración PCI
ping      - enviar ICMP ECHO_REQUEST al host de la red
printenv  - imprimir variables de entorno
pxe       - comandos para obtener y arrancar desde archivos pxe
reset     - Realiza RESET de la CPU
run       - ejecuta comandos en una variable de entorno
save      - guarda el archivo en un sistema de archivos
saveenv   - guarda variables de entorno en almacenamiento persistente
setenv    - establece variables de entorno
sf        - Subsistema flash SPI
showvar   - imprime variables locales
size      - determina el tamaño de un archivo
sleep     - retrasa la ejecución por algún tiempo
source    - ejecuta un script desde la memoria
sspi      - Comando de utilidad SPI
sysboot   - comando para obtener y arrancar desde archivos syslinux
test      - prueba mínima como /bin/sh
tftpboot  - imagen de arranque a través de la red usando el protocolo TFTP
true      - no hacer nada, con éxito
ums       - Utiliza el UMS [Almacenamiento masivo USB]
unzip     - descomprime una región de memoria
usb       - Subsistema USB
usbboot   - arranca desde un dispositivo USB
version   - versión del monitor de impresión, compilador y enlazador
```

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
