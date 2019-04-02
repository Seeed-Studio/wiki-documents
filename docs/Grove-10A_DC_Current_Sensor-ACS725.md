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



<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




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
  <p style="text-align:center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/pinout.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/pinout.jpg" /></a></p>
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
  <p style="text-align:center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/101020616-connect.png" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/101020616-connect.png" /></a></p>
  <figcaption><b>Figure 4</b>. <i>We use the DC Power Supply in this demo, please set the current to 0A or do not power on it at first</i></figcaption>
</figure>
</div>



#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



- **Step 1.** Copy the following code into a new sketch in the Arduino IDE

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


- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 3.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.

- **Step 4. Calibration**  
        When there is no current flowing, the sensor will still have a small output value. We call this value **zero offset**. 


<div align="center">
<figure>
  <p style="text-align:center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/ca1.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/ca1.jpg" /></a></p>
  <figcaption><b>Figure 5</b>. <i>The zero offset of this board is 346.68mV，Converted into current is 93.48mA</i></figcaption>
</figure>
</div>


Due to the presence of zero offset, the sensor will also have a reading when there is no current. So we set a parameter **Vref** to fix it, you can find it in the code block above.

Line 19:
```C++
float Vref = 322;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

In the demo code, we set the Vref to 265, however, the zero offset value varies from board to board. As you know, the board we use in this demo is 288.09. So let's modify the Line 21:

```C++
float Vref = 346.68;
```

Then save the code and upload the code again, follow the Step 2. and Step 3. Now let's see：


<div align="center">
<figure>
  <p style="text-align:center"><a href="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/ca2.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/img/ca2.jpg" /></a></p>
  <figcaption><b>Figure 6</b>. <i>Now the current zero offset turns to 0mA</i></figcaption>
</figure>
</div>


When the current output becomes to 0mA or a small value, you have completed the calibration.


- **Step 5.** Now it's all yours, you can power up the current. Please feel free to use it, remember this is a 10A DC Current Sensor, current cannot exceed 10A!  
 
If you want to know the calculation formula of the result, please refer to the [FAQ Q1](#faq)








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


## Resources

- **[ZIP]** [Grove - 10A DC Current Sensor (ACS725) Schematic file](https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/res/10A%20Current%20Sensor%20(ACS725).zip)
- **[PDF]** [ACS725 Datasheet](https://github.com/SeeedDocument/Grove-10A_Current_Sensor-ACS725/raw/master/res/ACS725.pdf)





## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/) or drop mail to techsupport@seeed.cc