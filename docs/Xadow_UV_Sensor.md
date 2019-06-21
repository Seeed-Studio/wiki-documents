---
name: Xadow - UV Sensor
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-UV-Sensor-p-1694.html
oldwikiname: Xadow - UV Sensor
prodimagename: xadow%20uv.jpg
surveyurl: https://www.research.net/r/Xadow_UV_Sensor
sku:  103040003
---
![](https://github.com/SeeedDocument/Xadow_UV_Sensor/raw/master/img/xadow%20uv.jpg)

Xadow UV Sensor is suitable for measuring the UV radiation in sunlight. It can detect the UV wavelength of 290 ~ 400 nm. The UV Sensor is outputting digital voltage value corresponding to UV light intensity. With the diagram of output voltage and UV, we can easy to know the current UV index. The Xadow UV Sensor can be powered by 3.3V. And it is compatible with Xadow system.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-UV-Sensor-p-1694.html)

##  Specification
---
*   Can detect UV-A and UV-B Brand
*   UV wavelength detect: 290 ~ 400nm
*   Maximum-sensitivity wave length: 330nm
*   Built-in ADC circuit, high convert accuracy
*   Test Accuracy: ±0.1 UV Index
*   Operating temperature: -25 ~ 70 ℃
*   Dimensions: 25.43mm x 20.35mm

##  Demonstration
---
Xadow UV Sensor can output a voltage value corresponding to UV index. Because there is a linear relationship between the output voltage and UV index, you can also directly see UV index with a formula. Next we show how to use UV sensor to know the UV index and display it on the OLED screen.

Required Xadow module: [Xadow - Main Board](/Xadow_Main_Board/), [Xadow - OLED 128*64](/Xado_OLED_128multiply64/), **Xadow - UV Sensor**

**Hardware Installation**


!!!Note
    When connect Xadow UV Sensor to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).

**Download Code**

*   Firstly, you should make sure there are [the library:OLED_Display12864](https://github.com/SeeedDocument/Xadow_UV_Sensor/raw/master/res/OLED_Display12864.zip) in your Arduino Library. If not, please click [here](https://github.com/Seeed-Studio/Grove_OLED_Display_128X64) to download and add it to Arduino Library. Refer to [How to install Arduino Library](/How_to_install_Arduino_Library/) in wiki page, you will familiar with the operation.

*   Now you can upload it to Xadow Main Board by copying and pasting them into Arduino IDE.
```
#include &lt;Wire.h&gt;
#include &lt;SeeedOLED.h&gt;
#include &lt;Streaming.h&gt;

#define ADDR_ADC121    0x5A

#define V_REF 3.00

#define REG_ADDR_RESULT         0x00
#define REG_ADDR_ALERT          0x01
#define REG_ADDR_CONFIG         0x02
#define REG_ADDR_LIMITL         0x03
#define REG_ADDR_LIMITH         0x04
#define REG_ADDR_HYST           0x05
#define REG_ADDR_CONVL          0x06
#define REG_ADDR_CONVH          0x07

unsigned int getData;
float analogVal=0;
float UVIndex = 0;
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_CONFIG);                // Configuration Register
    Wire.write(0x20);
    Wire.endTransmission();
}
void setup()
{
    Wire.begin();
    Serial.begin(38400);
    SeeedOled.init();  //initialize SEEED OLED display
    SeeedOled.clearDisplay();  // clear the screen and set start position to top left corner

    init_adc();
}

void loop()
{
    readVoltage();
    //SeeedOled.clearDisplay();
    SeeedOled.setTextXY(1,0);
    SeeedOled.putString("Voltage: ");
    SeeedOled.setTextXY(1,8);
    SeeedOled.putFloat(analogVal);
    SeeedOled.setTextXY(1,12);
    SeeedOled.putString("mV");
    SeeedOled.setTextXY(2,0);
    SeeedOled.putString("UVIndex: ");
    SeeedOled.setTextXY(2,8);
    SeeedOled.putFloat(UVIndex);
    delay(50);
}
void readVoltage()     //unsigned int *data
{
    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_RESULT);                // get result
    Wire.endTransmission();

    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device
    delay(1);
    if(Wire.available()&lt;=2)
    {
        getData = (Wire.read()&amp;0x0f)&lt;&lt;8;
        getData |= Wire.read();
    }
    delay(50);
    analogVal = getData*V_REF/4096/2;
    Serial.print("analogVal:");
    Serial.print(analogVal);
    Serial.println("mV");
    UVIndex = analogVal/9.71;
    Serial.print("UVIndex:");
    Serial.println(UVIndex);

}
```

*   Open the serial monitor, the voltage value and UV index are showing:

*   You can see on the OLED screen:

*   Figuring out the UV index is not a different matter by referring to the below diagram.

![](https://github.com/SeeedDocument/Xadow_UV_Sensor/raw/master/img/Voltage_and_UVI.jpg)

About the Xadow UV Sensor, we use a resistance which resistance value is 3M, so you need refer to this line for RL=3M.

It is linear observing the relationship between voltage and UV. And the formula by calculated can be gotten: UV Index = Voltage/9.71 which has been used in code.

##  Reference
---
###  UV Sensor I2C Address

The Xadow UV Sensor has a seven-bit hardware address which is referred to as a slave address. And the slave address is configured by the ADR0 and ADR1 address selection inputs. ADR0 and ADR1 can be low level, left floating, or tied to high level.The state of these inputs sets the hardware address that the module responds to on the I2C bus (see the below Table).

<table  cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">  Slave Address[A6 - A0]
</th>
<th colspan="2" scope="col"> ADR0 and ADR1 inputs state
</th></tr>
<tr>
<td scope="col"> ADR1
</td>
<td scope="col"> ADR0
</td></tr>
<tr>
<td scope="row"> 1010000(0x50)
</td>
<td>Floating
</td>
<td>Floating
</td></tr>
<tr>
<td scope="row"> 1010001(0x51)
</td>
<td> Floating
</td>
<td> L
</td></tr>
<tr>
<td scope="row"> 1010010(0x52)
</td>
<td> Floating
</td>
<td> H
</td></tr>
<tr>
<td scope="row"> 1010100(0x54)
</td>
<td> L
</td>
<td> Floating
</td></tr>
<tr>
<td scope="row"> 1010101(0x55)
</td>
<td>L
</td>
<td>L
</td></tr>
<tr>
<td scope="row"> 1010110(0x56)
</td>
<td> L
</td>
<td> H
</td></tr>
<tr>
<td scope="row"> 1011000(0x58)
</td>
<td> H
</td>
<td> Floating
</td></tr>
<tr>
<td scope="row"> 1011001(0x59)
</td>
<td> H
</td>
<td> L
</td></tr>
<tr>
<td scope="row">1011010(default 0x5A)
</td>
<td> H
</td>
<td> H
</td></tr></table>

In default mode, ADR0 and ADR1 are connected to "H"(see the Xadow UV Sensor)

###  spectral response curve of UV Sensor

![](https://github.com/SeeedDocument/Xadow_UV_Sensor/raw/master/img/Responsivity.jpg)

##  Resources
---
[Xadow UV Sensor Eagle File](https://github.com/SeeedDocument/Xadow_UV_Sensor/raw/master/res/Xadow_UV_Sensor_Eagle_File.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>