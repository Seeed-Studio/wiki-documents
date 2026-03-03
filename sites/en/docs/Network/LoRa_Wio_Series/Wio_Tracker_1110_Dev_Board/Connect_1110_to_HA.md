---
description: Connect Wio Tracker 1110 to Home Assistant 
title: Home Assistant Integration
keywords:
- Home assistant
- Wio tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /wio_tracker_home_assistant
sidebar_position: 5
last_update:
  date: 1/25/2024
  author: Jessie
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>

Integrate the [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) into Home Assistant for real-time tracking and live environmental analysis. [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) is a user-friendly, LoRa-based tracking development platform, you can use the dev board to develop more custom features, making your home environment more intelligent and responsive.

## Get Started

In this tutorial we use [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) as the Home Assistant host, you can use any Home Assistant host with a Supervisor. Check the [Installation](https://www.home-assistant.io/installation/) for more details.

### Device Configuration

Before we begin, make sure you have read the [User Guide](https://wiki.seeedstudio.com/Get_Started_with_Wio-Trakcer_1110/) of the Wio Tracker 1110 Dev Board, and select the platform to `SenseCAP`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

### Home Assistant Configuration

Navigate to your [Home Assistant web interface](http://homeassistant.local:8123/).

To unlock the full potential of Home Assistant and gain access to advanced features, it's recomended to enable the `Advanced mode` in the user interface.

Click on your profile, and enable the `Advanced mode`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>

#### Install Add-ons

Go to [Settings > Add-ons](https://my.home-assistant.io/redirect/supervisor).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png" alt="pir" width={800} height="auto" /></p>

Under the Official `add-ons` section, you will find the `File editor` and `Advanced SSH & Web Terminal` add-on.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png" alt="pir" width={800} height="auto" /></p>

It's recommended to enable `Show in sidebar` so you can find it more easily.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png" alt="pir" width={800} height="auto" /></p>

#### Install HACS

Home Assistant Community Store gives you a powerful UI to handle downloads of all your custom needs.

Open your terminal and navigate to the config directory:

```cpp
cd /config
```

Download and run the HACS installation script:

```cpp
wget -q -O - https://install.hacs.xyz | bash -
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png" alt="pir" width={600} height="auto" /></p>

After the installation script has finished, restart Home Assistant to apply the changes.

Go to `Settings` > `System` > `Restart`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>

Navigate to `Settings` ->  `Devices & Services`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png" alt="pir" width={800} height="auto" /></p>

Click on `ADD INTEGRATION` to add a new integration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png" alt="pir" width={800} height="auto" /></p>

Search `HACS` and click on it.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png" alt="pir" width={800} height="auto" /></p>

Only the last item (experimental features) are optional, you need to accept everything above that before you can setup HACS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png" alt="pir" width={600} height="auto" /></p>

Follow the instructions to authorize Home Assistant to access your GitHub account. This will typically involve entering a verification code provided by GitHub to confirm your identity.

HACS uses a device OAuth flow for authentication against the GitHub API.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png
" alt="pir" width={600} height="auto" /></p>

#### Install SenseCraft plugin

Navigate to `HACS`, click on the icon in the upper right corner, and choose `Custom repositories`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png
" alt="pir" width={800} height="auto" /></p>

Copy the `Repositorie`:

**Repository**:

```cpp
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

**Category**: `Integration`

Click on `Add`. The repository is now added to your HACS, and you can also find the SenseCraft integration in the list under `Integrations`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png" alt="pir" width={800} height="auto" /></p>

Navigate to the `SenseCraft` integration and click `DOWNLOAD`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" alt="pir" width={800} height="auto" /></p>

We have successfully completed the installation of the SenseCraft plugin now.

#### Add Devices

Navigate to `Settings` -> `Devices & Services` -> `SenseCraft`, click on `ADD DEVICE`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png" alt="pir" width={800} height="auto" /></p>

Select `Add devices using SenseCraft Account(账号集成)`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png" alt="pir" width={800} height="auto" /></p>

Log in with your SenseCAP Mate APP account, and select `global` version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png" alt="pir" width={800} height="auto" /></p>

Then all your devices in your account will be listed, select the one that you want to connect, and then click `SUBMIT`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png" alt="pir" width={800} height="auto" /></p>

Once the connection is successful, you will see the device and entity displayed.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png" alt="pir" width={800} height="auto" /></p>

Click on the device, you will see all the data uploarded, click `ADD TO DASHBOARD`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png" alt="pir" width={800} height="auto" /></p>

#### Add Map Card

Before we add the map card, we need to add a location entity first.

Open the `File Editor` and navigate to `configuration.yaml` file, add the following code:

```cpp
template:
  - sensor:
      - name: "Device Location"
        state: >
          {{ states('sensor.latitude') }},{{ states('sensor.longitude') }}
        attributes:
          latitude: "{{ states('sensor.latitude') }}"
          longitude: "{{ states('sensor.longitude') }}"
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/yaml2.png" alt="pir" width={800} height="auto" /></p>

:::tip
`name` can be customized, and the `states` should be same with the entity id of your device.

You can check the entity id on `Settings` -> `Devices and Services` -> `Entities`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png" alt="pir" width={600} height="auto" /></p>
:::

Click `ADD CARD` on the dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png" alt="pir" width={800} height="auto" /></p>

Choose the Map card.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png" alt="pir" width={800} height="auto" /></p>

Copy the code into the `CODE EDITOR` and click `SAVE`.

```cpp
type: map
entities:
  - entity: sensor.device_location
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png" alt="pir" width={800} height="auto" /></p>

:::tip
The Entity should be same with your entity id, You can check the entity id on `Settings` -> `Devices and Services` -> `Entities`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png" alt="pir" width={600} height="auto" /></p>
:::

You can check the live location on the map now.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png" alt="pir" width={800} height="auto" /></p>

All data of the Dev Board can be viewed in the dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>
