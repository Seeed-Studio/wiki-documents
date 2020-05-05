# How to use Seeeduino XIAO to log in to your Raspberry PI

Sometimes when we use Raspberry Pi, these situations can be very disturbing to us: no extra HDMI displays around, mouse and keyboard are not easy to connect, choose to log in to the raspberry pie with the USB to Serial adapter, but it's too expensive. Now, with Seeeduino XIAO, all problems are readily solved.

## Hardware

## Materials required

- [Seeeduino XIAO x1](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [Raspberry PI Zero x1](https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html)

- [Jumper cable x3](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)

- [Type-C cable x1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)


### Hardware Connection

- **Step 1.** Raspberry PI's **TX** is connected to Seeeduino XIAO's **RX**

- **Step 2.** Raspberry PI's **RX** is connected to Seeeduino XIAO's **TX**

- **Step 3.** Raspberry PI's **GND** is connected to Seeeduino XIAO's **GND**

- **Step 4.** Connect Seeeduino XIAO to PC via a Type-C cable.

- **Step 5.** The raspberry pie is connected to a power supply.

![](https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png)


## Software

Find the config.txt file on the TF card where the Raspberry Pi official system is installed, and add a sentence at the end:

```c
enable_uart=1
```

### Configuring Seeeduino XIAO

- **Step 1.** Open [Arduino IDE](https://www.arduino.cc/en/Main/Software) and add Seeeduino XIAO by following the link [here.](https://github.com/SeeedDocument/Seeeduino-XIAO)

- **Step 2.** Copy the following code to Arduino IDE and upload the code into Seeeduino XIAO.

```c++
uint32_t baud;
uint32_t old_baud;
void setup() {

  // put your setup code here, to run once:
  SerialUSB.begin(115200);
  baud = SerialUSB.baud();
  old_baud = baud;
  Serial1.begin(baud);
  while (!Serial);
  while (!SerialUSB);
}

void loop() {
  // put your main code here, to run repeatedly:
  baud = SerialUSB.baud();
  if (baud != old_baud) {
    Serial1.begin(baud);
    while (!Serial);
    old_baud = baud;
    //     SerialUSB.println(baud);
  }
  if (SerialUSB.available() > 0)
  {
    char c = SerialUSB.read();
    Serial1.write(c);
  }
  if (Serial1.available() > 0) {
    char c = Serial1.read();
    SerialUSB.write(c);
  }
}
```

### Configuring Putty

- **Step 1.** Download and install Putty by following this [link](https://www.putty.org/)

- **Step 2.** Set the serial port baud rate to 115200 ( This is the default serial port baud rate. It can be communicated correctly if it is consistent with the serial port baud rate of the Raspberry Pi.)

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Putty%20config.png">
</p>

- **Step 3.** Then you will see the startup information in the terminal window.

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/Terminal.png">
</p>

Now you have access to Raspberry Pi through Seeeduino XIAO!

<p align="center">
  <img src="https://files.seeedstudio.com/products/102010328/img/new%20pins.gif">
</p>








