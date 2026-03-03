---
description: XIAO-FAQ
title: ¿Qué hacer cuando falla la carga/el programa funciona de forma anormal/no se encuentra el puerto del dispositivo?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/noport_upload_fails
last_update:
  date: 6/21/2023
  author: Seraphina
---


Hay ocasiones en las que usamos el programa incorrecto para hacer que XIAO parezca perder puertos o no funcione correctamente. El comportamiento específico es:

- Conectado a la computadora, pero no se encuentra número de puerto para XIAO.

- La computadora está conectada y aparece el número de puerto, pero la carga del programa falla.

En este Wiki, puedes encontrar soluciones. Diferentes modelos de XIAO tienen diferentes métodos de solución de problemas, así que por favor elige la solución correspondiente para tu modelo.

:::success Navegación rápida
Aquí están los métodos de solución de problemas para fallos de carga, comportamiento anormal del programa, o errores de puerto de dispositivo no encontrado para varios tipos de XIAO. Puedes indexar rápidamente a través del enlace de abajo:

- [**XIAO SAMD21**](/es/noport_upload_fails/#for-xiao-samd21)
- [**XIAO RP2040**](/es/noport_upload_fails/#for-xiao-rp2040)
- [**XIAO nRF52840(Sense)**](/es/noport_upload_fails/#for-xiao-nrf52840-sense)
- [**XIAO ESP32C3**](/es/noport_upload_fails/#for-xiao-esp32c3)
- [**XIAO ESP32S3(Sense)**](/es/noport_upload_fails/#for-xiao-esp32s3-sense)
:::

## **Para XIAO SAMD21**

A veces el puerto del Seeed Studio XIAO SAMD21 puede desaparecer cuando el proceso de programación del usuario falla. Podemos resolver este problema mediante la siguiente operación:

### Reiniciar

Primero, puedes intentar reiniciar XIAO SAMD21. Los pasos son los siguientes:

- Conecta el Seeed Studio XIAO SAMD21 a tu computadora.
- Usa pinzas o líneas cortas para hacer un cortocircuito en los pines RST **solo una vez**
- Las luces LED naranjas parpadean y se encienden.

:::note
El comportamiento del LED integrado es inverso al de un Arduino. En el Seeed Studio XIAO SAMD21, el pin tiene que ser puesto en bajo, mientras que en otros microcontroladores tiene que ser puesto en alto.
:::

Si eso no funciona, por favor intenta entrar al **modo bootloader**:

### Entrar al Modo Bootloader

Cuando encuentres las dos situaciones anteriores, puedes intentar poner XIAO en modo BootLoader, lo cual puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- Conecta el Seeed Studio XIAO SAMD21 a tu computadora.
- Usa pinzas o líneas cortas para hacer un cortocircuito en los pines RST en el diagrama **dos veces**.
- Las luces LED naranjas parpadean y se encienden.

En este punto, el chip entra en modo Bootloader y el puerto de grabación aparece nuevamente. Porque el chip samd21 tiene dos particiones, una es el Bootloader y la otra es el programa del usuario. El producto grabará un código bootloader en la memoria del sistema cuando salga de fábrica. Podemos cambiar modos realizando los pasos anteriores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

Si eso tampoco funciona, desconecta la placa de la PC, y conecta la placa nuevamente.

## **Para XIAO RP2040**

A veces el puerto del Seeed Studio XIAO RP2040 puede desaparecer cuando el proceso de programación del usuario falla. Podemos resolver este problema mediante la siguiente operación:

### Reiniciar

Primero, puedes intentar reiniciar XIAO RP2040. Los pasos son los siguientes:

- Conecta el Seeed Studio XIAO RP2040 a tu computadora.
- Presiona los pines "R" **una vez**.

:::note
El comportamiento de los LEDs programables de color único integrados (dos son azules, uno es verde) es inverso al de un Arduino. En el Seeed Studio XIAO RP2040, el pin tiene que ser puesto en bajo para habilitarse.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

Si eso no funciona, por favor intenta entrar al **modo bootloader**:

### Entrar al Modo Bootloader

Cuando encuentres las dos situaciones anteriores, puedes intentar poner XIAO en modo BootLoader, lo cual puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- Mantén presionado el botón "B".
- Conecta el Seeed Studio XIAO PR2040 a tu computadora.
- La computadora mostrará un controlador de disco.

En este punto, el chip entra en modo Bootloader y el puerto de grabación aparece nuevamente. Porque el chip RP2040 tiene dos particiones, una es el Bootloader y la otra es el programa del usuario. El producto grabará un código bootloader en la memoria del sistema cuando salga de fábrica. Podemos cambiar modos realizando los pasos anteriores.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->

Si eso tampoco funciona, desconecta la placa de la PC, y conecta la placa nuevamente.

## **Para XIAO nRF52840 (Sense)**

A veces el puerto del Seeed Studio XIAO nRF52840 (Sense) puede desaparecer cuando el proceso de programación del usuario falla. Podemos resolver este problema con la siguiente operación:

### Reiniciar

Primero, puedes intentar **reiniciar** el XIAO nRF52840 (Sense). Los pasos son los siguientes:

- Conecta el Seeed Studio XIAO nRF52840 (Sense) a tu computadora.
- Presiona el "botón de reinicio" **una vez**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2a.jpg" alt="pir" width={700} height="auto" /></p>

Si eso no funciona, por favor intenta entrar al **modo bootloader**:

### Entrar al Modo Bootloader

Cuando encuentres las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, lo cual puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- Conecta el Seeed Studio XIAO nRF52840 (Sense) a tu computadora.
- Presiona el "botón de reinicio" **dos veces**.

Si eso tampoco funciona, desconecta la placa de la PC, y conecta la placa nuevamente.

## **Para XIAO ESP32C3**

A veces el puerto del Seeed Studio XIAO ESP32C3 puede desaparecer cuando el proceso de programación del usuario falla. Podemos resolver este problema con la siguiente operación:

### Reiniciar

Primero, puedes intentar reiniciar el XIAO ESP32C3. Los pasos son los siguientes:

- Conecta el Seeed Studio XIAO ESP32C3 a tu computadora.
- Presiona el "BOTÓN DE REINICIO" **una vez**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:500, height:'auto'}}/></div>

Si eso no funciona, por favor intenta entrar al **modo bootloader**:

### Entrar al Modo Bootloader

Cuando encuentres las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, lo cual puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- Mantén presionado el "BOTÓN BOOT".
- Conecta el Seeed Studio XIAO ESP32C3 a tu computadora mientras mantienes presionado el **BOTÓN BOOT**.
- Suéltalo para entrar al **modo bootloader**

## **Para XIAO ESP32S3 (Sense)**

A veces el puerto del Seeed Studio XIAO ESP32S3(Sense) puede desaparecer cuando el proceso de programación del usuario falla. Podemos resolver este problema con la siguiente operación:

### Reiniciar

Primero, puedes intentar reiniciar el XIAO ESP32S3. Los pasos son los siguientes:

- Conecta el Seeed Studio XIAO ESP32S3 a tu computadora.
- Presiona el "BOTÓN DE REINICIO" **una vez**.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/esp32s3.png" style={{width:700, height:'auto'}}/></div>

Si eso no funciona, por favor intenta entrar al **modo bootloader**:

### Entrar al Modo BootLoader

Cuando encuentres las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, lo cual puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- **Paso 1**. Presiona y mantén el botón BOOT en el XIAO ESP32S3 sin soltarlo.

- **Paso 2**. Mantén presionado el botón BOOT y luego conéctalo a la computadora a través del cable de datos. Suelta el botón BOOT después de conectarlo a la computadora.

:::note
Cuando presionas y mantienes la tecla BOOT mientras enciendes y luego presionas la tecla Reset una vez, también puedes entrar al modo BootLoader.
:::

- **Paso 3**. Carga el programa **Blink** para verificar el funcionamiento del XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>
