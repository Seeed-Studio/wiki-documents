---
description: Habilita el diseño de interfaz visual para la Pantalla ePaper XIAO EE04 usando la plataforma SenseCraft HMI.
title: Placa de Pantalla ePaper XIAO EE04 con SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /es/EE04_with_hmi
sidebar_position: 2
last_update:
  date: 10/30/2025
  author: Jason
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Descripción General de SenseCraft HMI

## Introducción

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) es la poderosa plataforma de diseño de interfaces basada en la nube de Seeed Studio que te permite crear interfaces visuales profesionales para dispositivos con pantalla sin necesidad de programar. Con un editor intuitivo de arrastrar y soltar, plantillas prediseñadas y capacidades de diseño impulsadas por IA, SenseCraft HMI facilita transformar tu hardware en hermosas pantallas de información, paneles de control, señalización digital y paneles de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi34.png" style={{width:1000, height:'auto'}}/></div>


## Descripción General del Hardware

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Pantalla ePaper XIAO EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### ePaper Soportado

#### Conector de 24 Pines

- [ePaper de 1.54 Pulgadas - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [ePaper de 2.13 Pulgadas - Monocromático Flexible 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [ePaper de 2.13 Pulgadas - Cuádruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [ePaper de 2.9 Pulgadas - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [ePaper de 2.9 Pulgadas - Color cuádruple 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [ePaper de 4.2 Pulgadas - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [ePaper de 4.26 Pulgadas - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [ePaper de 5.83 Pulgadas - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [ePaper de 7.5 Pulgadas - Monocolor 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [ePaper de 7.5 Pulgadas - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
Al usar la Placa de Pantalla ePaper XIAO, asegúrate de configurar el jumper según el tipo de pantalla ePaper:

- Para pantallas ePaper de 24 Pines → configura el jumper a 24 Pines

⚠️ Usar la configuración incorrecta del jumper puede causar que el ePaper falle al mostrar o muestre contenido anormal. Siempre verifica la posición del jumper antes de encender.

:::

#### Conector de 50 Pines

- [ePaper Spectra6 de 7.3 Pulgadas](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
Al usar la Placa de Pantalla ePaper XIAO, asegúrate de configurar el jumper según el tipo de pantalla ePaper:
- Para pantallas ePaper de 50 Pines → configura el jumper a 50 Pines

⚠️ Usar la configuración incorrecta del jumper puede causar que el ePaper falle al mostrar o muestre contenido anormal. Siempre verifica la posición del jumper antes de encender.

:::


## Primeros Pasos

:::tip
Actualmente, la Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 solo ofrece firmware HMI para los modelos de 7.5 pulgadas y 7.3 pulgadas. Se proporcionarán actualizaciones en el futuro.
:::

### Visita a SenseCraft HMI

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) en tu navegador web y crea una cuenta o `Inicia sesión`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi20.png" style={{width:1000, height:'auto'}}/></div>


### Flasheador de Dispositivos

Haz clic en `Tools` en la barra de menú superior para acceder a nuestra página de configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi33.png" style={{width:1000, height:'auto'}}/></div>

<Tabs>
<TabItem value="7.3-Inch ePaper Display" label="Pantalla a Todo Color de 7.3 800*480" default>

***Paso 1 .*** `Selecciona` la Pantalla a Todo Color de 7.3 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi7.png" style={{width:1000, height:'auto'}}/></div>

***Paso 2 .*** Selecciona el `firmware` más reciente y haz clic en `Flash`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

***Paso 3 .*** `Escanea` el código QR en el ePaper para la configuración de red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi52.png" style={{width:1000, height:'auto'}}/></div>
<br></br>

:::note
- Actualizar el firmware asegura un rendimiento óptimo y acceso a las últimas características. Se recomienda realizar esta actualización antes de usar tu dispositivo por primera vez.

- No es posible flashear el firmware correctamente cuando el dispositivo está en estado de apagado o suspensión. Si seleccionas el puerto correcto para tu dispositivo pero nunca ves el progreso del flasheo del firmware, entonces puede que necesites despertar el dispositivo presionando el botón verde en la parte superior de la unidad e intentar de nuevo.

- Flash Completo: Habilitar Flash Completo borra toda la información almacenada del dispositivo, incluyendo redes WiFi y datos de paneles de usuario.
:::
</TabItem>

<TabItem value="7.5-Inch ePaper Display" label="Pantalla Monocromática de 7.5 800*480" default>

***Paso 1 .*** `Selecciona` la Pantalla Monocromática de 7.5 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi8.png" style={{width:1000, height:'auto'}}/></div>

***Paso 2 .*** Selecciona el `firmware` más reciente y haz clic en `Flash`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi15.png" style={{width:1000, height:'auto'}}/></div>

:::note

- Actualizar el firmware asegura un rendimiento óptimo y acceso a las últimas características. Se recomienda realizar esta actualización antes de usar tu dispositivo por primera vez.

- No es posible flashear el firmware correctamente cuando el dispositivo está en estado de apagado o suspensión. Si seleccionas el puerto correcto para tu dispositivo pero nunca ves el progreso del flasheo del firmware, entonces puede que necesites despertar el dispositivo presionando el botón verde en la parte superior de la unidad e intentar de nuevo.
:::

</TabItem>

</Tabs>

### Configuración de Red

***Paso 1 .*** Conéctate al punto de acceso Wi-Fi del dispositivo desde tu smartphone o computadora. El nombre del AP aparecerá en la pantalla (no se requiere contraseña). Las credenciales de red son Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

***Paso 2 .*** Una vez conectado, tu teléfono debería redirigirse automáticamente a la página de configuración Wi-Fi. Si no es así, abre un navegador y navega a 192.168.4.1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

***Paso 3 .*** Selecciona tu red Wi-Fi local e ingresa la contraseña, luego haz clic en `Connect`.

:::tip
La Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 solo soporta redes WiFi de 2.4GHz, no 5GHz u otras bandas.
:::

***Paso 4 .*** Al conectarse exitosamente, el dispositivo emitirá un pitido de confirmación y mostrará una pantalla con código de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>


### Conectando a la Plataforma SenseCraft

***Paso 1 .*** Navega a la sección Workspace y haz clic en `Add Device`.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

***Paso 2 .*** Nombra tu dispositivo e ingresa el código de emparejamiento mostrado en la pantalla de tu dispositivo y haz clic en `Create`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

***Paso 3 .*** Después de que el emparejamiento esté completo, el dispositivo mostrará tu dispositivo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi15.png" style={{width:700, height:'auto'}}/></div>


## Creando Panel de Control

La Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 se integra perfectamente con la plataforma SenseCraft HMI, que proporciona herramientas poderosas para crear y personalizar contenido para tu dispositivo. En lugar de detallar operaciones paso a paso aquí, exploremos las características clave de la plataforma para ayudarte a entender qué es posible.

:::note
Esta demostración usa una pantalla de 7.3 pulgadas como ejemplo. Si reemplazas con un tamaño diferente, nota lo siguiente:

- Confirma la orientación del cable flexible de la pantalla (frente y atrás).
- Verifica que el número de pines de cabecera coincida.
- Usa la tapa de cubierta del tamaño correspondiente.
- Evita doblar o plegar excesivamente al instalar el cable flexible.
:::

### Características de SenseCraft HMI SenseCraft HMI

#### Generador AI

¡Deja que la inteligencia artificial diseñe tu panel de control! Simplemente describe qué información quieres mostrar, y el Generador AI creará automáticamente un diseño atractivo y funcional. Esto es perfecto para generar rápidamente pantallas meteorológicas, calendarios, listas de tareas o paneles informativos sin trabajo de diseño manual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>

Aprende más sobre la función Generador AI. [más](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<br></br>

**Vista Previa del Panel de Control**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>

#### Galería

Transforma tu Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04 en un marco de fotos digital con la función Galería. Sube tus imágenes favoritas, y la plataforma las optimizará para la pantalla ePaper. Crea presentaciones de diapositivas con tiempos de transición personalizados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>

Aprende más sobre la función Galería. [más](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<br></br>


**Vista Previa del Panel de Control**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>

#### Canvas 

Diseña tu panel de control desde cero con Canvas, una interfaz de arrastrar y soltar que ofrece varios elementos:

- Bloques de texto con fuentes y tamaños personalizables
- Marcadores de posición para imágenes
- Widgets para hora, fecha y clima
- Herramientas de visualización de datos
- Formas y divisores para organización del diseño

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>

Aprende más sobre la función Canvas. [más](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)

<br></br>

**Vista Previa del Panel de Control**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>

#### Integración de Feed RSS


Mantente actualizado con tus fuentes de noticias, blogs o sitios web favoritos agregando feeds RSS a tu panel de control. La función RSS te permite mostrar titulares, resúmenes o artículos completos de múltiples fuentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>

Aprende más sobre la Integración de Feed RSS. [más](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<br></br>

**Vista Previa del Panel de Control**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="Pantalla ePaper de 7.3 Pulgadas" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7.3 Pulgadas</em></p>
</div>

#### Visualización de Contenido Web

¡Deja que la inteligencia artificial diseñe tu panel de control! Simplemente describe qué información quieres mostrar, y el Generador AI creará automáticamente un diseño atractivo y funcional. Esto es perfecto para generar rápidamente pantallas meteorológicas, calendarios, listas de tareas o paneles informativos sin trabajo de diseño manual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

Aprende más sobre la Visualización de Contenido Web. [más](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<br></br>

**Vista Previa del Panel de Control**

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
