---
description: Expansión de Memoria
title: Expansión de Memoria
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Jetson_Memory_Expansion
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Expansión de Memoria de reComputer para Jetson

El reComputer para Jetson se vende con 16 GB de eMMC y tiene **ubuntu 18.04 LTS** y **NVIDIA JetPack 4.6** instalados, por lo que el espacio de usuario restante disponible es de aproximadamente 2 GB, lo cual es un obstáculo significativo para usar el reComputer para entrenamiento y despliegue en algunos proyectos. Este tutorial introducirá el proceso de expansión para diferentes modelos de reComputer basado en esta situación, y ayudará a los desarrolladores a expandir sus sistemas transfiriéndolos a dispositivos de almacenamiento externos.

## Fundamentos de la Expansión de Capacidad

El primer sector en el disco donde está instalado el sistema se llama **Registro de Arranque Principal (MBR)**, que contiene información sobre el **BootLoader**, la tabla de particiones y el identificador fijo **55AA**. Durante el proceso de arranque de Linux, el **BootLoader** y el **kernel** pasan por dos fases importantes.

**Fase 1:** El BootLoader inicializa **(initrd)** un sistema de archivos raíz temporal **(ramfs)**. El ramfs contiene programas de configuración para controladores, sistemas de archivos (fs), redes (net), etc. que son necesarios en el momento del arranque. Después de eso, el control del BootLoader se transfiere al kernel para que el kernel pueda extraer estos programas, moverlos a la memoria **(RAM)** y ejecutarlos para cargar los diversos módulos funcionales.

**Fase 2:** Después de que el kernel ha cargado los módulos necesarios con el ramfs, libera el sistema y configura el sistema de archivos raíz real **(rootfs)** para montarlo en el directorio raíz real.

1. En las dos fases anteriores, no necesitamos modificar la parte del kernel que carga los módulos funcionales con el ramfs (fase 1), por lo que incluso si reComputer ha sido expandido, aún necesitará usar eMMC.
2. Lo que necesitamos modificar es la segunda fase, que monta el sistema de archivos raíz en memoria externa, habilitando así la expansión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/2.png" /></div>

## Notas sobre la Expansión de Capacidad

1. El principio principal de escalado a través de almacenamiento externo es configurar el rootfs para que esté en un dispositivo de almacenamiento externo.

2. Este método de expansión modificará los archivos del sistema a nivel del kernel de Linux y puede encontrar algunos problemas que no son fáciles de resolver. Debe usar un reComputer nuevo y un dispositivo de almacenamiento nuevo al seguir este tutorial para completar la expansión, y **no trate de almacenar archivos valiosos en el dispositivo**. Si todo no funciona como se espera, puede necesitar reformatear el dispositivo de almacenamiento o incluso el reComputer, y para la opción de retención final, ofreceremos ayudarle a restaurar la copia de seguridad a través del puerto serie si es posible, pero usted es responsable de cualquier pérdida de datos.

3. Este proceso de expansión no requiere recompilar el kernel y ahorra aproximadamente 40 minutos de tiempo de instalación en comparación con otros métodos de expansión anteriores disponibles en línea.

## Expansión Vía Ranura M.2 En Placa Portadora Y SSD

Los SSD, también conocidos como Unidades de Estado Sólido, se utilizan a menudo como dispositivo de almacenamiento principal para laptops, computadoras de escritorio, etc. Con su alta confiabilidad y velocidades rápidas de lectura y escritura de datos, es la mejor opción para la expansión de reComputer. La siguiente tabla enumera los productos de la Serie reComputer que están actualmente disponibles para soluciones de expansión SSD. La razón principal por la que el reComputer J1010 no admite expansión SSD es porque la placa portadora no está equipada con una ranura M.2 adecuada.

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
      <th align="center">Vista Lateral</th>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
    </tr>
    <tr>
      <th align="center">Módulo Equipado</th>
      <td align="center">Jetson Nano 4G</td>
      <td align="center">Jetson Xavier NX 8GB</td>
      <td align="center">Jetson Xavier NX 16GB</td>
      <td align="center">Jetson Xavier NX 8GB</td>
    </tr>
    <tr>
      <th align="center">Placa Portadora Operativa</th>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">J202</td>
    </tr>
  </tbody>
</table>


### Requisitos de Software y Hardware

Las siguientes condiciones deben cumplirse para la solución de expansión usando SSDs, que son los requisitos básicos para que la expansión sea probada como exitosa.

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">requisitos de software y hardware</th>  
    </tr>
    <tr>
      <th align="center">reComputer para Jetson</th>
      <td align="left">Versiones de JetPack 4.4 ~ 4.6 <br />
        La placa portadora debe contener ranura M.2 M-Key</td>
    </tr>
    <tr>
      <th align="center">SSD</th>
      <td align="left">El SSD necesita ser sistema de archivos extendido de cuarta generación (Ext4) <br />
        Interfaz M.2 M-Key con protocolo NVMe <br />
        Capacidad recomendada ≤ 512 GB</td>
    </tr>
  </tbody>
</table>


!!!Attention
    La versión actualizada de JetPack no ha sido probada para expansión, por lo que no se puede garantizar la estabilidad o el éxito de la expansión, por favor siga este tutorial cuidadosamente.

    El SSD necesita ser M.2 M-Key, de lo contrario no coincidirá con la interfaz en la placa portadora.
    <div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/3.jpeg"/></div>

    Los dispositivos de almacenamiento con sistemas de archivos que no sean de cuarta generación extendida (Ext4) no pueden completar operaciones de expansión.

### Pasos de expansión

**Paso 1.** Instalar el SSD

Siga los pasos en las [Instrucciones de Hardware](https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Hardware_Layout/) para instalar el SSD para reComputer.

**Paso 2.** Preparar SSD

Use el atajo `Ctrl+F` o haga clic en el icono de Ubuntu en la esquina superior izquierda para buscar **Disks** y abrir la herramienta Disks que viene con Ubuntu 18.04.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

Seleccione su SSD en el lado izquierdo y luego seleccione **Format Disk** en la esquina superior derecha bajo la barra de menú.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd1.jpg" /></div>


Formatee su SSD al formato GPT. Aparecerá una ventana emergente pidiéndole que confirme e ingrese su contraseña de usuario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd3.png" /></div>


Luego, hacemos clic en el **+** del medio para agregar un carácter de disco.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd6.png" /></div>


Haga clic en "Next".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd7.png" /></div>


Por favor dé un nombre a su SSD y seleccione **Ext4** en el tipo y haga clic en "Create". En este punto hemos completado la preparación del SSD según los requisitos de expansión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd8.png" /></div>


**Paso 3.** Construir el directorio raíz al SSD

Use el comando git para descargar los archivos de script que necesitamos usar para reComputer.

```sh
$ git clone https://github.com/limengdu/rootOnNVMe.git
$ cd rootOnNVMe/
```

Luego ejecuta el siguiente comando para construir los archivos desde el directorio raíz en el eMMC hacia el SSD, el tiempo de espera para este paso depende del tamaño del directorio raíz que estés usando.

```sh
$ ./copy-rootfs-ssd.sh
```

**Paso 4.** Configurar el entorno y completar la expansión

Ejecuta el siguiente comando para completar la configuración de rootfs.

```sh
$ ./setup-service.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/9.png" /></div>

Cuando reinicies reComputer, verás que el eMMC se ha convertido en un dispositivo de almacenamiento externo en la interfaz principal, y verás que la huella del sistema se ha reducido, por lo que la expansión fue exitosa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/11.png" /></div>

!!!Attention
    La ruta SSD predeterminada en el archivo de script es `/dev/nvme0n1p1`, que también es la ruta asignada por defecto por reComputer. Si encuentras que tu ruta SSD no coincide con esto usando el comando `sudo fdisk -l`, cambia la ruta de todos los `/dev/nvme0n1p1` en los archivos **copy-rootfs-ssd.sh**, **data/setssdroot.service**, y **data/setssdroot.sh** en rootOnNVMe a la ruta donde se encuentra tu SSD.
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/21.png" /></div>


    La expansión anterior no eliminará el contenido del directorio raíz original del eMMC. Si no quieres arrancar desde el SSD, puedes quitar el SSD y el sistema seguirá arrancando desde el eMMC.

## Expansión de capacidad mediante dispositivo de almacenamiento USB

Los dispositivos de almacenamiento USB, como las unidades flash USB y los discos duros móviles, se utilizan ampliamente como almacenamiento externo en varias áreas de la vida, y la expansión USB también es aplicable a reComputer. La siguiente tabla enumera los productos reComputer que están actualmente disponibles para soluciones de expansión USB.

<table align="center">
  <tbody><tr>
      <th align="center">Producto</th>
      <th align="center">reComputer J1010</th>  
    </tr>
    <tr>
      <th align="center">SKU</th>
      <td align="center">110061362</td>
    </tr>
    <tr>
      <th align="center">Vista lateral</th>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" /></div></td>
    </tr>
    <tr>
      <th align="center">Módulo equipado</th>
      <td align="center">Jetson Nano 4G</td>
    </tr>
    <tr>
      <th align="center">Placa portadora operativa</th>
      <td align="center">Placa portadora J1010</td>
    </tr>
  </tbody>
</table>


La mayor ventaja de escalar mediante dispositivos de almacenamiento USB sobre escalar mediante SSD es el alto grado de conveniencia de los dispositivos USB y la simplicidad de removerlos.
Sin embargo, incluso con la interfaz USB 3.2 de alta velocidad, la tasa de transferencia de datos es mucho menor que la del bus PCIe estándar, por lo que el método de expansión SSD es superior en términos de estabilidad, confiabilidad y velocidad de transferencia de datos.

### Requisitos de Software y Hardware

Las siguientes condiciones deben cumplirse para la solución de expansión usando USB, que es el requisito básico para verificar que la expansión se pueda realizar exitosamente.

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">requisitos de software y hardware</th>  
    </tr>
    <tr>
      <th align="center">reComputer para Jetson</th>
      <td align="left">Versiones de JetPack 4.4 ~ 4.6 <br />
        El Módulo Equipado necesita ser Jetson Nano</td>
    </tr>
    <tr>
      <th align="center">Dispositivos de almacenamiento USB</th>
      <td align="left">Los dispositivos de almacenamiento USB necesitan ser sistema de archivos extendido de cuarta generación (Ext4) <br />
        Corriente de alimentación del dispositivo de almacenamiento USB ≤ 0.5 A</td>
    </tr>
  </tbody>
</table>


!!!Attention
    La versión actualizada de JetPack no ha sido probada para expansión, por lo que no se puede garantizar la estabilidad o el éxito de la expansión, por favor sigue este tutorial cuidadosamente.

    Los dispositivos de almacenamiento USB de gran capacidad requieren que el reComputer esté alimentado correctamente para mantener el funcionamiento adecuado, y no se recomiendan dispositivos de almacenamiento USB con capacidades superiores a 512 GB. La alimentación insuficiente puede causar que reComputer se apague.

    Los Módulos Equipados distintos a Jetson Nano no soportan expansión usando este método en este momento.

    Los dispositivos de almacenamiento con sistemas de archivos que no sean sistema de archivos extendido de cuarta generación (Ext4) no pueden completar operaciones de expansión.

### Pasos de expansión

**Paso 1.** Preparar los documentos necesarios

Usa el comando git para descargar los archivos de script que necesitamos usar en reComputer.

```sh
$ git clone https://github.com/limengdu/bootFromUSB.git
$ cd bootFromUSB
```

**Paso 2.** Preparando el dispositivo de almacenamiento USB

Conecta un dispositivo de almacenamiento USB al reComputer y abre la herramienta Discos que viene con Ubuntu 18.04 usando el atajo `Ctrl+F` o haciendo clic en el icono de Ubuntu en la esquina superior izquierda y buscando **Discos**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

Selecciona tu dispositivo de almacenamiento USB en el lado izquierdo y luego selecciona **Formatear Disco** en la esquina superior derecha bajo la barra de menú.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd1.jpg" /></div>


Formatea tu dispositivo de almacenamiento USB al formato GPT. Aparecerá una ventana emergente pidiéndote que confirmes e ingreses tu contraseña de usuario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd2.png" /></div>


Luego, hacemos clic en el **+** del medio para agregar un carácter de disco.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd4.png" /></div>


Haz clic en "Siguiente".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd5.png" /></div>


Por favor, dale un nombre a tu dispositivo de almacenamiento USB y selecciona **Ext4** en el tipo y haz clic en "Crear". En este punto hemos completado la preparación del dispositivo de almacenamiento USB según los requisitos de expansión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd6.png" /></div>


**Paso 3.** Montando un dispositivo de almacenamiento USB

El dispositivo de almacenamiento USB preparado según el **paso 2** se puede ver en el software Discos como no montado.

!!!Note
	Si encuentras que tu dispositivo USB se ha montado automáticamente después del formateo, omite este paso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/60.png" /></div>


Usamos el siguiente comando para montar el dispositivo USB.

```sh
$ mkdir /media/USB/
$ sudo mount <USB Device Path> /media/USB/
```

Donde `<USB Device Path>` se refiere a la ruta del dispositivo de almacenamiento USB, este parámetro se puede ver en Device del software Disks o se puede consultar con el comando `sudo fdisk -l`. Por ejemplo, para mi dispositivo USB, puedo montar `/dev/sda1` en `/media/USB/` con el siguiente comando.

```sh
$ sudo mount /dev/sda1 /media/USB/
```

Usa el siguiente comando para verificar la ubicación de montaje del dispositivo.

```sh
$ sudo findmnt -rno TARGET <USB Device Path>
```

Para mi dispositivo USB, los comandos que necesito usar son:

```sh
$ sudo findmnt -rno TARGET /dev/sda1
```


**Paso 4.** Copiar el sistema a un dispositivo de almacenamiento USB

El script **copyRootToUSB.sh** copia el contenido de todo el sistema eMMC al dispositivo de almacenamiento USB. Por supuesto, el dispositivo de almacenamiento USB debe tener más espacio de almacenamiento que el eMMC.

El comando utilizado es el siguiente.

```sh
usage: ./copyRootToUSB.sh [OPTIONS]
-d | --directory     Directory path to parent of kernel

-v | --volume_label  Label of Volume to lookup

-p | --path          Device Path to USB drive (e.g. /dev/sda1)

-h | --help  This message
```

En general, para necesidades de expansión regulares, podemos simplemente seleccionar `-p` en el parámetro `[OPTIONS]` y luego necesitamos agregar la ruta del dispositivo USB (por ejemplo, `/dev/sda1`), que obtuvimos en el **paso 3**. Por ejemplo, para mi dispositivo USB, el comando completo que necesito usar es:

```sh
$ ./copyRootToUSB.sh -p /dev/sda1
```

El tiempo que tarda en ejecutarse este comando depende del tamaño de los archivos almacenados en tu eMMC.

**Paso 5.** Consultar el UUID de dispositivos USB

Solo para estar seguros, necesitamos buscar el UUID del dispositivo USB.

```sh
$ ./partUUID.sh 
```

La ruta predeterminada para este comando es **sda1 (/dev/sda1)**, pero también puedes determinar el UUID de otros dispositivos USB. especifica `/dev/` usando la bandera `-d`. Por ejemplo, para mi dispositivo USB sería:

```sh
$ ./partUUID.sh -d sdb1

UUID of Disk: /dev/sdb1
e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5
Sample for /boot/extlinux/extlinux.conf entry:
APPEND ${cbootargs} root=UUID=e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5 rootwait rootfstype=ext4
```

!!!Atención
    Si el UUID devuelto difiere en formato y longitud del ejemplo anterior, entonces el dispositivo probablemente no está formateado como Ext4, ¡comienza de nuevo desde el **paso 2**!

**Paso 6.** Modificar la configuración de arranque para completar la expansión

Necesitamos hacer una copia de seguridad del archivo de configuración de arranque primero.

```sh
$ sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
```

Este paso es el más importante y peligroso en la operación de expansión del dispositivo USB. Edita el archivo `/boot/extlinux/extlinux.conf` y `/media/nvidia/boot/extlinux/extlinux.conf`, luego añade una entrada para apuntar al nuevo rootfs, la ubicación es la ruta del dispositivo USB, complétala en el parámetro `<path>` a continuación. La información de la ruta se obtiene en el **paso 3**.

```sh
$ sudo vi /boot/extlinux/extlinux.conf
$ sudo vi /media/nvidia/boot/extlinux/extlinux.conf

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=<path> rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
```

Para el dispositivo de almacenamiento USB que estoy usando, el archivo `/boot/extlinux/extlinux.conf` modificado y `/media/nvidia/boot/extlinux/extlinux.conf` se lee de la siguiente manera:

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

Guarda el archivo y reinicia reComputer, el sistema raíz cambiará al dispositivo de almacenamiento USB y la expansión estará completa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/62.png" /></div>


## Restaurar Copia de Seguridad del Sistema Vía Consola Serial

Cuando tu sistema no arranca correctamente debido a un error, o por alguna otra razón (un escenario común es que el icono de Nvidia sigue apareciendo repetidamente al arrancar), entonces la copia de seguridad que hiciste durante la expansión jugará un papel importante. Entendemos tu ansiedad en este momento, pero por favor ten paciencia y sigue los pasos a continuación para hacer que reComputer entre en la consola serial y operaremos el U-boot para restaurar tu copia de seguridad.

### Preparación de Materiales

<table align="center">
  <tbody><tr>
      <th align="center">Preparación de Materiales</th>
      <th align="center">Descripción</th>  
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/7.jpeg" /></div></th>
      <td align="left">Host Ubuntu x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div></th>
      <td align="left">reComputer Jetson x1 sin acceso al sistema</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/5.png" /></div></th>
      <td align="left"><a href="https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?queryID=cb30ad1a9d75c9ef437912535186b130&objectID=1112&indexName=bazaar_retailer_products">Módulo UART a USB x1</a></td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/6.png" /></div></th>
      <td align="left"><a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html?queryID=a51c4491cb6b462a1e844c832c98c52a&objectID=2042&indexName=bazaar_retailer_products">Cable DuPont hembra a hembra x3</a></td>
    </tr>
  </tbody>
</table>


### Pasos para acceder a la consola serial

**Paso 1.** Conectar el módulo UART a USB al reComputer

Conecta el reComputer al módulo UART a USB según las instrucciones de cableado en la tabla a continuación.

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


!!!Tip
    La interfaz VCC entre el reComputer y el módulo UART a USB no necesita ser conectada.

    El reComputer no necesita ser encendido por el momento después de conectar el cable, así que por favor déjalo a un lado por ahora.

    Por favor desconecta la memoria externa expandida.

**Paso 2.** Instalar e iniciar minicom en el host Ubuntu

Si tu host Ubuntu no tiene minicom instalado, puedes instalar minicom en tu computadora con el siguiente comando.

```sh
$ sudo apt-get install minicom
```

Después de esperar a que se complete la instalación, ingresa el comando para iniciar minicom.

```sh
$ sudo minicom
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/40.png" /></div>

**Paso 3.** Preparando la configuración de minicom

En la barra de menú de minicom, abrimos el puerto serie y lo configuramos para poder obtener la información de inicio del reComputer a través de minicom. En la barra de menú, presiona la tecla **o** del teclado para acceder a la pantalla de configuración. Usa las teclas de flecha arriba y abajo del teclado para controlar el cursor y moverlo a **Serial port setup**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/41.png" /></div>

**Paso 4.** Conectando el reComputer al host Ubuntu

En este momento, creamos una nueva ventana de línea de comandos e ingresamos comandos en la ventana para monitorear el acceso del nuevo dispositivo.

```sh
$ dmesg --follow
```

En este punto encenderemos el reComputer y conectaremos el módulo UART a USB con el reComputer conectado al host Ubuntu a través del puerto USB. La ventana de línea de comandos mostrará el nombre del dispositivo recién conectado, necesitamos encontrar el fragmento que comience con **tty** y anotarlo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/44.png" /></div>

**Paso 5.** Operación U-boot

Regresa a minicom y completa el nombre del dispositivo obtenido en el **paso 4** en **Serial Device**. También, verifica si la velocidad de baudios está configurada a **115200**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/42.png" /></div>

Después de modificar, presiona enter para guardar. Selecciona **Save setup as dfl** y sal de la interfaz de minicom.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/43.png" /></div>

Vuelve a ingresar el comando `sudo minicom` y después de entrar a minicom, veremos la información de inicio del reComputer en la ventana.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/45.png" /></div>

Podemos solucionar problemas de por qué el reComputer falla al arrancar usando la información devuelta y usando la ayuda de comandos para ver todos los comandos disponibles bajo el sistema U-boot. Saber cómo usar estos comandos es necesario para resolver el problema, pero por supuesto puede ser difícil.

```sh
Tegra210 (P3450-0000) # help
?         - alias for 'help'
base      - print or set address offset
bdinfo    - print Board Info structure
blkcache  - block cache diagnostics and control
boot      - boot default, i.e., run 'bootcmd'
bootd     - boot default, i.e., run 'bootcmd'
bootefi   - Boots an EFI payload from memory
bootelf   - Boot from an ELF image in memory
booti     - boot Linux kernel 'Image' format from memory
bootm     - boot application image from memory
bootp     - boot image via network using BOOTP/TFTP protocol
bootvx    - Boot vxWorks from an ELF image
cmp       - memory compare
coninfo   - print console devices and information
cp        - memory copy
crc32     - checksum calculation
dcache    - enable or disable data cache
dfu       - Device Firmware Upgrade
dhcp      - boot image via network using DHCP/TFTP protocol
dm        - Driver model low level access
echo      - echo args to console
editenv   - edit environment variable
enterrcm  - reset Tegra and enter USB Recovery Mode
env       - environment handling commands
exit      - exit script
ext2load  - load binary file from a Ext2 filesystem
ext2ls    - list files in a directory (default /)
ext4load  - load binary file from a Ext4 filesystem
ext4ls    - list files in a directory (default /)
ext4size  - determine a file's size
ext4write - create a file in the root directory
false     - do nothing, unsuccessfully
fatinfo   - print information about filesystem
fatload   - load binary file from a dos filesystem
fatls     - list files in a directory (default /)
fatmkdir  - create a directory
fatrm     - delete a file
fatsize   - determine a file's size
fatwrite  - write file into a dos filesystem
fdt       - flattened device tree utility commands
fstype    - Look up a filesystem type
go        - start application at address 'addr'
gpio      - query and control gpio pins
gzwrite   - unzip and write memory to block device
help      - print command description/usage
i2c       - I2C sub-system
icache    - enable or disable instruction cache
imxtract  - extract a part of a multi-image
itest     - return true/false on integer compare
ln        - Create a symbolic link
load      - load binary file from a filesystem
loadb     - load binary file over serial line (kermit mode)
loads     - load S-Record file over serial line
loadx     - load binary file over serial line (xmodem mode)
loady     - load binary file over serial line (ymodem mode)
loop      - infinite loop on address range
ls        - list files in a directory (default /)
lzmadec   - lzma uncompress a memory region
md        - memory display
mii       - MII utility commands
mm        - memory modify (auto-incrementing address)
mmc       - MMC sub system
mmcinfo   - display MMC info
mw        - memory write (fill)
nm        - memory modify (constant address)
nvme      - NVM Express sub-system
part      - disk partition related commands
pci       - list and access PCI Configuration Space
ping      - send ICMP ECHO_REQUEST to network host
printenv  - print environment variables
pxe       - commands to get and boot from pxe files
reset     - Perform RESET of the CPU
run       - run commands in an environment variable
save      - save file to a filesystem
saveenv   - save environment variables to persistent storage
setenv    - set environment variables
sf        - SPI flash sub-system
showvar   - print local hushshell variables
size      - determine a file's size
sleep     - delay execution for some time
source    - run script from memory
sspi      - SPI utility command
sysboot   - command to get and boot from syslinux files
test      - minimal test like /bin/sh
tftpboot  - boot image via network using TFTP protocol
true      - do nothing, successfully
ums       - Use the UMS [USB Mass Storage]
unzip     - unzip a memory region
usb       - USB sub-system
usbboot   - boot from USB device
version   - print monitor, compiler and linker version
```

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
