---
description: Connect your Seeed Studio IoT Button V2 to Home Assistant using Seeed HA Discovery integration for seamless smart home control.
title: Connect IoT Button to Home Assistant via Seeed HA Discovery
keywords:
  - IoT Button
  - Home Assistant
  - Seeed HA Discovery
  - ESP32-C6
  - Smart Home
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /iot_button_v2_ha_discovery
last_update:
  date: 12/17/2025
  author: Citric
---

# Connect IoT Button V2 to Home Assistant via Seeed HA Discovery

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:800, height:'auto'}}/></div>

The Seeed Studio IoT Button V2 is a versatile smart switch powered by ESP32-C6, offering customizable RGB LED indicators, programmable event triggers, and USB-C charging capabilities. In this project, we'll guide you through connecting your IoT Button V2 to Home Assistant using the Seeed HA Discovery integration - a solution that makes it easy to connect ESP32 devices to Home Assistant with automatic discovery and real-time communication via WebSocket.

Compared with using ESPHome, this solution is designed specifically for deep-sleep friendly button use cases. ESPHome currently only supports light sleep for the IoT Button V2, which leads to higher power consumption over time and requires you to wake the device with a dedicated press before the actual button press can trigger entities reliably. With this firmware and the Seeed HA Discovery integration, the button can properly enter deep sleep and wake directly on button interaction, avoiding these limitations and providing a more responsive and power-efficient experience.

## Getting Started

This project will walk you through three main phases: flashing the firmware to your IoT Button V2 using a web-based flasher, installing the Seeed HA Discovery integration via HACS (Home Assistant Community Store), and discovering your button in Home Assistant for smart home automation.

### Materials Required

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button V2</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
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

### Preliminary Preparation

Before starting this project, ensure you have the following:

- A running Home Assistant instance (Home Assistant OS, Container, or Core)
- HACS (Home Assistant Community Store) installed on your Home Assistant
- A computer with Google Chrome or Microsoft Edge browser (required for web-based firmware flashing)
- Your WiFi network name (SSID) and password
- Your IoT Button V2 and a USB-C cable for connection

:::tip
If you haven't installed HACS yet, please follow the [official HACS installation guide](https://hacs.xyz/docs/setup/download/) to set it up first. HACS is required to install the Seeed HA Discovery integration.
:::

## Flash Firmware to IoT Button V2

[Seeed HA Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery) is a complete solution for easily connecting ESP32/nRF52840 devices to Home Assistant, and the first step is to flash the appropriate firmware to your IoT Button V2.

:::caution
The web-based firmware flasher is **only compatible with IoT Button V2**. Currently not supported for use with IoT Button V1.
:::

### Step 1. Access the Web Flasher

Open Google Chrome or Microsoft Edge browser and navigate to the Seeed HA Discovery Web Flasher:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Flash Now 🖱️</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Web Serial is available in [Google Chrome and Microsoft Edge browsers (but not on your iOS device)](https://esphome.github.io/esp-web-tools/). Make sure you're using a supported browser on a desktop or laptop computer.
:::

### Step 2. Connect Your IoT Button V2

:::caution
If you are using Zigbee/ESPHome firmware, please note whether the device automatically enters sleep mode. If the device enters sleep mode, you may be unable to locate its serial port. Ensure the device's blue LED is lit and remains awake before flashing the firmware.
:::

**Step 2.1.** Connect your IoT Button V2 to your computer using a USB-C cable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/3.jpg" style={{width:600, height:'auto'}}/></div>

**Step 2.2.** On the web flasher page, locate the **IoT Button V2** firmware option and click the **"Connect"** button.

**Step 2.3.** A browser popup will appear showing available serial ports. Select the port corresponding to your IoT Button V2 (usually labeled as USB JTAG or serial) and click **"Connect"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/5.png" style={{width:1000, height:'auto'}}/></div>

### Step 3. Flash the Firmware

**Step 3.1.** Once connected, click the **"Install IoT Button V2"** button to begin the firmware upload process.

**Step 3.2.** Then you need to choose whether to erase the device. If you only want to update the device firmware without losing network credentials, you can leave this option unchecked and click Next. If you're switching from another firmware, I strongly recommend checking this button during your first firmware flash.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/7.png" style={{width:600, height:'auto'}}/></div>

The flasher will erase the existing firmware and upload the new Seeed HA Discovery firmware. This process typically takes 1-2 minutes. Do not disconnect your device during this process.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/8.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.3.** When you see the "Installation complete!" message, your firmware has been successfully flashed.

### Understanding the Firmware Features

The IoT Button V2 firmware with deep sleep functionality offers several key features:

**Power Management:**

- The deep_sleep component can be used to automatically enter a deep sleep mode on the ESP32 after a certain amount of time. This is especially useful with nodes that operate on batteries and therefore need to conserve as much energy as possible[[1]](https://esphome.io/components/deep_sleep/).
- The button enters light sleep mode after 3 minutes of inactivity to conserve battery power
- Wake up from sleep is triggered by pressing the button

**Button Events:**

- **Single Press**: Triggers single-click event in Home Assistant
- **Double Press**: Triggers double-click event in Home Assistant  
- **Long Press**: Triggers long-press event (typically 1+ seconds)
- **Triple Press**: Enters developer mode, where the device stays awake for 3 minutes, allowing you to flash firmware without losing the serial port connection
- **Long Press (6+ seconds)**: After the LED flashes, release the button to initiate network reconfiguration mode, allowing you to configure a new Wi-Fi network

**LED Feedback:**

- RGB LED provides visual feedback for button presses and connection status
- Customizable LED colors for different states

**Battery Monitoring:**

- ADC-based voltage reading for battery level estimation
- Real-time battery status reporting to Home Assistant

<svg
viewBox="0 0 800 450"
width="100%"
height="auto"
style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', display: 'block' }}
>
{/* Background for Dark Mode Support */}
<rect x="0" y="0" width="800" height="450" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

{/* Header */}
<text x="400" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">
    IoT Button V2: Lifecycle & Events
</text>

{/* --- ACTIVE STATE (Top Center) --- */}
<g transform="translate(300, 60)">
    <rect x="0" y="0" width="200" height="90" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
    <text x="100" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">ACTIVE STATE</text>
    <line x1="20" y1="35" x2="180" y2="35" stroke="#93c5fd" strokeWidth="1" />
    <text x="100" y="55" textAnchor="middle" fontSize="11" fill="#1e40af">Evaluate Press Type</text>
    <text x="100" y="70" textAnchor="middle" fontSize="11" fill="#1e40af">Send API Event to HA</text>
</g>

{/* --- DEEP SLEEP STATE (Bottom Center) --- */}
<g transform="translate(300, 320)">
    <rect x="0" y="0" width="200" height="80" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
    <text x="100" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">DEEP SLEEP</text>
    <text x="100" y="50" textAnchor="middle" fontSize="11" fill="#94a3b8">Ultra Low Power</text>
    <text x="100" y="65" textAnchor="middle" fontSize="10" fill="#94a3b8">Waiting for GPIO Wakeup</text>
</g>

{/* --- WIFI CONFIG (Left Side) --- */}
<g transform="translate(50, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6b21a8">WIFI CONFIG</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#d8b4fe" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#7e22ce">AP Mode Active</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#7e22ce">Reconfigure Network</text>
</g>

{/* --- DEVELOPER MODE (Right Side) --- */}
<g transform="translate(570, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9a3412">DEVELOPER MODE</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#fdba74" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#c2410c">OTA Updates Enabled</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#c2410c">Timeout: 3 Minutes</text>
</g>

{/* --- TRANSITIONS --- */}

{/* Active -> Config (Left) */}
<path d="M300 105 L230 105 L230 160 L140 160 L140 180" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowPurple)" />
<rect x="160" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#9333ea" strokeWidth="1"/>
<text x="190" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">Hold 6s</text>

{/* Active -> Dev (Right) */}
<path d="M500 105 L570 105 L570 160 L660 160 L660 180" fill="none" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowOrange)" />
<rect x="580" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#ea580c" strokeWidth="1"/>
<text x="610" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c2410c">3x Click</text>

{/* Active -> Sleep (Center Down) */}
<path d="M380 150 L380 310" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="350" y="240" textAnchor="middle" fontSize="10" fill="#64748b">Task Done</text>

{/* Sleep -> Active (Wakeup) */}
<path d="M420 320 L420 160" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />
<rect x="380" y="200" width="80" height="20" rx="4" fill="#ecfdf5" stroke="#10b981" />
<text x="420" y="214" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">Wakeup</text>

{/* Config -> Sleep */}
<path d="M140 270 L140 360 L290 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="140" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(-90, 130, 320)">Finished</text>

{/* Dev -> Sleep */}
<path d="M660 270 L660 360 L510 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="675" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(90, 675, 320)">Timeout</text>

{/* LED Legend */}
<g transform="translate(50, 420)">
    <circle cx="10" cy="5" r="4" fill="#22c55e" />
    <text x="20" y="9" fontSize="10" fill="#475569">Press (Green)</text>
    <circle cx="100" cy="5" r="4" fill="#f97316" />
    <text x="110" y="9" fontSize="10" fill="#475569">Dev Mode (Orange)</text>
</g>

<defs>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
    </marker>
    <marker id="arrowGrey" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
    </marker>
    <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#ea580c" />
    </marker>
    <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#9333ea" />
    </marker>
</defs>
</svg>

## Install Seeed HA Discovery Integration

Now that your IoT Button V2 has the appropriate firmware, the next step is to install the Seeed HA Discovery integration in Home Assistant via HACS.

### Step 4. Install HACS (If Not Already Installed)

If you haven't installed HACS yet:

**Step 4.1.** Install the Home Assistant Community Store (HACS) to enable the installation of Seeed HA Discovery plugins within Home Assistant.

**Step 4.2.** Follow the official HACS installation guide at https://www.hacs.xyz/docs/use/download/download/#to-download-hacs

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/11.png" style={{width:1000, height:'auto'}}/></div>

**Step 4.3.** You may need to restart Home Assistant for HACS to fully integrate into your system.

### Step 5. Add Seeed HA Discovery Repository

**Step 5.1.** Navigate to the Seeed HA Discovery GitHub repository:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Go to Repo</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 5.2.** In the README section, locate the ⚡ **One-Click Installation** area and click the **OPEN HACS REPOSITORY ON MY HA** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/9.png" style={{width:800, height:'auto'}}/></div>

:::tip
This button will automatically redirect you to your Home Assistant instance and open the HACS repository addition page.
:::

**Step 5.3.** A redirect page will appear showing your Home Assistant URL. Verify that the detected Home Assistant address is correct (it should match your Home Assistant's IP address or domain name).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/10.png" style={{width:600, height:'auto'}}/></div>

- If the address is correct, click **Open link** to proceed

- If the address is incorrect, manually enter your correct Home Assistant URL in the format: `http://YOUR_HA_IP:8123` or `https://YOUR_HA_DOMAIN`

**Step 5.4.** Home Assistant will open and display the HACS repository addition dialog with the Seeed HA Discovery repository URL already filled in.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/4.png" style={{width:1000, height:'auto'}}/></div>

**Step 5.5.** Click bottom-right corner **Download** to add the repository to HACS. Ensure you are using the latest version of the plugin. After the installation script has finished, you need to restart Home Assistant to apply the changes. You can restart Home Assistant through the UI by going to Settings > System > Restart

:::note
If the one-click button doesn't work, you can manually add the repository by:

1. Opening HACS in your Home Assistant sidebar

2. Clicking the menu button (three dots) in the bottom right corner

3. Selecting "Custom repositories"

4. Entering `https://github.com/limengdu/Seeed-Homeassistant-Discovery` and selecting category "Integration"
:::

## Configure WiFi and Discover IoT Button

With the integration installed, you can now configure your IoT Button V2 to connect to your WiFi network and discover it in Home Assistant.

### Step 6. Configure WiFi on IoT Button V2

**Step 6.1.** After flashing the firmware, your IoT Button V2 will create a WiFi access point (AP) for initial configuration. The AP name will typically be `Seeed_IoT_Button_V2_AP`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/12.png" style={{width:400, height:'auto'}}/></div>

**Step 6.2.** Using your smartphone or computer, connect to this WiFi access point.

**Step 6.3.** A captive portal should automatically open. If not, open a web browser and navigate to `http://192.168.4.1`.

**Step 6.4.** In the configuration portal, enter your home WiFi network credentials:

:::note
Please note that the IoT Button does not currently support networks operating on 5G frequency bands.
:::

- **SELECTED NETWORK**: Your WiFi network name
- **PASSWORD**: Your WiFi password

**Step 6.5.** Click **"Connect"** to save the configuration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/17.png" style={{width:400, height:'auto'}}/></div>

**Step 6.6.** The IoT Button V2 will restart and connect to your WiFi network. The RGB LED will display blue.

### Step 7. Add IoT Button in Home Assistant

**Step 7.1.** After the reboot, click on Settings in the sidebar to open the settings menu. Within the settings menu, navigate to **Devices & Services**.

**Step 7.2.** If your IoT Button V2 is successfully connected to your WiFi network, the device will be automatically discovered by Home Assistant after connecting to WiFi. If the device is not automatically detected, you can also manually add it by clicking “Add Integration” in the bottom-right corner, searching for “Seeed HA Discovery,” and entering the device's IP address.

:::tip
The device's IP address can be obtained from the serial port log or the router's backend.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/20.png" style={{width:1000, height:'auto'}}/></div>

**Step 7.3.** Follow the on-screen prompts to complete the integration setup. You may need to assign the button to an area in your home.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/21.png" style={{width:500, height:'auto'}}/></div>

**Step 7.4.** Once configured, your IoT Button V2 will appear in your Home Assistant dashboard with available entities for button events, battery status, and LED control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:1000, height:'auto'}}/></div>

### Step 8. Create Automations

Now that your IoT Button is connected, you can create automations in Home Assistant:

**Step 8.1.** Navigate to **Settings > Automations & Scenes**.

**Step 8.2.** Click **"Create Automation"** and select **"Start with an empty automation"**.

**Step 8.3.** For the **Trigger**, select your IoT Button device and choose the event type (single press, double press, or long press).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/22.png" style={{width:1000, height:'auto'}}/></div>

**Step 8.4.** For the **Action**, choose what you want to happen (e.g., turn on lights, trigger scenes, send notifications).

**Step 8.5.** Save your automation and test it by pressing your IoT Button!

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



