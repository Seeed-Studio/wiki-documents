---
description: Voice Assistant System with ReSpeaker Lite and XIAO ESP32S3
title: Voice Assistant System with ReSpeaker Lite and XIAO ESP32S3
keywords:
- ESP32S3
- XIAO
- reSpeaker
- Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_v3_HA
last_update:
  date: 4/2/2024
  author: Jessie
---

Say 'hello' to effortless control and 'goodbye' to tapping on screens with our voice assistant system.<br/>
Picture this: you're cozied up on your couch, and with just a simple shout-out to the [ReSpeaker Lite](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), you can switch up the lights, crank up the tunes, or even ask about the weather – all without lifting a finger. Thanks to a nifty little [Seeed XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) chip, you've got a mini-but-mighty brain that hooks up your voice to Home Assistant, making your smart home smarter and your life a whole lot easier. So, if you're ready to make your home listen and respond to your voice as if it's just another member of the family, let's get started on this voice-activated adventure!


## Getting Started

Navigate to your [Home Assistant web interface](http://homeassistant.local:8123/). 

To unlock the full potential of Home Assistant and gain access to advanced features, it's recomended to enable the `Advanced mode` in the user interface.

Click on your profile, and enable the `Advanced mode`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>


### Install Add-ons

Go to [Settings > Add-ons](https://my.home-assistant.io/redirect/supervisor).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/add-ons.png" alt="pir" width={800} height="auto" /></p>


Under the Official `add-ons` section, you will find the `ESPHome`, `Whisper`, `Piper`, `openWakeWord` add-on, and click `Install`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/.png" alt="pir" width={800} height="auto" /></p>

Enable `Start on boot` and `Watchdog`, and click `Start`.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/start-addons.png" alt="pir" width={800} height="auto" /></p>

:::tip
After the installation script has finished, restart Home Assistant to apply the changes. 

After this add-on is installed and running, it will be automatically discovered by the Wyoming integration.

Go to `Settings` > `System` > `Restart`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>
:::

Navigate to `Settings` -> `Devices & Services`, you will find these integrations under the `Discovered`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/device-page.png" alt="pir" width={800} height="auto" /></p>

Click `CONFIGURE` and `SUBMIT`. 


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/config-success.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/device-page.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/entities.png" alt="pir" width={800} height="auto" /></p>

### Add Seeed Studio XIAO ESP32S3 to ESPHome

* Step 1: Navigate to `ESPHome`, and click `+ NEW DEVICE`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/add-new-esphome.png" alt="pir" width={800} height="auto" /></p>


* Step 2. Enter a Name for your device, then click `NEXT`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/next11.png" alt="pir" width={500} height="auto" /></p>

* Step 4. Select `ESP32-S3`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/choose-s3.png" alt="pir" width={800} height="auto" /></p>

* Step 5. Click `SKIP`, we will configure this file manually.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/.png" alt="pir" width={800} height="auto" /></p>

* Step 6. Click `EDIT` and copy the following code:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/config.png" alt="pir" width={800} height="auto" /></p>

<details>

<summary>.yaml</summary>

```cpp
esphome:
  name: esp32s3
  friendly_name: ReSpeakerv3
  platformio_options:
    board_build.flash_mode: dio
    board_build.mcu: esp32s3
  # on_boot:
  #   then:
  #     - if:
  #            condition:
  #              switch.is_on: 
  #            then:
  #              - voice_assistant.start_continuous:


esp32:
  board: esp32-s3-devkitc-1
  variant: esp32s3
  framework:
    type: esp-idf
    version: recommended

logger:
  level: VERY_VERBOSE

api:


wifi:
  ssid: "Wi-Fi name"
  password: "Wi-Fi password"

captive_portal:

external_components:
  - source: github://QingWind6/ESPHome_XIAO-ESP32S3

i2s_audio_xiao:
  i2s_lrclk_pin: GPIO7
  i2s_bclk_pin: GPIO8
  i2s_mclk_pin: GPIO9


microphone:
  - platform: i2s_audio_xiao
    id: xiao_mic
    adc_type: external
    i2s_din_pin: GPIO44
    pdm: false
    bits_per_sample: 32bit
    channel: left

speaker:
  - platform: i2s_audio_xiao
    id: xiao_speaker
    dac_type: external
    i2s_dout_pin: GPIO43
    mode: stereo

voice_assistant:
  microphone: xiao_mic
  use_wake_word: true
  noise_suppression_level: 0
  auto_gain: 0dBFS
  volume_multiplier: 1
  speaker: xiao_speaker
  id: assist
  on_listening:
    - light.turn_on:
        id: led
        blue: 100%
        red: 0%
        green: 0%
        effect: "Slow Pulse"
  on_stt_vad_end:
    - light.turn_on:
        id: led
        blue: 100%
        red: 0%
        green: 0%
        effect: "Fast Pulse"
  on_tts_start:
    - light.turn_on:
        id: led
        blue: 100%
        red: 0%
        green: 0%
        brightness: 100%
        effect: none
  on_end:
    - delay: 100ms
    - wait_until:
        not:
          speaker.is_playing:
    - script.execute: reset_led
  on_error:
    - light.turn_on:
        id: led
        red: 100%
        green: 0%
        blue: 0%
        brightness: 100%
        effect: none
    - delay: 1s
    - script.execute: reset_led
  on_client_connected:
    - if:
        condition:
          switch.is_on: use_wake_word
        then:
          - voice_assistant.start_continuous:
          - script.execute: reset_led
  on_client_disconnected:
    - if:
        condition:
          switch.is_on: use_wake_word
        then:
          - voice_assistant.stop:
          - light.turn_off: led

light:
  - platform: esp32_rmt_led_strip
    id: led
    name: None
    disabled_by_default: true
    entity_category: config
    pin: GPIO1
    default_transition_length: 0s
    chipset: ws2812
    num_leds: 1
    rgb_order: grb
    rmt_channel: 0
    effects:
      - pulse:
          name: "Slow Pulse"
          transition_length: 250ms
          update_interval: 250ms
          min_brightness: 50%
          max_brightness: 100%
      - pulse:
          name: "Fast Pulse"
          transition_length: 100ms
          update_interval: 100ms
          min_brightness: 50%
          max_brightness: 100%

# light:
#   - platform: monochromatic
#     id: led
#     name: "Desk Lamp"
#     output: light_output
#     effects:
#       - pulse:
#           name: "Slow Breathing Light"
#           transition_length: 5s  # 缓慢呼吸灯，渐变时间较长
#       - pulse:
#           name: "Fast Breathing Light"
#           transition_length: 1s  # 快速呼吸灯，渐变时间较短
#       - pulse:
#           name: "Fast Pulse"
#           transition_length: 0.5s
#           update_interval: 0.5s
#           min_brightness: 0%
#           max_brightness: 100%

output:
  - platform: ledc
    id: light_output
    pin: GPIO21
    inverted: true


script:
  - id: reset_led
    then:
      - if:
          condition:
            - switch.is_on: use_wake_word
            - switch.is_on: use_listen_light
          then:
            - light.turn_on:
                id: led
                effect: none

          else:
            - light.turn_off: 
               id: led


switch:
  - platform: template
    name: Use wake word
    id: use_wake_word
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON
    entity_category: config
    on_turn_on:
      - lambda: id(assist).set_use_wake_word(true);
      - if:
          condition:
            not:
              - voice_assistant.is_running
          then:
            - voice_assistant.start_continuous
    on_turn_off:
      - voice_assistant.stop
      - lambda: id(assist).set_use_wake_word(false);

  - platform: template
    name: Use Listen Light
    id: use_listen_light
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON
    entity_category: config
    on_turn_on:
      - script.execute: reset_led
    on_turn_off:
      - script.execute: reset_led
```
</details>


* Step 7: Click `SAVE` and then `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/click-install.png" alt="pir" width={800} height="auto" /></p>


* Step 8: Choose `Manual Download` -> `Modern-format`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/manual-download.png" alt="pir" width={800} height="auto" /></p>


* Step 9: Connect the XIAO ESP32S3 to your PC via a USB Type-C cable.

* Step 10: Navigate to [Web-ESPHome](https://web.esphome.io/), click `CONNECT`, then choose the port and connect it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>


* Step 11: Select the `.bin` file we just downloaded, and click `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/install.png" alt="pir" width={800} height="auto" /></p>

Wait for a few minutes for the installation. After the installation is successful, you will see the following prompt.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/install-done.png" alt="pir" width={800} height="auto" /></p>





### Add Voice Asssitant

Navigate to `Settings` -> `Voice Assistant`. 


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/voice-assistant.png" alt="pir" width={800} height="auto" /></p>

Enter a name and select:

**Speech to text**: `Whisper`

**Text to speech**: `Piper`

**Wake word engine**: `openwakeword`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/piper-config.png" alt="pir" width={800} height="auto" /></p>


Choose a wakeword you preferred.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/choose-wakeword.png" alt="pir" width={800} height="auto" /></p>



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/piper-config.png" alt="pir" width={800} height="auto" /></p>

