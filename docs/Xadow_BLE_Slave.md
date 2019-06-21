---
name: Xadow - BLE Slave
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-BLE-Slave-p-1546.html
oldwikiname: Xadow - BLE  Slave
prodimagename: Xadow_ble_01.jpg
surveyurl: https://www.research.net/r/xadow_ble_slave
sku: 113040003
---

![](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/img/Xadow_ble_01.jpg)

This is a Bluetooth 4.0 module（Bluetooth 4.0 slave module）. Compared with Bluetooth version 2.0 and 3.0, it's more advanced for its lower power consumption. You can easily connect your own project to the primary device of Bluetooth 4.0 by using this module. For instance, it can transfer the detected data which is about the information of your body to phone for displaying or analyzing, then, help you better manage your physical condition.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-Slave-p-1546.html)

## Specification
---
- Bluetooth 4.0 Module
- PIN:0000
- Default Baudrate:38400
- Dimensions: 25.43mm x 20.35mm

## Demonstration
---
The demo is going to show you how to connect bluetooth device with Xadow BLE Slave and communicate. You can use it to communicate with phone(with Bluetooth 4.0). Now let us have a test:
- Connect the Xadow BLE Slave to Xadow Main Board and connect Main Board to PC with a USB cable. In normal mode, the blue LED will blink once a time. If the blue led is off, please click the "reset" button on Xadow Main Board .

![](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/img/XadowBLE.jpg)

!!!Note
    When connect XadowBLE Slave to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).
- Upload the test code to your Xadow Main Board.

```
int error=0;
int n;
void setup()
{
    Serial.begin(38400);
    delay(100);
    PORTB|=0x04;
    TESTIO();
    if(error==0)
    {
        DDRB|=0x81;
        for(n=0;n<40;n++)
        {
            PORTB&=~0x81;
            delay(50);
            PORTB|=0x81;
        }
    }

    Serial1.begin(38400);
}
void loop()
{
    boot();
}
void TESTIO(void)
{
    DDRB|=0x0e;
    PORTB&=~0x0e;
    DDRF|=0x01;
    PORTF&=~0x01;
    DDRD&=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&0x01))
    {
        error=1;
    }
    if(PIND&0x02)
    {
        error=1;
    }
    if(!(PIND&0x04))
    {
        error=1;
    }
    if(PIND&0x08)
    {
        error=1;
    }
    PORTB&=~0x04;
    PORTB|=0x0a;
    PORTF&=~0x01;
    delay(30);
    if(PIND&0x01)
    {
        error=1;
    }
    if(!(PIND&0x02))
    {
        error=1;
    }
    if(PIND&0x04)
    {
        error=1;
    }
    if(!(PIND&0x08))
    {
        error=1;
    }
    Serial.println(error);
}
void boot(void)
{
    for(;;)
    {
        if(Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if(Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- Select a serial tool to send and receive data. Here we use the [Sscom32E](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/res/Sscom32E.zip). BaudRate should be 38400.

![](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/img/Open_serial_tool.jpg)

- Get your Phone device ready and install [“BlueSPP” APP](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/res/BlueSPP_V4.0.zip) and launch the BlueSPP. Remember that your device should be Bluetooth 4.0.

![](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/img/Open_Bluetooth.jpg)

- Click "search" to find the devices. Find the Xadow BLE Slave device and press to start connecting Bluetooth device.
-
!!!Tips
    You should pair phone with BLE module first in the device manager of phone if the 'BlueSPP' can't find the BLE module.

![](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/img/Search_device.jpg)

- After connecting, the screen on Device is as following. You could type texts and data will send. It will show on serial tool of your PC. Of course, you can send data to phone by serial tool of your PC.

![](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/img/Send_and_Receive_Data.jpg)
![](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/img/BLE_Slave_send_data.jpg)

## Resources
---
- [Xadow BLE Slave](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/res/Xadow_BLE_Slave.zip)
- [“BlueSPP” APP](https://github.com/SeeedDocument/Xadow_BLE_Slave/raw/master/res/BlueSPP_V4.0.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>