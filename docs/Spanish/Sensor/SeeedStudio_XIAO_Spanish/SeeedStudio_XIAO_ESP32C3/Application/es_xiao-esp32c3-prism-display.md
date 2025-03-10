---
description: XIAO Prism Display using ESP32C3
title: Display Prismático con XIAO ESP32C3 
keywords:
- XIAO
- Prism
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/XIAO-esp32c3-prism-display
last_update:
  date: 02/05/2025
  author: Guillermo
---

# Display Prismático con XIAO ESP32C3

<iframe class="youtube-video" src="https://www.youtube.com/embed/wSJa8HP0BkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Empezando  

Si deseas seguir este tutorial en su totalidad, necesitarás preparar lo siguiente.

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>Shield Grove para XIAO <br />con chip de gestión de batería</th>
      <th>Grove Smart IR Gesture <br />Sensor (PAJ7660)</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/enclosure/assembled.jpg" />
</div>

Este proyecto utiliza el ESP32C3 para crear una pantalla tridimensional mediante un prisma divisor. Esta guía explica los pasos necesarios para construir la carcasa, adjuntar la electrónica asociada e instalar el firmware. Se proporciona documentación adicional para las tareas de actualizar la lista de criptomonedas rastreadas y reducir y procesar imágenes animadas para su uso en el visor de imágenes.

Primeros Pasos

1. [Descargar e imprimir en 3D la carcasa](#Descargar-e-imprimir-en-3D-la-carcasa)  
2. [Conectar la electrónica asociada](#Conectar-la-electrónica-asociada)  
3. [Configurar el entorno](#Configurar-el-entorno)  
4. [Configurar el XIAO ESP32C3](#Configurar-el-XIAO-ESP32C3)

Documentación Adicional

1. [Agregar nuevas criptomonedas](#Agregar-nuevas-criptomonedas)  
2. [Reducir y procesar imágenes animadas](#Reducir-y-procesar-imágenes-animadas)

## Descargar e imprimir en 3D la carcasa

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/enclosure/3d-render-bottom.png" />
</div>

La carcasa 3D consiste en dos mitades diseñadas para encajarse a presión después del ensamblaje de las partes internas. Se deben utilizar soportes para imprimir las piezas y asegurar que la estructura se ensamble correctamente.

Las piezas se pueden encontrar en el repositorio de GitHub y están disponibles para su vista previa a través de su visor STL:<br />
https://github.com/Timo614/XIAO-prism-buddy/blob/main/docs/enclosure/XIAO-prism-top.stl<br />
https://github.com/Timo614/XIAO-prism-buddy/blob/main/docs/enclosure/XIAO-prism-bottom.stl<br />

## Conectar la electrónica asociada

<div align="center">
    <img width={400} src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/enclosure/xiao_screwed_in.jpg" />
</div>

El Grove Shield simplifica la configuración para el display prismático, ya que permite el uso de cables de protoboard simples para completar el ensamblaje sin necesidad de soldar. El escudo Grove debe tener el conjunto secundario de conectores hembra soldados en los pines abiertos adyacentes a los pines del XIAO. Este escudo debe atornillarse en los dos agujeros disponibles en la carcasa. Esto puede ser un poco complicado, por lo que puede ser útil poner los tornillos primero y luego bajar el escudo para apretar cada tornillo.

Desde aquí, hay dos conexiones principales:
- Una conexión i2c al sensor de gestos
- La conexión spi a la pantalla

Para la conexión i2c se utiliza un conector Grove de 4 pines del escudo al sensor de gestos. 

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/enclosure/inward_bend_install.jpg" style={{width:400, height:'auto'}}/></div>

La carcasa está diseñada para permitir que el sensor de gestos se ajuste perfectamente, con su tornillo manteniéndolo de forma segura contra el exterior de la carcasa. Para posicionar correctamente el sensor de gestos, primero debe colocarse el lado del USB, y luego, una vez que el cuerpo esté alineado, se debe instalar el tornillo.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/enclosure/sensor_screwed_in.jpg" style={{width:400, height:'auto'}}/></div>

La conexión SPI es un poco más compleja, ya que requiere varios pines adicionales.

```
3V3 en el XIAO se conecta al pin VCC de la pantalla  
GND en el XIAO se conecta al pin GND de la pantalla  
D0 en el XIAO se conecta al pin CS de la pantalla  
D1 en el XIAO se conecta al pin BL de la pantalla  
D2 en el XIAO se conecta al pin DC de la pantalla  
D3 en el XIAO se conecta al pin RST de la pantalla  
D8 (SCK) en el XIAO se conecta al pin SCL de la pantalla  
D10 (MOSI) en el XIAO se conecta al pin SDA de la pantalla
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:700, height:'auto'}}/></div>

Con los cables conectados a todos los componentes, el dispositivo puede ser completamente ensamblado. La carcasa está diseñada para permitir un cierre a presión si se imprime con tolerancias similares.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/enclosure/press_fit_close.jpg" style={{width:400, height:'auto'}}/></div>

Con el ensamblaje completado, coloca el prisma encima de la pantalla.

## Configuración del entorno

La forma más sencilla de configurar un entorno local es usar Visual Studio Code, ya que simplifica la configuración de la máquina.

- Clona el repositorio desde GitHub: https://github.com/Timo614/XIAO-prism-buddy
- Abre el repositorio en Visual Studio Code
- Instala la extensión ESP-IDF
- Instala ESP-IDF 5.0.4
- Establece el objetivo de dispositivo Espressif a esp32c3
- Configura las variables de entorno para tu red wifi (ver paso a continuación)
- Construye, flashea y monitorea tu dispositivo

## Configurar el XIAO ESP32C3

El siguiente paso para preparar tu aplicación es configurar tus credenciales para la red wifi.

Presiona `Ctrl` + `Shift` + `P` para abrir el menú rápido y escribe `menuconfig`. Esto filtrará la lista e incluirá una entrada para `ESP-IDF: SDK Configuration editor (Menuconfig)`.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/menuconfig.png" style={{width:400, height:'auto'}}/></div>

Cuando estés en este menú, configura el nombre de la red wifi y la contraseña para acceder a ella.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/config.png" style={{width:400, height:'auto'}}/></div>

### Agregar nuevas criptomonedas

1. **Actualizar el conteo total de criptomonedas**:
   - En el archivo `prism_controller.cpp`, modifica el valor de criptomonedas para reflejar el nuevo total.
   - **Ubicación**: [prism_controller.cpp](https://github.com/Timo614/XIAO-prism-buddy/blob/main/main/controller/prism_controller.cpp#L29)

2. **Modificar el modelo de criptomonedas**:
   - Busca una de las criptomonedas existentes (por ejemplo, Bitcoin) en el archivo correspondiente y agrega una nueva entrada para la criptomoneda que deseas agregar. Esto incluye la inicialización de datos, el análisis de la respuesta de CoinGecko y la cadena de solicitud de CoinGecko.
   - **Ubicación**: [prism_cryptocurrency.c](https://github.com/Timo614/XIAO-prism-buddy/blob/main/main/model/prism_cryptocurrency.c)

3. **Actualizar la estructura de datos de la vista de criptomonedas**:
   - En el archivo `view_data.h`, agrega los detalles de la nueva criptomoneda en la estructura de datos de la vista.
   - **Ubicación**: [view_data.h](https://github.com/Timo614/XIAO-prism-buddy/blob/main/main/view_data.h#L54)

4. **Actualizar la lógica del controlador**:
   - En el archivo `prism_controller.cpp`, busca una criptomoneda existente (como Bitcoin) y copia la lógica asociada a ella para manejar los eventos y la representación de la nueva criptomoneda.
   - **Ubicación**: [prism_controller.cpp](https://github.com/Timo614/XIAO-prism-buddy/blob/main/main/controller/prism_controller.cpp)

5. **Proporcionar un archivo PNG de tamaño adecuado**:
   - Encuentra una imagen PNG que represente la nueva criptomoneda y usa el **LVGL Online Image Converter** para convertir el PNG a un archivo C que pueda ser referenciado en el controlador.
   - Herramienta: [LVGL Online Image Converter](https://lvgl.io/tools/imageconverter)

### Reducir y procesar imágenes animadas

Debido a las limitaciones de memoria en el microcontrolador, trabajar con archivos GIF animados puede ser problemático, ya que ocupan mucho espacio en la memoria flash. Para convertir imágenes animadas y optimizarlas para su uso en el proyecto, sigue los pasos:

1. **Selecciona una imagen animada adecuada**:
   - Idealmente, busca imágenes con transparencia, que estén configuradas para hacer un bucle y tengan dimensiones razonables. Los archivos **Lottie** suelen ser útiles para este tipo de aplicaciones.
   - Fuente recomendada: [LottieFiles](https://lottiefiles.com/)

2. **Convertir Lottie a GIF**:
   - Usa un convertidor de Lottie a GIF transparente, como el que ofrece LottieFiles.
   - Herramienta recomendada: [LottieFiles Lottie to GIF Converter](https://lottiefiles.com/lottie-to-gif)

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/gif-compression/convert-lottie.png" style={{width:400, height:'auto'}}/></div>

3. Usando un editor de GIFs de tu elección, haz las siguientes modificaciones (encontré que la herramienta en línea https://ezgif.com proporciona estas capacidades en su suite de optimización para GIFs que utilicé con fines de esta aplicación):

3.1. Disminuir el número de fotogramas entre los fotogramas hasta que queden solo alrededor de 20 fotogramas.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/gif-compression/remove-frames.png" style={{width:400, height:'auto'}}/></div>

3.2. Redimensiona la imagen a alrededor de 100x100 o menos.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/gif-compression/resize.png" style={{width:400, height:'auto'}}/></div>

3.3. Ralentiza la imagen, ya que sin los fotogramas adicionales será extremadamente rápida. 

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/gif-compression/slow-speed.png" style={{width:400, height:'auto'}}/></div>

3.4. Reduce la composición de colores del GIF para disminuir su tamaño.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/gif-compression/reduce-colors.png" style={{width:400, height:'auto'}}/></div>

3.5. Comprime aún más el GIF según sea necesario.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/Timo614/XIAO-prism-buddy/main/docs/photos/gif-compression/compress.png" style={{width:400, height:'auto'}}/></div>

4. Usa el [Convertidor de Imágenes en Línea de LVGL](https://lvgl.io/tools/imageconverter) para convertir el archivo GIF a un arreglo en C según la [documentación de LVGL](https://docs.lvgl.io/8.3/libs/gif.html#convert-gif-files-to-c-array). Nota: selecciona el formato de color "Raw" y el formato de salida "C array".

Siguiendo estos pasos, habrás reducido el tamaño del archivo manteniendo la imagen GIF procesada de manera efectiva para su visualización en el dispositivo Prism. La forma más fácil es reemplazar la imagen de fuego o sandía existente para realizar pruebas.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


