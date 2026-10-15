---
description: Pantalla Prism XIAO usando ESP32C3
title: Pantalla Prism XIAO ESP32C3
keywords:
  - Xiao
  - Prism
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-esp32c3-prism-display
last_update:
  date: 02/01/2024
  author: timo614
createdAt: '2025-09-03'
updatedAt: '2025-10-11'
url: https://wiki.seeedstudio.com/es/xiao-esp32c3-prism-display/
---

# Pantalla Prism XIAO ESP32C3

<div class="video-container">
<iframe class="youtube-video" src="https://www.youtube.com/embed/wSJa8HP0BkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


## Primeros Pasos

Si quieres seguir este tutorial completo, necesitarás preparar lo siguiente.

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>Shield Grove para XIAO <br />con chip de gestión de batería</th>
      <th>Sensor de Gestos IR Inteligente <br />Grove (PAJ7660)</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/assembled.jpg" />
</div>

Este proyecto utiliza el ESP32C3 para crear una pantalla tridimensional usando un prisma divisor. Esta guía explica los pasos necesarios para construir la carcasa, conectar la electrónica asociada e instalar el firmware. Se proporciona documentación adicional para las tareas de actualizar la lista de criptomonedas rastreadas y redimensionar y procesar imágenes animadas para su uso en el navegador de imágenes.

Pasos Principales

1. [Descargar e imprimir en 3D la carcasa](#download-and-3d-print-enclosure)
2. [Conectar la electrónica asociada](#attach-associated-electronics)
3. [Configurar el entorno](#setup-environment)
4. [Configurar el XIAO ESP32C3](#configure-the-xiao-esp32c3)

Documentación Adicional

1. [Agregar nuevas criptomonedas](#adding-new-cryptocurrencies)
2. [Redimensionar y procesar imágenes animadas](#downsizing-and-processing-animated-images)

## Descargar e imprimir en 3D la carcasa

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/3d-render-bottom.png" />
</div>

La carcasa 3D consiste en dos mitades que están diseñadas para encajar a presión después del ensamblaje de las partes internas. Se deben usar soportes para imprimir las partes y asegurar que la estructura se ensamble correctamente.

Las partes se pueden encontrar en el repositorio de github y están disponibles para vista previa a través de su visor STL:<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-top.stl<br />
https://github.com/Timo614/xiao-prism-buddy/blob/main/docs/enclosure/xiao-prism-bottom.stl<br />

## Conectar la electrónica asociada

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/xiao_screwed_in.jpg" />
</div>

El escudo Grove simplifica la configuración para la pantalla de prisma ya que permite el uso de cables de prototipado simples para completar el ensamblaje sin necesidad de soldadura. El escudo Grove debe tener el segundo conjunto de conectores hembra soldados en los pines abiertos adyacentes a los pines Xiao. Este escudo debe atornillarse en los dos orificios de tornillo disponibles en la carcasa. Esto puede ser un poco complicado, por lo que puede ser útil poner los tornillos primero y luego bajar el escudo y apretar cada tornillo.

Desde aquí hay dos conexiones principales:
- Una conexión i2c al sensor de gestos
- La conexión spi a la pantalla

Para la conexión i2c se usa un conector Grove de 4 pines desde el escudo al sensor de gestos.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/inward_bend_install.jpg" style={{width:400, height:'auto'}}/></div>

La carcasa está diseñada para permitir que el sensor de gestos se asiente cómodamente con su tornillo manteniéndolo seguro contra el exterior de la carcasa. Para posicionar el sensor de gestos correctamente, el lado USB debe posicionarse primero y luego una vez que el cuerpo esté al ras, se debe instalar el tornillo.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/sensor_screwed_in.jpg" style={{width:400, height:'auto'}}/></div>

La conexión spi es un poco más compleja ya que requiere varios pines más.

```
3V3 on the Xiao is connected to the display's VCC Pin
GND on the Xiao is connected to the display's GND Pin
D0 on the Xiao is connected to the display's CS Pin
D1 on the Xiao is connected to the display's BL Pin
D2 on the Xiao is connected to the display's DC Pin
D3 on the Xiao is connected to the display's RST Pin
D8 (SCK) on the Xiao is connected to the display's SCL Pin
D10 (MOSI) on the Xiao is connected to the display's SDA Pin
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:700, height:'auto'}}/></div>

Con los cables conectados a todos los componentes, el dispositivo puede ser completamente ensamblado. La carcasa está configurada para permitir un cierre por presión si se imprime con tolerancias similares.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/enclosure/press_fit_close.jpg" style={{width:400, height:'auto'}}/></div>

Con el ensamblaje completado, coloca el prisma encima de la pantalla.

## Configurar el entorno

El enfoque más fácil para configurar un entorno local es usar Visual Studio Code ya que simplifica la configuración de la máquina.

- Clona el repositorio desde GitHub: https://github.com/Timo614/xiao-prism-buddy
- Abre el repositorio en Visual Studio Code
- Instala la extensión ESP-IDF
- Instala ESP-IDF 5.0.4
- Establece el ESP-IDF Espressif Device Target a esp32c3
- Configura las variables de entorno para tu red wifi (ver paso a continuación)
- Compila, flashea y monitorea tu dispositivo

## Configurar el XIAO ESP32C3

El siguiente paso para preparar tu aplicación es configurar tus credenciales para la red wifi.

Presiona `Ctrl` + `Shift` + `P` para abrir el menú rápido y escribe `menuconfig`. Esto filtrará la lista para incluir una entrada para `ESP-IDF: SDK Configuration editor (Menuconfig)`.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/menuconfig.png" style={{width:400, height:'auto'}}/></div>

Cuando estés en este menú, por favor establece un nombre de red wifi y una contraseña para acceder a ella.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/config.png" style={{width:400, height:'auto'}}/></div>

## Agregar nuevas criptomonedas

El Xiao Prism Buddy puede ser modificado para mostrar diferentes criptomonedas ya que está alimentado por CoinGecko. CoinGecko proporciona un nivel gratuito para su API que permite acceso con limitaciones de velocidad a los usuarios.

La aplicación accede al endpoint `/simple/price` cada 15 minutos actualizando un conjunto de criptomonedas configuradas. La moneda utilizada por la llamada es configurable a través del [archivo `config.h` en el repositorio](https://github.com/Timo614/xiao-prism-buddy/blob/main/main/config.h#L26) junto con el símbolo de moneda mostrado en la aplicación. La [documentación de la api](https://www.coingecko.com/api/documentation) puede ser referenciada para más información sobre la llamada en sí.

El proceso para agregar nuevas criptomonedas es un poco complejo actualmente pero puede ser logrado en los siguientes pasos:

1. Actualiza el conteo total de criptomonedas para reflejar el conteo correcto (este valor codificado se usa para ciclar a través de la página en sí)
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp#L29
2. En el archivo del modelo de criptomonedas busca una de las criptomonedas existentes (ej: bitcoin) y agrega una nueva entrada en cada segmento asociado de código (la inicialización de datos, análisis de respuesta de coingecko, cadena de solicitud get de coingecko, etc.)
https://github.com/Timo614/xiao-prism-buddy/blob/main/main/model/prism_cryptocurrency.c
3. Actualiza la estructura de datos de vista de criptomonedas para reflejar la nueva criptomoneda https://github.com/Timo614/xiao-prism-buddy/blob/main/main/view_data.h#L54
4. En la lógica del controlador busca una criptomoneda existente (ej: bitcoin) y copia la lógica asociada allí para manejar datos de eventos y renderizado https://github.com/Timo614/xiao-prism-buddy/blob/main/main/controller/prism_controller.cpp
5. Proporciona un archivo png de tamaño apropiado para la nueva criptomoneda, usa el Convertidor de Imágenes en Línea de LVGL para convertir el PNG a un archivo C y referenciar en el controlador según sea necesario arriba https://lvgl.io/tools/imageconverter

## Reducción de tamaño y procesamiento de imágenes animadas

Una limitación al trabajar con un microcontrolador es la falta de memoria flash disponible. Los archivos GIF ocupan una cantidad considerable de memoria flash, lo que hace más difícil su inclusión. Se siguió un conjunto de procesos para convertir las imágenes utilizadas en la aplicación, que se documenta aquí en caso de que otros deseen realizar los mismos pasos para alterar las imágenes del navegador de imágenes utilizadas por otras de su propia elección.

1. Selecciona una imagen animada adecuada. Idealmente algo que sea transparente, que esté configurado para repetirse en bucle, y que tenga dimensiones decentes. Para facilitar el proceso encontré que buscar archivos Lottie en particular era útil. Para la aplicación pude encontrar varias imágenes útiles a través de https://lottiefiles.com/
2. Usar un convertidor de Lottie a gif para convertir el archivo Lottie a un archivo GIF transparente (como https://lottiefiles.com/lottie-to-gif)

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/convert-lottie.png" style={{width:400, height:'auto'}}/></div>

3. Usando un editor de GIF de tu elección realiza las siguientes modificaciones (encontré que la herramienta en línea https://ezgif.com proporcionaba estas capacidades en su suite de optimización para GIFs que utilicé para los propósitos de esta aplicación):

3.1. Disminuye el número de fotogramas entre fotogramas hasta que solo queden alrededor de 20 fotogramas

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/remove-frames.png" style={{width:400, height:'auto'}}/></div>

3.2. Redimensiona la imagen a alrededor de 100x100 o menos

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/resize.png" style={{width:400, height:'auto'}}/></div>

3.3. Ralentiza la imagen ya que sin los fotogramas adicionales será extremadamente rápida

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/slow-speed.png" style={{width:400, height:'auto'}}/></div>

3.4. Reduce la composición de colores del GIF para reducir su tamaño

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/reduce-colors.png" style={{width:400, height:'auto'}}/></div>

3.5. Comprime aún más el GIF según sea necesario

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/xiao-prism-buddy/main/docs/photos/gif-compression/compress.png" style={{width:400, height:'auto'}}/></div>

4. Usa el [Convertidor de Imágenes en Línea de LVGL](https://lvgl.io/tools/imageconverter) para convertir el archivo GIF a un array de C según la [documentación de LVGL.](https://docs.lvgl.io/8.3/libs/gif.html#convert-gif-files-to-c-array) Nota: `Selecciona el formato de color "Raw" y el formato de salida "C array".`

Con estos pasos seguidos tienes una imagen GIF con tamaño de archivo reducido pero aún efectiva procesada para mostrar en el dispositivo Prism. El enfoque más fácil es reemplazar la imagen de fuego o sandía existente para pruebas.

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


