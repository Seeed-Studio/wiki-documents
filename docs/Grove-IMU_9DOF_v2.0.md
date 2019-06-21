---
name: Grove - IMU 9DOF v2.0
category: Sensor
bzurl: https://seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html
oldwikiname: Grove_-_IMU_9DOF_v2.0
prodimagename: Grove-IMU_9DOF_v2.0.JPG
bzprodimageurl: http://statics3.seeedstudio.com/images/product/101020080 2.jpg
surveyurl: https://www.research.net/r/Grove-IMU_9DOF_v2_0
sku: 101020080
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/Grove-IMU_9DOF_v2.0.JPG)

Grove - IMU 9DOF v2.0 is an upgraded version of **Grove - IMU 9DOF v1.0** and it is a high performance 9-axis motion tracking module, which is based on MPU-9250. The MPU-9250 is an integrated 9-axis motion tracking device designed for the low power, low cost, and high performance requirements of consumer electronics equipment including smartphones, tablets and wearable sensors. MPU-9250 features three 16-bit ADC for digitizing the gyroscope outputs and three 16-bit ADCs for digitizing the accelerometer outputs and three 16-bit ADCs for digitizing the magnetometer outputs.


[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)

## Specifications


-   I2C/SPI interface
-   Auxiliary I2C
-   Low Power Consumption
-   400kHz Fast Mode I2C for communicating with all registers
-   Digital-output 3-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of ±250, ±500, ±1000, and ±2000°/sec
-   Digital-output 3-Axis accelerometer with a programmable full scale range of ±2g, ±4g, ±8g and ±16g
-   Digital-output 3-Axis accelerometer with a full scale measurement range is ±4800μT
- I2C Address: 0x68

!!!Note
    If you want to use multiplue I2C devices, please refer to [Software I2C](http://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Hardware Overview

![](https://github.com/SeeedDocument/Grove-IMU_9DOF_v2.0/raw/master/img/dimensions.jpg)
![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/Grove-IMU_9DOF_v2_inter.png)

① - Grove interface,connect to I2C

② - I2C or SPI select pad(default is I2C), if want to use SPI, disconnect this pad

③ - Address select pad, default connected b and c address is 0x68, if connect b and a address is 0x69, if want to use SPI, disconnect this pad to either side.

④ - SPI Interface

⑤ - Auxiliary I2C master serial data

⑥ - Auxiliary I2C master serial clock

⑦ - Interrupt digital output

## Getting started

### Play with Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Grove-IMU_9DOF_v2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-IMU_9DOF_v2.0/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

- **Step 2.** Connect Grove-IMU_9DOF_v2.0 to port **I2C** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![with_ardu](https://github.com/SeeedDocument/Grove-IMU_9DOF_v2.0/raw/master/img/with_ardu.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.

| Seeeduino_v4 | Grove-IMU_9DOF_v2.0  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |



#### Software

**Step 1.** Download the [library](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/Grove_IMU_9DOF_9250.zip). from Github.

**Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

**Step 3.** Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->IMU_9DOF_Demo_Compass_Calibrated->IMU_9DOF_Demo_Compass_Calibrated.

Here is the main part of the code

```c++

void setup() {
  // join I2C bus (I2Cdev library doesn't do this automatically)
  Wire.begin();

  // initialize serial communication
  // (38400 chosen because it works as well at 8MHz as it does at 16MHz, but
  // it's really up to you depending on your project)
  Serial.begin(38400);

  // initialize device
  Serial.println("Initializing I2C devices...");
  accelgyro.initialize();

  // verify connection
	Serial.println("Testing device connections...");
	Serial.println(accelgyro.testConnection() ? "MPU9250 connection successful" : "MPU9250 connection failed");
	delay(1000);
	Serial.println("     ");

 //Mxyz_init_calibrated ();
}

void loop()
{   
	getAccel_Data();
	getGyro_Data();
	getCompassDate_calibrated(); // compass data has been calibrated here
	getHeading();				//before we use this function we should run 'getCompassDate_calibrated()' frist, so that we can get calibrated data ,then we can get correct angle .					
	getTiltHeading();           

	Serial.println("calibration parameter: ");
	Serial.print(mx_centre);
	Serial.print("         ");
	Serial.print(my_centre);
	Serial.print("         ");
	Serial.println(mz_centre);
	Serial.println("     ");


	Serial.println("Acceleration(g) of X,Y,Z:");
	Serial.print(Axyz[0]);
	Serial.print(",");
	Serial.print(Axyz[1]);
	Serial.print(",");
	Serial.println(Axyz[2]);
	Serial.println("Gyro(degress/s) of X,Y,Z:");
	Serial.print(Gxyz[0]);
	Serial.print(",");
	Serial.print(Gxyz[1]);
	Serial.print(",");
	Serial.println(Gxyz[2]);
	Serial.println("Compass Value of X,Y,Z:");
	Serial.print(Mxyz[0]);
	Serial.print(",");
	Serial.print(Mxyz[1]);
	Serial.print(",");
	Serial.println(Mxyz[2]);
	Serial.println("The clockwise angle between the magnetic north and X-Axis:");
	Serial.print(heading);
	Serial.println(" ");
	Serial.println("The clockwise angle between the magnetic north and the projection of the positive X-Axis in the horizontal plane:");
	Serial.println(tiltheading);
	Serial.println("   ");
	Serial.println("   ");
    Serial.println("   ");
	delay(300);
}
```


**Step 4.** Upload the code and after that, you can see :

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/Grove-IMU_9DOF_v2.0_demo.jpg)

In static state，the z-Axis output value is about 0.98g，so you can refer to this to test if your sensor can work normally.

## References

**Orientation of Axes**

The diagram below shows the orientation of the axes of sensitivity and the polarity of rotation.Note the pin 1 identifier (•) in the figure.

- Orientation of Axes of Sensitivity and Polarity of Rotation for Accelerometer and Gyroscope

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/MPU9250_axes.jpg)

- Orientation of Axes of Sensitivity for Compass

![](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/img/MPU9250_axes2.jpg)


## Resources

- **[Eagle&PDF]**  [Grove - IMU 9DOF v2.0 Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip)
- **[Library]**  [Grove - IMU 9DOF v2.0 library](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/Grove_IMU_9DOF_9250.zip)
- **[PDF]**  [MPU-9250 datashet](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/MPU-9250A_Product_Specification.pdf)
- **[PDF]**  [MPU-9250 Register Map](https://raw.githubusercontent.com/SeeedDocument/Grove-IMU_9DOF_v2.0/master/res/MPU-9250A_Reg_Map.pdf)

## Projects

**Speed testing the MPU9150's functions using a LinkIt ONE
**: I set up this project with the sole intention of determining the cost in milliseconds of the MPU9150's standard functions.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kg6hxm/speed-testing-the-mpu9150-s-functions-using-a-linkit-one-181c67/embed' width='350'></iframe>


## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>