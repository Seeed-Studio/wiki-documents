---
description: Seeeduino Cloud and Grove IoT Starter Kit Powered by AWS
title: Seeeduino Cloud and Grove IoT Starter Kit Powered by AWS
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_seeeduino_wiki_cover.JPG)

*Main articles: Start here <a href="/Grove_IoT_Starter_Kits_Powered_by_AWS" ><span><font size={"3"}> Grove IoT Starter Kits Powered by AWS </font></span></a> , <a href="/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a>*

**<a href="/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a>** is a microcontroller board based on Dragino WiFi IoT module [HE](http://www.dragino.com/products/linux-module/item/87-he.html) and ATmega32u4. **HE** is a high performance, low-cost 150M, 2.4G WiFi module which with an Open Source OpenWrt system inside. Seeeduino Cloud is also an [Arduino Yun](https://www.arduino.cc/en/Main/ArduinoBoardYun) compatible board. This kit includes most frequently used sensors and actuators to turn your ideas into tangible applications with AWS Cloud computing.

[![enter image description here](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B01669BB60)

## Features

--------

- Out-of-the-box, plug and play, no breadboard or soldering work required.
- Fully compliant with AWS's services and AWS's practices.
- Step-by-step tutorials for developers and makers for quicker prototyping.

## Part List

-------------------

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_seeeduino_cloud.JPG)

| Board/Part                                                                                                                                            | Qty | Documentation                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----|-------------------------------------------------------------------------------|
| [Seeeduino Cloud development board](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html?cPath=6_7) | 1   | <a href="/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a>                               |
| [Base Shield](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html?cPath=98_16)                                                                | 1   | [Read Here](/Base_Shield_V2/ "Base shield v2")                                 |
| [Grove - LCD RGB Backlight](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html?cPath=34_36)                                         | 1   | [Read Here](/Grove-LCD_RGB_Backlight "Grove - LCD RGB Backlight")             |
| [Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)                                                                  | 1   | [Read Here](/Grove-Relay "Grove - Relay")                                     |
| [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)                                                                   | 1   | [Read Here](/Grove-Buzzer "Grove - Buzzer")                                   |
| [Grove - Sound Sensor](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                                   | 1   | [Read Here](/Grove-Sound_Sensor "Grove - Sound Sensor")                       |
| [Grove - Touch Sensor](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)                                                    | 1   | [Read Here](/Grove-Touch_Sensor "Grove - Touch Sensor")                       |
| [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)                                      | 1   | [Read Here](/Grove-Rotary_Angle_Sensor "Grove - Rotary Angle Sensor")         |
| [Grove - Temperature Sensor](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                                       | 1   | [Read Here](/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2") |
| [Grove - LED](https://www.seeedstudio.com/Grove-LED-p-767.html)                                                                                  | 1   | [Read Here](/Grove-Red_LED "Grove-Red_LED")                                         |
| [Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)                                                    | 1   | [Read Here](/Grove-Light_Sensor "Grove - Light Sensor")                       |
| [Grove – Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)                                                                | 1   | [Read Here](/Grove-Button "Grove - Button")                                   |
| DIP LED Blue-Blue                                                                                                                                     | 1   |                                                                               |
| DIP LED Green-Green                                                                                                                                   | 1   |                                                                               |
| DIP LED Red-Red                                                                                                                                       | 1   |                                                                               |
| Mini Servo                                                                                                                                            | 1   |                                                                               |
| Micro USB Cable - 48cm                                                                                                                                | 1   |                                                                               |

## Configure Your AWS IoT Service

------------------------------

In this section, we will show how to config the AWS IoT Service:

- Step 1. Create an [AWS Account](https://aws.amazon.com/free/?nc1=h_ls).

- Step 2. Go to [AWS IoT](https://us-west-2.console.aws.amazon.com/iotv2/home?region=us-west-2#/home).

- Step 3. After you load the IoT console, click on “Get Started”.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Get%20started.png)

- Step 4. Click on “Manage” on the left side menu.and Click on “Register a thing”.
- Step 5. Enter a name, whatever you like, in the original tutorial it was called temperature, then click "create" ("Register a thing" image).

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Register%20a%20thing.png)

- Step 6. Click on the thing that you create.
- Step 7. Click on Security on the left menu and click on Create certificate.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Thing%20-%20Security.png)

- Step 8. It will show three download links which are correspond to different key files or certificate. Download these file, we need them later. Also make sure to download the root CA (above the "Activate" button"). Click on Activate and then click on Attach a policy and then on Create a policy.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20created.png)

- Step 9. Name your policy however you want, we named our policy1. To start, you can use iot:*as the Action and*as the Resource ARN. Check mark Allow and click create.
For future reference, the * for actions and resource ARN allows you to do all actions on all devices. The best practice for production policies is to make them more specific.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Create%20a%20policy.png)

- Step 10. Now that the policy has been created, click on Certificates on the left side.
Click on the certificate we previously created.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificates.png)

- Step 11. Click on the Actions button and pick Attach policy from the menu.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20Actions.png)

- Step 12. Pick the policy we previously created and click Attach.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Attach%20policy.png)

## Set up your Seeeduino Cloud (Arduino Yun)

-----------------------------------------

### Getting started with Seeeduino Cloud (Arduino Yun)

If this is your first time to use Seeeduino Cloud or Arduino Yun, you can click <a href="/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a> to get started. Before proceeding to the following steps, please make sure that you have **expect** installed on your computer and correctly installed the [Arduino IDE](https://www.arduino.cc/en/Main/OldSoftwareReleases).

### Download AWS-IoT-Arduino-Yún-SDK

Click [here](https://s3.amazonaws.com/aws-iot-device-sdk-arduino-yun/AWS-IoT-Arduino-Yun-SDK-latest.zip) to download AWS-IoT-Arduino-Yún-SDK zip package and extract it to AWS-IoT-Arduino-Yun-SDK on your computer.

### Installation on Mac OS/Linux

Before proceeding to the following steps, please make sure that you have installed on your computer and correctly installed the Arduino IDE.

#### To install Ubuntu

For Ubuntu, simply run the following command. sudo apt-get install expect For Mac OS X, **expect** is installed as default.

#### To install Arduino IDE

For Arduino IDE installation on Linux, please visit [here](http://playground.arduino.cc/Linux/All).

#### Set up development board

- Step 1. Set up the Arduino Yún board and connect it to WiFi. Obtain its IP address and password. If you don’t know how to do it you can follow this <a href="/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a>.
- Step 2. Make sure your computer is connected to the same network (local IP address range).
- Step 3. Download the AWS IoT CA file from [here](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem). And save it as *root-CA.crt*.
- Step 4. Put your AWS IoT CA file, private key and certificate into AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs.
- Step 5. Open a terminal, cd to **AWS-IoT-Arduino-Yun-SDK**. Do *chmod 755 AWSIoTArduinoYunInstallAll.sh* and execute it as below. By default for Seeeduino Cloud, your username will be root and your password will be seeeduino. Arduino Yún Board, your username will be root and your password will be Arduino. For step 5, it can take 15-20 minutes for the device to download and install the required packages (distribute, python-OpenSSL, pip, paho-MQTT). Do not close the terminal before the script finishes, otherwise you have to start over with step 5. Make sure you are in your local terminal before repeating step 5.

```
./AWSIoTArduinoYunInstallAll.sh <Board IP> <UserName> <Board Password>.
```

- Step 6. Copy and paste **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library** folder into Arduino libraries that was installed with your Arduino SDK installation. For Mac OS default, it should be under **Documents/Arduino/libraries**.

- Step 7. Restart the Arduino IDE if it was running during the installation. You should be able to see the AWS IoT examples in the Examples folder in your IDE. There are the other two scripts: **AWSIoTArduinoYunScp.sh** and **AWSIoTArduinoYunSetupEnvironment.sh**, which are utilized in **AWSIoTArduinoYunInstallAll.sh**. You can always use **AWSIoTArduinoYunScp.sh** to upload your new credentials to your board. When you are in the directory **AWS-IoT-Arduino-Yun-SDK/**, the command should be something like this:

```
./AWSIoTArduinoYunScp.sh <Board IP> <UserName> <Board Password> <File> <Destination>
```

### Installation on Windows

Before proceeding to the following steps, please make sure that you have Putty and WinSCP installed on your PC. If you prefer to use other tools for SSH-ing into your Arduino Yún board and transferring files, you will have to adjust the steps below according to your tools. Putty can be downloaded from [here](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). WinSCP can be downloaded from [here](http://winscp.net/eng/download.php). Set up the board.

- Step 1. Setup the Arduino Yún Cloud board and connect it to WiFi. Obtain its IP address and password. If you don't know how to do it, please follow this <a href="/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Seeeduino Cloud Boards</font></span></a>.

- Step 2. Make sure your PC is connected to the same network (local IP address range).

- Step 3. Download the AWS IoT CA file from [here](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem). And save it as root-CA.crt

- Step 4. Put your AWS IoT CA file that you saved before, private key and certificate into folder **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_certs.png)

- Step 5. Start WinSCP and upload AWS-IoT-Python-Runtime/ folder to /root on the board.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_run_time_file.png)

- Step 6. Use Putty to ssh into OpenWRT on your board and execute the following commands to install the necessary libraries. It can take 15-20 minutes for the device to download and install the required packages.

```
opkg update
opkg install distribute
opkg install python-openssl
easy_install pip
pip install AWSIoTPythonSDK==1.0.0
```

- Step 7. Copy and paste AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library folder into Arduino libraries that was installed with your Arduino SDK installation. For Windows default, it should be under **Documents/Arduino/libraries**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_AWS_library_file_to_arduino_library.png)

- Step 8. Restart the Arduino IDE if it was running during the installation. You should be able to see the AWS IoT examples in the Examples folder in your IDE.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_load_example.png)

### Connect Grove Module

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_hardware_connection.png)

Run examples
------------

### Download the example project

- Step 1. Please download the example project from [here](https://github.com/Lee-Kevin/10.GroveWithAWSIot/) first.

- Step 2. Decompress the downloaded zip files to your computer and remove **-master** in decompressed file name.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_open_example_sketch.png)

### Modify header file

- Step 1. Open file **aws_iot_config.h**, and replace the content in red box as picture bellows by the sample code based on your account that you have already saved before.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_replace_header_file.png)

- Step 2. Double click on **GroveWithAWSIot.ino**, replace following marked code with saved header file minutes ago and then click upload.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_select_serial_port.png)

- Step 3. When you see the below info. it means you have already download the code to your Seeeduino Cloud successfully.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_upload_complete.png)

### View Result

- Step 1. Open the serial monitor, you can see the information as below.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_view_result_in_serial_monitor.png)

- Step 2. Then open AWS IoT website, sign in to your account. And click the thing you created minutes ago.

- Step 3. Click the **Update shadow** button. Now you can see the temperature was upload to the website.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_reopen_thing_and_update_shadow.png)

## Resources

---------

- [AWS IoT Documentation](http://aws.amazon.com/documentation/iot/)
- <a href="/Seeeduino_Cloud" ><span><font size={"3"}>Seeeduino Cloud wiki page</font></span></a>
- [AWS IoT Arduino Yún SDK](https://github.com/aws/aws-iot-device-sdk-arduino-yun)

## Tech Support

  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
  <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
