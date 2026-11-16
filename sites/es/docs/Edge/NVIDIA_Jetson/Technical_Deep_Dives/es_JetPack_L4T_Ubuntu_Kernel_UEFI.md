---
description: Utiliza un mapa de la pila de software para aclarar la relación en capas entre JetPack, Jetson Linux / L4T, Ubuntu, el Kernel de Linux y UEFI en el ecosistema de software de Jetson.
title: ¿Cuál es la relación entre JetPack, L4T, Ubuntu, Kernel y UEFI?
keywords:
  - jetson
  - jetpack
  - l4t
  - ubuntu
  - kernel
  - uefi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_jetpack_l4t_ubuntu_kernel_uefi
last_update:
  date: 11/02/2026
  author: youjiang
---

Cuando empiezas a trabajar con Jetson, hay una pregunta con la que casi todo el mundo se encuentra: **¿Cuántas "versiones de sistema" tiene realmente Jetson?**

Puedes ver números completamente diferentes en distintos lugares:

```text
JetPack 6.2.3
L4T / Jetson Linux R36.5.2
Ubuntu 22.04
Linux Kernel 5.15
UEFI 36.5.2
```

Parecen cinco sistemas separados. En realidad, describen **capas diferentes dentro de la pila de software del mismo dispositivo Jetson**.

Lo más importante de estos conceptos no es memorizar definiciones, sino construir una conciencia como esta:

**El software de Jetson no es tan simple como "Ubuntu + controlador de GPU de NVIDIA". Es una plataforma de software completa que abarca el firmware de arranque, el Kernel de Linux, el espacio de usuario de Ubuntu y hasta los paquetes de aceleración como CUDA y TensorRT.**

Empecemos con un diagrama que muestra cómo estos componentes se relacionan y se contienen entre sí.

```text
JetPack
│
├── Jetson Linux / L4T
│   │
│   ├── UEFI
│   ├── Linux Kernel
│   ├── NVIDIA Drivers
│   └── Ubuntu RootFS
│
├── CUDA
├── TensorRT
├── cuDNN
├── VPI
└── ...
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/jetpack_architecture.png"/></div>

Este diagrama no es exhaustivo, pero es suficiente para mostrar las relaciones entre los términos tratados en este artículo. Al final de este artículo se proporciona un diagrama de arquitectura más completo.

---

## JetPack

Puedes pensar en **JetPack** como el entorno completo de desarrollo de software que NVIDIA prepara para los dispositivos de computación perimetral Jetson. Incluye no solo componentes relacionados con el sistema operativo, sino también paquetes de software relacionados con la seguridad y paquetes de aceleración de IA.

Así que cuando alguien pregunta: "¿Qué JetPack estás usando?"

en realidad lo que está preguntando es:

> **¿Qué plataforma de software NVIDIA Jetson estás utilizando actualmente?**

En este sentido, JetPack puede entenderse como la "colección de software" de nivel superior.

Si tienes un dispositivo Jetson con un sistema funcionando, puedes ejecutar el siguiente comando en la terminal de Jetson para comprobar la versión de JetPack:

```bash
seeed@ubuntu:~$ dpkg -l | grep nvidia-jetpack
ii  nvidia-jetpack                                    6.2.1+b38                                   arm64        NVIDIA Jetpack Meta Package
ii  nvidia-jetpack-dev                                6.2.1+b38                                   arm64        NVIDIA Jetpack dev Meta Package
ii  nvidia-jetpack-runtime                            6.2.1+b38                                   arm64        NVIDIA Jetpack runtime Meta Package
```

La salida muestra que el dispositivo actual está ejecutando JetPack 6.2.1.

---

## Jetson Linux / L4T

Si JetPack es el "software completo" de Jetson, entonces **Jetson Linux / L4T es el sistema subyacente del que Jetson realmente depende para funcionar**. Primero, aclaremos la relación entre Jetson Linux y L4T:

> L4T es el nombre más antiguo / técnico, mientras que Jetson Linux es el nombre que NVIDIA utiliza más comúnmente hoy en día. Pueden entenderse como el mismo software.

Para abreviar, utilizaremos L4T para referirnos a Jetson Linux / L4T en el resto de este artículo.

El nombre completo de L4T es **Linux for Tegra**.

Tegra es la plataforma SoC que utiliza NVIDIA Jetson, por lo que L4T puede entenderse como:

> **Un BSP de Linux personalizado por NVIDIA específicamente para el hardware Jetson.**

Aquí nos encontramos con otro término nuevo: **BSP, Board Support Package**.

Su función no es simplemente proporcionar un escritorio Linux; es responsable de conectar realmente el sistema Linux con el hardware Jetson.

Puedes pensarlo así:

```text
                Jetson Linux / L4T
                        │
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
      UEFI          Linux Kernel     Ubuntu RootFS
        │               │               │
   Boot system      Manage HW      User space
                        │
                   NVIDIA Drivers
                        │
                  Jetson Hardware
```

En otras palabras, L4T no es un único componente de software; es un entorno de sistema subyacente completo.

Normalmente incluye:

- UEFI / Bootloader: responsable del **arranque en las primeras etapas y de la puesta en marcha del sistema después de encender el dispositivo**.
- Linux Kernel: el núcleo de Linux, responsable de **la planificación de la CPU, la gestión de memoria, la gestión de procesos y los frameworks para varios controladores de hardware**.
- Device Tree: describe **qué hardware hay en la placa y cómo está conectado ese hardware**.
- NVIDIA Drivers: controladores proporcionados por NVIDIA para el hardware Jetson para admitir funciones como GPU, ISP y NVCSI.
- Ubuntu RootFS: el entorno de espacio de usuario de Jetson — el escritorio de Ubuntu que vemos y usamos todos los días.
- ...

Ten en cuenta que Jetson no es un ordenador ARM Linux ordinario. Tiene mucho hardware específico de NVIDIA: GPU, NVCSI, VI y más. Para que este hardware funcione correctamente, el Device Tree, los controladores del Kernel, el firmware y los controladores de NVIDIA deben trabajar juntos. Este soporte de bajo nivel no está incluido en el Ubuntu estándar — lo proporciona L4T.

Por lo tanto:

> **Lo que realmente hace que Ubuntu se ejecute en el hardware Jetson es L4T.**

:::caution
Aquí hemos introducido muchos términos. No necesitas comprender en profundidad cada componente en este momento; por ahora solo construye un modelo mental aproximado. Cuando te los encuentres más adelante en el trabajo real, podrás profundizar entonces.
:::

Utiliza el siguiente comando para comprobar la versión de L4T de un dispositivo Jetson:

```bash
seeed@ubuntu:~$ cat /etc/nv_tegra_release
# R36 (release), REVISION: 4.3, GCID: 38968081, BOARD: generic, EABI: aarch64, DATE: Wed Jan  8 01:49:37 UTC 2025
# KERNEL_VARIANT: oot
TARGET_USERSPACE_LIB_DIR=nvidia
TARGET_USERSPACE_LIB_DIR_PATH=usr/lib/aarch64-linux-gnu/nvidia
```

La salida muestra que el dispositivo actual está ejecutando L4T 36.4.3.

:::info
Ten en cuenta que JetPack y L4T tienen una correspondencia estricta uno a uno. Puedes consultar todas las versiones de JetPack publicadas por NVIDIA en este enlace: https://developer.nvidia.com/embedded/jetson-linux-archive
:::

---

## Ubuntu: el espacio de usuario con el que más interactúas en Jetson

En Jetson, Ubuntu es la capa que ves con más frecuencia y con la que interactúas a diario.

Cuando inicias en el escritorio, abres una terminal y ejecutas:

```text
apt install
python3
docker
systemctl
cd /home
```

Todas estas operaciones ocurren en el **espacio de usuario de Ubuntu**. Por eso mucha gente asume: "Jetson ejecuta Ubuntu". A estas alturas, puedes notar que esta afirmación no es incorrecta, pero sí incompleta. Una forma más precisa de decirlo es: **L4T utiliza Ubuntu como RootFS y base de espacio de usuario, pero Ubuntu no es todo el sistema Jetson.**

En otras palabras, **Ubuntu proporciona la capa de interacción con el usuario — "permite que los usuarios y las aplicaciones utilicen la máquina".**

Lo que realmente gestiona directamente el hardware de Jetson es principalmente:

```text
Linux Kernel
NVIDIA Drivers
Device Tree
Firmware
```

Explicaremos más detalles en artículos posteriores. Por ahora, hay dos puntos clave a tener en cuenta:

1. Cuando decimos "**el sistema está instalado en NVMe**", en muchos casos lo que realmente queremos decir es "**el Ubuntu RootFS está almacenado en NVMe**".
2. Ubuntu es solo la parte de espacio de usuario de Jetson Linux, no todo el sistema. Por eso dos dispositivos Jetson pueden ejecutar ambos Ubuntu 22.04 y, sin embargo, comportarse de forma completamente diferente. Por ejemplo, tanto L4T R36.4.x como L4T R36.5.x utilizan Ubuntu 22.04 como su sistema de archivos, pero sus versiones de Kernel y de NVIDIA Driver son diferentes.

En Jetson, simplemente puedes ejecutar `cat /etc/os-release` para comprobar la versión de Ubuntu.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/os_release.png"/></div>

---

## Linux Kernel

Si Ubuntu es el "espacio de usuario" que vemos y usamos todos los días, entonces **el Linux Kernel es el núcleo de todo el sistema que realmente gestiona el hardware y los recursos del sistema.**

Se sitúa entre Ubuntu y el hardware: `Application` --> `Ubuntu` --> `Linux Kernel` --> `Drivers` --> `Jetson`

En resumen:

> **Ubuntu se encarga de la interacción con los usuarios; el Kernel se encarga de la interacción con el hardware.**

El Linux Kernel se ocupa de muchísimas cosas, entre las más importantes se incluyen la planificación de la CPU, la gestión de memoria, la gestión de procesos, etc.

Veamos un ejemplo de cómo funciona el Linux Kernel. Si conectas una cámara USB, antes de que veas el dispositivo `/dev/video0`, los datos pasan por:

```text
USB Camera
    ↓
USB Controller
    ↓
Kernel USB Driver
    ↓
/dev/video0
    ↓
Application
```

Puedes comprobar la versión del Linux Kernel con `uname -r` en la terminal de Jetson:

```bash
seeed@ubuntu:~$ uname -r
5.15.148-tegra
```

---

## UEFI

Si Ubuntu es el espacio de usuario y el Linux Kernel es el núcleo del sistema, entonces **UEFI es la capa crítica responsable de "levantar el sistema" antes de que Linux se inicie**. UEFI significa **Unified Extensible Firmware Interface** — puedes pensar en ello como **la interfaz de firmware de arranque que los ordenadores modernos utilizan para reemplazar la BIOS tradicional**.

En Jetson, lleva el dispositivo desde "el hardware está encendido" hasta "el Linux Kernel puede empezar a ejecutarse". Su trabajo incluye: inicializar el entorno de arranque, identificar los dispositivos arrancables, leer la configuración de arranque, cargar el Kernel, cargar el initrd, cargar el Device Tree y entregar el control a Linux.

Primero construyamos un modelo mental sencillo:

`Power On` --> `UEFI` --> `Linux Kernel` --> `Ubuntu RootFS`

Es decir:

> **Cuando UEFI está funcionando, el Linux Kernel en realidad aún no ha empezado a ejecutarse, y Ubuntu ni siquiera ha comenzado.**

Puntos a tener en cuenta aquí:

1. En muchos dispositivos Jetson Orin, el firmware de arranque se almacena en la memoria Flash QSPI NOR. Incluso si tu Ubuntu RootFS está instalado en NVMe, el dispositivo puede seguir necesitando arrancar primero a través del UEFI en QSPI.

2. Si un Jetson no arranca, lo primero que hay que comprobar es el registro de UEFI del proceso de arranque; es muy probable que la causa raíz esté oculta allí.

3. UEFI decide desde qué dispositivo de arranque se debe cargar primero Linux. Cuando el logotipo de NVIDIA aparece después de encender, puedes presionar `ESC` o `F1` para entrar en la página de configuración de UEFI y configurarlo.

Ejecuta `cat /sys/class/dmi/id/bios_version` en la terminal de Jetson para comprobar la versión de UEFI:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/uefi_version.png"/></div>

---

Hoy hemos reunido varios conceptos comunes relacionados con el arranque de la pila de software de Jetson, con el objetivo de construir rápidamente un mapa. Lo más importante en este artículo no es memorizar la definición de cada término, sino construir la comprensión básica de que estos conceptos no son sistemas independientes: son capas diferentes dentro de la pila de software de Jetson. Con esta base, serás más eficiente y efectivo tanto al depurar problemas de arranque/sistema de Jetson como al discutir detalles técnicos con otros desarrolladores.

Por supuesto, lo que hemos cubierto hoy es solo una pequeña parte de los temas relacionados con el arranque de Jetson. Puedes encontrar más en el sitio web de NVIDIA.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/nvidia_ecosystem.png"/></div>

Fuente de la imagen: https://developer.nvidia.com/embedded/jetpack

En los siguientes artículos, continuaremos a lo largo de esta cadena de arranque: primero explicando el proceso completo desde el encendido, la inicialización del firmware y la carga del Kernel hasta entrar en Ubuntu, y luego pasando a interfaces de hardware, cámaras, control de robots y más. Si hay temas sobre los que te gustaría aprender, no dudes en dejar un comentario o enviarme un mensaje.

La próxima vez, comenzaremos con la pregunta más fundamental:

> **¿Por qué proceso exacto pasa un Jetson, desde el encendido hasta entrar en Ubuntu?**

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
