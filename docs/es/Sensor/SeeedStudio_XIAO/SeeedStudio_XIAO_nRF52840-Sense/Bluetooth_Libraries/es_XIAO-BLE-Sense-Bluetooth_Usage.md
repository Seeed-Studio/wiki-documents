---
description: Para la Biblioteca de Placas nRF52 de Seeed
title: Para la Biblioteca de Placas nRF52 de Seeed
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Uso de Bluetooth (Biblioteca de Placas nRF52 de Seeed)

**Seeed Studio XIAO nRF52840** y **Seeed Studio XIAO nRF52840 Sense** ambos soportan conectividad Bluetooth. Este wiki introducirá las funciones básicas de Bluetooth utilizadas por la "Biblioteca de Placas nRF52 de Seeed".

## Primeros Pasos

### Hardware Requerido

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) o [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Smartphone con conectividad bluetooth
- 1 x Cable USB Type-C

### Software Requerido

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### Instalación

> Dado que la función que aplicamos está empaquetada en la "Biblioteca de Placas nRF52 de Seeed", no tenemos que instalar otra biblioteca de terceros. Puedes omitir este paso.

- **Método Uno** (Este método está disponible para ambas bibliotecas de código mencionadas anteriormente.)

Dado que has descargado la biblioteca zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>


- **Método Dos** (Solo se puede instalar la biblioteca ArduinoBLE.)

El administrador de bibliotecas se agregó comenzando con las versiones 1.5 y superiores del Arduino IDE (1.6.x). Se encuentra en el menú 'Sketch' bajo 'Include Library', 'Manage Libraries...'

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>


Cuando abras el Administrador de Bibliotecas encontrarás una gran lista de bibliotecas listas para instalación con un clic. Para encontrar una biblioteca para tu producto, busca el nombre del producto o una palabra clave como 'k type' o 'digitizer', y la biblioteca que deseas debería aparecer. Haz clic en la biblioteca deseada, y aparecerá el botón 'Install'. Haz clic en ese botón, y la biblioteca debería instalarse automáticamente. Cuando termine la instalación, cierra el Administrador de Bibliotecas.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## Ejemplos de aplicación

Aquí te introduciremos aplicaciones de Bluetooth.

### Conectar Inalámbricamente un Teclado de PC al Teléfono Móvil

**Paso 1.** Inicia la aplicación Arduino.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>


**Paso 2.** Selecciona tu modelo de placa de desarrollo y agrégalo al Arduino IDE. Aquí estamos usando la "Biblioteca de Placas nRF52 de Seeed".

> Para la instalación de las bibliotecas de placas, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup) para completar la instalación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>


**Paso 3.** Navega a **"File -> Examples -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"** y abre el archivo de ejemplo "blehid_keyboard".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>


**Paso 4.** Haz clic en "Upload" y luego abre el "monitor" en la esquina superior derecha del Arduino IDE. El monitor se mostrará como:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>


**Paso 5.** Abre la App "nRF Connect for Mobile" o la App "LightBlue" en tu teléfono móvil, mientras tanto asegúrate de que tu teléfono esté conectado con Bluetooth. Después de un rato, encontrarás un dispositivo llamado "XIAO nRF52840" listado.

- Para la **APP nRF Connect for Mobile** debería verse como:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>


- Para la **APP LightBlue** debería verse como:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>


**Paso 6.** Simplemente haz clic en el dispositivo y la conexión se completará automáticamente. Después de eso podemos escribir caracteres en el monitor con el teclado de PC, y luego ver qué sucede en tu teléfono móvil.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>


## ¿Qué más?

Si quieres probar más ejemplos puedes navegar a `File > Examples > INCOMPATIBLE > ArduinoBLE` y revisar todos los ejemplos bajo **ArduinoBLE**


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>