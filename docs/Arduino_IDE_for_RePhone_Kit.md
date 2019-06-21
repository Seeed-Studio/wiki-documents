---
name: Arduino IDE for RePhone Kit
category: Tutorial
oldwikiname: Arduino_IDE_for_RePhone_Kit
prodimagename: Xadow_GSMPlusBLE_pingguo.JPG
surveyurl: https://www.research.net/r/Arduino_IDE_for_RePhone_Kit
---

![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone can be a learning tool for you to start interesting projects. Currently, RePhone supports various development environments and development languages, you can build applications either with C/C++ based on Eclipse IDE, Arduino IDE, or with Lua and JavaScript.

This wiki is a User Guide to help you start your RePhone project with Arduino IDE.

Download Arduino IDE for RePhone
--------------------------------

Before you download the Arduino IDE for RePhone, make sure you have an operation system as follows:

**Windows XP/Vista/7/8/8.1**

We have put the Arduino IDE for RePhone on our GitHub, and you are quite welcome to send us a 'pull request' to help us optimize and improve it.

If you ever used the Arduino IDE before, then this should be just a piece of cake. If you are not familiar with Arduino, which is fine as well, just follow the instructions, and you will be getting started with Arduino IDE easily and quickly.

Now click on

[![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Download_Arduino_IDE_for_RePhone.png)](https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone)

On the Github page, click the **Download ZIP** to download the file as shown in the image below:

![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Click_to_download_Arduino_IDE_for_RePhone.png)

When the download is complete, unzip the file to a proper location.

Install the Driver
------------------

### Disable Driver Signature Enforcement under Windows 8 / 8.1

If you are using the Windows8/8.1, you would need to disable **Driver Signature Enforcement** first to be able to install the driver.

**You should save the files you are editing before trying to turn off the 'Driver Signature Enforcement' as your system will be shut down during the operation.**

Now follow the instructions below to disable the 'Driver Signature Enforcement.'

1.  Press “Windows Key” +"R"
2.  Enter shutdown.exe /r /o /f /t 00
3.  Click the "OK" button.
4.  System will restart to a "Choose an option" screen
5.  Select "Troubleshoot" from "Choose an option" screen
6.  Select "Advanced options" from "Troubleshoot" screen
7.  Select "Windows Startup Settings" from "Advanced options" screen
8.  Click "Restart" button
9.  System will restart to "Advanced Boot Options" screen
10. Select "Disable Driver Signature Enforcement"
11. Once the system starts, you can install the Arduino drivers as same as Windows

### Normal Driver Installation

1. First, power up your RePhone by **plugging in the battery** or **power it with external power sources (3.3 ~ 4.2V(no SIM)/3.5 ~ 4.2V(with SIM)) **to the battery socket on the Xadow GSM+BLE, **press and hold the power key (PWR) for 2 seconds to** **turn it ON** (LED indicator shows **GREEN**), then connect your RePhone to PC with a Micro USB cable.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

2. Open **Device Manager** by clicking the **Start** button, clicking **Control Panel**, clicking **System and Security**, and then, under **System**, clicking **Device Manager**. If you're prompted for an administrator password or confirmation, type the password or provide confirmation.
In the **Device Manager**, you will be seeing unknown devices as shown below:

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Driver_Installation_Unknown_Devices.png)

3. Right click on one of the unknown devices, choose **Update Driver Software**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Driver_Installation_Update_Driver_Software.png)

4. Choose **Browse my computer for driver software**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Driver_Installation_Browse_my_computer_for_driver_software.png)

5. Click **Browse** and the locate the folder which you've unzipped the Arduino IDE for RePhone .. \\Arduino\_IDE\_for\_RePhone\\drivers\\mtk . Click **Next** to start the driver installation.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Driver_Installation_Locate_Driver.png)

6. When the driver software is successfully installed, you will be able to see the following **complete** page, click **Close** and **start over from step 1 to 6 to install the driver for another unknown device**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Driver_Installation_complete_page.png)

### Install the Driver Manually

You can also install the driver manually:

1. In "**Browse for driver software on your computer**" window, click **"Let me pick from a list of device drivers on my computer**"

2. Then click "**Ports(COM&LPT)**" and go "**next**"

3. Click "**Have Disk**"

4. Afterwards,

-- if you are using **<big>Windows Vista 64bit</big>**, locate "**Arduino\_IDE\_for\_RePhone-master\\drivers\\mtk\\Vista\\usb2ser\_Vista64.inf\\**"

-- if you are using **<big>Windows 7 or higher with 64bit</big>**, locate "**Arduino\_IDE\_for\_RePhone-master\\drivers\\mtk\\Win7\\usb2ser\_Win764.inf**"

### Install the Driver with LinkIt Assist 2502 SDK 2.0.46

LinkIt Assist 2502 SDK 2.0.46 also provides a driver installation program.

[![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

Then find the driver installer in the path **"MediaTek\_LinkIt\_Assist\_2502\_SDK\_2\_0\_46\\LINKIT\_ASSIST\_SDK\\Driver\\InstallMTKUSBCOMPortDriver.exe"**

Update/Flash the Firmware
-------------------------

<div class="admonition note">
<p class="admonition-title">Note</p>
Please note that flashing the firmware will delete all the settings and files(images, musics) stored in the RePhone. Take a data backup before you flash/update the firmware.
</div>

To make use of the Arduino IDE for RePhone, you have to update/flash the firmware as well. The process is as simple as follows:

1. **Disconnect your RePhone with PC**, **press and hold the power key(PWR) for 2 seconds to turn it OFF** (LED indicator turn **RED** and then goes out)

2. Open the **FirmwareUpdater.exe** under the path ***...Arduino\_IDE\_for\_RePhone\\hardware\\tools\\mtk\\FirmwareUpdater.exe***, be sure your platform on the Firmware Updater is "**RePhone**" as showing below, if not, click "**Others**" and locate to ***...Arduino\_IDE\_for\_RePhone\\hardware\\tools\\mtk\\firmware\\LinkIt\_Device\\RePhone\\W15.19.p2-uart\\SEEED02A\_DEMO\_BB.cfg***, then click **Download (The Green Button)**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Updatefirmware.png)

3. Now you will be asked to connect your RePhone to PC via USB cable, make sure your RePhone has been turned **OFF** and meantime a functional battery should be always connected ( Powered Up).

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Updatefirmware_pluginrephone.png)

4. Wait until the downloading finishes. This might take about 1min, so it may remain stuck at 50% for quite a while, please **be patient**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Updatefirmware_downloading.png)

5. In the **Complete** page click **OK** to finish the firmware update.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Updatefirmware_complete.png)

Reset to default
-----------------

<div class="admonition note">
<p class="admonition-title">Note</p>
Please note that resetting your Rephone to default will delete all the settings and files(images, musics) in the RePhone. Take a data backup before you reset it to default.**
</div>

To reset your RePhone to **DEFAULT**:

1. Follow the instructions in "Update/Flash the Firmware" section to flash the firmware

2. Download the RePhone\_Create\_Kit\_VXP file

    [![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

3. Enter the [RePhone Mass Storage Mode](/Xadow_GSMPlusBLE#Mass_Storage_Mode)

4. Copy everything under the file named "RePhone Create Kit VXP" into the RePhone 5MB mass storage.

5. Restart your RePhone then its done. As reset would have deleted all the files, you would have to put an mp3 file in the mass storage as well for the use of ringtone.

A demo: Hello World
-------------------

Now you have prepared things required, we are ready to rock on with RePhone.

Let us start with a simple program **Hello World**

1. Press and hold the power key (PWR) for 2 seconds to turn it ON (LED indicator shows GREEN)

2. Open the **Arduino\_IDE\_for\_RePhone.exe** in the folder where you unzipped the Arduino IDE for RePhone, the software interface is as follows:

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_IDE_for_RePhone_interface.png)

3. Open **Device Manager** to check for the COM ports. There will be **two COM ports**:

    -   MTK USB Debug Port is used for uploading code
    -   MTK USB Modem Port is used for logs, like printing messages in the serial monitor with **Serial.println()**

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_IDE_for_RePhone_COM_Ports.png)

4. On the Arduino IDE window, click **Tool => Port**, select **MTK USB Debug Port**, which is **COM20** in this case, the COM number might be different in your PC, just make sure it corresponds to the Debug Port.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_IDE_for_RePhone_Debug_Port.png)

5. On the Arduino IDE window, click **Tool => Board**, select **RePhone**

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_IDE_for_RePhone_Board.png)

6. Now copy the following code to your Arduino IDE:

        // hello world for test RePhone
        // loovee@10-18-2015
        
        void setup() {
            Serial.begin(115200);
        }
         
        void loop() {
            // put your main code here, to run repeatedly:
            Serial.println("Hello World, Hello RePhone!");
            delay(100);
        }


7. Now press the **Upload** button to upload the code to your RePhone. You will see the **Done uploading** when the code is successfully uploaded.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_IDE_for_RePhone_upload.png)

8. As RePhone uses different COM ports for uploading software and logs, to read the logs, we need to switch the selected COM Port to **MTK USB Modem Port**. On the Arduino IDE window, click **Tool => Port**, select **MTK USB Modem Port**, which is **COM48** in this case.

    Then open the **Serial Monitor**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_IDE_for_RePhone_Serial_Monitor.png)

9. Now we can see the **Hello World** we have printed with **Serial.println()** .

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_IDE_for_RePhone_Helloworld.png)

More Example Code
-----------------

Playing with some example code would be a good start if you are heading into some even more interesting projects.

1. Simply setup your **sketchbook location** in the **preference** as ***Arduino\_IDE\_for\_RePhone-master\\hardware\\arduino\\mtk*** (where you install the Arduino IDE for RePhone)

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_Sketchlocation_1.png)

    then restart the ***Arduino\_IDE\_for\_RePhone.exe***, you will be able to see the example codes.
    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Arduino_Sketchlocation_2.png)

2. You can also find the Arduino example coded manually for all the RePhone modules in the following path:
***Arduino\_IDE\_for\_RePhone-master\\hardware\\arduino\\mtk\\libraries***

    ![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/Example_code_Arduino_IDE.png)

RePhone Community
-----------------

[![](https://raw.githubusercontent.com/SeeedDocument/Arduino_IDE_for_RePhone_Kit/master/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

We have been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the RePhone Community.

Now join us in the [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)!

Together we seek answers, make interesting stuff, care about each other, and share our experiences.

More
----

You have done a great job so far! RePhone comes with a big family of modules with different features and functionalities. Go to check the wiki for modules for more applications!

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>