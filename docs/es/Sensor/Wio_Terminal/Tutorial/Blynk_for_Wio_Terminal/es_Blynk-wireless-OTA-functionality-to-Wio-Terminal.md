---
title: WT OTA para Blynk
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Blynk-wireless-OTA-functionality-to-Wio-Terminal/
slug: /es/Blynk-wireless-OTA-functionality-to-Wio-Terminal
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Usar la funcionalidad OTA inalámbrica de Blynk en Wio Terminal

En esta wiki describiremos cómo usar la funcionalidad OTA inalámbrica de Blynk en Wio Terminal.

- **¿Qué es Blynk?**

[**Blynk**](https://blynk.io/) es una nueva plataforma que te permite construir rápidamente interfaces para controlar y monitorear tus proyectos de hardware desde tu dispositivo iOS y Android. Después de descargar la aplicación Blynk, puedes crear un panel de proyecto y organizar botones, deslizadores, gráficos y otros widgets en la pantalla.

## Hardware Requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Teléfono móvil
- Descargar la aplicación Blynk desde App Store
- WiFi

## Trabajo preparatorio

Ve a [**Blynk para registrarte e iniciar sesión**](https://blynk.cloud/dashboard/login), ve a la pantalla de Plantillas y crea una nueva plantilla.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/1.png)

Luego edita el nombre y selecciona el dispositivo y el modo de conexión, en este caso "Seeed Wio Terminal" y "WiFi".
![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/60.jpg)

Anota el BLYNK_TEMPLATE_ID y BLYNK_DEVICE_NAME.
En el ejemplo, son:

```cpp
#define BLYNK_TEMPLATE_ID "TMPLCc16MxA1"
#define BLYNK_DEVICE_NAME "WioTerminal"
```

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/3.png)

Luego haz clic en el botón guardar en la esquina superior derecha.

## Configurar el Arduino IDE y ajustar el código

A continuación, descarga y abre el código de ejemplo en el Arduino IDE.

[**Edgent_Wio_Terminal_0-2.zip**](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/Edgent_Wio_Terminal_0-2.zip)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/4.jpg)

Selecciona el dispositivo Wio Terminal de las opciones de placa de desarrollo ([**consulta la página wiki de Wio Terminal**](https://blynk.cloud/dashboard/login) para saber cómo agregar Wio Terminal en el Arduino IDE).

Agrega [**blynk-library**](https://github.com/blynkkk/blynk-library)

Busca y agrega los siguientes archivos de biblioteca en el administrador de bibliotecas del Arduino IDE:

- Seeed Arduino rpcunified
- Seeed Arduino rpcWiFi
- Seeed Arduino SFUD
- Seeed Arduino FS
- Seeed Arduino mbedtls
- ArduinoOTA
- ArduinoHttpClient

En las líneas 16 y 17 del código, completa el ID y NAME que el sistema acaba de generar:

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/5.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/6.jpg)

Luego compila y sube el código a Wio Terminal (si falta un archivo de biblioteca durante la compilación, busca en el administrador de bibliotecas y descárgalo)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/7.png)

Después de que el programa se suba exitosamente, abre el monitor del puerto serie y establece la velocidad de baudios a 115200. Espera 5-10s. El puerto serie muestra la siguiente información: (si el monitor del puerto serie no responde, intenta reconectar el cable de datos y reabrir el monitor del puerto serie.)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/8.jpg)

## Configuración de la APP móvil

Descarga la APP Blynk IoT:

Android: [https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US](https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US)

IOS: [https://apps.apple.com/us/app/blynk-iot/id1559317868](https://apps.apple.com/us/app/blynk-iot/id1559317868)

Inicia sesión en la pantalla principal

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji111.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji222.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji333.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji4454.png)

Después de que la configuración de la APP sea exitosa, el monitor del puerto serie mostrará el estado de la conexión de red. Cuando se muestre 'Ready', la conexión WiFi será exitosa.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/21.jpg)

Ahora es momento de probar la función OTA.

## OTA: Actualizar BLYNK_FIRMWARE_VERSION

Puedes escribir un programa personal en "edgent_wio_terminal_0-2" con "void setup()" y "void loop()". En este ejemplo, cambiaremos la información de versión del programa directamente para fines de demostración. Si el programa se sube exitosamente, la información de versión cambiará.
Cambiamos BLYNK_FIRMWARE_VERSION de "0.2.0" a "0.2.11"

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/22.jpg)

Luego haz clic en "Export compiled Binary" y espera a que se complete la compilación.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/23.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/24.png)

Luego abre la carpeta y ve al archivo BIN.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/25.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/26.jpg)

Abre Blynk Air y selecciona "New Shipping" en la esquina superior derecha. Haz clic hacia abajo en esta pantalla para encontrar la opción "Firmware".

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/27.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/28.jpg)

Selecciona el archivo bin. que acabas de generar aquí, y verás que la versión del software cambió a "0.2.11" que acabamos de establecer. Luego haz clic en el botón "Start Shipping" en la esquina inferior derecha para iniciar el programa de subida inalámbrica.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/29.jpg)

Puedes ver las subidas en tiempo real en la página web o en el monitor del puerto serie.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/30.jpg)

Espera aproximadamente 2 minutos si tu monitor del puerto serie no tiene salida, entonces intenta reiniciar el dispositivo y abrir el monitor del puerto serie nuevamente y verás la subida en tiempo real.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/31.jpg)

Reinicia el dispositivo y puedes ver que la versión del software aquí ha cambiado a "0.2.11" que acabamos de cambiar.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/32.jpg)

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
