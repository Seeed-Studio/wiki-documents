---
description: La Pantalla E-Ink de 7.5 pulgadas alimentada por XIAO ESP32C3 es una solución compacta y eficiente en energía para mostrar datos a través de Arduino.
title: Funciona con Arduino
keywords:
- ePaper display
- arduino
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /es/xiao_075inch_epaper_panel_arduino
sidebar_position: 3
last_update:
  date: 03/26/2025
  author: Allen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>


## Descripción General

El Panel ePaper XIAO de 7.5" puede programarse usando el IDE de Arduino, haciéndolo accesible para makers y desarrolladores familiarizados con el ecosistema Arduino. Esta guía te llevará a través de la configuración del entorno de desarrollo Arduino y comenzar con ejemplos básicos.

El Panel ePaper presenta:

- Pantalla ePaper monocromática de 7.5" con resolución 800x480
- Microcontrolador XIAO ESP32-C3 para conectividad inalámbrica
- Batería integrada de 2000mAh para uso portátil
- Interfaz USB Type-C para programación y alimentación
- Diseño compacto con soporte integrado

A través de la programación Arduino, puedes:

- Mostrar texto y gráficos
- Crear interfaces de usuario personalizadas
- Mostrar datos en tiempo real y lecturas de sensores
- Construir aplicaciones interactivas
- Implementar aplicaciones de bajo consumo aprovechando la retención de energía cero del ePaper

Esta guía cubre el proceso de configuración inicial y proporciona código de ejemplo para ayudarte a comenzar a desarrollar tus propias aplicaciones Arduino para el Panel ePaper.


## Comenzando

### Paso 1. Descargar Arduino IDE

Primero, si aún no tienes Arduino IDE, por favor ve a [Arduino IDE](https://www.arduino.cc/en/software) y descarga la versión más reciente.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

### Paso 2. Instalar Soporte de Placa ESP32

Ve a **Archivo** -> **Preferencias** y añade la siguiente URL a **URLs Adicionales del Gestor de Placas**, [haz clic aquí para ver los pasos detallados.](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### Paso 3. Instalar la Biblioteca Seeed GFX

:::tip
Esta biblioteca tiene la misma función que la biblioteca TFT y no es compatible con ella. Si has instalado la biblioteca TFT u otras bibliotecas de pantalla similares, por favor desinstálala primero.
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

Selecciona tu tipo de dispositivo y generará algo de código. Copia ese código y lo usaremos más tarde.

:::tip
Si haces la elección incorrecta, la pantalla no mostrará nada.

Así que por favor asegúrate del tipo de tus dispositivos o componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix6.jpg" style={{width:800, height:'auto'}}/></div> 

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Hay 4 ejemplos básicos, abre un ejemplo básico que te guste:
1. Bitmap: Mostrar una imagen bitmap.
2. Clock: Mostrar un reloj.
3. Clock_digital: Mostrar un reloj digital.
4. Shape: Mostrar diferentes tamaños de palabras y formas aleatoriamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### Paso 4. Subir el Código

Crea un **nuevo archivo "driver.h"** y pega ese código en él. El código debería ser como:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DRIVER_BOARD
```

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32C3** y **Tools** -> **Port** -> **Selecciona el puerto al que está conectada tu placa**. Luego haz clic en **Upload** para subir el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix7.jpg" style={{width:800, height:'auto'}}/></div>

¡Ahora verás la respuesta en tu pantalla de papel electrónico! A continuación se muestran los resultados de los ejemplos Bitmap y Clock.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png" style={{width:800, height:'auto'}}/></div>

## Recursos

- **[STP]**: [Carcasa modelo 3D](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF esquemático de la placa controladora de papel electrónico](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)


## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
