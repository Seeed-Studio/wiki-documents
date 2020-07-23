# Wio Terminal Edge Impulse Getting Started

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

[**Edge Impulse**](https://www.edgeimpulse.com/) enables developers to create the next generation of intelligent device solutions with embedded Machine Learning. Machine Learning at the very edge will enable valuable use of the 99% of sensor data that is discarded today due to cost, bandwidth or power constraints.

Now, [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) is officially supported by the Edge Impulse. Let's see how to get Wio Terminal started with the Machine learning at the very edge!

## Installing dependencies

To set Wio Terminal up in Edge Impulse, you will need to install the following software:

1. [Node.js v12](https://nodejs.org/en/) or higher.
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. The Edge Impulse CLI and a serial monitor. Install by opening command prompt or terminal and run:

```sh
npm install -g edge-impulse-cli @serialport/terminal
```

!!!Note
        Problems with installing the CLI? Please check [Installation and troubleshooting](https://docs.edgeimpulse.com/docs/cli-installation) for more reference.

## Connecting to Edge Impulse

With all the software in place it's time to connect the development board to Edge Impulse.

### 1. Connect the development board to your computer

Connect Wio Terminal to your computer. Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see [here](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

<div align=center><img width=500 src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif"/></div>

An external drive named `Arduino` should appear in your PC. Drag the the downloaded [**Edge Impulse uf2 firmware files**](http://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/res/EdgeImpulse.uf2) to the `Arduino` drive. Now, Edge Impulse is loaded on Seeeduino Wio Terminal!

!!!Note
        Here is the [Wio Terminal Edge Impulse source code](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse), you can also build the firmware from here.

### 2. Setting Keys

From a command prompt or terminal run:

```sh
$ edge-impulse-daemon
```

**NOTE:** When connecting to a new device, run `edge-impulse-daemon --clean` to remove previous cached.

### 3. Verifying that the device is connected

That's all! Your device is now connected to Edge Impulse. To verify this, [go to your Edge Impulse project](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1), and click Devices. The device will be listed here.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png"/></div>

## Next steps: building a machine learning model

With everything set up you can now build your first machine learning model with these tutorials:

- [Building a continuous motion recognition system](http://wiki.seeedstudio.com/Wio-Terminal-Continuous-Motion-Recognition).
- [Distinguishing Alcohol using Wio Terminal with Edge Impulse](http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol)

Looking to connect different sensors? The [Data forwarder](https://docs.edgeimpulse.com/docs/cli-data-forwarder) lets you easily send data from any sensor into Edge Impulse.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
