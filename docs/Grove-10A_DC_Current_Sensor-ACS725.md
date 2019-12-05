---
name: Grove - 10A DC Current Sensor (ACS725)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 101020652
---


![](https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/preview.png)


The Grove - 10A DC Current Sensor (ACS725) is a high precision DC current sensor based on ACS725. The Allegro™ ACS725 current sensor IC is an economical and precise solution DC current sensing in industrial, automotive, commercial, and communications systems. 


The Grove - 10A DC Current Sensor (ACS725) can measure the DC current up to 10A and has a base sensitivity of 264mV/A. This sensor do not support AC current, if you want to measure the AC load please check the:


[Grove - ±5A DC/AC Current Sensor (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)    



<p style=":center"><a href="https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>





## Feature


- High-bandwidth 120 kHz analog output for faster response times in control applications
- Industry-leading noise performance with greatly improved bandwidth through proprietary amplifier and filter design techniques
- 1.2 mΩ primary conductor resistance for low power loss and high inrush current withstand capability
- Differential Hall sensing rejects common-mode fields
- Analog output



## Specification

|Parameter|Value|
|---|---|
|Supply voltage|3.3V / 5V|
|Operating ambient temperature| -40 – 150℃|
|Storage temperature|- 65°C – 165°C|
|Working Voltage|<400V|
|Current sensing range|0 – 10A|
|Sensitivity|264mV/A(Typ.)|
|Output interface|Analog|
|Input interface|Screw terminal|


## Working Principle

There are two types of current sensing: direct and indirect. Classification is mainly based on the technology used to measure current.

**Direct sensing:**

- Ohm's Law

**Indirect seneing:** 

- Faraday's Law of Induction
- Magnetic field sensors
- Faraday Effect


The Grove - 10A DC Current Sensor (ACS725) uses magnetic field sensors technology. And there are three kinds of Magnetic field sensors technology:

- Hall effect
- Flux gate sensors
- Magneto-resistive current sensor


The Grove - 10A DC Current Sensor (ACS725) is based on the Hall priciple, differential Hall sensing rejects common-mode. 



## Hardware Overview



<div align="center">
<figure>
  <p style=":center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/pinout.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/pinout.jpg" /></a></p>
  <figcaption><b>Figure 3</b>. <i>Pinout</i></figcaption>
</figure>
</div>


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |




## Getting Started


!!!Danger
        The human body is forbidden to touch the module during the test, otherwise there is danger of electric shock.


### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield | 10A DC Current Sensor (ACS725)|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/thumbnail.jpg)
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|


>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.




!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



#### Hardware Connection


- **Step 1.** Connect the Grove - 10A DC Current Sensor(ACS725) to the **A0** port of the Base Shield.

- **Step 2.** Connect the positive and negative poles of the circuit to be tested to the corresponding positive and negative poles of the screw terminal.

!!!Tip
        If you reverse the positive and negative poles, the reading will be reversed. This sensor need calibration before use, so please do not power on the circuit first.


- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.



<div align="center">
<figure>
  <p style=":center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/101020616-connect.png" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/101020616-connect.png" /></a></p>
  <figcaption><b>Figure 4</b>. <i>We use the DC Power Supply in this demo, please set the current to 0A or do not power on it at first</i></figcaption>
</figure>
</div>



#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.




- **Step 1.** Download the [Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor) Library from Github.




- **Step 2.** In the /example/ folder, you can find the demo code. Here we take the **Grove_10A_Current_Sensor** for instance. Just click the [Grove_10A_Current_Sensor.ino](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_10A_Current_Sensor/Grove_10A_Current_Sensor.ino) to open the demo. Or you can copy the following code:

```C++
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A0

// Take the average of 500 times
const int averageValue = 500;

long int sensorValue = 0;
float sensitivity = 1000.0 / 264.0; //1000mA per 264mV 


float Vref = 322;   //Vref is zero drift value, you need to change this value to the value you actually measured before using it.
void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // Read the value 10 times:
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // wait 2 milliseconds before the next loop
    delay(2);

  }

  sensorValue = sensorValue / averageValue;
 

  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // Calculate the corresponding current
  float current = (voltage - Vref) * sensitivity;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // Print display current (mA)
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // Reset the sensorValue for the next reading
  sensorValue = 0;
  // Read it once per second
  delay(1000);
}
```


- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.

- **Step 5. Calibration**  
        When there is no current flowing, the sensor will still have a small output value. We call this value **zero offset**. 


<div align="center">
<figure>
  <p style=":center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/ca1.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/ca1.jpg" /></a></p>
  <figcaption><b>Figure 5</b>. <i>The zero offset of this board is 346.68mV，Converted into current is 93.48mA</i></figcaption>
</figure>
</div>


Due to the presence of zero offset, the sensor will also have a reading when there is no current. So we set a parameter **Vref** to fix it, you can find it in the code block above.

Line 19:
```C++
float Vref = 322;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

In the demo code, we set the Vref to 322, however, the zero offset value varies from board to board. As you know, the board we use in this demo is 346.68. So let's modify the Line 21:

```C++
float Vref = 346.68;
```

Then save the code and upload the code again, follow the Step 2. and Step 3. Now let's see：


<div align="center">
<figure>
  <p style=":center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/ca2.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/ca2.jpg" /></a></p>
  <figcaption><b>Figure 6</b>. <i>Now the current zero offset turns to 0mA</i></figcaption>
</figure>
</div>


When the current output becomes to 0mA or a small value, you have completed the calibration.


- **Step 6.** Now it's all yours, you can power up the current. Please feel free to use it, remember this is a 10A DC Current Sensor, current cannot exceed 10A!  
 
If you want to know the calculation formula of the result, please refer to the [FAQ Q1](#faq)




### Play with Raspberry


**Materials required**

| Raspberry pi | Grove Base Hat for RasPi| 10A DC Current Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-2.5A_DC_Current_Sensor-ACS70331/raw/master/img/thumbnail.jpg)
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|



#### Hardware Connection


- **Step 1**. Plug the Grove Base Hat into Raspberry Pi.

- **Step 2**. Connect the Grove - 10A DC Current Sensor(ACS70331) to port **A0** of the Base Hat.

- **Step 3**. Connect the positive and negative poles of the circuit to be tested to the corresponding positive and negative poles of the screw terminal.



<div align="center">
<figure>
  <p style=":center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/101020616-connect2.png" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/101020616-connect2.png" /></a></p>
  <figcaption><b>Figure 7</b>. <i>We use the DC Power Supply in this demo, please set the current to 0A or do not power on it at first</i></figcaption>
</figure>
</div>



!!!Tip
        If you reverse the positive and negative poles, the reading will be reversed. This sensor need calibration before use, so please do not power on the circuit first.


- **Step 4**. Power the Raspberry Pi via the Micro-USB cable.

!!!Attenton
        You can power the Raspberry Pi by computer USB port or DC adapter, however, if you are using the Raspberry pi 3B+, we strongly recommend you to power it by DC adapter, if you use the USB port of the PC, you may damage the Raspberry Pi 3B+.


#### Software


- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.

- **Step 2**. Download the source file by cloning the [grove.py](https://github.com/Seeed-Studio/grove.py) library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```


- **Step 3**. Excute following commands to run the code.

```python
cd grove.py/grove   # to enter the demo file folder
python grove_current_sensor.py 0 10A   # to run the demo program 
```


Then the terminal will output as following:

```python
pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
323
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```


Tap ++ctrl+c++ to quit.


!!!Note
        Please note the second command, There are two parameters after the file name:   
        
        - <font style="font-weight:bold;color:#AE0000">0</font> means the sensor is connected to port A0. If you connect the sensor to port A2, then you need to change this parameter to 2.  This parameter has a range of 0-7, but if you use the Grove base hat, you can only use 0/2/4/6 because of the physical limitations of the interface.  

        - <font style="font-weight:bold;color:#AE0000">10A</font> means the current sensor type is 10A DC 




Sensor                                     |Current type|Parameter Value
-------------------------------------------|------------|----
Grove - 2.5A DC Current Sensor(ACS70331)   |DC          |2.5A
Grove - ±5A DC/AC Current Sensor (ACS70331)|DC          |5A_DC
                                           |AC          |5A_AC
Grove - 10A DC Current Sensor (ACS725)     |DC          |10A


<div align="center"><i>This series has three current sensors, the parameter list is as above</i></div>





- **Step 4 Calibration**.  

    When there is no current flowing, the sensor will still have a small output value. We call this value zero offset. As you can see, in the step 3, the zero offset of this board is 324mV, converted into current is 8mA.

    Due to the presence of zero offset, the sensor will also have a reading when there is no current. So we set a parameter **Vref** to fix it, you can find it in the **python grove_current_sensor.py**. For the Grove - 10A DC Current Sensor (ACS725), we set the **Vref** to 322 by default, however the zero offset varies from board to board. That's why we need to do the calibration first.
    
    
    Check the python code below.


```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
#
# This is the library for Grove Base Hat
# which used to connect grove sensors for Raspberry Pi.
'''
This is the code for
    - `Grove - 2.5A DC current sensor  <https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html>`_
    - `Grove - 5A AC/DC current sensor <https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html>`_
    - `Grove - 10A current sensor      <https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html>`_
Examples:
    .. code-block:: python
        import time
        from grove_current_sensor import Current
        pin = 0
        sensor_type = "2.5A"
        #if use 10A current sensor input: pin = 0 , sensor_type = "10A"
        if (sensor_type == "2.5A"):
            sensitivity = 1000.0 / 800.0
            Vref = 260
        if (sensor_type == "5A_DC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "5A_AC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "10A"):
            sensitivity = 1000.0 / 264.0
            Vref = 322
        averageValue = 500
        ADC = Current()
        while True:
            if(sensor_type == "5A_AC"):
                pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
            else:
                temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                current = temp[0]
                pin_voltage = temp[1]
        
            current = round(current)
            print("pin_voltage(mV):")
            print(pin_voltage)
            print("current(mA):")
            print(current)
            print()
            time.sleep(1)
    
'''

import sys
import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0

__all__ = ['Current','Bus']

class Current():
    '''
    Grove Current Sensor class
    '''

    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        '''
        Init iic.
        Args: 
            bus_num(int): the bus number;
            addr(int): iic address;
        '''
        self.bus = Bus(bus_num)
        self.addr = addr
  
    def get_nchan_vol_milli_data(self,n,averageValue):
        '''
        Get n chanel data with unit mV.
        :param int n: the adc pin.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: voltage value
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        return val

    def get_nchan_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        2.5A/5A DC/10A cunrrent sensor get n chanel data with unit mA.
        :param int n: the adc pin.
        :param float sensitivity: The coefficient by which voltage is converted into current.
        :param int Vref: Initial voltage at no load.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: current value
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        currentVal = (val - Vref) * sensitivity
        return currentVal,val

    def get_nchan_AC_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        5A current sensor AC output and get n chanel data with unit mA.
        :param int n: the adc pin.
        :param float sensitivity: The coefficient by which voltage is converted into current.
        :param int Vref: Initial voltage at no load.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: current value
        '''
        sensorValue = 0
        for i in range(averageValue):
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val=data[1]<<8|data[0]
            if(val > sensorValue):
                sensorValue=val
            time.sleep(0.00004)
        currentVal = ((sensorValue - Vref) * sensitivity)*0.707
        return currentVal   

ADC = Current()
def main():
    if(len(sys.argv) == 3):

        pin = int(sys.argv[1])
        sensor_type = sys.argv[2]
        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

            while True:

                if(sensor_type == "5A_AC"):
                    pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                    current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
                else:
                    temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                    current = temp[0]
                    pin_voltage = temp[1]

                current = round(current)
                print("pin_voltage(mV):")
                print(pin_voltage)
                print("current(mA):")
                print(current)
                print()
                time.sleep(1)
            
        else:
            print("parameter input error!")
            print("Please enter parameters for example: python grove_current_sensor 0 2.5A")
            print("parameter1: 0-7")
            print("parameter2: 2.5A/5A_DC/5A_AC/10A")
    
    else:
        print("Please enter parameters for example: python grove_current_sensor 0 2.5A")
        print("parameter1: 0-7")
        print("parameter2: 2.5A/5A_DC/5A_AC/10A")
    
    
if __name__ == '__main__':
    main()

```


You can modify the **Vref** at line 156 of the code block above:

```python

        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

```

As you can see, for the 10A Current Sensor the default **Vref** is 322, and in the **Step 3**, we can find it when there is no current the zero offset value is 324mV. So let's change it into 324.

```python
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 324

```

Now, let's run this demo again.


```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
325
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
323
current(mA):
-4.0
()
pin_voltage(mV):
324
current(mA):
0.0

```

Well, better than before, now you can measure the current more accurately 😄



## FAQ

**Q1#** What's the current calculation formula?

**A1:** If you think the [principle part](#working-principle) is very complicated, let's put it in a easy way. The current in the circuit to be tested excites the magnetic field, which causes the resistance value of the GMR elements change. And the resistance change  in the bridge causes a change in the voltage at the output of the chip. We call the voltage output as **V<sub>IOUT</sub>**.

$$
V_{IOUT} = Sens × I_P + V_{IOUT(Q)}
$$ 

> **Sens**: Sens is the coefficient that converts the current into an output voltage. For this module it is 264mA/V.  
> **I<sub>p</sub>**: I<sub>p</sub> is the current value in the circuit to be tested, Unit mA.  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> is the voltage output when the I<sub>p</sub> is 0mA(which means there is no current in the circuit to be tested), Unit mV.


Here comes the current value:  

$$
I_P = {V_{IOUT} - V_{IOUT(Q)} \over Sens}
$$


Now, Let's review the figure 5, we will explain why the current value of the output is not 0 when the actual current value in the circuit to be tested is 0.  As you can see in the figure 5, the **initialValue** is 346.68mV, which is the **V<sub>IOUT</sub>**; the current is 93.48mA, which is the **I<sub>p</sub>**. As for the **V<sub>IOUT(Q)</sub>**, it is the **Vref** we set in the code.
In figure 5, it is 265. And the **Sens** is 264mA/V, which is 264mA/1000mV. Now, just do some math:

$$
{346.68mV-322mV \over 264mA/1000mV} = 93.48mA
$$

So, in the figure 6, when we set the **Vref** to 346.68, the **Ip** turns to 0mA.


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/res/10A%20Current%20Sensor%20(ACS725).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[ZIP]** [Grove - 10A DC Current Sensor (ACS725) Schematic file](https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/res/10A%20Current%20Sensor%20(ACS725).zip)
- **[PDF]** [ACS725 Datasheet](https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/res/ACS725.pdf)





## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>