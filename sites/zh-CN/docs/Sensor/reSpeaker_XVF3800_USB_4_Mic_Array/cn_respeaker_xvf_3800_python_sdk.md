---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的环形麦克风阵列，具备 AEC、波束成形、噪声抑制和 360° 语音采集功能。搭配 XIAO ESP32S3，可为智能设备、机器人和物联网应用实现高级语音控制。探索无缝集成与双模式灵活性。
title: 使用 Python 控制 reSpeaker XVF3800
keywords:
  - reSpeaker
  - python
  - sdk
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_python_sdk
sku: 114993700
last_update:
  date: 11/14/2025
  author: Kasun Thushara
createdAt: '2025-11-14'
updatedAt: '2026-03-23'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_python_sdk/
---

## 介绍 

在本节中，我们将介绍如何使用 Python SDK 控制你的 ReSpeaker XVF-3800。它让希望构建自己应用的用户开发过程更加便捷。
例如，你可以检测声音来源方向、执行语音活动检测（VAD）、控制 LED 等等。

## Python SDK

我们提供了一份完整的 Python 指南，介绍如何使用 USB 固件与 XVF3800 通信。这个 Python 脚本可以在你喜欢的 IDE 中运行，而无需 XVF3800 的 **XVF_Host**。你可以从这个[链接](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/python_control)获取更多命令。

你需要安装 `pyusb` 库。

### 如何获取 DOA 和 VAD 

```python
import sys
import struct
import usb.core
import usb.util
import time

# name, resid, cmdid, length, type
PARAMETERS = {
    "VERSION":          (48,  0,  3,  "ro", "uint8"),
    "AEC_AZIMUTH_VALUES": (33, 75, 16, "ro", "radians"),
    "DOA_VALUE":        (20, 18,  4,  "ro", "uint16"),   # 4 bytes → two uint16 words
    "REBOOT":           (48,  7,  1,  "wo", "uint8"),
}

class ReSpeaker:
    TIMEOUT = 100000  # USB timeout

    def __init__(self, dev):
        self.dev = dev

    def write(self, name, data_list):
        try:
            data = PARAMETERS[name]
        except KeyError:
            return

        if data[3] == "ro":
            raise ValueError('{} is read-only'.format(name))

        if len(data_list) != data[2]:
            raise ValueError('{} value count is not {}'.format(name, data[2]))

        windex   = data[0]
        wvalue   = data[1]
        data_type = data[4]
        data_cnt  = data[2]
        payload   = []

        if data_type in ('float', 'radians'):
            for i in range(data_cnt):
                payload += struct.pack(b'f', float(data_list[i]))
        elif data_type in ('char', 'uint8'):
            for i in range(data_cnt):
                payload += data_list[i].to_bytes(1, byteorder='little')
        else:
            for i in range(data_cnt):
                payload += struct.pack(b'i', data_list[i])

        print("WriteCMD: cmdid: {}, resid: {}, payload: {}".format(wvalue, windex, payload))
        self.dev.ctrl_transfer(
            usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, wvalue, windex, payload, self.TIMEOUT)

    def read(self, name):
        try:
            data = PARAMETERS[name]
        except KeyError:
            return

        resid  = data[0]
        cmdid  = 0x80 | data[1]
        length = data[2] + 1        # +1 for the leading status byte

        response = self.dev.ctrl_transfer(
            usb.util.CTRL_IN | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, cmdid, resid, length, self.TIMEOUT)

        byte_data = response.tobytes()

        if data[4] == 'uint8':
            result = response.tolist()

        elif data[4] == 'radians':
            num_floats = (length - 1) // 4           # each float = 4 bytes
            fmt = '<' + 'f' * num_floats
            result = list(struct.unpack(fmt, byte_data[1:1 + num_floats * 4]))

        elif data[4] == 'uint16':
            # ── FIX ──────────────────────────────────────────────────────────
            # byte_data[0]      = status byte (skip it)
            # byte_data[1:...]  = payload: N little-endian uint16 words
            # Each word is 2 bytes, so num_words = data[2] / 2
            num_words = data[2] // 2                 # 4 bytes → 2 words
            fmt = '<' + 'H' * num_words              # unsigned 16-bit, little-endian
            result = list(struct.unpack(fmt, byte_data[1:1 + num_words * 2]))
            # ─────────────────────────────────────────────────────────────────

        return result

    def close(self):
        usb.util.dispose_resources(self.dev)

def find(vid=0x2886, pid=0x001A):
    dev = usb.core.find(idVendor=vid, idProduct=pid)
    if not dev:
        return
    return ReSpeaker(dev)

def main():
    dev = find()
    if not dev:
        print('No device found')
        sys.exit(1)

    print('{}: {}'.format("VERSION", dev.read("VERSION")))

    while True:
        result = dev.read("DOA_VALUE")
        # After uint16 unpacking: result = [doa_angle, vad_flag]
        # ── FIX: use decoded word indices, not raw byte offsets ──
        doa_angle     = result[0]   # 0–359 degrees (now supports > 255)
        speech_active = result[1]   # VAD flag: 1 = speech, 0 = silence
        # ────────────────────────────────────────────────────────
        print('SPEECH_DETECTED: {}, DOA_VALUE: {}'.format(speech_active, doa_angle))
        time.sleep(0.1)

    dev.close()

if __name__ == '__main__':
    main()
```

## 使用 XVF_Host 

请参考相关文档以了解 XVF_Host 是什么。
在本节中，我们将使用 Python 脚本配合 [XVF_Host](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#如何控制-respeaker-xvf3800) 进行操作。

### ReSpeaker XVF3800 的 Python 示例

:::note
如果你想进一步了解如何通过 python 脚本使用 xvf_host 进行控制，请阅读这篇[文章](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="windows" label="Windows">

### 适用于 Windows

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF.git
cd reSpeakerXVF
python test.py
```

请确保已安装 Python，并且 ReSpeaker XVF3800 已通过 USB 连接。

</TabItem>

<TabItem value="rpi" label="Raspberry Pi / Linux">

### 适用于 Raspberry Pi

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF_rpi.git
cd reSpeakerXVF_rpi
chmod +x xvf_host
python3 test.py
```

请确保 `xvf_host` 具有可执行权限，并且你的开发板已通过 USB 或 I2C 连接。

</TabItem>
</Tabs>

可以按如下方式查看 `test.py` 文件。这是供你在 Linux 上参考的示例。

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





## 技术支持与产品讨论

感谢你选择我们的产品！我们将通过多种方式为你提供支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>