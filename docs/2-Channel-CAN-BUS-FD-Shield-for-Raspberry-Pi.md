---
name: 2-Channel CAN-BUS(FD) Shield for Raspberry Pi
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103030296

---

![enter image description here](https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/img/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-wiki.jpg)


This is a CAN BUS shield for Raspberry Pi(hereinafter referred to as 2 channel pi hat), 2 channel CAN BUS I/O, support [CAN FD](https://en.wikipedia.org/wiki/CAN_FD). CAN FD support much faster transmission speed(up to 8Mbps)
 
Also it have two On-board 120Ω terminating resistors which are controlled by the switches.

 
<p style="text-align:center"><a href="https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- High-speed transfer rate: 8Mbps@10m 20AWG shielded cable / 1Mbps@40m 20AWG shielded cable
- Stable power supply, selectable Raspberry Pi power supply or DC power supply
- Compatible with Raspberry Pi 2, Raspberry Pi 3, Raspberry Pi 3, Raspberry Pi 4 and Raspberry Pi Zero
- One-button configuration of 120Ω terminating resistor
- Support CAN FD



## Hardware Overview


<div align="center">
<figure>
  <a href="https://raw.githubusercontent.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/master/img/block.jpg" target="_blank"><img src="https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/img/block.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" />
  <figcaption><b>Figure 1</b>. <i>Hardware overview A</i></figcaption></a>
</figure>
</div>


<div align="center">
<figure>
  <a href="https://raw.githubusercontent.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/master/img/block2.jpg" target="_blank"><img src="https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/img/block2.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" />
  <figcaption><b>Figure 2</b>. <i>Hardware overview B</i></figcaption></a>
</figure>
</div>


<div align="center">
<figure>
  <a href="https://raw.githubusercontent.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/master/img/block-diagram.jpg" target="_blank"><img src="https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/img/block-diagram.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" />
  <figcaption><b>Figure 3</b>. <i>Block Diagram</i></figcaption></a>
</figure>
</div>


  



## Mounting Guide

<div align="center">
<figure>
  <a href="https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/img/setup.jpg" target="_blank"><img src="https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/img/setup.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" />
  <figcaption><b>Figure 4</b>. <i>Mounting Guide</i></figcaption></a>
</figure>
</div>


!!!Attention
       You can see that we used nylon columns during assembly to avoid short-circuiting between the metal terminals under the CAN BUS port and the HDMI interface on the Raspberry Pi. So please be sure to assemble the nylon column as shown.




## Specification

|Parameter|Value|
|---|---|
|Power Input|12V~24V DC<br>Raspberry Pi GPIO 5V|
|CAN FD Controller| [MCP2517FD](https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/res/MCP2517-datasheet.pdf) |
|CAN FD Transceiver|[MCP2557FD](https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/res/MCP2557-datasheet.pdf)|
|CAN FD Channel|2|
|Transfer Rate|8Mbps@10m 20AWG shielded cable <br> 1Mbps@40m 20AWG shielded cable|
|Communication Interface with Pi|SPI|
|Grove Interface|Grove I2C x2|







## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |






## Getting Started



### Materials required

| Raspberry pi | 2-Channel CAN-BUS(FD) Shield| Arduino Board |CAN-BUS Shield V2 |
|--------------|-------------|-----------------|-----|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/img/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-thumbnail.png)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![](https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/img/CAN_BUS_Shield_V2.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html)|




Also we need to two [male to male jumper](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-241mm-200mm-160mm-117m-p-234.html) and power cables to power those boards.



### Hardware Connection


- **Step 1**. Follow the [Mounting Guide](#mounting-guide) to Plug the 2-Channel CAN-BUS(FD) Shield into Raspberry.
 
- **Step 2**. Plug the CAN BUS Shield V2 into the Seeeduino(or Arduino) Board

- **Step 3**. Use the jumpers to connect the CAN terminal of both shield.



|2-Channel CAN-BUS(FD) Shield|CAN-BUS Shield V2|
|---|---|
|CAN_0_L|CANL|
|CAN_0_H|CANH|

!!!Tip
    You can find the silkscreen at the back of the shield.

- **Step 4**. Power the Raspberry Pi and Seeeduino.


![](https://github.com/Seeed-Studio/pi-hats/raw/master/images/can_hat_and_arduinno_hardware.jpg)






### Software


#### Install CAN-HAT



- **Step 1**. Get the CAN-HAT source code. and install all linux kernel drivers

```C
git clone https://github.com/seeed-Studio/pi-hats
cd pi-hats/CAN-HAT
sudo ./install.sh 
sudo reboot
```

- **Step 2**. Check the kernel log to see if MCP2517 was initialized successfully.You will also see can0 and can1 appear in the list of ifconfig results

```C
pi@raspberrypi:~ $ dmesg | grep spi
[    3.725586] mcp25xxfd spi0.0 can0: MCP2517 successfully initialized.
[    3.757376] mcp25xxfd spi1.0 can1: MCP2517 successfully initialized.

pi@raspberrypi:~/pi-hats/CAN-HAT $ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

can1: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

eth0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether b8:27:eb:c7:ed:4f  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.250.42  netmask 255.255.255.0  broadcast 192.168.250.255
        inet6 fe80::3842:7323:7c0d:f6d2  prefixlen 64  scopeid 0x20<link>
        ether b8:27:eb:92:b8:1a  txqueuelen 1000  (Ethernet)
        RX packets 2654  bytes 249303 (243.4 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 4433  bytes 4765896 (4.5 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

- **Step 3**. Set the can fd protocol, and the dbitrate can be set to 8M speed. [Refer to the kernel documentation for more usage](https://www.kernel.org/doc/Documentation/networking/can.txt)

```C
sudo ip link set can0 up type can bitrate 1000000   dbitrate 8000000 restart-ms 1000 berr-reporting on fd on
sudo ip link set can1 up type can bitrate 1000000   dbitrate 8000000 restart-ms 1000 berr-reporting on fd on

sudo ifconfig can0 txqueuelen 65536
sudo ifconfig can1 txqueuelen 65536

```

- **Step 4**. Open two terminal windows and enter the following commands in the Windows to test can fd protocol.

```C
#send data
cangen can0 -mv 

```

```C
#dump data
candump can0

```

#### Communicate with Arduino CAN BUS Shield

In this demo, we only use one of the two channels.

For Arduino CAN BUS Shield, we provide the Arduino Code, if you don't know how to use Arduino, please check [here](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/).

For 2 channel pi hat, there are two ways to send & receive, you can use both **can-util**/**cangen** and **python code**. 


##### CAN BUS Shield send and CAN HAT receive

Arduino Code for CAN BUS Shield:

```C
// demo: CAN-BUS Shield, send data
// loovee@seeed.cc

#include <mcp_can.h>
#include <SPI.h>

// the cs pin of the version after v1.1 is default to D9
// v0.9b and v1.0 is default D10
const int SPI_CS_PIN = 9;

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);

    while (CAN_OK != CAN.begin(CAN_500KBPS))              // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS Shield init fail");
        Serial.println(" Init CAN BUS Shield again");
        delay(100);
    }
    Serial.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop()
{
    //send data:  id = 0x00, standrad frame, data len = 8, stmp: data buf
    stmp[7] = stmp[7]+1;
    if(stmp[7] == 100)
    {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;
        
        if(stmp[6] == 100)
        {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }
    
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}
// END FILE

```

Respberry pi setting and and you can use **can-util** to receive

```C
#set 500k baudrate
pi@raspberrypi:~ $ sudo ip link set can0 up type can bitrate 500000
pi@raspberrypi:~ $ ip -details link show can0
3: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0 
	  bitrate 500000 sample-point 0.875 
	  tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
	  mcp25xxfd: tseg1 2..256 tseg2 1..128 sjw 1..128 brp 1..256 brp-inc 1
	  mcp25xxfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp-inc 1
	  clock 40000000numtxqueues 1 numrxqueues 1 gso_max_size 65536 gso_max_segs 65535 
#receive
pi@raspberrypi:~ $ candump can0
  can0  000   [8]  00 00 00 00 00 00 00 05
  can0  000   [8]  00 00 00 00 00 00 00 06
  can0  000   [8]  00 00 00 00 00 00 00 07
  can0  000   [8]  00 00 00 00 00 00 00 08
  can0  000   [8]  00 00 00 00 00 00 00 09
  can0  000   [8]  00 00 00 00 00 00 00 0A
  can0  000   [8]  00 00 00 00 00 00 00 0B
  can0  000   [8]  00 00 00 00 00 00 00 0C
  can0  000   [8]  00 00 00 00 00 00 00 0D
  can0  000   [8]  00 00 00 00 00 00 00 0E
  can0  000   [8]  00 00 00 00 00 00 00 0F
  can0  000   [8]  00 00 00 00 00 00 00 10
  can0  000   [8]  00 00 00 00 00 00 00 11
  can0  000   [8]  00 00 00 00 00 00 00 12
  can0  000   [8]  00 00 00 00 00 00 00 13
  can0  000   [8]  00 00 00 00 00 00 00 14
  can0  000   [8]  00 00 00 00 00 00 00 15
  can0  000   [8]  00 00 00 00 00 00 00 16
  can0  000   [8]  00 00 00 00 00 00 00 17
  can0  000   [8]  00 00 00 00 00 00 00 18
  can0  000   [8]  00 00 00 00 00 00 00 19
  can0  000   [8]  00 00 00 00 00 00 00 1A
  can0  000   [8]  00 00 00 00 00 00 00 1B
  can0  000   [8]  00 00 00 00 00 00 00 1C
  can0  000   [8]  00 00 00 00 00 00 00 1D
```


Or you can use **python code** to get the CAN data. To use python to receive CAN data, you should install python-can at first.

```PYTHON

# install python-can
sudo pip3 install python-can

```

Open a new python file and copy the following code, save as **can_test.py**:

```python

import can

can_interface = 'can0'
bus = can.interface.Bus(can_interface, bustype='socketcan_native')
while True:
    message = bus.recv(1.0) # Timeout in seconds.
    if message is None:
            print('Timeout occurred, no message.')
    print(message)

```

Run the Python code and the results are as follows :

```python

pi@raspberrypi:~ $ python3 can_test.py   
Timestamp: 1550471771.628215        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0e 63     Channel: can0
Timestamp: 1550471772.629302        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 00     Channel: can0
Timestamp: 1550471773.630658        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 01     Channel: can0
Timestamp: 1550471774.632018        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 02     Channel: can0
Timestamp: 1550471775.633395        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 03     Channel: can0
Timestamp: 1550471776.634774        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 04     Channel: can0
Timestamp: 1550471777.636135        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 05     Channel: can0
Timestamp: 1550471778.637481        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 06     Channel: can0
Timestamp: 1550471779.638859        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 07     Channel: can0
Timestamp: 1550471780.640222        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 08     Channel: can0
Timestamp: 1550471781.641602        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 09     Channel: can0
Timestamp: 1550471782.642970        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 0a     Channel: can0

```



#####  CAN BUS Shield receive and CAN HAT send

For Raspberry Pi, you can use **cangen** to send random package:

```C
pi@raspberrypi:~ $ cangen can0 -v 
  can0  442#14.C4.1A.1A.C2.25.79.25
  can0  748#4E.C7.8B.0B.6E.B9.15.77
  can0  1E4#64.D4.62.22.2F.A6.BF
  can0  1DD#69.6F.61.33.1F.59.E4.7C
  can0  63D#
  can0  764#2C.C1.E3
  can0  68B#11.9C.63.6D.EA.E9.4B
  can0  329#DA.06.2C.34.6C
  can0  7DD#2E.F5.E0.2A.26.77.58.38
  can0  1BE#94.30.6E.2F.A2.7B.E3.1D
  can0  654#D1.21.A3.58.31.E8.51.5F
  can0  706#51.41.36.5C.43.8D.AE.5D
  can0  34A#89.F2.DE.33.AE.52.38.6C
  can0  6AC#C1.35.83.41.37
  can0  38C#22.AF
  can0  208#22.8E.97.58.E5.69.F7.2C

```

For Arduino, you can use the following code to recieve CAN data.

```C
// demo: CAN-BUS Shield, receive data with interrupt mode
// when in interrupt mode, the data coming can't be too fast, must >20ms, or else you can use check mode
// loovee, 2014-6-13

#include <SPI.h>
#include "mcp_can.h"

// the cs pin of the version after v1.1 is default to D9
// v0.9b and v1.0 is default D10
const int SPI_CS_PIN = 9;

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin


unsigned char flagRecv = 0;
unsigned char len = 0;
unsigned char buf[8];
char str[20];

void setup()
{
    Serial.begin(115200);

    while (CAN_OK != CAN.begin(CAN_500KBPS))              // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS Shield init fail");
        Serial.println(" Init CAN BUS Shield again");
        delay(100);
    }
    Serial.println("CAN BUS Shield init ok!");

    attachInterrupt(0, MCP2515_ISR, FALLING); // start interrupt
}

void MCP2515_ISR()
{
    flagRecv = 1;
}

void loop()
{
    if(flagRecv) 
    {                                   // check if get data

        flagRecv = 0;                   // clear flag

        // iterate over all pending messages
        // If either the bus is saturated or the MCU is busy,
        // both RX buffers may be in use and reading a single
        // message does not clear the IRQ conditon.
        while (CAN_MSGAVAIL == CAN.checkReceive()) 
        {
            // read data,  len: data length, buf: data buf
            CAN.readMsgBuf(&len, buf);

            // print the data
            for(int i = 0; i<len; i++)
            {
                Serial.print(buf[i]);Serial.print("\t");
            }
            Serial.println();
        }
    }
}

```


Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**. The result should be like:

![](https://github.com/Seeed-Studio/pi-hats/raw/master/images/arduino_receive.png)


Or you can use **python-can** to send data:

Python code is as follows:

```python
import time
import can

bustype = 'socketcan_native'
channel = 'can0'

def producer(id):
    """:param id: Spam the bus with messages including the data id."""
    bus = can.interface.Bus(channel=channel, bustype=bustype)
    for i in range(10):
        msg = can.Message(arbitration_id=0xc0ffee, data=[id, i, 0, 1, 3, 1, 4, 1], extended_id=False)
        bus.send(msg)
    # Issue #3: Need to keep running to ensure the writing threads stay alive. ?
    time.sleep(1)

producer(10)

```



#### uninstall CAN-HAT

If you want to uninstall this CAN-HAT, just run the following code:

```
pi@raspberrypi:~/pi-hats/CAN-HAT $ sudo ./uninstall.sh 
...
------------------------------------------------------
Please reboot your raspberry pi to apply all settings
Thank you!
------------------------------------------------------
```





## Resources

- **[ZIP]** [2-Channel CAN-BUS(FD) Shield for Raspberry Pi Schematic file](https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/res/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi.zip)
- **[PDF]** [MCP2517 Datasheet](https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/res/MCP2517-datasheet.pdf)
- **[PDF]** [MCP2557 Datasheet](https://github.com/SeeedDocument/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/raw/master/res/MCP2557-datasheet.pdf)



## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/) or drop mail to techsupport@seeed.cc

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
