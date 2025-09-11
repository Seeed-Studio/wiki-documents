---
description: This project demonstrates how to implement a single channel LoRa gateway (LoRaHub) using SenseCAP Indicator.
title: Single Channel Gateway - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- LoRaWAN
- ESP32S3
- Single Channel Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.webp
slug: /SenseCAP_Indicator_Single_Channel_Gateway
toc_max_heading_level: 4
sidebar_position: 5
last_update:
  date: 02/11/2025
  author: Leo Liu
---

# Single Channel LoRaWAN Gateway - SenseCAP Indicator

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.png" style={{width:800, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Indicator D1Pro</th>
      <th>SenseCAP Indicator D1L</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1Pro-p-5644.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-p-5646.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

This project demonstrates how to implement a single channel LoRaWAN gateway (LoRaHub) using SenseCAP Indicator which use ESP32S3 as host MCU and SX1262 LoRa radio and build up a LoRaWAN application on The Things Network(TTN). Upgrading the firmware offers a practical solution for those interested in delving into LoRa technology and establishing connections to LNS(lora network server).

For single channel gateways(called One-Channel Hub), which are low-cost tools that enable users to begin exploring the LoRa realm. These gateways can receive LoRa packets on a specific spreading factor and channel and facilitate the exchange of these packets with the network. Due to their affordability, many users have embarked on building their own single-channel gateways to experiment with LoRa.

This is the github project: [SenseCAP Indicator LoRaHub Demonstration](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/examples/indicator_lorahub).

## Flash Firmware

The firmware is prepared for installation. Simply download the latest version from [bin library](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo).

:::tip
We also provide a merged version of firmware in GitHub. The following instruction is based on the separated version for easier understanding for the beginner. If you want to directly burn [the merged version](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo), set the flashing address to 0x0.
:::

If you don't use the complete ESP-IDF environment, it is also possible to flash the provided binary files using the **esptool** utility.

Click to download the firmware:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241106.zip" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬ </font></span></strong>
    </a>
</div>

## Customize and build firmware

If you want to reset the configuration, the following instruction can help you build the firmware by yourself under ESP-IDF environment.

### Setup environment

This project is based on the Espressif ESP-IDF development, check this [guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation ) to setup the environment.

#### Get ESP-IDF

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### Set up Tools

```linux
cd esp-idf/
./install.sh
```

### Installation of One Channel Hub

**Step 1**: Clone the hub to local repository. And navigate to the project path.

```linux
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32.git

cd ~/this_project_directory/
```

**Step 2**: Install required driver

- Get the radio drivers:

```
cd ~/this_project_directory/components/radio_drivers
```

- SX126x driver(sx1261, sx1262, sx1268):

```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- llcc68 driver:

```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- lr11xx driver(lr1121):

```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### Build Firmware

**Step 1**: Enter the lorahub directory.

```
cd ~/this_project_directory/lorahub
```

Prepare your Linux/MAC terminal for building with ESP-IDF from the command line. This step can be skipped on Windows as the installed 'ESP-IDF x.x CMD' tool will prepare the environment automatically.

```
. ~/esp/esp-idf/export.sh
```

Configure the ESP32 target to build for.

```
idf.py set-target esp32s3
```

Customize the build if necessary:

```
idf.py menuconfig
```

Build the project:

```
idf.py all
```

### Flash with esp-idf

Identify the serial device associated to the One-Channel Hub to be flashed.
For linux and mac, can check the serial port by

```
ls /dev/cu*
```

then flash using `idf.py`, replace the **port**

```
idf.py -p port flash
```

If a **permission error** is returned, check that the current user is part of the dialout group. If not, do the following, reboot the linux machine and try again:

```
sudo usermod -a -G dialout $USERNAME
```

On a **Windows** setup, let's suppose that the device is mounted as COM14, the above command would be like:

```
idf.py -p COM14 flash
```

Launch the monitor console to see logs (optional).

```
idf.py -p port monitor
```

### Flash with esptool

If not using the complete ESP-IDF environment, it is also possible to flash the provided binary files using the `esptool` utility.

https://docs.espressif.com/projects/esptool/en/latest/esp32/

```cpp
// Merged version
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// Seperated version
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

On a Windows setup the esptool command for flashing would be:

```cpp
// Merged version
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// Seperated version
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

Replace `port` and `COM` with the name of used serial port. If connection fails, see [Troubleshooting](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting).

### Flash with esptool-JS

[Online esptool](https://espressif.github.io/esptool-js/) is recommended for flashing.

**Step1**: Set Baud rate to 115200 and connect to correct port.

**Step2**: Choose bin file and fill in coresponding flash address.

- Merged version:

|**Flash Address**|**File**|
|----|----|
|0x0|Indicator_Lorahub_v1.0.0.bin|

- Seperated version:

|**Flash Address**|**File**|
|----|----|
|0x0|bootloader.bin|
|0x10000|indicator_lorahub.bin|
|0x8000|partition-table.bin|

## Indicator Configuration

**Step1**. Enter the **Wi-Fi** page to configure the network, select the appropriate SSID, and enter the password.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image.png" style={{width:480, height:'auto'}}/></div>

**Step2**. Configure the parameters on the **LoRa Gateway** page, set LNS and port as "1700", click "configure", and then click "reboot".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/62.png" style={{width:480, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" style={{width:480, height:'auto'}}/></div>

## Connect to The Things Network(TTN)

**Step 1:** Log in to the TTN platform and go to the `console`, click `Gateways->Register gateway`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image2.png" style={{width:600, height:'auto'}}/></div>

**Step 2:** Enter the `Gateway ID` of the Indicator into the `Gateway EUI`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image3.png" style={{width:600, height:'auto'}}/></div>

**Step 3:** After filling in the custom gateway name, select the corresponding Frequency plan (which must match the configuration on the Indicator), and click `Register gateway`. At this point, the single-channel gateway of the Indicator has been added to TTN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image4.png" style={{width:600, height:'auto'}}/></div>

**Step 4:** After adding the Indicator single-channel gateway, click `Applications` to add a device. In this example, the `SenseCAP T1000 Tracker` is used as the node device. For detailed connection steps, refer to the Wiki: https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/. In `End devices`->`General settings`->`Network layer`->`Advanced MAC settings`, you need to set the `Adaptive data rate (ADR)` to **Static mode**, and the `ADR data rate index` needs to be configured according to the `spreading factor` set on the Indicator. For example, if the `spreading factor` is set to 9, the `ADR data rate index` should be set to 3, and similarly for other values.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image5.png" style={{width:600, height:'auto'}}/></div>

**Step 5:** As shown below, you can check the `EVENT DETAILS` in the Live data of the added node device to view related logs. You can see that the node device reports data through the newly added Indicator single-channel gateway.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image6.png" style={{width:600, height:'auto'}}/></div>

## Connect to ChirpStack

**Step 1:** Install ChirpStack refer to <a  href="https://www.chirpstack.io/docs/getting-started/debian-ubuntu.html" target="_blank"><span> Setup ChirpStack on Ubuntu/Debian</span></a>.

**Step 2:** After installing ChirpStack, you need to add a single channel region definition to the `/etc/chirpstack` directory.

In this Wiki, we create a single channel definition under the EU868 band, using the 868.1Mhz channel.
<details>
<summary>region_eu868_1ch.toml</summary>

```toml
# This file contains an example EU868 configuration.
[[regions]]

  # ID is an user-defined identifier for this region.
  id="eu868_1ch"

  # Description is a short description for this region.
  description="EU868_1CH"

  # Common-name refers to the common-name of this region as defined by
  # the LoRa Alliance.
  common_name="EU868"


  # Gateway configuration.
  [regions.gateway]

    # Force gateways as private.
    #
    # If enabled, gateways can only be used by devices under the same tenant.
    force_gws_private=false


    # Gateway backend configuration.
    [regions.gateway.backend]

      # The enabled backend type.
      enabled="mqtt"

      # MQTT configuration.
      [regions.gateway.backend.mqtt]

        # Topic prefix.
        #
        # The topic prefix can be used to define the region of the gateway.
        # Note, there is no need to add a trailing '/' to the prefix. The trailing
        # '/' is automatically added to the prefix if it is configured.
        topic_prefix="eu868"

        # MQTT server (e.g. scheme://host:port where scheme is tcp, ssl or ws)
        server="tcp://$MQTT_BROKER_HOST:1883"

        # Connect with the given username (optional)
        username=""

        # Connect with the given password (optional)
        password=""

        # Quality of service level
        #
        # 0: at most once
        # 1: at least once
        # 2: exactly once
        #
        # Note: an increase of this value will decrease the performance.
        # For more information: https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels
        qos=0

        # Clean session
        #
        # Set the "clean session" flag in the connect message when this client
        # connects to an MQTT broker. By setting this flag you are indicating
        # that no messages saved by the broker for this client should be delivered.
        clean_session=false

        # Client ID
        #
        # Set the client id to be used by this client when connecting to the MQTT
        # broker. A client id must be no longer than 23 characters. If left blank,
        # a random id will be generated by ChirpStack.
        client_id=""

        # Keep alive interval.
        #
        # This defines the maximum time that that should pass without communication
        # between the client and server.
        keep_alive_interval="30s"

        # CA certificate file (optional)
        #
        # Use this when setting up a secure connection (when server uses ssl://...)
        # but the certificate used by the server is not trusted by any CA certificate
        # on the server (e.g. when self generated).
        ca_cert=""

        # TLS certificate file (optional)
        tls_cert=""

        # TLS key file (optional)
        tls_key=""

  # Region specific network configuration.
  [regions.network]
    
    # Installation margin (dB) used by the ADR engine.
    #
    # A higher number means that the network-server will keep more margin,
    # resulting in a lower data-rate but decreasing the chance that the
    # device gets disconnected because it is unable to reach one of the
    # surrounded gateways.
    installation_margin=10

    # RX window (Class-A).
    #
    # Set this to:
    # 0: RX1 / RX2
    # 1: RX1 only
    # 2: RX2 only
    rx_window=0

    # RX1 delay (1 - 15 seconds).
    rx1_delay=1

    # RX1 data-rate offset
    rx1_dr_offset=0

    # RX2 data-rate
    rx2_dr=0

    # RX2 frequency (Hz)
    rx2_frequency=869525000

    # Prefer RX2 on RX1 data-rate less than.
    #
    # Prefer RX2 over RX1 based on the RX1 data-rate. When the RX1 data-rate
    # is smaller than the configured value, then the Network Server will
    # first try to schedule the downlink for RX2, failing that (e.g. the gateway
    # has already a payload scheduled at the RX2 timing) it will try RX1.
    rx2_prefer_on_rx1_dr_lt=0

    # Prefer RX2 on link budget.
    #
    # When the link-budget is better for RX2 than for RX1, the Network Server will first
    # try to schedule the downlink in RX2, failing that it will try RX1.
    rx2_prefer_on_link_budget=false

    # Downlink TX Power (dBm)
    #
    # When set to -1, the downlink TX Power from the configured band will
    # be used.
    #
    # Please consult the LoRaWAN Regional Parameters and local regulations
    # for valid and legal options. Note that the configured TX Power must be
    # supported by your gateway(s).
    downlink_tx_power=-1

    # ADR is disabled.
    adr_disabled=true

    # Minimum data-rate.
    min_dr=5

    # Maximum data-rate.
    max_dr=5

    # Add the following after min_dr/max_dr configuration 
    enabled_uplink_channels=[0] 
```

</details>

You can also customise your single-channel region, see <a  href="https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8" target="_blank"><span> LoRaWAN theory for the One-Channle Hub</span></a>.

**Step 3:** Modify the `/etc/chirpstack/chirpstack.toml` to enable the new defined region.

```toml
enabled_regions={
  ...,
  "eu868_1ch",
  ...,
}
```

**Step 4:** Login into ChirpStack's console and add the single-channel gateway.

Before adding a gateway, check that the single-channel region has been successfully enabled.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-1.png" alt="pir" width={600} height="auto" /></p>

If the single-channel region is successfully enabled, add the single-channel gateway to the ChirpStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-2.png" alt="pir" width={600} height="auto" /></p>

**Step 5:** Configure the parameters on the LoRa Gateway page, set address to your ChirpStack server's address, click `configure` and then click `reboot`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" alt="pir" width={600} height="auto" /></p>

After reboot, you can see the status turn to online in the ChirpStack's console.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-3.png" alt="pir" width={600} height="auto" /></p>

**Step 6:** We can optimise the end device's join time by using the same data rate with a single-channel gateway.

Referring to the single-channel gateway configuration `SF7 BW125`, we adjust the data rate of the T1000-A to `DR5`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-4.png" alt="pir" width={600} height="auto" /></p>

After configuring the data rate of the T1000-A, we need to create a device profile for it.

Select `EU868` for the region and `EU868_1CH` for the region configuration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-5.png" alt="pir" width={600} height="auto" /></p>

As you can see in the figure below, you can see that the T1000-A successfully uploaded data to ChirpStack through the single-channel gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-6.png" alt="pir" width={600} height="auto" /></p>

## Resource

- [One Channel Hub Firmware for SenseSAP Indicator](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241031.zip)
- [Github Repository](https://github.com/Lora-net/one_channel_hub)
- [Semtech Application Note](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8)

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
