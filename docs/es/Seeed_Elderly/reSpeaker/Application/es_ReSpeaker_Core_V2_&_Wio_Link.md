---
description: ReSpeaker Core V2 & Wio Link
title: ReSpeaker Core V2 & Wio Link
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_Core_V2_&_Wio_Link
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

Aquí está el tutorial sobre cómo usar el ReSpeaker Core V2 para controlar [Wio Link](https://wiki.seeedstudio.com/es/Wio_Link/) a través de [IFTTT](https://ifttt.com/).

## 1. Configurar ReSpeaker Core v2.0

Sigue la [Demostración Fuera de la Caja](https://wiki.seeedstudio.com/es/ReSpeaker_Core_v2.0/#out-of-box-demo) del ReSpeaker Core v2.0 para configurar el respeaker core e iniciar sesión en alexa con nombre de usuario y contraseña.

## 2. Configurar Wio Link a través de la APP Wio

Sigue [Primeros Pasos con Wio Link](https://wiki.seeedstudio.com/es/Wio_Link/#get-started) para conectar un LED en el puerto D0 y configurar la APP Wio.

## 3. Configurar IFTTT

- Paso 1. Regístrate en una [cuenta IFTTT](https://ifttt.com/join).
- Paso 2. Selecciona **My Applets**
- Paso 3. Selecciona **New Applet**
- Paso 4. Haz clic en **+this**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/this.png)

- Paso 5. Selecciona **amazon alexa** e inicia sesión en la misma cuenta de amazon que ReSpeaker Core v2.0.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/alexa.png)

- Paso 6. Selecciona **Say a specific phrase**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/say_a_specific_phase.png)

- Paso 7. Ingresa la palabra clave en minúsculas **on** y luego haz clic en **Create Trigger**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/key_word.png)

- Paso 8. Haz clic en **+that**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/that.png)

- Paso 9. Elige **Seeed Wio** como servicio de acción.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/wio.png)

- Paso 10. Selecciona **on, off or trigger Grove**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/choose_action.png)

- Paso 11. Selecciona el módulo Grove en línea correcto y **on** como **do**.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/on.png)

- Paso 12. Sigue los Pasos 3 ~ 11 para agregar la función **off**.

## 4. Diviértete con Alexa

Digamos "Alexa trigger on" y podemos ver que el Grove-LED se enciende y el LED se apaga cuando decimos "Alexa trigger off". También podemos usar las otras funciones en Wio Link, como la cadena de LED y demás.

:::note
    También podemos usar el asistente de google para trabajar con Wio Link.
:::

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>