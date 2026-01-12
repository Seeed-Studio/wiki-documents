---
title: Módulo Complementario de Relé Para XIAO
description: El Módulo Complementario de Relé Para XIAO es un módulo inteligente de Seeed Studio diseñado para controlar electrodomésticos alimentados por CA.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.webp
slug: /es/relay_add_on_module_for_xiao
sku: 114993555
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 3
last_update:
  author: Allen
  date: 12/02/2024
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.jpg" /></div>

## Descripción General

El Módulo Complementario de Relé Para XIAO es un módulo inteligente de Seeed Studio diseñado para controlar electrodomésticos alimentados por CA. Se caracteriza por la combinación de XIAO, a través del acceso ESPHome a Home Assistant para controlar una variedad de electrodomésticos, ¡haciendo que tu hogar sea más inteligente!

### Características Clave y Especificaciones

| Parámetro               | Valor           |
|-------------------------|----------------|
| Pin del Relé            | D1            |
| Voltaje de Operación    | 5V             |
| Corriente de Operación  | 1A           |
| Vida del Relé           | 100,000 Ciclos   |
| Voltaje Máximo de Conmutación | 250VAC       |
| Corriente Máxima de Conmutación | 10A             |
| Resistencia eléctrica   | 1.5x10^4 OPS (10A 250VAC, Carga resistiva, a 85°C, 1s encendido 9s apagado)|

Para más información, [haz clic aquí para descargar el archivo PDF](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.pdf).

## Introducción

Si quieres seguir este tutorial completo, necesitarás preparar lo siguiente. Además del XIAO ESP32 C3, también puedes usar otros productos de la serie ESP32, como XIAO ESP32 C6 y XIAO ESP32 S3. El objetivo final de este proyecto es controlar el módulo de relé en Home Assistant.

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
     <th>Módulo de Relé</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
     <td align="center"><div align="center"><img width ="260" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/13.jpg"/></div></td>
 </tr>
 <tr>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Relay-add-on-module-for-XIAO-p-6310.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
 </tr>
</table>

El contenido de este tutorial pasará ampliamente por los siguientes pasos.

1. [Selecciona tu entorno de Home Assistant](#selecciona-tu-entorno-de-home-assistant)
2. Instalar y configurar ESPHome en Home Assistant
3. [Configurar la conexión XIAO ESP32C3 y ESPHome](#configurar-la-conexión-xiao-esp32c3-y-esphome)
4. [Agregar Módulo de Relé al Panel de Home Assistant](#agregar-módulo-de-relé-al-panel-de-home-assistant)

### Firmware de Flash Rápido

Hemos creado una página de firmware de flash rápido para el XIAO, puedes usar el sitio de abajo directamente para flashear el firmware del Relé para el XIAO que tienes sin programar. El sitio detectará automáticamente el chip del XIAO que estás conectando, sin tener que elegir, y flasheará directamente la versión de firmware XIAO que corresponde al chip ESP32.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Flasheador de Firmware 🖱️</font></span></strong>
    </a>
</div>

## Selecciona tu entorno de Home Assistant

En esta rutina, no expandiremos sobre cómo instalar el entorno de Home Assistant, asumiremos que ya tienes un dispositivo Home Assistant funcionando.

Si deseas aprender cómo instalar Home Assistant, entonces puedes consultar el [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos encarecidamente que instales Home Assistant usando un dispositivo x86 ya que esta es la forma más amigable para el usuario de instalar Home Assistant con Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

Según la tabla anterior, es más apropiado instalar **Home Assistant OS** y **Home Assistant Supervised**, lo cual te quitará muchas molestias de las manos. Si estás ejecutando Home Assistant en Docker con OpenWRT (por ejemplo, usando LinkStar H68K), por favor no te preocupes, también te proporcionaremos una referencia detallada sobre cómo hacer esto.

También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- [Introducción a Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)
- [Introducción a Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)
- [Introducción a Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)

## Paso 1. Instalar ESPHome

Si tienes Home Assistant OS instalado, tiene una Tienda de Complementos, lo que hace mucho más fácil instalar ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

En la Tienda de Complementos, puedes buscar e instalar ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

## Paso 2. Subir firmware al XIAO ESP32C3

Hemos creado una página de firmware de flash rápido para el XIAO, puedes usar el sitio de abajo directamente para flashear el firmware del Relé para el XIAO que tienes sin programar. El sitio detectará automáticamente el chip del XIAO que estás conectando, sin tener que elegir, y flasheará directamente la versión de firmware XIAO que corresponde al chip ESP32.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Flasheador de Firmware 🖱️</font></span></strong>
    </a>
</div>

## Paso 3. Agregar Módulo de Relé al Panel de Home Assistant

Después de flashear el firmware, puedes ver que hay una red inalámbrica llamada **seedstudio-relay-module**. Por favor conéctate a esta red e ingresa `192.168.4.1` en tu navegador para configurar la red para tu dispositivo. Por favor usa la misma red que tu Home Assistant.

Ve a **setting**, y **Devices & services**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/5.png" /></div>

En el área **Discovered**, encontrarás XIAO, haz clic en **CONGFIUGE**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/2.png" /></div>

Selecciona un área o déjalo por defecto, haz clic en **FINISH**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/4.png" /></div>

Después de eso, haz clic en **Devices**, encuentra **xiao_esp32c3**(lo nombraste antes) y haz clic en él

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/6.png" /></div>

Aquí está la página del dispositivo ESPHome, puedes agregar algunas automatizaciones y demás. Ahora necesitamos agregarlo al panel, así que haz clic en él.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/7.png" /></div>

Haz clic en **NEXT** y haz clic en **ADD TO DASHBOARD**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/8.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/9.png" /></div>

Ahora, haz clic en **Overview** en el lado izquierdo

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/10.png" /></div>

Verás que el Control de Relé aparece aquí

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/11.png" /></div>

### Paso 7. Usar el módulo de relé para controlar una lámpara de mesa

Podemos hacer clic en el interruptor para ver si el relé funciona bien. Si ves la pequeña luz verde en la placa cuando haces clic en el interruptor, ¡significa que funciona bien!

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<br></br>
Remodelé mi pequeña lámpara de mesa con este módulo de relé. Corté el cable positivo y lo conecté a cada uno de los dos puertos del módulo de relé. Puedes ver el efecto en el video de abajo. Este módulo de relé no puede alimentar XIAO, así que por favor recuerda usar batería o cable USB para alimentar XIAO.

:::warning
Por favor presta atención a la seguridad eléctrica y no toques los relés durante el encendido.
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/light.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades por completar exitosamente tu viaje en el Módulo de Relé Para XIAO! ¡Hagamos más remodelaciones interesantes!

## Recursos

[PDF] **[Esquemático del Módulo Complementario de Relé Para XIAO](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_SCH.pdf)**

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
