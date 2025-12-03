---
description: Getting Started with Grove Vision AI V2 and software platform
title: Software Support
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_software_support
last_update:
  date: 12/12/2023
  author: Citric
---

# Supported Software Overview

There are two methods enabling the Grove Vision AI Module V2:

- [**No code getting started with SenseCraft AI**](#jump1)
   - [What is SenseCraft AI?](#jump2)
   - [Getting Started with SenseCraft AI Model Assistant](#jump3)
- [**Program on Arduino connecting with Seeed Studio XIAO Board**](#jump4)
   - [Arduino Library Introduction](#jump5)
   - [Getting Started with Seeed Studio XIAO](#jump6)

## <span id="jump1"> No code getting started with SenseCraft AI </span>

In this section, we'll walk you through using SenseCraft AI Model Assistant to quickly deploy and observe results, with no code and no other developemtn boards:

### <span id="jump2"> What is SenseCraft AI?  </span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI empowers users to effortlessly deploy a vast library of publicly available AI models onto their edge devices:

- reComputer (NVIDIA Jetson)
- Seeed Studio XIAO S3 Board
- Vision AI modules, and more

It provides a seamless and user-friendly experience, allowing you to deploy public AI models directly onto your edge devices with just a few clicks. 

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Learn More 📕</font></span></strong></a>
</div>

It includes:

- Model Assistant software service
- Device Workspace software service

In this section, we will use "Model Assistant" here to enable the module. Combined with the empowerment of SenseCraft AI Model Assistant, you can easily upload a wide variety of co-created models and directly observe the results.




### <span id="jump3"> Getting Started with SenseCraft AI Model Assistant  </span>

<!-- SenseCraft is a series of software services developed by Seeed Studio to provide users with faster and simpler software services and applications. With three product lines, Data line, Edge line and AI line, SenseCraft is able to fulfill users' needs in data services, device management and AI applications. No matter what solution you need, SenseCraft can provide you with efficient and reliable solutions and customized services. -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>
 -->
Now we will quickly get started the modules with SenseCraft AI, and this will only require the module only.

#### Step 1. Choose model

First, we need to open the main SenseCraft AI Model Assistant page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>
<br />

Choose the model you want to deploy and click into it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a1.png" style={{width:1000, height:'auto'}}/></div>

You can see the description of this model here and if it suit to you, click the **Deploy Model** button at the right side.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a2.png" style={{width:1000, height:'auto'}}/></div>

#### Step 2. Connect the module and upload a suitable model

Please use a Type-C type cable to connect Grove Vision AI V2 to your computer and then click **Connect** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

Click **Confirm** button. In the upper left corner of the this page, you can select **USB Single Serial**. Then click the **Connect** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

Please remain on this page for 1-2 minutes until the model is successfully uploaded. Kindly note that switching to another page tab during this process may result in an unsuccessful upload (our team is actively working on resolving this issue, and it will be fixed soon).

#### Step 3. Observations

Once the model is uploaded successfully, you will be able to see the live feed from the Grove Vision AI V2 camera in the Preview on the left.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a5.png" style={{width:1000, height:'auto'}}/></div>

<br />

We can see that in the Preview Settings on the left hand side, there are two setting options that can be changed to optimise the recognition accuracy of the model.

- **Confidence:** Confidence refers to the level of certainty or probability assigned by a model to its predictions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

:::tip
- **Confidence:** This tells you how sure the computer vision model is about its guess. Think of it like a percentage: higher confidence means the model is more certain.
- **IoU (Intersection over Union):** This measures how much overlap there is between two boxes. Imagine you drew a box around an object in a picture, and the model also drew a box. IoU tells you how well your boxes match up. Higher IoU means the boxes are closer together.
:::

At this point, you have finished uploading the model and observing the results.

## <span id="jump4"> Program on Arduino connecting with Seeed Studio XIAO Board </span>

### <span id="jump5"> Arduino Library Introduction </span>

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AI uses WiseEye2 HX6538 chip, image processing and model inference are processed locally in Grove Vision AI, and then the result is output to XIAO via IIC or UART, so the main purpose of this library is to process the data stream of Grove Vision AI, and it doesn't involve model inference or image processing. So the main purpose of this library is to process the data stream of Grove Vision AI, without involving model inference or image processing.

The Grove Vision AI communicates with the XIAO via the IIC, and the device's IIC address is `0x62`. Image information transfer is via the USB serial port.

#### Function

Before we get started developing a sketch, let's look at the available functions of the library.

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— Initialise Grove Vision AI V2.

  **Input Parameters:**
    - `TwoWire *wire` —— This pointer points to a TwoWire object, typically used to communicate with I2C devices.
    - `uint16_t address` —— This is the address of the I2C device that identifies the particular device connected to the I2C bus.
    - `uint32_t wait_delay` —— The delay (in milliseconds) to wait for a response before sending a command.
    - `uint32_t clock` —— This is the clock rate of the I2C bus (in Hz).

  **Return:** `True` or `False`. Initialisation success is true, initialisation failure is false.


- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— Used to send INVOKE commands to the Grove Vision AI V2 to allow the Grove Vision AI to start calling models, inference and recognition.

  **Input Parameters:** 
    - `int times` —— The number of Invoke.
    - `fileter` —— Means the event reply will only be sent if the last result is different from the previous result (compared by geometry and score).
    - `bool show` —— Means the event reply will only be sent if the last result is different from the previous result (compared by geometry and score).

:::note
For more information about Grove Vision AI's protocol definitions, you can read the [**protocol documentation**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md).
:::

  **Return:** `CMD_OK` or `CMD_ETIMEDOUT`. Returns **CMD_OK** if the model was enabled successfully, otherwise returns **CMD_ETIMEDOUT**.

- `int available()` —— Check how many bytes of data are available to read from the connected device via the IIC.

  **Input Parameters:** None.

  **Return:** The number of data bytes that can be read from the device.

- `int read(char *data, int length)` —— Reads data from the Grove Vision AI via the IIC interface. The purpose of the function is to populate the array pointed to by the provided data pointer with the read data.

  **Input Parameters:** 
    - `char *data` —— An array for storing data.
    - `int length` —— The length of the data to be read.
  
  **Return:** The length of the data to be read.

- `int write(const char *data, int length)` —— Writes data to the specified device via the I2C interface.

  **Input Parameters:**
    - `const char *data` —— The content of the data to be written.
    - `int length` —— The length of the data to be written.

  **Return:** The length of the data to be written.

- `std::vector<boxes_t> &boxes() { return _boxes; }` —— Output the results in the form of a box.

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the centre of the box
    uint16_t y;      // Vertical coordinates of the centre of the box
    uint16_t w;      // Width of the identification box
    uint16_t h;      // Height of the identification box
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— Outputs the results as categories.

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— Outputs the result as a dot.

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the identification point
    uint16_t y;      // Vertical coordinates of identification point
    uint16_t z;      // Relative depth coordinates of the identification point
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} point_t;
```

:::note
The depth coordinate here is relative, it does not mean that Grove Vision AI is depth camera enabled, but rather the algorithm calculates a relative depth coordinate which is valid in some models (e.g., face-3d models).
:::

- `perf_t &perf() { return _perf; }` —— Image processing and inference time.

```cpp
typedef struct
{
    uint16_t prepocess;   // Pre-processing time
    uint16_t inference;   // inference time
    uint16_t postprocess; // Post-processing time
} perf_t;
```

:::note
The outputs do not always always output information that identifies boxes and points, depending on the model.
:::

#### Installation

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### <span id="jump6"> Getting Started with Seeed Studio XIAO </span>


If you want to get a prototype of a sensor with machine vision capabilities, then you may want to consider adding an XIAO. Using XIAO and Grove Vision AI V2, you can use the model you want to use and quickly deploy it in your application area.

<!-- Before that, you still need to follow the [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) steps and content to upload a model you want to use first. -->

#### Preliminary

**Step 1.** Materials Required

In this tutorial, we will use the XIAO ESP32S3 as an example to introduce the use of Arduino programmes. So, we recommend you to prepare the following hardware.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

You then need to connect the XIAO and Grove Vision AI V2 via the row of pins (or use the expansion board and Grove interface).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
Please note the direction of the connection, Grove Vision AI's Type-C connector should be in the same direction as XIAO's Type-C connector.
:::

**Step 2.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br />

**Step 3.** Select your development board model and add it to the Arduino IDE.

:::tip
Below is a list of supported boards for the Grove Vision AI V2 example, you can choose the board you want to use to complete the next example. In this tutorial, XIAO ESP32S3 will be used as an example.
:::

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

- If you want to use **Seeeduino V4.3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino_v4.2/)** to finish adding.

**Step 4.** Install the **ArduinoJSON** library.

Go to the Sketch menu, then select **Include Library > Manage Libraries...**. This will open the Library Manager. In the search bar at the top of the Library Manager, type in **ArduinoJSON**. The search results will list the ArduinoJSON library. There will be an Install button next to the library. Click the Install button. The Arduino IDE will automatically download and install the library into your Arduino development environment.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/20.png" style={{width:1000, height:'auto'}}/></div>

#### Demo 1. Use XIAO to get recognition results

The following procedure is a simple example to help you obtain and parse the recognition information reported by Grove Vision AI V2.

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    if (!AI.invoke())
    {
        Serial.println("invoke success");
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", score=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("Point[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.points()[i].target);
            Serial.print(", score=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
    }
}
```

##### Explanation of procedure

This Arduino sketch utilizes the Seeed_Arduino_SSCMA library to interface with the Grove Vision AI Module V2. In the `setup()` function, the AI module is initialized, and serial communication is started.

The `loop()` function repeatedly calls the `invoke()` method to perform inference using the built-in algorithms of the Grove Vision AI Module V2. Upon a successful inference, the sketch prints out performance metrics to the serial monitor, including preprocessing, inference, and postprocessing times.

The sketch processes and prints out detailed information about the results of the inference, including:

- Bounding boxes (`boxes()`) that identify the locations and dimensions of detected objects in the form of x and y coordinates, width, and height.
- Classifications (`classes()`) that identify the categories of detected objects along with their confidence scores.
- Points (`points()`) that represent specific features or keypoints of detected objects, along with their x and y coordinates and confidence scores.

These results provide insights into the objects detected by the AI module, their positions, sizes, and the confidence level of each detection or classification. The output is printed to the serial monitor for further analysis or debugging.


##### Effect

We are still using the Gesture Detection model. After you have uploaded the application, please open the serial monitor and set the baud rate of the serial monitor to **9600**. Please prepare your "rock-paper-scissors" and point it at the recognition area of the camera, and the serial monitor will output the recognition result.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


#### Demo 2. Send control commands via XIAO

The Grove Vision AI V2 supports communication via the [UART protocol](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md), and by using the built-in protocol, it is possible to operate the Himax WE2 chip of the Grove Vision AI V2. The following sample program shows how to use the XIAO to communicate with the Grove Vision AI V2 over the serial port.

```cpp
#include <Arduino.h>
#include <Wire.h>

#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    // put your setup code here, to run once:
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
        delay(1000);

    Serial.println("Proxy start");
}

char buf[512];
void loop()
{
    int s_len = Serial.available();
    if (s_len)
    {
        int len = Serial.readBytes((char *)buf, s_len);
        AI.write(buf, len);
    }
    int t_len = AI.available();
    if (t_len)
    {
        if (t_len > 512)
        {
            t_len = 512;
        }

        AI.read(buf, t_len);
        Serial.write(buf, t_len);
    }
}
```


##### Explanation of procedure

This Arduino sketch establishes a communication interface between the serial console and the Grove Vision AI V2 module, utilizing the Seeed Studio Machine Learning Framework SSCMA. The sketch is designed to pass data to and from the Grove Vision AI V2 module via serial commands.

Here's the modified description of the sketch:

In the `setup()` function:
- The I2C communication protocol is initialized with `Wire.begin()`, allowing for communication with the Grove Vision AI V2 module.
- The serial communication is set up at a baud rate of 115200.
- The sketch waits for the serial connection to be active before it outputs "Proxy start" to the serial monitor, indicating that the proxy communication channel is ready.

In the `loop()` function:
- The sketch checks for incoming serial data using `Serial.available()`. If there is data, it reads it into a buffer named `buf`.
- The data collected in the buffer is then sent to the Grove Vision AI V2 module using the `AI.write()` method.
- Next, the sketch checks if the Grove Vision AI V2 module has any data to send back using `AI.available()`.
- If the Grove Vision AI V2 module has sent data, the sketch reads this data into the buffer `buf` with `AI.read()`, ensuring the data does not exceed the buffer size of 512 bytes.
- Finally, the received data from the Grove Vision AI V2 module is transmitted back to the serial console using `Serial.write()`, completing the two-way communication between the serial interface and the vision AI module.

This setup allows for interactive communication with the Grove Vision AI V2 module, enabling users to send instructions to and receive data from the module over a serial connection.


## Resources
- [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)
- [SenseCraft AI Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process)
- [Arduino Library for XIAO](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)
- [Restore Grove Vision AI V2 to factory firmware](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/Vision_AI_Module_V2_factory_flasher.zip)

## Troubleshooting

### Q1: Why can't I see the recognised result on the port after I successfully upload the code of Demo1 using XIAO ESP32C3?

If you are using Arduino IDE version 1.xx, please re-open the serial monitor after pressing Reset on C3 to see the result. If you are using Arduino version 2.xx, the message will be refreshed in the serial monitor after pressing the Reset button.

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
