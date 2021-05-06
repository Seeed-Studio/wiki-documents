---
name: How to Make File System, Compile u-boot and Linux Kernel
category: BeagleV™ - StarLight
bzurl: 
wikiurl: 
sku: 
---

# How to Make File System, Compile u-boot and Linux Kernel

<div class="tips" style="background-color: #ffefd9;height: 97px;">
            <div class="left-icon" style="background-color: #ffc983;padding-top: 10px;box-sizing: border-box;height: 100%;width: 38px;text-align: center;float: left;height: 97px;">
                <img src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Attention.svg" alt="attention icon" style="width: 26px;">
            </div>
            <div class="right-desc" style="margin-left: 15px;width:calc(95% - 38px);float: left;">
                <p style="font-weight: bold;margin-top: 10px;">Disclaimer</p>
               <p style="font-size: 14px;">Please note that this guide is for the use of the pre-production beta version of BeagleV™ - StarLight</p>
          </div>
    </div>

## Hardware Needed

- BeagleV™ - Starlight
- Micro-SD Card (16GB or more)
- PC with Linux OS or Mac
- USB to Serial Converter
- Ethernet Cable
- Power Adapter
- USB Type-C Cable

**Note:** In this guide, **Ubuntu 20.04 LTS** is installed on the **host PC**

## Set Up Compilation Environment

First we need to set up the compilation environment. There are 3 ways to do this. You can use any method of your choice. Please note the following, according to the method you use.

- Method 1: Use pre-compiled cross-compile. To compile using this method, use **CROSS_COMPILE=riscv64-unknown-linux-gnu-**
- Method 2: Set up your own cross-compile. To compile using this method, use **CROSS_COMPILE=riscv64-linux-gnu-**
- Method 3: Use Docker Fedora cross-compile. To compile using this method, use **CROSS_COMPILE=riscv64-linux-gnu-**

In this guide, method 2 is used, where **CROSS_COMPILE=riscv64-linux-gnu-**

### Method 1: Use Pre-Compiled Cross-Compile (riscv64-unknown-linux-gnu-gcc)

- **Step 1.** Click [this link](https://files.seeedstudio.com/wiki/BeagleV/gcc10.2.0.tar.xz) to download a pre-compiled compiler (riscv64-unknown-linux-gnu-gcc)

- **Step 2.** Extract the file to a directory of your choice

- **Step 3.** Open a terminal window and add the compiler to your **PATH**

```sh
export PATH=/home/user/gcc10.2.0/gcc/bin:$PATH
```

**Note:** Point to the directory that you extracted the file before

- **Step 4.** Check the version of the riscv64-unknown-linux-gnu-gcc

```sh
riscv64-unknown-linux-gnu-gcc -v
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/compiled_gcc.png" alt="pir" width="800" height="auto"></p>

### Method 2: Set Up Your Own Cross-Compile (riscv64-linux-gnu-gcc)

- **Step 1.** Install the **riscv64-linux-gnu-gcc** compiler from Ubuntu packages 

```sh
sudo apt update
sudo apt upgrade
sudo apt install gcc-riscv64-linux-gnu
```

- **Step 2.** Check the version of the riscv64-linux-gnu-gcc

```sh
riscv64-linux-gnu-gcc -v
```

The output will be as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/compiler_version.png" alt="pir" width="800" height="auto"></p>

Now we need to add **elfutils** and **zlib** libraries into **cross-compile**

- **Step 3.** Visit [this link](https://zlib.net/) and download the latest **.tar.gz** of zlib

- **Step 4.** Extract the file and navigate to the extracted directory

```sh
tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
```

- **Step 5.** Install **vim text editor** if you have not installed before. You can skip this step if you have it already

```sh
sudo apt install vim
```

- **Step 6.** Create a script inside the directory and open using vim text editor

```sh
vim zlib-build.sh
```

- **Step 7.** Copy the following and paste inside the script

```sh
#!/bin/bash
mkdir build
CHOST=riscv CC=riscv64-linux-gnu-gcc \
AR=riscv64-linux-gnu-ar \
RANLIB=riscv64-linux-gnu-ranlib \
./configure
make && make install
```

- **Step 8.** Press **ESC** and type **:x** to save and exit from the file

- **Step 9.** Modify the permissions of **zlib-build.sh**

```sh
chmod +x zlib-build.sh
```

- **Step 10.** Run the script 

```sh
sudo ./zlib-build.sh
```

The final lines of the output will be as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/zlib_output.png" alt="pir" width="650" height="auto"></p>

- **Step 11.** Visit [this link](https://sourceware.org/elfutils/) and download the latest **.tar.bz2** of ulfutils

- **Step 12.** Extract the file and navigate to the extracted directory

```sh
tar -jxvf elfutils-latest.tar.bz2
cd elfutils-0.183
```

- **Step 13.** Create a script inside the directory and open using vim text editor

```sh
vim elfutil-build.sh
```

- **Step 14.** Copy the following, paste inside the script and save the file

```sh
#!/bin/bash

mkdir build
#export LDFLAGS=-L
#export CPPFLAGS=-I
#export LIBS=-lz
./configure --host=riscv64-linux-gnu --enable-libdebuginfod=dummy --disable-debuginfod --prefix=/usr --libdir=/lib
make && make install
```

- **Step 15.** Modify the permissions of **elfutil-build.sh**

```sh
chmod +x elfutil-build.sh
```

- **Step 16.** Run the script 

```sh
sudo ./elfutil-build.sh
```

The final lines of the output will be as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/elfutil_compile.png" alt="pir" width="750" height="auto"></p>

### Method 3: Use Docker Fedora Cross-Compile (riscv64-linux-gnu-gcc)

Let's start by installing Docker. If you have installed Docker already, you can start from **step xx**

- **Step 1.** Update your existing pckages list

```sh
sudo apt update
```

- **Step 2.** Install a few prerequisite packages which let apt use packages over HTTPS

```sh
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

- **Step 3.** Add the GPG key for the official Docker repository to your system

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

- **Step 4.** Add the Docker repository to APT sources

```sh
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

- **Step 5.** Update the package database with the Docker packages from the newly added repo

```sh
sudo apt update
```

- **Step 6.** Make sure you are about to install from the Docker repo instead of the default Ubuntu repo

```sh
apt-cache policy docker-ce
```

- **Step 7.** Install Docker

```sh
sudo apt install docker-ce
```

- **Step 8.** Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it’s running

```sh
sudo systemctl status docker
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/docker_running.png" alt="pir" width="750" height="auto"></p>

- **Step 9.** Install Fedora container 

```sh
sudo docker pull fedora:33
```

- **Step 10.** Start the Fedora container 

```sh
sudo docker run -v $(dirname $PWD):/workspace -w /workspace -it fedora:33
```

- **Step 11.** Install the necessary dependencies inside the container

```sh
dnf update
dnf install make ncurses-devel gcc-riscv64-linux-gnu findutils bc perl xz openssl openssl-devel git flex bison elfutils-libelf-devel cpio
```

- **Step 12.** Check the version of the riscv64-linux-gnu-gcc

```sh
riscv64-linux-gnu-gcc -v
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/docker_gcc.png" alt="pir" width="800" height="auto"></p>

## Compile u-boot

Now we need to compile the u-boot for BeagleV™ - Starlight. Follow the steps below

- **Step 1.** Move into your desired directory to store the uboot files

```sh
Example:
cd ~ # home directory
```

- **Step 2.** Download the source code for uboot compilation

```sh
git clone https://github.com/starfive-tech/u-boot
```

- **Step 3.** Inside the **u-boot** directory, type the following to **compile u-boot**

```sh
cd u-boot
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv starfive_vic7100_beagle_v_smode_defconfig
```

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv u-boot.bin u-boot.dtb
```

There will be these 2 files generated after compilation inside the **u-boot** directory: **u-boot.bin** and **u-boot.dtb**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/uboot-compile2.png" alt="pir" width="800" height="auto"></p>

**Note:** The **u-boot.dtb** file will be used later in this guide when we try to move rootfs, uboot and kernel to BeagleV, whereas both **u-boot.dtb** and **u-boot.bin** will be used next for **OpenSBI compilation**

## Compile OpenSBI

OpenSBI stands for Open-Source Supervisor Binary Interface and it is an open-source implementation of the RISC-V Supervisor Binary Interface. It is a RISC-V specific runtime service provider and it is typically used in boot stage following ROM and LOADER. A typical boot flow is as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/opensbi_fig.png" alt="pir" width="700" height="auto"></p>

Now we need to compile OpenSBI for BeagleV™ - Starlight. Follow the steps below

- **Step 1.** Move into your desired directory to store the OpenSBI files

```sh
Example:
cd ~ # home directory
```

- **Step 2.** Download the source code for OpenSBI compilation

```sh
git clone https://github.com/starfive-tech/opensbi
```

- **Step 3.** Inside **opensbi** directory, type the following to **compile openSBI**

```sh
cd opensbi
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv PLATFORM=starfive/vic7100 FW_PAYLOAD_PATH={U-BOOT_PATH}/u-boot.bin FW_PAYLOAD_FDT_PATH={U-BOOT_PATH}/u-boot.dtb 
```

**Note:** Modify the path to the path of **u-boot** from before

The file will be generated in the directory **opensbi/build/platform/starfive/vic7100/firmware** as **fw_payload.bin** after compilation and the size is about 700+K

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/u-boot-new.png" alt="pir" width="850" height="auto"></p>

- **Step 4.** Navigate to the directory containing **fw_payload.bin**

```sh
cd opensbi/build/platform/starfive/vic7100/firmware
```

- **Step 5** Copy the file **fw_payload.bin** to a different location

```sh
cp fw_payload.bin /home/user/Desktop
```

- **Step 6.** Navigate to the copied location and execute the following to install an **image conversion tool**

```sh
cd /home/user/Desktop
sudo apt install subversion
svn export https://github.com/starfive-tech/freelight-u-sdk.git/branches/starfive/fsz.sh
```

**Note:** [Here](https://github.com/starfive-tech/freelight-u-sdk/blob/starfive/fsz.sh) is the source code

- **Step 7.** Change the user rights of the tool

```sh
chmod 777 fsz.sh
```

- **Step 8.** Convert the file from **fw_payload.bin** to **fw_payload.bin.out**

```sh
./fsz.sh fw_payload.bin fw_payload.bin.out
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/fw_convert.png" alt="pir" width="700" height="auto"></p>

**Note:** You will see a new file named **fw_payload.bin.out** generated

## Flash uboot

Let's move on to flash the **fw_payload.bin.out** file generated before to BeagleV™ - StarLight. This fw_payload file is the result of OpenSBI and uboot both compiled together

- **Step 1.** Connect one end of the USB Type-C cable to the USB Type-C port on the BeagleV™ - StarLight and connect the other end of the cable to the power adapter

- **Step 2.** Connect the jumper wires from the USB to Serial Converter to the 40-Pin GPIO header of the BeagleV™ - StarLight as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/connection.jpg" alt="pir" width="1000" height="auto"></p>

- **Step 3.** Connect power adapter to wall power socket

- **Step 4.** Open a **terminal window** on host PC

- **Step 5.** Type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 6.** Install **minicom**, which is a **serial communication software** that helps to establish a serial communcation between your host PC and BeagleV™ - StarLight

```sh
sudo apt-get install minicom
```

- **Step 7.** Connect the **USB To Serial Converter** to the **PC**

- **Step 8.** Type the following in the terminal to view the connected serial devices

```sh
dmesg | grep tty
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_1.png" alt="pir" width="800" height="auto"></p>

- **Step 9.** Connect to the serial device by typing the following

```sh 
minicom -D /dev/ttyACM0 -b 115200
```

**Note:** The baud rate is set to 115200

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_2.png" alt="pir" width="600" height="auto"></p>

- **Step 10.** After the hardware connections mentioned above, turn on the power from the wall power socket to power on the BeagleV™ - StarLight and you will see the startup information as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_3.png" alt="pir" width="600" height="auto"></p>

- **Step 11.** Press any key as soon as it starts up to enter the **upgrade menu**. In this menu, you can update uboot

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_4.png" alt="pir" width="1000" height="auto"></p>

- **Step 12.** Type "0" and press **Enter** to update uboot

- **Step 13.** Press **Ctrl+A** and then press **s** to enter **upload mode**

- **Step 14.** Select **xmodem** and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-xmodem-select.png" alt="pir" width="800" height="auto"></p>

- **Step 15.** Select **Goto** from the bottom tab menu and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-goto.png" alt="pir" width="750" height="auto"></p>

- **Step 16.** Enter the directory path and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-directory-path.png" alt="pir" width="750" height="auto"></p>

- **Step 17.** Select **fw_payload.bin.out** by navigating using **arrow keys** ,press **Space** and press **Enter**

If you see the following output, that means you have successfully transferred the **fw_payload.bin.out** file to BeagleV™ - Starlight.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/xmodem-complete.png" alt="pir" width="600" height="auto"></p>

## Compile Linux Kernel

Now we need to compile Linux Kernel for BeagleV™ - Starlight. Follow the steps below

- **Step 1.** Move into your desired directory to store the Linux Kernel files

```sh
Example:
cd ~ # home directory
```

- **Step 2.** Download the source code for Linux Kernel

```sh
git clone https://github.com/starfive-tech/linux
```

- **Step 3.** Type the following to set the **default configuration settings** for compiling Linux Kernel

```sh
cd linux
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv starfive_vic7100_evb_sd_net_fedora_defconfig
```

- **Step 4.** Type the following to set **additional configuration settings** for compiling Linux Kernel. If you did step 3, this step is not necessary.

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv menuconfig
```

- **Step 5.** Finally compile the **Linux Kernel**

```sh
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv -jx
```

**Note:** Here you need to change the **-jx** value according to the **number of cores in your CPU**. If your **CPU has 8 cores**, change this to **-j8**. This process will take some time and therefore please wait patiently

You will see the following output after compilation

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/linux-compile.png" alt="pir" width="530" height="auto"></p>

The kernel image will be generated as **Image.gz** inside the **linux/arch/riscv/boot** directory

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/linux-file-new.png" alt="pir" width="800" height="auto"></p>

## Make File System

Now we need to make the file system. Follow the steps below to proceed

- **Step 1.** Create the directory structure

```sh
mkdir rootfs
cd rootfs
mkdir dev usr bin sbin lib etc proc tmp sys var root mnt
```

- **Step 2.** Download the **busybox** source code **outside the rootfs directory**

```sh
git clone https://git.busybox.net/busybox
```

- **Step 3.** Navigate to the extracted location and enter busybox configuration

```sh
cd busybox
make CROSS_COMPILE=riscv64-linux-gnu- ARCH=riscv menuconfig
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/busybox-config.png" alt="pir" width="750" height="auto"></p>

- **Step 4.** Navigate to `Settings > Build Options` and check **Build static binary (no shared libs)** by pressing **y**

- **Step 5.** Under `Build Options`, select `cross compiler prefix` and type the following to specify the compiler

```sh 
riscv64-linux-gnu-
```

- **Step 6.** Under `Installation Options > Destination path for 'make install'`, change the path to the path of the **rootfs file directory** (this is the installation location of the compiled busybox)

```sh
Example:
/home/user/rootfs
```

- **Step 7.** **Exit** from the busybox configuration window and **save the configuration**

- **Step 8.** Compile busybox

```sh
make ARCH=riscv
```

- **Step 9.** Install busybox

```sh
make install
``` 

- **Step 10.** Navigate to the **rootfs/etc** directory created before, create a file called **inittab** and open it using vim text editor

```sh
cd rootfs/etc
vim inittab
```

- **Step 11.** Copy and paste the following content inside the **inittab file**

```sh
::sysinit:/etc/init.d/rcS
::respawn:-/bin/login
::restart:/sbin/init

::ctrlaltdel:/sbin/reboot
::shutdown:/bin/umount -a -r
::shutdown:/sbin/swapoff -a
```

- **Step 12.** Create a file called **profile** inside `rootfs/etc` and open it using vim text editor

```sh
vim profile
```

- **Step 13.** Copy and paste the following content inside the **profile file**

```sh 
# /etc/profile: system-wide .profile file for the Bourne shells

echo
#echo -n "Processing /etc/profile... "
# no-op
# Set search library path
#echo "Set search library path in /etc/profile"
export LD_LIBRARY_PATH=/lib:/usr/lib 

# Set user path
#echo "Set user path in /etc/profile"
PATH=/bin:/sbin:/usr/bin:/usr/sbin
export PATH 

# Set PS1
#Note: In addition to the SHELL variable, ash supports \u, \h, \W, \$, \!, \n, \w, \nnn (octal numbers corresponding to ASCII characters)
#And \e[xx;xxm (color effects), etc.
#Also add an extra '\' in front of it!

#echo "Set PS1 in /etc/profile"

export PS1="\\e[00;32m[$USER@\\w\\a]\\$\\e[00;34m"

#echo "Done"
```

- **Step 14.** Create a file called **fstab** inside `rootfs/etc` and open it using vim text editor

```sh
vim fstab
```

- **Step 15.** Copy and paste the following content inside the **fstab file**

```sh
proc	/proc	proc	defaults	0	0
none 	/tmp 	tmpfs 	defaults 	0 	0
mdev 	/dev 	tmpfs 	defaults 	0 	0
sysfs 	/sys 	sysfs 	defaults 	0 	0
```

- **Step 16.** Create a file called **passwd** inside `rootfs/etc` and open it using vim text editor

```sh
vim passwd
```

- **Step 17.** Copy and paste the following content inside the **passwd file**

```sh
root:x:0:0:root:/root:/bin/sh
```

- **Step 18.** Create a file called **group** inside `rootfs/etc` and open it using vim text editor

```sh
vim group
```

- **Step 19.** Copy and paste the following content inside the **group file**

```sh
root:x:0:root
```

- **Step 20.** Create a file called **shadow** inside `rootfs/etc` and open it using vim text editor

```sh
vim shadow
```

- **Step 21.** Copy and paste the following content inside the **shadow file**

```sh
root:BAy5qvelNWKns:1:0:99999:7:::
```

- **Step 22.** Create a directory called **init.d** inside `rootfs/etc` and navigate inside it

```sh
mkdir init.d
cd init.d
```

- **Step 23.** Create a file called **rcS** inside `rootfs/etc/init.d` and open it using vim text editor

```sh
vim rcS
```

- **Step 24.** Copy and paste the following content inside the **rcS file**

```sh
#! /bin/sh
#echo "----------mount all"
/bin/mount -a

#echo "----------Starting mdev......"
#/bin/echo /sbin/mdev > /proc/sys/kernel/hotplug
mdev -s

echo "********************************************************"
echo " starfive mini RISC-V Rootfs"
echo "********************************************************"
```

- **Step 25.** Navigate to the **rootfs/dev** directory created before and execute the following 

```sh
cd rootfs/dev
sudo mknod -m 666 console c 5 1
sudo mknod -m 666 null c 1 3
```

- **Step 26.** Create a soft link in the root directory of **rootfs**

```sh
cd rootfs/
ln -s bin/busybox init
```

- **Step 27.** Modify the permissions of all files in the **rootfs** directory

```sh
sudo chmod 777 -R *
```

- **Step 28.** Execute the following command in the **rootfs** directory to generate rootfs.cpio.gz (cpio file system package) in a different directory

```sh
cd rootfs
find . | cpio -o -H newc | gzip > /home/user/Desktop/rootfs.cpio.gz
```

**Note:** After you sucessfully run the above command, you will see a file named `rootfs.cpio.gz` on your **Desktop**. This directory can be any directory of your choice.

## Move rootfs, kernel and uboot into BeagleV™ - Starlight

Start by moving the previously compiled **rootfs file system package, kernel and uboot images** into a single directory

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/needed-files.png" alt="pir" width="350" height="auto"></p>

### Method 1: Using Micro-SD Card

- **Step 1.** Insert a micro-sd card to the host PC

- **Step 2.** Type the following to see the location of the connected micro-SD card

```sh
lsblk
```

For example, it's /dev/sdc

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/lsblk-1.png" alt="pir" width="500" height="auto"></p>

- **Step 3.** Type the following to enter the partition configuration

```sh
sudo gdisk /dev/sdc
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/gdisk.png" alt="pir" width="650" height="auto"></p>

- **Step 4.** Delete the original partition and then create a new partition by entering the following respectively

```sh
d--->o--->n--->w--->y
```

**Note:** Press **Enter** to keep some settings to default in this configuration

- **Step 5.** Format the micro-sd card and create the file system

```sh
sudo mkfs.vfat /dev/sdc1
```

- **Step 6.** Remove the micro-sd card from PC and plug again to mount it

- **Step 7.** Enter the following to check whether it gets mounted

```sh
df -h
```

You will see an output as follows and take a note of the mount location:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/sd_mount-1.png" alt="pir" width="700" height="auto"></p>

- **Step 8.** Navigate to the directory containing the 3 images as before

```sh
Example:
cd Desktop/compiled
```

- **Step 9.** Copy the files to the micro-sd card by typing the following

```sh
sudo cp Image.gz /media/user/4714-3C2D/
sudo cp rootfs.cpio.gz /media/user/4714-3C2D/
sudo cp u-boot.dtb /media/user/4714-3C2D/
sync
```

**Note:** Here /media/user/4714-3C2D/ is the mount location as shown above

- **Step 10.** Remove the micro-sd card from PC, insert into BeagleV™ - Starlight and turn it on

- **Step 11.** Open **minicom** while **USB to Serial Adapter** is connected between **BeagleV™ - Starlight and PC**, and wait until the board enters **uboot mode**. You will see the following output when it is in uboot mode

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/uboot-opensbi.png" alt="pir" width="600" height="auto"></p>

- **Step 12.** Enter the following commands

```sh
fatls mmc 0:1
fatload mmc 0:1 ${kernel_addr_r} Image.gz 
fatload mmc 0:1 ${fdt_addr_r} u-boot.dtb
fatload mmc 0:1 ${ramdisk_addr_r} rootfs.cpio.gz
booti ${kernel_addr_r} ${ramdisk_addr_r}:${filesize} ${fdt_addr_r}
```

- **Step 13.** Log in by typing the following credentials 

```sh
Username：root
Password：starfive
```

### Method 2: Using Ethernet Cable

- **Step 1.** Connect an Ethernet Cable from the RJ45 port of BeagleV™ - Starlight to a router, connect serial adapter cable and power on the board

**Note:** Make sure the host PC is also connected to the same router using Ethernet or Wi-Fi

- **Step 2.** Open **minicom** and wait until board enters **uboot mode**. You will see the following output when it is in uboot mode

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/uboot-opensbi.png" alt="pir" width="600" height="auto"></p>

- **Step 3.** Enter the following commands to set ubooot environment variables 

```sh
setenv serverip 192.168.1.5;setenv ipaddr 192.168.1.33;setenv hostname starfive;setenv netdev eth0;setenv kernel_comp_addr_r 0x90000000;setenv kernel_comp_size 0x10000000; setenv bootargs console=ttyS0,115200 earlycon=sbi root=/dev/ram0 stmmaceth=chain_mode:1 loglevel=8
```

**Note:** In general the default IP of a router is 192.168.1.1. In this case, use the server IP as the IP assigned by the DHCP server of the router and use the BeagleV IP as 192.168.1.xxx. However, if your router IP is different (ex: 192.168.2.1), the server and BeagleV should follow the IP format of 192.168.2.xxx. 

- **Step 4.** Check the connectivity by pinging the host PC from BeagleV™ - Starlight

```sh
Example:
ping 192.168.1.5
```

If you see the following output, the host PC and BeagleV™ - Starlight has established a communication on the same network

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/ping-test.png" alt="pir" width="350" height="auto"></p>


- **Step 5.** Install a tftp server on the Host PC

```sh
sudo apt-get update 
sudo apt install tftpd-hpa
```

- **Step 6.** Check the status of the server

```sh
sudo systemctl status tftpd-hpa
```

- **Step 7.** Execute the following to enter the tftp server configuration

```sh
sudo nano /etc/default/tftpd-hpa
```

- **Step 8.** Configure the tftp server as follows

```sh
# /etc/default/tftpd-hpa

TFTP_USERNAME="tftp"
TFTP_DIRECTORY="/home/user/Desktop/compiled"  
TFTP_ADDRESS=":69"
TFTP_OPTIONS="--secure"
```

**Note:** The **TFTP_DIRECTORY** is the directory that we created before with all the 3 images (Image.gz, u-boot.dtb, rootfs.cpio.gz)

- **Step 9.** Restart the tftp server

```sh 
sudo systemctl restart tftpd-hpa
```

- **Step 10.** Type the following inside the uboot mode of BeagleV™ - Starlight to download the files from the tftp server of the host PC and start the kernel 

```sh
tftpboot ${fdt_addr_r}  u-boot.dtb;tftpboot ${kernel_addr_r} Image.gz;tftpboot ${ramdisk_addr_r} rootfs.cpio.gz;booti ${kernel_addr_r} ${ramdisk_addr_r}:${filesize} ${fdt_addr_r}
```

- **Step 11.** Log in with the following credentials

```sh
Username：root
Password：starfive
```