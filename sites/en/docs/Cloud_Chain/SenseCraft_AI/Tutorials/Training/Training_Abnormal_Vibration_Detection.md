---
description: Introduces the use of abnormal vibration detection.
title: Abnormal Vibration Detection
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 01/06/2026
  author: jancee
createdAt: '2025-08-14'
updatedAt: '2026-01-06'
url: https://wiki.seeedstudio.com/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection/
---

# Vibration Anomaly Detection

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

Just as the smallest lesion can lead to a fatal disease, the most severe engineering disasters often stem from seemingly insignificant anomalies. Vibration is a crucial indicator—fractures, blockages, overloads, and wear all manifest distinct vibration patterns.

This tutorial introduces the **Vibration Anomaly Detection Kit**. It is a lightweight intelligent solution designed to monitor and identify abnormal vibration patterns in real-time. By learning a device’s normal vibration signature with minimal training data, it provides early warnings for mechanical faults.

<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

---

## 1. Preparation

Before you begin detecting anomalies, please ensure you have the following hardware and software environments ready.

### Hardware Requirements

The solution consists of 3 hardware modules.

- **MCU:** <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldered)**</a>
- **Expansion Board:** <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO**</a> (with embedded battery management)
- **Sensor:** <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3-Axis Digital Accelerometer (LIS3DHTR)**</a>
- **Cable:** 1 USB-C data cable
- **Target Object:** A device with consistent regular vibrations (e.g., motor, fan).

**Get the complete Kit:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>

### Software Setup

1. Open your browser and visit <a href="https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home" target="_blank">**SenseCraft AI**</a>.
2. Log in with your account (register if you don't have one).
3. Enter the **XIAO ESP32S3 Sense** workspace and select **"Vibration"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

---

## 2. Step-by-Step Guide

Follow these steps to train your device to recognize "normal" vibrations and detect anomalies.

### Step 1: Connect and Initialize

1. **Assembly:** Connect the accelerometer to the XIAO ESP32-S3 via the Grove Shield. Attach the sensor firmly to your target object.
2. **Connect:** Plug the XIAO ESP32S3 into your computer via USB. Click the **"Connect"** button on the SenseCraft AI interface.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>

3. **Verify:** The system will display the device information.
    * *Note:* If the firmware is incorrect, use the burn button on the interface to update to the **Vibration Anomaly Detection (VAD) firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>

### Step 2: Configuration

Once connected, you will see the Parameter Settings area.
* **Window Size:** Default is **192**. Keep this default for now.
    * *Tip:* A too-small window may lead to insufficient learning, while a too-large window increases inference time. You can tune this later.

### Step 3: Train (Collect Normal Data)

The device needs to learn what "Normal" feels like.

1. Ensure your target object is running in its **normal state**.
2. Click **"Collect Normal Vibration"**.
3. Wait for the success message: "Normal vibration collection succeeded".
4. Click **"Save"**. This stores the model into the MCU's flash memory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

### Step 4: Detect Anomalies

1. Click **"Detect"** to start real-time monitoring.
2. Observe the **Detection Output Area**:
    * **Normal:** The vibration pattern matches the learned model.
    * **Abnormal:** A potential anomaly is detected (Alert displayed).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>

### Step 5: Deployment & GPIO

You can configure the device to trigger external hardware when an anomaly occurs.

1. Locate the **GPIO Configuration** section.
2. Select a Pin (e.g., LED on Pin 21) and set the active level for the abnormal state.
3. Enable **"Default Power-On Inference Mode"**. This allows the device to run automatically when powered by a battery, without a computer connection.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>

---

## 3. Parameter Tuning Guide

If you find the detection is too sensitive (false alarms) or not sensitive enough, you need to tune the parameters.

### UI Overview for Tuning

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

The UI helps you visualize the data:
1.  **Device Info:** Top area.
2.  **Settings:** Parameter and Collection settings.
3.  **Visualization:** Real-time waveform (Time vs. Acceleration).
4.  **Output:** Detection results (0 for Normal, 1 for Abnormal).

### Key Parameters

#### 1. Window Size
Defines the number of sample points for one "cycle" of analysis.
* **Default:** 192 (approx. 1.92 seconds at 100Hz).
* **How to Tune:** The window must cover at least one complete vibration cycle. Use the waveform chart to measure the period of your machine's vibration. If the machine vibrates slowly, increase the Window Size.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

#### 2. Anomaly Threshold
Defines the sensitivity of the detection.
* **Range:** 0.0 to 1.0 (Default: 0.5).
* **How to Tune:**
    * **Too many false alarms?** Increase the threshold (e.g., to 0.6 or 0.7).
    * **Missed anomalies?** Decrease the threshold (e.g., to 0.3 or 0.4).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

---

## 4. Algorithm & Theory

*This section explains the technology behind the "Collect" and "Detect" buttons. It is optional for basic usage.*

The system uses the **Gyroscope Euclidean Distance Anomaly Detection (GEDAD)** algorithm, adapted for 3-axis accelerometers. It consists of two phases:

### Phase 1: Learning
The algorithm establishes a baseline template of normal vibration.
1.  **Template Generation:** Collects a set of normal 3-axis acceleration data.
2.  **Threshold Calculation:** The algorithm slides "chunks" of data across the template, calculating the Euclidean (L2) distance. It then statistically determines a threshold that separates normal variations from anomalies.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

### Phase 2: Inference
During real-time detection, incoming data is compared against the learned template.
* If the Euclidean distance of the real-time data is below the threshold relative to the template, it is **Normal**.
* If the distance remains above the threshold, it is flagged as **Abnormal**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

**Advantages:**
* Fast training speed.
* Low computational overhead (suitable for ESP32S3).
* Requires minimal data for training.

---

## 5. Application Scenarios

The Vibration Anomaly Detection Kit is ideal for predictive maintenance and safety monitoring in various fields:

* **Industrial:** Pumps, Air Compressors, Fans, Motors, Gearboxes.
* **HVAC:** Refrigeration Compressors, Cooling Towers.
* **Robotics:** AGV/AMR Systems, Agricultural Tractors.
* **Data Centers:** Chiller Units, Server Cooling.
* **Consumer:** Washing Machine balance alerts, Garage door mechanisms.

---

## Open Source & Support

**Source Code:** <a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab</a>

Our algorithms and firmware are open-source. We are actively working on features like WiFi + MQTT reporting and FFT analysis. Feel free to submit an <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a> or <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>.

**Tech Support:**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
