---
description: Recetario de ESPHome para reTerminal E1001 / E1002 / E1003 / E1004: integración básica con Home Assistant, primer panel, configuración de Wi‑Fi, firmware precompilado en ZIP.
title: Recetario de ESPHome - Básico (reTerminal E Serie)
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_esphome
aliases:
  - /reterminal_e10xx_esphome
sku: 100017057,100073581
sidebar_position: 2
sidebar_label: ESPHome (Básico)
last_update:
  date: 04/28/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recetario de ESPHome - Básico: reTerminal E Serie

:::tip Lee primero la guía principal de ESPHome
Esta página es el **recetario básico de ESPHome específico para reTerminal E Serie**. El contenido común — elegir un método de flasheo, el esqueleto YAML genérico, la conexión con Home Assistant — se encuentra en **[Work with ESPHome](/es/epaper_work_with_esphome)**. Échale un vistazo primero si eres nuevo en ESPHome en Seeed ePaper. Para ejemplos de periféricos integrados (botones, zumbador, batería, SHT4x, deep sleep), consulta el [recetario avanzado](/es/reterminal_e10xx_with_esphome_advanced).
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/es/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

## Introducción a [Home Assistant](https://www.home-assistant.io/)

Home Assistant es una potente plataforma de automatización del hogar de código abierto que te permite controlar y supervisar tus dispositivos domésticos inteligentes desde una única interfaz unificada. Actúa como el concentrador central de tu hogar inteligente, lo que te permite automatizar rutinas, monitorizar sensores y crear un espacio vital más inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### ¿Por qué Home Assistant?

- **Control local**: A diferencia de muchas soluciones basadas en la nube, Home Assistant se ejecuta localmente en tu red, lo que garantiza que tus datos permanezcan privados y que tus automatizaciones funcionen incluso sin acceso a Internet.

- **Amplia compatibilidad de dispositivos**: Home Assistant se integra con miles de dispositivos y servicios de hogar inteligente diferentes, lo que lo hace muy versátil y preparado para el futuro.

- **Automatización potente**: Crea reglas de automatización sofisticadas que puedan responder a diversos desencadenantes como la hora, estados de dispositivos, lecturas de sensores y más.

- **Panel personalizable**: Diseña tu propia interfaz de usuario para mostrar la información que más te importa.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Más información 🖱️</font></span></strong></a>
</div>

### ¿Por qué usar la pantalla de tinta electrónica reTerminal E Serie con Home Assistant?

La pantalla de tinta electrónica reTerminal E Serie es un excelente complemento para Home Assistant por varias razones:

1. **Eficiencia energética**: La pantalla de tinta electrónica solo consume energía al actualizar el contenido, lo que la hace perfecta para mostrar información persistente como previsiones meteorológicas, eventos del calendario o el estado del sistema.

2. **Visibilidad clara**: A diferencia de las pantallas LCD, las pantallas de tinta electrónica se leen fácilmente en cualquier condición de iluminación, incluida la luz solar directa, lo que las hace ideales para paneles de control domésticos montados en la pared.

3. **Larga duración de la batería**: Combinada con el modo de deep sleep, la pantalla puede funcionar durante meses con una sola carga de batería y seguir proporcionando información valiosa de un vistazo.

4. **Integración flexible**: A través de ESPHome, la pantalla se integra perfectamente con Home Assistant, lo que te permite mostrar cualquier dato de tu sistema de hogar inteligente en un formato elegante y siempre visible.

Estas ventajas hacen que la pantalla de tinta electrónica reTerminal E Serie sea una opción ideal para crear una pantalla de información siempre encendida y de bajo consumo para tu configuración de Home Assistant.

### Integración con ESPHome

ESPHome es una herramienta de creación de firmware de código abierto diseñada específicamente para dispositivos ESP8266/ESP32. Te permite crear firmware personalizado usando sencillos archivos de configuración YAML, que luego pueden flashearse en tu dispositivo. Para la reTerminal E Serie, ESPHome actúa como el middleware esencial que habilita la comunicación entre el dispositivo y Home Assistant.

El sistema funciona convirtiendo tu configuración YAML en un firmware totalmente funcional que se ejecuta en tu dispositivo ESP. Este firmware se encarga de todas las tareas complejas de conectarse a tu red, comunicarse con Home Assistant y controlar la pantalla de tinta electrónica. Combinado con Home Assistant, ESPHome proporciona una plataforma robusta para crear pantallas y controles sofisticados de automatización del hogar.

Veamos cómo configurarlo y sacar el máximo partido de esta versátil pantalla.

## Primeros pasos

Antes de comenzar con el contenido del tutorial de este artículo, es posible que necesites tener preparado el siguiente hardware.

### Materiales necesarios

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
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
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es la forma más sencilla y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente de forma predeterminada. Esta placa se beneficia del próspero ecosistema de Home Assistant y se mejorará cada mes gracias al código abierto.

Recomendamos usar Home Assistant Green como host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con Supervisor.

:::tip instala Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- **[Primeros pasos con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)**
- **[Primeros pasos con Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)**
- **[Primeros pasos con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)**

Si no estás usando un producto de Seeed Studio, también puedes consultar y aprender cómo instalar Home Assistant para otros productos en el sitio web oficial de Home Assistant.

- **[Instalación de Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Paso 1. Instalar ESPHome

:::note
Si ya has instalado ESPHome, puedes omitir este paso.
:::

Ve a **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

Introduce el término de búsqueda **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **INSTALL** y **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si no puedes encontrar ESPHome en la tienda de complementos, asegúrate de que estás usando una instalación de Home Assistant que admita complementos (como Home Assistant OS o instalaciones supervisadas). Para otros tipos de instalación (como Home Assistant Container), es posible que tengas que ejecutar ESPHome Device Builder de forma independiente usando Docker. Consulta la [documentación oficial de ESPHome](https://esphome.io/guides/getting_started_hassio) para más detalles.
:::

### Paso 2. Añadir un nuevo dispositivo

Ve a ESPHome y haz clic en **NEW DEVICE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

Ponle al dispositivo el nombre que quieras y selecciona **ESP32-S3** como tipo de chip, luego haz clic en **SKIP**.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Después de crear un nuevo dispositivo, haz clic en **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### Paso 3. Instalar el firmware

Este es un ejemplo muy básico y mostrará "Hello World!" en la pantalla.

**El propósito principal es mostrarte diferentes formas de instalar el firmware en el dispositivo.**

Puedes usar este ejemplo copiando el código de abajo y pegándolo después de la línea de código `captive_portal` en tu archivo Yaml.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      # const auto RED     = Color(255, 0,   0,   0);
      # const auto GREEN   = Color(0,   255, 0,   0);
      # const auto BLUE    = Color(0,   0,   255, 0);
      # const auto YELLOW  = Color(255, 255, 0,   0);
      it.print(0, 0, id(myFont), BLACK, "Hello World!");
```

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/36.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **INSTALL** para instalar el código en el dispositivo y verás la siguiente imagen.

<Tabs>
<TabItem value='Install through browser'>

:::tip
Si tu Home Assistant Host (Raspberry PI/Green/Yellow etc.) está lejos de ti, recomendamos usar este método. Puedes instalarlo con el ordenador que tengas a mano.
:::

Primero, necesitas hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre este sitio web donde subiremos el firmware al panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Vuelve a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecciona Factory format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa un cable USB para **conectar el panel ePaper a tu ordenador** y haz clic en **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecciona usbmodemxxx (en Windows es COMxxx) y haz clic en connect. [¿Has encontrado un problema? Haz clic aquí.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás 'Hello world!' en la pantalla ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Si tu Home Assistant Host (Raspberry PI/Green/Yellow etc.) está cerca, recomendamos usar este método ya que es más sencillo.
:::

Antes de instalar el código en el dispositivo, necesitas usar un cable USB para **conectar este dispositivo a tu Raspberry Pi o HA Green(Yellow) etc.** que esté ejecutando Home Assistant.

Haz clic en las opciones siguiendo la imagen para instalar el código en el dispositivo. [¿No has encontrado el puerto cuando el dispositivo está en modo de suspensión profunda?](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Espera un momento y verás el resultado como en la siguiente imagen. Significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
Esta es la forma más sencilla, pero con la premisa de que, al instalar el programa por primera vez, primero debes subir el programa al Panel ePaper usando el método de la izquierda. Después de eso, puedes subirlo vía wifi. Además, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` correctamente configuradas con claves de cifrado válidas para que este método funcione.
:::

De esta manera, no necesitas conectar el panel ePaper a nada, solo asegúrate de que esté en línea.

Haz clic en la opción y entonces el firmware se instalará automáticamente en el panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás el resultado como en la siguiente imagen. Si falla, puede deberse a una señal débil. Por favor, acerca el dispositivo a tu router. [¿Has encontrado un problema? Haz clic aquí.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Conceptos básicos para dibujar en ESPHome

### Dibujo de gráficos simples

Este ejemplo de código YAML configura la interfaz SPI y la pantalla ePaper reTerminal E Serie para un proyecto ESPHome. La sección `lambda` contiene comandos de dibujo que renderizan formas simples en la pantalla:

- Dos rectángulos (uno en la posición (10, 10) con tamaño 100x50, y otro en (150, 10) con tamaño 50x50)
- Un círculo en (250, 35) con un radio de 25
- Dos rectángulos rellenos (en (10, 80) y (150, 80))
- Un círculo relleno en (250, 105) con un radio de 25

Puedes usar este ejemplo copiando el código de abajo y pegándolo después de la línea de código `captive_portal` en tu archivo Yaml.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

Cuando veas el resultado como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/38.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50, BLACK);
      it.rectangle(150, 10, 50, 50, RED);
      it.circle(250, 35, 25, GREEN);
      it.filled_rectangle(10, 80, 100, 50, BLUE);
      it.filled_rectangle(150, 80, 50, 50, YELLOW);
      it.filled_circle(250, 105, 25, WHITE);
```

Cuando veas el resultado como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

Debido a limitaciones de espacio, no profundizaremos demasiado en los métodos de dibujo y principios de otros patrones; si es necesario, se recomienda al lector leer [ESPHome en esta parte de los ejemplos detallados](https://esphome.io/components/display/).

### Obtener valores de Home Assistant para mostrarlos

Para mostrar datos meteorológicos en tu dispositivo de pantalla ePaper reTerminal E Serie, necesitarás acceder a los datos de temperatura, condiciones meteorológicas y velocidad del viento desde Home Assistant. La integración Open-Meteo proporciona datos meteorológicos fiables a los que se puede acceder a través de Developer Tools.

#### Instalación de la integración Open-Meteo

Paso 1. Abre tu panel de Home Assistant y navega a **Settings** → **Devices & Services**.

Paso 2. Haz clic en el botón **Add Integration** en la esquina inferior derecha.

Paso 3. Busca "Open-Meteo" y selecciónalo de la lista.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

Paso 4. Sigue el asistente de configuración para establecer tu ubicación y las unidades preferidas.

Paso 5. Una vez instalada, la integración de Open-Meteo creará varias entidades relacionadas con el clima en tu instancia de Home Assistant.

#### Acceder a los datos meteorológicos en Herramientas de Desarrollador

Después de instalar la integración de Open-Meteo, puedes acceder a los datos meteorológicos a través de Herramientas de Desarrollador:

Paso 1. En tu panel de Home Assistant, navega a **Developer Tools** → **States**.

Paso 2. En el cuadro de filtro, escribe `weather` para encontrar la entidad meteorológica principal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

Paso 3. Haz clic en la entidad para ver todos los atributos disponibles. Los atributos meteorológicos clave incluyen:

- `temperature`: Temperatura actual (en tus unidades configuradas)
- `wind_bearing`: Dirección del viento
- `wind_speed`: Velocidad del viento

#### Uso de los datos meteorológicos en ESPHome

Para usar estos datos meteorológicos en tu configuración de ESPHome para la reTerminal E Serie, tendrás que configurar una conexión API de Home Assistant en tu configuración YAML de ESPHome:

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true
```

Esta configuración crea entidades de sensor en tu dispositivo ESPHome que obtienen datos de la integración meteorológica de Home Assistant. Luego puedes usar estos sensores para actualizar la pantalla ePaper de la reTerminal E Serie con la información meteorológica actual.

:::tip
Para los datos de pronóstico, tendrás que usar las entidades `weather.open_meteo_forecast` que contienen valores previstos para días futuros.
:::

Por último, añade el código para la sección de pantalla para usar estos valores anteriores. El código completo es el siguiente:

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), "%.1f", id(myWindBearing).state);
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml

# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      // const auto RED     = Color(255, 0,   0,   0);
      // const auto GREEN   = Color(0,   255, 0,   0);
      // const auto BLUE    = Color(0,   0,   255, 0);
      // const auto YELLOW  = Color(255, 255, 0,   0);

      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), BLACK, "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), BLACK, "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), BLACK, "%.1f", id(myWindBearing).state);
```

</TabItem>
</Tabs>

Después de compilar el código anterior y subirlo a tu dispositivo, es posible que primero veas **NaN** mostrado en la pantalla, por favor no te preocupes, esto es normal. Esto se debe a que el dispositivo aún no se ha añadido al entorno de Home Assistant, por lo que reTerminal aún no ha podido adquirir los datos de Home Assistant. Solo necesitamos seguir los pasos siguientes para añadir el dispositivo.

#### Añadir la pantalla ePaper reTerminal E Serie a Home Assistant

Paso 1. Después de grabar tu dispositivo, vuelve a Home Assistant y navega a **Settings → Devices & Services**.

Paso 3. Home Assistant debería detectar automáticamente tu dispositivo reTerminal E Serie ePaper Display mediante mDNS. Si aparece en la sección de dispositivos detectados, haz clic en Configure para añadirlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

Paso 4. Si el dispositivo no se detecta automáticamente, haz clic en Add Integration y busca "ESPHome".

Paso 5. Introduce la dirección IP de tu dispositivo reTerminal E Serie ePaper Display y la clave de cifrado de la API si configuraste una.

Paso 6. Una vez conectado, tu reTerminal E Serie ePaper Display aparecerá como un dispositivo en Home Assistant con todos sus sensores y componentes disponibles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
El programa puede tardar de 2 a 3 minutos desde la finalización de la grabación hasta la visualización final.
:::

Aquí está el contenido mejorado de la Demo 3 con formato mejorado, colocación de imágenes y descripciones adicionales:

### Dibujo de fuentes TrueType

Este ejemplo demuestra cómo mostrar iconos personalizados en tu reTerminal E Serie ePaper Display usando fuentes TrueType. Material Design Icons proporciona una amplia gama de símbolos escalables perfectos para pantallas de papel electrónico.

#### Instalación de las herramientas necesarias

Paso 1. Primero, necesitamos instalar el complemento Studio Code Server para gestionar archivos. Navega a la tienda de complementos de Home Assistant, busca **Studio Code Server** y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

Paso 2. Haz clic en **INSTALL** y espera a que se complete la instalación. Una vez instalado, haz clic en **START** para iniciar el editor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### Configuración de fuentes de iconos

Paso 3. Crea una nueva carpeta llamada **fonts** en tu directorio de configuración de ESPHome. Esta carpeta almacenará los archivos de fuentes TrueType necesarios para mostrar iconos.

Paso 4. Descarga el archivo de fuente Material Design Icons haciendo clic en el botón de abajo y extrae el contenido.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Descargar fuente Material Design Icons</button></p>
</a>
</div>

Paso 5. Sube el archivo de fuente descargado (`materialdesignicons-webfont.ttf`) a la carpeta fonts que creaste anteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### Configuración de ESPHome para iconos

Paso 6. Añade el siguiente código a tu archivo de configuración de ESPHome después de la sección `captive_portal`. Este código define dos tamaños de fuente para iconos y configura la pantalla para mostrar iconos meteorológicos.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

```yaml

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);

      it.printf(100, 200, id(font_mdi_medium), RED, TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), GREEN, TextAlign::CENTER, "\U000F0592");
```

</TabItem>
</Tabs>

:::note

1. La sección `glyphs` define qué iconos cargar desde el archivo de fuente. Cargar solo los iconos que necesitas ahorra memoria en tu dispositivo.

2. El programa puede tardar de 2 a 3 minutos desde que termina la grabación hasta la visualización final.

:::

Paso 7. Guarda tu configuración y súbela a tu reTerminal E Serie. Cuando veas un mensaje como en la siguiente imagen, significa que el código se está ejecutando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

#### Personalización con diferentes iconos

La biblioteca Material Design Icons contiene miles de iconos que puedes usar en tus proyectos. Aquí te mostramos cómo encontrar y usar diferentes iconos:

Paso 1. Visita el sitio web de Material Design Icons haciendo clic en el botón de abajo.

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Explorar Material Design Icons</button></p>
</a>
</div>

Paso 2. Busca un icono que quieras usar en tu proyecto. Puedes explorar por categoría o usar la función de búsqueda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

Paso 3. Cuando encuentres un icono que te guste, haz clic en él para ver sus detalles. Busca el valor Unicode, que tendrá el formato `F0595`.

Paso 4. Añade el valor Unicode a tu configuración de ESPHome:

- Añadiéndolo a la lista `glyphs` en tu configuración de fuente
- Actualizando el código de la pantalla para usar el nuevo icono

Por ejemplo, para usar un nuevo icono con Unicode `F0123`:

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

Y en la lambda de la pantalla:

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

Paso 5. Guarda tu configuración actualizada y súbela a tu dispositivo para ver el nuevo icono.

:::tip
Para paneles de clima, considera usar iconos como `F0590` (soleado), `F0591` (parcialmente nublado), `F0593` (lluvioso) y `F059E` (ventoso).
:::

Combinando estos iconos con los datos meteorológicos de Home Assistant que configuramos antes, puedes crear una pantalla de clima dinámica que muestre las condiciones actuales usando iconos apropiados.

### Mostrar imágenes personalizadas

Este ejemplo demuestra cómo mostrar imágenes personalizadas en la pantalla de tinta electrónica ePaper Display de tu reTerminal E Serie. Puedes usar esta función para mostrar logotipos, iconos o cualquier gráfico que mejore la experiencia de tu panel.

#### Preparación

Paso 1. Asegúrate de tener el complemento **Studio Code Server** instalado en Home Assistant. Si aún no lo has instalado, sigue las instrucciones del ejemplo anterior.

Paso 2. Crea una nueva carpeta llamada **image** en tu directorio de configuración de ESPHome. Esta carpeta almacenará los archivos de imagen que quieras mostrar.

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### Añadir imágenes

Paso 3. Descarga una imagen de ejemplo para probar la funcionalidad. Puedes usar el icono de WiFi que se proporciona a continuación o usar tu propia imagen.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Descargar imagen de muestra de WiFi</button></p>
</a>
</div>

Paso 4. Sube la imagen descargada a la carpeta **image** que creaste antes usando el gestor de archivos de Studio Code Server.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
Si quieres mostrar imágenes de paisajes complejos y bonitos, es mejor realizar el tramado de la imagen de antemano [en nuestro sitio web](https://sensecraft.seeed.cc/hmi/tools/dither) para obtener un mejor efecto. Se admiten los formatos JPG y PNG.
:::

#### Configurar ESPHome para mostrar imágenes

Paso 5. Añade el siguiente código a tu archivo de configuración de ESPHome después de la sección `captive_portal`. Este código define el recurso de imagen y configura la pantalla para mostrarlo.

<Tabs>
<TabItem value="For E1001" label="Para E1001" default>

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary works for monochrome, RGB565 works for colorful eink
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors is needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
<TabItem value="For E1002" label="Para E1002">

:::tip
Por favor, actualiza tu versión de ESPHome a **2025.11.1** o superior.
:::

```yaml


image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: RGB565                            #  Binary works for monochrome, RGB565 works for colorful eink
    resize: 800x480                         # Resize to match display resolution

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
</Tabs>

Paso 6. Guarda tu configuración y súbela a tu reTerminal E Serie. Cuando la actualización se complete, tu pantalla de tinta electrónica mostrará la imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### Técnicas avanzadas de imágenes

Puedes mejorar la visualización de imágenes con estas técnicas adicionales:

**Posicionar imágenes**

Para posicionar tu imagen en coordenadas específicas en la pantalla:

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**Combinar imágenes con texto**

Puedes mostrar tanto imágenes como texto en la misma pantalla:

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**Usar múltiples imágenes**

Para mostrar múltiples imágenes en la misma pantalla, define cada imagen en tu configuración:

```yaml
image:
  - file: /config/esphome/image/wifi.jpg
    id: wifiImage
    type: BINARY
    resize: 200x200

  - file: /config/esphome/image/temperature.png
    id: tempImage
    type: BINARY
    resize: 200x200

# In the display lambda:
lambda: |-
  it.image(50, 50, id(wifiImage));
  it.image(300, 50, id(tempImage));
```

:::caution
Recuerda que las pantallas de tinta electrónica tienen tasas de refresco limitadas. El ajuste `update_interval: 300s` significa que tu pantalla se actualizará solo cada 5 minutos. Ajusta este valor según tus necesidades, pero ten en cuenta que las actualizaciones frecuentes pueden reducir la vida útil de las pantallas de tinta electrónica.
:::

Combinando imágenes con texto y otros elementos de visualización tratados en ejemplos anteriores, puedes crear paneles ricos e informativos en tu reTerminal E Serie.

## Seguir leyendo

Debido a limitaciones de espacio, este artículo solo cubre algunos casos de uso básicos y ejemplos de dibujo del dispositivo. Trataremos el uso del hardware de reTerminal en ESPHome con más detalle en el Wiki [Advanced ESPHome Usage of reTerminal E Series ePaper Display in Home Assistant](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome_advanced), que puedes seguir leyendo.

## Preguntas frecuentes

### P1: ¿Por qué no hay datos?

En este caso, debes ir a Settings -> Devices & Services -> Integrations para **RECONGFIGURE** el dispositivo. ¿No has encontrado tu reTerminal? Intenta reiniciar Home Assistant.

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### P2: ¿Por qué no puedo obtener esos datos en Home Assistant? {#port}

En este caso, debes ir a Settings -> Devices & Services -> Integrations para **AÑADIR** tu dispositivo a HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### P3: ¿La pantalla ePaper de reTerminal E Serie no puede conectarse a tu ordenador?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

Intenta desconectarla y volverla a conectar varias veces, o simplemente instala el controlador según las indicaciones.

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
