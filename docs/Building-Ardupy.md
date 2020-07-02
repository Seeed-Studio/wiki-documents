# How to Build ArduPy Firmware From Source Code

Seeed's [ArduPy](https://github.com/Seeed-Studio/ArduPy) is a combination of Arduino and MicroPython. MicroPython uses the universal Arduino API to control the hardware so that it can be compatible with new platforms quickly. With the help of the aip package manager we provided, you can transform your favorite Arduino library into a MicroPython library. Through ArduPy, you can use Python to verify your ideas, learn python programming as well as micro-controller programming in a more efficient way.

However, you might want to build your own version of ArduPy. You might want to add you own hardware. The guide explains how to build ArduPy firmware yourself.

<div align=center><img src="https://files.seeedstudio.com/wiki/Building-Ardupy/make.gif"/></div>

For now, ArduPy supports [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) and [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html), will be able to support more SAMD boards in the future!

## Set-up

ArduPy firmware should be built on **UNIX based OS PC so here will use MacOS to demonstrate**. If you are a Windows user, you can use [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) which allows you to run a Linux distribution with an emulation layer substituting for the Linux kernel.

- You will also need to follow the [**Wio Terminal Getting Started**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) first to install Seeed's SAMD Boards into Arduino. This is required as we are using the ArduinoCore and GCC.

### Linux Set-up

- Install Build tools

Run the followings to install the `CMake`:

```sh
sudo apt update
sudo apt-get install cmake
```

**Note:** This will install `Make` and `CMake` into your Linux OS.

### MacOS Set-up

- Install `brew` following the [official guide](https://brew.sh/).

- Use `brew` to install build tools:

```sh
brew update
brew install cmake
```

## Building ArduPy Firmware

### STEP1 - Download ArduPy's Source Code

Run the following to clone the ArduPy source code and submodules:

```sh
git clone --recursive https://github.com/Seeed-Studio/ArduPy
```

!!!Note
        There are few sub modules that need to be downloaded and might take a while.

### STEP2 - Before Build

In Terminal, navigate to the ArduPy folder path that you just downloaded:

```sh
cd ArduPy/ports/samd
```

Make a new folder named build under this location and navigate into it:

```sh
mkdir build && cd build
```

### STEP 3 - Creating Makefile

Make sure that you have installed Seeed's SAMD board in Arduino first before the following steps.

- **For Linux OS:**

```sh
cmake ../ -DARDUINO_CORE_PATH=$HOME/.arduino15/packages/Seeeduino/hardware/samd/$COREVER -DTOOLCHAIN=$HOME/.arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin -DBOARD=wio_terminal -DARDUINO_VERIANT=wio_terminal
```

If building for Seeeduino XIAO, you can replace `-DARDUINO_VERIANT=wio_terminal` with `-DARDUINO_VERIANT=xiao`.

!!!Note
        `-DARDUINO_CORE_PATH` is the Arduino Core path and `-DTOOLCHAIN` is the GCC path.

- **For MacOS:**

Replace `{user-name}` with your user name for MacOS.

```sh
cmake ../ -DARDUINO_CORE_PATH=/Users/{user-name}/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.6 -DTOOLCHAIN=/Users/{user-name}/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin -DBOARD=wio_terminal -DARDUINO_VERIANT=wio_terminal
```
And you should see something like this:

<div align=center><img src="https://files.seeedstudio.com/wiki/Building-Ardupy/cmake.png"/></div>

### STEP 4 - Build the ArduPy Firmware

Under the same location (`build/`) run:

```sh
make
```

This will take a while to compile and generate the ArduPy firmware.

<div align=center><img src="https://files.seeedstudio.com/wiki/Building-Ardupy/make.png"/></div>

Now you can see that `Ardupy.bin` is created under the same location!

<div align=center><img src="https://files.seeedstudio.com/wiki/Building-Ardupy/bin.png"/></div>

## Flash the Firmware Hardware

You can use [`aip`](https://wiki.seeedstudio.com/ArduPy/#ardupy-aip-cli) to flash the self-built ArduPy firmware to hardware using the following command:

```sh
aip flash {path}
```

For example:

<div align=center><img src="https://files.seeedstudio.com/wiki/Building-Ardupy/aip.png"/></div>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
