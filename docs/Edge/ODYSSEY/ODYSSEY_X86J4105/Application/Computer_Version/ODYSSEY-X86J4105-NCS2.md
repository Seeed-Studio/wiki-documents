---
description: ODYSSEY - X86J41x5
title: Intel Neural Compute Stick 2
tags:
  - ODYSSEY
keywords:
  - ODYSSEY
image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-X86J4105-NCS2
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Get Started with Intel® Neural Compute Stick 2 with ODYSSEY - X86J41x5

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

The **Intel Neural Compute Stick 2 (NCS2)** is a USB stick which offers you access to neural network functionality, without the need for large, expensive hardware. It contains a **Intel Movidius Myriad X Vision Processing Unit (VPU)** to enable you to incorporate computer vision and artificial intelligence (AI) to your IoT and edge devices.

## Set up Software Environment

To use the Intel NCS2, please first complete the [Installing Intel® Distribution of OpenVINO™ toolkit for ODYSSEY - X86J41x5](/ODYSSEY-X86J4105-NCS2) and configure all the dependent software environment.
<!-- 上述链接有误 -->

If you have already completed the tutorial, please follow the below instructions.

## Configure the Intel® Neural Compute Stick 2

1. Add the current Linux user to the users group:

```sh
sudo usermod -a -G users "$(whoami)"
```

Log out and log in for it to take effect.

1. To perform inference on **Intel® Neural Compute Stick 2**, install the USB rules as follows:

```sh
sudo cp /opt/intel/openvino/inference_engine/external/97-myriad-usbboot.rules /etc/udev/rules.d/
```

```sh
sudo udevadm control --reload-rules
```

```sh
sudo udevadm trigger
```

```sh
sudo ldconfig
```

**Note:** Reboot the device for this to take effect.

## Run the Samples Using NCS2's VPU

1. Go to the Inference Engine demo directory:

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. Run the **Image Classification verification script with NSC2:**

```sh
./demo_squeezenet_download_convert_run.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-1.png)

3. Run the **Inference Pipeline verification script with NSC2:**

```sh
./demo_security_barrier_camera.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-2.png)

Look for results like this which indicate successful installation!

## Next Step: The [Ncappzoo](http://www.github.com/movidius/ncappzoo)

The [ncappzoo](http://www.github.com/movidius/ncappzoo) at [http://www.github.com/movidius/ncappzoo](http://www.github.com/movidius/ncappzoo) is an open source github repository that contains numerous examples with a simple layout and easy to use Makefiles.  This repository is tailored for the Intel® NCS 2 developer community and helps developers get started quickly by focusing on application code that use pretrained neural networks.

1. Clone the github repo to the local files with rhe following command:

```sh
git clone https://github.com/movidius/ncappzoo.git
```

2. Run this command inside of any **app/network** folder to check your system software dependencies for that particular sample:

```sh
make install_reqs
```

3. Run the sample:

```sh
make run
```

## Example run

There are many examples that can be run, here used the `benchmark` demo for example:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-1.png)

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-2.png)

### Running the `birds` example

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

## Resources

- [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/)

- [Ncappzoo](http://www.github.com/movidius/ncappzoo)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
