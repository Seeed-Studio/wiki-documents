# Overview

This repo introduces how to install the official [Arduino Tensorflow Lite library](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/hello_world) into your Wio Terminal, allowing you to test out some Machine Learning models using Wio Terminal.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg"/></div>

For more information, please visit [TensorFlow Lite For Microcontrollers](https://www.tensorflow.org/lite/microcontrollers).

## Install the Arduino TensorFlow Lite Library

1. Navigate to `Sketch` -> `Include Library` -> `Manager Libraries...` and a Library Manager will appear.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221164034.jpg)

2. In the Library Manager, Search the keywords **Arduino TensorFlow Lite** and the library will appear. Under **Select Version**, select the one that is **NOT** precompiled and click Install.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221164739.jpg)

## Library Configurations

Now, we need to make a small adjustment to the library files in order for it to compile with Wio Terminal.

1. Navigate to the library file location. It should be something like `Documents/libraries/Arduino_TensorFlowLite` 

2. Once inside the **Arduino_TensorFlowLite** file, navigate `src` -> `third_party` -> `kissfft` and open the **kiss_fft.h** file.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221170104.jpg)

3. Use a code editor to open and find the line where it includes the `<sys/types.h>` header file, which look like this:

```cpp
#ifdef FIXED_POINT
#include <sys/types.h>
# if (FIXED_POINT == 32)
```

And change it to this:

```cpp
#ifdef FIXED_POINT
#include <sys/types.h>
#if  __GNUC__ == 4
#include <stdint.h>
#endif
# if (FIXED_POINT == 32)
```

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221171349.jpg"/></div>

Save the changes.

## Running the Arduino TensorFlow Lite Hello World Example

The example is designed to demonstrate the absolute basics of using TensorFlow Lite for Microcontrollers. It includes the full end-to-end workflow of training a model, converting it for use with TensorFlow Lite, and running inference on a microcontroller.

The sample is built around a model trained to replicate a sine function. It contains implementations for several platforms. In each case, the model is used to generate a pattern of data that is used to either blink LEDs or control an animation.

1. Go to `Files` -> `Examples` -> `Arduino_TensorFlowLite` -> `hello_world`. The example sketch should appear.

2. If compiles now, there will be an **compile error** because the `min` and `max` functions defined for the board are also defined in Arduino TensorFlow Library. So to solve this, use `#undef max` and `#undef min` right before the including library to avoid error, just like this:

```cpp
#undef max
#undef min
#include <TensorFlowLite.h>
```

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221173149.jpg"/></div>

3. Now, click on **Upload** and upload your first TensorFlow Lite example to Wio Terminal!

4. Open the Serial Plotter, and you should see a Sine waveform. Further, check the built in LED on the back, it should be fading in and out according to the Sine wave you just generated from TensorFlow Lite!

**Note:** if you want to see the full Sine wave on Serial Plotter(i.e. LED flickering faster), you can click on the **arduino_constants.cpp** file on the top, and change the `kInferencesPerCycle` to 100 as follow:

```cpp
const int kInferencesPerCycle = 100;
```
