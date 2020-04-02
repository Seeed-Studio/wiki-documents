---
name: 4A Motor Shield
category: Shield
bzurl: https://www.seeedstudio.com/4A-Motor-Shield-p-1954.html
oldwikiname:  4A_Motor_Shield
prodimagename: 4A_Motor_Shield_top.jpg
surveyurl: https://www.research.net/r/4A_Motor_Shield
sku: 105030004
tags: io_5v, plat_duino
---

![](https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4A_Motor_Shield_top.jpg)

The 4A Motor Shield is based on the Freescale MC33932 dual H-Bridge Power IC , which can control inductive loads with currents up to 5.0A peak per single bridge. It lets you drive two DC motors with your Arduino/Seeeduino board, controlling the speed and direction of each one independently. You can also measure the motor current absorption of each motor, among other features.  
The on board DC/DC converter suport a very wide range of input voltage, and can provide a 5V power supply for the microcontroller board with 100mA maximun current.So, you just need one power supply to drive the motors and power up the logic circuit.  

[![Get one now](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/4A-Motor-Shield-p-1954.html)

## Specifications
---

- Operating Voltage: 6V ~ 28V  
- DC/DC output: 5V 100mA @ "5V" pin  
- Output Current(For Each Channel ): 2A (continuous operation) / 5A(peak)  
- Output Duty Range: 0%~100%  
- Output short-circuit protection (short to VPWR or GND)  
- Over-current limiting (regulation) via internal constant-off-time PWM  
- Temperature dependant current limit threshold reduction  

## Platforms Supported
-------------------

## Interface
---

![](https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4a_motor_shield_top_view.jpeg)

**①：J1:**DC Input connector.  
**②：J2:**Motor Driver output connector.  
**③：EN,FT:**Jumpers for EN control and Fault flag detection.If short circuit the EN jumper, the EN signal was mapped to the D4 pin ,you can control the H-Bridge disable output or reset the Fault flag by D4 pin. If short circuit the FT jumper, the fault flag signal was mapped to D3 pin ,you can read the fault flag from the D3 pin ether.  
**④: IO:**Logic Voltage level Select Jumper. You can choose the control logic voltage level from this jumper.  
**⑤：IA,IB:**Current sensor jumper. If you need to detect the motor current, you have to short circuit these jumpers.The motor current will be converted into voltage signal and can be read from A0,A1 pin.  

**Power Supply:** You have to power up the shield from the J1(DC input connector).The input voltage range can be set up to 6Vdc ~ 28Vdc.The on board DC/DC converter can convert the DC input voltage to 5Vdc output voltage to supply the logic circuit.The DC/DC converter can also power up the microcontroller board(Arduino/Seeeduino) form "5V" pin for maximun 100mA current.  
**Motor Interface：**Out 1 and Out 2(Out 3 and Out 4) connect Motor A(B) for DC Motor.  

## Caution

<span style="color: red">Do not touch the H-bridge IC or PCB board during working. Its temperature can reach up to 100 degrees in the case of full load operating.</span>

## Demonstration

### Drive DC Motor

Connect DC motor to the motor shield Output Pins OUT1& OUT2(OUT3& OUT4). And connect the drive voltage to the power supply terminals. Motor driver board can generate 5V supply voltage to seeeduino.

![](https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/Drive_DC_Motor.png)  

Install the library we provide in the Resources section into Arduino libraries file and find the example “DCMotorDemo” by the path: File->Example->MotorDrive->DCMotorDemo.  

This demo enables the motor rotate in one direction for 2 sec, take a break for 1 sec and rotate in the reverse direction for 2 sec.

![](https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/DC_Motor_Code.jpg)  


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/4A_Motor_Shield/raw/master/res/4A_MOTOR_Shield_v1.0.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- [Schematic pdf](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.pdf)  
- [Eagle File](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip)  
- [Motor Shield Library](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MotorDriver20121210.zip)
- [MC33932 Datasheet](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MC33932.pdf)  

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>