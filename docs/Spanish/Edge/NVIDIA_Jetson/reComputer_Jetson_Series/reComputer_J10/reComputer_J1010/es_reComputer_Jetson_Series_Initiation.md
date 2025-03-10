---
description: reComputer para iniciar con la plataforma Jetson
title: reComputer para iniciar con la plataforma Jetson
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

# Primeros pasos con la reComputer impulsada por Jetson

Todas las reComputer Jetson tienen 16 GB eMMC donde ya están instalados `ubuntu 18.04 LTS` y `NVIDIA JetPack 4.6`. Sigue las instrucciones, conecta los periféricos, podrás encenderla y usarla directamente en unos segundos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png" alt="pir" width="auto" height="auto" /></p>

## 1. Conectar periféricos

Conecta la reComputer a un teclado y mouse mediante USB y conéctalo a la pantalla a través del puerto HDMI o DP (solo Carrier Board A206).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg" alt="pir" width={600} height="auto" /></p>

:::nota
Para la reComputer con interfaz HDMI o DP, aunque tiene dos puertos de salida de pantalla, no admite salida de pantalla doble, lo que significa que solo se puede usar una pantalla.
:::

## 2. Encendido de la reComputer

Después de conectar los periféricos, conecta la alimentación a la reComputer.

- La fuente de alimentación de la [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) se suministra mediante una interfaz Tipo-C, y la posición de la fuente de alimentación cerca de la interfaz HDMI se muestra en la siguiente imágen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png" alt="pir" width={600} height="auto" /></p>

:::nota
La [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) tiene un puerto tipo C en ambos lados, el de la derecha, cerca del puerto LAN, es el puerto de transmisión de datos. Está estrictamente prohibido insertar la fuente de alimentación en el puerto de transmisión de datos de la derecha, esto puede causar daños a los componentes.
:::

- La [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html), [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html), y [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) son alimentadas por una interfaz DC que está cerca de la interfaz HDMI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png" alt="pir" width={600} height="auto" /></p>

Después de conectarse a la fuente de alimentación, la reComputer se encenderá automáticamente.

## 3. Configuración inicial

La nueva reComputer ya ha flasheado el sistema. Pero antes de que podamos usarla, todavía se requieren algunas configuraciones iniciales necesarias.

### Paso 1: Espera a que se encienda

Después de encenderla, lo primero que verás será el enorme ícono de NVIDIA que se muestra en el medio de la pantalla. Antes de ingresar a la página de configuración, es posible que la reComputer se reinicie automáticamente dos veces; este proceso tomará aproximadamente un minuto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 2: Revisa y acepta la licencia

En la página de configuración, primero se te pedirá que verifiques la licencia y selecciona "**Acepto los términos de estas licencias**" para aceptarla y luego continuar con el siguiente paso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 3: Elige el idioma del sistema y la distribución del teclado

Después de hacer click en el botón "Continuar", la siguiente página te pedirá que selecciones el idioma del sistema y la distribución del teclado. Puedes seleccionarlos según tus necesidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 4: Conectarse a la red

Hay dos formas de conectar la reComputer a Internet. Uno es conectarse directamente con un cable de red y el otro es conectarse a Internet a través del Wi-Fi (se requiere un módulo inalámbrico). Si no necesitas acceso a Internet para las actualizaciones de software, puedes optar por no conectarte a Internet.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg" alt="pir" width={600} height="auto" /></p>

### Paso 5: Configurar la información de usuario y la contraseña

En la página siguiente, se te pedirá que ingreses tu nombre de usuario y contraseña. Deberás recordar tu contraseña de inicio, ya que deberás reiniciar la reComputer en pasos posteriores.

Si te resulta tedioso ingresar tu contraseña cada vez que inicias la reComputer y para asegurarte de que nadie más pueda usarla, puedes seleccionar la opción "Solicitar mi contraseña para iniciar sesión" a continuación, ya que no la recomendamos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg" alt="pir" width={600} height="auto" /></p>

### Step 6: Seleccionar la cantidad de voltaje suministrada

Lo último que elegirá es el voltaje de suministro mientras la reComputer está en funcionamiento.

- La [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) y [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) están equipadas con el módulo Jetson Nano. Recomendamos encarecidamente el modelo **MAXN**, para garantizar que tu computadora funcione normalmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg" alt="pir" width={600} height="auto" /></p>

- La [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html) y  [reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) están equipadas con el módulo Jetson Xavier NX, que proporcionará una variedad de opciones de potencia de salida de fuente de alimentación. El modelo predeterminado es 10 W como `MODE_10W_DESKTOP - (Predeterminado)` que puedes ver aquí:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg" alt="pir" width={600} height="auto" /></p>

:::nota
La siguiente tabla muestra los modos de energía predefinidos de NVIDIA y los límites de uso de recursos del módulo asociado.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg" /></div>
:::

Después de completar las instrucciones anteriores, debemos esperar de 1 a 2 minutos para que la reComputer realice la configuración final.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg" /></div>

## 4. Iniciando

Después de que la reComputer complete la configuración inicial, se reiniciará automáticamente. Y después de eso, ingresará al escritorio del sistema como se muestra en la siguiente figura. Muestra que el sistema está implementado y se puede utilizar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg" alt="pir" width={800} height="auto" /></p>

Debido a que el producto incluye un eMMC integrado de 16 GB donde se han instalado "ubuntu 18.04 LTS" y "NVIDIA JetPack 4.6", el espacio libre restante para el usuario es de aproximadamente 2 GB. La siguiente figura muestra el resultado después de usar el comando de espacio en disco en la terminal:

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

## Instala el sistema NVIDIA en tu reComputer

Si tus dispositivos reComputer fallan y deseas reinstalar el sistema NVIDIA. Aquí te proporcionamos la wiki sobre cómo instalar el sistema NVIDIA en una reComputer. Las wikis proporcionadas incluyen las Carrier Board's A20X y J1010:

- [Instala el sistema NVIDIA en una reComputer con Carrier Board A20X](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack/)
- [Instala el sistema NVIDIA en una reComputer con Carrier Board J1010](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/)

## Solución de problemas

### Pregunta 1: El espacio restante en el eMMC en la reComputer recibida es solo de  2 GB, ¿cómo puedo resolver el problema de espacio insuficiente?

Actualmente ofrecemos tres formas de abordar esta situación particular y puedes elegir la solución adecuada para ti en función de tu situación.

**Opción 1.** Redistribución de sistemas a dispositivos de almacenamiento externos

Si no has iniciado un proyecto con la reComputer, podrías considerar usar esta opción para volver a implementar el nuevo sistema en un dispositivo de almacenamiento con capacidad suficiente.

- Generalmente hay dos formas de instalar un sistema para reComputer, la primera es usar **NVIDIA SDK Manager**.

Si estás en una **reComputer J2011** o **reComputer J2012**, en el **paso 12** de la wiki [Flashear a eMMC con SDK Manager](reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line), puedes ampliar la capacidad cambiando la ubicación del sistema de grabación.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
Este método no es aplicable al módulo Jetson Nano.
:::

- Generalmente hay dos formas de instalar un sistema para la reComputer, la segunda es usar la **línea de comandos**.

- Si estás utilizando una **Carrier Board A20X**, el método para instalar el sistema usando la línea de comandos se encuentra en la siguiente wiki [Flashear a eMMC mediante la línea de comandos](/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line).

- Si estás utilizando la **Carrier Board reComputer J1010**, utiliza la línea de comandos para instalar el sistema en [Flashear a eMMC con línea de comandos](/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line).

Básicamente, ambos completan la instalación del sistema utilizando el siguiente comando.

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

Donde:

1. `[options]` es una o más opciones de línea de comandos. Para todas las opciones son opcionales. Revisa [Uso de Script de flasheo](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage) para encontrar información acerca de las opciones disponibles.

2. `<board>` especifica la configuración que se aplicará al dispositivo que se va a actualizar. Los valores se enumeran en la tabla mostrada en [Módulos y configuraciones Jetson](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations) en la sección [Inicio rápido](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart). `flash.sh` obtiene la configuración de un archivo de configuración llamado `<board>.conf`.

3. `<rootdev>` especifica el tipo de dispositivo que se actualizará. Utiliza el valor **mmcblk0p1** para actualizar un dispositivo de almacenamiento local (eMMC o tarjeta SD, según la plataforma), a diferencia de un servidor NFS, por ejemplo.

Como puedes ver en la explicación anterior, si queremos instalar el sistema en un almacenamiento externo, podemos hacerlo cambiando la opción `<rootdev>`.

Para una partición en un dispositivo de almacenamiento USB conectado al dispositivo reComputer, ingresa el siguiente comando:

```sh
sudo ./flash.sh <board> sda<x>
```

Para una partición en un dispositivo de almacenamiento NVMe conectado al dispositivo reComputer, ingresa el siguiente comando:

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` es un número que especifica la posición de la partición de la APLICACIÓN en el dispositivo de almacenamiento, p. `sda1` para un dispositivo USB, o `nvme0n1p1` para un dispositivo de almacenamiento NVMe.

**Opción 2.** Elimina los componentes JetPack innecesarios para aumentar el espacio eMMC.

NVIDIA JetPack SDK es la solución más completa para crear aplicaciones de IA aceleradas de un extremo a otro. Todos los módulos y kits de desarrollador de Jetson son compatibles con JetPack SDK.

JetPack SDK incluye el paquete de controladores Jetson Linux (L4T) con sistema operativo Linux y bibliotecas y API aceleradas CUDA-X para aprendizaje profundo, visión por computadora, computación acelerada y multimedia. También incluye ejemplos, documentación y herramientas de desarrollo tanto para la computadora host como para el kit de desarrollador, y admite SDK de nivel superior, como DeepStream para análisis de video en streaming e Isaac para robótica.

[Esta tabla](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages) enlista todos los componentes incluidos en JetPack 4.6.

<table align="center">
  <tbody><tr>
      <th align="center">Grupo de componentes</th>
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
      <th align="center">NVIDIA container runtime with Docker integration</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">Multimedia API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

JetPack SDK contiene una gran cantidad de contenido, pero no es algo que todos los desarrolladores deban utilizar. Por lo tanto, una de las buenas opciones es eliminarlos selectivamente para obtener más espacio de almacenamiento.

Podemos ver información sobre el JetPack instalado en la reComputer Jetson con el siguiente comando.

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

Con este comando, puedes conocer rápidamente el contenido de los componentes instalados en JetPack, como CUDA, openCV, etc.

Para obtener información más detallada, puedes utilizar el siguiente comando para conocer todo el software actualmente instalado en la reComputer y su descripción.

```sh
dpkg-query -l
```

Luego, puedes eliminar selectivamente el contenido que no necesita y la información de descripción del componente. El comando para eliminar es el siguiente.

```sh
sudo apt autoremove ${packagesname}
```

La variable de entorno `${packagesname}` indica el nombre del paquete de componentes que deseas eliminar. Si deseas eliminar todos los paquetes con el prefijo de un nombre determinado, puedes agregar `*` a este prefijo para indicarlo.

Como ejemplo, si queremos eliminar todos los componentes de **CUDA**, podemos usar el siguiente comando.

```sh
sudo apt autoremove cuda*
```

Después de publicar el contenido del componente CUDA, puedes ver que la capacidad restante del eMMC también aumentará.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

Lo mismo se aplica a otros componentes de JetPack.

**Opción 3.** Ampliación de capacidad mediante dispositivos de almacenamiento externos.

Puedes elegir esta opción si has estado usando la reComputer normalmente durante algún tiempo y no deseas destruir el entorno del sistema existente para completar la solución de expansión.

Ya tenemos una wiki de expansión bien desarrollada [Expansión de memoria para la serie reComputer](https://wiki.seeedstudio.com/reComputer_Jetson_Memory_Expansion/).

Vale la pena señalar que cualquier operación de expansión es peligrosa y esperamos que seas proactivo al **hacer copias de seguridad** de tu sistema antes de comenzar.

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

