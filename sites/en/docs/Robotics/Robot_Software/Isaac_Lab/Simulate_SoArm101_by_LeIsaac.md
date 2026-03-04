---
description: This tutorial demonstrates how to teleoperate and train the SOArm101 robotic arm in Isaac Lab using LeIsaac, including data collection, model fine-tuning with NVIDIA Isaac GR00T, and deployment.
title: Lightwheel LeIsaac
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/simulate_soarm101_by_leisaac.webp
slug: /simulate_soarm101_by_leisaac
last_update:
  date: 8/1/2025
  author: Youjiang
---

# Get started with Lightwheel LeIsaac — Open-source workflow combining Hugging Face LeRobot x GR00T N1.5 x Isaac Sim

## Interduction

This wiki will follow the document of leisaac, show how to teleoperate SoArm101 robot arm in IsaacLab by leisaac.  Additionally, we will demonstrate the deployment of the fine-tuned Nvidia Isaac GR00T N1.5 model within the Isaac Lab simulation environment, using data collected from Isaac Lab. Primary projects employed in this wiki:

- [LeIsaac](https://github.com/LightwheelAI/leisaac) provides teleoperation functionality in IsaacLab using the SO101Leader (LeRobot), including data collection, data conversion, and subsequent policy training.
- [NVIDIA Isaac™ Lab](https://developer.nvidia.com/isaac/lab) is an open-source, unified framework for robot learning designed to help train robot policies.
- [SO-ARM101](https://github.com/TheRobotStudio/SO-ARM100) is a low-cost, open-source 3D-printable robotic arm kit. Designed to work seamlessly with the open‑source LeRobot library.
- [NVIDIA Isaac GR00T N1.5](https://github.com/NVIDIA/Isaac-GR00T) is an open foundation model for generalized humanoid robot reasoning and skills.

## Requierment

- Ubuntu PC
- SoArm101 Leader Arm

:::info
The computer used in this wiki has an NVIDIA RTX 3080 GPU and operates on Ubuntu 22.04 LTS.
:::

## Simulation Environment Setup

Use the following command in the terminal to install the Isaac Lab runtime environment:

```bash
# Create and activate environment
conda create -n leisaac python=3.10
conda activate leisaac

# Install cuda-toolkit
conda install -c "nvidia/label/cuda-11.8.0" cuda-toolkit

# Install PyTorch
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118

# Install IsaacSim
pip install --upgrade pip
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# Install IsaacLab
git clone https://github.com/isaac-sim/IsaacLab.git
sudo apt install cmake build-essential

cd IsaacLab
# fix isaaclab version for isaacsim4.5
git checkout v2.1.0
./isaaclab.sh --install
```

:::note
If your computer does not have conda installed, please refer to [this guide](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html) for installation.
:::

:::info
If you are using 50 series GPU, we recommend to use isaacsim5.0 and isaaclab with feature/isaacsim_5_0 branch.
:::

## Install LeIsaac

Clone LeIsaac repository and install it as dependency.

```bash
cd ..
git clone https://github.com/LightwheelAI/leisaac.git
cd leisaac
pip install -e source/leisaac
pip install pynput pyserial deepdiff feetech-servo-sdk
```

:::note
Please ensure installation within the `leisaac` conda virtual environment.
:::

## Asset Preparation

LeIsaac provide an example USD asset—a kitchen scene. We can download related scene [here](https://github.com/LightwheelAI/leisaac/releases/tag/v0.1.0) and extract it into the assets directory. The directory structure should look like this:

```txt
<assets>
├── robots/
│   └── so101_follower.usd
└── scenes/
    └── kitchen_with_orange/
        ├── scene.usd
        ├── assets
        └── objects/
            ├── Orange001
            ├── Orange002
            ├── Orange003
            └── Plate
```

## Collect Dataset

Connect the SO-ARM101 leader to an Ubuntu computer via USB cable, then use commands to grant serial port permissions.

```bash
ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM0
```

If everything works properly, you should see similar log output.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/connect_arm.png" />
</div>

Run teleoperation tasks with the following script to collect dataset:

```bash
python scripts/environments/teleoperation/teleop_se3_agent.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --teleop_device=so101leader \
    --port=/dev/ttyACM0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --record \
    --dataset_file=./datasets/dataset.hdf5
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XY3LEXGP8hI" title="Simulate SoArm101 by LeIsaac (1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

After entering the IsaacLab window, press the `b` key on your keyboard to start teleoperation. You can then use the specified teleop_device to control the robot in the simulation. If you need to reset the environment after completing your operation, simply press the `r` or `n` key. `r` means resetting the environment and marking the task as failed, while `n` means resetting the environment and marking the task as successful.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XkgBY4aa8AE" title="Teleoperate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Dataset Replay

After teleoperation, you can replay the collected dataset in the simulation environment using the following script:

```bash
python scripts/environments/teleoperation/replay.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --dataset_file=./datasets/dataset.hdf5 \
    --episode_index=0
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/C6KHxKRsWx0" title="Simulate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Data Conversion

Collected teleoperation data is stored in HDF5 format in the specified directory. If using this data to train a proxy model, the dataset must be converted to LeRobot-compatible format using LeIsaac's conversion scripts.

This script must be executed within the LeRobot virtual environment. Please create a new LeRobot environment by following the steps in this [wiki](https://wiki.seeedstudio.com/lerobot_so100m_new/#install-lerobot).

```bash
cd ..
git clone https://github.com/huggingface/lerobot.git
cd lerobot
conda create -y -n lerobot python=3.10
conda activate lerobot
pip install -e .
```

Then, we can modify the parameters in the script and run the following command:

```bash
cd ../leisaac
python scripts/convert/isaaclab2lerobot.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/data_conversion.png" />
</div>

:::note
If you modified the dataset storage path during data collection, you must update the corresponding path in the conversion script prior to execution.
:::

After the program completes execution, the converted dataset can be found at: `~/.cache/huggingface/lerobot/`.

We can also inspect the converted data using LeRobot's built-in dataset visualization toolkit.

```bash
cd ../lerobot
python -m lerobot.scripts.visualize_dataset --repo-id EverNorif/so101_test_orange_pick  --episode-index 0
```

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/LPSxPMoP-pk" title="Simulate SoArm101 by LeIsaac (2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Policy Training

In this wiki, we'll fine-tune NVIDIA Isaac GR00T N1.5. Let's begin by setting up the Isaac-GR00T virtual environment:

```bash
cd ..
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

:::info
The installation of flash-attn involves package compilation, which can be extremely slow. It is recommended to [download](https://github.com/Dao-AILab/flash-attention/releases/tag/v2.7.1.post4) the precompiled package version matching your system environment and install it locally using the command: pip install ./package_name.
:::

Run the following command in terminal to launch training:

```bash
cd <path-to-Isaac-GR00T>
cp ./getting_started/examples/so100_dualcam__modality.json ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick/meta/modality.json
python scripts/gr00t_finetune.py \
   --dataset-path ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --batch_size 2
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/train.png" />
</div>

## Policy Inference

At this stage, we can deploy our fine-tuned NVIDIA Isaac GR00T N1.5 model to control the SO-ARM101 robotic arm in Isaac Lab.
The deployment architecture of Isaac-GR00T adopts a decoupled design between the inference endpoint and control endpoint:

- Inference Endpoint (Server): Dedicated solely to executing model inference tasks.
- Control Endpoint (Client): Responsible for acquiring robotic arm states and orchestrating motion control.

**Server**
Open a new terminal window and run:

```bash
conda activate gr00t
cd <path-to-Isaac-GR00T>
python scripts/inference_service.py --server --model_path  ./so101-orange-checkpoints/checkpoint-10000 --embodiment_tag new_embodiment --data_config so100_dualcam --port 5555
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/server.png" />
</div>

**Client**
Open a new terminal window and run:

```bash
conda activate leisaac
cd <path-to-leisaac>
python scripts/evaluation/policy_inference.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --policy_type=gr00tn1.5 \
    --policy_host=localhost \
    --policy_port=5555 \
    --policy_timeout_ms=5000 \
    --policy_action_horizon=16 \
    --policy_language_instruction="Pick up the orange and place it on the plate" \
    --device=cuda \
    --enable_cameras
```

:::note
If you encounter ZMQ-related errors, run `pip install pyzmq` to resolve them.
:::

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/GRzFK7o3lOQ" title="Simulate SoArm101 by LeIsaac (3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The final trained model failed to control the SOArm101 robotic arm to pick the orange. This is because I only collected three sets of data during the experiment. If more data could be gathered, the model's accuracy would be significantly improved!

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
