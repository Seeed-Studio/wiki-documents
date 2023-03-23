---
description: BeagleBone® Blue
title: BeagleBone® Blue
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BeagleBone_Blue
last_update:
  date: 1/10/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover.jpg" /></div>

BeagleBone® Blue is based on the extremely successful open-source hardware design of BeagleBone® Black, a high-expansion, maker-focused, community-supported open hardware computer, created by the BeagleBoard.Org Foundation.

BeagleBone® Blue combines the high-performance flexible WiFi/Bluetooth WiLink™ interface of the BeagleBone® Black Wireless and the robotics capabilities of the Robotics Cape from Strawson Design.  BeagleBone® Blue has onboard 2 cell (2S) LiPo battery management with charger and battery level LEDs, 8 servo motor outputs, 4 DC motor drivers, 4 quadrature encoder inputs, a wide array of GPIO and serial protocol connectors including CAN, a 9 axis IMU and barometer, 4 ADC inputs, a PC USB interface, an USB 2.0 host port, a reset button, a power button, two user configurable buttons and six indicating LEDs.  Built on Octavo Systems’ System-In-Package that integrates a high-performance TI ARM processor and 512MB of DDR3, BeagleBone® Blue boots Linux in around 10 seconds and gets you started developing through your web browser in less than 5 minutes with just a single USB cable.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

----

* **Processor: Octavo Systems OSD3358 1GHz ARM® Cortex-A8**
  * 512MB DDR3 RAM
  * Integrated power management
  * 2×32-bit 200-MHz programmable real-time units (PRUs)
  * ARM Cortex-M3
  * On-board 4GB 8-bit eMMC flash storage programmed with Debian Linux

* **Connectivity and sensors**
  * Battery: 2-cell LiPo support with balancing, 9-18V charger input
  * Wireless: 802.11bgn, Bluetooth 4.1 and BLE
  * Motor control: 8 6V servo out, 4 DC motor out, 4 quadrature encoder in
  * Sensors: 9 axis IMU, barometer
  * Connectivity: HighSpeed USB 2.0 client and host
  * User interface: 11 user programmable LEDs, 2 user programmable buttons
  * Easy connect interfaces for adding additional sensors such as:
    * GPS, DSM2 radio, UARTs, SPI, I2C, 1.8V analog, 3.3V GPIOs

* **Software Compatibility**
  * [Debian](http://elinux.org/Beagleboard:BeagleBoneBlack_Debian)
  * [ROS](https://dscl.lcsr.jhu.edu/home/courses/me530707_2017_edumip_ros)
  * [ArduPilot](https://github.com/mirkix/ardupilotblue)
  * Graphical programming with [LabVIEW](https://github.com/ktalke12/Labview-MiP)
  * Cloud9 IDE on Node.js w/ BoneScript library
  * Plus much more

## Specification

----

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-dlfj{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n.tg .tg-14gg{background-color:#ffffff;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-88pu{background-color:#ffffff;color:#000000;font-size:16px;text-align:left;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 824}}>
    <colgroup>
      <col style={{width: 275}} />
      <col style={{width: 252}} />
      <col style={{width: 297}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls">Item</th>
        <th className="tg-l5ls" colSpan={2}>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-q7v3">Processor<br />(Integrated in <br />the OSD3358)</td>
        <td className="tg-dlfj" colSpan={2}>● AM335x 1GHz ARM® Cortex-A8<br />● SGX530 graphics accelerator<br />● NEON floating-point accelerator<br />● 2x PRU 32-bit 200MHz microcontrollers</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Memory</td>
        <td className="tg-dlfj" colSpan={2}>● 512MB DDR3800MHZ RAM (Integrated in the OSD3358)<br />● 4GB 8-bit eMMC on-board flash storage<br />● SD/MMC Connector for microSD</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={18}><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />Connectivity<br /></td>
        <td className="tg-dlfj">High speed USB 2.0 Client port</td>
        <td className="tg-14gg">Access to USB0,Client mode via microUSB</td>
      </tr>
      <tr>
        <td className="tg-dlfj">High speed USB 2.0 Host port</td>
        <td className="tg-14gg">Access to USB1,Type A Socket, 500mA LS/FS/HS</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={6}><br /><br />WiLink1835 <br />WiFi 802.11 b/g/n 2.4GHz.<br />Supportsthe following modes:</td>
        <td className="tg-88pu">2x2 MIMO</td>
      </tr>
      <tr>
        <td className="tg-88pu">AP</td>
      </tr>
      <tr>
        <td className="tg-88pu">SmartConfig</td>
      </tr>
      <tr>
        <td className="tg-88pu">STA</td>
      </tr>
      <tr>
        <td className="tg-88pu">Wi-Fi Direct</td>
      </tr>
      <tr>
        <td className="tg-88pu">Mesh over Wi-Fi based on 802.11s</td>
      </tr>
      <tr>
        <td className="tg-dlfj" rowSpan={3}><br />Serial port<br /></td>
        <td className="tg-14gg">UART0, UART1, UART5 available via 4 pin JST connectors</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART2 available via 6 pin JST connector (EM-506 GPS style connector)</td>
      </tr>
      <tr>
        <td className="tg-14gg">UART4 RX available via 3 pin DSM2 connector</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>WiLink 1835 Bluetooth 4.1 with BLE</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>I2C1 available via 4 pin JST connector</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>SPI1 CS0 (S1.1) and SPI1 CS1 (S1.2) available via 6 pin JST connectors</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>CAN available via 4 pin JST connector (includes TCAN1051 CAN transceiver)</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>8 GPIOs (GP0 and GPI1) available via 6 pin JST connectors</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>ADC inputs 0 to 3 available via 6 pin JST connector</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>3.3VDC and 5VDC power output via 4 pin JST connector</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br />Power management</td>
        <td className="tg-dlfj" colSpan={2}>TPS65217C PMIC is used along with a separate LDO to provide power to the system (Integrated in the OSD3358)</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>2 cell (2S) LiPo battery charger (powered by 9 – 18VDC DC Jack): <br />i., 4 battery level LEDs; <br />ii.,1 charger LED</td>
      </tr>
      <tr>
        <td className="tg-dlfj" colSpan={2}>6VDC 4A regulator to drive servo motor outputs</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Debug Support</td>
        <td className="tg-dlfj" colSpan={2}>JTAG test points</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Power Source</td>
        <td className="tg-dlfj" colSpan={2}>i.,  microUSB USB,<br />ii., 2 cell (2S) LiPo battery connector,<br />iii.,9 - 18VDC DC Jack</td>
      </tr>
      <tr>
        <td className="tg-q7v3">User Input / Output</td>
        <td className="tg-dlfj" colSpan={2}>i.,Power Button; ii.,Reset Button; iii.,Boot Button; iv.,2 user configurable buttons;<br />v.,6 user configurable LEDs;vi Power LED</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Motor Control (requires power from either DC Jack or 2S battery)</td>
        <td className="tg-dlfj" colSpan={2}>i.,  4 DC motor drivers,<br />ii., 4 Quadrature encoder inputs,<br />iii.,8 Servo motor outputs</td>
      </tr>
      <tr>
        <td className="tg-q7v3">Sensors<br /></td>
        <td className="tg-dlfj" colSpan={2}>i., 9 axis IMU,<br />ii.,Barometer</td>
      </tr>
    </tbody>
  </table>
</div>

--------

## Application Ideas

* Internet of Things

* Smart House
* Industrial
* Automation & Process Control
* Human Machine Interface
* motor control
* UAV control
* Robot

## Hardware Overview

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Hardware_overviw.png" /></div>

## Getting Started

----

### Preparation

#### STEP1. Update the latest image

When you receive a BeagleBone®Blue from seeed, the image is already burned into the on-board eMMC. Which means you can skip this step. However we highly recommend you update the latest image.

**i.** Click and download the latest image from [beagleboard.org](https://beagleboard.org/latest-images).

:::note
The "IoT" images provide more free disk space if you don't need to use a graphical user interface (GUI).Due to sizing necessities, this download may take 30 minutes or more.
:::

The Debian distribution is provied for the boards. The file you download will have an .img.xz extension. This is a compressed sector-by-sector image of the SD card.

**ii.** Plug the SD card into your PC or MAC with an SD card reader.You need an SD card with a capacity of more than 4G.

**iii.** Download and install [Etcher](https://etcher.io/)

Click to download <a href="https://etcher.io/">Etcher</a> here, and burn the ```*.img.xz``` file directly to your SD card with Etcher. Or unzip the ```*.img.xz``` file to a ```*.img``` file, then burn it to SD card with other image writing tools.

Click the Plus icon to add the image you just download, the software will automatically select the SD card you plug. Then click Flash! to start burning. It will takes about 20 minutes to flash.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/v2-flash-sd.png" /></div>

Then reject the SD card and Insert it into your BeagleBone® Blue.

#### STEP2. Power and boot

Connect the BeagleBone® Blue to your computer with the Micro-USB Cable.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/connect.jpg" /></div>

:::caution
Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><B>here</B></a> to buy. If you want to use the Motor Control modules of BeagleBone® Blue, the power supply via USB Port is not sufficiant, you need to use DC-DC Port or 2S battery.
:::

You'll see the power (PWR or ON) LED lit steadily. Within a minute or so, you should see the other LEDs blinking in their default configurations.

* USR0 is typically configured at boot to blink in a heartbeat pattern
* USR1 is typically configured at boot to light during SD (microSD) card accesses
* USR2 is typically configured at boot to light during CPU activity
* USR3 is typically configured at boot to light during eMMC accesses
* WIFI LED is typically configured at boot to light with WiFi network association (BeagleBone® Blue only)

With the latest images, it should no longer be necessary to install drivers for your operating system to give you network-over-USB access to your Beagle. In case you are running an older image, an older operating system or need additional drivers for serial access to older boards, links to the old drivers are below.

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-gvcd{background-color:#ffffff;border-color:#000000;color:#000000;text-align:left;vertical-align:top}\n.tg .tg-l0dh{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;text-decoration:underline;\n  vertical-align:top}\n.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}\n.tg .tg-wzu8{background-color:#ffffff;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 826}}>
    <colgroup>
      <col style={{width: 148}} />
      <col style={{width: 155}} />
      <col style={{width: 523}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-wzu8">Operating System</th>
        <th className="tg-wzu8">USB Drivers</th>
        <th className="tg-wzu8">Comments</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-v0nz">Windows <br />(64-bit)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe" target="_blank" rel="noopener noreferrer">64-bit installer</a><br /></td>
        <td className="tg-gvcd" rowSpan={2}>If in doubt, try the 64-bit installer first.<br /><br />● Windows Driver Certification warning may pop up two or three times. Click "Ignore", "Install" or "Run"<br />● To check if you're running 32 or 64-bit Windows see this <a href="https://support.microsoft.com/kb/827218" target="_blank" rel="noopener noreferrer">Link</a>.<br />● On systems without the latest service release, you may get an error (0xc000007b). In that case, please click this <a href="https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523" target="_blank" rel="noopener noreferrer">Link</a> to install and retry.<br />● You may need to reboot Windows.<br />● These drivers have been tested to work up to Windows 10.</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Windows <br />(32-bit)</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe" target="_blank" rel="noopener noreferrer">32-bit installer</a><br /></td>
      </tr>
      <tr>
        <td className="tg-v0nz">Mac OS X<br /></td>
        <td className="tg-v0nz"> <a href="https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg" target="_blank" rel="noopener noreferrer">Network</a> <a href="https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg" target="_blank" rel="noopener noreferrer">Serial</a></td>
        <td className="tg-gvcd">Install both Network and Serial driver.</td>
      </tr>
      <tr>
        <td className="tg-v0nz">Linux</td>
        <td className="tg-l0dh"><a href="https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh" target="_blank" rel="noopener noreferrer">mkudevrule.sh</a></td>
        <td className="tg-gvcd">Driver installation isn't required, but you might find a few udev rules helpful.</td>
      </tr>
    </tbody>
  </table>
</div>

#### STEP3. Browse to your Beagle

Using either Chrome or Firefox (Internet Explorer will NOT work), browse to the web server running on your board. It will load a presentation showing you the capabilities of the board. Use the arrow keys on your keyboard to navigate the presentation.

When the boot is done, a network adapter should show up on your computer. You can click to enter the [Cloud 9 IDE](http://beaglebone.local:3000/).

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cloud9.png" /></div>

#### STEP4. Connect to wifi

Open a new terminal,then tap the command below

```
root@beaglebone:/var/lib/cloud9# connmanctl
connmanctl> enable wifi
Enabled wifi
connmanctl> tether wifi disable
Error disabling wifi tethering: Already disabled
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO seeed                wifi_f45eabf743ad_7365656564_managed_psk
    CHAIHUOMAKERS        wifi_f45eabf743ad_4348414948554f4d414b455253_managed_psk
    DIRECT-99-HP DeskJet 4670 series wifi_f45eabf743ad_4449524543542d39392d4850204465736b4a6574203436373020736572696573_managed_psk
    mostfun-5bf7         wifi_f45eabf743ad_6d6f737466756e2d35626637_managed_psk
    DIRECT-TNDESKTOP-71PTKLKmsXO wifi_f45eabf743ad_4449524543542d544e4445534b544f502d373150544b4c4b6d73584f_managed_psk
    HPKJ                 wifi_f45eabf743ad_48504b4a_managed_psk
    ChinaNet-yTGy        wifi_f45eabf743ad_4368696e614e65742d79544779_managed_psk
    GPKJ1                wifi_f45eabf743ad_47504b4a31_managed_psk
    GUMO                 wifi_f45eabf743ad_47554d4f_managed_psk
    jdsfkf               wifi_f45eabf743ad_6a6473666b66_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_f45eabf743ad_7365656564_managed_psk
Error /net/connman/service/wifi_f45eabf743ad_7365656564_managed_psk: Already connected
connmanctl> quit
root@beaglebone:/var/lib/cloud9# ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr f4:5e:ab:f7:43:ad  
          inet addr:192.168.199.145  Bcast:192.168.199.255  Mask:255.255.255.0
          inet6 addr: fe80::f65e:abff:fef7:43ad/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST DYNAMIC  MTU:1500  Metric:1
          RX packets:8920 errors:0 dropped:0 overruns:0 frame:0
          TX packets:3531 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1166820 (1.1 MiB)  TX bytes:3352208 (3.1 MiB)

root@beaglebone:/var/lib/cloud9#
```

When you tap ```ifconfig wlan0``` and the internet address is something like 192.168.199.145, congratulations, you have connected to wifi successfully.

When the BeagleBone® Blue connect to the Internet, we highly recommend you use the command below to update your BeagleBone® Blue.

```
sudo apt-get update
sudo apt-get upgrade
```

It may take a long time to update, but it is worthwhile.

### Demo.1  Blink

This is a Javascript demo.

Ckick the **File->New File->** button at the top light corner of Cloud9 IDE.

:::note
after create file, just donot forget save the file meanwhile add the file type.
:::

copy the code below and click **Run**

```
var b = require('bonescript');

var state = b.LOW;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("USR2", b.OUTPUT);
b.pinMode("USR3", b.OUTPUT);
setInterval(toggle, 1000);

function toggle() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite("USR2", state);
}
```

Then you will see the USER2 LED blink.

### Demo.2  USE GPIO With Grove-LED

**Step 1.** Please prepare staff as the Partlist below.

| BeagleBone® Blue | Grove - LED Socket Kit|Grove Adapter cable(6pin)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-White-LED-p-2016.jpeg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Universal-4-Pin-to-Beaglebone-Blue-6-Pin-Female-JST%2FSH-Conversion-Cable-%2810-pcs-pack%29-p-3027.html)|

**Step 2.** Connect the LED Socket Kit to the 6 pin **GPIO** interface of BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/LED.jpg" /></div>

**Step 3.** Open a new terminal in the Cloud9 IDE, tap the code below into this terminal.

```
cd /sys/class/gpio
echo 49 >export
cd gpio49
echo out >direction
while sleep 1;
do echo 0 >value;
sleep 1;
echo 1 >value;
done

```

Now you will see your LED light up in the heartbeat mode.

### Demo.3  USE UART With Grove-GPS

**Step 1.** Please prepare staff as the Partlist below.

| BeagleBone® Blue | Grove - LED Socket Kit|Grove Adapter cable(4pin)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove-GPS.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Get ONE Now](https://www.seeedstudio.com/grove-gps-p-959.html)|[Get ONE Now](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**Step 2.** Connect the Grove-GPS sensor to the 4 pin **UART1** interface of BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS_hARD.jpg" /></div>

**Step 3.** Open a new terminal in the Cloud9 IDE, tap the code below into this terminal.

```
apt install tio
tio /dev/ttyO1 -b 9600
```

Then you will see the GPS information on the terminal as the picture shown below.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/GPS.png" /></div>

### Demo.4  USE I2C With Grove-Digital Light Sensor

**Step 1.** Please prepare staff as the Partlist below.

| BeagleBone® Blue | Grove - LED Socket Kit|Grove Adapter cable(4pin)|
|--------------|-------------|-------|
|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/cover_icon.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_Light_Sensor.jpg" /></div>|<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Grove_4pin.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/BeagleBone-Blue-p-2809.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[Get ONE Now](https://www.seeedstudio.com/category/Grove-Universal-4-Pin-to-Beaglebone-Blue-4-Pin-Female-JST-SH-Conversion-Cable-(10-pcs-pack)-p-3026.html)|

**Step 2.** Connect the Grove-Digital Light Sensor to the 4 pin **I2C** interface of BeagleBone® Blue.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_light.jpg" /></div>

**Step 3.** Open a new terminal in the Cloud9 IDE, tap the code below into this terminal.

```
cd /sys/bus/i2c/devices/i2c-1;
echo tsl2561 0x29 >new_device;
watch -n0 cat 1-0029/iio\:device0/in_illuminance0_input

```

Then you will get the light value as the picture below.

<div align="center"><img width={1000} src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/img/Digital_520.png" /></div>

## Grove Compatibility List

Grove is a modular, standardized connecter prototyping system. Grove takes a building block approach to assembling electronics. Compared to the jumper or solder based system, it is easier to connect, experiment and build and simplifies the learning system, but not to the point where it becomes dumbed down.  Some of the other prototype systems out there takes the level down to building blocks.   Good stuff to be learned that way, but the Grove system allows you to build real systems.   It requires some learning and expertise to hook things up.

The list belew is the Grove modules that work well with BeagleBone® Blue.

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-fhi2{background-color:#ffffff;color:#000000;font-size:20px;font-weight:bold;text-align:center;vertical-align:top}\n.tg .tg-366q{background-color:#ffffff;color:#000000;font-size:18px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-fhi2">SKU</th>
        <th className="tg-fhi2">Item</th>
        <th className="tg-fhi2">I/O type</th>
        <th className="tg-fhi2">Working Voltage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-366q">101020017</td>
        <td className="tg-366q">Grove - Rotary Angle Sensor</td>
        <td className="tg-366q">Analog</td>
        <td className="tg-366q">Can work on 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020048</td>
        <td className="tg-366q">Grove - Rotary Angle Sensor(P)</td>
        <td className="tg-366q">Analog</td>
        <td className="tg-366q">Can work on 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020036</td>
        <td className="tg-366q">Grove - Slide Potentiometer</td>
        <td className="tg-366q">Analog</td>
        <td className="tg-366q">Can work on 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020031</td>
        <td className="tg-366q">Grove - Piezo Vibration Sensor</td>
        <td className="tg-366q">Analog</td>
        <td className="tg-366q">Can work on 1.8V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - Button</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - Button(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020001</td>
        <td className="tg-366q">Grove - Encoder</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - Switch(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - Tilt Switch</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - Water Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - Collision Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020030</td>
        <td className="tg-366q">Grove - Mouse Encoder</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - Green LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - Red LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020172</td>
        <td className="tg-366q">Grove - Line Finder v1.1</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020018</td>
        <td className="tg-366q">Grove - Water Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020019</td>
        <td className="tg-366q">Grove - Temperature&amp;Humidity Sensor Pro</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020020</td>
        <td className="tg-366q">Grove - PIR Motion Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020052</td>
        <td className="tg-366q">Grove - GSR sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020175</td>
        <td className="tg-366q">Grove - IR Distance Interrupter v1.2</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020033</td>
        <td className="tg-366q">Grove - Ear-clip Heart Rate Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020037</td>
        <td className="tg-366q">Grove - Touch Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020030</td>
        <td className="tg-366q">Grove - Digital Light Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020232</td>
        <td className="tg-366q">Grove - Speech Recognizer v1.0</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020005</td>
        <td className="tg-366q">Grove - Collision Sensor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020005</td>
        <td className="tg-366q">Grove - EL Driver</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030009</td>
        <td className="tg-366q">Grove - White LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030010</td>
        <td className="tg-366q">Grove - Blue LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030005</td>
        <td className="tg-366q">Grove - Red LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030007</td>
        <td className="tg-366q">Grove - Green LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030014</td>
        <td className="tg-366q">Grove - Multi Color Flash LED (5mm)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020001</td>
        <td className="tg-366q">Grove - Variable Color LED</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020005</td>
        <td className="tg-366q">Grove - LED String Light</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104020048</td>
        <td className="tg-366q">Grove - Chainable RGB LED v2.0</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020004</td>
        <td className="tg-366q">Grove - Switch(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">111020000</td>
        <td className="tg-366q">Grove - Button(P)</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020003</td>
        <td className="tg-366q">Grove - Button</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020038</td>
        <td className="tg-366q">Grove - Magnetic Switch</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020025</td>
        <td className="tg-366q">Grove - Tilt Switch</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020005</td>
        <td className="tg-366q">Grove - Relay</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">107020000</td>
        <td className="tg-366q">Grove - Buzzer</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020014</td>
        <td className="tg-366q">Grove - Dry-Reed Relay</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">105020003</td>
        <td className="tg-366q">Grove - Vibration Motor</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">108020021</td>
        <td className="tg-366q">Grove - Mini Fan v1.1</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020004</td>
        <td className="tg-366q">Grove - Solid State Relay</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020007</td>
        <td className="tg-366q">Grove - Screw Terminal</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020008</td>
        <td className="tg-366q">Grove - MOSFET</td>
        <td className="tg-366q">Digital</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020212</td>
        <td className="tg-366q">Grove - Temp&amp;Humi Sensor(SHT31)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020192</td>
        <td className="tg-366q">Grove - Barometer Sensor (BMP280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020080</td>
        <td className="tg-366q">Grove - IMU 9DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020054</td>
        <td className="tg-366q">Grove - 3-Axis Digital Accelerometer(±16g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020252</td>
        <td className="tg-366q">Grove - IMU 10DOF v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020193</td>
        <td className="tg-366q">Grove - Barometer Sensor(BME280)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020082</td>
        <td className="tg-366q">Grove - Finger-clip Heart Rate Sensor with shell</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020050</td>
        <td className="tg-366q">Grove - 3-Axis Digital Gyro</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020024</td>
        <td className="tg-366q">Grove - Finger-clip Heart Rate Sensor</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020081</td>
        <td className="tg-366q">Grove - 6-Axis Accelerometer&amp;Compass v2.0</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">101020071</td>
        <td className="tg-366q">Grove - 3-Axis Digital Accelerometer(±400g)</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030008</td>
        <td className="tg-366q">Grove - OLED Display 0.96''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">104030011</td>
        <td className="tg-366q">Grove - OLED Display 1.12''</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020006</td>
        <td className="tg-366q">Grove - I2C Hub</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">103020013</td>
        <td className="tg-366q">Grove - I2C ADC</td>
        <td className="tg-366q">I2C</td>
        <td className="tg-366q">3.3V</td>
      </tr>
      <tr>
        <td className="tg-366q">113020003</td>
        <td className="tg-366q">Grove - GPS</td>
        <td className="tg-366q">UART</td>
        <td className="tg-366q">3.3V</td>
      </tr>
    </tbody>
  </table>
</div>

## FAQs

Please click **[here](http://support.seeedstudio.com/knowledgebase/articles/1826437-seeeduino-v4-2-sku-102010026)** to see all BeagleBone® Blue FAQs.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

-----

* **[Schematic]** [BeagleBone® Blue Schematic](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/BeagleBone_Blue_eagle-file.zip)
* **[Grove]** [BeagleBone® Blue Grove Compatibility List.xlsx](https://github.com/SeeedDocument/Beaglebone_Blue/raw/master/res/Beaglebone%20Blue%20Grove%20Compatibility%20List.xlsx)
* **[MoreReading]** [BeagleBoard Main Page](http://beagleboard.org/)
* **[MoreReading]** [BeagleBoard Getting Started](http://beagleboard.org/getting-started)
* **[MoreReading]** [Troubleshooting](http://beagleboard.org/getting-started#troubleshooting)
* **[MoreReading]** [Hardware documentation](http://beagleboard.org/getting-started#hardware)
* **[MoreReading]** [Projects of BeagleBoard](http://beagleboard.org/project)

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
</div>
