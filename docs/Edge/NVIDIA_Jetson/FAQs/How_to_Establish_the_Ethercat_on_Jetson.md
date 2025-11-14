---
description: How to establish communication between Jetson and EtherCAT devices
title: How to establish communication between Jetson and EtherCAT devices
keywords:
- jetson
- jetpack
- L4T
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension.jpg
slug: /how_to_establish_the_ethercat_on_jetson
last_update:
  date: 11/14/2025
  author: Dayu
---

**EtherCAT (Ethernet for Control Automation Technology)** is an open-source, high-performance real-time Industrial Ethernet fieldbus protocol based on **IEEE 802.3 Ethernet standards**. It operates on a **master-slave architecture** and is renowned for its exceptional speed, precision, and flexibility in industrial automation environments

This document uses the [**recomputer robotics J401**](https://www.seeedstudio.com/reComputer-Robotics-Carrier-board-p-6442.html) as the **EtherCAT master** and the [**MyActuator X4**](https://www.seeedstudio.com/Myactuator-X4-P12-5-10-Planetarty-Actuator-p-6470.html) as the **slave** to demonstrate how to establish communication between a Jetson and EtherCAT devices.

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
    <img height ="300" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-114110327-recomputer-robotics-carrier-board.jpg"/>
    <img height ="300" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-114090069--myactuator-x4-p12.5-10-planetarty-actuator.jpg"/>
</div>


## 1. Hardware connection

As the EtherCAT master, the Jetson typically uses its **Ethernet interface** to connect to EtherCAT slave devices.

<div align="center"><img width ="700" 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>


Since many slave devices do not provide a standard Ethernet port, an adapter is often required to convert the Ethernet connection into a **4-pin interface (Tx+, Tx–, Rx+, Rx–)**.
<div align="center"><img width ="600" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/EtherCAT-tran.png"/>
</div>

:::note
After establishing the physical EtherCAT connection, most slave devices still require additional external power.
:::

## 2. Install driver of EtherCAT

This section uses **L4T 36.4.3**, which corresponds to **JetPack 6.2** BSP, as an example to show how to install the driver of EtherCAT in Jetson.


Install the required dependencies for building the EtherCAT driver:

```bash
sudo apt update
sudo apt install build-essential cmake libtool autoconf automake
```

Pull the EtherCAT driver source code, then compile and install it:

```python
git clone https://gitlab.com/etherlab.org/ethercat.git
cd ethercat

./bootstrap # to create the configure script, if downloaded from the repo

./configure --sysconfdir=/etc
make all modules
sudo make modules_install install
sudo depmod -a
```

To verify that the driver has been installed successfully, run the following command.
You should see the two kernel modules `ec_master` and `ec_generic`:

```bash
sudo lsmod | grep "ec_"
```

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-ko.png"/>
</div>



## 3. Configuration of EtherCAT

After installing the EtherCAT driver, several configurations are required to activate communication between the master and the slave devices.

First, edit the configuration file at `/etc/ethercat.conf`:

```python
sudo vim /etc/ethercat.conf
```
Modify the two parameters at `/etc/ethercat.conf` according to the name of the Ethernet interface connected to the Jetson:

```python
MASTER0_DEVICE="eno1"  # Replace eno1 with the Ethernet interface used for EtherCAT
DEVICE_MODULES="generic"
```
Replace `eno1` with the Ethernet interface used for EtherCAT. You can use the `ifconfig` command to check the name of your interface.  

After restarting the EtherCAT service, you should see the EtherCAT master device appear in the `/dev` directory:

```python
sudo systemctl restart ethercat
ls /de/EtherCAT*
```

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat0.png"/>
</div>

(**optional**) If `/dev/EtherCAT` is not found, try loading the kernel modules manually:

```python
sudo modprobe ec_master devices="eno1"  # Replace eno1 with the Ethernet interface used for EtherCAT
sudo modprobe ec_generic
sudo systemctl restart ethercat
```
Replace `eno1` with the Ethernet interface used for EtherCAT.

(**optional**) Sometimes the Ethernet interface used for EtherCAT may be occupied by **NetworkManager**. You can release it using the following commands:

```python
sudo nmcli dev set eno1 managed no  # Replace eno1 with the Ethernet interface used for EtherCAT
sudo nmcli dev set eno1 managed on  # Replace eno1 with the Ethernet interface used for EtherCAT
```
Replace `eno1` with the Ethernet interface used for EtherCAT.


## 4. Test communication between Jetson and EtherCAT slave

After confirming that the EtherCAT master node is correctly initialized on the Jetson and the hardware connections are properly established, you can test the communication between the Jetson and the EtherCAT devices in the terminal.

Scan for EtherCAT devices and test data transmission to check whether the packet loss rate is within a normal range:

```python
sudo ethercat rescan
sudo ethercat master
```
<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-frame.png"/>
</div>


List all EtherCAT devices on the bus:

```python
sudo ethercat rescan
sudo ethercat slaves -v
```


<div align="center"><img width ="700" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-slave.png"/>
</div>

View the issue of EtherCAT device with index `0`:

```python
sudo ethercat rescan
sudo ethercat pdos -p 0 #0 to n
```
The parameter after `-p` can be any value from `0` to `n`.

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/slave0.png"/>
</div>

## Resources

- [Source code of EtherCAT Master](https://gitlab.com/etherlab.org/ethercat.git)

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
