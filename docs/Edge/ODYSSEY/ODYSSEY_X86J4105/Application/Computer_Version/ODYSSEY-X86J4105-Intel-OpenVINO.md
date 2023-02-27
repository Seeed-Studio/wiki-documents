---
description: ODYSSEY - X86J4105
title: Intel OpenVINO Toolkit
tags:
  - ODYSSEY
keywords:
  - ODYSSEY

image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-X86J4105-Intel-OpenVINO
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Installing Intel® Distribution of OpenVINO™ toolkit for ODYSSEY - X86J4105

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

The **Intel® Distribution of OpenVINO™ toolkit** quickly deploys applications and solutions that emulate human vision. Based on Convolutional Neural Networks (CNN), the toolkit extends computer vision (CV) workloads across Intel® hardware, maximizing performance. The Intel® Distribution of OpenVINO™ toolkit includes the Intel® Deep Learning Deployment Toolkit (Intel® DLDT).

For more information, please visit [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/).

**Note:** According to the official document, OpenVINO™ toolkit can be installed on different Operating systems. **For this tutorial, Ubuntu 18.04.4 LTS is installed on ODYSSEY - X86J4105 and will install OpenVINO™ toolkit on Linux.** It is strongly recommended to install this version of Ubuntu to avoid environment error that may occur.

This tutorial is modified from the official [Install Intel® Distribution of OpenVINO™ toolkit for Linux*](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html).

## Hardware Requirements

- A Working Computer

- A Monitor

- Keyboard and Mouse

- Internet Connection

## Install the Ubuntu OS

If you have not installed Ubuntu yet, please feel free to follow [this tutorial](https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-OS/) to install Ubuntu into your ODYSSEY - X86J4105.

## Install the Intel® Distribution of OpenVINO™ Toolkit

Download the Intel® Distribution of OpenVINO™ toolkit package file from Intel® [Distribution of OpenVINO™ toolkit for Linux*](https://software.intel.com/en-us/openvino-toolkit/choose-download?elq_cid=6204639&erpm_id=9318801). Select the Intel® Distribution of OpenVINO™ toolkit for Linux package from the dropdown menu.

1. Open the Terminal in Ubuntu.

2. Change the directories to where you downloaded the Intel Distribution of OpenVINO toolkit for Linux* package file. if downloaded to the files to the current user's `Downloads` directory:

```sh
cd ~/Download/
```

By default, the file is saved as `l_openvino_toolkit_p_<version>.tgz`

3. Unpack the `.tgz` file:

```sh
tar -xvzf l_openvino_toolkit_p_<version>.tgz
```

The files are unpacked to the `l_openvino_toolkit_p_<version>` folder.

4. Go to the `l_openvino_toolkit_p_<version>` directory:

```sh
cd l_openvino_toolkit_p_<version>
```

5. Install the Intel® Distribution of OpenVINO™ Toolkit by running the following script:

```sh
sudo ./install_GUI.sh
```

**Note:** This the the GUI installation Wizard, there is also the command-line instructions:`sudo ./install.sh`, but it is strongly recommended to use the GUI installation to avoid errors.

6. Follow the instructions on the screen.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-01.png)

7. If you select the default options, the Installation summary GUI screen will look like this:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-02.png)

- **Note:**  Can also customize to change the installation directory or components you want to install: 

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-03.png)

When installed as **root** the default installation directory for the Intel Distribution of OpenVINO is `/opt/intel/openvino/`.

8. A complete screen will appear when the core components have been installed:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-04.png)

## Install External Software Dependencies

These dependencies are reuqired for:

- Intel-optimized build of OpenCV library

- Deep Learning Inference Engine

- Deep Learning Model Optimizer tools

1. Change to the `install_dependencies` directory:

```sh
cd /opt/intel/openvino/install_dependencies
```

2. Run the script to download and install the external software dependencies:

```sh
sudo -E ./install_openvino_dependencies.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/dependent-complete.png)

This is dependent on the internet speed, please be patient. The external software dependencies are installed!

## Set the Environment Variables

You must update several environment variables before you can compile and run OpenVINO™ applications. Run the following script to temporarily set your environment variables:

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

**Note:** The OpenVINO environment variables are removed when you close the shell. As an option, you can permanently set the environment variables as follows:

1. Open and `.bashrc` file in <user_directory>.

```sh
nano /home/USERNAME/.bashrc
```

Replace you user name to `USERNAME`.

2. Add this line to the end of the file:

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/source-environment.png)

3. Use **Ctrl + O** to save and **Ctrl + X** to exit.

4. To test your change, open a new terminal. You should see `[setupvars.sh] OpenVINO environment initialized` at the top of the terminal.

## Configure the Model Optimizer

The Model Optimizer is a Python*-based command line tool for importing trained models from popular deep learning frameworks such as Caffe*, TensorFlow*, Apache MXNet*, ONNX* and Kaldi*.

The Model Optimizer is a key component of the Intel Distribution of OpenVINO toolkit. You cannot perform inference on your trained model without running the model through the Model Optimizer. When you run a pre-trained model through the Model Optimizer, your output is an Intermediate Representation (IR) of the network. The Intermediate Representation is a pair of files that describe the whole model:

- `.xml`: Describes the network topology

- `.bin`: Contains the weights and biases binary data

For more information about the Model Optimizer, refer to the [Model Optimizer Developer Guide](https://docs.openvinotoolkit.org/latest/_docs_MO_DG_Deep_Learning_Model_Optimizer_DevGuide.html).

### Model Optimizer Configuration Steps

You can choose to either configure all supported frameworks at once **OR** configure one framework at a time. Choose the option that best suits your needs. If you see error messages, make sure you installed all dependencies.

**OPTION 1: Configure all supported frameworks at the same time**

1. Go to the Model Optimizer prerequisites directory:

```sh
cd /opt/intel/openvino/deployment_tools/model_optimizer/install_prerequisites
```

2. Run the script to configure the Model Optimizer for Caffe, TensorFlow, MXNet, Kaldi*, and ONNX:

```sh
sudo ./install_prerequisites.sh
```

**OPTION 2: Configure each framework separately**

Run the script for your model framework. You can run more than one script:

- For **Caffe**:

```
sudo ./install_prerequisites_caffe.sh
```

- For **TensorFlow**:

```
sudo ./install_prerequisites_tf.sh
```

- For **MXNet**:

```
sudo ./install_prerequisites_mxnet.sh
```

- For **ONNX**:

```
sudo ./install_prerequisites_onnx.sh
```

- For **Kaldi**:

```
sudo ./install_prerequisites_kaldi.sh
```

Now you are ready to compile and run the samples!

## Run the Verification Script to Verify Installation

**To verify the installation and compile two samples on the ODYSSEY - X86J4105's CPU:**

1. Go to the Inference Engine demo directory:

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. Run the **Image Classification verification script:**

```sh
./demo_squeezenet_download_convert_run.sh
```

This verification script downloads a SqueezeNet model, uses the Model Optimizer to convert the model to the .bin and .xml Intermediate Representation (IR) files. The Inference Engine requires this model conversion so it can use the IR as input and achieve optimum performance on Intel hardware.

This verification script builds the [Image Classification Sample Async application](https://docs.openvinotoolkit.org/latest/_inference_engine_samples_classification_sample_async_README.html) and run it with the `car.png` image located in the demo directory. When the verification script completes, you will have the label and confidence for the top-10 categories:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-1.png)

Run the **Inference Pipeline verification script:**

```sh
./demo_security_barrier_camera.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

This script downloads three pre-trained model IRs, builds the [Security Barrier Camera Demo](https://docs.openvinotoolkit.org/latest/_demos_security_barrier_camera_demo_README.html) application, and runs it with the downloaded models and the car_1.bmp image from the demo directory to show an inference pipeline. The verification script uses vehicle recognition in which vehicle attributes build on each other to narrow in on a specific attribute.

To learn about the verification scripts, see the **README.txt** file in `/opt/intel/openvino/deployment_tools/demo`.

For a description of the Intel Distribution of OpenVINO™ pre-trained object detection and object recognition models, see [Overview of OpenVINO™ Toolkit Pre-Trained Models](https://docs.openvinotoolkit.org/latest/_models_intel_index.html).

You have completed all required installation, configuration and build steps in this guide to use your CPU to work with your trained models, feel free to explore the powerful Intel OpenVINO tool to train your models with ODYSSEY - X86J4105!

## Resources

- [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/)

- [Install Intel® Distribution of OpenVINO™ toolkit for Linux*](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
