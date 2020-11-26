![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)


The Wio Terminal Battery Chassis is a must-have extension board for [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) Dev Board as it provides an external power source for Wio Terminal to enhance its portability and compactness. It has **a 650mAH rechargeable lithium polymer battery, battery charging/discharging status LED, 4 Grove Analog/Digital Ports, 1 Grove I2C Port, and 1 Grove UART Port, as well as the ABS enclosure for aesthetic and protection.** There is also the same Raspberry Pi 40-pin compatible GPIO at the back of the Wio Terminal Battery Chassis for more add-ons!

The new version of the Wio Terminal Battery Chassis has added the **Texas Instrument's [BQ27441-G1A](http://www.ti.com/product/BQ27441-G1)** - self-calibrating, I2C-based fuel gauge for lithium polymer (LiPo) batteries which can be used to measures your battery's voltage to estimate its charge percentage and remaining capacity!


[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## **Feature**

- Built-in 650mAh Rechargeable Lithium Polymer Battery
- Battery charging/discharging status LED
- Battery On/OFF Button
- Built-in BQ27441-G1A fuel gauge for LiPo batteries
- USB Type-C Charging
- Overcurrent protection
- Hiccup mode/Hiccup Protection
- 4 x Grove Analog/Digital Port
- 1 x Grove I2C Port
- 1 x Grove UART Port
- Magnets are hidden inside the enclosure so that it can be stuck on the Whiteboard!

## **Specification**

- The Wio Terminal Battery Chassis is either powered by USB Type-C interface or the internal battery. **The maximum input current of USB Type-C is 2A**, and the input voltage range is 4.75V ~ 5.25V.

- The built-in battery is a rechargeable lithium-polymer battery, with a capacity of **650mAh**. The **battery output voltage is 3.7V**, with a battery charging voltage of 4.2V.

- The maximum current **allowed by the board is 660mA**. If the board on the charing status then the green LED turn on.

- When the battery on low battery, the battery board will enter to the trickle charging status and **the current of trickle charging status is 30mA**.

- The battery board can **output 5.15V to 40Pin female interface** with a **maximum current of 380mA**.

- The Wio Terminal Battery Chassis **standby current is less than 200uA**.

- The battery board mode can switch by pressing the mode button, and then the mode is determined by the LED colour:
  1. **Green LED:** Light on is mean the board charing.
  2. **Red LED:** Light on is mean the OTG(Battery discharge) enable.
  3. **Yellow LED:** Light on is mean the male interface output/input 5V.   

- When the Type-C is unplugged, the board uses the battery to power the Wio terminal by default. If plug the type-C the battery board will automatically force into the battery charging state(Green light on) until the battery full, but you are able to press the mode button to control the battery board shift to default mode.

- The battery board can be **charged by the 40Pin female interface**, meanwhile, the Yellow and the green LED will light up until the green light off when the battery is fully charged. 


- The battery board can read charging information via I2C port on 40Pin female interface, such as charging status, battery voltage, average current, remaining capacity, full capacity, average power and health status.

## **Hardware Overview**

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg"/></div>

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/new-pin.png"/></div>

## **Precautions**

- The Wio Terminal Battery Chassis cannot output 3.3V voltage by itself, it can only output 5V voltage.

- When the Wio Terminal Battery Chassis is switched from battery charging mode to battery power mode, there will be a 500 ms voltage drop time.

- The battery can only be chare by the I2C on 40Pin female interface or USB Type-C.

- When the input voltage falls below 4.3V, the USB Type-C or 40 female pin header will stop charging, but the green light will keep on. 

- If the battery voltage below 3V on OTG(battery discharge) state, the battery board will stop discharge and the red light off.

- When the battery board on the OTG mode, If The output is shorted, the mode will automatically switch to hiccup mode until the short circuit is repaired, and then the board recovers to normal power supply mode.

- If the battery is removed while the board is in charge mode, the board will switch to failure mode and the green light blink at a frequency of 1Hz.

- When the battery board is not in use, please press the button to enter sleep mode and all the LED will off.

## **Detecting LiPo Battery Status**

1. Visit the [SparkFun_BQ27441_Arduino_Library](https://github.com/sparkfun/SparkFun_BQ27441_Arduino_Library) repositories and download the entire repo to your local drive.

2. Now, the library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `SparkFun_BQ27441_Arduino_Library` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### **Example Code**

You may use the following code to read stats from your battery chassis.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/demo.gif"/></div>

```cpp
#include <SparkFunBQ27441.h>
#include"TFT_eSPI.h"

TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
#define FF17 &FreeSans9pt7b

const unsigned int BATTERY_CAPACITY = 650; // Set Wio Terminal Battery's Capacity 

void setupBQ27441(void)
{
  // Use lipo.begin() to initialize the BQ27441-G1A and confirm that it's
  // connected and communicating.
  if (!lipo.begin()) // begin() will return true if communication is successful
  {
  // If communication fails, print an error message and loop forever.
    Serial.println("Error: Unable to communicate with BQ27441.");
    Serial.println("  Check wiring and try again.");
    Serial.println("  (Battery must be plugged into Battery Babysitter!)");
    tft.setTextColor(TFT_RED);
    tft.setCursor((320 - tft.textWidth("Battery Not Initialised!"))/2, 120);
    tft.print("Battery Not Initialised!");
    while (1) ;
  }
  Serial.println("Connected to BQ27441!");
  
  // Uset lipo.setCapacity(BATTERY_CAPACITY) to set the design capacity
  // of your battery.
  lipo.setCapacity(BATTERY_CAPACITY);
}

void printBatteryStats()
{
  // Read battery stats from the BQ27441-G1A
  unsigned int soc = lipo.soc();  // Read state-of-charge (%)
  unsigned int volts = lipo.voltage(); // Read battery voltage (mV)
  int current = lipo.current(AVG); // Read average current (mA)
  unsigned int fullCapacity = lipo.capacity(FULL); // Read full capacity (mAh)
  unsigned int capacity = lipo.capacity(REMAIN); // Read remaining capacity (mAh)
  int power = lipo.power(); // Read average power draw (mW)
  int health = lipo.soh(); // Read state-of-health (%)

  // Now print out those values:
  String toPrint = String(soc) + "% | ";
  toPrint += String(volts) + " mV | ";
  toPrint += String(current) + " mA | ";
  toPrint += String(capacity) + " / ";
  toPrint += String(fullCapacity) + " mAh | ";
  toPrint += String(power) + " mW | ";
  toPrint += String(health) + "%";
  
  Serial.println(toPrint);

  // LCD Graphics
  tft.setTextColor(TFT_BLUE);
  tft.drawRoundRect(10, 10, 300, 220, 10, TFT_BLUE);
  tft.setTextColor(TFT_MAGENTA);
  tft.drawString("State of Chage:", 20, 30);
  tft.drawString("Battery Voltage:", 20, 55);
  tft.drawString("Average Current:", 20, 80);
  tft.drawString("Remain Capacity:", 20, 105);
  tft.drawString("Full Capacity:", 20, 130);
  tft.drawString("Average Power:", 20, 155);
  tft.drawString("State of Health:", 20, 180);
  
  // Data
  spr.createSprite(80, 170);
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(FF17);
  spr.setTextColor(TFT_WHITE);
  spr.drawString(String(soc)+" % ", 0, 0);
  spr.drawString(String(volts)+" mV ", 0, 25);
  spr.drawString(String(current)+" mA ", 0, 50);
  spr.drawString(String(capacity)+" mAh ", 0, 75);
  spr.drawString(String(fullCapacity)+" mAh ", 0, 100);
  spr.drawString(String(power)+" mW ", 0, 125);
  spr.drawString(String(health)+" % ", 0, 150);
  spr.pushSprite(170, 30);
  spr.deleteSprite();
}

void setup()
{
  Serial.begin(115200);
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);
  tft.setFreeFont(FF17); 
  setupBQ27441();
  tft.setTextColor(TFT_GREEN);
  tft.setCursor((320 - tft.textWidth("Battery Initialised!"))/2, 120);
  tft.print("Battery Initialised!");
  delay(1000);
  tft.fillScreen(TFT_BLACK);
}

void loop() 
{
  printBatteryStats();
  delay(1000);
}
```


## **Schematic Online Viewer**

<div class="altium-ecad-viewer" data-project-src="https://http://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH_NEW.ZIP" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>

## **Resources**

- **[ZIP]** [Wio Terminal Battery Chassis Schematics Design File](https://http://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH_NEW.ZIP)

## **Tech Support**

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
