---
description: Grove - GSR Sensor
title: Grove - GSR Sensor
keywords:
  - Grove
  - GSR
  - biometric sensor
image: https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/GSR.jpg
slug: /Grove-GSR_Sensor
sku: 101020052
last_update:
  date: 06/08/2026
  author: Carla Guo
createdAt: '2023-01-06'
updatedAt: '2026-06-08'
url: https://wiki.seeedstudio.com/Grove-GSR_Sensor/
---

# Grove - GSR Sensor

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/GSR.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now</font></span></strong>
    </a>
</div><br />

GSR stands for galvanic skin response, a method of measuring changes in the electrical characteristics of the skin. Strong emotion can stimulate the sympathetic nervous system, causing sweat glands to secrete more sweat. Grove - GSR Sensor helps you observe this response by attaching two electrodes to two fingers on one hand. It can be used in projects such as emotion-related interaction, stress trend observation, and sleep quality monitoring.

:::caution
Grove - GSR Sensor measures human resistance, not conductivity.
:::


## Introduction

### Features

- Grove-compatible analog sensor for galvanic skin response projects.
- Detects resistance changes from skin contact through two finger electrodes.
- Sensitivity can be adjusted with the onboard potentiometer.
- Supports both 3.3V and 5V systems.
- Outputs an analog voltage that can be read by Arduino, Raspberry Pi with Grove Base Hat, or other analog-capable controllers.


### Specification

| Parameter | Value/Range |
| --- | --- |
| Operating voltage | 3.3V/5V |
| Sensitivity | Adjustable via a potentiometer |
| Input signal | Resistance, not conductivity |
| Output signal | Voltage, analog reading |
| Finger contact material | Nickel |

### Version

| Product Version | Changes | Released Date |
| --- | --- | --- |
| Grove - GSR Sensor V1.0 | Initial release | June 19, 2013 |
| Grove - GSR Sensor V1.2 | Added C3 100 nF between M324PW-TSSOP14 and GND | July 31, 2014 |


### Applications

- Emotion-related interactive projects.
- Stress or relaxation trend observation.
- Sleep quality monitoring experiments.
- Biofeedback learning projects.
- Educational demonstrations for analog biometric sensing.

:::caution
This module is intended for educational and experimental projects. It is not a medical device and should not be used for diagnosis, treatment, or health-critical decisions.
:::

## Getting Started

This guide shows how to read Grove - GSR Sensor values with Arduino and Raspberry Pi. The sensor outputs an analog voltage, so the examples focus on reading and plotting the analog value.

:::tip
More details about Grove modules are available in the [Grove System](https://wiki.seeedstudio.com/Grove_System/) guide.
:::

### Hardware Preparation

#### Arduino

Prepare the following hardware:

| Seeeduino V4.2 | Base Shield | Grove - GSR Sensor |
| --- | --- | --- |
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" style={{width:220, height:'auto'}}/></div> |
| [Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [Get One Now](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html) |

Connect the Grove - GSR Sensor to **A0** on the Base Shield, plug the Base Shield into Seeeduino V4.2, and connect the board to your PC with a USB cable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Hardware_connection.jpg" style={{width:700, height:'auto'}}/></div>

If you do not have a Base Shield, connect the sensor directly to Arduino as shown below.

| Seeeduino | Grove - GSR Sensor |
| --- | --- |
| GND | Black |
| 5V | Red |
| NC | White |
| A0 | Yellow |

#### Raspberry Pi

Prepare the following hardware:

| Raspberry Pi | Grove Base Hat for Raspberry Pi | Grove - GSR Sensor |
| --- | --- | --- |
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" style={{width:220, height:'auto'}}/></div> |
| [Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html) | [Get One Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html) | [Get One Now](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html) |

Plug the Grove Base Hat into Raspberry Pi, connect Grove - GSR Sensor to the **A0** port of the Base Hat, and connect the Raspberry Pi to your PC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/With_Hat.jpg" style={{width:700, height:'auto'}}/></div>

:::note
You can connect Grove - GSR Sensor to any analog port on the Grove Base Hat, but make sure the software command uses the corresponding channel number.
:::

:::info TODO
Add updated wiring photos if the new demos use XIAO, SenseCAP, ESP32, Wio Terminal, or another newer controller.
:::

### Software Preparation

#### Arduino

Install and open the Arduino IDE. If this is your first time using Arduino, refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).

No external Arduino library is required for the basic analog reading example. The sensor can be read with `analogRead()`.

This example reads the analog value from Grove - GSR Sensor and prints the averaged result to the serial port.

```cpp
const int GSR = A0;
int sensorValue = 0;
int gsr_average = 0;

void setup() {
    Serial.begin(9600);
}

void loop() {
    long sum = 0;

    for (int i = 0; i < 10; i++) {
        sensorValue = analogRead(GSR);
        sum += sensorValue;
        delay(5);
    }

    gsr_average = sum / 10;
    Serial.println(gsr_average);
}
```

After uploading the sketch:

1. Do not wear the GSR electrodes.
2. Open **Tools > Serial Plotter** in Arduino IDE.
3. Use a screwdriver to adjust the potentiometer until the serial output is minimized.
4. Record this value as `Serial_calibration`.
5. Wear the GSR electrodes on two fingers of one hand.
6. Observe the trend in the Serial Plotter. Try taking a deep breath and watch how the values change.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_Result.png" style={{width:700, height:'auto'}}/></div>

The human resistance can be estimated with the following formula:

```text
Human Resistance = ((1024 + 2 x Serial_Port_Reading) x 10000) / (Serial_calibration - Serial_Port_Reading)
```

- Unit: ohm.
- `Serial_Port_Reading`: value displayed on the serial port, from 0 to 1023.
- `Serial_calibration`: value recorded when the potentiometer is adjusted until the serial output is minimized.

:::info TODO
Validate the formula against the latest schematic and add an explanation of the circuit assumptions behind the calculation.
:::

#### Raspberry Pi

Follow the [Grove Base Hat for Raspberry Pi software installation guide](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.

Download the `grove.py` library:

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

:::info TODO
Check whether the current Raspberry Pi OS setup still uses the same `grove.py` installation flow, and update these steps if the recommended installation has changed.
:::

Create a new file in the `grove.py/grove` directory:

```bash
cd grove.py/grove
nano grove_gsr_sensor.py
```

Copy the following code into the file:

```python
import sys
import time
from grove.adc import ADC


class GroveGSRSensor:
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def GSR(self):
        return self.adc.read(self.channel)


Grove = GroveGSRSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGSRSensor(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('GSR value: {0}'.format(sensor.GSR))
        time.sleep(.3)


if __name__ == '__main__':
    main()
```

Run the code:

```bash
python grove_gsr_sensor.py 0
```

If everything goes well, you will see output similar to the following:

```text
pi@raspberrypi:~/grove.py/grove $ python grove_gsr_sensor.py 0
Detecting...
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 383
GSR value: 256
GSR value: 314
GSR value: 348
GSR value: 361
GSR value: 368
GSR value: 371
```

Press `Ctrl` + `C` to stop the program.

:::note
For analog ports on the Grove Base Hat, the silkscreen may show **A1** or **A0**, while the command uses channel numbers such as `0` and `1`. Make sure the sensor is connected to the port that matches the channel number in your command.
:::

## Demo 1: [TODO - Add Demo Title]

:::info TODO
Add the first new demo here.

Suggested content to provide:

- Demo goal and application scenario.
- Supported controller or platform.
- Hardware list.
- Wiring diagram or connection photo.
- Required libraries or online services.
- Full source code.
- Expected serial output, screenshots, or result image.
- Troubleshooting notes.
:::

## Demo 2: [TODO - Add Demo Title]

:::info TODO
Add the second new demo here.

Suggested content to provide:

- Demo goal and application scenario.
- Supported controller or platform.
- Hardware list.
- Wiring diagram or connection photo.
- Required libraries or online services.
- Full source code.
- Expected serial output, screenshots, or result image.
- Troubleshooting notes.
:::

## FAQ

### What is the unit of the output?

The sensor output is measured as voltage and printed as an analog reading. On Arduino, the default `analogRead()` range is usually `0` to `1023`.

:::info TODO
Add FAQ entries for calibration, noisy readings, electrode placement, long-term wearing comfort, and interpreting trends.
:::

## Hardware Design Files

### Grove - GSR v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

### Grove - GSR v1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[PDF]** [Download Wiki PDF](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Sensor_WiKi.pdf)
- **[Eagle]** [Grove - GSR v1.0 Eagle File](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip)
- **[Eagle]** [Grove - GSR v1.2 Eagle File](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip)
- **[Datasheet]** [LM324 datasheet](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Lm324.pdf)

:::info TODO
Add links for the new demo repositories, downloadable code packages, videos, updated PDF, and any new product documents.
:::

## Projects

**eMotion - Towards a Better Future**: This project uses biometric sensors, the Helium platform, and Google Cloud to surface possible anxiety states.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed' width='350'></iframe>

:::info TODO
Confirm whether this project is still relevant. Replace or add newer community projects if available.
:::

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
