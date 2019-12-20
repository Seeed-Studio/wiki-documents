# How to Build a Home Soft Router and NAS with ReComputer  



## 1. Hardware Preparation  

- **ReComputer motherboard:** 8GB RAM + 64GB eMMC in this case.
- **SSD:** To build an NAS, we need high-capacity disk drives besides the original 64GB eMMC. It's recommended to use SSDs which have a much longer life than HDDs and there's no need to consider about RAID. We can choose m.2 SATA SSD, m.2 NVMe SSD, 2.5" SATA SSD, etc.
- **An 8cm 4-pin cooling fan:** It's not enough to use passive heat sink fins in hot summer. We need a bigger fan because it's quieter and choose 8010 instead of 9015 for a thinner enclosure.
- **An enclosure:** Don't worry, design documents are available for everyone and you can copy one as you like.
- **Grove - OLED Display 0.96":** There's a micro controller for Arduino on ReComputer motherboard. Why not do something interesting with it?
- **Some cables,** such as SATA data cables, SSD cables, fan cables, Grove cables, etc. Some of them may need to be re-wired but it's not difficult.  

 ![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/10.jpg)

 ![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/11.jpg)

 ![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/12.jpg)

**Enclosure**  

It's recommended to choose acrylic sheets thinner than 3mm. More details are in the attached file `ReComputer_DarkBox.dxf`.  

Support pillars: 25mm x 4 and 27mm x 4.  

**Cables**  

Please note the definition of HDD_PWR pin when making cables because cooling fan can be powered by 12V power supply in HDD_PWR pin.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/13.jpg)





## 2. Assembly  

Step 1: Installing Grove - OLED Display 0.96" onto the enclosure.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/20.jpg)

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/21.jpg)

Step 2: Installing the cooling fan onto the enclosure.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/22.jpg)

Step 3: Installing 2.5" SSD onto the enclosure.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/23.jpg)

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/24.jpg)

Step 4: Wiring.  

As the pinout diagram of the 4-pin cooling fan shows, it has a tach-detect pin `TACH` and a tach-control pin `PWM` connected with 12 pin and 13 pin of micro controller for Arduino (Actually it depends on the definition in the program).  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/25fan_pinout.png)

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/25.jpg)

Connect Grove - OLED Display 0.96" with I2C as well as PWR and GND.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/26.jpg)

Connect serial port of SAMD21 with serial port of Intel CPU.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/25uart.jpg)

Step 5: Install front and rear lids and tighten the screws.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/27.jpg)

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/28.jpg)

**Heat removal**  

Cold wind provided by the fan flows through CPU cooling fins and SSD, thus removing heat effectively.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/29.jpg)





## 3. Installation and Configuration of Proxmox VE Virtual Environment  

We need a USB stick no less than 8GB for installation. Here is latest released [Proxmox VE ISO](https://www.proxmox.com/en/downloads).  

Flash it into USB stick with Etcher.  

Plug in keyboard, mouse, display and USB stick. Boot ReComputer and press the `F7` key continuously to enter the boot device selection interface. Select U disk boot.  

Installation of PVE is very simple but NOTE that:  
**PVE CAN NOT be installed into eMMC!**  

That's because PVE team believes that eMMC doesn't have a life longer than SSD and it's not allowed to install PVE into eMMC.  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/pve-grub-menu.png)

(Picture was downloaded from PVE website. My PVE is 6.0 ver.)  

Check the [installation document](https://pve.proxmox.com/wiki/Installation) if you have problems with it.  

ReComputer has two network ports. Set anyone of the two to management network of PVE and the other to WAN port of soft router system.  





## 4. Arduino Programs  

SAMD21 (Compatible with Seeeduino Cortex-M0+) on ReComputer board is used to control fan tach dynamically according to CPU temperature. Some information of PVE system is displayed on the OLED screen simultaneously.  

My design ideas:  
- PVE is a Debian Linux Box so that we can obtain CPU temperature by programming flexibly.
- It is possible to flash program via the USB port of SAMD21 with it connected to the USB port of Intel CPU already.
- Another serial port of SAMD21, Serial1, has been connected to the serial port of Intel CPU so that it's possible to communicate via it. ( I believe that hardware serial port is more reliable than USB port. )
- Write a simple Arduino program to read CPU temperature via Serial1, control fan tach and drive to refresh the OLED display.  

Really simple, isn't it? Here's the [Arduino program](https://github.com/KillingJacky/DarkBox).  



### 4.1 Compilation  

What we do first is to open the program in Arduino IDE. Select `Seeeduino Cortex-M0+` and find the bin file with compilation log.  

![image-20191112210126228](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/401.png)

![image-20191112210342437](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/402.png)



### 4.2 Flashing  

Use command `scp` copy `ReComputer.ino.bin` generated by Arduino IDE and paste into PVE.  
```
scp ReComputer.ino.bin root@192.168.1.x:~
```  

Run SSH.
```
ssh root@192.168.1.x
```  

Download the flash tool `bosaac`  
```
wget http://downloads.arduino.cc/tools/bossac-1.7.0-x86_64-linux-gnu.tar.gz
tar zxvf bossac-1.7.0-x86_64-linux-gnu.tar.gz
cp bossac-1.7.0/bossac /usr/bin/
chmod a+x /usr/bin/bossac
```  

Make Arduino enter bootloader mode by short-circuiting Reset and Gnd twice.  

![image-20191113230804316](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/resetArduino.png)

Flash Arduino program with the flash tool.  
```
bossac -i -d --port=/dev/ttyACM0 -U true -e -w -v ReComputer.ino.bin -R
```  

You will see this displayed on the screen:  

![](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/oled_gui.jpg)  

CPU temperature and fan tach are displayed on the screen. The fan will stop working if temperature is lower than 45℃.  

History of system load and current memory usage are displayed as well.  

BTW, do not forget to install the script in PVE. Check `README` for more details in the Github repository.  

Now we have already completed our work on hardware and built a small PVE server with a smart cooling system and a disk drive of 2TB which is enough for several virtual machines and NAS storage.  





## 5. Installing Soft Routing System  

The ReComputer motherboard has two Gigabit Ethernet ports, which makes it easy to build a soft routing system. Soft routing system has stronger fuctions than normal routers, providing you with a more professional home network environment.  

I choosed `lede(OpenWrt)` system common in the community and not difficult to use.  

Here is the network topology diagram:  

![image-20191116233322566](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/500networkArch.png)

Step 1: Download and install the image from [here](https://drive.google.com/file/d/1-R5mJOu43bKWHv8ViK2V1dtE4zBLDYyU/view?usp=sharing).  

This is from lede third-party modified source code.  

Step 2: Upload the image to PVE.  
```
scp /PATH/TO/openwrt-x86-64-combined-squashfs.qcow2 root@192.168.32.222:~
```  

The .qcow2 file was exported when I compiled the image. If you have downloaded the .img file, use this command to transform it.  
```
qemu-img convert -f raw -O qcow2 lede-xxxxxxx-combined-ext4.img vm-100-disk-1.qcow2
```  

Step 3: Create a virtual machine and import the image.  

Create a WAN network port and reboot PVE to enable the added WAN.  

![image-20191117161646454](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/503createWanBridge.png)

![image-20191117164131776](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/503wanActive.png)

Create a virtual machine and configure it as below (After the wizard, add the 2nd network card manually and delete the hard disk) .  

![image-20191117161819910](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/504ledeSummary.png)

Import lede disk image.  
```
root@pve-home:~# qemu-img check openwrt-x86-64-combined-squashfs.qcow2
No errors were found on the image.
685/2824 = 24.26% allocated, 0.00% fragmented, 0.00% compressed clusters
Image end offset: 45219840
root@pve-home:~# qemu-img info openwrt-x86-64-combined-squashfs.qcow2
image: openwrt-x86-64-combined-squashfs.qcow2
file format: qcow2
virtual size: 177M (185073664 bytes)
disk size: 43M
cluster_size: 65536
Format specific information:
    compat: 1.1
    lazy refcounts: false
    refcount bits: 16
    corrupt: false
root@pve-home:~# qm importdisk 100 openwrt-x86-64-combined-squashfs.qcow2 local-lvm
  Rounding up size to full physical extent 180.00 MiB
  Logical volume "vm-100-disk-0" created.
    (100.00/100%)
```  

Note that 100 is the id number of the created virtual machine. It can be modified in your computer.  

Then we can see the disk we imported just now in `local-lvm`.  

![image-20191117163326117](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/505diskImported.png)

The disk is shown in the hardware list of the virtual machine simultaneously.  

![image-20191117163523743](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/506diskImported2.png)

Double click to add it.  

![image-20191117163625885](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/507addDisk.png)

The disk list should be like this:  

![image-20191117163718793](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/508finalHardwareSummary.png)

Boot the virtual machine, open Console and check Kernel log. When `random: crng init done` is printed, click Enter. Seeing `shell` means booting successfully.  

![image-20191117164609593](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/509ledeBootup.png)

The intranet IP of lede is `192.168.1.1` . We need our computer connected to LAN network port of ReComputer to access this IP by setting IP address to static IP 192.168.1.x .  

![image-20191117165532300](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/510configLaptopNetwork.png)

Enter `192.168.1.1` in the browser to access OpenWrt login interface. User name is `root` and password is `password` by default.  

![image-20191117165632253](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/20191220134207.png)

How to play with OpenWrt is beyond the scope of this artical. Just study and enjoy!  





## 6. Installing NAS system.  

NAS has become one of services which are more and more important in home network. It can be easily installed in PVE virtual environment. In this case, the open source NAS system `openmediavault` is selected.  

Step 1: Download and install the image from [here](https://sourceforge.net/projects/openmediavault/files/5.0.5/openmediavault_5.0.5-amd64.iso/download).  

Step 2: Upload the image to PVE.  

![image-20191114152513579](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/602uploadInstaller.png)

Step 3: Create a virtual machine and configure it as below:  

![image-20191117110324189](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/603omvConfig.png)

Step 4: Boot the virtual machine created just now and install openmediavault. Click `Continue` or `OK` until installation is completed.  

![image-20191117110717036](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/604installOMV.png)

![image-20191117111323934](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/605installOMVDone.png)

After installation is finished, the window above will be displayed on your screen. Now the ISO image in the virtual machine should be removed.  

![image-20191117111506366](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/606removeCDROM.png)

Go back to Console and click Enter to reboot your virtual machine.  

![image-20191117111854853](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/607omvFirstBoot.png)

Copy the IP address shown on the screen and enter it in the browser to access OpenWrt login interface. User name is `admin` and password is `openmediavault` by default.  

![image-20191117112155601](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/608loginOMV.png)

![image-20191117112400979](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/609omvWebUIFirstView.png)

Installation of openmediavault system has been completed already. What we should do next is passing through the SSD to improve read and write efficiency of the OMV system.  

Step 5: Hard disk pass-through.  

IOMMU needs to be enabled first according to PVE document. After accessing PVE using SSH, run:  
```
root@pve-home:~# vim /etc/default/grub
```  

Add `intel_iommu=on` following `1GRUB_CMDLINE_LINUX_DEFAULT` .
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"
```  

Run `update-grub` .  
```
root@pve-home:~# update-grub
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-5.0.15-1-pve
Found initrd image: /boot/initrd.img-5.0.15-1-pve
Found memtest86+ image: /boot/memtest86+.bin
Found memtest86+ multiboot image: /boot/memtest86+_multiboot.bin
Adding boot menu entry for EFI firmware configuration
done
```  

You have to make sure the following modules are loaded. This can be achieved by adding them to ‘*/etc/modules*’
```
vfio
 vfio_iommu_type1
 vfio_pci
 vfio_virqfd
```  

After changing anything modules related, you need to refresh your `initramfs`. On Proxmox VE this can be done by executing:  
```
root@pve-home:~# update-initramfs -u -k all
```  

Finally reboot to bring the changes into effect and check that it is indeed enabled.
```
[    1.810500] DMAR: Setting RMRR:
[    1.810644] DMAR: Setting identity map for device 0000:00:02.0 [0x77800000 - 0x7fffffff]
[    1.810794] DMAR: Setting identity map for device 0000:00:15.0 [0x75935000 - 0x75954fff]
[    1.810805] DMAR: Prepare 0-16MiB unity mapping for LPC
[    1.810891] DMAR: Setting identity map for device 0000:00:1f.0 [0x0 - 0xffffff]
[    1.810959] DMAR: Intel(R) Virtualization Technology for Directed I/O
```  

If you see the outputs above, IOMMU is enabled.  

Check which PCI interface the hard disk we want to pass through is on. The SATA controller connected to the SATA3 interface is on the 00: 12.0 interface.  
```
root@pve-home:~# lspci -nn
00:00.0 Host bridge [0600]: Intel Corporation Device [8086:31f0] (rev 03)
00:02.0 VGA compatible controller [0300]: Intel Corporation Device [8086:3185] (rev 03)
00:0c.0 Network controller [0280]: Intel Corporation Device [8086:31dc] (rev 03)
00:0e.0 Audio device [0403]: Intel Corporation Device [8086:3198] (rev 03)
00:0f.0 Communication controller [0780]: Intel Corporation Celeron/Pentium Silver Processor Trusted Execution Engine Interface [8086:319a] (rev 03)
00:12.0 SATA controller [0106]: Intel Corporation Device [8086:31e3] (rev 03)
00:13.0 PCI bridge [0604]: Intel Corporation Device [8086:31d8] (rev f3)
00:14.0 PCI bridge [0604]: Intel Corporation Device [8086:31d6] (rev f3)
00:14.1 PCI bridge [0604]: Intel Corporation Device [8086:31d7] (rev f3)
00:15.0 USB controller [0c03]: Intel Corporation Device [8086:31a8] (rev 03)
00:17.0 Signal processing controller [1180]: Intel Corporation Device [8086:31b4] (rev 03)
00:17.1 Signal processing controller [1180]: Intel Corporation Device [8086:31b6] (rev 03)
00:17.2 Signal processing controller [1180]: Intel Corporation Device [8086:31b8] (rev 03)
00:18.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31bc] (rev 03)
00:18.1 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31be] (rev 03)
00:18.2 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31c0] (rev 03)
00:18.3 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31ee] (rev 03)
00:19.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO SPI Host Controller [8086:31c2] (rev 03)
00:1c.0 SD Host controller [0805]: Intel Corporation Celeron/Pentium Silver Processor SDA Standard Compliant SD Host Controller [8086:31cc] (rev 03)
00:1e.0 SD Host controller [0805]: Intel Corporation Device [8086:31d0] (rev 03)
00:1f.0 ISA bridge [0601]: Intel Corporation Device [8086:31e8] (rev 03)
00:1f.1 SMBus [0c05]: Intel Corporation Celeron/Pentium Silver Processor Gaussian Mixture Model [8086:31d4] (rev 03)
01:00.0 Non-Volatile memory controller [0108]: Samsung Electronics Co Ltd NVMe SSD Controller SM961/PM961 [144d:a804]
02:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
03:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
```  

Go back to Web UI in PVE. Select `Hardware -> Add PCI Device` in OMV virtual machine.  

![image-20191117114829217](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/610pciPassthrough.png)

![image-20191117155102090](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/611selectPCI.png)

After that, reboot the virtual machine and we will find hard disk been identified in OMV.  

![image-20191117155433087](https://github.com/SeeedDocument/How-to-build-a-home-soft-router-and-NAS/raw/master/612seeTheNewDisk.png)

Check openmediavault docunment for more details and enjoy it!