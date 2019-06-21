


![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/main.jpg)


The Air602 module is based on W600 which embedded ARM-Cortex M3, in this tutorial we will show you how to burn the firmware.


## Firmware Tool & Imagme Download

You can download the Firmware Programing Tool here 

[Firmware Tool](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)


We provide the official firmware for you.

[Officail Firmware](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/res/Air602_img.zip)

You will find 4 version in this zip package, we recommend you to use **AirM2M_Luat_V0011_W600T_USER**

### change log

|version|Description|
|--|--|
|AirM2M_Luat_V0008_W600T_USER|Initial|
|AirM2M_Luat_V0009_W600T_USER|Add mqtt support|
|AirM2M_Luat_V0010_W600T_USER|Fixed the problem that when the module is set to AP mode and the DHCP function is disabled, the device(stations) still can use DHCP function to get the IP address. At the same time, it also solves the problem that some mobile phones are connected successfully but disconnected immediately.|
|AirM2M_Luat_V0011_W600T_USER|Optimized the power consumption of the chip, reducing the heat generated during the operation of the chip|


You can jump to [Burn the firmware](#Burn the firmware) if you do not want to use SDK.

## SDK Download

Also, you can download the SDK and reprogram it yourself. 

[AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

We recommand you to build it with **Keil MDK5**. Please use the Keil to open the **WM_W600.uvprojx**, you can find it in the **XXXXX\WM_SDK\Tools\Keil\Project**, XXXXX is the location you unzip the SDK.

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/KEIL_path.jpg)


When build is done, you can find the **.img** file at **XXXXX\WM_SDK\Bin**, also XXXXX is the location you unzip the SDK.

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/KEIL_path_1.jpg)

Now you can burn your own firmware to Air602, then the question is how?

## Burn the firmware

Unfortunately, the firmware tool only support chinese language, to solve this problem, we will show you the sreenshots step by step. 

**Step 1.** Unzip the Firmware Tool, find and double click the **LuaTool.exe** in the **XXXX/LuaTools 1.5.7**, XXXX is the path you unzip the firmware tool(LuaTools1.5.7).

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Luat_path_1.jpg)

**Step 2.** When you opened the tool, it may pop-up a window to let you upgrade, you can just click "取消升级" to pass this step.

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Tool_1.jpg)


**Step 3.** Switch to wifi mode. The default mode is Luat for 4G, to burn the Air602 firmware we should click **切换模式-->切换至WiFi**. 

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Tool_2.jpg)

Then the software will restart, and you will see a new window like that:

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Tool_3.jpg)

**Step 4.** Choose the firmware you've just download or build by the SDK. Click **浏览文件**, choose the firmware(both *.img* and *.FLS* will work), then click **Open**.

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Tool_4.jpg)

**Step 5.** Choose the corresponding COM port and start to burn the firmware. Actually the tool will detect the Air602 COM port automatically, you just need to tick the check box, then click **开始** to start programming firmware.

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Tool_5.jpg)

Then you will see a notice **开始握手，请重启WiFi模块**, when this prompt appears, please press the reset button on the Air602 development board in time. 

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Tool_6.jpg)

Please becareful when you press the reset button to prevent the USB device false eject. Senconds later it will prompt at the same area **握手成功，开始下载**, which means successful handshake and the progaramming start. You can also see the progress bar.

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Tool_7.jpg)


!!!Note
        If it fails, it may show **握手超时**, which means handshake timeout, please repeat step 5 several times, it will be OK then.


!!!success
        If everything goes well, you will see the following picture, which means you have successfully burned the firmware into the Air602 development board. Enjoy :D
    
![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/Tool_8.jpg)



## FAQ

### Q1: Problems after burning FW AirM2M_Luat_V0011_W600T_USER(By tarp.andreas)

**Quote"**
it seems, that if one burns the AirM2M_Luat_V0011_W600T_USER.FLS Firmware as described in the Wiki, it is impossible to use the LuaTool
for that module again.

**"**

A1: That is beacause the Ver 11 have changed the SDK boot structure, you need to rewrite the flash before burn it back to ver08/09/10. For more detail please check
our forum.

[Problems after burning FW AirM2M_Luat_V0011_W600T_USER](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8498&p=28790#p28790)

___
### Q2: How to Programming from Linux.

**Quote"**
Now I find out that the "firmware tools" zipfile does not contain any sources, but just a few windows binaries. So how do I go about programming this thing from my Linux workstation?

**"**

A2: Unfortunately, we don't have the firmware tool for linux. However you can use the serial port tool with xmodem send function.

>Step 1. Send 1B (HEX), Cyclically.  
>Step 2. Offered by **tarp.andreas**. "Try to push the RESET button (or pull down LOW the Res-PIN on the stand-alone module) while sending "\x1b" then you'll get the desired response."  
>Step 3. When it recall "secboot running" and then with "CCCCCC...." you can choose the firmware file, and send them under xmodem protocol 

For more detail please check our forum.  

[Programming from Linux.](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8393&sid=acb3a9a37671cf031800ea6073adb854)

___

### Q3: Mac os driver issue

We found that some version of the mac system can not recognize this board.


A3 : In that case you may need to install the CH340 driver manually, this board uses CH330N, which shares the same driver with CH340.

For more detail please check our forum.  

[Mac os driver issue](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=acb3a9a37671cf031800ea6073adb854)

___


## Resource

- **[Zip]** [Firmware Tool](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

- **[Zip]** [Officail Firmware](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/res/Air602_img.zip)

- **[Github Page]** [AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>