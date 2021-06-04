We are going to train and deploy a simple neural network for classifying paper-rock gestures with just a single light sensor.
Let's see how to get Wio RP2040 mini Dev Board started with Machine learning at the very edge!

- Hardware
- Software
- Start with Arduino and Edge Impulse
- Deploy model to Wio RP2040 mini Dev Board
## Hardware Overview
​

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/wio_rp2040.jpg)![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/light_sensor.jpg)

1. [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)
1. [Grove - Light Sensor:  101020132  ](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)

We need to preprocess the light sensor with a black sticker to make sure we just get the light from above the light sensor.
![sticker.jpg](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/sticker.jpg)
Connect Light Sensor with Wio RP2040 mini Dev Board:
![connect.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/connect.jpg)




## Software Overview

1. Arduino
1. [Edge Impulse](https://www.edgeimpulse.com/)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/edge_impulse.jpg)
## How to Get Started With Arduino
### Install the Arduino IDE

- Arduino IDE is an integrated development environment for Arduino, which is used for single-chip microcomputer software programming, downloading, testing and so on.
- Download and Install [Arduino IDE](https://www.arduino.cc/en/Main/Software) for your desired operating system here.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/download.jpg#clientId=u81f94eaa-8d7a-4&from=paste&height=25&id=u09b2e849&margin=%5Bobject%20Object%5D&originHeight=49&originWidth=700&originalType=url&status=done&style=none&taskId=u840c42a3-c351-4623-93e0-c7b0d8981d8&width=350)
### Install the USB driver

- Arduino connects to the PC via a USB cable. The USB driver depends on the type of USB chip you're using on your Arduino. Note: USB chips are usually printed on the back of the development board.
- Download the [CP2102 USB Driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). Note: Download according to your OS.
- After the driver installation is completed, connect Arduino to the USB port of PC with a USB cable.
   - **For Windows users:** You can see it in **My Computer -> Properties -> Hardware -> Device Management**. A COM will appear.
   - **For Mac OS users:** You can navigate to  on the top left corner, and choose About this Mac -> System Report... -> USB. A CP2102 USB Driver should appear.
- If the driver is not installed, or if the driver is installed incorrectly (not matching the chip model), it will appear as an "unknown device" in the device manager. At this point, the driver should be reinstalled.
### Start the Arduino IDE

1. Open the **Arduino IDE** on your PC. 
1. Click on **Tools -> Board-> Boards Manager**，then search "Mbed OS Boards",install "Arduino Mbed OS Boards".

![search_board.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/search_board.jpg)

3. Click on **Tools -> Board->Arduino Mbed OS Boards -> Raspberry Pi Pico** to select the correct Development Board Model. Select **Raspberry Pi Pico** as Board.

![choose_board.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/choose_board.jpg)
​


3. Keep pressing the button "**BOOT**"  while connecting the board to the PC via a USB cable, until an external drive named "RPI" appears in your PC. 

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/boot.jpg)

4. Upload any sketch. If upload done, we can see the port named "Raspberry Pi Pico". 

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/port.jpg)

5. Click **Tools -> Port** to select the correct Port. In this case, COM9 is selected.



## How to Get Started With Edge Impulse


This Edge Impulse CLI is used to control local devices, act as a proxy to synchronize data for devices that don't have an internet connection, and upload and convert local files  
To set Wio RP2040 mini Dev Board up in Edge Impulse, you will need to install the following software:

1. Visual Studio 2019, and select Desktop development with C++

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/vs2019.png)![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/dektop_C.jpg)

2. Install Miniconda (Python virtual environment manager), which you can download from the official website.  
2. [Node.js v12](https://nodejs.org/en/) or higher.
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
2. The Edge Impulse CLI and a serial monitor. Install by opening a command prompt or terminal and run:
```
npm install -g edge-impulse-cli  
```
**Note:**
Problems with installing the CLI? Please check [Installation and troubleshooting](https://docs.edgeimpulse.com/docs/cli-installation) for more reference.
## Start with Arduino and Edge Impulse  
With all the software in place, it's time to connect the development board to Arduino and Edge Impulse.
### 1. Connect the development board to your computer
Connect Wio RP2040 mini Dev Board to your computer. 
### 2. Create a new project on Edge Impulse
I have created a new project named "paper_rock" on **Edge Impulse**.
### 3.Run the following codes on Arduino 
The codes on **Arduino** aim to set our ideal frequency (40Hz) of data collection.
```
#define INTERVAL_MS         25

void setup() {
    Serial.begin(115200);
}

void loop() {
    static unsigned long last_interval_ms = 0;
    float light;

    if (millis() > last_interval_ms + INTERVAL_MS) {
        last_interval_ms = millis();

        light=analogRead(A0);
        Serial.println(light);
    }
}
```
### 4.Setting Keys on command prompt
From a **command prompt or terminal** run:
```
 edge-impulse-data-forwarder
```
**NOTE:** When connecting to a new device, run edge-impulse-daemon --clean to remove previous cached.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/command.jpg)
### 5. Verifying that the device is connected
You can see your device appear in the Data acquisition tab of **Edge Impulse.**
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/data_collection.jpg)

For your first project, let's quickly train and deploy a simple neural network for classifying paper-rock gestures with just a single light sensor. 
## Training data acquisition
Go to the Data acquisition tab. Set sample length to about 10000 ms or 10 seconds and create 10 samples for each gesture, waving the hand in the vicinity of Wio RP2040 mini Dev Board. We have three labels here: "rock", "paper", "background";

rock:
![rock.gif](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/rock.gif)
paper:
![paper.gif](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/paper.gif)


background: just let it idle on the table.
​

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/datasize.jpg)
​

​

Record around 100s of data per class. This is a small dataset, but we also have a tiny neural network, so underfitting is more likely than overfitting in this particular case.
​

## Building a machine learning model
After you collected the samples it is time to design an "Impulse". The impulse here is the word Edge Impulse used to denote data processing – training pipeline. Press on Create Impulse and set Window length to 1000 ms. and Window length increase to 50 ms.
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/impulse.jpg)
These settings mean that each time an inference is performed we're going to take sensor measurements for 1000 ms. - how many measurements your device is going to take depends on the frequency. During data collection, you set the sampling frequency to 40 Hz, or 40 times per 1 second. So, to sum it up, your device is going to gather 40 data samples within 1000 ms. time window and then take these values, preprocess them and feed them to the neural network to get inference result. Of course, we use the same window size during the training. 
​

We'll use the Raw Data block. Add this block and then add Neural Network (Keras) as a learning block, and click on Save Impulse. Go to the next tab, which has the name of the processing block you have chosen - Raw data. There enter 0.001 in scaling and leave other parameters the same. Press on Save parameters and then Generate features. Feature visualization is a particularly useful tool in the Edge Impulse web interface, as it allows users to get graphical insights into how the data looks after prepossessing. For example, this is data after Raw data processing block:
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/feature.jpg)
Have a look at a sample project where we used Raw data and a Convolutional 1D network, a more specialized type of network, compared to fully connected. 
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/network.jpg)We were able to achieve 97.3% accuracy!
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/accuracy.jpg)
Of course, you can either change the model architecture or training settings to get your own model .
After the training, you can test the model using the Live classification tab, which will gather a data sample from the device and classify it with the model hosted on Edge Impulse. We test with three different gestures and see the accuracy is satisfactory as far as proof of concept goes.
​

## Deploying to Wio RP2040 mini Dev Board
The next step is deployment on the device. After clicking on the Deployment tab, choose Arduino library and download it.
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/deploy.jpg)

Extract the archive and place it in your Arduino libraries folder. Open Arduino IDE and choose static buffer sketch (located in File -> Examples -> name of your project -> static_buffer), which already has all the boilerplate code for classification with your model in place. Neat!
​

There is a little change with the original static_buffer, so you can replace it with the following complete code, remember to include your own model name.


### Complete Code
```python
#include <paper_rock_inferencing.h>  //replace with your own model name

uint8_t axis_num = 1;

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal

/**
* @brief      Arduino setup function
*/
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    Serial.println("Edge Impulse Inferencing Demo");

    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != axis_num) {
        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to (%d) (the (%d) sensor axes)\n", axis_num, axis_num);
        return;
    }
}

/**
* @brief      Printf function uses vsnprintf and output using Arduino Serial
*
* @param[in]  format     Variable argument list
*/
void ei_printf(const char *format, ...) {
   static char print_buf[1024] = { 0 };

   va_list args;
   va_start(args, format);
   int r = vsnprintf(print_buf, sizeof(print_buf), format, args);
   va_end(args);

   if (r > 0) {
       Serial.write(print_buf);
   }
}

/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
void loop()
{

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we will read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = {0};

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += axis_num) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        buffer[ix + 0] = analogRead(A0);

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
Now, you can try your model.
You probably knew it is possible to recognize gestures with a camera sensor, even if an image is down-scaled a lot. But recognizing gestures with just 1 pixel is an entirely different level!
![show2.gif](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Get-Wio-RP2040-mini-Dev-Board-started-with-Machine-learning-using-Arduino/newshow.gif)
## Reference

- [Edge Impulse Public project](https://studio.edgeimpulse.com/public/34448/latest)


 
​

