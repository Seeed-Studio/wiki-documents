---
description: Motion Recognition based on Edge Impulse
title: Motion Recognition based on Edge Impulse
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-EI
last_update:
  date: 04/17/2023
  author: MengDu
---

# TinyML on SEEED XIAO RP2040 (Motion Recognition)

In this wiki, we will show you how to utilize the accelerometer on Seeed Studio XIAO RP2040 combined with Edge Impulse to enable motion recognition. The codes we present here are supported by latest version of  XIAO RP2040 Boards.

## Materials Required

### Hardware

In this wiki, we need to prepare the following materials:

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove - Shield for Seeeduino Xiao](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - 3-Axis Digital Accelerometer(±1.5g)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one.jpg" alt="pir" width={800} height="auto" /></p>

**Hardware Set up**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_all_in_one_connect.jpg" alt="pir" width={400} height="auto" /></p>

### Software

The required libraries are listed below. It is highly recommanded that use the codes here to check whether the hardware is functioning well. If you have problem about installing the library, please refer to [here](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)

## Get started

First we are going run some demos to check whether the board and the display screen is functioning well. If yours are fine, you can move on to the next instruction.

### Check the circuit connection and accelerometer

Open the Arduino IDE, navigate to Sketch -> Include Library -> Manage Libraries... and Search and Install `U8g2 library` in the Library Manager.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition29.png" alt="pir" width={400} height="auto" /></p>

After the installation, copy the following code run it.

```c++
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;
#define CONVERT_G_TO_MS2    9.80665f

void setup() {
    Serial.begin(115200);
    while (!Serial);
    accelemeter.init();
}

 
void loop() {

    float ax, ay, az;
    accelemeter.getAcceleration(&ax, &ay, &az);

    Serial.print(ax * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.print(ay * CONVERT_G_TO_MS2,4);
    Serial.print('\t');
    Serial.println(az * CONVERT_G_TO_MS2,4);
    
}

```

After uploading the code and unplugging Seeed Studio XIAO RP2040 .
Then , open the serial monitor  you will see the output like this:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao_rp2040_ei_serial_monitor.jpg" alt="pir" width={400} height="auto" /></p>

If all is fine, we can move on and connect Seeed Studio XIAO RP2040 to Edge Impulse.

## Connected with Edge Impulse

The precision of the training model is very important to the final result. If your output training results are as low as less than 65%, we highly recommand you train for more times or add more data .

- **Step 1.** Create a new project in [Edge Impulse](https://studio.edgeimpulse.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/01.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 2.** Choose "Accelerometer data" and click "Let’s get started!"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/02.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/03.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 3.** Install [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/cli-installation) in your computer.

- **Step 4.** Run the command in your `terminal` or `cmd` or `powershell` to start it.

```bash
sudo edge-impulse-data-forwarder
```

- **Step 5.** We need to use the CLI to connect the Seeed Studio XIAO RP2040 with Edge Impulse. First, login your account and choose your project

Name the accelerometer and the device.

Move back to Edge Impulse "Data acquisition" page, the outcome should be like this if the connection is successful. You can find the Device of "XIAO RP2040" is shown on the right of the page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/04.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 6.**  Select the sensor as "3 axes". Name your label as `up` and `down`, modify Sample length (ms.) to 20000 and click start sampling.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/05.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 7.** Swing the [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/XIAO-RP2040/) up and down and keep the motion for 20 seconds. You can find the acquistion is shown up like this:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/06.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 8.** Split the data by clicking the raw data right top and choose "Split Sample". Click +Add Segment and then click the graph. Repeat it more than 20 time to add segments. Click Split and you will see the the sample data each for 1 second.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/07.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 9.** Repeat **Step 7.** and **Step 8.** and label data with different name to click different motion data, like `circle` and `line` and so on. The example provided is classifying up and down, left and right, and circle. You can change it as you may want to change here.

:::note
In Step 8. the split time is 1 second which means you at least do one swing of up and down in one second in Step 7. Otherwise, the results will not be accurate. Meanwhile, you can adjust the split time according to your own motion speed.
:::

- **Step 10.** Create Impulse

Click **Create impulse** -> Add a processing block -> Choose **Spectral Analysis** -> Add a learning block -> Choose **Classification (Keras)** -> Save Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/08.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 11.** Spectral features

Click and Set up

Click **Spectral features** -> Drop down page to click Save parameters -> Click **Generate features**

The output page should be like:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/10.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 12.** Training your model

Click NN Classifier -> Click Start training -> Choose Unoptimized (float32)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/11.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 13.** Model testing

Click Model testing -> Click Classify all

**If your accuracy is low, you can check you dataset by increasing the  training set and extending the sample time**

We are also able to get the evaluation when downloading the model

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/12.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 14.** Build Arduino library

Click Deployment -> Click Arduino Library -> Click **Build** -> Download the .ZIP file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/13.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 15.** The name of .ZIP file is very important, it is set up as your name of the Edge Impulse project by default. Like here the project of the name is "RP2040". Select the file as ""Add the ".ZIP file" to your Arduino libraries

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/14.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 16.** Open Arduino -> Click Sketch -> Click **Include Library** ->
 **ADD .ZIP Library**

Copy the code below, if the project name on edgeimpluse is customised, then the zip archive text will be the same name. You can change the first line of the include to your header file.

```c
#include <XIAO_RP2040_inferencing.h> // customed name need change this header file to your own file name
#include <Wire.h>
#include "MMA7660.h"
MMA7660 accelemeter;

#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f         

static bool debug_nn = false; 

void setup()
{
    Serial.begin(115200);
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");
    accelemeter.init();
}

float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

void loop()
{
    ei_printf("\nStarting inferencing in 2 seconds...\n");

    delay(2000);

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        accelemeter.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // Turn the raw buffer in a signal which we can the classify
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/15.jpg" alt="pir" width={800} height="auto" /></p>

- **Step 17.** Move or hold the Seeed Studio XIAO RP2040 and check the results:

Click the monitor on the top right corner of Arduino.

When you move the Seeed Studio XIAO RP2040 in the **circle and line** direction:

The monitor will output something like:

```bash
15:45:45.434 -> 
15:45:45.434 -> Starting inferencing in 2 seconds...
15:45:47.414 -> Sampling...
15:45:48.439 -> Predictions (DSP: 6 ms., Classification: 1 ms., Anomaly: 0 ms.): 
15:45:48.439 ->     Circle: 0.59766
15:45:48.439 ->     line: 0.40234
15:45:48.439 -> 
```

Congratulation! You acheve the end of the project. It is encouraged that you can try more directions and check which one will perform the best output.

## Resources

- [Seeed Studio XIAO RP2040](https://wiki.seeedstudio.com/XIAO-RP2040/)
- [Edge Impluse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)

## Tech Support
<!-- 
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p> -->

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
