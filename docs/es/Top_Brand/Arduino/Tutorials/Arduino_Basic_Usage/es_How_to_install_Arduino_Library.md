---
description: Cómo instalar una biblioteca de Arduino
title: Cómo instalar una biblioteca de Arduino

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How_to_install_Arduino_Library
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---


:::note

    Este tutorial está basado en Arduino 1.6.9.
:::

Aquí te mostraremos cómo instalar una biblioteca de Arduino. Debes tener en cuenta que casi todas nuestras bibliotecas están almacenadas en [Github](https://github.com/Seeed-Studio). Proporcionaremos una biblioteca de Arduino cuando un producto necesite una biblioteca. Para algunos productos simples, no hay necesidad de escribir una biblioteca como Grove - Button.

## Descargar la Biblioteca

Hay dos formas de descargar una biblioteca de Arduino.

### 1.Descargar en la página del producto
Normalmente, si un producto necesita una biblioteca, encontrarás una barra de botón de descarga de biblioteca como esta a continuación:

[![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/library.png)](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip)

Haz clic en el botón para comenzar la descarga. En segundos obtendrás un paquete.

### 2.Descargar desde github

Si necesitas descargar desde una página de Github, entonces puedes hacer clic en el botón **Clone or download >Download ZIP** para obtener el paquete de la biblioteca.

![enter image description here](https://files.seeedstudio.com/wiki/Tutorial_Add_Arduino_Library/images/github_download.png)

## Agregar la biblioteca

También hay dos formas de agregar una biblioteca al IDE de Arduino.

### 1.Agregar Biblioteca ZIP

Ya que has descargado la biblioteca zip, abre tu IDE de Arduino, haz clic en **Sketch > Include Library > Add .ZIP Library**.

![enter image description here](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png)

Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png)

### 2.Agregar carpeta de biblioteca manualmente
A veces no puedes agregar una biblioteca ZIP correctamente, porque la carpeta raíz de la biblioteca Zip carece de archivo .cpp o .h, Arduino no puede reconocerla. Entonces puedes descomprimir el archivo zip y copiar la carpeta de la biblioteca en la siguiente ruta **...\Arduino\libraries**. **....\** es la ruta donde configuraste Arduino. En mi caso es **D:\Workwork\Software\Arduino\libraries**.

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png)

### Verificar
Entonces vamos a verificar si la biblioteca se instaló correctamente.

Cuando agregues una biblioteca exitosamente, habrá una demostración en el Ejemplo. En este caso, haz clic en **File > Example > OLED_Display_96x96-master > OLED_Hello_World** para abrir un ejemplo, haz clic en el botón Verify, si no hay error, felicitaciones, la biblioteca está instalada perfectamente.


![enter image description here](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/successlly.png)

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