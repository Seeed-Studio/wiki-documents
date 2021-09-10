
# **XIAO RP2040 with Arduino**

## **Getting Started**

## **Playing with Arduino**

## **Hardware**

Materials required

- XIAO RP2040 x1
- Computer x1
- USB typc cable x1

!!!Tip
    Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

- Step 1. Prepare a XIAO RP2040 and a Type-C cable.
- Step 2. First hold down the BOOT button, Then connect the XIAO RP2040 to your computer.Then the red power LED should go on.

## **Software**

!!!Note
    If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).

- **Step 1. You need to Install an Arduino Software**

<p style=":center"><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.

!!!Note
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.

- **Step 2. Open the Blink example**

Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png)

- **Step 3. Add XIAO RP2040 to your Arduino IDE**

Click on **File > Preference**, and fill Additional Boards Manager URLs with the url below: 

https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Boardurl.png)

Click **Tools-> Board-> Boards Manager...**, print keyword "**XIAO RP2040**" in the searching blank. Here comes the "Seeed XIAO RP2040". Install it.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl2.png)

- **Step 4. Select your board and port**

After installing the board, click **Tools-> Board**, find "**XIAO RP2040**" and select it. Now you have already set up the board of XIAO RP2040 for Arduino IDE.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl3.png)

Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png)

- **Step 5.Upload the program**

Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png)

A few seconds after the upload finishes, you should see the pin 25 (USER) LED on the board start to blink (in green). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.

!!!Note
    If uploading the Arduino program fails, try holding down the "BOOT" button and then clicking the "RUN" button. At this point, XIAO RP2040 will enter boot mode (your computer will load a removable disk), and you will be able to upload the Arduino program again.

## **Pin Multuiplexing**

We don't need to configure the pins ourselves, after using the pins, you can call a function directly.

**Digital Input and Output**

 - Use pin 0 as the digital pin:

!!!warning:
    Please note that the operating voltage of the XIAO RP2040 is 3.3V, if you connect the sensor to 5V incorrectly, the motherboard may not work properly.

```c++
const int buttonPin = D0;     // the number of the pushbutton pin
const int ledPin =  25;      // the number of the LED pin
 
int buttonState = 0;         // variable for reading the pushbutton status
 
void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}
 
void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
 
  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED off:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED on:
    digitalWrite(ledPin, LOW);
  }
}
```
**AnalogRead**

 - Use pin 0 as the analog pin:

```c++
const int sensorPin = A0;
const int ledPin =  25; 
void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
}
 
void loop() {
  // read the value from the sensor:
int sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

**Serial**

 - Use pin 6 as the TX pin of UART(RX pin of UART is pin 7):

```c++
void setup() {
    Serial.begin(115200);
    while (!Serial);
}
 
void loop() {
    Serial.println("Hello,World");
    delay(1000);
}
```

**RGB LED**

- Pin11 is the enable pin of RGB LED. Pull the Pin11 high. Then you can control the PIN12 (RGB LED) to light up.

Search for the "Adafruit_NeoPixel" library in Ardunio library Manager and install it.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png)

```c++
#include <Adafruit_NeoPixel.h>

int Power = 11;
int PIN  = 12;
#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
  pinMode(Power,OUTPUT);
  digitalWrite(Power, HIGH);

}

void loop() { 
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  delay(400);
  pixels.show();
  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  delay(400);
  pixels.show();
  delay(500);

}
```

**I2C**

 - Use pin 5 as the SCL pin of IIC(SDA pin of IIC is pin 4)
 - **Hardware**：[Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) x1

**Wiring**: 

**VCC>====<VCC**

**GND>====<GND**

**SDA>====<Pin 4**

**SCL>====<Pin 5**

Search for the "U8G2" library in Ardunio library Manager and install it.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png)

```c++
#include <Arduino.h>
#include <U8g2lib.h>
 
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  u8g2.begin();
}
 
void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font
  u8g2.drawStr(0,10,"Hello Wrold!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello Werold!"); 
  u8g2.drawStr(0,50,"Hello Wrrrold!"); 
  u8g2.sendBuffer();                    // transfer internal memory to the display
  delay(1000);  
}
```

Results show:
![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png)

**SPI**

- Use pin 8 as the SCK pin of SPI(MISO pin of SPI is pin 9,MOSI pin of SPI is pin 10):
- **Hardware**：[Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)  x1

Since this OLED display supports IIC and SPI communication, but the default communication mode is IIC, you need to refer to [Grove - OLED Yellow&Blue Display 0.96 (SSD1315)](https://wiki.seeedstudio.com/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/) wiki to change the OLED display to SPI communication before starting.

**Wiring**

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png)

Search for the "Adafruit_GFX" and "Adafruit_SSD1306" library in Ardunio library Manager and install it them.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png)

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png)

```c++
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// Declaration for SSD1306 display connected using software SPI (default case):
#define OLED_MOSI  MOSI   //Connect SSD1315 D1
#define OLED_CLK  SCK     //Connect SSD1315 D0
#define OLED_DC  D4      //Connect SSD1315 D/C
#define OLED_CS  SS      //Connect SSD1315 CS
#define OLED_RESET  D5   //Connect SSD1315 RES
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);

void setup() {
  Serial.begin(9600);
  if(!display.begin(SSD1306_SWITCHCAPVCC)) {
    Serial.println(F("SSD1306 allocation failed"));
    for(;;); // Don't proceed, loop forever
  }
}

void loop() {
  display.clearDisplay();
  display.setTextSize(1);             // Normal 1:1 pixel scale
  display.setTextColor(SSD1306_WHITE);        // Draw white text
  display.setCursor(0,3);             // Start at top-left corner
  display.println(F("Hello"));
  display.setTextSize(2); 
  display.setCursor(0,16);  
  display.println(F("Hello"));
  display.setTextSize(3); 
  display.setCursor(0,38);  
  display.println(F("Hello"));
  display.display();
  delay(2000);
}
```

Results show:

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png)