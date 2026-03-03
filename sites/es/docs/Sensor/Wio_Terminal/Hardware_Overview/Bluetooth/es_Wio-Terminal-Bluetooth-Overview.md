---
description: Descripción general
title: Descripción general de Bluetooth
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Bluetooth-Overview
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Descripción general de Bluetooth

Esta wiki introduce cómo actualizar el firmware más reciente para el Núcleo Inalámbrico Realtek RTL8720 en el Wio Terminal, así como instalar todas las librerías dependientes para que el Wio Terminal habilite la conectividad Bluetooth.

## Actualizar el Firmware del Núcleo Inalámbrico

Por favor sigue [esta guía](https://wiki.seeedstudio.com/es/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware) para actualizar el firmware del núcleo inalámbrico en el Wio Terminal.

:::note
        ¡Este firmware permite que Wi-Fi y Bluetooth funcionen al mismo tiempo!
:::

## Actualizar Seeed SAMD ArduinoCore

:::note
¡Por favor actualiza el **Seeed SAMD ArduinoCore a la versión más reciente (1.8.1)**!
:::

- **PASO 1:** Abre el **Arduino IDE**, y haz clic en `Tools` -> `Board` -> `Boards Manager`, y busca **Wio Terminal** en el cuadro de búsqueda

- **PASO 2:** Asegúrate de que la versión más reciente (1.8.1) esté instalada. Si no, haz clic en el menú desplegable `Select version`, selecciona la versión más reciente y haz clic en `Install`

<p style={{textalign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> También puedes encontrar el código fuente de Seeed SAMD ArduinoCore [**aquí**](https://github.com/Seeed-Studio/ArduinoCore-samd).

## Instalación de Librerías

Hay algunas Librerías de Arduino que son necesarias para la conectividad Bluetooth. Hemos incluido todas las librerías relacionadas con conectividad inalámbrica para el Wio Terminal en el **Administrador de Librerías de Arduino**. ¡Así que simplemente tienes que abrir el Administrador de Librerías de Arduino dentro del Arduino IDE y buscar las librerías que necesitas e instalarlas fácilmente!

### Cómo Instalar una Librería desde el Administrador de Librerías de Arduino

- **PASO 1:** Abre el **Arduino IDE**, y haz clic en `Sketch` -> `Include Library` -> `Manage Libraries...`

- **PASO 2:** Escribe el **nombre de la librería** que necesitamos y selecciona la **versión más reciente** del menú desplegable (si está disponible)

- **PASO 3:** Haz clic en **Install**

<p style={{textalign:  'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### Librerías Necesarias para Bluetooth

Necesitamos las siguientes librerías para comenzar con Bluetooth en el Wio Terminal. Puedes buscar estas librerías escribiendo el nombre de la librería en el cuadro de búsqueda del Administrador de Librerías de Arduino.

- [**Seeed_Arduino_rpcBLE**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) - busca `"seeed rpcble"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - busca `"seeed rpcunified"`