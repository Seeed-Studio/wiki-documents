---
title: Módulo Relay Add On para XIAO
description: The Relay Add On Module For XIAO is a smart module from Seeed Studio designed to control AC-powered appliances. 
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.webp
slug: /es/relay_add_on_module_for_xiao
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 3
last_update:
  author: Guillermo
  date: 07/21/2025
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.jpg" /></div>

## Descripción general

El Módulo Relay Add On para XIAO es un módulo inteligente de Seeed Studio diseñado para controlar aparatos que funcionan con corriente alterna (AC). Se caracteriza por la combinación con XIAO, a través del acceso ESPHome en Home Assistant, para controlar una variedad de electrodomésticos, ¡haciendo tu hogar más inteligente!

### Características y especificaciones clave

| Parámetro               | Valor           |
|-------------------------|-----------------|
| Voltaje de operación    | 5V              |
| Corriente de operación  | 1A              |
| Vida útil del relé      | 100,000 ciclos  |
| Voltaje máximo de conmutación | 250VAC      |
| Corriente máxima de conmutación | 10A        |
| Resistencia eléctrica   | 1.5x10^4 OPS (10A 250VAC, carga resistiva, a 85°C, 1s encendido 9s apagado) |

Para más información, [haz clic aquí para descargar el archivo PDF](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.pdf).

## Primeros pasos

Para seguir este tutorial necesitarás preparar lo siguiente. Además del XIAO ESP32 C3, puedes usar otros productos de la serie ESP32, como XIAO ESP32 C6 y XIAO ESP32 S3. El objetivo final de este proyecto es controlar el módulo relé desde Home Assistant.

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
     <th>Módulo Relay</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
     <td align="center"><div align="center"><img width ="260" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/13.jpg"/></div></td>
 </tr>
 <tr>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Relay-add-on-module-for-XIAO-p-6310.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
 </tr>
</table>

El contenido de este tutorial cubrirá ampliamente los siguientes pasos:

1. [Seleccionar tu entorno de Home Assistant](#select-your-home-assistant-environment)
2. [Instalar y configurar ESPHome en Home Assistant](#install-and-configure-esphome-in-home-assistant)
3. [Configurar la conexión entre XIAO ESP32C3 y ESPHome](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [Agregar el Módulo Relay al panel de Home Assistant](#add-relay-module-to-home-assistant-dashboard)

### Flash rápido del firmware

Hemos creado una página para flashear rápidamente el firmware para el XIAO. Puedes usar el sitio siguiente para flashear el firmware del relay sin programación. El sitio detectará automáticamente el chip ESP32 de tu XIAO y flasheará la versión de firmware correspondiente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Flasheador de Firmware 🖱️</font></span></strong>
    </a>
</div>

## Selecciona tu entorno de Home Assistant

En esta rutina no detallaremos cómo instalar Home Assistant; asumimos que ya tienes un dispositivo con Home Assistant funcionando.

Si quieres aprender a instalar Home Assistant, puedes consultar el [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos instalar Home Assistant en un dispositivo x86, ya que es la forma más amigable de instalar Home Assistant con Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

Según la tabla, lo más adecuado es instalar **Home Assistant OS** o **Home Assistant Supervised**, que te ahorrarán muchos problemas. Si usas Home Assistant en Docker con OpenWRT (por ejemplo, LinkStar H68K), no te preocupes, también ofrecemos referencias detalladas para esta configuración.

Hemos documentado la instalación de Home Assistant en algunos productos de Seeed Studio, por favor revísalos:

- [Primeros pasos con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)
- [Primeros pasos con Home Assistant en reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)
- [Primeros pasos con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## Paso 1. Instalar ESPHome

Si tienes Home Assistant OS, cuenta con una Tienda de Complementos que facilita la instalación de ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

Busca e instala ESPHome desde la Tienda de Complementos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

## Paso 2. Subir firmware al XIAO ESP32C3

Usa la página rápida para flashear firmware de XIAO mencionada antes. El sitio detectará el chip y flasheará el firmware adecuado sin necesidad de programar.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Flasheador de Firmware 🖱️</font></span></strong>
    </a>
</div>

## Paso 3. Agregar el Módulo Relay al panel de Home Assistant

Después de flashear el firmware, verás una red inalámbrica llamada **seedstudio-relay-module**. Conéctate a esta red y entra a `192.168.4.1` en tu navegador para configurar la red de tu dispositivo. Usa la misma red que Home Assistant.

Ve a **Ajustes** y luego a **Dispositivos y servicios**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/5.png" /></div>

En la sección **Descubiertos**, encontrarás el XIAO. Haz clic en **CONFIGURAR**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/2.png" /></div>

Selecciona una zona o déjala por defecto y haz clic en **FINALIZAR**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/4.png" /></div>

Después, haz clic en **Dispositivos**, busca **xiao_esp32c3** (el nombre que diste) y entra.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/6.png" /></div>

Esta es la página del dispositivo ESPHome, donde puedes agregar automatizaciones y más. Ahora agrégalo al panel haciendo clic.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/7.png" /></div>

Haz clic en **SIGUIENTE** y luego en **AGREGAR AL PANEL**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/8.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/9.png" /></div>

Ahora haz clic en **Visión general** a la izquierda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/10.png" /></div>

Verás el control del Relay aparecer aquí.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/11.png" /></div>

### Paso 4. Usa el módulo Relay para controlar una lámpara de mesa

Puedes hacer clic en el interruptor para comprobar si el relay funciona correctamente. Si ves la luz verde pequeña en la placa cuando haces clic, ¡está funcionando!

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<br></br>
He remodelado mi pequeña lámpara de mesa con este módulo relay. Corté el cable positivo y lo conecté a cada uno de los dos puertos del módulo relay. Puedes ver el efecto en el video de abajo. Este módulo relay no alimenta al XIAO, así que recuerda usar batería o cable USB para alimentar el XIAO.

:::warning
Presta atención a la seguridad eléctrica y no toques los relevadores con la energía conectada.
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/light.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades por completar con éxito tu recorrido con el Módulo Relay para XIAO! ¡Vamos a hacer más remodelaciones interesantes!

## Soporte técnico y discusión del producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte y asegurarnos de que tu experiencia sea lo más satisfactoria posible. Ofrecemos varios canales de comunicación para diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>