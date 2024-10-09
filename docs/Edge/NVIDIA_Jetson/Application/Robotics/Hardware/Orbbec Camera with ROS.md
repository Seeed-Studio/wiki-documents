# Depth camera sensor

### Introduction

This chapter briefly introduces the depth camera on the ROS robot and teaches you how to get started quickly.

Orbbec Gemini 2 is a binocular structured light 3D camera equipped with Orbbec's new MX6600 depth engine chip. It features three depth operating modes, providing high-quality depth data for a variety of application scenarios. With a wide field of view, it offers a depth measurement range from 0.15 to 10 meters, and integrates auxiliary point ranging functionality, enabling zero-blind-spot depth measurement within a maximum range of 10 meters.
![Imgur](https://i.imgur.com/qtx6uda.jpg)

---

### Depth camera usage


#### Get source code

```bash
git clone https://github.com/orbbec/OrbbecSDK.git
```

Alternatively, you can install via binary packages, please refer to [installation guidance](doc/tutorial/English/Installation_guidance.md) for more information.

### Environment setup

* Linux:

If you installed via a debian package, you can skip the installation of the udev rules file. If not, please install it using the following commands:

```bash
cd OrbbecSDK/misc/scripts
sudo chmod +x ./install_udev_rules.sh
sudo ./install_udev_rules.sh
sudo udevadm control --reload && sudo udevadm trigger
```


## Examples

The sample code is located in the `./examples` directory and can be built using CMake.

### Build

```bash
cd OrbbecSDK && mkdir build && cd build && cmake .. && cmake --build . --config Release
```

### Run example

To connect your Orbbec camera to your PC, run the following steps:

```bash
cd OrbbecSDK/build/bin # build output dir
./OBMultiStream  # OBMultiStream.exe on Windows
```

The following image is the result of running MultiStream on the Gemini2 device. Other Devices run result maybe different.

![Multistream](https://i.imgur.com/3bBEggL.png)



