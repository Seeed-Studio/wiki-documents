---
name: Xadow - 3-Axis Accelerometer
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-3-Axis-Accelerometer-p-1521.html
oldwikiname: Xadow - 3-Axis Accelerometer
prodimagename: Xadow_Accelerometer_01.jpg
surveyurl: https://www.research.net/r/Xadow_3_Axis_Accelerometer
sku: 103040005
---

![](https://github.com/SeeedDocument/Xadow_3_Aixs_Accelerometer/raw/master/img/Xadow_Accelerometer_01.jpg)

This is a high resolution digital accelerometer with large ±16g measurement range through I2C interface, suit for monitor the motion state. With this module, you can easily add monitoring movements function in your design. Such as arms, legs shaking. If you want to switch your iPhone songs through arm shake, then this module is just for you.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-3-Axis-Accelerometer-p-1521.html)

## Specification
---
- Dimensions: 25.43mm x 20.35mm
- Working voltage：3.3V
- Resolution: 3.9mg/LSB
- Test Range: ±16g
- Control Mode:I2C

## Demonstration
---
Like other Xadow modules, you need to connect Xadow 3-Axis Accelerometer to Xadow Main Board before upload the test code to Xadow Main Board to get the Accelerometer information.

The hardware Installation:

![](https://github.com/SeeedDocument/Xadow_3_Aixs_Accelerometer/raw/master/img/Xadow3AxisAcce.jpg)

!!!Note
    When connect Xadow 3-Axis Accelerometer to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).

The test code is as shown below:

```
#include <Wire.h>

#define ADXL345_DEVICE 0x00
#define ADXL345_POWER_CTL 0x2D
#define ADXL345_DATAX0 0x32
#define ADXL345_DATAX1 0x33
#define ADXL345_DATAY0 0x34
#define ADXL345_DATAY1 0x35
#define ADXL345_DATAZ0 0x36
#define ADXL345_DATAZ1 0x37

#define ADXL345_ADDRESS  0x53
int X_Read,Y_Read,Z_Read;
double ax,ay,az;

 void setup()
{
  Wire.begin();
  Serial.begin(19200);
  delay(100);
  //Turning on the ADXL345
  Wire.beginTransmission(ADXL345_DEVICE); // start transmission to device
  Wire.write(ADXL345_POWER_CTL);
  Wire.write(8);                          //measuring enable
  Wire.endTransmission();                 // end transmission

 }

void loop()
{

X_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAX0,ADXL345_DATAX1);
Y_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAY0,ADXL345_DATAY1);
Z_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAZ0,ADXL345_DATAZ1);


 /*Serial.print("The X,Y,Z Value are:");
 Serial.print(X_Read);
 Serial.print(" , ");
 Serial.print(Y_Read);
 Serial.print(" , ");
 Serial.println(Z_Read); */

  getAcceleration();
  Serial.print("X=");
  Serial.print(ax);
  Serial.println(" g");
  Serial.print("Y=");
  Serial.print(ay);
  Serial.println(" g");
  Serial.print("Z=");
  Serial.print(az);
  Serial.println(" g");
  Serial.println("**********************");
 delay(500);
}

int readRegister(int deviceAddress,int address1,int address2)
{
    long int value;
    int readValue1,readValue2;
    Wire.beginTransmission(deviceAddress);
     Wire.write(address1); // register to read
     Wire.write(address2); // register to read
     Wire.endTransmission();
     Wire.requestFrom(deviceAddress,2); // read two byte
     if(Wire.available()<=2)
     {
       readValue1 = Wire.read();
       readValue2 = Wire.read();
     }
     //Wire.endTransmission();
     readValue2 = readValue2<<8;
     value= readValue1 + readValue2;
     delay(100);
     return value;
}

void getAcceleration()
{
  double gains;
  //Boring accelerometer stuff
  gains = 0.00390625;
  ax=X_Read * gains;
  ay=Y_Read * gains;
  az=Z_Read * gains;

}
```

After uploading code, open the serial monitor to obverse the test result. The outputs of this sensor are 3-axis acceleration info which is converted into the unit of gravity, "g".

![](https://github.com/SeeedDocument/Xadow_3_Aixs_Accelerometer/raw/master/img/Xadow_3-Axis_Accelemeter_Result.jpg)

## Reference
---
Below are two figures that can help you understand the physical meaning of the results.
The first figure is about the direction of each axis:

![](https://github.com/SeeedDocument/Xadow_3_Aixs_Accelerometer/raw/master/img/ADXL345_Axes_of_Acceleration_Sensivity.jpg)

The second figure gives some examples:

![](https://github.com/SeeedDocument/Xadow_3_Aixs_Accelerometer/raw/master/img/Sensing_Diraction_2.jpg)

## Resources
---
- [Xadow 3-Axial accelerometere Eagle File](https://github.com/SeeedDocument/Xadow_3_Aixs_Accelerometer/raw/master/res/3-Axis_Accelerometer_Eagle_File.zip)
- [ADXL345 Datasheet](https://github.com/SeeedDocument/Xadow_3_Aixs_Accelerometer/raw/master/res/ADXL345_datasheet.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>