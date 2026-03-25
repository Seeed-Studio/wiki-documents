---
description: Plantilla de wiki
title: Plantilla de wiki
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Name_your_website
last_update:
  date: 08/09/2023
  author: Nombre de ejemplo
createdAt: '2023-08-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/Name_your_website/
---

# Descripción general del proyecto

:::note
Esta es solo la guía básica para escribir una Wiki, incluyendo el código de escritura común.
:::

Esta es la descripción general de esta wiki. Debe contener estos contenidos:

1. Diagrama de visualización de la aplicación o imágenes de los productos utilizados principalmente
2. Principio de la aplicación
3. Breve introducción al proyecto

## Preparación de hardware

Estoy usando (productos de Seeed) como hardware aquí. El contenido aquí debe incluir:

1. Enumera todos los productos utilizados de Seeed Studio, con una tabla horizontal escrita con texto, más el enlace de producto "Consigue uno ahora". El código de ejemplo se muestra a continuación.
2. Utiliza gráficos para mostrar el método de conexión de hardware del proyecto

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32-S3(ejemplo)</th>
        <th>Seeed Studio Grove OLED Display 0.96(ejemplo)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Preparación de software

Estoy usando el software Thonny IDE (Windows) y algunas bibliotecas y archivos relacionados. El contenido aquí debe incluir:

1. Software de aplicación y dirección de descarga
2. Abre el software e instala las dependencias o bibliotecas necesarias

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
        <th>archivos relacionados(bibliotecas)</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Primeros pasos

### Descripción paso a paso: Cómo se implementa el proyecto

1. Sube el código del primer paso a cierto producto y aparece el efecto
2. Sube el código del segundo paso a un producto y aparece el efecto
3. ...

## Qué más

Algo que quieras añadir, algo que quieras ampliar, como:

- La ampliación de esta aplicación
- Abrir el campo
- Ofrecer pensamiento ampliado

## Solución de problemas

Algunos problemas que podrían encontrarse en el proceso de conexión de hardware, depuración de software o carga.

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## ✨ El otro código de características de la wiki

### Código al principio (obligatorio)

```
---
description: // One sentence introduction of the project
title: // One short words introduction of the project
keywords:
//Enter the upper-level directory where the file is stored (Grove，SenseCAP，reTerminal...)
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: / The name of file
last_update:
  date: //The data finished wiki
  author: // author
---
```

### El código de la imagen

```cpp
<p style={{textAlign: 'center'}}><img src="image_link" alt="pir" width={600} height="auto" /></p>
```

### Código de video

```cpp
<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
```

### Hipervínculo

```cpp
<a  href="link" target="_blank"><span> PDF Download of SenseCAP S210X Sereis User Guide</span></a>
```

### Código resaltado

```cpp

{code}

```

### Ocultar el código

<details>

<summary> título aquí</summary>

```cpp
#include
Print "code here"
```

</details>

### Botón de descarga de Arduino IDE

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

### Botón de descarga de la biblioteca de Github

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Código de tabla

Aquí se incluyen hipervínculos, enlaces de imágenes, título de la tabla

<table align="center">
  <caption> <h2>título</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Tipo de gas</h4></td>
    <td><h4>Consigue uno ahora</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/es/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>Gas combustible, humo</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
        <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    </tr>
  </tbody></table>

### nota

:::note
Algo de **contenido** con *Markdown* `syntax`. Check [this `api`](#).
:::

### consejo

:::tip
Algo de **contenido** con *Markdown* `syntax`. Check [this `api`](#).
:::

### información

:::info
Algo de **contenido** con *Markdown* `syntax`. Check [this `api`](#).
:::

### peligro

:::danger
Algo de **contenido** con *Markdown* `syntax`. Check [this `api`](#).
:::

### Precaución

:::caution
Algo de **contenido** con *Markdown* `syntax`. Check [this `api`](#).
:::
