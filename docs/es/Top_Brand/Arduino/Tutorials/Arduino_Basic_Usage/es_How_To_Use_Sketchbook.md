---
description: Cómo Usar Sketchbook
title: Cómo Usar Sketchbook

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How_To_Use_Sketchbook
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

En otro documento, hemos hecho una introducción detallada sobre Library, sabemos que Library es realmente muy fácil de usar! Descarga una Library, ponla en el directorio de librerías de Arduino, abre el ejemplo y funciona.

Sin embargo, a veces encontraremos este problema: Has hecho una demostración interesante, esta demostración necesita contener algunas librerías, y te gustaría compartir esta demostración, así que necesitas enviar el código a algunas personas, pero a menudo hay un problema de error de compilación: falta cierta librería. Así que necesitas enviarle la librería. Si tu demostración necesita muchas librerías, estos serán muchos más problemas.

De hecho, Arduino tiene un Sketchbook que puede ser una buena solución a este problema. Sketchbook es en realidad una carpeta, puedes ponerla en cualquier lugar. Aquí vamos a probar usando Sketchbook.

Había escrito un Sketchbook, puedes descargarlo [aquí](https://github.com/loovee/NFC_ShieldBot_Demo),
Ignora su contenido; nuestro propósito es familiarizarte con Sketchbook. Después de descargarlo, lo ponemos en la unidad F.

Abre el IDE de Arduino, haz clic en File-&gt; Preferences, haz clic en la pantalla emergente:

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook1.jpg)

Apunta la ubicación de Sketchbook al directorio donde está el código descargado. Y haz clic en OK para completar la operación. Cierra y vuelve a abrir el IDE de Arduino.

Abre File -&gt; Sketchbook, puedes ver que aparecen muchos elementos, como demo, shield_bot y así sucesivamente. Hacemos clic en demo, entonces puedes abrirlo, y puedes ver el código de demo ahora. Puedes encontrar que esta demostración contiene muchas librerías que no habías visto antes. Entonces hacemos clic en el botón compilar, éxito sin errores, ¿cosa extraña? De hecho, puede que hayas notado, hay una carpeta llamada libraries en NFC_Shieldbot_Demo, sí, las librerías están aquí.

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook2.jpg)

Así, cuando quieras hacer una demostración, puedes intentar construir un Sketchbook, y poner las librerías necesarias en la carpeta libraries del Sketchbook. Justo como el Sketchbook que habías descargado hace unos minutos:

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook3.jpg)

###   Recursos

- [descargar archivo pdf](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/res/How_to_use_Sketchbook.pdf)

## Soporte Técnico y Discusión del Producto
¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>