---
description: This wiki provides a step-by-step guide to use Isaac ROS AprilTag.
title: Isaac ROS AprilTag
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /isaac_ros_apriltag
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# Isaac ROS AprilTag  

## Prerequisites  
Before deploying AprilTag, ensure that the Isaac ROS basic environment has been successfully set up on your reComputer [Installation Guide](/install_isaacros). If ROS2 is not installed, refer to [this document](/install_ros2_humble).  

### Isaac ROS AprilTag Package Topics  
**Subscribed Topics:**  

| ROS Topic       | Interface                  | Description                     |  
|-----------------|----------------------------|---------------------------------|  
| image         | sensor_msgs/Image        | Input camera stream.            |  
| camera_info   | sensor_msgs/CameraInfo   | Input camera intrinsics stream. |  

**Published Topics:**  

| ROS Topic          | Type                                              | Description                                      |  
|--------------------|---------------------------------------------------|--------------------------------------------------|  
| tag_detections   | isaac_ros_apriltag_interfaces/AprilTagDetectionArray | Array of AprilTag detection messages.           |  
| tf              | tf2_msgs/TFMessage                             | Poses of detected AprilTags (TagFamily:ID) relative to the camera's frame_id. |  


## 1. Isaac ROS AprilTag Environment Setup  

### Create Workspace (Skip if already done)  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### Clone Packages and ROS Bag Data  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_apriltag.git
cd ${ISAAC_ROS_WS}/src/isaac_ros_apriltag && \
  git lfs pull -X "" -I "resources/rosbags/quickstart.bag"
```

### Enter Docker Container  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```


## 2. Testing with ROS Bag Data  

### Install AprilTag Package (Inside Docker)  
```bash
sudo apt-get install -y ros-humble-isaac-ros-apriltag
```

### Launch AprilTag Node  
```bash
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### Open New Terminal (Inside Docker)  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

### Play ROS Bag  
```bash
ros2 bag play --loop src/isaac_ros_apriltag/resources/rosbags/quickstart.bag
```

### Visualize in RViz2  
Open RViz2 in a local terminal and add **Image** and **TF** components:  
```bash
ros2 run rviz2 rviz2
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/1.png" />
</div>



## 3. Testing with USB Camera  
Ensure ROS2 is installed locally.  

### Create USB Camera Workspace  
```bash
cd ~/
mkdir -p usbcam/src
cd usbcam/src
```

### Clone and Build `usb_cam` Package  
```bash
git clone https://github.com/ros-drivers/usb_cam.git
cd ..
colcon build
echo "source ~/usbcam/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### Check Camera Format  
Connect the camera and verify its device path (e.g., `/dev/video*`). Test with:  
```bash
cd ~/usbcam
ros2 run usb_cam usb_cam_node_exe
```

<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/2.png" />
</div>


#### Supported Pixel Formats:  
`rgb8`, `yuyv`, `yuyv2rgb`, `uyvy`, `uyvy2rgb`, `m4202rgb`, `mono8`, `mono16`, `y102mono8`, `raw_mjpeg`  

### Configure Camera  
1. Modify `pixel_format` in `/usbcam/src/usb_cam/config/params_1.yaml`.  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/3.png" />
</div>

2. Adjust `frame_id` (default: `camera`).  
3. Remap topic names in `/usbcam/src/usb_cam/launch/camera_config.py` (lines 58 and 62) to match AprilTag requirements (`/image` and `/camera_info`).  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/4.png" />
</div>

### Rebuild and Launch Camera  
```bash
cd ~/usbcam
colcon build
ros2 launch usb_cam camera.launch.py
```

### Run AprilTag Node (Inside Docker)  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### Visualize in RViz2  
Set **Fixed Frame** to the camera’s `frame_id`, add an **Image** component subscribed to `/image`, and enable **TF**.  
*Note: This test uses a 200mm × 200mm AprilTag.*  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/5.png" />
</div>

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