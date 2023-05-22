---
description: Introducing how to deploy Sidewalk's services on the XIAO nRF52840.
title: Seeed Studio XIAO nRF52840 on Sidewalk
keywords:
- sidewalk
- XIAO BLE
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-ble-sidewalk
last_update:
  date: 05/17/2023
  author: MengDu
---

# Seeed Studio XIAO nRF52840 on Sidewalk

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/19.jpg" style={{width:1000, height:'auto'}}/></div>

Amazon Sidewalk is a wireless network protocol developed by Amazon that allows compatible devices to share a small portion of their internet bandwidth with nearby devices. The goal of Sidewalk is to create a larger, more resilient network that can extend the range of smart home devices and improve their connectivity.

The devices that can participate in the Sidewalk network include Amazon's Echo, Ring, and Tile devices, as well as select third-party smart home devices. It is pleasing to note that Seeed Studio has recently completed support for Sidewalk with the XIAO nRF52840. The network operates using a portion of the 900 MHz spectrum and Bluetooth Low Energy (BLE) technology, which are designed to provide a low-power, long-range signal that can penetrate walls and other obstacles.

Amazon Sidewalk is currently available in select regions and is opt-in by default. Users can choose to disable Sidewalk on their devices if they prefer not to participate in the network.

:::note
Amazon Sidewalk is available only in the United States of America. To an extent, any Sidewalk gateway functionality might be used outside of the U.S., however, it should be used only for the Amazon Sidewalk endpoint development purposes. In addition, we recommend that you consult with your local regulatory bodies, and check if the gateway is allowed to operate its radio in your locale, as U.S. license-free band devices, only for development.
:::

The documentation will guide you through:

1. Install and configure Sidewalk's development environment.

2. Configure your cloud services and managing your XIAO nRF52840.

3. Run Sidewalk's BLE example program.

Once completed, you will be able to run a sample application and test it with Sidewalk.

## Hardware preparation

The content of this tutorial will minimise the need for soldering or additional wiring. So we will use two expansion boards that are currently available to help us complete the project as quickly as possible. Of course, if you don't want the extra expense, you can also choose to connect the device directly to the XIAO via a breadboard or duplex cable. That said, the devices in Essential are the basic hardware you must have and Optional is not essential.

### Essential

To complete the content of this sample tutorial, the following may be necessary to be prepared.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO nRF52840 Sense</th>
			<th>Sidewalk gateway</th>
            <th>Grove - Red LED Button</th>
            <th>J-Link</th>
            <th>USB to UART</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/20.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/21.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/22.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
            <td></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Button.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
            <td></td>
            <td></td>
		</tr>
	</table>
</div>


### Optional

For easy wiring and Grove expansion, or for easy connection to XIAO via JLink, you may need the following expansion boards.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio Expansion board for XIAO</th>
			<th>Seeed Studio Grove Base for XIAO</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Configure Sidewalk's development environment

:::tip
The original tutorial for the quick installation of the nRF Connect SDK can be read [here](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/assistant.html#installing-automatically).
:::

The Amazon Sidewalk solution from Nordic Semiconductor is based on the nRF Connect SDK v2.3.0. You can set up your development environment by following one of the installation methods below:

- Automatic installation (Toolchain Manager)
- [Manual installation](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/gs_installing.html#install-the-required-tools)

This section will focus on how to install the nRF Connect SDK via Toolchain Manager, the Automatic installation method. The system is based on Windows 11.

Complete the steps below to install the nRF Connect SDK automatically using the Toolchain Manager application. The application installs the full toolchain for the nRF Connect SDK, including the nRF Connect for VS Code extension and the nRF Connect SDK source code.

### Install prerequisites

Before you start setting up the toolchain, install available updates for your operating system. See [Requirements](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/recommended_versions.html#gs-recommended-versions) for information on the supported operating systems and Zephyr features.

Additionally, make sure you install the Universal version of SEGGER J-Link. This is required for SEGGER J-Link to work correctly with both Intel and ARM assemblies.

### Install Toolchain Manager

Toolchain Manager is available from nRF Connect for Desktop, a cross-platform tool that provides different applications that simplify installing the nRF Connect SDK. Both the tool and the application are available for Windows, Linux, and macOS.

**Step 1**. Download [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop) for your operating system.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/1.png" style={{width:800, height:'auto'}}/></div>

**Step 2**. Install and run the tool on your machine.

**Step 3**. In the **APPS** section, click **Install** next to **Toolchain Manager**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/2.png" style={{width:800, height:'auto'}}/></div>

**Step 4**. The app is installed on your machine, and the **Install** button changes to **Open**.

**Step 5**. Open Toolchain Manager in nRF Connect for Desktop.

Click **SETTINGS** in the navigation bar to specify where you want to install the nRF Connect SDK.

**Step 6**. In SDK ENVIRONMENTS, click the **Install** button next to the **nRF Connect SDK version** that you want to install.

The nRF Connect SDK version of your choice is installed on your machine. The Install button changes to **Open VS Code**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/3.png" style={{width:800, height:'auto'}}/></div>

:::tip
The installation time is related to the network in your environment and the installation is expected to take about one hour.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/4.png" style={{width:800, height:'auto'}}/></div>

### Downloading Sidewalk repository

After installation, there are two ways you can build an application:

- Using Visual Studio Code and the nRF Connect for VS Code extension
- Using command line

**Step 7**. For our project, the use of the command line is sufficient. Click the down arrow next to the version you installed, and select **Open bash**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/23.png" style={{width:800, height:'auto'}}/></div>

Your directory structure should look as follows:

```
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

**Step 8**. Clone the [Sidewalk application repository](https://github.com/nrfconnect/sdk-sidewalk) from the sdk-sidewalk repository to the nRF Connect SDK folder, and name it `sidewalk` by running the following command:

```
git clone https://github.com/nrfconnect/sdk-sidewalk.git sidewalk
```

**Step 9**. Install Python requirements for Sidewalk.

```
pip install -r sidewalk/requirements.txt
```

:::note
If your computer does not already have a Python environment installed, please read the tutorial [here](https://www.digitalocean.com/community/tutorials/install-python-windows-10) to install the latest Python 3 on your computer.
:::

**Step 10**. Set the Sidewalk application manifest and update.

Check the current manifest path:

```
west manifest --path
```

The path returned should be similar to the following format.

```
> /path-to-ncs-folder/nrf/west.yml
```

Set the manifest path to the Sidewalk repository:

```
west config manifest.path sidewalk
```

Update all repositories:

```
west update
```

Depending on your connection, the update might take some time. 

Verify the new manifest path:

```
west manifest --path
```

The path returned should be similar to the following format.

```
> /path-to-ncs-folder/sidewalk/west.yml
```

Please keep the Bash window open, we'll be back in a few minutes.

## Configure your AWS cloud services

:::tip
The original tutorial for the Setting up your Sidewalk product can be read [here](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html).
:::

Next we need to configure AWS Cloud Services so that the device is connected to your AWS account via a key.

**Step 1**. Download the Amazon Sidewalk Sample IoT App Repository to your local machine.

```
git clone https://github.com/aws-samples/aws-iot-core-for-amazon-sidewalk-sample-app.git
```

**Step 2**. Create an AWS account (https://aws.amazon.com/).

**Step 3**. Create user in AWS IAM service ([Creating IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console))

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/6.png" style={{width:800, height:'auto'}}/></div>

**Step 4**. Configure user's authentication credentials ([Managing access keys -> To create an access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey))

**Step 5**. Configure *credentials* file on your local machine ([Boto3 -> QuickStart -> Configuration](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html#configuration))

:::note
If you haven't already installed the [AWS CLI](https://aws.amazon.com/cli/), then you may need to install it.
:::

If you have the AWS CLI installed, then you can use the aws configure command to configure your credentials file. If you are using a Windows system, you will need to execute the command in a **CMD window** with administrator privileges.

```
aws configure
```

The window will then ask you to enter your keys, please enter them separately and enter to confirm.

```
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

This is followed by the choice of country and region, here we need to select **us-east-1**.

```
region=us-east-1
```

For the rest, we simply enter and leave the default.

**Step 6**. Add user permissions to create resources:

- If your user has Admin permissions, prerequisite is already satisfied, you can skip this point.
    - Otherwise you need to assign your user a policy with proper permissions:
        - Run `python aws-iot-core-for-amazon-sidewalk-sample-app/ApplicationServerDeployment/policies/generate_policy.py` script, which will generate personalized policy documents in *ApplicationServerDeployment/policies/* directory 
        - go to the IAM console, create the policy using *DeployStackPolicy.json* content
        - assign created policy to your user
        Refer to the [IAM tutorial: Create and attach your first customer managed policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_managed-policies.html) for further guidance.

Make sure *Simplicity Commander* (for SiLabs) are present in your system PATH environment variable.

Try calling `commander --version` in the terminal to make sure the Simplicity Commander is available.

## Run Sidewalk's BLE example

:::tip
The original tutorial for the Template Bluetooth LE can be read [here](https://nrfconnect.github.io/sdk-sidewalk/testing_samples/sidewalk_application_samples/template_ble.html#template-ble).
:::

### Provisioning generation

**Step 1**. Go to AWS IoT Core for Sidewalk tools:

```
cd aws-iot-core-for-amazon-sidewalk-sample-app
```

**Step 2**. Populate the `config.yaml` configuration file. Set **NORDIC** hardware platform:

```
Config:
AWS_PROFILE: default  # Name of your AWS profile from .aws/credentials
DESTINATION_NAME: TemplateAppDestination  # Sidewalk destination used for uplink traffic routing
HARDWARE_PLATFORM: NORDIC  # Available values: NORDIC, TI, SILABS or ALL
USERNAME: null
PASSWORD: null
INTERACTIVE_MODE: True
Outputs:
    DEVICE_PROFILE_ID: null
    WEB_APP_URL: null
_Paths:
    PROVISION_SCRIPT_DIR: tools/provision
    SILABS_COMMANDER_TOOLS_DIR: null  # Not needed if Silabs Commander is already in system Path. Only needed for SILABS.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/7.png" style={{width:800, height:'auto'}}/></div>


**Step 3**. Set up Python virtual environment for the provisioning tools:

```
python -m pip install --user virtualenv
python -m venv sample-app-env
sample-app-env\Scripts\activate.bat
python -m pip install --upgrade pip --user
python -m pip install -r requirements.txt --user
python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
```

**Step 4**. At this point you may want to run a `helper env_check.py` script to sanity check your environment against the most common errors.

```
python3 env_check.py
```

If the message appears as shown, then your environment installation has gone well.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/8.png" style={{width:800, height:'auto'}}/></div>

**Step 5**. Run the device provisioning scripts:

```
python3 EdgeDeviceProvisioning/provision_sidewalk_end_device.py
```

You should see the following output:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/9.png" style={{width:800, height:'auto'}}/></div>

We need the `Nordic_MFG.hex` file that has been generated here, which will eventually be flashed into the XIAO nRF52840.

Your provisioning file is located in the `EdgeDeviceProvisioning` directory. Devices are grouped in the device profile’s subdirectory as shown in the structure below:

```
EdgeDeviceProvisioning \
- DeviceProfile_<profile-id> \
- DeviceProfile.json
- WirelessDevice_<device-id>\
    --  Nordic_MFG.bin
    --  Nordic_MFG.hex
    --  WirelessDevice.json
```

Please copy it and save it in a place where you can easily find it.

**Step 6**. Exit the Python virtual environment:

```
deactivate
```

### Add MQTT to destination

For this part of the tutorial you can read the [official tutorials](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html#add-mqtt-to-destination) provided by Sidewalk.

### Samples overview

The sample demonstrates a template for Sidewalk End Node application. It is optimized for Bluetooth LE.

The sample supports the following development kits:

| Hardware platforms | PCA | Board name | Build target |
| ------------------ | --- | ---------- | ------------ |
| nRF52840 DK        | PCA10056 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

As Sidewalk has not yet merged our PR submission, we will currently support the XIAO nRF52840 by modifying the supported nRF52840 DK platform.

| Hardware platforms | Board name | Build target |
| ------------------ | ---------- | ------------ |
| Seeed Studio XIAO nRF52840 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

The sample shows implementation of the Sidewalk API for the Bluetooth LE transport protocol. It is a memory-optimized example of Sidewalk configuration where only Bluetooth LE transport protocol is supported. Because of the smaller footprint, both bootloader partitions for the application are placed in the internal flash memory of the supported SoC (nRF52840).

#### User Interface

A button action is triggered when you release the button. To use a long press action, hold a button for 2 seconds or longer, and release it.

The button assignment is as follows:

- **Button 1 (long press) -- D1**:

    Factory Reset - The application informs the Sidewalk stack about the factory reset event. The Sidewalk library clears its configuration from the non-volatile storage. After a successful reset, the device needs to be registered with the cloud services again.

- **Button 2 -- D3**:

    Toggle Connection Request - The device requests the Sidewalk Gateway to initiate a connection while the device is advertising through Bluetooth LE. After the connection is dropped, the user has to set the beacon state again. Gateways may not always be able to process this request, as it depends on the number of devices connected to it.

- **Button 3 -- D4**:

    Send Hello - This action will queue a message to the cloud. If Sidewalk is not ready, it will simply show an error without sending the message. The queue will be processed eventually, and all the queued messages will be sent.

- **Button 4 (short press) -- D9**:

    Set fake battery level - The action sets a simulated battery level.

- **Button 4 (long press) -- D9**:
    Enter DFU state - This action disables the Sidewalk stack and starts the Bluetooth LE SMP Server. You can update the firmware image using nRF Connect for mobile application. To exit DFU state, perform a power cycle on your device.

LEDs represent the current state of the application (Not yet achieved):

- **LED 1 -- D0**:

    Application Connected successfully.

- **LED 2 -- D2**:

    Application Registered successfully.

- **LED 3 -- D5**:

    Application time sync successful.

- **LED 4 -- D8**:

    Application link is up.

### Preparing sample firmware

**Step 1**. Download the program written for the XIAO nRF52840 from Github.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-nRF52840-sidewalk/releases/tag/v1.0.0">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Releases</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

**Step 2**. Once downloaded, please unzip the folder into the ncs directory. The default path is as follows:

```
C:\ncs\v2.3.0\zephyr\boards\arm\nrf52840dk_nrf52840
```

:::caution
The file directory originally held the development files for the nRF52840 DK. For simplicity, we have overwritten the development board by renaming the XIAO nRF52840 program.

So all you need to do is to overwrite all the files in the original file **nrf52840dk_nrf52840** with all the files in the zip archive.
:::

**Step 3**. Let's go back to the Bash window of the nRF Connect SDK. Enter the following command to perform the firmware generation.

```
cd sidewalk/samples/template_ble/

west build -b nrf52840dk_nrf52840
```

If the execution goes well, you will see the following output.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/10.png" style={{width:800, height:'auto'}}/></div>

At this point we've got the sample firmware, which is named: `merged.hex` and stored in the default location of:

```
C:\ncs\v2.3.0\sidewalk\samples\template_ble\build\zephyr
```

You can start by putting this file together with the Nordic_MFG.hex file we prepared earlier and we will use them together later.

### Flash firmware for XIAO nRF52840

**Step 1**. Open nRF Connect for Desktop, find **Programmer** in the APPS and install it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/11.png" style={{width:800, height:'auto'}}/></div>

**Step 2**. Connect the XIAO nRF52840 via JLink.

Please connect the XIAO nRF52840 to the JLink via the SWD interface.

| Seeed Studio XIAO nRF52840 | JLink |
| -------------------------- | ----- |
| 3V3                        | Vterf |
| GND                        | GND   |
| SWDIO                      | SWIO  |
| SWCLK                      | SWCK  |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/24.jpg" style={{width:800, height:'auto'}}/></div>

If you do not intend to use the XIAO expansion board, then you can refer to the [XIAO nRF52840 Wiki](https://wiki.seeedstudio.com/XIAO_BLE#access-the-swd-pins-for-debugging-and-reflashing-bootloader) on the use of the SWD interface to additionally solder duplex wire to the JLink.

    
**Step 3**. Open Programmer and burn both firmware to the XIAO nRF52840.

Click the **Add file** button in the top left corner of the software and add the **merged.hex** file and **Nordic_MFG.hex** prepared in this article respectively.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/12.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/13.png" style={{width:800, height:'auto'}}/></div>

Then connect the JLink to your computer and click on the top left corner to select your device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/14.png" style={{width:800, height:'auto'}}/></div>

Once connected, click the Read button on the left to get the memory partition of the XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/15.png" style={{width:800, height:'auto'}}/></div>

Next click on **Erase & write** to flash the firmware into XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/16.png" style={{width:800, height:'auto'}}/></div>

When you have finished you can click on **Read** to see if the shape of the memory is approximate, this allows you to check if the flash memory was successful.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/17.png" style={{width:800, height:'auto'}}/></div>

**Step 4**. Assemble the Sidewalk device and make it work.

In the preview of the example we have marked the pin positions to which the LEDs and Button are connected. Next we will need to use the four Grove LED Buttons, which not only allow us to control the work of the XIAO, but also show the different working states by means of the LEDs on the buttons.

| Seeed Studio XIAO nRF52840 | LED  | Button  | USB to UART |
| :------------------------: | :--: | :-----: | :---------: |
| D0                         | LED1 |         |             |
| D1                         |      | Button1 |             |
| D2                         | LED2 |         |             |
| D3                         |      | Button2 |             |   
| D4                         | LED3 |         |             |
| D5                         |      | Button3 |             |
| D8                         | LED4 |         |             |
| D9                         |      | Button4 |             |
| RX (D7)                    |      |         | TX          |
| TX (D6)                    |      |         | RX          |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/25.jpg" style={{width:800, height:'auto'}}/></div>

The XIAO is powered via USB and then the XIAO nRF52840 is controlled using pushbuttons and the XIAO operation log is available via UART.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/18.png" style={{width:600, height:'auto'}}/></div>


## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>


