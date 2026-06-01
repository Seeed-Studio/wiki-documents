---
description: Utiliza SenseCraft HMI, la plataforma de diseño de interfaces visuales sin código de Seeed, para controlar cualquier producto ePaper compatible de Seeed, desde la reTerminal E Serie hasta cada placa controladora ePaper XIAO.
title: Trabajar con SenseCraft HMI
keywords:
  - Pantalla ePaper
  - SenseCraft HMI
  - reTerminal
  - EE02
  - EE03
  - EE04
  - EE05
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con SenseCraft HMI

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) es la potente plataforma en la nube de diseño de interfaces de Seeed Studio que te permite crear interfaces visuales profesionales para dispositivos con pantalla **sin escribir código**. Con un editor intuitivo de arrastrar y soltar, plantillas predefinidas y capacidades de diseño impulsadas por IA, SenseCraft HMI convierte tu hardware en una atractiva pantalla de información, panel de control, señalización digital o consola de mando.

Esta guía es la única fuente de referencia para usar SenseCraft HMI con **cualquier producto ePaper compatible de Seeed**. Elige tu hardware una sola vez en el paso del firmware; el resto del flujo de trabajo es idéntico para todos los dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

## Hardware compatible

SenseCraft HMI funciona directamente con los siguientes productos ePaper de Seeed. La reTerminal E Serie se envía con el firmware HMI preinstalado, mientras que la familia XIAO ePaper Display Board (EE02–EE05) se flashea desde la página SenseCraft HMI Tools en tu navegador.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Línea de producto</th>
      <th>Experiencia fuera de la caja</th>
      <th>Pantallas objetivo</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>Firmware HMI preinstalado: solo enciende y empareja</td>
      <td>Paneles integrados de 7.5" / 7.3" / 10.3" / 13.3"</td>
    </tr>
    <tr>
      <td><strong>EE02</strong></td>
      <td>Flashear desde la página SenseCraft HMI Tools</td>
      <td>13.3" Spectra 6 (color)</td>
    </tr>
    <tr>
      <td><strong>EE03</strong></td>
      <td>Flashear desde la página SenseCraft HMI Tools</td>
      <td>10.3" monocromo (actualización de alta velocidad)</td>
    </tr>
    <tr>
      <td><strong>EE04</strong></td>
      <td>Flashear desde la página SenseCraft HMI Tools</td>
      <td>Universal de 24 pines / 50 pines — muchos tamaños</td>
    </tr>
    <tr>
      <td><strong>EE05</strong></td>
      <td>Flashear desde la página SenseCraft HMI Tools</td>
      <td>Universal de 24 pines / 50 pines (más reciente)</td>
    </tr>
  </table>
</div>

Este artículo utiliza la **XIAO ePaper Display Board (ESP32-S3) – EE04** emparejada con la pantalla **7.3" Spectra 6** como ejemplo principal de hardware porque cubre el conjunto más amplio de funciones. Todos los pasos se aplican a otros productos, con pequeñas diferencias indicadas en sus respectivas pestañas.

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.3" Spectra 6 E-Ink</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### EE04 / EE05 — lista de pantallas compatibles

La XIAO ePaper Display Board EE04 / EE05 ofrece dos opciones de conector — **24 pines** y **50 pines** — que admiten una amplia gama de tamaños de pantalla. Elige la que coincida con tu pantalla de la lista siguiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

<Tabs groupId="hmi-connector">
<TabItem value="24pin" label="Conector de 24 pines" default>

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip Ajusta el jumper a **24 Pin** antes de encender
Usar el jumper incorrecto puede hacer que la pantalla ePaper no muestre nada o muestre contenido anómalo. Comprueba siempre la posición del jumper antes de encender.
:::

</TabItem>
<TabItem value="50pin" label="Conector de 50 pines">

- [7.3-Inch Spectra 6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>

:::tip Ajusta el jumper a **50 Pin** antes de encender
Usar el jumper incorrecto puede hacer que la pantalla ePaper no muestre nada o muestre contenido anómalo. Comprueba siempre la posición del jumper antes de encender.
:::

</TabItem>
</Tabs>

## Paso 1: Registrar una cuenta de SenseCraft HMI

Haz clic en el botón de la esquina superior derecha de la página de [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) para crear una cuenta.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>

## Paso 2: Obtener el firmware HMI en tu dispositivo

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E Serie" default>

La reTerminal **E1001 / E1002 / E1003 / E1004** se envía con el firmware SenseCraft HMI preinstalado. Simplemente enciende el dispositivo y salta al Paso 3 (Configuración de red).

Si anteriormente flasheaste un firmware diferente (por ejemplo TRMNL), puedes volver a HMI desde la página SenseCraft HMI Tools:

1. Abre la [página de dispositivo de SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device) y selecciona tu modelo de reTerminal.
2. Elige la versión de firmware **HMI** más reciente (usa **Full Flash** si quieres un dispositivo limpio).
3. Conecta el dispositivo a tu ordenador mediante USB-C y sigue las indicaciones en pantalla sobre el puerto serie.

</TabItem>
<TabItem value="ee04" label="EE02 / EE03 / EE04 / EE05">

Después del registro, haz clic en **Tools** en la barra de menú superior para entrar en la sección de flasheo de firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
La XIAO ePaper Display Board EE04 / EE05 es compatible de forma nativa con las siguientes pantallas ePaper:

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.3-inch Spectra 6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

EE02 se envía dedicada a 13.3" Spectra 6; EE03 se envía dedicada a 10.3" monocromo con actualización de alta velocidad.
:::

El flujo de flasheo es idéntico para cada tamaño de pantalla: elige la versión de firmware correcta para tu panel. El siguiente ejemplo utiliza la **pantalla a todo color de 7.3" (800×480)**.

**Paso 1.** Selecciona la entrada **7.3" Full-Color Display 800×480** en la página Tools.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2.** Selecciona el firmware más reciente (por ejemplo, `EE04_7_3_color_1.0.5`).

:::tip
La plataforma SenseCraft HMI se actualiza con regularidad. Elige siempre la versión de firmware más reciente para obtener la mejor compatibilidad y rendimiento.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Haz clic en **Flash** para cargar el firmware.

Después de hacer clic en Flash, la plataforma mostrará una ventana para seleccionar el puerto. Elige el puerto correspondiente a tu dispositivo.

- **Full Flash**: borra toda la información almacenada, incluidas las redes Wi‑Fi y los datos de panel de usuario.

:::tip
Si no aparece ningún puerto, simplemente pulsa el botón **RESET** en la placa para actualizar la conexión.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4.** Comprueba la salida de la pantalla.

Después de flashear, la pantalla de ePaper parpadeará brevemente y mostrará la pantalla del código QR que se ve abajo. Los dos códigos QR llevan respectivamente a la Guía de Usuario y a las páginas de Configuración de Wi‑Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

La configuración aún no está completa. Continúa con el **Paso 3: Configuración de red** a continuación.

</TabItem>
</Tabs>

## Paso 3: Configuración de red

El flujo de emparejamiento Wi‑Fi es el mismo para todos los productos ePaper de Seeed que ejecutan firmware HMI.

**Paso 1.** Conecta tu teléfono u ordenador al punto de acceso Wi‑Fi del dispositivo. El nombre del AP se muestra en la pantalla del dispositivo (no se requiere contraseña).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

**Paso 2.** Una vez conectado, escanea el código QR en la pantalla de ePaper; tu teléfono debería redirigirte automáticamente a la página de configuración Wi‑Fi. Si no es así, abre un navegador y visita `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**Paso 3.** Selecciona tu red Wi‑Fi local e introduce la contraseña, luego haz clic en **Connect**.

:::tip
La familia XIAO ESP32-S3 solo es compatible con redes Wi‑Fi de **2,4 GHz**. No se admiten redes de 5 GHz.
:::

**Paso 4.** Una vez completada la conexión, la pantalla mostrará un código de emparejamiento:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## Paso 4: Añadir el dispositivo a SenseCraft HMI

**Paso 1.** Ve a la sección **Workspace** y haz clic en **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Ponle un nombre a tu dispositivo, introduce el código de emparejamiento que aparece en la pantalla del dispositivo y haz clic en **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Después del emparejamiento, tu dispositivo aparecerá en el Workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

Ahora puedes empezar a diseñar paneles en SenseCraft HMI.

## Creación de paneles

La plataforma SenseCraft HMI ofrece potentes herramientas para diseñar y personalizar contenido. Los cinco bloques de construcción principales se describen a continuación; para una referencia completa consulta la [documentación de SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/).

:::note
Las siguientes demostraciones utilizan una pantalla de 7,3". Al usar un tamaño diferente, recuerda:

- Confirmar la orientación del cable flex de la pantalla (frontal y posterior).
- Verificar que el número de pines coincida con el conector de tu dispositivo.
- Usar la tapa correspondiente al tamaño adecuado.
- Evitar doblar o plegar en exceso al instalar el cable flex.
:::

### Generador de IA

Deja que la IA diseñe tu panel. Describe qué información quieres mostrar y el Generador de IA creará automáticamente un diseño atractivo y funcional, perfecto para pantallas del tiempo, calendarios, listas de tareas o paneles informativos sin trabajo de diseño manual.

[Más información sobre AI Generator →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>

**Resultado en la pantalla de ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7,3 pulgadas</em></p>
</div>

### Galería

Convierte tu pantalla ePaper en un marco de fotos digital. Sube tus imágenes favoritas y la plataforma las optimiza para ePaper. Crea presentaciones de diapositivas con tiempos de transición personalizados.

[Más información sobre Gallery →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>

**Resultado en la pantalla de ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7,3 pulgadas</em></p>
</div>

### Canvas

Diseña tu panel desde cero con Canvas, una interfaz de arrastrar y soltar que ofrece:

- Bloques de texto con fuentes y tamaños personalizables
- Marcadores de posición para imágenes
- Widgets para hora, fecha y clima
- Herramientas de visualización de datos
- Formas y divisores para la organización del diseño

[Más información sobre Canvas →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>

**Resultado en la pantalla de ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7,3 pulgadas</em></p>
</div>

### Integración de fuentes RSS

Mantente al día con tus fuentes de noticias o sitios web favoritos añadiendo fuentes RSS a tu panel. Muestra titulares, resúmenes o artículos completos de múltiples fuentes.

Dos fuentes recomendadas:

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

[Más información sobre la integración de fuentes RSS →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>

**Resultado en la pantalla de ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7,3 pulgadas</em></p>
</div>

### Visualización de contenido web

Incrusta cualquier URL web directamente en tu panel de ePaper. Perfecto para mostrar de forma transparente herramientas y páginas que aún no tienen un plugin HMI nativo.

[Más información sobre la visualización de contenido web →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

**Resultado en la pantalla de ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Pantalla ePaper de 7,3 pulgadas</em></p>
</div>

## Referencias y recursos

- [Primeros pasos con SenseCraft HMI (documentación oficial)](https://sensecraft-hmi-docs.seeed.cc/en/) — obtén una comprensión más profunda de cómo usar SenseCraft HMI para maximizar sus capacidades y mejorar tus proyectos.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
