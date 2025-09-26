---
description: ReSpeaker Mic Array
title: ReSpeaker Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Mic_Array
last_update:
  date: 1/12/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

## 概要

ReSpeaker Mic Array は ReSpeaker Core の上に直接スタック（接続）することができ、音声インタラクション体験を大幅に向上させます。XMOS の XVSM-2000 Smart Microphone をベースに開発されています。このボードは 7 つの PDM マイクロフォンを統合し、ReSpeaker の音響 DSP 性能をより高いレベルに向上させます。

## 主な特徴

- 遠距離音声キャプチャ
- 音響ソース定位
- ビームフォーミング
- ノイズ抑制
- 残響除去
- 音響エコーキャンセレーション

## 技術仕様

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

- XVSM-2000（16コア内蔵）:
  - 2つのxCoreタイル上に16のリアルタイム論理コア
  - デュアルイシューモードで最大2000MIPSを共有
  - 512KB内部シングルサイクルSRAMと2MB内蔵フラッシュ
  - 16KB内部OTP（タイルあたり最大8KB）
  - USB PHY、USB 2.0仕様に完全準拠
  - プログラマブルI/O
  - DFUモード対応
- 7つのデジタルマイクロフォン:
  - 遠距離音声認識または音源定位用途
  - ST MP34DT01-M
  - -26 dBFS感度
  - 120 dBSPL音響過負荷点
  - 61 dB信号対雑音比
  - 無指向性感度
  - PDM出力
- 12個のRGB LED:
  - 256レベル輝度
  - 800kHzラインデータ伝送
- 音声出力:
  - オンボード3.5mm Aux出力
  - WOLFSON WM8960
  - 24または16bit 16kHzステレオ出力
  - 16Ω @ 3.3Vで40mW出力パワー
- クロック同期：
  - オンボードPLL
  - DAC、MIC用プログラマブルサンプルクロック
    （XVSM-2000でDSPを使用する場合は無効）
- 電源供給:
  - Micro USBまたは拡張ヘッダーから5V供給
- サイズ:
  - 直径70mm
- 重量:
  - 15.25g

## ReSpeaker Mic Array用ドライバー

- Windowsユーザーの場合、[こちら](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Driver)をクリックしてドライバーをインストールしてください
- LinuxまたはMacユーザーの場合、ドライバーのインストールは不要です

## ReSpeaker Coreで音声を抽出

Mic ArrayがReSpeaker Core上にスタックされている場合、自動的に検出されます（`aplay -l`で確認）。音声インタラクションアプリケーションの開発には、[respeaker_python_library](https://github.com/respeaker/respeaker_python_library)の使用をお勧めします。これにより、Mic Arrayが接続されているかどうかを気にする必要がありません。ライブラリがこれをチェックし、接続されている場合はMic Arrayを選択します。

また、そのライブラリの**Pyaudio**ベースの[*class Microphone*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py)には、音声を抽出するための[*listen*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py#L207)というメソッドがあります。使用方法については、[サンプルコード](https://github.com/respeaker/respeaker_python_library/blob/master/examples/SpeechRecognition_translator.py)をご覧ください。

## PC、Mac、Linux、Raspberry Piで音声を抽出

以下はPyaudioベースの例です：

まず、Mic Arrayのデバイスインデックス番号を取得するために、以下のスクリプトを実行する必要があります：

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

次に、`RESPEAKER_INDEX = 1`をあなたのインデックス番号に変更してください。スクリプトを実行して音声を録音します。

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

## ReSpeaker Mic Array用ファームウェア

ReSpeaker Mic array用のDFUファームウェアは[こちら](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Firmware)からダウンロードできます。2つのバージョンを提供しています：

- *xvsmバージョン* : 初期バージョン、dspサポート付きで2チャンネルデータを出力します。
- *rawバージョン* : 8チャンネルマイクの生データを出力します。このファームウェアはxvsm dspサポートなしのため、DOA、AECなどの一部機能をサポートしていません。

**Linux上でのファームウェア更新**については[こちら](https://github.com/respeaker/mic_array_dfu)をご覧ください。
**Mac上でのファームウェア更新**については[こちら](https://github.com/jerryyip/respeaker_micarray_dfu_mac_linux)をご覧ください。

## ReSpeaker Mic Array制御用HID

ユーザーはUSB HID経由でReSpeaker Mic Arrayを制御できます。[通信プロトコル](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool)をご覧ください。

最新の*rawバージョン*を使用している場合は、LEDのみ制御できることにご注意ください。

以下はpythonの例です：

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

### Q1: *xvsm バージョン* ファームウェアを使用して Mic Array から音声ソース方向を取得する方法は？

  Windows を使用する場合は、[ガイド](https://github.com/respeaker/get_started_with_respeaker/wiki/Mic-Array) に従うか、当社の [HID ツール](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool) を使用してください。

  Python & C hidapi の例は [こちら](https://github.com/elthef/respeaker-xmos-hid) にあります

### Q2: Windows で audacity を使用して 8 チャンネルの生データを抽出する方法は？

  Windows WASA を選択してください。画像は以下の通りです。ファームウェアバージョンを 0x032 から 0x082 に切り替えたい場合は、その前にデバイス管理でデバイスをアンインストールしてください。アンインストール後、DFU 経由でファームウェアを更新し、デバイスを再インストールしてください。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/audacity.png)

### Q3: Mic array は Respeaker Core とどのように通信しますか？

  Mic array は USB を通じて Respeaker Core と通信します。

### Q4: [ReSpeaker-Microphone-Array-HID-tool](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool) の VAD は何を表しますか？

  ![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/VAD.png)

  | Data  | Degree |
  |-------|--------|
  | 1e, 0 | 30     |
  | e, 1  | 270    |
  | d2,0  | 210    |
  | 96,0  | 150    |

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Eagle%20File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]**[ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.sch.zip)
- **[Eagle]**[ReSpeaker Microphone Array BRD](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.brd.zip)
- **[PDF]** [ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Sch.pdf)
- **[PDF]** [ReSpeaker Microphone Array PCB](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20PCB.pdf)

## Project

**ReSpeaker Mic Array を使用して RPi で Google Assistant を構築**: ReSpeaker Mic Array を使用して、Raspberry Pi で Google Assistant を構築できます！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/build-google-assistant-on-rpi-with-respeaker-mic-array-1030bb/embed' width='350'></iframe>

## 技術サポート・製品ディスカッション

当社の製品をお選びいただき、ありがとうございます！当社の製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
