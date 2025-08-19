---
description: 本文档重点介绍如何使用 J501 承载板和 GMSL 扩展板，在搭载 Jetson AGX Orin 的多摄像头系统中执行 AI 视频分析任务。首先，列出了所需的硬件模块和必要的 JetPack SDK。接着，详细说明了 GMSL 摄像头的配置过程，包括创建和设置配置脚本以及 systemd 服务。然后，展示了如何快速部署 YOLO11 实现八个摄像头的实时目标检测，包括下载和安装必要的软件包、导出 TensorRT 模型以及运行 Python 脚本。之后，解释了如何安装 VGGT 环境并运行脚本以实现八个摄像头的 3D 重建，同时提到鱼眼摄像头畸变对结果的影响。最后，提供了有用的资源以及多种技术支持和产品讨论渠道。
title: 基于 Jetson AGX Orin 的多 GMSL 摄像头实时目标检测与 3D 重建
keywords:
  - j501 承载板
  - j501
  - 多摄像头
  - GMSL 摄像头
  - 计算机视觉
  - 应用
  - Jetson AGX Orin
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/yolo1.webp
slug: /cn/multiple_cameras_with_jetson
last_update:
  date: 06/30/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
本文档将使用 reServer 工业级 J501 承载板和 GMSL 扩展板，介绍如何在多摄像头系统中部署实时目标检测和 3D 重建。
</div>

<div class="table-center">
  <table align="center">
    <tr>
        <th>NVIDIA Jetson AGX Orin 模块</th>
        <th>reServer 工业级 J501 承载板</th>
        <th>reServer 工业级 J501-GMSL 扩展板</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/9/0/900-13701-0040-000-3t_2.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_2.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991855-reserver-industrial-j501-gmsl-extension-board-45font.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
  </table>
</div>

## 前置条件
- NVIDIA Jetson AGX Orin 模块 32GB/64GB
- 刷写最新的 [JetPack 6.2 SDK](https://wiki.seeedstudio.com/cn/reserver_j501_getting_started/#prepare-the-jetpack-image)（支持 GMSL 扩展板）
- reServer 工业 J501 载板
- reServer 工业 J501-GMSL 扩展板
- [GMSL 摄像头](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

## GMSL 摄像头配置
## 硬件连接
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/cam_c.jpg"/>
</div>

<div style={{ textAlign: "justify" }}>
为了从 GMSL 摄像头获取输入，我们需要首先配置串行器和解串器的格式。将它们添加到系统启动脚本中，以便每次系统启动时自动配置。
</div>

**步骤 1.** 创建配置脚本：

```bash
touch media-setup.sh
```
**步骤 2.** 将以下内容粘贴到 media-setup.sh 文件中：
```bash
#!/bin/bash
# 设置串行器和解串器格式
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'

media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
```

**步骤 3.** 为 media-setup.sh 添加执行权限：

```bash
chmod +x media-setup.sh
```
**步骤 4.** 创建一个 systemd 服务：

```bash
sudo vim /etc/systemd/system/mediactl-init.service 

# 添加以下内容：
[Unit]
Description=Set media-ctl formats at boot
After=multi-user.target

[Service]
Type=oneshot
ExecStart=/usr/local/bin/media-setup.sh
RemainAfterExit=true

[Install]
WantedBy=multi-user.target
```
**步骤 5.** 保存并退出后，启用该服务：

```bash
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable mediactl-init.service
sudo systemctl start mediactl-init.service
```
**步骤 6.** 重启设备并检查服务是否正在运行：

```bash
sudo systemctl status mediactl-init.service

# 使用以下命令快速启动摄像头并打开窗口显示视频流：
gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video1  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video2  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video3  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video4  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video5  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video6  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video7  ! xvimagesink -ev 
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/time_speed.gif"/>
</div>

:::info
我们的 GMSL 扩展板支持最多 8 路摄像头视频输入，并提供小于 1ms 的 PTP 时间戳精度，以确保 8 路视频数据流的同步。
:::

## 快速部署 YOLO11 实现八路摄像头的实时目标检测

<div style={{ textAlign: "justify" }}>
YOLOv11 是由 Ultralytics 发布的一款实时目标检测模型，提供了速度、精度和效率的强大平衡。通过改进的架构和训练策略，YOLOv11 在性能和部署灵活性方面超越了之前的版本。它特别适合边缘设备、自动化系统和工业 AI 应用，支持检测、分割和跟踪等任务，具有高度的可靠性。
</div>

### 安装 YOLO11 并运行多摄像头目标检测

**步骤 1.** 下载并安装必要的包：
:::note 
以下软件包适用于 JetPack 6.2 和 CUDA 12.6。
:::

[onnxruntime_gpu-1.22.0-cp310-cp310-linux_aarch64.whl](https://pypi.jetson-ai-lab.dev/jp6/cu126/+f/869/e41abdc35e093/onnxruntime_gpu-1.22.0-cp310-cp310-linux_aarch64.whl#sha256=869e41abdc35e09345876f047fce49267d699df3e44b67c2518b0469739484ff)

[torch-2.7.0-cp310-cp310-linux_aarch64.whl](https://pypi.jetson-ai-lab.dev/jp6/cu126/+f/6ef/f643c0a7acda9/torch-2.7.0-cp310-cp310-linux_aarch64.whl#sha256=6eff643c0a7acda92734cc798338f733ff35c7df1a4434576f5ff7c66fc97319)

[torchvision-0.22.0-cp310-cp310-linux_aarch64.whl](https://pypi.jetson-ai-lab.dev/jp6/cu126/+f/daa/bff3a07259968/torchvision-0.22.0-cp310-cp310-linux_aarch64.whl#sha256=daabff3a0725996886b92e4b5dd143f5750ef4b181b5c7d01371a9185e8f0402)

[yolo11n.pt 预训练权重](https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt)

[yolo11n-seg.pt 预训练权重](https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-seg.pt)

[yolo11n-pose.pt 预训练权重](https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-pose.pt)

```bash
# 使用 pip 安装软件包：
sudo apt update
sudo apt install python3-pip -y
pip install -U pip
pip install onnxruntime_gpu-1.22.0-cp310-cp310-linux_aarch64.whl
pip install torch-2.7.0-cp310-cp310-linux_aarch64.whl
pip install torchvision-0.22.0-cp310-cp310-linux_aarch64.whl
pip install ultralytics
```

导出 TensorRT 模型：

```bash
yolo export model=./models/yolo11n.pt format=engine device=0 half=True dynamic=True
yolo export model=./models/yolo11n-seg.pt format=engine device=0 half=True dynamic=True
yolo export model=./models/yolo11n-pose.pt format=engine device=0 half=True dynamic=True
```

运行以下 Python 脚本可以快速实现对八路摄像头的目标检测：

<details>
<summary> detect.py </summary>

```python
import cv2
import time
import threading
import numpy as np
import torch
from ultralytics import YOLO

device = 'cuda' if torch.cuda.is_available() else 'cpu'
print(f"Using device: {device}")
model_detect = YOLO('./models/yolo11n.engine',task="detect")
model_seg = YOLO('./models/yolo11n-seg.engine',task="segment")
model_pose = YOLO('./models/yolo11n-pose.engine',task="pose")

camera_num = 8
frame_width, frame_height = 320, 240
frames = [np.zeros((frame_height, frame_width, 3), dtype=np.uint8) for _ in range(camera_num)]
locks = [threading.Lock() for _ in range(camera_num)]
running = True

def capture_thread(index):
    cap = cv2.VideoCapture(index)
    p_time = time.time()
    while running:
        detect_way = model_detect
        ret, frame = cap.read()
        frame_resized = cv2.resize(frame, (frame_width, frame_height))
        if index == 4 or index == 5:
            detect_way = model_seg
        if index ==6 or index == 7:
            detect_way = model_pose
        annotated = frame_resized.copy()
        results = detect_way.predict(
        source=frame_resized,
        device=device,
        verbose=False,
        stream=False,
        imgsz=640,
        conf=0.25
        )
        for r in results:
            annotated = r.plot()
        current_time = time.time()
        fps = 1 / (current_time - p_time)
        p_time = current_time
        cv2.putText(annotated, f"FPS: {fps:.2f}", (10, 25),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 255), 1, cv2.LINE_AA)
        
        with locks[index]:
            frames[index] = annotated

    cap.release()

def main():
    global running

    threads = []
    for i in range(camera_num):
        t = threading.Thread(target=capture_thread, args=(i,))
        t.start()
        threads.append(t)

    try:
        while True:
            frame_copy = []
            for i in range(camera_num):
                with locks[i]:
                    frame_copy.append(frames[i].copy())
            row1 = cv2.hconcat(frame_copy[:4])
            row2 = cv2.hconcat(frame_copy[4:8])
            result = cv2.vconcat([row1, row2])
            cv2.imshow("Multi-Camera", result)

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    finally:
        running = False
        for t in threads:
            t.join()
        cv2.destroyAllWindows()

if __name__ == "__main__":
    main()

```
</details>

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/yolo_1.gif"/>
</div>

<div style={{ textAlign: "justify" }}>
J501 配备了 NVIDIA AGX Orin 模块，具有极高的计算能力。它可以处理多达 8 路摄像头，并加载三种不同检测任务的模型，从而实现实时目标检测。
</div>

## 快速部署 VGGT 用于 3D 重建

<div style={{ textAlign: "justify" }}>
VGGT 是一个为复杂环境中的 3D 理解和推理设计的视觉-语言模型。它结合了多视角图像和语言输入，以生成详细的 3D 场景表示，并回答关于环境的空间或语义问题。基于 Transformer 架构，VGGT 在视觉定位、3D 对象定位和语言引导导航等任务中表现出色，非常适合机器人和具身 AI 应用。
</div>

### 安装 VGGT 环境并使用多摄像头运行 3D 重建

```bash
git clone https://github.com/facebookresearch/vggt.git
cd vggt
pip install -r requirements.txt
pip install -r requirements_demo.txt
```
运行以下脚本快速对八个摄像头进行 3D 重建：

<details>
<summary> demo.py </summary>

```python
import os
import glob
import time
import threading
import argparse
from typing import List, Optional

import numpy as np
import torch
from tqdm.auto import tqdm
import viser
import viser.transforms as viser_tf
import cv2
from PIL import Image
from defisheye import Defisheye

try:
    import onnxruntime
except ImportError:
    print("onnxruntime 未找到。天空分割可能无法工作。")

from visual_util import segment_sky, download_file_from_url
from vggt.models.vggt import VGGT
from vggt.utils.load_fn import load_and_preprocess_images
from vggt.utils.geometry import closed_form_inverse_se3, unproject_depth_map_to_point_map
from vggt.utils.pose_enc import pose_encoding_to_extri_intri


def viser_wrapper(
    pred_dict: dict,
    port: int = 8080,
    init_conf_threshold: float = 50.0,  # 表示百分比（例如，50 表示过滤掉最低 50%）
    use_point_map: bool = False,
    background_mode: bool = False,
    mask_sky: bool = False,
    image_folder: str = None,
):
    """
    使用 viser 可视化预测的 3D 点和摄像头位姿。

    参数:
        pred_dict (dict):
            {
                "images": (S, 3, H, W)   - 输入图像,
                "world_points": (S, H, W, 3),
                "world_points_conf": (S, H, W),
                "depth": (S, H, W, 1),
                "depth_conf": (S, H, W),
                "extrinsic": (S, 3, 4),
                "intrinsic": (S, 3, 3),
            }
        port (int): viser 服务器的端口号。
        init_conf_threshold (float): 初始过滤掉低置信度点的百分比。
        use_point_map (bool): 是否可视化 world_points 或使用基于深度的点。
        background_mode (bool): 是否在后台线程中运行服务器。
        mask_sky (bool): 是否应用天空分割以过滤掉天空点。
        image_folder (str): 包含输入图像的文件夹路径。
    """
    print(f"在端口 {port} 上启动 viser 服务器")

    server = viser.ViserServer(host="0.0.0.0", port=port)
    server.gui.configure_theme(titlebar_content=None, control_layout="collapsible")

    # 解包预测字典
    images = pred_dict["images"]  # (S, 3, H, W)
    world_points_map = pred_dict["world_points"]  # (S, H, W, 3)
    conf_map = pred_dict["world_points_conf"]  # (S, H, W)

    depth_map = pred_dict["depth"]  # (S, H, W, 1)
    depth_conf = pred_dict["depth_conf"]  # (S, H, W)

    extrinsics_cam = pred_dict["extrinsic"]  # (S, 3, 4)
    intrinsics_cam = pred_dict["intrinsic"]  # (S, 3, 3)

    # 如果不使用预计算的点云，则从深度计算世界点
    if not use_point_map:
        world_points = unproject_depth_map_to_point_map(depth_map, extrinsics_cam, intrinsics_cam)
        conf = depth_conf
    else:
        world_points = world_points_map
        conf = conf_map

    # 如果启用了天空分割，则应用
    if mask_sky and image_folder is not None:
        conf = apply_sky_segmentation(conf, image_folder)

    # 将图像从 (S, 3, H, W) 转换为 (S, H, W, 3)
    # 然后将所有内容展平以生成点云
    colors = images.transpose(0, 2, 3, 1)  # 现在是 (S, H, W, 3)
    S, H, W, _ = world_points.shape

    # 展平
    points = world_points.reshape(-1, 3)
    colors_flat = (colors.reshape(-1, 3) * 255).astype(np.uint8)
    conf_flat = conf.reshape(-1)

    cam_to_world_mat = closed_form_inverse_se3(extrinsics_cam)  # 通常形状为 (S, 4, 4)
    # 为方便起见，我们仅存储 (3,4) 部分
    cam_to_world = cam_to_world_mat[:, :3, :]

    # 计算场景中心并重新居中
    scene_center = np.mean(points, axis=0)
    points_centered = points - scene_center
    cam_to_world[..., -1] -= scene_center

    # 存储帧索引以便按帧过滤
    frame_indices = np.repeat(np.arange(S), H * W)

    # 构建 viser GUI
    gui_show_frames = server.gui.add_checkbox("显示摄像头", initial_value=True)

    # 现在滑块表示要过滤掉的点的百分比
    gui_points_conf = server.gui.add_slider(
        "置信度百分比", min=0, max=100, step=0.1, initial_value=init_conf_threshold
    )

    gui_frame_selector = server.gui.add_dropdown(
        "显示帧中的点", options=["全部"] + [str(i) for i in range(S)], initial_value="全部"
    )

    # 创建主点云句柄
    # 计算给定百分比的阈值
    init_threshold_val = np.percentile(conf_flat, init_conf_threshold)
    init_conf_mask = (conf_flat >= init_threshold_val) & (conf_flat > 0.1)
    point_cloud = server.scene.add_point_cloud(
        name="viser_pcd",
        points=points_centered[init_conf_mask],
        colors=colors_flat[init_conf_mask],
        point_size=0.001,
        point_shape="circle",
    )

    # 我们将存储对帧和视锥的引用，以便切换可见性
    frames: List[viser.FrameHandle] = []
    frustums: List[viser.CameraFrustumHandle] = []

    def visualize_frames(extrinsics: np.ndarray, images_: np.ndarray) -> None:
        """
        将摄像头帧和视锥添加到场景中。
        extrinsics: (S, 3, 4)
        images_:    (S, 3, H, W)
        """
        # 清除任何现有的帧或视锥
        for f in frames:
            f.remove()
        frames.clear()
        for fr in frustums:
            fr.remove()
        frustums.clear()

        # 可选地附加一个回调，将视点设置为选定的摄像头
        def attach_callback(frustum: viser.CameraFrustumHandle, frame: viser.FrameHandle) -> None:
            @frustum.on_click
            def _(_) -> None:
                for client in server.get_clients().values():
                    client.camera.wxyz = frame.wxyz
                    client.camera.position = frame.position

        img_ids = range(S)
        for img_id in tqdm(img_ids):
            cam2world_3x4 = extrinsics[img_id]
            T_world_camera = viser_tf.SE3.from_matrix(cam2world_3x4)

            # 添加一个小的帧轴
            frame_axis = server.scene.add_frame(
                f"frame_{img_id}",
                wxyz=T_world_camera.rotation().wxyz,
                position=T_world_camera.translation(),
                axes_length=0.05,
                axes_radius=0.002,
                origin_radius=0.002,
            )
            frames.append(frame_axis)

            # 转换图像以用于视锥
            img = images_[img_id]  # 形状 (3, H, W)
            img = (img.transpose(1, 2, 0) * 255).astype(np.uint8)
            h, w = img.shape[:2]

            # 如果需要从内参中获取正确的 FOV，可以执行以下操作：
            # fx = intrinsics_cam[img_id, 0, 0]
            # fov = 2 * np.arctan2(h/2, fx)
            # 为了演示，我们选择一个简单的近似 FOV：
            fy = 1.1 * h
            fov = 2 * np.arctan2(h / 2, fy)

            # 添加视锥
            frustum_cam = server.scene.add_camera_frustum(
                f"frame_{img_id}/frustum", fov=fov, aspect=w / h, scale=0.05, image=img, line_width=1.0
            )
            frustums.append(frustum_cam)
            attach_callback(frustum_cam, frame_axis)

    def update_point_cloud() -> None:
        """根据当前 GUI 选择更新点云。"""
        # 在此处根据当前百分比计算阈值
        current_percentage = gui_points_conf.value
        threshold_val = np.percentile(conf_flat, current_percentage)

        print(f"阈值绝对值: {threshold_val}, 百分比: {current_percentage}%")

        conf_mask = (conf_flat >= threshold_val) & (conf_flat > 1e-5)

        if gui_frame_selector.value == "全部":
            frame_mask = np.ones_like(conf_mask, dtype=bool)
        else:
            selected_idx = int(gui_frame_selector.value)
            frame_mask = frame_indices == selected_idx

        combined_mask = conf_mask & frame_mask
        point_cloud.points = points_centered[combined_mask]
        point_cloud.colors = colors_flat[combined_mask]

    @gui_points_conf.on_update
    def _(_) -> None:
        update_point_cloud()

    @gui_frame_selector.on_update
    def _(_) -> None:
        update_point_cloud()

    @gui_show_frames.on_update
    def _(_) -> None:
        """切换摄像头帧和视锥的可见性。"""
        for f in frames:
            f.visible = gui_show_frames.value
        for fr in frustums:
            fr.visible = gui_show_frames.value

    # 将摄像头帧添加到场景中
    visualize_frames(cam_to_world, images)

    print("启动 viser 服务器...")
    # 如果 background_mode 为 True，则生成一个守护线程，以便主线程可以继续。
    if background_mode:

        def server_loop():
            while True:
                time.sleep(0.001)

        thread = threading.Thread(target=server_loop, daemon=True)
        thread.start()
    else:
        while True:
            time.sleep(0.01)

    return server


# 天空分割的辅助函数


def apply_sky_segmentation(conf: np.ndarray, image_folder: str) -> np.ndarray:
    """
    对置信度分数应用天空分割。

    参数:
        conf (np.ndarray): 形状为 (S, H, W) 的置信度分数
        image_folder (str): 包含输入图像的文件夹路径

    返回:
        np.ndarray: 应用天空区域掩码后的更新置信度分数
    """
    S, H, W = conf.shape
    sky_masks_dir = image_folder.rstrip("/") + "_sky_masks"
    os.makedirs(sky_masks_dir, exist_ok=True)

    # 如果 skyseg.onnx 不存在，则下载
    if not os.path.exists("skyseg.onnx"):
        print("正在下载 skyseg.onnx...")
        download_file_from_url("https://huggingface.co/JianyuanWang/skyseg/resolve/main/skyseg.onnx", "skyseg.onnx")

    skyseg_session = onnxruntime.InferenceSession("skyseg.onnx")
    image_files = sorted(glob.glob(os.path.join(image_folder, "*")))
    sky_mask_list = []

    print("生成天空掩码...")
    for i, image_path in enumerate(tqdm(image_files[:S])):  # 限制为批次中的图像数量
        image_name = os.path.basename(image_path)
        mask_filepath = os.path.join(sky_masks_dir, image_name)

        if os.path.exists(mask_filepath):
            sky_mask = cv2.imread(mask_filepath, cv2.IMREAD_GRAYSCALE)
        else:
            sky_mask = segment_sky(image_path, skyseg_session, mask_filepath)

        # 如果需要，调整掩码大小以匹配 H×W
        if sky_mask.shape[0] != H or sky_mask.shape[1] != W:
            sky_mask = cv2.resize(sky_mask, (W, H))

        sky_mask_list.append(sky_mask)

    # 将列表转换为形状为 S×H×W 的 numpy 数组
    sky_mask_array = np.array(sky_mask_list)
    # 将天空掩码应用于置信度分数
    sky_mask_binary = (sky_mask_array > 0.1).astype(np.float32)
    conf = conf * sky_mask_binary

    print("天空分割成功应用")
    return conf


parser = argparse.ArgumentParser(description="使用 viser 进行 3D 可视化的 VGGT 演示")
parser.add_argument(
    "--image_folder", type=str, default="examples/kitchen/images/", help="包含图像的文件夹路径"
)
parser.add_argument("--use_point_map", action="store_true", help="使用点云而不是基于深度的点")
parser.add_argument("--background_mode", action="store_true", help="在后台模式下运行 viser 服务器")
parser.add_argument("--port", type=int, default=8080, help="viser 服务器的端口号")
parser.add_argument(
    "--conf_threshold", type=float, default=25.0, help="初始过滤掉低置信度点的百分比"
)
parser.add_argument("--mask_sky", action="store_true", help="应用天空分割以过滤掉天空点")


def main():
    """
    使用 viser 进行 3D 可视化的 VGGT 演示的主函数。

    此函数：
    1. 加载 VGGT 模型
    2. 处理来自指定文件夹的输入图像
    3. 运行推理以生成 3D 点和摄像头位姿
    4. 可选地应用天空分割以过滤掉天空点
    5. 使用 viser 可视化结果

    命令行参数：
    --image_folder: 包含输入图像的文件夹路径
    --use_point_map: 使用点云而不是基于深度的点
    --background_mode: 在后台模式下运行 viser 服务器
    --port: viser 服务器的端口号
    --conf_threshold: 初始过滤掉低置信度点的百分比
    --mask_sky: 应用天空分割以过滤掉天空点
    """
    args = parser.parse_args()
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"使用设备: {device}")

    print("初始化并加载 VGGT 模型...")
    # model = VGGT.from_pretrained("facebook/VGGT-1B")

    model = VGGT()
    _URL = "https://huggingface.co/facebook/VGGT-1B/resolve/main/model.pt"
    model.load_state_dict(torch.hub.load_state_dict_from_url(_URL))

    model.eval()
    model = model.to(device)
    width=640
    height=480
    images = []
    camera_num = 8
    caps = [cv2.VideoCapture(i) for i in range(camera_num)]
    for cap in caps:
        ret, img = cap.read()
        img = cv2.resize(img, (width, height))
        obj = Defisheye(img)
        img = obj.convert(outfile=None)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(img)
        images.append(img)
    images_tensor = load_and_preprocess_images(images).to(device)

    images = load_and_preprocess_images(images).to(device)
    print(f"预处理后的图像形状: {images.shape}")
    
    print("运行推理...")
    dtype = torch.bfloat16 if torch.cuda.get_device_capability()[0] >= 8 else torch.float16

    with torch.no_grad():
        with torch.cuda.amp.autocast(dtype=dtype):
            predictions = model(images)

    print("将位姿编码转换为外参和内参矩阵...")
    extrinsic, intrinsic = pose_encoding_to_extri_intri(predictions["pose_enc"], images.shape[-2:])
    predictions["extrinsic"] = extrinsic
    predictions["intrinsic"] = intrinsic

    print("处理模型输出...")
    for key in predictions.keys():
        if isinstance(predictions[key], torch.Tensor):
            predictions[key] = predictions[key].cpu().numpy().squeeze(0)  # 移除批次维度并转换为 numpy

    if args.use_point_map:
        print("从点云可视化 3D 点")
    else:
        print("通过摄像头从深度图反投影可视化 3D 点")

    if args.mask_sky:
        print("启用天空分割 - 将过滤掉天空点")

    print("启动 viser 可视化...")

    viser_server = viser_wrapper(
        predictions,
        port=args.port,
        init_conf_threshold=args.conf_threshold,
        use_point_map=args.use_point_map,
        background_mode=args.background_mode,
        mask_sky=args.mask_sky,
        image_folder=args.image_folder,
    )
    print("可视化完成")


if __name__ == "__main__":
    main()
```

</details>

:::info
运行此 Python 脚本并打开浏览器访问 Viser 服务器。加载 VGGT 模型可能需要稍长时间，请耐心等待。
如果您在远程服务器上运行此脚本，请将 `localhost` 替换为服务器的 IP 地址。
http://`localhost`:8080
:::
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/server.png"/>
</div>

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/3D_r_1080.gif"/>
</div>

:::note
由于我们使用的摄像头是畸变严重的鱼眼摄像头，经过畸变校正后的图像质量较差，这会影响最终的 3D 建模效果。如果您使用畸变较小且图像质量更高的摄像头，效果会有所改善。
:::

## 资源

- [YOLOv11 Github](https://github.com/ultralytics/ultralytics)
- [VGGT: Visual Geometry Grounded Transformer](https://vgg-t.github.io/)



## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>