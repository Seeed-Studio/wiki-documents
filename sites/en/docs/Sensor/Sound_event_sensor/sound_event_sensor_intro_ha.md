---
description: This edge audio board detects Baby Cry, Glass Break, Gunshot, alarms, and Snore in real time while keeping all data locally for privacy. In this tutorial, you will learn how to integrate it with ESPHome and Home Assistant using XIAO series for smart monitoring and automation.
title: Home Assistant and Sound Event Detection Module
keywords:
  - Sound Event Detection Module
  - Sound IoT
  - Home Assistant
image: https://files.seeedstudio.com/wiki/sound_event_detection/sound_device_final.webp
slug: /sound_event_detection_module_home_assistant
sku: 100049596
last_update:
  date: 3/4/2026
  author: Kasun Thushara
createdAt: '2026-03-04'
updatedAt: '2026-04-10'
url: https://wiki.seeedstudio.com/sound_event_detection_module_home_assistant/
---

## Introduction

A compact edge audio board provides real-time sound detection with strong local data privacy protection. It can detect five abnormal sound events—Baby Cry, Glass Break, Gunshot, T3/T4 alarms, and Snore—enabling immediate response and reliable early warning. In this tutorial, we will learn how to compile and upload the firmware to a XIAO ESP32 board.

## Hardware Required

<table align="center">
  <tr>
    <th>Sound Event Sensor </th>
    <th>Home Assistant Yellow Kit</th>
    <th>Xiao ESP32S3</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/sound_event_detection_img_1.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/ha.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Sound-Event-Detection-Module-D1-p-6652.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-Power-over-Ethernet-p-5673.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Install ESPHome Builder

**Settings → Add-ons → Click on Add-on Store → Install ESPHome Device Builder** add-on.

Go to **Home Assistant > Settings > Add-ons**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>


Click **Add-on Store** (usually at the bottom right)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

Under **Official add-ons**, search for and install **ESPHome Device Builder**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>

After installation, click **Start** to run the ESPHome add-on.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/HA_2026/esp_home.png" alt="pir" width={800} height="auto" /></p>

Enable **Start on Boot, Watchdog, and Show in Sidebar** for easier access.

From the Home Assistant sidebar, go to **ESPHome Builder**.

## Add Sound event device

Click + **NEW DEVICE.**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/HA_2026/new_device_add.png" alt="pir" width={800} height="auto" /></p>

Click **Continue → New Device Setup**, then provide an appropriate name for the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/HA_2026/new_device_1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/HA_2026/new_device_name.png" alt="pir" width={500} height="auto" /></p>

In this demo, we are using the XIAO ESP32-S3, so we will select **ESP32-S3** as the target board. This may differ depending on the board you are using.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

Select your new device entry and click **Edit**. Delete the entire YAML template, then copy and paste the provided YAML file into the editor.

<details>
<summary>Sound Event YAML</summary>

```yml
##############################################################
#  Sound Event Sensor - ESPHome Configuration
#  Sensor: XU316 / AudioEventSensor (Seeed)
#  Communication: UART via AT Commands
#  No external .h file needed - pure YAML + inline lambdas
##############################################################

esphome:
  name: sound-event-sensor
  friendly_name: Sound Event Sensor

  on_boot:
    priority: -100   # Run after everything else is initialized
    then:
      - logger.log: "=== Sound Event Sensor Booting ==="

      # Step 1: Wait for sensor to be ready
      - delay: 2s

      # Step 2: Reset device for clean state
      - logger.log: "Resetting device..."
      - uart.write:
          id: uart_bus
          data: "AT+RESET\r\n"
      - delay: 3s   # Wait for device to come back up after reset
      - logger.log: "Device reset complete."

      # Step 3: Get and log firmware version
      - logger.log: "Requesting firmware version..."
      - uart.write:
          id: uart_bus
          data: "AT+GETFWVERSION\r\n"
      - delay: 500ms

      # Step 4: Apply all settings from the configurable values below
      - script.execute: apply_all_settings

      - logger.log: "=== Setup complete. Monitoring for events... ==="


##############################################################
#  Hardware Settings - Change these to match YOUR wiring
##############################################################
esp32:
  board: esp32-s3-devkitc-1
  variant: esp32s3
  framework:
    type: arduino
    version: recommended


##############################################################
#  Network
##############################################################
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "SoundSensor Fallback"
    password: "soundsensor123"

captive_portal:

ota:
  - platform: esphome
    password: !secret ota_password

api:
  id: api_id

logger:
  level: DEBUG   # Set to INFO to reduce log noise after testing


##############################################################
#  UART - The serial link to your sensor
#  Adjust tx_pin / rx_pin to match your wiring
##############################################################
uart:
  id: uart_bus
  tx_pin: GPIO43    # ← CHANGE to your TX pin
  rx_pin: GPIO44    # ← CHANGE to your RX pin
  baud_rate: 115200
  debug:            # Remove this block after testing
    direction: BOTH
    dummy_receiver: false


##############################################################
#  Global Variables (internal state)
##############################################################
globals:
  # UART line receive buffer
  - id: uart_rx_buffer
    type: std::string
    restore_value: no
    initial_value: '""'


##############################################################
#  SCRIPTS
##############################################################
script:
  - id: apply_all_settings
    then:
      # ── Build detect types from whichever switches are ON ──
      - lambda: |-
          std::string types = "";
          auto add = [&](bool on, const char* name) {
            if (on) { types += (types.empty() ? "" : ","); types += name; }
          };
          add(id(sw_detect_baby_cry).state,    "baby_cry");
          add(id(sw_detect_glass_break).state, "glass_break");
          add(id(sw_detect_gunshot).state,     "gunshot");
          add(id(sw_detect_snore).state,       "snore");
          add(id(sw_detect_t3).state,          "T3");
          add(id(sw_detect_t4).state,          "T4");
          if (types.empty()) types = "gunshot";   // safety fallback
          std::string cmd = "AT+SETDETECT=" + types + "\r\n";
          ESP_LOGI("sound", "Setting detect types: %s", types.c_str());
          id(uart_bus).write_array((const uint8_t*)cmd.c_str(), cmd.length());

      - delay: 400ms

      # ── Set thresholds for all 6 event types ──────────────
      - lambda: |-
          int val = (int) id(num_thr_baby_cry).state;
          std::string cmd = "AT+SETEVENTTHRESHOLD=baby_cry," + std::to_string(val) + "\r\n";
          ESP_LOGI("sound", "baby_cry threshold -> %d", val);
          id(uart_bus).write_array((const uint8_t*)cmd.c_str(), cmd.length());
      - delay: 400ms

      - lambda: |-
          int val = (int) id(num_thr_glass_break).state;
          std::string cmd = "AT+SETEVENTTHRESHOLD=glass_break," + std::to_string(val) + "\r\n";
          ESP_LOGI("sound", "glass_break threshold -> %d", val);
          id(uart_bus).write_array((const uint8_t*)cmd.c_str(), cmd.length());
      - delay: 400ms

      - lambda: |-
          int val = (int) id(num_thr_gunshot).state;
          std::string cmd = "AT+SETEVENTTHRESHOLD=gunshot," + std::to_string(val) + "\r\n";
          ESP_LOGI("sound", "gunshot threshold -> %d", val);
          id(uart_bus).write_array((const uint8_t*)cmd.c_str(), cmd.length());
      - delay: 400ms

      - lambda: |-
          int val = (int) id(num_thr_snore).state;
          std::string cmd = "AT+SETEVENTTHRESHOLD=snore," + std::to_string(val) + "\r\n";
          ESP_LOGI("sound", "snore threshold -> %d", val);
          id(uart_bus).write_array((const uint8_t*)cmd.c_str(), cmd.length());
      - delay: 400ms

      - lambda: |-
          int val = (int) id(num_thr_t3).state;
          std::string cmd = "AT+SETEVENTTHRESHOLD=T3," + std::to_string(val) + "\r\n";
          ESP_LOGI("sound", "T3 threshold -> %d", val);
          id(uart_bus).write_array((const uint8_t*)cmd.c_str(), cmd.length());
      - delay: 400ms

      - lambda: |-
          int val = (int) id(num_thr_t4).state;
          std::string cmd = "AT+SETEVENTTHRESHOLD=T4," + std::to_string(val) + "\r\n";
          ESP_LOGI("sound", "T4 threshold -> %d", val);
          id(uart_bus).write_array((const uint8_t*)cmd.c_str(), cmd.length());
      - delay: 400ms

      # ── Save to sensor flash ───────────────────────────────
      - logger.log: "Saving config to sensor..."
      - uart.write:
          id: uart_bus
          data: "AT+SAVECONFIG\r\n"
      - delay: 500ms
      - logger.log: "Settings applied and saved!"


##############################################################
#  INTERVAL - Parse incoming UART lines every 50ms
##############################################################
interval:
  - interval: 50ms
    then:
      - lambda: |-
          while (id(uart_bus).available()) {
            uint8_t b;
            id(uart_bus).read_byte(&b);
            char c = (char)b;

            if (c == '\n') {
              std::string line = id(uart_rx_buffer);
              id(uart_rx_buffer) = "";
              if (!line.empty() && line.back() == '\r') line.pop_back();
              if (line.empty()) continue;

              ESP_LOGD("uart_rx", "<- %s", line.c_str());

              // ── +EVENT: id,confidence ─────────────────────
              if (line.size() > 7 && line.substr(0, 7) == "+EVENT:") {
                std::string payload = line.substr(7);
                while (!payload.empty() && payload[0] == ' ') payload.erase(0,1);

                size_t comma = payload.find(',');
                if (comma != std::string::npos) {
                  int event_id = std::stoi(payload.substr(0, comma));
                  int pct      = (int) std::stof(payload.substr(comma + 1));

                  // ID map matches AudioEventSensor.cpp
                  const char* label_map[] = {"", "baby_cry", "glass_break", "gunshot", "snore", "T3", "T4"};
                  std::string name = (event_id >= 1 && event_id <= 6) ? label_map[event_id] : "unknown";
                  std::string full = name + " " + std::to_string(pct) + "% confidence";

                  id(txt_last_event_full).publish_state(full);
                  id(txt_last_event_name).publish_state(name);
                  id(sen_confidence).publish_state((float)pct);
                  ESP_LOGI("sound", "EVENT: %s", full.c_str());
                }
              }

              // ── +GETFWVERSION:1.0.0 ───────────────────────
              else if (line.size() > 14 && line.substr(0, 14) == "+GETFWVERSION:") {
                std::string ver = line.substr(14);
                while (!ver.empty() && ver[0] == ' ') ver.erase(0,1);
                id(txt_firmware_version).publish_state(ver);
                ESP_LOGI("sound", "Firmware: %s", ver.c_str());
              }

              else if (line == "OK") {
                ESP_LOGD("sound", "<- OK");
              } else if (line.size() >= 5 && line.substr(0, 5) == "ERROR") {
                ESP_LOGW("sound", "<- ERROR: %s", line.c_str());
              }

            } else if (c != '\r') {
              id(uart_rx_buffer) += c;
            }
          }


##############################################################
#  SWITCHES
#  All 6 events ON by default — user can disable any in HA
#  After changing: press the "Apply Settings" button
##############################################################
switch:
  - platform: template
    name: "Detect Baby Cry"          # Class ID 1
    id: sw_detect_baby_cry
    icon: mdi:baby-face-outline
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON  # ← ON by default

  - platform: template
    name: "Detect Glass Break"       # Class ID 2
    id: sw_detect_glass_break
    icon: mdi:glass-fragile
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON  # ← ON by default

  - platform: template
    name: "Detect Gunshot"           # Class ID 3
    id: sw_detect_gunshot
    icon: mdi:target
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON  # ← ON by default

  - platform: template
    name: "Detect Snore"             # Class ID 4
    id: sw_detect_snore
    icon: mdi:sleep
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON  # ← ON by default

  - platform: template
    name: "Detect T3"                # Class ID 5 (custom event)
    id: sw_detect_t3
    icon: mdi:waveform
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON  # ← ON by default

  - platform: template
    name: "Detect T4"                # Class ID 6 (custom event)
    id: sw_detect_t4
    icon: mdi:waveform
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON  # ← ON by default


##############################################################
#  NUMBER SLIDERS - Confidence thresholds
#  All default to 80% — adjust per event in HA
#  After changing: press the "Apply Settings" button
##############################################################
number:
  - platform: template
    name: "Baby Cry Threshold"
    id: num_thr_baby_cry
    icon: mdi:tune
    unit_of_measurement: "%"
    min_value: 0
    max_value: 100
    step: 5
    initial_value: 80             # ← Default 80%
    restore_value: true
    optimistic: true

  - platform: template
    name: "Glass Break Threshold"
    id: num_thr_glass_break
    icon: mdi:tune
    unit_of_measurement: "%"
    min_value: 0
    max_value: 100
    step: 5
    initial_value: 80             # ← Default 80%
    restore_value: true
    optimistic: true

  - platform: template
    name: "Gunshot Threshold"
    id: num_thr_gunshot
    icon: mdi:tune
    unit_of_measurement: "%"
    min_value: 0
    max_value: 100
    step: 5
    initial_value: 80             # ← Default 80%
    restore_value: true
    optimistic: true

  - platform: template
    name: "Snore Threshold"
    id: num_thr_snore
    icon: mdi:tune
    unit_of_measurement: "%"
    min_value: 0
    max_value: 100
    step: 5
    initial_value: 80             # ← Default 80%
    restore_value: true
    optimistic: true

  - platform: template
    name: "T3 Threshold"
    id: num_thr_t3
    icon: mdi:tune
    unit_of_measurement: "%"
    min_value: 0
    max_value: 100
    step: 5
    initial_value: 80             # ← Default 80%
    restore_value: true
    optimistic: true

  - platform: template
    name: "T4 Threshold"
    id: num_thr_t4
    icon: mdi:tune
    unit_of_measurement: "%"
    min_value: 0
    max_value: 100
    step: 5
    initial_value: 80             # ← Default 80%
    restore_value: true
    optimistic: true


##############################################################
#  BUTTONS
##############################################################
button:
  - platform: template
    name: "Apply Settings"
    id: btn_apply_settings
    icon: mdi:content-save-cog
    on_press:
      - script.execute: apply_all_settings

  - platform: template
    name: "Reset Sensor"
    id: btn_reset
    icon: mdi:restart
    on_press:
      - logger.log: "Manual reset triggered"
      - uart.write:
          id: uart_bus
          data: "AT+RESET\r\n"
      - delay: 3s
      - script.execute: apply_all_settings

  - platform: template
    name: "Save Sensor Config"
    id: btn_save_config
    icon: mdi:content-save
    on_press:
      - uart.write:
          id: uart_bus
          data: "AT+SAVECONFIG\r\n"

  - platform: template
    name: "Get Firmware Version"
    id: btn_get_fw
    icon: mdi:information
    on_press:
      - uart.write:
          id: uart_bus
          data: "AT+GETFWVERSION\r\n"

  - platform: restart
    name: "Restart ESP32"
    icon: mdi:restart-alert
    entity_category: config


##############################################################
#  TEXT SENSORS
##############################################################
text_sensor:
  - platform: template
    name: "Last Sound Event"
    id: txt_last_event_full
    icon: mdi:ear-hearing
    # Example: "glass_break 87% confidence"

  - platform: template
    name: "Event Type"
    id: txt_last_event_name
    icon: mdi:waveform
    # Example: "gunshot"
    # Use this in HA automations → trigger when state = "gunshot"

  - platform: template
    name: "Firmware Version"
    id: txt_firmware_version
    icon: mdi:chip
    entity_category: diagnostic

  - platform: wifi_info
    ip_address:
      name: "IP Address"
      icon: mdi:ip-network
      entity_category: diagnostic
    ssid:
      name: "Connected SSID"
      icon: mdi:wifi
      entity_category: diagnostic


##############################################################
#  SENSORS
##############################################################
sensor:
  - platform: template
    name: "Event Confidence"
    id: sen_confidence
    icon: mdi:percent
    unit_of_measurement: "%"
    accuracy_decimals: 0

  - platform: wifi_signal
    name: "WiFi Signal"
    update_interval: 60s
    entity_category: diagnostic
    icon: mdi:wifi-strength-2

```

</details>

:::note
In this example, we are using the XIAO ESP32S3, so you may need to update the following parameters in the YAML file according to your board and wiring configuration
:::

```bash
board: esp32-s3-devkitc-1   # your board name
tx_pin: GPIO43             # your TX pin connection
rx_pin: GPIO44             # your RX pin connection
```

Once your YAML is saved, click **INSTALL**.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/install.png" alt="pir" width={800} height="auto" /></p>

Choose Manual Download

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/manual_download.png" alt="pir" width={500} height="auto" /></p>

Wait for the firmware to compile.

Download the generated .bin firmware file to your computer from Factory Format.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/HA_2026/factory_format.png" alt="pir" width={500} height="auto" /></p>

Connect the embedded sound sensor ESP32-S3 board to your PC using a USB Type-C cable.

Open [Web ESPHome](https://web.esphome.io/?dashboard_wizard) in Google Chrome.

Click Connect and choose the correct serial port from the list.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/HA_2026/web_esphome.png" alt="pir" width={800} height="auto" /></p>

Once connected, click **INSTALL**

Select the .bin file you just downloaded.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/HA_2026/bin_file_choose.png" alt="pir" width={500} height="auto" /></p>

Wait for the installation to complete (may take a few minutes).

After success, you’ll see a confirmation message.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

Return to **Home Assistant > Settings > Devices & Services**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/HA_2026/device_services.png" alt="pir" width={500} height="auto" /></p>

You should see **ESPHome** listed as a discovered integration.

Click Add, then Submit to finish setup.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/discover.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/sound_device_final.png" alt="pir" width={800} height="auto" /></p>

Then, you will be able to interact with the device through the Home Assistant interface and create your own automations with other peripherals. For example, you can trigger a buzzer when glass break is detected, or automatically play calm lullaby music on a smart speaker when a baby’s cry is detected.

## Demo

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/Bb8Jq9ShVJk"
          title="Audio Event Sensor"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

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