---
description: Usa TRMNL con cualquier producto Seeed ePaper compatible: reTerminal E1001, E1002, E1003, E1004, TRMNL 7.5" (OG) DIY Kit o XIAO 7.5" ePaper Panel.
title: Trabajar con TRMNL
keywords:
  - pantalla ePaper
  - TRMNL
  - reTerminal
  - reTerminal E1003
  - reTerminal E1004
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sidebar_position: 3
last_update:
  date: 08/05/2026
  author: dimo
aliases:
  - /ogdiy_kit_works_with_trmnl
  - /xiao_7_5_inch_epaper_panel_with_trmnl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_trmnl/
updatedAt: '2026-08-05'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

Esta guía es la única fuente de referencia para usar **TRMNL** con cualquier producto Seeed ePaper compatible. Elige tu hardware una vez en cada paso que lo requiera, y el resto del flujo de trabajo será idéntico.

:::caution Compatibilidad de hardware
TRMNL admite oficialmente **reTerminal E1001**, **reTerminal E1002**, **reTerminal E1003**, **reTerminal E1004**, **TRMNL 7.5" (OG) DIY Kit** y **XIAO 7.5" ePaper Panel**. Los **E1002** y **E1004** tienen paneles Spectra™ 6 a todo color, pero el firmware de TRMNL representa su contenido en **modo monocromo**. El panel táctil capacitivo del **E1003** solo está disponible con el firmware SenseCraft HMI; el firmware de TRMNL utiliza los botones físicos del dispositivo.
:::

## ¿Qué es [TRMNL](https://trmnl.app/)?

TRMNL es una plataforma innovadora diseñada para ayudar a las personas a mantenerse concentradas y tranquilas en nuestro mundo digital cada vez más distractor. Fundada en 2023, TRMNL se ha convertido rápidamente en una solución líder para la gestión de paneles de control con E Ink®, ofreciendo un enfoque único para mostrar información sin las notificaciones constantes y distracciones de las pantallas tradicionales.

En esencia, TRMNL se basa en la filosofía de que la tecnología debe mejorar nuestras vidas sin exigir atención constante. La plataforma proporciona una forma elegante de ver información importante de un vistazo a través de pantallas E Ink®, creando una experiencia tecnológica más consciente y menos intrusiva.

### ¿Por qué usar TRMNL?

- **Creación simplificada de paneles de control**: La creciente biblioteca de aplicaciones e integraciones de TRMNL facilita la creación de pantallas de información personalizadas sin programación compleja.
- **Bajo consumo de energía**: El software eficiente de TRMNL combinado con los requisitos mínimos de energía de E Ink® crea una solución extremadamente eficiente energéticamente.
- **Información sin distracciones**: Obtén la información que necesitas sin notificaciones ni fatiga visual.
- **Actualizaciones periódicas**: El desarrollo activo de TRMNL significa que se añaden nuevas funciones e integraciones cada semana.
- **Amigable para desarrolladores**: La API abierta y las herramientas para desarrolladores de TRMNL permiten complementos e integraciones personalizadas.

## Hardware compatible

### reTerminal E Serie

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" monocromo<br/>Terminal integrado</td>
      <td align="center">7.3" Spectra 6 (color)<br/>Terminal integrado<br/>Modo mono en TRMNL</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10.3" monocromo<br/>Escala de grises de 16 niveles<br/>Terminal integrado</td>
      <td align="center">13.3" Spectra 6 (color)<br/>Terminal integrado<br/>Modo mono en TRMNL</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### TRMNL DIY Kit y panel XIAO

<div class="table-center">
  <table align="center">
    <tr>
      <th>TRMNL 7.5" (OG) DIY Kit</th>
      <th>XIAO 7.5" ePaper Panel</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" mono + carcasa DIY<br/>Controlador XIAO ESP32-S3 Plus</td>
      <td align="center">Panel desnudo 7.5" mono<br/>XIAO ESP32-C3 directamente</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Paso 1: Configuración de la cuenta TRMNL y acceso BYOD

Antes de conectar tu dispositivo a TRMNL necesitas una cuenta TRMNL y acceso BYOD (Bring Your Own Device), el mismo flujo independientemente del hardware.

1. **Comprar acceso a TRMNL**

   - Compra acceso a la aplicación web TRMNL + capacidades del dispositivo en: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - Esto te proporciona las credenciales necesarias para usar la plataforma de TRMNL.
   - Ve a [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para activar un dispositivo virtual (puede tardar hasta 10 minutos después de la compra).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Crear una cuenta TRMNL**

   - Visita [el sitio web de TRMNL](https://usetrmnl.com)
   - Haz clic en "Sign Up" para crear una nueva cuenta.
   - Sigue el proceso de registro.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Tus credenciales de TRMNL son información sensible. Nunca las compartas públicamente ni las subas a sistemas de control de versiones.
:::

Si encuentras algún problema, contacta directamente con el equipo de TRMNL en [team@usetrmnl.com](mailto:team@usetrmnl.com).

## Paso 2: Configuración del hardware

La reTerminal E Serie y el panel XIAO 7.5" vienen preensamblados: solo necesitas encenderlos. El TRMNL DIY Kit requiere montaje.

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

La reTerminal E Serie está totalmente integrada. Simplemente conecta el cable USB-C, desliza el interruptor de encendido a **ON** y enciéndela. No se necesitan pasos de montaje.

:::tip Solo reTerminal E1003
Si el dispositivo está en reposo y no responde, pulsa el botón **Refresh** en la parte superior de la unidad para despertarlo antes de conectar el USB o entrar en modo de flasheo.
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**Paso 1. Conectar la pantalla a la placa controladora**  
Alinea el cable FPC con el conector en la XIAO ePaper Display Board y luego asegura la pestaña para garantizar una conexión firme.

:::tip
El lado metálico del cable FPC debe mirar hacia arriba; de lo contrario, no se mostrará ningún contenido. Sigue el video de instalación a continuación: muchas personas se equivocan en este paso.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2. Conectar la batería**  
Conecta el cable de la batería al conector JST de la placa controladora, asegurando la polaridad correcta (cable rojo a +, negro a -).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 3. Montaje de la carcasa (opcional)**

:::tip
Ten en cuenta que el cable flexible de la pantalla es muy frágil. Ten cuidado al manipularlo. Si se daña, toda la pantalla dejará de funcionar.
:::

Imprime las piezas de la carcasa de código abierto desde la sección [Resources](#resources) y monta los componentes en su interior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

Primero, ensambla la placa controladora y la batería:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Prueba el kit TRMNL:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Conecta la pantalla a la carcasa y saca el cable FPC:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Conecta el cable de extensión FPC y ensambla toda la carcasa:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

El ensamblaje de la carcasa en forma de L es muy similar:

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

:::tip
Si tu kit TRMNL está lejos de tu router, puedes sacar la antena fuera de la carcasa para obtener un mejor rendimiento de señal.
:::

</TabItem>
<TabItem value="xiao-075-panel" label="Panel XIAO 7.5&quot;">

El panel de papel electrónico XIAO 7.5" se envía con el XIAO ESP32-C3 conectado directamente al panel. Solo conéctalo mediante USB-C; no se requiere más ensamblaje.

</TabItem>
</Tabs>

## Paso 3: Flashear el firmware de TRMNL

Hay disponibles tres métodos de flasheo. **Método 1 (Web Flasher)** es el más sencillo y funciona para todo el hardware compatible. **Método 2 (reTerminal E-Series Firmware Flasher)** es exclusivo para reTerminal E Serie. **Método 3 (Compilar desde el código fuente)** es para usuarios avanzados.

:::tip Los kits TRMNL DIY totalmente nuevos ya se envían con el firmware TRMNL
Si compraste un kit TRMNL 7.5" (OG) DIY totalmente nuevo, ya tiene el firmware TRMNL preinstalado; puedes omitir por completo el paso de flasheo y pasar al Paso 4.
:::

### Método 1: TRMNL Web Flasher (recomendado)

El TRMNL Web Flasher funciona directamente en el navegador y es compatible con todos los dispositivos de esta página.

1. Visita [https://usetrmnl.com/flash](https://usetrmnl.com/flash).
2. Conecta tu dispositivo mediante USB-C y sigue las instrucciones en pantalla.
3. Elige el firmware que coincida con tu hardware:

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **reTerminal E1001 / E1002**: usa **FW 1.6.7 o posterior** para compatibilidad con Seeed.
- **reTerminal E1003**: selecciona **reTerminal E1003** en la lista de firmware y usa **FW 1.8.7 o posterior**.
- **reTerminal E1004**: selecciona **reTerminal E1004** en la lista de firmware y usa **FW 1.8.10 o posterior**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/258.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Usa **FW 1.5.12 o posterior** para compatibilidad con Seeed en el TRMNL DIY Kit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/259.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="Panel XIAO 7.5&quot;">

Usa **FW 1.5.12 o posterior** para compatibilidad con Seeed en el panel de papel electrónico XIAO 7.5".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/260.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Método 2: Flashear mediante reTerminal E-Series Firmware Flasher (solo reTerminal E Serie)

:::info
Este método es aplicable a **reTerminal E1001 / E1002 / E1003 / E1004**. (**FW 1.8.10** y posteriores).
:::

:::caution Prefiere el Método 1 para firmware TRMNL más reciente
El reTerminal E-Series Firmware Flasher proporciona un canal de firmware TRMNL alojado por Seeed para dispositivos reTerminal E Serie. Seeed no actualiza este canal con tanta frecuencia como el TRMNL Web Flasher oficial, y no todas las versiones de firmware TRMNL ascendentes se sincronizan aquí.

Usa primero el [Método 1: TRMNL Web Flasher](#método-1-trmnl-web-flasher-recomendado) cuando quieras una versión de firmware TRMNL más reciente. Usa este método cuando necesites el flujo de flasheo de reTerminal E Serie alojado por Seeed.
:::

<details>
<summary>Haz clic para desplegar los pasos de reTerminal E-Series Firmware Flasher</summary>

1. Visita el [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/). Para una entrada directa de TRMNL en E1004, también puedes abrir el [enlace E1004 TRMNL 1.8.10 Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/?platform=trmnl&device=E1004&firmware=TRMNL_reTerminal_E1004&version=1.8.10).

2. En **Select platform**, elige la tarjeta **TRMNL** de la sección de plataformas oficiales.

3. Selecciona tu dispositivo:

   - **reTerminal E1001**
   - **reTerminal E1002**
   - **reTerminal E1003**
   - **reTerminal E1004**

4. En la segunda página, revisa la versión de firmware TRMNL disponible para tu dispositivo seleccionado (para E1004, usa **1.8.10 o posterior**).

5. Conecta tu dispositivo al ordenador con un cable de datos USB.

6. En **Flash to device**, selecciona **Erase flash + flash** para la primera instalación y luego haz clic en **Connect & flash**.

7. Elige el puerto serie de tu dispositivo en la ventana del navegador e inicia el proceso de flasheo.

:::tip Primer flasheo
Para la primera instalación, selecciona **Erase flash + flash** para que el dispositivo arranque desde un estado de firmware limpio.
:::

:::tip Solo reTerminal E1003
Asegúrate de que el interruptor de encendido esté en **ON**. Si el dispositivo está en reposo y el flasheo no comienza, pulsa el botón **Refresh** en la parte superior de la unidad para activarlo y vuelve a intentarlo.
:::

:::note Comportamiento de pantalla de reTerminal E1002 / E1004
El reTerminal E1002 utiliza una pantalla de papel electrónico a todo color, pero el firmware TRMNL actualmente muestra el contenido del E1002 en modo monocromo. Durante la provisión de Wi-Fi, la pantalla AP del E1002 muestra un diseño compacto con el logotipo TRMNL en la esquina inferior derecha. Cuando veas esta pantalla, busca y conéctate al punto de acceso E1002 y luego continúa con el mismo flujo de configuración Wi-Fi que para los otros dispositivos.

El reTerminal E1004 también utiliza un panel Spectra™ 6 a todo color, pero el firmware TRMNL igualmente muestra su contenido en modo monocromo. Elige **reTerminal E1004** en la herramienta de flasheo para que se use el panel correcto.
:::

Cuando el flasheo haya finalizado, continúa con el [Paso 4: Conectar el dispositivo a Wi-Fi](#paso-4-conectar-el-dispositivo-a-wi-fi).

</details>

### Método 3: Compilar y flashear desde el código fuente (avanzado)

1. **Clona el repositorio de firmware**

   - Visita el [repositorio oficial de firmware](https://github.com/usetrmnl/trmnl-firmware) y clónalo:

     ```bash
     git clone https://github.com/usetrmnl/trmnl-firmware.git
     ```

   :::tip
   A veces nuestros PR al upstream de TRMNL aún están en revisión. Si quieres los últimos parches del lado de Seeed, usa las instantáneas de código fuente mantenidas por Seeed en el repositorio [OSHW-reTerminal-Series-E-D](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D) en su lugar:

   ```bash
   git clone https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D.git
   ```

   - Para **reTerminal E1001 / E1002 / E1003**, usa [`examples/official/TRMNL`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL).
   - Para **reTerminal E1004**, usa el proyecto dedicado [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004).
   :::

2. **Instala [PlatformIO](https://platformio.org/)** como extensión de VS Code o mediante la línea de comandos.

3. **Abre el proyecto**: abre la carpeta `firmware` clonada en VS Code.

4. **Selecciona el entorno correcto de PlatformIO** para tu hardware:

   <Tabs groupId="trmnl-hardware">
   <TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

   En `platformio.ini`:

   - Para **reTerminal E1001**, selecciona el entorno `seeed_reTerminal_E1001`.
   - Para **reTerminal E1002**, selecciona el entorno `seeed_reTerminal_E1002` (TRMNL muestra el contenido en monocromo en el E1002).
   - Para **reTerminal E1003**, selecciona el entorno `TRMNL_X_E1003` en el [repositorio oficial de firmware TRMNL](https://github.com/usetrmnl/trmnl-firmware).
   - Para **reTerminal E1004**, abre el proyecto dedicado de PlatformIO [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004) y selecciona el entorno `seeed_reTerminal_E1004` (ID de firmware `TRMNL_reTerminal_E1004`).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

   En `platformio.ini`, selecciona el entorno `TRMNL_7inch5_OG_DIY_Kit`.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="xiao-075-panel" label="Panel XIAO 7.5&quot;">

   En `platformio.ini`, selecciona el entorno `seeed_xiao_esp32c3`.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. **Conecta tu dispositivo** mediante USB-C.

6. **Compila y sube**: haz clic en el botón **Upload** de PlatformIO o ejecuta:

   ```bash
   pio run --target upload
   ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

## Paso 4: Configurar Wi‑Fi y aprovisionar el dispositivo

El flujo de trabajo de aprovisionamiento de Wi‑Fi es idéntico para todo el hardware compatible.

> 💡 **¿Problemas para conectar el Wi‑Fi?** Consulta la [Guía de solución de problemas de Wi‑Fi del dispositivo TRMNL](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting).

### Encender y entrar en modo de aprovisionamiento

Después de flashear el firmware de TRMNL y encender tu dispositivo, este entrará automáticamente en modo de aprovisionamiento si aún no está conectado a Wi‑Fi.

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Conectarse al Wi‑Fi de TRMNL

En tu teléfono u ordenador, abre la lista de redes Wi‑Fi disponibles. Busca una red llamada **TRMNL** y conéctate a ella (de forma predeterminada no se requiere contraseña).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir el portal cautivo

Una vez conectado, abre un navegador web. El dispositivo debería redirigirte automáticamente a la página de configuración de TRMNL; si no lo hace, visita manualmente [http://4.3.2.1](http://4.3.2.1).

### Introducir tus credenciales de Wi‑Fi

- Selecciona tu **red Wi‑Fi de 2,4 GHz** (las redes de 5 GHz no son compatibles).
- Introduce la contraseña de tu Wi‑Fi y haz clic en **Save** / **Connect**.

> ⚠️ **Importante:** asegúrate de usar una red Wi‑Fi de 2,4 GHz. Los chips ESP32-C3 / ESP32-S3 de estos dispositivos no son compatibles con redes de 5 GHz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### El dispositivo se une a tu red

El dispositivo se desconectará del Wi‑Fi de TRMNL y se unirá a tu red doméstica. La ventana del portal cautivo mostrará la dirección MAC del dispositivo. **Anota la dirección MAC** — la necesitarás en el siguiente paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Nota:** la dirección MAC solo es visible en el portal cautivo durante 1–2 segundos. Si te la pierdes también puedes:
>
> - Recuperarla desde los registros de compilación/carga de VS Code → PlatformIO.
> - Usar el método de [usetrmnl.com/flash](https://usetrmnl.com/flash) y comprobar la consola de desarrollador del navegador durante el flasheo.
> - Encontrarla en la lista de dispositivos conectados de tu router o de la app de tu red mallada.
>
> Consulta la guía oficial: [Encontrar la dirección MAC de tu TRMNL](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address).

## Paso 5: Registrar el dispositivo en TRMNL

Después de que tu dispositivo esté conectado a Wi‑Fi y tengas su dirección MAC, regístralo en la interfaz web de TRMNL:

1. **Abre la interfaz web de TRMNL** en [https://trmnl.app](https://trmnl.app).
2. **Ve a la página Devices**.
3. **Añade un nuevo dispositivo** (botón en la parte superior derecha o en el centro de la página).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Introduce el Device ID** que recibiste cuando compraste el acceso BYOD (esto **no** es la dirección MAC — encuentra el Device ID en el correo de confirmación de compra o en el panel de TRMNL). Haz clic en **Add new device**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Vincula la dirección MAC del dispositivo** en la página de configuración del dispositivo:

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   Aquí también puedes establecer un nombre personalizado y ajustar otros parámetros.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

¡Tu dispositivo ahora está vinculado a tu cuenta de TRMNL! Ahora puedes enviar listas de reproducción, imágenes y otros contenidos directamente desde la interfaz de TRMNL.

> 💡 **Consejo:** si tienes varios dispositivos, repite los pasos anteriores para cada uno usando sus Device IDs únicos.

:::caution Desactivar Firmware Early Release y OTA Updates
Después de añadir tu dispositivo en la interfaz web de TRMNL, ve a la página de configuración del dispositivo y **desactiva** tanto **Firmware Early Release** como **OTA Updates Enabled**.

Si se dejan activadas, tu dispositivo puede descargar automáticamente actualizaciones de firmware destinadas al hardware oficial de TRMNL que **no son compatibles con los dispositivos de Seeed**. Instalar firmware incompatible puede hacer que tu dispositivo funcione mal o deje de responder.

Mantén siempre ambas opciones desactivadas para garantizar un funcionamiento estable.
:::

## Uso de los botones

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1004" default>

Los reTerminal E1001 y E1002 exponen un único botón orientado al usuario bajo el firmware de TRMNL:

- **Botón verde — pulsación larga 5 s**: entrar en modo de reconfiguración de Wi‑Fi.
- **Botón de reinicio**: clic único para reiniciar el dispositivo.

El reTerminal E1004 utiliza los botones físicos frontales bajo el firmware de TRMNL. Usa esos botones para activar o refrescar el panel, y desliza el interruptor de encendido a **OFF** y luego a **ON** para reiniciar. Para la reconfiguración de Wi‑Fi, sigue el mismo flujo de pulsación larga / aprovisionamiento que se muestra en la pantalla del dispositivo después de un flasheo de fábrica o un restablecimiento de red.

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

El reTerminal E1003 expone tres botones montados en la parte superior bajo el firmware de TRMNL:

- **Botón de refresco — pulsación única**: activar el dispositivo o refrescar inmediatamente la pantalla actual.
- **Page Up + Page Down — mantener pulsados 2 s**: entrar en modo de reconfiguración de Wi‑Fi.
- **Interruptor de encendido**: deslizar a **OFF** y luego a **ON** para reiniciar el dispositivo.

:::note
El toque capacitivo solo es compatible con el firmware SenseCraft HMI. El firmware de TRMNL no usa el panel táctil — toda la interacción se realiza mediante los botones físicos superiores.
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

La XIAO ePaper Display Board tiene 4 botones (RESET / KEY1 / KEY2 / KEY3). **Solo RESET y KEY3 son usados por el firmware de TRMNL.**

**Uso de KEY3:**

1. **Clic único**: refrescar la página inmediatamente.
2. **Doble clic**: función personalizada — configúrala desde la página de configuración de TRMNL.
3. **Pulsación larga (~5 s)**: reconfigurar la red.

**Uso de RESET**: clic único para reiniciar el dispositivo.

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

La XIAO ESP32-C3 tiene los botones estándar **RESET** y **BOOT**.

- **Reset → soltar → mantener BOOT durante 5 s**: reconfigurar la red (vuelve al portal de aprovisionamiento de TRMNL).
- **Clic único en RESET**: reiniciar el dispositivo.

</TabItem>
</Tabs>

## Comprender la Playlist de TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

La Playlist de TRMNL controla exactamente qué se muestra en tu dispositivo de ePaper y cuándo.

### Visión general de la Playlist

- **Playlist Title**: el nombre de tu dispositivo TRMNL.
- **Display Time Range**: cuándo está activa la playlist (p. ej. 00:00–23:45).
- **Update Interval**: con qué frecuencia se actualiza la pantalla (p. ej. cada 5 minutos).
- **Add a Group / Add a Plugin**: organizar la playlist en grupos o añadir nuevos plugins de contenido.

### Elementos de la Playlist

Cada fila es una pantalla o widget que se mostrará en tu dispositivo. Ejemplos:

1. **Weather** — información meteorológica actual de tu ubicación.
2. **Days Left This Year** — cuenta atrás de los días restantes del año en curso.
3. **Custom Text** — muestra cualquier mensaje personalizado (p. ej. "Hello World").

Para cada elemento:

- **Settings (icono de engranaje)**: configurar las opciones del plugin.
- **Delete (icono X)**: eliminar el elemento de tu playlist.
- **Preview (icono de ojo)**: previsualizar cómo se verá la pantalla.
- **Reorder (icono de barras)**: arrastrar para cambiar el orden.

### Smart Playlist

En la parte inferior puedes elegir si quieres omitir automáticamente las pantallas cuyo contenido no haya cambiado. Consulta la [entrada del blog sobre Smart Playlists](https://usetrmnl.com/blog/smart-playlists) para más detalles.

## Explorando los plugins de TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

Los plugins son bloques de contenido modulares que pueden mostrar el tiempo, eventos de calendario, precios de acciones, fuentes RSS, frases motivacionales, actividad de GitHub y mucho más.

### Plugins conectados

En la parte superior de la página de Plugins ves todos los plugins ya conectados a tu cuenta de TRMNL. Algunos ejemplos son Weather, Days Left This Year, Stock Price, RSS Feed, Reddit, Hacker News, Language Learning, Motivational Quote, Custom Text, …

### Marketplace de plugins

Debajo de tus plugins conectados encontrarás el marketplace. Los plugins están organizados por categorías y etiquetas (#productivity, #news, #ecommerce, …). Navega, busca y haz clic en cualquier plugin para conectarlo a tu cuenta.

Los desarrolladores también pueden crear y publicar sus propios plugins — consulta la [documentación del marketplace de plugins](https://docs.usetrmnl.com/go/plugin-marketplace/introduction) para más detalles.

Para funciones más avanzadas, consulta la documentación oficial de TRMNL: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go).

## Preguntas frecuentes (FAQ)

### P1: ¿Cómo vuelvo a configurar la red?

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

Mantén presionado el **Botón Verde** durante 5 segundos. El dispositivo volverá a la interfaz inicial de TRMNL y activará el AP.

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

Mantén presionados **Page Up** y **Page Down** juntos durante 2 segundos. El dispositivo volverá a la interfaz inicial de TRMNL y activará el AP.

Si la pantalla está en reposo, presiona primero una vez el botón **Refresh** para activar el dispositivo.

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Mantén presionado **KEY3** (junto al botón Reset) durante 5 segundos. El dispositivo volverá a la interfaz inicial de TRMNL y activará el AP.

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

Presiona el botón **Reset** en la XIAO, suéltalo y luego mantén presionado el botón **BOOT** durante 5 segundos. El dispositivo volverá a la interfaz inicial de TRMNL y activará el AP.

</TabItem>
</Tabs>

### P2: ¿Qué debo hacer si la pantalla siempre muestra una advertencia de batería baja?

Dos situaciones diferentes pueden activar esta pantalla:

1. **El voltaje de la batería es realmente bajo.** Este es el caso más común: el dispositivo realmente necesita cargarse. Conéctalo o sustituye/carga la batería y la advertencia debería desaparecer una vez que el voltaje se recupere.

2. **Un problema del lado del servidor de TRMNL.** El nivel de batería se evalúa en los servidores de TRMNL, no solo en el dispositivo. Un error del servidor o una actualización reciente de la plataforma puede informar temporalmente mal el estado de la batería y seguir mostrando la advertencia incluso cuando el hardware está bien.

**Si la batería está realmente baja**, carga primero el dispositivo; no ocultes la advertencia hasta que hayas confirmado que el paquete de baterías está en buen estado.

**Si estás seguro de que la batería está bien** pero la advertencia no desaparece, **no** necesitas modificar el firmware. TRMNL te permite suprimir el aviso en pantalla desde el panel web:

**Paso 1.** Abre la [interfaz web de TRMNL](https://trmnl.app) y ve a **Devices**.

**Paso 2.** Selecciona el dispositivo afectado y abre sus ajustes de **Battery**.

**Paso 3.** Activa **Hide Low Battery Screen**. Esto evita que aparezca en el dispositivo la pantalla de advertencia de batería baja mientras se recupera la detección de batería del lado del servidor de TRMNL, o cuando necesitas que la pantalla permanezca en tu lista de reproducción.

**Paso 4.** (Opcional) Deja activada **Low Battery Email Notification** si aún quieres recibir alertas por correo electrónico sin interrumpir la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/261.png" style={{width:800, height:'auto'}}/></div>

### P3: Web Flasher / PlatformIO no puede encontrar el dispositivo o la carga falla

A veces, el programa incorrecto puede hacer que la XIAO pierda su puerto o no funcione correctamente:

- La XIAO está conectada pero **no se encuentra ningún número de puerto**.
- La XIAO está conectada, el puerto aparece, pero la **carga falla**.

Pon la XIAO en modo BootLoader para recuperarla:

- **Paso 1**: mantén presionado el botón `BOOT` en la XIAO ESP32-S3 / ESP32-C3 sin soltarlo.
- **Paso 2**: mientras sigues manteniendo `BOOT`, conecta el dispositivo al ordenador mediante USB-C. Suelta `BOOT` después de que el dispositivo esté conectado.
- **Paso 3**: vuelve a ejecutar la carga / flasheo. La mayoría de los problemas de "dispositivo no reconocido" o "carga fallida" se resuelven con esto.

## Agradecimientos especiales

Agradecimientos especiales a todo el **equipo de TRMNL** por su sólido apoyo y ayuda inestimable a lo largo de esta integración. En particular queremos agradecer a **Bogdan**, **Ryan Kulp**, **Fr3d**, **Schappi** y a todos los demás miembros del equipo por su dedicación durante todo el desarrollo y la documentación.

Su experiencia hizo posible esta integración y mejoró enormemente la experiencia para las comunidades de reTerminal E Serie (E1001, E1002, E1003 y E1004), TRMNL DIY Kit y XIAO 7.5" ePaper Panel.

## Recursos

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **[GitHub]** [Código fuente del firmware TRMNL para E1001 / E1002 / E1003](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL)
- **[GitHub]** [Código fuente del firmware TRMNL para E1004](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004)
- **[GitHub]** [Firmware TRMNL oficial](https://github.com/usetrmnl/trmnl-firmware)
- **[Wiki]** [Primeros pasos con reTerminal E1003](/es/getting_started_with_reterminal_e1003)
- **[Wiki]** [Primeros pasos con reTerminal E1004](/es/getting_started_with_reterminal_e1004)

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

- **[Firmware]** [Biblioteca TRMNL ePaper (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Esquema de la placa controladora (SCH)](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Imprimible]** [Base triangular](https://www.printables.com/model/1354873)
- **[Imprimible]** [Base triangular protegida](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)
- **[Imprimible]** [Base en forma de L](https://www.printables.com/model/1354879)
- **[Thingiverse]** [Base triangular](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [Base triangular protegida](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [Base en forma de L](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [Base triangular](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [Base triangular protegida](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [Base en forma de L](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

- **[STP]** [Modelo 3D de la carcasa](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]** [PDF del esquema de la placa controladora ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GitHub]** [Repositorio del firmware TRMNL](https://github.com/usetrmnl/firmware)
- **[GitHub]** [Repositorio Seeed_TRMNL_Eink_Project](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

</TabItem>
</Tabs>

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
