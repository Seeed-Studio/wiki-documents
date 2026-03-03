---
description: Cómo construir un router suave doméstico y NAS con ReComputer
title: Cómo construir un router suave doméstico y NAS con ReComputer
keywords:
- ReComputer_Alpha
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How-to-build-a-home-soft-router-and-NAS-With-ReComputer
last_update:
  date: 01/20/2023
  author: jianjing Huang
---

# Cómo construir un router suave doméstico y NAS con ReComputer  

## 1. Preparación del hardware  

- **Placa madre ReComputer:** 8GB RAM + 64GB eMMC en este caso.
- **SSD:** Para construir un NAS, necesitamos unidades de disco de alta capacidad además del eMMC original de 64GB. Se recomienda usar SSDs que tienen una vida útil mucho más larga que los HDDs y no hay necesidad de considerar RAID. Podemos elegir SSD SATA m.2, SSD NVMe m.2, SSD SATA de 2.5", etc.
- **Un ventilador de refrigeración de 8cm de 4 pines:** No es suficiente usar aletas de disipador de calor pasivo en el verano caluroso. Necesitamos un ventilador más grande porque es más silencioso y elegir 8010 en lugar de 9015 para una carcasa más delgada.
- **Una carcasa:** No te preocupes, los documentos de diseño están disponibles para todos y puedes copiar uno como gustes.
- **Grove - Pantalla OLED 0.96":** Hay un microcontrolador para Arduino en la placa madre ReComputer. ¿Por qué no hacer algo interesante con él?
- **Algunos cables,** como cables de datos SATA, cables SSD, cables de ventilador, cables Grove, etc. Algunos de ellos pueden necesitar ser recableados pero no es difícil.  

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/10.jpg)

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/11.jpg)

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/12.jpg)

**Carcasa**  

Se recomienda elegir láminas acrílicas de menos de 3mm de grosor. Más detalles están en el archivo adjunto `ReComputer_DarkBox.dxf`.  

Pilares de soporte: 25mm x 4 y 27mm x 4.  

**Cables**  

Por favor nota la definición del pin HDD_PWR al hacer cables porque el ventilador de refrigeración puede ser alimentado por la fuente de alimentación de 12V en el pin HDD_PWR.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/13.jpg)

## 2. Ensamblaje  

Paso 1: Instalando Grove - Pantalla OLED 0.96" en la carcasa.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/21.jpg)

Paso 2: Instalando el ventilador de refrigeración en la carcasa.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/22.jpg)

Paso 3: Instalando SSD de 2.5" en la carcasa.  


![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/24.jpg)

Paso 4: Cableado.  

Como muestra el diagrama de pines del ventilador de refrigeración de 4 pines, tiene un pin de detección de tacómetro `TACH` y un pin de control de tacómetro `PWM` conectados con los pines 12 y 13 del microcontrolador para Arduino (En realidad depende de la definición en el programa).  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25fan_pinout.png)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25.jpg)

Conecta Grove - Pantalla OLED 0.96" con I2C así como PWR y GND.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/26.jpg)

Conecta el puerto serie de SAMD21 con el puerto serie de la CPU Intel.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25uart.jpg)

Paso 5: Instala las tapas frontal y trasera y aprieta los tornillos.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/27.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/28.jpg)

**Eliminación de calor**  

El aire frío proporcionado por el ventilador fluye a través de las aletas de refrigeración de la CPU y el SSD, eliminando así el calor de manera efectiva.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/29.jpg)

## 3. Instalación y Configuración del Entorno Virtual Proxmox VE  

Necesitamos una memoria USB de no menos de 8GB para la instalación. Aquí está la última versión lanzada de [Proxmox VE ISO](https://www.proxmox.com/en/downloads).  

Grábala en la memoria USB con Etcher.  

Conecta el teclado, ratón, pantalla y memoria USB. Arranca ReComputer y presiona la tecla `F7` continuamente para entrar a la interfaz de selección de dispositivo de arranque. Selecciona arranque desde USB.  

La instalación de PVE es muy simple pero NOTA que:  
**¡PVE NO PUEDE ser instalado en eMMC!**  

Esto es porque el equipo de PVE cree que eMMC no tiene una vida útil más larga que SSD y no está permitido instalar PVE en eMMC.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/pve-grub-menu.png)

(La imagen fue descargada del sitio web de PVE. Mi PVE es versión 6.0.)  

Consulta el [documento de instalación](https://pve.proxmox.com/wiki/Installation) si tienes problemas con ello.  

ReComputer tiene dos puertos de red. Configura cualquiera de los dos como red de gestión de PVE y el otro como puerto WAN del sistema de router suave.  

## 4. Programas Arduino  

SAMD21 (Compatible con Seeeduino Cortex-M0+) en la placa ReComputer se usa para controlar dinámicamente el tacómetro del ventilador según la temperatura de la CPU. Alguna información del sistema PVE se muestra simultáneamente en la pantalla OLED.  

Mis ideas de diseño:  

- PVE es una caja Debian Linux por lo que podemos obtener la temperatura de la CPU programando de manera flexible.
- Es posible flashear el programa a través del puerto USB de SAMD21 con él conectado al puerto USB de la CPU Intel ya.
- Otro puerto serie de SAMD21, Serial1, ha sido conectado al puerto serie de la CPU Intel para que sea posible comunicarse a través de él. ( Creo que el puerto serie por hardware es más confiable que el puerto USB. )
- Escribir un programa Arduino simple para leer la temperatura de la CPU a través de Serial1, controlar el tacómetro del ventilador y manejar para refrescar la pantalla OLED.  

Realmente simple, ¿no es así? Aquí está el [programa Arduino](https://github.com/KillingJacky/DarkBox).  

### 4.1 Compilación  

Lo que hacemos primero es abrir el programa en Arduino IDE. Selecciona `Seeeduino Cortex-M0+` y encuentra el archivo bin con el log de compilación.  

![image-20191112210126228](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/401.png)

![image-20191112210342437](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/402.png)

### 4.2 Flasheo  

Usa el comando `scp` para copiar `ReComputer.ino.bin` generado por Arduino IDE y pégalo en PVE.  

```
scp ReComputer.ino.bin root@192.168.1.x:~
```  

Ejecutar SSH.

```
ssh root@192.168.1.x
```  

Descarga la herramienta de flash `bosaac`  

```
wget http://downloads.arduino.cc/tools/bossac-1.7.0-x86_64-linux-gnu.tar.gz
tar zxvf bossac-1.7.0-x86_64-linux-gnu.tar.gz
cp bossac-1.7.0/bossac /usr/bin/
chmod a+x /usr/bin/bossac
```  

Haz que Arduino entre en modo bootloader cortocircuitando Reset y Gnd dos veces.

![image-20191113230804316](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/resetArduino.png)

Flashea el programa de Arduino con la herramienta de flasheo.  

```
bossac -i -d --port=/dev/ttyACM0 -U true -e -w -v ReComputer.ino.bin -R
```  

Verás esto mostrado en la pantalla:

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/oled_gui.jpg)

La temperatura de la CPU y las revoluciones del ventilador se muestran en la pantalla. El ventilador dejará de funcionar si la temperatura es inferior a 45℃.

El historial de carga del sistema y el uso actual de memoria también se muestran.

Por cierto, no olvides instalar el script en PVE. Consulta el `README` para más detalles en el repositorio de Github.

Ahora ya hemos completado nuestro trabajo en hardware y construido un pequeño servidor PVE con un sistema de refrigeración inteligente y una unidad de disco de 2TB que es suficiente para varias máquinas virtuales y almacenamiento NAS.

## 5. Instalación del Sistema de Enrutamiento Suave

La placa madre ReComputer tiene dos puertos Ethernet Gigabit, lo que facilita la construcción de un sistema de enrutamiento suave. El sistema de enrutamiento suave tiene funciones más potentes que los routers normales, proporcionándote un entorno de red doméstica más profesional.

Elegí el sistema `lede(OpenWrt)` común en la comunidad y no difícil de usar.

Aquí está el diagrama de topología de red:

![image-20191116233322566](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/500networkArch.png)

Paso 1: Descarga e instala la imagen desde [aquí](https://drive.google.com/file/d/1-R5mJOu43bKWHv8ViK2V1dtE4zBLDYyU/view?usp=sharing).

Esta es de código fuente modificado por terceros de lede.

Paso 2: Sube la imagen a PVE.  

```
scp /PATH/TO/openwrt-x86-64-combined-squashfs.qcow2 root@192.168.32.222:~
```  

El archivo .qcow2 se exportó cuando compilé la imagen. Si has descargado el archivo .img, usa este comando para transformarlo.  

```
qemu-img convert -f raw -O qcow2 lede-xxxxxxx-combined-ext4.img vm-100-disk-1.qcow2
```  

Paso 3: Crear una máquina virtual e importar la imagen.

Crear un puerto de red WAN y reiniciar PVE para habilitar la WAN añadida.

![image-20191117161646454](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503createWanBridge.png)

![image-20191117164131776](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503wanActive.png)

Crear una máquina virtual y configurarla como se muestra a continuación (Después del asistente, añadir la segunda tarjeta de red manualmente y eliminar el disco duro).

![image-20191117161819910](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/504ledeSummary.png)

Importar la imagen de disco lede.  

```
root@pve-home:~# qemu-img check openwrt-x86-64-combined-squashfs.qcow2
No errors were found on the image.
685/2824 = 24.26% allocated, 0.00% fragmented, 0.00% compressed clusters
Image end offset: 45219840
root@pve-home:~# qemu-img info openwrt-x86-64-combined-squashfs.qcow2
image: openwrt-x86-64-combined-squashfs.qcow2
file format: qcow2
virtual size: 177M (185073664 bytes)
disk size: 43M
cluster_size: 65536
Format specific information:
    compat: 1.1
    lazy refcounts: false
    refcount bits: 16
    corrupt: false
root@pve-home:~# qm importdisk 100 openwrt-x86-64-combined-squashfs.qcow2 local-lvm
  Rounding up size to full physical extent 180.00 MiB
  Logical volume "vm-100-disk-0" created.
    (100.00/100%)
```  

Tenga en cuenta que 100 es el número de identificación de la máquina virtual creada. Se puede modificar en su computadora.

Luego podemos ver el disco que importamos recién en `local-lvm`.

![image-20191117163326117](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/505diskImported.png)

El disco se muestra en la lista de hardware de la máquina virtual simultáneamente.

![image-20191117163523743](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/506diskImported2.png)

Haga doble clic para agregarlo.

![image-20191117163625885](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/507addDisk.png)

La lista de discos debería verse así:

![image-20191117163718793](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/508finalHardwareSummary.png)

Inicie la máquina virtual, abra la Consola y verifique el registro del Kernel. Cuando se imprima `random: crng init done`, haga clic en Enter. Ver `shell` significa que el arranque fue exitoso.

![image-20191117164609593](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/509ledeBootup.png)

La IP de la red interna de lede es `192.168.1.1`. Necesitamos que nuestra computadora esté conectada al puerto de red LAN del ReComputer para acceder a esta IP configurando la dirección IP a IP estática 192.168.1.x.

![image-20191117165532300](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/510configLaptopNetwork.png)

Ingrese `192.168.1.1` en el navegador para acceder a la interfaz de inicio de sesión de OpenWrt. El nombre de usuario es `root` y la contraseña es `password` por defecto.

![image-20191117165632253](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20191220134207.png)

Cómo jugar con OpenWrt está más allá del alcance de este artículo. ¡Solo estudie y disfrute!

## 6. Instalando sistema NAS

NAS se ha convertido en uno de los servicios que son cada vez más importantes en la red doméstica. Se puede instalar fácilmente en el entorno virtual PVE. En este caso, se selecciona el sistema NAS de código abierto `openmediavault`.

Paso 1: Descargue e instale la imagen desde [aquí](https://sourceforge.net/projects/openmediavault/files/5.0.5/openmediavault_5.0.5-amd64.iso/download).

Paso 2: Suba la imagen a PVE.

![image-20191114152513579](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/602uploadInstaller.png)

Paso 3: Cree una máquina virtual y configúrela como se muestra a continuación:

![image-20191117110324189](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/603omvConfig.png)

Paso 4: Inicie la máquina virtual creada recién e instale openmediavault. Haga clic en `Continue` o `OK` hasta que se complete la instalación.

![image-20191117110717036](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/604installOMV.png)

![image-20191117111323934](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/605installOMVDone.png)

Después de que termine la instalación, la ventana de arriba se mostrará en su pantalla. Ahora se debe remover la imagen ISO de la máquina virtual.

![image-20191117111506366](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/606removeCDROM.png)

Regrese a la Consola y haga clic en Enter para reiniciar su máquina virtual.

![image-20191117111854853](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/607omvFirstBoot.png)

Copie la dirección IP mostrada en la pantalla e ingrésela en el navegador para acceder a la interfaz de inicio de sesión de OpenWrt. El nombre de usuario es `admin` y la contraseña es `openmediavault` por defecto.

![image-20191117112155601](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/608loginOMV.png)

![image-20191117112400979](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/609omvWebUIFirstView.png)

La instalación del sistema openmediavault ya se ha completado. Lo que debemos hacer a continuación es pasar el SSD para mejorar la eficiencia de lectura y escritura del sistema OMV.

Paso 5: Paso directo del disco duro.

IOMMU necesita ser habilitado primero según la documentación de PVE. Después de acceder a PVE usando SSH, ejecute:  

```
root@pve-home:~# vim /etc/default/grub
```  

Añade `intel_iommu=on` después de `1GRUB_CMDLINE_LINUX_DEFAULT` .

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"
```  

Ejecuta `update-grub` .  

```
root@pve-home:~# update-grub
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-5.0.15-1-pve
Found initrd image: /boot/initrd.img-5.0.15-1-pve
Found memtest86+ image: /boot/memtest86+.bin
Found memtest86+ multiboot image: /boot/memtest86+_multiboot.bin
Adding boot menu entry for EFI firmware configuration
done
```  

Tienes que asegurarte de que los siguientes módulos estén cargados. Esto se puede lograr añadiéndolos a '*/etc/modules*'

```
vfio
 vfio_iommu_type1
 vfio_pci
 vfio_virqfd
```  

Después de cambiar cualquier cosa relacionada con módulos, necesitas actualizar tu `initramfs`. En Proxmox VE esto se puede hacer ejecutando:  

```
root@pve-home:~# update-initramfs -u -k all
```  

Finalmente reinicia para que los cambios surtan efecto y verifica que efectivamente esté habilitado.

```
[    1.810500] DMAR: Setting RMRR:
[    1.810644] DMAR: Setting identity map for device 0000:00:02.0 [0x77800000 - 0x7fffffff]
[    1.810794] DMAR: Setting identity map for device 0000:00:15.0 [0x75935000 - 0x75954fff]
[    1.810805] DMAR: Prepare 0-16MiB unity mapping for LPC
[    1.810891] DMAR: Setting identity map for device 0000:00:1f.0 [0x0 - 0xffffff]
[    1.810959] DMAR: Intel(R) Virtualization Technology for Directed I/O
```  

Si ves las salidas anteriores, IOMMU está habilitado.

Verifica en qué interfaz PCI está el disco duro que queremos pasar. El controlador SATA conectado a la interfaz SATA3 está en la interfaz 00: 12.0.  

```
root@pve-home:~# lspci -nn
00:00.0 Host bridge [0600]: Intel Corporation Device [8086:31f0] (rev 03)
00:02.0 VGA compatible controller [0300]: Intel Corporation Device [8086:3185] (rev 03)
00:0c.0 Network controller [0280]: Intel Corporation Device [8086:31dc] (rev 03)
00:0e.0 Audio device [0403]: Intel Corporation Device [8086:3198] (rev 03)
00:0f.0 Communication controller [0780]: Intel Corporation Celeron/Pentium Silver Processor Trusted Execution Engine Interface [8086:319a] (rev 03)
00:12.0 SATA controller [0106]: Intel Corporation Device [8086:31e3] (rev 03)
00:13.0 PCI bridge [0604]: Intel Corporation Device [8086:31d8] (rev f3)
00:14.0 PCI bridge [0604]: Intel Corporation Device [8086:31d6] (rev f3)
00:14.1 PCI bridge [0604]: Intel Corporation Device [8086:31d7] (rev f3)
00:15.0 USB controller [0c03]: Intel Corporation Device [8086:31a8] (rev 03)
00:17.0 Signal processing controller [1180]: Intel Corporation Device [8086:31b4] (rev 03)
00:17.1 Signal processing controller [1180]: Intel Corporation Device [8086:31b6] (rev 03)
00:17.2 Signal processing controller [1180]: Intel Corporation Device [8086:31b8] (rev 03)
00:18.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31bc] (rev 03)
00:18.1 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31be] (rev 03)
00:18.2 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31c0] (rev 03)
00:18.3 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31ee] (rev 03)
00:19.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO SPI Host Controller [8086:31c2] (rev 03)
00:1c.0 SD Host controller [0805]: Intel Corporation Celeron/Pentium Silver Processor SDA Standard Compliant SD Host Controller [8086:31cc] (rev 03)
00:1e.0 SD Host controller [0805]: Intel Corporation Device [8086:31d0] (rev 03)
00:1f.0 ISA bridge [0601]: Intel Corporation Device [8086:31e8] (rev 03)
00:1f.1 SMBus [0c05]: Intel Corporation Celeron/Pentium Silver Processor Gaussian Mixture Model [8086:31d4] (rev 03)
01:00.0 Non-Volatile memory controller [0108]: Samsung Electronics Co Ltd NVMe SSD Controller SM961/PM961 [144d:a804]
02:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
03:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
```  

Regresa a la interfaz web en PVE. Selecciona `Hardware -> Add PCI Device` en la máquina virtual OMV.

![image-20191117114829217](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/610pciPassthrough.png)

![image-20191117155102090](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/611selectPCI.png)

Después de eso, reinicia la máquina virtual y encontraremos que el disco duro ha sido identificado en OMV.

![image-20191117155433087](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/612seeTheNewDisk.png)

Consulta la documentación de openmediavault para más detalles y ¡disfrútalo!
