---
description: Comenzando con balenaOS en ODYSSEY-X86
title: Instalación de BalenaOS
keywords:
- Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BalenaOS-X86-Getting-Started
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/thumb.png" alt="pir" width="1000" height="auto"/></p>

## ¿Qué es balenaOS?

[balenaOS](https://www.balena.io/os) es un sistema operativo optimizado para ejecutar contenedores Docker en dispositivos embebidos, con énfasis en la confiabilidad durante largos períodos de operación, así como un flujo de trabajo productivo para desarrolladores inspirado en las lecciones aprendidas mientras se construía balena.

La idea central detrás de balenaOS es que los contenedores de Linux ofrecen, por primera vez, un camino práctico para usar virtualización en dispositivos embebidos. Las VMs e hipervisores han llevado a enormes saltos en productividad y automatización para despliegues en la nube, pero su abstracción del hardware, así como su sobrecarga de recursos y falta de soporte de hardware, significa que no son adecuados para escenarios embebidos. Con la virtualización a nivel de sistema operativo, como se implementa para contenedores de Linux, ambas objeciones se eliminan para dispositivos Linux, de los cuales hay muchos en el Internet de las Cosas.

## ¿Qué es balenaCloud?

[balenaCloud](https://www.balena.io/cloud) es una infraestructura integral de despliegue y gestión de dispositivos basada en la nube alojada por balena. Permite incluso al propietario de flota más novato construir aplicaciones en cualquier lenguaje, aprovisionar dispositivos sin problemas, probar rápidamente nuevas características y gestionar fácilmente su flota de dispositivos. La tecnología de contenedores Docker permite actualizaciones seguras, protegidas y confiables a través de un solo comando mientras los dispositivos permanecen en línea y completamente funcionales. Los usuarios pueden ver y gestionar toda su flota de dispositivos usando el panel de balenaCloud o pueden elegir interactuar directamente con la API.

## Inicio rápido con balenaOS en ODYSSEY - X86

La forma más fácil de instalar balenaOS en el ODYSSEY - X86, junto con balenaCloud, involucra solo unos pocos pasos:

- Crear una flota de dispositivos en balenaCloud
- Grabar la imagen de balenaOS en una unidad USB
- Conectar una unidad USB al ODYSSEY - X86 y arrancar la imagen en vivo
- El ODYSSEY - X86 arrancado aparece en el panel de balenaCloud

¡Ahora procedamos!

### Prerrequisitos

Prepara lo siguiente antes de comenzar:

- [Placa ODYSSEY - X86](https://www.seeedstudio.com/ODYSSEY-X86J4125864-p-4916.html)
- Unidad flash USB
- Cable Ethernet o conectividad WiFi
- [Cuenta de balena](https://dashboard.balena-cloud.com/signup)
- [balenaEtcher](https://www.balena.io/etcher) o cualquier otro software de grabación de imágenes

### Crear una flota de dispositivos en balenaCloud

- **Paso 1.** [Regístrate](https://dashboard.balena-cloud.com/signup) para una cuenta de balena e inicia sesión

- **Paso 2.** Después de iniciar sesión, haz clic en **Create fleet** para crear tu primera flota de dispositivos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/5.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Una flota es un grupo de dispositivos que comparten la misma arquitectura y ejecutan el mismo código. Cuando aprovisionas un dispositivo, se añade a una flota específica, pero puede ser migrado a otra flota en cualquier momento.

- **Paso 3.** Escribe un nombre para la flota, selecciona **Seeed ODYSSEY-X86** como el tipo de dispositivo predeterminado, mantén **Starter** como el tipo de flota y finalmente haz clic en **Create new fleet**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/6.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Para crear una flota con múltiples contenedores, querrás usar el tipo de flota Starter o Microservices. Las flotas Starter tienen todas las características y son gratuitas para todos los usuarios, con un límite de hasta 10 dispositivos totales en todas las flotas Starter.

- **Paso 4.** Haz clic en **+ Add device** para añadir la placa ODYSSEY - X86 a esta flota y conectarla con balenaCloud

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/7.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 5.** Aquí el **tipo de dispositivo** ya estará seleccionado y la **versión** se seleccionará como la última disponible. Selecciona **Development** como la **edición**, ya que se recomienda para usuarios primerizos. También puedes seleccionar la conexión de red como **Ethernet only** o **Wifi + Ethernet**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/8.png" alt="pir" width="650" height="auto"/></p>

**Nota:** Cuando estás comenzando, una imagen de Development es la más útil, ya que permite muchas características de prueba y solución de problemas. Para uso en producción, asegúrate de cambiar a una imagen de Production. Más detalles sobre las diferencias entre imágenes de Development y Production se detallan [aquí](https://www.balena.io/docs/reference/OS/overview/2.x/#development-vs-production-images).

- **Paso 6.** Haz clic en **+ Advanced** para seleccionar la frecuencia con la que tu dispositivo verifica actualizaciones

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/9.png" alt="pir" width="350" height="auto"/></p>

### Grabar y ejecutar la imagen de balenaOS desde una unidad USB

- **Paso 1.** Una vez que la configuración de la imagen esté completa, haz clic en la flecha junto a **Flash**, y selecciona **Download balenaOS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/10.jpg" alt="pir" width="300" height="auto"/></p>

Cuando la descarga se complete, deberías tener un archivo de imagen comprimido con un nombre como **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img**, donde **ODYSSEY-fleet** es el nombre que le diste a tu flota en el panel. Alternativamente, haciendo clic en la sección de alternancia del botón de descarga, también tienes la opción de descargar solo un archivo de configuración (config.json) en lugar de una imagen completa.

- **Paso 2.** Abre [balenaEtcher](https://www.balena.io/etcher), haz clic en **Flash from file** y selecciona el archivo **zip** que descargamos antes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/etcher.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Conecta una unidad flash USB a la PC, selecciona el **destino** como la unidad flash conectada y luego haz clic en **Flash**

A continuación, ejecutaremos esta imagen en el ODYSSEY - X86

- **Paso 4.** Conecta la unidad flash al tablero ODYSSEY - X86 y enciende el tablero

- **Paso 5.** Mientras enciendes el tablero, mantén presionada la **tecla DELETE** para ingresar a la **configuración del BIOS**

- **Paso 6.** Ve a la sección **Boot** y configura la **Boot Option #1** como **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 7.** Ve a **Save & Exit** y selecciona **Save Changes and Reset**

Ahora el SO se iniciará exitosamente desde la unidad flash USB

### Gestionar ODYSSEY - X86 desde el panel de balenaCloud

- **Paso 1.** Abre el panel de balenaCloud nuevamente y el tablero ODYSSEY - X86 aparecerá después de aproximadamente un minuto!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/11.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Haz clic en el dispositivo de la lista para acceder al panel del dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/12.png" alt="pir" width="1000" height="auto"/></p>

Si no puedes conectar el dispositivo en línea, por favor visita el [canal de soporte de balena](https://www.balena.io/docs/learn/welcome/support)

## FAQ

### P1: ¿Cómo puedo ejecutar la imagen de balenaOS desde HDD/SSD?

Si quieres ejecutar la imagen de balenaOS desde HDD/SSD en lugar de ejecutarla desde una unidad USB, puedes seguir los pasos a continuación

- **Paso 1.** Sigue desde el **paso 1 - paso 7** en la sección anterior **Flash y ejecutar imagen de balenaOS desde una unidad USB**

- **Paso 2.** Después de iniciar exitosamente, apaga el tablero desde el panel de balenaCloud

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/13.png" alt="pir" width="700" height="auto"/></p>

**Nota:** Necesitamos iniciar una vez después del flasheo porque la partición **resin-data** crecerá para ocupar el espacio restante en la unidad flash, y usaremos ese espacio para almacenar la imagen que necesitamos flashear al HDD/SSD.

- **Paso 3.** Retira la unidad flash del ODYSSEY - X86 y conéctala a la PC

- **Paso 4.** Extrae el **archivo de imagen comprimido** descargado anteriormente

- **Paso 5.** Abre una ventana de terminal y copia la imagen extraída **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** a la carpeta **resin-data** dentro de la partición **resin-data** de la unidad flash

```sh
sudo cp balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img /media/username/resin-data/resin-data
```

**Nota:** Cambia **username** por el nombre de usuario de tu PC

- **Paso 6.** Retira la unidad Flash de la PC y conéctala a la placa ODYSSEY - X86. También conecta un HDD/ SSD externo a la placa ODYSSEY.

- **Paso 7.** Después de que la placa haya arrancado, navega al panel de balenaCloud y accede a la **Terminal**. Aquí haz clic en el menú desplegable **Select a target**, selecciona **Host OS** y haz clic en **Start terminal session**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/15.jpg" alt="pir" width="10000" height="auto"/></p>

- **Paso 8.** Escribe el siguiente comando en la terminal

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/fdisk-l.png" alt="pir" width="620" height="auto"/></p>

Podemos ver que el HDD conectado aparece como **/dev/sda**

- **Paso 9.** Flashea el archivo **balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img** que copiamos anteriormente al HDD/SSD conectado usando la utilidad **dd**

```sh
dd if=/resin-data/balena-cloud-ODYSSEY-fleet-odyssey-x86-2.88.15+rev2-v12.11.16.img of=/dev/sda
```

**Nota:** Reemplaza **/dev/sda** con el nombre correspondiente al HDD/SSD conectado

- **Paso 10.** Una vez que el flasheo esté completo, apaga el ODYSSEY - X86

- **Paso 11.** Retira la unidad flash USB y enciende el ODYSSEY - X86

- **Paso 12.** Mientras enciendes la placa, mantén presionada la **TECLA DELETE** para entrar a la configuración del BIOS

- **Paso 13.** Ve a la sección **BOOT** y configura la **Boot Option #1** a **UEFI OS xxxxx**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/bios.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 14.** Ve a **Save & Exit** y selecciona **Save Changes and Reset**

Ahora el SO se iniciará exitosamente desde el HDD/SSD

### P2: ¿Cómo puedo acceder al ODYSSEY - X86 usando terminal?

Puedes acceder al ODYSSEY - X86 vía terminal pero necesitas tener Balena CLI instalado en la PC anfitriona. Balena CLI es una Interfaz de Línea de Comandos para balenaCloud u openBalena. Es una herramienta de software disponible para Windows, macOS y Linux, utilizada a través de una ventana de símbolo del sistema / terminal. Puede usarse de forma interactiva o invocarse en scripts.

- **Paso 1.** Sigue [este enlace](https://github.com/balena-io/balena-cli/blob/master/INSTALL.md) para instalar Balena CLI según tu sistema operativo.

**Nota:** Para este tutorial, usaremos Balena CLI en Ubuntu. Sin embargo, las instrucciones serán similares para otros sistemas.

- **Paso 2.** Conecta un cable Ethernet al ODYSSEY - X86 desde tu router

**Nota:** Asegúrate de que la PC anfitriona y el ODYSSEY - X86 estén en la misma red

- **Paso 3.** Abre una ventana de terminal y escanea dispositivos BalenaOS en la red local

```sh
sudo balena scan
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/scan.png" alt="pir" width="550" height="auto"/></p>

- **Paso 4.** Conectarse por SSH a la placa usando la dirección IP

```sh
balena ssh <ip address>
```

```sh
example:
balena ssh 192.168.1.78
```

¡Ahora estamos dentro del ODYSSEY - X86 ejecutando BalenaOS!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/ssh.png" alt="pir" width="650" height="auto"/></p>

Aprende más sobre balena CLI [aquí](https://www.balena.io/docs/reference/balena-cli/)

### P3: ¿Cómo puedo compilar balenaOS desde el código fuente?

Aunque podemos obtener la imagen de balenaOS desde el panel de balenaCloud como se explicó anteriormente, si te sientes aventurero, ¡puedes proceder a compilar la imagen de balenaOS desde el código fuente!

#### Compilación Manual en Máquina Local

Ahora procederemos a compilar manualmente la imagen del sistema BalenaOS para ODYSSEY - X86 usando Yocto a través de la línea de comandos.

**Nota:** Esta guía fue escrita después de realizar pruebas en una PC anfitriona con Ubuntu 20.04 instalado. Sin embargo, funcionará para otros sistemas Linux.

- **Paso 1.** Prepara el entorno de desarrollo en la PC anfitriona instalando los siguientes paquetes

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**Nota:** Si la PC anfitriona está ejecutando una distribución de Linux diferente, por favor consulta [aquí](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **Paso 2.** Clona el siguiente repositorio y entra al repositorio

```sh
git clone https://github.com/balena-os/balena-seeed-x86
cd balena-seeed-x86
```

- **Paso 3.** Descargar todas las dependencias requeridas

```sh
git submodule update --init --recursive
```

- **Paso 4.** Ejecuta el script de construcción

```sh
./balena-yocto-scripts/build/barys
```

Ahora comenzará el proceso de compilación. Espera pacientemente hasta que la compilación termine. El tiempo de compilación dependerá de las especificaciones de hardware de la máquina de construcción.

#### Encontrar la Imagen Compilada

Después de que termine la compilación, ejecuta el siguiente comando para verificar si la imagen del sistema se generó exitosamente

```sh
cd build/tmp/deploy/images/odyssey-x86/;ls -lh *balenaos-img
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/image-location.png" alt="pir" width="1000" height="auto"/></p>

- **balena-image-odyssey-x86** se utiliza para arrancar directamente desde almacenamiento externo (Unidad Flash, SSD, HDD) conectado al ODYSSEY - X86.
- **balena-image-flasher-odyssey-x86** se utiliza para arrancar directamente desde el almacenamiento eMMC interno en ODYSSEY - X86. Por lo tanto, esta imagen flasher se graba en una Unidad Flash que se utiliza para el arranque inicial. Cuando arranca, esta imagen flasher instalará automáticamente BalenaOS en el almacenamiento eMMC interno.

#### Usando la Imagen Compilada

Por defecto, las imágenes tienen la extensión de archivo **.balenaos-img**. Antes de proceder a flashear estas imágenes, necesitas renombrar la extensión del archivo a **.img**.

Por ejemplo:

- Renombra **balena-image-odyssey-x86.balenaos-img** a **balena-image-odyssey-x86.img**.
- Renombra **balena-image-flasher-odyssey-x86.balenaos-img** a **balena-image-flasher-odyssey-x86.img**

## Recursos

- **[Página Web]** [Documentación de Balena](https://www.balena.io/docs)

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
