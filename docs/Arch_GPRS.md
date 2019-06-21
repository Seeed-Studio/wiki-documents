---
name:  Arch GPRS
category: Discontinued
bzurl:
oldwikiname: Arch_GPRS
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Arch_GPRS
sku:
tags:

---


[![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/Arch_GPRS_03.jpg) ](http://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

Arch GPRS is an [mbed](http://mbed.org/handbook/mbed-SDK) enabled development board that houses a cellular networking module along with a microcontroller. It is similar to the [Seeeduino Arch](https://seeeddoc.github.io/Seeeduino_Arch/)  in that it also uses the LPC11U24 Microcontroller. With the Arch GPRS, you can use the mbed C/C++ SDK, libraries and optimizing online development tools to rapidly build your prototype.
The cellular networking module on the Arch GPRS is based on the EG-10 [GPRS](https://en.wikipedia.org/wiki/General_Packet_Radio_Service) modem. With this, data collection functions can be performed easily using the 2G GSM based cellular network.

Arch GPRS has a standard **Arduino** interface as well as [Grove](/Grove)  connectors on board. It’s convenient to connect existing Shields and **Grove** products to Arch GPRS. You can even connect a solar panel directly to the board to allow for the battery to charge from it. A low-power design guarantees easy charging and long hour operations when outdoors.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png) ](http://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

##  Features ##

-  mbed enabled

   - online development tools

   - easy to use C/C++ SDK

   - lots of published libraries, projects

- NXP LPC11U24 Controller

  - Low power ARM Cortex-M0 Core

  - 32KB Flash, 8KB RAM, 4KB EEPROM  

  - USB Device, 2xSPI, UART, I2C

-  EG-10 Module  

   - Support wireless upgrade EG-10 firmware  

   - Support external SIM card：1.8V/3.3V

   - Compatible standard AT Command

- Equip with RTC function

- Select automatically USB5V or Solar panel to charge a battery

##  Specifications ##

 |Item||Specification|
 |--|--|--|
| Microcontroller||LPC11U24|
| Supply Mode||USB or Solar Panel|
 |Charge Current |Solar panel|100 mA|
 ||USB 5V|  400 mA|
 |Work Frequency||850/900/1800/1900 MHz|
 |Interface Type|| USB Micro B|
 |SIM Card||Class B(3V) and Class C(1.8V)|
 |GPRS Characteristics|GPRS data transmission|downlink85.6kbps(Max);uplink 42.8kbps(Max)|
||Codes format|CS-1,CS-2,CS-3,CS-4|
|  Function Support||Support for Data, Voice, SMS, and Fax|
 |EEPROM Capacity||256 KB|

##  Interfaces ##

![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/Arch_GPRS_Interface_Function.jpg)

Yellow Area is very similar in fashion to an Arduino board, and in fact it is used as such with our Shield board. Its pin destribution is almost the same as Seeeduino Arch(D11 and D13 are swaped), so you can click [here](https://seeeddoc.github.io/Seeeduino_Arch/#Pinout) to observe each pin.

The above picture is the front view of Arch GPRS, Microcontroller LPC11U24 in back has not been marked out.

##  Getting Started ##

Insert a SIM card into SIM Socket of Arch GPRS, you can dial a phone number or send messages.
Now let's get started.

**Step one:** Sign up a mbed account

- open [https://mbed.org](https://mbed.org), click Login or signup. If you have already registered, please click login directly.

**Step two:** Import Program

- Open the link: [https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/](https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/),  then click "Import this program" in the right corner while you can see the belowing picture. Now click "import" to complete the import of Arch GPRS program.

![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/Arch_GPRS_Test.png)

- When the program has been imported into your account, you can see it in online development tool.

![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/Arch_GPRS_Test1.png)

**Step three** Edit code

- open and change the main.cpp file from Arch GPRS program. Let's take calling up for example, you need to change "#define CALL_UP_TEST 0" into "#define CALL_UP_TEST 1", and change the paremeter of the function "gprsTest.callUp("133xxxx5949");".

**Step four:** Add a device

- Click ”No device selected” in the right top corner, then click ”Add a device” in buttom left after you see the below picture.

![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%87.jpg)

- Pop up a page as shown below. Arch GPRS is compatible with mbed LPC11U24 and Seeeduino Arch, so you can  select either ”mbed LPC11U24” or Seeeduino Arch. Here we take selecting Seeeduino Arch for example.

![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%871.jpg)

- Enter Seeeduino Arch page and  click ”Add to mbed Compiler”, Now you complete successfully adding Seeeduino Arch. Return to mbed compiler and click ”No device selected”. The belowing picture appears after you click Seeeduino Arch in buttom left corner：

![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%872.jpg)

- You can see your selected  board in mbed online compiler after clicking ”Select Platform”.

**Step five：** Compile、download

- Click"Compile", A "Success!" appears while mbed IDE generates a bin. You need to save bin file to your PC.

**Step six：** Updata firmware

- Connect Arch GPRS's USB port to your computer using a USB Micro B cable and long press the botton, Arch GPRS will appear as a USB storage named CRP DISABLD.

![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/A_usb_device.jpg)

- Go to the CRP DISABLD. Now you need add the bin file you have gotten to CRP DISABLD device. If bin file has exists in USB device, you need to delect it and add the new bin file.

Quick press Arch GPRS's button and wait a moment, you will hear Arch GPRS calling you.

##  ARCH GPRS With Xively ##

![](https://github.com/SeeedDocument/Arch_GPRS/raw/master/img/ARCH_GPRS_With_Xively.png)

Xively is an on-line database service allowing developers to connect sensor-derived data (e.g. energy and environment data from objects, devices & buildings) to the Web and to build their own applications based on that data. By using ARCH GPRS we can easily realize this.

**Step one：** Sign up a Xively account

- open [https://xively.com/](https://xively.com/), click Login or signup. If you have already registered, please click login directly.

**Step two：** Add your own device and Channels

- you can create device and add channels as what you want.If you do not know how to do ,you can visit [https://xively.com/get_started/](https://xively.com/get_started/)

**Step three：** Import program

- Open the link: [http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/](http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/),  then click "Import this program" in the right corner while you can see the belowing picture. Now click "import" to complete the import of Arch GPRS program.

**Step four：** Add your own information

- replace the FEED_ID & SENSOR_ID & XIVELY_KEY with yours,and connect your ARCH GPRS with sensor, then compile and updata firmware.

**Step five：** check your sensor value

- if successful, you will see your uploaded data in your channel graph.

**Note:**

If you use Seeeduino Arch on MAC or Linux, please read the application note --- [USB ISP programming](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x).

##  Programming Seeeduino Arch on Windows, Linux or Mac ##

Seeeduino Arch doesn't have an mbed interface. It uses USB In-System-Programming(ISP) to upgrade the firmware.

To enter the USB ISP mode, connect the Arch with your computer and long press its button, and then a disk named "CRP DISABLD" will appear.

-  on windows

    1.delete firmware.bin in the "CRP DISABLD" disk.

    2.copy a new firmware into the disk.


-  on linux

    1.if the disk is not mounted, mount the disk at {mnt_dir}

    2.dd if={new_firmware.bin} of={mnt_dir}/firmware.bin conv=notrunc

-  on mac you'll need to use Terminal to run the following script to copy you're .bin file to your Arch

    1.dd if={new_firmare.bin} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

   If you're so inclined, you can also create an **Automator** application to support drag-and-drop of the file to your board.  Just create a "Run Shell Script" with the following command:

   dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

Quick press the button to run the new firmware.

##  See Also ##

- [Arch GPRS V2](https://seeeddoc.github.io/Arch_GPRS_V2/)

##  Notes ##

Arch GPRS doesn't come with [an mbed interface](https://mbed.org/handbook/mbed-HDK). To output debug messages, please try [USBSerial](https://mbed.org/handbook/USBSerial).

##  Resources ##

- **[Eagle]** [Arch GPRS Eagle File](https://github.com/SeeedDocument/Arch_GPRS/raw/master/res/Arch_GPRS_Eagle_File.zip)
- **[PDF]**[Arch GPRS pdf](https://github.com/SeeedDocument/Arch_GPRS/raw/master/res/Arch%20GPRS.pdf)
- **[EAGLE]**[Arch GPRS sch](https://github.com/SeeedDocument/Arch_GPRS/raw/master/res/Arch%20GPRS.sch)
- **[PDF]**[Arch GPRS Schematic in PDF format](https://github.com/SeeedDocument/Arch_GPRS/raw/master/res/Arch_GPRS_Schematic.pdf)
- **[Command]**[AT Command Reference](https://github.com/SeeedDocument/Arch_GPRS/raw/master/res/AT%E6%8C%87%E4%BB%A4%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Datasheet]**[EG10 datasheet](https://github.com/SeeedDocument/Arch_GPRS/raw/master/res/EG10%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Demo]**[demo](https://mbed.org/users/loovee/code/ARCH_GPRS_Demo/)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>