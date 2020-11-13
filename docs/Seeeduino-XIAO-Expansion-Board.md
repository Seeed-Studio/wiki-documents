---
name: Seeeduino XIAO Expansion Board
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 103030356
tags:
---


<div align=center><img width = 550 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/></div>

<p style="text-align:center"><a href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 


A powerful functional expansion board for Seeeduino XIAO of only half Raspberry Pi 4 size. It enables build prototype and project in easy and quick way. With its rich peripherals including OLED, RTC, expandable memory, passive buzzer, RESET/User button, 5V servo connector, multiple data interfaces… you could explore infinite possibilities of Seeeduino XIAO. Circuit python is also well supported by this board.




## **Features**

- **Quick Prototyping:** Easy debug and Reset with RESET button and SWD pin led out to male header. 0.96”OLED, enables visual data display without PC serial monitor; Convenient plug and play Grove connectors support multiple data protocols, including IIC, Uart, Analog/Digital; No soldering needed with all pin led out.

- **Rich peripherals:** OLED display, RTC, expandable memory space, passive buzzer, user button, on board battery management chip… One board on hand to explore infinite possibilities of Seeeduino XIAO. 

- **No Soldering Needed:** All pin led out. Convenient plug and play Grove connectors support multiple data protocols, including IIC, Uart, Analog/Digital.

- **Circuit Python Supported:** Well supports circuit python. Mini SD card slot enables memory space expand, making it possible to allocate more libraries needed in prototyping and project building.

- **Mini Size:** Compact and elegant with only half Raspberry Pi 4 size, especially suitable for projects require mini size.




## **Specification**

|Item|Value|
|---|---|
|Operating voltage|5V / 3.7V Lithium Battery|
|Charging current| 460mA (Max)|
|RTC timer precision|± 1.5S/DAY(25°C)|
|RTC battery|CR1220|
|Display|0.96" OLED display|
|Expandable memory|mini SD card|
|Grove Interface|Grove IIC*2, Grove UART*1, A0/D0 Grove*1|
|Other External Equipment|Passive buzzer, user button, 5V servo connector|


## **Applications**

- SWD debug
- Rapid prototyping
- Data display
- Mini Size Project

## **Part List** 

|Item|Value|
|---|---|
|SeeeduinoXIAO Expansion Board  | *1 |



!!!Note
    This product does not include Seeeduino XIAO and battery, please click this link to get [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html?gclid=Cj0KCQjwufn8BRCwARIsAKzP695mYBI8wwzrR8rXiJgv9QBK5DeTJGCU9bzXvzGUheFVZxqHcuw0SgYaAqDqEALw_wcB)




## **Getting Started**


### **Materials Required**

| Seeeduino XIAO | Seeeduino XIAO Expansion board|
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| <div align=center><img width = 210 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/></div>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)|


### **Hardware Overview**


<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/2222222222222222222222222222221.jpg"/></div>

There are an external SD card slot and RTC Battery Holder, the SD card mostly is used for saving and run the `python.py` file, the RTC is for tracks the current time and can be used to program actions at a specific time.  

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/1111111111111111111111110.jpg"/></div>

<div align=center><img width = 350 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO_size.png"/></div>



### **Pinout Diagram**

External headers-pin description for Grove-Shield for Seeeduino XIAO.

<div align=center><img width = 850 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/55555555555555555.png"/></div>


## **Expansion Board Usage**



### **Connection**

Put the XIAO board on the expansion board, the XIAO green LED should light up. If you want to know more about Seeeduino XIAO, please click [**Seeeduino XIAO detail**](https://wiki.seeedstudio.com/Seeeduino-XIAO/).
<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png"/></div>



## **Battery usage**

The Seeeduino XIAO expansion board can be powered by a battery, so if you do some demo that needs to be moved, that battery will help you to solve the power supply issue. when you plug the battery please watch out for the positive and negative anodes, follow the picture to connect the battery in case of damage the 

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/battery-board.png"/></div>

In addition, the board charged the battery when you plug the battery cable and the type-C cable and switch the button to on. 

As the below picture, if the LED flashing which means the battery does not charge or the board does not connect battery if the LED keeps light on which is mean the battery is charging.
 

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO_flash_light.png"/></div>


## **Modules on the expansion board**


Rich peripherals on board including:

- **OLED display:** Visual data display without connecting to PC, which enables debug in a more efficient way, and builds application such as a sensor hub, data monitor system, etc.

- **RESET button:** No more jumper wire and short circuit, easy reset with just one click. 

- **SWD debug:** SWD pin led out as male pin header, making debugger connection and firmware download much easier.

- **High precision RTC:** High precision real-time clock with battery backup, enable maintain accurate time when the main power is turned off.

- **Expandable memory:** With a mini-SD card slot on the back, no worry on memory limit any more when adding libraries and using circuit python.

- **User button:** Besides the RESET button, also provide with another user-defined button.

- **Passive buzzer:** Same passive buzzer on Wio Terminal, with which you could change the PMW frequency to award different beep sound to get a "buzzer music".

- **Grove connectors:** All pin led out, plug and play grove connectors support common data protocols (Grove IIC*2, Grove UART*1, A0/D0 Grove*1)

- **Lipo Battery Charging:** JST2.0mm standard lipo battery connector and battery management system, supports both USB and lipo battery power supply, and easy onboard battery recharge.

- **5V servo connector:** 5V output led out to male header for 5V servo and sensor connection.


<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/444.png"/></div>

### **OLED Display**

This example introduces how to use the OLED display on the XIAO expansion board.

<div align=center><img width = 550 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Hello_world11.jpg"/></div>

**Step 1**. Install the Seeeduino XIAO on the Expansion board then conect the Type-C cable

**Step 2**. Install the [**u8g2**](https://github.com/olikraus/u8g2) library, this is the guide [**how to install the library**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/). 

**Step 3**. Copy the code and stick on the Ardiono IDE then uploard it.

**OLED Code**

```CPP
#include <Arduino.h>
#include <U8x8lib.h>
 
 U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
 
// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display
 
void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}
 
void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
} 
```

### **LED control by User Button**

This example introduces how to use the button on the XIAO expansion board to control the LED on the Seeeduino XIAO. 

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/LED_botton.gif"/></div>

**Step 1**. Install the Seeeduino XIAO on the Expansion board then conect the Type-C cable

**Step 2**. Open Arduino IDE, Copy the code and stick on the Ardiono IDE then uploard it.

**Code**

```CPP
const int buttonPin = 1;     // the number of the pushbutton pin
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(LED_BUILTIN, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);

}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(LED_BUILTIN, HIGH);
  } else {
    // turn LED off:
    digitalWrite(LED_BUILTIN, LOW);
  }

}
```

### **Buzzer**

The Buzzer is default connected to the Pin A3, if you want to remove the buzzer function, just follow the below picture, cut off the line.


<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/111123232325.png"/></div>

#### **Play Song with Passive Buzzer**

This example uses Buzzer on the XIAO expansion board to play Happy birthday.

**Step 1**. Install the Seeeduino XIAO on the Expansion board then conect the Type-C cable

**Step 2**. Open Arduino IDE, Copy the code and stick on the Ardiono IDE then uploard it.

**Code**    

```CPP
int speakerPin = A3;
int length = 28; // the number of notes
char notes[] = "GGAGcB GGAGdc GGxecBA yyecdc";
int beats[] = { 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16 };
int tempo = 150;
void playTone(int tone, int duration) {
  for (long i = 0; i < duration * 1000L; i += tone * 2) {
    digitalWrite(speakerPin, HIGH);
    delayMicroseconds(tone);
    digitalWrite(speakerPin, LOW);
    delayMicroseconds(tone);
  }
}

void playNote(char note, int duration) {
  char names[] = {'C', 'D', 'E', 'F', 'G', 'A', 'B',
                  'c', 'd', 'e', 'f', 'g', 'a', 'b',
                  'x', 'y'
                 };
  int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014,
                  956,  834,  765,  593,  468,  346,  224,
                  655 , 715
                };
  int SPEE = 5;

  // play the tone corresponding to the note name

  for (int i = 0; i < 17; i++) {
    if (names[i] == note) {
      int newduration = duration / SPEE;
      playTone(tones[i], newduration);
    }
  }
}

void setup() {
  pinMode(speakerPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < length; i++) {
    if (notes[i] == ' ') {
      delay(beats[i] * tempo); // rest
    } else {
      playNote(notes[i], beats[i] * tempo);
    }
    // pause between notes
    delay(tempo);
  }
}
```

### **Servo Control by Rotary Angle Sensor**

This example uses a rotary angle sensor to control servo via integration ports on the XIAO expansion board.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/rotary_servo.gif"/></div>

**Step 1**. Install the Seeeduino XIAO on the Expansion board then conect the Type-C cable

**Step 2**. Connect the Servo cable to **I2C** port, rotary angle sensor to **D0**

**Step 3**. Open Arduino IDE, Copy the code and stick on the Ardiono IDE then uploard it.

```CPP
#include <Servo.h>
#define ROTARY_ANGLE_SENSOR A0
#define ADC_REF 3 //reference voltage of ADC is 3v.If the Vcc switch on the seeeduino
#define GROVE_VCC 3 //VCC of the grove interface is normally 3v
#define FULL_ANGLE 300 //full value of the rotary angle is 300 degrees

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  Serial.begin(9600);
  pinMode(ROTARY_ANGLE_SENSOR, INPUT);
  myservo.attach(5);  // attaches the servo on pin 9 to the servo object
}

void loop() {

  float voltage;
  int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
  voltage = (float)sensor_value * ADC_REF / 1023;
  float degrees = (voltage * FULL_ANGLE) / GROVE_VCC;
  Serial.println("The angle between the mark and the starting position:");
  Serial.println(degrees);
  delay(50);
  myservo.write(degrees); 
}
```

### **RTC clock display**

This example uses RTC to display the clock on the OLED.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/time_clock.gif"/></div>

**Step 1**. Install the Seeeduino XIAO on the Expansion board then conect the Type-C cable

**Step 2**. Install the [**u8g2**](https://github.com/olikraus/u8g2) and [**PCF8563**](https://github.com/lewisxhe/PCF8563_Library) library, this is the guide [**how to install the library**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/). 

**Step 3**. Copy the code and stick on the Ardiono IDE then uploard it.

```CPP
#include <Arduino.h>
#include <U8x8lib.h>
#include <PCF8563.h>
PCF8563 pcf;
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
//U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup() {
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
  pcf.init();//initialize the clock
  pcf.stopClock();//stop the clock
  pcf.setYear(20);//set year
  pcf.setMonth(10);//set month
  pcf.setDay(23);//set dat
  pcf.setHour(17);//set hour
  pcf.setMinut(33);//set minut
  pcf.setSecond(0);//set second
  pcf.startClock();//start the clock
}

void loop() {
  Time nowTime = pcf.getTime();//get current time
  u8x8.setFont(u8x8_font_chroma48medium8_r);   // choose a suitable font

  u8x8.setCursor(0, 0);
  u8x8.print(nowTime.day);
  u8x8.print("/");
  u8x8.print(nowTime.month);
  u8x8.print("/");
  u8x8.print("20");
  u8x8.print(nowTime.year);
  u8x8.setCursor(0, 1);
  u8x8.print(nowTime.hour);
  u8x8.print(":");
  u8x8.print(nowTime.minute);
  u8x8.print(":");
  u8x8.println(nowTime.second);
  delay(1000);
}
```




## **Circuitpython on Seeeduino XIAO with expansion board**


This wiki introduce how to install and run the official [**CircuitPython**](https://circuitpython.org/) by Adafruit Industries on the [**Seeeduino XIAO development board**](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html) !

CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. For more info, please refer to [**here**](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).


## **Installing CircuitPython**

**Step 1.** Install the Seeeduino XIAO on the Expansion board then conect the Type-C cable

**Step 2.** Download the official [**CircuitPython Bootloader for Seeeduino XIAO**](https://circuitpython.org/board/seeeduino_xiao/). A `.uf2` , the flie will be store in your PC download.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circutpyhthon.png"/></div>

**Step 3.** Entering the DFU bootloader mode by press the reset button twice quickly on the XIAO expansion board, then your PC will appear Arduino drive.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/reboot_XIAO.gif"/></div>

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/arduino_boot.png"/></div>

**Step 4.** An external drive named `Arduino` should appear in your PC. Drag the downloaded CircuitPython uf2 files to the `Arduino` drive.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python_to_arduino.png"/></div>


**Step 5.** Once loaded the CircuitPython bootloader, unplug the USB Type-C and re-connect. A new external drive called `CIRCUITPY` should appear.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Circuitpy.png"/></div>

**Step 6.** Now, CircuitPython is loaded on Seeeduino XIAO! All you need to do it's to write you python program and name it `main.py` and drag it onto the `CIRCUITPY` drive.


### **CircuitPyhton Basics**

Running `Blink` using CircuitPython:

**Note:** Simply copy and save the following code and name it `main.py`, and drag it to `CIRCUITPY` drive.

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.D13)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

You should see the built-in LED starts to blink!


### **SD card for circuitpython**

The Seeedruino XIAO build-in about 40 KB flash, but it may have not enough space to store the large size code file, so we add an SD card slot to plug the SD card to extend the space. 

**Step 1.** Preper a SD Card plug in the XIAO expansion board

**Step 2.** Downloard the [**circuitPython file**](https://circuitpython.org/board/seeeduino_xiao/). Please refer to **Installing CircuitPython** chapter to learn how to use circuitpython.

**Step 3.** Download [**lib**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/lib.zip) unzips the file, then replace it with the new lib in the  `CIRCUITPY`.

**Step 4.** Add the [**main.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/main.py) file in the `CIRCUITPY` drive.

```CPP
import sd    
f = open("/sd/hello.txt", "r")   ## read the file from SD card
print(f.read())
```

**Step 5.** Add [**sd.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/sd.py) file in the `CIRCUITPY` drive.

```CPP
import os
import adafruit_sdcard
import board
import busio
import digitalio
import storage
import sys

# Connect to the card and mount the filesystem for Seeeduino XIAO.
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs = digitalio.DigitalInOut(board.D2)
sdcard = adafruit_sdcard.SDCard(spi, cs)
vfs = storage.VfsFat(sdcard)
storage.mount(vfs, "/sd")
sys.path.append("/sd")
sys.path.append("/sd/lib")  ## switch to the path to SD card
```

**Example**

This example for test the buzzer via the circuitpyhton, as the below picture: the [**buzzer.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py) and txt file have store in the SD card.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python.png"/></div>

If you want to run the **buzzer.py** file, please follow this instruction: `CIRCUITPY` **->**  **main.py**  **->**  **add import buzzer**  **->**  if you want to read **hello.txt** just follow as below picture

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/add_buzzer.png"/></div>


!!!Note
    If you want to run another python file in SD, please imitate the example.








## **Demo**


### **Project 1 - Remote control fan**



**Overview**

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif"/></div>

This wiki introduce how to make a Mini fan to plase on your room keep cool.

**Feature**

- Automatic swing fan

**Component required**

- [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)


- [**Seeeduino XIAO expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)


- [**Grove mini fan**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-Servo**](https://www.seeedstudio.com/Grove-Servo.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**Hardware Connection**

Please follow the same color line to connect each sensor on the board. Please connect the fan grove cable to D0, servo grove cable to **I2C**, IR grove cable to **D7**.


<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_fan_pic.png"/></div>



**Arduino Instructions**

**Step 1**. Follow the connection picture connect all the sensor on the board.

**Step 2**. Install the [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) library, this is the guide [**how to install the library**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

**Step 4**. Copy the code stick on the Aruino IDE then upload it.

**Step 5**. Place the Fan in the safety position, try to press the button make sure it can work safely.



**Code**

```CPP
#include <IRremote.h>
#include <Servo.h>
 
Servo myservo;  // create servo object to control a servo
int RECV_PIN = 7; // set pin 2 as IR control
 
IRrecv irrecv(RECV_PIN);
 
decode_results results;
 
int pos = 90;    // variable to store the servo position
int fanPin = 0;  // set D6 as control switch
int fanState = LOW;
int IO = 0;
 
void setup()
{
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  Serial.println("Enabled IRin");
  myservo.attach(5);  // attaches the servo on pin 2 to the servo object
  pinMode(fanPin, OUTPUT);
 
}
 
void loop() {
  if (irrecv.decode(&results)) { //checking IR signal
    if (results.value == 2155829415) {    // Power off/on
      IO++;
      if (IO % 2 == 0) {
        fanState = HIGH;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
      else {
        fanState = LOW;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
    }
 
    if (results.value == 2155821255 ) {    // fan swing to left
      for (pos; pos <= 89; pos += 1) { // goes from 0 degrees to 90 degrees
        // in steps of 1 degree
        myservo.write(pos);              // tell servo to go to position in variable 'pos'
 
        delay(40);                       // waits 15ms for the servo to reach the position
        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155870215)
            break;
        }
      }
    }

    if (results.value == 2155870215 ) {    // fan swing to right
      for (pos; pos >= 1; pos -= 1) { // goes from 90 degrees to 0 degrees
        myservo.write(pos);              // tell servo to go to position in variable 'pos'
        delay(40);                       // waits 15ms for the servo to reach the position
 
        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155821255)
            break;
        }
      }
    }
    Serial.println(pos);
    Serial.println(results.value, HEX);
    Serial.println(results.value);
    irrecv.resume();                    //recive next intrustion
  }
  delay(100);
}
```



### **Project 2 - Remote control car**



**Overview**

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif"/></div>

This wiki introduce how to make a remote control car.

**Feature**

- Mini size car easy to across the narrow road

**Component required**

- [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)


- [**Seeeduino XIAO expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)


- [**Grove - I2C Mini Motor Driver**](https://www.seeedstudio.com/Grove-I2C-Mini-Motor-Driver.html)
- [**DC Motor**](https://www.seeedstudio.com/130-DC-Motor-p-2023.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**Hardware Connection**

Please follow the same color line to connect each sensor on the board. Please connect the IR sensor grove cable to D0, Mini Motor Driver grove cable to I2C.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_car.jpg"/></div>

 

**Arduino Instructions**

**Step 1**. Follow the connection picture connect all the sensor on the board.

**Step 2**. Download the [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**Step 3**. Install the [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) and [**Motor driver**](https://github.com/Seeed-Studio/Drv8830_Motor_Driver) library, this is the guide [**how to install the library**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

**Step 4**. Copy the code stick on the Aruino IDE then upload it.


**Code**

```CPP
#include <Arduino.h>
#include <U8g2lib.h>
#include <IRremote.h>
#include <SparkFunMiniMoto.h>  // Include the MiniMoto library
// Create two MiniMoto instances, with different address settings.
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)

#define FAULTn  1     // Pin used for fault detection.

int RECV_PIN = 0; // set pin 2 as IR control
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup() {
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // remind enabling IR
  irrecv.enableIRIn(); // Start the receiver
  pinMode(FAULTn, INPUT);
}

void loop() {
  if (irrecv.decode(&results)) { //checking IR signal
    if (results.value == 2155862055) {
      //Forward  2155862055
      motor0.drive(-600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155813095) {
      //Brake   2155813095
      motor0.brake();
      motor1.brake();
      delay(100);
    }
    if (results.value == 2155823295) {
      //backward  2155823295
      motor0.drive(600);
      motor1.drive(-600);
      delayUntil(20);
    }
    if (results.value == 2155829415) {
      //Stop  2155829415
      motor0.stop();
      motor1.stop();
      delay(100);
    }
    if (results.value == 2155821255) {
      //turn right   2155821255
      motor0.drive(600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155837575) {
      //turn left    2155837575
      motor0.drive(-600);
      motor1.drive(-600);
      delayUntil(20);
    }
    irrecv.resume();                    //recive next intrustion

  }
  delay(100);
}

void delayUntil(unsigned long elapsedTime) {
  unsigned long startTime = millis();
  while (startTime + elapsedTime > millis()) {
    if (digitalRead(FAULTn) == LOW) {
      byte result = motor0.getFault();
      result = motor1.getFault();
    }
  }
}
```




## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>