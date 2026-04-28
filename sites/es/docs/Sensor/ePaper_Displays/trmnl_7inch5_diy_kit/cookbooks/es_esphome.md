---
description: Recetario completo de ESPHome / Home Assistant para el TRMNL 7.5" (OG) DIY Kit: flashear firmware ESPHome, crear paneles en YAML e integrar con Home Assistant.
title: Recetario de ESPHome
keywords:
  - Pantalla de papel electrónico
  - TRMNL
  - ESPHome
  - Home Assistant
  - XIAO ESP32-S3 Plus
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /ogdiy_kit_works_with_esphome
sku: 104991005
sidebar_position: 2
last_update:
  date: 04/28/2026
  author: Citric
createdAt: '2025-07-17'
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recetario de ESPHome: TRMNL 7.5" (OG) DIY Kit

:::tip Lee primero la guía principal de ESPHome
Esta página es el **recetario de ESPHome específico para el TRMNL DIY Kit**. El contenido común — elegir un método de flasheo, el esqueleto YAML genérico, la conexión con Home Assistant — se encuentra en **[Work with ESPHome](/es/epaper_work_with_esphome)**. Échale un vistazo primero si eres nuevo en ESPHome en las pantallas de papel electrónico de Seeed. ¿Buscas en cambio el flujo de trabajo del **panel en la nube de TRMNL** (sin YAML, basado en complementos)? Consulta [Work with TRMNL](/es/reterminal_e10xx_trmnl).
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/byod_main.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

## Introducción a [Home Assistant](https://www.home-assistant.io/)

Home Assistant es una potente plataforma de automatización del hogar de código abierto que te permite controlar y supervisar tus dispositivos domésticos inteligentes desde una única interfaz unificada. Actúa como el concentrador central de tu hogar inteligente, lo que te permite automatizar rutinas, monitorizar sensores y crear un espacio vital más inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:900, height:'auto'}}/></div>

### ¿Por qué Home Assistant?

- **Control local**: A diferencia de muchas soluciones basadas en la nube, Home Assistant se ejecuta localmente en tu red, lo que garantiza que tus datos permanezcan privados y que tus automatizaciones funcionen incluso sin acceso a Internet.

- **Amplia compatibilidad de dispositivos**: Home Assistant se integra con miles de dispositivos y servicios de hogar inteligente diferentes, lo que lo hace muy versátil y preparado para el futuro.

- **Automatización potente**: Crea reglas de automatización sofisticadas que puedan responder a diversos desencadenantes como la hora, estados de dispositivos, lecturas de sensores y más.

- **Panel personalizable**: Diseña tu propia interfaz de usuario para mostrar la información que más te importa.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Más información 🖱️</font></span></strong></a>
</div>

### ¿Por qué el TRMNL 7.5inch(OG) DIY Kit con Home Assistant?

El TRMNL 7.5inch(OG) DIY Kit es un excelente compañero para Home Assistant por varias razones:

1. **Eficiencia energética**: La pantalla de papel electrónico solo consume energía al actualizar el contenido, lo que la hace perfecta para mostrar información persistente como pronósticos del tiempo, eventos de calendario o el estado del sistema.

2. **Visibilidad clara**: A diferencia de las pantallas LCD, las pantallas de papel electrónico se leen fácilmente en cualquier condición de iluminación, incluida la luz solar directa, lo que las hace ideales para paneles de control domésticos montados en la pared.

3. **Larga duración de la batería**: Combinada con el modo de sueño profundo, la pantalla puede funcionar durante meses con una sola carga de batería y seguir proporcionando información valiosa de un vistazo.

4. **Integración flexible**: A través de ESPHome, la pantalla se integra perfectamente con Home Assistant, lo que te permite mostrar cualquier dato de tu sistema de hogar inteligente en un formato elegante y siempre visible.

Estas ventajas hacen que el TRMNL 7.5inch(OG) DIY Kit sea una opción ideal para crear una pantalla de información siempre encendida y de bajo consumo para tu configuración de Home Assistant.

### Integración con ESPHome

ESPHome es una herramienta de creación de firmware de código abierto diseñada específicamente para dispositivos ESP8266/ESP32. Te permite crear firmware personalizado usando sencillos archivos de configuración YAML, que luego pueden flashearse en tu dispositivo. Para el TRMNL 7.5inch(OG) DIY Kit, ESPHome actúa como el middleware esencial que habilita la comunicación entre el dispositivo y Home Assistant.

El sistema funciona convirtiendo tu configuración YAML en un firmware totalmente funcional que se ejecuta en tu dispositivo ESP. Este firmware se encarga de todas las tareas complejas de conectarse a tu red, comunicarse con Home Assistant y controlar la pantalla de papel electrónico. Combinado con Home Assistant, ESPHome proporciona una plataforma robusta para crear pantallas y controles sofisticados de automatización del hogar.

Veamos cómo configurarlo y sacar el máximo partido de esta pantalla versátil.

## Primeros pasos

Antes de comenzar con el contenido del tutorial de este artículo, es posible que necesites tener listo el siguiente hardware.

### Materiales necesarios

<div class="table-center">
  <table align="center">
    <tr>
      <th>TRMNL 7.5inch(OG) DIY Kit</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es la forma más sencilla y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente de forma predeterminada. Esta placa se beneficia del próspero ecosistema de Home Assistant y se mejorará cada mes gracias al código abierto.

Recomendamos usar Home Assistant Green como el host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con Supervisor.

:::tip instala Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- **[Primeros pasos con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)**
- **[Primeros pasos con Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)**
- **[Primeros pasos con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)**

Si no estás usando un producto de Seeed Studio, también puedes consultar y aprender cómo instalar Home Assistant para otros productos en el sitio web oficial de Home Assistant.

- **[Instalación de Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Instalación del equipo

**Paso 1. Conectar la pantalla a la placa controladora**  
Alinea el cable FPC con el conector en la XIAO ePaper Display Board y luego asegura la pestaña para garantizar una conexión firme.  

:::tip
El lado metálico del cable FPC debe mirar hacia arriba; de lo contrario, no se mostrará ningún contenido.

Sigue el siguiente tutorial de instalación, muchas personas lo hacen mal.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2. Conectar la batería**  
Conecta el cable de la batería al conector JST de la placa controladora, asegurando la polaridad correcta (cable rojo a +, negro a -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 3. Montaje de la carcasa (opcional)**  

:::tip
Ten en cuenta que el cable flexible de la pantalla es muy frágil. Ten cuidado al manipularlo. Si se daña, toda la pantalla dejará de funcionar.
:::
Imprime las piezas de la carcasa de código abierto desde [Resource part](#Resource-part) y ensambla los componentes en su interior.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

Primero, ensambla la placa controladora y la batería.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Prueba el kit TRMNL para comprobar que funciona bien.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Introduce la pantalla en la carcasa y deja salir el FPC.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Conecta el cable de extensión FPC y ensambla toda la carcasa.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

La carcasa en forma de L es muy similar.

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Si tu kit TRMNL está lejos de tu router, puedes mover la antena fuera de la carcasa. Tendrá un mejor rendimiento.
:::

### Paso 1. Instalar ESPHome

Si ya has instalado ESPHome, puedes omitir este paso.

Ve a **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

Busca ESPHome y haz clic en él. Haz clic en **INSTALL** y **START**.

:::tip
Si no puedes encontrar ESPHome en la tienda de complementos, asegúrate de que estás usando una instalación de Home Assistant que admita complementos (como Home Assistant OS o instalaciones supervisadas). Para otros tipos de instalación (como Home Assistant Container), es posible que necesites ejecutar ESPHome Device Builder de forma independiente usando Docker. Consulta la [documentación oficial de ESPHome](https://esphome.io/guides/getting_started_hassio) para más detalles.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

Después de eso, ESPHome Builder aparecerá en la barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### Paso 2. Añadir un nuevo dispositivo

Ve a ESPHome y haz clic en **NEW DEVICE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

Ponle al dispositivo el nombre que quieras y selecciona **ESP32-S3** como tipo de chip, luego haz clic en **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_s3.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Después de crear un nuevo dispositivo, haz clic en **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

Dentro del código generado por defecto, el framework de esp32 puede ser `esp-idf`, que necesitamos cambiar a `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Instalar firmware

Este es un ejemplo muy básico y mostrará "Hello World!" en la pantalla.

**El objetivo principal es mostrarte diferentes formas de instalar firmware en el dispositivo.**

Ahora puedes copiar el siguiente código y pegarlo después de `captive_portal` como se muestra a continuación.

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 30s
    lambda: |-
      it.print(0, 0, id(font1), "Hello World!");
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/BYOD_helloworld.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **INSTALL** para instalar el código en el dispositivo y verás la siguiente imagen.

<Tabs>
<TabItem value='Install through browser'>

:::tip
Si tu Home Assistant Host (Raspberry PI/Green/Yellow, etc.) está lejos de ti, recomendamos usar este método. Puedes instalarlo con el ordenador que tengas a mano.
:::

Primero, necesitas hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre este sitio web donde subiremos el firmware al panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Vuelve a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecciona el formato Factory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa un cable USB para **conectar el panel ePaper a tu ordenador** y haz clic en **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecciona usbmodemxxx (en Windows es COMxxx) y haz clic en connect. [¿Has encontrado un problema? Haz clic aquí.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás 'Hello world!' en la pantalla ～

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Si tu Home Assistant Host (Raspberry PI/Green/Yellow, etc.) está cerca, recomendamos usar este método ya que es más sencillo.
:::

Antes de instalar el código en el dispositivo, necesitas usar un cable USB para **conectar este dispositivo a tu Raspberry Pi o HA Green(Yellow), etc.** que esté ejecutando Home Assistant.

Haz clic en las opciones siguiendo la imagen para instalar el código en el dispositivo. [¿No has encontrado el puerto cuando el dispositivo está en modo de suspensión profunda?](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Espera un momento y verás un mensaje como en la siguiente imagen. Significa que el código se está ejecutando correctamente.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/9.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
Esta es la forma más sencilla, pero con la premisa de que, al instalar el programa por primera vez, primero debes subir el programa al panel ePaper usando el método de la izquierda. Después de eso, puedes subirlo vía wifi. Además, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` correctamente configuradas con claves de cifrado válidas para que este método funcione.
:::

De esta manera, no necesitas conectar el panel ePaper a nada, solo asegúrate de que esté en línea.

Haz clic en la opción y entonces el firmware se instalará automáticamente en el panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás un mensaje como en la siguiente imagen. Si falla, puede deberse a una señal débil. Por favor, acerca el dispositivo a tu router. [¿Has encontrado un problema? Haz clic aquí.](#Q4)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>
</Tabs>

## Usos básicos

### 1. Mostrar forma

Este ejemplo mostrará una forma en la pantalla.

Puedes copiar el código de abajo y pegarlo en la parte de **captive_portal** como en la siguiente imagen.

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 5min
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);

      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

Cuando veas un mensaje como en la siguiente imagen, significa que el código se está ejecutando correctamente.

También puedes [hacer clic aquí](https://esphome.io/components/display/) para ver más usos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/37.png" style={{width:600, height:'auto'}}/></div>

### 2. Mostrar información en HA

Este ejemplo mostrará en la pantalla la información de HA.

Antes que nada, necesitas añadir este dispositivo a HA. De lo contrario, no podrás obtener la información de HA.

Si HA no muestra el dispositivo, deberías ejecutar primero la demo anterior. Después de ejecutar la demo anterior, podrás ver el dispositivo en HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

Y luego, haz clic en **SUBMIT** y **FINISH**.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', marginLeft:'8%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/12.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/13.png" style={{width:'68%', height:'auto'}}/></div>
</div>

Después de instalar ESPHome y añadir un nuevo dispositivo, puedes copiar el siguiente código y pegarlo después de `captive_portal` como se muestra a continuación.

```yaml
# Define font to show info
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myPressure
    attribute: "pressure"
    internal: true

# Display info via SPI
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 30s
    lambda: |-
      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myPressure).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), "%.1f", id(myPressure).state);
```

Instala ese código en tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/15.png" style={{width:1000, height:'auto'}}/></div>

La función del código es obtener **clima**, **temperatura** y **presión** desde HA y mostrarlos en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/39.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si descubres que tu Home Assistant no tiene un componente relacionado con el clima, puedes descargar una integración llamada **Open-Meteo** desde la sección de integraciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>
:::

Cuando veas una respuesta como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/14.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/34.png" style={{width:'80%', height:'auto'}}/></div>
</div>

### 3. Mostrar icono {#ttf}

Este ejemplo mostrará un icono en la pantalla.

Primero, necesitamos instalar un complemento de editor de archivos. Busca **Studio Code Server** y haz clic en él. Haz clic en **INSTALL** y **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

Y <span id="ttf">luego</span>, crea una nueva carpeta llamada **fonts** y descarga este archivo y **ponlo en la carpeta fonts**.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

Puedes copiar el siguiente código y pegarlo después de `captive_portal` como se muestra a continuación.

```yaml
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  #here is the directory to save ttf file
    id: font_mdi_large
    size: 200        # big size icon
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather cloudy
      - "\U000F0592" # weather hail
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # small size icon
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

Cuando veas una respuesta como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/35.png" style={{width:600, height:'auto'}}/></div>

Si quieres usar otros iconos, puedes hacer clic en el botón de abajo para explorar más.

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para ir al sitio web de iconos</button></p>
</a>
</div>

Selecciona el icono que quieras.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

Copia el código y pégalo en la parte de **captive_portal** como en la siguiente imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/42.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/43.png" style={{width:800, height:'auto'}}/></div>

### 4. Mostrar imagen {#image}

Este ejemplo mostrará en la pantalla cualquier imagen que te guste.

Como en el ejemplo anterior, necesitamos instalar **Studio Code Server** y crear una nueva carpeta llamada **image** para guardar la imagen.

Luego pon una imagen en la carpeta **image**. Puedes hacer clic en el botón de abajo para descargar una imagen y hacer la prueba.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

Puedes copiar el siguiente código y pegarlo después de `captive_portal` como se muestra a continuación.

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # the path where you save the image, png or jpg format
    id: myImage
    type: BINARY
    resize: 800x480    # how big you want to show, the biggest size should be as same as ePaper Penal pixel(800x480)
    invert_alpha: true   # invert color

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));
```

Cuando veas una respuesta como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.png" style={{width:600, height:'auto'}}/></div>

## Demo 1. Tomar el panel de Home Assistant como una captura de pantalla

Este ejemplo mostrará en la pantalla la captura de pantalla de HA.

Primero, necesitas instalar un complemento de captura de pantalla **Puppet**, [haz clic aquí para instalarlo.](https://github.com/balloob/home-assistant-addons/tree/main/puppet)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/83.jpg" style={{width:800, height:'auto'}}/></div>

Ten en cuenta que la versión debe ser **igual o superior a 1.11.4**. Después de la instalación, ve a la **página de configuración**. Necesitamos crear un access_token para este complemento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/96.jpg" style={{width:800, height:'auto'}}/></div>

Consulta el siguiente paso para crear un token y pegarlo aquí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/88.jpg" style={{width:800, height:'auto'}}/></div>

Ve al final de la **página Security** y crea un token, luego cópialo y pégalo en el complemento **Puppet**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/85.jpg" style={{width:800, height:'auto'}}/></div>

Recuerda **reiniciar** el complemento Puppet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/95.jpg" style={{width:800, height:'auto'}}/></div>

Al iniciar el complemento se lanzará un nuevo servidor en el puerto 10000. Cualquier ruta que solicites devolverá una captura de pantalla de esa página. Necesitarás especificar el tamaño de la ventana gráfica que deseas.

Por ejemplo, para obtener una captura de pantalla de 1000px x 1000px de tu panel predeterminado, solicita:

```python
# http://192.168.1.191:10000/lovelace/0?viewport=1000x1000(My address)

http://homeassistant.local:10000/lovelace/0?viewport=1000x1000
```

Para reducir la paleta de colores para pantallas E Ink®, puedes añadir el parámetro eink. El valor representa el número de colores (incluido el negro) que se usarán. Por ejemplo, para una pantalla E Ink® de 2 colores:

```python
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&eink=2
```

Si estás usando eink=2, también puedes invertir los colores añadiendo el parámetro invert:

```python
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&eink=2&invert
```

Además, también puedes hacer una captura de pantalla de otra página, por ejemplo la página de **To-do lists** en HA:

```python
http://192.168.1.191:10000/todo?viewport=800x480&eink=2&invert
```

Puedes echar un vistazo al efecto de la captura de pantalla introduciendo este enlace en tu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/92.jpg" style={{width:800, height:'auto'}}/></div>

Copia el siguiente código y pégalo después de `esp32`:

```yaml
# Enable PSRAM support since online_image requires more than the available RAM capacity
psram:
  mode: octal
  speed: 80MHz
```

Puedes copiar el código siguiente y pegarlo después de `captive_portal` como se muestra a continuación.

```yaml
http_request:
  verify_ssl: false
  timeout: 10s
  watchdog_timeout: 15s

online_image:
  - id: dashboard_image
    format: PNG
    type: BINARY
    buffer_size: 30000
    url: http://192.168.1.191:10000/todo?viewport=800x480&eink=2&invert #change this link to your screenshot link
    update_interval: 30s
    on_download_finished:
      - delay: 0ms
      - component.update: main_display

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: main_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: never
    lambda: |-
      it.image(0, 0, id(dashboard_image));
```

Cuando veas una respuesta como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/94.jpg" style={{width:600, height:'auto'}}/></div>

## Demo2. Modo de sueño profundo

:::tip
Durante el modo de sueño profundo, no puedes subir código al dispositivo directamente. Necesitas entrar en el modo de descarga. [Haz clic aquí para saltar a la P3.](#port)
:::

Este ejemplo mostrará cómo usar el modo de sueño profundo para ahorrar energía. Actualiza la información cada 6 horas.

Puedes copiar el código siguiente y pegarlo después de `captive_portal` como se muestra a continuación.

```yaml
globals:
  - id: sleep_counter
    type: int
    restore_value: yes  # key parameter, to use RTC storage
    initial_value: '0'

# Here is deep sleep part
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s  # Device wake up and run 30s (enough to display)
  sleep_duration: 3min  # deep sleep for 3min

interval:
  - interval: 29s  # run this command before the end of run_duration
    then:
      - logger.log: "Entering deep sleep now..."

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 3min
    lambda: |-
      id(sleep_counter) += 1;
      ESP_LOGD("main", "Wakeup count: %d", id(sleep_counter));
      it.printf(100, 100, id(font1), "Wakeup count: %d", id(sleep_counter));
```

Verás un contador. Se incrementará en uno cada vez que se despierte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/90.jpg" style={{width:600, height:'auto'}}/></div>

## Demo 3. Ejemplo integral

:::tip
Para que lo entiendas mejor, te recomendamos encarecidamente que primero ejecutes los usos básicos anteriores.
:::

Este ejemplo demuestra una configuración integral de ESPHome para el kit TRMNL de papel electrónico de 7,5 pulgadas para bricolaje. El código YAML integra múltiples funciones para crear un panel de visualización inteligente e interactivo que funciona a la perfección con Home Assistant.

**Propósito y funcionalidad:**

- La configuración permite que el dispositivo se conecte a Wi-Fi y a Home Assistant, admitiendo tanto API como actualizaciones OTA para una gestión sencilla.

- Configura la pantalla de papel electrónico para mostrar diferentes tipos de información en dos páginas conmutables, controladas por botones físicos.

- El dispositivo lee el voltaje de la batería, calcula el porcentaje de batería y muestra un icono y un valor de batería correspondientes.

- Las condiciones meteorológicas y la temperatura se obtienen de Home Assistant y se muestran con los iconos y unidades apropiados.

- También se muestran la hora y la fecha actuales, sincronizadas con Home Assistant.

Este ejemplo muestra cómo combinar lecturas de sensores, datos de Home Assistant y entrada del usuario para crear una pantalla inteligente siempre encendida y rica en funciones usando ESPHome y el kit TRMNL de papel electrónico de 7,5 pulgadas.

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```yaml
esphome:
  name: obdy
  friendly_name: obdy
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_battery_enable
      - delay: 200ms
      - component.update: battery_voltage
      - component.update: battery_level

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# Enable PSRAM support since online_image requires more than the available RAM capacity
psram:
  mode: octal
  speed: 80MHz

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "j0V30kuJ6Zdij9SU6Ee+7ruwid+7SQOxtinjld2PRc0="

ota:
  - platform: esphome
    password: "db786195ae6f9748f5b57ea9bd1d4161"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Obdy Fallback Hotspot"
    password: "IOfapF7hXq55"

captive_portal:

# Deep-sleep, wake by GPIO4
# deep_sleep:
#   id: deep_sleep_1
#   run_duration: 1min
#   sleep_duration: 60min
#   wakeup_pin: GPIO4
#   wakeup_pin_mode: INVERT_WAKEUP

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

# Fonts
font:
  - file: "gfonts://Inter@700"
    id: small_font
    size: 24
  - file: "gfonts://Inter@700"
    id: mid_font
    size: 36
  - file: "gfonts://Inter@700"
    id: big_font
    size: 180
  - file: "gfonts://Inter@700"
    id: time_font
    size: 96      # for the big time display
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_bat_icon
    size: 24
    glyphs:
      - "\U000F007A"  # mdi-battery-10
      - "\U000F007B"  # mdi-battery-20
      - "\U000F007C"  # mdi-battery-30
      - "\U000F007D"  # mdi-battery-40
      - "\U000F007E"  # mdi-battery-50
      - "\U000F007F"  # mdi-battery-60
      - "\U000F0080"  # mdi-battery-70
      - "\U000F0081"  # mdi-battery-80
      - "\U000F0082"  # mdi-battery-90
      - "\U000F0079"  # mdi-battery
  - file: "fonts/materialdesignicons-webfont.ttf" # <-- 替换成你的字体文件路径
    id: weather_icon_font
    size: 100
    glyphs:
      - "\U000F0599" # weather-sunny
      - "\U000F0595" # weather-partly-cloudy
      - "\U000F0F2F" # weather-cloudy
      - "\U000F0597" # weather-rainy
      - "\U000F0598" # weather-snowy
      - "\U000F059B" # weather-windy
      - "\U000F0594" # weather-fog
      - "\U000F0596" # weather-lightning

globals:
  - id: page_index
    type: int
    restore_value: true
    initial_value: '0'
  - id: battery_glyph
    type: std::string
    restore_value: no
    initial_value: "\"\\U000F0079\""   # default full battery

sensor:
  - platform: adc
    pin: GPIO1
    name: "Battery Voltage"
    id: battery_voltage
    update_interval: 60s
    attenuation: 12db
    filters:
      - multiply: 2.0
  - platform: template
    name: "Battery Level"
    id: battery_level
    unit_of_measurement: "%"
    icon: "mdi:battery"
    device_class: battery
    state_class: measurement
    lambda: 'return id(battery_voltage).state;'
    update_interval: 60s
    on_value:
      then:
        - lambda: |-
            int pct = int(x);
            if (pct <= 10)      id(battery_glyph) = "\U000F007A";
            else if (pct <= 20) id(battery_glyph) = "\U000F007B";
            else if (pct <= 30) id(battery_glyph) = "\U000F007C";
            else if (pct <= 40) id(battery_glyph) = "\U000F007D";
            else if (pct <= 50) id(battery_glyph) = "\U000F007E";
            else if (pct <= 60) id(battery_glyph) = "\U000F007F";
            else if (pct <= 70) id(battery_glyph) = "\U000F0080";
            else if (pct <= 80) id(battery_glyph) = "\U000F0081";
            else if (pct <= 90) id(battery_glyph) = "\U000F0082";
            else                id(battery_glyph) = "\U000F0079";
    filters:
      - calibrate_linear:
          - 4.15 -> 100.0
          - 3.96 -> 90.0
          - 3.91 -> 80.0
          - 3.85 -> 70.0
          - 3.80 -> 60.0
          - 3.75 -> 50.0
          - 3.68 -> 40.0
          - 3.58 -> 30.0
          - 3.49 -> 20.0
          - 3.41 -> 10.0
          - 3.30 -> 5.0
          - 3.27 -> 0.0
      - clamp:
          min_value: 0
          max_value: 100

output:
  - platform: gpio
    pin: GPIO6
    id: bsp_battery_enable

binary_sensor:
  - platform: gpio    # Next page KEY1
    pin:
      number: GPIO2
      mode: INPUT_PULLUP
      inverted: true
    id: key1
    name: "Key1"
    on_press:
      then:
        - lambda: |-
            id(page_index) = (id(page_index) + 1) % 2;
            id(epaper_display).update();

  - platform: gpio     # Prev page KEY2
    pin:
      number: GPIO3
      mode: INPUT_PULLUP
      inverted: true
    id: key2
    name: "Key2"
    on_press:
      then:
        - lambda: |-
            id(page_index) = (id(page_index) - 1 + 2) % 2;
            id(epaper_display).update();

  # - platform: gpio
  #   pin:
  #     number: GPIO5       # KEY3
  #     mode: INPUT_PULLUP
  #     inverted: true
  #   id: key2
  #   name: "Key2"
  #   on_press:
  #     then:

# Home Assistant time
time:
  - platform: homeassistant
    id: ha_time

text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
  - platform: homeassistant
    entity_id: weather.home
    id: temp
    attribute: "temperature"

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin: GPIO38
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: never
    lambda: |-
      // ----------  PAGE 0  ----------
      if (id(page_index) == 0) {
        // Screen dimension constants for easy adjustment
        const int scr_w = 800;
        const int scr_h = 480;
        const int center_x = scr_w / 2; // Center X-coordinate of the screen (400)

        // --- Top-right: Battery Info ---
        // Display the battery icon using an icon font
        it.printf(scr_w - 130, 13, id(font_bat_icon), "%s", id(battery_glyph).c_str());
        // Display the battery percentage text
        it.printf(scr_w - 100, 10, id(small_font), "%.0f%%", id(battery_level).state);

        // --- Draw the vertical separator line ---
        // Draw a vertical line in the middle to separate left and right areas
        it.filled_rectangle(center_x, 100, 2, 280);

        // ==================================================
        //                    LEFT AREA: WEATHER INFO
        // ==================================================
        // Calculate the center X-coordinate of the left area for alignment
        const int left_center_x = center_x / 2; // 200

        // 1. Display the title "Weather" at the top of the left area
        it.printf(left_center_x, 110, id(mid_font), TextAlign::TOP_CENTER, "Weather");

        // 2. Get the weather condition and select the corresponding icon
        std::string weather_condition = id(myWeather).state;
        std::string weather_icon = "\U000F0599"; // Default icon (sunny), as a fallback for unknown states

        if (weather_condition == "partlycloudy") {
          weather_icon = "\U000F0595"; // weather-partly-cloudy
        } else if (weather_condition == "cloudy") {
          weather_icon = "\U000F0F2F"; // weather-cloudy
        } else if (weather_condition == "rainy") {
          weather_icon = "\U000F0597"; // weather-rainy
        } else if (weather_condition == "snowy") {
          weather_icon = "\U000F0598"; // weather-snowy
        } else if (weather_condition == "windy") {
          weather_icon = "\U000F059B"; // weather-windy
        } else if (weather_condition == "fog") {
          weather_icon = "\U000F0594"; // weather-fog
        } else if (weather_condition == "lightning") {
          weather_icon = "\U000F0596"; // weather-lightning
        }
        // Display the weather icon in the center of the left area
        it.printf(left_center_x, 240, id(weather_icon_font), TextAlign::CENTER, "%s", weather_icon.c_str());

        // 3. Display the weather condition text below the icon
        it.printf(left_center_x, 400, id(mid_font), TextAlign::BOTTOM_CENTER, "%s", weather_condition.c_str());


        // ==================================================
        //                    RIGHT AREA: TEMPERATURE INFO
        // ==================================================
        // Calculate the center X-coordinate of the right area for alignment
        const int right_center_x = center_x + (center_x / 2); // 600

        // 1. Display the title "Temperature" at the top of the right area
        it.printf(right_center_x, 110, id(mid_font), TextAlign::TOP_CENTER, "Temperature");

        // 3. Display the temperature reading below the icon, with one decimal place
        float temp_c = stof(id(temp).state);
        double temp_f = temp_c * 9.0 / 5.0 + 32.0;
        it.printf(right_center_x, 250, id(mid_font), TextAlign::CENTER, "%.0f°F", temp_f);
        it.printf(right_center_x, 380, id(mid_font), TextAlign::CENTER, "%.1f°C", temp_c);
      }
      // ----------  PAGE 1  ----------
      else{
        // Battery top-right
        it.printf(670, 13, id(font_bat_icon), "%s", id(battery_glyph).c_str());
        it.printf(700, 10, id(small_font), "%.0f%%", id(battery_level).state);

        auto now = id(ha_time).now();
        struct tm timeinfo = now.to_c_tm();

        // centering time HH:MM
        char timeStr[6];
        strftime(timeStr, sizeof(timeStr), "%H:%M", &timeinfo);
        it.printf(400, 180, id(time_font), TextAlign::CENTER, timeStr);

        // Date: Day of week
        const char *weekday[] = {"Sun","Mon","Tue","Wed","Thu","Fri","Sat"};
        const char *wday = weekday[timeinfo.tm_wday];

        // Date: month - day
        char dateStr[12];
        strftime(dateStr, sizeof(dateStr), "%b %d", &timeinfo);  // e.g. Jun 15

        // Day of the week + date below the time
        it.printf(400, 280, id(mid_font), TextAlign::CENTER, "%s, %s", wday, dateStr);
      }
```

</details>

Cuando veas una respuesta como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_demo3_byod.jpg" style={{width:800, height:'auto'}}/></div>

## Preguntas frecuentes

### P1: ¿Por qué no hay datos?

En este caso, debes ir a Settings -> Devices & Services -> Integrations para **RECONGFIGURE** el dispositivo. ¿No has encontrado tu ePaper Penal? Intenta reiniciar HA.

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### P2: ¿Por qué no puedo obtener esos datos en Home Assistant? {#port}

En este caso, debes ir a Settings -> Devices & Services -> Integrations para **ADD** tu dispositivo a HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

### <span id="deepmode">P3</span>: ¿Cómo puedo cargar un nuevo programa cuando el dispositivo está en modo de suspensión profunda?

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/103.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/102.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Cuando el dispositivo está en modo de suspensión profunda, no puedes cargar un nuevo programa directamente.

1. Primero, asegúrate de que el dispositivo esté encendido. Luego, mantén presionado el botón **Boot** ubicado junto al puerto USB-C en el XIAO ESP32-S3 Plus.

2. Mientras mantienes presionado el botón **Boot**, presiona el botón **Reset** una vez y luego suelta el botón **Boot**.

3. Después de eso, apaga el interruptor de la batería y desconecta el cable de alimentación.

4. Finalmente, vuelve a conectar el cable y carga un nuevo programa.

### <span id="Q4">P4</span>: ¿El kit TRMNL 7.5inch(OG) DIY no puede conectarse a tu ordenador?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

Intenta desconectarlo y volverlo a conectar varias veces, o simplemente instala el controlador según las indicaciones.

### <span id="Q5">P5</span>: ¿Falló la carga del programa por Wi‑Fi?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/74.png" style={{width:800, height:'auto'}}/></div>

En este caso, tu ePaper penal está sin conexión o en modo de suspensión profunda. Por favor, ponlo en línea o despiértalo.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
