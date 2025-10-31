---
description: Learn how to train and deploy TensorFlow Lite Micro (TFLM) speech models on the Seeed XIAO ESP32 with XVF3800 ReSpeaker for real-time voice recognition. This tutorial covers model training, TFLite conversion to hex code, and flashing to achieve accurate keyword spotting on microcontrollers.

title: TensorFlow Lite on ReSpeaker XVF3800

keywords:
- reSpeaker
- XIAO
- ESP32S3
- TensorFlow
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_tensorflow
last_update:
  date: 9/19/2025
  author: Kasun Thushara
---

## Introduction 

In this tutorial, we guide you through creating a custom voice recognition system using TensorFlow Lite Micro (TFLM) on the Seeed XIAO ESP32 with the XVF3800 ReSpeaker. You will learn how to collect and label audio data, preprocess it for training, and split it into training and validation sets. Next, we train a custom keyword spotting model tailored to your dataset, convert it into TFLite format, and finally deploy it as a hex file onto the ESP32 for real-time voice command recognition. By the end, you’ll have a fully functional microcontroller-based system capable of accurately classifying spoken commands.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


## Dependencies

To follow this tutorial, you need to install the following Arduino libraries:

* [TFLite Micro Arduino Examples](https://github.com/pschatzmann/tflite-micro-arduino-examples)
* [Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools)

Make sure to install these libraries in your Arduino IDE. Each GitHub repository contains a guide on how to install and configure the libraries properly.


## Collect the Data

We will record short voice samples (10 seconds each) and split them into 1-second clips. To use the XVF3800 ReSpeaker, you may need to install the USB firmware first.

**Firmware Guide:**
[Seeed Studio XVF3800 Firmware Flash](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#flash-firmware)

---

### Step 1: Find the Device ID

Use the following Python script to list all audio devices connected to your PC and find the correct device index for the ReSpeaker:

```python
import sounddevice as sd

# List all available devices
devices = sd.query_devices()

# Print all devices
for i, device in enumerate(devices):
    print(f"Device {i}: {device['name']} (input channels: {device['max_input_channels']})")
```

> Note: Update `DEVICE_INDEX` in the next script according to the printed device number for the ReSpeaker.


### Step 2: Collect Audio Samples

This Python script collects audio samples based on person name and label. A folder will be created for each person, and WAV files will be saved under the corresponding labels.

```python
import os
import sounddevice as sd
from scipy.io.wavfile import write

# === Settings ===
SAMPLERATE = 16000
CHANNELS = 1  # ReSpeaker 4-Mic Array
DURATION = 10  # seconds
DEVICE_INDEX = 2  # Set to your ReSpeaker device index


def record_audio(filename, samplerate=SAMPLERATE, channels=CHANNELS, duration=DURATION, device=DEVICE_INDEX):
    print(f"Recording '{filename}' for {duration} seconds...")
    recording = sd.rec(int(duration * samplerate),
                       samplerate=samplerate,
                       channels=channels,
                       dtype='int16',
                       device=device)
    sd.wait()
    write(filename, samplerate, recording)
    print(f"Saved: {filename}")


def get_next_filename(directory, label):
    existing = [f for f in os.listdir(directory) if f.startswith(label) and f.endswith('.wav')]
    index = len(existing) + 1
    return os.path.join(directory, f"{label}.{index}.wav")


def collect_samples():
    while True:
        sample_name = input("Enter sample name (e.g., PersonA): ").strip()
        if not sample_name:
            print("Sample name cannot be empty.")
            continue

        sample_dir = os.path.join(os.getcwd(), sample_name)
        os.makedirs(sample_dir, exist_ok=True)
        print(f"Directory created: {sample_dir}")

        while True:
            label = input("Enter sound/voice to record (e.g., yes, no): ").strip()
            if not label:
                print("Label cannot be empty.")
                continue

            while True:
                filename = get_next_filename(sample_dir, label)
                record_audio(filename)

                cont = input("Record another sample for this label? (yes/no): ").strip().lower()
                if cont != 'yes':
                    break

            next_label = input("Do you want to record a different label? (yes/no): ").strip().lower()
            if next_label != 'yes':
                break

        next_sample = input("Do you want to create a new sample? (yes/no): ").strip().lower()
        if next_sample != 'yes':
            print("Audio collection completed.")
            break


if __name__ == "__main__":
    collect_samples()
```

**How it works:**

* Creates a folder for each person.
* Prompts for labels (e.g., "yes", "no") and saves corresponding audio files.
* Records 10-second audio clips which can later be split into 1-second segments for training.


## Data Preprocessing

After collecting your 10-second audio samples, the next step is to split them into 1-second clips for training. I used **Edge Impulse** to visualize and split the recordings easily.

### Audio File Format

All audio files must meet the following requirements:

* **Format:** WAV (.wav)
* **Sample Rate:** 16 kHz
* **Channels:** Mono (1 channel)
* **Bit Depth:** 16-bit PCM
* **Duration:** 1 second (1000 ms)

> Note: Edge Impulse can help automatically split longer recordings into these 1-second segments.

### Target Labels

* Each **folder name** is treated as a **class label**.
* Examples:

  * `hi_speaker` → Model recognizes “hi speaker”
  * `seeed` → Model recognizes “seeed”
* You can add more classes as needed, but folder names **must match the `WANTED_WORDS` list** used during training.

### Unknown / Other

* The `other/` folder should contain **random words not in your target list**. This helps the model classify unknown words correctly.

### Silence / Noise

* The `_background_noise_/` folder should include ambient sounds such as:

  * Office noise
  * Street noise
  * Keyboard typing
  * Silence recordings (mic on but no speaking)

> Proper preprocessing ensures the model learns to distinguish between target commands, unknown words, and background noise.

```sql
dataset_dir/
│
├── hi_speaker/           # All audio samples for the "hi_speaker" keyword
│   ├── audio_0.wav
│   ├── audio_1.wav
│   └── ...
│
├── seeed/                # All audio samples for the "seeed" keyword
│   ├── audio_2.wav
│   ├── audio_3.wav
│   └── ...
│
├── other/                # Random speech or non-target words
│   ├── audio_4.wav
│   ├── audio_5.wav
│   └── ...
│
└── _background_noise_/   # Background noise samples
    ├── noise_0.wav
    ├── noise_1.wav
    └── ...

```
## Data Training

To train your custom voice recognition model, it’s recommended to use a PC with **Ubuntu x86**. You will also need the `xxd` tool, which can be installed via:

```bash
sudo apt-get install xxd
```

### Step 1: Install Anaconda

* Download and install [**Anaconda Navigator**](https://www.anaconda.com/products/navigator)
* Create a new environment in Anaconda for this project.

### Step 2: Set Up the Environment

Install the required packages in the environment:

:::info

* **Deep Learning Framework:** TensorFlow 1.5
* **Programming Language:** Python 3.7
:::

> This setup ensures compatibility with TensorFlow Lite Micro for microcontroller deployment.

### Step 3: Run the Training Notebook

* Download the Jupyter notebook:
  [train\_micro\_speech\_model.ipynb](https://github.com/KasunThushara/TFLM_voice_module/blob/main/train_micro_speech_model.ipynb)
* Open the notebook in Jupyter and follow the instructions.
* Once completed, the notebook will generate a **hexadecimal model file** named `model.cc` ready for deployment to the ESP32.

> The `model.cc` file can then be included in your Arduino project to run real-time keyword spotting on the XIAO ESP32 with the XVF3800 ReSpeaker.




## Inference on XIAO ESP32 with XVF3800

Once your `model.cc` file is ready, you can deploy it on the XIAO ESP32 for real-time voice command recognition. Because the XVF3800 outputs **32-bit audio samples**, we need to **convert them to 16-bit** for TensorFlow Lite Micro. We also configure the I2S pins, sample rate, and channels to match the model requirements.



### Arduino Code Example

```cpp
#include "AudioTools.h"
#include "AudioTools/AudioLibs/TfLiteAudioStream.h"
#include "model.h"  // Replace with your generated model.cc

I2SStream i2s;  
TfLiteAudioStream tfl;  
StreamCopy copier(tfl, i2s);

const char* kCategoryLabels[] = {
    "silence",
    "unknown",
    "hi_respeaker", //change the key word that you trained
    "seeed" // change the key word that you trained 
};

void respondToCommand(const char* found_command, uint8_t score, bool is_new_command) {
  if (is_new_command) {
    Serial.printf("Detected: %s (score: %d)\n", found_command, score);
  }
}

// Temp buffer for 32-bit I2S samples
int32_t i2s_buffer[512];
int16_t conv_buffer[512];

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Warning);

  // XVF3800 I2S input configuration
  auto cfg = i2s.defaultConfig(RX_MODE);
  cfg.sample_rate = 16000;
  cfg.channels = 1;            // Mono
  cfg.bits_per_sample = 32;    // XVF3800 streams 32-bit samples
  cfg.pin_bck = 8;
  cfg.pin_ws = 7;
  cfg.pin_data = 44;
  cfg.pin_data_rx = 43;
  cfg.is_master = true;
  i2s.begin(cfg);

  // TensorFlow Lite configuration
  auto tcfg = tfl.defaultConfig();
  tcfg.setCategories(kCategoryLabels);
  tcfg.sample_rate = 16000;
  tcfg.channels = 1;
  tcfg.kTensorArenaSize = 15 * 1024;
  tcfg.respondToCommand = respondToCommand;
  tcfg.model = g_model;  // Replace with your model.cc
  tfl.begin(tcfg);
}

void loop() {
  // Read 32-bit audio from XVF3800
  size_t n = i2s.readBytes((uint8_t*)i2s_buffer, sizeof(i2s_buffer));

  if (n > 0) {
    size_t samples = n / sizeof(int32_t);

    // Convert 32-bit -> 16-bit
    for (size_t i = 0; i < samples; i++) {
      conv_buffer[i] = (int16_t)(i2s_buffer[i] >> 16);
    }

    // Feed converted data into TensorFlow
    tfl.write((uint8_t*)conv_buffer, samples * sizeof(int16_t));
  }
}
```

#### Key Notes

* Make sure to **replace `g_model`** with the name of your generated `model.cc` file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/tflm/image1.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/tflm/image2.png" alt="pir" width={800} height="auto" /></p>

* XVF3800 outputs **32-bit stereo** by default; we convert to **16-bit mono** to match the model.
* TensorFlow Lite Micro reads the audio data continuously and triggers `respondToCommand()` whenever a recognized command is detected.

> With this setup, your XIAO ESP32 can now recognize custom voice commands in real time using the XVF3800 microphone array.



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
