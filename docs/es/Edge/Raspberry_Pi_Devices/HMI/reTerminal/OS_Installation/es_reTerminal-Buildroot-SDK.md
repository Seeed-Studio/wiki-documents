---
description: Buildroot para reTerminal
title: Buildroot para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-Buildroot-SDK
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# Buildroot para reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/thumb.jpg" alt="pir" width="500" height="auto"/></p>

## Introducción

[Buildroot](https://buildroot.org) es una herramienta fácil de usar que simplifica y automatiza el proceso de construcción de un sistema Linux completo para un sistema embebido, utilizando compilación cruzada.

Para lograr esto, Buildroot es capaz de generar una cadena de herramientas de compilación cruzada, un sistema de archivos raíz, una imagen del kernel de Linux y un cargador de arranque para tu objetivo. Buildroot puede ser usado para cualquier combinación de estas opciones, independientemente (puedes por ejemplo usar una cadena de herramientas de compilación cruzada existente, y construir solo tu sistema de archivos raíz con Buildroot).

Tiene una estructura simple que lo hace fácil de entender y extender. Se basa únicamente en el conocido lenguaje Makefile. Buildroot es un proyecto de código abierto y muchos desarrolladores contribuyen a él diariamente.

Siguiendo la guía a continuación, podrás construir tu propia imagen del sistema [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) usando Buildroot. ¡Así que comencemos!

## Compilar el Código Fuente de Buildroot

### Compilación Manual en Máquina Local

Ahora procederemos a compilar manualmente la imagen del sistema para reTerminal usando Buildroot.

**nota:** Esta guía fue escrita después de probar en una PC anfitriona con Ubuntu 20.04 instalado. Sin embargo, funcionará para otros sistemas Linux.

- **Paso 1.** Prepara el entorno de desarrollo en la PC anfitriona instalando los siguientes paquetes (git, gcc y make)

```sh
sudo apt update
sudo apt install git
sudo apt install build-essential
```

**Nota:** Si ya tienes los paquetes anteriores instalados, puedes omitir este paso.

- **Paso 2.** Clona el siguiente repositorio de GitHub

```sh
git clone --depth=1 https://github.com/Seeed-Studio/seeed-linux-buildroot.git -b master
```

- **Paso 3.** Navega al directorio **seeed-linux-buildroot**

```sh
cd seeed-linux-buildroot
```

#### Compilar con la configuración predeterminada para reTerminal

Escribe lo siguiente para comenzar a compilar con la configuración predeterminada de reTerminal

```sh
make reTerminal_64_defconfig
make
```

#### Compilar con tu propia configuración para reTerminal

Escribe lo siguiente para instalar el paquete necesario para compilar con tu propia configuración

```sh
sudo apt install libncurses-dev
```

- **Paso 5.** Escribe lo siguiente para abrir la ventana de configuración de buildroot

```sh
make menuconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/menuconfig.png" alt="pir" width="1000" height="auto"/></p>

Puedes usar esta ventana de configuración y navegar a través de las opciones disponibles y **personalizar la imagen** según tus necesidades. También si haces clic en **Save** y **Exit** desde esta ventana sin hacer ningún cambio, se cargará la configuración predeterminada de reTerminal.

#### Encontrar la Imagen Compilada

Una vez que la compilación sea exitosa, navega a `seeed-linux-buildroot/output/images` y encontrarás la imagen compilada como **sdcard.img**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/image-location-1.png" alt="pir" width="1000" height="auto"/></p>

### Descargar Imagen Ya Compilada

Si quieres descargar una imagen del sistema reTerminal que ya está compilada usando Buildroot, puedes proceder con los pasos a continuación.

- **Paso 1.** Abre [este enlace](https://github.com/Seeed-Studio/seeed-linux-buildroot/actions) para entrar a la página de **Actions** del repositorio de GitHub **seeed-linux-buildroot**

- **Paso 2.** Haz clic en el último flujo de trabajo **Seeed reTerminal buildroot**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/workflow.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Bajo **Artifacts**, haz clic en **buildroot deploy** para comenzar a descargar la imagen

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/download.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Después de descargar la imagen, extrae la imagen para obtener el archivo **sdcard.img**

## Flashear la Imagen al reTerminal

Ahora procederemos a flashear la imagen al eMMC del CM4 en el reTerminal.

Sigue los pasos en [esta wiki](https://wiki.seeedstudio.com/es/reTerminal/#getting-started-with-reterminal-extended) y presta atención al siguiente paso:

**Nota:** Cuando abras **Raspberry Pi Imager**, haz clic en **CHOOSE OS**, selecciona **Use custom** y elige el archivo **sdcard.img** descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/RPi-imager-1.png" alt="pir" width="600" height="auto"/></p>

## Primer Arranque en reTerminal

Después de flashear la imagen del sistema al reTerminal, enciende el reTerminal. Aquí verás el registro del kernel aparecer en la pantalla LCD del reTerminal y al final se abrirá una aplicación de demostración que está hecha usando Qt.

El tiempo de arranque de la imagen del sistema predeterminada es alrededor de 30 segundos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/bootup.gif" alt="pir" width="1000" height="auto"/></p>

## Analizar la Imagen de Buildroot

Como se mencionó anteriormente, Buildroot es una herramienta muy poderosa, puede depender de bibliotecas y herramientas de terceros, puede construir rápidamente lo que necesitamos. Si quieres entender el tiempo de compilación de Buildroot, dependencias, tamaño de los recursos consumidos por la compilación y demás, es muy inconveniente verificar a través del código. Sin embargo, Buildroot proporciona herramientas de análisis visual para analizar lo mencionado anteriormente y solo necesitamos unos pocos comandos simples para usarlas.

Comienza instalando los siguientes paquetes

```sh
sudo apt install python3-matplotlib python3-numpy
```

### Generar Diagramas de Dependencias

Una de las tareas de Buildroot es entender las dependencias entre paquetes y asegurarse de que se construyan en el orden correcto. Estas dependencias a veces pueden ser complejas, y para un sistema dado, a menudo no es fácil entender por qué un paquete u otro fue introducido por Buildroot y construido exitosamente. Para ayudar a entender las dependencias y comprender mejor el papel de los diferentes componentes en sistemas Linux embebidos, Buildroot es capaz de generar diagramas de dependencias (en formato PDF)

- **Paso 1.** Instala el siguiente paquete

```sh
sudo apt install graphviz
```

- **Paso 2.** Generar diagramas de dependencias

```sh
make graph-depends
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildroot/depends-command.png" alt="pir" width="1000" height="auto"/></p>

Después de los comandos anteriores, los diagramas de dependencias se generarán en `seeed-linux-buildroot > output > graphs` como:

- graph-depends.pdf
- graph-depends.dot

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-depends-img.png)

**Nota:** Haz clic en la imagen anterior para ver una versión ampliada

### Generar Análisis del Tamaño de los Recursos Consumidos por la Compilación

Buildroot puede generar un análisis del tamaño de los recursos consumidos por la compilación.

Escribe el siguiente comando

```sh
make graph-size
```

Después del comando anterior, los archivos de análisis visual se generarán en `seeed-linux-buildroot > output > graphs` como:

- graph-size.pdf
- file-size-stats.csv
- package-size-stats.csv

[![](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)](https://files.seeedstudio.com/wiki/ReTerminal/buildroot/graph-size-img.png)

**Nota:** Haz clic en la imagen anterior para ver una versión ampliada

## Probar la Imagen de Buildroot

Para probar la imagen de Buildroot anterior con reTerminal, puedes visitar la [wiki de Uso de Hardware e Interfaces de reTerminal](https://wiki.seeedstudio.com/es/reTerminal-hardware-interfaces-usage) y consultar los pasos mencionados.

## Recursos

- **[Página web]** [Documentación de Buildroot](https://buildroot.org/docs.html)
- **[GitHub]** [seeed-linux-buildroot](https://github.com/Seeed-Studio/seeed-linux-buildroot)

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
