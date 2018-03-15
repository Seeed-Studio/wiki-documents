---
title: ReSpeaker Mic Array V2
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker Mic Array V2
prodimagename:
surveyurl:
sku:
---

![](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/img/usb_4_mic_array.png)

## Description

Seeed’s ReSpeaker Mic Array v2.0 is an upgraded version of ReSpeaker Mic Array v1 which based on XVSM-2000. The v2.0 developed based on XVF-3000 from XMOS. It can be stacked (connected) right onto the top of ReSpeaker Core to significantly improve the voice interaction experience. The board integrates 4 PDM microphones to help enhance ReSpeaker's acoustic DSP performance to a much higher level.  

ReSpeaker Mic Array v2.0 supports USB Audio Class 1.0(UAC 1.0) directly. All major Operating System, like Windows, macOS, Linux are compatible with UAC 1.0, so it can be runs as a sound card without ReSpeaker Core, but has speech algorithm, like farfield on those systems.

ReSpeaker Mic Array v2.0 has two firmwares, one includes speech algorithms, another is just capture raw voice data for specially purpose.

[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)

## Version

| Product Version          | Changes                                                                  | Released Date |
|--------------------------|--------------------------------------------------------------------------|---------------|
| ReSpeaker Mic Array V1.0 | Initial                                                                  | Aug 15, 2016  |
| ReSpeaker Mic Array V2.0 | XVSM-2000 is EOL,change MCU to XVF-3000 and reduce the Mics from 7 to 4. | Jan 25, 2018  |

## Features

- Far-field voice capture
- Support USB Audio Class 1.0 (UAC 1.0)
- Four microphones array
- 12 programmable RGB LED indicators
- Speech algorithms and features
- Voice Activity Detection
- Direction of Arrival
- Beamforming
- Noise Suppression
- De-reverberation
- Acoustic Echo Cancellation

## Specification

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 518px">
<colgroup>
<col style="width: 151px">
<col style="width: 367px">
</colgroup>
  <tr>
    <th class="tg-031e">Items</th>
    <th class="tg-031e">Specification</th>
  </tr>
  <tr>
    <td class="tg-031e" rowspan="7">XVF-3000 with 16 cores</td>
    <td class="tg-031e">16 real-time logical cores on 2 xCore tiles</td>
  </tr>
  <tr>
    <td class="tg-031e">Cores share up to 2400 MIPS in dual issue mode</td>
  </tr>
  <tr>
    <td class="tg-yw4l">512KB internal single-cycle SRAM and 2MB built-in flash</td>
  </tr>
  <tr>
    <td class="tg-yw4l">16KB internal OTP (max 8KB per tile)</td>
  </tr>
  <tr>
    <td class="tg-yw4l">USB PHY, fully compliant with USB 2.0 specification</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Programmable I/O</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Supply DFU Mode</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="7">4 Digital Microphones(Model: MP34DT01-M)</td>
    <td class="tg-yw4l">Single supply voltage</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Low power consumption</td>
  </tr>
  <tr>
    <td class="tg-yw4l">120 dBSPL acoustic overload point</td>
  </tr>
  <tr>
    <td class="tg-yw4l">61 dB signal-to-noise ratio</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Omnidirectional sensitivity</td>
  </tr>
  <tr>
    <td class="tg-yw4l">– 26 dBFS sensitivity</td>
  </tr>
  <tr>
    <td class="tg-yw4l">PDM output</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">12 RGB LEDs（Model: APA102）</td>
    <td class="tg-yw4l">256 levels brightness</td>
  </tr>
  <tr>
    <td class="tg-yw4l">800kHz line data transmission</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="4">Audio output</td>
    <td class="tg-yw4l">On board 3.5mm Aux output</td>
  </tr>
  <tr>
    <td class="tg-yw4l">WOLFSON WM8960</td>
  </tr>
  <tr>
    <td class="tg-yw4l">24 or 16bit 16kHz stereo output</td>
  </tr>
  <tr>
    <td class="tg-yw4l">40 mW output Power into 16 Ω @ 3.3 V</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Size</td>
    <td class="tg-yw4l">Diameter 70mm</td>
  </tr>
  <tr>
    <td class="tg-yw4l" rowspan="2">Power</td>
    <td class="tg-yw4l">5V supply from Micro USB or expansion header</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Power Consumption 190ma</td>
  </tr>
</table>

## Hardware Overview

![](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/img/Hardware%20Overview.png)

- <font face="" size=3 font color="ff0000">①</font> **XMOS XVF-3000:**
It integrates advanced DSP algorithms that include Acoustic Echo Cancellation (AEC), beamforming, dereverberation, noise suppression and gain control.

- <font face="" size=3 font color="ff0000">②</font> **WM8960:**
The WM8960 is a low power stereo codec featuring Class D speaker drivers to provide 1 W per channel into 8 W loads.

- <font face="" size=3 font color="ff0000">③</font> **3.5mm Headphone jack:**
Output audio, We can plug active speakers or Headphones into this port.

- <font face="" size=3 font color="ff0000">④</font> **USB Port:**
Provide the power and control the mic array.

- <font face="" size=3 font color="ff0000">⑤</font> **RGB LED:**
Three-color RGB LED.

- <font face="" size=3 font color="ff0000">⑥</font> **Digital Microphone:**
The MP34DT01-M is an ultra-compact, lowpower, omnidirectional, digital MEMS microphone built with a capacitive sensing element and an IC interface.

### Pin Map
![](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/img/Pin_Map.png)

## Dimensions
![](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/img/Dimension.png)

## Applications

- USB voice capture
- Smart speaker
- Intelligent voice assistant systems
- Voice recorders
- Voice conferencing system
- Meeting communicating equipment
- Voice interacting robot
- Car voice assistant
- Other scenarios need voice command

## Getting Started

!!!Note
  ReSpeaker_Mic_Array_V2 is compatiable with Windoes, Mac and Linux systems.

### Install DFU and LED Control Driver  

- **Windows:** Audio recording and playback works well by default. Libusb-win32 driver is only required to control LEDs an DSP parameters on Windows. We use [a handy tool - Zadig]() to install the libusb-win32 driver for both `SEEED DFU` and `SEEED Control` (ReSpeaker Mic Array has 2 devices on Windows Device Manager).

![](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/img/usb_4mic_array_driver.png)

!!!Note
  Please make sure that libusb-win32 is selected, not WinUSB or libusbK.

- **MAC:** No driver is required.
- **Linux:** No driver is required.

### Play with Raspberry

#### Update firmwares

There are 2 firmwares. One includes 1 channel data, while the other inlcudes 6 channels data. Here is the table for the differences.

| Firmware             | Channels | Note                                                                                                                                                                    |
|----------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| default_firmware.bin | 1              | Processed audio for ASR                                                                                                                                                 |
| i6_firmware.bin      | 6              |  Channel 0: processed audio for ASR,  Channel 1: mic 13 raw data, Channel 2: mic 8 raw data, Channel 3: mic 10 raw data, Channel 4: mic 11 raw data, Channel 5: merged playback |

Here is the audacity recording for the i6_firmware.
![](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/img/Audacity.png)

The Mic array supports the USB DFU. We develop a [python script](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/res/dfu.py) to update the firmware through USB.

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download default_firmware.bin  # Change the bin names base on needs
```
Here is the firmware downloading result.
![](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/img/Download_firmware.png)


#### Control the LEDs

We can control the ReSpeaker Mic Array V2's LEDs through USB. The USB device has a Vendor Specific Class Interface which can be used to send data through USB Control Transfer. We refer [pyusb python library](https://github.com/pyusb/pyusb) and come out the [usb_pixel_ring python library](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py).

The LED control command is sent by pyusb's usb.core.Device.ctrl_transfer(), its parameters as below：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

Here are the usb_pixel_ring APIs.

| Command | Data                           | API                            | Note                                                                                                              |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | trace mode, LEDs changing depends on VAD* and DOA*                                                                |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | mono mode, set all RGB LED to a single color, for example Red(0xFF0000), Green(0x00FF00)， Blue(0x0000FF)         |
| 2       | [0]                            | pixel_ring.listen()            | listen mode, similar with trace mode, but not turn LEDs off                                                       |
| 3       | [0]                            | pixel_ring.speak()             | wait mode                                                                                                         |
| 4       | [0]                            | pixel_ring.think()             | speak mode                                                                                                        |
| 5       | [0]                            | pixel_ring.spin()              | spin mode                                                                                                         |
| 6       | [r, g, b, 0] * 12              | pixel_ring.custimize()         | custom mode, set each LED to its own color                                                                        |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | set brightness, range: 0x00~0x1F                                                                                  |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | set color palette, for example, pixel_ring.set_color_palette(0xff0000, 0x00ff00) together with pixel_ring.think() |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | set center LED: 0 - off, 1 - on, else - depends on VAD                                                            |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | show volume, range: 0 ~ 12                                                                                        |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | set pattern, 0 - Google Home pattern, others - Echo pattern                                                       |


Here is the example to control the leds.
```
git clone https://github.com/respeaker/pixel_ring.git
sudo python setup.py install
sudo python examples/usb_mic_array.py
```
Here is the code of the usb_mic_array.py.

```
import time

from pixel_ring import pixel_ring


if __name__ == '__main__':
    pixel_ring.change_pattern('echo')
    while True:

        try:
            pixel_ring.wakeup()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.speak()
            time.sleep(6)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break


    pixel_ring.off()
    time.sleep(1)

```


#### Tuning

We can configure some parameters of built-in algorithms.

- Get the full list parameters:

```
python tuning.py -p
```

- For example, we can turn off Automatic Gain Control (AGC):

```
python tuning.py AGCONOFF 0
```

#### Extract Voice

We use [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) to extract voice through USB. We also can use below commands to record or play the voice.

```Python
arecord -D plughw:0,0 -f cd test.wav # record
aplay -D plughw:1,0 -f cd test.wav # play
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

- Step 1, We need to run the following script to get the device index number of Mic Array:

```Python
sudo pip install pyaudio
cd ~
mkdir extract_voice
nano device_index.py
```
- Step 2, copy below code and paste on device_index.py.

```Python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```
- Step 3, press Ctrl + X to exit and press Y to save.

- Step 4, run 'sudo python device_index.py' and we will see the device ID as below.

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- Step 5, change `RESPEAKER_INDEX = 2` to index number. Run the script to record a speech.

```Python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 1 # change base on firmwares, default_firmware.bin as 1 or i6_firmware.bin as 6
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 1  # refer to input device id
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

#### Realtime Sound Source Localization and Tracking
[ODAS](https://github.com/introlab/odas) stands for Open embeddeD Audition System. This is a library dedicated to perform sound source localization, tracking, separation and post-filtering. Let's have a fun with it.

- Step 1. Get [ODAS Studio](https://github.com/introlab/odas_web/releases) and open it.
- Step 2. The odascore will be at odas/bin/odascore, the config file is odas.cfg. Please change odas.cfg based on your sound card number.

```
interface: {
    type = "soundcard";
    card = 1;
    device = 0;
}
```
- Step 3. Upgrade mic array with i6_firmware.bin which includes 4 channels raw audio data.

![](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/img/live_data.png)



## Resource
- **[PDF]** [ReSpeaker MicArray v2.0 Product Brief](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/res/ReSpeaker%20MicArray%20v2.0%20Product%20Brief.pdf)
- **[PDF]** [XVF3000 Product Brief](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [XVF3000 Datasheet](https://github.com/SeeedDocument/ReSpeaker_Mic_Array_V2/raw/master/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)


## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](http://seeedstudio.com/forum/).
