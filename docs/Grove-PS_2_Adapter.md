---
name: Grove - PS/2 Adapter
category: Others
bzurl: https://www.seeedstudio.com/Grove-PS%262-Adapter-p-966.html
oldwikiname:  Grove - PS/2 Adapter
prodimagename: PS221_sensor.jpg
surveyurl: https://www.research.net/r/Grove_PS-2_Adapter
sku:  103020003
---
 ![](https://github.com/SeeedDocument/Grove-PS_2_Adapter/raw/master/img/PS221_sensor.jpg)

The PS/2 Adapter enables you to connect a PS2 device to the Arduino/Seeeduino mainboards. With the help of PS2Keyboard/PS2MouseNlibrary, you can create the bridge between these PS2 device and Arduino/Seeeduino.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PS%262-Adapter-p-966.html)

##   Features
---
*   Standard Grove interface

*   Standard PS/2 interface

##   Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Min
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Max
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> Voltage
</th>
<td> 4.75
</td>
<td> 5.0
</td>
<td> 5.25
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> Current
</th>
<td colspan="3"> 100
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Communication Mode
</th>
<td colspan="3"> PS/2 Communication Protocol
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Clock Frequency
</th>
<td> 10
</td>
<td> 15
</td>
<td> 33
</td>
<td> KHZ
</td></tr></table>

##   Application Ideas
---
*   PS/2 mouse and keyboard input

##   Usage
---
The PS/2 connector is a 6-pin Mini-DIN connector used for connecting keyboard and mouse to a PC compatible computer system.The PS/2 designs on keyboard and mouse interfaces are electrically similar and employ the same communication protocol. Today, this connector has been replaced by USB, but as Arduino/Seeeduino, it is also a good choice to use the PS/2 connector as it is more convenient and cheaper when you need a mouse or keyboard.

A PS/2 connector has 6 pins as you can see from the following diagram. Pin 1 and pin 6 are not connected. Pin 3 is for ground, and pin 4 is for power. The other 2 pins are for clock and data.

 ![](https://github.com/SeeedDocument/Grove-PS_2_Adapter/raw/master/img/MiniDIN-6_Connector.svg.png)

<table  cellspacing="0" width="702">
<tr>
<th scope="col"> Pin
</th>
<th scope="col"> Name
</th>
<th scope="col"> Function
</th>
<th scope="col"> Correspond to the Grove Interface
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> +DATA
</td>
<td> Data
</td>
<td> DATA
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> NC
</td>
<td> Reserved
</td>
<td> -
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> GND
</td>
<td> GND Line
</td>
<td> GND
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> Vcc
</td>
<td> +5DCV
</td>
<td> VCC
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> +CLK
</td>
<td> Clock frequency
</td>
<td> CLK
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> NC
</td>
<td> Reserved
</td>
<td> -
</td></tr></table>

1.Plug the PS/2 mouse or keyboard to the Grove-PS/2 Adapter, and then connect Grove to the D5/D6 of [Grove - Base Shield](http://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134). You can change the digital port as you like. But, don't forget to change the port number in the definition of the demo code at the same time.

!!!Note
     Pin 5 is the mouse data pin, pin 6 is the clock pin.

 2.Plug the Base Shield into Arduino/Seeeduino and connect Arduino/Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-PS_2_Adapter/raw/master/img/PS2_sensorss.jpg)

3.Download [PS2 Adapter library](https://github.com/SeeedDocument/Grove-PS_2_Adapter/raw/master/res/PS2_Adapter_Library.zip), Unzip and put them in the libraries file of Arduino IDE by the path: ..\arduino-1.0\libraries.

4.Restart the Arduino IDE, open one of the demo codes, for example ps2_mouse directly by the path:File -&gt; Example -&gt;PS2_Adapter-&gt;ps2_kbd.
```
/*
 * an Arduino sketch to interface with a ps/2 keyboard.
 * Also uses serial protocol to talk back to the host
 * and report what it finds. Used the ps2 library.
 */

#include &lt;ps2.h&gt;

/*
 * Pin 5 is the ps2 data pin, pin 6 is the clock pin
 * Feel free to use whatever pins are convenient.
 */

PS2 kbd(6, 5);

void kbd_init()
{
    char ack;

    kbd.write(0xff);  // send reset code
    ack = kbd.read();  // byte, kbd does self test
    ack = kbd.read();  // another ack when self test is done
}

void setup()
{
    Serial.begin(9600);
    kbd_init();
}

/*
 * get a keycode from the kbd and report it back to the
 * host via the serial line.
 */
void loop()
{
    unsigned char code;

    for (;;) { /* ever */
    /* read a keycode */
        code = kbd.read();
    /* send the data back up */
        Serial.println(code, HEX);
        // delay(20);  /* twiddle */
    }
}
```
Please click [here](http://www.seeedstudio.com/wiki/Upload_Code) if you do not know how to upload.
 After uploading the firmware to the MCU,you can check the status via a Serial Monitor(9600 baudrate):

 ![](https://github.com/SeeedDocument/Grove-PS_2_Adapter/raw/master/img/Result.jpg)

 X ,Y output value changes correspondingly while the mouse move around.

##   Resources
---
*   [Grove - PS/2 Adapter Eagle File](https://github.com/SeeedDocument/Grove-PS_2_Adapter/raw/master/res/Grove-PS2_Adapter_eagle_file.zip)

*   [PS2 Adapter Library](https://github.com/SeeedDocument/Grove-PS_2_Adapter/raw/master/res/PS2_Adapter_Library.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>