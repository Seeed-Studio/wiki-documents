---
name: Seeed BLE Shield v1
category: Shield
bzurl: https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html
oldwikiname:   Seeed BLE Shield v1
prodimagename:  Seeed_BLE-4.png
surveyurl: https://www.research.net/r/Seeed_BLE_Shield_v1
sku:  113030013
---
![](https://github.com/SeeedDocument/Seeed_BLE_Shield/raw/master/img/Seeed_BLE-4.png)

This Seeed BLE Shield utilizes an [HM-11](/Bluetooth_V4.0_HM_11_BLE_Module) module to provide your Arduino/Seeeduino with serial BLE function. It only takes two pins of the micro controller to communicate your device with this shield. With support for a BLE ComAssistant APK, this BLE Shield can talk to your mobile phone more easily without pairing. You can use it in many conditions, like robot controls or remote control equipment ,etc. We prepared an easy and convenient command set for this shield so that you can use neat and concise code to run the function.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-BLE-Shield-p-1859.html)

##   Specifications
---
<table >
<tr>
<th> Specifications
</th>
<th> Value
</th></tr>
<tr>
<td width="300px"> BT Version
</td>
<td width="500px"> Bluetooth Specification V4.0 BLE
</td></tr>
<tr>
<td> Working Frequency
</td>
<td> 2.4GHz ISM band
</td></tr>
<tr>
<td> Working Current
</td>
<td> &lt; 15 mA
</td></tr>
<tr>
<td> Sourcing Current
</td>
<td> &lt; 30 mA
</td></tr>
<tr>
<td> Sleeping Current
</td>
<td> &lt; 3 mA
</td></tr>
<tr>
<td> Modulation Method
</td>
<td> GFSK(Gaussian Frequency Shift Keying)
</td></tr>
<tr>
<td> RF Power
</td>
<td> -23dbm, -6dbm, 0dbm, 6dbm, can modify through AT Command AT+POWE
</td></tr>
<tr>
<td> Speed
</td>
<td> Asynchronous: 6K Bytes, Synchronous: 6K Bytes
</td></tr>
<tr>
<td> Sensibility
</td>
<td> ≤-84dBm at 0.1% BER
</td></tr>
<tr>
<td> Security
</td>
<td> Authentication and encryption
</td></tr>
<tr>
<td> Service
</td>
<td> Central &amp; Peripheral UUID FFE0,FFE1
</td></tr>
<tr>
<td> Supply Power
</td>
<td> 5v
</td></tr>
<tr>
<td> Working Temperature
</td>
<td> –5 ~ +65 Centigrade
</td></tr>
<tr>
<td> Size
</td>
<td> 68mm x 43mm
</td></tr>
<tr>
<td> PIN Code
</td>
<td> 000000(by default)
</td></tr></table>

## Compatibility

We have produced a lot of extension board that can make your platform board more powerful, however not every extension board is compatible with all the platform board, here we use a table to illustrate how are those boards compatible with platform board.

!!!note
    Please note that "Not recommended" means that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact with techsupport@seeed.cc.

**Click to see full picture**
[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/Shield%20Compatibility.png)](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/Shield%20Compatibility.png)


## Hardwarw Overview

![](https://github.com/SeeedDocument/Seeed_BLE_Shield/raw/master/img/BLE_Shield.png)

*   HM-11: The basic module is HM-11, more information you can refer to this wiki of [HM-11](/Bluetooth_V4.0_HM_11_BLE_Module).

*   Signal lamp: Lamp will blink if no one connect BLE, but the lamp would keep lighting after BLE has been connected.

*   Grove connectors: There are two Grove connectors onto the BLE shield, you can plug Grove products onto the board conveniently.

*   Hard or Softserial port: You can choose two of seven digital pins as the communication channel. Just plug the jumpers into the headers. **There are two mistakes on the silkscreen, please kindly regard "WIFI_TX" and "WIFI_RX" as "BLE_TX" and "BLE_RX". **

*   Reserved pinouts from HM-11: There are some reserved pinouts from HM-11 module, such as CTS1, RTS1 and PIO2, etc.

*   Reset button: Press the reset button if you need to reset the BLE Shield. However, this reset button does not affect the state of the main board(such as Arduino Uno) if BLE Shield is plugged onto the main board.

##   Applications
---
###   Hardware Connection

![](https://github.com/SeeedDocument/Seeed_BLE_Shield/raw/master/img/Seeed_BLE-2.png)

Plug Seeed BLE Shield onto the Arduino/Seeeduino directly. **Please pay attention to the position of jumpers on the BLE Shield.**

###   SoftwareSerial Communication

Seeed BLE Shield can be acted as a master or slave, you can use the one via different demos.**If you are going to use the following SoftwareSerial program, please refer to the way of connection in the previous pic. BLE_TX--&gt;D2, BLE_RX--&gt;D3.**

Open Arduino IDE, copy the following program and upload it onto the Arduino/Seeeduino board. And then two BLE Shields can communicate with each other.

**Demo : BLE Slave**

```
#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

SoftwareSerial BLE(RxD,TxD);

void setup()
{
    Serial.begin(9600);
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBleConnection();

}

void loop()
{
    char recvChar;
    while(1){
        if(BLE.available()){//check if there's any data sent from the remote BLE shield
            recvChar = BLE.read();
            Serial.print(recvChar);
        }
        if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
            recvChar  = Serial.read();
            BLE.print(recvChar);
        }
    }
}

void setupBleConnection()
{
    BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
    BLE.print("AT+CLEAR"); //clear all previous setting
    BLE.print("AT+ROLE0"); //set the bluetooth name as a slaver
    BLE.print("AT+SAVE1");  //don't save the connect information
}
```

**Demo : BLE Master**

```
#include <SoftwareSerial.h>   //Software Serial Port
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

SoftwareSerial BLE(RxD,TxD);

void setup()
{
    Serial.begin(9600);
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBleConnection();

}

void loop()
{
    char recvChar;
    while(1){
        if(BLE.available()){//check if there's any data sent from the remote BLE shield
            recvChar = BLE.read();
            Serial.print(recvChar);
        }
        if(Serial.available()){//check if there's any data sent from the local serial terminal, you can add the other applications here
            recvChar  = Serial.read();
            BLE.print(recvChar);
        }
    }
}

void setupBleConnection()
{
    BLE.begin(9600); //Set BLE BaudRate to default baud rate 9600
    BLE.print("AT+CLEAR"); //clear all previous setting
    BLE.print("AT+ROLE1"); //set the bluetooth name as a master
    BLE.print("AT+SAVE1");  //don't save the connect information
}
```

###   HardwareSerial Communication

Besides, you can use BLE Shield via AT commands without any program, **but you need to change the positions of two jumpers. BLE_TX--&gt;D1, BLE_RX--&gt;D0.**

Then open a Serial Port Tool, like CoolTerm or others.The following are some settings : **Baudrate: 9600(default) , Data Bits: 8, Parity: none, Stop Bits: 1.**

First, you can send a(some) "AT" command(s) to BLE Shield to have a test. If it returns an "OK", then you can do the following steps. **If not, you can upload a blank program to Arduino/Seeeduino**, and see whether you can get response from Serial Port Tool via the previous operation.

```
void setup()
{
}

void loop()
{
}
```

Then, send an "AT+ROLE0" command to BLE Shield; it will return an "OK+Set:0", which means now the BLE Shield is ready to act as a slave.

![](https://github.com/SeeedDocument/Seeed_BLE_Shield/raw/master/img/Seeed_BLE-3.png)

###   AT Commands

More information about the AT Commands please refer to the data sheet of BLE module. You can download it from the Resource space.

##   Related Reading
---
*   [FAQ about Seeed BLE Shield](/Seeed_BLE_Shield). _Also, you can enter the FAQ page by clicking the "FAQ" button which in the right side of product's wiki page. _

##   Resource

[Schematic of Seeed BLE Shield](https://github.com/SeeedDocument/Seeed_BLE_Shield/raw/master/res/BLE_Shield_v1.0.zip)

[BLE_apk_for_Android](https://github.com/SeeedDocument/Seeed_BLE_Shield/raw/master/res/HMBLEComAssistant.rar)

[DataSheet of BLE module](https://github.com/SeeedDocument/Seeed_BLE_Shield/raw/master/res/Bluetooth4_en.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>