---
description: TinyML on Seeed Studio XIAO SAMD21
title: TinyML on Seeed Studio XIAO SAMD21
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-TinyML
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# TinyML on Seeed Studio XIAO Series

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>


Thanks to recent improvements in model optimization and emergence of frameworks specifically created for running machine learning model inference on microcontrollers, it has became possible to give more intelligence to these tiny devices. We now can deploy neural networks on microcontrollers for audio scene recognition (for example elephant activity or sound of breaking glass), hot-word detection(to activate device with a specific phrase) or even for simple image recognition tasks. The devices with embedded microcontrollers can be used to give new life and meaning to old sensors, such as using an accelerometer installed on a mechanism for anomaly detection and predictive maintenance – or to distinguish various kinds of liqueurs as in [this demo](https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)! 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>


**The possibilities of TinyML are truly huge.**

We have made a [whole series on deploying tiny machine learning models](https://wiki.seeedstudio.com/Wio-Terminal-TinyML/) to another Seeed studio product, a compact development board in a plastic case, Wio Terminal. But it is possible to go tinier and deploy similar models to ARM Cortex M0+ and the little [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) board which is built around it – the board is as small as a thumb(20×17.5mm), consumes only 1.33 mAh of power (which means it can work ~112 hours on a 150 mA battery, much more if put in deep sleep) and cost as little as 4.3 USD.

This project covers training and deploying model to Seeed Studio XIAO SAMD21 and Seeed Studio XIAO RP2040 development boards. For additional information, have a look at the corresponding video!

<iframe width={560} height={315} src="https://www.youtube.com/embed/04_7U8MzVKg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />


## Data acquisition and model training

Software engineers spend a lot of time in front of the glowing screen on my chair. And later in the day it becomes difficult to maintain a proper pose. If only there was a way to make a device that could learn your specific body position for proper and wrong poses and warn you when you slouch too much or go into “Python pose”… Wait a moment, there is!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/utxkrcg5yss61.png" /></div>


The best sensor for the task that will provide the data for machine learning model is obviously accelerometer. The original Seeed Studio XIAO SAMD21 and Seeed Studio XIAO RP2040, being very small do not come equipped with accelerometer sensor, while newer Seeed Studio XIAO nRF52840 Sense comes with built-in accelerometer. 

If you use original Seeed Studio XIAO SAMD21 and Seeed Studio XIAO RP2040, you can connect [Grove LIS3DH accelerometer](https://wiki.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/) module to [Seeed Studio XIAO expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) and start collecting the data. Collect 3 data samples for each posture, 60 seconds each with device attached to a t-shirt on your back.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" /></div>


For each sample, maintain the same pose, but include some arm, head and torso movements to simulate normal activity.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-32.png" /></div>

Choose 5 seconds time window with window shift of 1 second and Flatten processing block, since we are dealing with very slow moving data. A very plain fully connected network provided a good accuracy. In Reference section at the bottom of the article, you can find link to public version of the Edge Impulse project.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-33.png" /></div>

Some improvement can be made by collecting more data and making sure proper and improper postures can be recognized with some variations in device positioning on the clothes. Since the device is thought to be individual usage device it does not need to generalize to different people’s postures and can be easily re-trained. You can check how well it detects your postures after training in Live classification tab.

## Model deployment

After you’re satisfied with accuracy download the resulting model as Arduino library and copy it to your Arduino sketches/libraries folder. You can find sample code in the Reference section at the bottom of the article. The sample code collects 5 second sample, performs the inference and turns on the buzzer if one of the improper poses is detected.

```cpp
void loop()
{

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
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
    
  if (result.classification[1].value > ALARM_THRESHOLD || result.classification[2].value > ALARM_THRESHOLD)
  {     
  tone(BUZZER_PIN, 523, 250);
  delay(250);
  noTone(BUZZER_PIN);
  delay(250);  
  tone(BUZZER_PIN, 523, 250);
  delay(250);  
  noTone(BUZZER_PIN);    
  }

}
```

Since it is relatively slowly changing data and we do not need fast response times, normal sequential inference pipeline suits this application well.

A step above would be to use the newest Seeed Studio XIAO nRF52840 and connect the device to user’s smartphone, which would allow for better alerts, statistics and so on.

Happy tinkering and remember to keep good posture!

## Reference

- [Edge Impulse Public project](https://studio.edgeimpulse.com/public/20025/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/SeeeduinoXIAO_TinyML_7_Posture_Detection)