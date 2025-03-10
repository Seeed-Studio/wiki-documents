---
description: For Seeed nRF52 Boards Library
title: Uso de Bluetooth (Biblioteca Seeed nRF52)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 02/16/2025
  author: Guillermo
---

# Uso de Bluetooth (Biblioteca Seeed nRF52)

**Seeed Studio XIAO nRF52840** y **Seeed Studio XIAO nRF52840 Sense** ambos soportan conectividad Bluetooth. Esta guía introducirá las funciones básicas de Bluetooth utilizadas por la "Biblioteca Seeed nRF52".

## Comenzando

### Hardware Requerido

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) o [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Teléfono inteligente con conectividad Bluetooth
- 1 x Cable USB Tipo-C

### Software Requerido

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### Instalación

> Dado que la función que aplicamos está empaquetada en la "Biblioteca Seeed nRF52", no es necesario instalar ninguna otra biblioteca de terceros. Puedes omitir este paso.

- **Método Uno** (Este método está disponible para ambas bibliotecas de código mencionadas).

Si ya has descargado el archivo zip de la biblioteca, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la instalación fue correcta, verás el mensaje **Library added to your libraries** en la ventana de notificación. Esto significa que la biblioteca se ha instalado correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>


- **Método Dos** (Solo se puede instalar la biblioteca ArduinoBLE).

El administrador de bibliotecas fue añadido a partir de las versiones 1.5 y superiores de Arduino IDE (1.6.x). Se encuentra en el menú 'Sketch' bajo 'Include Library', 'Manage Libraries...'.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>


Cuando abras el Administrador de Bibliotecas, encontrarás una gran lista de bibliotecas listas para instalar con un solo clic. Para encontrar una biblioteca para tu producto, busca el nombre del producto o una palabra clave, como 'k type' o 'digitizer', y la biblioteca que necesitas debería aparecer. Haz clic en la biblioteca deseada y aparecerá el botón 'Instalar'. Haz clic en ese botón y la biblioteca debería instalarse automáticamente. Cuando la instalación termine, cierra el Administrador de Bibliotecas.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## Ejemplos de aplicaciones

Aquí te presentaremos aplicaciones Bluetooth.

### Conexión inalámbrica de un teclado de PC al teléfono móvil

**Paso 1.** Inicia la aplicación de Arduino.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>


**Paso 2.** Selecciona el modelo de tu placa de desarrollo y agrégala al IDE de Arduino. Aquí estamos utilizando la "Seeed nRF52 Boards Library".

> Para la instalación de las bibliotecas de la placa, por favor consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) para completar la instalación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>


**Paso 3.** Navega a **"Archivo -> Ejemplos -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"** y abre el archivo de ejemplo "blehid_keyboard".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>


**Paso 4.** Haz clic en "Subir" y luego abre el "monitor" en la esquina superior derecha del IDE de Arduino. El monitor se mostrará de la siguiente manera:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>

**Paso 5.** Abre la aplicación "nRF Connect for Mobile" o "LightBlue" en tu teléfono móvil, asegurándote de que tu teléfono esté conectado a Bluetooth. Después de un momento, encontrarás un dispositivo llamado "XIAO nRF52840" en la lista.

- Para la **aplicación nRF Connect for Mobile**, debería ser algo como:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>


- Para la **aplicación LightBlue**, debería ser algo como:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>


**Paso 6.** Simplemente haz clic en el dispositivo y la conexión se completará automáticamente. Después de eso, podrás escribir caracteres en el monitor con el teclado del PC y ver lo que sucede en tu teléfono móvil.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>


## ¿Qué más?

Si deseas probar más ejemplos, puedes navegar a `Archivo > Ejemplos > INCOMPATIBLE > ArduinoBLE` y revisar todos los ejemplos bajo **ArduinoBLE**.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

