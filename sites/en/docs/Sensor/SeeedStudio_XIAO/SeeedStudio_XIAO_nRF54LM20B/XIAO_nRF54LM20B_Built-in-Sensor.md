---
title: Usage of Built-in Sensors for XIAO nRF54LM20B
sidebar_label: Built-in Sensors for XIAO
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - built_in_sensor
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/14_imu_mic.png
slug: /xiao_nrf54lm20b_with_onboard
sku:
last_update:
  date: 10/26/2026
  author: Brandy
createdAt: '2026-10-26'
updatedAt: '2026-10-26'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_onboard/
---

# Usage of Built-in Sensors for XIAO nRF54LM20B

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_Built-in-Sensor.png" style={{width:600, height:'auto'}}/></div>



<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

The XIAO nRF54LM20B is equipped with abundant on-board sensors to support multi-scenario applications. It includes the LSM6DS3TR-C six-axis sensor for posture recognition, and the MSM261DGT006 digital MEMS microphone that supports PDM digital output and omnidirectional sound pickup, which is suitable for intelligent voice scenarios. This article introduces the development and usage methods based on the rich on-board peripherals of XIAO nRF54LM20B.

:::tip

- This article is developed based on the PlatformIO build system and Zephyr RTOS. If you have no prior experience with them, please refer to [Getting Started With SeeedStudio XIAO nRF54LM20B](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/)

:::

## Hardware Preparation

This article is developed based on the XIAO nRF54LM20B, and you need to prepare the relevant hardware in advance.

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
</tr>
</table>
</div>

This image shows the approximate locations of the on-board peripherals.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/14_imu_mic.png" style={{width:400, height:'auto'}}/></div>

## IMU

The LSM6DS3TR-C is a six-axis sensor integrating a 3-axis digital accelerometer and a 3-axis digital gyroscope, which belongs to the iNEMO inertial measurement unit (IMU) launched by STMicroelectronics. On XIAO nRF54LM20B, this sensor supports interrupt-triggered data output. It features a full-scale acceleration range of ±2/±4/±8/±16 g and an angular velocity range of ±125/±250/±500/±1000/±2000 dps, and supports persistent low-power mode, making it suitable for various motion detection scenarios. The on-board chip communicates with it via the I2C protocol to acquire data.
:::tip

- For more information about the LSM6DS3TR-C, please visit:[Product overview for LSM6DS3TR-C](https://www.st.com/en/mems-and-sensors/lsm6ds3tr-c.html) and [LSM6DS3TR-C Datasheet](https://www.st.com/resource/en/datasheet/lsm6ds3tr-c.pdf)

:::




### Obtain Six-axis Data

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/4_imu/1_6axis_data" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


#### Result

:::tip
If you want to directly verify the performance of the IMU, clone the Platform-seeedboards repository, locate the zephyr-imu example under the examples directory, then compile and flash the program to start the test.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/boad_use/3_6.png" style={{width:800, height:'auto'}}/></div>



### Wake on Motion

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/4_imu/2_motion_wake" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


#### Result

This project is an IMU shake-to-wake demo. After flashing, on power-up or reset the blue LED lights for about 0.2 s (self-test passed) and then turns off; the serial port (115200) prints `IMU wake-up armed (WAKE_UP_SRC=0x00, INT1=P0.06)` and `Sleeping... shake to wake.`, after which the board enters ultra-low-power sleep — the main thread blocks on a semaphore in WFI + System ON idle. Shake the board and the blue LED flashes for 80 ms while the serial port prints `Hello XIAO nRF54LM20B [shake #1, src=0x0a]`; the IMU's latched interrupt is then cleared automatically and the board goes back to sleep, with the count incrementing by one on each shake. In principle, the LSM6DS3TR-C wake-up interrupt wakes the main core through the INT1-P0.06 rising edge (GPIOTE DETECT wake source); USB stays enumerated during sleep, so printing resumes immediately on wake. The shake threshold is about 500 mg, so a normal shake always triggers.

:::tip

1. Set the baud rate to 115200 when viewing data via the serial monitor.
2. Specify the baud rate as 115200 in the **platformio.ini** configuration file for the PlatformIO IDE serial monitor.

```ini
[env:seeed-xiao-nrf54lm20b]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20b
monitor_speed = 115200
```

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/boad_use/1.png" style={{width:800, height:'auto'}}/></div>
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/boad_use/2_gif.gif" style={{width:800, height:'auto'}}/></div>



### Posture Recognition



The IMU can fuse three-axis acceleration data to calculate pitch, yaw and roll attitude angles for posture recognition. It can also work with corresponding controllers to realize motion control, or be applied in low-power scenarios such as attitude-triggered wake-up.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/4_imu/3_electronic_ocean" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


#### Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/boad_use/6_gif.gif" style={{width:800, height:'auto'}}/></div>

## RTC

The XIAO nRF54LM20B features a built-in Global Real-Time Counter (GRTC), enabling timekeeping, timestamp generation, and scheduled wake-up without requiring an external RTC module.

The GRTC can continue operating in System OFF mode as long as the board remains powered, allowing the device to wake up at a configured time while maintaining low power consumption.

:::note
The XIAO nRF54LM20B does not include a dedicated RTC backup battery. If all power is removed, the GRTC stops counting and the time reference must be reinitialized when power is restored.
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/9_RTC/1_rtc_systemoff" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Result

- The program starts counting from the time of compilation and flashing. Open the serial port tool to observe the running effect, and all expected functions are implemented.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/boad_use/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

## MIC 

The XIAO nRF54LM20B is equipped with the MSM261DGT006 digital MEMS microphone for voice input. It connects directly via the PDM interface without requiring an ADC. It is suitable for wearable devices, smart devices, voice recognition, audio recording and other application scenarios that require acoustic sensing functions.


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/2_Mic_demo" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>




### Result

Compile and flash the program. While recording, the board streams 16 kHz / 16-bit / mono PCM to the host over the USB CDC serial port, and the receiver script wraps that stream into a `.wav` file.

#### Run the receiver script

The script depends on pyserial. Install it first:

```bash
pip install pyserial
```

Start the script before pressing anything on the board — it opens the serial port, asserts DTR, and waits for the stream:

```bash
python3 capture.py
```

It auto-detects the first `/dev/cu.usbmodem*` port at 115200 baud. On Linux or Windows, pass the port explicitly, for example `python3 capture.py /dev/ttyACM0` or `python3 capture.py COM3`.

#### Record and save

Press the BOOT (User) button to start recording — the RGB-G LED blinks at about 2.5 Hz and the PDM microphone begins capturing. Speak towards the microphone, then press the button again to stop; the LED returns to steady on and the board sends the end-of-stream marker. The script writes `rec_<timestamp>.wav` to its current working directory and prints the file path, byte size and duration. Each button press produces one file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/boad_use/5_gif.gif" style={{width:800, height:'auto'}}/></div>
<br/>

| State | Meaning |
|---|---|
| Steady on | Standby: powered on, ready, not recording |
| ~2.5 Hz flashing | Recording in progress |
| Returns to steady on | Recording finished |

:::tip
Run `capture.py` first and wait for the "Listening on ..." prompt before pressing the BOOT button — the script must be ready to catch the start-of-stream marker, or that recording will be lost. If the port is reported busy, close any other serial monitor (screen, the VS Code serial monitor, a web-serial page) first.
:::

As each recording is finalized the script prints the saved file name, byte size and duration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/boad_use/4.png" style={{width:800, height:'auto'}}/></div>
<br/>


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
