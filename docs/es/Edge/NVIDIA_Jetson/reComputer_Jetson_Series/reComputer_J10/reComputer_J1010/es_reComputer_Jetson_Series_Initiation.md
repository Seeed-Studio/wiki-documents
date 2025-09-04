---
description: Iniciación de reComputer para Jetson
title: Iniciación de reComputer para Jetson
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Jetson_Series_Initiation
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Iniciación de reComputer para Jetson

Todos los reComputer para Jetson vienen cargados con 16 GB eMMC donde `ubuntu 18.04 LTS` y `NVIDIA JetPack 4.6` ya están instalados. Sigue las instrucciones, conecta los periféricos, puedes encenderlo y usarlo directamente en pocos segundos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png" alt="pir" width="auto" height="auto" /></p>

## 1. Conectar Periféricos

Conecta el host reComputer a un teclado y ratón conectados por USB, y conéctalo a la pantalla a través del puerto HDMI o puerto DP (solo placa portadora A206).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Para el host reComputer con interfaces HDMI o DP, aunque tiene dos puertos de salida de pantalla, no admite salida de pantalla dual, lo que significa que solo se puede usar una interfaz de salida de pantalla a la vez.
:::

## 2. Encendido

Después de conectar los periféricos, conecte la alimentación al host reComputer.

- La fuente de alimentación del [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) se alimenta a través de la interfaz Type-C, y la posición de la fuente de alimentación cerca de la interfaz HDMI se muestra en la figura a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png" alt="pir" width={600} height="auto" /></p>

:::note
[reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) tiene un puerto Type-C en ambos lados, donde el de la derecha, cerca del puerto LAN, es el puerto de transmisión de datos. Está estrictamente prohibido insertar la fuente de alimentación Type-C en el puerto de transmisión de datos de la derecha, ya que podría dañar los componentes.
:::

- [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html), y [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) se alimentan mediante interfaz DC que está cerca de la interfaz HDMI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png" alt="pir" width={600} height="auto" /></p>

Después de conectar a la fuente de alimentación, el host reComputer se encenderá automáticamente.

## 3. Configuración Inicial

El nuevo reComputer ya tiene el sistema instalado. Pero antes de que podamos usarlo, aún requiere algunas configuraciones iniciales necesarias.

### Paso 1: Esperar el encendido

Después del encendido, lo primero que verás será el enorme icono de NVIDIA mostrado en el centro de la pantalla. Antes de entrar a la página de configuración, puedes encontrar que reComputer se reinicia automáticamente dos veces, este proceso tomará aproximadamente un minuto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 2: Revisar y aceptar la licencia

En la página de configuración, primero se te pedirá revisar la licencia y seleccionar "**I accept the terms of these licenses**" para aceptarla y luego proceder al siguiente paso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 3: Elegir idioma del sistema y distribución del teclado

Después de hacer clic en el botón "Continue", la siguiente página te pedirá seleccionar el idioma del sistema y la distribución del teclado. Puedes seleccionarlos según tus necesidades reales.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 4: Conectar a la red

Hay dos formas de conectar el reComputer a Internet. Una es conectar directamente con un cable de red, y la otra es conectar a Internet a través de Wi-Fi (se requiere módulo inalámbrico). Si no necesitas acceso a Internet para actualizaciones de software, puedes elegir no conectarte a Internet para el siguiente paso cuando estés en este paso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 5: Configurar información de usuario y contraseña

En la siguiente página, se te pedirá ingresar tu nombre de usuario y contraseña. Necesitarás recordar tu contraseña de inicio ya que la necesitarás para iniciar reComputer más tarde.

Si encuentras tedioso ingresar tu contraseña cada vez que inicias reComputer, y para asegurar que nadie más pueda usarlo, puedes seleccionar la opción "Require my password to log in" a continuación, aunque no lo recomendamos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 6: Seleccionar el voltaje de alimentación

Lo último que elegirás es el voltaje de alimentación mientras el reComputer está operando.

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) y [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) están ambos equipados con módulo Jetson Nano. Recomendamos altamente el modelo **MAXN**, que asegura que tu reComputer opere normalmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg" alt="pir" width={600} height="auto" /></p>

- [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) y [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) están ambos equipados con módulo Jetson Xavier NX, que proporcionará una variedad de opciones de potencia de salida de alimentación. El modelo predeterminado es 10 W como `MODE_10W_DESKTOP - (Default)` que puedes ver aquí:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg" alt="pir" width={600} height="auto" /></p>

:::note
La siguiente tabla muestra los modos de energía predefinidos por NVIDIA y los límites de uso de recursos asociados del módulo.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg" /></div>
:::

Después de completar las instrucciones anteriores, necesitamos esperar 1~2 minutos para que el reComputer haga la configuración final.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg" /></div>

## 4. Primeros Pasos

Después de que el reComputer complete la configuración inicial, se reiniciará automáticamente. Y después de eso, entrará al escritorio del sistema como se muestra en la figura a continuación. Muestra que el sistema está en su lugar y puede ser usado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg" alt="pir" width={800} height="auto" /></p>

Debido a que el producto incluye un eMMC integrado de 16 GB donde se ha instalado `ubuntu 18.04 LTS` y `NVIDIA JetPack 4.6`, el espacio libre restante del usuario es de aproximadamente 2GB. La siguiente figura muestra el resultado después de usar el comando de espacio en disco en la terminal:

```shell
seeed@seeed-desktop:~$ df -hl
Filesystem      Size  Used Avail Use% Mounted on
/dev/mmcblk0p1   14G   12G  2.0G  86% /
none            3.5G     0  3.5G   0% /dev
tmpfs           3.8G   75M  3.8G   2% /dev/shm
tmpfs           3.8G   22M  3.8G   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           3.8G     0  3.8G   0% /sys/fs/cgroup
tmpfs           777M  128K  777M   1% /run/user/1000
seeed@seeed-desktop:~$
```

## Instalar sistema NVIDIA en reComputer

Si tus dispositivos reComputer se bloquean y quieres reinstalar el sistema NVIDIA. Aquí te proporcionamos el wiki sobre cómo instalar el Sistema NVIDIA en reComputer. Los wikis proporcionados incluyen placas portadoras A20X y Placa Portadora reComputer J1010:

- [Instalar sistema NVIDIA basado en placa portadora A20X](https://wiki.seeedstudio.com/es/reComputer_J2021_J202_Flash_Jetpack/)
- [Instalar sistema NVIDIA basado en Placa Portadora reComputer J1010](https://wiki.seeedstudio.com/es/reComputer_J1010_J101_Flash_Jetpack/)

## Solución de problemas

### P1: El espacio restante en la eMMC en el reComputer recibido es solo de aproximadamente 2GB, ¿cómo puedo resolver el problema de espacio insuficiente?

Actualmente ofrecemos tres formas de lidiar con esta situación particular, y puedes elegir la solución adecuada para ti basándote en la situación real.

**Opción 1.** Redespliegue de sistemas a dispositivos de almacenamiento externos

Si no has comenzado un proyecto con reComputer, podrías considerar usar esta opción para redesplegar el nuevo sistema en un dispositivo de almacenamiento con capacidad suficiente.

- Generalmente hay dos formas de instalar un sistema para reComputer, la primera es usar el **NVIDIA SDK Manager**.

Si estás en un **reComputer J2011** o **reComputer J2012**, en el **paso 12** de [Flasheo a eMMC con SDK Manager](/es/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line), puedes expandir la capacidad cambiando la ubicación de la grabación del sistema.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
Este método no es aplicable al módulo Jetson Nano.
:::

- Generalmente hay dos formas de instalar un sistema para reComputer, la segunda es usar las **líneas de comandos**.

- Si estás usando una **placa portadora A20X**, el método para instalar el sistema usando la línea de comandos está en [Flasheo a eMMC con línea de comandos](/es/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line).

- Si estás usando la **Placa Portadora reComputer J1010**, entonces usa la línea de comandos para instalar el sistema en [Flasheo a eMMC con línea de comandos](/es/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line).

Ambos esencialmente completan la instalación del sistema usando el siguiente comando.

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

Donde:

1. `[options]` es una o más opciones de línea de comandos. Todas las opciones son opcionales. Consulte [Uso del Script de Flasheo](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage) para obtener información sobre las opciones.

2. `<board>` especifica la configuración que se aplicará al dispositivo a flashear. Los valores se enumeran en la tabla en [Módulos y Configuraciones Jetson](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations) en el tema [Inicio Rápido](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart). `flash.sh` obtiene la configuración de un archivo de configuración llamado `<board>.conf`.

3. `<rootdev>` especifica el tipo de dispositivo a flashear. Use el valor **mmcblk0p1** para flashear un dispositivo de almacenamiento local (eMMC o tarjeta SD, dependiendo de la plataforma), a diferencia de un servidor NFS, por ejemplo.

Como puede ver en la explicación anterior, si queremos instalar el sistema en almacenamiento externo, podemos hacerlo cambiando la opción `<rootdev>`.

Para una partición en un dispositivo de almacenamiento USB conectado al dispositivo reComputer, ingrese este comando:

```sh
sudo ./flash.sh <board> sda<x>
```

Para una partición en un dispositivo de almacenamiento NVMe conectado al dispositivo reComputer, ingresa este comando:

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` es un número que especifica la posición de la partición APP en el dispositivo de almacenamiento, por ejemplo `sda1` para un dispositivo USB, o `nvme0n1p1` para un dispositivo de almacenamiento NVMe.

**Opción 2.** Eliminar componentes innecesarios de JetPack para aumentar el espacio eMMC.

NVIDIA JetPack SDK es la solución más completa para construir aplicaciones de IA aceleradas de extremo a extremo. Todos los módulos Jetson y kits de desarrollo están soportados por JetPack SDK.

JetPack SDK incluye el Jetson Linux Driver Package (L4T) con sistema operativo Linux y bibliotecas y APIs aceleradas CUDA-X para Deep Learning, Computer Vision, Accelerated Computing y Multimedia. También incluye muestras, documentación y herramientas de desarrollo tanto para computadora host como para kit de desarrollo, y soporta SDKs de nivel superior como DeepStream para análisis de video en streaming e Isaac para robótica.

[Esta tabla](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages) lista todos los componentes incluidos en JetPack 4.6.

<table align="center">
  <tbody><tr>
      <th align="center">Grupo de Componentes</th>
      <th colSpan={2} align="center" valign="middle">Paquetes</th>
    </tr>
    <tr>
      <th align="center" valign="middle">CUDA Toolkit para L4T</th>
      <td align="center">cuda <br /> cuda-11-4 <br /> cuda-cccl-11-4 <br /> cuda-command-line-tools-11-4 <br /> cuda-compiler-11-4 <br /> cuda-cudart-11-4 <br /> cuda-cudart-dev-11-4 <br /> cuda-cuobjdump-11-4 <br /> cuda-cupti-11-4 <br /> cuda-cupti-dev-11-4 <br /> cuda-cuxxfilt-11-4 <br /> cuda-documentation-11-4 <br /> cuda-driver-dev-11-4 <br /> cuda-gdb-11-4 <br /> cuda-gdb-src-11-4 <br /> cuda-libraries-11-4 <br /> cuda-libraries-dev-11-4 <br /> cuda-minimal-build-11-4 <br /> cuda-nvcc-11-4 <br /> cuda-nvdisasm-11-4 <br /> cuda-nvml-dev-11-4 <br /> cuda-nvprof-11-4 <br /> cuda-nvprune-11-4 <br /> cuda-nvrtc-11-4 <br /> cuda-nvrtc-dev-11-4 <br /> cuda-nvtx-11-4</td>
      <td align="center">cuda-runtime-11-4 <br /> cuda-samples-11-4 <br /> cuda-sanitizer-11-4 <br /> cuda-toolkit-11-4 <br /> cuda-toolkit-11-4-config-common <br /> cuda-toolkit-11-config-common <br /> cuda-toolkit-config-common <br /> cuda-tools-11-4 <br /> cuda-visual-tools-11-4 <br /> libcublas-11-4 <br /> libcublas-dev-11-4 <br /> libcudla-11-4 <br /> libcudla-dev-11-4 <br /> libcufft-11-4 <br /> libcufft-dev-11-4 <br /> libcurand-11-4 <br /> libcurand-dev-11-4 <br /> libcusolver-11-4 <br /> libcusolver-dev-11-4 <br /> libcusparse-11-4 <br /> libcusparse-dev-11-4 <br /> libnpp-11-4 <br /> libnpp-dev-11-4</td>
    </tr>
    <tr>
      <th align="center">cuDNN</th>
      <td align="center">libcudnn8 <br /> libcudnn8-dev</td>
      <td align="center">libcudnn8-samples</td>
    </tr>
    <tr>
      <th align="center">TensorRT</th>
      <td align="center">graphsurgeon-tf <br /> libnvinfer-bin <br /> libnvinfer-dev <br /> libnvinfer-doc <br /> libnvinfer-plugin-dev <br /> libnvinfer-plugin8 <br /> libnvinfer-samples <br /> libnvinfer8</td>
      <td align="center">libnvonnxparsers-dev <br /> libnvonnxparsers8 <br /> libnvparsers-dev <br /> libnvparsers8 <br /> python3-libnvinfer <br /> python3-libnvinfer-dev <br /> tensorrt <br /> uff-converter-tf</td>
    </tr>
    <tr>
      <th align="center">OpenCV</th>
      <td align="center">libopencv <br /> libopencv-dev <br /> opencv-licenses</td>
      <td align="center">libopencv-python <br /> libopencv-samples</td>
    </tr>
    <tr>
      <th align="center">VPI</th>
      <td align="center">libnvvpi2 <br /> vpi2-dev <br /> python-vpi2</td>
      <td align="center">python3.9-vpi2 <br /> vpi2-samples <br /> vpi2-demos</td>
    </tr>
    <tr>
      <th align="center">NVIDIA container runtime con integración Docker</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">Multimedia API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

El JetPack SDK contiene mucho contenido, pero no es algo que todos los desarrolladores necesiten usar. Por lo tanto, es una de las buenas opciones eliminarlos selectivamente para obtener más espacio de almacenamiento.

Podemos ver información sobre el JetPack instalado en reComputer Jetson con el siguiente comando.

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

Con este comando, puedes aprender rápidamente el contenido de los componentes instalados en JetPack, como CUDA, openCV, etc.

Para obtener información más detallada, puedes usar el siguiente comando para conocer todo el software actualmente instalado por reComputer y su información de descripción.

```sh
dpkg-query -l
```

Luego, puedes eliminar selectivamente el contenido que no necesites según tus necesidades reales y la información de descripción del componente. El comando para eliminar es el siguiente.

```sh
sudo apt autoremove ${packagesname}
```

La variable de entorno `${packagesname}` indica el nombre del paquete de componente que deseas eliminar. Si quieres eliminar todos los paquetes con un prefijo determinado, puedes agregar `*` a este prefijo para indicarlo.

Como ejemplo, si queremos eliminar todos los componentes sobre **CUDA**, entonces podemos usar el siguiente comando.

```sh
sudo apt autoremove cuda*
```

Después de liberar el contenido del componente CUDA, puedes ver que la capacidad restante del eMMC también se volverá mayor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

Lo mismo se aplica a otros componentes de JetPack.

**Opción 3.** Expansión de capacidad mediante dispositivos de almacenamiento externos.

Puedes elegir esta opción si has estado usando reComputer normalmente durante algún tiempo y no quieres destruir el entorno del sistema existente para completar la solución de expansión.

Ya tenemos una wiki de expansión bien desarrollada [Expansión de Memoria para la serie reComputer](https://wiki.seeedstudio.com/es/reComputer_Jetson_Memory_Expansion/).

Vale la pena señalar que cualquier operación de expansión es peligrosa y esperamos que seas proactivo en **hacer copias de seguridad** de tu sistema antes de que todo comience.

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

