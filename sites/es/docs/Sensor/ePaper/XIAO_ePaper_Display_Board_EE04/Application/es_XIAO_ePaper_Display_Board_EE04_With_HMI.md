---
description: Habilita el diseño de interfaz visual para la Pantalla ePaper XIAO EE04 usando la plataforma SenseCraft HMI.
title: Placa de Pantalla ePaper XIAO EE04 con SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /es/EE04_with_hmi
sidebar_position: 2
last_update:
  date: 10/30/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Placa de Pantalla ePaper XIAO EE04 con SenseCraft HMI

## Introducción

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) es la poderosa plataforma de diseño de interfaces basada en la nube de Seeed Studio que te permite crear interfaces visuales profesionales para dispositivos con pantalla sin programar. Con un editor intuitivo de arrastrar y soltar, plantillas prediseñadas y capacidades de diseño impulsadas por IA, SenseCraft HMI facilita transformar tu hardware en hermosas pantallas de información, paneles de control, señalización digital y paneles de control.

Con el lanzamiento de la ***Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04***, esta capacidad se extiende aún más. Basándose en el poder de SenseCraft HMI, la Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 se integra perfectamente con la plataforma, permitiendo a los usuarios diseñar e implementar interfaces visuales personalizadas sin esfuerzo. Con esta integración, puedes crear elegantes paneles ePaper de bajo consumo, paneles de información o pantallas para hogar inteligente directamente desde el editor SenseCraft HMI — todo sin escribir una sola línea de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>


## Descripción del Hardware

Este tutorial utiliza la Placa de Pantalla ePaper XIAO (ESP32-S3) - EE04 emparejada con la pantalla E-Ink Spectra™ 6 de 7.3" para completar los ejercicios prácticos.

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04</th>
        <th>E-Ink spectra™ 6 de 7.3"</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Tipos de Pantalla ePaper Compatibles

Esta Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 ofrece dos opciones de conector — 24 pines y 50 pines — compatible con varios tamaños de pantalla. Elige la que coincida con tu pantalla de la lista a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

#### Conector de 24 Pines

- [ePaper de 1.54 pulgadas - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [ePaper de 2.13 pulgadas - Monocromático Flexible 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [ePaper de 2.13 pulgadas - Cuádruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [ePaper de 2.9 pulgadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [ePaper de 2.9 pulgadas - Cuádruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [ePaper de 4.2 pulgadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [ePaper de 4.26 pulgadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [ePaper de 5.83 pulgadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [ePaper de 7.5 pulgadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
Al usar la Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04, asegúrate de configurar el jumper según el tipo de pantalla ePaper:

- Para pantallas ePaper de 24 Pines → configura el jumper a 24 Pines

⚠️ Usar la configuración incorrecta del jumper puede causar que el ePaper falle al mostrar o muestre contenido anormal. Siempre verifica la posición del jumper antes de encender.

:::

#### Conector de 50 Pines

- [ePaper Spectra6 de 7.3 Pulgadas 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
Al usar la Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04, asegúrate de configurar el jumper según el tipo de pantalla ePaper:
- Para pantallas ePaper de 50 Pines → configura el jumper a 50 Pines

⚠️ Usar la configuración incorrecta del jumper puede causar que el ePaper falle al mostrar o muestre contenido anormal. Siempre verifica la posición del jumper antes de encender.

:::


## Primeros Pasos

Usa la Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 para crear rápidamente tu propio proyecto HMI interactivo.
Simplemente conecta la placa, abre [SenseCraft HMI](https://sensecraft.seeed.cc/hmi), y comienza a diseñar tu interfaz directamente en el navegador — no se requiere programación.

### Registro en SenseCraft HMI

Primero, haz clic en el botón en la esquina superior derecha para registrar una cuenta en la plataforma [SenseCraft HMI](https://sensecraft.seeed.cc/hmi).


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>


### Flasheo de Firmware de la Placa de Pantalla ePaper XIAO EE04

Después de completar el registro, haz clic en **"Tools"** en la barra de menú para entrar a la sección de flasheo de firmware.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Actualmente, la Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 es compatible con las siguientes pantallas ePaper:
- [ePaper de 1.54 pulgadas - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [ePaper de 2.13 pulgadas - Monocromático Flexible 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [ePaper de 2.13 pulgadas - Cuádruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [ePaper de 2.9 pulgadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [ePaper de 2.9 pulgadas - Cuádruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [ePaper de 4.2 pulgadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [ePaper de 4.26 pulgadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [ePaper de 5.83 pulgadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [ePaper de 7.5 pulgadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [ePaper Spectra6 de 7.3 pulgadas 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)
:::

En esta página, encontrarás firmware tutorial para dos modelos de pantalla ePaper: la **Pantalla a Todo Color de 7.3" (800×480)**

Si deseas usar una pantalla ePaper de un tamaño diferente, simplemente sigue los mismos pasos a continuación.

<Tabs>
<TabItem value="7.3-Inch ePaper Display" label="Pantalla a Todo Color de 7.3 800*480" default>

***Paso 1 .*** `Selecciona` la Pantalla a Todo Color de 7.3" 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

***Paso 2 .*** Selecciona el firmware más reciente `EE04_7_3_color_1.0.5`
:::tip
La plataforma SenseCraft HMI se actualiza regularmente, y se lanzan nuevas versiones de firmware de vez en cuando.

Asegúrate de seleccionar y usar la versión de firmware más reciente para garantizar la mejor compatibilidad y rendimiento.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

***Paso 3 .*** Haz clic en **Flash** para cargar el firmware de **Pantalla a Todo Color de 7.3" (800×480)** a la Placa de Pantalla ePaper XIAO (ESP32-S3) - EE04.

Después de hacer clic en Flash, la plataforma mostrará una ventana de selección de puerto. Elige el puerto correspondiente a tu Placa de Pantalla ePaper XIAO (ESP32-S3) - EE04 para establecer la conexión.

- Full Flash : Habilitar Full Flash borra toda la información almacenada en el dispositivo, incluyendo redes Wi-Fi y datos de paneles de usuario.

:::tip
Si no aparece ningún puerto, simplemente presiona el botón RESET en la placa para refrescar la conexión.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>
<br></br>

***Paso 4 .*** Verifica la Salida de la Pantalla

Después de que el firmware se haya flasheado exitosamente, la pantalla ePaper parpadeará brevemente y luego mostrará la siguiente pantalla.
Verás dos códigos QR, cada uno llevando a una página diferente cuando se escanee.

- Guía del Usuario : Navega a la sección de Uso Básico de HMI en la [wiki](https://wiki.seeedstudio.com/es/reterminal_e10xx_main_page/).

- Configuración Wi-Fi : Bajo Configuración de Red Local, configura tu dispositivo para conectarse con SenseCraft HMI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

La configuración aún no está completa. Por favor continúa siguiendo los pasos a continuación para **Configuración de Red** terminar la configuración.

</TabItem>

<!-- <TabItem value="7.5-Inch ePaper Display" label="7.5 Monochrome Display 800*480 "default>

***Paso 1 .*** `Selecciona` la pantalla monocromática de 7.5" 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi91.png" style={{width:1000, height:'auto'}}/></div>

***Paso 2 .*** Selecciona el firmware más reciente `EE04_7_5_mono_1.0.5`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi6.png" style={{width:1000, height:'auto'}}/></div>

***Paso 3 .*** Haz clic en **Flash** para subir el firmware de **pantalla monocromática de 7.5" 800*480** al XIAO ePaper Display Board (ESP32-S3) - EE04.

Después de hacer clic en Flash, la plataforma mostrará una ventana de selección de puerto. Elige el puerto correspondiente a tu XIAO ePaper Display Board (ESP32-S3) - EE04 para establecer la conexión.

- Full Flash : Habilitar Full Flash borra toda la información almacenada del dispositivo, incluyendo redes Wi-Fi y datos del panel de usuario.

:::tip
Si no aparece ningún puerto, simplemente presiona el botón RESET en la placa para refrescar la conexión.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi66.png" style={{width:1000, height:'auto'}}/></div>


***Paso 4 .*** Verifica la Salida de la Pantalla

Después de que el firmware se haya flasheado exitosamente, la pantalla ePaper parpadeará brevemente y luego mostrará la siguiente pantalla.
Verás dos códigos QR, cada uno llevando a una página diferente cuando se escanee.

- Guía del Usuario : Navega a la sección de Uso Básico de HMI en la wiki (wiki)(https://wiki.seeedstudio.com/es/reterminal_e10xx_main_page/)

- Configuración Wi-Fi : Bajo Configuración de Red Local, configura tu dispositivo para conectarse con SenseCraft HMI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

La configuración aún no está completa. Por favor continúa siguiendo los pasos a continuación para **Configuración de Red** terminar la configuración.


</TabItem> -->

</Tabs>

### Configuración de Red

***Paso 1 .*** Conéctate al punto de acceso Wi-Fi del Kit DIY ePaper desde tu smartphone o computadora. El nombre del AP aparecerá en la pantalla (no se requiere contraseña). Las credenciales de red son XIAO ePaper Display Board(ESP32-S3) - EE04 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

***Paso 2 .*** Una vez conectado, escanea el código QR sobre la pantalla de tinta, tu teléfono debería redirigirse automáticamente a la página de configuración Wi-Fi. Si no, abre un navegador y navega a 192.168.4.1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

***Paso 3 .*** Selecciona tu red Wi-Fi local e ingresa la contraseña, luego haz clic en `Connect`.

:::tip
El XIAO ePaper Display Board(ESP32-S3) - EE04 solo soporta redes Wi-Fi de 2.4GHz, no 5GHz u otras bandas.
:::

***Paso 4 .*** Después de que se complete la conexión, la pantalla mostrará el código de emparejamiento correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>


### Agregar a la Plataforma SenseCraft

***Paso 1 .*** Navega a la sección Workspace y haz clic en `Add Device`.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

***Paso 2 .*** Nombra tu dispositivo e ingresa el código de emparejamiento mostrado en la pantalla de tu dispositivo y haz clic en `Create`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

***Paso 3 .*** Después de completar el emparejamiento, puedes ver el nombre de tu dispositivo bajo Workspace.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

Ahora que hemos conectado exitosamente el XIAO ePaper Display Board (ESP32-S3) - EE04 a nuestro dispositivo, podemos comenzar a explorar las características básicas en SenseCraft HMI.

## Creando Dashboard

El XIAO ePaper Display Board(ESP32-S3) - EE04 se integra perfectamente con la plataforma SenseCraft HMI, que proporciona herramientas poderosas para crear y personalizar contenido para tu dispositivo. En lugar de detallar operaciones paso a paso aquí, exploremos las características clave de la plataforma para ayudarte a entender qué es posible.

:::note
Esta demostración usa una pantalla de 7.3 pulgadas como ejemplo. Si reemplazas con un tamaño diferente, nota lo siguiente:

- Confirma la orientación del cable flexible de la pantalla (frente y atrás).
- Verifica que el número de pines coincida.
- Usa la tapa de cubierta del tamaño correspondiente.
- Evita doblar o plegar excesivamente al instalar el cable flexible.
:::

### Características de SenseCraft HMI

A continuación, exploraremos las cinco características básicas de SenseCraft HMI con ejemplos de uso simples. Para información más profunda, haz clic en [Resumen de SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/) a continuación para explicaciones detalladas de características adicionales.

#### Generador AI

¡Deja que la inteligencia artificial diseñe tu dashboard! Simplemente describe qué información quieres mostrar, y el Generador AI creará automáticamente un diseño atractivo y funcional. Esto es perfecto para generar rápidamente pantallas de clima, calendarios, listas de tareas, o paneles informativos sin trabajo de diseño manual.

Aprende más sobre [Generador AI](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>



<br></br>

**Resultado de Pantalla ePaper**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>

#### Galería

Transforma tu XIAO ePaper Display Board(ESP32-S3) - EE04 en un marco de fotos digital con la característica Galería. Sube tus imágenes favoritas, y la plataforma las optimizará para la pantalla ePaper. Crea presentaciones con tiempos de transición personalizados.

Aprende más sobre [Galería](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>


<br></br>


**Resultado de Pantalla ePaper**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>

#### Canvas 

Diseña tu dashboard desde cero con Canvas, una interfaz de arrastrar y soltar que ofrece varios elementos:

- Bloques de texto con fuentes y tamaños personalizables
- Marcadores de posición para imágenes
- Widgets para hora, fecha y clima
- Herramientas de visualización de datos
- Formas y divisores para organización del diseño

Aprende más sobre [Canvas](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>


<br></br>

**Resultado de Pantalla ePaper**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>

#### Integración de Feed RSS


Mantente actualizado con tus fuentes de noticias favoritas, o sitios web agregando feeds RSS a tu dashboard. La característica RSS te permite mostrar titulares, resúmenes, o artículos completos de múltiples fuentes.

Necesitas copiar el hipervínculo aquí. A continuación hay dos opciones recomendadas:

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

Aprende más sobre [Integración de Feed RSS](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>


<br></br>

**Resultado de Pantalla ePaper**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>

#### Visualización de Contenido Web

¡Deja que la inteligencia artificial diseñe tu panel de control! Simplemente describe qué información quieres mostrar, y el Generador de IA creará automáticamente un diseño atractivo y funcional. Esto es perfecto para generar rápidamente pantallas meteorológicas, calendarios, listas de tareas o paneles informativos sin trabajo de diseño manual.

Aprende más sobre [Visualización de Contenido Web](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

<br></br>

**Resultado de la Pantalla ePaper**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>


## Referencia y Recursos

***SenseCraf HMI***

- [Introducción a SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/): Obtén una comprensión más profunda de cómo usar SenseCraft HMI para ayudarte a maximizar sus capacidades y mejorar tus proyectos.

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
