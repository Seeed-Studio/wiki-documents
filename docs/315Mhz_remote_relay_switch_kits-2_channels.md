---
name: 315Mhz remote relay switch kits - 2 channels
category: MakerPro
bzurl: https://www.seeedstudio.com/315mhz-remote-relay-switch-kits-2-channels-p-150.html?cPath=139_140
oldwikiname:  315Mhz remote relay switch kits - 2 channels
prodimagename:  P2130781.jpg
surveyurl: https://www.research.net/r/315Mhz_remote_relay_switch_kits-2_channels
sku:     103990004
---

![](http://bz.seeedstudio.com/depot/images/P2130781.jpg)

This remote switch allows you to remotely control any 12 Volt DC device. Perfect for controlling any 12V devices such as Lights , Fans,Landscaping Lighting and more. This easy-to-wire kit is perfect for anybody with a basic knowledge of electrical wiring, and can easily be wired to many 12V applications. For PC Modders, the end of result of the Remote Control 12VDC kit are truly impressive and are sure to ooh and ah the crowds. For DIYers, the kit will give some magical effect to your projects.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Skeleton-Box-p-1407.html)

##   Specification
---
*   Frequency: 315Mhz.

*   Modulation: ASK

*   Working Voltage: 12VDC

*   Receiver Sensibility: -105dbm

*   Emission Distance: 100m in open ground

*   Size: 68mm*47mm*12mm

*   *Defaultly 315Mhz receiver, exchangable with 433Mhz receiver.

##   Pin definition and Rating
---
Each Relay owns one group of 3 pins:

*   **A** - Normally Closed, Open When Relay activate

*   **B** -  Common Node

*   **C** - Normally Open, Close When Relay activate

##   Usage
---

###   Encoding and Decoding

The popular link is like this: MCU -&gt; Encoder -&gt; Transmitter ------ Receiver -&gt; Decoder -&gt; MCU,

PT2262(Encoder) and PT2272(Decoder) are optional, their existence is to

1)avoid confusing when multiple RF links in range

2) isolate disturbance. You can integrate the encoding and decoding work to the MCUs on both side. Whenever there is no 315Mhz devices around, you may use it as direct cable connection.

To setup a PT2272 and PT2262 link, you would need to set PT2262 by a little soldering:

![](http://bz.seeedstudio.com/depot/images/product/RFReceiverDec.jpg)

And setup the corresponding pins on PT2272:

![](http://bz.seeedstudio.com/depot/images/product/RFTransmitEnc.jpg)

###  Relay Operation Modes

The receiver has three modes that control how the relay outputs function. These modes are user selectable using
the 3 pin jumper on the receiver.

**Momentary:**
Move the switch position to “M???to set the selected relay(s) in momentary mode. In momentary mode, the
selected relay(s) will change it’s state and maintain it for the duration of the transmission received. Once the
transmission is terminated, the relay will change back to its original state.

**Flip-Flop:**
Remove the shunt to set the selected relay(s) in Flip-Flop mode. In Flip-Flop mode, the selected
relay(s) will change its state and maintain it until a matching transmission is received. Every time a transmission is
received the relay will change its state and maintain it until another transmission is received.

**Latching:**
Move the switch position to “L???to set the selected relay(s) in Latching mode. In latching mode, when the selected relay is activated by the transmitter, that relay will change it’s state and maintain it until power to the receiver is removed or interrupted.

Please refer to the simple drawing for the 315Mhz RF link. On the transimitter side, You would need to supply 3-5VDC to the "+12V" pin,(**Caution**: the 12v is an error silk screen on PCB, never give it more than 5V）, and set "TE" high(5V) to enable transmission. On the receiver side, you may use +5VDC(aka VCC) for power and read the output from D0~D3. "TV" will indicate thenever there is changed data incoming.

![](http://bz.seeedstudio.com/depot/images/product/315MhzTransmitter.gif)


##   Resources
---
*   [Manual for How to use](http://www.seeedstudio.com/depot/datasheet/How%20to%20Use%20315MHz%20Remote%20Relay%20Kits.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>