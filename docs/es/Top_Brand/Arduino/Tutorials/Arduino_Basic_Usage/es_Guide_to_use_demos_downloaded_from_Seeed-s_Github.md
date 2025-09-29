---
description: Guía para usar demos descargadas del Github de Seeed
title: Usar Demos del Github de Seeed Studio

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Guide_to_use_demos_downloaded_from_Seeed-s_Github
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Es necesario usar demos del Github de Seeeduino frecuentemente y hay cierta dificultad para un novato para ejecutar bien la demo.
Así que queremos mostrarte un procedimiento programado para ejecutar las demos rápidamente.

## Comenzar

1. Puedes descargar código de ejemplo y archivos de biblioteca o encabezado en los sitios de [Github de Seeed](https://github.com/Seeed-Studio).

2. Haz clic en un botón llamado "Download Zip" en Github.

3. Descomprime el archivo ZIP descargado.

4. Elimina el "-master" dos veces en el nombre del archivo descomprimido.

5. Copia la carpeta del archivo descomprimido _xxx_ en tu carpeta de bibliotecas (Por defecto, es la misma que la Ubicación del Sketchbook que se puede encontrar haciendo clic en File &gt; Preference).

6. En Windows, probablemente se llamará "My Documents\Arduino\libraries". Para usuarios de Mac, probablemente se llamará "Documents/Arduino/libraries". En Linux, será la carpeta "libraries" en tu sketchbook.

7. Añade biblioteca ZIP por el archivo ZIP descargado (con "-master" eliminado primero).

![](https://files.seeedstudio.com/wiki/Guide_to_use_demos_downloaded_from_Seeed-s_Github/img/Add_ZIP_library.png)

8. Abre el archivo _**.ino**_ en el subdirectorio _**example**_
9. Compila o Sube demos a tu placa controladora principal.

**Consejos:** Siempre añade comprimir un archivo de biblioteca (archivo de encabezado en la mayoría de las circunstancias) con formato **zip** si Arduino indica que no puede encontrar un archivo _foo.h_.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>