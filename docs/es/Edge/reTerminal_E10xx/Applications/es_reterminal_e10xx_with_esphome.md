---
description: Este artículo describe cómo hacer que la serie reTerminal E10xx funcione con Home Assistant y ESPHome.
title: reTerminal E10xx Trabajando con ESPHome para Home Assistant
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /es/reterminal_e10xx_with_esphome
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E10xx Trabajando con ESPHome para Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/es/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Introducción a [Home Assistant](https://www.home-assistant.io/)

Home Assistant es una poderosa plataforma de automatización del hogar de código abierto que te permite controlar y monitorear tus dispositivos domésticos inteligentes desde una interfaz única y unificada. Actúa como el centro de control de tu hogar inteligente, permitiéndote automatizar rutinas, monitorear sensores y crear un espacio de vida más inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### ¿Por qué Home Assistant?

- **Control Local**: A diferencia de muchas soluciones basadas en la nube, Home Assistant se ejecuta localmente en tu red, asegurando que tus datos permanezcan privados y que tus automatizaciones funcionen incluso sin acceso a internet.

- **Amplio Soporte de Dispositivos**: Home Assistant se integra con miles de diferentes dispositivos y servicios domésticos inteligentes, haciéndolo altamente versátil y preparado para el futuro.

- **Automatización Poderosa**: Crea reglas de automatización sofisticadas que pueden responder a varios disparadores como tiempo, estados de dispositivos, lecturas de sensores y más.

- **Panel de Control Personalizable**: Diseña tu propia interfaz de usuario para mostrar la información que más te importa.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Aprender Más 🖱️</font></span></strong></a>
</div>

### ¿Por qué reTerminal E10xx con Home Assistant?

El reTerminal E10xx es un excelente compañero para Home Assistant por varias razones:

1. **Eficiencia Energética**: La pantalla de papel electrónico solo consume energía al actualizar el contenido, haciéndola perfecta para mostrar información persistente como pronósticos del tiempo, eventos del calendario o estado del sistema.

2. **Visibilidad Clara**: A diferencia de las pantallas LCD, las pantallas de papel electrónico son fácilmente legibles en cualquier condición de iluminación, incluyendo luz solar directa, haciéndolas ideales para paneles de control doméstico montados en la pared.

3. **Larga Duración de Batería**: Combinado con el modo de sueño profundo, la pantalla puede operar durante meses con una sola carga de batería mientras sigue proporcionando información valiosa de un vistazo.

4. **Integración Flexible**: A través de ESPHome, la pantalla se integra perfectamente con Home Assistant, permitiéndote mostrar cualquier dato de tu sistema doméstico inteligente en un formato elegante y siempre visible.

Estas ventajas hacen del reTerminal E10xx una opción ideal para crear una pantalla de información energéticamente eficiente y siempre encendida para tu configuración de Home Assistant.

### Integración con ESPHome

ESPHome es una herramienta de creación de firmware de código abierto específicamente diseñada para dispositivos ESP8266/ESP32. Te permite crear firmware personalizado usando archivos de configuración YAML simples, que luego pueden ser flasheados a tu dispositivo. Para el reTerminal E10xx, ESPHome sirve como el middleware esencial que habilita la comunicación entre el dispositivo y Home Assistant.

El sistema funciona convirtiendo tu configuración YAML en firmware completamente funcional que se ejecuta en tu dispositivo ESP. Este firmware maneja todas las tareas complejas de conectarse a tu red, comunicarse con Home Assistant y controlar la pantalla ePaper. Cuando se combina con Home Assistant, ESPHome proporciona una plataforma robusta para crear pantallas y controles de automatización del hogar sofisticados.

Exploremos cómo configurarlo y aprovechar al máximo esta pantalla versátil.

## Comenzando

Antes de que comience el contenido del tutorial de este artículo, es posible que necesites tener el siguiente hardware listo.

### Materiales Requeridos

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es la forma más fácil y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente por defecto. Esta placa se beneficia del próspero ecosistema de Home Assistant y será mejorada cada mes por código abierto.

Recomendamos usar Home Assistant Green como el host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con un Supervisor.

:::tip instalar Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- **[Comenzando con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)**
- **[Comenzando con Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)**
- **[Comenzando con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)**

Si no estás usando un producto de Seeed Studio, también puedes consultar y aprender cómo instalar Home Assistant para otros productos en el sitio web oficial de Home Assistant.

- **[Instalación de Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Paso 1. Instalar ESPHome

:::note
Si ya has instalado ESPHome, puedes omitir este paso.
:::

Ve a **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

Ingresa el término de búsqueda **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **INSTALL** y **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si no puedes encontrar ESPHome en la tienda de complementos, asegúrate de estar usando una instalación de Home Assistant que soporte complementos (como Home Assistant OS o instalaciones supervisadas). Para otros tipos de instalación (como Home Assistant Container), es posible que necesites ejecutar el ESPHome Device Builder independientemente usando Docker. Consulta la [documentación oficial de ESPHome](https://esphome.io/guides/getting_started_hassio) para más detalles.
:::

### Paso 2. Agregar un nuevo dispositivo

Ve a ESPHome y haz clic en **NEW DEVICE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

Dale al dispositivo un nombre que te guste y selecciona **ESP32-S3** para el tipo de chip, luego haz clic en **SKIP**.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Después de crear un nuevo dispositivo, haz clic en **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### Paso 3. Instalar firmware

Este es un ejemplo muy básico y mostrará "Hello World!" en la pantalla.

**El propósito principal es mostrarte diferentes formas de instalar firmware en el dispositivo.**

Puedes usar este ejemplo copiando el código de abajo y pegándolo después de la línea de código `captive_portal` en tu archivo Yaml.

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
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 30s
    lambda: |-
      it.print(0, 0, id(font1), "Hello World!");
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/36.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **INSTALL** para instalar el código en el dispositivo y verás la siguiente imagen.

<Tabs>
<TabItem value='Install through browser'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está lejos de ti, recomendamos usar este método. Puedes instalarlo con la computadora que tengas a mano.
:::

Primero, necesitas hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre este sitio web donde subiremos el firmware al panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Regresa a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecciona formato Factory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa un cable USB para **conectar el panel ePaper a tu computadora** y haz clic en **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecciona usbmodemxxx (en Windows es COMxxx) y haz clic en connect. [¿Encontraste un problema? Haz clic aquí.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás '¡Hola mundo!' en la pantalla ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está cerca, recomendamos usar este método ya que es más simple.
:::

Antes de instalar el código en el dispositivo, necesitas usar un cable USB para **conectar este dispositivo a tu Raspberry Pi o HA Green(Yellow) etc** que esté ejecutando Home Assistant.

Haz clic en las opciones siguiendo la imagen para instalar el código en el dispositivo. [¿No encontraste el puerto cuando el dispositivo está en modo de suspensión profunda?](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Espera un momento y verás la retroalimentación como la siguiente imagen. Significa que el código se está ejecutando exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
Esta es la forma más simple, pero con la premisa de que al instalar el programa por primera vez, primero debes subir el programa al Panel ePaper usando el método de la izquierda. Después de eso, puedes subirlo vía wifi. También, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` configuradas correctamente con claves de cifrado válidas para que este método funcione.
:::

De esta manera, no necesitas conectar el panel ePaper a nada, solo asegúrate de que esté en línea.

Haz clic en la opción y luego el firmware se instalará en el panel ePaper automáticamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás la retroalimentación como la siguiente imagen. Si falla, puede ser debido a una señal débil. Por favor mueve el dispositivo más cerca de tu router. [¿Encontraste un problema? Haz clic aquí.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Básico para dibujar en ESPHome

### Dibujar Gráficos Simples

Este código YAML de ejemplo configura la interfaz SPI y el reTerminal E10xx para un proyecto de ESPHome. La sección `lambda` contiene comandos de dibujo que renderizan formas simples en la pantalla:

- Dos rectángulos (uno en la posición (10, 10) con tamaño 100x50, y otro en (150, 10) con tamaño 50x50)
- Un círculo en (250, 35) con un radio de 25
- Dos rectángulos rellenos (en (10, 80) y (150, 80))
- Un círculo relleno en (250, 105) con un radio de 25

Puedes usar este ejemplo copiando el código de abajo y pegándolo después de la línea de código `captive_portal` en tu archivo Yaml.

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 30s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

Cuando veas la retroalimentación como la siguiente imagen, significa que el código se está ejecutando exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/38.jpg" style={{width:600, height:'auto'}}/></div>

Debido a limitaciones de espacio, no elaboraremos demasiado sobre los métodos de dibujo y principios de otros patrones, si es necesario, se recomienda al lector leer [ESPHome en esta parte de los ejemplos detallados](https://esphome.io/components/display/).

### Obteniendo valores de Home Assistant para mostrar

Para mostrar datos meteorológicos en tu dispositivo reTerminal E10xx, necesitarás acceder a datos de temperatura, condiciones climáticas y velocidad del viento desde Home Assistant. La integración Open-Meteo proporciona datos meteorológicos confiables que pueden ser accedidos a través de las Herramientas de Desarrollador.

#### Instalando la Integración Open-Meteo

Paso 1. Abre tu panel de Home Assistant y navega a **Configuración** → **Dispositivos y Servicios**.

Paso 2. Haz clic en el botón **Agregar Integración** en la esquina inferior derecha.

Paso 3. Busca "Open-Meteo" y selecciónalo de la lista.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

Paso 4. Sigue el asistente de configuración para establecer tu ubicación y unidades preferidas.

Paso 5. Una vez instalada, la integración Open-Meteo creará varias entidades relacionadas con el clima en tu instancia de Home Assistant.

#### Accediendo a Datos Meteorológicos en las Herramientas de Desarrollador

Después de instalar la integración Open-Meteo, puedes acceder a los datos meteorológicos a través de las Herramientas de Desarrollador:

Paso 1. En tu panel de Home Assistant, navega a **Herramientas de Desarrollador** → **Estados**.

Paso 2. En el cuadro de filtro, escribe `weather` para encontrar la entidad principal del clima.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

Paso 3. Haz clic en la entidad para ver todos los atributos disponibles. Los atributos clave del clima incluyen:

- `temperature`: Temperatura actual (en tus unidades configuradas)
- `wind_bearing`: Dirección del Viento
- `wind_speed`: Velocidad del viento

#### Usando Datos Meteorológicos en ESPHome

Para usar estos datos meteorológicos en tu configuración de ESPHome para el reTerminal E10xx, necesitarás configurar una conexión API de Home Assistant en tu configuración YAML de ESPHome:

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

Esta configuración crea entidades de sensores en tu dispositivo ESPHome que extraen datos de la integración meteorológica de Home Assistant. Luego puedes usar estos sensores para actualizar tu pantalla reTerminal E10xx con la información meteorológica actual.

:::tip
Para datos de pronóstico, necesitarás usar las entidades `weather.open_meteo_forecast` que contienen valores predichos para días futuros.
:::

Finalmente, añade el código para la sección de pantalla para usar estos valores anteriores. El código completo es el siguiente:

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
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 30s
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

Después de compilar el código anterior y subirlo a tu dispositivo, es posible que primero veas **NaN** mostrado en la pantalla, por favor no te preocupes, esto es normal. Esto se debe a que el dispositivo aún no ha sido añadido al entorno de Home Assistant, por lo que reTerminal aún no ha podido adquirir datos de Home Assistant. Solo necesitamos seguir los pasos a continuación para añadir el dispositivo.

#### Añadiendo reTerminal E10xx a Home Assistant

Paso 1. Después de flashear tu dispositivo, regresa a Home Assistant y navega a **Configuración → Dispositivos y Servicios**.

Paso 3. Home Assistant debería descubrir automáticamente tu dispositivo reTerminal E10xx a través de mDNS. Si aparece en la sección de dispositivos descubiertos, haz clic en Configurar para añadirlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

Paso 4. Si el dispositivo no se descubre automáticamente, haz clic en Añadir Integración y busca "ESPHome".

Paso 5. Introduce la dirección IP de tu dispositivo reTerminal E10xx y la clave de cifrado de API si configuraste una.

Paso 6. Una vez conectado, tu reTerminal E10xx aparecerá como un dispositivo en Home Assistant con todos sus sensores y componentes disponibles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

Aquí está el contenido mejorado del Demo 3 con formato mejorado, ubicación de imágenes y descripciones adicionales:

### Dibujando fuentes TrueType

Este ejemplo demuestra cómo mostrar iconos personalizados en tu reTerminal E10xx usando fuentes TrueType. Los Iconos de Material Design proporcionan una amplia gama de símbolos escalables perfectos para pantallas de tinta electrónica.

#### Instalando Herramientas Requeridas

Paso 1. Primero, necesitamos instalar el complemento Studio Code Server para gestionar archivos. Navega a la tienda de Complementos de Home Assistant, busca **Studio Code Server** y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

Paso 2. Haz clic en **INSTALAR** y espera a que se complete la instalación. Una vez instalado, haz clic en **INICIAR** para lanzar el editor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### Configurando Fuentes de Iconos

Paso 3. Crea una nueva carpeta llamada **fonts** en tu directorio de configuración de ESPHome. Esta carpeta almacenará los archivos de fuente TrueType necesarios para mostrar iconos.

Paso 4. Descarga el archivo de fuente de Iconos de Material Design haciendo clic en el botón a continuación y extrae el contenido.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Descargar Fuente de Iconos de Material Design</button></p>
</a>
</div>

Paso 5. Sube el archivo de fuente descargado (`materialdesignicons-webfont.ttf`) a la carpeta fonts que creaste anteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### Configurando ESPHome para Iconos

Paso 6. Añade el siguiente código a tu archivo de configuración de ESPHome después de la sección `captive_portal`. Este código define dos tamaños de fuente para iconos y configura la pantalla para mostrar iconos del clima.

```yaml
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

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

:::note
La sección `glyphs` define qué iconos cargar desde el archivo de fuente. Cargar solo los iconos que necesitas ahorra memoria en tu dispositivo.
:::

Paso 7. Guarda tu configuración y súbela a tu reTerminal E10xx. Cuando veas una retroalimentación como la siguiente imagen, significa que el código se está ejecutando exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

#### Personalización con Diferentes Iconos

La biblioteca de Material Design Icons contiene miles de iconos que puedes usar en tus proyectos. Aquí te mostramos cómo encontrar y usar diferentes iconos:

Paso 1. Visita el sitio web de Material Design Icons haciendo clic en el botón de abajo.

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Explorar Material Design Icons</button></p>
</a>
</div>

Paso 2. Busca un icono que quieras usar en tu proyecto. Puedes navegar por categoría o usar la función de búsqueda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

Paso 3. Cuando encuentres un icono que te guste, haz clic en él para ver sus detalles. Busca el valor Unicode, que estará en el formato `F0595`.

Paso 4. Añade el valor Unicode a tu configuración de ESPHome mediante:

- Añadiéndolo a la lista `glyphs` en tu configuración de fuente
- Actualizando el código de pantalla para usar el nuevo icono

Por ejemplo, para usar un nuevo icono con Unicode `F0123`:

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

Y en la lambda de visualización:

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

Paso 5. Guarda tu configuración actualizada y súbela a tu dispositivo para ver el nuevo icono.

:::tip
Para paneles de control meteorológicos, considera usar iconos como `F0590` (soleado), `F0591` (parcialmente nublado), `F0593` (lluvioso), y `F059E` (ventoso).
:::

Al combinar estos iconos con los datos meteorológicos de Home Assistant que configuramos anteriormente, puedes crear una pantalla meteorológica dinámica que muestre las condiciones actuales usando iconos apropiados.

### Mostrando Imágenes Personalizadas

Este ejemplo demuestra cómo mostrar imágenes personalizadas en tu pantalla de papel electrónico reTerminal E10xx. Puedes usar esta función para mostrar logotipos, iconos, o cualquier gráfico que mejore tu experiencia de panel de control.

#### Preparación

Paso 1. Asegúrate de tener el complemento **Studio Code Server** instalado en Home Assistant. Si aún no lo has instalado, sigue las instrucciones del ejemplo anterior.

Paso 2. Crea una nueva carpeta llamada **image** en tu directorio de configuración de ESPHome. Esta carpeta almacenará los archivos de imagen que quieras mostrar.

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### Añadiendo Imágenes

Paso 3. Descarga una imagen de muestra para probar la funcionalidad. Puedes usar el icono WiFi proporcionado a continuación o usar tu propia imagen.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Descargar Imagen WiFi de Muestra</button></p>
</a>
</div>

Paso 4. Sube la imagen descargada a la carpeta **image** que creaste anteriormente usando el administrador de archivos del Studio Code Server.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
Para obtener mejores resultados en pantallas de papel electrónico, usa imágenes de alto contraste con áreas claras en blanco y negro. Se admiten tanto formatos JPG como PNG.
:::

#### Configurando ESPHome para Mostrar Imágenes

Paso 5. Añade el siguiente código a tu archivo de configuración de ESPHome después de la sección `captive_portal`. Este código define el recurso de imagen y configura la pantalla para mostrarla.

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

Paso 6. Guarda tu configuración y súbela a tu reTerminal E10xx. Cuando la actualización se complete, tu pantalla de tinta electrónica mostrará la imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### Técnicas Avanzadas de Imagen

Puedes mejorar la visualización de tu imagen con estas técnicas adicionales:

**Posicionamiento de Imágenes**

Para posicionar tu imagen en coordenadas específicas en la pantalla:

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**Combinando Imágenes con Texto**

Puedes mostrar tanto imágenes como texto en la misma pantalla:

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));
  
  // Add text below or beside the image
  it.printf(400, 400, id(font1), TextAlign::CENTER, "WiFi Connected");
```

**Usando Múltiples Imágenes**

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
Recuerda que las pantallas de papel electrónico tienen tasas de actualización limitadas. La configuración `update_interval: 30s` significa que tu pantalla se actualizará solo cada 30 segundos. Ajusta este valor según tus necesidades, pero ten en cuenta que las actualizaciones frecuentes pueden reducir la vida útil de las pantallas de papel electrónico.
:::

Al combinar imágenes con texto y otros elementos de visualización cubiertos en ejemplos anteriores, puedes crear paneles informativos ricos en tu reTerminal E10xx.

## Continuar Leyendo

Debido a limitaciones de espacio, este artículo solo cubre algunos casos de uso básicos y ejemplos de dibujo del dispositivo. Cubriremos el uso del hardware de reTerminal en ESPHome con más detalle en el Wiki de [Uso Avanzado de ESPHome de reTerminal E10xx en Home Assistant](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome_advanced), que puedes continuar leyendo.

## FAQ

### P1: ¿Por qué no hay datos?

En este caso, deberías ir a Configuración -> Dispositivos y Servicios -> Integraciones para **RECONFIGURAR** el dispositivo. ¿No encuentras tu reTerminal? Intenta reiniciar Home Assistant.

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### P2: ¿Por qué no puedo obtener esos datos en Home Assistant? {#port}

En este caso, deberías ir a Configuración -> Dispositivos y Servicios -> Integraciones para **AÑADIR** tu dispositivo a HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### P3: ¿reTerminal E10xx no puede conectarse a tu computadora?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

Intenta desconectarlo y volver a conectarlo varias veces, o simplemente instala el controlador según las indicaciones.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
