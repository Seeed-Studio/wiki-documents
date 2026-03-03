---
description: reComputer-FAQ
title: El espacio restante en el eMMC del reComputer recibido es de solo unos 2GB, ¿cómo resolver el problema de espacio insuficiente?
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /es/solution_of_insufficient_space
last_update:
  date: 2023/6/30
  author: Seraphina
---

<!-- ### P1: El espacio restante en el eMMC del reComputer recibido es de solo unos 2GB, ¿cómo puedo resolver el problema de espacio insuficiente? -->

Actualmente ofrecemos tres formas de lidiar con esta situación particular, y puedes elegir la solución adecuada para ti basándote en la situación real.

**Opción 1.** Redespliegue de sistemas a dispositivos de almacenamiento externos

Si no has comenzado un proyecto con reComputer, podrías considerar usar esta opción para redesplegar el nuevo sistema en un dispositivo de almacenamiento con capacidad suficiente.

- Generalmente hay dos formas de instalar un sistema para reComputer, la primera es usar el **NVIDIA SDK Manager**.

Si estás en un **reComputer J2011** o **reComputer J2012**, en el **paso 12** de [Flasheo a eMMC con SDK Manager](/es/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line), puedes expandir la capacidad cambiando la ubicación de la grabación del sistema.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
Este método no es aplicable al módulo Jetson Nano.
:::

- Generalmente hay dos formas de instalar un sistema para reComputer, la segunda es usar las **líneas de comando**.

- Si estás usando una **placa portadora A20X**, el método para instalar el sistema usando la línea de comando está en [Flasheo a eMMC con línea de comando](/es/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line).

- Si estás usando la **Placa Portadora reComputer J1010**, entonces usa la línea de comando para instalar el sistema en [Flasheo a eMMC con línea de comando](/es/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line).

Ambos esencialmente completan la instalación del sistema usando el siguiente comando.

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

Donde:

1. `[options]` es una o más opciones de línea de comandos. Todas las opciones son opcionales. Consulte [Uso del Script de Flasheo](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage) para obtener información sobre las opciones.

2. `<board>` especifica la configuración que se aplicará al dispositivo a flashear. Los valores se listan en la tabla en [Módulos y Configuraciones Jetson](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations) en el tema [Inicio Rápido](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart). `flash.sh` obtiene la configuración de un archivo de configuración llamado `<board>.conf`.

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
      <th align="center">Runtime de contenedores NVIDIA con integración Docker</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">API Multimedia</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

El SDK JetPack contiene mucho contenido, pero no es algo que todos los desarrolladores necesiten usar. Por lo tanto, es una de las buenas opciones eliminarlos selectivamente para obtener más espacio de almacenamiento.

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

La variable de entorno `${packagesname}` indica el nombre del paquete de componente que deseas eliminar. Si quieres eliminar todos los paquetes con un prefijo determinado, puedes añadir `*` a este prefijo para indicarlo.

Como ejemplo, si queremos eliminar todos los componentes sobre **CUDA**, entonces podemos usar el siguiente comando.

```sh
sudo apt autoremove cuda*
```

Después de liberar el contenido del componente CUDA, puedes ver que la capacidad restante del eMMC también se volverá mayor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

Lo mismo se aplica a otros componentes de JetPack.

**Opción 3.** Expansión de capacidad mediante dispositivos de almacenamiento externos.

Puedes elegir esta opción si has estado usando reComputer normalmente durante algún tiempo y no quieres destruir el entorno del sistema existente para completar la solución de expansión.

Ya tenemos un wiki de expansión bien desarrollado [Expansión de Memoria para la serie reComputer](https://wiki.seeedstudio.com/es/reComputer_Jetson_Memory_Expansion/).

Vale la pena señalar que cualquier operación de expansión es peligrosa y esperamos que seas proactivo en **hacer copias de seguridad** de tu sistema antes de que todo comience.
