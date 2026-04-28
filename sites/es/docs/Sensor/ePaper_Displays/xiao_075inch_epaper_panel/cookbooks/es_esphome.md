---
description: Recetario completo de ESPHome / Home Assistant para el Panel ePaper XIAO de 7,5": flashear el firmware, integrarlo con Home Assistant y crear paneles en YAML.
title: Recetario de ESPHome
keywords:
  - pantalla ePaper
  - ESPHome
  - Home Assistant
  - XIAO ESP32-C3
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover.webp
slug: /xiao_075inch_epaper_panel_esphome
sidebar_position: 2
last_update:
  date: 04/28/2026
  author: Allen
createdAt: '2025-03-25'
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recetario de ESPHome: Panel ePaper XIAO de 7,5"

:::tip Lee primero la guía principal de ESPHome
Esta página es el **recetario de ESPHome específico para el Panel XIAO de 7,5"**. La plantilla compartida — elegir una ruta de flasheo, el esqueleto YAML genérico, conectarse a Home Assistant — se encuentra en **[Work with ESPHome](/es/epaper_work_with_esphome)**. Échale un vistazo primero si eres nuevo en ESPHome en los ePaper de Seeed; esta página se centra en lo específico del panel basado en XIAO ESP32-C3.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/201.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

## Introducción a Home Assistant

Home Assistant es una potente plataforma de automatización del hogar de código abierto que te permite controlar y supervisar tus dispositivos domésticos inteligentes desde una única interfaz unificada. Actúa como el concentrador central de tu hogar inteligente, lo que te permite automatizar rutinas, supervisar sensores y crear un entorno doméstico más inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:900, height:'auto'}}/></div>

### ¿Por qué Home Assistant?

- **Control local**: A diferencia de muchas soluciones basadas en la nube, Home Assistant se ejecuta localmente en tu red, lo que garantiza que tus datos permanezcan privados y que tus automatizaciones funcionen incluso sin acceso a Internet.

- **Amplia compatibilidad de dispositivos**: Home Assistant se integra con miles de dispositivos y servicios de hogar inteligente diferentes, lo que lo hace muy versátil y preparado para el futuro.

- **Automatización potente**: Crea reglas de automatización sofisticadas que puedan responder a diversos desencadenantes como la hora, estados de dispositivos, lecturas de sensores y más.

- **Panel personalizable**: Diseña tu propia interfaz de usuario para mostrar la información que más te importa.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Más información 🖱️</font></span></strong></a>
</div>

### ¿Por qué una pantalla de tinta electrónica con Home Assistant?

El Panel ePaper XIAO de 7,5" es un excelente compañero para Home Assistant por varias razones:

1. **Eficiencia energética**: La pantalla de tinta electrónica solo consume energía al actualizar el contenido, lo que la hace perfecta para mostrar información persistente como pronósticos del tiempo, eventos del calendario o el estado del sistema.

2. **Visibilidad clara**: A diferencia de las pantallas LCD, las pantallas de tinta electrónica se leen fácilmente en cualquier condición de iluminación, incluida la luz solar directa, lo que las hace ideales para paneles de control doméstico montados en la pared.

3. **Larga duración de la batería**: Combinada con el modo de sueño profundo, la pantalla puede funcionar durante meses con una sola carga de batería y seguir proporcionando información valiosa de un vistazo.

4. **Integración flexible**: A través de ESPHome, la pantalla se integra perfectamente con Home Assistant, lo que te permite mostrar cualquier dato de tu sistema de hogar inteligente en un formato elegante y siempre visible.

Estas ventajas hacen que el Panel ePaper XIAO de 7,5" sea una opción ideal para crear una pantalla de información siempre encendida y de bajo consumo para tu configuración de Home Assistant.

### Integración con ESPHome

ESPHome es una herramienta de creación de firmware de código abierto diseñada específicamente para dispositivos ESP8266/ESP32. Te permite crear firmware personalizado usando sencillos archivos de configuración YAML, que luego pueden flashearse en tu dispositivo. Para el Panel ePaper XIAO de 7,5", ESPHome actúa como el middleware esencial que habilita la comunicación entre el dispositivo y Home Assistant.

El sistema funciona convirtiendo tu configuración YAML en un firmware totalmente funcional que se ejecuta en tu dispositivo ESP. Este firmware se encarga de todas las tareas complejas de conectarse a tu red, comunicarse con Home Assistant y controlar la pantalla ePaper. Combinado con Home Assistant, ESPHome proporciona una plataforma robusta para crear pantallas y controles de automatización del hogar sofisticados.

Veamos cómo configurarlo y sacar el máximo partido a esta pantalla versátil.

## Primeros pasos

Antes de que comience el contenido del tutorial de este artículo, es posible que necesites tener listo el siguiente hardware.

### Materiales necesarios

<div class="table-center">
  <table align="center">
    <tr>
      <th>Panel ePaper XIAO de 7,5"</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
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

:::tip instalar Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- **[Primeros pasos con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)**
- **[Primeros pasos con Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)**
- **[Primeros pasos con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)**

Si no estás usando un producto de Seeed Studio, también puedes consultar y aprender cómo instalar Home Assistant para otros productos en el sitio web oficial de Home Assistant.

- **[Instalación de Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Paso 1. Instalar ESPHome

Si ya has instalado ESPHome, puedes omitir este paso.

Ve a **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

Busca ESPHome y haz clic en él. Haz clic en **INSTALL** y **START**.

:::tip
Si no puedes encontrar ESPHome en la tienda de complementos, asegúrate de que estás usando una instalación de Home Assistant que admita complementos (como Home Assistant OS o instalaciones supervisadas). Para otros tipos de instalación (como Home Assistant Container), es posible que tengas que ejecutar ESPHome Device Builder de forma independiente usando Docker. Consulta la [documentación oficial de ESPHome](https://esphome.io/guides/getting_started_hassio) para más detalles.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

Después de eso, ESPHome Builder aparecerá en la barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### Paso 2. Añadir un nuevo dispositivo

Ve a ESPHome y haz clic en **NEW DEVICE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

Ponle al dispositivo el nombre que quieras y haz clic en **NEXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/2.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Después de crear un nuevo dispositivo, haz clic en **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

### Paso 3. Instalar el firmware

Este es un ejemplo muy básico y mostrará "Hello World!" en la pantalla.

**El objetivo principal es mostrarte diferentes formas de instalar firmware en el dispositivo.**

Después de instalar ESPHome y añadir un nuevo dispositivo, puedes copiar el código de abajo y pegarlo después de `captive_portal` como se muestra a continuación.

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 30s
    lambda: |-
      it.print(0, 0, id(font1), "Hello World!");
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/5.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **INSTALL** para instalar el código en el dispositivo y verás la siguiente imagen.

<Tabs>
<TabItem value='Instalar a través del navegador'>

:::tip
Si tu Home Assistant Host (Raspberry PI/Green/Yellow, etc.) está lejos de ti, recomendamos usar este método. Puedes instalarlo con el ordenador que tengas a mano.
:::

Primero, necesitas hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre este sitio web donde subiremos el firmware al panel de ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Vuelve a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecciona Factory format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa un cable USB para **conectar el panel de ePaper a tu ordenador** y haz clic en **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecciona usbmodemxxx (en Windows es COMxxx) y haz clic en connect. [¿Has encontrado un problema? Haz clic aquí.](#Q5)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás 'Hello world!' en la pantalla ～

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>

<TabItem value='Instalar a través del host'>

:::tip
Si tu Home Assistant Host (Raspberry PI/Green/Yellow, etc.) está cerca, recomendamos usar este método ya que es más sencillo.
:::

Antes de instalar el código en el dispositivo, necesitas usar un cable USB para **conectar este dispositivo a tu Raspberry Pi o HA Green (Yellow), etc.** que esté ejecutando Home Assistant.

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

<TabItem value='Instalar a través de Wi-Fi'>

:::tip
Esta es la forma más sencilla, pero con la premisa de que, al instalar el programa por primera vez, primero debes subir el programa al Panel de ePaper usando el método de la izquierda. Después de eso, puedes subirlo vía wifi. Además, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` correctamente configuradas con claves de cifrado válidas para que este método funcione.
:::

De esta manera, no necesitas conectar el panel de ePaper a nada, solo asegúrate de que esté en línea.

Haz clic en la opción y entonces el firmware se instalará automáticamente en el panel de ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás un mensaje como en la siguiente imagen. Si falla, puede deberse a una señal débil. Por favor, acerca el dispositivo a tu router. [¿Has encontrado un problema? Haz clic aquí.](#Q5)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>
</Tabs>

## Usos básicos

### 1. Mostrar forma

Este ejemplo mostrará una forma en la pantalla.

Después de instalar ESPHome y añadir un nuevo dispositivo, puedes copiar el código de abajo y pegarlo en la parte de **captive_portal** como en la siguiente imagen.

<details>

<summary> Haz clic aquí para copiar el código. </summary>

```yaml
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO3
    dc_pin: GPIO5
    reset_pin: GPIO2
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

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/40.png" style={{width:800, height:'auto'}}/></div>

Cuando veas un mensaje como en la siguiente imagen, significa que el código se está ejecutando correctamente.

También puedes [hacer clic aquí](https://esphome.io/components/display/) para ver más usos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/37.png" style={{width:600, height:'auto'}}/></div>

### 2. Mostrar información en HA

Este ejemplo mostrará en la pantalla la información de HA.

En primer lugar, necesitas añadir este dispositivo a HA. De lo contrario, no podrás obtener la información de HA.

Si HA no muestra el dispositivo, deberías ejecutar primero la demostración anterior. Después de ejecutar la demostración anterior, podrás ver el dispositivo en HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

Y luego, haz clic en **SUBMIT** y **FINISH**.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', marginLeft:'8%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/12.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/13.png" style={{width:'68%', height:'auto'}}/></div>
</div>

Después de instalar ESPHome y añadir un nuevo dispositivo, puedes copiar el código de abajo y pegarlo después de `captive_portal` como se muestra a continuación.

<details>

<summary>Click here to preview the full code</summary>

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
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
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

</details>

Instala ese código en tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/15.png" style={{width:1000, height:'auto'}}/></div>

La función del código es obtener **clima**, **temperatura** y **presión** de HA y mostrarlos en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/39.png" style={{width:1000, height:'auto'}}/></div>

Cuando veas un mensaje como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/14.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/34.png" style={{width:'80%', height:'auto'}}/></div>
</div>

### 3. Mostrar icono {#ttf}

Este ejemplo mostrará un icono en la pantalla.

Primero, necesitamos instalar el complemento File Editor. Busca **Studio Code Server** y haz clic en él. Haz clic en **INSTALL** y **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

Y <span id="ttf">luego</span>, crea una nueva carpeta llamada **fonts** y descarga este archivo y **ponlo en la carpeta fonts**.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

Después de instalar ESPHome y añadir un nuevo dispositivo, puedes copiar el siguiente código y pegarlo después de `captive_portal` como se muestra a continuación.

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

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
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/21.png" style={{width:800, height:'auto'}}/></div>

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

Al igual que en el ejemplo anterior, necesitamos instalar **Studio Code Server** y crear una nueva carpeta llamada **image** para guardar la imagen.

Luego coloca una imagen en la carpeta **image**. Puedes hacer clic en el botón de abajo para descargar una imagen y hacer la prueba.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

Después de instalar ESPHome y añadir un nuevo dispositivo, puedes copiar el siguiente código y pegarlo después de `captive_portal` como se muestra a continuación.

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```yaml

image:
  - file: /config/esphome/image/wifi.jpg    # the path where you save the image, png or jpg format
    id: myImage
    type: BINARY
    resize: 800x480    # how big you want to show, the biggest size should be as same as ePaper Penal pixel(800x480)
    invert_alpha: true   # invert color

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/22.png" style={{width:800, height:'auto'}}/></div>

Cuando veas una respuesta como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.png" style={{width:600, height:'auto'}}/></div>

## Demo 1. Tomar el panel de Home Assistant como una captura de pantalla

Este ejemplo mostrará en la pantalla la captura de pantalla de HA.

Primero, necesitas instalar un complemento de captura de pantalla **Puppet**, [haz clic aquí para instalarlo.](https://github.com/balloob/home-assistant-addons/tree/main/puppet)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/83.jpg" style={{width:800, height:'auto'}}/></div>

Ten en cuenta que la versión debe ser **igual o superior a 1.11.4**. Después de la instalación, ve a la **página Configuration**. Necesitamos crear un access_token para este complemento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/96.jpg" style={{width:800, height:'auto'}}/></div>

Consulta el siguiente paso para crear un token y pegarlo aquí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/88.jpg" style={{width:800, height:'auto'}}/></div>

Ve al final de la **página Security** y crea un token, luego cópialo y pégalo en el complemento **Puppet**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/85.jpg" style={{width:800, height:'auto'}}/></div>

Recuerda **reiniciar** el complemento Puppet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/95.jpg" style={{width:800, height:'auto'}}/></div>

Al iniciar el complemento se lanzará un nuevo servidor en el puerto 10000. Cualquier ruta que solicites devolverá una captura de pantalla de esa página. Necesitarás especificar el tamaño de la ventana gráfica que quieras.

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

Puedes ver el efecto de la captura de pantalla introduciendo este enlace en tu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/92.jpg" style={{width:800, height:'auto'}}/></div>

Después de instalar ESPHome y añadir un nuevo dispositivo, puedes copiar el siguiente código y pegarlo después de `captive_portal` como se muestra a continuación.

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

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
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    id: main_display
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: never
    lambda: |-
      it.image(0, 0, id(dashboard_image));

```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/93.jpg" style={{width:800, height:'auto'}}/></div>

Cuando veas una respuesta como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/94.jpg" style={{width:600, height:'auto'}}/></div>

## Demo2. Modo de suspensión profunda

:::tip
Durante el modo de suspensión profunda, no puedes cargar código al dispositivo directamente. Necesitas entrar en el modo de descarga.[Haz clic aquí para ir a la P3.](#port)
:::

Este ejemplo mostrará cómo usar el modo de suspensión profunda para ahorrar energía. Actualiza la información cada 6 horas. Una batería de 2000 mAh puede durar alrededor de 3 meses.

Después de instalar ESPHome y añadir un nuevo dispositivo, puedes copiar el siguiente código y pegarlo después de `captive_portal` como se muestra a continuación.

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

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
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 3min
    lambda: |-
      id(sleep_counter) += 1;
      ESP_LOGD("main", "Wakeup count: %d", id(sleep_counter));
      it.printf(100, 100, id(font1), "Wakeup count: %d", id(sleep_counter));
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/89.jpg" style={{width:800, height:'auto'}}/></div>

Verás un contador. Se incrementará en uno cada vez que se despierte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/90.jpg" style={{width:600, height:'auto'}}/></div>

## Demo 3. Ejemplo completo

:::tip
Para que lo entiendas mejor, te recomendamos encarecidamente que primero ejecutes los usos básicos anteriores.
:::

Este ejemplo mostrará cómo obtener información meteorológica e información del calendario desde HA y mostrarlas en la pantalla. Además, utilizará el **modo de suspensión profunda** para ahorrar energía. Actualiza la información cada 6 horas. Una batería de 2000 mAh puede durar alrededor de 3 meses.

Primero, necesitas comprobar si tienes el componente de clima en HA. Normalmente, tendrás uno cuando instales HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/24.png" style={{width:800, height:'auto'}}/></div>

También puedes ir a **Developer Tools -> STATES** para comprobar si tienes información meteorológica en HA. Aquí está la información que obtendrás más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/25.png" style={{width:800, height:'auto'}}/></div>

En segundo lugar, necesitas instalar el componente de calendario en HA.

Ve a **Settings** -> **Devices & Services** -> **Integrations** -> **Add Integration**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/28.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/29.png" style={{width:800, height:'auto'}}/></div>

Selecciona **Local Calendar** y haz clic en el botón **SUBMIT**.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/30.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/31.png" style={{width:'95%', height:'auto'}}/></div>
</div>

Después de eso, verás el Local Calendar en la parte Configured y en tu barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/32.png" style={{width:800, height:'auto'}}/></div>

Haz clic en Calendar en tu barra lateral y crea 3 nuevos calendarios llamados **calendar**, **epaper_event** y **new_calendar**. También puedes usar otros nombres, pero por favor mantén el mismo nombre en tu código más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/27.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/26.png" style={{width:800, height:'auto'}}/></div>

:::tip
Antes de copiar el código, por favor coloca [wifi.jpg](#imagen), [archivo ttf de icono y archivo ttf de fuente](#ttf) en la carpeta **image** y en la carpeta **fonts**.
:::

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```yaml

esphome:
  name: dashboard
  friendly_name: dashboard

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "jBgx0v+Y9eKiQmYTk0SCnHgtDowNDZqgFU26Z2VTYzM="

ota:
  - platform: esphome
    password: "9f78b53ef216c5d689f7408bb1ebe728"

# -------------------------------------- Keep your code above, change your code below --------------------------------------

globals:
  - id: wifi_status
    type: int
    restore_value: no
    initial_value: "0"
  - id: first_update_done
    type: bool
    restore_value: no
    initial_value: "false"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  on_connect:
    then:
      - lambda: |-
          id(wifi_status) = 1;
  on_disconnect:
    then:
      - lambda: |-
          id(wifi_status) = 0;


captive_portal:

# Here is deep sleep part
deep_sleep:
  id: deep_sleep_1
  run_duration: 1min  # Device wake up and run 60s (enough to pull data and update)
  sleep_duration: 60min  # deep sleep for 1h

script:
  - id: update_display
    then:
      - component.update: my_display

interval:
  # Condition: wifi connected && data retrieved && first time
  - interval: 10s  # Check every second
    then:
      - if:
          condition:
            and:
              - wifi.connected:
              - lambda: "return !id(ha_calendar_event_1).state.empty();"
              - lambda: "return !id(first_update_done);"
          then:
            - lambda: |-
                ESP_LOGD("Display", "Updating Display...");
            - script.execute: update_display  # Refresh immediately
            - lambda: "id(first_update_done) = true;"
  - interval: 59s  # run this command before 1s of run_duration end
    then:
      - logger.log: "Entering deep sleep now..."


image:
  - file: image/wifi.jpg
    type: BINARY
    id: esphome_logo
    resize: 400x240
    invert_alpha: true

# Connect to Home Assistant to get time
time:
  - platform: homeassistant
    id: homeassistant_time

text_sensor:
  - platform: homeassistant
    id: ha_calendar_event_1
    entity_id: calendar.calendar
    attribute: "message"
  - platform: homeassistant
    id: ha_calendar_start_time_1
    entity_id: calendar.calendar
    attribute: "start_time"
  - platform: homeassistant
    id: ha_calendar_end_time_1
    entity_id: calendar.calendar
    attribute: "end_time"

  - platform: homeassistant
    id: ha_calendar_event_2
    entity_id: calendar.epaper_event
    attribute: "message"
  - platform: homeassistant
    id: ha_calendar_start_time_2
    entity_id: calendar.epaper_event
    attribute: "start_time"
  - platform: homeassistant
    id: ha_calendar_end_time_2
    entity_id: calendar.epaper_event
    attribute: "end_time"

  - platform: homeassistant
    id: ha_calendar_event_3
    entity_id: calendar.new_calendar
    attribute: "message"
  - platform: homeassistant
    id: ha_calendar_start_time_3
    entity_id: calendar.new_calendar
    attribute: "start_time"
  - platform: homeassistant
    id: ha_calendar_end_time_3
    entity_id: calendar.new_calendar
    attribute: "end_time"

  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myWeather
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: temp
    attribute: "temperature"
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: humi
    attribute: "humidity"
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: press
    attribute: "pressure"
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: wind
    attribute: "wind_speed"

font:
  - file: "fonts/Montserrat-Black.ttf"
    id: web_font
    size: 20
  - file: "fonts/Montserrat-Black.ttf"
    id: data_font
    size: 30
  - file: "fonts/Montserrat-Black.ttf"
    id: sensor_font
    size: 22

  - file: "gfonts://Inter@700" #
    id: font1
    size: 24

  - file: 'fonts/materialdesignicons-webfont.ttf' # Directory to save ttf file
    id: font_mdi_large
    size: 200
    glyphs: &mdi-weather-glyphs # https://pictogrammers.com/library/mdi/
      - "\U000F050F" # Thermometer
      - "\U000F058E" # Humidity
      - "\U000F059D" # Wind speed
      - "\U000F0D60" # Atmospheric pressure
      - "\U000F0590" # Cloudy weather
      - "\U000F0596" # Rainy weather
      - "\U000F0598" # Snowy weather
      - "\U000F0599" # Sunny weather
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_weather # Copy the above icon and change the size to 40
    size: 200
    glyphs: *mdi-weather-glyphs
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: img_font_sensor # Copy the above icon and change the size to 40
    size: 70
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    id: my_display
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 50s
    lambda: |-
      if(id(wifi_status) == 0){
        it.image(180, 0, id(esphome_logo));
        it.print(230, 300, id(data_font), "WI-FI CONNECTING");
      }else{
        // Draw weather images here
        std::string weather_string = id(myWeather).state.c_str();
        if(weather_string == "rainy" || weather_string == "lightning" || weather_string == "pouring"){
          // Draw rainy weather image
          it.printf(120, 85, id(font_weather), TextAlign::CENTER, "\U000F0596");
        }else if(weather_string == "snowy"){
          // Draw snowy weather image
          it.printf(120, 85, id(font_weather), TextAlign::CENTER, "\U000F0598");
        }else if(weather_string == "sunny" || weather_string == "windy"){
          // Draw sunny weather image
          it.printf(120, 85, id(font_weather), TextAlign::CENTER, "\U000F0599");
        }else{
          // Draw cloudy weather image
          it.printf(120, 85, id(font_weather), TextAlign::CENTER, "\U000F0590");
        }

        auto time_now = id(homeassistant_time).now();
        // Month conversion
        const char* months[] = {
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        };
        const char* month_str = months[time_now.month - 1];  // Month index starts from 0
        // Get the day
        int day = time_now.day_of_month;
        // Draw the date
        it.printf(250, 110, id(data_font), "%s %d", month_str, day);
        // Get the day of the week
        const char* days[] = {"Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
        const char* day_of_week = days[time_now.day_of_week];
        it.printf(250, 70, id(data_font), "%s", day_of_week);

        int x = 20, y = 180, w = 180, h = 120, r = 10, thickness = 4;
        // Draw four borders
        it.filled_rectangle(x + r, y, w - 2 * r, thickness); // Top border
        it.filled_rectangle(x + r, y + h - thickness, w - 2 * r, thickness); // Bottom border
        it.filled_rectangle(x, y + r, thickness, h - 2 * r); // Left border
        it.filled_rectangle(x + w - thickness, y + r, thickness, h - 2 * r); // Right border
        // Draw four rounded corners
        it.filled_circle(x + r, y + r, r); // Top-left corner
        it.filled_circle(x + w - r, y + r, r); // Top-right corner
        it.filled_circle(x + r, y + h - r, r); // Bottom-left corner
        it.filled_circle(x + w - r, y + h - r, r); // Bottom-right corner
        // Fill the inside with black to form a border
        it.filled_rectangle(x + thickness, y + thickness, w - 2 * thickness, h - 2 * thickness, COLOR_OFF);
        // Temperature
        it.printf(x+10, y+10, id(sensor_font), "Temperature");
        it.printf(x+45, y+75, id(img_font_sensor), TextAlign::CENTER, "\U000F050F");
        // Get temperature data
        it.printf(x+75,y+65, id(data_font), "%s°F", id(temp).state.c_str());

        x = 220;
        y = 180;
        // Draw four borders
        it.filled_rectangle(x + r, y, w - 2 * r, thickness); // Top border
        it.filled_rectangle(x + r, y + h - thickness, w - 2 * r, thickness); // Bottom border
        it.filled_rectangle(x, y + r, thickness, h - 2 * r); // Left border
        it.filled_rectangle(x + w - thickness, y + r, thickness, h - 2 * r); // Right border
        // Draw four rounded corners
        it.filled_circle(x + r, y + r, r); // Top-left corner
        it.filled_circle(x + w - r, y + r, r); // Top-right corner
        it.filled_circle(x + r, y + h - r, r); // Bottom-left corner
        it.filled_circle(x + w - r, y + h - r, r); // Bottom-right corner
        // Fill the inside with black to form a border
        it.filled_rectangle(x + thickness, y + thickness, w - 2 * thickness, h - 2 * thickness, COLOR_OFF);
        // Humidity
        it.printf(x+10, y+10, id(sensor_font), "Humidity");
        it.printf(x+45, y+75, id(img_font_sensor), TextAlign::CENTER, "\U000F058E");
        // Get humidity data
        it.printf(x+75,y+65, id(data_font), "%s%%", id(humi).state.c_str());

        x = 20;
        y = 320;
        // Draw four borders
        it.filled_rectangle(x + r, y, w - 2 * r, thickness); // Top border
        it.filled_rectangle(x + r, y + h - thickness, w - 2 * r, thickness); // Bottom border
        it.filled_rectangle(x, y + r, thickness, h - 2 * r); // Left border
        it.filled_rectangle(x + w - thickness, y + r, thickness, h - 2 * r); // Right border
        // Draw four rounded corners
        it.filled_circle(x + r, y + r, r); // Top-left corner
        it.filled_circle(x + w - r, y + r, r); // Top-right corner
        it.filled_circle(x + r, y + h - r, r); // Bottom-left corner
        it.filled_circle(x + w - r, y + h - r, r); // Bottom-right corner
        // Fill the inside with black to form a border
        it.filled_rectangle(x + thickness, y + thickness, w - 2 * thickness, h - 2 * thickness, COLOR_OFF);
        // Air Pressure
        it.printf(x+10, y+10, id(sensor_font), "Air Pressure");
        it.printf(x+45, y+75, id(img_font_sensor), TextAlign::CENTER, "\U000F0D60");
        // Get atmospheric pressure data
        it.printf(x+85,y+50, id(data_font), "%s", id(press).state.c_str());
        it.printf(x+85,y+78, id(sensor_font), "inHg");

        x = 220;
        y = 320;
        // Draw four borders
        it.filled_rectangle(x + r, y, w - 2 * r, thickness); // Top border
        it.filled_rectangle(x + r, y + h - thickness, w - 2 * r, thickness); // Bottom border
        it.filled_rectangle(x, y + r, thickness, h - 2 * r); // Left border
        it.filled_rectangle(x + w - thickness, y + r, thickness, h - 2 * r); // Right border
        // Draw four rounded corners
        it.filled_circle(x + r, y + r, r); // Top-left corner
        it.filled_circle(x + w - r, y + r, r); // Top-right corner
        it.filled_circle(x + r, y + h - r, r); // Bottom-left corner
        it.filled_circle(x + w - r, y + h - r, r); // Bottom-right corner
        // Fill the inside with black to form a border
        it.filled_rectangle(x + thickness, y + thickness, w - 2 * thickness, h - 2 * thickness, COLOR_OFF);
        // Wind Speed
        it.printf(x+10, y+10, id(sensor_font), "Wind Speed");
        it.printf(x+45, y+75, id(img_font_sensor), TextAlign::CENTER, "\U000F059D");
        // Get wind speed data
        it.printf(x+85,y+50, id(data_font), "%s", id(wind).state.c_str());
        it.printf(x+85,y+78, id(sensor_font), "mph");

        // Draw a vertical line
        it.filled_rectangle(430, 30, 5, 430);
        // Right section
        it.printf(540, 40, id(data_font), "Calendar");

        // Define event structure
        struct Event {
            std::string message;
            std::string start_time;
            std::string end_time;
            time_t start_timestamp;
        };

        // Parse time string to time_t (UNIX timestamp)
        auto parse_time = [](const std::string &time_str) -> time_t {
            struct tm timeinfo = {};
            if (strptime(time_str.c_str(), "%Y-%m-%d %H:%M:%S", &timeinfo) == nullptr) {
                return 0;  // Invalid time
            }
            return mktime(&timeinfo);
        };

        // Create event list
        std::vector<Event> events = {
            {id(ha_calendar_event_1).state, id(ha_calendar_start_time_1).state, id(ha_calendar_end_time_1).state, parse_time(id(ha_calendar_start_time_1).state)},
            {id(ha_calendar_event_2).state, id(ha_calendar_start_time_2).state, id(ha_calendar_end_time_2).state, parse_time(id(ha_calendar_start_time_2).state)},
            {id(ha_calendar_event_3).state, id(ha_calendar_start_time_3).state, id(ha_calendar_end_time_3).state, parse_time(id(ha_calendar_start_time_3).state)}
        };
        ESP_LOGD("myCalendar", "Start Time: %s -> %ld", id(ha_calendar_start_time_1).state.c_str(), parse_time(id(ha_calendar_start_time_1).state));
        ESP_LOGD("myCalendar", "Start Time: %s -> %ld", id(ha_calendar_start_time_2).state.c_str(), parse_time(id(ha_calendar_start_time_2).state));
        ESP_LOGD("myCalendar", "Start Time: %s -> %ld", id(ha_calendar_start_time_3).state.c_str(), parse_time(id(ha_calendar_start_time_3).state));

        // Filter invalid events (start_timestamp == 0)
        events.erase(std::remove_if(events.begin(), events.end(), [](const Event &e) { return e.start_timestamp == 0; }), events.end());

        // Sort by `start_timestamp` (earliest to latest)
        std::sort(events.begin(), events.end(), [](const Event &a, const Event &b) {
            return a.start_timestamp < b.start_timestamp;
        });

        // Define a function to format time
        auto format_time = [](std::string time_str) -> std::string {
            struct tm timeinfo;
            if (strptime(time_str.c_str(), "%Y-%m-%d %H:%M:%S", &timeinfo) == nullptr) {
                return "Invalid";
            }
            char buffer[10];
            strftime(buffer, sizeof(buffer), "%I:%M%p", &timeinfo); // Convert to 12-hour format
            return std::string(buffer);
        };
        // Parse date
        auto format_date = [](const std::string &time_str) -> std::string {
            struct tm timeinfo = {};
            if (strptime(time_str.c_str(), "%Y-%m-%d %H:%M:%S", &timeinfo) == nullptr) {
                return "Invalid";
            }
            char buffer[6];  // Need to store "MM-DD\0"
            strftime(buffer, sizeof(buffer), "%m-%d", &timeinfo);
            return std::string(buffer);
        };

        // Draw events
        int even_x_start_offset = 460;
        int even_y_start_offset = 80;
        for (const auto &event : events) {
          if(even_y_start_offset >= 420){
            break;
          }

          // Format time
          std::string formatted_date = format_date(event.start_time);
          std::string formatted_start_time = format_time(event.start_time);
          std::string formatted_end_time = format_time(event.end_time);

          // Combine time range string
          std::string time_range = formatted_start_time + " - " + formatted_end_time;
          time_range = formatted_date + "  " + time_range;
          if(formatted_start_time == "Invalid" || formatted_end_time == "Invalid"){
            time_range.clear();
          }
          // Display time range, e.g., "10:00AM - 11:00AM"
          it.printf(even_x_start_offset, even_y_start_offset, id(sensor_font), "%s", time_range.c_str());
          even_y_start_offset += 30;
          // Display event name
          it.printf(even_x_start_offset, even_y_start_offset, id(sensor_font), "%s", event.message.c_str());
          even_y_start_offset += 40;
        }
      }


```

</details>

Cuando veas la respuesta como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/38.png" style={{width:600, height:'auto'}}/></div>

## Preguntas frecuentes (FAQ)

#### P1: ¿Por qué no hay datos?

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/104.JPG" style={{width:'80%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.png" style={{width:'100%', height:'auto'}}/></div>
</div>

En este caso, debes ir a Settings -> Devices & Services -> Integrations para **RECONGFIGURE** el dispositivo. ¿No has encontrado tu ePaper Panel? Intenta reiniciar HA.

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

#### P2: ¿Por qué no puedo obtener esos datos en Home Assistant? {#port}

En este caso, debes ir a Settings -> Devices & Services -> Integrations para **ADD** tu dispositivo a HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

#### <span id="deepmode">P3</span>: ¿Cómo puedo cargar un nuevo programa cuando el dispositivo está en modo de sueño profundo?

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/103.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/102.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Cuando el dispositivo está en modo de sueño profundo, no puedes cargar un nuevo programa directamente.

1. Primero, asegúrate de que el dispositivo esté encendido y luego presiona el botón **Boot** en la parte posterior de la placa.

2. Haz clic una vez en el botón **Reset** y suelta el botón **Boot**.

3. Después de eso, apaga el interruptor de la batería y desconecta el cable de alimentación.

4. Por último, vuelve a conectar el cable y carga un nuevo programa.

#### P4: ¿Cuánto dura la batería?

:::tip
Recuerda encender el botón de la batería al cargar. De lo contrario, la batería no podrá cargarse.
:::

Según nuestras pruebas, actualizando la pantalla cada 6 horas, la batería durará alrededor de 3 meses en modo de sueño profundo.

#### <span id="Q5">P5</span>: ¿El ePaper Panel no puede conectarse a tu ordenador?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

Intenta desconectarlo y volver a conectarlo varias veces, o simplemente instala el controlador según las indicaciones.

#### <span id="Q6">P6</span>: ¿Falló la carga del programa por Wi‑Fi?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/74.png" style={{width:800, height:'auto'}}/></div>

En este caso, tu ePaper Panel está sin conexión o en modo de sueño profundo. Por favor, ponlo en línea o despiértalo.

## Recursos

- **[STP]**: [Modelo 3D de la carcasa](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF del esquema de la placa controladora de ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

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
