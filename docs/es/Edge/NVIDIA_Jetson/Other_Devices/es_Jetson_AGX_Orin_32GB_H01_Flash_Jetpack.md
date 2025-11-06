---
description: Flashear JetPack a NVIDIA® Jetson AGX Orin 32GB H01 Kit 
title: NVIDIA® Jetson AGX Orin 32GB H01 Kit
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
last_update:
  date: 10/14/2025
  author: Lakshantha/Youjiang
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

:::info
Tenga en cuenta que se realizaron las siguientes actualizaciones al producto el 25 de noviembre de 2024:

1. Se cambió el esquema de alimentación de 5V (el IC de alimentación fue reemplazado de ONNCP3020ADR2G a TI TPS53015DGS, y los componentes periféricos se ajustaron en consecuencia), lo que resuelve el problema de reinicio del dispositivo al usar ciertos dispositivos USB con alta corriente dinámica.
2. El diseño de la placa se optimizó para agrandar la ranura del cable del ventilador para acomodar el cableado del ventilador.
3. Para estabilizar el suministro de accesorios, el modelo del módulo WiFi se cambió de 8265.NGW a BL-M8822CP1, y los controladores de software se actualizaron en consecuencia.

:::

Esta wiki te guiará sobre cómo instalar JetPack en el Jetson AGX Orin 32GB H01 Kit.

## Prerrequisitos

- [PC Host Ubuntu](https://developer.nvidia.com/sdk-manager) (nativo o VM usando VMware Workstation Player).
- Jetson AGX Orin H01 Kit.
- Cable de transmisión de datos USB Type-C

## Entrar en Modo de Recuperación Forzada

- **Paso 1:** Hay un botón de recuperación en la placa, que está en el medio de los tres botones como se muestra en la imagen de abajo. Mantén presionado el botón de recuperación y luego conecta la placa a la fuente de alimentación para entrar en modo de recuperación forzada.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **Paso 2:** Conecta el Jetson AGX Orin 32GB H01 Kit con la PC host Ubuntu con un cable de transmisión de datos USB Type-C.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

- **Paso 3:** Usa el comando `lsusb` en la máquina host Ubuntu para verificar que el dispositivo haya entrado en modo de recuperación.
<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/check_rec.png"/></div>

:::info
Si `0955:7223 NVIDIA Corp.` aparece en los registros, indica que el dispositivo ha entrado en modo de recuperación.
:::

## Descargar los controladores periféricos

Primero que todo, necesitas instalar los controladores periféricos para esta placa. Estos son necesarios para que algunos periféricos de hardware funcionen en la placa. Haz clic en los enlaces de abajo para descargar los controladores según la versión de JetPack

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión JetPack</th>
      <th>Versión L4T</th>
      <th>Enlace de Descarga del Controlador</th>
      <th>Enlace de Descarga L4T </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
    <tr>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaRL0XDaYCdFhkBiwvO3b8UBk4HmzRBQgfhYCKlN_ANVpA?e=5ndnMu" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3560" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
    <tr>
    <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES6058EFNl1LkrJGAvTYR6IBFTldWYyxJ4ZxQP3EM00BbQ?e=rjshwu" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3643" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
  </tbody>
</table>
</div>

## Flashear al Jetson

:::danger
NVIDIA® Jetson AGX Orin 32GB H01 Kit viene preinstalado con el sistema operativo `JetPack 5.1.4`. El nombre de usuario y contraseña predeterminados son usuario: nvidia / contraseña: nvidia. Al recibir el dispositivo, puedes iniciar sesión directamente en el sistema y comenzar a usarlo sin necesidad de volver a flashear el sistema.

Si tu sistema se corrompe, puedes consultar los pasos a continuación para volver a flashear el sistema.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

Aquí usaremos: **NVIDIA L4T 35.1** para instalar **Jetpack 5.0.2** o **NVIDIA L4T 35.3.1** para instalar **Jetpack 5.1.1** en el Jetson AGX Orin 32GB H01 Kit.

- **Paso 1:** Descarga los controladores NVIDIA apropiados en la PC host. Los controladores requeridos se muestran a continuación:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta con los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **Paso 3:** Extrae **Jetson_Linux_R35.1.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **AGX-Orin-32GB-H01-JP5.0.2.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

Aquí preguntará si reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **Paso 5:** Flashea el sistema al eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

### Errores Encontrados

- **ERROR: failed to read rcm_state** en **AGX Orin** y **NX Orin** para *Jetpack 5.1.1*
  - Hay cambios PCN en Jetson AGX Orin realizados por NVidia, pero no son cambios PCN de Seeed.
  - Además de los materiales mencionados en la Wiki, por favor descarga [Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2) en la parte inferior de la página Jetson Linux 35.3.1.
  - Después de extraer *Jetson_Linux* y antes de aplicar los binarios, por favor extrae *Overlay_PCN210361_PCN210100_r35.3.1.tbz2*. Luego copia todos los archivos, carpetas a *Linux_For_Tegra* (fusionar, no omitir).
  - Luego continúa con los pasos restantes en las guías.

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

Aquí usaremos: **NVIDIA L4T 35.6.0** para instalar **Jetpack 5.1.4** en el Jetson AGX Orin 32GB H01 Kit.

Ingresa el siguiente comando en la ventana de terminal de la máquina host Ubuntu:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2

tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
sudo tar xf 605_jp514.tbz2  # Please copy 605_jp514.tbz2 to the Linux_for_Tegra/ directory before execution.

```

Elige uno de los siguientes comandos para realizar la operación de flasheo:

(1). Flashear el sistema al eMMC:

```bash
sudo ./flash.sh jetson-agx-orin-devkit internal
```

(2). Flashear el sistema al SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  --showlogs --network usb0 jetson-agx-orin-devkit external
```

<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/flash_successful.png"/></div>

Una vez completado el flasheo, el dispositivo se reiniciará automáticamente.

</TabItem>


<TabItem value="JP6.0" label="JP6.0">

Aquí usaremos **NVIDIA L4T 36.3** para instalar **Jetpack 6.0** en el Jetson AGX Orin 32GB H01 Kit.

- **Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores de NVIDIA en la PC host. Los controladores requeridos se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta con los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **Paso 3:** Extrae **Jetson_Linux_R36.3.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios:

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **AGX-Orin-H01-JP6.0.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

Aquí preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **Paso 5:** Flashea el sistema al eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás la siguiente salida si el proceso de flasheo es exitoso:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos **NVIDIA L4T 36.4** para instalar **Jetpack 6.1** en el Jetson AGX Orin 32GB H01 Kit.

- **Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3640) los controladores de NVIDIA en la PC host Ubuntu. Los controladores requeridos se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta con los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
Puedes usar el siguiente comando para verificar que el archivo descargado esté completo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Paso 3:** Extrae **Jetson_Linux_R36.4.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **A605_Jetpack_6.1.tar.gz**:

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Paso 5:** Flashea el sistema al eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás la siguiente salida si el proceso de flasheo es exitoso:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
También podemos ejecutar el siguiente comando para instalar el sistema en el SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aquí usaremos **NVIDIA L4T 36.4** para instalar **Jetpack 6.2** en el Jetson AGX Orin 32GB H01 Kit.

- **Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3643) los controladores de NVIDIA en la PC host Ubuntu. Los controladores requeridos se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta con los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

:::info
¡Similar al proceso de flasheo de Jetpack 6.1!
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
Puedes usar el siguiente comando para verificar que el archivo descargado esté completo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Paso 3:** Extrae **Jetson_Linux_R36.4.3_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **605_jp62.tar.gz**:

```bash
cd ..
tar xf 605_jp62.tar.gz
sudo cp -r 605_jp62/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Paso 5:** Flashea el sistema al eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás la siguiente salida si el proceso de flasheo es exitoso:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
También podemos ejecutar el siguiente comando para instalar el sistema en el SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

</Tabs>

## Herramientas de Desarrollo

### Jetpack preinstalado para desarrollo rápido e integración de IA en el borde

[Jetson Software](https://developer.nvidia.com/embedded/develop/software) comienza con NVIDIA JetPack™ SDK que proporciona un entorno de desarrollo completo e incluye bibliotecas aceleradas CUDA-X y otras tecnologías de NVIDIA para impulsar tu desarrollo. JetPack incluye el paquete de controladores Jetson Linux que proporciona el kernel de Linux, bootloader, controladores de NVIDIA, utilidades de flasheo, sistema de archivos de muestra y cadenas de herramientas para la plataforma Jetson. También incluye características de seguridad, capacidades de actualización over-the-air y mucho más.

### Visión por computadora y aprendizaje automático embebido

- [Deepstream](https://developer.nvidia.com/deepstream-sdk) ofrece un kit de herramientas completo de análisis de streaming para procesamiento multi-sensor basado en IA y comprensión de video e imágenes en Jetson.
- [TAO](https://developer.nvidia.com/tao-toolkit), construido sobre TensorFlow y PyTorch, es una versión de bajo código del framework NVIDIA TAO que acelera el entrenamiento de modelos
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai): construye, entrena y despliega aplicaciones de visión por computadora directamente en el borde de reComputer. Obtén acceso gratuito a más de 100 modelos de visión por computadora preentrenados y entrena modelos de IA personalizados en la nube con unos pocos clics a través de suscripción empresarial. Consulta nuestra guía [wiki](https://wiki.seeedstudio.com/es/alwaysAI-Jetson-Getting-Started/#object-detection-on-pre-loaded-video-file) para comenzar con alwaysAI.
- [edge impulse](https://www.edgeimpulse.com/) : el pipeline de aprendizaje automático embebido más fácil para desplegar aplicaciones de audio, clasificación y detección de objetos en el borde sin dependencias en la nube.
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/) proporciona herramientas para convertir imágenes en bruto en un modelo de visión por computadora entrenado personalizado de detección y clasificación de objetos y desplegar el modelo para uso en aplicaciones. Consulta https://docs.roboflow.com/inference/nvidia-jetson para desplegar en NVIDIA Jetson con Roboflow.
- [ultralytics yolo](https://github.com/ultralytics/yolov5): usa aprendizaje por transferencia para realizar detección de objetos con pocas muestras con YOLOv5 que necesita solo muy pocas muestras de entrenamiento. Consulta nuestros tutoriales paso a paso en [wiki](https://wiki.seeedstudio.com/es/YOLOv5-Object-Detection-Jetson/).
- [Deep Learning](https://deci.ai/blog/jetson-machine-learning-inference/): optimiza tus modelos en NVIDIA Jetson Nano. Consulta [aquí](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson) en Deci para Benchmark Automático y Optimización del Rendimiento en Tiempo de Ejecución en Dispositivos NVIDIA Jetson Nano y Xavier NX

### IA de Voz

- [Riva](https://developer.nvidia.com/riva) es un SDK acelerado por GPU para construir aplicaciones de IA de voz que están personalizadas para tu caso de uso y ofrecen rendimiento en tiempo real.

### Gestión Remota de Flotas

Habilita OTA seguro y gestión remota de dispositivos con [allxon](https://www.allxon.com/). Desbloquea 90 días de prueba gratuita con el código H4U-NMW-CPK.

### Desarrollo de Robots y ROS

- NVIDIA Isaac ROS GEMs son paquetes acelerados por hardware que facilitan a los desarrolladores de ROS construir soluciones de alto rendimiento en hardware de NVIDIA. Aprende más sobre [NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software).
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus) es una solución basada en la nube que permite a los desarrolladores gestionar robots autónomos de manera más efectiva. La plataforma Nimbus soporta NVIDIA® Jetson™ e ISAAC SDK y GEMs de forma nativa. Consulta nuestro [webinar](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/) sobre conectar tu proyecto ROS a la nube con Nimbus.

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
