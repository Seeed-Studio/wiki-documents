---
description: Yocto para reTerminal
title: Yocto para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-Yocto
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# Yocto para reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/yocto-wiki-thumb.jpg" alt="pir" width="500" height="auto"/></p>

## Descripción general

### ¿Qué es el Proyecto Yocto®?

El [Proyecto Yocto](https://www.yoctoproject.org) es un proyecto de colaboración de código abierto que ayuda a los desarrolladores a crear sistemas personalizados basados en Linux para productos embebidos, independientemente de la arquitectura de hardware.

El proyecto proporciona un conjunto flexible de herramientas y un espacio donde los desarrolladores embebidos de todo el mundo pueden compartir tecnologías, pilas de software, configuraciones y mejores prácticas que se pueden usar para crear imágenes de Linux personalizadas para dispositivos embebidos.

El proyecto proporciona un estándar para entregar soporte de hardware y pilas de software, permitiendo el intercambio de configuraciones de software y compilaciones. Las herramientas permiten a los usuarios construir y soportar personalizaciones para múltiples plataformas de hardware y pilas de software de manera mantenible y escalable.

### ¿Por qué usar Yocto?

El Proyecto Yocto tiene un modelo de desarrollo para la creación de Linux embebido que lo distingue de otros sistemas de compilación simples. Se llama el **Modelo de Capas**.

El Modelo de Capas está diseñado para soportar tanto la colaboración como la personalización al mismo tiempo. Las capas son repositorios que contienen conjuntos relacionados de instrucciones que le dicen al sistema de compilación qué hacer. Los usuarios pueden colaborar, compartir y reutilizar capas. Las capas pueden contener cambios a instrucciones o configuraciones anteriores en cualquier momento.

Esta poderosa capacidad de anulación es lo que te permite personalizar capas colaborativas o suministradas por la comunidad anteriores para adaptarse a los requisitos de tu producto.

Usa diferentes capas para separar lógicamente la información en tu compilación. Como ejemplo, podrías tener una capa BSP, una capa GUI, una configuración de distribución, middleware o una aplicación. Poner toda tu compilación en una capa limita y complica futuras personalizaciones y reutilización. Aislar información en capas, por otro lado, ayuda a simplificar futuras personalizaciones y reutilización.

### Características de Yocto

Yocto tiene las siguientes características:

- **Mejores Prácticas CII:** La insignia de Mejores Prácticas de la Iniciativa de Infraestructura Central (CII) de la Fundación Linux (LF) es una forma para que los proyectos de Software Libre/Libre y de Código Abierto (FLOSS) muestren que siguen las mejores prácticas. El Proyecto Yocto está registrado y tiene el siguiente nivel de insignia.

- **Reproducibilidad Binaria:** Si una distribución no es específica sobre qué paquetes incluir para soportar dependencias, o su orden, los sistemas de compilación pueden incluir arbitrariamente paquetes basándose en cuándo se llenan las dependencias. El Proyecto Yocto controla las dependencias evitando la contaminación y ha logrado una reproducibilidad del 99.8% en "core-image minimal" y ligeramente menos en pruebas expandidas.

- **Marco de Desarrollo Multiplataforma (CROPS):** CROPS es un marco de desarrollo multiplataforma de código abierto que aprovecha los contenedores Docker para proporcionar un entorno fácilmente gestionado y extensible que permite a los desarrolladores construir binarios para una variedad de arquitecturas de hosts Windows, Linux y Mac OS X.

- **SDK Extensible:** El SDK Extensible del Proyecto Yocto (eSDK) tiene herramientas que te permiten agregar fácilmente nuevas aplicaciones y bibliotecas a una imagen, modificar el código fuente de un componente existente y probar cambios en el hardware objetivo.

- **Toaster:** Toaster es una interfaz web para OpenEmbedded y BitBake, el sistema de compilación usado por el Proyecto Yocto. Toaster te permite configurar y ejecutar tus compilaciones, y proporciona información y estadísticas sobre el proceso de compilación.

- **Multi-Config:** El sistema de compilación puede automática y eficientemente construir múltiples arquitecturas especificadas con un comando.

- **Compilaciones Binarias:** El Proyecto Yocto permite que archivos binarios sean incluidos en la compilación sin incluir los archivos de código fuente correspondientes.

- **Generación de Manifiesto de Licencias de Código Abierto:** El Proyecto Yocto puede hacer seguimiento de todas las licencias de código abierto usadas en la compilación y proporcionarte un manifiesto de esas licencias y referencias de código fuente.

Siguiendo la guía a continuación, podrás construir tu propia imagen de sistema [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) usando Yocto. ¡Así que comencemos!

## Compilar Código Fuente de Yocto

### Compilación Manual en Máquina Local - Usando Bitbake (Línea de Comandos)

Ahora procederemos a compilar manualmente la imagen del sistema para reTerminal usando Yocto a través de la línea de comandos.

**Nota:** Esta guía fue escrita después de realizar pruebas en una PC anfitriona con Ubuntu 20.04 instalado. Sin embargo, funcionará para otros sistemas Linux.

#### Compilar con la configuración predeterminada para reTerminal

Sigue los pasos a continuación para comenzar a compilar con la configuración predeterminada de reTerminal

- **Paso 1.** Prepara el entorno de desarrollo en la PC anfitriona instalando los siguientes paquetes

```sh
sudo apt update
sudo apt install gawk wget git-core diffstat unzip texinfo gcc-multilib build-essential chrpath socat python3-distutils
```

**Nota:** Si la PC anfitriona está ejecutando una distribución de Linux diferente, por favor consulta [aquí](https://www.yoctoproject.org/docs/1.8/ref-manual/ref-manual.html#required-packages-for-the-host-development-system)

- **Paso 2.** Crea un nuevo directorio de trabajo e ingresa a él

```sh
mkdir reterminal-yocto
cd reterminal-yocto
```

- **Paso 3.** Crear un nuevo directorio para añadir capas e ingresar a él

```sh
mkdir layers 
cd layers
```

- **Paso 4.** Clona el siguiente repositorio de GitHub

```sh
git clone -b dunfell git://git.yoctoproject.org/poky
```

- **Paso 5.** Clona los siguientes repositorios

```sh
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git
git clone -b master git://git.yoctoproject.org/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git
```

- **Paso 6.** Cambiar la versión del kernel de 5.4 a 5.10 en la capa meta-raspberrypi

```sh
cd meta-raspberrypi/
cp -r recipes-kernel/linux/ ../
git checkout dunfell
rm -r recipes-kernel/linux/
mv -f ../linux/ recipes-kernel/
cd ../../
```

- **Paso 7.** Inicializar el entorno de compilación

```sh
source layers/poky/oe-init-build-env
```

- **Paso 8.** Añadir las capas al entorno de compilación

```sh
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
```

- **Paso 9.** Regresa al directorio **build** y ejecuta lo siguiente para comenzar la compilación

```sh
MACHINE="seeed-reterminal" bitbake rpi-test-image
```

#### Encontrar la Imagen Compilada

Después de que la compilación haya terminado, ve al directorio **build** y ejecuta el siguiente comando para verificar si la **imagen del sistema** se generó exitosamente

```sh
cd tmp/deploy/images/seeed-reterminal/;ls -lh rpi-test-image*.wic.bz2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/Yocto-bitbake-image-location.png" alt="pir" width="1000" height="auto"/></p>

Como se muestra en la imagen anterior, **rpi-test-image-seeed-reterminal.rootfs.wic.bz2** es la imagen del sistema generada

#### Comandos Útiles de Bitbake

Consulta lo siguiente para familiarizarte con algunos comandos útiles de Bitbake

##### Iniciar la compilación de la imagen

- bitbake `<image>`

Este comando iniciará la compilación de la imagen. Puedes añadir -k para continuar compilando incluso si se encuentran errores. Aunque el objetivo que falló y cualquier cosa que dependa de él no se puede construir, se construirá tanto como sea posible antes de detenerse.

Ejemplo 1:

```sh
bitbake rpi-test-image
```

No has proporcionado el contenido del documento técnico en Markdown para traducir. Por favor, comparte el texto que necesitas traducir al español y procederé con la traducción siguiendo todas las reglas especificadas.

```sh
bitbake rpi-test-image -k
```

##### Mostrar paquetes en la imagen

- bitbake -g `<image>` && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq

Esto guardará los paquetes dentro de la imagen en un archivo llamado **pn-buildlist** y luego los listará en la consola

Ejemplo:

```sh
bitbake -g rpi-test-image && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/image-packages.png" alt="pir" width="800" height="auto"/></p>

##### Mostrar dependencias de paquetes

- bitbake -g `<package>` && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq

Esto guardará las dependencias del paquete en un archivo llamado **pn-buildlist** y luego las listará en la consola

Ejemplo:

```sh
bitbake -g i2c-tools && cat pn-buildlist | grep -v -e '-native' | grep -v digraph | grep -v -e '-image' | awk '\{print $1\}' | sort | uniq
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/package-depends.png" alt="pir" width="800" height="auto"/></p>

##### Interfaz de usuario del explorador de dependencias de tareas

- bitbake `<image>` -g -u taskexp

Esto será útil para mostrar la Interfaz de Usuario del Explorador de Dependencias de Tareas. Muestra las dependencias entre tareas

Ejemplo:

```sh
bitbake rpi-test-image -g -u taskexp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/task-explorer-ui.png" alt="pir" width="800" height="auto"/></p>

##### Lanzar devshell para un paquete

- bitbake `<package>` -c devshell

Esto abrirá una nueva shell donde los valores del sistema necesarios ya están definidos para el paquete

Ejemplo:

```sh
bitbake evtest -c devshell
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/devshell.png" alt="pir" width="800" height="auto"/></p>

##### Listar tareas del paquete

- bitbake -c listtasks

Esto listará todas las tareas para un paquete

Ejemplo:

```sh
bitbake evtest -c listtasks
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/tasks.png" alt="pir" width="800" height="auto"/></p>

##### Configuración interactiva del kernel

- bitbake virtual/kernel -c menuconfig

Esto abrirá una ventana de configuración interactiva del kernel donde puedes cambiar la configuración según tus necesidades

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/kernel-config.png" alt="pir" width="800" height="auto"/></p>

##### Mostrar capas

- bitbake-layers show-layers

Esto mostrará una lista de las capas actualmente en uso y sus prioridades. Si un paquete existe en dos o más capas, se construirá desde la capa con mayor prioridad

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/layers.png" alt="pir" width="800" height="auto"/></p>

##### Mostrar recetas

- bitbake-layers show-recipes

Esto mostrará todas las recetas disponibles

Si escribes lo siguiente, puedes verificar la receta que usamos anteriormente, que es **rpi-test-image**

```sh
bitbake-layers show-recipes | grep rpi
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/rpi-test.png" alt="pir" width="800" height="auto"/></p>

##### Verificar paquete

- bitbake -s | grep

Esto verificará si un cierto paquete está presente en la configuración actual de Yocto

```sh
bitbake -s | grep openssl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/bitbake-commands/check-package.png" alt="pir" width="800" height="auto"/></p>

##### Guardar registro de compilación detallado

- bitbake -v `<image>` 2>&1 | tee image_build.log

Esto imprimirá (en consola) mientras la imagen comienza a compilarse y almacenará la salida en **image_build.log** con modo detallado

Ejemplo:

```sh
bitbake -v rpi-test-image 2>&1 | tee image_build.log 
```

##### Limpiar el entorno de compilación

- bitbake -c cleanall [paquete]

Esto eliminará todo en el directorio de trabajo, caché de estado y todos los archivos fuente descargados previamente relacionados con el paquete. Esto será útil si estás experimentando problemas de compilación para un paquete en particular

Ejemplo:

```
bitbake -c cleanall i2c-tools
```

### Compilación Manual en Máquina Local - Usando Toaster (GUI)

Ahora procederemos a compilar manualmente la imagen del sistema para reTerminal usando Toaster.

Toaster es una interfaz web para OpenEmbedded y BitBake, el sistema de compilación utilizado por el Proyecto Yocto®. Toaster te permite configurar y ejecutar tus compilaciones, y proporciona información y estadísticas sobre el proceso de compilación.

**Nota:** Esta guía fue escrita después de realizar pruebas en una PC anfitriona con Ubuntu 20.04 instalado.

- **Paso 1.** Actualizar la lista de paquetes

```sh
sudo apt update
```

- **Paso 2.** Prepare el entorno de desarrollo en la PC anfitriona instalando los siguientes paquetes

```sh
sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
     build-essential chrpath socat cpio python3 python3-pip python3-pexpect \
     xz-utils debianutils iputils-ping python3-git python3-jinja2 libegl1-mesa libsdl1.2-dev \
     pylint3 xterm
```

**Nota:** Si tu PC anfitrión está ejecutando una versión diferente de Linux, [haz clic aquí](https://www.yoctoproject.org/docs/3.1/ref-manual/ref-manual.html#required-packages-for-the-build-host) para verificar los paquetes que necesitan ser instalados según tu SO

- **Paso 3.** Clona el siguiente repositorio de GitHub

```sh
git clone -b master git://git.yoctoproject.org/poky
```

- **Paso 4.** Navega al directorio **poky**

```sh
cd poky
```

- **Paso 5.** Instala los siguientes paquetes de toaster

```sh
pip3 install --user -r bitbake/toaster-requirements.txt
```

- **Paso 6.** Revierte al siguiente commit para el directorio poky

```sh
git reset --hard 7ade8346b3a09983257589d22aaada47e0eec010
```

- **Paso 7.** Cargar el script del entorno de compilación

```sh
source oe-init-build-env
```

- **Paso 8.** Desde el directorio **build**, inicia toaster

```sh
source toaster start
```

- **Paso 9.** Para acceder a la interfaz web de Toaster, abre tu navegador favorito e ingresa lo siguiente

```sh
http://127.0.0.1:8000
```

**Nota:** Por defecto, Toaster inicia en el puerto 8000. Puedes usar el parámetro **WEBPORT** para establecer un puerto diferente. Por ejemplo, el siguiente comando establece el puerto a "9000"

```sh
source toaster start webport=9000
```

- **Paso 10.** Una vez que estés dentro de la interfaz web de Toaster, haz clic en **New project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-ui.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Ingresa un **Project name**, establece el **project type** como **New project**, bajo **Release**, selecciona **Local Yocto Project** y finalmente haz clic en **Create project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-name.jpg" alt="pir" width="450" height="auto"/></p>

- **Paso 12.** Dentro de la pestaña **Configuration**, bajo **Machine**, cambia el nombre a **raspberrypi4-64** y haz clic en **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-rpi64.png" alt="pir" width="700" height="auto"/></p>

- **Paso 13.** Haz clic en **Import layer**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-import-layer.png" alt="pir" width="500" height="auto"/></p>

- **Paso 14.** Completa la información de la siguiente manera

  - Layer name: meta-raspberrypi
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/agherzan/meta-raspberrypi.git](https://github.com/agherzan/meta-raspberrypi.git)
  - Git revision: 8dc3a310883ea87cd9900442f46f20bb08e57583

- **Paso 15.** Haz clic en **Import and add to project**

- **Paso 16.** Repite los pasos anteriores para importar más capas de la siguiente manera

- **meta-qt5**

  - Layer name: meta-qt5
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/meta-qt5/meta-qt5.git](https://github.com/meta-qt5/meta-qt5.git)
  - Git revision: master

- **meta-seeed-reterminal**

  - Layer name: meta-seeed-reterminal
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/Seeed-Studio/meta-seeed-reterminal.git](https://github.com/Seeed-Studio/meta-seeed-reterminal.git)
  - Git revision: main

- **meta-oe**

  - Layer name: meta-oe
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/openembedded/meta-openembedded.git](https://github.com/openembedded/meta-openembedded.git)
  - Repository subdirectory: meta-oe
  - Git revision: master

- **meta-python**

  - Layer name: meta-python
  - Where is the layer source code?: In a **Git repository**
  - Git repository URL: [https://github.com/openembedded/meta-openembedded.git](https://github.com/openembedded/meta-openembedded.git)
  - Repository subdirectory: meta-python
  - Git revision: master

- **Paso 17.** Una vez que todas las capas estén importadas, haz clic en la pestaña **Layers** para verificar las capas que hemos agregado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-layers.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 18.** Navega a **BitBake variables** y agrega una nueva variable con lo siguiente

```sh
- Variable:RPI_KERNEL_DEVICETREE_OVERLAYS_append
- Value: overlays/reTerminal.dtbo overlays/i2c3.dtbo
```

**Nota:** Asegúrate de añadir un espacio antes de **overlays/xxxx**

- **Paso 19.** Repite lo mismo para añadir lo siguiente

```sh
- Variable:PACKAGECONFIG_append_pn-qtbase
- Value: eglfs 
```

**Nota:** Asegúrate de añadir un espacio antes de **eglfs**

```sh
- Variable:DISTRO_FEATURES_remove
- Value: x11 wayland vulkan 
```

**Nota:** Asegúrate de añadir un espacio antes de **x11 xxx**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-variables.png" alt="pir" width="500" height="auto"/></p>

- **Paso 20.** Finalmente escribe **rpi-test-image** y haz clic en **Build** para comenzar a construir el proyecto

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build.png" alt="pir" width="500" height="auto"/></p>

Ahora verás el proceso de construcción como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-process.png" alt="pir" width="1000" height="auto"/></p>

Una vez que la construcción haya terminado, verás lo siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-finish.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 21.** Haz clic en **rpi-test-image** para encontrar más detalles sobre la construcción de la imagen

- **Paso 22.** Bajo **Image files**, haz clic en **tar.bz2** para descargar la imagen compilada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 23.** Ve más abajo en esta página para aprender más sobre el **Build Summary**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/toaster-build-stats-2.png" alt="pir" width="1000" height="auto"/></p>

### Descargar Imagen Ya Compilada

Si quieres descargar una imagen del sistema reTerminal que ya está compilada usando Yocto, puedes proceder con los pasos a continuación.

- **Paso 1.** Abre [este enlace](https://github.com/Seeed-Studio/meta-seeed-reterminal/actions) para entrar a la página de **Actions** del repositorio GitHub **meta-seeed-reterminal**

- **Paso 2.** Haz clic en el último flujo de trabajo **Seeed reTerminal Yocto embedded linux**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/workflows.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Bajo **Artifacts**, haz clic en **yocto deploy** para comenzar a descargar la imagen

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/deploy.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Después de descargar la imagen, la imagen se llamará **yocto deploy.zip**. Extrae este archivo **.zip** y encontrarás un archivo llamado **yocto-image.tar.xz**

- **Paso 5.** Extrae este archivo **yocto-image.tar.xz** y encontrarás un archivo llamado **yocto-image.tar**

- **Paso 5.** Extrae este archivo **yocto-image.tar** y navega a `deploy > images > raspberrypi4-64`. Busca un archivo con extensión **.rootfs.wic.bz2**. Ese es el archivo de imagen del sistema

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Yocto/compiled-image-search.png" alt="pir" width="1000" height="auto"/></p>

## Flashear la Imagen al reTerminal

Ahora procederemos a flashear la imagen a la eMMC del CM4 en el reTerminal.

Sigue los pasos en [esta wiki](https://wiki.seeedstudio.com/es/reTerminal/#getting-started-with-reterminal-extended) y presta atención al siguiente paso:

**Nota:** Cuando abras **Raspberry Pi Imager**, haz clic en **CHOOSE OS**, selecciona **Use custom** y elige el archivo **.rootfs.wic.bz2** descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## Primer Arranque en reTerminal

Después de flashear la imagen del sistema en el reTerminal, enciende el reTerminal. Aquí verás el registro del kernel aparecer en la pantalla LCD del reTerminal y al final se abrirá una aplicación de demostración que está hecha usando Qt.

El tiempo de arranque de la imagen del sistema por defecto es de alrededor de 17 segundos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Iniciar Sesión en reTerminal desde PC vía Consola Serial

Se recomienda iniciar sesión en el SO dentro del reTerminal usando una conexión de consola serial. Consulta [esta wiki](https://wiki.seeedstudio.com/es/reTerminal-FAQ/#q5-how-can-i-log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-a-usb-to-serial-converter) para hacer las conexiones de hardware e iniciar sesión como **root**

## Probar Imagen Yocto

Para probar la imagen Yocto anterior con reTerminal, puedes visitar la [wiki de Uso de Hardware e Interfaces de reTerminal](https://wiki.seeedstudio.com/es/reTerminal-hardware-interfaces-usage) y consultar los pasos mencionados.

## Charla en Yocto Project Summit 2021

Esta charla se enfoca principalmente en explicar qué tan fácilmente puedes crear imágenes Linux personalizadas para Placas Portadoras CM4, X86 y Placas STM32 usando el proyecto Yocto. Además, al final de la charla, hay dos demos HMI basadas en Qt, LVGL, y una demo para mostrar actualizaciones OTA seguras y robustas a estos SBCs usando Mender.

<div class="video-container">
<iframe width="720" height="480" src="https://www.youtube.com/embed/OHT9f_NOEpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Recursos

- **[Página Web]** [Documentación de Yocto](https://docs.yoctoproject.org/)
- **[Página Web]** [Manual de Toaster](https://www.yoctoproject.org/docs/current/toaster-manual/toaster-manual.html)
- **[GitHub]** [meta-seeed-reterminal](https://github.com/Seeed-Studio/meta-seeed-reterminal)

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
