# Using ReScreen as a Mouse

This repo introduce how to use the ReScreen as one of the USB deivce and in this example, Rescreen is used as a simple mouse by using the onboard accelerator and two buttons to represent the left and right click.

## Initializing USB and Accelerator libraries

To initialize TinyUSB, and configure the onboard accelerator as follow:

For more information about the onboard accelerator, please refer to the accelerator documents.

```cpp
#include "Adafruit_TinyUSB.h"
#include"LIS3DHTR.h"

LIS3DHTR<TwoWire>  lis;
// HID report descriptor using TinyUSB's template
// Single Report (no ID) descriptor
uint8_t const desc_hid_report[] =
{
    TUD_HID_REPORT_DESC_MOUSE()
};
// USB HID object
Adafruit_USBD_HID usb_hid;
...

void setup()
{
    //Initialising accelerator
    lis.begin(Wire1);
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);

    //Initialising HID(USB)
    usb_hid.setPollInterval(5);
    usb_hid.setReportDescriptor(desc_hid_report, sizeof(desc_hid_report));
    usb_hid.begin();
    ...
}
```

## Mapping Data to Cursor

To map accelerator data to move mouse, here only used a simple conversion to translate the raw movements in x and y axis of accelerator to the movements of mouse.

- **Moving the Mouse:**

```cpp
bool mouseMove(uint8_t report_id, int8_t x, int8_t y);
```

where `report_id` in this case will be 0 (Single Report/no id).

**Note:** Here mapped x values of IMU to y-direction of Mouse, as well as y values to x-direction to make tilt the correct orientation of ReScreen to move the mouse.

```cpp
void loop() {
    float x_raw = lis.getAccelerationX();
    float y_raw = lis.getAccelerationY();
    ...
    if (usb_hid.ready()) {
        move(x_raw,y_raw);
        delay(1);
    }
}

void move(float x_raw, float y_raw) {
    int16_t x_value = 100*x_raw;
    int16_t y_value = 100*y_raw;

    int16_t x = map(x_value, -200, 200, -15, 15);
    int16_t y = map(y_value, -200, 200, -15, 15);

    /*
    printting all the x and y axis values of acclerator
    Serial.print(x);
    Serial.print("\t");
    Serial.println(y);
    */

    if(abs(x)>2 || abs(y)>2) { //if detected tilt
      usb_hid.mouseMove(0, -y, x); //This is configured according to the accelerator values
    }
    delay(20); 
}
```

## Complete Code

Here is the complete code to use ReScreen as a simple USB mouse, where the left click is pressing the left button and right click is pressing the right button.

*For more fucntionality, please refer to the TinyUSB libraries.*

```cpp
#include "Adafruit_TinyUSB.h"
#include"LIS3DHTR.h"

LIS3DHTR<TwoWire>  lis;
// HID report descriptor using TinyUSB's template
// Single Report (no ID) descriptor
uint8_t const desc_hid_report[] =
{
    TUD_HID_REPORT_DESC_MOUSE()
};
// USB HID object
Adafruit_USBD_HID usb_hid;

bool left_flag = false;
void left_click(){
    left_flag = true;
    usb_hid.mouseButtonPress(0, MOUSE_BUTTON_LEFT);
}
bool right_flag = false;
void right_click(){
    right_flag = true;
    usb_hid.mouseButtonPress(0, MOUSE_BUTTON_RIGHT);
}

void setup()
{
    lis.begin(Wire1);
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);

    usb_hid.setPollInterval(5);
    usb_hid.setReportDescriptor(desc_hid_report, sizeof(desc_hid_report));

    pinMode(BUTTON_3, INPUT_PULLUP);
    pinMode(BUTTON_1, INPUT_PULLUP);
    attachInterrupt(digitalPinToInterrupt(BUTTON_3), left_click, FALLING);
    attachInterrupt(digitalPinToInterrupt(BUTTON_1), right_click, FALLING);

    usb_hid.begin();
    Serial.begin(115200);
    // wait until device mounted
    while(!USBDevice.mounted() ) delay(1);
}

void loop()
{
    float x_raw = lis.getAccelerationX();
    float y_raw = lis.getAccelerationY();
    // poll gpio once each 10 ms
    delay(10);

    // Remote wakeup
    if ( USBDevice.suspended() )
    {
    // Wake up host if we are in suspend mode
    // and REMOTE_WAKEUP feature is enabled by host
    USBDevice.remoteWakeup();
    }

    if (usb_hid.ready()) {
        move(x_raw,y_raw);
        delay(1);
    }
}
void move(float x_raw, float y_raw) {
    int16_t x_value = 100*x_raw;
    int16_t y_value = 100*y_raw;

    int16_t x = map(x_value, -200, 200, -15, 15);
    int16_t y = map(y_value, -200, 200, -15, 15);

    /*
    printting all the x and y axis values of acclerator
    Serial.print(x);
    Serial.print("\t");
    Serial.println(y);
    */

    if(abs(x)>2 || abs(y)>2) { //if detected tilt
      usb_hid.mouseMove(0, -y, x); //This is configure according to the accelerator values
    }
    delay(20); 
}
```
