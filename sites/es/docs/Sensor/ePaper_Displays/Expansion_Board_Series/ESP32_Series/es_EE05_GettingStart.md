---
description: Introducción a XIAO ePaper Display Board(ESP32-S3) - EE05
sku: 100057220
title: Introducción a XIAO ePaper Display Board(ESP32-S3) - EE05
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.webp
slug: /epaper_ee05
last_update:
  date: 04/27/2026
  author: dimo
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/es/epaper_ee05/
updatedAt: '2026-04-27'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introducción a XIAO ePaper Display EE05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE05-p-6755.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Impulsada por el **XIAO ESP32-S3 Plus**, la placa de pantalla EE05 es compatible con una amplia gama de pantallas ePaper de 24 pines y permite el diseño e implementación de interfaces de usuario sin código con SenseCraft HMI. Con IO de extensión y un interruptor de alimentación para el conector de batería, es ideal para aplicaciones de pantalla inteligente de bajo consumo.

### Características

- **Impulsada por XIAO ESP32-S3 Plus:** Funciona inmediatamente cuando se conecta a una pantalla ePaper compatible.
- **Compatibilidad versátil de pantallas:** Compatible con una amplia gama de pantallas ePaper de 24 pines para distintos requisitos de proyecto.
- **Puerto de IO de extensión:** Permite la conexión de sensores adicionales, como sensores de temperatura y humedad, para una funcionalidad mejorada.
- **Conector BAT con interruptor:** Proporciona una conexión de batería sencilla e integra un interruptor, lo que permite una gestión de energía eficiente y ahorro energético.
- **Diseño e implementación de UI sin código con SenseCraft HMI:** Diseña e implementa paneles personalizados sin esfuerzo con SenseCraft HMI, nuestra nueva plataforma sin código impulsada por IA. Crea tu interfaz mediante simples elementos de arrastrar y soltar, elige entre nuestras ricas plantillas o deja que la IA te ayude. Conecta datos en tiempo real desde APIs web y luego implementa tu panel final en la pantalla ePaper con solo unos clics. Desde el diseño hasta la configuración de datos y la implementación, todo sucede de forma fluida en una única plataforma.

### Especificaciones

| Parámetro | Descripción |
|---|---|
| **Procesador** | XIAO ESP32-S3 Plus |
| **Conector ePaper** | SPI FPC 24 pines 0.5mm |
| **Conector de batería** | JST 2.0mm |
| **Interruptor** | Interruptor deslizante de alimentación por hardware |
| **Fuente de alimentación** | Batería de litio 3.7V / USB Type-C |
| Botón | 1x botón de reinicio (montado lateralmente) <br/> 3x botón de usuario (montado lateralmente) |

## Descripción general del hardware

### Pantallas ePaper compatibles

La EE05 es compatible con una variedad de pantallas ePaper SPI de 24 pines, incluidas, entre otras:

- [Pantalla E-paper de 1.54 pulgadas - Matriz de puntos 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Pantalla E-Paper de 2.13 pulgadas - Flexible monocroma 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Pantalla E-Paper de 2.13 pulgadas - Cuádruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Pantalla E-paper de 2.9 pulgadas - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Pantalla E-Paper de 4.2 pulgadas - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Pantalla E-Paper de 4.26 pulgadas - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Pantalla E-paper de 5.83 pulgadas - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Pantalla ePaper monocroma de 7.5 pulgadas con 800x480 píxeles](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)



## Descripción general del software

### Instalar la biblioteca Seeed GFX

:::tip
Esta biblioteca tiene la misma función que la biblioteca TFT y no es compatible con ella. Si has instalado la biblioteca TFT u otras bibliotecas de visualización similares, desinstálalas primero.
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

Selecciona tu tipo de dispositivo y se generará algo de código. Copia ese código y lo usaremos más tarde.

:::tip
Si haces una elección incorrecta, la pantalla no mostrará nada.

Así que asegúrate de seleccionar el tipo correcto de dispositivo o componente.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/1.jpg" style={{width:800, height:'auto'}}/></div>

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## Primeros pasos

Aquí usamos una pantalla monocroma de 7.5 pulgadas como ejemplo. Los pasos son idénticos para otras pantallas compatibles; solo necesitas seleccionar el identificador de tamaño de pantalla adecuado en el controlador.

### Configurar y grabar el programa
Selecciona el ejemplo que se muestra en la figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

Crea un nuevo archivo "driver.h" y pega ese código en él. El código debería ser como:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE05
```

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32S3** y **Tools** -> **Port** -> **Select the port your board is connected to**.


Ten en cuenta que PSRAM debe estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

Luego haz clic en **Upload** para subir el código.
¡Ahora verás la respuesta en tu pantalla ePaper! A continuación se muestran los resultados de los ejemplos de mapa de bits.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_3.jpg" style={{width:500, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Esquemático de XIAO ePaper Display Board Ex05](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_EE05_V1.11_SCH&PCB_260420.zip)

## Solución de problemas

**P1: La pantalla no muestra nada después de subir el código.**
- **Comprueba el cable FPC**: Asegúrate de que el cable FPC de la pantalla ePaper esté insertado en la orientación correcta y bien bloqueado en el conector.
- **Verifica la configuración del controlador**: Vuelve a comprobar `driver.h` para asegurarte de que el `BOARD_SCREEN_COMBO` correcto esté seleccionado para tu tamaño de pantalla específico.

**P2: Los colores están invertidos o la pantalla muestra patrones anormales.**
- **Selecciona el modelo exacto**: Los diferentes tamaños de pantalla o revisiones de IC requieren configuraciones de controlador específicas. Asegúrate de que el número de combo coincida perfectamente con el modelo de tu pantalla.
- **Comprueba la fuente de alimentación**: Para pantallas más grandes (como la de 7.5 pulgadas), asegúrate de que tu fuente de alimentación pueda proporcionar la corriente adecuada durante la actualización de la pantalla.

**P3: La placa no se enciende cuando se conecta a una batería.**
- **Interruptor de hardware**: Verifica que el interruptor deslizante de hardware de la placa esté en la posición ON.
- **Conexión de la batería**: Comprueba la polaridad del conector JST de 2.0mm para asegurarte de que coincida con el diseño de la placa.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
