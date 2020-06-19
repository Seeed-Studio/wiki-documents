# ArduPy Get Started

To get started with ArduPy, first need to install **aip - ArduPy Integrated Platform** is a utility to develop ArduPy and interact witch ArduPy board. It enables users to quickly get started with ardupy. **aip** is meant to be a simple command line tool. You can customize your own ardupy firmware through it, without needing to know more details about ArduPy.

## Install with macOS

For macOS user, you can simply run the following in Terminal to install ArduPy-aip:

```sh
pip3 install ardupy-aip
```

**Note:** please make sure that you have installed **Python 3** on macOS. To install Python 3, you can use [**Homebrew**](https://brew.sh/) which is a software package manager for macOS. Once installed Homebrew, run the following to install python 3: **`brew install python3`**. You can also download and install [Python 3 from the official Python website](https://www.python.org/downloads/mac-osx/).


## Install with Windows

You can download the latest versions of ArduPy for windows in the below session. Once downloaded, extract the binary `aip` into a directory that is in your `PATH`.

- [**For Windows 64 Bit**](https://files.seeedstudio.com/ardupy/tools/aip-0.5.0/aip.exe)

Or if you have **Python 3** environment, you can also install using `pip3`:

```sh
pip3 install ardupy-aip
```

## Install with Linux

For Linux user, you can simply run the following in Terminal to install ArduPy-aip:

```sh
pip3 install ardupy-aip
```

**Note:** please make sure you have **Python 3** installed and `pip3` is up to date.

## Quick Start with ArduPy

Once you have installed Ardupy-aip you can do the followings to get started your first ArduPy project very quickly!

- **STEP.1 Build the firmware**

For **Wio Terminal**, run:

```py
aip build --borad=wio_terminal
```

For **Seeeduino XIAO**, run:

```py
aip build --board=xiao
```

!!!Note
        This command download and extracts all the required files and may take some time. Please be patient.

- **STEP.2 Flash the ArduPy firmware to the device**

```py
aip flash
```

- **STEP.3 Enter REPL mode**

Run the following to enter repl mode:

```py
aip shell -c "repl"
```

Copy the following code to the repl shell-based terminal:

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT)

while True:
    LED.on()
    time.sleep(1)
    LED.on()
    time.sleep(1)
```

Now you should see your device starts to blink! Check the below sections to find out more about ArduPy!

## ArduPy-aip CLI

`aip` is a command-line interface for ArduPy, you can use aip to install ArduPy libraries, build and flash ArduPy firmware to hardware with ease. Simply use `help` to get more information:

```sh
aip help
```

<div align=center><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-help.png"/></div>

- To get board information (firmware info.):

```sh
aip board
```

- To install Arduino libraries binding with ArduPy:

Please check here for the available [**ArduPy libraries**](https://github.com/Seeed-Studio?q=seeed-ardupy&type=&language=).

```sh
aip install <ArduPy Library Path> 
# Example Usage: 
# aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- To uninstall ArduPy libraries:

```sh
aip uninstall <ArduPy Library Path> 
# Example Usage: 
# aip uninstall Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- To build ArduPy Firmware contains the libraries you installed and the basic ArduPy features. Note that, you can now choose to build for [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) or [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) now!

```sh
aip build --board=<board>
# For Seeeduino XIAO:
# aip build --board=xiao
# For Wio Terminal:
# aip build --board=wio_terminal
```

**Note:** You can also use `aip build -list` to check the available boards.

- To list installed ArduPy Libraries

```sh
aip list
```

- To flash ArduPy Firmware into hardware:

```sh
aip flash
```

!!!Note
        After commands, you use `-h` flags to see more usage for that command. For example, `aip flash -h`.

- To interact with the board (shell-based file explorer):

```sh
aip shell
```

**Note:** Once entered the ardupy-mpfshell, you can use `help` for more information and commands.

- Entering **REPL** mode:

```sh
aip shell -c "repl"
```

<div align=center><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-shell.png"/></div>

- To run Python file:

```sh
aip shell -n -c "runfile <YourPythonFilePath> [Path]"
# Example Usage:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ur.py"
```

- To load files into the board using shell:

```sh
aip shell -n -c "put <YourPythonFilePath> [Path]"
# Example Usage:
# aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

### Running your First Script

Once flashed the ArduPy firmware, there should be a USB drive named **`ARDUPY`** appear in your PC. You can create the following Python files to get started.

- **`boot.py`**

To run a MicroPython script from boot up, simply name your project **`boot.py`** in the root location of the board. **This script is executed when the device boots up.**

- **`main.py`**

This is the default python script, but this does not run on boot up. The `main.py` runs when `main.py` has changes saved to it. i.e. it can auto reload.

### Usage under ardupy-mpfshell

Once entered ardupy-mpfshell, use `help` to check commands usage. Here listed some useful commands:

- To list files on the deivces:

```sh
ls
```

- To remove a file (or a directory) on the device:

```sh
rm <File/Directory>
```

- To upload e.g. the local file `boot.py` to the device:

```sh
put <YourPythonFilePath> [Path]
```

- To execute the files i.e. `test.py` on the device:

```sh
execfile test.py
```

<div align=center><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-mpfshell.png"/></div>

## Using aip to include Other ArduPy Libraries Example

`aip` is one of the key feature of ArduPy, which can be used to convert Arduino Libraries to Python Interface to be used for ArduPy. Here we provide an example, how to include the ArduPy library into ArduPy Firmware using Wio Terminal:

1.Open Terminal/Powershell, run the following to install ardupy libraries.

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

2.Build the firmware:

```sh
aip build --board=wio_terminal
```

**Note:** Usage of flashing firmware will appeared at the bottom of build.

3.Flash the "**NEW**" firmware into the board **by copying the usage from end of build**. Here aip will automatically look for the board connected to the PC and upload the firmware. If board is not connected, an error will appear.

```sh
aip flash
```

<div align=center><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-new.gif"/></div>

#### Library Example Usage

Once the library is included within the ArduPy firmware and flashed into the device, you can import and use the module as follow:

```sh
aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

>Replace `/Users/ansonhe/Desktop` to your path.

where the `ur.py` is:

```py
from arduino import grove_ultra_ranger
import time

ur = grove_ultra_ranger(0)

while True:
    print ("The distance to obstacles in front is:", ur.cm, 'centimeter')
    time.sleep(1)
```

For more reference, please check the [seeed-ardupy-ultrasonic-sensor](https://github.com/Seeed-Studio/seeed-ardupy-ultrasonic-sensor).

### FAQ

For more aip reference, please visit [ardupy-aip](https://github.com/Seeed-Studio/ardupy-aip) to find out more.

---

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

### Pinout Diagram for Seeeduino XIAO

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg)

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

## Map

To make it easier access to the Boards peripherals，ArduPy has mapped the same calling methods from Arduino:

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT) # Setting builtin LED as output

while True:
    LED.on()
    time.sleep(1)
    LED.on()
    time.sleep(1)
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

For Wio Terminal, the TFT LCD display can be used as followed. For more LCD reference, please visit [**ArduPy LCD API Reference**](https://wiki.seeedstudio.com/ArduPy-LCD/).


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

---

## IDE Getting Started

>**Note:** The IDE methods of invoking ArduPy will be **depreciated** soon, we recommend to use the **CLI** method.

### 1. Install the ArduPy IDE

To use ArduPy, we need to use another IDE other than Arduino IDE to compile (and upload) the MicroPython code into our device.

#### Installing Steps

1. Download and install the [Visual Studio Code](https://code.visualstudio.com/Download) IDE according to your OS.

2. Open the **Extensions Market** in VS Code by clicking the **Extensions** on the left panel or use the keyboard shortcut:

      - Keyboard Shortcut: `Shift+CTRL+X` in **Windows** or `Shift+CMD+X` in **Mac Os**.

3. Search **Seeed ArduPy IDE** in the Extension Market.

4. Click **Install** to install the IDE plug-in.

Once installed the Seeed ArduPy IDE plug-in in VS code, you can start playing with MicroPython!

### 2. Connecting with the Device

1. Connect the device to your PC via a USB cable. 

2. On the Bottom of the VS Code IDE, you should be able to see a **Device Connection (Plug Symbol)**. Click the Device Connection symbol, a window will appear with all the available serial connections.

3. Click on the right serial connection(Your Device) to connect.

    - **Windows**: `COMxx`.

    - **Mac Os**: `/dev/cu.usbmodem14xxxx`.

4. Once connected, a window will appear in the bottom and check if the ArduPy firmware is already loaded into the device.

Choose **Yes** and it will download and load the latest ArduPy firmware onto the device and you can start programming your device in Python Syntax!

## IDE Basics

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

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>