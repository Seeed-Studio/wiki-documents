---
description: Recetario Arduino de extremo a extremo para el Panel ePaper XIAO de 7,5" - configuración del IDE de Arduino específica para el XIAO ESP32-C3, configuración de Seeed_GFX y recorrido de Hello World.
title: Recetario de Arduino
keywords:
  - pantalla ePaper
  - arduino
  - XIAO ESP32-C3
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /xiao_075inch_epaper_panel_arduino
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Allen
createdAt: '2025-03-27'
updatedAt: '2026-04-29'
url: https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_arduino/
---

# Recetario de Arduino: Panel ePaper XIAO de 7,5"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

:::tip Lee primero la guía principal de Arduino
Esta página es el **recetario específico para el Panel XIAO de 7,5"**. La plantilla compartida — configuración del IDE de Arduino, paquete de placas ESP32, instalación de `Seeed_GFX`, generación de `driver.h` desde la Configuration Tool — se encuentra en **[Work with Arduino](/es/epaper_work_with_arduino)**. Échale un vistazo primero si eres nuevo en Arduino en ePaper de Seeed; esta página se centra en lo que es diferente para el panel basado en XIAO ESP32-C3.
:::

## Descripción general

El Panel ePaper XIAO de 7,5" se puede programar usando el IDE de Arduino, lo que lo hace accesible para makers y desarrolladores familiarizados con el ecosistema Arduino. Esta guía te llevará paso a paso por la configuración del entorno de desarrollo de Arduino y te ayudará a comenzar con ejemplos básicos.

El Panel ePaper incluye:

- Pantalla ePaper monocroma de 7,5" con resolución de 800x480
- Microcontrolador XIAO ESP32-C3 para conectividad inalámbrica
- Batería integrada de 2000 mAh para uso portátil
- Interfaz USB Type-C para programación y alimentación
- Diseño compacto con soporte integrado

Mediante programación con Arduino, puedes:

- Mostrar texto y gráficos
- Crear interfaces de usuario personalizadas
- Mostrar datos en tiempo real y lecturas de sensores
- Crear aplicaciones interactivas
- Implementar aplicaciones de bajo consumo aprovechando la retención sin consumo de energía del ePaper

Esta guía cubre el proceso de configuración inicial y proporciona código de ejemplo para ayudarte a empezar a desarrollar tus propias aplicaciones Arduino para el Panel ePaper.

## Primeros pasos

### Paso 1. Descargar el IDE de Arduino

Primero, si aún no tienes el IDE de Arduino, ve a [Arduino IDE](https://www.arduino.cc/en/software) y descarga la última versión.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

### Paso 2. Instalar el soporte para la placa ESP32

Ve a **File** -> **Preferences** y añade la siguiente URL a **Additional Boards Manager URLs**, [haz clic aquí para ver los pasos detallados.](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### Paso 3. Instalar la biblioteca Seeed GFX

:::tip
Esta biblioteca tiene la misma función que la biblioteca TFT y no es compatible con ella. Si has instalado la biblioteca TFT u otras bibliotecas de pantalla similares, desinstálalas primero.
:::

Descarga e instala la biblioteca Seeed GFX desde GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

Desplázate hacia abajo y abre este enlace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Selecciona el tipo de tu dispositivo y generará algo de código. Copia ese código y lo usaremos más tarde.

:::tip
Si haces una elección incorrecta, la pantalla no mostrará nada.

Así que asegúrate del tipo de tus dispositivos o componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix6.jpg" style={{width:800, height:'auto'}}/></div>

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Hay 4 ejemplos básicos, abre un ejemplo básico que te guste:

1. Bitmap: Muestra una imagen de mapa de bits.
2. Clock: Muestra un reloj.
3. Clock_digital: Muestra un reloj digital.
4. Shape: Muestra palabras y formas de diferentes tamaños de forma aleatoria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### Paso 4. Cargar el código

Crea un **nuevo archivo "driver.h"** y pega ese código en él. El código debería ser como:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DRIVER_BOARD
```

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32C3** y **Tools** -> **Port** -> **Selecciona el puerto al que está conectada tu placa**. Luego haz clic en **Upload** para cargar el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix7.jpg" style={{width:800, height:'auto'}}/></div>

¡Ahora verás la respuesta en tu pantalla ePaper! A continuación se muestran los resultados de los ejemplos Bitmap y Clock.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## Recursos

- **[STP]**: [Modelo 3D de la carcasa](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF del esquema de la placa controladora de ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
