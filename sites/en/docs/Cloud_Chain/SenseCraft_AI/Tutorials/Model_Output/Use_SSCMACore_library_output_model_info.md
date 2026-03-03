---
sidebar_position: 11
description: This article describes how to use SSCMACore libraries on XIAO.
title: Use SSCMACore library output model info
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-sscmacore-library
aliases:
  - /sensecraft_ai_sscmacore_library
last_update:
  date: 12/12/2024
  author: Citric
---

# Configuring Model Output on SenseCraft AI for XIAO ESP32S3 Sense using SSCMACore Library

This wiki provides a step-by-step guide on how to configure the model output on SenseCraft AI for the XIAO ESP32S3 Sense board using the SSCMACore (Seeed SenseCraft Model Assistant Core) library. By following these instructions, you will be able to set up your XIAO ESP32S3 Sense to work with a pre-trained model and utilize the SSCMACore library to process the model's output.

## Prerequisites

Before proceeding, ensure that you have the following:

- XIAO ESP32S3 Sense
- USB-C data cable for connecting the XIAO ESP32S3 Sense to your computer
- Arduino IDE with the [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) library installed

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Step 1. Ensure a Model is Loaded on the XIAO ESP32S3 Sense

Before proceeding, make sure that your XIAO ESP32S3 Sense board has a trained model loaded. If you haven't loaded a model yet, refer to the SenseCraft AI documentation on how to train and deploy models to your device.

- [Using a model for XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/sensecraft_ai_pretrained_models_for_xiao/)

If you want to use your own trained model, you can refer to the following two Wikis.

- [Type of training - Classification](https://wiki.seeedstudio.com/sensecraft_ai_training_classification/)
- [Type of training - Object Detection](https://wiki.seeedstudio.com/sensecraft_ai_training_object_detection/)

## Step 2. Set Up the SSCMA Library

Download the [Seeed_Arduino_SSCMACore](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore) library from the GitHub repository.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Add the downloaded library to your Arduino environment by following these steps:

- Open the Arduino IDE.
- Go to **Sketch -> Include Library -> Add .ZIP Library**.
- Navigate to the downloaded **Seeed_Arduino_SSCMACore** library and select it.
- Click **Open** to add the library to your Arduino environment.

## Step 3. Choose and Configure the Example Code

The SSCMA library provides two example codes that demonstrate how to work with the model output on the XIAO ESP32S3 Sense board. Choose one of the following examples based on your requirements:

### Example 1: Inference

1. Open the [`inference.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference/inference.ino) example code.

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));

    for (const auto& box : instance.getBoxes()) {
        Serial.printf("Box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", box.x, box.y, box.w, box.h, box.score, box.target);
    }

    for (const auto& cls : instance.getClasses()) {
        Serial.printf("Class: target=%d, score=%f\n", cls.target, cls.score);
    }

    for (const auto& point : instance.getPoints()) {
        Serial.printf("Point: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
    }

    for (const auto& kp : instance.getKeypoints()) {
        Serial.printf("Keypoints: box: x=%f, y=%f, w=%f, h=%f, score=%f, target=%d\n", kp.box.x, kp.box.y, kp.box.w, kp.box.h, kp.box.score, kp.box.target);
        for (const auto& point : kp.points) {
            Serial.printf("Keypoint: x=%f, y=%f, z=%f, score=%f, target=%d\n", point.x, point.y, point.z, point.score, point.target);
        }
    }

    auto perf = instance.getPerf();
    Serial.printf("Perf: preprocess=%dms, inference=%dms, postprocess=%dms\n", perf.preprocess, perf.inference, perf.postprocess);

}
```

This example code demonstrates how to perform inference using the SSCMA library and retrieve the model's output, including bounding boxes, classes, points, and keypoints. The code initializes the video capture, SSCMA Micro Core, and performs inference on each frame captured by the camera. The output of the model, such as bounding boxes, classes, points, and keypoints, is printed to the serial monitor.

:::note
The `loop()` function is where the inference process takes place. It starts by capturing a frame using `capture.getManagedFrame()` and invoking the inference on the captured frame using `instance.invoke(frame)`.

After inference, the code retrieves and prints various outputs from the model:

- **Bounding boxes**: The `instance.getBoxes()` function returns a vector of bounding boxes. Each bounding box contains information such as coordinates (x, y, w, h), score, and target class.
- **Classes**: The `instance.getClasses()` function returns a vector of detected classes. Each class contains information about the target class and its corresponding score.
- **Points**: The `instance.getPoints()` function returns a vector of detected points. Each point contains information such as coordinates (x, y, z), score, and target class.
- **Keypoints**: The `instance.getKeypoints()` function returns a vector of detected keypoints. Each keypoint contains a bounding box and a vector of associated points. The code prints the bounding box information and iterates over the points, printing their coordinates, score, and target class.

Finally, the code retrieves the performance metrics using `instance.getPerf()` and prints the preprocessing, inference, and postprocessing times in milliseconds.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/74.png" style={{width:1000, height:'auto'}}/></div>

### Example 2: Inference with Callbacks

1. Open the [`inference_cb.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMACore/blob/main/examples/inference_cb/inference_cb.ino) example code.

```cpp
#include <SSCMA_Micro_Core.h>

#include <Arduino.h>
#include <esp_camera.h>


SET_LOOP_TASK_STACK_SIZE(40 * 1024);


SSCMAMicroCore instance;
SSCMAMicroCore::VideoCapture capture;


void setup() {

    // Init serial port
    Serial.begin(115200);

    // Init video capture
    MA_RETURN_IF_UNEXPECTED(capture.begin(SSCMAMicroCore::VideoCapture::DefaultCameraConfigXIAOS3));

    // Init SSCMA Micro Core
    MA_RETURN_IF_UNEXPECTED(instance.begin(SSCMAMicroCore::Config::DefaultConfig));

    instance.registerPerfCallback(SSCMAMicroCore::DefaultPerfCallback);
    instance.registerBoxesCallback(SSCMAMicroCore::DefaultBoxesCallback);
    instance.registerClassesCallback(SSCMAMicroCore::DefaultClassesCallback);
    instance.registerPointsCallback(SSCMAMicroCore::DefaultPointsCallback);
    instance.registerKeypointsCallback(SSCMAMicroCore::DefaultKeypointsCallback);

    Serial.println("Init done");

}

void loop() {

    auto frame = capture.getManagedFrame();

    MA_RETURN_IF_UNEXPECTED(instance.invoke(frame));
    
}
```

This example code demonstrates how to perform inference using the SSCMA library and register callback functions to handle the model's output. The code initializes the video capture, SSCMA Micro Core, and registers callback functions for performance metrics, bounding boxes, classes, points, and keypoints. During the inference process, the registered callback functions are invoked, allowing you to customize the handling of the model's output.

:::note
The code defines several callback functions:

- `perfCb`: This function is called when performance metrics are available. It receives an instance of `SSCMAMicroCore::PerfMetrics` and prints the preprocessing, inference, and postprocessing times.
- `boxCb`: This function is called for each detected bounding box. It receives an instance of `SSCMAMicroCore::Box` and prints the box coordinates, score, and target class.
- `classCb`: This function is called for each detected class. It receives an instance of `SSCMAMicroCore::Class` and prints the target class and score.
- `pointCb`: This function is called for each detected point. It receives an instance of `SSCMAMicroCore::Point3D` and prints the point coordinates, score, and target class.
- `keypointsCb`: This function is called for each detected keypoint. It receives an instance of `SSCMAMicroCore::Keypoints`, which contains a bounding box and a vector of associated points. The function prints the bounding box information and iterates over the points, printing their coordinates, score, and target class.

In the `setup()` function, the serial communication is initialized with a baud rate of 115200. The video capture is then initialized using the `capture.begin()` function with the default camera configuration for XIAO ESP32S3 Sense. The SSCMA Micro Core is initialized using the `instance.begin()` function with the default configuration.

After initialization, the code registers the callback functions using the appropriate methods provided by the SSCMAMicroCore instance:

- `instance.setPerfCallback(perfCb)`: Registers the perfCb function as the callback for performance metrics.
- `instance.setBoxCallback(boxCb)`: Registers the boxCb function as the callback for bounding boxes.
- `instance.setClassCallback(classCb)`: Registers the classCb function as the callback for detected classes.
- `instance.setPointCallback(pointCb)`: Registers the pointCb function as the callback for detected points.
- `instance.setKeypointsCallback(keypointsCb)`: Registers the keypointsCb function as the callback for detected keypoints.

The `loop()` function captures a frame using `capture.getManagedFrame()` and invokes the inference on the captured frame using `instance.invoke(frame)`. During the inference process, the registered callback functions will be invoked whenever the corresponding output data is available.

You can modify the callback functions to perform specific actions or further process the received data based on your application's requirements.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/76.png" style={{width:1000, height:'auto'}}/></div>

## Step 4. Upload and Run the Code

Connect your XIAO ESP32S3 Sense board to your computer using the USB-C data cable. Open the selected example code (`inference.ino` or `inference_cb.ino`) in the Arduino IDE.

Select the appropriate board and port in the Arduino IDE:

- Go to **Tools -> Board** and select "XIAO ESP32S3 Sense".
- Go to **Tools -> Port** and select the port to which your XIAO ESP32S3 Sense is connected.
- Go to **Tools -> PSRAM -> OPI PSRAM**. Be sure to turn on PSRAM!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/75.png" style={{width:600, height:'auto'}}/></div>

Click the "Upload" button in the Arduino IDE to compile and upload the code to your XIAO ESP32S3 Sense board. Once the upload is complete, open the Serial Monitor in the Arduino IDE to view the output of the model.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/73.png" style={{width:1000, height:'auto'}}/></div>

## Conclusion

By following this step-by-step guide, you should now be able to configure the model output on SenseCraft AI for your XIAO ESP32S3 Sense board using the SSCMA library. Depending on the example code you chose, you can either retrieve the model's output directly or use callback functions to customize the handling of the output.

Feel free to explore and modify the example codes to suit your specific requirements. The SSCMA library provides a powerful set of tools and functions to work with computer vision and machine learning models on the XIAO ESP32S3 Sense board.

If you encounter any issues or have further questions, please refer to the SenseCraft AI documentation or seek assistance from the Seeed Studio community forums.

Happy coding and exploring the world of computer vision and machine learning with your XIAO ESP32S3 Sense board!

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
