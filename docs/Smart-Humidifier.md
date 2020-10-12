# Smart Humidifier

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/Smart-Humidifier/water_atomization_11.gif"/></div>


## Overview

This wiki introduces how to make water atomization to keep indoor humidity normal.

## Feature

- Automatically use the water atomization when the humidity is low.
- Display the temperature and humidity in real-time.

## Component required

### hardware
- [**Grove Beginner Kit**](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)
- [**Grove water atomization**](https://www.seeedstudio.com/Grove-Water-Atomization-v1-0.html)


### Software
- Download the [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)
- Navigate to **Sketch** -> **Include Library** -> **Manage Libraries**, search **U8g2** then install it. 
- Download the [**Grove_Temperature_And_Humidity_Sensor library**](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

!!!Note
    Refer How to [**install library**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


## Hardware Connection
Please follow the same color line to connect each sensor on the board.
<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/beginnerKit-5-projects/Smart-Humidifier/aomization_connection.png"/></div>


## Arduino Instructions

1. Follow the connection picture connect all the sensor on the board.
2. Copy the code stick on the Aruino IDE then upload it.
3. Prepare a contain with full water then put the water atomization on the water. 

!!!Note
    Prepare some tissue put on the water, let the water atomization keep afloat. The function of tissue is lead water to the transducer and keep upper side of transducer above water.


## Code

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

#include "DHT.h"
#define DHTTYPE DHT11   // DHT 11
#define DHTPIN 7     // what pin we're connected to
DHT dht(DHTPIN, DHTTYPE);

#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
  dht.begin();
}
 
void loop(void) {
  float temp_hum_val[2] = {0};
  int b;
  int c;
  if (!dht.readTempAndHumidity(temp_hum_val)) {
     b = temp_hum_val[0];
     c = temp_hum_val[1];
  }
  else{
    Serial.println("Failed to get temprature and humidity value.");
    }
  u8x8.setFont(u8x8_font_chroma48medium8_r);   // choose a suitable font
  u8x8.setCursor(0, 0);
  u8x8.print("Temp: ");  
  u8x8.setCursor(5, 0);
  u8x8.print(c);  
  u8x8.setCursor(8, 0);
  u8x8.print("*C");  
  u8x8.setCursor(0, 10);
  u8x8.print("Hum: ");  
  u8x8.setCursor(5, 10);
  u8x8.print(b);  
  u8x8.setCursor(8, 10);
  u8x8.print("%");  
  u8x8.setCursor(0, 20);
  u8x8.print("atomizer: ");  

  if(b > 70){
  u8x8.setCursor(9, 20);
  u8x8.print("OFF");  
  digitalWrite(A6, LOW);    // atomization stopped
  }
  if(b <= 70) {
  u8x8.setCursor(9, 20);
  u8x8.print("ON "); 
  digitalWrite(A6, HIGH);   // atomize 
    }
  delay(1000);  

}
```