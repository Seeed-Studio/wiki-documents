# ArduPy Getting Started

![](https://files.seeedstudio.com/ardupy/ardupy_logo.png)

ArduPy is a combination of **Arduino** and **MicroPython**. MicroPython uses the universal Arduino API to control the hardware so that it can be quickly compatible with new platforms.

At the same time, we provide aip package manager. You can transform your favorite Arduino library into a MicroPython library. Through ArduPy, you can use Python to verify ideas quickly, learn python programming, and learn Open-Source hardware.

For more information, please see [ArduPy](https://github.com/Seeed-Studio/ArduPy).

## Getting Started

### 1. Install the ArduPy IDE

To use ArduPy, we need to use another IDE other than Arduino IDE to compile (and upload) the MicroPython code into our device.

#### Installing Steps

1. Download and install the [Visual Studio Code](https://code.visualstudio.com/Download) IDE according to your OS.

2. Open the **Extensions Market** in VS Code by clicking the **Extensions** on the left panel or use the keyboard shortcut:

      - Keyboard Shortcut: `Shift+CTRL+X` in **Windows** or `Shift+CMD+X` in **Mac Os**.

3. Search **Seeed ArduPy IDE** in the Extension Market.

4. Click **Install** to install the IDE plug-in.

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduPyIDE.gif"/></div>

Once installed the Seeed ArduPy IDE plug-in in VS code, you can start playing with MicroPython!

### 2. Connecting with the Device

1. Connect the device to your PC via a USB cable. 

2. On the Bottom of the VS Code IDE, you should be able to see a **Device Connection (Plug Symbol)**. Click the Device Connection symbol, a window will appear with all the available serial connections.

3. Click on the right serial connection(Your Device) to connect.

    - **Windows**: `COMxx`.

    - **Mac Os**: `/dev/cu.usbmodem14xxxx`.

4. Once connected, a window will appear in the bottom and check if the ArduPy firmware is already loaded into the device.

Choose **Yes** and it will download and load the latest ArduPy firmware onto the device and you can start programming your device in Python Syntax!

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Ardupy-Firmware.png"/></div>

## IDE Basics

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IDE-icons.png"/></div>

Once connected, the device name should appear at the bottom of the IDE and you can use the features to start programming with ArduPy.

**Features(Left to Right):**

- Create a MicroPython Project

- Open the MicroPython Terminal

- Run the MicroPython Project

- Status

### Adding Files

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/AddingFiles.gif"/></div>

To add files to the device using ArduPy, simply click the icon as shown above to choose files from your PC.

### Boot Script

To run a MicroPython script from boot up, simply name your project **`boot.py`** and load the files in the device as methods mentioned above.

## Using aip to include Other ArduPy Libraries(From Arduino Libraries)

Aip is one of the key feature of ArduPy, which can be used to convert Arduino Libraries to Python Interface to be used for ArduPy. Here we provide an example, how to include the ArduPy library into ArduPy Firmware:

**Tip:** We provide few ArduPy library examples on the github page for now, and soon will release tutorials how to convert Arduino libraries to ArduPy Libraries very soon.

!!!Note
        By default, the ArduPy initial firmware only includes **time, Pin, DAC, ADC, PWM and LCD**.

1.**Download** the arduPy-aip tool:

- For [**Windows**](http://files.seeedstudio.com/ardupy/tools/aip.exe).

- For [**Mac Os**](http://files.seeedstudio.com/ardupy/tools/aip_mac).

2.**Open Terminal/Powershell, change the path to the location where you downloaded the ardupy-aip tool**. Run the following to install ardupy libraries.

```sh
./aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

**Note: For Mac OS, please use `chmod +x aip_mac` to obtain permission. Also, use `aip_mac` to replace `aip`**

2.Build the firmware:

```sh
./aip build
```

**Note:** Usage of flashing firmware will appeared at the bottom of build.

3.Flash the "**NEW**" firmware into the board **by copying the usage from end of build**. Here aip will automatically look for the board connected to the PC and upload the firmware. If board is not connected, an error will appear.

```sh
./aip flash
```

<div align=center><img width = 500 src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-n.gif"/></div>

!!!Note
        You can also use `aip build clean` before `aip build` to remove any caches from before to avoid error.

### Example Usage

Once the library is included within the ArduPy firmware and flashed into the device, you can import and use the module as follow:

<div align=center><img width = 500 src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/ur.gif"/></div>

```py
from arduino import grove_ultra_ranger
import time

ur = grove_ultra_ranger(0)

while True:
    print ("The distance to obstacles in front is:", ur.cm, 'centimeter')
    time.sleep(1)
```

### FAQ

For more aip reference, please visit [ardupy-aip](https://github.com/Seeed-Studio/ardupy-aip) to find out more.

## Time and Delay

- Importing time module and delaying:

```py
import time

time.sleep(1)           # Delay for 1 second
time.sleep_ms(500)      # Delay for 500 milliseconds
time.sleep_us(500)      # Delay for 500 microseconds
```

- Using time counter:

```py
import time

time.ticks_ms()          # milliseconds counter
start = time.ticks_us()  # microseconds counter
time.ticks_diff(time.tickus(), start) # Measure the difference between counters
```

**Note:** You can use the **`TAB`** key to auto-suggest and see all the functions available.For example, after typing `time.`, press **`TAB`** to sell all the functions in time.

For more reference, please visit [MicroPython time related functions](https://docs.micropython.org/en/latest/library/utime.html).

## Pin and GPIO

### Pinout Diagram for Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg)

To reference GPIO in ArduPy, simply use the physical pin map of the device that you are using. For example, for Wio Terminal, Pin 1 is 3.3V and Pin 2 is 5V.

- Importing Pin and configuring GPIO:

```py
from machine import Pin
p3 = Pin(3, Pin.OUT)    # Setting Pin 3 as a output pin
p3.on()                 # Setting Pin 3 to HIGH
p3.off()                # Setting Pin 3 to LOW

p3.value(1)             # Setting Pin 3 to HIGH using value method


p5 = Pin(5, Pin.IN)     # Setting Pin 5 as input pin
p5.value()              # Prints the value of the input pin

p3 = Pin(3, Pin.OUT, value=1) # Setting Pin 3 as HIGH in one line
p5 = Pin(5, Pin.IN, Pin.PULL_UP) # Setting Pin 5 as input with pull-up resistors
```

## PWM (Pulse Width Modulation)

To use PWM, you must use the PWM channels on the device. Please refer this back to the device pin map, and indicate where the PWM channels are.

- Using PWM:

```py
from machine import Pin, PWM

pwm0 = PWM(Pin(13))     # Creating PWM Channel on Pin 13
pwm0.freq()             # Current frequency
pwm0.freq(1000)         # Sets the frequency to 1000Hz
pwm0.duty()             # Current duty cycle
pwm0.duty(200)          # Sets the duty cycle to 200
pwm0.deinit()           # Switch off PWM on the pin

pwm1 = PWM(Pin(16), freq=1000, duty=200) # PWM in one line
```

## ADC

To use ADC on the device, you must use the analog pins. For example, Pin 13(A0) on Wio Terminal.

**Note: ADC channel on Wio Terminal is 10 bit(0-1023).**

- Using ADC

```py
from machine import ADC, Pin

adc = ADC(Pin(13))      # Crating ADC on Pin 13
adc.read()              # reading ADC value, 0 ~ 1023
```

## DAC

To use DAC on the device, you must use the DAC pins or PWM pins on the board. For example, Pin 11(DAC0) on Wio Terminal.

**Note: DAC channel on Wio Terminal is 12 bit(0-4095).**

- Using DAC:

```py
from machine import DAC, Pin

dac0 = DAC(Pin(11))      # Creating DAC on Pin 11
dac0.write(512)          # Writing value to DAC, 512/4096*3.3 = 0.4125 V

dac1 = DAC(Pin(26), resolution=10)  # Creating DAC on Pin 26 and using 10 bit resolution
dac1.write(1023)                    # Writing max output to DAC, 3.3V
```

**Note:** When using DAC on PWM pins, the resolution on the channel will be only 8-bit.

```py
# Using DAC om PWM Pins
from machine import DAC, Pin

dac2 = DAC(Pin(16))     # Creating DAC on Pin 16
dac2.write(128)         # Writing value to DAC, 128/255*3.3 = 1.65V
```

## LCD

For Wio Terminal, the TFT LCD display can be used as followed. For more LCD reference, please visit [**ArduPy LCD API Reference**](http://wiki.seeedstudio.com/ArduPy-LCD/).


- Using the LCD module:

```py
from machine import LCD

lcd = LCD()                            # Initialize LCD and turn the backlight
lcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black
lcd.setTextSize(2)                     # Setting font size to 2
lcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green
lcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)
```

Note: Use **`tab`**  to see the available functions.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>