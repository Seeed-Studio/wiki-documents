---
description: Control the lights and appliances in Home Assistant by voice with speech recognised locally — hardware, deployment, interfaces and measured data on a reComputer J40
title: Home Assistant Local Voice Control — Selection, Deployment and Measured Data
sidebar_label: 'Home Assistant Local Voice'
keywords:
  - Home Assistant local voice
  - Home Assistant voice assistant
  - smart home voice control
  - local speech recognition
  - Wyoming
  - Home Assistant Voice
  - Zigbee
  - Jetson Orin NX
  - Qwen3-ASR
  - Matcha-TTS
image: https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg
slug: /solutions/home-assistant-local-voice
sidebar_position: 24
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/solutions/home-assistant-local-voice/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Before you use it]
Voice commands in Chinese and English. The official Xiaomi Home integration for Home Assistant is licensed for non-commercial use only and is not pre-installed; do not use it in commercial projects.
:::

## What this solution does

Bring the lights, curtains, air conditioning and Zigbee sensors in a home into Home Assistant and control them with one sentence. Say "turn on the living room light" and Home Assistant carries it out locally and answers that the light is on. Speech recognition and speech synthesis run on a local reComputer J40, so spoken audio is not uploaded to a cloud speech service. It fits living rooms and bedrooms, and smart-home integrators delivering systems in customers' homes.

- Deployment package (Docker Compose and Home Assistant configuration template): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/home_assistant_whole_home)
- Voice engine source: [github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- Selection and deployment: [reference design page](https://www.seeed.cc/solutions/reference-designs/home-assistant-local-voice-hub)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>No audio to the cloud</h3>
                <p>Understanding the command and speaking the reply both happen on the reComputer J40; Home Assistant executes locally.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Text 0.12 s after speech</h3>
                <p>Median over 5 Chinese and English commands; see "Performance and measured data".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Native Home Assistant integration</h3>
                <p>The voice service joins the Home Assistant voice assistant through the Wyoming Protocol integration, with no changes to Home Assistant.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Zigbee devices directly</h3>
                <p>Plug in a Connect ZBT-2 and Zigbee sensors and switches join Home Assistant without brand gateways.</p>
            </div>
        </li>
    </ul>
</div>

### On a real device

One exchange in the Home Assistant voice assistant: the spoken "turn on the living room light" (in Chinese) is recognised by the local voice service, Home Assistant carries it out and replies that the light is on, and the living-room light card on the right turns on.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg" alt="Home Assistant voice assistant: turn on the living room light, the light is on"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/dashboard-zh-20261008-53455231.jpg" alt="Home Assistant dashboard: living room light, curtains, temperature, humidity, air conditioning; bedroom light and humidifier"/>
</div>

The lights, curtains, air conditioning and sensors in the screenshots are simulated demo devices; the voice input was synthesised by the same reComputer J40, not recorded from a person.

## Hardware you need

Four things on site: the Home Assistant host, the voice host, a Zigbee coordinator and a voice terminal.

| Device | Role | Notes |
|---|---|---|
| ARM64 Linux host (64-bit OS, 8 GB RAM) | Runs Home Assistant | One per home |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> [reComputer Super J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html) | Local speech recognition and synthesis | Downloads the voice models on first start; keep at least 30 GB of disk free |
| Home Assistant Connect ZBT-2 | Brings in Zigbee devices | Plugs into a USB port of the Home Assistant host |
| Home Assistant Voice Preview Edition | Voice terminal in the room: listens and plays replies | One per room |
| SONOFF SNZB Zigbee sensors (optional) | Temperature, humidity and other states | Join through the ZBT-2 |

The Home Assistant host, reComputer J40 and voice terminals share one LAN. For the Apple Home app, the iPhone must be on the same LAN as the Home Assistant host.

## Deploying on site

### 1. Place the devices

:::tip[Keep the voice host separate from Home Assistant]
The reComputer J40 only runs the voice service, so it can sit in a cabinet or network enclosure and talk to Home Assistant over the LAN; put a voice terminal in each room where people speak.
:::

### 2. Install the software: three steps

Device-by-device steps are on the reference design page; this is the outline.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/home-assistant-local-voice-hub" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Choose a setup and deploy 🖱️</font></span></strong>
    </a>
</div><br />

1. **Home Assistant host**: deploy Home Assistant with the bundled Chinese, English and Japanese command sentences and the room/device template.
2. **Voice host**: deploy the voice service on the reComputer J40; it downloads the models on first start, then recognition and synthesis run on the device.
3. **Connect and check**: add the Wyoming Protocol integration in Home Assistant pointing at the two ports of the reComputer J40, select it as the assistant's speech-to-text and text-to-speech, then say "turn on the living room light" to a voice terminal and confirm the light turns on.

## Interfaces

The voice service is offered to Home Assistant over the Wyoming Protocol; all other automation stays in Home Assistant.

- **Home Assistant**: add the Wyoming Protocol integration; `seeed-local-voice` appears as speech-to-text and text-to-speech in the voice assistant.
- **Apple Home / Siri**: Home Assistant's HomeKit bridge syncs the devices to the iPhone.
- **Your own system**: read and write device states through Home Assistant's own API.

| Port | Machine | Content |
|---|---|---|
| HTTP 8123 | Home Assistant host | Home Assistant web UI and API |
| TCP 10300 | reComputer J40 | Speech-to-text service (Wyoming) |
| TCP 10200 | reComputer J40 | Text-to-speech service (Wyoming) |

## Performance and measured data

### End to end: speech to action

Home Assistant ran on an ARM64 Linux host with 8 GB of RAM and the voice service on a reComputer J40 Series (Orin NX 16GB); input was synthesised speech fed to the Home Assistant voice assistant.

| Metric | Result |
|---|---|
| Chinese and English light commands | 5/5 carried out, all handled locally by Home Assistant (measured) |
| End of speech to recognised text | median 0.12 s, range 0.11–0.95 s (measured) |

Reproduce: `sensecraft-solutions/solutions/home_assistant_whole_home` (deployment package)

### Voice service on its own

Same reComputer J40 Series, voice service called directly, 16 kHz mono synthesised speech as input.

| Text | First reply audio | Recognised | Transcription after end of speech |
|---|---:|---|---:|
| 打开客厅灯 (turn on the living room light) | 0.122 s (measured) | 打开客厅灯。 | 0.383 s (measured) |
| 关闭卧室的灯 (turn off the bedroom light) | 0.049 s (measured) | 关闭卧室的灯。 | 0.421 s (measured) |
| Turn on the living room light | 0.115 s (measured) | Turn on the living room light. | 0.579 s (measured) |

Through the Wyoming path, two samples were transcribed in 0.13 s (measured).

Reproduce: `sensecraft-solutions/solutions/home_assistant_whole_home/assets/docker/docker-compose.jetson-voice.yml`

### Models and runtimes

| Device | Speech recognition | Speech synthesis | Runtime |
|---|---|---|---|
| reComputer J40 Series | Qwen3-ASR | Matcha-TTS | TensorRT-Edge-LLM / TensorRT |

Settings that affect results:

- Assistant language: Chinese or English, each with its bundled command sentences.
- Device and room names: commands match names in Home Assistant, so "living room light" must match the entity name.

### Known degradation

- **Entity alias and phrasing divergence**: Intent matching relies on entity names and aliases. If a spoken phrase diverges significantly from the configured Home Assistant entity alias, the text may be transcribed correctly without firing an automation.
- **Compound and sequential intents**: The pipeline is tuned for single-intent home control; compound requests (e.g. "turn on AC and close the blinds halfway") should be issued as separate commands.
- **Multi-client voice concurrency**: A single J4012 host comfortably serves 1–3 voice satellite endpoints; simultaneous long speech inputs from multiple rooms may cause a slight increase in time-to-first-token.

## Data and asset sources

- Screenshots come from Home Assistant 2026.9.3 (Apache License 2.0, [home-assistant.io](https://www.home-assistant.io)) with simulated devices.
- Voice input was generated by the same reComputer J40's speech synthesis; no human recordings or third-party audio were used.
