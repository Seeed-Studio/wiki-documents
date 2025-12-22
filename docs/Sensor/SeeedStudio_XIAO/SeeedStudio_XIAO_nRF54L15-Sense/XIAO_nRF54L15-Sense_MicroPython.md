---
description: |
title: MicroPython for Seeed Studio XIAO nRF54L15 Sense
keywords: 
- nRF54L15
- xiao
- MicroPython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.webp
slug: /xiao_nrf54l15_sense_micropython
last_update:
  date: 9/23/2025
  author: Sherlock
---

This tutorial aims to introduce how to use MicroPython on Thonny based on XIAO nRF54L15.

[MicroPython](https://github.com/micropython/micropython/wiki) is a Python interprer with a partial native code compilation feature. It provides a subset of Python 3.5 features, implemented for embedded processors and constrained systems. It is different from CPython and you can read more about the differences [here](https://github.com/micropython/micropython/wiki/Differences).

<!-- ## 安装Python3
Thonny自带Python解释器，所以不需要额外安装Python环境
Win + R -->

## Use Thonny IDE

Prepare an XIAO nRF54L15.

<div class="table-center">
<table align="center">
<tr>
<th>Seeed Studio XIAO nRF54L15 Sense</th>
</tr>
<tr>
<th><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></th>
</tr>
<tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
</tr>
</table>
</div>

### Install Thonny IDE

[Thonny IDE](https://thonny.org/)

Choose the appropriate version for installation. Here, I am installing it on a Windows system, so I have selected the Windows version.

Follow the instructions for the desired Python version.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:600, height:'auto'}}/></div>

Then, simply follow the default steps for configuration.

### Download the repository

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Clone it to the local machine, and then remember the path where this XIAO nRF54L15's MicroPython is stored. This path will be used later.

```git
git clone https://github.com/Seeed-Studio/micropython-seeed-boards.git
```

### Upload  board file

**Step 1.** Flash the MicroPython firmware for XIAO nRF54L15

<!-- 如果您已经刷入了对应的MircroPython固件，可以跳过这一步骤 -->
- Download the firmware package and extract it to the appropriate location. Then click on flash.bat, and it will automatically flash the firmware for you.

    **[Firmware]** [XIAO nRF54L15 MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao54_flash.zip)
<!-- 这里的压缩包填入刷写固件的压缩包 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/MicroPython_firmware_1.png" style={{width:600, height:'auto'}}/></div>

:::tip
This script has preconfigured flashing toolchain commands. If you are using it for the first time, it may take a little time.
:::

**Step 2.** Open Thonny IDE, then click the bottom right corner of the interface to configure the interpreter options. Select MicroPython (generic) and Port

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_boards_1.png" style={{width:600, height:'auto'}}/></div>

**Step 3.** Upload the boards file

- Open the view, select "File", and the file manager path will be displayed on the left sidebar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_boards_2.png" style={{width:600, height:'auto'}}/></div>

- Open the path of the cloned or downloaded file, and open `micropython-seeed-boards\examples`
- Select the "boards" folder and upload it to the flash. Then, you will be able to see the uploaded file on the MicroPython device/flash.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_boards_3.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** Turn on the LED

Copy the code and press `F5` to run it.

```py
import time
from boards.xiao import XiaoPin

led = "led"

try:
    # Initialize LED
    led = XiaoPin(led, XiaoPin.OUT)
    while True:
        # LED 0.5 seconds on, 0.5 seconds off
        led.value(1)
        time.sleep(0.5)
        led.value(0)
        time.sleep(0.5)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    led.value(1)
```

The result is as follows:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

## Digital

### Hardware

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
         <th>Grove - Relay</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

### Software

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/button.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```py
import time
from boards.xiao import XiaoPin

button = "sw"
relay = 0      #D0

try:
    # Initialize button and relay
    button = XiaoPin(button, XiaoPin.IN)
    relay = XiaoPin(relay, XiaoPin.OUT)
    relay.value(0)
    while True:
        # Read button state 
        button_state = button.value()
        
        # Control relay based on button state
        if button_state == 0:       
            relay.value(1)         
        else:                      
            relay.value(0)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    relay.off()
```

Code Explain:

- **Import Modules**
        - `time` Imports the time module
        - `Xiao Pin` Imports the pin control class for the Seeed Xiao development board from the boards.xiao module, which is used to operate the pins on the board.

- **Define Pins**
        - `button = "sw"` Specifies that the button is connected to the "sw" pin of the development board (here, the BOOT pin)
        - `relay = 0` Specifies that the relay is connected to digital pin D0.

- **Main Logic (try block)**
        - When the button is pressed (state is 0) → The relay is activated (output is 1).
        - When the button is not pressed (state is 1) → The relay is deactivated (output is 0).

### Result
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light2.gif" style={{width:500, height:'auto'}}/></div>

## Analog

### Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO nRF54L15 Sense</th>
         <th>Grove-Variable Color LED</th>
     <th>Grove-Rotary Angle Sensor </th>
     <th>Seeed Studio Grove Base for XIAO </th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/adc.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```py
import time
from boards.xiao import XiaoPin, XiaoADC, XiaoPWM

adc = 0    #D0
pwm = 1    #D1

try:
    # Initialize ADC for potentiometer
    adc = XiaoADC(adc)            
    # Initialize PWM for LED control
    pwm = XiaoPWM(pwm)     
    FREQ = 1000                     
    PERIOD_NS = 1000000             
    pwm.init(freq=FREQ, duty_ns=0)  
    # Potentiometer parameters
    MIN_VOLTAGE = 0.0      
    MAX_VOLTAGE = 3.3     
    DEAD_ZONE = 0.05   
    last_duty = -1 
    while True:
        # Read ADC voltage value
        voltage = adc.read_uv() / 1000000  
        
        # Ensure voltage is within valid range
        if voltage < MIN_VOLTAGE:
            voltage = MIN_VOLTAGE
        elif voltage > MAX_VOLTAGE:
            voltage = MAX_VOLTAGE
        
        duty_percent = (voltage - MIN_VOLTAGE) / (MAX_VOLTAGE - MIN_VOLTAGE)
        
        # Apply dead zone to prevent tiny fluctuations
        if abs(duty_percent - last_duty) < DEAD_ZONE / 100:
            time.sleep(0.05)
            continue
        
        # Calculate duty cycle time (nanoseconds)
        duty_ns = int(duty_percent * PERIOD_NS)
        
        # Set PWM duty cycle
        pwm.duty_ns(duty_ns)
        
        # Print current status
        print("Voltage: {:.2f}V, Duty Cycle: {:.1f}%".format(voltage, duty_percent * 100))
        
        # Update last duty cycle value
        last_duty = duty_percent
        
        # Short delay
        time.sleep(0.05)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    pwm.deinit()
```

Code Explain:

- **Import Dependent Libraries**
        - `time`: Used to add delays and control the execution rhythm of the program.
        - `boards.xiao`: Import the hardware control classes of the Xiao development board, including:
        - `XiaoADC`: Used to read analog signals (such as potentiometer output).
        - `XiaoPWM`: Used to generate PWM signals (to control LED brightness).

- **Define Hardware Pins**
        - `adc` corresponds to the D0 pin of the development board (used to connect the output of the potentiometer), and `pwm` corresponds to the D1 pin (used to connect the LED).

- **Initialize Hardware (try block)**
        - `XiaoADC(adc)`: Initialize the D0 pin as an ADC input mode to read the voltage signal of the potentiometer.
        - `XiaoPWM(pwm)`: Initialize the D1 pin as a PWM output mode to control the LED.
        - `PWM Parameters`: A frequency of 1000Hz means the signal period is 1 millisecond (1e6 nanoseconds). The duty cycle (the proportion of the period that the high level lasts) determines the LED brightness (the higher the duty cycle, the brighter the LED).

- **Main Loop (Core Logic)**
        - Read Voltage: Read the voltage output by the potentiometer through ADC (convert the unit to volts).
        - Range Limitation: Ensure the voltage is within 0~3.3V (hardware safety range).
        - Duty Cycle Calculation: Linearly convert the voltage to a duty cycle of 0~1 (for example, 1.65V corresponds to a 50% duty cycle).
        - Dead Zone Handling: Ignore minor voltage fluctuations (such as slight jitter of the knob) to prevent frequent changes in the LED.
        - Control LED: Adjust the LED brightness through the PWM duty cycle (the higher the duty cycle, the brighter the LED).

### Result
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/adc.gif" style={{width:500, height:'auto'}}/></div>

## UART

### Hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>L76K GNSS Module for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/imu.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>code</summary>

```py
from boards.xiao import XiaoUART
import time
import math

uart = "uart1"
baudrate = 9600
tx = 6              # D6
rx = 7              # D7

# Coordinate structure
class Coordinates:
    def __init__(self, Lon=0.0, Lat=0.0):
        self.Lon = Lon
        self.Lat = Lat

# GPS data structure
class GNRMC:
    def __init__(self):
        self.Lon = 0.0      # GPS Longitude
        self.Lat = 0.0      # GPS Latitude
        self.Lon_area = ''  # E or W
        self.Lat_area = ''  # N or S
        self.Time_H = 0     # Time Hour
        self.Time_M = 0     # Time Minute
        self.Time_S = 0     # Time Second
        self.Status = 0     # 1: Successful positioning, 0: Positioning failed

# Convert WGS-84 to GCJ-02
def transformLat(x, y):
    ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(y * pi) + 40.0 * math.sin(y / 3.0 * pi)) * 2.0 / 3.0
    ret += (160.0 * math.sin(y / 12.0 * pi) + 320 * math.sin(y * pi / 30.0)) * 2.0 / 3.0
    return ret

# Convert WGS-84 to GCJ-02
def transformLon(x, y):
    ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * pi) + 20.0 * math.sin(2.0 * x * pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(x * pi) + 40.0 * math.sin(x / 3.0 * pi)) * 2.0 / 3.0
    ret += (150.0 * math.sin(x / 12.0 * pi) + 300.0 * math.sin(x / 30.0 * pi)) * 2.0 / 3.0
    return ret

# Convert GCJ-02 to BD-09
def bd_encrypt(gg):
    bd = Coordinates()
    x = gg.Lon
    y = gg.Lat
    z = math.sqrt(x * x + y * y) + 0.00002 * math.sin(y * x_pi)
    theta = math.atan2(y, x) + 0.000003 * math.cos(x * x_pi)
    bd.Lon = z * math.cos(theta) + 0.0065
    bd.Lat = z * math.sin(theta) + 0.006
    return bd

# Convert WGS-84 to GCJ-02
def transform(gps):
    gg = Coordinates()
    dLat = transformLat(gps.Lon - 105.0, gps.Lat - 35.0)
    dLon = transformLon(gps.Lon - 105.0, gps.Lat - 35.0)
    radLat = gps.Lat / 180.0 * pi
    magic = math.sin(radLat)
    magic = 1 - ee * magic * magic
    sqrtMagic = math.sqrt(magic)
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi)
    dLon = (dLon * 180.0) / (a / sqrtMagic * math.cos(radLat) * pi)
    gg.Lat = gps.Lat + dLat
    gg.Lon = gps.Lon + dLon
    return gg

# Convert to Baidu coordinates (BD-09)
def L76X_Baidu_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    bd09_coords = bd_encrypt(gcj02_coords)
    return bd09_coords

# Convert to Google coordinates (GCJ-02)
def L76X_Google_Coordinates(gps):
    wgs84_coords = Coordinates(gps.Lon, gps.Lat)
    gcj02_coords = transform(wgs84_coords)
    return gcj02_coords

# Parse GNRMC NMEA sentence
def parse_gnrmc(nmea_sentence):
    gps = GNRMC()
    
    if not nmea_sentence.startswith(b'$GNRMC') and not nmea_sentence.startswith(b'$PNRMC'):
        return gps
    
    try:
        # Convert to string and split by commas
        sentence_str = nmea_sentence.decode('ascii', 'ignore')
        fields = sentence_str.split(',')
        
        if len(fields) < 12:
            return gps
        
        # Parse time field (HHMMSS.sss)
        if fields[1]:
            time_str = fields[1]
            if '.' in time_str:
                time_str = time_str.split('.')[0]
            if len(time_str) >= 6:
                gps.Time_H = int(time_str[0:2]) + 8  # GMT+8
                gps.Time_M = int(time_str[2:4])
                gps.Time_S = int(time_str[4:6])
                if gps.Time_H >= 24:
                    gps.Time_H -= 24
        
        # Parse status
        gps.Status = 1 if fields[2] == 'A' else 0
        
        if gps.Status == 1:
            # Parse latitude (DDMM.MMMMM)
            if fields[3] and fields[4]:
                lat_str = fields[3]
                if '.' in lat_str:
                    degrees = float(lat_str[0:2])
                    minutes = float(lat_str[2:])
                    gps.Lat = degrees + minutes / 60.0
                    gps.Lat_area = fields[4]
            
            # Parse longitude (DDDMM.MMMMM)
            if fields[5] and fields[6]:
                lon_str = fields[5]
                if '.' in lon_str:
                    degrees = float(lon_str[0:3])
                    minutes = float(lon_str[3:])
                    gps.Lon = degrees + minutes / 60.0
                    gps.Lon_area = fields[6]
                    
    except Exception as e:
        print("Parse error:", e)
    
    return gps

# Print formatted GPS data
def print_gps_data(gps):
    print("\n--- GPS Data ---")
    print("Time (GMT+8): {:02d}:{:02d}:{:02d}".format(gps.Time_H, gps.Time_M, gps.Time_S))
    if gps.Status == 1:
        print("Latitude (WGS-84): {:.6f} {}".format(gps.Lat, gps.Lat_area))
        print("Longitude (WGS-84): {:.6f} {}".format(gps.Lon, gps.Lon_area))
        
        # Coordinate conversion
        baidu_coords = L76X_Baidu_Coordinates(gps)
        google_coords = L76X_Google_Coordinates(gps)
        
        print("Baidu Latitude: {:.6f}".format(baidu_coords.Lat))
        print("Baidu Longitude: {:.6f}".format(baidu_coords.Lon))
        print("Google Latitude: {:.6f}".format(google_coords.Lat))
        print("Google Longitude: {:.6f}".format(google_coords.Lon))
        print("GPS positioning successful.")
    else:
        print("GPS positioning failed or no valid data.")

try:
    uart = XiaoUART(uart, baudrate, tx, rx)
    # Initialize UART
    uart.init(9600, bits=8, parity=None, stop=1)
    # Buffer to accumulate complete messages
    buffer = bytearray()
    # Constants for coordinate transformation
    pi = 3.14159265358979324
    a = 6378245.0
    ee = 0.00669342162296594323
    x_pi = 3.14159265358979324 * 3000.0 / 180.0
    while True:
        available = uart.any()
        if available > 0:
            # Read all available bytes
            data = uart.read(available)
            buffer.extend(data)
            # Check if we have a complete line (ends with newline)
            if b'\n' in buffer:
                # Find the newline position
                newline_pos = buffer.find(b'\n')
                # Extract the complete message
                complete_message = buffer[:newline_pos + 1]
                # Remove the processed part from buffer
                buffer = buffer[newline_pos + 1:]
                # Parse GNRMC sentences
                if complete_message.startswith(b'$GNRMC') or complete_message.startswith(b'$PNRMC'):
                    gps_data = parse_gnrmc(complete_message)
                    print_gps_data(gps_data)
except KeyboardInterrupt:
    print("\nProgram interrupted by user")
except Exception as e:
    print("\nError occurred: %s" % {e})
finally:
    uart.deinit()
```

</details>

- **Import Modules**
        - `XiaoUART` Imports the UART communication class for the Seeed Xiao development board from the `boards.xiao` module, used to initialize and control serial communication.
        - `time` Imports the time module to support timing-related functions (though not directly used here, it’s imported for potential future use or compatibility).
        - `math` Imports mathematical functions (`sin`, `cos`, `sqrt`, `atan2`, etc.) required for coordinate transformation algorithms.

- **Define UART Configuration**
        - `uart = "uart1"` Specifies the UART controller instance to use — here, `uart1`.
        - `baudrate = 9600` Sets the baud rate for serial communication to 9600 bps.
        - `tx = 6` Specifies that the UART transmit pin (TX) is connected to digital pin D6.
        - `rx = 7` Specifies that the UART receive pin (RX) is connected to digital pin D7.

- **Define Data Structures**
        - `Coordinates` Class: A simple container for storing longitude/latitude values as floating-point numbers.
        - `GNRMC` Class: Represents parsed GPS data from a `$GNRMC` NMEA sentence. Contains:
            - Latitude/Longitude in decimal degrees
            - Hemisphere indicators (`N/S`, `E/W`)
            - Time (hour, minute, second — adjusted to GMT+8)
            - Status flag (1 = valid fix, 0 = no fix)

- **Coordinate Transformation Functions**
        - `transformLat(x, y)` & `transformLon(x, y)` — Helper functions implementing part of the WGS-84 → GCJ-02 conversion algorithm (used in China for map obfuscation).
        - `bd_encrypt(gg)` — Converts GCJ-02 coordinates to Baidu’s BD-09 coordinate system by applying additional offset and rotation.
        - `transform(gps)` — Main function converting WGS-84 (raw GPS) coordinates to GCJ-02 using complex trigonometric formulas based on elliptical Earth model.
        - `L76X_Baidu_Coordinates(gps)` — Wrapper that converts raw GPS (WGS-84) → GCJ-02 → BD-09 (Baidu Maps format).
        - `L76X_Google_Coordinates(gps)` — Wrapper that converts raw GPS (WGS-84) → GCJ-02 (Google Maps format in China).

- **Parse GNRMC Sentence**
        - `parse_gnrmc(nmea_sentence)` — Parses a raw NMEA `$GNRMC` or `$PNRMC` string into structured `GNRMC` object.
            - Extracts time (converts from UTC to GMT+8).
            - Checks status (`A` = active/valid fix, `V` = invalid).
            - Parses latitude/longitude from DDMM.MMMMM format → decimal degrees.
            - Returns populated `GNRMC` object or default empty one if parsing fails.

- **Display Formatted GPS Data**
        - `print_gps_data(gps)` — Prints human-readable GPS info including:
            - Local time (GMT+8)
            - Raw WGS-84 coordinates with hemisphere
            - Converted GCJ-02 (Google-compatible) and BD-09 (Baidu-compatible) coordinates
            - Status message indicating whether positioning succeeded

- **Main Logic (try block)**
        - Initializes UART interface with specified parameters.
        - Defines global constants needed for coordinate math (`pi`, `a`, `ee`, `x_pi`) — Earth ellipsoid parameters and scaling factors.
        - Enters infinite loop to continuously read incoming GPS data via UART.
            - Uses `buffer` to accumulate partial messages until a complete line (ending with `\n`) is received.
            - When a complete line arrives:
                - Checks if it starts with `$GNRMC` or `$PNRMC`
                - If so, parses it using `parse_gnrmc()`
                - Displays formatted output via `print_gps_data()`
        - Handles exceptions:
            - `KeyboardInterrupt`: Gracefully exits on Ctrl+C.
            - General `Exception`: Catches and prints any unexpected errors.
        - Finally, calls `uart.deinit()` to clean up UART resources before exiting.

### Result
<!-- 添加对应GIF图 -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/UART_GPS_2.png" style={{width:800, height:'auto'}}/></div>

## I2C

### Hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/oled.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>Code</summary>

```py
import time
from boards.xiao import XiaoI2C

sda = 4        #D4
scl = 5        #D5
i2c = "i2c0"
frq = 400000
i2c = XiaoI2C(i2c, sda, scl, frq)

# --- SSD1306 I2C address and command definitions ---
SSD1306_I2C_ADDR = 0x3C
SSD1306_SET_CONTRAST = 0x81
SSD1306_DISPLAY_ALL_ON_RESUME = 0xA4
SSD1306_DISPLAY_ALL_ON = 0xA5
SSD1306_NORMAL_DISPLAY = 0xA6
SSD1306_INVERT_DISPLAY = 0xA7
SSD1306_DISPLAY_OFF = 0xAE
SSD1306_DISPLAY_ON = 0xAF
SSD1306_SET_DISPLAY_OFFSET = 0xD3
SSD1306_SET_COM_PINS = 0xDA
SSD1306_SET_VCOM_DETECT = 0xDB
SSD1306_SET_DISPLAY_CLOCK_DIV = 0xD5
SSD1306_SET_PRECHARGE = 0xD9
SSD1306_SET_MULTIPLEX = 0xA8
SSD1306_SET_LOW_COLUMN = 0x00
SSD1306_SET_HIGH_COLUMN = 0x10
SSD1306_SET_START_LINE = 0x40
SSD1306_MEMORY_MODE = 0x20
SSD1306_COLUMN_ADDR = 0x21
SSD1306_PAGE_ADDR = 0x22
SSD1306_COM_SCAN_INC = 0xC0
SSD1306_COM_SCAN_DEC = 0xC8
SSD1306_SEG_REMAP = 0xA0
SSD1306_CHARGE_PUMP = 0x8D

# Display dimensions
SSD1306_WIDTH = 128
SSD1306_HEIGHT = 64
SSD1306_PAGES = 8

# Basic 8x8 font 
font_data = {
    ' ': [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    'A': [0x18,0x24,0x42,0x7E,0x42,0x42,0x42,0x00],
    'B': [0x7C,0x42,0x42,0x7C,0x42,0x42,0x7C,0x00],
    'C': [0x3C,0x42,0x40,0x40,0x40,0x42,0x3C,0x00],
    'D': [0x78,0x44,0x42,0x42,0x42,0x44,0x78,0x00],
    'E': [0x7C,0x40,0x40,0x78,0x40,0x40,0x7C,0x00],
    'F': [0x7C,0x40,0x40,0x78,0x40,0x40,0x40,0x00],
    'G': [0x3C,0x42,0x40,0x4E,0x42,0x42,0x3C,0x00],
    'H': [0x44,0x44,0x44,0x7C,0x44,0x44,0x44,0x00],
    'I': [0x38,0x10,0x10,0x10,0x10,0x10,0x38,0x00],
    'J': [0x1C,0x08,0x08,0x08,0x08,0x48,0x30,0x00],
    'K': [0x44,0x48,0x50,0x60,0x50,0x48,0x44,0x00],
    'L': [0x40,0x40,0x40,0x40,0x40,0x40,0x7C,0x00],
    'M': [0x42,0x66,0x5A,0x42,0x42,0x42,0x42,0x00],
    'N': [0x42,0x62,0x52,0x4A,0x46,0x42,0x42,0x00],
    'O': [0x3C,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'P': [0x7C,0x42,0x42,0x7C,0x40,0x40,0x40,0x00],
    'Q': [0x3C,0x42,0x42,0x42,0x4A,0x44,0x3A,0x00],
    'R': [0x7C,0x42,0x42,0x7C,0x48,0x44,0x42,0x00],
    'S': [0x3C,0x42,0x40,0x3C,0x02,0x42,0x3C,0x00],
    'T': [0x7C,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    'U': [0x42,0x42,0x42,0x42,0x42,0x42,0x3C,0x00],
    'V': [0x42,0x42,0x42,0x42,0x42,0x24,0x18,0x00],
    'W': [0x42,0x42,0x42,0x42,0x5A,0x66,0x42,0x00],
    'X': [0x42,0x24,0x18,0x18,0x18,0x24,0x42,0x00],
    'Y': [0x44,0x44,0x28,0x10,0x10,0x10,0x10,0x00],
    'Z': [0x7E,0x04,0x08,0x10,0x20,0x40,0x7E,0x00],
    '0': [0x3C,0x42,0x46,0x4A,0x52,0x62,0x3C,0x00],
    '1': [0x10,0x30,0x10,0x10,0x10,0x10,0x38,0x00],
    '2': [0x3C,0x42,0x02,0x0C,0x30,0x40,0x7E,0x00],
    '3': [0x3C,0x42,0x02,0x1C,0x02,0x42,0x3C,0x00],
    '4': [0x08,0x18,0x28,0x48,0x7E,0x08,0x08,0x00],
    '5': [0x7E,0x40,0x7C,0x02,0x02,0x42,0x3C,0x00],
    '6': [0x1C,0x20,0x40,0x7C,0x42,0x42,0x3C,0x00],
    '7': [0x7E,0x42,0x04,0x08,0x10,0x10,0x10,0x00],
    '8': [0x3C,0x42,0x42,0x3C,0x42,0x42,0x3C,0x00],
    '9': [0x3C,0x42,0x42,0x3E,0x02,0x04,0x38,0x00],
    '!': [0x10,0x10,0x10,0x10,0x10,0x00,0x10,0x00],
    '?': [0x3C,0x42,0x02,0x0C,0x10,0x00,0x10,0x00],
    '.': [0x00,0x00,0x00,0x00,0x00,0x00,0x10,0x00],
    ',': [0x00,0x00,0x00,0x00,0x00,0x10,0x10,0x20],
    ':': [0x00,0x10,0x00,0x00,0x00,0x10,0x00,0x00],
    ';': [0x00,0x10,0x00,0x00,0x00,0x10,0x10,0x20],
    '-': [0x00,0x00,0x00,0x7C,0x00,0x00,0x00,0x00],
    '_': [0x00,0x00,0x00,0x00,0x00,0x00,0x7E,0x00],
    '+': [0x00,0x10,0x10,0x7C,0x10,0x10,0x00,0x00],
    '*': [0x00,0x24,0x18,0x7E,0x18,0x24,0x00,0x00],
    '/': [0x02,0x04,0x08,0x10,0x20,0x40,0x00,0x00],
    '\\': [0x40,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
    '=': [0x00,0x00,0x7E,0x00,0x7E,0x00,0x00,0x00],
    '\'': [0x10,0x10,0x20,0x00,0x00,0x00,0x00,0x00],
    '"': [0x24,0x24,0x00,0x00,0x00,0x00,0x00,0x00],
    '(': [0x08,0x10,0x20,0x20,0x20,0x10,0x08,0x00],
    ')': [0x20,0x10,0x08,0x08,0x08,0x10,0x20,0x00],
    '[': [0x1C,0x10,0x10,0x10,0x10,0x10,0x1C,0x00],
    ']': [0x38,0x08,0x08,0x08,0x08,0x08,0x38,0x00],
    '{': [0x0C,0x10,0x10,0x60,0x10,0x10,0x0C,0x00],
    '}': [0x30,0x08,0x08,0x06,0x08,0x08,0x30,0x00],
    '<': [0x08,0x10,0x20,0x40,0x20,0x10,0x08,0x00],
    '>': [0x20,0x10,0x08,0x04,0x08,0x10,0x20,0x00],
    '|': [0x10,0x10,0x10,0x10,0x10,0x10,0x10,0x00],
    '@': [0x3C,0x42,0x5A,0x5A,0x5C,0x40,0x3C,0x00],
    '#': [0x24,0x24,0x7E,0x24,0x7E,0x24,0x24,0x00],
    '$': [0x10,0x3C,0x50,0x3C,0x12,0x3C,0x10,0x00],
    '%': [0x62,0x64,0x08,0x10,0x26,0x46,0x00,0x00],
    '^': [0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00],
    '&': [0x30,0x48,0x50,0x20,0x54,0x48,0x34,0x00],
    '~': [0x00,0x00,0x34,0x4C,0x00,0x00,0x00,0x00]
}

# --- Helper functions ---

# Write a single command byte to SSD1306 via I2C
def ssd1306_write_command(cmd):
    i2c.writeto(SSD1306_I2C_ADDR, bytes([0x00, cmd]))

# Write multiple command bytes to SSD1306 via I2C
def ssd1306_write_commands(cmds):
    data = bytearray([0x00] + list(cmds))
    i2c.writeto(SSD1306_I2C_ADDR, data)

# Write display data bytes to SSD1306 via I2C
def ssd1306_write_data(data):
    buffer = bytearray(len(data) + 1)
    buffer[0] = 0x40
    buffer[1:] = data
    i2c.writeto(SSD1306_I2C_ADDR, buffer)

# Clear the entire SSD1306 display
def ssd1306_clear():
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, 0, SSD1306_PAGES - 1]))
    
    empty_data = bytearray(SSD1306_WIDTH)
    for _ in range(SSD1306_PAGES):
        ssd1306_write_data(empty_data)
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

# Initialize SSD1306 display with recommended settings
def ssd1306_init():
    commands = [
        bytearray([SSD1306_DISPLAY_OFF]),
        bytearray([SSD1306_SET_DISPLAY_CLOCK_DIV, 0x80]),
        bytearray([SSD1306_SET_MULTIPLEX, SSD1306_HEIGHT - 1]),
        bytearray([SSD1306_SET_DISPLAY_OFFSET, 0x00]),
        bytearray([SSD1306_SET_START_LINE | 0x00]),
        bytearray([SSD1306_CHARGE_PUMP, 0x14]),
        bytearray([SSD1306_MEMORY_MODE, 0x00]),
        bytearray([SSD1306_SEG_REMAP | 0x01]),
        bytearray([SSD1306_COM_SCAN_DEC]),
        bytearray([SSD1306_SET_COM_PINS, 0x12]),
        bytearray([SSD1306_SET_CONTRAST, 0xCF]),
        bytearray([SSD1306_SET_PRECHARGE, 0xF1]),
        bytearray([SSD1306_SET_VCOM_DETECT, 0x40]),
        bytearray([SSD1306_DISPLAY_ALL_ON_RESUME]),
        bytearray([SSD1306_NORMAL_DISPLAY]),
        bytearray([SSD1306_DISPLAY_ON])
    ]
    
    for cmd in commands:
        ssd1306_write_commands(cmd)
    
    ssd1306_clear()
    print("SSD1306 initialized successfully.")
    ssd1306_write_commands([SSD1306_COLUMN_ADDR, 0, SSD1306_WIDTH - 1])

# Draw a string of text at specified column and page (row) on SSD1306
def ssd1306_draw_text(text, x, y): 
    ssd1306_write_commands(bytearray([SSD1306_COLUMN_ADDR, x, x + len(text) * 8 - 1]))
    ssd1306_write_commands(bytearray([SSD1306_PAGE_ADDR, y, y + 0]))
    
    display_data = bytearray()
    for char in text:
        font_bytes = font_data.get(char.upper(), font_data[' '])
        for col in range(7, -1, -1):
            val = 0
            for row in range(8):
                if font_bytes[row] & (1 << col):
                    val |= (1 << row)
            display_data.append(val)
    
    ssd1306_write_data(display_data)

i2c_addr = i2c.scan()
if SSD1306_I2C_ADDR not in i2c_addr:
    raise Exception("SSD1306 not found on I2C bus")
else:
    print("SSD1306 found on I2C bus: 0x{:02X}".format(SSD1306_I2C_ADDR))

# Initialize display
ssd1306_init()
ssd1306_draw_text("NRF54L15", 30, 2)
ssd1306_draw_text("HELLO WORLD", 20, 4)
```

</details>

Code Explain:

- **Import Modules**
        - `time` Imports the time module to enable time-related functions like delays.
        - `XiaoI2C` Imports the I2C communication class for the Seeed Xiao development board from the `boards.xiao` module, used to initialize and control I2C peripherals.

- **Define I2C Configuration**
        - `sda = 4` Specifies that the SDA (data) line of the I2C bus is connected to digital pin D4.
        - `scl = 5` Specifies that the SCL (clock) line of the I2C bus is connected to digital pin D5.
        - `i2c = "i2c0"` Specifies the I2C controller instance to use — here, it’s `i2c0`.
        - `frq = 400000` Sets the I2C bus frequency to 400 kHz (standard fast mode).
        - `i2c = XiaoI2C(i2c, sda, scl, frq)` Initializes the I2C interface with the specified parameters.

- **Define SSD1306 Constants**
        - `SSD1306_I2C_ADDR = 0x3C` The default I2C address of the SSD1306 OLED display.
        - Various command constants (`SSD1306_SET_CONTRAST`, `SSD1306_DISPLAY_ON`, etc.) define control commands for configuring and controlling the display hardware.
        - `SSD1306_WIDTH = 128`, `SSD1306_HEIGHT = 64`, `SSD1306_PAGES = 8` Define the display resolution and page structure (each page is 8 rows high).

- **Define Font Data**
        - `font_data` A dictionary mapping ASCII characters to their 8x8 pixel bitmap representations. Each character is represented as a list of 8 bytes, where each byte corresponds to one row of pixels (LSB = leftmost pixel).

- **Helper Functions**
        - `ssd1306_write_command(cmd)` Sends a single command byte to the SSD1306 via I2C using control byte `0x00`.
        - `ssd1306_write_commands(cmds)` Sends multiple command bytes in one transaction.
        - `ssd1306_write_data(data)` Sends display data bytes to the SSD1306 using control byte `0x40` (data mode).
        - `ssd1306_clear()` Clears the entire display by writing zero bytes to all pages and columns.
        - `ssd1306_init()` Initializes the SSD1306 display with recommended settings including contrast, multiplex ratio, memory mode, and turning the display on.
        - `ssd1306_draw_text(text, x, y)` Draws text starting at column `x` and page `y`. It converts each character to its 8x8 font bitmap, rotates it 90° clockwise (to match display orientation), and writes the pixel data to the display buffer.

- **Main Logic (Initialization & Display)**
        - `i2c.scan()` Scans the I2C bus to detect connected devices.
        - If the SSD1306 is not found at address `0x3C`, an exception is raised; otherwise, a success message is printed.
        - `ssd1306_init()` Initializes the display hardware.
        - `ssd1306_draw_text("NRF54L15", 30, 2)` Draws the string “NRF54L15” starting at column 30, page 2 (≈ row 16).
        - `ssd1306_draw_text("HELLO WORLD", 20, 4)` Draws the string “HELLO WORLD” starting at column 20, page 4 (≈ row 32).

### Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/i2c_result.png" style={{width:500, height:'auto'}}/></div>

## SPI

### Hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF54L15 Sense</th>
   <th>ePaper Driver Board for Seeed Studio XIAO</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Software

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/micropython-seeed-boards/blob/master/example/imu.py" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>Code</summary>

```py
import time
from boards.xiao import XiaoPin, XiaoSPI

# -------- Pins & SPI --------
RST = 0; CS = 1; DC = 3; BUSY = 5
sck = 9; mosi = 10; miso = 8; spi_id = "spi0"

RST = XiaoPin(RST, XiaoPin.OUT)
CS  = XiaoPin(CS, XiaoPin.OUT)
DC  = XiaoPin(DC, XiaoPin.OUT)
BUSY = XiaoPin(BUSY, XiaoPin.IN, XiaoPin.PULL_UP)
spi = XiaoSPI(spi_id, 20_000_000, sck, mosi, miso)

# -------- ePaper basics --------
def reset():
    RST.value(0); time.sleep_ms(10)
    RST.value(1); time.sleep_ms(10)

def send_command(cmd):
    DC.value(0); CS.value(0)
    spi.write(bytearray([cmd & 0xFF]))
    CS.value(1)

def send_data(data):
    DC.value(1); CS.value(0)
    if isinstance(data, int):
        spi.write(bytearray([data & 0xFF]))
    else:
        spi.write(data)
    CS.value(1)

def wait_until_idle():
    # If BUSY = 0, it indicates that the device is busy. You can then switch back to polling.
    # while BUSY.value() == 0: time.sleep_ms(1)
    time.sleep_ms(1)

def init_display():
    reset()
    send_command(0x00); send_data(0x1F)
    send_command(0x04); time.sleep_ms(100); wait_until_idle()
    send_command(0x50); send_data(0x21); send_data(0x07)

def clear_screen():
    CS.value(0)
    DC.value(0); spi.write(b'\x10'); DC.value(1)
    for _ in range(48000): spi.write(b'\xFF')
    DC.value(0); spi.write(b'\x13'); DC.value(1)
    for _ in range(48000): spi.write(b'\xFF')
    DC.value(0); spi.write(b'\x12'); CS.value(1)
    wait_until_idle()

# -------- Geometry --------
WIDTH, HEIGHT = 800, 480
BYTES_PER_ROW = WIDTH // 8
linebuf = bytearray(BYTES_PER_ROW)

# -------- Minimal 5x7 glyphs (columns, LSB=top) --------
FONT_W, FONT_H = 5, 7
G = {
    ' ':[0x00,0x00,0x00,0x00,0x00],
    # Digits
    '0':[0x3E,0x51,0x49,0x45,0x3E],
    '1':[0x00,0x42,0x7F,0x40,0x00],
    '2':[0x42,0x61,0x51,0x49,0x46],
    '3':[0x21,0x41,0x45,0x4B,0x31],
    '4':[0x18,0x14,0x12,0x7F,0x10],
    '5':[0x27,0x45,0x45,0x45,0x39],
    '6':[0x3C,0x4A,0x49,0x49,0x30],
    '7':[0x01,0x71,0x09,0x05,0x03],
    '8':[0x36,0x49,0x49,0x49,0x36],
    '9':[0x06,0x49,0x49,0x29,0x1E],
    # Uppercase
    'A':[0x7E,0x11,0x11,0x11,0x7E],
    'F':[0x7F,0x09,0x09,0x09,0x01],
    'H':[0x7F,0x08,0x08,0x08,0x7F],
    'I':[0x00,0x41,0x7F,0x41,0x00],
    'L':[0x7F,0x40,0x40,0x40,0x40],
    'M':[0x7F,0x02,0x0C,0x02,0x7F],
    'O':[0x3E,0x41,0x41,0x41,0x3E],
    'P':[0x7F,0x09,0x09,0x09,0x06],
    'R':[0x7F,0x09,0x19,0x29,0x46],
    'T':[0x01,0x01,0x7F,0x01,0x01],
    'X':[0x63,0x14,0x08,0x14,0x63],
    'Y':[0x07,0x08,0x70,0x08,0x07],
    # Lowercase
    'a':[0x20,0x54,0x54,0x54,0x78],
    'c':[0x38,0x44,0x44,0x44,0x20],
    'e':[0x38,0x54,0x54,0x54,0x18],
    'h':[0x7F,0x08,0x04,0x04,0x78],
    'i':[0x00,0x44,0x7D,0x40,0x00],
    'l':[0x00,0x41,0x7F,0x40,0x00],
    'n':[0x7C,0x08,0x04,0x04,0x78],
    'o':[0x38,0x44,0x44,0x44,0x38],
    'p':[0x7C,0x14,0x14,0x14,0x08],
    'r':[0x7C,0x08,0x04,0x04,0x08],
    't':[0x04,0x3F,0x44,0x40,0x20],
    'y':[0x0C,0x50,0x50,0x50,0x3C],
}

def glyph(ch):
    return G.get(ch, G[' '])

# -------- Text helpers --------
def text_size(text, scale=1, spacing=1):
    w = 0
    for _ in text:
        w += (FONT_W * scale + spacing)
    if w: w -= spacing
    return w, FONT_H * scale

def text_pixel(x, y, text, sx, sy, scale=1, spacing=1):
    # Return 0 = Black, 1 = White
    if y < sy or y >= sy + FONT_H * scale:
        return 1
    lx = x - sx
    if lx < 0:
        return 1
    cursor = 0
    for ch in text:
        cw = FONT_W * scale
        if cursor <= lx < cursor + cw:
            cx_scaled = lx - cursor
            cy_scaled = y - sy
            cx = cx_scaled // scale
            cy = cy_scaled // scale
            col = glyph(ch)[cx] 
            bit = (col >> cy) & 1
            return 0 if bit else 1
        cursor += cw + spacing
    return 1

# -------- Stream update --------
def epaper_update_lines(lines):
    CS.value(0)

    # The old picture is completely white.
    DC.value(0); spi.write(b'\x10'); DC.value(1)
    for _ in range(HEIGHT * BYTES_PER_ROW):
        spi.write(b'\xFF')

    # New image: Generated row by row
    DC.value(0); spi.write(b'\x13'); DC.value(1)
    for y in range(HEIGHT):
        bi = 0; bitpos = 7; linebuf[:] = b'\x00' * BYTES_PER_ROW
        for x in range(WIDTH):
            val = 1  # Default white
            for (txt, tx, ty, scale) in lines:
                if text_pixel(x, y, txt, tx, ty, scale) == 0:
                    val = 0
                    break
            if val:
                linebuf[bi] |= (1 << bitpos)  # 1 = white
            bitpos -= 1
            if bitpos < 0:
                bitpos = 7; bi += 1
        spi.write(linebuf)

    # Redresh
    DC.value(0); spi.write(b'\x12'); CS.value(1)
    wait_until_idle()

# -------- Main --------
LINE1 = "XIAO nRF541L15"
LINE2 = "Hello MicroPython"
SCALE1 = 3
SCALE2 = 3

def main():
    init_display()
    clear_screen()

    # Centered layout
    w1, h1 = text_size(LINE1, SCALE1)
    w2, h2 = text_size(LINE2, SCALE2)
    total_h = h1 + 12 + h2  # Line spacing: 12 px
    y0 = (HEIGHT - total_h) // 2
    x1 = (WIDTH - w1) // 2
    x2 = (WIDTH - w2) // 2
    y1 = y0
    y2 = y0 + h1 + 12

    lines = [
        (LINE1, x1, y1, SCALE1),
        (LINE2, x2, y2, SCALE2),
    ]
    epaper_update_lines(lines)

    while True:
        time.sleep(1_000_000)

if __name__ == "__main__":
    main()
```

</details>

Code Explain:

- **Module Import**
        - `time`: Enables time-related functions such as delays.
        - `XiaoPin and XiaoSPI`: Imported from `boards.xiao`; XiaoPin is used to control GPIO pins, while XiaoSPI handles SPI communication.

- **Pin and SPI Configuration**
        - Defined specific pins: Reset (RST), Chip Select (CS), Data/Command (DC), and Busy (BUSY).
        - Configured SPI-related pins (SCK, MOSI, MISO) and the SPI controller.
        - Initialized the working mode (input/output) for all GPIO pins.
        - Created an SPI instance with a set frequency of 20 MHz.

- **ePaper Basic Functions**
        - `reset()`: Executes a hardware reset operation on the display.
        - `send_command(cmd)`: Transmits a single-byte command.
        - `send_data(data)`: Sends data, which can be either a single byte or multiple bytes.
        - `wait_until_idle()`: Waits for the display to enter an idle state (currently implemented with a simple delay).
        - `init_display()`: Performs initialization procedures for the display.
        - `clear_screen()`: Clears the screen, setting it to a full white state.

- **Display Parameters**
        - `WIDTH, HEIGHT = 800, 480`: Specifies the display's resolution.
        - `BYTES_PER_ROW`: Indicates the number of bytes needed for each row of pixels.
        - `linebuf`: A line buffer that temporarily stores pixel data for a single row.

- **Font System**
        - Defined a simple 5x7 pixel font, stored in the `G` dictionary.
        - `glyph(ch)`: Retrieves the pixel data corresponding to a given character.
        - `text_size()`: Computes the dimensions of text when displayed at a specified scaling ratio.
        - `text_pixel()`: Determines if a pixel should be drawn at a specific position (used in text rendering).

- **Display Update**
        - **epaper_update_lines(lines)**: The core function for updating the display.
        - First, sends data to set a full-white background.
        - Then, calculates and transmits new image data row by row.
        - Finally, triggers a display refresh to show the new content.
        - Supports multi-line text display, where each line can have distinct positions and scaling ratios.

- **main() function**
        - Initializes the display.
        - Calculates the centered position for the text.
        - Creates a configuration list for the text lines.
        - Calls `epaper_update_lines()` to update the display content.
        - Enters an infinite sleep loop.

### Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_1.jpg" style={{width:600, height:'auto'}}/></div>

## Automatically execute the program

If you want your abbreviation program to be able to execute automatically, you can follow these steps:

**Step 1.** Create a new program file and use Ctrl + S to save it to the flash memory of the MicroPython device, and name it main.py.

Let's take the blink program as an example here

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/auto_2.png" style={{width:600, height:'auto'}}/></div>

Then it will be displayed under the MicroPython device/flash section.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/auto_3.png" style={{width:600, height:'auto'}}/></div>

**Step 2.** By pressing the on-board Reset button, the automatic execution effect can be achieved.

effct:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light3.gif" style={{width:400, height:'auto'}}/></div>

<!-- :::tip
如果您自己自己定义或封装了模块的py文件，也请一并上传
::: -->

## FAQ

### Bootloader update

If you encounter a situation where you are unable to upload MicroPython programs using Thonny, because the Bootloader used during the factory production was of an older version. 

**Step 1.** Wiring

<div class="table-center">
  <table align="center">
    <tr>
        <th>OpenOCD / JTAG / SWD</th>
        <th>XIAO nRF54L15</th>
    </tr>
    <tr>
        <th>5V</th>
        <th>5V</th>
    </tr>
    <tr>
        <th>GND</th>
        <th>GND</th>
    </tr>
    <tr>
        <th>SWDIO</th>
        <th>SWDIO2</th>
    </tr>
    <tr>
        <th>SWDCLK</th>
        <th>SWDCLK2</th>
    </tr>
    <tr>
        <th>RST</th>
        <th>RST</th>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nrf54_wiring_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Please make sure that the pin connections are correct to prevent the burning process from failing.
:::

**Step 2.** Download the firmware burning program

[xiao_samd11_flash](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_samd11_flash_nrf.zip)

**Step 3.** Run script

Take the Windows system as an example. Unzip the downloaded file, right-click in the folder and open the terminal. Execute **.\xiao_samd11_openocd_flash.bat**. If your wiring is correct, the result will be as shown in the following picture.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/xiao_nrf54.jpg" style={{width:800, height:'auto'}}/></div>

:::tip
On Mac/Linux systems, you need to change **.bat** to **.sh**
:::

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
