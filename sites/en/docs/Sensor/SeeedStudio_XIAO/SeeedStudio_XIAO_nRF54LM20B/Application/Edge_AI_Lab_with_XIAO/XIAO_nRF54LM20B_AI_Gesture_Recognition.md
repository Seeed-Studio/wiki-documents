---
title: AI Gesture Recognition Demo (Gesture-based Remote Control)
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - edge ai
  - gesture recognition
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/edge_ai/xiao_nrf54lm20b_gesture.webp
slug: /xiao_nrf54lm20b_ai_gesture_recognition
sku:
last_update:
  date: 10/21/2026
  author: Brandy
createdAt: '2026-10-21'
updatedAt: '2026-10-21'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_ai_gesture_recognition/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_AI_Gesture_Recognition.png" style={{width:600, height:'auto'}}/></div>

This tutorial walks through a complete gesture recognition project on the **XIAO nRF54LM20B Sense**: you collect your own gesture data with the on-board six-axis IMU (LSM6DS3TR-C), train the model in the cloud, and finally deploy it back onto the board, where the **Axon NPU** runs real-time inference in about 1.25 ms per inference.

Model training happens on Nordic's official cloud platform, **Nordic Edge AI Lab** (https://ai.lab.nordicsemi.com). Registering an account is free — you organize your prepared sensor data into a CSV, upload it, and the platform handles feature extraction and model training in the cloud. What you export at the end is not a pile of weight files but model C code and configuration that drops straight into a Zephyr project, with the model's computation running on the nRF54L's Axon NPU, so you do not need to set up any training environment locally.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/30.png" style={{width:800, height:'auto'}}/></div>
<br/>

The model trained in this example is a five-class gesture model:

| Class | Label (entered at recording time) | Meaning |
|---|---|---|
| 0 | idle | stationary |
| 1 | SwipeLeft | swipe left |
| 2 | SwipeRight | swipe right |
| 3 | RotationCW | clockwise circle |
| 4 | RotationCCW | counter-clockwise circle |

The whole flow breaks down into six steps:

1. Flash the data-capture firmware so the XIAO outputs six-axis IMU data at 100 Hz;
2. Install and run the Data Forwarder Host on your computer to record labeled data;
3. Capture data for the five gesture classes, recording each class as separate CSV segments;
4. Run a script for data processing and validation, splitting the training and test sets;
5. Upload to Edge AI Lab for training and export the model deployment package;
6. Port the model into a PlatformIO project, flash it, and run real-time recognition on the board.

## Hardware Preparation

You will need the following:

- 1 x [Seeed Studio XIAO nRF54LM20B Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x computer (macOS / Windows / Linux all work; screenshots in this tutorial are from macOS, and the key commands are given per OS)
- 1 x USB Type-C data cable (data-capable)

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20B Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
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
      </td>
    </tr>
  </table>
</div>

## Software Preparation

This tutorial needs **Python 3.12+** and **PlatformIO**. Check in a terminal:

```bash
python3 --version
python3.12 --version
pio --version
```


If `python3.12` is missing, install it per OS:

<Tabs groupId="os">
<TabItem value="macos" label="macOS" default>

```bash
brew install python@3.12
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
winget install Python.Python.3.12
```

You can also download the installer from [python.org](https://www.python.org/downloads/); during installation check **Add python.exe to PATH**, then reopen the terminal.

</TabItem>
<TabItem value="linux" label="Linux">

```bash
sudo apt install python3.12 python3.12-venv
```

Ubuntu 24.04 ships Python 3.12 by default; older distributions can install it through the deadsnakes PPA.

</TabItem>
</Tabs>

> Why confirm Python 3.12 specifically: Nordic's Data Forwarder Host and Dataset Builder both require Python 3.12 or newer.

## Step 1 — Flash the Data-capture Firmware (edgeai-data-forwarder)

For the computer to read the XIAO's IMU data, the board first needs to run a capture firmware called `edgeai-data-forwarder`. This is a capture sample adapted by Seeed for the XIAO — **not** the generic firmware in Nordic's sdk-edge-ai repository — and lives in the `examples/seeed-xiao-nrf54lm20b/edgeai-data-forwarder` directory of the [platform-seeedboards](https://github.com/Seeed-Studio/platform-seeedboards) repository:

<div className="get_one_now_container" style={{textAlign: 'center'}}>
  <a className="get_one_now_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-nrf54lm20b/edgeai-data-forwarder" target="_blank" rel="noopener noreferrer">
    <strong><span><font color="#FFFFFF" size="4"> View on GitHub 🖱️</font></span></strong>
  </a>
</div>

The project directory structure:

```
edgeai-data-forwarder/
├── src/
├── zephyr/
├── docs/
└── platformio.ini
```

From the project root, build with:

```bash
pio run \
  -d examples/seeed-xiao-nrf54lm20b/edgeai-data-forwarder \
  -e seeed-xiao-nrf54lm20b
```

Flashing: follow the PlatformIO flashing method from this series' Getting Started page.

Once flashed, connect the XIAO to the computer over USB-C and the device enumerates a USB serial port.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/8.png" style={{width:800, height:'auto'}}/></div>
<br/>

## Step 2 — Install and Run the Data Forwarder Host

The **Data Forwarder Host** is Nordic's official desktop GUI tool (not a web page, and not a VS Code plugin) for receiving the XIAO's serial data and recording labeled CSVs.

**1. Create a working directory**

Keep all data and tools in a single dedicated directory so the capture data does not get mixed into the SDK source tree:

```bash
mkdir -p ~/XIAO-EdgeAI/firmware ~/XIAO-EdgeAI/datasets ~/XIAO-EdgeAI/models ~/XIAO-EdgeAI/logs ~/XIAO-EdgeAI/tools
cd ~/XIAO-EdgeAI
```

Create these five subdirectories up front; every tool and piece of data from here on lives inside them:

```
XIAO-EdgeAI/
├── firmware/       # XIAO capture and inference firmware
├── datasets/       # raw IMU data, training CSVs
├── models/         # models generated by Edge AI Lab
├── logs/           # build, flash, and test logs
└── tools/          # Nordic tools (Data Forwarder Host, Dataset Builder, etc.)
```

**2. Get sdk-edge-ai**

```bash
git clone https://github.com/nrfconnect/sdk-edge-ai.git
```

If the clone fails, do not keep retrying: open [the Nordic SDK Edge AI repository](https://github.com/nrfconnect/sdk-edge-ai) in a browser, choose **Code → Download ZIP**, and extract it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/2.png" style={{width:600, height:'auto'}}/></div>
<br/>

**3. Create a virtual environment**

```bash
cd sdk-edge-ai/tools/data_forwarder_host
python3.12 -m venv .venv
source .venv/bin/activate
```

<details>
<summary>Why a virtual environment?</summary>

The Data Forwarder Host requires Python 3.12 or newer. If your computer has several Python versions installed at once (3.11 and 3.12, say), a virtual environment pins this tool to 3.12 and keeps it from interfering with the PlatformIO and Zephyr environments already on the system.

If you only have one Python and it is ≥ 3.12, you can in principle run it directly, but using a virtual environment is still the safer choice (dependencies do not pollute the global environment).

</details>

**4. Install dependencies**

```bash
python -m pip install -r requirements.txt
```

This installs the Python libraries the Data Forwarder Host needs, including the PySide6 GUI framework and the serial-communication and data-decoding dependencies. Install time depends on your network speed.
What the requirements.txt / pyproject.toml and other project files are for
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/4.png" style={{width:600, height:'auto'}}/></div>
<br/>

- `requirements.txt`: the Python dependency list; `pip install -r` installs from it;
- `pyproject.toml`: project metadata and build configuration;
- the rest is tool source and resource files.


**5. Launch**

```bash
python -m data_forwarder_host
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/5.png" style={{width:800, height:'auto'}}/></div>
<br/>

On success a desktop window opens:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/6.png" style={{width:800, height:'auto'}}/></div>
<br/>

Create a new session through **Session → New session…**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

In the session settings, pick the USB serial port the XIAO enumerated:



Once connected, the six-axis IMU's live waveform shows up in the UI:


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/10.png" style={{width:800, height:'auto'}}/></div>
<br/>

Official source: [Nordic Data Forwarder Host](https://github.com/nrfconnect/sdk-edge-ai/tree/main/tools/data_forwarder_host)

## Step 3 — Capture Labeled Gesture Data

Record per class: before each segment, enter that segment's label (Recording label) in the GUI, record one complete motion, stop, and save it as a CSV. The grip for this example (keep it consistent, to avoid introducing posture variance):

> Hold the XIAO, **front facing you, USB port pointing down**.

**1. Set the CSV save location**

Next to **Output dir** on the left of the window, click `...` and select:

```
/Users/<your-username>/XIAO-EdgeAI/datasets      # macOS
/home/<your-username>/XIAO-EdgeAI/datasets      # Linux
C:\Users\<your-username>\XIAO-EdgeAI\datasets    # Windows
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/11.png" style={{width:800, height:'auto'}}/></div>
<br/>

**2. Record the first segment: idle (stationary)**

1. Lay the XIAO flat on the desk and keep it as still as possible;
2. Enter `idle` in the **Recording label** field at the top;
3. Click **Record** on the left;
4. Hold still for about 20 seconds;
5. Click **Stop** to save the first CSV.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/13.png" style={{width:800, height:'auto'}}/></div>
<br/>

**3. Record the other four gesture classes**

Record the motions in turn, labeled `SwipeLeft`, `SwipeRight`, `RotationCW`, `RotationCCW`:

- swipe left / swipe right;
- rotate wrist clockwise / counter-clockwise.

This example recorded about 15 segments per class — **75 recordings in total, roughly 60,000 sample rows** — which you can use as a reference baseline for data volume. More data and more standardized motions give a better model.



<details>
<summary>Note on recording length and data trimming</summary>

In this example the idle class was recorded for a long time (about 20 seconds), while the motion classes were short (five to six seconds, with about 3 seconds of actual motion). The first training round did **no motion trimming** — short recordings do not contain much stationary footage, so trimming has limited payoff. If your motion recordings include a lot of stationary footage at the start and end, you can trim it during data processing, but trimming introduces variance in "where the motion sits inside the window", so do it carefully.

</details>

## Step 4 — Data Processing and Validation

The **Dataset Builder** and the Data Forwarder Host are two different tools: the former validates and processes CSVs, the latter captures them. In this step, first use a script to turn the raw CSVs into the training file Edge AI Lab expects, then validate with the Dataset Builder.

**1. Install the Dataset Builder**

Open a new terminal:

```bash
cd ~/XIAO-EdgeAI/tools
git clone https://github.com/nordicsemi-neuton/dataset-builder.git
cd dataset-builder

python3.12 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

After installation, check:

```bash
python data-builder.py --help
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/14.png" style={{width:600, height:'auto'}}/></div>
<br/>

**2. Inspect the raw CSVs**

Confirm all the captured files are there:

```bash
ls -lh ~/XIAO-EdgeAI/datasets
find ~/XIAO-EdgeAI/datasets -name "*.csv" | wc -l
```

Spot-check the header and total row count of one CSV:

```bash
head -n 5 ~/XIAO-EdgeAI/datasets/SwipeRight_*.csv | head -n 12
wc -l "$(find ~/XIAO-EdgeAI/datasets -name 'SwipeRight_*.csv' | head -n 1)"
```

Each CSV should contain eight columns: `device_time_ms, ax, ay, az, gx, gy, gz, label`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/15.png" style={{width:600, height:'auto'}}/></div>
<br/>

**3. Run the preprocessing script**

The preprocessing script does "merge → label encoding → train/test split → generate config".

Script download (includes `prepare_gestures.py`): [gesture_processing_reproducible.zip](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/gesture_processing_reproducible.zip)

```bash
cd ~/XIAO-EdgeAI
zip -j gesture_raw.zip datasets/*.csv
python3.12 prepare_gestures.py gesture_raw.zip datasets/processed
```


Generated files:

- `training_ready.csv`: the training data to upload to Edge AI Lab (60 recordings);
- `holdout.csv`: 15 recordings held out independently for holdout testing;
- `gesture_profile.json`: the dataset configuration (sensor columns, sampling rate, label encoding, window parameters).



What the script does:

| Step | Description |
|---|---|
| Validate raw CSVs | Check column completeness, missing values, increasing timestamps, sampling interval (median 10 ms ≈ 100 Hz in this example) |
| Text label → numeric class | idle→0, SwipeLeft→1, SwipeRight→2, RotationCW→3, RotationCCW→4 |
| Add session_id | One unique ID per independent recording |
| Split train/test by session | 60 train / 15 test, balanced across classes |
| Generate config file | Record 100 Hz, Axon target, five classes, window 200 samples, etc. |

<details>
<summary>Why add session_id, and why split the test set by "recording" rather than by "row"?</summary>

Model training does time-series windowing, and session_id tells the training platform where each recording's boundary is, so the tail of one recording does not get stitched into the same window as the head of the next.

The test-set split works the same way: if you randomly pull 20% of the **rows**, neighboring samples from the same gesture end up in both the training and the test set, and the evaluation is inflated (data leakage). Splitting by complete recording (60 train / 15 test) is what gives a generalization estimate worth referencing.

</details>

Initial window parameters (first baseline; can be adjusted after training):

| Parameter | Value |
|---|---|
| Sampling Rate | 100 Hz |
| Target Technology | Axon |
| Task Type | Multiclass Classification |
| Signal Processing | Enabled |
| Window Size | 200 samples / 2000 ms |
| Training Shift | 200 samples |
| Sensor Channels | ax, ay, az, gx, gy, gz |



The first round did **not** do motion trimming, resampling, normalization, feature extraction, or stationary-segment removal — none of these are required local preprocessing; they are all handled by Edge AI Lab's Signal Processing.

**4. Validate the data**

```bash
cd ~/XIAO-EdgeAI/tools/dataset-builder
source .venv/bin/activate

python data-builder.py validate \
  ~/XIAO-EdgeAI/datasets/processed/training_ready.csv \
  --profile ~/XIAO-EdgeAI/datasets/processed/gesture_profile.json
```


The result:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/19.png" style={{width:600, height:'auto'}}/></div>
<br/>

Seeing `PASS — no blocking problems found` means the data is good enough to upload for training. The validation output also has two recommendations that matter a lot for directional gestures:

1. **Recommended input data type FLOAT32**: the Axon NPU / LiteRT training chain requires 32-bit floating-point input. In Edge AI Lab, pick **32-bit Floating Point** as the data type — no need to convert the CSV values by hand.
2. **Enable LR_SLOPE and LR_INTERCEPT**: linear-regression slope/intercept preserve the signed trend of the signal. For opposite-direction motions like SwipeLeft/SwipeRight and RotationCW/RotationCCW, magnitude-only features (absolute value, max, standard deviation) easily confuse them. Check these two later on the Feature Extraction page.


## Step 5 — Train the Model on Nordic Edge AI Lab

Open [Nordic Edge AI Lab](https://ai.lab.nordicsemi.com/).

**1. Create a Solution**

Go to **My Solutions → Add New Solution**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/17.png" style={{width:600, height:'auto'}}/></div>
<br/>

(A bit more detail on the steps)

| Setting | Choose |
|---|---|
| Model | Axon |
| Mode | Train a new model |
| Task type | Classification |
| Solution Name | XIAO_M20B_Gesture_5Class |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/20.png" style={{width:800, height:'auto'}}/></div>
<br/>

**2. Upload the training data**

Click the dashed box on the left of the page (Drag and drop or click to upload) and select:

```
~/XIAO-EdgeAI/datasets/processed/training_ready.csv
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/21.png" style={{width:800, height:'auto'}}/></div>
<br/>

> Upload only `training_ready.csv`. Do not upload the 75 raw CSVs, and do not upload the whole ZIP.

**3. Set up Holdout Validation**

You set aside 15 independent recordings earlier for evaluation; select that here:

1. Turn on **Holdout Validation**;
2. Choose the independent test dataset (do not pick Automatic Split);
3. Upload the `holdout.csv` from the same directory.

This way the training and test data come from different recording sessions, so the evaluation is more meaningful.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/22.png" style={{width:800, height:'auto'}}/></div>
<br/>

**4. Configure Features Specification**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/24.png" style={{width:800, height:'auto'}}/></div>
<br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/23.png" style={{width:800, height:'auto'}}/></div>
<br/>

| Column | Target column | Session ID | Remove |
|---|---|---|---|
| device_time_ms | | | ☑ |
| ax / ay / az | | | |
| gx / gy / gz | | | |
| class | 🔵 | | |
| session_id | | 🔵 | |

What each column means:

| Data | Setting | Why |
|---|---|---|
| ax, ay, az | leave blank | three-axis acceleration, the basis for motion detection |
| gx, gy, gz | leave blank | three-axis angular velocity, helps tell rotation direction |
| class | Target column | the correct answer (which gesture this segment is) |
| session_id | Session ID | distinguishes each independent recording |
| device_time_ms | Remove | just the sample time, does not represent the motion |

<details>
<summary>Why is nothing checked for the six-axis data?</summary>

This page has no separate Input checkbox: **columns that are not Target, not Session ID, and not Remove are kept as input features by default.** So leaving all six-axis columns blank is the correct setting — that is exactly what "input" means.

</details>

**5. Configure Signal Processing**

Click **Signal Processing → Enable** in the upper left, then set the parameters below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/25.png" style={{width:800, height:'auto'}}/></div>
<br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/26.png" style={{width:800, height:'auto'}}/></div>
<br/>

Why each parameter is set this way:

- **Window size 2000 ms**: the board samples at 100 Hz, so 2000 ms = 200 samples, the raw window each prediction analyzes. 2 seconds is chosen to cover a full swipe or circle; this first version is a middle-ground pick — if a class of motion regularly runs over 2 seconds, lengthen it.
- **Training shift 2000 (no overlap)**: training windows do not overlap, so each 2-second segment contributes to training only once, avoiding a flood of highly similar overlapping windows that inflate the training result.
- **Inference shift 330 ms**: at runtime the device updates the prediction about 3 times per second (each still analyzes the most recent 2 seconds of data), which makes it easier to catch a fast left/right swipe. If a demo needs one output every 3 seconds, throttle the output in firmware rather than stretching the inference step to 3000 ms (the trade-off is more frequent inference and higher power draw).
- **Check LR_SLOPE / LR_INTERCEPT**: keep signed trend features to help tell opposite-direction motions apart. With these two added, you get 13 features × 6 axes = 78 candidate input features — a reasonable size for a first baseline.
- **Keep Feature Selection off**: the first round validates a fixed feature set; if you auto-select from the start, it is hard later to tell where an accuracy change came from. Turn it on only if the first round underperforms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/27.png" style={{width:800, height:'auto'}}/></div>
<br/>


**6. Start training and read the report**

Pick a training configuration that supports LiteRT / Axon, start training, and wait for the training report.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/28.png" style={{width:400, height:'auto'}}/></div>
<br/>

<details>
<summary>Training report reading (this example's actual results)</summary>

**Overall metrics:**

| Metric | Value |
|---|---|
| Training Balanced Accuracy | 92.77% |
| Holdout Balanced Accuracy | 79.84% |
| Holdout Macro F1 | 79.89% |

The roughly 13-point gap between training and holdout means the model fits the training data well but drops when generalizing to data it did not train on (some overfitting or a difference in data distribution). Note: **79.84% is the platform's offline holdout score, not the on-device recognition accuracy.**

**Confusion matrix (49 holdout test windows):**

| Actual gesture | Correct / total | Recall | Main issue |
|---|---|---|---|
| Idle | 11 / 11 | 100% | — |
| SwipeLeft | 7 / 9 | 77.8% | a few misread as right swipe / clockwise |
| SwipeRight | 6 / 12 | 50% | 6 read as left swipe |
| RotationCW | 10 / 10 | 100% | — |
| RotationCCW | 5 / 7 | 71.4% | some misread as left/right swipe |

The standout problem: of 12 right swipes only 6 were correct. Possible directions for improvement:

1. A swipe has acceleration and deceleration phases, and during translation the IMU does not always measure acceleration in the same direction; if the model only captures one phase, it looks like the reverse swipe.
2. The 2-second window is not strictly aligned to the motion, so the motion sits at different positions inside the window.
3. Translation comes with wrist rotation, introducing posture variance.

Conclusion: the first round proves the five-class approach works (Idle and RotationCW do very well), but left/right swipes still need work (more data, stricter capture consistency, adjusted window parameters).

**Feature Importance:** the top 10 features are mostly mean-crossing, RMS, and max of ay/gy — the model leans on Y-axis acceleration and Y-axis gyroscope. LR_INTERCEPT, added deliberately, ranks 10th, so it does carry information. Feature importance is an overall ranking and does not mean a given axis is responsible for a given gesture.

</details>

When training is done, export (download) the model deployment package.

## Step 6 — Port the Model and Deploy to the XIAO

**1. What is in the model deployment package**

The deployment package from this example's training can be downloaded directly: [XIAO_M20B_Gesture_5Class_96964_v1.zip](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/XIAO_M20B_Gesture_5Class_96964_v1.zip)

The complete example project — integration layer, CMake glue and flash script — is in the wiki examples repository:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/7_AI_Gesture_5Class" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Directory structure after extraction:

```
XIAO_M20B_Gesture_5Class_96964_v1/
├── artifacts/
│   ├── model_8bit_96964_64392.tflite
│   └── inference_runner/nrf_edgeai_inference_runner_linux
└── nrf_edgeai_generated/
    ├── nrf_edgeai_user_model.c
    ├── nrf_edgeai_user_model.h
    ├── nrf_edgeai_user_model_axon.h
    ├── nrf_edgeai_user_types.h
    ├── prj_example.conf
    └── README.md
```

| File | Purpose |
|---|---|
| `model_8bit_...tflite` | the quantized LiteRT/TFLite model, can be inspected standalone |
| `nrf_edgeai_user_model.c` | model definition, input window, and feature-processing config |
| `nrf_edgeai_user_model_axon.h` | the Axon NPU compiled network parameters |
| `nrf_edgeai_user_types.h` | model input/output data types |
| `prj_example.conf` | part of the AI config Zephyr needs |
| `nrf_edgeai_inference_runner_linux` | Linux offline inference tool (not a macOS executable) |

**2. Get the ported project**


Build your own PlatformIO + Zephyr IMU project (you can reference this series' IMU/sensor page <!-- TODO: add jump link -->), and port the model-generated `nrf_edgeai_generated/` directory and configuration into it. The porting essentials are below.

<details>
<summary>Porting essentials (full how-to for a self-built project)</summary>

**Overall architecture:**

```
Edge AI Lab (cloud training)
        │  export deployment package: model C code + prj_example.conf
        ▼
src/nrf_edgeai_generated/nrf_edgeai_user_model.c   ← generated artifact, not modified
        │  called by the app
        ▼
src/main.c + src/imu_lsm6dsl.c                     ← hand-written application
        │
        ▼
PlatformIO + Zephyr + sdk-edge-ai (Axon NPU runtime)
```

| Item | Description |
|---|---|
| Runtime | sdk-edge-ai v3, registered as a Zephyr external module via the `XIAO_EDGE_AI_DIR` environment variable |
| Input | 6 channels (ax…gz), FLOAT32, micro-SI units (µm/s², µrad/s) |
| Window | window = 200, shift = 33, 78 features |
| Network | Dense 64 → 32 → 16 → Softmax 5, running on the Axon NPU |

**Model side (pure copy, zero modification):** drop the whole `nrf_edgeai_generated/` directory into the project; copy these two lines from `prj_example.conf` into `zephyr/prj.conf` (the Axon buffer sizes must match the model):

```ini
CONFIG_NRF_AXON_INTERLAYER_BUFFER_SIZE=80
CONFIG_NRF_AXON_PSUM_BUFFER_SIZE=0
```

Hard constraints: never change the model weights, feature algorithm, or input normalization logic; the input channel order and units must match the training CSV exactly or the model is useless; confidence (max probability) ≠ real accuracy.

**Application code responsibilities:** boot self-check (verify model geometry with `nrf_edgeai_input_window_size` / `model_outputs_num` / `is_runtime_compatible` and halt on mismatch); 100 Hz non-blocking sampling; convert units to micro-SI and align with the training CSV; fill the sliding window (window 200 / shift 33) and call `nrf_edgeai` for inference, outputting 5 classes + confidence + measured inference time; blink the LED once on a recognized gesture and throttle serial output to once per 3 seconds; MCUboot self-confirm (`boot_write_img_confirmed()`, or the uploaded test image gets rolled back by the bootloader on reboot).

**Platform integration pitfall 1: PlatformIO's Zephyr build does not run ninja.** PIO runs cmake configure, reads the source manifest through the CMake file API, and then compiles with SCons, so artifacts from `add_custom_command()` in a module's CMakeLists never get generated. The sdk-edge-ai v3 banner depends on `edge_ai_version.h` / `edge_ai_commit.h` generated by a custom command, so a PIO build always fails (a direct cmake + ninja works fine, which is highly misleading). Fix: in the configure stage of `zephyr/CMakeLists.txt`, use `execute_process` to call Zephyr's own script to generate the version header; reproduce the commit header in the upstream NCS format, taking the module repository's real git short hash. Any Zephyr module with custom commands needs this — hand-dropping files into the build directory does not work (they get wiped and rebuilt).

**Platform integration pitfall 2: MDK double definition, Axon header won't compile.** When you select `SOC_NRF54LM20B`, Kconfig does `select SOC_COMPATIBLE_NRF54LM20A`, so the NRF54LM20A and LM20B macros are both defined at once; `<mdk/nrf.h>` hits the A branch first, and the LM20B-specific AXONS NPU definitions in the module all go missing. Fix: with a target-level property, swap this one .c out of the zephyr target's SOURCES and replace it with a wrapper generated at configure time (first `#undef NRF54LM20A_XXAA`, then include the original .c) — not a line of SDK source changes.

**Minor pitfall 3:** the generated model header uses C11 `static_assert`, and newlib needs to see `<assert.h>` first: `target_compile_options(app PRIVATE "-include" "assert.h")`.

**devicetree (zephyr/app.overlay):**

```dts
&imu_vdd { regulator-boot-on; };        /* nPM1300 LDO1 powers the IMU, on at boot */
&lsm6ds3tr_c {                          /* deferred probe; app calls device_init() after the rail settles */
    zephyr,deferred-init;
    status = "okay";
};
&axon { status = "okay"; };             /* enable the NPU node */
```

</details>

**3. One-shot build and flash**

The flash script `flash.sh` does three things: `pio run` build → **imgtool sign** → upload and reset. Substitute your serial port per OS:

<Tabs groupId="os">
<TabItem value="macos" label="macOS" default>

```bash
PORT=/dev/cu.usbmodem1101 ./flash.sh
```

</TabItem>
<TabItem value="windows" label="Windows">

```bash
PORT=COM3 bash flash.sh
```

`flash.sh` is a bash script; run it in Git Bash or WSL. Look up the serial port in Device Manager — it looks like `COM3`.

</TabItem>
<TabItem value="linux" label="Linux">

```bash
PORT=/dev/ttyACM0 ./flash.sh
```

</TabItem>
</Tabs>

<details>
<summary>Flash details: partition table and signing parameters</summary>

The board ships with an **MCUboot + firmware loader (BOOT_FIRMWARE_LOADER)** architecture: slot1 holds the factory USB MCUmgr loader. To put the board into DFU mode: **hold B0 (P0.09) → tap RST once → release B0**; MCUboot chain-loads the loader, which receives the firmware and writes it to slot0.

| Partition | Offset | Size | Contents |
|---|---|---|---|
| mcuboot | 0x0 | 24 KB | factory bootloader (leave alone) |
| slot0 (image-0) | 0x6000 | 1784 KB | application image (flash target) |
| slot1 (image-1) | 0x1c4000 | 116 KB | factory USB MCUmgr loader |
| storage | 0x1e1000 | 16 KB | settings storage |

Signing uses the framework's own `root-ed25519.pem` + `--pure` (required by this board's MCUboot verification mode) + `--header-size 0x800 --align 16 --slot-size 0x1BE000` (strictly matching the partition table), and `--version` **must increase**.

Two common pitfalls:

- **Version not increasing → MCUboot rejects it** ("same version");
- **No USB CDC serial port after flashing**: tap RST once; once the app runs, CDC enumerates as `XIAO_NRF54LM20B` on its own.

</details>

**4. Verify the result**

Connect to the serial port to see the output:

<Tabs groupId="os">
<TabItem value="macos" label="macOS" default>

```bash
screen /dev/cu.usbmodem1101 115200   # exit: Ctrl+A then K
```

</TabItem>
<TabItem value="windows" label="Windows">

Connect with a serial tool (such as [PuTTY](https://www.putty.org/) or the VS Code Serial Monitor plugin) to the port you see in Device Manager (something like `COM3`), baud rate 115200.

</TabItem>
<TabItem value="linux" label="Linux">

```bash
screen /dev/ttyACM0 115200   # exit: Ctrl+A then K
```

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/application_imu/29.png" style={{width:300, height:'auto'}}/></div>
<br/>

Holding the capture grip (front toward you, USB down), perform the gestures in turn; the serial port prints in real time:
Explanation of the output data

```
*** XIAO M20B Edge AI Gesture Demo ***
Board: XIAO nRF54LM20B Sense
Model: XIAO_M20B_Gesture_5Class (solution 96964)
Runtime: Nordic Edge AI / Axon NPU
[AI] Model initialized
[IMU] Sampling rate: 100 Hz (6ch, micro-SI, window 200 shift 33)
[AXON] NPU initialized
[AI] Gesture: ROTATION_CCW      ← real-time recognition result
[AI] Confidence: 0.62           ← confidence
[AI] Inference time: 1.248 ms   ← NPU inference time
```

Measured metrics:

| Metric | Value |
|---|---|
| Flash usage | 140,744 B / 2,084,864 B (6.8%) |
| RAM usage | 27,592 B / 524,288 B (5.3%) |
| Inference time | ~1.25 ms/inference (Axon NPU) |
| USB CDC stability | 10 minutes online, no drops |
| Serial | 115200 baud, banner after DTR raised |

> Note: **confidence is not real accuracy** — it only reflects how sure the model is about this particular decision. A per-class confusion-matrix quantification on the device (20 trials per class) has not been run yet.

## FAQ

### Training progress stuck at 10%

**Symptom**: after you start training in Edge AI Lab, Training Progress stays at 10% for a long time, Status shows `Training completion`, the task runs for about 24 minutes with no change, `Resume Training` and `Stop` are both greyed out, and the page keeps the `11.06% of data was removed` preprocessing warning.

**Possible cause**: the cloud training task hit an exception (queueing / post-processing / compile-stage delay), the page state did not refresh, the server-side task is abnormal, or there is a network or auth issue. Progress sitting at 10% by itself does not prove training failed, and it does not mean the model or dataset is at fault.

**Troubleshooting steps**:

1. Do not immediately delete the Solution or create duplicate training tasks;
2. Reopen Edge AI Lab in a new browser tab;
3. Go to `My Solutions → Solution Details → Model Training` and check the training session's real status;
4. If it shows `Training completed` → look at the results directly; if it shows `Failed` → read the error;
5. If still stuck at 10% → open the browser developer tools and check Console / Network for failed requests;
6. Record the Solution ID, Session ID, training configuration, and error logs, and report to Nordic Support if needed.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>

---

<!-- Materials still to fill in:
1. Official 20B Sense store link and product photo (the hardware table temporarily uses the 20A p-6840 link and photo, per the "copy first, images later" rule);
2. IMU/sensor page jump link (at the Step 6 self-built project spot).
-->
