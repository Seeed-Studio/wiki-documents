---
name: Eclipse IDE for RePhone Kit
category: Tutorial
oldwikiname:  Eclipse IDE for RePhone Kit
prodimagename: Xadow_GSMPlusBLE_pingguo.JPG
surveyurl: https://www.research.net/r/Eclipse_IDE_for_RePhone_Kit
---

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone can be a learning tool for you to start interesting projects. Currently, RePhone supports various development environment and development languages, you can either built applications with C/C++ based on Eclipse IDE, Arduino IDE, or with Lua and JavaScript.

This wiki is a User Guide to help you start your RePhone project with Eclipse IDE.

##  Download Eclipse IDE for RePhone
---
Before you download the Arduino IDE for RePhone, make sure you have a PC with the following:

*   Operation system: Microsoft Windows XP, Vista, 7 or 8

*   Eclipse IDE: Indigo (3.7) with CDT 8.0.2.

Now please click the following icons to download and install the Eclipse IDE for C/C++ Developers from the official Eclipse website. The IDE installation may require an appropriate JAVA SE Development Kit 8 to be installed on your PC.

[![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide-02.png)](http://www.eclipse.org/downloads/packages/eclipse-ide-cc-developers-includes-incubating-components/indigosr2)

[![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/JSE-03.png)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

##  Install Eclipse Plug-in: LinkIt Assist 2502 SDK 2.0.46
---
To make use of the RePhone and Eclipse IDE, you would need to **install the LinkIt Assist 2502 Eclipse plug-in in the same folder as the Eclipse IDE**, where the ‘_eclipse.exe_’ is located.

[![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

To install the LinkIt Assist 2502 SDK 2.0.46, you need to do the following:

**<span style="font-size:1.3em;">Step 1.</span>** Download the **LinkIt Assist 2502 SDK 2.0.46** zip file.

**<span style="font-size:1.3em;">Step 2.</span>** Extract the content of the LinkIt Assist 2502 SDK 2.0.46 zip file. There are tools in addition to the Eclipse plug-in included in the SDK so considering extracting the content to a permanent location. If you extract the content to a temporary location the installer will give you the option to move it to a permanent location.

**<span style="font-size:1.3em;">Step 3.</span>** Make sure that the Eclipse IDE is not running.

**<span style="font-size:1.3em;">Step 4.</span>** Run the LinkIt Assist 2502 SDK 2.0.46 installer ‘**InstallPlugins.exe**’ as shown in the following figure:

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/LinkIt_Assist_2502_SDK_2.0.46_installer_1.png)

**<span style="font-size:1.3em;">Step 5.</span>** In the Welcome Page, Click ‘**Next**’

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/LinkIt_Assist_2502_SDK_2.0.46_installer_2.png)

**<span style="font-size:1.3em;">Step 6.</span>** Now you will be asked to select the Eclipse IDE location. Click ‘**Browse**’ and locate the folder in which you installed Eclipse IDE (the designated folder where you installed the ‘**Eclipse IDE for C/C++ Developer**’) Click ‘**OK**’ and ‘**Next**’.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/LinkIt_Assist_2502_SDK_2.0.46_installer_3.png)

**<span style="font-size:1.3em;">Step 7.</span>** In Move SDK to permanent location, check ‘**Move LinkIt Assist 2502 2.0 package to new folder**’ if you have extracted the zip file in a temporary location. Click ‘**Browse**’ and locate a permanent location in which to store the SDK. Then Click ‘**Next**’ to the next step.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/LinkIt_Assist_2502_SDK_2.0.46_installer_4.png)

**<span style="font-size:1.3em;">Step 8.</span>** In Ready to install the SDK. Review the selected locations if they are OK click ‘**Install**’.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/LinkIt_Assist_2502_SDK_2.0.46_installer_5.png)

**<span style="font-size:1.3em;">Step 9.</span>** At the last step of installation, **check** ‘**Install the MediaTek USB Driver**’ if this is your first time to install a LinkIt SDK, then click ‘**Finish**’ to complete the installation.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/LinkIt_Assist_2502_SDK_2.0.46_installer_6.png)

**<span style="font-size:1.3em;">Step 10.</span>** Once the plug-in installation is finished, there will be a folder named ‘**LINKIT_ASSIST_SDK**’ in the location where you installed the Eclipse IDE.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/LinkIt_Assist_2502_SDK_2.0.46_installer_77.png)

You can also find the plug-ins in your Eclipse window once you open the "**eclipse.exe**", see the **Step 8** in the following section - "**Create Your First Project: Hello World**"

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Plug-ins.png)

##  Update/Flash the Firmware
---
**NB: Please be noticed that flash the firmware will delete all the settings and files(images, musics) stored in the RePhone, please make sure you have been aware of this before you flash/update the firmware.**

I know you’ve been agog about your RePhone and can’t wait to start programming, just hold on a second, before you do that, it is essential to make sure the firmware of the core module - Xadow GSM+BLE corresponds to the LinkIt Assist SDK you just installed.

Here I’introduce two ways to update/flash the firmware of your RePhone.

####  **<span style="font-size:1.2em;">Build-in Firmware Updater of LinkIt Assist SDK</span>**

* * *

**<span style="font-size:1.3em;">Step 1.</span>** Firstly, make sure your Xadow GSM+BLE is disconnected from your PC, then download the **latest RePhone SDK** on our Github, unzip it.

[![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Download_RePhone_SDK.png)](https://github.com/WayenWeng/RePhone_SDK_Bin_Update//)

**<span style="font-size:1.3em;">Step 2.</span>** Launch the **‘FirmwareUpdater.exe’** in the SDK folder you just installed, it can be found in the path _’eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\FirmwareUpdater.exe’_

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Linkit_firmwareupdater_000.png)

**<span style="font-size:1.3em;">Step 3.</span>** In the LinkIt Firmware Updater window, select **‘Others’** as the platform in the pull-down list. Then Locate _**...\SEEED02A_DEMO_PCB01_gprs_MT2502_S00.MAUI_11CW1418SP5_W15_29.bin\SEEED02A_DEMO_BB.cfg**_

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_Firmware_Update.png)

**<span style="font-size:1.3em;">Step 4.</span>** Click the **green update button**, and follow the 2 step instructions on the screen, **make sure the Xadow GSM+BLE is powered (connected to the battery)** when connect it to PC.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_Firmware_Update_2.png)

**<span style="font-size:1.3em;">Step 5.</span>** Wait until the download finish.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_Firmware_Update_3.png)

**<span style="font-size:1.3em;">Step 6.</span>** When the firmware update complete this will be confirmed in the Download Complete page, click ‘**OK**’ and exit the updater.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_Firmware_Update_4.png)

##  Create Your First Project: Hello World
---
**<span style="font-size:1.3em;">Step 1.</span>** Almost there! Now launch **eclipse.exe**. If this is your first time using the Eclipse IDE, you will be asked to select a **Workspace** for your eclipse projects. In Workspace Launcher, click **Browse** to find a proper location as your Workspace. I recommend you to set your workspace in the same location you installed the Eclipse IDE.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_1.png)

**<span style="font-size:1.3em;">Step 2.</span>** To create a new RePhone application - in the Eclipse **File** menu, point to **new **and click **Other**. Or you can simply use the **CTRL+N** shortcut key.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_2.jpg)

**<span style="font-size:1.3em;">Step 3.</span>** In the New window, expand the **LinkIt Assist 2502 SDK 2.0** folder and select **Application(*.vxp) **

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_3.png)

**<span style="font-size:1.3em;">Step 4.</span>** Now you are lead to the**LinkIt Assist 2502 SDK 2.0 Wizard**

*   Enter the name for your new project, in this case we name it as "**hello_world**"

*   In the pull-down menu of **Hardware Platform** , choose **LinkIt Assist 2502**

*   Check **Empty Application**

*   Click **Finish** to complete the setup

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_4.png)

"
**<span style="font-size:1.3em;">Step 5.</span>** Congrats! XD  You just created your first project! Now open the project from the C/C++ Projects pane and double click "**hello_world.c**" file, as shown below

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_5.png)

**<span style="font-size:1.3em;">Step 6.</span>** Before uploading the application,  you need to

*   power up your RePhone by **plug in the battery** to the battery socket on the Xadow GSM+BLE**, press and hold the power key (PWR) for 2 second to** **turn it ON** (then the LED indicator shows **GREEN**)

*   then connect your RePhone to PC with a Micro USB cable.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**<span style="font-size:1.3em;">Step 7.</span>** Open **Device Manager** to check for the COM ports. There will be two **COM ports** (the COM number might be different in your PC):

*   **MTK USB Debug Port(COM4)** is used for logs, like printing messages in the serial monitor

*   **MTK USB Modem Port(COM5)** is used for uploading code

Open **Device Manager** by clicking the **Start** button, clicking **Control Panel**, clicking **System and Security**, and then, under **System**, clicking **Device Manager**. If you're prompted for an administrator password or confirmation, type the password or provide confirmation. See the following image:

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Check_ports.png)

**<span style="font-size:1.3em;">Step 8.</span>** Almost there! Put the following code into the "**hello_world.c**":
```
#include "vmsystem.h"
#include "vmtype.h"
#include "vmlog.h"
#include "vmtimer.h"
#include "ResID.h"
#include "hello_world.h"

VM_TIMER_ID_PRECISE sys_timer_id = 0;

void sys_timer_callback(VM_TIMER_ID_PRECISE sys_timer_id, void* user_data)
{
    vm_log_info("Hello World!");
}

void handle_sysevt(VMINT message, VMINT param)
{
    switch (message)
    {
        case VM_EVENT_CREATE:

        sys_timer_id = vm_timer_create_non_precise(1000, sys_timer_callback, NULL);
        break;
        case VM_EVENT_PAINT:
        break;
        case VM_EVENT_QUIT:
        break;
    }
}

void vm_main(void)
{
    vm_pmng_register_system_event_callback(handle_sysevt);
}
```

*   Click **Build Application** to upload the application, as instructed in the image below:

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_6.png)

*   Once the application is successfully uploaded it will be reported in the **Console** at bottom, if it's not showing, reopen it in the _**Window/Show View/Console**_

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_7.png)

**<span style="font-size:1.3em;">Step 9.</span>** Open the **Monitor** in the _LinkIt Assist Plug-in_.

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_8.png)

You will be asked to **Set Database Path**, if not, point to **Config** menu and click **Set Database Path**

*   Click the "**...**" icon as indicated in the image below

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_9.png)

*   Locate to "_**eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\firmware\LinkIt_Device\LinkIt_Assist_2502\W15.19.p2\database.db**_ ", click **Open**

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_10.png)

*   Also select the **COM port** as **MTK USB Debug Port(COM4)**, and **Baud Rate** has a default value of **115200**.

The COM number of the Debug Port might be different on your PC, just make sure it is the **MTK USB Debug Port** listed in **Device Manager**.

If the window is not showing, point to **Config** menu and click **Configure RS232...**

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_11.png)

**<span style="font-size:1.3em;">Step 10.</span>** You've done a great job!! Now say "Hello" to the world!

![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Eclipse_ide_helloworld_12.png)

##  Reset to defaults
---
**Please be noticed that reset your Rephone to defaults will delete all the settings and files(images, musics) in the RePhone, do aware of this before you reset it to defaults.**

To reset your RePhone to **DEFAULTS**:

1. Follow the instructions in "Update/Flash the Firmware" section to flash the firmware

2. Download the RePhone_Create_Kit_VXP file

[![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

3. Enter the [RePhone Mass Storage Mode](/Xadow_GSMPlusBLE#Operating_Mode)

4. Copy everything under the file named "RePhone Create Kit VXP" into the RePhone 5MB mass storage.

5. Restart your RePhone then its done. As reset have deleted all the files, you would have to put an mp3 file in the mass storage as well for the use of ringtone.

##  RePhone Community
---
[![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/RePhone_Community-2.png)](http://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the RePhone Community.

Now join us in the [RePhone Community](http://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)!

Together we seek answers, make interesting stuff, care about each other, and share our experiences.

##  More About LinkIt Assist SDK
---
As RePhone is mostly developed with the LinkIt Assist SDK, and Mediatek has made a very detailed developer guide for the developers, to find more info you can refer to :

[![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Developer_guide_en-06.png)](res/MediaTek_LinkIt_Assist_2502_Developers_Guide_v1_1.pdf)

[![](https://github.com/SeeedDocument/Eclipse_IDE_for_RePhone_Kit/raw/master/img/Developer_guide_cn-07_1.png)](res/MediaTek_LinkIt_Assist_2502_cn_v1_1.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>