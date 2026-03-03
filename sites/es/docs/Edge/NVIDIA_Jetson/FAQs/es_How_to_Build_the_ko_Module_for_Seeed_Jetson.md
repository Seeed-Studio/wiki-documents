---
description: Cómo Construir el Módulo de Controlador para el BSP Jetson de Seeed
title: Cómo Construir el Módulo de Controlador para el BSP Jetson de Seeed
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /es/how_to_build_the_ko_module_for_seeed_jetson
last_update:
  date: 09/24/2025
  author: Dayu
---


**Cuando el módulo de controlador `.ko` requerido no está disponible en reComputer/reServer, puedes compilar el módulo de controlador en Jetson y cargarlo. Este wiki demuestra los pasos específicos y notas importantes, usando JetPack 6.2 como ejemplo.**

## 1. Preparar espacio de trabajo

Este artículo usa **L4T 36.4.3**, que corresponde al BSP **JetPack 6.2**, como ejemplo para mostrar cómo compilar el módulo de controlador .ko para `pl2303` (un controlador relacionado con USB-a-serie) en **reComputer/reServer**.

:::tip
Este tutorial descarga el código fuente en el Jetson y compila los módulos de kernel `.ko`.
:::


Primero, descarga el código fuente BSP del sitio web oficial de NVIDIA según tu versión L4T.

Si no estás seguro sobre la relación entre las versiones L4T y las versiones JetPack, puedes consultar este enlace:
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

Busca la versión específica de **L4T (Linux for Tegra)** que quieres compilar, por ejemplo:
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

Descarga el código fuente BSP correspondiente del sitio web de NVIDIA:
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-src.png"/>
</div>

Coloca el archivo del código fuente BSP descargado en tu directorio de trabajo, luego ejecuta los siguientes comandos en la terminal para extraerlo completamente:
```python
# First extract the main file
tar -xjf public_sources.tbz2

# Enter the extracted directory
cd Linux_for_Tegra/source

# Recursively extract all .tbz2, .tar.bz2, .tar.gz, .tgz, .tar.xz files
find . -type f \( -name "*.tbz2" -o -name "*.tar.bz2" -o -name "*.tar.gz" -o -name "*.tgz" -o -name "*.tar.xz" \) -exec bash -c '
    dir=$(dirname "$1")
    filename=$(basename "$1")
    cd "$dir"
    if [[ "$filename" == *.tbz2 || "$filename" == *.tar.bz2 ]]; then
        tar -xjf "$filename"
    elif [[ "$filename" == *.tar.gz || "$filename" == *.tgz ]]; then
        tar -xzf "$filename"
    elif [[ "$filename" == *.tar.xz ]]; then
        tar -xJf "$filename"
    fi
    cd - > /dev/null
' _ {} \;
```


Después de extraer todos los archivos, navega a `Linux_for_Tegra/source` y localiza la ruta del código fuente del controlador basándote en palabras clave:
```python
sudo find . -type f -name "*<keyword>*"

# For exmaple:
sudo find . -type f -name "*pl2303*"
```
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/path-pl2303.png"/>
</div>

Crea un nuevo espacio de trabajo para la compilación. Según la ruta del código fuente impresa en la terminal, copia el código fuente del controlador en este espacio de trabajo.

Luego, dentro del espacio de trabajo, crea un `Makefile` para la compilación con el siguiente contenido:
```cpp
obj-m   += pl2303.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
```
Aquí, `pl2303.o` debe ser reemplazado con el nombre correspondiente del controlador que quieres compilar.

El espacio de trabajo se verá similar a la figura de abajo, conteniendo tanto el archivo fuente como el `Makefile`:
<div align="center">
<img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/wkspace-ko.png"/>
</div>

Antes de compilar, necesitas establecer un enlace simbólico:
```python
# Remove existing redundant directory if it exists
sudo rm -r /lib/modules/$(uname -r)/build

# Create symbolic link
sudo ln -s /usr/src/linux-headers-$(uname -r)-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source /lib/modules/$(uname -r)/build
```

Después de crear el enlace simbólico, ejecuta el siguiente comando en tu espacio de trabajo para compilar y obtener el módulo de controlador `.ko`:
```bash
make
```

Después de la compilación, el archivo `.ko` se generará en el directorio actual:
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/compiled-ko.png"/>
</div>


A continuación, copia el archivo `.ko` a la ruta de destino correcta:
```bash
sudo cp pl2303.ko /lib/modules/$(uname -r)/kernel/drivers/usb/serial/
```

Para los módulos de controlador `.ko` compilados, el prefijo de la ruta de destino es siempre `/lib/modules/$(uname -r)/kernel/`. El sufijo depende del tipo de módulo de controlador y puede inferirse de la ruta relativa del código fuente, lo que da la ruta de destino completa:
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/mark_path.png"/>
</div>


Después de copiar a la ruta de destino, carga el módulo de controlador `.ko`:
```python
sudo depmod -a
sudo modprobe pl2303
```

Una vez cargado exitosamente, puedes ejecutar `modinfo <driver_name>` para verificar:
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/modinfo-pl.png"/>
</div>




## Recursos

- [Código fuente del L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

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
