---
description: ReSpeaker Mic Array
title: ReSpeaker Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Mic_Array
last_update:
  date: 1/12/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

## Description

The ReSpeaker Mic Array can be stacked (connected) right onto the top of ReSpeaker Core to significantly improve the voice interaction experience. It is developed based on the XVSM-2000 Smart Microphone from XMOS. The board integrates 7 PDM microphones to help enhance ReSpeaker's acoustic DSP performance to a much higher level.

## Key Features

- Far-field Voice Capture
- Acoustic Source Localization
- Beamforming
- Noise Suppression
- De-reverberation
- Acoustic Echo Cancellation

## Technology Specs

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

- XVSM-2000 with 16 cores inside:
  - 16 real-time logical cores on 2 xCore tiles.
  - Cores share up to 2000 MIPS in dual issue mode.
  - 512KB internal single-cycle SRAM and 2MB built-in flash.
  - 16KB internal OTP (max 8KB per tile),
  - USB PHY, fully compliant with USB 2.0 specification.
  - Programmable I/O.
  - Supply DFU Mode.
- 7 Digital Microphones:
  - far field voice recognition or sound localization usefulness.
  - ST MP34DT01-M.
  - -26 dBFS sensitivity.
  - 120 dBSPL acoustic overload point.
  - 61 dB signal-to-noise ratio.
  - Omnidirectional sensitivity.
  - PDM output.
- 12 RGB LEDs:
  - 256 levels brightness.
  - 800kHz line data transmission.
- Audio output:
  - On board 3.5mm Aux output.
  - WOLFSON WM8960.
  - 24 or 16bit 16kHz stereo output.
  - 40 mW output Power into 16 Ω @ 3.3 V.
- Clock Sync：
  - On board PLL.
  - Programmable sample clock for DAC,MIC.
    (Disable if DSP is used in XVSM-2000).
- Power supply:
  - 5V supply from Micro USB or expansion header.
- Size:
  - Diameter 70mm.
- Weight:
  - 15.25g

## Driver for ReSpeaker Mic Array

- For Windows Users, click [here](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Driver) to install the driver
- For Linux or Mac Users, don't need to install the driver

## Extract voice with ReSpeaker Core

When Mic Array is stacked on ReSpeaker Core,  it will be detected(check with `aplay -l`) automatically. And we recommand that you could using our [respeaker\_python\_library](https://github.com/respeaker/respeaker_python_library) to develop your speech interaction application so that you don't need to care about if the Mic Array is on or not. Our library will check this and choose Mic Array when it is on.

Also, in that library, [*class Microphone*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py), which is based on **Pyaudio**, has a method named [*listen*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py#L207), to extract voice. See our [example code](https://github.com/respeaker/respeaker_python_library/blob/master/examples/SpeechRecognition_translator.py) here for usage.

## Extract voice on PC or Mac or Linux or Raspberry Pi

Here is an example also based on Pyaudio:

First, you need to run the following script to get the device index number of Mic Array:

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

Then, change `RESPEAKER_INDEX = 1` to your index number. Run the script to record a speech.

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 2
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 1
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## Firmwares for ReSpeaker Mic Array

You could download ReSpeaker Mic array firmwares for DFU [here](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Firmware). We have provided two versions:

- *xvsm version* : initial version, outputs 2 channels data with dsp support.
- *raw version* : outputs 8 channels mic raw data, this firmware is without xvsm dsp support, so it does not support some functions such as DOA, AEC and so on.

Please see [here](https://github.com/respeaker/mic_array_dfu) for **updating firmware on Linux**.
Please see [here](https://github.com/jerryyip/respeaker_micarray_dfu_mac_linux) for **updating firmware on Mac**.

## HID for controlling ReSpeaker Mic Array

Users are able to controlling ReSpeaker Mic Array via USB HID. Please see our [Communication protocol](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool).

Note that if you are using the lastest *raw version*, you could only control the LEDs.

And here is an python example :

```python
#!/usr/bin/env python

import respeaker.usb_hid as usb_hid

class MicArray:
    def __init__(self):
        self.hid = usb_hid.get()

    def write(self, address, data):
        data = self.to_bytearray(data)
        length = len(data)
        if self.hid:
            packet = bytearray([address & 0xFF, (address >> 8) & 0x7F, length & 0xFF, (length >> 8) & 0xFF]) + data
            packet = list(packet)
            self.hid.write(packet)

    def read(self, address, length):
        self.hid.write(list(bytearray([address & 0xFF, (address >> 8) & 0xFF | 0x80, length & 0xFF, (length >> 8) & 0xFF])))
        for _ in range(6):
            data = self.hid.read()
            # print [int(x) for x in data]
            # skip VAD data
            if int(data[0]) != 0xFF and int(data[1]) != 0xFF:
                return data[4:(4 + length)]

    @staticmethod
    def to_bytearray(data):
        if type(data) is int:
            array = bytearray([data & 0xFF])
        elif type(data) is bytearray:
            array = data
        elif type(data) is str:
            array = bytearray(data)
        elif type(data) is list:
            array = bytearray(data)
        else:
            raise TypeError('%s is not supported' % type(data))
        return array

def main():
    import sys
    import struct

    mic = MicArray()

    print("Using: %s" % usb_hid.usb_backend)

    if len(sys.argv) < 3:
        print('Usage: python {} w 0x0 0x000003'.format(sys.argv[0]))
        sys.exit(1)

    try:
        if sys.argv[2].startswith('0x'):
            address = int(sys.argv[2], 16)
        else:
            address = int(sys.argv[2])

        if sys.argv[1] == 'w':
            if sys.argv[3].startswith('0x'):
                data = int(sys.argv[3], 16)
            else:
                data = int(sys.argv[3])

            if data > 0xFFFF:
                data = struct.pack('<I', data)
            elif data > 0xFF:
                data = struct.pack('<H', data)

            mic.write(address, data)
        else:
            print [int(x) for x in mic.read(address, 4)]
    except Exception as e:
        print(e.message)

if __name__ == '__main__':
    main()
```

## FAQ

### Q1: How to get audio source direction from Mic Array with *xvsm version* firmware?

  When using Windows, follow the [guide](https://github.com/respeaker/get_started_with_respeaker/wiki/Mic-Array) or use our [HID tool](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool).

  Python & C hidapi examples are [here](https://github.com/elthef/respeaker-xmos-hid)

### Q2: How to use audacity to extract the 8 channels raw data on Windows?

  Please select Windows WASA, here is the picture. If you want to switch firmware version from 0x032 to 0x082, before you do that, please uninstall your device in
devices managment first. after uninstalling, update the firmware via DFU and reinstall the device.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/audacity.png)

### Q3: How does Mic array communicate with Respeaker Core?

  Mic array communicates with Respeaker Core through USB.

### Q4: What does [ReSpeaker-Microphone-Array-HID-tool](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool) VAD stand for?

  ![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/VAD.png)

  | Data  | Degree |
  |-------|--------|
  | 1e, 0 | 30     |
  | e, 1  | 270    |
  | d2,0  | 210    |
  | 96,0  | 150    |

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Eagle%20File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]**[ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.sch.zip)
- **[Eagle]**[ReSpeaker Microphone Array BRD](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.brd.zip)
- **[PDF]** [ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Sch.pdf)
- **[PDF]** [ReSpeaker Microphone Array PCB](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20PCB.pdf)

## Project

**Build Google Assistant on RPi with ReSpeaker Mic Array**: With ReSpeaker Mic Array, now we can build Google Assistant on Raspberry Pi!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/build-google-assistant-on-rpi-with-respeaker-mic-array-1030bb/embed' width='350'></iframe>

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

