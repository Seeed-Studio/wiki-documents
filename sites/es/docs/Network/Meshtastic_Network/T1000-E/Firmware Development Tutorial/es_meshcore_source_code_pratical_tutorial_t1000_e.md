---
description: Un tutorial práctico para configurar el entorno del código fuente del firmware MeshCore, compilar el T1000-E y grabar el firmware.
title: Tutorial de desarrollo del código fuente de MeshCore
keywords:
  - MeshCore
  - Source Code
  - PlatformIO
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/MeshcoreDevelopment.png
slug: /meshcore_source_code_pratical_tutorial_t1000_e
sidebar_position: 5
last_update:
  date: 3/27/2026
  author: Michelle Huang
url: https://wiki.seeedstudio.com/es/meshcore_source_code_pratical_tutorial_t1000_e/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Requisitos previos

### Herramienta necesaria

Antes de comenzar, prepara las siguientes herramientas:

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. [Python 3](https://www.python.org/downloads/)
3. [VS Code](https://code.visualstudio.com/)

### Instalar PlatformIO

Busca `PlatformIO` en el marketplace de Extensiones de VS Code e instálalo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

Después de la instalación, normalmente aparece un icono con forma de hormiga en la barra de herramientas izquierda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### Preparación del proyecto

Abre una carpeta en la que quieras tu proyecto. Abre la carpeta en la terminal. [Haz clic aquí](https://github.com/meshcore-dev/MeshCore) para hacer git clone del proyecto.

Abre VSCode, luego haz clic en el icono de PlatformIO y elige `select a folder`. Elige la carpeta donde clonaste el proyecto.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/pickfolder.png)

PlatformIO instalará automáticamente las dependencias necesarias. Después de que la instalación se complete correctamente, podrás ver `Project has been successfully updated`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/SucessfullyUpdate.png)

## Desarrollo de firmware

### Tutorial de desarrollo

Encuentra el entorno para tu placa de destino. Toma el repetidor de nodo solar como ejemplo:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/BoardSelection.png)

Luego PlatformIO preparará las dependencias necesarias para la placa.

Modifica tu código. Se recomienda cambiar el archivo `variant.h` correspondiente a tu placa.

Después de completar la codificación, ejecuta el siguiente comando para compilar el código y convertirlo en un archivo uf2.

``` bash
pio run -e SenseCap_Solar_repeater
pio run -e SenseCap_Solar_repeater -t create_uf2
```

Luego haz doble clic en el botón RST para entrar en modo DFU. Arrastra el archivo uf2 al disco que aparece.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/firmware_devel/Dragin.png)

### Ejemplo

#### Control de luz de usuario

Este ejemplo muestra cómo escribir un bucle intermitente para la luz de usuario. Copia el siguiente código en `/examples/simple_repeater/main.cpp`

``` python
#endif
#ifdef LED_WHITE
static void updateUserLightBlink() {
  static unsigned long lastLedPhaseChangeAt = 0;
  static bool lightIsOn = true;

  const unsigned long now = millis();
  if ((unsigned long)(now - lastLedPhaseChangeAt) >= 5000) {
    lightIsOn = !lightIsOn;
    lastLedPhaseChangeAt = now;
  }

  digitalWrite(LED_WHITE, lightIsOn ? LED_STATE_ON : !LED_STATE_ON);
}
```

y escribe el bucle:

``` python
#ifdef LED_WHITE
  updateUserLightBlink();
#endif
```

Compílalo y graba el archivo uf2 en tu nodo solar.