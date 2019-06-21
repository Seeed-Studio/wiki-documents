---
name: Grove - Finger-clip Heart Rate Sensor with shell
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html
oldwikiname:  Grove - Finger-clip Heart Rate Sensor with shell
prodimagename: Grove-Finger-clip_Heart_Rate_Sensor.jpg
surveyurl: https://www.research.net/r/Grove-Finger-clip_Heart_Rate_Sensor_with_Shell
sku: 101020082
---

![](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell.JPG)

Grove - Finger-clip Heart Rate Sensor with shell is based on PAH8001EI-2G, a high performance and low power CMOS-process optical sensor with Green LED and DSP integrated serving as a Heart Rate Detection (HRD) sensor.This module is based on optical technology which measures the variation human blood movement in the vessel. Low power consumption and flexible power saving mode make it suitable for wearable device. Cause the heart rate sensor chip need high processing speed for the algorithm of heart rate data, this module integrate a STM32, reserved SWD interface allow users to reprogram the STM32. This module equips a shell and two bands that allow users to fix the module on finger, wrist or arm easily.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)


##  Specification
---
*   Ultra-low power consumption, power saving mode during time of no touch movement

*   Flexible sleep rate control

*   Integrated the STM32F103

*   I2C interface

*   Heart rate sensor area just 3.0 x 4.7mm

*   Reserved SWD interface

*   equip with shell and bands

*   Working temperature: -20 to +60℃

##  Interface Function
---
![](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg) ![](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg)

*   1: Grove Interface

*   2: Reserved SWD Interface for programming to STM32

*   3: Heart Rate Sensor

##  Usage
---
Here, We will provide an example here to show you how to use this sensor.

###  Hardware Installation

Link the Sensor to I2C port of Seeeduino with Grove Cable.

![](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell_connect.jpg)

When using the band to fix this module on your finger or wrist, please keep the sensor area contact the skin well and keep no motion, just like the picture.

![](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/img/Grove-Finger-clip_Heart_Rate_Sensor_touch.jpg)
![](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/img/Grove-Finger-clip_Heart_Rate_Sensor_touch2.JPG)

###  Software Part

###  With [Arduino](/Arduino)

Copy the following code into a new sketch of Arduino and upload the sketch, then you can get heart rate from the Serial Monitor.
It may take about a minute to get valid heart rate after you touch your finger with sensor.

```
#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

###  With [Mbed](/mbed_Shield)

Read a byte from I2C device 0xA0 (8 bit address), it's the heart rate.

```
#include "mbed.h"

I2C i2c(I2C_SDA, I2C_SCL);
const int addr = 0xA0;

int main() {
    char heart_rate;
    while (1) {
        i2c.read(addr, &heart_rate, 1);
        printf("heart rate: = %d\r\n", heart_rate);
    }
}
```

####  Upgrade firmware

We can upgrade the firmware of the heart rate sensor through its bootloader.

*   The bootloader is located at 0x08000000 - 0x08002000

*   The application is located at 0x08002000 - 0x08020000

*   To boot into bootloader, connect SWDIO to GND and reset to run

![](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/img/Grove-Finger-clip_Heart_Rate_Sensor_boot_set.jpg)

*   Interface: UART (the Grove connector supports I2C and UART),when upgrade the firmware, the Grove interface run in UART mode.

VCC  -  VCC

GND  -  GND

SDA  -  TX

SCL  -  RX

*   UART Baud Rate: 115200

*   Protocol: ymodem (The recommended tool is Tera Term)

!!!NOTE
    The Grove - Finger-clip Heart Rate Sensor provides heart rate measurements. However, it is not a medical device. To use the heart rate detection sensor on your wrist, finger or palm, you must:
- (1)Fasten the sensor snugly makes tight contact with your skin and maintain table (no motion) while measuring to acquire accurate heart rate. If the sensor does not contact the skin well or have extreme motion while measuring that the heart rate will not be measured correctly.
- (2)Sensor's performance is optimized with greater blood flow. On cold days or users have poor circulation(ex: cold hands, fingers and cold feet) the sensor performance (heart rate accuracy)can be impacted because of lower blood flow in the measuring position.

##  Resources
---
*   [Grove - Finger-clip Heart Rate Sensor eagle file](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar)

*   [Grove - Finger-clip Heart Rate Sensor bin file](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/raw/master/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>