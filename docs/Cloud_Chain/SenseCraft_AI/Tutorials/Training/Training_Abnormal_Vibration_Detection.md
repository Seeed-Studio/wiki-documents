---
description: Introduces the use of abnormal vibration detection.
title: Abnormal Vibration Detection
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 08/14/2025
  author: lian
---

# Vibration Anomaly Detection

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

Just as the smallest lesion can lead to a fatal disease, the most severe engineering disasters often stem from seemingly insignificant anomalies, which actually provide ample warnings and telltale signs. Vibration is one such crucial indicator - fractures, blockages, overloads, and wear all manifest distinct vibration patterns. If we choose to, we could collect vibration signals and skillfully employ mathematics and algorithms to analyze them, thereby preventing catastrophic and costly disasters.

## Introduction

Introducing the vibration anomaly detection kit. It is an lightweight intelligent solution designed to monitor and identify abnormal vibration patterns in real-time. By learning a device’s normal vibration signature with minimal training data, it provides early warnings for mechanical faults, wear, or failure—preventing catastrophic damage before it happens. It's ideal for predictive maintenance on industrial machinery, safety monitoring in vehicles, structural health assessment of bridges/buildings, ensuring precision in manufacturing/lab equipment, and enabling anomaly detection in smart appliances/IoT devices.
<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

Please watch this video first to get an initial sense of it.

---

## Application Scenarios

### Predictive Maintenance for Rotating Equipment

- Pumps
- Air Compressors
- Fans
- Motors
- Gearboxes

### Automatic Conveyor Belts

### HVAC/Refrigeration Equipment

- Refrigeration Compressors
- Cooling Towers
- Ventilation Motors

### Vehicles & Robotics

- Agricultural Tractors
- AGV/AMR Systems

### Data Center & Building HVAC Systems

- Chiller Units
- Secondary Pumps
- Cooling Tower
- Large-scale UPS Soundproof Cabinets

### Household & Consumer Grade Equipment

- Washing Machine/Dryer Imbalance Alert
- Wear Prediction for Garage Roller

---

## How does it work

As shown in the demonstration video, the kit consists of 3 hardware modules, which rely on the SenseCraft AI platform to download firmware and get configured.

- <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldered)**</a>
- <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO with embedded battery management chip**</a>
- <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3-Axis Digital Accelerometer (LIS3DHTR)**</a>

**Kit:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>

We attach an accelerometer to an object with consistent, regular vibrations. And then connect the accelerometer via the Grove cable to an MCU (in this case, XIAO ESP32-S3). The MCU collects and analyzes the three-axis data from the accelerometer in real-time. By collecting normal vibration data for just a brief period, the system can learn to automatically determine if the object is experiencing an abnormal vibration.

When connected to a computer, the sensor data and detection results are sent via USB (or other methods) to the SenseCraft console. On the console, you can monitor the device's current status. If the device is in an abnormal state, an alert will be displayed. Furthermore, the console not only allows you to save the learned "normal vibration" data for future use but also lets you configure GPIO output states (such as activating an LED light) to signal when an anomaly occurs.

Here we provide a detailed explanation of the vibration anomaly detection algorithm ---- **Gyroscope Euclidean Distance Anomaly Detection (GEDAD)** algorithm, which initially developed for gyroscopes, and now it has been extended to 3-axis accelerometers while retaining its original name. The GEDAD algorithm consists of two core phases: **learning** and **inference**.

---

### 2.1 Data Acquisition and Pre-processing

The process begins with data acquisition. While vibration data is collected from a three-axis accelerometer via I2C and stored in a circular buffer, later the data undergoes a linear transformation where it is multiplied by a coefficient, and added with another coefficient beta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_1.png"/></div>

---

### 2.2 Learning Phase

The objective of the learning phase is to establish a baseline template of normal vibration for the measuring device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

1. **Template Generation:** First, a set of 3-axis acceleration data, sized to cover a complete normal operational cycle, is collected to serve as the template data.
2. **Distance Calculation:** The algorithm then randomly samples short data segments or named *chunks* from identical positions within each channel of the template. Each chunk is then slid across the entire template of its corresponding channel with a defined stride, calculating the Euclidean (L2) distance at each position.
3. **Threshold Calculation:** Next, outliers are filtered from these distances (e.g., using the σ rule; specifically, values less than a given limit). For each channel, the remaining distances are sorted to identify the smallest values. An average threshold is then computed for each channel from these distances, defining the boundary between normal and abnormal states.
4. **Parameter Calibration:** Finally, an additional parameter, *K*, is determined by finding the median counts of consecutive instances where the Euclidean distance is below the threshold during a subsequent comparison. This parameter is stored to enhance detection accuracy in the next phase.

---

### 2.3 Inference Phase

During inference, the algorithm compares real-time three-axis acceleration data against the established template data to identify any vibrations that do not match the normal 'fingerprint'.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

- The process is similar to training, but it uses real-time data segments for comparison instead of randomly sampled chunks.
- If the real-time data segment is sufficiently similar to a portion of the template (i.e., its Euclidean distance is below the threshold), the vibration is deemed normal.
- Conversely, if the distance remains above the threshold after comparison against the entire template, the system flags the vibration as an anomaly.

The actual computation is more complex, involving the fusion of anomaly scores across channels and the use of the parameter *K*.

---

### 2.4 Summary and Future Work

In summary, the algorithm's advantages include:

- Fast 'training' speed
- Low computational overhead
- Suitability for low-power embedded devices
- Requires only a small amount of normal data for training

We are also exploring engineering optimizations, such as using **Fast Fourier Transform (FFT)** to analyze frequency components and considering time-frequency characteristics and average amplitude. Future work will focus on further enhancing the algorithm's accuracy, efficiency and robustness.

---

## 3. How to use

### 3.1 Preparation

#### 3.1.1 Hardware

- The kit - **Kit:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>
- 1 USB-C data cable (for device power supply and data transmission)
- 1 computer (for accessing the SenseCraft AI)
- Object to be monitored (e.g., motor, household appliance)

#### 3.1.2 SenseCraft AI Login

1. Open a browser, visit the official website of the <a href="https://sensecraft.seeed.cc/ai/home" target="_blank">**SenseCraft AI**</a>, and log in with your account and password (if you don’t have an account, you need to complete the registration process first).  
2. Enter the workspace of the XIAO ESP32S3 Sense device and select "Vibration".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

3. Check the connection. If the connection is good and the firmware is the correct one, the device information will be shown. If the current firmware of the device is Vision firmware or any other firmware, you can directly update it to the Vibration Anomaly Detection (VAD) firmware through the firmware burning button on the interface.

---

### 3.2 UI of SenseCraft AI

The UI of the platform is divided into 4 core areas:  

1. **Device Information Area:** Located at the top of the interface, displaying device ID, device name, device firmware version, device default power-on inference, and GPIO pin control.  
2. **Parameter and Collection Settings Area:** Includes settings for the window size of algorithm parameters and the function of collecting normal vibrations.  
3. **Vibration Data Visualization Area:** Displays real-time vibration acceleration data in a waveform graph (the horizontal axis is the time axis, and the vertical axis is the acceleration value).  
4. **Detection Output Area:** Shows the detection results of normal and abnormal statuses (represented by 0 and 1 respectively), as well as the waveform graph of abnormal vibrations (the horizontal axis is the time axis, and the vertical axis is the abnormal display with a range of 0~1).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

---

### 3.3 Detailed Operating Process

#### 3.3.1 Device Connection and Initialization

1. Connect the XIAO ESP32S3 Sense to the computer via the data cable.  
2. Click the "Connect" button on the SenseCraft AI interface.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>
3. The system automatically sends commands to query device information, and the device returns corresponding response information.  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>
4. Once the device information is displayed, proceed to the parameter configuration:  
   - Users can set the window size, with a default value of 192 and a range of 192~768. At this time point, just start with the default value. Come back to tune this parameter when you get too jumping detection results in the later step. And please remember to click the "Save" button in the end after you verified that the parameter is in its best value.
:::tip note
A too-small window may lead to insufficient learning of vibration patterns, while a too-large window will increase inference time.
:::
---

#### 3.3.2 Normal Vibration Data Collection (Model Training)

- Click the "Collect Normal Vibration" button to start collecting normal vibration data (training).  
- Wait for the collection to complete and confirm you see the "Normal vibration collection succeeded" message.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

- Save the collected normal vibration data. The "Save" button will save both the parameter and the learned "model" into the flash of the MCU, allowing them to persist across power cycles.

---

#### 3.3.3 Abnormal Vibration Detection

- Click "Detect" to start real-time detection.  
- Inspect the detection results; the platform displays real-time vibration data and detection result - normal or abnormal. The "abnormal" result means a potential anomaly is detected. Users can choose to use it directly or proceed with further verifications, depending on how confident the user is about the anomaly pattern.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>
- Go forward to the deployment step if satisfied, otherwise go back to parameter tuning or collect normal data again.

---

#### 3.3.4 Deployment

Currently the firmware can output the result states with GPIO. Choose the GPIO number based on your needs, and remember to enable the "Default Power-On Inference Mode".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>
**GPIO Usage:**  
Currently, GPIOs 1, 2, 3, 21 (LED), 41, and 42 of the XIAO ESP32S3 Sense are available. You can set the active level for the abnormal state. For example, by setting the LED to light up, the LED will turn on when abnormal vibration is detected.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace8.png"/></div>
---

### 3.4 Parameter Tuning Guide

We provide users with two core algorithmic parameters, **Window Size** and **Anomaly Threshold**. These parameters directly influence the real-time performance, robustness, and precision of the anomaly detection algorithm.

#### 3.4.1 Window Size

The window size is defined as the number of sample data points collected from each channel during the algorithm's learning phase to establish a template of the normal state. It is a critical factor in the algorithm's effectiveness.

- Range: An integer from 192 to 768. The default value is 192. Assuming a default sensor sampling rate of 100Hz, this range corresponds to a time window of 1.92 to 7.68 seconds.
- Tuning Principle: The window size must encompass at least one complete vibration cycle of the object under normal conditions. If the object's vibration period is long, the window size should be increased. Consequently, the algorithm's learning and inference times will increase, and vice versa.

Typically, the vibration period can be determined by observing the "Acceleration" chart in the "Abnormal Vibration Detection" area under normal conditions. First, observe whether the overall curve displays a regular, repeating pattern.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

- If it does, use the slider below the chart to isolate one or two complete vibration cycles. You can then determine the length of the period by hovering your mouse over the curve and calculating the time difference between two similar points.
- If the period is difficult to discern, you can set the window size to the maximum value of 768 to ensure the algorithm captures all potential vibration patterns.
:::tip note
In general terms, a "period" refers to a characteristic that repeats at a fixed interval during an object's motion, development, or change.
:::

---

#### 3.4.2 Anomaly Threshold

The anomaly threshold is defined as the value the algorithm uses to determine if the current state is anomalous. It directly impacts the algorithm's precision and robustness.

- Range: A floating-point number between 0.0 and 1.0. The default value is 0.5.
- Tuning Principle: The anomaly threshold should be adjusted based on the specific application requirements, and determining the optimal value often requires multiple experiments.

Generally, a lower anomaly threshold will lead to more false positives, while a higher threshold may result in false negatives. To make the sensor more sensitive, you can lower the anomaly threshold; conversely, to reduce false alarms, you can raise it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

To increase sensor sensitivity, a binary search method can be used to find the optimal anomaly threshold more efficiently. The steps are as follows:

- Set the initial anomaly threshold to 0.5 and observe the output. If the status is still "normal," the threshold is likely too high.
- Lower the anomaly threshold to half of the upper bound (0.5), i.e., 0.25, and observe the output again.
- If the status remains "normal," set the current value as the new upper bound; otherwise, set it as the new lower bound.
- Next, adjust the anomaly threshold to the midpoint between the current upper and lower bounds and observe the output.
- If the output is "abnormal," the current threshold is too low, so set this value as the new lower bound. If the output is "normal," set this value as the new upper bound.
- Repeat steps 4 and 5 until at current anomaly threshold it consistently produces a "normal" status at the desired level of sensitivity.

---

#### 3.4.3 Other Considerations

Based on the current algorithm's implementation, changes across the three rotational degrees of freedom are the primary determinants for anomaly detection, while variations in the translational degrees of freedom have minimal impact. Therefore, when the device's deployment environment changes (especially its orientation), it is often necessary to initiate a new learning process and readjust the parameters. If you find it difficult to achieve the desired detection accuracy through parameter tuning, you can also try relearning the normal vibration state before retuning the parameters.

---

## Open source

<a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab: AcousticsLab is a cross-platform framework for sound and vibration analysis.</a>

Our algorithms and firmware are currently open-source. Please feel free to submit an <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a> if you have any problem or suggestion.

---

## Future

Upcoming features include:

- Add multiple cutting-edge/state-of-the-art deep learning based vibration anomaly detection algorithms.
- Supports data and result reporting via WiFi + MQTT.
- Support more MCUs and Accelerometers.

Feel free to suggest features you're excited about or submit a <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
