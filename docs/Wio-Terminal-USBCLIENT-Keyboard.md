# Using ReScreen as a Keyboard

This repo introduces how to use the ReScreen as one of the USB device and in this exmaple, Rescreen is used as a simple keybaord. It has assigned 3 keys `s`, `e`, `d` to the 3 buttons of ReScreeen. This can be easily implemented into your design for more challenging tasks.

*For more reference, please refer to TinyUSB librarries.*


## Complete Code

```cpp
#include "Adafruit_TinyUSB.h"

// HID report descriptor using TinyUSB's template
// Single Report (no ID) descriptor
uint8_t const desc_hid_report[] =
{
  TUD_HID_REPORT_DESC_KEYBOARD(),
};

Adafruit_USBD_HID usb_hid;

// Array of pins and its keycode
uint8_t pins[]    = { BUTTON_1, BUTTON_2, BUTTON_3 };
uint8_t hidcode[] = { HID_KEY_S, HID_KEY_E, HID_KEY_D };

uint8_t pincount = sizeof(pins)/sizeof(pins[0]);

// the setup function runs once when you press reset or power the board
void setup()
{
  usb_hid.setPollInterval(2);
  usb_hid.setReportDescriptor(desc_hid_report, sizeof(desc_hid_report));
  usb_hid.begin();

  // Set up pin as input
  for (uint8_t i=0; i<pincount; i++)
  {
    pinMode(pins[i], INPUT_PULLUP);
  }
  // wait until device mounted
  while( !USBDevice.mounted() ) delay(1);
}


void loop()
{
  // poll gpio once each 2 ms
  delay(2);
  if ( !usb_hid.ready() ) return;

  static bool keyPressedPreviously = false;
  bool anyKeyPressed = false;

  uint8_t count=0;
  uint8_t keycode[6] = { 0 };

  // scan normal key and send report
  for(uint8_t i=0; i < pincount; i++)
  {
    if ( 0 == digitalRead(pins[i]) )
    {
      // if pin is active (low), add its hid code to key report
      keycode[count++] = hidcode[i];

      // 6 is max keycode per report
      if (count == 6)
      {
        usb_hid.keyboardReport(0, 0, keycode);
        delay(2); // delay for report to send out

        // reset report
        count = 0;
        memset(keycode, 0, 6);
      }

      // used later
      anyKeyPressed = true;
      keyPressedPreviously = true;
    }
  }

  // Send any remaining keys (not accumulated up to 6)
  if ( count )
  {
    usb_hid.keyboardReport(0, 0, keycode);
  }

  // Send All-zero report to indicate there is no keys pressed
  // Most of the time, it is, though we don't need to send zero report
  // every loop(), only a key is pressed in previous loop()
  if ( !anyKeyPressed && keyPressedPreviously )
  {
    keyPressedPreviously = false;
    usb_hid.keyboardRelease(0);
  }
}
```