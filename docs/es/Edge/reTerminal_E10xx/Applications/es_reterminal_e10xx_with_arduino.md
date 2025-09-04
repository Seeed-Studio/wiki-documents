---
description: Este artículo describe cómo hacer que la serie reTerminal E10xx funcione con Arduino.
title: reTerminal E10xx Trabajar con Arduino
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /es/reterminal_e10xx_with_arduino
sidebar_position: 4
last_update:
  date: 08/21/2025
  author: Allen
---

# Comenzando con reTerminal E10xx en Arduino

## ¿Qué es [Arduino](https://www.arduino.cc/)

Arduino es una plataforma de electrónica de código abierto basada en hardware y software fáciles de usar. Consiste en placas de microcontroladores y un entorno de desarrollo integrado (IDE). Diseñado para artistas, aficionados e ingenieros, simplifica la creación de proyectos interactivos—desde robots hasta automatización del hogar. Con un lenguaje de programación simple y amplio soporte de la comunidad, los usuarios pueden escribir código fácilmente, cargarlo a las placas y dar vida a sus ideas electrónicas. Su accesibilidad lo hace popular para el aprendizaje y la innovación.

## Comenzando

Antes de profundizar en las características específicas, configuremos nuestro entorno de desarrollo para reTerminal E10xx.

### Preparación del Entorno

Para programar reTerminal E10xx con Arduino, necesitarás configurar el IDE de Arduino con soporte para ESP32.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

**Paso 1.** Descarga e instala el [IDE de Arduino](https://www.arduino.cc/en/software) y ejecuta la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Descargar IDE de Arduino</font></span></strong>
    </a>
</div><br />

**Paso 2.** Añade soporte para placas ESP32 al IDE de Arduino.

En el IDE de Arduino, ve a **Archivo > Preferencias** y añade la siguiente URL al campo "URLs adicionales del gestor de placas":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Paso 3.** Instalar el paquete de placa ESP32.

Navega a **Tools > Board > Boards Manager**, busca "esp32" e instala el paquete ESP32 de Espressif Systems.

**Paso 4.** Seleccionar la placa correcta.

Ve a **Tools > Board > ESP32 Arduino** y selecciona "XIAO_ESP32S3".

**Paso 5.** Conecta tu reTerminal E10xx a tu computadora usando un cable USB-C.

**Paso 6.** Selecciona el puerto correcto desde **Tools > Port**.


## Pantalla ePaper

El **reTerminal E1001 es una pantalla ePaper en blanco y negro de 7.5 pulgadas** y el **reTerminal E1002 es una pantalla ePaper a todo color de 7.3 pulgadas**. Ambos proporcionan visibilidad clara en varias condiciones de iluminación y consumo de energía ultra bajo.

En esta sección, exploraremos cómo configurar y controlar la pantalla ePaper usando Arduino.

Para controlar la pantalla ePaper, usaremos la biblioteca Seeed_GFX, que proporciona soporte integral para varios dispositivos de pantalla de Seeed Studio.

**Paso 1.** Descarga la biblioteca Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


**Paso 2.** Instala la biblioteca agregando el archivo ZIP en Arduino IDE. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::note
Si has instalado previamente la biblioteca TFT_eSPI, es posible que necesites removerla temporalmente o renombrarla desde tu carpeta de bibliotecas de Arduino para evitar conflictos, ya que Seeed_GFX es un fork de TFT_eSPI con características adicionales.
:::

### reTerminal E1001(ePaper en blanco y negro de 7.5 pulgadas)

Exploremos un ejemplo simple que demuestra cómo dibujar algo en la pantalla ePaper. [Este ejemplo](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Basic/HelloWorld/HelloWorld.ino) te enseña cómo dibujar una línea, mostrar palabras y mostrar formas.

**Paso 3.** Abre el sketch de ejemplo de la biblioteca Seeed_GFX: **File > Seeed_GFX > Examples > ePaper > Basic > HelloWrold**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/demo.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Crea un nuevo archivo llamado `driver.h` y pega el código de configuración en él. El código será generado en el siguiente paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Ve a la [Herramienta de Configuración Seeed GFX](https://seeed-studio.github.io/Seeed_GFX/), y selecciona qué tipo de dispositivo estás usando. Toma reTerminal E1001 como ejemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:800, height:'auto'}}/></div>

Copia el código generado y pégalo en el archivo `driver.h` que acabas de crear. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 （UC8179）
```

**Paso 6.** ¡Ahora puedes subir el ejemplo a tu dispositivo y ver la pantalla ePaper en acción!

### reTerminal E1002(ePaper a todo color de 7.3 pulgadas)

Exploremos un ejemplo simple que demuestra cómo dibujar algo en la pantalla ePaper. [Este ejemplo](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Colorful/HelloWorld/HelloWorld.ino) te enseña cómo dibujar una línea, mostrar palabras y mostrar formas.

**Paso 3.** Abre el sketch de ejemplo de la biblioteca Seeed_GFX: **File > Seeed_GFX > Examples > ePaper > Basic > HelloWrold**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/driver2.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Crea un nuevo archivo llamado `driver.h` y pega el código de configuración en él. El código se generará en el siguiente paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Ve a la [Herramienta de Configuración Seeed GFX](https://seeed-studio.github.io/Seeed_GFX/), y selecciona qué tipo de dispositivo estás usando. Toma reTerminal E1001 como ejemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:800, height:'auto'}}/></div>

Copia el código generado y pégalo en el archivo `driver.h` que acabas de crear. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 （UC8179）
```

**Paso 6.** ¡Ahora puedes cargar el ejemplo a tu dispositivo y ver la pantalla ePaper en acción!


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/screen2.jpeg" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>


