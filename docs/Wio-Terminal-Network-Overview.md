# Overview

This wiki introduce how to update the latest firmware for the Wireless Core Realtek RTL8720 on Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable wireless connectivity.

## Update the Wireless Core Firmware

First, we need to update the firmware for the Realtek RTL8720 Wireless core on Wio Terminal. **This is essential and must update to the latest firmware before proceeding to examples.**
        
<div class="tips" style="display: table; table-layout: fixed; background-color: #ffdde3; height: auto;  width: 100%;">
<div class="left-icon" style="display: table-cell; vertical-align: middle; background-color: #ff8da4; padding-top: 10px; box-sizing: border-box; height: auto; width: 38px; text-align: center;"><img style="width: 26px; vertical-align: middle;" src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
<div class="right-desc" style="display: table-cell; vertical-align: middle; padding-left: 15px; box-sizing: border-box; width: calc(95% - 38px);">
<p style="font-weight: bold; margin-top: 10px;">Attention</p>
<p style="font-size: 14px;">Please update the Wi-Fi Core before usage!</p>
</div>
</div>

### Step 1 - Arduino Configuration

To be able to update the firmware on the RTL8720, we need to enable the Serial connection from SAMD51 to RTL8720. This is done by a simple Arduino Program.

- Download the [**`rtl8720_update.ino`**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/rtl8720_update.zip) Arduino program, or Copy the following code to the Arduino IDE.

```cpp
void setup() {
  // initialize both serial ports:
  pinMode(PIN_SERIAL2_RX, OUTPUT);
  pinMode(RTL8720D_CHIP_PU, OUTPUT);
  digitalWrite(PIN_SERIAL2_RX, LOW);
  digitalWrite(RTL8720D_CHIP_PU, LOW);
  delay(500);
  digitalWrite(RTL8720D_CHIP_PU, HIGH);
  delay(500);
  pinMode(PIN_SERIAL2_RX, INPUT);
  Serial.beginWithoutDTR(115200);
//  Serial.baud
  RTL8720D.begin(115200);

  delay(500);
}

void loop() {

  // read from port 1, send to port 0:
  if (Serial.available()) {
    int inbyte = Serial.read();
    RTL8720D.write(inbyte);
    //Serial1.write(inbyte);
  }
//   read from port 1, send to port 0:
  if (RTL8720D.available()) {
    int inbyte = RTL8720D.read();
    Serial.write(inbyte);
    //Serial1.write(inbyte);
  }
}
```

- **Upload** the Arduino Program to Wio Terminal.

<div align=center><img width = 500 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/rtl-ard.png"/></div>

### Step 2 - Download the Image Tool

Next up, download the [**Image Tool**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ameba-image-Tool-v2.4.1.zip) here. This is the tool for uploading the latest firmware to the RTL8720 on Wio Terminal.

**Note:** For now, the Image Tool is only available in **Windows**. Image Tool for Linux OS and Mac OS will be available very soon.

### Step 3 - Download the Latest Firmware

Download the latest [**RTL8720 Firmware**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/20200416-rtl8720d-images-v2.2.0.0.zip) Here.

### Step 4 - Updating the Firmware

- Open the **`ImageTool.exe`** tool. Click on the **Chip Select** and Select the **AmebaD(8721D)** on the top left corner.

<div align=center><img width = 300 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Select-chip.png"/></div>

- **Select the correct Serial Port for Wio Terminal.** In my case, it's COM11. Set the Baudrate to **115200**. Under **Flash Erase** session, Type **`0x08000000`** into Address and **`2048`** KB into Size, and click **Erase**:

<div align=center><img width = 450 src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/Erase.png"/></div>

!!!attention
          You **must erase the Wi-Fi core** when you received the Wio Terminal the first time.

-   Under **Flash Download** session, click on **Browse** on these 3 image path:

**Note:** Browse the right bin (downloaded from above) in each Image path as follow.

<div align=center><img width = 450 src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/Select-firmware.png"/></div>

- Choose the **RTL8720 Firmware** file that you downloaded from above, **tick the box**, and click on **Download** to load the firmware:

<div align=center><img width = 450 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Select-bin.png"/></div>

- The RTL8720 firmware will start writing to the chip on Wio Terminal, please wait patiently until it's done. Once it's uploaded successfully, you should be to see a window as shown:

<div align=center><img width = 450 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/RTL-done.png"/></div>

Now, the latest RTL8720 firmware is loaded onto the board.

## Libraries Installation

There are few Arduino Libraries that are needed for the Wireless connectivity. Follow through to install all the libraries needed:

### 1. Install the Seeed_Arduino_atWiFi

1. Visit the [Seeed_Arduino_atWiFi](https://github.com/Seeed-Studio/Seeed_Arduino_atWiFi) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_atWiFi library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_atWiFi` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 2. Install the Seeed-Arduino-FreeRTOS

1. Visit the [Seeed-Arduino-FreeRTOS](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) repositories and download the entire repo to your local drive.

2. Now, the Seeed-Arduino-FreeRTOS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed-Arduino-FreeRTOS` file that you've have just downloaded.

### 3. Install the Seeed_Arduino_atUnified

1. Visit the [Seeed_Arduino_atUnified](https://github.com/Seeed-Studio/Seeed_Arduino_atUnified) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_atUnified library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_atUnified` file that you've have just downloaded.

### 4. Install the Seeed-Studio/esp-at-lib

1. Visit the [Seeed-Studio/esp-at-lib](https://github.com/Seeed-Studio/esp-at-lib) repositories and download the entire repo to your local drive.

2. Now, the esp-at-lib library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `esp-at-lib` file that you've have just downloaded.