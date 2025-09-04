---
description: Cómo usar Wio Terminal como placa de desarrollo RTL8720DN
title: Cómo usar Wio Terminal como placa de desarrollo RTL8720DN
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-8720-dev
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Cómo usar Wio Terminal como placa de desarrollo RTL8720DN

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.gif" /></div>

Wio Terminal está equipado con el núcleo Atmel SAMD51 junto con el núcleo inalámbrico Realtek RTL8720DN. ¿No sería genial si también pudieras usar Wio Terminal como una placa de desarrollo RTL8720DN simple? En esta wiki, aprenderás cómo usar Wio Terminal como una placa de desarrollo RTL8720DN para desarrollar conectividad Wi-Fi y Bluetooth.

## Comenzar

- Por favor sigue primero [**Wio Terminal Get Started**](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/) antes de continuar.

### Agregar la librería de placas Realtek a Arduino

1.Abre tu Arduino IDE, haz clic en **File** > **Preferences**, y copia la siguiente url en **Additional Boards Manager URLs**:

```sh
https://github.com/ambiot/ambd_arduino/raw/master/Arduino_package/package_realtek.com_amebad_index.json
```

2.Haz clic en **Tools** > **Board** > **Board Manager** y busca **realtek** en el Administrador de Placas

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/realtek-board.png" /></div>

## Programa de comunicación entre SAMD51 y RTL8720DN

Hemos preparado un código de ejemplo de Arduino que puede usarse para comunicar el núcleo SAMD51 de Wio Terminal con RTL8720DN. Descarga el código fuente completo [**aquí**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_USB2Serial_Burn8720).

- Sube el código a Wio Terminal seleccionando la placa como **Wio Terminal**.

**Nota:** Este programa se sube al núcleo SAMD51 de Wio Terminal.

Hay **2 modos** en este programa de Arduino.

### MODO 1 - Modo de grabación de firmware RTL8720DN

Presiona el botón (botón derecho) para entrar a este modo. Este es **el modo que usas para grabar código Arduino en el RTL8720DN**. Ahora, puedes elegir uno de los códigos de ejemplo RTL8720DN para subir al núcleo RTL8720DN. Debes seleccionar este modo para subir al núcleo RTL8720DN y **seleccionar placa como RTL8720**.

### MODO 2 - Modo USB a Serial

Presiona el botón (botón del medio) para entrar a este modo. Este es **el modo usado para ver las salidas seriales del núcleo RTL8720DN.** En este modo, el núcleo SAMD51 está actuando como un módulo USB a Serial.

## Ejemplo Wi-Fi

¡Tomemos un ejemplo para recorrer los procedimientos!

- Sube el **programa de comunicación entre SAMD51 y RTL8720DN a Wio Terminal** (selecciona placa como **Wio Terminal**).

- Una vez subido el programa, navega a **Tools** -> **Board** y selecciona placa como **RTL8722DM** como se muestra:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-board.png" /></div>

- Navega a **Files** -> **Examples** y bajo **Examples for RTL8720DM**, puedes elegir ejemplos para RTL8720DN. Déjame tomar ScanNetworks como ejemplo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-example.png" /></div>

:::note
Si usas ejemplos relacionados con Wi-Fi, por favor revisa [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Network-Overview/) primero para borrar el firmware del núcleo RTL8720DN primero.
:::

- Asegúrate de que Wio Terminal esté en el **Modo de grabación de firmware RTL8720DN** como se muestra. Selecciona placa como **RTL8722DM** y haz clic en subir.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/burn.png" /></div>

- Una vez subido el ejemplo Wi-Fi al núcleo RTL8720DN. Reinicia Wio Terminal y cambia al **Modo USB a Serial** presionando el botón del medio de Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/USB-serial.png" /></div>

- Ahora, si abres el Monitor Serial deberías poder ver resultados imprimiéndose desde el núcleo RTL8720DN. ¡Ahora puedes usar el núcleo RTL8720DN de Wio Terminal como una placa de desarrollo!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/result.png" /></div>

## Ejemplo Bluetooth

Tengamos también un ejemplo de Bluetooth.

- Sube el **programa de comunicación entre SAMD51 y RTL8720DN a Wio Terminal** (selecciona placa como **Wio Terminal**).

- Una vez subido el programa, navega a **Tools** -> **Board** y selecciona placa como **RTL8722DM**. Navega a **Files** -> **Examples** y bajo **Examples for RTL8720DM**, puedes elegir ejemplos para RTL8720DN. Déjame tomar ScanNetworks como ejemplo.

- Asegúrate de que Wio Terminal esté en el **Modo de grabación de firmware RTL8720DN**. Selecciona placa como **RTL8722DM** y haz clic en subir.

- Una vez subido el ejemplo Wi-Fi al núcleo RTL8720DN. Reinicia Wio Terminal y cambia al **Modo USB a Serial** presionando el botón del medio de Wio Terminal.

- Ahora, si abres el Monitor Serial deberías poder ver resultados imprimiéndose desde el núcleo RTL8720DN. ¡Ahora puedes usar el núcleo RTL8720DN de Wio Terminal como una placa de desarrollo!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.png" /></div>

## Soporte técnico y discusión de productos


¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>