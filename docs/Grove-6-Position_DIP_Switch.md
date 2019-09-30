---
name: Grove - 6-Position DIP Switch
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020043
tags:
---


![](https://github.com/SeeedDocument/Grove-6-Position_DIP_Switch/raw/master/img/main.jpg)


The Grove - 6-Position DIP Switch has 6 individual switch positions, which use I^2^C to transmit date. It works great as a multi-channel control switches.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 6-Position DIP Switch | Initial                                                                                               | Jun 2018      |

## Features

- 6 individual switch
- Good heat resistance
- Long operating Life
- Grove compatible



## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Interface|I^2^C|
|Default I^2^C Address|0x03|
|Size|L: 40mm W: 20mm H: 13mm| 
|Weight|5g|
|Package size|L: 140mm W: 90mm H: 10mm|
|Gross Weight|11g|

## Applications

- Multifunction control


## Hardware Overview

### Pin Map

![](https://github.com/SeeedDocument/Grove-6-Position_DIP_Switch/raw/master/img/pin_map.jpg)
![](https://github.com/SeeedDocument/Grove-6-Position_DIP_Switch/raw/master/img/pin_map_back.jpg)




## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg)  |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - 6-Position DIP Switch |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-6-Position_DIP_Switch/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.




- **Step 1.** Connect the Grove - 6-Position DIP Switch to the **I^2^C** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-6-Position_DIP_Switch/raw/master/img/connect.jpg)


!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino     |  Grove - 6-Position DIP Switch           |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open example via the path: **File --> Examples --> Grove Multi Switch Library --> Grove_Switch_Events**. 


![](https://github.com/SeeedDocument/Grove-5-Way_Switch/raw/master/img/path.jpg)


Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.


```C++
#include "Grove_Multi_Switch.h"

GroveMultiSwitch mswitch[1];
const char* grove_5way_tactile_keys[] = {
	"KEY A",
	"KEY B",
	"KEY C",
	"KEY D",
	"KEY E",
};
const char* grove_6pos_dip_switch_keys[] = {
	"POS 1",
	"POS 2",
	"POS 3",
	"POS 4",
	"POS 5",
	"POS 6",
};

const char** key_names;

int deviceDetect(void) {
	if (!mswitch->begin()) {
		Serial.println("***** Device probe failed *****");
		return -1;
	}

	Serial.println("***** Device probe OK *****");
	if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
		Serial.println("Grove 5-Way Tactile Switch Inserted!");
		key_names = grove_5way_tactile_keys;
	} else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
		Serial.println("Grove 6-Position DIP Switch Inserted!");
		key_names = grove_6pos_dip_switch_keys;
	}

	// enable event detection
	mswitch->setEventMode(true);

	// report device model
	Serial.print("A ");
	Serial.print(mswitch->getSwitchCount());
	Serial.print(" Button/Switch Device ");
	Serial.println(mswitch->getDevVer());
	return 0;
}

void setup()
{
	Serial.begin(115200);
	Serial.println("Grove Multi Switch");

	// Initial device probe
	if (deviceDetect() < 0) {
		Serial.println("Insert Grove 5-Way Tactile");
		Serial.println("or Grove 6-Position DIP Switch");
		for (;;);
	}

	return;
}

void loop()
{
	GroveMultiSwitch::ButtonEvent_t* evt;

	delay(1);

	evt = mswitch->getEvent();
	if (!evt) {
		// dynamic device probe
		deviceDetect();
		delay(1000);
		return;
	}

	if (!(evt->event & GroveMultiSwitch::BTN_EV_HAS_EVENT)) {
		#if 0
		Serial.print("No event, errno = ");
		Serial.println(mswitch->errno);
		#endif
		return;
	}

	for (int i = 0; i < mswitch->getSwitchCount(); i++) {
		Serial.print(key_names[i]);
		Serial.print(": RAW - ");
		Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
		             "HIGH ": "LOW ");
		if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
			Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
			             "RELEASED ": "PRESSED ");
		} else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
			Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
			             "OFF ": "ON ");
		}
		Serial.println("");
	}

	for (int i = 0; i < mswitch->getSwitchCount(); i++) {
		if (evt->button[i] & ~GroveMultiSwitch::BTN_EV_RAW_STATUS) {
			Serial.println("");
			Serial.print(key_names[i]);
			Serial.print(": EVENT - ");
		}
		if (evt->button[i] & GroveMultiSwitch::BTN_EV_SINGLE_CLICK) {
			Serial.print("SINGLE-CLICK ");
		}
		if (evt->button[i] & GroveMultiSwitch::BTN_EV_DOUBLE_CLICK) {
			Serial.print("DOUBLE-CLICK ");
		}
		if (evt->button[i] & GroveMultiSwitch::BTN_EV_LONG_PRESS) {
			Serial.print("LONG-PRESS ");
		}
		if (evt->button[i] & GroveMultiSwitch::BTN_EV_LEVEL_CHANGED) {
			Serial.print("LEVEL-CHANGED ");
		}
	}
	Serial.println("");
}

```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.



!!!success
     If every thing goes well, you will get the result. For instance, the default switch is off-High, when you turn the **Switch6** to **ON**, the output will be **POS 6: RAW - LOW ON**.



```C++
Grove Multi Switch
***** Device probe OK *****
Grove 6-Position DIP Switch Inserted!
A 6 Button/Switch Device BN-6--0.1
POS 1: RAW - HIGH OFF 
POS 2: RAW - HIGH OFF 
POS 3: RAW - HIGH OFF 
POS 4: RAW - HIGH OFF 
POS 5: RAW - HIGH OFF 
POS 6: RAW - LOW ON 

POS 6: EVENT - LEVEL-CHANGED 
POS 1: RAW - LOW ON 
POS 2: RAW - HIGH OFF 
POS 3: RAW - HIGH OFF 
POS 4: RAW - HIGH OFF 
POS 5: RAW - HIGH OFF 
POS 6: RAW - LOW ON 
```

## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-5-Way_Switch/raw/master/res/Grove-5-Way_Switch.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - 6-Position DIP Switch eagle files](https://github.com/SeeedDocument/Grove-5-Way_Switch/raw/master/res/Grove-5-Way_Switch.zip)
- **[Zip]** [Grove Multi Switch Library](https://github.com/SeeedDocument/Grove-6-Position_DIP_Switch/raw/master/res/Grove-6-Position_DIP_Switch.zip)


## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>