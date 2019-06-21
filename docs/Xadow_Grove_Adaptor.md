---
name: Xadow - Grove Adaptor
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Adaptor-p-1624.html
oldwikiname: Xadow - Grove Adaptor
prodimagename: RGB_OLED_MainPicture.jpg
surveyurl: https://www.research.net/r/Xadow_Grove_Adaptor
sku:  103040006
---
![](https://github.com/SeeedDocument/Xadow_Grove_Adaptor/raw/master/img/X_adaptor_01.jpg) 

Xadow Grove Adaptor is a device that converts Grove interface to Xadow Interface to compatible with Xadow System. It can achieve this function: analog signal from two analog Grove interface will output by Xadow I2C bus through ADC. The signal from Grove I2C Interface will directly lead to Xadow I2C bus without conversion. The A/D conversion based on ADCC121C021, a 12-bit precision ADC, create high precision.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Adaptor-p-1624.html)

##  Specification
---
*   Work Voltage： 3.3V

*   A/D Resolution：12 bit

*   Sample Rate： 188.9 ksps

*   I2C  address variable

*   Dimensions: 25.43mm x 20.35mm

##  Demonstration
---
Next we will show you how to read the output value of Grove modules by using Xadow Grove Adaptor.

**Measure Analog Signal**

If measure analog signal Grove module outputs, you need to connect Grove module to analog Grove Interface where they are marked as "A0" and "A1".

**The Hardware Installation should be:**

![](https://github.com/SeeedDocument/Xadow_Grove_Adaptor/raw/master/img/XadowAdaptor2.jpg)

Here Grove - Gas sensor outputs analog signal is connected to AO, so the I2C Address applied to the test code is 0x58(default). In other words, the I2C Address should be 0x59 when Grove - Gas Sensor connect to A1 interface.

**The test code is:**
```
<pre>
#include &lt;Wire.h&gt;
#include &lt;Streaming.h&gt;

#define ADDR_ADC121             0x58

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
float analogVal=0;         // convert
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_CONFIG);                // Configuration Register
    Wire.write(0x20);
    Wire.endTransmission();
}

void read_adc()     //unsigned int *data
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
    Serial.print("getData:");
    Serial.println(getData);
    delay(5);
    Serial.print("The analog value is:");
    Serial.print(getData*V_REF*2/4096);
    Serial.println("V");
}
void setup()
{
    Serial.begin(9600);
    Wire.begin();
    init_adc();
}

void loop()
{
    read_adc();//adcRead);
    delay(50);
}</pre>
```
Upload code to Xadow Main Board, then open the serial monitor to observe output value：

![](https://github.com/SeeedDocument/Xadow_Grove_Adaptor/raw/master/img/Xadow_Grove_Adaptor_Result.png)

**Measure I2C Signal**

You need to connect  Grove module to I2C interface of Xadow Grove Adaptor when communication mode of Grove module is I2C. Now the sever of Xadow Grove Adaptor is delivering signal to Xadow I2C bus without ADC.
Taking Grove - Digital Light Sensor as example, let's learn its usage.

**Hardware Installation：**

![](https://github.com/SeeedDocument/Xadow_Grove_Adaptor/raw/master/img/XadowAdaptor1.jpg)


**Download the code：**

*   Download the[Digital_Light_Library](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor) of Grove - Digital Light Sensor from Github website and install it to your Arduino Library. Refer to [How to install Arduino Library](/How_to_install_Arduino_Library) in wiki page, you will familiar with the installation.
*   Open code after you finish installing.

```
<pre>
/* Digital Light sensor demo V1.0
* Connect the sensor to I2C port of Arduino to use.
*
* By:http://www.seeedstudio.com
*/
#include &lt;Wire.h&gt;
#include &lt;Digital_Light_TSL2561.h&gt;
void setup()
{
  Wire.begin();
  Serial.begin(9600);
  TSL2561.init();
}

void loop()
{
  unsigned long  Lux;
  TSL2561.getLux();
  Serial.print("The Light value is: ");
  Serial.println(TSL2561.calculateLux(0,0,1));
  delay(1000);
  }</pre>
```

*   Open the serial monitor to observe the LUX value. Artificially change the light intensity of surrounding environment, you will see the obvious change of the output value.


![](https://github.com/SeeedDocument/Xadow_Grove_Adaptor/raw/master/img/Digital_Light_Sensor_Score_Picture.jpg)

The ADC IC ADC121C021 used in  Xadow Grove Adaptor have been adopter on  Grove - I2C ADC. Of course, the way to change I2C Address are same. Please refer to [Reference part](/Grove-I2C_ADC#Reference) of Grove - I2C ADC about the varying method. In addition,"0" and "1" on board are the address varying area of A0 interface,"2" and "3" are the address varying area of A1 interface.

##  Resources
---
*   [Xadow Grove Adaptor Eagle File](https://github.com/SeeedDocument/Xadow_Grove_Adaptor/raw/master/res/Xadow_Grove_Adaptor_Eagle_File.zip)

*   [A/DC IC ADC121C021 datasheet](https://github.com/SeeedDocument/Xadow_Grove_Adaptor/raw/master/res/Xadow_Grove_Adaptor_Eagle_File.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>