---
description: The ReSpeaker XVF3800 USB 4-Mic Array is a professional circular microphone array with AEC, beamforming, noise suppression, and 360° voice capture. Paired with the XIAO ESP32S3, it enables advanced voice control for smart devices, robotics, and IoT applications. Discover seamless integration and dual-mode flexibility.

title: reSpeaker XVF3800 Control with Python
keywords:
- reSpeaker
- python
- sdk
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_python_sdk
last_update:
  date: 11/14/2025
  author: Kasun Thushara
---

## Introduction 

In this section, we are going to talk about how to control your ReSpeaker XVF-3800 using the Python SDK. It makes development more convenient for users who want to build their own applications.
For instance, you can detect where the voice is coming from, perform voice activity detection (VAD), control LEDs, and much more.

## Python SDK

We have a comprehensive Python guide on how to communicate with the XVF3800 using the USB firmware. This Python script can be run in your favorite IDE without requiring the XVF3800 **XVF_Host**.

You need to install the `pyusb` library.

### How to get DOA and VAD 

```python
import sys
import struct
import usb.core
import usb.util
import time

# name, resid, cmdid, length, type
PARAMETERS = {
    "VERSION": (48, 0, 3, "ro", "uint8"),
    "AEC_AZIMUTH_VALUES": (33, 75, 16, "ro", "radians"),
    "DOA_VALUE": (20, 18, 4, "ro", "uint16"),
    "REBOOT": (48, 7, 1, "wo", "uint8"),
}

class ReSpeaker:
    TIMEOUT = 100000  # USB timeout

    def __init__(self, dev):
        self.dev = dev  # store device

    def write(self, name, data_list):
        try:
            data = PARAMETERS[name]  # get param data
        except KeyError:
            return

        if data[3] == "ro":  # check read-only
            raise ValueError('{} is read-only'.format(name))

        if len(data_list) != data[2]:  # count mismatch
            raise ValueError('{} value count is not {}'.format(name, data[2]))

        windex = data[0]  # resid index
        wvalue = data[1]  # command ID
        data_type = data[4]  # type info
        data_cnt = data[2]  # value count
        payload = []  # USB payload

        if data_type == 'float' or data_type == 'radians':  # float pack
            for i in range(data_cnt):
                payload += struct.pack(b'f', float(data_list[i]))
        elif data_type == 'char' or data_type == 'uint8':  # byte pack
            for i in range(data_cnt):
                payload += data_list[i].to_bytes(1, byteorder='little')
        else:  # int pack
            for i in range(data_cnt):
                payload += struct.pack(b'i', data_list[i])

        print("WriteCMD: cmdid: {}, resid: {}, payload: {}".format(wvalue, windex, payload))

        # send control transfer
        self.dev.ctrl_transfer(
            usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, wvalue, windex, payload, self.TIMEOUT)

    def read(self, name):
        try:
            data = PARAMETERS[name]  # get param info
        except KeyError:
            return

        resid = data[0]  # resource ID
        cmdid = 0x80 | data[1]  # read command
        length = data[2] + 1  # add status byte

        # read control transfer
        response = self.dev.ctrl_transfer(
            usb.util.CTRL_IN | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, cmdid, resid, length, self.TIMEOUT)

        if data[4] == 'uint8':  # return bytes
            result = response.tolist()
        elif data[4] == 'radians':  # unpack floats
            byte_data = response.tobytes()
            num_values = (length - 1) / 4
            match_str = '<'
            for i in range(int(num_values)):
                match_str += 'f'
            result = struct.unpack(match_str, byte_data[1:length])
        elif data[4] == 'uint16':  # return uint16 list
            result = response.tolist()

        return result  # return parsed data

    def close(self):
        usb.util.dispose_resources(self.dev)  # release device

def find(vid=0x2886, pid=0x001A):
    dev = usb.core.find(idVendor=vid, idProduct=pid)  # find device
    if not dev:
        return
    return ReSpeaker(dev)  # return instance

def main():
    dev = find()  # find device
    if not dev:
        print('No device found')
        sys.exit(1)

    print('{}: {}'.format("VERSION", dev.read("VERSION")))  # print version

    while True:
        result = dev.read("DOA_VALUE")  # read direction
        print('{}: {}, {}: {}'.format("SPEECH_DETECTED", result[3], "DOA_VALUE", result[1]))
        time.sleep(1)  # delay 1 sec

    dev.close()  # close device

if __name__ == '__main__':
    main()  # run program

```

## Using XVF_Host 

Please refer to the documentation to understand what XVF_Host is.
In this section, we are going to work with [XVF_Host](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#how-to-control-respeaker-xvf3800) using a Python script.

### Python Examples for ReSpeaker XVF3800

:::note
If you would like to explore more about controlling via xvf_host with python scripts, please read this [article](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md).
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="windows" label="Windows">

### For Windows

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF.git
cd reSpeakerXVF
python test.py
```

Make sure Python is installed and the ReSpeaker XVF3800 is connected via USB.

</TabItem>

<TabItem value="rpi" label="Raspberry Pi / Linux">

### For Raspberry Pi

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF_rpi.git
cd reSpeakerXVF_rpi
chmod +x xvf_host
python3 test.py
```

Ensure `xvf_host` is executable and your board is connected via USB or I2C.

</TabItem>
</Tabs>

The `test.py` file can be explored as follows. This is for your reference on Linux.

```python
import subprocess
import sys
import time

# Path to your xvf_host binary
XVF_HOST_PATH = "./xvf_host"  # Change this if xvf_host is in a different location

def run_command(*args):
    """Run a command using the xvf_host tool."""
    command = ["sudo", XVF_HOST_PATH] + list(map(str, args))
    try:
        print(f"Running: {' '.join(command)}")
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True, text=True)
        print("Output:\n", result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error:\n", e.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Example: Get device version
    run_command("VERSION")
    time.sleep(0.005)

    # Example: Set LED to breath mode with orange color
    run_command("led_effect", 1)
    time.sleep(0.005)
    run_command("led_color", "0xff8800")
    time.sleep(0.005)
    run_command("led_speed", 1)
    time.sleep(0.005)
    run_command("led_brightness", 255)
    time.sleep(0.005)

    # Example: Save current configuration
    #run_command("save_configuration", 1)

    # Uncomment to clear config
    run_command("clear_configuration", 1)
    time.sleep(0.005)

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/led_2.gif" alt="pir" width={600} height="auto"/></p>





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