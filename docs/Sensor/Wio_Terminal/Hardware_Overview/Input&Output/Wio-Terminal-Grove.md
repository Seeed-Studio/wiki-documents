---
description: Grove Port
title: Grove Port
keywords:
- Wio_terminal Hardware_Overview
- Input&Output
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Grove
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Grove Port

This repo introduces how to use Wio Terminal with the [**Grove Ecosystem**](https://www.seeedstudio.com/grove.html).

With the help of Grove, you are able prototype much quicker with simpler connections!

## Wio Terminal With Grove - TDS Sensor

This section introduces how to use [Grove - TDS Sensor](https://wiki.seeedstudio.com/Grove-TDS-Sensor/) with Wio Terminal to display real time TDS readings on a line chart!

### Libraries Installation

1. Install the [LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) library.

2. Install the [Linechart](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) library.

### Complete Code

Connect the Grove TDS sensor to the Grove D/A Pin of Wio Terminal, upload the code and check the results!

```cpp
#include"seeed_line_chart.h" //include the library
TFT_eSPI tft;

#define max_size 50 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define sensorPin A0 //Analog pin

int sensorValue = 0;
float tdsValue = 0;
float Voltage = 0;

void setup() {
    pinMode(sensorPin, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);

    sensorValue = analogRead(sensorPin);
    Voltage = sensorValue*5/1024.0; //Convert analog reading to Voltage
    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convert voltage value to TDS value

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(tdsValue); //read variables and store in data

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("TDS Reading")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(3);

    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font

  //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
         content
                .height(tft.height() - header.height() * 1.5) //actual height of the line chart
                .width(tft.width() - content.x() * 2) //actual width of the line chart
                .based_on(0.0) //Starting point of y-axis, must be a float
                .show_circle(true) //drawing a cirle at each point, default is on.
                .value(data) //passing through the data to line graph
                .color(TFT_RED) //Setting the color for the line
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio Terminal With Grove - OLED Display

If you required a second screen to display with Wio Terminal, **Grove - OLED Dispaly 0.96"** will be the perfect choice. It can be used to display graphics and data, adding more interactive features with Wio Terminal.

### Libraries Installation

1. Install the **U8g2** libraries from the **Library Manager** in Arduino IDE. Navigate to **Sketch** -> **Include Library** -> **Manage Libraries**... and Search and install  `U8g2` in the Library Manager.

### U8g2 Initilization

Initialuse the OLED display using u8g2's software I2C and use SCL for clock and SDA for Data:

```cpp
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
```

#### Usage

1. Call u8g2.firstPage().

2. Start a do-while loop.

3. Inside the loop-body: Draw something with the usual draw commands.

4. Loop as long as u8g2.nextPage() returns true.

For more information, please visit [u8g2](https://github.com/olikraus/u8g2/wiki)

### Complete Code

Connect the Grove OLED Display 0.96" to the Grove I2C pin and check the results!

```cpp
#include <U8g2lib.h>

U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

const unsigned char WAVE[] PROGMEM = {
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFE,0x07,0xFF,0xE0,0x7F,0xFE,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x03,0xFC,0x00,0x3F,0xC0,0x03,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xE0,0x00,0x7E,0x00,0x07,0xE0,0x00,
  0xF8,0x01,0xFF,0x80,0x1F,0xF8,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFF,0x0F,0xFF,0xF0,0xFF,0xFF,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x07,0xFE,0x00,0x7F,0xE0,0x07,0xC0,
  0x01,0xF8,0x00,0x1F,0x80,0x01,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xF8,0x01,0xFF,0x80,0x1F,0xF8,0x00,
  0xFE,0x07,0xFF,0xE0,0x7F,0xFE,0x00,
  0x3F,0xFF,0xC3,0xFF,0xFC,0x3F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x07,0xFE,0x00,0x7F,0xE0,0x07,0xC0,
  0x00,0xF0,0x00,0x0F,0x00,0x00,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x80,0x00,0x18,0x00,0x01,0x80,0x00,
  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,
  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,
  0xFF,0x0F,0xFF,0xF0,0xFF,0xFF,0x00,
  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,
  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,
  0x03,0xFC,0x00,0x3F,0xC0,0x03,0xC0,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00
};

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.firstPage();
    do {
      u8g2.setFont(u8g2_font_t0_16b_mr);
      u8g2.drawXBMP(40, 0, 50, 50, WAVE);
      u8g2.setCursor(20, 60);
      u8g2.print("Wio Terminal");
    } while (u8g2.nextPage());
}
```

## Wio Terminal With Grove - Temperature Sensor

This section introduces how to use [Grove - Temperature Sensor](https://wiki.seeedstudio.com/Grove-Temperature_Sensor_V1.2/) with Wio Terminal to display real-time surrounding temperature readings.

### Libraries Installation

1. Install the [LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) library.

2. Install the [Linechart](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Histogram/) library.

### Complete Code

Connect the Grove Temperature sensor to the Grove D/A Pin of Wio Terminal, upload the code and check the results!

```cpp
#include"seeed_line_chart.h" //include the library
#include <math.h>

TFT_eSPI tft;

#define max_size 50 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

const int B = 4275;               // B value of the thermistor
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - Temperature Sensor connect to A0

void setup() {
    pinMode(pinTempSensor, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_DARKCYAN);

    int a = analogRead(pinTempSensor);
    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // convert to temperature via datasheet

    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(temperature); //read variables and store in data

    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Temperature Reading")
                .align(center)
                .color(TFT_WHITE)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font

  //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
         content
                .height(tft.height() - header.height() * 1.5) //actual height of the line chart
                .width(tft.width() - content.x() * 2) //actual width of the line chart
                .based_on(0.0) //Starting point of y-axis, must be a float
                .show_circle(true) //drawing a cirle at each point, default is on.
                .y_role_color(TFT_WHITE)
                .x_role_color(TFT_WHITE)
                .value(data) //passing through the data to line graph
                .color(TFT_RED) //Setting the color for the line
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio Terminal With Grove - GPS Sensor

This section introduces how to use Grove - GPS Sensor with Wio Terminal for obtaining real-time GPS information. The sensor itself outputs NMEA GPS data which we will use the TinyGPSPlus library to parse the data to readable information.

### Libraries Installation

1. Install the [TinyGPSPlus Library](https://github.com/mikalhart/TinyGPSPlus).

### Complete Code

Connect the Grove GPS Sensor to the Grove I2C Pin (Left Side) of Wio Terminal, upload the code and check the results in Serial Monitor(w/ baud rate: 9600)!

```cpp
#include <TinyGPS++.h>
#include <wiring_private.h>

static const uint32_t GPSBaud = 9600;

// The TinyGPS++ object
TinyGPSPlus gps;

// The serial connection to the GPS device - Left side Grove connector.
// Left side Grove connector shares pins with I2C1 of 40 pin connector.
static Uart Serial3(&sercom3, PIN_WIRE_SCL, PIN_WIRE_SDA, SERCOM_RX_PAD_1, UART_TX_PAD_0);

void setup()
{
  Serial.begin(115200);

  Serial3.begin(GPSBaud);
  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);
  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);
}
 
void loop()
{
  // This sketch displays information every time a new sentence is correctly encoded.
  while (Serial3.available() > 0)
    if (gps.encode(Serial3.read()))
      displayInfo();
 
  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No GPS detected: check wiring."));
    while(true);
  }
}

void displayInfo()
{
  Serial.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.println();
}

void SERCOM3_0_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_1_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_2_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_3_Handler()
{
  Serial3.IrqHandler();
}
```
