---
description: This article describes how to get the reTerminal E Series ePaper Display to work with Home Assistant and ESPHome.
title: reTerminal E Series ePaper Display Work with ESPHome for Home Assistant
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_esphome
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E Series ePaper Display Work with ESPHome for Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

## Introduction to [Home Assistant](https://www.home-assistant.io/)

Home Assistant is a powerful open-source home automation platform that allows you to control and monitor your smart home devices from a single, unified interface. It acts as the central hub for your smart home, enabling you to automate routines, monitor sensors, and create a more intelligent living space.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### Why Home Assistant?

- **Local Control**: Unlike many cloud-based solutions, Home Assistant runs locally on your network, ensuring your data stays private and your automations work even without internet access.

- **Extensive Device Support**: Home Assistant integrates with thousands of different smart home devices and services, making it highly versatile and future-proof.

- **Powerful Automation**: Create sophisticated automation rules that can respond to various triggers like time, device states, sensor readings, and more.

- **Customizable Dashboard**: Design your own user interface to display the information that matters most to you.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Learn More 🖱️</font></span></strong></a>
</div>

### Why reTerminal E Series ePaper Display with Home Assistant?

The reTerminal E Series ePaper Display is an excellent companion for Home Assistant for several reasons:

1. **Energy Efficiency**: The e-paper display only consumes power when updating content, making it perfect for displaying persistent information like weather forecasts, calendar events, or system status.

2. **Clear Visibility**: Unlike LCD screens, e-paper displays are easily readable in any lighting condition, including direct sunlight, making them ideal for wall-mounted home control panels.

3. **Long Battery Life**: Combined with deep sleep mode, the display can operate for months on a single battery charge while still providing valuable information at a glance.

4. **Flexible Integration**: Through ESPHome, the display seamlessly integrates with Home Assistant, allowing you to show any data from your smart home system in an elegant, always-visible format.

These advantages make the reTerminal E Series ePaper Display an ideal choice for creating an energy-efficient, always-on information display for your Home Assistant setup.

### ESPHome Integration

ESPHome is an open-source firmware creation tool specifically designed for ESP8266/ESP32 devices. It allows you to create custom firmware using simple YAML configuration files, which can then be flashed to your device. For the reTerminal E Series, ESPHome serves as the essential middleware that enables communication between the device and Home Assistant.

The system works by converting your YAML configuration into fully-featured firmware that runs on your ESP device. This firmware handles all the complex tasks of connecting to your network, communicating with Home Assistant, and controlling the ePaper display. When combined with Home Assistant, ESPHome provides a robust platform for creating sophisticated home automation displays and controls.

Let's explore how to set it up and make the most of this versatile display.

## Getting Started

Before the tutorial content of this article begins, you may need to have the following hardware ready.

### Materials Required

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green is the easiest and most privacy-focused way to automate your home. It offers an effortless setup and allows you to control all the smart devices with just one system, where all the data is stored locally by default. This board benefits from the thriving Home Assistant ecosystem and it will be improved every month by open source.

We recommend using Home Assistant Green as the Home Assistant host for this tutorial, or you can use any Home Assistant host with a Supervisor.

:::tip install Home Assistant
We have also written how to install Home Assistant for some of Seeed Studio products, please refer to them.

- **[Getting Started with Home Assistant on ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)**
- **[Getting Started with Home Assistant on reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)**
- **[Getting Started with Home Assistant on LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/h68k-ha-esphome/)**

If you are not using a Seeed Studio product, you can also check and learn how to install Home Assistant for other products on the official Home Assistant website.

- **[Home Assistant Installation](https://www.home-assistant.io/installation/)**
:::

### Step 1. Install ESPHome

:::note
If you have already installed ESPHome, you can skip this step.
:::

Go to **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

Enter the search term **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

Click on **INSTALL** and **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
If you can't find ESPHome in the add-on store, make sure you're using a Home Assistant installation that supports add-ons (like Home Assistant OS or supervised installations). For other installation types (like Home Assistant Container), you may need to run the ESPHome Device Builder independently using Docker. See the [official ESPHome documentation](https://esphome.io/guides/getting_started_hassio) for more details.
:::

### Step 2. Add a new device

Go to ESPHome and click on **NEW DEVICE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

Give the device a name you like and select **ESP32-S3** for chip type, then click on **SKIP**.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

After you create a new device, click **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### Step 3. Install firmware

This is a very basic example and will show "Hello World!" on the display.

**The main purpose is to show you different ways to install firmware to the device.**

You can use this example by copying the code below and pasting it after the `captive_portal` code line in your Yaml file.

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
<TabItem value="For E1002" label="For E1002">

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

Click **INSTALL** to install the code to the device and you will see the following image.

<Tabs>
<TabItem value='Install through browser'>

:::tip
If your Home Assistant Host (Raspberry PI/Green/Yellow etc.) is far away from you, we recommend using this method. You can install it with the computer you have on hand.
:::

First, you need to click **Manual download** to download the compiled firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Open this website where we will upload the firmware to the ePaper panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Go back to ESPHome to download the firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Select Factory format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Use USB cable to **connect the ePaper panel to your computer** and click **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Select usbmodemxxx(Windows is COMxxx) and click connect. [Encountered a problem? Click here.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Click **INSTALL** and select the firmware you just downloaded.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

Wait a moment and you will see 'Hello world!' on the display ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
If your Home Assistant Host (Raspberry PI/Green/Yellow etc.) is nearby, we recommend using this method as it is simpler.
:::

Before you install the code to the device, you need to use USB cable to **connect this device to your Raspberry Pi or HA Green(Yellow) etc** which is running Home Assistant.

Click the options following the image to install the code to the device. [Haven't found port when device in deep sleep mode?](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Wait a moment and you will see the feedback like the following image. It means the code is running successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
This is the simplest way, but on the premise that when installing the program for the first time, you should first upload the program to the ePaper Panel using the method on the left. After that, you can upload it via wifi. Also, make sure your YAML configuration includes properly configured `ota` and `api` sections with valid encryption keys for this method to work.
:::

In this way, you don't need to connect the ePaper panel to anything, just make sure it is online.

Click the option and then the firmware will be installed to ePaper penal automatically.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Wait a moment and you will see the feedback like the following image. If it fails, it may be due to a weak signal. Please move the device closer to your router. [Encountered a problem? Click here.](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Basic for drawing in ESPHome

### Drawing Simple Graphics

This example YAML code configures the SPI interface and the reTerminal E Series ePaper Display for an ESPHome project. The `lambda` section contains drawing commands that render simple shapes on the screen:

- Two rectangles (one at position (10, 10) with size 100x50, and another at (150, 10) with size 50x50)
- One circle at (250, 35) with a radius of 25
- Two filled rectangles (at (10, 80) and (150, 80))
- One filled circle at (250, 105) with a radius of 25

You can use this example by copying the code below and pasting it after the `captive_portal` code line in your Yaml file.

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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

When you see the feedback like the following image, it means the code is running successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/38.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="For E1002" label="For E1002">

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

When you see the feedback like the following image, it means the code is running successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

Due to space constraints, we will not elaborate too much on the drawing methods and principles of other patterns, if necessary, the reader is recommended to read [ESPHome in this part of the detailed examples](https://esphome.io/components/display/).

### Getting values from Home Assistant for display

To display weather data on your reTerminal E Series ePaper Display device, you'll need to access temperature, weather conditions, and wind speed data from Home Assistant. The Open-Meteo integration provides reliable weather data that can be accessed through Developer Tools.

#### Installing Open-Meteo Integration

Step 1. Open your Home Assistant dashboard and navigate to **Settings** → **Devices & Services**.

Step 2. Click the **Add Integration** button in the bottom right corner.

Step 3. Search for "Open-Meteo" and select it from the list.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

Step 4. Follow the configuration wizard to set up your location and preferred units.

Step 5. Once installed, the Open-Meteo integration will create several weather-related entities in your Home Assistant instance.

#### Accessing Weather Data in Developer Tools

After installing the Open-Meteo integration, you can access the weather data through Developer Tools:

Step 1. In your Home Assistant dashboard, navigate to **Developer Tools** → **States**.

Step 2. In the filter box, type `weather` to find the main weather entity.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

Step 3. Click on the entity to view all available attributes. The key weather attributes include:

- `temperature`: Current temperature (in your configured units)
- `wind_bearing`: Wind Bearing
- `wind_speed`: Wind speed

#### Using Weather Data in ESPHome

To use this weather data in your ESPHome configuration for the reTerminal E Series, you'll need to set up a Home Assistant API connection in your ESPHome YAML configuration:

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

This configuration creates sensor entities in your ESPHome device that pull data from the Home Assistant weather integration. You can then use these sensors to update your reTerminal E Series ePaper Display display with the current weather information.

:::tip
For forecast data, you'll need to use the `weather.open_meteo_forecast` entities which contain predicted values for future days.
:::

Finally, add the code for the display section to use these values above. The complete code is as follows:

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
<TabItem value="For E1002" label="For E1002">

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

After compiling the above code and uploading it to your device, you may first see **NaN** displayed on the screen, please don't worry, this is normal. This is due to the fact that the device has not yet been added to the Home Assistant environment, so reTerminal has not yet been able to acquire Home Assistant data. We just need to follow the steps below to add the device.

#### Adding reTerminal E Series ePaper Display to Home Assistant

Step 1. After flashing your device, return to Home Assistant and navigate to **Settings → Devices & Services**.

Step 3. Home Assistant should automatically discover your reTerminal E Series ePaper Display device via mDNS. If it appears in the discovered devices section, click Configure to add it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

Step 4. If the device isn't automatically discovered, click Add Integration and search for "ESPHome".

Step 5. Enter the IP address of your reTerminal E Series ePaper Display device and the API encryption key if you set one.

Step 6. Once connected, your reTerminal E Series ePaper Display will appear as a device in Home Assistant with all its sensors and components available.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
The program may take 2~3 minutes from the completion of burning to the final display.
:::

Here's the enhanced Demo 3 content with improved formatting, image placement, and additional descriptions:

### Drawing TrueType fonts

This example demonstrates how to display custom icons on your reTerminal E Series ePaper Display using TrueType fonts. Material Design Icons provide a wide range of scalable symbols perfect for e-paper displays.

#### Installing Required Tools

Step 1. First, we need to install the Studio Code Server add-on to manage files. Navigate to the Home Assistant Add-ons store, search for **Studio Code Server** and click on it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

Step 2. Click on **INSTALL** and wait for the installation to complete. Once installed, click **START** to launch the editor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### Setting Up Icon Fonts

Step 3. Create a new folder called **fonts** in your ESPHome configuration directory. This folder will store the TrueType font files needed for displaying icons.

Step 4. Download the Material Design Icons font file by clicking the button below and extract the contents.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Download Material Design Icons Font</button></p>
</a>
</div>

Step 5. Upload the downloaded font file (`materialdesignicons-webfont.ttf`) to the fonts folder you created earlier.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### Configuring ESPHome for Icons

Step 6. Add the following code to your ESPHome configuration file after the `captive_portal` section. This code defines two font sizes for icons and configures the display to show weather icons.

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
<TabItem value="For E1002" label="For E1002">

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

1. The `glyphs` section defines which icons to load from the font file. Loading only the icons you need saves memory on your device.

2. The program may take 2~3 minutes from the completion of burning to the final display.

:::

Step 7. Save your configuration and upload it to your reTerminal E Series. When you see feedback like the following image, it means the code is running successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

#### Customizing with Different Icons

The Material Design Icons library contains thousands of icons you can use in your projects. Here's how to find and use different icons:

Step 1. Visit the Material Design Icons website by clicking the button below.

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Browse Material Design Icons</button></p>
</a>
</div>

Step 2. Search for an icon you want to use in your project. You can browse by category or use the search function.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

Step 3. When you find an icon you like, click on it to view its details. Look for the Unicode value, which will be in the format `F0595`.

Step 4. Add the Unicode value to your ESPHome configuration by:

- Adding it to the `glyphs` list in your font configuration
- Updating the display code to use the new icon

For example, to use a new icon with Unicode `F0123`:

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

And in the display lambda:

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

Step 5. Save your updated configuration and upload it to your device to see the new icon.

:::tip
For weather dashboards, consider using icons like `F0590` (sunny), `F0591` (partly cloudy), `F0593` (rainy), and `F059E` (windy).
:::

By combining these icons with the weather data from Home Assistant that we set up earlier, you can create a dynamic weather display that shows the current conditions using appropriate icons.

### Displaying Custom Images

This example demonstrates how to display custom images on your reTerminal E Series ePaper Display e-paper display. You can use this feature to show logos, icons, or any graphics that enhance your dashboard experience.

#### Preparation

Step 1. Ensure you have the **Studio Code Server** add-on installed in Home Assistant. If you haven't installed it yet, follow the instructions from the previous example.

Step 2. Create a new folder called **image** in your ESPHome configuration directory. This folder will store the image files you want to display.

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### Adding Images

Step 3. Download a sample image to test the functionality. You can use the WiFi icon provided below or use your own image.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Download Sample WiFi Image</button></p>
</a>
</div>

Step 4. Upload the downloaded image to the **image** folder you created earlier using the Studio Code Server file manager.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
If you want to display complex and beautiful landscape pictures, it's best to perform image dithering in advance [in our website](https://sensecraft.seeed.cc/hmi/tools/dither) for a better effect. JPG and PNG formats are both supported.
:::

#### Configuring ESPHome for Image Display

Step 5. Add the following code to your ESPHome configuration file after the `captive_portal` section. This code defines the image resource and configures the display to show it.

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
<TabItem value="For E1002" label="For E1002">

:::tip
Please update your ESPHome version to **2025.11.1** above.
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

Step 6. Save your configuration and upload it to your reTerminal E Series. When the update completes, your e-paper display will show the image.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### Advanced Image Techniques

You can enhance your image display with these additional techniques:

**Positioning Images**

To position your image at specific coordinates on the screen:

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**Combining Images with Text**

You can display both images and text on the same screen:

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));
  
  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**Using Multiple Images**

To display multiple images on the same screen, define each image in your configuration:

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
Remember that e-paper displays have limited refresh rates. The `update_interval: 300s` setting means your display will refresh only every 5 minutes. Adjust this value according to your needs, but be aware that frequent refreshes can reduce the lifespan of e-paper displays.
:::

By combining images with text and other display elements covered in previous examples, you can create rich, informative dashboards on your reTerminal E Series.

## Continue Reading

Due to space constraints, this article only covers some basic use cases and drawing examples of the device. We will cover the use of reTerminal's hardware on ESPHome in more detail in the [Advanced ESPHome Usage of reTerminal E Series ePaper Display in Home Assistant](https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome_advanced)'s Wiki, which you can read on.

## FAQ

### Q1: Why is there no data?

In this case, you should go to Settings -> Devices & Services -> Integrations to **RECONGFIGURE** device. Haven't found your reTerminal? Try to reboot Home Assistant.

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2: Why can't I get those data in Home Assistant? {#port}

In this case, you should go to Settings -> Devices & Services -> Integrations to **ADD** your device to HA.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### Q3: reTerminal E Series ePaper Display can't connect to you computer?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

Try unplugging and replugging it several times, or just install the driver according to the prompts.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
